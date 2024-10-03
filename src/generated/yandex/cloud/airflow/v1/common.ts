/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.airflow.v1";

export enum Health {
  /** HEALTH_UNKNOWN - Cluster is in unknown state (we have no data). */
  HEALTH_UNKNOWN = 0,
  /** ALIVE - Cluster is alive and well. */
  ALIVE = 1,
  /** DEAD - Cluster is inoperable (it cannot perform any of its essential functions). */
  DEAD = 2,
  /** DEGRADED - Cluster is partially alive (it can perform some of its essential functions). */
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
  $type: "yandex.cloud.airflow.v1.Resources";
  /** ID of the preset for computational resources available to an instance (CPU, memory etc.). */
  resourcePresetId: string;
}

const baseResources: object = {
  $type: "yandex.cloud.airflow.v1.Resources",
  resourcePresetId: "",
};

export const Resources = {
  $type: "yandex.cloud.airflow.v1.Resources" as const,

  encode(
    message: Resources,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resourcePresetId !== "") {
      writer.uint32(26).string(message.resourcePresetId);
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
        case 3:
          message.resourcePresetId = reader.string();
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
    return message;
  },

  toJSON(message: Resources): unknown {
    const obj: any = {};
    message.resourcePresetId !== undefined &&
      (obj.resourcePresetId = message.resourcePresetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Resources>, I>>(
    object: I
  ): Resources {
    const message = { ...baseResources } as Resources;
    message.resourcePresetId = object.resourcePresetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Resources.$type, Resources);

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
