/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../../../google/protobuf/duration";
import { Timestamp } from "../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.datasphere.v2.jobs";

export enum FileCompressionType {
  FILE_COMPRESSION_TYPE_UNSPECIFIED = 0,
  NONE = 1,
  ZIP = 2,
  UNRECOGNIZED = -1,
}

export function fileCompressionTypeFromJSON(object: any): FileCompressionType {
  switch (object) {
    case 0:
    case "FILE_COMPRESSION_TYPE_UNSPECIFIED":
      return FileCompressionType.FILE_COMPRESSION_TYPE_UNSPECIFIED;
    case 1:
    case "NONE":
      return FileCompressionType.NONE;
    case 2:
    case "ZIP":
      return FileCompressionType.ZIP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FileCompressionType.UNRECOGNIZED;
  }
}

export function fileCompressionTypeToJSON(object: FileCompressionType): string {
  switch (object) {
    case FileCompressionType.FILE_COMPRESSION_TYPE_UNSPECIFIED:
      return "FILE_COMPRESSION_TYPE_UNSPECIFIED";
    case FileCompressionType.NONE:
      return "NONE";
    case FileCompressionType.ZIP:
      return "ZIP";
    default:
      return "UNKNOWN";
  }
}

export enum JobStatus {
  JOB_STATUS_UNSPECIFIED = 0,
  CREATING = 1,
  EXECUTING = 2,
  UPLOADING_OUTPUT = 3,
  SUCCESS = 4,
  ERROR = 5,
  CANCELLED = 6,
  CANCELLING = 7,
  UNRECOGNIZED = -1,
}

export function jobStatusFromJSON(object: any): JobStatus {
  switch (object) {
    case 0:
    case "JOB_STATUS_UNSPECIFIED":
      return JobStatus.JOB_STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return JobStatus.CREATING;
    case 2:
    case "EXECUTING":
      return JobStatus.EXECUTING;
    case 3:
    case "UPLOADING_OUTPUT":
      return JobStatus.UPLOADING_OUTPUT;
    case 4:
    case "SUCCESS":
      return JobStatus.SUCCESS;
    case 5:
    case "ERROR":
      return JobStatus.ERROR;
    case 6:
    case "CANCELLED":
      return JobStatus.CANCELLED;
    case 7:
    case "CANCELLING":
      return JobStatus.CANCELLING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return JobStatus.UNRECOGNIZED;
  }
}

export function jobStatusToJSON(object: JobStatus): string {
  switch (object) {
    case JobStatus.JOB_STATUS_UNSPECIFIED:
      return "JOB_STATUS_UNSPECIFIED";
    case JobStatus.CREATING:
      return "CREATING";
    case JobStatus.EXECUTING:
      return "EXECUTING";
    case JobStatus.UPLOADING_OUTPUT:
      return "UPLOADING_OUTPUT";
    case JobStatus.SUCCESS:
      return "SUCCESS";
    case JobStatus.ERROR:
      return "ERROR";
    case JobStatus.CANCELLED:
      return "CANCELLED";
    case JobStatus.CANCELLING:
      return "CANCELLING";
    default:
      return "UNKNOWN";
  }
}

/** Job parameters. */
export interface JobParameters {
  $type: "yandex.cloud.datasphere.v2.jobs.JobParameters";
  /** List of input files. */
  inputFiles: File[];
  /** List of output files descriptions. */
  outputFiles: FileDesc[];
  /** List of DataSphere S3 mount ids. */
  s3MountIds: string[];
  /** List of DataSphere dataset ids. */
  datasetIds: string[];
  /** Job run command. */
  cmd: string;
  /** Job environment description. */
  env?: Environment;
  /** Should project disk be attached to VM. */
  attachProjectDisk: boolean;
  /** VM specification. */
  cloudInstanceTypes: CloudInstanceType[];
  /** Extended working storage configuration. */
  extendedWorkingStorage?: ExtendedWorkingStorage;
  /** List of literal arguments. */
  arguments: Argument[];
  /** List of DataSets descriptions to create. */
  outputDatasets: OutputDatasetDesc[];
  /** Graceful shutdown settings. */
  gracefulShutdownParameters?: GracefulShutdownParameters;
}

export interface CloudInstanceType {
  $type: "yandex.cloud.datasphere.v2.jobs.CloudInstanceType";
  /** Name of DataSphere VM configuration. */
  name: string;
}

/** Extended working storage configuration. */
export interface ExtendedWorkingStorage {
  $type: "yandex.cloud.datasphere.v2.jobs.ExtendedWorkingStorage";
  type: ExtendedWorkingStorage_StorageType;
  sizeGb: number;
}

export enum ExtendedWorkingStorage_StorageType {
  STORAGE_TYPE_UNSPECIFIED = 0,
  SSD = 1,
  UNRECOGNIZED = -1,
}

export function extendedWorkingStorage_StorageTypeFromJSON(
  object: any
): ExtendedWorkingStorage_StorageType {
  switch (object) {
    case 0:
    case "STORAGE_TYPE_UNSPECIFIED":
      return ExtendedWorkingStorage_StorageType.STORAGE_TYPE_UNSPECIFIED;
    case 1:
    case "SSD":
      return ExtendedWorkingStorage_StorageType.SSD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ExtendedWorkingStorage_StorageType.UNRECOGNIZED;
  }
}

export function extendedWorkingStorage_StorageTypeToJSON(
  object: ExtendedWorkingStorage_StorageType
): string {
  switch (object) {
    case ExtendedWorkingStorage_StorageType.STORAGE_TYPE_UNSPECIFIED:
      return "STORAGE_TYPE_UNSPECIFIED";
    case ExtendedWorkingStorage_StorageType.SSD:
      return "SSD";
    default:
      return "UNKNOWN";
  }
}

export interface Argument {
  $type: "yandex.cloud.datasphere.v2.jobs.Argument";
  name: string;
  value: string;
}

export interface File {
  $type: "yandex.cloud.datasphere.v2.jobs.File";
  desc?: FileDesc;
  /** SHA256 of the file. */
  sha256: string;
  /** File size in bytes. */
  sizeBytes: number;
  /** File compression info */
  compressionType: FileCompressionType;
}

export interface StorageFile {
  $type: "yandex.cloud.datasphere.v2.jobs.StorageFile";
  file?: File;
  /** File URL. */
  url: string;
}

export interface FileDesc {
  $type: "yandex.cloud.datasphere.v2.jobs.FileDesc";
  /** Path of the file on filesystem. */
  path: string;
  /** Variable to use in cmd substitution. */
  var: string;
}

export interface FileUploadError {
  $type: "yandex.cloud.datasphere.v2.jobs.FileUploadError";
  outputFileDesc?: FileDesc | undefined;
  logFileName: string | undefined;
  description: string;
}

export interface Environment {
  $type: "yandex.cloud.datasphere.v2.jobs.Environment";
  /** Environment variables. */
  vars: { [key: string]: string };
  /** DS docker image id. */
  dockerImageResourceId: string | undefined;
  dockerImageSpec?: DockerImageSpec | undefined;
  pythonEnv?: PythonEnv;
}

export interface Environment_VarsEntry {
  $type: "yandex.cloud.datasphere.v2.jobs.Environment.VarsEntry";
  key: string;
  value: string;
}

export interface DockerImageSpec {
  $type: "yandex.cloud.datasphere.v2.jobs.DockerImageSpec";
  /** Docker image URL. */
  imageUrl: string;
  /** Username for container registry. */
  username: string;
  /** Plaintext password. */
  passwordPlainText: string | undefined;
  /** ID of DataSphere secret containing password. */
  passwordDsSecretName: string | undefined;
}

export interface PythonEnv {
  $type: "yandex.cloud.datasphere.v2.jobs.PythonEnv";
  /** Conda YAML. */
  condaYaml: string;
  /** List of local modules descriptions. */
  localModules: File[];
}

export interface OutputDatasetDesc {
  $type: "yandex.cloud.datasphere.v2.jobs.OutputDatasetDesc";
  /** Name to create dataset with */
  name: string;
  /** Description to show in UI */
  description: string;
  labels: { [key: string]: string };
  /** Size of dataset to create */
  sizeGb: number;
  /** Var name to replace in cmd, like in FileDesc */
  var: string;
}

export interface OutputDatasetDesc_LabelsEntry {
  $type: "yandex.cloud.datasphere.v2.jobs.OutputDatasetDesc.LabelsEntry";
  key: string;
  value: string;
}

export interface OutputDataset {
  $type: "yandex.cloud.datasphere.v2.jobs.OutputDataset";
  /** Dataset description */
  desc?: OutputDatasetDesc;
  /** Id of created dataset */
  id: string;
}

/** Instance of the job. */
export interface Job {
  $type: "yandex.cloud.datasphere.v2.jobs.Job";
  /** ID of the job. */
  id: string;
  /** Name of the job. */
  name: string;
  /** Description of the job. */
  desc: string;
  /** Create job timestamp. */
  createdAt?: Date;
  /** Finish job timestamp. */
  finishedAt?: Date;
  /** Status of the job. */
  status: JobStatus;
  /** Config of the job, copied from configuration file. */
  config: string;
  /** ID of the user who created the job. */
  createdById: string;
  /** ID of the project. */
  projectId: string;
  jobParameters?: JobParameters;
  /** Job data expiration timestamp. */
  dataExpiresAt?: Date;
  /** Marks if the job data has been cleared. */
  dataCleared: boolean;
  /** Output files of the job. */
  outputFiles: File[];
  /** Job log files. */
  logFiles: File[];
  /** Job diagnostics files. */
  diagnosticFiles: File[];
  /** Job total data size. */
  dataSizeBytes: number;
  /** Start job timestamp. */
  startedAt?: Date;
  /** Details. */
  statusDetails: string;
  /** Actual VM instance type, job is running on. */
  actualCloudInstanceType?: CloudInstanceType;
  /** Reference to the parent job. */
  parentJobId: string;
  /** Failed uploads. */
  fileErrors: FileUploadError[];
  /** Created datasets. */
  outputDatasets: OutputDataset[];
}

export interface JobResult {
  $type: "yandex.cloud.datasphere.v2.jobs.JobResult";
  /** Execution return code. */
  returnCode: number;
}

export interface GracefulShutdownParameters {
  $type: "yandex.cloud.datasphere.v2.jobs.GracefulShutdownParameters";
  timeout?: Duration;
  /** default 15 (SIGTERM) */
  signal: number;
}

const baseJobParameters: object = {
  $type: "yandex.cloud.datasphere.v2.jobs.JobParameters",
  s3MountIds: "",
  datasetIds: "",
  cmd: "",
  attachProjectDisk: false,
};

export const JobParameters = {
  $type: "yandex.cloud.datasphere.v2.jobs.JobParameters" as const,

  encode(
    message: JobParameters,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.inputFiles) {
      File.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.outputFiles) {
      FileDesc.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.s3MountIds) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.datasetIds) {
      writer.uint32(34).string(v!);
    }
    if (message.cmd !== "") {
      writer.uint32(42).string(message.cmd);
    }
    if (message.env !== undefined) {
      Environment.encode(message.env, writer.uint32(50).fork()).ldelim();
    }
    if (message.attachProjectDisk === true) {
      writer.uint32(56).bool(message.attachProjectDisk);
    }
    for (const v of message.cloudInstanceTypes) {
      CloudInstanceType.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.extendedWorkingStorage !== undefined) {
      ExtendedWorkingStorage.encode(
        message.extendedWorkingStorage,
        writer.uint32(74).fork()
      ).ldelim();
    }
    for (const v of message.arguments) {
      Argument.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.outputDatasets) {
      OutputDatasetDesc.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.gracefulShutdownParameters !== undefined) {
      GracefulShutdownParameters.encode(
        message.gracefulShutdownParameters,
        writer.uint32(98).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JobParameters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseJobParameters } as JobParameters;
    message.inputFiles = [];
    message.outputFiles = [];
    message.s3MountIds = [];
    message.datasetIds = [];
    message.cloudInstanceTypes = [];
    message.arguments = [];
    message.outputDatasets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputFiles.push(File.decode(reader, reader.uint32()));
          break;
        case 2:
          message.outputFiles.push(FileDesc.decode(reader, reader.uint32()));
          break;
        case 3:
          message.s3MountIds.push(reader.string());
          break;
        case 4:
          message.datasetIds.push(reader.string());
          break;
        case 5:
          message.cmd = reader.string();
          break;
        case 6:
          message.env = Environment.decode(reader, reader.uint32());
          break;
        case 7:
          message.attachProjectDisk = reader.bool();
          break;
        case 8:
          message.cloudInstanceTypes.push(
            CloudInstanceType.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.extendedWorkingStorage = ExtendedWorkingStorage.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.arguments.push(Argument.decode(reader, reader.uint32()));
          break;
        case 11:
          message.outputDatasets.push(
            OutputDatasetDesc.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.gracefulShutdownParameters =
            GracefulShutdownParameters.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): JobParameters {
    const message = { ...baseJobParameters } as JobParameters;
    message.inputFiles = (object.inputFiles ?? []).map((e: any) =>
      File.fromJSON(e)
    );
    message.outputFiles = (object.outputFiles ?? []).map((e: any) =>
      FileDesc.fromJSON(e)
    );
    message.s3MountIds = (object.s3MountIds ?? []).map((e: any) => String(e));
    message.datasetIds = (object.datasetIds ?? []).map((e: any) => String(e));
    message.cmd =
      object.cmd !== undefined && object.cmd !== null ? String(object.cmd) : "";
    message.env =
      object.env !== undefined && object.env !== null
        ? Environment.fromJSON(object.env)
        : undefined;
    message.attachProjectDisk =
      object.attachProjectDisk !== undefined &&
      object.attachProjectDisk !== null
        ? Boolean(object.attachProjectDisk)
        : false;
    message.cloudInstanceTypes = (object.cloudInstanceTypes ?? []).map(
      (e: any) => CloudInstanceType.fromJSON(e)
    );
    message.extendedWorkingStorage =
      object.extendedWorkingStorage !== undefined &&
      object.extendedWorkingStorage !== null
        ? ExtendedWorkingStorage.fromJSON(object.extendedWorkingStorage)
        : undefined;
    message.arguments = (object.arguments ?? []).map((e: any) =>
      Argument.fromJSON(e)
    );
    message.outputDatasets = (object.outputDatasets ?? []).map((e: any) =>
      OutputDatasetDesc.fromJSON(e)
    );
    message.gracefulShutdownParameters =
      object.gracefulShutdownParameters !== undefined &&
      object.gracefulShutdownParameters !== null
        ? GracefulShutdownParameters.fromJSON(object.gracefulShutdownParameters)
        : undefined;
    return message;
  },

  toJSON(message: JobParameters): unknown {
    const obj: any = {};
    if (message.inputFiles) {
      obj.inputFiles = message.inputFiles.map((e) =>
        e ? File.toJSON(e) : undefined
      );
    } else {
      obj.inputFiles = [];
    }
    if (message.outputFiles) {
      obj.outputFiles = message.outputFiles.map((e) =>
        e ? FileDesc.toJSON(e) : undefined
      );
    } else {
      obj.outputFiles = [];
    }
    if (message.s3MountIds) {
      obj.s3MountIds = message.s3MountIds.map((e) => e);
    } else {
      obj.s3MountIds = [];
    }
    if (message.datasetIds) {
      obj.datasetIds = message.datasetIds.map((e) => e);
    } else {
      obj.datasetIds = [];
    }
    message.cmd !== undefined && (obj.cmd = message.cmd);
    message.env !== undefined &&
      (obj.env = message.env ? Environment.toJSON(message.env) : undefined);
    message.attachProjectDisk !== undefined &&
      (obj.attachProjectDisk = message.attachProjectDisk);
    if (message.cloudInstanceTypes) {
      obj.cloudInstanceTypes = message.cloudInstanceTypes.map((e) =>
        e ? CloudInstanceType.toJSON(e) : undefined
      );
    } else {
      obj.cloudInstanceTypes = [];
    }
    message.extendedWorkingStorage !== undefined &&
      (obj.extendedWorkingStorage = message.extendedWorkingStorage
        ? ExtendedWorkingStorage.toJSON(message.extendedWorkingStorage)
        : undefined);
    if (message.arguments) {
      obj.arguments = message.arguments.map((e) =>
        e ? Argument.toJSON(e) : undefined
      );
    } else {
      obj.arguments = [];
    }
    if (message.outputDatasets) {
      obj.outputDatasets = message.outputDatasets.map((e) =>
        e ? OutputDatasetDesc.toJSON(e) : undefined
      );
    } else {
      obj.outputDatasets = [];
    }
    message.gracefulShutdownParameters !== undefined &&
      (obj.gracefulShutdownParameters = message.gracefulShutdownParameters
        ? GracefulShutdownParameters.toJSON(message.gracefulShutdownParameters)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<JobParameters>, I>>(
    object: I
  ): JobParameters {
    const message = { ...baseJobParameters } as JobParameters;
    message.inputFiles =
      object.inputFiles?.map((e) => File.fromPartial(e)) || [];
    message.outputFiles =
      object.outputFiles?.map((e) => FileDesc.fromPartial(e)) || [];
    message.s3MountIds = object.s3MountIds?.map((e) => e) || [];
    message.datasetIds = object.datasetIds?.map((e) => e) || [];
    message.cmd = object.cmd ?? "";
    message.env =
      object.env !== undefined && object.env !== null
        ? Environment.fromPartial(object.env)
        : undefined;
    message.attachProjectDisk = object.attachProjectDisk ?? false;
    message.cloudInstanceTypes =
      object.cloudInstanceTypes?.map((e) => CloudInstanceType.fromPartial(e)) ||
      [];
    message.extendedWorkingStorage =
      object.extendedWorkingStorage !== undefined &&
      object.extendedWorkingStorage !== null
        ? ExtendedWorkingStorage.fromPartial(object.extendedWorkingStorage)
        : undefined;
    message.arguments =
      object.arguments?.map((e) => Argument.fromPartial(e)) || [];
    message.outputDatasets =
      object.outputDatasets?.map((e) => OutputDatasetDesc.fromPartial(e)) || [];
    message.gracefulShutdownParameters =
      object.gracefulShutdownParameters !== undefined &&
      object.gracefulShutdownParameters !== null
        ? GracefulShutdownParameters.fromPartial(
            object.gracefulShutdownParameters
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(JobParameters.$type, JobParameters);

const baseCloudInstanceType: object = {
  $type: "yandex.cloud.datasphere.v2.jobs.CloudInstanceType",
  name: "",
};

export const CloudInstanceType = {
  $type: "yandex.cloud.datasphere.v2.jobs.CloudInstanceType" as const,

  encode(
    message: CloudInstanceType,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CloudInstanceType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCloudInstanceType } as CloudInstanceType;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CloudInstanceType {
    const message = { ...baseCloudInstanceType } as CloudInstanceType;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: CloudInstanceType): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CloudInstanceType>, I>>(
    object: I
  ): CloudInstanceType {
    const message = { ...baseCloudInstanceType } as CloudInstanceType;
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(CloudInstanceType.$type, CloudInstanceType);

const baseExtendedWorkingStorage: object = {
  $type: "yandex.cloud.datasphere.v2.jobs.ExtendedWorkingStorage",
  type: 0,
  sizeGb: 0,
};

export const ExtendedWorkingStorage = {
  $type: "yandex.cloud.datasphere.v2.jobs.ExtendedWorkingStorage" as const,

  encode(
    message: ExtendedWorkingStorage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.sizeGb !== 0) {
      writer.uint32(16).int64(message.sizeGb);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExtendedWorkingStorage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExtendedWorkingStorage } as ExtendedWorkingStorage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.sizeGb = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExtendedWorkingStorage {
    const message = { ...baseExtendedWorkingStorage } as ExtendedWorkingStorage;
    message.type =
      object.type !== undefined && object.type !== null
        ? extendedWorkingStorage_StorageTypeFromJSON(object.type)
        : 0;
    message.sizeGb =
      object.sizeGb !== undefined && object.sizeGb !== null
        ? Number(object.sizeGb)
        : 0;
    return message;
  },

  toJSON(message: ExtendedWorkingStorage): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = extendedWorkingStorage_StorageTypeToJSON(message.type));
    message.sizeGb !== undefined && (obj.sizeGb = Math.round(message.sizeGb));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExtendedWorkingStorage>, I>>(
    object: I
  ): ExtendedWorkingStorage {
    const message = { ...baseExtendedWorkingStorage } as ExtendedWorkingStorage;
    message.type = object.type ?? 0;
    message.sizeGb = object.sizeGb ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ExtendedWorkingStorage.$type, ExtendedWorkingStorage);

const baseArgument: object = {
  $type: "yandex.cloud.datasphere.v2.jobs.Argument",
  name: "",
  value: "",
};

export const Argument = {
  $type: "yandex.cloud.datasphere.v2.jobs.Argument" as const,

  encode(
    message: Argument,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Argument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseArgument } as Argument;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
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

  fromJSON(object: any): Argument {
    const message = { ...baseArgument } as Argument;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Argument): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Argument>, I>>(object: I): Argument {
    const message = { ...baseArgument } as Argument;
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Argument.$type, Argument);

const baseFile: object = {
  $type: "yandex.cloud.datasphere.v2.jobs.File",
  sha256: "",
  sizeBytes: 0,
  compressionType: 0,
};

export const File = {
  $type: "yandex.cloud.datasphere.v2.jobs.File" as const,

  encode(message: File, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.desc !== undefined) {
      FileDesc.encode(message.desc, writer.uint32(10).fork()).ldelim();
    }
    if (message.sha256 !== "") {
      writer.uint32(18).string(message.sha256);
    }
    if (message.sizeBytes !== 0) {
      writer.uint32(24).int64(message.sizeBytes);
    }
    if (message.compressionType !== 0) {
      writer.uint32(32).int32(message.compressionType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): File {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFile } as File;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.desc = FileDesc.decode(reader, reader.uint32());
          break;
        case 2:
          message.sha256 = reader.string();
          break;
        case 3:
          message.sizeBytes = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.compressionType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): File {
    const message = { ...baseFile } as File;
    message.desc =
      object.desc !== undefined && object.desc !== null
        ? FileDesc.fromJSON(object.desc)
        : undefined;
    message.sha256 =
      object.sha256 !== undefined && object.sha256 !== null
        ? String(object.sha256)
        : "";
    message.sizeBytes =
      object.sizeBytes !== undefined && object.sizeBytes !== null
        ? Number(object.sizeBytes)
        : 0;
    message.compressionType =
      object.compressionType !== undefined && object.compressionType !== null
        ? fileCompressionTypeFromJSON(object.compressionType)
        : 0;
    return message;
  },

  toJSON(message: File): unknown {
    const obj: any = {};
    message.desc !== undefined &&
      (obj.desc = message.desc ? FileDesc.toJSON(message.desc) : undefined);
    message.sha256 !== undefined && (obj.sha256 = message.sha256);
    message.sizeBytes !== undefined &&
      (obj.sizeBytes = Math.round(message.sizeBytes));
    message.compressionType !== undefined &&
      (obj.compressionType = fileCompressionTypeToJSON(
        message.compressionType
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<File>, I>>(object: I): File {
    const message = { ...baseFile } as File;
    message.desc =
      object.desc !== undefined && object.desc !== null
        ? FileDesc.fromPartial(object.desc)
        : undefined;
    message.sha256 = object.sha256 ?? "";
    message.sizeBytes = object.sizeBytes ?? 0;
    message.compressionType = object.compressionType ?? 0;
    return message;
  },
};

messageTypeRegistry.set(File.$type, File);

const baseStorageFile: object = {
  $type: "yandex.cloud.datasphere.v2.jobs.StorageFile",
  url: "",
};

export const StorageFile = {
  $type: "yandex.cloud.datasphere.v2.jobs.StorageFile" as const,

  encode(
    message: StorageFile,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.file !== undefined) {
      File.encode(message.file, writer.uint32(10).fork()).ldelim();
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StorageFile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStorageFile } as StorageFile;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.file = File.decode(reader, reader.uint32());
          break;
        case 2:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StorageFile {
    const message = { ...baseStorageFile } as StorageFile;
    message.file =
      object.file !== undefined && object.file !== null
        ? File.fromJSON(object.file)
        : undefined;
    message.url =
      object.url !== undefined && object.url !== null ? String(object.url) : "";
    return message;
  },

  toJSON(message: StorageFile): unknown {
    const obj: any = {};
    message.file !== undefined &&
      (obj.file = message.file ? File.toJSON(message.file) : undefined);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StorageFile>, I>>(
    object: I
  ): StorageFile {
    const message = { ...baseStorageFile } as StorageFile;
    message.file =
      object.file !== undefined && object.file !== null
        ? File.fromPartial(object.file)
        : undefined;
    message.url = object.url ?? "";
    return message;
  },
};

messageTypeRegistry.set(StorageFile.$type, StorageFile);

const baseFileDesc: object = {
  $type: "yandex.cloud.datasphere.v2.jobs.FileDesc",
  path: "",
  var: "",
};

export const FileDesc = {
  $type: "yandex.cloud.datasphere.v2.jobs.FileDesc" as const,

  encode(
    message: FileDesc,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.var !== "") {
      writer.uint32(18).string(message.var);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileDesc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFileDesc } as FileDesc;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.var = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileDesc {
    const message = { ...baseFileDesc } as FileDesc;
    message.path =
      object.path !== undefined && object.path !== null
        ? String(object.path)
        : "";
    message.var =
      object.var !== undefined && object.var !== null ? String(object.var) : "";
    return message;
  },

  toJSON(message: FileDesc): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.var !== undefined && (obj.var = message.var);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FileDesc>, I>>(object: I): FileDesc {
    const message = { ...baseFileDesc } as FileDesc;
    message.path = object.path ?? "";
    message.var = object.var ?? "";
    return message;
  },
};

messageTypeRegistry.set(FileDesc.$type, FileDesc);

const baseFileUploadError: object = {
  $type: "yandex.cloud.datasphere.v2.jobs.FileUploadError",
  description: "",
};

export const FileUploadError = {
  $type: "yandex.cloud.datasphere.v2.jobs.FileUploadError" as const,

  encode(
    message: FileUploadError,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.outputFileDesc !== undefined) {
      FileDesc.encode(
        message.outputFileDesc,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.logFileName !== undefined) {
      writer.uint32(18).string(message.logFileName);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileUploadError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFileUploadError } as FileUploadError;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.outputFileDesc = FileDesc.decode(reader, reader.uint32());
          break;
        case 2:
          message.logFileName = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileUploadError {
    const message = { ...baseFileUploadError } as FileUploadError;
    message.outputFileDesc =
      object.outputFileDesc !== undefined && object.outputFileDesc !== null
        ? FileDesc.fromJSON(object.outputFileDesc)
        : undefined;
    message.logFileName =
      object.logFileName !== undefined && object.logFileName !== null
        ? String(object.logFileName)
        : undefined;
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    return message;
  },

  toJSON(message: FileUploadError): unknown {
    const obj: any = {};
    message.outputFileDesc !== undefined &&
      (obj.outputFileDesc = message.outputFileDesc
        ? FileDesc.toJSON(message.outputFileDesc)
        : undefined);
    message.logFileName !== undefined &&
      (obj.logFileName = message.logFileName);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FileUploadError>, I>>(
    object: I
  ): FileUploadError {
    const message = { ...baseFileUploadError } as FileUploadError;
    message.outputFileDesc =
      object.outputFileDesc !== undefined && object.outputFileDesc !== null
        ? FileDesc.fromPartial(object.outputFileDesc)
        : undefined;
    message.logFileName = object.logFileName ?? undefined;
    message.description = object.description ?? "";
    return message;
  },
};

messageTypeRegistry.set(FileUploadError.$type, FileUploadError);

const baseEnvironment: object = {
  $type: "yandex.cloud.datasphere.v2.jobs.Environment",
};

export const Environment = {
  $type: "yandex.cloud.datasphere.v2.jobs.Environment" as const,

  encode(
    message: Environment,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.vars).forEach(([key, value]) => {
      Environment_VarsEntry.encode(
        {
          $type: "yandex.cloud.datasphere.v2.jobs.Environment.VarsEntry",
          key: key as any,
          value,
        },
        writer.uint32(10).fork()
      ).ldelim();
    });
    if (message.dockerImageResourceId !== undefined) {
      writer.uint32(18).string(message.dockerImageResourceId);
    }
    if (message.dockerImageSpec !== undefined) {
      DockerImageSpec.encode(
        message.dockerImageSpec,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.pythonEnv !== undefined) {
      PythonEnv.encode(message.pythonEnv, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Environment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEnvironment } as Environment;
    message.vars = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = Environment_VarsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.vars[entry1.key] = entry1.value;
          }
          break;
        case 2:
          message.dockerImageResourceId = reader.string();
          break;
        case 3:
          message.dockerImageSpec = DockerImageSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.pythonEnv = PythonEnv.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Environment {
    const message = { ...baseEnvironment } as Environment;
    message.vars = Object.entries(object.vars ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.dockerImageResourceId =
      object.dockerImageResourceId !== undefined &&
      object.dockerImageResourceId !== null
        ? String(object.dockerImageResourceId)
        : undefined;
    message.dockerImageSpec =
      object.dockerImageSpec !== undefined && object.dockerImageSpec !== null
        ? DockerImageSpec.fromJSON(object.dockerImageSpec)
        : undefined;
    message.pythonEnv =
      object.pythonEnv !== undefined && object.pythonEnv !== null
        ? PythonEnv.fromJSON(object.pythonEnv)
        : undefined;
    return message;
  },

  toJSON(message: Environment): unknown {
    const obj: any = {};
    obj.vars = {};
    if (message.vars) {
      Object.entries(message.vars).forEach(([k, v]) => {
        obj.vars[k] = v;
      });
    }
    message.dockerImageResourceId !== undefined &&
      (obj.dockerImageResourceId = message.dockerImageResourceId);
    message.dockerImageSpec !== undefined &&
      (obj.dockerImageSpec = message.dockerImageSpec
        ? DockerImageSpec.toJSON(message.dockerImageSpec)
        : undefined);
    message.pythonEnv !== undefined &&
      (obj.pythonEnv = message.pythonEnv
        ? PythonEnv.toJSON(message.pythonEnv)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Environment>, I>>(
    object: I
  ): Environment {
    const message = { ...baseEnvironment } as Environment;
    message.vars = Object.entries(object.vars ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.dockerImageResourceId = object.dockerImageResourceId ?? undefined;
    message.dockerImageSpec =
      object.dockerImageSpec !== undefined && object.dockerImageSpec !== null
        ? DockerImageSpec.fromPartial(object.dockerImageSpec)
        : undefined;
    message.pythonEnv =
      object.pythonEnv !== undefined && object.pythonEnv !== null
        ? PythonEnv.fromPartial(object.pythonEnv)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Environment.$type, Environment);

const baseEnvironment_VarsEntry: object = {
  $type: "yandex.cloud.datasphere.v2.jobs.Environment.VarsEntry",
  key: "",
  value: "",
};

export const Environment_VarsEntry = {
  $type: "yandex.cloud.datasphere.v2.jobs.Environment.VarsEntry" as const,

  encode(
    message: Environment_VarsEntry,
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
  ): Environment_VarsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEnvironment_VarsEntry } as Environment_VarsEntry;
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

  fromJSON(object: any): Environment_VarsEntry {
    const message = { ...baseEnvironment_VarsEntry } as Environment_VarsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Environment_VarsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Environment_VarsEntry>, I>>(
    object: I
  ): Environment_VarsEntry {
    const message = { ...baseEnvironment_VarsEntry } as Environment_VarsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Environment_VarsEntry.$type, Environment_VarsEntry);

const baseDockerImageSpec: object = {
  $type: "yandex.cloud.datasphere.v2.jobs.DockerImageSpec",
  imageUrl: "",
  username: "",
};

export const DockerImageSpec = {
  $type: "yandex.cloud.datasphere.v2.jobs.DockerImageSpec" as const,

  encode(
    message: DockerImageSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.imageUrl !== "") {
      writer.uint32(10).string(message.imageUrl);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.passwordPlainText !== undefined) {
      writer.uint32(26).string(message.passwordPlainText);
    }
    if (message.passwordDsSecretName !== undefined) {
      writer.uint32(34).string(message.passwordDsSecretName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DockerImageSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDockerImageSpec } as DockerImageSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.imageUrl = reader.string();
          break;
        case 2:
          message.username = reader.string();
          break;
        case 3:
          message.passwordPlainText = reader.string();
          break;
        case 4:
          message.passwordDsSecretName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DockerImageSpec {
    const message = { ...baseDockerImageSpec } as DockerImageSpec;
    message.imageUrl =
      object.imageUrl !== undefined && object.imageUrl !== null
        ? String(object.imageUrl)
        : "";
    message.username =
      object.username !== undefined && object.username !== null
        ? String(object.username)
        : "";
    message.passwordPlainText =
      object.passwordPlainText !== undefined &&
      object.passwordPlainText !== null
        ? String(object.passwordPlainText)
        : undefined;
    message.passwordDsSecretName =
      object.passwordDsSecretName !== undefined &&
      object.passwordDsSecretName !== null
        ? String(object.passwordDsSecretName)
        : undefined;
    return message;
  },

  toJSON(message: DockerImageSpec): unknown {
    const obj: any = {};
    message.imageUrl !== undefined && (obj.imageUrl = message.imageUrl);
    message.username !== undefined && (obj.username = message.username);
    message.passwordPlainText !== undefined &&
      (obj.passwordPlainText = message.passwordPlainText);
    message.passwordDsSecretName !== undefined &&
      (obj.passwordDsSecretName = message.passwordDsSecretName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DockerImageSpec>, I>>(
    object: I
  ): DockerImageSpec {
    const message = { ...baseDockerImageSpec } as DockerImageSpec;
    message.imageUrl = object.imageUrl ?? "";
    message.username = object.username ?? "";
    message.passwordPlainText = object.passwordPlainText ?? undefined;
    message.passwordDsSecretName = object.passwordDsSecretName ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(DockerImageSpec.$type, DockerImageSpec);

const basePythonEnv: object = {
  $type: "yandex.cloud.datasphere.v2.jobs.PythonEnv",
  condaYaml: "",
};

export const PythonEnv = {
  $type: "yandex.cloud.datasphere.v2.jobs.PythonEnv" as const,

  encode(
    message: PythonEnv,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.condaYaml !== "") {
      writer.uint32(10).string(message.condaYaml);
    }
    for (const v of message.localModules) {
      File.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PythonEnv {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePythonEnv } as PythonEnv;
    message.localModules = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.condaYaml = reader.string();
          break;
        case 2:
          message.localModules.push(File.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PythonEnv {
    const message = { ...basePythonEnv } as PythonEnv;
    message.condaYaml =
      object.condaYaml !== undefined && object.condaYaml !== null
        ? String(object.condaYaml)
        : "";
    message.localModules = (object.localModules ?? []).map((e: any) =>
      File.fromJSON(e)
    );
    return message;
  },

  toJSON(message: PythonEnv): unknown {
    const obj: any = {};
    message.condaYaml !== undefined && (obj.condaYaml = message.condaYaml);
    if (message.localModules) {
      obj.localModules = message.localModules.map((e) =>
        e ? File.toJSON(e) : undefined
      );
    } else {
      obj.localModules = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PythonEnv>, I>>(
    object: I
  ): PythonEnv {
    const message = { ...basePythonEnv } as PythonEnv;
    message.condaYaml = object.condaYaml ?? "";
    message.localModules =
      object.localModules?.map((e) => File.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(PythonEnv.$type, PythonEnv);

const baseOutputDatasetDesc: object = {
  $type: "yandex.cloud.datasphere.v2.jobs.OutputDatasetDesc",
  name: "",
  description: "",
  sizeGb: 0,
  var: "",
};

export const OutputDatasetDesc = {
  $type: "yandex.cloud.datasphere.v2.jobs.OutputDatasetDesc" as const,

  encode(
    message: OutputDatasetDesc,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      OutputDatasetDesc_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.datasphere.v2.jobs.OutputDatasetDesc.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(26).fork()
      ).ldelim();
    });
    if (message.sizeGb !== 0) {
      writer.uint32(32).int64(message.sizeGb);
    }
    if (message.var !== "") {
      writer.uint32(42).string(message.var);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OutputDatasetDesc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOutputDatasetDesc } as OutputDatasetDesc;
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
        case 3:
          const entry3 = OutputDatasetDesc_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.labels[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.sizeGb = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.var = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OutputDatasetDesc {
    const message = { ...baseOutputDatasetDesc } as OutputDatasetDesc;
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
    message.sizeGb =
      object.sizeGb !== undefined && object.sizeGb !== null
        ? Number(object.sizeGb)
        : 0;
    message.var =
      object.var !== undefined && object.var !== null ? String(object.var) : "";
    return message;
  },

  toJSON(message: OutputDatasetDesc): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.sizeGb !== undefined && (obj.sizeGb = Math.round(message.sizeGb));
    message.var !== undefined && (obj.var = message.var);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OutputDatasetDesc>, I>>(
    object: I
  ): OutputDatasetDesc {
    const message = { ...baseOutputDatasetDesc } as OutputDatasetDesc;
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
    message.sizeGb = object.sizeGb ?? 0;
    message.var = object.var ?? "";
    return message;
  },
};

messageTypeRegistry.set(OutputDatasetDesc.$type, OutputDatasetDesc);

const baseOutputDatasetDesc_LabelsEntry: object = {
  $type: "yandex.cloud.datasphere.v2.jobs.OutputDatasetDesc.LabelsEntry",
  key: "",
  value: "",
};

export const OutputDatasetDesc_LabelsEntry = {
  $type:
    "yandex.cloud.datasphere.v2.jobs.OutputDatasetDesc.LabelsEntry" as const,

  encode(
    message: OutputDatasetDesc_LabelsEntry,
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
  ): OutputDatasetDesc_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseOutputDatasetDesc_LabelsEntry,
    } as OutputDatasetDesc_LabelsEntry;
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

  fromJSON(object: any): OutputDatasetDesc_LabelsEntry {
    const message = {
      ...baseOutputDatasetDesc_LabelsEntry,
    } as OutputDatasetDesc_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: OutputDatasetDesc_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OutputDatasetDesc_LabelsEntry>, I>>(
    object: I
  ): OutputDatasetDesc_LabelsEntry {
    const message = {
      ...baseOutputDatasetDesc_LabelsEntry,
    } as OutputDatasetDesc_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  OutputDatasetDesc_LabelsEntry.$type,
  OutputDatasetDesc_LabelsEntry
);

const baseOutputDataset: object = {
  $type: "yandex.cloud.datasphere.v2.jobs.OutputDataset",
  id: "",
};

export const OutputDataset = {
  $type: "yandex.cloud.datasphere.v2.jobs.OutputDataset" as const,

  encode(
    message: OutputDataset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.desc !== undefined) {
      OutputDatasetDesc.encode(message.desc, writer.uint32(10).fork()).ldelim();
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OutputDataset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOutputDataset } as OutputDataset;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.desc = OutputDatasetDesc.decode(reader, reader.uint32());
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OutputDataset {
    const message = { ...baseOutputDataset } as OutputDataset;
    message.desc =
      object.desc !== undefined && object.desc !== null
        ? OutputDatasetDesc.fromJSON(object.desc)
        : undefined;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    return message;
  },

  toJSON(message: OutputDataset): unknown {
    const obj: any = {};
    message.desc !== undefined &&
      (obj.desc = message.desc
        ? OutputDatasetDesc.toJSON(message.desc)
        : undefined);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OutputDataset>, I>>(
    object: I
  ): OutputDataset {
    const message = { ...baseOutputDataset } as OutputDataset;
    message.desc =
      object.desc !== undefined && object.desc !== null
        ? OutputDatasetDesc.fromPartial(object.desc)
        : undefined;
    message.id = object.id ?? "";
    return message;
  },
};

messageTypeRegistry.set(OutputDataset.$type, OutputDataset);

const baseJob: object = {
  $type: "yandex.cloud.datasphere.v2.jobs.Job",
  id: "",
  name: "",
  desc: "",
  status: 0,
  config: "",
  createdById: "",
  projectId: "",
  dataCleared: false,
  dataSizeBytes: 0,
  statusDetails: "",
  parentJobId: "",
};

export const Job = {
  $type: "yandex.cloud.datasphere.v2.jobs.Job" as const,

  encode(message: Job, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.desc !== "") {
      writer.uint32(26).string(message.desc);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.finishedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.finishedAt),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.config !== "") {
      writer.uint32(58).string(message.config);
    }
    if (message.createdById !== "") {
      writer.uint32(66).string(message.createdById);
    }
    if (message.projectId !== "") {
      writer.uint32(74).string(message.projectId);
    }
    if (message.jobParameters !== undefined) {
      JobParameters.encode(
        message.jobParameters,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.dataExpiresAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.dataExpiresAt),
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.dataCleared === true) {
      writer.uint32(96).bool(message.dataCleared);
    }
    for (const v of message.outputFiles) {
      File.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.logFiles) {
      File.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.diagnosticFiles) {
      File.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.dataSizeBytes !== 0) {
      writer.uint32(128).int64(message.dataSizeBytes);
    }
    if (message.startedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startedAt),
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.statusDetails !== "") {
      writer.uint32(146).string(message.statusDetails);
    }
    if (message.actualCloudInstanceType !== undefined) {
      CloudInstanceType.encode(
        message.actualCloudInstanceType,
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.parentJobId !== "") {
      writer.uint32(162).string(message.parentJobId);
    }
    for (const v of message.fileErrors) {
      FileUploadError.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    for (const v of message.outputDatasets) {
      OutputDataset.encode(v!, writer.uint32(178).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Job {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseJob } as Job;
    message.outputFiles = [];
    message.logFiles = [];
    message.diagnosticFiles = [];
    message.fileErrors = [];
    message.outputDatasets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.desc = reader.string();
          break;
        case 4:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.finishedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.status = reader.int32() as any;
          break;
        case 7:
          message.config = reader.string();
          break;
        case 8:
          message.createdById = reader.string();
          break;
        case 9:
          message.projectId = reader.string();
          break;
        case 10:
          message.jobParameters = JobParameters.decode(reader, reader.uint32());
          break;
        case 11:
          message.dataExpiresAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.dataCleared = reader.bool();
          break;
        case 13:
          message.outputFiles.push(File.decode(reader, reader.uint32()));
          break;
        case 14:
          message.logFiles.push(File.decode(reader, reader.uint32()));
          break;
        case 15:
          message.diagnosticFiles.push(File.decode(reader, reader.uint32()));
          break;
        case 16:
          message.dataSizeBytes = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.startedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 18:
          message.statusDetails = reader.string();
          break;
        case 19:
          message.actualCloudInstanceType = CloudInstanceType.decode(
            reader,
            reader.uint32()
          );
          break;
        case 20:
          message.parentJobId = reader.string();
          break;
        case 21:
          message.fileErrors.push(
            FileUploadError.decode(reader, reader.uint32())
          );
          break;
        case 22:
          message.outputDatasets.push(
            OutputDataset.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Job {
    const message = { ...baseJob } as Job;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.desc =
      object.desc !== undefined && object.desc !== null
        ? String(object.desc)
        : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.finishedAt =
      object.finishedAt !== undefined && object.finishedAt !== null
        ? fromJsonTimestamp(object.finishedAt)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? jobStatusFromJSON(object.status)
        : 0;
    message.config =
      object.config !== undefined && object.config !== null
        ? String(object.config)
        : "";
    message.createdById =
      object.createdById !== undefined && object.createdById !== null
        ? String(object.createdById)
        : "";
    message.projectId =
      object.projectId !== undefined && object.projectId !== null
        ? String(object.projectId)
        : "";
    message.jobParameters =
      object.jobParameters !== undefined && object.jobParameters !== null
        ? JobParameters.fromJSON(object.jobParameters)
        : undefined;
    message.dataExpiresAt =
      object.dataExpiresAt !== undefined && object.dataExpiresAt !== null
        ? fromJsonTimestamp(object.dataExpiresAt)
        : undefined;
    message.dataCleared =
      object.dataCleared !== undefined && object.dataCleared !== null
        ? Boolean(object.dataCleared)
        : false;
    message.outputFiles = (object.outputFiles ?? []).map((e: any) =>
      File.fromJSON(e)
    );
    message.logFiles = (object.logFiles ?? []).map((e: any) =>
      File.fromJSON(e)
    );
    message.diagnosticFiles = (object.diagnosticFiles ?? []).map((e: any) =>
      File.fromJSON(e)
    );
    message.dataSizeBytes =
      object.dataSizeBytes !== undefined && object.dataSizeBytes !== null
        ? Number(object.dataSizeBytes)
        : 0;
    message.startedAt =
      object.startedAt !== undefined && object.startedAt !== null
        ? fromJsonTimestamp(object.startedAt)
        : undefined;
    message.statusDetails =
      object.statusDetails !== undefined && object.statusDetails !== null
        ? String(object.statusDetails)
        : "";
    message.actualCloudInstanceType =
      object.actualCloudInstanceType !== undefined &&
      object.actualCloudInstanceType !== null
        ? CloudInstanceType.fromJSON(object.actualCloudInstanceType)
        : undefined;
    message.parentJobId =
      object.parentJobId !== undefined && object.parentJobId !== null
        ? String(object.parentJobId)
        : "";
    message.fileErrors = (object.fileErrors ?? []).map((e: any) =>
      FileUploadError.fromJSON(e)
    );
    message.outputDatasets = (object.outputDatasets ?? []).map((e: any) =>
      OutputDataset.fromJSON(e)
    );
    return message;
  },

  toJSON(message: Job): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.desc !== undefined && (obj.desc = message.desc);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.finishedAt !== undefined &&
      (obj.finishedAt = message.finishedAt.toISOString());
    message.status !== undefined &&
      (obj.status = jobStatusToJSON(message.status));
    message.config !== undefined && (obj.config = message.config);
    message.createdById !== undefined &&
      (obj.createdById = message.createdById);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.jobParameters !== undefined &&
      (obj.jobParameters = message.jobParameters
        ? JobParameters.toJSON(message.jobParameters)
        : undefined);
    message.dataExpiresAt !== undefined &&
      (obj.dataExpiresAt = message.dataExpiresAt.toISOString());
    message.dataCleared !== undefined &&
      (obj.dataCleared = message.dataCleared);
    if (message.outputFiles) {
      obj.outputFiles = message.outputFiles.map((e) =>
        e ? File.toJSON(e) : undefined
      );
    } else {
      obj.outputFiles = [];
    }
    if (message.logFiles) {
      obj.logFiles = message.logFiles.map((e) =>
        e ? File.toJSON(e) : undefined
      );
    } else {
      obj.logFiles = [];
    }
    if (message.diagnosticFiles) {
      obj.diagnosticFiles = message.diagnosticFiles.map((e) =>
        e ? File.toJSON(e) : undefined
      );
    } else {
      obj.diagnosticFiles = [];
    }
    message.dataSizeBytes !== undefined &&
      (obj.dataSizeBytes = Math.round(message.dataSizeBytes));
    message.startedAt !== undefined &&
      (obj.startedAt = message.startedAt.toISOString());
    message.statusDetails !== undefined &&
      (obj.statusDetails = message.statusDetails);
    message.actualCloudInstanceType !== undefined &&
      (obj.actualCloudInstanceType = message.actualCloudInstanceType
        ? CloudInstanceType.toJSON(message.actualCloudInstanceType)
        : undefined);
    message.parentJobId !== undefined &&
      (obj.parentJobId = message.parentJobId);
    if (message.fileErrors) {
      obj.fileErrors = message.fileErrors.map((e) =>
        e ? FileUploadError.toJSON(e) : undefined
      );
    } else {
      obj.fileErrors = [];
    }
    if (message.outputDatasets) {
      obj.outputDatasets = message.outputDatasets.map((e) =>
        e ? OutputDataset.toJSON(e) : undefined
      );
    } else {
      obj.outputDatasets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Job>, I>>(object: I): Job {
    const message = { ...baseJob } as Job;
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.desc = object.desc ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.finishedAt = object.finishedAt ?? undefined;
    message.status = object.status ?? 0;
    message.config = object.config ?? "";
    message.createdById = object.createdById ?? "";
    message.projectId = object.projectId ?? "";
    message.jobParameters =
      object.jobParameters !== undefined && object.jobParameters !== null
        ? JobParameters.fromPartial(object.jobParameters)
        : undefined;
    message.dataExpiresAt = object.dataExpiresAt ?? undefined;
    message.dataCleared = object.dataCleared ?? false;
    message.outputFiles =
      object.outputFiles?.map((e) => File.fromPartial(e)) || [];
    message.logFiles = object.logFiles?.map((e) => File.fromPartial(e)) || [];
    message.diagnosticFiles =
      object.diagnosticFiles?.map((e) => File.fromPartial(e)) || [];
    message.dataSizeBytes = object.dataSizeBytes ?? 0;
    message.startedAt = object.startedAt ?? undefined;
    message.statusDetails = object.statusDetails ?? "";
    message.actualCloudInstanceType =
      object.actualCloudInstanceType !== undefined &&
      object.actualCloudInstanceType !== null
        ? CloudInstanceType.fromPartial(object.actualCloudInstanceType)
        : undefined;
    message.parentJobId = object.parentJobId ?? "";
    message.fileErrors =
      object.fileErrors?.map((e) => FileUploadError.fromPartial(e)) || [];
    message.outputDatasets =
      object.outputDatasets?.map((e) => OutputDataset.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Job.$type, Job);

const baseJobResult: object = {
  $type: "yandex.cloud.datasphere.v2.jobs.JobResult",
  returnCode: 0,
};

export const JobResult = {
  $type: "yandex.cloud.datasphere.v2.jobs.JobResult" as const,

  encode(
    message: JobResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.returnCode !== 0) {
      writer.uint32(8).int64(message.returnCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JobResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseJobResult } as JobResult;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.returnCode = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): JobResult {
    const message = { ...baseJobResult } as JobResult;
    message.returnCode =
      object.returnCode !== undefined && object.returnCode !== null
        ? Number(object.returnCode)
        : 0;
    return message;
  },

  toJSON(message: JobResult): unknown {
    const obj: any = {};
    message.returnCode !== undefined &&
      (obj.returnCode = Math.round(message.returnCode));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<JobResult>, I>>(
    object: I
  ): JobResult {
    const message = { ...baseJobResult } as JobResult;
    message.returnCode = object.returnCode ?? 0;
    return message;
  },
};

messageTypeRegistry.set(JobResult.$type, JobResult);

const baseGracefulShutdownParameters: object = {
  $type: "yandex.cloud.datasphere.v2.jobs.GracefulShutdownParameters",
  signal: 0,
};

export const GracefulShutdownParameters = {
  $type: "yandex.cloud.datasphere.v2.jobs.GracefulShutdownParameters" as const,

  encode(
    message: GracefulShutdownParameters,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timeout !== undefined) {
      Duration.encode(message.timeout, writer.uint32(10).fork()).ldelim();
    }
    if (message.signal !== 0) {
      writer.uint32(16).int64(message.signal);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GracefulShutdownParameters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGracefulShutdownParameters,
    } as GracefulShutdownParameters;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeout = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.signal = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GracefulShutdownParameters {
    const message = {
      ...baseGracefulShutdownParameters,
    } as GracefulShutdownParameters;
    message.timeout =
      object.timeout !== undefined && object.timeout !== null
        ? Duration.fromJSON(object.timeout)
        : undefined;
    message.signal =
      object.signal !== undefined && object.signal !== null
        ? Number(object.signal)
        : 0;
    return message;
  },

  toJSON(message: GracefulShutdownParameters): unknown {
    const obj: any = {};
    message.timeout !== undefined &&
      (obj.timeout = message.timeout
        ? Duration.toJSON(message.timeout)
        : undefined);
    message.signal !== undefined && (obj.signal = Math.round(message.signal));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GracefulShutdownParameters>, I>>(
    object: I
  ): GracefulShutdownParameters {
    const message = {
      ...baseGracefulShutdownParameters,
    } as GracefulShutdownParameters;
    message.timeout =
      object.timeout !== undefined && object.timeout !== null
        ? Duration.fromPartial(object.timeout)
        : undefined;
    message.signal = object.signal ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  GracefulShutdownParameters.$type,
  GracefulShutdownParameters
);

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
