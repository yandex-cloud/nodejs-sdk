/* eslint-disable */
import { messageTypeRegistry } from '../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'google.type';

/**
 * Represents a time of day. The date and time zone are either not significant
 * or are specified elsewhere. An API may choose to allow leap seconds. Related
 * types are [google.type.Date](https://github.com/googleapis/googleapis/blob/master/google/type/date.proto) and [google.protobuf.Timestamp](https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/timestamp.proto).
 */
export interface TimeOfDay {
    $type: 'google.type.TimeOfDay';
    /**
     * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose
     * to allow the value "24:00:00" for scenarios like business closing time.
     */
    hours: number;
    /** Minutes of hour of day. Must be from 0 to 59. */
    minutes: number;
    /**
     * Seconds of minutes of the time. Must normally be from 0 to 59. An API may
     * allow the value 60 if it allows leap-seconds.
     */
    seconds: number;
    /** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
    nanos: number;
}

const baseTimeOfDay: object = {
    $type: 'google.type.TimeOfDay',
    hours: 0,
    minutes: 0,
    seconds: 0,
    nanos: 0,
};

export const TimeOfDay = {
    $type: 'google.type.TimeOfDay' as const,

    encode(message: TimeOfDay, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.hours !== 0) {
            writer.uint32(8).int32(message.hours);
        }
        if (message.minutes !== 0) {
            writer.uint32(16).int32(message.minutes);
        }
        if (message.seconds !== 0) {
            writer.uint32(24).int32(message.seconds);
        }
        if (message.nanos !== 0) {
            writer.uint32(32).int32(message.nanos);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TimeOfDay {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTimeOfDay } as TimeOfDay;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hours = reader.int32();
                    break;
                case 2:
                    message.minutes = reader.int32();
                    break;
                case 3:
                    message.seconds = reader.int32();
                    break;
                case 4:
                    message.nanos = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TimeOfDay {
        const message = { ...baseTimeOfDay } as TimeOfDay;
        message.hours =
            object.hours !== undefined && object.hours !== null ? Number(object.hours) : 0;
        message.minutes =
            object.minutes !== undefined && object.minutes !== null ? Number(object.minutes) : 0;
        message.seconds =
            object.seconds !== undefined && object.seconds !== null ? Number(object.seconds) : 0;
        message.nanos =
            object.nanos !== undefined && object.nanos !== null ? Number(object.nanos) : 0;
        return message;
    },

    toJSON(message: TimeOfDay): unknown {
        const obj: any = {};
        message.hours !== undefined && (obj.hours = Math.round(message.hours));
        message.minutes !== undefined && (obj.minutes = Math.round(message.minutes));
        message.seconds !== undefined && (obj.seconds = Math.round(message.seconds));
        message.nanos !== undefined && (obj.nanos = Math.round(message.nanos));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TimeOfDay>, I>>(object: I): TimeOfDay {
        const message = { ...baseTimeOfDay } as TimeOfDay;
        message.hours = object.hours ?? 0;
        message.minutes = object.minutes ?? 0;
        message.seconds = object.seconds ?? 0;
        message.nanos = object.nanos ?? 0;
        return message;
    },
};

messageTypeRegistry.set(TimeOfDay.$type, TimeOfDay);

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
