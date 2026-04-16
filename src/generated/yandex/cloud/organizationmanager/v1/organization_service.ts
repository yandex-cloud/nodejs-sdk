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
import { Organization } from '../../../../yandex/cloud/organizationmanager/v1/organization';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../../yandex/cloud/access/access';

export const protobufPackage = 'yandex.cloud.organizationmanager.v1';

export interface GetOrganizationRequest {
    /**
     * ID of the Organization resource to return.
     * To get the organization ID, use a [OrganizationService.List] request.
     */
    organizationId: string;
}

export interface ListOrganizationsRequest {
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListOrganizationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListOrganizationsResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [Organization.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
}

export interface ListOrganizationsResponse {
    /** List of Organization resources. */
    organizations: Organization[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListOrganizationsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListOrganizationsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface UpdateOrganizationRequest {
    /**
     * ID of the organization to update.
     * To get the organization ID, use a [OrganizationService.List] request.
     */
    organizationId: string;
    /** Field mask that specifies which fields of the organization are going to be updated. */
    updateMask?: FieldMask;
    /** Name of the organization. */
    name: string;
    /** Description of the organization. */
    description: string;
    /** Display name of the organization. */
    title: string;
    /** Resource labels as `` key:value `` pairs. */
    labels: { [key: string]: string };
}

export interface UpdateOrganizationRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateOrganizationMetadata {
    /** ID of the organization that is being updated. */
    organizationId: string;
}

export interface ListOrganizationOperationsRequest {
    /** ID of the Organization resource to list operations for. */
    organizationId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListOrganizationOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListOrganizationOperationsResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
}

export interface ListOrganizationOperationsResponse {
    /** List of operations for the specified organization. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListOrganizationOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListOrganizationOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetOrganizationRequest: object = { organizationId: '' };

export const GetOrganizationRequest = {
    encode(message: GetOrganizationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetOrganizationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetOrganizationRequest } as GetOrganizationRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetOrganizationRequest {
        const message = { ...baseGetOrganizationRequest } as GetOrganizationRequest;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        return message;
    },

    toJSON(message: GetOrganizationRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetOrganizationRequest>, I>>(
        object: I,
    ): GetOrganizationRequest {
        const message = { ...baseGetOrganizationRequest } as GetOrganizationRequest;
        message.organizationId = object.organizationId ?? '';
        return message;
    },
};

const baseListOrganizationsRequest: object = { pageSize: 0, pageToken: '', filter: '' };

export const ListOrganizationsRequest = {
    encode(
        message: ListOrganizationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.pageSize !== 0) {
            writer.uint32(8).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(18).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(26).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListOrganizationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListOrganizationsRequest } as ListOrganizationsRequest;
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListOrganizationsRequest {
        const message = { ...baseListOrganizationsRequest } as ListOrganizationsRequest;
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

    toJSON(message: ListOrganizationsRequest): unknown {
        const obj: any = {};
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListOrganizationsRequest>, I>>(
        object: I,
    ): ListOrganizationsRequest {
        const message = { ...baseListOrganizationsRequest } as ListOrganizationsRequest;
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListOrganizationsResponse: object = { nextPageToken: '' };

export const ListOrganizationsResponse = {
    encode(
        message: ListOrganizationsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.organizations) {
            Organization.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListOrganizationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListOrganizationsResponse } as ListOrganizationsResponse;
        message.organizations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizations.push(Organization.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListOrganizationsResponse {
        const message = { ...baseListOrganizationsResponse } as ListOrganizationsResponse;
        message.organizations = (object.organizations ?? []).map((e: any) =>
            Organization.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListOrganizationsResponse): unknown {
        const obj: any = {};
        if (message.organizations) {
            obj.organizations = message.organizations.map((e) =>
                e ? Organization.toJSON(e) : undefined,
            );
        } else {
            obj.organizations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListOrganizationsResponse>, I>>(
        object: I,
    ): ListOrganizationsResponse {
        const message = { ...baseListOrganizationsResponse } as ListOrganizationsResponse;
        message.organizations = object.organizations?.map((e) => Organization.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseUpdateOrganizationRequest: object = {
    organizationId: '',
    name: '',
    description: '',
    title: '',
};

export const UpdateOrganizationRequest = {
    encode(
        message: UpdateOrganizationRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
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
        if (message.title !== '') {
            writer.uint32(42).string(message.title);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateOrganizationRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrganizationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateOrganizationRequest } as UpdateOrganizationRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
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
                    message.title = reader.string();
                    break;
                case 6:
                    const entry6 = UpdateOrganizationRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateOrganizationRequest {
        const message = { ...baseUpdateOrganizationRequest } as UpdateOrganizationRequest;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
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
        message.title =
            object.title !== undefined && object.title !== null ? String(object.title) : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: UpdateOrganizationRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.title !== undefined && (obj.title = message.title);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateOrganizationRequest>, I>>(
        object: I,
    ): UpdateOrganizationRequest {
        const message = { ...baseUpdateOrganizationRequest } as UpdateOrganizationRequest;
        message.organizationId = object.organizationId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.title = object.title ?? '';
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

const baseUpdateOrganizationRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateOrganizationRequest_LabelsEntry = {
    encode(
        message: UpdateOrganizationRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrganizationRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateOrganizationRequest_LabelsEntry,
        } as UpdateOrganizationRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateOrganizationRequest_LabelsEntry {
        const message = {
            ...baseUpdateOrganizationRequest_LabelsEntry,
        } as UpdateOrganizationRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateOrganizationRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateOrganizationRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateOrganizationRequest_LabelsEntry {
        const message = {
            ...baseUpdateOrganizationRequest_LabelsEntry,
        } as UpdateOrganizationRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateOrganizationMetadata: object = { organizationId: '' };

export const UpdateOrganizationMetadata = {
    encode(
        message: UpdateOrganizationMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrganizationMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateOrganizationMetadata } as UpdateOrganizationMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateOrganizationMetadata {
        const message = { ...baseUpdateOrganizationMetadata } as UpdateOrganizationMetadata;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        return message;
    },

    toJSON(message: UpdateOrganizationMetadata): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateOrganizationMetadata>, I>>(
        object: I,
    ): UpdateOrganizationMetadata {
        const message = { ...baseUpdateOrganizationMetadata } as UpdateOrganizationMetadata;
        message.organizationId = object.organizationId ?? '';
        return message;
    },
};

const baseListOrganizationOperationsRequest: object = {
    organizationId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListOrganizationOperationsRequest = {
    encode(
        message: ListOrganizationOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListOrganizationOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListOrganizationOperationsRequest,
        } as ListOrganizationOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
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

    fromJSON(object: any): ListOrganizationOperationsRequest {
        const message = {
            ...baseListOrganizationOperationsRequest,
        } as ListOrganizationOperationsRequest;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListOrganizationOperationsRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListOrganizationOperationsRequest>, I>>(
        object: I,
    ): ListOrganizationOperationsRequest {
        const message = {
            ...baseListOrganizationOperationsRequest,
        } as ListOrganizationOperationsRequest;
        message.organizationId = object.organizationId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListOrganizationOperationsResponse: object = { nextPageToken: '' };

export const ListOrganizationOperationsResponse = {
    encode(
        message: ListOrganizationOperationsResponse,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListOrganizationOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListOrganizationOperationsResponse,
        } as ListOrganizationOperationsResponse;
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

    fromJSON(object: any): ListOrganizationOperationsResponse {
        const message = {
            ...baseListOrganizationOperationsResponse,
        } as ListOrganizationOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListOrganizationOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListOrganizationOperationsResponse>, I>>(
        object: I,
    ): ListOrganizationOperationsResponse {
        const message = {
            ...baseListOrganizationOperationsResponse,
        } as ListOrganizationOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** A set of methods for managing Organization resources. */
export const OrganizationServiceService = {
    /**
     * Returns the specified Organization resource.
     *
     * To get the list of available Organization resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.organizationmanager.v1.OrganizationService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetOrganizationRequest) =>
            Buffer.from(GetOrganizationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetOrganizationRequest.decode(value),
        responseSerialize: (value: Organization) =>
            Buffer.from(Organization.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Organization.decode(value),
    },
    /** Retrieves the list of Organization resources. */
    list: {
        path: '/yandex.cloud.organizationmanager.v1.OrganizationService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListOrganizationsRequest) =>
            Buffer.from(ListOrganizationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListOrganizationsRequest.decode(value),
        responseSerialize: (value: ListOrganizationsResponse) =>
            Buffer.from(ListOrganizationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListOrganizationsResponse.decode(value),
    },
    /** Updates the specified organization. */
    update: {
        path: '/yandex.cloud.organizationmanager.v1.OrganizationService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateOrganizationRequest) =>
            Buffer.from(UpdateOrganizationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateOrganizationRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified organization. */
    listOperations: {
        path: '/yandex.cloud.organizationmanager.v1.OrganizationService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListOrganizationOperationsRequest) =>
            Buffer.from(ListOrganizationOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListOrganizationOperationsRequest.decode(value),
        responseSerialize: (value: ListOrganizationOperationsResponse) =>
            Buffer.from(ListOrganizationOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListOrganizationOperationsResponse.decode(value),
    },
    /** Lists access bindings for the specified organization. */
    listAccessBindings: {
        path: '/yandex.cloud.organizationmanager.v1.OrganizationService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified organization. */
    setAccessBindings: {
        path: '/yandex.cloud.organizationmanager.v1.OrganizationService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetAccessBindingsRequest) =>
            Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates access bindings for the specified organization. */
    updateAccessBindings: {
        path: '/yandex.cloud.organizationmanager.v1.OrganizationService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface OrganizationServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Organization resource.
     *
     * To get the list of available Organization resources, make a [List] request.
     */
    get: handleUnaryCall<GetOrganizationRequest, Organization>;
    /** Retrieves the list of Organization resources. */
    list: handleUnaryCall<ListOrganizationsRequest, ListOrganizationsResponse>;
    /** Updates the specified organization. */
    update: handleUnaryCall<UpdateOrganizationRequest, Operation>;
    /** Lists operations for the specified organization. */
    listOperations: handleUnaryCall<
        ListOrganizationOperationsRequest,
        ListOrganizationOperationsResponse
    >;
    /** Lists access bindings for the specified organization. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the specified organization. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified organization. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface OrganizationServiceClient extends Client {
    /**
     * Returns the specified Organization resource.
     *
     * To get the list of available Organization resources, make a [List] request.
     */
    get(
        request: GetOrganizationRequest,
        callback: (error: ServiceError | null, response: Organization) => void,
    ): ClientUnaryCall;
    get(
        request: GetOrganizationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Organization) => void,
    ): ClientUnaryCall;
    get(
        request: GetOrganizationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Organization) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of Organization resources. */
    list(
        request: ListOrganizationsRequest,
        callback: (error: ServiceError | null, response: ListOrganizationsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListOrganizationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListOrganizationsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListOrganizationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListOrganizationsResponse) => void,
    ): ClientUnaryCall;
    /** Updates the specified organization. */
    update(
        request: UpdateOrganizationRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateOrganizationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateOrganizationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists operations for the specified organization. */
    listOperations(
        request: ListOrganizationOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListOrganizationOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListOrganizationOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListOrganizationOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListOrganizationOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListOrganizationOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
    /** Lists access bindings for the specified organization. */
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
    /** Sets access bindings for the specified organization. */
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
    /** Updates access bindings for the specified organization. */
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

export const OrganizationServiceClient = makeGenericClientConstructor(
    OrganizationServiceService,
    'yandex.cloud.organizationmanager.v1.OrganizationService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): OrganizationServiceClient;
    service: typeof OrganizationServiceService;
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
