/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.baremetal.v1alpha';

/** A Standard Image resource. */
export interface StandardImage {
    /** ID of the standard image. */
    id: string;
    /** Name of the standard image. */
    name: string;
    /** Folder of standard image. */
    folderId: string;
}

const baseStandardImage: object = { id: '', name: '', folderId: '' };

export const StandardImage: {
    encode(message: StandardImage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StandardImage;
    fromJSON(object: any): StandardImage;
    toJSON(message: StandardImage): unknown;
    fromPartial<I extends Exact<DeepPartial<StandardImage>, I>>(object: I): StandardImage;
} = {
    encode(message: StandardImage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.folderId !== '') {
            writer.uint32(26).string(message.folderId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StandardImage {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStandardImage } as StandardImage;
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
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StandardImage {
        const message = { ...baseStandardImage } as StandardImage;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        return message;
    },

    toJSON(message: StandardImage): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StandardImage>, I>>(object: I): StandardImage {
        const message = { ...baseStandardImage } as StandardImage;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.folderId = object.folderId ?? '';
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
