/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Int64Value } from "../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.datasphere.v2";

/** A Project resource. */
export interface Project {
  $type: "yandex.cloud.datasphere.v2.Project";
  /** ID of the project. */
  id: string;
  createdAt?: Date;
  /** Name of the project. 1-63 characters long. */
  name: string;
  /** Description of the project. 0-256 characters long. */
  description: string;
  labels: { [key: string]: string };
  createdById: string;
  /** Settings of the project. */
  settings?: Project_Settings;
  /** Limits of the project. */
  limits?: Project_Limits;
  /** ID of the community that the project belongs to. */
  communityId: string;
}

export interface Project_Settings {
  $type: "yandex.cloud.datasphere.v2.Project.Settings";
  /** ID of the service account, on whose behalf all operations with clusters will be performed. */
  serviceAccountId: string;
  /**
   * ID of the subnet where the DataProc cluster resides.
   * Currently only subnets created in the availability zone ru-central1-a are supported.
   */
  subnetId: string;
  /** ID of the DataProc cluster. */
  dataProcClusterId: string;
  /** Commit mode that is assigned to the project. */
  commitMode: Project_Settings_CommitMode;
  /** Network interfaces security groups. */
  securityGroupIds: string[];
  /** Is early access preview enabled for the project. */
  earlyAccess: boolean;
  /** Project IDE. */
  ide: Project_Settings_Ide;
  /** Default project folder ID. */
  defaultFolderId: string;
  /** Timeout to automatically stop stale executions. */
  staleExecTimeoutMode: Project_Settings_StaleExecutionTimeoutMode;
}

export enum Project_Settings_CommitMode {
  COMMIT_MODE_UNSPECIFIED = 0,
  /** STANDARD - Commit happens after the execution of a cell or group of cells or after completion with an error. */
  STANDARD = 1,
  /**
   * AUTO - Commit happens periodically.
   * Also, automatic saving of state occurs when switching to another type of computing resource.
   */
  AUTO = 2,
  UNRECOGNIZED = -1,
}

export function project_Settings_CommitModeFromJSON(
  object: any
): Project_Settings_CommitMode {
  switch (object) {
    case 0:
    case "COMMIT_MODE_UNSPECIFIED":
      return Project_Settings_CommitMode.COMMIT_MODE_UNSPECIFIED;
    case 1:
    case "STANDARD":
      return Project_Settings_CommitMode.STANDARD;
    case 2:
    case "AUTO":
      return Project_Settings_CommitMode.AUTO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Project_Settings_CommitMode.UNRECOGNIZED;
  }
}

export function project_Settings_CommitModeToJSON(
  object: Project_Settings_CommitMode
): string {
  switch (object) {
    case Project_Settings_CommitMode.COMMIT_MODE_UNSPECIFIED:
      return "COMMIT_MODE_UNSPECIFIED";
    case Project_Settings_CommitMode.STANDARD:
      return "STANDARD";
    case Project_Settings_CommitMode.AUTO:
      return "AUTO";
    default:
      return "UNKNOWN";
  }
}

export enum Project_Settings_Ide {
  IDE_UNSPECIFIED = 0,
  /** JUPYTER_LAB - Project running on JupyterLab IDE. */
  JUPYTER_LAB = 1,
  UNRECOGNIZED = -1,
}

export function project_Settings_IdeFromJSON(
  object: any
): Project_Settings_Ide {
  switch (object) {
    case 0:
    case "IDE_UNSPECIFIED":
      return Project_Settings_Ide.IDE_UNSPECIFIED;
    case 1:
    case "JUPYTER_LAB":
      return Project_Settings_Ide.JUPYTER_LAB;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Project_Settings_Ide.UNRECOGNIZED;
  }
}

export function project_Settings_IdeToJSON(
  object: Project_Settings_Ide
): string {
  switch (object) {
    case Project_Settings_Ide.IDE_UNSPECIFIED:
      return "IDE_UNSPECIFIED";
    case Project_Settings_Ide.JUPYTER_LAB:
      return "JUPYTER_LAB";
    default:
      return "UNKNOWN";
  }
}

export enum Project_Settings_StaleExecutionTimeoutMode {
  STALE_EXECUTION_TIMEOUT_MODE_UNSPECIFIED = 0,
  /** ONE_HOUR - Setting to automatically stop stale execution after one hour with low consumption. */
  ONE_HOUR = 1,
  /** THREE_HOURS - Setting to automatically stop stale execution after three hours with low consumption. */
  THREE_HOURS = 2,
  /** NO_TIMEOUT - Setting to never automatically stop stale executions. */
  NO_TIMEOUT = 3,
  UNRECOGNIZED = -1,
}

export function project_Settings_StaleExecutionTimeoutModeFromJSON(
  object: any
): Project_Settings_StaleExecutionTimeoutMode {
  switch (object) {
    case 0:
    case "STALE_EXECUTION_TIMEOUT_MODE_UNSPECIFIED":
      return Project_Settings_StaleExecutionTimeoutMode.STALE_EXECUTION_TIMEOUT_MODE_UNSPECIFIED;
    case 1:
    case "ONE_HOUR":
      return Project_Settings_StaleExecutionTimeoutMode.ONE_HOUR;
    case 2:
    case "THREE_HOURS":
      return Project_Settings_StaleExecutionTimeoutMode.THREE_HOURS;
    case 3:
    case "NO_TIMEOUT":
      return Project_Settings_StaleExecutionTimeoutMode.NO_TIMEOUT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Project_Settings_StaleExecutionTimeoutMode.UNRECOGNIZED;
  }
}

export function project_Settings_StaleExecutionTimeoutModeToJSON(
  object: Project_Settings_StaleExecutionTimeoutMode
): string {
  switch (object) {
    case Project_Settings_StaleExecutionTimeoutMode.STALE_EXECUTION_TIMEOUT_MODE_UNSPECIFIED:
      return "STALE_EXECUTION_TIMEOUT_MODE_UNSPECIFIED";
    case Project_Settings_StaleExecutionTimeoutMode.ONE_HOUR:
      return "ONE_HOUR";
    case Project_Settings_StaleExecutionTimeoutMode.THREE_HOURS:
      return "THREE_HOURS";
    case Project_Settings_StaleExecutionTimeoutMode.NO_TIMEOUT:
      return "NO_TIMEOUT";
    default:
      return "UNKNOWN";
  }
}

export interface Project_Limits {
  $type: "yandex.cloud.datasphere.v2.Project.Limits";
  /** The number of units that can be spent per hour. */
  maxUnitsPerHour?: number;
  /** The number of units that can be spent on the one execution. */
  maxUnitsPerExecution?: number;
}

export interface Project_LabelsEntry {
  $type: "yandex.cloud.datasphere.v2.Project.LabelsEntry";
  key: string;
  value: string;
}

const baseProject: object = {
  $type: "yandex.cloud.datasphere.v2.Project",
  id: "",
  name: "",
  description: "",
  createdById: "",
  communityId: "",
};

export const Project = {
  $type: "yandex.cloud.datasphere.v2.Project" as const,

  encode(
    message: Project,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Project_LabelsEntry.encode(
        {
          $type: "yandex.cloud.datasphere.v2.Project.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.createdById !== "") {
      writer.uint32(50).string(message.createdById);
    }
    if (message.settings !== undefined) {
      Project_Settings.encode(
        message.settings,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.limits !== undefined) {
      Project_Limits.encode(message.limits, writer.uint32(66).fork()).ldelim();
    }
    if (message.communityId !== "") {
      writer.uint32(90).string(message.communityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Project {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProject } as Project;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          const entry5 = Project_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.createdById = reader.string();
          break;
        case 7:
          message.settings = Project_Settings.decode(reader, reader.uint32());
          break;
        case 8:
          message.limits = Project_Limits.decode(reader, reader.uint32());
          break;
        case 11:
          message.communityId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Project {
    const message = { ...baseProject } as Project;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
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
    message.createdById =
      object.createdById !== undefined && object.createdById !== null
        ? String(object.createdById)
        : "";
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? Project_Settings.fromJSON(object.settings)
        : undefined;
    message.limits =
      object.limits !== undefined && object.limits !== null
        ? Project_Limits.fromJSON(object.limits)
        : undefined;
    message.communityId =
      object.communityId !== undefined && object.communityId !== null
        ? String(object.communityId)
        : "";
    return message;
  },

  toJSON(message: Project): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
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
    message.createdById !== undefined &&
      (obj.createdById = message.createdById);
    message.settings !== undefined &&
      (obj.settings = message.settings
        ? Project_Settings.toJSON(message.settings)
        : undefined);
    message.limits !== undefined &&
      (obj.limits = message.limits
        ? Project_Limits.toJSON(message.limits)
        : undefined);
    message.communityId !== undefined &&
      (obj.communityId = message.communityId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Project>, I>>(object: I): Project {
    const message = { ...baseProject } as Project;
    message.id = object.id ?? "";
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
    message.createdById = object.createdById ?? "";
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? Project_Settings.fromPartial(object.settings)
        : undefined;
    message.limits =
      object.limits !== undefined && object.limits !== null
        ? Project_Limits.fromPartial(object.limits)
        : undefined;
    message.communityId = object.communityId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Project.$type, Project);

const baseProject_Settings: object = {
  $type: "yandex.cloud.datasphere.v2.Project.Settings",
  serviceAccountId: "",
  subnetId: "",
  dataProcClusterId: "",
  commitMode: 0,
  securityGroupIds: "",
  earlyAccess: false,
  ide: 0,
  defaultFolderId: "",
  staleExecTimeoutMode: 0,
};

export const Project_Settings = {
  $type: "yandex.cloud.datasphere.v2.Project.Settings" as const,

  encode(
    message: Project_Settings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.serviceAccountId !== "") {
      writer.uint32(10).string(message.serviceAccountId);
    }
    if (message.subnetId !== "") {
      writer.uint32(18).string(message.subnetId);
    }
    if (message.dataProcClusterId !== "") {
      writer.uint32(26).string(message.dataProcClusterId);
    }
    if (message.commitMode !== 0) {
      writer.uint32(32).int32(message.commitMode);
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(42).string(v!);
    }
    if (message.earlyAccess === true) {
      writer.uint32(48).bool(message.earlyAccess);
    }
    if (message.ide !== 0) {
      writer.uint32(56).int32(message.ide);
    }
    if (message.defaultFolderId !== "") {
      writer.uint32(66).string(message.defaultFolderId);
    }
    if (message.staleExecTimeoutMode !== 0) {
      writer.uint32(72).int32(message.staleExecTimeoutMode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Project_Settings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProject_Settings } as Project_Settings;
    message.securityGroupIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceAccountId = reader.string();
          break;
        case 2:
          message.subnetId = reader.string();
          break;
        case 3:
          message.dataProcClusterId = reader.string();
          break;
        case 4:
          message.commitMode = reader.int32() as any;
          break;
        case 5:
          message.securityGroupIds.push(reader.string());
          break;
        case 6:
          message.earlyAccess = reader.bool();
          break;
        case 7:
          message.ide = reader.int32() as any;
          break;
        case 8:
          message.defaultFolderId = reader.string();
          break;
        case 9:
          message.staleExecTimeoutMode = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Project_Settings {
    const message = { ...baseProject_Settings } as Project_Settings;
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.dataProcClusterId =
      object.dataProcClusterId !== undefined &&
      object.dataProcClusterId !== null
        ? String(object.dataProcClusterId)
        : "";
    message.commitMode =
      object.commitMode !== undefined && object.commitMode !== null
        ? project_Settings_CommitModeFromJSON(object.commitMode)
        : 0;
    message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) =>
      String(e)
    );
    message.earlyAccess =
      object.earlyAccess !== undefined && object.earlyAccess !== null
        ? Boolean(object.earlyAccess)
        : false;
    message.ide =
      object.ide !== undefined && object.ide !== null
        ? project_Settings_IdeFromJSON(object.ide)
        : 0;
    message.defaultFolderId =
      object.defaultFolderId !== undefined && object.defaultFolderId !== null
        ? String(object.defaultFolderId)
        : "";
    message.staleExecTimeoutMode =
      object.staleExecTimeoutMode !== undefined &&
      object.staleExecTimeoutMode !== null
        ? project_Settings_StaleExecutionTimeoutModeFromJSON(
            object.staleExecTimeoutMode
          )
        : 0;
    return message;
  },

  toJSON(message: Project_Settings): unknown {
    const obj: any = {};
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    message.dataProcClusterId !== undefined &&
      (obj.dataProcClusterId = message.dataProcClusterId);
    message.commitMode !== undefined &&
      (obj.commitMode = project_Settings_CommitModeToJSON(message.commitMode));
    if (message.securityGroupIds) {
      obj.securityGroupIds = message.securityGroupIds.map((e) => e);
    } else {
      obj.securityGroupIds = [];
    }
    message.earlyAccess !== undefined &&
      (obj.earlyAccess = message.earlyAccess);
    message.ide !== undefined &&
      (obj.ide = project_Settings_IdeToJSON(message.ide));
    message.defaultFolderId !== undefined &&
      (obj.defaultFolderId = message.defaultFolderId);
    message.staleExecTimeoutMode !== undefined &&
      (obj.staleExecTimeoutMode =
        project_Settings_StaleExecutionTimeoutModeToJSON(
          message.staleExecTimeoutMode
        ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Project_Settings>, I>>(
    object: I
  ): Project_Settings {
    const message = { ...baseProject_Settings } as Project_Settings;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.subnetId = object.subnetId ?? "";
    message.dataProcClusterId = object.dataProcClusterId ?? "";
    message.commitMode = object.commitMode ?? 0;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.earlyAccess = object.earlyAccess ?? false;
    message.ide = object.ide ?? 0;
    message.defaultFolderId = object.defaultFolderId ?? "";
    message.staleExecTimeoutMode = object.staleExecTimeoutMode ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Project_Settings.$type, Project_Settings);

const baseProject_Limits: object = {
  $type: "yandex.cloud.datasphere.v2.Project.Limits",
};

export const Project_Limits = {
  $type: "yandex.cloud.datasphere.v2.Project.Limits" as const,

  encode(
    message: Project_Limits,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxUnitsPerHour !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxUnitsPerHour!,
        },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.maxUnitsPerExecution !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxUnitsPerExecution!,
        },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Project_Limits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProject_Limits } as Project_Limits;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxUnitsPerHour = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 2:
          message.maxUnitsPerExecution = Int64Value.decode(
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

  fromJSON(object: any): Project_Limits {
    const message = { ...baseProject_Limits } as Project_Limits;
    message.maxUnitsPerHour =
      object.maxUnitsPerHour !== undefined && object.maxUnitsPerHour !== null
        ? Number(object.maxUnitsPerHour)
        : undefined;
    message.maxUnitsPerExecution =
      object.maxUnitsPerExecution !== undefined &&
      object.maxUnitsPerExecution !== null
        ? Number(object.maxUnitsPerExecution)
        : undefined;
    return message;
  },

  toJSON(message: Project_Limits): unknown {
    const obj: any = {};
    message.maxUnitsPerHour !== undefined &&
      (obj.maxUnitsPerHour = message.maxUnitsPerHour);
    message.maxUnitsPerExecution !== undefined &&
      (obj.maxUnitsPerExecution = message.maxUnitsPerExecution);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Project_Limits>, I>>(
    object: I
  ): Project_Limits {
    const message = { ...baseProject_Limits } as Project_Limits;
    message.maxUnitsPerHour = object.maxUnitsPerHour ?? undefined;
    message.maxUnitsPerExecution = object.maxUnitsPerExecution ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Project_Limits.$type, Project_Limits);

const baseProject_LabelsEntry: object = {
  $type: "yandex.cloud.datasphere.v2.Project.LabelsEntry",
  key: "",
  value: "",
};

export const Project_LabelsEntry = {
  $type: "yandex.cloud.datasphere.v2.Project.LabelsEntry" as const,

  encode(
    message: Project_LabelsEntry,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Project_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProject_LabelsEntry } as Project_LabelsEntry;
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

  fromJSON(object: any): Project_LabelsEntry {
    const message = { ...baseProject_LabelsEntry } as Project_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Project_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Project_LabelsEntry>, I>>(
    object: I
  ): Project_LabelsEntry {
    const message = { ...baseProject_LabelsEntry } as Project_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Project_LabelsEntry.$type, Project_LabelsEntry);

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
