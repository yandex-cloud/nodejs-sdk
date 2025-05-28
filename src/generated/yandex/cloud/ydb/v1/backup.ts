/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { TimeOfDay } from '../../../../google/type/timeofday';
import { Duration } from '../../../../google/protobuf/duration';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { DayOfWeek, dayOfWeekFromJSON, dayOfWeekToJSON } from '../../../../google/type/dayofweek';

export const protobufPackage = 'yandex.cloud.ydb.v1';

export interface BackupSchedule {
    dailyBackupSchedule?: DailyBackupSchedule | undefined;
    weeklyBackupSchedule?: WeeklyBackupSchedule | undefined;
    recurringBackupSchedule?: RecurringBackupSchedule | undefined;
    /**
     * output only field: when next backup will be executed
     * using provided schedule.
     */
    nextExecuteTime?: Date;
}

export interface RecurringBackupSchedule {
    /** Timestamp of the first recurrence. */
    startTime?: Date;
    /**
     * An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how
     * this backup reccurs.
     * The FREQ values of MINUTELY, and SECONDLY are not supported.
     */
    recurrence: string;
}

export interface DaysOfWeekBackupSchedule {
    days: DayOfWeek[];
    executeTime?: TimeOfDay;
}

export interface WeeklyBackupSchedule {
    daysOfWeek: DaysOfWeekBackupSchedule[];
}

export interface DailyBackupSchedule {
    executeTime?: TimeOfDay;
}

export interface BackupSettings {
    /** name of backup settings */
    name: string;
    /** human readable description. */
    description: string;
    /** provide schedule. if empty, backup will be disabled. */
    backupSchedule?: BackupSchedule;
    /** provide time to live of backup. */
    backupTimeToLive?: Duration;
    /**
     * provide a list of source paths. Each path can be directory, table or even database itself.
     * Each directory (or database) will be traversed recursively and all childs of directory will be included to backup.
     * By default, backup will be created for full database.
     */
    sourcePaths: string[];
    /**
     * provide a list of paths to exclude from backup.
     * Each path is a directory, table, or database.
     * Each directory (or database) will be traversed recursively and all childs of directory will be excluded.
     */
    sourcePathsToExclude: string[];
    type: BackupSettings_Type;
    storageClass: BackupSettings_StorageClass;
}

export enum BackupSettings_Type {
    TYPE_UNSPECIFIED = 0,
    SYSTEM = 1,
    USER = 2,
    UNRECOGNIZED = -1,
}

export function backupSettings_TypeFromJSON(object: any): BackupSettings_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return BackupSettings_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'SYSTEM':
            return BackupSettings_Type.SYSTEM;
        case 2:
        case 'USER':
            return BackupSettings_Type.USER;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return BackupSettings_Type.UNRECOGNIZED;
    }
}

export function backupSettings_TypeToJSON(object: BackupSettings_Type): string {
    switch (object) {
        case BackupSettings_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case BackupSettings_Type.SYSTEM:
            return 'SYSTEM';
        case BackupSettings_Type.USER:
            return 'USER';
        default:
            return 'UNKNOWN';
    }
}

export enum BackupSettings_StorageClass {
    STORAGE_CLASS_UNSPECIFIED = 0,
    STANDARD = 1,
    REDUCED_REDUNDANCY = 2,
    STANDARD_IA = 3,
    ONEZONE_IA = 4,
    INTELLIGENT_TIERING = 5,
    GLACIER = 6,
    DEEP_ARCHIVE = 7,
    OUTPOSTS = 8,
    UNRECOGNIZED = -1,
}

export function backupSettings_StorageClassFromJSON(object: any): BackupSettings_StorageClass {
    switch (object) {
        case 0:
        case 'STORAGE_CLASS_UNSPECIFIED':
            return BackupSettings_StorageClass.STORAGE_CLASS_UNSPECIFIED;
        case 1:
        case 'STANDARD':
            return BackupSettings_StorageClass.STANDARD;
        case 2:
        case 'REDUCED_REDUNDANCY':
            return BackupSettings_StorageClass.REDUCED_REDUNDANCY;
        case 3:
        case 'STANDARD_IA':
            return BackupSettings_StorageClass.STANDARD_IA;
        case 4:
        case 'ONEZONE_IA':
            return BackupSettings_StorageClass.ONEZONE_IA;
        case 5:
        case 'INTELLIGENT_TIERING':
            return BackupSettings_StorageClass.INTELLIGENT_TIERING;
        case 6:
        case 'GLACIER':
            return BackupSettings_StorageClass.GLACIER;
        case 7:
        case 'DEEP_ARCHIVE':
            return BackupSettings_StorageClass.DEEP_ARCHIVE;
        case 8:
        case 'OUTPOSTS':
            return BackupSettings_StorageClass.OUTPOSTS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return BackupSettings_StorageClass.UNRECOGNIZED;
    }
}

export function backupSettings_StorageClassToJSON(object: BackupSettings_StorageClass): string {
    switch (object) {
        case BackupSettings_StorageClass.STORAGE_CLASS_UNSPECIFIED:
            return 'STORAGE_CLASS_UNSPECIFIED';
        case BackupSettings_StorageClass.STANDARD:
            return 'STANDARD';
        case BackupSettings_StorageClass.REDUCED_REDUNDANCY:
            return 'REDUCED_REDUNDANCY';
        case BackupSettings_StorageClass.STANDARD_IA:
            return 'STANDARD_IA';
        case BackupSettings_StorageClass.ONEZONE_IA:
            return 'ONEZONE_IA';
        case BackupSettings_StorageClass.INTELLIGENT_TIERING:
            return 'INTELLIGENT_TIERING';
        case BackupSettings_StorageClass.GLACIER:
            return 'GLACIER';
        case BackupSettings_StorageClass.DEEP_ARCHIVE:
            return 'DEEP_ARCHIVE';
        case BackupSettings_StorageClass.OUTPOSTS:
            return 'OUTPOSTS';
        default:
            return 'UNKNOWN';
    }
}

export interface BackupConfig {
    backupSettings: BackupSettings[];
}

export interface Backup {
    id: string;
    /** human readable backup name. */
    name: string;
    folderId: string;
    databaseId: string;
    /** description of backup. */
    description: string;
    createdAt?: Date;
    /** indicates when backup started. */
    startedAt?: Date;
    /** indicates when backup completed. */
    completedAt?: Date;
    status: Backup_Status;
    /** settings used to make backup. */
    backupSettings?: BackupSettings;
    type: Backup_Type;
    /** size of backup in bytes. */
    size: number;
}

/** id of backup */
export enum Backup_Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    READY = 2,
    ERROR = 3,
    CANCELLED = 4,
    UNRECOGNIZED = -1,
}

export function backup_StatusFromJSON(object: any): Backup_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Backup_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Backup_Status.CREATING;
        case 2:
        case 'READY':
            return Backup_Status.READY;
        case 3:
        case 'ERROR':
            return Backup_Status.ERROR;
        case 4:
        case 'CANCELLED':
            return Backup_Status.CANCELLED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Backup_Status.UNRECOGNIZED;
    }
}

export function backup_StatusToJSON(object: Backup_Status): string {
    switch (object) {
        case Backup_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Backup_Status.CREATING:
            return 'CREATING';
        case Backup_Status.READY:
            return 'READY';
        case Backup_Status.ERROR:
            return 'ERROR';
        case Backup_Status.CANCELLED:
            return 'CANCELLED';
        default:
            return 'UNKNOWN';
    }
}

export enum Backup_Type {
    TYPE_UNSPECIFIED = 0,
    /** SYSTEM - indicates that backup started by the system. */
    SYSTEM = 1,
    USER = 2,
    UNRECOGNIZED = -1,
}

export function backup_TypeFromJSON(object: any): Backup_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return Backup_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'SYSTEM':
            return Backup_Type.SYSTEM;
        case 2:
        case 'USER':
            return Backup_Type.USER;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Backup_Type.UNRECOGNIZED;
    }
}

export function backup_TypeToJSON(object: Backup_Type): string {
    switch (object) {
        case Backup_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case Backup_Type.SYSTEM:
            return 'SYSTEM';
        case Backup_Type.USER:
            return 'USER';
        default:
            return 'UNKNOWN';
    }
}

const baseBackupSchedule: object = {};

export const BackupSchedule = {
    encode(message: BackupSchedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.dailyBackupSchedule !== undefined) {
            DailyBackupSchedule.encode(
                message.dailyBackupSchedule,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.weeklyBackupSchedule !== undefined) {
            WeeklyBackupSchedule.encode(
                message.weeklyBackupSchedule,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.recurringBackupSchedule !== undefined) {
            RecurringBackupSchedule.encode(
                message.recurringBackupSchedule,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        if (message.nextExecuteTime !== undefined) {
            Timestamp.encode(
                toTimestamp(message.nextExecuteTime),
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BackupSchedule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBackupSchedule } as BackupSchedule;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dailyBackupSchedule = DailyBackupSchedule.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.weeklyBackupSchedule = WeeklyBackupSchedule.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 4:
                    message.recurringBackupSchedule = RecurringBackupSchedule.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.nextExecuteTime = fromTimestamp(
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

    fromJSON(object: any): BackupSchedule {
        const message = { ...baseBackupSchedule } as BackupSchedule;
        message.dailyBackupSchedule =
            object.dailyBackupSchedule !== undefined && object.dailyBackupSchedule !== null
                ? DailyBackupSchedule.fromJSON(object.dailyBackupSchedule)
                : undefined;
        message.weeklyBackupSchedule =
            object.weeklyBackupSchedule !== undefined && object.weeklyBackupSchedule !== null
                ? WeeklyBackupSchedule.fromJSON(object.weeklyBackupSchedule)
                : undefined;
        message.recurringBackupSchedule =
            object.recurringBackupSchedule !== undefined && object.recurringBackupSchedule !== null
                ? RecurringBackupSchedule.fromJSON(object.recurringBackupSchedule)
                : undefined;
        message.nextExecuteTime =
            object.nextExecuteTime !== undefined && object.nextExecuteTime !== null
                ? fromJsonTimestamp(object.nextExecuteTime)
                : undefined;
        return message;
    },

    toJSON(message: BackupSchedule): unknown {
        const obj: any = {};
        message.dailyBackupSchedule !== undefined &&
            (obj.dailyBackupSchedule = message.dailyBackupSchedule
                ? DailyBackupSchedule.toJSON(message.dailyBackupSchedule)
                : undefined);
        message.weeklyBackupSchedule !== undefined &&
            (obj.weeklyBackupSchedule = message.weeklyBackupSchedule
                ? WeeklyBackupSchedule.toJSON(message.weeklyBackupSchedule)
                : undefined);
        message.recurringBackupSchedule !== undefined &&
            (obj.recurringBackupSchedule = message.recurringBackupSchedule
                ? RecurringBackupSchedule.toJSON(message.recurringBackupSchedule)
                : undefined);
        message.nextExecuteTime !== undefined &&
            (obj.nextExecuteTime = message.nextExecuteTime.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BackupSchedule>, I>>(object: I): BackupSchedule {
        const message = { ...baseBackupSchedule } as BackupSchedule;
        message.dailyBackupSchedule =
            object.dailyBackupSchedule !== undefined && object.dailyBackupSchedule !== null
                ? DailyBackupSchedule.fromPartial(object.dailyBackupSchedule)
                : undefined;
        message.weeklyBackupSchedule =
            object.weeklyBackupSchedule !== undefined && object.weeklyBackupSchedule !== null
                ? WeeklyBackupSchedule.fromPartial(object.weeklyBackupSchedule)
                : undefined;
        message.recurringBackupSchedule =
            object.recurringBackupSchedule !== undefined && object.recurringBackupSchedule !== null
                ? RecurringBackupSchedule.fromPartial(object.recurringBackupSchedule)
                : undefined;
        message.nextExecuteTime = object.nextExecuteTime ?? undefined;
        return message;
    },
};

const baseRecurringBackupSchedule: object = { recurrence: '' };

export const RecurringBackupSchedule = {
    encode(message: RecurringBackupSchedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.startTime !== undefined) {
            Timestamp.encode(toTimestamp(message.startTime), writer.uint32(10).fork()).ldelim();
        }
        if (message.recurrence !== '') {
            writer.uint32(18).string(message.recurrence);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RecurringBackupSchedule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRecurringBackupSchedule } as RecurringBackupSchedule;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.recurrence = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RecurringBackupSchedule {
        const message = { ...baseRecurringBackupSchedule } as RecurringBackupSchedule;
        message.startTime =
            object.startTime !== undefined && object.startTime !== null
                ? fromJsonTimestamp(object.startTime)
                : undefined;
        message.recurrence =
            object.recurrence !== undefined && object.recurrence !== null
                ? String(object.recurrence)
                : '';
        return message;
    },

    toJSON(message: RecurringBackupSchedule): unknown {
        const obj: any = {};
        message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
        message.recurrence !== undefined && (obj.recurrence = message.recurrence);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RecurringBackupSchedule>, I>>(
        object: I,
    ): RecurringBackupSchedule {
        const message = { ...baseRecurringBackupSchedule } as RecurringBackupSchedule;
        message.startTime = object.startTime ?? undefined;
        message.recurrence = object.recurrence ?? '';
        return message;
    },
};

const baseDaysOfWeekBackupSchedule: object = { days: 0 };

export const DaysOfWeekBackupSchedule = {
    encode(
        message: DaysOfWeekBackupSchedule,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        writer.uint32(10).fork();
        for (const v of message.days) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.executeTime !== undefined) {
            TimeOfDay.encode(message.executeTime, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DaysOfWeekBackupSchedule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDaysOfWeekBackupSchedule } as DaysOfWeekBackupSchedule;
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
                    message.executeTime = TimeOfDay.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DaysOfWeekBackupSchedule {
        const message = { ...baseDaysOfWeekBackupSchedule } as DaysOfWeekBackupSchedule;
        message.days = (object.days ?? []).map((e: any) => dayOfWeekFromJSON(e));
        message.executeTime =
            object.executeTime !== undefined && object.executeTime !== null
                ? TimeOfDay.fromJSON(object.executeTime)
                : undefined;
        return message;
    },

    toJSON(message: DaysOfWeekBackupSchedule): unknown {
        const obj: any = {};
        if (message.days) {
            obj.days = message.days.map((e) => dayOfWeekToJSON(e));
        } else {
            obj.days = [];
        }
        message.executeTime !== undefined &&
            (obj.executeTime = message.executeTime
                ? TimeOfDay.toJSON(message.executeTime)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DaysOfWeekBackupSchedule>, I>>(
        object: I,
    ): DaysOfWeekBackupSchedule {
        const message = { ...baseDaysOfWeekBackupSchedule } as DaysOfWeekBackupSchedule;
        message.days = object.days?.map((e) => e) || [];
        message.executeTime =
            object.executeTime !== undefined && object.executeTime !== null
                ? TimeOfDay.fromPartial(object.executeTime)
                : undefined;
        return message;
    },
};

const baseWeeklyBackupSchedule: object = {};

export const WeeklyBackupSchedule = {
    encode(message: WeeklyBackupSchedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.daysOfWeek) {
            DaysOfWeekBackupSchedule.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WeeklyBackupSchedule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWeeklyBackupSchedule } as WeeklyBackupSchedule;
        message.daysOfWeek = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.daysOfWeek.push(
                        DaysOfWeekBackupSchedule.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WeeklyBackupSchedule {
        const message = { ...baseWeeklyBackupSchedule } as WeeklyBackupSchedule;
        message.daysOfWeek = (object.daysOfWeek ?? []).map((e: any) =>
            DaysOfWeekBackupSchedule.fromJSON(e),
        );
        return message;
    },

    toJSON(message: WeeklyBackupSchedule): unknown {
        const obj: any = {};
        if (message.daysOfWeek) {
            obj.daysOfWeek = message.daysOfWeek.map((e) =>
                e ? DaysOfWeekBackupSchedule.toJSON(e) : undefined,
            );
        } else {
            obj.daysOfWeek = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<WeeklyBackupSchedule>, I>>(
        object: I,
    ): WeeklyBackupSchedule {
        const message = { ...baseWeeklyBackupSchedule } as WeeklyBackupSchedule;
        message.daysOfWeek =
            object.daysOfWeek?.map((e) => DaysOfWeekBackupSchedule.fromPartial(e)) || [];
        return message;
    },
};

const baseDailyBackupSchedule: object = {};

export const DailyBackupSchedule = {
    encode(message: DailyBackupSchedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.executeTime !== undefined) {
            TimeOfDay.encode(message.executeTime, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DailyBackupSchedule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDailyBackupSchedule } as DailyBackupSchedule;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.executeTime = TimeOfDay.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DailyBackupSchedule {
        const message = { ...baseDailyBackupSchedule } as DailyBackupSchedule;
        message.executeTime =
            object.executeTime !== undefined && object.executeTime !== null
                ? TimeOfDay.fromJSON(object.executeTime)
                : undefined;
        return message;
    },

    toJSON(message: DailyBackupSchedule): unknown {
        const obj: any = {};
        message.executeTime !== undefined &&
            (obj.executeTime = message.executeTime
                ? TimeOfDay.toJSON(message.executeTime)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DailyBackupSchedule>, I>>(
        object: I,
    ): DailyBackupSchedule {
        const message = { ...baseDailyBackupSchedule } as DailyBackupSchedule;
        message.executeTime =
            object.executeTime !== undefined && object.executeTime !== null
                ? TimeOfDay.fromPartial(object.executeTime)
                : undefined;
        return message;
    },
};

const baseBackupSettings: object = {
    name: '',
    description: '',
    sourcePaths: '',
    sourcePathsToExclude: '',
    type: 0,
    storageClass: 0,
};

export const BackupSettings = {
    encode(message: BackupSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.backupSchedule !== undefined) {
            BackupSchedule.encode(message.backupSchedule, writer.uint32(26).fork()).ldelim();
        }
        if (message.backupTimeToLive !== undefined) {
            Duration.encode(message.backupTimeToLive, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.sourcePaths) {
            writer.uint32(42).string(v!);
        }
        for (const v of message.sourcePathsToExclude) {
            writer.uint32(50).string(v!);
        }
        if (message.type !== 0) {
            writer.uint32(56).int32(message.type);
        }
        if (message.storageClass !== 0) {
            writer.uint32(64).int32(message.storageClass);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BackupSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBackupSettings } as BackupSettings;
        message.sourcePaths = [];
        message.sourcePathsToExclude = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.backupSchedule = BackupSchedule.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.backupTimeToLive = Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.sourcePaths.push(reader.string());
                    break;
                case 6:
                    message.sourcePathsToExclude.push(reader.string());
                    break;
                case 7:
                    message.type = reader.int32() as any;
                    break;
                case 8:
                    message.storageClass = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BackupSettings {
        const message = { ...baseBackupSettings } as BackupSettings;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.backupSchedule =
            object.backupSchedule !== undefined && object.backupSchedule !== null
                ? BackupSchedule.fromJSON(object.backupSchedule)
                : undefined;
        message.backupTimeToLive =
            object.backupTimeToLive !== undefined && object.backupTimeToLive !== null
                ? Duration.fromJSON(object.backupTimeToLive)
                : undefined;
        message.sourcePaths = (object.sourcePaths ?? []).map((e: any) => String(e));
        message.sourcePathsToExclude = (object.sourcePathsToExclude ?? []).map((e: any) =>
            String(e),
        );
        message.type =
            object.type !== undefined && object.type !== null
                ? backupSettings_TypeFromJSON(object.type)
                : 0;
        message.storageClass =
            object.storageClass !== undefined && object.storageClass !== null
                ? backupSettings_StorageClassFromJSON(object.storageClass)
                : 0;
        return message;
    },

    toJSON(message: BackupSettings): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.backupSchedule !== undefined &&
            (obj.backupSchedule = message.backupSchedule
                ? BackupSchedule.toJSON(message.backupSchedule)
                : undefined);
        message.backupTimeToLive !== undefined &&
            (obj.backupTimeToLive = message.backupTimeToLive
                ? Duration.toJSON(message.backupTimeToLive)
                : undefined);
        if (message.sourcePaths) {
            obj.sourcePaths = message.sourcePaths.map((e) => e);
        } else {
            obj.sourcePaths = [];
        }
        if (message.sourcePathsToExclude) {
            obj.sourcePathsToExclude = message.sourcePathsToExclude.map((e) => e);
        } else {
            obj.sourcePathsToExclude = [];
        }
        message.type !== undefined && (obj.type = backupSettings_TypeToJSON(message.type));
        message.storageClass !== undefined &&
            (obj.storageClass = backupSettings_StorageClassToJSON(message.storageClass));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BackupSettings>, I>>(object: I): BackupSettings {
        const message = { ...baseBackupSettings } as BackupSettings;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.backupSchedule =
            object.backupSchedule !== undefined && object.backupSchedule !== null
                ? BackupSchedule.fromPartial(object.backupSchedule)
                : undefined;
        message.backupTimeToLive =
            object.backupTimeToLive !== undefined && object.backupTimeToLive !== null
                ? Duration.fromPartial(object.backupTimeToLive)
                : undefined;
        message.sourcePaths = object.sourcePaths?.map((e) => e) || [];
        message.sourcePathsToExclude = object.sourcePathsToExclude?.map((e) => e) || [];
        message.type = object.type ?? 0;
        message.storageClass = object.storageClass ?? 0;
        return message;
    },
};

const baseBackupConfig: object = {};

export const BackupConfig = {
    encode(message: BackupConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.backupSettings) {
            BackupSettings.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BackupConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBackupConfig } as BackupConfig;
        message.backupSettings = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupSettings.push(BackupSettings.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BackupConfig {
        const message = { ...baseBackupConfig } as BackupConfig;
        message.backupSettings = (object.backupSettings ?? []).map((e: any) =>
            BackupSettings.fromJSON(e),
        );
        return message;
    },

    toJSON(message: BackupConfig): unknown {
        const obj: any = {};
        if (message.backupSettings) {
            obj.backupSettings = message.backupSettings.map((e) =>
                e ? BackupSettings.toJSON(e) : undefined,
            );
        } else {
            obj.backupSettings = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BackupConfig>, I>>(object: I): BackupConfig {
        const message = { ...baseBackupConfig } as BackupConfig;
        message.backupSettings =
            object.backupSettings?.map((e) => BackupSettings.fromPartial(e)) || [];
        return message;
    },
};

const baseBackup: object = {
    id: '',
    name: '',
    folderId: '',
    databaseId: '',
    description: '',
    status: 0,
    type: 0,
    size: 0,
};

export const Backup = {
    encode(message: Backup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.folderId !== '') {
            writer.uint32(26).string(message.folderId);
        }
        if (message.databaseId !== '') {
            writer.uint32(34).string(message.databaseId);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
        }
        if (message.startedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.completedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.completedAt), writer.uint32(66).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(72).int32(message.status);
        }
        if (message.backupSettings !== undefined) {
            BackupSettings.encode(message.backupSettings, writer.uint32(82).fork()).ldelim();
        }
        if (message.type !== 0) {
            writer.uint32(88).int32(message.type);
        }
        if (message.size !== 0) {
            writer.uint32(96).int64(message.size);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Backup {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBackup } as Backup;
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
                case 4:
                    message.databaseId = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.startedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.completedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.status = reader.int32() as any;
                    break;
                case 10:
                    message.backupSettings = BackupSettings.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.type = reader.int32() as any;
                    break;
                case 12:
                    message.size = longToNumber(reader.int64() as Long);
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
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.databaseId =
            object.databaseId !== undefined && object.databaseId !== null
                ? String(object.databaseId)
                : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.startedAt =
            object.startedAt !== undefined && object.startedAt !== null
                ? fromJsonTimestamp(object.startedAt)
                : undefined;
        message.completedAt =
            object.completedAt !== undefined && object.completedAt !== null
                ? fromJsonTimestamp(object.completedAt)
                : undefined;
        message.status =
            object.status !== undefined && object.status !== null
                ? backup_StatusFromJSON(object.status)
                : 0;
        message.backupSettings =
            object.backupSettings !== undefined && object.backupSettings !== null
                ? BackupSettings.fromJSON(object.backupSettings)
                : undefined;
        message.type =
            object.type !== undefined && object.type !== null
                ? backup_TypeFromJSON(object.type)
                : 0;
        message.size = object.size !== undefined && object.size !== null ? Number(object.size) : 0;
        return message;
    },

    toJSON(message: Backup): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.databaseId !== undefined && (obj.databaseId = message.databaseId);
        message.description !== undefined && (obj.description = message.description);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.startedAt !== undefined && (obj.startedAt = message.startedAt.toISOString());
        message.completedAt !== undefined && (obj.completedAt = message.completedAt.toISOString());
        message.status !== undefined && (obj.status = backup_StatusToJSON(message.status));
        message.backupSettings !== undefined &&
            (obj.backupSettings = message.backupSettings
                ? BackupSettings.toJSON(message.backupSettings)
                : undefined);
        message.type !== undefined && (obj.type = backup_TypeToJSON(message.type));
        message.size !== undefined && (obj.size = Math.round(message.size));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Backup>, I>>(object: I): Backup {
        const message = { ...baseBackup } as Backup;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.folderId = object.folderId ?? '';
        message.databaseId = object.databaseId ?? '';
        message.description = object.description ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.startedAt = object.startedAt ?? undefined;
        message.completedAt = object.completedAt ?? undefined;
        message.status = object.status ?? 0;
        message.backupSettings =
            object.backupSettings !== undefined && object.backupSettings !== null
                ? BackupSettings.fromPartial(object.backupSettings)
                : undefined;
        message.type = object.type ?? 0;
        message.size = object.size ?? 0;
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
