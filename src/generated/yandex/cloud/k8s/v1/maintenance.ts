/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { TimeOfDay } from "../../../../google/type/timeofday";
import { Duration } from "../../../../google/protobuf/duration";
import {
  DayOfWeek,
  dayOfWeekFromJSON,
  dayOfWeekToJSON,
} from "../../../../google/type/dayofweek";

export const protobufPackage = "yandex.cloud.k8s.v1";

export interface MaintenanceWindow {
  $type: "yandex.cloud.k8s.v1.MaintenanceWindow";
  /** Updating the master at any time. */
  anytime?: AnytimeMaintenanceWindow | undefined;
  /** Updating the master on any day during the specified time window. */
  dailyMaintenanceWindow?: DailyMaintenanceWindow | undefined;
  /** Updating the master on selected days during the specified time window. */
  weeklyMaintenanceWindow?: WeeklyMaintenanceWindow | undefined;
}

export interface AnytimeMaintenanceWindow {
  $type: "yandex.cloud.k8s.v1.AnytimeMaintenanceWindow";
}

export interface DailyMaintenanceWindow {
  $type: "yandex.cloud.k8s.v1.DailyMaintenanceWindow";
  /** Window start time, in the UTC timezone. */
  startTime?: TimeOfDay;
  /** Window duration. */
  duration?: Duration;
}

export interface DaysOfWeekMaintenanceWindow {
  $type: "yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow";
  /** Days of the week when automatic updates are allowed. */
  days: DayOfWeek[];
  /** Window start time, in the UTC timezone. */
  startTime?: TimeOfDay;
  /** Window duration. */
  duration?: Duration;
}

export interface WeeklyMaintenanceWindow {
  $type: "yandex.cloud.k8s.v1.WeeklyMaintenanceWindow";
  /** Days of the week and the maintenance window for these days when automatic updates are allowed. */
  daysOfWeek: DaysOfWeekMaintenanceWindow[];
}

const baseMaintenanceWindow: object = {
  $type: "yandex.cloud.k8s.v1.MaintenanceWindow",
};

export const MaintenanceWindow = {
  $type: "yandex.cloud.k8s.v1.MaintenanceWindow" as const,

  encode(
    message: MaintenanceWindow,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.anytime !== undefined) {
      AnytimeMaintenanceWindow.encode(
        message.anytime,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.dailyMaintenanceWindow !== undefined) {
      DailyMaintenanceWindow.encode(
        message.dailyMaintenanceWindow,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.weeklyMaintenanceWindow !== undefined) {
      WeeklyMaintenanceWindow.encode(
        message.weeklyMaintenanceWindow,
        writer.uint32(26).fork()
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
          message.anytime = AnytimeMaintenanceWindow.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.dailyMaintenanceWindow = DailyMaintenanceWindow.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.weeklyMaintenanceWindow = WeeklyMaintenanceWindow.decode(
            reader,
            reader.uint32()
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
      object.dailyMaintenanceWindow !== undefined &&
      object.dailyMaintenanceWindow !== null
        ? DailyMaintenanceWindow.fromJSON(object.dailyMaintenanceWindow)
        : undefined;
    message.weeklyMaintenanceWindow =
      object.weeklyMaintenanceWindow !== undefined &&
      object.weeklyMaintenanceWindow !== null
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

  fromPartial<I extends Exact<DeepPartial<MaintenanceWindow>, I>>(
    object: I
  ): MaintenanceWindow {
    const message = { ...baseMaintenanceWindow } as MaintenanceWindow;
    message.anytime =
      object.anytime !== undefined && object.anytime !== null
        ? AnytimeMaintenanceWindow.fromPartial(object.anytime)
        : undefined;
    message.dailyMaintenanceWindow =
      object.dailyMaintenanceWindow !== undefined &&
      object.dailyMaintenanceWindow !== null
        ? DailyMaintenanceWindow.fromPartial(object.dailyMaintenanceWindow)
        : undefined;
    message.weeklyMaintenanceWindow =
      object.weeklyMaintenanceWindow !== undefined &&
      object.weeklyMaintenanceWindow !== null
        ? WeeklyMaintenanceWindow.fromPartial(object.weeklyMaintenanceWindow)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MaintenanceWindow.$type, MaintenanceWindow);

const baseAnytimeMaintenanceWindow: object = {
  $type: "yandex.cloud.k8s.v1.AnytimeMaintenanceWindow",
};

export const AnytimeMaintenanceWindow = {
  $type: "yandex.cloud.k8s.v1.AnytimeMaintenanceWindow" as const,

  encode(
    _: AnytimeMaintenanceWindow,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AnytimeMaintenanceWindow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAnytimeMaintenanceWindow,
    } as AnytimeMaintenanceWindow;
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
    const message = {
      ...baseAnytimeMaintenanceWindow,
    } as AnytimeMaintenanceWindow;
    return message;
  },

  toJSON(_: AnytimeMaintenanceWindow): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AnytimeMaintenanceWindow>, I>>(
    _: I
  ): AnytimeMaintenanceWindow {
    const message = {
      ...baseAnytimeMaintenanceWindow,
    } as AnytimeMaintenanceWindow;
    return message;
  },
};

messageTypeRegistry.set(
  AnytimeMaintenanceWindow.$type,
  AnytimeMaintenanceWindow
);

const baseDailyMaintenanceWindow: object = {
  $type: "yandex.cloud.k8s.v1.DailyMaintenanceWindow",
};

export const DailyMaintenanceWindow = {
  $type: "yandex.cloud.k8s.v1.DailyMaintenanceWindow" as const,

  encode(
    message: DailyMaintenanceWindow,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.startTime !== undefined) {
      TimeOfDay.encode(message.startTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DailyMaintenanceWindow {
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
      (obj.startTime = message.startTime
        ? TimeOfDay.toJSON(message.startTime)
        : undefined);
    message.duration !== undefined &&
      (obj.duration = message.duration
        ? Duration.toJSON(message.duration)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DailyMaintenanceWindow>, I>>(
    object: I
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

messageTypeRegistry.set(DailyMaintenanceWindow.$type, DailyMaintenanceWindow);

const baseDaysOfWeekMaintenanceWindow: object = {
  $type: "yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow",
  days: 0,
};

export const DaysOfWeekMaintenanceWindow = {
  $type: "yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow" as const,

  encode(
    message: DaysOfWeekMaintenanceWindow,
    writer: _m0.Writer = _m0.Writer.create()
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DaysOfWeekMaintenanceWindow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDaysOfWeekMaintenanceWindow,
    } as DaysOfWeekMaintenanceWindow;
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
    const message = {
      ...baseDaysOfWeekMaintenanceWindow,
    } as DaysOfWeekMaintenanceWindow;
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
      (obj.startTime = message.startTime
        ? TimeOfDay.toJSON(message.startTime)
        : undefined);
    message.duration !== undefined &&
      (obj.duration = message.duration
        ? Duration.toJSON(message.duration)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DaysOfWeekMaintenanceWindow>, I>>(
    object: I
  ): DaysOfWeekMaintenanceWindow {
    const message = {
      ...baseDaysOfWeekMaintenanceWindow,
    } as DaysOfWeekMaintenanceWindow;
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

messageTypeRegistry.set(
  DaysOfWeekMaintenanceWindow.$type,
  DaysOfWeekMaintenanceWindow
);

const baseWeeklyMaintenanceWindow: object = {
  $type: "yandex.cloud.k8s.v1.WeeklyMaintenanceWindow",
};

export const WeeklyMaintenanceWindow = {
  $type: "yandex.cloud.k8s.v1.WeeklyMaintenanceWindow" as const,

  encode(
    message: WeeklyMaintenanceWindow,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.daysOfWeek) {
      DaysOfWeekMaintenanceWindow.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WeeklyMaintenanceWindow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseWeeklyMaintenanceWindow,
    } as WeeklyMaintenanceWindow;
    message.daysOfWeek = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.daysOfWeek.push(
            DaysOfWeekMaintenanceWindow.decode(reader, reader.uint32())
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
    const message = {
      ...baseWeeklyMaintenanceWindow,
    } as WeeklyMaintenanceWindow;
    message.daysOfWeek = (object.daysOfWeek ?? []).map((e: any) =>
      DaysOfWeekMaintenanceWindow.fromJSON(e)
    );
    return message;
  },

  toJSON(message: WeeklyMaintenanceWindow): unknown {
    const obj: any = {};
    if (message.daysOfWeek) {
      obj.daysOfWeek = message.daysOfWeek.map((e) =>
        e ? DaysOfWeekMaintenanceWindow.toJSON(e) : undefined
      );
    } else {
      obj.daysOfWeek = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WeeklyMaintenanceWindow>, I>>(
    object: I
  ): WeeklyMaintenanceWindow {
    const message = {
      ...baseWeeklyMaintenanceWindow,
    } as WeeklyMaintenanceWindow;
    message.daysOfWeek =
      object.daysOfWeek?.map((e) =>
        DaysOfWeekMaintenanceWindow.fromPartial(e)
      ) || [];
    return message;
  },
};

messageTypeRegistry.set(WeeklyMaintenanceWindow.$type, WeeklyMaintenanceWindow);

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P> | "$type">,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
