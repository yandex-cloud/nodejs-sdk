/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { UnitFormat, unitFormatFromJSON, unitFormatToJSON } from './unit_format';

export const protobufPackage = 'yandex.cloud.monitoring.v3';

/** Label values parameter. */
export interface LabelValuesParameter {
    /** Required. Folder ID. */
    folderId: string | undefined;
    /** Required. Selectors to select metric label values. */
    selectors: string;
    /** Required. Label key to list label values. */
    labelKey: string;
    /** Specifies the multiselectable values of parameter. */
    multiselectable: boolean;
    /** Default values. */
    defaultValues: string[];
}

/** Custom parameter. */
export interface CustomParameter {
    /** Required. List of parameter values. */
    values: string[];
    /** Specifies the multiselectable values of parameter. */
    multiselectable: boolean;
    /** Default values. */
    defaultValues: string[];
}

/** Text parameter. */
export interface TextParameter {
    /** Default value. */
    defaultValue: string;
}

/** Double parameter. */
export interface DoubleParameter {
    /** Default value. */
    defaultValue: number;
    /** Parameter unit. */
    unitFormat: UnitFormat;
}

/** Integer parameter. */
export interface IntegerParameter {
    /** Default value. */
    defaultValue: number;
    /** Parameter unit. */
    unitFormat: UnitFormat;
}

/** Text multiple values parameter. */
export interface TextValuesParameter {
    /** Default value. */
    defaultValues: string[];
}

/** Workspace parameter. */
export interface WorkspaceParameter {
    /** Required. Project ID. */
    projectId: string | undefined;
    /** Required. Folder ID. */
    folderId: string | undefined;
    /** Default value */
    defaultWorkspaceId: string;
}

/** User-defined query parameter. */
export interface QueryParameterCustomItem {
    /** User defined value */
    value: string;
    /** User defined key */
    key: string;
}

/** Regex to search and replace in label values. */
export interface RelabelItem {
    /** Search regex */
    find: string;
    /** Replace regex */
    replace: string;
}

/** Monitoring source for QueryParameter. */
export interface MonitoringQuerySource {
    /** Required. Project id. Support interpolation by another parameter value. */
    projectId: string;
    /** Required. Selectors to select metric label values. Support interpolation by another parameter value. */
    selectors: string;
    /** Required. Label which is used to search values. */
    labelKey: string;
}

/** Prometheus source for QueryParameter. */
export interface PrometheusQuerySource {
    /** Required. Selectors to select metric label values. Support interpolation by another parameter value. */
    match: string[];
    /** Required. Label which is used to search values. */
    labelKey: string;
    /** Required. Workspace id which is used for search. Support interpolation by another parameter value. */
    workspaceId: string;
}

/** Query parameter. */
export interface QueryParameter {
    /** Is parameter multiselectable. */
    multiselectable: boolean;
    /** Default value or comma-separated values */
    defaultValues: string[];
    /** List of user defined values */
    customItems: QueryParameterCustomItem[];
    /** List of regex for search and replace in label values. */
    relabelItems: RelabelItem[];
    /** Monitoring source for QueryParameter. */
    monitoring?: MonitoringQuerySource | undefined;
    /** Prometheus source for QueryParameter. */
    prometheus?: PrometheusQuerySource | undefined;
}

/** Parameter. */
export interface Parameter {
    /** Parameter identifier. */
    name: string;
    /** UI-visible title of the parameter. */
    title: string;
    /**
     * Label values parameter.
     *
     * @deprecated
     */
    labelValues?: LabelValuesParameter | undefined;
    /** Custom parameter. */
    custom?: CustomParameter | undefined;
    /** Text parameter. */
    text?: TextParameter | undefined;
    /** Integer parameter. */
    integerParameter?: IntegerParameter | undefined;
    /** Double parameter. */
    doubleParameter?: DoubleParameter | undefined;
    /** Integer parameter. */
    textValues?: TextValuesParameter | undefined;
    /** Workspace parameter */
    workspaceParameter?: WorkspaceParameter | undefined;
    /** Query parameter */
    query?: QueryParameter | undefined;
    /** UI-visibility. */
    hidden: boolean;
    /** Parameter description. */
    description: string;
    /**
     * Is parameter grouped.
     *
     * @deprecated
     */
    grouped: boolean;
}

/** Parametrization. */
export interface Parametrization {
    /** Parameters. */
    parameters: Parameter[];
    /**
     * Predefined selectors.
     *
     * @deprecated
     */
    selectors: string;
}

const baseLabelValuesParameter: object = {
    selectors: '',
    labelKey: '',
    multiselectable: false,
    defaultValues: '',
};

export const LabelValuesParameter: {
    encode(message: LabelValuesParameter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LabelValuesParameter;
    fromJSON(object: any): LabelValuesParameter;
    toJSON(message: LabelValuesParameter): unknown;
    fromPartial<I extends Exact<DeepPartial<LabelValuesParameter>, I>>(object: I): LabelValuesParameter;
} = {
    encode(message: LabelValuesParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== undefined) {
            writer.uint32(18).string(message.folderId);
        }
        if (message.selectors !== '') {
            writer.uint32(154).string(message.selectors);
        }
        if (message.labelKey !== '') {
            writer.uint32(162).string(message.labelKey);
        }
        if (message.multiselectable === true) {
            writer.uint32(168).bool(message.multiselectable);
        }
        for (const v of message.defaultValues) {
            writer.uint32(178).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LabelValuesParameter {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLabelValuesParameter } as LabelValuesParameter;
        message.defaultValues = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.folderId = reader.string();
                    break;
                case 19:
                    message.selectors = reader.string();
                    break;
                case 20:
                    message.labelKey = reader.string();
                    break;
                case 21:
                    message.multiselectable = reader.bool();
                    break;
                case 22:
                    message.defaultValues.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LabelValuesParameter {
        const message = { ...baseLabelValuesParameter } as LabelValuesParameter;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : undefined;
        message.selectors =
            object.selectors !== undefined && object.selectors !== null
                ? String(object.selectors)
                : '';
        message.labelKey =
            object.labelKey !== undefined && object.labelKey !== null
                ? String(object.labelKey)
                : '';
        message.multiselectable =
            object.multiselectable !== undefined && object.multiselectable !== null
                ? Boolean(object.multiselectable)
                : false;
        message.defaultValues = (object.defaultValues ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: LabelValuesParameter): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.selectors !== undefined && (obj.selectors = message.selectors);
        message.labelKey !== undefined && (obj.labelKey = message.labelKey);
        message.multiselectable !== undefined && (obj.multiselectable = message.multiselectable);
        if (message.defaultValues) {
            obj.defaultValues = message.defaultValues.map((e) => e);
        } else {
            obj.defaultValues = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LabelValuesParameter>, I>>(
        object: I,
    ): LabelValuesParameter {
        const message = { ...baseLabelValuesParameter } as LabelValuesParameter;
        message.folderId = object.folderId ?? undefined;
        message.selectors = object.selectors ?? '';
        message.labelKey = object.labelKey ?? '';
        message.multiselectable = object.multiselectable ?? false;
        message.defaultValues = object.defaultValues?.map((e) => e) || [];
        return message;
    },
};

const baseCustomParameter: object = { values: '', multiselectable: false, defaultValues: '' };

export const CustomParameter: {
    encode(message: CustomParameter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CustomParameter;
    fromJSON(object: any): CustomParameter;
    toJSON(message: CustomParameter): unknown;
    fromPartial<I extends Exact<DeepPartial<CustomParameter>, I>>(object: I): CustomParameter;
} = {
    encode(message: CustomParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.values) {
            writer.uint32(10).string(v!);
        }
        if (message.multiselectable === true) {
            writer.uint32(16).bool(message.multiselectable);
        }
        for (const v of message.defaultValues) {
            writer.uint32(26).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CustomParameter {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCustomParameter } as CustomParameter;
        message.values = [];
        message.defaultValues = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.values.push(reader.string());
                    break;
                case 2:
                    message.multiselectable = reader.bool();
                    break;
                case 3:
                    message.defaultValues.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CustomParameter {
        const message = { ...baseCustomParameter } as CustomParameter;
        message.values = (object.values ?? []).map((e: any) => String(e));
        message.multiselectable =
            object.multiselectable !== undefined && object.multiselectable !== null
                ? Boolean(object.multiselectable)
                : false;
        message.defaultValues = (object.defaultValues ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: CustomParameter): unknown {
        const obj: any = {};
        if (message.values) {
            obj.values = message.values.map((e) => e);
        } else {
            obj.values = [];
        }
        message.multiselectable !== undefined && (obj.multiselectable = message.multiselectable);
        if (message.defaultValues) {
            obj.defaultValues = message.defaultValues.map((e) => e);
        } else {
            obj.defaultValues = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CustomParameter>, I>>(object: I): CustomParameter {
        const message = { ...baseCustomParameter } as CustomParameter;
        message.values = object.values?.map((e) => e) || [];
        message.multiselectable = object.multiselectable ?? false;
        message.defaultValues = object.defaultValues?.map((e) => e) || [];
        return message;
    },
};

const baseTextParameter: object = { defaultValue: '' };

export const TextParameter: {
    encode(message: TextParameter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TextParameter;
    fromJSON(object: any): TextParameter;
    toJSON(message: TextParameter): unknown;
    fromPartial<I extends Exact<DeepPartial<TextParameter>, I>>(object: I): TextParameter;
} = {
    encode(message: TextParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.defaultValue !== '') {
            writer.uint32(10).string(message.defaultValue);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TextParameter {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTextParameter } as TextParameter;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TextParameter {
        const message = { ...baseTextParameter } as TextParameter;
        message.defaultValue =
            object.defaultValue !== undefined && object.defaultValue !== null
                ? String(object.defaultValue)
                : '';
        return message;
    },

    toJSON(message: TextParameter): unknown {
        const obj: any = {};
        message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextParameter>, I>>(object: I): TextParameter {
        const message = { ...baseTextParameter } as TextParameter;
        message.defaultValue = object.defaultValue ?? '';
        return message;
    },
};

const baseDoubleParameter: object = { defaultValue: 0, unitFormat: 0 };

export const DoubleParameter: {
    encode(message: DoubleParameter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DoubleParameter;
    fromJSON(object: any): DoubleParameter;
    toJSON(message: DoubleParameter): unknown;
    fromPartial<I extends Exact<DeepPartial<DoubleParameter>, I>>(object: I): DoubleParameter;
} = {
    encode(message: DoubleParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.defaultValue !== 0) {
            writer.uint32(9).double(message.defaultValue);
        }
        if (message.unitFormat !== 0) {
            writer.uint32(16).int32(message.unitFormat);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DoubleParameter {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDoubleParameter } as DoubleParameter;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultValue = reader.double();
                    break;
                case 2:
                    message.unitFormat = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DoubleParameter {
        const message = { ...baseDoubleParameter } as DoubleParameter;
        message.defaultValue =
            object.defaultValue !== undefined && object.defaultValue !== null
                ? Number(object.defaultValue)
                : 0;
        message.unitFormat =
            object.unitFormat !== undefined && object.unitFormat !== null
                ? unitFormatFromJSON(object.unitFormat)
                : 0;
        return message;
    },

    toJSON(message: DoubleParameter): unknown {
        const obj: any = {};
        message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
        message.unitFormat !== undefined && (obj.unitFormat = unitFormatToJSON(message.unitFormat));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DoubleParameter>, I>>(object: I): DoubleParameter {
        const message = { ...baseDoubleParameter } as DoubleParameter;
        message.defaultValue = object.defaultValue ?? 0;
        message.unitFormat = object.unitFormat ?? 0;
        return message;
    },
};

const baseIntegerParameter: object = { defaultValue: 0, unitFormat: 0 };

export const IntegerParameter: {
    encode(message: IntegerParameter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IntegerParameter;
    fromJSON(object: any): IntegerParameter;
    toJSON(message: IntegerParameter): unknown;
    fromPartial<I extends Exact<DeepPartial<IntegerParameter>, I>>(object: I): IntegerParameter;
} = {
    encode(message: IntegerParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.defaultValue !== 0) {
            writer.uint32(8).int64(message.defaultValue);
        }
        if (message.unitFormat !== 0) {
            writer.uint32(16).int32(message.unitFormat);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): IntegerParameter {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIntegerParameter } as IntegerParameter;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultValue = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.unitFormat = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): IntegerParameter {
        const message = { ...baseIntegerParameter } as IntegerParameter;
        message.defaultValue =
            object.defaultValue !== undefined && object.defaultValue !== null
                ? Number(object.defaultValue)
                : 0;
        message.unitFormat =
            object.unitFormat !== undefined && object.unitFormat !== null
                ? unitFormatFromJSON(object.unitFormat)
                : 0;
        return message;
    },

    toJSON(message: IntegerParameter): unknown {
        const obj: any = {};
        message.defaultValue !== undefined && (obj.defaultValue = Math.round(message.defaultValue));
        message.unitFormat !== undefined && (obj.unitFormat = unitFormatToJSON(message.unitFormat));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<IntegerParameter>, I>>(object: I): IntegerParameter {
        const message = { ...baseIntegerParameter } as IntegerParameter;
        message.defaultValue = object.defaultValue ?? 0;
        message.unitFormat = object.unitFormat ?? 0;
        return message;
    },
};

const baseTextValuesParameter: object = { defaultValues: '' };

export const TextValuesParameter: {
    encode(message: TextValuesParameter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TextValuesParameter;
    fromJSON(object: any): TextValuesParameter;
    toJSON(message: TextValuesParameter): unknown;
    fromPartial<I extends Exact<DeepPartial<TextValuesParameter>, I>>(object: I): TextValuesParameter;
} = {
    encode(message: TextValuesParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.defaultValues) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TextValuesParameter {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTextValuesParameter } as TextValuesParameter;
        message.defaultValues = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultValues.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TextValuesParameter {
        const message = { ...baseTextValuesParameter } as TextValuesParameter;
        message.defaultValues = (object.defaultValues ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: TextValuesParameter): unknown {
        const obj: any = {};
        if (message.defaultValues) {
            obj.defaultValues = message.defaultValues.map((e) => e);
        } else {
            obj.defaultValues = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextValuesParameter>, I>>(
        object: I,
    ): TextValuesParameter {
        const message = { ...baseTextValuesParameter } as TextValuesParameter;
        message.defaultValues = object.defaultValues?.map((e) => e) || [];
        return message;
    },
};

const baseWorkspaceParameter: object = { defaultWorkspaceId: '' };

export const WorkspaceParameter: {
    encode(message: WorkspaceParameter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WorkspaceParameter;
    fromJSON(object: any): WorkspaceParameter;
    toJSON(message: WorkspaceParameter): unknown;
    fromPartial<I extends Exact<DeepPartial<WorkspaceParameter>, I>>(object: I): WorkspaceParameter;
} = {
    encode(message: WorkspaceParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.projectId !== undefined) {
            writer.uint32(10).string(message.projectId);
        }
        if (message.folderId !== undefined) {
            writer.uint32(18).string(message.folderId);
        }
        if (message.defaultWorkspaceId !== '') {
            writer.uint32(26).string(message.defaultWorkspaceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WorkspaceParameter {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWorkspaceParameter } as WorkspaceParameter;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.defaultWorkspaceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WorkspaceParameter {
        const message = { ...baseWorkspaceParameter } as WorkspaceParameter;
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : undefined;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : undefined;
        message.defaultWorkspaceId =
            object.defaultWorkspaceId !== undefined && object.defaultWorkspaceId !== null
                ? String(object.defaultWorkspaceId)
                : '';
        return message;
    },

    toJSON(message: WorkspaceParameter): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.defaultWorkspaceId !== undefined &&
            (obj.defaultWorkspaceId = message.defaultWorkspaceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<WorkspaceParameter>, I>>(
        object: I,
    ): WorkspaceParameter {
        const message = { ...baseWorkspaceParameter } as WorkspaceParameter;
        message.projectId = object.projectId ?? undefined;
        message.folderId = object.folderId ?? undefined;
        message.defaultWorkspaceId = object.defaultWorkspaceId ?? '';
        return message;
    },
};

const baseQueryParameterCustomItem: object = { value: '', key: '' };

export const QueryParameterCustomItem: {
    encode(message: QueryParameterCustomItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParameterCustomItem;
    fromJSON(object: any): QueryParameterCustomItem;
    toJSON(message: QueryParameterCustomItem): unknown;
    fromPartial<I extends Exact<DeepPartial<QueryParameterCustomItem>, I>>(object: I): QueryParameterCustomItem;
} = {
    encode(
        message: QueryParameterCustomItem,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.value !== '') {
            writer.uint32(10).string(message.value);
        }
        if (message.key !== '') {
            writer.uint32(18).string(message.key);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParameterCustomItem {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParameterCustomItem } as QueryParameterCustomItem;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.string();
                    break;
                case 2:
                    message.key = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryParameterCustomItem {
        const message = { ...baseQueryParameterCustomItem } as QueryParameterCustomItem;
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        return message;
    },

    toJSON(message: QueryParameterCustomItem): unknown {
        const obj: any = {};
        message.value !== undefined && (obj.value = message.value);
        message.key !== undefined && (obj.key = message.key);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<QueryParameterCustomItem>, I>>(
        object: I,
    ): QueryParameterCustomItem {
        const message = { ...baseQueryParameterCustomItem } as QueryParameterCustomItem;
        message.value = object.value ?? '';
        message.key = object.key ?? '';
        return message;
    },
};

const baseRelabelItem: object = { find: '', replace: '' };

export const RelabelItem: {
    encode(message: RelabelItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RelabelItem;
    fromJSON(object: any): RelabelItem;
    toJSON(message: RelabelItem): unknown;
    fromPartial<I extends Exact<DeepPartial<RelabelItem>, I>>(object: I): RelabelItem;
} = {
    encode(message: RelabelItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.find !== '') {
            writer.uint32(10).string(message.find);
        }
        if (message.replace !== '') {
            writer.uint32(18).string(message.replace);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RelabelItem {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRelabelItem } as RelabelItem;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.find = reader.string();
                    break;
                case 2:
                    message.replace = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RelabelItem {
        const message = { ...baseRelabelItem } as RelabelItem;
        message.find = object.find !== undefined && object.find !== null ? String(object.find) : '';
        message.replace =
            object.replace !== undefined && object.replace !== null ? String(object.replace) : '';
        return message;
    },

    toJSON(message: RelabelItem): unknown {
        const obj: any = {};
        message.find !== undefined && (obj.find = message.find);
        message.replace !== undefined && (obj.replace = message.replace);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RelabelItem>, I>>(object: I): RelabelItem {
        const message = { ...baseRelabelItem } as RelabelItem;
        message.find = object.find ?? '';
        message.replace = object.replace ?? '';
        return message;
    },
};

const baseMonitoringQuerySource: object = { projectId: '', selectors: '', labelKey: '' };

export const MonitoringQuerySource: {
    encode(message: MonitoringQuerySource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MonitoringQuerySource;
    fromJSON(object: any): MonitoringQuerySource;
    toJSON(message: MonitoringQuerySource): unknown;
    fromPartial<I extends Exact<DeepPartial<MonitoringQuerySource>, I>>(object: I): MonitoringQuerySource;
} = {
    encode(message: MonitoringQuerySource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        if (message.selectors !== '') {
            writer.uint32(18).string(message.selectors);
        }
        if (message.labelKey !== '') {
            writer.uint32(26).string(message.labelKey);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MonitoringQuerySource {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMonitoringQuerySource } as MonitoringQuerySource;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.selectors = reader.string();
                    break;
                case 3:
                    message.labelKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MonitoringQuerySource {
        const message = { ...baseMonitoringQuerySource } as MonitoringQuerySource;
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : '';
        message.selectors =
            object.selectors !== undefined && object.selectors !== null
                ? String(object.selectors)
                : '';
        message.labelKey =
            object.labelKey !== undefined && object.labelKey !== null
                ? String(object.labelKey)
                : '';
        return message;
    },

    toJSON(message: MonitoringQuerySource): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.selectors !== undefined && (obj.selectors = message.selectors);
        message.labelKey !== undefined && (obj.labelKey = message.labelKey);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MonitoringQuerySource>, I>>(
        object: I,
    ): MonitoringQuerySource {
        const message = { ...baseMonitoringQuerySource } as MonitoringQuerySource;
        message.projectId = object.projectId ?? '';
        message.selectors = object.selectors ?? '';
        message.labelKey = object.labelKey ?? '';
        return message;
    },
};

const basePrometheusQuerySource: object = { match: '', labelKey: '', workspaceId: '' };

export const PrometheusQuerySource: {
    encode(message: PrometheusQuerySource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PrometheusQuerySource;
    fromJSON(object: any): PrometheusQuerySource;
    toJSON(message: PrometheusQuerySource): unknown;
    fromPartial<I extends Exact<DeepPartial<PrometheusQuerySource>, I>>(object: I): PrometheusQuerySource;
} = {
    encode(message: PrometheusQuerySource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.match) {
            writer.uint32(10).string(v!);
        }
        if (message.labelKey !== '') {
            writer.uint32(18).string(message.labelKey);
        }
        if (message.workspaceId !== '') {
            writer.uint32(26).string(message.workspaceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PrometheusQuerySource {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePrometheusQuerySource } as PrometheusQuerySource;
        message.match = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.match.push(reader.string());
                    break;
                case 2:
                    message.labelKey = reader.string();
                    break;
                case 3:
                    message.workspaceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PrometheusQuerySource {
        const message = { ...basePrometheusQuerySource } as PrometheusQuerySource;
        message.match = (object.match ?? []).map((e: any) => String(e));
        message.labelKey =
            object.labelKey !== undefined && object.labelKey !== null
                ? String(object.labelKey)
                : '';
        message.workspaceId =
            object.workspaceId !== undefined && object.workspaceId !== null
                ? String(object.workspaceId)
                : '';
        return message;
    },

    toJSON(message: PrometheusQuerySource): unknown {
        const obj: any = {};
        if (message.match) {
            obj.match = message.match.map((e) => e);
        } else {
            obj.match = [];
        }
        message.labelKey !== undefined && (obj.labelKey = message.labelKey);
        message.workspaceId !== undefined && (obj.workspaceId = message.workspaceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PrometheusQuerySource>, I>>(
        object: I,
    ): PrometheusQuerySource {
        const message = { ...basePrometheusQuerySource } as PrometheusQuerySource;
        message.match = object.match?.map((e) => e) || [];
        message.labelKey = object.labelKey ?? '';
        message.workspaceId = object.workspaceId ?? '';
        return message;
    },
};

const baseQueryParameter: object = { multiselectable: false, defaultValues: '' };

export const QueryParameter: {
    encode(message: QueryParameter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParameter;
    fromJSON(object: any): QueryParameter;
    toJSON(message: QueryParameter): unknown;
    fromPartial<I extends Exact<DeepPartial<QueryParameter>, I>>(object: I): QueryParameter;
} = {
    encode(message: QueryParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.multiselectable === true) {
            writer.uint32(8).bool(message.multiselectable);
        }
        for (const v of message.defaultValues) {
            writer.uint32(18).string(v!);
        }
        for (const v of message.customItems) {
            QueryParameterCustomItem.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.relabelItems) {
            RelabelItem.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        if (message.monitoring !== undefined) {
            MonitoringQuerySource.encode(message.monitoring, writer.uint32(42).fork()).ldelim();
        }
        if (message.prometheus !== undefined) {
            PrometheusQuerySource.encode(message.prometheus, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParameter {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParameter } as QueryParameter;
        message.defaultValues = [];
        message.customItems = [];
        message.relabelItems = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.multiselectable = reader.bool();
                    break;
                case 2:
                    message.defaultValues.push(reader.string());
                    break;
                case 3:
                    message.customItems.push(
                        QueryParameterCustomItem.decode(reader, reader.uint32()),
                    );
                    break;
                case 4:
                    message.relabelItems.push(RelabelItem.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.monitoring = MonitoringQuerySource.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.prometheus = PrometheusQuerySource.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryParameter {
        const message = { ...baseQueryParameter } as QueryParameter;
        message.multiselectable =
            object.multiselectable !== undefined && object.multiselectable !== null
                ? Boolean(object.multiselectable)
                : false;
        message.defaultValues = (object.defaultValues ?? []).map((e: any) => String(e));
        message.customItems = (object.customItems ?? []).map((e: any) =>
            QueryParameterCustomItem.fromJSON(e),
        );
        message.relabelItems = (object.relabelItems ?? []).map((e: any) => RelabelItem.fromJSON(e));
        message.monitoring =
            object.monitoring !== undefined && object.monitoring !== null
                ? MonitoringQuerySource.fromJSON(object.monitoring)
                : undefined;
        message.prometheus =
            object.prometheus !== undefined && object.prometheus !== null
                ? PrometheusQuerySource.fromJSON(object.prometheus)
                : undefined;
        return message;
    },

    toJSON(message: QueryParameter): unknown {
        const obj: any = {};
        message.multiselectable !== undefined && (obj.multiselectable = message.multiselectable);
        if (message.defaultValues) {
            obj.defaultValues = message.defaultValues.map((e) => e);
        } else {
            obj.defaultValues = [];
        }
        if (message.customItems) {
            obj.customItems = message.customItems.map((e) =>
                e ? QueryParameterCustomItem.toJSON(e) : undefined,
            );
        } else {
            obj.customItems = [];
        }
        if (message.relabelItems) {
            obj.relabelItems = message.relabelItems.map((e) =>
                e ? RelabelItem.toJSON(e) : undefined,
            );
        } else {
            obj.relabelItems = [];
        }
        message.monitoring !== undefined &&
            (obj.monitoring = message.monitoring
                ? MonitoringQuerySource.toJSON(message.monitoring)
                : undefined);
        message.prometheus !== undefined &&
            (obj.prometheus = message.prometheus
                ? PrometheusQuerySource.toJSON(message.prometheus)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<QueryParameter>, I>>(object: I): QueryParameter {
        const message = { ...baseQueryParameter } as QueryParameter;
        message.multiselectable = object.multiselectable ?? false;
        message.defaultValues = object.defaultValues?.map((e) => e) || [];
        message.customItems =
            object.customItems?.map((e) => QueryParameterCustomItem.fromPartial(e)) || [];
        message.relabelItems = object.relabelItems?.map((e) => RelabelItem.fromPartial(e)) || [];
        message.monitoring =
            object.monitoring !== undefined && object.monitoring !== null
                ? MonitoringQuerySource.fromPartial(object.monitoring)
                : undefined;
        message.prometheus =
            object.prometheus !== undefined && object.prometheus !== null
                ? PrometheusQuerySource.fromPartial(object.prometheus)
                : undefined;
        return message;
    },
};

const baseParameter: object = {
    name: '',
    title: '',
    hidden: false,
    description: '',
    grouped: false,
};

export const Parameter: {
    encode(message: Parameter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Parameter;
    fromJSON(object: any): Parameter;
    toJSON(message: Parameter): unknown;
    fromPartial<I extends Exact<DeepPartial<Parameter>, I>>(object: I): Parameter;
} = {
    encode(message: Parameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.title !== '') {
            writer.uint32(18).string(message.title);
        }
        if (message.labelValues !== undefined) {
            LabelValuesParameter.encode(message.labelValues, writer.uint32(26).fork()).ldelim();
        }
        if (message.custom !== undefined) {
            CustomParameter.encode(message.custom, writer.uint32(34).fork()).ldelim();
        }
        if (message.text !== undefined) {
            TextParameter.encode(message.text, writer.uint32(42).fork()).ldelim();
        }
        if (message.integerParameter !== undefined) {
            IntegerParameter.encode(message.integerParameter, writer.uint32(58).fork()).ldelim();
        }
        if (message.doubleParameter !== undefined) {
            DoubleParameter.encode(message.doubleParameter, writer.uint32(66).fork()).ldelim();
        }
        if (message.textValues !== undefined) {
            TextValuesParameter.encode(message.textValues, writer.uint32(74).fork()).ldelim();
        }
        if (message.workspaceParameter !== undefined) {
            WorkspaceParameter.encode(
                message.workspaceParameter,
                writer.uint32(122).fork(),
            ).ldelim();
        }
        if (message.query !== undefined) {
            QueryParameter.encode(message.query, writer.uint32(130).fork()).ldelim();
        }
        if (message.hidden === true) {
            writer.uint32(48).bool(message.hidden);
        }
        if (message.description !== '') {
            writer.uint32(82).string(message.description);
        }
        if (message.grouped === true) {
            writer.uint32(112).bool(message.grouped);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Parameter {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseParameter } as Parameter;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.labelValues = LabelValuesParameter.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.custom = CustomParameter.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.text = TextParameter.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.integerParameter = IntegerParameter.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.doubleParameter = DoubleParameter.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.textValues = TextValuesParameter.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.workspaceParameter = WorkspaceParameter.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.query = QueryParameter.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.hidden = reader.bool();
                    break;
                case 10:
                    message.description = reader.string();
                    break;
                case 14:
                    message.grouped = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Parameter {
        const message = { ...baseParameter } as Parameter;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.title =
            object.title !== undefined && object.title !== null ? String(object.title) : '';
        message.labelValues =
            object.labelValues !== undefined && object.labelValues !== null
                ? LabelValuesParameter.fromJSON(object.labelValues)
                : undefined;
        message.custom =
            object.custom !== undefined && object.custom !== null
                ? CustomParameter.fromJSON(object.custom)
                : undefined;
        message.text =
            object.text !== undefined && object.text !== null
                ? TextParameter.fromJSON(object.text)
                : undefined;
        message.integerParameter =
            object.integerParameter !== undefined && object.integerParameter !== null
                ? IntegerParameter.fromJSON(object.integerParameter)
                : undefined;
        message.doubleParameter =
            object.doubleParameter !== undefined && object.doubleParameter !== null
                ? DoubleParameter.fromJSON(object.doubleParameter)
                : undefined;
        message.textValues =
            object.textValues !== undefined && object.textValues !== null
                ? TextValuesParameter.fromJSON(object.textValues)
                : undefined;
        message.workspaceParameter =
            object.workspaceParameter !== undefined && object.workspaceParameter !== null
                ? WorkspaceParameter.fromJSON(object.workspaceParameter)
                : undefined;
        message.query =
            object.query !== undefined && object.query !== null
                ? QueryParameter.fromJSON(object.query)
                : undefined;
        message.hidden =
            object.hidden !== undefined && object.hidden !== null ? Boolean(object.hidden) : false;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.grouped =
            object.grouped !== undefined && object.grouped !== null
                ? Boolean(object.grouped)
                : false;
        return message;
    },

    toJSON(message: Parameter): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.title !== undefined && (obj.title = message.title);
        message.labelValues !== undefined &&
            (obj.labelValues = message.labelValues
                ? LabelValuesParameter.toJSON(message.labelValues)
                : undefined);
        message.custom !== undefined &&
            (obj.custom = message.custom ? CustomParameter.toJSON(message.custom) : undefined);
        message.text !== undefined &&
            (obj.text = message.text ? TextParameter.toJSON(message.text) : undefined);
        message.integerParameter !== undefined &&
            (obj.integerParameter = message.integerParameter
                ? IntegerParameter.toJSON(message.integerParameter)
                : undefined);
        message.doubleParameter !== undefined &&
            (obj.doubleParameter = message.doubleParameter
                ? DoubleParameter.toJSON(message.doubleParameter)
                : undefined);
        message.textValues !== undefined &&
            (obj.textValues = message.textValues
                ? TextValuesParameter.toJSON(message.textValues)
                : undefined);
        message.workspaceParameter !== undefined &&
            (obj.workspaceParameter = message.workspaceParameter
                ? WorkspaceParameter.toJSON(message.workspaceParameter)
                : undefined);
        message.query !== undefined &&
            (obj.query = message.query ? QueryParameter.toJSON(message.query) : undefined);
        message.hidden !== undefined && (obj.hidden = message.hidden);
        message.description !== undefined && (obj.description = message.description);
        message.grouped !== undefined && (obj.grouped = message.grouped);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Parameter>, I>>(object: I): Parameter {
        const message = { ...baseParameter } as Parameter;
        message.name = object.name ?? '';
        message.title = object.title ?? '';
        message.labelValues =
            object.labelValues !== undefined && object.labelValues !== null
                ? LabelValuesParameter.fromPartial(object.labelValues)
                : undefined;
        message.custom =
            object.custom !== undefined && object.custom !== null
                ? CustomParameter.fromPartial(object.custom)
                : undefined;
        message.text =
            object.text !== undefined && object.text !== null
                ? TextParameter.fromPartial(object.text)
                : undefined;
        message.integerParameter =
            object.integerParameter !== undefined && object.integerParameter !== null
                ? IntegerParameter.fromPartial(object.integerParameter)
                : undefined;
        message.doubleParameter =
            object.doubleParameter !== undefined && object.doubleParameter !== null
                ? DoubleParameter.fromPartial(object.doubleParameter)
                : undefined;
        message.textValues =
            object.textValues !== undefined && object.textValues !== null
                ? TextValuesParameter.fromPartial(object.textValues)
                : undefined;
        message.workspaceParameter =
            object.workspaceParameter !== undefined && object.workspaceParameter !== null
                ? WorkspaceParameter.fromPartial(object.workspaceParameter)
                : undefined;
        message.query =
            object.query !== undefined && object.query !== null
                ? QueryParameter.fromPartial(object.query)
                : undefined;
        message.hidden = object.hidden ?? false;
        message.description = object.description ?? '';
        message.grouped = object.grouped ?? false;
        return message;
    },
};

const baseParametrization: object = { selectors: '' };

export const Parametrization: {
    encode(message: Parametrization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Parametrization;
    fromJSON(object: any): Parametrization;
    toJSON(message: Parametrization): unknown;
    fromPartial<I extends Exact<DeepPartial<Parametrization>, I>>(object: I): Parametrization;
} = {
    encode(message: Parametrization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.parameters) {
            Parameter.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.selectors !== '') {
            writer.uint32(18).string(message.selectors);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Parametrization {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseParametrization } as Parametrization;
        message.parameters = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.parameters.push(Parameter.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.selectors = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Parametrization {
        const message = { ...baseParametrization } as Parametrization;
        message.parameters = (object.parameters ?? []).map((e: any) => Parameter.fromJSON(e));
        message.selectors =
            object.selectors !== undefined && object.selectors !== null
                ? String(object.selectors)
                : '';
        return message;
    },

    toJSON(message: Parametrization): unknown {
        const obj: any = {};
        if (message.parameters) {
            obj.parameters = message.parameters.map((e) => (e ? Parameter.toJSON(e) : undefined));
        } else {
            obj.parameters = [];
        }
        message.selectors !== undefined && (obj.selectors = message.selectors);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Parametrization>, I>>(object: I): Parametrization {
        const message = { ...baseParametrization } as Parametrization;
        message.parameters = object.parameters?.map((e) => Parameter.fromPartial(e)) || [];
        message.selectors = object.selectors ?? '';
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
