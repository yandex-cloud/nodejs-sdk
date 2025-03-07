/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { TimeOfDay } from '../../../../../google/type/timeofday';
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import {
    SQLServerConfigSet2016sp2std,
    SQLServerConfigSet2016sp2ent,
} from '../../../../../yandex/cloud/mdb/sqlserver/v1/config/sqlserver2016sp2';
import {
    SQLServerConfigSet2017std,
    SQLServerConfigSet2017ent,
} from '../../../../../yandex/cloud/mdb/sqlserver/v1/config/sqlserver2017';
import {
    SQLServerConfigSet2019std,
    SQLServerConfigSet2019ent,
} from '../../../../../yandex/cloud/mdb/sqlserver/v1/config/sqlserver2019';

export const protobufPackage = 'yandex.cloud.mdb.sqlserver.v1';

/**
 * An SQL Server cluster.
 *
 * For more information, see the [Concepts](/docs/managed-sqlserver/concepts) section of the documentation.
 */
export interface Cluster {
    /**
     * ID of the SQL Server cluster.
     *
     * This ID is assigned by Managed Service for SQL Server at the moment of creation.
     */
    id: string;
    /** ID of the folder the SQL Server cluster belongs to. */
    folderId: string;
    /** Time when SQL Server cluster was created. */
    createdAt?: Date;
    /**
     * Name of the SQL Server cluster.
     *
     * The name must be unique within the folder, comply with [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt) and be 1-63 characters long.
     */
    name: string;
    /**
     * Description of the SQL Server cluster.
     *
     * Must be 0-256 characters long.
     */
    description: string;
    /**
     * Custom labels for the SQL Server cluster as `key:value` pairs.
     *
     * Maximum 64 per resource.
     */
    labels: { [key: string]: string };
    /** Deployment environment of the SQL Server cluster. */
    environment: Cluster_Environment;
    /** Description of monitoring systems relevant to the SQL Server cluster. */
    monitoring: Monitoring[];
    /** Configuration of the SQL Server cluster. */
    config?: ClusterConfig;
    /** ID of the network that the cluster belongs to. */
    networkId: string;
    /** Aggregated cluster health. */
    health: Cluster_Health;
    /** Current state of the cluster. */
    status: Cluster_Status;
    /** User security groups. */
    securityGroupIds: string[];
    /** Determines whether the cluster is protected from being deleted. */
    deletionProtection: boolean;
    /** SQL Server Collation. */
    sqlcollation: string;
    /** Host groups hosting VMs of the cluster. */
    hostGroupIds: string[];
    /** ID of the service account which is used for access to Object Storage. */
    serviceAccountId: string;
}

export enum Cluster_Environment {
    ENVIRONMENT_UNSPECIFIED = 0,
    /** PRODUCTION - Stable environment with a conservative update policy: only hotfixes are applied during regular maintenance. */
    PRODUCTION = 1,
    /** PRESTABLE - Environment with more aggressive update policy: new versions are rolled out irrespective of backward compatibility. */
    PRESTABLE = 2,
    UNRECOGNIZED = -1,
}

export function cluster_EnvironmentFromJSON(object: any): Cluster_Environment {
    switch (object) {
        case 0:
        case 'ENVIRONMENT_UNSPECIFIED':
            return Cluster_Environment.ENVIRONMENT_UNSPECIFIED;
        case 1:
        case 'PRODUCTION':
            return Cluster_Environment.PRODUCTION;
        case 2:
        case 'PRESTABLE':
            return Cluster_Environment.PRESTABLE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Cluster_Environment.UNRECOGNIZED;
    }
}

export function cluster_EnvironmentToJSON(object: Cluster_Environment): string {
    switch (object) {
        case Cluster_Environment.ENVIRONMENT_UNSPECIFIED:
            return 'ENVIRONMENT_UNSPECIFIED';
        case Cluster_Environment.PRODUCTION:
            return 'PRODUCTION';
        case Cluster_Environment.PRESTABLE:
            return 'PRESTABLE';
        default:
            return 'UNKNOWN';
    }
}

export enum Cluster_Health {
    /** HEALTH_UNKNOWN - State of the cluster is unknown ([Host.health] of all hosts in the cluster is `UNKNOWN`). */
    HEALTH_UNKNOWN = 0,
    /** ALIVE - Cluster is alive and works well ([Host.health] of all hosts in the cluster is `ALIVE`). */
    ALIVE = 1,
    /** DEAD - Cluster is inoperable ([Host.health] of all hosts in the cluster is `DEAD`). */
    DEAD = 2,
    /** DEGRADED - Cluster is in degraded state ([Host.health] of at least one of the hosts in the cluster is not `ALIVE`). */
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

export enum Cluster_Status {
    /** STATUS_UNKNOWN - Cluster state is unknown. */
    STATUS_UNKNOWN = 0,
    /** CREATING - Cluster is being created. */
    CREATING = 1,
    /** RUNNING - Cluster is running normally. */
    RUNNING = 2,
    /** ERROR - Cluster encountered a problem and cannot operate. */
    ERROR = 3,
    /** UPDATING - Cluster is being updated. */
    UPDATING = 4,
    /** STOPPING - Cluster is stopping. */
    STOPPING = 5,
    /** STOPPED - Cluster stopped. */
    STOPPED = 6,
    /** STARTING - Cluster is starting. */
    STARTING = 7,
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
        case 'UPDATING':
            return Cluster_Status.UPDATING;
        case 5:
        case 'STOPPING':
            return Cluster_Status.STOPPING;
        case 6:
        case 'STOPPED':
            return Cluster_Status.STOPPED;
        case 7:
        case 'STARTING':
            return Cluster_Status.STARTING;
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
        case Cluster_Status.UPDATING:
            return 'UPDATING';
        case Cluster_Status.STOPPING:
            return 'STOPPING';
        case Cluster_Status.STOPPED:
            return 'STOPPED';
        case Cluster_Status.STARTING:
            return 'STARTING';
        default:
            return 'UNKNOWN';
    }
}

export interface Cluster_LabelsEntry {
    key: string;
    value: string;
}

export interface Monitoring {
    /** Name of the monitoring system. */
    name: string;
    /** Description of the monitoring system. */
    description: string;
    /** Link to the monitoring system charts for the SQL Server cluster. */
    link: string;
}

export interface ClusterConfig {
    /** Version of the SQL Server. */
    version: string;
    /** Configuration of the SQL Server 2016sp2 standard edition instance. */
    sqlserverConfig2016sp2std?: SQLServerConfigSet2016sp2std | undefined;
    /** Configuration of the SQL Server 2016sp2 enterprise edition instance. */
    sqlserverConfig2016sp2ent?: SQLServerConfigSet2016sp2ent | undefined;
    /** Configuration of the SQL Server 2017 standard edition instance. */
    sqlserverConfig2017std?: SQLServerConfigSet2017std | undefined;
    /** Configuration of the SQL Server 2017 enterprise edition instance. */
    sqlserverConfig2017ent?: SQLServerConfigSet2017ent | undefined;
    /** Configuration of the SQL Server 2019 standard edition instance. */
    sqlserverConfig2019std?: SQLServerConfigSet2019std | undefined;
    /** Configuration of the SQL Server 2019 enterprise edition instance. */
    sqlserverConfig2019ent?: SQLServerConfigSet2019ent | undefined;
    /** Resources allocated to SQL Server hosts. */
    resources?: Resources;
    /** Start time for the daily backup in UTC timezone. */
    backupWindowStart?: TimeOfDay;
    /** Database access policy. */
    access?: Access;
    /** Secondary replicas connection mode */
    secondaryConnections: ClusterConfig_SecondaryConnections;
}

export enum ClusterConfig_SecondaryConnections {
    SECONDARY_CONNECTIONS_UNSPECIFIED = 0,
    /** SECONDARY_CONNECTIONS_OFF - Connections to secondary replicas are prohibited */
    SECONDARY_CONNECTIONS_OFF = 1,
    /** SECONDARY_CONNECTIONS_READ_ONLY - Secondary replicas are read-only */
    SECONDARY_CONNECTIONS_READ_ONLY = 2,
    UNRECOGNIZED = -1,
}

export function clusterConfig_SecondaryConnectionsFromJSON(
    object: any,
): ClusterConfig_SecondaryConnections {
    switch (object) {
        case 0:
        case 'SECONDARY_CONNECTIONS_UNSPECIFIED':
            return ClusterConfig_SecondaryConnections.SECONDARY_CONNECTIONS_UNSPECIFIED;
        case 1:
        case 'SECONDARY_CONNECTIONS_OFF':
            return ClusterConfig_SecondaryConnections.SECONDARY_CONNECTIONS_OFF;
        case 2:
        case 'SECONDARY_CONNECTIONS_READ_ONLY':
            return ClusterConfig_SecondaryConnections.SECONDARY_CONNECTIONS_READ_ONLY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ClusterConfig_SecondaryConnections.UNRECOGNIZED;
    }
}

export function clusterConfig_SecondaryConnectionsToJSON(
    object: ClusterConfig_SecondaryConnections,
): string {
    switch (object) {
        case ClusterConfig_SecondaryConnections.SECONDARY_CONNECTIONS_UNSPECIFIED:
            return 'SECONDARY_CONNECTIONS_UNSPECIFIED';
        case ClusterConfig_SecondaryConnections.SECONDARY_CONNECTIONS_OFF:
            return 'SECONDARY_CONNECTIONS_OFF';
        case ClusterConfig_SecondaryConnections.SECONDARY_CONNECTIONS_READ_ONLY:
            return 'SECONDARY_CONNECTIONS_READ_ONLY';
        default:
            return 'UNKNOWN';
    }
}

export interface Host {
    /**
     * Name of the SQL Server host.
     *
     * The host name is assigned by Managed Service for SQL Server at the moment of creation and cannot be changed. 1-63 characters long.
     *
     * The name is unique across all database hosts that exist on the platform as it defines the FQDN of the host.
     */
    name: string;
    /**
     * ID of the SQL Server host.
     *
     * The ID is assigned by Managed Service for SQL Server at the moment of creation.
     */
    clusterId: string;
    /** ID of the availability zone where the SQL Server host resides. */
    zoneId: string;
    /** Resources allocated to the host. */
    resources?: Resources;
    /** Role of the host in the cluster. */
    role: Host_Role;
    /** Status code of the aggregated health of the host. */
    health: Host_Health;
    /** Services provided by the host. */
    services: Service[];
    /** ID of the subnet that the host belongs to. */
    subnetId: string;
    /** Flag showing public IP assignment status to this host. */
    assignPublicIp: boolean;
}

export enum Host_Role {
    /** ROLE_UNKNOWN - Role of the host in the cluster is unknown. */
    ROLE_UNKNOWN = 0,
    /** MASTER - Host is the master SQL Server instance in the cluster. */
    MASTER = 1,
    /** REPLICA - Host is a replica SQL Server instance in the cluster. */
    REPLICA = 2,
    UNRECOGNIZED = -1,
}

export function host_RoleFromJSON(object: any): Host_Role {
    switch (object) {
        case 0:
        case 'ROLE_UNKNOWN':
            return Host_Role.ROLE_UNKNOWN;
        case 1:
        case 'MASTER':
            return Host_Role.MASTER;
        case 2:
        case 'REPLICA':
            return Host_Role.REPLICA;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Host_Role.UNRECOGNIZED;
    }
}

export function host_RoleToJSON(object: Host_Role): string {
    switch (object) {
        case Host_Role.ROLE_UNKNOWN:
            return 'ROLE_UNKNOWN';
        case Host_Role.MASTER:
            return 'MASTER';
        case Host_Role.REPLICA:
            return 'REPLICA';
        default:
            return 'UNKNOWN';
    }
}

export enum Host_Health {
    /** HEALTH_UNKNOWN - Health of the host is unknown. */
    HEALTH_UNKNOWN = 0,
    /** ALIVE - The host is performing all its functions normally. */
    ALIVE = 1,
    /** DEAD - The host is inoperable and cannot perform any of its essential functions. */
    DEAD = 2,
    /** DEGRADED - The host is degraded and can perform only some of its essential functions. */
    DEGRADED = 3,
    UNRECOGNIZED = -1,
}

export function host_HealthFromJSON(object: any): Host_Health {
    switch (object) {
        case 0:
        case 'HEALTH_UNKNOWN':
            return Host_Health.HEALTH_UNKNOWN;
        case 1:
        case 'ALIVE':
            return Host_Health.ALIVE;
        case 2:
        case 'DEAD':
            return Host_Health.DEAD;
        case 3:
        case 'DEGRADED':
            return Host_Health.DEGRADED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Host_Health.UNRECOGNIZED;
    }
}

export function host_HealthToJSON(object: Host_Health): string {
    switch (object) {
        case Host_Health.HEALTH_UNKNOWN:
            return 'HEALTH_UNKNOWN';
        case Host_Health.ALIVE:
            return 'ALIVE';
        case Host_Health.DEAD:
            return 'DEAD';
        case Host_Health.DEGRADED:
            return 'DEGRADED';
        default:
            return 'UNKNOWN';
    }
}

export interface Service {
    /** Type of the service provided by the host. */
    type: Service_Type;
    /** Status code of server availability. */
    health: Service_Health;
}

export enum Service_Type {
    TYPE_UNSPECIFIED = 0,
    /** SQLSERVER - SQL Server service. */
    SQLSERVER = 1,
    UNRECOGNIZED = -1,
}

export function service_TypeFromJSON(object: any): Service_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return Service_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'SQLSERVER':
            return Service_Type.SQLSERVER;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Service_Type.UNRECOGNIZED;
    }
}

export function service_TypeToJSON(object: Service_Type): string {
    switch (object) {
        case Service_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case Service_Type.SQLSERVER:
            return 'SQLSERVER';
        default:
            return 'UNKNOWN';
    }
}

export enum Service_Health {
    /** HEALTH_UNKNOWN - Health of the server is unknown. */
    HEALTH_UNKNOWN = 0,
    /** ALIVE - The server is working normally. */
    ALIVE = 1,
    /** DEAD - The server is dead or unresponsive. */
    DEAD = 2,
    UNRECOGNIZED = -1,
}

export function service_HealthFromJSON(object: any): Service_Health {
    switch (object) {
        case 0:
        case 'HEALTH_UNKNOWN':
            return Service_Health.HEALTH_UNKNOWN;
        case 1:
        case 'ALIVE':
            return Service_Health.ALIVE;
        case 2:
        case 'DEAD':
            return Service_Health.DEAD;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Service_Health.UNRECOGNIZED;
    }
}

export function service_HealthToJSON(object: Service_Health): string {
    switch (object) {
        case Service_Health.HEALTH_UNKNOWN:
            return 'HEALTH_UNKNOWN';
        case Service_Health.ALIVE:
            return 'ALIVE';
        case Service_Health.DEAD:
            return 'DEAD';
        default:
            return 'UNKNOWN';
    }
}

export interface Resources {
    /**
     * ID of the preset for computational resources available to a host (CPU, memory, etc.).
     *
     * All available presets are listed in the [documentation](/docs/managed-sqlserver/concepts/instance-types).
     */
    resourcePresetId: string;
    /** Volume of the storage available to a host. */
    diskSize: number;
    /**
     * Type of the storage environment for the host.
     *
     * Possible values:
     * * `network-hdd` - network HDD drive;
     * * `network-ssd` - network SSD drive;
     * * `local-ssd` - local SSD storage.
     */
    diskTypeId: string;
}

export interface Access {
    /** Allows access for DataLens. */
    dataLens: boolean;
    /** Allows access for Web SQL. */
    webSql: boolean;
}

const baseCluster: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    environment: 0,
    networkId: '',
    health: 0,
    status: 0,
    securityGroupIds: '',
    deletionProtection: false,
    sqlcollation: '',
    hostGroupIds: '',
    serviceAccountId: '',
};

export const Cluster = {
    encode(message: Cluster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
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
            Cluster_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        if (message.environment !== 0) {
            writer.uint32(56).int32(message.environment);
        }
        for (const v of message.monitoring) {
            Monitoring.encode(v!, writer.uint32(66).fork()).ldelim();
        }
        if (message.config !== undefined) {
            ClusterConfig.encode(message.config, writer.uint32(74).fork()).ldelim();
        }
        if (message.networkId !== '') {
            writer.uint32(82).string(message.networkId);
        }
        if (message.health !== 0) {
            writer.uint32(88).int32(message.health);
        }
        if (message.status !== 0) {
            writer.uint32(96).int32(message.status);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(106).string(v!);
        }
        if (message.deletionProtection === true) {
            writer.uint32(112).bool(message.deletionProtection);
        }
        if (message.sqlcollation !== '') {
            writer.uint32(122).string(message.sqlcollation);
        }
        for (const v of message.hostGroupIds) {
            writer.uint32(130).string(v!);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(138).string(message.serviceAccountId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Cluster {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCluster } as Cluster;
        message.labels = {};
        message.monitoring = [];
        message.securityGroupIds = [];
        message.hostGroupIds = [];
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
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
                    message.environment = reader.int32() as any;
                    break;
                case 8:
                    message.monitoring.push(Monitoring.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.config = ClusterConfig.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.networkId = reader.string();
                    break;
                case 11:
                    message.health = reader.int32() as any;
                    break;
                case 12:
                    message.status = reader.int32() as any;
                    break;
                case 13:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 14:
                    message.deletionProtection = reader.bool();
                    break;
                case 15:
                    message.sqlcollation = reader.string();
                    break;
                case 16:
                    message.hostGroupIds.push(reader.string());
                    break;
                case 17:
                    message.serviceAccountId = reader.string();
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
        message.environment =
            object.environment !== undefined && object.environment !== null
                ? cluster_EnvironmentFromJSON(object.environment)
                : 0;
        message.monitoring = (object.monitoring ?? []).map((e: any) => Monitoring.fromJSON(e));
        message.config =
            object.config !== undefined && object.config !== null
                ? ClusterConfig.fromJSON(object.config)
                : undefined;
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : '';
        message.health =
            object.health !== undefined && object.health !== null
                ? cluster_HealthFromJSON(object.health)
                : 0;
        message.status =
            object.status !== undefined && object.status !== null
                ? cluster_StatusFromJSON(object.status)
                : 0;
        message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) => String(e));
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.sqlcollation =
            object.sqlcollation !== undefined && object.sqlcollation !== null
                ? String(object.sqlcollation)
                : '';
        message.hostGroupIds = (object.hostGroupIds ?? []).map((e: any) => String(e));
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        return message;
    },

    toJSON(message: Cluster): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.environment !== undefined &&
            (obj.environment = cluster_EnvironmentToJSON(message.environment));
        if (message.monitoring) {
            obj.monitoring = message.monitoring.map((e) => (e ? Monitoring.toJSON(e) : undefined));
        } else {
            obj.monitoring = [];
        }
        message.config !== undefined &&
            (obj.config = message.config ? ClusterConfig.toJSON(message.config) : undefined);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.health !== undefined && (obj.health = cluster_HealthToJSON(message.health));
        message.status !== undefined && (obj.status = cluster_StatusToJSON(message.status));
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        } else {
            obj.securityGroupIds = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.sqlcollation !== undefined && (obj.sqlcollation = message.sqlcollation);
        if (message.hostGroupIds) {
            obj.hostGroupIds = message.hostGroupIds.map((e) => e);
        } else {
            obj.hostGroupIds = [];
        }
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Cluster>, I>>(object: I): Cluster {
        const message = { ...baseCluster } as Cluster;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
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
        message.environment = object.environment ?? 0;
        message.monitoring = object.monitoring?.map((e) => Monitoring.fromPartial(e)) || [];
        message.config =
            object.config !== undefined && object.config !== null
                ? ClusterConfig.fromPartial(object.config)
                : undefined;
        message.networkId = object.networkId ?? '';
        message.health = object.health ?? 0;
        message.status = object.status ?? 0;
        message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
        message.deletionProtection = object.deletionProtection ?? false;
        message.sqlcollation = object.sqlcollation ?? '';
        message.hostGroupIds = object.hostGroupIds?.map((e) => e) || [];
        message.serviceAccountId = object.serviceAccountId ?? '';
        return message;
    },
};

const baseCluster_LabelsEntry: object = { key: '', value: '' };

export const Cluster_LabelsEntry = {
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

const baseMonitoring: object = { name: '', description: '', link: '' };

export const Monitoring = {
    encode(message: Monitoring, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.link !== '') {
            writer.uint32(26).string(message.link);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Monitoring {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMonitoring } as Monitoring;
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
                    message.link = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Monitoring {
        const message = { ...baseMonitoring } as Monitoring;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.link = object.link !== undefined && object.link !== null ? String(object.link) : '';
        return message;
    },

    toJSON(message: Monitoring): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.link !== undefined && (obj.link = message.link);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Monitoring>, I>>(object: I): Monitoring {
        const message = { ...baseMonitoring } as Monitoring;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.link = object.link ?? '';
        return message;
    },
};

const baseClusterConfig: object = { version: '', secondaryConnections: 0 };

export const ClusterConfig = {
    encode(message: ClusterConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.version !== '') {
            writer.uint32(10).string(message.version);
        }
        if (message.sqlserverConfig2016sp2std !== undefined) {
            SQLServerConfigSet2016sp2std.encode(
                message.sqlserverConfig2016sp2std,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.sqlserverConfig2016sp2ent !== undefined) {
            SQLServerConfigSet2016sp2ent.encode(
                message.sqlserverConfig2016sp2ent,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        if (message.sqlserverConfig2017std !== undefined) {
            SQLServerConfigSet2017std.encode(
                message.sqlserverConfig2017std,
                writer.uint32(66).fork(),
            ).ldelim();
        }
        if (message.sqlserverConfig2017ent !== undefined) {
            SQLServerConfigSet2017ent.encode(
                message.sqlserverConfig2017ent,
                writer.uint32(74).fork(),
            ).ldelim();
        }
        if (message.sqlserverConfig2019std !== undefined) {
            SQLServerConfigSet2019std.encode(
                message.sqlserverConfig2019std,
                writer.uint32(82).fork(),
            ).ldelim();
        }
        if (message.sqlserverConfig2019ent !== undefined) {
            SQLServerConfigSet2019ent.encode(
                message.sqlserverConfig2019ent,
                writer.uint32(90).fork(),
            ).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        if (message.backupWindowStart !== undefined) {
            TimeOfDay.encode(message.backupWindowStart, writer.uint32(34).fork()).ldelim();
        }
        if (message.access !== undefined) {
            Access.encode(message.access, writer.uint32(50).fork()).ldelim();
        }
        if (message.secondaryConnections !== 0) {
            writer.uint32(56).int32(message.secondaryConnections);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClusterConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClusterConfig } as ClusterConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.sqlserverConfig2016sp2std = SQLServerConfigSet2016sp2std.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 5:
                    message.sqlserverConfig2016sp2ent = SQLServerConfigSet2016sp2ent.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 8:
                    message.sqlserverConfig2017std = SQLServerConfigSet2017std.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 9:
                    message.sqlserverConfig2017ent = SQLServerConfigSet2017ent.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 10:
                    message.sqlserverConfig2019std = SQLServerConfigSet2019std.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 11:
                    message.sqlserverConfig2019ent = SQLServerConfigSet2019ent.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.backupWindowStart = TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.access = Access.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.secondaryConnections = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClusterConfig {
        const message = { ...baseClusterConfig } as ClusterConfig;
        message.version =
            object.version !== undefined && object.version !== null ? String(object.version) : '';
        message.sqlserverConfig2016sp2std =
            object.sqlserverConfig_2016sp2std !== undefined &&
            object.sqlserverConfig_2016sp2std !== null
                ? SQLServerConfigSet2016sp2std.fromJSON(object.sqlserverConfig_2016sp2std)
                : undefined;
        message.sqlserverConfig2016sp2ent =
            object.sqlserverConfig_2016sp2ent !== undefined &&
            object.sqlserverConfig_2016sp2ent !== null
                ? SQLServerConfigSet2016sp2ent.fromJSON(object.sqlserverConfig_2016sp2ent)
                : undefined;
        message.sqlserverConfig2017std =
            object.sqlserverConfig_2017std !== undefined && object.sqlserverConfig_2017std !== null
                ? SQLServerConfigSet2017std.fromJSON(object.sqlserverConfig_2017std)
                : undefined;
        message.sqlserverConfig2017ent =
            object.sqlserverConfig_2017ent !== undefined && object.sqlserverConfig_2017ent !== null
                ? SQLServerConfigSet2017ent.fromJSON(object.sqlserverConfig_2017ent)
                : undefined;
        message.sqlserverConfig2019std =
            object.sqlserverConfig_2019std !== undefined && object.sqlserverConfig_2019std !== null
                ? SQLServerConfigSet2019std.fromJSON(object.sqlserverConfig_2019std)
                : undefined;
        message.sqlserverConfig2019ent =
            object.sqlserverConfig_2019ent !== undefined && object.sqlserverConfig_2019ent !== null
                ? SQLServerConfigSet2019ent.fromJSON(object.sqlserverConfig_2019ent)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.backupWindowStart =
            object.backupWindowStart !== undefined && object.backupWindowStart !== null
                ? TimeOfDay.fromJSON(object.backupWindowStart)
                : undefined;
        message.access =
            object.access !== undefined && object.access !== null
                ? Access.fromJSON(object.access)
                : undefined;
        message.secondaryConnections =
            object.secondaryConnections !== undefined && object.secondaryConnections !== null
                ? clusterConfig_SecondaryConnectionsFromJSON(object.secondaryConnections)
                : 0;
        return message;
    },

    toJSON(message: ClusterConfig): unknown {
        const obj: any = {};
        message.version !== undefined && (obj.version = message.version);
        message.sqlserverConfig2016sp2std !== undefined &&
            (obj.sqlserverConfig_2016sp2std = message.sqlserverConfig2016sp2std
                ? SQLServerConfigSet2016sp2std.toJSON(message.sqlserverConfig2016sp2std)
                : undefined);
        message.sqlserverConfig2016sp2ent !== undefined &&
            (obj.sqlserverConfig_2016sp2ent = message.sqlserverConfig2016sp2ent
                ? SQLServerConfigSet2016sp2ent.toJSON(message.sqlserverConfig2016sp2ent)
                : undefined);
        message.sqlserverConfig2017std !== undefined &&
            (obj.sqlserverConfig_2017std = message.sqlserverConfig2017std
                ? SQLServerConfigSet2017std.toJSON(message.sqlserverConfig2017std)
                : undefined);
        message.sqlserverConfig2017ent !== undefined &&
            (obj.sqlserverConfig_2017ent = message.sqlserverConfig2017ent
                ? SQLServerConfigSet2017ent.toJSON(message.sqlserverConfig2017ent)
                : undefined);
        message.sqlserverConfig2019std !== undefined &&
            (obj.sqlserverConfig_2019std = message.sqlserverConfig2019std
                ? SQLServerConfigSet2019std.toJSON(message.sqlserverConfig2019std)
                : undefined);
        message.sqlserverConfig2019ent !== undefined &&
            (obj.sqlserverConfig_2019ent = message.sqlserverConfig2019ent
                ? SQLServerConfigSet2019ent.toJSON(message.sqlserverConfig2019ent)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.backupWindowStart !== undefined &&
            (obj.backupWindowStart = message.backupWindowStart
                ? TimeOfDay.toJSON(message.backupWindowStart)
                : undefined);
        message.access !== undefined &&
            (obj.access = message.access ? Access.toJSON(message.access) : undefined);
        message.secondaryConnections !== undefined &&
            (obj.secondaryConnections = clusterConfig_SecondaryConnectionsToJSON(
                message.secondaryConnections,
            ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClusterConfig>, I>>(object: I): ClusterConfig {
        const message = { ...baseClusterConfig } as ClusterConfig;
        message.version = object.version ?? '';
        message.sqlserverConfig2016sp2std =
            object.sqlserverConfig2016sp2std !== undefined &&
            object.sqlserverConfig2016sp2std !== null
                ? SQLServerConfigSet2016sp2std.fromPartial(object.sqlserverConfig2016sp2std)
                : undefined;
        message.sqlserverConfig2016sp2ent =
            object.sqlserverConfig2016sp2ent !== undefined &&
            object.sqlserverConfig2016sp2ent !== null
                ? SQLServerConfigSet2016sp2ent.fromPartial(object.sqlserverConfig2016sp2ent)
                : undefined;
        message.sqlserverConfig2017std =
            object.sqlserverConfig2017std !== undefined && object.sqlserverConfig2017std !== null
                ? SQLServerConfigSet2017std.fromPartial(object.sqlserverConfig2017std)
                : undefined;
        message.sqlserverConfig2017ent =
            object.sqlserverConfig2017ent !== undefined && object.sqlserverConfig2017ent !== null
                ? SQLServerConfigSet2017ent.fromPartial(object.sqlserverConfig2017ent)
                : undefined;
        message.sqlserverConfig2019std =
            object.sqlserverConfig2019std !== undefined && object.sqlserverConfig2019std !== null
                ? SQLServerConfigSet2019std.fromPartial(object.sqlserverConfig2019std)
                : undefined;
        message.sqlserverConfig2019ent =
            object.sqlserverConfig2019ent !== undefined && object.sqlserverConfig2019ent !== null
                ? SQLServerConfigSet2019ent.fromPartial(object.sqlserverConfig2019ent)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.backupWindowStart =
            object.backupWindowStart !== undefined && object.backupWindowStart !== null
                ? TimeOfDay.fromPartial(object.backupWindowStart)
                : undefined;
        message.access =
            object.access !== undefined && object.access !== null
                ? Access.fromPartial(object.access)
                : undefined;
        message.secondaryConnections = object.secondaryConnections ?? 0;
        return message;
    },
};

const baseHost: object = {
    name: '',
    clusterId: '',
    zoneId: '',
    role: 0,
    health: 0,
    subnetId: '',
    assignPublicIp: false,
};

export const Host = {
    encode(message: Host, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.zoneId !== '') {
            writer.uint32(26).string(message.zoneId);
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(34).fork()).ldelim();
        }
        if (message.role !== 0) {
            writer.uint32(40).int32(message.role);
        }
        if (message.health !== 0) {
            writer.uint32(48).int32(message.health);
        }
        for (const v of message.services) {
            Service.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        if (message.subnetId !== '') {
            writer.uint32(66).string(message.subnetId);
        }
        if (message.assignPublicIp === true) {
            writer.uint32(72).bool(message.assignPublicIp);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Host {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHost } as Host;
        message.services = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.zoneId = reader.string();
                    break;
                case 4:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.role = reader.int32() as any;
                    break;
                case 6:
                    message.health = reader.int32() as any;
                    break;
                case 7:
                    message.services.push(Service.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.subnetId = reader.string();
                    break;
                case 9:
                    message.assignPublicIp = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Host {
        const message = { ...baseHost } as Host;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null ? String(object.zoneId) : '';
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.role =
            object.role !== undefined && object.role !== null ? host_RoleFromJSON(object.role) : 0;
        message.health =
            object.health !== undefined && object.health !== null
                ? host_HealthFromJSON(object.health)
                : 0;
        message.services = (object.services ?? []).map((e: any) => Service.fromJSON(e));
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : '';
        message.assignPublicIp =
            object.assignPublicIp !== undefined && object.assignPublicIp !== null
                ? Boolean(object.assignPublicIp)
                : false;
        return message;
    },

    toJSON(message: Host): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.role !== undefined && (obj.role = host_RoleToJSON(message.role));
        message.health !== undefined && (obj.health = host_HealthToJSON(message.health));
        if (message.services) {
            obj.services = message.services.map((e) => (e ? Service.toJSON(e) : undefined));
        } else {
            obj.services = [];
        }
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.assignPublicIp !== undefined && (obj.assignPublicIp = message.assignPublicIp);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Host>, I>>(object: I): Host {
        const message = { ...baseHost } as Host;
        message.name = object.name ?? '';
        message.clusterId = object.clusterId ?? '';
        message.zoneId = object.zoneId ?? '';
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.role = object.role ?? 0;
        message.health = object.health ?? 0;
        message.services = object.services?.map((e) => Service.fromPartial(e)) || [];
        message.subnetId = object.subnetId ?? '';
        message.assignPublicIp = object.assignPublicIp ?? false;
        return message;
    },
};

const baseService: object = { type: 0, health: 0 };

export const Service = {
    encode(message: Service, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.health !== 0) {
            writer.uint32(16).int32(message.health);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Service {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseService } as Service;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                case 2:
                    message.health = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Service {
        const message = { ...baseService } as Service;
        message.type =
            object.type !== undefined && object.type !== null
                ? service_TypeFromJSON(object.type)
                : 0;
        message.health =
            object.health !== undefined && object.health !== null
                ? service_HealthFromJSON(object.health)
                : 0;
        return message;
    },

    toJSON(message: Service): unknown {
        const obj: any = {};
        message.type !== undefined && (obj.type = service_TypeToJSON(message.type));
        message.health !== undefined && (obj.health = service_HealthToJSON(message.health));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Service>, I>>(object: I): Service {
        const message = { ...baseService } as Service;
        message.type = object.type ?? 0;
        message.health = object.health ?? 0;
        return message;
    },
};

const baseResources: object = { resourcePresetId: '', diskSize: 0, diskTypeId: '' };

export const Resources = {
    encode(message: Resources, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resourcePresetId !== '') {
            writer.uint32(10).string(message.resourcePresetId);
        }
        if (message.diskSize !== 0) {
            writer.uint32(16).int64(message.diskSize);
        }
        if (message.diskTypeId !== '') {
            writer.uint32(26).string(message.diskTypeId);
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
                    message.resourcePresetId = reader.string();
                    break;
                case 2:
                    message.diskSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.diskTypeId = reader.string();
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
        message.resourcePresetId =
            object.resourcePresetId !== undefined && object.resourcePresetId !== null
                ? String(object.resourcePresetId)
                : '';
        message.diskSize =
            object.diskSize !== undefined && object.diskSize !== null ? Number(object.diskSize) : 0;
        message.diskTypeId =
            object.diskTypeId !== undefined && object.diskTypeId !== null
                ? String(object.diskTypeId)
                : '';
        return message;
    },

    toJSON(message: Resources): unknown {
        const obj: any = {};
        message.resourcePresetId !== undefined && (obj.resourcePresetId = message.resourcePresetId);
        message.diskSize !== undefined && (obj.diskSize = Math.round(message.diskSize));
        message.diskTypeId !== undefined && (obj.diskTypeId = message.diskTypeId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Resources>, I>>(object: I): Resources {
        const message = { ...baseResources } as Resources;
        message.resourcePresetId = object.resourcePresetId ?? '';
        message.diskSize = object.diskSize ?? 0;
        message.diskTypeId = object.diskTypeId ?? '';
        return message;
    },
};

const baseAccess: object = { dataLens: false, webSql: false };

export const Access = {
    encode(message: Access, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.dataLens === true) {
            writer.uint32(8).bool(message.dataLens);
        }
        if (message.webSql === true) {
            writer.uint32(16).bool(message.webSql);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Access {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAccess } as Access;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataLens = reader.bool();
                    break;
                case 2:
                    message.webSql = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Access {
        const message = { ...baseAccess } as Access;
        message.dataLens =
            object.dataLens !== undefined && object.dataLens !== null
                ? Boolean(object.dataLens)
                : false;
        message.webSql =
            object.webSql !== undefined && object.webSql !== null ? Boolean(object.webSql) : false;
        return message;
    },

    toJSON(message: Access): unknown {
        const obj: any = {};
        message.dataLens !== undefined && (obj.dataLens = message.dataLens);
        message.webSql !== undefined && (obj.webSql = message.webSql);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Access>, I>>(object: I): Access {
        const message = { ...baseAccess } as Access;
        message.dataLens = object.dataLens ?? false;
        message.webSql = object.webSql ?? false;
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
