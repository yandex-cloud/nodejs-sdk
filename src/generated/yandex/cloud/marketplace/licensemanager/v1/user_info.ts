/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.marketplace.licensemanager.v1';

export interface UserInfo {
    /** ID, reserved field */
    id: string;
    /** Name of legal person */
    name: string;
    /** INN of legal person */
    inn: string;
    /** KPP of legal person */
    kpp: string;
}

const baseUserInfo: object = { id: '', name: '', inn: '', kpp: '' };

export const UserInfo = {
    encode(message: UserInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.inn !== '') {
            writer.uint32(26).string(message.inn);
        }
        if (message.kpp !== '') {
            writer.uint32(34).string(message.kpp);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UserInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserInfo } as UserInfo;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.inn = reader.string();
                    break;
                case 4:
                    message.kpp = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UserInfo {
        const message = { ...baseUserInfo } as UserInfo;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.inn = object.inn !== undefined && object.inn !== null ? String(object.inn) : '';
        message.kpp = object.kpp !== undefined && object.kpp !== null ? String(object.kpp) : '';
        return message;
    },

    toJSON(message: UserInfo): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.inn !== undefined && (obj.inn = message.inn);
        message.kpp !== undefined && (obj.kpp = message.kpp);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UserInfo>, I>>(object: I): UserInfo {
        const message = { ...baseUserInfo } as UserInfo;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.inn = object.inn ?? '';
        message.kpp = object.kpp ?? '';
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
