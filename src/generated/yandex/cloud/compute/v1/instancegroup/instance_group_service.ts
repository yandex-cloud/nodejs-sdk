/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
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
  InstanceTemplate,
  ScalePolicy,
  DeployPolicy,
  AllocationPolicy,
  LoadBalancerSpec,
  HealthChecksSpec,
  ApplicationLoadBalancerSpec,
  Variable,
  InstanceGroup,
  ManagedInstance,
  LogRecord,
} from "../../../../../yandex/cloud/compute/v1/instancegroup/instance_group";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
import {
  ListAccessBindingsRequest,
  ListAccessBindingsResponse,
  SetAccessBindingsRequest,
  UpdateAccessBindingsRequest,
} from "../../../../../yandex/cloud/access/access";

export const protobufPackage = "yandex.cloud.compute.v1.instancegroup";

export enum InstanceGroupView {
  /** BASIC - Doesn't include the metadata of the instance template in the server response. */
  BASIC = 0,
  /** FULL - Returns the metadata of the instance template in the server response. */
  FULL = 1,
  UNRECOGNIZED = -1,
}

export function instanceGroupViewFromJSON(object: any): InstanceGroupView {
  switch (object) {
    case 0:
    case "BASIC":
      return InstanceGroupView.BASIC;
    case 1:
    case "FULL":
      return InstanceGroupView.FULL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InstanceGroupView.UNRECOGNIZED;
  }
}

export function instanceGroupViewToJSON(object: InstanceGroupView): string {
  switch (object) {
    case InstanceGroupView.BASIC:
      return "BASIC";
    case InstanceGroupView.FULL:
      return "FULL";
    default:
      return "UNKNOWN";
  }
}

export interface ResumeInstanceGroupProcessesRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.ResumeInstanceGroupProcessesRequest";
  /**
   * ID of the instance group to resume processes in.
   *
   * The instance group must have a `PAUSED` status ([InstanceGroup.status]).
   *
   * To get the instance group ID, make a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
}

export interface ResumeInstanceGroupProcessMetadata {
  $type: "yandex.cloud.compute.v1.instancegroup.ResumeInstanceGroupProcessMetadata";
  /** ID of the instance group that processes are being resumed in. */
  instanceGroupId: string;
}

export interface PauseInstanceGroupProcessesRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.PauseInstanceGroupProcessesRequest";
  /**
   * ID of the instance group to pause processes in.
   *
   * The instance group must have an `ACTIVE` status ([InstanceGroup.status]).
   *
   * To get the instance group ID, make a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
}

export interface PauseInstanceGroupProcessMetadata {
  $type: "yandex.cloud.compute.v1.instancegroup.PauseInstanceGroupProcessMetadata";
  /** ID of the instance group that processes are being paused in. */
  instanceGroupId: string;
}

export interface GetInstanceGroupRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.GetInstanceGroupRequest";
  /**
   * ID of the InstanceGroup resource to return.
   * To get the instance group ID, use a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
  /** Defines which information about the Instance template should be returned in the server response. */
  view: InstanceGroupView;
}

export interface CreateInstanceGroupRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest";
  /**
   * ID of the folder to create an instance group in.
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /** Name of the instance group. */
  name: string;
  /** Description of the instance group. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Instance template that the instance group belongs to. */
  instanceTemplate?: InstanceTemplate;
  /** [Scaling policy](/docs/compute/concepts/instance-groups/scale) of the instance group. */
  scalePolicy?: ScalePolicy;
  /** Deployment policy of the instance group. */
  deployPolicy?: DeployPolicy;
  /** Allocation policy of the instance group by zones and regions. */
  allocationPolicy?: AllocationPolicy;
  /**
   * Settings for balancing load between instances via [Network Load Balancer](/docs/network-load-balancer/concepts)
   * (OSI model layer 3).
   *
   * If specified, a Network Load Balancer target group containing all instances from the instance group will be created
   * and attributed to the instance group.
   */
  loadBalancerSpec?: LoadBalancerSpec;
  /** Health checking specification. For more information, see [Health check](/docs/network-load-balancer/concepts/health-check). */
  healthChecksSpec?: HealthChecksSpec;
  /**
   * ID of the service account. The service account will be used for all API calls
   * made by the Instance Groups component on behalf of the user (for example, creating instances, adding them to load balancer target group, etc.). For more information, see [Service accounts](/docs/iam/concepts/users/service-accounts).
   * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
   */
  serviceAccountId: string;
  variables: Variable[];
  /**
   * Flag prohibiting deletion of the instance group.
   *
   * Allowed values:</br>- `false`: The instance group can be deleted.</br>- `true`: The instance group cannot be deleted.
   *
   * The default is `false`.
   */
  deletionProtection: boolean;
  /**
   * Settings for balancing load between instances via [Application Load Balancer](/docs/application-load-balancer/concepts)
   * (OSI model layer 7).
   *
   * If specified, an Application Load Balancer target group containing all instances from the instance group will be created
   * and attributed to the instance group.
   */
  applicationLoadBalancerSpec?: ApplicationLoadBalancerSpec;
}

export interface CreateInstanceGroupRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateInstanceGroupFromYamlRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupFromYamlRequest";
  /**
   * ID of the folder to create an instance group in.
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /** [InstanceGroupService.Create] request in YAML format. */
  instanceGroupYaml: string;
}

export interface CreateInstanceGroupMetadata {
  $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupMetadata";
  /** ID of the instance group that is being created. */
  instanceGroupId: string;
}

export interface UpdateInstanceGroupRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest";
  /**
   * ID of the instance group to update.
   * To get the instance group ID, use a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
  /** Field mask that specifies which fields of the InstanceGroup resource are going to be updated. */
  updateMask?: FieldMask;
  /** Name of the instance group. */
  name: string;
  /** Description of the instance group. */
  description: string;
  /**
   * Resource labels as `key:value` pairs.
   *
   * The existing set of `labels` is completely replaced by the provided set.
   */
  labels: { [key: string]: string };
  /** Instance template that the instance group belongs to. */
  instanceTemplate?: InstanceTemplate;
  /** [Scaling policy](/docs/compute/concepts/instance-groups/scale) of the instance group. */
  scalePolicy?: ScalePolicy;
  /** Deployment policy of the instance group. */
  deployPolicy?: DeployPolicy;
  /** Allocation policy of the instance group by zones and regions. */
  allocationPolicy?: AllocationPolicy;
  /** Health checking specification. For more information, see [Health check](/docs/network-load-balancer/concepts/health-check). */
  healthChecksSpec?: HealthChecksSpec;
  /**
   * ID of the service account. The service account will be used for all API calls
   * made by the Instance Groups component on behalf of the user (for example, creating instances, adding them to load balancer target group, etc.). For more information, see [Service accounts](/docs/iam/concepts/users/service-accounts).
   * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
   */
  serviceAccountId: string;
  /**
   * Settings for balancing load between instances via [Network Load Balancer](/docs/network-load-balancer/concepts)
   * (OSI model layer 3).
   */
  loadBalancerSpec?: LoadBalancerSpec;
  variables: Variable[];
  /** Flag that inhibits deletion of the instance group */
  deletionProtection: boolean;
  /**
   * Settings for balancing load between instances via [Application Load Balancer](/docs/application-load-balancer/concepts)
   * (OSI model layer 7).
   */
  applicationLoadBalancerSpec?: ApplicationLoadBalancerSpec;
}

export interface UpdateInstanceGroupRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateInstanceGroupFromYamlRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupFromYamlRequest";
  /**
   * ID of the instance group to update.
   * To get the instance group ID, use a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
  /** [InstanceGroupService.Update] request in YAML format. */
  instanceGroupYaml: string;
}

export interface UpdateInstanceGroupMetadata {
  $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupMetadata";
  /**
   * ID of the InstanceGroup resource that is being updated.
   * To get the instance group ID, use a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
}

export interface StartInstanceGroupRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.StartInstanceGroupRequest";
  /**
   * ID of the instance group to start.
   * To get the instance group ID, use a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
}

export interface StartInstanceGroupMetadata {
  $type: "yandex.cloud.compute.v1.instancegroup.StartInstanceGroupMetadata";
  /** ID of the InstanceGroup resource that is being started. */
  instanceGroupId: string;
}

export interface StopInstanceGroupRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.StopInstanceGroupRequest";
  /**
   * ID of the instance group to stop.
   * To get the instance group ID, use a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
}

export interface StopInstanceGroupMetadata {
  $type: "yandex.cloud.compute.v1.instancegroup.StopInstanceGroupMetadata";
  /** ID of the InstanceGroup resource that is being stopped. */
  instanceGroupId: string;
}

export interface RollingRestartRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.RollingRestartRequest";
  /**
   * ID of the instance group to restart instances in.
   * To get the instance group ID, use a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
  /**
   * IDs of managed instances in the group to restart
   * To get instance IDs, use a [InstanceGroupService.ListInstances] request.
   */
  managedInstanceIds: string[];
}

export interface RollingRestartMetadata {
  $type: "yandex.cloud.compute.v1.instancegroup.RollingRestartMetadata";
  /** ID of the InstanceGroup resource that is being rolling restarted. */
  instanceGroupId: string;
}

export interface RollingRecreateRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.RollingRecreateRequest";
  /**
   * ID of the instance group to recreate instances in.
   * To get the instance group ID, use a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
  /**
   * IDs of managed instances in the group to recreate
   * To get instance IDs, use a [InstanceGroupService.ListInstances] request.
   */
  managedInstanceIds: string[];
}

export interface RollingRecreateMetadata {
  $type: "yandex.cloud.compute.v1.instancegroup.RollingRecreateMetadata";
  /** ID of the InstanceGroup resource that is being rolling recreated. */
  instanceGroupId: string;
}

export interface DeleteInstanceGroupRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstanceGroupRequest";
  /**
   * ID of the instance group to delete.
   * To get the instance group ID, use a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
}

export interface DeleteInstanceGroupMetadata {
  $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstanceGroupMetadata";
  /**
   * ID of the instance group that is being deleted.
   * To get the instance group ID, use a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
}

export interface DeleteInstancesMetadata {
  $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstancesMetadata";
  /** ID of the instance group that the instances are being deleted from. */
  instanceGroupId: string;
}

export interface StopInstancesMetadata {
  $type: "yandex.cloud.compute.v1.instancegroup.StopInstancesMetadata";
  /** ID of the instance group that the instances are being stopped from. */
  instanceGroupId: string;
}

export interface ListInstanceGroupsRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupsRequest";
  /**
   * ID of the folder to list instance groups in.
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListInstanceGroupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListInstanceGroupsResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * Currently you can use filtering only on the [InstanceGroup.name] field.
   */
  filter: string;
  /** Defines which information about the Instance template should be returned in the server response. */
  view: InstanceGroupView;
}

export interface ListInstanceGroupsResponse {
  $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupsResponse";
  /** Lists instance groups for the specified folder. */
  instanceGroups: InstanceGroup[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListInstanceGroupsRequest.page_size], use
   * [next_page_token] as the value
   * for the [ListInstanceGroupsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListInstanceGroupInstancesRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupInstancesRequest";
  /**
   * ID of the InstanceGroup resource to list instances for.
   * To get the instance group ID, use a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListInstanceGroupInstancesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListInstanceGroupInstancesResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * Currently you can use filtering only on the [ManagedInstance.name] field.
   */
  filter: string;
}

export interface ListInstanceGroupInstancesResponse {
  $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupInstancesResponse";
  /** Lists instances for the specified instance group. */
  instances: ManagedInstance[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is more than [ListInstanceGroupInstancesRequest.page_size], use
   * [next_page_token] as the value
   * for the [ListInstanceGroupInstancesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface DeleteInstancesRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstancesRequest";
  /**
   * ID of the instance group that the instances are being deleted from.
   * To get the ID of the instance group, use the [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
  /**
   * IDs of the instances to delete. Instances will be deleted along with all dependent resources.
   * Only IDs from the ManagedInstance.id field are allowed, not ManagedInstance.instance_id.
   */
  managedInstanceIds: string[];
  /**
   * If set to true, the target size of instance group will not be reduced and
   * a new instance will be created instead of the deleted one. By default, the target size of instance group
   * will be reduced by the specified number of instance IDs.
   */
  createAnother: boolean;
}

export interface StopInstancesRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.StopInstancesRequest";
  /**
   * ID of the instance group that the instances are being stopped from.
   * To get the ID of the instance group, use the [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
  /**
   * IDs of the instances to stop. After stopping, the instance can be updated, started, or deleted
   * according to scale and deploy policies.
   * Only IDs from the ManagedInstance.id field are allowed, not ManagedInstance.instance_id.
   */
  managedInstanceIds: string[];
}

export interface ListInstanceGroupOperationsRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupOperationsRequest";
  /**
   * ID of the InstanceGroup resource to list operations for.
   * To get the instance group ID, use a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is more than [page_size], the service returns a [ListInstanceGroupOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListInstanceGroupOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * Currently you can use filtering only on the [InstanceGroup.name] field.
   */
  filter: string;
}

export interface ListInstanceGroupOperationsResponse {
  $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupOperationsResponse";
  /** Lists operations for the specified instance group. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is more than [ListInstanceGroupOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListInstanceGroupOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListInstanceGroupLogRecordsRequest {
  $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupLogRecordsRequest";
  /**
   * ID of the InstanceGroup resource to list logs for.
   * To get the instance group ID, use a [InstanceGroupService.List] request.
   */
  instanceGroupId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListInstanceGroupLogRecordsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListInstanceGroupLogRecordsResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * Currently you can use filtering only on the [InstanceGroup.name] field.
   */
  filter: string;
}

export interface ListInstanceGroupLogRecordsResponse {
  $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupLogRecordsResponse";
  /** Lists logs for the specified instance group. */
  logRecords: LogRecord[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListInstanceGroupLogRecordsRequest.page_size], use
   * [next_page_token] as the value
   * for the [ListInstanceGroupLogRecordsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

const baseResumeInstanceGroupProcessesRequest: object = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ResumeInstanceGroupProcessesRequest",
  instanceGroupId: "",
};

export const ResumeInstanceGroupProcessesRequest = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ResumeInstanceGroupProcessesRequest" as const,

  encode(
    message: ResumeInstanceGroupProcessesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResumeInstanceGroupProcessesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseResumeInstanceGroupProcessesRequest,
    } as ResumeInstanceGroupProcessesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResumeInstanceGroupProcessesRequest {
    const message = {
      ...baseResumeInstanceGroupProcessesRequest,
    } as ResumeInstanceGroupProcessesRequest;
    message.instanceGroupId =
      object.instanceGroupId !== undefined && object.instanceGroupId !== null
        ? String(object.instanceGroupId)
        : "";
    return message;
  },

  toJSON(message: ResumeInstanceGroupProcessesRequest): unknown {
    const obj: any = {};
    message.instanceGroupId !== undefined &&
      (obj.instanceGroupId = message.instanceGroupId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ResumeInstanceGroupProcessesRequest>, I>
  >(object: I): ResumeInstanceGroupProcessesRequest {
    const message = {
      ...baseResumeInstanceGroupProcessesRequest,
    } as ResumeInstanceGroupProcessesRequest;
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ResumeInstanceGroupProcessesRequest.$type,
  ResumeInstanceGroupProcessesRequest
);

const baseResumeInstanceGroupProcessMetadata: object = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ResumeInstanceGroupProcessMetadata",
  instanceGroupId: "",
};

export const ResumeInstanceGroupProcessMetadata = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ResumeInstanceGroupProcessMetadata" as const,

  encode(
    message: ResumeInstanceGroupProcessMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResumeInstanceGroupProcessMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseResumeInstanceGroupProcessMetadata,
    } as ResumeInstanceGroupProcessMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResumeInstanceGroupProcessMetadata {
    const message = {
      ...baseResumeInstanceGroupProcessMetadata,
    } as ResumeInstanceGroupProcessMetadata;
    message.instanceGroupId =
      object.instanceGroupId !== undefined && object.instanceGroupId !== null
        ? String(object.instanceGroupId)
        : "";
    return message;
  },

  toJSON(message: ResumeInstanceGroupProcessMetadata): unknown {
    const obj: any = {};
    message.instanceGroupId !== undefined &&
      (obj.instanceGroupId = message.instanceGroupId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ResumeInstanceGroupProcessMetadata>, I>
  >(object: I): ResumeInstanceGroupProcessMetadata {
    const message = {
      ...baseResumeInstanceGroupProcessMetadata,
    } as ResumeInstanceGroupProcessMetadata;
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ResumeInstanceGroupProcessMetadata.$type,
  ResumeInstanceGroupProcessMetadata
);

const basePauseInstanceGroupProcessesRequest: object = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.PauseInstanceGroupProcessesRequest",
  instanceGroupId: "",
};

export const PauseInstanceGroupProcessesRequest = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.PauseInstanceGroupProcessesRequest" as const,

  encode(
    message: PauseInstanceGroupProcessesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PauseInstanceGroupProcessesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePauseInstanceGroupProcessesRequest,
    } as PauseInstanceGroupProcessesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PauseInstanceGroupProcessesRequest {
    const message = {
      ...basePauseInstanceGroupProcessesRequest,
    } as PauseInstanceGroupProcessesRequest;
    message.instanceGroupId =
      object.instanceGroupId !== undefined && object.instanceGroupId !== null
        ? String(object.instanceGroupId)
        : "";
    return message;
  },

  toJSON(message: PauseInstanceGroupProcessesRequest): unknown {
    const obj: any = {};
    message.instanceGroupId !== undefined &&
      (obj.instanceGroupId = message.instanceGroupId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<PauseInstanceGroupProcessesRequest>, I>
  >(object: I): PauseInstanceGroupProcessesRequest {
    const message = {
      ...basePauseInstanceGroupProcessesRequest,
    } as PauseInstanceGroupProcessesRequest;
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  PauseInstanceGroupProcessesRequest.$type,
  PauseInstanceGroupProcessesRequest
);

const basePauseInstanceGroupProcessMetadata: object = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.PauseInstanceGroupProcessMetadata",
  instanceGroupId: "",
};

export const PauseInstanceGroupProcessMetadata = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.PauseInstanceGroupProcessMetadata" as const,

  encode(
    message: PauseInstanceGroupProcessMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PauseInstanceGroupProcessMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePauseInstanceGroupProcessMetadata,
    } as PauseInstanceGroupProcessMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PauseInstanceGroupProcessMetadata {
    const message = {
      ...basePauseInstanceGroupProcessMetadata,
    } as PauseInstanceGroupProcessMetadata;
    message.instanceGroupId =
      object.instanceGroupId !== undefined && object.instanceGroupId !== null
        ? String(object.instanceGroupId)
        : "";
    return message;
  },

  toJSON(message: PauseInstanceGroupProcessMetadata): unknown {
    const obj: any = {};
    message.instanceGroupId !== undefined &&
      (obj.instanceGroupId = message.instanceGroupId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<PauseInstanceGroupProcessMetadata>, I>
  >(object: I): PauseInstanceGroupProcessMetadata {
    const message = {
      ...basePauseInstanceGroupProcessMetadata,
    } as PauseInstanceGroupProcessMetadata;
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  PauseInstanceGroupProcessMetadata.$type,
  PauseInstanceGroupProcessMetadata
);

const baseGetInstanceGroupRequest: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.GetInstanceGroupRequest",
  instanceGroupId: "",
  view: 0,
};

export const GetInstanceGroupRequest = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.GetInstanceGroupRequest" as const,

  encode(
    message: GetInstanceGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    if (message.view !== 0) {
      writer.uint32(16).int32(message.view);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetInstanceGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetInstanceGroupRequest,
    } as GetInstanceGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroupId = reader.string();
          break;
        case 2:
          message.view = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetInstanceGroupRequest {
    const message = {
      ...baseGetInstanceGroupRequest,
    } as GetInstanceGroupRequest;
    message.instanceGroupId =
      object.instanceGroupId !== undefined && object.instanceGroupId !== null
        ? String(object.instanceGroupId)
        : "";
    message.view =
      object.view !== undefined && object.view !== null
        ? instanceGroupViewFromJSON(object.view)
        : 0;
    return message;
  },

  toJSON(message: GetInstanceGroupRequest): unknown {
    const obj: any = {};
    message.instanceGroupId !== undefined &&
      (obj.instanceGroupId = message.instanceGroupId);
    message.view !== undefined &&
      (obj.view = instanceGroupViewToJSON(message.view));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetInstanceGroupRequest>, I>>(
    object: I
  ): GetInstanceGroupRequest {
    const message = {
      ...baseGetInstanceGroupRequest,
    } as GetInstanceGroupRequest;
    message.instanceGroupId = object.instanceGroupId ?? "";
    message.view = object.view ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GetInstanceGroupRequest.$type, GetInstanceGroupRequest);

const baseCreateInstanceGroupRequest: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest",
  folderId: "",
  name: "",
  description: "",
  serviceAccountId: "",
  deletionProtection: false,
};

export const CreateInstanceGroupRequest = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest" as const,

  encode(
    message: CreateInstanceGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateInstanceGroupRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.instanceTemplate !== undefined) {
      InstanceTemplate.encode(
        message.instanceTemplate,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.scalePolicy !== undefined) {
      ScalePolicy.encode(
        message.scalePolicy,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.deployPolicy !== undefined) {
      DeployPolicy.encode(
        message.deployPolicy,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.allocationPolicy !== undefined) {
      AllocationPolicy.encode(
        message.allocationPolicy,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.loadBalancerSpec !== undefined) {
      LoadBalancerSpec.encode(
        message.loadBalancerSpec,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.healthChecksSpec !== undefined) {
      HealthChecksSpec.encode(
        message.healthChecksSpec,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(98).string(message.serviceAccountId);
    }
    for (const v of message.variables) {
      Variable.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(112).bool(message.deletionProtection);
    }
    if (message.applicationLoadBalancerSpec !== undefined) {
      ApplicationLoadBalancerSpec.encode(
        message.applicationLoadBalancerSpec,
        writer.uint32(122).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateInstanceGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateInstanceGroupRequest,
    } as CreateInstanceGroupRequest;
    message.labels = {};
    message.variables = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          const entry5 = CreateInstanceGroupRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.instanceTemplate = InstanceTemplate.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
          break;
        case 8:
          message.deployPolicy = DeployPolicy.decode(reader, reader.uint32());
          break;
        case 9:
          message.allocationPolicy = AllocationPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.loadBalancerSpec = LoadBalancerSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.healthChecksSpec = HealthChecksSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.serviceAccountId = reader.string();
          break;
        case 13:
          message.variables.push(Variable.decode(reader, reader.uint32()));
          break;
        case 14:
          message.deletionProtection = reader.bool();
          break;
        case 15:
          message.applicationLoadBalancerSpec =
            ApplicationLoadBalancerSpec.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateInstanceGroupRequest {
    const message = {
      ...baseCreateInstanceGroupRequest,
    } as CreateInstanceGroupRequest;
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
    message.instanceTemplate =
      object.instanceTemplate !== undefined && object.instanceTemplate !== null
        ? InstanceTemplate.fromJSON(object.instanceTemplate)
        : undefined;
    message.scalePolicy =
      object.scalePolicy !== undefined && object.scalePolicy !== null
        ? ScalePolicy.fromJSON(object.scalePolicy)
        : undefined;
    message.deployPolicy =
      object.deployPolicy !== undefined && object.deployPolicy !== null
        ? DeployPolicy.fromJSON(object.deployPolicy)
        : undefined;
    message.allocationPolicy =
      object.allocationPolicy !== undefined && object.allocationPolicy !== null
        ? AllocationPolicy.fromJSON(object.allocationPolicy)
        : undefined;
    message.loadBalancerSpec =
      object.loadBalancerSpec !== undefined && object.loadBalancerSpec !== null
        ? LoadBalancerSpec.fromJSON(object.loadBalancerSpec)
        : undefined;
    message.healthChecksSpec =
      object.healthChecksSpec !== undefined && object.healthChecksSpec !== null
        ? HealthChecksSpec.fromJSON(object.healthChecksSpec)
        : undefined;
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.variables = (object.variables ?? []).map((e: any) =>
      Variable.fromJSON(e)
    );
    message.deletionProtection =
      object.deletionProtection !== undefined &&
      object.deletionProtection !== null
        ? Boolean(object.deletionProtection)
        : false;
    message.applicationLoadBalancerSpec =
      object.applicationLoadBalancerSpec !== undefined &&
      object.applicationLoadBalancerSpec !== null
        ? ApplicationLoadBalancerSpec.fromJSON(
            object.applicationLoadBalancerSpec
          )
        : undefined;
    return message;
  },

  toJSON(message: CreateInstanceGroupRequest): unknown {
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
    message.instanceTemplate !== undefined &&
      (obj.instanceTemplate = message.instanceTemplate
        ? InstanceTemplate.toJSON(message.instanceTemplate)
        : undefined);
    message.scalePolicy !== undefined &&
      (obj.scalePolicy = message.scalePolicy
        ? ScalePolicy.toJSON(message.scalePolicy)
        : undefined);
    message.deployPolicy !== undefined &&
      (obj.deployPolicy = message.deployPolicy
        ? DeployPolicy.toJSON(message.deployPolicy)
        : undefined);
    message.allocationPolicy !== undefined &&
      (obj.allocationPolicy = message.allocationPolicy
        ? AllocationPolicy.toJSON(message.allocationPolicy)
        : undefined);
    message.loadBalancerSpec !== undefined &&
      (obj.loadBalancerSpec = message.loadBalancerSpec
        ? LoadBalancerSpec.toJSON(message.loadBalancerSpec)
        : undefined);
    message.healthChecksSpec !== undefined &&
      (obj.healthChecksSpec = message.healthChecksSpec
        ? HealthChecksSpec.toJSON(message.healthChecksSpec)
        : undefined);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    if (message.variables) {
      obj.variables = message.variables.map((e) =>
        e ? Variable.toJSON(e) : undefined
      );
    } else {
      obj.variables = [];
    }
    message.deletionProtection !== undefined &&
      (obj.deletionProtection = message.deletionProtection);
    message.applicationLoadBalancerSpec !== undefined &&
      (obj.applicationLoadBalancerSpec = message.applicationLoadBalancerSpec
        ? ApplicationLoadBalancerSpec.toJSON(
            message.applicationLoadBalancerSpec
          )
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateInstanceGroupRequest>, I>>(
    object: I
  ): CreateInstanceGroupRequest {
    const message = {
      ...baseCreateInstanceGroupRequest,
    } as CreateInstanceGroupRequest;
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
    message.instanceTemplate =
      object.instanceTemplate !== undefined && object.instanceTemplate !== null
        ? InstanceTemplate.fromPartial(object.instanceTemplate)
        : undefined;
    message.scalePolicy =
      object.scalePolicy !== undefined && object.scalePolicy !== null
        ? ScalePolicy.fromPartial(object.scalePolicy)
        : undefined;
    message.deployPolicy =
      object.deployPolicy !== undefined && object.deployPolicy !== null
        ? DeployPolicy.fromPartial(object.deployPolicy)
        : undefined;
    message.allocationPolicy =
      object.allocationPolicy !== undefined && object.allocationPolicy !== null
        ? AllocationPolicy.fromPartial(object.allocationPolicy)
        : undefined;
    message.loadBalancerSpec =
      object.loadBalancerSpec !== undefined && object.loadBalancerSpec !== null
        ? LoadBalancerSpec.fromPartial(object.loadBalancerSpec)
        : undefined;
    message.healthChecksSpec =
      object.healthChecksSpec !== undefined && object.healthChecksSpec !== null
        ? HealthChecksSpec.fromPartial(object.healthChecksSpec)
        : undefined;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.variables =
      object.variables?.map((e) => Variable.fromPartial(e)) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    message.applicationLoadBalancerSpec =
      object.applicationLoadBalancerSpec !== undefined &&
      object.applicationLoadBalancerSpec !== null
        ? ApplicationLoadBalancerSpec.fromPartial(
            object.applicationLoadBalancerSpec
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  CreateInstanceGroupRequest.$type,
  CreateInstanceGroupRequest
);

const baseCreateInstanceGroupRequest_LabelsEntry: object = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateInstanceGroupRequest_LabelsEntry = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest.LabelsEntry" as const,

  encode(
    message: CreateInstanceGroupRequest_LabelsEntry,
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
  ): CreateInstanceGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateInstanceGroupRequest_LabelsEntry,
    } as CreateInstanceGroupRequest_LabelsEntry;
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

  fromJSON(object: any): CreateInstanceGroupRequest_LabelsEntry {
    const message = {
      ...baseCreateInstanceGroupRequest_LabelsEntry,
    } as CreateInstanceGroupRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateInstanceGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateInstanceGroupRequest_LabelsEntry>, I>
  >(object: I): CreateInstanceGroupRequest_LabelsEntry {
    const message = {
      ...baseCreateInstanceGroupRequest_LabelsEntry,
    } as CreateInstanceGroupRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateInstanceGroupRequest_LabelsEntry.$type,
  CreateInstanceGroupRequest_LabelsEntry
);

const baseCreateInstanceGroupFromYamlRequest: object = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupFromYamlRequest",
  folderId: "",
  instanceGroupYaml: "",
};

export const CreateInstanceGroupFromYamlRequest = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupFromYamlRequest" as const,

  encode(
    message: CreateInstanceGroupFromYamlRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.instanceGroupYaml !== "") {
      writer.uint32(18).string(message.instanceGroupYaml);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateInstanceGroupFromYamlRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateInstanceGroupFromYamlRequest,
    } as CreateInstanceGroupFromYamlRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 2:
          message.instanceGroupYaml = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateInstanceGroupFromYamlRequest {
    const message = {
      ...baseCreateInstanceGroupFromYamlRequest,
    } as CreateInstanceGroupFromYamlRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.instanceGroupYaml =
      object.instanceGroupYaml !== undefined &&
      object.instanceGroupYaml !== null
        ? String(object.instanceGroupYaml)
        : "";
    return message;
  },

  toJSON(message: CreateInstanceGroupFromYamlRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.instanceGroupYaml !== undefined &&
      (obj.instanceGroupYaml = message.instanceGroupYaml);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateInstanceGroupFromYamlRequest>, I>
  >(object: I): CreateInstanceGroupFromYamlRequest {
    const message = {
      ...baseCreateInstanceGroupFromYamlRequest,
    } as CreateInstanceGroupFromYamlRequest;
    message.folderId = object.folderId ?? "";
    message.instanceGroupYaml = object.instanceGroupYaml ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateInstanceGroupFromYamlRequest.$type,
  CreateInstanceGroupFromYamlRequest
);

const baseCreateInstanceGroupMetadata: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupMetadata",
  instanceGroupId: "",
};

export const CreateInstanceGroupMetadata = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupMetadata" as const,

  encode(
    message: CreateInstanceGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateInstanceGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateInstanceGroupMetadata,
    } as CreateInstanceGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateInstanceGroupMetadata {
    const message = {
      ...baseCreateInstanceGroupMetadata,
    } as CreateInstanceGroupMetadata;
    message.instanceGroupId =
      object.instanceGroupId !== undefined && object.instanceGroupId !== null
        ? String(object.instanceGroupId)
        : "";
    return message;
  },

  toJSON(message: CreateInstanceGroupMetadata): unknown {
    const obj: any = {};
    message.instanceGroupId !== undefined &&
      (obj.instanceGroupId = message.instanceGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateInstanceGroupMetadata>, I>>(
    object: I
  ): CreateInstanceGroupMetadata {
    const message = {
      ...baseCreateInstanceGroupMetadata,
    } as CreateInstanceGroupMetadata;
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateInstanceGroupMetadata.$type,
  CreateInstanceGroupMetadata
);

const baseUpdateInstanceGroupRequest: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest",
  instanceGroupId: "",
  name: "",
  description: "",
  serviceAccountId: "",
  deletionProtection: false,
};

export const UpdateInstanceGroupRequest = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest" as const,

  encode(
    message: UpdateInstanceGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
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
      UpdateInstanceGroupRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.instanceTemplate !== undefined) {
      InstanceTemplate.encode(
        message.instanceTemplate,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.scalePolicy !== undefined) {
      ScalePolicy.encode(
        message.scalePolicy,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.deployPolicy !== undefined) {
      DeployPolicy.encode(
        message.deployPolicy,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.allocationPolicy !== undefined) {
      AllocationPolicy.encode(
        message.allocationPolicy,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.healthChecksSpec !== undefined) {
      HealthChecksSpec.encode(
        message.healthChecksSpec,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(98).string(message.serviceAccountId);
    }
    if (message.loadBalancerSpec !== undefined) {
      LoadBalancerSpec.encode(
        message.loadBalancerSpec,
        writer.uint32(114).fork()
      ).ldelim();
    }
    for (const v of message.variables) {
      Variable.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(128).bool(message.deletionProtection);
    }
    if (message.applicationLoadBalancerSpec !== undefined) {
      ApplicationLoadBalancerSpec.encode(
        message.applicationLoadBalancerSpec,
        writer.uint32(138).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateInstanceGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateInstanceGroupRequest,
    } as UpdateInstanceGroupRequest;
    message.labels = {};
    message.variables = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroupId = reader.string();
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
          const entry5 = UpdateInstanceGroupRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.instanceTemplate = InstanceTemplate.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
          break;
        case 8:
          message.deployPolicy = DeployPolicy.decode(reader, reader.uint32());
          break;
        case 9:
          message.allocationPolicy = AllocationPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.healthChecksSpec = HealthChecksSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.serviceAccountId = reader.string();
          break;
        case 14:
          message.loadBalancerSpec = LoadBalancerSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.variables.push(Variable.decode(reader, reader.uint32()));
          break;
        case 16:
          message.deletionProtection = reader.bool();
          break;
        case 17:
          message.applicationLoadBalancerSpec =
            ApplicationLoadBalancerSpec.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateInstanceGroupRequest {
    const message = {
      ...baseUpdateInstanceGroupRequest,
    } as UpdateInstanceGroupRequest;
    message.instanceGroupId =
      object.instanceGroupId !== undefined && object.instanceGroupId !== null
        ? String(object.instanceGroupId)
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
    message.instanceTemplate =
      object.instanceTemplate !== undefined && object.instanceTemplate !== null
        ? InstanceTemplate.fromJSON(object.instanceTemplate)
        : undefined;
    message.scalePolicy =
      object.scalePolicy !== undefined && object.scalePolicy !== null
        ? ScalePolicy.fromJSON(object.scalePolicy)
        : undefined;
    message.deployPolicy =
      object.deployPolicy !== undefined && object.deployPolicy !== null
        ? DeployPolicy.fromJSON(object.deployPolicy)
        : undefined;
    message.allocationPolicy =
      object.allocationPolicy !== undefined && object.allocationPolicy !== null
        ? AllocationPolicy.fromJSON(object.allocationPolicy)
        : undefined;
    message.healthChecksSpec =
      object.healthChecksSpec !== undefined && object.healthChecksSpec !== null
        ? HealthChecksSpec.fromJSON(object.healthChecksSpec)
        : undefined;
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.loadBalancerSpec =
      object.loadBalancerSpec !== undefined && object.loadBalancerSpec !== null
        ? LoadBalancerSpec.fromJSON(object.loadBalancerSpec)
        : undefined;
    message.variables = (object.variables ?? []).map((e: any) =>
      Variable.fromJSON(e)
    );
    message.deletionProtection =
      object.deletionProtection !== undefined &&
      object.deletionProtection !== null
        ? Boolean(object.deletionProtection)
        : false;
    message.applicationLoadBalancerSpec =
      object.applicationLoadBalancerSpec !== undefined &&
      object.applicationLoadBalancerSpec !== null
        ? ApplicationLoadBalancerSpec.fromJSON(
            object.applicationLoadBalancerSpec
          )
        : undefined;
    return message;
  },

  toJSON(message: UpdateInstanceGroupRequest): unknown {
    const obj: any = {};
    message.instanceGroupId !== undefined &&
      (obj.instanceGroupId = message.instanceGroupId);
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
    message.instanceTemplate !== undefined &&
      (obj.instanceTemplate = message.instanceTemplate
        ? InstanceTemplate.toJSON(message.instanceTemplate)
        : undefined);
    message.scalePolicy !== undefined &&
      (obj.scalePolicy = message.scalePolicy
        ? ScalePolicy.toJSON(message.scalePolicy)
        : undefined);
    message.deployPolicy !== undefined &&
      (obj.deployPolicy = message.deployPolicy
        ? DeployPolicy.toJSON(message.deployPolicy)
        : undefined);
    message.allocationPolicy !== undefined &&
      (obj.allocationPolicy = message.allocationPolicy
        ? AllocationPolicy.toJSON(message.allocationPolicy)
        : undefined);
    message.healthChecksSpec !== undefined &&
      (obj.healthChecksSpec = message.healthChecksSpec
        ? HealthChecksSpec.toJSON(message.healthChecksSpec)
        : undefined);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.loadBalancerSpec !== undefined &&
      (obj.loadBalancerSpec = message.loadBalancerSpec
        ? LoadBalancerSpec.toJSON(message.loadBalancerSpec)
        : undefined);
    if (message.variables) {
      obj.variables = message.variables.map((e) =>
        e ? Variable.toJSON(e) : undefined
      );
    } else {
      obj.variables = [];
    }
    message.deletionProtection !== undefined &&
      (obj.deletionProtection = message.deletionProtection);
    message.applicationLoadBalancerSpec !== undefined &&
      (obj.applicationLoadBalancerSpec = message.applicationLoadBalancerSpec
        ? ApplicationLoadBalancerSpec.toJSON(
            message.applicationLoadBalancerSpec
          )
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateInstanceGroupRequest>, I>>(
    object: I
  ): UpdateInstanceGroupRequest {
    const message = {
      ...baseUpdateInstanceGroupRequest,
    } as UpdateInstanceGroupRequest;
    message.instanceGroupId = object.instanceGroupId ?? "";
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
    message.instanceTemplate =
      object.instanceTemplate !== undefined && object.instanceTemplate !== null
        ? InstanceTemplate.fromPartial(object.instanceTemplate)
        : undefined;
    message.scalePolicy =
      object.scalePolicy !== undefined && object.scalePolicy !== null
        ? ScalePolicy.fromPartial(object.scalePolicy)
        : undefined;
    message.deployPolicy =
      object.deployPolicy !== undefined && object.deployPolicy !== null
        ? DeployPolicy.fromPartial(object.deployPolicy)
        : undefined;
    message.allocationPolicy =
      object.allocationPolicy !== undefined && object.allocationPolicy !== null
        ? AllocationPolicy.fromPartial(object.allocationPolicy)
        : undefined;
    message.healthChecksSpec =
      object.healthChecksSpec !== undefined && object.healthChecksSpec !== null
        ? HealthChecksSpec.fromPartial(object.healthChecksSpec)
        : undefined;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.loadBalancerSpec =
      object.loadBalancerSpec !== undefined && object.loadBalancerSpec !== null
        ? LoadBalancerSpec.fromPartial(object.loadBalancerSpec)
        : undefined;
    message.variables =
      object.variables?.map((e) => Variable.fromPartial(e)) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    message.applicationLoadBalancerSpec =
      object.applicationLoadBalancerSpec !== undefined &&
      object.applicationLoadBalancerSpec !== null
        ? ApplicationLoadBalancerSpec.fromPartial(
            object.applicationLoadBalancerSpec
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  UpdateInstanceGroupRequest.$type,
  UpdateInstanceGroupRequest
);

const baseUpdateInstanceGroupRequest_LabelsEntry: object = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateInstanceGroupRequest_LabelsEntry = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest.LabelsEntry" as const,

  encode(
    message: UpdateInstanceGroupRequest_LabelsEntry,
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
  ): UpdateInstanceGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateInstanceGroupRequest_LabelsEntry,
    } as UpdateInstanceGroupRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateInstanceGroupRequest_LabelsEntry {
    const message = {
      ...baseUpdateInstanceGroupRequest_LabelsEntry,
    } as UpdateInstanceGroupRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateInstanceGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateInstanceGroupRequest_LabelsEntry>, I>
  >(object: I): UpdateInstanceGroupRequest_LabelsEntry {
    const message = {
      ...baseUpdateInstanceGroupRequest_LabelsEntry,
    } as UpdateInstanceGroupRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateInstanceGroupRequest_LabelsEntry.$type,
  UpdateInstanceGroupRequest_LabelsEntry
);

const baseUpdateInstanceGroupFromYamlRequest: object = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupFromYamlRequest",
  instanceGroupId: "",
  instanceGroupYaml: "",
};

export const UpdateInstanceGroupFromYamlRequest = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupFromYamlRequest" as const,

  encode(
    message: UpdateInstanceGroupFromYamlRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    if (message.instanceGroupYaml !== "") {
      writer.uint32(18).string(message.instanceGroupYaml);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateInstanceGroupFromYamlRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateInstanceGroupFromYamlRequest,
    } as UpdateInstanceGroupFromYamlRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroupId = reader.string();
          break;
        case 2:
          message.instanceGroupYaml = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateInstanceGroupFromYamlRequest {
    const message = {
      ...baseUpdateInstanceGroupFromYamlRequest,
    } as UpdateInstanceGroupFromYamlRequest;
    message.instanceGroupId =
      object.instanceGroupId !== undefined && object.instanceGroupId !== null
        ? String(object.instanceGroupId)
        : "";
    message.instanceGroupYaml =
      object.instanceGroupYaml !== undefined &&
      object.instanceGroupYaml !== null
        ? String(object.instanceGroupYaml)
        : "";
    return message;
  },

  toJSON(message: UpdateInstanceGroupFromYamlRequest): unknown {
    const obj: any = {};
    message.instanceGroupId !== undefined &&
      (obj.instanceGroupId = message.instanceGroupId);
    message.instanceGroupYaml !== undefined &&
      (obj.instanceGroupYaml = message.instanceGroupYaml);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateInstanceGroupFromYamlRequest>, I>
  >(object: I): UpdateInstanceGroupFromYamlRequest {
    const message = {
      ...baseUpdateInstanceGroupFromYamlRequest,
    } as UpdateInstanceGroupFromYamlRequest;
    message.instanceGroupId = object.instanceGroupId ?? "";
    message.instanceGroupYaml = object.instanceGroupYaml ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateInstanceGroupFromYamlRequest.$type,
  UpdateInstanceGroupFromYamlRequest
);

const baseUpdateInstanceGroupMetadata: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupMetadata",
  instanceGroupId: "",
};

export const UpdateInstanceGroupMetadata = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupMetadata" as const,

  encode(
    message: UpdateInstanceGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateInstanceGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateInstanceGroupMetadata,
    } as UpdateInstanceGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateInstanceGroupMetadata {
    const message = {
      ...baseUpdateInstanceGroupMetadata,
    } as UpdateInstanceGroupMetadata;
    message.instanceGroupId =
      object.instanceGroupId !== undefined && object.instanceGroupId !== null
        ? String(object.instanceGroupId)
        : "";
    return message;
  },

  toJSON(message: UpdateInstanceGroupMetadata): unknown {
    const obj: any = {};
    message.instanceGroupId !== undefined &&
      (obj.instanceGroupId = message.instanceGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateInstanceGroupMetadata>, I>>(
    object: I
  ): UpdateInstanceGroupMetadata {
    const message = {
      ...baseUpdateInstanceGroupMetadata,
    } as UpdateInstanceGroupMetadata;
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateInstanceGroupMetadata.$type,
  UpdateInstanceGroupMetadata
);

const baseStartInstanceGroupRequest: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.StartInstanceGroupRequest",
  instanceGroupId: "",
};

export const StartInstanceGroupRequest = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.StartInstanceGroupRequest" as const,

  encode(
    message: StartInstanceGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StartInstanceGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseStartInstanceGroupRequest,
    } as StartInstanceGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartInstanceGroupRequest {
    const message = {
      ...baseStartInstanceGroupRequest,
    } as StartInstanceGroupRequest;
    message.instanceGroupId =
      object.instanceGroupId !== undefined && object.instanceGroupId !== null
        ? String(object.instanceGroupId)
        : "";
    return message;
  },

  toJSON(message: StartInstanceGroupRequest): unknown {
    const obj: any = {};
    message.instanceGroupId !== undefined &&
      (obj.instanceGroupId = message.instanceGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartInstanceGroupRequest>, I>>(
    object: I
  ): StartInstanceGroupRequest {
    const message = {
      ...baseStartInstanceGroupRequest,
    } as StartInstanceGroupRequest;
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  StartInstanceGroupRequest.$type,
  StartInstanceGroupRequest
);

const baseStartInstanceGroupMetadata: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.StartInstanceGroupMetadata",
  instanceGroupId: "",
};

export const StartInstanceGroupMetadata = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.StartInstanceGroupMetadata" as const,

  encode(
    message: StartInstanceGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StartInstanceGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseStartInstanceGroupMetadata,
    } as StartInstanceGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartInstanceGroupMetadata {
    const message = {
      ...baseStartInstanceGroupMetadata,
    } as StartInstanceGroupMetadata;
    message.instanceGroupId =
      object.instanceGroupId !== undefined && object.instanceGroupId !== null
        ? String(object.instanceGroupId)
        : "";
    return message;
  },

  toJSON(message: StartInstanceGroupMetadata): unknown {
    const obj: any = {};
    message.instanceGroupId !== undefined &&
      (obj.instanceGroupId = message.instanceGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartInstanceGroupMetadata>, I>>(
    object: I
  ): StartInstanceGroupMetadata {
    const message = {
      ...baseStartInstanceGroupMetadata,
    } as StartInstanceGroupMetadata;
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  StartInstanceGroupMetadata.$type,
  StartInstanceGroupMetadata
);

const baseStopInstanceGroupRequest: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.StopInstanceGroupRequest",
  instanceGroupId: "",
};

export const StopInstanceGroupRequest = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.StopInstanceGroupRequest" as const,

  encode(
    message: StopInstanceGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StopInstanceGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseStopInstanceGroupRequest,
    } as StopInstanceGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StopInstanceGroupRequest {
    const message = {
      ...baseStopInstanceGroupRequest,
    } as StopInstanceGroupRequest;
    message.instanceGroupId =
      object.instanceGroupId !== undefined && object.instanceGroupId !== null
        ? String(object.instanceGroupId)
        : "";
    return message;
  },

  toJSON(message: StopInstanceGroupRequest): unknown {
    const obj: any = {};
    message.instanceGroupId !== undefined &&
      (obj.instanceGroupId = message.instanceGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StopInstanceGroupRequest>, I>>(
    object: I
  ): StopInstanceGroupRequest {
    const message = {
      ...baseStopInstanceGroupRequest,
    } as StopInstanceGroupRequest;
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  StopInstanceGroupRequest.$type,
  StopInstanceGroupRequest
);

const baseStopInstanceGroupMetadata: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.StopInstanceGroupMetadata",
  instanceGroupId: "",
};

export const StopInstanceGroupMetadata = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.StopInstanceGroupMetadata" as const,

  encode(
    message: StopInstanceGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StopInstanceGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseStopInstanceGroupMetadata,
    } as StopInstanceGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StopInstanceGroupMetadata {
    const message = {
      ...baseStopInstanceGroupMetadata,
    } as StopInstanceGroupMetadata;
    message.instanceGroupId =
      object.instanceGroupId !== undefined && object.instanceGroupId !== null
        ? String(object.instanceGroupId)
        : "";
    return message;
  },

  toJSON(message: StopInstanceGroupMetadata): unknown {
    const obj: any = {};
    message.instanceGroupId !== undefined &&
      (obj.instanceGroupId = message.instanceGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StopInstanceGroupMetadata>, I>>(
    object: I
  ): StopInstanceGroupMetadata {
    const message = {
      ...baseStopInstanceGroupMetadata,
    } as StopInstanceGroupMetadata;
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  StopInstanceGroupMetadata.$type,
  StopInstanceGroupMetadata
);

const baseRollingRestartRequest: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.RollingRestartRequest",
  instanceGroupId: "",
  managedInstanceIds: "",
};

export const RollingRestartRequest = {
  $type: "yandex.cloud.compute.v1.instancegroup.RollingRestartRequest" as const,

  encode(
    message: RollingRestartRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    for (const v of message.managedInstanceIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RollingRestartRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRollingRestartRequest } as RollingRestartRequest;
    message.managedInstanceIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroupId = reader.string();
          break;
        case 2:
          message.managedInstanceIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RollingRestartRequest {
    const message = { ...baseRollingRestartRequest } as RollingRestartRequest;
    message.instanceGroupId =
      object.instanceGroupId !== undefined && object.instanceGroupId !== null
        ? String(object.instanceGroupId)
        : "";
    message.managedInstanceIds = (object.managedInstanceIds ?? []).map(
      (e: any) => String(e)
    );
    return message;
  },

  toJSON(message: RollingRestartRequest): unknown {
    const obj: any = {};
    message.instanceGroupId !== undefined &&
      (obj.instanceGroupId = message.instanceGroupId);
    if (message.managedInstanceIds) {
      obj.managedInstanceIds = message.managedInstanceIds.map((e) => e);
    } else {
      obj.managedInstanceIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RollingRestartRequest>, I>>(
    object: I
  ): RollingRestartRequest {
    const message = { ...baseRollingRestartRequest } as RollingRestartRequest;
    message.instanceGroupId = object.instanceGroupId ?? "";
    message.managedInstanceIds = object.managedInstanceIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(RollingRestartRequest.$type, RollingRestartRequest);

const baseRollingRestartMetadata: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.RollingRestartMetadata",
  instanceGroupId: "",
};

export const RollingRestartMetadata = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.RollingRestartMetadata" as const,

  encode(
    message: RollingRestartMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RollingRestartMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRollingRestartMetadata } as RollingRestartMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RollingRestartMetadata {
    const message = { ...baseRollingRestartMetadata } as RollingRestartMetadata;
    message.instanceGroupId =
      object.instanceGroupId !== undefined && object.instanceGroupId !== null
        ? String(object.instanceGroupId)
        : "";
    return message;
  },

  toJSON(message: RollingRestartMetadata): unknown {
    const obj: any = {};
    message.instanceGroupId !== undefined &&
      (obj.instanceGroupId = message.instanceGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RollingRestartMetadata>, I>>(
    object: I
  ): RollingRestartMetadata {
    const message = { ...baseRollingRestartMetadata } as RollingRestartMetadata;
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RollingRestartMetadata.$type, RollingRestartMetadata);

const baseRollingRecreateRequest: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.RollingRecreateRequest",
  instanceGroupId: "",
  managedInstanceIds: "",
};

export const RollingRecreateRequest = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.RollingRecreateRequest" as const,

  encode(
    message: RollingRecreateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    for (const v of message.managedInstanceIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RollingRecreateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRollingRecreateRequest } as RollingRecreateRequest;
    message.managedInstanceIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroupId = reader.string();
          break;
        case 2:
          message.managedInstanceIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RollingRecreateRequest {
    const message = { ...baseRollingRecreateRequest } as RollingRecreateRequest;
    message.instanceGroupId =
      object.instanceGroupId !== undefined && object.instanceGroupId !== null
        ? String(object.instanceGroupId)
        : "";
    message.managedInstanceIds = (object.managedInstanceIds ?? []).map(
      (e: any) => String(e)
    );
    return message;
  },

  toJSON(message: RollingRecreateRequest): unknown {
    const obj: any = {};
    message.instanceGroupId !== undefined &&
      (obj.instanceGroupId = message.instanceGroupId);
    if (message.managedInstanceIds) {
      obj.managedInstanceIds = message.managedInstanceIds.map((e) => e);
    } else {
      obj.managedInstanceIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RollingRecreateRequest>, I>>(
    object: I
  ): RollingRecreateRequest {
    const message = { ...baseRollingRecreateRequest } as RollingRecreateRequest;
    message.instanceGroupId = object.instanceGroupId ?? "";
    message.managedInstanceIds = object.managedInstanceIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(RollingRecreateRequest.$type, RollingRecreateRequest);

const baseRollingRecreateMetadata: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.RollingRecreateMetadata",
  instanceGroupId: "",
};

export const RollingRecreateMetadata = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.RollingRecreateMetadata" as const,

  encode(
    message: RollingRecreateMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RollingRecreateMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRollingRecreateMetadata,
    } as RollingRecreateMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RollingRecreateMetadata {
    const message = {
      ...baseRollingRecreateMetadata,
    } as RollingRecreateMetadata;
    message.instanceGroupId =
      object.instanceGroupId !== undefined && object.instanceGroupId !== null
        ? String(object.instanceGroupId)
        : "";
    return message;
  },

  toJSON(message: RollingRecreateMetadata): unknown {
    const obj: any = {};
    message.instanceGroupId !== undefined &&
      (obj.instanceGroupId = message.instanceGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RollingRecreateMetadata>, I>>(
    object: I
  ): RollingRecreateMetadata {
    const message = {
      ...baseRollingRecreateMetadata,
    } as RollingRecreateMetadata;
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RollingRecreateMetadata.$type, RollingRecreateMetadata);

const baseDeleteInstanceGroupRequest: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstanceGroupRequest",
  instanceGroupId: "",
};

export const DeleteInstanceGroupRequest = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.DeleteInstanceGroupRequest" as const,

  encode(
    message: DeleteInstanceGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteInstanceGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteInstanceGroupRequest,
    } as DeleteInstanceGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteInstanceGroupRequest {
    const message = {
      ...baseDeleteInstanceGroupRequest,
    } as DeleteInstanceGroupRequest;
    message.instanceGroupId =
      object.instanceGroupId !== undefined && object.instanceGroupId !== null
        ? String(object.instanceGroupId)
        : "";
    return message;
  },

  toJSON(message: DeleteInstanceGroupRequest): unknown {
    const obj: any = {};
    message.instanceGroupId !== undefined &&
      (obj.instanceGroupId = message.instanceGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteInstanceGroupRequest>, I>>(
    object: I
  ): DeleteInstanceGroupRequest {
    const message = {
      ...baseDeleteInstanceGroupRequest,
    } as DeleteInstanceGroupRequest;
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteInstanceGroupRequest.$type,
  DeleteInstanceGroupRequest
);

const baseDeleteInstanceGroupMetadata: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstanceGroupMetadata",
  instanceGroupId: "",
};

export const DeleteInstanceGroupMetadata = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.DeleteInstanceGroupMetadata" as const,

  encode(
    message: DeleteInstanceGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteInstanceGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteInstanceGroupMetadata,
    } as DeleteInstanceGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteInstanceGroupMetadata {
    const message = {
      ...baseDeleteInstanceGroupMetadata,
    } as DeleteInstanceGroupMetadata;
    message.instanceGroupId =
      object.instanceGroupId !== undefined && object.instanceGroupId !== null
        ? String(object.instanceGroupId)
        : "";
    return message;
  },

  toJSON(message: DeleteInstanceGroupMetadata): unknown {
    const obj: any = {};
    message.instanceGroupId !== undefined &&
      (obj.instanceGroupId = message.instanceGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteInstanceGroupMetadata>, I>>(
    object: I
  ): DeleteInstanceGroupMetadata {
    const message = {
      ...baseDeleteInstanceGroupMetadata,
    } as DeleteInstanceGroupMetadata;
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteInstanceGroupMetadata.$type,
  DeleteInstanceGroupMetadata
);

const baseDeleteInstancesMetadata: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstancesMetadata",
  instanceGroupId: "",
};

export const DeleteInstancesMetadata = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.DeleteInstancesMetadata" as const,

  encode(
    message: DeleteInstancesMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteInstancesMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteInstancesMetadata,
    } as DeleteInstancesMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteInstancesMetadata {
    const message = {
      ...baseDeleteInstancesMetadata,
    } as DeleteInstancesMetadata;
    message.instanceGroupId =
      object.instanceGroupId !== undefined && object.instanceGroupId !== null
        ? String(object.instanceGroupId)
        : "";
    return message;
  },

  toJSON(message: DeleteInstancesMetadata): unknown {
    const obj: any = {};
    message.instanceGroupId !== undefined &&
      (obj.instanceGroupId = message.instanceGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteInstancesMetadata>, I>>(
    object: I
  ): DeleteInstancesMetadata {
    const message = {
      ...baseDeleteInstancesMetadata,
    } as DeleteInstancesMetadata;
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteInstancesMetadata.$type, DeleteInstancesMetadata);

const baseStopInstancesMetadata: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.StopInstancesMetadata",
  instanceGroupId: "",
};

export const StopInstancesMetadata = {
  $type: "yandex.cloud.compute.v1.instancegroup.StopInstancesMetadata" as const,

  encode(
    message: StopInstancesMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StopInstancesMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStopInstancesMetadata } as StopInstancesMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StopInstancesMetadata {
    const message = { ...baseStopInstancesMetadata } as StopInstancesMetadata;
    message.instanceGroupId =
      object.instanceGroupId !== undefined && object.instanceGroupId !== null
        ? String(object.instanceGroupId)
        : "";
    return message;
  },

  toJSON(message: StopInstancesMetadata): unknown {
    const obj: any = {};
    message.instanceGroupId !== undefined &&
      (obj.instanceGroupId = message.instanceGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StopInstancesMetadata>, I>>(
    object: I
  ): StopInstancesMetadata {
    const message = { ...baseStopInstancesMetadata } as StopInstancesMetadata;
    message.instanceGroupId = object.instanceGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StopInstancesMetadata.$type, StopInstancesMetadata);

const baseListInstanceGroupsRequest: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupsRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
  view: 0,
};

export const ListInstanceGroupsRequest = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupsRequest" as const,

  encode(
    message: ListInstanceGroupsRequest,
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
    if (message.view !== 0) {
      writer.uint32(40).int32(message.view);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListInstanceGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListInstanceGroupsRequest,
    } as ListInstanceGroupsRequest;
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
        case 5:
          message.view = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListInstanceGroupsRequest {
    const message = {
      ...baseListInstanceGroupsRequest,
    } as ListInstanceGroupsRequest;
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
    message.view =
      object.view !== undefined && object.view !== null
        ? instanceGroupViewFromJSON(object.view)
        : 0;
    return message;
  },

  toJSON(message: ListInstanceGroupsRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    message.view !== undefined &&
      (obj.view = instanceGroupViewToJSON(message.view));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListInstanceGroupsRequest>, I>>(
    object: I
  ): ListInstanceGroupsRequest {
    const message = {
      ...baseListInstanceGroupsRequest,
    } as ListInstanceGroupsRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.view = object.view ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  ListInstanceGroupsRequest.$type,
  ListInstanceGroupsRequest
);

const baseListInstanceGroupsResponse: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupsResponse",
  nextPageToken: "",
};

export const ListInstanceGroupsResponse = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupsResponse" as const,

  encode(
    message: ListInstanceGroupsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.instanceGroups) {
      InstanceGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListInstanceGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListInstanceGroupsResponse,
    } as ListInstanceGroupsResponse;
    message.instanceGroups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroups.push(
            InstanceGroup.decode(reader, reader.uint32())
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

  fromJSON(object: any): ListInstanceGroupsResponse {
    const message = {
      ...baseListInstanceGroupsResponse,
    } as ListInstanceGroupsResponse;
    message.instanceGroups = (object.instanceGroups ?? []).map((e: any) =>
      InstanceGroup.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListInstanceGroupsResponse): unknown {
    const obj: any = {};
    if (message.instanceGroups) {
      obj.instanceGroups = message.instanceGroups.map((e) =>
        e ? InstanceGroup.toJSON(e) : undefined
      );
    } else {
      obj.instanceGroups = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListInstanceGroupsResponse>, I>>(
    object: I
  ): ListInstanceGroupsResponse {
    const message = {
      ...baseListInstanceGroupsResponse,
    } as ListInstanceGroupsResponse;
    message.instanceGroups =
      object.instanceGroups?.map((e) => InstanceGroup.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListInstanceGroupsResponse.$type,
  ListInstanceGroupsResponse
);

const baseListInstanceGroupInstancesRequest: object = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupInstancesRequest",
  instanceGroupId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListInstanceGroupInstancesRequest = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupInstancesRequest" as const,

  encode(
    message: ListInstanceGroupInstancesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
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
  ): ListInstanceGroupInstancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListInstanceGroupInstancesRequest,
    } as ListInstanceGroupInstancesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroupId = reader.string();
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

  fromJSON(object: any): ListInstanceGroupInstancesRequest {
    const message = {
      ...baseListInstanceGroupInstancesRequest,
    } as ListInstanceGroupInstancesRequest;
    message.instanceGroupId =
      object.instanceGroupId !== undefined && object.instanceGroupId !== null
        ? String(object.instanceGroupId)
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

  toJSON(message: ListInstanceGroupInstancesRequest): unknown {
    const obj: any = {};
    message.instanceGroupId !== undefined &&
      (obj.instanceGroupId = message.instanceGroupId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListInstanceGroupInstancesRequest>, I>
  >(object: I): ListInstanceGroupInstancesRequest {
    const message = {
      ...baseListInstanceGroupInstancesRequest,
    } as ListInstanceGroupInstancesRequest;
    message.instanceGroupId = object.instanceGroupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListInstanceGroupInstancesRequest.$type,
  ListInstanceGroupInstancesRequest
);

const baseListInstanceGroupInstancesResponse: object = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupInstancesResponse",
  nextPageToken: "",
};

export const ListInstanceGroupInstancesResponse = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupInstancesResponse" as const,

  encode(
    message: ListInstanceGroupInstancesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.instances) {
      ManagedInstance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListInstanceGroupInstancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListInstanceGroupInstancesResponse,
    } as ListInstanceGroupInstancesResponse;
    message.instances = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instances.push(
            ManagedInstance.decode(reader, reader.uint32())
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

  fromJSON(object: any): ListInstanceGroupInstancesResponse {
    const message = {
      ...baseListInstanceGroupInstancesResponse,
    } as ListInstanceGroupInstancesResponse;
    message.instances = (object.instances ?? []).map((e: any) =>
      ManagedInstance.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListInstanceGroupInstancesResponse): unknown {
    const obj: any = {};
    if (message.instances) {
      obj.instances = message.instances.map((e) =>
        e ? ManagedInstance.toJSON(e) : undefined
      );
    } else {
      obj.instances = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListInstanceGroupInstancesResponse>, I>
  >(object: I): ListInstanceGroupInstancesResponse {
    const message = {
      ...baseListInstanceGroupInstancesResponse,
    } as ListInstanceGroupInstancesResponse;
    message.instances =
      object.instances?.map((e) => ManagedInstance.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListInstanceGroupInstancesResponse.$type,
  ListInstanceGroupInstancesResponse
);

const baseDeleteInstancesRequest: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstancesRequest",
  instanceGroupId: "",
  managedInstanceIds: "",
  createAnother: false,
};

export const DeleteInstancesRequest = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.DeleteInstancesRequest" as const,

  encode(
    message: DeleteInstancesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    for (const v of message.managedInstanceIds) {
      writer.uint32(18).string(v!);
    }
    if (message.createAnother === true) {
      writer.uint32(24).bool(message.createAnother);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteInstancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteInstancesRequest } as DeleteInstancesRequest;
    message.managedInstanceIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroupId = reader.string();
          break;
        case 2:
          message.managedInstanceIds.push(reader.string());
          break;
        case 3:
          message.createAnother = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteInstancesRequest {
    const message = { ...baseDeleteInstancesRequest } as DeleteInstancesRequest;
    message.instanceGroupId =
      object.instanceGroupId !== undefined && object.instanceGroupId !== null
        ? String(object.instanceGroupId)
        : "";
    message.managedInstanceIds = (object.managedInstanceIds ?? []).map(
      (e: any) => String(e)
    );
    message.createAnother =
      object.createAnother !== undefined && object.createAnother !== null
        ? Boolean(object.createAnother)
        : false;
    return message;
  },

  toJSON(message: DeleteInstancesRequest): unknown {
    const obj: any = {};
    message.instanceGroupId !== undefined &&
      (obj.instanceGroupId = message.instanceGroupId);
    if (message.managedInstanceIds) {
      obj.managedInstanceIds = message.managedInstanceIds.map((e) => e);
    } else {
      obj.managedInstanceIds = [];
    }
    message.createAnother !== undefined &&
      (obj.createAnother = message.createAnother);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteInstancesRequest>, I>>(
    object: I
  ): DeleteInstancesRequest {
    const message = { ...baseDeleteInstancesRequest } as DeleteInstancesRequest;
    message.instanceGroupId = object.instanceGroupId ?? "";
    message.managedInstanceIds = object.managedInstanceIds?.map((e) => e) || [];
    message.createAnother = object.createAnother ?? false;
    return message;
  },
};

messageTypeRegistry.set(DeleteInstancesRequest.$type, DeleteInstancesRequest);

const baseStopInstancesRequest: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.StopInstancesRequest",
  instanceGroupId: "",
  managedInstanceIds: "",
};

export const StopInstancesRequest = {
  $type: "yandex.cloud.compute.v1.instancegroup.StopInstancesRequest" as const,

  encode(
    message: StopInstancesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
    }
    for (const v of message.managedInstanceIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StopInstancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStopInstancesRequest } as StopInstancesRequest;
    message.managedInstanceIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroupId = reader.string();
          break;
        case 2:
          message.managedInstanceIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StopInstancesRequest {
    const message = { ...baseStopInstancesRequest } as StopInstancesRequest;
    message.instanceGroupId =
      object.instanceGroupId !== undefined && object.instanceGroupId !== null
        ? String(object.instanceGroupId)
        : "";
    message.managedInstanceIds = (object.managedInstanceIds ?? []).map(
      (e: any) => String(e)
    );
    return message;
  },

  toJSON(message: StopInstancesRequest): unknown {
    const obj: any = {};
    message.instanceGroupId !== undefined &&
      (obj.instanceGroupId = message.instanceGroupId);
    if (message.managedInstanceIds) {
      obj.managedInstanceIds = message.managedInstanceIds.map((e) => e);
    } else {
      obj.managedInstanceIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StopInstancesRequest>, I>>(
    object: I
  ): StopInstancesRequest {
    const message = { ...baseStopInstancesRequest } as StopInstancesRequest;
    message.instanceGroupId = object.instanceGroupId ?? "";
    message.managedInstanceIds = object.managedInstanceIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(StopInstancesRequest.$type, StopInstancesRequest);

const baseListInstanceGroupOperationsRequest: object = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupOperationsRequest",
  instanceGroupId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListInstanceGroupOperationsRequest = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupOperationsRequest" as const,

  encode(
    message: ListInstanceGroupOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
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
  ): ListInstanceGroupOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListInstanceGroupOperationsRequest,
    } as ListInstanceGroupOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroupId = reader.string();
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

  fromJSON(object: any): ListInstanceGroupOperationsRequest {
    const message = {
      ...baseListInstanceGroupOperationsRequest,
    } as ListInstanceGroupOperationsRequest;
    message.instanceGroupId =
      object.instanceGroupId !== undefined && object.instanceGroupId !== null
        ? String(object.instanceGroupId)
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

  toJSON(message: ListInstanceGroupOperationsRequest): unknown {
    const obj: any = {};
    message.instanceGroupId !== undefined &&
      (obj.instanceGroupId = message.instanceGroupId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListInstanceGroupOperationsRequest>, I>
  >(object: I): ListInstanceGroupOperationsRequest {
    const message = {
      ...baseListInstanceGroupOperationsRequest,
    } as ListInstanceGroupOperationsRequest;
    message.instanceGroupId = object.instanceGroupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListInstanceGroupOperationsRequest.$type,
  ListInstanceGroupOperationsRequest
);

const baseListInstanceGroupOperationsResponse: object = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupOperationsResponse",
  nextPageToken: "",
};

export const ListInstanceGroupOperationsResponse = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupOperationsResponse" as const,

  encode(
    message: ListInstanceGroupOperationsResponse,
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
  ): ListInstanceGroupOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListInstanceGroupOperationsResponse,
    } as ListInstanceGroupOperationsResponse;
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

  fromJSON(object: any): ListInstanceGroupOperationsResponse {
    const message = {
      ...baseListInstanceGroupOperationsResponse,
    } as ListInstanceGroupOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListInstanceGroupOperationsResponse): unknown {
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
    I extends Exact<DeepPartial<ListInstanceGroupOperationsResponse>, I>
  >(object: I): ListInstanceGroupOperationsResponse {
    const message = {
      ...baseListInstanceGroupOperationsResponse,
    } as ListInstanceGroupOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListInstanceGroupOperationsResponse.$type,
  ListInstanceGroupOperationsResponse
);

const baseListInstanceGroupLogRecordsRequest: object = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupLogRecordsRequest",
  instanceGroupId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListInstanceGroupLogRecordsRequest = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupLogRecordsRequest" as const,

  encode(
    message: ListInstanceGroupLogRecordsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceGroupId !== "") {
      writer.uint32(10).string(message.instanceGroupId);
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
  ): ListInstanceGroupLogRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListInstanceGroupLogRecordsRequest,
    } as ListInstanceGroupLogRecordsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceGroupId = reader.string();
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

  fromJSON(object: any): ListInstanceGroupLogRecordsRequest {
    const message = {
      ...baseListInstanceGroupLogRecordsRequest,
    } as ListInstanceGroupLogRecordsRequest;
    message.instanceGroupId =
      object.instanceGroupId !== undefined && object.instanceGroupId !== null
        ? String(object.instanceGroupId)
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

  toJSON(message: ListInstanceGroupLogRecordsRequest): unknown {
    const obj: any = {};
    message.instanceGroupId !== undefined &&
      (obj.instanceGroupId = message.instanceGroupId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListInstanceGroupLogRecordsRequest>, I>
  >(object: I): ListInstanceGroupLogRecordsRequest {
    const message = {
      ...baseListInstanceGroupLogRecordsRequest,
    } as ListInstanceGroupLogRecordsRequest;
    message.instanceGroupId = object.instanceGroupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListInstanceGroupLogRecordsRequest.$type,
  ListInstanceGroupLogRecordsRequest
);

const baseListInstanceGroupLogRecordsResponse: object = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupLogRecordsResponse",
  nextPageToken: "",
};

export const ListInstanceGroupLogRecordsResponse = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupLogRecordsResponse" as const,

  encode(
    message: ListInstanceGroupLogRecordsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.logRecords) {
      LogRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListInstanceGroupLogRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListInstanceGroupLogRecordsResponse,
    } as ListInstanceGroupLogRecordsResponse;
    message.logRecords = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logRecords.push(LogRecord.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListInstanceGroupLogRecordsResponse {
    const message = {
      ...baseListInstanceGroupLogRecordsResponse,
    } as ListInstanceGroupLogRecordsResponse;
    message.logRecords = (object.logRecords ?? []).map((e: any) =>
      LogRecord.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListInstanceGroupLogRecordsResponse): unknown {
    const obj: any = {};
    if (message.logRecords) {
      obj.logRecords = message.logRecords.map((e) =>
        e ? LogRecord.toJSON(e) : undefined
      );
    } else {
      obj.logRecords = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListInstanceGroupLogRecordsResponse>, I>
  >(object: I): ListInstanceGroupLogRecordsResponse {
    const message = {
      ...baseListInstanceGroupLogRecordsResponse,
    } as ListInstanceGroupLogRecordsResponse;
    message.logRecords =
      object.logRecords?.map((e) => LogRecord.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListInstanceGroupLogRecordsResponse.$type,
  ListInstanceGroupLogRecordsResponse
);

/** A set of methods for managing InstanceGroup resources. */
export const InstanceGroupServiceService = {
  /**
   * Returns the specified InstanceGroup resource.
   *
   * To get the list of available InstanceGroup resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetInstanceGroupRequest) =>
      Buffer.from(GetInstanceGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetInstanceGroupRequest.decode(value),
    responseSerialize: (value: InstanceGroup) =>
      Buffer.from(InstanceGroup.encode(value).finish()),
    responseDeserialize: (value: Buffer) => InstanceGroup.decode(value),
  },
  /** Retrieves the list of InstanceGroup resources in the specified folder. */
  list: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListInstanceGroupsRequest) =>
      Buffer.from(ListInstanceGroupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListInstanceGroupsRequest.decode(value),
    responseSerialize: (value: ListInstanceGroupsResponse) =>
      Buffer.from(ListInstanceGroupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListInstanceGroupsResponse.decode(value),
  },
  /**
   * Creates an instance group in the specified folder.
   * This method starts an operation that can be cancelled by another operation.
   */
  create: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateInstanceGroupRequest) =>
      Buffer.from(CreateInstanceGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateInstanceGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Creates an instance group in the specified folder from a YAML file.
   * This method starts an operation that can be cancelled by another operation.
   */
  createFromYaml: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/CreateFromYaml",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateInstanceGroupFromYamlRequest) =>
      Buffer.from(CreateInstanceGroupFromYamlRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateInstanceGroupFromYamlRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Updates the specified instance group.
   * This method starts an operation that can be cancelled by another operation.
   */
  update: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateInstanceGroupRequest) =>
      Buffer.from(UpdateInstanceGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateInstanceGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Updates the specified instance group from a YAML file.
   * This method starts an operation that can be cancelled by another operation.
   */
  updateFromYaml: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/UpdateFromYaml",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateInstanceGroupFromYamlRequest) =>
      Buffer.from(UpdateInstanceGroupFromYamlRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateInstanceGroupFromYamlRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Stops the specified instance group. */
  stop: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Stop",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StopInstanceGroupRequest) =>
      Buffer.from(StopInstanceGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      StopInstanceGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Performs rolling restart of specified instances for the specified instance group.
   * Rolling restart does restart of instances respecting all group policies.
   */
  rollingRestart: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/RollingRestart",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RollingRestartRequest) =>
      Buffer.from(RollingRestartRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RollingRestartRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Performs rolling recreate of specified instances for the specified instance group.
   * Rolling recreate does recreate of instance VMs respecting all group policies.
   */
  rollingRecreate: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/RollingRecreate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RollingRecreateRequest) =>
      Buffer.from(RollingRecreateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RollingRecreateRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Starts the specified instance group. */
  start: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Start",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartInstanceGroupRequest) =>
      Buffer.from(StartInstanceGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      StartInstanceGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified instance group. */
  delete: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteInstanceGroupRequest) =>
      Buffer.from(DeleteInstanceGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteInstanceGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists instances for the specified instance group. */
  listInstances: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListInstances",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListInstanceGroupInstancesRequest) =>
      Buffer.from(ListInstanceGroupInstancesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListInstanceGroupInstancesRequest.decode(value),
    responseSerialize: (value: ListInstanceGroupInstancesResponse) =>
      Buffer.from(ListInstanceGroupInstancesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListInstanceGroupInstancesResponse.decode(value),
  },
  /** Delete instances from the instance group. */
  deleteInstances: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/DeleteInstances",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteInstancesRequest) =>
      Buffer.from(DeleteInstancesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteInstancesRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Stop instances from the instance group. */
  stopInstances: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/StopInstances",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StopInstancesRequest) =>
      Buffer.from(StopInstancesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StopInstancesRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified instance group. */
  listOperations: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListInstanceGroupOperationsRequest) =>
      Buffer.from(ListInstanceGroupOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListInstanceGroupOperationsRequest.decode(value),
    responseSerialize: (value: ListInstanceGroupOperationsResponse) =>
      Buffer.from(ListInstanceGroupOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListInstanceGroupOperationsResponse.decode(value),
  },
  /** Lists logs for the specified instance group. */
  listLogRecords: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListLogRecords",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListInstanceGroupLogRecordsRequest) =>
      Buffer.from(ListInstanceGroupLogRecordsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListInstanceGroupLogRecordsRequest.decode(value),
    responseSerialize: (value: ListInstanceGroupLogRecordsResponse) =>
      Buffer.from(ListInstanceGroupLogRecordsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListInstanceGroupLogRecordsResponse.decode(value),
  },
  /** Lists existing access bindings for the specified instance group. */
  listAccessBindings: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessBindingsRequest) =>
      Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListAccessBindingsRequest.decode(value),
    responseSerialize: (value: ListAccessBindingsResponse) =>
      Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListAccessBindingsResponse.decode(value),
  },
  /** Sets access bindings for the specified instance group. */
  setAccessBindings: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/SetAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetAccessBindingsRequest) =>
      Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      SetAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates access bindings for the specified instance group. */
  updateAccessBindings: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Resumes all processes regarding management of the specified instance group,
   * i.e. scaling, checking instances' health, auto-healing and updating them.
   */
  resumeProcesses: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ResumeProcesses",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ResumeInstanceGroupProcessesRequest) =>
      Buffer.from(ResumeInstanceGroupProcessesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ResumeInstanceGroupProcessesRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Pauses all processes regarding management of the specified instance group,
   * i.e. scaling, checking instances' health, auto-healing and updating them. Running instances are not stopped.
   */
  pauseProcesses: {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/PauseProcesses",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PauseInstanceGroupProcessesRequest) =>
      Buffer.from(PauseInstanceGroupProcessesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      PauseInstanceGroupProcessesRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface InstanceGroupServiceServer
  extends UntypedServiceImplementation {
  /**
   * Returns the specified InstanceGroup resource.
   *
   * To get the list of available InstanceGroup resources, make a [List] request.
   */
  get: handleUnaryCall<GetInstanceGroupRequest, InstanceGroup>;
  /** Retrieves the list of InstanceGroup resources in the specified folder. */
  list: handleUnaryCall<ListInstanceGroupsRequest, ListInstanceGroupsResponse>;
  /**
   * Creates an instance group in the specified folder.
   * This method starts an operation that can be cancelled by another operation.
   */
  create: handleUnaryCall<CreateInstanceGroupRequest, Operation>;
  /**
   * Creates an instance group in the specified folder from a YAML file.
   * This method starts an operation that can be cancelled by another operation.
   */
  createFromYaml: handleUnaryCall<
    CreateInstanceGroupFromYamlRequest,
    Operation
  >;
  /**
   * Updates the specified instance group.
   * This method starts an operation that can be cancelled by another operation.
   */
  update: handleUnaryCall<UpdateInstanceGroupRequest, Operation>;
  /**
   * Updates the specified instance group from a YAML file.
   * This method starts an operation that can be cancelled by another operation.
   */
  updateFromYaml: handleUnaryCall<
    UpdateInstanceGroupFromYamlRequest,
    Operation
  >;
  /** Stops the specified instance group. */
  stop: handleUnaryCall<StopInstanceGroupRequest, Operation>;
  /**
   * Performs rolling restart of specified instances for the specified instance group.
   * Rolling restart does restart of instances respecting all group policies.
   */
  rollingRestart: handleUnaryCall<RollingRestartRequest, Operation>;
  /**
   * Performs rolling recreate of specified instances for the specified instance group.
   * Rolling recreate does recreate of instance VMs respecting all group policies.
   */
  rollingRecreate: handleUnaryCall<RollingRecreateRequest, Operation>;
  /** Starts the specified instance group. */
  start: handleUnaryCall<StartInstanceGroupRequest, Operation>;
  /** Deletes the specified instance group. */
  delete: handleUnaryCall<DeleteInstanceGroupRequest, Operation>;
  /** Lists instances for the specified instance group. */
  listInstances: handleUnaryCall<
    ListInstanceGroupInstancesRequest,
    ListInstanceGroupInstancesResponse
  >;
  /** Delete instances from the instance group. */
  deleteInstances: handleUnaryCall<DeleteInstancesRequest, Operation>;
  /** Stop instances from the instance group. */
  stopInstances: handleUnaryCall<StopInstancesRequest, Operation>;
  /** Lists operations for the specified instance group. */
  listOperations: handleUnaryCall<
    ListInstanceGroupOperationsRequest,
    ListInstanceGroupOperationsResponse
  >;
  /** Lists logs for the specified instance group. */
  listLogRecords: handleUnaryCall<
    ListInstanceGroupLogRecordsRequest,
    ListInstanceGroupLogRecordsResponse
  >;
  /** Lists existing access bindings for the specified instance group. */
  listAccessBindings: handleUnaryCall<
    ListAccessBindingsRequest,
    ListAccessBindingsResponse
  >;
  /** Sets access bindings for the specified instance group. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the specified instance group. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
  /**
   * Resumes all processes regarding management of the specified instance group,
   * i.e. scaling, checking instances' health, auto-healing and updating them.
   */
  resumeProcesses: handleUnaryCall<
    ResumeInstanceGroupProcessesRequest,
    Operation
  >;
  /**
   * Pauses all processes regarding management of the specified instance group,
   * i.e. scaling, checking instances' health, auto-healing and updating them. Running instances are not stopped.
   */
  pauseProcesses: handleUnaryCall<
    PauseInstanceGroupProcessesRequest,
    Operation
  >;
}

export interface InstanceGroupServiceClient extends Client {
  /**
   * Returns the specified InstanceGroup resource.
   *
   * To get the list of available InstanceGroup resources, make a [List] request.
   */
  get(
    request: GetInstanceGroupRequest,
    callback: (error: ServiceError | null, response: InstanceGroup) => void
  ): ClientUnaryCall;
  get(
    request: GetInstanceGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: InstanceGroup) => void
  ): ClientUnaryCall;
  get(
    request: GetInstanceGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: InstanceGroup) => void
  ): ClientUnaryCall;
  /** Retrieves the list of InstanceGroup resources in the specified folder. */
  list(
    request: ListInstanceGroupsRequest,
    callback: (
      error: ServiceError | null,
      response: ListInstanceGroupsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListInstanceGroupsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListInstanceGroupsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListInstanceGroupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListInstanceGroupsResponse
    ) => void
  ): ClientUnaryCall;
  /**
   * Creates an instance group in the specified folder.
   * This method starts an operation that can be cancelled by another operation.
   */
  create(
    request: CreateInstanceGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateInstanceGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateInstanceGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Creates an instance group in the specified folder from a YAML file.
   * This method starts an operation that can be cancelled by another operation.
   */
  createFromYaml(
    request: CreateInstanceGroupFromYamlRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  createFromYaml(
    request: CreateInstanceGroupFromYamlRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  createFromYaml(
    request: CreateInstanceGroupFromYamlRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Updates the specified instance group.
   * This method starts an operation that can be cancelled by another operation.
   */
  update(
    request: UpdateInstanceGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateInstanceGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateInstanceGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Updates the specified instance group from a YAML file.
   * This method starts an operation that can be cancelled by another operation.
   */
  updateFromYaml(
    request: UpdateInstanceGroupFromYamlRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateFromYaml(
    request: UpdateInstanceGroupFromYamlRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateFromYaml(
    request: UpdateInstanceGroupFromYamlRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Stops the specified instance group. */
  stop(
    request: StopInstanceGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  stop(
    request: StopInstanceGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  stop(
    request: StopInstanceGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Performs rolling restart of specified instances for the specified instance group.
   * Rolling restart does restart of instances respecting all group policies.
   */
  rollingRestart(
    request: RollingRestartRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  rollingRestart(
    request: RollingRestartRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  rollingRestart(
    request: RollingRestartRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Performs rolling recreate of specified instances for the specified instance group.
   * Rolling recreate does recreate of instance VMs respecting all group policies.
   */
  rollingRecreate(
    request: RollingRecreateRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  rollingRecreate(
    request: RollingRecreateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  rollingRecreate(
    request: RollingRecreateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Starts the specified instance group. */
  start(
    request: StartInstanceGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  start(
    request: StartInstanceGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  start(
    request: StartInstanceGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified instance group. */
  delete(
    request: DeleteInstanceGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteInstanceGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteInstanceGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists instances for the specified instance group. */
  listInstances(
    request: ListInstanceGroupInstancesRequest,
    callback: (
      error: ServiceError | null,
      response: ListInstanceGroupInstancesResponse
    ) => void
  ): ClientUnaryCall;
  listInstances(
    request: ListInstanceGroupInstancesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListInstanceGroupInstancesResponse
    ) => void
  ): ClientUnaryCall;
  listInstances(
    request: ListInstanceGroupInstancesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListInstanceGroupInstancesResponse
    ) => void
  ): ClientUnaryCall;
  /** Delete instances from the instance group. */
  deleteInstances(
    request: DeleteInstancesRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteInstances(
    request: DeleteInstancesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteInstances(
    request: DeleteInstancesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Stop instances from the instance group. */
  stopInstances(
    request: StopInstancesRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  stopInstances(
    request: StopInstancesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  stopInstances(
    request: StopInstancesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified instance group. */
  listOperations(
    request: ListInstanceGroupOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListInstanceGroupOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListInstanceGroupOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListInstanceGroupOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListInstanceGroupOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListInstanceGroupOperationsResponse
    ) => void
  ): ClientUnaryCall;
  /** Lists logs for the specified instance group. */
  listLogRecords(
    request: ListInstanceGroupLogRecordsRequest,
    callback: (
      error: ServiceError | null,
      response: ListInstanceGroupLogRecordsResponse
    ) => void
  ): ClientUnaryCall;
  listLogRecords(
    request: ListInstanceGroupLogRecordsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListInstanceGroupLogRecordsResponse
    ) => void
  ): ClientUnaryCall;
  listLogRecords(
    request: ListInstanceGroupLogRecordsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListInstanceGroupLogRecordsResponse
    ) => void
  ): ClientUnaryCall;
  /** Lists existing access bindings for the specified instance group. */
  listAccessBindings(
    request: ListAccessBindingsRequest,
    callback: (
      error: ServiceError | null,
      response: ListAccessBindingsResponse
    ) => void
  ): ClientUnaryCall;
  listAccessBindings(
    request: ListAccessBindingsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListAccessBindingsResponse
    ) => void
  ): ClientUnaryCall;
  listAccessBindings(
    request: ListAccessBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListAccessBindingsResponse
    ) => void
  ): ClientUnaryCall;
  /** Sets access bindings for the specified instance group. */
  setAccessBindings(
    request: SetAccessBindingsRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  setAccessBindings(
    request: SetAccessBindingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  setAccessBindings(
    request: SetAccessBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates access bindings for the specified instance group. */
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Resumes all processes regarding management of the specified instance group,
   * i.e. scaling, checking instances' health, auto-healing and updating them.
   */
  resumeProcesses(
    request: ResumeInstanceGroupProcessesRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  resumeProcesses(
    request: ResumeInstanceGroupProcessesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  resumeProcesses(
    request: ResumeInstanceGroupProcessesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Pauses all processes regarding management of the specified instance group,
   * i.e. scaling, checking instances' health, auto-healing and updating them. Running instances are not stopped.
   */
  pauseProcesses(
    request: PauseInstanceGroupProcessesRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  pauseProcesses(
    request: PauseInstanceGroupProcessesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  pauseProcesses(
    request: PauseInstanceGroupProcessesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const InstanceGroupServiceClient = makeGenericClientConstructor(
  InstanceGroupServiceService,
  "yandex.cloud.compute.v1.instancegroup.InstanceGroupService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): InstanceGroupServiceClient;
  service: typeof InstanceGroupServiceService;
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
