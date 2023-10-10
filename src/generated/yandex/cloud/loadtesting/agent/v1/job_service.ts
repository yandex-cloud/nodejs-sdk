/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
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

export const protobufPackage = "yandex.cloud.loadtesting.agent.v1";

export interface Job {
  $type: "yandex.cloud.loadtesting.agent.v1.Job";
  id: string;
  config: string;
  ammo?: File;
  loggingLogGroupId: string;
  testData?: StorageObject;
  dataPayload: TestDataEntry[];
  artifactUploadSettings?: TestArtifactUploadSettings;
}

export interface File {
  $type: "yandex.cloud.loadtesting.agent.v1.File";
  name: string;
  content: Buffer;
}

export interface StorageObject {
  $type: "yandex.cloud.loadtesting.agent.v1.StorageObject";
  objectStorageBucket: string;
  objectStorageFilename: string;
}

export interface TestDataEntry {
  $type: "yandex.cloud.loadtesting.agent.v1.TestDataEntry";
  name: string;
  isTransient: boolean;
  storageObject?: StorageObject;
}

export interface TestArtifactUploadSettings {
  $type: "yandex.cloud.loadtesting.agent.v1.TestArtifactUploadSettings";
  outputBucket: string;
  outputName: string;
  isArchive: boolean;
  filterInclude: string[];
  filterExclude: string[];
}

export interface GetJobTransientFile {
  $type: "yandex.cloud.loadtesting.agent.v1.GetJobTransientFile";
  jobId: string;
  name: string;
}

export interface GetJobRequest {
  $type: "yandex.cloud.loadtesting.agent.v1.GetJobRequest";
  computeInstanceId: string;
  agentInstanceId: string;
  jobId: string;
}

export interface ClaimJobStatusRequest {
  $type: "yandex.cloud.loadtesting.agent.v1.ClaimJobStatusRequest";
  jobId: string;
  status: ClaimJobStatusRequest_JobStatus;
  error: string;
}

export enum ClaimJobStatusRequest_JobStatus {
  JOB_STATUS_UNSPECIFIED = 0,
  POST_PROCESS = 1,
  INITIATED = 2,
  PREPARING = 3,
  NOT_FOUND = 4,
  RUNNING = 5,
  FINISHING = 6,
  FINISHED = 7,
  STOPPED = 8,
  FAILED = 9,
  AUTOSTOPPED = 10,
  WAITING_FOR_A_COMMAND_TO_RUN = 11,
  UNRECOGNIZED = -1,
}

export function claimJobStatusRequest_JobStatusFromJSON(
  object: any
): ClaimJobStatusRequest_JobStatus {
  switch (object) {
    case 0:
    case "JOB_STATUS_UNSPECIFIED":
      return ClaimJobStatusRequest_JobStatus.JOB_STATUS_UNSPECIFIED;
    case 1:
    case "POST_PROCESS":
      return ClaimJobStatusRequest_JobStatus.POST_PROCESS;
    case 2:
    case "INITIATED":
      return ClaimJobStatusRequest_JobStatus.INITIATED;
    case 3:
    case "PREPARING":
      return ClaimJobStatusRequest_JobStatus.PREPARING;
    case 4:
    case "NOT_FOUND":
      return ClaimJobStatusRequest_JobStatus.NOT_FOUND;
    case 5:
    case "RUNNING":
      return ClaimJobStatusRequest_JobStatus.RUNNING;
    case 6:
    case "FINISHING":
      return ClaimJobStatusRequest_JobStatus.FINISHING;
    case 7:
    case "FINISHED":
      return ClaimJobStatusRequest_JobStatus.FINISHED;
    case 8:
    case "STOPPED":
      return ClaimJobStatusRequest_JobStatus.STOPPED;
    case 9:
    case "FAILED":
      return ClaimJobStatusRequest_JobStatus.FAILED;
    case 10:
    case "AUTOSTOPPED":
      return ClaimJobStatusRequest_JobStatus.AUTOSTOPPED;
    case 11:
    case "WAITING_FOR_A_COMMAND_TO_RUN":
      return ClaimJobStatusRequest_JobStatus.WAITING_FOR_A_COMMAND_TO_RUN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClaimJobStatusRequest_JobStatus.UNRECOGNIZED;
  }
}

export function claimJobStatusRequest_JobStatusToJSON(
  object: ClaimJobStatusRequest_JobStatus
): string {
  switch (object) {
    case ClaimJobStatusRequest_JobStatus.JOB_STATUS_UNSPECIFIED:
      return "JOB_STATUS_UNSPECIFIED";
    case ClaimJobStatusRequest_JobStatus.POST_PROCESS:
      return "POST_PROCESS";
    case ClaimJobStatusRequest_JobStatus.INITIATED:
      return "INITIATED";
    case ClaimJobStatusRequest_JobStatus.PREPARING:
      return "PREPARING";
    case ClaimJobStatusRequest_JobStatus.NOT_FOUND:
      return "NOT_FOUND";
    case ClaimJobStatusRequest_JobStatus.RUNNING:
      return "RUNNING";
    case ClaimJobStatusRequest_JobStatus.FINISHING:
      return "FINISHING";
    case ClaimJobStatusRequest_JobStatus.FINISHED:
      return "FINISHED";
    case ClaimJobStatusRequest_JobStatus.STOPPED:
      return "STOPPED";
    case ClaimJobStatusRequest_JobStatus.FAILED:
      return "FAILED";
    case ClaimJobStatusRequest_JobStatus.AUTOSTOPPED:
      return "AUTOSTOPPED";
    case ClaimJobStatusRequest_JobStatus.WAITING_FOR_A_COMMAND_TO_RUN:
      return "WAITING_FOR_A_COMMAND_TO_RUN";
    default:
      return "UNKNOWN";
  }
}

export interface ClaimJobStatusResponse {
  $type: "yandex.cloud.loadtesting.agent.v1.ClaimJobStatusResponse";
  code: number;
}

export interface JobSignalRequest {
  $type: "yandex.cloud.loadtesting.agent.v1.JobSignalRequest";
  jobId: string;
}

export interface JobSignalResponse {
  $type: "yandex.cloud.loadtesting.agent.v1.JobSignalResponse";
  signal: JobSignalResponse_Signal;
  /** seconds */
  waitDuration: number;
  /** seconds */
  runIn: number;
}

export enum JobSignalResponse_Signal {
  SIGNAL_UNSPECIFIED = 0,
  STOP = 1,
  WAIT = 2,
  RUN_IN = 3,
  UNRECOGNIZED = -1,
}

export function jobSignalResponse_SignalFromJSON(
  object: any
): JobSignalResponse_Signal {
  switch (object) {
    case 0:
    case "SIGNAL_UNSPECIFIED":
      return JobSignalResponse_Signal.SIGNAL_UNSPECIFIED;
    case 1:
    case "STOP":
      return JobSignalResponse_Signal.STOP;
    case 2:
    case "WAIT":
      return JobSignalResponse_Signal.WAIT;
    case 3:
    case "RUN_IN":
      return JobSignalResponse_Signal.RUN_IN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return JobSignalResponse_Signal.UNRECOGNIZED;
  }
}

export function jobSignalResponse_SignalToJSON(
  object: JobSignalResponse_Signal
): string {
  switch (object) {
    case JobSignalResponse_Signal.SIGNAL_UNSPECIFIED:
      return "SIGNAL_UNSPECIFIED";
    case JobSignalResponse_Signal.STOP:
      return "STOP";
    case JobSignalResponse_Signal.WAIT:
      return "WAIT";
    case JobSignalResponse_Signal.RUN_IN:
      return "RUN_IN";
    default:
      return "UNKNOWN";
  }
}

const baseJob: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.Job",
  id: "",
  config: "",
  loggingLogGroupId: "",
};

export const Job = {
  $type: "yandex.cloud.loadtesting.agent.v1.Job" as const,

  encode(message: Job, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.config !== "") {
      writer.uint32(18).string(message.config);
    }
    if (message.ammo !== undefined) {
      File.encode(message.ammo, writer.uint32(26).fork()).ldelim();
    }
    if (message.loggingLogGroupId !== "") {
      writer.uint32(34).string(message.loggingLogGroupId);
    }
    if (message.testData !== undefined) {
      StorageObject.encode(message.testData, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.dataPayload) {
      TestDataEntry.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.artifactUploadSettings !== undefined) {
      TestArtifactUploadSettings.encode(
        message.artifactUploadSettings,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Job {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseJob } as Job;
    message.dataPayload = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.config = reader.string();
          break;
        case 3:
          message.ammo = File.decode(reader, reader.uint32());
          break;
        case 4:
          message.loggingLogGroupId = reader.string();
          break;
        case 5:
          message.testData = StorageObject.decode(reader, reader.uint32());
          break;
        case 6:
          message.dataPayload.push(
            TestDataEntry.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.artifactUploadSettings = TestArtifactUploadSettings.decode(
            reader,
            reader.uint32()
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
    message.config =
      object.config !== undefined && object.config !== null
        ? String(object.config)
        : "";
    message.ammo =
      object.ammo !== undefined && object.ammo !== null
        ? File.fromJSON(object.ammo)
        : undefined;
    message.loggingLogGroupId =
      object.loggingLogGroupId !== undefined &&
      object.loggingLogGroupId !== null
        ? String(object.loggingLogGroupId)
        : "";
    message.testData =
      object.testData !== undefined && object.testData !== null
        ? StorageObject.fromJSON(object.testData)
        : undefined;
    message.dataPayload = (object.dataPayload ?? []).map((e: any) =>
      TestDataEntry.fromJSON(e)
    );
    message.artifactUploadSettings =
      object.artifactUploadSettings !== undefined &&
      object.artifactUploadSettings !== null
        ? TestArtifactUploadSettings.fromJSON(object.artifactUploadSettings)
        : undefined;
    return message;
  },

  toJSON(message: Job): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.config !== undefined && (obj.config = message.config);
    message.ammo !== undefined &&
      (obj.ammo = message.ammo ? File.toJSON(message.ammo) : undefined);
    message.loggingLogGroupId !== undefined &&
      (obj.loggingLogGroupId = message.loggingLogGroupId);
    message.testData !== undefined &&
      (obj.testData = message.testData
        ? StorageObject.toJSON(message.testData)
        : undefined);
    if (message.dataPayload) {
      obj.dataPayload = message.dataPayload.map((e) =>
        e ? TestDataEntry.toJSON(e) : undefined
      );
    } else {
      obj.dataPayload = [];
    }
    message.artifactUploadSettings !== undefined &&
      (obj.artifactUploadSettings = message.artifactUploadSettings
        ? TestArtifactUploadSettings.toJSON(message.artifactUploadSettings)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Job>, I>>(object: I): Job {
    const message = { ...baseJob } as Job;
    message.id = object.id ?? "";
    message.config = object.config ?? "";
    message.ammo =
      object.ammo !== undefined && object.ammo !== null
        ? File.fromPartial(object.ammo)
        : undefined;
    message.loggingLogGroupId = object.loggingLogGroupId ?? "";
    message.testData =
      object.testData !== undefined && object.testData !== null
        ? StorageObject.fromPartial(object.testData)
        : undefined;
    message.dataPayload =
      object.dataPayload?.map((e) => TestDataEntry.fromPartial(e)) || [];
    message.artifactUploadSettings =
      object.artifactUploadSettings !== undefined &&
      object.artifactUploadSettings !== null
        ? TestArtifactUploadSettings.fromPartial(object.artifactUploadSettings)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Job.$type, Job);

const baseFile: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.File",
  name: "",
};

export const File = {
  $type: "yandex.cloud.loadtesting.agent.v1.File" as const,

  encode(message: File, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.content.length !== 0) {
      writer.uint32(18).bytes(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): File {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFile } as File;
    message.content = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.content = reader.bytes() as Buffer;
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
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.content =
      object.content !== undefined && object.content !== null
        ? Buffer.from(bytesFromBase64(object.content))
        : Buffer.alloc(0);
    return message;
  },

  toJSON(message: File): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.content !== undefined &&
      (obj.content = base64FromBytes(
        message.content !== undefined ? message.content : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<File>, I>>(object: I): File {
    const message = { ...baseFile } as File;
    message.name = object.name ?? "";
    message.content = object.content ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(File.$type, File);

const baseStorageObject: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.StorageObject",
  objectStorageBucket: "",
  objectStorageFilename: "",
};

export const StorageObject = {
  $type: "yandex.cloud.loadtesting.agent.v1.StorageObject" as const,

  encode(
    message: StorageObject,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.objectStorageBucket !== "") {
      writer.uint32(10).string(message.objectStorageBucket);
    }
    if (message.objectStorageFilename !== "") {
      writer.uint32(18).string(message.objectStorageFilename);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StorageObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStorageObject } as StorageObject;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.objectStorageBucket = reader.string();
          break;
        case 2:
          message.objectStorageFilename = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StorageObject {
    const message = { ...baseStorageObject } as StorageObject;
    message.objectStorageBucket =
      object.objectStorageBucket !== undefined &&
      object.objectStorageBucket !== null
        ? String(object.objectStorageBucket)
        : "";
    message.objectStorageFilename =
      object.objectStorageFilename !== undefined &&
      object.objectStorageFilename !== null
        ? String(object.objectStorageFilename)
        : "";
    return message;
  },

  toJSON(message: StorageObject): unknown {
    const obj: any = {};
    message.objectStorageBucket !== undefined &&
      (obj.objectStorageBucket = message.objectStorageBucket);
    message.objectStorageFilename !== undefined &&
      (obj.objectStorageFilename = message.objectStorageFilename);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StorageObject>, I>>(
    object: I
  ): StorageObject {
    const message = { ...baseStorageObject } as StorageObject;
    message.objectStorageBucket = object.objectStorageBucket ?? "";
    message.objectStorageFilename = object.objectStorageFilename ?? "";
    return message;
  },
};

messageTypeRegistry.set(StorageObject.$type, StorageObject);

const baseTestDataEntry: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.TestDataEntry",
  name: "",
  isTransient: false,
};

export const TestDataEntry = {
  $type: "yandex.cloud.loadtesting.agent.v1.TestDataEntry" as const,

  encode(
    message: TestDataEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.isTransient === true) {
      writer.uint32(16).bool(message.isTransient);
    }
    if (message.storageObject !== undefined) {
      StorageObject.encode(
        message.storageObject,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestDataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTestDataEntry } as TestDataEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.isTransient = reader.bool();
          break;
        case 3:
          message.storageObject = StorageObject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestDataEntry {
    const message = { ...baseTestDataEntry } as TestDataEntry;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.isTransient =
      object.isTransient !== undefined && object.isTransient !== null
        ? Boolean(object.isTransient)
        : false;
    message.storageObject =
      object.storageObject !== undefined && object.storageObject !== null
        ? StorageObject.fromJSON(object.storageObject)
        : undefined;
    return message;
  },

  toJSON(message: TestDataEntry): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.isTransient !== undefined &&
      (obj.isTransient = message.isTransient);
    message.storageObject !== undefined &&
      (obj.storageObject = message.storageObject
        ? StorageObject.toJSON(message.storageObject)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TestDataEntry>, I>>(
    object: I
  ): TestDataEntry {
    const message = { ...baseTestDataEntry } as TestDataEntry;
    message.name = object.name ?? "";
    message.isTransient = object.isTransient ?? false;
    message.storageObject =
      object.storageObject !== undefined && object.storageObject !== null
        ? StorageObject.fromPartial(object.storageObject)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(TestDataEntry.$type, TestDataEntry);

const baseTestArtifactUploadSettings: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.TestArtifactUploadSettings",
  outputBucket: "",
  outputName: "",
  isArchive: false,
  filterInclude: "",
  filterExclude: "",
};

export const TestArtifactUploadSettings = {
  $type:
    "yandex.cloud.loadtesting.agent.v1.TestArtifactUploadSettings" as const,

  encode(
    message: TestArtifactUploadSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.outputBucket !== "") {
      writer.uint32(10).string(message.outputBucket);
    }
    if (message.outputName !== "") {
      writer.uint32(18).string(message.outputName);
    }
    if (message.isArchive === true) {
      writer.uint32(24).bool(message.isArchive);
    }
    for (const v of message.filterInclude) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.filterExclude) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestArtifactUploadSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTestArtifactUploadSettings,
    } as TestArtifactUploadSettings;
    message.filterInclude = [];
    message.filterExclude = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.outputBucket = reader.string();
          break;
        case 2:
          message.outputName = reader.string();
          break;
        case 3:
          message.isArchive = reader.bool();
          break;
        case 4:
          message.filterInclude.push(reader.string());
          break;
        case 5:
          message.filterExclude.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestArtifactUploadSettings {
    const message = {
      ...baseTestArtifactUploadSettings,
    } as TestArtifactUploadSettings;
    message.outputBucket =
      object.outputBucket !== undefined && object.outputBucket !== null
        ? String(object.outputBucket)
        : "";
    message.outputName =
      object.outputName !== undefined && object.outputName !== null
        ? String(object.outputName)
        : "";
    message.isArchive =
      object.isArchive !== undefined && object.isArchive !== null
        ? Boolean(object.isArchive)
        : false;
    message.filterInclude = (object.filterInclude ?? []).map((e: any) =>
      String(e)
    );
    message.filterExclude = (object.filterExclude ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: TestArtifactUploadSettings): unknown {
    const obj: any = {};
    message.outputBucket !== undefined &&
      (obj.outputBucket = message.outputBucket);
    message.outputName !== undefined && (obj.outputName = message.outputName);
    message.isArchive !== undefined && (obj.isArchive = message.isArchive);
    if (message.filterInclude) {
      obj.filterInclude = message.filterInclude.map((e) => e);
    } else {
      obj.filterInclude = [];
    }
    if (message.filterExclude) {
      obj.filterExclude = message.filterExclude.map((e) => e);
    } else {
      obj.filterExclude = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TestArtifactUploadSettings>, I>>(
    object: I
  ): TestArtifactUploadSettings {
    const message = {
      ...baseTestArtifactUploadSettings,
    } as TestArtifactUploadSettings;
    message.outputBucket = object.outputBucket ?? "";
    message.outputName = object.outputName ?? "";
    message.isArchive = object.isArchive ?? false;
    message.filterInclude = object.filterInclude?.map((e) => e) || [];
    message.filterExclude = object.filterExclude?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  TestArtifactUploadSettings.$type,
  TestArtifactUploadSettings
);

const baseGetJobTransientFile: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.GetJobTransientFile",
  jobId: "",
  name: "",
};

export const GetJobTransientFile = {
  $type: "yandex.cloud.loadtesting.agent.v1.GetJobTransientFile" as const,

  encode(
    message: GetJobTransientFile,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetJobTransientFile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetJobTransientFile } as GetJobTransientFile;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jobId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetJobTransientFile {
    const message = { ...baseGetJobTransientFile } as GetJobTransientFile;
    message.jobId =
      object.jobId !== undefined && object.jobId !== null
        ? String(object.jobId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: GetJobTransientFile): unknown {
    const obj: any = {};
    message.jobId !== undefined && (obj.jobId = message.jobId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetJobTransientFile>, I>>(
    object: I
  ): GetJobTransientFile {
    const message = { ...baseGetJobTransientFile } as GetJobTransientFile;
    message.jobId = object.jobId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetJobTransientFile.$type, GetJobTransientFile);

const baseGetJobRequest: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.GetJobRequest",
  computeInstanceId: "",
  agentInstanceId: "",
  jobId: "",
};

export const GetJobRequest = {
  $type: "yandex.cloud.loadtesting.agent.v1.GetJobRequest" as const,

  encode(
    message: GetJobRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    if (message.agentInstanceId !== "") {
      writer.uint32(18).string(message.agentInstanceId);
    }
    if (message.jobId !== "") {
      writer.uint32(26).string(message.jobId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetJobRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetJobRequest } as GetJobRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.computeInstanceId = reader.string();
          break;
        case 2:
          message.agentInstanceId = reader.string();
          break;
        case 3:
          message.jobId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetJobRequest {
    const message = { ...baseGetJobRequest } as GetJobRequest;
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    message.agentInstanceId =
      object.agentInstanceId !== undefined && object.agentInstanceId !== null
        ? String(object.agentInstanceId)
        : "";
    message.jobId =
      object.jobId !== undefined && object.jobId !== null
        ? String(object.jobId)
        : "";
    return message;
  },

  toJSON(message: GetJobRequest): unknown {
    const obj: any = {};
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    message.agentInstanceId !== undefined &&
      (obj.agentInstanceId = message.agentInstanceId);
    message.jobId !== undefined && (obj.jobId = message.jobId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetJobRequest>, I>>(
    object: I
  ): GetJobRequest {
    const message = { ...baseGetJobRequest } as GetJobRequest;
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.agentInstanceId = object.agentInstanceId ?? "";
    message.jobId = object.jobId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetJobRequest.$type, GetJobRequest);

const baseClaimJobStatusRequest: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.ClaimJobStatusRequest",
  jobId: "",
  status: 0,
  error: "",
};

export const ClaimJobStatusRequest = {
  $type: "yandex.cloud.loadtesting.agent.v1.ClaimJobStatusRequest" as const,

  encode(
    message: ClaimJobStatusRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.error !== "") {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClaimJobStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClaimJobStatusRequest } as ClaimJobStatusRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jobId = reader.string();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClaimJobStatusRequest {
    const message = { ...baseClaimJobStatusRequest } as ClaimJobStatusRequest;
    message.jobId =
      object.jobId !== undefined && object.jobId !== null
        ? String(object.jobId)
        : "";
    message.status =
      object.status !== undefined && object.status !== null
        ? claimJobStatusRequest_JobStatusFromJSON(object.status)
        : 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? String(object.error)
        : "";
    return message;
  },

  toJSON(message: ClaimJobStatusRequest): unknown {
    const obj: any = {};
    message.jobId !== undefined && (obj.jobId = message.jobId);
    message.status !== undefined &&
      (obj.status = claimJobStatusRequest_JobStatusToJSON(message.status));
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClaimJobStatusRequest>, I>>(
    object: I
  ): ClaimJobStatusRequest {
    const message = { ...baseClaimJobStatusRequest } as ClaimJobStatusRequest;
    message.jobId = object.jobId ?? "";
    message.status = object.status ?? 0;
    message.error = object.error ?? "";
    return message;
  },
};

messageTypeRegistry.set(ClaimJobStatusRequest.$type, ClaimJobStatusRequest);

const baseClaimJobStatusResponse: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.ClaimJobStatusResponse",
  code: 0,
};

export const ClaimJobStatusResponse = {
  $type: "yandex.cloud.loadtesting.agent.v1.ClaimJobStatusResponse" as const,

  encode(
    message: ClaimJobStatusResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int64(message.code);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClaimJobStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClaimJobStatusResponse } as ClaimJobStatusResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClaimJobStatusResponse {
    const message = { ...baseClaimJobStatusResponse } as ClaimJobStatusResponse;
    message.code =
      object.code !== undefined && object.code !== null
        ? Number(object.code)
        : 0;
    return message;
  },

  toJSON(message: ClaimJobStatusResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClaimJobStatusResponse>, I>>(
    object: I
  ): ClaimJobStatusResponse {
    const message = { ...baseClaimJobStatusResponse } as ClaimJobStatusResponse;
    message.code = object.code ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ClaimJobStatusResponse.$type, ClaimJobStatusResponse);

const baseJobSignalRequest: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.JobSignalRequest",
  jobId: "",
};

export const JobSignalRequest = {
  $type: "yandex.cloud.loadtesting.agent.v1.JobSignalRequest" as const,

  encode(
    message: JobSignalRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JobSignalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseJobSignalRequest } as JobSignalRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jobId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): JobSignalRequest {
    const message = { ...baseJobSignalRequest } as JobSignalRequest;
    message.jobId =
      object.jobId !== undefined && object.jobId !== null
        ? String(object.jobId)
        : "";
    return message;
  },

  toJSON(message: JobSignalRequest): unknown {
    const obj: any = {};
    message.jobId !== undefined && (obj.jobId = message.jobId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<JobSignalRequest>, I>>(
    object: I
  ): JobSignalRequest {
    const message = { ...baseJobSignalRequest } as JobSignalRequest;
    message.jobId = object.jobId ?? "";
    return message;
  },
};

messageTypeRegistry.set(JobSignalRequest.$type, JobSignalRequest);

const baseJobSignalResponse: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.JobSignalResponse",
  signal: 0,
  waitDuration: 0,
  runIn: 0,
};

export const JobSignalResponse = {
  $type: "yandex.cloud.loadtesting.agent.v1.JobSignalResponse" as const,

  encode(
    message: JobSignalResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.signal !== 0) {
      writer.uint32(8).int32(message.signal);
    }
    if (message.waitDuration !== 0) {
      writer.uint32(17).double(message.waitDuration);
    }
    if (message.runIn !== 0) {
      writer.uint32(25).double(message.runIn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JobSignalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseJobSignalResponse } as JobSignalResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signal = reader.int32() as any;
          break;
        case 2:
          message.waitDuration = reader.double();
          break;
        case 3:
          message.runIn = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): JobSignalResponse {
    const message = { ...baseJobSignalResponse } as JobSignalResponse;
    message.signal =
      object.signal !== undefined && object.signal !== null
        ? jobSignalResponse_SignalFromJSON(object.signal)
        : 0;
    message.waitDuration =
      object.waitDuration !== undefined && object.waitDuration !== null
        ? Number(object.waitDuration)
        : 0;
    message.runIn =
      object.runIn !== undefined && object.runIn !== null
        ? Number(object.runIn)
        : 0;
    return message;
  },

  toJSON(message: JobSignalResponse): unknown {
    const obj: any = {};
    message.signal !== undefined &&
      (obj.signal = jobSignalResponse_SignalToJSON(message.signal));
    message.waitDuration !== undefined &&
      (obj.waitDuration = message.waitDuration);
    message.runIn !== undefined && (obj.runIn = message.runIn);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<JobSignalResponse>, I>>(
    object: I
  ): JobSignalResponse {
    const message = { ...baseJobSignalResponse } as JobSignalResponse;
    message.signal = object.signal ?? 0;
    message.waitDuration = object.waitDuration ?? 0;
    message.runIn = object.runIn ?? 0;
    return message;
  },
};

messageTypeRegistry.set(JobSignalResponse.$type, JobSignalResponse);

export const JobServiceService = {
  /** Claims status for the specified job. */
  claimStatus: {
    path: "/yandex.cloud.loadtesting.agent.v1.JobService/ClaimStatus",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ClaimJobStatusRequest) =>
      Buffer.from(ClaimJobStatusRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ClaimJobStatusRequest.decode(value),
    responseSerialize: (value: ClaimJobStatusResponse) =>
      Buffer.from(ClaimJobStatusResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ClaimJobStatusResponse.decode(value),
  },
  /** Returns the job for the specified agent. */
  get: {
    path: "/yandex.cloud.loadtesting.agent.v1.JobService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetJobRequest) =>
      Buffer.from(GetJobRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetJobRequest.decode(value),
    responseSerialize: (value: Job) => Buffer.from(Job.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Job.decode(value),
  },
  /** Returns the signal for the specified job. */
  getSignal: {
    path: "/yandex.cloud.loadtesting.agent.v1.JobService/GetSignal",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: JobSignalRequest) =>
      Buffer.from(JobSignalRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => JobSignalRequest.decode(value),
    responseSerialize: (value: JobSignalResponse) =>
      Buffer.from(JobSignalResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => JobSignalResponse.decode(value),
  },
  getTransientFile: {
    path: "/yandex.cloud.loadtesting.agent.v1.JobService/GetTransientFile",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetJobTransientFile) =>
      Buffer.from(GetJobTransientFile.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetJobTransientFile.decode(value),
    responseSerialize: (value: File) =>
      Buffer.from(File.encode(value).finish()),
    responseDeserialize: (value: Buffer) => File.decode(value),
  },
} as const;

export interface JobServiceServer extends UntypedServiceImplementation {
  /** Claims status for the specified job. */
  claimStatus: handleUnaryCall<ClaimJobStatusRequest, ClaimJobStatusResponse>;
  /** Returns the job for the specified agent. */
  get: handleUnaryCall<GetJobRequest, Job>;
  /** Returns the signal for the specified job. */
  getSignal: handleUnaryCall<JobSignalRequest, JobSignalResponse>;
  getTransientFile: handleUnaryCall<GetJobTransientFile, File>;
}

export interface JobServiceClient extends Client {
  /** Claims status for the specified job. */
  claimStatus(
    request: ClaimJobStatusRequest,
    callback: (
      error: ServiceError | null,
      response: ClaimJobStatusResponse
    ) => void
  ): ClientUnaryCall;
  claimStatus(
    request: ClaimJobStatusRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ClaimJobStatusResponse
    ) => void
  ): ClientUnaryCall;
  claimStatus(
    request: ClaimJobStatusRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ClaimJobStatusResponse
    ) => void
  ): ClientUnaryCall;
  /** Returns the job for the specified agent. */
  get(
    request: GetJobRequest,
    callback: (error: ServiceError | null, response: Job) => void
  ): ClientUnaryCall;
  get(
    request: GetJobRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Job) => void
  ): ClientUnaryCall;
  get(
    request: GetJobRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Job) => void
  ): ClientUnaryCall;
  /** Returns the signal for the specified job. */
  getSignal(
    request: JobSignalRequest,
    callback: (error: ServiceError | null, response: JobSignalResponse) => void
  ): ClientUnaryCall;
  getSignal(
    request: JobSignalRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: JobSignalResponse) => void
  ): ClientUnaryCall;
  getSignal(
    request: JobSignalRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: JobSignalResponse) => void
  ): ClientUnaryCall;
  getTransientFile(
    request: GetJobTransientFile,
    callback: (error: ServiceError | null, response: File) => void
  ): ClientUnaryCall;
  getTransientFile(
    request: GetJobTransientFile,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: File) => void
  ): ClientUnaryCall;
  getTransientFile(
    request: GetJobTransientFile,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: File) => void
  ): ClientUnaryCall;
}

export const JobServiceClient = makeGenericClientConstructor(
  JobServiceService,
  "yandex.cloud.loadtesting.agent.v1.JobService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): JobServiceClient;
  service: typeof JobServiceService;
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

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

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
