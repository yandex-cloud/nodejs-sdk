/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.serverless.triggers.v1";

export interface Predicate {
  $type: "yandex.cloud.serverless.triggers.v1.Predicate";
  andPredicate?: AndPredicate | undefined;
  fieldValuePredicate?: FieldValuePredicate | undefined;
}

export interface AndPredicate {
  $type: "yandex.cloud.serverless.triggers.v1.AndPredicate";
  predicate: Predicate[];
}

export interface FieldValuePredicate {
  $type: "yandex.cloud.serverless.triggers.v1.FieldValuePredicate";
  fieldPath: string;
  /** string representation of the value matches exactly to the given string */
  exact: string | undefined;
  /** value has given prefix */
  prefix: string | undefined;
  /** value has given suffix */
  suffix: string | undefined;
}

const basePredicate: object = {
  $type: "yandex.cloud.serverless.triggers.v1.Predicate",
};

export const Predicate = {
  $type: "yandex.cloud.serverless.triggers.v1.Predicate" as const,

  encode(
    message: Predicate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.andPredicate !== undefined) {
      AndPredicate.encode(
        message.andPredicate,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.fieldValuePredicate !== undefined) {
      FieldValuePredicate.encode(
        message.fieldValuePredicate,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Predicate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePredicate } as Predicate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.andPredicate = AndPredicate.decode(reader, reader.uint32());
          break;
        case 4:
          message.fieldValuePredicate = FieldValuePredicate.decode(
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

  fromJSON(object: any): Predicate {
    const message = { ...basePredicate } as Predicate;
    message.andPredicate =
      object.andPredicate !== undefined && object.andPredicate !== null
        ? AndPredicate.fromJSON(object.andPredicate)
        : undefined;
    message.fieldValuePredicate =
      object.fieldValuePredicate !== undefined &&
      object.fieldValuePredicate !== null
        ? FieldValuePredicate.fromJSON(object.fieldValuePredicate)
        : undefined;
    return message;
  },

  toJSON(message: Predicate): unknown {
    const obj: any = {};
    message.andPredicate !== undefined &&
      (obj.andPredicate = message.andPredicate
        ? AndPredicate.toJSON(message.andPredicate)
        : undefined);
    message.fieldValuePredicate !== undefined &&
      (obj.fieldValuePredicate = message.fieldValuePredicate
        ? FieldValuePredicate.toJSON(message.fieldValuePredicate)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Predicate>, I>>(
    object: I
  ): Predicate {
    const message = { ...basePredicate } as Predicate;
    message.andPredicate =
      object.andPredicate !== undefined && object.andPredicate !== null
        ? AndPredicate.fromPartial(object.andPredicate)
        : undefined;
    message.fieldValuePredicate =
      object.fieldValuePredicate !== undefined &&
      object.fieldValuePredicate !== null
        ? FieldValuePredicate.fromPartial(object.fieldValuePredicate)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Predicate.$type, Predicate);

const baseAndPredicate: object = {
  $type: "yandex.cloud.serverless.triggers.v1.AndPredicate",
};

export const AndPredicate = {
  $type: "yandex.cloud.serverless.triggers.v1.AndPredicate" as const,

  encode(
    message: AndPredicate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.predicate) {
      Predicate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AndPredicate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAndPredicate } as AndPredicate;
    message.predicate = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.predicate.push(Predicate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AndPredicate {
    const message = { ...baseAndPredicate } as AndPredicate;
    message.predicate = (object.predicate ?? []).map((e: any) =>
      Predicate.fromJSON(e)
    );
    return message;
  },

  toJSON(message: AndPredicate): unknown {
    const obj: any = {};
    if (message.predicate) {
      obj.predicate = message.predicate.map((e) =>
        e ? Predicate.toJSON(e) : undefined
      );
    } else {
      obj.predicate = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AndPredicate>, I>>(
    object: I
  ): AndPredicate {
    const message = { ...baseAndPredicate } as AndPredicate;
    message.predicate =
      object.predicate?.map((e) => Predicate.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(AndPredicate.$type, AndPredicate);

const baseFieldValuePredicate: object = {
  $type: "yandex.cloud.serverless.triggers.v1.FieldValuePredicate",
  fieldPath: "",
};

export const FieldValuePredicate = {
  $type: "yandex.cloud.serverless.triggers.v1.FieldValuePredicate" as const,

  encode(
    message: FieldValuePredicate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fieldPath !== "") {
      writer.uint32(10).string(message.fieldPath);
    }
    if (message.exact !== undefined) {
      writer.uint32(26).string(message.exact);
    }
    if (message.prefix !== undefined) {
      writer.uint32(66).string(message.prefix);
    }
    if (message.suffix !== undefined) {
      writer.uint32(74).string(message.suffix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldValuePredicate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFieldValuePredicate } as FieldValuePredicate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fieldPath = reader.string();
          break;
        case 3:
          message.exact = reader.string();
          break;
        case 8:
          message.prefix = reader.string();
          break;
        case 9:
          message.suffix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FieldValuePredicate {
    const message = { ...baseFieldValuePredicate } as FieldValuePredicate;
    message.fieldPath =
      object.fieldPath !== undefined && object.fieldPath !== null
        ? String(object.fieldPath)
        : "";
    message.exact =
      object.exact !== undefined && object.exact !== null
        ? String(object.exact)
        : undefined;
    message.prefix =
      object.prefix !== undefined && object.prefix !== null
        ? String(object.prefix)
        : undefined;
    message.suffix =
      object.suffix !== undefined && object.suffix !== null
        ? String(object.suffix)
        : undefined;
    return message;
  },

  toJSON(message: FieldValuePredicate): unknown {
    const obj: any = {};
    message.fieldPath !== undefined && (obj.fieldPath = message.fieldPath);
    message.exact !== undefined && (obj.exact = message.exact);
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.suffix !== undefined && (obj.suffix = message.suffix);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FieldValuePredicate>, I>>(
    object: I
  ): FieldValuePredicate {
    const message = { ...baseFieldValuePredicate } as FieldValuePredicate;
    message.fieldPath = object.fieldPath ?? "";
    message.exact = object.exact ?? undefined;
    message.prefix = object.prefix ?? undefined;
    message.suffix = object.suffix ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(FieldValuePredicate.$type, FieldValuePredicate);

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
