/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.dataproc.v1";

export enum Health {
  /** HEALTH_UNKNOWN - State of the cluster is unknown ([Host.health] for every host in the cluster is UNKNOWN). */
  HEALTH_UNKNOWN = 0,
  /** ALIVE - Cluster is alive and well ([Host.health] for every host in the cluster is ALIVE). */
  ALIVE = 1,
  /** DEAD - Cluster is inoperable ([Host.health] for every host in the cluster is DEAD). */
  DEAD = 2,
  /** DEGRADED - Cluster is working below capacity ([Host.health] for at least one host in the cluster is not ALIVE). */
  DEGRADED = 3,
  UNRECOGNIZED = -1,
}

export function healthFromJSON(object: any): Health {
  switch (object) {
    case 0:
    case "HEALTH_UNKNOWN":
      return Health.HEALTH_UNKNOWN;
    case 1:
    case "ALIVE":
      return Health.ALIVE;
    case 2:
    case "DEAD":
      return Health.DEAD;
    case 3:
    case "DEGRADED":
      return Health.DEGRADED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Health.UNRECOGNIZED;
  }
}

export function healthToJSON(object: Health): string {
  switch (object) {
    case Health.HEALTH_UNKNOWN:
      return "HEALTH_UNKNOWN";
    case Health.ALIVE:
      return "ALIVE";
    case Health.DEAD:
      return "DEAD";
    case Health.DEGRADED:
      return "DEGRADED";
    default:
      return "UNKNOWN";
  }
}

export interface Resources {
  $type: "yandex.cloud.dataproc.v1.Resources";
  /**
   * ID of the resource preset for computational resources available to a host (CPU, memory etc.).
   * All available presets are listed in the [documentation](/docs/data-proc/concepts/instance-types).
   */
  resourcePresetId: string;
  /**
   * Type of the storage environment for the host.
   * Possible values:
   * * network-hdd - network HDD drive,
   * * network-ssd - network SSD drive.
   */
  diskTypeId: string;
  /** Volume of the storage available to a host, in bytes. */
  diskSize: number;
}

const baseResources: object = {
  $type: "yandex.cloud.dataproc.v1.Resources",
  resourcePresetId: "",
  diskTypeId: "",
  diskSize: 0,
};

export const Resources = {
  $type: "yandex.cloud.dataproc.v1.Resources" as const,

  encode(
    message: Resources,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resourcePresetId !== "") {
      writer.uint32(10).string(message.resourcePresetId);
    }
    if (message.diskTypeId !== "") {
      writer.uint32(18).string(message.diskTypeId);
    }
    if (message.diskSize !== 0) {
      writer.uint32(24).int64(message.diskSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resources {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResources } as Resources;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourcePresetId = reader.string();
          break;
        case 2:
          message.diskTypeId = reader.string();
          break;
        case 3:
          message.diskSize = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Resources {
    const message = { ...baseResources } as Resources;
    message.resourcePresetId =
      object.resourcePresetId !== undefined && object.resourcePresetId !== null
        ? String(object.resourcePresetId)
        : "";
    message.diskTypeId =
      object.diskTypeId !== undefined && object.diskTypeId !== null
        ? String(object.diskTypeId)
        : "";
    message.diskSize =
      object.diskSize !== undefined && object.diskSize !== null
        ? Number(object.diskSize)
        : 0;
    return message;
  },

  toJSON(message: Resources): unknown {
    const obj: any = {};
    message.resourcePresetId !== undefined &&
      (obj.resourcePresetId = message.resourcePresetId);
    message.diskTypeId !== undefined && (obj.diskTypeId = message.diskTypeId);
    message.diskSize !== undefined &&
      (obj.diskSize = Math.round(message.diskSize));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Resources>, I>>(
    object: I
  ): Resources {
    const message = { ...baseResources } as Resources;
    message.resourcePresetId = object.resourcePresetId ?? "";
    message.diskTypeId = object.diskTypeId ?? "";
    message.diskSize = object.diskSize ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Resources.$type, Resources);

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
