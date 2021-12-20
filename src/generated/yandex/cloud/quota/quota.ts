/* eslint-disable */
import { messageTypeRegistry } from "../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.quota";

export interface QuotaMetric {
  $type: "yandex.cloud.quota.QuotaMetric";
  /** formatted as <domain>.<metric>.<unit>, e.g. mdb.hdd.size */
  name: string;
  limit: number;
  usage: number;
}

export interface MetricLimit {
  $type: "yandex.cloud.quota.MetricLimit";
  name: string;
  limit: number;
}

export interface QuotaFailure {
  $type: "yandex.cloud.quota.QuotaFailure";
  violations: QuotaFailure_Violation[];
}

export interface QuotaFailure_Violation {
  $type: "yandex.cloud.quota.QuotaFailure.Violation";
  metric?: QuotaMetric;
  /** new value for the MetricLimit.limit, so it is: old limit + delta */
  required: number;
}

const baseQuotaMetric: object = {
  $type: "yandex.cloud.quota.QuotaMetric",
  name: "",
  limit: 0,
  usage: 0,
};

export const QuotaMetric = {
  $type: "yandex.cloud.quota.QuotaMetric" as const,

  encode(
    message: QuotaMetric,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.limit !== 0) {
      writer.uint32(24).int64(message.limit);
    }
    if (message.usage !== 0) {
      writer.uint32(33).double(message.usage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuotaMetric {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuotaMetric } as QuotaMetric;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.limit = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.usage = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuotaMetric {
    const message = { ...baseQuotaMetric } as QuotaMetric;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.limit =
      object.limit !== undefined && object.limit !== null
        ? Number(object.limit)
        : 0;
    message.usage =
      object.usage !== undefined && object.usage !== null
        ? Number(object.usage)
        : 0;
    return message;
  },

  toJSON(message: QuotaMetric): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.usage !== undefined && (obj.usage = message.usage);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuotaMetric>, I>>(
    object: I
  ): QuotaMetric {
    const message = { ...baseQuotaMetric } as QuotaMetric;
    message.name = object.name ?? "";
    message.limit = object.limit ?? 0;
    message.usage = object.usage ?? 0;
    return message;
  },
};

messageTypeRegistry.set(QuotaMetric.$type, QuotaMetric);

const baseMetricLimit: object = {
  $type: "yandex.cloud.quota.MetricLimit",
  name: "",
  limit: 0,
};

export const MetricLimit = {
  $type: "yandex.cloud.quota.MetricLimit" as const,

  encode(
    message: MetricLimit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.limit !== 0) {
      writer.uint32(16).int64(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MetricLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMetricLimit } as MetricLimit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.limit = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MetricLimit {
    const message = { ...baseMetricLimit } as MetricLimit;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.limit =
      object.limit !== undefined && object.limit !== null
        ? Number(object.limit)
        : 0;
    return message;
  },

  toJSON(message: MetricLimit): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MetricLimit>, I>>(
    object: I
  ): MetricLimit {
    const message = { ...baseMetricLimit } as MetricLimit;
    message.name = object.name ?? "";
    message.limit = object.limit ?? 0;
    return message;
  },
};

messageTypeRegistry.set(MetricLimit.$type, MetricLimit);

const baseQuotaFailure: object = { $type: "yandex.cloud.quota.QuotaFailure" };

export const QuotaFailure = {
  $type: "yandex.cloud.quota.QuotaFailure" as const,

  encode(
    message: QuotaFailure,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.violations) {
      QuotaFailure_Violation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuotaFailure {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuotaFailure } as QuotaFailure;
    message.violations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.violations.push(
            QuotaFailure_Violation.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuotaFailure {
    const message = { ...baseQuotaFailure } as QuotaFailure;
    message.violations = (object.violations ?? []).map((e: any) =>
      QuotaFailure_Violation.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QuotaFailure): unknown {
    const obj: any = {};
    if (message.violations) {
      obj.violations = message.violations.map((e) =>
        e ? QuotaFailure_Violation.toJSON(e) : undefined
      );
    } else {
      obj.violations = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuotaFailure>, I>>(
    object: I
  ): QuotaFailure {
    const message = { ...baseQuotaFailure } as QuotaFailure;
    message.violations =
      object.violations?.map((e) => QuotaFailure_Violation.fromPartial(e)) ||
      [];
    return message;
  },
};

messageTypeRegistry.set(QuotaFailure.$type, QuotaFailure);

const baseQuotaFailure_Violation: object = {
  $type: "yandex.cloud.quota.QuotaFailure.Violation",
  required: 0,
};

export const QuotaFailure_Violation = {
  $type: "yandex.cloud.quota.QuotaFailure.Violation" as const,

  encode(
    message: QuotaFailure_Violation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.metric !== undefined) {
      QuotaMetric.encode(message.metric, writer.uint32(10).fork()).ldelim();
    }
    if (message.required !== 0) {
      writer.uint32(16).int64(message.required);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuotaFailure_Violation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuotaFailure_Violation } as QuotaFailure_Violation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metric = QuotaMetric.decode(reader, reader.uint32());
          break;
        case 2:
          message.required = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuotaFailure_Violation {
    const message = { ...baseQuotaFailure_Violation } as QuotaFailure_Violation;
    message.metric =
      object.metric !== undefined && object.metric !== null
        ? QuotaMetric.fromJSON(object.metric)
        : undefined;
    message.required =
      object.required !== undefined && object.required !== null
        ? Number(object.required)
        : 0;
    return message;
  },

  toJSON(message: QuotaFailure_Violation): unknown {
    const obj: any = {};
    message.metric !== undefined &&
      (obj.metric = message.metric
        ? QuotaMetric.toJSON(message.metric)
        : undefined);
    message.required !== undefined &&
      (obj.required = Math.round(message.required));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuotaFailure_Violation>, I>>(
    object: I
  ): QuotaFailure_Violation {
    const message = { ...baseQuotaFailure_Violation } as QuotaFailure_Violation;
    message.metric =
      object.metric !== undefined && object.metric !== null
        ? QuotaMetric.fromPartial(object.metric)
        : undefined;
    message.required = object.required ?? 0;
    return message;
  },
};

messageTypeRegistry.set(QuotaFailure_Violation.$type, QuotaFailure_Violation);

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
