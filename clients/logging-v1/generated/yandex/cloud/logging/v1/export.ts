/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import {
    LogLevel_Level,
    logLevel_LevelFromJSON,
    logLevel_LevelToJSON,
} from '../../../../yandex/cloud/logging/v1/log_entry';

export const protobufPackage = 'yandex.cloud.logging.v1';

export interface Export {
    $type: 'yandex.cloud.logging.v1.Export';
    /** Export ID. */
    id: string;
    /** Export folder ID. */
    folderId: string;
    /** Export cloud ID. */
    cloudId: string;
    /** Export creation time. */
    createdAt?: Date;
    /** Export name. */
    name: string;
    /** Export description. */
    description: string;
    /** Export lables. */
    labels: { [key: string]: string };
    /** Group logs are exported from. */
    groupId: string;
    /** Sink logs are exported to. */
    sinkId: string;
    /** Parameters of logs filtration. */
    params?: ExportParams;
}

export interface Export_LabelsEntry {
    $type: 'yandex.cloud.logging.v1.Export.LabelsEntry';
    key: string;
    value: string;
}

export interface ExportParams {
    $type: 'yandex.cloud.logging.v1.ExportParams';
    resourceTypes: string[];
    resourceIds: string[];
    streamNames: string[];
    levels: LogLevel_Level[];
    filter: string;
}

const baseExport: object = {
    $type: 'yandex.cloud.logging.v1.Export',
    id: '',
    folderId: '',
    cloudId: '',
    name: '',
    description: '',
    groupId: '',
    sinkId: '',
};

export const Export = {
    $type: 'yandex.cloud.logging.v1.Export' as const,

    encode(message: Export, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.cloudId !== '') {
            writer.uint32(26).string(message.cloudId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(42).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(50).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Export_LabelsEntry.encode(
                { $type: 'yandex.cloud.logging.v1.Export.LabelsEntry', key: key as any, value },
                writer.uint32(58).fork(),
            ).ldelim();
        });
        if (message.groupId !== '') {
            writer.uint32(66).string(message.groupId);
        }
        if (message.sinkId !== '') {
            writer.uint32(74).string(message.sinkId);
        }
        if (message.params !== undefined) {
            ExportParams.encode(message.params, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Export {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExport } as Export;
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
                case 3:
                    message.cloudId = reader.string();
                    break;
                case 4:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    const entry7 = Export_LabelsEntry.decode(reader, reader.uint32());
                    if (entry7.value !== undefined) {
                        message.labels[entry7.key] = entry7.value;
                    }
                    break;
                case 8:
                    message.groupId = reader.string();
                    break;
                case 9:
                    message.sinkId = reader.string();
                    break;
                case 10:
                    message.params = ExportParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Export {
        const message = { ...baseExport } as Export;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null ? String(object.cloudId) : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
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
        message.groupId =
            object.groupId !== undefined && object.groupId !== null ? String(object.groupId) : '';
        message.sinkId =
            object.sinkId !== undefined && object.sinkId !== null ? String(object.sinkId) : '';
        message.params =
            object.params !== undefined && object.params !== null
                ? ExportParams.fromJSON(object.params)
                : undefined;
        return message;
    },

    toJSON(message: Export): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.groupId !== undefined && (obj.groupId = message.groupId);
        message.sinkId !== undefined && (obj.sinkId = message.sinkId);
        message.params !== undefined &&
            (obj.params = message.params ? ExportParams.toJSON(message.params) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Export>, I>>(object: I): Export {
        const message = { ...baseExport } as Export;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.cloudId = object.cloudId ?? '';
        message.createdAt = object.createdAt ?? undefined;
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
        message.groupId = object.groupId ?? '';
        message.sinkId = object.sinkId ?? '';
        message.params =
            object.params !== undefined && object.params !== null
                ? ExportParams.fromPartial(object.params)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Export.$type, Export);

const baseExport_LabelsEntry: object = {
    $type: 'yandex.cloud.logging.v1.Export.LabelsEntry',
    key: '',
    value: '',
};

export const Export_LabelsEntry = {
    $type: 'yandex.cloud.logging.v1.Export.LabelsEntry' as const,

    encode(message: Export_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Export_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExport_LabelsEntry } as Export_LabelsEntry;
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

    fromJSON(object: any): Export_LabelsEntry {
        const message = { ...baseExport_LabelsEntry } as Export_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Export_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Export_LabelsEntry>, I>>(
        object: I,
    ): Export_LabelsEntry {
        const message = { ...baseExport_LabelsEntry } as Export_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(Export_LabelsEntry.$type, Export_LabelsEntry);

const baseExportParams: object = {
    $type: 'yandex.cloud.logging.v1.ExportParams',
    resourceTypes: '',
    resourceIds: '',
    streamNames: '',
    levels: 0,
    filter: '',
};

export const ExportParams = {
    $type: 'yandex.cloud.logging.v1.ExportParams' as const,

    encode(message: ExportParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.resourceTypes) {
            writer.uint32(10).string(v!);
        }
        for (const v of message.resourceIds) {
            writer.uint32(18).string(v!);
        }
        for (const v of message.streamNames) {
            writer.uint32(26).string(v!);
        }
        writer.uint32(34).fork();
        for (const v of message.levels) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.filter !== '') {
            writer.uint32(42).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExportParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExportParams } as ExportParams;
        message.resourceTypes = [];
        message.resourceIds = [];
        message.streamNames = [];
        message.levels = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceTypes.push(reader.string());
                    break;
                case 2:
                    message.resourceIds.push(reader.string());
                    break;
                case 3:
                    message.streamNames.push(reader.string());
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.levels.push(reader.int32() as any);
                        }
                    } else {
                        message.levels.push(reader.int32() as any);
                    }
                    break;
                case 5:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ExportParams {
        const message = { ...baseExportParams } as ExportParams;
        message.resourceTypes = (object.resourceTypes ?? []).map((e: any) => String(e));
        message.resourceIds = (object.resourceIds ?? []).map((e: any) => String(e));
        message.streamNames = (object.streamNames ?? []).map((e: any) => String(e));
        message.levels = (object.levels ?? []).map((e: any) => logLevel_LevelFromJSON(e));
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        return message;
    },

    toJSON(message: ExportParams): unknown {
        const obj: any = {};
        if (message.resourceTypes) {
            obj.resourceTypes = message.resourceTypes.map((e) => e);
        } else {
            obj.resourceTypes = [];
        }
        if (message.resourceIds) {
            obj.resourceIds = message.resourceIds.map((e) => e);
        } else {
            obj.resourceIds = [];
        }
        if (message.streamNames) {
            obj.streamNames = message.streamNames.map((e) => e);
        } else {
            obj.streamNames = [];
        }
        if (message.levels) {
            obj.levels = message.levels.map((e) => logLevel_LevelToJSON(e));
        } else {
            obj.levels = [];
        }
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExportParams>, I>>(object: I): ExportParams {
        const message = { ...baseExportParams } as ExportParams;
        message.resourceTypes = object.resourceTypes?.map((e) => e) || [];
        message.resourceIds = object.resourceIds?.map((e) => e) || [];
        message.streamNames = object.streamNames?.map((e) => e) || [];
        message.levels = object.levels?.map((e) => e) || [];
        message.filter = object.filter ?? '';
        return message;
    },
};

messageTypeRegistry.set(ExportParams.$type, ExportParams);

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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
