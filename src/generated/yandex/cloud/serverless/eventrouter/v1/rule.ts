/* eslint-disable */
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Duration } from '../../../../../google/protobuf/duration';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.serverless.eventrouter.v1';

export interface Rule {
    $type: 'yandex.cloud.serverless.eventrouter.v1.Rule';
    /** ID of the rule. */
    id: string;
    /** ID of the bus that the rule belongs to. */
    busId: string;
    /** ID of the folder that the rule resides in. */
    folderId: string;
    /** ID of the cloud that the rule resides in. */
    cloudId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Name of the rule. */
    name: string;
    /** Description of the rule. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Filter for the rule. */
    filter?: Filter;
    /** Targets of the rule. */
    targets: Target[];
    /** Flag that disallow deletion of the rule. */
    deletionProtection: boolean;
    /** Rule status */
    status: Rule_Status;
}

export enum Rule_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Rule creation in progress, rule is not enabled yet */
    CREATING = 1,
    /** ENABLED - Rule is operating */
    ENABLED = 2,
    /** UPDATING - Rule update in progress, rule is disabled during update */
    UPDATING = 3,
    /** DISABLED - Rule is explicitly disabled by the user */
    DISABLED = 4,
    /** DELETING - Rule deletion in progress */
    DELETING = 5,
    UNRECOGNIZED = -1,
}

export function rule_StatusFromJSON(object: any): Rule_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Rule_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Rule_Status.CREATING;
        case 2:
        case 'ENABLED':
            return Rule_Status.ENABLED;
        case 3:
        case 'UPDATING':
            return Rule_Status.UPDATING;
        case 4:
        case 'DISABLED':
            return Rule_Status.DISABLED;
        case 5:
        case 'DELETING':
            return Rule_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Rule_Status.UNRECOGNIZED;
    }
}

export function rule_StatusToJSON(object: Rule_Status): string {
    switch (object) {
        case Rule_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Rule_Status.CREATING:
            return 'CREATING';
        case Rule_Status.ENABLED:
            return 'ENABLED';
        case Rule_Status.UPDATING:
            return 'UPDATING';
        case Rule_Status.DISABLED:
            return 'DISABLED';
        case Rule_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}

export interface Rule_LabelsEntry {
    $type: 'yandex.cloud.serverless.eventrouter.v1.Rule.LabelsEntry';
    key: string;
    value: string;
}

export interface Filter {
    $type: 'yandex.cloud.serverless.eventrouter.v1.Filter';
    /** JQ filter for matching events. */
    jqFilter: string | undefined;
}

export interface Transformer {
    $type: 'yandex.cloud.serverless.eventrouter.v1.Transformer';
    /** JQ string inrerpolation expression for changing event format. */
    jqTransformer: string | undefined;
}

export interface Target {
    $type: 'yandex.cloud.serverless.eventrouter.v1.Target';
    yds?: YdsTarget | undefined;
    ymq?: YmqTarget | undefined;
    function?: FunctionTarget | undefined;
    container?: ContainerTarget | undefined;
    gatewayWsBroadcast?: GatewayWebsocketBroadcastTarget | undefined;
    logging?: LoggingTarget | undefined;
    workflow?: WorkflowTarget | undefined;
    /** Transformer of the target. */
    transformer?: Transformer;
    /** Retry settings of the target. */
    retrySettings?: RetrySettings;
    /** Dead letter queue. */
    deadLetterQueue?: PutQueueMessage | undefined;
    /** Status of the target. */
    status: Target_Status;
}

/** Status of the target. */
export enum Target_Status {
    STATUS_UNSPECIFIED = 0,
    /** ENABLED - Target is enabled. */
    ENABLED = 1,
    /** DISABLED - Target is disabled. */
    DISABLED = 2,
    /** RESOURCE_NOT_FOUND - Target does not exist. */
    RESOURCE_NOT_FOUND = 3,
    /** PERMISSION_DENIED - Service account does not have read permission on source. */
    PERMISSION_DENIED = 4,
    /** SUBJECT_NOT_FOUND - Service account not found. */
    SUBJECT_NOT_FOUND = 5,
    UNRECOGNIZED = -1,
}

export function target_StatusFromJSON(object: any): Target_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Target_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'ENABLED':
            return Target_Status.ENABLED;
        case 2:
        case 'DISABLED':
            return Target_Status.DISABLED;
        case 3:
        case 'RESOURCE_NOT_FOUND':
            return Target_Status.RESOURCE_NOT_FOUND;
        case 4:
        case 'PERMISSION_DENIED':
            return Target_Status.PERMISSION_DENIED;
        case 5:
        case 'SUBJECT_NOT_FOUND':
            return Target_Status.SUBJECT_NOT_FOUND;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Target_Status.UNRECOGNIZED;
    }
}

export function target_StatusToJSON(object: Target_Status): string {
    switch (object) {
        case Target_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Target_Status.ENABLED:
            return 'ENABLED';
        case Target_Status.DISABLED:
            return 'DISABLED';
        case Target_Status.RESOURCE_NOT_FOUND:
            return 'RESOURCE_NOT_FOUND';
        case Target_Status.PERMISSION_DENIED:
            return 'PERMISSION_DENIED';
        case Target_Status.SUBJECT_NOT_FOUND:
            return 'SUBJECT_NOT_FOUND';
        default:
            return 'UNKNOWN';
    }
}

export interface YdsTarget {
    $type: 'yandex.cloud.serverless.eventrouter.v1.YdsTarget';
    /** Stream database. */
    database: string;
    /** Full stream name, like /ru-central1/aoegtvhtp8ob******** /cc8004q4lbo6******** /test. */
    streamName: string;
    /** Service account, which has write permission on the stream. */
    serviceAccountId: string;
}

export interface YmqTarget {
    $type: 'yandex.cloud.serverless.eventrouter.v1.YmqTarget';
    /**
     * Queue ARN.
     * Example: yrn:yc:ymq:ru-central1:aoe***:test
     */
    queueArn: string;
    /** Service account which has write access to the queue. */
    serviceAccountId: string;
}

export interface FunctionTarget {
    $type: 'yandex.cloud.serverless.eventrouter.v1.FunctionTarget';
    /** Function ID. */
    functionId: string;
    /** Function tag, optional. */
    functionTag: string;
    /** Service account which has call permission on the function, optional. */
    serviceAccountId: string;
    /** Batch settings. */
    batchSettings?: BatchSettings;
}

export interface ContainerTarget {
    $type: 'yandex.cloud.serverless.eventrouter.v1.ContainerTarget';
    /** Container ID. */
    containerId: string;
    /** Container revision ID. */
    containerRevisionId: string;
    /** Endpoint HTTP path to invoke. */
    path: string;
    /** Service account which should be used to call a container, optional. */
    serviceAccountId: string;
    /** Batch settings. */
    batchSettings?: BatchSettings;
}

export interface GatewayWebsocketBroadcastTarget {
    $type: 'yandex.cloud.serverless.eventrouter.v1.GatewayWebsocketBroadcastTarget';
    /** Gateway ID. */
    gatewayId: string;
    /** Path. */
    path: string;
    /** Service account which has permission for writing to websockets. */
    serviceAccountId: string;
    /** Batch settings. */
    batchSettings?: BatchSettings;
}

export interface LoggingTarget {
    $type: 'yandex.cloud.serverless.eventrouter.v1.LoggingTarget';
    logGroupId: string | undefined;
    folderId: string | undefined;
    /** Service account which has permission for writing logs. */
    serviceAccountId: string;
}

export interface WorkflowTarget {
    $type: 'yandex.cloud.serverless.eventrouter.v1.WorkflowTarget';
    /** Workflow ID. */
    workflowId: string;
    /** SA which should be used to start workflow. */
    serviceAccountId: string;
    /** Batch settings. */
    batchSettings?: BatchSettings;
}

export interface RetrySettings {
    $type: 'yandex.cloud.serverless.eventrouter.v1.RetrySettings';
    /** Maximum number of retries (extra calls) before an action fails. */
    retryAttempts: number;
    /** Event goes to dlq when its age exceeds this value. Default is 24h. */
    maximumAge?: Duration;
}

export interface PutQueueMessage {
    $type: 'yandex.cloud.serverless.eventrouter.v1.PutQueueMessage';
    /** ID of the queue. */
    queueArn: string;
    /** Service account which has write permission on the queue. */
    serviceAccountId: string;
}

export interface BatchSettings {
    $type: 'yandex.cloud.serverless.eventrouter.v1.BatchSettings';
    /** Maximum batch size: trigger will send a batch if number of events exceeds this value. */
    maxCount: number;
    /** Maximum batch size: trigger will send a batch if total size of events exceeds this value. */
    maxBytes: number;
    /** Maximum batch size: trigger will send a batch if its lifetime exceeds this value. */
    cutoff?: Duration;
}

const baseRule: object = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.Rule',
    id: '',
    busId: '',
    folderId: '',
    cloudId: '',
    name: '',
    description: '',
    deletionProtection: false,
    status: 0,
};

export const Rule = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.Rule' as const,

    encode(message: Rule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.busId !== '') {
            writer.uint32(18).string(message.busId);
        }
        if (message.folderId !== '') {
            writer.uint32(26).string(message.folderId);
        }
        if (message.cloudId !== '') {
            writer.uint32(34).string(message.cloudId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(50).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(58).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Rule_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.serverless.eventrouter.v1.Rule.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(66).fork(),
            ).ldelim();
        });
        if (message.filter !== undefined) {
            Filter.encode(message.filter, writer.uint32(90).fork()).ldelim();
        }
        for (const v of message.targets) {
            Target.encode(v!, writer.uint32(98).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(104).bool(message.deletionProtection);
        }
        if (message.status !== 0) {
            writer.uint32(112).int32(message.status);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Rule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRule } as Rule;
        message.labels = {};
        message.targets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.busId = reader.string();
                    break;
                case 3:
                    message.folderId = reader.string();
                    break;
                case 4:
                    message.cloudId = reader.string();
                    break;
                case 5:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.name = reader.string();
                    break;
                case 7:
                    message.description = reader.string();
                    break;
                case 8:
                    const entry8 = Rule_LabelsEntry.decode(reader, reader.uint32());
                    if (entry8.value !== undefined) {
                        message.labels[entry8.key] = entry8.value;
                    }
                    break;
                case 11:
                    message.filter = Filter.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.targets.push(Target.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.deletionProtection = reader.bool();
                    break;
                case 14:
                    message.status = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Rule {
        const message = { ...baseRule } as Rule;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.busId =
            object.busId !== undefined && object.busId !== null ? String(object.busId) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null ? String(object.cloudId) : '';
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
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? Filter.fromJSON(object.filter)
                : undefined;
        message.targets = (object.targets ?? []).map((e: any) => Target.fromJSON(e));
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.status =
            object.status !== undefined && object.status !== null
                ? rule_StatusFromJSON(object.status)
                : 0;
        return message;
    },

    toJSON(message: Rule): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.busId !== undefined && (obj.busId = message.busId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.filter !== undefined &&
            (obj.filter = message.filter ? Filter.toJSON(message.filter) : undefined);
        if (message.targets) {
            obj.targets = message.targets.map((e) => (e ? Target.toJSON(e) : undefined));
        } else {
            obj.targets = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.status !== undefined && (obj.status = rule_StatusToJSON(message.status));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Rule>, I>>(object: I): Rule {
        const message = { ...baseRule } as Rule;
        message.id = object.id ?? '';
        message.busId = object.busId ?? '';
        message.folderId = object.folderId ?? '';
        message.cloudId = object.cloudId ?? '';
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
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? Filter.fromPartial(object.filter)
                : undefined;
        message.targets = object.targets?.map((e) => Target.fromPartial(e)) || [];
        message.deletionProtection = object.deletionProtection ?? false;
        message.status = object.status ?? 0;
        return message;
    },
};

messageTypeRegistry.set(Rule.$type, Rule);

const baseRule_LabelsEntry: object = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.Rule.LabelsEntry',
    key: '',
    value: '',
};

export const Rule_LabelsEntry = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.Rule.LabelsEntry' as const,

    encode(message: Rule_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Rule_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRule_LabelsEntry } as Rule_LabelsEntry;
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

    fromJSON(object: any): Rule_LabelsEntry {
        const message = { ...baseRule_LabelsEntry } as Rule_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Rule_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Rule_LabelsEntry>, I>>(object: I): Rule_LabelsEntry {
        const message = { ...baseRule_LabelsEntry } as Rule_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(Rule_LabelsEntry.$type, Rule_LabelsEntry);

const baseFilter: object = { $type: 'yandex.cloud.serverless.eventrouter.v1.Filter' };

export const Filter = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.Filter' as const,

    encode(message: Filter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.jqFilter !== undefined) {
            writer.uint32(10).string(message.jqFilter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Filter {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFilter } as Filter;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.jqFilter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Filter {
        const message = { ...baseFilter } as Filter;
        message.jqFilter =
            object.jqFilter !== undefined && object.jqFilter !== null
                ? String(object.jqFilter)
                : undefined;
        return message;
    },

    toJSON(message: Filter): unknown {
        const obj: any = {};
        message.jqFilter !== undefined && (obj.jqFilter = message.jqFilter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Filter>, I>>(object: I): Filter {
        const message = { ...baseFilter } as Filter;
        message.jqFilter = object.jqFilter ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(Filter.$type, Filter);

const baseTransformer: object = { $type: 'yandex.cloud.serverless.eventrouter.v1.Transformer' };

export const Transformer = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.Transformer' as const,

    encode(message: Transformer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.jqTransformer !== undefined) {
            writer.uint32(10).string(message.jqTransformer);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Transformer {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTransformer } as Transformer;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.jqTransformer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Transformer {
        const message = { ...baseTransformer } as Transformer;
        message.jqTransformer =
            object.jqTransformer !== undefined && object.jqTransformer !== null
                ? String(object.jqTransformer)
                : undefined;
        return message;
    },

    toJSON(message: Transformer): unknown {
        const obj: any = {};
        message.jqTransformer !== undefined && (obj.jqTransformer = message.jqTransformer);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Transformer>, I>>(object: I): Transformer {
        const message = { ...baseTransformer } as Transformer;
        message.jqTransformer = object.jqTransformer ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(Transformer.$type, Transformer);

const baseTarget: object = { $type: 'yandex.cloud.serverless.eventrouter.v1.Target', status: 0 };

export const Target = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.Target' as const,

    encode(message: Target, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.yds !== undefined) {
            YdsTarget.encode(message.yds, writer.uint32(10).fork()).ldelim();
        }
        if (message.ymq !== undefined) {
            YmqTarget.encode(message.ymq, writer.uint32(18).fork()).ldelim();
        }
        if (message.function !== undefined) {
            FunctionTarget.encode(message.function, writer.uint32(26).fork()).ldelim();
        }
        if (message.container !== undefined) {
            ContainerTarget.encode(message.container, writer.uint32(34).fork()).ldelim();
        }
        if (message.gatewayWsBroadcast !== undefined) {
            GatewayWebsocketBroadcastTarget.encode(
                message.gatewayWsBroadcast,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        if (message.logging !== undefined) {
            LoggingTarget.encode(message.logging, writer.uint32(50).fork()).ldelim();
        }
        if (message.workflow !== undefined) {
            WorkflowTarget.encode(message.workflow, writer.uint32(58).fork()).ldelim();
        }
        if (message.transformer !== undefined) {
            Transformer.encode(message.transformer, writer.uint32(402).fork()).ldelim();
        }
        if (message.retrySettings !== undefined) {
            RetrySettings.encode(message.retrySettings, writer.uint32(410).fork()).ldelim();
        }
        if (message.deadLetterQueue !== undefined) {
            PutQueueMessage.encode(message.deadLetterQueue, writer.uint32(418).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(432).int32(message.status);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Target {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTarget } as Target;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.yds = YdsTarget.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.ymq = YmqTarget.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.function = FunctionTarget.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.container = ContainerTarget.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.gatewayWsBroadcast = GatewayWebsocketBroadcastTarget.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 6:
                    message.logging = LoggingTarget.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.workflow = WorkflowTarget.decode(reader, reader.uint32());
                    break;
                case 50:
                    message.transformer = Transformer.decode(reader, reader.uint32());
                    break;
                case 51:
                    message.retrySettings = RetrySettings.decode(reader, reader.uint32());
                    break;
                case 52:
                    message.deadLetterQueue = PutQueueMessage.decode(reader, reader.uint32());
                    break;
                case 54:
                    message.status = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Target {
        const message = { ...baseTarget } as Target;
        message.yds =
            object.yds !== undefined && object.yds !== null
                ? YdsTarget.fromJSON(object.yds)
                : undefined;
        message.ymq =
            object.ymq !== undefined && object.ymq !== null
                ? YmqTarget.fromJSON(object.ymq)
                : undefined;
        message.function =
            object.function !== undefined && object.function !== null
                ? FunctionTarget.fromJSON(object.function)
                : undefined;
        message.container =
            object.container !== undefined && object.container !== null
                ? ContainerTarget.fromJSON(object.container)
                : undefined;
        message.gatewayWsBroadcast =
            object.gatewayWsBroadcast !== undefined && object.gatewayWsBroadcast !== null
                ? GatewayWebsocketBroadcastTarget.fromJSON(object.gatewayWsBroadcast)
                : undefined;
        message.logging =
            object.logging !== undefined && object.logging !== null
                ? LoggingTarget.fromJSON(object.logging)
                : undefined;
        message.workflow =
            object.workflow !== undefined && object.workflow !== null
                ? WorkflowTarget.fromJSON(object.workflow)
                : undefined;
        message.transformer =
            object.transformer !== undefined && object.transformer !== null
                ? Transformer.fromJSON(object.transformer)
                : undefined;
        message.retrySettings =
            object.retrySettings !== undefined && object.retrySettings !== null
                ? RetrySettings.fromJSON(object.retrySettings)
                : undefined;
        message.deadLetterQueue =
            object.deadLetterQueue !== undefined && object.deadLetterQueue !== null
                ? PutQueueMessage.fromJSON(object.deadLetterQueue)
                : undefined;
        message.status =
            object.status !== undefined && object.status !== null
                ? target_StatusFromJSON(object.status)
                : 0;
        return message;
    },

    toJSON(message: Target): unknown {
        const obj: any = {};
        message.yds !== undefined &&
            (obj.yds = message.yds ? YdsTarget.toJSON(message.yds) : undefined);
        message.ymq !== undefined &&
            (obj.ymq = message.ymq ? YmqTarget.toJSON(message.ymq) : undefined);
        message.function !== undefined &&
            (obj.function = message.function ? FunctionTarget.toJSON(message.function) : undefined);
        message.container !== undefined &&
            (obj.container = message.container
                ? ContainerTarget.toJSON(message.container)
                : undefined);
        message.gatewayWsBroadcast !== undefined &&
            (obj.gatewayWsBroadcast = message.gatewayWsBroadcast
                ? GatewayWebsocketBroadcastTarget.toJSON(message.gatewayWsBroadcast)
                : undefined);
        message.logging !== undefined &&
            (obj.logging = message.logging ? LoggingTarget.toJSON(message.logging) : undefined);
        message.workflow !== undefined &&
            (obj.workflow = message.workflow ? WorkflowTarget.toJSON(message.workflow) : undefined);
        message.transformer !== undefined &&
            (obj.transformer = message.transformer
                ? Transformer.toJSON(message.transformer)
                : undefined);
        message.retrySettings !== undefined &&
            (obj.retrySettings = message.retrySettings
                ? RetrySettings.toJSON(message.retrySettings)
                : undefined);
        message.deadLetterQueue !== undefined &&
            (obj.deadLetterQueue = message.deadLetterQueue
                ? PutQueueMessage.toJSON(message.deadLetterQueue)
                : undefined);
        message.status !== undefined && (obj.status = target_StatusToJSON(message.status));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Target>, I>>(object: I): Target {
        const message = { ...baseTarget } as Target;
        message.yds =
            object.yds !== undefined && object.yds !== null
                ? YdsTarget.fromPartial(object.yds)
                : undefined;
        message.ymq =
            object.ymq !== undefined && object.ymq !== null
                ? YmqTarget.fromPartial(object.ymq)
                : undefined;
        message.function =
            object.function !== undefined && object.function !== null
                ? FunctionTarget.fromPartial(object.function)
                : undefined;
        message.container =
            object.container !== undefined && object.container !== null
                ? ContainerTarget.fromPartial(object.container)
                : undefined;
        message.gatewayWsBroadcast =
            object.gatewayWsBroadcast !== undefined && object.gatewayWsBroadcast !== null
                ? GatewayWebsocketBroadcastTarget.fromPartial(object.gatewayWsBroadcast)
                : undefined;
        message.logging =
            object.logging !== undefined && object.logging !== null
                ? LoggingTarget.fromPartial(object.logging)
                : undefined;
        message.workflow =
            object.workflow !== undefined && object.workflow !== null
                ? WorkflowTarget.fromPartial(object.workflow)
                : undefined;
        message.transformer =
            object.transformer !== undefined && object.transformer !== null
                ? Transformer.fromPartial(object.transformer)
                : undefined;
        message.retrySettings =
            object.retrySettings !== undefined && object.retrySettings !== null
                ? RetrySettings.fromPartial(object.retrySettings)
                : undefined;
        message.deadLetterQueue =
            object.deadLetterQueue !== undefined && object.deadLetterQueue !== null
                ? PutQueueMessage.fromPartial(object.deadLetterQueue)
                : undefined;
        message.status = object.status ?? 0;
        return message;
    },
};

messageTypeRegistry.set(Target.$type, Target);

const baseYdsTarget: object = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.YdsTarget',
    database: '',
    streamName: '',
    serviceAccountId: '',
};

export const YdsTarget = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.YdsTarget' as const,

    encode(message: YdsTarget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.database !== '') {
            writer.uint32(10).string(message.database);
        }
        if (message.streamName !== '') {
            writer.uint32(18).string(message.streamName);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(26).string(message.serviceAccountId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): YdsTarget {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseYdsTarget } as YdsTarget;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.database = reader.string();
                    break;
                case 2:
                    message.streamName = reader.string();
                    break;
                case 3:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): YdsTarget {
        const message = { ...baseYdsTarget } as YdsTarget;
        message.database =
            object.database !== undefined && object.database !== null
                ? String(object.database)
                : '';
        message.streamName =
            object.streamName !== undefined && object.streamName !== null
                ? String(object.streamName)
                : '';
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        return message;
    },

    toJSON(message: YdsTarget): unknown {
        const obj: any = {};
        message.database !== undefined && (obj.database = message.database);
        message.streamName !== undefined && (obj.streamName = message.streamName);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<YdsTarget>, I>>(object: I): YdsTarget {
        const message = { ...baseYdsTarget } as YdsTarget;
        message.database = object.database ?? '';
        message.streamName = object.streamName ?? '';
        message.serviceAccountId = object.serviceAccountId ?? '';
        return message;
    },
};

messageTypeRegistry.set(YdsTarget.$type, YdsTarget);

const baseYmqTarget: object = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.YmqTarget',
    queueArn: '',
    serviceAccountId: '',
};

export const YmqTarget = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.YmqTarget' as const,

    encode(message: YmqTarget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.queueArn !== '') {
            writer.uint32(10).string(message.queueArn);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(18).string(message.serviceAccountId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): YmqTarget {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseYmqTarget } as YmqTarget;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queueArn = reader.string();
                    break;
                case 2:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): YmqTarget {
        const message = { ...baseYmqTarget } as YmqTarget;
        message.queueArn =
            object.queueArn !== undefined && object.queueArn !== null
                ? String(object.queueArn)
                : '';
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        return message;
    },

    toJSON(message: YmqTarget): unknown {
        const obj: any = {};
        message.queueArn !== undefined && (obj.queueArn = message.queueArn);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<YmqTarget>, I>>(object: I): YmqTarget {
        const message = { ...baseYmqTarget } as YmqTarget;
        message.queueArn = object.queueArn ?? '';
        message.serviceAccountId = object.serviceAccountId ?? '';
        return message;
    },
};

messageTypeRegistry.set(YmqTarget.$type, YmqTarget);

const baseFunctionTarget: object = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.FunctionTarget',
    functionId: '',
    functionTag: '',
    serviceAccountId: '',
};

export const FunctionTarget = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.FunctionTarget' as const,

    encode(message: FunctionTarget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.functionId !== '') {
            writer.uint32(10).string(message.functionId);
        }
        if (message.functionTag !== '') {
            writer.uint32(18).string(message.functionTag);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(26).string(message.serviceAccountId);
        }
        if (message.batchSettings !== undefined) {
            BatchSettings.encode(message.batchSettings, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FunctionTarget {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFunctionTarget } as FunctionTarget;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                case 2:
                    message.functionTag = reader.string();
                    break;
                case 3:
                    message.serviceAccountId = reader.string();
                    break;
                case 4:
                    message.batchSettings = BatchSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FunctionTarget {
        const message = { ...baseFunctionTarget } as FunctionTarget;
        message.functionId =
            object.functionId !== undefined && object.functionId !== null
                ? String(object.functionId)
                : '';
        message.functionTag =
            object.functionTag !== undefined && object.functionTag !== null
                ? String(object.functionTag)
                : '';
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.batchSettings =
            object.batchSettings !== undefined && object.batchSettings !== null
                ? BatchSettings.fromJSON(object.batchSettings)
                : undefined;
        return message;
    },

    toJSON(message: FunctionTarget): unknown {
        const obj: any = {};
        message.functionId !== undefined && (obj.functionId = message.functionId);
        message.functionTag !== undefined && (obj.functionTag = message.functionTag);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.batchSettings !== undefined &&
            (obj.batchSettings = message.batchSettings
                ? BatchSettings.toJSON(message.batchSettings)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FunctionTarget>, I>>(object: I): FunctionTarget {
        const message = { ...baseFunctionTarget } as FunctionTarget;
        message.functionId = object.functionId ?? '';
        message.functionTag = object.functionTag ?? '';
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.batchSettings =
            object.batchSettings !== undefined && object.batchSettings !== null
                ? BatchSettings.fromPartial(object.batchSettings)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(FunctionTarget.$type, FunctionTarget);

const baseContainerTarget: object = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.ContainerTarget',
    containerId: '',
    containerRevisionId: '',
    path: '',
    serviceAccountId: '',
};

export const ContainerTarget = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.ContainerTarget' as const,

    encode(message: ContainerTarget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.containerId !== '') {
            writer.uint32(10).string(message.containerId);
        }
        if (message.containerRevisionId !== '') {
            writer.uint32(18).string(message.containerRevisionId);
        }
        if (message.path !== '') {
            writer.uint32(26).string(message.path);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(34).string(message.serviceAccountId);
        }
        if (message.batchSettings !== undefined) {
            BatchSettings.encode(message.batchSettings, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ContainerTarget {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseContainerTarget } as ContainerTarget;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerId = reader.string();
                    break;
                case 2:
                    message.containerRevisionId = reader.string();
                    break;
                case 3:
                    message.path = reader.string();
                    break;
                case 4:
                    message.serviceAccountId = reader.string();
                    break;
                case 5:
                    message.batchSettings = BatchSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ContainerTarget {
        const message = { ...baseContainerTarget } as ContainerTarget;
        message.containerId =
            object.containerId !== undefined && object.containerId !== null
                ? String(object.containerId)
                : '';
        message.containerRevisionId =
            object.containerRevisionId !== undefined && object.containerRevisionId !== null
                ? String(object.containerRevisionId)
                : '';
        message.path = object.path !== undefined && object.path !== null ? String(object.path) : '';
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.batchSettings =
            object.batchSettings !== undefined && object.batchSettings !== null
                ? BatchSettings.fromJSON(object.batchSettings)
                : undefined;
        return message;
    },

    toJSON(message: ContainerTarget): unknown {
        const obj: any = {};
        message.containerId !== undefined && (obj.containerId = message.containerId);
        message.containerRevisionId !== undefined &&
            (obj.containerRevisionId = message.containerRevisionId);
        message.path !== undefined && (obj.path = message.path);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.batchSettings !== undefined &&
            (obj.batchSettings = message.batchSettings
                ? BatchSettings.toJSON(message.batchSettings)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ContainerTarget>, I>>(object: I): ContainerTarget {
        const message = { ...baseContainerTarget } as ContainerTarget;
        message.containerId = object.containerId ?? '';
        message.containerRevisionId = object.containerRevisionId ?? '';
        message.path = object.path ?? '';
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.batchSettings =
            object.batchSettings !== undefined && object.batchSettings !== null
                ? BatchSettings.fromPartial(object.batchSettings)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(ContainerTarget.$type, ContainerTarget);

const baseGatewayWebsocketBroadcastTarget: object = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.GatewayWebsocketBroadcastTarget',
    gatewayId: '',
    path: '',
    serviceAccountId: '',
};

export const GatewayWebsocketBroadcastTarget = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.GatewayWebsocketBroadcastTarget' as const,

    encode(
        message: GatewayWebsocketBroadcastTarget,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.gatewayId !== '') {
            writer.uint32(10).string(message.gatewayId);
        }
        if (message.path !== '') {
            writer.uint32(18).string(message.path);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(26).string(message.serviceAccountId);
        }
        if (message.batchSettings !== undefined) {
            BatchSettings.encode(message.batchSettings, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GatewayWebsocketBroadcastTarget {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGatewayWebsocketBroadcastTarget,
        } as GatewayWebsocketBroadcastTarget;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gatewayId = reader.string();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.serviceAccountId = reader.string();
                    break;
                case 4:
                    message.batchSettings = BatchSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GatewayWebsocketBroadcastTarget {
        const message = {
            ...baseGatewayWebsocketBroadcastTarget,
        } as GatewayWebsocketBroadcastTarget;
        message.gatewayId =
            object.gatewayId !== undefined && object.gatewayId !== null
                ? String(object.gatewayId)
                : '';
        message.path = object.path !== undefined && object.path !== null ? String(object.path) : '';
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.batchSettings =
            object.batchSettings !== undefined && object.batchSettings !== null
                ? BatchSettings.fromJSON(object.batchSettings)
                : undefined;
        return message;
    },

    toJSON(message: GatewayWebsocketBroadcastTarget): unknown {
        const obj: any = {};
        message.gatewayId !== undefined && (obj.gatewayId = message.gatewayId);
        message.path !== undefined && (obj.path = message.path);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.batchSettings !== undefined &&
            (obj.batchSettings = message.batchSettings
                ? BatchSettings.toJSON(message.batchSettings)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GatewayWebsocketBroadcastTarget>, I>>(
        object: I,
    ): GatewayWebsocketBroadcastTarget {
        const message = {
            ...baseGatewayWebsocketBroadcastTarget,
        } as GatewayWebsocketBroadcastTarget;
        message.gatewayId = object.gatewayId ?? '';
        message.path = object.path ?? '';
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.batchSettings =
            object.batchSettings !== undefined && object.batchSettings !== null
                ? BatchSettings.fromPartial(object.batchSettings)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(GatewayWebsocketBroadcastTarget.$type, GatewayWebsocketBroadcastTarget);

const baseLoggingTarget: object = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.LoggingTarget',
    serviceAccountId: '',
};

export const LoggingTarget = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.LoggingTarget' as const,

    encode(message: LoggingTarget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.logGroupId !== undefined) {
            writer.uint32(10).string(message.logGroupId);
        }
        if (message.folderId !== undefined) {
            writer.uint32(18).string(message.folderId);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(26).string(message.serviceAccountId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LoggingTarget {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLoggingTarget } as LoggingTarget;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LoggingTarget {
        const message = { ...baseLoggingTarget } as LoggingTarget;
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
        return message;
    },

    toJSON(message: LoggingTarget): unknown {
        const obj: any = {};
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LoggingTarget>, I>>(object: I): LoggingTarget {
        const message = { ...baseLoggingTarget } as LoggingTarget;
        message.logGroupId = object.logGroupId ?? undefined;
        message.folderId = object.folderId ?? undefined;
        message.serviceAccountId = object.serviceAccountId ?? '';
        return message;
    },
};

messageTypeRegistry.set(LoggingTarget.$type, LoggingTarget);

const baseWorkflowTarget: object = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.WorkflowTarget',
    workflowId: '',
    serviceAccountId: '',
};

export const WorkflowTarget = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.WorkflowTarget' as const,

    encode(message: WorkflowTarget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.workflowId !== '') {
            writer.uint32(10).string(message.workflowId);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(34).string(message.serviceAccountId);
        }
        if (message.batchSettings !== undefined) {
            BatchSettings.encode(message.batchSettings, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WorkflowTarget {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWorkflowTarget } as WorkflowTarget;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workflowId = reader.string();
                    break;
                case 4:
                    message.serviceAccountId = reader.string();
                    break;
                case 5:
                    message.batchSettings = BatchSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WorkflowTarget {
        const message = { ...baseWorkflowTarget } as WorkflowTarget;
        message.workflowId =
            object.workflowId !== undefined && object.workflowId !== null
                ? String(object.workflowId)
                : '';
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.batchSettings =
            object.batchSettings !== undefined && object.batchSettings !== null
                ? BatchSettings.fromJSON(object.batchSettings)
                : undefined;
        return message;
    },

    toJSON(message: WorkflowTarget): unknown {
        const obj: any = {};
        message.workflowId !== undefined && (obj.workflowId = message.workflowId);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.batchSettings !== undefined &&
            (obj.batchSettings = message.batchSettings
                ? BatchSettings.toJSON(message.batchSettings)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<WorkflowTarget>, I>>(object: I): WorkflowTarget {
        const message = { ...baseWorkflowTarget } as WorkflowTarget;
        message.workflowId = object.workflowId ?? '';
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.batchSettings =
            object.batchSettings !== undefined && object.batchSettings !== null
                ? BatchSettings.fromPartial(object.batchSettings)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(WorkflowTarget.$type, WorkflowTarget);

const baseRetrySettings: object = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.RetrySettings',
    retryAttempts: 0,
};

export const RetrySettings = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.RetrySettings' as const,

    encode(message: RetrySettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.retryAttempts !== 0) {
            writer.uint32(8).int64(message.retryAttempts);
        }
        if (message.maximumAge !== undefined) {
            Duration.encode(message.maximumAge, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RetrySettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRetrySettings } as RetrySettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.retryAttempts = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.maximumAge = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RetrySettings {
        const message = { ...baseRetrySettings } as RetrySettings;
        message.retryAttempts =
            object.retryAttempts !== undefined && object.retryAttempts !== null
                ? Number(object.retryAttempts)
                : 0;
        message.maximumAge =
            object.maximumAge !== undefined && object.maximumAge !== null
                ? Duration.fromJSON(object.maximumAge)
                : undefined;
        return message;
    },

    toJSON(message: RetrySettings): unknown {
        const obj: any = {};
        message.retryAttempts !== undefined &&
            (obj.retryAttempts = Math.round(message.retryAttempts));
        message.maximumAge !== undefined &&
            (obj.maximumAge = message.maximumAge ? Duration.toJSON(message.maximumAge) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RetrySettings>, I>>(object: I): RetrySettings {
        const message = { ...baseRetrySettings } as RetrySettings;
        message.retryAttempts = object.retryAttempts ?? 0;
        message.maximumAge =
            object.maximumAge !== undefined && object.maximumAge !== null
                ? Duration.fromPartial(object.maximumAge)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(RetrySettings.$type, RetrySettings);

const basePutQueueMessage: object = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.PutQueueMessage',
    queueArn: '',
    serviceAccountId: '',
};

export const PutQueueMessage = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.PutQueueMessage' as const,

    encode(message: PutQueueMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.queueArn !== '') {
            writer.uint32(10).string(message.queueArn);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(18).string(message.serviceAccountId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PutQueueMessage {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePutQueueMessage } as PutQueueMessage;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queueArn = reader.string();
                    break;
                case 2:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PutQueueMessage {
        const message = { ...basePutQueueMessage } as PutQueueMessage;
        message.queueArn =
            object.queueArn !== undefined && object.queueArn !== null
                ? String(object.queueArn)
                : '';
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        return message;
    },

    toJSON(message: PutQueueMessage): unknown {
        const obj: any = {};
        message.queueArn !== undefined && (obj.queueArn = message.queueArn);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PutQueueMessage>, I>>(object: I): PutQueueMessage {
        const message = { ...basePutQueueMessage } as PutQueueMessage;
        message.queueArn = object.queueArn ?? '';
        message.serviceAccountId = object.serviceAccountId ?? '';
        return message;
    },
};

messageTypeRegistry.set(PutQueueMessage.$type, PutQueueMessage);

const baseBatchSettings: object = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.BatchSettings',
    maxCount: 0,
    maxBytes: 0,
};

export const BatchSettings = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.BatchSettings' as const,

    encode(message: BatchSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.maxCount !== 0) {
            writer.uint32(8).int64(message.maxCount);
        }
        if (message.maxBytes !== 0) {
            writer.uint32(16).int64(message.maxBytes);
        }
        if (message.cutoff !== undefined) {
            Duration.encode(message.cutoff, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchSettings } as BatchSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxCount = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.maxBytes = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.cutoff = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchSettings {
        const message = { ...baseBatchSettings } as BatchSettings;
        message.maxCount =
            object.maxCount !== undefined && object.maxCount !== null ? Number(object.maxCount) : 0;
        message.maxBytes =
            object.maxBytes !== undefined && object.maxBytes !== null ? Number(object.maxBytes) : 0;
        message.cutoff =
            object.cutoff !== undefined && object.cutoff !== null
                ? Duration.fromJSON(object.cutoff)
                : undefined;
        return message;
    },

    toJSON(message: BatchSettings): unknown {
        const obj: any = {};
        message.maxCount !== undefined && (obj.maxCount = Math.round(message.maxCount));
        message.maxBytes !== undefined && (obj.maxBytes = Math.round(message.maxBytes));
        message.cutoff !== undefined &&
            (obj.cutoff = message.cutoff ? Duration.toJSON(message.cutoff) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchSettings>, I>>(object: I): BatchSettings {
        const message = { ...baseBatchSettings } as BatchSettings;
        message.maxCount = object.maxCount ?? 0;
        message.maxBytes = object.maxBytes ?? 0;
        message.cutoff =
            object.cutoff !== undefined && object.cutoff !== null
                ? Duration.fromPartial(object.cutoff)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(BatchSettings.$type, BatchSettings);

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
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
              Exclude<keyof I, KeysOfUnion<P> | '$type'>,
              never
          >;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
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
