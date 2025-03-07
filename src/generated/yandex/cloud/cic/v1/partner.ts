/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.cic.v1';

/** A Partner resource. */
export interface Partner {
    /** ID of the partner. */
    id: string;
    /** ID of the region that the partner belongs to. */
    regionId: string;
    /** Status of the partner. */
    status: Partner_Status;
}

export enum Partner_Status {
    STATUS_UNSPECIFIED = 0,
    UP = 1,
    DOWN = 2,
    UNRECOGNIZED = -1,
}

export function partner_StatusFromJSON(object: any): Partner_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Partner_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'UP':
            return Partner_Status.UP;
        case 2:
        case 'DOWN':
            return Partner_Status.DOWN;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Partner_Status.UNRECOGNIZED;
    }
}

export function partner_StatusToJSON(object: Partner_Status): string {
    switch (object) {
        case Partner_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Partner_Status.UP:
            return 'UP';
        case Partner_Status.DOWN:
            return 'DOWN';
        default:
            return 'UNKNOWN';
    }
}

const basePartner: object = { id: '', regionId: '', status: 0 };

export const Partner = {
    encode(message: Partner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.regionId !== '') {
            writer.uint32(50).string(message.regionId);
        }
        if (message.status !== 0) {
            writer.uint32(88).int32(message.status);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Partner {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePartner } as Partner;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 6:
                    message.regionId = reader.string();
                    break;
                case 11:
                    message.status = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Partner {
        const message = { ...basePartner } as Partner;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.regionId =
            object.regionId !== undefined && object.regionId !== null
                ? String(object.regionId)
                : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? partner_StatusFromJSON(object.status)
                : 0;
        return message;
    },

    toJSON(message: Partner): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.regionId !== undefined && (obj.regionId = message.regionId);
        message.status !== undefined && (obj.status = partner_StatusToJSON(message.status));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Partner>, I>>(object: I): Partner {
        const message = { ...basePartner } as Partner;
        message.id = object.id ?? '';
        message.regionId = object.regionId ?? '';
        message.status = object.status ?? 0;
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
