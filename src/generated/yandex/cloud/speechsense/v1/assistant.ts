/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.speechsense.v1';

export enum AssistantFieldType {
    ASSISTANT_FIELD_TYPE_UNSPECIFIED = 0,
    ASSISTANT_FIELD_TYPE_STRING = 1,
    ASSISTANT_FIELD_TYPE_NUMBER = 2,
    /** ASSISTANT_FIELD_TYPE_DECIMAL - Floating-point number */
    ASSISTANT_FIELD_TYPE_DECIMAL = 3,
    UNRECOGNIZED = -1,
}

export function assistantFieldTypeFromJSON(object: any): AssistantFieldType {
    switch (object) {
        case 0:
        case 'ASSISTANT_FIELD_TYPE_UNSPECIFIED':
            return AssistantFieldType.ASSISTANT_FIELD_TYPE_UNSPECIFIED;
        case 1:
        case 'ASSISTANT_FIELD_TYPE_STRING':
            return AssistantFieldType.ASSISTANT_FIELD_TYPE_STRING;
        case 2:
        case 'ASSISTANT_FIELD_TYPE_NUMBER':
            return AssistantFieldType.ASSISTANT_FIELD_TYPE_NUMBER;
        case 3:
        case 'ASSISTANT_FIELD_TYPE_DECIMAL':
            return AssistantFieldType.ASSISTANT_FIELD_TYPE_DECIMAL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AssistantFieldType.UNRECOGNIZED;
    }
}

export function assistantFieldTypeToJSON(object: AssistantFieldType): string {
    switch (object) {
        case AssistantFieldType.ASSISTANT_FIELD_TYPE_UNSPECIFIED:
            return 'ASSISTANT_FIELD_TYPE_UNSPECIFIED';
        case AssistantFieldType.ASSISTANT_FIELD_TYPE_STRING:
            return 'ASSISTANT_FIELD_TYPE_STRING';
        case AssistantFieldType.ASSISTANT_FIELD_TYPE_NUMBER:
            return 'ASSISTANT_FIELD_TYPE_NUMBER';
        case AssistantFieldType.ASSISTANT_FIELD_TYPE_DECIMAL:
            return 'ASSISTANT_FIELD_TYPE_DECIMAL';
        default:
            return 'UNKNOWN';
    }
}

export interface Assistant {
    /** Assistant id */
    id: string;
    /** Project id */
    projectId: string;
    /** Model id */
    modelId: string;
    /** Assistant name */
    name: string;
    /** Assistant description */
    description: string;
    /** Prompt */
    prompt: string;
    /** Fields that will be set after assistant processing */
    fields: AssistantField[];
    enabled: boolean;
    /** Billing labels */
    labels: { [key: string]: string };
    createdAt?: Date;
    /** Subject id */
    createdBy: string;
    modifiedAt?: Date;
    /** Subject id */
    modifiedBy: string;
}

export interface Assistant_LabelsEntry {
    key: string;
    value: string;
}

export interface AssistantField {
    /** Field id */
    id: string;
    /** Field name */
    name: string;
    /** Field description */
    description: string;
    /** Field type */
    type: AssistantFieldType;
}

export interface Model {
    /** Model id */
    id: string;
    /** Model name */
    name: string;
    /** Model description */
    description: string;
}

const baseAssistant: object = {
    id: '',
    projectId: '',
    modelId: '',
    name: '',
    description: '',
    prompt: '',
    enabled: false,
    createdBy: '',
    modifiedBy: '',
};

export const Assistant: {
    encode(message: Assistant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Assistant;
    fromJSON(object: any): Assistant;
    toJSON(message: Assistant): unknown;
    fromPartial<I extends Exact<DeepPartial<Assistant>, I>>(object: I): Assistant;
} = {
    encode(message: Assistant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.projectId !== '') {
            writer.uint32(18).string(message.projectId);
        }
        if (message.modelId !== '') {
            writer.uint32(26).string(message.modelId);
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        if (message.prompt !== '') {
            writer.uint32(50).string(message.prompt);
        }
        for (const v of message.fields) {
            AssistantField.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        if (message.enabled === true) {
            writer.uint32(64).bool(message.enabled);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Assistant_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(74).fork(),
            ).ldelim();
        });
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(82).fork()).ldelim();
        }
        if (message.createdBy !== '') {
            writer.uint32(90).string(message.createdBy);
        }
        if (message.modifiedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.modifiedAt), writer.uint32(98).fork()).ldelim();
        }
        if (message.modifiedBy !== '') {
            writer.uint32(106).string(message.modifiedBy);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Assistant {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAssistant } as Assistant;
        message.fields = [];
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.modelId = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.prompt = reader.string();
                    break;
                case 7:
                    message.fields.push(AssistantField.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.enabled = reader.bool();
                    break;
                case 9:
                    const entry9 = Assistant_LabelsEntry.decode(reader, reader.uint32());
                    if (entry9.value !== undefined) {
                        message.labels[entry9.key] = entry9.value;
                    }
                    break;
                case 10:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.createdBy = reader.string();
                    break;
                case 12:
                    message.modifiedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.modifiedBy = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Assistant {
        const message = { ...baseAssistant } as Assistant;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : '';
        message.modelId =
            object.modelId !== undefined && object.modelId !== null ? String(object.modelId) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.prompt =
            object.prompt !== undefined && object.prompt !== null ? String(object.prompt) : '';
        message.fields = (object.fields ?? []).map((e: any) => AssistantField.fromJSON(e));
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.createdBy =
            object.createdBy !== undefined && object.createdBy !== null
                ? String(object.createdBy)
                : '';
        message.modifiedAt =
            object.modifiedAt !== undefined && object.modifiedAt !== null
                ? fromJsonTimestamp(object.modifiedAt)
                : undefined;
        message.modifiedBy =
            object.modifiedBy !== undefined && object.modifiedBy !== null
                ? String(object.modifiedBy)
                : '';
        return message;
    },

    toJSON(message: Assistant): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.modelId !== undefined && (obj.modelId = message.modelId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.prompt !== undefined && (obj.prompt = message.prompt);
        if (message.fields) {
            obj.fields = message.fields.map((e) => (e ? AssistantField.toJSON(e) : undefined));
        } else {
            obj.fields = [];
        }
        message.enabled !== undefined && (obj.enabled = message.enabled);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        message.modifiedAt !== undefined && (obj.modifiedAt = message.modifiedAt.toISOString());
        message.modifiedBy !== undefined && (obj.modifiedBy = message.modifiedBy);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Assistant>, I>>(object: I): Assistant {
        const message = { ...baseAssistant } as Assistant;
        message.id = object.id ?? '';
        message.projectId = object.projectId ?? '';
        message.modelId = object.modelId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.prompt = object.prompt ?? '';
        message.fields = object.fields?.map((e) => AssistantField.fromPartial(e)) || [];
        message.enabled = object.enabled ?? false;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.createdAt = object.createdAt ?? undefined;
        message.createdBy = object.createdBy ?? '';
        message.modifiedAt = object.modifiedAt ?? undefined;
        message.modifiedBy = object.modifiedBy ?? '';
        return message;
    },
};

const baseAssistant_LabelsEntry: object = { key: '', value: '' };

export const Assistant_LabelsEntry: {
    encode(message: Assistant_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Assistant_LabelsEntry;
    fromJSON(object: any): Assistant_LabelsEntry;
    toJSON(message: Assistant_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<Assistant_LabelsEntry>, I>>(object: I): Assistant_LabelsEntry;
} = {
    encode(message: Assistant_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Assistant_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAssistant_LabelsEntry } as Assistant_LabelsEntry;
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

    fromJSON(object: any): Assistant_LabelsEntry {
        const message = { ...baseAssistant_LabelsEntry } as Assistant_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Assistant_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Assistant_LabelsEntry>, I>>(
        object: I,
    ): Assistant_LabelsEntry {
        const message = { ...baseAssistant_LabelsEntry } as Assistant_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseAssistantField: object = { id: '', name: '', description: '', type: 0 };

export const AssistantField: {
    encode(message: AssistantField, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssistantField;
    fromJSON(object: any): AssistantField;
    toJSON(message: AssistantField): unknown;
    fromPartial<I extends Exact<DeepPartial<AssistantField>, I>>(object: I): AssistantField;
} = {
    encode(message: AssistantField, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.type !== 0) {
            writer.uint32(32).int32(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AssistantField {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAssistantField } as AssistantField;
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
                    message.description = reader.string();
                    break;
                case 4:
                    message.type = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AssistantField {
        const message = { ...baseAssistantField } as AssistantField;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.type =
            object.type !== undefined && object.type !== null
                ? assistantFieldTypeFromJSON(object.type)
                : 0;
        return message;
    },

    toJSON(message: AssistantField): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.type !== undefined && (obj.type = assistantFieldTypeToJSON(message.type));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AssistantField>, I>>(object: I): AssistantField {
        const message = { ...baseAssistantField } as AssistantField;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.type = object.type ?? 0;
        return message;
    },
};

const baseModel: object = { id: '', name: '', description: '' };

export const Model: {
    encode(message: Model, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Model;
    fromJSON(object: any): Model;
    toJSON(message: Model): unknown;
    fromPartial<I extends Exact<DeepPartial<Model>, I>>(object: I): Model;
} = {
    encode(message: Model, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Model {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseModel } as Model;
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
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Model {
        const message = { ...baseModel } as Model;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        return message;
    },

    toJSON(message: Model): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Model>, I>>(object: I): Model {
        const message = { ...baseModel } as Model;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
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
