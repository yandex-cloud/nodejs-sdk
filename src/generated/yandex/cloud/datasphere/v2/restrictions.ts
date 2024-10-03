/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.datasphere.v2";

export interface RestrictionMeta {
  $type: "yandex.cloud.datasphere.v2.RestrictionMeta";
  /** Name of restriction. */
  name: string;
  /** Value type of restriction. */
  valueType: RestrictionMeta_RestrictionValueType;
}

export enum RestrictionMeta_RestrictionValueType {
  RESTRICTION_VALUE_TYPE_UNSPECIFIED = 0,
  BOOLEAN = 1,
  LONG = 2,
  STRING = 3,
  UNRECOGNIZED = -1,
}

export function restrictionMeta_RestrictionValueTypeFromJSON(
  object: any
): RestrictionMeta_RestrictionValueType {
  switch (object) {
    case 0:
    case "RESTRICTION_VALUE_TYPE_UNSPECIFIED":
      return RestrictionMeta_RestrictionValueType.RESTRICTION_VALUE_TYPE_UNSPECIFIED;
    case 1:
    case "BOOLEAN":
      return RestrictionMeta_RestrictionValueType.BOOLEAN;
    case 2:
    case "LONG":
      return RestrictionMeta_RestrictionValueType.LONG;
    case 3:
    case "STRING":
      return RestrictionMeta_RestrictionValueType.STRING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RestrictionMeta_RestrictionValueType.UNRECOGNIZED;
  }
}

export function restrictionMeta_RestrictionValueTypeToJSON(
  object: RestrictionMeta_RestrictionValueType
): string {
  switch (object) {
    case RestrictionMeta_RestrictionValueType.RESTRICTION_VALUE_TYPE_UNSPECIFIED:
      return "RESTRICTION_VALUE_TYPE_UNSPECIFIED";
    case RestrictionMeta_RestrictionValueType.BOOLEAN:
      return "BOOLEAN";
    case RestrictionMeta_RestrictionValueType.LONG:
      return "LONG";
    case RestrictionMeta_RestrictionValueType.STRING:
      return "STRING";
    default:
      return "UNKNOWN";
  }
}

export interface Restriction {
  $type: "yandex.cloud.datasphere.v2.Restriction";
  /** Name of restriction. */
  name: string;
  /** List of boolean restriction values. Empty if value type is not boolean. */
  boolValue: boolean[];
  /** List of long restriction values. Empty if value type is not long. */
  longValue: number[];
  /** List of string restriction values. Empty if value type is not string. */
  stringValue: string[];
}

export interface GetRestrictionsMetaResponse {
  $type: "yandex.cloud.datasphere.v2.GetRestrictionsMetaResponse";
  /** List of restrictions. */
  restrictionsMeta: RestrictionMeta[];
}

export interface RestrictionsResponse {
  $type: "yandex.cloud.datasphere.v2.RestrictionsResponse";
  /** List of restrictions. */
  restrictions: Restriction[];
}

const baseRestrictionMeta: object = {
  $type: "yandex.cloud.datasphere.v2.RestrictionMeta",
  name: "",
  valueType: 0,
};

export const RestrictionMeta = {
  $type: "yandex.cloud.datasphere.v2.RestrictionMeta" as const,

  encode(
    message: RestrictionMeta,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.valueType !== 0) {
      writer.uint32(16).int32(message.valueType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestrictionMeta {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRestrictionMeta } as RestrictionMeta;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.valueType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RestrictionMeta {
    const message = { ...baseRestrictionMeta } as RestrictionMeta;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.valueType =
      object.valueType !== undefined && object.valueType !== null
        ? restrictionMeta_RestrictionValueTypeFromJSON(object.valueType)
        : 0;
    return message;
  },

  toJSON(message: RestrictionMeta): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.valueType !== undefined &&
      (obj.valueType = restrictionMeta_RestrictionValueTypeToJSON(
        message.valueType
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RestrictionMeta>, I>>(
    object: I
  ): RestrictionMeta {
    const message = { ...baseRestrictionMeta } as RestrictionMeta;
    message.name = object.name ?? "";
    message.valueType = object.valueType ?? 0;
    return message;
  },
};

messageTypeRegistry.set(RestrictionMeta.$type, RestrictionMeta);

const baseRestriction: object = {
  $type: "yandex.cloud.datasphere.v2.Restriction",
  name: "",
  boolValue: false,
  longValue: 0,
  stringValue: "",
};

export const Restriction = {
  $type: "yandex.cloud.datasphere.v2.Restriction" as const,

  encode(
    message: Restriction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    writer.uint32(18).fork();
    for (const v of message.boolValue) {
      writer.bool(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.longValue) {
      writer.int64(v);
    }
    writer.ldelim();
    for (const v of message.stringValue) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Restriction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRestriction } as Restriction;
    message.boolValue = [];
    message.longValue = [];
    message.stringValue = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.boolValue.push(reader.bool());
            }
          } else {
            message.boolValue.push(reader.bool());
          }
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.longValue.push(longToNumber(reader.int64() as Long));
            }
          } else {
            message.longValue.push(longToNumber(reader.int64() as Long));
          }
          break;
        case 4:
          message.stringValue.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Restriction {
    const message = { ...baseRestriction } as Restriction;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.boolValue = (object.boolValue ?? []).map((e: any) => Boolean(e));
    message.longValue = (object.longValue ?? []).map((e: any) => Number(e));
    message.stringValue = (object.stringValue ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: Restriction): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.boolValue) {
      obj.boolValue = message.boolValue.map((e) => e);
    } else {
      obj.boolValue = [];
    }
    if (message.longValue) {
      obj.longValue = message.longValue.map((e) => Math.round(e));
    } else {
      obj.longValue = [];
    }
    if (message.stringValue) {
      obj.stringValue = message.stringValue.map((e) => e);
    } else {
      obj.stringValue = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Restriction>, I>>(
    object: I
  ): Restriction {
    const message = { ...baseRestriction } as Restriction;
    message.name = object.name ?? "";
    message.boolValue = object.boolValue?.map((e) => e) || [];
    message.longValue = object.longValue?.map((e) => e) || [];
    message.stringValue = object.stringValue?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Restriction.$type, Restriction);

const baseGetRestrictionsMetaResponse: object = {
  $type: "yandex.cloud.datasphere.v2.GetRestrictionsMetaResponse",
};

export const GetRestrictionsMetaResponse = {
  $type: "yandex.cloud.datasphere.v2.GetRestrictionsMetaResponse" as const,

  encode(
    message: GetRestrictionsMetaResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.restrictionsMeta) {
      RestrictionMeta.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetRestrictionsMetaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetRestrictionsMetaResponse,
    } as GetRestrictionsMetaResponse;
    message.restrictionsMeta = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.restrictionsMeta.push(
            RestrictionMeta.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRestrictionsMetaResponse {
    const message = {
      ...baseGetRestrictionsMetaResponse,
    } as GetRestrictionsMetaResponse;
    message.restrictionsMeta = (object.restrictionsMeta ?? []).map((e: any) =>
      RestrictionMeta.fromJSON(e)
    );
    return message;
  },

  toJSON(message: GetRestrictionsMetaResponse): unknown {
    const obj: any = {};
    if (message.restrictionsMeta) {
      obj.restrictionsMeta = message.restrictionsMeta.map((e) =>
        e ? RestrictionMeta.toJSON(e) : undefined
      );
    } else {
      obj.restrictionsMeta = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetRestrictionsMetaResponse>, I>>(
    object: I
  ): GetRestrictionsMetaResponse {
    const message = {
      ...baseGetRestrictionsMetaResponse,
    } as GetRestrictionsMetaResponse;
    message.restrictionsMeta =
      object.restrictionsMeta?.map((e) => RestrictionMeta.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  GetRestrictionsMetaResponse.$type,
  GetRestrictionsMetaResponse
);

const baseRestrictionsResponse: object = {
  $type: "yandex.cloud.datasphere.v2.RestrictionsResponse",
};

export const RestrictionsResponse = {
  $type: "yandex.cloud.datasphere.v2.RestrictionsResponse" as const,

  encode(
    message: RestrictionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.restrictions) {
      Restriction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RestrictionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRestrictionsResponse } as RestrictionsResponse;
    message.restrictions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.restrictions.push(
            Restriction.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RestrictionsResponse {
    const message = { ...baseRestrictionsResponse } as RestrictionsResponse;
    message.restrictions = (object.restrictions ?? []).map((e: any) =>
      Restriction.fromJSON(e)
    );
    return message;
  },

  toJSON(message: RestrictionsResponse): unknown {
    const obj: any = {};
    if (message.restrictions) {
      obj.restrictions = message.restrictions.map((e) =>
        e ? Restriction.toJSON(e) : undefined
      );
    } else {
      obj.restrictions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RestrictionsResponse>, I>>(
    object: I
  ): RestrictionsResponse {
    const message = { ...baseRestrictionsResponse } as RestrictionsResponse;
    message.restrictions =
      object.restrictions?.map((e) => Restriction.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(RestrictionsResponse.$type, RestrictionsResponse);

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
