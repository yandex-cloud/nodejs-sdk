/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.dataproc.v1";

/** A Data Proc job. For details about the concept, see [documentation](/docs/data-proc/concepts/jobs). */
export interface Job {
  $type: "yandex.cloud.dataproc.v1.Job";
  /** ID of the job. Generated at creation time. */
  id: string;
  /** ID of the Data Proc cluster that the job belongs to. */
  clusterId: string;
  /** Creation timestamp. */
  createdAt?: Date;
  /** The time when the job was started. */
  startedAt?: Date;
  /** The time when the job was finished. */
  finishedAt?: Date;
  /** Name of the job, specified in the [JobService.Create] request. */
  name: string;
  /** The id of the user who created the job */
  createdBy: string;
  /** Job status. */
  status: Job_Status;
  /** Specification for a MapReduce job. */
  mapreduceJob?: MapreduceJob | undefined;
  /** Specification for a Spark job. */
  sparkJob?: SparkJob | undefined;
  /** Specification for a PySpark job. */
  pysparkJob?: PysparkJob | undefined;
  /** Specification for a Hive job. */
  hiveJob?: HiveJob | undefined;
  /** Attributes of YARN application. */
  applicationInfo?: ApplicationInfo;
}

export enum Job_Status {
  STATUS_UNSPECIFIED = 0,
  /** PROVISIONING - Job is logged in the database and is waiting for the agent to run it. */
  PROVISIONING = 1,
  /** PENDING - Job is acquired by the agent and is in the queue for execution. */
  PENDING = 2,
  /** RUNNING - Job is being run in the cluster. */
  RUNNING = 3,
  /** ERROR - Job failed to finish the run properly. */
  ERROR = 4,
  /** DONE - Job is finished. */
  DONE = 5,
  /** CANCELLED - Job is cancelled. */
  CANCELLED = 6,
  /** CANCELLING - Job is waiting for cancellation. */
  CANCELLING = 7,
  UNRECOGNIZED = -1,
}

export function job_StatusFromJSON(object: any): Job_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Job_Status.STATUS_UNSPECIFIED;
    case 1:
    case "PROVISIONING":
      return Job_Status.PROVISIONING;
    case 2:
    case "PENDING":
      return Job_Status.PENDING;
    case 3:
    case "RUNNING":
      return Job_Status.RUNNING;
    case 4:
    case "ERROR":
      return Job_Status.ERROR;
    case 5:
    case "DONE":
      return Job_Status.DONE;
    case 6:
    case "CANCELLED":
      return Job_Status.CANCELLED;
    case 7:
    case "CANCELLING":
      return Job_Status.CANCELLING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Job_Status.UNRECOGNIZED;
  }
}

export function job_StatusToJSON(object: Job_Status): string {
  switch (object) {
    case Job_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Job_Status.PROVISIONING:
      return "PROVISIONING";
    case Job_Status.PENDING:
      return "PENDING";
    case Job_Status.RUNNING:
      return "RUNNING";
    case Job_Status.ERROR:
      return "ERROR";
    case Job_Status.DONE:
      return "DONE";
    case Job_Status.CANCELLED:
      return "CANCELLED";
    case Job_Status.CANCELLING:
      return "CANCELLING";
    default:
      return "UNKNOWN";
  }
}

export interface ApplicationAttempt {
  $type: "yandex.cloud.dataproc.v1.ApplicationAttempt";
  /** ID of YARN application attempt */
  id: string;
  /** ID of YARN Application Master container */
  amContainerId: string;
}

export interface ApplicationInfo {
  $type: "yandex.cloud.dataproc.v1.ApplicationInfo";
  /** ID of YARN application */
  id: string;
  /** YARN application attempts */
  applicationAttempts: ApplicationAttempt[];
}

export interface MapreduceJob {
  $type: "yandex.cloud.dataproc.v1.MapreduceJob";
  /** Optional arguments to pass to the driver. */
  args: string[];
  /** JAR file URIs to add to CLASSPATH of the Data Proc driver and each task. */
  jarFileUris: string[];
  /**
   * URIs of resource files to be copied to the working directory of Data Proc drivers
   * and distributed Hadoop tasks.
   */
  fileUris: string[];
  /** URIs of archives to be extracted to the working directory of Data Proc drivers and tasks. */
  archiveUris: string[];
  /** Property names and values, used to configure Data Proc and MapReduce. */
  properties: { [key: string]: string };
  /** HCFS URI of the .jar file containing the driver class. */
  mainJarFileUri: string | undefined;
  /** The name of the driver class. */
  mainClass: string | undefined;
}

export interface MapreduceJob_PropertiesEntry {
  $type: "yandex.cloud.dataproc.v1.MapreduceJob.PropertiesEntry";
  key: string;
  value: string;
}

export interface SparkJob {
  $type: "yandex.cloud.dataproc.v1.SparkJob";
  /** Optional arguments to pass to the driver. */
  args: string[];
  /** JAR file URIs to add to CLASSPATH of the Data Proc driver and each task. */
  jarFileUris: string[];
  /**
   * URIs of resource files to be copied to the working directory of Data Proc drivers
   * and distributed Hadoop tasks.
   */
  fileUris: string[];
  /** URIs of archives to be extracted to the working directory of Data Proc drivers and tasks. */
  archiveUris: string[];
  /** Property names and values, used to configure Data Proc and Spark. */
  properties: { [key: string]: string };
  /** The HCFS URI of the JAR file containing the `main` class for the job. */
  mainJarFileUri: string;
  /** The name of the driver class. */
  mainClass: string;
  /** List of maven coordinates of jars to include on the driver and executor classpaths. */
  packages: string[];
  /** List of additional remote repositories to search for the maven coordinates given with --packages. */
  repositories: string[];
  /** List of groupId:artifactId, to exclude while resolving the dependencies provided in --packages to avoid dependency conflicts. */
  excludePackages: string[];
}

export interface SparkJob_PropertiesEntry {
  $type: "yandex.cloud.dataproc.v1.SparkJob.PropertiesEntry";
  key: string;
  value: string;
}

export interface PysparkJob {
  $type: "yandex.cloud.dataproc.v1.PysparkJob";
  /** Optional arguments to pass to the driver. */
  args: string[];
  /** JAR file URIs to add to CLASSPATH of the Data Proc driver and each task. */
  jarFileUris: string[];
  /**
   * URIs of resource files to be copied to the working directory of Data Proc drivers
   * and distributed Hadoop tasks.
   */
  fileUris: string[];
  /** URIs of archives to be extracted to the working directory of Data Proc drivers and tasks. */
  archiveUris: string[];
  /** Property names and values, used to configure Data Proc and PySpark. */
  properties: { [key: string]: string };
  /** URI of the file with the driver code. Must be a .py file. */
  mainPythonFileUri: string;
  /** URIs of Python files to pass to the PySpark framework. */
  pythonFileUris: string[];
  /** List of maven coordinates of jars to include on the driver and executor classpaths. */
  packages: string[];
  /** List of additional remote repositories to search for the maven coordinates given with --packages. */
  repositories: string[];
  /** List of groupId:artifactId, to exclude while resolving the dependencies provided in --packages to avoid dependency conflicts. */
  excludePackages: string[];
}

export interface PysparkJob_PropertiesEntry {
  $type: "yandex.cloud.dataproc.v1.PysparkJob.PropertiesEntry";
  key: string;
  value: string;
}

export interface QueryList {
  $type: "yandex.cloud.dataproc.v1.QueryList";
  /** List of Hive queries. */
  queries: string[];
}

export interface HiveJob {
  $type: "yandex.cloud.dataproc.v1.HiveJob";
  /** Property names and values, used to configure Data Proc and Hive. */
  properties: { [key: string]: string };
  /** Flag indicating whether a job should continue to run if a query fails. */
  continueOnFailure: boolean;
  /** Query variables and their values. */
  scriptVariables: { [key: string]: string };
  /** JAR file URIs to add to CLASSPATH of the Hive driver and each task. */
  jarFileUris: string[];
  /** URI of the script with all the necessary Hive queries. */
  queryFileUri: string | undefined;
  /** List of Hive queries to be used in the job. */
  queryList?: QueryList | undefined;
}

export interface HiveJob_PropertiesEntry {
  $type: "yandex.cloud.dataproc.v1.HiveJob.PropertiesEntry";
  key: string;
  value: string;
}

export interface HiveJob_ScriptVariablesEntry {
  $type: "yandex.cloud.dataproc.v1.HiveJob.ScriptVariablesEntry";
  key: string;
  value: string;
}

const baseJob: object = {
  $type: "yandex.cloud.dataproc.v1.Job",
  id: "",
  clusterId: "",
  name: "",
  createdBy: "",
  status: 0,
};

export const Job = {
  $type: "yandex.cloud.dataproc.v1.Job" as const,

  encode(message: Job, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.clusterId !== "") {
      writer.uint32(18).string(message.clusterId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.startedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startedAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.finishedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.finishedAt),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.createdBy !== "") {
      writer.uint32(98).string(message.createdBy);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.mapreduceJob !== undefined) {
      MapreduceJob.encode(
        message.mapreduceJob,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.sparkJob !== undefined) {
      SparkJob.encode(message.sparkJob, writer.uint32(74).fork()).ldelim();
    }
    if (message.pysparkJob !== undefined) {
      PysparkJob.encode(message.pysparkJob, writer.uint32(82).fork()).ldelim();
    }
    if (message.hiveJob !== undefined) {
      HiveJob.encode(message.hiveJob, writer.uint32(90).fork()).ldelim();
    }
    if (message.applicationInfo !== undefined) {
      ApplicationInfo.encode(
        message.applicationInfo,
        writer.uint32(106).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Job {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseJob } as Job;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.clusterId = reader.string();
          break;
        case 3:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.startedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.finishedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.name = reader.string();
          break;
        case 12:
          message.createdBy = reader.string();
          break;
        case 7:
          message.status = reader.int32() as any;
          break;
        case 8:
          message.mapreduceJob = MapreduceJob.decode(reader, reader.uint32());
          break;
        case 9:
          message.sparkJob = SparkJob.decode(reader, reader.uint32());
          break;
        case 10:
          message.pysparkJob = PysparkJob.decode(reader, reader.uint32());
          break;
        case 11:
          message.hiveJob = HiveJob.decode(reader, reader.uint32());
          break;
        case 13:
          message.applicationInfo = ApplicationInfo.decode(
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
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.startedAt =
      object.startedAt !== undefined && object.startedAt !== null
        ? fromJsonTimestamp(object.startedAt)
        : undefined;
    message.finishedAt =
      object.finishedAt !== undefined && object.finishedAt !== null
        ? fromJsonTimestamp(object.finishedAt)
        : undefined;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.createdBy =
      object.createdBy !== undefined && object.createdBy !== null
        ? String(object.createdBy)
        : "";
    message.status =
      object.status !== undefined && object.status !== null
        ? job_StatusFromJSON(object.status)
        : 0;
    message.mapreduceJob =
      object.mapreduceJob !== undefined && object.mapreduceJob !== null
        ? MapreduceJob.fromJSON(object.mapreduceJob)
        : undefined;
    message.sparkJob =
      object.sparkJob !== undefined && object.sparkJob !== null
        ? SparkJob.fromJSON(object.sparkJob)
        : undefined;
    message.pysparkJob =
      object.pysparkJob !== undefined && object.pysparkJob !== null
        ? PysparkJob.fromJSON(object.pysparkJob)
        : undefined;
    message.hiveJob =
      object.hiveJob !== undefined && object.hiveJob !== null
        ? HiveJob.fromJSON(object.hiveJob)
        : undefined;
    message.applicationInfo =
      object.applicationInfo !== undefined && object.applicationInfo !== null
        ? ApplicationInfo.fromJSON(object.applicationInfo)
        : undefined;
    return message;
  },

  toJSON(message: Job): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.startedAt !== undefined &&
      (obj.startedAt = message.startedAt.toISOString());
    message.finishedAt !== undefined &&
      (obj.finishedAt = message.finishedAt.toISOString());
    message.name !== undefined && (obj.name = message.name);
    message.createdBy !== undefined && (obj.createdBy = message.createdBy);
    message.status !== undefined &&
      (obj.status = job_StatusToJSON(message.status));
    message.mapreduceJob !== undefined &&
      (obj.mapreduceJob = message.mapreduceJob
        ? MapreduceJob.toJSON(message.mapreduceJob)
        : undefined);
    message.sparkJob !== undefined &&
      (obj.sparkJob = message.sparkJob
        ? SparkJob.toJSON(message.sparkJob)
        : undefined);
    message.pysparkJob !== undefined &&
      (obj.pysparkJob = message.pysparkJob
        ? PysparkJob.toJSON(message.pysparkJob)
        : undefined);
    message.hiveJob !== undefined &&
      (obj.hiveJob = message.hiveJob
        ? HiveJob.toJSON(message.hiveJob)
        : undefined);
    message.applicationInfo !== undefined &&
      (obj.applicationInfo = message.applicationInfo
        ? ApplicationInfo.toJSON(message.applicationInfo)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Job>, I>>(object: I): Job {
    const message = { ...baseJob } as Job;
    message.id = object.id ?? "";
    message.clusterId = object.clusterId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.startedAt = object.startedAt ?? undefined;
    message.finishedAt = object.finishedAt ?? undefined;
    message.name = object.name ?? "";
    message.createdBy = object.createdBy ?? "";
    message.status = object.status ?? 0;
    message.mapreduceJob =
      object.mapreduceJob !== undefined && object.mapreduceJob !== null
        ? MapreduceJob.fromPartial(object.mapreduceJob)
        : undefined;
    message.sparkJob =
      object.sparkJob !== undefined && object.sparkJob !== null
        ? SparkJob.fromPartial(object.sparkJob)
        : undefined;
    message.pysparkJob =
      object.pysparkJob !== undefined && object.pysparkJob !== null
        ? PysparkJob.fromPartial(object.pysparkJob)
        : undefined;
    message.hiveJob =
      object.hiveJob !== undefined && object.hiveJob !== null
        ? HiveJob.fromPartial(object.hiveJob)
        : undefined;
    message.applicationInfo =
      object.applicationInfo !== undefined && object.applicationInfo !== null
        ? ApplicationInfo.fromPartial(object.applicationInfo)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Job.$type, Job);

const baseApplicationAttempt: object = {
  $type: "yandex.cloud.dataproc.v1.ApplicationAttempt",
  id: "",
  amContainerId: "",
};

export const ApplicationAttempt = {
  $type: "yandex.cloud.dataproc.v1.ApplicationAttempt" as const,

  encode(
    message: ApplicationAttempt,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.amContainerId !== "") {
      writer.uint32(18).string(message.amContainerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApplicationAttempt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApplicationAttempt } as ApplicationAttempt;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.amContainerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApplicationAttempt {
    const message = { ...baseApplicationAttempt } as ApplicationAttempt;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.amContainerId =
      object.amContainerId !== undefined && object.amContainerId !== null
        ? String(object.amContainerId)
        : "";
    return message;
  },

  toJSON(message: ApplicationAttempt): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.amContainerId !== undefined &&
      (obj.amContainerId = message.amContainerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ApplicationAttempt>, I>>(
    object: I
  ): ApplicationAttempt {
    const message = { ...baseApplicationAttempt } as ApplicationAttempt;
    message.id = object.id ?? "";
    message.amContainerId = object.amContainerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ApplicationAttempt.$type, ApplicationAttempt);

const baseApplicationInfo: object = {
  $type: "yandex.cloud.dataproc.v1.ApplicationInfo",
  id: "",
};

export const ApplicationInfo = {
  $type: "yandex.cloud.dataproc.v1.ApplicationInfo" as const,

  encode(
    message: ApplicationInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.applicationAttempts) {
      ApplicationAttempt.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApplicationInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApplicationInfo } as ApplicationInfo;
    message.applicationAttempts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.applicationAttempts.push(
            ApplicationAttempt.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApplicationInfo {
    const message = { ...baseApplicationInfo } as ApplicationInfo;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.applicationAttempts = (object.applicationAttempts ?? []).map(
      (e: any) => ApplicationAttempt.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ApplicationInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.applicationAttempts) {
      obj.applicationAttempts = message.applicationAttempts.map((e) =>
        e ? ApplicationAttempt.toJSON(e) : undefined
      );
    } else {
      obj.applicationAttempts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ApplicationInfo>, I>>(
    object: I
  ): ApplicationInfo {
    const message = { ...baseApplicationInfo } as ApplicationInfo;
    message.id = object.id ?? "";
    message.applicationAttempts =
      object.applicationAttempts?.map((e) =>
        ApplicationAttempt.fromPartial(e)
      ) || [];
    return message;
  },
};

messageTypeRegistry.set(ApplicationInfo.$type, ApplicationInfo);

const baseMapreduceJob: object = {
  $type: "yandex.cloud.dataproc.v1.MapreduceJob",
  args: "",
  jarFileUris: "",
  fileUris: "",
  archiveUris: "",
};

export const MapreduceJob = {
  $type: "yandex.cloud.dataproc.v1.MapreduceJob" as const,

  encode(
    message: MapreduceJob,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.args) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.jarFileUris) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.fileUris) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.archiveUris) {
      writer.uint32(34).string(v!);
    }
    Object.entries(message.properties).forEach(([key, value]) => {
      MapreduceJob_PropertiesEntry.encode(
        {
          $type: "yandex.cloud.dataproc.v1.MapreduceJob.PropertiesEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.mainJarFileUri !== undefined) {
      writer.uint32(50).string(message.mainJarFileUri);
    }
    if (message.mainClass !== undefined) {
      writer.uint32(58).string(message.mainClass);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapreduceJob {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMapreduceJob } as MapreduceJob;
    message.args = [];
    message.jarFileUris = [];
    message.fileUris = [];
    message.archiveUris = [];
    message.properties = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.args.push(reader.string());
          break;
        case 2:
          message.jarFileUris.push(reader.string());
          break;
        case 3:
          message.fileUris.push(reader.string());
          break;
        case 4:
          message.archiveUris.push(reader.string());
          break;
        case 5:
          const entry5 = MapreduceJob_PropertiesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.properties[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.mainJarFileUri = reader.string();
          break;
        case 7:
          message.mainClass = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MapreduceJob {
    const message = { ...baseMapreduceJob } as MapreduceJob;
    message.args = (object.args ?? []).map((e: any) => String(e));
    message.jarFileUris = (object.jarFileUris ?? []).map((e: any) => String(e));
    message.fileUris = (object.fileUris ?? []).map((e: any) => String(e));
    message.archiveUris = (object.archiveUris ?? []).map((e: any) => String(e));
    message.properties = Object.entries(object.properties ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.mainJarFileUri =
      object.mainJarFileUri !== undefined && object.mainJarFileUri !== null
        ? String(object.mainJarFileUri)
        : undefined;
    message.mainClass =
      object.mainClass !== undefined && object.mainClass !== null
        ? String(object.mainClass)
        : undefined;
    return message;
  },

  toJSON(message: MapreduceJob): unknown {
    const obj: any = {};
    if (message.args) {
      obj.args = message.args.map((e) => e);
    } else {
      obj.args = [];
    }
    if (message.jarFileUris) {
      obj.jarFileUris = message.jarFileUris.map((e) => e);
    } else {
      obj.jarFileUris = [];
    }
    if (message.fileUris) {
      obj.fileUris = message.fileUris.map((e) => e);
    } else {
      obj.fileUris = [];
    }
    if (message.archiveUris) {
      obj.archiveUris = message.archiveUris.map((e) => e);
    } else {
      obj.archiveUris = [];
    }
    obj.properties = {};
    if (message.properties) {
      Object.entries(message.properties).forEach(([k, v]) => {
        obj.properties[k] = v;
      });
    }
    message.mainJarFileUri !== undefined &&
      (obj.mainJarFileUri = message.mainJarFileUri);
    message.mainClass !== undefined && (obj.mainClass = message.mainClass);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MapreduceJob>, I>>(
    object: I
  ): MapreduceJob {
    const message = { ...baseMapreduceJob } as MapreduceJob;
    message.args = object.args?.map((e) => e) || [];
    message.jarFileUris = object.jarFileUris?.map((e) => e) || [];
    message.fileUris = object.fileUris?.map((e) => e) || [];
    message.archiveUris = object.archiveUris?.map((e) => e) || [];
    message.properties = Object.entries(object.properties ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.mainJarFileUri = object.mainJarFileUri ?? undefined;
    message.mainClass = object.mainClass ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MapreduceJob.$type, MapreduceJob);

const baseMapreduceJob_PropertiesEntry: object = {
  $type: "yandex.cloud.dataproc.v1.MapreduceJob.PropertiesEntry",
  key: "",
  value: "",
};

export const MapreduceJob_PropertiesEntry = {
  $type: "yandex.cloud.dataproc.v1.MapreduceJob.PropertiesEntry" as const,

  encode(
    message: MapreduceJob_PropertiesEntry,
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
  ): MapreduceJob_PropertiesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMapreduceJob_PropertiesEntry,
    } as MapreduceJob_PropertiesEntry;
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

  fromJSON(object: any): MapreduceJob_PropertiesEntry {
    const message = {
      ...baseMapreduceJob_PropertiesEntry,
    } as MapreduceJob_PropertiesEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: MapreduceJob_PropertiesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MapreduceJob_PropertiesEntry>, I>>(
    object: I
  ): MapreduceJob_PropertiesEntry {
    const message = {
      ...baseMapreduceJob_PropertiesEntry,
    } as MapreduceJob_PropertiesEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  MapreduceJob_PropertiesEntry.$type,
  MapreduceJob_PropertiesEntry
);

const baseSparkJob: object = {
  $type: "yandex.cloud.dataproc.v1.SparkJob",
  args: "",
  jarFileUris: "",
  fileUris: "",
  archiveUris: "",
  mainJarFileUri: "",
  mainClass: "",
  packages: "",
  repositories: "",
  excludePackages: "",
};

export const SparkJob = {
  $type: "yandex.cloud.dataproc.v1.SparkJob" as const,

  encode(
    message: SparkJob,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.args) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.jarFileUris) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.fileUris) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.archiveUris) {
      writer.uint32(34).string(v!);
    }
    Object.entries(message.properties).forEach(([key, value]) => {
      SparkJob_PropertiesEntry.encode(
        {
          $type: "yandex.cloud.dataproc.v1.SparkJob.PropertiesEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.mainJarFileUri !== "") {
      writer.uint32(50).string(message.mainJarFileUri);
    }
    if (message.mainClass !== "") {
      writer.uint32(58).string(message.mainClass);
    }
    for (const v of message.packages) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.repositories) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.excludePackages) {
      writer.uint32(82).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SparkJob {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSparkJob } as SparkJob;
    message.args = [];
    message.jarFileUris = [];
    message.fileUris = [];
    message.archiveUris = [];
    message.properties = {};
    message.packages = [];
    message.repositories = [];
    message.excludePackages = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.args.push(reader.string());
          break;
        case 2:
          message.jarFileUris.push(reader.string());
          break;
        case 3:
          message.fileUris.push(reader.string());
          break;
        case 4:
          message.archiveUris.push(reader.string());
          break;
        case 5:
          const entry5 = SparkJob_PropertiesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.properties[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.mainJarFileUri = reader.string();
          break;
        case 7:
          message.mainClass = reader.string();
          break;
        case 8:
          message.packages.push(reader.string());
          break;
        case 9:
          message.repositories.push(reader.string());
          break;
        case 10:
          message.excludePackages.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SparkJob {
    const message = { ...baseSparkJob } as SparkJob;
    message.args = (object.args ?? []).map((e: any) => String(e));
    message.jarFileUris = (object.jarFileUris ?? []).map((e: any) => String(e));
    message.fileUris = (object.fileUris ?? []).map((e: any) => String(e));
    message.archiveUris = (object.archiveUris ?? []).map((e: any) => String(e));
    message.properties = Object.entries(object.properties ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.mainJarFileUri =
      object.mainJarFileUri !== undefined && object.mainJarFileUri !== null
        ? String(object.mainJarFileUri)
        : "";
    message.mainClass =
      object.mainClass !== undefined && object.mainClass !== null
        ? String(object.mainClass)
        : "";
    message.packages = (object.packages ?? []).map((e: any) => String(e));
    message.repositories = (object.repositories ?? []).map((e: any) =>
      String(e)
    );
    message.excludePackages = (object.excludePackages ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: SparkJob): unknown {
    const obj: any = {};
    if (message.args) {
      obj.args = message.args.map((e) => e);
    } else {
      obj.args = [];
    }
    if (message.jarFileUris) {
      obj.jarFileUris = message.jarFileUris.map((e) => e);
    } else {
      obj.jarFileUris = [];
    }
    if (message.fileUris) {
      obj.fileUris = message.fileUris.map((e) => e);
    } else {
      obj.fileUris = [];
    }
    if (message.archiveUris) {
      obj.archiveUris = message.archiveUris.map((e) => e);
    } else {
      obj.archiveUris = [];
    }
    obj.properties = {};
    if (message.properties) {
      Object.entries(message.properties).forEach(([k, v]) => {
        obj.properties[k] = v;
      });
    }
    message.mainJarFileUri !== undefined &&
      (obj.mainJarFileUri = message.mainJarFileUri);
    message.mainClass !== undefined && (obj.mainClass = message.mainClass);
    if (message.packages) {
      obj.packages = message.packages.map((e) => e);
    } else {
      obj.packages = [];
    }
    if (message.repositories) {
      obj.repositories = message.repositories.map((e) => e);
    } else {
      obj.repositories = [];
    }
    if (message.excludePackages) {
      obj.excludePackages = message.excludePackages.map((e) => e);
    } else {
      obj.excludePackages = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SparkJob>, I>>(object: I): SparkJob {
    const message = { ...baseSparkJob } as SparkJob;
    message.args = object.args?.map((e) => e) || [];
    message.jarFileUris = object.jarFileUris?.map((e) => e) || [];
    message.fileUris = object.fileUris?.map((e) => e) || [];
    message.archiveUris = object.archiveUris?.map((e) => e) || [];
    message.properties = Object.entries(object.properties ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.mainJarFileUri = object.mainJarFileUri ?? "";
    message.mainClass = object.mainClass ?? "";
    message.packages = object.packages?.map((e) => e) || [];
    message.repositories = object.repositories?.map((e) => e) || [];
    message.excludePackages = object.excludePackages?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(SparkJob.$type, SparkJob);

const baseSparkJob_PropertiesEntry: object = {
  $type: "yandex.cloud.dataproc.v1.SparkJob.PropertiesEntry",
  key: "",
  value: "",
};

export const SparkJob_PropertiesEntry = {
  $type: "yandex.cloud.dataproc.v1.SparkJob.PropertiesEntry" as const,

  encode(
    message: SparkJob_PropertiesEntry,
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
  ): SparkJob_PropertiesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSparkJob_PropertiesEntry,
    } as SparkJob_PropertiesEntry;
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

  fromJSON(object: any): SparkJob_PropertiesEntry {
    const message = {
      ...baseSparkJob_PropertiesEntry,
    } as SparkJob_PropertiesEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: SparkJob_PropertiesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SparkJob_PropertiesEntry>, I>>(
    object: I
  ): SparkJob_PropertiesEntry {
    const message = {
      ...baseSparkJob_PropertiesEntry,
    } as SparkJob_PropertiesEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  SparkJob_PropertiesEntry.$type,
  SparkJob_PropertiesEntry
);

const basePysparkJob: object = {
  $type: "yandex.cloud.dataproc.v1.PysparkJob",
  args: "",
  jarFileUris: "",
  fileUris: "",
  archiveUris: "",
  mainPythonFileUri: "",
  pythonFileUris: "",
  packages: "",
  repositories: "",
  excludePackages: "",
};

export const PysparkJob = {
  $type: "yandex.cloud.dataproc.v1.PysparkJob" as const,

  encode(
    message: PysparkJob,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.args) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.jarFileUris) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.fileUris) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.archiveUris) {
      writer.uint32(34).string(v!);
    }
    Object.entries(message.properties).forEach(([key, value]) => {
      PysparkJob_PropertiesEntry.encode(
        {
          $type: "yandex.cloud.dataproc.v1.PysparkJob.PropertiesEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.mainPythonFileUri !== "") {
      writer.uint32(50).string(message.mainPythonFileUri);
    }
    for (const v of message.pythonFileUris) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.packages) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.repositories) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.excludePackages) {
      writer.uint32(82).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PysparkJob {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePysparkJob } as PysparkJob;
    message.args = [];
    message.jarFileUris = [];
    message.fileUris = [];
    message.archiveUris = [];
    message.properties = {};
    message.pythonFileUris = [];
    message.packages = [];
    message.repositories = [];
    message.excludePackages = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.args.push(reader.string());
          break;
        case 2:
          message.jarFileUris.push(reader.string());
          break;
        case 3:
          message.fileUris.push(reader.string());
          break;
        case 4:
          message.archiveUris.push(reader.string());
          break;
        case 5:
          const entry5 = PysparkJob_PropertiesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.properties[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.mainPythonFileUri = reader.string();
          break;
        case 7:
          message.pythonFileUris.push(reader.string());
          break;
        case 8:
          message.packages.push(reader.string());
          break;
        case 9:
          message.repositories.push(reader.string());
          break;
        case 10:
          message.excludePackages.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PysparkJob {
    const message = { ...basePysparkJob } as PysparkJob;
    message.args = (object.args ?? []).map((e: any) => String(e));
    message.jarFileUris = (object.jarFileUris ?? []).map((e: any) => String(e));
    message.fileUris = (object.fileUris ?? []).map((e: any) => String(e));
    message.archiveUris = (object.archiveUris ?? []).map((e: any) => String(e));
    message.properties = Object.entries(object.properties ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.mainPythonFileUri =
      object.mainPythonFileUri !== undefined &&
      object.mainPythonFileUri !== null
        ? String(object.mainPythonFileUri)
        : "";
    message.pythonFileUris = (object.pythonFileUris ?? []).map((e: any) =>
      String(e)
    );
    message.packages = (object.packages ?? []).map((e: any) => String(e));
    message.repositories = (object.repositories ?? []).map((e: any) =>
      String(e)
    );
    message.excludePackages = (object.excludePackages ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: PysparkJob): unknown {
    const obj: any = {};
    if (message.args) {
      obj.args = message.args.map((e) => e);
    } else {
      obj.args = [];
    }
    if (message.jarFileUris) {
      obj.jarFileUris = message.jarFileUris.map((e) => e);
    } else {
      obj.jarFileUris = [];
    }
    if (message.fileUris) {
      obj.fileUris = message.fileUris.map((e) => e);
    } else {
      obj.fileUris = [];
    }
    if (message.archiveUris) {
      obj.archiveUris = message.archiveUris.map((e) => e);
    } else {
      obj.archiveUris = [];
    }
    obj.properties = {};
    if (message.properties) {
      Object.entries(message.properties).forEach(([k, v]) => {
        obj.properties[k] = v;
      });
    }
    message.mainPythonFileUri !== undefined &&
      (obj.mainPythonFileUri = message.mainPythonFileUri);
    if (message.pythonFileUris) {
      obj.pythonFileUris = message.pythonFileUris.map((e) => e);
    } else {
      obj.pythonFileUris = [];
    }
    if (message.packages) {
      obj.packages = message.packages.map((e) => e);
    } else {
      obj.packages = [];
    }
    if (message.repositories) {
      obj.repositories = message.repositories.map((e) => e);
    } else {
      obj.repositories = [];
    }
    if (message.excludePackages) {
      obj.excludePackages = message.excludePackages.map((e) => e);
    } else {
      obj.excludePackages = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PysparkJob>, I>>(
    object: I
  ): PysparkJob {
    const message = { ...basePysparkJob } as PysparkJob;
    message.args = object.args?.map((e) => e) || [];
    message.jarFileUris = object.jarFileUris?.map((e) => e) || [];
    message.fileUris = object.fileUris?.map((e) => e) || [];
    message.archiveUris = object.archiveUris?.map((e) => e) || [];
    message.properties = Object.entries(object.properties ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.mainPythonFileUri = object.mainPythonFileUri ?? "";
    message.pythonFileUris = object.pythonFileUris?.map((e) => e) || [];
    message.packages = object.packages?.map((e) => e) || [];
    message.repositories = object.repositories?.map((e) => e) || [];
    message.excludePackages = object.excludePackages?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(PysparkJob.$type, PysparkJob);

const basePysparkJob_PropertiesEntry: object = {
  $type: "yandex.cloud.dataproc.v1.PysparkJob.PropertiesEntry",
  key: "",
  value: "",
};

export const PysparkJob_PropertiesEntry = {
  $type: "yandex.cloud.dataproc.v1.PysparkJob.PropertiesEntry" as const,

  encode(
    message: PysparkJob_PropertiesEntry,
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
  ): PysparkJob_PropertiesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePysparkJob_PropertiesEntry,
    } as PysparkJob_PropertiesEntry;
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

  fromJSON(object: any): PysparkJob_PropertiesEntry {
    const message = {
      ...basePysparkJob_PropertiesEntry,
    } as PysparkJob_PropertiesEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: PysparkJob_PropertiesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PysparkJob_PropertiesEntry>, I>>(
    object: I
  ): PysparkJob_PropertiesEntry {
    const message = {
      ...basePysparkJob_PropertiesEntry,
    } as PysparkJob_PropertiesEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  PysparkJob_PropertiesEntry.$type,
  PysparkJob_PropertiesEntry
);

const baseQueryList: object = {
  $type: "yandex.cloud.dataproc.v1.QueryList",
  queries: "",
};

export const QueryList = {
  $type: "yandex.cloud.dataproc.v1.QueryList" as const,

  encode(
    message: QueryList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.queries) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryList } as QueryList;
    message.queries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queries.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryList {
    const message = { ...baseQueryList } as QueryList;
    message.queries = (object.queries ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: QueryList): unknown {
    const obj: any = {};
    if (message.queries) {
      obj.queries = message.queries.map((e) => e);
    } else {
      obj.queries = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryList>, I>>(
    object: I
  ): QueryList {
    const message = { ...baseQueryList } as QueryList;
    message.queries = object.queries?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(QueryList.$type, QueryList);

const baseHiveJob: object = {
  $type: "yandex.cloud.dataproc.v1.HiveJob",
  continueOnFailure: false,
  jarFileUris: "",
};

export const HiveJob = {
  $type: "yandex.cloud.dataproc.v1.HiveJob" as const,

  encode(
    message: HiveJob,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.properties).forEach(([key, value]) => {
      HiveJob_PropertiesEntry.encode(
        {
          $type: "yandex.cloud.dataproc.v1.HiveJob.PropertiesEntry",
          key: key as any,
          value,
        },
        writer.uint32(10).fork()
      ).ldelim();
    });
    if (message.continueOnFailure === true) {
      writer.uint32(16).bool(message.continueOnFailure);
    }
    Object.entries(message.scriptVariables).forEach(([key, value]) => {
      HiveJob_ScriptVariablesEntry.encode(
        {
          $type: "yandex.cloud.dataproc.v1.HiveJob.ScriptVariablesEntry",
          key: key as any,
          value,
        },
        writer.uint32(26).fork()
      ).ldelim();
    });
    for (const v of message.jarFileUris) {
      writer.uint32(34).string(v!);
    }
    if (message.queryFileUri !== undefined) {
      writer.uint32(42).string(message.queryFileUri);
    }
    if (message.queryList !== undefined) {
      QueryList.encode(message.queryList, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HiveJob {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHiveJob } as HiveJob;
    message.properties = {};
    message.scriptVariables = {};
    message.jarFileUris = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = HiveJob_PropertiesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.properties[entry1.key] = entry1.value;
          }
          break;
        case 2:
          message.continueOnFailure = reader.bool();
          break;
        case 3:
          const entry3 = HiveJob_ScriptVariablesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.scriptVariables[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.jarFileUris.push(reader.string());
          break;
        case 5:
          message.queryFileUri = reader.string();
          break;
        case 6:
          message.queryList = QueryList.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HiveJob {
    const message = { ...baseHiveJob } as HiveJob;
    message.properties = Object.entries(object.properties ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.continueOnFailure =
      object.continueOnFailure !== undefined &&
      object.continueOnFailure !== null
        ? Boolean(object.continueOnFailure)
        : false;
    message.scriptVariables = Object.entries(
      object.scriptVariables ?? {}
    ).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.jarFileUris = (object.jarFileUris ?? []).map((e: any) => String(e));
    message.queryFileUri =
      object.queryFileUri !== undefined && object.queryFileUri !== null
        ? String(object.queryFileUri)
        : undefined;
    message.queryList =
      object.queryList !== undefined && object.queryList !== null
        ? QueryList.fromJSON(object.queryList)
        : undefined;
    return message;
  },

  toJSON(message: HiveJob): unknown {
    const obj: any = {};
    obj.properties = {};
    if (message.properties) {
      Object.entries(message.properties).forEach(([k, v]) => {
        obj.properties[k] = v;
      });
    }
    message.continueOnFailure !== undefined &&
      (obj.continueOnFailure = message.continueOnFailure);
    obj.scriptVariables = {};
    if (message.scriptVariables) {
      Object.entries(message.scriptVariables).forEach(([k, v]) => {
        obj.scriptVariables[k] = v;
      });
    }
    if (message.jarFileUris) {
      obj.jarFileUris = message.jarFileUris.map((e) => e);
    } else {
      obj.jarFileUris = [];
    }
    message.queryFileUri !== undefined &&
      (obj.queryFileUri = message.queryFileUri);
    message.queryList !== undefined &&
      (obj.queryList = message.queryList
        ? QueryList.toJSON(message.queryList)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HiveJob>, I>>(object: I): HiveJob {
    const message = { ...baseHiveJob } as HiveJob;
    message.properties = Object.entries(object.properties ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.continueOnFailure = object.continueOnFailure ?? false;
    message.scriptVariables = Object.entries(
      object.scriptVariables ?? {}
    ).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.jarFileUris = object.jarFileUris?.map((e) => e) || [];
    message.queryFileUri = object.queryFileUri ?? undefined;
    message.queryList =
      object.queryList !== undefined && object.queryList !== null
        ? QueryList.fromPartial(object.queryList)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(HiveJob.$type, HiveJob);

const baseHiveJob_PropertiesEntry: object = {
  $type: "yandex.cloud.dataproc.v1.HiveJob.PropertiesEntry",
  key: "",
  value: "",
};

export const HiveJob_PropertiesEntry = {
  $type: "yandex.cloud.dataproc.v1.HiveJob.PropertiesEntry" as const,

  encode(
    message: HiveJob_PropertiesEntry,
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
  ): HiveJob_PropertiesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHiveJob_PropertiesEntry,
    } as HiveJob_PropertiesEntry;
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

  fromJSON(object: any): HiveJob_PropertiesEntry {
    const message = {
      ...baseHiveJob_PropertiesEntry,
    } as HiveJob_PropertiesEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: HiveJob_PropertiesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HiveJob_PropertiesEntry>, I>>(
    object: I
  ): HiveJob_PropertiesEntry {
    const message = {
      ...baseHiveJob_PropertiesEntry,
    } as HiveJob_PropertiesEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(HiveJob_PropertiesEntry.$type, HiveJob_PropertiesEntry);

const baseHiveJob_ScriptVariablesEntry: object = {
  $type: "yandex.cloud.dataproc.v1.HiveJob.ScriptVariablesEntry",
  key: "",
  value: "",
};

export const HiveJob_ScriptVariablesEntry = {
  $type: "yandex.cloud.dataproc.v1.HiveJob.ScriptVariablesEntry" as const,

  encode(
    message: HiveJob_ScriptVariablesEntry,
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
  ): HiveJob_ScriptVariablesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHiveJob_ScriptVariablesEntry,
    } as HiveJob_ScriptVariablesEntry;
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

  fromJSON(object: any): HiveJob_ScriptVariablesEntry {
    const message = {
      ...baseHiveJob_ScriptVariablesEntry,
    } as HiveJob_ScriptVariablesEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: HiveJob_ScriptVariablesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HiveJob_ScriptVariablesEntry>, I>>(
    object: I
  ): HiveJob_ScriptVariablesEntry {
    const message = {
      ...baseHiveJob_ScriptVariablesEntry,
    } as HiveJob_ScriptVariablesEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  HiveJob_ScriptVariablesEntry.$type,
  HiveJob_ScriptVariablesEntry
);

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
