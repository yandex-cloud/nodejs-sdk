/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.baremetal.v1alpha';

/** DHCP options for a subnet. */
export interface DhcpOptions {
    /** Start IP address of the DHCP range (inclusive). */
    startIp: string;
    /** End IP address of the DHCP range (inclusive). */
    endIp: string;
}

const baseDhcpOptions: object = { startIp: '', endIp: '' };

export const DhcpOptions = {
    encode(message: DhcpOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.startIp !== '') {
            writer.uint32(18).string(message.startIp);
        }
        if (message.endIp !== '') {
            writer.uint32(26).string(message.endIp);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DhcpOptions {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDhcpOptions } as DhcpOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.startIp = reader.string();
                    break;
                case 3:
                    message.endIp = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DhcpOptions {
        const message = { ...baseDhcpOptions } as DhcpOptions;
        message.startIp =
            object.startIp !== undefined && object.startIp !== null ? String(object.startIp) : '';
        message.endIp =
            object.endIp !== undefined && object.endIp !== null ? String(object.endIp) : '';
        return message;
    },

    toJSON(message: DhcpOptions): unknown {
        const obj: any = {};
        message.startIp !== undefined && (obj.startIp = message.startIp);
        message.endIp !== undefined && (obj.endIp = message.endIp);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DhcpOptions>, I>>(object: I): DhcpOptions {
        const message = { ...baseDhcpOptions } as DhcpOptions;
        message.startIp = object.startIp ?? '';
        message.endIp = object.endIp ?? '';
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
