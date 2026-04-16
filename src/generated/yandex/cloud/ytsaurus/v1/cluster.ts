/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Duration } from '../../../../google/protobuf/duration';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.ytsaurus.v1';

export interface Cluster {
    /** ID of the cluster. Generated at creation time. */
    id: string;
    /** ID of the folder that the cluster belongs to. */
    folderId: string;
    /** ID of the availability zone where the cluster resides. */
    zoneId: string;
    /**
     * Name of the cluster.
     * The name is unique within the folder.
     */
    name: string;
    /** Description of the cluster. */
    description: string;
    /** Cluster labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** ID of the subnet where the cluster resides. */
    subnetId: string;
    /** Network interfaces security groups. */
    securityGroupIds: string[];
    /** Cluster specification. */
    spec?: ClusterSpec;
    /** Time when the cluster was created. */
    createdAt?: Date;
    /** User who created the cluster. */
    createdBy: string;
    /** Time when the cluster was last updated. */
    updatedAt?: Date;
    /** User who last updated the cluster. */
    updatedBy: string;
    /** CIDRs whitelist. */
    cidrBlocksWhitelist?: CidrBlocks;
    /** Status of the cluster. */
    status: Cluster_Status;
    /** Health of the cluster. */
    health: Cluster_Health;
    /** Endpoints of the cluster. */
    endpoints?: Cluster_Endpoints;
}

export enum Cluster_Status {
    /** STATUS_UNKNOWN - Unknown status. */
    STATUS_UNKNOWN = 0,
    /** CREATING - Cluster is being created. */
    CREATING = 1,
    /** RUNNING - Cluster is running. */
    RUNNING = 2,
    /** ERROR - Cluster encountered a problem and cannot operate. */
    ERROR = 3,
    /** STOPPING - Cluster is being stopped. */
    STOPPING = 4,
    /** STOPPED - Cluster stopped. */
    STOPPED = 5,
    /** STARTING - Cluster is being started. */
    STARTING = 6,
    /** UPDATING - Cluster is being updated. */
    UPDATING = 7,
    /** DELETING - Cluster is being deleted. */
    DELETING = 8,
    UNRECOGNIZED = -1,
}

export function cluster_StatusFromJSON(object: any): Cluster_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNKNOWN':
            return Cluster_Status.STATUS_UNKNOWN;
        case 1:
        case 'CREATING':
            return Cluster_Status.CREATING;
        case 2:
        case 'RUNNING':
            return Cluster_Status.RUNNING;
        case 3:
        case 'ERROR':
            return Cluster_Status.ERROR;
        case 4:
        case 'STOPPING':
            return Cluster_Status.STOPPING;
        case 5:
        case 'STOPPED':
            return Cluster_Status.STOPPED;
        case 6:
        case 'STARTING':
            return Cluster_Status.STARTING;
        case 7:
        case 'UPDATING':
            return Cluster_Status.UPDATING;
        case 8:
        case 'DELETING':
            return Cluster_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Cluster_Status.UNRECOGNIZED;
    }
}

export function cluster_StatusToJSON(object: Cluster_Status): string {
    switch (object) {
        case Cluster_Status.STATUS_UNKNOWN:
            return 'STATUS_UNKNOWN';
        case Cluster_Status.CREATING:
            return 'CREATING';
        case Cluster_Status.RUNNING:
            return 'RUNNING';
        case Cluster_Status.ERROR:
            return 'ERROR';
        case Cluster_Status.STOPPING:
            return 'STOPPING';
        case Cluster_Status.STOPPED:
            return 'STOPPED';
        case Cluster_Status.STARTING:
            return 'STARTING';
        case Cluster_Status.UPDATING:
            return 'UPDATING';
        case Cluster_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}

export enum Cluster_Health {
    /** HEALTH_UNKNOWN - Unknown health. */
    HEALTH_UNKNOWN = 0,
    /** ALIVE - Cluster is alive. */
    ALIVE = 1,
    /** DEAD - Cluster is dead. */
    DEAD = 2,
    /** DEGRADED - Cluster is degraded. */
    DEGRADED = 3,
    UNRECOGNIZED = -1,
}

export function cluster_HealthFromJSON(object: any): Cluster_Health {
    switch (object) {
        case 0:
        case 'HEALTH_UNKNOWN':
            return Cluster_Health.HEALTH_UNKNOWN;
        case 1:
        case 'ALIVE':
            return Cluster_Health.ALIVE;
        case 2:
        case 'DEAD':
            return Cluster_Health.DEAD;
        case 3:
        case 'DEGRADED':
            return Cluster_Health.DEGRADED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Cluster_Health.UNRECOGNIZED;
    }
}

export function cluster_HealthToJSON(object: Cluster_Health): string {
    switch (object) {
        case Cluster_Health.HEALTH_UNKNOWN:
            return 'HEALTH_UNKNOWN';
        case Cluster_Health.ALIVE:
            return 'ALIVE';
        case Cluster_Health.DEAD:
            return 'DEAD';
        case Cluster_Health.DEGRADED:
            return 'DEGRADED';
        default:
            return 'UNKNOWN';
    }
}

export interface Cluster_Endpoints {
    /** https://CID.ytsaurus.yandexcloud.net. */
    ui: string;
    /** https://proxy.CID.ytsaurus.yandexcloud.net. */
    externalHttpProxyBalancer: string;
    /** https://hp.CID.ytsaurus.mdb.yandexcloud.net:PORT. */
    internalHttpProxyAlias: string;
    /** rp.CID.ytsaurus.mdb.yandexcloud.net:PORT */
    internalRpcProxyAlias: string;
}

export interface Cluster_LabelsEntry {
    key: string;
    value: string;
}

export interface CidrBlocks {
    /** IPv4 CIDR blocks. */
    v4CidrBlocks: string[];
}

export interface StorageSpec {
    /** Configuration of cluster HDD strorage. */
    hdd?: StorageSpec_HddSpec;
    /** Configuration of cluster SSD strorage */
    ssd?: StorageSpec_SsdSpec;
}

export interface StorageSpec_HddSpec {
    /** Size of a single HDD disk in GB. */
    sizeGb: number;
    /** Total amount of HDD disks. */
    count: number;
}

export interface StorageSpec_SsdSpec {
    /** Size of a single SSD disk in GB. */
    sizeGb: number;
    /** Type of a SSD disk. */
    type: string;
    /** Total amount of SSD disks. */
    count: number;
    /** Configuration of dynamic table changelogs. */
    changelogs?: StorageSpec_SsdSpec_Changelogs;
}

export interface StorageSpec_SsdSpec_Changelogs {
    /** Size of changelogs disk in GB. */
    sizeGb: number;
}

export interface ComputeSpec {
    /** VM configuration preset name. */
    preset: string;
    /** Configuration of exec node strorage. */
    disks: ComputeSpec_DiskSpec[];
    /** Exec nodes scaling policy. */
    scalePolicy?: ComputeSpec_ScalePolicy;
    /** Name for exec pool. */
    name: string;
}

export interface ComputeSpec_DiskSpec {
    /** Type of a disk. */
    type: string;
    /** Size of a single disk in GB. */
    sizeGb: number;
    /** Locations on a disk. */
    locations: string[];
}

export interface ComputeSpec_ScalePolicy {
    /** Scale policy that doesn't change number of running exec nodes over time. */
    fixed?: ComputeSpec_ScalePolicy_FixedScale | undefined;
    /** Scale policy that can adjust number of running exec nodes within specified range based on some criteria. */
    auto?: ComputeSpec_ScalePolicy_AutoScale | undefined;
}

export interface ComputeSpec_ScalePolicy_FixedScale {
    /** Amount of exec nodes. */
    size: number;
}

export interface ComputeSpec_ScalePolicy_AutoScale {
    /** Minimal amount of exec nodes. */
    minSize: number;
    /** Maximum amount of exec nodes. */
    maxSize: number;
}

export interface HttpProxySpec {
    /** Total amount of HTTP proxies. */
    count: number;
}

export interface RpcProxySpec {
    /** Total amount of RPC proxies. */
    count: number;
}

export interface TabletSpec {
    /** VM configuration preset name. */
    preset: string;
    /** Total amount of tablet nodes. */
    count: number;
}

export interface TaskProxySpec {
    /** Total amount of task proxies. */
    count: number;
}

export interface ProxySpec {
    /** Configuration of HTTP proxies. */
    http?: HttpProxySpec;
    /** Configuration of rpc proxies. */
    rpc?: RpcProxySpec;
    /** Configuration of task proxies. */
    task?: TaskProxySpec;
}

export interface OdinSpec {
    /** TTL of Odin check samples. */
    checksTtl?: Duration;
}

export interface ClearTmpCronSpec {
    /** Script starting interval. */
    interval?: Duration;
    /** Total max space usage ratio. */
    accountUsageRatioSaveTotal: number;
    /** Per account max space usage ratio. */
    accountUsageRatioSavePerOwner: number;
    /** Max nodes in every directory. */
    maxDirNodeCount: number;
}

export interface CronSpec {
    /** Cluster regular tmp-account cleaning settings. */
    clearTmp?: ClearTmpCronSpec;
}

export interface ClientLogging {
    /** ID of cloud logging group. */
    logGroupId: string | undefined;
    /** ID of cloud logging folder. Used default loging group. */
    folderId: string | undefined;
    /** ID of Service account used for write logs. */
    serviceAccountId: string;
    /** Enable audit logs. */
    auditLogsEnabled: boolean;
}

export interface ExcelSpec {
    /** Enable Excel. */
    enabled: boolean;
}

export interface ClusterSpec {
    /** Cluster storage configuration. */
    storage?: StorageSpec;
    /** Cluster exec nodes configuration. */
    compute: ComputeSpec[];
    /** Cluster tablet nodes configuration. */
    tablet?: TabletSpec;
    /** Cluster proxies configuration. */
    proxy?: ProxySpec;
    /** Odin configuration. */
    odin?: OdinSpec;
    /** Cluster flavor (type). */
    flavor: ClusterSpec_Flavor;
    /** Cluster regular processing settings. */
    cron?: CronSpec;
    /** Client Cloud logging configuration. */
    clientLogging?: ClientLogging;
    /** Cluster Excel configuration. */
    excel?: ExcelSpec;
}

export enum ClusterSpec_Flavor {
    /** FLAVOR_UNSPECIFIED - Unspecified flavor. */
    FLAVOR_UNSPECIFIED = 0,
    /** DEMO - Demo cluster configuration with minimal system resources. Not fault-tolerant, not for production use. */
    DEMO = 1,
    UNRECOGNIZED = -1,
}

export function clusterSpec_FlavorFromJSON(object: any): ClusterSpec_Flavor {
    switch (object) {
        case 0:
        case 'FLAVOR_UNSPECIFIED':
            return ClusterSpec_Flavor.FLAVOR_UNSPECIFIED;
        case 1:
        case 'DEMO':
            return ClusterSpec_Flavor.DEMO;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ClusterSpec_Flavor.UNRECOGNIZED;
    }
}

export function clusterSpec_FlavorToJSON(object: ClusterSpec_Flavor): string {
    switch (object) {
        case ClusterSpec_Flavor.FLAVOR_UNSPECIFIED:
            return 'FLAVOR_UNSPECIFIED';
        case ClusterSpec_Flavor.DEMO:
            return 'DEMO';
        default:
            return 'UNKNOWN';
    }
}

const baseCluster: object = {
    id: '',
    folderId: '',
    zoneId: '',
    name: '',
    description: '',
    subnetId: '',
    securityGroupIds: '',
    createdBy: '',
    updatedBy: '',
    status: 0,
    health: 0,
};

export const Cluster: {
    encode(message: Cluster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Cluster;
    fromJSON(object: any): Cluster;
    toJSON(message: Cluster): unknown;
    fromPartial<I extends Exact<DeepPartial<Cluster>, I>>(object: I): Cluster;
} = {
    encode(message: Cluster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.zoneId !== '') {
            writer.uint32(26).string(message.zoneId);
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Cluster_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        if (message.subnetId !== '') {
            writer.uint32(58).string(message.subnetId);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(66).string(v!);
        }
        if (message.spec !== undefined) {
            ClusterSpec.encode(message.spec, writer.uint32(74).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(82).fork()).ldelim();
        }
        if (message.createdBy !== '') {
            writer.uint32(90).string(message.createdBy);
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(98).fork()).ldelim();
        }
        if (message.updatedBy !== '') {
            writer.uint32(106).string(message.updatedBy);
        }
        if (message.cidrBlocksWhitelist !== undefined) {
            CidrBlocks.encode(message.cidrBlocksWhitelist, writer.uint32(138).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(112).int32(message.status);
        }
        if (message.health !== 0) {
            writer.uint32(120).int32(message.health);
        }
        if (message.endpoints !== undefined) {
            Cluster_Endpoints.encode(message.endpoints, writer.uint32(130).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Cluster {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCluster } as Cluster;
        message.labels = {};
        message.securityGroupIds = [];
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
                    message.zoneId = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = Cluster_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.subnetId = reader.string();
                    break;
                case 8:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 9:
                    message.spec = ClusterSpec.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.createdBy = reader.string();
                    break;
                case 12:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.updatedBy = reader.string();
                    break;
                case 17:
                    message.cidrBlocksWhitelist = CidrBlocks.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.status = reader.int32() as any;
                    break;
                case 15:
                    message.health = reader.int32() as any;
                    break;
                case 16:
                    message.endpoints = Cluster_Endpoints.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Cluster {
        const message = { ...baseCluster } as Cluster;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null ? String(object.zoneId) : '';
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
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : '';
        message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) => String(e));
        message.spec =
            object.spec !== undefined && object.spec !== null
                ? ClusterSpec.fromJSON(object.spec)
                : undefined;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.createdBy =
            object.createdBy !== undefined && object.createdBy !== null
                ? String(object.createdBy)
                : '';
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
                : undefined;
        message.updatedBy =
            object.updatedBy !== undefined && object.updatedBy !== null
                ? String(object.updatedBy)
                : '';
        message.cidrBlocksWhitelist =
            object.cidrBlocksWhitelist !== undefined && object.cidrBlocksWhitelist !== null
                ? CidrBlocks.fromJSON(object.cidrBlocksWhitelist)
                : undefined;
        message.status =
            object.status !== undefined && object.status !== null
                ? cluster_StatusFromJSON(object.status)
                : 0;
        message.health =
            object.health !== undefined && object.health !== null
                ? cluster_HealthFromJSON(object.health)
                : 0;
        message.endpoints =
            object.endpoints !== undefined && object.endpoints !== null
                ? Cluster_Endpoints.fromJSON(object.endpoints)
                : undefined;
        return message;
    },

    toJSON(message: Cluster): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        } else {
            obj.securityGroupIds = [];
        }
        message.spec !== undefined &&
            (obj.spec = message.spec ? ClusterSpec.toJSON(message.spec) : undefined);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        message.updatedBy !== undefined && (obj.updatedBy = message.updatedBy);
        message.cidrBlocksWhitelist !== undefined &&
            (obj.cidrBlocksWhitelist = message.cidrBlocksWhitelist
                ? CidrBlocks.toJSON(message.cidrBlocksWhitelist)
                : undefined);
        message.status !== undefined && (obj.status = cluster_StatusToJSON(message.status));
        message.health !== undefined && (obj.health = cluster_HealthToJSON(message.health));
        message.endpoints !== undefined &&
            (obj.endpoints = message.endpoints
                ? Cluster_Endpoints.toJSON(message.endpoints)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Cluster>, I>>(object: I): Cluster {
        const message = { ...baseCluster } as Cluster;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.zoneId = object.zoneId ?? '';
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
        message.subnetId = object.subnetId ?? '';
        message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
        message.spec =
            object.spec !== undefined && object.spec !== null
                ? ClusterSpec.fromPartial(object.spec)
                : undefined;
        message.createdAt = object.createdAt ?? undefined;
        message.createdBy = object.createdBy ?? '';
        message.updatedAt = object.updatedAt ?? undefined;
        message.updatedBy = object.updatedBy ?? '';
        message.cidrBlocksWhitelist =
            object.cidrBlocksWhitelist !== undefined && object.cidrBlocksWhitelist !== null
                ? CidrBlocks.fromPartial(object.cidrBlocksWhitelist)
                : undefined;
        message.status = object.status ?? 0;
        message.health = object.health ?? 0;
        message.endpoints =
            object.endpoints !== undefined && object.endpoints !== null
                ? Cluster_Endpoints.fromPartial(object.endpoints)
                : undefined;
        return message;
    },
};

const baseCluster_Endpoints: object = {
    ui: '',
    externalHttpProxyBalancer: '',
    internalHttpProxyAlias: '',
    internalRpcProxyAlias: '',
};

export const Cluster_Endpoints: {
    encode(message: Cluster_Endpoints, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Cluster_Endpoints;
    fromJSON(object: any): Cluster_Endpoints;
    toJSON(message: Cluster_Endpoints): unknown;
    fromPartial<I extends Exact<DeepPartial<Cluster_Endpoints>, I>>(object: I): Cluster_Endpoints;
} = {
    encode(message: Cluster_Endpoints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.ui !== '') {
            writer.uint32(10).string(message.ui);
        }
        if (message.externalHttpProxyBalancer !== '') {
            writer.uint32(18).string(message.externalHttpProxyBalancer);
        }
        if (message.internalHttpProxyAlias !== '') {
            writer.uint32(26).string(message.internalHttpProxyAlias);
        }
        if (message.internalRpcProxyAlias !== '') {
            writer.uint32(34).string(message.internalRpcProxyAlias);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Cluster_Endpoints {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCluster_Endpoints } as Cluster_Endpoints;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ui = reader.string();
                    break;
                case 2:
                    message.externalHttpProxyBalancer = reader.string();
                    break;
                case 3:
                    message.internalHttpProxyAlias = reader.string();
                    break;
                case 4:
                    message.internalRpcProxyAlias = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Cluster_Endpoints {
        const message = { ...baseCluster_Endpoints } as Cluster_Endpoints;
        message.ui = object.ui !== undefined && object.ui !== null ? String(object.ui) : '';
        message.externalHttpProxyBalancer =
            object.externalHttpProxyBalancer !== undefined &&
            object.externalHttpProxyBalancer !== null
                ? String(object.externalHttpProxyBalancer)
                : '';
        message.internalHttpProxyAlias =
            object.internalHttpProxyAlias !== undefined && object.internalHttpProxyAlias !== null
                ? String(object.internalHttpProxyAlias)
                : '';
        message.internalRpcProxyAlias =
            object.internalRpcProxyAlias !== undefined && object.internalRpcProxyAlias !== null
                ? String(object.internalRpcProxyAlias)
                : '';
        return message;
    },

    toJSON(message: Cluster_Endpoints): unknown {
        const obj: any = {};
        message.ui !== undefined && (obj.ui = message.ui);
        message.externalHttpProxyBalancer !== undefined &&
            (obj.externalHttpProxyBalancer = message.externalHttpProxyBalancer);
        message.internalHttpProxyAlias !== undefined &&
            (obj.internalHttpProxyAlias = message.internalHttpProxyAlias);
        message.internalRpcProxyAlias !== undefined &&
            (obj.internalRpcProxyAlias = message.internalRpcProxyAlias);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Cluster_Endpoints>, I>>(object: I): Cluster_Endpoints {
        const message = { ...baseCluster_Endpoints } as Cluster_Endpoints;
        message.ui = object.ui ?? '';
        message.externalHttpProxyBalancer = object.externalHttpProxyBalancer ?? '';
        message.internalHttpProxyAlias = object.internalHttpProxyAlias ?? '';
        message.internalRpcProxyAlias = object.internalRpcProxyAlias ?? '';
        return message;
    },
};

const baseCluster_LabelsEntry: object = { key: '', value: '' };

export const Cluster_LabelsEntry: {
    encode(message: Cluster_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Cluster_LabelsEntry;
    fromJSON(object: any): Cluster_LabelsEntry;
    toJSON(message: Cluster_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<Cluster_LabelsEntry>, I>>(object: I): Cluster_LabelsEntry;
} = {
    encode(message: Cluster_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Cluster_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCluster_LabelsEntry } as Cluster_LabelsEntry;
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

    fromJSON(object: any): Cluster_LabelsEntry {
        const message = { ...baseCluster_LabelsEntry } as Cluster_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Cluster_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Cluster_LabelsEntry>, I>>(
        object: I,
    ): Cluster_LabelsEntry {
        const message = { ...baseCluster_LabelsEntry } as Cluster_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCidrBlocks: object = { v4CidrBlocks: '' };

export const CidrBlocks: {
    encode(message: CidrBlocks, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CidrBlocks;
    fromJSON(object: any): CidrBlocks;
    toJSON(message: CidrBlocks): unknown;
    fromPartial<I extends Exact<DeepPartial<CidrBlocks>, I>>(object: I): CidrBlocks;
} = {
    encode(message: CidrBlocks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.v4CidrBlocks) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CidrBlocks {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCidrBlocks } as CidrBlocks;
        message.v4CidrBlocks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.v4CidrBlocks.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CidrBlocks {
        const message = { ...baseCidrBlocks } as CidrBlocks;
        message.v4CidrBlocks = (object.v4CidrBlocks ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: CidrBlocks): unknown {
        const obj: any = {};
        if (message.v4CidrBlocks) {
            obj.v4CidrBlocks = message.v4CidrBlocks.map((e) => e);
        } else {
            obj.v4CidrBlocks = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CidrBlocks>, I>>(object: I): CidrBlocks {
        const message = { ...baseCidrBlocks } as CidrBlocks;
        message.v4CidrBlocks = object.v4CidrBlocks?.map((e) => e) || [];
        return message;
    },
};

const baseStorageSpec: object = {};

export const StorageSpec: {
    encode(message: StorageSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StorageSpec;
    fromJSON(object: any): StorageSpec;
    toJSON(message: StorageSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<StorageSpec>, I>>(object: I): StorageSpec;
} = {
    encode(message: StorageSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.hdd !== undefined) {
            StorageSpec_HddSpec.encode(message.hdd, writer.uint32(10).fork()).ldelim();
        }
        if (message.ssd !== undefined) {
            StorageSpec_SsdSpec.encode(message.ssd, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StorageSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStorageSpec } as StorageSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hdd = StorageSpec_HddSpec.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.ssd = StorageSpec_SsdSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StorageSpec {
        const message = { ...baseStorageSpec } as StorageSpec;
        message.hdd =
            object.hdd !== undefined && object.hdd !== null
                ? StorageSpec_HddSpec.fromJSON(object.hdd)
                : undefined;
        message.ssd =
            object.ssd !== undefined && object.ssd !== null
                ? StorageSpec_SsdSpec.fromJSON(object.ssd)
                : undefined;
        return message;
    },

    toJSON(message: StorageSpec): unknown {
        const obj: any = {};
        message.hdd !== undefined &&
            (obj.hdd = message.hdd ? StorageSpec_HddSpec.toJSON(message.hdd) : undefined);
        message.ssd !== undefined &&
            (obj.ssd = message.ssd ? StorageSpec_SsdSpec.toJSON(message.ssd) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StorageSpec>, I>>(object: I): StorageSpec {
        const message = { ...baseStorageSpec } as StorageSpec;
        message.hdd =
            object.hdd !== undefined && object.hdd !== null
                ? StorageSpec_HddSpec.fromPartial(object.hdd)
                : undefined;
        message.ssd =
            object.ssd !== undefined && object.ssd !== null
                ? StorageSpec_SsdSpec.fromPartial(object.ssd)
                : undefined;
        return message;
    },
};

const baseStorageSpec_HddSpec: object = { sizeGb: 0, count: 0 };

export const StorageSpec_HddSpec: {
    encode(message: StorageSpec_HddSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StorageSpec_HddSpec;
    fromJSON(object: any): StorageSpec_HddSpec;
    toJSON(message: StorageSpec_HddSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<StorageSpec_HddSpec>, I>>(object: I): StorageSpec_HddSpec;
} = {
    encode(message: StorageSpec_HddSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.sizeGb !== 0) {
            writer.uint32(16).int64(message.sizeGb);
        }
        if (message.count !== 0) {
            writer.uint32(24).int64(message.count);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StorageSpec_HddSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStorageSpec_HddSpec } as StorageSpec_HddSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.sizeGb = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.count = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StorageSpec_HddSpec {
        const message = { ...baseStorageSpec_HddSpec } as StorageSpec_HddSpec;
        message.sizeGb =
            object.sizeGb !== undefined && object.sizeGb !== null ? Number(object.sizeGb) : 0;
        message.count =
            object.count !== undefined && object.count !== null ? Number(object.count) : 0;
        return message;
    },

    toJSON(message: StorageSpec_HddSpec): unknown {
        const obj: any = {};
        message.sizeGb !== undefined && (obj.sizeGb = Math.round(message.sizeGb));
        message.count !== undefined && (obj.count = Math.round(message.count));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StorageSpec_HddSpec>, I>>(
        object: I,
    ): StorageSpec_HddSpec {
        const message = { ...baseStorageSpec_HddSpec } as StorageSpec_HddSpec;
        message.sizeGb = object.sizeGb ?? 0;
        message.count = object.count ?? 0;
        return message;
    },
};

const baseStorageSpec_SsdSpec: object = { sizeGb: 0, type: '', count: 0 };

export const StorageSpec_SsdSpec: {
    encode(message: StorageSpec_SsdSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StorageSpec_SsdSpec;
    fromJSON(object: any): StorageSpec_SsdSpec;
    toJSON(message: StorageSpec_SsdSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<StorageSpec_SsdSpec>, I>>(object: I): StorageSpec_SsdSpec;
} = {
    encode(message: StorageSpec_SsdSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.sizeGb !== 0) {
            writer.uint32(16).int64(message.sizeGb);
        }
        if (message.type !== '') {
            writer.uint32(26).string(message.type);
        }
        if (message.count !== 0) {
            writer.uint32(32).int64(message.count);
        }
        if (message.changelogs !== undefined) {
            StorageSpec_SsdSpec_Changelogs.encode(
                message.changelogs,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StorageSpec_SsdSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStorageSpec_SsdSpec } as StorageSpec_SsdSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.sizeGb = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.type = reader.string();
                    break;
                case 4:
                    message.count = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.changelogs = StorageSpec_SsdSpec_Changelogs.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StorageSpec_SsdSpec {
        const message = { ...baseStorageSpec_SsdSpec } as StorageSpec_SsdSpec;
        message.sizeGb =
            object.sizeGb !== undefined && object.sizeGb !== null ? Number(object.sizeGb) : 0;
        message.type = object.type !== undefined && object.type !== null ? String(object.type) : '';
        message.count =
            object.count !== undefined && object.count !== null ? Number(object.count) : 0;
        message.changelogs =
            object.changelogs !== undefined && object.changelogs !== null
                ? StorageSpec_SsdSpec_Changelogs.fromJSON(object.changelogs)
                : undefined;
        return message;
    },

    toJSON(message: StorageSpec_SsdSpec): unknown {
        const obj: any = {};
        message.sizeGb !== undefined && (obj.sizeGb = Math.round(message.sizeGb));
        message.type !== undefined && (obj.type = message.type);
        message.count !== undefined && (obj.count = Math.round(message.count));
        message.changelogs !== undefined &&
            (obj.changelogs = message.changelogs
                ? StorageSpec_SsdSpec_Changelogs.toJSON(message.changelogs)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StorageSpec_SsdSpec>, I>>(
        object: I,
    ): StorageSpec_SsdSpec {
        const message = { ...baseStorageSpec_SsdSpec } as StorageSpec_SsdSpec;
        message.sizeGb = object.sizeGb ?? 0;
        message.type = object.type ?? '';
        message.count = object.count ?? 0;
        message.changelogs =
            object.changelogs !== undefined && object.changelogs !== null
                ? StorageSpec_SsdSpec_Changelogs.fromPartial(object.changelogs)
                : undefined;
        return message;
    },
};

const baseStorageSpec_SsdSpec_Changelogs: object = { sizeGb: 0 };

export const StorageSpec_SsdSpec_Changelogs: {
    encode(message: StorageSpec_SsdSpec_Changelogs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StorageSpec_SsdSpec_Changelogs;
    fromJSON(object: any): StorageSpec_SsdSpec_Changelogs;
    toJSON(message: StorageSpec_SsdSpec_Changelogs): unknown;
    fromPartial<I extends Exact<DeepPartial<StorageSpec_SsdSpec_Changelogs>, I>>(object: I): StorageSpec_SsdSpec_Changelogs;
} = {
    encode(
        message: StorageSpec_SsdSpec_Changelogs,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.sizeGb !== 0) {
            writer.uint32(8).int64(message.sizeGb);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StorageSpec_SsdSpec_Changelogs {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStorageSpec_SsdSpec_Changelogs } as StorageSpec_SsdSpec_Changelogs;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sizeGb = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StorageSpec_SsdSpec_Changelogs {
        const message = { ...baseStorageSpec_SsdSpec_Changelogs } as StorageSpec_SsdSpec_Changelogs;
        message.sizeGb =
            object.sizeGb !== undefined && object.sizeGb !== null ? Number(object.sizeGb) : 0;
        return message;
    },

    toJSON(message: StorageSpec_SsdSpec_Changelogs): unknown {
        const obj: any = {};
        message.sizeGb !== undefined && (obj.sizeGb = Math.round(message.sizeGb));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StorageSpec_SsdSpec_Changelogs>, I>>(
        object: I,
    ): StorageSpec_SsdSpec_Changelogs {
        const message = { ...baseStorageSpec_SsdSpec_Changelogs } as StorageSpec_SsdSpec_Changelogs;
        message.sizeGb = object.sizeGb ?? 0;
        return message;
    },
};

const baseComputeSpec: object = { preset: '', name: '' };

export const ComputeSpec: {
    encode(message: ComputeSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ComputeSpec;
    fromJSON(object: any): ComputeSpec;
    toJSON(message: ComputeSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<ComputeSpec>, I>>(object: I): ComputeSpec;
} = {
    encode(message: ComputeSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.preset !== '') {
            writer.uint32(10).string(message.preset);
        }
        for (const v of message.disks) {
            ComputeSpec_DiskSpec.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            ComputeSpec_ScalePolicy.encode(message.scalePolicy, writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ComputeSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseComputeSpec } as ComputeSpec;
        message.disks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.preset = reader.string();
                    break;
                case 2:
                    message.disks.push(ComputeSpec_DiskSpec.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.scalePolicy = ComputeSpec_ScalePolicy.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ComputeSpec {
        const message = { ...baseComputeSpec } as ComputeSpec;
        message.preset =
            object.preset !== undefined && object.preset !== null ? String(object.preset) : '';
        message.disks = (object.disks ?? []).map((e: any) => ComputeSpec_DiskSpec.fromJSON(e));
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? ComputeSpec_ScalePolicy.fromJSON(object.scalePolicy)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        return message;
    },

    toJSON(message: ComputeSpec): unknown {
        const obj: any = {};
        message.preset !== undefined && (obj.preset = message.preset);
        if (message.disks) {
            obj.disks = message.disks.map((e) => (e ? ComputeSpec_DiskSpec.toJSON(e) : undefined));
        } else {
            obj.disks = [];
        }
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? ComputeSpec_ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ComputeSpec>, I>>(object: I): ComputeSpec {
        const message = { ...baseComputeSpec } as ComputeSpec;
        message.preset = object.preset ?? '';
        message.disks = object.disks?.map((e) => ComputeSpec_DiskSpec.fromPartial(e)) || [];
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? ComputeSpec_ScalePolicy.fromPartial(object.scalePolicy)
                : undefined;
        message.name = object.name ?? '';
        return message;
    },
};

const baseComputeSpec_DiskSpec: object = { type: '', sizeGb: 0, locations: '' };

export const ComputeSpec_DiskSpec: {
    encode(message: ComputeSpec_DiskSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ComputeSpec_DiskSpec;
    fromJSON(object: any): ComputeSpec_DiskSpec;
    toJSON(message: ComputeSpec_DiskSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<ComputeSpec_DiskSpec>, I>>(object: I): ComputeSpec_DiskSpec;
} = {
    encode(message: ComputeSpec_DiskSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.type !== '') {
            writer.uint32(10).string(message.type);
        }
        if (message.sizeGb !== 0) {
            writer.uint32(16).int64(message.sizeGb);
        }
        for (const v of message.locations) {
            writer.uint32(26).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ComputeSpec_DiskSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseComputeSpec_DiskSpec } as ComputeSpec_DiskSpec;
        message.locations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.sizeGb = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.locations.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ComputeSpec_DiskSpec {
        const message = { ...baseComputeSpec_DiskSpec } as ComputeSpec_DiskSpec;
        message.type = object.type !== undefined && object.type !== null ? String(object.type) : '';
        message.sizeGb =
            object.sizeGb !== undefined && object.sizeGb !== null ? Number(object.sizeGb) : 0;
        message.locations = (object.locations ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: ComputeSpec_DiskSpec): unknown {
        const obj: any = {};
        message.type !== undefined && (obj.type = message.type);
        message.sizeGb !== undefined && (obj.sizeGb = Math.round(message.sizeGb));
        if (message.locations) {
            obj.locations = message.locations.map((e) => e);
        } else {
            obj.locations = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ComputeSpec_DiskSpec>, I>>(
        object: I,
    ): ComputeSpec_DiskSpec {
        const message = { ...baseComputeSpec_DiskSpec } as ComputeSpec_DiskSpec;
        message.type = object.type ?? '';
        message.sizeGb = object.sizeGb ?? 0;
        message.locations = object.locations?.map((e) => e) || [];
        return message;
    },
};

const baseComputeSpec_ScalePolicy: object = {};

export const ComputeSpec_ScalePolicy: {
    encode(message: ComputeSpec_ScalePolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ComputeSpec_ScalePolicy;
    fromJSON(object: any): ComputeSpec_ScalePolicy;
    toJSON(message: ComputeSpec_ScalePolicy): unknown;
    fromPartial<I extends Exact<DeepPartial<ComputeSpec_ScalePolicy>, I>>(object: I): ComputeSpec_ScalePolicy;
} = {
    encode(message: ComputeSpec_ScalePolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.fixed !== undefined) {
            ComputeSpec_ScalePolicy_FixedScale.encode(
                message.fixed,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.auto !== undefined) {
            ComputeSpec_ScalePolicy_AutoScale.encode(
                message.auto,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ComputeSpec_ScalePolicy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseComputeSpec_ScalePolicy } as ComputeSpec_ScalePolicy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fixed = ComputeSpec_ScalePolicy_FixedScale.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.auto = ComputeSpec_ScalePolicy_AutoScale.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ComputeSpec_ScalePolicy {
        const message = { ...baseComputeSpec_ScalePolicy } as ComputeSpec_ScalePolicy;
        message.fixed =
            object.fixed !== undefined && object.fixed !== null
                ? ComputeSpec_ScalePolicy_FixedScale.fromJSON(object.fixed)
                : undefined;
        message.auto =
            object.auto !== undefined && object.auto !== null
                ? ComputeSpec_ScalePolicy_AutoScale.fromJSON(object.auto)
                : undefined;
        return message;
    },

    toJSON(message: ComputeSpec_ScalePolicy): unknown {
        const obj: any = {};
        message.fixed !== undefined &&
            (obj.fixed = message.fixed
                ? ComputeSpec_ScalePolicy_FixedScale.toJSON(message.fixed)
                : undefined);
        message.auto !== undefined &&
            (obj.auto = message.auto
                ? ComputeSpec_ScalePolicy_AutoScale.toJSON(message.auto)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ComputeSpec_ScalePolicy>, I>>(
        object: I,
    ): ComputeSpec_ScalePolicy {
        const message = { ...baseComputeSpec_ScalePolicy } as ComputeSpec_ScalePolicy;
        message.fixed =
            object.fixed !== undefined && object.fixed !== null
                ? ComputeSpec_ScalePolicy_FixedScale.fromPartial(object.fixed)
                : undefined;
        message.auto =
            object.auto !== undefined && object.auto !== null
                ? ComputeSpec_ScalePolicy_AutoScale.fromPartial(object.auto)
                : undefined;
        return message;
    },
};

const baseComputeSpec_ScalePolicy_FixedScale: object = { size: 0 };

export const ComputeSpec_ScalePolicy_FixedScale: {
    encode(message: ComputeSpec_ScalePolicy_FixedScale, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ComputeSpec_ScalePolicy_FixedScale;
    fromJSON(object: any): ComputeSpec_ScalePolicy_FixedScale;
    toJSON(message: ComputeSpec_ScalePolicy_FixedScale): unknown;
    fromPartial<I extends Exact<DeepPartial<ComputeSpec_ScalePolicy_FixedScale>, I>>(object: I): ComputeSpec_ScalePolicy_FixedScale;
} = {
    encode(
        message: ComputeSpec_ScalePolicy_FixedScale,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.size !== 0) {
            writer.uint32(8).int64(message.size);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ComputeSpec_ScalePolicy_FixedScale {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseComputeSpec_ScalePolicy_FixedScale,
        } as ComputeSpec_ScalePolicy_FixedScale;
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

    fromJSON(object: any): ComputeSpec_ScalePolicy_FixedScale {
        const message = {
            ...baseComputeSpec_ScalePolicy_FixedScale,
        } as ComputeSpec_ScalePolicy_FixedScale;
        message.size = object.size !== undefined && object.size !== null ? Number(object.size) : 0;
        return message;
    },

    toJSON(message: ComputeSpec_ScalePolicy_FixedScale): unknown {
        const obj: any = {};
        message.size !== undefined && (obj.size = Math.round(message.size));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ComputeSpec_ScalePolicy_FixedScale>, I>>(
        object: I,
    ): ComputeSpec_ScalePolicy_FixedScale {
        const message = {
            ...baseComputeSpec_ScalePolicy_FixedScale,
        } as ComputeSpec_ScalePolicy_FixedScale;
        message.size = object.size ?? 0;
        return message;
    },
};

const baseComputeSpec_ScalePolicy_AutoScale: object = { minSize: 0, maxSize: 0 };

export const ComputeSpec_ScalePolicy_AutoScale: {
    encode(message: ComputeSpec_ScalePolicy_AutoScale, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ComputeSpec_ScalePolicy_AutoScale;
    fromJSON(object: any): ComputeSpec_ScalePolicy_AutoScale;
    toJSON(message: ComputeSpec_ScalePolicy_AutoScale): unknown;
    fromPartial<I extends Exact<DeepPartial<ComputeSpec_ScalePolicy_AutoScale>, I>>(object: I): ComputeSpec_ScalePolicy_AutoScale;
} = {
    encode(
        message: ComputeSpec_ScalePolicy_AutoScale,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.minSize !== 0) {
            writer.uint32(8).int64(message.minSize);
        }
        if (message.maxSize !== 0) {
            writer.uint32(16).int64(message.maxSize);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ComputeSpec_ScalePolicy_AutoScale {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseComputeSpec_ScalePolicy_AutoScale,
        } as ComputeSpec_ScalePolicy_AutoScale;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minSize = longToNumber(reader.int64() as Long);
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

    fromJSON(object: any): ComputeSpec_ScalePolicy_AutoScale {
        const message = {
            ...baseComputeSpec_ScalePolicy_AutoScale,
        } as ComputeSpec_ScalePolicy_AutoScale;
        message.minSize =
            object.minSize !== undefined && object.minSize !== null ? Number(object.minSize) : 0;
        message.maxSize =
            object.maxSize !== undefined && object.maxSize !== null ? Number(object.maxSize) : 0;
        return message;
    },

    toJSON(message: ComputeSpec_ScalePolicy_AutoScale): unknown {
        const obj: any = {};
        message.minSize !== undefined && (obj.minSize = Math.round(message.minSize));
        message.maxSize !== undefined && (obj.maxSize = Math.round(message.maxSize));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ComputeSpec_ScalePolicy_AutoScale>, I>>(
        object: I,
    ): ComputeSpec_ScalePolicy_AutoScale {
        const message = {
            ...baseComputeSpec_ScalePolicy_AutoScale,
        } as ComputeSpec_ScalePolicy_AutoScale;
        message.minSize = object.minSize ?? 0;
        message.maxSize = object.maxSize ?? 0;
        return message;
    },
};

const baseHttpProxySpec: object = { count: 0 };

export const HttpProxySpec: {
    encode(message: HttpProxySpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HttpProxySpec;
    fromJSON(object: any): HttpProxySpec;
    toJSON(message: HttpProxySpec): unknown;
    fromPartial<I extends Exact<DeepPartial<HttpProxySpec>, I>>(object: I): HttpProxySpec;
} = {
    encode(message: HttpProxySpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.count !== 0) {
            writer.uint32(16).int64(message.count);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HttpProxySpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHttpProxySpec } as HttpProxySpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.count = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HttpProxySpec {
        const message = { ...baseHttpProxySpec } as HttpProxySpec;
        message.count =
            object.count !== undefined && object.count !== null ? Number(object.count) : 0;
        return message;
    },

    toJSON(message: HttpProxySpec): unknown {
        const obj: any = {};
        message.count !== undefined && (obj.count = Math.round(message.count));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HttpProxySpec>, I>>(object: I): HttpProxySpec {
        const message = { ...baseHttpProxySpec } as HttpProxySpec;
        message.count = object.count ?? 0;
        return message;
    },
};

const baseRpcProxySpec: object = { count: 0 };

export const RpcProxySpec: {
    encode(message: RpcProxySpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RpcProxySpec;
    fromJSON(object: any): RpcProxySpec;
    toJSON(message: RpcProxySpec): unknown;
    fromPartial<I extends Exact<DeepPartial<RpcProxySpec>, I>>(object: I): RpcProxySpec;
} = {
    encode(message: RpcProxySpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.count !== 0) {
            writer.uint32(16).int64(message.count);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RpcProxySpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRpcProxySpec } as RpcProxySpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.count = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RpcProxySpec {
        const message = { ...baseRpcProxySpec } as RpcProxySpec;
        message.count =
            object.count !== undefined && object.count !== null ? Number(object.count) : 0;
        return message;
    },

    toJSON(message: RpcProxySpec): unknown {
        const obj: any = {};
        message.count !== undefined && (obj.count = Math.round(message.count));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RpcProxySpec>, I>>(object: I): RpcProxySpec {
        const message = { ...baseRpcProxySpec } as RpcProxySpec;
        message.count = object.count ?? 0;
        return message;
    },
};

const baseTabletSpec: object = { preset: '', count: 0 };

export const TabletSpec: {
    encode(message: TabletSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TabletSpec;
    fromJSON(object: any): TabletSpec;
    toJSON(message: TabletSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<TabletSpec>, I>>(object: I): TabletSpec;
} = {
    encode(message: TabletSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.preset !== '') {
            writer.uint32(10).string(message.preset);
        }
        if (message.count !== 0) {
            writer.uint32(16).int64(message.count);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TabletSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTabletSpec } as TabletSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.preset = reader.string();
                    break;
                case 2:
                    message.count = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TabletSpec {
        const message = { ...baseTabletSpec } as TabletSpec;
        message.preset =
            object.preset !== undefined && object.preset !== null ? String(object.preset) : '';
        message.count =
            object.count !== undefined && object.count !== null ? Number(object.count) : 0;
        return message;
    },

    toJSON(message: TabletSpec): unknown {
        const obj: any = {};
        message.preset !== undefined && (obj.preset = message.preset);
        message.count !== undefined && (obj.count = Math.round(message.count));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TabletSpec>, I>>(object: I): TabletSpec {
        const message = { ...baseTabletSpec } as TabletSpec;
        message.preset = object.preset ?? '';
        message.count = object.count ?? 0;
        return message;
    },
};

const baseTaskProxySpec: object = { count: 0 };

export const TaskProxySpec: {
    encode(message: TaskProxySpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TaskProxySpec;
    fromJSON(object: any): TaskProxySpec;
    toJSON(message: TaskProxySpec): unknown;
    fromPartial<I extends Exact<DeepPartial<TaskProxySpec>, I>>(object: I): TaskProxySpec;
} = {
    encode(message: TaskProxySpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.count !== 0) {
            writer.uint32(8).int64(message.count);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TaskProxySpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTaskProxySpec } as TaskProxySpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.count = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TaskProxySpec {
        const message = { ...baseTaskProxySpec } as TaskProxySpec;
        message.count =
            object.count !== undefined && object.count !== null ? Number(object.count) : 0;
        return message;
    },

    toJSON(message: TaskProxySpec): unknown {
        const obj: any = {};
        message.count !== undefined && (obj.count = Math.round(message.count));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TaskProxySpec>, I>>(object: I): TaskProxySpec {
        const message = { ...baseTaskProxySpec } as TaskProxySpec;
        message.count = object.count ?? 0;
        return message;
    },
};

const baseProxySpec: object = {};

export const ProxySpec: {
    encode(message: ProxySpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProxySpec;
    fromJSON(object: any): ProxySpec;
    toJSON(message: ProxySpec): unknown;
    fromPartial<I extends Exact<DeepPartial<ProxySpec>, I>>(object: I): ProxySpec;
} = {
    encode(message: ProxySpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.http !== undefined) {
            HttpProxySpec.encode(message.http, writer.uint32(10).fork()).ldelim();
        }
        if (message.rpc !== undefined) {
            RpcProxySpec.encode(message.rpc, writer.uint32(18).fork()).ldelim();
        }
        if (message.task !== undefined) {
            TaskProxySpec.encode(message.task, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ProxySpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseProxySpec } as ProxySpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.http = HttpProxySpec.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.rpc = RpcProxySpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.task = TaskProxySpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ProxySpec {
        const message = { ...baseProxySpec } as ProxySpec;
        message.http =
            object.http !== undefined && object.http !== null
                ? HttpProxySpec.fromJSON(object.http)
                : undefined;
        message.rpc =
            object.rpc !== undefined && object.rpc !== null
                ? RpcProxySpec.fromJSON(object.rpc)
                : undefined;
        message.task =
            object.task !== undefined && object.task !== null
                ? TaskProxySpec.fromJSON(object.task)
                : undefined;
        return message;
    },

    toJSON(message: ProxySpec): unknown {
        const obj: any = {};
        message.http !== undefined &&
            (obj.http = message.http ? HttpProxySpec.toJSON(message.http) : undefined);
        message.rpc !== undefined &&
            (obj.rpc = message.rpc ? RpcProxySpec.toJSON(message.rpc) : undefined);
        message.task !== undefined &&
            (obj.task = message.task ? TaskProxySpec.toJSON(message.task) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ProxySpec>, I>>(object: I): ProxySpec {
        const message = { ...baseProxySpec } as ProxySpec;
        message.http =
            object.http !== undefined && object.http !== null
                ? HttpProxySpec.fromPartial(object.http)
                : undefined;
        message.rpc =
            object.rpc !== undefined && object.rpc !== null
                ? RpcProxySpec.fromPartial(object.rpc)
                : undefined;
        message.task =
            object.task !== undefined && object.task !== null
                ? TaskProxySpec.fromPartial(object.task)
                : undefined;
        return message;
    },
};

const baseOdinSpec: object = {};

export const OdinSpec: {
    encode(message: OdinSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OdinSpec;
    fromJSON(object: any): OdinSpec;
    toJSON(message: OdinSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<OdinSpec>, I>>(object: I): OdinSpec;
} = {
    encode(message: OdinSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.checksTtl !== undefined) {
            Duration.encode(message.checksTtl, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OdinSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOdinSpec } as OdinSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.checksTtl = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OdinSpec {
        const message = { ...baseOdinSpec } as OdinSpec;
        message.checksTtl =
            object.checksTtl !== undefined && object.checksTtl !== null
                ? Duration.fromJSON(object.checksTtl)
                : undefined;
        return message;
    },

    toJSON(message: OdinSpec): unknown {
        const obj: any = {};
        message.checksTtl !== undefined &&
            (obj.checksTtl = message.checksTtl ? Duration.toJSON(message.checksTtl) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OdinSpec>, I>>(object: I): OdinSpec {
        const message = { ...baseOdinSpec } as OdinSpec;
        message.checksTtl =
            object.checksTtl !== undefined && object.checksTtl !== null
                ? Duration.fromPartial(object.checksTtl)
                : undefined;
        return message;
    },
};

const baseClearTmpCronSpec: object = {
    accountUsageRatioSaveTotal: 0,
    accountUsageRatioSavePerOwner: 0,
    maxDirNodeCount: 0,
};

export const ClearTmpCronSpec: {
    encode(message: ClearTmpCronSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClearTmpCronSpec;
    fromJSON(object: any): ClearTmpCronSpec;
    toJSON(message: ClearTmpCronSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<ClearTmpCronSpec>, I>>(object: I): ClearTmpCronSpec;
} = {
    encode(message: ClearTmpCronSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.interval !== undefined) {
            Duration.encode(message.interval, writer.uint32(10).fork()).ldelim();
        }
        if (message.accountUsageRatioSaveTotal !== 0) {
            writer.uint32(17).double(message.accountUsageRatioSaveTotal);
        }
        if (message.accountUsageRatioSavePerOwner !== 0) {
            writer.uint32(25).double(message.accountUsageRatioSavePerOwner);
        }
        if (message.maxDirNodeCount !== 0) {
            writer.uint32(32).int64(message.maxDirNodeCount);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClearTmpCronSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClearTmpCronSpec } as ClearTmpCronSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interval = Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.accountUsageRatioSaveTotal = reader.double();
                    break;
                case 3:
                    message.accountUsageRatioSavePerOwner = reader.double();
                    break;
                case 4:
                    message.maxDirNodeCount = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClearTmpCronSpec {
        const message = { ...baseClearTmpCronSpec } as ClearTmpCronSpec;
        message.interval =
            object.interval !== undefined && object.interval !== null
                ? Duration.fromJSON(object.interval)
                : undefined;
        message.accountUsageRatioSaveTotal =
            object.accountUsageRatioSaveTotal !== undefined &&
            object.accountUsageRatioSaveTotal !== null
                ? Number(object.accountUsageRatioSaveTotal)
                : 0;
        message.accountUsageRatioSavePerOwner =
            object.accountUsageRatioSavePerOwner !== undefined &&
            object.accountUsageRatioSavePerOwner !== null
                ? Number(object.accountUsageRatioSavePerOwner)
                : 0;
        message.maxDirNodeCount =
            object.maxDirNodeCount !== undefined && object.maxDirNodeCount !== null
                ? Number(object.maxDirNodeCount)
                : 0;
        return message;
    },

    toJSON(message: ClearTmpCronSpec): unknown {
        const obj: any = {};
        message.interval !== undefined &&
            (obj.interval = message.interval ? Duration.toJSON(message.interval) : undefined);
        message.accountUsageRatioSaveTotal !== undefined &&
            (obj.accountUsageRatioSaveTotal = message.accountUsageRatioSaveTotal);
        message.accountUsageRatioSavePerOwner !== undefined &&
            (obj.accountUsageRatioSavePerOwner = message.accountUsageRatioSavePerOwner);
        message.maxDirNodeCount !== undefined &&
            (obj.maxDirNodeCount = Math.round(message.maxDirNodeCount));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClearTmpCronSpec>, I>>(object: I): ClearTmpCronSpec {
        const message = { ...baseClearTmpCronSpec } as ClearTmpCronSpec;
        message.interval =
            object.interval !== undefined && object.interval !== null
                ? Duration.fromPartial(object.interval)
                : undefined;
        message.accountUsageRatioSaveTotal = object.accountUsageRatioSaveTotal ?? 0;
        message.accountUsageRatioSavePerOwner = object.accountUsageRatioSavePerOwner ?? 0;
        message.maxDirNodeCount = object.maxDirNodeCount ?? 0;
        return message;
    },
};

const baseCronSpec: object = {};

export const CronSpec: {
    encode(message: CronSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CronSpec;
    fromJSON(object: any): CronSpec;
    toJSON(message: CronSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<CronSpec>, I>>(object: I): CronSpec;
} = {
    encode(message: CronSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clearTmp !== undefined) {
            ClearTmpCronSpec.encode(message.clearTmp, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CronSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCronSpec } as CronSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clearTmp = ClearTmpCronSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CronSpec {
        const message = { ...baseCronSpec } as CronSpec;
        message.clearTmp =
            object.clearTmp !== undefined && object.clearTmp !== null
                ? ClearTmpCronSpec.fromJSON(object.clearTmp)
                : undefined;
        return message;
    },

    toJSON(message: CronSpec): unknown {
        const obj: any = {};
        message.clearTmp !== undefined &&
            (obj.clearTmp = message.clearTmp
                ? ClearTmpCronSpec.toJSON(message.clearTmp)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CronSpec>, I>>(object: I): CronSpec {
        const message = { ...baseCronSpec } as CronSpec;
        message.clearTmp =
            object.clearTmp !== undefined && object.clearTmp !== null
                ? ClearTmpCronSpec.fromPartial(object.clearTmp)
                : undefined;
        return message;
    },
};

const baseClientLogging: object = { serviceAccountId: '', auditLogsEnabled: false };

export const ClientLogging: {
    encode(message: ClientLogging, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientLogging;
    fromJSON(object: any): ClientLogging;
    toJSON(message: ClientLogging): unknown;
    fromPartial<I extends Exact<DeepPartial<ClientLogging>, I>>(object: I): ClientLogging;
} = {
    encode(message: ClientLogging, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.logGroupId !== undefined) {
            writer.uint32(18).string(message.logGroupId);
        }
        if (message.folderId !== undefined) {
            writer.uint32(26).string(message.folderId);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
        }
        if (message.auditLogsEnabled === true) {
            writer.uint32(32).bool(message.auditLogsEnabled);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClientLogging {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClientLogging } as ClientLogging;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.logGroupId = reader.string();
                    break;
                case 3:
                    message.folderId = reader.string();
                    break;
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                case 4:
                    message.auditLogsEnabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClientLogging {
        const message = { ...baseClientLogging } as ClientLogging;
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : undefined;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : undefined;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.auditLogsEnabled =
            object.auditLogsEnabled !== undefined && object.auditLogsEnabled !== null
                ? Boolean(object.auditLogsEnabled)
                : false;
        return message;
    },

    toJSON(message: ClientLogging): unknown {
        const obj: any = {};
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.auditLogsEnabled !== undefined && (obj.auditLogsEnabled = message.auditLogsEnabled);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClientLogging>, I>>(object: I): ClientLogging {
        const message = { ...baseClientLogging } as ClientLogging;
        message.logGroupId = object.logGroupId ?? undefined;
        message.folderId = object.folderId ?? undefined;
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.auditLogsEnabled = object.auditLogsEnabled ?? false;
        return message;
    },
};

const baseExcelSpec: object = { enabled: false };

export const ExcelSpec: {
    encode(message: ExcelSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExcelSpec;
    fromJSON(object: any): ExcelSpec;
    toJSON(message: ExcelSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<ExcelSpec>, I>>(object: I): ExcelSpec;
} = {
    encode(message: ExcelSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExcelSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExcelSpec } as ExcelSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ExcelSpec {
        const message = { ...baseExcelSpec } as ExcelSpec;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        return message;
    },

    toJSON(message: ExcelSpec): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExcelSpec>, I>>(object: I): ExcelSpec {
        const message = { ...baseExcelSpec } as ExcelSpec;
        message.enabled = object.enabled ?? false;
        return message;
    },
};

const baseClusterSpec: object = { flavor: 0 };

export const ClusterSpec: {
    encode(message: ClusterSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClusterSpec;
    fromJSON(object: any): ClusterSpec;
    toJSON(message: ClusterSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<ClusterSpec>, I>>(object: I): ClusterSpec;
} = {
    encode(message: ClusterSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.storage !== undefined) {
            StorageSpec.encode(message.storage, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.compute) {
            ComputeSpec.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        if (message.tablet !== undefined) {
            TabletSpec.encode(message.tablet, writer.uint32(26).fork()).ldelim();
        }
        if (message.proxy !== undefined) {
            ProxySpec.encode(message.proxy, writer.uint32(34).fork()).ldelim();
        }
        if (message.odin !== undefined) {
            OdinSpec.encode(message.odin, writer.uint32(42).fork()).ldelim();
        }
        if (message.flavor !== 0) {
            writer.uint32(48).int32(message.flavor);
        }
        if (message.cron !== undefined) {
            CronSpec.encode(message.cron, writer.uint32(58).fork()).ldelim();
        }
        if (message.clientLogging !== undefined) {
            ClientLogging.encode(message.clientLogging, writer.uint32(66).fork()).ldelim();
        }
        if (message.excel !== undefined) {
            ExcelSpec.encode(message.excel, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClusterSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClusterSpec } as ClusterSpec;
        message.compute = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = StorageSpec.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.compute.push(ComputeSpec.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.tablet = TabletSpec.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.proxy = ProxySpec.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.odin = OdinSpec.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.flavor = reader.int32() as any;
                    break;
                case 7:
                    message.cron = CronSpec.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.clientLogging = ClientLogging.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.excel = ExcelSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClusterSpec {
        const message = { ...baseClusterSpec } as ClusterSpec;
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? StorageSpec.fromJSON(object.storage)
                : undefined;
        message.compute = (object.compute ?? []).map((e: any) => ComputeSpec.fromJSON(e));
        message.tablet =
            object.tablet !== undefined && object.tablet !== null
                ? TabletSpec.fromJSON(object.tablet)
                : undefined;
        message.proxy =
            object.proxy !== undefined && object.proxy !== null
                ? ProxySpec.fromJSON(object.proxy)
                : undefined;
        message.odin =
            object.odin !== undefined && object.odin !== null
                ? OdinSpec.fromJSON(object.odin)
                : undefined;
        message.flavor =
            object.flavor !== undefined && object.flavor !== null
                ? clusterSpec_FlavorFromJSON(object.flavor)
                : 0;
        message.cron =
            object.cron !== undefined && object.cron !== null
                ? CronSpec.fromJSON(object.cron)
                : undefined;
        message.clientLogging =
            object.clientLogging !== undefined && object.clientLogging !== null
                ? ClientLogging.fromJSON(object.clientLogging)
                : undefined;
        message.excel =
            object.excel !== undefined && object.excel !== null
                ? ExcelSpec.fromJSON(object.excel)
                : undefined;
        return message;
    },

    toJSON(message: ClusterSpec): unknown {
        const obj: any = {};
        message.storage !== undefined &&
            (obj.storage = message.storage ? StorageSpec.toJSON(message.storage) : undefined);
        if (message.compute) {
            obj.compute = message.compute.map((e) => (e ? ComputeSpec.toJSON(e) : undefined));
        } else {
            obj.compute = [];
        }
        message.tablet !== undefined &&
            (obj.tablet = message.tablet ? TabletSpec.toJSON(message.tablet) : undefined);
        message.proxy !== undefined &&
            (obj.proxy = message.proxy ? ProxySpec.toJSON(message.proxy) : undefined);
        message.odin !== undefined &&
            (obj.odin = message.odin ? OdinSpec.toJSON(message.odin) : undefined);
        message.flavor !== undefined && (obj.flavor = clusterSpec_FlavorToJSON(message.flavor));
        message.cron !== undefined &&
            (obj.cron = message.cron ? CronSpec.toJSON(message.cron) : undefined);
        message.clientLogging !== undefined &&
            (obj.clientLogging = message.clientLogging
                ? ClientLogging.toJSON(message.clientLogging)
                : undefined);
        message.excel !== undefined &&
            (obj.excel = message.excel ? ExcelSpec.toJSON(message.excel) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClusterSpec>, I>>(object: I): ClusterSpec {
        const message = { ...baseClusterSpec } as ClusterSpec;
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? StorageSpec.fromPartial(object.storage)
                : undefined;
        message.compute = object.compute?.map((e) => ComputeSpec.fromPartial(e)) || [];
        message.tablet =
            object.tablet !== undefined && object.tablet !== null
                ? TabletSpec.fromPartial(object.tablet)
                : undefined;
        message.proxy =
            object.proxy !== undefined && object.proxy !== null
                ? ProxySpec.fromPartial(object.proxy)
                : undefined;
        message.odin =
            object.odin !== undefined && object.odin !== null
                ? OdinSpec.fromPartial(object.odin)
                : undefined;
        message.flavor = object.flavor ?? 0;
        message.cron =
            object.cron !== undefined && object.cron !== null
                ? CronSpec.fromPartial(object.cron)
                : undefined;
        message.clientLogging =
            object.clientLogging !== undefined && object.clientLogging !== null
                ? ClientLogging.fromPartial(object.clientLogging)
                : undefined;
        message.excel =
            object.excel !== undefined && object.excel !== null
                ? ExcelSpec.fromPartial(object.excel)
                : undefined;
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
