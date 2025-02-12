/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Endpoint } from '../../../../yandex/cloud/datatransfer/v1/endpoint';

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
        default:
            return 'UNKNOWN';
    }
}

/** Transfer core entity */
export interface Transfer {
    $type: 'yandex.cloud.datatransfer.v1.Transfer';
    id: string;
    folderId: string;
    name: string;
    description: string;
    labels: { [key: string]: string };
    source?: Endpoint;
    target?: Endpoint;
    runtime?: Runtime;
    status: TransferStatus;
    type: TransferType;
    warning: string;
    transformation?: Transformation;
    dataObjects?: DataObjects;
    prestable: boolean;
}

export interface Transfer_LabelsEntry {
    $type: 'yandex.cloud.datatransfer.v1.Transfer.LabelsEntry';
    key: string;
    value: string;
}

export interface Runtime {
    $type: 'yandex.cloud.datatransfer.v1.Runtime';
    ycRuntime?: YcRuntime | undefined;
}

export interface ShardingUploadParams {
    $type: 'yandex.cloud.datatransfer.v1.ShardingUploadParams';
    jobCount: number;
    processCount: number;
}

export interface YcRuntime {
    $type: 'yandex.cloud.datatransfer.v1.YcRuntime';
    jobCount: number;
    uploadShardParams?: ShardingUploadParams;
}

/** Mask function */
export interface MaskFunction {
    $type: 'yandex.cloud.datatransfer.v1.MaskFunction';
    /** Hash mask function */
    maskFunctionHash?: MaskFunctionHash | undefined;
}

/** Hash data using HMAC */
export interface MaskFunctionHash {
    $type: 'yandex.cloud.datatransfer.v1.MaskFunctionHash';
    /**
     * This string will be used in the HMAC(sha256, salt) function applied to the
     * column data.
     */
    userDefinedSalt: string;
}

/** Filter tables using lists of included and excluded tables. */
export interface TablesFilter {
    $type: 'yandex.cloud.datatransfer.v1.TablesFilter';
    /** List of tables that will be included to transfer */
    includeTables: string[];
    /** List of tables that will be excluded to transfer */
    excludeTables: string[];
}

/** Filter columns using lists of included and excluded columns. */
export interface ColumnsFilter {
    $type: 'yandex.cloud.datatransfer.v1.ColumnsFilter';
    /** List of columns that will be included to transfer */
    includeColumns: string[];
    /** List of columns that will be excluded to transfer */
    excludeColumns: string[];
}

/** Mask field transformer allows you to hash data */
export interface MaskFieldTransformer {
    $type: 'yandex.cloud.datatransfer.v1.MaskFieldTransformer';
    /** List of included and excluded tables */
    tables?: TablesFilter;
    /** Specify the name of the column for data masking (a regular expression). */
    columns: string[];
    /** Mask function */
    function?: MaskFunction;
}

/** Set up a list of table columns to transfer */
export interface FilterColumnsTransformer {
    $type: 'yandex.cloud.datatransfer.v1.FilterColumnsTransformer';
    /** List of the tables to filter using lists of included and excluded tables. */
    tables?: TablesFilter;
    /**
     * List of the columns to transfer to the target tables using lists of included and
     * excluded columns.
     */
    columns?: ColumnsFilter;
}

export interface Table {
    $type: 'yandex.cloud.datatransfer.v1.Table';
    nameSpace: string;
    name: string;
}

/** Specify rule for renaming table */
export interface RenameTable {
    $type: 'yandex.cloud.datatransfer.v1.RenameTable';
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
    $type: 'yandex.cloud.datatransfer.v1.RenameTablesTransformer';
    /** List of renaming rules */
    renameTables: RenameTable[];
}

/** Override primary keys */
export interface ReplacePrimaryKeyTransformer {
    $type: 'yandex.cloud.datatransfer.v1.ReplacePrimaryKeyTransformer';
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
    $type: 'yandex.cloud.datatransfer.v1.ToStringTransformer';
    /** List of included and excluded tables */
    tables?: TablesFilter;
    /** List of included and excluded columns */
    columns?: ColumnsFilter;
}

/**
 * Set the number of shards for particular tables and a list of columns whose
 * values will be used for calculating a hash to determine a shard.
 */
export interface SharderTransformer {
    $type: 'yandex.cloud.datatransfer.v1.SharderTransformer';
    /** List of included and excluded tables */
    tables?: TablesFilter;
    /** List of included and excluded columns */
    columns?: ColumnsFilter;
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
    $type: 'yandex.cloud.datatransfer.v1.TableSplitterTransformer';
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
    $type: 'yandex.cloud.datatransfer.v1.FilterRowsTransformer';
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
    $type: 'yandex.cloud.datatransfer.v1.Transformer';
    maskField?: MaskFieldTransformer | undefined;
    filterColumns?: FilterColumnsTransformer | undefined;
    renameTables?: RenameTablesTransformer | undefined;
    replacePrimaryKey?: ReplacePrimaryKeyTransformer | undefined;
    convertToString?: ToStringTransformer | undefined;
    sharderTransformer?: SharderTransformer | undefined;
    tableSplitterTransformer?: TableSplitterTransformer | undefined;
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
    $type: 'yandex.cloud.datatransfer.v1.Transformation';
    /**
     * Transformers are set as a list.
     * When activating a transfer, a transformation plan is made for the tables that
     * match the specified criteria.
     * Transformers are applied to the tables in the sequence specified in the list.
     */
    transformers: Transformer[];
}

export interface DataObjects {
    $type: 'yandex.cloud.datatransfer.v1.DataObjects';
    includeObjects: string[];
}

const baseTransfer: object = {
    $type: 'yandex.cloud.datatransfer.v1.Transfer',
    id: '',
    folderId: '',
    name: '',
    description: '',
    status: 0,
    type: 0,
    warning: '',
    prestable: false,
};

export const Transfer = {
    $type: 'yandex.cloud.datatransfer.v1.Transfer' as const,

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
                {
                    $type: 'yandex.cloud.datatransfer.v1.Transfer.LabelsEntry',
                    key: key as any,
                    value,
                },
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
        if (message.transformation !== undefined) {
            Transformation.encode(message.transformation, writer.uint32(138).fork()).ldelim();
        }
        if (message.dataObjects !== undefined) {
            DataObjects.encode(message.dataObjects, writer.uint32(154).fork()).ldelim();
        }
        if (message.prestable === true) {
            writer.uint32(176).bool(message.prestable);
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
                case 17:
                    message.transformation = Transformation.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.dataObjects = DataObjects.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.prestable = reader.bool();
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
        message.transformation !== undefined &&
            (obj.transformation = message.transformation
                ? Transformation.toJSON(message.transformation)
                : undefined);
        message.dataObjects !== undefined &&
            (obj.dataObjects = message.dataObjects
                ? DataObjects.toJSON(message.dataObjects)
                : undefined);
        message.prestable !== undefined && (obj.prestable = message.prestable);
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
        message.transformation =
            object.transformation !== undefined && object.transformation !== null
                ? Transformation.fromPartial(object.transformation)
                : undefined;
        message.dataObjects =
            object.dataObjects !== undefined && object.dataObjects !== null
                ? DataObjects.fromPartial(object.dataObjects)
                : undefined;
        message.prestable = object.prestable ?? false;
        return message;
    },
};

messageTypeRegistry.set(Transfer.$type, Transfer);

const baseTransfer_LabelsEntry: object = {
    $type: 'yandex.cloud.datatransfer.v1.Transfer.LabelsEntry',
    key: '',
    value: '',
};

export const Transfer_LabelsEntry = {
    $type: 'yandex.cloud.datatransfer.v1.Transfer.LabelsEntry' as const,

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

messageTypeRegistry.set(Transfer_LabelsEntry.$type, Transfer_LabelsEntry);

const baseRuntime: object = { $type: 'yandex.cloud.datatransfer.v1.Runtime' };

export const Runtime = {
    $type: 'yandex.cloud.datatransfer.v1.Runtime' as const,

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

messageTypeRegistry.set(Runtime.$type, Runtime);

const baseShardingUploadParams: object = {
    $type: 'yandex.cloud.datatransfer.v1.ShardingUploadParams',
    jobCount: 0,
    processCount: 0,
};

export const ShardingUploadParams = {
    $type: 'yandex.cloud.datatransfer.v1.ShardingUploadParams' as const,

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

messageTypeRegistry.set(ShardingUploadParams.$type, ShardingUploadParams);

const baseYcRuntime: object = { $type: 'yandex.cloud.datatransfer.v1.YcRuntime', jobCount: 0 };

export const YcRuntime = {
    $type: 'yandex.cloud.datatransfer.v1.YcRuntime' as const,

    encode(message: YcRuntime, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.jobCount !== 0) {
            writer.uint32(8).int64(message.jobCount);
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
        message.uploadShardParams =
            object.uploadShardParams !== undefined && object.uploadShardParams !== null
                ? ShardingUploadParams.fromJSON(object.uploadShardParams)
                : undefined;
        return message;
    },

    toJSON(message: YcRuntime): unknown {
        const obj: any = {};
        message.jobCount !== undefined && (obj.jobCount = Math.round(message.jobCount));
        message.uploadShardParams !== undefined &&
            (obj.uploadShardParams = message.uploadShardParams
                ? ShardingUploadParams.toJSON(message.uploadShardParams)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<YcRuntime>, I>>(object: I): YcRuntime {
        const message = { ...baseYcRuntime } as YcRuntime;
        message.jobCount = object.jobCount ?? 0;
        message.uploadShardParams =
            object.uploadShardParams !== undefined && object.uploadShardParams !== null
                ? ShardingUploadParams.fromPartial(object.uploadShardParams)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(YcRuntime.$type, YcRuntime);

const baseMaskFunction: object = { $type: 'yandex.cloud.datatransfer.v1.MaskFunction' };

export const MaskFunction = {
    $type: 'yandex.cloud.datatransfer.v1.MaskFunction' as const,

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

messageTypeRegistry.set(MaskFunction.$type, MaskFunction);

const baseMaskFunctionHash: object = {
    $type: 'yandex.cloud.datatransfer.v1.MaskFunctionHash',
    userDefinedSalt: '',
};

export const MaskFunctionHash = {
    $type: 'yandex.cloud.datatransfer.v1.MaskFunctionHash' as const,

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

messageTypeRegistry.set(MaskFunctionHash.$type, MaskFunctionHash);

const baseTablesFilter: object = {
    $type: 'yandex.cloud.datatransfer.v1.TablesFilter',
    includeTables: '',
    excludeTables: '',
};

export const TablesFilter = {
    $type: 'yandex.cloud.datatransfer.v1.TablesFilter' as const,

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

messageTypeRegistry.set(TablesFilter.$type, TablesFilter);

const baseColumnsFilter: object = {
    $type: 'yandex.cloud.datatransfer.v1.ColumnsFilter',
    includeColumns: '',
    excludeColumns: '',
};

export const ColumnsFilter = {
    $type: 'yandex.cloud.datatransfer.v1.ColumnsFilter' as const,

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

messageTypeRegistry.set(ColumnsFilter.$type, ColumnsFilter);

const baseMaskFieldTransformer: object = {
    $type: 'yandex.cloud.datatransfer.v1.MaskFieldTransformer',
    columns: '',
};

export const MaskFieldTransformer = {
    $type: 'yandex.cloud.datatransfer.v1.MaskFieldTransformer' as const,

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

messageTypeRegistry.set(MaskFieldTransformer.$type, MaskFieldTransformer);

const baseFilterColumnsTransformer: object = {
    $type: 'yandex.cloud.datatransfer.v1.FilterColumnsTransformer',
};

export const FilterColumnsTransformer = {
    $type: 'yandex.cloud.datatransfer.v1.FilterColumnsTransformer' as const,

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

messageTypeRegistry.set(FilterColumnsTransformer.$type, FilterColumnsTransformer);

const baseTable: object = { $type: 'yandex.cloud.datatransfer.v1.Table', nameSpace: '', name: '' };

export const Table = {
    $type: 'yandex.cloud.datatransfer.v1.Table' as const,

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

messageTypeRegistry.set(Table.$type, Table);

const baseRenameTable: object = { $type: 'yandex.cloud.datatransfer.v1.RenameTable' };

export const RenameTable = {
    $type: 'yandex.cloud.datatransfer.v1.RenameTable' as const,

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

messageTypeRegistry.set(RenameTable.$type, RenameTable);

const baseRenameTablesTransformer: object = {
    $type: 'yandex.cloud.datatransfer.v1.RenameTablesTransformer',
};

export const RenameTablesTransformer = {
    $type: 'yandex.cloud.datatransfer.v1.RenameTablesTransformer' as const,

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

messageTypeRegistry.set(RenameTablesTransformer.$type, RenameTablesTransformer);

const baseReplacePrimaryKeyTransformer: object = {
    $type: 'yandex.cloud.datatransfer.v1.ReplacePrimaryKeyTransformer',
    keys: '',
};

export const ReplacePrimaryKeyTransformer = {
    $type: 'yandex.cloud.datatransfer.v1.ReplacePrimaryKeyTransformer' as const,

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

messageTypeRegistry.set(ReplacePrimaryKeyTransformer.$type, ReplacePrimaryKeyTransformer);

const baseToStringTransformer: object = {
    $type: 'yandex.cloud.datatransfer.v1.ToStringTransformer',
};

export const ToStringTransformer = {
    $type: 'yandex.cloud.datatransfer.v1.ToStringTransformer' as const,

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

messageTypeRegistry.set(ToStringTransformer.$type, ToStringTransformer);

const baseSharderTransformer: object = {
    $type: 'yandex.cloud.datatransfer.v1.SharderTransformer',
    shardsCount: 0,
};

export const SharderTransformer = {
    $type: 'yandex.cloud.datatransfer.v1.SharderTransformer' as const,

    encode(message: SharderTransformer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.tables !== undefined) {
            TablesFilter.encode(message.tables, writer.uint32(10).fork()).ldelim();
        }
        if (message.columns !== undefined) {
            ColumnsFilter.encode(message.columns, writer.uint32(18).fork()).ldelim();
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
                case 1:
                    message.tables = TablesFilter.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.columns = ColumnsFilter.decode(reader, reader.uint32());
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
        message.tables =
            object.tables !== undefined && object.tables !== null
                ? TablesFilter.fromJSON(object.tables)
                : undefined;
        message.columns =
            object.columns !== undefined && object.columns !== null
                ? ColumnsFilter.fromJSON(object.columns)
                : undefined;
        message.shardsCount =
            object.shardsCount !== undefined && object.shardsCount !== null
                ? Number(object.shardsCount)
                : 0;
        return message;
    },

    toJSON(message: SharderTransformer): unknown {
        const obj: any = {};
        message.tables !== undefined &&
            (obj.tables = message.tables ? TablesFilter.toJSON(message.tables) : undefined);
        message.columns !== undefined &&
            (obj.columns = message.columns ? ColumnsFilter.toJSON(message.columns) : undefined);
        message.shardsCount !== undefined && (obj.shardsCount = Math.round(message.shardsCount));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SharderTransformer>, I>>(
        object: I,
    ): SharderTransformer {
        const message = { ...baseSharderTransformer } as SharderTransformer;
        message.tables =
            object.tables !== undefined && object.tables !== null
                ? TablesFilter.fromPartial(object.tables)
                : undefined;
        message.columns =
            object.columns !== undefined && object.columns !== null
                ? ColumnsFilter.fromPartial(object.columns)
                : undefined;
        message.shardsCount = object.shardsCount ?? 0;
        return message;
    },
};

messageTypeRegistry.set(SharderTransformer.$type, SharderTransformer);

const baseTableSplitterTransformer: object = {
    $type: 'yandex.cloud.datatransfer.v1.TableSplitterTransformer',
    columns: '',
    splitter: '',
};

export const TableSplitterTransformer = {
    $type: 'yandex.cloud.datatransfer.v1.TableSplitterTransformer' as const,

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

messageTypeRegistry.set(TableSplitterTransformer.$type, TableSplitterTransformer);

const baseFilterRowsTransformer: object = {
    $type: 'yandex.cloud.datatransfer.v1.FilterRowsTransformer',
    filter: '',
    filters: '',
};

export const FilterRowsTransformer = {
    $type: 'yandex.cloud.datatransfer.v1.FilterRowsTransformer' as const,

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

messageTypeRegistry.set(FilterRowsTransformer.$type, FilterRowsTransformer);

const baseTransformer: object = { $type: 'yandex.cloud.datatransfer.v1.Transformer' };

export const Transformer = {
    $type: 'yandex.cloud.datatransfer.v1.Transformer' as const,

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

messageTypeRegistry.set(Transformer.$type, Transformer);

const baseTransformation: object = { $type: 'yandex.cloud.datatransfer.v1.Transformation' };

export const Transformation = {
    $type: 'yandex.cloud.datatransfer.v1.Transformation' as const,

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

messageTypeRegistry.set(Transformation.$type, Transformation);

const baseDataObjects: object = {
    $type: 'yandex.cloud.datatransfer.v1.DataObjects',
    includeObjects: '',
};

export const DataObjects = {
    $type: 'yandex.cloud.datatransfer.v1.DataObjects' as const,

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

messageTypeRegistry.set(DataObjects.$type, DataObjects);

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
