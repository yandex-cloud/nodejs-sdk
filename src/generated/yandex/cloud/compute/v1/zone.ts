/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.compute.v1";

/** Availability zone. For more information, see [Availability zones](/docs/overview/concepts/geo-scope). */
export interface Zone {
  $type: "yandex.cloud.compute.v1.Zone";
  /** ID of the zone. */
  id: string;
  /** ID of the region. */
  regionId: string;
  /** Status of the zone. */
  status: Zone_Status;
}

export enum Zone_Status {
  STATUS_UNSPECIFIED = 0,
  /** UP - Zone is available. You can access the resources allocated in this zone. */
  UP = 1,
  /** DOWN - Zone is not available. */
  DOWN = 2,
  UNRECOGNIZED = -1,
}

export function zone_StatusFromJSON(object: any): Zone_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Zone_Status.STATUS_UNSPECIFIED;
    case 1:
    case "UP":
      return Zone_Status.UP;
    case 2:
    case "DOWN":
      return Zone_Status.DOWN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Zone_Status.UNRECOGNIZED;
  }
}

export function zone_StatusToJSON(object: Zone_Status): string {
  switch (object) {
    case Zone_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Zone_Status.UP:
      return "UP";
    case Zone_Status.DOWN:
      return "DOWN";
    default:
      return "UNKNOWN";
  }
}

const baseZone: object = {
  $type: "yandex.cloud.compute.v1.Zone",
  id: "",
  regionId: "",
  status: 0,
};

export const Zone = {
  $type: "yandex.cloud.compute.v1.Zone" as const,

  encode(message: Zone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.regionId !== "") {
      writer.uint32(18).string(message.regionId);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Zone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseZone } as Zone;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.regionId = reader.string();
          break;
        case 3:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Zone {
    const message = { ...baseZone } as Zone;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.regionId =
      object.regionId !== undefined && object.regionId !== null
        ? String(object.regionId)
        : "";
    message.status =
      object.status !== undefined && object.status !== null
        ? zone_StatusFromJSON(object.status)
        : 0;
    return message;
  },

  toJSON(message: Zone): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.status !== undefined &&
      (obj.status = zone_StatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Zone>, I>>(object: I): Zone {
    const message = { ...baseZone } as Zone;
    message.id = object.id ?? "";
    message.regionId = object.regionId ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Zone.$type, Zone);

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
