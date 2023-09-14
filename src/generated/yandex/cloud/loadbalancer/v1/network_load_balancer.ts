/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { HealthCheck } from "../../../../yandex/cloud/loadbalancer/v1/health_check";

export const protobufPackage = "yandex.cloud.loadbalancer.v1";

/**
 * IP version of the addresses that the load balancer works with.
 * Only IPv4 is currently available.
 */
export enum IpVersion {
  IP_VERSION_UNSPECIFIED = 0,
  /** IPV4 - IPv4 */
  IPV4 = 1,
  /** IPV6 - IPv6 */
  IPV6 = 2,
  UNRECOGNIZED = -1,
}

export function ipVersionFromJSON(object: any): IpVersion {
  switch (object) {
    case 0:
    case "IP_VERSION_UNSPECIFIED":
      return IpVersion.IP_VERSION_UNSPECIFIED;
    case 1:
    case "IPV4":
      return IpVersion.IPV4;
    case 2:
    case "IPV6":
      return IpVersion.IPV6;
    case -1:
    case "UNRECOGNIZED":
    default:
      return IpVersion.UNRECOGNIZED;
  }
}

export function ipVersionToJSON(object: IpVersion): string {
  switch (object) {
    case IpVersion.IP_VERSION_UNSPECIFIED:
      return "IP_VERSION_UNSPECIFIED";
    case IpVersion.IPV4:
      return "IPV4";
    case IpVersion.IPV6:
      return "IPV6";
    default:
      return "UNKNOWN";
  }
}

/** A NetworkLoadBalancer resource. For more information, see [Network Load Balancer](/docs/network-load-balancer/concepts). */
export interface NetworkLoadBalancer {
  $type: "yandex.cloud.loadbalancer.v1.NetworkLoadBalancer";
  /** ID of the network load balancer. */
  id: string;
  /** ID of the folder that the network load balancer belongs to. */
  folderId: string;
  /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  createdAt?: Date;
  /** Name of the network load balancer. The name is unique within the folder. 3-63 characters long. */
  name: string;
  /** Optional description of the network load balancer. 0-256 characters long. */
  description: string;
  /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
  labels: { [key: string]: string };
  /** ID of the region that the network load balancer belongs to. */
  regionId: string;
  /** Status of the network load balancer. */
  status: NetworkLoadBalancer_Status;
  /** Type of the network load balancer. Only external network load balancers are available now. */
  type: NetworkLoadBalancer_Type;
  /** Type of the session affinity. Only 5-tuple affinity is available now. */
  sessionAffinity: NetworkLoadBalancer_SessionAffinity;
  /** List of listeners for the network load balancer. */
  listeners: Listener[];
  /** List of target groups attached to the network load balancer. */
  attachedTargetGroups: AttachedTargetGroup[];
  /** Specifies if network load balancer protected from deletion. */
  deletionProtection: boolean;
}

export enum NetworkLoadBalancer_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - Network load balancer is being created. */
  CREATING = 1,
  /** STARTING - Network load balancer is being started. */
  STARTING = 2,
  /** ACTIVE - Network load balancer is active and sends traffic to the targets. */
  ACTIVE = 3,
  /** STOPPING - Network load balancer is being stopped. */
  STOPPING = 4,
  /** STOPPED - Network load balancer is stopped and doesn't send traffic to the targets. */
  STOPPED = 5,
  /** DELETING - Network load balancer is being deleted. */
  DELETING = 6,
  /**
   * INACTIVE - The load balancer doesn't have any listeners or target groups, or
   * attached target groups are empty. The load balancer doesn't perform any health checks or
   * send traffic in this state.
   */
  INACTIVE = 7,
  UNRECOGNIZED = -1,
}

export function networkLoadBalancer_StatusFromJSON(
  object: any
): NetworkLoadBalancer_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return NetworkLoadBalancer_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return NetworkLoadBalancer_Status.CREATING;
    case 2:
    case "STARTING":
      return NetworkLoadBalancer_Status.STARTING;
    case 3:
    case "ACTIVE":
      return NetworkLoadBalancer_Status.ACTIVE;
    case 4:
    case "STOPPING":
      return NetworkLoadBalancer_Status.STOPPING;
    case 5:
    case "STOPPED":
      return NetworkLoadBalancer_Status.STOPPED;
    case 6:
    case "DELETING":
      return NetworkLoadBalancer_Status.DELETING;
    case 7:
    case "INACTIVE":
      return NetworkLoadBalancer_Status.INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NetworkLoadBalancer_Status.UNRECOGNIZED;
  }
}

export function networkLoadBalancer_StatusToJSON(
  object: NetworkLoadBalancer_Status
): string {
  switch (object) {
    case NetworkLoadBalancer_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case NetworkLoadBalancer_Status.CREATING:
      return "CREATING";
    case NetworkLoadBalancer_Status.STARTING:
      return "STARTING";
    case NetworkLoadBalancer_Status.ACTIVE:
      return "ACTIVE";
    case NetworkLoadBalancer_Status.STOPPING:
      return "STOPPING";
    case NetworkLoadBalancer_Status.STOPPED:
      return "STOPPED";
    case NetworkLoadBalancer_Status.DELETING:
      return "DELETING";
    case NetworkLoadBalancer_Status.INACTIVE:
      return "INACTIVE";
    default:
      return "UNKNOWN";
  }
}

export enum NetworkLoadBalancer_Type {
  TYPE_UNSPECIFIED = 0,
  /** EXTERNAL - External network load balancer. */
  EXTERNAL = 1,
  /** INTERNAL - Internal network load balancer. */
  INTERNAL = 2,
  UNRECOGNIZED = -1,
}

export function networkLoadBalancer_TypeFromJSON(
  object: any
): NetworkLoadBalancer_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return NetworkLoadBalancer_Type.TYPE_UNSPECIFIED;
    case 1:
    case "EXTERNAL":
      return NetworkLoadBalancer_Type.EXTERNAL;
    case 2:
    case "INTERNAL":
      return NetworkLoadBalancer_Type.INTERNAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NetworkLoadBalancer_Type.UNRECOGNIZED;
  }
}

export function networkLoadBalancer_TypeToJSON(
  object: NetworkLoadBalancer_Type
): string {
  switch (object) {
    case NetworkLoadBalancer_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case NetworkLoadBalancer_Type.EXTERNAL:
      return "EXTERNAL";
    case NetworkLoadBalancer_Type.INTERNAL:
      return "INTERNAL";
    default:
      return "UNKNOWN";
  }
}

/**
 * Type of session affinity. Only 5-tuple affinity is currently available.
 * For more information, see [Load Balancer concepts](/docs/network-load-balancer/concepts/).
 */
export enum NetworkLoadBalancer_SessionAffinity {
  SESSION_AFFINITY_UNSPECIFIED = 0,
  /** CLIENT_IP_PORT_PROTO - 5-tuple affinity. */
  CLIENT_IP_PORT_PROTO = 1,
  UNRECOGNIZED = -1,
}

export function networkLoadBalancer_SessionAffinityFromJSON(
  object: any
): NetworkLoadBalancer_SessionAffinity {
  switch (object) {
    case 0:
    case "SESSION_AFFINITY_UNSPECIFIED":
      return NetworkLoadBalancer_SessionAffinity.SESSION_AFFINITY_UNSPECIFIED;
    case 1:
    case "CLIENT_IP_PORT_PROTO":
      return NetworkLoadBalancer_SessionAffinity.CLIENT_IP_PORT_PROTO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NetworkLoadBalancer_SessionAffinity.UNRECOGNIZED;
  }
}

export function networkLoadBalancer_SessionAffinityToJSON(
  object: NetworkLoadBalancer_SessionAffinity
): string {
  switch (object) {
    case NetworkLoadBalancer_SessionAffinity.SESSION_AFFINITY_UNSPECIFIED:
      return "SESSION_AFFINITY_UNSPECIFIED";
    case NetworkLoadBalancer_SessionAffinity.CLIENT_IP_PORT_PROTO:
      return "CLIENT_IP_PORT_PROTO";
    default:
      return "UNKNOWN";
  }
}

export interface NetworkLoadBalancer_LabelsEntry {
  $type: "yandex.cloud.loadbalancer.v1.NetworkLoadBalancer.LabelsEntry";
  key: string;
  value: string;
}

/** An AttachedTargetGroup resource. For more information, see [Targets and groups](/docs/network-load-balancer/concepts/target-resources). */
export interface AttachedTargetGroup {
  $type: "yandex.cloud.loadbalancer.v1.AttachedTargetGroup";
  /** ID of the target group. */
  targetGroupId: string;
  /**
   * A health check to perform on the target group.
   * For now we accept only one health check per AttachedTargetGroup.
   */
  healthChecks: HealthCheck[];
}

/** A Listener resource. For more information, see [Listener](/docs/network-load-balancer/concepts/listener) */
export interface Listener {
  $type: "yandex.cloud.loadbalancer.v1.Listener";
  /** Name of the listener. The name must be unique for each listener on a single load balancer. 3-63 characters long. */
  name: string;
  /** IP address for the listener. */
  address: string;
  /** Port. */
  port: number;
  /** Network protocol for incoming traffic. */
  protocol: Listener_Protocol;
  /** Port of a target. */
  targetPort: number;
  /** ID of the subnet. */
  subnetId: string;
  /** IP version of the external address. */
  ipVersion: IpVersion;
}

/** Network protocol to use. */
export enum Listener_Protocol {
  PROTOCOL_UNSPECIFIED = 0,
  TCP = 1,
  UDP = 2,
  UNRECOGNIZED = -1,
}

export function listener_ProtocolFromJSON(object: any): Listener_Protocol {
  switch (object) {
    case 0:
    case "PROTOCOL_UNSPECIFIED":
      return Listener_Protocol.PROTOCOL_UNSPECIFIED;
    case 1:
    case "TCP":
      return Listener_Protocol.TCP;
    case 2:
    case "UDP":
      return Listener_Protocol.UDP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Listener_Protocol.UNRECOGNIZED;
  }
}

export function listener_ProtocolToJSON(object: Listener_Protocol): string {
  switch (object) {
    case Listener_Protocol.PROTOCOL_UNSPECIFIED:
      return "PROTOCOL_UNSPECIFIED";
    case Listener_Protocol.TCP:
      return "TCP";
    case Listener_Protocol.UDP:
      return "UDP";
    default:
      return "UNKNOWN";
  }
}

/** State of the target that was returned after the last health check. */
export interface TargetState {
  $type: "yandex.cloud.loadbalancer.v1.TargetState";
  /** ID of the subnet that the target is connected to. */
  subnetId: string;
  /** IP address of the target. */
  address: string;
  /** Status of the target. */
  status: TargetState_Status;
}

/** Status of the target. */
export enum TargetState_Status {
  STATUS_UNSPECIFIED = 0,
  /** INITIAL - The network load balancer is setting up health checks for this target. */
  INITIAL = 1,
  /** HEALTHY - Health check passed and the target is ready to receive traffic. */
  HEALTHY = 2,
  /** UNHEALTHY - Health check failed and the target is not receiving traffic. */
  UNHEALTHY = 3,
  /** DRAINING - Target is being deleted and the network load balancer is no longer sending traffic to this target. */
  DRAINING = 4,
  /** INACTIVE - The network load balancer is stopped and not performing health checks on this target. */
  INACTIVE = 5,
  UNRECOGNIZED = -1,
}

export function targetState_StatusFromJSON(object: any): TargetState_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return TargetState_Status.STATUS_UNSPECIFIED;
    case 1:
    case "INITIAL":
      return TargetState_Status.INITIAL;
    case 2:
    case "HEALTHY":
      return TargetState_Status.HEALTHY;
    case 3:
    case "UNHEALTHY":
      return TargetState_Status.UNHEALTHY;
    case 4:
    case "DRAINING":
      return TargetState_Status.DRAINING;
    case 5:
    case "INACTIVE":
      return TargetState_Status.INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TargetState_Status.UNRECOGNIZED;
  }
}

export function targetState_StatusToJSON(object: TargetState_Status): string {
  switch (object) {
    case TargetState_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case TargetState_Status.INITIAL:
      return "INITIAL";
    case TargetState_Status.HEALTHY:
      return "HEALTHY";
    case TargetState_Status.UNHEALTHY:
      return "UNHEALTHY";
    case TargetState_Status.DRAINING:
      return "DRAINING";
    case TargetState_Status.INACTIVE:
      return "INACTIVE";
    default:
      return "UNKNOWN";
  }
}

const baseNetworkLoadBalancer: object = {
  $type: "yandex.cloud.loadbalancer.v1.NetworkLoadBalancer",
  id: "",
  folderId: "",
  name: "",
  description: "",
  regionId: "",
  status: 0,
  type: 0,
  sessionAffinity: 0,
  deletionProtection: false,
};

export const NetworkLoadBalancer = {
  $type: "yandex.cloud.loadbalancer.v1.NetworkLoadBalancer" as const,

  encode(
    message: NetworkLoadBalancer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      NetworkLoadBalancer_LabelsEntry.encode(
        {
          $type: "yandex.cloud.loadbalancer.v1.NetworkLoadBalancer.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.regionId !== "") {
      writer.uint32(58).string(message.regionId);
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    if (message.type !== 0) {
      writer.uint32(80).int32(message.type);
    }
    if (message.sessionAffinity !== 0) {
      writer.uint32(88).int32(message.sessionAffinity);
    }
    for (const v of message.listeners) {
      Listener.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.attachedTargetGroups) {
      AttachedTargetGroup.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(112).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkLoadBalancer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNetworkLoadBalancer } as NetworkLoadBalancer;
    message.labels = {};
    message.listeners = [];
    message.attachedTargetGroups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.folderId = reader.string();
          break;
        case 3:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          const entry6 = NetworkLoadBalancer_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.regionId = reader.string();
          break;
        case 9:
          message.status = reader.int32() as any;
          break;
        case 10:
          message.type = reader.int32() as any;
          break;
        case 11:
          message.sessionAffinity = reader.int32() as any;
          break;
        case 12:
          message.listeners.push(Listener.decode(reader, reader.uint32()));
          break;
        case 13:
          message.attachedTargetGroups.push(
            AttachedTargetGroup.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.deletionProtection = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NetworkLoadBalancer {
    const message = { ...baseNetworkLoadBalancer } as NetworkLoadBalancer;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.regionId =
      object.regionId !== undefined && object.regionId !== null
        ? String(object.regionId)
        : "";
    message.status =
      object.status !== undefined && object.status !== null
        ? networkLoadBalancer_StatusFromJSON(object.status)
        : 0;
    message.type =
      object.type !== undefined && object.type !== null
        ? networkLoadBalancer_TypeFromJSON(object.type)
        : 0;
    message.sessionAffinity =
      object.sessionAffinity !== undefined && object.sessionAffinity !== null
        ? networkLoadBalancer_SessionAffinityFromJSON(object.sessionAffinity)
        : 0;
    message.listeners = (object.listeners ?? []).map((e: any) =>
      Listener.fromJSON(e)
    );
    message.attachedTargetGroups = (object.attachedTargetGroups ?? []).map(
      (e: any) => AttachedTargetGroup.fromJSON(e)
    );
    message.deletionProtection =
      object.deletionProtection !== undefined &&
      object.deletionProtection !== null
        ? Boolean(object.deletionProtection)
        : false;
    return message;
  },

  toJSON(message: NetworkLoadBalancer): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.status !== undefined &&
      (obj.status = networkLoadBalancer_StatusToJSON(message.status));
    message.type !== undefined &&
      (obj.type = networkLoadBalancer_TypeToJSON(message.type));
    message.sessionAffinity !== undefined &&
      (obj.sessionAffinity = networkLoadBalancer_SessionAffinityToJSON(
        message.sessionAffinity
      ));
    if (message.listeners) {
      obj.listeners = message.listeners.map((e) =>
        e ? Listener.toJSON(e) : undefined
      );
    } else {
      obj.listeners = [];
    }
    if (message.attachedTargetGroups) {
      obj.attachedTargetGroups = message.attachedTargetGroups.map((e) =>
        e ? AttachedTargetGroup.toJSON(e) : undefined
      );
    } else {
      obj.attachedTargetGroups = [];
    }
    message.deletionProtection !== undefined &&
      (obj.deletionProtection = message.deletionProtection);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NetworkLoadBalancer>, I>>(
    object: I
  ): NetworkLoadBalancer {
    const message = { ...baseNetworkLoadBalancer } as NetworkLoadBalancer;
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.regionId = object.regionId ?? "";
    message.status = object.status ?? 0;
    message.type = object.type ?? 0;
    message.sessionAffinity = object.sessionAffinity ?? 0;
    message.listeners =
      object.listeners?.map((e) => Listener.fromPartial(e)) || [];
    message.attachedTargetGroups =
      object.attachedTargetGroups?.map((e) =>
        AttachedTargetGroup.fromPartial(e)
      ) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(NetworkLoadBalancer.$type, NetworkLoadBalancer);

const baseNetworkLoadBalancer_LabelsEntry: object = {
  $type: "yandex.cloud.loadbalancer.v1.NetworkLoadBalancer.LabelsEntry",
  key: "",
  value: "",
};

export const NetworkLoadBalancer_LabelsEntry = {
  $type:
    "yandex.cloud.loadbalancer.v1.NetworkLoadBalancer.LabelsEntry" as const,

  encode(
    message: NetworkLoadBalancer_LabelsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): NetworkLoadBalancer_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseNetworkLoadBalancer_LabelsEntry,
    } as NetworkLoadBalancer_LabelsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NetworkLoadBalancer_LabelsEntry {
    const message = {
      ...baseNetworkLoadBalancer_LabelsEntry,
    } as NetworkLoadBalancer_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: NetworkLoadBalancer_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NetworkLoadBalancer_LabelsEntry>, I>>(
    object: I
  ): NetworkLoadBalancer_LabelsEntry {
    const message = {
      ...baseNetworkLoadBalancer_LabelsEntry,
    } as NetworkLoadBalancer_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  NetworkLoadBalancer_LabelsEntry.$type,
  NetworkLoadBalancer_LabelsEntry
);

const baseAttachedTargetGroup: object = {
  $type: "yandex.cloud.loadbalancer.v1.AttachedTargetGroup",
  targetGroupId: "",
};

export const AttachedTargetGroup = {
  $type: "yandex.cloud.loadbalancer.v1.AttachedTargetGroup" as const,

  encode(
    message: AttachedTargetGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.targetGroupId !== "") {
      writer.uint32(10).string(message.targetGroupId);
    }
    for (const v of message.healthChecks) {
      HealthCheck.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttachedTargetGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAttachedTargetGroup } as AttachedTargetGroup;
    message.healthChecks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetGroupId = reader.string();
          break;
        case 2:
          message.healthChecks.push(
            HealthCheck.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AttachedTargetGroup {
    const message = { ...baseAttachedTargetGroup } as AttachedTargetGroup;
    message.targetGroupId =
      object.targetGroupId !== undefined && object.targetGroupId !== null
        ? String(object.targetGroupId)
        : "";
    message.healthChecks = (object.healthChecks ?? []).map((e: any) =>
      HealthCheck.fromJSON(e)
    );
    return message;
  },

  toJSON(message: AttachedTargetGroup): unknown {
    const obj: any = {};
    message.targetGroupId !== undefined &&
      (obj.targetGroupId = message.targetGroupId);
    if (message.healthChecks) {
      obj.healthChecks = message.healthChecks.map((e) =>
        e ? HealthCheck.toJSON(e) : undefined
      );
    } else {
      obj.healthChecks = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AttachedTargetGroup>, I>>(
    object: I
  ): AttachedTargetGroup {
    const message = { ...baseAttachedTargetGroup } as AttachedTargetGroup;
    message.targetGroupId = object.targetGroupId ?? "";
    message.healthChecks =
      object.healthChecks?.map((e) => HealthCheck.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(AttachedTargetGroup.$type, AttachedTargetGroup);

const baseListener: object = {
  $type: "yandex.cloud.loadbalancer.v1.Listener",
  name: "",
  address: "",
  port: 0,
  protocol: 0,
  targetPort: 0,
  subnetId: "",
  ipVersion: 0,
};

export const Listener = {
  $type: "yandex.cloud.loadbalancer.v1.Listener" as const,

  encode(
    message: Listener,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.port !== 0) {
      writer.uint32(24).int64(message.port);
    }
    if (message.protocol !== 0) {
      writer.uint32(32).int32(message.protocol);
    }
    if (message.targetPort !== 0) {
      writer.uint32(40).int64(message.targetPort);
    }
    if (message.subnetId !== "") {
      writer.uint32(50).string(message.subnetId);
    }
    if (message.ipVersion !== 0) {
      writer.uint32(56).int32(message.ipVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Listener {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListener } as Listener;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.port = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.protocol = reader.int32() as any;
          break;
        case 5:
          message.targetPort = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.subnetId = reader.string();
          break;
        case 7:
          message.ipVersion = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Listener {
    const message = { ...baseListener } as Listener;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.port =
      object.port !== undefined && object.port !== null
        ? Number(object.port)
        : 0;
    message.protocol =
      object.protocol !== undefined && object.protocol !== null
        ? listener_ProtocolFromJSON(object.protocol)
        : 0;
    message.targetPort =
      object.targetPort !== undefined && object.targetPort !== null
        ? Number(object.targetPort)
        : 0;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.ipVersion =
      object.ipVersion !== undefined && object.ipVersion !== null
        ? ipVersionFromJSON(object.ipVersion)
        : 0;
    return message;
  },

  toJSON(message: Listener): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.address !== undefined && (obj.address = message.address);
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.protocol !== undefined &&
      (obj.protocol = listener_ProtocolToJSON(message.protocol));
    message.targetPort !== undefined &&
      (obj.targetPort = Math.round(message.targetPort));
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    message.ipVersion !== undefined &&
      (obj.ipVersion = ipVersionToJSON(message.ipVersion));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Listener>, I>>(object: I): Listener {
    const message = { ...baseListener } as Listener;
    message.name = object.name ?? "";
    message.address = object.address ?? "";
    message.port = object.port ?? 0;
    message.protocol = object.protocol ?? 0;
    message.targetPort = object.targetPort ?? 0;
    message.subnetId = object.subnetId ?? "";
    message.ipVersion = object.ipVersion ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Listener.$type, Listener);

const baseTargetState: object = {
  $type: "yandex.cloud.loadbalancer.v1.TargetState",
  subnetId: "",
  address: "",
  status: 0,
};

export const TargetState = {
  $type: "yandex.cloud.loadbalancer.v1.TargetState" as const,

  encode(
    message: TargetState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TargetState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTargetState } as TargetState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subnetId = reader.string();
          break;
        case 2:
          message.address = reader.string();
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

  fromJSON(object: any): TargetState {
    const message = { ...baseTargetState } as TargetState;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.status =
      object.status !== undefined && object.status !== null
        ? targetState_StatusFromJSON(object.status)
        : 0;
    return message;
  },

  toJSON(message: TargetState): unknown {
    const obj: any = {};
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    message.address !== undefined && (obj.address = message.address);
    message.status !== undefined &&
      (obj.status = targetState_StatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TargetState>, I>>(
    object: I
  ): TargetState {
    const message = { ...baseTargetState } as TargetState;
    message.subnetId = object.subnetId ?? "";
    message.address = object.address ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

messageTypeRegistry.set(TargetState.$type, TargetState);

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
