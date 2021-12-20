/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.compute.v1";

export enum IpVersion {
  IP_VERSION_UNSPECIFIED = 0,
  /** IPV4 - IPv4 address, for example 192.0.2.235. */
  IPV4 = 1,
  /** IPV6 - IPv6 address. Not available yet. */
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

/** An Instance resource. For more information, see [Instances](/docs/compute/concepts/vm). */
export interface Instance {
  $type: "yandex.cloud.compute.v1.Instance";
  /** ID of the instance. */
  id: string;
  /** ID of the folder that the instance belongs to. */
  folderId: string;
  createdAt?: Date;
  /** Name of the instance. 1-63 characters long. */
  name: string;
  /** Description of the instance. 0-256 characters long. */
  description: string;
  /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
  labels: { [key: string]: string };
  /** ID of the availability zone where the instance resides. */
  zoneId: string;
  /** ID of the hardware platform configuration for the instance. */
  platformId: string;
  /** Computing resources of the instance such as the amount of memory and number of cores. */
  resources?: Resources;
  /** Status of the instance. */
  status: Instance_Status;
  /**
   * The metadata `key:value` pairs assigned to this instance. This includes custom metadata and predefined keys.
   *
   * For example, you may use the metadata in order to provide your public SSH key to the instance.
   * For more information, see [Metadata](/docs/compute/concepts/vm-metadata).
   */
  metadata: { [key: string]: string };
  /** Boot disk that is attached to the instance. */
  bootDisk?: AttachedDisk;
  /** Array of secondary disks that are attached to the instance. */
  secondaryDisks: AttachedDisk[];
  /** Array of filesystems that are attached to the instance. */
  filesystems: AttachedFilesystem[];
  /** Array of network interfaces that are attached to the instance. */
  networkInterfaces: NetworkInterface[];
  /**
   * A domain name of the instance. FQDN is defined by the server
   * in the format `<hostname>.<region_id>.internal` when the instance is created.
   * If the hostname were not specified when the instance was created, FQDN would be `<id>.auto.internal`.
   */
  fqdn: string;
  /** Scheduling policy configuration. */
  schedulingPolicy?: SchedulingPolicy;
  /**
   * ID of the service account to use for [authentication inside the instance](/docs/compute/operations/vm-connect/auth-inside-vm).
   * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
   */
  serviceAccountId: string;
  /** Network Settings */
  networkSettings?: NetworkSettings;
  /** Placement policy configuration. */
  placementPolicy?: PlacementPolicy;
}

export enum Instance_Status {
  STATUS_UNSPECIFIED = 0,
  /** PROVISIONING - Instance is waiting for resources to be allocated. */
  PROVISIONING = 1,
  /** RUNNING - Instance is running normally. */
  RUNNING = 2,
  /** STOPPING - Instance is being stopped. */
  STOPPING = 3,
  /** STOPPED - Instance stopped. */
  STOPPED = 4,
  /** STARTING - Instance is being started. */
  STARTING = 5,
  /** RESTARTING - Instance is being restarted. */
  RESTARTING = 6,
  /** UPDATING - Instance is being updated. */
  UPDATING = 7,
  /** ERROR - Instance encountered a problem and cannot operate. */
  ERROR = 8,
  /** CRASHED - Instance crashed and will be restarted automatically. */
  CRASHED = 9,
  /** DELETING - Instance is being deleted. */
  DELETING = 10,
  UNRECOGNIZED = -1,
}

export function instance_StatusFromJSON(object: any): Instance_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Instance_Status.STATUS_UNSPECIFIED;
    case 1:
    case "PROVISIONING":
      return Instance_Status.PROVISIONING;
    case 2:
    case "RUNNING":
      return Instance_Status.RUNNING;
    case 3:
    case "STOPPING":
      return Instance_Status.STOPPING;
    case 4:
    case "STOPPED":
      return Instance_Status.STOPPED;
    case 5:
    case "STARTING":
      return Instance_Status.STARTING;
    case 6:
    case "RESTARTING":
      return Instance_Status.RESTARTING;
    case 7:
    case "UPDATING":
      return Instance_Status.UPDATING;
    case 8:
    case "ERROR":
      return Instance_Status.ERROR;
    case 9:
    case "CRASHED":
      return Instance_Status.CRASHED;
    case 10:
    case "DELETING":
      return Instance_Status.DELETING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Instance_Status.UNRECOGNIZED;
  }
}

export function instance_StatusToJSON(object: Instance_Status): string {
  switch (object) {
    case Instance_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Instance_Status.PROVISIONING:
      return "PROVISIONING";
    case Instance_Status.RUNNING:
      return "RUNNING";
    case Instance_Status.STOPPING:
      return "STOPPING";
    case Instance_Status.STOPPED:
      return "STOPPED";
    case Instance_Status.STARTING:
      return "STARTING";
    case Instance_Status.RESTARTING:
      return "RESTARTING";
    case Instance_Status.UPDATING:
      return "UPDATING";
    case Instance_Status.ERROR:
      return "ERROR";
    case Instance_Status.CRASHED:
      return "CRASHED";
    case Instance_Status.DELETING:
      return "DELETING";
    default:
      return "UNKNOWN";
  }
}

export interface Instance_LabelsEntry {
  $type: "yandex.cloud.compute.v1.Instance.LabelsEntry";
  key: string;
  value: string;
}

export interface Instance_MetadataEntry {
  $type: "yandex.cloud.compute.v1.Instance.MetadataEntry";
  key: string;
  value: string;
}

export interface Resources {
  $type: "yandex.cloud.compute.v1.Resources";
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

export interface AttachedDisk {
  $type: "yandex.cloud.compute.v1.AttachedDisk";
  /** Access mode to the Disk resource. */
  mode: AttachedDisk_Mode;
  /**
   * Serial number that is reflected into the /dev/disk/by-id/ tree
   * of a Linux operating system running within the instance.
   *
   * This value can be used to reference the device for mounting, resizing, and so on, from within the instance.
   */
  deviceName: string;
  /** Specifies whether the disk will be auto-deleted when the instance is deleted. */
  autoDelete: boolean;
  /** ID of the disk that is attached to the instance. */
  diskId: string;
}

export enum AttachedDisk_Mode {
  MODE_UNSPECIFIED = 0,
  /** READ_ONLY - Read-only access. */
  READ_ONLY = 1,
  /** READ_WRITE - Read/Write access. */
  READ_WRITE = 2,
  UNRECOGNIZED = -1,
}

export function attachedDisk_ModeFromJSON(object: any): AttachedDisk_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return AttachedDisk_Mode.MODE_UNSPECIFIED;
    case 1:
    case "READ_ONLY":
      return AttachedDisk_Mode.READ_ONLY;
    case 2:
    case "READ_WRITE":
      return AttachedDisk_Mode.READ_WRITE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AttachedDisk_Mode.UNRECOGNIZED;
  }
}

export function attachedDisk_ModeToJSON(object: AttachedDisk_Mode): string {
  switch (object) {
    case AttachedDisk_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case AttachedDisk_Mode.READ_ONLY:
      return "READ_ONLY";
    case AttachedDisk_Mode.READ_WRITE:
      return "READ_WRITE";
    default:
      return "UNKNOWN";
  }
}

export interface AttachedFilesystem {
  $type: "yandex.cloud.compute.v1.AttachedFilesystem";
  /** Access mode to the filesystem. */
  mode: AttachedFilesystem_Mode;
  /**
   * Name of the device representing the filesystem on the instance.
   *
   * The name should be used for referencing the filesystem from within the instance
   * when it's being mounted, resized etc.
   */
  deviceName: string;
  /** ID of the filesystem that is attached to the instance. */
  filesystemId: string;
}

export enum AttachedFilesystem_Mode {
  MODE_UNSPECIFIED = 0,
  /** READ_ONLY - Read-only access. */
  READ_ONLY = 1,
  /** READ_WRITE - Read/Write access. */
  READ_WRITE = 2,
  UNRECOGNIZED = -1,
}

export function attachedFilesystem_ModeFromJSON(
  object: any
): AttachedFilesystem_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return AttachedFilesystem_Mode.MODE_UNSPECIFIED;
    case 1:
    case "READ_ONLY":
      return AttachedFilesystem_Mode.READ_ONLY;
    case 2:
    case "READ_WRITE":
      return AttachedFilesystem_Mode.READ_WRITE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AttachedFilesystem_Mode.UNRECOGNIZED;
  }
}

export function attachedFilesystem_ModeToJSON(
  object: AttachedFilesystem_Mode
): string {
  switch (object) {
    case AttachedFilesystem_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case AttachedFilesystem_Mode.READ_ONLY:
      return "READ_ONLY";
    case AttachedFilesystem_Mode.READ_WRITE:
      return "READ_WRITE";
    default:
      return "UNKNOWN";
  }
}

export interface NetworkInterface {
  $type: "yandex.cloud.compute.v1.NetworkInterface";
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
  /** Primary IPv6 address that is assigned to the instance for this network interface. IPv6 not available yet. */
  primaryV6Address?: PrimaryAddress;
  /** ID's of security groups attached to the interface */
  securityGroupIds: string[];
}

export interface PrimaryAddress {
  $type: "yandex.cloud.compute.v1.PrimaryAddress";
  /** An IPv4 internal network address that is assigned to the instance for this network interface. */
  address: string;
  /** One-to-one NAT configuration. If missing, NAT has not been set up. */
  oneToOneNat?: OneToOneNat;
  /** Internal DNS configuration */
  dnsRecords: DnsRecord[];
}

export interface OneToOneNat {
  $type: "yandex.cloud.compute.v1.OneToOneNat";
  /** An external IP address associated with this instance. */
  address: string;
  /** IP version for the external IP address. */
  ipVersion: IpVersion;
  /** External DNS configuration */
  dnsRecords: DnsRecord[];
}

export interface DnsRecord {
  $type: "yandex.cloud.compute.v1.DnsRecord";
  /**
   * Name of the A/AAAA record as specified when creating the instance.
   * Note that if `fqdn' has no trailing '.', it is specified relative to the zone (@see dns_zone_id).
   */
  fqdn: string;
  /** DNS zone id for the record (optional, if not set, some private zone is used). */
  dnsZoneId: string;
  /** DNS record ttl (optional, if not set, a reasonable default is used.) */
  ttl: number;
  /** When true, indicates there is a corresponding auto-created PTR DNS record. */
  ptr: boolean;
}

export interface SchedulingPolicy {
  $type: "yandex.cloud.compute.v1.SchedulingPolicy";
  /** True for short-lived compute instances. For more information, see [Preemptible VMs](/docs/compute/concepts/preemptible-vm). */
  preemptible: boolean;
}

export interface NetworkSettings {
  $type: "yandex.cloud.compute.v1.NetworkSettings";
  /** Network Type */
  type: NetworkSettings_Type;
}

export enum NetworkSettings_Type {
  TYPE_UNSPECIFIED = 0,
  /** STANDARD - Standard network. */
  STANDARD = 1,
  /** SOFTWARE_ACCELERATED - Software accelerated network. */
  SOFTWARE_ACCELERATED = 2,
  /** HARDWARE_ACCELERATED - Hardware accelerated network (not available yet, reserved for future use). */
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

export interface PlacementPolicy {
  $type: "yandex.cloud.compute.v1.PlacementPolicy";
  /** Placement group ID. */
  placementGroupId: string;
  /** List of affinity rules. Scheduler will attempt to allocate instances according to order of rules. */
  hostAffinityRules: PlacementPolicy_HostAffinityRule[];
}

/** Affinitity definition */
export interface PlacementPolicy_HostAffinityRule {
  $type: "yandex.cloud.compute.v1.PlacementPolicy.HostAffinityRule";
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

const baseInstance: object = {
  $type: "yandex.cloud.compute.v1.Instance",
  id: "",
  folderId: "",
  name: "",
  description: "",
  zoneId: "",
  platformId: "",
  status: 0,
  fqdn: "",
  serviceAccountId: "",
};

export const Instance = {
  $type: "yandex.cloud.compute.v1.Instance" as const,

  encode(
    message: Instance,
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
      Instance_LabelsEntry.encode(
        {
          $type: "yandex.cloud.compute.v1.Instance.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.zoneId !== "") {
      writer.uint32(58).string(message.zoneId);
    }
    if (message.platformId !== "") {
      writer.uint32(66).string(message.platformId);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(74).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(80).int32(message.status);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      Instance_MetadataEntry.encode(
        {
          $type: "yandex.cloud.compute.v1.Instance.MetadataEntry",
          key: key as any,
          value,
        },
        writer.uint32(90).fork()
      ).ldelim();
    });
    if (message.bootDisk !== undefined) {
      AttachedDisk.encode(message.bootDisk, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.secondaryDisks) {
      AttachedDisk.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.filesystems) {
      AttachedFilesystem.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    for (const v of message.networkInterfaces) {
      NetworkInterface.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.fqdn !== "") {
      writer.uint32(130).string(message.fqdn);
    }
    if (message.schedulingPolicy !== undefined) {
      SchedulingPolicy.encode(
        message.schedulingPolicy,
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(146).string(message.serviceAccountId);
    }
    if (message.networkSettings !== undefined) {
      NetworkSettings.encode(
        message.networkSettings,
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.placementPolicy !== undefined) {
      PlacementPolicy.encode(
        message.placementPolicy,
        writer.uint32(162).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Instance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInstance } as Instance;
    message.labels = {};
    message.metadata = {};
    message.secondaryDisks = [];
    message.filesystems = [];
    message.networkInterfaces = [];
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
          const entry6 = Instance_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.zoneId = reader.string();
          break;
        case 8:
          message.platformId = reader.string();
          break;
        case 9:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 10:
          message.status = reader.int32() as any;
          break;
        case 11:
          const entry11 = Instance_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry11.value !== undefined) {
            message.metadata[entry11.key] = entry11.value;
          }
          break;
        case 12:
          message.bootDisk = AttachedDisk.decode(reader, reader.uint32());
          break;
        case 13:
          message.secondaryDisks.push(
            AttachedDisk.decode(reader, reader.uint32())
          );
          break;
        case 21:
          message.filesystems.push(
            AttachedFilesystem.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.networkInterfaces.push(
            NetworkInterface.decode(reader, reader.uint32())
          );
          break;
        case 16:
          message.fqdn = reader.string();
          break;
        case 17:
          message.schedulingPolicy = SchedulingPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 18:
          message.serviceAccountId = reader.string();
          break;
        case 19:
          message.networkSettings = NetworkSettings.decode(
            reader,
            reader.uint32()
          );
          break;
        case 20:
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

  fromJSON(object: any): Instance {
    const message = { ...baseInstance } as Instance;
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
    message.zoneId =
      object.zoneId !== undefined && object.zoneId !== null
        ? String(object.zoneId)
        : "";
    message.platformId =
      object.platformId !== undefined && object.platformId !== null
        ? String(object.platformId)
        : "";
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? instance_StatusFromJSON(object.status)
        : 0;
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.bootDisk =
      object.bootDisk !== undefined && object.bootDisk !== null
        ? AttachedDisk.fromJSON(object.bootDisk)
        : undefined;
    message.secondaryDisks = (object.secondaryDisks ?? []).map((e: any) =>
      AttachedDisk.fromJSON(e)
    );
    message.filesystems = (object.filesystems ?? []).map((e: any) =>
      AttachedFilesystem.fromJSON(e)
    );
    message.networkInterfaces = (object.networkInterfaces ?? []).map((e: any) =>
      NetworkInterface.fromJSON(e)
    );
    message.fqdn =
      object.fqdn !== undefined && object.fqdn !== null
        ? String(object.fqdn)
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
    message.placementPolicy =
      object.placementPolicy !== undefined && object.placementPolicy !== null
        ? PlacementPolicy.fromJSON(object.placementPolicy)
        : undefined;
    return message;
  },

  toJSON(message: Instance): unknown {
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
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.platformId !== undefined && (obj.platformId = message.platformId);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    message.status !== undefined &&
      (obj.status = instance_StatusToJSON(message.status));
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    message.bootDisk !== undefined &&
      (obj.bootDisk = message.bootDisk
        ? AttachedDisk.toJSON(message.bootDisk)
        : undefined);
    if (message.secondaryDisks) {
      obj.secondaryDisks = message.secondaryDisks.map((e) =>
        e ? AttachedDisk.toJSON(e) : undefined
      );
    } else {
      obj.secondaryDisks = [];
    }
    if (message.filesystems) {
      obj.filesystems = message.filesystems.map((e) =>
        e ? AttachedFilesystem.toJSON(e) : undefined
      );
    } else {
      obj.filesystems = [];
    }
    if (message.networkInterfaces) {
      obj.networkInterfaces = message.networkInterfaces.map((e) =>
        e ? NetworkInterface.toJSON(e) : undefined
      );
    } else {
      obj.networkInterfaces = [];
    }
    message.fqdn !== undefined && (obj.fqdn = message.fqdn);
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
    message.placementPolicy !== undefined &&
      (obj.placementPolicy = message.placementPolicy
        ? PlacementPolicy.toJSON(message.placementPolicy)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Instance>, I>>(object: I): Instance {
    const message = { ...baseInstance } as Instance;
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
    message.zoneId = object.zoneId ?? "";
    message.platformId = object.platformId ?? "";
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    message.status = object.status ?? 0;
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.bootDisk =
      object.bootDisk !== undefined && object.bootDisk !== null
        ? AttachedDisk.fromPartial(object.bootDisk)
        : undefined;
    message.secondaryDisks =
      object.secondaryDisks?.map((e) => AttachedDisk.fromPartial(e)) || [];
    message.filesystems =
      object.filesystems?.map((e) => AttachedFilesystem.fromPartial(e)) || [];
    message.networkInterfaces =
      object.networkInterfaces?.map((e) => NetworkInterface.fromPartial(e)) ||
      [];
    message.fqdn = object.fqdn ?? "";
    message.schedulingPolicy =
      object.schedulingPolicy !== undefined && object.schedulingPolicy !== null
        ? SchedulingPolicy.fromPartial(object.schedulingPolicy)
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
    return message;
  },
};

messageTypeRegistry.set(Instance.$type, Instance);

const baseInstance_LabelsEntry: object = {
  $type: "yandex.cloud.compute.v1.Instance.LabelsEntry",
  key: "",
  value: "",
};

export const Instance_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.Instance.LabelsEntry" as const,

  encode(
    message: Instance_LabelsEntry,
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
  ): Instance_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInstance_LabelsEntry } as Instance_LabelsEntry;
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

  fromJSON(object: any): Instance_LabelsEntry {
    const message = { ...baseInstance_LabelsEntry } as Instance_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Instance_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Instance_LabelsEntry>, I>>(
    object: I
  ): Instance_LabelsEntry {
    const message = { ...baseInstance_LabelsEntry } as Instance_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Instance_LabelsEntry.$type, Instance_LabelsEntry);

const baseInstance_MetadataEntry: object = {
  $type: "yandex.cloud.compute.v1.Instance.MetadataEntry",
  key: "",
  value: "",
};

export const Instance_MetadataEntry = {
  $type: "yandex.cloud.compute.v1.Instance.MetadataEntry" as const,

  encode(
    message: Instance_MetadataEntry,
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
  ): Instance_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInstance_MetadataEntry } as Instance_MetadataEntry;
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

  fromJSON(object: any): Instance_MetadataEntry {
    const message = { ...baseInstance_MetadataEntry } as Instance_MetadataEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Instance_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Instance_MetadataEntry>, I>>(
    object: I
  ): Instance_MetadataEntry {
    const message = { ...baseInstance_MetadataEntry } as Instance_MetadataEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Instance_MetadataEntry.$type, Instance_MetadataEntry);

const baseResources: object = {
  $type: "yandex.cloud.compute.v1.Resources",
  memory: 0,
  cores: 0,
  coreFraction: 0,
  gpus: 0,
};

export const Resources = {
  $type: "yandex.cloud.compute.v1.Resources" as const,

  encode(
    message: Resources,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Resources {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResources } as Resources;
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

  fromJSON(object: any): Resources {
    const message = { ...baseResources } as Resources;
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

  toJSON(message: Resources): unknown {
    const obj: any = {};
    message.memory !== undefined && (obj.memory = Math.round(message.memory));
    message.cores !== undefined && (obj.cores = Math.round(message.cores));
    message.coreFraction !== undefined &&
      (obj.coreFraction = Math.round(message.coreFraction));
    message.gpus !== undefined && (obj.gpus = Math.round(message.gpus));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Resources>, I>>(
    object: I
  ): Resources {
    const message = { ...baseResources } as Resources;
    message.memory = object.memory ?? 0;
    message.cores = object.cores ?? 0;
    message.coreFraction = object.coreFraction ?? 0;
    message.gpus = object.gpus ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Resources.$type, Resources);

const baseAttachedDisk: object = {
  $type: "yandex.cloud.compute.v1.AttachedDisk",
  mode: 0,
  deviceName: "",
  autoDelete: false,
  diskId: "",
};

export const AttachedDisk = {
  $type: "yandex.cloud.compute.v1.AttachedDisk" as const,

  encode(
    message: AttachedDisk,
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
    if (message.diskId !== "") {
      writer.uint32(34).string(message.diskId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttachedDisk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAttachedDisk } as AttachedDisk;
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
          message.diskId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AttachedDisk {
    const message = { ...baseAttachedDisk } as AttachedDisk;
    message.mode =
      object.mode !== undefined && object.mode !== null
        ? attachedDisk_ModeFromJSON(object.mode)
        : 0;
    message.deviceName =
      object.deviceName !== undefined && object.deviceName !== null
        ? String(object.deviceName)
        : "";
    message.autoDelete =
      object.autoDelete !== undefined && object.autoDelete !== null
        ? Boolean(object.autoDelete)
        : false;
    message.diskId =
      object.diskId !== undefined && object.diskId !== null
        ? String(object.diskId)
        : "";
    return message;
  },

  toJSON(message: AttachedDisk): unknown {
    const obj: any = {};
    message.mode !== undefined &&
      (obj.mode = attachedDisk_ModeToJSON(message.mode));
    message.deviceName !== undefined && (obj.deviceName = message.deviceName);
    message.autoDelete !== undefined && (obj.autoDelete = message.autoDelete);
    message.diskId !== undefined && (obj.diskId = message.diskId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AttachedDisk>, I>>(
    object: I
  ): AttachedDisk {
    const message = { ...baseAttachedDisk } as AttachedDisk;
    message.mode = object.mode ?? 0;
    message.deviceName = object.deviceName ?? "";
    message.autoDelete = object.autoDelete ?? false;
    message.diskId = object.diskId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AttachedDisk.$type, AttachedDisk);

const baseAttachedFilesystem: object = {
  $type: "yandex.cloud.compute.v1.AttachedFilesystem",
  mode: 0,
  deviceName: "",
  filesystemId: "",
};

export const AttachedFilesystem = {
  $type: "yandex.cloud.compute.v1.AttachedFilesystem" as const,

  encode(
    message: AttachedFilesystem,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AttachedFilesystem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAttachedFilesystem } as AttachedFilesystem;
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

  fromJSON(object: any): AttachedFilesystem {
    const message = { ...baseAttachedFilesystem } as AttachedFilesystem;
    message.mode =
      object.mode !== undefined && object.mode !== null
        ? attachedFilesystem_ModeFromJSON(object.mode)
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

  toJSON(message: AttachedFilesystem): unknown {
    const obj: any = {};
    message.mode !== undefined &&
      (obj.mode = attachedFilesystem_ModeToJSON(message.mode));
    message.deviceName !== undefined && (obj.deviceName = message.deviceName);
    message.filesystemId !== undefined &&
      (obj.filesystemId = message.filesystemId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AttachedFilesystem>, I>>(
    object: I
  ): AttachedFilesystem {
    const message = { ...baseAttachedFilesystem } as AttachedFilesystem;
    message.mode = object.mode ?? 0;
    message.deviceName = object.deviceName ?? "";
    message.filesystemId = object.filesystemId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AttachedFilesystem.$type, AttachedFilesystem);

const baseNetworkInterface: object = {
  $type: "yandex.cloud.compute.v1.NetworkInterface",
  index: "",
  macAddress: "",
  subnetId: "",
  securityGroupIds: "",
};

export const NetworkInterface = {
  $type: "yandex.cloud.compute.v1.NetworkInterface" as const,

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
    for (const v of message.securityGroupIds) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkInterface {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNetworkInterface } as NetworkInterface;
    message.securityGroupIds = [];
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
    message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) =>
      String(e)
    );
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
    if (message.securityGroupIds) {
      obj.securityGroupIds = message.securityGroupIds.map((e) => e);
    } else {
      obj.securityGroupIds = [];
    }
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
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(NetworkInterface.$type, NetworkInterface);

const basePrimaryAddress: object = {
  $type: "yandex.cloud.compute.v1.PrimaryAddress",
  address: "",
};

export const PrimaryAddress = {
  $type: "yandex.cloud.compute.v1.PrimaryAddress" as const,

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
  $type: "yandex.cloud.compute.v1.OneToOneNat",
  address: "",
  ipVersion: 0,
};

export const OneToOneNat = {
  $type: "yandex.cloud.compute.v1.OneToOneNat" as const,

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
  $type: "yandex.cloud.compute.v1.DnsRecord",
  fqdn: "",
  dnsZoneId: "",
  ttl: 0,
  ptr: false,
};

export const DnsRecord = {
  $type: "yandex.cloud.compute.v1.DnsRecord" as const,

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

const baseSchedulingPolicy: object = {
  $type: "yandex.cloud.compute.v1.SchedulingPolicy",
  preemptible: false,
};

export const SchedulingPolicy = {
  $type: "yandex.cloud.compute.v1.SchedulingPolicy" as const,

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
  $type: "yandex.cloud.compute.v1.NetworkSettings",
  type: 0,
};

export const NetworkSettings = {
  $type: "yandex.cloud.compute.v1.NetworkSettings" as const,

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

const basePlacementPolicy: object = {
  $type: "yandex.cloud.compute.v1.PlacementPolicy",
  placementGroupId: "",
};

export const PlacementPolicy = {
  $type: "yandex.cloud.compute.v1.PlacementPolicy" as const,

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
  $type: "yandex.cloud.compute.v1.PlacementPolicy.HostAffinityRule",
  key: "",
  op: 0,
  values: "",
};

export const PlacementPolicy_HostAffinityRule = {
  $type: "yandex.cloud.compute.v1.PlacementPolicy.HostAffinityRule" as const,

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
