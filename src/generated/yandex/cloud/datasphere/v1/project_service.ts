/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
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
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import {
  Project_Settings,
  Project_Limits,
  Project,
} from "../../../../yandex/cloud/datasphere/v1/project";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { Empty } from "../../../../google/protobuf/empty";
import { Int64Value } from "../../../../google/protobuf/wrappers";
import { Struct } from "../../../../google/protobuf/struct";

export const protobufPackage = "yandex.cloud.datasphere.v1";

export interface CreateProjectRequest {
  $type: "yandex.cloud.datasphere.v1.CreateProjectRequest";
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
  $type: "yandex.cloud.datasphere.v1.CreateProjectMetadata";
  /** ID of the project that is being created. */
  projectId: string;
}

export interface UpdateProjectRequest {
  $type: "yandex.cloud.datasphere.v1.UpdateProjectRequest";
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
  $type: "yandex.cloud.datasphere.v1.UpdateProjectMetadata";
  /** ID of the project that is being updated. */
  projectId: string;
}

export interface DeleteProjectRequest {
  $type: "yandex.cloud.datasphere.v1.DeleteProjectRequest";
  /**
   * ID of the Project resource to delete.
   * To get the project ID use a [ProjectService.List] request.
   */
  projectId: string;
}

export interface DeleteProjectMetadata {
  $type: "yandex.cloud.datasphere.v1.DeleteProjectMetadata";
  /** ID of the project that is being deleted. */
  projectId: string;
}

export interface OpenProjectRequest {
  $type: "yandex.cloud.datasphere.v1.OpenProjectRequest";
  /**
   * ID of the Project resource to open.
   * To get the project ID use a [ProjectService.List] request.
   */
  projectId: string;
}

export interface OpenProjectMetadata {
  $type: "yandex.cloud.datasphere.v1.OpenProjectMetadata";
  /** ID of the project that is being opened. */
  projectId: string;
}

export interface OpenProjectResponse {
  $type: "yandex.cloud.datasphere.v1.OpenProjectResponse";
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
  $type: "yandex.cloud.datasphere.v1.GetProjectRequest";
  /**
   * ID of the Project resource to return.
   * To get the project ID use a [ProjectService.List] request.
   */
  projectId: string;
}

export interface ListProjectsRequest {
  $type: "yandex.cloud.datasphere.v1.ListProjectsRequest";
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
  $type: "yandex.cloud.datasphere.v1.ListProjectsResponse";
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
  $type: "yandex.cloud.datasphere.v1.GetUnitBalanceRequest";
  /** ID of the project to return the unit balance for. */
  projectId: string;
}

export interface GetUnitBalanceResponse {
  $type: "yandex.cloud.datasphere.v1.GetUnitBalanceResponse";
  /** The number of units available to the project. */
  unitBalance?: number;
}

export interface SetUnitBalanceRequest {
  $type: "yandex.cloud.datasphere.v1.SetUnitBalanceRequest";
  /** ID of the project to set the unit balance for. */
  projectId: string;
  /** The number of units available to the project. */
  unitBalance?: number;
}

export interface ProjectExecutionRequest {
  $type: "yandex.cloud.datasphere.v1.ProjectExecutionRequest";
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
  $type: "yandex.cloud.datasphere.v1.ProjectExecutionMetadata";
  /** ID of the project in which notebook is being executed. */
  projectId: string;
  /** ID of the notebook that is being executed */
  notebookId: string | undefined;
  /** ID of the cell that is being executed */
  cellId: string | undefined;
}

export interface ProjectExecutionResponse {
  $type: "yandex.cloud.datasphere.v1.ProjectExecutionResponse";
  /** ID of the checkpoint resulting from the execution. */
  checkpointId: string;
  /** Values of output variables resulting from the execution. */
  outputVariables?: { [key: string]: any };
}

export interface CellOutputsRequest {
  $type: "yandex.cloud.datasphere.v1.CellOutputsRequest";
  /** ID of the project to return cell outputs for. */
  projectId: string;
  /** ID of the cell to return outputs for. */
  cellId: string;
  /** ID of the checkpoint to return cell outputs for. */
  checkpointId: string;
  /** Timestamp from which to return outputs. */
  startAt?: Date;
}

export interface CellOutputsResponse {
  $type: "yandex.cloud.datasphere.v1.CellOutputsResponse";
  /** List of outputs. */
  outputs: string[];
}

export interface GetStateVariablesRequest {
  $type: "yandex.cloud.datasphere.v1.GetStateVariablesRequest";
  /** ID of the project, for which to return state variables. */
  projectId: string;
  /** ID of the notebook, for which to return state variables. */
  notebookId: string;
  /** Names of variables to return. */
  variableNames: string[];
  /** ID of the checkpoint, for which to return state variables. */
  checkpointId: string;
}

export interface GetStateVariablesResponse {
  $type: "yandex.cloud.datasphere.v1.GetStateVariablesResponse";
  /** Values of the specified variables. */
  variables?: { [key: string]: any };
}

export interface GetNotebookMetadataRequest {
  $type: "yandex.cloud.datasphere.v1.GetNotebookMetadataRequest";
  /** ID of the project, for which to return notebook metadata. */
  projectId: string;
  /** Path of the notebook to get metadata. */
  notebookPath: string;
}

export interface GetNotebookMetadataResponse {
  $type: "yandex.cloud.datasphere.v1.GetNotebookMetadataResponse";
  /** ID of the specified notebook. */
  notebookId: string;
  /** The time the notebook was created. */
  createdAt?: Date;
  /** The time the notebook was modified last time. */
  modifiedAt?: Date;
  /** Content length of the specified notebook. */
  contentLength: number;
  /** Cell ids of the specified notebook. */
  cellIds: string[];
}

const baseCreateProjectRequest: object = {
  $type: "yandex.cloud.datasphere.v1.CreateProjectRequest",
  folderId: "",
  name: "",
  description: "",
};

export const CreateProjectRequest = {
  $type: "yandex.cloud.datasphere.v1.CreateProjectRequest" as const,

  encode(
    message: CreateProjectRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.settings !== undefined) {
      Project_Settings.encode(
        message.settings,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.limits !== undefined) {
      Project_Limits.encode(message.limits, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateProjectRequest {
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
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
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
    message.description !== undefined &&
      (obj.description = message.description);
    message.settings !== undefined &&
      (obj.settings = message.settings
        ? Project_Settings.toJSON(message.settings)
        : undefined);
    message.limits !== undefined &&
      (obj.limits = message.limits
        ? Project_Limits.toJSON(message.limits)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateProjectRequest>, I>>(
    object: I
  ): CreateProjectRequest {
    const message = { ...baseCreateProjectRequest } as CreateProjectRequest;
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
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

messageTypeRegistry.set(CreateProjectRequest.$type, CreateProjectRequest);

const baseCreateProjectMetadata: object = {
  $type: "yandex.cloud.datasphere.v1.CreateProjectMetadata",
  projectId: "",
};

export const CreateProjectMetadata = {
  $type: "yandex.cloud.datasphere.v1.CreateProjectMetadata" as const,

  encode(
    message: CreateProjectMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateProjectMetadata {
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
        : "";
    return message;
  },

  toJSON(message: CreateProjectMetadata): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateProjectMetadata>, I>>(
    object: I
  ): CreateProjectMetadata {
    const message = { ...baseCreateProjectMetadata } as CreateProjectMetadata;
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateProjectMetadata.$type, CreateProjectMetadata);

const baseUpdateProjectRequest: object = {
  $type: "yandex.cloud.datasphere.v1.UpdateProjectRequest",
  projectId: "",
  name: "",
  description: "",
};

export const UpdateProjectRequest = {
  $type: "yandex.cloud.datasphere.v1.UpdateProjectRequest" as const,

  encode(
    message: UpdateProjectRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.settings !== undefined) {
      Project_Settings.encode(
        message.settings,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.limits !== undefined) {
      Project_Limits.encode(message.limits, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateProjectRequest {
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
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
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
    message.description !== undefined &&
      (obj.description = message.description);
    message.settings !== undefined &&
      (obj.settings = message.settings
        ? Project_Settings.toJSON(message.settings)
        : undefined);
    message.limits !== undefined &&
      (obj.limits = message.limits
        ? Project_Limits.toJSON(message.limits)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateProjectRequest>, I>>(
    object: I
  ): UpdateProjectRequest {
    const message = { ...baseUpdateProjectRequest } as UpdateProjectRequest;
    message.projectId = object.projectId ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
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

messageTypeRegistry.set(UpdateProjectRequest.$type, UpdateProjectRequest);

const baseUpdateProjectMetadata: object = {
  $type: "yandex.cloud.datasphere.v1.UpdateProjectMetadata",
  projectId: "",
};

export const UpdateProjectMetadata = {
  $type: "yandex.cloud.datasphere.v1.UpdateProjectMetadata" as const,

  encode(
    message: UpdateProjectMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateProjectMetadata {
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
        : "";
    return message;
  },

  toJSON(message: UpdateProjectMetadata): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateProjectMetadata>, I>>(
    object: I
  ): UpdateProjectMetadata {
    const message = { ...baseUpdateProjectMetadata } as UpdateProjectMetadata;
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateProjectMetadata.$type, UpdateProjectMetadata);

const baseDeleteProjectRequest: object = {
  $type: "yandex.cloud.datasphere.v1.DeleteProjectRequest",
  projectId: "",
};

export const DeleteProjectRequest = {
  $type: "yandex.cloud.datasphere.v1.DeleteProjectRequest" as const,

  encode(
    message: DeleteProjectRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteProjectRequest {
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
        : "";
    return message;
  },

  toJSON(message: DeleteProjectRequest): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteProjectRequest>, I>>(
    object: I
  ): DeleteProjectRequest {
    const message = { ...baseDeleteProjectRequest } as DeleteProjectRequest;
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteProjectRequest.$type, DeleteProjectRequest);

const baseDeleteProjectMetadata: object = {
  $type: "yandex.cloud.datasphere.v1.DeleteProjectMetadata",
  projectId: "",
};

export const DeleteProjectMetadata = {
  $type: "yandex.cloud.datasphere.v1.DeleteProjectMetadata" as const,

  encode(
    message: DeleteProjectMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteProjectMetadata {
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
        : "";
    return message;
  },

  toJSON(message: DeleteProjectMetadata): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteProjectMetadata>, I>>(
    object: I
  ): DeleteProjectMetadata {
    const message = { ...baseDeleteProjectMetadata } as DeleteProjectMetadata;
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteProjectMetadata.$type, DeleteProjectMetadata);

const baseOpenProjectRequest: object = {
  $type: "yandex.cloud.datasphere.v1.OpenProjectRequest",
  projectId: "",
};

export const OpenProjectRequest = {
  $type: "yandex.cloud.datasphere.v1.OpenProjectRequest" as const,

  encode(
    message: OpenProjectRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectId !== "") {
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
        : "";
    return message;
  },

  toJSON(message: OpenProjectRequest): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OpenProjectRequest>, I>>(
    object: I
  ): OpenProjectRequest {
    const message = { ...baseOpenProjectRequest } as OpenProjectRequest;
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(OpenProjectRequest.$type, OpenProjectRequest);

const baseOpenProjectMetadata: object = {
  $type: "yandex.cloud.datasphere.v1.OpenProjectMetadata",
  projectId: "",
};

export const OpenProjectMetadata = {
  $type: "yandex.cloud.datasphere.v1.OpenProjectMetadata" as const,

  encode(
    message: OpenProjectMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectId !== "") {
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
        : "";
    return message;
  },

  toJSON(message: OpenProjectMetadata): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OpenProjectMetadata>, I>>(
    object: I
  ): OpenProjectMetadata {
    const message = { ...baseOpenProjectMetadata } as OpenProjectMetadata;
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(OpenProjectMetadata.$type, OpenProjectMetadata);

const baseOpenProjectResponse: object = {
  $type: "yandex.cloud.datasphere.v1.OpenProjectResponse",
  projectUrl: "",
  sessionToken: "",
};

export const OpenProjectResponse = {
  $type: "yandex.cloud.datasphere.v1.OpenProjectResponse" as const,

  encode(
    message: OpenProjectResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectUrl !== "") {
      writer.uint32(10).string(message.projectUrl);
    }
    if (message.sessionToken !== "") {
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
        : "";
    message.sessionToken =
      object.sessionToken !== undefined && object.sessionToken !== null
        ? String(object.sessionToken)
        : "";
    return message;
  },

  toJSON(message: OpenProjectResponse): unknown {
    const obj: any = {};
    message.projectUrl !== undefined && (obj.projectUrl = message.projectUrl);
    message.sessionToken !== undefined &&
      (obj.sessionToken = message.sessionToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OpenProjectResponse>, I>>(
    object: I
  ): OpenProjectResponse {
    const message = { ...baseOpenProjectResponse } as OpenProjectResponse;
    message.projectUrl = object.projectUrl ?? "";
    message.sessionToken = object.sessionToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(OpenProjectResponse.$type, OpenProjectResponse);

const baseGetProjectRequest: object = {
  $type: "yandex.cloud.datasphere.v1.GetProjectRequest",
  projectId: "",
};

export const GetProjectRequest = {
  $type: "yandex.cloud.datasphere.v1.GetProjectRequest" as const,

  encode(
    message: GetProjectRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectId !== "") {
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
        : "";
    return message;
  },

  toJSON(message: GetProjectRequest): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetProjectRequest>, I>>(
    object: I
  ): GetProjectRequest {
    const message = { ...baseGetProjectRequest } as GetProjectRequest;
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetProjectRequest.$type, GetProjectRequest);

const baseListProjectsRequest: object = {
  $type: "yandex.cloud.datasphere.v1.ListProjectsRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListProjectsRequest = {
  $type: "yandex.cloud.datasphere.v1.ListProjectsRequest" as const,

  encode(
    message: ListProjectsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
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
        : "";
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    return message;
  },

  toJSON(message: ListProjectsRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListProjectsRequest>, I>>(
    object: I
  ): ListProjectsRequest {
    const message = { ...baseListProjectsRequest } as ListProjectsRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListProjectsRequest.$type, ListProjectsRequest);

const baseListProjectsResponse: object = {
  $type: "yandex.cloud.datasphere.v1.ListProjectsResponse",
  nextPageToken: "",
};

export const ListProjectsResponse = {
  $type: "yandex.cloud.datasphere.v1.ListProjectsResponse" as const,

  encode(
    message: ListProjectsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.projects) {
      Project.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListProjectsResponse {
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
    message.projects = (object.projects ?? []).map((e: any) =>
      Project.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListProjectsResponse): unknown {
    const obj: any = {};
    if (message.projects) {
      obj.projects = message.projects.map((e) =>
        e ? Project.toJSON(e) : undefined
      );
    } else {
      obj.projects = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListProjectsResponse>, I>>(
    object: I
  ): ListProjectsResponse {
    const message = { ...baseListProjectsResponse } as ListProjectsResponse;
    message.projects =
      object.projects?.map((e) => Project.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListProjectsResponse.$type, ListProjectsResponse);

const baseGetUnitBalanceRequest: object = {
  $type: "yandex.cloud.datasphere.v1.GetUnitBalanceRequest",
  projectId: "",
};

export const GetUnitBalanceRequest = {
  $type: "yandex.cloud.datasphere.v1.GetUnitBalanceRequest" as const,

  encode(
    message: GetUnitBalanceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetUnitBalanceRequest {
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
        : "";
    return message;
  },

  toJSON(message: GetUnitBalanceRequest): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUnitBalanceRequest>, I>>(
    object: I
  ): GetUnitBalanceRequest {
    const message = { ...baseGetUnitBalanceRequest } as GetUnitBalanceRequest;
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetUnitBalanceRequest.$type, GetUnitBalanceRequest);

const baseGetUnitBalanceResponse: object = {
  $type: "yandex.cloud.datasphere.v1.GetUnitBalanceResponse",
};

export const GetUnitBalanceResponse = {
  $type: "yandex.cloud.datasphere.v1.GetUnitBalanceResponse" as const,

  encode(
    message: GetUnitBalanceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.unitBalance !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.unitBalance! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetUnitBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetUnitBalanceResponse } as GetUnitBalanceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unitBalance = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
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
    message.unitBalance !== undefined &&
      (obj.unitBalance = message.unitBalance);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUnitBalanceResponse>, I>>(
    object: I
  ): GetUnitBalanceResponse {
    const message = { ...baseGetUnitBalanceResponse } as GetUnitBalanceResponse;
    message.unitBalance = object.unitBalance ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(GetUnitBalanceResponse.$type, GetUnitBalanceResponse);

const baseSetUnitBalanceRequest: object = {
  $type: "yandex.cloud.datasphere.v1.SetUnitBalanceRequest",
  projectId: "",
};

export const SetUnitBalanceRequest = {
  $type: "yandex.cloud.datasphere.v1.SetUnitBalanceRequest" as const,

  encode(
    message: SetUnitBalanceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.unitBalance !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.unitBalance! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetUnitBalanceRequest {
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
          message.unitBalance = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
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
        : "";
    message.unitBalance =
      object.unitBalance !== undefined && object.unitBalance !== null
        ? Number(object.unitBalance)
        : undefined;
    return message;
  },

  toJSON(message: SetUnitBalanceRequest): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.unitBalance !== undefined &&
      (obj.unitBalance = message.unitBalance);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetUnitBalanceRequest>, I>>(
    object: I
  ): SetUnitBalanceRequest {
    const message = { ...baseSetUnitBalanceRequest } as SetUnitBalanceRequest;
    message.projectId = object.projectId ?? "";
    message.unitBalance = object.unitBalance ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(SetUnitBalanceRequest.$type, SetUnitBalanceRequest);

const baseProjectExecutionRequest: object = {
  $type: "yandex.cloud.datasphere.v1.ProjectExecutionRequest",
  projectId: "",
  outputVariableNames: "",
};

export const ProjectExecutionRequest = {
  $type: "yandex.cloud.datasphere.v1.ProjectExecutionRequest" as const,

  encode(
    message: ProjectExecutionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.notebookId !== undefined) {
      writer.uint32(18).string(message.notebookId);
    }
    if (message.cellId !== undefined) {
      writer.uint32(26).string(message.cellId);
    }
    if (message.inputVariables !== undefined) {
      Struct.encode(
        Struct.wrap(message.inputVariables),
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.outputVariableNames) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ProjectExecutionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseProjectExecutionRequest,
    } as ProjectExecutionRequest;
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
          message.inputVariables = Struct.unwrap(
            Struct.decode(reader, reader.uint32())
          );
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
    const message = {
      ...baseProjectExecutionRequest,
    } as ProjectExecutionRequest;
    message.projectId =
      object.projectId !== undefined && object.projectId !== null
        ? String(object.projectId)
        : "";
    message.notebookId =
      object.notebookId !== undefined && object.notebookId !== null
        ? String(object.notebookId)
        : undefined;
    message.cellId =
      object.cellId !== undefined && object.cellId !== null
        ? String(object.cellId)
        : undefined;
    message.inputVariables =
      typeof object.inputVariables === "object"
        ? object.inputVariables
        : undefined;
    message.outputVariableNames = (object.outputVariableNames ?? []).map(
      (e: any) => String(e)
    );
    return message;
  },

  toJSON(message: ProjectExecutionRequest): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.notebookId !== undefined && (obj.notebookId = message.notebookId);
    message.cellId !== undefined && (obj.cellId = message.cellId);
    message.inputVariables !== undefined &&
      (obj.inputVariables = message.inputVariables);
    if (message.outputVariableNames) {
      obj.outputVariableNames = message.outputVariableNames.map((e) => e);
    } else {
      obj.outputVariableNames = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProjectExecutionRequest>, I>>(
    object: I
  ): ProjectExecutionRequest {
    const message = {
      ...baseProjectExecutionRequest,
    } as ProjectExecutionRequest;
    message.projectId = object.projectId ?? "";
    message.notebookId = object.notebookId ?? undefined;
    message.cellId = object.cellId ?? undefined;
    message.inputVariables = object.inputVariables ?? undefined;
    message.outputVariableNames =
      object.outputVariableNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(ProjectExecutionRequest.$type, ProjectExecutionRequest);

const baseProjectExecutionMetadata: object = {
  $type: "yandex.cloud.datasphere.v1.ProjectExecutionMetadata",
  projectId: "",
};

export const ProjectExecutionMetadata = {
  $type: "yandex.cloud.datasphere.v1.ProjectExecutionMetadata" as const,

  encode(
    message: ProjectExecutionMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectId !== "") {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ProjectExecutionMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseProjectExecutionMetadata,
    } as ProjectExecutionMetadata;
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
    const message = {
      ...baseProjectExecutionMetadata,
    } as ProjectExecutionMetadata;
    message.projectId =
      object.projectId !== undefined && object.projectId !== null
        ? String(object.projectId)
        : "";
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
    object: I
  ): ProjectExecutionMetadata {
    const message = {
      ...baseProjectExecutionMetadata,
    } as ProjectExecutionMetadata;
    message.projectId = object.projectId ?? "";
    message.notebookId = object.notebookId ?? undefined;
    message.cellId = object.cellId ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ProjectExecutionMetadata.$type,
  ProjectExecutionMetadata
);

const baseProjectExecutionResponse: object = {
  $type: "yandex.cloud.datasphere.v1.ProjectExecutionResponse",
  checkpointId: "",
};

export const ProjectExecutionResponse = {
  $type: "yandex.cloud.datasphere.v1.ProjectExecutionResponse" as const,

  encode(
    message: ProjectExecutionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.checkpointId !== "") {
      writer.uint32(10).string(message.checkpointId);
    }
    if (message.outputVariables !== undefined) {
      Struct.encode(
        Struct.wrap(message.outputVariables),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ProjectExecutionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseProjectExecutionResponse,
    } as ProjectExecutionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.checkpointId = reader.string();
          break;
        case 2:
          message.outputVariables = Struct.unwrap(
            Struct.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectExecutionResponse {
    const message = {
      ...baseProjectExecutionResponse,
    } as ProjectExecutionResponse;
    message.checkpointId =
      object.checkpointId !== undefined && object.checkpointId !== null
        ? String(object.checkpointId)
        : "";
    message.outputVariables =
      typeof object.outputVariables === "object"
        ? object.outputVariables
        : undefined;
    return message;
  },

  toJSON(message: ProjectExecutionResponse): unknown {
    const obj: any = {};
    message.checkpointId !== undefined &&
      (obj.checkpointId = message.checkpointId);
    message.outputVariables !== undefined &&
      (obj.outputVariables = message.outputVariables);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProjectExecutionResponse>, I>>(
    object: I
  ): ProjectExecutionResponse {
    const message = {
      ...baseProjectExecutionResponse,
    } as ProjectExecutionResponse;
    message.checkpointId = object.checkpointId ?? "";
    message.outputVariables = object.outputVariables ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ProjectExecutionResponse.$type,
  ProjectExecutionResponse
);

const baseCellOutputsRequest: object = {
  $type: "yandex.cloud.datasphere.v1.CellOutputsRequest",
  projectId: "",
  cellId: "",
  checkpointId: "",
};

export const CellOutputsRequest = {
  $type: "yandex.cloud.datasphere.v1.CellOutputsRequest" as const,

  encode(
    message: CellOutputsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.cellId !== "") {
      writer.uint32(18).string(message.cellId);
    }
    if (message.checkpointId !== "") {
      writer.uint32(26).string(message.checkpointId);
    }
    if (message.startAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellOutputsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCellOutputsRequest } as CellOutputsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.string();
          break;
        case 2:
          message.cellId = reader.string();
          break;
        case 3:
          message.checkpointId = reader.string();
          break;
        case 4:
          message.startAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CellOutputsRequest {
    const message = { ...baseCellOutputsRequest } as CellOutputsRequest;
    message.projectId =
      object.projectId !== undefined && object.projectId !== null
        ? String(object.projectId)
        : "";
    message.cellId =
      object.cellId !== undefined && object.cellId !== null
        ? String(object.cellId)
        : "";
    message.checkpointId =
      object.checkpointId !== undefined && object.checkpointId !== null
        ? String(object.checkpointId)
        : "";
    message.startAt =
      object.startAt !== undefined && object.startAt !== null
        ? fromJsonTimestamp(object.startAt)
        : undefined;
    return message;
  },

  toJSON(message: CellOutputsRequest): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.cellId !== undefined && (obj.cellId = message.cellId);
    message.checkpointId !== undefined &&
      (obj.checkpointId = message.checkpointId);
    message.startAt !== undefined &&
      (obj.startAt = message.startAt.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CellOutputsRequest>, I>>(
    object: I
  ): CellOutputsRequest {
    const message = { ...baseCellOutputsRequest } as CellOutputsRequest;
    message.projectId = object.projectId ?? "";
    message.cellId = object.cellId ?? "";
    message.checkpointId = object.checkpointId ?? "";
    message.startAt = object.startAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(CellOutputsRequest.$type, CellOutputsRequest);

const baseCellOutputsResponse: object = {
  $type: "yandex.cloud.datasphere.v1.CellOutputsResponse",
  outputs: "",
};

export const CellOutputsResponse = {
  $type: "yandex.cloud.datasphere.v1.CellOutputsResponse" as const,

  encode(
    message: CellOutputsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.outputs) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellOutputsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCellOutputsResponse } as CellOutputsResponse;
    message.outputs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.outputs.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CellOutputsResponse {
    const message = { ...baseCellOutputsResponse } as CellOutputsResponse;
    message.outputs = (object.outputs ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: CellOutputsResponse): unknown {
    const obj: any = {};
    if (message.outputs) {
      obj.outputs = message.outputs.map((e) => e);
    } else {
      obj.outputs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CellOutputsResponse>, I>>(
    object: I
  ): CellOutputsResponse {
    const message = { ...baseCellOutputsResponse } as CellOutputsResponse;
    message.outputs = object.outputs?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(CellOutputsResponse.$type, CellOutputsResponse);

const baseGetStateVariablesRequest: object = {
  $type: "yandex.cloud.datasphere.v1.GetStateVariablesRequest",
  projectId: "",
  notebookId: "",
  variableNames: "",
  checkpointId: "",
};

export const GetStateVariablesRequest = {
  $type: "yandex.cloud.datasphere.v1.GetStateVariablesRequest" as const,

  encode(
    message: GetStateVariablesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.notebookId !== "") {
      writer.uint32(18).string(message.notebookId);
    }
    for (const v of message.variableNames) {
      writer.uint32(26).string(v!);
    }
    if (message.checkpointId !== "") {
      writer.uint32(34).string(message.checkpointId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetStateVariablesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetStateVariablesRequest,
    } as GetStateVariablesRequest;
    message.variableNames = [];
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
          message.variableNames.push(reader.string());
          break;
        case 4:
          message.checkpointId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetStateVariablesRequest {
    const message = {
      ...baseGetStateVariablesRequest,
    } as GetStateVariablesRequest;
    message.projectId =
      object.projectId !== undefined && object.projectId !== null
        ? String(object.projectId)
        : "";
    message.notebookId =
      object.notebookId !== undefined && object.notebookId !== null
        ? String(object.notebookId)
        : "";
    message.variableNames = (object.variableNames ?? []).map((e: any) =>
      String(e)
    );
    message.checkpointId =
      object.checkpointId !== undefined && object.checkpointId !== null
        ? String(object.checkpointId)
        : "";
    return message;
  },

  toJSON(message: GetStateVariablesRequest): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.notebookId !== undefined && (obj.notebookId = message.notebookId);
    if (message.variableNames) {
      obj.variableNames = message.variableNames.map((e) => e);
    } else {
      obj.variableNames = [];
    }
    message.checkpointId !== undefined &&
      (obj.checkpointId = message.checkpointId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetStateVariablesRequest>, I>>(
    object: I
  ): GetStateVariablesRequest {
    const message = {
      ...baseGetStateVariablesRequest,
    } as GetStateVariablesRequest;
    message.projectId = object.projectId ?? "";
    message.notebookId = object.notebookId ?? "";
    message.variableNames = object.variableNames?.map((e) => e) || [];
    message.checkpointId = object.checkpointId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  GetStateVariablesRequest.$type,
  GetStateVariablesRequest
);

const baseGetStateVariablesResponse: object = {
  $type: "yandex.cloud.datasphere.v1.GetStateVariablesResponse",
};

export const GetStateVariablesResponse = {
  $type: "yandex.cloud.datasphere.v1.GetStateVariablesResponse" as const,

  encode(
    message: GetStateVariablesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.variables !== undefined) {
      Struct.encode(
        Struct.wrap(message.variables),
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetStateVariablesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetStateVariablesResponse,
    } as GetStateVariablesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.variables = Struct.unwrap(
            Struct.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetStateVariablesResponse {
    const message = {
      ...baseGetStateVariablesResponse,
    } as GetStateVariablesResponse;
    message.variables =
      typeof object.variables === "object" ? object.variables : undefined;
    return message;
  },

  toJSON(message: GetStateVariablesResponse): unknown {
    const obj: any = {};
    message.variables !== undefined && (obj.variables = message.variables);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetStateVariablesResponse>, I>>(
    object: I
  ): GetStateVariablesResponse {
    const message = {
      ...baseGetStateVariablesResponse,
    } as GetStateVariablesResponse;
    message.variables = object.variables ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  GetStateVariablesResponse.$type,
  GetStateVariablesResponse
);

const baseGetNotebookMetadataRequest: object = {
  $type: "yandex.cloud.datasphere.v1.GetNotebookMetadataRequest",
  projectId: "",
  notebookPath: "",
};

export const GetNotebookMetadataRequest = {
  $type: "yandex.cloud.datasphere.v1.GetNotebookMetadataRequest" as const,

  encode(
    message: GetNotebookMetadataRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.notebookPath !== "") {
      writer.uint32(18).string(message.notebookPath);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetNotebookMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetNotebookMetadataRequest,
    } as GetNotebookMetadataRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.string();
          break;
        case 2:
          message.notebookPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNotebookMetadataRequest {
    const message = {
      ...baseGetNotebookMetadataRequest,
    } as GetNotebookMetadataRequest;
    message.projectId =
      object.projectId !== undefined && object.projectId !== null
        ? String(object.projectId)
        : "";
    message.notebookPath =
      object.notebookPath !== undefined && object.notebookPath !== null
        ? String(object.notebookPath)
        : "";
    return message;
  },

  toJSON(message: GetNotebookMetadataRequest): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.notebookPath !== undefined &&
      (obj.notebookPath = message.notebookPath);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetNotebookMetadataRequest>, I>>(
    object: I
  ): GetNotebookMetadataRequest {
    const message = {
      ...baseGetNotebookMetadataRequest,
    } as GetNotebookMetadataRequest;
    message.projectId = object.projectId ?? "";
    message.notebookPath = object.notebookPath ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  GetNotebookMetadataRequest.$type,
  GetNotebookMetadataRequest
);

const baseGetNotebookMetadataResponse: object = {
  $type: "yandex.cloud.datasphere.v1.GetNotebookMetadataResponse",
  notebookId: "",
  contentLength: 0,
  cellIds: "",
};

export const GetNotebookMetadataResponse = {
  $type: "yandex.cloud.datasphere.v1.GetNotebookMetadataResponse" as const,

  encode(
    message: GetNotebookMetadataResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.notebookId !== "") {
      writer.uint32(10).string(message.notebookId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.modifiedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.modifiedAt),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.contentLength !== 0) {
      writer.uint32(32).int64(message.contentLength);
    }
    for (const v of message.cellIds) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetNotebookMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetNotebookMetadataResponse,
    } as GetNotebookMetadataResponse;
    message.cellIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notebookId = reader.string();
          break;
        case 2:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.modifiedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.contentLength = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.cellIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNotebookMetadataResponse {
    const message = {
      ...baseGetNotebookMetadataResponse,
    } as GetNotebookMetadataResponse;
    message.notebookId =
      object.notebookId !== undefined && object.notebookId !== null
        ? String(object.notebookId)
        : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.modifiedAt =
      object.modifiedAt !== undefined && object.modifiedAt !== null
        ? fromJsonTimestamp(object.modifiedAt)
        : undefined;
    message.contentLength =
      object.contentLength !== undefined && object.contentLength !== null
        ? Number(object.contentLength)
        : 0;
    message.cellIds = (object.cellIds ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: GetNotebookMetadataResponse): unknown {
    const obj: any = {};
    message.notebookId !== undefined && (obj.notebookId = message.notebookId);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.modifiedAt !== undefined &&
      (obj.modifiedAt = message.modifiedAt.toISOString());
    message.contentLength !== undefined &&
      (obj.contentLength = Math.round(message.contentLength));
    if (message.cellIds) {
      obj.cellIds = message.cellIds.map((e) => e);
    } else {
      obj.cellIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetNotebookMetadataResponse>, I>>(
    object: I
  ): GetNotebookMetadataResponse {
    const message = {
      ...baseGetNotebookMetadataResponse,
    } as GetNotebookMetadataResponse;
    message.notebookId = object.notebookId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.modifiedAt = object.modifiedAt ?? undefined;
    message.contentLength = object.contentLength ?? 0;
    message.cellIds = object.cellIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  GetNotebookMetadataResponse.$type,
  GetNotebookMetadataResponse
);

/** A set of methods for managing Project resources. */
export const ProjectServiceService = {
  /** Creates a project in the specified folder. */
  create: {
    path: "/yandex.cloud.datasphere.v1.ProjectService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateProjectRequest) =>
      Buffer.from(CreateProjectRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateProjectRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified project. */
  update: {
    path: "/yandex.cloud.datasphere.v1.ProjectService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateProjectRequest) =>
      Buffer.from(UpdateProjectRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateProjectRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified project. */
  delete: {
    path: "/yandex.cloud.datasphere.v1.ProjectService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteProjectRequest) =>
      Buffer.from(DeleteProjectRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteProjectRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Opens the specified project. */
  open: {
    path: "/yandex.cloud.datasphere.v1.ProjectService/Open",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: OpenProjectRequest) =>
      Buffer.from(OpenProjectRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => OpenProjectRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns the specified project. */
  get: {
    path: "/yandex.cloud.datasphere.v1.ProjectService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetProjectRequest) =>
      Buffer.from(GetProjectRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetProjectRequest.decode(value),
    responseSerialize: (value: Project) =>
      Buffer.from(Project.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Project.decode(value),
  },
  /** Lists projects for the specified folder. */
  list: {
    path: "/yandex.cloud.datasphere.v1.ProjectService/List",
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
    path: "/yandex.cloud.datasphere.v1.ProjectService/GetUnitBalance",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetUnitBalanceRequest) =>
      Buffer.from(GetUnitBalanceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetUnitBalanceRequest.decode(value),
    responseSerialize: (value: GetUnitBalanceResponse) =>
      Buffer.from(GetUnitBalanceResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetUnitBalanceResponse.decode(value),
  },
  /** Sets the unit balance of the specified project. */
  setUnitBalance: {
    path: "/yandex.cloud.datasphere.v1.ProjectService/SetUnitBalance",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetUnitBalanceRequest) =>
      Buffer.from(SetUnitBalanceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetUnitBalanceRequest.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  /** Executes code in the specified cell or notebook. */
  execute: {
    path: "/yandex.cloud.datasphere.v1.ProjectService/Execute",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ProjectExecutionRequest) =>
      Buffer.from(ProjectExecutionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ProjectExecutionRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns outputs of the specified cell. */
  getCellOutputs: {
    path: "/yandex.cloud.datasphere.v1.ProjectService/GetCellOutputs",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CellOutputsRequest) =>
      Buffer.from(CellOutputsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CellOutputsRequest.decode(value),
    responseSerialize: (value: CellOutputsResponse) =>
      Buffer.from(CellOutputsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CellOutputsResponse.decode(value),
  },
  /** Returns state variables of the specified notebook. */
  getStateVariables: {
    path: "/yandex.cloud.datasphere.v1.ProjectService/GetStateVariables",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetStateVariablesRequest) =>
      Buffer.from(GetStateVariablesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetStateVariablesRequest.decode(value),
    responseSerialize: (value: GetStateVariablesResponse) =>
      Buffer.from(GetStateVariablesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetStateVariablesResponse.decode(value),
  },
  /** Returns metadata of the specified notebook. */
  getNotebookMetadata: {
    path: "/yandex.cloud.datasphere.v1.ProjectService/GetNotebookMetadata",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetNotebookMetadataRequest) =>
      Buffer.from(GetNotebookMetadataRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetNotebookMetadataRequest.decode(value),
    responseSerialize: (value: GetNotebookMetadataResponse) =>
      Buffer.from(GetNotebookMetadataResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetNotebookMetadataResponse.decode(value),
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
  getUnitBalance: handleUnaryCall<
    GetUnitBalanceRequest,
    GetUnitBalanceResponse
  >;
  /** Sets the unit balance of the specified project. */
  setUnitBalance: handleUnaryCall<SetUnitBalanceRequest, Empty>;
  /** Executes code in the specified cell or notebook. */
  execute: handleUnaryCall<ProjectExecutionRequest, Operation>;
  /** Returns outputs of the specified cell. */
  getCellOutputs: handleUnaryCall<CellOutputsRequest, CellOutputsResponse>;
  /** Returns state variables of the specified notebook. */
  getStateVariables: handleUnaryCall<
    GetStateVariablesRequest,
    GetStateVariablesResponse
  >;
  /** Returns metadata of the specified notebook. */
  getNotebookMetadata: handleUnaryCall<
    GetNotebookMetadataRequest,
    GetNotebookMetadataResponse
  >;
}

export interface ProjectServiceClient extends Client {
  /** Creates a project in the specified folder. */
  create(
    request: CreateProjectRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateProjectRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateProjectRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified project. */
  update(
    request: UpdateProjectRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateProjectRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateProjectRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified project. */
  delete(
    request: DeleteProjectRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteProjectRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteProjectRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Opens the specified project. */
  open(
    request: OpenProjectRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  open(
    request: OpenProjectRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  open(
    request: OpenProjectRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Returns the specified project. */
  get(
    request: GetProjectRequest,
    callback: (error: ServiceError | null, response: Project) => void
  ): ClientUnaryCall;
  get(
    request: GetProjectRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Project) => void
  ): ClientUnaryCall;
  get(
    request: GetProjectRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Project) => void
  ): ClientUnaryCall;
  /** Lists projects for the specified folder. */
  list(
    request: ListProjectsRequest,
    callback: (
      error: ServiceError | null,
      response: ListProjectsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListProjectsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListProjectsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListProjectsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListProjectsResponse
    ) => void
  ): ClientUnaryCall;
  /** Returns the unit balance of the specified project. */
  getUnitBalance(
    request: GetUnitBalanceRequest,
    callback: (
      error: ServiceError | null,
      response: GetUnitBalanceResponse
    ) => void
  ): ClientUnaryCall;
  getUnitBalance(
    request: GetUnitBalanceRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetUnitBalanceResponse
    ) => void
  ): ClientUnaryCall;
  getUnitBalance(
    request: GetUnitBalanceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetUnitBalanceResponse
    ) => void
  ): ClientUnaryCall;
  /** Sets the unit balance of the specified project. */
  setUnitBalance(
    request: SetUnitBalanceRequest,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  setUnitBalance(
    request: SetUnitBalanceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  setUnitBalance(
    request: SetUnitBalanceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  /** Executes code in the specified cell or notebook. */
  execute(
    request: ProjectExecutionRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  execute(
    request: ProjectExecutionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  execute(
    request: ProjectExecutionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Returns outputs of the specified cell. */
  getCellOutputs(
    request: CellOutputsRequest,
    callback: (
      error: ServiceError | null,
      response: CellOutputsResponse
    ) => void
  ): ClientUnaryCall;
  getCellOutputs(
    request: CellOutputsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CellOutputsResponse
    ) => void
  ): ClientUnaryCall;
  getCellOutputs(
    request: CellOutputsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CellOutputsResponse
    ) => void
  ): ClientUnaryCall;
  /** Returns state variables of the specified notebook. */
  getStateVariables(
    request: GetStateVariablesRequest,
    callback: (
      error: ServiceError | null,
      response: GetStateVariablesResponse
    ) => void
  ): ClientUnaryCall;
  getStateVariables(
    request: GetStateVariablesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetStateVariablesResponse
    ) => void
  ): ClientUnaryCall;
  getStateVariables(
    request: GetStateVariablesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetStateVariablesResponse
    ) => void
  ): ClientUnaryCall;
  /** Returns metadata of the specified notebook. */
  getNotebookMetadata(
    request: GetNotebookMetadataRequest,
    callback: (
      error: ServiceError | null,
      response: GetNotebookMetadataResponse
    ) => void
  ): ClientUnaryCall;
  getNotebookMetadata(
    request: GetNotebookMetadataRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetNotebookMetadataResponse
    ) => void
  ): ClientUnaryCall;
  getNotebookMetadata(
    request: GetNotebookMetadataRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetNotebookMetadataResponse
    ) => void
  ): ClientUnaryCall;
}

export const ProjectServiceClient = makeGenericClientConstructor(
  ProjectServiceService,
  "yandex.cloud.datasphere.v1.ProjectService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): ProjectServiceClient;
  service: typeof ProjectServiceService;
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P> | "$type">,
        never
      >;

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
