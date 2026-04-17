/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.datacatalog.v1';

export interface Catalog {
    /** Catalog identifier */
    id: string;
    /** Folder identifier */
    folderId: string;
    /** Catalog name */
    name: string;
    /** Catalog description */
    description: string;
    /** Catalog labels */
    labels: { [key: string]: string };
    /** Id of subject who created the catalog */
    createdBy: string;
    /** AI markup enabled flag */
    aiMarkupRules?: CatalogAIMarkupRules;
    /** Configuration for auto ingestion feature */
    autoIngestionParams?: CatalogAutoIngestionConfig;
    /** Date of catalog creation */
    createdAt?: Date;
    /** Date of catalog last update */
    updatedAt?: Date;
}

export interface Catalog_LabelsEntry {
    key: string;
    value: string;
}

export interface CatalogAIMarkupRules {
    /** If set to true, AI marking up of catalog entities will be enabled */
    aiEnabled: boolean;
    /** Rules for the AI agent, that will be used for assets mark up */
    documentationRules: string;
    /** Rules for the AI agent, that will be used for domains mark up */
    domainRules: string;
    /** Rules for the AI agent, that will be used for terms mark up */
    termsRules: string;
    /** Rules for the AI agent, that will be used for tags mark up */
    tagsRules: string;
}

export interface CatalogAutoIngestionConfig {
    /** ID of service account, which will be used for auto ingestion feature */
    serviceAccountId: string;
}

const baseCatalog: object = { id: '', folderId: '', name: '', description: '', createdBy: '' };

export const Catalog: {
    encode(message: Catalog, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Catalog;
    fromJSON(object: any): Catalog;
    toJSON(message: Catalog): unknown;
    fromPartial<I extends Exact<DeepPartial<Catalog>, I>>(object: I): Catalog;
} = {
    encode(message: Catalog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
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
        Object.entries(message.labels).forEach(([key, value]) => {
            Catalog_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        if (message.createdBy !== '') {
            writer.uint32(50).string(message.createdBy);
        }
        if (message.aiMarkupRules !== undefined) {
            CatalogAIMarkupRules.encode(message.aiMarkupRules, writer.uint32(58).fork()).ldelim();
        }
        if (message.autoIngestionParams !== undefined) {
            CatalogAutoIngestionConfig.encode(
                message.autoIngestionParams,
                writer.uint32(66).fork(),
            ).ldelim();
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(74).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Catalog {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCatalog } as Catalog;
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
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = Catalog_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.createdBy = reader.string();
                    break;
                case 7:
                    message.aiMarkupRules = CatalogAIMarkupRules.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.autoIngestionParams = CatalogAutoIngestionConfig.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 9:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Catalog {
        const message = { ...baseCatalog } as Catalog;
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
        message.createdBy =
            object.createdBy !== undefined && object.createdBy !== null
                ? String(object.createdBy)
                : '';
        message.aiMarkupRules =
            object.aiMarkupRules !== undefined && object.aiMarkupRules !== null
                ? CatalogAIMarkupRules.fromJSON(object.aiMarkupRules)
                : undefined;
        message.autoIngestionParams =
            object.autoIngestionParams !== undefined && object.autoIngestionParams !== null
                ? CatalogAutoIngestionConfig.fromJSON(object.autoIngestionParams)
                : undefined;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
                : undefined;
        return message;
    },

    toJSON(message: Catalog): unknown {
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
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        message.aiMarkupRules !== undefined &&
            (obj.aiMarkupRules = message.aiMarkupRules
                ? CatalogAIMarkupRules.toJSON(message.aiMarkupRules)
                : undefined);
        message.autoIngestionParams !== undefined &&
            (obj.autoIngestionParams = message.autoIngestionParams
                ? CatalogAutoIngestionConfig.toJSON(message.autoIngestionParams)
                : undefined);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Catalog>, I>>(object: I): Catalog {
        const message = { ...baseCatalog } as Catalog;
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
        message.createdBy = object.createdBy ?? '';
        message.aiMarkupRules =
            object.aiMarkupRules !== undefined && object.aiMarkupRules !== null
                ? CatalogAIMarkupRules.fromPartial(object.aiMarkupRules)
                : undefined;
        message.autoIngestionParams =
            object.autoIngestionParams !== undefined && object.autoIngestionParams !== null
                ? CatalogAutoIngestionConfig.fromPartial(object.autoIngestionParams)
                : undefined;
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        return message;
    },
};

const baseCatalog_LabelsEntry: object = { key: '', value: '' };

export const Catalog_LabelsEntry: {
    encode(message: Catalog_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Catalog_LabelsEntry;
    fromJSON(object: any): Catalog_LabelsEntry;
    toJSON(message: Catalog_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<Catalog_LabelsEntry>, I>>(object: I): Catalog_LabelsEntry;
} = {
    encode(message: Catalog_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Catalog_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCatalog_LabelsEntry } as Catalog_LabelsEntry;
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

    fromJSON(object: any): Catalog_LabelsEntry {
        const message = { ...baseCatalog_LabelsEntry } as Catalog_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Catalog_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Catalog_LabelsEntry>, I>>(
        object: I,
    ): Catalog_LabelsEntry {
        const message = { ...baseCatalog_LabelsEntry } as Catalog_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCatalogAIMarkupRules: object = {
    aiEnabled: false,
    documentationRules: '',
    domainRules: '',
    termsRules: '',
    tagsRules: '',
};

export const CatalogAIMarkupRules: {
    encode(message: CatalogAIMarkupRules, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CatalogAIMarkupRules;
    fromJSON(object: any): CatalogAIMarkupRules;
    toJSON(message: CatalogAIMarkupRules): unknown;
    fromPartial<I extends Exact<DeepPartial<CatalogAIMarkupRules>, I>>(object: I): CatalogAIMarkupRules;
} = {
    encode(message: CatalogAIMarkupRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.aiEnabled === true) {
            writer.uint32(8).bool(message.aiEnabled);
        }
        if (message.documentationRules !== '') {
            writer.uint32(18).string(message.documentationRules);
        }
        if (message.domainRules !== '') {
            writer.uint32(26).string(message.domainRules);
        }
        if (message.termsRules !== '') {
            writer.uint32(34).string(message.termsRules);
        }
        if (message.tagsRules !== '') {
            writer.uint32(42).string(message.tagsRules);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CatalogAIMarkupRules {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCatalogAIMarkupRules } as CatalogAIMarkupRules;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.aiEnabled = reader.bool();
                    break;
                case 2:
                    message.documentationRules = reader.string();
                    break;
                case 3:
                    message.domainRules = reader.string();
                    break;
                case 4:
                    message.termsRules = reader.string();
                    break;
                case 5:
                    message.tagsRules = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CatalogAIMarkupRules {
        const message = { ...baseCatalogAIMarkupRules } as CatalogAIMarkupRules;
        message.aiEnabled =
            object.aiEnabled !== undefined && object.aiEnabled !== null
                ? Boolean(object.aiEnabled)
                : false;
        message.documentationRules =
            object.documentationRules !== undefined && object.documentationRules !== null
                ? String(object.documentationRules)
                : '';
        message.domainRules =
            object.domainRules !== undefined && object.domainRules !== null
                ? String(object.domainRules)
                : '';
        message.termsRules =
            object.termsRules !== undefined && object.termsRules !== null
                ? String(object.termsRules)
                : '';
        message.tagsRules =
            object.tagsRules !== undefined && object.tagsRules !== null
                ? String(object.tagsRules)
                : '';
        return message;
    },

    toJSON(message: CatalogAIMarkupRules): unknown {
        const obj: any = {};
        message.aiEnabled !== undefined && (obj.aiEnabled = message.aiEnabled);
        message.documentationRules !== undefined &&
            (obj.documentationRules = message.documentationRules);
        message.domainRules !== undefined && (obj.domainRules = message.domainRules);
        message.termsRules !== undefined && (obj.termsRules = message.termsRules);
        message.tagsRules !== undefined && (obj.tagsRules = message.tagsRules);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CatalogAIMarkupRules>, I>>(
        object: I,
    ): CatalogAIMarkupRules {
        const message = { ...baseCatalogAIMarkupRules } as CatalogAIMarkupRules;
        message.aiEnabled = object.aiEnabled ?? false;
        message.documentationRules = object.documentationRules ?? '';
        message.domainRules = object.domainRules ?? '';
        message.termsRules = object.termsRules ?? '';
        message.tagsRules = object.tagsRules ?? '';
        return message;
    },
};

const baseCatalogAutoIngestionConfig: object = { serviceAccountId: '' };

export const CatalogAutoIngestionConfig: {
    encode(message: CatalogAutoIngestionConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CatalogAutoIngestionConfig;
    fromJSON(object: any): CatalogAutoIngestionConfig;
    toJSON(message: CatalogAutoIngestionConfig): unknown;
    fromPartial<I extends Exact<DeepPartial<CatalogAutoIngestionConfig>, I>>(object: I): CatalogAutoIngestionConfig;
} = {
    encode(
        message: CatalogAutoIngestionConfig,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.serviceAccountId !== '') {
            writer.uint32(154).string(message.serviceAccountId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CatalogAutoIngestionConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCatalogAutoIngestionConfig } as CatalogAutoIngestionConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 19:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CatalogAutoIngestionConfig {
        const message = { ...baseCatalogAutoIngestionConfig } as CatalogAutoIngestionConfig;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        return message;
    },

    toJSON(message: CatalogAutoIngestionConfig): unknown {
        const obj: any = {};
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CatalogAutoIngestionConfig>, I>>(
        object: I,
    ): CatalogAutoIngestionConfig {
        const message = { ...baseCatalogAutoIngestionConfig } as CatalogAutoIngestionConfig;
        message.serviceAccountId = object.serviceAccountId ?? '';
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
