/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { LogOptions } from "../../../../yandex/cloud/apploadbalancer/v1/logging";
import { Target } from "../../../../yandex/cloud/apploadbalancer/v1/target_group";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.apploadbalancer.v1";

/**
 * An application load balancer resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/application-load-balancer).
 */
export interface LoadBalancer {
  $type: "yandex.cloud.apploadbalancer.v1.LoadBalancer";
  /** ID of the application load balancer. Generated at creation time. */
  id: string;
  /** Name of the application load balancer. The name is unique within the folder. */
  name: string;
  /** Description of the application load balancer. */
  description: string;
  /** ID of the folder that the application load balancer belongs to. */
  folderId: string;
  /**
   * Application load balancer labels as `key:value` pairs.
   * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
   */
  labels: { [key: string]: string };
  /** Status of the application load balancer. */
  status: LoadBalancer_Status;
  /** ID of the region that the application load balancer is located at. */
  regionId: string;
  /** ID of the network that the application load balancer belongs to. */
  networkId: string;
  /**
   * Listeners that belong to the application load balancer.
   *
   * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#listener).
   */
  listeners: Listener[];
  /**
   * Locality settings of the application load balancer.
   *
   * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#lb-location).
   */
  allocationPolicy?: AllocationPolicy;
  /**
   * ID of the log group that stores access logs of the application load balancer.
   *
   * The logs can be accessed using a Cloud Functions [trigger for Cloud Logs](/docs/functions/operations/trigger/cloudlogs-trigger-create).
   */
  logGroupId: string;
  /**
   * ID's of the security groups attributed to the application load balancer.
   *
   * For details about the concept,
   * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#security-groups).
   */
  securityGroupIds: string[];
  /** Creation timestamp. */
  createdAt?: Date;
  /**
   * Scaling settings of the application load balancer.
   *
   * The scaling settings relate to a special internal instance group which facilitates the balancer's work.
   * Instances in this group are called _resource units_. The group is scaled automatically based on incoming load
   * and within limitations specified in these settings.
   *
   * For details about the concept,
   * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#lcu-scaling).
   */
  autoScalePolicy?: AutoScalePolicy;
  /** Cloud logging settings of the application load balancer. */
  logOptions?: LogOptions;
}

export enum LoadBalancer_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - The application load balancer is being created. */
  CREATING = 1,
  /** STARTING - The application load balancer is being started. */
  STARTING = 2,
  /** ACTIVE - The application load balancer is active and sends traffic to the targets. */
  ACTIVE = 3,
  /** STOPPING - The application load balancer is being stopped. */
  STOPPING = 4,
  /** STOPPED - The application load balancer is stopped and doesn't send traffic to the targets. */
  STOPPED = 5,
  /** DELETING - The application load balancer is being deleted. */
  DELETING = 6,
  UNRECOGNIZED = -1,
}

export function loadBalancer_StatusFromJSON(object: any): LoadBalancer_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return LoadBalancer_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return LoadBalancer_Status.CREATING;
    case 2:
    case "STARTING":
      return LoadBalancer_Status.STARTING;
    case 3:
    case "ACTIVE":
      return LoadBalancer_Status.ACTIVE;
    case 4:
    case "STOPPING":
      return LoadBalancer_Status.STOPPING;
    case 5:
    case "STOPPED":
      return LoadBalancer_Status.STOPPED;
    case 6:
    case "DELETING":
      return LoadBalancer_Status.DELETING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LoadBalancer_Status.UNRECOGNIZED;
  }
}

export function loadBalancer_StatusToJSON(object: LoadBalancer_Status): string {
  switch (object) {
    case LoadBalancer_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case LoadBalancer_Status.CREATING:
      return "CREATING";
    case LoadBalancer_Status.STARTING:
      return "STARTING";
    case LoadBalancer_Status.ACTIVE:
      return "ACTIVE";
    case LoadBalancer_Status.STOPPING:
      return "STOPPING";
    case LoadBalancer_Status.STOPPED:
      return "STOPPED";
    case LoadBalancer_Status.DELETING:
      return "DELETING";
    default:
      return "UNKNOWN";
  }
}

export interface LoadBalancer_LabelsEntry {
  $type: "yandex.cloud.apploadbalancer.v1.LoadBalancer.LabelsEntry";
  key: string;
  value: string;
}

/** An endpoint address resource. */
export interface Address {
  $type: "yandex.cloud.apploadbalancer.v1.Address";
  /** Public IPv4 endpoint address. */
  externalIpv4Address?: ExternalIpv4Address | undefined;
  /**
   * Internal IPv4 endpoint address.
   *
   * To enable the use of listeners with internal addresses, [contact support](https://console.cloud.yandex.ru/support).
   */
  internalIpv4Address?: InternalIpv4Address | undefined;
  /** Public IPv6 endpoint address. */
  externalIpv6Address?: ExternalIpv6Address | undefined;
}

/** A public (external) IPv4 endpoint address resource. */
export interface ExternalIpv4Address {
  $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv4Address";
  /** IPv4 address. */
  address: string;
}

/** An internal IPv4 endpoint address resource. */
export interface InternalIpv4Address {
  $type: "yandex.cloud.apploadbalancer.v1.InternalIpv4Address";
  /** IPv4 address. */
  address: string;
  /** ID of the subnet that the address belongs to. */
  subnetId: string;
}

/** A public (external) IPv4 endpoint address resource. */
export interface ExternalIpv6Address {
  $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv6Address";
  /** IPv6 address. */
  address: string;
}

/**
 * An application load balancer location resource.
 *
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#lb-location).
 */
export interface Location {
  $type: "yandex.cloud.apploadbalancer.v1.Location";
  /**
   * ID of the availability zone where the application load balancer resides.
   *
   * Each availability zone can only be specified once.
   */
  zoneId: string;
  /** ID of the subnet that the application load balancer belongs to. */
  subnetId: string;
  /**
   * Disables the load balancer node in the specified availability zone.
   *
   * Backends in the availability zone are not directly affected by this setting.
   * They still may receive traffic from the load balancer nodes in other availability zones,
   * subject to [LoadBalancingConfig.locality_aware_routing_percent] and [LoadBalancingConfig.strict_locality] settings.
   */
  disableTraffic: boolean;
}

/** A locality settings (allocation policy) resource. */
export interface AllocationPolicy {
  $type: "yandex.cloud.apploadbalancer.v1.AllocationPolicy";
  /** Availability zones and subnets that the application load balancer resides. */
  locations: Location[];
}

/**
 * A listener resource.
 *
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#listener).
 */
export interface Listener {
  $type: "yandex.cloud.apploadbalancer.v1.Listener";
  /**
   * Name of the listener. The name is unique within the application load balancer.
   * The string length in characters is 3-63.
   */
  name: string;
  /**
   * Endpoints of the listener.
   *
   * Endpoints are defined by their IP addresses and ports.
   */
  endpoints: Endpoint[];
  /** Unencrypted HTTP listener settings. */
  http?: HttpListener | undefined;
  /**
   * TLS-encrypted HTTP or TCP stream listener settings.
   *
   * All handlers within a listener ([TlsListener.default_handler] and [TlsListener.sni_handlers]) must be of one
   * type, [HttpHandler] or [StreamHandler]. Mixing HTTP and TCP stream traffic in a TLS-encrypted listener is not
   * supported.
   */
  tls?: TlsListener | undefined;
  /** Unencrypted stream (TCP) listener settings. */
  stream?: StreamListener | undefined;
}

/** An endpoint resource. */
export interface Endpoint {
  $type: "yandex.cloud.apploadbalancer.v1.Endpoint";
  /** Endpoint public (external) and internal addresses. */
  addresses: Address[];
  /** Endpoint ports. */
  ports: number[];
}

/** An HTTP listener resource. */
export interface HttpListener {
  $type: "yandex.cloud.apploadbalancer.v1.HttpListener";
  /**
   * Settings for handling HTTP requests.
   *
   * Only one of `handler` and [redirects] can be specified.
   */
  handler?: HttpHandler;
  /**
   * Redirects settings.
   *
   * Only one of `redirects` and [handler] can be specified.
   */
  redirects?: Redirects;
}

/** TLS-encrypted (HTTP or TCP stream) listener resource. */
export interface TlsListener {
  $type: "yandex.cloud.apploadbalancer.v1.TlsListener";
  /**
   * Settings for handling requests by default, with Server Name
   * Indication (SNI) not matching any of the [sni_handlers].
   */
  defaultHandler?: TlsHandler;
  /**
   * Settings for handling requests with Server Name Indication (SNI)
   * matching one of [SniMatch.server_names] values.
   */
  sniHandlers: SniMatch[];
}

/** A stream (TCP) listener resource. */
export interface StreamListener {
  $type: "yandex.cloud.apploadbalancer.v1.StreamListener";
  /** Settings for handling stream (TCP) requests. */
  handler?: StreamHandler;
}

/** An HTTP/2 options resource. */
export interface Http2Options {
  $type: "yandex.cloud.apploadbalancer.v1.Http2Options";
  /** Maximum number of concurrent HTTP/2 streams in a connection. */
  maxConcurrentStreams: number;
}

/** A stream (TCP) handler resource. */
export interface StreamHandler {
  $type: "yandex.cloud.apploadbalancer.v1.StreamHandler";
  /**
   * ID of the backend group processing requests. For details about the concept, see
   * [documentation](/docs/application-load-balancer/concepts/backend-group).
   *
   * The backend group type, specified via [BackendGroup.backend], must be `stream`.
   *
   * To get the list of all available backend groups, make a [BackendGroupService.List] request.
   */
  backendGroupId: string;
}

/** An HTTP handler resource. */
export interface HttpHandler {
  $type: "yandex.cloud.apploadbalancer.v1.HttpHandler";
  /**
   * ID of the HTTP router processing requests. For details about the concept, see
   * [documentation](/docs/application-load-balancer/concepts/http-router).
   *
   * To get the list of all available HTTP routers, make a [HttpRouterService.List] request.
   */
  httpRouterId: string;
  /**
   * HTTP/2 settings.
   *
   * If specified, incoming HTTP/2 requests are supported by the listener.
   */
  http2Options?: Http2Options | undefined;
  /** Enables support for incoming HTTP/1.0 and HTTP/1.1 requests and disables it for HTTP/2 requests. */
  allowHttp10: boolean | undefined;
  /** When unset, will preserve the incoming x-request-id header, otherwise would rewrite it with a new value. */
  rewriteRequestId: boolean;
}

/** A listener redirects resource. */
export interface Redirects {
  $type: "yandex.cloud.apploadbalancer.v1.Redirects";
  /**
   * Redirects all unencrypted HTTP requests to the same URI with scheme changed to `https`.
   *
   * The setting has the same effect as a single, catch-all [HttpRoute]
   * with [RedirectAction.replace_scheme] set to `https`.
   */
  httpToHttps: boolean;
}

/** A SNI handler resource. */
export interface SniMatch {
  $type: "yandex.cloud.apploadbalancer.v1.SniMatch";
  /** Name of the SNI handler. */
  name: string;
  /** Server names that are matched by the SNI handler. */
  serverNames: string[];
  /** Settings for handling requests with Server Name Indication (SNI) matching one of [server_names] values. */
  handler?: TlsHandler;
}

/** A TLS-encrypted (HTTP or TCP stream) handler resource. */
export interface TlsHandler {
  $type: "yandex.cloud.apploadbalancer.v1.TlsHandler";
  /** HTTP handler. */
  httpHandler?: HttpHandler | undefined;
  /** Stream (TCP) handler. */
  streamHandler?: StreamHandler | undefined;
  /**
   * ID's of the TLS server certificates from [Certificate Manager](/docs/certificate-manager/).
   *
   * RSA and ECDSA certificates are supported, and only the first certificate of each type is used.
   */
  certificateIds: string[];
}

/** A target state resource. */
export interface TargetState {
  $type: "yandex.cloud.apploadbalancer.v1.TargetState";
  /** Health of the target, i.e. its statuses in all availability zones. */
  status?: TargetState_HealthcheckStatus;
  /** Target. */
  target?: Target;
}

/** Supported target statuses. */
export enum TargetState_Status {
  STATUS_UNSPECIFIED = 0,
  /**
   * HEALTHY - All of the health checks specified in [HttpBackend.healthchecks] or [GrpcBackend.healthchecks] are passed
   * (the number depends on the [HealthCheck.healthy_threshold] setting) and the target is ready to receive traffic.
   */
  HEALTHY = 1,
  /**
   * PARTIALLY_HEALTHY - Some of the health checks specified in [HttpBackend.healthchecks] or [GrpcBackend.healthchecks] failed
   * (the number depends on the [HealthCheck.unhealthy_threshold] setting).
   * The target is ready to receive traffic from the load balancer nodes which, based on their health checks,
   * consider the target healthy.
   */
  PARTIALLY_HEALTHY = 2,
  /**
   * UNHEALTHY - All of the health checks specified in [HttpBackend.healthchecks] or [GrpcBackend.healthchecks] failed
   * (the number depends on the [HealthCheck.unhealthy_threshold] setting) and the target is not receiving traffic.
   */
  UNHEALTHY = 3,
  /** DRAINING - Target is being deleted and the application load balancer is no longer sending traffic to this target. */
  DRAINING = 4,
  TIMEOUT = 5,
  UNRECOGNIZED = -1,
}

export function targetState_StatusFromJSON(object: any): TargetState_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return TargetState_Status.STATUS_UNSPECIFIED;
    case 1:
    case "HEALTHY":
      return TargetState_Status.HEALTHY;
    case 2:
    case "PARTIALLY_HEALTHY":
      return TargetState_Status.PARTIALLY_HEALTHY;
    case 3:
    case "UNHEALTHY":
      return TargetState_Status.UNHEALTHY;
    case 4:
    case "DRAINING":
      return TargetState_Status.DRAINING;
    case 5:
    case "TIMEOUT":
      return TargetState_Status.TIMEOUT;
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
    case TargetState_Status.HEALTHY:
      return "HEALTHY";
    case TargetState_Status.PARTIALLY_HEALTHY:
      return "PARTIALLY_HEALTHY";
    case TargetState_Status.UNHEALTHY:
      return "UNHEALTHY";
    case TargetState_Status.DRAINING:
      return "DRAINING";
    case TargetState_Status.TIMEOUT:
      return "TIMEOUT";
    default:
      return "UNKNOWN";
  }
}

/** Health of the target. */
export interface TargetState_HealthcheckStatus {
  $type: "yandex.cloud.apploadbalancer.v1.TargetState.HealthcheckStatus";
  /** Statuses of the target in its availability zones. */
  zoneStatuses: TargetState_ZoneHealthcheckStatus[];
}

/** Health of the target in the availability zone. */
export interface TargetState_ZoneHealthcheckStatus {
  $type: "yandex.cloud.apploadbalancer.v1.TargetState.ZoneHealthcheckStatus";
  /** ID of the availability zone. */
  zoneId: string;
  /** Status of the target in the availability zone. */
  status: TargetState_Status;
  /**
   * Indicates whether the target has been marked `UNHEALTHY` due to failing active health checks,
   * which determine target statuses as configured in [HttpBackend.healthchecks] or [GrpcBackend.healthchecks].
   *
   * Currently the only type of health checks is active, as described above.
   * Passive health checks, which determine the health of a target based on its responses to production requests
   * (HTTP 5xx status codes, connection errors etc.), are not implemented yet.
   */
  failedActiveHc: boolean;
}

/** A resource for scaling settings of an application load balancer. */
export interface AutoScalePolicy {
  $type: "yandex.cloud.apploadbalancer.v1.AutoScalePolicy";
  /**
   * Lower limit for the number of resource units in each availability zone.
   *
   * If not specified previously (using other instruments such as management console), the default value is 2.
   * To revert to it, specify it explicitly.
   *
   * The minimum value is 2.
   */
  minZoneSize: number;
  /**
   * Upper limit for the total number of resource units across all availability zones.
   *
   * If a positive value is specified, it must be at least [min_zone_size] multiplied by the size of
   * [AllocationPolicy.locations].
   *
   * If the value is 0, there is no upper limit.
   */
  maxSize: number;
}

const baseLoadBalancer: object = {
  $type: "yandex.cloud.apploadbalancer.v1.LoadBalancer",
  id: "",
  name: "",
  description: "",
  folderId: "",
  status: 0,
  regionId: "",
  networkId: "",
  logGroupId: "",
  securityGroupIds: "",
};

export const LoadBalancer = {
  $type: "yandex.cloud.apploadbalancer.v1.LoadBalancer" as const,

  encode(
    message: LoadBalancer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.folderId !== "") {
      writer.uint32(34).string(message.folderId);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      LoadBalancer_LabelsEntry.encode(
        {
          $type: "yandex.cloud.apploadbalancer.v1.LoadBalancer.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.regionId !== "") {
      writer.uint32(58).string(message.regionId);
    }
    if (message.networkId !== "") {
      writer.uint32(66).string(message.networkId);
    }
    for (const v of message.listeners) {
      Listener.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.allocationPolicy !== undefined) {
      AllocationPolicy.encode(
        message.allocationPolicy,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.logGroupId !== "") {
      writer.uint32(90).string(message.logGroupId);
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(98).string(v!);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.autoScalePolicy !== undefined) {
      AutoScalePolicy.encode(
        message.autoScalePolicy,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.logOptions !== undefined) {
      LogOptions.encode(message.logOptions, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoadBalancer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLoadBalancer } as LoadBalancer;
    message.labels = {};
    message.listeners = [];
    message.securityGroupIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.folderId = reader.string();
          break;
        case 5:
          const entry5 = LoadBalancer_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.status = reader.int32() as any;
          break;
        case 7:
          message.regionId = reader.string();
          break;
        case 8:
          message.networkId = reader.string();
          break;
        case 9:
          message.listeners.push(Listener.decode(reader, reader.uint32()));
          break;
        case 10:
          message.allocationPolicy = AllocationPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.logGroupId = reader.string();
          break;
        case 12:
          message.securityGroupIds.push(reader.string());
          break;
        case 13:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.autoScalePolicy = AutoScalePolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.logOptions = LogOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadBalancer {
    const message = { ...baseLoadBalancer } as LoadBalancer;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.status =
      object.status !== undefined && object.status !== null
        ? loadBalancer_StatusFromJSON(object.status)
        : 0;
    message.regionId =
      object.regionId !== undefined && object.regionId !== null
        ? String(object.regionId)
        : "";
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.listeners = (object.listeners ?? []).map((e: any) =>
      Listener.fromJSON(e)
    );
    message.allocationPolicy =
      object.allocationPolicy !== undefined && object.allocationPolicy !== null
        ? AllocationPolicy.fromJSON(object.allocationPolicy)
        : undefined;
    message.logGroupId =
      object.logGroupId !== undefined && object.logGroupId !== null
        ? String(object.logGroupId)
        : "";
    message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) =>
      String(e)
    );
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.autoScalePolicy =
      object.autoScalePolicy !== undefined && object.autoScalePolicy !== null
        ? AutoScalePolicy.fromJSON(object.autoScalePolicy)
        : undefined;
    message.logOptions =
      object.logOptions !== undefined && object.logOptions !== null
        ? LogOptions.fromJSON(object.logOptions)
        : undefined;
    return message;
  },

  toJSON(message: LoadBalancer): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.status !== undefined &&
      (obj.status = loadBalancer_StatusToJSON(message.status));
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.networkId !== undefined && (obj.networkId = message.networkId);
    if (message.listeners) {
      obj.listeners = message.listeners.map((e) =>
        e ? Listener.toJSON(e) : undefined
      );
    } else {
      obj.listeners = [];
    }
    message.allocationPolicy !== undefined &&
      (obj.allocationPolicy = message.allocationPolicy
        ? AllocationPolicy.toJSON(message.allocationPolicy)
        : undefined);
    message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
    if (message.securityGroupIds) {
      obj.securityGroupIds = message.securityGroupIds.map((e) => e);
    } else {
      obj.securityGroupIds = [];
    }
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.autoScalePolicy !== undefined &&
      (obj.autoScalePolicy = message.autoScalePolicy
        ? AutoScalePolicy.toJSON(message.autoScalePolicy)
        : undefined);
    message.logOptions !== undefined &&
      (obj.logOptions = message.logOptions
        ? LogOptions.toJSON(message.logOptions)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadBalancer>, I>>(
    object: I
  ): LoadBalancer {
    const message = { ...baseLoadBalancer } as LoadBalancer;
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.folderId = object.folderId ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.status = object.status ?? 0;
    message.regionId = object.regionId ?? "";
    message.networkId = object.networkId ?? "";
    message.listeners =
      object.listeners?.map((e) => Listener.fromPartial(e)) || [];
    message.allocationPolicy =
      object.allocationPolicy !== undefined && object.allocationPolicy !== null
        ? AllocationPolicy.fromPartial(object.allocationPolicy)
        : undefined;
    message.logGroupId = object.logGroupId ?? "";
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.createdAt = object.createdAt ?? undefined;
    message.autoScalePolicy =
      object.autoScalePolicy !== undefined && object.autoScalePolicy !== null
        ? AutoScalePolicy.fromPartial(object.autoScalePolicy)
        : undefined;
    message.logOptions =
      object.logOptions !== undefined && object.logOptions !== null
        ? LogOptions.fromPartial(object.logOptions)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(LoadBalancer.$type, LoadBalancer);

const baseLoadBalancer_LabelsEntry: object = {
  $type: "yandex.cloud.apploadbalancer.v1.LoadBalancer.LabelsEntry",
  key: "",
  value: "",
};

export const LoadBalancer_LabelsEntry = {
  $type: "yandex.cloud.apploadbalancer.v1.LoadBalancer.LabelsEntry" as const,

  encode(
    message: LoadBalancer_LabelsEntry,
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
  ): LoadBalancer_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseLoadBalancer_LabelsEntry,
    } as LoadBalancer_LabelsEntry;
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

  fromJSON(object: any): LoadBalancer_LabelsEntry {
    const message = {
      ...baseLoadBalancer_LabelsEntry,
    } as LoadBalancer_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: LoadBalancer_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadBalancer_LabelsEntry>, I>>(
    object: I
  ): LoadBalancer_LabelsEntry {
    const message = {
      ...baseLoadBalancer_LabelsEntry,
    } as LoadBalancer_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  LoadBalancer_LabelsEntry.$type,
  LoadBalancer_LabelsEntry
);

const baseAddress: object = {
  $type: "yandex.cloud.apploadbalancer.v1.Address",
};

export const Address = {
  $type: "yandex.cloud.apploadbalancer.v1.Address" as const,

  encode(
    message: Address,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.externalIpv4Address !== undefined) {
      ExternalIpv4Address.encode(
        message.externalIpv4Address,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.internalIpv4Address !== undefined) {
      InternalIpv4Address.encode(
        message.internalIpv4Address,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.externalIpv6Address !== undefined) {
      ExternalIpv6Address.encode(
        message.externalIpv6Address,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Address {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddress } as Address;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.externalIpv4Address = ExternalIpv4Address.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.internalIpv4Address = InternalIpv4Address.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.externalIpv6Address = ExternalIpv6Address.decode(
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

  fromJSON(object: any): Address {
    const message = { ...baseAddress } as Address;
    message.externalIpv4Address =
      object.externalIpv4Address !== undefined &&
      object.externalIpv4Address !== null
        ? ExternalIpv4Address.fromJSON(object.externalIpv4Address)
        : undefined;
    message.internalIpv4Address =
      object.internalIpv4Address !== undefined &&
      object.internalIpv4Address !== null
        ? InternalIpv4Address.fromJSON(object.internalIpv4Address)
        : undefined;
    message.externalIpv6Address =
      object.externalIpv6Address !== undefined &&
      object.externalIpv6Address !== null
        ? ExternalIpv6Address.fromJSON(object.externalIpv6Address)
        : undefined;
    return message;
  },

  toJSON(message: Address): unknown {
    const obj: any = {};
    message.externalIpv4Address !== undefined &&
      (obj.externalIpv4Address = message.externalIpv4Address
        ? ExternalIpv4Address.toJSON(message.externalIpv4Address)
        : undefined);
    message.internalIpv4Address !== undefined &&
      (obj.internalIpv4Address = message.internalIpv4Address
        ? InternalIpv4Address.toJSON(message.internalIpv4Address)
        : undefined);
    message.externalIpv6Address !== undefined &&
      (obj.externalIpv6Address = message.externalIpv6Address
        ? ExternalIpv6Address.toJSON(message.externalIpv6Address)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Address>, I>>(object: I): Address {
    const message = { ...baseAddress } as Address;
    message.externalIpv4Address =
      object.externalIpv4Address !== undefined &&
      object.externalIpv4Address !== null
        ? ExternalIpv4Address.fromPartial(object.externalIpv4Address)
        : undefined;
    message.internalIpv4Address =
      object.internalIpv4Address !== undefined &&
      object.internalIpv4Address !== null
        ? InternalIpv4Address.fromPartial(object.internalIpv4Address)
        : undefined;
    message.externalIpv6Address =
      object.externalIpv6Address !== undefined &&
      object.externalIpv6Address !== null
        ? ExternalIpv6Address.fromPartial(object.externalIpv6Address)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Address.$type, Address);

const baseExternalIpv4Address: object = {
  $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv4Address",
  address: "",
};

export const ExternalIpv4Address = {
  $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv4Address" as const,

  encode(
    message: ExternalIpv4Address,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalIpv4Address {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExternalIpv4Address } as ExternalIpv4Address;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExternalIpv4Address {
    const message = { ...baseExternalIpv4Address } as ExternalIpv4Address;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: ExternalIpv4Address): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExternalIpv4Address>, I>>(
    object: I
  ): ExternalIpv4Address {
    const message = { ...baseExternalIpv4Address } as ExternalIpv4Address;
    message.address = object.address ?? "";
    return message;
  },
};

messageTypeRegistry.set(ExternalIpv4Address.$type, ExternalIpv4Address);

const baseInternalIpv4Address: object = {
  $type: "yandex.cloud.apploadbalancer.v1.InternalIpv4Address",
  address: "",
  subnetId: "",
};

export const InternalIpv4Address = {
  $type: "yandex.cloud.apploadbalancer.v1.InternalIpv4Address" as const,

  encode(
    message: InternalIpv4Address,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.subnetId !== "") {
      writer.uint32(18).string(message.subnetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InternalIpv4Address {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInternalIpv4Address } as InternalIpv4Address;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.subnetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InternalIpv4Address {
    const message = { ...baseInternalIpv4Address } as InternalIpv4Address;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    return message;
  },

  toJSON(message: InternalIpv4Address): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InternalIpv4Address>, I>>(
    object: I
  ): InternalIpv4Address {
    const message = { ...baseInternalIpv4Address } as InternalIpv4Address;
    message.address = object.address ?? "";
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(InternalIpv4Address.$type, InternalIpv4Address);

const baseExternalIpv6Address: object = {
  $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv6Address",
  address: "",
};

export const ExternalIpv6Address = {
  $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv6Address" as const,

  encode(
    message: ExternalIpv6Address,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalIpv6Address {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExternalIpv6Address } as ExternalIpv6Address;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExternalIpv6Address {
    const message = { ...baseExternalIpv6Address } as ExternalIpv6Address;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: ExternalIpv6Address): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExternalIpv6Address>, I>>(
    object: I
  ): ExternalIpv6Address {
    const message = { ...baseExternalIpv6Address } as ExternalIpv6Address;
    message.address = object.address ?? "";
    return message;
  },
};

messageTypeRegistry.set(ExternalIpv6Address.$type, ExternalIpv6Address);

const baseLocation: object = {
  $type: "yandex.cloud.apploadbalancer.v1.Location",
  zoneId: "",
  subnetId: "",
  disableTraffic: false,
};

export const Location = {
  $type: "yandex.cloud.apploadbalancer.v1.Location" as const,

  encode(
    message: Location,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }
    if (message.subnetId !== "") {
      writer.uint32(18).string(message.subnetId);
    }
    if (message.disableTraffic === true) {
      writer.uint32(24).bool(message.disableTraffic);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Location {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLocation } as Location;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;
        case 2:
          message.subnetId = reader.string();
          break;
        case 3:
          message.disableTraffic = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Location {
    const message = { ...baseLocation } as Location;
    message.zoneId =
      object.zoneId !== undefined && object.zoneId !== null
        ? String(object.zoneId)
        : "";
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.disableTraffic =
      object.disableTraffic !== undefined && object.disableTraffic !== null
        ? Boolean(object.disableTraffic)
        : false;
    return message;
  },

  toJSON(message: Location): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    message.disableTraffic !== undefined &&
      (obj.disableTraffic = message.disableTraffic);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Location>, I>>(object: I): Location {
    const message = { ...baseLocation } as Location;
    message.zoneId = object.zoneId ?? "";
    message.subnetId = object.subnetId ?? "";
    message.disableTraffic = object.disableTraffic ?? false;
    return message;
  },
};

messageTypeRegistry.set(Location.$type, Location);

const baseAllocationPolicy: object = {
  $type: "yandex.cloud.apploadbalancer.v1.AllocationPolicy",
};

export const AllocationPolicy = {
  $type: "yandex.cloud.apploadbalancer.v1.AllocationPolicy" as const,

  encode(
    message: AllocationPolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.locations) {
      Location.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllocationPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAllocationPolicy } as AllocationPolicy;
    message.locations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locations.push(Location.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AllocationPolicy {
    const message = { ...baseAllocationPolicy } as AllocationPolicy;
    message.locations = (object.locations ?? []).map((e: any) =>
      Location.fromJSON(e)
    );
    return message;
  },

  toJSON(message: AllocationPolicy): unknown {
    const obj: any = {};
    if (message.locations) {
      obj.locations = message.locations.map((e) =>
        e ? Location.toJSON(e) : undefined
      );
    } else {
      obj.locations = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllocationPolicy>, I>>(
    object: I
  ): AllocationPolicy {
    const message = { ...baseAllocationPolicy } as AllocationPolicy;
    message.locations =
      object.locations?.map((e) => Location.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(AllocationPolicy.$type, AllocationPolicy);

const baseListener: object = {
  $type: "yandex.cloud.apploadbalancer.v1.Listener",
  name: "",
};

export const Listener = {
  $type: "yandex.cloud.apploadbalancer.v1.Listener" as const,

  encode(
    message: Listener,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.endpoints) {
      Endpoint.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.http !== undefined) {
      HttpListener.encode(message.http, writer.uint32(26).fork()).ldelim();
    }
    if (message.tls !== undefined) {
      TlsListener.encode(message.tls, writer.uint32(34).fork()).ldelim();
    }
    if (message.stream !== undefined) {
      StreamListener.encode(message.stream, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Listener {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListener } as Listener;
    message.endpoints = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.endpoints.push(Endpoint.decode(reader, reader.uint32()));
          break;
        case 3:
          message.http = HttpListener.decode(reader, reader.uint32());
          break;
        case 4:
          message.tls = TlsListener.decode(reader, reader.uint32());
          break;
        case 5:
          message.stream = StreamListener.decode(reader, reader.uint32());
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
    message.endpoints = (object.endpoints ?? []).map((e: any) =>
      Endpoint.fromJSON(e)
    );
    message.http =
      object.http !== undefined && object.http !== null
        ? HttpListener.fromJSON(object.http)
        : undefined;
    message.tls =
      object.tls !== undefined && object.tls !== null
        ? TlsListener.fromJSON(object.tls)
        : undefined;
    message.stream =
      object.stream !== undefined && object.stream !== null
        ? StreamListener.fromJSON(object.stream)
        : undefined;
    return message;
  },

  toJSON(message: Listener): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map((e) =>
        e ? Endpoint.toJSON(e) : undefined
      );
    } else {
      obj.endpoints = [];
    }
    message.http !== undefined &&
      (obj.http = message.http ? HttpListener.toJSON(message.http) : undefined);
    message.tls !== undefined &&
      (obj.tls = message.tls ? TlsListener.toJSON(message.tls) : undefined);
    message.stream !== undefined &&
      (obj.stream = message.stream
        ? StreamListener.toJSON(message.stream)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Listener>, I>>(object: I): Listener {
    const message = { ...baseListener } as Listener;
    message.name = object.name ?? "";
    message.endpoints =
      object.endpoints?.map((e) => Endpoint.fromPartial(e)) || [];
    message.http =
      object.http !== undefined && object.http !== null
        ? HttpListener.fromPartial(object.http)
        : undefined;
    message.tls =
      object.tls !== undefined && object.tls !== null
        ? TlsListener.fromPartial(object.tls)
        : undefined;
    message.stream =
      object.stream !== undefined && object.stream !== null
        ? StreamListener.fromPartial(object.stream)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Listener.$type, Listener);

const baseEndpoint: object = {
  $type: "yandex.cloud.apploadbalancer.v1.Endpoint",
  ports: 0,
};

export const Endpoint = {
  $type: "yandex.cloud.apploadbalancer.v1.Endpoint" as const,

  encode(
    message: Endpoint,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.addresses) {
      Address.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.ports) {
      writer.int64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Endpoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEndpoint } as Endpoint;
    message.addresses = [];
    message.ports = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(Address.decode(reader, reader.uint32()));
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ports.push(longToNumber(reader.int64() as Long));
            }
          } else {
            message.ports.push(longToNumber(reader.int64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Endpoint {
    const message = { ...baseEndpoint } as Endpoint;
    message.addresses = (object.addresses ?? []).map((e: any) =>
      Address.fromJSON(e)
    );
    message.ports = (object.ports ?? []).map((e: any) => Number(e));
    return message;
  },

  toJSON(message: Endpoint): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) =>
        e ? Address.toJSON(e) : undefined
      );
    } else {
      obj.addresses = [];
    }
    if (message.ports) {
      obj.ports = message.ports.map((e) => Math.round(e));
    } else {
      obj.ports = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Endpoint>, I>>(object: I): Endpoint {
    const message = { ...baseEndpoint } as Endpoint;
    message.addresses =
      object.addresses?.map((e) => Address.fromPartial(e)) || [];
    message.ports = object.ports?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Endpoint.$type, Endpoint);

const baseHttpListener: object = {
  $type: "yandex.cloud.apploadbalancer.v1.HttpListener",
};

export const HttpListener = {
  $type: "yandex.cloud.apploadbalancer.v1.HttpListener" as const,

  encode(
    message: HttpListener,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.handler !== undefined) {
      HttpHandler.encode(message.handler, writer.uint32(10).fork()).ldelim();
    }
    if (message.redirects !== undefined) {
      Redirects.encode(message.redirects, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HttpListener {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHttpListener } as HttpListener;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.handler = HttpHandler.decode(reader, reader.uint32());
          break;
        case 2:
          message.redirects = Redirects.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HttpListener {
    const message = { ...baseHttpListener } as HttpListener;
    message.handler =
      object.handler !== undefined && object.handler !== null
        ? HttpHandler.fromJSON(object.handler)
        : undefined;
    message.redirects =
      object.redirects !== undefined && object.redirects !== null
        ? Redirects.fromJSON(object.redirects)
        : undefined;
    return message;
  },

  toJSON(message: HttpListener): unknown {
    const obj: any = {};
    message.handler !== undefined &&
      (obj.handler = message.handler
        ? HttpHandler.toJSON(message.handler)
        : undefined);
    message.redirects !== undefined &&
      (obj.redirects = message.redirects
        ? Redirects.toJSON(message.redirects)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HttpListener>, I>>(
    object: I
  ): HttpListener {
    const message = { ...baseHttpListener } as HttpListener;
    message.handler =
      object.handler !== undefined && object.handler !== null
        ? HttpHandler.fromPartial(object.handler)
        : undefined;
    message.redirects =
      object.redirects !== undefined && object.redirects !== null
        ? Redirects.fromPartial(object.redirects)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(HttpListener.$type, HttpListener);

const baseTlsListener: object = {
  $type: "yandex.cloud.apploadbalancer.v1.TlsListener",
};

export const TlsListener = {
  $type: "yandex.cloud.apploadbalancer.v1.TlsListener" as const,

  encode(
    message: TlsListener,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.defaultHandler !== undefined) {
      TlsHandler.encode(
        message.defaultHandler,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.sniHandlers) {
      SniMatch.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TlsListener {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTlsListener } as TlsListener;
    message.sniHandlers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaultHandler = TlsHandler.decode(reader, reader.uint32());
          break;
        case 2:
          message.sniHandlers.push(SniMatch.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TlsListener {
    const message = { ...baseTlsListener } as TlsListener;
    message.defaultHandler =
      object.defaultHandler !== undefined && object.defaultHandler !== null
        ? TlsHandler.fromJSON(object.defaultHandler)
        : undefined;
    message.sniHandlers = (object.sniHandlers ?? []).map((e: any) =>
      SniMatch.fromJSON(e)
    );
    return message;
  },

  toJSON(message: TlsListener): unknown {
    const obj: any = {};
    message.defaultHandler !== undefined &&
      (obj.defaultHandler = message.defaultHandler
        ? TlsHandler.toJSON(message.defaultHandler)
        : undefined);
    if (message.sniHandlers) {
      obj.sniHandlers = message.sniHandlers.map((e) =>
        e ? SniMatch.toJSON(e) : undefined
      );
    } else {
      obj.sniHandlers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TlsListener>, I>>(
    object: I
  ): TlsListener {
    const message = { ...baseTlsListener } as TlsListener;
    message.defaultHandler =
      object.defaultHandler !== undefined && object.defaultHandler !== null
        ? TlsHandler.fromPartial(object.defaultHandler)
        : undefined;
    message.sniHandlers =
      object.sniHandlers?.map((e) => SniMatch.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(TlsListener.$type, TlsListener);

const baseStreamListener: object = {
  $type: "yandex.cloud.apploadbalancer.v1.StreamListener",
};

export const StreamListener = {
  $type: "yandex.cloud.apploadbalancer.v1.StreamListener" as const,

  encode(
    message: StreamListener,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.handler !== undefined) {
      StreamHandler.encode(message.handler, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamListener {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamListener } as StreamListener;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.handler = StreamHandler.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamListener {
    const message = { ...baseStreamListener } as StreamListener;
    message.handler =
      object.handler !== undefined && object.handler !== null
        ? StreamHandler.fromJSON(object.handler)
        : undefined;
    return message;
  },

  toJSON(message: StreamListener): unknown {
    const obj: any = {};
    message.handler !== undefined &&
      (obj.handler = message.handler
        ? StreamHandler.toJSON(message.handler)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StreamListener>, I>>(
    object: I
  ): StreamListener {
    const message = { ...baseStreamListener } as StreamListener;
    message.handler =
      object.handler !== undefined && object.handler !== null
        ? StreamHandler.fromPartial(object.handler)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(StreamListener.$type, StreamListener);

const baseHttp2Options: object = {
  $type: "yandex.cloud.apploadbalancer.v1.Http2Options",
  maxConcurrentStreams: 0,
};

export const Http2Options = {
  $type: "yandex.cloud.apploadbalancer.v1.Http2Options" as const,

  encode(
    message: Http2Options,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxConcurrentStreams !== 0) {
      writer.uint32(8).int64(message.maxConcurrentStreams);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Http2Options {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHttp2Options } as Http2Options;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxConcurrentStreams = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Http2Options {
    const message = { ...baseHttp2Options } as Http2Options;
    message.maxConcurrentStreams =
      object.maxConcurrentStreams !== undefined &&
      object.maxConcurrentStreams !== null
        ? Number(object.maxConcurrentStreams)
        : 0;
    return message;
  },

  toJSON(message: Http2Options): unknown {
    const obj: any = {};
    message.maxConcurrentStreams !== undefined &&
      (obj.maxConcurrentStreams = Math.round(message.maxConcurrentStreams));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Http2Options>, I>>(
    object: I
  ): Http2Options {
    const message = { ...baseHttp2Options } as Http2Options;
    message.maxConcurrentStreams = object.maxConcurrentStreams ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Http2Options.$type, Http2Options);

const baseStreamHandler: object = {
  $type: "yandex.cloud.apploadbalancer.v1.StreamHandler",
  backendGroupId: "",
};

export const StreamHandler = {
  $type: "yandex.cloud.apploadbalancer.v1.StreamHandler" as const,

  encode(
    message: StreamHandler,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamHandler {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamHandler } as StreamHandler;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backendGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamHandler {
    const message = { ...baseStreamHandler } as StreamHandler;
    message.backendGroupId =
      object.backendGroupId !== undefined && object.backendGroupId !== null
        ? String(object.backendGroupId)
        : "";
    return message;
  },

  toJSON(message: StreamHandler): unknown {
    const obj: any = {};
    message.backendGroupId !== undefined &&
      (obj.backendGroupId = message.backendGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StreamHandler>, I>>(
    object: I
  ): StreamHandler {
    const message = { ...baseStreamHandler } as StreamHandler;
    message.backendGroupId = object.backendGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StreamHandler.$type, StreamHandler);

const baseHttpHandler: object = {
  $type: "yandex.cloud.apploadbalancer.v1.HttpHandler",
  httpRouterId: "",
  rewriteRequestId: false,
};

export const HttpHandler = {
  $type: "yandex.cloud.apploadbalancer.v1.HttpHandler" as const,

  encode(
    message: HttpHandler,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.httpRouterId !== "") {
      writer.uint32(10).string(message.httpRouterId);
    }
    if (message.http2Options !== undefined) {
      Http2Options.encode(
        message.http2Options,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.allowHttp10 !== undefined) {
      writer.uint32(24).bool(message.allowHttp10);
    }
    if (message.rewriteRequestId === true) {
      writer.uint32(32).bool(message.rewriteRequestId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HttpHandler {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHttpHandler } as HttpHandler;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.httpRouterId = reader.string();
          break;
        case 2:
          message.http2Options = Http2Options.decode(reader, reader.uint32());
          break;
        case 3:
          message.allowHttp10 = reader.bool();
          break;
        case 4:
          message.rewriteRequestId = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HttpHandler {
    const message = { ...baseHttpHandler } as HttpHandler;
    message.httpRouterId =
      object.httpRouterId !== undefined && object.httpRouterId !== null
        ? String(object.httpRouterId)
        : "";
    message.http2Options =
      object.http2Options !== undefined && object.http2Options !== null
        ? Http2Options.fromJSON(object.http2Options)
        : undefined;
    message.allowHttp10 =
      object.allowHttp10 !== undefined && object.allowHttp10 !== null
        ? Boolean(object.allowHttp10)
        : undefined;
    message.rewriteRequestId =
      object.rewriteRequestId !== undefined && object.rewriteRequestId !== null
        ? Boolean(object.rewriteRequestId)
        : false;
    return message;
  },

  toJSON(message: HttpHandler): unknown {
    const obj: any = {};
    message.httpRouterId !== undefined &&
      (obj.httpRouterId = message.httpRouterId);
    message.http2Options !== undefined &&
      (obj.http2Options = message.http2Options
        ? Http2Options.toJSON(message.http2Options)
        : undefined);
    message.allowHttp10 !== undefined &&
      (obj.allowHttp10 = message.allowHttp10);
    message.rewriteRequestId !== undefined &&
      (obj.rewriteRequestId = message.rewriteRequestId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HttpHandler>, I>>(
    object: I
  ): HttpHandler {
    const message = { ...baseHttpHandler } as HttpHandler;
    message.httpRouterId = object.httpRouterId ?? "";
    message.http2Options =
      object.http2Options !== undefined && object.http2Options !== null
        ? Http2Options.fromPartial(object.http2Options)
        : undefined;
    message.allowHttp10 = object.allowHttp10 ?? undefined;
    message.rewriteRequestId = object.rewriteRequestId ?? false;
    return message;
  },
};

messageTypeRegistry.set(HttpHandler.$type, HttpHandler);

const baseRedirects: object = {
  $type: "yandex.cloud.apploadbalancer.v1.Redirects",
  httpToHttps: false,
};

export const Redirects = {
  $type: "yandex.cloud.apploadbalancer.v1.Redirects" as const,

  encode(
    message: Redirects,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.httpToHttps === true) {
      writer.uint32(8).bool(message.httpToHttps);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Redirects {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRedirects } as Redirects;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.httpToHttps = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Redirects {
    const message = { ...baseRedirects } as Redirects;
    message.httpToHttps =
      object.httpToHttps !== undefined && object.httpToHttps !== null
        ? Boolean(object.httpToHttps)
        : false;
    return message;
  },

  toJSON(message: Redirects): unknown {
    const obj: any = {};
    message.httpToHttps !== undefined &&
      (obj.httpToHttps = message.httpToHttps);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Redirects>, I>>(
    object: I
  ): Redirects {
    const message = { ...baseRedirects } as Redirects;
    message.httpToHttps = object.httpToHttps ?? false;
    return message;
  },
};

messageTypeRegistry.set(Redirects.$type, Redirects);

const baseSniMatch: object = {
  $type: "yandex.cloud.apploadbalancer.v1.SniMatch",
  name: "",
  serverNames: "",
};

export const SniMatch = {
  $type: "yandex.cloud.apploadbalancer.v1.SniMatch" as const,

  encode(
    message: SniMatch,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.serverNames) {
      writer.uint32(18).string(v!);
    }
    if (message.handler !== undefined) {
      TlsHandler.encode(message.handler, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SniMatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSniMatch } as SniMatch;
    message.serverNames = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.serverNames.push(reader.string());
          break;
        case 3:
          message.handler = TlsHandler.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SniMatch {
    const message = { ...baseSniMatch } as SniMatch;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.serverNames = (object.serverNames ?? []).map((e: any) => String(e));
    message.handler =
      object.handler !== undefined && object.handler !== null
        ? TlsHandler.fromJSON(object.handler)
        : undefined;
    return message;
  },

  toJSON(message: SniMatch): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.serverNames) {
      obj.serverNames = message.serverNames.map((e) => e);
    } else {
      obj.serverNames = [];
    }
    message.handler !== undefined &&
      (obj.handler = message.handler
        ? TlsHandler.toJSON(message.handler)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SniMatch>, I>>(object: I): SniMatch {
    const message = { ...baseSniMatch } as SniMatch;
    message.name = object.name ?? "";
    message.serverNames = object.serverNames?.map((e) => e) || [];
    message.handler =
      object.handler !== undefined && object.handler !== null
        ? TlsHandler.fromPartial(object.handler)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(SniMatch.$type, SniMatch);

const baseTlsHandler: object = {
  $type: "yandex.cloud.apploadbalancer.v1.TlsHandler",
  certificateIds: "",
};

export const TlsHandler = {
  $type: "yandex.cloud.apploadbalancer.v1.TlsHandler" as const,

  encode(
    message: TlsHandler,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.httpHandler !== undefined) {
      HttpHandler.encode(
        message.httpHandler,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.streamHandler !== undefined) {
      StreamHandler.encode(
        message.streamHandler,
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.certificateIds) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TlsHandler {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTlsHandler } as TlsHandler;
    message.certificateIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.httpHandler = HttpHandler.decode(reader, reader.uint32());
          break;
        case 4:
          message.streamHandler = StreamHandler.decode(reader, reader.uint32());
          break;
        case 3:
          message.certificateIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TlsHandler {
    const message = { ...baseTlsHandler } as TlsHandler;
    message.httpHandler =
      object.httpHandler !== undefined && object.httpHandler !== null
        ? HttpHandler.fromJSON(object.httpHandler)
        : undefined;
    message.streamHandler =
      object.streamHandler !== undefined && object.streamHandler !== null
        ? StreamHandler.fromJSON(object.streamHandler)
        : undefined;
    message.certificateIds = (object.certificateIds ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: TlsHandler): unknown {
    const obj: any = {};
    message.httpHandler !== undefined &&
      (obj.httpHandler = message.httpHandler
        ? HttpHandler.toJSON(message.httpHandler)
        : undefined);
    message.streamHandler !== undefined &&
      (obj.streamHandler = message.streamHandler
        ? StreamHandler.toJSON(message.streamHandler)
        : undefined);
    if (message.certificateIds) {
      obj.certificateIds = message.certificateIds.map((e) => e);
    } else {
      obj.certificateIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TlsHandler>, I>>(
    object: I
  ): TlsHandler {
    const message = { ...baseTlsHandler } as TlsHandler;
    message.httpHandler =
      object.httpHandler !== undefined && object.httpHandler !== null
        ? HttpHandler.fromPartial(object.httpHandler)
        : undefined;
    message.streamHandler =
      object.streamHandler !== undefined && object.streamHandler !== null
        ? StreamHandler.fromPartial(object.streamHandler)
        : undefined;
    message.certificateIds = object.certificateIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(TlsHandler.$type, TlsHandler);

const baseTargetState: object = {
  $type: "yandex.cloud.apploadbalancer.v1.TargetState",
};

export const TargetState = {
  $type: "yandex.cloud.apploadbalancer.v1.TargetState" as const,

  encode(
    message: TargetState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== undefined) {
      TargetState_HealthcheckStatus.encode(
        message.status,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.target !== undefined) {
      Target.encode(message.target, writer.uint32(18).fork()).ldelim();
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
          message.status = TargetState_HealthcheckStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.target = Target.decode(reader, reader.uint32());
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
    message.status =
      object.status !== undefined && object.status !== null
        ? TargetState_HealthcheckStatus.fromJSON(object.status)
        : undefined;
    message.target =
      object.target !== undefined && object.target !== null
        ? Target.fromJSON(object.target)
        : undefined;
    return message;
  },

  toJSON(message: TargetState): unknown {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = message.status
        ? TargetState_HealthcheckStatus.toJSON(message.status)
        : undefined);
    message.target !== undefined &&
      (obj.target = message.target ? Target.toJSON(message.target) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TargetState>, I>>(
    object: I
  ): TargetState {
    const message = { ...baseTargetState } as TargetState;
    message.status =
      object.status !== undefined && object.status !== null
        ? TargetState_HealthcheckStatus.fromPartial(object.status)
        : undefined;
    message.target =
      object.target !== undefined && object.target !== null
        ? Target.fromPartial(object.target)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(TargetState.$type, TargetState);

const baseTargetState_HealthcheckStatus: object = {
  $type: "yandex.cloud.apploadbalancer.v1.TargetState.HealthcheckStatus",
};

export const TargetState_HealthcheckStatus = {
  $type:
    "yandex.cloud.apploadbalancer.v1.TargetState.HealthcheckStatus" as const,

  encode(
    message: TargetState_HealthcheckStatus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.zoneStatuses) {
      TargetState_ZoneHealthcheckStatus.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TargetState_HealthcheckStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTargetState_HealthcheckStatus,
    } as TargetState_HealthcheckStatus;
    message.zoneStatuses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.zoneStatuses.push(
            TargetState_ZoneHealthcheckStatus.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TargetState_HealthcheckStatus {
    const message = {
      ...baseTargetState_HealthcheckStatus,
    } as TargetState_HealthcheckStatus;
    message.zoneStatuses = (object.zoneStatuses ?? []).map((e: any) =>
      TargetState_ZoneHealthcheckStatus.fromJSON(e)
    );
    return message;
  },

  toJSON(message: TargetState_HealthcheckStatus): unknown {
    const obj: any = {};
    if (message.zoneStatuses) {
      obj.zoneStatuses = message.zoneStatuses.map((e) =>
        e ? TargetState_ZoneHealthcheckStatus.toJSON(e) : undefined
      );
    } else {
      obj.zoneStatuses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TargetState_HealthcheckStatus>, I>>(
    object: I
  ): TargetState_HealthcheckStatus {
    const message = {
      ...baseTargetState_HealthcheckStatus,
    } as TargetState_HealthcheckStatus;
    message.zoneStatuses =
      object.zoneStatuses?.map((e) =>
        TargetState_ZoneHealthcheckStatus.fromPartial(e)
      ) || [];
    return message;
  },
};

messageTypeRegistry.set(
  TargetState_HealthcheckStatus.$type,
  TargetState_HealthcheckStatus
);

const baseTargetState_ZoneHealthcheckStatus: object = {
  $type: "yandex.cloud.apploadbalancer.v1.TargetState.ZoneHealthcheckStatus",
  zoneId: "",
  status: 0,
  failedActiveHc: false,
};

export const TargetState_ZoneHealthcheckStatus = {
  $type:
    "yandex.cloud.apploadbalancer.v1.TargetState.ZoneHealthcheckStatus" as const,

  encode(
    message: TargetState_ZoneHealthcheckStatus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.failedActiveHc === true) {
      writer.uint32(24).bool(message.failedActiveHc);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TargetState_ZoneHealthcheckStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTargetState_ZoneHealthcheckStatus,
    } as TargetState_ZoneHealthcheckStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.failedActiveHc = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TargetState_ZoneHealthcheckStatus {
    const message = {
      ...baseTargetState_ZoneHealthcheckStatus,
    } as TargetState_ZoneHealthcheckStatus;
    message.zoneId =
      object.zoneId !== undefined && object.zoneId !== null
        ? String(object.zoneId)
        : "";
    message.status =
      object.status !== undefined && object.status !== null
        ? targetState_StatusFromJSON(object.status)
        : 0;
    message.failedActiveHc =
      object.failedActiveHc !== undefined && object.failedActiveHc !== null
        ? Boolean(object.failedActiveHc)
        : false;
    return message;
  },

  toJSON(message: TargetState_ZoneHealthcheckStatus): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.status !== undefined &&
      (obj.status = targetState_StatusToJSON(message.status));
    message.failedActiveHc !== undefined &&
      (obj.failedActiveHc = message.failedActiveHc);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<TargetState_ZoneHealthcheckStatus>, I>
  >(object: I): TargetState_ZoneHealthcheckStatus {
    const message = {
      ...baseTargetState_ZoneHealthcheckStatus,
    } as TargetState_ZoneHealthcheckStatus;
    message.zoneId = object.zoneId ?? "";
    message.status = object.status ?? 0;
    message.failedActiveHc = object.failedActiveHc ?? false;
    return message;
  },
};

messageTypeRegistry.set(
  TargetState_ZoneHealthcheckStatus.$type,
  TargetState_ZoneHealthcheckStatus
);

const baseAutoScalePolicy: object = {
  $type: "yandex.cloud.apploadbalancer.v1.AutoScalePolicy",
  minZoneSize: 0,
  maxSize: 0,
};

export const AutoScalePolicy = {
  $type: "yandex.cloud.apploadbalancer.v1.AutoScalePolicy" as const,

  encode(
    message: AutoScalePolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.minZoneSize !== 0) {
      writer.uint32(8).int64(message.minZoneSize);
    }
    if (message.maxSize !== 0) {
      writer.uint32(16).int64(message.maxSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AutoScalePolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAutoScalePolicy } as AutoScalePolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minZoneSize = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.maxSize = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AutoScalePolicy {
    const message = { ...baseAutoScalePolicy } as AutoScalePolicy;
    message.minZoneSize =
      object.minZoneSize !== undefined && object.minZoneSize !== null
        ? Number(object.minZoneSize)
        : 0;
    message.maxSize =
      object.maxSize !== undefined && object.maxSize !== null
        ? Number(object.maxSize)
        : 0;
    return message;
  },

  toJSON(message: AutoScalePolicy): unknown {
    const obj: any = {};
    message.minZoneSize !== undefined &&
      (obj.minZoneSize = Math.round(message.minZoneSize));
    message.maxSize !== undefined &&
      (obj.maxSize = Math.round(message.maxSize));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AutoScalePolicy>, I>>(
    object: I
  ): AutoScalePolicy {
    const message = { ...baseAutoScalePolicy } as AutoScalePolicy;
    message.minZoneSize = object.minZoneSize ?? 0;
    message.maxSize = object.maxSize ?? 0;
    return message;
  },
};

messageTypeRegistry.set(AutoScalePolicy.$type, AutoScalePolicy);

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
