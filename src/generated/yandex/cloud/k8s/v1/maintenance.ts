/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { TimeOfDay } from '../../../../google/type/timeofday';
import { Duration } from '../../../../google/protobuf/duration';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { DayOfWeek, dayOfWeekFromJSON, dayOfWeekToJSON } from '../../../../google/type/dayofweek';

export const protobufPackage = 'yandex.cloud.k8s.v1';

export interface MaintenanceWindow {
    /** Updating the master at any time. */
    anytime?: AnytimeMaintenanceWindow | undefined;
    /** Updating the master on any day during the specified time window. */
    dailyMaintenanceWindow?: DailyMaintenanceWindow | undefined;
    /** Updating the master on selected days during the specified time window. */
    weeklyMaintenanceWindow?: WeeklyMaintenanceWindow | undefined;
}

export interface AnytimeMaintenanceWindow {}

export interface DailyMaintenanceWindow {
    /** Window start time, in the UTC timezone. */
    startTime?: TimeOfDay;
    /** Window duration. */
    duration?: Duration;
}

export interface DaysOfWeekMaintenanceWindow {
    /** Days of the week when automatic updates are allowed. */
    days: DayOfWeek[];
    /** Window start time, in the UTC timezone. */
    startTime?: TimeOfDay;
    /** Window duration. */
    duration?: Duration;
}

export interface WeeklyMaintenanceWindow {
    /** Days of the week and the maintenance window for these days when automatic updates are allowed. */
    daysOfWeek: DaysOfWeekMaintenanceWindow[];
}

export interface ScheduledMaintenance {
    /** Time until which the update should be postponed. */
    delayedUntil?: Date;
    /** Time when the update became available. */
    availableFrom?: Date;
    /** The latest possible date by which a mandatory update must be applied. */
    noLaterThan?: Date;
    /** Description of the planned operation, for example, "Infrastructure planned update". */
    description: string;
}

const baseMaintenanceWindow: object = {};

export const MaintenanceWindow = {
    encode(message: MaintenanceWindow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.anytime !== undefined) {
            AnytimeMaintenanceWindow.encode(message.anytime, writer.uint32(10).fork()).ldelim();
        }
        if (message.dailyMaintenanceWindow !== undefined) {
            DailyMaintenanceWindow.encode(
                message.dailyMaintenanceWindow,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.weeklyMaintenanceWindow !== undefined) {
            WeeklyMaintenanceWindow.encode(
                message.weeklyMaintenanceWindow,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MaintenanceWindow {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMaintenanceWindow } as MaintenanceWindow;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.anytime = AnytimeMaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.dailyMaintenanceWindow = DailyMaintenanceWindow.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.weeklyMaintenanceWindow = WeeklyMaintenanceWindow.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MaintenanceWindow {
        const message = { ...baseMaintenanceWindow } as MaintenanceWindow;
        message.anytime =
            object.anytime !== undefined && object.anytime !== null
                ? AnytimeMaintenanceWindow.fromJSON(object.anytime)
                : undefined;
        message.dailyMaintenanceWindow =
            object.dailyMaintenanceWindow !== undefined && object.dailyMaintenanceWindow !== null
                ? DailyMaintenanceWindow.fromJSON(object.dailyMaintenanceWindow)
                : undefined;
        message.weeklyMaintenanceWindow =
            object.weeklyMaintenanceWindow !== undefined && object.weeklyMaintenanceWindow !== null
                ? WeeklyMaintenanceWindow.fromJSON(object.weeklyMaintenanceWindow)
                : undefined;
        return message;
    },

    toJSON(message: MaintenanceWindow): unknown {
        const obj: any = {};
        message.anytime !== undefined &&
            (obj.anytime = message.anytime
                ? AnytimeMaintenanceWindow.toJSON(message.anytime)
                : undefined);
        message.dailyMaintenanceWindow !== undefined &&
            (obj.dailyMaintenanceWindow = message.dailyMaintenanceWindow
                ? DailyMaintenanceWindow.toJSON(message.dailyMaintenanceWindow)
                : undefined);
        message.weeklyMaintenanceWindow !== undefined &&
            (obj.weeklyMaintenanceWindow = message.weeklyMaintenanceWindow
                ? WeeklyMaintenanceWindow.toJSON(message.weeklyMaintenanceWindow)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MaintenanceWindow>, I>>(object: I): MaintenanceWindow {
        const message = { ...baseMaintenanceWindow } as MaintenanceWindow;
        message.anytime =
            object.anytime !== undefined && object.anytime !== null
                ? AnytimeMaintenanceWindow.fromPartial(object.anytime)
                : undefined;
        message.dailyMaintenanceWindow =
            object.dailyMaintenanceWindow !== undefined && object.dailyMaintenanceWindow !== null
                ? DailyMaintenanceWindow.fromPartial(object.dailyMaintenanceWindow)
                : undefined;
        message.weeklyMaintenanceWindow =
            object.weeklyMaintenanceWindow !== undefined && object.weeklyMaintenanceWindow !== null
                ? WeeklyMaintenanceWindow.fromPartial(object.weeklyMaintenanceWindow)
                : undefined;
        return message;
    },
};

const baseAnytimeMaintenanceWindow: object = {};

export const AnytimeMaintenanceWindow = {
    encode(_: AnytimeMaintenanceWindow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AnytimeMaintenanceWindow {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAnytimeMaintenanceWindow } as AnytimeMaintenanceWindow;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): AnytimeMaintenanceWindow {
        const message = { ...baseAnytimeMaintenanceWindow } as AnytimeMaintenanceWindow;
        return message;
    },

    toJSON(_: AnytimeMaintenanceWindow): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AnytimeMaintenanceWindow>, I>>(
        _: I,
    ): AnytimeMaintenanceWindow {
        const message = { ...baseAnytimeMaintenanceWindow } as AnytimeMaintenanceWindow;
        return message;
    },
};

const baseDailyMaintenanceWindow: object = {};

export const DailyMaintenanceWindow = {
    encode(message: DailyMaintenanceWindow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.startTime !== undefined) {
            TimeOfDay.encode(message.startTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DailyMaintenanceWindow {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDailyMaintenanceWindow } as DailyMaintenanceWindow;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startTime = TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DailyMaintenanceWindow {
        const message = { ...baseDailyMaintenanceWindow } as DailyMaintenanceWindow;
        message.startTime =
            object.startTime !== undefined && object.startTime !== null
                ? TimeOfDay.fromJSON(object.startTime)
                : undefined;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromJSON(object.duration)
                : undefined;
        return message;
    },

    toJSON(message: DailyMaintenanceWindow): unknown {
        const obj: any = {};
        message.startTime !== undefined &&
            (obj.startTime = message.startTime ? TimeOfDay.toJSON(message.startTime) : undefined);
        message.duration !== undefined &&
            (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DailyMaintenanceWindow>, I>>(
        object: I,
    ): DailyMaintenanceWindow {
        const message = { ...baseDailyMaintenanceWindow } as DailyMaintenanceWindow;
        message.startTime =
            object.startTime !== undefined && object.startTime !== null
                ? TimeOfDay.fromPartial(object.startTime)
                : undefined;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromPartial(object.duration)
                : undefined;
        return message;
    },
};

const baseDaysOfWeekMaintenanceWindow: object = { days: 0 };

export const DaysOfWeekMaintenanceWindow = {
    encode(
        message: DaysOfWeekMaintenanceWindow,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        writer.uint32(10).fork();
        for (const v of message.days) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.startTime !== undefined) {
            TimeOfDay.encode(message.startTime, writer.uint32(18).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DaysOfWeekMaintenanceWindow {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDaysOfWeekMaintenanceWindow } as DaysOfWeekMaintenanceWindow;
        message.days = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.days.push(reader.int32() as any);
                        }
                    } else {
                        message.days.push(reader.int32() as any);
                    }
                    break;
                case 2:
                    message.startTime = TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DaysOfWeekMaintenanceWindow {
        const message = { ...baseDaysOfWeekMaintenanceWindow } as DaysOfWeekMaintenanceWindow;
        message.days = (object.days ?? []).map((e: any) => dayOfWeekFromJSON(e));
        message.startTime =
            object.startTime !== undefined && object.startTime !== null
                ? TimeOfDay.fromJSON(object.startTime)
                : undefined;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromJSON(object.duration)
                : undefined;
        return message;
    },

    toJSON(message: DaysOfWeekMaintenanceWindow): unknown {
        const obj: any = {};
        if (message.days) {
            obj.days = message.days.map((e) => dayOfWeekToJSON(e));
        } else {
            obj.days = [];
        }
        message.startTime !== undefined &&
            (obj.startTime = message.startTime ? TimeOfDay.toJSON(message.startTime) : undefined);
        message.duration !== undefined &&
            (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DaysOfWeekMaintenanceWindow>, I>>(
        object: I,
    ): DaysOfWeekMaintenanceWindow {
        const message = { ...baseDaysOfWeekMaintenanceWindow } as DaysOfWeekMaintenanceWindow;
        message.days = object.days?.map((e) => e) || [];
        message.startTime =
            object.startTime !== undefined && object.startTime !== null
                ? TimeOfDay.fromPartial(object.startTime)
                : undefined;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromPartial(object.duration)
                : undefined;
        return message;
    },
};

const baseWeeklyMaintenanceWindow: object = {};

export const WeeklyMaintenanceWindow = {
    encode(message: WeeklyMaintenanceWindow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.daysOfWeek) {
            DaysOfWeekMaintenanceWindow.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WeeklyMaintenanceWindow {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWeeklyMaintenanceWindow } as WeeklyMaintenanceWindow;
        message.daysOfWeek = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.daysOfWeek.push(
                        DaysOfWeekMaintenanceWindow.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WeeklyMaintenanceWindow {
        const message = { ...baseWeeklyMaintenanceWindow } as WeeklyMaintenanceWindow;
        message.daysOfWeek = (object.daysOfWeek ?? []).map((e: any) =>
            DaysOfWeekMaintenanceWindow.fromJSON(e),
        );
        return message;
    },

    toJSON(message: WeeklyMaintenanceWindow): unknown {
        const obj: any = {};
        if (message.daysOfWeek) {
            obj.daysOfWeek = message.daysOfWeek.map((e) =>
                e ? DaysOfWeekMaintenanceWindow.toJSON(e) : undefined,
            );
        } else {
            obj.daysOfWeek = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<WeeklyMaintenanceWindow>, I>>(
        object: I,
    ): WeeklyMaintenanceWindow {
        const message = { ...baseWeeklyMaintenanceWindow } as WeeklyMaintenanceWindow;
        message.daysOfWeek =
            object.daysOfWeek?.map((e) => DaysOfWeekMaintenanceWindow.fromPartial(e)) || [];
        return message;
    },
};

const baseScheduledMaintenance: object = { description: '' };

export const ScheduledMaintenance = {
    encode(message: ScheduledMaintenance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.delayedUntil !== undefined) {
            Timestamp.encode(toTimestamp(message.delayedUntil), writer.uint32(10).fork()).ldelim();
        }
        if (message.availableFrom !== undefined) {
            Timestamp.encode(toTimestamp(message.availableFrom), writer.uint32(18).fork()).ldelim();
        }
        if (message.noLaterThan !== undefined) {
            Timestamp.encode(toTimestamp(message.noLaterThan), writer.uint32(26).fork()).ldelim();
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ScheduledMaintenance {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScheduledMaintenance } as ScheduledMaintenance;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delayedUntil = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.availableFrom = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32()),
                    );
                    break;
                case 3:
                    message.noLaterThan = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ScheduledMaintenance {
        const message = { ...baseScheduledMaintenance } as ScheduledMaintenance;
        message.delayedUntil =
            object.delayedUntil !== undefined && object.delayedUntil !== null
                ? fromJsonTimestamp(object.delayedUntil)
                : undefined;
        message.availableFrom =
            object.availableFrom !== undefined && object.availableFrom !== null
                ? fromJsonTimestamp(object.availableFrom)
                : undefined;
        message.noLaterThan =
            object.noLaterThan !== undefined && object.noLaterThan !== null
                ? fromJsonTimestamp(object.noLaterThan)
                : undefined;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        return message;
    },

    toJSON(message: ScheduledMaintenance): unknown {
        const obj: any = {};
        message.delayedUntil !== undefined &&
            (obj.delayedUntil = message.delayedUntil.toISOString());
        message.availableFrom !== undefined &&
            (obj.availableFrom = message.availableFrom.toISOString());
        message.noLaterThan !== undefined && (obj.noLaterThan = message.noLaterThan.toISOString());
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ScheduledMaintenance>, I>>(
        object: I,
    ): ScheduledMaintenance {
        const message = { ...baseScheduledMaintenance } as ScheduledMaintenance;
        message.delayedUntil = object.delayedUntil ?? undefined;
        message.availableFrom = object.availableFrom ?? undefined;
        message.noLaterThan = object.noLaterThan ?? undefined;
        message.description = object.description ?? '';
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
