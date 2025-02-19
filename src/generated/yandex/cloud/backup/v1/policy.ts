/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.backup.v1';

/**
 * Format of the backup in policy. For backup locations that can be browsed
 * with a file manager, the backup format determines the number of files and
 * their extension.
 */
export enum Format {
    FORMAT_UNSPECIFIED = 0,
    /** VERSION_11 - A legacy backup format used in older versions. It's not recommended to use. */
    VERSION_11 = 1,
    /** VERSION_12 - A new format recommended in most cases for fast backup and recovery. */
    VERSION_12 = 2,
    /**
     * AUTO - Automatic version selection. Will be used version 12 unless the protection
     * plan (policy) appends backups to the ones created by earlier product
     * versions.
     */
    AUTO = 3,
    UNRECOGNIZED = -1,
}

export function formatFromJSON(object: any): Format {
    switch (object) {
        case 0:
        case 'FORMAT_UNSPECIFIED':
            return Format.FORMAT_UNSPECIFIED;
        case 1:
        case 'VERSION_11':
            return Format.VERSION_11;
        case 2:
        case 'VERSION_12':
            return Format.VERSION_12;
        case 3:
        case 'AUTO':
            return Format.AUTO;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Format.UNRECOGNIZED;
    }
}

export function formatToJSON(object: Format): string {
    switch (object) {
        case Format.FORMAT_UNSPECIFIED:
            return 'FORMAT_UNSPECIFIED';
        case Format.VERSION_11:
            return 'VERSION_11';
        case Format.VERSION_12:
            return 'VERSION_12';
        case Format.AUTO:
            return 'AUTO';
        default:
            return 'UNKNOWN';
    }
}

export interface Policy {
    /** Policy ID. */
    id: string;
    /** Policy name. */
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
    /** If this field is true, it means that the policy is enabled. */
    enabled: boolean;
    /** Set of policy settings */
    settings?: PolicySettings;
    /** ID of the folder that the policy belongs to. */
    folderId: string;
}

/** Set of policy settings */
export interface PolicySettings {
    /** Archive compression level. */
    compression: PolicySettings_Compression;
    /** Format of the Cyberprotect backup archive. */
    format: Format;
    /** If true, snapshots of multiple volumes will be taken simultaneously. */
    multiVolumeSnapshottingEnabled: boolean;
    /** If true, the file security settings will be preserved. */
    preserveFileSecuritySettings: boolean;
    /** Configuration of retries on recoverable errors during the backup operations like reconnection to destination. No attempts to fix recoverable errors will be made if retry configuration is not set. */
    reattempts?: PolicySettings_RetriesConfiguration;
    /** If true, a user interaction will be avoided when possible. Equals to false if value is not specified. */
    silentModeEnabled: boolean;
    /** Determines the size to split backups on. Splitting is not performed if value is not specified. */
    splitting?: PolicySettings_Splitting;
    /** Configuration of retries on errors during the creation of the virtual machine snapshot. No attempts to fix recoverable errors will be made if retry configuration is not set. */
    vmSnapshotReattempts?: PolicySettings_RetriesConfiguration;
    /** Settings for the Volume Shadow Copy Service (VSS) provider. If not set, no VSS provider is used. */
    vss?: PolicySettings_VolumeShadowCopyServiceSettings;
    /** The archive properties. */
    archive?: PolicySettings_ArchiveProperties;
    /** Time windows for performance limitations of backup and storage maintenance operations. */
    performanceWindow?: PolicySettings_PerformanceWindow;
    /** Configuration of backup retention rules. */
    retention?: PolicySettings_Retention;
    /** Configuration of the backup schedule. */
    scheduling?: PolicySettings_Scheduling;
    /** A configuration of Changed Block Tracking (CBT). */
    cbt: PolicySettings_ChangedBlockTracking;
    /** If true, determines whether a file has changed by the file size and timestamp. Otherwise, the entire file contents are compared to those stored in the backup. */
    fastBackupEnabled: boolean;
    /** If true, a quiesced snapshot of the virtual machine will be taken. */
    quiesceSnapshottingEnabled: boolean;
}

/** Compression rate of the backups. */
export enum PolicySettings_Compression {
    COMPRESSION_UNSPECIFIED = 0,
    NORMAL = 1,
    HIGH = 2,
    MAX = 3,
    OFF = 4,
    UNRECOGNIZED = -1,
}

export function policySettings_CompressionFromJSON(object: any): PolicySettings_Compression {
    switch (object) {
        case 0:
        case 'COMPRESSION_UNSPECIFIED':
            return PolicySettings_Compression.COMPRESSION_UNSPECIFIED;
        case 1:
        case 'NORMAL':
            return PolicySettings_Compression.NORMAL;
        case 2:
        case 'HIGH':
            return PolicySettings_Compression.HIGH;
        case 3:
        case 'MAX':
            return PolicySettings_Compression.MAX;
        case 4:
        case 'OFF':
            return PolicySettings_Compression.OFF;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PolicySettings_Compression.UNRECOGNIZED;
    }
}

export function policySettings_CompressionToJSON(object: PolicySettings_Compression): string {
    switch (object) {
        case PolicySettings_Compression.COMPRESSION_UNSPECIFIED:
            return 'COMPRESSION_UNSPECIFIED';
        case PolicySettings_Compression.NORMAL:
            return 'NORMAL';
        case PolicySettings_Compression.HIGH:
            return 'HIGH';
        case PolicySettings_Compression.MAX:
            return 'MAX';
        case PolicySettings_Compression.OFF:
            return 'OFF';
        default:
            return 'UNKNOWN';
    }
}

export enum PolicySettings_RepeatePeriod {
    REPEATE_PERIOD_UNSPECIFIED = 0,
    HOURLY = 1,
    DAILY = 2,
    WEEKLY = 3,
    MONTHLY = 4,
    UNRECOGNIZED = -1,
}

export function policySettings_RepeatePeriodFromJSON(object: any): PolicySettings_RepeatePeriod {
    switch (object) {
        case 0:
        case 'REPEATE_PERIOD_UNSPECIFIED':
            return PolicySettings_RepeatePeriod.REPEATE_PERIOD_UNSPECIFIED;
        case 1:
        case 'HOURLY':
            return PolicySettings_RepeatePeriod.HOURLY;
        case 2:
        case 'DAILY':
            return PolicySettings_RepeatePeriod.DAILY;
        case 3:
        case 'WEEKLY':
            return PolicySettings_RepeatePeriod.WEEKLY;
        case 4:
        case 'MONTHLY':
            return PolicySettings_RepeatePeriod.MONTHLY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PolicySettings_RepeatePeriod.UNRECOGNIZED;
    }
}

export function policySettings_RepeatePeriodToJSON(object: PolicySettings_RepeatePeriod): string {
    switch (object) {
        case PolicySettings_RepeatePeriod.REPEATE_PERIOD_UNSPECIFIED:
            return 'REPEATE_PERIOD_UNSPECIFIED';
        case PolicySettings_RepeatePeriod.HOURLY:
            return 'HOURLY';
        case PolicySettings_RepeatePeriod.DAILY:
            return 'DAILY';
        case PolicySettings_RepeatePeriod.WEEKLY:
            return 'WEEKLY';
        case PolicySettings_RepeatePeriod.MONTHLY:
            return 'MONTHLY';
        default:
            return 'UNKNOWN';
    }
}

export enum PolicySettings_Day {
    DAY_UNSPECIFIED = 0,
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6,
    SUNDAY = 7,
    UNRECOGNIZED = -1,
}

export function policySettings_DayFromJSON(object: any): PolicySettings_Day {
    switch (object) {
        case 0:
        case 'DAY_UNSPECIFIED':
            return PolicySettings_Day.DAY_UNSPECIFIED;
        case 1:
        case 'MONDAY':
            return PolicySettings_Day.MONDAY;
        case 2:
        case 'TUESDAY':
            return PolicySettings_Day.TUESDAY;
        case 3:
        case 'WEDNESDAY':
            return PolicySettings_Day.WEDNESDAY;
        case 4:
        case 'THURSDAY':
            return PolicySettings_Day.THURSDAY;
        case 5:
        case 'FRIDAY':
            return PolicySettings_Day.FRIDAY;
        case 6:
        case 'SATURDAY':
            return PolicySettings_Day.SATURDAY;
        case 7:
        case 'SUNDAY':
            return PolicySettings_Day.SUNDAY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PolicySettings_Day.UNRECOGNIZED;
    }
}

export function policySettings_DayToJSON(object: PolicySettings_Day): string {
    switch (object) {
        case PolicySettings_Day.DAY_UNSPECIFIED:
            return 'DAY_UNSPECIFIED';
        case PolicySettings_Day.MONDAY:
            return 'MONDAY';
        case PolicySettings_Day.TUESDAY:
            return 'TUESDAY';
        case PolicySettings_Day.WEDNESDAY:
            return 'WEDNESDAY';
        case PolicySettings_Day.THURSDAY:
            return 'THURSDAY';
        case PolicySettings_Day.FRIDAY:
            return 'FRIDAY';
        case PolicySettings_Day.SATURDAY:
            return 'SATURDAY';
        case PolicySettings_Day.SUNDAY:
            return 'SUNDAY';
        default:
            return 'UNKNOWN';
    }
}

export enum PolicySettings_ChangedBlockTracking {
    CHANGED_BLOCK_TRACKING_UNSPECIFIED = 0,
    USE_IF_ENABLED = 1,
    ENABLE_AND_USE = 2,
    DO_NOT_USE = 3,
    UNRECOGNIZED = -1,
}

export function policySettings_ChangedBlockTrackingFromJSON(
    object: any,
): PolicySettings_ChangedBlockTracking {
    switch (object) {
        case 0:
        case 'CHANGED_BLOCK_TRACKING_UNSPECIFIED':
            return PolicySettings_ChangedBlockTracking.CHANGED_BLOCK_TRACKING_UNSPECIFIED;
        case 1:
        case 'USE_IF_ENABLED':
            return PolicySettings_ChangedBlockTracking.USE_IF_ENABLED;
        case 2:
        case 'ENABLE_AND_USE':
            return PolicySettings_ChangedBlockTracking.ENABLE_AND_USE;
        case 3:
        case 'DO_NOT_USE':
            return PolicySettings_ChangedBlockTracking.DO_NOT_USE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PolicySettings_ChangedBlockTracking.UNRECOGNIZED;
    }
}

export function policySettings_ChangedBlockTrackingToJSON(
    object: PolicySettings_ChangedBlockTracking,
): string {
    switch (object) {
        case PolicySettings_ChangedBlockTracking.CHANGED_BLOCK_TRACKING_UNSPECIFIED:
            return 'CHANGED_BLOCK_TRACKING_UNSPECIFIED';
        case PolicySettings_ChangedBlockTracking.USE_IF_ENABLED:
            return 'USE_IF_ENABLED';
        case PolicySettings_ChangedBlockTracking.ENABLE_AND_USE:
            return 'ENABLE_AND_USE';
        case PolicySettings_ChangedBlockTracking.DO_NOT_USE:
            return 'DO_NOT_USE';
        default:
            return 'UNKNOWN';
    }
}

export interface PolicySettings_Interval {
    /** A type of the interval. */
    type: PolicySettings_Interval_Type;
    /** The amount of value specified in `Interval.Type`. */
    count: number;
}

export enum PolicySettings_Interval_Type {
    TYPE_UNSPECIFIED = 0,
    SECONDS = 1,
    MINUTES = 2,
    HOURS = 3,
    DAYS = 4,
    WEEKS = 5,
    MONTHS = 6,
    UNRECOGNIZED = -1,
}

export function policySettings_Interval_TypeFromJSON(object: any): PolicySettings_Interval_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return PolicySettings_Interval_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'SECONDS':
            return PolicySettings_Interval_Type.SECONDS;
        case 2:
        case 'MINUTES':
            return PolicySettings_Interval_Type.MINUTES;
        case 3:
        case 'HOURS':
            return PolicySettings_Interval_Type.HOURS;
        case 4:
        case 'DAYS':
            return PolicySettings_Interval_Type.DAYS;
        case 5:
        case 'WEEKS':
            return PolicySettings_Interval_Type.WEEKS;
        case 6:
        case 'MONTHS':
            return PolicySettings_Interval_Type.MONTHS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PolicySettings_Interval_Type.UNRECOGNIZED;
    }
}

export function policySettings_Interval_TypeToJSON(object: PolicySettings_Interval_Type): string {
    switch (object) {
        case PolicySettings_Interval_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case PolicySettings_Interval_Type.SECONDS:
            return 'SECONDS';
        case PolicySettings_Interval_Type.MINUTES:
            return 'MINUTES';
        case PolicySettings_Interval_Type.HOURS:
            return 'HOURS';
        case PolicySettings_Interval_Type.DAYS:
            return 'DAYS';
        case PolicySettings_Interval_Type.WEEKS:
            return 'WEEKS';
        case PolicySettings_Interval_Type.MONTHS:
            return 'MONTHS';
        default:
            return 'UNKNOWN';
    }
}

export interface PolicySettings_RetriesConfiguration {
    /** If true, enables retry on errors. */
    enabled: boolean;
    /** An interval between retry attempts. */
    interval?: PolicySettings_Interval;
    /**
     * Max number of retry attempts. Operation will be considered as failed
     * when max number of retry attempts is reached.
     */
    maxAttempts: number;
}

export interface PolicySettings_Splitting {
    /** The size of split backup file in bytes. */
    size: number;
}

/**
 * Settings for Volume Shadow Copy Services which allows to notify
 * VSS-aware applications that backup is about to start. This will
 * ensure the consistent state of all data used by the applications.
 */
export interface PolicySettings_VolumeShadowCopyServiceSettings {
    /** If true, the VSS will be enabled. */
    enabled: boolean;
    /** A type of VSS provider to use in backup. */
    provider: PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider;
}

export enum PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider {
    VSS_PROVIDER_UNSPECIFIED = 0,
    NATIVE = 1,
    TARGET_SYSTEM_DEFINED = 2,
    UNRECOGNIZED = -1,
}

export function policySettings_VolumeShadowCopyServiceSettings_VSSProviderFromJSON(
    object: any,
): PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider {
    switch (object) {
        case 0:
        case 'VSS_PROVIDER_UNSPECIFIED':
            return PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider.VSS_PROVIDER_UNSPECIFIED;
        case 1:
        case 'NATIVE':
            return PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider.NATIVE;
        case 2:
        case 'TARGET_SYSTEM_DEFINED':
            return PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider.TARGET_SYSTEM_DEFINED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider.UNRECOGNIZED;
    }
}

export function policySettings_VolumeShadowCopyServiceSettings_VSSProviderToJSON(
    object: PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider,
): string {
    switch (object) {
        case PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider.VSS_PROVIDER_UNSPECIFIED:
            return 'VSS_PROVIDER_UNSPECIFIED';
        case PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider.NATIVE:
            return 'NATIVE';
        case PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider.TARGET_SYSTEM_DEFINED:
            return 'TARGET_SYSTEM_DEFINED';
        default:
            return 'UNKNOWN';
    }
}

export interface PolicySettings_ArchiveProperties {
    /**
     * The name of the generated archive. The name may use the following variables: `[Machine Name]`, `[Plan ID]`, `[Plan Name]`, `[Unique ID]`, `[Virtualization Server Type]`.
     * Default value: `[Machine Name]-[Plan ID]-[Unique ID]A`.
     */
    name: string;
}

export interface PolicySettings_PerformanceWindow {
    /** If true, the time windows will be enabled. */
    enabled: boolean;
}

export interface PolicySettings_TimeOfDay {
    /** Hours. */
    hour: number;
    /** Minutes. */
    minute: number;
}

export interface PolicySettings_Retention {
    /** A list of retention rules. */
    rules: PolicySettings_Retention_RetentionRule[];
    /** If true, retention rules will be applied before backup is finished. */
    beforeBackup: boolean;
}

export interface PolicySettings_Retention_RetentionRule {
    /** A list of backup sets where rules are effective. */
    backupSet: PolicySettings_RepeatePeriod[];
    maxAge?: PolicySettings_Interval | undefined;
    maxCount: number | undefined;
}

export interface PolicySettings_Scheduling {
    /** A list of schedules with backup sets that compose the whole scheme. */
    backupSets: PolicySettings_Scheduling_BackupSet[];
    /** If true, the backup schedule will be enabled. */
    enabled: boolean;
    /** Max number of backup processes allowed to run in parallel. Unlimited if not set. */
    maxParallelBackups: number;
    /** Configuration of the random delay between the execution of parallel tasks. */
    randMaxDelay?: PolicySettings_Interval;
    /** A backup scheme. Available values: `simple`, `always_full`, `always_incremental`, `weekly_incremental`, `weekly_full_daily_incremental`, `custom`, `cdp`. */
    scheme: PolicySettings_Scheduling_Scheme;
    /** A day of week to start weekly backups. */
    weeklyBackupDay: PolicySettings_Day;
    /** Task failure settings in case of failure of scheduled task, not applicable to  manually launched tasks */
    taskFailure?: PolicySettings_RetriesConfiguration;
}

/** Scheme of backups. */
export enum PolicySettings_Scheduling_Scheme {
    SCHEME_UNSPECIFIED = 0,
    SIMPLE = 1,
    ALWAYS_FULL = 2,
    ALWAYS_INCREMENTAL = 3,
    WEEKLY_INCREMENTAL = 4,
    WEEKLY_FULL_DAILY_INCREMENTAL = 5,
    /**
     * CUSTOM - Custom will require to specify schedules for full, differential
     * and incremental backups additionally.
     */
    CUSTOM = 6,
    CDP = 7,
    UNRECOGNIZED = -1,
}

export function policySettings_Scheduling_SchemeFromJSON(
    object: any,
): PolicySettings_Scheduling_Scheme {
    switch (object) {
        case 0:
        case 'SCHEME_UNSPECIFIED':
            return PolicySettings_Scheduling_Scheme.SCHEME_UNSPECIFIED;
        case 1:
        case 'SIMPLE':
            return PolicySettings_Scheduling_Scheme.SIMPLE;
        case 2:
        case 'ALWAYS_FULL':
            return PolicySettings_Scheduling_Scheme.ALWAYS_FULL;
        case 3:
        case 'ALWAYS_INCREMENTAL':
            return PolicySettings_Scheduling_Scheme.ALWAYS_INCREMENTAL;
        case 4:
        case 'WEEKLY_INCREMENTAL':
            return PolicySettings_Scheduling_Scheme.WEEKLY_INCREMENTAL;
        case 5:
        case 'WEEKLY_FULL_DAILY_INCREMENTAL':
            return PolicySettings_Scheduling_Scheme.WEEKLY_FULL_DAILY_INCREMENTAL;
        case 6:
        case 'CUSTOM':
            return PolicySettings_Scheduling_Scheme.CUSTOM;
        case 7:
        case 'CDP':
            return PolicySettings_Scheduling_Scheme.CDP;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PolicySettings_Scheduling_Scheme.UNRECOGNIZED;
    }
}

export function policySettings_Scheduling_SchemeToJSON(
    object: PolicySettings_Scheduling_Scheme,
): string {
    switch (object) {
        case PolicySettings_Scheduling_Scheme.SCHEME_UNSPECIFIED:
            return 'SCHEME_UNSPECIFIED';
        case PolicySettings_Scheduling_Scheme.SIMPLE:
            return 'SIMPLE';
        case PolicySettings_Scheduling_Scheme.ALWAYS_FULL:
            return 'ALWAYS_FULL';
        case PolicySettings_Scheduling_Scheme.ALWAYS_INCREMENTAL:
            return 'ALWAYS_INCREMENTAL';
        case PolicySettings_Scheduling_Scheme.WEEKLY_INCREMENTAL:
            return 'WEEKLY_INCREMENTAL';
        case PolicySettings_Scheduling_Scheme.WEEKLY_FULL_DAILY_INCREMENTAL:
            return 'WEEKLY_FULL_DAILY_INCREMENTAL';
        case PolicySettings_Scheduling_Scheme.CUSTOM:
            return 'CUSTOM';
        case PolicySettings_Scheduling_Scheme.CDP:
            return 'CDP';
        default:
            return 'UNKNOWN';
    }
}

export interface PolicySettings_Scheduling_BackupSet {
    time?: PolicySettings_Scheduling_BackupSet_Time | undefined;
    sinceLastExecTime?: PolicySettings_Scheduling_BackupSet_SinceLastExecTime | undefined;
    /**
     * BackupSet type -- one of incr, full, differential or auto.
     * if custom scheme is used the BackupSet type should be specified
     */
    type: PolicySettings_Scheduling_BackupSet_Type;
}

export enum PolicySettings_Scheduling_BackupSet_Type {
    TYPE_UNSPECIFIED = 0,
    TYPE_AUTO = 1,
    TYPE_FULL = 2,
    TYPE_INCREMENTAL = 3,
    TYPE_DIFFERENTIAL = 4,
    UNRECOGNIZED = -1,
}

export function policySettings_Scheduling_BackupSet_TypeFromJSON(
    object: any,
): PolicySettings_Scheduling_BackupSet_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return PolicySettings_Scheduling_BackupSet_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'TYPE_AUTO':
            return PolicySettings_Scheduling_BackupSet_Type.TYPE_AUTO;
        case 2:
        case 'TYPE_FULL':
            return PolicySettings_Scheduling_BackupSet_Type.TYPE_FULL;
        case 3:
        case 'TYPE_INCREMENTAL':
            return PolicySettings_Scheduling_BackupSet_Type.TYPE_INCREMENTAL;
        case 4:
        case 'TYPE_DIFFERENTIAL':
            return PolicySettings_Scheduling_BackupSet_Type.TYPE_DIFFERENTIAL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PolicySettings_Scheduling_BackupSet_Type.UNRECOGNIZED;
    }
}

export function policySettings_Scheduling_BackupSet_TypeToJSON(
    object: PolicySettings_Scheduling_BackupSet_Type,
): string {
    switch (object) {
        case PolicySettings_Scheduling_BackupSet_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case PolicySettings_Scheduling_BackupSet_Type.TYPE_AUTO:
            return 'TYPE_AUTO';
        case PolicySettings_Scheduling_BackupSet_Type.TYPE_FULL:
            return 'TYPE_FULL';
        case PolicySettings_Scheduling_BackupSet_Type.TYPE_INCREMENTAL:
            return 'TYPE_INCREMENTAL';
        case PolicySettings_Scheduling_BackupSet_Type.TYPE_DIFFERENTIAL:
            return 'TYPE_DIFFERENTIAL';
        default:
            return 'UNKNOWN';
    }
}

export interface PolicySettings_Scheduling_BackupSet_Time {
    /** Days in a week to perform a backup. */
    weekdays: PolicySettings_Day[];
    /** Time to repeat the backup. */
    repeatAt: PolicySettings_TimeOfDay[];
    /** Frequency of backup repetition. */
    repeatEvery?: PolicySettings_Interval;
    /** The start time of the backup time interval. */
    timeFrom?: PolicySettings_TimeOfDay;
    /** The end time of the backup time interval. */
    timeTo?: PolicySettings_TimeOfDay;
    /**
     * Days in a month to perform a backup.
     * Allowed values are from 1 to 31.
     */
    monthdays: number[];
    /**
     * If set to true, last day of month will activate
     * the policy.
     */
    includeLastDayOfMonth: boolean;
    /** Set of values. Allowed values form 1 to 12. */
    months: number[];
    /** Possible types: `REPEATE_PERIOD_UNSPECIFIED`, `HOURLY`, `DAILY`, `WEEKLY`, `MONTHLY`. */
    type: PolicySettings_RepeatePeriod;
}

export interface PolicySettings_Scheduling_BackupSet_SinceLastExecTime {
    /** The interval between backups. */
    delay?: PolicySettings_Interval;
}

export interface PolicyApplication {
    /** Policy ID. */
    policyId: string;
    /** Compute Cloud instance ID. */
    computeInstanceId: string;
    enabled: boolean;
    status: PolicyApplication_Status;
    createdAt?: Date;
    /** If true, then the policy is in in the process of binding to the instance. */
    isProcessing: boolean;
}

export enum PolicyApplication_Status {
    STATUS_UNSPECIFIED = 0,
    /** OK - Application is applied and everything is OK. */
    OK = 1,
    /** RUNNING - Application is currently running. */
    RUNNING = 2,
    /** DISABLED - Application is disabled. */
    DISABLED = 3,
    UNRECOGNIZED = -1,
}

export function policyApplication_StatusFromJSON(object: any): PolicyApplication_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return PolicyApplication_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'OK':
            return PolicyApplication_Status.OK;
        case 2:
        case 'RUNNING':
            return PolicyApplication_Status.RUNNING;
        case 3:
        case 'DISABLED':
            return PolicyApplication_Status.DISABLED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PolicyApplication_Status.UNRECOGNIZED;
    }
}

export function policyApplication_StatusToJSON(object: PolicyApplication_Status): string {
    switch (object) {
        case PolicyApplication_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case PolicyApplication_Status.OK:
            return 'OK';
        case PolicyApplication_Status.RUNNING:
            return 'RUNNING';
        case PolicyApplication_Status.DISABLED:
            return 'DISABLED';
        default:
            return 'UNKNOWN';
    }
}

const basePolicy: object = { id: '', name: '', enabled: false, folderId: '' };

export const Policy = {
    encode(message: Policy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.enabled === true) {
            writer.uint32(40).bool(message.enabled);
        }
        if (message.settings !== undefined) {
            PolicySettings.encode(message.settings, writer.uint32(50).fork()).ldelim();
        }
        if (message.folderId !== '') {
            writer.uint32(58).string(message.folderId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Policy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePolicy } as Policy;
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
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.enabled = reader.bool();
                    break;
                case 6:
                    message.settings = PolicySettings.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Policy {
        const message = { ...basePolicy } as Policy;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
                : undefined;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? PolicySettings.fromJSON(object.settings)
                : undefined;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        return message;
    },

    toJSON(message: Policy): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.settings !== undefined &&
            (obj.settings = message.settings ? PolicySettings.toJSON(message.settings) : undefined);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Policy>, I>>(object: I): Policy {
        const message = { ...basePolicy } as Policy;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        message.enabled = object.enabled ?? false;
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? PolicySettings.fromPartial(object.settings)
                : undefined;
        message.folderId = object.folderId ?? '';
        return message;
    },
};

const basePolicySettings: object = {
    compression: 0,
    format: 0,
    multiVolumeSnapshottingEnabled: false,
    preserveFileSecuritySettings: false,
    silentModeEnabled: false,
    cbt: 0,
    fastBackupEnabled: false,
    quiesceSnapshottingEnabled: false,
};

export const PolicySettings = {
    encode(message: PolicySettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.compression !== 0) {
            writer.uint32(8).int32(message.compression);
        }
        if (message.format !== 0) {
            writer.uint32(16).int32(message.format);
        }
        if (message.multiVolumeSnapshottingEnabled === true) {
            writer.uint32(24).bool(message.multiVolumeSnapshottingEnabled);
        }
        if (message.preserveFileSecuritySettings === true) {
            writer.uint32(32).bool(message.preserveFileSecuritySettings);
        }
        if (message.reattempts !== undefined) {
            PolicySettings_RetriesConfiguration.encode(
                message.reattempts,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        if (message.silentModeEnabled === true) {
            writer.uint32(48).bool(message.silentModeEnabled);
        }
        if (message.splitting !== undefined) {
            PolicySettings_Splitting.encode(message.splitting, writer.uint32(58).fork()).ldelim();
        }
        if (message.vmSnapshotReattempts !== undefined) {
            PolicySettings_RetriesConfiguration.encode(
                message.vmSnapshotReattempts,
                writer.uint32(66).fork(),
            ).ldelim();
        }
        if (message.vss !== undefined) {
            PolicySettings_VolumeShadowCopyServiceSettings.encode(
                message.vss,
                writer.uint32(74).fork(),
            ).ldelim();
        }
        if (message.archive !== undefined) {
            PolicySettings_ArchiveProperties.encode(
                message.archive,
                writer.uint32(82).fork(),
            ).ldelim();
        }
        if (message.performanceWindow !== undefined) {
            PolicySettings_PerformanceWindow.encode(
                message.performanceWindow,
                writer.uint32(90).fork(),
            ).ldelim();
        }
        if (message.retention !== undefined) {
            PolicySettings_Retention.encode(message.retention, writer.uint32(98).fork()).ldelim();
        }
        if (message.scheduling !== undefined) {
            PolicySettings_Scheduling.encode(
                message.scheduling,
                writer.uint32(122).fork(),
            ).ldelim();
        }
        if (message.cbt !== 0) {
            writer.uint32(128).int32(message.cbt);
        }
        if (message.fastBackupEnabled === true) {
            writer.uint32(136).bool(message.fastBackupEnabled);
        }
        if (message.quiesceSnapshottingEnabled === true) {
            writer.uint32(144).bool(message.quiesceSnapshottingEnabled);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PolicySettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePolicySettings } as PolicySettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.compression = reader.int32() as any;
                    break;
                case 2:
                    message.format = reader.int32() as any;
                    break;
                case 3:
                    message.multiVolumeSnapshottingEnabled = reader.bool();
                    break;
                case 4:
                    message.preserveFileSecuritySettings = reader.bool();
                    break;
                case 5:
                    message.reattempts = PolicySettings_RetriesConfiguration.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 6:
                    message.silentModeEnabled = reader.bool();
                    break;
                case 7:
                    message.splitting = PolicySettings_Splitting.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.vmSnapshotReattempts = PolicySettings_RetriesConfiguration.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 9:
                    message.vss = PolicySettings_VolumeShadowCopyServiceSettings.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 10:
                    message.archive = PolicySettings_ArchiveProperties.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 11:
                    message.performanceWindow = PolicySettings_PerformanceWindow.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 12:
                    message.retention = PolicySettings_Retention.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.scheduling = PolicySettings_Scheduling.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.cbt = reader.int32() as any;
                    break;
                case 17:
                    message.fastBackupEnabled = reader.bool();
                    break;
                case 18:
                    message.quiesceSnapshottingEnabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PolicySettings {
        const message = { ...basePolicySettings } as PolicySettings;
        message.compression =
            object.compression !== undefined && object.compression !== null
                ? policySettings_CompressionFromJSON(object.compression)
                : 0;
        message.format =
            object.format !== undefined && object.format !== null
                ? formatFromJSON(object.format)
                : 0;
        message.multiVolumeSnapshottingEnabled =
            object.multiVolumeSnapshottingEnabled !== undefined &&
            object.multiVolumeSnapshottingEnabled !== null
                ? Boolean(object.multiVolumeSnapshottingEnabled)
                : false;
        message.preserveFileSecuritySettings =
            object.preserveFileSecuritySettings !== undefined &&
            object.preserveFileSecuritySettings !== null
                ? Boolean(object.preserveFileSecuritySettings)
                : false;
        message.reattempts =
            object.reattempts !== undefined && object.reattempts !== null
                ? PolicySettings_RetriesConfiguration.fromJSON(object.reattempts)
                : undefined;
        message.silentModeEnabled =
            object.silentModeEnabled !== undefined && object.silentModeEnabled !== null
                ? Boolean(object.silentModeEnabled)
                : false;
        message.splitting =
            object.splitting !== undefined && object.splitting !== null
                ? PolicySettings_Splitting.fromJSON(object.splitting)
                : undefined;
        message.vmSnapshotReattempts =
            object.vmSnapshotReattempts !== undefined && object.vmSnapshotReattempts !== null
                ? PolicySettings_RetriesConfiguration.fromJSON(object.vmSnapshotReattempts)
                : undefined;
        message.vss =
            object.vss !== undefined && object.vss !== null
                ? PolicySettings_VolumeShadowCopyServiceSettings.fromJSON(object.vss)
                : undefined;
        message.archive =
            object.archive !== undefined && object.archive !== null
                ? PolicySettings_ArchiveProperties.fromJSON(object.archive)
                : undefined;
        message.performanceWindow =
            object.performanceWindow !== undefined && object.performanceWindow !== null
                ? PolicySettings_PerformanceWindow.fromJSON(object.performanceWindow)
                : undefined;
        message.retention =
            object.retention !== undefined && object.retention !== null
                ? PolicySettings_Retention.fromJSON(object.retention)
                : undefined;
        message.scheduling =
            object.scheduling !== undefined && object.scheduling !== null
                ? PolicySettings_Scheduling.fromJSON(object.scheduling)
                : undefined;
        message.cbt =
            object.cbt !== undefined && object.cbt !== null
                ? policySettings_ChangedBlockTrackingFromJSON(object.cbt)
                : 0;
        message.fastBackupEnabled =
            object.fastBackupEnabled !== undefined && object.fastBackupEnabled !== null
                ? Boolean(object.fastBackupEnabled)
                : false;
        message.quiesceSnapshottingEnabled =
            object.quiesceSnapshottingEnabled !== undefined &&
            object.quiesceSnapshottingEnabled !== null
                ? Boolean(object.quiesceSnapshottingEnabled)
                : false;
        return message;
    },

    toJSON(message: PolicySettings): unknown {
        const obj: any = {};
        message.compression !== undefined &&
            (obj.compression = policySettings_CompressionToJSON(message.compression));
        message.format !== undefined && (obj.format = formatToJSON(message.format));
        message.multiVolumeSnapshottingEnabled !== undefined &&
            (obj.multiVolumeSnapshottingEnabled = message.multiVolumeSnapshottingEnabled);
        message.preserveFileSecuritySettings !== undefined &&
            (obj.preserveFileSecuritySettings = message.preserveFileSecuritySettings);
        message.reattempts !== undefined &&
            (obj.reattempts = message.reattempts
                ? PolicySettings_RetriesConfiguration.toJSON(message.reattempts)
                : undefined);
        message.silentModeEnabled !== undefined &&
            (obj.silentModeEnabled = message.silentModeEnabled);
        message.splitting !== undefined &&
            (obj.splitting = message.splitting
                ? PolicySettings_Splitting.toJSON(message.splitting)
                : undefined);
        message.vmSnapshotReattempts !== undefined &&
            (obj.vmSnapshotReattempts = message.vmSnapshotReattempts
                ? PolicySettings_RetriesConfiguration.toJSON(message.vmSnapshotReattempts)
                : undefined);
        message.vss !== undefined &&
            (obj.vss = message.vss
                ? PolicySettings_VolumeShadowCopyServiceSettings.toJSON(message.vss)
                : undefined);
        message.archive !== undefined &&
            (obj.archive = message.archive
                ? PolicySettings_ArchiveProperties.toJSON(message.archive)
                : undefined);
        message.performanceWindow !== undefined &&
            (obj.performanceWindow = message.performanceWindow
                ? PolicySettings_PerformanceWindow.toJSON(message.performanceWindow)
                : undefined);
        message.retention !== undefined &&
            (obj.retention = message.retention
                ? PolicySettings_Retention.toJSON(message.retention)
                : undefined);
        message.scheduling !== undefined &&
            (obj.scheduling = message.scheduling
                ? PolicySettings_Scheduling.toJSON(message.scheduling)
                : undefined);
        message.cbt !== undefined &&
            (obj.cbt = policySettings_ChangedBlockTrackingToJSON(message.cbt));
        message.fastBackupEnabled !== undefined &&
            (obj.fastBackupEnabled = message.fastBackupEnabled);
        message.quiesceSnapshottingEnabled !== undefined &&
            (obj.quiesceSnapshottingEnabled = message.quiesceSnapshottingEnabled);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PolicySettings>, I>>(object: I): PolicySettings {
        const message = { ...basePolicySettings } as PolicySettings;
        message.compression = object.compression ?? 0;
        message.format = object.format ?? 0;
        message.multiVolumeSnapshottingEnabled = object.multiVolumeSnapshottingEnabled ?? false;
        message.preserveFileSecuritySettings = object.preserveFileSecuritySettings ?? false;
        message.reattempts =
            object.reattempts !== undefined && object.reattempts !== null
                ? PolicySettings_RetriesConfiguration.fromPartial(object.reattempts)
                : undefined;
        message.silentModeEnabled = object.silentModeEnabled ?? false;
        message.splitting =
            object.splitting !== undefined && object.splitting !== null
                ? PolicySettings_Splitting.fromPartial(object.splitting)
                : undefined;
        message.vmSnapshotReattempts =
            object.vmSnapshotReattempts !== undefined && object.vmSnapshotReattempts !== null
                ? PolicySettings_RetriesConfiguration.fromPartial(object.vmSnapshotReattempts)
                : undefined;
        message.vss =
            object.vss !== undefined && object.vss !== null
                ? PolicySettings_VolumeShadowCopyServiceSettings.fromPartial(object.vss)
                : undefined;
        message.archive =
            object.archive !== undefined && object.archive !== null
                ? PolicySettings_ArchiveProperties.fromPartial(object.archive)
                : undefined;
        message.performanceWindow =
            object.performanceWindow !== undefined && object.performanceWindow !== null
                ? PolicySettings_PerformanceWindow.fromPartial(object.performanceWindow)
                : undefined;
        message.retention =
            object.retention !== undefined && object.retention !== null
                ? PolicySettings_Retention.fromPartial(object.retention)
                : undefined;
        message.scheduling =
            object.scheduling !== undefined && object.scheduling !== null
                ? PolicySettings_Scheduling.fromPartial(object.scheduling)
                : undefined;
        message.cbt = object.cbt ?? 0;
        message.fastBackupEnabled = object.fastBackupEnabled ?? false;
        message.quiesceSnapshottingEnabled = object.quiesceSnapshottingEnabled ?? false;
        return message;
    },
};

const basePolicySettings_Interval: object = { type: 0, count: 0 };

export const PolicySettings_Interval = {
    encode(message: PolicySettings_Interval, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.count !== 0) {
            writer.uint32(16).int64(message.count);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PolicySettings_Interval {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePolicySettings_Interval } as PolicySettings_Interval;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                case 2:
                    message.count = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PolicySettings_Interval {
        const message = { ...basePolicySettings_Interval } as PolicySettings_Interval;
        message.type =
            object.type !== undefined && object.type !== null
                ? policySettings_Interval_TypeFromJSON(object.type)
                : 0;
        message.count =
            object.count !== undefined && object.count !== null ? Number(object.count) : 0;
        return message;
    },

    toJSON(message: PolicySettings_Interval): unknown {
        const obj: any = {};
        message.type !== undefined && (obj.type = policySettings_Interval_TypeToJSON(message.type));
        message.count !== undefined && (obj.count = Math.round(message.count));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PolicySettings_Interval>, I>>(
        object: I,
    ): PolicySettings_Interval {
        const message = { ...basePolicySettings_Interval } as PolicySettings_Interval;
        message.type = object.type ?? 0;
        message.count = object.count ?? 0;
        return message;
    },
};

const basePolicySettings_RetriesConfiguration: object = { enabled: false, maxAttempts: 0 };

export const PolicySettings_RetriesConfiguration = {
    encode(
        message: PolicySettings_RetriesConfiguration,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.interval !== undefined) {
            PolicySettings_Interval.encode(message.interval, writer.uint32(18).fork()).ldelim();
        }
        if (message.maxAttempts !== 0) {
            writer.uint32(24).int64(message.maxAttempts);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PolicySettings_RetriesConfiguration {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePolicySettings_RetriesConfiguration,
        } as PolicySettings_RetriesConfiguration;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.interval = PolicySettings_Interval.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.maxAttempts = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PolicySettings_RetriesConfiguration {
        const message = {
            ...basePolicySettings_RetriesConfiguration,
        } as PolicySettings_RetriesConfiguration;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.interval =
            object.interval !== undefined && object.interval !== null
                ? PolicySettings_Interval.fromJSON(object.interval)
                : undefined;
        message.maxAttempts =
            object.maxAttempts !== undefined && object.maxAttempts !== null
                ? Number(object.maxAttempts)
                : 0;
        return message;
    },

    toJSON(message: PolicySettings_RetriesConfiguration): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.interval !== undefined &&
            (obj.interval = message.interval
                ? PolicySettings_Interval.toJSON(message.interval)
                : undefined);
        message.maxAttempts !== undefined && (obj.maxAttempts = Math.round(message.maxAttempts));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PolicySettings_RetriesConfiguration>, I>>(
        object: I,
    ): PolicySettings_RetriesConfiguration {
        const message = {
            ...basePolicySettings_RetriesConfiguration,
        } as PolicySettings_RetriesConfiguration;
        message.enabled = object.enabled ?? false;
        message.interval =
            object.interval !== undefined && object.interval !== null
                ? PolicySettings_Interval.fromPartial(object.interval)
                : undefined;
        message.maxAttempts = object.maxAttempts ?? 0;
        return message;
    },
};

const basePolicySettings_Splitting: object = { size: 0 };

export const PolicySettings_Splitting = {
    encode(
        message: PolicySettings_Splitting,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.size !== 0) {
            writer.uint32(8).int64(message.size);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PolicySettings_Splitting {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePolicySettings_Splitting } as PolicySettings_Splitting;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.size = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PolicySettings_Splitting {
        const message = { ...basePolicySettings_Splitting } as PolicySettings_Splitting;
        message.size = object.size !== undefined && object.size !== null ? Number(object.size) : 0;
        return message;
    },

    toJSON(message: PolicySettings_Splitting): unknown {
        const obj: any = {};
        message.size !== undefined && (obj.size = Math.round(message.size));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PolicySettings_Splitting>, I>>(
        object: I,
    ): PolicySettings_Splitting {
        const message = { ...basePolicySettings_Splitting } as PolicySettings_Splitting;
        message.size = object.size ?? 0;
        return message;
    },
};

const basePolicySettings_VolumeShadowCopyServiceSettings: object = { enabled: false, provider: 0 };

export const PolicySettings_VolumeShadowCopyServiceSettings = {
    encode(
        message: PolicySettings_VolumeShadowCopyServiceSettings,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.provider !== 0) {
            writer.uint32(16).int32(message.provider);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): PolicySettings_VolumeShadowCopyServiceSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePolicySettings_VolumeShadowCopyServiceSettings,
        } as PolicySettings_VolumeShadowCopyServiceSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.provider = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PolicySettings_VolumeShadowCopyServiceSettings {
        const message = {
            ...basePolicySettings_VolumeShadowCopyServiceSettings,
        } as PolicySettings_VolumeShadowCopyServiceSettings;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.provider =
            object.provider !== undefined && object.provider !== null
                ? policySettings_VolumeShadowCopyServiceSettings_VSSProviderFromJSON(
                      object.provider,
                  )
                : 0;
        return message;
    },

    toJSON(message: PolicySettings_VolumeShadowCopyServiceSettings): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.provider !== undefined &&
            (obj.provider = policySettings_VolumeShadowCopyServiceSettings_VSSProviderToJSON(
                message.provider,
            ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PolicySettings_VolumeShadowCopyServiceSettings>, I>>(
        object: I,
    ): PolicySettings_VolumeShadowCopyServiceSettings {
        const message = {
            ...basePolicySettings_VolumeShadowCopyServiceSettings,
        } as PolicySettings_VolumeShadowCopyServiceSettings;
        message.enabled = object.enabled ?? false;
        message.provider = object.provider ?? 0;
        return message;
    },
};

const basePolicySettings_ArchiveProperties: object = { name: '' };

export const PolicySettings_ArchiveProperties = {
    encode(
        message: PolicySettings_ArchiveProperties,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PolicySettings_ArchiveProperties {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePolicySettings_ArchiveProperties,
        } as PolicySettings_ArchiveProperties;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PolicySettings_ArchiveProperties {
        const message = {
            ...basePolicySettings_ArchiveProperties,
        } as PolicySettings_ArchiveProperties;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        return message;
    },

    toJSON(message: PolicySettings_ArchiveProperties): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PolicySettings_ArchiveProperties>, I>>(
        object: I,
    ): PolicySettings_ArchiveProperties {
        const message = {
            ...basePolicySettings_ArchiveProperties,
        } as PolicySettings_ArchiveProperties;
        message.name = object.name ?? '';
        return message;
    },
};

const basePolicySettings_PerformanceWindow: object = { enabled: false };

export const PolicySettings_PerformanceWindow = {
    encode(
        message: PolicySettings_PerformanceWindow,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PolicySettings_PerformanceWindow {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePolicySettings_PerformanceWindow,
        } as PolicySettings_PerformanceWindow;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PolicySettings_PerformanceWindow {
        const message = {
            ...basePolicySettings_PerformanceWindow,
        } as PolicySettings_PerformanceWindow;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        return message;
    },

    toJSON(message: PolicySettings_PerformanceWindow): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PolicySettings_PerformanceWindow>, I>>(
        object: I,
    ): PolicySettings_PerformanceWindow {
        const message = {
            ...basePolicySettings_PerformanceWindow,
        } as PolicySettings_PerformanceWindow;
        message.enabled = object.enabled ?? false;
        return message;
    },
};

const basePolicySettings_TimeOfDay: object = { hour: 0, minute: 0 };

export const PolicySettings_TimeOfDay = {
    encode(
        message: PolicySettings_TimeOfDay,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.hour !== 0) {
            writer.uint32(8).int64(message.hour);
        }
        if (message.minute !== 0) {
            writer.uint32(16).int64(message.minute);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PolicySettings_TimeOfDay {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePolicySettings_TimeOfDay } as PolicySettings_TimeOfDay;
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

    fromJSON(object: any): PolicySettings_TimeOfDay {
        const message = { ...basePolicySettings_TimeOfDay } as PolicySettings_TimeOfDay;
        message.hour = object.hour !== undefined && object.hour !== null ? Number(object.hour) : 0;
        message.minute =
            object.minute !== undefined && object.minute !== null ? Number(object.minute) : 0;
        return message;
    },

    toJSON(message: PolicySettings_TimeOfDay): unknown {
        const obj: any = {};
        message.hour !== undefined && (obj.hour = Math.round(message.hour));
        message.minute !== undefined && (obj.minute = Math.round(message.minute));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PolicySettings_TimeOfDay>, I>>(
        object: I,
    ): PolicySettings_TimeOfDay {
        const message = { ...basePolicySettings_TimeOfDay } as PolicySettings_TimeOfDay;
        message.hour = object.hour ?? 0;
        message.minute = object.minute ?? 0;
        return message;
    },
};

const basePolicySettings_Retention: object = { beforeBackup: false };

export const PolicySettings_Retention = {
    encode(
        message: PolicySettings_Retention,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.rules) {
            PolicySettings_Retention_RetentionRule.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.beforeBackup === true) {
            writer.uint32(24).bool(message.beforeBackup);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PolicySettings_Retention {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePolicySettings_Retention } as PolicySettings_Retention;
        message.rules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rules.push(
                        PolicySettings_Retention_RetentionRule.decode(reader, reader.uint32()),
                    );
                    break;
                case 3:
                    message.beforeBackup = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PolicySettings_Retention {
        const message = { ...basePolicySettings_Retention } as PolicySettings_Retention;
        message.rules = (object.rules ?? []).map((e: any) =>
            PolicySettings_Retention_RetentionRule.fromJSON(e),
        );
        message.beforeBackup =
            object.beforeBackup !== undefined && object.beforeBackup !== null
                ? Boolean(object.beforeBackup)
                : false;
        return message;
    },

    toJSON(message: PolicySettings_Retention): unknown {
        const obj: any = {};
        if (message.rules) {
            obj.rules = message.rules.map((e) =>
                e ? PolicySettings_Retention_RetentionRule.toJSON(e) : undefined,
            );
        } else {
            obj.rules = [];
        }
        message.beforeBackup !== undefined && (obj.beforeBackup = message.beforeBackup);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PolicySettings_Retention>, I>>(
        object: I,
    ): PolicySettings_Retention {
        const message = { ...basePolicySettings_Retention } as PolicySettings_Retention;
        message.rules =
            object.rules?.map((e) => PolicySettings_Retention_RetentionRule.fromPartial(e)) || [];
        message.beforeBackup = object.beforeBackup ?? false;
        return message;
    },
};

const basePolicySettings_Retention_RetentionRule: object = { backupSet: 0 };

export const PolicySettings_Retention_RetentionRule = {
    encode(
        message: PolicySettings_Retention_RetentionRule,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        writer.uint32(10).fork();
        for (const v of message.backupSet) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.maxAge !== undefined) {
            PolicySettings_Interval.encode(message.maxAge, writer.uint32(18).fork()).ldelim();
        }
        if (message.maxCount !== undefined) {
            writer.uint32(24).int64(message.maxCount);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): PolicySettings_Retention_RetentionRule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePolicySettings_Retention_RetentionRule,
        } as PolicySettings_Retention_RetentionRule;
        message.backupSet = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.backupSet.push(reader.int32() as any);
                        }
                    } else {
                        message.backupSet.push(reader.int32() as any);
                    }
                    break;
                case 2:
                    message.maxAge = PolicySettings_Interval.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.maxCount = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PolicySettings_Retention_RetentionRule {
        const message = {
            ...basePolicySettings_Retention_RetentionRule,
        } as PolicySettings_Retention_RetentionRule;
        message.backupSet = (object.backupSet ?? []).map((e: any) =>
            policySettings_RepeatePeriodFromJSON(e),
        );
        message.maxAge =
            object.maxAge !== undefined && object.maxAge !== null
                ? PolicySettings_Interval.fromJSON(object.maxAge)
                : undefined;
        message.maxCount =
            object.maxCount !== undefined && object.maxCount !== null
                ? Number(object.maxCount)
                : undefined;
        return message;
    },

    toJSON(message: PolicySettings_Retention_RetentionRule): unknown {
        const obj: any = {};
        if (message.backupSet) {
            obj.backupSet = message.backupSet.map((e) => policySettings_RepeatePeriodToJSON(e));
        } else {
            obj.backupSet = [];
        }
        message.maxAge !== undefined &&
            (obj.maxAge = message.maxAge
                ? PolicySettings_Interval.toJSON(message.maxAge)
                : undefined);
        message.maxCount !== undefined && (obj.maxCount = Math.round(message.maxCount));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PolicySettings_Retention_RetentionRule>, I>>(
        object: I,
    ): PolicySettings_Retention_RetentionRule {
        const message = {
            ...basePolicySettings_Retention_RetentionRule,
        } as PolicySettings_Retention_RetentionRule;
        message.backupSet = object.backupSet?.map((e) => e) || [];
        message.maxAge =
            object.maxAge !== undefined && object.maxAge !== null
                ? PolicySettings_Interval.fromPartial(object.maxAge)
                : undefined;
        message.maxCount = object.maxCount ?? undefined;
        return message;
    },
};

const basePolicySettings_Scheduling: object = {
    enabled: false,
    maxParallelBackups: 0,
    scheme: 0,
    weeklyBackupDay: 0,
};

export const PolicySettings_Scheduling = {
    encode(
        message: PolicySettings_Scheduling,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.backupSets) {
            PolicySettings_Scheduling_BackupSet.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.enabled === true) {
            writer.uint32(16).bool(message.enabled);
        }
        if (message.maxParallelBackups !== 0) {
            writer.uint32(24).int64(message.maxParallelBackups);
        }
        if (message.randMaxDelay !== undefined) {
            PolicySettings_Interval.encode(message.randMaxDelay, writer.uint32(34).fork()).ldelim();
        }
        if (message.scheme !== 0) {
            writer.uint32(40).int32(message.scheme);
        }
        if (message.weeklyBackupDay !== 0) {
            writer.uint32(48).int32(message.weeklyBackupDay);
        }
        if (message.taskFailure !== undefined) {
            PolicySettings_RetriesConfiguration.encode(
                message.taskFailure,
                writer.uint32(58).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PolicySettings_Scheduling {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePolicySettings_Scheduling } as PolicySettings_Scheduling;
        message.backupSets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupSets.push(
                        PolicySettings_Scheduling_BackupSet.decode(reader, reader.uint32()),
                    );
                    break;
                case 2:
                    message.enabled = reader.bool();
                    break;
                case 3:
                    message.maxParallelBackups = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.randMaxDelay = PolicySettings_Interval.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.scheme = reader.int32() as any;
                    break;
                case 6:
                    message.weeklyBackupDay = reader.int32() as any;
                    break;
                case 7:
                    message.taskFailure = PolicySettings_RetriesConfiguration.decode(
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

    fromJSON(object: any): PolicySettings_Scheduling {
        const message = { ...basePolicySettings_Scheduling } as PolicySettings_Scheduling;
        message.backupSets = (object.backupSets ?? []).map((e: any) =>
            PolicySettings_Scheduling_BackupSet.fromJSON(e),
        );
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.maxParallelBackups =
            object.maxParallelBackups !== undefined && object.maxParallelBackups !== null
                ? Number(object.maxParallelBackups)
                : 0;
        message.randMaxDelay =
            object.randMaxDelay !== undefined && object.randMaxDelay !== null
                ? PolicySettings_Interval.fromJSON(object.randMaxDelay)
                : undefined;
        message.scheme =
            object.scheme !== undefined && object.scheme !== null
                ? policySettings_Scheduling_SchemeFromJSON(object.scheme)
                : 0;
        message.weeklyBackupDay =
            object.weeklyBackupDay !== undefined && object.weeklyBackupDay !== null
                ? policySettings_DayFromJSON(object.weeklyBackupDay)
                : 0;
        message.taskFailure =
            object.taskFailure !== undefined && object.taskFailure !== null
                ? PolicySettings_RetriesConfiguration.fromJSON(object.taskFailure)
                : undefined;
        return message;
    },

    toJSON(message: PolicySettings_Scheduling): unknown {
        const obj: any = {};
        if (message.backupSets) {
            obj.backupSets = message.backupSets.map((e) =>
                e ? PolicySettings_Scheduling_BackupSet.toJSON(e) : undefined,
            );
        } else {
            obj.backupSets = [];
        }
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.maxParallelBackups !== undefined &&
            (obj.maxParallelBackups = Math.round(message.maxParallelBackups));
        message.randMaxDelay !== undefined &&
            (obj.randMaxDelay = message.randMaxDelay
                ? PolicySettings_Interval.toJSON(message.randMaxDelay)
                : undefined);
        message.scheme !== undefined &&
            (obj.scheme = policySettings_Scheduling_SchemeToJSON(message.scheme));
        message.weeklyBackupDay !== undefined &&
            (obj.weeklyBackupDay = policySettings_DayToJSON(message.weeklyBackupDay));
        message.taskFailure !== undefined &&
            (obj.taskFailure = message.taskFailure
                ? PolicySettings_RetriesConfiguration.toJSON(message.taskFailure)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PolicySettings_Scheduling>, I>>(
        object: I,
    ): PolicySettings_Scheduling {
        const message = { ...basePolicySettings_Scheduling } as PolicySettings_Scheduling;
        message.backupSets =
            object.backupSets?.map((e) => PolicySettings_Scheduling_BackupSet.fromPartial(e)) || [];
        message.enabled = object.enabled ?? false;
        message.maxParallelBackups = object.maxParallelBackups ?? 0;
        message.randMaxDelay =
            object.randMaxDelay !== undefined && object.randMaxDelay !== null
                ? PolicySettings_Interval.fromPartial(object.randMaxDelay)
                : undefined;
        message.scheme = object.scheme ?? 0;
        message.weeklyBackupDay = object.weeklyBackupDay ?? 0;
        message.taskFailure =
            object.taskFailure !== undefined && object.taskFailure !== null
                ? PolicySettings_RetriesConfiguration.fromPartial(object.taskFailure)
                : undefined;
        return message;
    },
};

const basePolicySettings_Scheduling_BackupSet: object = { type: 0 };

export const PolicySettings_Scheduling_BackupSet = {
    encode(
        message: PolicySettings_Scheduling_BackupSet,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.time !== undefined) {
            PolicySettings_Scheduling_BackupSet_Time.encode(
                message.time,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.sinceLastExecTime !== undefined) {
            PolicySettings_Scheduling_BackupSet_SinceLastExecTime.encode(
                message.sinceLastExecTime,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PolicySettings_Scheduling_BackupSet {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePolicySettings_Scheduling_BackupSet,
        } as PolicySettings_Scheduling_BackupSet;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.time = PolicySettings_Scheduling_BackupSet_Time.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.sinceLastExecTime =
                        PolicySettings_Scheduling_BackupSet_SinceLastExecTime.decode(
                            reader,
                            reader.uint32(),
                        );
                    break;
                case 3:
                    message.type = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PolicySettings_Scheduling_BackupSet {
        const message = {
            ...basePolicySettings_Scheduling_BackupSet,
        } as PolicySettings_Scheduling_BackupSet;
        message.time =
            object.time !== undefined && object.time !== null
                ? PolicySettings_Scheduling_BackupSet_Time.fromJSON(object.time)
                : undefined;
        message.sinceLastExecTime =
            object.sinceLastExecTime !== undefined && object.sinceLastExecTime !== null
                ? PolicySettings_Scheduling_BackupSet_SinceLastExecTime.fromJSON(
                      object.sinceLastExecTime,
                  )
                : undefined;
        message.type =
            object.type !== undefined && object.type !== null
                ? policySettings_Scheduling_BackupSet_TypeFromJSON(object.type)
                : 0;
        return message;
    },

    toJSON(message: PolicySettings_Scheduling_BackupSet): unknown {
        const obj: any = {};
        message.time !== undefined &&
            (obj.time = message.time
                ? PolicySettings_Scheduling_BackupSet_Time.toJSON(message.time)
                : undefined);
        message.sinceLastExecTime !== undefined &&
            (obj.sinceLastExecTime = message.sinceLastExecTime
                ? PolicySettings_Scheduling_BackupSet_SinceLastExecTime.toJSON(
                      message.sinceLastExecTime,
                  )
                : undefined);
        message.type !== undefined &&
            (obj.type = policySettings_Scheduling_BackupSet_TypeToJSON(message.type));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PolicySettings_Scheduling_BackupSet>, I>>(
        object: I,
    ): PolicySettings_Scheduling_BackupSet {
        const message = {
            ...basePolicySettings_Scheduling_BackupSet,
        } as PolicySettings_Scheduling_BackupSet;
        message.time =
            object.time !== undefined && object.time !== null
                ? PolicySettings_Scheduling_BackupSet_Time.fromPartial(object.time)
                : undefined;
        message.sinceLastExecTime =
            object.sinceLastExecTime !== undefined && object.sinceLastExecTime !== null
                ? PolicySettings_Scheduling_BackupSet_SinceLastExecTime.fromPartial(
                      object.sinceLastExecTime,
                  )
                : undefined;
        message.type = object.type ?? 0;
        return message;
    },
};

const basePolicySettings_Scheduling_BackupSet_Time: object = {
    weekdays: 0,
    monthdays: 0,
    includeLastDayOfMonth: false,
    months: 0,
    type: 0,
};

export const PolicySettings_Scheduling_BackupSet_Time = {
    encode(
        message: PolicySettings_Scheduling_BackupSet_Time,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        writer.uint32(10).fork();
        for (const v of message.weekdays) {
            writer.int32(v);
        }
        writer.ldelim();
        for (const v of message.repeatAt) {
            PolicySettings_TimeOfDay.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        if (message.repeatEvery !== undefined) {
            PolicySettings_Interval.encode(message.repeatEvery, writer.uint32(26).fork()).ldelim();
        }
        if (message.timeFrom !== undefined) {
            PolicySettings_TimeOfDay.encode(message.timeFrom, writer.uint32(34).fork()).ldelim();
        }
        if (message.timeTo !== undefined) {
            PolicySettings_TimeOfDay.encode(message.timeTo, writer.uint32(42).fork()).ldelim();
        }
        writer.uint32(50).fork();
        for (const v of message.monthdays) {
            writer.int64(v);
        }
        writer.ldelim();
        if (message.includeLastDayOfMonth === true) {
            writer.uint32(56).bool(message.includeLastDayOfMonth);
        }
        writer.uint32(66).fork();
        for (const v of message.months) {
            writer.int64(v);
        }
        writer.ldelim();
        if (message.type !== 0) {
            writer.uint32(72).int32(message.type);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): PolicySettings_Scheduling_BackupSet_Time {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePolicySettings_Scheduling_BackupSet_Time,
        } as PolicySettings_Scheduling_BackupSet_Time;
        message.weekdays = [];
        message.repeatAt = [];
        message.monthdays = [];
        message.months = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.weekdays.push(reader.int32() as any);
                        }
                    } else {
                        message.weekdays.push(reader.int32() as any);
                    }
                    break;
                case 2:
                    message.repeatAt.push(PolicySettings_TimeOfDay.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.repeatEvery = PolicySettings_Interval.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.timeFrom = PolicySettings_TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.timeTo = PolicySettings_TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.monthdays.push(longToNumber(reader.int64() as Long));
                        }
                    } else {
                        message.monthdays.push(longToNumber(reader.int64() as Long));
                    }
                    break;
                case 7:
                    message.includeLastDayOfMonth = reader.bool();
                    break;
                case 8:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.months.push(longToNumber(reader.int64() as Long));
                        }
                    } else {
                        message.months.push(longToNumber(reader.int64() as Long));
                    }
                    break;
                case 9:
                    message.type = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PolicySettings_Scheduling_BackupSet_Time {
        const message = {
            ...basePolicySettings_Scheduling_BackupSet_Time,
        } as PolicySettings_Scheduling_BackupSet_Time;
        message.weekdays = (object.weekdays ?? []).map((e: any) => policySettings_DayFromJSON(e));
        message.repeatAt = (object.repeatAt ?? []).map((e: any) =>
            PolicySettings_TimeOfDay.fromJSON(e),
        );
        message.repeatEvery =
            object.repeatEvery !== undefined && object.repeatEvery !== null
                ? PolicySettings_Interval.fromJSON(object.repeatEvery)
                : undefined;
        message.timeFrom =
            object.timeFrom !== undefined && object.timeFrom !== null
                ? PolicySettings_TimeOfDay.fromJSON(object.timeFrom)
                : undefined;
        message.timeTo =
            object.timeTo !== undefined && object.timeTo !== null
                ? PolicySettings_TimeOfDay.fromJSON(object.timeTo)
                : undefined;
        message.monthdays = (object.monthdays ?? []).map((e: any) => Number(e));
        message.includeLastDayOfMonth =
            object.includeLastDayOfMonth !== undefined && object.includeLastDayOfMonth !== null
                ? Boolean(object.includeLastDayOfMonth)
                : false;
        message.months = (object.months ?? []).map((e: any) => Number(e));
        message.type =
            object.type !== undefined && object.type !== null
                ? policySettings_RepeatePeriodFromJSON(object.type)
                : 0;
        return message;
    },

    toJSON(message: PolicySettings_Scheduling_BackupSet_Time): unknown {
        const obj: any = {};
        if (message.weekdays) {
            obj.weekdays = message.weekdays.map((e) => policySettings_DayToJSON(e));
        } else {
            obj.weekdays = [];
        }
        if (message.repeatAt) {
            obj.repeatAt = message.repeatAt.map((e) =>
                e ? PolicySettings_TimeOfDay.toJSON(e) : undefined,
            );
        } else {
            obj.repeatAt = [];
        }
        message.repeatEvery !== undefined &&
            (obj.repeatEvery = message.repeatEvery
                ? PolicySettings_Interval.toJSON(message.repeatEvery)
                : undefined);
        message.timeFrom !== undefined &&
            (obj.timeFrom = message.timeFrom
                ? PolicySettings_TimeOfDay.toJSON(message.timeFrom)
                : undefined);
        message.timeTo !== undefined &&
            (obj.timeTo = message.timeTo
                ? PolicySettings_TimeOfDay.toJSON(message.timeTo)
                : undefined);
        if (message.monthdays) {
            obj.monthdays = message.monthdays.map((e) => Math.round(e));
        } else {
            obj.monthdays = [];
        }
        message.includeLastDayOfMonth !== undefined &&
            (obj.includeLastDayOfMonth = message.includeLastDayOfMonth);
        if (message.months) {
            obj.months = message.months.map((e) => Math.round(e));
        } else {
            obj.months = [];
        }
        message.type !== undefined && (obj.type = policySettings_RepeatePeriodToJSON(message.type));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PolicySettings_Scheduling_BackupSet_Time>, I>>(
        object: I,
    ): PolicySettings_Scheduling_BackupSet_Time {
        const message = {
            ...basePolicySettings_Scheduling_BackupSet_Time,
        } as PolicySettings_Scheduling_BackupSet_Time;
        message.weekdays = object.weekdays?.map((e) => e) || [];
        message.repeatAt =
            object.repeatAt?.map((e) => PolicySettings_TimeOfDay.fromPartial(e)) || [];
        message.repeatEvery =
            object.repeatEvery !== undefined && object.repeatEvery !== null
                ? PolicySettings_Interval.fromPartial(object.repeatEvery)
                : undefined;
        message.timeFrom =
            object.timeFrom !== undefined && object.timeFrom !== null
                ? PolicySettings_TimeOfDay.fromPartial(object.timeFrom)
                : undefined;
        message.timeTo =
            object.timeTo !== undefined && object.timeTo !== null
                ? PolicySettings_TimeOfDay.fromPartial(object.timeTo)
                : undefined;
        message.monthdays = object.monthdays?.map((e) => e) || [];
        message.includeLastDayOfMonth = object.includeLastDayOfMonth ?? false;
        message.months = object.months?.map((e) => e) || [];
        message.type = object.type ?? 0;
        return message;
    },
};

const basePolicySettings_Scheduling_BackupSet_SinceLastExecTime: object = {};

export const PolicySettings_Scheduling_BackupSet_SinceLastExecTime = {
    encode(
        message: PolicySettings_Scheduling_BackupSet_SinceLastExecTime,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.delay !== undefined) {
            PolicySettings_Interval.encode(message.delay, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): PolicySettings_Scheduling_BackupSet_SinceLastExecTime {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePolicySettings_Scheduling_BackupSet_SinceLastExecTime,
        } as PolicySettings_Scheduling_BackupSet_SinceLastExecTime;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delay = PolicySettings_Interval.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PolicySettings_Scheduling_BackupSet_SinceLastExecTime {
        const message = {
            ...basePolicySettings_Scheduling_BackupSet_SinceLastExecTime,
        } as PolicySettings_Scheduling_BackupSet_SinceLastExecTime;
        message.delay =
            object.delay !== undefined && object.delay !== null
                ? PolicySettings_Interval.fromJSON(object.delay)
                : undefined;
        return message;
    },

    toJSON(message: PolicySettings_Scheduling_BackupSet_SinceLastExecTime): unknown {
        const obj: any = {};
        message.delay !== undefined &&
            (obj.delay = message.delay ? PolicySettings_Interval.toJSON(message.delay) : undefined);
        return obj;
    },

    fromPartial<
        I extends Exact<DeepPartial<PolicySettings_Scheduling_BackupSet_SinceLastExecTime>, I>,
    >(object: I): PolicySettings_Scheduling_BackupSet_SinceLastExecTime {
        const message = {
            ...basePolicySettings_Scheduling_BackupSet_SinceLastExecTime,
        } as PolicySettings_Scheduling_BackupSet_SinceLastExecTime;
        message.delay =
            object.delay !== undefined && object.delay !== null
                ? PolicySettings_Interval.fromPartial(object.delay)
                : undefined;
        return message;
    },
};

const basePolicyApplication: object = {
    policyId: '',
    computeInstanceId: '',
    enabled: false,
    status: 0,
    isProcessing: false,
};

export const PolicyApplication = {
    encode(message: PolicyApplication, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.policyId !== '') {
            writer.uint32(10).string(message.policyId);
        }
        if (message.computeInstanceId !== '') {
            writer.uint32(18).string(message.computeInstanceId);
        }
        if (message.enabled === true) {
            writer.uint32(24).bool(message.enabled);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.isProcessing === true) {
            writer.uint32(48).bool(message.isProcessing);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PolicyApplication {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePolicyApplication } as PolicyApplication;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = reader.string();
                    break;
                case 2:
                    message.computeInstanceId = reader.string();
                    break;
                case 3:
                    message.enabled = reader.bool();
                    break;
                case 4:
                    message.status = reader.int32() as any;
                    break;
                case 5:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.isProcessing = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PolicyApplication {
        const message = { ...basePolicyApplication } as PolicyApplication;
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : '';
        message.computeInstanceId =
            object.computeInstanceId !== undefined && object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : '';
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.status =
            object.status !== undefined && object.status !== null
                ? policyApplication_StatusFromJSON(object.status)
                : 0;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.isProcessing =
            object.isProcessing !== undefined && object.isProcessing !== null
                ? Boolean(object.isProcessing)
                : false;
        return message;
    },

    toJSON(message: PolicyApplication): unknown {
        const obj: any = {};
        message.policyId !== undefined && (obj.policyId = message.policyId);
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.status !== undefined &&
            (obj.status = policyApplication_StatusToJSON(message.status));
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.isProcessing !== undefined && (obj.isProcessing = message.isProcessing);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PolicyApplication>, I>>(object: I): PolicyApplication {
        const message = { ...basePolicyApplication } as PolicyApplication;
        message.policyId = object.policyId ?? '';
        message.computeInstanceId = object.computeInstanceId ?? '';
        message.enabled = object.enabled ?? false;
        message.status = object.status ?? 0;
        message.createdAt = object.createdAt ?? undefined;
        message.isProcessing = object.isProcessing ?? false;
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
