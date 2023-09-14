/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";

export interface SerializerAuto {
  $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerAuto";
}

export interface SerializerJSON {
  $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerJSON";
}

export interface DebeziumSerializerParameter {
  $type: "yandex.cloud.datatransfer.v1.endpoint.DebeziumSerializerParameter";
  /** Name of the serializer parameter */
  key: string;
  /** Value of the serializer parameter */
  value: string;
}

export interface SerializerDebezium {
  $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerDebezium";
  /** Settings of sterilization parameters as key-value pairs */
  serializerParameters: DebeziumSerializerParameter[];
}

/** Data serialization format */
export interface Serializer {
  $type: "yandex.cloud.datatransfer.v1.endpoint.Serializer";
  /** Select the serialization format automatically */
  serializerAuto?: SerializerAuto | undefined;
  /** Serialize data in json format */
  serializerJson?: SerializerJSON | undefined;
  /** Serialize data in debezium format */
  serializerDebezium?: SerializerDebezium | undefined;
}

const baseSerializerAuto: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerAuto",
};

export const SerializerAuto = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerAuto" as const,

  encode(
    _: SerializerAuto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SerializerAuto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSerializerAuto } as SerializerAuto;
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

  fromJSON(_: any): SerializerAuto {
    const message = { ...baseSerializerAuto } as SerializerAuto;
    return message;
  },

  toJSON(_: SerializerAuto): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SerializerAuto>, I>>(
    _: I
  ): SerializerAuto {
    const message = { ...baseSerializerAuto } as SerializerAuto;
    return message;
  },
};

messageTypeRegistry.set(SerializerAuto.$type, SerializerAuto);

const baseSerializerJSON: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerJSON",
};

export const SerializerJSON = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerJSON" as const,

  encode(
    _: SerializerJSON,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SerializerJSON {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSerializerJSON } as SerializerJSON;
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

  fromJSON(_: any): SerializerJSON {
    const message = { ...baseSerializerJSON } as SerializerJSON;
    return message;
  },

  toJSON(_: SerializerJSON): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SerializerJSON>, I>>(
    _: I
  ): SerializerJSON {
    const message = { ...baseSerializerJSON } as SerializerJSON;
    return message;
  },
};

messageTypeRegistry.set(SerializerJSON.$type, SerializerJSON);

const baseDebeziumSerializerParameter: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.DebeziumSerializerParameter",
  key: "",
  value: "",
};

export const DebeziumSerializerParameter = {
  $type:
    "yandex.cloud.datatransfer.v1.endpoint.DebeziumSerializerParameter" as const,

  encode(
    message: DebeziumSerializerParameter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DebeziumSerializerParameter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDebeziumSerializerParameter,
    } as DebeziumSerializerParameter;
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

  fromJSON(object: any): DebeziumSerializerParameter {
    const message = {
      ...baseDebeziumSerializerParameter,
    } as DebeziumSerializerParameter;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: DebeziumSerializerParameter): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DebeziumSerializerParameter>, I>>(
    object: I
  ): DebeziumSerializerParameter {
    const message = {
      ...baseDebeziumSerializerParameter,
    } as DebeziumSerializerParameter;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DebeziumSerializerParameter.$type,
  DebeziumSerializerParameter
);

const baseSerializerDebezium: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerDebezium",
};

export const SerializerDebezium = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerDebezium" as const,

  encode(
    message: SerializerDebezium,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.serializerParameters) {
      DebeziumSerializerParameter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SerializerDebezium {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSerializerDebezium } as SerializerDebezium;
    message.serializerParameters = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serializerParameters.push(
            DebeziumSerializerParameter.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SerializerDebezium {
    const message = { ...baseSerializerDebezium } as SerializerDebezium;
    message.serializerParameters = (object.serializerParameters ?? []).map(
      (e: any) => DebeziumSerializerParameter.fromJSON(e)
    );
    return message;
  },

  toJSON(message: SerializerDebezium): unknown {
    const obj: any = {};
    if (message.serializerParameters) {
      obj.serializerParameters = message.serializerParameters.map((e) =>
        e ? DebeziumSerializerParameter.toJSON(e) : undefined
      );
    } else {
      obj.serializerParameters = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SerializerDebezium>, I>>(
    object: I
  ): SerializerDebezium {
    const message = { ...baseSerializerDebezium } as SerializerDebezium;
    message.serializerParameters =
      object.serializerParameters?.map((e) =>
        DebeziumSerializerParameter.fromPartial(e)
      ) || [];
    return message;
  },
};

messageTypeRegistry.set(SerializerDebezium.$type, SerializerDebezium);

const baseSerializer: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.Serializer",
};

export const Serializer = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.Serializer" as const,

  encode(
    message: Serializer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.serializerAuto !== undefined) {
      SerializerAuto.encode(
        message.serializerAuto,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.serializerJson !== undefined) {
      SerializerJSON.encode(
        message.serializerJson,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.serializerDebezium !== undefined) {
      SerializerDebezium.encode(
        message.serializerDebezium,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Serializer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSerializer } as Serializer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serializerAuto = SerializerAuto.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.serializerJson = SerializerJSON.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.serializerDebezium = SerializerDebezium.decode(
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

  fromJSON(object: any): Serializer {
    const message = { ...baseSerializer } as Serializer;
    message.serializerAuto =
      object.serializerAuto !== undefined && object.serializerAuto !== null
        ? SerializerAuto.fromJSON(object.serializerAuto)
        : undefined;
    message.serializerJson =
      object.serializerJson !== undefined && object.serializerJson !== null
        ? SerializerJSON.fromJSON(object.serializerJson)
        : undefined;
    message.serializerDebezium =
      object.serializerDebezium !== undefined &&
      object.serializerDebezium !== null
        ? SerializerDebezium.fromJSON(object.serializerDebezium)
        : undefined;
    return message;
  },

  toJSON(message: Serializer): unknown {
    const obj: any = {};
    message.serializerAuto !== undefined &&
      (obj.serializerAuto = message.serializerAuto
        ? SerializerAuto.toJSON(message.serializerAuto)
        : undefined);
    message.serializerJson !== undefined &&
      (obj.serializerJson = message.serializerJson
        ? SerializerJSON.toJSON(message.serializerJson)
        : undefined);
    message.serializerDebezium !== undefined &&
      (obj.serializerDebezium = message.serializerDebezium
        ? SerializerDebezium.toJSON(message.serializerDebezium)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Serializer>, I>>(
    object: I
  ): Serializer {
    const message = { ...baseSerializer } as Serializer;
    message.serializerAuto =
      object.serializerAuto !== undefined && object.serializerAuto !== null
        ? SerializerAuto.fromPartial(object.serializerAuto)
        : undefined;
    message.serializerJson =
      object.serializerJson !== undefined && object.serializerJson !== null
        ? SerializerJSON.fromPartial(object.serializerJson)
        : undefined;
    message.serializerDebezium =
      object.serializerDebezium !== undefined &&
      object.serializerDebezium !== null
        ? SerializerDebezium.fromPartial(object.serializerDebezium)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Serializer.$type, Serializer);

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
