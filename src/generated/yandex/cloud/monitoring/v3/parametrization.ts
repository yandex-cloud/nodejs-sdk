/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  UnitFormat,
  unitFormatFromJSON,
  unitFormatToJSON,
} from "../../../../yandex/cloud/monitoring/v3/unit_format";

export const protobufPackage = "yandex.cloud.monitoring.v3";

/** Label values parameter. */
export interface LabelValuesParameter {
  $type: "yandex.cloud.monitoring.v3.LabelValuesParameter";
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
  $type: "yandex.cloud.monitoring.v3.CustomParameter";
  /** Required. List of parameter values. */
  values: string[];
  /** Specifies the multiselectable values of parameter. */
  multiselectable: boolean;
  /** Default values. */
  defaultValues: string[];
}

/** Text parameter. */
export interface TextParameter {
  $type: "yandex.cloud.monitoring.v3.TextParameter";
  /** Default value. */
  defaultValue: string;
}

/** Double parameter. */
export interface DoubleParameter {
  $type: "yandex.cloud.monitoring.v3.DoubleParameter";
  /** Default value. */
  defaultValue: number;
  /** Parameter unit. */
  unitFormat: UnitFormat;
}

/** Integer parameter. */
export interface IntegerParameter {
  $type: "yandex.cloud.monitoring.v3.IntegerParameter";
  /** Default value. */
  defaultValue: number;
  /** Parameter unit. */
  unitFormat: UnitFormat;
}

/** Text multiple values parameter. */
export interface TextValuesParameter {
  $type: "yandex.cloud.monitoring.v3.TextValuesParameter";
  /** Default value. */
  defaultValues: string[];
}

/** Parameter. */
export interface Parameter {
  $type: "yandex.cloud.monitoring.v3.Parameter";
  /** Parameter identifier. */
  name: string;
  /** UI-visible title of the parameter. */
  title: string;
  /** Label values parameter. */
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
  /** UI-visibility. */
  hidden: boolean;
  /** Parameter description. */
  description: string;
}

/** Parametrization. */
export interface Parametrization {
  $type: "yandex.cloud.monitoring.v3.Parametrization";
  /** Parameters. */
  parameters: Parameter[];
  /** Predefined selectors. */
  selectors: string;
}

const baseLabelValuesParameter: object = {
  $type: "yandex.cloud.monitoring.v3.LabelValuesParameter",
  selectors: "",
  labelKey: "",
  multiselectable: false,
  defaultValues: "",
};

export const LabelValuesParameter = {
  $type: "yandex.cloud.monitoring.v3.LabelValuesParameter" as const,

  encode(
    message: LabelValuesParameter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== undefined) {
      writer.uint32(18).string(message.folderId);
    }
    if (message.selectors !== "") {
      writer.uint32(154).string(message.selectors);
    }
    if (message.labelKey !== "") {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LabelValuesParameter {
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
        : "";
    message.labelKey =
      object.labelKey !== undefined && object.labelKey !== null
        ? String(object.labelKey)
        : "";
    message.multiselectable =
      object.multiselectable !== undefined && object.multiselectable !== null
        ? Boolean(object.multiselectable)
        : false;
    message.defaultValues = (object.defaultValues ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: LabelValuesParameter): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.selectors !== undefined && (obj.selectors = message.selectors);
    message.labelKey !== undefined && (obj.labelKey = message.labelKey);
    message.multiselectable !== undefined &&
      (obj.multiselectable = message.multiselectable);
    if (message.defaultValues) {
      obj.defaultValues = message.defaultValues.map((e) => e);
    } else {
      obj.defaultValues = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LabelValuesParameter>, I>>(
    object: I
  ): LabelValuesParameter {
    const message = { ...baseLabelValuesParameter } as LabelValuesParameter;
    message.folderId = object.folderId ?? undefined;
    message.selectors = object.selectors ?? "";
    message.labelKey = object.labelKey ?? "";
    message.multiselectable = object.multiselectable ?? false;
    message.defaultValues = object.defaultValues?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(LabelValuesParameter.$type, LabelValuesParameter);

const baseCustomParameter: object = {
  $type: "yandex.cloud.monitoring.v3.CustomParameter",
  values: "",
  multiselectable: false,
  defaultValues: "",
};

export const CustomParameter = {
  $type: "yandex.cloud.monitoring.v3.CustomParameter" as const,

  encode(
    message: CustomParameter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    message.defaultValues = (object.defaultValues ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: CustomParameter): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) => e);
    } else {
      obj.values = [];
    }
    message.multiselectable !== undefined &&
      (obj.multiselectable = message.multiselectable);
    if (message.defaultValues) {
      obj.defaultValues = message.defaultValues.map((e) => e);
    } else {
      obj.defaultValues = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CustomParameter>, I>>(
    object: I
  ): CustomParameter {
    const message = { ...baseCustomParameter } as CustomParameter;
    message.values = object.values?.map((e) => e) || [];
    message.multiselectable = object.multiselectable ?? false;
    message.defaultValues = object.defaultValues?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(CustomParameter.$type, CustomParameter);

const baseTextParameter: object = {
  $type: "yandex.cloud.monitoring.v3.TextParameter",
  defaultValue: "",
};

export const TextParameter = {
  $type: "yandex.cloud.monitoring.v3.TextParameter" as const,

  encode(
    message: TextParameter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.defaultValue !== "") {
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
        : "";
    return message;
  },

  toJSON(message: TextParameter): unknown {
    const obj: any = {};
    message.defaultValue !== undefined &&
      (obj.defaultValue = message.defaultValue);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TextParameter>, I>>(
    object: I
  ): TextParameter {
    const message = { ...baseTextParameter } as TextParameter;
    message.defaultValue = object.defaultValue ?? "";
    return message;
  },
};

messageTypeRegistry.set(TextParameter.$type, TextParameter);

const baseDoubleParameter: object = {
  $type: "yandex.cloud.monitoring.v3.DoubleParameter",
  defaultValue: 0,
  unitFormat: 0,
};

export const DoubleParameter = {
  $type: "yandex.cloud.monitoring.v3.DoubleParameter" as const,

  encode(
    message: DoubleParameter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    message.defaultValue !== undefined &&
      (obj.defaultValue = message.defaultValue);
    message.unitFormat !== undefined &&
      (obj.unitFormat = unitFormatToJSON(message.unitFormat));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DoubleParameter>, I>>(
    object: I
  ): DoubleParameter {
    const message = { ...baseDoubleParameter } as DoubleParameter;
    message.defaultValue = object.defaultValue ?? 0;
    message.unitFormat = object.unitFormat ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DoubleParameter.$type, DoubleParameter);

const baseIntegerParameter: object = {
  $type: "yandex.cloud.monitoring.v3.IntegerParameter",
  defaultValue: 0,
  unitFormat: 0,
};

export const IntegerParameter = {
  $type: "yandex.cloud.monitoring.v3.IntegerParameter" as const,

  encode(
    message: IntegerParameter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    message.defaultValue !== undefined &&
      (obj.defaultValue = Math.round(message.defaultValue));
    message.unitFormat !== undefined &&
      (obj.unitFormat = unitFormatToJSON(message.unitFormat));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IntegerParameter>, I>>(
    object: I
  ): IntegerParameter {
    const message = { ...baseIntegerParameter } as IntegerParameter;
    message.defaultValue = object.defaultValue ?? 0;
    message.unitFormat = object.unitFormat ?? 0;
    return message;
  },
};

messageTypeRegistry.set(IntegerParameter.$type, IntegerParameter);

const baseTextValuesParameter: object = {
  $type: "yandex.cloud.monitoring.v3.TextValuesParameter",
  defaultValues: "",
};

export const TextValuesParameter = {
  $type: "yandex.cloud.monitoring.v3.TextValuesParameter" as const,

  encode(
    message: TextValuesParameter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    message.defaultValues = (object.defaultValues ?? []).map((e: any) =>
      String(e)
    );
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
    object: I
  ): TextValuesParameter {
    const message = { ...baseTextValuesParameter } as TextValuesParameter;
    message.defaultValues = object.defaultValues?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(TextValuesParameter.$type, TextValuesParameter);

const baseParameter: object = {
  $type: "yandex.cloud.monitoring.v3.Parameter",
  name: "",
  title: "",
  hidden: false,
  description: "",
};

export const Parameter = {
  $type: "yandex.cloud.monitoring.v3.Parameter" as const,

  encode(
    message: Parameter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.labelValues !== undefined) {
      LabelValuesParameter.encode(
        message.labelValues,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.custom !== undefined) {
      CustomParameter.encode(message.custom, writer.uint32(34).fork()).ldelim();
    }
    if (message.text !== undefined) {
      TextParameter.encode(message.text, writer.uint32(42).fork()).ldelim();
    }
    if (message.integerParameter !== undefined) {
      IntegerParameter.encode(
        message.integerParameter,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.doubleParameter !== undefined) {
      DoubleParameter.encode(
        message.doubleParameter,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.textValues !== undefined) {
      TextValuesParameter.encode(
        message.textValues,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.hidden === true) {
      writer.uint32(48).bool(message.hidden);
    }
    if (message.description !== "") {
      writer.uint32(82).string(message.description);
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
          message.labelValues = LabelValuesParameter.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.custom = CustomParameter.decode(reader, reader.uint32());
          break;
        case 5:
          message.text = TextParameter.decode(reader, reader.uint32());
          break;
        case 7:
          message.integerParameter = IntegerParameter.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.doubleParameter = DoubleParameter.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.textValues = TextValuesParameter.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.hidden = reader.bool();
          break;
        case 10:
          message.description = reader.string();
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
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
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
    message.hidden =
      object.hidden !== undefined && object.hidden !== null
        ? Boolean(object.hidden)
        : false;
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
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
      (obj.custom = message.custom
        ? CustomParameter.toJSON(message.custom)
        : undefined);
    message.text !== undefined &&
      (obj.text = message.text
        ? TextParameter.toJSON(message.text)
        : undefined);
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
    message.hidden !== undefined && (obj.hidden = message.hidden);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Parameter>, I>>(
    object: I
  ): Parameter {
    const message = { ...baseParameter } as Parameter;
    message.name = object.name ?? "";
    message.title = object.title ?? "";
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
    message.hidden = object.hidden ?? false;
    message.description = object.description ?? "";
    return message;
  },
};

messageTypeRegistry.set(Parameter.$type, Parameter);

const baseParametrization: object = {
  $type: "yandex.cloud.monitoring.v3.Parametrization",
  selectors: "",
};

export const Parametrization = {
  $type: "yandex.cloud.monitoring.v3.Parametrization" as const,

  encode(
    message: Parametrization,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.parameters) {
      Parameter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.selectors !== "") {
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
    message.parameters = (object.parameters ?? []).map((e: any) =>
      Parameter.fromJSON(e)
    );
    message.selectors =
      object.selectors !== undefined && object.selectors !== null
        ? String(object.selectors)
        : "";
    return message;
  },

  toJSON(message: Parametrization): unknown {
    const obj: any = {};
    if (message.parameters) {
      obj.parameters = message.parameters.map((e) =>
        e ? Parameter.toJSON(e) : undefined
      );
    } else {
      obj.parameters = [];
    }
    message.selectors !== undefined && (obj.selectors = message.selectors);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Parametrization>, I>>(
    object: I
  ): Parametrization {
    const message = { ...baseParametrization } as Parametrization;
    message.parameters =
      object.parameters?.map((e) => Parameter.fromPartial(e)) || [];
    message.selectors = object.selectors ?? "";
    return message;
  },
};

messageTypeRegistry.set(Parametrization.$type, Parametrization);

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P> | "$type">,
        never
      >;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
