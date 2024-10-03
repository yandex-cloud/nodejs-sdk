/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  LogLevel_Level,
  logLevel_LevelFromJSON,
  logLevel_LevelToJSON,
} from "../../../../../yandex/cloud/logging/v1/log_entry";
import { Timestamp } from "../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.serverless.workflows.v1";

export interface Workflow {
  $type: "yandex.cloud.serverless.workflows.v1.Workflow";
  /** ID of the Workflow. Generated at creation time. */
  id: string;
  /** ID of the folder that the Workflow belongs to. */
  folderId: string;
  /** Specification of the Workflow */
  specification?: WorkflowSpecification;
  /** Creation timestamp for the Workflow. */
  createdAt?: Date;
  /** Name of the Workflow. The name is unique within the folder. */
  name: string;
  /** Description of the Workflow. */
  description: string;
  /** Workflow labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Status of the Workflow. */
  status: Workflow_Status;
  /** Options for logging from the Workflow. */
  logOptions?: LogOptions;
  /** ID of the VPC network Workflow will be executed in, in order to access private resources. */
  networkId: string;
  /** ID of the Service Account which will be used for resource access in Workflow execution. */
  serviceAccountId: string;
}

export enum Workflow_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - Workflow is being created. */
  CREATING = 1,
  /** ACTIVE - Workflow is ready for use. */
  ACTIVE = 2,
  /** UPDATING - Workflow is being updated. */
  UPDATING = 3,
  /** DELETING - Workflow is being deleted. */
  DELETING = 4,
  /** ERROR - Workflow failed. The only allowed action is delete. */
  ERROR = 5,
  UNRECOGNIZED = -1,
}

export function workflow_StatusFromJSON(object: any): Workflow_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Workflow_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return Workflow_Status.CREATING;
    case 2:
    case "ACTIVE":
      return Workflow_Status.ACTIVE;
    case 3:
    case "UPDATING":
      return Workflow_Status.UPDATING;
    case 4:
    case "DELETING":
      return Workflow_Status.DELETING;
    case 5:
    case "ERROR":
      return Workflow_Status.ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Workflow_Status.UNRECOGNIZED;
  }
}

export function workflow_StatusToJSON(object: Workflow_Status): string {
  switch (object) {
    case Workflow_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Workflow_Status.CREATING:
      return "CREATING";
    case Workflow_Status.ACTIVE:
      return "ACTIVE";
    case Workflow_Status.UPDATING:
      return "UPDATING";
    case Workflow_Status.DELETING:
      return "DELETING";
    case Workflow_Status.ERROR:
      return "ERROR";
    default:
      return "UNKNOWN";
  }
}

export interface Workflow_LabelsEntry {
  $type: "yandex.cloud.serverless.workflows.v1.Workflow.LabelsEntry";
  key: string;
  value: string;
}

export interface WorkflowPreview {
  $type: "yandex.cloud.serverless.workflows.v1.WorkflowPreview";
  /** ID of the Workflow. Generated at creation time. */
  id: string;
  /** ID of the folder that the Workflow belongs to. */
  folderId: string;
  /** Creation timestamp for the Workflow. */
  createdAt?: Date;
  /** Name of the Workflow. The name is unique within the folder. */
  name: string;
  /** Description of the Workflow. */
  description: string;
  /** Workflow labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Status of the Workflow. */
  status: Workflow_Status;
  /** Options for logging from the Workflow. */
  logOptions?: LogOptions;
  /** ID of the VPC network Workflow will be executed in, in order to access private resources. */
  networkId: string;
  /** ID of the Service Account which will be used for resources access in Workflow execution. */
  serviceAccountId: string;
}

export interface WorkflowPreview_LabelsEntry {
  $type: "yandex.cloud.serverless.workflows.v1.WorkflowPreview.LabelsEntry";
  key: string;
  value: string;
}

export interface WorkflowSpecification {
  $type: "yandex.cloud.serverless.workflows.v1.WorkflowSpecification";
  /** Workflow specification in YAML format. */
  specYaml: string | undefined;
}

export interface LogOptions {
  $type: "yandex.cloud.serverless.workflows.v1.LogOptions";
  /** Is logging from Workflow disabled. */
  disabled: boolean;
  /** ID of the logging group which should be used for Workflows logs. */
  logGroupId: string | undefined;
  /** ID of the folder which default logging group should be used for Workflows. */
  folderId: string | undefined;
  /**
   * Minimum logs level.
   *
   * See [LogLevel.Level] for details.
   */
  minLevel: LogLevel_Level;
}

const baseWorkflow: object = {
  $type: "yandex.cloud.serverless.workflows.v1.Workflow",
  id: "",
  folderId: "",
  name: "",
  description: "",
  status: 0,
  networkId: "",
  serviceAccountId: "",
};

export const Workflow = {
  $type: "yandex.cloud.serverless.workflows.v1.Workflow" as const,

  encode(
    message: Workflow,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.specification !== undefined) {
      WorkflowSpecification.encode(
        message.specification,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Workflow_LabelsEntry.encode(
        {
          $type: "yandex.cloud.serverless.workflows.v1.Workflow.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(58).fork()
      ).ldelim();
    });
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.logOptions !== undefined) {
      LogOptions.encode(message.logOptions, writer.uint32(74).fork()).ldelim();
    }
    if (message.networkId !== "") {
      writer.uint32(82).string(message.networkId);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(90).string(message.serviceAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Workflow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWorkflow } as Workflow;
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
          message.specification = WorkflowSpecification.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          const entry7 = Workflow_LabelsEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.labels[entry7.key] = entry7.value;
          }
          break;
        case 8:
          message.status = reader.int32() as any;
          break;
        case 9:
          message.logOptions = LogOptions.decode(reader, reader.uint32());
          break;
        case 10:
          message.networkId = reader.string();
          break;
        case 11:
          message.serviceAccountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Workflow {
    const message = { ...baseWorkflow } as Workflow;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.specification =
      object.specification !== undefined && object.specification !== null
        ? WorkflowSpecification.fromJSON(object.specification)
        : undefined;
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
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
    message.status =
      object.status !== undefined && object.status !== null
        ? workflow_StatusFromJSON(object.status)
        : 0;
    message.logOptions =
      object.logOptions !== undefined && object.logOptions !== null
        ? LogOptions.fromJSON(object.logOptions)
        : undefined;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    return message;
  },

  toJSON(message: Workflow): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.specification !== undefined &&
      (obj.specification = message.specification
        ? WorkflowSpecification.toJSON(message.specification)
        : undefined);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.status !== undefined &&
      (obj.status = workflow_StatusToJSON(message.status));
    message.logOptions !== undefined &&
      (obj.logOptions = message.logOptions
        ? LogOptions.toJSON(message.logOptions)
        : undefined);
    message.networkId !== undefined && (obj.networkId = message.networkId);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Workflow>, I>>(object: I): Workflow {
    const message = { ...baseWorkflow } as Workflow;
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.specification =
      object.specification !== undefined && object.specification !== null
        ? WorkflowSpecification.fromPartial(object.specification)
        : undefined;
    message.createdAt = object.createdAt ?? undefined;
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
    message.status = object.status ?? 0;
    message.logOptions =
      object.logOptions !== undefined && object.logOptions !== null
        ? LogOptions.fromPartial(object.logOptions)
        : undefined;
    message.networkId = object.networkId ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Workflow.$type, Workflow);

const baseWorkflow_LabelsEntry: object = {
  $type: "yandex.cloud.serverless.workflows.v1.Workflow.LabelsEntry",
  key: "",
  value: "",
};

export const Workflow_LabelsEntry = {
  $type: "yandex.cloud.serverless.workflows.v1.Workflow.LabelsEntry" as const,

  encode(
    message: Workflow_LabelsEntry,
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
  ): Workflow_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWorkflow_LabelsEntry } as Workflow_LabelsEntry;
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

  fromJSON(object: any): Workflow_LabelsEntry {
    const message = { ...baseWorkflow_LabelsEntry } as Workflow_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Workflow_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Workflow_LabelsEntry>, I>>(
    object: I
  ): Workflow_LabelsEntry {
    const message = { ...baseWorkflow_LabelsEntry } as Workflow_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Workflow_LabelsEntry.$type, Workflow_LabelsEntry);

const baseWorkflowPreview: object = {
  $type: "yandex.cloud.serverless.workflows.v1.WorkflowPreview",
  id: "",
  folderId: "",
  name: "",
  description: "",
  status: 0,
  networkId: "",
  serviceAccountId: "",
};

export const WorkflowPreview = {
  $type: "yandex.cloud.serverless.workflows.v1.WorkflowPreview" as const,

  encode(
    message: WorkflowPreview,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      WorkflowPreview_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.serverless.workflows.v1.WorkflowPreview.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.logOptions !== undefined) {
      LogOptions.encode(message.logOptions, writer.uint32(66).fork()).ldelim();
    }
    if (message.networkId !== "") {
      writer.uint32(74).string(message.networkId);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(82).string(message.serviceAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WorkflowPreview {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWorkflowPreview } as WorkflowPreview;
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
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          const entry6 = WorkflowPreview_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.status = reader.int32() as any;
          break;
        case 8:
          message.logOptions = LogOptions.decode(reader, reader.uint32());
          break;
        case 9:
          message.networkId = reader.string();
          break;
        case 10:
          message.serviceAccountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WorkflowPreview {
    const message = { ...baseWorkflowPreview } as WorkflowPreview;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
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
    message.status =
      object.status !== undefined && object.status !== null
        ? workflow_StatusFromJSON(object.status)
        : 0;
    message.logOptions =
      object.logOptions !== undefined && object.logOptions !== null
        ? LogOptions.fromJSON(object.logOptions)
        : undefined;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    return message;
  },

  toJSON(message: WorkflowPreview): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.status !== undefined &&
      (obj.status = workflow_StatusToJSON(message.status));
    message.logOptions !== undefined &&
      (obj.logOptions = message.logOptions
        ? LogOptions.toJSON(message.logOptions)
        : undefined);
    message.networkId !== undefined && (obj.networkId = message.networkId);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WorkflowPreview>, I>>(
    object: I
  ): WorkflowPreview {
    const message = { ...baseWorkflowPreview } as WorkflowPreview;
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.createdAt = object.createdAt ?? undefined;
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
    message.status = object.status ?? 0;
    message.logOptions =
      object.logOptions !== undefined && object.logOptions !== null
        ? LogOptions.fromPartial(object.logOptions)
        : undefined;
    message.networkId = object.networkId ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(WorkflowPreview.$type, WorkflowPreview);

const baseWorkflowPreview_LabelsEntry: object = {
  $type: "yandex.cloud.serverless.workflows.v1.WorkflowPreview.LabelsEntry",
  key: "",
  value: "",
};

export const WorkflowPreview_LabelsEntry = {
  $type:
    "yandex.cloud.serverless.workflows.v1.WorkflowPreview.LabelsEntry" as const,

  encode(
    message: WorkflowPreview_LabelsEntry,
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
  ): WorkflowPreview_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseWorkflowPreview_LabelsEntry,
    } as WorkflowPreview_LabelsEntry;
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

  fromJSON(object: any): WorkflowPreview_LabelsEntry {
    const message = {
      ...baseWorkflowPreview_LabelsEntry,
    } as WorkflowPreview_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: WorkflowPreview_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WorkflowPreview_LabelsEntry>, I>>(
    object: I
  ): WorkflowPreview_LabelsEntry {
    const message = {
      ...baseWorkflowPreview_LabelsEntry,
    } as WorkflowPreview_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  WorkflowPreview_LabelsEntry.$type,
  WorkflowPreview_LabelsEntry
);

const baseWorkflowSpecification: object = {
  $type: "yandex.cloud.serverless.workflows.v1.WorkflowSpecification",
};

export const WorkflowSpecification = {
  $type: "yandex.cloud.serverless.workflows.v1.WorkflowSpecification" as const,

  encode(
    message: WorkflowSpecification,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.specYaml !== undefined) {
      writer.uint32(10).string(message.specYaml);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WorkflowSpecification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWorkflowSpecification } as WorkflowSpecification;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.specYaml = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WorkflowSpecification {
    const message = { ...baseWorkflowSpecification } as WorkflowSpecification;
    message.specYaml =
      object.specYaml !== undefined && object.specYaml !== null
        ? String(object.specYaml)
        : undefined;
    return message;
  },

  toJSON(message: WorkflowSpecification): unknown {
    const obj: any = {};
    message.specYaml !== undefined && (obj.specYaml = message.specYaml);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WorkflowSpecification>, I>>(
    object: I
  ): WorkflowSpecification {
    const message = { ...baseWorkflowSpecification } as WorkflowSpecification;
    message.specYaml = object.specYaml ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(WorkflowSpecification.$type, WorkflowSpecification);

const baseLogOptions: object = {
  $type: "yandex.cloud.serverless.workflows.v1.LogOptions",
  disabled: false,
  minLevel: 0,
};

export const LogOptions = {
  $type: "yandex.cloud.serverless.workflows.v1.LogOptions" as const,

  encode(
    message: LogOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.disabled === true) {
      writer.uint32(8).bool(message.disabled);
    }
    if (message.logGroupId !== undefined) {
      writer.uint32(18).string(message.logGroupId);
    }
    if (message.folderId !== undefined) {
      writer.uint32(26).string(message.folderId);
    }
    if (message.minLevel !== 0) {
      writer.uint32(32).int32(message.minLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLogOptions } as LogOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disabled = reader.bool();
          break;
        case 2:
          message.logGroupId = reader.string();
          break;
        case 3:
          message.folderId = reader.string();
          break;
        case 4:
          message.minLevel = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LogOptions {
    const message = { ...baseLogOptions } as LogOptions;
    message.disabled =
      object.disabled !== undefined && object.disabled !== null
        ? Boolean(object.disabled)
        : false;
    message.logGroupId =
      object.logGroupId !== undefined && object.logGroupId !== null
        ? String(object.logGroupId)
        : undefined;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : undefined;
    message.minLevel =
      object.minLevel !== undefined && object.minLevel !== null
        ? logLevel_LevelFromJSON(object.minLevel)
        : 0;
    return message;
  },

  toJSON(message: LogOptions): unknown {
    const obj: any = {};
    message.disabled !== undefined && (obj.disabled = message.disabled);
    message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.minLevel !== undefined &&
      (obj.minLevel = logLevel_LevelToJSON(message.minLevel));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogOptions>, I>>(
    object: I
  ): LogOptions {
    const message = { ...baseLogOptions } as LogOptions;
    message.disabled = object.disabled ?? false;
    message.logGroupId = object.logGroupId ?? undefined;
    message.folderId = object.folderId ?? undefined;
    message.minLevel = object.minLevel ?? 0;
    return message;
  },
};

messageTypeRegistry.set(LogOptions.$type, LogOptions);

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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
