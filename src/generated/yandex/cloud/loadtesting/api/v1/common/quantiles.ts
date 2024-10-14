/* eslint-disable */
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.loadtesting.api.v1.common";

/** Quantiles (percentiles). */
export enum QuantileType {
  /** QUANTILE_TYPE_UNSPECIFIED - Unspecified percentile. */
  QUANTILE_TYPE_UNSPECIFIED = 0,
  /** QUANTILE_TYPE_50 - 50 percentile (median). */
  QUANTILE_TYPE_50 = 1,
  /** QUANTILE_TYPE_75 - 75 percentile. */
  QUANTILE_TYPE_75 = 2,
  /** QUANTILE_TYPE_80 - 80 percentile. */
  QUANTILE_TYPE_80 = 3,
  /** QUANTILE_TYPE_85 - 85 percentile. */
  QUANTILE_TYPE_85 = 4,
  /** QUANTILE_TYPE_90 - 90 percentile. */
  QUANTILE_TYPE_90 = 5,
  /** QUANTILE_TYPE_95 - 95 percentile. */
  QUANTILE_TYPE_95 = 6,
  /** QUANTILE_TYPE_98 - 98 percentile. */
  QUANTILE_TYPE_98 = 7,
  /** QUANTILE_TYPE_99 - 99 percentile. */
  QUANTILE_TYPE_99 = 8,
  /** QUANTILE_TYPE_100 - 100 percentile (maximum or minimum). */
  QUANTILE_TYPE_100 = 9,
  UNRECOGNIZED = -1,
}

export function quantileTypeFromJSON(object: any): QuantileType {
  switch (object) {
    case 0:
    case "QUANTILE_TYPE_UNSPECIFIED":
      return QuantileType.QUANTILE_TYPE_UNSPECIFIED;
    case 1:
    case "QUANTILE_TYPE_50":
      return QuantileType.QUANTILE_TYPE_50;
    case 2:
    case "QUANTILE_TYPE_75":
      return QuantileType.QUANTILE_TYPE_75;
    case 3:
    case "QUANTILE_TYPE_80":
      return QuantileType.QUANTILE_TYPE_80;
    case 4:
    case "QUANTILE_TYPE_85":
      return QuantileType.QUANTILE_TYPE_85;
    case 5:
    case "QUANTILE_TYPE_90":
      return QuantileType.QUANTILE_TYPE_90;
    case 6:
    case "QUANTILE_TYPE_95":
      return QuantileType.QUANTILE_TYPE_95;
    case 7:
    case "QUANTILE_TYPE_98":
      return QuantileType.QUANTILE_TYPE_98;
    case 8:
    case "QUANTILE_TYPE_99":
      return QuantileType.QUANTILE_TYPE_99;
    case 9:
    case "QUANTILE_TYPE_100":
      return QuantileType.QUANTILE_TYPE_100;
    case -1:
    case "UNRECOGNIZED":
    default:
      return QuantileType.UNRECOGNIZED;
  }
}

export function quantileTypeToJSON(object: QuantileType): string {
  switch (object) {
    case QuantileType.QUANTILE_TYPE_UNSPECIFIED:
      return "QUANTILE_TYPE_UNSPECIFIED";
    case QuantileType.QUANTILE_TYPE_50:
      return "QUANTILE_TYPE_50";
    case QuantileType.QUANTILE_TYPE_75:
      return "QUANTILE_TYPE_75";
    case QuantileType.QUANTILE_TYPE_80:
      return "QUANTILE_TYPE_80";
    case QuantileType.QUANTILE_TYPE_85:
      return "QUANTILE_TYPE_85";
    case QuantileType.QUANTILE_TYPE_90:
      return "QUANTILE_TYPE_90";
    case QuantileType.QUANTILE_TYPE_95:
      return "QUANTILE_TYPE_95";
    case QuantileType.QUANTILE_TYPE_98:
      return "QUANTILE_TYPE_98";
    case QuantileType.QUANTILE_TYPE_99:
      return "QUANTILE_TYPE_99";
    case QuantileType.QUANTILE_TYPE_100:
      return "QUANTILE_TYPE_100";
    default:
      return "UNKNOWN";
  }
}

/** Statistical data aggregated by predefined set of quantiles. */
export interface Quantiles {
  $type: "yandex.cloud.loadtesting.api.v1.common.Quantiles";
  /** 50 percentile (median). */
  q50: number;
  /** 75 percentile. */
  q75: number;
  /** 80 percentile. */
  q80: number;
  /** 85 percentile. */
  q85: number;
  /** 90 percentile. */
  q90: number;
  /** 95 percentile. */
  q95: number;
  /** 98 percentile. */
  q98: number;
  /** 99 percentile. */
  q99: number;
  /** 100 percentile (maximum or minimum). */
  q100: number;
}

const baseQuantiles: object = {
  $type: "yandex.cloud.loadtesting.api.v1.common.Quantiles",
  q50: 0,
  q75: 0,
  q80: 0,
  q85: 0,
  q90: 0,
  q95: 0,
  q98: 0,
  q99: 0,
  q100: 0,
};

export const Quantiles = {
  $type: "yandex.cloud.loadtesting.api.v1.common.Quantiles" as const,

  encode(
    message: Quantiles,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.q50 !== 0) {
      writer.uint32(9).double(message.q50);
    }
    if (message.q75 !== 0) {
      writer.uint32(17).double(message.q75);
    }
    if (message.q80 !== 0) {
      writer.uint32(25).double(message.q80);
    }
    if (message.q85 !== 0) {
      writer.uint32(33).double(message.q85);
    }
    if (message.q90 !== 0) {
      writer.uint32(41).double(message.q90);
    }
    if (message.q95 !== 0) {
      writer.uint32(49).double(message.q95);
    }
    if (message.q98 !== 0) {
      writer.uint32(57).double(message.q98);
    }
    if (message.q99 !== 0) {
      writer.uint32(65).double(message.q99);
    }
    if (message.q100 !== 0) {
      writer.uint32(73).double(message.q100);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Quantiles {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuantiles } as Quantiles;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.q50 = reader.double();
          break;
        case 2:
          message.q75 = reader.double();
          break;
        case 3:
          message.q80 = reader.double();
          break;
        case 4:
          message.q85 = reader.double();
          break;
        case 5:
          message.q90 = reader.double();
          break;
        case 6:
          message.q95 = reader.double();
          break;
        case 7:
          message.q98 = reader.double();
          break;
        case 8:
          message.q99 = reader.double();
          break;
        case 9:
          message.q100 = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Quantiles {
    const message = { ...baseQuantiles } as Quantiles;
    message.q50 =
      object.q50 !== undefined && object.q50 !== null ? Number(object.q50) : 0;
    message.q75 =
      object.q75 !== undefined && object.q75 !== null ? Number(object.q75) : 0;
    message.q80 =
      object.q80 !== undefined && object.q80 !== null ? Number(object.q80) : 0;
    message.q85 =
      object.q85 !== undefined && object.q85 !== null ? Number(object.q85) : 0;
    message.q90 =
      object.q90 !== undefined && object.q90 !== null ? Number(object.q90) : 0;
    message.q95 =
      object.q95 !== undefined && object.q95 !== null ? Number(object.q95) : 0;
    message.q98 =
      object.q98 !== undefined && object.q98 !== null ? Number(object.q98) : 0;
    message.q99 =
      object.q99 !== undefined && object.q99 !== null ? Number(object.q99) : 0;
    message.q100 =
      object.q100 !== undefined && object.q100 !== null
        ? Number(object.q100)
        : 0;
    return message;
  },

  toJSON(message: Quantiles): unknown {
    const obj: any = {};
    message.q50 !== undefined && (obj.q50 = message.q50);
    message.q75 !== undefined && (obj.q75 = message.q75);
    message.q80 !== undefined && (obj.q80 = message.q80);
    message.q85 !== undefined && (obj.q85 = message.q85);
    message.q90 !== undefined && (obj.q90 = message.q90);
    message.q95 !== undefined && (obj.q95 = message.q95);
    message.q98 !== undefined && (obj.q98 = message.q98);
    message.q99 !== undefined && (obj.q99 = message.q99);
    message.q100 !== undefined && (obj.q100 = message.q100);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Quantiles>, I>>(
    object: I
  ): Quantiles {
    const message = { ...baseQuantiles } as Quantiles;
    message.q50 = object.q50 ?? 0;
    message.q75 = object.q75 ?? 0;
    message.q80 = object.q80 ?? 0;
    message.q85 = object.q85 ?? 0;
    message.q90 = object.q90 ?? 0;
    message.q95 = object.q95 ?? 0;
    message.q98 = object.q98 ?? 0;
    message.q99 = object.q99 ?? 0;
    message.q100 = object.q100 ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Quantiles.$type, Quantiles);

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
