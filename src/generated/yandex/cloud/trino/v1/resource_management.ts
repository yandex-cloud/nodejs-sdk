/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.trino.v1';

export interface ResourceManagementConfig {
    /** Resource groups configuration. */
    resourceGroups?: ResourceGroupsConfig;
    /** Query management confiugration. */
    query?: QueryConfig;
}

export interface QueryConfig {
    /** Query properties. */
    properties: { [key: string]: string };
}

export interface QueryConfig_PropertiesEntry {
    key: string;
    value: string;
}

export interface ResourceGroupsConfig {
    /** Root resource groups configuration. */
    rootGroups: ResourceGroupConfig[];
    /** Selector rules for routing queries to resource groups. */
    selectors: SelectorRuleConfig[];
    /** Period for CPU quota calculations. */
    cpuQuotaPeriod: string;
}

export interface ResourceGroupConfig {
    /** Resource group name. */
    name: string;
    /** Maximum number of queued queries. */
    maxQueued: number;
    /** Number of concurrently running queries after which new queries only run if peer groups are below soft limits. */
    softConcurrencyLimit: number;
    /** Maximum number of queries that can run concurrently. */
    hardConcurrencyLimit: number;
    /** Maximum amount of distributed memory this group can use. */
    softMemoryLimit: string;
    /** Maximum CPU time per period this group can use before applying penalty to running queries (requires hard_cpu_limit). */
    softCpuLimit: string;
    /** Maximum CPU time per period this group can use. */
    hardCpuLimit: string;
    /** Policy for selecting queued queries and sub-group eligibility. */
    schedulingPolicy: ResourceGroupConfig_SchedulingPolicy;
    /** Weight for weighted and weighted_fair scheduling policies. */
    schedulingWeight: number;
    /** List of sub-groups. */
    subGroups: ResourceGroupConfig[];
}

export enum ResourceGroupConfig_SchedulingPolicy {
    SCHEDULING_POLICY_UNSPECIFIED = 0,
    /** FAIR - Queued queries processed first-in-first-out, sub-groups take turns starting queries. */
    FAIR = 1,
    /** WEIGHTED - Queries selected stochastically by priority, sub-groups selected by schedulingWeight. */
    WEIGHTED = 2,
    /** WEIGHTED_FAIR - Sub-groups selected by schedulingWeight and concurrency relative to their share. */
    WEIGHTED_FAIR = 3,
    /** QUERY_PRIORITY - Queued queries selected strictly by priority. */
    QUERY_PRIORITY = 4,
    UNRECOGNIZED = -1,
}

export function resourceGroupConfig_SchedulingPolicyFromJSON(
    object: any,
): ResourceGroupConfig_SchedulingPolicy {
    switch (object) {
        case 0:
        case 'SCHEDULING_POLICY_UNSPECIFIED':
            return ResourceGroupConfig_SchedulingPolicy.SCHEDULING_POLICY_UNSPECIFIED;
        case 1:
        case 'FAIR':
            return ResourceGroupConfig_SchedulingPolicy.FAIR;
        case 2:
        case 'WEIGHTED':
            return ResourceGroupConfig_SchedulingPolicy.WEIGHTED;
        case 3:
        case 'WEIGHTED_FAIR':
            return ResourceGroupConfig_SchedulingPolicy.WEIGHTED_FAIR;
        case 4:
        case 'QUERY_PRIORITY':
            return ResourceGroupConfig_SchedulingPolicy.QUERY_PRIORITY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ResourceGroupConfig_SchedulingPolicy.UNRECOGNIZED;
    }
}

export function resourceGroupConfig_SchedulingPolicyToJSON(
    object: ResourceGroupConfig_SchedulingPolicy,
): string {
    switch (object) {
        case ResourceGroupConfig_SchedulingPolicy.SCHEDULING_POLICY_UNSPECIFIED:
            return 'SCHEDULING_POLICY_UNSPECIFIED';
        case ResourceGroupConfig_SchedulingPolicy.FAIR:
            return 'FAIR';
        case ResourceGroupConfig_SchedulingPolicy.WEIGHTED:
            return 'WEIGHTED';
        case ResourceGroupConfig_SchedulingPolicy.WEIGHTED_FAIR:
            return 'WEIGHTED_FAIR';
        case ResourceGroupConfig_SchedulingPolicy.QUERY_PRIORITY:
            return 'QUERY_PRIORITY';
        default:
            return 'UNKNOWN';
    }
}

export interface SelectorRuleConfig {
    /** Regex to match against username. */
    user: string;
    /** Regex to match against user groups. */
    userGroup: string;
    /** Regex to match against query source. */
    source: string;
    /** Type of query to match. */
    queryType: SelectorRuleConfig_QueryType;
    /** Tags that must all be present in the query's client tags. */
    clientTags: string[];
    /** Target resource group name. */
    group: string;
}

export enum SelectorRuleConfig_QueryType {
    /** QUERY_TYPE_UNSPECIFIED - Query type is unspecified. */
    QUERY_TYPE_UNSPECIFIED = 0,
    /** SELECT - SELECT query. */
    SELECT = 1,
    /** EXPLAIN - EXPLAIN query. */
    EXPLAIN = 2,
    /** DESCRIBE - DESCRIBE query. */
    DESCRIBE = 3,
    /** INSERT - INSERT query. */
    INSERT = 4,
    /** UPDATE - UPDATE query. */
    UPDATE = 5,
    /** MERGE - MERGE query. */
    MERGE = 6,
    /** DELETE - DELECT query. */
    DELETE = 7,
    /** ANALYZE - ANALYZE query. */
    ANALYZE = 8,
    /** DATA_DEFINITION - Data definition query. */
    DATA_DEFINITION = 9,
    /** ALTER_TABLE_EXECUTE - ALTER TABLE EXECUTE query. */
    ALTER_TABLE_EXECUTE = 10,
    UNRECOGNIZED = -1,
}

export function selectorRuleConfig_QueryTypeFromJSON(object: any): SelectorRuleConfig_QueryType {
    switch (object) {
        case 0:
        case 'QUERY_TYPE_UNSPECIFIED':
            return SelectorRuleConfig_QueryType.QUERY_TYPE_UNSPECIFIED;
        case 1:
        case 'SELECT':
            return SelectorRuleConfig_QueryType.SELECT;
        case 2:
        case 'EXPLAIN':
            return SelectorRuleConfig_QueryType.EXPLAIN;
        case 3:
        case 'DESCRIBE':
            return SelectorRuleConfig_QueryType.DESCRIBE;
        case 4:
        case 'INSERT':
            return SelectorRuleConfig_QueryType.INSERT;
        case 5:
        case 'UPDATE':
            return SelectorRuleConfig_QueryType.UPDATE;
        case 6:
        case 'MERGE':
            return SelectorRuleConfig_QueryType.MERGE;
        case 7:
        case 'DELETE':
            return SelectorRuleConfig_QueryType.DELETE;
        case 8:
        case 'ANALYZE':
            return SelectorRuleConfig_QueryType.ANALYZE;
        case 9:
        case 'DATA_DEFINITION':
            return SelectorRuleConfig_QueryType.DATA_DEFINITION;
        case 10:
        case 'ALTER_TABLE_EXECUTE':
            return SelectorRuleConfig_QueryType.ALTER_TABLE_EXECUTE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SelectorRuleConfig_QueryType.UNRECOGNIZED;
    }
}

export function selectorRuleConfig_QueryTypeToJSON(object: SelectorRuleConfig_QueryType): string {
    switch (object) {
        case SelectorRuleConfig_QueryType.QUERY_TYPE_UNSPECIFIED:
            return 'QUERY_TYPE_UNSPECIFIED';
        case SelectorRuleConfig_QueryType.SELECT:
            return 'SELECT';
        case SelectorRuleConfig_QueryType.EXPLAIN:
            return 'EXPLAIN';
        case SelectorRuleConfig_QueryType.DESCRIBE:
            return 'DESCRIBE';
        case SelectorRuleConfig_QueryType.INSERT:
            return 'INSERT';
        case SelectorRuleConfig_QueryType.UPDATE:
            return 'UPDATE';
        case SelectorRuleConfig_QueryType.MERGE:
            return 'MERGE';
        case SelectorRuleConfig_QueryType.DELETE:
            return 'DELETE';
        case SelectorRuleConfig_QueryType.ANALYZE:
            return 'ANALYZE';
        case SelectorRuleConfig_QueryType.DATA_DEFINITION:
            return 'DATA_DEFINITION';
        case SelectorRuleConfig_QueryType.ALTER_TABLE_EXECUTE:
            return 'ALTER_TABLE_EXECUTE';
        default:
            return 'UNKNOWN';
    }
}

const baseResourceManagementConfig: object = {};

export const ResourceManagementConfig: {
    encode(message: ResourceManagementConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceManagementConfig;
    fromJSON(object: any): ResourceManagementConfig;
    toJSON(message: ResourceManagementConfig): unknown;
    fromPartial<I extends Exact<DeepPartial<ResourceManagementConfig>, I>>(object: I): ResourceManagementConfig;
} = {
    encode(
        message: ResourceManagementConfig,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourceGroups !== undefined) {
            ResourceGroupsConfig.encode(message.resourceGroups, writer.uint32(10).fork()).ldelim();
        }
        if (message.query !== undefined) {
            QueryConfig.encode(message.query, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceManagementConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourceManagementConfig } as ResourceManagementConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceGroups = ResourceGroupsConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.query = QueryConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceManagementConfig {
        const message = { ...baseResourceManagementConfig } as ResourceManagementConfig;
        message.resourceGroups =
            object.resourceGroups !== undefined && object.resourceGroups !== null
                ? ResourceGroupsConfig.fromJSON(object.resourceGroups)
                : undefined;
        message.query =
            object.query !== undefined && object.query !== null
                ? QueryConfig.fromJSON(object.query)
                : undefined;
        return message;
    },

    toJSON(message: ResourceManagementConfig): unknown {
        const obj: any = {};
        message.resourceGroups !== undefined &&
            (obj.resourceGroups = message.resourceGroups
                ? ResourceGroupsConfig.toJSON(message.resourceGroups)
                : undefined);
        message.query !== undefined &&
            (obj.query = message.query ? QueryConfig.toJSON(message.query) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourceManagementConfig>, I>>(
        object: I,
    ): ResourceManagementConfig {
        const message = { ...baseResourceManagementConfig } as ResourceManagementConfig;
        message.resourceGroups =
            object.resourceGroups !== undefined && object.resourceGroups !== null
                ? ResourceGroupsConfig.fromPartial(object.resourceGroups)
                : undefined;
        message.query =
            object.query !== undefined && object.query !== null
                ? QueryConfig.fromPartial(object.query)
                : undefined;
        return message;
    },
};

const baseQueryConfig: object = {};

export const QueryConfig: {
    encode(message: QueryConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfig;
    fromJSON(object: any): QueryConfig;
    toJSON(message: QueryConfig): unknown;
    fromPartial<I extends Exact<DeepPartial<QueryConfig>, I>>(object: I): QueryConfig;
} = {
    encode(message: QueryConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        Object.entries(message.properties).forEach(([key, value]) => {
            QueryConfig_PropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(10).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryConfig } as QueryConfig;
        message.properties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = QueryConfig_PropertiesEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.properties[entry1.key] = entry1.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryConfig {
        const message = { ...baseQueryConfig } as QueryConfig;
        message.properties = Object.entries(object.properties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },

    toJSON(message: QueryConfig): unknown {
        const obj: any = {};
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<QueryConfig>, I>>(object: I): QueryConfig {
        const message = { ...baseQueryConfig } as QueryConfig;
        message.properties = Object.entries(object.properties ?? {}).reduce<{
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

const baseQueryConfig_PropertiesEntry: object = { key: '', value: '' };

export const QueryConfig_PropertiesEntry: {
    encode(message: QueryConfig_PropertiesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfig_PropertiesEntry;
    fromJSON(object: any): QueryConfig_PropertiesEntry;
    toJSON(message: QueryConfig_PropertiesEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<QueryConfig_PropertiesEntry>, I>>(object: I): QueryConfig_PropertiesEntry;
} = {
    encode(
        message: QueryConfig_PropertiesEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfig_PropertiesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryConfig_PropertiesEntry } as QueryConfig_PropertiesEntry;
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

    fromJSON(object: any): QueryConfig_PropertiesEntry {
        const message = { ...baseQueryConfig_PropertiesEntry } as QueryConfig_PropertiesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: QueryConfig_PropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<QueryConfig_PropertiesEntry>, I>>(
        object: I,
    ): QueryConfig_PropertiesEntry {
        const message = { ...baseQueryConfig_PropertiesEntry } as QueryConfig_PropertiesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseResourceGroupsConfig: object = { cpuQuotaPeriod: '' };

export const ResourceGroupsConfig: {
    encode(message: ResourceGroupsConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceGroupsConfig;
    fromJSON(object: any): ResourceGroupsConfig;
    toJSON(message: ResourceGroupsConfig): unknown;
    fromPartial<I extends Exact<DeepPartial<ResourceGroupsConfig>, I>>(object: I): ResourceGroupsConfig;
} = {
    encode(message: ResourceGroupsConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.rootGroups) {
            ResourceGroupConfig.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.selectors) {
            SelectorRuleConfig.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        if (message.cpuQuotaPeriod !== '') {
            writer.uint32(26).string(message.cpuQuotaPeriod);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceGroupsConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourceGroupsConfig } as ResourceGroupsConfig;
        message.rootGroups = [];
        message.selectors = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rootGroups.push(ResourceGroupConfig.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.selectors.push(SelectorRuleConfig.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.cpuQuotaPeriod = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceGroupsConfig {
        const message = { ...baseResourceGroupsConfig } as ResourceGroupsConfig;
        message.rootGroups = (object.rootGroups ?? []).map((e: any) =>
            ResourceGroupConfig.fromJSON(e),
        );
        message.selectors = (object.selectors ?? []).map((e: any) =>
            SelectorRuleConfig.fromJSON(e),
        );
        message.cpuQuotaPeriod =
            object.cpuQuotaPeriod !== undefined && object.cpuQuotaPeriod !== null
                ? String(object.cpuQuotaPeriod)
                : '';
        return message;
    },

    toJSON(message: ResourceGroupsConfig): unknown {
        const obj: any = {};
        if (message.rootGroups) {
            obj.rootGroups = message.rootGroups.map((e) =>
                e ? ResourceGroupConfig.toJSON(e) : undefined,
            );
        } else {
            obj.rootGroups = [];
        }
        if (message.selectors) {
            obj.selectors = message.selectors.map((e) =>
                e ? SelectorRuleConfig.toJSON(e) : undefined,
            );
        } else {
            obj.selectors = [];
        }
        message.cpuQuotaPeriod !== undefined && (obj.cpuQuotaPeriod = message.cpuQuotaPeriod);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourceGroupsConfig>, I>>(
        object: I,
    ): ResourceGroupsConfig {
        const message = { ...baseResourceGroupsConfig } as ResourceGroupsConfig;
        message.rootGroups =
            object.rootGroups?.map((e) => ResourceGroupConfig.fromPartial(e)) || [];
        message.selectors = object.selectors?.map((e) => SelectorRuleConfig.fromPartial(e)) || [];
        message.cpuQuotaPeriod = object.cpuQuotaPeriod ?? '';
        return message;
    },
};

const baseResourceGroupConfig: object = {
    name: '',
    maxQueued: 0,
    softConcurrencyLimit: 0,
    hardConcurrencyLimit: 0,
    softMemoryLimit: '',
    softCpuLimit: '',
    hardCpuLimit: '',
    schedulingPolicy: 0,
    schedulingWeight: 0,
};

export const ResourceGroupConfig: {
    encode(message: ResourceGroupConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceGroupConfig;
    fromJSON(object: any): ResourceGroupConfig;
    toJSON(message: ResourceGroupConfig): unknown;
    fromPartial<I extends Exact<DeepPartial<ResourceGroupConfig>, I>>(object: I): ResourceGroupConfig;
} = {
    encode(message: ResourceGroupConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.maxQueued !== 0) {
            writer.uint32(16).int64(message.maxQueued);
        }
        if (message.softConcurrencyLimit !== 0) {
            writer.uint32(24).int64(message.softConcurrencyLimit);
        }
        if (message.hardConcurrencyLimit !== 0) {
            writer.uint32(32).int64(message.hardConcurrencyLimit);
        }
        if (message.softMemoryLimit !== '') {
            writer.uint32(42).string(message.softMemoryLimit);
        }
        if (message.softCpuLimit !== '') {
            writer.uint32(50).string(message.softCpuLimit);
        }
        if (message.hardCpuLimit !== '') {
            writer.uint32(58).string(message.hardCpuLimit);
        }
        if (message.schedulingPolicy !== 0) {
            writer.uint32(64).int32(message.schedulingPolicy);
        }
        if (message.schedulingWeight !== 0) {
            writer.uint32(72).int64(message.schedulingWeight);
        }
        for (const v of message.subGroups) {
            ResourceGroupConfig.encode(v!, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceGroupConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourceGroupConfig } as ResourceGroupConfig;
        message.subGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.maxQueued = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.softConcurrencyLimit = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.hardConcurrencyLimit = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.softMemoryLimit = reader.string();
                    break;
                case 6:
                    message.softCpuLimit = reader.string();
                    break;
                case 7:
                    message.hardCpuLimit = reader.string();
                    break;
                case 8:
                    message.schedulingPolicy = reader.int32() as any;
                    break;
                case 9:
                    message.schedulingWeight = longToNumber(reader.int64() as Long);
                    break;
                case 11:
                    message.subGroups.push(ResourceGroupConfig.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceGroupConfig {
        const message = { ...baseResourceGroupConfig } as ResourceGroupConfig;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.maxQueued =
            object.maxQueued !== undefined && object.maxQueued !== null
                ? Number(object.maxQueued)
                : 0;
        message.softConcurrencyLimit =
            object.softConcurrencyLimit !== undefined && object.softConcurrencyLimit !== null
                ? Number(object.softConcurrencyLimit)
                : 0;
        message.hardConcurrencyLimit =
            object.hardConcurrencyLimit !== undefined && object.hardConcurrencyLimit !== null
                ? Number(object.hardConcurrencyLimit)
                : 0;
        message.softMemoryLimit =
            object.softMemoryLimit !== undefined && object.softMemoryLimit !== null
                ? String(object.softMemoryLimit)
                : '';
        message.softCpuLimit =
            object.softCpuLimit !== undefined && object.softCpuLimit !== null
                ? String(object.softCpuLimit)
                : '';
        message.hardCpuLimit =
            object.hardCpuLimit !== undefined && object.hardCpuLimit !== null
                ? String(object.hardCpuLimit)
                : '';
        message.schedulingPolicy =
            object.schedulingPolicy !== undefined && object.schedulingPolicy !== null
                ? resourceGroupConfig_SchedulingPolicyFromJSON(object.schedulingPolicy)
                : 0;
        message.schedulingWeight =
            object.schedulingWeight !== undefined && object.schedulingWeight !== null
                ? Number(object.schedulingWeight)
                : 0;
        message.subGroups = (object.subGroups ?? []).map((e: any) =>
            ResourceGroupConfig.fromJSON(e),
        );
        return message;
    },

    toJSON(message: ResourceGroupConfig): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.maxQueued !== undefined && (obj.maxQueued = Math.round(message.maxQueued));
        message.softConcurrencyLimit !== undefined &&
            (obj.softConcurrencyLimit = Math.round(message.softConcurrencyLimit));
        message.hardConcurrencyLimit !== undefined &&
            (obj.hardConcurrencyLimit = Math.round(message.hardConcurrencyLimit));
        message.softMemoryLimit !== undefined && (obj.softMemoryLimit = message.softMemoryLimit);
        message.softCpuLimit !== undefined && (obj.softCpuLimit = message.softCpuLimit);
        message.hardCpuLimit !== undefined && (obj.hardCpuLimit = message.hardCpuLimit);
        message.schedulingPolicy !== undefined &&
            (obj.schedulingPolicy = resourceGroupConfig_SchedulingPolicyToJSON(
                message.schedulingPolicy,
            ));
        message.schedulingWeight !== undefined &&
            (obj.schedulingWeight = Math.round(message.schedulingWeight));
        if (message.subGroups) {
            obj.subGroups = message.subGroups.map((e) =>
                e ? ResourceGroupConfig.toJSON(e) : undefined,
            );
        } else {
            obj.subGroups = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourceGroupConfig>, I>>(
        object: I,
    ): ResourceGroupConfig {
        const message = { ...baseResourceGroupConfig } as ResourceGroupConfig;
        message.name = object.name ?? '';
        message.maxQueued = object.maxQueued ?? 0;
        message.softConcurrencyLimit = object.softConcurrencyLimit ?? 0;
        message.hardConcurrencyLimit = object.hardConcurrencyLimit ?? 0;
        message.softMemoryLimit = object.softMemoryLimit ?? '';
        message.softCpuLimit = object.softCpuLimit ?? '';
        message.hardCpuLimit = object.hardCpuLimit ?? '';
        message.schedulingPolicy = object.schedulingPolicy ?? 0;
        message.schedulingWeight = object.schedulingWeight ?? 0;
        message.subGroups = object.subGroups?.map((e) => ResourceGroupConfig.fromPartial(e)) || [];
        return message;
    },
};

const baseSelectorRuleConfig: object = {
    user: '',
    userGroup: '',
    source: '',
    queryType: 0,
    clientTags: '',
    group: '',
};

export const SelectorRuleConfig: {
    encode(message: SelectorRuleConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SelectorRuleConfig;
    fromJSON(object: any): SelectorRuleConfig;
    toJSON(message: SelectorRuleConfig): unknown;
    fromPartial<I extends Exact<DeepPartial<SelectorRuleConfig>, I>>(object: I): SelectorRuleConfig;
} = {
    encode(message: SelectorRuleConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.user !== '') {
            writer.uint32(10).string(message.user);
        }
        if (message.userGroup !== '') {
            writer.uint32(34).string(message.userGroup);
        }
        if (message.source !== '') {
            writer.uint32(42).string(message.source);
        }
        if (message.queryType !== 0) {
            writer.uint32(48).int32(message.queryType);
        }
        for (const v of message.clientTags) {
            writer.uint32(58).string(v!);
        }
        if (message.group !== '') {
            writer.uint32(66).string(message.group);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SelectorRuleConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSelectorRuleConfig } as SelectorRuleConfig;
        message.clientTags = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.user = reader.string();
                    break;
                case 4:
                    message.userGroup = reader.string();
                    break;
                case 5:
                    message.source = reader.string();
                    break;
                case 6:
                    message.queryType = reader.int32() as any;
                    break;
                case 7:
                    message.clientTags.push(reader.string());
                    break;
                case 8:
                    message.group = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SelectorRuleConfig {
        const message = { ...baseSelectorRuleConfig } as SelectorRuleConfig;
        message.user = object.user !== undefined && object.user !== null ? String(object.user) : '';
        message.userGroup =
            object.userGroup !== undefined && object.userGroup !== null
                ? String(object.userGroup)
                : '';
        message.source =
            object.source !== undefined && object.source !== null ? String(object.source) : '';
        message.queryType =
            object.queryType !== undefined && object.queryType !== null
                ? selectorRuleConfig_QueryTypeFromJSON(object.queryType)
                : 0;
        message.clientTags = (object.clientTags ?? []).map((e: any) => String(e));
        message.group =
            object.group !== undefined && object.group !== null ? String(object.group) : '';
        return message;
    },

    toJSON(message: SelectorRuleConfig): unknown {
        const obj: any = {};
        message.user !== undefined && (obj.user = message.user);
        message.userGroup !== undefined && (obj.userGroup = message.userGroup);
        message.source !== undefined && (obj.source = message.source);
        message.queryType !== undefined &&
            (obj.queryType = selectorRuleConfig_QueryTypeToJSON(message.queryType));
        if (message.clientTags) {
            obj.clientTags = message.clientTags.map((e) => e);
        } else {
            obj.clientTags = [];
        }
        message.group !== undefined && (obj.group = message.group);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SelectorRuleConfig>, I>>(
        object: I,
    ): SelectorRuleConfig {
        const message = { ...baseSelectorRuleConfig } as SelectorRuleConfig;
        message.user = object.user ?? '';
        message.userGroup = object.userGroup ?? '';
        message.source = object.source ?? '';
        message.queryType = object.queryType ?? 0;
        message.clientTags = object.clientTags?.map((e) => e) || [];
        message.group = object.group ?? '';
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
