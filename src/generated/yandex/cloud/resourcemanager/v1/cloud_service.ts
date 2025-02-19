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
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { Cloud } from '../../../../yandex/cloud/resourcemanager/v1/cloud';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../../yandex/cloud/access/access';

export const protobufPackage = 'yandex.cloud.resourcemanager.v1';

export interface GetCloudRequest {
    /**
     * ID of the Cloud resource to return.
     * To get the cloud ID, use a [CloudService.List] request.
     */
    cloudId: string;
}

export interface ListCloudsRequest {
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListCloudsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListCloudsResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [Cloud.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
    /**
     * ID of the organization to list clouds in.
     * To get the organization ID, use a [yandex.cloud.organizationmanager.v1.OrganizationService.List] request.
     */
    organizationId: string;
}

export interface ListCloudsResponse {
    /** List of Cloud resources. */
    clouds: Cloud[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListCloudsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListCloudsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateCloudRequest {
    /**
     * ID of the organization to create a cloud in.
     * To get the organization ID, use a [yandex.cloud.organizationmanager.v1.OrganizationService.List] request.
     */
    organizationId: string;
    /** Name of the cloud. */
    name: string;
    /** Description of the cloud. */
    description: string;
    /** Resource labels as `` key:value `` pairs. */
    labels: { [key: string]: string };
}

export interface CreateCloudRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateCloudMetadata {
    /** ID of the cloud that is being created. */
    cloudId: string;
}

export interface ListCloudOperationsRequest {
    /** ID of the Cloud resource to list operations for. */
    cloudId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListCloudOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListCloudOperationsResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
}

export interface ListCloudOperationsResponse {
    /** List of operations for the specified cloud. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListCloudOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListCloudOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface UpdateCloudRequest {
    /**
     * ID of the cloud to update.
     * To get the cloud ID, use a [CloudService.List] request.
     */
    cloudId: string;
    /** Field mask that specifies which fields of the cloud are going to be updated. */
    updateMask?: FieldMask;
    /** Name of the cloud. */
    name: string;
    /** Description of the cloud. */
    description: string;
    /** Resource labels as `` key:value `` pairs. */
    labels: { [key: string]: string };
}

export interface UpdateCloudRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateCloudMetadata {
    /** ID of the cloud that is being updated. */
    cloudId: string;
}

export interface DeleteCloudRequest {
    /**
     * ID of the cloud to delete.
     * To get the cloud ID, use a [CloudService.List] request.
     */
    cloudId: string;
    /**
     * The timestamp after which the process of deleting the cloud should begin.
     * Until this timestamp, the cloud goes into the PENDING_DELETION state and all resources in this
     * cloud are stopped. In this state, it is possible to cancel the delete operation without any loss.
     * After this timestamp, the status of the cloud will become DELETING and the process of deleting
     * all the resources  of the cloud will be started. If [delete_after] is not specified it will be
     * (now + 24 hours). To initiate an immediate deletion [delete_after] must be <= now.
     */
    deleteAfter?: Date;
}

export interface DeleteCloudMetadata {
    /** ID of the cloud that is being deleted. */
    cloudId: string;
    /** The timestamp after which the process of deleting the cloud should begin. */
    deleteAfter?: Date;
    /** Information about operation cancellation */
    cancelledBy: string;
    cancelledAt?: Date;
}

const baseGetCloudRequest: object = { cloudId: '' };

export const GetCloudRequest = {
    encode(message: GetCloudRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.cloudId !== '') {
            writer.uint32(10).string(message.cloudId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetCloudRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetCloudRequest } as GetCloudRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetCloudRequest {
        const message = { ...baseGetCloudRequest } as GetCloudRequest;
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null ? String(object.cloudId) : '';
        return message;
    },

    toJSON(message: GetCloudRequest): unknown {
        const obj: any = {};
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetCloudRequest>, I>>(object: I): GetCloudRequest {
        const message = { ...baseGetCloudRequest } as GetCloudRequest;
        message.cloudId = object.cloudId ?? '';
        return message;
    },
};

const baseListCloudsRequest: object = {
    pageSize: 0,
    pageToken: '',
    filter: '',
    organizationId: '',
};

export const ListCloudsRequest = {
    encode(message: ListCloudsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pageSize !== 0) {
            writer.uint32(8).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(18).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(26).string(message.filter);
        }
        if (message.organizationId !== '') {
            writer.uint32(34).string(message.organizationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListCloudsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListCloudsRequest } as ListCloudsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.pageToken = reader.string();
                    break;
                case 3:
                    message.filter = reader.string();
                    break;
                case 4:
                    message.organizationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListCloudsRequest {
        const message = { ...baseListCloudsRequest } as ListCloudsRequest;
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        return message;
    },

    toJSON(message: ListCloudsRequest): unknown {
        const obj: any = {};
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListCloudsRequest>, I>>(object: I): ListCloudsRequest {
        const message = { ...baseListCloudsRequest } as ListCloudsRequest;
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        message.organizationId = object.organizationId ?? '';
        return message;
    },
};

const baseListCloudsResponse: object = { nextPageToken: '' };

export const ListCloudsResponse = {
    encode(message: ListCloudsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.clouds) {
            Cloud.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListCloudsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListCloudsResponse } as ListCloudsResponse;
        message.clouds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clouds.push(Cloud.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListCloudsResponse {
        const message = { ...baseListCloudsResponse } as ListCloudsResponse;
        message.clouds = (object.clouds ?? []).map((e: any) => Cloud.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListCloudsResponse): unknown {
        const obj: any = {};
        if (message.clouds) {
            obj.clouds = message.clouds.map((e) => (e ? Cloud.toJSON(e) : undefined));
        } else {
            obj.clouds = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListCloudsResponse>, I>>(
        object: I,
    ): ListCloudsResponse {
        const message = { ...baseListCloudsResponse } as ListCloudsResponse;
        message.clouds = object.clouds?.map((e) => Cloud.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateCloudRequest: object = { organizationId: '', name: '', description: '' };

export const CreateCloudRequest = {
    encode(message: CreateCloudRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateCloudRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateCloudRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateCloudRequest } as CreateCloudRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = CreateCloudRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateCloudRequest {
        const message = { ...baseCreateCloudRequest } as CreateCloudRequest;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
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
        return message;
    },

    toJSON(message: CreateCloudRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateCloudRequest>, I>>(
        object: I,
    ): CreateCloudRequest {
        const message = { ...baseCreateCloudRequest } as CreateCloudRequest;
        message.organizationId = object.organizationId ?? '';
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
        return message;
    },
};

const baseCreateCloudRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateCloudRequest_LabelsEntry = {
    encode(
        message: CreateCloudRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateCloudRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateCloudRequest_LabelsEntry } as CreateCloudRequest_LabelsEntry;
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

    fromJSON(object: any): CreateCloudRequest_LabelsEntry {
        const message = { ...baseCreateCloudRequest_LabelsEntry } as CreateCloudRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateCloudRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateCloudRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateCloudRequest_LabelsEntry {
        const message = { ...baseCreateCloudRequest_LabelsEntry } as CreateCloudRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateCloudMetadata: object = { cloudId: '' };

export const CreateCloudMetadata = {
    encode(message: CreateCloudMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.cloudId !== '') {
            writer.uint32(10).string(message.cloudId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateCloudMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateCloudMetadata } as CreateCloudMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateCloudMetadata {
        const message = { ...baseCreateCloudMetadata } as CreateCloudMetadata;
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null ? String(object.cloudId) : '';
        return message;
    },

    toJSON(message: CreateCloudMetadata): unknown {
        const obj: any = {};
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateCloudMetadata>, I>>(
        object: I,
    ): CreateCloudMetadata {
        const message = { ...baseCreateCloudMetadata } as CreateCloudMetadata;
        message.cloudId = object.cloudId ?? '';
        return message;
    },
};

const baseListCloudOperationsRequest: object = { cloudId: '', pageSize: 0, pageToken: '' };

export const ListCloudOperationsRequest = {
    encode(
        message: ListCloudOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.cloudId !== '') {
            writer.uint32(10).string(message.cloudId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListCloudOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListCloudOperationsRequest } as ListCloudOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudId = reader.string();
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

    fromJSON(object: any): ListCloudOperationsRequest {
        const message = { ...baseListCloudOperationsRequest } as ListCloudOperationsRequest;
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null ? String(object.cloudId) : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListCloudOperationsRequest): unknown {
        const obj: any = {};
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListCloudOperationsRequest>, I>>(
        object: I,
    ): ListCloudOperationsRequest {
        const message = { ...baseListCloudOperationsRequest } as ListCloudOperationsRequest;
        message.cloudId = object.cloudId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListCloudOperationsResponse: object = { nextPageToken: '' };

export const ListCloudOperationsResponse = {
    encode(
        message: ListCloudOperationsResponse,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListCloudOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListCloudOperationsResponse } as ListCloudOperationsResponse;
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

    fromJSON(object: any): ListCloudOperationsResponse {
        const message = { ...baseListCloudOperationsResponse } as ListCloudOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListCloudOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListCloudOperationsResponse>, I>>(
        object: I,
    ): ListCloudOperationsResponse {
        const message = { ...baseListCloudOperationsResponse } as ListCloudOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseUpdateCloudRequest: object = { cloudId: '', name: '', description: '' };

export const UpdateCloudRequest = {
    encode(message: UpdateCloudRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.cloudId !== '') {
            writer.uint32(10).string(message.cloudId);
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
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateCloudRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCloudRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateCloudRequest } as UpdateCloudRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudId = reader.string();
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
                case 5:
                    const entry5 = UpdateCloudRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateCloudRequest {
        const message = { ...baseUpdateCloudRequest } as UpdateCloudRequest;
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null ? String(object.cloudId) : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
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
        return message;
    },

    toJSON(message: UpdateCloudRequest): unknown {
        const obj: any = {};
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateCloudRequest>, I>>(
        object: I,
    ): UpdateCloudRequest {
        const message = { ...baseUpdateCloudRequest } as UpdateCloudRequest;
        message.cloudId = object.cloudId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
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
        return message;
    },
};

const baseUpdateCloudRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateCloudRequest_LabelsEntry = {
    encode(
        message: UpdateCloudRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCloudRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateCloudRequest_LabelsEntry } as UpdateCloudRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateCloudRequest_LabelsEntry {
        const message = { ...baseUpdateCloudRequest_LabelsEntry } as UpdateCloudRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateCloudRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateCloudRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateCloudRequest_LabelsEntry {
        const message = { ...baseUpdateCloudRequest_LabelsEntry } as UpdateCloudRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateCloudMetadata: object = { cloudId: '' };

export const UpdateCloudMetadata = {
    encode(message: UpdateCloudMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.cloudId !== '') {
            writer.uint32(10).string(message.cloudId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCloudMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateCloudMetadata } as UpdateCloudMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateCloudMetadata {
        const message = { ...baseUpdateCloudMetadata } as UpdateCloudMetadata;
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null ? String(object.cloudId) : '';
        return message;
    },

    toJSON(message: UpdateCloudMetadata): unknown {
        const obj: any = {};
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateCloudMetadata>, I>>(
        object: I,
    ): UpdateCloudMetadata {
        const message = { ...baseUpdateCloudMetadata } as UpdateCloudMetadata;
        message.cloudId = object.cloudId ?? '';
        return message;
    },
};

const baseDeleteCloudRequest: object = { cloudId: '' };

export const DeleteCloudRequest = {
    encode(message: DeleteCloudRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.cloudId !== '') {
            writer.uint32(10).string(message.cloudId);
        }
        if (message.deleteAfter !== undefined) {
            Timestamp.encode(toTimestamp(message.deleteAfter), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteCloudRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteCloudRequest } as DeleteCloudRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudId = reader.string();
                    break;
                case 2:
                    message.deleteAfter = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteCloudRequest {
        const message = { ...baseDeleteCloudRequest } as DeleteCloudRequest;
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null ? String(object.cloudId) : '';
        message.deleteAfter =
            object.deleteAfter !== undefined && object.deleteAfter !== null
                ? fromJsonTimestamp(object.deleteAfter)
                : undefined;
        return message;
    },

    toJSON(message: DeleteCloudRequest): unknown {
        const obj: any = {};
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.deleteAfter !== undefined && (obj.deleteAfter = message.deleteAfter.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteCloudRequest>, I>>(
        object: I,
    ): DeleteCloudRequest {
        const message = { ...baseDeleteCloudRequest } as DeleteCloudRequest;
        message.cloudId = object.cloudId ?? '';
        message.deleteAfter = object.deleteAfter ?? undefined;
        return message;
    },
};

const baseDeleteCloudMetadata: object = { cloudId: '', cancelledBy: '' };

export const DeleteCloudMetadata = {
    encode(message: DeleteCloudMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.cloudId !== '') {
            writer.uint32(10).string(message.cloudId);
        }
        if (message.deleteAfter !== undefined) {
            Timestamp.encode(toTimestamp(message.deleteAfter), writer.uint32(18).fork()).ldelim();
        }
        if (message.cancelledBy !== '') {
            writer.uint32(26).string(message.cancelledBy);
        }
        if (message.cancelledAt !== undefined) {
            Timestamp.encode(toTimestamp(message.cancelledAt), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteCloudMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteCloudMetadata } as DeleteCloudMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudId = reader.string();
                    break;
                case 2:
                    message.deleteAfter = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.cancelledBy = reader.string();
                    break;
                case 4:
                    message.cancelledAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteCloudMetadata {
        const message = { ...baseDeleteCloudMetadata } as DeleteCloudMetadata;
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null ? String(object.cloudId) : '';
        message.deleteAfter =
            object.deleteAfter !== undefined && object.deleteAfter !== null
                ? fromJsonTimestamp(object.deleteAfter)
                : undefined;
        message.cancelledBy =
            object.cancelledBy !== undefined && object.cancelledBy !== null
                ? String(object.cancelledBy)
                : '';
        message.cancelledAt =
            object.cancelledAt !== undefined && object.cancelledAt !== null
                ? fromJsonTimestamp(object.cancelledAt)
                : undefined;
        return message;
    },

    toJSON(message: DeleteCloudMetadata): unknown {
        const obj: any = {};
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.deleteAfter !== undefined && (obj.deleteAfter = message.deleteAfter.toISOString());
        message.cancelledBy !== undefined && (obj.cancelledBy = message.cancelledBy);
        message.cancelledAt !== undefined && (obj.cancelledAt = message.cancelledAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteCloudMetadata>, I>>(
        object: I,
    ): DeleteCloudMetadata {
        const message = { ...baseDeleteCloudMetadata } as DeleteCloudMetadata;
        message.cloudId = object.cloudId ?? '';
        message.deleteAfter = object.deleteAfter ?? undefined;
        message.cancelledBy = object.cancelledBy ?? '';
        message.cancelledAt = object.cancelledAt ?? undefined;
        return message;
    },
};

/** A set of methods for managing Cloud resources. */
export const CloudServiceService = {
    /**
     * Returns the specified Cloud resource.
     *
     * To get the list of available Cloud resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.resourcemanager.v1.CloudService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetCloudRequest) =>
            Buffer.from(GetCloudRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetCloudRequest.decode(value),
        responseSerialize: (value: Cloud) => Buffer.from(Cloud.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Cloud.decode(value),
    },
    /** Retrieves the list of Cloud resources. */
    list: {
        path: '/yandex.cloud.resourcemanager.v1.CloudService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListCloudsRequest) =>
            Buffer.from(ListCloudsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListCloudsRequest.decode(value),
        responseSerialize: (value: ListCloudsResponse) =>
            Buffer.from(ListCloudsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListCloudsResponse.decode(value),
    },
    /** Creates a cloud in the specified organization. */
    create: {
        path: '/yandex.cloud.resourcemanager.v1.CloudService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateCloudRequest) =>
            Buffer.from(CreateCloudRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateCloudRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified cloud. */
    update: {
        path: '/yandex.cloud.resourcemanager.v1.CloudService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateCloudRequest) =>
            Buffer.from(UpdateCloudRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateCloudRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified cloud. */
    delete: {
        path: '/yandex.cloud.resourcemanager.v1.CloudService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteCloudRequest) =>
            Buffer.from(DeleteCloudRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteCloudRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified cloud. */
    listOperations: {
        path: '/yandex.cloud.resourcemanager.v1.CloudService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListCloudOperationsRequest) =>
            Buffer.from(ListCloudOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListCloudOperationsRequest.decode(value),
        responseSerialize: (value: ListCloudOperationsResponse) =>
            Buffer.from(ListCloudOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListCloudOperationsResponse.decode(value),
    },
    /** Lists access bindings for the specified cloud. */
    listAccessBindings: {
        path: '/yandex.cloud.resourcemanager.v1.CloudService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified cloud. */
    setAccessBindings: {
        path: '/yandex.cloud.resourcemanager.v1.CloudService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetAccessBindingsRequest) =>
            Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates access bindings for the specified cloud. */
    updateAccessBindings: {
        path: '/yandex.cloud.resourcemanager.v1.CloudService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface CloudServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Cloud resource.
     *
     * To get the list of available Cloud resources, make a [List] request.
     */
    get: handleUnaryCall<GetCloudRequest, Cloud>;
    /** Retrieves the list of Cloud resources. */
    list: handleUnaryCall<ListCloudsRequest, ListCloudsResponse>;
    /** Creates a cloud in the specified organization. */
    create: handleUnaryCall<CreateCloudRequest, Operation>;
    /** Updates the specified cloud. */
    update: handleUnaryCall<UpdateCloudRequest, Operation>;
    /** Deletes the specified cloud. */
    delete: handleUnaryCall<DeleteCloudRequest, Operation>;
    /** Lists operations for the specified cloud. */
    listOperations: handleUnaryCall<ListCloudOperationsRequest, ListCloudOperationsResponse>;
    /** Lists access bindings for the specified cloud. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the specified cloud. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified cloud. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface CloudServiceClient extends Client {
    /**
     * Returns the specified Cloud resource.
     *
     * To get the list of available Cloud resources, make a [List] request.
     */
    get(
        request: GetCloudRequest,
        callback: (error: ServiceError | null, response: Cloud) => void,
    ): ClientUnaryCall;
    get(
        request: GetCloudRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Cloud) => void,
    ): ClientUnaryCall;
    get(
        request: GetCloudRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Cloud) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of Cloud resources. */
    list(
        request: ListCloudsRequest,
        callback: (error: ServiceError | null, response: ListCloudsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListCloudsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListCloudsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListCloudsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListCloudsResponse) => void,
    ): ClientUnaryCall;
    /** Creates a cloud in the specified organization. */
    create(
        request: CreateCloudRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateCloudRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateCloudRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified cloud. */
    update(
        request: UpdateCloudRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateCloudRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateCloudRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified cloud. */
    delete(
        request: DeleteCloudRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteCloudRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteCloudRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists operations for the specified cloud. */
    listOperations(
        request: ListCloudOperationsRequest,
        callback: (error: ServiceError | null, response: ListCloudOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListCloudOperationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListCloudOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListCloudOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListCloudOperationsResponse) => void,
    ): ClientUnaryCall;
    /** Lists access bindings for the specified cloud. */
    listAccessBindings(
        request: ListAccessBindingsRequest,
        callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
    ): ClientUnaryCall;
    /** Sets access bindings for the specified cloud. */
    setAccessBindings(
        request: SetAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates access bindings for the specified cloud. */
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const CloudServiceClient = makeGenericClientConstructor(
    CloudServiceService,
    'yandex.cloud.resourcemanager.v1.CloudService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): CloudServiceClient;
    service: typeof CloudServiceService;
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
