/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.smartwebsecurity.v1.waf";

export interface RuleSetDescriptor {
  $type: "yandex.cloud.smartwebsecurity.v1.waf.RuleSetDescriptor";
  /** Name of the rule set */
  name: string;
  /** Version of the rule set */
  version: string;
  /** ID of the rule set */
  id: string;
  /** List of rules */
  rules: RuleSetDescriptor_RuleDescription[];
}

export interface RuleSetDescriptor_RuleDescription {
  $type: "yandex.cloud.smartwebsecurity.v1.waf.RuleSetDescriptor.RuleDescription";
  /** ID of the rule */
  id: string;
  /**
   * Numeric anomaly value, i.e., a potential attack indicator.
   * The higher this value, the more likely it is that the request that satisfies the rule is an attack.
   * See [documentation](/docs/smartwebsecurity/concepts/waf#anomaly).
   */
  anomalyScore: number;
  /**
   * Paranoia level classifies rules according to their aggression.
   * The higher the paranoia level, the better your protection, but also the higher the probability of WAF false positives.
   * See [documentation](/docs/smartwebsecurity/concepts/waf#paranoia).
   */
  paranoiaLevel: number;
}

const baseRuleSetDescriptor: object = {
  $type: "yandex.cloud.smartwebsecurity.v1.waf.RuleSetDescriptor",
  name: "",
  version: "",
  id: "",
};

export const RuleSetDescriptor = {
  $type: "yandex.cloud.smartwebsecurity.v1.waf.RuleSetDescriptor" as const,

  encode(
    message: RuleSetDescriptor,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    for (const v of message.rules) {
      RuleSetDescriptor_RuleDescription.encode(
        v!,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RuleSetDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRuleSetDescriptor } as RuleSetDescriptor;
    message.rules = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        case 4:
          message.rules.push(
            RuleSetDescriptor_RuleDescription.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RuleSetDescriptor {
    const message = { ...baseRuleSetDescriptor } as RuleSetDescriptor;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.version =
      object.version !== undefined && object.version !== null
        ? String(object.version)
        : "";
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.rules = (object.rules ?? []).map((e: any) =>
      RuleSetDescriptor_RuleDescription.fromJSON(e)
    );
    return message;
  },

  toJSON(message: RuleSetDescriptor): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.version !== undefined && (obj.version = message.version);
    message.id !== undefined && (obj.id = message.id);
    if (message.rules) {
      obj.rules = message.rules.map((e) =>
        e ? RuleSetDescriptor_RuleDescription.toJSON(e) : undefined
      );
    } else {
      obj.rules = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RuleSetDescriptor>, I>>(
    object: I
  ): RuleSetDescriptor {
    const message = { ...baseRuleSetDescriptor } as RuleSetDescriptor;
    message.name = object.name ?? "";
    message.version = object.version ?? "";
    message.id = object.id ?? "";
    message.rules =
      object.rules?.map((e) =>
        RuleSetDescriptor_RuleDescription.fromPartial(e)
      ) || [];
    return message;
  },
};

messageTypeRegistry.set(RuleSetDescriptor.$type, RuleSetDescriptor);

const baseRuleSetDescriptor_RuleDescription: object = {
  $type:
    "yandex.cloud.smartwebsecurity.v1.waf.RuleSetDescriptor.RuleDescription",
  id: "",
  anomalyScore: 0,
  paranoiaLevel: 0,
};

export const RuleSetDescriptor_RuleDescription = {
  $type:
    "yandex.cloud.smartwebsecurity.v1.waf.RuleSetDescriptor.RuleDescription" as const,

  encode(
    message: RuleSetDescriptor_RuleDescription,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.anomalyScore !== 0) {
      writer.uint32(64).int64(message.anomalyScore);
    }
    if (message.paranoiaLevel !== 0) {
      writer.uint32(72).int64(message.paranoiaLevel);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RuleSetDescriptor_RuleDescription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRuleSetDescriptor_RuleDescription,
    } as RuleSetDescriptor_RuleDescription;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 8:
          message.anomalyScore = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.paranoiaLevel = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RuleSetDescriptor_RuleDescription {
    const message = {
      ...baseRuleSetDescriptor_RuleDescription,
    } as RuleSetDescriptor_RuleDescription;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.anomalyScore =
      object.anomalyScore !== undefined && object.anomalyScore !== null
        ? Number(object.anomalyScore)
        : 0;
    message.paranoiaLevel =
      object.paranoiaLevel !== undefined && object.paranoiaLevel !== null
        ? Number(object.paranoiaLevel)
        : 0;
    return message;
  },

  toJSON(message: RuleSetDescriptor_RuleDescription): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.anomalyScore !== undefined &&
      (obj.anomalyScore = Math.round(message.anomalyScore));
    message.paranoiaLevel !== undefined &&
      (obj.paranoiaLevel = Math.round(message.paranoiaLevel));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<RuleSetDescriptor_RuleDescription>, I>
  >(object: I): RuleSetDescriptor_RuleDescription {
    const message = {
      ...baseRuleSetDescriptor_RuleDescription,
    } as RuleSetDescriptor_RuleDescription;
    message.id = object.id ?? "";
    message.anomalyScore = object.anomalyScore ?? 0;
    message.paranoiaLevel = object.paranoiaLevel ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  RuleSetDescriptor_RuleDescription.$type,
  RuleSetDescriptor_RuleDescription
);

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
