/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../../../google/protobuf/duration";
import { Timestamp } from "../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.compute.v1.instancegroup";

export enum IpVersion {
  IP_VERSION_UNSPECIFIED = 0,
  /** IPV4 - IPv4 address, for example 192.168.0.0. */
  IPV4 = 1,
  /** IPV6 - IPv6 address, not available yet. */
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

export interface InstanceGroup {
  $type: "yandex.cloud.compute.v1.instancegroup.InstanceGroup";
  /** ID of the instance group. */
  id: string;
  /** ID of the folder that the instance group belongs to. */
  folderId: string;
  /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  createdAt?: Date;
  /**
   * Name of the instance group.
   * The name is unique within the folder.
   */
  name: string;
  /** Description of the instance group. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /**
   * Instance template for creating the instance group.
   * For more information, see [Instance Templates](/docs/compute/concepts/instance-groups/instance-template).
   */
  instanceTemplate?: InstanceTemplate;
  /** [Scaling policy](/docs/compute/concepts/instance-groups/scale) of the instance group. */
  scalePolicy?: ScalePolicy;
  /** Deployment policy of the instance group. */
  deployPolicy?: DeployPolicy;
  /** Allocation policy of the instance group by zones and regions. */
  allocationPolicy?: AllocationPolicy;
  /** Status of the Network Load Balancer target group attributed to the instance group. */
  loadBalancerState?: LoadBalancerState;
  /** States of instances for this instance group. */
  managedInstancesState?: ManagedInstancesState;
  /**
   * Settings for balancing load between instances via [Network Load Balancer](/docs/network-load-balancer/concepts)
   * (OSI model layer 3).
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
  /** Status of the instance group. */
  status: InstanceGroup_Status;
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
   */
  applicationLoadBalancerSpec?: ApplicationLoadBalancerSpec;
  /**
   * Status of the Application Load Balancer target group attributed to the instance group.
   *
   * Returned if there is a working load balancer that the target group is connected to.
   */
  applicationLoadBalancerState?: ApplicationLoadBalancerState;
}

export enum InstanceGroup_Status {
  STATUS_UNSPECIFIED = 0,
  /** STARTING - Instance group is being started and will become active soon. */
  STARTING = 1,
  /**
   * ACTIVE - Instance group is active.
   * In this state the group manages its instances and monitors their health,
   * creating, deleting, stopping, updating and starting instances as needed.
   *
   * To stop the instance group, call [yandex.cloud.compute.v1.instancegroup.InstanceGroupService.Stop].
   * To pause the processes in the instance group, i.e. scaling, checking instances' health,
   * auto-healing and updating them, without stopping the instances,
   * call [yandex.cloud.compute.v1.instancegroup.InstanceGroupService.PauseProcesses].
   */
  ACTIVE = 2,
  /**
   * STOPPING - Instance group is being stopped.
   * Group's instances stop receiving traffic from the load balancer (if any) and are then stopped.
   */
  STOPPING = 3,
  /**
   * STOPPED - Instance group is stopped.
   * In this state the group cannot be updated and does not react to any changes made to its instances.
   * To start the instance group, call [yandex.cloud.compute.v1.instancegroup.InstanceGroupService.Start].
   */
  STOPPED = 4,
  /** DELETING - Instance group is being deleted. */
  DELETING = 5,
  /**
   * PAUSED - Instance group is paused.
   * In this state all the processes regarding the group management, i.e. scaling, checking instances' health,
   * auto-healing and updating them, are paused. The instances that were running prior to pausing the group, however,
   * may still be running.
   *
   * To resume the processes in the instance group,
   * call [yandex.cloud.compute.v1.instancegroup.InstanceGroupService.ResumeProcesses].
   * The group status will change to `ACTIVE`.
   */
  PAUSED = 6,
  UNRECOGNIZED = -1,
}

export function instanceGroup_StatusFromJSON(
  object: any
): InstanceGroup_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return InstanceGroup_Status.STATUS_UNSPECIFIED;
    case 1:
    case "STARTING":
      return InstanceGroup_Status.STARTING;
    case 2:
    case "ACTIVE":
      return InstanceGroup_Status.ACTIVE;
    case 3:
    case "STOPPING":
      return InstanceGroup_Status.STOPPING;
    case 4:
    case "STOPPED":
      return InstanceGroup_Status.STOPPED;
    case 5:
    case "DELETING":
      return InstanceGroup_Status.DELETING;
    case 6:
    case "PAUSED":
      return InstanceGroup_Status.PAUSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InstanceGroup_Status.UNRECOGNIZED;
  }
}

export function instanceGroup_StatusToJSON(
  object: InstanceGroup_Status
): string {
  switch (object) {
    case InstanceGroup_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case InstanceGroup_Status.STARTING:
      return "STARTING";
    case InstanceGroup_Status.ACTIVE:
      return "ACTIVE";
    case InstanceGroup_Status.STOPPING:
      return "STOPPING";
    case InstanceGroup_Status.STOPPED:
      return "STOPPED";
    case InstanceGroup_Status.DELETING:
      return "DELETING";
    case InstanceGroup_Status.PAUSED:
      return "PAUSED";
    default:
      return "UNKNOWN";
  }
}

export interface InstanceGroup_LabelsEntry {
  $type: "yandex.cloud.compute.v1.instancegroup.InstanceGroup.LabelsEntry";
  key: string;
  value: string;
}

export interface ApplicationLoadBalancerState {
  $type: "yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState";
  /** ID of the Application Load Balancer target group attributed to the instance group. */
  targetGroupId: string;
  /** Status message of the target group. */
  statusMessage: string;
}

export interface Variable {
  $type: "yandex.cloud.compute.v1.instancegroup.Variable";
  key: string;
  value: string;
}

export interface LoadBalancerState {
  $type: "yandex.cloud.compute.v1.instancegroup.LoadBalancerState";
  /** ID of the Network Load Balancer target group attributed to the instance group. */
  targetGroupId: string;
  /** Status message of the target group. */
  statusMessage: string;
}

export interface ManagedInstancesState {
  $type: "yandex.cloud.compute.v1.instancegroup.ManagedInstancesState";
  /** Target number of instances for this instance group. */
  targetSize: number;
  /** The number of running instances that match the current instance template. For more information, see [ManagedInstance.Status.RUNNING_ACTUAL]. */
  runningActualCount: number;
  /** The number of running instances that does not match the current instance template. For more information, see [ManagedInstance.Status.RUNNING_OUTDATED]. */
  runningOutdatedCount: number;
  /** The number of instances in flight (for example, updating, starting, deleting). For more information, see [ManagedInstance.Status]. */
  processingCount: number;
}

export interface ManagedInstancesState_Statuses {
  $type: "yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses";
  /** Instance is being created. */
  creating: number;
  /** Instance is being started. */
  starting: number;
  /** Instance is being opened to receive traffic. */
  opening: number;
  /** Instance is being warmed. */
  warming: number;
  /** Instance is running normally. */
  running: number;
  /** Instance is being closed to traffic. */
  closing: number;
  /** Instance is being stopped. */
  stopping: number;
  /** Instance is being updated. */
  updating: number;
  /** Instance is being deleted. */
  deleting: number;
  /** Instance failed and needs to be recreated. */
  failed: number;
}

export interface ScalePolicy {
  $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy";
  /** [Manual scaling policy](/docs/compute/concepts/instance-groups/scale#fixed-policy) of the instance group. */
  fixedScale?: ScalePolicy_FixedScale | undefined;
  /** [Automatic scaling policy](/docs/compute/concepts/instance-groups/scale#auto-scale) of the instance group. */
  autoScale?: ScalePolicy_AutoScale | undefined;
  /** Test spec for [automatic scaling policy](/docs/compute/concepts/instance-groups/scale#auto-scale) of the instance group. */
  testAutoScale?: ScalePolicy_AutoScale;
}

export interface ScalePolicy_AutoScale {
  $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale";
  /** Lower limit for instance count in each zone. */
  minZoneSize: number;
  /**
   * Upper limit for total instance count (across all zones).
   * 0 means maximum limit = 100.
   */
  maxSize: number;
  /**
   * Time in seconds allotted for averaging metrics.
   * 1 minute by default.
   */
  measurementDuration?: Duration;
  /**
   * The warmup time of the instance in seconds. During this time,
   * traffic is sent to the instance, but instance metrics are not collected.
   */
  warmupDuration?: Duration;
  /**
   * Minimum amount of time in seconds allotted for monitoring before
   * Instance Groups can reduce the number of instances in the group.
   * During this time, the group size doesn't decrease, even if the new metric values
   * indicate that it should.
   */
  stabilizationDuration?: Duration;
  /** Target group size. */
  initialSize: number;
  /**
   * Defines an autoscaling rule based on the average CPU utilization of the instance group.
   *
   * If more than one rule is specified, e.g. CPU utilization and one or more Monitoring metrics ([custom_rules]),
   * the size of the instance group will be equal to the maximum of sizes calculated according to each metric.
   */
  cpuUtilizationRule?: ScalePolicy_CpuUtilizationRule;
  /**
   * Defines an autoscaling rule based on a [custom metric](/docs/monitoring/operations/metric/add) from Monitoring.
   *
   * If more than one rule is specified, e.g. CPU utilization ([cpu_utilization_rule]) and one or more Monitoring
   * metrics, the size of the instance group will be equal to the maximum of sizes calculated according to each metric.
   */
  customRules: ScalePolicy_CustomRule[];
  /** Autoscaling type. */
  autoScaleType: ScalePolicy_AutoScale_AutoScaleType;
}

export enum ScalePolicy_AutoScale_AutoScaleType {
  AUTO_SCALE_TYPE_UNSPECIFIED = 0,
  /** ZONAL - Scale each zone independently. This is the default. */
  ZONAL = 1,
  /** REGIONAL - Scale group as a whole. */
  REGIONAL = 2,
  UNRECOGNIZED = -1,
}

export function scalePolicy_AutoScale_AutoScaleTypeFromJSON(
  object: any
): ScalePolicy_AutoScale_AutoScaleType {
  switch (object) {
    case 0:
    case "AUTO_SCALE_TYPE_UNSPECIFIED":
      return ScalePolicy_AutoScale_AutoScaleType.AUTO_SCALE_TYPE_UNSPECIFIED;
    case 1:
    case "ZONAL":
      return ScalePolicy_AutoScale_AutoScaleType.ZONAL;
    case 2:
    case "REGIONAL":
      return ScalePolicy_AutoScale_AutoScaleType.REGIONAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ScalePolicy_AutoScale_AutoScaleType.UNRECOGNIZED;
  }
}

export function scalePolicy_AutoScale_AutoScaleTypeToJSON(
  object: ScalePolicy_AutoScale_AutoScaleType
): string {
  switch (object) {
    case ScalePolicy_AutoScale_AutoScaleType.AUTO_SCALE_TYPE_UNSPECIFIED:
      return "AUTO_SCALE_TYPE_UNSPECIFIED";
    case ScalePolicy_AutoScale_AutoScaleType.ZONAL:
      return "ZONAL";
    case ScalePolicy_AutoScale_AutoScaleType.REGIONAL:
      return "REGIONAL";
    default:
      return "UNKNOWN";
  }
}

export interface ScalePolicy_CpuUtilizationRule {
  $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule";
  /** Target CPU utilization level. Instance Groups maintains this level for each availability zone. */
  utilizationTarget: number;
}

export interface ScalePolicy_CustomRule {
  $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule";
  /**
   * Custom metric rule type. This field affects which label from
   * the custom metric should be used: `zone_id` or `instance_id`.
   */
  ruleType: ScalePolicy_CustomRule_RuleType;
  /** Type of custom metric. This field affects how Instance Groups calculates the average metric value. */
  metricType: ScalePolicy_CustomRule_MetricType;
  /** Name of custom metric in Monitoring that should be used for scaling. */
  metricName: string;
  /** Labels of custom metric in Monitoring that should be used for scaling. */
  labels: { [key: string]: string };
  /** Target value for the custom metric. Instance Groups maintains this level for each availability zone. */
  target: number;
  /** Folder id of custom metric in Monitoring that should be used for scaling. */
  folderId: string;
  /** Service of custom metric in Monitoring that should be used for scaling. */
  service: string;
}

export enum ScalePolicy_CustomRule_RuleType {
  RULE_TYPE_UNSPECIFIED = 0,
  /**
   * UTILIZATION - This type means that the metric applies to one instance.
   * First, Instance Groups calculates the average metric value for each instance,
   * then averages the values for instances in one availability zone or in whole group depends on autoscaling type.
   * This type of metric must have the `instance_id` label.
   */
  UTILIZATION = 1,
  /**
   * WORKLOAD - This type means that the metric applies to instances in one availability zone or to whole group depends on autoscaling type.
   * This type of metric must have the `zone_id` label if ZONAL autoscaling type is chosen.
   */
  WORKLOAD = 2,
  UNRECOGNIZED = -1,
}

export function scalePolicy_CustomRule_RuleTypeFromJSON(
  object: any
): ScalePolicy_CustomRule_RuleType {
  switch (object) {
    case 0:
    case "RULE_TYPE_UNSPECIFIED":
      return ScalePolicy_CustomRule_RuleType.RULE_TYPE_UNSPECIFIED;
    case 1:
    case "UTILIZATION":
      return ScalePolicy_CustomRule_RuleType.UTILIZATION;
    case 2:
    case "WORKLOAD":
      return ScalePolicy_CustomRule_RuleType.WORKLOAD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ScalePolicy_CustomRule_RuleType.UNRECOGNIZED;
  }
}

export function scalePolicy_CustomRule_RuleTypeToJSON(
  object: ScalePolicy_CustomRule_RuleType
): string {
  switch (object) {
    case ScalePolicy_CustomRule_RuleType.RULE_TYPE_UNSPECIFIED:
      return "RULE_TYPE_UNSPECIFIED";
    case ScalePolicy_CustomRule_RuleType.UTILIZATION:
      return "UTILIZATION";
    case ScalePolicy_CustomRule_RuleType.WORKLOAD:
      return "WORKLOAD";
    default:
      return "UNKNOWN";
  }
}

export enum ScalePolicy_CustomRule_MetricType {
  METRIC_TYPE_UNSPECIFIED = 0,
  /**
   * GAUGE - This type is used for metrics that show the metric value at a certain point in time,
   * such as requests per second to the server on an instance.
   *
   * Instance Groups calculates the average metric value for the period
   * specified in the [AutoScale.measurement_duration] field.
   */
  GAUGE = 1,
  /**
   * COUNTER - This type is used for metrics that monotonically increase over time,
   * such as the total number of requests to the server on an instance.
   *
   * Instance Groups calculates the average value increase for the period
   * specified in the [AutoScale.measurement_duration] field.
   */
  COUNTER = 2,
  UNRECOGNIZED = -1,
}

export function scalePolicy_CustomRule_MetricTypeFromJSON(
  object: any
): ScalePolicy_CustomRule_MetricType {
  switch (object) {
    case 0:
    case "METRIC_TYPE_UNSPECIFIED":
      return ScalePolicy_CustomRule_MetricType.METRIC_TYPE_UNSPECIFIED;
    case 1:
    case "GAUGE":
      return ScalePolicy_CustomRule_MetricType.GAUGE;
    case 2:
    case "COUNTER":
      return ScalePolicy_CustomRule_MetricType.COUNTER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ScalePolicy_CustomRule_MetricType.UNRECOGNIZED;
  }
}

export function scalePolicy_CustomRule_MetricTypeToJSON(
  object: ScalePolicy_CustomRule_MetricType
): string {
  switch (object) {
    case ScalePolicy_CustomRule_MetricType.METRIC_TYPE_UNSPECIFIED:
      return "METRIC_TYPE_UNSPECIFIED";
    case ScalePolicy_CustomRule_MetricType.GAUGE:
      return "GAUGE";
    case ScalePolicy_CustomRule_MetricType.COUNTER:
      return "COUNTER";
    default:
      return "UNKNOWN";
  }
}

export interface ScalePolicy_CustomRule_LabelsEntry {
  $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.LabelsEntry";
  key: string;
  value: string;
}

export interface ScalePolicy_FixedScale {
  $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale";
  /** Number of instances in the instance group. */
  size: number;
}

export interface DeployPolicy {
  $type: "yandex.cloud.compute.v1.instancegroup.DeployPolicy";
  /**
   * The maximum number of running instances that can be taken offline (i.e., stopped or deleted) at the same time
   * during the update process.
   * If [max_expansion] is not specified or set to zero, [max_unavailable] must be set to a non-zero value.
   */
  maxUnavailable: number;
  /**
   * The maximum number of instances that can be deleted at the same time.
   *
   * The value 0 is any number of virtual machines within the allowed values.
   */
  maxDeleting: number;
  /**
   * The maximum number of instances that can be created at the same time.
   *
   * The value 0 is any number of virtual machines within the allowed values.
   */
  maxCreating: number;
  /**
   * The maximum number of instances that can be temporarily allocated above the group's target size
   * during the update process.
   * If [max_unavailable] is not specified or set to zero, [max_expansion] must be set to a non-zero value.
   */
  maxExpansion: number;
  /**
   * Instance startup duration.
   * Instance will be considered up and running (and start receiving traffic) only after startup_duration
   * has elapsed and all health checks are passed.
   * See [yandex.cloud.compute.v1.instancegroup.ManagedInstance.Status] for more information.
   */
  startupDuration?: Duration;
  /** Affects the lifecycle of the instance during deployment. */
  strategy: DeployPolicy_Strategy;
}

export enum DeployPolicy_Strategy {
  STRATEGY_UNSPECIFIED = 0,
  /** PROACTIVE - Instance Groups can forcefully stop a running instance. This is the default. */
  PROACTIVE = 1,
  /**
   * OPPORTUNISTIC - Instance Groups does not stop a running instance.
   * Instead, it will wait until the instance stops itself or becomes unhealthy.
   */
  OPPORTUNISTIC = 2,
  UNRECOGNIZED = -1,
}

export function deployPolicy_StrategyFromJSON(
  object: any
): DeployPolicy_Strategy {
  switch (object) {
    case 0:
    case "STRATEGY_UNSPECIFIED":
      return DeployPolicy_Strategy.STRATEGY_UNSPECIFIED;
    case 1:
    case "PROACTIVE":
      return DeployPolicy_Strategy.PROACTIVE;
    case 2:
    case "OPPORTUNISTIC":
      return DeployPolicy_Strategy.OPPORTUNISTIC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DeployPolicy_Strategy.UNRECOGNIZED;
  }
}

export function deployPolicy_StrategyToJSON(
  object: DeployPolicy_Strategy
): string {
  switch (object) {
    case DeployPolicy_Strategy.STRATEGY_UNSPECIFIED:
      return "STRATEGY_UNSPECIFIED";
    case DeployPolicy_Strategy.PROACTIVE:
      return "PROACTIVE";
    case DeployPolicy_Strategy.OPPORTUNISTIC:
      return "OPPORTUNISTIC";
    default:
      return "UNKNOWN";
  }
}

export interface AllocationPolicy {
  $type: "yandex.cloud.compute.v1.instancegroup.AllocationPolicy";
  /** List of availability zones. */
  zones: AllocationPolicy_Zone[];
}

export interface AllocationPolicy_Zone {
  $type: "yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone";
  /** ID of the availability zone where the instance resides. */
  zoneId: string;
  /**
   * Each instance in a zone will be associated with exactly one of a tag from a pool below.
   * All specified tags must be unique across the whole group not only the zone.
   * It is guaranteed that during whole deploy only tags from prefix of the specified list will be used.
   * It is possible to use tag associated with instance in templating via {instance.tag}.
   */
  instanceTagsPool: string[];
}

export interface InstanceTemplate {
  $type: "yandex.cloud.compute.v1.instancegroup.InstanceTemplate";
  /** Description of the instance template. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /**
   * ID of the hardware platform configuration for the instance.
   * Platforms allows you to create various types of instances: with a large amount of memory,
   * with a large number of cores, with a burstable performance.
   * For more information, see [Platforms](/docs/compute/concepts/vm-platforms).
   */
  platformId: string;
  /** Computing resources of the instance such as the amount of memory and number of cores. */
  resourcesSpec?: ResourcesSpec;
  /**
   * The metadata `key:value` pairs assigned to this instance template. This includes custom metadata and predefined keys.
   *
   * Metadata values may contain one of the supported placeholders:
   *   {instance_group.id}
   *   {instance.short_id}
   *   {instance.index}
   *   {instance.index_in_zone}
   *   {instance.zone_id}
   * InstanceGroup and Instance labels may be copied to metadata following way:
   *   {instance_group.labels.some_label_key}
   *   {instance.labels.another_label_key}
   * These placeholders will be substituted for each created instance anywhere in the value text.
   * In the rare case the value requires to contain this placeholder explicitly,
   * it must be escaped with double brackets, in example {instance.index}.
   *
   * For example, you may use the metadata in order to provide your public SSH key to the instance.
   * For more information, see [Metadata](/docs/compute/concepts/vm-metadata).
   */
  metadata: { [key: string]: string };
  /** Boot disk specification that will be attached to the instance. */
  bootDiskSpec?: AttachedDiskSpec;
  /** Array of secondary disks that will be attached to the instance. */
  secondaryDiskSpecs: AttachedDiskSpec[];
  /** Array of network interfaces that will be attached to the instance. */
  networkInterfaceSpecs: NetworkInterfaceSpec[];
  /** Scheduling policy for the instance. */
  schedulingPolicy?: SchedulingPolicy;
  /** Service account ID for the instance. */
  serviceAccountId: string;
  /** Network settings for the instance. */
  networkSettings?: NetworkSettings;
  /**
   * Name of the instance.
   * In order to be unique it must contain at least on of instance unique placeholders:
   *   {instance.short_id}
   *   {instance.index}
   *   combination of {instance.zone_id} and {instance.index_in_zone}
   * Example: my-instance-{instance.index}
   * If not set, default is used: {instance_group.id}-{instance.short_id}
   * It may also contain another placeholders, see metadata doc for full list.
   */
  name: string;
  /**
   * Host name for the instance.
   * This field is used to generate the [yandex.cloud.compute.v1.Instance.fqdn] value.
   * The host name must be unique within the network and region.
   * If not specified, the host name will be equal to [yandex.cloud.compute.v1.Instance.id] of the instance
   * and FQDN will be `<id>.auto.internal`. Otherwise FQDN will be `<hostname>.<region_id>.internal`.
   *
   * In order to be unique it must contain at least on of instance unique placeholders:
   *   {instance.short_id}
   *   {instance.index}
   *   combination of {instance.zone_id} and {instance.index_in_zone}
   * Example: my-instance-{instance.index}
   * If not set, `name` value will be used
   * It may also contain another placeholders, see metadata doc for full list.
   */
  hostname: string;
  /** Placement Group */
  placementPolicy?: PlacementPolicy;
  /**
   * Array of filesystems to attach to the instance.
   *
   * The filesystems must reside in the same availability zone as the instance.
   *
   * To use the instance with an attached filesystem, the latter must be mounted.
   * For details, see [documentation](/docs/compute/operations/filesystem/attach-to-vm).
   */
  filesystemSpecs: AttachedFilesystemSpec[];
}

export interface InstanceTemplate_LabelsEntry {
  $type: "yandex.cloud.compute.v1.instancegroup.InstanceTemplate.LabelsEntry";
  key: string;
  value: string;
}

export interface InstanceTemplate_MetadataEntry {
  $type: "yandex.cloud.compute.v1.instancegroup.InstanceTemplate.MetadataEntry";
  key: string;
  value: string;
}

export interface AttachedFilesystemSpec {
  $type: "yandex.cloud.compute.v1.instancegroup.AttachedFilesystemSpec";
  /** Mode of access to the filesystem that should be attached. */
  mode: AttachedFilesystemSpec_Mode;
  /**
   * Name of the device representing the filesystem on the instance.
   *
   * The name should be used for referencing the filesystem from within the instance
   * when it's being mounted, resized etc.
   *
   * If not specified, a random value will be generated.
   */
  deviceName: string;
  /** ID of the filesystem that should be attached. */
  filesystemId: string;
}

export enum AttachedFilesystemSpec_Mode {
  MODE_UNSPECIFIED = 0,
  /** READ_ONLY - Read-only access. */
  READ_ONLY = 1,
  /** READ_WRITE - Read/Write access. Default value. */
  READ_WRITE = 2,
  UNRECOGNIZED = -1,
}

export function attachedFilesystemSpec_ModeFromJSON(
  object: any
): AttachedFilesystemSpec_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return AttachedFilesystemSpec_Mode.MODE_UNSPECIFIED;
    case 1:
    case "READ_ONLY":
      return AttachedFilesystemSpec_Mode.READ_ONLY;
    case 2:
    case "READ_WRITE":
      return AttachedFilesystemSpec_Mode.READ_WRITE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AttachedFilesystemSpec_Mode.UNRECOGNIZED;
  }
}

export function attachedFilesystemSpec_ModeToJSON(
  object: AttachedFilesystemSpec_Mode
): string {
  switch (object) {
    case AttachedFilesystemSpec_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case AttachedFilesystemSpec_Mode.READ_ONLY:
      return "READ_ONLY";
    case AttachedFilesystemSpec_Mode.READ_WRITE:
      return "READ_WRITE";
    default:
      return "UNKNOWN";
  }
}

export interface PlacementPolicy {
  $type: "yandex.cloud.compute.v1.instancegroup.PlacementPolicy";
  /** Identifier of placement group */
  placementGroupId: string;
  /** List of affinity rules. Scheduler will attempt to allocate instances according to order of rules. */
  hostAffinityRules: PlacementPolicy_HostAffinityRule[];
}

/** Affinity definition */
export interface PlacementPolicy_HostAffinityRule {
  $type: "yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule";
  /** Affinity label or one of reserved values - 'yc.hostId', 'yc.hostGroupId' */
  key: string;
  /** Include or exclude action */
  op: PlacementPolicy_HostAffinityRule_Operator;
  /** Affinity value or host ID or host group ID */
  values: string[];
}

export enum PlacementPolicy_HostAffinityRule_Operator {
  OPERATOR_UNSPECIFIED = 0,
  IN = 1,
  NOT_IN = 2,
  UNRECOGNIZED = -1,
}

export function placementPolicy_HostAffinityRule_OperatorFromJSON(
  object: any
): PlacementPolicy_HostAffinityRule_Operator {
  switch (object) {
    case 0:
    case "OPERATOR_UNSPECIFIED":
      return PlacementPolicy_HostAffinityRule_Operator.OPERATOR_UNSPECIFIED;
    case 1:
    case "IN":
      return PlacementPolicy_HostAffinityRule_Operator.IN;
    case 2:
    case "NOT_IN":
      return PlacementPolicy_HostAffinityRule_Operator.NOT_IN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PlacementPolicy_HostAffinityRule_Operator.UNRECOGNIZED;
  }
}

export function placementPolicy_HostAffinityRule_OperatorToJSON(
  object: PlacementPolicy_HostAffinityRule_Operator
): string {
  switch (object) {
    case PlacementPolicy_HostAffinityRule_Operator.OPERATOR_UNSPECIFIED:
      return "OPERATOR_UNSPECIFIED";
    case PlacementPolicy_HostAffinityRule_Operator.IN:
      return "IN";
    case PlacementPolicy_HostAffinityRule_Operator.NOT_IN:
      return "NOT_IN";
    default:
      return "UNKNOWN";
  }
}

export interface ResourcesSpec {
  $type: "yandex.cloud.compute.v1.instancegroup.ResourcesSpec";
  /** The amount of memory available to the instance, specified in bytes. */
  memory: number;
  /** The number of cores available to the instance. */
  cores: number;
  /**
   * Baseline level of CPU performance with the ability to burst performance above that baseline level.
   * This field sets baseline performance for each core.
   */
  coreFraction: number;
  /** The number of GPUs available to the instance. */
  gpus: number;
}

export interface AttachedDiskSpec {
  $type: "yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec";
  /** Access mode to the Disk resource. */
  mode: AttachedDiskSpec_Mode;
  /**
   * Serial number that is reflected in the /dev/disk/by-id/ tree
   * of a Linux operating system running within the instance.
   *
   * This value can be used to reference the device for mounting, resizing, and so on, from within the instance.
   */
  deviceName: string;
  /**
   * oneof disk_spec or disk_id
   * Disk specification that is attached to the instance. For more information, see [Disks](/docs/compute/concepts/disk).
   */
  diskSpec?: AttachedDiskSpec_DiskSpec;
  /** Set to use an existing disk. To set use variables. */
  diskId: string;
  /** When set can be later used to change DiskSpec of actual disk. */
  name: string;
}

export enum AttachedDiskSpec_Mode {
  MODE_UNSPECIFIED = 0,
  /** READ_ONLY - Read-only access. */
  READ_ONLY = 1,
  /** READ_WRITE - Read/Write access. */
  READ_WRITE = 2,
  UNRECOGNIZED = -1,
}

export function attachedDiskSpec_ModeFromJSON(
  object: any
): AttachedDiskSpec_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return AttachedDiskSpec_Mode.MODE_UNSPECIFIED;
    case 1:
    case "READ_ONLY":
      return AttachedDiskSpec_Mode.READ_ONLY;
    case 2:
    case "READ_WRITE":
      return AttachedDiskSpec_Mode.READ_WRITE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AttachedDiskSpec_Mode.UNRECOGNIZED;
  }
}

export function attachedDiskSpec_ModeToJSON(
  object: AttachedDiskSpec_Mode
): string {
  switch (object) {
    case AttachedDiskSpec_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case AttachedDiskSpec_Mode.READ_ONLY:
      return "READ_ONLY";
    case AttachedDiskSpec_Mode.READ_WRITE:
      return "READ_WRITE";
    default:
      return "UNKNOWN";
  }
}

export interface AttachedDiskSpec_DiskSpec {
  $type: "yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec";
  /** Description of the disk. */
  description: string;
  /** ID of the disk type. */
  typeId: string;
  /** Size of the disk, specified in bytes. */
  size: number;
  /** ID of the image that will be used for disk creation. */
  imageId: string | undefined;
  /** ID of the snapshot that will be used for disk creation. */
  snapshotId: string | undefined;
  /**
   * When set to true, disk will not be deleted even after managed instance is deleted.
   * It will be a user's responsibility to delete such disks.
   */
  preserveAfterInstanceDelete: boolean;
}

export interface NetworkInterfaceSpec {
  $type: "yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec";
  /** ID of the network. */
  networkId: string;
  /** IDs of the subnets. */
  subnetIds: string[];
  /** Primary IPv4 address that is assigned to the instance for this network interface. */
  primaryV4AddressSpec?: PrimaryAddressSpec;
  /** Primary IPv6 address that is assigned to the instance for this network interface. IPv6 not available yet. */
  primaryV6AddressSpec?: PrimaryAddressSpec;
  /** IDs of security groups. */
  securityGroupIds: string[];
}

export interface PrimaryAddressSpec {
  $type: "yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec";
  /**
   * An external IP address configuration.
   * If not specified, then this managed instance will have no external internet access.
   */
  oneToOneNatSpec?: OneToOneNatSpec;
  /** Internal DNS configuration */
  dnsRecordSpecs: DnsRecordSpec[];
  /** Optional. Manual set static internal IP. To set use variables. */
  address: string;
}

export interface OneToOneNatSpec {
  $type: "yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec";
  /** IP version for the public IP address. */
  ipVersion: IpVersion;
  /** Manual set static public IP. To set use variables. (optional) */
  address: string;
  /** External DNS configuration */
  dnsRecordSpecs: DnsRecordSpec[];
}

export interface DnsRecordSpec {
  $type: "yandex.cloud.compute.v1.instancegroup.DnsRecordSpec";
  /** FQDN (required) */
  fqdn: string;
  /** DNS zone id (optional, if not set, private zone used) */
  dnsZoneId: string;
  /** DNS record ttl, values in 0-86400 (optional) */
  ttl: number;
  /** When set to true, also create PTR DNS record (optional) */
  ptr: boolean;
}

export interface SchedulingPolicy {
  $type: "yandex.cloud.compute.v1.instancegroup.SchedulingPolicy";
  /**
   * Preemptible instances are stopped at least once every 24 hours, and can be stopped at any time
   * if their resources are needed by Compute.
   * For more information, see [Preemptible Virtual Machines](/docs/compute/concepts/preemptible-vm).
   */
  preemptible: boolean;
}

export interface NetworkSettings {
  $type: "yandex.cloud.compute.v1.instancegroup.NetworkSettings";
  /** Type of instance network. */
  type: NetworkSettings_Type;
}

export enum NetworkSettings_Type {
  TYPE_UNSPECIFIED = 0,
  STANDARD = 1,
  SOFTWARE_ACCELERATED = 2,
  HARDWARE_ACCELERATED = 3,
  UNRECOGNIZED = -1,
}

export function networkSettings_TypeFromJSON(
  object: any
): NetworkSettings_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return NetworkSettings_Type.TYPE_UNSPECIFIED;
    case 1:
    case "STANDARD":
      return NetworkSettings_Type.STANDARD;
    case 2:
    case "SOFTWARE_ACCELERATED":
      return NetworkSettings_Type.SOFTWARE_ACCELERATED;
    case 3:
    case "HARDWARE_ACCELERATED":
      return NetworkSettings_Type.HARDWARE_ACCELERATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NetworkSettings_Type.UNRECOGNIZED;
  }
}

export function networkSettings_TypeToJSON(
  object: NetworkSettings_Type
): string {
  switch (object) {
    case NetworkSettings_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case NetworkSettings_Type.STANDARD:
      return "STANDARD";
    case NetworkSettings_Type.SOFTWARE_ACCELERATED:
      return "SOFTWARE_ACCELERATED";
    case NetworkSettings_Type.HARDWARE_ACCELERATED:
      return "HARDWARE_ACCELERATED";
    default:
      return "UNKNOWN";
  }
}

export interface LoadBalancerSpec {
  $type: "yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec";
  /** Specification of the target group that the instance group will be added to. For more information, see [Target groups and resources](/docs/network-load-balancer/concepts/target-resources). */
  targetGroupSpec?: TargetGroupSpec;
  /**
   * Timeout for waiting for the VM to be checked by the load balancer. If the timeout is exceeded,
   * the VM will be turned off based on the deployment policy. Specified in seconds.
   */
  maxOpeningTrafficDuration?: Duration;
  /** Do not wait load balancer health checks. */
  ignoreHealthChecks: boolean;
}

export interface TargetGroupSpec {
  $type: "yandex.cloud.compute.v1.instancegroup.TargetGroupSpec";
  /** Name of the target group. */
  name: string;
  /** Description of the target group. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
}

export interface TargetGroupSpec_LabelsEntry {
  $type: "yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.LabelsEntry";
  key: string;
  value: string;
}

export interface ApplicationLoadBalancerSpec {
  $type: "yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec";
  /** Basic properties of the Application Load Balancer target group attributed to the instance group. */
  targetGroupSpec?: ApplicationTargetGroupSpec;
  /**
   * Timeout for waiting for the VM to be checked by the load balancer. If the timeout is exceeded,
   * the VM will be turned off based on the deployment policy. Specified in seconds.
   */
  maxOpeningTrafficDuration?: Duration;
  /** Do not wait load balancer health checks. */
  ignoreHealthChecks: boolean;
}

export interface ApplicationTargetGroupSpec {
  $type: "yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec";
  /** Name of the target group. */
  name: string;
  /** Description of the target group. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
}

export interface ApplicationTargetGroupSpec_LabelsEntry {
  $type: "yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.LabelsEntry";
  key: string;
  value: string;
}

export interface HealthChecksSpec {
  $type: "yandex.cloud.compute.v1.instancegroup.HealthChecksSpec";
  /** Health checking specification. For more information, see [Health check](/docs/network-load-balancer/concepts/health-check). */
  healthCheckSpecs: HealthCheckSpec[];
  /**
   * Timeout for waiting for the VM to become healthy. If the timeout is exceeded,
   * the VM will be turned off based on the deployment policy. Specified in seconds.
   */
  maxCheckingHealthDuration?: Duration;
}

export interface HealthCheckSpec {
  $type: "yandex.cloud.compute.v1.instancegroup.HealthCheckSpec";
  /** The interval between health checks. The default is 2 seconds. */
  interval?: Duration;
  /** Timeout for the managed instance to return a response for the health check. The default is 1 second. */
  timeout?: Duration;
  /** The number of failed health checks for the managed instance to be considered unhealthy. The default (0) is 2. */
  unhealthyThreshold: number;
  /** The number of successful health checks required in order for the managed instance to be considered healthy. The default (0) is 2. */
  healthyThreshold: number;
  /** Configuration options for a TCP health check. */
  tcpOptions?: HealthCheckSpec_TcpOptions | undefined;
  /** Configuration options for an HTTP health check. */
  httpOptions?: HealthCheckSpec_HttpOptions | undefined;
}

export interface HealthCheckSpec_TcpOptions {
  $type: "yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions";
  /** Port to use for TCP health checks. */
  port: number;
}

export interface HealthCheckSpec_HttpOptions {
  $type: "yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions";
  /** Port to use for HTTP health checks. */
  port: number;
  /** URL path to set for health checking requests. */
  path: string;
}

/** A ManagedInstance resource. For more information, see [Instance Groups Concepts](/docs/compute/concepts/instance-groups/). */
export interface ManagedInstance {
  $type: "yandex.cloud.compute.v1.instancegroup.ManagedInstance";
  /** ID of the managed instance. */
  id: string;
  /** Status of the managed instance. */
  status: ManagedInstance_Status;
  /** ID of the instance. */
  instanceId: string;
  /** Fully Qualified Domain Name. */
  fqdn: string;
  /** The name of the managed instance. */
  name: string;
  /** Status message for the managed instance. */
  statusMessage: string;
  /** ID of the availability zone where the instance resides. */
  zoneId: string;
  /** Array of network interfaces that are attached to the managed instance. */
  networkInterfaces: NetworkInterface[];
  /** The timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format when the status of the managed instance was last changed. */
  statusChangedAt?: Date;
  /** Managed instance tag. */
  instanceTag: string;
}

export enum ManagedInstance_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING_INSTANCE - Instance is being created. */
  CREATING_INSTANCE = 11,
  /** UPDATING_INSTANCE - Instance is being updated. */
  UPDATING_INSTANCE = 12,
  /** DELETING_INSTANCE - Instance is being deleted. */
  DELETING_INSTANCE = 13,
  /** STARTING_INSTANCE - Instance is being started. */
  STARTING_INSTANCE = 14,
  /** STOPPING_INSTANCE - Instance is being stopped. */
  STOPPING_INSTANCE = 15,
  /** AWAITING_STARTUP_DURATION - Instance has been created successfully, but startup duration has not elapsed yet. */
  AWAITING_STARTUP_DURATION = 16,
  /** CHECKING_HEALTH - Instance has been created successfully and startup duration has elapsed, but health checks have not passed yet and the managed instance is not ready to receive traffic. */
  CHECKING_HEALTH = 17,
  /** OPENING_TRAFFIC - Instance Groups is initiating health checks and routing traffic to the instances. */
  OPENING_TRAFFIC = 18,
  /** AWAITING_WARMUP_DURATION - Instance is now receiving traffic, but warmup duration has not elapsed yet. */
  AWAITING_WARMUP_DURATION = 19,
  /** CLOSING_TRAFFIC - Instance Groups has initiated the process of stopping routing traffic to the instances. */
  CLOSING_TRAFFIC = 20,
  /** RUNNING_ACTUAL - Instance is running normally and its attributes match the current InstanceTemplate. */
  RUNNING_ACTUAL = 21,
  /**
   * RUNNING_OUTDATED - Instance is running normally, but its attributes do not match the current InstanceTemplate.
   * It will be updated, recreated or deleted shortly.
   */
  RUNNING_OUTDATED = 22,
  /** STOPPED - Instance was stopped. */
  STOPPED = 23,
  /** DELETED - Instance was deleted. */
  DELETED = 24,
  /** PREPARING_RESOURCES - Instance Groups is preparing dependent resources. */
  PREPARING_RESOURCES = 25,
  UNRECOGNIZED = -1,
}

export function managedInstance_StatusFromJSON(
  object: any
): ManagedInstance_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return ManagedInstance_Status.STATUS_UNSPECIFIED;
    case 11:
    case "CREATING_INSTANCE":
      return ManagedInstance_Status.CREATING_INSTANCE;
    case 12:
    case "UPDATING_INSTANCE":
      return ManagedInstance_Status.UPDATING_INSTANCE;
    case 13:
    case "DELETING_INSTANCE":
      return ManagedInstance_Status.DELETING_INSTANCE;
    case 14:
    case "STARTING_INSTANCE":
      return ManagedInstance_Status.STARTING_INSTANCE;
    case 15:
    case "STOPPING_INSTANCE":
      return ManagedInstance_Status.STOPPING_INSTANCE;
    case 16:
    case "AWAITING_STARTUP_DURATION":
      return ManagedInstance_Status.AWAITING_STARTUP_DURATION;
    case 17:
    case "CHECKING_HEALTH":
      return ManagedInstance_Status.CHECKING_HEALTH;
    case 18:
    case "OPENING_TRAFFIC":
      return ManagedInstance_Status.OPENING_TRAFFIC;
    case 19:
    case "AWAITING_WARMUP_DURATION":
      return ManagedInstance_Status.AWAITING_WARMUP_DURATION;
    case 20:
    case "CLOSING_TRAFFIC":
      return ManagedInstance_Status.CLOSING_TRAFFIC;
    case 21:
    case "RUNNING_ACTUAL":
      return ManagedInstance_Status.RUNNING_ACTUAL;
    case 22:
    case "RUNNING_OUTDATED":
      return ManagedInstance_Status.RUNNING_OUTDATED;
    case 23:
    case "STOPPED":
      return ManagedInstance_Status.STOPPED;
    case 24:
    case "DELETED":
      return ManagedInstance_Status.DELETED;
    case 25:
    case "PREPARING_RESOURCES":
      return ManagedInstance_Status.PREPARING_RESOURCES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ManagedInstance_Status.UNRECOGNIZED;
  }
}

export function managedInstance_StatusToJSON(
  object: ManagedInstance_Status
): string {
  switch (object) {
    case ManagedInstance_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case ManagedInstance_Status.CREATING_INSTANCE:
      return "CREATING_INSTANCE";
    case ManagedInstance_Status.UPDATING_INSTANCE:
      return "UPDATING_INSTANCE";
    case ManagedInstance_Status.DELETING_INSTANCE:
      return "DELETING_INSTANCE";
    case ManagedInstance_Status.STARTING_INSTANCE:
      return "STARTING_INSTANCE";
    case ManagedInstance_Status.STOPPING_INSTANCE:
      return "STOPPING_INSTANCE";
    case ManagedInstance_Status.AWAITING_STARTUP_DURATION:
      return "AWAITING_STARTUP_DURATION";
    case ManagedInstance_Status.CHECKING_HEALTH:
      return "CHECKING_HEALTH";
    case ManagedInstance_Status.OPENING_TRAFFIC:
      return "OPENING_TRAFFIC";
    case ManagedInstance_Status.AWAITING_WARMUP_DURATION:
      return "AWAITING_WARMUP_DURATION";
    case ManagedInstance_Status.CLOSING_TRAFFIC:
      return "CLOSING_TRAFFIC";
    case ManagedInstance_Status.RUNNING_ACTUAL:
      return "RUNNING_ACTUAL";
    case ManagedInstance_Status.RUNNING_OUTDATED:
      return "RUNNING_OUTDATED";
    case ManagedInstance_Status.STOPPED:
      return "STOPPED";
    case ManagedInstance_Status.DELETED:
      return "DELETED";
    case ManagedInstance_Status.PREPARING_RESOURCES:
      return "PREPARING_RESOURCES";
    default:
      return "UNKNOWN";
  }
}

export interface NetworkInterface {
  $type: "yandex.cloud.compute.v1.instancegroup.NetworkInterface";
  /**
   * The index of the network interface, generated by the server, 0,1,2... etc.
   * Currently only one network interface is supported per instance.
   */
  index: string;
  /** MAC address that is assigned to the network interface. */
  macAddress: string;
  /** ID of the subnet. */
  subnetId: string;
  /** Primary IPv4 address that is assigned to the instance for this network interface. */
  primaryV4Address?: PrimaryAddress;
  /** Primary IPv6 address that is assigned to the instance for this network interface. IPv6 is not available yet. */
  primaryV6Address?: PrimaryAddress;
}

export interface PrimaryAddress {
  $type: "yandex.cloud.compute.v1.instancegroup.PrimaryAddress";
  /**
   * An IPv4 internal network address that is assigned to the managed instance for this network interface.
   * If not specified by the user, an unused internal IP is assigned by the system.
   */
  address: string;
  /** One-to-one NAT configuration. If missing, NAT has not been set up. */
  oneToOneNat?: OneToOneNat;
  /** Internal DNS configuration. */
  dnsRecords: DnsRecord[];
}

export interface OneToOneNat {
  $type: "yandex.cloud.compute.v1.instancegroup.OneToOneNat";
  /** An IPv4 external network address that is assigned to the managed instance for this network interface. */
  address: string;
  /** External IP address version. */
  ipVersion: IpVersion;
  /** External DNS configuration. */
  dnsRecords: DnsRecord[];
}

export interface DnsRecord {
  $type: "yandex.cloud.compute.v1.instancegroup.DnsRecord";
  /**
   * Name of the A/AAAA record as specified when creating the instance.
   * Note that if `fqdn' has no trailing '.', it is specified relative to the zone (@see dns_zone_id).
   */
  fqdn: string;
  /** DNS zone id (optional, if not set, some private zone is used). */
  dnsZoneId: string;
  /** DNS record ttl (optional, if 0, a reasonable default is used). */
  ttl: number;
  /** When true, indicates there is a corresponding auto-created PTR DNS record. */
  ptr: boolean;
}

export interface LogRecord {
  $type: "yandex.cloud.compute.v1.instancegroup.LogRecord";
  /** Log timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  timestamp?: Date;
  /** The log message. */
  message: string;
}

const baseInstanceGroup: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.InstanceGroup",
  id: "",
  folderId: "",
  name: "",
  description: "",
  serviceAccountId: "",
  status: 0,
  deletionProtection: false,
};

export const InstanceGroup = {
  $type: "yandex.cloud.compute.v1.instancegroup.InstanceGroup" as const,

  encode(
    message: InstanceGroup,
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
      InstanceGroup_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.compute.v1.instancegroup.InstanceGroup.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.instanceTemplate !== undefined) {
      InstanceTemplate.encode(
        message.instanceTemplate,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.scalePolicy !== undefined) {
      ScalePolicy.encode(
        message.scalePolicy,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.deployPolicy !== undefined) {
      DeployPolicy.encode(
        message.deployPolicy,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.allocationPolicy !== undefined) {
      AllocationPolicy.encode(
        message.allocationPolicy,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.loadBalancerState !== undefined) {
      LoadBalancerState.encode(
        message.loadBalancerState,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.managedInstancesState !== undefined) {
      ManagedInstancesState.encode(
        message.managedInstancesState,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.loadBalancerSpec !== undefined) {
      LoadBalancerSpec.encode(
        message.loadBalancerSpec,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.healthChecksSpec !== undefined) {
      HealthChecksSpec.encode(
        message.healthChecksSpec,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(130).string(message.serviceAccountId);
    }
    if (message.status !== 0) {
      writer.uint32(136).int32(message.status);
    }
    for (const v of message.variables) {
      Variable.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(152).bool(message.deletionProtection);
    }
    if (message.applicationLoadBalancerSpec !== undefined) {
      ApplicationLoadBalancerSpec.encode(
        message.applicationLoadBalancerSpec,
        writer.uint32(162).fork()
      ).ldelim();
    }
    if (message.applicationLoadBalancerState !== undefined) {
      ApplicationLoadBalancerState.encode(
        message.applicationLoadBalancerState,
        writer.uint32(170).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstanceGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInstanceGroup } as InstanceGroup;
    message.labels = {};
    message.variables = [];
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
          const entry6 = InstanceGroup_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.instanceTemplate = InstanceTemplate.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
          break;
        case 9:
          message.deployPolicy = DeployPolicy.decode(reader, reader.uint32());
          break;
        case 10:
          message.allocationPolicy = AllocationPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.loadBalancerState = LoadBalancerState.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.managedInstancesState = ManagedInstancesState.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.loadBalancerSpec = LoadBalancerSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.healthChecksSpec = HealthChecksSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 16:
          message.serviceAccountId = reader.string();
          break;
        case 17:
          message.status = reader.int32() as any;
          break;
        case 18:
          message.variables.push(Variable.decode(reader, reader.uint32()));
          break;
        case 19:
          message.deletionProtection = reader.bool();
          break;
        case 20:
          message.applicationLoadBalancerSpec =
            ApplicationLoadBalancerSpec.decode(reader, reader.uint32());
          break;
        case 21:
          message.applicationLoadBalancerState =
            ApplicationLoadBalancerState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InstanceGroup {
    const message = { ...baseInstanceGroup } as InstanceGroup;
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
    message.loadBalancerState =
      object.loadBalancerState !== undefined &&
      object.loadBalancerState !== null
        ? LoadBalancerState.fromJSON(object.loadBalancerState)
        : undefined;
    message.managedInstancesState =
      object.managedInstancesState !== undefined &&
      object.managedInstancesState !== null
        ? ManagedInstancesState.fromJSON(object.managedInstancesState)
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
    message.status =
      object.status !== undefined && object.status !== null
        ? instanceGroup_StatusFromJSON(object.status)
        : 0;
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
    message.applicationLoadBalancerState =
      object.applicationLoadBalancerState !== undefined &&
      object.applicationLoadBalancerState !== null
        ? ApplicationLoadBalancerState.fromJSON(
            object.applicationLoadBalancerState
          )
        : undefined;
    return message;
  },

  toJSON(message: InstanceGroup): unknown {
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
    message.loadBalancerState !== undefined &&
      (obj.loadBalancerState = message.loadBalancerState
        ? LoadBalancerState.toJSON(message.loadBalancerState)
        : undefined);
    message.managedInstancesState !== undefined &&
      (obj.managedInstancesState = message.managedInstancesState
        ? ManagedInstancesState.toJSON(message.managedInstancesState)
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
    message.status !== undefined &&
      (obj.status = instanceGroup_StatusToJSON(message.status));
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
    message.applicationLoadBalancerState !== undefined &&
      (obj.applicationLoadBalancerState = message.applicationLoadBalancerState
        ? ApplicationLoadBalancerState.toJSON(
            message.applicationLoadBalancerState
          )
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InstanceGroup>, I>>(
    object: I
  ): InstanceGroup {
    const message = { ...baseInstanceGroup } as InstanceGroup;
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
    message.loadBalancerState =
      object.loadBalancerState !== undefined &&
      object.loadBalancerState !== null
        ? LoadBalancerState.fromPartial(object.loadBalancerState)
        : undefined;
    message.managedInstancesState =
      object.managedInstancesState !== undefined &&
      object.managedInstancesState !== null
        ? ManagedInstancesState.fromPartial(object.managedInstancesState)
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
    message.status = object.status ?? 0;
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
    message.applicationLoadBalancerState =
      object.applicationLoadBalancerState !== undefined &&
      object.applicationLoadBalancerState !== null
        ? ApplicationLoadBalancerState.fromPartial(
            object.applicationLoadBalancerState
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(InstanceGroup.$type, InstanceGroup);

const baseInstanceGroup_LabelsEntry: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.InstanceGroup.LabelsEntry",
  key: "",
  value: "",
};

export const InstanceGroup_LabelsEntry = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.InstanceGroup.LabelsEntry" as const,

  encode(
    message: InstanceGroup_LabelsEntry,
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
  ): InstanceGroup_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInstanceGroup_LabelsEntry,
    } as InstanceGroup_LabelsEntry;
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

  fromJSON(object: any): InstanceGroup_LabelsEntry {
    const message = {
      ...baseInstanceGroup_LabelsEntry,
    } as InstanceGroup_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: InstanceGroup_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InstanceGroup_LabelsEntry>, I>>(
    object: I
  ): InstanceGroup_LabelsEntry {
    const message = {
      ...baseInstanceGroup_LabelsEntry,
    } as InstanceGroup_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  InstanceGroup_LabelsEntry.$type,
  InstanceGroup_LabelsEntry
);

const baseApplicationLoadBalancerState: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState",
  targetGroupId: "",
  statusMessage: "",
};

export const ApplicationLoadBalancerState = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState" as const,

  encode(
    message: ApplicationLoadBalancerState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.targetGroupId !== "") {
      writer.uint32(10).string(message.targetGroupId);
    }
    if (message.statusMessage !== "") {
      writer.uint32(18).string(message.statusMessage);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ApplicationLoadBalancerState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseApplicationLoadBalancerState,
    } as ApplicationLoadBalancerState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetGroupId = reader.string();
          break;
        case 2:
          message.statusMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApplicationLoadBalancerState {
    const message = {
      ...baseApplicationLoadBalancerState,
    } as ApplicationLoadBalancerState;
    message.targetGroupId =
      object.targetGroupId !== undefined && object.targetGroupId !== null
        ? String(object.targetGroupId)
        : "";
    message.statusMessage =
      object.statusMessage !== undefined && object.statusMessage !== null
        ? String(object.statusMessage)
        : "";
    return message;
  },

  toJSON(message: ApplicationLoadBalancerState): unknown {
    const obj: any = {};
    message.targetGroupId !== undefined &&
      (obj.targetGroupId = message.targetGroupId);
    message.statusMessage !== undefined &&
      (obj.statusMessage = message.statusMessage);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ApplicationLoadBalancerState>, I>>(
    object: I
  ): ApplicationLoadBalancerState {
    const message = {
      ...baseApplicationLoadBalancerState,
    } as ApplicationLoadBalancerState;
    message.targetGroupId = object.targetGroupId ?? "";
    message.statusMessage = object.statusMessage ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ApplicationLoadBalancerState.$type,
  ApplicationLoadBalancerState
);

const baseVariable: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.Variable",
  key: "",
  value: "",
};

export const Variable = {
  $type: "yandex.cloud.compute.v1.instancegroup.Variable" as const,

  encode(
    message: Variable,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Variable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVariable } as Variable;
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

  fromJSON(object: any): Variable {
    const message = { ...baseVariable } as Variable;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Variable): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Variable>, I>>(object: I): Variable {
    const message = { ...baseVariable } as Variable;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Variable.$type, Variable);

const baseLoadBalancerState: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.LoadBalancerState",
  targetGroupId: "",
  statusMessage: "",
};

export const LoadBalancerState = {
  $type: "yandex.cloud.compute.v1.instancegroup.LoadBalancerState" as const,

  encode(
    message: LoadBalancerState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.targetGroupId !== "") {
      writer.uint32(10).string(message.targetGroupId);
    }
    if (message.statusMessage !== "") {
      writer.uint32(18).string(message.statusMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoadBalancerState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLoadBalancerState } as LoadBalancerState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetGroupId = reader.string();
          break;
        case 2:
          message.statusMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadBalancerState {
    const message = { ...baseLoadBalancerState } as LoadBalancerState;
    message.targetGroupId =
      object.targetGroupId !== undefined && object.targetGroupId !== null
        ? String(object.targetGroupId)
        : "";
    message.statusMessage =
      object.statusMessage !== undefined && object.statusMessage !== null
        ? String(object.statusMessage)
        : "";
    return message;
  },

  toJSON(message: LoadBalancerState): unknown {
    const obj: any = {};
    message.targetGroupId !== undefined &&
      (obj.targetGroupId = message.targetGroupId);
    message.statusMessage !== undefined &&
      (obj.statusMessage = message.statusMessage);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadBalancerState>, I>>(
    object: I
  ): LoadBalancerState {
    const message = { ...baseLoadBalancerState } as LoadBalancerState;
    message.targetGroupId = object.targetGroupId ?? "";
    message.statusMessage = object.statusMessage ?? "";
    return message;
  },
};

messageTypeRegistry.set(LoadBalancerState.$type, LoadBalancerState);

const baseManagedInstancesState: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.ManagedInstancesState",
  targetSize: 0,
  runningActualCount: 0,
  runningOutdatedCount: 0,
  processingCount: 0,
};

export const ManagedInstancesState = {
  $type: "yandex.cloud.compute.v1.instancegroup.ManagedInstancesState" as const,

  encode(
    message: ManagedInstancesState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.targetSize !== 0) {
      writer.uint32(8).int64(message.targetSize);
    }
    if (message.runningActualCount !== 0) {
      writer.uint32(32).int64(message.runningActualCount);
    }
    if (message.runningOutdatedCount !== 0) {
      writer.uint32(40).int64(message.runningOutdatedCount);
    }
    if (message.processingCount !== 0) {
      writer.uint32(48).int64(message.processingCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ManagedInstancesState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseManagedInstancesState } as ManagedInstancesState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetSize = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.runningActualCount = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.runningOutdatedCount = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.processingCount = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ManagedInstancesState {
    const message = { ...baseManagedInstancesState } as ManagedInstancesState;
    message.targetSize =
      object.targetSize !== undefined && object.targetSize !== null
        ? Number(object.targetSize)
        : 0;
    message.runningActualCount =
      object.runningActualCount !== undefined &&
      object.runningActualCount !== null
        ? Number(object.runningActualCount)
        : 0;
    message.runningOutdatedCount =
      object.runningOutdatedCount !== undefined &&
      object.runningOutdatedCount !== null
        ? Number(object.runningOutdatedCount)
        : 0;
    message.processingCount =
      object.processingCount !== undefined && object.processingCount !== null
        ? Number(object.processingCount)
        : 0;
    return message;
  },

  toJSON(message: ManagedInstancesState): unknown {
    const obj: any = {};
    message.targetSize !== undefined &&
      (obj.targetSize = Math.round(message.targetSize));
    message.runningActualCount !== undefined &&
      (obj.runningActualCount = Math.round(message.runningActualCount));
    message.runningOutdatedCount !== undefined &&
      (obj.runningOutdatedCount = Math.round(message.runningOutdatedCount));
    message.processingCount !== undefined &&
      (obj.processingCount = Math.round(message.processingCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ManagedInstancesState>, I>>(
    object: I
  ): ManagedInstancesState {
    const message = { ...baseManagedInstancesState } as ManagedInstancesState;
    message.targetSize = object.targetSize ?? 0;
    message.runningActualCount = object.runningActualCount ?? 0;
    message.runningOutdatedCount = object.runningOutdatedCount ?? 0;
    message.processingCount = object.processingCount ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ManagedInstancesState.$type, ManagedInstancesState);

const baseManagedInstancesState_Statuses: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses",
  creating: 0,
  starting: 0,
  opening: 0,
  warming: 0,
  running: 0,
  closing: 0,
  stopping: 0,
  updating: 0,
  deleting: 0,
  failed: 0,
};

export const ManagedInstancesState_Statuses = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses" as const,

  encode(
    message: ManagedInstancesState_Statuses,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creating !== 0) {
      writer.uint32(8).int64(message.creating);
    }
    if (message.starting !== 0) {
      writer.uint32(16).int64(message.starting);
    }
    if (message.opening !== 0) {
      writer.uint32(24).int64(message.opening);
    }
    if (message.warming !== 0) {
      writer.uint32(32).int64(message.warming);
    }
    if (message.running !== 0) {
      writer.uint32(40).int64(message.running);
    }
    if (message.closing !== 0) {
      writer.uint32(48).int64(message.closing);
    }
    if (message.stopping !== 0) {
      writer.uint32(56).int64(message.stopping);
    }
    if (message.updating !== 0) {
      writer.uint32(64).int64(message.updating);
    }
    if (message.deleting !== 0) {
      writer.uint32(72).int64(message.deleting);
    }
    if (message.failed !== 0) {
      writer.uint32(80).int64(message.failed);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ManagedInstancesState_Statuses {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseManagedInstancesState_Statuses,
    } as ManagedInstancesState_Statuses;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creating = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.starting = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.opening = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.warming = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.running = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.closing = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.stopping = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.updating = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.deleting = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.failed = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ManagedInstancesState_Statuses {
    const message = {
      ...baseManagedInstancesState_Statuses,
    } as ManagedInstancesState_Statuses;
    message.creating =
      object.creating !== undefined && object.creating !== null
        ? Number(object.creating)
        : 0;
    message.starting =
      object.starting !== undefined && object.starting !== null
        ? Number(object.starting)
        : 0;
    message.opening =
      object.opening !== undefined && object.opening !== null
        ? Number(object.opening)
        : 0;
    message.warming =
      object.warming !== undefined && object.warming !== null
        ? Number(object.warming)
        : 0;
    message.running =
      object.running !== undefined && object.running !== null
        ? Number(object.running)
        : 0;
    message.closing =
      object.closing !== undefined && object.closing !== null
        ? Number(object.closing)
        : 0;
    message.stopping =
      object.stopping !== undefined && object.stopping !== null
        ? Number(object.stopping)
        : 0;
    message.updating =
      object.updating !== undefined && object.updating !== null
        ? Number(object.updating)
        : 0;
    message.deleting =
      object.deleting !== undefined && object.deleting !== null
        ? Number(object.deleting)
        : 0;
    message.failed =
      object.failed !== undefined && object.failed !== null
        ? Number(object.failed)
        : 0;
    return message;
  },

  toJSON(message: ManagedInstancesState_Statuses): unknown {
    const obj: any = {};
    message.creating !== undefined &&
      (obj.creating = Math.round(message.creating));
    message.starting !== undefined &&
      (obj.starting = Math.round(message.starting));
    message.opening !== undefined &&
      (obj.opening = Math.round(message.opening));
    message.warming !== undefined &&
      (obj.warming = Math.round(message.warming));
    message.running !== undefined &&
      (obj.running = Math.round(message.running));
    message.closing !== undefined &&
      (obj.closing = Math.round(message.closing));
    message.stopping !== undefined &&
      (obj.stopping = Math.round(message.stopping));
    message.updating !== undefined &&
      (obj.updating = Math.round(message.updating));
    message.deleting !== undefined &&
      (obj.deleting = Math.round(message.deleting));
    message.failed !== undefined && (obj.failed = Math.round(message.failed));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ManagedInstancesState_Statuses>, I>>(
    object: I
  ): ManagedInstancesState_Statuses {
    const message = {
      ...baseManagedInstancesState_Statuses,
    } as ManagedInstancesState_Statuses;
    message.creating = object.creating ?? 0;
    message.starting = object.starting ?? 0;
    message.opening = object.opening ?? 0;
    message.warming = object.warming ?? 0;
    message.running = object.running ?? 0;
    message.closing = object.closing ?? 0;
    message.stopping = object.stopping ?? 0;
    message.updating = object.updating ?? 0;
    message.deleting = object.deleting ?? 0;
    message.failed = object.failed ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  ManagedInstancesState_Statuses.$type,
  ManagedInstancesState_Statuses
);

const baseScalePolicy: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy",
};

export const ScalePolicy = {
  $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy" as const,

  encode(
    message: ScalePolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fixedScale !== undefined) {
      ScalePolicy_FixedScale.encode(
        message.fixedScale,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.autoScale !== undefined) {
      ScalePolicy_AutoScale.encode(
        message.autoScale,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.testAutoScale !== undefined) {
      ScalePolicy_AutoScale.encode(
        message.testAutoScale,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScalePolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseScalePolicy } as ScalePolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fixedScale = ScalePolicy_FixedScale.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.autoScale = ScalePolicy_AutoScale.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.testAutoScale = ScalePolicy_AutoScale.decode(
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

  fromJSON(object: any): ScalePolicy {
    const message = { ...baseScalePolicy } as ScalePolicy;
    message.fixedScale =
      object.fixedScale !== undefined && object.fixedScale !== null
        ? ScalePolicy_FixedScale.fromJSON(object.fixedScale)
        : undefined;
    message.autoScale =
      object.autoScale !== undefined && object.autoScale !== null
        ? ScalePolicy_AutoScale.fromJSON(object.autoScale)
        : undefined;
    message.testAutoScale =
      object.testAutoScale !== undefined && object.testAutoScale !== null
        ? ScalePolicy_AutoScale.fromJSON(object.testAutoScale)
        : undefined;
    return message;
  },

  toJSON(message: ScalePolicy): unknown {
    const obj: any = {};
    message.fixedScale !== undefined &&
      (obj.fixedScale = message.fixedScale
        ? ScalePolicy_FixedScale.toJSON(message.fixedScale)
        : undefined);
    message.autoScale !== undefined &&
      (obj.autoScale = message.autoScale
        ? ScalePolicy_AutoScale.toJSON(message.autoScale)
        : undefined);
    message.testAutoScale !== undefined &&
      (obj.testAutoScale = message.testAutoScale
        ? ScalePolicy_AutoScale.toJSON(message.testAutoScale)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScalePolicy>, I>>(
    object: I
  ): ScalePolicy {
    const message = { ...baseScalePolicy } as ScalePolicy;
    message.fixedScale =
      object.fixedScale !== undefined && object.fixedScale !== null
        ? ScalePolicy_FixedScale.fromPartial(object.fixedScale)
        : undefined;
    message.autoScale =
      object.autoScale !== undefined && object.autoScale !== null
        ? ScalePolicy_AutoScale.fromPartial(object.autoScale)
        : undefined;
    message.testAutoScale =
      object.testAutoScale !== undefined && object.testAutoScale !== null
        ? ScalePolicy_AutoScale.fromPartial(object.testAutoScale)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ScalePolicy.$type, ScalePolicy);

const baseScalePolicy_AutoScale: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale",
  minZoneSize: 0,
  maxSize: 0,
  initialSize: 0,
  autoScaleType: 0,
};

export const ScalePolicy_AutoScale = {
  $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale" as const,

  encode(
    message: ScalePolicy_AutoScale,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.minZoneSize !== 0) {
      writer.uint32(8).int64(message.minZoneSize);
    }
    if (message.maxSize !== 0) {
      writer.uint32(16).int64(message.maxSize);
    }
    if (message.measurementDuration !== undefined) {
      Duration.encode(
        message.measurementDuration,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.warmupDuration !== undefined) {
      Duration.encode(
        message.warmupDuration,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.stabilizationDuration !== undefined) {
      Duration.encode(
        message.stabilizationDuration,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.initialSize !== 0) {
      writer.uint32(48).int64(message.initialSize);
    }
    if (message.cpuUtilizationRule !== undefined) {
      ScalePolicy_CpuUtilizationRule.encode(
        message.cpuUtilizationRule,
        writer.uint32(58).fork()
      ).ldelim();
    }
    for (const v of message.customRules) {
      ScalePolicy_CustomRule.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.autoScaleType !== 0) {
      writer.uint32(72).int32(message.autoScaleType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ScalePolicy_AutoScale {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseScalePolicy_AutoScale } as ScalePolicy_AutoScale;
    message.customRules = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minZoneSize = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.maxSize = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.measurementDuration = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.warmupDuration = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.stabilizationDuration = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.initialSize = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.cpuUtilizationRule = ScalePolicy_CpuUtilizationRule.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.customRules.push(
            ScalePolicy_CustomRule.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.autoScaleType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScalePolicy_AutoScale {
    const message = { ...baseScalePolicy_AutoScale } as ScalePolicy_AutoScale;
    message.minZoneSize =
      object.minZoneSize !== undefined && object.minZoneSize !== null
        ? Number(object.minZoneSize)
        : 0;
    message.maxSize =
      object.maxSize !== undefined && object.maxSize !== null
        ? Number(object.maxSize)
        : 0;
    message.measurementDuration =
      object.measurementDuration !== undefined &&
      object.measurementDuration !== null
        ? Duration.fromJSON(object.measurementDuration)
        : undefined;
    message.warmupDuration =
      object.warmupDuration !== undefined && object.warmupDuration !== null
        ? Duration.fromJSON(object.warmupDuration)
        : undefined;
    message.stabilizationDuration =
      object.stabilizationDuration !== undefined &&
      object.stabilizationDuration !== null
        ? Duration.fromJSON(object.stabilizationDuration)
        : undefined;
    message.initialSize =
      object.initialSize !== undefined && object.initialSize !== null
        ? Number(object.initialSize)
        : 0;
    message.cpuUtilizationRule =
      object.cpuUtilizationRule !== undefined &&
      object.cpuUtilizationRule !== null
        ? ScalePolicy_CpuUtilizationRule.fromJSON(object.cpuUtilizationRule)
        : undefined;
    message.customRules = (object.customRules ?? []).map((e: any) =>
      ScalePolicy_CustomRule.fromJSON(e)
    );
    message.autoScaleType =
      object.autoScaleType !== undefined && object.autoScaleType !== null
        ? scalePolicy_AutoScale_AutoScaleTypeFromJSON(object.autoScaleType)
        : 0;
    return message;
  },

  toJSON(message: ScalePolicy_AutoScale): unknown {
    const obj: any = {};
    message.minZoneSize !== undefined &&
      (obj.minZoneSize = Math.round(message.minZoneSize));
    message.maxSize !== undefined &&
      (obj.maxSize = Math.round(message.maxSize));
    message.measurementDuration !== undefined &&
      (obj.measurementDuration = message.measurementDuration
        ? Duration.toJSON(message.measurementDuration)
        : undefined);
    message.warmupDuration !== undefined &&
      (obj.warmupDuration = message.warmupDuration
        ? Duration.toJSON(message.warmupDuration)
        : undefined);
    message.stabilizationDuration !== undefined &&
      (obj.stabilizationDuration = message.stabilizationDuration
        ? Duration.toJSON(message.stabilizationDuration)
        : undefined);
    message.initialSize !== undefined &&
      (obj.initialSize = Math.round(message.initialSize));
    message.cpuUtilizationRule !== undefined &&
      (obj.cpuUtilizationRule = message.cpuUtilizationRule
        ? ScalePolicy_CpuUtilizationRule.toJSON(message.cpuUtilizationRule)
        : undefined);
    if (message.customRules) {
      obj.customRules = message.customRules.map((e) =>
        e ? ScalePolicy_CustomRule.toJSON(e) : undefined
      );
    } else {
      obj.customRules = [];
    }
    message.autoScaleType !== undefined &&
      (obj.autoScaleType = scalePolicy_AutoScale_AutoScaleTypeToJSON(
        message.autoScaleType
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScalePolicy_AutoScale>, I>>(
    object: I
  ): ScalePolicy_AutoScale {
    const message = { ...baseScalePolicy_AutoScale } as ScalePolicy_AutoScale;
    message.minZoneSize = object.minZoneSize ?? 0;
    message.maxSize = object.maxSize ?? 0;
    message.measurementDuration =
      object.measurementDuration !== undefined &&
      object.measurementDuration !== null
        ? Duration.fromPartial(object.measurementDuration)
        : undefined;
    message.warmupDuration =
      object.warmupDuration !== undefined && object.warmupDuration !== null
        ? Duration.fromPartial(object.warmupDuration)
        : undefined;
    message.stabilizationDuration =
      object.stabilizationDuration !== undefined &&
      object.stabilizationDuration !== null
        ? Duration.fromPartial(object.stabilizationDuration)
        : undefined;
    message.initialSize = object.initialSize ?? 0;
    message.cpuUtilizationRule =
      object.cpuUtilizationRule !== undefined &&
      object.cpuUtilizationRule !== null
        ? ScalePolicy_CpuUtilizationRule.fromPartial(object.cpuUtilizationRule)
        : undefined;
    message.customRules =
      object.customRules?.map((e) => ScalePolicy_CustomRule.fromPartial(e)) ||
      [];
    message.autoScaleType = object.autoScaleType ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ScalePolicy_AutoScale.$type, ScalePolicy_AutoScale);

const baseScalePolicy_CpuUtilizationRule: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule",
  utilizationTarget: 0,
};

export const ScalePolicy_CpuUtilizationRule = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule" as const,

  encode(
    message: ScalePolicy_CpuUtilizationRule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.utilizationTarget !== 0) {
      writer.uint32(9).double(message.utilizationTarget);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ScalePolicy_CpuUtilizationRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseScalePolicy_CpuUtilizationRule,
    } as ScalePolicy_CpuUtilizationRule;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.utilizationTarget = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScalePolicy_CpuUtilizationRule {
    const message = {
      ...baseScalePolicy_CpuUtilizationRule,
    } as ScalePolicy_CpuUtilizationRule;
    message.utilizationTarget =
      object.utilizationTarget !== undefined &&
      object.utilizationTarget !== null
        ? Number(object.utilizationTarget)
        : 0;
    return message;
  },

  toJSON(message: ScalePolicy_CpuUtilizationRule): unknown {
    const obj: any = {};
    message.utilizationTarget !== undefined &&
      (obj.utilizationTarget = message.utilizationTarget);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScalePolicy_CpuUtilizationRule>, I>>(
    object: I
  ): ScalePolicy_CpuUtilizationRule {
    const message = {
      ...baseScalePolicy_CpuUtilizationRule,
    } as ScalePolicy_CpuUtilizationRule;
    message.utilizationTarget = object.utilizationTarget ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  ScalePolicy_CpuUtilizationRule.$type,
  ScalePolicy_CpuUtilizationRule
);

const baseScalePolicy_CustomRule: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule",
  ruleType: 0,
  metricType: 0,
  metricName: "",
  target: 0,
  folderId: "",
  service: "",
};

export const ScalePolicy_CustomRule = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule" as const,

  encode(
    message: ScalePolicy_CustomRule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ruleType !== 0) {
      writer.uint32(8).int32(message.ruleType);
    }
    if (message.metricType !== 0) {
      writer.uint32(16).int32(message.metricType);
    }
    if (message.metricName !== "") {
      writer.uint32(26).string(message.metricName);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      ScalePolicy_CustomRule_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.target !== 0) {
      writer.uint32(33).double(message.target);
    }
    if (message.folderId !== "") {
      writer.uint32(50).string(message.folderId);
    }
    if (message.service !== "") {
      writer.uint32(58).string(message.service);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ScalePolicy_CustomRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseScalePolicy_CustomRule } as ScalePolicy_CustomRule;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ruleType = reader.int32() as any;
          break;
        case 2:
          message.metricType = reader.int32() as any;
          break;
        case 3:
          message.metricName = reader.string();
          break;
        case 5:
          const entry5 = ScalePolicy_CustomRule_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 4:
          message.target = reader.double();
          break;
        case 6:
          message.folderId = reader.string();
          break;
        case 7:
          message.service = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScalePolicy_CustomRule {
    const message = { ...baseScalePolicy_CustomRule } as ScalePolicy_CustomRule;
    message.ruleType =
      object.ruleType !== undefined && object.ruleType !== null
        ? scalePolicy_CustomRule_RuleTypeFromJSON(object.ruleType)
        : 0;
    message.metricType =
      object.metricType !== undefined && object.metricType !== null
        ? scalePolicy_CustomRule_MetricTypeFromJSON(object.metricType)
        : 0;
    message.metricName =
      object.metricName !== undefined && object.metricName !== null
        ? String(object.metricName)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.target =
      object.target !== undefined && object.target !== null
        ? Number(object.target)
        : 0;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.service =
      object.service !== undefined && object.service !== null
        ? String(object.service)
        : "";
    return message;
  },

  toJSON(message: ScalePolicy_CustomRule): unknown {
    const obj: any = {};
    message.ruleType !== undefined &&
      (obj.ruleType = scalePolicy_CustomRule_RuleTypeToJSON(message.ruleType));
    message.metricType !== undefined &&
      (obj.metricType = scalePolicy_CustomRule_MetricTypeToJSON(
        message.metricType
      ));
    message.metricName !== undefined && (obj.metricName = message.metricName);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.target !== undefined && (obj.target = message.target);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.service !== undefined && (obj.service = message.service);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScalePolicy_CustomRule>, I>>(
    object: I
  ): ScalePolicy_CustomRule {
    const message = { ...baseScalePolicy_CustomRule } as ScalePolicy_CustomRule;
    message.ruleType = object.ruleType ?? 0;
    message.metricType = object.metricType ?? 0;
    message.metricName = object.metricName ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.target = object.target ?? 0;
    message.folderId = object.folderId ?? "";
    message.service = object.service ?? "";
    return message;
  },
};

messageTypeRegistry.set(ScalePolicy_CustomRule.$type, ScalePolicy_CustomRule);

const baseScalePolicy_CustomRule_LabelsEntry: object = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.LabelsEntry",
  key: "",
  value: "",
};

export const ScalePolicy_CustomRule_LabelsEntry = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.LabelsEntry" as const,

  encode(
    message: ScalePolicy_CustomRule_LabelsEntry,
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
  ): ScalePolicy_CustomRule_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseScalePolicy_CustomRule_LabelsEntry,
    } as ScalePolicy_CustomRule_LabelsEntry;
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

  fromJSON(object: any): ScalePolicy_CustomRule_LabelsEntry {
    const message = {
      ...baseScalePolicy_CustomRule_LabelsEntry,
    } as ScalePolicy_CustomRule_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: ScalePolicy_CustomRule_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ScalePolicy_CustomRule_LabelsEntry>, I>
  >(object: I): ScalePolicy_CustomRule_LabelsEntry {
    const message = {
      ...baseScalePolicy_CustomRule_LabelsEntry,
    } as ScalePolicy_CustomRule_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ScalePolicy_CustomRule_LabelsEntry.$type,
  ScalePolicy_CustomRule_LabelsEntry
);

const baseScalePolicy_FixedScale: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale",
  size: 0,
};

export const ScalePolicy_FixedScale = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale" as const,

  encode(
    message: ScalePolicy_FixedScale,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.size !== 0) {
      writer.uint32(8).int64(message.size);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ScalePolicy_FixedScale {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseScalePolicy_FixedScale } as ScalePolicy_FixedScale;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.size = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScalePolicy_FixedScale {
    const message = { ...baseScalePolicy_FixedScale } as ScalePolicy_FixedScale;
    message.size =
      object.size !== undefined && object.size !== null
        ? Number(object.size)
        : 0;
    return message;
  },

  toJSON(message: ScalePolicy_FixedScale): unknown {
    const obj: any = {};
    message.size !== undefined && (obj.size = Math.round(message.size));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScalePolicy_FixedScale>, I>>(
    object: I
  ): ScalePolicy_FixedScale {
    const message = { ...baseScalePolicy_FixedScale } as ScalePolicy_FixedScale;
    message.size = object.size ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ScalePolicy_FixedScale.$type, ScalePolicy_FixedScale);

const baseDeployPolicy: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.DeployPolicy",
  maxUnavailable: 0,
  maxDeleting: 0,
  maxCreating: 0,
  maxExpansion: 0,
  strategy: 0,
};

export const DeployPolicy = {
  $type: "yandex.cloud.compute.v1.instancegroup.DeployPolicy" as const,

  encode(
    message: DeployPolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxUnavailable !== 0) {
      writer.uint32(8).int64(message.maxUnavailable);
    }
    if (message.maxDeleting !== 0) {
      writer.uint32(16).int64(message.maxDeleting);
    }
    if (message.maxCreating !== 0) {
      writer.uint32(24).int64(message.maxCreating);
    }
    if (message.maxExpansion !== 0) {
      writer.uint32(48).int64(message.maxExpansion);
    }
    if (message.startupDuration !== undefined) {
      Duration.encode(
        message.startupDuration,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.strategy !== 0) {
      writer.uint32(64).int32(message.strategy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeployPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeployPolicy } as DeployPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxUnavailable = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.maxDeleting = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.maxCreating = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.maxExpansion = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.startupDuration = Duration.decode(reader, reader.uint32());
          break;
        case 8:
          message.strategy = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeployPolicy {
    const message = { ...baseDeployPolicy } as DeployPolicy;
    message.maxUnavailable =
      object.maxUnavailable !== undefined && object.maxUnavailable !== null
        ? Number(object.maxUnavailable)
        : 0;
    message.maxDeleting =
      object.maxDeleting !== undefined && object.maxDeleting !== null
        ? Number(object.maxDeleting)
        : 0;
    message.maxCreating =
      object.maxCreating !== undefined && object.maxCreating !== null
        ? Number(object.maxCreating)
        : 0;
    message.maxExpansion =
      object.maxExpansion !== undefined && object.maxExpansion !== null
        ? Number(object.maxExpansion)
        : 0;
    message.startupDuration =
      object.startupDuration !== undefined && object.startupDuration !== null
        ? Duration.fromJSON(object.startupDuration)
        : undefined;
    message.strategy =
      object.strategy !== undefined && object.strategy !== null
        ? deployPolicy_StrategyFromJSON(object.strategy)
        : 0;
    return message;
  },

  toJSON(message: DeployPolicy): unknown {
    const obj: any = {};
    message.maxUnavailable !== undefined &&
      (obj.maxUnavailable = Math.round(message.maxUnavailable));
    message.maxDeleting !== undefined &&
      (obj.maxDeleting = Math.round(message.maxDeleting));
    message.maxCreating !== undefined &&
      (obj.maxCreating = Math.round(message.maxCreating));
    message.maxExpansion !== undefined &&
      (obj.maxExpansion = Math.round(message.maxExpansion));
    message.startupDuration !== undefined &&
      (obj.startupDuration = message.startupDuration
        ? Duration.toJSON(message.startupDuration)
        : undefined);
    message.strategy !== undefined &&
      (obj.strategy = deployPolicy_StrategyToJSON(message.strategy));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeployPolicy>, I>>(
    object: I
  ): DeployPolicy {
    const message = { ...baseDeployPolicy } as DeployPolicy;
    message.maxUnavailable = object.maxUnavailable ?? 0;
    message.maxDeleting = object.maxDeleting ?? 0;
    message.maxCreating = object.maxCreating ?? 0;
    message.maxExpansion = object.maxExpansion ?? 0;
    message.startupDuration =
      object.startupDuration !== undefined && object.startupDuration !== null
        ? Duration.fromPartial(object.startupDuration)
        : undefined;
    message.strategy = object.strategy ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DeployPolicy.$type, DeployPolicy);

const baseAllocationPolicy: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.AllocationPolicy",
};

export const AllocationPolicy = {
  $type: "yandex.cloud.compute.v1.instancegroup.AllocationPolicy" as const,

  encode(
    message: AllocationPolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.zones) {
      AllocationPolicy_Zone.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllocationPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAllocationPolicy } as AllocationPolicy;
    message.zones = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.zones.push(
            AllocationPolicy_Zone.decode(reader, reader.uint32())
          );
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
    message.zones = (object.zones ?? []).map((e: any) =>
      AllocationPolicy_Zone.fromJSON(e)
    );
    return message;
  },

  toJSON(message: AllocationPolicy): unknown {
    const obj: any = {};
    if (message.zones) {
      obj.zones = message.zones.map((e) =>
        e ? AllocationPolicy_Zone.toJSON(e) : undefined
      );
    } else {
      obj.zones = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllocationPolicy>, I>>(
    object: I
  ): AllocationPolicy {
    const message = { ...baseAllocationPolicy } as AllocationPolicy;
    message.zones =
      object.zones?.map((e) => AllocationPolicy_Zone.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(AllocationPolicy.$type, AllocationPolicy);

const baseAllocationPolicy_Zone: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone",
  zoneId: "",
  instanceTagsPool: "",
};

export const AllocationPolicy_Zone = {
  $type: "yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone" as const,

  encode(
    message: AllocationPolicy_Zone,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }
    for (const v of message.instanceTagsPool) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AllocationPolicy_Zone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAllocationPolicy_Zone } as AllocationPolicy_Zone;
    message.instanceTagsPool = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;
        case 2:
          message.instanceTagsPool.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AllocationPolicy_Zone {
    const message = { ...baseAllocationPolicy_Zone } as AllocationPolicy_Zone;
    message.zoneId =
      object.zoneId !== undefined && object.zoneId !== null
        ? String(object.zoneId)
        : "";
    message.instanceTagsPool = (object.instanceTagsPool ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: AllocationPolicy_Zone): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    if (message.instanceTagsPool) {
      obj.instanceTagsPool = message.instanceTagsPool.map((e) => e);
    } else {
      obj.instanceTagsPool = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllocationPolicy_Zone>, I>>(
    object: I
  ): AllocationPolicy_Zone {
    const message = { ...baseAllocationPolicy_Zone } as AllocationPolicy_Zone;
    message.zoneId = object.zoneId ?? "";
    message.instanceTagsPool = object.instanceTagsPool?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(AllocationPolicy_Zone.$type, AllocationPolicy_Zone);

const baseInstanceTemplate: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.InstanceTemplate",
  description: "",
  platformId: "",
  serviceAccountId: "",
  name: "",
  hostname: "",
};

export const InstanceTemplate = {
  $type: "yandex.cloud.compute.v1.instancegroup.InstanceTemplate" as const,

  encode(
    message: InstanceTemplate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      InstanceTemplate_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.compute.v1.instancegroup.InstanceTemplate.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(18).fork()
      ).ldelim();
    });
    if (message.platformId !== "") {
      writer.uint32(26).string(message.platformId);
    }
    if (message.resourcesSpec !== undefined) {
      ResourcesSpec.encode(
        message.resourcesSpec,
        writer.uint32(34).fork()
      ).ldelim();
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      InstanceTemplate_MetadataEntry.encode(
        {
          $type:
            "yandex.cloud.compute.v1.instancegroup.InstanceTemplate.MetadataEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.bootDiskSpec !== undefined) {
      AttachedDiskSpec.encode(
        message.bootDiskSpec,
        writer.uint32(50).fork()
      ).ldelim();
    }
    for (const v of message.secondaryDiskSpecs) {
      AttachedDiskSpec.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.networkInterfaceSpecs) {
      NetworkInterfaceSpec.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.schedulingPolicy !== undefined) {
      SchedulingPolicy.encode(
        message.schedulingPolicy,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(82).string(message.serviceAccountId);
    }
    if (message.networkSettings !== undefined) {
      NetworkSettings.encode(
        message.networkSettings,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(98).string(message.name);
    }
    if (message.hostname !== "") {
      writer.uint32(106).string(message.hostname);
    }
    if (message.placementPolicy !== undefined) {
      PlacementPolicy.encode(
        message.placementPolicy,
        writer.uint32(114).fork()
      ).ldelim();
    }
    for (const v of message.filesystemSpecs) {
      AttachedFilesystemSpec.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstanceTemplate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInstanceTemplate } as InstanceTemplate;
    message.labels = {};
    message.metadata = {};
    message.secondaryDiskSpecs = [];
    message.networkInterfaceSpecs = [];
    message.filesystemSpecs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;
        case 2:
          const entry2 = InstanceTemplate_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.labels[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.platformId = reader.string();
          break;
        case 4:
          message.resourcesSpec = ResourcesSpec.decode(reader, reader.uint32());
          break;
        case 5:
          const entry5 = InstanceTemplate_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.metadata[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.bootDiskSpec = AttachedDiskSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.secondaryDiskSpecs.push(
            AttachedDiskSpec.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.networkInterfaceSpecs.push(
            NetworkInterfaceSpec.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.schedulingPolicy = SchedulingPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.serviceAccountId = reader.string();
          break;
        case 11:
          message.networkSettings = NetworkSettings.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.name = reader.string();
          break;
        case 13:
          message.hostname = reader.string();
          break;
        case 14:
          message.placementPolicy = PlacementPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.filesystemSpecs.push(
            AttachedFilesystemSpec.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InstanceTemplate {
    const message = { ...baseInstanceTemplate } as InstanceTemplate;
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
    message.platformId =
      object.platformId !== undefined && object.platformId !== null
        ? String(object.platformId)
        : "";
    message.resourcesSpec =
      object.resourcesSpec !== undefined && object.resourcesSpec !== null
        ? ResourcesSpec.fromJSON(object.resourcesSpec)
        : undefined;
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.bootDiskSpec =
      object.bootDiskSpec !== undefined && object.bootDiskSpec !== null
        ? AttachedDiskSpec.fromJSON(object.bootDiskSpec)
        : undefined;
    message.secondaryDiskSpecs = (object.secondaryDiskSpecs ?? []).map(
      (e: any) => AttachedDiskSpec.fromJSON(e)
    );
    message.networkInterfaceSpecs = (object.networkInterfaceSpecs ?? []).map(
      (e: any) => NetworkInterfaceSpec.fromJSON(e)
    );
    message.schedulingPolicy =
      object.schedulingPolicy !== undefined && object.schedulingPolicy !== null
        ? SchedulingPolicy.fromJSON(object.schedulingPolicy)
        : undefined;
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.networkSettings =
      object.networkSettings !== undefined && object.networkSettings !== null
        ? NetworkSettings.fromJSON(object.networkSettings)
        : undefined;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.hostname =
      object.hostname !== undefined && object.hostname !== null
        ? String(object.hostname)
        : "";
    message.placementPolicy =
      object.placementPolicy !== undefined && object.placementPolicy !== null
        ? PlacementPolicy.fromJSON(object.placementPolicy)
        : undefined;
    message.filesystemSpecs = (object.filesystemSpecs ?? []).map((e: any) =>
      AttachedFilesystemSpec.fromJSON(e)
    );
    return message;
  },

  toJSON(message: InstanceTemplate): unknown {
    const obj: any = {};
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.platformId !== undefined && (obj.platformId = message.platformId);
    message.resourcesSpec !== undefined &&
      (obj.resourcesSpec = message.resourcesSpec
        ? ResourcesSpec.toJSON(message.resourcesSpec)
        : undefined);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    message.bootDiskSpec !== undefined &&
      (obj.bootDiskSpec = message.bootDiskSpec
        ? AttachedDiskSpec.toJSON(message.bootDiskSpec)
        : undefined);
    if (message.secondaryDiskSpecs) {
      obj.secondaryDiskSpecs = message.secondaryDiskSpecs.map((e) =>
        e ? AttachedDiskSpec.toJSON(e) : undefined
      );
    } else {
      obj.secondaryDiskSpecs = [];
    }
    if (message.networkInterfaceSpecs) {
      obj.networkInterfaceSpecs = message.networkInterfaceSpecs.map((e) =>
        e ? NetworkInterfaceSpec.toJSON(e) : undefined
      );
    } else {
      obj.networkInterfaceSpecs = [];
    }
    message.schedulingPolicy !== undefined &&
      (obj.schedulingPolicy = message.schedulingPolicy
        ? SchedulingPolicy.toJSON(message.schedulingPolicy)
        : undefined);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.networkSettings !== undefined &&
      (obj.networkSettings = message.networkSettings
        ? NetworkSettings.toJSON(message.networkSettings)
        : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.hostname !== undefined && (obj.hostname = message.hostname);
    message.placementPolicy !== undefined &&
      (obj.placementPolicy = message.placementPolicy
        ? PlacementPolicy.toJSON(message.placementPolicy)
        : undefined);
    if (message.filesystemSpecs) {
      obj.filesystemSpecs = message.filesystemSpecs.map((e) =>
        e ? AttachedFilesystemSpec.toJSON(e) : undefined
      );
    } else {
      obj.filesystemSpecs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InstanceTemplate>, I>>(
    object: I
  ): InstanceTemplate {
    const message = { ...baseInstanceTemplate } as InstanceTemplate;
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.platformId = object.platformId ?? "";
    message.resourcesSpec =
      object.resourcesSpec !== undefined && object.resourcesSpec !== null
        ? ResourcesSpec.fromPartial(object.resourcesSpec)
        : undefined;
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.bootDiskSpec =
      object.bootDiskSpec !== undefined && object.bootDiskSpec !== null
        ? AttachedDiskSpec.fromPartial(object.bootDiskSpec)
        : undefined;
    message.secondaryDiskSpecs =
      object.secondaryDiskSpecs?.map((e) => AttachedDiskSpec.fromPartial(e)) ||
      [];
    message.networkInterfaceSpecs =
      object.networkInterfaceSpecs?.map((e) =>
        NetworkInterfaceSpec.fromPartial(e)
      ) || [];
    message.schedulingPolicy =
      object.schedulingPolicy !== undefined && object.schedulingPolicy !== null
        ? SchedulingPolicy.fromPartial(object.schedulingPolicy)
        : undefined;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.networkSettings =
      object.networkSettings !== undefined && object.networkSettings !== null
        ? NetworkSettings.fromPartial(object.networkSettings)
        : undefined;
    message.name = object.name ?? "";
    message.hostname = object.hostname ?? "";
    message.placementPolicy =
      object.placementPolicy !== undefined && object.placementPolicy !== null
        ? PlacementPolicy.fromPartial(object.placementPolicy)
        : undefined;
    message.filesystemSpecs =
      object.filesystemSpecs?.map((e) =>
        AttachedFilesystemSpec.fromPartial(e)
      ) || [];
    return message;
  },
};

messageTypeRegistry.set(InstanceTemplate.$type, InstanceTemplate);

const baseInstanceTemplate_LabelsEntry: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.InstanceTemplate.LabelsEntry",
  key: "",
  value: "",
};

export const InstanceTemplate_LabelsEntry = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.InstanceTemplate.LabelsEntry" as const,

  encode(
    message: InstanceTemplate_LabelsEntry,
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
  ): InstanceTemplate_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInstanceTemplate_LabelsEntry,
    } as InstanceTemplate_LabelsEntry;
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

  fromJSON(object: any): InstanceTemplate_LabelsEntry {
    const message = {
      ...baseInstanceTemplate_LabelsEntry,
    } as InstanceTemplate_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: InstanceTemplate_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InstanceTemplate_LabelsEntry>, I>>(
    object: I
  ): InstanceTemplate_LabelsEntry {
    const message = {
      ...baseInstanceTemplate_LabelsEntry,
    } as InstanceTemplate_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  InstanceTemplate_LabelsEntry.$type,
  InstanceTemplate_LabelsEntry
);

const baseInstanceTemplate_MetadataEntry: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.InstanceTemplate.MetadataEntry",
  key: "",
  value: "",
};

export const InstanceTemplate_MetadataEntry = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.InstanceTemplate.MetadataEntry" as const,

  encode(
    message: InstanceTemplate_MetadataEntry,
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
  ): InstanceTemplate_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInstanceTemplate_MetadataEntry,
    } as InstanceTemplate_MetadataEntry;
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

  fromJSON(object: any): InstanceTemplate_MetadataEntry {
    const message = {
      ...baseInstanceTemplate_MetadataEntry,
    } as InstanceTemplate_MetadataEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: InstanceTemplate_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InstanceTemplate_MetadataEntry>, I>>(
    object: I
  ): InstanceTemplate_MetadataEntry {
    const message = {
      ...baseInstanceTemplate_MetadataEntry,
    } as InstanceTemplate_MetadataEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  InstanceTemplate_MetadataEntry.$type,
  InstanceTemplate_MetadataEntry
);

const baseAttachedFilesystemSpec: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.AttachedFilesystemSpec",
  mode: 0,
  deviceName: "",
  filesystemId: "",
};

export const AttachedFilesystemSpec = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.AttachedFilesystemSpec" as const,

  encode(
    message: AttachedFilesystemSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    if (message.deviceName !== "") {
      writer.uint32(18).string(message.deviceName);
    }
    if (message.filesystemId !== "") {
      writer.uint32(26).string(message.filesystemId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AttachedFilesystemSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAttachedFilesystemSpec } as AttachedFilesystemSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mode = reader.int32() as any;
          break;
        case 2:
          message.deviceName = reader.string();
          break;
        case 3:
          message.filesystemId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AttachedFilesystemSpec {
    const message = { ...baseAttachedFilesystemSpec } as AttachedFilesystemSpec;
    message.mode =
      object.mode !== undefined && object.mode !== null
        ? attachedFilesystemSpec_ModeFromJSON(object.mode)
        : 0;
    message.deviceName =
      object.deviceName !== undefined && object.deviceName !== null
        ? String(object.deviceName)
        : "";
    message.filesystemId =
      object.filesystemId !== undefined && object.filesystemId !== null
        ? String(object.filesystemId)
        : "";
    return message;
  },

  toJSON(message: AttachedFilesystemSpec): unknown {
    const obj: any = {};
    message.mode !== undefined &&
      (obj.mode = attachedFilesystemSpec_ModeToJSON(message.mode));
    message.deviceName !== undefined && (obj.deviceName = message.deviceName);
    message.filesystemId !== undefined &&
      (obj.filesystemId = message.filesystemId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AttachedFilesystemSpec>, I>>(
    object: I
  ): AttachedFilesystemSpec {
    const message = { ...baseAttachedFilesystemSpec } as AttachedFilesystemSpec;
    message.mode = object.mode ?? 0;
    message.deviceName = object.deviceName ?? "";
    message.filesystemId = object.filesystemId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AttachedFilesystemSpec.$type, AttachedFilesystemSpec);

const basePlacementPolicy: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.PlacementPolicy",
  placementGroupId: "",
};

export const PlacementPolicy = {
  $type: "yandex.cloud.compute.v1.instancegroup.PlacementPolicy" as const,

  encode(
    message: PlacementPolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.placementGroupId !== "") {
      writer.uint32(10).string(message.placementGroupId);
    }
    for (const v of message.hostAffinityRules) {
      PlacementPolicy_HostAffinityRule.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlacementPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlacementPolicy } as PlacementPolicy;
    message.hostAffinityRules = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.placementGroupId = reader.string();
          break;
        case 2:
          message.hostAffinityRules.push(
            PlacementPolicy_HostAffinityRule.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlacementPolicy {
    const message = { ...basePlacementPolicy } as PlacementPolicy;
    message.placementGroupId =
      object.placementGroupId !== undefined && object.placementGroupId !== null
        ? String(object.placementGroupId)
        : "";
    message.hostAffinityRules = (object.hostAffinityRules ?? []).map((e: any) =>
      PlacementPolicy_HostAffinityRule.fromJSON(e)
    );
    return message;
  },

  toJSON(message: PlacementPolicy): unknown {
    const obj: any = {};
    message.placementGroupId !== undefined &&
      (obj.placementGroupId = message.placementGroupId);
    if (message.hostAffinityRules) {
      obj.hostAffinityRules = message.hostAffinityRules.map((e) =>
        e ? PlacementPolicy_HostAffinityRule.toJSON(e) : undefined
      );
    } else {
      obj.hostAffinityRules = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlacementPolicy>, I>>(
    object: I
  ): PlacementPolicy {
    const message = { ...basePlacementPolicy } as PlacementPolicy;
    message.placementGroupId = object.placementGroupId ?? "";
    message.hostAffinityRules =
      object.hostAffinityRules?.map((e) =>
        PlacementPolicy_HostAffinityRule.fromPartial(e)
      ) || [];
    return message;
  },
};

messageTypeRegistry.set(PlacementPolicy.$type, PlacementPolicy);

const basePlacementPolicy_HostAffinityRule: object = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule",
  key: "",
  op: 0,
  values: "",
};

export const PlacementPolicy_HostAffinityRule = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule" as const,

  encode(
    message: PlacementPolicy_HostAffinityRule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.op !== 0) {
      writer.uint32(16).int32(message.op);
    }
    for (const v of message.values) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlacementPolicy_HostAffinityRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePlacementPolicy_HostAffinityRule,
    } as PlacementPolicy_HostAffinityRule;
    message.values = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.op = reader.int32() as any;
          break;
        case 3:
          message.values.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlacementPolicy_HostAffinityRule {
    const message = {
      ...basePlacementPolicy_HostAffinityRule,
    } as PlacementPolicy_HostAffinityRule;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.op =
      object.op !== undefined && object.op !== null
        ? placementPolicy_HostAffinityRule_OperatorFromJSON(object.op)
        : 0;
    message.values = (object.values ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: PlacementPolicy_HostAffinityRule): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.op !== undefined &&
      (obj.op = placementPolicy_HostAffinityRule_OperatorToJSON(message.op));
    if (message.values) {
      obj.values = message.values.map((e) => e);
    } else {
      obj.values = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<PlacementPolicy_HostAffinityRule>, I>
  >(object: I): PlacementPolicy_HostAffinityRule {
    const message = {
      ...basePlacementPolicy_HostAffinityRule,
    } as PlacementPolicy_HostAffinityRule;
    message.key = object.key ?? "";
    message.op = object.op ?? 0;
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  PlacementPolicy_HostAffinityRule.$type,
  PlacementPolicy_HostAffinityRule
);

const baseResourcesSpec: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.ResourcesSpec",
  memory: 0,
  cores: 0,
  coreFraction: 0,
  gpus: 0,
};

export const ResourcesSpec = {
  $type: "yandex.cloud.compute.v1.instancegroup.ResourcesSpec" as const,

  encode(
    message: ResourcesSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.memory !== 0) {
      writer.uint32(8).int64(message.memory);
    }
    if (message.cores !== 0) {
      writer.uint32(16).int64(message.cores);
    }
    if (message.coreFraction !== 0) {
      writer.uint32(24).int64(message.coreFraction);
    }
    if (message.gpus !== 0) {
      writer.uint32(32).int64(message.gpus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourcesSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResourcesSpec } as ResourcesSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memory = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.cores = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.coreFraction = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.gpus = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResourcesSpec {
    const message = { ...baseResourcesSpec } as ResourcesSpec;
    message.memory =
      object.memory !== undefined && object.memory !== null
        ? Number(object.memory)
        : 0;
    message.cores =
      object.cores !== undefined && object.cores !== null
        ? Number(object.cores)
        : 0;
    message.coreFraction =
      object.coreFraction !== undefined && object.coreFraction !== null
        ? Number(object.coreFraction)
        : 0;
    message.gpus =
      object.gpus !== undefined && object.gpus !== null
        ? Number(object.gpus)
        : 0;
    return message;
  },

  toJSON(message: ResourcesSpec): unknown {
    const obj: any = {};
    message.memory !== undefined && (obj.memory = Math.round(message.memory));
    message.cores !== undefined && (obj.cores = Math.round(message.cores));
    message.coreFraction !== undefined &&
      (obj.coreFraction = Math.round(message.coreFraction));
    message.gpus !== undefined && (obj.gpus = Math.round(message.gpus));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResourcesSpec>, I>>(
    object: I
  ): ResourcesSpec {
    const message = { ...baseResourcesSpec } as ResourcesSpec;
    message.memory = object.memory ?? 0;
    message.cores = object.cores ?? 0;
    message.coreFraction = object.coreFraction ?? 0;
    message.gpus = object.gpus ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ResourcesSpec.$type, ResourcesSpec);

const baseAttachedDiskSpec: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec",
  mode: 0,
  deviceName: "",
  diskId: "",
  name: "",
};

export const AttachedDiskSpec = {
  $type: "yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec" as const,

  encode(
    message: AttachedDiskSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    if (message.deviceName !== "") {
      writer.uint32(18).string(message.deviceName);
    }
    if (message.diskSpec !== undefined) {
      AttachedDiskSpec_DiskSpec.encode(
        message.diskSpec,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.diskId !== "") {
      writer.uint32(34).string(message.diskId);
    }
    if (message.name !== "") {
      writer.uint32(58).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttachedDiskSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAttachedDiskSpec } as AttachedDiskSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mode = reader.int32() as any;
          break;
        case 2:
          message.deviceName = reader.string();
          break;
        case 3:
          message.diskSpec = AttachedDiskSpec_DiskSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.diskId = reader.string();
          break;
        case 7:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AttachedDiskSpec {
    const message = { ...baseAttachedDiskSpec } as AttachedDiskSpec;
    message.mode =
      object.mode !== undefined && object.mode !== null
        ? attachedDiskSpec_ModeFromJSON(object.mode)
        : 0;
    message.deviceName =
      object.deviceName !== undefined && object.deviceName !== null
        ? String(object.deviceName)
        : "";
    message.diskSpec =
      object.diskSpec !== undefined && object.diskSpec !== null
        ? AttachedDiskSpec_DiskSpec.fromJSON(object.diskSpec)
        : undefined;
    message.diskId =
      object.diskId !== undefined && object.diskId !== null
        ? String(object.diskId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: AttachedDiskSpec): unknown {
    const obj: any = {};
    message.mode !== undefined &&
      (obj.mode = attachedDiskSpec_ModeToJSON(message.mode));
    message.deviceName !== undefined && (obj.deviceName = message.deviceName);
    message.diskSpec !== undefined &&
      (obj.diskSpec = message.diskSpec
        ? AttachedDiskSpec_DiskSpec.toJSON(message.diskSpec)
        : undefined);
    message.diskId !== undefined && (obj.diskId = message.diskId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AttachedDiskSpec>, I>>(
    object: I
  ): AttachedDiskSpec {
    const message = { ...baseAttachedDiskSpec } as AttachedDiskSpec;
    message.mode = object.mode ?? 0;
    message.deviceName = object.deviceName ?? "";
    message.diskSpec =
      object.diskSpec !== undefined && object.diskSpec !== null
        ? AttachedDiskSpec_DiskSpec.fromPartial(object.diskSpec)
        : undefined;
    message.diskId = object.diskId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(AttachedDiskSpec.$type, AttachedDiskSpec);

const baseAttachedDiskSpec_DiskSpec: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec",
  description: "",
  typeId: "",
  size: 0,
  preserveAfterInstanceDelete: false,
};

export const AttachedDiskSpec_DiskSpec = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec" as const,

  encode(
    message: AttachedDiskSpec_DiskSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.typeId !== "") {
      writer.uint32(18).string(message.typeId);
    }
    if (message.size !== 0) {
      writer.uint32(24).int64(message.size);
    }
    if (message.imageId !== undefined) {
      writer.uint32(34).string(message.imageId);
    }
    if (message.snapshotId !== undefined) {
      writer.uint32(42).string(message.snapshotId);
    }
    if (message.preserveAfterInstanceDelete === true) {
      writer.uint32(48).bool(message.preserveAfterInstanceDelete);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AttachedDiskSpec_DiskSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAttachedDiskSpec_DiskSpec,
    } as AttachedDiskSpec_DiskSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;
        case 2:
          message.typeId = reader.string();
          break;
        case 3:
          message.size = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.imageId = reader.string();
          break;
        case 5:
          message.snapshotId = reader.string();
          break;
        case 6:
          message.preserveAfterInstanceDelete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AttachedDiskSpec_DiskSpec {
    const message = {
      ...baseAttachedDiskSpec_DiskSpec,
    } as AttachedDiskSpec_DiskSpec;
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.typeId =
      object.typeId !== undefined && object.typeId !== null
        ? String(object.typeId)
        : "";
    message.size =
      object.size !== undefined && object.size !== null
        ? Number(object.size)
        : 0;
    message.imageId =
      object.imageId !== undefined && object.imageId !== null
        ? String(object.imageId)
        : undefined;
    message.snapshotId =
      object.snapshotId !== undefined && object.snapshotId !== null
        ? String(object.snapshotId)
        : undefined;
    message.preserveAfterInstanceDelete =
      object.preserveAfterInstanceDelete !== undefined &&
      object.preserveAfterInstanceDelete !== null
        ? Boolean(object.preserveAfterInstanceDelete)
        : false;
    return message;
  },

  toJSON(message: AttachedDiskSpec_DiskSpec): unknown {
    const obj: any = {};
    message.description !== undefined &&
      (obj.description = message.description);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.size !== undefined && (obj.size = Math.round(message.size));
    message.imageId !== undefined && (obj.imageId = message.imageId);
    message.snapshotId !== undefined && (obj.snapshotId = message.snapshotId);
    message.preserveAfterInstanceDelete !== undefined &&
      (obj.preserveAfterInstanceDelete = message.preserveAfterInstanceDelete);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AttachedDiskSpec_DiskSpec>, I>>(
    object: I
  ): AttachedDiskSpec_DiskSpec {
    const message = {
      ...baseAttachedDiskSpec_DiskSpec,
    } as AttachedDiskSpec_DiskSpec;
    message.description = object.description ?? "";
    message.typeId = object.typeId ?? "";
    message.size = object.size ?? 0;
    message.imageId = object.imageId ?? undefined;
    message.snapshotId = object.snapshotId ?? undefined;
    message.preserveAfterInstanceDelete =
      object.preserveAfterInstanceDelete ?? false;
    return message;
  },
};

messageTypeRegistry.set(
  AttachedDiskSpec_DiskSpec.$type,
  AttachedDiskSpec_DiskSpec
);

const baseNetworkInterfaceSpec: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec",
  networkId: "",
  subnetIds: "",
  securityGroupIds: "",
};

export const NetworkInterfaceSpec = {
  $type: "yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec" as const,

  encode(
    message: NetworkInterfaceSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkId !== "") {
      writer.uint32(10).string(message.networkId);
    }
    for (const v of message.subnetIds) {
      writer.uint32(18).string(v!);
    }
    if (message.primaryV4AddressSpec !== undefined) {
      PrimaryAddressSpec.encode(
        message.primaryV4AddressSpec,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.primaryV6AddressSpec !== undefined) {
      PrimaryAddressSpec.encode(
        message.primaryV6AddressSpec,
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): NetworkInterfaceSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNetworkInterfaceSpec } as NetworkInterfaceSpec;
    message.subnetIds = [];
    message.securityGroupIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkId = reader.string();
          break;
        case 2:
          message.subnetIds.push(reader.string());
          break;
        case 3:
          message.primaryV4AddressSpec = PrimaryAddressSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.primaryV6AddressSpec = PrimaryAddressSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.securityGroupIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NetworkInterfaceSpec {
    const message = { ...baseNetworkInterfaceSpec } as NetworkInterfaceSpec;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.subnetIds = (object.subnetIds ?? []).map((e: any) => String(e));
    message.primaryV4AddressSpec =
      object.primaryV4AddressSpec !== undefined &&
      object.primaryV4AddressSpec !== null
        ? PrimaryAddressSpec.fromJSON(object.primaryV4AddressSpec)
        : undefined;
    message.primaryV6AddressSpec =
      object.primaryV6AddressSpec !== undefined &&
      object.primaryV6AddressSpec !== null
        ? PrimaryAddressSpec.fromJSON(object.primaryV6AddressSpec)
        : undefined;
    message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: NetworkInterfaceSpec): unknown {
    const obj: any = {};
    message.networkId !== undefined && (obj.networkId = message.networkId);
    if (message.subnetIds) {
      obj.subnetIds = message.subnetIds.map((e) => e);
    } else {
      obj.subnetIds = [];
    }
    message.primaryV4AddressSpec !== undefined &&
      (obj.primaryV4AddressSpec = message.primaryV4AddressSpec
        ? PrimaryAddressSpec.toJSON(message.primaryV4AddressSpec)
        : undefined);
    message.primaryV6AddressSpec !== undefined &&
      (obj.primaryV6AddressSpec = message.primaryV6AddressSpec
        ? PrimaryAddressSpec.toJSON(message.primaryV6AddressSpec)
        : undefined);
    if (message.securityGroupIds) {
      obj.securityGroupIds = message.securityGroupIds.map((e) => e);
    } else {
      obj.securityGroupIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NetworkInterfaceSpec>, I>>(
    object: I
  ): NetworkInterfaceSpec {
    const message = { ...baseNetworkInterfaceSpec } as NetworkInterfaceSpec;
    message.networkId = object.networkId ?? "";
    message.subnetIds = object.subnetIds?.map((e) => e) || [];
    message.primaryV4AddressSpec =
      object.primaryV4AddressSpec !== undefined &&
      object.primaryV4AddressSpec !== null
        ? PrimaryAddressSpec.fromPartial(object.primaryV4AddressSpec)
        : undefined;
    message.primaryV6AddressSpec =
      object.primaryV6AddressSpec !== undefined &&
      object.primaryV6AddressSpec !== null
        ? PrimaryAddressSpec.fromPartial(object.primaryV6AddressSpec)
        : undefined;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(NetworkInterfaceSpec.$type, NetworkInterfaceSpec);

const basePrimaryAddressSpec: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec",
  address: "",
};

export const PrimaryAddressSpec = {
  $type: "yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec" as const,

  encode(
    message: PrimaryAddressSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.oneToOneNatSpec !== undefined) {
      OneToOneNatSpec.encode(
        message.oneToOneNatSpec,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.dnsRecordSpecs) {
      DnsRecordSpec.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrimaryAddressSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePrimaryAddressSpec } as PrimaryAddressSpec;
    message.dnsRecordSpecs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oneToOneNatSpec = OneToOneNatSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.dnsRecordSpecs.push(
            DnsRecordSpec.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PrimaryAddressSpec {
    const message = { ...basePrimaryAddressSpec } as PrimaryAddressSpec;
    message.oneToOneNatSpec =
      object.oneToOneNatSpec !== undefined && object.oneToOneNatSpec !== null
        ? OneToOneNatSpec.fromJSON(object.oneToOneNatSpec)
        : undefined;
    message.dnsRecordSpecs = (object.dnsRecordSpecs ?? []).map((e: any) =>
      DnsRecordSpec.fromJSON(e)
    );
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: PrimaryAddressSpec): unknown {
    const obj: any = {};
    message.oneToOneNatSpec !== undefined &&
      (obj.oneToOneNatSpec = message.oneToOneNatSpec
        ? OneToOneNatSpec.toJSON(message.oneToOneNatSpec)
        : undefined);
    if (message.dnsRecordSpecs) {
      obj.dnsRecordSpecs = message.dnsRecordSpecs.map((e) =>
        e ? DnsRecordSpec.toJSON(e) : undefined
      );
    } else {
      obj.dnsRecordSpecs = [];
    }
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PrimaryAddressSpec>, I>>(
    object: I
  ): PrimaryAddressSpec {
    const message = { ...basePrimaryAddressSpec } as PrimaryAddressSpec;
    message.oneToOneNatSpec =
      object.oneToOneNatSpec !== undefined && object.oneToOneNatSpec !== null
        ? OneToOneNatSpec.fromPartial(object.oneToOneNatSpec)
        : undefined;
    message.dnsRecordSpecs =
      object.dnsRecordSpecs?.map((e) => DnsRecordSpec.fromPartial(e)) || [];
    message.address = object.address ?? "";
    return message;
  },
};

messageTypeRegistry.set(PrimaryAddressSpec.$type, PrimaryAddressSpec);

const baseOneToOneNatSpec: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec",
  ipVersion: 0,
  address: "",
};

export const OneToOneNatSpec = {
  $type: "yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec" as const,

  encode(
    message: OneToOneNatSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ipVersion !== 0) {
      writer.uint32(8).int32(message.ipVersion);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    for (const v of message.dnsRecordSpecs) {
      DnsRecordSpec.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OneToOneNatSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOneToOneNatSpec } as OneToOneNatSpec;
    message.dnsRecordSpecs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ipVersion = reader.int32() as any;
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.dnsRecordSpecs.push(
            DnsRecordSpec.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OneToOneNatSpec {
    const message = { ...baseOneToOneNatSpec } as OneToOneNatSpec;
    message.ipVersion =
      object.ipVersion !== undefined && object.ipVersion !== null
        ? ipVersionFromJSON(object.ipVersion)
        : 0;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.dnsRecordSpecs = (object.dnsRecordSpecs ?? []).map((e: any) =>
      DnsRecordSpec.fromJSON(e)
    );
    return message;
  },

  toJSON(message: OneToOneNatSpec): unknown {
    const obj: any = {};
    message.ipVersion !== undefined &&
      (obj.ipVersion = ipVersionToJSON(message.ipVersion));
    message.address !== undefined && (obj.address = message.address);
    if (message.dnsRecordSpecs) {
      obj.dnsRecordSpecs = message.dnsRecordSpecs.map((e) =>
        e ? DnsRecordSpec.toJSON(e) : undefined
      );
    } else {
      obj.dnsRecordSpecs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OneToOneNatSpec>, I>>(
    object: I
  ): OneToOneNatSpec {
    const message = { ...baseOneToOneNatSpec } as OneToOneNatSpec;
    message.ipVersion = object.ipVersion ?? 0;
    message.address = object.address ?? "";
    message.dnsRecordSpecs =
      object.dnsRecordSpecs?.map((e) => DnsRecordSpec.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(OneToOneNatSpec.$type, OneToOneNatSpec);

const baseDnsRecordSpec: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.DnsRecordSpec",
  fqdn: "",
  dnsZoneId: "",
  ttl: 0,
  ptr: false,
};

export const DnsRecordSpec = {
  $type: "yandex.cloud.compute.v1.instancegroup.DnsRecordSpec" as const,

  encode(
    message: DnsRecordSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fqdn !== "") {
      writer.uint32(10).string(message.fqdn);
    }
    if (message.dnsZoneId !== "") {
      writer.uint32(18).string(message.dnsZoneId);
    }
    if (message.ttl !== 0) {
      writer.uint32(24).int64(message.ttl);
    }
    if (message.ptr === true) {
      writer.uint32(32).bool(message.ptr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DnsRecordSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDnsRecordSpec } as DnsRecordSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fqdn = reader.string();
          break;
        case 2:
          message.dnsZoneId = reader.string();
          break;
        case 3:
          message.ttl = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.ptr = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DnsRecordSpec {
    const message = { ...baseDnsRecordSpec } as DnsRecordSpec;
    message.fqdn =
      object.fqdn !== undefined && object.fqdn !== null
        ? String(object.fqdn)
        : "";
    message.dnsZoneId =
      object.dnsZoneId !== undefined && object.dnsZoneId !== null
        ? String(object.dnsZoneId)
        : "";
    message.ttl =
      object.ttl !== undefined && object.ttl !== null ? Number(object.ttl) : 0;
    message.ptr =
      object.ptr !== undefined && object.ptr !== null
        ? Boolean(object.ptr)
        : false;
    return message;
  },

  toJSON(message: DnsRecordSpec): unknown {
    const obj: any = {};
    message.fqdn !== undefined && (obj.fqdn = message.fqdn);
    message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
    message.ttl !== undefined && (obj.ttl = Math.round(message.ttl));
    message.ptr !== undefined && (obj.ptr = message.ptr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DnsRecordSpec>, I>>(
    object: I
  ): DnsRecordSpec {
    const message = { ...baseDnsRecordSpec } as DnsRecordSpec;
    message.fqdn = object.fqdn ?? "";
    message.dnsZoneId = object.dnsZoneId ?? "";
    message.ttl = object.ttl ?? 0;
    message.ptr = object.ptr ?? false;
    return message;
  },
};

messageTypeRegistry.set(DnsRecordSpec.$type, DnsRecordSpec);

const baseSchedulingPolicy: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.SchedulingPolicy",
  preemptible: false,
};

export const SchedulingPolicy = {
  $type: "yandex.cloud.compute.v1.instancegroup.SchedulingPolicy" as const,

  encode(
    message: SchedulingPolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.preemptible === true) {
      writer.uint32(8).bool(message.preemptible);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchedulingPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSchedulingPolicy } as SchedulingPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.preemptible = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SchedulingPolicy {
    const message = { ...baseSchedulingPolicy } as SchedulingPolicy;
    message.preemptible =
      object.preemptible !== undefined && object.preemptible !== null
        ? Boolean(object.preemptible)
        : false;
    return message;
  },

  toJSON(message: SchedulingPolicy): unknown {
    const obj: any = {};
    message.preemptible !== undefined &&
      (obj.preemptible = message.preemptible);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SchedulingPolicy>, I>>(
    object: I
  ): SchedulingPolicy {
    const message = { ...baseSchedulingPolicy } as SchedulingPolicy;
    message.preemptible = object.preemptible ?? false;
    return message;
  },
};

messageTypeRegistry.set(SchedulingPolicy.$type, SchedulingPolicy);

const baseNetworkSettings: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.NetworkSettings",
  type: 0,
};

export const NetworkSettings = {
  $type: "yandex.cloud.compute.v1.instancegroup.NetworkSettings" as const,

  encode(
    message: NetworkSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNetworkSettings } as NetworkSettings;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NetworkSettings {
    const message = { ...baseNetworkSettings } as NetworkSettings;
    message.type =
      object.type !== undefined && object.type !== null
        ? networkSettings_TypeFromJSON(object.type)
        : 0;
    return message;
  },

  toJSON(message: NetworkSettings): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = networkSettings_TypeToJSON(message.type));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NetworkSettings>, I>>(
    object: I
  ): NetworkSettings {
    const message = { ...baseNetworkSettings } as NetworkSettings;
    message.type = object.type ?? 0;
    return message;
  },
};

messageTypeRegistry.set(NetworkSettings.$type, NetworkSettings);

const baseLoadBalancerSpec: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec",
  ignoreHealthChecks: false,
};

export const LoadBalancerSpec = {
  $type: "yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec" as const,

  encode(
    message: LoadBalancerSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.targetGroupSpec !== undefined) {
      TargetGroupSpec.encode(
        message.targetGroupSpec,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.maxOpeningTrafficDuration !== undefined) {
      Duration.encode(
        message.maxOpeningTrafficDuration,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.ignoreHealthChecks === true) {
      writer.uint32(32).bool(message.ignoreHealthChecks);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoadBalancerSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLoadBalancerSpec } as LoadBalancerSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetGroupSpec = TargetGroupSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.maxOpeningTrafficDuration = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.ignoreHealthChecks = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadBalancerSpec {
    const message = { ...baseLoadBalancerSpec } as LoadBalancerSpec;
    message.targetGroupSpec =
      object.targetGroupSpec !== undefined && object.targetGroupSpec !== null
        ? TargetGroupSpec.fromJSON(object.targetGroupSpec)
        : undefined;
    message.maxOpeningTrafficDuration =
      object.maxOpeningTrafficDuration !== undefined &&
      object.maxOpeningTrafficDuration !== null
        ? Duration.fromJSON(object.maxOpeningTrafficDuration)
        : undefined;
    message.ignoreHealthChecks =
      object.ignoreHealthChecks !== undefined &&
      object.ignoreHealthChecks !== null
        ? Boolean(object.ignoreHealthChecks)
        : false;
    return message;
  },

  toJSON(message: LoadBalancerSpec): unknown {
    const obj: any = {};
    message.targetGroupSpec !== undefined &&
      (obj.targetGroupSpec = message.targetGroupSpec
        ? TargetGroupSpec.toJSON(message.targetGroupSpec)
        : undefined);
    message.maxOpeningTrafficDuration !== undefined &&
      (obj.maxOpeningTrafficDuration = message.maxOpeningTrafficDuration
        ? Duration.toJSON(message.maxOpeningTrafficDuration)
        : undefined);
    message.ignoreHealthChecks !== undefined &&
      (obj.ignoreHealthChecks = message.ignoreHealthChecks);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadBalancerSpec>, I>>(
    object: I
  ): LoadBalancerSpec {
    const message = { ...baseLoadBalancerSpec } as LoadBalancerSpec;
    message.targetGroupSpec =
      object.targetGroupSpec !== undefined && object.targetGroupSpec !== null
        ? TargetGroupSpec.fromPartial(object.targetGroupSpec)
        : undefined;
    message.maxOpeningTrafficDuration =
      object.maxOpeningTrafficDuration !== undefined &&
      object.maxOpeningTrafficDuration !== null
        ? Duration.fromPartial(object.maxOpeningTrafficDuration)
        : undefined;
    message.ignoreHealthChecks = object.ignoreHealthChecks ?? false;
    return message;
  },
};

messageTypeRegistry.set(LoadBalancerSpec.$type, LoadBalancerSpec);

const baseTargetGroupSpec: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.TargetGroupSpec",
  name: "",
  description: "",
};

export const TargetGroupSpec = {
  $type: "yandex.cloud.compute.v1.instancegroup.TargetGroupSpec" as const,

  encode(
    message: TargetGroupSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      TargetGroupSpec_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(26).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TargetGroupSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTargetGroupSpec } as TargetGroupSpec;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          const entry3 = TargetGroupSpec_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.labels[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TargetGroupSpec {
    const message = { ...baseTargetGroupSpec } as TargetGroupSpec;
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
    return message;
  },

  toJSON(message: TargetGroupSpec): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TargetGroupSpec>, I>>(
    object: I
  ): TargetGroupSpec {
    const message = { ...baseTargetGroupSpec } as TargetGroupSpec;
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
    return message;
  },
};

messageTypeRegistry.set(TargetGroupSpec.$type, TargetGroupSpec);

const baseTargetGroupSpec_LabelsEntry: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.LabelsEntry",
  key: "",
  value: "",
};

export const TargetGroupSpec_LabelsEntry = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.LabelsEntry" as const,

  encode(
    message: TargetGroupSpec_LabelsEntry,
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
  ): TargetGroupSpec_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTargetGroupSpec_LabelsEntry,
    } as TargetGroupSpec_LabelsEntry;
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

  fromJSON(object: any): TargetGroupSpec_LabelsEntry {
    const message = {
      ...baseTargetGroupSpec_LabelsEntry,
    } as TargetGroupSpec_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: TargetGroupSpec_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TargetGroupSpec_LabelsEntry>, I>>(
    object: I
  ): TargetGroupSpec_LabelsEntry {
    const message = {
      ...baseTargetGroupSpec_LabelsEntry,
    } as TargetGroupSpec_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  TargetGroupSpec_LabelsEntry.$type,
  TargetGroupSpec_LabelsEntry
);

const baseApplicationLoadBalancerSpec: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec",
  ignoreHealthChecks: false,
};

export const ApplicationLoadBalancerSpec = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec" as const,

  encode(
    message: ApplicationLoadBalancerSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.targetGroupSpec !== undefined) {
      ApplicationTargetGroupSpec.encode(
        message.targetGroupSpec,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.maxOpeningTrafficDuration !== undefined) {
      Duration.encode(
        message.maxOpeningTrafficDuration,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.ignoreHealthChecks === true) {
      writer.uint32(24).bool(message.ignoreHealthChecks);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ApplicationLoadBalancerSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseApplicationLoadBalancerSpec,
    } as ApplicationLoadBalancerSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetGroupSpec = ApplicationTargetGroupSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.maxOpeningTrafficDuration = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.ignoreHealthChecks = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApplicationLoadBalancerSpec {
    const message = {
      ...baseApplicationLoadBalancerSpec,
    } as ApplicationLoadBalancerSpec;
    message.targetGroupSpec =
      object.targetGroupSpec !== undefined && object.targetGroupSpec !== null
        ? ApplicationTargetGroupSpec.fromJSON(object.targetGroupSpec)
        : undefined;
    message.maxOpeningTrafficDuration =
      object.maxOpeningTrafficDuration !== undefined &&
      object.maxOpeningTrafficDuration !== null
        ? Duration.fromJSON(object.maxOpeningTrafficDuration)
        : undefined;
    message.ignoreHealthChecks =
      object.ignoreHealthChecks !== undefined &&
      object.ignoreHealthChecks !== null
        ? Boolean(object.ignoreHealthChecks)
        : false;
    return message;
  },

  toJSON(message: ApplicationLoadBalancerSpec): unknown {
    const obj: any = {};
    message.targetGroupSpec !== undefined &&
      (obj.targetGroupSpec = message.targetGroupSpec
        ? ApplicationTargetGroupSpec.toJSON(message.targetGroupSpec)
        : undefined);
    message.maxOpeningTrafficDuration !== undefined &&
      (obj.maxOpeningTrafficDuration = message.maxOpeningTrafficDuration
        ? Duration.toJSON(message.maxOpeningTrafficDuration)
        : undefined);
    message.ignoreHealthChecks !== undefined &&
      (obj.ignoreHealthChecks = message.ignoreHealthChecks);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ApplicationLoadBalancerSpec>, I>>(
    object: I
  ): ApplicationLoadBalancerSpec {
    const message = {
      ...baseApplicationLoadBalancerSpec,
    } as ApplicationLoadBalancerSpec;
    message.targetGroupSpec =
      object.targetGroupSpec !== undefined && object.targetGroupSpec !== null
        ? ApplicationTargetGroupSpec.fromPartial(object.targetGroupSpec)
        : undefined;
    message.maxOpeningTrafficDuration =
      object.maxOpeningTrafficDuration !== undefined &&
      object.maxOpeningTrafficDuration !== null
        ? Duration.fromPartial(object.maxOpeningTrafficDuration)
        : undefined;
    message.ignoreHealthChecks = object.ignoreHealthChecks ?? false;
    return message;
  },
};

messageTypeRegistry.set(
  ApplicationLoadBalancerSpec.$type,
  ApplicationLoadBalancerSpec
);

const baseApplicationTargetGroupSpec: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec",
  name: "",
  description: "",
};

export const ApplicationTargetGroupSpec = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec" as const,

  encode(
    message: ApplicationTargetGroupSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      ApplicationTargetGroupSpec_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(26).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ApplicationTargetGroupSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseApplicationTargetGroupSpec,
    } as ApplicationTargetGroupSpec;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          const entry3 = ApplicationTargetGroupSpec_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.labels[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApplicationTargetGroupSpec {
    const message = {
      ...baseApplicationTargetGroupSpec,
    } as ApplicationTargetGroupSpec;
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
    return message;
  },

  toJSON(message: ApplicationTargetGroupSpec): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ApplicationTargetGroupSpec>, I>>(
    object: I
  ): ApplicationTargetGroupSpec {
    const message = {
      ...baseApplicationTargetGroupSpec,
    } as ApplicationTargetGroupSpec;
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
    return message;
  },
};

messageTypeRegistry.set(
  ApplicationTargetGroupSpec.$type,
  ApplicationTargetGroupSpec
);

const baseApplicationTargetGroupSpec_LabelsEntry: object = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.LabelsEntry",
  key: "",
  value: "",
};

export const ApplicationTargetGroupSpec_LabelsEntry = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.LabelsEntry" as const,

  encode(
    message: ApplicationTargetGroupSpec_LabelsEntry,
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
  ): ApplicationTargetGroupSpec_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseApplicationTargetGroupSpec_LabelsEntry,
    } as ApplicationTargetGroupSpec_LabelsEntry;
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

  fromJSON(object: any): ApplicationTargetGroupSpec_LabelsEntry {
    const message = {
      ...baseApplicationTargetGroupSpec_LabelsEntry,
    } as ApplicationTargetGroupSpec_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: ApplicationTargetGroupSpec_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ApplicationTargetGroupSpec_LabelsEntry>, I>
  >(object: I): ApplicationTargetGroupSpec_LabelsEntry {
    const message = {
      ...baseApplicationTargetGroupSpec_LabelsEntry,
    } as ApplicationTargetGroupSpec_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ApplicationTargetGroupSpec_LabelsEntry.$type,
  ApplicationTargetGroupSpec_LabelsEntry
);

const baseHealthChecksSpec: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.HealthChecksSpec",
};

export const HealthChecksSpec = {
  $type: "yandex.cloud.compute.v1.instancegroup.HealthChecksSpec" as const,

  encode(
    message: HealthChecksSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.healthCheckSpecs) {
      HealthCheckSpec.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxCheckingHealthDuration !== undefined) {
      Duration.encode(
        message.maxCheckingHealthDuration,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HealthChecksSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHealthChecksSpec } as HealthChecksSpec;
    message.healthCheckSpecs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.healthCheckSpecs.push(
            HealthCheckSpec.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.maxCheckingHealthDuration = Duration.decode(
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

  fromJSON(object: any): HealthChecksSpec {
    const message = { ...baseHealthChecksSpec } as HealthChecksSpec;
    message.healthCheckSpecs = (object.healthCheckSpecs ?? []).map((e: any) =>
      HealthCheckSpec.fromJSON(e)
    );
    message.maxCheckingHealthDuration =
      object.maxCheckingHealthDuration !== undefined &&
      object.maxCheckingHealthDuration !== null
        ? Duration.fromJSON(object.maxCheckingHealthDuration)
        : undefined;
    return message;
  },

  toJSON(message: HealthChecksSpec): unknown {
    const obj: any = {};
    if (message.healthCheckSpecs) {
      obj.healthCheckSpecs = message.healthCheckSpecs.map((e) =>
        e ? HealthCheckSpec.toJSON(e) : undefined
      );
    } else {
      obj.healthCheckSpecs = [];
    }
    message.maxCheckingHealthDuration !== undefined &&
      (obj.maxCheckingHealthDuration = message.maxCheckingHealthDuration
        ? Duration.toJSON(message.maxCheckingHealthDuration)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HealthChecksSpec>, I>>(
    object: I
  ): HealthChecksSpec {
    const message = { ...baseHealthChecksSpec } as HealthChecksSpec;
    message.healthCheckSpecs =
      object.healthCheckSpecs?.map((e) => HealthCheckSpec.fromPartial(e)) || [];
    message.maxCheckingHealthDuration =
      object.maxCheckingHealthDuration !== undefined &&
      object.maxCheckingHealthDuration !== null
        ? Duration.fromPartial(object.maxCheckingHealthDuration)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(HealthChecksSpec.$type, HealthChecksSpec);

const baseHealthCheckSpec: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.HealthCheckSpec",
  unhealthyThreshold: 0,
  healthyThreshold: 0,
};

export const HealthCheckSpec = {
  $type: "yandex.cloud.compute.v1.instancegroup.HealthCheckSpec" as const,

  encode(
    message: HealthCheckSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.interval !== undefined) {
      Duration.encode(message.interval, writer.uint32(10).fork()).ldelim();
    }
    if (message.timeout !== undefined) {
      Duration.encode(message.timeout, writer.uint32(18).fork()).ldelim();
    }
    if (message.unhealthyThreshold !== 0) {
      writer.uint32(24).int64(message.unhealthyThreshold);
    }
    if (message.healthyThreshold !== 0) {
      writer.uint32(32).int64(message.healthyThreshold);
    }
    if (message.tcpOptions !== undefined) {
      HealthCheckSpec_TcpOptions.encode(
        message.tcpOptions,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.httpOptions !== undefined) {
      HealthCheckSpec_HttpOptions.encode(
        message.httpOptions,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheckSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHealthCheckSpec } as HealthCheckSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interval = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.timeout = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.unhealthyThreshold = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.healthyThreshold = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.tcpOptions = HealthCheckSpec_TcpOptions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.httpOptions = HealthCheckSpec_HttpOptions.decode(
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

  fromJSON(object: any): HealthCheckSpec {
    const message = { ...baseHealthCheckSpec } as HealthCheckSpec;
    message.interval =
      object.interval !== undefined && object.interval !== null
        ? Duration.fromJSON(object.interval)
        : undefined;
    message.timeout =
      object.timeout !== undefined && object.timeout !== null
        ? Duration.fromJSON(object.timeout)
        : undefined;
    message.unhealthyThreshold =
      object.unhealthyThreshold !== undefined &&
      object.unhealthyThreshold !== null
        ? Number(object.unhealthyThreshold)
        : 0;
    message.healthyThreshold =
      object.healthyThreshold !== undefined && object.healthyThreshold !== null
        ? Number(object.healthyThreshold)
        : 0;
    message.tcpOptions =
      object.tcpOptions !== undefined && object.tcpOptions !== null
        ? HealthCheckSpec_TcpOptions.fromJSON(object.tcpOptions)
        : undefined;
    message.httpOptions =
      object.httpOptions !== undefined && object.httpOptions !== null
        ? HealthCheckSpec_HttpOptions.fromJSON(object.httpOptions)
        : undefined;
    return message;
  },

  toJSON(message: HealthCheckSpec): unknown {
    const obj: any = {};
    message.interval !== undefined &&
      (obj.interval = message.interval
        ? Duration.toJSON(message.interval)
        : undefined);
    message.timeout !== undefined &&
      (obj.timeout = message.timeout
        ? Duration.toJSON(message.timeout)
        : undefined);
    message.unhealthyThreshold !== undefined &&
      (obj.unhealthyThreshold = Math.round(message.unhealthyThreshold));
    message.healthyThreshold !== undefined &&
      (obj.healthyThreshold = Math.round(message.healthyThreshold));
    message.tcpOptions !== undefined &&
      (obj.tcpOptions = message.tcpOptions
        ? HealthCheckSpec_TcpOptions.toJSON(message.tcpOptions)
        : undefined);
    message.httpOptions !== undefined &&
      (obj.httpOptions = message.httpOptions
        ? HealthCheckSpec_HttpOptions.toJSON(message.httpOptions)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HealthCheckSpec>, I>>(
    object: I
  ): HealthCheckSpec {
    const message = { ...baseHealthCheckSpec } as HealthCheckSpec;
    message.interval =
      object.interval !== undefined && object.interval !== null
        ? Duration.fromPartial(object.interval)
        : undefined;
    message.timeout =
      object.timeout !== undefined && object.timeout !== null
        ? Duration.fromPartial(object.timeout)
        : undefined;
    message.unhealthyThreshold = object.unhealthyThreshold ?? 0;
    message.healthyThreshold = object.healthyThreshold ?? 0;
    message.tcpOptions =
      object.tcpOptions !== undefined && object.tcpOptions !== null
        ? HealthCheckSpec_TcpOptions.fromPartial(object.tcpOptions)
        : undefined;
    message.httpOptions =
      object.httpOptions !== undefined && object.httpOptions !== null
        ? HealthCheckSpec_HttpOptions.fromPartial(object.httpOptions)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(HealthCheckSpec.$type, HealthCheckSpec);

const baseHealthCheckSpec_TcpOptions: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions",
  port: 0,
};

export const HealthCheckSpec_TcpOptions = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions" as const,

  encode(
    message: HealthCheckSpec_TcpOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.port !== 0) {
      writer.uint32(8).int64(message.port);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): HealthCheckSpec_TcpOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHealthCheckSpec_TcpOptions,
    } as HealthCheckSpec_TcpOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HealthCheckSpec_TcpOptions {
    const message = {
      ...baseHealthCheckSpec_TcpOptions,
    } as HealthCheckSpec_TcpOptions;
    message.port =
      object.port !== undefined && object.port !== null
        ? Number(object.port)
        : 0;
    return message;
  },

  toJSON(message: HealthCheckSpec_TcpOptions): unknown {
    const obj: any = {};
    message.port !== undefined && (obj.port = Math.round(message.port));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HealthCheckSpec_TcpOptions>, I>>(
    object: I
  ): HealthCheckSpec_TcpOptions {
    const message = {
      ...baseHealthCheckSpec_TcpOptions,
    } as HealthCheckSpec_TcpOptions;
    message.port = object.port ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  HealthCheckSpec_TcpOptions.$type,
  HealthCheckSpec_TcpOptions
);

const baseHealthCheckSpec_HttpOptions: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions",
  port: 0,
  path: "",
};

export const HealthCheckSpec_HttpOptions = {
  $type:
    "yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions" as const,

  encode(
    message: HealthCheckSpec_HttpOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.port !== 0) {
      writer.uint32(8).int64(message.port);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): HealthCheckSpec_HttpOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHealthCheckSpec_HttpOptions,
    } as HealthCheckSpec_HttpOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.path = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HealthCheckSpec_HttpOptions {
    const message = {
      ...baseHealthCheckSpec_HttpOptions,
    } as HealthCheckSpec_HttpOptions;
    message.port =
      object.port !== undefined && object.port !== null
        ? Number(object.port)
        : 0;
    message.path =
      object.path !== undefined && object.path !== null
        ? String(object.path)
        : "";
    return message;
  },

  toJSON(message: HealthCheckSpec_HttpOptions): unknown {
    const obj: any = {};
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.path !== undefined && (obj.path = message.path);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HealthCheckSpec_HttpOptions>, I>>(
    object: I
  ): HealthCheckSpec_HttpOptions {
    const message = {
      ...baseHealthCheckSpec_HttpOptions,
    } as HealthCheckSpec_HttpOptions;
    message.port = object.port ?? 0;
    message.path = object.path ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  HealthCheckSpec_HttpOptions.$type,
  HealthCheckSpec_HttpOptions
);

const baseManagedInstance: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.ManagedInstance",
  id: "",
  status: 0,
  instanceId: "",
  fqdn: "",
  name: "",
  statusMessage: "",
  zoneId: "",
  instanceTag: "",
};

export const ManagedInstance = {
  $type: "yandex.cloud.compute.v1.instancegroup.ManagedInstance" as const,

  encode(
    message: ManagedInstance,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.instanceId !== "") {
      writer.uint32(26).string(message.instanceId);
    }
    if (message.fqdn !== "") {
      writer.uint32(34).string(message.fqdn);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.statusMessage !== "") {
      writer.uint32(50).string(message.statusMessage);
    }
    if (message.zoneId !== "") {
      writer.uint32(58).string(message.zoneId);
    }
    for (const v of message.networkInterfaces) {
      NetworkInterface.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.statusChangedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.statusChangedAt),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.instanceTag !== "") {
      writer.uint32(114).string(message.instanceTag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ManagedInstance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseManagedInstance } as ManagedInstance;
    message.networkInterfaces = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.instanceId = reader.string();
          break;
        case 4:
          message.fqdn = reader.string();
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.statusMessage = reader.string();
          break;
        case 7:
          message.zoneId = reader.string();
          break;
        case 8:
          message.networkInterfaces.push(
            NetworkInterface.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.statusChangedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.instanceTag = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ManagedInstance {
    const message = { ...baseManagedInstance } as ManagedInstance;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.status =
      object.status !== undefined && object.status !== null
        ? managedInstance_StatusFromJSON(object.status)
        : 0;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    message.fqdn =
      object.fqdn !== undefined && object.fqdn !== null
        ? String(object.fqdn)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.statusMessage =
      object.statusMessage !== undefined && object.statusMessage !== null
        ? String(object.statusMessage)
        : "";
    message.zoneId =
      object.zoneId !== undefined && object.zoneId !== null
        ? String(object.zoneId)
        : "";
    message.networkInterfaces = (object.networkInterfaces ?? []).map((e: any) =>
      NetworkInterface.fromJSON(e)
    );
    message.statusChangedAt =
      object.statusChangedAt !== undefined && object.statusChangedAt !== null
        ? fromJsonTimestamp(object.statusChangedAt)
        : undefined;
    message.instanceTag =
      object.instanceTag !== undefined && object.instanceTag !== null
        ? String(object.instanceTag)
        : "";
    return message;
  },

  toJSON(message: ManagedInstance): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.status !== undefined &&
      (obj.status = managedInstance_StatusToJSON(message.status));
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    message.fqdn !== undefined && (obj.fqdn = message.fqdn);
    message.name !== undefined && (obj.name = message.name);
    message.statusMessage !== undefined &&
      (obj.statusMessage = message.statusMessage);
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    if (message.networkInterfaces) {
      obj.networkInterfaces = message.networkInterfaces.map((e) =>
        e ? NetworkInterface.toJSON(e) : undefined
      );
    } else {
      obj.networkInterfaces = [];
    }
    message.statusChangedAt !== undefined &&
      (obj.statusChangedAt = message.statusChangedAt.toISOString());
    message.instanceTag !== undefined &&
      (obj.instanceTag = message.instanceTag);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ManagedInstance>, I>>(
    object: I
  ): ManagedInstance {
    const message = { ...baseManagedInstance } as ManagedInstance;
    message.id = object.id ?? "";
    message.status = object.status ?? 0;
    message.instanceId = object.instanceId ?? "";
    message.fqdn = object.fqdn ?? "";
    message.name = object.name ?? "";
    message.statusMessage = object.statusMessage ?? "";
    message.zoneId = object.zoneId ?? "";
    message.networkInterfaces =
      object.networkInterfaces?.map((e) => NetworkInterface.fromPartial(e)) ||
      [];
    message.statusChangedAt = object.statusChangedAt ?? undefined;
    message.instanceTag = object.instanceTag ?? "";
    return message;
  },
};

messageTypeRegistry.set(ManagedInstance.$type, ManagedInstance);

const baseNetworkInterface: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.NetworkInterface",
  index: "",
  macAddress: "",
  subnetId: "",
};

export const NetworkInterface = {
  $type: "yandex.cloud.compute.v1.instancegroup.NetworkInterface" as const,

  encode(
    message: NetworkInterface,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.macAddress !== "") {
      writer.uint32(18).string(message.macAddress);
    }
    if (message.subnetId !== "") {
      writer.uint32(26).string(message.subnetId);
    }
    if (message.primaryV4Address !== undefined) {
      PrimaryAddress.encode(
        message.primaryV4Address,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.primaryV6Address !== undefined) {
      PrimaryAddress.encode(
        message.primaryV6Address,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkInterface {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNetworkInterface } as NetworkInterface;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.macAddress = reader.string();
          break;
        case 3:
          message.subnetId = reader.string();
          break;
        case 4:
          message.primaryV4Address = PrimaryAddress.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.primaryV6Address = PrimaryAddress.decode(
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

  fromJSON(object: any): NetworkInterface {
    const message = { ...baseNetworkInterface } as NetworkInterface;
    message.index =
      object.index !== undefined && object.index !== null
        ? String(object.index)
        : "";
    message.macAddress =
      object.macAddress !== undefined && object.macAddress !== null
        ? String(object.macAddress)
        : "";
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.primaryV4Address =
      object.primaryV4Address !== undefined && object.primaryV4Address !== null
        ? PrimaryAddress.fromJSON(object.primaryV4Address)
        : undefined;
    message.primaryV6Address =
      object.primaryV6Address !== undefined && object.primaryV6Address !== null
        ? PrimaryAddress.fromJSON(object.primaryV6Address)
        : undefined;
    return message;
  },

  toJSON(message: NetworkInterface): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.macAddress !== undefined && (obj.macAddress = message.macAddress);
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    message.primaryV4Address !== undefined &&
      (obj.primaryV4Address = message.primaryV4Address
        ? PrimaryAddress.toJSON(message.primaryV4Address)
        : undefined);
    message.primaryV6Address !== undefined &&
      (obj.primaryV6Address = message.primaryV6Address
        ? PrimaryAddress.toJSON(message.primaryV6Address)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NetworkInterface>, I>>(
    object: I
  ): NetworkInterface {
    const message = { ...baseNetworkInterface } as NetworkInterface;
    message.index = object.index ?? "";
    message.macAddress = object.macAddress ?? "";
    message.subnetId = object.subnetId ?? "";
    message.primaryV4Address =
      object.primaryV4Address !== undefined && object.primaryV4Address !== null
        ? PrimaryAddress.fromPartial(object.primaryV4Address)
        : undefined;
    message.primaryV6Address =
      object.primaryV6Address !== undefined && object.primaryV6Address !== null
        ? PrimaryAddress.fromPartial(object.primaryV6Address)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(NetworkInterface.$type, NetworkInterface);

const basePrimaryAddress: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.PrimaryAddress",
  address: "",
};

export const PrimaryAddress = {
  $type: "yandex.cloud.compute.v1.instancegroup.PrimaryAddress" as const,

  encode(
    message: PrimaryAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.oneToOneNat !== undefined) {
      OneToOneNat.encode(
        message.oneToOneNat,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.dnsRecords) {
      DnsRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrimaryAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePrimaryAddress } as PrimaryAddress;
    message.dnsRecords = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.oneToOneNat = OneToOneNat.decode(reader, reader.uint32());
          break;
        case 3:
          message.dnsRecords.push(DnsRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PrimaryAddress {
    const message = { ...basePrimaryAddress } as PrimaryAddress;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.oneToOneNat =
      object.oneToOneNat !== undefined && object.oneToOneNat !== null
        ? OneToOneNat.fromJSON(object.oneToOneNat)
        : undefined;
    message.dnsRecords = (object.dnsRecords ?? []).map((e: any) =>
      DnsRecord.fromJSON(e)
    );
    return message;
  },

  toJSON(message: PrimaryAddress): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.oneToOneNat !== undefined &&
      (obj.oneToOneNat = message.oneToOneNat
        ? OneToOneNat.toJSON(message.oneToOneNat)
        : undefined);
    if (message.dnsRecords) {
      obj.dnsRecords = message.dnsRecords.map((e) =>
        e ? DnsRecord.toJSON(e) : undefined
      );
    } else {
      obj.dnsRecords = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PrimaryAddress>, I>>(
    object: I
  ): PrimaryAddress {
    const message = { ...basePrimaryAddress } as PrimaryAddress;
    message.address = object.address ?? "";
    message.oneToOneNat =
      object.oneToOneNat !== undefined && object.oneToOneNat !== null
        ? OneToOneNat.fromPartial(object.oneToOneNat)
        : undefined;
    message.dnsRecords =
      object.dnsRecords?.map((e) => DnsRecord.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(PrimaryAddress.$type, PrimaryAddress);

const baseOneToOneNat: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.OneToOneNat",
  address: "",
  ipVersion: 0,
};

export const OneToOneNat = {
  $type: "yandex.cloud.compute.v1.instancegroup.OneToOneNat" as const,

  encode(
    message: OneToOneNat,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.ipVersion !== 0) {
      writer.uint32(16).int32(message.ipVersion);
    }
    for (const v of message.dnsRecords) {
      DnsRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OneToOneNat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOneToOneNat } as OneToOneNat;
    message.dnsRecords = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.ipVersion = reader.int32() as any;
          break;
        case 3:
          message.dnsRecords.push(DnsRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OneToOneNat {
    const message = { ...baseOneToOneNat } as OneToOneNat;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.ipVersion =
      object.ipVersion !== undefined && object.ipVersion !== null
        ? ipVersionFromJSON(object.ipVersion)
        : 0;
    message.dnsRecords = (object.dnsRecords ?? []).map((e: any) =>
      DnsRecord.fromJSON(e)
    );
    return message;
  },

  toJSON(message: OneToOneNat): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.ipVersion !== undefined &&
      (obj.ipVersion = ipVersionToJSON(message.ipVersion));
    if (message.dnsRecords) {
      obj.dnsRecords = message.dnsRecords.map((e) =>
        e ? DnsRecord.toJSON(e) : undefined
      );
    } else {
      obj.dnsRecords = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OneToOneNat>, I>>(
    object: I
  ): OneToOneNat {
    const message = { ...baseOneToOneNat } as OneToOneNat;
    message.address = object.address ?? "";
    message.ipVersion = object.ipVersion ?? 0;
    message.dnsRecords =
      object.dnsRecords?.map((e) => DnsRecord.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(OneToOneNat.$type, OneToOneNat);

const baseDnsRecord: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.DnsRecord",
  fqdn: "",
  dnsZoneId: "",
  ttl: 0,
  ptr: false,
};

export const DnsRecord = {
  $type: "yandex.cloud.compute.v1.instancegroup.DnsRecord" as const,

  encode(
    message: DnsRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fqdn !== "") {
      writer.uint32(10).string(message.fqdn);
    }
    if (message.dnsZoneId !== "") {
      writer.uint32(18).string(message.dnsZoneId);
    }
    if (message.ttl !== 0) {
      writer.uint32(24).int64(message.ttl);
    }
    if (message.ptr === true) {
      writer.uint32(32).bool(message.ptr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DnsRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDnsRecord } as DnsRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fqdn = reader.string();
          break;
        case 2:
          message.dnsZoneId = reader.string();
          break;
        case 3:
          message.ttl = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.ptr = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DnsRecord {
    const message = { ...baseDnsRecord } as DnsRecord;
    message.fqdn =
      object.fqdn !== undefined && object.fqdn !== null
        ? String(object.fqdn)
        : "";
    message.dnsZoneId =
      object.dnsZoneId !== undefined && object.dnsZoneId !== null
        ? String(object.dnsZoneId)
        : "";
    message.ttl =
      object.ttl !== undefined && object.ttl !== null ? Number(object.ttl) : 0;
    message.ptr =
      object.ptr !== undefined && object.ptr !== null
        ? Boolean(object.ptr)
        : false;
    return message;
  },

  toJSON(message: DnsRecord): unknown {
    const obj: any = {};
    message.fqdn !== undefined && (obj.fqdn = message.fqdn);
    message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
    message.ttl !== undefined && (obj.ttl = Math.round(message.ttl));
    message.ptr !== undefined && (obj.ptr = message.ptr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DnsRecord>, I>>(
    object: I
  ): DnsRecord {
    const message = { ...baseDnsRecord } as DnsRecord;
    message.fqdn = object.fqdn ?? "";
    message.dnsZoneId = object.dnsZoneId ?? "";
    message.ttl = object.ttl ?? 0;
    message.ptr = object.ptr ?? false;
    return message;
  },
};

messageTypeRegistry.set(DnsRecord.$type, DnsRecord);

const baseLogRecord: object = {
  $type: "yandex.cloud.compute.v1.instancegroup.LogRecord",
  message: "",
};

export const LogRecord = {
  $type: "yandex.cloud.compute.v1.instancegroup.LogRecord" as const,

  encode(
    message: LogRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLogRecord } as LogRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LogRecord {
    const message = { ...baseLogRecord } as LogRecord;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? fromJsonTimestamp(object.timestamp)
        : undefined;
    message.message =
      object.message !== undefined && object.message !== null
        ? String(object.message)
        : "";
    return message;
  },

  toJSON(message: LogRecord): unknown {
    const obj: any = {};
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogRecord>, I>>(
    object: I
  ): LogRecord {
    const message = { ...baseLogRecord } as LogRecord;
    message.timestamp = object.timestamp ?? undefined;
    message.message = object.message ?? "";
    return message;
  },
};

messageTypeRegistry.set(LogRecord.$type, LogRecord);

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
