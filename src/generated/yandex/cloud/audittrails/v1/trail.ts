/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.audittrails.v1';

/** Trail describes the filtering and destination configuration of the process of sending Audit events */
export interface Trail {
    $type: 'yandex.cloud.audittrails.v1.Trail';
    /** ID of the trail */
    id: string;
    /** ID of the folder that the trail belongs to */
    folderId: string;
    /** The timestamp for the creation operation */
    createdAt?: Date;
    /** The timestamp of the last update operation */
    updatedAt?: Date;
    /** Name of the trail */
    name: string;
    /** Description of the trail */
    description: string;
    /** Custom labels of the trail as `key:value` pairs. Maximum 64 per key */
    labels: { [key: string]: string };
    /** Destination configuration of the trail */
    destination?: Trail_Destination;
    /** Service account ID of the trail */
    serviceAccountId: string;
    /** Status of the trail */
    status: Trail_Status;
    /**
     * Filtering configuration of the trail
     * deprecated: use filtering_policy instead
     *
     * @deprecated
     */
    filter?: Trail_Filter;
    /** Current error message of the trail. Empty in case if the trail is active */
    statusErrorMessage: string;
    /** ID of the cloud that the trail belongs to */
    cloudId: string;
    /**
     * Event filtering policy
     * Describes which groups of events will be sent and which resources will be monitored
     */
    filteringPolicy?: Trail_FilteringPolicy;
}

export enum Trail_Status {
    STATUS_UNSPECIFIED = 0,
    /** ACTIVE - The trail is active and Audit events are processed */
    ACTIVE = 1,
    /** ERROR - The trail configuration has issues that are preventing Audit Trails from delivering events */
    ERROR = 2,
    /** DELETED - The trail is being deleted */
    DELETED = 3,
    UNRECOGNIZED = -1,
}

export function trail_StatusFromJSON(object: any): Trail_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Trail_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'ACTIVE':
            return Trail_Status.ACTIVE;
        case 2:
        case 'ERROR':
            return Trail_Status.ERROR;
        case 3:
        case 'DELETED':
            return Trail_Status.DELETED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Trail_Status.UNRECOGNIZED;
    }
}

export function trail_StatusToJSON(object: Trail_Status): string {
    switch (object) {
        case Trail_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Trail_Status.ACTIVE:
            return 'ACTIVE';
        case Trail_Status.ERROR:
            return 'ERROR';
        case Trail_Status.DELETED:
            return 'DELETED';
        default:
            return 'UNKNOWN';
    }
}

export enum Trail_EventCategoryFilter {
    EVENT_CATEGORY_FILTER_UNSPECIFIED = 0,
    /** CONTROL_PLANE - The events that are generated during the interaction with the service's resources */
    CONTROL_PLANE = 1,
    /** DATA_PLANE - Events that are generated during interaction with data within the service's resources */
    DATA_PLANE = 2,
    UNRECOGNIZED = -1,
}

export function trail_EventCategoryFilterFromJSON(object: any): Trail_EventCategoryFilter {
    switch (object) {
        case 0:
        case 'EVENT_CATEGORY_FILTER_UNSPECIFIED':
            return Trail_EventCategoryFilter.EVENT_CATEGORY_FILTER_UNSPECIFIED;
        case 1:
        case 'CONTROL_PLANE':
            return Trail_EventCategoryFilter.CONTROL_PLANE;
        case 2:
        case 'DATA_PLANE':
            return Trail_EventCategoryFilter.DATA_PLANE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Trail_EventCategoryFilter.UNRECOGNIZED;
    }
}

export function trail_EventCategoryFilterToJSON(object: Trail_EventCategoryFilter): string {
    switch (object) {
        case Trail_EventCategoryFilter.EVENT_CATEGORY_FILTER_UNSPECIFIED:
            return 'EVENT_CATEGORY_FILTER_UNSPECIFIED';
        case Trail_EventCategoryFilter.CONTROL_PLANE:
            return 'CONTROL_PLANE';
        case Trail_EventCategoryFilter.DATA_PLANE:
            return 'DATA_PLANE';
        default:
            return 'UNKNOWN';
    }
}

export enum Trail_EventAccessTypeFilter {
    EVENT_ACCESS_TYPE_FILTER_UNSPECIFIED = 0,
    /** WRITE - Events for operations that do perform some modification */
    WRITE = 1,
    /** READ - Events for operations that do not perform any modifications */
    READ = 2,
    UNRECOGNIZED = -1,
}

export function trail_EventAccessTypeFilterFromJSON(object: any): Trail_EventAccessTypeFilter {
    switch (object) {
        case 0:
        case 'EVENT_ACCESS_TYPE_FILTER_UNSPECIFIED':
            return Trail_EventAccessTypeFilter.EVENT_ACCESS_TYPE_FILTER_UNSPECIFIED;
        case 1:
        case 'WRITE':
            return Trail_EventAccessTypeFilter.WRITE;
        case 2:
        case 'READ':
            return Trail_EventAccessTypeFilter.READ;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Trail_EventAccessTypeFilter.UNRECOGNIZED;
    }
}

export function trail_EventAccessTypeFilterToJSON(object: Trail_EventAccessTypeFilter): string {
    switch (object) {
        case Trail_EventAccessTypeFilter.EVENT_ACCESS_TYPE_FILTER_UNSPECIFIED:
            return 'EVENT_ACCESS_TYPE_FILTER_UNSPECIFIED';
        case Trail_EventAccessTypeFilter.WRITE:
            return 'WRITE';
        case Trail_EventAccessTypeFilter.READ:
            return 'READ';
        default:
            return 'UNKNOWN';
    }
}

export interface Trail_LabelsEntry {
    $type: 'yandex.cloud.audittrails.v1.Trail.LabelsEntry';
    key: string;
    value: string;
}

export interface Trail_Destination {
    $type: 'yandex.cloud.audittrails.v1.Trail.Destination';
    /**
     * Configuration for event delivery to Object Storage
     *
     * Uploaded objects will have prefix <trail_id>/ by default
     */
    objectStorage?: Trail_ObjectStorage | undefined;
    /** Configuration for event delivery to Cloud Logging */
    cloudLogging?: Trail_CloudLogging | undefined;
    /** Configuration for event delivery to YDS */
    dataStream?: Trail_DataStream | undefined;
}

export interface Trail_ObjectStorage {
    $type: 'yandex.cloud.audittrails.v1.Trail.ObjectStorage';
    /** Name of the destination bucket */
    bucketId: string;
    /**
     * Prefix for exported objects. Optional
     * If specified, uploaded objects will have prefix <object_prefix>/<trail_id>/
     */
    objectPrefix: string;
}

export interface Trail_CloudLogging {
    $type: 'yandex.cloud.audittrails.v1.Trail.CloudLogging';
    /** ID of the Cloud Logging destination group */
    logGroupId: string | undefined;
}

export interface Trail_DataStream {
    $type: 'yandex.cloud.audittrails.v1.Trail.DataStream';
    /** ID of the database hosting the destination YDS */
    databaseId: string;
    /** Name of the destination YDS */
    streamName: string;
}

export interface Trail_Filter {
    $type: 'yandex.cloud.audittrails.v1.Trail.Filter';
    /**
     * Configuration of default events gathering for the trail
     * If not specified, default events won't be gathered for the trail
     */
    pathFilter?: Trail_PathFilter;
    /** Configuration of additional events gathering from specific services */
    eventFilter?: Trail_EventFilter;
}

export interface Trail_PathFilter {
    $type: 'yandex.cloud.audittrails.v1.Trail.PathFilter';
    /**
     * Root element of the resource path filter for the trail
     * Resource described in that filter node must contain the trail itself
     */
    root?: Trail_PathFilterElement;
}

export interface Trail_PathFilterElement {
    $type: 'yandex.cloud.audittrails.v1.Trail.PathFilterElement';
    /** Filter element with ANY type. If used, configures the trail to gather any events from the resource */
    anyFilter?: Trail_PathFilterElementAny | undefined;
    /** Filter element with SOME type. If used, configures the trail to gather some of the events from the resource */
    someFilter?: Trail_PathFilterElementSome | undefined;
}

export interface Trail_PathFilterElementAny {
    $type: 'yandex.cloud.audittrails.v1.Trail.PathFilterElementAny';
    /** Resource definition */
    resource?: Trail_Resource;
}

export interface Trail_PathFilterElementSome {
    $type: 'yandex.cloud.audittrails.v1.Trail.PathFilterElementSome';
    /** Definition of the resource that contains nested resources */
    resource?: Trail_Resource;
    /** Filters for the resources contained in the parent resource */
    filters: Trail_PathFilterElement[];
}

export interface Trail_Resource {
    $type: 'yandex.cloud.audittrails.v1.Trail.Resource';
    /** ID of the resource */
    id: string;
    /** Type of the resource */
    type: string;
}

export interface Trail_EventFilter {
    $type: 'yandex.cloud.audittrails.v1.Trail.EventFilter';
    /** List of filters for services */
    filters: Trail_EventFilterElement[];
}

export interface Trail_EventFilterElement {
    $type: 'yandex.cloud.audittrails.v1.Trail.EventFilterElement';
    /** Service ID of the gathered events */
    service: string;
    /** List of the event categories gathered for a specified service */
    categories: Trail_EventFilterElementCategory[];
    /** Resource path filter for a specified service */
    pathFilter?: Trail_PathFilter;
}

export interface Trail_EventFilterElementCategory {
    $type: 'yandex.cloud.audittrails.v1.Trail.EventFilterElementCategory';
    /** Plane of the gathered category */
    plane: Trail_EventCategoryFilter;
    /** Type of the gathered category */
    type: Trail_EventAccessTypeFilter;
}

/** Policy for gathering data events */
export interface Trail_DataEventsFiltering {
    $type: 'yandex.cloud.audittrails.v1.Trail.DataEventsFiltering';
    /** Name of the service whose events will be delivered */
    service: string;
    /**
     * Explicitly included events of specified service
     * New events of the service won't be delivered by default
     */
    includedEvents?: Trail_EventTypes | undefined;
    /**
     * Explicitly excluded events of specified service
     * New events of the service will be delivered by default
     */
    excludedEvents?: Trail_EventTypes | undefined;
    /** A list of resources which will be monitored by the trail */
    resourceScopes: Trail_Resource[];
}

/** Policy with explicitly specified event group */
export interface Trail_EventTypes {
    $type: 'yandex.cloud.audittrails.v1.Trail.EventTypes';
    eventTypes: string[];
}

/** Policy for gathering management events */
export interface Trail_ManagementEventsFiltering {
    $type: 'yandex.cloud.audittrails.v1.Trail.ManagementEventsFiltering';
    /** A list of resources which will be monitored by the trail */
    resourceScopes: Trail_Resource[];
}

/**
 * Combination of policies describing event filtering process of the trail
 * At least one filed must be filled
 */
export interface Trail_FilteringPolicy {
    $type: 'yandex.cloud.audittrails.v1.Trail.FilteringPolicy';
    /** Singular filter describing gathering management events */
    managementEventsFilter?: Trail_ManagementEventsFiltering;
    /** List of filters describing gathering data events */
    dataEventsFilters: Trail_DataEventsFiltering[];
}

const baseTrail: object = {
    $type: 'yandex.cloud.audittrails.v1.Trail',
    id: '',
    folderId: '',
    name: '',
    description: '',
    serviceAccountId: '',
    status: 0,
    statusErrorMessage: '',
    cloudId: '',
};

export const Trail = {
    $type: 'yandex.cloud.audittrails.v1.Trail' as const,

    encode(message: Trail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(42).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(50).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Trail_LabelsEntry.encode(
                { $type: 'yandex.cloud.audittrails.v1.Trail.LabelsEntry', key: key as any, value },
                writer.uint32(58).fork(),
            ).ldelim();
        });
        if (message.destination !== undefined) {
            Trail_Destination.encode(message.destination, writer.uint32(66).fork()).ldelim();
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(74).string(message.serviceAccountId);
        }
        if (message.status !== 0) {
            writer.uint32(80).int32(message.status);
        }
        if (message.filter !== undefined) {
            Trail_Filter.encode(message.filter, writer.uint32(90).fork()).ldelim();
        }
        if (message.statusErrorMessage !== '') {
            writer.uint32(98).string(message.statusErrorMessage);
        }
        if (message.cloudId !== '') {
            writer.uint32(114).string(message.cloudId);
        }
        if (message.filteringPolicy !== undefined) {
            Trail_FilteringPolicy.encode(
                message.filteringPolicy,
                writer.uint32(122).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Trail {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrail } as Trail;
        message.labels = {};
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
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    const entry7 = Trail_LabelsEntry.decode(reader, reader.uint32());
                    if (entry7.value !== undefined) {
                        message.labels[entry7.key] = entry7.value;
                    }
                    break;
                case 8:
                    message.destination = Trail_Destination.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.serviceAccountId = reader.string();
                    break;
                case 10:
                    message.status = reader.int32() as any;
                    break;
                case 11:
                    message.filter = Trail_Filter.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.statusErrorMessage = reader.string();
                    break;
                case 14:
                    message.cloudId = reader.string();
                    break;
                case 15:
                    message.filteringPolicy = Trail_FilteringPolicy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Trail {
        const message = { ...baseTrail } as Trail;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
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
        message.destination =
            object.destination !== undefined && object.destination !== null
                ? Trail_Destination.fromJSON(object.destination)
                : undefined;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? trail_StatusFromJSON(object.status)
                : 0;
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? Trail_Filter.fromJSON(object.filter)
                : undefined;
        message.statusErrorMessage =
            object.statusErrorMessage !== undefined && object.statusErrorMessage !== null
                ? String(object.statusErrorMessage)
                : '';
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null ? String(object.cloudId) : '';
        message.filteringPolicy =
            object.filteringPolicy !== undefined && object.filteringPolicy !== null
                ? Trail_FilteringPolicy.fromJSON(object.filteringPolicy)
                : undefined;
        return message;
    },

    toJSON(message: Trail): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.destination !== undefined &&
            (obj.destination = message.destination
                ? Trail_Destination.toJSON(message.destination)
                : undefined);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.status !== undefined && (obj.status = trail_StatusToJSON(message.status));
        message.filter !== undefined &&
            (obj.filter = message.filter ? Trail_Filter.toJSON(message.filter) : undefined);
        message.statusErrorMessage !== undefined &&
            (obj.statusErrorMessage = message.statusErrorMessage);
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.filteringPolicy !== undefined &&
            (obj.filteringPolicy = message.filteringPolicy
                ? Trail_FilteringPolicy.toJSON(message.filteringPolicy)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Trail>, I>>(object: I): Trail {
        const message = { ...baseTrail } as Trail;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
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
        message.destination =
            object.destination !== undefined && object.destination !== null
                ? Trail_Destination.fromPartial(object.destination)
                : undefined;
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.status = object.status ?? 0;
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? Trail_Filter.fromPartial(object.filter)
                : undefined;
        message.statusErrorMessage = object.statusErrorMessage ?? '';
        message.cloudId = object.cloudId ?? '';
        message.filteringPolicy =
            object.filteringPolicy !== undefined && object.filteringPolicy !== null
                ? Trail_FilteringPolicy.fromPartial(object.filteringPolicy)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Trail.$type, Trail);

const baseTrail_LabelsEntry: object = {
    $type: 'yandex.cloud.audittrails.v1.Trail.LabelsEntry',
    key: '',
    value: '',
};

export const Trail_LabelsEntry = {
    $type: 'yandex.cloud.audittrails.v1.Trail.LabelsEntry' as const,

    encode(message: Trail_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Trail_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrail_LabelsEntry } as Trail_LabelsEntry;
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

    fromJSON(object: any): Trail_LabelsEntry {
        const message = { ...baseTrail_LabelsEntry } as Trail_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Trail_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Trail_LabelsEntry>, I>>(object: I): Trail_LabelsEntry {
        const message = { ...baseTrail_LabelsEntry } as Trail_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(Trail_LabelsEntry.$type, Trail_LabelsEntry);

const baseTrail_Destination: object = { $type: 'yandex.cloud.audittrails.v1.Trail.Destination' };

export const Trail_Destination = {
    $type: 'yandex.cloud.audittrails.v1.Trail.Destination' as const,

    encode(message: Trail_Destination, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.objectStorage !== undefined) {
            Trail_ObjectStorage.encode(message.objectStorage, writer.uint32(10).fork()).ldelim();
        }
        if (message.cloudLogging !== undefined) {
            Trail_CloudLogging.encode(message.cloudLogging, writer.uint32(26).fork()).ldelim();
        }
        if (message.dataStream !== undefined) {
            Trail_DataStream.encode(message.dataStream, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Trail_Destination {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrail_Destination } as Trail_Destination;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.objectStorage = Trail_ObjectStorage.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.cloudLogging = Trail_CloudLogging.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.dataStream = Trail_DataStream.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Trail_Destination {
        const message = { ...baseTrail_Destination } as Trail_Destination;
        message.objectStorage =
            object.objectStorage !== undefined && object.objectStorage !== null
                ? Trail_ObjectStorage.fromJSON(object.objectStorage)
                : undefined;
        message.cloudLogging =
            object.cloudLogging !== undefined && object.cloudLogging !== null
                ? Trail_CloudLogging.fromJSON(object.cloudLogging)
                : undefined;
        message.dataStream =
            object.dataStream !== undefined && object.dataStream !== null
                ? Trail_DataStream.fromJSON(object.dataStream)
                : undefined;
        return message;
    },

    toJSON(message: Trail_Destination): unknown {
        const obj: any = {};
        message.objectStorage !== undefined &&
            (obj.objectStorage = message.objectStorage
                ? Trail_ObjectStorage.toJSON(message.objectStorage)
                : undefined);
        message.cloudLogging !== undefined &&
            (obj.cloudLogging = message.cloudLogging
                ? Trail_CloudLogging.toJSON(message.cloudLogging)
                : undefined);
        message.dataStream !== undefined &&
            (obj.dataStream = message.dataStream
                ? Trail_DataStream.toJSON(message.dataStream)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Trail_Destination>, I>>(object: I): Trail_Destination {
        const message = { ...baseTrail_Destination } as Trail_Destination;
        message.objectStorage =
            object.objectStorage !== undefined && object.objectStorage !== null
                ? Trail_ObjectStorage.fromPartial(object.objectStorage)
                : undefined;
        message.cloudLogging =
            object.cloudLogging !== undefined && object.cloudLogging !== null
                ? Trail_CloudLogging.fromPartial(object.cloudLogging)
                : undefined;
        message.dataStream =
            object.dataStream !== undefined && object.dataStream !== null
                ? Trail_DataStream.fromPartial(object.dataStream)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Trail_Destination.$type, Trail_Destination);

const baseTrail_ObjectStorage: object = {
    $type: 'yandex.cloud.audittrails.v1.Trail.ObjectStorage',
    bucketId: '',
    objectPrefix: '',
};

export const Trail_ObjectStorage = {
    $type: 'yandex.cloud.audittrails.v1.Trail.ObjectStorage' as const,

    encode(message: Trail_ObjectStorage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.bucketId !== '') {
            writer.uint32(10).string(message.bucketId);
        }
        if (message.objectPrefix !== '') {
            writer.uint32(18).string(message.objectPrefix);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Trail_ObjectStorage {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrail_ObjectStorage } as Trail_ObjectStorage;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bucketId = reader.string();
                    break;
                case 2:
                    message.objectPrefix = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Trail_ObjectStorage {
        const message = { ...baseTrail_ObjectStorage } as Trail_ObjectStorage;
        message.bucketId =
            object.bucketId !== undefined && object.bucketId !== null
                ? String(object.bucketId)
                : '';
        message.objectPrefix =
            object.objectPrefix !== undefined && object.objectPrefix !== null
                ? String(object.objectPrefix)
                : '';
        return message;
    },

    toJSON(message: Trail_ObjectStorage): unknown {
        const obj: any = {};
        message.bucketId !== undefined && (obj.bucketId = message.bucketId);
        message.objectPrefix !== undefined && (obj.objectPrefix = message.objectPrefix);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Trail_ObjectStorage>, I>>(
        object: I,
    ): Trail_ObjectStorage {
        const message = { ...baseTrail_ObjectStorage } as Trail_ObjectStorage;
        message.bucketId = object.bucketId ?? '';
        message.objectPrefix = object.objectPrefix ?? '';
        return message;
    },
};

messageTypeRegistry.set(Trail_ObjectStorage.$type, Trail_ObjectStorage);

const baseTrail_CloudLogging: object = { $type: 'yandex.cloud.audittrails.v1.Trail.CloudLogging' };

export const Trail_CloudLogging = {
    $type: 'yandex.cloud.audittrails.v1.Trail.CloudLogging' as const,

    encode(message: Trail_CloudLogging, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.logGroupId !== undefined) {
            writer.uint32(10).string(message.logGroupId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Trail_CloudLogging {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrail_CloudLogging } as Trail_CloudLogging;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Trail_CloudLogging {
        const message = { ...baseTrail_CloudLogging } as Trail_CloudLogging;
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : undefined;
        return message;
    },

    toJSON(message: Trail_CloudLogging): unknown {
        const obj: any = {};
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Trail_CloudLogging>, I>>(
        object: I,
    ): Trail_CloudLogging {
        const message = { ...baseTrail_CloudLogging } as Trail_CloudLogging;
        message.logGroupId = object.logGroupId ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(Trail_CloudLogging.$type, Trail_CloudLogging);

const baseTrail_DataStream: object = {
    $type: 'yandex.cloud.audittrails.v1.Trail.DataStream',
    databaseId: '',
    streamName: '',
};

export const Trail_DataStream = {
    $type: 'yandex.cloud.audittrails.v1.Trail.DataStream' as const,

    encode(message: Trail_DataStream, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.databaseId !== '') {
            writer.uint32(10).string(message.databaseId);
        }
        if (message.streamName !== '') {
            writer.uint32(18).string(message.streamName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Trail_DataStream {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrail_DataStream } as Trail_DataStream;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseId = reader.string();
                    break;
                case 2:
                    message.streamName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Trail_DataStream {
        const message = { ...baseTrail_DataStream } as Trail_DataStream;
        message.databaseId =
            object.databaseId !== undefined && object.databaseId !== null
                ? String(object.databaseId)
                : '';
        message.streamName =
            object.streamName !== undefined && object.streamName !== null
                ? String(object.streamName)
                : '';
        return message;
    },

    toJSON(message: Trail_DataStream): unknown {
        const obj: any = {};
        message.databaseId !== undefined && (obj.databaseId = message.databaseId);
        message.streamName !== undefined && (obj.streamName = message.streamName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Trail_DataStream>, I>>(object: I): Trail_DataStream {
        const message = { ...baseTrail_DataStream } as Trail_DataStream;
        message.databaseId = object.databaseId ?? '';
        message.streamName = object.streamName ?? '';
        return message;
    },
};

messageTypeRegistry.set(Trail_DataStream.$type, Trail_DataStream);

const baseTrail_Filter: object = { $type: 'yandex.cloud.audittrails.v1.Trail.Filter' };

export const Trail_Filter = {
    $type: 'yandex.cloud.audittrails.v1.Trail.Filter' as const,

    encode(message: Trail_Filter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pathFilter !== undefined) {
            Trail_PathFilter.encode(message.pathFilter, writer.uint32(10).fork()).ldelim();
        }
        if (message.eventFilter !== undefined) {
            Trail_EventFilter.encode(message.eventFilter, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Trail_Filter {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrail_Filter } as Trail_Filter;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pathFilter = Trail_PathFilter.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.eventFilter = Trail_EventFilter.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Trail_Filter {
        const message = { ...baseTrail_Filter } as Trail_Filter;
        message.pathFilter =
            object.pathFilter !== undefined && object.pathFilter !== null
                ? Trail_PathFilter.fromJSON(object.pathFilter)
                : undefined;
        message.eventFilter =
            object.eventFilter !== undefined && object.eventFilter !== null
                ? Trail_EventFilter.fromJSON(object.eventFilter)
                : undefined;
        return message;
    },

    toJSON(message: Trail_Filter): unknown {
        const obj: any = {};
        message.pathFilter !== undefined &&
            (obj.pathFilter = message.pathFilter
                ? Trail_PathFilter.toJSON(message.pathFilter)
                : undefined);
        message.eventFilter !== undefined &&
            (obj.eventFilter = message.eventFilter
                ? Trail_EventFilter.toJSON(message.eventFilter)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Trail_Filter>, I>>(object: I): Trail_Filter {
        const message = { ...baseTrail_Filter } as Trail_Filter;
        message.pathFilter =
            object.pathFilter !== undefined && object.pathFilter !== null
                ? Trail_PathFilter.fromPartial(object.pathFilter)
                : undefined;
        message.eventFilter =
            object.eventFilter !== undefined && object.eventFilter !== null
                ? Trail_EventFilter.fromPartial(object.eventFilter)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Trail_Filter.$type, Trail_Filter);

const baseTrail_PathFilter: object = { $type: 'yandex.cloud.audittrails.v1.Trail.PathFilter' };

export const Trail_PathFilter = {
    $type: 'yandex.cloud.audittrails.v1.Trail.PathFilter' as const,

    encode(message: Trail_PathFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.root !== undefined) {
            Trail_PathFilterElement.encode(message.root, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Trail_PathFilter {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrail_PathFilter } as Trail_PathFilter;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.root = Trail_PathFilterElement.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Trail_PathFilter {
        const message = { ...baseTrail_PathFilter } as Trail_PathFilter;
        message.root =
            object.root !== undefined && object.root !== null
                ? Trail_PathFilterElement.fromJSON(object.root)
                : undefined;
        return message;
    },

    toJSON(message: Trail_PathFilter): unknown {
        const obj: any = {};
        message.root !== undefined &&
            (obj.root = message.root ? Trail_PathFilterElement.toJSON(message.root) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Trail_PathFilter>, I>>(object: I): Trail_PathFilter {
        const message = { ...baseTrail_PathFilter } as Trail_PathFilter;
        message.root =
            object.root !== undefined && object.root !== null
                ? Trail_PathFilterElement.fromPartial(object.root)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Trail_PathFilter.$type, Trail_PathFilter);

const baseTrail_PathFilterElement: object = {
    $type: 'yandex.cloud.audittrails.v1.Trail.PathFilterElement',
};

export const Trail_PathFilterElement = {
    $type: 'yandex.cloud.audittrails.v1.Trail.PathFilterElement' as const,

    encode(message: Trail_PathFilterElement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.anyFilter !== undefined) {
            Trail_PathFilterElementAny.encode(message.anyFilter, writer.uint32(10).fork()).ldelim();
        }
        if (message.someFilter !== undefined) {
            Trail_PathFilterElementSome.encode(
                message.someFilter,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Trail_PathFilterElement {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrail_PathFilterElement } as Trail_PathFilterElement;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.anyFilter = Trail_PathFilterElementAny.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.someFilter = Trail_PathFilterElementSome.decode(
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

    fromJSON(object: any): Trail_PathFilterElement {
        const message = { ...baseTrail_PathFilterElement } as Trail_PathFilterElement;
        message.anyFilter =
            object.anyFilter !== undefined && object.anyFilter !== null
                ? Trail_PathFilterElementAny.fromJSON(object.anyFilter)
                : undefined;
        message.someFilter =
            object.someFilter !== undefined && object.someFilter !== null
                ? Trail_PathFilterElementSome.fromJSON(object.someFilter)
                : undefined;
        return message;
    },

    toJSON(message: Trail_PathFilterElement): unknown {
        const obj: any = {};
        message.anyFilter !== undefined &&
            (obj.anyFilter = message.anyFilter
                ? Trail_PathFilterElementAny.toJSON(message.anyFilter)
                : undefined);
        message.someFilter !== undefined &&
            (obj.someFilter = message.someFilter
                ? Trail_PathFilterElementSome.toJSON(message.someFilter)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Trail_PathFilterElement>, I>>(
        object: I,
    ): Trail_PathFilterElement {
        const message = { ...baseTrail_PathFilterElement } as Trail_PathFilterElement;
        message.anyFilter =
            object.anyFilter !== undefined && object.anyFilter !== null
                ? Trail_PathFilterElementAny.fromPartial(object.anyFilter)
                : undefined;
        message.someFilter =
            object.someFilter !== undefined && object.someFilter !== null
                ? Trail_PathFilterElementSome.fromPartial(object.someFilter)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Trail_PathFilterElement.$type, Trail_PathFilterElement);

const baseTrail_PathFilterElementAny: object = {
    $type: 'yandex.cloud.audittrails.v1.Trail.PathFilterElementAny',
};

export const Trail_PathFilterElementAny = {
    $type: 'yandex.cloud.audittrails.v1.Trail.PathFilterElementAny' as const,

    encode(
        message: Trail_PathFilterElementAny,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resource !== undefined) {
            Trail_Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Trail_PathFilterElementAny {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrail_PathFilterElementAny } as Trail_PathFilterElementAny;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resource = Trail_Resource.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Trail_PathFilterElementAny {
        const message = { ...baseTrail_PathFilterElementAny } as Trail_PathFilterElementAny;
        message.resource =
            object.resource !== undefined && object.resource !== null
                ? Trail_Resource.fromJSON(object.resource)
                : undefined;
        return message;
    },

    toJSON(message: Trail_PathFilterElementAny): unknown {
        const obj: any = {};
        message.resource !== undefined &&
            (obj.resource = message.resource ? Trail_Resource.toJSON(message.resource) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Trail_PathFilterElementAny>, I>>(
        object: I,
    ): Trail_PathFilterElementAny {
        const message = { ...baseTrail_PathFilterElementAny } as Trail_PathFilterElementAny;
        message.resource =
            object.resource !== undefined && object.resource !== null
                ? Trail_Resource.fromPartial(object.resource)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Trail_PathFilterElementAny.$type, Trail_PathFilterElementAny);

const baseTrail_PathFilterElementSome: object = {
    $type: 'yandex.cloud.audittrails.v1.Trail.PathFilterElementSome',
};

export const Trail_PathFilterElementSome = {
    $type: 'yandex.cloud.audittrails.v1.Trail.PathFilterElementSome' as const,

    encode(
        message: Trail_PathFilterElementSome,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resource !== undefined) {
            Trail_Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.filters) {
            Trail_PathFilterElement.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Trail_PathFilterElementSome {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrail_PathFilterElementSome } as Trail_PathFilterElementSome;
        message.filters = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resource = Trail_Resource.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.filters.push(Trail_PathFilterElement.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Trail_PathFilterElementSome {
        const message = { ...baseTrail_PathFilterElementSome } as Trail_PathFilterElementSome;
        message.resource =
            object.resource !== undefined && object.resource !== null
                ? Trail_Resource.fromJSON(object.resource)
                : undefined;
        message.filters = (object.filters ?? []).map((e: any) =>
            Trail_PathFilterElement.fromJSON(e),
        );
        return message;
    },

    toJSON(message: Trail_PathFilterElementSome): unknown {
        const obj: any = {};
        message.resource !== undefined &&
            (obj.resource = message.resource ? Trail_Resource.toJSON(message.resource) : undefined);
        if (message.filters) {
            obj.filters = message.filters.map((e) =>
                e ? Trail_PathFilterElement.toJSON(e) : undefined,
            );
        } else {
            obj.filters = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Trail_PathFilterElementSome>, I>>(
        object: I,
    ): Trail_PathFilterElementSome {
        const message = { ...baseTrail_PathFilterElementSome } as Trail_PathFilterElementSome;
        message.resource =
            object.resource !== undefined && object.resource !== null
                ? Trail_Resource.fromPartial(object.resource)
                : undefined;
        message.filters = object.filters?.map((e) => Trail_PathFilterElement.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(Trail_PathFilterElementSome.$type, Trail_PathFilterElementSome);

const baseTrail_Resource: object = {
    $type: 'yandex.cloud.audittrails.v1.Trail.Resource',
    id: '',
    type: '',
};

export const Trail_Resource = {
    $type: 'yandex.cloud.audittrails.v1.Trail.Resource' as const,

    encode(message: Trail_Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== '') {
            writer.uint32(18).string(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Trail_Resource {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrail_Resource } as Trail_Resource;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Trail_Resource {
        const message = { ...baseTrail_Resource } as Trail_Resource;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.type = object.type !== undefined && object.type !== null ? String(object.type) : '';
        return message;
    },

    toJSON(message: Trail_Resource): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Trail_Resource>, I>>(object: I): Trail_Resource {
        const message = { ...baseTrail_Resource } as Trail_Resource;
        message.id = object.id ?? '';
        message.type = object.type ?? '';
        return message;
    },
};

messageTypeRegistry.set(Trail_Resource.$type, Trail_Resource);

const baseTrail_EventFilter: object = { $type: 'yandex.cloud.audittrails.v1.Trail.EventFilter' };

export const Trail_EventFilter = {
    $type: 'yandex.cloud.audittrails.v1.Trail.EventFilter' as const,

    encode(message: Trail_EventFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.filters) {
            Trail_EventFilterElement.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Trail_EventFilter {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrail_EventFilter } as Trail_EventFilter;
        message.filters = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filters.push(Trail_EventFilterElement.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Trail_EventFilter {
        const message = { ...baseTrail_EventFilter } as Trail_EventFilter;
        message.filters = (object.filters ?? []).map((e: any) =>
            Trail_EventFilterElement.fromJSON(e),
        );
        return message;
    },

    toJSON(message: Trail_EventFilter): unknown {
        const obj: any = {};
        if (message.filters) {
            obj.filters = message.filters.map((e) =>
                e ? Trail_EventFilterElement.toJSON(e) : undefined,
            );
        } else {
            obj.filters = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Trail_EventFilter>, I>>(object: I): Trail_EventFilter {
        const message = { ...baseTrail_EventFilter } as Trail_EventFilter;
        message.filters = object.filters?.map((e) => Trail_EventFilterElement.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(Trail_EventFilter.$type, Trail_EventFilter);

const baseTrail_EventFilterElement: object = {
    $type: 'yandex.cloud.audittrails.v1.Trail.EventFilterElement',
    service: '',
};

export const Trail_EventFilterElement = {
    $type: 'yandex.cloud.audittrails.v1.Trail.EventFilterElement' as const,

    encode(
        message: Trail_EventFilterElement,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.service !== '') {
            writer.uint32(10).string(message.service);
        }
        for (const v of message.categories) {
            Trail_EventFilterElementCategory.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        if (message.pathFilter !== undefined) {
            Trail_PathFilter.encode(message.pathFilter, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Trail_EventFilterElement {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrail_EventFilterElement } as Trail_EventFilterElement;
        message.categories = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.service = reader.string();
                    break;
                case 2:
                    message.categories.push(
                        Trail_EventFilterElementCategory.decode(reader, reader.uint32()),
                    );
                    break;
                case 3:
                    message.pathFilter = Trail_PathFilter.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Trail_EventFilterElement {
        const message = { ...baseTrail_EventFilterElement } as Trail_EventFilterElement;
        message.service =
            object.service !== undefined && object.service !== null ? String(object.service) : '';
        message.categories = (object.categories ?? []).map((e: any) =>
            Trail_EventFilterElementCategory.fromJSON(e),
        );
        message.pathFilter =
            object.pathFilter !== undefined && object.pathFilter !== null
                ? Trail_PathFilter.fromJSON(object.pathFilter)
                : undefined;
        return message;
    },

    toJSON(message: Trail_EventFilterElement): unknown {
        const obj: any = {};
        message.service !== undefined && (obj.service = message.service);
        if (message.categories) {
            obj.categories = message.categories.map((e) =>
                e ? Trail_EventFilterElementCategory.toJSON(e) : undefined,
            );
        } else {
            obj.categories = [];
        }
        message.pathFilter !== undefined &&
            (obj.pathFilter = message.pathFilter
                ? Trail_PathFilter.toJSON(message.pathFilter)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Trail_EventFilterElement>, I>>(
        object: I,
    ): Trail_EventFilterElement {
        const message = { ...baseTrail_EventFilterElement } as Trail_EventFilterElement;
        message.service = object.service ?? '';
        message.categories =
            object.categories?.map((e) => Trail_EventFilterElementCategory.fromPartial(e)) || [];
        message.pathFilter =
            object.pathFilter !== undefined && object.pathFilter !== null
                ? Trail_PathFilter.fromPartial(object.pathFilter)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Trail_EventFilterElement.$type, Trail_EventFilterElement);

const baseTrail_EventFilterElementCategory: object = {
    $type: 'yandex.cloud.audittrails.v1.Trail.EventFilterElementCategory',
    plane: 0,
    type: 0,
};

export const Trail_EventFilterElementCategory = {
    $type: 'yandex.cloud.audittrails.v1.Trail.EventFilterElementCategory' as const,

    encode(
        message: Trail_EventFilterElementCategory,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.plane !== 0) {
            writer.uint32(8).int32(message.plane);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Trail_EventFilterElementCategory {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTrail_EventFilterElementCategory,
        } as Trail_EventFilterElementCategory;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.plane = reader.int32() as any;
                    break;
                case 2:
                    message.type = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Trail_EventFilterElementCategory {
        const message = {
            ...baseTrail_EventFilterElementCategory,
        } as Trail_EventFilterElementCategory;
        message.plane =
            object.plane !== undefined && object.plane !== null
                ? trail_EventCategoryFilterFromJSON(object.plane)
                : 0;
        message.type =
            object.type !== undefined && object.type !== null
                ? trail_EventAccessTypeFilterFromJSON(object.type)
                : 0;
        return message;
    },

    toJSON(message: Trail_EventFilterElementCategory): unknown {
        const obj: any = {};
        message.plane !== undefined && (obj.plane = trail_EventCategoryFilterToJSON(message.plane));
        message.type !== undefined && (obj.type = trail_EventAccessTypeFilterToJSON(message.type));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Trail_EventFilterElementCategory>, I>>(
        object: I,
    ): Trail_EventFilterElementCategory {
        const message = {
            ...baseTrail_EventFilterElementCategory,
        } as Trail_EventFilterElementCategory;
        message.plane = object.plane ?? 0;
        message.type = object.type ?? 0;
        return message;
    },
};

messageTypeRegistry.set(Trail_EventFilterElementCategory.$type, Trail_EventFilterElementCategory);

const baseTrail_DataEventsFiltering: object = {
    $type: 'yandex.cloud.audittrails.v1.Trail.DataEventsFiltering',
    service: '',
};

export const Trail_DataEventsFiltering = {
    $type: 'yandex.cloud.audittrails.v1.Trail.DataEventsFiltering' as const,

    encode(
        message: Trail_DataEventsFiltering,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.service !== '') {
            writer.uint32(10).string(message.service);
        }
        if (message.includedEvents !== undefined) {
            Trail_EventTypes.encode(message.includedEvents, writer.uint32(18).fork()).ldelim();
        }
        if (message.excludedEvents !== undefined) {
            Trail_EventTypes.encode(message.excludedEvents, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.resourceScopes) {
            Trail_Resource.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Trail_DataEventsFiltering {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrail_DataEventsFiltering } as Trail_DataEventsFiltering;
        message.resourceScopes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.service = reader.string();
                    break;
                case 2:
                    message.includedEvents = Trail_EventTypes.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.excludedEvents = Trail_EventTypes.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.resourceScopes.push(Trail_Resource.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Trail_DataEventsFiltering {
        const message = { ...baseTrail_DataEventsFiltering } as Trail_DataEventsFiltering;
        message.service =
            object.service !== undefined && object.service !== null ? String(object.service) : '';
        message.includedEvents =
            object.includedEvents !== undefined && object.includedEvents !== null
                ? Trail_EventTypes.fromJSON(object.includedEvents)
                : undefined;
        message.excludedEvents =
            object.excludedEvents !== undefined && object.excludedEvents !== null
                ? Trail_EventTypes.fromJSON(object.excludedEvents)
                : undefined;
        message.resourceScopes = (object.resourceScopes ?? []).map((e: any) =>
            Trail_Resource.fromJSON(e),
        );
        return message;
    },

    toJSON(message: Trail_DataEventsFiltering): unknown {
        const obj: any = {};
        message.service !== undefined && (obj.service = message.service);
        message.includedEvents !== undefined &&
            (obj.includedEvents = message.includedEvents
                ? Trail_EventTypes.toJSON(message.includedEvents)
                : undefined);
        message.excludedEvents !== undefined &&
            (obj.excludedEvents = message.excludedEvents
                ? Trail_EventTypes.toJSON(message.excludedEvents)
                : undefined);
        if (message.resourceScopes) {
            obj.resourceScopes = message.resourceScopes.map((e) =>
                e ? Trail_Resource.toJSON(e) : undefined,
            );
        } else {
            obj.resourceScopes = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Trail_DataEventsFiltering>, I>>(
        object: I,
    ): Trail_DataEventsFiltering {
        const message = { ...baseTrail_DataEventsFiltering } as Trail_DataEventsFiltering;
        message.service = object.service ?? '';
        message.includedEvents =
            object.includedEvents !== undefined && object.includedEvents !== null
                ? Trail_EventTypes.fromPartial(object.includedEvents)
                : undefined;
        message.excludedEvents =
            object.excludedEvents !== undefined && object.excludedEvents !== null
                ? Trail_EventTypes.fromPartial(object.excludedEvents)
                : undefined;
        message.resourceScopes =
            object.resourceScopes?.map((e) => Trail_Resource.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(Trail_DataEventsFiltering.$type, Trail_DataEventsFiltering);

const baseTrail_EventTypes: object = {
    $type: 'yandex.cloud.audittrails.v1.Trail.EventTypes',
    eventTypes: '',
};

export const Trail_EventTypes = {
    $type: 'yandex.cloud.audittrails.v1.Trail.EventTypes' as const,

    encode(message: Trail_EventTypes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.eventTypes) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Trail_EventTypes {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrail_EventTypes } as Trail_EventTypes;
        message.eventTypes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventTypes.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Trail_EventTypes {
        const message = { ...baseTrail_EventTypes } as Trail_EventTypes;
        message.eventTypes = (object.eventTypes ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: Trail_EventTypes): unknown {
        const obj: any = {};
        if (message.eventTypes) {
            obj.eventTypes = message.eventTypes.map((e) => e);
        } else {
            obj.eventTypes = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Trail_EventTypes>, I>>(object: I): Trail_EventTypes {
        const message = { ...baseTrail_EventTypes } as Trail_EventTypes;
        message.eventTypes = object.eventTypes?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(Trail_EventTypes.$type, Trail_EventTypes);

const baseTrail_ManagementEventsFiltering: object = {
    $type: 'yandex.cloud.audittrails.v1.Trail.ManagementEventsFiltering',
};

export const Trail_ManagementEventsFiltering = {
    $type: 'yandex.cloud.audittrails.v1.Trail.ManagementEventsFiltering' as const,

    encode(
        message: Trail_ManagementEventsFiltering,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.resourceScopes) {
            Trail_Resource.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Trail_ManagementEventsFiltering {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTrail_ManagementEventsFiltering,
        } as Trail_ManagementEventsFiltering;
        message.resourceScopes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceScopes.push(Trail_Resource.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Trail_ManagementEventsFiltering {
        const message = {
            ...baseTrail_ManagementEventsFiltering,
        } as Trail_ManagementEventsFiltering;
        message.resourceScopes = (object.resourceScopes ?? []).map((e: any) =>
            Trail_Resource.fromJSON(e),
        );
        return message;
    },

    toJSON(message: Trail_ManagementEventsFiltering): unknown {
        const obj: any = {};
        if (message.resourceScopes) {
            obj.resourceScopes = message.resourceScopes.map((e) =>
                e ? Trail_Resource.toJSON(e) : undefined,
            );
        } else {
            obj.resourceScopes = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Trail_ManagementEventsFiltering>, I>>(
        object: I,
    ): Trail_ManagementEventsFiltering {
        const message = {
            ...baseTrail_ManagementEventsFiltering,
        } as Trail_ManagementEventsFiltering;
        message.resourceScopes =
            object.resourceScopes?.map((e) => Trail_Resource.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(Trail_ManagementEventsFiltering.$type, Trail_ManagementEventsFiltering);

const baseTrail_FilteringPolicy: object = {
    $type: 'yandex.cloud.audittrails.v1.Trail.FilteringPolicy',
};

export const Trail_FilteringPolicy = {
    $type: 'yandex.cloud.audittrails.v1.Trail.FilteringPolicy' as const,

    encode(message: Trail_FilteringPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.managementEventsFilter !== undefined) {
            Trail_ManagementEventsFiltering.encode(
                message.managementEventsFilter,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        for (const v of message.dataEventsFilters) {
            Trail_DataEventsFiltering.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Trail_FilteringPolicy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrail_FilteringPolicy } as Trail_FilteringPolicy;
        message.dataEventsFilters = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.managementEventsFilter = Trail_ManagementEventsFiltering.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.dataEventsFilters.push(
                        Trail_DataEventsFiltering.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Trail_FilteringPolicy {
        const message = { ...baseTrail_FilteringPolicy } as Trail_FilteringPolicy;
        message.managementEventsFilter =
            object.managementEventsFilter !== undefined && object.managementEventsFilter !== null
                ? Trail_ManagementEventsFiltering.fromJSON(object.managementEventsFilter)
                : undefined;
        message.dataEventsFilters = (object.dataEventsFilters ?? []).map((e: any) =>
            Trail_DataEventsFiltering.fromJSON(e),
        );
        return message;
    },

    toJSON(message: Trail_FilteringPolicy): unknown {
        const obj: any = {};
        message.managementEventsFilter !== undefined &&
            (obj.managementEventsFilter = message.managementEventsFilter
                ? Trail_ManagementEventsFiltering.toJSON(message.managementEventsFilter)
                : undefined);
        if (message.dataEventsFilters) {
            obj.dataEventsFilters = message.dataEventsFilters.map((e) =>
                e ? Trail_DataEventsFiltering.toJSON(e) : undefined,
            );
        } else {
            obj.dataEventsFilters = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Trail_FilteringPolicy>, I>>(
        object: I,
    ): Trail_FilteringPolicy {
        const message = { ...baseTrail_FilteringPolicy } as Trail_FilteringPolicy;
        message.managementEventsFilter =
            object.managementEventsFilter !== undefined && object.managementEventsFilter !== null
                ? Trail_ManagementEventsFiltering.fromPartial(object.managementEventsFilter)
                : undefined;
        message.dataEventsFilters =
            object.dataEventsFilters?.map((e) => Trail_DataEventsFiltering.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(Trail_FilteringPolicy.$type, Trail_FilteringPolicy);

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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
