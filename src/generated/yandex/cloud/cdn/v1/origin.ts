/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.cdn.v1";

/** An origin. For details about the concept, see [documentation](/docs/cdn/concepts/origins). */
export interface Origin {
  $type: "yandex.cloud.cdn.v1.Origin";
  /** ID of the origin. */
  id: number;
  /** ID of the parent origin group. */
  originGroupId: number;
  /**
   * IP address or Domain name of your origin and the port (if custom).
   * Used if [meta] variant is `common`.
   */
  source: string;
  /**
   * The setting allows to enable or disable an Origin source in the Origins group.
   *
   * It has two possible values:
   *
   * True - The origin is enabled and used as a source for the CDN. An origins
   * group must contain at least one enabled origin.
   * False - The origin is disabled and the CDN is not using it to pull content.
   */
  enabled: boolean;
  /**
   * Specifies whether the origin is used in its origin group as backup.
   * A backup origin is used when one of active origins becomes unavailable.
   */
  backup: boolean;
  /** Set up origin of the content. */
  meta?: OriginMeta;
}

/** Origin parameters. For details about the concept, see [documentation](/docs/cdn/concepts/origins). */
export interface OriginParams {
  $type: "yandex.cloud.cdn.v1.OriginParams";
  /** Source: IP address or Domain name of your origin and the port (if custom). */
  source: string;
  /**
   * The setting allows to enable or disable an Origin source in the Origins group.
   *
   * It has two possible values:
   *
   * True - The origin is enabled and used as a source for the CDN. An origins
   * group must contain at least one enabled origins. False - The origin is disabled
   * and the CDN is not using it to pull content.
   */
  enabled: boolean;
  /**
   * backup option has two possible values:
   *
   *   True - The option is active. The origin will not be used until one of
   *          active origins become unavailable.
   *   False - The option is disabled.
   */
  backup: boolean;
  /** Set up origin of the content. */
  meta?: OriginMeta;
}

/** Origin type. For details about the concept, see [documentation](/docs/cdn/concepts/origins). */
export interface OriginMeta {
  $type: "yandex.cloud.cdn.v1.OriginMeta";
  /** A server with a domain name linked to it */
  common?: OriginNamedMeta | undefined;
  /** An Object Storage bucket not configured as a static site hosting. */
  bucket?: OriginNamedMeta | undefined;
  /** An Object Storage bucket configured as a static site hosting. */
  website?: OriginNamedMeta | undefined;
  /**
   * An L7 load balancer from Application Load Balancer.
   * CDN servers will access the load balancer at one of its IP addresses that must be selected in the origin settings.
   */
  balancer?: OriginBalancerMeta | undefined;
}

/** Origin info. For details about the concept, see [documentation](/docs/cdn/concepts/origins). */
export interface OriginNamedMeta {
  $type: "yandex.cloud.cdn.v1.OriginNamedMeta";
  /** Name of the origin. */
  name: string;
}

/** Application Load Balancer origin info. For details about the concept, see [documentation](/docs/cdn/concepts/origins). */
export interface OriginBalancerMeta {
  $type: "yandex.cloud.cdn.v1.OriginBalancerMeta";
  /** ID of the origin. */
  id: string;
}

const baseOrigin: object = {
  $type: "yandex.cloud.cdn.v1.Origin",
  id: 0,
  originGroupId: 0,
  source: "",
  enabled: false,
  backup: false,
};

export const Origin = {
  $type: "yandex.cloud.cdn.v1.Origin" as const,

  encode(
    message: Origin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.originGroupId !== 0) {
      writer.uint32(16).int64(message.originGroupId);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    if (message.enabled === true) {
      writer.uint32(32).bool(message.enabled);
    }
    if (message.backup === true) {
      writer.uint32(40).bool(message.backup);
    }
    if (message.meta !== undefined) {
      OriginMeta.encode(message.meta, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Origin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrigin } as Origin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.originGroupId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.source = reader.string();
          break;
        case 4:
          message.enabled = reader.bool();
          break;
        case 5:
          message.backup = reader.bool();
          break;
        case 6:
          message.meta = OriginMeta.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Origin {
    const message = { ...baseOrigin } as Origin;
    message.id =
      object.id !== undefined && object.id !== null ? Number(object.id) : 0;
    message.originGroupId =
      object.originGroupId !== undefined && object.originGroupId !== null
        ? Number(object.originGroupId)
        : 0;
    message.source =
      object.source !== undefined && object.source !== null
        ? String(object.source)
        : "";
    message.enabled =
      object.enabled !== undefined && object.enabled !== null
        ? Boolean(object.enabled)
        : false;
    message.backup =
      object.backup !== undefined && object.backup !== null
        ? Boolean(object.backup)
        : false;
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? OriginMeta.fromJSON(object.meta)
        : undefined;
    return message;
  },

  toJSON(message: Origin): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.originGroupId !== undefined &&
      (obj.originGroupId = Math.round(message.originGroupId));
    message.source !== undefined && (obj.source = message.source);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.backup !== undefined && (obj.backup = message.backup);
    message.meta !== undefined &&
      (obj.meta = message.meta ? OriginMeta.toJSON(message.meta) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Origin>, I>>(object: I): Origin {
    const message = { ...baseOrigin } as Origin;
    message.id = object.id ?? 0;
    message.originGroupId = object.originGroupId ?? 0;
    message.source = object.source ?? "";
    message.enabled = object.enabled ?? false;
    message.backup = object.backup ?? false;
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? OriginMeta.fromPartial(object.meta)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Origin.$type, Origin);

const baseOriginParams: object = {
  $type: "yandex.cloud.cdn.v1.OriginParams",
  source: "",
  enabled: false,
  backup: false,
};

export const OriginParams = {
  $type: "yandex.cloud.cdn.v1.OriginParams" as const,

  encode(
    message: OriginParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    if (message.backup === true) {
      writer.uint32(24).bool(message.backup);
    }
    if (message.meta !== undefined) {
      OriginMeta.encode(message.meta, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OriginParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOriginParams } as OriginParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source = reader.string();
          break;
        case 2:
          message.enabled = reader.bool();
          break;
        case 3:
          message.backup = reader.bool();
          break;
        case 4:
          message.meta = OriginMeta.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OriginParams {
    const message = { ...baseOriginParams } as OriginParams;
    message.source =
      object.source !== undefined && object.source !== null
        ? String(object.source)
        : "";
    message.enabled =
      object.enabled !== undefined && object.enabled !== null
        ? Boolean(object.enabled)
        : false;
    message.backup =
      object.backup !== undefined && object.backup !== null
        ? Boolean(object.backup)
        : false;
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? OriginMeta.fromJSON(object.meta)
        : undefined;
    return message;
  },

  toJSON(message: OriginParams): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = message.source);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.backup !== undefined && (obj.backup = message.backup);
    message.meta !== undefined &&
      (obj.meta = message.meta ? OriginMeta.toJSON(message.meta) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OriginParams>, I>>(
    object: I
  ): OriginParams {
    const message = { ...baseOriginParams } as OriginParams;
    message.source = object.source ?? "";
    message.enabled = object.enabled ?? false;
    message.backup = object.backup ?? false;
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? OriginMeta.fromPartial(object.meta)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(OriginParams.$type, OriginParams);

const baseOriginMeta: object = { $type: "yandex.cloud.cdn.v1.OriginMeta" };

export const OriginMeta = {
  $type: "yandex.cloud.cdn.v1.OriginMeta" as const,

  encode(
    message: OriginMeta,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.common !== undefined) {
      OriginNamedMeta.encode(message.common, writer.uint32(10).fork()).ldelim();
    }
    if (message.bucket !== undefined) {
      OriginNamedMeta.encode(message.bucket, writer.uint32(18).fork()).ldelim();
    }
    if (message.website !== undefined) {
      OriginNamedMeta.encode(
        message.website,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.balancer !== undefined) {
      OriginBalancerMeta.encode(
        message.balancer,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OriginMeta {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOriginMeta } as OriginMeta;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.common = OriginNamedMeta.decode(reader, reader.uint32());
          break;
        case 2:
          message.bucket = OriginNamedMeta.decode(reader, reader.uint32());
          break;
        case 3:
          message.website = OriginNamedMeta.decode(reader, reader.uint32());
          break;
        case 4:
          message.balancer = OriginBalancerMeta.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OriginMeta {
    const message = { ...baseOriginMeta } as OriginMeta;
    message.common =
      object.common !== undefined && object.common !== null
        ? OriginNamedMeta.fromJSON(object.common)
        : undefined;
    message.bucket =
      object.bucket !== undefined && object.bucket !== null
        ? OriginNamedMeta.fromJSON(object.bucket)
        : undefined;
    message.website =
      object.website !== undefined && object.website !== null
        ? OriginNamedMeta.fromJSON(object.website)
        : undefined;
    message.balancer =
      object.balancer !== undefined && object.balancer !== null
        ? OriginBalancerMeta.fromJSON(object.balancer)
        : undefined;
    return message;
  },

  toJSON(message: OriginMeta): unknown {
    const obj: any = {};
    message.common !== undefined &&
      (obj.common = message.common
        ? OriginNamedMeta.toJSON(message.common)
        : undefined);
    message.bucket !== undefined &&
      (obj.bucket = message.bucket
        ? OriginNamedMeta.toJSON(message.bucket)
        : undefined);
    message.website !== undefined &&
      (obj.website = message.website
        ? OriginNamedMeta.toJSON(message.website)
        : undefined);
    message.balancer !== undefined &&
      (obj.balancer = message.balancer
        ? OriginBalancerMeta.toJSON(message.balancer)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OriginMeta>, I>>(
    object: I
  ): OriginMeta {
    const message = { ...baseOriginMeta } as OriginMeta;
    message.common =
      object.common !== undefined && object.common !== null
        ? OriginNamedMeta.fromPartial(object.common)
        : undefined;
    message.bucket =
      object.bucket !== undefined && object.bucket !== null
        ? OriginNamedMeta.fromPartial(object.bucket)
        : undefined;
    message.website =
      object.website !== undefined && object.website !== null
        ? OriginNamedMeta.fromPartial(object.website)
        : undefined;
    message.balancer =
      object.balancer !== undefined && object.balancer !== null
        ? OriginBalancerMeta.fromPartial(object.balancer)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(OriginMeta.$type, OriginMeta);

const baseOriginNamedMeta: object = {
  $type: "yandex.cloud.cdn.v1.OriginNamedMeta",
  name: "",
};

export const OriginNamedMeta = {
  $type: "yandex.cloud.cdn.v1.OriginNamedMeta" as const,

  encode(
    message: OriginNamedMeta,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OriginNamedMeta {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOriginNamedMeta } as OriginNamedMeta;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OriginNamedMeta {
    const message = { ...baseOriginNamedMeta } as OriginNamedMeta;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: OriginNamedMeta): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OriginNamedMeta>, I>>(
    object: I
  ): OriginNamedMeta {
    const message = { ...baseOriginNamedMeta } as OriginNamedMeta;
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(OriginNamedMeta.$type, OriginNamedMeta);

const baseOriginBalancerMeta: object = {
  $type: "yandex.cloud.cdn.v1.OriginBalancerMeta",
  id: "",
};

export const OriginBalancerMeta = {
  $type: "yandex.cloud.cdn.v1.OriginBalancerMeta" as const,

  encode(
    message: OriginBalancerMeta,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OriginBalancerMeta {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOriginBalancerMeta } as OriginBalancerMeta;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OriginBalancerMeta {
    const message = { ...baseOriginBalancerMeta } as OriginBalancerMeta;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    return message;
  },

  toJSON(message: OriginBalancerMeta): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OriginBalancerMeta>, I>>(
    object: I
  ): OriginBalancerMeta {
    const message = { ...baseOriginBalancerMeta } as OriginBalancerMeta;
    message.id = object.id ?? "";
    return message;
  },
};

messageTypeRegistry.set(OriginBalancerMeta.$type, OriginBalancerMeta);

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
