/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.gitlab.v1';

export interface MaintenanceOperation {
    info: string;
    delayedUntil?: Date;
    latestMaintenanceTime?: Date;
    nextMaintenanceWindowTime?: Date;
}

const baseMaintenanceOperation: object = { info: '' };

export const MaintenanceOperation = {
    encode(message: MaintenanceOperation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.info !== '') {
            writer.uint32(10).string(message.info);
        }
        if (message.delayedUntil !== undefined) {
            Timestamp.encode(toTimestamp(message.delayedUntil), writer.uint32(18).fork()).ldelim();
        }
        if (message.latestMaintenanceTime !== undefined) {
            Timestamp.encode(
                toTimestamp(message.latestMaintenanceTime),
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.nextMaintenanceWindowTime !== undefined) {
            Timestamp.encode(
                toTimestamp(message.nextMaintenanceWindowTime),
                writer.uint32(34).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MaintenanceOperation {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMaintenanceOperation } as MaintenanceOperation;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = reader.string();
                    break;
                case 2:
                    message.delayedUntil = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.latestMaintenanceTime = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32()),
                    );
                    break;
                case 4:
                    message.nextMaintenanceWindowTime = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MaintenanceOperation {
        const message = { ...baseMaintenanceOperation } as MaintenanceOperation;
        message.info = object.info !== undefined && object.info !== null ? String(object.info) : '';
        message.delayedUntil =
            object.delayedUntil !== undefined && object.delayedUntil !== null
                ? fromJsonTimestamp(object.delayedUntil)
                : undefined;
        message.latestMaintenanceTime =
            object.latestMaintenanceTime !== undefined && object.latestMaintenanceTime !== null
                ? fromJsonTimestamp(object.latestMaintenanceTime)
                : undefined;
        message.nextMaintenanceWindowTime =
            object.nextMaintenanceWindowTime !== undefined &&
            object.nextMaintenanceWindowTime !== null
                ? fromJsonTimestamp(object.nextMaintenanceWindowTime)
                : undefined;
        return message;
    },

    toJSON(message: MaintenanceOperation): unknown {
        const obj: any = {};
        message.info !== undefined && (obj.info = message.info);
        message.delayedUntil !== undefined &&
            (obj.delayedUntil = message.delayedUntil.toISOString());
        message.latestMaintenanceTime !== undefined &&
            (obj.latestMaintenanceTime = message.latestMaintenanceTime.toISOString());
        message.nextMaintenanceWindowTime !== undefined &&
            (obj.nextMaintenanceWindowTime = message.nextMaintenanceWindowTime.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MaintenanceOperation>, I>>(
        object: I,
    ): MaintenanceOperation {
        const message = { ...baseMaintenanceOperation } as MaintenanceOperation;
        message.info = object.info ?? '';
        message.delayedUntil = object.delayedUntil ?? undefined;
        message.latestMaintenanceTime = object.latestMaintenanceTime ?? undefined;
        message.nextMaintenanceWindowTime = object.nextMaintenanceWindowTime ?? undefined;
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

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
