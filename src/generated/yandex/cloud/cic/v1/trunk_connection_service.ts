/* eslint-disable */
import Long from 'long';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleUnaryCall,
    Client,
    ClientUnaryCall,
    Metadata,
    CallOptions,
    ServiceError,
} from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
import {
    TrunkConnection_Capacity,
    TrunkConnection,
    trunkConnection_CapacityFromJSON,
    trunkConnection_CapacityToJSON,
} from '../../../../yandex/cloud/cic/v1/trunk_connection';
import {
    TransceiverType,
    transceiverTypeFromJSON,
    transceiverTypeToJSON,
} from '../../../../yandex/cloud/cic/v1/common/transceiver_type';
import { LagAllocationSettingsRequest } from '../../../../yandex/cloud/cic/v1/common/lag_allocation_settings';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { StringValue } from '../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.cic.v1';

export interface GetTrunkConnectionRequest {
    /**
     * ID of the TrunkConnection resource to return.
     * To get the trunkConnection ID use a [TrunkConnectionService.List] request.
     */
    trunkConnectionId: string;
}

export interface ListTrunkConnectionsRequest {
    /**
     * ID of the folder to list TrunkConnection resources.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListTrunkConnectionsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListTrunkConnectionsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Subnet.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
}

export interface ListTrunkConnectionsResponse {
    /** List of TrunkConnection resources. */
    trunkConnections: TrunkConnection[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListTrunkConnectionsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListTrunkConnectionsRequest.page_token] query parameter
     * in the next list request. Subsequent list requests will have their own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateTrunkConnectionRequest {
    /**
     * Name of the trunkConnection.
     * The name must be unique within the folder.
     * Value must match the regular expression ``\|[a-zA-Z]([-_a-zA-Z0-9]{0,61}[a-zA-Z0-9])?``.
     */
    name: string;
    /** Optional description of the trunkConnection. 0-256 characters long. */
    description: string;
    /** ID of the folder that the trunkConnection belongs to. */
    folderId: string;
    /** ID of the region that the trunkConnection belongs to. */
    regionId: string;
    singlePortDirectJoint?: CreateTrunkConnectionRequest_SinglePortDirectJoint | undefined;
    lagDirectJoint?: CreateTrunkConnectionRequest_LagDirectJoint | undefined;
    partnerJointInfo?: CreateTrunkConnectionRequest_PartnerJoint | undefined;
    /**
     * ID of pointOfPresence that the trunkConnection is deployed on.
     * Optional.
     * If is not set scheduler selects it by himself.
     */
    pointOfPresenceId?: string;
    /** Capacity of the trunkConnection */
    capacity: TrunkConnection_Capacity;
    /**
     * Resource labels, `key:value` pairs.
     * No more than 64 per resource.
     * The maximum string length in characters for each value is 63.
     * Each value must match the regular expression `[-_0-9a-z]*`.
     * The string length in characters for each key must be 1-63.
     * Each key must match the regular expression `[a-z][-_0-9a-z]*`.
     */
    labels: { [key: string]: string };
    /**
     * Deletion protection flag.
     * Optional.
     * If set prohibits deletion of the trunkConnection.
     */
    deletionProtection: boolean;
}

export interface CreateTrunkConnectionRequest_LabelsEntry {
    key: string;
    value: string;
}

/** Config of trunkConnection that is deployed on single port. */
export interface CreateTrunkConnectionRequest_SinglePortDirectJoint {
    /** Type of transceiver that the trunkConnection is deployed on. */
    transceiverType: TransceiverType;
}

/** Config of trunkConnection that is deployed on lag. */
export interface CreateTrunkConnectionRequest_LagDirectJoint {
    /** Type of transceiver that the trunkConnection is deployed on. */
    transceiverType: TransceiverType;
    /** LAG allocation settings that the trunkConnection is deployed on. */
    lagAllocationSettings?: LagAllocationSettingsRequest;
}

/** Config of trunkConnection that is deployed on partner joint. */
export interface CreateTrunkConnectionRequest_PartnerJoint {
    /**
     * ID of partner that the trunkConnection is deployed on.
     * Optional.
     * If is not set scheduler selects it by himself.
     */
    partnerId?: string;
}

export interface CreateTrunkConnectionMetadata {
    /** ID of the TrunkConnection resource. */
    trunkConnectionId: string;
}

export interface UpdateTrunkConnectionRequest {
    /** ID of the TrunkConnection resource to return. */
    trunkConnectionId: string;
    /** Field mask that specifies which fields of the TrunkConnection resource are going to be updated. */
    updateMask?: FieldMask;
    /**
     * Name of the trunkConnection.
     * The name must be unique within the folder.
     * Value must match the regular expression ``\|[a-zA-Z]([-_a-zA-Z0-9]{0,61}[a-zA-Z0-9])?``.
     */
    name: string;
    /** Optional description of the trunkConnection. 0-256 characters long. */
    description: string;
    /** ID of the region that the trunkConnection belongs to. */
    regionId: string;
    /**
     * ID of pointOfPresence that the trunkConnection is deployed on.
     * Optional.
     * If is not set scheduler selects it by himself.
     */
    pointOfPresenceId?: string;
    /** Capacity of the trunkConnection */
    capacity: TrunkConnection_Capacity;
    /**
     * Resource labels, `key:value` pairs.
     * No more than 64 per resource.
     * The maximum string length in characters for each value is 63.
     * Each value must match the regular expression `[-_0-9a-z]*`.
     * The string length in characters for each key must be 1-63.
     * Each key must match the regular expression `[a-z][-_0-9a-z]*`.
     */
    labels: { [key: string]: string };
    /**
     * Deletion protection flag.
     * Optional.
     * If set prohibits deletion of the trunkConnection.
     */
    deletionProtection: boolean;
}

export interface UpdateTrunkConnectionRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateTrunkConnectionMetadata {
    /** ID of the TrunkConnection resource. */
    trunkConnectionId: string;
}

export interface DeleteTrunkConnectionRequest {
    /** ID of the TrunkConnection resource. */
    trunkConnectionId: string;
}

export interface DeleteTrunkConnectionMetadata {
    /** ID of the TrunkConnection resource. */
    trunkConnectionId: string;
}

export interface ListTrunkConnectionOperationsRequest {
    /** ID of the TrunkConnection resource. */
    trunkConnectionId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListTrunkConnectionOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListTrunkConnectionOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListTrunkConnectionOperationsResponse {
    /** List of TrunkConnection operations. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListTrunkConnectionOperationsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListTrunkConnectionOperationsRequest.page_token] query parameter
     * in the next list request. Subsequent list requests will have their own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetTrunkConnectionRequest: object = { trunkConnectionId: '' };

export const GetTrunkConnectionRequest = {
    encode(
        message: GetTrunkConnectionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.trunkConnectionId !== '') {
            writer.uint32(10).string(message.trunkConnectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetTrunkConnectionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetTrunkConnectionRequest } as GetTrunkConnectionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trunkConnectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetTrunkConnectionRequest {
        const message = { ...baseGetTrunkConnectionRequest } as GetTrunkConnectionRequest;
        message.trunkConnectionId =
            object.trunkConnectionId !== undefined && object.trunkConnectionId !== null
                ? String(object.trunkConnectionId)
                : '';
        return message;
    },

    toJSON(message: GetTrunkConnectionRequest): unknown {
        const obj: any = {};
        message.trunkConnectionId !== undefined &&
            (obj.trunkConnectionId = message.trunkConnectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetTrunkConnectionRequest>, I>>(
        object: I,
    ): GetTrunkConnectionRequest {
        const message = { ...baseGetTrunkConnectionRequest } as GetTrunkConnectionRequest;
        message.trunkConnectionId = object.trunkConnectionId ?? '';
        return message;
    },
};

const baseListTrunkConnectionsRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListTrunkConnectionsRequest = {
    encode(
        message: ListTrunkConnectionsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListTrunkConnectionsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListTrunkConnectionsRequest } as ListTrunkConnectionsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListTrunkConnectionsRequest {
        const message = { ...baseListTrunkConnectionsRequest } as ListTrunkConnectionsRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        return message;
    },

    toJSON(message: ListTrunkConnectionsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListTrunkConnectionsRequest>, I>>(
        object: I,
    ): ListTrunkConnectionsRequest {
        const message = { ...baseListTrunkConnectionsRequest } as ListTrunkConnectionsRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListTrunkConnectionsResponse: object = { nextPageToken: '' };

export const ListTrunkConnectionsResponse = {
    encode(
        message: ListTrunkConnectionsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.trunkConnections) {
            TrunkConnection.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListTrunkConnectionsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListTrunkConnectionsResponse } as ListTrunkConnectionsResponse;
        message.trunkConnections = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trunkConnections.push(TrunkConnection.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListTrunkConnectionsResponse {
        const message = { ...baseListTrunkConnectionsResponse } as ListTrunkConnectionsResponse;
        message.trunkConnections = (object.trunkConnections ?? []).map((e: any) =>
            TrunkConnection.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListTrunkConnectionsResponse): unknown {
        const obj: any = {};
        if (message.trunkConnections) {
            obj.trunkConnections = message.trunkConnections.map((e) =>
                e ? TrunkConnection.toJSON(e) : undefined,
            );
        } else {
            obj.trunkConnections = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListTrunkConnectionsResponse>, I>>(
        object: I,
    ): ListTrunkConnectionsResponse {
        const message = { ...baseListTrunkConnectionsResponse } as ListTrunkConnectionsResponse;
        message.trunkConnections =
            object.trunkConnections?.map((e) => TrunkConnection.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateTrunkConnectionRequest: object = {
    name: '',
    description: '',
    folderId: '',
    regionId: '',
    capacity: 0,
    deletionProtection: false,
};

export const CreateTrunkConnectionRequest = {
    encode(
        message: CreateTrunkConnectionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.folderId !== '') {
            writer.uint32(34).string(message.folderId);
        }
        if (message.regionId !== '') {
            writer.uint32(42).string(message.regionId);
        }
        if (message.singlePortDirectJoint !== undefined) {
            CreateTrunkConnectionRequest_SinglePortDirectJoint.encode(
                message.singlePortDirectJoint,
                writer.uint32(82).fork(),
            ).ldelim();
        }
        if (message.lagDirectJoint !== undefined) {
            CreateTrunkConnectionRequest_LagDirectJoint.encode(
                message.lagDirectJoint,
                writer.uint32(90).fork(),
            ).ldelim();
        }
        if (message.partnerJointInfo !== undefined) {
            CreateTrunkConnectionRequest_PartnerJoint.encode(
                message.partnerJointInfo,
                writer.uint32(98).fork(),
            ).ldelim();
        }
        if (message.pointOfPresenceId !== undefined) {
            StringValue.encode(
                { value: message.pointOfPresenceId! },
                writer.uint32(106).fork(),
            ).ldelim();
        }
        if (message.capacity !== 0) {
            writer.uint32(136).int32(message.capacity);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateTrunkConnectionRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(146).fork(),
            ).ldelim();
        });
        if (message.deletionProtection === true) {
            writer.uint32(160).bool(message.deletionProtection);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateTrunkConnectionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateTrunkConnectionRequest } as CreateTrunkConnectionRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 4:
                    message.folderId = reader.string();
                    break;
                case 5:
                    message.regionId = reader.string();
                    break;
                case 10:
                    message.singlePortDirectJoint =
                        CreateTrunkConnectionRequest_SinglePortDirectJoint.decode(
                            reader,
                            reader.uint32(),
                        );
                    break;
                case 11:
                    message.lagDirectJoint = CreateTrunkConnectionRequest_LagDirectJoint.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 12:
                    message.partnerJointInfo = CreateTrunkConnectionRequest_PartnerJoint.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 13:
                    message.pointOfPresenceId = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 17:
                    message.capacity = reader.int32() as any;
                    break;
                case 18:
                    const entry18 = CreateTrunkConnectionRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry18.value !== undefined) {
                        message.labels[entry18.key] = entry18.value;
                    }
                    break;
                case 20:
                    message.deletionProtection = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateTrunkConnectionRequest {
        const message = { ...baseCreateTrunkConnectionRequest } as CreateTrunkConnectionRequest;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.regionId =
            object.regionId !== undefined && object.regionId !== null
                ? String(object.regionId)
                : '';
        message.singlePortDirectJoint =
            object.singlePortDirectJoint !== undefined && object.singlePortDirectJoint !== null
                ? CreateTrunkConnectionRequest_SinglePortDirectJoint.fromJSON(
                      object.singlePortDirectJoint,
                  )
                : undefined;
        message.lagDirectJoint =
            object.lagDirectJoint !== undefined && object.lagDirectJoint !== null
                ? CreateTrunkConnectionRequest_LagDirectJoint.fromJSON(object.lagDirectJoint)
                : undefined;
        message.partnerJointInfo =
            object.partnerJointInfo !== undefined && object.partnerJointInfo !== null
                ? CreateTrunkConnectionRequest_PartnerJoint.fromJSON(object.partnerJointInfo)
                : undefined;
        message.pointOfPresenceId =
            object.pointOfPresenceId !== undefined && object.pointOfPresenceId !== null
                ? String(object.pointOfPresenceId)
                : undefined;
        message.capacity =
            object.capacity !== undefined && object.capacity !== null
                ? trunkConnection_CapacityFromJSON(object.capacity)
                : 0;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        return message;
    },

    toJSON(message: CreateTrunkConnectionRequest): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.regionId !== undefined && (obj.regionId = message.regionId);
        message.singlePortDirectJoint !== undefined &&
            (obj.singlePortDirectJoint = message.singlePortDirectJoint
                ? CreateTrunkConnectionRequest_SinglePortDirectJoint.toJSON(
                      message.singlePortDirectJoint,
                  )
                : undefined);
        message.lagDirectJoint !== undefined &&
            (obj.lagDirectJoint = message.lagDirectJoint
                ? CreateTrunkConnectionRequest_LagDirectJoint.toJSON(message.lagDirectJoint)
                : undefined);
        message.partnerJointInfo !== undefined &&
            (obj.partnerJointInfo = message.partnerJointInfo
                ? CreateTrunkConnectionRequest_PartnerJoint.toJSON(message.partnerJointInfo)
                : undefined);
        message.pointOfPresenceId !== undefined &&
            (obj.pointOfPresenceId = message.pointOfPresenceId);
        message.capacity !== undefined &&
            (obj.capacity = trunkConnection_CapacityToJSON(message.capacity));
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateTrunkConnectionRequest>, I>>(
        object: I,
    ): CreateTrunkConnectionRequest {
        const message = { ...baseCreateTrunkConnectionRequest } as CreateTrunkConnectionRequest;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.folderId = object.folderId ?? '';
        message.regionId = object.regionId ?? '';
        message.singlePortDirectJoint =
            object.singlePortDirectJoint !== undefined && object.singlePortDirectJoint !== null
                ? CreateTrunkConnectionRequest_SinglePortDirectJoint.fromPartial(
                      object.singlePortDirectJoint,
                  )
                : undefined;
        message.lagDirectJoint =
            object.lagDirectJoint !== undefined && object.lagDirectJoint !== null
                ? CreateTrunkConnectionRequest_LagDirectJoint.fromPartial(object.lagDirectJoint)
                : undefined;
        message.partnerJointInfo =
            object.partnerJointInfo !== undefined && object.partnerJointInfo !== null
                ? CreateTrunkConnectionRequest_PartnerJoint.fromPartial(object.partnerJointInfo)
                : undefined;
        message.pointOfPresenceId = object.pointOfPresenceId ?? undefined;
        message.capacity = object.capacity ?? 0;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.deletionProtection = object.deletionProtection ?? false;
        return message;
    },
};

const baseCreateTrunkConnectionRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateTrunkConnectionRequest_LabelsEntry = {
    encode(
        message: CreateTrunkConnectionRequest_LabelsEntry,
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): CreateTrunkConnectionRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateTrunkConnectionRequest_LabelsEntry,
        } as CreateTrunkConnectionRequest_LabelsEntry;
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

    fromJSON(object: any): CreateTrunkConnectionRequest_LabelsEntry {
        const message = {
            ...baseCreateTrunkConnectionRequest_LabelsEntry,
        } as CreateTrunkConnectionRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateTrunkConnectionRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateTrunkConnectionRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateTrunkConnectionRequest_LabelsEntry {
        const message = {
            ...baseCreateTrunkConnectionRequest_LabelsEntry,
        } as CreateTrunkConnectionRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateTrunkConnectionRequest_SinglePortDirectJoint: object = { transceiverType: 0 };

export const CreateTrunkConnectionRequest_SinglePortDirectJoint = {
    encode(
        message: CreateTrunkConnectionRequest_SinglePortDirectJoint,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.transceiverType !== 0) {
            writer.uint32(8).int32(message.transceiverType);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): CreateTrunkConnectionRequest_SinglePortDirectJoint {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateTrunkConnectionRequest_SinglePortDirectJoint,
        } as CreateTrunkConnectionRequest_SinglePortDirectJoint;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transceiverType = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateTrunkConnectionRequest_SinglePortDirectJoint {
        const message = {
            ...baseCreateTrunkConnectionRequest_SinglePortDirectJoint,
        } as CreateTrunkConnectionRequest_SinglePortDirectJoint;
        message.transceiverType =
            object.transceiverType !== undefined && object.transceiverType !== null
                ? transceiverTypeFromJSON(object.transceiverType)
                : 0;
        return message;
    },

    toJSON(message: CreateTrunkConnectionRequest_SinglePortDirectJoint): unknown {
        const obj: any = {};
        message.transceiverType !== undefined &&
            (obj.transceiverType = transceiverTypeToJSON(message.transceiverType));
        return obj;
    },

    fromPartial<
        I extends Exact<DeepPartial<CreateTrunkConnectionRequest_SinglePortDirectJoint>, I>,
    >(object: I): CreateTrunkConnectionRequest_SinglePortDirectJoint {
        const message = {
            ...baseCreateTrunkConnectionRequest_SinglePortDirectJoint,
        } as CreateTrunkConnectionRequest_SinglePortDirectJoint;
        message.transceiverType = object.transceiverType ?? 0;
        return message;
    },
};

const baseCreateTrunkConnectionRequest_LagDirectJoint: object = { transceiverType: 0 };

export const CreateTrunkConnectionRequest_LagDirectJoint = {
    encode(
        message: CreateTrunkConnectionRequest_LagDirectJoint,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.transceiverType !== 0) {
            writer.uint32(8).int32(message.transceiverType);
        }
        if (message.lagAllocationSettings !== undefined) {
            LagAllocationSettingsRequest.encode(
                message.lagAllocationSettings,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): CreateTrunkConnectionRequest_LagDirectJoint {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateTrunkConnectionRequest_LagDirectJoint,
        } as CreateTrunkConnectionRequest_LagDirectJoint;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transceiverType = reader.int32() as any;
                    break;
                case 3:
                    message.lagAllocationSettings = LagAllocationSettingsRequest.decode(
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

    fromJSON(object: any): CreateTrunkConnectionRequest_LagDirectJoint {
        const message = {
            ...baseCreateTrunkConnectionRequest_LagDirectJoint,
        } as CreateTrunkConnectionRequest_LagDirectJoint;
        message.transceiverType =
            object.transceiverType !== undefined && object.transceiverType !== null
                ? transceiverTypeFromJSON(object.transceiverType)
                : 0;
        message.lagAllocationSettings =
            object.lagAllocationSettings !== undefined && object.lagAllocationSettings !== null
                ? LagAllocationSettingsRequest.fromJSON(object.lagAllocationSettings)
                : undefined;
        return message;
    },

    toJSON(message: CreateTrunkConnectionRequest_LagDirectJoint): unknown {
        const obj: any = {};
        message.transceiverType !== undefined &&
            (obj.transceiverType = transceiverTypeToJSON(message.transceiverType));
        message.lagAllocationSettings !== undefined &&
            (obj.lagAllocationSettings = message.lagAllocationSettings
                ? LagAllocationSettingsRequest.toJSON(message.lagAllocationSettings)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateTrunkConnectionRequest_LagDirectJoint>, I>>(
        object: I,
    ): CreateTrunkConnectionRequest_LagDirectJoint {
        const message = {
            ...baseCreateTrunkConnectionRequest_LagDirectJoint,
        } as CreateTrunkConnectionRequest_LagDirectJoint;
        message.transceiverType = object.transceiverType ?? 0;
        message.lagAllocationSettings =
            object.lagAllocationSettings !== undefined && object.lagAllocationSettings !== null
                ? LagAllocationSettingsRequest.fromPartial(object.lagAllocationSettings)
                : undefined;
        return message;
    },
};

const baseCreateTrunkConnectionRequest_PartnerJoint: object = {};

export const CreateTrunkConnectionRequest_PartnerJoint = {
    encode(
        message: CreateTrunkConnectionRequest_PartnerJoint,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.partnerId !== undefined) {
            StringValue.encode({ value: message.partnerId! }, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): CreateTrunkConnectionRequest_PartnerJoint {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateTrunkConnectionRequest_PartnerJoint,
        } as CreateTrunkConnectionRequest_PartnerJoint;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
                    message.partnerId = StringValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateTrunkConnectionRequest_PartnerJoint {
        const message = {
            ...baseCreateTrunkConnectionRequest_PartnerJoint,
        } as CreateTrunkConnectionRequest_PartnerJoint;
        message.partnerId =
            object.partnerId !== undefined && object.partnerId !== null
                ? String(object.partnerId)
                : undefined;
        return message;
    },

    toJSON(message: CreateTrunkConnectionRequest_PartnerJoint): unknown {
        const obj: any = {};
        message.partnerId !== undefined && (obj.partnerId = message.partnerId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateTrunkConnectionRequest_PartnerJoint>, I>>(
        object: I,
    ): CreateTrunkConnectionRequest_PartnerJoint {
        const message = {
            ...baseCreateTrunkConnectionRequest_PartnerJoint,
        } as CreateTrunkConnectionRequest_PartnerJoint;
        message.partnerId = object.partnerId ?? undefined;
        return message;
    },
};

const baseCreateTrunkConnectionMetadata: object = { trunkConnectionId: '' };

export const CreateTrunkConnectionMetadata = {
    encode(
        message: CreateTrunkConnectionMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.trunkConnectionId !== '') {
            writer.uint32(10).string(message.trunkConnectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateTrunkConnectionMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateTrunkConnectionMetadata } as CreateTrunkConnectionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trunkConnectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateTrunkConnectionMetadata {
        const message = { ...baseCreateTrunkConnectionMetadata } as CreateTrunkConnectionMetadata;
        message.trunkConnectionId =
            object.trunkConnectionId !== undefined && object.trunkConnectionId !== null
                ? String(object.trunkConnectionId)
                : '';
        return message;
    },

    toJSON(message: CreateTrunkConnectionMetadata): unknown {
        const obj: any = {};
        message.trunkConnectionId !== undefined &&
            (obj.trunkConnectionId = message.trunkConnectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateTrunkConnectionMetadata>, I>>(
        object: I,
    ): CreateTrunkConnectionMetadata {
        const message = { ...baseCreateTrunkConnectionMetadata } as CreateTrunkConnectionMetadata;
        message.trunkConnectionId = object.trunkConnectionId ?? '';
        return message;
    },
};

const baseUpdateTrunkConnectionRequest: object = {
    trunkConnectionId: '',
    name: '',
    description: '',
    regionId: '',
    capacity: 0,
    deletionProtection: false,
};

export const UpdateTrunkConnectionRequest = {
    encode(
        message: UpdateTrunkConnectionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.trunkConnectionId !== '') {
            writer.uint32(10).string(message.trunkConnectionId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.regionId !== '') {
            writer.uint32(58).string(message.regionId);
        }
        if (message.pointOfPresenceId !== undefined) {
            StringValue.encode(
                { value: message.pointOfPresenceId! },
                writer.uint32(106).fork(),
            ).ldelim();
        }
        if (message.capacity !== 0) {
            writer.uint32(136).int32(message.capacity);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateTrunkConnectionRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(146).fork(),
            ).ldelim();
        });
        if (message.deletionProtection === true) {
            writer.uint32(160).bool(message.deletionProtection);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTrunkConnectionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateTrunkConnectionRequest } as UpdateTrunkConnectionRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trunkConnectionId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 7:
                    message.regionId = reader.string();
                    break;
                case 13:
                    message.pointOfPresenceId = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 17:
                    message.capacity = reader.int32() as any;
                    break;
                case 18:
                    const entry18 = UpdateTrunkConnectionRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry18.value !== undefined) {
                        message.labels[entry18.key] = entry18.value;
                    }
                    break;
                case 20:
                    message.deletionProtection = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateTrunkConnectionRequest {
        const message = { ...baseUpdateTrunkConnectionRequest } as UpdateTrunkConnectionRequest;
        message.trunkConnectionId =
            object.trunkConnectionId !== undefined && object.trunkConnectionId !== null
                ? String(object.trunkConnectionId)
                : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.regionId =
            object.regionId !== undefined && object.regionId !== null
                ? String(object.regionId)
                : '';
        message.pointOfPresenceId =
            object.pointOfPresenceId !== undefined && object.pointOfPresenceId !== null
                ? String(object.pointOfPresenceId)
                : undefined;
        message.capacity =
            object.capacity !== undefined && object.capacity !== null
                ? trunkConnection_CapacityFromJSON(object.capacity)
                : 0;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        return message;
    },

    toJSON(message: UpdateTrunkConnectionRequest): unknown {
        const obj: any = {};
        message.trunkConnectionId !== undefined &&
            (obj.trunkConnectionId = message.trunkConnectionId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.regionId !== undefined && (obj.regionId = message.regionId);
        message.pointOfPresenceId !== undefined &&
            (obj.pointOfPresenceId = message.pointOfPresenceId);
        message.capacity !== undefined &&
            (obj.capacity = trunkConnection_CapacityToJSON(message.capacity));
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateTrunkConnectionRequest>, I>>(
        object: I,
    ): UpdateTrunkConnectionRequest {
        const message = { ...baseUpdateTrunkConnectionRequest } as UpdateTrunkConnectionRequest;
        message.trunkConnectionId = object.trunkConnectionId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.regionId = object.regionId ?? '';
        message.pointOfPresenceId = object.pointOfPresenceId ?? undefined;
        message.capacity = object.capacity ?? 0;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.deletionProtection = object.deletionProtection ?? false;
        return message;
    },
};

const baseUpdateTrunkConnectionRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateTrunkConnectionRequest_LabelsEntry = {
    encode(
        message: UpdateTrunkConnectionRequest_LabelsEntry,
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): UpdateTrunkConnectionRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateTrunkConnectionRequest_LabelsEntry,
        } as UpdateTrunkConnectionRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateTrunkConnectionRequest_LabelsEntry {
        const message = {
            ...baseUpdateTrunkConnectionRequest_LabelsEntry,
        } as UpdateTrunkConnectionRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateTrunkConnectionRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateTrunkConnectionRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateTrunkConnectionRequest_LabelsEntry {
        const message = {
            ...baseUpdateTrunkConnectionRequest_LabelsEntry,
        } as UpdateTrunkConnectionRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateTrunkConnectionMetadata: object = { trunkConnectionId: '' };

export const UpdateTrunkConnectionMetadata = {
    encode(
        message: UpdateTrunkConnectionMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.trunkConnectionId !== '') {
            writer.uint32(10).string(message.trunkConnectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTrunkConnectionMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateTrunkConnectionMetadata } as UpdateTrunkConnectionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trunkConnectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateTrunkConnectionMetadata {
        const message = { ...baseUpdateTrunkConnectionMetadata } as UpdateTrunkConnectionMetadata;
        message.trunkConnectionId =
            object.trunkConnectionId !== undefined && object.trunkConnectionId !== null
                ? String(object.trunkConnectionId)
                : '';
        return message;
    },

    toJSON(message: UpdateTrunkConnectionMetadata): unknown {
        const obj: any = {};
        message.trunkConnectionId !== undefined &&
            (obj.trunkConnectionId = message.trunkConnectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateTrunkConnectionMetadata>, I>>(
        object: I,
    ): UpdateTrunkConnectionMetadata {
        const message = { ...baseUpdateTrunkConnectionMetadata } as UpdateTrunkConnectionMetadata;
        message.trunkConnectionId = object.trunkConnectionId ?? '';
        return message;
    },
};

const baseDeleteTrunkConnectionRequest: object = { trunkConnectionId: '' };

export const DeleteTrunkConnectionRequest = {
    encode(
        message: DeleteTrunkConnectionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.trunkConnectionId !== '') {
            writer.uint32(10).string(message.trunkConnectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTrunkConnectionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteTrunkConnectionRequest } as DeleteTrunkConnectionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trunkConnectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteTrunkConnectionRequest {
        const message = { ...baseDeleteTrunkConnectionRequest } as DeleteTrunkConnectionRequest;
        message.trunkConnectionId =
            object.trunkConnectionId !== undefined && object.trunkConnectionId !== null
                ? String(object.trunkConnectionId)
                : '';
        return message;
    },

    toJSON(message: DeleteTrunkConnectionRequest): unknown {
        const obj: any = {};
        message.trunkConnectionId !== undefined &&
            (obj.trunkConnectionId = message.trunkConnectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteTrunkConnectionRequest>, I>>(
        object: I,
    ): DeleteTrunkConnectionRequest {
        const message = { ...baseDeleteTrunkConnectionRequest } as DeleteTrunkConnectionRequest;
        message.trunkConnectionId = object.trunkConnectionId ?? '';
        return message;
    },
};

const baseDeleteTrunkConnectionMetadata: object = { trunkConnectionId: '' };

export const DeleteTrunkConnectionMetadata = {
    encode(
        message: DeleteTrunkConnectionMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.trunkConnectionId !== '') {
            writer.uint32(10).string(message.trunkConnectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTrunkConnectionMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteTrunkConnectionMetadata } as DeleteTrunkConnectionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trunkConnectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteTrunkConnectionMetadata {
        const message = { ...baseDeleteTrunkConnectionMetadata } as DeleteTrunkConnectionMetadata;
        message.trunkConnectionId =
            object.trunkConnectionId !== undefined && object.trunkConnectionId !== null
                ? String(object.trunkConnectionId)
                : '';
        return message;
    },

    toJSON(message: DeleteTrunkConnectionMetadata): unknown {
        const obj: any = {};
        message.trunkConnectionId !== undefined &&
            (obj.trunkConnectionId = message.trunkConnectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteTrunkConnectionMetadata>, I>>(
        object: I,
    ): DeleteTrunkConnectionMetadata {
        const message = { ...baseDeleteTrunkConnectionMetadata } as DeleteTrunkConnectionMetadata;
        message.trunkConnectionId = object.trunkConnectionId ?? '';
        return message;
    },
};

const baseListTrunkConnectionOperationsRequest: object = {
    trunkConnectionId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListTrunkConnectionOperationsRequest = {
    encode(
        message: ListTrunkConnectionOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.trunkConnectionId !== '') {
            writer.uint32(10).string(message.trunkConnectionId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListTrunkConnectionOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListTrunkConnectionOperationsRequest,
        } as ListTrunkConnectionOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trunkConnectionId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListTrunkConnectionOperationsRequest {
        const message = {
            ...baseListTrunkConnectionOperationsRequest,
        } as ListTrunkConnectionOperationsRequest;
        message.trunkConnectionId =
            object.trunkConnectionId !== undefined && object.trunkConnectionId !== null
                ? String(object.trunkConnectionId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListTrunkConnectionOperationsRequest): unknown {
        const obj: any = {};
        message.trunkConnectionId !== undefined &&
            (obj.trunkConnectionId = message.trunkConnectionId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListTrunkConnectionOperationsRequest>, I>>(
        object: I,
    ): ListTrunkConnectionOperationsRequest {
        const message = {
            ...baseListTrunkConnectionOperationsRequest,
        } as ListTrunkConnectionOperationsRequest;
        message.trunkConnectionId = object.trunkConnectionId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListTrunkConnectionOperationsResponse: object = { nextPageToken: '' };

export const ListTrunkConnectionOperationsResponse = {
    encode(
        message: ListTrunkConnectionOperationsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.operations) {
            Operation.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListTrunkConnectionOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListTrunkConnectionOperationsResponse,
        } as ListTrunkConnectionOperationsResponse;
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(Operation.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListTrunkConnectionOperationsResponse {
        const message = {
            ...baseListTrunkConnectionOperationsResponse,
        } as ListTrunkConnectionOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListTrunkConnectionOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListTrunkConnectionOperationsResponse>, I>>(
        object: I,
    ): ListTrunkConnectionOperationsResponse {
        const message = {
            ...baseListTrunkConnectionOperationsResponse,
        } as ListTrunkConnectionOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** A set of methods for managing TrunkConnection resources. */
export const TrunkConnectionServiceService = {
    /**
     * Returns the specified TrunkConnection resource.
     *
     * To get the list of available TrunkConnection resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.cic.v1.TrunkConnectionService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetTrunkConnectionRequest) =>
            Buffer.from(GetTrunkConnectionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetTrunkConnectionRequest.decode(value),
        responseSerialize: (value: TrunkConnection) =>
            Buffer.from(TrunkConnection.encode(value).finish()),
        responseDeserialize: (value: Buffer) => TrunkConnection.decode(value),
    },
    /** Retrieves the list of TrunkConnection resources in the specified folder. */
    list: {
        path: '/yandex.cloud.cic.v1.TrunkConnectionService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListTrunkConnectionsRequest) =>
            Buffer.from(ListTrunkConnectionsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListTrunkConnectionsRequest.decode(value),
        responseSerialize: (value: ListTrunkConnectionsResponse) =>
            Buffer.from(ListTrunkConnectionsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListTrunkConnectionsResponse.decode(value),
    },
    /**
     * Creates a TrunkConnection resource in the specified folder using the data specified in the request.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: {
        path: '/yandex.cloud.cic.v1.TrunkConnectionService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateTrunkConnectionRequest) =>
            Buffer.from(CreateTrunkConnectionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateTrunkConnectionRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Updates a TrunkConnection resource using the data specified in the request.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update: {
        path: '/yandex.cloud.cic.v1.TrunkConnectionService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateTrunkConnectionRequest) =>
            Buffer.from(UpdateTrunkConnectionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateTrunkConnectionRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Deletes a TrunkConnection resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    delete: {
        path: '/yandex.cloud.cic.v1.TrunkConnectionService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteTrunkConnectionRequest) =>
            Buffer.from(DeleteTrunkConnectionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteTrunkConnectionRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified TrunkConnection. */
    listOperations: {
        path: '/yandex.cloud.cic.v1.TrunkConnectionService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListTrunkConnectionOperationsRequest) =>
            Buffer.from(ListTrunkConnectionOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListTrunkConnectionOperationsRequest.decode(value),
        responseSerialize: (value: ListTrunkConnectionOperationsResponse) =>
            Buffer.from(ListTrunkConnectionOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListTrunkConnectionOperationsResponse.decode(value),
    },
} as const;

export interface TrunkConnectionServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified TrunkConnection resource.
     *
     * To get the list of available TrunkConnection resources, make a [List] request.
     */
    get: handleUnaryCall<GetTrunkConnectionRequest, TrunkConnection>;
    /** Retrieves the list of TrunkConnection resources in the specified folder. */
    list: handleUnaryCall<ListTrunkConnectionsRequest, ListTrunkConnectionsResponse>;
    /**
     * Creates a TrunkConnection resource in the specified folder using the data specified in the request.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: handleUnaryCall<CreateTrunkConnectionRequest, Operation>;
    /**
     * Updates a TrunkConnection resource using the data specified in the request.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update: handleUnaryCall<UpdateTrunkConnectionRequest, Operation>;
    /**
     * Deletes a TrunkConnection resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    delete: handleUnaryCall<DeleteTrunkConnectionRequest, Operation>;
    /** Lists operations for the specified TrunkConnection. */
    listOperations: handleUnaryCall<
        ListTrunkConnectionOperationsRequest,
        ListTrunkConnectionOperationsResponse
    >;
}

export interface TrunkConnectionServiceClient extends Client {
    /**
     * Returns the specified TrunkConnection resource.
     *
     * To get the list of available TrunkConnection resources, make a [List] request.
     */
    get(
        request: GetTrunkConnectionRequest,
        callback: (error: ServiceError | null, response: TrunkConnection) => void,
    ): ClientUnaryCall;
    get(
        request: GetTrunkConnectionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: TrunkConnection) => void,
    ): ClientUnaryCall;
    get(
        request: GetTrunkConnectionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: TrunkConnection) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of TrunkConnection resources in the specified folder. */
    list(
        request: ListTrunkConnectionsRequest,
        callback: (error: ServiceError | null, response: ListTrunkConnectionsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListTrunkConnectionsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListTrunkConnectionsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListTrunkConnectionsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListTrunkConnectionsResponse) => void,
    ): ClientUnaryCall;
    /**
     * Creates a TrunkConnection resource in the specified folder using the data specified in the request.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create(
        request: CreateTrunkConnectionRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateTrunkConnectionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateTrunkConnectionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Updates a TrunkConnection resource using the data specified in the request.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update(
        request: UpdateTrunkConnectionRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateTrunkConnectionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateTrunkConnectionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Deletes a TrunkConnection resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    delete(
        request: DeleteTrunkConnectionRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteTrunkConnectionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteTrunkConnectionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists operations for the specified TrunkConnection. */
    listOperations(
        request: ListTrunkConnectionOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListTrunkConnectionOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListTrunkConnectionOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListTrunkConnectionOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListTrunkConnectionOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListTrunkConnectionOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
}

export const TrunkConnectionServiceClient = makeGenericClientConstructor(
    TrunkConnectionServiceService,
    'yandex.cloud.cic.v1.TrunkConnectionService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): TrunkConnectionServiceClient;
    service: typeof TrunkConnectionServiceService;
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
