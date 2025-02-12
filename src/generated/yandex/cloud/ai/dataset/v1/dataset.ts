/* eslint-disable */
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.ai.dataset.v1';

/** Information about the dataset. */
export interface DatasetInfo {
    $type: 'yandex.cloud.ai.dataset.v1.DatasetInfo';
    /** ID of the dataset. */
    datasetId: string;
    /** Folder ID of the dataset. */
    folderId: string;
    /** Name of the dataset. */
    name: string;
    /** Description of the dataset. */
    description: string;
    /** Metadata of the dataset. */
    metadata: string;
    /** Status of the dataset. */
    status: DatasetInfo_Status;
    /** Task type of the dataset. */
    taskType: string;
    /** Create dataset timestamp. */
    createdAt?: Date;
    /** Update dataset timestamp. */
    updatedAt?: Date;
    /** Number of rows in the dataset. */
    rows: number;
    /** Size of the dataset. */
    sizeBytes: number;
    /**
     * Deprecated. Use created_by instead
     *
     * @deprecated
     */
    createdById: string;
    /** Labels of the dataset */
    labels: { [key: string]: string };
    /** User ID of the dataset's creator. */
    createdBy: string;
    /** User ID of the dataset's last updater. */
    updatedBy: string;
    validationError: ValidationError[];
    /** Allow to use the dataset to improve the models quality. Default false. */
    allowDataLog: boolean;
}

/** Status of the dataset. */
export enum DatasetInfo_Status {
    STATUS_UNSPECIFIED = 0,
    DRAFT = 1,
    VALIDATING = 2,
    READY = 3,
    INVALID = 4,
    DELETING = 5,
    UNRECOGNIZED = -1,
}

export function datasetInfo_StatusFromJSON(object: any): DatasetInfo_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return DatasetInfo_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'DRAFT':
            return DatasetInfo_Status.DRAFT;
        case 2:
        case 'VALIDATING':
            return DatasetInfo_Status.VALIDATING;
        case 3:
        case 'READY':
            return DatasetInfo_Status.READY;
        case 4:
        case 'INVALID':
            return DatasetInfo_Status.INVALID;
        case 5:
        case 'DELETING':
            return DatasetInfo_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return DatasetInfo_Status.UNRECOGNIZED;
    }
}

export function datasetInfo_StatusToJSON(object: DatasetInfo_Status): string {
    switch (object) {
        case DatasetInfo_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case DatasetInfo_Status.DRAFT:
            return 'DRAFT';
        case DatasetInfo_Status.VALIDATING:
            return 'VALIDATING';
        case DatasetInfo_Status.READY:
            return 'READY';
        case DatasetInfo_Status.INVALID:
            return 'INVALID';
        case DatasetInfo_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}

export interface DatasetInfo_LabelsEntry {
    $type: 'yandex.cloud.ai.dataset.v1.DatasetInfo.LabelsEntry';
    key: string;
    value: string;
}

/** Information about dataset validation error. */
export interface ValidationError {
    $type: 'yandex.cloud.ai.dataset.v1.ValidationError';
    /** Name of the validation error. */
    error: string;
    /** Description of the validation error. */
    errorDescription: string;
    /** Row numbers in which the error occurred. */
    rowNumbers: number[];
}

export interface DatasetUploadSchema {
    $type: 'yandex.cloud.ai.dataset.v1.DatasetUploadSchema';
    taskType: string;
    uploadFormat: string;
    schema: string;
}

export interface DatasetFileDownloadUrl {
    $type: 'yandex.cloud.ai.dataset.v1.DatasetFileDownloadUrl';
    key: string;
    url: string;
}

const baseDatasetInfo: object = {
    $type: 'yandex.cloud.ai.dataset.v1.DatasetInfo',
    datasetId: '',
    folderId: '',
    name: '',
    description: '',
    metadata: '',
    status: 0,
    taskType: '',
    rows: 0,
    sizeBytes: 0,
    createdById: '',
    createdBy: '',
    updatedBy: '',
    allowDataLog: false,
};

export const DatasetInfo = {
    $type: 'yandex.cloud.ai.dataset.v1.DatasetInfo' as const,

    encode(message: DatasetInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.datasetId !== '') {
            writer.uint32(10).string(message.datasetId);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.metadata !== '') {
            writer.uint32(42).string(message.metadata);
        }
        if (message.status !== 0) {
            writer.uint32(48).int32(message.status);
        }
        if (message.taskType !== '') {
            writer.uint32(58).string(message.taskType);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(66).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(74).fork()).ldelim();
        }
        if (message.rows !== 0) {
            writer.uint32(80).int64(message.rows);
        }
        if (message.sizeBytes !== 0) {
            writer.uint32(88).int64(message.sizeBytes);
        }
        if (message.createdById !== '') {
            writer.uint32(98).string(message.createdById);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            DatasetInfo_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.ai.dataset.v1.DatasetInfo.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(106).fork(),
            ).ldelim();
        });
        if (message.createdBy !== '') {
            writer.uint32(114).string(message.createdBy);
        }
        if (message.updatedBy !== '') {
            writer.uint32(122).string(message.updatedBy);
        }
        for (const v of message.validationError) {
            ValidationError.encode(v!, writer.uint32(170).fork()).ldelim();
        }
        if (message.allowDataLog === true) {
            writer.uint32(176).bool(message.allowDataLog);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DatasetInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDatasetInfo } as DatasetInfo;
        message.labels = {};
        message.validationError = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.datasetId = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.metadata = reader.string();
                    break;
                case 6:
                    message.status = reader.int32() as any;
                    break;
                case 7:
                    message.taskType = reader.string();
                    break;
                case 8:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.rows = longToNumber(reader.int64() as Long);
                    break;
                case 11:
                    message.sizeBytes = longToNumber(reader.int64() as Long);
                    break;
                case 12:
                    message.createdById = reader.string();
                    break;
                case 13:
                    const entry13 = DatasetInfo_LabelsEntry.decode(reader, reader.uint32());
                    if (entry13.value !== undefined) {
                        message.labels[entry13.key] = entry13.value;
                    }
                    break;
                case 14:
                    message.createdBy = reader.string();
                    break;
                case 15:
                    message.updatedBy = reader.string();
                    break;
                case 21:
                    message.validationError.push(ValidationError.decode(reader, reader.uint32()));
                    break;
                case 22:
                    message.allowDataLog = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DatasetInfo {
        const message = { ...baseDatasetInfo } as DatasetInfo;
        message.datasetId =
            object.datasetId !== undefined && object.datasetId !== null
                ? String(object.datasetId)
                : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? String(object.metadata)
                : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? datasetInfo_StatusFromJSON(object.status)
                : 0;
        message.taskType =
            object.taskType !== undefined && object.taskType !== null
                ? String(object.taskType)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
                : undefined;
        message.rows = object.rows !== undefined && object.rows !== null ? Number(object.rows) : 0;
        message.sizeBytes =
            object.sizeBytes !== undefined && object.sizeBytes !== null
                ? Number(object.sizeBytes)
                : 0;
        message.createdById =
            object.createdById !== undefined && object.createdById !== null
                ? String(object.createdById)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.createdBy =
            object.createdBy !== undefined && object.createdBy !== null
                ? String(object.createdBy)
                : '';
        message.updatedBy =
            object.updatedBy !== undefined && object.updatedBy !== null
                ? String(object.updatedBy)
                : '';
        message.validationError = (object.validationError ?? []).map((e: any) =>
            ValidationError.fromJSON(e),
        );
        message.allowDataLog =
            object.allowDataLog !== undefined && object.allowDataLog !== null
                ? Boolean(object.allowDataLog)
                : false;
        return message;
    },

    toJSON(message: DatasetInfo): unknown {
        const obj: any = {};
        message.datasetId !== undefined && (obj.datasetId = message.datasetId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.status !== undefined && (obj.status = datasetInfo_StatusToJSON(message.status));
        message.taskType !== undefined && (obj.taskType = message.taskType);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        message.rows !== undefined && (obj.rows = Math.round(message.rows));
        message.sizeBytes !== undefined && (obj.sizeBytes = Math.round(message.sizeBytes));
        message.createdById !== undefined && (obj.createdById = message.createdById);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        message.updatedBy !== undefined && (obj.updatedBy = message.updatedBy);
        if (message.validationError) {
            obj.validationError = message.validationError.map((e) =>
                e ? ValidationError.toJSON(e) : undefined,
            );
        } else {
            obj.validationError = [];
        }
        message.allowDataLog !== undefined && (obj.allowDataLog = message.allowDataLog);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DatasetInfo>, I>>(object: I): DatasetInfo {
        const message = { ...baseDatasetInfo } as DatasetInfo;
        message.datasetId = object.datasetId ?? '';
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.metadata = object.metadata ?? '';
        message.status = object.status ?? 0;
        message.taskType = object.taskType ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        message.rows = object.rows ?? 0;
        message.sizeBytes = object.sizeBytes ?? 0;
        message.createdById = object.createdById ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.createdBy = object.createdBy ?? '';
        message.updatedBy = object.updatedBy ?? '';
        message.validationError =
            object.validationError?.map((e) => ValidationError.fromPartial(e)) || [];
        message.allowDataLog = object.allowDataLog ?? false;
        return message;
    },
};

messageTypeRegistry.set(DatasetInfo.$type, DatasetInfo);

const baseDatasetInfo_LabelsEntry: object = {
    $type: 'yandex.cloud.ai.dataset.v1.DatasetInfo.LabelsEntry',
    key: '',
    value: '',
};

export const DatasetInfo_LabelsEntry = {
    $type: 'yandex.cloud.ai.dataset.v1.DatasetInfo.LabelsEntry' as const,

    encode(message: DatasetInfo_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DatasetInfo_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDatasetInfo_LabelsEntry } as DatasetInfo_LabelsEntry;
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

    fromJSON(object: any): DatasetInfo_LabelsEntry {
        const message = { ...baseDatasetInfo_LabelsEntry } as DatasetInfo_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: DatasetInfo_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DatasetInfo_LabelsEntry>, I>>(
        object: I,
    ): DatasetInfo_LabelsEntry {
        const message = { ...baseDatasetInfo_LabelsEntry } as DatasetInfo_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(DatasetInfo_LabelsEntry.$type, DatasetInfo_LabelsEntry);

const baseValidationError: object = {
    $type: 'yandex.cloud.ai.dataset.v1.ValidationError',
    error: '',
    errorDescription: '',
    rowNumbers: 0,
};

export const ValidationError = {
    $type: 'yandex.cloud.ai.dataset.v1.ValidationError' as const,

    encode(message: ValidationError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.error !== '') {
            writer.uint32(10).string(message.error);
        }
        if (message.errorDescription !== '') {
            writer.uint32(18).string(message.errorDescription);
        }
        writer.uint32(26).fork();
        for (const v of message.rowNumbers) {
            writer.int64(v);
        }
        writer.ldelim();
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ValidationError {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseValidationError } as ValidationError;
        message.rowNumbers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.error = reader.string();
                    break;
                case 2:
                    message.errorDescription = reader.string();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.rowNumbers.push(longToNumber(reader.int64() as Long));
                        }
                    } else {
                        message.rowNumbers.push(longToNumber(reader.int64() as Long));
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ValidationError {
        const message = { ...baseValidationError } as ValidationError;
        message.error =
            object.error !== undefined && object.error !== null ? String(object.error) : '';
        message.errorDescription =
            object.errorDescription !== undefined && object.errorDescription !== null
                ? String(object.errorDescription)
                : '';
        message.rowNumbers = (object.rowNumbers ?? []).map((e: any) => Number(e));
        return message;
    },

    toJSON(message: ValidationError): unknown {
        const obj: any = {};
        message.error !== undefined && (obj.error = message.error);
        message.errorDescription !== undefined && (obj.errorDescription = message.errorDescription);
        if (message.rowNumbers) {
            obj.rowNumbers = message.rowNumbers.map((e) => Math.round(e));
        } else {
            obj.rowNumbers = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ValidationError>, I>>(object: I): ValidationError {
        const message = { ...baseValidationError } as ValidationError;
        message.error = object.error ?? '';
        message.errorDescription = object.errorDescription ?? '';
        message.rowNumbers = object.rowNumbers?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(ValidationError.$type, ValidationError);

const baseDatasetUploadSchema: object = {
    $type: 'yandex.cloud.ai.dataset.v1.DatasetUploadSchema',
    taskType: '',
    uploadFormat: '',
    schema: '',
};

export const DatasetUploadSchema = {
    $type: 'yandex.cloud.ai.dataset.v1.DatasetUploadSchema' as const,

    encode(message: DatasetUploadSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.taskType !== '') {
            writer.uint32(10).string(message.taskType);
        }
        if (message.uploadFormat !== '') {
            writer.uint32(18).string(message.uploadFormat);
        }
        if (message.schema !== '') {
            writer.uint32(26).string(message.schema);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DatasetUploadSchema {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDatasetUploadSchema } as DatasetUploadSchema;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taskType = reader.string();
                    break;
                case 2:
                    message.uploadFormat = reader.string();
                    break;
                case 3:
                    message.schema = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DatasetUploadSchema {
        const message = { ...baseDatasetUploadSchema } as DatasetUploadSchema;
        message.taskType =
            object.taskType !== undefined && object.taskType !== null
                ? String(object.taskType)
                : '';
        message.uploadFormat =
            object.uploadFormat !== undefined && object.uploadFormat !== null
                ? String(object.uploadFormat)
                : '';
        message.schema =
            object.schema !== undefined && object.schema !== null ? String(object.schema) : '';
        return message;
    },

    toJSON(message: DatasetUploadSchema): unknown {
        const obj: any = {};
        message.taskType !== undefined && (obj.taskType = message.taskType);
        message.uploadFormat !== undefined && (obj.uploadFormat = message.uploadFormat);
        message.schema !== undefined && (obj.schema = message.schema);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DatasetUploadSchema>, I>>(
        object: I,
    ): DatasetUploadSchema {
        const message = { ...baseDatasetUploadSchema } as DatasetUploadSchema;
        message.taskType = object.taskType ?? '';
        message.uploadFormat = object.uploadFormat ?? '';
        message.schema = object.schema ?? '';
        return message;
    },
};

messageTypeRegistry.set(DatasetUploadSchema.$type, DatasetUploadSchema);

const baseDatasetFileDownloadUrl: object = {
    $type: 'yandex.cloud.ai.dataset.v1.DatasetFileDownloadUrl',
    key: '',
    url: '',
};

export const DatasetFileDownloadUrl = {
    $type: 'yandex.cloud.ai.dataset.v1.DatasetFileDownloadUrl' as const,

    encode(message: DatasetFileDownloadUrl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.url !== '') {
            writer.uint32(18).string(message.url);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DatasetFileDownloadUrl {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDatasetFileDownloadUrl } as DatasetFileDownloadUrl;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DatasetFileDownloadUrl {
        const message = { ...baseDatasetFileDownloadUrl } as DatasetFileDownloadUrl;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.url = object.url !== undefined && object.url !== null ? String(object.url) : '';
        return message;
    },

    toJSON(message: DatasetFileDownloadUrl): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DatasetFileDownloadUrl>, I>>(
        object: I,
    ): DatasetFileDownloadUrl {
        const message = { ...baseDatasetFileDownloadUrl } as DatasetFileDownloadUrl;
        message.key = object.key ?? '';
        message.url = object.url ?? '';
        return message;
    },
};

messageTypeRegistry.set(DatasetFileDownloadUrl.$type, DatasetFileDownloadUrl);

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

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
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
