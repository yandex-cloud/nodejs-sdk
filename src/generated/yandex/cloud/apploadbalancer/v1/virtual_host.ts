/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Payload } from "../../../../yandex/cloud/apploadbalancer/v1/payload";
import { Duration } from "../../../../google/protobuf/duration";

export const protobufPackage = "yandex.cloud.apploadbalancer.v1";

/**
 * A virtual host resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#virtual-host).
 */
export interface VirtualHost {
  $type: "yandex.cloud.apploadbalancer.v1.VirtualHost";
  /** Name of the virtual host. The name is unique within the HTTP router. */
  name: string;
  /**
   * List of domains that are attributed to the virtual host.
   *
   * The host is selected to process the request received by the load balancer
   * if the domain specified in the HTTP/1.1 `Host` header or the HTTP/2 `:authority` pseudo-header matches a domain
   * specified in the host.
   *
   * A wildcard asterisk character (`*`) matches 0 or more characters.
   *
   * If not specified, all domains are attributed to the host, which is the same as specifying a `*` value.
   * An HTTP router must not contain more than one virtual host to which all domains are attributed.
   */
  authority: string[];
  /**
   * Routes of the virtual host.
   *
   * A route contains a set of conditions (predicates) that are used by the load balancer to select the route
   * for the request and an action on the request.
   * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#routes).
   *
   * The order of routes matters: the first route whose predicate matches the request is selected.
   * The most specific routes should be at the top of the list, so that they are not overridden.
   * For example, if the first HTTP route is configured, via [HttpRoute.match], to match paths prefixed with just `/`,
   * other routes are never matched.
   */
  routes: Route[];
  /** Deprecated, use route_options.modify_request_headers. */
  modifyRequestHeaders: HeaderModification[];
  /** Deprecated, use route_options.modify_response_headers. */
  modifyResponseHeaders: HeaderModification[];
  routeOptions?: RouteOptions;
}

export interface RouteOptions {
  $type: "yandex.cloud.apploadbalancer.v1.RouteOptions";
  /** Apply the following modifications to the request headers. */
  modifyRequestHeaders: HeaderModification[];
  /** Apply the following modifications to the response headers. */
  modifyResponseHeaders: HeaderModification[];
  rbac?: RBAC;
  /** Security profile that will take effect to all requests routed via particular virtual host. */
  securityProfileId: string;
}

/**
 * Role Based Access Control (RBAC) provides router, virtual host, and route access control for the ALB
 * service. Requests are allowed or denied based on the `action` and whether a matching principal is
 * found. For instance, if the action is ALLOW and a matching principal is found the request should be
 * allowed.
 */
export interface RBAC {
  $type: "yandex.cloud.apploadbalancer.v1.RBAC";
  /** The action to take if a principal matches. Every action either allows or denies a request. */
  action: RBAC_Action;
  /** Required. A match occurs when at least one matches the request. */
  principals: Principals[];
}

export enum RBAC_Action {
  ACTION_UNSPECIFIED = 0,
  /** ALLOW - Allows the request if and only if there is a principal that matches the request. */
  ALLOW = 1,
  /** DENY - Allows the request if and only if there are no principal that match the request. */
  DENY = 2,
  UNRECOGNIZED = -1,
}

export function rBAC_ActionFromJSON(object: any): RBAC_Action {
  switch (object) {
    case 0:
    case "ACTION_UNSPECIFIED":
      return RBAC_Action.ACTION_UNSPECIFIED;
    case 1:
    case "ALLOW":
      return RBAC_Action.ALLOW;
    case 2:
    case "DENY":
      return RBAC_Action.DENY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RBAC_Action.UNRECOGNIZED;
  }
}

export function rBAC_ActionToJSON(object: RBAC_Action): string {
  switch (object) {
    case RBAC_Action.ACTION_UNSPECIFIED:
      return "ACTION_UNSPECIFIED";
    case RBAC_Action.ALLOW:
      return "ALLOW";
    case RBAC_Action.DENY:
      return "DENY";
    default:
      return "UNKNOWN";
  }
}

/** Principals define a group of identities for a request. */
export interface Principals {
  $type: "yandex.cloud.apploadbalancer.v1.Principals";
  /** Required. A match occurs when all principals match the request. */
  andPrincipals: Principal[];
}

/** Principal defines an identity for a request. */
export interface Principal {
  $type: "yandex.cloud.apploadbalancer.v1.Principal";
  /** A header (or pseudo-header such as :path or :method) of the incoming HTTP request. */
  header?: Principal_HeaderMatcher | undefined;
  /** A CIDR block or IP that describes the request remote/origin address, e.g. ``192.0.0.0/24`` or``192.0.0.4`` . */
  remoteIp: string | undefined;
  /** When any is set, it matches any request. */
  any: boolean | undefined;
}

export interface Principal_HeaderMatcher {
  $type: "yandex.cloud.apploadbalancer.v1.Principal.HeaderMatcher";
  /** Specifies the name of the header in the request. */
  name: string;
  /**
   * Specifies how the header match will be performed to route the request.
   * In the absence of value a request that has specified header name will match,
   * regardless of the header's value.
   */
  value?: StringMatch;
}

/** A header modification resource. */
export interface HeaderModification {
  $type: "yandex.cloud.apploadbalancer.v1.HeaderModification";
  /** Name of the header. */
  name: string;
  /**
   * Appends the specified string to the header value.
   *
   * Variables [defined for Envoy proxy](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_conn_man/headers#custom-request-response-headers)
   * are supported.
   */
  append: string | undefined;
  /**
   * Replaces the value of the header with the specified string.
   *
   * Variables [defined for Envoy proxy](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_conn_man/headers#custom-request-response-headers)
   * are supported.
   */
  replace: string | undefined;
  /** Removes the header. */
  remove: boolean | undefined;
  /**
   * Replaces the name of the header with the specified string.
   * This operation is only supported for ALB Virtual Hosts.
   */
  rename: string | undefined;
}

/**
 * A route resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#routes).
 */
export interface Route {
  $type: "yandex.cloud.apploadbalancer.v1.Route";
  /** Name of the route. */
  name: string;
  /** HTTP route configuration. */
  http?: HttpRoute | undefined;
  /** gRPC route configuration. */
  grpc?: GrpcRoute | undefined;
  routeOptions?: RouteOptions;
}

/** An HTTP route configuration resource. */
export interface HttpRoute {
  $type: "yandex.cloud.apploadbalancer.v1.HttpRoute";
  /** Condition (predicate) used to select the route. */
  match?: HttpRouteMatch;
  /** Forwards the request to a backend group for processing as configured. */
  route?: HttpRouteAction | undefined;
  /** Redirects the request as configured. */
  redirect?: RedirectAction | undefined;
  /** Instructs the load balancer to respond directly as configured. */
  directResponse?: DirectResponseAction | undefined;
}

/** A gRPC route configuration resource. */
export interface GrpcRoute {
  $type: "yandex.cloud.apploadbalancer.v1.GrpcRoute";
  /** Condition (predicate) used to select the route. */
  match?: GrpcRouteMatch;
  /** Forwards the request to a backend group for processing as configured. */
  route?: GrpcRouteAction | undefined;
  /** Instructs the load balancer to respond directly with a specified status. */
  statusResponse?: GrpcStatusResponseAction | undefined;
}

/** An HTTP route condition (predicate) resource. */
export interface HttpRouteMatch {
  $type: "yandex.cloud.apploadbalancer.v1.HttpRouteMatch";
  /** HTTP method specified in the request. */
  httpMethod: string[];
  /**
   * Match settings for the path specified in the request.
   *
   * If not specified, the route matches all paths.
   */
  path?: StringMatch;
}

/** A gRPC route condition (predicate) resource. */
export interface GrpcRouteMatch {
  $type: "yandex.cloud.apploadbalancer.v1.GrpcRouteMatch";
  /**
   * Match settings for gRPC service method called in the request.
   *
   * A match string must be a fully qualified method name, e.g. `foo.bar.v1.BazService/Get`, or a prefix of such.
   *
   * If not specified, the route matches all methods.
   */
  fqmn?: StringMatch;
}

/** A string matcher resource. */
export interface StringMatch {
  $type: "yandex.cloud.apploadbalancer.v1.StringMatch";
  /** Exact match string. */
  exactMatch: string | undefined;
  /** Prefix match string. */
  prefixMatch: string | undefined;
  /** Regular expression match string. */
  regexMatch: string | undefined;
}

/** A redirect action resource. */
export interface RedirectAction {
  $type: "yandex.cloud.apploadbalancer.v1.RedirectAction";
  /**
   * URI scheme replacement.
   *
   * If `http` or `https` scheme is to be replaced and `80` or `443` port is specified in the original URI,
   * the port is also removed.
   *
   * If not specified, the original scheme and port are used.
   */
  replaceScheme: string;
  /**
   * URI host replacement.
   *
   * If not specified, the original host is used.
   */
  replaceHost: string;
  /**
   * URI host replacement.
   *
   * If not specified, the original host is used.
   */
  replacePort: number;
  /** Replacement for the whole path. */
  replacePath: string | undefined;
  /**
   * Replacement for the path prefix matched by [StringMatch].
   *
   * For instance, if [StringMatch.prefix_match] value is `/foo` and `replace_prefix` value is `/bar`,
   * a request with `https://example.com/foobaz` URI is redirected to `https://example.com/barbaz`.
   * For [StringMatch.exact_match], the whole path is replaced.
   */
  replacePrefix: string | undefined;
  /** Removes URI query. */
  removeQuery: boolean;
  /** HTTP status code to use in redirect responses. */
  responseCode: RedirectAction_RedirectResponseCode;
}

/** HTTP status codes supported for use in redirect responses. */
export enum RedirectAction_RedirectResponseCode {
  /** MOVED_PERMANENTLY - `301 Moved Permanently` status code. */
  MOVED_PERMANENTLY = 0,
  /** FOUND - `302 Found` status code. */
  FOUND = 1,
  /** SEE_OTHER - `303 See Other` status code. */
  SEE_OTHER = 2,
  /** TEMPORARY_REDIRECT - `307 Temporary Redirect` status code. */
  TEMPORARY_REDIRECT = 3,
  /** PERMANENT_REDIRECT - `308 Permanent Redirect` status code. */
  PERMANENT_REDIRECT = 4,
  UNRECOGNIZED = -1,
}

export function redirectAction_RedirectResponseCodeFromJSON(
  object: any
): RedirectAction_RedirectResponseCode {
  switch (object) {
    case 0:
    case "MOVED_PERMANENTLY":
      return RedirectAction_RedirectResponseCode.MOVED_PERMANENTLY;
    case 1:
    case "FOUND":
      return RedirectAction_RedirectResponseCode.FOUND;
    case 2:
    case "SEE_OTHER":
      return RedirectAction_RedirectResponseCode.SEE_OTHER;
    case 3:
    case "TEMPORARY_REDIRECT":
      return RedirectAction_RedirectResponseCode.TEMPORARY_REDIRECT;
    case 4:
    case "PERMANENT_REDIRECT":
      return RedirectAction_RedirectResponseCode.PERMANENT_REDIRECT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RedirectAction_RedirectResponseCode.UNRECOGNIZED;
  }
}

export function redirectAction_RedirectResponseCodeToJSON(
  object: RedirectAction_RedirectResponseCode
): string {
  switch (object) {
    case RedirectAction_RedirectResponseCode.MOVED_PERMANENTLY:
      return "MOVED_PERMANENTLY";
    case RedirectAction_RedirectResponseCode.FOUND:
      return "FOUND";
    case RedirectAction_RedirectResponseCode.SEE_OTHER:
      return "SEE_OTHER";
    case RedirectAction_RedirectResponseCode.TEMPORARY_REDIRECT:
      return "TEMPORARY_REDIRECT";
    case RedirectAction_RedirectResponseCode.PERMANENT_REDIRECT:
      return "PERMANENT_REDIRECT";
    default:
      return "UNKNOWN";
  }
}

/** A direct response action resource. */
export interface DirectResponseAction {
  $type: "yandex.cloud.apploadbalancer.v1.DirectResponseAction";
  /** HTTP status code to use in responses. */
  status: number;
  /** Response body. */
  body?: Payload;
}

/** A gRPC status response action resource. */
export interface GrpcStatusResponseAction {
  $type: "yandex.cloud.apploadbalancer.v1.GrpcStatusResponseAction";
  /** gRPC [status code](https://grpc.github.io/grpc/core/md_doc_statuscodes.html) to use in responses. */
  status: GrpcStatusResponseAction_Status;
}

/** gRPC status code supported for use in responses. */
export enum GrpcStatusResponseAction_Status {
  /** OK - `OK` (0) status code. */
  OK = 0,
  /** INVALID_ARGUMENT - `INVALID_ARGUMENT` (3) status code. */
  INVALID_ARGUMENT = 1,
  /** NOT_FOUND - `NOT_FOUND` (5) status code. */
  NOT_FOUND = 2,
  /** PERMISSION_DENIED - `PERMISSION_DENIED` (7) status code. */
  PERMISSION_DENIED = 3,
  /** UNAUTHENTICATED - `UNAUTHENTICATED` (16) status code. */
  UNAUTHENTICATED = 4,
  /** UNIMPLEMENTED - `UNIMPLEMENTED` (12) status code. */
  UNIMPLEMENTED = 5,
  /** INTERNAL - `INTERNAL` (13) status code. */
  INTERNAL = 6,
  /** UNAVAILABLE - `UNAVAILABLE` (14) status code. */
  UNAVAILABLE = 7,
  UNRECOGNIZED = -1,
}

export function grpcStatusResponseAction_StatusFromJSON(
  object: any
): GrpcStatusResponseAction_Status {
  switch (object) {
    case 0:
    case "OK":
      return GrpcStatusResponseAction_Status.OK;
    case 1:
    case "INVALID_ARGUMENT":
      return GrpcStatusResponseAction_Status.INVALID_ARGUMENT;
    case 2:
    case "NOT_FOUND":
      return GrpcStatusResponseAction_Status.NOT_FOUND;
    case 3:
    case "PERMISSION_DENIED":
      return GrpcStatusResponseAction_Status.PERMISSION_DENIED;
    case 4:
    case "UNAUTHENTICATED":
      return GrpcStatusResponseAction_Status.UNAUTHENTICATED;
    case 5:
    case "UNIMPLEMENTED":
      return GrpcStatusResponseAction_Status.UNIMPLEMENTED;
    case 6:
    case "INTERNAL":
      return GrpcStatusResponseAction_Status.INTERNAL;
    case 7:
    case "UNAVAILABLE":
      return GrpcStatusResponseAction_Status.UNAVAILABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GrpcStatusResponseAction_Status.UNRECOGNIZED;
  }
}

export function grpcStatusResponseAction_StatusToJSON(
  object: GrpcStatusResponseAction_Status
): string {
  switch (object) {
    case GrpcStatusResponseAction_Status.OK:
      return "OK";
    case GrpcStatusResponseAction_Status.INVALID_ARGUMENT:
      return "INVALID_ARGUMENT";
    case GrpcStatusResponseAction_Status.NOT_FOUND:
      return "NOT_FOUND";
    case GrpcStatusResponseAction_Status.PERMISSION_DENIED:
      return "PERMISSION_DENIED";
    case GrpcStatusResponseAction_Status.UNAUTHENTICATED:
      return "UNAUTHENTICATED";
    case GrpcStatusResponseAction_Status.UNIMPLEMENTED:
      return "UNIMPLEMENTED";
    case GrpcStatusResponseAction_Status.INTERNAL:
      return "INTERNAL";
    case GrpcStatusResponseAction_Status.UNAVAILABLE:
      return "UNAVAILABLE";
    default:
      return "UNKNOWN";
  }
}

/** An HTTP route action resource. */
export interface HttpRouteAction {
  $type: "yandex.cloud.apploadbalancer.v1.HttpRouteAction";
  /**
   * Backend group to forward requests to.
   *
   * Stream (TCP) backend groups are not supported.
   */
  backendGroupId: string;
  /**
   * Overall timeout for an HTTP connection between a load balancer node an a backend from the backend group:
   * the maximum time the connection is kept alive for, regardless of whether data is transferred over it.
   *
   * If a connection times out, the load balancer responds to the client with a `504 Gateway Timeout` status code.
   *
   * Default value: `60`.
   */
  timeout?: Duration;
  /**
   * Idle timeout for an HTTP connection between a load balancer node an a backend from the backend group:
   * the maximum time the connection is allowed to be idle, i.e. without any data transferred over it.
   *
   * Specifying meaningful values for both [timeout] and `idle_timeout` is useful for implementing
   * server-push mechanisms such as long polling, server-sent events (`EventSource` interface) etc.
   *
   * If a connection times out, the load balancer responds to the client with a `504 Gateway Timeout` status code.
   *
   * If not specified, no idle timeout is used, and an alive connection may be idle for any duration (see [timeout]).
   */
  idleTimeout?: Duration;
  /** Host replacement. */
  hostRewrite: string | undefined;
  /** Automatically replaces the host with that of the target. */
  autoHostRewrite: boolean | undefined;
  /**
   * Replacement for the path prefix matched by [StringMatch].
   *
   * For instance, if [StringMatch.prefix_match] value is `/foo` and `prefix_rewrite` value is `/bar`,
   * a request with `/foobaz` path is forwarded with `/barbaz` path.
   * For [StringMatch.exact_match], the whole path is replaced.
   *
   * If not specified, the path is not changed.
   */
  prefixRewrite: string;
  /** Supported values for HTTP `Upgrade` header. E.g. `websocket`. */
  upgradeTypes: string[];
}

/** A gRPC route action resource. */
export interface GrpcRouteAction {
  $type: "yandex.cloud.apploadbalancer.v1.GrpcRouteAction";
  /** Backend group to forward requests to. */
  backendGroupId: string;
  /**
   * Overall timeout for an underlying HTTP connection between a load balancer node an a backend from the backend group:
   * the maximum time the connection is kept alive for, regardless of whether data is transferred over it.
   *
   * If a client specifies a lower timeout in HTTP `grpc-timeout` header, the `max_timeout` value is ignored.
   *
   * If a connection times out, the load balancer responds to the client with an `UNAVAILABLE` status code.
   *
   * Default value: `60`.
   */
  maxTimeout?: Duration;
  /**
   * Idle timeout for an underlying HTTP connection between a load balancer node an a backend from the backend group:
   * the maximum time the connection is allowed to be idle, i.e. without any data transferred over it.
   *
   * Specifying meaningful values for both [max_timeout] and `idle_timeout` is useful for implementing
   * server-push mechanisms such as long polling, server-sent events etc.
   *
   * If a connection times out, the load balancer responds to the client with an `UNAVAILABLE` status code.
   *
   * If not specified, no idle timeout is used, and an alive connection may be idle for any duration
   * (see [max_timeout]).
   */
  idleTimeout?: Duration;
  /** Host replacement. */
  hostRewrite: string | undefined;
  /** Automatically replaces the host with that of the target. */
  autoHostRewrite: boolean | undefined;
}

const baseVirtualHost: object = {
  $type: "yandex.cloud.apploadbalancer.v1.VirtualHost",
  name: "",
  authority: "",
};

export const VirtualHost = {
  $type: "yandex.cloud.apploadbalancer.v1.VirtualHost" as const,

  encode(
    message: VirtualHost,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.authority) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.routes) {
      Route.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.modifyRequestHeaders) {
      HeaderModification.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.modifyResponseHeaders) {
      HeaderModification.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.routeOptions !== undefined) {
      RouteOptions.encode(
        message.routeOptions,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VirtualHost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVirtualHost } as VirtualHost;
    message.authority = [];
    message.routes = [];
    message.modifyRequestHeaders = [];
    message.modifyResponseHeaders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.authority.push(reader.string());
          break;
        case 3:
          message.routes.push(Route.decode(reader, reader.uint32()));
          break;
        case 4:
          message.modifyRequestHeaders.push(
            HeaderModification.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.modifyResponseHeaders.push(
            HeaderModification.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.routeOptions = RouteOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VirtualHost {
    const message = { ...baseVirtualHost } as VirtualHost;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.authority = (object.authority ?? []).map((e: any) => String(e));
    message.routes = (object.routes ?? []).map((e: any) => Route.fromJSON(e));
    message.modifyRequestHeaders = (object.modifyRequestHeaders ?? []).map(
      (e: any) => HeaderModification.fromJSON(e)
    );
    message.modifyResponseHeaders = (object.modifyResponseHeaders ?? []).map(
      (e: any) => HeaderModification.fromJSON(e)
    );
    message.routeOptions =
      object.routeOptions !== undefined && object.routeOptions !== null
        ? RouteOptions.fromJSON(object.routeOptions)
        : undefined;
    return message;
  },

  toJSON(message: VirtualHost): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.authority) {
      obj.authority = message.authority.map((e) => e);
    } else {
      obj.authority = [];
    }
    if (message.routes) {
      obj.routes = message.routes.map((e) => (e ? Route.toJSON(e) : undefined));
    } else {
      obj.routes = [];
    }
    if (message.modifyRequestHeaders) {
      obj.modifyRequestHeaders = message.modifyRequestHeaders.map((e) =>
        e ? HeaderModification.toJSON(e) : undefined
      );
    } else {
      obj.modifyRequestHeaders = [];
    }
    if (message.modifyResponseHeaders) {
      obj.modifyResponseHeaders = message.modifyResponseHeaders.map((e) =>
        e ? HeaderModification.toJSON(e) : undefined
      );
    } else {
      obj.modifyResponseHeaders = [];
    }
    message.routeOptions !== undefined &&
      (obj.routeOptions = message.routeOptions
        ? RouteOptions.toJSON(message.routeOptions)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VirtualHost>, I>>(
    object: I
  ): VirtualHost {
    const message = { ...baseVirtualHost } as VirtualHost;
    message.name = object.name ?? "";
    message.authority = object.authority?.map((e) => e) || [];
    message.routes = object.routes?.map((e) => Route.fromPartial(e)) || [];
    message.modifyRequestHeaders =
      object.modifyRequestHeaders?.map((e) =>
        HeaderModification.fromPartial(e)
      ) || [];
    message.modifyResponseHeaders =
      object.modifyResponseHeaders?.map((e) =>
        HeaderModification.fromPartial(e)
      ) || [];
    message.routeOptions =
      object.routeOptions !== undefined && object.routeOptions !== null
        ? RouteOptions.fromPartial(object.routeOptions)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(VirtualHost.$type, VirtualHost);

const baseRouteOptions: object = {
  $type: "yandex.cloud.apploadbalancer.v1.RouteOptions",
  securityProfileId: "",
};

export const RouteOptions = {
  $type: "yandex.cloud.apploadbalancer.v1.RouteOptions" as const,

  encode(
    message: RouteOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.modifyRequestHeaders) {
      HeaderModification.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.modifyResponseHeaders) {
      HeaderModification.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.rbac !== undefined) {
      RBAC.encode(message.rbac, writer.uint32(26).fork()).ldelim();
    }
    if (message.securityProfileId !== "") {
      writer.uint32(34).string(message.securityProfileId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RouteOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRouteOptions } as RouteOptions;
    message.modifyRequestHeaders = [];
    message.modifyResponseHeaders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.modifyRequestHeaders.push(
            HeaderModification.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.modifyResponseHeaders.push(
            HeaderModification.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.rbac = RBAC.decode(reader, reader.uint32());
          break;
        case 4:
          message.securityProfileId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RouteOptions {
    const message = { ...baseRouteOptions } as RouteOptions;
    message.modifyRequestHeaders = (object.modifyRequestHeaders ?? []).map(
      (e: any) => HeaderModification.fromJSON(e)
    );
    message.modifyResponseHeaders = (object.modifyResponseHeaders ?? []).map(
      (e: any) => HeaderModification.fromJSON(e)
    );
    message.rbac =
      object.rbac !== undefined && object.rbac !== null
        ? RBAC.fromJSON(object.rbac)
        : undefined;
    message.securityProfileId =
      object.securityProfileId !== undefined &&
      object.securityProfileId !== null
        ? String(object.securityProfileId)
        : "";
    return message;
  },

  toJSON(message: RouteOptions): unknown {
    const obj: any = {};
    if (message.modifyRequestHeaders) {
      obj.modifyRequestHeaders = message.modifyRequestHeaders.map((e) =>
        e ? HeaderModification.toJSON(e) : undefined
      );
    } else {
      obj.modifyRequestHeaders = [];
    }
    if (message.modifyResponseHeaders) {
      obj.modifyResponseHeaders = message.modifyResponseHeaders.map((e) =>
        e ? HeaderModification.toJSON(e) : undefined
      );
    } else {
      obj.modifyResponseHeaders = [];
    }
    message.rbac !== undefined &&
      (obj.rbac = message.rbac ? RBAC.toJSON(message.rbac) : undefined);
    message.securityProfileId !== undefined &&
      (obj.securityProfileId = message.securityProfileId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RouteOptions>, I>>(
    object: I
  ): RouteOptions {
    const message = { ...baseRouteOptions } as RouteOptions;
    message.modifyRequestHeaders =
      object.modifyRequestHeaders?.map((e) =>
        HeaderModification.fromPartial(e)
      ) || [];
    message.modifyResponseHeaders =
      object.modifyResponseHeaders?.map((e) =>
        HeaderModification.fromPartial(e)
      ) || [];
    message.rbac =
      object.rbac !== undefined && object.rbac !== null
        ? RBAC.fromPartial(object.rbac)
        : undefined;
    message.securityProfileId = object.securityProfileId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RouteOptions.$type, RouteOptions);

const baseRBAC: object = {
  $type: "yandex.cloud.apploadbalancer.v1.RBAC",
  action: 0,
};

export const RBAC = {
  $type: "yandex.cloud.apploadbalancer.v1.RBAC" as const,

  encode(message: RBAC, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== 0) {
      writer.uint32(8).int32(message.action);
    }
    for (const v of message.principals) {
      Principals.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RBAC {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRBAC } as RBAC;
    message.principals = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.action = reader.int32() as any;
          break;
        case 2:
          message.principals.push(Principals.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RBAC {
    const message = { ...baseRBAC } as RBAC;
    message.action =
      object.action !== undefined && object.action !== null
        ? rBAC_ActionFromJSON(object.action)
        : 0;
    message.principals = (object.principals ?? []).map((e: any) =>
      Principals.fromJSON(e)
    );
    return message;
  },

  toJSON(message: RBAC): unknown {
    const obj: any = {};
    message.action !== undefined &&
      (obj.action = rBAC_ActionToJSON(message.action));
    if (message.principals) {
      obj.principals = message.principals.map((e) =>
        e ? Principals.toJSON(e) : undefined
      );
    } else {
      obj.principals = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RBAC>, I>>(object: I): RBAC {
    const message = { ...baseRBAC } as RBAC;
    message.action = object.action ?? 0;
    message.principals =
      object.principals?.map((e) => Principals.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(RBAC.$type, RBAC);

const basePrincipals: object = {
  $type: "yandex.cloud.apploadbalancer.v1.Principals",
};

export const Principals = {
  $type: "yandex.cloud.apploadbalancer.v1.Principals" as const,

  encode(
    message: Principals,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.andPrincipals) {
      Principal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Principals {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePrincipals } as Principals;
    message.andPrincipals = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.andPrincipals.push(Principal.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Principals {
    const message = { ...basePrincipals } as Principals;
    message.andPrincipals = (object.andPrincipals ?? []).map((e: any) =>
      Principal.fromJSON(e)
    );
    return message;
  },

  toJSON(message: Principals): unknown {
    const obj: any = {};
    if (message.andPrincipals) {
      obj.andPrincipals = message.andPrincipals.map((e) =>
        e ? Principal.toJSON(e) : undefined
      );
    } else {
      obj.andPrincipals = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Principals>, I>>(
    object: I
  ): Principals {
    const message = { ...basePrincipals } as Principals;
    message.andPrincipals =
      object.andPrincipals?.map((e) => Principal.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Principals.$type, Principals);

const basePrincipal: object = {
  $type: "yandex.cloud.apploadbalancer.v1.Principal",
};

export const Principal = {
  $type: "yandex.cloud.apploadbalancer.v1.Principal" as const,

  encode(
    message: Principal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.header !== undefined) {
      Principal_HeaderMatcher.encode(
        message.header,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.remoteIp !== undefined) {
      writer.uint32(18).string(message.remoteIp);
    }
    if (message.any !== undefined) {
      writer.uint32(24).bool(message.any);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Principal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePrincipal } as Principal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Principal_HeaderMatcher.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.remoteIp = reader.string();
          break;
        case 3:
          message.any = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Principal {
    const message = { ...basePrincipal } as Principal;
    message.header =
      object.header !== undefined && object.header !== null
        ? Principal_HeaderMatcher.fromJSON(object.header)
        : undefined;
    message.remoteIp =
      object.remoteIp !== undefined && object.remoteIp !== null
        ? String(object.remoteIp)
        : undefined;
    message.any =
      object.any !== undefined && object.any !== null
        ? Boolean(object.any)
        : undefined;
    return message;
  },

  toJSON(message: Principal): unknown {
    const obj: any = {};
    message.header !== undefined &&
      (obj.header = message.header
        ? Principal_HeaderMatcher.toJSON(message.header)
        : undefined);
    message.remoteIp !== undefined && (obj.remoteIp = message.remoteIp);
    message.any !== undefined && (obj.any = message.any);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Principal>, I>>(
    object: I
  ): Principal {
    const message = { ...basePrincipal } as Principal;
    message.header =
      object.header !== undefined && object.header !== null
        ? Principal_HeaderMatcher.fromPartial(object.header)
        : undefined;
    message.remoteIp = object.remoteIp ?? undefined;
    message.any = object.any ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Principal.$type, Principal);

const basePrincipal_HeaderMatcher: object = {
  $type: "yandex.cloud.apploadbalancer.v1.Principal.HeaderMatcher",
  name: "",
};

export const Principal_HeaderMatcher = {
  $type: "yandex.cloud.apploadbalancer.v1.Principal.HeaderMatcher" as const,

  encode(
    message: Principal_HeaderMatcher,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== undefined) {
      StringMatch.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Principal_HeaderMatcher {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePrincipal_HeaderMatcher,
    } as Principal_HeaderMatcher;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value = StringMatch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Principal_HeaderMatcher {
    const message = {
      ...basePrincipal_HeaderMatcher,
    } as Principal_HeaderMatcher;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? StringMatch.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: Principal_HeaderMatcher): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined &&
      (obj.value = message.value
        ? StringMatch.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Principal_HeaderMatcher>, I>>(
    object: I
  ): Principal_HeaderMatcher {
    const message = {
      ...basePrincipal_HeaderMatcher,
    } as Principal_HeaderMatcher;
    message.name = object.name ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? StringMatch.fromPartial(object.value)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Principal_HeaderMatcher.$type, Principal_HeaderMatcher);

const baseHeaderModification: object = {
  $type: "yandex.cloud.apploadbalancer.v1.HeaderModification",
  name: "",
};

export const HeaderModification = {
  $type: "yandex.cloud.apploadbalancer.v1.HeaderModification" as const,

  encode(
    message: HeaderModification,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.append !== undefined) {
      writer.uint32(18).string(message.append);
    }
    if (message.replace !== undefined) {
      writer.uint32(26).string(message.replace);
    }
    if (message.remove !== undefined) {
      writer.uint32(32).bool(message.remove);
    }
    if (message.rename !== undefined) {
      writer.uint32(42).string(message.rename);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HeaderModification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHeaderModification } as HeaderModification;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.append = reader.string();
          break;
        case 3:
          message.replace = reader.string();
          break;
        case 4:
          message.remove = reader.bool();
          break;
        case 5:
          message.rename = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HeaderModification {
    const message = { ...baseHeaderModification } as HeaderModification;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.append =
      object.append !== undefined && object.append !== null
        ? String(object.append)
        : undefined;
    message.replace =
      object.replace !== undefined && object.replace !== null
        ? String(object.replace)
        : undefined;
    message.remove =
      object.remove !== undefined && object.remove !== null
        ? Boolean(object.remove)
        : undefined;
    message.rename =
      object.rename !== undefined && object.rename !== null
        ? String(object.rename)
        : undefined;
    return message;
  },

  toJSON(message: HeaderModification): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.append !== undefined && (obj.append = message.append);
    message.replace !== undefined && (obj.replace = message.replace);
    message.remove !== undefined && (obj.remove = message.remove);
    message.rename !== undefined && (obj.rename = message.rename);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HeaderModification>, I>>(
    object: I
  ): HeaderModification {
    const message = { ...baseHeaderModification } as HeaderModification;
    message.name = object.name ?? "";
    message.append = object.append ?? undefined;
    message.replace = object.replace ?? undefined;
    message.remove = object.remove ?? undefined;
    message.rename = object.rename ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(HeaderModification.$type, HeaderModification);

const baseRoute: object = {
  $type: "yandex.cloud.apploadbalancer.v1.Route",
  name: "",
};

export const Route = {
  $type: "yandex.cloud.apploadbalancer.v1.Route" as const,

  encode(message: Route, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.http !== undefined) {
      HttpRoute.encode(message.http, writer.uint32(18).fork()).ldelim();
    }
    if (message.grpc !== undefined) {
      GrpcRoute.encode(message.grpc, writer.uint32(26).fork()).ldelim();
    }
    if (message.routeOptions !== undefined) {
      RouteOptions.encode(
        message.routeOptions,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Route {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRoute } as Route;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.http = HttpRoute.decode(reader, reader.uint32());
          break;
        case 3:
          message.grpc = GrpcRoute.decode(reader, reader.uint32());
          break;
        case 4:
          message.routeOptions = RouteOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Route {
    const message = { ...baseRoute } as Route;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.http =
      object.http !== undefined && object.http !== null
        ? HttpRoute.fromJSON(object.http)
        : undefined;
    message.grpc =
      object.grpc !== undefined && object.grpc !== null
        ? GrpcRoute.fromJSON(object.grpc)
        : undefined;
    message.routeOptions =
      object.routeOptions !== undefined && object.routeOptions !== null
        ? RouteOptions.fromJSON(object.routeOptions)
        : undefined;
    return message;
  },

  toJSON(message: Route): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.http !== undefined &&
      (obj.http = message.http ? HttpRoute.toJSON(message.http) : undefined);
    message.grpc !== undefined &&
      (obj.grpc = message.grpc ? GrpcRoute.toJSON(message.grpc) : undefined);
    message.routeOptions !== undefined &&
      (obj.routeOptions = message.routeOptions
        ? RouteOptions.toJSON(message.routeOptions)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Route>, I>>(object: I): Route {
    const message = { ...baseRoute } as Route;
    message.name = object.name ?? "";
    message.http =
      object.http !== undefined && object.http !== null
        ? HttpRoute.fromPartial(object.http)
        : undefined;
    message.grpc =
      object.grpc !== undefined && object.grpc !== null
        ? GrpcRoute.fromPartial(object.grpc)
        : undefined;
    message.routeOptions =
      object.routeOptions !== undefined && object.routeOptions !== null
        ? RouteOptions.fromPartial(object.routeOptions)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Route.$type, Route);

const baseHttpRoute: object = {
  $type: "yandex.cloud.apploadbalancer.v1.HttpRoute",
};

export const HttpRoute = {
  $type: "yandex.cloud.apploadbalancer.v1.HttpRoute" as const,

  encode(
    message: HttpRoute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.match !== undefined) {
      HttpRouteMatch.encode(message.match, writer.uint32(10).fork()).ldelim();
    }
    if (message.route !== undefined) {
      HttpRouteAction.encode(message.route, writer.uint32(18).fork()).ldelim();
    }
    if (message.redirect !== undefined) {
      RedirectAction.encode(
        message.redirect,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.directResponse !== undefined) {
      DirectResponseAction.encode(
        message.directResponse,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HttpRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHttpRoute } as HttpRoute;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.match = HttpRouteMatch.decode(reader, reader.uint32());
          break;
        case 2:
          message.route = HttpRouteAction.decode(reader, reader.uint32());
          break;
        case 3:
          message.redirect = RedirectAction.decode(reader, reader.uint32());
          break;
        case 4:
          message.directResponse = DirectResponseAction.decode(
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

  fromJSON(object: any): HttpRoute {
    const message = { ...baseHttpRoute } as HttpRoute;
    message.match =
      object.match !== undefined && object.match !== null
        ? HttpRouteMatch.fromJSON(object.match)
        : undefined;
    message.route =
      object.route !== undefined && object.route !== null
        ? HttpRouteAction.fromJSON(object.route)
        : undefined;
    message.redirect =
      object.redirect !== undefined && object.redirect !== null
        ? RedirectAction.fromJSON(object.redirect)
        : undefined;
    message.directResponse =
      object.directResponse !== undefined && object.directResponse !== null
        ? DirectResponseAction.fromJSON(object.directResponse)
        : undefined;
    return message;
  },

  toJSON(message: HttpRoute): unknown {
    const obj: any = {};
    message.match !== undefined &&
      (obj.match = message.match
        ? HttpRouteMatch.toJSON(message.match)
        : undefined);
    message.route !== undefined &&
      (obj.route = message.route
        ? HttpRouteAction.toJSON(message.route)
        : undefined);
    message.redirect !== undefined &&
      (obj.redirect = message.redirect
        ? RedirectAction.toJSON(message.redirect)
        : undefined);
    message.directResponse !== undefined &&
      (obj.directResponse = message.directResponse
        ? DirectResponseAction.toJSON(message.directResponse)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HttpRoute>, I>>(
    object: I
  ): HttpRoute {
    const message = { ...baseHttpRoute } as HttpRoute;
    message.match =
      object.match !== undefined && object.match !== null
        ? HttpRouteMatch.fromPartial(object.match)
        : undefined;
    message.route =
      object.route !== undefined && object.route !== null
        ? HttpRouteAction.fromPartial(object.route)
        : undefined;
    message.redirect =
      object.redirect !== undefined && object.redirect !== null
        ? RedirectAction.fromPartial(object.redirect)
        : undefined;
    message.directResponse =
      object.directResponse !== undefined && object.directResponse !== null
        ? DirectResponseAction.fromPartial(object.directResponse)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(HttpRoute.$type, HttpRoute);

const baseGrpcRoute: object = {
  $type: "yandex.cloud.apploadbalancer.v1.GrpcRoute",
};

export const GrpcRoute = {
  $type: "yandex.cloud.apploadbalancer.v1.GrpcRoute" as const,

  encode(
    message: GrpcRoute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.match !== undefined) {
      GrpcRouteMatch.encode(message.match, writer.uint32(10).fork()).ldelim();
    }
    if (message.route !== undefined) {
      GrpcRouteAction.encode(message.route, writer.uint32(18).fork()).ldelim();
    }
    if (message.statusResponse !== undefined) {
      GrpcStatusResponseAction.encode(
        message.statusResponse,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GrpcRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGrpcRoute } as GrpcRoute;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.match = GrpcRouteMatch.decode(reader, reader.uint32());
          break;
        case 2:
          message.route = GrpcRouteAction.decode(reader, reader.uint32());
          break;
        case 3:
          message.statusResponse = GrpcStatusResponseAction.decode(
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

  fromJSON(object: any): GrpcRoute {
    const message = { ...baseGrpcRoute } as GrpcRoute;
    message.match =
      object.match !== undefined && object.match !== null
        ? GrpcRouteMatch.fromJSON(object.match)
        : undefined;
    message.route =
      object.route !== undefined && object.route !== null
        ? GrpcRouteAction.fromJSON(object.route)
        : undefined;
    message.statusResponse =
      object.statusResponse !== undefined && object.statusResponse !== null
        ? GrpcStatusResponseAction.fromJSON(object.statusResponse)
        : undefined;
    return message;
  },

  toJSON(message: GrpcRoute): unknown {
    const obj: any = {};
    message.match !== undefined &&
      (obj.match = message.match
        ? GrpcRouteMatch.toJSON(message.match)
        : undefined);
    message.route !== undefined &&
      (obj.route = message.route
        ? GrpcRouteAction.toJSON(message.route)
        : undefined);
    message.statusResponse !== undefined &&
      (obj.statusResponse = message.statusResponse
        ? GrpcStatusResponseAction.toJSON(message.statusResponse)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GrpcRoute>, I>>(
    object: I
  ): GrpcRoute {
    const message = { ...baseGrpcRoute } as GrpcRoute;
    message.match =
      object.match !== undefined && object.match !== null
        ? GrpcRouteMatch.fromPartial(object.match)
        : undefined;
    message.route =
      object.route !== undefined && object.route !== null
        ? GrpcRouteAction.fromPartial(object.route)
        : undefined;
    message.statusResponse =
      object.statusResponse !== undefined && object.statusResponse !== null
        ? GrpcStatusResponseAction.fromPartial(object.statusResponse)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(GrpcRoute.$type, GrpcRoute);

const baseHttpRouteMatch: object = {
  $type: "yandex.cloud.apploadbalancer.v1.HttpRouteMatch",
  httpMethod: "",
};

export const HttpRouteMatch = {
  $type: "yandex.cloud.apploadbalancer.v1.HttpRouteMatch" as const,

  encode(
    message: HttpRouteMatch,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.httpMethod) {
      writer.uint32(10).string(v!);
    }
    if (message.path !== undefined) {
      StringMatch.encode(message.path, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HttpRouteMatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHttpRouteMatch } as HttpRouteMatch;
    message.httpMethod = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.httpMethod.push(reader.string());
          break;
        case 2:
          message.path = StringMatch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HttpRouteMatch {
    const message = { ...baseHttpRouteMatch } as HttpRouteMatch;
    message.httpMethod = (object.httpMethod ?? []).map((e: any) => String(e));
    message.path =
      object.path !== undefined && object.path !== null
        ? StringMatch.fromJSON(object.path)
        : undefined;
    return message;
  },

  toJSON(message: HttpRouteMatch): unknown {
    const obj: any = {};
    if (message.httpMethod) {
      obj.httpMethod = message.httpMethod.map((e) => e);
    } else {
      obj.httpMethod = [];
    }
    message.path !== undefined &&
      (obj.path = message.path ? StringMatch.toJSON(message.path) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HttpRouteMatch>, I>>(
    object: I
  ): HttpRouteMatch {
    const message = { ...baseHttpRouteMatch } as HttpRouteMatch;
    message.httpMethod = object.httpMethod?.map((e) => e) || [];
    message.path =
      object.path !== undefined && object.path !== null
        ? StringMatch.fromPartial(object.path)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(HttpRouteMatch.$type, HttpRouteMatch);

const baseGrpcRouteMatch: object = {
  $type: "yandex.cloud.apploadbalancer.v1.GrpcRouteMatch",
};

export const GrpcRouteMatch = {
  $type: "yandex.cloud.apploadbalancer.v1.GrpcRouteMatch" as const,

  encode(
    message: GrpcRouteMatch,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fqmn !== undefined) {
      StringMatch.encode(message.fqmn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GrpcRouteMatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGrpcRouteMatch } as GrpcRouteMatch;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fqmn = StringMatch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GrpcRouteMatch {
    const message = { ...baseGrpcRouteMatch } as GrpcRouteMatch;
    message.fqmn =
      object.fqmn !== undefined && object.fqmn !== null
        ? StringMatch.fromJSON(object.fqmn)
        : undefined;
    return message;
  },

  toJSON(message: GrpcRouteMatch): unknown {
    const obj: any = {};
    message.fqmn !== undefined &&
      (obj.fqmn = message.fqmn ? StringMatch.toJSON(message.fqmn) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GrpcRouteMatch>, I>>(
    object: I
  ): GrpcRouteMatch {
    const message = { ...baseGrpcRouteMatch } as GrpcRouteMatch;
    message.fqmn =
      object.fqmn !== undefined && object.fqmn !== null
        ? StringMatch.fromPartial(object.fqmn)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(GrpcRouteMatch.$type, GrpcRouteMatch);

const baseStringMatch: object = {
  $type: "yandex.cloud.apploadbalancer.v1.StringMatch",
};

export const StringMatch = {
  $type: "yandex.cloud.apploadbalancer.v1.StringMatch" as const,

  encode(
    message: StringMatch,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.exactMatch !== undefined) {
      writer.uint32(10).string(message.exactMatch);
    }
    if (message.prefixMatch !== undefined) {
      writer.uint32(18).string(message.prefixMatch);
    }
    if (message.regexMatch !== undefined) {
      writer.uint32(26).string(message.regexMatch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringMatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStringMatch } as StringMatch;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exactMatch = reader.string();
          break;
        case 2:
          message.prefixMatch = reader.string();
          break;
        case 3:
          message.regexMatch = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StringMatch {
    const message = { ...baseStringMatch } as StringMatch;
    message.exactMatch =
      object.exactMatch !== undefined && object.exactMatch !== null
        ? String(object.exactMatch)
        : undefined;
    message.prefixMatch =
      object.prefixMatch !== undefined && object.prefixMatch !== null
        ? String(object.prefixMatch)
        : undefined;
    message.regexMatch =
      object.regexMatch !== undefined && object.regexMatch !== null
        ? String(object.regexMatch)
        : undefined;
    return message;
  },

  toJSON(message: StringMatch): unknown {
    const obj: any = {};
    message.exactMatch !== undefined && (obj.exactMatch = message.exactMatch);
    message.prefixMatch !== undefined &&
      (obj.prefixMatch = message.prefixMatch);
    message.regexMatch !== undefined && (obj.regexMatch = message.regexMatch);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StringMatch>, I>>(
    object: I
  ): StringMatch {
    const message = { ...baseStringMatch } as StringMatch;
    message.exactMatch = object.exactMatch ?? undefined;
    message.prefixMatch = object.prefixMatch ?? undefined;
    message.regexMatch = object.regexMatch ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(StringMatch.$type, StringMatch);

const baseRedirectAction: object = {
  $type: "yandex.cloud.apploadbalancer.v1.RedirectAction",
  replaceScheme: "",
  replaceHost: "",
  replacePort: 0,
  removeQuery: false,
  responseCode: 0,
};

export const RedirectAction = {
  $type: "yandex.cloud.apploadbalancer.v1.RedirectAction" as const,

  encode(
    message: RedirectAction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.replaceScheme !== "") {
      writer.uint32(10).string(message.replaceScheme);
    }
    if (message.replaceHost !== "") {
      writer.uint32(18).string(message.replaceHost);
    }
    if (message.replacePort !== 0) {
      writer.uint32(24).int64(message.replacePort);
    }
    if (message.replacePath !== undefined) {
      writer.uint32(34).string(message.replacePath);
    }
    if (message.replacePrefix !== undefined) {
      writer.uint32(42).string(message.replacePrefix);
    }
    if (message.removeQuery === true) {
      writer.uint32(48).bool(message.removeQuery);
    }
    if (message.responseCode !== 0) {
      writer.uint32(56).int32(message.responseCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedirectAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRedirectAction } as RedirectAction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.replaceScheme = reader.string();
          break;
        case 2:
          message.replaceHost = reader.string();
          break;
        case 3:
          message.replacePort = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.replacePath = reader.string();
          break;
        case 5:
          message.replacePrefix = reader.string();
          break;
        case 6:
          message.removeQuery = reader.bool();
          break;
        case 7:
          message.responseCode = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RedirectAction {
    const message = { ...baseRedirectAction } as RedirectAction;
    message.replaceScheme =
      object.replaceScheme !== undefined && object.replaceScheme !== null
        ? String(object.replaceScheme)
        : "";
    message.replaceHost =
      object.replaceHost !== undefined && object.replaceHost !== null
        ? String(object.replaceHost)
        : "";
    message.replacePort =
      object.replacePort !== undefined && object.replacePort !== null
        ? Number(object.replacePort)
        : 0;
    message.replacePath =
      object.replacePath !== undefined && object.replacePath !== null
        ? String(object.replacePath)
        : undefined;
    message.replacePrefix =
      object.replacePrefix !== undefined && object.replacePrefix !== null
        ? String(object.replacePrefix)
        : undefined;
    message.removeQuery =
      object.removeQuery !== undefined && object.removeQuery !== null
        ? Boolean(object.removeQuery)
        : false;
    message.responseCode =
      object.responseCode !== undefined && object.responseCode !== null
        ? redirectAction_RedirectResponseCodeFromJSON(object.responseCode)
        : 0;
    return message;
  },

  toJSON(message: RedirectAction): unknown {
    const obj: any = {};
    message.replaceScheme !== undefined &&
      (obj.replaceScheme = message.replaceScheme);
    message.replaceHost !== undefined &&
      (obj.replaceHost = message.replaceHost);
    message.replacePort !== undefined &&
      (obj.replacePort = Math.round(message.replacePort));
    message.replacePath !== undefined &&
      (obj.replacePath = message.replacePath);
    message.replacePrefix !== undefined &&
      (obj.replacePrefix = message.replacePrefix);
    message.removeQuery !== undefined &&
      (obj.removeQuery = message.removeQuery);
    message.responseCode !== undefined &&
      (obj.responseCode = redirectAction_RedirectResponseCodeToJSON(
        message.responseCode
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RedirectAction>, I>>(
    object: I
  ): RedirectAction {
    const message = { ...baseRedirectAction } as RedirectAction;
    message.replaceScheme = object.replaceScheme ?? "";
    message.replaceHost = object.replaceHost ?? "";
    message.replacePort = object.replacePort ?? 0;
    message.replacePath = object.replacePath ?? undefined;
    message.replacePrefix = object.replacePrefix ?? undefined;
    message.removeQuery = object.removeQuery ?? false;
    message.responseCode = object.responseCode ?? 0;
    return message;
  },
};

messageTypeRegistry.set(RedirectAction.$type, RedirectAction);

const baseDirectResponseAction: object = {
  $type: "yandex.cloud.apploadbalancer.v1.DirectResponseAction",
  status: 0,
};

export const DirectResponseAction = {
  $type: "yandex.cloud.apploadbalancer.v1.DirectResponseAction" as const,

  encode(
    message: DirectResponseAction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int64(message.status);
    }
    if (message.body !== undefined) {
      Payload.encode(message.body, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DirectResponseAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDirectResponseAction } as DirectResponseAction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.body = Payload.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DirectResponseAction {
    const message = { ...baseDirectResponseAction } as DirectResponseAction;
    message.status =
      object.status !== undefined && object.status !== null
        ? Number(object.status)
        : 0;
    message.body =
      object.body !== undefined && object.body !== null
        ? Payload.fromJSON(object.body)
        : undefined;
    return message;
  },

  toJSON(message: DirectResponseAction): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = Math.round(message.status));
    message.body !== undefined &&
      (obj.body = message.body ? Payload.toJSON(message.body) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DirectResponseAction>, I>>(
    object: I
  ): DirectResponseAction {
    const message = { ...baseDirectResponseAction } as DirectResponseAction;
    message.status = object.status ?? 0;
    message.body =
      object.body !== undefined && object.body !== null
        ? Payload.fromPartial(object.body)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(DirectResponseAction.$type, DirectResponseAction);

const baseGrpcStatusResponseAction: object = {
  $type: "yandex.cloud.apploadbalancer.v1.GrpcStatusResponseAction",
  status: 0,
};

export const GrpcStatusResponseAction = {
  $type: "yandex.cloud.apploadbalancer.v1.GrpcStatusResponseAction" as const,

  encode(
    message: GrpcStatusResponseAction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GrpcStatusResponseAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGrpcStatusResponseAction,
    } as GrpcStatusResponseAction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GrpcStatusResponseAction {
    const message = {
      ...baseGrpcStatusResponseAction,
    } as GrpcStatusResponseAction;
    message.status =
      object.status !== undefined && object.status !== null
        ? grpcStatusResponseAction_StatusFromJSON(object.status)
        : 0;
    return message;
  },

  toJSON(message: GrpcStatusResponseAction): unknown {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = grpcStatusResponseAction_StatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GrpcStatusResponseAction>, I>>(
    object: I
  ): GrpcStatusResponseAction {
    const message = {
      ...baseGrpcStatusResponseAction,
    } as GrpcStatusResponseAction;
    message.status = object.status ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  GrpcStatusResponseAction.$type,
  GrpcStatusResponseAction
);

const baseHttpRouteAction: object = {
  $type: "yandex.cloud.apploadbalancer.v1.HttpRouteAction",
  backendGroupId: "",
  prefixRewrite: "",
  upgradeTypes: "",
};

export const HttpRouteAction = {
  $type: "yandex.cloud.apploadbalancer.v1.HttpRouteAction" as const,

  encode(
    message: HttpRouteAction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    if (message.timeout !== undefined) {
      Duration.encode(message.timeout, writer.uint32(18).fork()).ldelim();
    }
    if (message.idleTimeout !== undefined) {
      Duration.encode(message.idleTimeout, writer.uint32(26).fork()).ldelim();
    }
    if (message.hostRewrite !== undefined) {
      writer.uint32(34).string(message.hostRewrite);
    }
    if (message.autoHostRewrite !== undefined) {
      writer.uint32(40).bool(message.autoHostRewrite);
    }
    if (message.prefixRewrite !== "") {
      writer.uint32(50).string(message.prefixRewrite);
    }
    for (const v of message.upgradeTypes) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HttpRouteAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHttpRouteAction } as HttpRouteAction;
    message.upgradeTypes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backendGroupId = reader.string();
          break;
        case 2:
          message.timeout = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.idleTimeout = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.hostRewrite = reader.string();
          break;
        case 5:
          message.autoHostRewrite = reader.bool();
          break;
        case 6:
          message.prefixRewrite = reader.string();
          break;
        case 7:
          message.upgradeTypes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HttpRouteAction {
    const message = { ...baseHttpRouteAction } as HttpRouteAction;
    message.backendGroupId =
      object.backendGroupId !== undefined && object.backendGroupId !== null
        ? String(object.backendGroupId)
        : "";
    message.timeout =
      object.timeout !== undefined && object.timeout !== null
        ? Duration.fromJSON(object.timeout)
        : undefined;
    message.idleTimeout =
      object.idleTimeout !== undefined && object.idleTimeout !== null
        ? Duration.fromJSON(object.idleTimeout)
        : undefined;
    message.hostRewrite =
      object.hostRewrite !== undefined && object.hostRewrite !== null
        ? String(object.hostRewrite)
        : undefined;
    message.autoHostRewrite =
      object.autoHostRewrite !== undefined && object.autoHostRewrite !== null
        ? Boolean(object.autoHostRewrite)
        : undefined;
    message.prefixRewrite =
      object.prefixRewrite !== undefined && object.prefixRewrite !== null
        ? String(object.prefixRewrite)
        : "";
    message.upgradeTypes = (object.upgradeTypes ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: HttpRouteAction): unknown {
    const obj: any = {};
    message.backendGroupId !== undefined &&
      (obj.backendGroupId = message.backendGroupId);
    message.timeout !== undefined &&
      (obj.timeout = message.timeout
        ? Duration.toJSON(message.timeout)
        : undefined);
    message.idleTimeout !== undefined &&
      (obj.idleTimeout = message.idleTimeout
        ? Duration.toJSON(message.idleTimeout)
        : undefined);
    message.hostRewrite !== undefined &&
      (obj.hostRewrite = message.hostRewrite);
    message.autoHostRewrite !== undefined &&
      (obj.autoHostRewrite = message.autoHostRewrite);
    message.prefixRewrite !== undefined &&
      (obj.prefixRewrite = message.prefixRewrite);
    if (message.upgradeTypes) {
      obj.upgradeTypes = message.upgradeTypes.map((e) => e);
    } else {
      obj.upgradeTypes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HttpRouteAction>, I>>(
    object: I
  ): HttpRouteAction {
    const message = { ...baseHttpRouteAction } as HttpRouteAction;
    message.backendGroupId = object.backendGroupId ?? "";
    message.timeout =
      object.timeout !== undefined && object.timeout !== null
        ? Duration.fromPartial(object.timeout)
        : undefined;
    message.idleTimeout =
      object.idleTimeout !== undefined && object.idleTimeout !== null
        ? Duration.fromPartial(object.idleTimeout)
        : undefined;
    message.hostRewrite = object.hostRewrite ?? undefined;
    message.autoHostRewrite = object.autoHostRewrite ?? undefined;
    message.prefixRewrite = object.prefixRewrite ?? "";
    message.upgradeTypes = object.upgradeTypes?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(HttpRouteAction.$type, HttpRouteAction);

const baseGrpcRouteAction: object = {
  $type: "yandex.cloud.apploadbalancer.v1.GrpcRouteAction",
  backendGroupId: "",
};

export const GrpcRouteAction = {
  $type: "yandex.cloud.apploadbalancer.v1.GrpcRouteAction" as const,

  encode(
    message: GrpcRouteAction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    if (message.maxTimeout !== undefined) {
      Duration.encode(message.maxTimeout, writer.uint32(18).fork()).ldelim();
    }
    if (message.idleTimeout !== undefined) {
      Duration.encode(message.idleTimeout, writer.uint32(26).fork()).ldelim();
    }
    if (message.hostRewrite !== undefined) {
      writer.uint32(34).string(message.hostRewrite);
    }
    if (message.autoHostRewrite !== undefined) {
      writer.uint32(40).bool(message.autoHostRewrite);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GrpcRouteAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGrpcRouteAction } as GrpcRouteAction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backendGroupId = reader.string();
          break;
        case 2:
          message.maxTimeout = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.idleTimeout = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.hostRewrite = reader.string();
          break;
        case 5:
          message.autoHostRewrite = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GrpcRouteAction {
    const message = { ...baseGrpcRouteAction } as GrpcRouteAction;
    message.backendGroupId =
      object.backendGroupId !== undefined && object.backendGroupId !== null
        ? String(object.backendGroupId)
        : "";
    message.maxTimeout =
      object.maxTimeout !== undefined && object.maxTimeout !== null
        ? Duration.fromJSON(object.maxTimeout)
        : undefined;
    message.idleTimeout =
      object.idleTimeout !== undefined && object.idleTimeout !== null
        ? Duration.fromJSON(object.idleTimeout)
        : undefined;
    message.hostRewrite =
      object.hostRewrite !== undefined && object.hostRewrite !== null
        ? String(object.hostRewrite)
        : undefined;
    message.autoHostRewrite =
      object.autoHostRewrite !== undefined && object.autoHostRewrite !== null
        ? Boolean(object.autoHostRewrite)
        : undefined;
    return message;
  },

  toJSON(message: GrpcRouteAction): unknown {
    const obj: any = {};
    message.backendGroupId !== undefined &&
      (obj.backendGroupId = message.backendGroupId);
    message.maxTimeout !== undefined &&
      (obj.maxTimeout = message.maxTimeout
        ? Duration.toJSON(message.maxTimeout)
        : undefined);
    message.idleTimeout !== undefined &&
      (obj.idleTimeout = message.idleTimeout
        ? Duration.toJSON(message.idleTimeout)
        : undefined);
    message.hostRewrite !== undefined &&
      (obj.hostRewrite = message.hostRewrite);
    message.autoHostRewrite !== undefined &&
      (obj.autoHostRewrite = message.autoHostRewrite);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GrpcRouteAction>, I>>(
    object: I
  ): GrpcRouteAction {
    const message = { ...baseGrpcRouteAction } as GrpcRouteAction;
    message.backendGroupId = object.backendGroupId ?? "";
    message.maxTimeout =
      object.maxTimeout !== undefined && object.maxTimeout !== null
        ? Duration.fromPartial(object.maxTimeout)
        : undefined;
    message.idleTimeout =
      object.idleTimeout !== undefined && object.idleTimeout !== null
        ? Duration.fromPartial(object.idleTimeout)
        : undefined;
    message.hostRewrite = object.hostRewrite ?? undefined;
    message.autoHostRewrite = object.autoHostRewrite ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(GrpcRouteAction.$type, GrpcRouteAction);

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
