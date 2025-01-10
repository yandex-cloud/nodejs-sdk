/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.cic.v1';

/** A PointOfPresence resource. */
export interface PointOfPresence {
    $type: 'yandex.cloud.cic.v1.PointOfPresence';
    /** ID of the pointOfPresence. */
    id: string;
    /** ID of the region that the pointOfPresence belongs to. */
    regionId: string;
}

const basePointOfPresence: object = {
    $type: 'yandex.cloud.cic.v1.PointOfPresence',
    id: '',
    regionId: '',
};

export const PointOfPresence = {
    $type: 'yandex.cloud.cic.v1.PointOfPresence' as const,

    encode(message: PointOfPresence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.regionId !== '') {
            writer.uint32(50).string(message.regionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PointOfPresence {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePointOfPresence } as PointOfPresence;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 6:
                    message.regionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PointOfPresence {
        const message = { ...basePointOfPresence } as PointOfPresence;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.regionId =
            object.regionId !== undefined && object.regionId !== null
                ? String(object.regionId)
                : '';
        return message;
    },

    toJSON(message: PointOfPresence): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.regionId !== undefined && (obj.regionId = message.regionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PointOfPresence>, I>>(object: I): PointOfPresence {
        const message = { ...basePointOfPresence } as PointOfPresence;
        message.id = object.id ?? '';
        message.regionId = object.regionId ?? '';
        return message;
    },
};

messageTypeRegistry.set(PointOfPresence.$type, PointOfPresence);

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
