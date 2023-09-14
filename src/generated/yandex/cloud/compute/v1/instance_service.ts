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
  MetadataOptions,
  SchedulingPolicy,
  NetworkSettings,
  GpuSettings,
  PlacementPolicy,
  IpVersion,
  Instance,
  ipVersionFromJSON,
  ipVersionToJSON,
} from "../../../../yandex/cloud/compute/v1/instance";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { DiskPlacementPolicy } from "../../../../yandex/cloud/compute/v1/disk";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import {
  ListAccessBindingsRequest,
  ListAccessBindingsResponse,
  SetAccessBindingsRequest,
  UpdateAccessBindingsRequest,
} from "../../../../yandex/cloud/access/access";

export const protobufPackage = "yandex.cloud.compute.v1";

export enum InstanceView {
  /** BASIC - Doesn't include the metadata of the instance in the server response. */
  BASIC = 0,
  /** FULL - Returns the metadata of the instance in the server response. */
  FULL = 1,
  UNRECOGNIZED = -1,
}

export function instanceViewFromJSON(object: any): InstanceView {
  switch (object) {
    case 0:
    case "BASIC":
      return InstanceView.BASIC;
    case 1:
    case "FULL":
      return InstanceView.FULL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InstanceView.UNRECOGNIZED;
  }
}

export function instanceViewToJSON(object: InstanceView): string {
  switch (object) {
    case InstanceView.BASIC:
      return "BASIC";
    case InstanceView.FULL:
      return "FULL";
    default:
      return "UNKNOWN";
  }
}

export interface GetInstanceRequest {
  $type: "yandex.cloud.compute.v1.GetInstanceRequest";
  /**
   * ID of the Instance resource to return.
   * To get the instance ID, use a [InstanceService.List] request.
   */
  instanceId: string;
  /** Defines which information about the Instance resource should be returned in the server response. */
  view: InstanceView;
}

export interface ListInstancesRequest {
  $type: "yandex.cloud.compute.v1.ListInstancesRequest";
  /**
   * ID of the Folder to list instances in.
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListInstancesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListInstancesResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression consists of one or more conditions united by `AND` operator: `<condition1> [AND <condition2> [<...> AND <conditionN>]]`.
   *
   * Each condition has the form `<field> <operator> <value>`, where:
   * 1. `<field>` is the field name. Currently you can use filtering only on the limited number of fields.
   * 2. `<operator>` is a logical operator, one of `=`, `!=`, `IN`, `NOT IN`.
   * 3. `<value>` represents a value.
   * String values should be written in double (`"`) or single (`'`) quotes. C-style escape sequences are supported (`\"` turns to `"`, `\'` to `'`, `\\` to backslash).
   */
  filter: string;
  /**
   * By which column the listing should be ordered and in which direction,
   * format is "createdAt desc". "id asc" if omitted.
   * The default sorting order is ascending
   */
  orderBy: string;
}

export interface ListInstancesResponse {
  $type: "yandex.cloud.compute.v1.ListInstancesResponse";
  /** List of Instance resources. */
  instances: Instance[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListInstancesRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListInstancesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateInstanceRequest {
  $type: "yandex.cloud.compute.v1.CreateInstanceRequest";
  /**
   * ID of the folder to create an instance in.
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /** Name of the instance. */
  name: string;
  /** Description of the instance. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /**
   * ID of the availability zone where the instance resides.
   * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request
   */
  zoneId: string;
  /**
   * ID of the hardware platform configuration for the instance.
   * This field affects the available values in [resources_spec] field.
   *
   * Platforms allows you to create various types of instances: with a large amount of memory,
   * with a large number of cores, with a burstable performance.
   * For more information, see [Platforms](/docs/compute/concepts/vm-platforms).
   */
  platformId: string;
  /**
   * Computing resources of the instance, such as the amount of memory and number of cores.
   * To get a list of available values, see [Levels of core performance](/docs/compute/concepts/performance-levels).
   */
  resourcesSpec?: ResourcesSpec;
  /**
   * The metadata `key:value` pairs that will be assigned to this instance. This includes custom metadata and predefined keys.
   * The total size of all keys and values must be less than 512 KB.
   *
   * Values are free-form strings, and only have meaning as interpreted by the programs which configure the instance.
   * The values must be 256 KB or less.
   *
   * For example, you may use the metadata in order to provide your public SSH key to the instance.
   * For more information, see [Metadata](/docs/compute/concepts/vm-metadata).
   */
  metadata: { [key: string]: string };
  /** Options allow user to configure access to instance's metadata */
  metadataOptions?: MetadataOptions;
  /** Boot disk to attach to the instance. */
  bootDiskSpec?: AttachedDiskSpec;
  /** Array of secondary disks to attach to the instance. */
  secondaryDiskSpecs: AttachedDiskSpec[];
  /** Array of local disks to attach to the instance. */
  localDiskSpecs: AttachedLocalDiskSpec[];
  /**
   * Array of filesystems to attach to the instance.
   *
   * The filesystems must reside in the same availability zone as the instance.
   *
   * To use the instance with an attached filesystem, the latter must be mounted.
   * For details, see [documentation](/docs/compute/operations/filesystem/attach-to-vm).
   */
  filesystemSpecs: AttachedFilesystemSpec[];
  /**
   * Network configuration for the instance. Specifies how the network interface is configured
   * to interact with other services on the internal network and on the internet.
   * Currently only one network interface is supported per instance.
   */
  networkInterfaceSpecs: NetworkInterfaceSpec[];
  /**
   * Host name for the instance.
   * This field is used to generate the [yandex.cloud.compute.v1.Instance.fqdn] value.
   * The host name must be unique within the network and region.
   * If not specified, the host name will be equal to [yandex.cloud.compute.v1.Instance.id] of the instance
   * and FQDN will be `<id>.auto.internal`. Otherwise FQDN will be `<hostname>.<region_id>.internal`.
   */
  hostname: string;
  /** Scheduling policy configuration. */
  schedulingPolicy?: SchedulingPolicy;
  /**
   * ID of the service account to use for [authentication inside the instance](/docs/compute/operations/vm-connect/auth-inside-vm).
   * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
   */
  serviceAccountId: string;
  /** Network settings. */
  networkSettings?: NetworkSettings;
  /** GPU settings. */
  gpuSettings?: GpuSettings;
  /** Placement policy configuration. */
  placementPolicy?: PlacementPolicy;
}

export interface CreateInstanceRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.CreateInstanceRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateInstanceRequest_MetadataEntry {
  $type: "yandex.cloud.compute.v1.CreateInstanceRequest.MetadataEntry";
  key: string;
  value: string;
}

export interface CreateInstanceMetadata {
  $type: "yandex.cloud.compute.v1.CreateInstanceMetadata";
  /** ID of the instance that is being created. */
  instanceId: string;
}

export interface UpdateInstanceRequest {
  $type: "yandex.cloud.compute.v1.UpdateInstanceRequest";
  /**
   * ID of the Instance resource to update.
   * To get the instance ID, use a [InstanceService.List] request.
   */
  instanceId: string;
  /** Field mask that specifies which fields of the Instance resource are going to be updated. */
  updateMask?: FieldMask;
  /** Name of the instance. */
  name: string;
  /** Description of the instance. */
  description: string;
  /**
   * Resource labels as `key:value` pairs.
   *
   * Existing set of `labels` is completely replaced by the provided set.
   */
  labels: { [key: string]: string };
  /**
   * ID of the hardware platform configuration for the instance.
   * This field affects the available values in [resources_spec] field.
   *
   * Platforms allows you to create various types of instances: with a large amount of memory,
   * with a large number of cores, with a burstable performance.
   * For more information, see [Platforms](/docs/compute/concepts/vm-platforms).
   */
  platformId: string;
  /**
   * Computing resources of the instance, such as the amount of memory and number of cores.
   * To get a list of available values, see [Levels of core performance](/docs/compute/concepts/performance-levels).
   */
  resourcesSpec?: ResourcesSpec;
  /**
   * The metadata `key:value` pairs that will be assigned to this instance. This includes custom metadata and predefined keys.
   * The total size of all keys and values must be less than 512 KB.
   *
   * Existing set of `metadata` is completely replaced by the provided set.
   *
   * Values are free-form strings, and only have meaning as interpreted by the programs which configure the instance.
   * The values must be 256 KB or less.
   *
   * For example, you may use the metadata in order to provide your public SSH key to the instance.
   * For more information, see [Metadata](/docs/compute/concepts/vm-metadata).
   */
  metadata: { [key: string]: string };
  /** Options allow user to configure access to instance's metadata */
  metadataOptions?: MetadataOptions;
  /**
   * ID of the service account to use for [authentication inside the instance](/docs/compute/operations/vm-connect/auth-inside-vm).
   * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
   */
  serviceAccountId: string;
  /** Network settings. */
  networkSettings?: NetworkSettings;
  /** Placement policy configuration. */
  placementPolicy?: PlacementPolicy;
  /** Scheduling policy configuration. */
  schedulingPolicy?: SchedulingPolicy;
}

export interface UpdateInstanceRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.UpdateInstanceRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateInstanceRequest_MetadataEntry {
  $type: "yandex.cloud.compute.v1.UpdateInstanceRequest.MetadataEntry";
  key: string;
  value: string;
}

export interface UpdateInstanceMetadata {
  $type: "yandex.cloud.compute.v1.UpdateInstanceMetadata";
  /** ID of the Instance resource that is being updated. */
  instanceId: string;
}

export interface DeleteInstanceRequest {
  $type: "yandex.cloud.compute.v1.DeleteInstanceRequest";
  /**
   * ID of the instance to delete.
   * To get the instance ID, use a [InstanceService.List] request.
   */
  instanceId: string;
}

export interface DeleteInstanceMetadata {
  $type: "yandex.cloud.compute.v1.DeleteInstanceMetadata";
  /** ID of the instance that is being deleted. */
  instanceId: string;
}

export interface UpdateInstanceMetadataRequest {
  $type: "yandex.cloud.compute.v1.UpdateInstanceMetadataRequest";
  /** ID of the instance that is being updated. */
  instanceId: string;
  /** List of keys to be deleted. */
  delete: string[];
  /** The metadata `key:value` pairs that will be added or updated to this instance. */
  upsert: { [key: string]: string };
}

export interface UpdateInstanceMetadataRequest_UpsertEntry {
  $type: "yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.UpsertEntry";
  key: string;
  value: string;
}

export interface UpdateInstanceMetadataMetadata {
  $type: "yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata";
  /** ID of the instance that is being updated. */
  instanceId: string;
}

export interface GetInstanceSerialPortOutputRequest {
  $type: "yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest";
  /** ID of the instance to return the serial port output for. */
  instanceId: string;
  /** Serial port to retrieve data from. The default is 1. */
  port: number;
}

export interface GetInstanceSerialPortOutputResponse {
  $type: "yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse";
  /**
   * The contents of the serial port output, starting from the time when the instance
   * started to boot.
   */
  contents: string;
}

export interface StopInstanceRequest {
  $type: "yandex.cloud.compute.v1.StopInstanceRequest";
  /**
   * ID of the instance to stop.
   * To get the instance ID, use a [InstanceService.List] request.
   */
  instanceId: string;
}

export interface StopInstanceMetadata {
  $type: "yandex.cloud.compute.v1.StopInstanceMetadata";
  /** ID of the instance that is being deleted. */
  instanceId: string;
}

export interface StartInstanceRequest {
  $type: "yandex.cloud.compute.v1.StartInstanceRequest";
  /**
   * ID of the instance to start.
   * To get the instance ID, use a [InstanceService.List] request.
   */
  instanceId: string;
}

export interface StartInstanceMetadata {
  $type: "yandex.cloud.compute.v1.StartInstanceMetadata";
  /** ID of the instance. */
  instanceId: string;
}

export interface RestartInstanceRequest {
  $type: "yandex.cloud.compute.v1.RestartInstanceRequest";
  /**
   * ID of the instance to restart.
   * To get the instance ID, use a [InstanceService.List] request.
   */
  instanceId: string;
}

export interface RestartInstanceMetadata {
  $type: "yandex.cloud.compute.v1.RestartInstanceMetadata";
  /** ID of the instance. */
  instanceId: string;
}

export interface AttachInstanceDiskRequest {
  $type: "yandex.cloud.compute.v1.AttachInstanceDiskRequest";
  /**
   * ID of the instance to attach the disk to.
   * To get the instance ID, use a [InstanceService.List] request.
   */
  instanceId: string;
  /** Disk that should be attached. */
  attachedDiskSpec?: AttachedDiskSpec;
}

export interface AttachInstanceDiskMetadata {
  $type: "yandex.cloud.compute.v1.AttachInstanceDiskMetadata";
  /** ID of the instance. */
  instanceId: string;
  /** ID of the disk. */
  diskId: string;
}

export interface DetachInstanceDiskRequest {
  $type: "yandex.cloud.compute.v1.DetachInstanceDiskRequest";
  /**
   * ID of the instance to detach the disk from.
   * To get the instance ID, use a [InstanceService.List] request.
   */
  instanceId: string;
  /** ID of the disk that should be detached. */
  diskId: string | undefined;
  /**
   * Serial number of the disk that should be detached. This value is reflected into the /dev/disk/by-id/ tree
   * of a Linux operating system running within the instance.
   */
  deviceName: string | undefined;
}

export interface DetachInstanceDiskMetadata {
  $type: "yandex.cloud.compute.v1.DetachInstanceDiskMetadata";
  /** ID of the instance. */
  instanceId: string;
  /** ID of the disk. */
  diskId: string;
}

export interface AttachInstanceFilesystemRequest {
  $type: "yandex.cloud.compute.v1.AttachInstanceFilesystemRequest";
  /**
   * ID of the instance to attach the filesystem to.
   *
   * To get the instance ID, make a [InstanceService.List] request.
   */
  instanceId: string;
  /** Filesystem to attach to the instance. */
  attachedFilesystemSpec?: AttachedFilesystemSpec;
}

export interface AttachInstanceFilesystemMetadata {
  $type: "yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata";
  /** ID of the instance that the filesystem is being attached to. */
  instanceId: string;
  /** ID of the filesystem that is being attached to the instance. */
  filesystemId: string;
}

export interface DetachInstanceFilesystemRequest {
  $type: "yandex.cloud.compute.v1.DetachInstanceFilesystemRequest";
  /**
   * ID of the instance to detach the filesystem from.
   *
   * To get the instance ID, make a [InstanceService.List] request.
   */
  instanceId: string;
  /** ID of the filesystem that should be detached. */
  filesystemId: string | undefined;
  /** Name of the device used for mounting the filesystem that should be detached. */
  deviceName: string | undefined;
}

export interface DetachInstanceFilesystemMetadata {
  $type: "yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata";
  /** ID of the instance that the filesystem is being detached from. */
  instanceId: string;
  /** ID of the filesystem that is being detached from the instance. */
  filesystemId: string;
}

/** Enables One-to-one NAT on the network interface. */
export interface AddInstanceOneToOneNatRequest {
  $type: "yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest";
  /** ID of the instance to enable One-to-One NAT on. */
  instanceId: string;
  /** The index of the network interface to enable One-to-One NAT on. */
  networkInterfaceIndex: string;
  /** The network address that is assigned to the instance for this network interface. */
  internalAddress: string;
  /**
   * An external IP address configuration.
   * If not specified, then this instance will have no external internet access.
   */
  oneToOneNatSpec?: OneToOneNatSpec;
}

export interface AddInstanceOneToOneNatMetadata {
  $type: "yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata";
  /** ID of the instance. */
  instanceId: string;
}

export interface RemoveInstanceOneToOneNatRequest {
  $type: "yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest";
  /** ID of the instance to remove One-to-one NAT. */
  instanceId: string;
  /** The index of the network interface to remove One-to-One NAT from. */
  networkInterfaceIndex: string;
  /** The network address that is assigned to the instance for this network interface. */
  internalAddress: string;
}

export interface RemoveInstanceOneToOneNatMetadata {
  $type: "yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata";
  /** ID of the instance. */
  instanceId: string;
}

export interface UpdateInstanceNetworkInterfaceRequest {
  $type: "yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest";
  /** ID of the network interface that is being updated. */
  instanceId: string;
  /** The index of the network interface to be updated. */
  networkInterfaceIndex: string;
  /** Field mask that specifies which attributes of the instance should be updated. */
  updateMask?: FieldMask;
  /** ID of the subnet. */
  subnetId: string;
  /** Primary IPv4 address that will be assigned to the instance for this network interface. */
  primaryV4AddressSpec?: PrimaryAddressSpec;
  /** Primary IPv6 address that will be assigned to the instance for this network interface. IPv6 not available yet. */
  primaryV6AddressSpec?: PrimaryAddressSpec;
  /** ID's of security groups attached to the interface. */
  securityGroupIds: string[];
}

export interface UpdateInstanceNetworkInterfaceMetadata {
  $type: "yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata";
  /** ID of the instant network interface that is being updated. */
  instanceId: string;
  /** The index of the network interface. */
  networkInterfaceIndex: string;
}

export interface ListInstanceOperationsRequest {
  $type: "yandex.cloud.compute.v1.ListInstanceOperationsRequest";
  /** ID of the Instance resource to list operations for. */
  instanceId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListInstanceOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListInstanceOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListInstanceOperationsResponse {
  $type: "yandex.cloud.compute.v1.ListInstanceOperationsResponse";
  /** List of operations for the specified instance. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListInstanceOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListInstanceOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ResourcesSpec {
  $type: "yandex.cloud.compute.v1.ResourcesSpec";
  /** The amount of memory available to the instance, specified in bytes. */
  memory: number;
  /** The number of cores available to the instance. */
  cores: number;
  /**
   * Baseline level of CPU performance with the ability to burst performance above that baseline level.
   * This field sets baseline performance for each core.
   *
   * For example, if you need only 5% of the CPU performance, you can set core_fraction=5.
   * For more information, see [Levels of core performance](/docs/compute/concepts/performance-levels).
   */
  coreFraction: number;
  /** The number of GPUs available to the instance. */
  gpus: number;
}

export interface AttachedDiskSpec {
  $type: "yandex.cloud.compute.v1.AttachedDiskSpec";
  /** The mode in which to attach this disk. */
  mode: AttachedDiskSpec_Mode;
  /**
   * Specifies a unique serial number of your choice that is reflected into the /dev/disk/by-id/ tree
   * of a Linux operating system running within the instance.
   *
   * This value can be used to reference the device for mounting, resizing, and so on, from within the instance.
   * If not specified, a random value will be generated.
   */
  deviceName: string;
  /** Specifies whether the disk will be auto-deleted when the instance is deleted. */
  autoDelete: boolean;
  /** Disk specification. */
  diskSpec?: AttachedDiskSpec_DiskSpec | undefined;
  /** ID of the disk that should be attached. */
  diskId: string | undefined;
}

export enum AttachedDiskSpec_Mode {
  MODE_UNSPECIFIED = 0,
  /** READ_ONLY - Read-only access. */
  READ_ONLY = 1,
  /** READ_WRITE - Read/Write access. Default value. */
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
  $type: "yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec";
  /** Name of the disk. */
  name: string;
  /** Description of the disk. */
  description: string;
  /**
   * ID of the disk type.
   * To get a list of available disk types, use the [yandex.cloud.compute.v1.DiskTypeService.List] request.
   */
  typeId: string;
  /** Size of the disk, specified in bytes. */
  size: number;
  /** Block size of the disk, specified in bytes. The default is 4096. */
  blockSize: number;
  /** Placement policy configuration. */
  diskPlacementPolicy?: DiskPlacementPolicy;
  /** ID of the image to create the disk from. */
  imageId: string | undefined;
  /** ID of the snapshot to restore the disk from. */
  snapshotId: string | undefined;
}

export interface AttachedLocalDiskSpec {
  $type: "yandex.cloud.compute.v1.AttachedLocalDiskSpec";
  /** Size of the disk, specified in bytes. */
  size: number;
}

export interface AttachedFilesystemSpec {
  $type: "yandex.cloud.compute.v1.AttachedFilesystemSpec";
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

export interface NetworkInterfaceSpec {
  $type: "yandex.cloud.compute.v1.NetworkInterfaceSpec";
  /** ID of the subnet. */
  subnetId: string;
  /** Primary IPv4 address that will be assigned to the instance for this network interface. */
  primaryV4AddressSpec?: PrimaryAddressSpec;
  /** Primary IPv6 address that will be assigned to the instance for this network interface. IPv6 not available yet. */
  primaryV6AddressSpec?: PrimaryAddressSpec;
  /** ID's of security groups attached to the interface */
  securityGroupIds: string[];
}

export interface PrimaryAddressSpec {
  $type: "yandex.cloud.compute.v1.PrimaryAddressSpec";
  /**
   * An IPv4 internal network address that is assigned to the instance for this network interface.
   * If not specified by the user, an unused internal IP is assigned by the system.
   */
  address: string;
  /**
   * An external IP address configuration.
   * If not specified, then this instance will have no external internet access.
   */
  oneToOneNatSpec?: OneToOneNatSpec;
  /** Internal DNS configuration */
  dnsRecordSpecs: DnsRecordSpec[];
}

export interface OneToOneNatSpec {
  $type: "yandex.cloud.compute.v1.OneToOneNatSpec";
  /** External IP address version. */
  ipVersion: IpVersion;
  /** set static IP by value */
  address: string;
  /** External DNS configuration */
  dnsRecordSpecs: DnsRecordSpec[];
}

export interface DnsRecordSpec {
  $type: "yandex.cloud.compute.v1.DnsRecordSpec";
  /** FQDN (required) */
  fqdn: string;
  /** DNS zone id (optional, if not set, private zone used) */
  dnsZoneId: string;
  /** DNS record ttl, values in 0-86400 (optional) */
  ttl: number;
  /** When set to true, also create PTR DNS record (optional) */
  ptr: boolean;
}

export interface MoveInstanceRequest {
  $type: "yandex.cloud.compute.v1.MoveInstanceRequest";
  /**
   * ID of the instance to move.
   *
   * To get the instance ID, make a [InstanceService.List] request.
   */
  instanceId: string;
  /**
   * ID of the folder to move the instance to.
   *
   * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  destinationFolderId: string;
}

export interface MoveInstanceMetadata {
  $type: "yandex.cloud.compute.v1.MoveInstanceMetadata";
  /** ID of the instance that is being moved. */
  instanceId: string;
  /** ID of the folder that the instance is being moved from. */
  sourceFolderId: string;
  /** ID of the folder that the instance is being moved to. */
  destinationFolderId: string;
}

export interface RelocateInstanceRequest {
  $type: "yandex.cloud.compute.v1.RelocateInstanceRequest";
  /**
   * ID of the instance to move.
   *
   * To get the instance ID, make a [InstanceService.List] request.
   */
  instanceId: string;
  /**
   * ID of the availability zone to move the instance to.
   *
   * To get the zone ID, make a [ZoneService.List] request.
   */
  destinationZoneId: string;
}

export interface RelocateInstanceMetadata {
  $type: "yandex.cloud.compute.v1.RelocateInstanceMetadata";
  /** ID of the instance that is being moved. */
  instanceId: string;
  /** ID of the availability zone that the instance is being moved from. */
  sourceZoneId: string;
  /** ID of the availability zone that the instance is being moved to. */
  destinationZoneId: string;
}

export interface GuestStopInstanceMetadata {
  $type: "yandex.cloud.compute.v1.GuestStopInstanceMetadata";
  /** ID of the instance that was stopped from guest OS. */
  instanceId: string;
}

export interface PreemptInstanceMetadata {
  $type: "yandex.cloud.compute.v1.PreemptInstanceMetadata";
  /** ID of the instance that is being preempted. */
  instanceId: string;
}

export interface CrashInstanceMetadata {
  $type: "yandex.cloud.compute.v1.CrashInstanceMetadata";
  /** ID of the instance that was crashed. */
  instanceId: string;
}

const baseGetInstanceRequest: object = {
  $type: "yandex.cloud.compute.v1.GetInstanceRequest",
  instanceId: "",
  view: 0,
};

export const GetInstanceRequest = {
  $type: "yandex.cloud.compute.v1.GetInstanceRequest" as const,

  encode(
    message: GetInstanceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.view !== 0) {
      writer.uint32(16).int32(message.view);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetInstanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetInstanceRequest } as GetInstanceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
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

  fromJSON(object: any): GetInstanceRequest {
    const message = { ...baseGetInstanceRequest } as GetInstanceRequest;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    message.view =
      object.view !== undefined && object.view !== null
        ? instanceViewFromJSON(object.view)
        : 0;
    return message;
  },

  toJSON(message: GetInstanceRequest): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    message.view !== undefined && (obj.view = instanceViewToJSON(message.view));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetInstanceRequest>, I>>(
    object: I
  ): GetInstanceRequest {
    const message = { ...baseGetInstanceRequest } as GetInstanceRequest;
    message.instanceId = object.instanceId ?? "";
    message.view = object.view ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GetInstanceRequest.$type, GetInstanceRequest);

const baseListInstancesRequest: object = {
  $type: "yandex.cloud.compute.v1.ListInstancesRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
  orderBy: "",
};

export const ListInstancesRequest = {
  $type: "yandex.cloud.compute.v1.ListInstancesRequest" as const,

  encode(
    message: ListInstancesRequest,
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
    if (message.orderBy !== "") {
      writer.uint32(42).string(message.orderBy);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListInstancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListInstancesRequest } as ListInstancesRequest;
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
          message.orderBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListInstancesRequest {
    const message = { ...baseListInstancesRequest } as ListInstancesRequest;
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
    message.orderBy =
      object.orderBy !== undefined && object.orderBy !== null
        ? String(object.orderBy)
        : "";
    return message;
  },

  toJSON(message: ListInstancesRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    message.orderBy !== undefined && (obj.orderBy = message.orderBy);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListInstancesRequest>, I>>(
    object: I
  ): ListInstancesRequest {
    const message = { ...baseListInstancesRequest } as ListInstancesRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListInstancesRequest.$type, ListInstancesRequest);

const baseListInstancesResponse: object = {
  $type: "yandex.cloud.compute.v1.ListInstancesResponse",
  nextPageToken: "",
};

export const ListInstancesResponse = {
  $type: "yandex.cloud.compute.v1.ListInstancesResponse" as const,

  encode(
    message: ListInstancesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.instances) {
      Instance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListInstancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListInstancesResponse } as ListInstancesResponse;
    message.instances = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instances.push(Instance.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListInstancesResponse {
    const message = { ...baseListInstancesResponse } as ListInstancesResponse;
    message.instances = (object.instances ?? []).map((e: any) =>
      Instance.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListInstancesResponse): unknown {
    const obj: any = {};
    if (message.instances) {
      obj.instances = message.instances.map((e) =>
        e ? Instance.toJSON(e) : undefined
      );
    } else {
      obj.instances = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListInstancesResponse>, I>>(
    object: I
  ): ListInstancesResponse {
    const message = { ...baseListInstancesResponse } as ListInstancesResponse;
    message.instances =
      object.instances?.map((e) => Instance.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListInstancesResponse.$type, ListInstancesResponse);

const baseCreateInstanceRequest: object = {
  $type: "yandex.cloud.compute.v1.CreateInstanceRequest",
  folderId: "",
  name: "",
  description: "",
  zoneId: "",
  platformId: "",
  hostname: "",
  serviceAccountId: "",
};

export const CreateInstanceRequest = {
  $type: "yandex.cloud.compute.v1.CreateInstanceRequest" as const,

  encode(
    message: CreateInstanceRequest,
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
      CreateInstanceRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.compute.v1.CreateInstanceRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.zoneId !== "") {
      writer.uint32(42).string(message.zoneId);
    }
    if (message.platformId !== "") {
      writer.uint32(50).string(message.platformId);
    }
    if (message.resourcesSpec !== undefined) {
      ResourcesSpec.encode(
        message.resourcesSpec,
        writer.uint32(58).fork()
      ).ldelim();
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      CreateInstanceRequest_MetadataEntry.encode(
        {
          $type: "yandex.cloud.compute.v1.CreateInstanceRequest.MetadataEntry",
          key: key as any,
          value,
        },
        writer.uint32(66).fork()
      ).ldelim();
    });
    if (message.metadataOptions !== undefined) {
      MetadataOptions.encode(
        message.metadataOptions,
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.bootDiskSpec !== undefined) {
      AttachedDiskSpec.encode(
        message.bootDiskSpec,
        writer.uint32(74).fork()
      ).ldelim();
    }
    for (const v of message.secondaryDiskSpecs) {
      AttachedDiskSpec.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.localDiskSpecs) {
      AttachedLocalDiskSpec.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    for (const v of message.filesystemSpecs) {
      AttachedFilesystemSpec.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    for (const v of message.networkInterfaceSpecs) {
      NetworkInterfaceSpec.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.hostname !== "") {
      writer.uint32(98).string(message.hostname);
    }
    if (message.schedulingPolicy !== undefined) {
      SchedulingPolicy.encode(
        message.schedulingPolicy,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(114).string(message.serviceAccountId);
    }
    if (message.networkSettings !== undefined) {
      NetworkSettings.encode(
        message.networkSettings,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.gpuSettings !== undefined) {
      GpuSettings.encode(
        message.gpuSettings,
        writer.uint32(162).fork()
      ).ldelim();
    }
    if (message.placementPolicy !== undefined) {
      PlacementPolicy.encode(
        message.placementPolicy,
        writer.uint32(130).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateInstanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateInstanceRequest } as CreateInstanceRequest;
    message.labels = {};
    message.metadata = {};
    message.secondaryDiskSpecs = [];
    message.localDiskSpecs = [];
    message.filesystemSpecs = [];
    message.networkInterfaceSpecs = [];
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
          const entry4 = CreateInstanceRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.zoneId = reader.string();
          break;
        case 6:
          message.platformId = reader.string();
          break;
        case 7:
          message.resourcesSpec = ResourcesSpec.decode(reader, reader.uint32());
          break;
        case 8:
          const entry8 = CreateInstanceRequest_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry8.value !== undefined) {
            message.metadata[entry8.key] = entry8.value;
          }
          break;
        case 19:
          message.metadataOptions = MetadataOptions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.bootDiskSpec = AttachedDiskSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.secondaryDiskSpecs.push(
            AttachedDiskSpec.decode(reader, reader.uint32())
          );
          break;
        case 18:
          message.localDiskSpecs.push(
            AttachedLocalDiskSpec.decode(reader, reader.uint32())
          );
          break;
        case 17:
          message.filesystemSpecs.push(
            AttachedFilesystemSpec.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.networkInterfaceSpecs.push(
            NetworkInterfaceSpec.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.hostname = reader.string();
          break;
        case 13:
          message.schedulingPolicy = SchedulingPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.serviceAccountId = reader.string();
          break;
        case 15:
          message.networkSettings = NetworkSettings.decode(
            reader,
            reader.uint32()
          );
          break;
        case 20:
          message.gpuSettings = GpuSettings.decode(reader, reader.uint32());
          break;
        case 16:
          message.placementPolicy = PlacementPolicy.decode(
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

  fromJSON(object: any): CreateInstanceRequest {
    const message = { ...baseCreateInstanceRequest } as CreateInstanceRequest;
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
    message.zoneId =
      object.zoneId !== undefined && object.zoneId !== null
        ? String(object.zoneId)
        : "";
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
    message.metadataOptions =
      object.metadataOptions !== undefined && object.metadataOptions !== null
        ? MetadataOptions.fromJSON(object.metadataOptions)
        : undefined;
    message.bootDiskSpec =
      object.bootDiskSpec !== undefined && object.bootDiskSpec !== null
        ? AttachedDiskSpec.fromJSON(object.bootDiskSpec)
        : undefined;
    message.secondaryDiskSpecs = (object.secondaryDiskSpecs ?? []).map(
      (e: any) => AttachedDiskSpec.fromJSON(e)
    );
    message.localDiskSpecs = (object.localDiskSpecs ?? []).map((e: any) =>
      AttachedLocalDiskSpec.fromJSON(e)
    );
    message.filesystemSpecs = (object.filesystemSpecs ?? []).map((e: any) =>
      AttachedFilesystemSpec.fromJSON(e)
    );
    message.networkInterfaceSpecs = (object.networkInterfaceSpecs ?? []).map(
      (e: any) => NetworkInterfaceSpec.fromJSON(e)
    );
    message.hostname =
      object.hostname !== undefined && object.hostname !== null
        ? String(object.hostname)
        : "";
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
    message.gpuSettings =
      object.gpuSettings !== undefined && object.gpuSettings !== null
        ? GpuSettings.fromJSON(object.gpuSettings)
        : undefined;
    message.placementPolicy =
      object.placementPolicy !== undefined && object.placementPolicy !== null
        ? PlacementPolicy.fromJSON(object.placementPolicy)
        : undefined;
    return message;
  },

  toJSON(message: CreateInstanceRequest): unknown {
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
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
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
    message.metadataOptions !== undefined &&
      (obj.metadataOptions = message.metadataOptions
        ? MetadataOptions.toJSON(message.metadataOptions)
        : undefined);
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
    if (message.localDiskSpecs) {
      obj.localDiskSpecs = message.localDiskSpecs.map((e) =>
        e ? AttachedLocalDiskSpec.toJSON(e) : undefined
      );
    } else {
      obj.localDiskSpecs = [];
    }
    if (message.filesystemSpecs) {
      obj.filesystemSpecs = message.filesystemSpecs.map((e) =>
        e ? AttachedFilesystemSpec.toJSON(e) : undefined
      );
    } else {
      obj.filesystemSpecs = [];
    }
    if (message.networkInterfaceSpecs) {
      obj.networkInterfaceSpecs = message.networkInterfaceSpecs.map((e) =>
        e ? NetworkInterfaceSpec.toJSON(e) : undefined
      );
    } else {
      obj.networkInterfaceSpecs = [];
    }
    message.hostname !== undefined && (obj.hostname = message.hostname);
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
    message.gpuSettings !== undefined &&
      (obj.gpuSettings = message.gpuSettings
        ? GpuSettings.toJSON(message.gpuSettings)
        : undefined);
    message.placementPolicy !== undefined &&
      (obj.placementPolicy = message.placementPolicy
        ? PlacementPolicy.toJSON(message.placementPolicy)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateInstanceRequest>, I>>(
    object: I
  ): CreateInstanceRequest {
    const message = { ...baseCreateInstanceRequest } as CreateInstanceRequest;
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
    message.zoneId = object.zoneId ?? "";
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
    message.metadataOptions =
      object.metadataOptions !== undefined && object.metadataOptions !== null
        ? MetadataOptions.fromPartial(object.metadataOptions)
        : undefined;
    message.bootDiskSpec =
      object.bootDiskSpec !== undefined && object.bootDiskSpec !== null
        ? AttachedDiskSpec.fromPartial(object.bootDiskSpec)
        : undefined;
    message.secondaryDiskSpecs =
      object.secondaryDiskSpecs?.map((e) => AttachedDiskSpec.fromPartial(e)) ||
      [];
    message.localDiskSpecs =
      object.localDiskSpecs?.map((e) => AttachedLocalDiskSpec.fromPartial(e)) ||
      [];
    message.filesystemSpecs =
      object.filesystemSpecs?.map((e) =>
        AttachedFilesystemSpec.fromPartial(e)
      ) || [];
    message.networkInterfaceSpecs =
      object.networkInterfaceSpecs?.map((e) =>
        NetworkInterfaceSpec.fromPartial(e)
      ) || [];
    message.hostname = object.hostname ?? "";
    message.schedulingPolicy =
      object.schedulingPolicy !== undefined && object.schedulingPolicy !== null
        ? SchedulingPolicy.fromPartial(object.schedulingPolicy)
        : undefined;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.networkSettings =
      object.networkSettings !== undefined && object.networkSettings !== null
        ? NetworkSettings.fromPartial(object.networkSettings)
        : undefined;
    message.gpuSettings =
      object.gpuSettings !== undefined && object.gpuSettings !== null
        ? GpuSettings.fromPartial(object.gpuSettings)
        : undefined;
    message.placementPolicy =
      object.placementPolicy !== undefined && object.placementPolicy !== null
        ? PlacementPolicy.fromPartial(object.placementPolicy)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateInstanceRequest.$type, CreateInstanceRequest);

const baseCreateInstanceRequest_LabelsEntry: object = {
  $type: "yandex.cloud.compute.v1.CreateInstanceRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateInstanceRequest_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.CreateInstanceRequest.LabelsEntry" as const,

  encode(
    message: CreateInstanceRequest_LabelsEntry,
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
  ): CreateInstanceRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateInstanceRequest_LabelsEntry,
    } as CreateInstanceRequest_LabelsEntry;
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

  fromJSON(object: any): CreateInstanceRequest_LabelsEntry {
    const message = {
      ...baseCreateInstanceRequest_LabelsEntry,
    } as CreateInstanceRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateInstanceRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateInstanceRequest_LabelsEntry>, I>
  >(object: I): CreateInstanceRequest_LabelsEntry {
    const message = {
      ...baseCreateInstanceRequest_LabelsEntry,
    } as CreateInstanceRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateInstanceRequest_LabelsEntry.$type,
  CreateInstanceRequest_LabelsEntry
);

const baseCreateInstanceRequest_MetadataEntry: object = {
  $type: "yandex.cloud.compute.v1.CreateInstanceRequest.MetadataEntry",
  key: "",
  value: "",
};

export const CreateInstanceRequest_MetadataEntry = {
  $type: "yandex.cloud.compute.v1.CreateInstanceRequest.MetadataEntry" as const,

  encode(
    message: CreateInstanceRequest_MetadataEntry,
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
  ): CreateInstanceRequest_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateInstanceRequest_MetadataEntry,
    } as CreateInstanceRequest_MetadataEntry;
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

  fromJSON(object: any): CreateInstanceRequest_MetadataEntry {
    const message = {
      ...baseCreateInstanceRequest_MetadataEntry,
    } as CreateInstanceRequest_MetadataEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateInstanceRequest_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateInstanceRequest_MetadataEntry>, I>
  >(object: I): CreateInstanceRequest_MetadataEntry {
    const message = {
      ...baseCreateInstanceRequest_MetadataEntry,
    } as CreateInstanceRequest_MetadataEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateInstanceRequest_MetadataEntry.$type,
  CreateInstanceRequest_MetadataEntry
);

const baseCreateInstanceMetadata: object = {
  $type: "yandex.cloud.compute.v1.CreateInstanceMetadata",
  instanceId: "",
};

export const CreateInstanceMetadata = {
  $type: "yandex.cloud.compute.v1.CreateInstanceMetadata" as const,

  encode(
    message: CreateInstanceMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateInstanceMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateInstanceMetadata } as CreateInstanceMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateInstanceMetadata {
    const message = { ...baseCreateInstanceMetadata } as CreateInstanceMetadata;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    return message;
  },

  toJSON(message: CreateInstanceMetadata): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateInstanceMetadata>, I>>(
    object: I
  ): CreateInstanceMetadata {
    const message = { ...baseCreateInstanceMetadata } as CreateInstanceMetadata;
    message.instanceId = object.instanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateInstanceMetadata.$type, CreateInstanceMetadata);

const baseUpdateInstanceRequest: object = {
  $type: "yandex.cloud.compute.v1.UpdateInstanceRequest",
  instanceId: "",
  name: "",
  description: "",
  platformId: "",
  serviceAccountId: "",
};

export const UpdateInstanceRequest = {
  $type: "yandex.cloud.compute.v1.UpdateInstanceRequest" as const,

  encode(
    message: UpdateInstanceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
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
      UpdateInstanceRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.compute.v1.UpdateInstanceRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.platformId !== "") {
      writer.uint32(50).string(message.platformId);
    }
    if (message.resourcesSpec !== undefined) {
      ResourcesSpec.encode(
        message.resourcesSpec,
        writer.uint32(58).fork()
      ).ldelim();
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      UpdateInstanceRequest_MetadataEntry.encode(
        {
          $type: "yandex.cloud.compute.v1.UpdateInstanceRequest.MetadataEntry",
          key: key as any,
          value,
        },
        writer.uint32(66).fork()
      ).ldelim();
    });
    if (message.metadataOptions !== undefined) {
      MetadataOptions.encode(
        message.metadataOptions,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(74).string(message.serviceAccountId);
    }
    if (message.networkSettings !== undefined) {
      NetworkSettings.encode(
        message.networkSettings,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.placementPolicy !== undefined) {
      PlacementPolicy.encode(
        message.placementPolicy,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.schedulingPolicy !== undefined) {
      SchedulingPolicy.encode(
        message.schedulingPolicy,
        writer.uint32(98).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateInstanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateInstanceRequest } as UpdateInstanceRequest;
    message.labels = {};
    message.metadata = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
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
          const entry5 = UpdateInstanceRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.platformId = reader.string();
          break;
        case 7:
          message.resourcesSpec = ResourcesSpec.decode(reader, reader.uint32());
          break;
        case 8:
          const entry8 = UpdateInstanceRequest_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry8.value !== undefined) {
            message.metadata[entry8.key] = entry8.value;
          }
          break;
        case 13:
          message.metadataOptions = MetadataOptions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.serviceAccountId = reader.string();
          break;
        case 10:
          message.networkSettings = NetworkSettings.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.placementPolicy = PlacementPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.schedulingPolicy = SchedulingPolicy.decode(
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

  fromJSON(object: any): UpdateInstanceRequest {
    const message = { ...baseUpdateInstanceRequest } as UpdateInstanceRequest;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
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
    message.metadataOptions =
      object.metadataOptions !== undefined && object.metadataOptions !== null
        ? MetadataOptions.fromJSON(object.metadataOptions)
        : undefined;
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.networkSettings =
      object.networkSettings !== undefined && object.networkSettings !== null
        ? NetworkSettings.fromJSON(object.networkSettings)
        : undefined;
    message.placementPolicy =
      object.placementPolicy !== undefined && object.placementPolicy !== null
        ? PlacementPolicy.fromJSON(object.placementPolicy)
        : undefined;
    message.schedulingPolicy =
      object.schedulingPolicy !== undefined && object.schedulingPolicy !== null
        ? SchedulingPolicy.fromJSON(object.schedulingPolicy)
        : undefined;
    return message;
  },

  toJSON(message: UpdateInstanceRequest): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
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
    message.metadataOptions !== undefined &&
      (obj.metadataOptions = message.metadataOptions
        ? MetadataOptions.toJSON(message.metadataOptions)
        : undefined);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.networkSettings !== undefined &&
      (obj.networkSettings = message.networkSettings
        ? NetworkSettings.toJSON(message.networkSettings)
        : undefined);
    message.placementPolicy !== undefined &&
      (obj.placementPolicy = message.placementPolicy
        ? PlacementPolicy.toJSON(message.placementPolicy)
        : undefined);
    message.schedulingPolicy !== undefined &&
      (obj.schedulingPolicy = message.schedulingPolicy
        ? SchedulingPolicy.toJSON(message.schedulingPolicy)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateInstanceRequest>, I>>(
    object: I
  ): UpdateInstanceRequest {
    const message = { ...baseUpdateInstanceRequest } as UpdateInstanceRequest;
    message.instanceId = object.instanceId ?? "";
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
    message.metadataOptions =
      object.metadataOptions !== undefined && object.metadataOptions !== null
        ? MetadataOptions.fromPartial(object.metadataOptions)
        : undefined;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.networkSettings =
      object.networkSettings !== undefined && object.networkSettings !== null
        ? NetworkSettings.fromPartial(object.networkSettings)
        : undefined;
    message.placementPolicy =
      object.placementPolicy !== undefined && object.placementPolicy !== null
        ? PlacementPolicy.fromPartial(object.placementPolicy)
        : undefined;
    message.schedulingPolicy =
      object.schedulingPolicy !== undefined && object.schedulingPolicy !== null
        ? SchedulingPolicy.fromPartial(object.schedulingPolicy)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateInstanceRequest.$type, UpdateInstanceRequest);

const baseUpdateInstanceRequest_LabelsEntry: object = {
  $type: "yandex.cloud.compute.v1.UpdateInstanceRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateInstanceRequest_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.UpdateInstanceRequest.LabelsEntry" as const,

  encode(
    message: UpdateInstanceRequest_LabelsEntry,
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
  ): UpdateInstanceRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateInstanceRequest_LabelsEntry,
    } as UpdateInstanceRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateInstanceRequest_LabelsEntry {
    const message = {
      ...baseUpdateInstanceRequest_LabelsEntry,
    } as UpdateInstanceRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateInstanceRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateInstanceRequest_LabelsEntry>, I>
  >(object: I): UpdateInstanceRequest_LabelsEntry {
    const message = {
      ...baseUpdateInstanceRequest_LabelsEntry,
    } as UpdateInstanceRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateInstanceRequest_LabelsEntry.$type,
  UpdateInstanceRequest_LabelsEntry
);

const baseUpdateInstanceRequest_MetadataEntry: object = {
  $type: "yandex.cloud.compute.v1.UpdateInstanceRequest.MetadataEntry",
  key: "",
  value: "",
};

export const UpdateInstanceRequest_MetadataEntry = {
  $type: "yandex.cloud.compute.v1.UpdateInstanceRequest.MetadataEntry" as const,

  encode(
    message: UpdateInstanceRequest_MetadataEntry,
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
  ): UpdateInstanceRequest_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateInstanceRequest_MetadataEntry,
    } as UpdateInstanceRequest_MetadataEntry;
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

  fromJSON(object: any): UpdateInstanceRequest_MetadataEntry {
    const message = {
      ...baseUpdateInstanceRequest_MetadataEntry,
    } as UpdateInstanceRequest_MetadataEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateInstanceRequest_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateInstanceRequest_MetadataEntry>, I>
  >(object: I): UpdateInstanceRequest_MetadataEntry {
    const message = {
      ...baseUpdateInstanceRequest_MetadataEntry,
    } as UpdateInstanceRequest_MetadataEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateInstanceRequest_MetadataEntry.$type,
  UpdateInstanceRequest_MetadataEntry
);

const baseUpdateInstanceMetadata: object = {
  $type: "yandex.cloud.compute.v1.UpdateInstanceMetadata",
  instanceId: "",
};

export const UpdateInstanceMetadata = {
  $type: "yandex.cloud.compute.v1.UpdateInstanceMetadata" as const,

  encode(
    message: UpdateInstanceMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateInstanceMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateInstanceMetadata } as UpdateInstanceMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateInstanceMetadata {
    const message = { ...baseUpdateInstanceMetadata } as UpdateInstanceMetadata;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    return message;
  },

  toJSON(message: UpdateInstanceMetadata): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateInstanceMetadata>, I>>(
    object: I
  ): UpdateInstanceMetadata {
    const message = { ...baseUpdateInstanceMetadata } as UpdateInstanceMetadata;
    message.instanceId = object.instanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateInstanceMetadata.$type, UpdateInstanceMetadata);

const baseDeleteInstanceRequest: object = {
  $type: "yandex.cloud.compute.v1.DeleteInstanceRequest",
  instanceId: "",
};

export const DeleteInstanceRequest = {
  $type: "yandex.cloud.compute.v1.DeleteInstanceRequest" as const,

  encode(
    message: DeleteInstanceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteInstanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteInstanceRequest } as DeleteInstanceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteInstanceRequest {
    const message = { ...baseDeleteInstanceRequest } as DeleteInstanceRequest;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    return message;
  },

  toJSON(message: DeleteInstanceRequest): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteInstanceRequest>, I>>(
    object: I
  ): DeleteInstanceRequest {
    const message = { ...baseDeleteInstanceRequest } as DeleteInstanceRequest;
    message.instanceId = object.instanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteInstanceRequest.$type, DeleteInstanceRequest);

const baseDeleteInstanceMetadata: object = {
  $type: "yandex.cloud.compute.v1.DeleteInstanceMetadata",
  instanceId: "",
};

export const DeleteInstanceMetadata = {
  $type: "yandex.cloud.compute.v1.DeleteInstanceMetadata" as const,

  encode(
    message: DeleteInstanceMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteInstanceMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteInstanceMetadata } as DeleteInstanceMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteInstanceMetadata {
    const message = { ...baseDeleteInstanceMetadata } as DeleteInstanceMetadata;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    return message;
  },

  toJSON(message: DeleteInstanceMetadata): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteInstanceMetadata>, I>>(
    object: I
  ): DeleteInstanceMetadata {
    const message = { ...baseDeleteInstanceMetadata } as DeleteInstanceMetadata;
    message.instanceId = object.instanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteInstanceMetadata.$type, DeleteInstanceMetadata);

const baseUpdateInstanceMetadataRequest: object = {
  $type: "yandex.cloud.compute.v1.UpdateInstanceMetadataRequest",
  instanceId: "",
  delete: "",
};

export const UpdateInstanceMetadataRequest = {
  $type: "yandex.cloud.compute.v1.UpdateInstanceMetadataRequest" as const,

  encode(
    message: UpdateInstanceMetadataRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    for (const v of message.delete) {
      writer.uint32(18).string(v!);
    }
    Object.entries(message.upsert).forEach(([key, value]) => {
      UpdateInstanceMetadataRequest_UpsertEntry.encode(
        {
          $type:
            "yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.UpsertEntry",
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
  ): UpdateInstanceMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateInstanceMetadataRequest,
    } as UpdateInstanceMetadataRequest;
    message.delete = [];
    message.upsert = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        case 2:
          message.delete.push(reader.string());
          break;
        case 3:
          const entry3 = UpdateInstanceMetadataRequest_UpsertEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.upsert[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateInstanceMetadataRequest {
    const message = {
      ...baseUpdateInstanceMetadataRequest,
    } as UpdateInstanceMetadataRequest;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    message.delete = (object.delete ?? []).map((e: any) => String(e));
    message.upsert = Object.entries(object.upsert ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: UpdateInstanceMetadataRequest): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    if (message.delete) {
      obj.delete = message.delete.map((e) => e);
    } else {
      obj.delete = [];
    }
    obj.upsert = {};
    if (message.upsert) {
      Object.entries(message.upsert).forEach(([k, v]) => {
        obj.upsert[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateInstanceMetadataRequest>, I>>(
    object: I
  ): UpdateInstanceMetadataRequest {
    const message = {
      ...baseUpdateInstanceMetadataRequest,
    } as UpdateInstanceMetadataRequest;
    message.instanceId = object.instanceId ?? "";
    message.delete = object.delete?.map((e) => e) || [];
    message.upsert = Object.entries(object.upsert ?? {}).reduce<{
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
  UpdateInstanceMetadataRequest.$type,
  UpdateInstanceMetadataRequest
);

const baseUpdateInstanceMetadataRequest_UpsertEntry: object = {
  $type: "yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.UpsertEntry",
  key: "",
  value: "",
};

export const UpdateInstanceMetadataRequest_UpsertEntry = {
  $type:
    "yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.UpsertEntry" as const,

  encode(
    message: UpdateInstanceMetadataRequest_UpsertEntry,
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
  ): UpdateInstanceMetadataRequest_UpsertEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateInstanceMetadataRequest_UpsertEntry,
    } as UpdateInstanceMetadataRequest_UpsertEntry;
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

  fromJSON(object: any): UpdateInstanceMetadataRequest_UpsertEntry {
    const message = {
      ...baseUpdateInstanceMetadataRequest_UpsertEntry,
    } as UpdateInstanceMetadataRequest_UpsertEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateInstanceMetadataRequest_UpsertEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateInstanceMetadataRequest_UpsertEntry>, I>
  >(object: I): UpdateInstanceMetadataRequest_UpsertEntry {
    const message = {
      ...baseUpdateInstanceMetadataRequest_UpsertEntry,
    } as UpdateInstanceMetadataRequest_UpsertEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateInstanceMetadataRequest_UpsertEntry.$type,
  UpdateInstanceMetadataRequest_UpsertEntry
);

const baseUpdateInstanceMetadataMetadata: object = {
  $type: "yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata",
  instanceId: "",
};

export const UpdateInstanceMetadataMetadata = {
  $type: "yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata" as const,

  encode(
    message: UpdateInstanceMetadataMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateInstanceMetadataMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateInstanceMetadataMetadata,
    } as UpdateInstanceMetadataMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateInstanceMetadataMetadata {
    const message = {
      ...baseUpdateInstanceMetadataMetadata,
    } as UpdateInstanceMetadataMetadata;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    return message;
  },

  toJSON(message: UpdateInstanceMetadataMetadata): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateInstanceMetadataMetadata>, I>>(
    object: I
  ): UpdateInstanceMetadataMetadata {
    const message = {
      ...baseUpdateInstanceMetadataMetadata,
    } as UpdateInstanceMetadataMetadata;
    message.instanceId = object.instanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateInstanceMetadataMetadata.$type,
  UpdateInstanceMetadataMetadata
);

const baseGetInstanceSerialPortOutputRequest: object = {
  $type: "yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest",
  instanceId: "",
  port: 0,
};

export const GetInstanceSerialPortOutputRequest = {
  $type: "yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest" as const,

  encode(
    message: GetInstanceSerialPortOutputRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.port !== 0) {
      writer.uint32(16).int64(message.port);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetInstanceSerialPortOutputRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetInstanceSerialPortOutputRequest,
    } as GetInstanceSerialPortOutputRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        case 2:
          message.port = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetInstanceSerialPortOutputRequest {
    const message = {
      ...baseGetInstanceSerialPortOutputRequest,
    } as GetInstanceSerialPortOutputRequest;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    message.port =
      object.port !== undefined && object.port !== null
        ? Number(object.port)
        : 0;
    return message;
  },

  toJSON(message: GetInstanceSerialPortOutputRequest): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    message.port !== undefined && (obj.port = Math.round(message.port));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetInstanceSerialPortOutputRequest>, I>
  >(object: I): GetInstanceSerialPortOutputRequest {
    const message = {
      ...baseGetInstanceSerialPortOutputRequest,
    } as GetInstanceSerialPortOutputRequest;
    message.instanceId = object.instanceId ?? "";
    message.port = object.port ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  GetInstanceSerialPortOutputRequest.$type,
  GetInstanceSerialPortOutputRequest
);

const baseGetInstanceSerialPortOutputResponse: object = {
  $type: "yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse",
  contents: "",
};

export const GetInstanceSerialPortOutputResponse = {
  $type: "yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse" as const,

  encode(
    message: GetInstanceSerialPortOutputResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contents !== "") {
      writer.uint32(10).string(message.contents);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetInstanceSerialPortOutputResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetInstanceSerialPortOutputResponse,
    } as GetInstanceSerialPortOutputResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contents = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetInstanceSerialPortOutputResponse {
    const message = {
      ...baseGetInstanceSerialPortOutputResponse,
    } as GetInstanceSerialPortOutputResponse;
    message.contents =
      object.contents !== undefined && object.contents !== null
        ? String(object.contents)
        : "";
    return message;
  },

  toJSON(message: GetInstanceSerialPortOutputResponse): unknown {
    const obj: any = {};
    message.contents !== undefined && (obj.contents = message.contents);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetInstanceSerialPortOutputResponse>, I>
  >(object: I): GetInstanceSerialPortOutputResponse {
    const message = {
      ...baseGetInstanceSerialPortOutputResponse,
    } as GetInstanceSerialPortOutputResponse;
    message.contents = object.contents ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  GetInstanceSerialPortOutputResponse.$type,
  GetInstanceSerialPortOutputResponse
);

const baseStopInstanceRequest: object = {
  $type: "yandex.cloud.compute.v1.StopInstanceRequest",
  instanceId: "",
};

export const StopInstanceRequest = {
  $type: "yandex.cloud.compute.v1.StopInstanceRequest" as const,

  encode(
    message: StopInstanceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopInstanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStopInstanceRequest } as StopInstanceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StopInstanceRequest {
    const message = { ...baseStopInstanceRequest } as StopInstanceRequest;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    return message;
  },

  toJSON(message: StopInstanceRequest): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StopInstanceRequest>, I>>(
    object: I
  ): StopInstanceRequest {
    const message = { ...baseStopInstanceRequest } as StopInstanceRequest;
    message.instanceId = object.instanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StopInstanceRequest.$type, StopInstanceRequest);

const baseStopInstanceMetadata: object = {
  $type: "yandex.cloud.compute.v1.StopInstanceMetadata",
  instanceId: "",
};

export const StopInstanceMetadata = {
  $type: "yandex.cloud.compute.v1.StopInstanceMetadata" as const,

  encode(
    message: StopInstanceMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StopInstanceMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStopInstanceMetadata } as StopInstanceMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StopInstanceMetadata {
    const message = { ...baseStopInstanceMetadata } as StopInstanceMetadata;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    return message;
  },

  toJSON(message: StopInstanceMetadata): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StopInstanceMetadata>, I>>(
    object: I
  ): StopInstanceMetadata {
    const message = { ...baseStopInstanceMetadata } as StopInstanceMetadata;
    message.instanceId = object.instanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StopInstanceMetadata.$type, StopInstanceMetadata);

const baseStartInstanceRequest: object = {
  $type: "yandex.cloud.compute.v1.StartInstanceRequest",
  instanceId: "",
};

export const StartInstanceRequest = {
  $type: "yandex.cloud.compute.v1.StartInstanceRequest" as const,

  encode(
    message: StartInstanceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StartInstanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStartInstanceRequest } as StartInstanceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartInstanceRequest {
    const message = { ...baseStartInstanceRequest } as StartInstanceRequest;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    return message;
  },

  toJSON(message: StartInstanceRequest): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartInstanceRequest>, I>>(
    object: I
  ): StartInstanceRequest {
    const message = { ...baseStartInstanceRequest } as StartInstanceRequest;
    message.instanceId = object.instanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StartInstanceRequest.$type, StartInstanceRequest);

const baseStartInstanceMetadata: object = {
  $type: "yandex.cloud.compute.v1.StartInstanceMetadata",
  instanceId: "",
};

export const StartInstanceMetadata = {
  $type: "yandex.cloud.compute.v1.StartInstanceMetadata" as const,

  encode(
    message: StartInstanceMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StartInstanceMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStartInstanceMetadata } as StartInstanceMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartInstanceMetadata {
    const message = { ...baseStartInstanceMetadata } as StartInstanceMetadata;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    return message;
  },

  toJSON(message: StartInstanceMetadata): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartInstanceMetadata>, I>>(
    object: I
  ): StartInstanceMetadata {
    const message = { ...baseStartInstanceMetadata } as StartInstanceMetadata;
    message.instanceId = object.instanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StartInstanceMetadata.$type, StartInstanceMetadata);

const baseRestartInstanceRequest: object = {
  $type: "yandex.cloud.compute.v1.RestartInstanceRequest",
  instanceId: "",
};

export const RestartInstanceRequest = {
  $type: "yandex.cloud.compute.v1.RestartInstanceRequest" as const,

  encode(
    message: RestartInstanceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RestartInstanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRestartInstanceRequest } as RestartInstanceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RestartInstanceRequest {
    const message = { ...baseRestartInstanceRequest } as RestartInstanceRequest;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    return message;
  },

  toJSON(message: RestartInstanceRequest): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RestartInstanceRequest>, I>>(
    object: I
  ): RestartInstanceRequest {
    const message = { ...baseRestartInstanceRequest } as RestartInstanceRequest;
    message.instanceId = object.instanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RestartInstanceRequest.$type, RestartInstanceRequest);

const baseRestartInstanceMetadata: object = {
  $type: "yandex.cloud.compute.v1.RestartInstanceMetadata",
  instanceId: "",
};

export const RestartInstanceMetadata = {
  $type: "yandex.cloud.compute.v1.RestartInstanceMetadata" as const,

  encode(
    message: RestartInstanceMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RestartInstanceMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRestartInstanceMetadata,
    } as RestartInstanceMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RestartInstanceMetadata {
    const message = {
      ...baseRestartInstanceMetadata,
    } as RestartInstanceMetadata;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    return message;
  },

  toJSON(message: RestartInstanceMetadata): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RestartInstanceMetadata>, I>>(
    object: I
  ): RestartInstanceMetadata {
    const message = {
      ...baseRestartInstanceMetadata,
    } as RestartInstanceMetadata;
    message.instanceId = object.instanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RestartInstanceMetadata.$type, RestartInstanceMetadata);

const baseAttachInstanceDiskRequest: object = {
  $type: "yandex.cloud.compute.v1.AttachInstanceDiskRequest",
  instanceId: "",
};

export const AttachInstanceDiskRequest = {
  $type: "yandex.cloud.compute.v1.AttachInstanceDiskRequest" as const,

  encode(
    message: AttachInstanceDiskRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.attachedDiskSpec !== undefined) {
      AttachedDiskSpec.encode(
        message.attachedDiskSpec,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AttachInstanceDiskRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAttachInstanceDiskRequest,
    } as AttachInstanceDiskRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        case 2:
          message.attachedDiskSpec = AttachedDiskSpec.decode(
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

  fromJSON(object: any): AttachInstanceDiskRequest {
    const message = {
      ...baseAttachInstanceDiskRequest,
    } as AttachInstanceDiskRequest;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    message.attachedDiskSpec =
      object.attachedDiskSpec !== undefined && object.attachedDiskSpec !== null
        ? AttachedDiskSpec.fromJSON(object.attachedDiskSpec)
        : undefined;
    return message;
  },

  toJSON(message: AttachInstanceDiskRequest): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    message.attachedDiskSpec !== undefined &&
      (obj.attachedDiskSpec = message.attachedDiskSpec
        ? AttachedDiskSpec.toJSON(message.attachedDiskSpec)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AttachInstanceDiskRequest>, I>>(
    object: I
  ): AttachInstanceDiskRequest {
    const message = {
      ...baseAttachInstanceDiskRequest,
    } as AttachInstanceDiskRequest;
    message.instanceId = object.instanceId ?? "";
    message.attachedDiskSpec =
      object.attachedDiskSpec !== undefined && object.attachedDiskSpec !== null
        ? AttachedDiskSpec.fromPartial(object.attachedDiskSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  AttachInstanceDiskRequest.$type,
  AttachInstanceDiskRequest
);

const baseAttachInstanceDiskMetadata: object = {
  $type: "yandex.cloud.compute.v1.AttachInstanceDiskMetadata",
  instanceId: "",
  diskId: "",
};

export const AttachInstanceDiskMetadata = {
  $type: "yandex.cloud.compute.v1.AttachInstanceDiskMetadata" as const,

  encode(
    message: AttachInstanceDiskMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.diskId !== "") {
      writer.uint32(18).string(message.diskId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AttachInstanceDiskMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAttachInstanceDiskMetadata,
    } as AttachInstanceDiskMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        case 2:
          message.diskId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AttachInstanceDiskMetadata {
    const message = {
      ...baseAttachInstanceDiskMetadata,
    } as AttachInstanceDiskMetadata;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    message.diskId =
      object.diskId !== undefined && object.diskId !== null
        ? String(object.diskId)
        : "";
    return message;
  },

  toJSON(message: AttachInstanceDiskMetadata): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    message.diskId !== undefined && (obj.diskId = message.diskId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AttachInstanceDiskMetadata>, I>>(
    object: I
  ): AttachInstanceDiskMetadata {
    const message = {
      ...baseAttachInstanceDiskMetadata,
    } as AttachInstanceDiskMetadata;
    message.instanceId = object.instanceId ?? "";
    message.diskId = object.diskId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  AttachInstanceDiskMetadata.$type,
  AttachInstanceDiskMetadata
);

const baseDetachInstanceDiskRequest: object = {
  $type: "yandex.cloud.compute.v1.DetachInstanceDiskRequest",
  instanceId: "",
};

export const DetachInstanceDiskRequest = {
  $type: "yandex.cloud.compute.v1.DetachInstanceDiskRequest" as const,

  encode(
    message: DetachInstanceDiskRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.diskId !== undefined) {
      writer.uint32(18).string(message.diskId);
    }
    if (message.deviceName !== undefined) {
      writer.uint32(26).string(message.deviceName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DetachInstanceDiskRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDetachInstanceDiskRequest,
    } as DetachInstanceDiskRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        case 2:
          message.diskId = reader.string();
          break;
        case 3:
          message.deviceName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DetachInstanceDiskRequest {
    const message = {
      ...baseDetachInstanceDiskRequest,
    } as DetachInstanceDiskRequest;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    message.diskId =
      object.diskId !== undefined && object.diskId !== null
        ? String(object.diskId)
        : undefined;
    message.deviceName =
      object.deviceName !== undefined && object.deviceName !== null
        ? String(object.deviceName)
        : undefined;
    return message;
  },

  toJSON(message: DetachInstanceDiskRequest): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    message.diskId !== undefined && (obj.diskId = message.diskId);
    message.deviceName !== undefined && (obj.deviceName = message.deviceName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DetachInstanceDiskRequest>, I>>(
    object: I
  ): DetachInstanceDiskRequest {
    const message = {
      ...baseDetachInstanceDiskRequest,
    } as DetachInstanceDiskRequest;
    message.instanceId = object.instanceId ?? "";
    message.diskId = object.diskId ?? undefined;
    message.deviceName = object.deviceName ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  DetachInstanceDiskRequest.$type,
  DetachInstanceDiskRequest
);

const baseDetachInstanceDiskMetadata: object = {
  $type: "yandex.cloud.compute.v1.DetachInstanceDiskMetadata",
  instanceId: "",
  diskId: "",
};

export const DetachInstanceDiskMetadata = {
  $type: "yandex.cloud.compute.v1.DetachInstanceDiskMetadata" as const,

  encode(
    message: DetachInstanceDiskMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.diskId !== "") {
      writer.uint32(18).string(message.diskId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DetachInstanceDiskMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDetachInstanceDiskMetadata,
    } as DetachInstanceDiskMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        case 2:
          message.diskId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DetachInstanceDiskMetadata {
    const message = {
      ...baseDetachInstanceDiskMetadata,
    } as DetachInstanceDiskMetadata;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    message.diskId =
      object.diskId !== undefined && object.diskId !== null
        ? String(object.diskId)
        : "";
    return message;
  },

  toJSON(message: DetachInstanceDiskMetadata): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    message.diskId !== undefined && (obj.diskId = message.diskId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DetachInstanceDiskMetadata>, I>>(
    object: I
  ): DetachInstanceDiskMetadata {
    const message = {
      ...baseDetachInstanceDiskMetadata,
    } as DetachInstanceDiskMetadata;
    message.instanceId = object.instanceId ?? "";
    message.diskId = object.diskId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DetachInstanceDiskMetadata.$type,
  DetachInstanceDiskMetadata
);

const baseAttachInstanceFilesystemRequest: object = {
  $type: "yandex.cloud.compute.v1.AttachInstanceFilesystemRequest",
  instanceId: "",
};

export const AttachInstanceFilesystemRequest = {
  $type: "yandex.cloud.compute.v1.AttachInstanceFilesystemRequest" as const,

  encode(
    message: AttachInstanceFilesystemRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.attachedFilesystemSpec !== undefined) {
      AttachedFilesystemSpec.encode(
        message.attachedFilesystemSpec,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AttachInstanceFilesystemRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAttachInstanceFilesystemRequest,
    } as AttachInstanceFilesystemRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        case 2:
          message.attachedFilesystemSpec = AttachedFilesystemSpec.decode(
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

  fromJSON(object: any): AttachInstanceFilesystemRequest {
    const message = {
      ...baseAttachInstanceFilesystemRequest,
    } as AttachInstanceFilesystemRequest;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    message.attachedFilesystemSpec =
      object.attachedFilesystemSpec !== undefined &&
      object.attachedFilesystemSpec !== null
        ? AttachedFilesystemSpec.fromJSON(object.attachedFilesystemSpec)
        : undefined;
    return message;
  },

  toJSON(message: AttachInstanceFilesystemRequest): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    message.attachedFilesystemSpec !== undefined &&
      (obj.attachedFilesystemSpec = message.attachedFilesystemSpec
        ? AttachedFilesystemSpec.toJSON(message.attachedFilesystemSpec)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AttachInstanceFilesystemRequest>, I>>(
    object: I
  ): AttachInstanceFilesystemRequest {
    const message = {
      ...baseAttachInstanceFilesystemRequest,
    } as AttachInstanceFilesystemRequest;
    message.instanceId = object.instanceId ?? "";
    message.attachedFilesystemSpec =
      object.attachedFilesystemSpec !== undefined &&
      object.attachedFilesystemSpec !== null
        ? AttachedFilesystemSpec.fromPartial(object.attachedFilesystemSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  AttachInstanceFilesystemRequest.$type,
  AttachInstanceFilesystemRequest
);

const baseAttachInstanceFilesystemMetadata: object = {
  $type: "yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata",
  instanceId: "",
  filesystemId: "",
};

export const AttachInstanceFilesystemMetadata = {
  $type: "yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata" as const,

  encode(
    message: AttachInstanceFilesystemMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.filesystemId !== "") {
      writer.uint32(18).string(message.filesystemId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AttachInstanceFilesystemMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAttachInstanceFilesystemMetadata,
    } as AttachInstanceFilesystemMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        case 2:
          message.filesystemId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AttachInstanceFilesystemMetadata {
    const message = {
      ...baseAttachInstanceFilesystemMetadata,
    } as AttachInstanceFilesystemMetadata;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    message.filesystemId =
      object.filesystemId !== undefined && object.filesystemId !== null
        ? String(object.filesystemId)
        : "";
    return message;
  },

  toJSON(message: AttachInstanceFilesystemMetadata): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    message.filesystemId !== undefined &&
      (obj.filesystemId = message.filesystemId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AttachInstanceFilesystemMetadata>, I>
  >(object: I): AttachInstanceFilesystemMetadata {
    const message = {
      ...baseAttachInstanceFilesystemMetadata,
    } as AttachInstanceFilesystemMetadata;
    message.instanceId = object.instanceId ?? "";
    message.filesystemId = object.filesystemId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  AttachInstanceFilesystemMetadata.$type,
  AttachInstanceFilesystemMetadata
);

const baseDetachInstanceFilesystemRequest: object = {
  $type: "yandex.cloud.compute.v1.DetachInstanceFilesystemRequest",
  instanceId: "",
};

export const DetachInstanceFilesystemRequest = {
  $type: "yandex.cloud.compute.v1.DetachInstanceFilesystemRequest" as const,

  encode(
    message: DetachInstanceFilesystemRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.filesystemId !== undefined) {
      writer.uint32(18).string(message.filesystemId);
    }
    if (message.deviceName !== undefined) {
      writer.uint32(26).string(message.deviceName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DetachInstanceFilesystemRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDetachInstanceFilesystemRequest,
    } as DetachInstanceFilesystemRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        case 2:
          message.filesystemId = reader.string();
          break;
        case 3:
          message.deviceName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DetachInstanceFilesystemRequest {
    const message = {
      ...baseDetachInstanceFilesystemRequest,
    } as DetachInstanceFilesystemRequest;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    message.filesystemId =
      object.filesystemId !== undefined && object.filesystemId !== null
        ? String(object.filesystemId)
        : undefined;
    message.deviceName =
      object.deviceName !== undefined && object.deviceName !== null
        ? String(object.deviceName)
        : undefined;
    return message;
  },

  toJSON(message: DetachInstanceFilesystemRequest): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    message.filesystemId !== undefined &&
      (obj.filesystemId = message.filesystemId);
    message.deviceName !== undefined && (obj.deviceName = message.deviceName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DetachInstanceFilesystemRequest>, I>>(
    object: I
  ): DetachInstanceFilesystemRequest {
    const message = {
      ...baseDetachInstanceFilesystemRequest,
    } as DetachInstanceFilesystemRequest;
    message.instanceId = object.instanceId ?? "";
    message.filesystemId = object.filesystemId ?? undefined;
    message.deviceName = object.deviceName ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  DetachInstanceFilesystemRequest.$type,
  DetachInstanceFilesystemRequest
);

const baseDetachInstanceFilesystemMetadata: object = {
  $type: "yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata",
  instanceId: "",
  filesystemId: "",
};

export const DetachInstanceFilesystemMetadata = {
  $type: "yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata" as const,

  encode(
    message: DetachInstanceFilesystemMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.filesystemId !== "") {
      writer.uint32(18).string(message.filesystemId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DetachInstanceFilesystemMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDetachInstanceFilesystemMetadata,
    } as DetachInstanceFilesystemMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        case 2:
          message.filesystemId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DetachInstanceFilesystemMetadata {
    const message = {
      ...baseDetachInstanceFilesystemMetadata,
    } as DetachInstanceFilesystemMetadata;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    message.filesystemId =
      object.filesystemId !== undefined && object.filesystemId !== null
        ? String(object.filesystemId)
        : "";
    return message;
  },

  toJSON(message: DetachInstanceFilesystemMetadata): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    message.filesystemId !== undefined &&
      (obj.filesystemId = message.filesystemId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<DetachInstanceFilesystemMetadata>, I>
  >(object: I): DetachInstanceFilesystemMetadata {
    const message = {
      ...baseDetachInstanceFilesystemMetadata,
    } as DetachInstanceFilesystemMetadata;
    message.instanceId = object.instanceId ?? "";
    message.filesystemId = object.filesystemId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DetachInstanceFilesystemMetadata.$type,
  DetachInstanceFilesystemMetadata
);

const baseAddInstanceOneToOneNatRequest: object = {
  $type: "yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest",
  instanceId: "",
  networkInterfaceIndex: "",
  internalAddress: "",
};

export const AddInstanceOneToOneNatRequest = {
  $type: "yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest" as const,

  encode(
    message: AddInstanceOneToOneNatRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.networkInterfaceIndex !== "") {
      writer.uint32(18).string(message.networkInterfaceIndex);
    }
    if (message.internalAddress !== "") {
      writer.uint32(26).string(message.internalAddress);
    }
    if (message.oneToOneNatSpec !== undefined) {
      OneToOneNatSpec.encode(
        message.oneToOneNatSpec,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddInstanceOneToOneNatRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddInstanceOneToOneNatRequest,
    } as AddInstanceOneToOneNatRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        case 2:
          message.networkInterfaceIndex = reader.string();
          break;
        case 3:
          message.internalAddress = reader.string();
          break;
        case 4:
          message.oneToOneNatSpec = OneToOneNatSpec.decode(
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

  fromJSON(object: any): AddInstanceOneToOneNatRequest {
    const message = {
      ...baseAddInstanceOneToOneNatRequest,
    } as AddInstanceOneToOneNatRequest;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    message.networkInterfaceIndex =
      object.networkInterfaceIndex !== undefined &&
      object.networkInterfaceIndex !== null
        ? String(object.networkInterfaceIndex)
        : "";
    message.internalAddress =
      object.internalAddress !== undefined && object.internalAddress !== null
        ? String(object.internalAddress)
        : "";
    message.oneToOneNatSpec =
      object.oneToOneNatSpec !== undefined && object.oneToOneNatSpec !== null
        ? OneToOneNatSpec.fromJSON(object.oneToOneNatSpec)
        : undefined;
    return message;
  },

  toJSON(message: AddInstanceOneToOneNatRequest): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    message.networkInterfaceIndex !== undefined &&
      (obj.networkInterfaceIndex = message.networkInterfaceIndex);
    message.internalAddress !== undefined &&
      (obj.internalAddress = message.internalAddress);
    message.oneToOneNatSpec !== undefined &&
      (obj.oneToOneNatSpec = message.oneToOneNatSpec
        ? OneToOneNatSpec.toJSON(message.oneToOneNatSpec)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddInstanceOneToOneNatRequest>, I>>(
    object: I
  ): AddInstanceOneToOneNatRequest {
    const message = {
      ...baseAddInstanceOneToOneNatRequest,
    } as AddInstanceOneToOneNatRequest;
    message.instanceId = object.instanceId ?? "";
    message.networkInterfaceIndex = object.networkInterfaceIndex ?? "";
    message.internalAddress = object.internalAddress ?? "";
    message.oneToOneNatSpec =
      object.oneToOneNatSpec !== undefined && object.oneToOneNatSpec !== null
        ? OneToOneNatSpec.fromPartial(object.oneToOneNatSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  AddInstanceOneToOneNatRequest.$type,
  AddInstanceOneToOneNatRequest
);

const baseAddInstanceOneToOneNatMetadata: object = {
  $type: "yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata",
  instanceId: "",
};

export const AddInstanceOneToOneNatMetadata = {
  $type: "yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata" as const,

  encode(
    message: AddInstanceOneToOneNatMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddInstanceOneToOneNatMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddInstanceOneToOneNatMetadata,
    } as AddInstanceOneToOneNatMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddInstanceOneToOneNatMetadata {
    const message = {
      ...baseAddInstanceOneToOneNatMetadata,
    } as AddInstanceOneToOneNatMetadata;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    return message;
  },

  toJSON(message: AddInstanceOneToOneNatMetadata): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddInstanceOneToOneNatMetadata>, I>>(
    object: I
  ): AddInstanceOneToOneNatMetadata {
    const message = {
      ...baseAddInstanceOneToOneNatMetadata,
    } as AddInstanceOneToOneNatMetadata;
    message.instanceId = object.instanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  AddInstanceOneToOneNatMetadata.$type,
  AddInstanceOneToOneNatMetadata
);

const baseRemoveInstanceOneToOneNatRequest: object = {
  $type: "yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest",
  instanceId: "",
  networkInterfaceIndex: "",
  internalAddress: "",
};

export const RemoveInstanceOneToOneNatRequest = {
  $type: "yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest" as const,

  encode(
    message: RemoveInstanceOneToOneNatRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.networkInterfaceIndex !== "") {
      writer.uint32(18).string(message.networkInterfaceIndex);
    }
    if (message.internalAddress !== "") {
      writer.uint32(26).string(message.internalAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveInstanceOneToOneNatRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRemoveInstanceOneToOneNatRequest,
    } as RemoveInstanceOneToOneNatRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        case 2:
          message.networkInterfaceIndex = reader.string();
          break;
        case 3:
          message.internalAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveInstanceOneToOneNatRequest {
    const message = {
      ...baseRemoveInstanceOneToOneNatRequest,
    } as RemoveInstanceOneToOneNatRequest;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    message.networkInterfaceIndex =
      object.networkInterfaceIndex !== undefined &&
      object.networkInterfaceIndex !== null
        ? String(object.networkInterfaceIndex)
        : "";
    message.internalAddress =
      object.internalAddress !== undefined && object.internalAddress !== null
        ? String(object.internalAddress)
        : "";
    return message;
  },

  toJSON(message: RemoveInstanceOneToOneNatRequest): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    message.networkInterfaceIndex !== undefined &&
      (obj.networkInterfaceIndex = message.networkInterfaceIndex);
    message.internalAddress !== undefined &&
      (obj.internalAddress = message.internalAddress);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<RemoveInstanceOneToOneNatRequest>, I>
  >(object: I): RemoveInstanceOneToOneNatRequest {
    const message = {
      ...baseRemoveInstanceOneToOneNatRequest,
    } as RemoveInstanceOneToOneNatRequest;
    message.instanceId = object.instanceId ?? "";
    message.networkInterfaceIndex = object.networkInterfaceIndex ?? "";
    message.internalAddress = object.internalAddress ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  RemoveInstanceOneToOneNatRequest.$type,
  RemoveInstanceOneToOneNatRequest
);

const baseRemoveInstanceOneToOneNatMetadata: object = {
  $type: "yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata",
  instanceId: "",
};

export const RemoveInstanceOneToOneNatMetadata = {
  $type: "yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata" as const,

  encode(
    message: RemoveInstanceOneToOneNatMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveInstanceOneToOneNatMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRemoveInstanceOneToOneNatMetadata,
    } as RemoveInstanceOneToOneNatMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveInstanceOneToOneNatMetadata {
    const message = {
      ...baseRemoveInstanceOneToOneNatMetadata,
    } as RemoveInstanceOneToOneNatMetadata;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    return message;
  },

  toJSON(message: RemoveInstanceOneToOneNatMetadata): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<RemoveInstanceOneToOneNatMetadata>, I>
  >(object: I): RemoveInstanceOneToOneNatMetadata {
    const message = {
      ...baseRemoveInstanceOneToOneNatMetadata,
    } as RemoveInstanceOneToOneNatMetadata;
    message.instanceId = object.instanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  RemoveInstanceOneToOneNatMetadata.$type,
  RemoveInstanceOneToOneNatMetadata
);

const baseUpdateInstanceNetworkInterfaceRequest: object = {
  $type: "yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest",
  instanceId: "",
  networkInterfaceIndex: "",
  subnetId: "",
  securityGroupIds: "",
};

export const UpdateInstanceNetworkInterfaceRequest = {
  $type:
    "yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest" as const,

  encode(
    message: UpdateInstanceNetworkInterfaceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.networkInterfaceIndex !== "") {
      writer.uint32(18).string(message.networkInterfaceIndex);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
    }
    if (message.subnetId !== "") {
      writer.uint32(34).string(message.subnetId);
    }
    if (message.primaryV4AddressSpec !== undefined) {
      PrimaryAddressSpec.encode(
        message.primaryV4AddressSpec,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.primaryV6AddressSpec !== undefined) {
      PrimaryAddressSpec.encode(
        message.primaryV6AddressSpec,
        writer.uint32(50).fork()
      ).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateInstanceNetworkInterfaceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateInstanceNetworkInterfaceRequest,
    } as UpdateInstanceNetworkInterfaceRequest;
    message.securityGroupIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        case 2:
          message.networkInterfaceIndex = reader.string();
          break;
        case 3:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 4:
          message.subnetId = reader.string();
          break;
        case 5:
          message.primaryV4AddressSpec = PrimaryAddressSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.primaryV6AddressSpec = PrimaryAddressSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.securityGroupIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateInstanceNetworkInterfaceRequest {
    const message = {
      ...baseUpdateInstanceNetworkInterfaceRequest,
    } as UpdateInstanceNetworkInterfaceRequest;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    message.networkInterfaceIndex =
      object.networkInterfaceIndex !== undefined &&
      object.networkInterfaceIndex !== null
        ? String(object.networkInterfaceIndex)
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
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

  toJSON(message: UpdateInstanceNetworkInterfaceRequest): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    message.networkInterfaceIndex !== undefined &&
      (obj.networkInterfaceIndex = message.networkInterfaceIndex);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
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

  fromPartial<
    I extends Exact<DeepPartial<UpdateInstanceNetworkInterfaceRequest>, I>
  >(object: I): UpdateInstanceNetworkInterfaceRequest {
    const message = {
      ...baseUpdateInstanceNetworkInterfaceRequest,
    } as UpdateInstanceNetworkInterfaceRequest;
    message.instanceId = object.instanceId ?? "";
    message.networkInterfaceIndex = object.networkInterfaceIndex ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.subnetId = object.subnetId ?? "";
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

messageTypeRegistry.set(
  UpdateInstanceNetworkInterfaceRequest.$type,
  UpdateInstanceNetworkInterfaceRequest
);

const baseUpdateInstanceNetworkInterfaceMetadata: object = {
  $type: "yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata",
  instanceId: "",
  networkInterfaceIndex: "",
};

export const UpdateInstanceNetworkInterfaceMetadata = {
  $type:
    "yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata" as const,

  encode(
    message: UpdateInstanceNetworkInterfaceMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.networkInterfaceIndex !== "") {
      writer.uint32(18).string(message.networkInterfaceIndex);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateInstanceNetworkInterfaceMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateInstanceNetworkInterfaceMetadata,
    } as UpdateInstanceNetworkInterfaceMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        case 2:
          message.networkInterfaceIndex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateInstanceNetworkInterfaceMetadata {
    const message = {
      ...baseUpdateInstanceNetworkInterfaceMetadata,
    } as UpdateInstanceNetworkInterfaceMetadata;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    message.networkInterfaceIndex =
      object.networkInterfaceIndex !== undefined &&
      object.networkInterfaceIndex !== null
        ? String(object.networkInterfaceIndex)
        : "";
    return message;
  },

  toJSON(message: UpdateInstanceNetworkInterfaceMetadata): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    message.networkInterfaceIndex !== undefined &&
      (obj.networkInterfaceIndex = message.networkInterfaceIndex);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateInstanceNetworkInterfaceMetadata>, I>
  >(object: I): UpdateInstanceNetworkInterfaceMetadata {
    const message = {
      ...baseUpdateInstanceNetworkInterfaceMetadata,
    } as UpdateInstanceNetworkInterfaceMetadata;
    message.instanceId = object.instanceId ?? "";
    message.networkInterfaceIndex = object.networkInterfaceIndex ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateInstanceNetworkInterfaceMetadata.$type,
  UpdateInstanceNetworkInterfaceMetadata
);

const baseListInstanceOperationsRequest: object = {
  $type: "yandex.cloud.compute.v1.ListInstanceOperationsRequest",
  instanceId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListInstanceOperationsRequest = {
  $type: "yandex.cloud.compute.v1.ListInstanceOperationsRequest" as const,

  encode(
    message: ListInstanceOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
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
  ): ListInstanceOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListInstanceOperationsRequest,
    } as ListInstanceOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
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

  fromJSON(object: any): ListInstanceOperationsRequest {
    const message = {
      ...baseListInstanceOperationsRequest,
    } as ListInstanceOperationsRequest;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
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

  toJSON(message: ListInstanceOperationsRequest): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListInstanceOperationsRequest>, I>>(
    object: I
  ): ListInstanceOperationsRequest {
    const message = {
      ...baseListInstanceOperationsRequest,
    } as ListInstanceOperationsRequest;
    message.instanceId = object.instanceId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListInstanceOperationsRequest.$type,
  ListInstanceOperationsRequest
);

const baseListInstanceOperationsResponse: object = {
  $type: "yandex.cloud.compute.v1.ListInstanceOperationsResponse",
  nextPageToken: "",
};

export const ListInstanceOperationsResponse = {
  $type: "yandex.cloud.compute.v1.ListInstanceOperationsResponse" as const,

  encode(
    message: ListInstanceOperationsResponse,
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
  ): ListInstanceOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListInstanceOperationsResponse,
    } as ListInstanceOperationsResponse;
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

  fromJSON(object: any): ListInstanceOperationsResponse {
    const message = {
      ...baseListInstanceOperationsResponse,
    } as ListInstanceOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListInstanceOperationsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<ListInstanceOperationsResponse>, I>>(
    object: I
  ): ListInstanceOperationsResponse {
    const message = {
      ...baseListInstanceOperationsResponse,
    } as ListInstanceOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListInstanceOperationsResponse.$type,
  ListInstanceOperationsResponse
);

const baseResourcesSpec: object = {
  $type: "yandex.cloud.compute.v1.ResourcesSpec",
  memory: 0,
  cores: 0,
  coreFraction: 0,
  gpus: 0,
};

export const ResourcesSpec = {
  $type: "yandex.cloud.compute.v1.ResourcesSpec" as const,

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
  $type: "yandex.cloud.compute.v1.AttachedDiskSpec",
  mode: 0,
  deviceName: "",
  autoDelete: false,
};

export const AttachedDiskSpec = {
  $type: "yandex.cloud.compute.v1.AttachedDiskSpec" as const,

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
    if (message.autoDelete === true) {
      writer.uint32(24).bool(message.autoDelete);
    }
    if (message.diskSpec !== undefined) {
      AttachedDiskSpec_DiskSpec.encode(
        message.diskSpec,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.diskId !== undefined) {
      writer.uint32(42).string(message.diskId);
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
          message.autoDelete = reader.bool();
          break;
        case 4:
          message.diskSpec = AttachedDiskSpec_DiskSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.diskId = reader.string();
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
    message.autoDelete =
      object.autoDelete !== undefined && object.autoDelete !== null
        ? Boolean(object.autoDelete)
        : false;
    message.diskSpec =
      object.diskSpec !== undefined && object.diskSpec !== null
        ? AttachedDiskSpec_DiskSpec.fromJSON(object.diskSpec)
        : undefined;
    message.diskId =
      object.diskId !== undefined && object.diskId !== null
        ? String(object.diskId)
        : undefined;
    return message;
  },

  toJSON(message: AttachedDiskSpec): unknown {
    const obj: any = {};
    message.mode !== undefined &&
      (obj.mode = attachedDiskSpec_ModeToJSON(message.mode));
    message.deviceName !== undefined && (obj.deviceName = message.deviceName);
    message.autoDelete !== undefined && (obj.autoDelete = message.autoDelete);
    message.diskSpec !== undefined &&
      (obj.diskSpec = message.diskSpec
        ? AttachedDiskSpec_DiskSpec.toJSON(message.diskSpec)
        : undefined);
    message.diskId !== undefined && (obj.diskId = message.diskId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AttachedDiskSpec>, I>>(
    object: I
  ): AttachedDiskSpec {
    const message = { ...baseAttachedDiskSpec } as AttachedDiskSpec;
    message.mode = object.mode ?? 0;
    message.deviceName = object.deviceName ?? "";
    message.autoDelete = object.autoDelete ?? false;
    message.diskSpec =
      object.diskSpec !== undefined && object.diskSpec !== null
        ? AttachedDiskSpec_DiskSpec.fromPartial(object.diskSpec)
        : undefined;
    message.diskId = object.diskId ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(AttachedDiskSpec.$type, AttachedDiskSpec);

const baseAttachedDiskSpec_DiskSpec: object = {
  $type: "yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec",
  name: "",
  description: "",
  typeId: "",
  size: 0,
  blockSize: 0,
};

export const AttachedDiskSpec_DiskSpec = {
  $type: "yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec" as const,

  encode(
    message: AttachedDiskSpec_DiskSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.typeId !== "") {
      writer.uint32(26).string(message.typeId);
    }
    if (message.size !== 0) {
      writer.uint32(32).int64(message.size);
    }
    if (message.blockSize !== 0) {
      writer.uint32(64).int64(message.blockSize);
    }
    if (message.diskPlacementPolicy !== undefined) {
      DiskPlacementPolicy.encode(
        message.diskPlacementPolicy,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.imageId !== undefined) {
      writer.uint32(42).string(message.imageId);
    }
    if (message.snapshotId !== undefined) {
      writer.uint32(50).string(message.snapshotId);
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
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.typeId = reader.string();
          break;
        case 4:
          message.size = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.blockSize = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.diskPlacementPolicy = DiskPlacementPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.imageId = reader.string();
          break;
        case 6:
          message.snapshotId = reader.string();
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
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
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
    message.blockSize =
      object.blockSize !== undefined && object.blockSize !== null
        ? Number(object.blockSize)
        : 0;
    message.diskPlacementPolicy =
      object.diskPlacementPolicy !== undefined &&
      object.diskPlacementPolicy !== null
        ? DiskPlacementPolicy.fromJSON(object.diskPlacementPolicy)
        : undefined;
    message.imageId =
      object.imageId !== undefined && object.imageId !== null
        ? String(object.imageId)
        : undefined;
    message.snapshotId =
      object.snapshotId !== undefined && object.snapshotId !== null
        ? String(object.snapshotId)
        : undefined;
    return message;
  },

  toJSON(message: AttachedDiskSpec_DiskSpec): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.size !== undefined && (obj.size = Math.round(message.size));
    message.blockSize !== undefined &&
      (obj.blockSize = Math.round(message.blockSize));
    message.diskPlacementPolicy !== undefined &&
      (obj.diskPlacementPolicy = message.diskPlacementPolicy
        ? DiskPlacementPolicy.toJSON(message.diskPlacementPolicy)
        : undefined);
    message.imageId !== undefined && (obj.imageId = message.imageId);
    message.snapshotId !== undefined && (obj.snapshotId = message.snapshotId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AttachedDiskSpec_DiskSpec>, I>>(
    object: I
  ): AttachedDiskSpec_DiskSpec {
    const message = {
      ...baseAttachedDiskSpec_DiskSpec,
    } as AttachedDiskSpec_DiskSpec;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.typeId = object.typeId ?? "";
    message.size = object.size ?? 0;
    message.blockSize = object.blockSize ?? 0;
    message.diskPlacementPolicy =
      object.diskPlacementPolicy !== undefined &&
      object.diskPlacementPolicy !== null
        ? DiskPlacementPolicy.fromPartial(object.diskPlacementPolicy)
        : undefined;
    message.imageId = object.imageId ?? undefined;
    message.snapshotId = object.snapshotId ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  AttachedDiskSpec_DiskSpec.$type,
  AttachedDiskSpec_DiskSpec
);

const baseAttachedLocalDiskSpec: object = {
  $type: "yandex.cloud.compute.v1.AttachedLocalDiskSpec",
  size: 0,
};

export const AttachedLocalDiskSpec = {
  $type: "yandex.cloud.compute.v1.AttachedLocalDiskSpec" as const,

  encode(
    message: AttachedLocalDiskSpec,
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
  ): AttachedLocalDiskSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAttachedLocalDiskSpec } as AttachedLocalDiskSpec;
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

  fromJSON(object: any): AttachedLocalDiskSpec {
    const message = { ...baseAttachedLocalDiskSpec } as AttachedLocalDiskSpec;
    message.size =
      object.size !== undefined && object.size !== null
        ? Number(object.size)
        : 0;
    return message;
  },

  toJSON(message: AttachedLocalDiskSpec): unknown {
    const obj: any = {};
    message.size !== undefined && (obj.size = Math.round(message.size));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AttachedLocalDiskSpec>, I>>(
    object: I
  ): AttachedLocalDiskSpec {
    const message = { ...baseAttachedLocalDiskSpec } as AttachedLocalDiskSpec;
    message.size = object.size ?? 0;
    return message;
  },
};

messageTypeRegistry.set(AttachedLocalDiskSpec.$type, AttachedLocalDiskSpec);

const baseAttachedFilesystemSpec: object = {
  $type: "yandex.cloud.compute.v1.AttachedFilesystemSpec",
  mode: 0,
  deviceName: "",
  filesystemId: "",
};

export const AttachedFilesystemSpec = {
  $type: "yandex.cloud.compute.v1.AttachedFilesystemSpec" as const,

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

const baseNetworkInterfaceSpec: object = {
  $type: "yandex.cloud.compute.v1.NetworkInterfaceSpec",
  subnetId: "",
  securityGroupIds: "",
};

export const NetworkInterfaceSpec = {
  $type: "yandex.cloud.compute.v1.NetworkInterfaceSpec" as const,

  encode(
    message: NetworkInterfaceSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    if (message.primaryV4AddressSpec !== undefined) {
      PrimaryAddressSpec.encode(
        message.primaryV4AddressSpec,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.primaryV6AddressSpec !== undefined) {
      PrimaryAddressSpec.encode(
        message.primaryV6AddressSpec,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(50).string(v!);
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
    message.securityGroupIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subnetId = reader.string();
          break;
        case 2:
          message.primaryV4AddressSpec = PrimaryAddressSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.primaryV6AddressSpec = PrimaryAddressSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
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
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
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
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
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
    message.subnetId = object.subnetId ?? "";
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
  $type: "yandex.cloud.compute.v1.PrimaryAddressSpec",
  address: "",
};

export const PrimaryAddressSpec = {
  $type: "yandex.cloud.compute.v1.PrimaryAddressSpec" as const,

  encode(
    message: PrimaryAddressSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.oneToOneNatSpec !== undefined) {
      OneToOneNatSpec.encode(
        message.oneToOneNatSpec,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.dnsRecordSpecs) {
      DnsRecordSpec.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.address = reader.string();
          break;
        case 2:
          message.oneToOneNatSpec = OneToOneNatSpec.decode(
            reader,
            reader.uint32()
          );
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

  fromJSON(object: any): PrimaryAddressSpec {
    const message = { ...basePrimaryAddressSpec } as PrimaryAddressSpec;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.oneToOneNatSpec =
      object.oneToOneNatSpec !== undefined && object.oneToOneNatSpec !== null
        ? OneToOneNatSpec.fromJSON(object.oneToOneNatSpec)
        : undefined;
    message.dnsRecordSpecs = (object.dnsRecordSpecs ?? []).map((e: any) =>
      DnsRecordSpec.fromJSON(e)
    );
    return message;
  },

  toJSON(message: PrimaryAddressSpec): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
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
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PrimaryAddressSpec>, I>>(
    object: I
  ): PrimaryAddressSpec {
    const message = { ...basePrimaryAddressSpec } as PrimaryAddressSpec;
    message.address = object.address ?? "";
    message.oneToOneNatSpec =
      object.oneToOneNatSpec !== undefined && object.oneToOneNatSpec !== null
        ? OneToOneNatSpec.fromPartial(object.oneToOneNatSpec)
        : undefined;
    message.dnsRecordSpecs =
      object.dnsRecordSpecs?.map((e) => DnsRecordSpec.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(PrimaryAddressSpec.$type, PrimaryAddressSpec);

const baseOneToOneNatSpec: object = {
  $type: "yandex.cloud.compute.v1.OneToOneNatSpec",
  ipVersion: 0,
  address: "",
};

export const OneToOneNatSpec = {
  $type: "yandex.cloud.compute.v1.OneToOneNatSpec" as const,

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
  $type: "yandex.cloud.compute.v1.DnsRecordSpec",
  fqdn: "",
  dnsZoneId: "",
  ttl: 0,
  ptr: false,
};

export const DnsRecordSpec = {
  $type: "yandex.cloud.compute.v1.DnsRecordSpec" as const,

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

const baseMoveInstanceRequest: object = {
  $type: "yandex.cloud.compute.v1.MoveInstanceRequest",
  instanceId: "",
  destinationFolderId: "",
};

export const MoveInstanceRequest = {
  $type: "yandex.cloud.compute.v1.MoveInstanceRequest" as const,

  encode(
    message: MoveInstanceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.destinationFolderId !== "") {
      writer.uint32(18).string(message.destinationFolderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveInstanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMoveInstanceRequest } as MoveInstanceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        case 2:
          message.destinationFolderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MoveInstanceRequest {
    const message = { ...baseMoveInstanceRequest } as MoveInstanceRequest;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    message.destinationFolderId =
      object.destinationFolderId !== undefined &&
      object.destinationFolderId !== null
        ? String(object.destinationFolderId)
        : "";
    return message;
  },

  toJSON(message: MoveInstanceRequest): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    message.destinationFolderId !== undefined &&
      (obj.destinationFolderId = message.destinationFolderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MoveInstanceRequest>, I>>(
    object: I
  ): MoveInstanceRequest {
    const message = { ...baseMoveInstanceRequest } as MoveInstanceRequest;
    message.instanceId = object.instanceId ?? "";
    message.destinationFolderId = object.destinationFolderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MoveInstanceRequest.$type, MoveInstanceRequest);

const baseMoveInstanceMetadata: object = {
  $type: "yandex.cloud.compute.v1.MoveInstanceMetadata",
  instanceId: "",
  sourceFolderId: "",
  destinationFolderId: "",
};

export const MoveInstanceMetadata = {
  $type: "yandex.cloud.compute.v1.MoveInstanceMetadata" as const,

  encode(
    message: MoveInstanceMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.sourceFolderId !== "") {
      writer.uint32(18).string(message.sourceFolderId);
    }
    if (message.destinationFolderId !== "") {
      writer.uint32(26).string(message.destinationFolderId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MoveInstanceMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMoveInstanceMetadata } as MoveInstanceMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        case 2:
          message.sourceFolderId = reader.string();
          break;
        case 3:
          message.destinationFolderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MoveInstanceMetadata {
    const message = { ...baseMoveInstanceMetadata } as MoveInstanceMetadata;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    message.sourceFolderId =
      object.sourceFolderId !== undefined && object.sourceFolderId !== null
        ? String(object.sourceFolderId)
        : "";
    message.destinationFolderId =
      object.destinationFolderId !== undefined &&
      object.destinationFolderId !== null
        ? String(object.destinationFolderId)
        : "";
    return message;
  },

  toJSON(message: MoveInstanceMetadata): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    message.sourceFolderId !== undefined &&
      (obj.sourceFolderId = message.sourceFolderId);
    message.destinationFolderId !== undefined &&
      (obj.destinationFolderId = message.destinationFolderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MoveInstanceMetadata>, I>>(
    object: I
  ): MoveInstanceMetadata {
    const message = { ...baseMoveInstanceMetadata } as MoveInstanceMetadata;
    message.instanceId = object.instanceId ?? "";
    message.sourceFolderId = object.sourceFolderId ?? "";
    message.destinationFolderId = object.destinationFolderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MoveInstanceMetadata.$type, MoveInstanceMetadata);

const baseRelocateInstanceRequest: object = {
  $type: "yandex.cloud.compute.v1.RelocateInstanceRequest",
  instanceId: "",
  destinationZoneId: "",
};

export const RelocateInstanceRequest = {
  $type: "yandex.cloud.compute.v1.RelocateInstanceRequest" as const,

  encode(
    message: RelocateInstanceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.destinationZoneId !== "") {
      writer.uint32(18).string(message.destinationZoneId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RelocateInstanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRelocateInstanceRequest,
    } as RelocateInstanceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        case 2:
          message.destinationZoneId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RelocateInstanceRequest {
    const message = {
      ...baseRelocateInstanceRequest,
    } as RelocateInstanceRequest;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    message.destinationZoneId =
      object.destinationZoneId !== undefined &&
      object.destinationZoneId !== null
        ? String(object.destinationZoneId)
        : "";
    return message;
  },

  toJSON(message: RelocateInstanceRequest): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    message.destinationZoneId !== undefined &&
      (obj.destinationZoneId = message.destinationZoneId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RelocateInstanceRequest>, I>>(
    object: I
  ): RelocateInstanceRequest {
    const message = {
      ...baseRelocateInstanceRequest,
    } as RelocateInstanceRequest;
    message.instanceId = object.instanceId ?? "";
    message.destinationZoneId = object.destinationZoneId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RelocateInstanceRequest.$type, RelocateInstanceRequest);

const baseRelocateInstanceMetadata: object = {
  $type: "yandex.cloud.compute.v1.RelocateInstanceMetadata",
  instanceId: "",
  sourceZoneId: "",
  destinationZoneId: "",
};

export const RelocateInstanceMetadata = {
  $type: "yandex.cloud.compute.v1.RelocateInstanceMetadata" as const,

  encode(
    message: RelocateInstanceMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.sourceZoneId !== "") {
      writer.uint32(18).string(message.sourceZoneId);
    }
    if (message.destinationZoneId !== "") {
      writer.uint32(26).string(message.destinationZoneId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RelocateInstanceMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRelocateInstanceMetadata,
    } as RelocateInstanceMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        case 2:
          message.sourceZoneId = reader.string();
          break;
        case 3:
          message.destinationZoneId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RelocateInstanceMetadata {
    const message = {
      ...baseRelocateInstanceMetadata,
    } as RelocateInstanceMetadata;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    message.sourceZoneId =
      object.sourceZoneId !== undefined && object.sourceZoneId !== null
        ? String(object.sourceZoneId)
        : "";
    message.destinationZoneId =
      object.destinationZoneId !== undefined &&
      object.destinationZoneId !== null
        ? String(object.destinationZoneId)
        : "";
    return message;
  },

  toJSON(message: RelocateInstanceMetadata): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    message.sourceZoneId !== undefined &&
      (obj.sourceZoneId = message.sourceZoneId);
    message.destinationZoneId !== undefined &&
      (obj.destinationZoneId = message.destinationZoneId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RelocateInstanceMetadata>, I>>(
    object: I
  ): RelocateInstanceMetadata {
    const message = {
      ...baseRelocateInstanceMetadata,
    } as RelocateInstanceMetadata;
    message.instanceId = object.instanceId ?? "";
    message.sourceZoneId = object.sourceZoneId ?? "";
    message.destinationZoneId = object.destinationZoneId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  RelocateInstanceMetadata.$type,
  RelocateInstanceMetadata
);

const baseGuestStopInstanceMetadata: object = {
  $type: "yandex.cloud.compute.v1.GuestStopInstanceMetadata",
  instanceId: "",
};

export const GuestStopInstanceMetadata = {
  $type: "yandex.cloud.compute.v1.GuestStopInstanceMetadata" as const,

  encode(
    message: GuestStopInstanceMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GuestStopInstanceMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGuestStopInstanceMetadata,
    } as GuestStopInstanceMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GuestStopInstanceMetadata {
    const message = {
      ...baseGuestStopInstanceMetadata,
    } as GuestStopInstanceMetadata;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    return message;
  },

  toJSON(message: GuestStopInstanceMetadata): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GuestStopInstanceMetadata>, I>>(
    object: I
  ): GuestStopInstanceMetadata {
    const message = {
      ...baseGuestStopInstanceMetadata,
    } as GuestStopInstanceMetadata;
    message.instanceId = object.instanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  GuestStopInstanceMetadata.$type,
  GuestStopInstanceMetadata
);

const basePreemptInstanceMetadata: object = {
  $type: "yandex.cloud.compute.v1.PreemptInstanceMetadata",
  instanceId: "",
};

export const PreemptInstanceMetadata = {
  $type: "yandex.cloud.compute.v1.PreemptInstanceMetadata" as const,

  encode(
    message: PreemptInstanceMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PreemptInstanceMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePreemptInstanceMetadata,
    } as PreemptInstanceMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PreemptInstanceMetadata {
    const message = {
      ...basePreemptInstanceMetadata,
    } as PreemptInstanceMetadata;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    return message;
  },

  toJSON(message: PreemptInstanceMetadata): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PreemptInstanceMetadata>, I>>(
    object: I
  ): PreemptInstanceMetadata {
    const message = {
      ...basePreemptInstanceMetadata,
    } as PreemptInstanceMetadata;
    message.instanceId = object.instanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(PreemptInstanceMetadata.$type, PreemptInstanceMetadata);

const baseCrashInstanceMetadata: object = {
  $type: "yandex.cloud.compute.v1.CrashInstanceMetadata",
  instanceId: "",
};

export const CrashInstanceMetadata = {
  $type: "yandex.cloud.compute.v1.CrashInstanceMetadata" as const,

  encode(
    message: CrashInstanceMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CrashInstanceMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCrashInstanceMetadata } as CrashInstanceMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CrashInstanceMetadata {
    const message = { ...baseCrashInstanceMetadata } as CrashInstanceMetadata;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    return message;
  },

  toJSON(message: CrashInstanceMetadata): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CrashInstanceMetadata>, I>>(
    object: I
  ): CrashInstanceMetadata {
    const message = { ...baseCrashInstanceMetadata } as CrashInstanceMetadata;
    message.instanceId = object.instanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CrashInstanceMetadata.$type, CrashInstanceMetadata);

/** A set of methods for managing Instance resources. */
export const InstanceServiceService = {
  /**
   * Returns the specified Instance resource.
   *
   * To get the list of available Instance resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.compute.v1.InstanceService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetInstanceRequest) =>
      Buffer.from(GetInstanceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetInstanceRequest.decode(value),
    responseSerialize: (value: Instance) =>
      Buffer.from(Instance.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Instance.decode(value),
  },
  /** Retrieves the list of Instance resources in the specified folder. */
  list: {
    path: "/yandex.cloud.compute.v1.InstanceService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListInstancesRequest) =>
      Buffer.from(ListInstancesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListInstancesRequest.decode(value),
    responseSerialize: (value: ListInstancesResponse) =>
      Buffer.from(ListInstancesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListInstancesResponse.decode(value),
  },
  /**
   * Creates an instance in the specified folder.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  create: {
    path: "/yandex.cloud.compute.v1.InstanceService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateInstanceRequest) =>
      Buffer.from(CreateInstanceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateInstanceRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified instance. */
  update: {
    path: "/yandex.cloud.compute.v1.InstanceService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateInstanceRequest) =>
      Buffer.from(UpdateInstanceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateInstanceRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified instance. */
  delete: {
    path: "/yandex.cloud.compute.v1.InstanceService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteInstanceRequest) =>
      Buffer.from(DeleteInstanceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteInstanceRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the metadata of the specified instance. */
  updateMetadata: {
    path: "/yandex.cloud.compute.v1.InstanceService/UpdateMetadata",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateInstanceMetadataRequest) =>
      Buffer.from(UpdateInstanceMetadataRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateInstanceMetadataRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns the serial port output of the specified Instance resource. */
  getSerialPortOutput: {
    path: "/yandex.cloud.compute.v1.InstanceService/GetSerialPortOutput",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetInstanceSerialPortOutputRequest) =>
      Buffer.from(GetInstanceSerialPortOutputRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetInstanceSerialPortOutputRequest.decode(value),
    responseSerialize: (value: GetInstanceSerialPortOutputResponse) =>
      Buffer.from(GetInstanceSerialPortOutputResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetInstanceSerialPortOutputResponse.decode(value),
  },
  /**
   * Stops the running instance.
   *
   * You can start the instance later using the [InstanceService.Start] method.
   */
  stop: {
    path: "/yandex.cloud.compute.v1.InstanceService/Stop",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StopInstanceRequest) =>
      Buffer.from(StopInstanceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StopInstanceRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Starts the stopped instance. */
  start: {
    path: "/yandex.cloud.compute.v1.InstanceService/Start",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartInstanceRequest) =>
      Buffer.from(StartInstanceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StartInstanceRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Restarts the running instance. */
  restart: {
    path: "/yandex.cloud.compute.v1.InstanceService/Restart",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RestartInstanceRequest) =>
      Buffer.from(RestartInstanceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RestartInstanceRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Attaches the disk to the instance. */
  attachDisk: {
    path: "/yandex.cloud.compute.v1.InstanceService/AttachDisk",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AttachInstanceDiskRequest) =>
      Buffer.from(AttachInstanceDiskRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      AttachInstanceDiskRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Detaches the disk from the instance. */
  detachDisk: {
    path: "/yandex.cloud.compute.v1.InstanceService/DetachDisk",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DetachInstanceDiskRequest) =>
      Buffer.from(DetachInstanceDiskRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DetachInstanceDiskRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Attaches the filesystem to the instance.
   *
   * The instance and the filesystem must reside in the same availability zone.
   *
   * To attach a filesystem, the instance must have a `STOPPED` status ([Instance.status]).
   * To check the instance status, make a [InstanceService.Get] request.
   * To stop the running instance, make a [InstanceService.Stop] request.
   *
   * To use the instance with an attached filesystem, the latter must be mounted.
   * For details, see [documentation](/docs/compute/operations/filesystem/attach-to-vm).
   */
  attachFilesystem: {
    path: "/yandex.cloud.compute.v1.InstanceService/AttachFilesystem",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AttachInstanceFilesystemRequest) =>
      Buffer.from(AttachInstanceFilesystemRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      AttachInstanceFilesystemRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Detaches the filesystem from the instance.
   *
   * To detach a filesystem, the instance must have a `STOPPED` status ([Instance.status]).
   * To check the instance status, make a [InstanceService.Get] request.
   * To stop the running instance, make a [InstanceService.Stop] request.
   */
  detachFilesystem: {
    path: "/yandex.cloud.compute.v1.InstanceService/DetachFilesystem",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DetachInstanceFilesystemRequest) =>
      Buffer.from(DetachInstanceFilesystemRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DetachInstanceFilesystemRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Enables One-to-one NAT on the network interface. */
  addOneToOneNat: {
    path: "/yandex.cloud.compute.v1.InstanceService/AddOneToOneNat",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddInstanceOneToOneNatRequest) =>
      Buffer.from(AddInstanceOneToOneNatRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      AddInstanceOneToOneNatRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Removes One-to-one NAT from the network interface. */
  removeOneToOneNat: {
    path: "/yandex.cloud.compute.v1.InstanceService/RemoveOneToOneNat",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveInstanceOneToOneNatRequest) =>
      Buffer.from(RemoveInstanceOneToOneNatRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      RemoveInstanceOneToOneNatRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified instance network interface. */
  updateNetworkInterface: {
    path: "/yandex.cloud.compute.v1.InstanceService/UpdateNetworkInterface",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateInstanceNetworkInterfaceRequest) =>
      Buffer.from(UpdateInstanceNetworkInterfaceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateInstanceNetworkInterfaceRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified instance. */
  listOperations: {
    path: "/yandex.cloud.compute.v1.InstanceService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListInstanceOperationsRequest) =>
      Buffer.from(ListInstanceOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListInstanceOperationsRequest.decode(value),
    responseSerialize: (value: ListInstanceOperationsResponse) =>
      Buffer.from(ListInstanceOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListInstanceOperationsResponse.decode(value),
  },
  /**
   * Moves the specified instance to another folder of the same cloud.
   *
   * The instance must be stopped before moving. To stop the instance, make a [Stop] request.
   *
   * After moving, the instance will start recording its Monitoring default metrics to its new folder. Metrics
   * that have been recorded to the source folder prior to moving will be retained.
   */
  move: {
    path: "/yandex.cloud.compute.v1.InstanceService/Move",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MoveInstanceRequest) =>
      Buffer.from(MoveInstanceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MoveInstanceRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Moves the specified instance to another availability zone
   *
   * Running instance will be restarted during this operation.
   */
  relocate: {
    path: "/yandex.cloud.compute.v1.InstanceService/Relocate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RelocateInstanceRequest) =>
      Buffer.from(RelocateInstanceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      RelocateInstanceRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists access bindings for the instance. */
  listAccessBindings: {
    path: "/yandex.cloud.compute.v1.InstanceService/ListAccessBindings",
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
  /** Sets access bindings for the instance. */
  setAccessBindings: {
    path: "/yandex.cloud.compute.v1.InstanceService/SetAccessBindings",
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
  /** Updates access bindings for the instance. */
  updateAccessBindings: {
    path: "/yandex.cloud.compute.v1.InstanceService/UpdateAccessBindings",
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
} as const;

export interface InstanceServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified Instance resource.
   *
   * To get the list of available Instance resources, make a [List] request.
   */
  get: handleUnaryCall<GetInstanceRequest, Instance>;
  /** Retrieves the list of Instance resources in the specified folder. */
  list: handleUnaryCall<ListInstancesRequest, ListInstancesResponse>;
  /**
   * Creates an instance in the specified folder.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  create: handleUnaryCall<CreateInstanceRequest, Operation>;
  /** Updates the specified instance. */
  update: handleUnaryCall<UpdateInstanceRequest, Operation>;
  /** Deletes the specified instance. */
  delete: handleUnaryCall<DeleteInstanceRequest, Operation>;
  /** Updates the metadata of the specified instance. */
  updateMetadata: handleUnaryCall<UpdateInstanceMetadataRequest, Operation>;
  /** Returns the serial port output of the specified Instance resource. */
  getSerialPortOutput: handleUnaryCall<
    GetInstanceSerialPortOutputRequest,
    GetInstanceSerialPortOutputResponse
  >;
  /**
   * Stops the running instance.
   *
   * You can start the instance later using the [InstanceService.Start] method.
   */
  stop: handleUnaryCall<StopInstanceRequest, Operation>;
  /** Starts the stopped instance. */
  start: handleUnaryCall<StartInstanceRequest, Operation>;
  /** Restarts the running instance. */
  restart: handleUnaryCall<RestartInstanceRequest, Operation>;
  /** Attaches the disk to the instance. */
  attachDisk: handleUnaryCall<AttachInstanceDiskRequest, Operation>;
  /** Detaches the disk from the instance. */
  detachDisk: handleUnaryCall<DetachInstanceDiskRequest, Operation>;
  /**
   * Attaches the filesystem to the instance.
   *
   * The instance and the filesystem must reside in the same availability zone.
   *
   * To attach a filesystem, the instance must have a `STOPPED` status ([Instance.status]).
   * To check the instance status, make a [InstanceService.Get] request.
   * To stop the running instance, make a [InstanceService.Stop] request.
   *
   * To use the instance with an attached filesystem, the latter must be mounted.
   * For details, see [documentation](/docs/compute/operations/filesystem/attach-to-vm).
   */
  attachFilesystem: handleUnaryCall<AttachInstanceFilesystemRequest, Operation>;
  /**
   * Detaches the filesystem from the instance.
   *
   * To detach a filesystem, the instance must have a `STOPPED` status ([Instance.status]).
   * To check the instance status, make a [InstanceService.Get] request.
   * To stop the running instance, make a [InstanceService.Stop] request.
   */
  detachFilesystem: handleUnaryCall<DetachInstanceFilesystemRequest, Operation>;
  /** Enables One-to-one NAT on the network interface. */
  addOneToOneNat: handleUnaryCall<AddInstanceOneToOneNatRequest, Operation>;
  /** Removes One-to-one NAT from the network interface. */
  removeOneToOneNat: handleUnaryCall<
    RemoveInstanceOneToOneNatRequest,
    Operation
  >;
  /** Updates the specified instance network interface. */
  updateNetworkInterface: handleUnaryCall<
    UpdateInstanceNetworkInterfaceRequest,
    Operation
  >;
  /** Lists operations for the specified instance. */
  listOperations: handleUnaryCall<
    ListInstanceOperationsRequest,
    ListInstanceOperationsResponse
  >;
  /**
   * Moves the specified instance to another folder of the same cloud.
   *
   * The instance must be stopped before moving. To stop the instance, make a [Stop] request.
   *
   * After moving, the instance will start recording its Monitoring default metrics to its new folder. Metrics
   * that have been recorded to the source folder prior to moving will be retained.
   */
  move: handleUnaryCall<MoveInstanceRequest, Operation>;
  /**
   * Moves the specified instance to another availability zone
   *
   * Running instance will be restarted during this operation.
   */
  relocate: handleUnaryCall<RelocateInstanceRequest, Operation>;
  /** Lists access bindings for the instance. */
  listAccessBindings: handleUnaryCall<
    ListAccessBindingsRequest,
    ListAccessBindingsResponse
  >;
  /** Sets access bindings for the instance. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the instance. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface InstanceServiceClient extends Client {
  /**
   * Returns the specified Instance resource.
   *
   * To get the list of available Instance resources, make a [List] request.
   */
  get(
    request: GetInstanceRequest,
    callback: (error: ServiceError | null, response: Instance) => void
  ): ClientUnaryCall;
  get(
    request: GetInstanceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Instance) => void
  ): ClientUnaryCall;
  get(
    request: GetInstanceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Instance) => void
  ): ClientUnaryCall;
  /** Retrieves the list of Instance resources in the specified folder. */
  list(
    request: ListInstancesRequest,
    callback: (
      error: ServiceError | null,
      response: ListInstancesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListInstancesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListInstancesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListInstancesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListInstancesResponse
    ) => void
  ): ClientUnaryCall;
  /**
   * Creates an instance in the specified folder.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  create(
    request: CreateInstanceRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateInstanceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateInstanceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified instance. */
  update(
    request: UpdateInstanceRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateInstanceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateInstanceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified instance. */
  delete(
    request: DeleteInstanceRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteInstanceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteInstanceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the metadata of the specified instance. */
  updateMetadata(
    request: UpdateInstanceMetadataRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateMetadata(
    request: UpdateInstanceMetadataRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateMetadata(
    request: UpdateInstanceMetadataRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Returns the serial port output of the specified Instance resource. */
  getSerialPortOutput(
    request: GetInstanceSerialPortOutputRequest,
    callback: (
      error: ServiceError | null,
      response: GetInstanceSerialPortOutputResponse
    ) => void
  ): ClientUnaryCall;
  getSerialPortOutput(
    request: GetInstanceSerialPortOutputRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetInstanceSerialPortOutputResponse
    ) => void
  ): ClientUnaryCall;
  getSerialPortOutput(
    request: GetInstanceSerialPortOutputRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetInstanceSerialPortOutputResponse
    ) => void
  ): ClientUnaryCall;
  /**
   * Stops the running instance.
   *
   * You can start the instance later using the [InstanceService.Start] method.
   */
  stop(
    request: StopInstanceRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  stop(
    request: StopInstanceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  stop(
    request: StopInstanceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Starts the stopped instance. */
  start(
    request: StartInstanceRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  start(
    request: StartInstanceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  start(
    request: StartInstanceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Restarts the running instance. */
  restart(
    request: RestartInstanceRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  restart(
    request: RestartInstanceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  restart(
    request: RestartInstanceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Attaches the disk to the instance. */
  attachDisk(
    request: AttachInstanceDiskRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  attachDisk(
    request: AttachInstanceDiskRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  attachDisk(
    request: AttachInstanceDiskRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Detaches the disk from the instance. */
  detachDisk(
    request: DetachInstanceDiskRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  detachDisk(
    request: DetachInstanceDiskRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  detachDisk(
    request: DetachInstanceDiskRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Attaches the filesystem to the instance.
   *
   * The instance and the filesystem must reside in the same availability zone.
   *
   * To attach a filesystem, the instance must have a `STOPPED` status ([Instance.status]).
   * To check the instance status, make a [InstanceService.Get] request.
   * To stop the running instance, make a [InstanceService.Stop] request.
   *
   * To use the instance with an attached filesystem, the latter must be mounted.
   * For details, see [documentation](/docs/compute/operations/filesystem/attach-to-vm).
   */
  attachFilesystem(
    request: AttachInstanceFilesystemRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  attachFilesystem(
    request: AttachInstanceFilesystemRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  attachFilesystem(
    request: AttachInstanceFilesystemRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Detaches the filesystem from the instance.
   *
   * To detach a filesystem, the instance must have a `STOPPED` status ([Instance.status]).
   * To check the instance status, make a [InstanceService.Get] request.
   * To stop the running instance, make a [InstanceService.Stop] request.
   */
  detachFilesystem(
    request: DetachInstanceFilesystemRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  detachFilesystem(
    request: DetachInstanceFilesystemRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  detachFilesystem(
    request: DetachInstanceFilesystemRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Enables One-to-one NAT on the network interface. */
  addOneToOneNat(
    request: AddInstanceOneToOneNatRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addOneToOneNat(
    request: AddInstanceOneToOneNatRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addOneToOneNat(
    request: AddInstanceOneToOneNatRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Removes One-to-one NAT from the network interface. */
  removeOneToOneNat(
    request: RemoveInstanceOneToOneNatRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  removeOneToOneNat(
    request: RemoveInstanceOneToOneNatRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  removeOneToOneNat(
    request: RemoveInstanceOneToOneNatRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified instance network interface. */
  updateNetworkInterface(
    request: UpdateInstanceNetworkInterfaceRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateNetworkInterface(
    request: UpdateInstanceNetworkInterfaceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateNetworkInterface(
    request: UpdateInstanceNetworkInterfaceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified instance. */
  listOperations(
    request: ListInstanceOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListInstanceOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListInstanceOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListInstanceOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListInstanceOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListInstanceOperationsResponse
    ) => void
  ): ClientUnaryCall;
  /**
   * Moves the specified instance to another folder of the same cloud.
   *
   * The instance must be stopped before moving. To stop the instance, make a [Stop] request.
   *
   * After moving, the instance will start recording its Monitoring default metrics to its new folder. Metrics
   * that have been recorded to the source folder prior to moving will be retained.
   */
  move(
    request: MoveInstanceRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  move(
    request: MoveInstanceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  move(
    request: MoveInstanceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Moves the specified instance to another availability zone
   *
   * Running instance will be restarted during this operation.
   */
  relocate(
    request: RelocateInstanceRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  relocate(
    request: RelocateInstanceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  relocate(
    request: RelocateInstanceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists access bindings for the instance. */
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
  /** Sets access bindings for the instance. */
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
  /** Updates access bindings for the instance. */
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
}

export const InstanceServiceClient = makeGenericClientConstructor(
  InstanceServiceService,
  "yandex.cloud.compute.v1.InstanceService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): InstanceServiceClient;
  service: typeof InstanceServiceService;
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
