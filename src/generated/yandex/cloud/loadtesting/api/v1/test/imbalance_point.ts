/* eslint-disable */
import { messageTypeRegistry } from '../../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.loadtesting.api.v1.test';

/** Test imbalance point. */
export interface ImbalancePoint {
    $type: 'yandex.cloud.loadtesting.api.v1.test.ImbalancePoint';
    /** Imbalance moment timestamp. */
    at?: Date;
    /** Imbalance moment RPS. */
    rps: number;
    /** Imbalance reason comment. */
    comment: string;
}

const baseImbalancePoint: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.test.ImbalancePoint',
    rps: 0,
    comment: '',
};

export const ImbalancePoint = {
    $type: 'yandex.cloud.loadtesting.api.v1.test.ImbalancePoint' as const,

    encode(message: ImbalancePoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.at !== undefined) {
            Timestamp.encode(toTimestamp(message.at), writer.uint32(10).fork()).ldelim();
        }
        if (message.rps !== 0) {
            writer.uint32(16).int64(message.rps);
        }
        if (message.comment !== '') {
            writer.uint32(26).string(message.comment);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ImbalancePoint {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseImbalancePoint } as ImbalancePoint;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.at = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.rps = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.comment = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ImbalancePoint {
        const message = { ...baseImbalancePoint } as ImbalancePoint;
        message.at =
            object.at !== undefined && object.at !== null
                ? fromJsonTimestamp(object.at)
                : undefined;
        message.rps = object.rps !== undefined && object.rps !== null ? Number(object.rps) : 0;
        message.comment =
            object.comment !== undefined && object.comment !== null ? String(object.comment) : '';
        return message;
    },

    toJSON(message: ImbalancePoint): unknown {
        const obj: any = {};
        message.at !== undefined && (obj.at = message.at.toISOString());
        message.rps !== undefined && (obj.rps = Math.round(message.rps));
        message.comment !== undefined && (obj.comment = message.comment);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ImbalancePoint>, I>>(object: I): ImbalancePoint {
        const message = { ...baseImbalancePoint } as ImbalancePoint;
        message.at = object.at ?? undefined;
        message.rps = object.rps ?? 0;
        message.comment = object.comment ?? '';
        return message;
    },
};

messageTypeRegistry.set(ImbalancePoint.$type, ImbalancePoint);

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
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
              Exclude<keyof I, KeysOfUnion<P> | '$type'>,
              never
          >;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

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
