/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ResourceOptions } from "../../../../yandex/cloud/cdn/v1/resource";

export const protobufPackage = "yandex.cloud.cdn.v1";

/** Resource rule. */
export interface Rule {
  $type: "yandex.cloud.cdn.v1.Rule";
  /** Rule ID. */
  id: number;
  /** Rule name. */
  name: string;
  /**
   * Rule pattern.
   * Must be a valid regular expression.
   */
  rulePattern: string;
  options?: ResourceOptions;
}

const baseRule: object = {
  $type: "yandex.cloud.cdn.v1.Rule",
  id: 0,
  name: "",
  rulePattern: "",
};

export const Rule = {
  $type: "yandex.cloud.cdn.v1.Rule" as const,

  encode(message: Rule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.rulePattern !== "") {
      writer.uint32(26).string(message.rulePattern);
    }
    if (message.options !== undefined) {
      ResourceOptions.encode(
        message.options,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Rule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRule } as Rule;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.rulePattern = reader.string();
          break;
        case 4:
          message.options = ResourceOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Rule {
    const message = { ...baseRule } as Rule;
    message.id =
      object.id !== undefined && object.id !== null ? Number(object.id) : 0;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.rulePattern =
      object.rulePattern !== undefined && object.rulePattern !== null
        ? String(object.rulePattern)
        : "";
    message.options =
      object.options !== undefined && object.options !== null
        ? ResourceOptions.fromJSON(object.options)
        : undefined;
    return message;
  },

  toJSON(message: Rule): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.rulePattern !== undefined &&
      (obj.rulePattern = message.rulePattern);
    message.options !== undefined &&
      (obj.options = message.options
        ? ResourceOptions.toJSON(message.options)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Rule>, I>>(object: I): Rule {
    const message = { ...baseRule } as Rule;
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.rulePattern = object.rulePattern ?? "";
    message.options =
      object.options !== undefined && object.options !== null
        ? ResourceOptions.fromPartial(object.options)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Rule.$type, Rule);

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
