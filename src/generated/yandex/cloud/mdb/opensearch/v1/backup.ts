/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import { Int64Value } from '../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.mdb.opensearch.v1';

export interface Backup {
    /** Required. ID of the backup. */
    id: string;
    /** ID of the folder that the backup belongs to. */
    folderId: string;
    /** ID of the OpenSearch cluster that the backup was created for. */
    sourceClusterId: string;
    /** Time when the backup operation was started. */
    startedAt?: Date;
    /** Time when the backup operation was completed. */
    createdAt?: Date;
    /** Names of indices in the backup. */
    indices: string[];
    /** OpenSearch version used to create the backup. */
    opensearchVersion: string;
    /** Size of the backup in bytes. */
    sizeBytes: number;
    /** The number of indices in the backup. */
    indicesTotal: number;
}

/** Snapshot management configuration */
export interface SnapshotManagement {
    /** Snapshot creation schedule */
    snapshotSchedule?: SnapshotSchedule;
    /** Snapshot max age in days */
    snapshotMaxAgeDays?: number;
}

/** Snapshot creation schedule */
export interface SnapshotSchedule {
    /** Hourly based snapshot schedule */
    hourlySnapshotSchedule?: HourlySnapshotSchedule | undefined;
    /** Daily based snapshot schedule */
    dailySnapshotSchedule?: DailySnapshotSchedule | undefined;
    /** Weekly based snapshot schedule */
    weeklySnapshotSchedule?: WeeklySnapshotSchedule | undefined;
}

/** Hourly based snapshot schedule */
export interface HourlySnapshotSchedule {
    /** The minute of the hour at which the backup should be created. */
    minute: number;
}

/** Daily based snapshot schedule */
export interface DailySnapshotSchedule {
    /** The hour of the day in UTC timezone at which the backup should be created. */
    hour: number;
    /** The minute of the hour at which the backup should be created. */
    minute: number;
}

/** Weekly based snapshot schedule */
export interface WeeklySnapshotSchedule {
    /** Day of the week */
    day: WeeklySnapshotSchedule_WeekDay;
    /** The hour of the day in UTC timezone at which the backup should be created. */
    hour: number;
    /** The minute of the hour at which the backup should be created. */
    minute: number;
}

/** Day of the week */
export enum WeeklySnapshotSchedule_WeekDay {
    WEEK_DAY_UNSPECIFIED = 0,
    MON = 1,
    TUE = 2,
    WED = 3,
    THU = 4,
    FRI = 5,
    SAT = 6,
    SUN = 7,
    UNRECOGNIZED = -1,
}

export function weeklySnapshotSchedule_WeekDayFromJSON(
    object: any,
): WeeklySnapshotSchedule_WeekDay {
    switch (object) {
        case 0:
        case 'WEEK_DAY_UNSPECIFIED':
            return WeeklySnapshotSchedule_WeekDay.WEEK_DAY_UNSPECIFIED;
        case 1:
        case 'MON':
            return WeeklySnapshotSchedule_WeekDay.MON;
        case 2:
        case 'TUE':
            return WeeklySnapshotSchedule_WeekDay.TUE;
        case 3:
        case 'WED':
            return WeeklySnapshotSchedule_WeekDay.WED;
        case 4:
        case 'THU':
            return WeeklySnapshotSchedule_WeekDay.THU;
        case 5:
        case 'FRI':
            return WeeklySnapshotSchedule_WeekDay.FRI;
        case 6:
        case 'SAT':
            return WeeklySnapshotSchedule_WeekDay.SAT;
        case 7:
        case 'SUN':
            return WeeklySnapshotSchedule_WeekDay.SUN;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return WeeklySnapshotSchedule_WeekDay.UNRECOGNIZED;
    }
}

export function weeklySnapshotSchedule_WeekDayToJSON(
    object: WeeklySnapshotSchedule_WeekDay,
): string {
    switch (object) {
        case WeeklySnapshotSchedule_WeekDay.WEEK_DAY_UNSPECIFIED:
            return 'WEEK_DAY_UNSPECIFIED';
        case WeeklySnapshotSchedule_WeekDay.MON:
            return 'MON';
        case WeeklySnapshotSchedule_WeekDay.TUE:
            return 'TUE';
        case WeeklySnapshotSchedule_WeekDay.WED:
            return 'WED';
        case WeeklySnapshotSchedule_WeekDay.THU:
            return 'THU';
        case WeeklySnapshotSchedule_WeekDay.FRI:
            return 'FRI';
        case WeeklySnapshotSchedule_WeekDay.SAT:
            return 'SAT';
        case WeeklySnapshotSchedule_WeekDay.SUN:
            return 'SUN';
        default:
            return 'UNKNOWN';
    }
}

const baseBackup: object = {
    id: '',
    folderId: '',
    sourceClusterId: '',
    indices: '',
    opensearchVersion: '',
    sizeBytes: 0,
    indicesTotal: 0,
};

export const Backup = {
    encode(message: Backup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.sourceClusterId !== '') {
            writer.uint32(26).string(message.sourceClusterId);
        }
        if (message.startedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.indices) {
            writer.uint32(50).string(v!);
        }
        if (message.opensearchVersion !== '') {
            writer.uint32(58).string(message.opensearchVersion);
        }
        if (message.sizeBytes !== 0) {
            writer.uint32(64).int64(message.sizeBytes);
        }
        if (message.indicesTotal !== 0) {
            writer.uint32(72).int64(message.indicesTotal);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Backup {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBackup } as Backup;
        message.indices = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.sourceClusterId = reader.string();
                    break;
                case 4:
                    message.startedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.indices.push(reader.string());
                    break;
                case 7:
                    message.opensearchVersion = reader.string();
                    break;
                case 8:
                    message.sizeBytes = longToNumber(reader.int64() as Long);
                    break;
                case 9:
                    message.indicesTotal = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Backup {
        const message = { ...baseBackup } as Backup;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.sourceClusterId =
            object.sourceClusterId !== undefined && object.sourceClusterId !== null
                ? String(object.sourceClusterId)
                : '';
        message.startedAt =
            object.startedAt !== undefined && object.startedAt !== null
                ? fromJsonTimestamp(object.startedAt)
                : undefined;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.indices = (object.indices ?? []).map((e: any) => String(e));
        message.opensearchVersion =
            object.opensearchVersion !== undefined && object.opensearchVersion !== null
                ? String(object.opensearchVersion)
                : '';
        message.sizeBytes =
            object.sizeBytes !== undefined && object.sizeBytes !== null
                ? Number(object.sizeBytes)
                : 0;
        message.indicesTotal =
            object.indicesTotal !== undefined && object.indicesTotal !== null
                ? Number(object.indicesTotal)
                : 0;
        return message;
    },

    toJSON(message: Backup): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.sourceClusterId !== undefined && (obj.sourceClusterId = message.sourceClusterId);
        message.startedAt !== undefined && (obj.startedAt = message.startedAt.toISOString());
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        if (message.indices) {
            obj.indices = message.indices.map((e) => e);
        } else {
            obj.indices = [];
        }
        message.opensearchVersion !== undefined &&
            (obj.opensearchVersion = message.opensearchVersion);
        message.sizeBytes !== undefined && (obj.sizeBytes = Math.round(message.sizeBytes));
        message.indicesTotal !== undefined && (obj.indicesTotal = Math.round(message.indicesTotal));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Backup>, I>>(object: I): Backup {
        const message = { ...baseBackup } as Backup;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.sourceClusterId = object.sourceClusterId ?? '';
        message.startedAt = object.startedAt ?? undefined;
        message.createdAt = object.createdAt ?? undefined;
        message.indices = object.indices?.map((e) => e) || [];
        message.opensearchVersion = object.opensearchVersion ?? '';
        message.sizeBytes = object.sizeBytes ?? 0;
        message.indicesTotal = object.indicesTotal ?? 0;
        return message;
    },
};

const baseSnapshotManagement: object = {};

export const SnapshotManagement = {
    encode(message: SnapshotManagement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.snapshotSchedule !== undefined) {
            SnapshotSchedule.encode(message.snapshotSchedule, writer.uint32(10).fork()).ldelim();
        }
        if (message.snapshotMaxAgeDays !== undefined) {
            Int64Value.encode(
                { value: message.snapshotMaxAgeDays! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotManagement {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSnapshotManagement } as SnapshotManagement;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotSchedule = SnapshotSchedule.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.snapshotMaxAgeDays = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SnapshotManagement {
        const message = { ...baseSnapshotManagement } as SnapshotManagement;
        message.snapshotSchedule =
            object.snapshotSchedule !== undefined && object.snapshotSchedule !== null
                ? SnapshotSchedule.fromJSON(object.snapshotSchedule)
                : undefined;
        message.snapshotMaxAgeDays =
            object.snapshotMaxAgeDays !== undefined && object.snapshotMaxAgeDays !== null
                ? Number(object.snapshotMaxAgeDays)
                : undefined;
        return message;
    },

    toJSON(message: SnapshotManagement): unknown {
        const obj: any = {};
        message.snapshotSchedule !== undefined &&
            (obj.snapshotSchedule = message.snapshotSchedule
                ? SnapshotSchedule.toJSON(message.snapshotSchedule)
                : undefined);
        message.snapshotMaxAgeDays !== undefined &&
            (obj.snapshotMaxAgeDays = message.snapshotMaxAgeDays);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SnapshotManagement>, I>>(
        object: I,
    ): SnapshotManagement {
        const message = { ...baseSnapshotManagement } as SnapshotManagement;
        message.snapshotSchedule =
            object.snapshotSchedule !== undefined && object.snapshotSchedule !== null
                ? SnapshotSchedule.fromPartial(object.snapshotSchedule)
                : undefined;
        message.snapshotMaxAgeDays = object.snapshotMaxAgeDays ?? undefined;
        return message;
    },
};

const baseSnapshotSchedule: object = {};

export const SnapshotSchedule = {
    encode(message: SnapshotSchedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.hourlySnapshotSchedule !== undefined) {
            HourlySnapshotSchedule.encode(
                message.hourlySnapshotSchedule,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.dailySnapshotSchedule !== undefined) {
            DailySnapshotSchedule.encode(
                message.dailySnapshotSchedule,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.weeklySnapshotSchedule !== undefined) {
            WeeklySnapshotSchedule.encode(
                message.weeklySnapshotSchedule,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotSchedule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSnapshotSchedule } as SnapshotSchedule;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hourlySnapshotSchedule = HourlySnapshotSchedule.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.dailySnapshotSchedule = DailySnapshotSchedule.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.weeklySnapshotSchedule = WeeklySnapshotSchedule.decode(
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

    fromJSON(object: any): SnapshotSchedule {
        const message = { ...baseSnapshotSchedule } as SnapshotSchedule;
        message.hourlySnapshotSchedule =
            object.hourlySnapshotSchedule !== undefined && object.hourlySnapshotSchedule !== null
                ? HourlySnapshotSchedule.fromJSON(object.hourlySnapshotSchedule)
                : undefined;
        message.dailySnapshotSchedule =
            object.dailySnapshotSchedule !== undefined && object.dailySnapshotSchedule !== null
                ? DailySnapshotSchedule.fromJSON(object.dailySnapshotSchedule)
                : undefined;
        message.weeklySnapshotSchedule =
            object.weeklySnapshotSchedule !== undefined && object.weeklySnapshotSchedule !== null
                ? WeeklySnapshotSchedule.fromJSON(object.weeklySnapshotSchedule)
                : undefined;
        return message;
    },

    toJSON(message: SnapshotSchedule): unknown {
        const obj: any = {};
        message.hourlySnapshotSchedule !== undefined &&
            (obj.hourlySnapshotSchedule = message.hourlySnapshotSchedule
                ? HourlySnapshotSchedule.toJSON(message.hourlySnapshotSchedule)
                : undefined);
        message.dailySnapshotSchedule !== undefined &&
            (obj.dailySnapshotSchedule = message.dailySnapshotSchedule
                ? DailySnapshotSchedule.toJSON(message.dailySnapshotSchedule)
                : undefined);
        message.weeklySnapshotSchedule !== undefined &&
            (obj.weeklySnapshotSchedule = message.weeklySnapshotSchedule
                ? WeeklySnapshotSchedule.toJSON(message.weeklySnapshotSchedule)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SnapshotSchedule>, I>>(object: I): SnapshotSchedule {
        const message = { ...baseSnapshotSchedule } as SnapshotSchedule;
        message.hourlySnapshotSchedule =
            object.hourlySnapshotSchedule !== undefined && object.hourlySnapshotSchedule !== null
                ? HourlySnapshotSchedule.fromPartial(object.hourlySnapshotSchedule)
                : undefined;
        message.dailySnapshotSchedule =
            object.dailySnapshotSchedule !== undefined && object.dailySnapshotSchedule !== null
                ? DailySnapshotSchedule.fromPartial(object.dailySnapshotSchedule)
                : undefined;
        message.weeklySnapshotSchedule =
            object.weeklySnapshotSchedule !== undefined && object.weeklySnapshotSchedule !== null
                ? WeeklySnapshotSchedule.fromPartial(object.weeklySnapshotSchedule)
                : undefined;
        return message;
    },
};

const baseHourlySnapshotSchedule: object = { minute: 0 };

export const HourlySnapshotSchedule = {
    encode(message: HourlySnapshotSchedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.minute !== 0) {
            writer.uint32(8).int64(message.minute);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HourlySnapshotSchedule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHourlySnapshotSchedule } as HourlySnapshotSchedule;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minute = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HourlySnapshotSchedule {
        const message = { ...baseHourlySnapshotSchedule } as HourlySnapshotSchedule;
        message.minute =
            object.minute !== undefined && object.minute !== null ? Number(object.minute) : 0;
        return message;
    },

    toJSON(message: HourlySnapshotSchedule): unknown {
        const obj: any = {};
        message.minute !== undefined && (obj.minute = Math.round(message.minute));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HourlySnapshotSchedule>, I>>(
        object: I,
    ): HourlySnapshotSchedule {
        const message = { ...baseHourlySnapshotSchedule } as HourlySnapshotSchedule;
        message.minute = object.minute ?? 0;
        return message;
    },
};

const baseDailySnapshotSchedule: object = { hour: 0, minute: 0 };

export const DailySnapshotSchedule = {
    encode(message: DailySnapshotSchedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.hour !== 0) {
            writer.uint32(8).int64(message.hour);
        }
        if (message.minute !== 0) {
            writer.uint32(16).int64(message.minute);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DailySnapshotSchedule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDailySnapshotSchedule } as DailySnapshotSchedule;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hour = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.minute = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DailySnapshotSchedule {
        const message = { ...baseDailySnapshotSchedule } as DailySnapshotSchedule;
        message.hour = object.hour !== undefined && object.hour !== null ? Number(object.hour) : 0;
        message.minute =
            object.minute !== undefined && object.minute !== null ? Number(object.minute) : 0;
        return message;
    },

    toJSON(message: DailySnapshotSchedule): unknown {
        const obj: any = {};
        message.hour !== undefined && (obj.hour = Math.round(message.hour));
        message.minute !== undefined && (obj.minute = Math.round(message.minute));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DailySnapshotSchedule>, I>>(
        object: I,
    ): DailySnapshotSchedule {
        const message = { ...baseDailySnapshotSchedule } as DailySnapshotSchedule;
        message.hour = object.hour ?? 0;
        message.minute = object.minute ?? 0;
        return message;
    },
};

const baseWeeklySnapshotSchedule: object = { day: 0, hour: 0, minute: 0 };

export const WeeklySnapshotSchedule = {
    encode(message: WeeklySnapshotSchedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.day !== 0) {
            writer.uint32(8).int32(message.day);
        }
        if (message.hour !== 0) {
            writer.uint32(16).int64(message.hour);
        }
        if (message.minute !== 0) {
            writer.uint32(24).int64(message.minute);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WeeklySnapshotSchedule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWeeklySnapshotSchedule } as WeeklySnapshotSchedule;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.day = reader.int32() as any;
                    break;
                case 2:
                    message.hour = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.minute = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WeeklySnapshotSchedule {
        const message = { ...baseWeeklySnapshotSchedule } as WeeklySnapshotSchedule;
        message.day =
            object.day !== undefined && object.day !== null
                ? weeklySnapshotSchedule_WeekDayFromJSON(object.day)
                : 0;
        message.hour = object.hour !== undefined && object.hour !== null ? Number(object.hour) : 0;
        message.minute =
            object.minute !== undefined && object.minute !== null ? Number(object.minute) : 0;
        return message;
    },

    toJSON(message: WeeklySnapshotSchedule): unknown {
        const obj: any = {};
        message.day !== undefined && (obj.day = weeklySnapshotSchedule_WeekDayToJSON(message.day));
        message.hour !== undefined && (obj.hour = Math.round(message.hour));
        message.minute !== undefined && (obj.minute = Math.round(message.minute));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<WeeklySnapshotSchedule>, I>>(
        object: I,
    ): WeeklySnapshotSchedule {
        const message = { ...baseWeeklySnapshotSchedule } as WeeklySnapshotSchedule;
        message.day = object.day ?? 0;
        message.hour = object.hour ?? 0;
        message.minute = object.minute ?? 0;
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
