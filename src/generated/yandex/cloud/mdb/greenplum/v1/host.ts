/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Resources } from "../../../../../yandex/cloud/mdb/greenplum/v1/config";

export const protobufPackage = "yandex.cloud.mdb.greenplum.v1";

export interface Host {
  $type: "yandex.cloud.mdb.greenplum.v1.Host";
  /**
   * Name of the Greenplum host. The host name is assigned by MDB at creation time, and cannot be changed.
   * 1-63 characters long.
   *
   * The name is unique across all existing MDB hosts in Yandex.Cloud, as it defines the FQDN of the host.
   */
  name: string;
  /** ID of the Greenplum cluster. The ID is assigned by MDB at creation time. */
  clusterId: string;
  /** ID of the availability zone where the Greenplum host resides. */
  zoneId: string;
  /** Type of the host. */
  type: Host_Type;
  /** Resources allocated to the Greenplum host. */
  resources?: Resources;
  /** Status code of the aggregated health of the host. */
  health: Host_Health;
  /** ID of the subnet that the host belongs to. */
  subnetId: string;
  /** Flag showing public IP assignment status to this host. */
  assignPublicIp: boolean;
}

export enum Host_Type {
  TYPE_UNSPECIFIED = 0,
  /** MASTER - Greenplum master host. */
  MASTER = 1,
  /** REPLICA - Greenplum master host. */
  REPLICA = 2,
  /** SEGMENT - Greenplum segment host. */
  SEGMENT = 3,
  UNRECOGNIZED = -1,
}

export function host_TypeFromJSON(object: any): Host_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Host_Type.TYPE_UNSPECIFIED;
    case 1:
    case "MASTER":
      return Host_Type.MASTER;
    case 2:
    case "REPLICA":
      return Host_Type.REPLICA;
    case 3:
    case "SEGMENT":
      return Host_Type.SEGMENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Host_Type.UNRECOGNIZED;
  }
}

export function host_TypeToJSON(object: Host_Type): string {
  switch (object) {
    case Host_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case Host_Type.MASTER:
      return "MASTER";
    case Host_Type.REPLICA:
      return "REPLICA";
    case Host_Type.SEGMENT:
      return "SEGMENT";
    default:
      return "UNKNOWN";
  }
}

export enum Host_Health {
  /** UNKNOWN - Health of the host is unknown. */
  UNKNOWN = 0,
  /** ALIVE - The host is performing all its functions normally. */
  ALIVE = 1,
  /** DEAD - The host is inoperable, and cannot perform any of its essential functions. */
  DEAD = 2,
  /** DEGRADED - The host is working below capacity or not fully functional. */
  DEGRADED = 3,
  /** UNBALANCED - One or more segments are not in prefer role. */
  UNBALANCED = 4,
  UNRECOGNIZED = -1,
}

export function host_HealthFromJSON(object: any): Host_Health {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return Host_Health.UNKNOWN;
    case 1:
    case "ALIVE":
      return Host_Health.ALIVE;
    case 2:
    case "DEAD":
      return Host_Health.DEAD;
    case 3:
    case "DEGRADED":
      return Host_Health.DEGRADED;
    case 4:
    case "UNBALANCED":
      return Host_Health.UNBALANCED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Host_Health.UNRECOGNIZED;
  }
}

export function host_HealthToJSON(object: Host_Health): string {
  switch (object) {
    case Host_Health.UNKNOWN:
      return "UNKNOWN";
    case Host_Health.ALIVE:
      return "ALIVE";
    case Host_Health.DEAD:
      return "DEAD";
    case Host_Health.DEGRADED:
      return "DEGRADED";
    case Host_Health.UNBALANCED:
      return "UNBALANCED";
    default:
      return "UNKNOWN";
  }
}

const baseHost: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.Host",
  name: "",
  clusterId: "",
  zoneId: "",
  type: 0,
  health: 0,
  subnetId: "",
  assignPublicIp: false,
};

export const Host = {
  $type: "yandex.cloud.mdb.greenplum.v1.Host" as const,

  encode(message: Host, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.clusterId !== "") {
      writer.uint32(18).string(message.clusterId);
    }
    if (message.zoneId !== "") {
      writer.uint32(26).string(message.zoneId);
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(42).fork()).ldelim();
    }
    if (message.health !== 0) {
      writer.uint32(48).int32(message.health);
    }
    if (message.subnetId !== "") {
      writer.uint32(58).string(message.subnetId);
    }
    if (message.assignPublicIp === true) {
      writer.uint32(64).bool(message.assignPublicIp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Host {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHost } as Host;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.clusterId = reader.string();
          break;
        case 3:
          message.zoneId = reader.string();
          break;
        case 4:
          message.type = reader.int32() as any;
          break;
        case 5:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 6:
          message.health = reader.int32() as any;
          break;
        case 7:
          message.subnetId = reader.string();
          break;
        case 8:
          message.assignPublicIp = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Host {
    const message = { ...baseHost } as Host;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.zoneId =
      object.zoneId !== undefined && object.zoneId !== null
        ? String(object.zoneId)
        : "";
    message.type =
      object.type !== undefined && object.type !== null
        ? host_TypeFromJSON(object.type)
        : 0;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    message.health =
      object.health !== undefined && object.health !== null
        ? host_HealthFromJSON(object.health)
        : 0;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.assignPublicIp =
      object.assignPublicIp !== undefined && object.assignPublicIp !== null
        ? Boolean(object.assignPublicIp)
        : false;
    return message;
  },

  toJSON(message: Host): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.type !== undefined && (obj.type = host_TypeToJSON(message.type));
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    message.health !== undefined &&
      (obj.health = host_HealthToJSON(message.health));
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    message.assignPublicIp !== undefined &&
      (obj.assignPublicIp = message.assignPublicIp);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Host>, I>>(object: I): Host {
    const message = { ...baseHost } as Host;
    message.name = object.name ?? "";
    message.clusterId = object.clusterId ?? "";
    message.zoneId = object.zoneId ?? "";
    message.type = object.type ?? 0;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    message.health = object.health ?? 0;
    message.subnetId = object.subnetId ?? "";
    message.assignPublicIp = object.assignPublicIp ?? false;
    return message;
  },
};

messageTypeRegistry.set(Host.$type, Host);

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
