/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Endpoint } from './endpoint';

export const protobufPackage = 'yandex.cloud.datatransfer.v1';

export enum TransferType {
    TRANSFER_TYPE_UNSPECIFIED = 0,
    /** SNAPSHOT_AND_INCREMENT - Snapshot and increment */
    SNAPSHOT_AND_INCREMENT = 1,
    /** SNAPSHOT_ONLY - Snapshot */
    SNAPSHOT_ONLY = 2,
    /** INCREMENT_ONLY - Increment */
    INCREMENT_ONLY = 3,
    UNRECOGNIZED = -1,
}

export function transferTypeFromJSON(object: any): TransferType {
    switch (object) {
        case 0:
        case 'TRANSFER_TYPE_UNSPECIFIED':
            return TransferType.TRANSFER_TYPE_UNSPECIFIED;
        case 1:
        case 'SNAPSHOT_AND_INCREMENT':
            return TransferType.SNAPSHOT_AND_INCREMENT;
        case 2:
        case 'SNAPSHOT_ONLY':
            return TransferType.SNAPSHOT_ONLY;
        case 3:
        case 'INCREMENT_ONLY':
            return TransferType.INCREMENT_ONLY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return TransferType.UNRECOGNIZED;
    }
}

export function transferTypeToJSON(object: TransferType): string {
    switch (object) {
        case TransferType.TRANSFER_TYPE_UNSPECIFIED:
            return 'TRANSFER_TYPE_UNSPECIFIED';
        case TransferType.SNAPSHOT_AND_INCREMENT:
            return 'SNAPSHOT_AND_INCREMENT';
        case TransferType.SNAPSHOT_ONLY:
            return 'SNAPSHOT_ONLY';
        case TransferType.INCREMENT_ONLY:
            return 'INCREMENT_ONLY';
        default:
            return 'UNKNOWN';
    }
}

export enum TransferStatus {
    TRANSFER_STATUS_UNSPECIFIED = 0,
    /** CREATING - Transfer does some work before running */
    CREATING = 1,
    /** CREATED - Transfer created but not started by user */
    CREATED = 2,
    /** RUNNING - Transfer currently doing replication work */
    RUNNING = 3,
    /** STOPPING - Transfer shutdown */
    STOPPING = 4,
    /** STOPPED - Transfer stopped by user */
    STOPPED = 5,
    /** ERROR - Transfer stopped by system */
    ERROR = 6,
    /** SNAPSHOTTING - Transfer copy snapshot */
    SNAPSHOTTING = 7,
    /** DONE - Transfer reach terminal phase */
    DONE = 8,
    /** PAUSED - Transfer is paused by user - same as stopped, but replication slot is alive */
    PAUSED = 9,
    /** PREPARING - Transfer does some work before replication */
    PREPARING = 10,
    UNRECOGNIZED = -1,
}

export function transferStatusFromJSON(object: any): TransferStatus {
    switch (object) {
        case 0:
        case 'TRANSFER_STATUS_UNSPECIFIED':
            return TransferStatus.TRANSFER_STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return TransferStatus.CREATING;
        case 2:
        case 'CREATED':
            return TransferStatus.CREATED;
        case 3:
        case 'RUNNING':
            return TransferStatus.RUNNING;
        case 4:
        case 'STOPPING':
            return TransferStatus.STOPPING;
        case 5:
        case 'STOPPED':
            return TransferStatus.STOPPED;
        case 6:
        case 'ERROR':
            return TransferStatus.ERROR;
        case 7:
        case 'SNAPSHOTTING':
            return TransferStatus.SNAPSHOTTING;
        case 8:
        case 'DONE':
            return TransferStatus.DONE;
        case 9:
        case 'PAUSED':
            return TransferStatus.PAUSED;
        case 10:
        case 'PREPARING':
            return TransferStatus.PREPARING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return TransferStatus.UNRECOGNIZED;
    }
}

export function transferStatusToJSON(object: TransferStatus): string {
    switch (object) {
        case TransferStatus.TRANSFER_STATUS_UNSPECIFIED:
            return 'TRANSFER_STATUS_UNSPECIFIED';
        case TransferStatus.CREATING:
            return 'CREATING';
        case TransferStatus.CREATED:
            return 'CREATED';
        case TransferStatus.RUNNING:
            return 'RUNNING';
        case TransferStatus.STOPPING:
            return 'STOPPING';
        case TransferStatus.STOPPED:
            return 'STOPPED';
        case TransferStatus.ERROR:
            return 'ERROR';
        case TransferStatus.SNAPSHOTTING:
            return 'SNAPSHOTTING';
        case TransferStatus.DONE:
            return 'DONE';
        case TransferStatus.PAUSED:
            return 'PAUSED';
        case TransferStatus.PREPARING:
            return 'PREPARING';
        default:
            return 'UNKNOWN';
    }
}

export enum RegularSnapshotScheduleInterval {
    REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_UNSPECIFIED = 0,
    REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_15MIN = 2,
    REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_30MIN = 3,
    REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_HOUR = 4,
    REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_2HOUR = 5,
    REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_3HOUR = 6,
    REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_6HOUR = 7,
    REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_8HOUR = 8,
    REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_12HOUR = 9,
    REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_DAY = 10,
    UNRECOGNIZED = -1,
}

export function regularSnapshotScheduleIntervalFromJSON(
    object: any,
): RegularSnapshotScheduleInterval {
    switch (object) {
        case 0:
        case 'REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_UNSPECIFIED':
            return RegularSnapshotScheduleInterval.REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_UNSPECIFIED;
        case 2:
        case 'REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_15MIN':
            return RegularSnapshotScheduleInterval.REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_15MIN;
        case 3:
        case 'REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_30MIN':
            return RegularSnapshotScheduleInterval.REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_30MIN;
        case 4:
        case 'REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_HOUR':
            return RegularSnapshotScheduleInterval.REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_HOUR;
        case 5:
        case 'REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_2HOUR':
            return RegularSnapshotScheduleInterval.REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_2HOUR;
        case 6:
        case 'REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_3HOUR':
            return RegularSnapshotScheduleInterval.REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_3HOUR;
        case 7:
        case 'REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_6HOUR':
            return RegularSnapshotScheduleInterval.REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_6HOUR;
        case 8:
        case 'REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_8HOUR':
            return RegularSnapshotScheduleInterval.REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_8HOUR;
        case 9:
        case 'REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_12HOUR':
            return RegularSnapshotScheduleInterval.REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_12HOUR;
        case 10:
        case 'REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_DAY':
            return RegularSnapshotScheduleInterval.REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_DAY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return RegularSnapshotScheduleInterval.UNRECOGNIZED;
    }
}

export function regularSnapshotScheduleIntervalToJSON(
    object: RegularSnapshotScheduleInterval,
): string {
    switch (object) {
        case RegularSnapshotScheduleInterval.REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_UNSPECIFIED:
            return 'REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_UNSPECIFIED';
        case RegularSnapshotScheduleInterval.REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_15MIN:
            return 'REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_15MIN';
        case RegularSnapshotScheduleInterval.REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_30MIN:
            return 'REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_30MIN';
        case RegularSnapshotScheduleInterval.REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_HOUR:
            return 'REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_HOUR';
        case RegularSnapshotScheduleInterval.REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_2HOUR:
            return 'REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_2HOUR';
        case RegularSnapshotScheduleInterval.REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_3HOUR:
            return 'REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_3HOUR';
        case RegularSnapshotScheduleInterval.REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_6HOUR:
            return 'REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_6HOUR';
        case RegularSnapshotScheduleInterval.REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_8HOUR:
            return 'REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_8HOUR';
        case RegularSnapshotScheduleInterval.REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_12HOUR:
            return 'REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_12HOUR';
        case RegularSnapshotScheduleInterval.REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_DAY:
            return 'REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_DAY';
        default:
            return 'UNKNOWN';
    }
}

export enum Flavor {
    FLAVOR_UNSPECIFIED = 0,
    SMALL = 1,
    MEDIUM = 2,
    LARGE = 3,
    TINY = 4,
    UNRECOGNIZED = -1,
}

export function flavorFromJSON(object: any): Flavor {
    switch (object) {
        case 0:
        case 'FLAVOR_UNSPECIFIED':
            return Flavor.FLAVOR_UNSPECIFIED;
        case 1:
        case 'SMALL':
            return Flavor.SMALL;
        case 2:
        case 'MEDIUM':
            return Flavor.MEDIUM;
        case 3:
        case 'LARGE':
            return Flavor.LARGE;
        case 4:
        case 'TINY':
            return Flavor.TINY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Flavor.UNRECOGNIZED;
    }
}

export function flavorToJSON(object: Flavor): string {
    switch (object) {
        case Flavor.FLAVOR_UNSPECIFIED:
            return 'FLAVOR_UNSPECIFIED';
        case Flavor.SMALL:
            return 'SMALL';
        case Flavor.MEDIUM:
            return 'MEDIUM';
        case Flavor.LARGE:
            return 'LARGE';
        case Flavor.TINY:
            return 'TINY';
        default:
            return 'UNKNOWN';
    }
}

/** Transfer core entity */
export interface Transfer {
    id: string;
    folderId: string;
    name: string;
    description: string;
    labels: { [key: string]: string };
    source?: Endpoint;
    target?: Endpoint;
    /** Runtime parameters for the transfer */
    runtime?: Runtime;
    status: TransferStatus;
    /**
     * Type of the transfer. One of SNAPSHOT_ONLY, INCREMENT_ONLY,
     * SNAPSHOT_AND_INCREMENT
     */
    type: TransferType;
    /** Error description if transfer has any errors. */
    warning: string;
    /**
     * Regular snapshots for the transfer, applicable only if transfer type is
     * SNAPSHOT_ONLY
     */
    regularSnapshot?: RegularSnapshot;
    /** Transformation for the transfer. */
    transformation?: Transformation;
    dataObjects?: DataObjects;
    prestable: boolean;
    /** Replication runtime parameters for the transfer */
    replicationRuntime?: Runtime;
}

export interface Transfer_LabelsEntry {
    key: string;
    value: string;
}

export interface Runtime {
    ycRuntime?: YcRuntime | undefined;
}

/** Parallel snapshot parameters */
export interface ShardingUploadParams {
    /** Number of workers. */
    jobCount: number;
    /** Number of threads. */
    processCount: number;
}

export interface RegularSnapshot {
    settings?: RegularSnapshotSettings | undefined;
    disabled?: RegularSnapshotDisabled | undefined;
}

/** Regular snapshot disabled */
export interface RegularSnapshotDisabled {}

/** Regular snapshot settings */
export interface RegularSnapshotSettings {
    /**
     * User predefined periods to schedule regular snapshots:
     * REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_15MIN,
     * REGULAR_SNAPSHOT_SCHEDULE_INTERVAL_HOUR, etc.
     * only one of schedule or cron_expression should be set
     */
    schedule: RegularSnapshotScheduleInterval;
    /**
     * Incremental tables configuration for regular snapshot.
     * If not empty, each snapshot will copy only data changed since last snapshot
     * based on cursor column value.
     */
    tables: IncrementalTable[];
    /**
     * Use a cron expression to schedule transfer regular snapshots in UTC time.
     * The used cron expression format is 5 columns specifying the execution time
     * (minute, hour, day, month, day of the week),
     * they can contain a numeric list separated by commas, a range of numbers
     * separated by a hyphen, symbols * or /.
     * only one of schedule or cron_expression should be set
     */
    cronExpression: string;
    /**
     * Wait for transaction completion time, in seconds
     * Set load delay time to insure that current transactions on source are completed
     * and thus full data is visible for snapshot.
     * This may be useful if source cannot guarantee that cursor values grows
     * monotonically -
     * due to transaction race or well-known problem that serial id sequence does not
     * actually guarantee the order
     */
    incrementDelaySeconds: number;
    /** Regular snapshot retries, only for cloud installation */
    retryConfig?: RegularSnapshotSettings_RetryConfig;
}

export interface RegularSnapshotSettings_RetryConfig {
    /**
     * Number of attempts to retry regular snapshot in case of failure. Applicable only
     * for cloud installation.
     */
    maxAttempts: number;
}

export interface IncrementalTable {
    tableNamespace: string;
    tableName: string;
    cursorColumn: string;
    initialState: string;
}

/** YC Runtime parameters for the transfer */
export interface YcRuntime {
    /** Number of workers in parallel replication. */
    jobCount: number;
    flavor: Flavor;
    /** Parallel snapshot parameters */
    uploadShardParams?: ShardingUploadParams;
}

/** Mask function */
export interface MaskFunction {
    /** Hash mask function */
    maskFunctionHash?: MaskFunctionHash | undefined;
}

/** Hash data using HMAC */
export interface MaskFunctionHash {
    /**
     * This string will be used in the HMAC(sha256, salt) function applied to the
     * column data.
     */
    userDefinedSalt: string;
}

/** Filter tables using lists of included and excluded tables. */
export interface TablesFilter {
    /** List of tables that will be included to transfer */
    includeTables: string[];
    /** List of tables that will be excluded to transfer */
    excludeTables: string[];
}

/** Filter columns using lists of included and excluded columns. */
export interface ColumnsFilter {
    /** List of columns that will be included to transfer */
    includeColumns: string[];
    /** List of columns that will be excluded to transfer */
    excludeColumns: string[];
}

/** Mask field transformer allows you to hash data */
export interface MaskFieldTransformer {
    /** List of included and excluded tables */
    tables?: TablesFilter;
    /** Specify the name of the column for data masking (a regular expression). */
    columns: string[];
    /** Mask function */
    function?: MaskFunction;
}

/** Set up a list of table columns to transfer */
export interface FilterColumnsTransformer {
    /** List of the tables to filter using lists of included and excluded tables. */
    tables?: TablesFilter;
    /**
     * List of the columns to transfer to the target tables using lists of included and
     * excluded columns.
     */
    columns?: ColumnsFilter;
}

export interface Table {
    nameSpace: string;
    name: string;
}

/** Specify rule for renaming table */
export interface RenameTable {
    /** Specify the current names of the table in the source */
    originalName?: Table;
    /** Specify the new names for this table in the target */
    newName?: Table;
}

/**
 * Set rules for renaming tables by specifying the current names of the tables in
 * the source and new names for these tables in the target.
 */
export interface RenameTablesTransformer {
    /** List of renaming rules */
    renameTables: RenameTable[];
}

/** Override primary keys */
export interface ReplacePrimaryKeyTransformer {
    /** List of included and excluded tables */
    tables?: TablesFilter;
    /** List of columns to be used as primary keys */
    keys: string[];
}

/**
 * Convert column values to strings
 * The values will be converted depending on the source type
 * Conversion rules are described here:
 * https://cloud.yandex.com/en/docs/data-transfer/concepts/data-transformation#convert-to-string
 */
export interface ToStringTransformer {
    /** List of included and excluded tables */
    tables?: TablesFilter;
    /** List of included and excluded columns */
    columns?: ColumnsFilter;
}

export interface SharderTransformerTypeRandom {}

/**
 * Set the number of shards for particular tables and a list of columns whose
 * values will be used for calculating a hash to determine a shard.
 */
export interface SharderTransformer {
    /** List of included and excluded columns */
    columns?: ColumnsFilter | undefined;
    random?: SharderTransformerTypeRandom | undefined;
    /** List of included and excluded tables */
    tables?: TablesFilter;
    /** Number of shards */
    shardsCount: number;
}

/**
 * A transfer splits the X table into multiple tables (X_1, X_2, ..., X_n) based on
 * data.
 * If a row was located in the X table before it was split, it is now in the X_i
 * table,
 * where i is determined by the column list and split string parameters.
 * Example:
 * If the column list has two columns, month of birth and gender, specified and the
 * split string states @,
 * information about an employee whose name is John and who was born on February
 * 11, 1984,
 * from the Employees table will get to a new table named Employees@February@male.
 */
export interface TableSplitterTransformer {
    /** List of included and excluded tables */
    tables?: TablesFilter;
    /** Specify the columns in the tables to be partitioned. */
    columns: string[];
    /** Specify the split string to be used for merging components in a new table name. */
    splitter: string;
}

/**
 * This filter only applies to transfers with queues (Logbroker or Apache Kafka®)
 * as a data source.
 * When running a transfer, only the strings meeting the specified criteria remain
 * in a changefeed.
 */
export interface FilterRowsTransformer {
    /** List of included and excluded tables. */
    tables?: TablesFilter;
    /**
     * Filtering criterion. This can be comparison operators for numeric, string, and
     * Boolean values,
     * comparison to NULL, and checking whether a substring is part of a string.
     * Details here:
     * https://yandex.cloud/en-ru/docs/data-transfer/concepts/data-transformation#append-only-sources.
     * Deprecated: Use filters instead.
     *
     * @deprecated
     */
    filter: string;
    /**
     * Data is transported if it satisfies at least one of filters. Consider that there
     * is OR statement between filters.
     * Each filter can be comparison operators for numeric, string, and Boolean values,
     * comparison to NULL, and
     * checking whether a substring is part of a string.
     * Details in docs:
     * https://yandex.cloud/en-ru/docs/data-transfer/concepts/data-transformation#append-only-sources.
     */
    filters: string[];
}

/**
 * Some transformers may have limitations and only apply to some source-target
 * pairs.
 */
export interface Transformer {
    /** Mask field transformer allows you to hash data */
    maskField?: MaskFieldTransformer | undefined;
    /** Set up a list of table columns to transfer */
    filterColumns?: FilterColumnsTransformer | undefined;
    /**
     * Set rules for renaming tables by specifying the current names of the tables in
     * the source and new names for these tables in the target
     */
    renameTables?: RenameTablesTransformer | undefined;
    /** Override primary keys. */
    replacePrimaryKey?: ReplacePrimaryKeyTransformer | undefined;
    /** Convert column values to strings */
    convertToString?: ToStringTransformer | undefined;
    /**
     * Set the number of shards for particular tables and a list of columns whose
     * values will be used for calculating a hash to determine a shard.
     */
    sharderTransformer?: SharderTransformer | undefined;
    /** Splits the X table into multiple tables (X_1, X_2, ..., X_n) based on data. */
    tableSplitterTransformer?: TableSplitterTransformer | undefined;
    /**
     * This filter only applies to transfers with queues (Logbroker or Apache Kafka®)
     * as a data source. When running a transfer, only the strings meeting the
     * specified criteria remain in a changefeed.
     */
    filterRows?: FilterRowsTransformer | undefined;
}

/**
 * Transformation is converting data using special transformer functions.
 * These functions are executed on a data stream, applied to each data change item,
 * and transform them.
 * A transformer can be run at both the metadata and data levels.
 * Data can only be transformed if the source and target are of different types.
 */
export interface Transformation {
    /**
     * A list of transformers. You can specify exactly 1 transformer in each element of
     * list
     * When activating a transfer, a transformation plan is made for the tables that
     * match the specified criteria.
     * Transformers are applied to the tables in the sequence specified in the list.
     */
    transformers: Transformer[];
}

export interface DataObjects {
    includeObjects: string[];
}

const baseTransfer: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    status: 0,
    type: 0,
    warning: '',
    prestable: false,
};

export const Transfer: {
    encode(message: Transfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Transfer;
    fromJSON(object: any): Transfer;
    toJSON(message: Transfer): unknown;
    fromPartial<I extends Exact<DeepPartial<Transfer>, I>>(object: I): Transfer;
} = {
    encode(message: Transfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Transfer_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        if (message.source !== undefined) {
            Endpoint.encode(message.source, writer.uint32(58).fork()).ldelim();
        }
        if (message.target !== undefined) {
            Endpoint.encode(message.target, writer.uint32(66).fork()).ldelim();
        }
        if (message.runtime !== undefined) {
            Runtime.encode(message.runtime, writer.uint32(74).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(80).int32(message.status);
        }
        if (message.type !== 0) {
            writer.uint32(96).int32(message.type);
        }
        if (message.warning !== '') {
            writer.uint32(122).string(message.warning);
        }
        if (message.regularSnapshot !== undefined) {
            RegularSnapshot.encode(message.regularSnapshot, writer.uint32(130).fork()).ldelim();
        }
        if (message.transformation !== undefined) {
            Transformation.encode(message.transformation, writer.uint32(138).fork()).ldelim();
        }
        if (message.dataObjects !== undefined) {
            DataObjects.encode(message.dataObjects, writer.uint32(154).fork()).ldelim();
        }
        if (message.prestable === true) {
            writer.uint32(176).bool(message.prestable);
        }
        if (message.replicationRuntime !== undefined) {
            Runtime.encode(message.replicationRuntime, writer.uint32(194).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Transfer {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTransfer } as Transfer;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = Transfer_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.source = Endpoint.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.target = Endpoint.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.runtime = Runtime.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.status = reader.int32() as any;
                    break;
                case 12:
                    message.type = reader.int32() as any;
                    break;
                case 15:
                    message.warning = reader.string();
                    break;
                case 16:
                    message.regularSnapshot = RegularSnapshot.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.transformation = Transformation.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.dataObjects = DataObjects.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.prestable = reader.bool();
                    break;
                case 24:
                    message.replicationRuntime = Runtime.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Transfer {
        const message = { ...baseTransfer } as Transfer;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.source =
            object.source !== undefined && object.source !== null
                ? Endpoint.fromJSON(object.source)
                : undefined;
        message.target =
            object.target !== undefined && object.target !== null
                ? Endpoint.fromJSON(object.target)
                : undefined;
        message.runtime =
            object.runtime !== undefined && object.runtime !== null
                ? Runtime.fromJSON(object.runtime)
                : undefined;
        message.status =
            object.status !== undefined && object.status !== null
                ? transferStatusFromJSON(object.status)
                : 0;
        message.type =
            object.type !== undefined && object.type !== null
                ? transferTypeFromJSON(object.type)
                : 0;
        message.warning =
            object.warning !== undefined && object.warning !== null ? String(object.warning) : '';
        message.regularSnapshot =
            object.regularSnapshot !== undefined && object.regularSnapshot !== null
                ? RegularSnapshot.fromJSON(object.regularSnapshot)
                : undefined;
        message.transformation =
            object.transformation !== undefined && object.transformation !== null
                ? Transformation.fromJSON(object.transformation)
                : undefined;
        message.dataObjects =
            object.dataObjects !== undefined && object.dataObjects !== null
                ? DataObjects.fromJSON(object.dataObjects)
                : undefined;
        message.prestable =
            object.prestable !== undefined && object.prestable !== null
                ? Boolean(object.prestable)
                : false;
        message.replicationRuntime =
            object.replicationRuntime !== undefined && object.replicationRuntime !== null
                ? Runtime.fromJSON(object.replicationRuntime)
                : undefined;
        return message;
    },

    toJSON(message: Transfer): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.source !== undefined &&
            (obj.source = message.source ? Endpoint.toJSON(message.source) : undefined);
        message.target !== undefined &&
            (obj.target = message.target ? Endpoint.toJSON(message.target) : undefined);
        message.runtime !== undefined &&
            (obj.runtime = message.runtime ? Runtime.toJSON(message.runtime) : undefined);
        message.status !== undefined && (obj.status = transferStatusToJSON(message.status));
        message.type !== undefined && (obj.type = transferTypeToJSON(message.type));
        message.warning !== undefined && (obj.warning = message.warning);
        message.regularSnapshot !== undefined &&
            (obj.regularSnapshot = message.regularSnapshot
                ? RegularSnapshot.toJSON(message.regularSnapshot)
                : undefined);
        message.transformation !== undefined &&
            (obj.transformation = message.transformation
                ? Transformation.toJSON(message.transformation)
                : undefined);
        message.dataObjects !== undefined &&
            (obj.dataObjects = message.dataObjects
                ? DataObjects.toJSON(message.dataObjects)
                : undefined);
        message.prestable !== undefined && (obj.prestable = message.prestable);
        message.replicationRuntime !== undefined &&
            (obj.replicationRuntime = message.replicationRuntime
                ? Runtime.toJSON(message.replicationRuntime)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Transfer>, I>>(object: I): Transfer {
        const message = { ...baseTransfer } as Transfer;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.source =
            object.source !== undefined && object.source !== null
                ? Endpoint.fromPartial(object.source)
                : undefined;
        message.target =
            object.target !== undefined && object.target !== null
                ? Endpoint.fromPartial(object.target)
                : undefined;
        message.runtime =
            object.runtime !== undefined && object.runtime !== null
                ? Runtime.fromPartial(object.runtime)
                : undefined;
        message.status = object.status ?? 0;
        message.type = object.type ?? 0;
        message.warning = object.warning ?? '';
        message.regularSnapshot =
            object.regularSnapshot !== undefined && object.regularSnapshot !== null
                ? RegularSnapshot.fromPartial(object.regularSnapshot)
                : undefined;
        message.transformation =
            object.transformation !== undefined && object.transformation !== null
                ? Transformation.fromPartial(object.transformation)
                : undefined;
        message.dataObjects =
            object.dataObjects !== undefined && object.dataObjects !== null
                ? DataObjects.fromPartial(object.dataObjects)
                : undefined;
        message.prestable = object.prestable ?? false;
        message.replicationRuntime =
            object.replicationRuntime !== undefined && object.replicationRuntime !== null
                ? Runtime.fromPartial(object.replicationRuntime)
                : undefined;
        return message;
    },
};

const baseTransfer_LabelsEntry: object = { key: '', value: '' };

export const Transfer_LabelsEntry: {
    encode(message: Transfer_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Transfer_LabelsEntry;
    fromJSON(object: any): Transfer_LabelsEntry;
    toJSON(message: Transfer_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<Transfer_LabelsEntry>, I>>(object: I): Transfer_LabelsEntry;
} = {
    encode(message: Transfer_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Transfer_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTransfer_LabelsEntry } as Transfer_LabelsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Transfer_LabelsEntry {
        const message = { ...baseTransfer_LabelsEntry } as Transfer_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Transfer_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Transfer_LabelsEntry>, I>>(
        object: I,
    ): Transfer_LabelsEntry {
        const message = { ...baseTransfer_LabelsEntry } as Transfer_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseRuntime: object = {};

export const Runtime: {
    encode(message: Runtime, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Runtime;
    fromJSON(object: any): Runtime;
    toJSON(message: Runtime): unknown;
    fromPartial<I extends Exact<DeepPartial<Runtime>, I>>(object: I): Runtime;
} = {
    encode(message: Runtime, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.ycRuntime !== undefined) {
            YcRuntime.encode(message.ycRuntime, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Runtime {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRuntime } as Runtime;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
                    message.ycRuntime = YcRuntime.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Runtime {
        const message = { ...baseRuntime } as Runtime;
        message.ycRuntime =
            object.ycRuntime !== undefined && object.ycRuntime !== null
                ? YcRuntime.fromJSON(object.ycRuntime)
                : undefined;
        return message;
    },

    toJSON(message: Runtime): unknown {
        const obj: any = {};
        message.ycRuntime !== undefined &&
            (obj.ycRuntime = message.ycRuntime ? YcRuntime.toJSON(message.ycRuntime) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Runtime>, I>>(object: I): Runtime {
        const message = { ...baseRuntime } as Runtime;
        message.ycRuntime =
            object.ycRuntime !== undefined && object.ycRuntime !== null
                ? YcRuntime.fromPartial(object.ycRuntime)
                : undefined;
        return message;
    },
};

const baseShardingUploadParams: object = { jobCount: 0, processCount: 0 };

export const ShardingUploadParams: {
    encode(message: ShardingUploadParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ShardingUploadParams;
    fromJSON(object: any): ShardingUploadParams;
    toJSON(message: ShardingUploadParams): unknown;
    fromPartial<I extends Exact<DeepPartial<ShardingUploadParams>, I>>(object: I): ShardingUploadParams;
} = {
    encode(message: ShardingUploadParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.jobCount !== 0) {
            writer.uint32(8).int64(message.jobCount);
        }
        if (message.processCount !== 0) {
            writer.uint32(16).int64(message.processCount);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ShardingUploadParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseShardingUploadParams } as ShardingUploadParams;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.jobCount = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.processCount = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ShardingUploadParams {
        const message = { ...baseShardingUploadParams } as ShardingUploadParams;
        message.jobCount =
            object.jobCount !== undefined && object.jobCount !== null ? Number(object.jobCount) : 0;
        message.processCount =
            object.processCount !== undefined && object.processCount !== null
                ? Number(object.processCount)
                : 0;
        return message;
    },

    toJSON(message: ShardingUploadParams): unknown {
        const obj: any = {};
        message.jobCount !== undefined && (obj.jobCount = Math.round(message.jobCount));
        message.processCount !== undefined && (obj.processCount = Math.round(message.processCount));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ShardingUploadParams>, I>>(
        object: I,
    ): ShardingUploadParams {
        const message = { ...baseShardingUploadParams } as ShardingUploadParams;
        message.jobCount = object.jobCount ?? 0;
        message.processCount = object.processCount ?? 0;
        return message;
    },
};

const baseRegularSnapshot: object = {};

export const RegularSnapshot: {
    encode(message: RegularSnapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegularSnapshot;
    fromJSON(object: any): RegularSnapshot;
    toJSON(message: RegularSnapshot): unknown;
    fromPartial<I extends Exact<DeepPartial<RegularSnapshot>, I>>(object: I): RegularSnapshot;
} = {
    encode(message: RegularSnapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.settings !== undefined) {
            RegularSnapshotSettings.encode(message.settings, writer.uint32(26).fork()).ldelim();
        }
        if (message.disabled !== undefined) {
            RegularSnapshotDisabled.encode(message.disabled, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RegularSnapshot {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRegularSnapshot } as RegularSnapshot;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.settings = RegularSnapshotSettings.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.disabled = RegularSnapshotDisabled.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RegularSnapshot {
        const message = { ...baseRegularSnapshot } as RegularSnapshot;
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? RegularSnapshotSettings.fromJSON(object.settings)
                : undefined;
        message.disabled =
            object.disabled !== undefined && object.disabled !== null
                ? RegularSnapshotDisabled.fromJSON(object.disabled)
                : undefined;
        return message;
    },

    toJSON(message: RegularSnapshot): unknown {
        const obj: any = {};
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? RegularSnapshotSettings.toJSON(message.settings)
                : undefined);
        message.disabled !== undefined &&
            (obj.disabled = message.disabled
                ? RegularSnapshotDisabled.toJSON(message.disabled)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RegularSnapshot>, I>>(object: I): RegularSnapshot {
        const message = { ...baseRegularSnapshot } as RegularSnapshot;
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? RegularSnapshotSettings.fromPartial(object.settings)
                : undefined;
        message.disabled =
            object.disabled !== undefined && object.disabled !== null
                ? RegularSnapshotDisabled.fromPartial(object.disabled)
                : undefined;
        return message;
    },
};

const baseRegularSnapshotDisabled: object = {};

export const RegularSnapshotDisabled: {
    encode(message: RegularSnapshotDisabled, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegularSnapshotDisabled;
    fromJSON(object: any): RegularSnapshotDisabled;
    toJSON(message: RegularSnapshotDisabled): unknown;
    fromPartial<I extends Exact<DeepPartial<RegularSnapshotDisabled>, I>>(object: I): RegularSnapshotDisabled;
} = {
    encode(_: RegularSnapshotDisabled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RegularSnapshotDisabled {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRegularSnapshotDisabled } as RegularSnapshotDisabled;
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

    fromJSON(_: any): RegularSnapshotDisabled {
        const message = { ...baseRegularSnapshotDisabled } as RegularSnapshotDisabled;
        return message;
    },

    toJSON(_: RegularSnapshotDisabled): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RegularSnapshotDisabled>, I>>(
        _: I,
    ): RegularSnapshotDisabled {
        const message = { ...baseRegularSnapshotDisabled } as RegularSnapshotDisabled;
        return message;
    },
};

const baseRegularSnapshotSettings: object = {
    schedule: 0,
    cronExpression: '',
    incrementDelaySeconds: 0,
};

export const RegularSnapshotSettings: {
    encode(message: RegularSnapshotSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegularSnapshotSettings;
    fromJSON(object: any): RegularSnapshotSettings;
    toJSON(message: RegularSnapshotSettings): unknown;
    fromPartial<I extends Exact<DeepPartial<RegularSnapshotSettings>, I>>(object: I): RegularSnapshotSettings;
} = {
    encode(message: RegularSnapshotSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.schedule !== 0) {
            writer.uint32(8).int32(message.schedule);
        }
        for (const v of message.tables) {
            IncrementalTable.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        if (message.cronExpression !== '') {
            writer.uint32(26).string(message.cronExpression);
        }
        if (message.incrementDelaySeconds !== 0) {
            writer.uint32(32).int64(message.incrementDelaySeconds);
        }
        if (message.retryConfig !== undefined) {
            RegularSnapshotSettings_RetryConfig.encode(
                message.retryConfig,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RegularSnapshotSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRegularSnapshotSettings } as RegularSnapshotSettings;
        message.tables = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.schedule = reader.int32() as any;
                    break;
                case 2:
                    message.tables.push(IncrementalTable.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.cronExpression = reader.string();
                    break;
                case 4:
                    message.incrementDelaySeconds = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.retryConfig = RegularSnapshotSettings_RetryConfig.decode(
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

    fromJSON(object: any): RegularSnapshotSettings {
        const message = { ...baseRegularSnapshotSettings } as RegularSnapshotSettings;
        message.schedule =
            object.schedule !== undefined && object.schedule !== null
                ? regularSnapshotScheduleIntervalFromJSON(object.schedule)
                : 0;
        message.tables = (object.tables ?? []).map((e: any) => IncrementalTable.fromJSON(e));
        message.cronExpression =
            object.cronExpression !== undefined && object.cronExpression !== null
                ? String(object.cronExpression)
                : '';
        message.incrementDelaySeconds =
            object.incrementDelaySeconds !== undefined && object.incrementDelaySeconds !== null
                ? Number(object.incrementDelaySeconds)
                : 0;
        message.retryConfig =
            object.retryConfig !== undefined && object.retryConfig !== null
                ? RegularSnapshotSettings_RetryConfig.fromJSON(object.retryConfig)
                : undefined;
        return message;
    },

    toJSON(message: RegularSnapshotSettings): unknown {
        const obj: any = {};
        message.schedule !== undefined &&
            (obj.schedule = regularSnapshotScheduleIntervalToJSON(message.schedule));
        if (message.tables) {
            obj.tables = message.tables.map((e) => (e ? IncrementalTable.toJSON(e) : undefined));
        } else {
            obj.tables = [];
        }
        message.cronExpression !== undefined && (obj.cronExpression = message.cronExpression);
        message.incrementDelaySeconds !== undefined &&
            (obj.incrementDelaySeconds = Math.round(message.incrementDelaySeconds));
        message.retryConfig !== undefined &&
            (obj.retryConfig = message.retryConfig
                ? RegularSnapshotSettings_RetryConfig.toJSON(message.retryConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RegularSnapshotSettings>, I>>(
        object: I,
    ): RegularSnapshotSettings {
        const message = { ...baseRegularSnapshotSettings } as RegularSnapshotSettings;
        message.schedule = object.schedule ?? 0;
        message.tables = object.tables?.map((e) => IncrementalTable.fromPartial(e)) || [];
        message.cronExpression = object.cronExpression ?? '';
        message.incrementDelaySeconds = object.incrementDelaySeconds ?? 0;
        message.retryConfig =
            object.retryConfig !== undefined && object.retryConfig !== null
                ? RegularSnapshotSettings_RetryConfig.fromPartial(object.retryConfig)
                : undefined;
        return message;
    },
};

const baseRegularSnapshotSettings_RetryConfig: object = { maxAttempts: 0 };

export const RegularSnapshotSettings_RetryConfig: {
    encode(message: RegularSnapshotSettings_RetryConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegularSnapshotSettings_RetryConfig;
    fromJSON(object: any): RegularSnapshotSettings_RetryConfig;
    toJSON(message: RegularSnapshotSettings_RetryConfig): unknown;
    fromPartial<I extends Exact<DeepPartial<RegularSnapshotSettings_RetryConfig>, I>>(object: I): RegularSnapshotSettings_RetryConfig;
} = {
    encode(
        message: RegularSnapshotSettings_RetryConfig,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.maxAttempts !== 0) {
            writer.uint32(8).int64(message.maxAttempts);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RegularSnapshotSettings_RetryConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRegularSnapshotSettings_RetryConfig,
        } as RegularSnapshotSettings_RetryConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxAttempts = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RegularSnapshotSettings_RetryConfig {
        const message = {
            ...baseRegularSnapshotSettings_RetryConfig,
        } as RegularSnapshotSettings_RetryConfig;
        message.maxAttempts =
            object.maxAttempts !== undefined && object.maxAttempts !== null
                ? Number(object.maxAttempts)
                : 0;
        return message;
    },

    toJSON(message: RegularSnapshotSettings_RetryConfig): unknown {
        const obj: any = {};
        message.maxAttempts !== undefined && (obj.maxAttempts = Math.round(message.maxAttempts));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RegularSnapshotSettings_RetryConfig>, I>>(
        object: I,
    ): RegularSnapshotSettings_RetryConfig {
        const message = {
            ...baseRegularSnapshotSettings_RetryConfig,
        } as RegularSnapshotSettings_RetryConfig;
        message.maxAttempts = object.maxAttempts ?? 0;
        return message;
    },
};

const baseIncrementalTable: object = {
    tableNamespace: '',
    tableName: '',
    cursorColumn: '',
    initialState: '',
};

export const IncrementalTable: {
    encode(message: IncrementalTable, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IncrementalTable;
    fromJSON(object: any): IncrementalTable;
    toJSON(message: IncrementalTable): unknown;
    fromPartial<I extends Exact<DeepPartial<IncrementalTable>, I>>(object: I): IncrementalTable;
} = {
    encode(message: IncrementalTable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.tableNamespace !== '') {
            writer.uint32(10).string(message.tableNamespace);
        }
        if (message.tableName !== '') {
            writer.uint32(18).string(message.tableName);
        }
        if (message.cursorColumn !== '') {
            writer.uint32(26).string(message.cursorColumn);
        }
        if (message.initialState !== '') {
            writer.uint32(34).string(message.initialState);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): IncrementalTable {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIncrementalTable } as IncrementalTable;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tableNamespace = reader.string();
                    break;
                case 2:
                    message.tableName = reader.string();
                    break;
                case 3:
                    message.cursorColumn = reader.string();
                    break;
                case 4:
                    message.initialState = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): IncrementalTable {
        const message = { ...baseIncrementalTable } as IncrementalTable;
        message.tableNamespace =
            object.tableNamespace !== undefined && object.tableNamespace !== null
                ? String(object.tableNamespace)
                : '';
        message.tableName =
            object.tableName !== undefined && object.tableName !== null
                ? String(object.tableName)
                : '';
        message.cursorColumn =
            object.cursorColumn !== undefined && object.cursorColumn !== null
                ? String(object.cursorColumn)
                : '';
        message.initialState =
            object.initialState !== undefined && object.initialState !== null
                ? String(object.initialState)
                : '';
        return message;
    },

    toJSON(message: IncrementalTable): unknown {
        const obj: any = {};
        message.tableNamespace !== undefined && (obj.tableNamespace = message.tableNamespace);
        message.tableName !== undefined && (obj.tableName = message.tableName);
        message.cursorColumn !== undefined && (obj.cursorColumn = message.cursorColumn);
        message.initialState !== undefined && (obj.initialState = message.initialState);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<IncrementalTable>, I>>(object: I): IncrementalTable {
        const message = { ...baseIncrementalTable } as IncrementalTable;
        message.tableNamespace = object.tableNamespace ?? '';
        message.tableName = object.tableName ?? '';
        message.cursorColumn = object.cursorColumn ?? '';
        message.initialState = object.initialState ?? '';
        return message;
    },
};

const baseYcRuntime: object = { jobCount: 0, flavor: 0 };

export const YcRuntime: {
    encode(message: YcRuntime, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): YcRuntime;
    fromJSON(object: any): YcRuntime;
    toJSON(message: YcRuntime): unknown;
    fromPartial<I extends Exact<DeepPartial<YcRuntime>, I>>(object: I): YcRuntime;
} = {
    encode(message: YcRuntime, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.jobCount !== 0) {
            writer.uint32(8).int64(message.jobCount);
        }
        if (message.flavor !== 0) {
            writer.uint32(16).int32(message.flavor);
        }
        if (message.uploadShardParams !== undefined) {
            ShardingUploadParams.encode(
                message.uploadShardParams,
                writer.uint32(66).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): YcRuntime {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseYcRuntime } as YcRuntime;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.jobCount = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.flavor = reader.int32() as any;
                    break;
                case 8:
                    message.uploadShardParams = ShardingUploadParams.decode(
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

    fromJSON(object: any): YcRuntime {
        const message = { ...baseYcRuntime } as YcRuntime;
        message.jobCount =
            object.jobCount !== undefined && object.jobCount !== null ? Number(object.jobCount) : 0;
        message.flavor =
            object.flavor !== undefined && object.flavor !== null
                ? flavorFromJSON(object.flavor)
                : 0;
        message.uploadShardParams =
            object.uploadShardParams !== undefined && object.uploadShardParams !== null
                ? ShardingUploadParams.fromJSON(object.uploadShardParams)
                : undefined;
        return message;
    },

    toJSON(message: YcRuntime): unknown {
        const obj: any = {};
        message.jobCount !== undefined && (obj.jobCount = Math.round(message.jobCount));
        message.flavor !== undefined && (obj.flavor = flavorToJSON(message.flavor));
        message.uploadShardParams !== undefined &&
            (obj.uploadShardParams = message.uploadShardParams
                ? ShardingUploadParams.toJSON(message.uploadShardParams)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<YcRuntime>, I>>(object: I): YcRuntime {
        const message = { ...baseYcRuntime } as YcRuntime;
        message.jobCount = object.jobCount ?? 0;
        message.flavor = object.flavor ?? 0;
        message.uploadShardParams =
            object.uploadShardParams !== undefined && object.uploadShardParams !== null
                ? ShardingUploadParams.fromPartial(object.uploadShardParams)
                : undefined;
        return message;
    },
};

const baseMaskFunction: object = {};

export const MaskFunction: {
    encode(message: MaskFunction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MaskFunction;
    fromJSON(object: any): MaskFunction;
    toJSON(message: MaskFunction): unknown;
    fromPartial<I extends Exact<DeepPartial<MaskFunction>, I>>(object: I): MaskFunction;
} = {
    encode(message: MaskFunction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.maskFunctionHash !== undefined) {
            MaskFunctionHash.encode(message.maskFunctionHash, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MaskFunction {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMaskFunction } as MaskFunction;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maskFunctionHash = MaskFunctionHash.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MaskFunction {
        const message = { ...baseMaskFunction } as MaskFunction;
        message.maskFunctionHash =
            object.maskFunctionHash !== undefined && object.maskFunctionHash !== null
                ? MaskFunctionHash.fromJSON(object.maskFunctionHash)
                : undefined;
        return message;
    },

    toJSON(message: MaskFunction): unknown {
        const obj: any = {};
        message.maskFunctionHash !== undefined &&
            (obj.maskFunctionHash = message.maskFunctionHash
                ? MaskFunctionHash.toJSON(message.maskFunctionHash)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MaskFunction>, I>>(object: I): MaskFunction {
        const message = { ...baseMaskFunction } as MaskFunction;
        message.maskFunctionHash =
            object.maskFunctionHash !== undefined && object.maskFunctionHash !== null
                ? MaskFunctionHash.fromPartial(object.maskFunctionHash)
                : undefined;
        return message;
    },
};

const baseMaskFunctionHash: object = { userDefinedSalt: '' };

export const MaskFunctionHash: {
    encode(message: MaskFunctionHash, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MaskFunctionHash;
    fromJSON(object: any): MaskFunctionHash;
    toJSON(message: MaskFunctionHash): unknown;
    fromPartial<I extends Exact<DeepPartial<MaskFunctionHash>, I>>(object: I): MaskFunctionHash;
} = {
    encode(message: MaskFunctionHash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userDefinedSalt !== '') {
            writer.uint32(10).string(message.userDefinedSalt);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MaskFunctionHash {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMaskFunctionHash } as MaskFunctionHash;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userDefinedSalt = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MaskFunctionHash {
        const message = { ...baseMaskFunctionHash } as MaskFunctionHash;
        message.userDefinedSalt =
            object.userDefinedSalt !== undefined && object.userDefinedSalt !== null
                ? String(object.userDefinedSalt)
                : '';
        return message;
    },

    toJSON(message: MaskFunctionHash): unknown {
        const obj: any = {};
        message.userDefinedSalt !== undefined && (obj.userDefinedSalt = message.userDefinedSalt);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MaskFunctionHash>, I>>(object: I): MaskFunctionHash {
        const message = { ...baseMaskFunctionHash } as MaskFunctionHash;
        message.userDefinedSalt = object.userDefinedSalt ?? '';
        return message;
    },
};

const baseTablesFilter: object = { includeTables: '', excludeTables: '' };

export const TablesFilter: {
    encode(message: TablesFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TablesFilter;
    fromJSON(object: any): TablesFilter;
    toJSON(message: TablesFilter): unknown;
    fromPartial<I extends Exact<DeepPartial<TablesFilter>, I>>(object: I): TablesFilter;
} = {
    encode(message: TablesFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.includeTables) {
            writer.uint32(10).string(v!);
        }
        for (const v of message.excludeTables) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TablesFilter {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTablesFilter } as TablesFilter;
        message.includeTables = [];
        message.excludeTables = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.includeTables.push(reader.string());
                    break;
                case 2:
                    message.excludeTables.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TablesFilter {
        const message = { ...baseTablesFilter } as TablesFilter;
        message.includeTables = (object.includeTables ?? []).map((e: any) => String(e));
        message.excludeTables = (object.excludeTables ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: TablesFilter): unknown {
        const obj: any = {};
        if (message.includeTables) {
            obj.includeTables = message.includeTables.map((e) => e);
        } else {
            obj.includeTables = [];
        }
        if (message.excludeTables) {
            obj.excludeTables = message.excludeTables.map((e) => e);
        } else {
            obj.excludeTables = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TablesFilter>, I>>(object: I): TablesFilter {
        const message = { ...baseTablesFilter } as TablesFilter;
        message.includeTables = object.includeTables?.map((e) => e) || [];
        message.excludeTables = object.excludeTables?.map((e) => e) || [];
        return message;
    },
};

const baseColumnsFilter: object = { includeColumns: '', excludeColumns: '' };

export const ColumnsFilter: {
    encode(message: ColumnsFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ColumnsFilter;
    fromJSON(object: any): ColumnsFilter;
    toJSON(message: ColumnsFilter): unknown;
    fromPartial<I extends Exact<DeepPartial<ColumnsFilter>, I>>(object: I): ColumnsFilter;
} = {
    encode(message: ColumnsFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.includeColumns) {
            writer.uint32(10).string(v!);
        }
        for (const v of message.excludeColumns) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ColumnsFilter {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseColumnsFilter } as ColumnsFilter;
        message.includeColumns = [];
        message.excludeColumns = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.includeColumns.push(reader.string());
                    break;
                case 2:
                    message.excludeColumns.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ColumnsFilter {
        const message = { ...baseColumnsFilter } as ColumnsFilter;
        message.includeColumns = (object.includeColumns ?? []).map((e: any) => String(e));
        message.excludeColumns = (object.excludeColumns ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: ColumnsFilter): unknown {
        const obj: any = {};
        if (message.includeColumns) {
            obj.includeColumns = message.includeColumns.map((e) => e);
        } else {
            obj.includeColumns = [];
        }
        if (message.excludeColumns) {
            obj.excludeColumns = message.excludeColumns.map((e) => e);
        } else {
            obj.excludeColumns = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ColumnsFilter>, I>>(object: I): ColumnsFilter {
        const message = { ...baseColumnsFilter } as ColumnsFilter;
        message.includeColumns = object.includeColumns?.map((e) => e) || [];
        message.excludeColumns = object.excludeColumns?.map((e) => e) || [];
        return message;
    },
};

const baseMaskFieldTransformer: object = { columns: '' };

export const MaskFieldTransformer: {
    encode(message: MaskFieldTransformer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MaskFieldTransformer;
    fromJSON(object: any): MaskFieldTransformer;
    toJSON(message: MaskFieldTransformer): unknown;
    fromPartial<I extends Exact<DeepPartial<MaskFieldTransformer>, I>>(object: I): MaskFieldTransformer;
} = {
    encode(message: MaskFieldTransformer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.tables !== undefined) {
            TablesFilter.encode(message.tables, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.columns) {
            writer.uint32(18).string(v!);
        }
        if (message.function !== undefined) {
            MaskFunction.encode(message.function, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MaskFieldTransformer {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMaskFieldTransformer } as MaskFieldTransformer;
        message.columns = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tables = TablesFilter.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.columns.push(reader.string());
                    break;
                case 3:
                    message.function = MaskFunction.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MaskFieldTransformer {
        const message = { ...baseMaskFieldTransformer } as MaskFieldTransformer;
        message.tables =
            object.tables !== undefined && object.tables !== null
                ? TablesFilter.fromJSON(object.tables)
                : undefined;
        message.columns = (object.columns ?? []).map((e: any) => String(e));
        message.function =
            object.function !== undefined && object.function !== null
                ? MaskFunction.fromJSON(object.function)
                : undefined;
        return message;
    },

    toJSON(message: MaskFieldTransformer): unknown {
        const obj: any = {};
        message.tables !== undefined &&
            (obj.tables = message.tables ? TablesFilter.toJSON(message.tables) : undefined);
        if (message.columns) {
            obj.columns = message.columns.map((e) => e);
        } else {
            obj.columns = [];
        }
        message.function !== undefined &&
            (obj.function = message.function ? MaskFunction.toJSON(message.function) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MaskFieldTransformer>, I>>(
        object: I,
    ): MaskFieldTransformer {
        const message = { ...baseMaskFieldTransformer } as MaskFieldTransformer;
        message.tables =
            object.tables !== undefined && object.tables !== null
                ? TablesFilter.fromPartial(object.tables)
                : undefined;
        message.columns = object.columns?.map((e) => e) || [];
        message.function =
            object.function !== undefined && object.function !== null
                ? MaskFunction.fromPartial(object.function)
                : undefined;
        return message;
    },
};

const baseFilterColumnsTransformer: object = {};

export const FilterColumnsTransformer: {
    encode(message: FilterColumnsTransformer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FilterColumnsTransformer;
    fromJSON(object: any): FilterColumnsTransformer;
    toJSON(message: FilterColumnsTransformer): unknown;
    fromPartial<I extends Exact<DeepPartial<FilterColumnsTransformer>, I>>(object: I): FilterColumnsTransformer;
} = {
    encode(
        message: FilterColumnsTransformer,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.tables !== undefined) {
            TablesFilter.encode(message.tables, writer.uint32(10).fork()).ldelim();
        }
        if (message.columns !== undefined) {
            ColumnsFilter.encode(message.columns, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FilterColumnsTransformer {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFilterColumnsTransformer } as FilterColumnsTransformer;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tables = TablesFilter.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.columns = ColumnsFilter.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FilterColumnsTransformer {
        const message = { ...baseFilterColumnsTransformer } as FilterColumnsTransformer;
        message.tables =
            object.tables !== undefined && object.tables !== null
                ? TablesFilter.fromJSON(object.tables)
                : undefined;
        message.columns =
            object.columns !== undefined && object.columns !== null
                ? ColumnsFilter.fromJSON(object.columns)
                : undefined;
        return message;
    },

    toJSON(message: FilterColumnsTransformer): unknown {
        const obj: any = {};
        message.tables !== undefined &&
            (obj.tables = message.tables ? TablesFilter.toJSON(message.tables) : undefined);
        message.columns !== undefined &&
            (obj.columns = message.columns ? ColumnsFilter.toJSON(message.columns) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FilterColumnsTransformer>, I>>(
        object: I,
    ): FilterColumnsTransformer {
        const message = { ...baseFilterColumnsTransformer } as FilterColumnsTransformer;
        message.tables =
            object.tables !== undefined && object.tables !== null
                ? TablesFilter.fromPartial(object.tables)
                : undefined;
        message.columns =
            object.columns !== undefined && object.columns !== null
                ? ColumnsFilter.fromPartial(object.columns)
                : undefined;
        return message;
    },
};

const baseTable: object = { nameSpace: '', name: '' };

export const Table: {
    encode(message: Table, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Table;
    fromJSON(object: any): Table;
    toJSON(message: Table): unknown;
    fromPartial<I extends Exact<DeepPartial<Table>, I>>(object: I): Table;
} = {
    encode(message: Table, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.nameSpace !== '') {
            writer.uint32(10).string(message.nameSpace);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Table {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTable } as Table;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nameSpace = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Table {
        const message = { ...baseTable } as Table;
        message.nameSpace =
            object.nameSpace !== undefined && object.nameSpace !== null
                ? String(object.nameSpace)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        return message;
    },

    toJSON(message: Table): unknown {
        const obj: any = {};
        message.nameSpace !== undefined && (obj.nameSpace = message.nameSpace);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Table>, I>>(object: I): Table {
        const message = { ...baseTable } as Table;
        message.nameSpace = object.nameSpace ?? '';
        message.name = object.name ?? '';
        return message;
    },
};

const baseRenameTable: object = {};

export const RenameTable: {
    encode(message: RenameTable, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RenameTable;
    fromJSON(object: any): RenameTable;
    toJSON(message: RenameTable): unknown;
    fromPartial<I extends Exact<DeepPartial<RenameTable>, I>>(object: I): RenameTable;
} = {
    encode(message: RenameTable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.originalName !== undefined) {
            Table.encode(message.originalName, writer.uint32(10).fork()).ldelim();
        }
        if (message.newName !== undefined) {
            Table.encode(message.newName, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RenameTable {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRenameTable } as RenameTable;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originalName = Table.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.newName = Table.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RenameTable {
        const message = { ...baseRenameTable } as RenameTable;
        message.originalName =
            object.originalName !== undefined && object.originalName !== null
                ? Table.fromJSON(object.originalName)
                : undefined;
        message.newName =
            object.newName !== undefined && object.newName !== null
                ? Table.fromJSON(object.newName)
                : undefined;
        return message;
    },

    toJSON(message: RenameTable): unknown {
        const obj: any = {};
        message.originalName !== undefined &&
            (obj.originalName = message.originalName
                ? Table.toJSON(message.originalName)
                : undefined);
        message.newName !== undefined &&
            (obj.newName = message.newName ? Table.toJSON(message.newName) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RenameTable>, I>>(object: I): RenameTable {
        const message = { ...baseRenameTable } as RenameTable;
        message.originalName =
            object.originalName !== undefined && object.originalName !== null
                ? Table.fromPartial(object.originalName)
                : undefined;
        message.newName =
            object.newName !== undefined && object.newName !== null
                ? Table.fromPartial(object.newName)
                : undefined;
        return message;
    },
};

const baseRenameTablesTransformer: object = {};

export const RenameTablesTransformer: {
    encode(message: RenameTablesTransformer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RenameTablesTransformer;
    fromJSON(object: any): RenameTablesTransformer;
    toJSON(message: RenameTablesTransformer): unknown;
    fromPartial<I extends Exact<DeepPartial<RenameTablesTransformer>, I>>(object: I): RenameTablesTransformer;
} = {
    encode(message: RenameTablesTransformer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.renameTables) {
            RenameTable.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RenameTablesTransformer {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRenameTablesTransformer } as RenameTablesTransformer;
        message.renameTables = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.renameTables.push(RenameTable.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RenameTablesTransformer {
        const message = { ...baseRenameTablesTransformer } as RenameTablesTransformer;
        message.renameTables = (object.renameTables ?? []).map((e: any) => RenameTable.fromJSON(e));
        return message;
    },

    toJSON(message: RenameTablesTransformer): unknown {
        const obj: any = {};
        if (message.renameTables) {
            obj.renameTables = message.renameTables.map((e) =>
                e ? RenameTable.toJSON(e) : undefined,
            );
        } else {
            obj.renameTables = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RenameTablesTransformer>, I>>(
        object: I,
    ): RenameTablesTransformer {
        const message = { ...baseRenameTablesTransformer } as RenameTablesTransformer;
        message.renameTables = object.renameTables?.map((e) => RenameTable.fromPartial(e)) || [];
        return message;
    },
};

const baseReplacePrimaryKeyTransformer: object = { keys: '' };

export const ReplacePrimaryKeyTransformer: {
    encode(message: ReplacePrimaryKeyTransformer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReplacePrimaryKeyTransformer;
    fromJSON(object: any): ReplacePrimaryKeyTransformer;
    toJSON(message: ReplacePrimaryKeyTransformer): unknown;
    fromPartial<I extends Exact<DeepPartial<ReplacePrimaryKeyTransformer>, I>>(object: I): ReplacePrimaryKeyTransformer;
} = {
    encode(
        message: ReplacePrimaryKeyTransformer,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.tables !== undefined) {
            TablesFilter.encode(message.tables, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.keys) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ReplacePrimaryKeyTransformer {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReplacePrimaryKeyTransformer } as ReplacePrimaryKeyTransformer;
        message.keys = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tables = TablesFilter.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.keys.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ReplacePrimaryKeyTransformer {
        const message = { ...baseReplacePrimaryKeyTransformer } as ReplacePrimaryKeyTransformer;
        message.tables =
            object.tables !== undefined && object.tables !== null
                ? TablesFilter.fromJSON(object.tables)
                : undefined;
        message.keys = (object.keys ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: ReplacePrimaryKeyTransformer): unknown {
        const obj: any = {};
        message.tables !== undefined &&
            (obj.tables = message.tables ? TablesFilter.toJSON(message.tables) : undefined);
        if (message.keys) {
            obj.keys = message.keys.map((e) => e);
        } else {
            obj.keys = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ReplacePrimaryKeyTransformer>, I>>(
        object: I,
    ): ReplacePrimaryKeyTransformer {
        const message = { ...baseReplacePrimaryKeyTransformer } as ReplacePrimaryKeyTransformer;
        message.tables =
            object.tables !== undefined && object.tables !== null
                ? TablesFilter.fromPartial(object.tables)
                : undefined;
        message.keys = object.keys?.map((e) => e) || [];
        return message;
    },
};

const baseToStringTransformer: object = {};

export const ToStringTransformer: {
    encode(message: ToStringTransformer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ToStringTransformer;
    fromJSON(object: any): ToStringTransformer;
    toJSON(message: ToStringTransformer): unknown;
    fromPartial<I extends Exact<DeepPartial<ToStringTransformer>, I>>(object: I): ToStringTransformer;
} = {
    encode(message: ToStringTransformer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.tables !== undefined) {
            TablesFilter.encode(message.tables, writer.uint32(10).fork()).ldelim();
        }
        if (message.columns !== undefined) {
            ColumnsFilter.encode(message.columns, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ToStringTransformer {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseToStringTransformer } as ToStringTransformer;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tables = TablesFilter.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.columns = ColumnsFilter.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ToStringTransformer {
        const message = { ...baseToStringTransformer } as ToStringTransformer;
        message.tables =
            object.tables !== undefined && object.tables !== null
                ? TablesFilter.fromJSON(object.tables)
                : undefined;
        message.columns =
            object.columns !== undefined && object.columns !== null
                ? ColumnsFilter.fromJSON(object.columns)
                : undefined;
        return message;
    },

    toJSON(message: ToStringTransformer): unknown {
        const obj: any = {};
        message.tables !== undefined &&
            (obj.tables = message.tables ? TablesFilter.toJSON(message.tables) : undefined);
        message.columns !== undefined &&
            (obj.columns = message.columns ? ColumnsFilter.toJSON(message.columns) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ToStringTransformer>, I>>(
        object: I,
    ): ToStringTransformer {
        const message = { ...baseToStringTransformer } as ToStringTransformer;
        message.tables =
            object.tables !== undefined && object.tables !== null
                ? TablesFilter.fromPartial(object.tables)
                : undefined;
        message.columns =
            object.columns !== undefined && object.columns !== null
                ? ColumnsFilter.fromPartial(object.columns)
                : undefined;
        return message;
    },
};

const baseSharderTransformerTypeRandom: object = {};

export const SharderTransformerTypeRandom: {
    encode(message: SharderTransformerTypeRandom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SharderTransformerTypeRandom;
    fromJSON(object: any): SharderTransformerTypeRandom;
    toJSON(message: SharderTransformerTypeRandom): unknown;
    fromPartial<I extends Exact<DeepPartial<SharderTransformerTypeRandom>, I>>(object: I): SharderTransformerTypeRandom;
} = {
    encode(_: SharderTransformerTypeRandom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SharderTransformerTypeRandom {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSharderTransformerTypeRandom } as SharderTransformerTypeRandom;
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

    fromJSON(_: any): SharderTransformerTypeRandom {
        const message = { ...baseSharderTransformerTypeRandom } as SharderTransformerTypeRandom;
        return message;
    },

    toJSON(_: SharderTransformerTypeRandom): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SharderTransformerTypeRandom>, I>>(
        _: I,
    ): SharderTransformerTypeRandom {
        const message = { ...baseSharderTransformerTypeRandom } as SharderTransformerTypeRandom;
        return message;
    },
};

const baseSharderTransformer: object = { shardsCount: 0 };

export const SharderTransformer: {
    encode(message: SharderTransformer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SharderTransformer;
    fromJSON(object: any): SharderTransformer;
    toJSON(message: SharderTransformer): unknown;
    fromPartial<I extends Exact<DeepPartial<SharderTransformer>, I>>(object: I): SharderTransformer;
} = {
    encode(message: SharderTransformer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.columns !== undefined) {
            ColumnsFilter.encode(message.columns, writer.uint32(18).fork()).ldelim();
        }
        if (message.random !== undefined) {
            SharderTransformerTypeRandom.encode(message.random, writer.uint32(34).fork()).ldelim();
        }
        if (message.tables !== undefined) {
            TablesFilter.encode(message.tables, writer.uint32(10).fork()).ldelim();
        }
        if (message.shardsCount !== 0) {
            writer.uint32(24).int64(message.shardsCount);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SharderTransformer {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSharderTransformer } as SharderTransformer;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.columns = ColumnsFilter.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.random = SharderTransformerTypeRandom.decode(reader, reader.uint32());
                    break;
                case 1:
                    message.tables = TablesFilter.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.shardsCount = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SharderTransformer {
        const message = { ...baseSharderTransformer } as SharderTransformer;
        message.columns =
            object.columns !== undefined && object.columns !== null
                ? ColumnsFilter.fromJSON(object.columns)
                : undefined;
        message.random =
            object.random !== undefined && object.random !== null
                ? SharderTransformerTypeRandom.fromJSON(object.random)
                : undefined;
        message.tables =
            object.tables !== undefined && object.tables !== null
                ? TablesFilter.fromJSON(object.tables)
                : undefined;
        message.shardsCount =
            object.shardsCount !== undefined && object.shardsCount !== null
                ? Number(object.shardsCount)
                : 0;
        return message;
    },

    toJSON(message: SharderTransformer): unknown {
        const obj: any = {};
        message.columns !== undefined &&
            (obj.columns = message.columns ? ColumnsFilter.toJSON(message.columns) : undefined);
        message.random !== undefined &&
            (obj.random = message.random
                ? SharderTransformerTypeRandom.toJSON(message.random)
                : undefined);
        message.tables !== undefined &&
            (obj.tables = message.tables ? TablesFilter.toJSON(message.tables) : undefined);
        message.shardsCount !== undefined && (obj.shardsCount = Math.round(message.shardsCount));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SharderTransformer>, I>>(
        object: I,
    ): SharderTransformer {
        const message = { ...baseSharderTransformer } as SharderTransformer;
        message.columns =
            object.columns !== undefined && object.columns !== null
                ? ColumnsFilter.fromPartial(object.columns)
                : undefined;
        message.random =
            object.random !== undefined && object.random !== null
                ? SharderTransformerTypeRandom.fromPartial(object.random)
                : undefined;
        message.tables =
            object.tables !== undefined && object.tables !== null
                ? TablesFilter.fromPartial(object.tables)
                : undefined;
        message.shardsCount = object.shardsCount ?? 0;
        return message;
    },
};

const baseTableSplitterTransformer: object = { columns: '', splitter: '' };

export const TableSplitterTransformer: {
    encode(message: TableSplitterTransformer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableSplitterTransformer;
    fromJSON(object: any): TableSplitterTransformer;
    toJSON(message: TableSplitterTransformer): unknown;
    fromPartial<I extends Exact<DeepPartial<TableSplitterTransformer>, I>>(object: I): TableSplitterTransformer;
} = {
    encode(
        message: TableSplitterTransformer,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.tables !== undefined) {
            TablesFilter.encode(message.tables, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.columns) {
            writer.uint32(18).string(v!);
        }
        if (message.splitter !== '') {
            writer.uint32(26).string(message.splitter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TableSplitterTransformer {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTableSplitterTransformer } as TableSplitterTransformer;
        message.columns = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tables = TablesFilter.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.columns.push(reader.string());
                    break;
                case 3:
                    message.splitter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TableSplitterTransformer {
        const message = { ...baseTableSplitterTransformer } as TableSplitterTransformer;
        message.tables =
            object.tables !== undefined && object.tables !== null
                ? TablesFilter.fromJSON(object.tables)
                : undefined;
        message.columns = (object.columns ?? []).map((e: any) => String(e));
        message.splitter =
            object.splitter !== undefined && object.splitter !== null
                ? String(object.splitter)
                : '';
        return message;
    },

    toJSON(message: TableSplitterTransformer): unknown {
        const obj: any = {};
        message.tables !== undefined &&
            (obj.tables = message.tables ? TablesFilter.toJSON(message.tables) : undefined);
        if (message.columns) {
            obj.columns = message.columns.map((e) => e);
        } else {
            obj.columns = [];
        }
        message.splitter !== undefined && (obj.splitter = message.splitter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TableSplitterTransformer>, I>>(
        object: I,
    ): TableSplitterTransformer {
        const message = { ...baseTableSplitterTransformer } as TableSplitterTransformer;
        message.tables =
            object.tables !== undefined && object.tables !== null
                ? TablesFilter.fromPartial(object.tables)
                : undefined;
        message.columns = object.columns?.map((e) => e) || [];
        message.splitter = object.splitter ?? '';
        return message;
    },
};

const baseFilterRowsTransformer: object = { filter: '', filters: '' };

export const FilterRowsTransformer: {
    encode(message: FilterRowsTransformer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FilterRowsTransformer;
    fromJSON(object: any): FilterRowsTransformer;
    toJSON(message: FilterRowsTransformer): unknown;
    fromPartial<I extends Exact<DeepPartial<FilterRowsTransformer>, I>>(object: I): FilterRowsTransformer;
} = {
    encode(message: FilterRowsTransformer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.tables !== undefined) {
            TablesFilter.encode(message.tables, writer.uint32(10).fork()).ldelim();
        }
        if (message.filter !== '') {
            writer.uint32(18).string(message.filter);
        }
        for (const v of message.filters) {
            writer.uint32(26).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FilterRowsTransformer {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFilterRowsTransformer } as FilterRowsTransformer;
        message.filters = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tables = TablesFilter.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.filter = reader.string();
                    break;
                case 3:
                    message.filters.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FilterRowsTransformer {
        const message = { ...baseFilterRowsTransformer } as FilterRowsTransformer;
        message.tables =
            object.tables !== undefined && object.tables !== null
                ? TablesFilter.fromJSON(object.tables)
                : undefined;
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        message.filters = (object.filters ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: FilterRowsTransformer): unknown {
        const obj: any = {};
        message.tables !== undefined &&
            (obj.tables = message.tables ? TablesFilter.toJSON(message.tables) : undefined);
        message.filter !== undefined && (obj.filter = message.filter);
        if (message.filters) {
            obj.filters = message.filters.map((e) => e);
        } else {
            obj.filters = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FilterRowsTransformer>, I>>(
        object: I,
    ): FilterRowsTransformer {
        const message = { ...baseFilterRowsTransformer } as FilterRowsTransformer;
        message.tables =
            object.tables !== undefined && object.tables !== null
                ? TablesFilter.fromPartial(object.tables)
                : undefined;
        message.filter = object.filter ?? '';
        message.filters = object.filters?.map((e) => e) || [];
        return message;
    },
};

const baseTransformer: object = {};

export const Transformer: {
    encode(message: Transformer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Transformer;
    fromJSON(object: any): Transformer;
    toJSON(message: Transformer): unknown;
    fromPartial<I extends Exact<DeepPartial<Transformer>, I>>(object: I): Transformer;
} = {
    encode(message: Transformer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.maskField !== undefined) {
            MaskFieldTransformer.encode(message.maskField, writer.uint32(10).fork()).ldelim();
        }
        if (message.filterColumns !== undefined) {
            FilterColumnsTransformer.encode(
                message.filterColumns,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.renameTables !== undefined) {
            RenameTablesTransformer.encode(message.renameTables, writer.uint32(34).fork()).ldelim();
        }
        if (message.replacePrimaryKey !== undefined) {
            ReplacePrimaryKeyTransformer.encode(
                message.replacePrimaryKey,
                writer.uint32(50).fork(),
            ).ldelim();
        }
        if (message.convertToString !== undefined) {
            ToStringTransformer.encode(message.convertToString, writer.uint32(58).fork()).ldelim();
        }
        if (message.sharderTransformer !== undefined) {
            SharderTransformer.encode(
                message.sharderTransformer,
                writer.uint32(74).fork(),
            ).ldelim();
        }
        if (message.tableSplitterTransformer !== undefined) {
            TableSplitterTransformer.encode(
                message.tableSplitterTransformer,
                writer.uint32(106).fork(),
            ).ldelim();
        }
        if (message.filterRows !== undefined) {
            FilterRowsTransformer.encode(message.filterRows, writer.uint32(114).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Transformer {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTransformer } as Transformer;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maskField = MaskFieldTransformer.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.filterColumns = FilterColumnsTransformer.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 4:
                    message.renameTables = RenameTablesTransformer.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.replacePrimaryKey = ReplacePrimaryKeyTransformer.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 7:
                    message.convertToString = ToStringTransformer.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.sharderTransformer = SharderTransformer.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.tableSplitterTransformer = TableSplitterTransformer.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 14:
                    message.filterRows = FilterRowsTransformer.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Transformer {
        const message = { ...baseTransformer } as Transformer;
        message.maskField =
            object.maskField !== undefined && object.maskField !== null
                ? MaskFieldTransformer.fromJSON(object.maskField)
                : undefined;
        message.filterColumns =
            object.filterColumns !== undefined && object.filterColumns !== null
                ? FilterColumnsTransformer.fromJSON(object.filterColumns)
                : undefined;
        message.renameTables =
            object.renameTables !== undefined && object.renameTables !== null
                ? RenameTablesTransformer.fromJSON(object.renameTables)
                : undefined;
        message.replacePrimaryKey =
            object.replacePrimaryKey !== undefined && object.replacePrimaryKey !== null
                ? ReplacePrimaryKeyTransformer.fromJSON(object.replacePrimaryKey)
                : undefined;
        message.convertToString =
            object.convertToString !== undefined && object.convertToString !== null
                ? ToStringTransformer.fromJSON(object.convertToString)
                : undefined;
        message.sharderTransformer =
            object.sharderTransformer !== undefined && object.sharderTransformer !== null
                ? SharderTransformer.fromJSON(object.sharderTransformer)
                : undefined;
        message.tableSplitterTransformer =
            object.tableSplitterTransformer !== undefined &&
            object.tableSplitterTransformer !== null
                ? TableSplitterTransformer.fromJSON(object.tableSplitterTransformer)
                : undefined;
        message.filterRows =
            object.filterRows !== undefined && object.filterRows !== null
                ? FilterRowsTransformer.fromJSON(object.filterRows)
                : undefined;
        return message;
    },

    toJSON(message: Transformer): unknown {
        const obj: any = {};
        message.maskField !== undefined &&
            (obj.maskField = message.maskField
                ? MaskFieldTransformer.toJSON(message.maskField)
                : undefined);
        message.filterColumns !== undefined &&
            (obj.filterColumns = message.filterColumns
                ? FilterColumnsTransformer.toJSON(message.filterColumns)
                : undefined);
        message.renameTables !== undefined &&
            (obj.renameTables = message.renameTables
                ? RenameTablesTransformer.toJSON(message.renameTables)
                : undefined);
        message.replacePrimaryKey !== undefined &&
            (obj.replacePrimaryKey = message.replacePrimaryKey
                ? ReplacePrimaryKeyTransformer.toJSON(message.replacePrimaryKey)
                : undefined);
        message.convertToString !== undefined &&
            (obj.convertToString = message.convertToString
                ? ToStringTransformer.toJSON(message.convertToString)
                : undefined);
        message.sharderTransformer !== undefined &&
            (obj.sharderTransformer = message.sharderTransformer
                ? SharderTransformer.toJSON(message.sharderTransformer)
                : undefined);
        message.tableSplitterTransformer !== undefined &&
            (obj.tableSplitterTransformer = message.tableSplitterTransformer
                ? TableSplitterTransformer.toJSON(message.tableSplitterTransformer)
                : undefined);
        message.filterRows !== undefined &&
            (obj.filterRows = message.filterRows
                ? FilterRowsTransformer.toJSON(message.filterRows)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Transformer>, I>>(object: I): Transformer {
        const message = { ...baseTransformer } as Transformer;
        message.maskField =
            object.maskField !== undefined && object.maskField !== null
                ? MaskFieldTransformer.fromPartial(object.maskField)
                : undefined;
        message.filterColumns =
            object.filterColumns !== undefined && object.filterColumns !== null
                ? FilterColumnsTransformer.fromPartial(object.filterColumns)
                : undefined;
        message.renameTables =
            object.renameTables !== undefined && object.renameTables !== null
                ? RenameTablesTransformer.fromPartial(object.renameTables)
                : undefined;
        message.replacePrimaryKey =
            object.replacePrimaryKey !== undefined && object.replacePrimaryKey !== null
                ? ReplacePrimaryKeyTransformer.fromPartial(object.replacePrimaryKey)
                : undefined;
        message.convertToString =
            object.convertToString !== undefined && object.convertToString !== null
                ? ToStringTransformer.fromPartial(object.convertToString)
                : undefined;
        message.sharderTransformer =
            object.sharderTransformer !== undefined && object.sharderTransformer !== null
                ? SharderTransformer.fromPartial(object.sharderTransformer)
                : undefined;
        message.tableSplitterTransformer =
            object.tableSplitterTransformer !== undefined &&
            object.tableSplitterTransformer !== null
                ? TableSplitterTransformer.fromPartial(object.tableSplitterTransformer)
                : undefined;
        message.filterRows =
            object.filterRows !== undefined && object.filterRows !== null
                ? FilterRowsTransformer.fromPartial(object.filterRows)
                : undefined;
        return message;
    },
};

const baseTransformation: object = {};

export const Transformation: {
    encode(message: Transformation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Transformation;
    fromJSON(object: any): Transformation;
    toJSON(message: Transformation): unknown;
    fromPartial<I extends Exact<DeepPartial<Transformation>, I>>(object: I): Transformation;
} = {
    encode(message: Transformation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.transformers) {
            Transformer.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Transformation {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTransformation } as Transformation;
        message.transformers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transformers.push(Transformer.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Transformation {
        const message = { ...baseTransformation } as Transformation;
        message.transformers = (object.transformers ?? []).map((e: any) => Transformer.fromJSON(e));
        return message;
    },

    toJSON(message: Transformation): unknown {
        const obj: any = {};
        if (message.transformers) {
            obj.transformers = message.transformers.map((e) =>
                e ? Transformer.toJSON(e) : undefined,
            );
        } else {
            obj.transformers = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Transformation>, I>>(object: I): Transformation {
        const message = { ...baseTransformation } as Transformation;
        message.transformers = object.transformers?.map((e) => Transformer.fromPartial(e)) || [];
        return message;
    },
};

const baseDataObjects: object = { includeObjects: '' };

export const DataObjects: {
    encode(message: DataObjects, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataObjects;
    fromJSON(object: any): DataObjects;
    toJSON(message: DataObjects): unknown;
    fromPartial<I extends Exact<DeepPartial<DataObjects>, I>>(object: I): DataObjects;
} = {
    encode(message: DataObjects, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.includeObjects) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DataObjects {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDataObjects } as DataObjects;
        message.includeObjects = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.includeObjects.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DataObjects {
        const message = { ...baseDataObjects } as DataObjects;
        message.includeObjects = (object.includeObjects ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: DataObjects): unknown {
        const obj: any = {};
        if (message.includeObjects) {
            obj.includeObjects = message.includeObjects.map((e) => e);
        } else {
            obj.includeObjects = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DataObjects>, I>>(object: I): DataObjects {
        const message = { ...baseDataObjects } as DataObjects;
        message.includeObjects = object.includeObjects?.map((e) => e) || [];
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
