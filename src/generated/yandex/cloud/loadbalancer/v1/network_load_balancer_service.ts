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
import {
  NetworkLoadBalancer_Type,
  AttachedTargetGroup,
  IpVersion,
  Listener_Protocol,
  NetworkLoadBalancer,
  TargetState,
  networkLoadBalancer_TypeFromJSON,
  networkLoadBalancer_TypeToJSON,
  ipVersionFromJSON,
  ipVersionToJSON,
  listener_ProtocolFromJSON,
  listener_ProtocolToJSON,
} from "../../../../yandex/cloud/loadbalancer/v1/network_load_balancer";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.loadbalancer.v1";

export interface GetNetworkLoadBalancerRequest {
  $type: "yandex.cloud.loadbalancer.v1.GetNetworkLoadBalancerRequest";
  /**
   * ID of the NetworkLoadBalancer resource to return.
   * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
   */
  networkLoadBalancerId: string;
}

export interface ListNetworkLoadBalancersRequest {
  $type: "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancersRequest";
  /**
   * ID of the folder that the network load balancer belongs to.
   * To get the folder ID, use a [NetworkLoadBalancerService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [<ResponseMessage>.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListNetworkLoadBalancersResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can only filter by the [NetworkLoadBalancer.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
}

export interface ListNetworkLoadBalancersResponse {
  $type: "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancersResponse";
  /** List of NetworkLoadBalancer resources. */
  networkLoadBalancers: NetworkLoadBalancer[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListNetworkLoadBalancersRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListNetworkLoadBalancersRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateNetworkLoadBalancerRequest {
  $type: "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerRequest";
  /**
   * ID of the folder to create a network load balancer in.
   * To get the folder ID, use a [NetworkLoadBalancerService.List] request.
   */
  folderId: string;
  /**
   * Name of the network load balancer.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the network load balancer. */
  description: string;
  /** Resource labels as `` key:value `` pairs. */
  labels: { [key: string]: string };
  /** ID of the region where the network load balancer resides. */
  regionId: string;
  /** Type of the network load balancer. */
  type: NetworkLoadBalancer_Type;
  /** List of listeners and their specs for the network load balancer. */
  listenerSpecs: ListenerSpec[];
  /** List of attached target groups for the network load balancer. */
  attachedTargetGroups: AttachedTargetGroup[];
  /** Specifies if network load balancer protected from deletion. */
  deletionProtection: boolean;
}

export interface CreateNetworkLoadBalancerRequest_LabelsEntry {
  $type: "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateNetworkLoadBalancerMetadata {
  $type: "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerMetadata";
  /** ID of the network load balancer that is being created. */
  networkLoadBalancerId: string;
}

export interface UpdateNetworkLoadBalancerRequest {
  $type: "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerRequest";
  /**
   * ID of the network load balancer to update.
   * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
   */
  networkLoadBalancerId: string;
  /** Field mask that specifies which fields of the NetworkLoadBalancer resource are going to be updated. */
  updateMask?: FieldMask;
  /**
   * Name of the network load balancer.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the network load balancer. */
  description: string;
  /**
   * Resource labels as `` key:value `` pairs.
   *
   * The existing set of `` labels `` is completely replaced with the provided set.
   */
  labels: { [key: string]: string };
  /** A list of listeners and their specs for the network load balancer. */
  listenerSpecs: ListenerSpec[];
  /** A list of attached target groups for the network load balancer. */
  attachedTargetGroups: AttachedTargetGroup[];
  /** Specifies if network load balancer protected from deletion. */
  deletionProtection: boolean;
}

export interface UpdateNetworkLoadBalancerRequest_LabelsEntry {
  $type: "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateNetworkLoadBalancerMetadata {
  $type: "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerMetadata";
  /** ID of the NetworkLoadBalancer resource that is being updated. */
  networkLoadBalancerId: string;
}

export interface DeleteNetworkLoadBalancerRequest {
  $type: "yandex.cloud.loadbalancer.v1.DeleteNetworkLoadBalancerRequest";
  /**
   * ID of the network load balancer to delete.
   * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
   */
  networkLoadBalancerId: string;
}

export interface DeleteNetworkLoadBalancerMetadata {
  $type: "yandex.cloud.loadbalancer.v1.DeleteNetworkLoadBalancerMetadata";
  /** ID of the NetworkLoadBalancer resource that is being deleted. */
  networkLoadBalancerId: string;
}

export interface StartNetworkLoadBalancerRequest {
  $type: "yandex.cloud.loadbalancer.v1.StartNetworkLoadBalancerRequest";
  /**
   * ID of the network load balancer to start.
   * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
   */
  networkLoadBalancerId: string;
}

export interface StartNetworkLoadBalancerMetadata {
  $type: "yandex.cloud.loadbalancer.v1.StartNetworkLoadBalancerMetadata";
  /** ID of the NetworkLoadBalancer resource that is being started. */
  networkLoadBalancerId: string;
}

export interface StopNetworkLoadBalancerRequest {
  $type: "yandex.cloud.loadbalancer.v1.StopNetworkLoadBalancerRequest";
  /**
   * ID of the network load balancer to stop.
   * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
   */
  networkLoadBalancerId: string;
}

export interface StopNetworkLoadBalancerMetadata {
  $type: "yandex.cloud.loadbalancer.v1.StopNetworkLoadBalancerMetadata";
  /** ID of the NetworkLoadBalancer resource that is being stopped. */
  networkLoadBalancerId: string;
}

export interface AttachNetworkLoadBalancerTargetGroupRequest {
  $type: "yandex.cloud.loadbalancer.v1.AttachNetworkLoadBalancerTargetGroupRequest";
  /**
   * ID of the network load balancer to attach the target group to.
   * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
   */
  networkLoadBalancerId: string;
  /**
   * ID of the attached target group to attach to the network load balancer.
   * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
   */
  attachedTargetGroup?: AttachedTargetGroup;
}

export interface AttachNetworkLoadBalancerTargetGroupMetadata {
  $type: "yandex.cloud.loadbalancer.v1.AttachNetworkLoadBalancerTargetGroupMetadata";
  /** ID of the network load balancer that the target group is being attached to. */
  networkLoadBalancerId: string;
  /** ID of the target group. */
  targetGroupId: string;
}

export interface DetachNetworkLoadBalancerTargetGroupRequest {
  $type: "yandex.cloud.loadbalancer.v1.DetachNetworkLoadBalancerTargetGroupRequest";
  /**
   * ID of the network load balancer to detach the target group from.
   * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
   */
  networkLoadBalancerId: string;
  /** ID of the target group. */
  targetGroupId: string;
}

export interface DetachNetworkLoadBalancerTargetGroupMetadata {
  $type: "yandex.cloud.loadbalancer.v1.DetachNetworkLoadBalancerTargetGroupMetadata";
  /** ID of the network load balancer that the target group is being detached from. */
  networkLoadBalancerId: string;
  /** ID of the target group. */
  targetGroupId: string;
}

export interface AddNetworkLoadBalancerListenerRequest {
  $type: "yandex.cloud.loadbalancer.v1.AddNetworkLoadBalancerListenerRequest";
  /**
   * ID of the network load balancer to add a listener to.
   * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
   */
  networkLoadBalancerId: string;
  /** Listener spec. */
  listenerSpec?: ListenerSpec;
}

export interface AddNetworkLoadBalancerListenerMetadata {
  $type: "yandex.cloud.loadbalancer.v1.AddNetworkLoadBalancerListenerMetadata";
  /** ID of the network load balancer that the listener is being added to. */
  networkLoadBalancerId: string;
}

export interface RemoveNetworkLoadBalancerListenerRequest {
  $type: "yandex.cloud.loadbalancer.v1.RemoveNetworkLoadBalancerListenerRequest";
  /**
   * ID of the network load balancer to remove the listener from.
   * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
   */
  networkLoadBalancerId: string;
  /** Name of the listener to delete. */
  listenerName: string;
}

export interface RemoveNetworkLoadBalancerListenerMetadata {
  $type: "yandex.cloud.loadbalancer.v1.RemoveNetworkLoadBalancerListenerMetadata";
  /** ID of the network load balancer that the listener is being removed from. */
  networkLoadBalancerId: string;
}

export interface ListNetworkLoadBalancerOperationsRequest {
  $type: "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancerOperationsRequest";
  /** ID of the NetworkLoadBalancer resource to list operations for. */
  networkLoadBalancerId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size], the service returns a [ListNetworkLoadBalancerOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListNetworkLoadBalancerOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListNetworkLoadBalancerOperationsResponse {
  $type: "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancerOperationsResponse";
  /** List of operations for the specified network load balancer. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListNetworkLoadBalancerOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListNetworkLoadBalancerOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface GetTargetStatesRequest {
  $type: "yandex.cloud.loadbalancer.v1.GetTargetStatesRequest";
  /** ID of the NetworkLoadBalancer resource with an attached target group. */
  networkLoadBalancerId: string;
  /** ID of the target group to get states of resources from. */
  targetGroupId: string;
}

export interface GetTargetStatesResponse {
  $type: "yandex.cloud.loadbalancer.v1.GetTargetStatesResponse";
  /** List of states of targets within the target group that is specified in the [GetTargetStatesRequest] message. */
  targetStates: TargetState[];
}

/** External address specification that is used by [ListenerSpec]. */
export interface ExternalAddressSpec {
  $type: "yandex.cloud.loadbalancer.v1.ExternalAddressSpec";
  /**
   * Public IP address for a listener.
   * If you provide a static public IP address for the [NetworkLoadBalancerService.Update]
   * method, it will replace the existing listener address.
   */
  address: string;
  /** IP version. */
  ipVersion: IpVersion;
}

/** Internal address specification that is used by [ListenerSpec]. */
export interface InternalAddressSpec {
  $type: "yandex.cloud.loadbalancer.v1.InternalAddressSpec";
  /** Internal IP address for a listener. */
  address: string;
  /** ID of the subnet. */
  subnetId: string;
  /** IP version. */
  ipVersion: IpVersion;
}

/** Listener specification that will be used by a network load balancer. */
export interface ListenerSpec {
  $type: "yandex.cloud.loadbalancer.v1.ListenerSpec";
  /** Name of the listener. The name must be unique for each listener on a single load balancer. 3-63 characters long. */
  name: string;
  /** Port for incoming traffic. */
  port: number;
  /** Protocol for incoming traffic. */
  protocol: Listener_Protocol;
  /** External IP address specification. */
  externalAddressSpec?: ExternalAddressSpec | undefined;
  /** Internal IP address specification. */
  internalAddressSpec?: InternalAddressSpec | undefined;
  /**
   * Port of a target.
   * Acceptable values are 1 to 65535, inclusive.
   */
  targetPort: number;
}

const baseGetNetworkLoadBalancerRequest: object = {
  $type: "yandex.cloud.loadbalancer.v1.GetNetworkLoadBalancerRequest",
  networkLoadBalancerId: "",
};

export const GetNetworkLoadBalancerRequest = {
  $type: "yandex.cloud.loadbalancer.v1.GetNetworkLoadBalancerRequest" as const,

  encode(
    message: GetNetworkLoadBalancerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetNetworkLoadBalancerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetNetworkLoadBalancerRequest,
    } as GetNetworkLoadBalancerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkLoadBalancerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNetworkLoadBalancerRequest {
    const message = {
      ...baseGetNetworkLoadBalancerRequest,
    } as GetNetworkLoadBalancerRequest;
    message.networkLoadBalancerId =
      object.networkLoadBalancerId !== undefined &&
      object.networkLoadBalancerId !== null
        ? String(object.networkLoadBalancerId)
        : "";
    return message;
  },

  toJSON(message: GetNetworkLoadBalancerRequest): unknown {
    const obj: any = {};
    message.networkLoadBalancerId !== undefined &&
      (obj.networkLoadBalancerId = message.networkLoadBalancerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetNetworkLoadBalancerRequest>, I>>(
    object: I
  ): GetNetworkLoadBalancerRequest {
    const message = {
      ...baseGetNetworkLoadBalancerRequest,
    } as GetNetworkLoadBalancerRequest;
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  GetNetworkLoadBalancerRequest.$type,
  GetNetworkLoadBalancerRequest
);

const baseListNetworkLoadBalancersRequest: object = {
  $type: "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancersRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListNetworkLoadBalancersRequest = {
  $type:
    "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancersRequest" as const,

  encode(
    message: ListNetworkLoadBalancersRequest,
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
  ): ListNetworkLoadBalancersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListNetworkLoadBalancersRequest,
    } as ListNetworkLoadBalancersRequest;
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

  fromJSON(object: any): ListNetworkLoadBalancersRequest {
    const message = {
      ...baseListNetworkLoadBalancersRequest,
    } as ListNetworkLoadBalancersRequest;
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

  toJSON(message: ListNetworkLoadBalancersRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListNetworkLoadBalancersRequest>, I>>(
    object: I
  ): ListNetworkLoadBalancersRequest {
    const message = {
      ...baseListNetworkLoadBalancersRequest,
    } as ListNetworkLoadBalancersRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListNetworkLoadBalancersRequest.$type,
  ListNetworkLoadBalancersRequest
);

const baseListNetworkLoadBalancersResponse: object = {
  $type: "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancersResponse",
  nextPageToken: "",
};

export const ListNetworkLoadBalancersResponse = {
  $type:
    "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancersResponse" as const,

  encode(
    message: ListNetworkLoadBalancersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.networkLoadBalancers) {
      NetworkLoadBalancer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListNetworkLoadBalancersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListNetworkLoadBalancersResponse,
    } as ListNetworkLoadBalancersResponse;
    message.networkLoadBalancers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkLoadBalancers.push(
            NetworkLoadBalancer.decode(reader, reader.uint32())
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

  fromJSON(object: any): ListNetworkLoadBalancersResponse {
    const message = {
      ...baseListNetworkLoadBalancersResponse,
    } as ListNetworkLoadBalancersResponse;
    message.networkLoadBalancers = (object.networkLoadBalancers ?? []).map(
      (e: any) => NetworkLoadBalancer.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListNetworkLoadBalancersResponse): unknown {
    const obj: any = {};
    if (message.networkLoadBalancers) {
      obj.networkLoadBalancers = message.networkLoadBalancers.map((e) =>
        e ? NetworkLoadBalancer.toJSON(e) : undefined
      );
    } else {
      obj.networkLoadBalancers = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListNetworkLoadBalancersResponse>, I>
  >(object: I): ListNetworkLoadBalancersResponse {
    const message = {
      ...baseListNetworkLoadBalancersResponse,
    } as ListNetworkLoadBalancersResponse;
    message.networkLoadBalancers =
      object.networkLoadBalancers?.map((e) =>
        NetworkLoadBalancer.fromPartial(e)
      ) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListNetworkLoadBalancersResponse.$type,
  ListNetworkLoadBalancersResponse
);

const baseCreateNetworkLoadBalancerRequest: object = {
  $type: "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerRequest",
  folderId: "",
  name: "",
  description: "",
  regionId: "",
  type: 0,
  deletionProtection: false,
};

export const CreateNetworkLoadBalancerRequest = {
  $type:
    "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerRequest" as const,

  encode(
    message: CreateNetworkLoadBalancerRequest,
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
      CreateNetworkLoadBalancerRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.regionId !== "") {
      writer.uint32(42).string(message.regionId);
    }
    if (message.type !== 0) {
      writer.uint32(48).int32(message.type);
    }
    for (const v of message.listenerSpecs) {
      ListenerSpec.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.attachedTargetGroups) {
      AttachedTargetGroup.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(72).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateNetworkLoadBalancerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateNetworkLoadBalancerRequest,
    } as CreateNetworkLoadBalancerRequest;
    message.labels = {};
    message.listenerSpecs = [];
    message.attachedTargetGroups = [];
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
          const entry4 = CreateNetworkLoadBalancerRequest_LabelsEntry.decode(
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
          message.type = reader.int32() as any;
          break;
        case 7:
          message.listenerSpecs.push(
            ListenerSpec.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.attachedTargetGroups.push(
            AttachedTargetGroup.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.deletionProtection = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateNetworkLoadBalancerRequest {
    const message = {
      ...baseCreateNetworkLoadBalancerRequest,
    } as CreateNetworkLoadBalancerRequest;
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
    message.type =
      object.type !== undefined && object.type !== null
        ? networkLoadBalancer_TypeFromJSON(object.type)
        : 0;
    message.listenerSpecs = (object.listenerSpecs ?? []).map((e: any) =>
      ListenerSpec.fromJSON(e)
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

  toJSON(message: CreateNetworkLoadBalancerRequest): unknown {
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
    message.type !== undefined &&
      (obj.type = networkLoadBalancer_TypeToJSON(message.type));
    if (message.listenerSpecs) {
      obj.listenerSpecs = message.listenerSpecs.map((e) =>
        e ? ListenerSpec.toJSON(e) : undefined
      );
    } else {
      obj.listenerSpecs = [];
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

  fromPartial<
    I extends Exact<DeepPartial<CreateNetworkLoadBalancerRequest>, I>
  >(object: I): CreateNetworkLoadBalancerRequest {
    const message = {
      ...baseCreateNetworkLoadBalancerRequest,
    } as CreateNetworkLoadBalancerRequest;
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
    message.type = object.type ?? 0;
    message.listenerSpecs =
      object.listenerSpecs?.map((e) => ListenerSpec.fromPartial(e)) || [];
    message.attachedTargetGroups =
      object.attachedTargetGroups?.map((e) =>
        AttachedTargetGroup.fromPartial(e)
      ) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(
  CreateNetworkLoadBalancerRequest.$type,
  CreateNetworkLoadBalancerRequest
);

const baseCreateNetworkLoadBalancerRequest_LabelsEntry: object = {
  $type:
    "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateNetworkLoadBalancerRequest_LabelsEntry = {
  $type:
    "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerRequest.LabelsEntry" as const,

  encode(
    message: CreateNetworkLoadBalancerRequest_LabelsEntry,
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
  ): CreateNetworkLoadBalancerRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateNetworkLoadBalancerRequest_LabelsEntry,
    } as CreateNetworkLoadBalancerRequest_LabelsEntry;
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

  fromJSON(object: any): CreateNetworkLoadBalancerRequest_LabelsEntry {
    const message = {
      ...baseCreateNetworkLoadBalancerRequest_LabelsEntry,
    } as CreateNetworkLoadBalancerRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateNetworkLoadBalancerRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<CreateNetworkLoadBalancerRequest_LabelsEntry>,
      I
    >
  >(object: I): CreateNetworkLoadBalancerRequest_LabelsEntry {
    const message = {
      ...baseCreateNetworkLoadBalancerRequest_LabelsEntry,
    } as CreateNetworkLoadBalancerRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateNetworkLoadBalancerRequest_LabelsEntry.$type,
  CreateNetworkLoadBalancerRequest_LabelsEntry
);

const baseCreateNetworkLoadBalancerMetadata: object = {
  $type: "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerMetadata",
  networkLoadBalancerId: "",
};

export const CreateNetworkLoadBalancerMetadata = {
  $type:
    "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerMetadata" as const,

  encode(
    message: CreateNetworkLoadBalancerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateNetworkLoadBalancerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateNetworkLoadBalancerMetadata,
    } as CreateNetworkLoadBalancerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkLoadBalancerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateNetworkLoadBalancerMetadata {
    const message = {
      ...baseCreateNetworkLoadBalancerMetadata,
    } as CreateNetworkLoadBalancerMetadata;
    message.networkLoadBalancerId =
      object.networkLoadBalancerId !== undefined &&
      object.networkLoadBalancerId !== null
        ? String(object.networkLoadBalancerId)
        : "";
    return message;
  },

  toJSON(message: CreateNetworkLoadBalancerMetadata): unknown {
    const obj: any = {};
    message.networkLoadBalancerId !== undefined &&
      (obj.networkLoadBalancerId = message.networkLoadBalancerId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateNetworkLoadBalancerMetadata>, I>
  >(object: I): CreateNetworkLoadBalancerMetadata {
    const message = {
      ...baseCreateNetworkLoadBalancerMetadata,
    } as CreateNetworkLoadBalancerMetadata;
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateNetworkLoadBalancerMetadata.$type,
  CreateNetworkLoadBalancerMetadata
);

const baseUpdateNetworkLoadBalancerRequest: object = {
  $type: "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerRequest",
  networkLoadBalancerId: "",
  name: "",
  description: "",
  deletionProtection: false,
};

export const UpdateNetworkLoadBalancerRequest = {
  $type:
    "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerRequest" as const,

  encode(
    message: UpdateNetworkLoadBalancerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
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
      UpdateNetworkLoadBalancerRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    for (const v of message.listenerSpecs) {
      ListenerSpec.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.attachedTargetGroups) {
      AttachedTargetGroup.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(64).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateNetworkLoadBalancerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateNetworkLoadBalancerRequest,
    } as UpdateNetworkLoadBalancerRequest;
    message.labels = {};
    message.listenerSpecs = [];
    message.attachedTargetGroups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkLoadBalancerId = reader.string();
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
          const entry5 = UpdateNetworkLoadBalancerRequest_LabelsEntry.decode(
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
          message.attachedTargetGroups.push(
            AttachedTargetGroup.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.deletionProtection = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateNetworkLoadBalancerRequest {
    const message = {
      ...baseUpdateNetworkLoadBalancerRequest,
    } as UpdateNetworkLoadBalancerRequest;
    message.networkLoadBalancerId =
      object.networkLoadBalancerId !== undefined &&
      object.networkLoadBalancerId !== null
        ? String(object.networkLoadBalancerId)
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

  toJSON(message: UpdateNetworkLoadBalancerRequest): unknown {
    const obj: any = {};
    message.networkLoadBalancerId !== undefined &&
      (obj.networkLoadBalancerId = message.networkLoadBalancerId);
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

  fromPartial<
    I extends Exact<DeepPartial<UpdateNetworkLoadBalancerRequest>, I>
  >(object: I): UpdateNetworkLoadBalancerRequest {
    const message = {
      ...baseUpdateNetworkLoadBalancerRequest,
    } as UpdateNetworkLoadBalancerRequest;
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
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
    message.attachedTargetGroups =
      object.attachedTargetGroups?.map((e) =>
        AttachedTargetGroup.fromPartial(e)
      ) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(
  UpdateNetworkLoadBalancerRequest.$type,
  UpdateNetworkLoadBalancerRequest
);

const baseUpdateNetworkLoadBalancerRequest_LabelsEntry: object = {
  $type:
    "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateNetworkLoadBalancerRequest_LabelsEntry = {
  $type:
    "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerRequest.LabelsEntry" as const,

  encode(
    message: UpdateNetworkLoadBalancerRequest_LabelsEntry,
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
  ): UpdateNetworkLoadBalancerRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateNetworkLoadBalancerRequest_LabelsEntry,
    } as UpdateNetworkLoadBalancerRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateNetworkLoadBalancerRequest_LabelsEntry {
    const message = {
      ...baseUpdateNetworkLoadBalancerRequest_LabelsEntry,
    } as UpdateNetworkLoadBalancerRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateNetworkLoadBalancerRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<UpdateNetworkLoadBalancerRequest_LabelsEntry>,
      I
    >
  >(object: I): UpdateNetworkLoadBalancerRequest_LabelsEntry {
    const message = {
      ...baseUpdateNetworkLoadBalancerRequest_LabelsEntry,
    } as UpdateNetworkLoadBalancerRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateNetworkLoadBalancerRequest_LabelsEntry.$type,
  UpdateNetworkLoadBalancerRequest_LabelsEntry
);

const baseUpdateNetworkLoadBalancerMetadata: object = {
  $type: "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerMetadata",
  networkLoadBalancerId: "",
};

export const UpdateNetworkLoadBalancerMetadata = {
  $type:
    "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerMetadata" as const,

  encode(
    message: UpdateNetworkLoadBalancerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateNetworkLoadBalancerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateNetworkLoadBalancerMetadata,
    } as UpdateNetworkLoadBalancerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkLoadBalancerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateNetworkLoadBalancerMetadata {
    const message = {
      ...baseUpdateNetworkLoadBalancerMetadata,
    } as UpdateNetworkLoadBalancerMetadata;
    message.networkLoadBalancerId =
      object.networkLoadBalancerId !== undefined &&
      object.networkLoadBalancerId !== null
        ? String(object.networkLoadBalancerId)
        : "";
    return message;
  },

  toJSON(message: UpdateNetworkLoadBalancerMetadata): unknown {
    const obj: any = {};
    message.networkLoadBalancerId !== undefined &&
      (obj.networkLoadBalancerId = message.networkLoadBalancerId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateNetworkLoadBalancerMetadata>, I>
  >(object: I): UpdateNetworkLoadBalancerMetadata {
    const message = {
      ...baseUpdateNetworkLoadBalancerMetadata,
    } as UpdateNetworkLoadBalancerMetadata;
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateNetworkLoadBalancerMetadata.$type,
  UpdateNetworkLoadBalancerMetadata
);

const baseDeleteNetworkLoadBalancerRequest: object = {
  $type: "yandex.cloud.loadbalancer.v1.DeleteNetworkLoadBalancerRequest",
  networkLoadBalancerId: "",
};

export const DeleteNetworkLoadBalancerRequest = {
  $type:
    "yandex.cloud.loadbalancer.v1.DeleteNetworkLoadBalancerRequest" as const,

  encode(
    message: DeleteNetworkLoadBalancerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteNetworkLoadBalancerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteNetworkLoadBalancerRequest,
    } as DeleteNetworkLoadBalancerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkLoadBalancerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteNetworkLoadBalancerRequest {
    const message = {
      ...baseDeleteNetworkLoadBalancerRequest,
    } as DeleteNetworkLoadBalancerRequest;
    message.networkLoadBalancerId =
      object.networkLoadBalancerId !== undefined &&
      object.networkLoadBalancerId !== null
        ? String(object.networkLoadBalancerId)
        : "";
    return message;
  },

  toJSON(message: DeleteNetworkLoadBalancerRequest): unknown {
    const obj: any = {};
    message.networkLoadBalancerId !== undefined &&
      (obj.networkLoadBalancerId = message.networkLoadBalancerId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<DeleteNetworkLoadBalancerRequest>, I>
  >(object: I): DeleteNetworkLoadBalancerRequest {
    const message = {
      ...baseDeleteNetworkLoadBalancerRequest,
    } as DeleteNetworkLoadBalancerRequest;
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteNetworkLoadBalancerRequest.$type,
  DeleteNetworkLoadBalancerRequest
);

const baseDeleteNetworkLoadBalancerMetadata: object = {
  $type: "yandex.cloud.loadbalancer.v1.DeleteNetworkLoadBalancerMetadata",
  networkLoadBalancerId: "",
};

export const DeleteNetworkLoadBalancerMetadata = {
  $type:
    "yandex.cloud.loadbalancer.v1.DeleteNetworkLoadBalancerMetadata" as const,

  encode(
    message: DeleteNetworkLoadBalancerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteNetworkLoadBalancerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteNetworkLoadBalancerMetadata,
    } as DeleteNetworkLoadBalancerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkLoadBalancerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteNetworkLoadBalancerMetadata {
    const message = {
      ...baseDeleteNetworkLoadBalancerMetadata,
    } as DeleteNetworkLoadBalancerMetadata;
    message.networkLoadBalancerId =
      object.networkLoadBalancerId !== undefined &&
      object.networkLoadBalancerId !== null
        ? String(object.networkLoadBalancerId)
        : "";
    return message;
  },

  toJSON(message: DeleteNetworkLoadBalancerMetadata): unknown {
    const obj: any = {};
    message.networkLoadBalancerId !== undefined &&
      (obj.networkLoadBalancerId = message.networkLoadBalancerId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<DeleteNetworkLoadBalancerMetadata>, I>
  >(object: I): DeleteNetworkLoadBalancerMetadata {
    const message = {
      ...baseDeleteNetworkLoadBalancerMetadata,
    } as DeleteNetworkLoadBalancerMetadata;
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteNetworkLoadBalancerMetadata.$type,
  DeleteNetworkLoadBalancerMetadata
);

const baseStartNetworkLoadBalancerRequest: object = {
  $type: "yandex.cloud.loadbalancer.v1.StartNetworkLoadBalancerRequest",
  networkLoadBalancerId: "",
};

export const StartNetworkLoadBalancerRequest = {
  $type:
    "yandex.cloud.loadbalancer.v1.StartNetworkLoadBalancerRequest" as const,

  encode(
    message: StartNetworkLoadBalancerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StartNetworkLoadBalancerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseStartNetworkLoadBalancerRequest,
    } as StartNetworkLoadBalancerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkLoadBalancerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartNetworkLoadBalancerRequest {
    const message = {
      ...baseStartNetworkLoadBalancerRequest,
    } as StartNetworkLoadBalancerRequest;
    message.networkLoadBalancerId =
      object.networkLoadBalancerId !== undefined &&
      object.networkLoadBalancerId !== null
        ? String(object.networkLoadBalancerId)
        : "";
    return message;
  },

  toJSON(message: StartNetworkLoadBalancerRequest): unknown {
    const obj: any = {};
    message.networkLoadBalancerId !== undefined &&
      (obj.networkLoadBalancerId = message.networkLoadBalancerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartNetworkLoadBalancerRequest>, I>>(
    object: I
  ): StartNetworkLoadBalancerRequest {
    const message = {
      ...baseStartNetworkLoadBalancerRequest,
    } as StartNetworkLoadBalancerRequest;
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  StartNetworkLoadBalancerRequest.$type,
  StartNetworkLoadBalancerRequest
);

const baseStartNetworkLoadBalancerMetadata: object = {
  $type: "yandex.cloud.loadbalancer.v1.StartNetworkLoadBalancerMetadata",
  networkLoadBalancerId: "",
};

export const StartNetworkLoadBalancerMetadata = {
  $type:
    "yandex.cloud.loadbalancer.v1.StartNetworkLoadBalancerMetadata" as const,

  encode(
    message: StartNetworkLoadBalancerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StartNetworkLoadBalancerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseStartNetworkLoadBalancerMetadata,
    } as StartNetworkLoadBalancerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkLoadBalancerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartNetworkLoadBalancerMetadata {
    const message = {
      ...baseStartNetworkLoadBalancerMetadata,
    } as StartNetworkLoadBalancerMetadata;
    message.networkLoadBalancerId =
      object.networkLoadBalancerId !== undefined &&
      object.networkLoadBalancerId !== null
        ? String(object.networkLoadBalancerId)
        : "";
    return message;
  },

  toJSON(message: StartNetworkLoadBalancerMetadata): unknown {
    const obj: any = {};
    message.networkLoadBalancerId !== undefined &&
      (obj.networkLoadBalancerId = message.networkLoadBalancerId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<StartNetworkLoadBalancerMetadata>, I>
  >(object: I): StartNetworkLoadBalancerMetadata {
    const message = {
      ...baseStartNetworkLoadBalancerMetadata,
    } as StartNetworkLoadBalancerMetadata;
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  StartNetworkLoadBalancerMetadata.$type,
  StartNetworkLoadBalancerMetadata
);

const baseStopNetworkLoadBalancerRequest: object = {
  $type: "yandex.cloud.loadbalancer.v1.StopNetworkLoadBalancerRequest",
  networkLoadBalancerId: "",
};

export const StopNetworkLoadBalancerRequest = {
  $type: "yandex.cloud.loadbalancer.v1.StopNetworkLoadBalancerRequest" as const,

  encode(
    message: StopNetworkLoadBalancerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StopNetworkLoadBalancerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseStopNetworkLoadBalancerRequest,
    } as StopNetworkLoadBalancerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkLoadBalancerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StopNetworkLoadBalancerRequest {
    const message = {
      ...baseStopNetworkLoadBalancerRequest,
    } as StopNetworkLoadBalancerRequest;
    message.networkLoadBalancerId =
      object.networkLoadBalancerId !== undefined &&
      object.networkLoadBalancerId !== null
        ? String(object.networkLoadBalancerId)
        : "";
    return message;
  },

  toJSON(message: StopNetworkLoadBalancerRequest): unknown {
    const obj: any = {};
    message.networkLoadBalancerId !== undefined &&
      (obj.networkLoadBalancerId = message.networkLoadBalancerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StopNetworkLoadBalancerRequest>, I>>(
    object: I
  ): StopNetworkLoadBalancerRequest {
    const message = {
      ...baseStopNetworkLoadBalancerRequest,
    } as StopNetworkLoadBalancerRequest;
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  StopNetworkLoadBalancerRequest.$type,
  StopNetworkLoadBalancerRequest
);

const baseStopNetworkLoadBalancerMetadata: object = {
  $type: "yandex.cloud.loadbalancer.v1.StopNetworkLoadBalancerMetadata",
  networkLoadBalancerId: "",
};

export const StopNetworkLoadBalancerMetadata = {
  $type:
    "yandex.cloud.loadbalancer.v1.StopNetworkLoadBalancerMetadata" as const,

  encode(
    message: StopNetworkLoadBalancerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StopNetworkLoadBalancerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseStopNetworkLoadBalancerMetadata,
    } as StopNetworkLoadBalancerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkLoadBalancerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StopNetworkLoadBalancerMetadata {
    const message = {
      ...baseStopNetworkLoadBalancerMetadata,
    } as StopNetworkLoadBalancerMetadata;
    message.networkLoadBalancerId =
      object.networkLoadBalancerId !== undefined &&
      object.networkLoadBalancerId !== null
        ? String(object.networkLoadBalancerId)
        : "";
    return message;
  },

  toJSON(message: StopNetworkLoadBalancerMetadata): unknown {
    const obj: any = {};
    message.networkLoadBalancerId !== undefined &&
      (obj.networkLoadBalancerId = message.networkLoadBalancerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StopNetworkLoadBalancerMetadata>, I>>(
    object: I
  ): StopNetworkLoadBalancerMetadata {
    const message = {
      ...baseStopNetworkLoadBalancerMetadata,
    } as StopNetworkLoadBalancerMetadata;
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  StopNetworkLoadBalancerMetadata.$type,
  StopNetworkLoadBalancerMetadata
);

const baseAttachNetworkLoadBalancerTargetGroupRequest: object = {
  $type:
    "yandex.cloud.loadbalancer.v1.AttachNetworkLoadBalancerTargetGroupRequest",
  networkLoadBalancerId: "",
};

export const AttachNetworkLoadBalancerTargetGroupRequest = {
  $type:
    "yandex.cloud.loadbalancer.v1.AttachNetworkLoadBalancerTargetGroupRequest" as const,

  encode(
    message: AttachNetworkLoadBalancerTargetGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    if (message.attachedTargetGroup !== undefined) {
      AttachedTargetGroup.encode(
        message.attachedTargetGroup,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AttachNetworkLoadBalancerTargetGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAttachNetworkLoadBalancerTargetGroupRequest,
    } as AttachNetworkLoadBalancerTargetGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkLoadBalancerId = reader.string();
          break;
        case 2:
          message.attachedTargetGroup = AttachedTargetGroup.decode(
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

  fromJSON(object: any): AttachNetworkLoadBalancerTargetGroupRequest {
    const message = {
      ...baseAttachNetworkLoadBalancerTargetGroupRequest,
    } as AttachNetworkLoadBalancerTargetGroupRequest;
    message.networkLoadBalancerId =
      object.networkLoadBalancerId !== undefined &&
      object.networkLoadBalancerId !== null
        ? String(object.networkLoadBalancerId)
        : "";
    message.attachedTargetGroup =
      object.attachedTargetGroup !== undefined &&
      object.attachedTargetGroup !== null
        ? AttachedTargetGroup.fromJSON(object.attachedTargetGroup)
        : undefined;
    return message;
  },

  toJSON(message: AttachNetworkLoadBalancerTargetGroupRequest): unknown {
    const obj: any = {};
    message.networkLoadBalancerId !== undefined &&
      (obj.networkLoadBalancerId = message.networkLoadBalancerId);
    message.attachedTargetGroup !== undefined &&
      (obj.attachedTargetGroup = message.attachedTargetGroup
        ? AttachedTargetGroup.toJSON(message.attachedTargetGroup)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AttachNetworkLoadBalancerTargetGroupRequest>, I>
  >(object: I): AttachNetworkLoadBalancerTargetGroupRequest {
    const message = {
      ...baseAttachNetworkLoadBalancerTargetGroupRequest,
    } as AttachNetworkLoadBalancerTargetGroupRequest;
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    message.attachedTargetGroup =
      object.attachedTargetGroup !== undefined &&
      object.attachedTargetGroup !== null
        ? AttachedTargetGroup.fromPartial(object.attachedTargetGroup)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  AttachNetworkLoadBalancerTargetGroupRequest.$type,
  AttachNetworkLoadBalancerTargetGroupRequest
);

const baseAttachNetworkLoadBalancerTargetGroupMetadata: object = {
  $type:
    "yandex.cloud.loadbalancer.v1.AttachNetworkLoadBalancerTargetGroupMetadata",
  networkLoadBalancerId: "",
  targetGroupId: "",
};

export const AttachNetworkLoadBalancerTargetGroupMetadata = {
  $type:
    "yandex.cloud.loadbalancer.v1.AttachNetworkLoadBalancerTargetGroupMetadata" as const,

  encode(
    message: AttachNetworkLoadBalancerTargetGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    if (message.targetGroupId !== "") {
      writer.uint32(18).string(message.targetGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AttachNetworkLoadBalancerTargetGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAttachNetworkLoadBalancerTargetGroupMetadata,
    } as AttachNetworkLoadBalancerTargetGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkLoadBalancerId = reader.string();
          break;
        case 2:
          message.targetGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AttachNetworkLoadBalancerTargetGroupMetadata {
    const message = {
      ...baseAttachNetworkLoadBalancerTargetGroupMetadata,
    } as AttachNetworkLoadBalancerTargetGroupMetadata;
    message.networkLoadBalancerId =
      object.networkLoadBalancerId !== undefined &&
      object.networkLoadBalancerId !== null
        ? String(object.networkLoadBalancerId)
        : "";
    message.targetGroupId =
      object.targetGroupId !== undefined && object.targetGroupId !== null
        ? String(object.targetGroupId)
        : "";
    return message;
  },

  toJSON(message: AttachNetworkLoadBalancerTargetGroupMetadata): unknown {
    const obj: any = {};
    message.networkLoadBalancerId !== undefined &&
      (obj.networkLoadBalancerId = message.networkLoadBalancerId);
    message.targetGroupId !== undefined &&
      (obj.targetGroupId = message.targetGroupId);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<AttachNetworkLoadBalancerTargetGroupMetadata>,
      I
    >
  >(object: I): AttachNetworkLoadBalancerTargetGroupMetadata {
    const message = {
      ...baseAttachNetworkLoadBalancerTargetGroupMetadata,
    } as AttachNetworkLoadBalancerTargetGroupMetadata;
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    message.targetGroupId = object.targetGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  AttachNetworkLoadBalancerTargetGroupMetadata.$type,
  AttachNetworkLoadBalancerTargetGroupMetadata
);

const baseDetachNetworkLoadBalancerTargetGroupRequest: object = {
  $type:
    "yandex.cloud.loadbalancer.v1.DetachNetworkLoadBalancerTargetGroupRequest",
  networkLoadBalancerId: "",
  targetGroupId: "",
};

export const DetachNetworkLoadBalancerTargetGroupRequest = {
  $type:
    "yandex.cloud.loadbalancer.v1.DetachNetworkLoadBalancerTargetGroupRequest" as const,

  encode(
    message: DetachNetworkLoadBalancerTargetGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    if (message.targetGroupId !== "") {
      writer.uint32(18).string(message.targetGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DetachNetworkLoadBalancerTargetGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDetachNetworkLoadBalancerTargetGroupRequest,
    } as DetachNetworkLoadBalancerTargetGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkLoadBalancerId = reader.string();
          break;
        case 2:
          message.targetGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DetachNetworkLoadBalancerTargetGroupRequest {
    const message = {
      ...baseDetachNetworkLoadBalancerTargetGroupRequest,
    } as DetachNetworkLoadBalancerTargetGroupRequest;
    message.networkLoadBalancerId =
      object.networkLoadBalancerId !== undefined &&
      object.networkLoadBalancerId !== null
        ? String(object.networkLoadBalancerId)
        : "";
    message.targetGroupId =
      object.targetGroupId !== undefined && object.targetGroupId !== null
        ? String(object.targetGroupId)
        : "";
    return message;
  },

  toJSON(message: DetachNetworkLoadBalancerTargetGroupRequest): unknown {
    const obj: any = {};
    message.networkLoadBalancerId !== undefined &&
      (obj.networkLoadBalancerId = message.networkLoadBalancerId);
    message.targetGroupId !== undefined &&
      (obj.targetGroupId = message.targetGroupId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<DetachNetworkLoadBalancerTargetGroupRequest>, I>
  >(object: I): DetachNetworkLoadBalancerTargetGroupRequest {
    const message = {
      ...baseDetachNetworkLoadBalancerTargetGroupRequest,
    } as DetachNetworkLoadBalancerTargetGroupRequest;
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    message.targetGroupId = object.targetGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DetachNetworkLoadBalancerTargetGroupRequest.$type,
  DetachNetworkLoadBalancerTargetGroupRequest
);

const baseDetachNetworkLoadBalancerTargetGroupMetadata: object = {
  $type:
    "yandex.cloud.loadbalancer.v1.DetachNetworkLoadBalancerTargetGroupMetadata",
  networkLoadBalancerId: "",
  targetGroupId: "",
};

export const DetachNetworkLoadBalancerTargetGroupMetadata = {
  $type:
    "yandex.cloud.loadbalancer.v1.DetachNetworkLoadBalancerTargetGroupMetadata" as const,

  encode(
    message: DetachNetworkLoadBalancerTargetGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    if (message.targetGroupId !== "") {
      writer.uint32(18).string(message.targetGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DetachNetworkLoadBalancerTargetGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDetachNetworkLoadBalancerTargetGroupMetadata,
    } as DetachNetworkLoadBalancerTargetGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkLoadBalancerId = reader.string();
          break;
        case 2:
          message.targetGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DetachNetworkLoadBalancerTargetGroupMetadata {
    const message = {
      ...baseDetachNetworkLoadBalancerTargetGroupMetadata,
    } as DetachNetworkLoadBalancerTargetGroupMetadata;
    message.networkLoadBalancerId =
      object.networkLoadBalancerId !== undefined &&
      object.networkLoadBalancerId !== null
        ? String(object.networkLoadBalancerId)
        : "";
    message.targetGroupId =
      object.targetGroupId !== undefined && object.targetGroupId !== null
        ? String(object.targetGroupId)
        : "";
    return message;
  },

  toJSON(message: DetachNetworkLoadBalancerTargetGroupMetadata): unknown {
    const obj: any = {};
    message.networkLoadBalancerId !== undefined &&
      (obj.networkLoadBalancerId = message.networkLoadBalancerId);
    message.targetGroupId !== undefined &&
      (obj.targetGroupId = message.targetGroupId);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<DetachNetworkLoadBalancerTargetGroupMetadata>,
      I
    >
  >(object: I): DetachNetworkLoadBalancerTargetGroupMetadata {
    const message = {
      ...baseDetachNetworkLoadBalancerTargetGroupMetadata,
    } as DetachNetworkLoadBalancerTargetGroupMetadata;
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    message.targetGroupId = object.targetGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DetachNetworkLoadBalancerTargetGroupMetadata.$type,
  DetachNetworkLoadBalancerTargetGroupMetadata
);

const baseAddNetworkLoadBalancerListenerRequest: object = {
  $type: "yandex.cloud.loadbalancer.v1.AddNetworkLoadBalancerListenerRequest",
  networkLoadBalancerId: "",
};

export const AddNetworkLoadBalancerListenerRequest = {
  $type:
    "yandex.cloud.loadbalancer.v1.AddNetworkLoadBalancerListenerRequest" as const,

  encode(
    message: AddNetworkLoadBalancerListenerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    if (message.listenerSpec !== undefined) {
      ListenerSpec.encode(
        message.listenerSpec,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddNetworkLoadBalancerListenerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddNetworkLoadBalancerListenerRequest,
    } as AddNetworkLoadBalancerListenerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkLoadBalancerId = reader.string();
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

  fromJSON(object: any): AddNetworkLoadBalancerListenerRequest {
    const message = {
      ...baseAddNetworkLoadBalancerListenerRequest,
    } as AddNetworkLoadBalancerListenerRequest;
    message.networkLoadBalancerId =
      object.networkLoadBalancerId !== undefined &&
      object.networkLoadBalancerId !== null
        ? String(object.networkLoadBalancerId)
        : "";
    message.listenerSpec =
      object.listenerSpec !== undefined && object.listenerSpec !== null
        ? ListenerSpec.fromJSON(object.listenerSpec)
        : undefined;
    return message;
  },

  toJSON(message: AddNetworkLoadBalancerListenerRequest): unknown {
    const obj: any = {};
    message.networkLoadBalancerId !== undefined &&
      (obj.networkLoadBalancerId = message.networkLoadBalancerId);
    message.listenerSpec !== undefined &&
      (obj.listenerSpec = message.listenerSpec
        ? ListenerSpec.toJSON(message.listenerSpec)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AddNetworkLoadBalancerListenerRequest>, I>
  >(object: I): AddNetworkLoadBalancerListenerRequest {
    const message = {
      ...baseAddNetworkLoadBalancerListenerRequest,
    } as AddNetworkLoadBalancerListenerRequest;
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    message.listenerSpec =
      object.listenerSpec !== undefined && object.listenerSpec !== null
        ? ListenerSpec.fromPartial(object.listenerSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  AddNetworkLoadBalancerListenerRequest.$type,
  AddNetworkLoadBalancerListenerRequest
);

const baseAddNetworkLoadBalancerListenerMetadata: object = {
  $type: "yandex.cloud.loadbalancer.v1.AddNetworkLoadBalancerListenerMetadata",
  networkLoadBalancerId: "",
};

export const AddNetworkLoadBalancerListenerMetadata = {
  $type:
    "yandex.cloud.loadbalancer.v1.AddNetworkLoadBalancerListenerMetadata" as const,

  encode(
    message: AddNetworkLoadBalancerListenerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddNetworkLoadBalancerListenerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddNetworkLoadBalancerListenerMetadata,
    } as AddNetworkLoadBalancerListenerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkLoadBalancerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddNetworkLoadBalancerListenerMetadata {
    const message = {
      ...baseAddNetworkLoadBalancerListenerMetadata,
    } as AddNetworkLoadBalancerListenerMetadata;
    message.networkLoadBalancerId =
      object.networkLoadBalancerId !== undefined &&
      object.networkLoadBalancerId !== null
        ? String(object.networkLoadBalancerId)
        : "";
    return message;
  },

  toJSON(message: AddNetworkLoadBalancerListenerMetadata): unknown {
    const obj: any = {};
    message.networkLoadBalancerId !== undefined &&
      (obj.networkLoadBalancerId = message.networkLoadBalancerId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AddNetworkLoadBalancerListenerMetadata>, I>
  >(object: I): AddNetworkLoadBalancerListenerMetadata {
    const message = {
      ...baseAddNetworkLoadBalancerListenerMetadata,
    } as AddNetworkLoadBalancerListenerMetadata;
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  AddNetworkLoadBalancerListenerMetadata.$type,
  AddNetworkLoadBalancerListenerMetadata
);

const baseRemoveNetworkLoadBalancerListenerRequest: object = {
  $type:
    "yandex.cloud.loadbalancer.v1.RemoveNetworkLoadBalancerListenerRequest",
  networkLoadBalancerId: "",
  listenerName: "",
};

export const RemoveNetworkLoadBalancerListenerRequest = {
  $type:
    "yandex.cloud.loadbalancer.v1.RemoveNetworkLoadBalancerListenerRequest" as const,

  encode(
    message: RemoveNetworkLoadBalancerListenerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    if (message.listenerName !== "") {
      writer.uint32(18).string(message.listenerName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveNetworkLoadBalancerListenerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRemoveNetworkLoadBalancerListenerRequest,
    } as RemoveNetworkLoadBalancerListenerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkLoadBalancerId = reader.string();
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

  fromJSON(object: any): RemoveNetworkLoadBalancerListenerRequest {
    const message = {
      ...baseRemoveNetworkLoadBalancerListenerRequest,
    } as RemoveNetworkLoadBalancerListenerRequest;
    message.networkLoadBalancerId =
      object.networkLoadBalancerId !== undefined &&
      object.networkLoadBalancerId !== null
        ? String(object.networkLoadBalancerId)
        : "";
    message.listenerName =
      object.listenerName !== undefined && object.listenerName !== null
        ? String(object.listenerName)
        : "";
    return message;
  },

  toJSON(message: RemoveNetworkLoadBalancerListenerRequest): unknown {
    const obj: any = {};
    message.networkLoadBalancerId !== undefined &&
      (obj.networkLoadBalancerId = message.networkLoadBalancerId);
    message.listenerName !== undefined &&
      (obj.listenerName = message.listenerName);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<RemoveNetworkLoadBalancerListenerRequest>, I>
  >(object: I): RemoveNetworkLoadBalancerListenerRequest {
    const message = {
      ...baseRemoveNetworkLoadBalancerListenerRequest,
    } as RemoveNetworkLoadBalancerListenerRequest;
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    message.listenerName = object.listenerName ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  RemoveNetworkLoadBalancerListenerRequest.$type,
  RemoveNetworkLoadBalancerListenerRequest
);

const baseRemoveNetworkLoadBalancerListenerMetadata: object = {
  $type:
    "yandex.cloud.loadbalancer.v1.RemoveNetworkLoadBalancerListenerMetadata",
  networkLoadBalancerId: "",
};

export const RemoveNetworkLoadBalancerListenerMetadata = {
  $type:
    "yandex.cloud.loadbalancer.v1.RemoveNetworkLoadBalancerListenerMetadata" as const,

  encode(
    message: RemoveNetworkLoadBalancerListenerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveNetworkLoadBalancerListenerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRemoveNetworkLoadBalancerListenerMetadata,
    } as RemoveNetworkLoadBalancerListenerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkLoadBalancerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveNetworkLoadBalancerListenerMetadata {
    const message = {
      ...baseRemoveNetworkLoadBalancerListenerMetadata,
    } as RemoveNetworkLoadBalancerListenerMetadata;
    message.networkLoadBalancerId =
      object.networkLoadBalancerId !== undefined &&
      object.networkLoadBalancerId !== null
        ? String(object.networkLoadBalancerId)
        : "";
    return message;
  },

  toJSON(message: RemoveNetworkLoadBalancerListenerMetadata): unknown {
    const obj: any = {};
    message.networkLoadBalancerId !== undefined &&
      (obj.networkLoadBalancerId = message.networkLoadBalancerId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<RemoveNetworkLoadBalancerListenerMetadata>, I>
  >(object: I): RemoveNetworkLoadBalancerListenerMetadata {
    const message = {
      ...baseRemoveNetworkLoadBalancerListenerMetadata,
    } as RemoveNetworkLoadBalancerListenerMetadata;
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  RemoveNetworkLoadBalancerListenerMetadata.$type,
  RemoveNetworkLoadBalancerListenerMetadata
);

const baseListNetworkLoadBalancerOperationsRequest: object = {
  $type:
    "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancerOperationsRequest",
  networkLoadBalancerId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListNetworkLoadBalancerOperationsRequest = {
  $type:
    "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancerOperationsRequest" as const,

  encode(
    message: ListNetworkLoadBalancerOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
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
  ): ListNetworkLoadBalancerOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListNetworkLoadBalancerOperationsRequest,
    } as ListNetworkLoadBalancerOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkLoadBalancerId = reader.string();
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

  fromJSON(object: any): ListNetworkLoadBalancerOperationsRequest {
    const message = {
      ...baseListNetworkLoadBalancerOperationsRequest,
    } as ListNetworkLoadBalancerOperationsRequest;
    message.networkLoadBalancerId =
      object.networkLoadBalancerId !== undefined &&
      object.networkLoadBalancerId !== null
        ? String(object.networkLoadBalancerId)
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

  toJSON(message: ListNetworkLoadBalancerOperationsRequest): unknown {
    const obj: any = {};
    message.networkLoadBalancerId !== undefined &&
      (obj.networkLoadBalancerId = message.networkLoadBalancerId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListNetworkLoadBalancerOperationsRequest>, I>
  >(object: I): ListNetworkLoadBalancerOperationsRequest {
    const message = {
      ...baseListNetworkLoadBalancerOperationsRequest,
    } as ListNetworkLoadBalancerOperationsRequest;
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListNetworkLoadBalancerOperationsRequest.$type,
  ListNetworkLoadBalancerOperationsRequest
);

const baseListNetworkLoadBalancerOperationsResponse: object = {
  $type:
    "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancerOperationsResponse",
  nextPageToken: "",
};

export const ListNetworkLoadBalancerOperationsResponse = {
  $type:
    "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancerOperationsResponse" as const,

  encode(
    message: ListNetworkLoadBalancerOperationsResponse,
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
  ): ListNetworkLoadBalancerOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListNetworkLoadBalancerOperationsResponse,
    } as ListNetworkLoadBalancerOperationsResponse;
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

  fromJSON(object: any): ListNetworkLoadBalancerOperationsResponse {
    const message = {
      ...baseListNetworkLoadBalancerOperationsResponse,
    } as ListNetworkLoadBalancerOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListNetworkLoadBalancerOperationsResponse): unknown {
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
    I extends Exact<DeepPartial<ListNetworkLoadBalancerOperationsResponse>, I>
  >(object: I): ListNetworkLoadBalancerOperationsResponse {
    const message = {
      ...baseListNetworkLoadBalancerOperationsResponse,
    } as ListNetworkLoadBalancerOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListNetworkLoadBalancerOperationsResponse.$type,
  ListNetworkLoadBalancerOperationsResponse
);

const baseGetTargetStatesRequest: object = {
  $type: "yandex.cloud.loadbalancer.v1.GetTargetStatesRequest",
  networkLoadBalancerId: "",
  targetGroupId: "",
};

export const GetTargetStatesRequest = {
  $type: "yandex.cloud.loadbalancer.v1.GetTargetStatesRequest" as const,

  encode(
    message: GetTargetStatesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkLoadBalancerId !== "") {
      writer.uint32(10).string(message.networkLoadBalancerId);
    }
    if (message.targetGroupId !== "") {
      writer.uint32(18).string(message.targetGroupId);
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
          message.networkLoadBalancerId = reader.string();
          break;
        case 2:
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
    message.networkLoadBalancerId =
      object.networkLoadBalancerId !== undefined &&
      object.networkLoadBalancerId !== null
        ? String(object.networkLoadBalancerId)
        : "";
    message.targetGroupId =
      object.targetGroupId !== undefined && object.targetGroupId !== null
        ? String(object.targetGroupId)
        : "";
    return message;
  },

  toJSON(message: GetTargetStatesRequest): unknown {
    const obj: any = {};
    message.networkLoadBalancerId !== undefined &&
      (obj.networkLoadBalancerId = message.networkLoadBalancerId);
    message.targetGroupId !== undefined &&
      (obj.targetGroupId = message.targetGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetTargetStatesRequest>, I>>(
    object: I
  ): GetTargetStatesRequest {
    const message = { ...baseGetTargetStatesRequest } as GetTargetStatesRequest;
    message.networkLoadBalancerId = object.networkLoadBalancerId ?? "";
    message.targetGroupId = object.targetGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetTargetStatesRequest.$type, GetTargetStatesRequest);

const baseGetTargetStatesResponse: object = {
  $type: "yandex.cloud.loadbalancer.v1.GetTargetStatesResponse",
};

export const GetTargetStatesResponse = {
  $type: "yandex.cloud.loadbalancer.v1.GetTargetStatesResponse" as const,

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

const baseExternalAddressSpec: object = {
  $type: "yandex.cloud.loadbalancer.v1.ExternalAddressSpec",
  address: "",
  ipVersion: 0,
};

export const ExternalAddressSpec = {
  $type: "yandex.cloud.loadbalancer.v1.ExternalAddressSpec" as const,

  encode(
    message: ExternalAddressSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.ipVersion !== 0) {
      writer.uint32(16).int32(message.ipVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalAddressSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExternalAddressSpec } as ExternalAddressSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.ipVersion = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExternalAddressSpec {
    const message = { ...baseExternalAddressSpec } as ExternalAddressSpec;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.ipVersion =
      object.ipVersion !== undefined && object.ipVersion !== null
        ? ipVersionFromJSON(object.ipVersion)
        : 0;
    return message;
  },

  toJSON(message: ExternalAddressSpec): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.ipVersion !== undefined &&
      (obj.ipVersion = ipVersionToJSON(message.ipVersion));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExternalAddressSpec>, I>>(
    object: I
  ): ExternalAddressSpec {
    const message = { ...baseExternalAddressSpec } as ExternalAddressSpec;
    message.address = object.address ?? "";
    message.ipVersion = object.ipVersion ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ExternalAddressSpec.$type, ExternalAddressSpec);

const baseInternalAddressSpec: object = {
  $type: "yandex.cloud.loadbalancer.v1.InternalAddressSpec",
  address: "",
  subnetId: "",
  ipVersion: 0,
};

export const InternalAddressSpec = {
  $type: "yandex.cloud.loadbalancer.v1.InternalAddressSpec" as const,

  encode(
    message: InternalAddressSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.subnetId !== "") {
      writer.uint32(18).string(message.subnetId);
    }
    if (message.ipVersion !== 0) {
      writer.uint32(24).int32(message.ipVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InternalAddressSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInternalAddressSpec } as InternalAddressSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.subnetId = reader.string();
          break;
        case 3:
          message.ipVersion = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InternalAddressSpec {
    const message = { ...baseInternalAddressSpec } as InternalAddressSpec;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
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

  toJSON(message: InternalAddressSpec): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    message.ipVersion !== undefined &&
      (obj.ipVersion = ipVersionToJSON(message.ipVersion));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InternalAddressSpec>, I>>(
    object: I
  ): InternalAddressSpec {
    const message = { ...baseInternalAddressSpec } as InternalAddressSpec;
    message.address = object.address ?? "";
    message.subnetId = object.subnetId ?? "";
    message.ipVersion = object.ipVersion ?? 0;
    return message;
  },
};

messageTypeRegistry.set(InternalAddressSpec.$type, InternalAddressSpec);

const baseListenerSpec: object = {
  $type: "yandex.cloud.loadbalancer.v1.ListenerSpec",
  name: "",
  port: 0,
  protocol: 0,
  targetPort: 0,
};

export const ListenerSpec = {
  $type: "yandex.cloud.loadbalancer.v1.ListenerSpec" as const,

  encode(
    message: ListenerSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.port !== 0) {
      writer.uint32(16).int64(message.port);
    }
    if (message.protocol !== 0) {
      writer.uint32(24).int32(message.protocol);
    }
    if (message.externalAddressSpec !== undefined) {
      ExternalAddressSpec.encode(
        message.externalAddressSpec,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.internalAddressSpec !== undefined) {
      InternalAddressSpec.encode(
        message.internalAddressSpec,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.targetPort !== 0) {
      writer.uint32(40).int64(message.targetPort);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListenerSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListenerSpec } as ListenerSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.port = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.protocol = reader.int32() as any;
          break;
        case 4:
          message.externalAddressSpec = ExternalAddressSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.internalAddressSpec = InternalAddressSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.targetPort = longToNumber(reader.int64() as Long);
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
    message.port =
      object.port !== undefined && object.port !== null
        ? Number(object.port)
        : 0;
    message.protocol =
      object.protocol !== undefined && object.protocol !== null
        ? listener_ProtocolFromJSON(object.protocol)
        : 0;
    message.externalAddressSpec =
      object.externalAddressSpec !== undefined &&
      object.externalAddressSpec !== null
        ? ExternalAddressSpec.fromJSON(object.externalAddressSpec)
        : undefined;
    message.internalAddressSpec =
      object.internalAddressSpec !== undefined &&
      object.internalAddressSpec !== null
        ? InternalAddressSpec.fromJSON(object.internalAddressSpec)
        : undefined;
    message.targetPort =
      object.targetPort !== undefined && object.targetPort !== null
        ? Number(object.targetPort)
        : 0;
    return message;
  },

  toJSON(message: ListenerSpec): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.protocol !== undefined &&
      (obj.protocol = listener_ProtocolToJSON(message.protocol));
    message.externalAddressSpec !== undefined &&
      (obj.externalAddressSpec = message.externalAddressSpec
        ? ExternalAddressSpec.toJSON(message.externalAddressSpec)
        : undefined);
    message.internalAddressSpec !== undefined &&
      (obj.internalAddressSpec = message.internalAddressSpec
        ? InternalAddressSpec.toJSON(message.internalAddressSpec)
        : undefined);
    message.targetPort !== undefined &&
      (obj.targetPort = Math.round(message.targetPort));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListenerSpec>, I>>(
    object: I
  ): ListenerSpec {
    const message = { ...baseListenerSpec } as ListenerSpec;
    message.name = object.name ?? "";
    message.port = object.port ?? 0;
    message.protocol = object.protocol ?? 0;
    message.externalAddressSpec =
      object.externalAddressSpec !== undefined &&
      object.externalAddressSpec !== null
        ? ExternalAddressSpec.fromPartial(object.externalAddressSpec)
        : undefined;
    message.internalAddressSpec =
      object.internalAddressSpec !== undefined &&
      object.internalAddressSpec !== null
        ? InternalAddressSpec.fromPartial(object.internalAddressSpec)
        : undefined;
    message.targetPort = object.targetPort ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ListenerSpec.$type, ListenerSpec);

/** A set of methods for managing NetworkLoadBalancer resources. */
export const NetworkLoadBalancerServiceService = {
  /**
   * Returns the specified NetworkLoadBalancer resource.
   *
   * Get the list of available NetworkLoadBalancer resources by making a [List] request.
   */
  get: {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetNetworkLoadBalancerRequest) =>
      Buffer.from(GetNetworkLoadBalancerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetNetworkLoadBalancerRequest.decode(value),
    responseSerialize: (value: NetworkLoadBalancer) =>
      Buffer.from(NetworkLoadBalancer.encode(value).finish()),
    responseDeserialize: (value: Buffer) => NetworkLoadBalancer.decode(value),
  },
  /** Retrieves the list of NetworkLoadBalancer resources in the specified folder. */
  list: {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListNetworkLoadBalancersRequest) =>
      Buffer.from(ListNetworkLoadBalancersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListNetworkLoadBalancersRequest.decode(value),
    responseSerialize: (value: ListNetworkLoadBalancersResponse) =>
      Buffer.from(ListNetworkLoadBalancersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListNetworkLoadBalancersResponse.decode(value),
  },
  /** Creates a network load balancer in the specified folder using the data specified in the request. */
  create: {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateNetworkLoadBalancerRequest) =>
      Buffer.from(CreateNetworkLoadBalancerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateNetworkLoadBalancerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified network load balancer. */
  update: {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateNetworkLoadBalancerRequest) =>
      Buffer.from(UpdateNetworkLoadBalancerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateNetworkLoadBalancerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified network load balancer. */
  delete: {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteNetworkLoadBalancerRequest) =>
      Buffer.from(DeleteNetworkLoadBalancerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteNetworkLoadBalancerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Starts load balancing and health checking with the specified network load balancer with specified settings.
   * Changes network load balancer status to `` ACTIVE ``.
   */
  start: {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Start",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartNetworkLoadBalancerRequest) =>
      Buffer.from(StartNetworkLoadBalancerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      StartNetworkLoadBalancerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Stops load balancing and health checking with the specified network load balancer.
   * Changes load balancer status to `` STOPPED ``.
   */
  stop: {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Stop",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StopNetworkLoadBalancerRequest) =>
      Buffer.from(StopNetworkLoadBalancerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      StopNetworkLoadBalancerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Attaches a target group to the specified network load balancer. */
  attachTargetGroup: {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/AttachTargetGroup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AttachNetworkLoadBalancerTargetGroupRequest) =>
      Buffer.from(
        AttachNetworkLoadBalancerTargetGroupRequest.encode(value).finish()
      ),
    requestDeserialize: (value: Buffer) =>
      AttachNetworkLoadBalancerTargetGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Detaches the target group from the specified network load balancer. */
  detachTargetGroup: {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/DetachTargetGroup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DetachNetworkLoadBalancerTargetGroupRequest) =>
      Buffer.from(
        DetachNetworkLoadBalancerTargetGroupRequest.encode(value).finish()
      ),
    requestDeserialize: (value: Buffer) =>
      DetachNetworkLoadBalancerTargetGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Gets states of target resources in the attached target group. */
  getTargetStates: {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/GetTargetStates",
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
  /** Adds a listener to the specified network load balancer. */
  addListener: {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/AddListener",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddNetworkLoadBalancerListenerRequest) =>
      Buffer.from(AddNetworkLoadBalancerListenerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      AddNetworkLoadBalancerListenerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Removes the listener from the specified network load balancer. */
  removeListener: {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/RemoveListener",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveNetworkLoadBalancerListenerRequest) =>
      Buffer.from(
        RemoveNetworkLoadBalancerListenerRequest.encode(value).finish()
      ),
    requestDeserialize: (value: Buffer) =>
      RemoveNetworkLoadBalancerListenerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified network load balancer. */
  listOperations: {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListNetworkLoadBalancerOperationsRequest) =>
      Buffer.from(
        ListNetworkLoadBalancerOperationsRequest.encode(value).finish()
      ),
    requestDeserialize: (value: Buffer) =>
      ListNetworkLoadBalancerOperationsRequest.decode(value),
    responseSerialize: (value: ListNetworkLoadBalancerOperationsResponse) =>
      Buffer.from(
        ListNetworkLoadBalancerOperationsResponse.encode(value).finish()
      ),
    responseDeserialize: (value: Buffer) =>
      ListNetworkLoadBalancerOperationsResponse.decode(value),
  },
} as const;

export interface NetworkLoadBalancerServiceServer
  extends UntypedServiceImplementation {
  /**
   * Returns the specified NetworkLoadBalancer resource.
   *
   * Get the list of available NetworkLoadBalancer resources by making a [List] request.
   */
  get: handleUnaryCall<GetNetworkLoadBalancerRequest, NetworkLoadBalancer>;
  /** Retrieves the list of NetworkLoadBalancer resources in the specified folder. */
  list: handleUnaryCall<
    ListNetworkLoadBalancersRequest,
    ListNetworkLoadBalancersResponse
  >;
  /** Creates a network load balancer in the specified folder using the data specified in the request. */
  create: handleUnaryCall<CreateNetworkLoadBalancerRequest, Operation>;
  /** Updates the specified network load balancer. */
  update: handleUnaryCall<UpdateNetworkLoadBalancerRequest, Operation>;
  /** Deletes the specified network load balancer. */
  delete: handleUnaryCall<DeleteNetworkLoadBalancerRequest, Operation>;
  /**
   * Starts load balancing and health checking with the specified network load balancer with specified settings.
   * Changes network load balancer status to `` ACTIVE ``.
   */
  start: handleUnaryCall<StartNetworkLoadBalancerRequest, Operation>;
  /**
   * Stops load balancing and health checking with the specified network load balancer.
   * Changes load balancer status to `` STOPPED ``.
   */
  stop: handleUnaryCall<StopNetworkLoadBalancerRequest, Operation>;
  /** Attaches a target group to the specified network load balancer. */
  attachTargetGroup: handleUnaryCall<
    AttachNetworkLoadBalancerTargetGroupRequest,
    Operation
  >;
  /** Detaches the target group from the specified network load balancer. */
  detachTargetGroup: handleUnaryCall<
    DetachNetworkLoadBalancerTargetGroupRequest,
    Operation
  >;
  /** Gets states of target resources in the attached target group. */
  getTargetStates: handleUnaryCall<
    GetTargetStatesRequest,
    GetTargetStatesResponse
  >;
  /** Adds a listener to the specified network load balancer. */
  addListener: handleUnaryCall<
    AddNetworkLoadBalancerListenerRequest,
    Operation
  >;
  /** Removes the listener from the specified network load balancer. */
  removeListener: handleUnaryCall<
    RemoveNetworkLoadBalancerListenerRequest,
    Operation
  >;
  /** Lists operations for the specified network load balancer. */
  listOperations: handleUnaryCall<
    ListNetworkLoadBalancerOperationsRequest,
    ListNetworkLoadBalancerOperationsResponse
  >;
}

export interface NetworkLoadBalancerServiceClient extends Client {
  /**
   * Returns the specified NetworkLoadBalancer resource.
   *
   * Get the list of available NetworkLoadBalancer resources by making a [List] request.
   */
  get(
    request: GetNetworkLoadBalancerRequest,
    callback: (
      error: ServiceError | null,
      response: NetworkLoadBalancer
    ) => void
  ): ClientUnaryCall;
  get(
    request: GetNetworkLoadBalancerRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: NetworkLoadBalancer
    ) => void
  ): ClientUnaryCall;
  get(
    request: GetNetworkLoadBalancerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: NetworkLoadBalancer
    ) => void
  ): ClientUnaryCall;
  /** Retrieves the list of NetworkLoadBalancer resources in the specified folder. */
  list(
    request: ListNetworkLoadBalancersRequest,
    callback: (
      error: ServiceError | null,
      response: ListNetworkLoadBalancersResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListNetworkLoadBalancersRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListNetworkLoadBalancersResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListNetworkLoadBalancersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListNetworkLoadBalancersResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a network load balancer in the specified folder using the data specified in the request. */
  create(
    request: CreateNetworkLoadBalancerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateNetworkLoadBalancerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateNetworkLoadBalancerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified network load balancer. */
  update(
    request: UpdateNetworkLoadBalancerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateNetworkLoadBalancerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateNetworkLoadBalancerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified network load balancer. */
  delete(
    request: DeleteNetworkLoadBalancerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteNetworkLoadBalancerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteNetworkLoadBalancerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Starts load balancing and health checking with the specified network load balancer with specified settings.
   * Changes network load balancer status to `` ACTIVE ``.
   */
  start(
    request: StartNetworkLoadBalancerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  start(
    request: StartNetworkLoadBalancerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  start(
    request: StartNetworkLoadBalancerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Stops load balancing and health checking with the specified network load balancer.
   * Changes load balancer status to `` STOPPED ``.
   */
  stop(
    request: StopNetworkLoadBalancerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  stop(
    request: StopNetworkLoadBalancerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  stop(
    request: StopNetworkLoadBalancerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Attaches a target group to the specified network load balancer. */
  attachTargetGroup(
    request: AttachNetworkLoadBalancerTargetGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  attachTargetGroup(
    request: AttachNetworkLoadBalancerTargetGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  attachTargetGroup(
    request: AttachNetworkLoadBalancerTargetGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Detaches the target group from the specified network load balancer. */
  detachTargetGroup(
    request: DetachNetworkLoadBalancerTargetGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  detachTargetGroup(
    request: DetachNetworkLoadBalancerTargetGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  detachTargetGroup(
    request: DetachNetworkLoadBalancerTargetGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Gets states of target resources in the attached target group. */
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
  /** Adds a listener to the specified network load balancer. */
  addListener(
    request: AddNetworkLoadBalancerListenerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addListener(
    request: AddNetworkLoadBalancerListenerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addListener(
    request: AddNetworkLoadBalancerListenerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Removes the listener from the specified network load balancer. */
  removeListener(
    request: RemoveNetworkLoadBalancerListenerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  removeListener(
    request: RemoveNetworkLoadBalancerListenerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  removeListener(
    request: RemoveNetworkLoadBalancerListenerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified network load balancer. */
  listOperations(
    request: ListNetworkLoadBalancerOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListNetworkLoadBalancerOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListNetworkLoadBalancerOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListNetworkLoadBalancerOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListNetworkLoadBalancerOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListNetworkLoadBalancerOperationsResponse
    ) => void
  ): ClientUnaryCall;
}

export const NetworkLoadBalancerServiceClient = makeGenericClientConstructor(
  NetworkLoadBalancerServiceService,
  "yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): NetworkLoadBalancerServiceClient;
  service: typeof NetworkLoadBalancerServiceService;
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
