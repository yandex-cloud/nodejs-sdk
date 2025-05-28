/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Resources, MDBPostgreSQL } from '../../../../../yandex/cloud/mdb/spqr/v1/config';

export const protobufPackage = 'yandex.cloud.mdb.spqr.v1';

export interface Host {
    /**
     * Name of the SPQR host. The host name is assigned by MDB at creation time, and cannot be changed.
     * 1-63 characters long.
     *
     * The name is unique across all MDB hosts that exist on the platform, as it defines the FQDN of the host.
     */
    name: string;
    /** The ID of the SPQR cluster that the host belongs to. */
    clusterId: string;
    /** ID of the availability zone where the SPQR host resides. */
    zoneId: string;
    /** Resources allocated to the SPQR host. */
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
    /** Host type */
    type: Host_Type;
    /** link to wall-e (porto only) */
    walleLink: string;
    /** host state reason from cms (porto only) */
    stateReason: string;
    /** System metrics */
    system?: Host_SystemMetrics;
    /** Shard which this host belongs to. */
    shardName: string;
}

export enum Host_Type {
    TYPE_UNSPECIFIED = 0,
    /** ROUTER - A SPQR Router host. */
    ROUTER = 2,
    /** COORDINATOR - A SPQR Coordinator host. */
    COORDINATOR = 3,
    /** INFRA - A SPQR Infra host (router+coordinator) */
    INFRA = 4,
    /** POSTGRESQL - A PostgreSQL host. */
    POSTGRESQL = 5,
    /** EXTERNAL_POSTGRESQL - An External PostgreSQL host. */
    EXTERNAL_POSTGRESQL = 6,
    /** MDB_POSTGRESQL - A Managed PostgreSQL host */
    MDB_POSTGRESQL = 7,
    UNRECOGNIZED = -1,
}

export function host_TypeFromJSON(object: any): Host_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return Host_Type.TYPE_UNSPECIFIED;
        case 2:
        case 'ROUTER':
            return Host_Type.ROUTER;
        case 3:
        case 'COORDINATOR':
            return Host_Type.COORDINATOR;
        case 4:
        case 'INFRA':
            return Host_Type.INFRA;
        case 5:
        case 'POSTGRESQL':
            return Host_Type.POSTGRESQL;
        case 6:
        case 'EXTERNAL_POSTGRESQL':
            return Host_Type.EXTERNAL_POSTGRESQL;
        case 7:
        case 'MDB_POSTGRESQL':
            return Host_Type.MDB_POSTGRESQL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Host_Type.UNRECOGNIZED;
    }
}

export function host_TypeToJSON(object: Host_Type): string {
    switch (object) {
        case Host_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case Host_Type.ROUTER:
            return 'ROUTER';
        case Host_Type.COORDINATOR:
            return 'COORDINATOR';
        case Host_Type.INFRA:
            return 'INFRA';
        case Host_Type.POSTGRESQL:
            return 'POSTGRESQL';
        case Host_Type.EXTERNAL_POSTGRESQL:
            return 'EXTERNAL_POSTGRESQL';
        case Host_Type.MDB_POSTGRESQL:
            return 'MDB_POSTGRESQL';
        default:
            return 'UNKNOWN';
    }
}

export enum Host_Role {
    /** ROLE_UNKNOWN - Role of the host in the cluster is unknown. */
    ROLE_UNKNOWN = 0,
    /** PRIMARY - Host is the primary SPQR server in the cluster. */
    PRIMARY = 1,
    /** SECONDARY - Host is a secondary SPQR server in the cluster. */
    SECONDARY = 2,
    /** MASTER - Host is the master PostgreSQL server in the cluster. */
    MASTER = 3,
    /** REPLICA - Host is a replica (standby) PostgreSQL server in the cluster. */
    REPLICA = 4,
    UNRECOGNIZED = -1,
}

export function host_RoleFromJSON(object: any): Host_Role {
    switch (object) {
        case 0:
        case 'ROLE_UNKNOWN':
            return Host_Role.ROLE_UNKNOWN;
        case 1:
        case 'PRIMARY':
            return Host_Role.PRIMARY;
        case 2:
        case 'SECONDARY':
            return Host_Role.SECONDARY;
        case 3:
        case 'MASTER':
            return Host_Role.MASTER;
        case 4:
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
        case Host_Role.PRIMARY:
            return 'PRIMARY';
        case Host_Role.SECONDARY:
            return 'SECONDARY';
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
    /** DEAD - The host is inoperable, and cannot perform any of its essential functions. */
    DEAD = 2,
    /** DEGRADED - The host is degraded, and can perform only some of its essential functions. */
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

export interface Host_CPUMetric {
    timestamp: number;
    used: number;
}

export interface Host_MemoryMetric {
    timestamp: number;
    used: number;
    total: number;
}

export interface Host_DiskMetric {
    timestamp: number;
    used: number;
    total: number;
}

export interface Host_SystemMetrics {
    cpu?: Host_CPUMetric;
    memory?: Host_MemoryMetric;
    disk?: Host_DiskMetric;
}

export interface Service {
    /** Type of the service provided by the host. */
    type: Service_Type;
    /** Status code of server availability. */
    health: Service_Health;
}

export enum Service_Type {
    TYPE_UNSPECIFIED = 0,
    /** ROUTER - The host is running a SPQR Router. */
    ROUTER = 2,
    /** COORDINATOR - The host is running a SPQR Coordinator. */
    COORDINATOR = 3,
    /** INFRA - The host is running a SPQR router and coordinator */
    INFRA = 4,
    /** POSTGRESQL - The host is running a PostgreSQL. */
    POSTGRESQL = 5,
    /** EXTERNAL_POSTGRESQL - The host is running a PostgreSQL. */
    EXTERNAL_POSTGRESQL = 6,
    /** MDB_POSTGRESQL - The host is running a PostgreSQL */
    MDB_POSTGRESQL = 7,
    UNRECOGNIZED = -1,
}

export function service_TypeFromJSON(object: any): Service_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return Service_Type.TYPE_UNSPECIFIED;
        case 2:
        case 'ROUTER':
            return Service_Type.ROUTER;
        case 3:
        case 'COORDINATOR':
            return Service_Type.COORDINATOR;
        case 4:
        case 'INFRA':
            return Service_Type.INFRA;
        case 5:
        case 'POSTGRESQL':
            return Service_Type.POSTGRESQL;
        case 6:
        case 'EXTERNAL_POSTGRESQL':
            return Service_Type.EXTERNAL_POSTGRESQL;
        case 7:
        case 'MDB_POSTGRESQL':
            return Service_Type.MDB_POSTGRESQL;
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
        case Service_Type.ROUTER:
            return 'ROUTER';
        case Service_Type.COORDINATOR:
            return 'COORDINATOR';
        case Service_Type.INFRA:
            return 'INFRA';
        case Service_Type.POSTGRESQL:
            return 'POSTGRESQL';
        case Service_Type.EXTERNAL_POSTGRESQL:
            return 'EXTERNAL_POSTGRESQL';
        case Service_Type.MDB_POSTGRESQL:
            return 'MDB_POSTGRESQL';
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

export interface HostSpec {
    /**
     * ID of the availability zone where the host resides.
     * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request.
     */
    zoneId: string;
    /**
     * ID of the subnet that the host should belong to. This subnet should be a part
     * of the network that the cluster belongs to.
     * The network ID is set in the [Cluster.network_id] field.
     */
    subnetId: string;
    /**
     * Whether the host should get a public IP address on creation.
     *
     * After a host has been created, this setting cannot be changed. To remove an assigned public IP, or to assign
     * a public IP to a host without one, recreate the host with [assign_public_ip] set as needed.
     *
     * Possible values:
     * * false - don't assign a public IP to the host.
     * * true - the host should have a public IP address.
     */
    assignPublicIp: boolean;
    /** Type of the host to be deployed. */
    type: Host_Type;
    /**
     * Name of the shard that the host belongs to.
     * If empty, host doesn't belong to any shard
     */
    shardName: string;
    mdbPostgresql?: MDBPostgreSQL;
}

const baseHost: object = {
    name: '',
    clusterId: '',
    zoneId: '',
    role: 0,
    health: 0,
    subnetId: '',
    assignPublicIp: false,
    type: 0,
    walleLink: '',
    stateReason: '',
    shardName: '',
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
        if (message.type !== 0) {
            writer.uint32(80).int32(message.type);
        }
        if (message.walleLink !== '') {
            writer.uint32(90).string(message.walleLink);
        }
        if (message.stateReason !== '') {
            writer.uint32(98).string(message.stateReason);
        }
        if (message.system !== undefined) {
            Host_SystemMetrics.encode(message.system, writer.uint32(106).fork()).ldelim();
        }
        if (message.shardName !== '') {
            writer.uint32(114).string(message.shardName);
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
                case 10:
                    message.type = reader.int32() as any;
                    break;
                case 11:
                    message.walleLink = reader.string();
                    break;
                case 12:
                    message.stateReason = reader.string();
                    break;
                case 13:
                    message.system = Host_SystemMetrics.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.shardName = reader.string();
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
        message.type =
            object.type !== undefined && object.type !== null ? host_TypeFromJSON(object.type) : 0;
        message.walleLink =
            object.walleLink !== undefined && object.walleLink !== null
                ? String(object.walleLink)
                : '';
        message.stateReason =
            object.stateReason !== undefined && object.stateReason !== null
                ? String(object.stateReason)
                : '';
        message.system =
            object.system !== undefined && object.system !== null
                ? Host_SystemMetrics.fromJSON(object.system)
                : undefined;
        message.shardName =
            object.shardName !== undefined && object.shardName !== null
                ? String(object.shardName)
                : '';
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
        message.type !== undefined && (obj.type = host_TypeToJSON(message.type));
        message.walleLink !== undefined && (obj.walleLink = message.walleLink);
        message.stateReason !== undefined && (obj.stateReason = message.stateReason);
        message.system !== undefined &&
            (obj.system = message.system ? Host_SystemMetrics.toJSON(message.system) : undefined);
        message.shardName !== undefined && (obj.shardName = message.shardName);
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
        message.type = object.type ?? 0;
        message.walleLink = object.walleLink ?? '';
        message.stateReason = object.stateReason ?? '';
        message.system =
            object.system !== undefined && object.system !== null
                ? Host_SystemMetrics.fromPartial(object.system)
                : undefined;
        message.shardName = object.shardName ?? '';
        return message;
    },
};

const baseHost_CPUMetric: object = { timestamp: 0, used: 0 };

export const Host_CPUMetric = {
    encode(message: Host_CPUMetric, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.timestamp !== 0) {
            writer.uint32(8).int64(message.timestamp);
        }
        if (message.used !== 0) {
            writer.uint32(17).double(message.used);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Host_CPUMetric {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHost_CPUMetric } as Host_CPUMetric;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.used = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Host_CPUMetric {
        const message = { ...baseHost_CPUMetric } as Host_CPUMetric;
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? Number(object.timestamp)
                : 0;
        message.used = object.used !== undefined && object.used !== null ? Number(object.used) : 0;
        return message;
    },

    toJSON(message: Host_CPUMetric): unknown {
        const obj: any = {};
        message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
        message.used !== undefined && (obj.used = message.used);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Host_CPUMetric>, I>>(object: I): Host_CPUMetric {
        const message = { ...baseHost_CPUMetric } as Host_CPUMetric;
        message.timestamp = object.timestamp ?? 0;
        message.used = object.used ?? 0;
        return message;
    },
};

const baseHost_MemoryMetric: object = { timestamp: 0, used: 0, total: 0 };

export const Host_MemoryMetric = {
    encode(message: Host_MemoryMetric, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.timestamp !== 0) {
            writer.uint32(8).int64(message.timestamp);
        }
        if (message.used !== 0) {
            writer.uint32(16).int64(message.used);
        }
        if (message.total !== 0) {
            writer.uint32(24).int64(message.total);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Host_MemoryMetric {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHost_MemoryMetric } as Host_MemoryMetric;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.used = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.total = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Host_MemoryMetric {
        const message = { ...baseHost_MemoryMetric } as Host_MemoryMetric;
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? Number(object.timestamp)
                : 0;
        message.used = object.used !== undefined && object.used !== null ? Number(object.used) : 0;
        message.total =
            object.total !== undefined && object.total !== null ? Number(object.total) : 0;
        return message;
    },

    toJSON(message: Host_MemoryMetric): unknown {
        const obj: any = {};
        message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
        message.used !== undefined && (obj.used = Math.round(message.used));
        message.total !== undefined && (obj.total = Math.round(message.total));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Host_MemoryMetric>, I>>(object: I): Host_MemoryMetric {
        const message = { ...baseHost_MemoryMetric } as Host_MemoryMetric;
        message.timestamp = object.timestamp ?? 0;
        message.used = object.used ?? 0;
        message.total = object.total ?? 0;
        return message;
    },
};

const baseHost_DiskMetric: object = { timestamp: 0, used: 0, total: 0 };

export const Host_DiskMetric = {
    encode(message: Host_DiskMetric, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.timestamp !== 0) {
            writer.uint32(8).int64(message.timestamp);
        }
        if (message.used !== 0) {
            writer.uint32(16).int64(message.used);
        }
        if (message.total !== 0) {
            writer.uint32(24).int64(message.total);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Host_DiskMetric {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHost_DiskMetric } as Host_DiskMetric;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.used = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.total = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Host_DiskMetric {
        const message = { ...baseHost_DiskMetric } as Host_DiskMetric;
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? Number(object.timestamp)
                : 0;
        message.used = object.used !== undefined && object.used !== null ? Number(object.used) : 0;
        message.total =
            object.total !== undefined && object.total !== null ? Number(object.total) : 0;
        return message;
    },

    toJSON(message: Host_DiskMetric): unknown {
        const obj: any = {};
        message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
        message.used !== undefined && (obj.used = Math.round(message.used));
        message.total !== undefined && (obj.total = Math.round(message.total));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Host_DiskMetric>, I>>(object: I): Host_DiskMetric {
        const message = { ...baseHost_DiskMetric } as Host_DiskMetric;
        message.timestamp = object.timestamp ?? 0;
        message.used = object.used ?? 0;
        message.total = object.total ?? 0;
        return message;
    },
};

const baseHost_SystemMetrics: object = {};

export const Host_SystemMetrics = {
    encode(message: Host_SystemMetrics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.cpu !== undefined) {
            Host_CPUMetric.encode(message.cpu, writer.uint32(10).fork()).ldelim();
        }
        if (message.memory !== undefined) {
            Host_MemoryMetric.encode(message.memory, writer.uint32(18).fork()).ldelim();
        }
        if (message.disk !== undefined) {
            Host_DiskMetric.encode(message.disk, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Host_SystemMetrics {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHost_SystemMetrics } as Host_SystemMetrics;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cpu = Host_CPUMetric.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.memory = Host_MemoryMetric.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.disk = Host_DiskMetric.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Host_SystemMetrics {
        const message = { ...baseHost_SystemMetrics } as Host_SystemMetrics;
        message.cpu =
            object.cpu !== undefined && object.cpu !== null
                ? Host_CPUMetric.fromJSON(object.cpu)
                : undefined;
        message.memory =
            object.memory !== undefined && object.memory !== null
                ? Host_MemoryMetric.fromJSON(object.memory)
                : undefined;
        message.disk =
            object.disk !== undefined && object.disk !== null
                ? Host_DiskMetric.fromJSON(object.disk)
                : undefined;
        return message;
    },

    toJSON(message: Host_SystemMetrics): unknown {
        const obj: any = {};
        message.cpu !== undefined &&
            (obj.cpu = message.cpu ? Host_CPUMetric.toJSON(message.cpu) : undefined);
        message.memory !== undefined &&
            (obj.memory = message.memory ? Host_MemoryMetric.toJSON(message.memory) : undefined);
        message.disk !== undefined &&
            (obj.disk = message.disk ? Host_DiskMetric.toJSON(message.disk) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Host_SystemMetrics>, I>>(
        object: I,
    ): Host_SystemMetrics {
        const message = { ...baseHost_SystemMetrics } as Host_SystemMetrics;
        message.cpu =
            object.cpu !== undefined && object.cpu !== null
                ? Host_CPUMetric.fromPartial(object.cpu)
                : undefined;
        message.memory =
            object.memory !== undefined && object.memory !== null
                ? Host_MemoryMetric.fromPartial(object.memory)
                : undefined;
        message.disk =
            object.disk !== undefined && object.disk !== null
                ? Host_DiskMetric.fromPartial(object.disk)
                : undefined;
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

const baseHostSpec: object = {
    zoneId: '',
    subnetId: '',
    assignPublicIp: false,
    type: 0,
    shardName: '',
};

export const HostSpec = {
    encode(message: HostSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.zoneId !== '') {
            writer.uint32(10).string(message.zoneId);
        }
        if (message.subnetId !== '') {
            writer.uint32(18).string(message.subnetId);
        }
        if (message.assignPublicIp === true) {
            writer.uint32(24).bool(message.assignPublicIp);
        }
        if (message.type !== 0) {
            writer.uint32(32).int32(message.type);
        }
        if (message.shardName !== '') {
            writer.uint32(42).string(message.shardName);
        }
        if (message.mdbPostgresql !== undefined) {
            MDBPostgreSQL.encode(message.mdbPostgresql, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HostSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHostSpec } as HostSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zoneId = reader.string();
                    break;
                case 2:
                    message.subnetId = reader.string();
                    break;
                case 3:
                    message.assignPublicIp = reader.bool();
                    break;
                case 4:
                    message.type = reader.int32() as any;
                    break;
                case 5:
                    message.shardName = reader.string();
                    break;
                case 6:
                    message.mdbPostgresql = MDBPostgreSQL.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HostSpec {
        const message = { ...baseHostSpec } as HostSpec;
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null ? String(object.zoneId) : '';
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : '';
        message.assignPublicIp =
            object.assignPublicIp !== undefined && object.assignPublicIp !== null
                ? Boolean(object.assignPublicIp)
                : false;
        message.type =
            object.type !== undefined && object.type !== null ? host_TypeFromJSON(object.type) : 0;
        message.shardName =
            object.shardName !== undefined && object.shardName !== null
                ? String(object.shardName)
                : '';
        message.mdbPostgresql =
            object.mdbPostgresql !== undefined && object.mdbPostgresql !== null
                ? MDBPostgreSQL.fromJSON(object.mdbPostgresql)
                : undefined;
        return message;
    },

    toJSON(message: HostSpec): unknown {
        const obj: any = {};
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.assignPublicIp !== undefined && (obj.assignPublicIp = message.assignPublicIp);
        message.type !== undefined && (obj.type = host_TypeToJSON(message.type));
        message.shardName !== undefined && (obj.shardName = message.shardName);
        message.mdbPostgresql !== undefined &&
            (obj.mdbPostgresql = message.mdbPostgresql
                ? MDBPostgreSQL.toJSON(message.mdbPostgresql)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HostSpec>, I>>(object: I): HostSpec {
        const message = { ...baseHostSpec } as HostSpec;
        message.zoneId = object.zoneId ?? '';
        message.subnetId = object.subnetId ?? '';
        message.assignPublicIp = object.assignPublicIp ?? false;
        message.type = object.type ?? 0;
        message.shardName = object.shardName ?? '';
        message.mdbPostgresql =
            object.mdbPostgresql !== undefined && object.mdbPostgresql !== null
                ? MDBPostgreSQL.fromPartial(object.mdbPostgresql)
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
