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
} from "../../../../yandex/cloud/datasphere/v2/project";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import {
  ListAccessBindingsRequest,
  ListAccessBindingsResponse,
  SetAccessBindingsRequest,
  UpdateAccessBindingsRequest,
} from "../../../../yandex/cloud/access/access";
import { Int64Value } from "../../../../google/protobuf/wrappers";
import { Struct } from "../../../../google/protobuf/struct";

export const protobufPackage = "yandex.cloud.datasphere.v2";

export enum ExecutionStatus {
  EXECUTION_STATUS_UNSPECIFIED = 0,
  /** OK - Execution finished successfully. */
  OK = 1,
  /** ERROR - Execution ended with error. */
  ERROR = 2,
  /** ABORTED - Execution was aborted. */
  ABORTED = 3,
  UNRECOGNIZED = -1,
}

export function executionStatusFromJSON(object: any): ExecutionStatus {
  switch (object) {
    case 0:
    case "EXECUTION_STATUS_UNSPECIFIED":
      return ExecutionStatus.EXECUTION_STATUS_UNSPECIFIED;
    case 1:
    case "OK":
      return ExecutionStatus.OK;
    case 2:
    case "ERROR":
      return ExecutionStatus.ERROR;
    case 3:
    case "ABORTED":
      return ExecutionStatus.ABORTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ExecutionStatus.UNRECOGNIZED;
  }
}

export function executionStatusToJSON(object: ExecutionStatus): string {
  switch (object) {
    case ExecutionStatus.EXECUTION_STATUS_UNSPECIFIED:
      return "EXECUTION_STATUS_UNSPECIFIED";
    case ExecutionStatus.OK:
      return "OK";
    case ExecutionStatus.ERROR:
      return "ERROR";
    case ExecutionStatus.ABORTED:
      return "ABORTED";
    default:
      return "UNKNOWN";
  }
}

export interface CreateProjectRequest {
  $type: "yandex.cloud.datasphere.v2.CreateProjectRequest";
  /** ID of the community to create a project in. */
  communityId: string;
  /** Name of the project. 0-63 characters long. */
  name: string;
  /** Description of the project. 0-256 characters long. */
  description: string;
  /** Labels of the project. */
  labels: { [key: string]: string };
  /** Settings of the project. */
  settings?: Project_Settings;
  /** Limits of the project. */
  limits?: Project_Limits;
}

export interface CreateProjectRequest_LabelsEntry {
  $type: "yandex.cloud.datasphere.v2.CreateProjectRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateProjectMetadata {
  $type: "yandex.cloud.datasphere.v2.CreateProjectMetadata";
  /** ID of the project that is being created. */
  projectId: string;
}

export interface UpdateProjectRequest {
  $type: "yandex.cloud.datasphere.v2.UpdateProjectRequest";
  /**
   * ID of the Project resource to update.
   * To get the project ID use a [ProjectService.List] request.
   */
  projectId: string;
  /** Field mask that specifies which fields of the Project resource are going to be updated. */
  updateMask?: FieldMask;
  /** Name of the project. 0-63 characters long. */
  name: string;
  /** Description of the project. 0-256 characters long. */
  description: string;
  /** Labels of the project. */
  labels: { [key: string]: string };
  /** Settings of the project. */
  settings?: Project_Settings;
  /** Limits of the project. */
  limits?: Project_Limits;
}

export interface UpdateProjectRequest_LabelsEntry {
  $type: "yandex.cloud.datasphere.v2.UpdateProjectRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateProjectMetadata {
  $type: "yandex.cloud.datasphere.v2.UpdateProjectMetadata";
  /** ID of the project that is being updated. */
  projectId: string;
}

export interface DeleteProjectRequest {
  $type: "yandex.cloud.datasphere.v2.DeleteProjectRequest";
  /**
   * ID of the Project resource to delete.
   * To get the project ID use a [ProjectService.List] request.
   */
  projectId: string;
}

export interface DeleteProjectMetadata {
  $type: "yandex.cloud.datasphere.v2.DeleteProjectMetadata";
  /** ID of the project that is being deleted. */
  projectId: string;
}

export interface OpenProjectRequest {
  $type: "yandex.cloud.datasphere.v2.OpenProjectRequest";
  /**
   * ID of the Project resource to open.
   * To get the project ID use a [ProjectService.List] request.
   */
  projectId: string;
}

export interface OpenProjectMetadata {
  $type: "yandex.cloud.datasphere.v2.OpenProjectMetadata";
  /** ID of the project that is being opened. */
  projectId: string;
  /** Project opening status. */
  status: OpenProjectMetadata_OpenProjectStatus;
}

export enum OpenProjectMetadata_OpenProjectStatus {
  OPEN_PROJECT_STATUS_UNSPECIFIED = 0,
  /** OPEN_PROJECT_STATUS_CLOSING_IDE - Closing previous IDE instance. */
  OPEN_PROJECT_STATUS_CLOSING_IDE = 1,
  /** OPEN_PROJECT_STATUS_UNZIPPING_PROJECT - Unzipping project. */
  OPEN_PROJECT_STATUS_UNZIPPING_PROJECT = 2,
  /** OPEN_PROJECT_STATUS_ALLOCATING_VM - Allocating VM for the project. */
  OPEN_PROJECT_STATUS_ALLOCATING_VM = 3,
  /** OPEN_PROJECT_STATUS_ALLOCATING_RESOURCES - Allocating resources for the project. */
  OPEN_PROJECT_STATUS_ALLOCATING_RESOURCES = 4,
  /** OPEN_PROJECT_STATUS_STARTING_IDE - Starting IDE. */
  OPEN_PROJECT_STATUS_STARTING_IDE = 5,
  /** OPEN_PROJECT_STATUS_APPLYING_CHECKPOINT - Applying checkpoint to project. */
  OPEN_PROJECT_STATUS_APPLYING_CHECKPOINT = 6,
  /** OPEN_PROJECT_STATUS_UNKNOWN - Unknown open project status. */
  OPEN_PROJECT_STATUS_UNKNOWN = 7,
  UNRECOGNIZED = -1,
}

export function openProjectMetadata_OpenProjectStatusFromJSON(
  object: any
): OpenProjectMetadata_OpenProjectStatus {
  switch (object) {
    case 0:
    case "OPEN_PROJECT_STATUS_UNSPECIFIED":
      return OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_UNSPECIFIED;
    case 1:
    case "OPEN_PROJECT_STATUS_CLOSING_IDE":
      return OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_CLOSING_IDE;
    case 2:
    case "OPEN_PROJECT_STATUS_UNZIPPING_PROJECT":
      return OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_UNZIPPING_PROJECT;
    case 3:
    case "OPEN_PROJECT_STATUS_ALLOCATING_VM":
      return OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_ALLOCATING_VM;
    case 4:
    case "OPEN_PROJECT_STATUS_ALLOCATING_RESOURCES":
      return OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_ALLOCATING_RESOURCES;
    case 5:
    case "OPEN_PROJECT_STATUS_STARTING_IDE":
      return OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_STARTING_IDE;
    case 6:
    case "OPEN_PROJECT_STATUS_APPLYING_CHECKPOINT":
      return OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_APPLYING_CHECKPOINT;
    case 7:
    case "OPEN_PROJECT_STATUS_UNKNOWN":
      return OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_UNKNOWN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OpenProjectMetadata_OpenProjectStatus.UNRECOGNIZED;
  }
}

export function openProjectMetadata_OpenProjectStatusToJSON(
  object: OpenProjectMetadata_OpenProjectStatus
): string {
  switch (object) {
    case OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_UNSPECIFIED:
      return "OPEN_PROJECT_STATUS_UNSPECIFIED";
    case OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_CLOSING_IDE:
      return "OPEN_PROJECT_STATUS_CLOSING_IDE";
    case OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_UNZIPPING_PROJECT:
      return "OPEN_PROJECT_STATUS_UNZIPPING_PROJECT";
    case OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_ALLOCATING_VM:
      return "OPEN_PROJECT_STATUS_ALLOCATING_VM";
    case OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_ALLOCATING_RESOURCES:
      return "OPEN_PROJECT_STATUS_ALLOCATING_RESOURCES";
    case OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_STARTING_IDE:
      return "OPEN_PROJECT_STATUS_STARTING_IDE";
    case OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_APPLYING_CHECKPOINT:
      return "OPEN_PROJECT_STATUS_APPLYING_CHECKPOINT";
    case OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_UNKNOWN:
      return "OPEN_PROJECT_STATUS_UNKNOWN";
    default:
      return "UNKNOWN";
  }
}

export interface OpenProjectResponse {
  $type: "yandex.cloud.datasphere.v2.OpenProjectResponse";
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
  $type: "yandex.cloud.datasphere.v2.GetProjectRequest";
  /**
   * ID of the Project resource to return.
   * To get the project ID use a [ProjectService.List] request.
   */
  projectId: string;
}

export interface ListProjectsRequest {
  $type: "yandex.cloud.datasphere.v2.ListProjectsRequest";
  /** ID of the community to list projects in. */
  communityId: string;
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
  /**
   * Name pattern to filter projects that are returned.
   * Only projects with names matching the pattern will be returned.
   */
  projectNamePattern: string;
  /**
   * User ID to filter projects that are returned.
   * Only projects that are owned by specified user will be returned.
   */
  ownedById: string;
}

export interface ListProjectsResponse {
  $type: "yandex.cloud.datasphere.v2.ListProjectsResponse";
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
  $type: "yandex.cloud.datasphere.v2.GetUnitBalanceRequest";
  /** ID of the project to return the unit balance for. */
  projectId: string;
}

export interface GetUnitBalanceResponse {
  $type: "yandex.cloud.datasphere.v2.GetUnitBalanceResponse";
  /** The number of units available to the project. */
  unitBalance?: number;
}

export interface SetUnitBalanceRequest {
  $type: "yandex.cloud.datasphere.v2.SetUnitBalanceRequest";
  /** ID of the project to set the unit balance for. */
  projectId: string;
  /** The number of units available to the project. */
  unitBalance?: number;
}

export interface SetUnitBalanceMetadata {
  $type: "yandex.cloud.datasphere.v2.SetUnitBalanceMetadata";
  /** ID of the project which unit balance is set. */
  projectId: string;
}

export interface ProjectExecutionRequest {
  $type: "yandex.cloud.datasphere.v2.ProjectExecutionRequest";
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
  $type: "yandex.cloud.datasphere.v2.ProjectExecutionMetadata";
  /** ID of the project in which notebook is being executed. */
  projectId: string;
  /** ID of the notebook that is being executed */
  notebookId: string | undefined;
  /** ID of the cell that is being executed */
  cellId: string | undefined;
}

export interface ProjectExecutionResponse {
  $type: "yandex.cloud.datasphere.v2.ProjectExecutionResponse";
  /** ID of the checkpoint resulting from the execution. */
  checkpointId: string;
  /** Values of output variables resulting from the execution. */
  outputVariables?: { [key: string]: any };
  /** Execution final status. */
  executionStatus: ExecutionStatus;
}

export interface CellOutputsRequest {
  $type: "yandex.cloud.datasphere.v2.CellOutputsRequest";
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
  $type: "yandex.cloud.datasphere.v2.CellOutputsResponse";
  /** List of outputs. */
  outputs: string[];
}

export interface GetStateVariablesRequest {
  $type: "yandex.cloud.datasphere.v2.GetStateVariablesRequest";
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
  $type: "yandex.cloud.datasphere.v2.GetStateVariablesResponse";
  /** Values of the specified variables. */
  variables?: { [key: string]: any };
}

export interface SetProjectAccessBindingsMetadata {
  $type: "yandex.cloud.datasphere.v2.SetProjectAccessBindingsMetadata";
  /** ID of the project which access bindings are set. */
  projectId: string;
}

export interface UpdateProjectAccessBindingsMetadata {
  $type: "yandex.cloud.datasphere.v2.UpdateProjectAccessBindingsMetadata";
  /** ID of the project which access bindings are updated. */
  projectId: string;
}

const baseCreateProjectRequest: object = {
  $type: "yandex.cloud.datasphere.v2.CreateProjectRequest",
  communityId: "",
  name: "",
  description: "",
};

export const CreateProjectRequest = {
  $type: "yandex.cloud.datasphere.v2.CreateProjectRequest" as const,

  encode(
    message: CreateProjectRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateProjectRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.datasphere.v2.CreateProjectRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
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
  ): CreateProjectRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateProjectRequest } as CreateProjectRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          const entry4 = CreateProjectRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
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

  fromJSON(object: any): CreateProjectRequest {
    const message = { ...baseCreateProjectRequest } as CreateProjectRequest;
    message.communityId =
      object.communityId !== undefined && object.communityId !== null
        ? String(object.communityId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
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
    message.communityId !== undefined &&
      (obj.communityId = message.communityId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
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
    message.communityId = object.communityId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
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

const baseCreateProjectRequest_LabelsEntry: object = {
  $type: "yandex.cloud.datasphere.v2.CreateProjectRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateProjectRequest_LabelsEntry = {
  $type: "yandex.cloud.datasphere.v2.CreateProjectRequest.LabelsEntry" as const,

  encode(
    message: CreateProjectRequest_LabelsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateProjectRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateProjectRequest_LabelsEntry,
    } as CreateProjectRequest_LabelsEntry;
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

  fromJSON(object: any): CreateProjectRequest_LabelsEntry {
    const message = {
      ...baseCreateProjectRequest_LabelsEntry,
    } as CreateProjectRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateProjectRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateProjectRequest_LabelsEntry>, I>
  >(object: I): CreateProjectRequest_LabelsEntry {
    const message = {
      ...baseCreateProjectRequest_LabelsEntry,
    } as CreateProjectRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateProjectRequest_LabelsEntry.$type,
  CreateProjectRequest_LabelsEntry
);

const baseCreateProjectMetadata: object = {
  $type: "yandex.cloud.datasphere.v2.CreateProjectMetadata",
  projectId: "",
};

export const CreateProjectMetadata = {
  $type: "yandex.cloud.datasphere.v2.CreateProjectMetadata" as const,

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
  $type: "yandex.cloud.datasphere.v2.UpdateProjectRequest",
  projectId: "",
  name: "",
  description: "",
};

export const UpdateProjectRequest = {
  $type: "yandex.cloud.datasphere.v2.UpdateProjectRequest" as const,

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
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateProjectRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.datasphere.v2.UpdateProjectRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.settings !== undefined) {
      Project_Settings.encode(
        message.settings,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.limits !== undefined) {
      Project_Limits.encode(message.limits, writer.uint32(58).fork()).ldelim();
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
    message.labels = {};
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
          const entry5 = UpdateProjectRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.settings = Project_Settings.decode(reader, reader.uint32());
          break;
        case 7:
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
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
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
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
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
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
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

const baseUpdateProjectRequest_LabelsEntry: object = {
  $type: "yandex.cloud.datasphere.v2.UpdateProjectRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateProjectRequest_LabelsEntry = {
  $type: "yandex.cloud.datasphere.v2.UpdateProjectRequest.LabelsEntry" as const,

  encode(
    message: UpdateProjectRequest_LabelsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateProjectRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateProjectRequest_LabelsEntry,
    } as UpdateProjectRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateProjectRequest_LabelsEntry {
    const message = {
      ...baseUpdateProjectRequest_LabelsEntry,
    } as UpdateProjectRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateProjectRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateProjectRequest_LabelsEntry>, I>
  >(object: I): UpdateProjectRequest_LabelsEntry {
    const message = {
      ...baseUpdateProjectRequest_LabelsEntry,
    } as UpdateProjectRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateProjectRequest_LabelsEntry.$type,
  UpdateProjectRequest_LabelsEntry
);

const baseUpdateProjectMetadata: object = {
  $type: "yandex.cloud.datasphere.v2.UpdateProjectMetadata",
  projectId: "",
};

export const UpdateProjectMetadata = {
  $type: "yandex.cloud.datasphere.v2.UpdateProjectMetadata" as const,

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
  $type: "yandex.cloud.datasphere.v2.DeleteProjectRequest",
  projectId: "",
};

export const DeleteProjectRequest = {
  $type: "yandex.cloud.datasphere.v2.DeleteProjectRequest" as const,

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
  $type: "yandex.cloud.datasphere.v2.DeleteProjectMetadata",
  projectId: "",
};

export const DeleteProjectMetadata = {
  $type: "yandex.cloud.datasphere.v2.DeleteProjectMetadata" as const,

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
  $type: "yandex.cloud.datasphere.v2.OpenProjectRequest",
  projectId: "",
};

export const OpenProjectRequest = {
  $type: "yandex.cloud.datasphere.v2.OpenProjectRequest" as const,

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
  $type: "yandex.cloud.datasphere.v2.OpenProjectMetadata",
  projectId: "",
  status: 0,
};

export const OpenProjectMetadata = {
  $type: "yandex.cloud.datasphere.v2.OpenProjectMetadata" as const,

  encode(
    message: OpenProjectMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
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
        case 2:
          message.status = reader.int32() as any;
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
    message.status =
      object.status !== undefined && object.status !== null
        ? openProjectMetadata_OpenProjectStatusFromJSON(object.status)
        : 0;
    return message;
  },

  toJSON(message: OpenProjectMetadata): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.status !== undefined &&
      (obj.status = openProjectMetadata_OpenProjectStatusToJSON(
        message.status
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OpenProjectMetadata>, I>>(
    object: I
  ): OpenProjectMetadata {
    const message = { ...baseOpenProjectMetadata } as OpenProjectMetadata;
    message.projectId = object.projectId ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

messageTypeRegistry.set(OpenProjectMetadata.$type, OpenProjectMetadata);

const baseOpenProjectResponse: object = {
  $type: "yandex.cloud.datasphere.v2.OpenProjectResponse",
  projectUrl: "",
  sessionToken: "",
};

export const OpenProjectResponse = {
  $type: "yandex.cloud.datasphere.v2.OpenProjectResponse" as const,

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
  $type: "yandex.cloud.datasphere.v2.GetProjectRequest",
  projectId: "",
};

export const GetProjectRequest = {
  $type: "yandex.cloud.datasphere.v2.GetProjectRequest" as const,

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
  $type: "yandex.cloud.datasphere.v2.ListProjectsRequest",
  communityId: "",
  pageSize: 0,
  pageToken: "",
  projectNamePattern: "",
  ownedById: "",
};

export const ListProjectsRequest = {
  $type: "yandex.cloud.datasphere.v2.ListProjectsRequest" as const,

  encode(
    message: ListProjectsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.projectNamePattern !== "") {
      writer.uint32(34).string(message.projectNamePattern);
    }
    if (message.ownedById !== "") {
      writer.uint32(42).string(message.ownedById);
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
          message.communityId = reader.string();
          break;
        case 2:
          message.pageSize = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.pageToken = reader.string();
          break;
        case 4:
          message.projectNamePattern = reader.string();
          break;
        case 5:
          message.ownedById = reader.string();
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
    message.communityId =
      object.communityId !== undefined && object.communityId !== null
        ? String(object.communityId)
        : "";
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    message.projectNamePattern =
      object.projectNamePattern !== undefined &&
      object.projectNamePattern !== null
        ? String(object.projectNamePattern)
        : "";
    message.ownedById =
      object.ownedById !== undefined && object.ownedById !== null
        ? String(object.ownedById)
        : "";
    return message;
  },

  toJSON(message: ListProjectsRequest): unknown {
    const obj: any = {};
    message.communityId !== undefined &&
      (obj.communityId = message.communityId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.projectNamePattern !== undefined &&
      (obj.projectNamePattern = message.projectNamePattern);
    message.ownedById !== undefined && (obj.ownedById = message.ownedById);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListProjectsRequest>, I>>(
    object: I
  ): ListProjectsRequest {
    const message = { ...baseListProjectsRequest } as ListProjectsRequest;
    message.communityId = object.communityId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.projectNamePattern = object.projectNamePattern ?? "";
    message.ownedById = object.ownedById ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListProjectsRequest.$type, ListProjectsRequest);

const baseListProjectsResponse: object = {
  $type: "yandex.cloud.datasphere.v2.ListProjectsResponse",
  nextPageToken: "",
};

export const ListProjectsResponse = {
  $type: "yandex.cloud.datasphere.v2.ListProjectsResponse" as const,

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
  $type: "yandex.cloud.datasphere.v2.GetUnitBalanceRequest",
  projectId: "",
};

export const GetUnitBalanceRequest = {
  $type: "yandex.cloud.datasphere.v2.GetUnitBalanceRequest" as const,

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
  $type: "yandex.cloud.datasphere.v2.GetUnitBalanceResponse",
};

export const GetUnitBalanceResponse = {
  $type: "yandex.cloud.datasphere.v2.GetUnitBalanceResponse" as const,

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
  $type: "yandex.cloud.datasphere.v2.SetUnitBalanceRequest",
  projectId: "",
};

export const SetUnitBalanceRequest = {
  $type: "yandex.cloud.datasphere.v2.SetUnitBalanceRequest" as const,

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

const baseSetUnitBalanceMetadata: object = {
  $type: "yandex.cloud.datasphere.v2.SetUnitBalanceMetadata",
  projectId: "",
};

export const SetUnitBalanceMetadata = {
  $type: "yandex.cloud.datasphere.v2.SetUnitBalanceMetadata" as const,

  encode(
    message: SetUnitBalanceMetadata,
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
  ): SetUnitBalanceMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetUnitBalanceMetadata } as SetUnitBalanceMetadata;
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

  fromJSON(object: any): SetUnitBalanceMetadata {
    const message = { ...baseSetUnitBalanceMetadata } as SetUnitBalanceMetadata;
    message.projectId =
      object.projectId !== undefined && object.projectId !== null
        ? String(object.projectId)
        : "";
    return message;
  },

  toJSON(message: SetUnitBalanceMetadata): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetUnitBalanceMetadata>, I>>(
    object: I
  ): SetUnitBalanceMetadata {
    const message = { ...baseSetUnitBalanceMetadata } as SetUnitBalanceMetadata;
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(SetUnitBalanceMetadata.$type, SetUnitBalanceMetadata);

const baseProjectExecutionRequest: object = {
  $type: "yandex.cloud.datasphere.v2.ProjectExecutionRequest",
  projectId: "",
  outputVariableNames: "",
};

export const ProjectExecutionRequest = {
  $type: "yandex.cloud.datasphere.v2.ProjectExecutionRequest" as const,

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
  $type: "yandex.cloud.datasphere.v2.ProjectExecutionMetadata",
  projectId: "",
};

export const ProjectExecutionMetadata = {
  $type: "yandex.cloud.datasphere.v2.ProjectExecutionMetadata" as const,

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
  $type: "yandex.cloud.datasphere.v2.ProjectExecutionResponse",
  checkpointId: "",
  executionStatus: 0,
};

export const ProjectExecutionResponse = {
  $type: "yandex.cloud.datasphere.v2.ProjectExecutionResponse" as const,

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
    if (message.executionStatus !== 0) {
      writer.uint32(24).int32(message.executionStatus);
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
        case 3:
          message.executionStatus = reader.int32() as any;
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
    message.executionStatus =
      object.executionStatus !== undefined && object.executionStatus !== null
        ? executionStatusFromJSON(object.executionStatus)
        : 0;
    return message;
  },

  toJSON(message: ProjectExecutionResponse): unknown {
    const obj: any = {};
    message.checkpointId !== undefined &&
      (obj.checkpointId = message.checkpointId);
    message.outputVariables !== undefined &&
      (obj.outputVariables = message.outputVariables);
    message.executionStatus !== undefined &&
      (obj.executionStatus = executionStatusToJSON(message.executionStatus));
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
    message.executionStatus = object.executionStatus ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  ProjectExecutionResponse.$type,
  ProjectExecutionResponse
);

const baseCellOutputsRequest: object = {
  $type: "yandex.cloud.datasphere.v2.CellOutputsRequest",
  projectId: "",
  cellId: "",
  checkpointId: "",
};

export const CellOutputsRequest = {
  $type: "yandex.cloud.datasphere.v2.CellOutputsRequest" as const,

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
  $type: "yandex.cloud.datasphere.v2.CellOutputsResponse",
  outputs: "",
};

export const CellOutputsResponse = {
  $type: "yandex.cloud.datasphere.v2.CellOutputsResponse" as const,

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
  $type: "yandex.cloud.datasphere.v2.GetStateVariablesRequest",
  projectId: "",
  notebookId: "",
  variableNames: "",
  checkpointId: "",
};

export const GetStateVariablesRequest = {
  $type: "yandex.cloud.datasphere.v2.GetStateVariablesRequest" as const,

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
  $type: "yandex.cloud.datasphere.v2.GetStateVariablesResponse",
};

export const GetStateVariablesResponse = {
  $type: "yandex.cloud.datasphere.v2.GetStateVariablesResponse" as const,

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

const baseSetProjectAccessBindingsMetadata: object = {
  $type: "yandex.cloud.datasphere.v2.SetProjectAccessBindingsMetadata",
  projectId: "",
};

export const SetProjectAccessBindingsMetadata = {
  $type: "yandex.cloud.datasphere.v2.SetProjectAccessBindingsMetadata" as const,

  encode(
    message: SetProjectAccessBindingsMetadata,
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
  ): SetProjectAccessBindingsMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetProjectAccessBindingsMetadata,
    } as SetProjectAccessBindingsMetadata;
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

  fromJSON(object: any): SetProjectAccessBindingsMetadata {
    const message = {
      ...baseSetProjectAccessBindingsMetadata,
    } as SetProjectAccessBindingsMetadata;
    message.projectId =
      object.projectId !== undefined && object.projectId !== null
        ? String(object.projectId)
        : "";
    return message;
  },

  toJSON(message: SetProjectAccessBindingsMetadata): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SetProjectAccessBindingsMetadata>, I>
  >(object: I): SetProjectAccessBindingsMetadata {
    const message = {
      ...baseSetProjectAccessBindingsMetadata,
    } as SetProjectAccessBindingsMetadata;
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  SetProjectAccessBindingsMetadata.$type,
  SetProjectAccessBindingsMetadata
);

const baseUpdateProjectAccessBindingsMetadata: object = {
  $type: "yandex.cloud.datasphere.v2.UpdateProjectAccessBindingsMetadata",
  projectId: "",
};

export const UpdateProjectAccessBindingsMetadata = {
  $type:
    "yandex.cloud.datasphere.v2.UpdateProjectAccessBindingsMetadata" as const,

  encode(
    message: UpdateProjectAccessBindingsMetadata,
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
  ): UpdateProjectAccessBindingsMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateProjectAccessBindingsMetadata,
    } as UpdateProjectAccessBindingsMetadata;
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

  fromJSON(object: any): UpdateProjectAccessBindingsMetadata {
    const message = {
      ...baseUpdateProjectAccessBindingsMetadata,
    } as UpdateProjectAccessBindingsMetadata;
    message.projectId =
      object.projectId !== undefined && object.projectId !== null
        ? String(object.projectId)
        : "";
    return message;
  },

  toJSON(message: UpdateProjectAccessBindingsMetadata): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateProjectAccessBindingsMetadata>, I>
  >(object: I): UpdateProjectAccessBindingsMetadata {
    const message = {
      ...baseUpdateProjectAccessBindingsMetadata,
    } as UpdateProjectAccessBindingsMetadata;
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateProjectAccessBindingsMetadata.$type,
  UpdateProjectAccessBindingsMetadata
);

/** A set of methods for managing Project resources. */
export const ProjectServiceService = {
  /** Creates a project in the specified folder. */
  create: {
    path: "/yandex.cloud.datasphere.v2.ProjectService/Create",
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
    path: "/yandex.cloud.datasphere.v2.ProjectService/Update",
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
    path: "/yandex.cloud.datasphere.v2.ProjectService/Delete",
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
    path: "/yandex.cloud.datasphere.v2.ProjectService/Open",
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
    path: "/yandex.cloud.datasphere.v2.ProjectService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetProjectRequest) =>
      Buffer.from(GetProjectRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetProjectRequest.decode(value),
    responseSerialize: (value: Project) =>
      Buffer.from(Project.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Project.decode(value),
  },
  /** Lists projects for the specified community. */
  list: {
    path: "/yandex.cloud.datasphere.v2.ProjectService/List",
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
    path: "/yandex.cloud.datasphere.v2.ProjectService/GetUnitBalance",
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
    path: "/yandex.cloud.datasphere.v2.ProjectService/SetUnitBalance",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetUnitBalanceRequest) =>
      Buffer.from(SetUnitBalanceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetUnitBalanceRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Executes code in the specified cell or notebook. */
  execute: {
    path: "/yandex.cloud.datasphere.v2.ProjectService/Execute",
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
    path: "/yandex.cloud.datasphere.v2.ProjectService/GetCellOutputs",
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
    path: "/yandex.cloud.datasphere.v2.ProjectService/GetStateVariables",
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
  /** Lists access bindings for the project. */
  listAccessBindings: {
    path: "/yandex.cloud.datasphere.v2.ProjectService/ListAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessBindingsRequest) =>
      Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListAccessBindingsRequest.decode(value),
    responseSerialize: (value: ListAccessBindingsResponse) =>
      Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListAccessBindingsResponse.decode(value),
  },
  /** Sets access bindings for the project. */
  setAccessBindings: {
    path: "/yandex.cloud.datasphere.v2.ProjectService/SetAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetAccessBindingsRequest) =>
      Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      SetAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates access bindings for the project. */
  updateAccessBindings: {
    path: "/yandex.cloud.datasphere.v2.ProjectService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
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
  /** Lists projects for the specified community. */
  list: handleUnaryCall<ListProjectsRequest, ListProjectsResponse>;
  /** Returns the unit balance of the specified project. */
  getUnitBalance: handleUnaryCall<
    GetUnitBalanceRequest,
    GetUnitBalanceResponse
  >;
  /** Sets the unit balance of the specified project. */
  setUnitBalance: handleUnaryCall<SetUnitBalanceRequest, Operation>;
  /** Executes code in the specified cell or notebook. */
  execute: handleUnaryCall<ProjectExecutionRequest, Operation>;
  /** Returns outputs of the specified cell. */
  getCellOutputs: handleUnaryCall<CellOutputsRequest, CellOutputsResponse>;
  /** Returns state variables of the specified notebook. */
  getStateVariables: handleUnaryCall<
    GetStateVariablesRequest,
    GetStateVariablesResponse
  >;
  /** Lists access bindings for the project. */
  listAccessBindings: handleUnaryCall<
    ListAccessBindingsRequest,
    ListAccessBindingsResponse
  >;
  /** Sets access bindings for the project. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the project. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
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
  /** Lists projects for the specified community. */
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
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  setUnitBalance(
    request: SetUnitBalanceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  setUnitBalance(
    request: SetUnitBalanceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
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
  /** Lists access bindings for the project. */
  listAccessBindings(
    request: ListAccessBindingsRequest,
    callback: (
      error: ServiceError | null,
      response: ListAccessBindingsResponse
    ) => void
  ): ClientUnaryCall;
  listAccessBindings(
    request: ListAccessBindingsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListAccessBindingsResponse
    ) => void
  ): ClientUnaryCall;
  listAccessBindings(
    request: ListAccessBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListAccessBindingsResponse
    ) => void
  ): ClientUnaryCall;
  /** Sets access bindings for the project. */
  setAccessBindings(
    request: SetAccessBindingsRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  setAccessBindings(
    request: SetAccessBindingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  setAccessBindings(
    request: SetAccessBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates access bindings for the project. */
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const ProjectServiceClient = makeGenericClientConstructor(
  ProjectServiceService,
  "yandex.cloud.datasphere.v2.ProjectService"
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
