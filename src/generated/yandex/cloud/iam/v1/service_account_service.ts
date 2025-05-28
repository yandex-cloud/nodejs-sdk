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
import { ServiceAccount } from '../../../../yandex/cloud/iam/v1/service_account';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../../yandex/cloud/access/access';

export const protobufPackage = 'yandex.cloud.iam.v1';

export interface GetServiceAccountRequest {
    /**
     * ID of the ServiceAccount resource to return.
     * To get the service account ID, use a [ServiceAccountService.List] request.
     */
    serviceAccountId: string;
}

export interface ListServiceAccountsRequest {
    /**
     * ID of the folder to list service accounts in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListServiceAccountsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListServiceAccountsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [ServiceAccount.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
}

export interface ListServiceAccountsResponse {
    /** List of ServiceAccount resources. */
    serviceAccounts: ServiceAccount[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListServiceAccountsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListServiceAccountsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateServiceAccountRequest {
    /**
     * ID of the folder to create a service account in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the service account.
     * The name must be unique within the cloud.
     */
    name: string;
    /** Description of the service account. */
    description: string;
    /** Resource labels as `` key:value `` pairs. */
    labels: { [key: string]: string };
}

export interface CreateServiceAccountRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateServiceAccountMetadata {
    /** ID of the service account that is being created. */
    serviceAccountId: string;
}

export interface UpdateServiceAccountRequest {
    /**
     * ID of the ServiceAccount resource to update.
     * To get the service account ID, use a [ServiceAccountService.List] request.
     */
    serviceAccountId: string;
    /** Field mask that specifies which fields of the ServiceAccount resource are going to be updated. */
    updateMask?: FieldMask;
    /**
     * Name of the service account.
     * The name must be unique within the cloud.
     */
    name: string;
    /** Description of the service account. */
    description: string;
    /** Resource labels as `` key:value `` pairs. */
    labels: { [key: string]: string };
}

export interface UpdateServiceAccountRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateServiceAccountMetadata {
    /** ID of the ServiceAccount resource that is being updated. */
    serviceAccountId: string;
}

export interface DeleteServiceAccountRequest {
    /**
     * ID of the service account to delete.
     * To get the service account ID, use a [ServiceAccountService.List] request.
     */
    serviceAccountId: string;
}

export interface DeleteServiceAccountMetadata {
    /** ID of the service account that is being deleted. */
    serviceAccountId: string;
}

export interface ListServiceAccountOperationsRequest {
    /** ID of the ServiceAccount resource to list operations for. */
    serviceAccountId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListServiceAccountOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListServiceAccountOperationsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}

export interface ListServiceAccountOperationsResponse {
    /** List of operations for the specified service account. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListServiceAccountOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListServiceAccountOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetServiceAccountRequest: object = { serviceAccountId: '' };

export const GetServiceAccountRequest = {
    encode(
        message: GetServiceAccountRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceAccountRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetServiceAccountRequest } as GetServiceAccountRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetServiceAccountRequest {
        const message = { ...baseGetServiceAccountRequest } as GetServiceAccountRequest;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        return message;
    },

    toJSON(message: GetServiceAccountRequest): unknown {
        const obj: any = {};
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetServiceAccountRequest>, I>>(
        object: I,
    ): GetServiceAccountRequest {
        const message = { ...baseGetServiceAccountRequest } as GetServiceAccountRequest;
        message.serviceAccountId = object.serviceAccountId ?? '';
        return message;
    },
};

const baseListServiceAccountsRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListServiceAccountsRequest = {
    encode(
        message: ListServiceAccountsRequest,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListServiceAccountsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListServiceAccountsRequest } as ListServiceAccountsRequest;
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

    fromJSON(object: any): ListServiceAccountsRequest {
        const message = { ...baseListServiceAccountsRequest } as ListServiceAccountsRequest;
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

    toJSON(message: ListServiceAccountsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListServiceAccountsRequest>, I>>(
        object: I,
    ): ListServiceAccountsRequest {
        const message = { ...baseListServiceAccountsRequest } as ListServiceAccountsRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListServiceAccountsResponse: object = { nextPageToken: '' };

export const ListServiceAccountsResponse = {
    encode(
        message: ListServiceAccountsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.serviceAccounts) {
            ServiceAccount.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListServiceAccountsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListServiceAccountsResponse } as ListServiceAccountsResponse;
        message.serviceAccounts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccounts.push(ServiceAccount.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListServiceAccountsResponse {
        const message = { ...baseListServiceAccountsResponse } as ListServiceAccountsResponse;
        message.serviceAccounts = (object.serviceAccounts ?? []).map((e: any) =>
            ServiceAccount.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListServiceAccountsResponse): unknown {
        const obj: any = {};
        if (message.serviceAccounts) {
            obj.serviceAccounts = message.serviceAccounts.map((e) =>
                e ? ServiceAccount.toJSON(e) : undefined,
            );
        } else {
            obj.serviceAccounts = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListServiceAccountsResponse>, I>>(
        object: I,
    ): ListServiceAccountsResponse {
        const message = { ...baseListServiceAccountsResponse } as ListServiceAccountsResponse;
        message.serviceAccounts =
            object.serviceAccounts?.map((e) => ServiceAccount.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateServiceAccountRequest: object = { folderId: '', name: '', description: '' };

export const CreateServiceAccountRequest = {
    encode(
        message: CreateServiceAccountRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateServiceAccountRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateServiceAccountRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateServiceAccountRequest } as CreateServiceAccountRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = CreateServiceAccountRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
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

    fromJSON(object: any): CreateServiceAccountRequest {
        const message = { ...baseCreateServiceAccountRequest } as CreateServiceAccountRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
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

    toJSON(message: CreateServiceAccountRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
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

    fromPartial<I extends Exact<DeepPartial<CreateServiceAccountRequest>, I>>(
        object: I,
    ): CreateServiceAccountRequest {
        const message = { ...baseCreateServiceAccountRequest } as CreateServiceAccountRequest;
        message.folderId = object.folderId ?? '';
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

const baseCreateServiceAccountRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateServiceAccountRequest_LabelsEntry = {
    encode(
        message: CreateServiceAccountRequest_LabelsEntry,
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
    ): CreateServiceAccountRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateServiceAccountRequest_LabelsEntry,
        } as CreateServiceAccountRequest_LabelsEntry;
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

    fromJSON(object: any): CreateServiceAccountRequest_LabelsEntry {
        const message = {
            ...baseCreateServiceAccountRequest_LabelsEntry,
        } as CreateServiceAccountRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateServiceAccountRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateServiceAccountRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateServiceAccountRequest_LabelsEntry {
        const message = {
            ...baseCreateServiceAccountRequest_LabelsEntry,
        } as CreateServiceAccountRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateServiceAccountMetadata: object = { serviceAccountId: '' };

export const CreateServiceAccountMetadata = {
    encode(
        message: CreateServiceAccountMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateServiceAccountMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateServiceAccountMetadata } as CreateServiceAccountMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateServiceAccountMetadata {
        const message = { ...baseCreateServiceAccountMetadata } as CreateServiceAccountMetadata;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        return message;
    },

    toJSON(message: CreateServiceAccountMetadata): unknown {
        const obj: any = {};
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateServiceAccountMetadata>, I>>(
        object: I,
    ): CreateServiceAccountMetadata {
        const message = { ...baseCreateServiceAccountMetadata } as CreateServiceAccountMetadata;
        message.serviceAccountId = object.serviceAccountId ?? '';
        return message;
    },
};

const baseUpdateServiceAccountRequest: object = { serviceAccountId: '', name: '', description: '' };

export const UpdateServiceAccountRequest = {
    encode(
        message: UpdateServiceAccountRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
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
            UpdateServiceAccountRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateServiceAccountRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateServiceAccountRequest } as UpdateServiceAccountRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
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
                    const entry5 = UpdateServiceAccountRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
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

    fromJSON(object: any): UpdateServiceAccountRequest {
        const message = { ...baseUpdateServiceAccountRequest } as UpdateServiceAccountRequest;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
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
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: UpdateServiceAccountRequest): unknown {
        const obj: any = {};
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
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

    fromPartial<I extends Exact<DeepPartial<UpdateServiceAccountRequest>, I>>(
        object: I,
    ): UpdateServiceAccountRequest {
        const message = { ...baseUpdateServiceAccountRequest } as UpdateServiceAccountRequest;
        message.serviceAccountId = object.serviceAccountId ?? '';
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

const baseUpdateServiceAccountRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateServiceAccountRequest_LabelsEntry = {
    encode(
        message: UpdateServiceAccountRequest_LabelsEntry,
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
    ): UpdateServiceAccountRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateServiceAccountRequest_LabelsEntry,
        } as UpdateServiceAccountRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateServiceAccountRequest_LabelsEntry {
        const message = {
            ...baseUpdateServiceAccountRequest_LabelsEntry,
        } as UpdateServiceAccountRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateServiceAccountRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateServiceAccountRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateServiceAccountRequest_LabelsEntry {
        const message = {
            ...baseUpdateServiceAccountRequest_LabelsEntry,
        } as UpdateServiceAccountRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateServiceAccountMetadata: object = { serviceAccountId: '' };

export const UpdateServiceAccountMetadata = {
    encode(
        message: UpdateServiceAccountMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateServiceAccountMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateServiceAccountMetadata } as UpdateServiceAccountMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateServiceAccountMetadata {
        const message = { ...baseUpdateServiceAccountMetadata } as UpdateServiceAccountMetadata;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        return message;
    },

    toJSON(message: UpdateServiceAccountMetadata): unknown {
        const obj: any = {};
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateServiceAccountMetadata>, I>>(
        object: I,
    ): UpdateServiceAccountMetadata {
        const message = { ...baseUpdateServiceAccountMetadata } as UpdateServiceAccountMetadata;
        message.serviceAccountId = object.serviceAccountId ?? '';
        return message;
    },
};

const baseDeleteServiceAccountRequest: object = { serviceAccountId: '' };

export const DeleteServiceAccountRequest = {
    encode(
        message: DeleteServiceAccountRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteServiceAccountRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteServiceAccountRequest } as DeleteServiceAccountRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteServiceAccountRequest {
        const message = { ...baseDeleteServiceAccountRequest } as DeleteServiceAccountRequest;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        return message;
    },

    toJSON(message: DeleteServiceAccountRequest): unknown {
        const obj: any = {};
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteServiceAccountRequest>, I>>(
        object: I,
    ): DeleteServiceAccountRequest {
        const message = { ...baseDeleteServiceAccountRequest } as DeleteServiceAccountRequest;
        message.serviceAccountId = object.serviceAccountId ?? '';
        return message;
    },
};

const baseDeleteServiceAccountMetadata: object = { serviceAccountId: '' };

export const DeleteServiceAccountMetadata = {
    encode(
        message: DeleteServiceAccountMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteServiceAccountMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteServiceAccountMetadata } as DeleteServiceAccountMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteServiceAccountMetadata {
        const message = { ...baseDeleteServiceAccountMetadata } as DeleteServiceAccountMetadata;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        return message;
    },

    toJSON(message: DeleteServiceAccountMetadata): unknown {
        const obj: any = {};
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteServiceAccountMetadata>, I>>(
        object: I,
    ): DeleteServiceAccountMetadata {
        const message = { ...baseDeleteServiceAccountMetadata } as DeleteServiceAccountMetadata;
        message.serviceAccountId = object.serviceAccountId ?? '';
        return message;
    },
};

const baseListServiceAccountOperationsRequest: object = {
    serviceAccountId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListServiceAccountOperationsRequest = {
    encode(
        message: ListServiceAccountOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListServiceAccountOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListServiceAccountOperationsRequest,
        } as ListServiceAccountOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
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

    fromJSON(object: any): ListServiceAccountOperationsRequest {
        const message = {
            ...baseListServiceAccountOperationsRequest,
        } as ListServiceAccountOperationsRequest;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListServiceAccountOperationsRequest): unknown {
        const obj: any = {};
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListServiceAccountOperationsRequest>, I>>(
        object: I,
    ): ListServiceAccountOperationsRequest {
        const message = {
            ...baseListServiceAccountOperationsRequest,
        } as ListServiceAccountOperationsRequest;
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListServiceAccountOperationsResponse: object = { nextPageToken: '' };

export const ListServiceAccountOperationsResponse = {
    encode(
        message: ListServiceAccountOperationsResponse,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListServiceAccountOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListServiceAccountOperationsResponse,
        } as ListServiceAccountOperationsResponse;
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

    fromJSON(object: any): ListServiceAccountOperationsResponse {
        const message = {
            ...baseListServiceAccountOperationsResponse,
        } as ListServiceAccountOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListServiceAccountOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListServiceAccountOperationsResponse>, I>>(
        object: I,
    ): ListServiceAccountOperationsResponse {
        const message = {
            ...baseListServiceAccountOperationsResponse,
        } as ListServiceAccountOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** A set of methods for managing ServiceAccount resources. */
export const ServiceAccountServiceService = {
    /**
     * Returns the specified ServiceAccount resource.
     *
     * To get the list of available ServiceAccount resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.iam.v1.ServiceAccountService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetServiceAccountRequest) =>
            Buffer.from(GetServiceAccountRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetServiceAccountRequest.decode(value),
        responseSerialize: (value: ServiceAccount) =>
            Buffer.from(ServiceAccount.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ServiceAccount.decode(value),
    },
    /** Retrieves the list of ServiceAccount resources in the specified folder. */
    list: {
        path: '/yandex.cloud.iam.v1.ServiceAccountService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListServiceAccountsRequest) =>
            Buffer.from(ListServiceAccountsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListServiceAccountsRequest.decode(value),
        responseSerialize: (value: ListServiceAccountsResponse) =>
            Buffer.from(ListServiceAccountsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListServiceAccountsResponse.decode(value),
    },
    /** Creates a service account in the specified folder. */
    create: {
        path: '/yandex.cloud.iam.v1.ServiceAccountService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateServiceAccountRequest) =>
            Buffer.from(CreateServiceAccountRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateServiceAccountRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified service account. */
    update: {
        path: '/yandex.cloud.iam.v1.ServiceAccountService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateServiceAccountRequest) =>
            Buffer.from(UpdateServiceAccountRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateServiceAccountRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified service account. */
    delete: {
        path: '/yandex.cloud.iam.v1.ServiceAccountService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteServiceAccountRequest) =>
            Buffer.from(DeleteServiceAccountRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteServiceAccountRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists access bindings for the specified service account. */
    listAccessBindings: {
        path: '/yandex.cloud.iam.v1.ServiceAccountService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the service account. */
    setAccessBindings: {
        path: '/yandex.cloud.iam.v1.ServiceAccountService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetAccessBindingsRequest) =>
            Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates access bindings for the specified service account. */
    updateAccessBindings: {
        path: '/yandex.cloud.iam.v1.ServiceAccountService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified service account. */
    listOperations: {
        path: '/yandex.cloud.iam.v1.ServiceAccountService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListServiceAccountOperationsRequest) =>
            Buffer.from(ListServiceAccountOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListServiceAccountOperationsRequest.decode(value),
        responseSerialize: (value: ListServiceAccountOperationsResponse) =>
            Buffer.from(ListServiceAccountOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListServiceAccountOperationsResponse.decode(value),
    },
} as const;

export interface ServiceAccountServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified ServiceAccount resource.
     *
     * To get the list of available ServiceAccount resources, make a [List] request.
     */
    get: handleUnaryCall<GetServiceAccountRequest, ServiceAccount>;
    /** Retrieves the list of ServiceAccount resources in the specified folder. */
    list: handleUnaryCall<ListServiceAccountsRequest, ListServiceAccountsResponse>;
    /** Creates a service account in the specified folder. */
    create: handleUnaryCall<CreateServiceAccountRequest, Operation>;
    /** Updates the specified service account. */
    update: handleUnaryCall<UpdateServiceAccountRequest, Operation>;
    /** Deletes the specified service account. */
    delete: handleUnaryCall<DeleteServiceAccountRequest, Operation>;
    /** Lists access bindings for the specified service account. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the service account. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified service account. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
    /** Lists operations for the specified service account. */
    listOperations: handleUnaryCall<
        ListServiceAccountOperationsRequest,
        ListServiceAccountOperationsResponse
    >;
}

export interface ServiceAccountServiceClient extends Client {
    /**
     * Returns the specified ServiceAccount resource.
     *
     * To get the list of available ServiceAccount resources, make a [List] request.
     */
    get(
        request: GetServiceAccountRequest,
        callback: (error: ServiceError | null, response: ServiceAccount) => void,
    ): ClientUnaryCall;
    get(
        request: GetServiceAccountRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ServiceAccount) => void,
    ): ClientUnaryCall;
    get(
        request: GetServiceAccountRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ServiceAccount) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of ServiceAccount resources in the specified folder. */
    list(
        request: ListServiceAccountsRequest,
        callback: (error: ServiceError | null, response: ListServiceAccountsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListServiceAccountsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListServiceAccountsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListServiceAccountsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListServiceAccountsResponse) => void,
    ): ClientUnaryCall;
    /** Creates a service account in the specified folder. */
    create(
        request: CreateServiceAccountRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateServiceAccountRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateServiceAccountRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified service account. */
    update(
        request: UpdateServiceAccountRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateServiceAccountRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateServiceAccountRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified service account. */
    delete(
        request: DeleteServiceAccountRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteServiceAccountRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteServiceAccountRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists access bindings for the specified service account. */
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
    /** Sets access bindings for the service account. */
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
    /** Updates access bindings for the specified service account. */
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
    /** Lists operations for the specified service account. */
    listOperations(
        request: ListServiceAccountOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListServiceAccountOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListServiceAccountOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListServiceAccountOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListServiceAccountOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListServiceAccountOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
}

export const ServiceAccountServiceClient = makeGenericClientConstructor(
    ServiceAccountServiceService,
    'yandex.cloud.iam.v1.ServiceAccountService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ServiceAccountServiceClient;
    service: typeof ServiceAccountServiceService;
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
