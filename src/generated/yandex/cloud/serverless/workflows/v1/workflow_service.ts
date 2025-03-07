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
    WorkflowSpecification,
    LogOptions,
    Workflow,
    WorkflowPreview,
} from '../../../../../yandex/cloud/serverless/workflows/v1/workflow';
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Operation } from '../../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.serverless.workflows.v1';

export interface CreateWorkflowRequest {
    /** ID of the folder to create Workflow in. */
    folderId: string;
    /**
     * Name of Workflow.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of Workflow. */
    description: string;
    /** Workflow labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Specification of Workflow */
    specification?: WorkflowSpecification;
    /** Options for logging from Workflow. */
    logOptions?: LogOptions;
    /** ID of the VPC network Workflow will be executed in, in order to access private resources. */
    networkId: string;
    /** ID of the Service Account which will be used for resources access in Workflow execution. */
    serviceAccountId: string;
}

export interface CreateWorkflowRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateWorkflowMetadata {
    /** ID of the Workflow. */
    workflowId: string;
}

export interface UpdateWorkflowRequest {
    /** ID of the Workflow. */
    workflowId: string;
    /** Name of the Workflow. The name is unique within the folder. */
    name: string;
    /** Description of the Workflow. */
    description: string;
    /** Workflow labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Specification of the Workflow. */
    specification?: WorkflowSpecification;
    /** Options for logging from the Workflow. */
    logOptions?: LogOptions;
    /** ID of the VPC network Workflow will be executed in, in order to access private resources. */
    networkId: string;
    /** ID of the Service Account which will be used for resources access in Workflow execution. */
    serviceAccountId: string;
    /** Field mask that specifies which fields of the Workflow should be updated. */
    updateMask?: FieldMask;
}

export interface UpdateWorkflowRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateWorkflowMetadata {
    /** ID of the Workflow. */
    workflowId: string;
}

export interface GetWorkflowRequest {
    /** ID of the Workflow. */
    workflowId: string;
}

export interface GetWorkflowResponse {
    /** Workflow properties. */
    workflow?: Workflow;
}

export interface DeleteWorkflowRequest {
    /** ID of the Workflow. */
    workflowId: string;
}

export interface DeleteWorkflowMetadata {
    /** ID of the Workflow. */
    workflowId: string;
}

export interface ListWorkflowsRequest {
    /** ID of the folder to list Workflows in. */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `pageSize`, the service returns a [ListWorkflowsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListWorkflowsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters functions listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can only be applied to following fields: name, created_at.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z]([-a-z0-9]{0,61}[a-z0-9])?`.
     * Example of a filter: `name=my-workflow`.
     */
    filter: string;
}

export interface ListWorkflowsResponse {
    /** List of Workflows. */
    workflows: WorkflowPreview[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListWorkflowsRequest.page_size], use `next_page_token` as the value
     * for the [ListWorkflowsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface ListOperationsRequest {
    /** ID of the Workflow to list operations for. */
    workflowId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `pageSize`, the service returns a [ListOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can be applied to the [operation.Operation.done], [operation.Operation.created_by] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Examples of a filter: `done=false`, `created_by='John.Doe'`.
     */
    filter: string;
}

export interface ListOperationsResponse {
    /** List of operations for the specified Workflow. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

const baseCreateWorkflowRequest: object = {
    folderId: '',
    name: '',
    description: '',
    networkId: '',
    serviceAccountId: '',
};

export const CreateWorkflowRequest = {
    encode(message: CreateWorkflowRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
            CreateWorkflowRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        if (message.specification !== undefined) {
            WorkflowSpecification.encode(message.specification, writer.uint32(42).fork()).ldelim();
        }
        if (message.logOptions !== undefined) {
            LogOptions.encode(message.logOptions, writer.uint32(50).fork()).ldelim();
        }
        if (message.networkId !== '') {
            writer.uint32(58).string(message.networkId);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(66).string(message.serviceAccountId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateWorkflowRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateWorkflowRequest } as CreateWorkflowRequest;
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
                    const entry4 = CreateWorkflowRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.specification = WorkflowSpecification.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.logOptions = LogOptions.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.networkId = reader.string();
                    break;
                case 8:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateWorkflowRequest {
        const message = { ...baseCreateWorkflowRequest } as CreateWorkflowRequest;
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
        message.specification =
            object.specification !== undefined && object.specification !== null
                ? WorkflowSpecification.fromJSON(object.specification)
                : undefined;
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? LogOptions.fromJSON(object.logOptions)
                : undefined;
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : '';
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        return message;
    },

    toJSON(message: CreateWorkflowRequest): unknown {
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
        message.specification !== undefined &&
            (obj.specification = message.specification
                ? WorkflowSpecification.toJSON(message.specification)
                : undefined);
        message.logOptions !== undefined &&
            (obj.logOptions = message.logOptions
                ? LogOptions.toJSON(message.logOptions)
                : undefined);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateWorkflowRequest>, I>>(
        object: I,
    ): CreateWorkflowRequest {
        const message = { ...baseCreateWorkflowRequest } as CreateWorkflowRequest;
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
        message.specification =
            object.specification !== undefined && object.specification !== null
                ? WorkflowSpecification.fromPartial(object.specification)
                : undefined;
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? LogOptions.fromPartial(object.logOptions)
                : undefined;
        message.networkId = object.networkId ?? '';
        message.serviceAccountId = object.serviceAccountId ?? '';
        return message;
    },
};

const baseCreateWorkflowRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateWorkflowRequest_LabelsEntry = {
    encode(
        message: CreateWorkflowRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateWorkflowRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateWorkflowRequest_LabelsEntry,
        } as CreateWorkflowRequest_LabelsEntry;
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

    fromJSON(object: any): CreateWorkflowRequest_LabelsEntry {
        const message = {
            ...baseCreateWorkflowRequest_LabelsEntry,
        } as CreateWorkflowRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateWorkflowRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateWorkflowRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateWorkflowRequest_LabelsEntry {
        const message = {
            ...baseCreateWorkflowRequest_LabelsEntry,
        } as CreateWorkflowRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateWorkflowMetadata: object = { workflowId: '' };

export const CreateWorkflowMetadata = {
    encode(message: CreateWorkflowMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.workflowId !== '') {
            writer.uint32(10).string(message.workflowId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateWorkflowMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateWorkflowMetadata } as CreateWorkflowMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workflowId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateWorkflowMetadata {
        const message = { ...baseCreateWorkflowMetadata } as CreateWorkflowMetadata;
        message.workflowId =
            object.workflowId !== undefined && object.workflowId !== null
                ? String(object.workflowId)
                : '';
        return message;
    },

    toJSON(message: CreateWorkflowMetadata): unknown {
        const obj: any = {};
        message.workflowId !== undefined && (obj.workflowId = message.workflowId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateWorkflowMetadata>, I>>(
        object: I,
    ): CreateWorkflowMetadata {
        const message = { ...baseCreateWorkflowMetadata } as CreateWorkflowMetadata;
        message.workflowId = object.workflowId ?? '';
        return message;
    },
};

const baseUpdateWorkflowRequest: object = {
    workflowId: '',
    name: '',
    description: '',
    networkId: '',
    serviceAccountId: '',
};

export const UpdateWorkflowRequest = {
    encode(message: UpdateWorkflowRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.workflowId !== '') {
            writer.uint32(10).string(message.workflowId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateWorkflowRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        if (message.specification !== undefined) {
            WorkflowSpecification.encode(message.specification, writer.uint32(42).fork()).ldelim();
        }
        if (message.logOptions !== undefined) {
            LogOptions.encode(message.logOptions, writer.uint32(50).fork()).ldelim();
        }
        if (message.networkId !== '') {
            writer.uint32(58).string(message.networkId);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(66).string(message.serviceAccountId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateWorkflowRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateWorkflowRequest } as UpdateWorkflowRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workflowId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = UpdateWorkflowRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.specification = WorkflowSpecification.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.logOptions = LogOptions.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.networkId = reader.string();
                    break;
                case 8:
                    message.serviceAccountId = reader.string();
                    break;
                case 9:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateWorkflowRequest {
        const message = { ...baseUpdateWorkflowRequest } as UpdateWorkflowRequest;
        message.workflowId =
            object.workflowId !== undefined && object.workflowId !== null
                ? String(object.workflowId)
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
        message.specification =
            object.specification !== undefined && object.specification !== null
                ? WorkflowSpecification.fromJSON(object.specification)
                : undefined;
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? LogOptions.fromJSON(object.logOptions)
                : undefined;
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : '';
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        return message;
    },

    toJSON(message: UpdateWorkflowRequest): unknown {
        const obj: any = {};
        message.workflowId !== undefined && (obj.workflowId = message.workflowId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.specification !== undefined &&
            (obj.specification = message.specification
                ? WorkflowSpecification.toJSON(message.specification)
                : undefined);
        message.logOptions !== undefined &&
            (obj.logOptions = message.logOptions
                ? LogOptions.toJSON(message.logOptions)
                : undefined);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateWorkflowRequest>, I>>(
        object: I,
    ): UpdateWorkflowRequest {
        const message = { ...baseUpdateWorkflowRequest } as UpdateWorkflowRequest;
        message.workflowId = object.workflowId ?? '';
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
        message.specification =
            object.specification !== undefined && object.specification !== null
                ? WorkflowSpecification.fromPartial(object.specification)
                : undefined;
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? LogOptions.fromPartial(object.logOptions)
                : undefined;
        message.networkId = object.networkId ?? '';
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        return message;
    },
};

const baseUpdateWorkflowRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateWorkflowRequest_LabelsEntry = {
    encode(
        message: UpdateWorkflowRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateWorkflowRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateWorkflowRequest_LabelsEntry,
        } as UpdateWorkflowRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateWorkflowRequest_LabelsEntry {
        const message = {
            ...baseUpdateWorkflowRequest_LabelsEntry,
        } as UpdateWorkflowRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateWorkflowRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateWorkflowRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateWorkflowRequest_LabelsEntry {
        const message = {
            ...baseUpdateWorkflowRequest_LabelsEntry,
        } as UpdateWorkflowRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateWorkflowMetadata: object = { workflowId: '' };

export const UpdateWorkflowMetadata = {
    encode(message: UpdateWorkflowMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.workflowId !== '') {
            writer.uint32(10).string(message.workflowId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateWorkflowMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateWorkflowMetadata } as UpdateWorkflowMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workflowId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateWorkflowMetadata {
        const message = { ...baseUpdateWorkflowMetadata } as UpdateWorkflowMetadata;
        message.workflowId =
            object.workflowId !== undefined && object.workflowId !== null
                ? String(object.workflowId)
                : '';
        return message;
    },

    toJSON(message: UpdateWorkflowMetadata): unknown {
        const obj: any = {};
        message.workflowId !== undefined && (obj.workflowId = message.workflowId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateWorkflowMetadata>, I>>(
        object: I,
    ): UpdateWorkflowMetadata {
        const message = { ...baseUpdateWorkflowMetadata } as UpdateWorkflowMetadata;
        message.workflowId = object.workflowId ?? '';
        return message;
    },
};

const baseGetWorkflowRequest: object = { workflowId: '' };

export const GetWorkflowRequest = {
    encode(message: GetWorkflowRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.workflowId !== '') {
            writer.uint32(10).string(message.workflowId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetWorkflowRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetWorkflowRequest } as GetWorkflowRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workflowId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetWorkflowRequest {
        const message = { ...baseGetWorkflowRequest } as GetWorkflowRequest;
        message.workflowId =
            object.workflowId !== undefined && object.workflowId !== null
                ? String(object.workflowId)
                : '';
        return message;
    },

    toJSON(message: GetWorkflowRequest): unknown {
        const obj: any = {};
        message.workflowId !== undefined && (obj.workflowId = message.workflowId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetWorkflowRequest>, I>>(
        object: I,
    ): GetWorkflowRequest {
        const message = { ...baseGetWorkflowRequest } as GetWorkflowRequest;
        message.workflowId = object.workflowId ?? '';
        return message;
    },
};

const baseGetWorkflowResponse: object = {};

export const GetWorkflowResponse = {
    encode(message: GetWorkflowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.workflow !== undefined) {
            Workflow.encode(message.workflow, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetWorkflowResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetWorkflowResponse } as GetWorkflowResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workflow = Workflow.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetWorkflowResponse {
        const message = { ...baseGetWorkflowResponse } as GetWorkflowResponse;
        message.workflow =
            object.workflow !== undefined && object.workflow !== null
                ? Workflow.fromJSON(object.workflow)
                : undefined;
        return message;
    },

    toJSON(message: GetWorkflowResponse): unknown {
        const obj: any = {};
        message.workflow !== undefined &&
            (obj.workflow = message.workflow ? Workflow.toJSON(message.workflow) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetWorkflowResponse>, I>>(
        object: I,
    ): GetWorkflowResponse {
        const message = { ...baseGetWorkflowResponse } as GetWorkflowResponse;
        message.workflow =
            object.workflow !== undefined && object.workflow !== null
                ? Workflow.fromPartial(object.workflow)
                : undefined;
        return message;
    },
};

const baseDeleteWorkflowRequest: object = { workflowId: '' };

export const DeleteWorkflowRequest = {
    encode(message: DeleteWorkflowRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.workflowId !== '') {
            writer.uint32(10).string(message.workflowId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteWorkflowRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteWorkflowRequest } as DeleteWorkflowRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workflowId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteWorkflowRequest {
        const message = { ...baseDeleteWorkflowRequest } as DeleteWorkflowRequest;
        message.workflowId =
            object.workflowId !== undefined && object.workflowId !== null
                ? String(object.workflowId)
                : '';
        return message;
    },

    toJSON(message: DeleteWorkflowRequest): unknown {
        const obj: any = {};
        message.workflowId !== undefined && (obj.workflowId = message.workflowId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteWorkflowRequest>, I>>(
        object: I,
    ): DeleteWorkflowRequest {
        const message = { ...baseDeleteWorkflowRequest } as DeleteWorkflowRequest;
        message.workflowId = object.workflowId ?? '';
        return message;
    },
};

const baseDeleteWorkflowMetadata: object = { workflowId: '' };

export const DeleteWorkflowMetadata = {
    encode(message: DeleteWorkflowMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.workflowId !== '') {
            writer.uint32(10).string(message.workflowId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteWorkflowMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteWorkflowMetadata } as DeleteWorkflowMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workflowId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteWorkflowMetadata {
        const message = { ...baseDeleteWorkflowMetadata } as DeleteWorkflowMetadata;
        message.workflowId =
            object.workflowId !== undefined && object.workflowId !== null
                ? String(object.workflowId)
                : '';
        return message;
    },

    toJSON(message: DeleteWorkflowMetadata): unknown {
        const obj: any = {};
        message.workflowId !== undefined && (obj.workflowId = message.workflowId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteWorkflowMetadata>, I>>(
        object: I,
    ): DeleteWorkflowMetadata {
        const message = { ...baseDeleteWorkflowMetadata } as DeleteWorkflowMetadata;
        message.workflowId = object.workflowId ?? '';
        return message;
    },
};

const baseListWorkflowsRequest: object = { folderId: '', pageSize: 0, pageToken: '', filter: '' };

export const ListWorkflowsRequest = {
    encode(message: ListWorkflowsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListWorkflowsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListWorkflowsRequest } as ListWorkflowsRequest;
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

    fromJSON(object: any): ListWorkflowsRequest {
        const message = { ...baseListWorkflowsRequest } as ListWorkflowsRequest;
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

    toJSON(message: ListWorkflowsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListWorkflowsRequest>, I>>(
        object: I,
    ): ListWorkflowsRequest {
        const message = { ...baseListWorkflowsRequest } as ListWorkflowsRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListWorkflowsResponse: object = { nextPageToken: '' };

export const ListWorkflowsResponse = {
    encode(message: ListWorkflowsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.workflows) {
            WorkflowPreview.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListWorkflowsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListWorkflowsResponse } as ListWorkflowsResponse;
        message.workflows = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workflows.push(WorkflowPreview.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListWorkflowsResponse {
        const message = { ...baseListWorkflowsResponse } as ListWorkflowsResponse;
        message.workflows = (object.workflows ?? []).map((e: any) => WorkflowPreview.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListWorkflowsResponse): unknown {
        const obj: any = {};
        if (message.workflows) {
            obj.workflows = message.workflows.map((e) =>
                e ? WorkflowPreview.toJSON(e) : undefined,
            );
        } else {
            obj.workflows = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListWorkflowsResponse>, I>>(
        object: I,
    ): ListWorkflowsResponse {
        const message = { ...baseListWorkflowsResponse } as ListWorkflowsResponse;
        message.workflows = object.workflows?.map((e) => WorkflowPreview.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseListOperationsRequest: object = {
    workflowId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListOperationsRequest = {
    encode(message: ListOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.workflowId !== '') {
            writer.uint32(10).string(message.workflowId);
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListOperationsRequest } as ListOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workflowId = reader.string();
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

    fromJSON(object: any): ListOperationsRequest {
        const message = { ...baseListOperationsRequest } as ListOperationsRequest;
        message.workflowId =
            object.workflowId !== undefined && object.workflowId !== null
                ? String(object.workflowId)
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

    toJSON(message: ListOperationsRequest): unknown {
        const obj: any = {};
        message.workflowId !== undefined && (obj.workflowId = message.workflowId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListOperationsRequest>, I>>(
        object: I,
    ): ListOperationsRequest {
        const message = { ...baseListOperationsRequest } as ListOperationsRequest;
        message.workflowId = object.workflowId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListOperationsResponse: object = { nextPageToken: '' };

export const ListOperationsResponse = {
    encode(message: ListOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.operations) {
            Operation.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListOperationsResponse } as ListOperationsResponse;
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

    fromJSON(object: any): ListOperationsResponse {
        const message = { ...baseListOperationsResponse } as ListOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListOperationsResponse>, I>>(
        object: I,
    ): ListOperationsResponse {
        const message = { ...baseListOperationsResponse } as ListOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** Set of methods for managing Workflows. */
export const WorkflowServiceService = {
    /** Creates Workflow in specified folder. */
    create: {
        path: '/yandex.cloud.serverless.workflows.v1.WorkflowService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateWorkflowRequest) =>
            Buffer.from(CreateWorkflowRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateWorkflowRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates specified Workflow. */
    update: {
        path: '/yandex.cloud.serverless.workflows.v1.WorkflowService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateWorkflowRequest) =>
            Buffer.from(UpdateWorkflowRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateWorkflowRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Retrieves specified Workflow. */
    get: {
        path: '/yandex.cloud.serverless.workflows.v1.WorkflowService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetWorkflowRequest) =>
            Buffer.from(GetWorkflowRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetWorkflowRequest.decode(value),
        responseSerialize: (value: GetWorkflowResponse) =>
            Buffer.from(GetWorkflowResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetWorkflowResponse.decode(value),
    },
    /** Deletes specified Workflow. */
    delete: {
        path: '/yandex.cloud.serverless.workflows.v1.WorkflowService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteWorkflowRequest) =>
            Buffer.from(DeleteWorkflowRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteWorkflowRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Retrieves list of Workflows in specified folder. */
    list: {
        path: '/yandex.cloud.serverless.workflows.v1.WorkflowService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListWorkflowsRequest) =>
            Buffer.from(ListWorkflowsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListWorkflowsRequest.decode(value),
        responseSerialize: (value: ListWorkflowsResponse) =>
            Buffer.from(ListWorkflowsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListWorkflowsResponse.decode(value),
    },
    /** Lists operations for specified Workflow. */
    listOperations: {
        path: '/yandex.cloud.serverless.workflows.v1.WorkflowService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListOperationsRequest) =>
            Buffer.from(ListOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListOperationsRequest.decode(value),
        responseSerialize: (value: ListOperationsResponse) =>
            Buffer.from(ListOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListOperationsResponse.decode(value),
    },
} as const;

export interface WorkflowServiceServer extends UntypedServiceImplementation {
    /** Creates Workflow in specified folder. */
    create: handleUnaryCall<CreateWorkflowRequest, Operation>;
    /** Updates specified Workflow. */
    update: handleUnaryCall<UpdateWorkflowRequest, Operation>;
    /** Retrieves specified Workflow. */
    get: handleUnaryCall<GetWorkflowRequest, GetWorkflowResponse>;
    /** Deletes specified Workflow. */
    delete: handleUnaryCall<DeleteWorkflowRequest, Operation>;
    /** Retrieves list of Workflows in specified folder. */
    list: handleUnaryCall<ListWorkflowsRequest, ListWorkflowsResponse>;
    /** Lists operations for specified Workflow. */
    listOperations: handleUnaryCall<ListOperationsRequest, ListOperationsResponse>;
}

export interface WorkflowServiceClient extends Client {
    /** Creates Workflow in specified folder. */
    create(
        request: CreateWorkflowRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateWorkflowRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateWorkflowRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates specified Workflow. */
    update(
        request: UpdateWorkflowRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateWorkflowRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateWorkflowRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Retrieves specified Workflow. */
    get(
        request: GetWorkflowRequest,
        callback: (error: ServiceError | null, response: GetWorkflowResponse) => void,
    ): ClientUnaryCall;
    get(
        request: GetWorkflowRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetWorkflowResponse) => void,
    ): ClientUnaryCall;
    get(
        request: GetWorkflowRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetWorkflowResponse) => void,
    ): ClientUnaryCall;
    /** Deletes specified Workflow. */
    delete(
        request: DeleteWorkflowRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteWorkflowRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteWorkflowRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Retrieves list of Workflows in specified folder. */
    list(
        request: ListWorkflowsRequest,
        callback: (error: ServiceError | null, response: ListWorkflowsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListWorkflowsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListWorkflowsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListWorkflowsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListWorkflowsResponse) => void,
    ): ClientUnaryCall;
    /** Lists operations for specified Workflow. */
    listOperations(
        request: ListOperationsRequest,
        callback: (error: ServiceError | null, response: ListOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListOperationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListOperationsResponse) => void,
    ): ClientUnaryCall;
}

export const WorkflowServiceClient = makeGenericClientConstructor(
    WorkflowServiceService,
    'yandex.cloud.serverless.workflows.v1.WorkflowService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): WorkflowServiceClient;
    service: typeof WorkflowServiceService;
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
