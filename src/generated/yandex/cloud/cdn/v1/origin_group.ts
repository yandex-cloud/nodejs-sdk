/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Origin } from '../../../../yandex/cloud/cdn/v1/origin';

export const protobufPackage = 'yandex.cloud.cdn.v1';

/** Origin group parameters. For details about the concept, see [documentation](/docs/cdn/concepts/origins#groups). */
export interface OriginGroup {
    /** ID of the origin group. Generated at creation time. */
    id: number;
    /** ID of the folder that the origin group belongs to. */
    folderId: string;
    /** Name of the origin group. */
    name: string;
    /**
     * This option have two possible conditions:
     * true - the option is active. In case the origin responds with 4XX or 5XX codes,
     *        use the next origin from the list.
     * false - the option is disabled.
     */
    useNext: boolean;
    /** List of origins. */
    origins: Origin[];
}

const baseOriginGroup: object = { id: 0, folderId: '', name: '', useNext: false };

export const OriginGroup = {
    encode(message: OriginGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== 0) {
            writer.uint32(8).int64(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.useNext === true) {
            writer.uint32(32).bool(message.useNext);
        }
        for (const v of message.origins) {
            Origin.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OriginGroup {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOriginGroup } as OriginGroup;
        message.origins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.useNext = reader.bool();
                    break;
                case 5:
                    message.origins.push(Origin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OriginGroup {
        const message = { ...baseOriginGroup } as OriginGroup;
        message.id = object.id !== undefined && object.id !== null ? Number(object.id) : 0;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.useNext =
            object.useNext !== undefined && object.useNext !== null
                ? Boolean(object.useNext)
                : false;
        message.origins = (object.origins ?? []).map((e: any) => Origin.fromJSON(e));
        return message;
    },

    toJSON(message: OriginGroup): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.useNext !== undefined && (obj.useNext = message.useNext);
        if (message.origins) {
            obj.origins = message.origins.map((e) => (e ? Origin.toJSON(e) : undefined));
        } else {
            obj.origins = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OriginGroup>, I>>(object: I): OriginGroup {
        const message = { ...baseOriginGroup } as OriginGroup;
        message.id = object.id ?? 0;
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
        message.useNext = object.useNext ?? false;
        message.origins = object.origins?.map((e) => Origin.fromPartial(e)) || [];
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
