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
    Project_Settings,
    Project_Limits,
    Project,
} from '../../../../yandex/cloud/datasphere/v1/project';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { Empty } from '../../../../google/protobuf/empty';
import { Int64Value } from '../../../../google/protobuf/wrappers';
import { Struct } from '../../../../google/protobuf/struct';

export const protobufPackage = 'yandex.cloud.datasphere.v1';

export interface CreateProjectRequest {
    /**
     * ID of the folder to create a project in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the project. */
    name: string;
    /** Description of the project. */
    description: string;
    /** Settings of the project. */
    settings?: Project_Settings;
    /** Limits of the project. */
    limits?: Project_Limits;
}

export interface CreateProjectMetadata {
    /** ID of the project that is being created. */
    projectId: string;
}

export interface UpdateProjectRequest {
    /**
     * ID of the Project resource to update.
     * To get the project ID use a [ProjectService.List] request.
     */
    projectId: string;
    /** Field mask that specifies which fields of the Project resource are going to be updated. */
    updateMask?: FieldMask;
    /** Name of the project. */
    name: string;
    /** Description of the project. */
    description: string;
    /** Settings of the project. */
    settings?: Project_Settings;
    /** Limits of the project. */
    limits?: Project_Limits;
}

export interface UpdateProjectMetadata {
    /** ID of the project that is being updated. */
    projectId: string;
}

export interface DeleteProjectRequest {
    /**
     * ID of the Project resource to delete.
     * To get the project ID use a [ProjectService.List] request.
     */
    projectId: string;
}

export interface DeleteProjectMetadata {
    /** ID of the project that is being deleted. */
    projectId: string;
}

export interface OpenProjectRequest {
    /**
     * ID of the Project resource to open.
     * To get the project ID use a [ProjectService.List] request.
     */
    projectId: string;
}

export interface OpenProjectMetadata {
    /** ID of the project that is being opened. */
    projectId: string;
}

export interface OpenProjectResponse {
    /**
     * URL of the project that is being opened.
     * Make GET request to [project_url] with sessionToken query parameter equals to [session_token]
     * or POST request to [project_url] with sessionToken body parameter equals to [session_token]
     * to fetch Datasphere web interface.
     */
    projectUrl: string;
    /** Session token of the project that is being opened. */
    sessionToken: string;
}

export interface GetProjectRequest {
    /**
     * ID of the Project resource to return.
     * To get the project ID use a [ProjectService.List] request.
     */
    projectId: string;
}

export interface ListProjectsRequest {
    /**
     * ID of the folder to list projects in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListProjectsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListProjectsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListProjectsResponse {
    /** List of Project resources. */
    projects: Project[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListProjectsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListProjectsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface GetUnitBalanceRequest {
    /** ID of the project to return the unit balance for. */
    projectId: string;
}

export interface GetUnitBalanceResponse {
    /** The number of units available to the project. */
    unitBalance?: number;
}

export interface SetUnitBalanceRequest {
    /** ID of the project to set the unit balance for. */
    projectId: string;
    /** The number of units available to the project. */
    unitBalance?: number;
}

export interface ProjectExecutionRequest {
    /** ID of the project to execute notebook/cell in. */
    projectId: string;
    /** ID of the notebook to execute. */
    notebookId: string | undefined;
    /** ID of the cell to execute. */
    cellId: string | undefined;
    /** Values of input variables. */
    inputVariables?: { [key: string]: any };
    /** Names of output variables. */
    outputVariableNames: string[];
}

export interface ProjectExecutionMetadata {
    /** ID of the project in which notebook is being executed. */
    projectId: string;
    /** ID of the notebook that is being executed */
    notebookId: string | undefined;
    /** ID of the cell that is being executed */
    cellId: string | undefined;
}

export interface ProjectExecutionResponse {}

const baseCreateProjectRequest: object = { folderId: '', name: '', description: '' };

export const CreateProjectRequest = {
    encode(message: CreateProjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.settings !== undefined) {
            Project_Settings.encode(message.settings, writer.uint32(34).fork()).ldelim();
        }
        if (message.limits !== undefined) {
            Project_Limits.encode(message.limits, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateProjectRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateProjectRequest } as CreateProjectRequest;
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
                    message.settings = Project_Settings.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.limits = Project_Limits.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateProjectRequest {
        const message = { ...baseCreateProjectRequest } as CreateProjectRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? Project_Settings.fromJSON(object.settings)
                : undefined;
        message.limits =
            object.limits !== undefined && object.limits !== null
                ? Project_Limits.fromJSON(object.limits)
                : undefined;
        return message;
    },

    toJSON(message: CreateProjectRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? Project_Settings.toJSON(message.settings)
                : undefined);
        message.limits !== undefined &&
            (obj.limits = message.limits ? Project_Limits.toJSON(message.limits) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateProjectRequest>, I>>(
        object: I,
    ): CreateProjectRequest {
        const message = { ...baseCreateProjectRequest } as CreateProjectRequest;
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? Project_Settings.fromPartial(object.settings)
                : undefined;
        message.limits =
            object.limits !== undefined && object.limits !== null
                ? Project_Limits.fromPartial(object.limits)
                : undefined;
        return message;
    },
};

const baseCreateProjectMetadata: object = { projectId: '' };

export const CreateProjectMetadata = {
    encode(message: CreateProjectMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateProjectMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateProjectMetadata } as CreateProjectMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateProjectMetadata {
        const message = { ...baseCreateProjectMetadata } as CreateProjectMetadata;
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : '';
        return message;
    },

    toJSON(message: CreateProjectMetadata): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateProjectMetadata>, I>>(
        object: I,
    ): CreateProjectMetadata {
        const message = { ...baseCreateProjectMetadata } as CreateProjectMetadata;
        message.projectId = object.projectId ?? '';
        return message;
    },
};

const baseUpdateProjectRequest: object = { projectId: '', name: '', description: '' };

export const UpdateProjectRequest = {
    encode(message: UpdateProjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
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
        if (message.settings !== undefined) {
            Project_Settings.encode(message.settings, writer.uint32(42).fork()).ldelim();
        }
        if (message.limits !== undefined) {
            Project_Limits.encode(message.limits, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateProjectRequest } as UpdateProjectRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
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
                    message.settings = Project_Settings.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.limits = Project_Limits.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateProjectRequest {
        const message = { ...baseUpdateProjectRequest } as UpdateProjectRequest;
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
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
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? Project_Settings.fromJSON(object.settings)
                : undefined;
        message.limits =
            object.limits !== undefined && object.limits !== null
                ? Project_Limits.fromJSON(object.limits)
                : undefined;
        return message;
    },

    toJSON(message: UpdateProjectRequest): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? Project_Settings.toJSON(message.settings)
                : undefined);
        message.limits !== undefined &&
            (obj.limits = message.limits ? Project_Limits.toJSON(message.limits) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateProjectRequest>, I>>(
        object: I,
    ): UpdateProjectRequest {
        const message = { ...baseUpdateProjectRequest } as UpdateProjectRequest;
        message.projectId = object.projectId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? Project_Settings.fromPartial(object.settings)
                : undefined;
        message.limits =
            object.limits !== undefined && object.limits !== null
                ? Project_Limits.fromPartial(object.limits)
                : undefined;
        return message;
    },
};

const baseUpdateProjectMetadata: object = { projectId: '' };

export const UpdateProjectMetadata = {
    encode(message: UpdateProjectMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateProjectMetadata } as UpdateProjectMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateProjectMetadata {
        const message = { ...baseUpdateProjectMetadata } as UpdateProjectMetadata;
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : '';
        return message;
    },

    toJSON(message: UpdateProjectMetadata): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateProjectMetadata>, I>>(
        object: I,
    ): UpdateProjectMetadata {
        const message = { ...baseUpdateProjectMetadata } as UpdateProjectMetadata;
        message.projectId = object.projectId ?? '';
        return message;
    },
};

const baseDeleteProjectRequest: object = { projectId: '' };

export const DeleteProjectRequest = {
    encode(message: DeleteProjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteProjectRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteProjectRequest } as DeleteProjectRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteProjectRequest {
        const message = { ...baseDeleteProjectRequest } as DeleteProjectRequest;
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : '';
        return message;
    },

    toJSON(message: DeleteProjectRequest): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteProjectRequest>, I>>(
        object: I,
    ): DeleteProjectRequest {
        const message = { ...baseDeleteProjectRequest } as DeleteProjectRequest;
        message.projectId = object.projectId ?? '';
        return message;
    },
};

const baseDeleteProjectMetadata: object = { projectId: '' };

export const DeleteProjectMetadata = {
    encode(message: DeleteProjectMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteProjectMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteProjectMetadata } as DeleteProjectMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteProjectMetadata {
        const message = { ...baseDeleteProjectMetadata } as DeleteProjectMetadata;
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : '';
        return message;
    },

    toJSON(message: DeleteProjectMetadata): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteProjectMetadata>, I>>(
        object: I,
    ): DeleteProjectMetadata {
        const message = { ...baseDeleteProjectMetadata } as DeleteProjectMetadata;
        message.projectId = object.projectId ?? '';
        return message;
    },
};

const baseOpenProjectRequest: object = { projectId: '' };

export const OpenProjectRequest = {
    encode(message: OpenProjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OpenProjectRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOpenProjectRequest } as OpenProjectRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OpenProjectRequest {
        const message = { ...baseOpenProjectRequest } as OpenProjectRequest;
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : '';
        return message;
    },

    toJSON(message: OpenProjectRequest): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OpenProjectRequest>, I>>(
        object: I,
    ): OpenProjectRequest {
        const message = { ...baseOpenProjectRequest } as OpenProjectRequest;
        message.projectId = object.projectId ?? '';
        return message;
    },
};

const baseOpenProjectMetadata: object = { projectId: '' };

export const OpenProjectMetadata = {
    encode(message: OpenProjectMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OpenProjectMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOpenProjectMetadata } as OpenProjectMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OpenProjectMetadata {
        const message = { ...baseOpenProjectMetadata } as OpenProjectMetadata;
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : '';
        return message;
    },

    toJSON(message: OpenProjectMetadata): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OpenProjectMetadata>, I>>(
        object: I,
    ): OpenProjectMetadata {
        const message = { ...baseOpenProjectMetadata } as OpenProjectMetadata;
        message.projectId = object.projectId ?? '';
        return message;
    },
};

const baseOpenProjectResponse: object = { projectUrl: '', sessionToken: '' };

export const OpenProjectResponse = {
    encode(message: OpenProjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.projectUrl !== '') {
            writer.uint32(10).string(message.projectUrl);
        }
        if (message.sessionToken !== '') {
            writer.uint32(18).string(message.sessionToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OpenProjectResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOpenProjectResponse } as OpenProjectResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectUrl = reader.string();
                    break;
                case 2:
                    message.sessionToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OpenProjectResponse {
        const message = { ...baseOpenProjectResponse } as OpenProjectResponse;
        message.projectUrl =
            object.projectUrl !== undefined && object.projectUrl !== null
                ? String(object.projectUrl)
                : '';
        message.sessionToken =
            object.sessionToken !== undefined && object.sessionToken !== null
                ? String(object.sessionToken)
                : '';
        return message;
    },

    toJSON(message: OpenProjectResponse): unknown {
        const obj: any = {};
        message.projectUrl !== undefined && (obj.projectUrl = message.projectUrl);
        message.sessionToken !== undefined && (obj.sessionToken = message.sessionToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OpenProjectResponse>, I>>(
        object: I,
    ): OpenProjectResponse {
        const message = { ...baseOpenProjectResponse } as OpenProjectResponse;
        message.projectUrl = object.projectUrl ?? '';
        message.sessionToken = object.sessionToken ?? '';
        return message;
    },
};

const baseGetProjectRequest: object = { projectId: '' };

export const GetProjectRequest = {
    encode(message: GetProjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetProjectRequest } as GetProjectRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetProjectRequest {
        const message = { ...baseGetProjectRequest } as GetProjectRequest;
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : '';
        return message;
    },

    toJSON(message: GetProjectRequest): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetProjectRequest>, I>>(object: I): GetProjectRequest {
        const message = { ...baseGetProjectRequest } as GetProjectRequest;
        message.projectId = object.projectId ?? '';
        return message;
    },
};

const baseListProjectsRequest: object = { folderId: '', pageSize: 0, pageToken: '' };

export const ListProjectsRequest = {
    encode(message: ListProjectsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListProjectsRequest } as ListProjectsRequest;
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListProjectsRequest {
        const message = { ...baseListProjectsRequest } as ListProjectsRequest;
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
        return message;
    },

    toJSON(message: ListProjectsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListProjectsRequest>, I>>(
        object: I,
    ): ListProjectsRequest {
        const message = { ...baseListProjectsRequest } as ListProjectsRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListProjectsResponse: object = { nextPageToken: '' };

export const ListProjectsResponse = {
    encode(message: ListProjectsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.projects) {
            Project.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListProjectsResponse } as ListProjectsResponse;
        message.projects = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projects.push(Project.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListProjectsResponse {
        const message = { ...baseListProjectsResponse } as ListProjectsResponse;
        message.projects = (object.projects ?? []).map((e: any) => Project.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListProjectsResponse): unknown {
        const obj: any = {};
        if (message.projects) {
            obj.projects = message.projects.map((e) => (e ? Project.toJSON(e) : undefined));
        } else {
            obj.projects = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListProjectsResponse>, I>>(
        object: I,
    ): ListProjectsResponse {
        const message = { ...baseListProjectsResponse } as ListProjectsResponse;
        message.projects = object.projects?.map((e) => Project.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseGetUnitBalanceRequest: object = { projectId: '' };

export const GetUnitBalanceRequest = {
    encode(message: GetUnitBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetUnitBalanceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetUnitBalanceRequest } as GetUnitBalanceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetUnitBalanceRequest {
        const message = { ...baseGetUnitBalanceRequest } as GetUnitBalanceRequest;
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : '';
        return message;
    },

    toJSON(message: GetUnitBalanceRequest): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetUnitBalanceRequest>, I>>(
        object: I,
    ): GetUnitBalanceRequest {
        const message = { ...baseGetUnitBalanceRequest } as GetUnitBalanceRequest;
        message.projectId = object.projectId ?? '';
        return message;
    },
};

const baseGetUnitBalanceResponse: object = {};

export const GetUnitBalanceResponse = {
    encode(message: GetUnitBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.unitBalance !== undefined) {
            Int64Value.encode({ value: message.unitBalance! }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetUnitBalanceResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetUnitBalanceResponse } as GetUnitBalanceResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unitBalance = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetUnitBalanceResponse {
        const message = { ...baseGetUnitBalanceResponse } as GetUnitBalanceResponse;
        message.unitBalance =
            object.unitBalance !== undefined && object.unitBalance !== null
                ? Number(object.unitBalance)
                : undefined;
        return message;
    },

    toJSON(message: GetUnitBalanceResponse): unknown {
        const obj: any = {};
        message.unitBalance !== undefined && (obj.unitBalance = message.unitBalance);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetUnitBalanceResponse>, I>>(
        object: I,
    ): GetUnitBalanceResponse {
        const message = { ...baseGetUnitBalanceResponse } as GetUnitBalanceResponse;
        message.unitBalance = object.unitBalance ?? undefined;
        return message;
    },
};

const baseSetUnitBalanceRequest: object = { projectId: '' };

export const SetUnitBalanceRequest = {
    encode(message: SetUnitBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        if (message.unitBalance !== undefined) {
            Int64Value.encode({ value: message.unitBalance! }, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SetUnitBalanceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSetUnitBalanceRequest } as SetUnitBalanceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.unitBalance = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SetUnitBalanceRequest {
        const message = { ...baseSetUnitBalanceRequest } as SetUnitBalanceRequest;
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : '';
        message.unitBalance =
            object.unitBalance !== undefined && object.unitBalance !== null
                ? Number(object.unitBalance)
                : undefined;
        return message;
    },

    toJSON(message: SetUnitBalanceRequest): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.unitBalance !== undefined && (obj.unitBalance = message.unitBalance);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SetUnitBalanceRequest>, I>>(
        object: I,
    ): SetUnitBalanceRequest {
        const message = { ...baseSetUnitBalanceRequest } as SetUnitBalanceRequest;
        message.projectId = object.projectId ?? '';
        message.unitBalance = object.unitBalance ?? undefined;
        return message;
    },
};

const baseProjectExecutionRequest: object = { projectId: '', outputVariableNames: '' };

export const ProjectExecutionRequest = {
    encode(message: ProjectExecutionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        if (message.notebookId !== undefined) {
            writer.uint32(18).string(message.notebookId);
        }
        if (message.cellId !== undefined) {
            writer.uint32(26).string(message.cellId);
        }
        if (message.inputVariables !== undefined) {
            Struct.encode(Struct.wrap(message.inputVariables), writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.outputVariableNames) {
            writer.uint32(42).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectExecutionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseProjectExecutionRequest } as ProjectExecutionRequest;
        message.outputVariableNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.notebookId = reader.string();
                    break;
                case 3:
                    message.cellId = reader.string();
                    break;
                case 4:
                    message.inputVariables = Struct.unwrap(Struct.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.outputVariableNames.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ProjectExecutionRequest {
        const message = { ...baseProjectExecutionRequest } as ProjectExecutionRequest;
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : '';
        message.notebookId =
            object.notebookId !== undefined && object.notebookId !== null
                ? String(object.notebookId)
                : undefined;
        message.cellId =
            object.cellId !== undefined && object.cellId !== null
                ? String(object.cellId)
                : undefined;
        message.inputVariables =
            typeof object.inputVariables === 'object' ? object.inputVariables : undefined;
        message.outputVariableNames = (object.outputVariableNames ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: ProjectExecutionRequest): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.notebookId !== undefined && (obj.notebookId = message.notebookId);
        message.cellId !== undefined && (obj.cellId = message.cellId);
        message.inputVariables !== undefined && (obj.inputVariables = message.inputVariables);
        if (message.outputVariableNames) {
            obj.outputVariableNames = message.outputVariableNames.map((e) => e);
        } else {
            obj.outputVariableNames = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ProjectExecutionRequest>, I>>(
        object: I,
    ): ProjectExecutionRequest {
        const message = { ...baseProjectExecutionRequest } as ProjectExecutionRequest;
        message.projectId = object.projectId ?? '';
        message.notebookId = object.notebookId ?? undefined;
        message.cellId = object.cellId ?? undefined;
        message.inputVariables = object.inputVariables ?? undefined;
        message.outputVariableNames = object.outputVariableNames?.map((e) => e) || [];
        return message;
    },
};

const baseProjectExecutionMetadata: object = { projectId: '' };

export const ProjectExecutionMetadata = {
    encode(
        message: ProjectExecutionMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        if (message.notebookId !== undefined) {
            writer.uint32(18).string(message.notebookId);
        }
        if (message.cellId !== undefined) {
            writer.uint32(26).string(message.cellId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectExecutionMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseProjectExecutionMetadata } as ProjectExecutionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.notebookId = reader.string();
                    break;
                case 3:
                    message.cellId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ProjectExecutionMetadata {
        const message = { ...baseProjectExecutionMetadata } as ProjectExecutionMetadata;
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : '';
        message.notebookId =
            object.notebookId !== undefined && object.notebookId !== null
                ? String(object.notebookId)
                : undefined;
        message.cellId =
            object.cellId !== undefined && object.cellId !== null
                ? String(object.cellId)
                : undefined;
        return message;
    },

    toJSON(message: ProjectExecutionMetadata): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.notebookId !== undefined && (obj.notebookId = message.notebookId);
        message.cellId !== undefined && (obj.cellId = message.cellId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ProjectExecutionMetadata>, I>>(
        object: I,
    ): ProjectExecutionMetadata {
        const message = { ...baseProjectExecutionMetadata } as ProjectExecutionMetadata;
        message.projectId = object.projectId ?? '';
        message.notebookId = object.notebookId ?? undefined;
        message.cellId = object.cellId ?? undefined;
        return message;
    },
};

const baseProjectExecutionResponse: object = {};

export const ProjectExecutionResponse = {
    encode(_: ProjectExecutionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectExecutionResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseProjectExecutionResponse } as ProjectExecutionResponse;
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

    fromJSON(_: any): ProjectExecutionResponse {
        const message = { ...baseProjectExecutionResponse } as ProjectExecutionResponse;
        return message;
    },

    toJSON(_: ProjectExecutionResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ProjectExecutionResponse>, I>>(
        _: I,
    ): ProjectExecutionResponse {
        const message = { ...baseProjectExecutionResponse } as ProjectExecutionResponse;
        return message;
    },
};

/** A set of methods for managing Project resources. */
export const ProjectServiceService = {
    /** Creates a project in the specified folder. */
    create: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateProjectRequest) =>
            Buffer.from(CreateProjectRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateProjectRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified project. */
    update: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateProjectRequest) =>
            Buffer.from(UpdateProjectRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateProjectRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified project. */
    delete: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteProjectRequest) =>
            Buffer.from(DeleteProjectRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteProjectRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Opens the specified project. */
    open: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/Open',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: OpenProjectRequest) =>
            Buffer.from(OpenProjectRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => OpenProjectRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Returns the specified project. */
    get: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetProjectRequest) =>
            Buffer.from(GetProjectRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetProjectRequest.decode(value),
        responseSerialize: (value: Project) => Buffer.from(Project.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Project.decode(value),
    },
    /** Lists projects for the specified folder. */
    list: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListProjectsRequest) =>
            Buffer.from(ListProjectsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListProjectsRequest.decode(value),
        responseSerialize: (value: ListProjectsResponse) =>
            Buffer.from(ListProjectsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListProjectsResponse.decode(value),
    },
    /** Returns the unit balance of the specified project. */
    getUnitBalance: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/GetUnitBalance',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetUnitBalanceRequest) =>
            Buffer.from(GetUnitBalanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetUnitBalanceRequest.decode(value),
        responseSerialize: (value: GetUnitBalanceResponse) =>
            Buffer.from(GetUnitBalanceResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetUnitBalanceResponse.decode(value),
    },
    /** Sets the unit balance of the specified project. */
    setUnitBalance: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/SetUnitBalance',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetUnitBalanceRequest) =>
            Buffer.from(SetUnitBalanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetUnitBalanceRequest.decode(value),
        responseSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Empty.decode(value),
    },
    /** Executes code in the specified cell or notebook. */
    execute: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/Execute',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ProjectExecutionRequest) =>
            Buffer.from(ProjectExecutionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ProjectExecutionRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface ProjectServiceServer extends UntypedServiceImplementation {
    /** Creates a project in the specified folder. */
    create: handleUnaryCall<CreateProjectRequest, Operation>;
    /** Updates the specified project. */
    update: handleUnaryCall<UpdateProjectRequest, Operation>;
    /** Deletes the specified project. */
    delete: handleUnaryCall<DeleteProjectRequest, Operation>;
    /** Opens the specified project. */
    open: handleUnaryCall<OpenProjectRequest, Operation>;
    /** Returns the specified project. */
    get: handleUnaryCall<GetProjectRequest, Project>;
    /** Lists projects for the specified folder. */
    list: handleUnaryCall<ListProjectsRequest, ListProjectsResponse>;
    /** Returns the unit balance of the specified project. */
    getUnitBalance: handleUnaryCall<GetUnitBalanceRequest, GetUnitBalanceResponse>;
    /** Sets the unit balance of the specified project. */
    setUnitBalance: handleUnaryCall<SetUnitBalanceRequest, Empty>;
    /** Executes code in the specified cell or notebook. */
    execute: handleUnaryCall<ProjectExecutionRequest, Operation>;
}

export interface ProjectServiceClient extends Client {
    /** Creates a project in the specified folder. */
    create(
        request: CreateProjectRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateProjectRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateProjectRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified project. */
    update(
        request: UpdateProjectRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateProjectRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateProjectRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified project. */
    delete(
        request: DeleteProjectRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteProjectRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteProjectRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Opens the specified project. */
    open(
        request: OpenProjectRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    open(
        request: OpenProjectRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    open(
        request: OpenProjectRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Returns the specified project. */
    get(
        request: GetProjectRequest,
        callback: (error: ServiceError | null, response: Project) => void,
    ): ClientUnaryCall;
    get(
        request: GetProjectRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Project) => void,
    ): ClientUnaryCall;
    get(
        request: GetProjectRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Project) => void,
    ): ClientUnaryCall;
    /** Lists projects for the specified folder. */
    list(
        request: ListProjectsRequest,
        callback: (error: ServiceError | null, response: ListProjectsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListProjectsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListProjectsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListProjectsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListProjectsResponse) => void,
    ): ClientUnaryCall;
    /** Returns the unit balance of the specified project. */
    getUnitBalance(
        request: GetUnitBalanceRequest,
        callback: (error: ServiceError | null, response: GetUnitBalanceResponse) => void,
    ): ClientUnaryCall;
    getUnitBalance(
        request: GetUnitBalanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetUnitBalanceResponse) => void,
    ): ClientUnaryCall;
    getUnitBalance(
        request: GetUnitBalanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetUnitBalanceResponse) => void,
    ): ClientUnaryCall;
    /** Sets the unit balance of the specified project. */
    setUnitBalance(
        request: SetUnitBalanceRequest,
        callback: (error: ServiceError | null, response: Empty) => void,
    ): ClientUnaryCall;
    setUnitBalance(
        request: SetUnitBalanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Empty) => void,
    ): ClientUnaryCall;
    setUnitBalance(
        request: SetUnitBalanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Empty) => void,
    ): ClientUnaryCall;
    /** Executes code in the specified cell or notebook. */
    execute(
        request: ProjectExecutionRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    execute(
        request: ProjectExecutionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    execute(
        request: ProjectExecutionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const ProjectServiceClient = makeGenericClientConstructor(
    ProjectServiceService,
    'yandex.cloud.datasphere.v1.ProjectService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ProjectServiceClient;
    service: typeof ProjectServiceService;
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
