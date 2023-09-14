/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.marketplace.metering.v1";

export interface UsageRecord {
  $type: "yandex.cloud.marketplace.metering.v1.UsageRecord";
  /** Unique identifier of the usage record (UUID format). */
  uuid: string;
  /** Consumed Marketplace SKU ID, linked to `UsageRecord.product_id`. */
  skuId: string;
  /** Quantity of SKU consumed, measured in `sku.usage_unit` units (e.g. bytes). */
  quantity: number;
  /** Timestamp in UTC for which the usage is being reported. */
  timestamp?: Date;
}

export interface AcceptedUsageRecord {
  $type: "yandex.cloud.marketplace.metering.v1.AcceptedUsageRecord";
  /** Unique identifier of the usage record (UUID format). */
  uuid: string;
}

export interface RejectedUsageRecord {
  $type: "yandex.cloud.marketplace.metering.v1.RejectedUsageRecord";
  /** Unique identifier of the usage record (UUID format). */
  uuid: string;
  /** The reason of rejection. */
  reason: RejectedUsageRecord_Reason;
}

export enum RejectedUsageRecord_Reason {
  REASON_UNSPECIFIED = 0,
  DUPLICATE = 1,
  EXPIRED = 2,
  INVALID_TIMESTAMP = 3,
  INVALID_SKU_ID = 4,
  INVALID_PRODUCT_ID = 5,
  INVALID_QUANTITY = 6,
  INVALID_ID = 7,
  UNRECOGNIZED = -1,
}

export function rejectedUsageRecord_ReasonFromJSON(
  object: any
): RejectedUsageRecord_Reason {
  switch (object) {
    case 0:
    case "REASON_UNSPECIFIED":
      return RejectedUsageRecord_Reason.REASON_UNSPECIFIED;
    case 1:
    case "DUPLICATE":
      return RejectedUsageRecord_Reason.DUPLICATE;
    case 2:
    case "EXPIRED":
      return RejectedUsageRecord_Reason.EXPIRED;
    case 3:
    case "INVALID_TIMESTAMP":
      return RejectedUsageRecord_Reason.INVALID_TIMESTAMP;
    case 4:
    case "INVALID_SKU_ID":
      return RejectedUsageRecord_Reason.INVALID_SKU_ID;
    case 5:
    case "INVALID_PRODUCT_ID":
      return RejectedUsageRecord_Reason.INVALID_PRODUCT_ID;
    case 6:
    case "INVALID_QUANTITY":
      return RejectedUsageRecord_Reason.INVALID_QUANTITY;
    case 7:
    case "INVALID_ID":
      return RejectedUsageRecord_Reason.INVALID_ID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RejectedUsageRecord_Reason.UNRECOGNIZED;
  }
}

export function rejectedUsageRecord_ReasonToJSON(
  object: RejectedUsageRecord_Reason
): string {
  switch (object) {
    case RejectedUsageRecord_Reason.REASON_UNSPECIFIED:
      return "REASON_UNSPECIFIED";
    case RejectedUsageRecord_Reason.DUPLICATE:
      return "DUPLICATE";
    case RejectedUsageRecord_Reason.EXPIRED:
      return "EXPIRED";
    case RejectedUsageRecord_Reason.INVALID_TIMESTAMP:
      return "INVALID_TIMESTAMP";
    case RejectedUsageRecord_Reason.INVALID_SKU_ID:
      return "INVALID_SKU_ID";
    case RejectedUsageRecord_Reason.INVALID_PRODUCT_ID:
      return "INVALID_PRODUCT_ID";
    case RejectedUsageRecord_Reason.INVALID_QUANTITY:
      return "INVALID_QUANTITY";
    case RejectedUsageRecord_Reason.INVALID_ID:
      return "INVALID_ID";
    default:
      return "UNKNOWN";
  }
}

const baseUsageRecord: object = {
  $type: "yandex.cloud.marketplace.metering.v1.UsageRecord",
  uuid: "",
  skuId: "",
  quantity: 0,
};

export const UsageRecord = {
  $type: "yandex.cloud.marketplace.metering.v1.UsageRecord" as const,

  encode(
    message: UsageRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    if (message.skuId !== "") {
      writer.uint32(18).string(message.skuId);
    }
    if (message.quantity !== 0) {
      writer.uint32(24).int64(message.quantity);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UsageRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUsageRecord } as UsageRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        case 2:
          message.skuId = reader.string();
          break;
        case 3:
          message.quantity = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UsageRecord {
    const message = { ...baseUsageRecord } as UsageRecord;
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? String(object.uuid)
        : "";
    message.skuId =
      object.skuId !== undefined && object.skuId !== null
        ? String(object.skuId)
        : "";
    message.quantity =
      object.quantity !== undefined && object.quantity !== null
        ? Number(object.quantity)
        : 0;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? fromJsonTimestamp(object.timestamp)
        : undefined;
    return message;
  },

  toJSON(message: UsageRecord): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.skuId !== undefined && (obj.skuId = message.skuId);
    message.quantity !== undefined &&
      (obj.quantity = Math.round(message.quantity));
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UsageRecord>, I>>(
    object: I
  ): UsageRecord {
    const message = { ...baseUsageRecord } as UsageRecord;
    message.uuid = object.uuid ?? "";
    message.skuId = object.skuId ?? "";
    message.quantity = object.quantity ?? 0;
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(UsageRecord.$type, UsageRecord);

const baseAcceptedUsageRecord: object = {
  $type: "yandex.cloud.marketplace.metering.v1.AcceptedUsageRecord",
  uuid: "",
};

export const AcceptedUsageRecord = {
  $type: "yandex.cloud.marketplace.metering.v1.AcceptedUsageRecord" as const,

  encode(
    message: AcceptedUsageRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcceptedUsageRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAcceptedUsageRecord } as AcceptedUsageRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AcceptedUsageRecord {
    const message = { ...baseAcceptedUsageRecord } as AcceptedUsageRecord;
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? String(object.uuid)
        : "";
    return message;
  },

  toJSON(message: AcceptedUsageRecord): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AcceptedUsageRecord>, I>>(
    object: I
  ): AcceptedUsageRecord {
    const message = { ...baseAcceptedUsageRecord } as AcceptedUsageRecord;
    message.uuid = object.uuid ?? "";
    return message;
  },
};

messageTypeRegistry.set(AcceptedUsageRecord.$type, AcceptedUsageRecord);

const baseRejectedUsageRecord: object = {
  $type: "yandex.cloud.marketplace.metering.v1.RejectedUsageRecord",
  uuid: "",
  reason: 0,
};

export const RejectedUsageRecord = {
  $type: "yandex.cloud.marketplace.metering.v1.RejectedUsageRecord" as const,

  encode(
    message: RejectedUsageRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    if (message.reason !== 0) {
      writer.uint32(16).int32(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RejectedUsageRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRejectedUsageRecord } as RejectedUsageRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        case 2:
          message.reason = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RejectedUsageRecord {
    const message = { ...baseRejectedUsageRecord } as RejectedUsageRecord;
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? String(object.uuid)
        : "";
    message.reason =
      object.reason !== undefined && object.reason !== null
        ? rejectedUsageRecord_ReasonFromJSON(object.reason)
        : 0;
    return message;
  },

  toJSON(message: RejectedUsageRecord): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.reason !== undefined &&
      (obj.reason = rejectedUsageRecord_ReasonToJSON(message.reason));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RejectedUsageRecord>, I>>(
    object: I
  ): RejectedUsageRecord {
    const message = { ...baseRejectedUsageRecord } as RejectedUsageRecord;
    message.uuid = object.uuid ?? "";
    message.reason = object.reason ?? 0;
    return message;
  },
};

messageTypeRegistry.set(RejectedUsageRecord.$type, RejectedUsageRecord);

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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
