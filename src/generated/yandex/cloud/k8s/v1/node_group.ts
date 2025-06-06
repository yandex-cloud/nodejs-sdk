/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { NodeTemplate, Taint } from '../../../../yandex/cloud/k8s/v1/node';
import { VersionInfo } from '../../../../yandex/cloud/k8s/v1/version';
import { MaintenanceWindow } from '../../../../yandex/cloud/k8s/v1/maintenance';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.k8s.v1';

export interface NodeGroup {
    /** ID of the node group. */
    id: string;
    /** ID of the cluster that the node group belongs to. */
    clusterId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /**
     * Name of the node group.
     * The name is unique within the folder.
     */
    name: string;
    /** Description of the node group. 0-256 characters long. */
    description: string;
    /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
    labels: { [key: string]: string };
    /** Status of the node group. */
    status: NodeGroup_Status;
    /** Node template that specifies parameters of the compute instances for the node group. */
    nodeTemplate?: NodeTemplate;
    /** Scale policy of the node group.  For more information, see [Scaling policy](/docs/compute/concepts/instance-groups/policies#scale-policy). */
    scalePolicy?: ScalePolicy;
    /** Allocation policy by which resources for node group are allocated to zones and regions. */
    allocationPolicy?: NodeGroupAllocationPolicy;
    /** Deploy policy according to which the updates are rolled out. */
    deployPolicy?: DeployPolicy;
    /** ID of the managed instance group associated with this node group. */
    instanceGroupId: string;
    /**
     * Version of Kubernetes components that runs on the nodes.
     * Deprecated. Use version_info.current_version.
     */
    nodeVersion: string;
    /** Detailed information about the Kubernetes version that is running on the node. */
    versionInfo?: VersionInfo;
    /** Maintenance policy of the node group. */
    maintenancePolicy?: NodeGroupMaintenancePolicy;
    /** Support for unsafe sysctl parameters. For more details see [documentation](https://kubernetes.io/docs/tasks/administer-cluster/sysctl-cluster/). */
    allowedUnsafeSysctls: string[];
    /** Taints that are applied to the nodes of the node group at creation time. */
    nodeTaints: Taint[];
    /** Labels that are assigned to the nodes of the node group at creation time. */
    nodeLabels: { [key: string]: string };
}

export enum NodeGroup_Status {
    STATUS_UNSPECIFIED = 0,
    /** PROVISIONING - Node group is waiting for resources to be allocated. */
    PROVISIONING = 1,
    /** RUNNING - Node group is running. */
    RUNNING = 2,
    /** RECONCILING - Node group is waiting for some work to be done, such as upgrading node software. */
    RECONCILING = 3,
    /** STOPPING - Node group is being stopped. */
    STOPPING = 4,
    /** STOPPED - Node group stopped. */
    STOPPED = 5,
    /** DELETING - Node group is being deleted. */
    DELETING = 6,
    /** STARTING - Node group is being started. */
    STARTING = 7,
    UNRECOGNIZED = -1,
}

export function nodeGroup_StatusFromJSON(object: any): NodeGroup_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return NodeGroup_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'PROVISIONING':
            return NodeGroup_Status.PROVISIONING;
        case 2:
        case 'RUNNING':
            return NodeGroup_Status.RUNNING;
        case 3:
        case 'RECONCILING':
            return NodeGroup_Status.RECONCILING;
        case 4:
        case 'STOPPING':
            return NodeGroup_Status.STOPPING;
        case 5:
        case 'STOPPED':
            return NodeGroup_Status.STOPPED;
        case 6:
        case 'DELETING':
            return NodeGroup_Status.DELETING;
        case 7:
        case 'STARTING':
            return NodeGroup_Status.STARTING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return NodeGroup_Status.UNRECOGNIZED;
    }
}

export function nodeGroup_StatusToJSON(object: NodeGroup_Status): string {
    switch (object) {
        case NodeGroup_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case NodeGroup_Status.PROVISIONING:
            return 'PROVISIONING';
        case NodeGroup_Status.RUNNING:
            return 'RUNNING';
        case NodeGroup_Status.RECONCILING:
            return 'RECONCILING';
        case NodeGroup_Status.STOPPING:
            return 'STOPPING';
        case NodeGroup_Status.STOPPED:
            return 'STOPPED';
        case NodeGroup_Status.DELETING:
            return 'DELETING';
        case NodeGroup_Status.STARTING:
            return 'STARTING';
        default:
            return 'UNKNOWN';
    }
}

export interface NodeGroup_LabelsEntry {
    key: string;
    value: string;
}

export interface NodeGroup_NodeLabelsEntry {
    key: string;
    value: string;
}

export interface ScalePolicy {
    /** Fixed scale policy of the node group. */
    fixedScale?: ScalePolicy_FixedScale | undefined;
    /** Auto scale policy of the node group. */
    autoScale?: ScalePolicy_AutoScale | undefined;
}

export interface ScalePolicy_FixedScale {
    /** Number of nodes in the node group. */
    size: number;
}

export interface ScalePolicy_AutoScale {
    /** Minimum number of nodes in the node group. */
    minSize: number;
    /** Maximum number of nodes in the node group. */
    maxSize: number;
    /** Initial number of nodes in the node group. */
    initialSize: number;
}

export interface NodeGroupAllocationPolicy {
    /** List of locations where resources for the node group will be allocated. */
    locations: NodeGroupLocation[];
}

export interface NodeGroupLocation {
    /** ID of the availability zone where the nodes may reside. */
    zoneId: string;
    /** ID of the subnet. If a network chosen for the Kubernetes cluster has only one subnet in the specified zone, subnet ID may be omitted. */
    subnetId: string;
}

export interface NodeGroupMaintenancePolicy {
    /**
     * If set to true, automatic updates are installed in the specified period of time with no interaction from the user.
     * If set to false, automatic upgrades are disabled.
     */
    autoUpgrade: boolean;
    /** If set to true, automatic repairs are enabled. Default value is false. */
    autoRepair: boolean;
    /**
     * Maintenance window settings. Update will start at the specified time and last no more than the specified duration.
     * The time is set in UTC.
     */
    maintenanceWindow?: MaintenanceWindow;
}

export interface DeployPolicy {
    /**
     * The maximum number of running instances that can be taken offline (i.e.,
     * stopped or deleted) at the same time during the update process.
     * If [max_expansion] is not specified or set to zero, [max_unavailable] must
     * be set to a non-zero value.
     */
    maxUnavailable: number;
    /**
     * The maximum number of instances that can be temporarily allocated above
     * the group's target size during the update process.
     * If [max_unavailable] is not specified or set to zero, [max_expansion] must
     * be set to a non-zero value.
     */
    maxExpansion: number;
}

const baseNodeGroup: object = {
    id: '',
    clusterId: '',
    name: '',
    description: '',
    status: 0,
    instanceGroupId: '',
    nodeVersion: '',
    allowedUnsafeSysctls: '',
};

export const NodeGroup = {
    encode(message: NodeGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            NodeGroup_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.nodeTemplate !== undefined) {
            NodeTemplate.encode(message.nodeTemplate, writer.uint32(66).fork()).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            ScalePolicy.encode(message.scalePolicy, writer.uint32(74).fork()).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            NodeGroupAllocationPolicy.encode(
                message.allocationPolicy,
                writer.uint32(82).fork(),
            ).ldelim();
        }
        if (message.deployPolicy !== undefined) {
            DeployPolicy.encode(message.deployPolicy, writer.uint32(146).fork()).ldelim();
        }
        if (message.instanceGroupId !== '') {
            writer.uint32(90).string(message.instanceGroupId);
        }
        if (message.nodeVersion !== '') {
            writer.uint32(98).string(message.nodeVersion);
        }
        if (message.versionInfo !== undefined) {
            VersionInfo.encode(message.versionInfo, writer.uint32(106).fork()).ldelim();
        }
        if (message.maintenancePolicy !== undefined) {
            NodeGroupMaintenancePolicy.encode(
                message.maintenancePolicy,
                writer.uint32(114).fork(),
            ).ldelim();
        }
        for (const v of message.allowedUnsafeSysctls) {
            writer.uint32(122).string(v!);
        }
        for (const v of message.nodeTaints) {
            Taint.encode(v!, writer.uint32(130).fork()).ldelim();
        }
        Object.entries(message.nodeLabels).forEach(([key, value]) => {
            NodeGroup_NodeLabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(138).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): NodeGroup {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNodeGroup } as NodeGroup;
        message.labels = {};
        message.allowedUnsafeSysctls = [];
        message.nodeTaints = [];
        message.nodeLabels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = NodeGroup_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.status = reader.int32() as any;
                    break;
                case 8:
                    message.nodeTemplate = NodeTemplate.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.allocationPolicy = NodeGroupAllocationPolicy.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 18:
                    message.deployPolicy = DeployPolicy.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.instanceGroupId = reader.string();
                    break;
                case 12:
                    message.nodeVersion = reader.string();
                    break;
                case 13:
                    message.versionInfo = VersionInfo.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.maintenancePolicy = NodeGroupMaintenancePolicy.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 15:
                    message.allowedUnsafeSysctls.push(reader.string());
                    break;
                case 16:
                    message.nodeTaints.push(Taint.decode(reader, reader.uint32()));
                    break;
                case 17:
                    const entry17 = NodeGroup_NodeLabelsEntry.decode(reader, reader.uint32());
                    if (entry17.value !== undefined) {
                        message.nodeLabels[entry17.key] = entry17.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): NodeGroup {
        const message = { ...baseNodeGroup } as NodeGroup;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.status =
            object.status !== undefined && object.status !== null
                ? nodeGroup_StatusFromJSON(object.status)
                : 0;
        message.nodeTemplate =
            object.nodeTemplate !== undefined && object.nodeTemplate !== null
                ? NodeTemplate.fromJSON(object.nodeTemplate)
                : undefined;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? ScalePolicy.fromJSON(object.scalePolicy)
                : undefined;
        message.allocationPolicy =
            object.allocationPolicy !== undefined && object.allocationPolicy !== null
                ? NodeGroupAllocationPolicy.fromJSON(object.allocationPolicy)
                : undefined;
        message.deployPolicy =
            object.deployPolicy !== undefined && object.deployPolicy !== null
                ? DeployPolicy.fromJSON(object.deployPolicy)
                : undefined;
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
                : '';
        message.nodeVersion =
            object.nodeVersion !== undefined && object.nodeVersion !== null
                ? String(object.nodeVersion)
                : '';
        message.versionInfo =
            object.versionInfo !== undefined && object.versionInfo !== null
                ? VersionInfo.fromJSON(object.versionInfo)
                : undefined;
        message.maintenancePolicy =
            object.maintenancePolicy !== undefined && object.maintenancePolicy !== null
                ? NodeGroupMaintenancePolicy.fromJSON(object.maintenancePolicy)
                : undefined;
        message.allowedUnsafeSysctls = (object.allowedUnsafeSysctls ?? []).map((e: any) =>
            String(e),
        );
        message.nodeTaints = (object.nodeTaints ?? []).map((e: any) => Taint.fromJSON(e));
        message.nodeLabels = Object.entries(object.nodeLabels ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },

    toJSON(message: NodeGroup): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.status !== undefined && (obj.status = nodeGroup_StatusToJSON(message.status));
        message.nodeTemplate !== undefined &&
            (obj.nodeTemplate = message.nodeTemplate
                ? NodeTemplate.toJSON(message.nodeTemplate)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? NodeGroupAllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        message.deployPolicy !== undefined &&
            (obj.deployPolicy = message.deployPolicy
                ? DeployPolicy.toJSON(message.deployPolicy)
                : undefined);
        message.instanceGroupId !== undefined && (obj.instanceGroupId = message.instanceGroupId);
        message.nodeVersion !== undefined && (obj.nodeVersion = message.nodeVersion);
        message.versionInfo !== undefined &&
            (obj.versionInfo = message.versionInfo
                ? VersionInfo.toJSON(message.versionInfo)
                : undefined);
        message.maintenancePolicy !== undefined &&
            (obj.maintenancePolicy = message.maintenancePolicy
                ? NodeGroupMaintenancePolicy.toJSON(message.maintenancePolicy)
                : undefined);
        if (message.allowedUnsafeSysctls) {
            obj.allowedUnsafeSysctls = message.allowedUnsafeSysctls.map((e) => e);
        } else {
            obj.allowedUnsafeSysctls = [];
        }
        if (message.nodeTaints) {
            obj.nodeTaints = message.nodeTaints.map((e) => (e ? Taint.toJSON(e) : undefined));
        } else {
            obj.nodeTaints = [];
        }
        obj.nodeLabels = {};
        if (message.nodeLabels) {
            Object.entries(message.nodeLabels).forEach(([k, v]) => {
                obj.nodeLabels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<NodeGroup>, I>>(object: I): NodeGroup {
        const message = { ...baseNodeGroup } as NodeGroup;
        message.id = object.id ?? '';
        message.clusterId = object.clusterId ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.status = object.status ?? 0;
        message.nodeTemplate =
            object.nodeTemplate !== undefined && object.nodeTemplate !== null
                ? NodeTemplate.fromPartial(object.nodeTemplate)
                : undefined;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? ScalePolicy.fromPartial(object.scalePolicy)
                : undefined;
        message.allocationPolicy =
            object.allocationPolicy !== undefined && object.allocationPolicy !== null
                ? NodeGroupAllocationPolicy.fromPartial(object.allocationPolicy)
                : undefined;
        message.deployPolicy =
            object.deployPolicy !== undefined && object.deployPolicy !== null
                ? DeployPolicy.fromPartial(object.deployPolicy)
                : undefined;
        message.instanceGroupId = object.instanceGroupId ?? '';
        message.nodeVersion = object.nodeVersion ?? '';
        message.versionInfo =
            object.versionInfo !== undefined && object.versionInfo !== null
                ? VersionInfo.fromPartial(object.versionInfo)
                : undefined;
        message.maintenancePolicy =
            object.maintenancePolicy !== undefined && object.maintenancePolicy !== null
                ? NodeGroupMaintenancePolicy.fromPartial(object.maintenancePolicy)
                : undefined;
        message.allowedUnsafeSysctls = object.allowedUnsafeSysctls?.map((e) => e) || [];
        message.nodeTaints = object.nodeTaints?.map((e) => Taint.fromPartial(e)) || [];
        message.nodeLabels = Object.entries(object.nodeLabels ?? {}).reduce<{
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

const baseNodeGroup_LabelsEntry: object = { key: '', value: '' };

export const NodeGroup_LabelsEntry = {
    encode(message: NodeGroup_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): NodeGroup_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNodeGroup_LabelsEntry } as NodeGroup_LabelsEntry;
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

    fromJSON(object: any): NodeGroup_LabelsEntry {
        const message = { ...baseNodeGroup_LabelsEntry } as NodeGroup_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: NodeGroup_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<NodeGroup_LabelsEntry>, I>>(
        object: I,
    ): NodeGroup_LabelsEntry {
        const message = { ...baseNodeGroup_LabelsEntry } as NodeGroup_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseNodeGroup_NodeLabelsEntry: object = { key: '', value: '' };

export const NodeGroup_NodeLabelsEntry = {
    encode(
        message: NodeGroup_NodeLabelsEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): NodeGroup_NodeLabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNodeGroup_NodeLabelsEntry } as NodeGroup_NodeLabelsEntry;
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

    fromJSON(object: any): NodeGroup_NodeLabelsEntry {
        const message = { ...baseNodeGroup_NodeLabelsEntry } as NodeGroup_NodeLabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: NodeGroup_NodeLabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<NodeGroup_NodeLabelsEntry>, I>>(
        object: I,
    ): NodeGroup_NodeLabelsEntry {
        const message = { ...baseNodeGroup_NodeLabelsEntry } as NodeGroup_NodeLabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseScalePolicy: object = {};

export const ScalePolicy = {
    encode(message: ScalePolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.fixedScale !== undefined) {
            ScalePolicy_FixedScale.encode(message.fixedScale, writer.uint32(10).fork()).ldelim();
        }
        if (message.autoScale !== undefined) {
            ScalePolicy_AutoScale.encode(message.autoScale, writer.uint32(18).fork()).ldelim();
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
                    message.fixedScale = ScalePolicy_FixedScale.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.autoScale = ScalePolicy_AutoScale.decode(reader, reader.uint32());
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
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ScalePolicy>, I>>(object: I): ScalePolicy {
        const message = { ...baseScalePolicy } as ScalePolicy;
        message.fixedScale =
            object.fixedScale !== undefined && object.fixedScale !== null
                ? ScalePolicy_FixedScale.fromPartial(object.fixedScale)
                : undefined;
        message.autoScale =
            object.autoScale !== undefined && object.autoScale !== null
                ? ScalePolicy_AutoScale.fromPartial(object.autoScale)
                : undefined;
        return message;
    },
};

const baseScalePolicy_FixedScale: object = { size: 0 };

export const ScalePolicy_FixedScale = {
    encode(message: ScalePolicy_FixedScale, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.size !== 0) {
            writer.uint32(8).int64(message.size);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ScalePolicy_FixedScale {
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
        message.size = object.size !== undefined && object.size !== null ? Number(object.size) : 0;
        return message;
    },

    toJSON(message: ScalePolicy_FixedScale): unknown {
        const obj: any = {};
        message.size !== undefined && (obj.size = Math.round(message.size));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ScalePolicy_FixedScale>, I>>(
        object: I,
    ): ScalePolicy_FixedScale {
        const message = { ...baseScalePolicy_FixedScale } as ScalePolicy_FixedScale;
        message.size = object.size ?? 0;
        return message;
    },
};

const baseScalePolicy_AutoScale: object = { minSize: 0, maxSize: 0, initialSize: 0 };

export const ScalePolicy_AutoScale = {
    encode(message: ScalePolicy_AutoScale, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.minSize !== 0) {
            writer.uint32(8).int64(message.minSize);
        }
        if (message.maxSize !== 0) {
            writer.uint32(16).int64(message.maxSize);
        }
        if (message.initialSize !== 0) {
            writer.uint32(24).int64(message.initialSize);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ScalePolicy_AutoScale {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScalePolicy_AutoScale } as ScalePolicy_AutoScale;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minSize = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.maxSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.initialSize = longToNumber(reader.int64() as Long);
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
        message.minSize =
            object.minSize !== undefined && object.minSize !== null ? Number(object.minSize) : 0;
        message.maxSize =
            object.maxSize !== undefined && object.maxSize !== null ? Number(object.maxSize) : 0;
        message.initialSize =
            object.initialSize !== undefined && object.initialSize !== null
                ? Number(object.initialSize)
                : 0;
        return message;
    },

    toJSON(message: ScalePolicy_AutoScale): unknown {
        const obj: any = {};
        message.minSize !== undefined && (obj.minSize = Math.round(message.minSize));
        message.maxSize !== undefined && (obj.maxSize = Math.round(message.maxSize));
        message.initialSize !== undefined && (obj.initialSize = Math.round(message.initialSize));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ScalePolicy_AutoScale>, I>>(
        object: I,
    ): ScalePolicy_AutoScale {
        const message = { ...baseScalePolicy_AutoScale } as ScalePolicy_AutoScale;
        message.minSize = object.minSize ?? 0;
        message.maxSize = object.maxSize ?? 0;
        message.initialSize = object.initialSize ?? 0;
        return message;
    },
};

const baseNodeGroupAllocationPolicy: object = {};

export const NodeGroupAllocationPolicy = {
    encode(
        message: NodeGroupAllocationPolicy,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.locations) {
            NodeGroupLocation.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): NodeGroupAllocationPolicy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNodeGroupAllocationPolicy } as NodeGroupAllocationPolicy;
        message.locations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locations.push(NodeGroupLocation.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): NodeGroupAllocationPolicy {
        const message = { ...baseNodeGroupAllocationPolicy } as NodeGroupAllocationPolicy;
        message.locations = (object.locations ?? []).map((e: any) => NodeGroupLocation.fromJSON(e));
        return message;
    },

    toJSON(message: NodeGroupAllocationPolicy): unknown {
        const obj: any = {};
        if (message.locations) {
            obj.locations = message.locations.map((e) =>
                e ? NodeGroupLocation.toJSON(e) : undefined,
            );
        } else {
            obj.locations = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<NodeGroupAllocationPolicy>, I>>(
        object: I,
    ): NodeGroupAllocationPolicy {
        const message = { ...baseNodeGroupAllocationPolicy } as NodeGroupAllocationPolicy;
        message.locations = object.locations?.map((e) => NodeGroupLocation.fromPartial(e)) || [];
        return message;
    },
};

const baseNodeGroupLocation: object = { zoneId: '', subnetId: '' };

export const NodeGroupLocation = {
    encode(message: NodeGroupLocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.zoneId !== '') {
            writer.uint32(10).string(message.zoneId);
        }
        if (message.subnetId !== '') {
            writer.uint32(18).string(message.subnetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): NodeGroupLocation {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNodeGroupLocation } as NodeGroupLocation;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zoneId = reader.string();
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

    fromJSON(object: any): NodeGroupLocation {
        const message = { ...baseNodeGroupLocation } as NodeGroupLocation;
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null ? String(object.zoneId) : '';
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : '';
        return message;
    },

    toJSON(message: NodeGroupLocation): unknown {
        const obj: any = {};
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<NodeGroupLocation>, I>>(object: I): NodeGroupLocation {
        const message = { ...baseNodeGroupLocation } as NodeGroupLocation;
        message.zoneId = object.zoneId ?? '';
        message.subnetId = object.subnetId ?? '';
        return message;
    },
};

const baseNodeGroupMaintenancePolicy: object = { autoUpgrade: false, autoRepair: false };

export const NodeGroupMaintenancePolicy = {
    encode(
        message: NodeGroupMaintenancePolicy,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.autoUpgrade === true) {
            writer.uint32(8).bool(message.autoUpgrade);
        }
        if (message.autoRepair === true) {
            writer.uint32(16).bool(message.autoRepair);
        }
        if (message.maintenanceWindow !== undefined) {
            MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): NodeGroupMaintenancePolicy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNodeGroupMaintenancePolicy } as NodeGroupMaintenancePolicy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.autoUpgrade = reader.bool();
                    break;
                case 2:
                    message.autoRepair = reader.bool();
                    break;
                case 3:
                    message.maintenanceWindow = MaintenanceWindow.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): NodeGroupMaintenancePolicy {
        const message = { ...baseNodeGroupMaintenancePolicy } as NodeGroupMaintenancePolicy;
        message.autoUpgrade =
            object.autoUpgrade !== undefined && object.autoUpgrade !== null
                ? Boolean(object.autoUpgrade)
                : false;
        message.autoRepair =
            object.autoRepair !== undefined && object.autoRepair !== null
                ? Boolean(object.autoRepair)
                : false;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined && object.maintenanceWindow !== null
                ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
                : undefined;
        return message;
    },

    toJSON(message: NodeGroupMaintenancePolicy): unknown {
        const obj: any = {};
        message.autoUpgrade !== undefined && (obj.autoUpgrade = message.autoUpgrade);
        message.autoRepair !== undefined && (obj.autoRepair = message.autoRepair);
        message.maintenanceWindow !== undefined &&
            (obj.maintenanceWindow = message.maintenanceWindow
                ? MaintenanceWindow.toJSON(message.maintenanceWindow)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<NodeGroupMaintenancePolicy>, I>>(
        object: I,
    ): NodeGroupMaintenancePolicy {
        const message = { ...baseNodeGroupMaintenancePolicy } as NodeGroupMaintenancePolicy;
        message.autoUpgrade = object.autoUpgrade ?? false;
        message.autoRepair = object.autoRepair ?? false;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined && object.maintenanceWindow !== null
                ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
                : undefined;
        return message;
    },
};

const baseDeployPolicy: object = { maxUnavailable: 0, maxExpansion: 0 };

export const DeployPolicy = {
    encode(message: DeployPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.maxUnavailable !== 0) {
            writer.uint32(8).int64(message.maxUnavailable);
        }
        if (message.maxExpansion !== 0) {
            writer.uint32(16).int64(message.maxExpansion);
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
                    message.maxExpansion = longToNumber(reader.int64() as Long);
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
        message.maxExpansion =
            object.maxExpansion !== undefined && object.maxExpansion !== null
                ? Number(object.maxExpansion)
                : 0;
        return message;
    },

    toJSON(message: DeployPolicy): unknown {
        const obj: any = {};
        message.maxUnavailable !== undefined &&
            (obj.maxUnavailable = Math.round(message.maxUnavailable));
        message.maxExpansion !== undefined && (obj.maxExpansion = Math.round(message.maxExpansion));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeployPolicy>, I>>(object: I): DeployPolicy {
        const message = { ...baseDeployPolicy } as DeployPolicy;
        message.maxUnavailable = object.maxUnavailable ?? 0;
        message.maxExpansion = object.maxExpansion ?? 0;
        return message;
    },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
