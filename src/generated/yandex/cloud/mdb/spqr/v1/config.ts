/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { DoubleValue, Int64Value, BoolValue } from '../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.mdb.spqr.v1';

export enum LogLevel {
    LOG_LEVEL_UNSPECIFIED = 0,
    DEBUG = 1,
    INFO = 2,
    WARNING = 3,
    ERROR = 4,
    FATAL = 5,
    PANIC = 6,
    UNRECOGNIZED = -1,
}

export function logLevelFromJSON(object: any): LogLevel {
    switch (object) {
        case 0:
        case 'LOG_LEVEL_UNSPECIFIED':
            return LogLevel.LOG_LEVEL_UNSPECIFIED;
        case 1:
        case 'DEBUG':
            return LogLevel.DEBUG;
        case 2:
        case 'INFO':
            return LogLevel.INFO;
        case 3:
        case 'WARNING':
            return LogLevel.WARNING;
        case 4:
        case 'ERROR':
            return LogLevel.ERROR;
        case 5:
        case 'FATAL':
            return LogLevel.FATAL;
        case 6:
        case 'PANIC':
            return LogLevel.PANIC;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return LogLevel.UNRECOGNIZED;
    }
}

export function logLevelToJSON(object: LogLevel): string {
    switch (object) {
        case LogLevel.LOG_LEVEL_UNSPECIFIED:
            return 'LOG_LEVEL_UNSPECIFIED';
        case LogLevel.DEBUG:
            return 'DEBUG';
        case LogLevel.INFO:
            return 'INFO';
        case LogLevel.WARNING:
            return 'WARNING';
        case LogLevel.ERROR:
            return 'ERROR';
        case LogLevel.FATAL:
            return 'FATAL';
        case LogLevel.PANIC:
            return 'PANIC';
        default:
            return 'UNKNOWN';
    }
}

/**
 * TODO move to hosts.proto when it's created
 * Configuration for MDB PostgreSQL host
 */
export interface MDBPostgreSQL {
    clusterId: string;
}

export interface SPQRConfig {
    /** SPQR router settings. */
    router?: RouterConfig;
    /** SPQR coordinator settings. */
    coordinator?: CoordinatorConfig;
    /** PostgreSQL settings. */
    postgresql?: PostgreSQLConfig;
    /** SPQR Infra (router+coordinator) settings. */
    infra?: InfraConfig;
    /** SPQR default log level */
    logLevel: LogLevel;
    /** SPQR Balancer settings. */
    balancer?: BalancerSettings;
}

export interface RouterConfig {
    config?: RouterSettings;
    resources?: Resources;
}

export interface CoordinatorConfig {
    config?: CoordinatorSettings;
    resources?: Resources;
}

export interface PostgreSQLConfig {
    config?: PostgreSQLSettings;
    resources?: Resources;
}

export interface InfraConfig {
    resources?: Resources;
    router?: RouterSettings;
    coordinator?: CoordinatorSettings;
}

export interface BalancerSettings {
    cpuThreshold?: number;
    spaceThreshold?: number;
    statIntervalSec?: number;
    maxMoveCount?: number;
    keysPerMove?: number;
    timeout?: number;
}

/** Configuration of a SPQR router. */
export interface RouterSettings {
    showNoticeMessages?: boolean;
    timeQuantiles: number[];
    defaultRouteBehavior: RouterSettings_DefaultRouteBehavior;
    preferSameAvailabilityZone?: boolean;
}

export enum RouterSettings_DefaultRouteBehavior {
    DEFAULT_ROUTE_BEHAVIOR_UNSPECIFIED = 0,
    BLOCK = 1,
    ALLOW = 2,
    UNRECOGNIZED = -1,
}

export function routerSettings_DefaultRouteBehaviorFromJSON(
    object: any,
): RouterSettings_DefaultRouteBehavior {
    switch (object) {
        case 0:
        case 'DEFAULT_ROUTE_BEHAVIOR_UNSPECIFIED':
            return RouterSettings_DefaultRouteBehavior.DEFAULT_ROUTE_BEHAVIOR_UNSPECIFIED;
        case 1:
        case 'BLOCK':
            return RouterSettings_DefaultRouteBehavior.BLOCK;
        case 2:
        case 'ALLOW':
            return RouterSettings_DefaultRouteBehavior.ALLOW;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return RouterSettings_DefaultRouteBehavior.UNRECOGNIZED;
    }
}

export function routerSettings_DefaultRouteBehaviorToJSON(
    object: RouterSettings_DefaultRouteBehavior,
): string {
    switch (object) {
        case RouterSettings_DefaultRouteBehavior.DEFAULT_ROUTE_BEHAVIOR_UNSPECIFIED:
            return 'DEFAULT_ROUTE_BEHAVIOR_UNSPECIFIED';
        case RouterSettings_DefaultRouteBehavior.BLOCK:
            return 'BLOCK';
        case RouterSettings_DefaultRouteBehavior.ALLOW:
            return 'ALLOW';
        default:
            return 'UNKNOWN';
    }
}

/** Configuration of a SPQR coordinator. */
export interface CoordinatorSettings {}

/** Configuration of a PostgreSQL. */
export interface PostgreSQLSettings {}

export interface Resources {
    /**
     * ID of the preset for computational resources available to a host (CPU, memory etc.).
     * All available presets are listed in the [documentation](/docs/managed-spqr/concepts/instance-types).
     */
    resourcePresetId: string;
    /** Volume of the storage available to a host, in bytes. */
    diskSize: number;
    /**
     * Type of the storage environment for the host.
     * Possible values:
     * * network-hdd - network HDD drive,
     * * network-ssd - network SSD drive,
     * * local-ssd - local SSD storage.
     */
    diskTypeId: string;
}

const baseMDBPostgreSQL: object = { clusterId: '' };

export const MDBPostgreSQL = {
    encode(message: MDBPostgreSQL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MDBPostgreSQL {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMDBPostgreSQL } as MDBPostgreSQL;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MDBPostgreSQL {
        const message = { ...baseMDBPostgreSQL } as MDBPostgreSQL;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        return message;
    },

    toJSON(message: MDBPostgreSQL): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MDBPostgreSQL>, I>>(object: I): MDBPostgreSQL {
        const message = { ...baseMDBPostgreSQL } as MDBPostgreSQL;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

const baseSPQRConfig: object = { logLevel: 0 };

export const SPQRConfig = {
    encode(message: SPQRConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.router !== undefined) {
            RouterConfig.encode(message.router, writer.uint32(10).fork()).ldelim();
        }
        if (message.coordinator !== undefined) {
            CoordinatorConfig.encode(message.coordinator, writer.uint32(18).fork()).ldelim();
        }
        if (message.postgresql !== undefined) {
            PostgreSQLConfig.encode(message.postgresql, writer.uint32(26).fork()).ldelim();
        }
        if (message.infra !== undefined) {
            InfraConfig.encode(message.infra, writer.uint32(42).fork()).ldelim();
        }
        if (message.logLevel !== 0) {
            writer.uint32(48).int32(message.logLevel);
        }
        if (message.balancer !== undefined) {
            BalancerSettings.encode(message.balancer, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SPQRConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSPQRConfig } as SPQRConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.router = RouterConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.coordinator = CoordinatorConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.postgresql = PostgreSQLConfig.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.infra = InfraConfig.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.logLevel = reader.int32() as any;
                    break;
                case 7:
                    message.balancer = BalancerSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SPQRConfig {
        const message = { ...baseSPQRConfig } as SPQRConfig;
        message.router =
            object.router !== undefined && object.router !== null
                ? RouterConfig.fromJSON(object.router)
                : undefined;
        message.coordinator =
            object.coordinator !== undefined && object.coordinator !== null
                ? CoordinatorConfig.fromJSON(object.coordinator)
                : undefined;
        message.postgresql =
            object.postgresql !== undefined && object.postgresql !== null
                ? PostgreSQLConfig.fromJSON(object.postgresql)
                : undefined;
        message.infra =
            object.infra !== undefined && object.infra !== null
                ? InfraConfig.fromJSON(object.infra)
                : undefined;
        message.logLevel =
            object.logLevel !== undefined && object.logLevel !== null
                ? logLevelFromJSON(object.logLevel)
                : 0;
        message.balancer =
            object.balancer !== undefined && object.balancer !== null
                ? BalancerSettings.fromJSON(object.balancer)
                : undefined;
        return message;
    },

    toJSON(message: SPQRConfig): unknown {
        const obj: any = {};
        message.router !== undefined &&
            (obj.router = message.router ? RouterConfig.toJSON(message.router) : undefined);
        message.coordinator !== undefined &&
            (obj.coordinator = message.coordinator
                ? CoordinatorConfig.toJSON(message.coordinator)
                : undefined);
        message.postgresql !== undefined &&
            (obj.postgresql = message.postgresql
                ? PostgreSQLConfig.toJSON(message.postgresql)
                : undefined);
        message.infra !== undefined &&
            (obj.infra = message.infra ? InfraConfig.toJSON(message.infra) : undefined);
        message.logLevel !== undefined && (obj.logLevel = logLevelToJSON(message.logLevel));
        message.balancer !== undefined &&
            (obj.balancer = message.balancer
                ? BalancerSettings.toJSON(message.balancer)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SPQRConfig>, I>>(object: I): SPQRConfig {
        const message = { ...baseSPQRConfig } as SPQRConfig;
        message.router =
            object.router !== undefined && object.router !== null
                ? RouterConfig.fromPartial(object.router)
                : undefined;
        message.coordinator =
            object.coordinator !== undefined && object.coordinator !== null
                ? CoordinatorConfig.fromPartial(object.coordinator)
                : undefined;
        message.postgresql =
            object.postgresql !== undefined && object.postgresql !== null
                ? PostgreSQLConfig.fromPartial(object.postgresql)
                : undefined;
        message.infra =
            object.infra !== undefined && object.infra !== null
                ? InfraConfig.fromPartial(object.infra)
                : undefined;
        message.logLevel = object.logLevel ?? 0;
        message.balancer =
            object.balancer !== undefined && object.balancer !== null
                ? BalancerSettings.fromPartial(object.balancer)
                : undefined;
        return message;
    },
};

const baseRouterConfig: object = {};

export const RouterConfig = {
    encode(message: RouterConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            RouterSettings.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RouterConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRouterConfig } as RouterConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = RouterSettings.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RouterConfig {
        const message = { ...baseRouterConfig } as RouterConfig;
        message.config =
            object.config !== undefined && object.config !== null
                ? RouterSettings.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },

    toJSON(message: RouterConfig): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? RouterSettings.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RouterConfig>, I>>(object: I): RouterConfig {
        const message = { ...baseRouterConfig } as RouterConfig;
        message.config =
            object.config !== undefined && object.config !== null
                ? RouterSettings.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};

const baseCoordinatorConfig: object = {};

export const CoordinatorConfig = {
    encode(message: CoordinatorConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            CoordinatorSettings.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CoordinatorConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCoordinatorConfig } as CoordinatorConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = CoordinatorSettings.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CoordinatorConfig {
        const message = { ...baseCoordinatorConfig } as CoordinatorConfig;
        message.config =
            object.config !== undefined && object.config !== null
                ? CoordinatorSettings.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },

    toJSON(message: CoordinatorConfig): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? CoordinatorSettings.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CoordinatorConfig>, I>>(object: I): CoordinatorConfig {
        const message = { ...baseCoordinatorConfig } as CoordinatorConfig;
        message.config =
            object.config !== undefined && object.config !== null
                ? CoordinatorSettings.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};

const basePostgreSQLConfig: object = {};

export const PostgreSQLConfig = {
    encode(message: PostgreSQLConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            PostgreSQLSettings.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PostgreSQLConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePostgreSQLConfig } as PostgreSQLConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = PostgreSQLSettings.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PostgreSQLConfig {
        const message = { ...basePostgreSQLConfig } as PostgreSQLConfig;
        message.config =
            object.config !== undefined && object.config !== null
                ? PostgreSQLSettings.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },

    toJSON(message: PostgreSQLConfig): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? PostgreSQLSettings.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PostgreSQLConfig>, I>>(object: I): PostgreSQLConfig {
        const message = { ...basePostgreSQLConfig } as PostgreSQLConfig;
        message.config =
            object.config !== undefined && object.config !== null
                ? PostgreSQLSettings.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};

const baseInfraConfig: object = {};

export const InfraConfig = {
    encode(message: InfraConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.router !== undefined) {
            RouterSettings.encode(message.router, writer.uint32(26).fork()).ldelim();
        }
        if (message.coordinator !== undefined) {
            CoordinatorSettings.encode(message.coordinator, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): InfraConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInfraConfig } as InfraConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.router = RouterSettings.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.coordinator = CoordinatorSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): InfraConfig {
        const message = { ...baseInfraConfig } as InfraConfig;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.router =
            object.router !== undefined && object.router !== null
                ? RouterSettings.fromJSON(object.router)
                : undefined;
        message.coordinator =
            object.coordinator !== undefined && object.coordinator !== null
                ? CoordinatorSettings.fromJSON(object.coordinator)
                : undefined;
        return message;
    },

    toJSON(message: InfraConfig): unknown {
        const obj: any = {};
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.router !== undefined &&
            (obj.router = message.router ? RouterSettings.toJSON(message.router) : undefined);
        message.coordinator !== undefined &&
            (obj.coordinator = message.coordinator
                ? CoordinatorSettings.toJSON(message.coordinator)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<InfraConfig>, I>>(object: I): InfraConfig {
        const message = { ...baseInfraConfig } as InfraConfig;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.router =
            object.router !== undefined && object.router !== null
                ? RouterSettings.fromPartial(object.router)
                : undefined;
        message.coordinator =
            object.coordinator !== undefined && object.coordinator !== null
                ? CoordinatorSettings.fromPartial(object.coordinator)
                : undefined;
        return message;
    },
};

const baseBalancerSettings: object = {};

export const BalancerSettings = {
    encode(message: BalancerSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.cpuThreshold !== undefined) {
            DoubleValue.encode({ value: message.cpuThreshold! }, writer.uint32(10).fork()).ldelim();
        }
        if (message.spaceThreshold !== undefined) {
            DoubleValue.encode(
                { value: message.spaceThreshold! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.statIntervalSec !== undefined) {
            Int64Value.encode(
                { value: message.statIntervalSec! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.maxMoveCount !== undefined) {
            Int64Value.encode({ value: message.maxMoveCount! }, writer.uint32(34).fork()).ldelim();
        }
        if (message.keysPerMove !== undefined) {
            Int64Value.encode({ value: message.keysPerMove! }, writer.uint32(42).fork()).ldelim();
        }
        if (message.timeout !== undefined) {
            Int64Value.encode({ value: message.timeout! }, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BalancerSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBalancerSettings } as BalancerSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cpuThreshold = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.spaceThreshold = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.statIntervalSec = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.maxMoveCount = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.keysPerMove = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.timeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BalancerSettings {
        const message = { ...baseBalancerSettings } as BalancerSettings;
        message.cpuThreshold =
            object.cpuThreshold !== undefined && object.cpuThreshold !== null
                ? Number(object.cpuThreshold)
                : undefined;
        message.spaceThreshold =
            object.spaceThreshold !== undefined && object.spaceThreshold !== null
                ? Number(object.spaceThreshold)
                : undefined;
        message.statIntervalSec =
            object.statIntervalSec !== undefined && object.statIntervalSec !== null
                ? Number(object.statIntervalSec)
                : undefined;
        message.maxMoveCount =
            object.maxMoveCount !== undefined && object.maxMoveCount !== null
                ? Number(object.maxMoveCount)
                : undefined;
        message.keysPerMove =
            object.keysPerMove !== undefined && object.keysPerMove !== null
                ? Number(object.keysPerMove)
                : undefined;
        message.timeout =
            object.timeout !== undefined && object.timeout !== null
                ? Number(object.timeout)
                : undefined;
        return message;
    },

    toJSON(message: BalancerSettings): unknown {
        const obj: any = {};
        message.cpuThreshold !== undefined && (obj.cpuThreshold = message.cpuThreshold);
        message.spaceThreshold !== undefined && (obj.spaceThreshold = message.spaceThreshold);
        message.statIntervalSec !== undefined && (obj.statIntervalSec = message.statIntervalSec);
        message.maxMoveCount !== undefined && (obj.maxMoveCount = message.maxMoveCount);
        message.keysPerMove !== undefined && (obj.keysPerMove = message.keysPerMove);
        message.timeout !== undefined && (obj.timeout = message.timeout);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BalancerSettings>, I>>(object: I): BalancerSettings {
        const message = { ...baseBalancerSettings } as BalancerSettings;
        message.cpuThreshold = object.cpuThreshold ?? undefined;
        message.spaceThreshold = object.spaceThreshold ?? undefined;
        message.statIntervalSec = object.statIntervalSec ?? undefined;
        message.maxMoveCount = object.maxMoveCount ?? undefined;
        message.keysPerMove = object.keysPerMove ?? undefined;
        message.timeout = object.timeout ?? undefined;
        return message;
    },
};

const baseRouterSettings: object = { timeQuantiles: 0, defaultRouteBehavior: 0 };

export const RouterSettings = {
    encode(message: RouterSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.showNoticeMessages !== undefined) {
            BoolValue.encode(
                { value: message.showNoticeMessages! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        writer.uint32(18).fork();
        for (const v of message.timeQuantiles) {
            writer.double(v);
        }
        writer.ldelim();
        if (message.defaultRouteBehavior !== 0) {
            writer.uint32(32).int32(message.defaultRouteBehavior);
        }
        if (message.preferSameAvailabilityZone !== undefined) {
            BoolValue.encode(
                { value: message.preferSameAvailabilityZone! },
                writer.uint32(42).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RouterSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRouterSettings } as RouterSettings;
        message.timeQuantiles = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.showNoticeMessages = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.timeQuantiles.push(reader.double());
                        }
                    } else {
                        message.timeQuantiles.push(reader.double());
                    }
                    break;
                case 4:
                    message.defaultRouteBehavior = reader.int32() as any;
                    break;
                case 5:
                    message.preferSameAvailabilityZone = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RouterSettings {
        const message = { ...baseRouterSettings } as RouterSettings;
        message.showNoticeMessages =
            object.showNoticeMessages !== undefined && object.showNoticeMessages !== null
                ? Boolean(object.showNoticeMessages)
                : undefined;
        message.timeQuantiles = (object.timeQuantiles ?? []).map((e: any) => Number(e));
        message.defaultRouteBehavior =
            object.defaultRouteBehavior !== undefined && object.defaultRouteBehavior !== null
                ? routerSettings_DefaultRouteBehaviorFromJSON(object.defaultRouteBehavior)
                : 0;
        message.preferSameAvailabilityZone =
            object.preferSameAvailabilityZone !== undefined &&
            object.preferSameAvailabilityZone !== null
                ? Boolean(object.preferSameAvailabilityZone)
                : undefined;
        return message;
    },

    toJSON(message: RouterSettings): unknown {
        const obj: any = {};
        message.showNoticeMessages !== undefined &&
            (obj.showNoticeMessages = message.showNoticeMessages);
        if (message.timeQuantiles) {
            obj.timeQuantiles = message.timeQuantiles.map((e) => e);
        } else {
            obj.timeQuantiles = [];
        }
        message.defaultRouteBehavior !== undefined &&
            (obj.defaultRouteBehavior = routerSettings_DefaultRouteBehaviorToJSON(
                message.defaultRouteBehavior,
            ));
        message.preferSameAvailabilityZone !== undefined &&
            (obj.preferSameAvailabilityZone = message.preferSameAvailabilityZone);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RouterSettings>, I>>(object: I): RouterSettings {
        const message = { ...baseRouterSettings } as RouterSettings;
        message.showNoticeMessages = object.showNoticeMessages ?? undefined;
        message.timeQuantiles = object.timeQuantiles?.map((e) => e) || [];
        message.defaultRouteBehavior = object.defaultRouteBehavior ?? 0;
        message.preferSameAvailabilityZone = object.preferSameAvailabilityZone ?? undefined;
        return message;
    },
};

const baseCoordinatorSettings: object = {};

export const CoordinatorSettings = {
    encode(_: CoordinatorSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CoordinatorSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCoordinatorSettings } as CoordinatorSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): CoordinatorSettings {
        const message = { ...baseCoordinatorSettings } as CoordinatorSettings;
        return message;
    },

    toJSON(_: CoordinatorSettings): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CoordinatorSettings>, I>>(_: I): CoordinatorSettings {
        const message = { ...baseCoordinatorSettings } as CoordinatorSettings;
        return message;
    },
};

const basePostgreSQLSettings: object = {};

export const PostgreSQLSettings = {
    encode(_: PostgreSQLSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PostgreSQLSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePostgreSQLSettings } as PostgreSQLSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): PostgreSQLSettings {
        const message = { ...basePostgreSQLSettings } as PostgreSQLSettings;
        return message;
    },

    toJSON(_: PostgreSQLSettings): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PostgreSQLSettings>, I>>(_: I): PostgreSQLSettings {
        const message = { ...basePostgreSQLSettings } as PostgreSQLSettings;
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
