/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.speechsense.v1.analysis";

export enum SummarizationFieldType {
  SUMMARIZATION_FIELD_TYPE_UNSPECIFIED = 0,
  TEXT = 1,
  TEXT_ARRAY = 2,
  UNRECOGNIZED = -1,
}

export function summarizationFieldTypeFromJSON(
  object: any
): SummarizationFieldType {
  switch (object) {
    case 0:
    case "SUMMARIZATION_FIELD_TYPE_UNSPECIFIED":
      return SummarizationFieldType.SUMMARIZATION_FIELD_TYPE_UNSPECIFIED;
    case 1:
    case "TEXT":
      return SummarizationFieldType.TEXT;
    case 2:
    case "TEXT_ARRAY":
      return SummarizationFieldType.TEXT_ARRAY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SummarizationFieldType.UNRECOGNIZED;
  }
}

export function summarizationFieldTypeToJSON(
  object: SummarizationFieldType
): string {
  switch (object) {
    case SummarizationFieldType.SUMMARIZATION_FIELD_TYPE_UNSPECIFIED:
      return "SUMMARIZATION_FIELD_TYPE_UNSPECIFIED";
    case SummarizationFieldType.TEXT:
      return "TEXT";
    case SummarizationFieldType.TEXT_ARRAY:
      return "TEXT_ARRAY";
    default:
      return "UNKNOWN";
  }
}

export interface Summarization {
  $type: "yandex.cloud.speechsense.v1.analysis.Summarization";
  statements: SummarizationStatement[];
}

export interface SummarizationStatement {
  $type: "yandex.cloud.speechsense.v1.analysis.SummarizationStatement";
  field?: SummarizationField;
  response: string[];
}

export interface SummarizationField {
  $type: "yandex.cloud.speechsense.v1.analysis.SummarizationField";
  id: string;
  name: string;
  type: SummarizationFieldType;
}

const baseSummarization: object = {
  $type: "yandex.cloud.speechsense.v1.analysis.Summarization",
};

export const Summarization = {
  $type: "yandex.cloud.speechsense.v1.analysis.Summarization" as const,

  encode(
    message: Summarization,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.statements) {
      SummarizationStatement.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Summarization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSummarization } as Summarization;
    message.statements = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statements.push(
            SummarizationStatement.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Summarization {
    const message = { ...baseSummarization } as Summarization;
    message.statements = (object.statements ?? []).map((e: any) =>
      SummarizationStatement.fromJSON(e)
    );
    return message;
  },

  toJSON(message: Summarization): unknown {
    const obj: any = {};
    if (message.statements) {
      obj.statements = message.statements.map((e) =>
        e ? SummarizationStatement.toJSON(e) : undefined
      );
    } else {
      obj.statements = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Summarization>, I>>(
    object: I
  ): Summarization {
    const message = { ...baseSummarization } as Summarization;
    message.statements =
      object.statements?.map((e) => SummarizationStatement.fromPartial(e)) ||
      [];
    return message;
  },
};

messageTypeRegistry.set(Summarization.$type, Summarization);

const baseSummarizationStatement: object = {
  $type: "yandex.cloud.speechsense.v1.analysis.SummarizationStatement",
  response: "",
};

export const SummarizationStatement = {
  $type: "yandex.cloud.speechsense.v1.analysis.SummarizationStatement" as const,

  encode(
    message: SummarizationStatement,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.field !== undefined) {
      SummarizationField.encode(
        message.field,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.response) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SummarizationStatement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSummarizationStatement } as SummarizationStatement;
    message.response = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.field = SummarizationField.decode(reader, reader.uint32());
          break;
        case 2:
          message.response.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SummarizationStatement {
    const message = { ...baseSummarizationStatement } as SummarizationStatement;
    message.field =
      object.field !== undefined && object.field !== null
        ? SummarizationField.fromJSON(object.field)
        : undefined;
    message.response = (object.response ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: SummarizationStatement): unknown {
    const obj: any = {};
    message.field !== undefined &&
      (obj.field = message.field
        ? SummarizationField.toJSON(message.field)
        : undefined);
    if (message.response) {
      obj.response = message.response.map((e) => e);
    } else {
      obj.response = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SummarizationStatement>, I>>(
    object: I
  ): SummarizationStatement {
    const message = { ...baseSummarizationStatement } as SummarizationStatement;
    message.field =
      object.field !== undefined && object.field !== null
        ? SummarizationField.fromPartial(object.field)
        : undefined;
    message.response = object.response?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(SummarizationStatement.$type, SummarizationStatement);

const baseSummarizationField: object = {
  $type: "yandex.cloud.speechsense.v1.analysis.SummarizationField",
  id: "",
  name: "",
  type: 0,
};

export const SummarizationField = {
  $type: "yandex.cloud.speechsense.v1.analysis.SummarizationField" as const,

  encode(
    message: SummarizationField,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SummarizationField {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSummarizationField } as SummarizationField;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.id = reader.string();
          break;
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SummarizationField {
    const message = { ...baseSummarizationField } as SummarizationField;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.type =
      object.type !== undefined && object.type !== null
        ? summarizationFieldTypeFromJSON(object.type)
        : 0;
    return message;
  },

  toJSON(message: SummarizationField): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined &&
      (obj.type = summarizationFieldTypeToJSON(message.type));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SummarizationField>, I>>(
    object: I
  ): SummarizationField {
    const message = { ...baseSummarizationField } as SummarizationField;
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.type = object.type ?? 0;
    return message;
  },
};

messageTypeRegistry.set(SummarizationField.$type, SummarizationField);

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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
