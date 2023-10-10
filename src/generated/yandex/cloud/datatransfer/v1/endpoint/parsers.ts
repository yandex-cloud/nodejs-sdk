/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { DataSchema } from "../../../../../yandex/cloud/datatransfer/v1/endpoint/common";

export const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";

export interface Parser {
  $type: "yandex.cloud.datatransfer.v1.endpoint.Parser";
  jsonParser?: GenericParserCommon | undefined;
  auditTrailsV1Parser?: AuditTrailsV1Parser | undefined;
  cloudLoggingParser?: CloudLoggingParser | undefined;
  tskvParser?: GenericParserCommon | undefined;
}

export interface GenericParserCommon {
  $type: "yandex.cloud.datatransfer.v1.endpoint.GenericParserCommon";
  dataSchema?: DataSchema;
  /** Allow null keys, if no - null keys will be putted to unparsed data */
  nullKeysAllowed: boolean;
  /** Will add _rest column for all unknown fields */
  addRestColumn: boolean;
}

export interface AuditTrailsV1Parser {
  $type: "yandex.cloud.datatransfer.v1.endpoint.AuditTrailsV1Parser";
}

export interface CloudLoggingParser {
  $type: "yandex.cloud.datatransfer.v1.endpoint.CloudLoggingParser";
}

const baseParser: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.Parser",
};

export const Parser = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.Parser" as const,

  encode(
    message: Parser,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.jsonParser !== undefined) {
      GenericParserCommon.encode(
        message.jsonParser,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.auditTrailsV1Parser !== undefined) {
      AuditTrailsV1Parser.encode(
        message.auditTrailsV1Parser,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.cloudLoggingParser !== undefined) {
      CloudLoggingParser.encode(
        message.cloudLoggingParser,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.tskvParser !== undefined) {
      GenericParserCommon.encode(
        message.tskvParser,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Parser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParser } as Parser;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jsonParser = GenericParserCommon.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.auditTrailsV1Parser = AuditTrailsV1Parser.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.cloudLoggingParser = CloudLoggingParser.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.tskvParser = GenericParserCommon.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Parser {
    const message = { ...baseParser } as Parser;
    message.jsonParser =
      object.jsonParser !== undefined && object.jsonParser !== null
        ? GenericParserCommon.fromJSON(object.jsonParser)
        : undefined;
    message.auditTrailsV1Parser =
      object.auditTrailsV1Parser !== undefined &&
      object.auditTrailsV1Parser !== null
        ? AuditTrailsV1Parser.fromJSON(object.auditTrailsV1Parser)
        : undefined;
    message.cloudLoggingParser =
      object.cloudLoggingParser !== undefined &&
      object.cloudLoggingParser !== null
        ? CloudLoggingParser.fromJSON(object.cloudLoggingParser)
        : undefined;
    message.tskvParser =
      object.tskvParser !== undefined && object.tskvParser !== null
        ? GenericParserCommon.fromJSON(object.tskvParser)
        : undefined;
    return message;
  },

  toJSON(message: Parser): unknown {
    const obj: any = {};
    message.jsonParser !== undefined &&
      (obj.jsonParser = message.jsonParser
        ? GenericParserCommon.toJSON(message.jsonParser)
        : undefined);
    message.auditTrailsV1Parser !== undefined &&
      (obj.auditTrailsV1Parser = message.auditTrailsV1Parser
        ? AuditTrailsV1Parser.toJSON(message.auditTrailsV1Parser)
        : undefined);
    message.cloudLoggingParser !== undefined &&
      (obj.cloudLoggingParser = message.cloudLoggingParser
        ? CloudLoggingParser.toJSON(message.cloudLoggingParser)
        : undefined);
    message.tskvParser !== undefined &&
      (obj.tskvParser = message.tskvParser
        ? GenericParserCommon.toJSON(message.tskvParser)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Parser>, I>>(object: I): Parser {
    const message = { ...baseParser } as Parser;
    message.jsonParser =
      object.jsonParser !== undefined && object.jsonParser !== null
        ? GenericParserCommon.fromPartial(object.jsonParser)
        : undefined;
    message.auditTrailsV1Parser =
      object.auditTrailsV1Parser !== undefined &&
      object.auditTrailsV1Parser !== null
        ? AuditTrailsV1Parser.fromPartial(object.auditTrailsV1Parser)
        : undefined;
    message.cloudLoggingParser =
      object.cloudLoggingParser !== undefined &&
      object.cloudLoggingParser !== null
        ? CloudLoggingParser.fromPartial(object.cloudLoggingParser)
        : undefined;
    message.tskvParser =
      object.tskvParser !== undefined && object.tskvParser !== null
        ? GenericParserCommon.fromPartial(object.tskvParser)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Parser.$type, Parser);

const baseGenericParserCommon: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.GenericParserCommon",
  nullKeysAllowed: false,
  addRestColumn: false,
};

export const GenericParserCommon = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.GenericParserCommon" as const,

  encode(
    message: GenericParserCommon,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dataSchema !== undefined) {
      DataSchema.encode(message.dataSchema, writer.uint32(10).fork()).ldelim();
    }
    if (message.nullKeysAllowed === true) {
      writer.uint32(16).bool(message.nullKeysAllowed);
    }
    if (message.addRestColumn === true) {
      writer.uint32(24).bool(message.addRestColumn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenericParserCommon {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenericParserCommon } as GenericParserCommon;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dataSchema = DataSchema.decode(reader, reader.uint32());
          break;
        case 2:
          message.nullKeysAllowed = reader.bool();
          break;
        case 3:
          message.addRestColumn = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenericParserCommon {
    const message = { ...baseGenericParserCommon } as GenericParserCommon;
    message.dataSchema =
      object.dataSchema !== undefined && object.dataSchema !== null
        ? DataSchema.fromJSON(object.dataSchema)
        : undefined;
    message.nullKeysAllowed =
      object.nullKeysAllowed !== undefined && object.nullKeysAllowed !== null
        ? Boolean(object.nullKeysAllowed)
        : false;
    message.addRestColumn =
      object.addRestColumn !== undefined && object.addRestColumn !== null
        ? Boolean(object.addRestColumn)
        : false;
    return message;
  },

  toJSON(message: GenericParserCommon): unknown {
    const obj: any = {};
    message.dataSchema !== undefined &&
      (obj.dataSchema = message.dataSchema
        ? DataSchema.toJSON(message.dataSchema)
        : undefined);
    message.nullKeysAllowed !== undefined &&
      (obj.nullKeysAllowed = message.nullKeysAllowed);
    message.addRestColumn !== undefined &&
      (obj.addRestColumn = message.addRestColumn);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenericParserCommon>, I>>(
    object: I
  ): GenericParserCommon {
    const message = { ...baseGenericParserCommon } as GenericParserCommon;
    message.dataSchema =
      object.dataSchema !== undefined && object.dataSchema !== null
        ? DataSchema.fromPartial(object.dataSchema)
        : undefined;
    message.nullKeysAllowed = object.nullKeysAllowed ?? false;
    message.addRestColumn = object.addRestColumn ?? false;
    return message;
  },
};

messageTypeRegistry.set(GenericParserCommon.$type, GenericParserCommon);

const baseAuditTrailsV1Parser: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.AuditTrailsV1Parser",
};

export const AuditTrailsV1Parser = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.AuditTrailsV1Parser" as const,

  encode(
    _: AuditTrailsV1Parser,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuditTrailsV1Parser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAuditTrailsV1Parser } as AuditTrailsV1Parser;
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

  fromJSON(_: any): AuditTrailsV1Parser {
    const message = { ...baseAuditTrailsV1Parser } as AuditTrailsV1Parser;
    return message;
  },

  toJSON(_: AuditTrailsV1Parser): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuditTrailsV1Parser>, I>>(
    _: I
  ): AuditTrailsV1Parser {
    const message = { ...baseAuditTrailsV1Parser } as AuditTrailsV1Parser;
    return message;
  },
};

messageTypeRegistry.set(AuditTrailsV1Parser.$type, AuditTrailsV1Parser);

const baseCloudLoggingParser: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.CloudLoggingParser",
};

export const CloudLoggingParser = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.CloudLoggingParser" as const,

  encode(
    _: CloudLoggingParser,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CloudLoggingParser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCloudLoggingParser } as CloudLoggingParser;
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

  fromJSON(_: any): CloudLoggingParser {
    const message = { ...baseCloudLoggingParser } as CloudLoggingParser;
    return message;
  },

  toJSON(_: CloudLoggingParser): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CloudLoggingParser>, I>>(
    _: I
  ): CloudLoggingParser {
    const message = { ...baseCloudLoggingParser } as CloudLoggingParser;
    return message;
  },
};

messageTypeRegistry.set(CloudLoggingParser.$type, CloudLoggingParser);

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
