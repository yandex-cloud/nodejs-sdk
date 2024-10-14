/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../../google/protobuf/duration";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Int64Value, DoubleValue } from "../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.speechsense.v1";

export enum SortOrder {
  SORT_ORDER_UNSPECIFIED = 0,
  SORT_ORDER_ASC = 1,
  SORT_ORDER_DESC = 2,
  UNRECOGNIZED = -1,
}

export function sortOrderFromJSON(object: any): SortOrder {
  switch (object) {
    case 0:
    case "SORT_ORDER_UNSPECIFIED":
      return SortOrder.SORT_ORDER_UNSPECIFIED;
    case 1:
    case "SORT_ORDER_ASC":
      return SortOrder.SORT_ORDER_ASC;
    case 2:
    case "SORT_ORDER_DESC":
      return SortOrder.SORT_ORDER_DESC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SortOrder.UNRECOGNIZED;
  }
}

export function sortOrderToJSON(object: SortOrder): string {
  switch (object) {
    case SortOrder.SORT_ORDER_UNSPECIFIED:
      return "SORT_ORDER_UNSPECIFIED";
    case SortOrder.SORT_ORDER_ASC:
      return "SORT_ORDER_ASC";
    case SortOrder.SORT_ORDER_DESC:
      return "SORT_ORDER_DESC";
    default:
      return "UNKNOWN";
  }
}

export interface Filter {
  $type: "yandex.cloud.speechsense.v1.Filter";
  /** metadata key (user.some_key / system.created_at / analysis.speechkit.duration) */
  key: string;
  /** find talk matched by any text filters */
  anyMatch?: AnyMatchFilter | undefined;
  /** find talks with value from int range */
  intRange?: IntRangeFilter | undefined;
  /** find talks with value from double range */
  doubleRange?: DoubleRangeFilter | undefined;
  /** find talks with value from date range */
  dateRange?: DateRangeFilter | undefined;
  /** find talks with value from duration range */
  durationRange?: DurationRangeFilter | undefined;
  /** find talks with value equals boolean */
  booleanMatch?: BooleanFilter | undefined;
  inverse: boolean;
  /** channel number to apply filter for, starting with 0. applies to all channels if not specified */
  channelNumber?: number;
}

export interface Query {
  $type: "yandex.cloud.speechsense.v1.Query";
  text: string;
  /** should or should NOT match */
  inverse: boolean;
  /** id of channel to search ("1", "2", ..., any channel if not set) */
  channelNumber?: number;
}

export interface AnyMatchFilter {
  $type: "yandex.cloud.speechsense.v1.AnyMatchFilter";
  /** values list to match with "OR" operator */
  values: string[];
}

/** indicates whether to include range boundaries */
export interface BoundsInclusive {
  $type: "yandex.cloud.speechsense.v1.BoundsInclusive";
  /** include from bound */
  fromInclusive: boolean;
  /** include to bound */
  toInclusive: boolean;
}

export interface IntRangeFilter {
  $type: "yandex.cloud.speechsense.v1.IntRangeFilter";
  fromValue?: number;
  toValue?: number;
  boundsInclusive?: BoundsInclusive;
}

export interface DoubleRangeFilter {
  $type: "yandex.cloud.speechsense.v1.DoubleRangeFilter";
  fromValue?: number;
  toValue?: number;
  boundsInclusive?: BoundsInclusive;
}

export interface DateRangeFilter {
  $type: "yandex.cloud.speechsense.v1.DateRangeFilter";
  fromValue?: Date;
  toValue?: Date;
  boundsInclusive?: BoundsInclusive;
}

export interface DurationRangeFilter {
  $type: "yandex.cloud.speechsense.v1.DurationRangeFilter";
  fromValue?: Duration;
  toValue?: Duration;
  boundsInclusive?: BoundsInclusive;
}

export interface BooleanFilter {
  $type: "yandex.cloud.speechsense.v1.BooleanFilter";
  value: boolean;
}

export interface SortData {
  $type: "yandex.cloud.speechsense.v1.SortData";
  fields: SortField[];
}

export interface SortField {
  $type: "yandex.cloud.speechsense.v1.SortField";
  /** sorting key */
  field: string;
  /** sorting order by current `field` */
  order: SortOrder;
  /** number of field in comparing order (sort by key1 (position = 0), then key2 (position = 1), then key3...) */
  position: number;
}

const baseFilter: object = {
  $type: "yandex.cloud.speechsense.v1.Filter",
  key: "",
  inverse: false,
};

export const Filter = {
  $type: "yandex.cloud.speechsense.v1.Filter" as const,

  encode(
    message: Filter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.anyMatch !== undefined) {
      AnyMatchFilter.encode(
        message.anyMatch,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.intRange !== undefined) {
      IntRangeFilter.encode(
        message.intRange,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.doubleRange !== undefined) {
      DoubleRangeFilter.encode(
        message.doubleRange,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.dateRange !== undefined) {
      DateRangeFilter.encode(
        message.dateRange,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.durationRange !== undefined) {
      DurationRangeFilter.encode(
        message.durationRange,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.booleanMatch !== undefined) {
      BooleanFilter.encode(
        message.booleanMatch,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.inverse === true) {
      writer.uint32(56).bool(message.inverse);
    }
    if (message.channelNumber !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.channelNumber! },
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Filter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFilter } as Filter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.anyMatch = AnyMatchFilter.decode(reader, reader.uint32());
          break;
        case 3:
          message.intRange = IntRangeFilter.decode(reader, reader.uint32());
          break;
        case 4:
          message.doubleRange = DoubleRangeFilter.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.dateRange = DateRangeFilter.decode(reader, reader.uint32());
          break;
        case 6:
          message.durationRange = DurationRangeFilter.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.booleanMatch = BooleanFilter.decode(reader, reader.uint32());
          break;
        case 7:
          message.inverse = reader.bool();
          break;
        case 8:
          message.channelNumber = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Filter {
    const message = { ...baseFilter } as Filter;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.anyMatch =
      object.anyMatch !== undefined && object.anyMatch !== null
        ? AnyMatchFilter.fromJSON(object.anyMatch)
        : undefined;
    message.intRange =
      object.intRange !== undefined && object.intRange !== null
        ? IntRangeFilter.fromJSON(object.intRange)
        : undefined;
    message.doubleRange =
      object.doubleRange !== undefined && object.doubleRange !== null
        ? DoubleRangeFilter.fromJSON(object.doubleRange)
        : undefined;
    message.dateRange =
      object.dateRange !== undefined && object.dateRange !== null
        ? DateRangeFilter.fromJSON(object.dateRange)
        : undefined;
    message.durationRange =
      object.durationRange !== undefined && object.durationRange !== null
        ? DurationRangeFilter.fromJSON(object.durationRange)
        : undefined;
    message.booleanMatch =
      object.booleanMatch !== undefined && object.booleanMatch !== null
        ? BooleanFilter.fromJSON(object.booleanMatch)
        : undefined;
    message.inverse =
      object.inverse !== undefined && object.inverse !== null
        ? Boolean(object.inverse)
        : false;
    message.channelNumber =
      object.channelNumber !== undefined && object.channelNumber !== null
        ? Number(object.channelNumber)
        : undefined;
    return message;
  },

  toJSON(message: Filter): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.anyMatch !== undefined &&
      (obj.anyMatch = message.anyMatch
        ? AnyMatchFilter.toJSON(message.anyMatch)
        : undefined);
    message.intRange !== undefined &&
      (obj.intRange = message.intRange
        ? IntRangeFilter.toJSON(message.intRange)
        : undefined);
    message.doubleRange !== undefined &&
      (obj.doubleRange = message.doubleRange
        ? DoubleRangeFilter.toJSON(message.doubleRange)
        : undefined);
    message.dateRange !== undefined &&
      (obj.dateRange = message.dateRange
        ? DateRangeFilter.toJSON(message.dateRange)
        : undefined);
    message.durationRange !== undefined &&
      (obj.durationRange = message.durationRange
        ? DurationRangeFilter.toJSON(message.durationRange)
        : undefined);
    message.booleanMatch !== undefined &&
      (obj.booleanMatch = message.booleanMatch
        ? BooleanFilter.toJSON(message.booleanMatch)
        : undefined);
    message.inverse !== undefined && (obj.inverse = message.inverse);
    message.channelNumber !== undefined &&
      (obj.channelNumber = message.channelNumber);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Filter>, I>>(object: I): Filter {
    const message = { ...baseFilter } as Filter;
    message.key = object.key ?? "";
    message.anyMatch =
      object.anyMatch !== undefined && object.anyMatch !== null
        ? AnyMatchFilter.fromPartial(object.anyMatch)
        : undefined;
    message.intRange =
      object.intRange !== undefined && object.intRange !== null
        ? IntRangeFilter.fromPartial(object.intRange)
        : undefined;
    message.doubleRange =
      object.doubleRange !== undefined && object.doubleRange !== null
        ? DoubleRangeFilter.fromPartial(object.doubleRange)
        : undefined;
    message.dateRange =
      object.dateRange !== undefined && object.dateRange !== null
        ? DateRangeFilter.fromPartial(object.dateRange)
        : undefined;
    message.durationRange =
      object.durationRange !== undefined && object.durationRange !== null
        ? DurationRangeFilter.fromPartial(object.durationRange)
        : undefined;
    message.booleanMatch =
      object.booleanMatch !== undefined && object.booleanMatch !== null
        ? BooleanFilter.fromPartial(object.booleanMatch)
        : undefined;
    message.inverse = object.inverse ?? false;
    message.channelNumber = object.channelNumber ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Filter.$type, Filter);

const baseQuery: object = {
  $type: "yandex.cloud.speechsense.v1.Query",
  text: "",
  inverse: false,
};

export const Query = {
  $type: "yandex.cloud.speechsense.v1.Query" as const,

  encode(message: Query, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    if (message.inverse === true) {
      writer.uint32(16).bool(message.inverse);
    }
    if (message.channelNumber !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.channelNumber! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Query {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuery } as Query;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.text = reader.string();
          break;
        case 2:
          message.inverse = reader.bool();
          break;
        case 3:
          message.channelNumber = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Query {
    const message = { ...baseQuery } as Query;
    message.text =
      object.text !== undefined && object.text !== null
        ? String(object.text)
        : "";
    message.inverse =
      object.inverse !== undefined && object.inverse !== null
        ? Boolean(object.inverse)
        : false;
    message.channelNumber =
      object.channelNumber !== undefined && object.channelNumber !== null
        ? Number(object.channelNumber)
        : undefined;
    return message;
  },

  toJSON(message: Query): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    message.inverse !== undefined && (obj.inverse = message.inverse);
    message.channelNumber !== undefined &&
      (obj.channelNumber = message.channelNumber);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Query>, I>>(object: I): Query {
    const message = { ...baseQuery } as Query;
    message.text = object.text ?? "";
    message.inverse = object.inverse ?? false;
    message.channelNumber = object.channelNumber ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Query.$type, Query);

const baseAnyMatchFilter: object = {
  $type: "yandex.cloud.speechsense.v1.AnyMatchFilter",
  values: "",
};

export const AnyMatchFilter = {
  $type: "yandex.cloud.speechsense.v1.AnyMatchFilter" as const,

  encode(
    message: AnyMatchFilter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.values) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnyMatchFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAnyMatchFilter } as AnyMatchFilter;
    message.values = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AnyMatchFilter {
    const message = { ...baseAnyMatchFilter } as AnyMatchFilter;
    message.values = (object.values ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: AnyMatchFilter): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) => e);
    } else {
      obj.values = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AnyMatchFilter>, I>>(
    object: I
  ): AnyMatchFilter {
    const message = { ...baseAnyMatchFilter } as AnyMatchFilter;
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(AnyMatchFilter.$type, AnyMatchFilter);

const baseBoundsInclusive: object = {
  $type: "yandex.cloud.speechsense.v1.BoundsInclusive",
  fromInclusive: false,
  toInclusive: false,
};

export const BoundsInclusive = {
  $type: "yandex.cloud.speechsense.v1.BoundsInclusive" as const,

  encode(
    message: BoundsInclusive,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fromInclusive === true) {
      writer.uint32(8).bool(message.fromInclusive);
    }
    if (message.toInclusive === true) {
      writer.uint32(16).bool(message.toInclusive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BoundsInclusive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBoundsInclusive } as BoundsInclusive;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromInclusive = reader.bool();
          break;
        case 2:
          message.toInclusive = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BoundsInclusive {
    const message = { ...baseBoundsInclusive } as BoundsInclusive;
    message.fromInclusive =
      object.fromInclusive !== undefined && object.fromInclusive !== null
        ? Boolean(object.fromInclusive)
        : false;
    message.toInclusive =
      object.toInclusive !== undefined && object.toInclusive !== null
        ? Boolean(object.toInclusive)
        : false;
    return message;
  },

  toJSON(message: BoundsInclusive): unknown {
    const obj: any = {};
    message.fromInclusive !== undefined &&
      (obj.fromInclusive = message.fromInclusive);
    message.toInclusive !== undefined &&
      (obj.toInclusive = message.toInclusive);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BoundsInclusive>, I>>(
    object: I
  ): BoundsInclusive {
    const message = { ...baseBoundsInclusive } as BoundsInclusive;
    message.fromInclusive = object.fromInclusive ?? false;
    message.toInclusive = object.toInclusive ?? false;
    return message;
  },
};

messageTypeRegistry.set(BoundsInclusive.$type, BoundsInclusive);

const baseIntRangeFilter: object = {
  $type: "yandex.cloud.speechsense.v1.IntRangeFilter",
};

export const IntRangeFilter = {
  $type: "yandex.cloud.speechsense.v1.IntRangeFilter" as const,

  encode(
    message: IntRangeFilter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fromValue !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.fromValue! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.toValue !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.toValue! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.boundsInclusive !== undefined) {
      BoundsInclusive.encode(
        message.boundsInclusive,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IntRangeFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIntRangeFilter } as IntRangeFilter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromValue = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 2:
          message.toValue = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 3:
          message.boundsInclusive = BoundsInclusive.decode(
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

  fromJSON(object: any): IntRangeFilter {
    const message = { ...baseIntRangeFilter } as IntRangeFilter;
    message.fromValue =
      object.fromValue !== undefined && object.fromValue !== null
        ? Number(object.fromValue)
        : undefined;
    message.toValue =
      object.toValue !== undefined && object.toValue !== null
        ? Number(object.toValue)
        : undefined;
    message.boundsInclusive =
      object.boundsInclusive !== undefined && object.boundsInclusive !== null
        ? BoundsInclusive.fromJSON(object.boundsInclusive)
        : undefined;
    return message;
  },

  toJSON(message: IntRangeFilter): unknown {
    const obj: any = {};
    message.fromValue !== undefined && (obj.fromValue = message.fromValue);
    message.toValue !== undefined && (obj.toValue = message.toValue);
    message.boundsInclusive !== undefined &&
      (obj.boundsInclusive = message.boundsInclusive
        ? BoundsInclusive.toJSON(message.boundsInclusive)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IntRangeFilter>, I>>(
    object: I
  ): IntRangeFilter {
    const message = { ...baseIntRangeFilter } as IntRangeFilter;
    message.fromValue = object.fromValue ?? undefined;
    message.toValue = object.toValue ?? undefined;
    message.boundsInclusive =
      object.boundsInclusive !== undefined && object.boundsInclusive !== null
        ? BoundsInclusive.fromPartial(object.boundsInclusive)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(IntRangeFilter.$type, IntRangeFilter);

const baseDoubleRangeFilter: object = {
  $type: "yandex.cloud.speechsense.v1.DoubleRangeFilter",
};

export const DoubleRangeFilter = {
  $type: "yandex.cloud.speechsense.v1.DoubleRangeFilter" as const,

  encode(
    message: DoubleRangeFilter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fromValue !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.fromValue! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.toValue !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.toValue! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.boundsInclusive !== undefined) {
      BoundsInclusive.encode(
        message.boundsInclusive,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DoubleRangeFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDoubleRangeFilter } as DoubleRangeFilter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromValue = DoubleValue.decode(reader, reader.uint32()).value;
          break;
        case 2:
          message.toValue = DoubleValue.decode(reader, reader.uint32()).value;
          break;
        case 3:
          message.boundsInclusive = BoundsInclusive.decode(
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

  fromJSON(object: any): DoubleRangeFilter {
    const message = { ...baseDoubleRangeFilter } as DoubleRangeFilter;
    message.fromValue =
      object.fromValue !== undefined && object.fromValue !== null
        ? Number(object.fromValue)
        : undefined;
    message.toValue =
      object.toValue !== undefined && object.toValue !== null
        ? Number(object.toValue)
        : undefined;
    message.boundsInclusive =
      object.boundsInclusive !== undefined && object.boundsInclusive !== null
        ? BoundsInclusive.fromJSON(object.boundsInclusive)
        : undefined;
    return message;
  },

  toJSON(message: DoubleRangeFilter): unknown {
    const obj: any = {};
    message.fromValue !== undefined && (obj.fromValue = message.fromValue);
    message.toValue !== undefined && (obj.toValue = message.toValue);
    message.boundsInclusive !== undefined &&
      (obj.boundsInclusive = message.boundsInclusive
        ? BoundsInclusive.toJSON(message.boundsInclusive)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DoubleRangeFilter>, I>>(
    object: I
  ): DoubleRangeFilter {
    const message = { ...baseDoubleRangeFilter } as DoubleRangeFilter;
    message.fromValue = object.fromValue ?? undefined;
    message.toValue = object.toValue ?? undefined;
    message.boundsInclusive =
      object.boundsInclusive !== undefined && object.boundsInclusive !== null
        ? BoundsInclusive.fromPartial(object.boundsInclusive)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(DoubleRangeFilter.$type, DoubleRangeFilter);

const baseDateRangeFilter: object = {
  $type: "yandex.cloud.speechsense.v1.DateRangeFilter",
};

export const DateRangeFilter = {
  $type: "yandex.cloud.speechsense.v1.DateRangeFilter" as const,

  encode(
    message: DateRangeFilter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fromValue !== undefined) {
      Timestamp.encode(
        toTimestamp(message.fromValue),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.toValue !== undefined) {
      Timestamp.encode(
        toTimestamp(message.toValue),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.boundsInclusive !== undefined) {
      BoundsInclusive.encode(
        message.boundsInclusive,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DateRangeFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDateRangeFilter } as DateRangeFilter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromValue = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.toValue = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.boundsInclusive = BoundsInclusive.decode(
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

  fromJSON(object: any): DateRangeFilter {
    const message = { ...baseDateRangeFilter } as DateRangeFilter;
    message.fromValue =
      object.fromValue !== undefined && object.fromValue !== null
        ? fromJsonTimestamp(object.fromValue)
        : undefined;
    message.toValue =
      object.toValue !== undefined && object.toValue !== null
        ? fromJsonTimestamp(object.toValue)
        : undefined;
    message.boundsInclusive =
      object.boundsInclusive !== undefined && object.boundsInclusive !== null
        ? BoundsInclusive.fromJSON(object.boundsInclusive)
        : undefined;
    return message;
  },

  toJSON(message: DateRangeFilter): unknown {
    const obj: any = {};
    message.fromValue !== undefined &&
      (obj.fromValue = message.fromValue.toISOString());
    message.toValue !== undefined &&
      (obj.toValue = message.toValue.toISOString());
    message.boundsInclusive !== undefined &&
      (obj.boundsInclusive = message.boundsInclusive
        ? BoundsInclusive.toJSON(message.boundsInclusive)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DateRangeFilter>, I>>(
    object: I
  ): DateRangeFilter {
    const message = { ...baseDateRangeFilter } as DateRangeFilter;
    message.fromValue = object.fromValue ?? undefined;
    message.toValue = object.toValue ?? undefined;
    message.boundsInclusive =
      object.boundsInclusive !== undefined && object.boundsInclusive !== null
        ? BoundsInclusive.fromPartial(object.boundsInclusive)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(DateRangeFilter.$type, DateRangeFilter);

const baseDurationRangeFilter: object = {
  $type: "yandex.cloud.speechsense.v1.DurationRangeFilter",
};

export const DurationRangeFilter = {
  $type: "yandex.cloud.speechsense.v1.DurationRangeFilter" as const,

  encode(
    message: DurationRangeFilter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fromValue !== undefined) {
      Duration.encode(message.fromValue, writer.uint32(10).fork()).ldelim();
    }
    if (message.toValue !== undefined) {
      Duration.encode(message.toValue, writer.uint32(18).fork()).ldelim();
    }
    if (message.boundsInclusive !== undefined) {
      BoundsInclusive.encode(
        message.boundsInclusive,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DurationRangeFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDurationRangeFilter } as DurationRangeFilter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromValue = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.toValue = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.boundsInclusive = BoundsInclusive.decode(
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

  fromJSON(object: any): DurationRangeFilter {
    const message = { ...baseDurationRangeFilter } as DurationRangeFilter;
    message.fromValue =
      object.fromValue !== undefined && object.fromValue !== null
        ? Duration.fromJSON(object.fromValue)
        : undefined;
    message.toValue =
      object.toValue !== undefined && object.toValue !== null
        ? Duration.fromJSON(object.toValue)
        : undefined;
    message.boundsInclusive =
      object.boundsInclusive !== undefined && object.boundsInclusive !== null
        ? BoundsInclusive.fromJSON(object.boundsInclusive)
        : undefined;
    return message;
  },

  toJSON(message: DurationRangeFilter): unknown {
    const obj: any = {};
    message.fromValue !== undefined &&
      (obj.fromValue = message.fromValue
        ? Duration.toJSON(message.fromValue)
        : undefined);
    message.toValue !== undefined &&
      (obj.toValue = message.toValue
        ? Duration.toJSON(message.toValue)
        : undefined);
    message.boundsInclusive !== undefined &&
      (obj.boundsInclusive = message.boundsInclusive
        ? BoundsInclusive.toJSON(message.boundsInclusive)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DurationRangeFilter>, I>>(
    object: I
  ): DurationRangeFilter {
    const message = { ...baseDurationRangeFilter } as DurationRangeFilter;
    message.fromValue =
      object.fromValue !== undefined && object.fromValue !== null
        ? Duration.fromPartial(object.fromValue)
        : undefined;
    message.toValue =
      object.toValue !== undefined && object.toValue !== null
        ? Duration.fromPartial(object.toValue)
        : undefined;
    message.boundsInclusive =
      object.boundsInclusive !== undefined && object.boundsInclusive !== null
        ? BoundsInclusive.fromPartial(object.boundsInclusive)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(DurationRangeFilter.$type, DurationRangeFilter);

const baseBooleanFilter: object = {
  $type: "yandex.cloud.speechsense.v1.BooleanFilter",
  value: false,
};

export const BooleanFilter = {
  $type: "yandex.cloud.speechsense.v1.BooleanFilter" as const,

  encode(
    message: BooleanFilter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value === true) {
      writer.uint32(8).bool(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BooleanFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBooleanFilter } as BooleanFilter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BooleanFilter {
    const message = { ...baseBooleanFilter } as BooleanFilter;
    message.value =
      object.value !== undefined && object.value !== null
        ? Boolean(object.value)
        : false;
    return message;
  },

  toJSON(message: BooleanFilter): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BooleanFilter>, I>>(
    object: I
  ): BooleanFilter {
    const message = { ...baseBooleanFilter } as BooleanFilter;
    message.value = object.value ?? false;
    return message;
  },
};

messageTypeRegistry.set(BooleanFilter.$type, BooleanFilter);

const baseSortData: object = { $type: "yandex.cloud.speechsense.v1.SortData" };

export const SortData = {
  $type: "yandex.cloud.speechsense.v1.SortData" as const,

  encode(
    message: SortData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.fields) {
      SortField.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SortData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSortData } as SortData;
    message.fields = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fields.push(SortField.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SortData {
    const message = { ...baseSortData } as SortData;
    message.fields = (object.fields ?? []).map((e: any) =>
      SortField.fromJSON(e)
    );
    return message;
  },

  toJSON(message: SortData): unknown {
    const obj: any = {};
    if (message.fields) {
      obj.fields = message.fields.map((e) =>
        e ? SortField.toJSON(e) : undefined
      );
    } else {
      obj.fields = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SortData>, I>>(object: I): SortData {
    const message = { ...baseSortData } as SortData;
    message.fields = object.fields?.map((e) => SortField.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(SortData.$type, SortData);

const baseSortField: object = {
  $type: "yandex.cloud.speechsense.v1.SortField",
  field: "",
  order: 0,
  position: 0,
};

export const SortField = {
  $type: "yandex.cloud.speechsense.v1.SortField" as const,

  encode(
    message: SortField,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.field !== "") {
      writer.uint32(10).string(message.field);
    }
    if (message.order !== 0) {
      writer.uint32(16).int32(message.order);
    }
    if (message.position !== 0) {
      writer.uint32(24).int64(message.position);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SortField {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSortField } as SortField;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.field = reader.string();
          break;
        case 2:
          message.order = reader.int32() as any;
          break;
        case 3:
          message.position = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SortField {
    const message = { ...baseSortField } as SortField;
    message.field =
      object.field !== undefined && object.field !== null
        ? String(object.field)
        : "";
    message.order =
      object.order !== undefined && object.order !== null
        ? sortOrderFromJSON(object.order)
        : 0;
    message.position =
      object.position !== undefined && object.position !== null
        ? Number(object.position)
        : 0;
    return message;
  },

  toJSON(message: SortField): unknown {
    const obj: any = {};
    message.field !== undefined && (obj.field = message.field);
    message.order !== undefined && (obj.order = sortOrderToJSON(message.order));
    message.position !== undefined &&
      (obj.position = Math.round(message.position));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SortField>, I>>(
    object: I
  ): SortField {
    const message = { ...baseSortField } as SortField;
    message.field = object.field ?? "";
    message.order = object.order ?? 0;
    message.position = object.position ?? 0;
    return message;
  },
};

messageTypeRegistry.set(SortField.$type, SortField);

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
