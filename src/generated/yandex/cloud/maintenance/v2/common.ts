/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.maintenance.v2';

export interface Maintenance {
    /** ID of the maintenance. */
    id: string;
    /**
     * Full path to the resource affected by maintenance,
     * represented as a hierarchy from specific resource to top-level container.
     * Example for a Compute instance with ID "I" in folder "F" and cloud "C":
     * resource_path = [
     * { "compute.instance", "I" },
     * { "resource-manager.folder", "F" },
     * { "resource-manager.cloud", "C" }
     * ]
     */
    resourcePath: Maintenance_Resource[];
    /** Describes action to be performed. */
    description: string;
    /** Service-specific details. */
    details: Maintenance_Detail[];
    /** Status of the maintenance. */
    status: Maintenance_Status;
    /** The creation time of the maintenance. */
    createdAt?: Date;
    /** The time when the maintenance was scheduled to start. */
    startScheduledAt?: Date;
    /** The time when the maintenance is estimated to complete. Optional. */
    completionScheduledAt?: Date;
    /** Latest time the maintenance can be postponed to. */
    maxStartScheduledAt?: Date;
    /** The time time when the maintenance has actually started. */
    startedAt?: Date;
    /** The time time when the maintenance has actually completed successfully. */
    succeededAt?: Date;
    /** The time time when the maintenance has actually been cancelled. */
    cancelledAt?: Date;
    /** Indicates whether the user can control (reschedule) the maintenance. */
    userControllable: boolean;
}

export enum Maintenance_Status {
    /** STATUS_UNSPECIFIED - Not set. */
    STATUS_UNSPECIFIED = 0,
    /** SCHEDULED - Maintenance is scheduled for a future time. */
    SCHEDULED = 1,
    /** RUNNING - Maintenance is currently running. */
    RUNNING = 2,
    /** SUCCEEDED - Maintenance completed successfully. */
    SUCCEEDED = 3,
    /** CANCELLED - Maintenance is cancelled and will not run. */
    CANCELLED = 4,
    UNRECOGNIZED = -1,
}

export function maintenance_StatusFromJSON(object: any): Maintenance_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Maintenance_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'SCHEDULED':
            return Maintenance_Status.SCHEDULED;
        case 2:
        case 'RUNNING':
            return Maintenance_Status.RUNNING;
        case 3:
        case 'SUCCEEDED':
            return Maintenance_Status.SUCCEEDED;
        case 4:
        case 'CANCELLED':
            return Maintenance_Status.CANCELLED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Maintenance_Status.UNRECOGNIZED;
    }
}

export function maintenance_StatusToJSON(object: Maintenance_Status): string {
    switch (object) {
        case Maintenance_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Maintenance_Status.SCHEDULED:
            return 'SCHEDULED';
        case Maintenance_Status.RUNNING:
            return 'RUNNING';
        case Maintenance_Status.SUCCEEDED:
            return 'SUCCEEDED';
        case Maintenance_Status.CANCELLED:
            return 'CANCELLED';
        default:
            return 'UNKNOWN';
    }
}

export interface Maintenance_Resource {
    /** ID of the resource */
    id: string;
    /** The type of the resource, e.g. resource-manager.cloud, resource-manager.folder, compute.instance, etc. */
    type: string;
}

export interface Maintenance_Detail {
    /** Unique key (service-specific). */
    key: string;
    /** Description (service-specific). */
    value: string;
}

/** ListMaintenancesRequest allows listing maintenances by cloud ID, folder ID, resource type or resource ID. */
export interface ListMaintenancesRequest {
    /** Cloud ID for the resources. */
    cloudId: string | undefined;
    /** Folder ID for the resources. */
    folderId: string | undefined;
    /** Resource ID of the target resource. */
    resourceId: string | undefined;
    /** The maximum number of maintenances to return per response. */
    pageSize: number;
    /** Token to retrieve the next page of results. Omitted on the first request. */
    pageToken: string;
    /**
     * By which field the listing should be ordered and in which direction,
     * format is "created_at desc". The default sorting order is ascending.
     * Supported fields: ["created_at", "start_scheduled_at", "started_at"].
     */
    orderBy: string;
    /**
     * Filter list by various fields.
     * Supported fields: ["status", "resource_type", "resource_id"]
     */
    filter: string;
}

export interface ListMaintenancesResponse {
    /** List of maintenances. */
    maintenances: Maintenance[];
    /** Token to retrieve the next page of results. */
    nextPageToken: string;
}

/** GetMaintenanceRequest allows getting Maintenance by ID. */
export interface GetMaintenanceRequest {
    maintenanceId: string;
}

/** RescheduleMaintenanceRequest allows to reschedule maintenance to another date and time. */
export interface RescheduleMaintenanceRequest {
    /** Required. ID of the maintenance. */
    maintenanceId: string;
    /**
     * Required. If `reschedule_type` is "SPECIFIC_TIME",
     * must set up `schedule_time` as well.
     */
    rescheduleType: RescheduleMaintenanceRequest_Type;
    /**
     * Optional. Timestamp the maintenance shall be rescheduled to,
     * if `reschedule_type` = "SPECIFIC_TIME".
     * Must be in RFC 3339 format (e.g. "2025-11-15T16:19:00.094Z").
     */
    scheduledAt?: Date;
}

export enum RescheduleMaintenanceRequest_Type {
    /** TYPE_UNSPECIFIED - Not set. */
    TYPE_UNSPECIFIED = 0,
    /** IMMEDIATE - If the user wants to reschedule the maintenance to happen now. */
    IMMEDIATE = 1,
    /** NEXT_AVAILABLE_WINDOW - If the user wants to reschedule the maintenance for the next maintenance window. */
    NEXT_AVAILABLE_WINDOW = 2,
    /** SPECIFIC_TIME - If the user wants to reschedule the maintenance to a specific time. */
    SPECIFIC_TIME = 3,
    UNRECOGNIZED = -1,
}

export function rescheduleMaintenanceRequest_TypeFromJSON(
    object: any,
): RescheduleMaintenanceRequest_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return RescheduleMaintenanceRequest_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'IMMEDIATE':
            return RescheduleMaintenanceRequest_Type.IMMEDIATE;
        case 2:
        case 'NEXT_AVAILABLE_WINDOW':
            return RescheduleMaintenanceRequest_Type.NEXT_AVAILABLE_WINDOW;
        case 3:
        case 'SPECIFIC_TIME':
            return RescheduleMaintenanceRequest_Type.SPECIFIC_TIME;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return RescheduleMaintenanceRequest_Type.UNRECOGNIZED;
    }
}

export function rescheduleMaintenanceRequest_TypeToJSON(
    object: RescheduleMaintenanceRequest_Type,
): string {
    switch (object) {
        case RescheduleMaintenanceRequest_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case RescheduleMaintenanceRequest_Type.IMMEDIATE:
            return 'IMMEDIATE';
        case RescheduleMaintenanceRequest_Type.NEXT_AVAILABLE_WINDOW:
            return 'NEXT_AVAILABLE_WINDOW';
        case RescheduleMaintenanceRequest_Type.SPECIFIC_TIME:
            return 'SPECIFIC_TIME';
        default:
            return 'UNKNOWN';
    }
}

const baseMaintenance: object = { id: '', description: '', status: 0, userControllable: false };

export const Maintenance: {
    encode(message: Maintenance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Maintenance;
    fromJSON(object: any): Maintenance;
    toJSON(message: Maintenance): unknown;
    fromPartial<I extends Exact<DeepPartial<Maintenance>, I>>(object: I): Maintenance;
} = {
    encode(message: Maintenance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        for (const v of message.resourcePath) {
            Maintenance_Resource.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        for (const v of message.details) {
            Maintenance_Detail.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
        }
        if (message.startScheduledAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.startScheduledAt),
                writer.uint32(58).fork(),
            ).ldelim();
        }
        if (message.completionScheduledAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.completionScheduledAt),
                writer.uint32(66).fork(),
            ).ldelim();
        }
        if (message.maxStartScheduledAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.maxStartScheduledAt),
                writer.uint32(74).fork(),
            ).ldelim();
        }
        if (message.startedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(82).fork()).ldelim();
        }
        if (message.succeededAt !== undefined) {
            Timestamp.encode(toTimestamp(message.succeededAt), writer.uint32(90).fork()).ldelim();
        }
        if (message.cancelledAt !== undefined) {
            Timestamp.encode(toTimestamp(message.cancelledAt), writer.uint32(98).fork()).ldelim();
        }
        if (message.userControllable === true) {
            writer.uint32(104).bool(message.userControllable);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Maintenance {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMaintenance } as Maintenance;
        message.resourcePath = [];
        message.details = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.resourcePath.push(Maintenance_Resource.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.details.push(Maintenance_Detail.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.status = reader.int32() as any;
                    break;
                case 6:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.startScheduledAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32()),
                    );
                    break;
                case 8:
                    message.completionScheduledAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32()),
                    );
                    break;
                case 9:
                    message.maxStartScheduledAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32()),
                    );
                    break;
                case 10:
                    message.startedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.succeededAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.cancelledAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.userControllable = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Maintenance {
        const message = { ...baseMaintenance } as Maintenance;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.resourcePath = (object.resourcePath ?? []).map((e: any) =>
            Maintenance_Resource.fromJSON(e),
        );
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.details = (object.details ?? []).map((e: any) => Maintenance_Detail.fromJSON(e));
        message.status =
            object.status !== undefined && object.status !== null
                ? maintenance_StatusFromJSON(object.status)
                : 0;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.startScheduledAt =
            object.startScheduledAt !== undefined && object.startScheduledAt !== null
                ? fromJsonTimestamp(object.startScheduledAt)
                : undefined;
        message.completionScheduledAt =
            object.completionScheduledAt !== undefined && object.completionScheduledAt !== null
                ? fromJsonTimestamp(object.completionScheduledAt)
                : undefined;
        message.maxStartScheduledAt =
            object.maxStartScheduledAt !== undefined && object.maxStartScheduledAt !== null
                ? fromJsonTimestamp(object.maxStartScheduledAt)
                : undefined;
        message.startedAt =
            object.startedAt !== undefined && object.startedAt !== null
                ? fromJsonTimestamp(object.startedAt)
                : undefined;
        message.succeededAt =
            object.succeededAt !== undefined && object.succeededAt !== null
                ? fromJsonTimestamp(object.succeededAt)
                : undefined;
        message.cancelledAt =
            object.cancelledAt !== undefined && object.cancelledAt !== null
                ? fromJsonTimestamp(object.cancelledAt)
                : undefined;
        message.userControllable =
            object.userControllable !== undefined && object.userControllable !== null
                ? Boolean(object.userControllable)
                : false;
        return message;
    },

    toJSON(message: Maintenance): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        if (message.resourcePath) {
            obj.resourcePath = message.resourcePath.map((e) =>
                e ? Maintenance_Resource.toJSON(e) : undefined,
            );
        } else {
            obj.resourcePath = [];
        }
        message.description !== undefined && (obj.description = message.description);
        if (message.details) {
            obj.details = message.details.map((e) =>
                e ? Maintenance_Detail.toJSON(e) : undefined,
            );
        } else {
            obj.details = [];
        }
        message.status !== undefined && (obj.status = maintenance_StatusToJSON(message.status));
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.startScheduledAt !== undefined &&
            (obj.startScheduledAt = message.startScheduledAt.toISOString());
        message.completionScheduledAt !== undefined &&
            (obj.completionScheduledAt = message.completionScheduledAt.toISOString());
        message.maxStartScheduledAt !== undefined &&
            (obj.maxStartScheduledAt = message.maxStartScheduledAt.toISOString());
        message.startedAt !== undefined && (obj.startedAt = message.startedAt.toISOString());
        message.succeededAt !== undefined && (obj.succeededAt = message.succeededAt.toISOString());
        message.cancelledAt !== undefined && (obj.cancelledAt = message.cancelledAt.toISOString());
        message.userControllable !== undefined && (obj.userControllable = message.userControllable);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Maintenance>, I>>(object: I): Maintenance {
        const message = { ...baseMaintenance } as Maintenance;
        message.id = object.id ?? '';
        message.resourcePath =
            object.resourcePath?.map((e) => Maintenance_Resource.fromPartial(e)) || [];
        message.description = object.description ?? '';
        message.details = object.details?.map((e) => Maintenance_Detail.fromPartial(e)) || [];
        message.status = object.status ?? 0;
        message.createdAt = object.createdAt ?? undefined;
        message.startScheduledAt = object.startScheduledAt ?? undefined;
        message.completionScheduledAt = object.completionScheduledAt ?? undefined;
        message.maxStartScheduledAt = object.maxStartScheduledAt ?? undefined;
        message.startedAt = object.startedAt ?? undefined;
        message.succeededAt = object.succeededAt ?? undefined;
        message.cancelledAt = object.cancelledAt ?? undefined;
        message.userControllable = object.userControllable ?? false;
        return message;
    },
};

const baseMaintenance_Resource: object = { id: '', type: '' };

export const Maintenance_Resource: {
    encode(message: Maintenance_Resource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Maintenance_Resource;
    fromJSON(object: any): Maintenance_Resource;
    toJSON(message: Maintenance_Resource): unknown;
    fromPartial<I extends Exact<DeepPartial<Maintenance_Resource>, I>>(object: I): Maintenance_Resource;
} = {
    encode(message: Maintenance_Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== '') {
            writer.uint32(18).string(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Maintenance_Resource {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMaintenance_Resource } as Maintenance_Resource;
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

    fromJSON(object: any): Maintenance_Resource {
        const message = { ...baseMaintenance_Resource } as Maintenance_Resource;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.type = object.type !== undefined && object.type !== null ? String(object.type) : '';
        return message;
    },

    toJSON(message: Maintenance_Resource): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Maintenance_Resource>, I>>(
        object: I,
    ): Maintenance_Resource {
        const message = { ...baseMaintenance_Resource } as Maintenance_Resource;
        message.id = object.id ?? '';
        message.type = object.type ?? '';
        return message;
    },
};

const baseMaintenance_Detail: object = { key: '', value: '' };

export const Maintenance_Detail: {
    encode(message: Maintenance_Detail, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Maintenance_Detail;
    fromJSON(object: any): Maintenance_Detail;
    toJSON(message: Maintenance_Detail): unknown;
    fromPartial<I extends Exact<DeepPartial<Maintenance_Detail>, I>>(object: I): Maintenance_Detail;
} = {
    encode(message: Maintenance_Detail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Maintenance_Detail {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMaintenance_Detail } as Maintenance_Detail;
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

    fromJSON(object: any): Maintenance_Detail {
        const message = { ...baseMaintenance_Detail } as Maintenance_Detail;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Maintenance_Detail): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Maintenance_Detail>, I>>(
        object: I,
    ): Maintenance_Detail {
        const message = { ...baseMaintenance_Detail } as Maintenance_Detail;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseListMaintenancesRequest: object = { pageSize: 0, pageToken: '', orderBy: '', filter: '' };

export const ListMaintenancesRequest: {
    encode(message: ListMaintenancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMaintenancesRequest;
    fromJSON(object: any): ListMaintenancesRequest;
    toJSON(message: ListMaintenancesRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListMaintenancesRequest>, I>>(object: I): ListMaintenancesRequest;
} = {
    encode(message: ListMaintenancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.cloudId !== undefined) {
            writer.uint32(10).string(message.cloudId);
        }
        if (message.folderId !== undefined) {
            writer.uint32(18).string(message.folderId);
        }
        if (message.resourceId !== undefined) {
            writer.uint32(26).string(message.resourceId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(32).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(42).string(message.pageToken);
        }
        if (message.orderBy !== '') {
            writer.uint32(50).string(message.orderBy);
        }
        if (message.filter !== '') {
            writer.uint32(58).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListMaintenancesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListMaintenancesRequest } as ListMaintenancesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudId = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.resourceId = reader.string();
                    break;
                case 4:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.pageToken = reader.string();
                    break;
                case 6:
                    message.orderBy = reader.string();
                    break;
                case 7:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListMaintenancesRequest {
        const message = { ...baseListMaintenancesRequest } as ListMaintenancesRequest;
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null
                ? String(object.cloudId)
                : undefined;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : undefined;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : undefined;
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        message.orderBy =
            object.orderBy !== undefined && object.orderBy !== null ? String(object.orderBy) : '';
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        return message;
    },

    toJSON(message: ListMaintenancesRequest): unknown {
        const obj: any = {};
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListMaintenancesRequest>, I>>(
        object: I,
    ): ListMaintenancesRequest {
        const message = { ...baseListMaintenancesRequest } as ListMaintenancesRequest;
        message.cloudId = object.cloudId ?? undefined;
        message.folderId = object.folderId ?? undefined;
        message.resourceId = object.resourceId ?? undefined;
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.orderBy = object.orderBy ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListMaintenancesResponse: object = { nextPageToken: '' };

export const ListMaintenancesResponse: {
    encode(message: ListMaintenancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMaintenancesResponse;
    fromJSON(object: any): ListMaintenancesResponse;
    toJSON(message: ListMaintenancesResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListMaintenancesResponse>, I>>(object: I): ListMaintenancesResponse;
} = {
    encode(
        message: ListMaintenancesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.maintenances) {
            Maintenance.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListMaintenancesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListMaintenancesResponse } as ListMaintenancesResponse;
        message.maintenances = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maintenances.push(Maintenance.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListMaintenancesResponse {
        const message = { ...baseListMaintenancesResponse } as ListMaintenancesResponse;
        message.maintenances = (object.maintenances ?? []).map((e: any) => Maintenance.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListMaintenancesResponse): unknown {
        const obj: any = {};
        if (message.maintenances) {
            obj.maintenances = message.maintenances.map((e) =>
                e ? Maintenance.toJSON(e) : undefined,
            );
        } else {
            obj.maintenances = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListMaintenancesResponse>, I>>(
        object: I,
    ): ListMaintenancesResponse {
        const message = { ...baseListMaintenancesResponse } as ListMaintenancesResponse;
        message.maintenances = object.maintenances?.map((e) => Maintenance.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseGetMaintenanceRequest: object = { maintenanceId: '' };

export const GetMaintenanceRequest: {
    encode(message: GetMaintenanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMaintenanceRequest;
    fromJSON(object: any): GetMaintenanceRequest;
    toJSON(message: GetMaintenanceRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetMaintenanceRequest>, I>>(object: I): GetMaintenanceRequest;
} = {
    encode(message: GetMaintenanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.maintenanceId !== '') {
            writer.uint32(10).string(message.maintenanceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetMaintenanceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetMaintenanceRequest } as GetMaintenanceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maintenanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetMaintenanceRequest {
        const message = { ...baseGetMaintenanceRequest } as GetMaintenanceRequest;
        message.maintenanceId =
            object.maintenanceId !== undefined && object.maintenanceId !== null
                ? String(object.maintenanceId)
                : '';
        return message;
    },

    toJSON(message: GetMaintenanceRequest): unknown {
        const obj: any = {};
        message.maintenanceId !== undefined && (obj.maintenanceId = message.maintenanceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetMaintenanceRequest>, I>>(
        object: I,
    ): GetMaintenanceRequest {
        const message = { ...baseGetMaintenanceRequest } as GetMaintenanceRequest;
        message.maintenanceId = object.maintenanceId ?? '';
        return message;
    },
};

const baseRescheduleMaintenanceRequest: object = { maintenanceId: '', rescheduleType: 0 };

export const RescheduleMaintenanceRequest: {
    encode(message: RescheduleMaintenanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RescheduleMaintenanceRequest;
    fromJSON(object: any): RescheduleMaintenanceRequest;
    toJSON(message: RescheduleMaintenanceRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<RescheduleMaintenanceRequest>, I>>(object: I): RescheduleMaintenanceRequest;
} = {
    encode(
        message: RescheduleMaintenanceRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.maintenanceId !== '') {
            writer.uint32(10).string(message.maintenanceId);
        }
        if (message.rescheduleType !== 0) {
            writer.uint32(16).int32(message.rescheduleType);
        }
        if (message.scheduledAt !== undefined) {
            Timestamp.encode(toTimestamp(message.scheduledAt), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RescheduleMaintenanceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRescheduleMaintenanceRequest } as RescheduleMaintenanceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maintenanceId = reader.string();
                    break;
                case 2:
                    message.rescheduleType = reader.int32() as any;
                    break;
                case 3:
                    message.scheduledAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RescheduleMaintenanceRequest {
        const message = { ...baseRescheduleMaintenanceRequest } as RescheduleMaintenanceRequest;
        message.maintenanceId =
            object.maintenanceId !== undefined && object.maintenanceId !== null
                ? String(object.maintenanceId)
                : '';
        message.rescheduleType =
            object.rescheduleType !== undefined && object.rescheduleType !== null
                ? rescheduleMaintenanceRequest_TypeFromJSON(object.rescheduleType)
                : 0;
        message.scheduledAt =
            object.scheduledAt !== undefined && object.scheduledAt !== null
                ? fromJsonTimestamp(object.scheduledAt)
                : undefined;
        return message;
    },

    toJSON(message: RescheduleMaintenanceRequest): unknown {
        const obj: any = {};
        message.maintenanceId !== undefined && (obj.maintenanceId = message.maintenanceId);
        message.rescheduleType !== undefined &&
            (obj.rescheduleType = rescheduleMaintenanceRequest_TypeToJSON(message.rescheduleType));
        message.scheduledAt !== undefined && (obj.scheduledAt = message.scheduledAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RescheduleMaintenanceRequest>, I>>(
        object: I,
    ): RescheduleMaintenanceRequest {
        const message = { ...baseRescheduleMaintenanceRequest } as RescheduleMaintenanceRequest;
        message.maintenanceId = object.maintenanceId ?? '';
        message.rescheduleType = object.rescheduleType ?? 0;
        message.scheduledAt = object.scheduledAt ?? undefined;
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
