/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.mdb.opensearch.v1";

/** An OpenSearch cluster maintenance window. Should be defined by either one of the two options. */
export interface MaintenanceWindow {
  $type: "yandex.cloud.mdb.opensearch.v1.MaintenanceWindow";
  /** An any-time maintenance window. */
  anytime?: AnytimeMaintenanceWindow | undefined;
  /** A weekly maintenance window. */
  weeklyMaintenanceWindow?: WeeklyMaintenanceWindow | undefined;
}

/** An any-time maintenance window. */
export interface AnytimeMaintenanceWindow {
  $type: "yandex.cloud.mdb.opensearch.v1.AnytimeMaintenanceWindow";
}

/** A weekly maintenance window. */
export interface WeeklyMaintenanceWindow {
  $type: "yandex.cloud.mdb.opensearch.v1.WeeklyMaintenanceWindow";
  /** Day of the week. */
  day: WeeklyMaintenanceWindow_WeekDay;
  /** Hour of the day in the UTC timezone. */
  hour: number;
}

export enum WeeklyMaintenanceWindow_WeekDay {
  WEEK_DAY_UNSPECIFIED = 0,
  /** MON - Monday */
  MON = 1,
  /** TUE - Tuesday */
  TUE = 2,
  /** WED - Wednesday */
  WED = 3,
  /** THU - Thursday */
  THU = 4,
  /** FRI - Friday */
  FRI = 5,
  /** SAT - Saturday */
  SAT = 6,
  /** SUN - Sunday */
  SUN = 7,
  UNRECOGNIZED = -1,
}

export function weeklyMaintenanceWindow_WeekDayFromJSON(
  object: any
): WeeklyMaintenanceWindow_WeekDay {
  switch (object) {
    case 0:
    case "WEEK_DAY_UNSPECIFIED":
      return WeeklyMaintenanceWindow_WeekDay.WEEK_DAY_UNSPECIFIED;
    case 1:
    case "MON":
      return WeeklyMaintenanceWindow_WeekDay.MON;
    case 2:
    case "TUE":
      return WeeklyMaintenanceWindow_WeekDay.TUE;
    case 3:
    case "WED":
      return WeeklyMaintenanceWindow_WeekDay.WED;
    case 4:
    case "THU":
      return WeeklyMaintenanceWindow_WeekDay.THU;
    case 5:
    case "FRI":
      return WeeklyMaintenanceWindow_WeekDay.FRI;
    case 6:
    case "SAT":
      return WeeklyMaintenanceWindow_WeekDay.SAT;
    case 7:
    case "SUN":
      return WeeklyMaintenanceWindow_WeekDay.SUN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return WeeklyMaintenanceWindow_WeekDay.UNRECOGNIZED;
  }
}

export function weeklyMaintenanceWindow_WeekDayToJSON(
  object: WeeklyMaintenanceWindow_WeekDay
): string {
  switch (object) {
    case WeeklyMaintenanceWindow_WeekDay.WEEK_DAY_UNSPECIFIED:
      return "WEEK_DAY_UNSPECIFIED";
    case WeeklyMaintenanceWindow_WeekDay.MON:
      return "MON";
    case WeeklyMaintenanceWindow_WeekDay.TUE:
      return "TUE";
    case WeeklyMaintenanceWindow_WeekDay.WED:
      return "WED";
    case WeeklyMaintenanceWindow_WeekDay.THU:
      return "THU";
    case WeeklyMaintenanceWindow_WeekDay.FRI:
      return "FRI";
    case WeeklyMaintenanceWindow_WeekDay.SAT:
      return "SAT";
    case WeeklyMaintenanceWindow_WeekDay.SUN:
      return "SUN";
    default:
      return "UNKNOWN";
  }
}

export interface MaintenanceOperation {
  $type: "yandex.cloud.mdb.opensearch.v1.MaintenanceOperation";
  /** The description of the operation. */
  info: string;
  /** Delay time for the maintenance operation. */
  delayedUntil?: Date;
  /** Time of the last maintenance window. */
  latestMaintenanceTime?: Date;
  /** Time of the next maintenance window. */
  nextMaintenanceWindowTime?: Date;
}

const baseMaintenanceWindow: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.MaintenanceWindow",
};

export const MaintenanceWindow = {
  $type: "yandex.cloud.mdb.opensearch.v1.MaintenanceWindow" as const,

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
    if (message.weeklyMaintenanceWindow !== undefined) {
      WeeklyMaintenanceWindow.encode(
        message.weeklyMaintenanceWindow,
        writer.uint32(18).fork()
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
  $type: "yandex.cloud.mdb.opensearch.v1.AnytimeMaintenanceWindow",
};

export const AnytimeMaintenanceWindow = {
  $type: "yandex.cloud.mdb.opensearch.v1.AnytimeMaintenanceWindow" as const,

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

const baseWeeklyMaintenanceWindow: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.WeeklyMaintenanceWindow",
  day: 0,
  hour: 0,
};

export const WeeklyMaintenanceWindow = {
  $type: "yandex.cloud.mdb.opensearch.v1.WeeklyMaintenanceWindow" as const,

  encode(
    message: WeeklyMaintenanceWindow,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.day !== 0) {
      writer.uint32(8).int32(message.day);
    }
    if (message.hour !== 0) {
      writer.uint32(16).int64(message.hour);
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
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.day = reader.int32() as any;
          break;
        case 2:
          message.hour = longToNumber(reader.int64() as Long);
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
    message.day =
      object.day !== undefined && object.day !== null
        ? weeklyMaintenanceWindow_WeekDayFromJSON(object.day)
        : 0;
    message.hour =
      object.hour !== undefined && object.hour !== null
        ? Number(object.hour)
        : 0;
    return message;
  },

  toJSON(message: WeeklyMaintenanceWindow): unknown {
    const obj: any = {};
    message.day !== undefined &&
      (obj.day = weeklyMaintenanceWindow_WeekDayToJSON(message.day));
    message.hour !== undefined && (obj.hour = Math.round(message.hour));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WeeklyMaintenanceWindow>, I>>(
    object: I
  ): WeeklyMaintenanceWindow {
    const message = {
      ...baseWeeklyMaintenanceWindow,
    } as WeeklyMaintenanceWindow;
    message.day = object.day ?? 0;
    message.hour = object.hour ?? 0;
    return message;
  },
};

messageTypeRegistry.set(WeeklyMaintenanceWindow.$type, WeeklyMaintenanceWindow);

const baseMaintenanceOperation: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.MaintenanceOperation",
  info: "",
};

export const MaintenanceOperation = {
  $type: "yandex.cloud.mdb.opensearch.v1.MaintenanceOperation" as const,

  encode(
    message: MaintenanceOperation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.info !== "") {
      writer.uint32(10).string(message.info);
    }
    if (message.delayedUntil !== undefined) {
      Timestamp.encode(
        toTimestamp(message.delayedUntil),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.latestMaintenanceTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.latestMaintenanceTime),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.nextMaintenanceWindowTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.nextMaintenanceWindowTime),
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MaintenanceOperation {
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
          message.delayedUntil = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.latestMaintenanceTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.nextMaintenanceWindowTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
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
    message.info =
      object.info !== undefined && object.info !== null
        ? String(object.info)
        : "";
    message.delayedUntil =
      object.delayedUntil !== undefined && object.delayedUntil !== null
        ? fromJsonTimestamp(object.delayedUntil)
        : undefined;
    message.latestMaintenanceTime =
      object.latestMaintenanceTime !== undefined &&
      object.latestMaintenanceTime !== null
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
      (obj.nextMaintenanceWindowTime =
        message.nextMaintenanceWindowTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MaintenanceOperation>, I>>(
    object: I
  ): MaintenanceOperation {
    const message = { ...baseMaintenanceOperation } as MaintenanceOperation;
    message.info = object.info ?? "";
    message.delayedUntil = object.delayedUntil ?? undefined;
    message.latestMaintenanceTime = object.latestMaintenanceTime ?? undefined;
    message.nextMaintenanceWindowTime =
      object.nextMaintenanceWindowTime ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MaintenanceOperation.$type, MaintenanceOperation);

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
