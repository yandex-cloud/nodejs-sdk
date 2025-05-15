/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.compute.v1';

/**
 * Represents host resources.
 * Note: Platform can use hosts with different number of memory and cores.
 * TODO: Do we need sockets here?
 */
export interface HostType {
    /** Unique type identifier. */
    id: string;
    /** Total number of cores available for instances. */
    cores: number;
    /** Ammount of memory available for instances. */
    memory: number;
    /** Number of local disks available for instances */
    disks: number;
    /** Size of each local disk */
    diskSize: number;
}

const baseHostType: object = { id: '', cores: 0, memory: 0, disks: 0, diskSize: 0 };

export const HostType = {
    encode(message: HostType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.cores !== 0) {
            writer.uint32(16).int64(message.cores);
        }
        if (message.memory !== 0) {
            writer.uint32(24).int64(message.memory);
        }
        if (message.disks !== 0) {
            writer.uint32(32).int64(message.disks);
        }
        if (message.diskSize !== 0) {
            writer.uint32(40).int64(message.diskSize);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HostType {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHostType } as HostType;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.cores = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.memory = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.disks = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.diskSize = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HostType {
        const message = { ...baseHostType } as HostType;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.cores =
            object.cores !== undefined && object.cores !== null ? Number(object.cores) : 0;
        message.memory =
            object.memory !== undefined && object.memory !== null ? Number(object.memory) : 0;
        message.disks =
            object.disks !== undefined && object.disks !== null ? Number(object.disks) : 0;
        message.diskSize =
            object.diskSize !== undefined && object.diskSize !== null ? Number(object.diskSize) : 0;
        return message;
    },

    toJSON(message: HostType): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.cores !== undefined && (obj.cores = Math.round(message.cores));
        message.memory !== undefined && (obj.memory = Math.round(message.memory));
        message.disks !== undefined && (obj.disks = Math.round(message.disks));
        message.diskSize !== undefined && (obj.diskSize = Math.round(message.diskSize));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HostType>, I>>(object: I): HostType {
        const message = { ...baseHostType } as HostType;
        message.id = object.id ?? '';
        message.cores = object.cores ?? 0;
        message.memory = object.memory ?? 0;
        message.disks = object.disks ?? 0;
        message.diskSize = object.diskSize ?? 0;
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
