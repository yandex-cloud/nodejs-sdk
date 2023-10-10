/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleUnaryCall,
  Client,
  ClientUnaryCall,
  Metadata,
  CallOptions,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import {
  AllocationPolicy,
  AutoScalePolicy,
  TlsHandler,
  LoadBalancer,
  HttpListener,
  TlsListener,
  StreamListener,
  TargetState,
} from "../../../../yandex/cloud/apploadbalancer/v1/load_balancer";
import { LogOptions } from "../../../../yandex/cloud/apploadbalancer/v1/logging";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.apploadbalancer.v1";

export interface GetLoadBalancerRequest {
  $type: "yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest";
  /**
   * ID of the application load balancer to return.
   *
   * To get the application load balancer ID, make a [LoadBalancerService.List] request.
   */
  loadBalancerId: string;
}

export interface ListLoadBalancersRequest {
  $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest";
  /**
   * ID of the folder to list application load balancers in.
   *
   * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListLoadBalancersResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListLoadBalancersResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters application load balancers listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [LoadBalancer.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name=my-load-balancer`.
   */
  filter: string;
}

export interface ListLoadBalancersResponse {
  $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse";
  /** List of application load balancers in the specified folder. */
  loadBalancers: LoadBalancer[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListLoadBalancersRequest.page_size], use `next_page_token` as the value
   * for the [ListLoadBalancersRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface DeleteLoadBalancerRequest {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest";
  /**
   * ID of the application load balancer to delete.
   *
   * To get the application load balancer ID, make a [LoadBalancerService.List] request.
   */
  loadBalancerId: string;
}

export interface DeleteLoadBalancerMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata";
  /** ID of the application load balancer that is being deleted. */
  loadBalancerId: string;
}

export interface UpdateLoadBalancerRequest {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest";
  /**
   * ID of the application load balancer to update.
   *
   * To get the application load balancer ID, make a [LoadBalancerService.List] request.
   */
  loadBalancerId: string;
  /** Field mask that specifies which attributes of the application load balancer should be updated. */
  updateMask?: FieldMask;
  /**
   * New name for the application load balancer.
   * The name must be unique within the folder.
   */
  name: string;
  /** New description of the application load balancer. */
  description: string;
  /**
   * New application load balancer labels as `key:value` pairs.
   * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
   *
   * Existing set of labels is completely replaced by the provided set, so if you just want
   * to add or remove a label:
   * 1. Get the current set of labels with a [LoadBalancerService.Get] request.
   * 2. Add or remove a label in this set.
   * 3. Send the new set in this field.
   */
  labels: { [key: string]: string };
  /**
   * New listeners for the application load balancer.
   *
   * For details about the concept,
   * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#listener).
   *
   * Existing list of listeners is completely replaced by the specified list, so if you just want to add, update,
   * or remove a listener, make a [LoadBalancerService.AddListener] request,
   * a [LoadBalancerService.UpdateListener] request, or a [LoadBalancerService.RemoveListener] request.
   */
  listenerSpecs: ListenerSpec[];
  /**
   * New locality settings of the application load balancer.
   *
   * For details about the concept,
   * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#lb-location).
   *
   * Existing locality settings are completely replaced by the specified settings,
   * so if you just want to add or remove an allocation policy:
   * 1. Get the current settings with a [LoadBalancerService.Get] request.
   * 2. Add or remove a policy in this set.
   * 3. Send the new set in this field.
   */
  allocationPolicy?: AllocationPolicy;
  /**
   * ID's of new security groups attributed to the application load balancer.
   *
   * For details about the concept,
   * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#security-groups).
   *
   * Existing list of security groups is completely replaced by the specified list,
   * so if you just want to add or remove an allocation policy:
   * 1. Get the current set of security groups with a [LoadBalancerService.Get] request.
   * 2. Add or remove a group in this set.
   * 3. Send the new set in this field.
   */
  securityGroupIds: string[];
  /**
   * New scaling settings of the application load balancer.
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

export interface UpdateLoadBalancerRequest_LabelsEntry {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateLoadBalancerMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata";
  /** ID of the application load balancer that is being updated. */
  loadBalancerId: string;
}

export interface CreateLoadBalancerRequest {
  $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest";
  /**
   * ID of the folder to create an application load balancer in.
   *
   * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the application load balancer.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the application load balancer. */
  description: string;
  /**
   * Application load balancer labels as `key:value` pairs.
   * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
   */
  labels: { [key: string]: string };
  /**
   * ID of the region that the application load balancer is located at.
   *
   * The only supported value is `ru-central1`.
   */
  regionId: string;
  /** ID of the network that the application load balancer belongs to. */
  networkId: string;
  /**
   * Listeners that belong to the application load balancer.
   *
   * For details about the concept,
   * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#listener).
   */
  listenerSpecs: ListenerSpec[];
  /**
   * Locality settings of the application load balancer.
   *
   * For details about the concept,
   * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#lb-location).
   */
  allocationPolicy?: AllocationPolicy;
  /**
   * ID's of the security groups attributed to the application load balancer.
   *
   * For details about the concept,
   * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#security-groups).
   */
  securityGroupIds: string[];
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

export interface CreateLoadBalancerRequest_LabelsEntry {
  $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateLoadBalancerMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata";
  /** ID of the application load balancer that is being created. */
  loadBalancerId: string;
}

export interface StartLoadBalancerRequest {
  $type: "yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest";
  /**
   * ID of the application load balancer to start.
   *
   * The application load balancer must have a `STOPPED` status ([LoadBalancer.status]).
   *
   * To get the application load balancer ID, make a [LoadBalancerService.List] request.
   */
  loadBalancerId: string;
}

export interface StartLoadBalancerMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata";
  /** ID of the application load balancer that is being started. */
  loadBalancerId: string;
}

export interface StopLoadBalancerRequest {
  $type: "yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest";
  /**
   * ID of the application load balancer to stop.
   *
   * The application load balancer must have an `ACTIVE` status ([LoadBalancer.status]).
   *
   * To get the application load balancer ID, make a [LoadBalancerService.List] request.
   */
  loadBalancerId: string;
}

export interface StopLoadBalancerMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata";
  /** ID of the application load balancer that is being stopped. */
  loadBalancerId: string;
}

export interface AddListenerRequest {
  $type: "yandex.cloud.apploadbalancer.v1.AddListenerRequest";
  /** ID of the application load balancer to add a listener to. */
  loadBalancerId: string;
  /** Listener to add to the application load balancer. */
  listenerSpec?: ListenerSpec;
}

export interface AddListenerMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.AddListenerMetadata";
  /** ID of the application load balancer that the listener is being added to. */
  loadBalancerId: string;
  /** Name of the listener that is being added to the application load balancer. */
  listenerName: string;
}

export interface RemoveListenerRequest {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveListenerRequest";
  /** ID of the application load balancer to remove the listener from. */
  loadBalancerId: string;
  /** Name of the listener to remove from the application load balancer. */
  name: string;
}

export interface RemoveListenerMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata";
  /** ID of the application load balancer that the listener is being removed from. */
  loadBalancerId: string;
  /** Name of the listener that is being removed from the application load balancer. */
  listenerName: string;
}

export interface UpdateListenerRequest {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateListenerRequest";
  /** ID of the application load balancer to update the listener in. */
  loadBalancerId: string;
  /** Field mask that specifies which attributes of the listener should be updated. */
  updateMask?: FieldMask;
  /** New attributes of the listener. */
  listenerSpec?: ListenerSpec;
}

export interface UpdateListenerMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata";
  /** ID of the application load balancer that the listener is being updated in. */
  loadBalancerId: string;
  /** Name of the listener that is being updated. */
  listenerName: string;
}

export interface AddressSpec {
  $type: "yandex.cloud.apploadbalancer.v1.AddressSpec";
  /** Public IPv4 endpoint address. */
  externalIpv4AddressSpec?: ExternalIpv4AddressSpec | undefined;
  /**
   * Internal IPv4 endpoint address.
   *
   * To enable the use of listeners with internal addresses, [contact support](https://console.cloud.yandex.ru/support).
   */
  internalIpv4AddressSpec?: InternalIpv4AddressSpec | undefined;
  /** Public IPv6 endpoint address. */
  externalIpv6AddressSpec?: ExternalIpv6AddressSpec | undefined;
}

export interface ExternalIpv4AddressSpec {
  $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec";
  /** IPv4 address. */
  address: string;
}

export interface InternalIpv4AddressSpec {
  $type: "yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec";
  /** IPv4 address. */
  address: string;
  /** ID of the subnet that the address belongs to. */
  subnetId: string;
}

export interface ExternalIpv6AddressSpec {
  $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec";
  /** IPv6 address. */
  address: string;
}

export interface EndpointSpec {
  $type: "yandex.cloud.apploadbalancer.v1.EndpointSpec";
  /** Endpoint public (external) and internal addresses. */
  addressSpecs: AddressSpec[];
  /** Endpoint ports. */
  ports: number[];
}

export interface ListenerSpec {
  $type: "yandex.cloud.apploadbalancer.v1.ListenerSpec";
  /** Name of the listener. The name is unique within the application load balancer. */
  name: string;
  /**
   * Endpoints of the listener.
   *
   * Endpoints are defined by their IP addresses and ports.
   */
  endpointSpecs: EndpointSpec[];
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

export interface GetTargetStatesRequest {
  $type: "yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest";
  /** ID of the application load balancer that the backend group is attributed to. */
  loadBalancerId: string;
  /** ID of the backend group that the target group is attributed to. */
  backendGroupId: string;
  /** ID of the target group to get target states of. */
  targetGroupId: string;
}

export interface GetTargetStatesResponse {
  $type: "yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse";
  /** Target states of the specified target group. */
  targetStates: TargetState[];
}

export interface AddSniMatchRequest {
  $type: "yandex.cloud.apploadbalancer.v1.AddSniMatchRequest";
  /** ID of the application load balancer to add a SNI handler to. */
  loadBalancerId: string;
  /** Name of the listener to add a SNI handler to. */
  listenerName: string;
  /** Name of the SNI handler to add. */
  name: string;
  /** Server names that are matched by the SNI handler. */
  serverNames: string[];
  /** Settings for handling requests with Server Name Indication (SNI) matching one of [server_names] values. */
  handler?: TlsHandler;
}

export interface AddSniMatchMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata";
  /** ID of the application load balancer that the SNI handler is being added to. */
  loadBalancerId: string;
  /** Name of the listener that the SNI handler is being added to. */
  listenerName: string;
  /** Name of the SNI handler that is being added to the listener. */
  sniMatchName: string;
}

export interface RemoveSniMatchRequest {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest";
  /** ID of the application load balancer to remove the SNI handler from. */
  loadBalancerId: string;
  /** Name of the listener te remove the SNI handler from. */
  listenerName: string;
  /** Name of the SNI handler to remove. */
  sniMatchName: string;
}

export interface RemoveSniMatchMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata";
  /** ID of the application load balancer that the SNI handler is being removed from. */
  loadBalancerId: string;
  /** Name of the listener that the SNI handler is being removed from. */
  listenerName: string;
  /** Name of the SNI handler that is being removed. */
  sniMatchName: string;
}

export interface UpdateSniMatchRequest {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest";
  /** ID of the application load balancer to update the SNI handler in. */
  loadBalancerId: string;
  /** Name of the listener to update the SNI handler in. */
  listenerName: string;
  /** Name of the SNI handler to update. */
  name: string;
  /** Field mask that specifies which attributes of the SNI handler should be updated. */
  updateMask?: FieldMask;
  /**
   * New server names that are matched by the SNI handler.
   *
   * Existing set of server names is completely replaced by the provided set, so if you just want
   * to add or remove a server name:
   * 1. Get the current set of server names with a [LoadBalancerService.Get] request.
   * 2. Add or remove a server name in this set.
   * 3. Send the new set in this field.
   */
  serverNames: string[];
  /** New settings for handling requests with Server Name Indication (SNI) matching one of [server_names] values. */
  handler?: TlsHandler;
}

export interface UpdateSniMatchMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata";
  /** ID of the application load balancer that the SNI handler is being updated in. */
  loadBalancerId: string;
  /** Name of the listener that the SNI handler is being updated in. */
  listenerName: string;
  /** Name of the SNI handler that is being updated. */
  sniMatchName: string;
}

export interface ListLoadBalancerOperationsRequest {
  $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest";
  /**
   * ID of the application load balancer to get operations for.
   *
   * To get the application load balancer ID, use a [LoadBalancerService.List] request.
   */
  loadBalancerId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size], the service returns a [ListLoadBalancerOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListLoadBalancerOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListLoadBalancerOperationsResponse {
  $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse";
  /** List of operations for the specified application load balancer. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListLoadBalancerOperationsRequest.page_size], use `next_page_token` as the value
   * for the [ListLoadBalancerOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

const baseGetLoadBalancerRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest",
  loadBalancerId: "",
};

export const GetLoadBalancerRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest" as const,

  encode(
    message: GetLoadBalancerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLoadBalancerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetLoadBalancerRequest } as GetLoadBalancerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loadBalancerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLoadBalancerRequest {
    const message = { ...baseGetLoadBalancerRequest } as GetLoadBalancerRequest;
    message.loadBalancerId =
      object.loadBalancerId !== undefined && object.loadBalancerId !== null
        ? String(object.loadBalancerId)
        : "";
    return message;
  },

  toJSON(message: GetLoadBalancerRequest): unknown {
    const obj: any = {};
    message.loadBalancerId !== undefined &&
      (obj.loadBalancerId = message.loadBalancerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetLoadBalancerRequest>, I>>(
    object: I
  ): GetLoadBalancerRequest {
    const message = { ...baseGetLoadBalancerRequest } as GetLoadBalancerRequest;
    message.loadBalancerId = object.loadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetLoadBalancerRequest.$type, GetLoadBalancerRequest);

const baseListLoadBalancersRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListLoadBalancersRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest" as const,

  encode(
    message: ListLoadBalancersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(34).string(message.filter);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListLoadBalancersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListLoadBalancersRequest,
    } as ListLoadBalancersRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 2:
          message.pageSize = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.pageToken = reader.string();
          break;
        case 4:
          message.filter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListLoadBalancersRequest {
    const message = {
      ...baseListLoadBalancersRequest,
    } as ListLoadBalancersRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? String(object.filter)
        : "";
    return message;
  },

  toJSON(message: ListLoadBalancersRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListLoadBalancersRequest>, I>>(
    object: I
  ): ListLoadBalancersRequest {
    const message = {
      ...baseListLoadBalancersRequest,
    } as ListLoadBalancersRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListLoadBalancersRequest.$type,
  ListLoadBalancersRequest
);

const baseListLoadBalancersResponse: object = {
  $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse",
  nextPageToken: "",
};

export const ListLoadBalancersResponse = {
  $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse" as const,

  encode(
    message: ListLoadBalancersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.loadBalancers) {
      LoadBalancer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListLoadBalancersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListLoadBalancersResponse,
    } as ListLoadBalancersResponse;
    message.loadBalancers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loadBalancers.push(
            LoadBalancer.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.nextPageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListLoadBalancersResponse {
    const message = {
      ...baseListLoadBalancersResponse,
    } as ListLoadBalancersResponse;
    message.loadBalancers = (object.loadBalancers ?? []).map((e: any) =>
      LoadBalancer.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListLoadBalancersResponse): unknown {
    const obj: any = {};
    if (message.loadBalancers) {
      obj.loadBalancers = message.loadBalancers.map((e) =>
        e ? LoadBalancer.toJSON(e) : undefined
      );
    } else {
      obj.loadBalancers = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListLoadBalancersResponse>, I>>(
    object: I
  ): ListLoadBalancersResponse {
    const message = {
      ...baseListLoadBalancersResponse,
    } as ListLoadBalancersResponse;
    message.loadBalancers =
      object.loadBalancers?.map((e) => LoadBalancer.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListLoadBalancersResponse.$type,
  ListLoadBalancersResponse
);

const baseDeleteLoadBalancerRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest",
  loadBalancerId: "",
};

export const DeleteLoadBalancerRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest" as const,

  encode(
    message: DeleteLoadBalancerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteLoadBalancerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteLoadBalancerRequest,
    } as DeleteLoadBalancerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loadBalancerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteLoadBalancerRequest {
    const message = {
      ...baseDeleteLoadBalancerRequest,
    } as DeleteLoadBalancerRequest;
    message.loadBalancerId =
      object.loadBalancerId !== undefined && object.loadBalancerId !== null
        ? String(object.loadBalancerId)
        : "";
    return message;
  },

  toJSON(message: DeleteLoadBalancerRequest): unknown {
    const obj: any = {};
    message.loadBalancerId !== undefined &&
      (obj.loadBalancerId = message.loadBalancerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteLoadBalancerRequest>, I>>(
    object: I
  ): DeleteLoadBalancerRequest {
    const message = {
      ...baseDeleteLoadBalancerRequest,
    } as DeleteLoadBalancerRequest;
    message.loadBalancerId = object.loadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteLoadBalancerRequest.$type,
  DeleteLoadBalancerRequest
);

const baseDeleteLoadBalancerMetadata: object = {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata",
  loadBalancerId: "",
};

export const DeleteLoadBalancerMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata" as const,

  encode(
    message: DeleteLoadBalancerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteLoadBalancerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteLoadBalancerMetadata,
    } as DeleteLoadBalancerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loadBalancerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteLoadBalancerMetadata {
    const message = {
      ...baseDeleteLoadBalancerMetadata,
    } as DeleteLoadBalancerMetadata;
    message.loadBalancerId =
      object.loadBalancerId !== undefined && object.loadBalancerId !== null
        ? String(object.loadBalancerId)
        : "";
    return message;
  },

  toJSON(message: DeleteLoadBalancerMetadata): unknown {
    const obj: any = {};
    message.loadBalancerId !== undefined &&
      (obj.loadBalancerId = message.loadBalancerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteLoadBalancerMetadata>, I>>(
    object: I
  ): DeleteLoadBalancerMetadata {
    const message = {
      ...baseDeleteLoadBalancerMetadata,
    } as DeleteLoadBalancerMetadata;
    message.loadBalancerId = object.loadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteLoadBalancerMetadata.$type,
  DeleteLoadBalancerMetadata
);

const baseUpdateLoadBalancerRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest",
  loadBalancerId: "",
  name: "",
  description: "",
  securityGroupIds: "",
};

export const UpdateLoadBalancerRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest" as const,

  encode(
    message: UpdateLoadBalancerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateLoadBalancerRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    for (const v of message.listenerSpecs) {
      ListenerSpec.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.allocationPolicy !== undefined) {
      AllocationPolicy.encode(
        message.allocationPolicy,
        writer.uint32(58).fork()
      ).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(66).string(v!);
    }
    if (message.autoScalePolicy !== undefined) {
      AutoScalePolicy.encode(
        message.autoScalePolicy,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.logOptions !== undefined) {
      LogOptions.encode(message.logOptions, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateLoadBalancerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateLoadBalancerRequest,
    } as UpdateLoadBalancerRequest;
    message.labels = {};
    message.listenerSpecs = [];
    message.securityGroupIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loadBalancerId = reader.string();
          break;
        case 2:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          const entry5 = UpdateLoadBalancerRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.listenerSpecs.push(
            ListenerSpec.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.allocationPolicy = AllocationPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.securityGroupIds.push(reader.string());
          break;
        case 9:
          message.autoScalePolicy = AutoScalePolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.logOptions = LogOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateLoadBalancerRequest {
    const message = {
      ...baseUpdateLoadBalancerRequest,
    } as UpdateLoadBalancerRequest;
    message.loadBalancerId =
      object.loadBalancerId !== undefined && object.loadBalancerId !== null
        ? String(object.loadBalancerId)
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
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
    message.listenerSpecs = (object.listenerSpecs ?? []).map((e: any) =>
      ListenerSpec.fromJSON(e)
    );
    message.allocationPolicy =
      object.allocationPolicy !== undefined && object.allocationPolicy !== null
        ? AllocationPolicy.fromJSON(object.allocationPolicy)
        : undefined;
    message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) =>
      String(e)
    );
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

  toJSON(message: UpdateLoadBalancerRequest): unknown {
    const obj: any = {};
    message.loadBalancerId !== undefined &&
      (obj.loadBalancerId = message.loadBalancerId);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    if (message.listenerSpecs) {
      obj.listenerSpecs = message.listenerSpecs.map((e) =>
        e ? ListenerSpec.toJSON(e) : undefined
      );
    } else {
      obj.listenerSpecs = [];
    }
    message.allocationPolicy !== undefined &&
      (obj.allocationPolicy = message.allocationPolicy
        ? AllocationPolicy.toJSON(message.allocationPolicy)
        : undefined);
    if (message.securityGroupIds) {
      obj.securityGroupIds = message.securityGroupIds.map((e) => e);
    } else {
      obj.securityGroupIds = [];
    }
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

  fromPartial<I extends Exact<DeepPartial<UpdateLoadBalancerRequest>, I>>(
    object: I
  ): UpdateLoadBalancerRequest {
    const message = {
      ...baseUpdateLoadBalancerRequest,
    } as UpdateLoadBalancerRequest;
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
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
    message.listenerSpecs =
      object.listenerSpecs?.map((e) => ListenerSpec.fromPartial(e)) || [];
    message.allocationPolicy =
      object.allocationPolicy !== undefined && object.allocationPolicy !== null
        ? AllocationPolicy.fromPartial(object.allocationPolicy)
        : undefined;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
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

messageTypeRegistry.set(
  UpdateLoadBalancerRequest.$type,
  UpdateLoadBalancerRequest
);

const baseUpdateLoadBalancerRequest_LabelsEntry: object = {
  $type:
    "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateLoadBalancerRequest_LabelsEntry = {
  $type:
    "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.LabelsEntry" as const,

  encode(
    message: UpdateLoadBalancerRequest_LabelsEntry,
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
  ): UpdateLoadBalancerRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateLoadBalancerRequest_LabelsEntry,
    } as UpdateLoadBalancerRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateLoadBalancerRequest_LabelsEntry {
    const message = {
      ...baseUpdateLoadBalancerRequest_LabelsEntry,
    } as UpdateLoadBalancerRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateLoadBalancerRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateLoadBalancerRequest_LabelsEntry>, I>
  >(object: I): UpdateLoadBalancerRequest_LabelsEntry {
    const message = {
      ...baseUpdateLoadBalancerRequest_LabelsEntry,
    } as UpdateLoadBalancerRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateLoadBalancerRequest_LabelsEntry.$type,
  UpdateLoadBalancerRequest_LabelsEntry
);

const baseUpdateLoadBalancerMetadata: object = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata",
  loadBalancerId: "",
};

export const UpdateLoadBalancerMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata" as const,

  encode(
    message: UpdateLoadBalancerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateLoadBalancerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateLoadBalancerMetadata,
    } as UpdateLoadBalancerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loadBalancerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateLoadBalancerMetadata {
    const message = {
      ...baseUpdateLoadBalancerMetadata,
    } as UpdateLoadBalancerMetadata;
    message.loadBalancerId =
      object.loadBalancerId !== undefined && object.loadBalancerId !== null
        ? String(object.loadBalancerId)
        : "";
    return message;
  },

  toJSON(message: UpdateLoadBalancerMetadata): unknown {
    const obj: any = {};
    message.loadBalancerId !== undefined &&
      (obj.loadBalancerId = message.loadBalancerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateLoadBalancerMetadata>, I>>(
    object: I
  ): UpdateLoadBalancerMetadata {
    const message = {
      ...baseUpdateLoadBalancerMetadata,
    } as UpdateLoadBalancerMetadata;
    message.loadBalancerId = object.loadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateLoadBalancerMetadata.$type,
  UpdateLoadBalancerMetadata
);

const baseCreateLoadBalancerRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest",
  folderId: "",
  name: "",
  description: "",
  regionId: "",
  networkId: "",
  securityGroupIds: "",
};

export const CreateLoadBalancerRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest" as const,

  encode(
    message: CreateLoadBalancerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateLoadBalancerRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.regionId !== "") {
      writer.uint32(42).string(message.regionId);
    }
    if (message.networkId !== "") {
      writer.uint32(50).string(message.networkId);
    }
    for (const v of message.listenerSpecs) {
      ListenerSpec.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.allocationPolicy !== undefined) {
      AllocationPolicy.encode(
        message.allocationPolicy,
        writer.uint32(66).fork()
      ).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(74).string(v!);
    }
    if (message.autoScalePolicy !== undefined) {
      AutoScalePolicy.encode(
        message.autoScalePolicy,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.logOptions !== undefined) {
      LogOptions.encode(message.logOptions, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateLoadBalancerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateLoadBalancerRequest,
    } as CreateLoadBalancerRequest;
    message.labels = {};
    message.listenerSpecs = [];
    message.securityGroupIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          const entry4 = CreateLoadBalancerRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.regionId = reader.string();
          break;
        case 6:
          message.networkId = reader.string();
          break;
        case 7:
          message.listenerSpecs.push(
            ListenerSpec.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.allocationPolicy = AllocationPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.securityGroupIds.push(reader.string());
          break;
        case 10:
          message.autoScalePolicy = AutoScalePolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.logOptions = LogOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateLoadBalancerRequest {
    const message = {
      ...baseCreateLoadBalancerRequest,
    } as CreateLoadBalancerRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
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
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.listenerSpecs = (object.listenerSpecs ?? []).map((e: any) =>
      ListenerSpec.fromJSON(e)
    );
    message.allocationPolicy =
      object.allocationPolicy !== undefined && object.allocationPolicy !== null
        ? AllocationPolicy.fromJSON(object.allocationPolicy)
        : undefined;
    message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) =>
      String(e)
    );
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

  toJSON(message: CreateLoadBalancerRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
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
    message.networkId !== undefined && (obj.networkId = message.networkId);
    if (message.listenerSpecs) {
      obj.listenerSpecs = message.listenerSpecs.map((e) =>
        e ? ListenerSpec.toJSON(e) : undefined
      );
    } else {
      obj.listenerSpecs = [];
    }
    message.allocationPolicy !== undefined &&
      (obj.allocationPolicy = message.allocationPolicy
        ? AllocationPolicy.toJSON(message.allocationPolicy)
        : undefined);
    if (message.securityGroupIds) {
      obj.securityGroupIds = message.securityGroupIds.map((e) => e);
    } else {
      obj.securityGroupIds = [];
    }
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

  fromPartial<I extends Exact<DeepPartial<CreateLoadBalancerRequest>, I>>(
    object: I
  ): CreateLoadBalancerRequest {
    const message = {
      ...baseCreateLoadBalancerRequest,
    } as CreateLoadBalancerRequest;
    message.folderId = object.folderId ?? "";
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
    message.networkId = object.networkId ?? "";
    message.listenerSpecs =
      object.listenerSpecs?.map((e) => ListenerSpec.fromPartial(e)) || [];
    message.allocationPolicy =
      object.allocationPolicy !== undefined && object.allocationPolicy !== null
        ? AllocationPolicy.fromPartial(object.allocationPolicy)
        : undefined;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
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

messageTypeRegistry.set(
  CreateLoadBalancerRequest.$type,
  CreateLoadBalancerRequest
);

const baseCreateLoadBalancerRequest_LabelsEntry: object = {
  $type:
    "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateLoadBalancerRequest_LabelsEntry = {
  $type:
    "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.LabelsEntry" as const,

  encode(
    message: CreateLoadBalancerRequest_LabelsEntry,
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
  ): CreateLoadBalancerRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateLoadBalancerRequest_LabelsEntry,
    } as CreateLoadBalancerRequest_LabelsEntry;
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

  fromJSON(object: any): CreateLoadBalancerRequest_LabelsEntry {
    const message = {
      ...baseCreateLoadBalancerRequest_LabelsEntry,
    } as CreateLoadBalancerRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateLoadBalancerRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateLoadBalancerRequest_LabelsEntry>, I>
  >(object: I): CreateLoadBalancerRequest_LabelsEntry {
    const message = {
      ...baseCreateLoadBalancerRequest_LabelsEntry,
    } as CreateLoadBalancerRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateLoadBalancerRequest_LabelsEntry.$type,
  CreateLoadBalancerRequest_LabelsEntry
);

const baseCreateLoadBalancerMetadata: object = {
  $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata",
  loadBalancerId: "",
};

export const CreateLoadBalancerMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata" as const,

  encode(
    message: CreateLoadBalancerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateLoadBalancerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateLoadBalancerMetadata,
    } as CreateLoadBalancerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loadBalancerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateLoadBalancerMetadata {
    const message = {
      ...baseCreateLoadBalancerMetadata,
    } as CreateLoadBalancerMetadata;
    message.loadBalancerId =
      object.loadBalancerId !== undefined && object.loadBalancerId !== null
        ? String(object.loadBalancerId)
        : "";
    return message;
  },

  toJSON(message: CreateLoadBalancerMetadata): unknown {
    const obj: any = {};
    message.loadBalancerId !== undefined &&
      (obj.loadBalancerId = message.loadBalancerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateLoadBalancerMetadata>, I>>(
    object: I
  ): CreateLoadBalancerMetadata {
    const message = {
      ...baseCreateLoadBalancerMetadata,
    } as CreateLoadBalancerMetadata;
    message.loadBalancerId = object.loadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateLoadBalancerMetadata.$type,
  CreateLoadBalancerMetadata
);

const baseStartLoadBalancerRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest",
  loadBalancerId: "",
};

export const StartLoadBalancerRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest" as const,

  encode(
    message: StartLoadBalancerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StartLoadBalancerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseStartLoadBalancerRequest,
    } as StartLoadBalancerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loadBalancerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartLoadBalancerRequest {
    const message = {
      ...baseStartLoadBalancerRequest,
    } as StartLoadBalancerRequest;
    message.loadBalancerId =
      object.loadBalancerId !== undefined && object.loadBalancerId !== null
        ? String(object.loadBalancerId)
        : "";
    return message;
  },

  toJSON(message: StartLoadBalancerRequest): unknown {
    const obj: any = {};
    message.loadBalancerId !== undefined &&
      (obj.loadBalancerId = message.loadBalancerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartLoadBalancerRequest>, I>>(
    object: I
  ): StartLoadBalancerRequest {
    const message = {
      ...baseStartLoadBalancerRequest,
    } as StartLoadBalancerRequest;
    message.loadBalancerId = object.loadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  StartLoadBalancerRequest.$type,
  StartLoadBalancerRequest
);

const baseStartLoadBalancerMetadata: object = {
  $type: "yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata",
  loadBalancerId: "",
};

export const StartLoadBalancerMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata" as const,

  encode(
    message: StartLoadBalancerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StartLoadBalancerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseStartLoadBalancerMetadata,
    } as StartLoadBalancerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loadBalancerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartLoadBalancerMetadata {
    const message = {
      ...baseStartLoadBalancerMetadata,
    } as StartLoadBalancerMetadata;
    message.loadBalancerId =
      object.loadBalancerId !== undefined && object.loadBalancerId !== null
        ? String(object.loadBalancerId)
        : "";
    return message;
  },

  toJSON(message: StartLoadBalancerMetadata): unknown {
    const obj: any = {};
    message.loadBalancerId !== undefined &&
      (obj.loadBalancerId = message.loadBalancerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartLoadBalancerMetadata>, I>>(
    object: I
  ): StartLoadBalancerMetadata {
    const message = {
      ...baseStartLoadBalancerMetadata,
    } as StartLoadBalancerMetadata;
    message.loadBalancerId = object.loadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  StartLoadBalancerMetadata.$type,
  StartLoadBalancerMetadata
);

const baseStopLoadBalancerRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest",
  loadBalancerId: "",
};

export const StopLoadBalancerRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest" as const,

  encode(
    message: StopLoadBalancerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StopLoadBalancerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseStopLoadBalancerRequest,
    } as StopLoadBalancerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loadBalancerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StopLoadBalancerRequest {
    const message = {
      ...baseStopLoadBalancerRequest,
    } as StopLoadBalancerRequest;
    message.loadBalancerId =
      object.loadBalancerId !== undefined && object.loadBalancerId !== null
        ? String(object.loadBalancerId)
        : "";
    return message;
  },

  toJSON(message: StopLoadBalancerRequest): unknown {
    const obj: any = {};
    message.loadBalancerId !== undefined &&
      (obj.loadBalancerId = message.loadBalancerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StopLoadBalancerRequest>, I>>(
    object: I
  ): StopLoadBalancerRequest {
    const message = {
      ...baseStopLoadBalancerRequest,
    } as StopLoadBalancerRequest;
    message.loadBalancerId = object.loadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StopLoadBalancerRequest.$type, StopLoadBalancerRequest);

const baseStopLoadBalancerMetadata: object = {
  $type: "yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata",
  loadBalancerId: "",
};

export const StopLoadBalancerMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata" as const,

  encode(
    message: StopLoadBalancerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StopLoadBalancerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseStopLoadBalancerMetadata,
    } as StopLoadBalancerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loadBalancerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StopLoadBalancerMetadata {
    const message = {
      ...baseStopLoadBalancerMetadata,
    } as StopLoadBalancerMetadata;
    message.loadBalancerId =
      object.loadBalancerId !== undefined && object.loadBalancerId !== null
        ? String(object.loadBalancerId)
        : "";
    return message;
  },

  toJSON(message: StopLoadBalancerMetadata): unknown {
    const obj: any = {};
    message.loadBalancerId !== undefined &&
      (obj.loadBalancerId = message.loadBalancerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StopLoadBalancerMetadata>, I>>(
    object: I
  ): StopLoadBalancerMetadata {
    const message = {
      ...baseStopLoadBalancerMetadata,
    } as StopLoadBalancerMetadata;
    message.loadBalancerId = object.loadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  StopLoadBalancerMetadata.$type,
  StopLoadBalancerMetadata
);

const baseAddListenerRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.AddListenerRequest",
  loadBalancerId: "",
};

export const AddListenerRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.AddListenerRequest" as const,

  encode(
    message: AddListenerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.listenerSpec !== undefined) {
      ListenerSpec.encode(
        message.listenerSpec,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddListenerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddListenerRequest } as AddListenerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loadBalancerId = reader.string();
          break;
        case 2:
          message.listenerSpec = ListenerSpec.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddListenerRequest {
    const message = { ...baseAddListenerRequest } as AddListenerRequest;
    message.loadBalancerId =
      object.loadBalancerId !== undefined && object.loadBalancerId !== null
        ? String(object.loadBalancerId)
        : "";
    message.listenerSpec =
      object.listenerSpec !== undefined && object.listenerSpec !== null
        ? ListenerSpec.fromJSON(object.listenerSpec)
        : undefined;
    return message;
  },

  toJSON(message: AddListenerRequest): unknown {
    const obj: any = {};
    message.loadBalancerId !== undefined &&
      (obj.loadBalancerId = message.loadBalancerId);
    message.listenerSpec !== undefined &&
      (obj.listenerSpec = message.listenerSpec
        ? ListenerSpec.toJSON(message.listenerSpec)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddListenerRequest>, I>>(
    object: I
  ): AddListenerRequest {
    const message = { ...baseAddListenerRequest } as AddListenerRequest;
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.listenerSpec =
      object.listenerSpec !== undefined && object.listenerSpec !== null
        ? ListenerSpec.fromPartial(object.listenerSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(AddListenerRequest.$type, AddListenerRequest);

const baseAddListenerMetadata: object = {
  $type: "yandex.cloud.apploadbalancer.v1.AddListenerMetadata",
  loadBalancerId: "",
  listenerName: "",
};

export const AddListenerMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.AddListenerMetadata" as const,

  encode(
    message: AddListenerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.listenerName !== "") {
      writer.uint32(18).string(message.listenerName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddListenerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddListenerMetadata } as AddListenerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loadBalancerId = reader.string();
          break;
        case 2:
          message.listenerName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddListenerMetadata {
    const message = { ...baseAddListenerMetadata } as AddListenerMetadata;
    message.loadBalancerId =
      object.loadBalancerId !== undefined && object.loadBalancerId !== null
        ? String(object.loadBalancerId)
        : "";
    message.listenerName =
      object.listenerName !== undefined && object.listenerName !== null
        ? String(object.listenerName)
        : "";
    return message;
  },

  toJSON(message: AddListenerMetadata): unknown {
    const obj: any = {};
    message.loadBalancerId !== undefined &&
      (obj.loadBalancerId = message.loadBalancerId);
    message.listenerName !== undefined &&
      (obj.listenerName = message.listenerName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddListenerMetadata>, I>>(
    object: I
  ): AddListenerMetadata {
    const message = { ...baseAddListenerMetadata } as AddListenerMetadata;
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.listenerName = object.listenerName ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddListenerMetadata.$type, AddListenerMetadata);

const baseRemoveListenerRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveListenerRequest",
  loadBalancerId: "",
  name: "",
};

export const RemoveListenerRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveListenerRequest" as const,

  encode(
    message: RemoveListenerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveListenerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRemoveListenerRequest } as RemoveListenerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loadBalancerId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveListenerRequest {
    const message = { ...baseRemoveListenerRequest } as RemoveListenerRequest;
    message.loadBalancerId =
      object.loadBalancerId !== undefined && object.loadBalancerId !== null
        ? String(object.loadBalancerId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: RemoveListenerRequest): unknown {
    const obj: any = {};
    message.loadBalancerId !== undefined &&
      (obj.loadBalancerId = message.loadBalancerId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveListenerRequest>, I>>(
    object: I
  ): RemoveListenerRequest {
    const message = { ...baseRemoveListenerRequest } as RemoveListenerRequest;
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(RemoveListenerRequest.$type, RemoveListenerRequest);

const baseRemoveListenerMetadata: object = {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata",
  loadBalancerId: "",
  listenerName: "",
};

export const RemoveListenerMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata" as const,

  encode(
    message: RemoveListenerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.listenerName !== "") {
      writer.uint32(18).string(message.listenerName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveListenerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRemoveListenerMetadata } as RemoveListenerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loadBalancerId = reader.string();
          break;
        case 2:
          message.listenerName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveListenerMetadata {
    const message = { ...baseRemoveListenerMetadata } as RemoveListenerMetadata;
    message.loadBalancerId =
      object.loadBalancerId !== undefined && object.loadBalancerId !== null
        ? String(object.loadBalancerId)
        : "";
    message.listenerName =
      object.listenerName !== undefined && object.listenerName !== null
        ? String(object.listenerName)
        : "";
    return message;
  },

  toJSON(message: RemoveListenerMetadata): unknown {
    const obj: any = {};
    message.loadBalancerId !== undefined &&
      (obj.loadBalancerId = message.loadBalancerId);
    message.listenerName !== undefined &&
      (obj.listenerName = message.listenerName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveListenerMetadata>, I>>(
    object: I
  ): RemoveListenerMetadata {
    const message = { ...baseRemoveListenerMetadata } as RemoveListenerMetadata;
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.listenerName = object.listenerName ?? "";
    return message;
  },
};

messageTypeRegistry.set(RemoveListenerMetadata.$type, RemoveListenerMetadata);

const baseUpdateListenerRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateListenerRequest",
  loadBalancerId: "",
};

export const UpdateListenerRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateListenerRequest" as const,

  encode(
    message: UpdateListenerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
    }
    if (message.listenerSpec !== undefined) {
      ListenerSpec.encode(
        message.listenerSpec,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateListenerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateListenerRequest } as UpdateListenerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loadBalancerId = reader.string();
          break;
        case 2:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 3:
          message.listenerSpec = ListenerSpec.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateListenerRequest {
    const message = { ...baseUpdateListenerRequest } as UpdateListenerRequest;
    message.loadBalancerId =
      object.loadBalancerId !== undefined && object.loadBalancerId !== null
        ? String(object.loadBalancerId)
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    message.listenerSpec =
      object.listenerSpec !== undefined && object.listenerSpec !== null
        ? ListenerSpec.fromJSON(object.listenerSpec)
        : undefined;
    return message;
  },

  toJSON(message: UpdateListenerRequest): unknown {
    const obj: any = {};
    message.loadBalancerId !== undefined &&
      (obj.loadBalancerId = message.loadBalancerId);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.listenerSpec !== undefined &&
      (obj.listenerSpec = message.listenerSpec
        ? ListenerSpec.toJSON(message.listenerSpec)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateListenerRequest>, I>>(
    object: I
  ): UpdateListenerRequest {
    const message = { ...baseUpdateListenerRequest } as UpdateListenerRequest;
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.listenerSpec =
      object.listenerSpec !== undefined && object.listenerSpec !== null
        ? ListenerSpec.fromPartial(object.listenerSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateListenerRequest.$type, UpdateListenerRequest);

const baseUpdateListenerMetadata: object = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata",
  loadBalancerId: "",
  listenerName: "",
};

export const UpdateListenerMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata" as const,

  encode(
    message: UpdateListenerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.listenerName !== "") {
      writer.uint32(18).string(message.listenerName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateListenerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateListenerMetadata } as UpdateListenerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loadBalancerId = reader.string();
          break;
        case 2:
          message.listenerName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateListenerMetadata {
    const message = { ...baseUpdateListenerMetadata } as UpdateListenerMetadata;
    message.loadBalancerId =
      object.loadBalancerId !== undefined && object.loadBalancerId !== null
        ? String(object.loadBalancerId)
        : "";
    message.listenerName =
      object.listenerName !== undefined && object.listenerName !== null
        ? String(object.listenerName)
        : "";
    return message;
  },

  toJSON(message: UpdateListenerMetadata): unknown {
    const obj: any = {};
    message.loadBalancerId !== undefined &&
      (obj.loadBalancerId = message.loadBalancerId);
    message.listenerName !== undefined &&
      (obj.listenerName = message.listenerName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateListenerMetadata>, I>>(
    object: I
  ): UpdateListenerMetadata {
    const message = { ...baseUpdateListenerMetadata } as UpdateListenerMetadata;
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.listenerName = object.listenerName ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateListenerMetadata.$type, UpdateListenerMetadata);

const baseAddressSpec: object = {
  $type: "yandex.cloud.apploadbalancer.v1.AddressSpec",
};

export const AddressSpec = {
  $type: "yandex.cloud.apploadbalancer.v1.AddressSpec" as const,

  encode(
    message: AddressSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.externalIpv4AddressSpec !== undefined) {
      ExternalIpv4AddressSpec.encode(
        message.externalIpv4AddressSpec,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.internalIpv4AddressSpec !== undefined) {
      InternalIpv4AddressSpec.encode(
        message.internalIpv4AddressSpec,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.externalIpv6AddressSpec !== undefined) {
      ExternalIpv6AddressSpec.encode(
        message.externalIpv6AddressSpec,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddressSpec } as AddressSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.externalIpv4AddressSpec = ExternalIpv4AddressSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.internalIpv4AddressSpec = InternalIpv4AddressSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.externalIpv6AddressSpec = ExternalIpv6AddressSpec.decode(
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

  fromJSON(object: any): AddressSpec {
    const message = { ...baseAddressSpec } as AddressSpec;
    message.externalIpv4AddressSpec =
      object.externalIpv4AddressSpec !== undefined &&
      object.externalIpv4AddressSpec !== null
        ? ExternalIpv4AddressSpec.fromJSON(object.externalIpv4AddressSpec)
        : undefined;
    message.internalIpv4AddressSpec =
      object.internalIpv4AddressSpec !== undefined &&
      object.internalIpv4AddressSpec !== null
        ? InternalIpv4AddressSpec.fromJSON(object.internalIpv4AddressSpec)
        : undefined;
    message.externalIpv6AddressSpec =
      object.externalIpv6AddressSpec !== undefined &&
      object.externalIpv6AddressSpec !== null
        ? ExternalIpv6AddressSpec.fromJSON(object.externalIpv6AddressSpec)
        : undefined;
    return message;
  },

  toJSON(message: AddressSpec): unknown {
    const obj: any = {};
    message.externalIpv4AddressSpec !== undefined &&
      (obj.externalIpv4AddressSpec = message.externalIpv4AddressSpec
        ? ExternalIpv4AddressSpec.toJSON(message.externalIpv4AddressSpec)
        : undefined);
    message.internalIpv4AddressSpec !== undefined &&
      (obj.internalIpv4AddressSpec = message.internalIpv4AddressSpec
        ? InternalIpv4AddressSpec.toJSON(message.internalIpv4AddressSpec)
        : undefined);
    message.externalIpv6AddressSpec !== undefined &&
      (obj.externalIpv6AddressSpec = message.externalIpv6AddressSpec
        ? ExternalIpv6AddressSpec.toJSON(message.externalIpv6AddressSpec)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddressSpec>, I>>(
    object: I
  ): AddressSpec {
    const message = { ...baseAddressSpec } as AddressSpec;
    message.externalIpv4AddressSpec =
      object.externalIpv4AddressSpec !== undefined &&
      object.externalIpv4AddressSpec !== null
        ? ExternalIpv4AddressSpec.fromPartial(object.externalIpv4AddressSpec)
        : undefined;
    message.internalIpv4AddressSpec =
      object.internalIpv4AddressSpec !== undefined &&
      object.internalIpv4AddressSpec !== null
        ? InternalIpv4AddressSpec.fromPartial(object.internalIpv4AddressSpec)
        : undefined;
    message.externalIpv6AddressSpec =
      object.externalIpv6AddressSpec !== undefined &&
      object.externalIpv6AddressSpec !== null
        ? ExternalIpv6AddressSpec.fromPartial(object.externalIpv6AddressSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(AddressSpec.$type, AddressSpec);

const baseExternalIpv4AddressSpec: object = {
  $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec",
  address: "",
};

export const ExternalIpv4AddressSpec = {
  $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec" as const,

  encode(
    message: ExternalIpv4AddressSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExternalIpv4AddressSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseExternalIpv4AddressSpec,
    } as ExternalIpv4AddressSpec;
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

  fromJSON(object: any): ExternalIpv4AddressSpec {
    const message = {
      ...baseExternalIpv4AddressSpec,
    } as ExternalIpv4AddressSpec;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: ExternalIpv4AddressSpec): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExternalIpv4AddressSpec>, I>>(
    object: I
  ): ExternalIpv4AddressSpec {
    const message = {
      ...baseExternalIpv4AddressSpec,
    } as ExternalIpv4AddressSpec;
    message.address = object.address ?? "";
    return message;
  },
};

messageTypeRegistry.set(ExternalIpv4AddressSpec.$type, ExternalIpv4AddressSpec);

const baseInternalIpv4AddressSpec: object = {
  $type: "yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec",
  address: "",
  subnetId: "",
};

export const InternalIpv4AddressSpec = {
  $type: "yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec" as const,

  encode(
    message: InternalIpv4AddressSpec,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InternalIpv4AddressSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInternalIpv4AddressSpec,
    } as InternalIpv4AddressSpec;
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

  fromJSON(object: any): InternalIpv4AddressSpec {
    const message = {
      ...baseInternalIpv4AddressSpec,
    } as InternalIpv4AddressSpec;
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

  toJSON(message: InternalIpv4AddressSpec): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InternalIpv4AddressSpec>, I>>(
    object: I
  ): InternalIpv4AddressSpec {
    const message = {
      ...baseInternalIpv4AddressSpec,
    } as InternalIpv4AddressSpec;
    message.address = object.address ?? "";
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(InternalIpv4AddressSpec.$type, InternalIpv4AddressSpec);

const baseExternalIpv6AddressSpec: object = {
  $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec",
  address: "",
};

export const ExternalIpv6AddressSpec = {
  $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec" as const,

  encode(
    message: ExternalIpv6AddressSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExternalIpv6AddressSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseExternalIpv6AddressSpec,
    } as ExternalIpv6AddressSpec;
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

  fromJSON(object: any): ExternalIpv6AddressSpec {
    const message = {
      ...baseExternalIpv6AddressSpec,
    } as ExternalIpv6AddressSpec;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: ExternalIpv6AddressSpec): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExternalIpv6AddressSpec>, I>>(
    object: I
  ): ExternalIpv6AddressSpec {
    const message = {
      ...baseExternalIpv6AddressSpec,
    } as ExternalIpv6AddressSpec;
    message.address = object.address ?? "";
    return message;
  },
};

messageTypeRegistry.set(ExternalIpv6AddressSpec.$type, ExternalIpv6AddressSpec);

const baseEndpointSpec: object = {
  $type: "yandex.cloud.apploadbalancer.v1.EndpointSpec",
  ports: 0,
};

export const EndpointSpec = {
  $type: "yandex.cloud.apploadbalancer.v1.EndpointSpec" as const,

  encode(
    message: EndpointSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.addressSpecs) {
      AddressSpec.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.ports) {
      writer.int64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EndpointSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEndpointSpec } as EndpointSpec;
    message.addressSpecs = [];
    message.ports = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressSpecs.push(
            AddressSpec.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): EndpointSpec {
    const message = { ...baseEndpointSpec } as EndpointSpec;
    message.addressSpecs = (object.addressSpecs ?? []).map((e: any) =>
      AddressSpec.fromJSON(e)
    );
    message.ports = (object.ports ?? []).map((e: any) => Number(e));
    return message;
  },

  toJSON(message: EndpointSpec): unknown {
    const obj: any = {};
    if (message.addressSpecs) {
      obj.addressSpecs = message.addressSpecs.map((e) =>
        e ? AddressSpec.toJSON(e) : undefined
      );
    } else {
      obj.addressSpecs = [];
    }
    if (message.ports) {
      obj.ports = message.ports.map((e) => Math.round(e));
    } else {
      obj.ports = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EndpointSpec>, I>>(
    object: I
  ): EndpointSpec {
    const message = { ...baseEndpointSpec } as EndpointSpec;
    message.addressSpecs =
      object.addressSpecs?.map((e) => AddressSpec.fromPartial(e)) || [];
    message.ports = object.ports?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(EndpointSpec.$type, EndpointSpec);

const baseListenerSpec: object = {
  $type: "yandex.cloud.apploadbalancer.v1.ListenerSpec",
  name: "",
};

export const ListenerSpec = {
  $type: "yandex.cloud.apploadbalancer.v1.ListenerSpec" as const,

  encode(
    message: ListenerSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.endpointSpecs) {
      EndpointSpec.encode(v!, writer.uint32(18).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListenerSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListenerSpec } as ListenerSpec;
    message.endpointSpecs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.endpointSpecs.push(
            EndpointSpec.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): ListenerSpec {
    const message = { ...baseListenerSpec } as ListenerSpec;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.endpointSpecs = (object.endpointSpecs ?? []).map((e: any) =>
      EndpointSpec.fromJSON(e)
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

  toJSON(message: ListenerSpec): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.endpointSpecs) {
      obj.endpointSpecs = message.endpointSpecs.map((e) =>
        e ? EndpointSpec.toJSON(e) : undefined
      );
    } else {
      obj.endpointSpecs = [];
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

  fromPartial<I extends Exact<DeepPartial<ListenerSpec>, I>>(
    object: I
  ): ListenerSpec {
    const message = { ...baseListenerSpec } as ListenerSpec;
    message.name = object.name ?? "";
    message.endpointSpecs =
      object.endpointSpecs?.map((e) => EndpointSpec.fromPartial(e)) || [];
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

messageTypeRegistry.set(ListenerSpec.$type, ListenerSpec);

const baseGetTargetStatesRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest",
  loadBalancerId: "",
  backendGroupId: "",
  targetGroupId: "",
};

export const GetTargetStatesRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest" as const,

  encode(
    message: GetTargetStatesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.backendGroupId !== "") {
      writer.uint32(18).string(message.backendGroupId);
    }
    if (message.targetGroupId !== "") {
      writer.uint32(26).string(message.targetGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetTargetStatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetTargetStatesRequest } as GetTargetStatesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loadBalancerId = reader.string();
          break;
        case 2:
          message.backendGroupId = reader.string();
          break;
        case 3:
          message.targetGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTargetStatesRequest {
    const message = { ...baseGetTargetStatesRequest } as GetTargetStatesRequest;
    message.loadBalancerId =
      object.loadBalancerId !== undefined && object.loadBalancerId !== null
        ? String(object.loadBalancerId)
        : "";
    message.backendGroupId =
      object.backendGroupId !== undefined && object.backendGroupId !== null
        ? String(object.backendGroupId)
        : "";
    message.targetGroupId =
      object.targetGroupId !== undefined && object.targetGroupId !== null
        ? String(object.targetGroupId)
        : "";
    return message;
  },

  toJSON(message: GetTargetStatesRequest): unknown {
    const obj: any = {};
    message.loadBalancerId !== undefined &&
      (obj.loadBalancerId = message.loadBalancerId);
    message.backendGroupId !== undefined &&
      (obj.backendGroupId = message.backendGroupId);
    message.targetGroupId !== undefined &&
      (obj.targetGroupId = message.targetGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetTargetStatesRequest>, I>>(
    object: I
  ): GetTargetStatesRequest {
    const message = { ...baseGetTargetStatesRequest } as GetTargetStatesRequest;
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.backendGroupId = object.backendGroupId ?? "";
    message.targetGroupId = object.targetGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetTargetStatesRequest.$type, GetTargetStatesRequest);

const baseGetTargetStatesResponse: object = {
  $type: "yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse",
};

export const GetTargetStatesResponse = {
  $type: "yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse" as const,

  encode(
    message: GetTargetStatesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.targetStates) {
      TargetState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetTargetStatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetTargetStatesResponse,
    } as GetTargetStatesResponse;
    message.targetStates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetStates.push(
            TargetState.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTargetStatesResponse {
    const message = {
      ...baseGetTargetStatesResponse,
    } as GetTargetStatesResponse;
    message.targetStates = (object.targetStates ?? []).map((e: any) =>
      TargetState.fromJSON(e)
    );
    return message;
  },

  toJSON(message: GetTargetStatesResponse): unknown {
    const obj: any = {};
    if (message.targetStates) {
      obj.targetStates = message.targetStates.map((e) =>
        e ? TargetState.toJSON(e) : undefined
      );
    } else {
      obj.targetStates = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetTargetStatesResponse>, I>>(
    object: I
  ): GetTargetStatesResponse {
    const message = {
      ...baseGetTargetStatesResponse,
    } as GetTargetStatesResponse;
    message.targetStates =
      object.targetStates?.map((e) => TargetState.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(GetTargetStatesResponse.$type, GetTargetStatesResponse);

const baseAddSniMatchRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.AddSniMatchRequest",
  loadBalancerId: "",
  listenerName: "",
  name: "",
  serverNames: "",
};

export const AddSniMatchRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.AddSniMatchRequest" as const,

  encode(
    message: AddSniMatchRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.listenerName !== "") {
      writer.uint32(18).string(message.listenerName);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    for (const v of message.serverNames) {
      writer.uint32(34).string(v!);
    }
    if (message.handler !== undefined) {
      TlsHandler.encode(message.handler, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddSniMatchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddSniMatchRequest } as AddSniMatchRequest;
    message.serverNames = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loadBalancerId = reader.string();
          break;
        case 2:
          message.listenerName = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.serverNames.push(reader.string());
          break;
        case 5:
          message.handler = TlsHandler.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddSniMatchRequest {
    const message = { ...baseAddSniMatchRequest } as AddSniMatchRequest;
    message.loadBalancerId =
      object.loadBalancerId !== undefined && object.loadBalancerId !== null
        ? String(object.loadBalancerId)
        : "";
    message.listenerName =
      object.listenerName !== undefined && object.listenerName !== null
        ? String(object.listenerName)
        : "";
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

  toJSON(message: AddSniMatchRequest): unknown {
    const obj: any = {};
    message.loadBalancerId !== undefined &&
      (obj.loadBalancerId = message.loadBalancerId);
    message.listenerName !== undefined &&
      (obj.listenerName = message.listenerName);
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

  fromPartial<I extends Exact<DeepPartial<AddSniMatchRequest>, I>>(
    object: I
  ): AddSniMatchRequest {
    const message = { ...baseAddSniMatchRequest } as AddSniMatchRequest;
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.listenerName = object.listenerName ?? "";
    message.name = object.name ?? "";
    message.serverNames = object.serverNames?.map((e) => e) || [];
    message.handler =
      object.handler !== undefined && object.handler !== null
        ? TlsHandler.fromPartial(object.handler)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(AddSniMatchRequest.$type, AddSniMatchRequest);

const baseAddSniMatchMetadata: object = {
  $type: "yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata",
  loadBalancerId: "",
  listenerName: "",
  sniMatchName: "",
};

export const AddSniMatchMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata" as const,

  encode(
    message: AddSniMatchMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.listenerName !== "") {
      writer.uint32(18).string(message.listenerName);
    }
    if (message.sniMatchName !== "") {
      writer.uint32(26).string(message.sniMatchName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddSniMatchMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddSniMatchMetadata } as AddSniMatchMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loadBalancerId = reader.string();
          break;
        case 2:
          message.listenerName = reader.string();
          break;
        case 3:
          message.sniMatchName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddSniMatchMetadata {
    const message = { ...baseAddSniMatchMetadata } as AddSniMatchMetadata;
    message.loadBalancerId =
      object.loadBalancerId !== undefined && object.loadBalancerId !== null
        ? String(object.loadBalancerId)
        : "";
    message.listenerName =
      object.listenerName !== undefined && object.listenerName !== null
        ? String(object.listenerName)
        : "";
    message.sniMatchName =
      object.sniMatchName !== undefined && object.sniMatchName !== null
        ? String(object.sniMatchName)
        : "";
    return message;
  },

  toJSON(message: AddSniMatchMetadata): unknown {
    const obj: any = {};
    message.loadBalancerId !== undefined &&
      (obj.loadBalancerId = message.loadBalancerId);
    message.listenerName !== undefined &&
      (obj.listenerName = message.listenerName);
    message.sniMatchName !== undefined &&
      (obj.sniMatchName = message.sniMatchName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddSniMatchMetadata>, I>>(
    object: I
  ): AddSniMatchMetadata {
    const message = { ...baseAddSniMatchMetadata } as AddSniMatchMetadata;
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.listenerName = object.listenerName ?? "";
    message.sniMatchName = object.sniMatchName ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddSniMatchMetadata.$type, AddSniMatchMetadata);

const baseRemoveSniMatchRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest",
  loadBalancerId: "",
  listenerName: "",
  sniMatchName: "",
};

export const RemoveSniMatchRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest" as const,

  encode(
    message: RemoveSniMatchRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.listenerName !== "") {
      writer.uint32(18).string(message.listenerName);
    }
    if (message.sniMatchName !== "") {
      writer.uint32(26).string(message.sniMatchName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveSniMatchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRemoveSniMatchRequest } as RemoveSniMatchRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loadBalancerId = reader.string();
          break;
        case 2:
          message.listenerName = reader.string();
          break;
        case 3:
          message.sniMatchName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveSniMatchRequest {
    const message = { ...baseRemoveSniMatchRequest } as RemoveSniMatchRequest;
    message.loadBalancerId =
      object.loadBalancerId !== undefined && object.loadBalancerId !== null
        ? String(object.loadBalancerId)
        : "";
    message.listenerName =
      object.listenerName !== undefined && object.listenerName !== null
        ? String(object.listenerName)
        : "";
    message.sniMatchName =
      object.sniMatchName !== undefined && object.sniMatchName !== null
        ? String(object.sniMatchName)
        : "";
    return message;
  },

  toJSON(message: RemoveSniMatchRequest): unknown {
    const obj: any = {};
    message.loadBalancerId !== undefined &&
      (obj.loadBalancerId = message.loadBalancerId);
    message.listenerName !== undefined &&
      (obj.listenerName = message.listenerName);
    message.sniMatchName !== undefined &&
      (obj.sniMatchName = message.sniMatchName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveSniMatchRequest>, I>>(
    object: I
  ): RemoveSniMatchRequest {
    const message = { ...baseRemoveSniMatchRequest } as RemoveSniMatchRequest;
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.listenerName = object.listenerName ?? "";
    message.sniMatchName = object.sniMatchName ?? "";
    return message;
  },
};

messageTypeRegistry.set(RemoveSniMatchRequest.$type, RemoveSniMatchRequest);

const baseRemoveSniMatchMetadata: object = {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata",
  loadBalancerId: "",
  listenerName: "",
  sniMatchName: "",
};

export const RemoveSniMatchMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata" as const,

  encode(
    message: RemoveSniMatchMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.listenerName !== "") {
      writer.uint32(18).string(message.listenerName);
    }
    if (message.sniMatchName !== "") {
      writer.uint32(26).string(message.sniMatchName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveSniMatchMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRemoveSniMatchMetadata } as RemoveSniMatchMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loadBalancerId = reader.string();
          break;
        case 2:
          message.listenerName = reader.string();
          break;
        case 3:
          message.sniMatchName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveSniMatchMetadata {
    const message = { ...baseRemoveSniMatchMetadata } as RemoveSniMatchMetadata;
    message.loadBalancerId =
      object.loadBalancerId !== undefined && object.loadBalancerId !== null
        ? String(object.loadBalancerId)
        : "";
    message.listenerName =
      object.listenerName !== undefined && object.listenerName !== null
        ? String(object.listenerName)
        : "";
    message.sniMatchName =
      object.sniMatchName !== undefined && object.sniMatchName !== null
        ? String(object.sniMatchName)
        : "";
    return message;
  },

  toJSON(message: RemoveSniMatchMetadata): unknown {
    const obj: any = {};
    message.loadBalancerId !== undefined &&
      (obj.loadBalancerId = message.loadBalancerId);
    message.listenerName !== undefined &&
      (obj.listenerName = message.listenerName);
    message.sniMatchName !== undefined &&
      (obj.sniMatchName = message.sniMatchName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveSniMatchMetadata>, I>>(
    object: I
  ): RemoveSniMatchMetadata {
    const message = { ...baseRemoveSniMatchMetadata } as RemoveSniMatchMetadata;
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.listenerName = object.listenerName ?? "";
    message.sniMatchName = object.sniMatchName ?? "";
    return message;
  },
};

messageTypeRegistry.set(RemoveSniMatchMetadata.$type, RemoveSniMatchMetadata);

const baseUpdateSniMatchRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest",
  loadBalancerId: "",
  listenerName: "",
  name: "",
  serverNames: "",
};

export const UpdateSniMatchRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest" as const,

  encode(
    message: UpdateSniMatchRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.listenerName !== "") {
      writer.uint32(18).string(message.listenerName);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.serverNames) {
      writer.uint32(42).string(v!);
    }
    if (message.handler !== undefined) {
      TlsHandler.encode(message.handler, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateSniMatchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateSniMatchRequest } as UpdateSniMatchRequest;
    message.serverNames = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loadBalancerId = reader.string();
          break;
        case 2:
          message.listenerName = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 5:
          message.serverNames.push(reader.string());
          break;
        case 6:
          message.handler = TlsHandler.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSniMatchRequest {
    const message = { ...baseUpdateSniMatchRequest } as UpdateSniMatchRequest;
    message.loadBalancerId =
      object.loadBalancerId !== undefined && object.loadBalancerId !== null
        ? String(object.loadBalancerId)
        : "";
    message.listenerName =
      object.listenerName !== undefined && object.listenerName !== null
        ? String(object.listenerName)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    message.serverNames = (object.serverNames ?? []).map((e: any) => String(e));
    message.handler =
      object.handler !== undefined && object.handler !== null
        ? TlsHandler.fromJSON(object.handler)
        : undefined;
    return message;
  },

  toJSON(message: UpdateSniMatchRequest): unknown {
    const obj: any = {};
    message.loadBalancerId !== undefined &&
      (obj.loadBalancerId = message.loadBalancerId);
    message.listenerName !== undefined &&
      (obj.listenerName = message.listenerName);
    message.name !== undefined && (obj.name = message.name);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
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

  fromPartial<I extends Exact<DeepPartial<UpdateSniMatchRequest>, I>>(
    object: I
  ): UpdateSniMatchRequest {
    const message = { ...baseUpdateSniMatchRequest } as UpdateSniMatchRequest;
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.listenerName = object.listenerName ?? "";
    message.name = object.name ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.serverNames = object.serverNames?.map((e) => e) || [];
    message.handler =
      object.handler !== undefined && object.handler !== null
        ? TlsHandler.fromPartial(object.handler)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateSniMatchRequest.$type, UpdateSniMatchRequest);

const baseUpdateSniMatchMetadata: object = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata",
  loadBalancerId: "",
  listenerName: "",
  sniMatchName: "",
};

export const UpdateSniMatchMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata" as const,

  encode(
    message: UpdateSniMatchMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.listenerName !== "") {
      writer.uint32(18).string(message.listenerName);
    }
    if (message.sniMatchName !== "") {
      writer.uint32(26).string(message.sniMatchName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateSniMatchMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateSniMatchMetadata } as UpdateSniMatchMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loadBalancerId = reader.string();
          break;
        case 2:
          message.listenerName = reader.string();
          break;
        case 3:
          message.sniMatchName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSniMatchMetadata {
    const message = { ...baseUpdateSniMatchMetadata } as UpdateSniMatchMetadata;
    message.loadBalancerId =
      object.loadBalancerId !== undefined && object.loadBalancerId !== null
        ? String(object.loadBalancerId)
        : "";
    message.listenerName =
      object.listenerName !== undefined && object.listenerName !== null
        ? String(object.listenerName)
        : "";
    message.sniMatchName =
      object.sniMatchName !== undefined && object.sniMatchName !== null
        ? String(object.sniMatchName)
        : "";
    return message;
  },

  toJSON(message: UpdateSniMatchMetadata): unknown {
    const obj: any = {};
    message.loadBalancerId !== undefined &&
      (obj.loadBalancerId = message.loadBalancerId);
    message.listenerName !== undefined &&
      (obj.listenerName = message.listenerName);
    message.sniMatchName !== undefined &&
      (obj.sniMatchName = message.sniMatchName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSniMatchMetadata>, I>>(
    object: I
  ): UpdateSniMatchMetadata {
    const message = { ...baseUpdateSniMatchMetadata } as UpdateSniMatchMetadata;
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.listenerName = object.listenerName ?? "";
    message.sniMatchName = object.sniMatchName ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateSniMatchMetadata.$type, UpdateSniMatchMetadata);

const baseListLoadBalancerOperationsRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest",
  loadBalancerId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListLoadBalancerOperationsRequest = {
  $type:
    "yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest" as const,

  encode(
    message: ListLoadBalancerOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loadBalancerId !== "") {
      writer.uint32(10).string(message.loadBalancerId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListLoadBalancerOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListLoadBalancerOperationsRequest,
    } as ListLoadBalancerOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loadBalancerId = reader.string();
          break;
        case 2:
          message.pageSize = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.pageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListLoadBalancerOperationsRequest {
    const message = {
      ...baseListLoadBalancerOperationsRequest,
    } as ListLoadBalancerOperationsRequest;
    message.loadBalancerId =
      object.loadBalancerId !== undefined && object.loadBalancerId !== null
        ? String(object.loadBalancerId)
        : "";
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    return message;
  },

  toJSON(message: ListLoadBalancerOperationsRequest): unknown {
    const obj: any = {};
    message.loadBalancerId !== undefined &&
      (obj.loadBalancerId = message.loadBalancerId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListLoadBalancerOperationsRequest>, I>
  >(object: I): ListLoadBalancerOperationsRequest {
    const message = {
      ...baseListLoadBalancerOperationsRequest,
    } as ListLoadBalancerOperationsRequest;
    message.loadBalancerId = object.loadBalancerId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListLoadBalancerOperationsRequest.$type,
  ListLoadBalancerOperationsRequest
);

const baseListLoadBalancerOperationsResponse: object = {
  $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse",
  nextPageToken: "",
};

export const ListLoadBalancerOperationsResponse = {
  $type:
    "yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse" as const,

  encode(
    message: ListLoadBalancerOperationsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListLoadBalancerOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListLoadBalancerOperationsResponse,
    } as ListLoadBalancerOperationsResponse;
    message.operations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operations.push(Operation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextPageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListLoadBalancerOperationsResponse {
    const message = {
      ...baseListLoadBalancerOperationsResponse,
    } as ListLoadBalancerOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListLoadBalancerOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations) {
      obj.operations = message.operations.map((e) =>
        e ? Operation.toJSON(e) : undefined
      );
    } else {
      obj.operations = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListLoadBalancerOperationsResponse>, I>
  >(object: I): ListLoadBalancerOperationsResponse {
    const message = {
      ...baseListLoadBalancerOperationsResponse,
    } as ListLoadBalancerOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListLoadBalancerOperationsResponse.$type,
  ListLoadBalancerOperationsResponse
);

/** A set of methods for managing application load balancers. */
export const LoadBalancerServiceService = {
  /**
   * Returns the specified application load balancer.
   *
   * To get the list of all available application load balancers, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetLoadBalancerRequest) =>
      Buffer.from(GetLoadBalancerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetLoadBalancerRequest.decode(value),
    responseSerialize: (value: LoadBalancer) =>
      Buffer.from(LoadBalancer.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LoadBalancer.decode(value),
  },
  /** Lists application load balancers in the specified folder. */
  list: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListLoadBalancersRequest) =>
      Buffer.from(ListLoadBalancersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListLoadBalancersRequest.decode(value),
    responseSerialize: (value: ListLoadBalancersResponse) =>
      Buffer.from(ListLoadBalancersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListLoadBalancersResponse.decode(value),
  },
  /** Creates an application load balancer in the specified folder. */
  create: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateLoadBalancerRequest) =>
      Buffer.from(CreateLoadBalancerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateLoadBalancerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified application load balancer. */
  update: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateLoadBalancerRequest) =>
      Buffer.from(UpdateLoadBalancerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateLoadBalancerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified application load balancer. */
  delete: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteLoadBalancerRequest) =>
      Buffer.from(DeleteLoadBalancerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteLoadBalancerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Starts the specified application load balancer. */
  start: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Start",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartLoadBalancerRequest) =>
      Buffer.from(StartLoadBalancerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      StartLoadBalancerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Stops the specified application load balancer. */
  stop: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Stop",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StopLoadBalancerRequest) =>
      Buffer.from(StopLoadBalancerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      StopLoadBalancerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Adds a listener to the specified application load balancer. */
  addListener: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/AddListener",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddListenerRequest) =>
      Buffer.from(AddListenerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddListenerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified listener. */
  removeListener: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/RemoveListener",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveListenerRequest) =>
      Buffer.from(RemoveListenerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveListenerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified listener of the specified application load balancer. */
  updateListener: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/UpdateListener",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateListenerRequest) =>
      Buffer.from(UpdateListenerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateListenerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Adds a SNI handler to the specified listener.
   *
   * This request does not allow to add [TlsListener.default_handler]. Make an [UpdateListener] request instead.
   */
  addSniMatch: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/AddSniMatch",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddSniMatchRequest) =>
      Buffer.from(AddSniMatchRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddSniMatchRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Updates the specified SNI handler of the specified listener.
   *
   * This request does not allow to update [TlsListener.default_handler]. Make an [UpdateListener] request instead.
   */
  updateSniMatch: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/UpdateSniMatch",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateSniMatchRequest) =>
      Buffer.from(UpdateSniMatchRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateSniMatchRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Deletes the specified SNI handler.
   *
   * This request does not allow to delete [TlsListener.default_handler].
   */
  removeSniMatch: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/RemoveSniMatch",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveSniMatchRequest) =>
      Buffer.from(RemoveSniMatchRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveSniMatchRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns the statuses of all targets of the specified backend group in all their availability zones. */
  getTargetStates: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/GetTargetStates",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetTargetStatesRequest) =>
      Buffer.from(GetTargetStatesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetTargetStatesRequest.decode(value),
    responseSerialize: (value: GetTargetStatesResponse) =>
      Buffer.from(GetTargetStatesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetTargetStatesResponse.decode(value),
  },
  /** Lists operations for the specified application load balancer. */
  listOperations: {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListLoadBalancerOperationsRequest) =>
      Buffer.from(ListLoadBalancerOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListLoadBalancerOperationsRequest.decode(value),
    responseSerialize: (value: ListLoadBalancerOperationsResponse) =>
      Buffer.from(ListLoadBalancerOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListLoadBalancerOperationsResponse.decode(value),
  },
} as const;

export interface LoadBalancerServiceServer
  extends UntypedServiceImplementation {
  /**
   * Returns the specified application load balancer.
   *
   * To get the list of all available application load balancers, make a [List] request.
   */
  get: handleUnaryCall<GetLoadBalancerRequest, LoadBalancer>;
  /** Lists application load balancers in the specified folder. */
  list: handleUnaryCall<ListLoadBalancersRequest, ListLoadBalancersResponse>;
  /** Creates an application load balancer in the specified folder. */
  create: handleUnaryCall<CreateLoadBalancerRequest, Operation>;
  /** Updates the specified application load balancer. */
  update: handleUnaryCall<UpdateLoadBalancerRequest, Operation>;
  /** Deletes the specified application load balancer. */
  delete: handleUnaryCall<DeleteLoadBalancerRequest, Operation>;
  /** Starts the specified application load balancer. */
  start: handleUnaryCall<StartLoadBalancerRequest, Operation>;
  /** Stops the specified application load balancer. */
  stop: handleUnaryCall<StopLoadBalancerRequest, Operation>;
  /** Adds a listener to the specified application load balancer. */
  addListener: handleUnaryCall<AddListenerRequest, Operation>;
  /** Deletes the specified listener. */
  removeListener: handleUnaryCall<RemoveListenerRequest, Operation>;
  /** Updates the specified listener of the specified application load balancer. */
  updateListener: handleUnaryCall<UpdateListenerRequest, Operation>;
  /**
   * Adds a SNI handler to the specified listener.
   *
   * This request does not allow to add [TlsListener.default_handler]. Make an [UpdateListener] request instead.
   */
  addSniMatch: handleUnaryCall<AddSniMatchRequest, Operation>;
  /**
   * Updates the specified SNI handler of the specified listener.
   *
   * This request does not allow to update [TlsListener.default_handler]. Make an [UpdateListener] request instead.
   */
  updateSniMatch: handleUnaryCall<UpdateSniMatchRequest, Operation>;
  /**
   * Deletes the specified SNI handler.
   *
   * This request does not allow to delete [TlsListener.default_handler].
   */
  removeSniMatch: handleUnaryCall<RemoveSniMatchRequest, Operation>;
  /** Returns the statuses of all targets of the specified backend group in all their availability zones. */
  getTargetStates: handleUnaryCall<
    GetTargetStatesRequest,
    GetTargetStatesResponse
  >;
  /** Lists operations for the specified application load balancer. */
  listOperations: handleUnaryCall<
    ListLoadBalancerOperationsRequest,
    ListLoadBalancerOperationsResponse
  >;
}

export interface LoadBalancerServiceClient extends Client {
  /**
   * Returns the specified application load balancer.
   *
   * To get the list of all available application load balancers, make a [List] request.
   */
  get(
    request: GetLoadBalancerRequest,
    callback: (error: ServiceError | null, response: LoadBalancer) => void
  ): ClientUnaryCall;
  get(
    request: GetLoadBalancerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LoadBalancer) => void
  ): ClientUnaryCall;
  get(
    request: GetLoadBalancerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LoadBalancer) => void
  ): ClientUnaryCall;
  /** Lists application load balancers in the specified folder. */
  list(
    request: ListLoadBalancersRequest,
    callback: (
      error: ServiceError | null,
      response: ListLoadBalancersResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListLoadBalancersRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListLoadBalancersResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListLoadBalancersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListLoadBalancersResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates an application load balancer in the specified folder. */
  create(
    request: CreateLoadBalancerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateLoadBalancerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateLoadBalancerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified application load balancer. */
  update(
    request: UpdateLoadBalancerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateLoadBalancerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateLoadBalancerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified application load balancer. */
  delete(
    request: DeleteLoadBalancerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteLoadBalancerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteLoadBalancerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Starts the specified application load balancer. */
  start(
    request: StartLoadBalancerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  start(
    request: StartLoadBalancerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  start(
    request: StartLoadBalancerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Stops the specified application load balancer. */
  stop(
    request: StopLoadBalancerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  stop(
    request: StopLoadBalancerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  stop(
    request: StopLoadBalancerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Adds a listener to the specified application load balancer. */
  addListener(
    request: AddListenerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addListener(
    request: AddListenerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addListener(
    request: AddListenerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified listener. */
  removeListener(
    request: RemoveListenerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  removeListener(
    request: RemoveListenerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  removeListener(
    request: RemoveListenerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified listener of the specified application load balancer. */
  updateListener(
    request: UpdateListenerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateListener(
    request: UpdateListenerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateListener(
    request: UpdateListenerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Adds a SNI handler to the specified listener.
   *
   * This request does not allow to add [TlsListener.default_handler]. Make an [UpdateListener] request instead.
   */
  addSniMatch(
    request: AddSniMatchRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addSniMatch(
    request: AddSniMatchRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addSniMatch(
    request: AddSniMatchRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Updates the specified SNI handler of the specified listener.
   *
   * This request does not allow to update [TlsListener.default_handler]. Make an [UpdateListener] request instead.
   */
  updateSniMatch(
    request: UpdateSniMatchRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateSniMatch(
    request: UpdateSniMatchRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateSniMatch(
    request: UpdateSniMatchRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Deletes the specified SNI handler.
   *
   * This request does not allow to delete [TlsListener.default_handler].
   */
  removeSniMatch(
    request: RemoveSniMatchRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  removeSniMatch(
    request: RemoveSniMatchRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  removeSniMatch(
    request: RemoveSniMatchRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Returns the statuses of all targets of the specified backend group in all their availability zones. */
  getTargetStates(
    request: GetTargetStatesRequest,
    callback: (
      error: ServiceError | null,
      response: GetTargetStatesResponse
    ) => void
  ): ClientUnaryCall;
  getTargetStates(
    request: GetTargetStatesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetTargetStatesResponse
    ) => void
  ): ClientUnaryCall;
  getTargetStates(
    request: GetTargetStatesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetTargetStatesResponse
    ) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified application load balancer. */
  listOperations(
    request: ListLoadBalancerOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListLoadBalancerOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListLoadBalancerOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListLoadBalancerOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListLoadBalancerOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListLoadBalancerOperationsResponse
    ) => void
  ): ClientUnaryCall;
}

export const LoadBalancerServiceClient = makeGenericClientConstructor(
  LoadBalancerServiceService,
  "yandex.cloud.apploadbalancer.v1.LoadBalancerService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): LoadBalancerServiceClient;
  service: typeof LoadBalancerServiceService;
};

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
