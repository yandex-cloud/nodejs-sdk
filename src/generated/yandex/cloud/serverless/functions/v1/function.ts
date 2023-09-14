/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../../../google/protobuf/duration";
import {
  LogLevel_Level,
  logLevel_LevelFromJSON,
  logLevel_LevelToJSON,
} from "../../../../../yandex/cloud/logging/v1/log_entry";
import { Timestamp } from "../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.serverless.functions.v1";

/** A serverless function. For details about the concept, see [Functions](/docs/functions/concepts/function). */
export interface Function {
  $type: "yandex.cloud.serverless.functions.v1.Function";
  /** ID of the function. Generated at creation time. */
  id: string;
  /** ID of the folder that the function belongs to. */
  folderId: string;
  /** Creation timestamp for the function. */
  createdAt?: Date;
  /** Name of the function. The name is unique within the folder. */
  name: string;
  /** Description of the function. */
  description: string;
  /** Function labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** ID of the log group for the function. */
  logGroupId: string;
  /** URL that needs to be requested to invoke the function. */
  httpInvokeUrl: string;
  /** Status of the function. */
  status: Function_Status;
}

export enum Function_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - Function is being created. */
  CREATING = 1,
  /** ACTIVE - Function is ready to be invoked. */
  ACTIVE = 2,
  /** DELETING - Function is being deleted. */
  DELETING = 3,
  /** ERROR - Function failed. */
  ERROR = 4,
  UNRECOGNIZED = -1,
}

export function function_StatusFromJSON(object: any): Function_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Function_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return Function_Status.CREATING;
    case 2:
    case "ACTIVE":
      return Function_Status.ACTIVE;
    case 3:
    case "DELETING":
      return Function_Status.DELETING;
    case 4:
    case "ERROR":
      return Function_Status.ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Function_Status.UNRECOGNIZED;
  }
}

export function function_StatusToJSON(object: Function_Status): string {
  switch (object) {
    case Function_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Function_Status.CREATING:
      return "CREATING";
    case Function_Status.ACTIVE:
      return "ACTIVE";
    case Function_Status.DELETING:
      return "DELETING";
    case Function_Status.ERROR:
      return "ERROR";
    default:
      return "UNKNOWN";
  }
}

export interface Function_LabelsEntry {
  $type: "yandex.cloud.serverless.functions.v1.Function.LabelsEntry";
  key: string;
  value: string;
}

/** Version of a function. For details about the concept, see [Function versions](/docs/functions/concepts/function#version). */
export interface Version {
  $type: "yandex.cloud.serverless.functions.v1.Version";
  /** ID of the version. */
  id: string;
  /** ID of the function that the version belongs to. */
  functionId: string;
  /** Description of the version. */
  description: string;
  /** Creation timestamp for the version. */
  createdAt?: Date;
  /**
   * ID of the runtime environment for the function.
   *
   * Supported environments and their identifiers are listed in the [Runtime environments](/docs/functions/concepts/runtime).
   */
  runtime: string;
  /**
   * Entrypoint for the function: the name of the function to be called as the handler.
   *
   * Specified in the format `<function file name>.<handler name>`, for example, `index.myFunction`.
   */
  entrypoint: string;
  /** Resources allocated to the version. */
  resources?: Resources;
  /**
   * Timeout for the execution of the version.
   *
   * If the timeout is exceeded, Cloud Functions responds with a 504 HTTP code.
   */
  executionTimeout?: Duration;
  /** ID of the service account associated with the version. */
  serviceAccountId: string;
  /** Final size of the deployment package after unpacking. */
  imageSize: number;
  /** Status of the version. */
  status: Version_Status;
  /** Version tags. For details, see [Version tag](/docs/functions/concepts/function#tag). */
  tags: string[];
  /** ID of the log group for the version. */
  logGroupId: string;
  /** Environment settings for the version. */
  environment: { [key: string]: string };
  /** Network access. If specified the version will be attached to specified network/subnet(s). */
  connectivity?: Connectivity;
  /** Additional service accounts to be used by the version. */
  namedServiceAccounts: { [key: string]: string };
  /** Yandex Lockbox secrets to be used by the version. */
  secrets: Secret[];
  /** Options for logging from the function */
  logOptions?: LogOptions;
  /** S3 mounts to be used by the version. */
  storageMounts: StorageMount[];
  /** Config for asynchronous invocations of the version */
  asyncInvocationConfig?: AsyncInvocationConfig;
}

export enum Version_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - Version is being created. */
  CREATING = 1,
  /** ACTIVE - Version is ready to use. */
  ACTIVE = 2,
  UNRECOGNIZED = -1,
}

export function version_StatusFromJSON(object: any): Version_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Version_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return Version_Status.CREATING;
    case 2:
    case "ACTIVE":
      return Version_Status.ACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Version_Status.UNRECOGNIZED;
  }
}

export function version_StatusToJSON(object: Version_Status): string {
  switch (object) {
    case Version_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Version_Status.CREATING:
      return "CREATING";
    case Version_Status.ACTIVE:
      return "ACTIVE";
    default:
      return "UNKNOWN";
  }
}

export interface Version_EnvironmentEntry {
  $type: "yandex.cloud.serverless.functions.v1.Version.EnvironmentEntry";
  key: string;
  value: string;
}

export interface Version_NamedServiceAccountsEntry {
  $type: "yandex.cloud.serverless.functions.v1.Version.NamedServiceAccountsEntry";
  key: string;
  value: string;
}

/** Resources allocated to a version. */
export interface Resources {
  $type: "yandex.cloud.serverless.functions.v1.Resources";
  /** Amount of memory available to the version, specified in bytes, multiple of 128MB. */
  memory: number;
}

/** Version deployment package. */
export interface Package {
  $type: "yandex.cloud.serverless.functions.v1.Package";
  /** Name of the bucket that stores the code for the version. */
  bucketName: string;
  /** Name of the object in the bucket that stores the code for the version. */
  objectName: string;
  /** SHA256 hash of the version deployment package. */
  sha256: string;
}

/** Version connectivity specification. */
export interface Connectivity {
  $type: "yandex.cloud.serverless.functions.v1.Connectivity";
  /**
   * Network the version will have access to.
   * It's essential to specify network with subnets in all availability zones.
   */
  networkId: string;
  /**
   * Complete list of subnets (from the same network) the version can be attached to.
   * It's essential to specify at least one subnet for each availability zones.
   */
  subnetId: string[];
}

export interface ScalingPolicy {
  $type: "yandex.cloud.serverless.functions.v1.ScalingPolicy";
  /** ID of the function that the scaling policy belongs to. */
  functionId: string;
  /** Tag of the version that the scaling policy belongs to. For details, see [Version tag](/docs/functions/concepts/function#tag). */
  tag: string;
  /** Creation timestamp for the scaling policy */
  createdAt?: Date;
  /** Modification timestamp for the scaling policy */
  modifiedAt?: Date;
  /**
   * Minimum guaranteed provisioned instances count for all zones in total.
   * Billed separately.
   */
  provisionedInstancesCount: number;
  /**
   * Upper limit for instance count in each zone.
   * 0 means no limit.
   */
  zoneInstancesLimit: number;
  /**
   * Upper limit of requests count in each zone.
   * 0 means no limit.
   */
  zoneRequestsLimit: number;
}

/** Secret for serverless function. */
export interface Secret {
  $type: "yandex.cloud.serverless.functions.v1.Secret";
  /** ID of Yandex Lockbox secret. */
  id: string;
  /** ID of Yandex Lockbox version. */
  versionId: string;
  /** Key in secret's payload, which value to be delivered into function environment. */
  key: string;
  /** environment variable in which secret's value to be delivered. */
  environmentVariable: string | undefined;
}

export interface LogOptions {
  $type: "yandex.cloud.serverless.functions.v1.LogOptions";
  /** Is logging from function disabled. */
  disabled: boolean;
  /** Entry should be written to log group resolved by ID. */
  logGroupId: string | undefined;
  /** Entry should be written to default log group for specified folder. */
  folderId: string | undefined;
  /**
   * Minimum log entry level.
   *
   * See [LogLevel.Level] for details.
   */
  minLevel: LogLevel_Level;
}

export interface StorageMount {
  $type: "yandex.cloud.serverless.functions.v1.StorageMount";
  /** S3 bucket name for mounting. */
  bucketId: string;
  /** S3 bucket prefix for mounting. */
  prefix: string;
  /** Mount point directory name (not path) for mounting. */
  mountPointName: string;
  /** Is mount read only. */
  readOnly: boolean;
}

export interface AsyncInvocationConfig {
  $type: "yandex.cloud.serverless.functions.v1.AsyncInvocationConfig";
  /** Number of retries of version invocation */
  retriesCount: number;
  /** Target for successful result of the version's invocation */
  successTarget?: AsyncInvocationConfig_ResponseTarget;
  /** Target for unsuccessful result, if all retries failed */
  failureTarget?: AsyncInvocationConfig_ResponseTarget;
  /** Service account which can invoke version */
  serviceAccountId: string;
}

/** Target to which a result of an invocation will be sent */
export interface AsyncInvocationConfig_ResponseTarget {
  $type: "yandex.cloud.serverless.functions.v1.AsyncInvocationConfig.ResponseTarget";
  /** Target to ignore a result */
  emptyTarget?: EmptyTarget | undefined;
  /** Target to send a result to ymq */
  ymqTarget?: YMQTarget | undefined;
}

export interface YMQTarget {
  $type: "yandex.cloud.serverless.functions.v1.YMQTarget";
  /** Queue ARN */
  queueArn: string;
  /** Service account which has write permission on the queue. */
  serviceAccountId: string;
}

export interface EmptyTarget {
  $type: "yandex.cloud.serverless.functions.v1.EmptyTarget";
}

const baseFunction: object = {
  $type: "yandex.cloud.serverless.functions.v1.Function",
  id: "",
  folderId: "",
  name: "",
  description: "",
  logGroupId: "",
  httpInvokeUrl: "",
  status: 0,
};

export const Function = {
  $type: "yandex.cloud.serverless.functions.v1.Function" as const,

  encode(
    message: Function,
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
      Function_LabelsEntry.encode(
        {
          $type: "yandex.cloud.serverless.functions.v1.Function.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.logGroupId !== "") {
      writer.uint32(58).string(message.logGroupId);
    }
    if (message.httpInvokeUrl !== "") {
      writer.uint32(66).string(message.httpInvokeUrl);
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Function {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFunction } as Function;
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
          const entry6 = Function_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.logGroupId = reader.string();
          break;
        case 8:
          message.httpInvokeUrl = reader.string();
          break;
        case 9:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Function {
    const message = { ...baseFunction } as Function;
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
    message.logGroupId =
      object.logGroupId !== undefined && object.logGroupId !== null
        ? String(object.logGroupId)
        : "";
    message.httpInvokeUrl =
      object.httpInvokeUrl !== undefined && object.httpInvokeUrl !== null
        ? String(object.httpInvokeUrl)
        : "";
    message.status =
      object.status !== undefined && object.status !== null
        ? function_StatusFromJSON(object.status)
        : 0;
    return message;
  },

  toJSON(message: Function): unknown {
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
    message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
    message.httpInvokeUrl !== undefined &&
      (obj.httpInvokeUrl = message.httpInvokeUrl);
    message.status !== undefined &&
      (obj.status = function_StatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Function>, I>>(object: I): Function {
    const message = { ...baseFunction } as Function;
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
    message.logGroupId = object.logGroupId ?? "";
    message.httpInvokeUrl = object.httpInvokeUrl ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Function.$type, Function);

const baseFunction_LabelsEntry: object = {
  $type: "yandex.cloud.serverless.functions.v1.Function.LabelsEntry",
  key: "",
  value: "",
};

export const Function_LabelsEntry = {
  $type: "yandex.cloud.serverless.functions.v1.Function.LabelsEntry" as const,

  encode(
    message: Function_LabelsEntry,
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
  ): Function_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFunction_LabelsEntry } as Function_LabelsEntry;
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

  fromJSON(object: any): Function_LabelsEntry {
    const message = { ...baseFunction_LabelsEntry } as Function_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Function_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Function_LabelsEntry>, I>>(
    object: I
  ): Function_LabelsEntry {
    const message = { ...baseFunction_LabelsEntry } as Function_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Function_LabelsEntry.$type, Function_LabelsEntry);

const baseVersion: object = {
  $type: "yandex.cloud.serverless.functions.v1.Version",
  id: "",
  functionId: "",
  description: "",
  runtime: "",
  entrypoint: "",
  serviceAccountId: "",
  imageSize: 0,
  status: 0,
  tags: "",
  logGroupId: "",
};

export const Version = {
  $type: "yandex.cloud.serverless.functions.v1.Version" as const,

  encode(
    message: Version,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.functionId !== "") {
      writer.uint32(18).string(message.functionId);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.runtime !== "") {
      writer.uint32(50).string(message.runtime);
    }
    if (message.entrypoint !== "") {
      writer.uint32(58).string(message.entrypoint);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(66).fork()).ldelim();
    }
    if (message.executionTimeout !== undefined) {
      Duration.encode(
        message.executionTimeout,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(82).string(message.serviceAccountId);
    }
    if (message.imageSize !== 0) {
      writer.uint32(96).int64(message.imageSize);
    }
    if (message.status !== 0) {
      writer.uint32(104).int32(message.status);
    }
    for (const v of message.tags) {
      writer.uint32(114).string(v!);
    }
    if (message.logGroupId !== "") {
      writer.uint32(122).string(message.logGroupId);
    }
    Object.entries(message.environment).forEach(([key, value]) => {
      Version_EnvironmentEntry.encode(
        {
          $type:
            "yandex.cloud.serverless.functions.v1.Version.EnvironmentEntry",
          key: key as any,
          value,
        },
        writer.uint32(130).fork()
      ).ldelim();
    });
    if (message.connectivity !== undefined) {
      Connectivity.encode(
        message.connectivity,
        writer.uint32(138).fork()
      ).ldelim();
    }
    Object.entries(message.namedServiceAccounts).forEach(([key, value]) => {
      Version_NamedServiceAccountsEntry.encode(
        {
          $type:
            "yandex.cloud.serverless.functions.v1.Version.NamedServiceAccountsEntry",
          key: key as any,
          value,
        },
        writer.uint32(146).fork()
      ).ldelim();
    });
    for (const v of message.secrets) {
      Secret.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    if (message.logOptions !== undefined) {
      LogOptions.encode(message.logOptions, writer.uint32(162).fork()).ldelim();
    }
    for (const v of message.storageMounts) {
      StorageMount.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    if (message.asyncInvocationConfig !== undefined) {
      AsyncInvocationConfig.encode(
        message.asyncInvocationConfig,
        writer.uint32(178).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Version {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVersion } as Version;
    message.tags = [];
    message.environment = {};
    message.namedServiceAccounts = {};
    message.secrets = [];
    message.storageMounts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.functionId = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 5:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.runtime = reader.string();
          break;
        case 7:
          message.entrypoint = reader.string();
          break;
        case 8:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 9:
          message.executionTimeout = Duration.decode(reader, reader.uint32());
          break;
        case 10:
          message.serviceAccountId = reader.string();
          break;
        case 12:
          message.imageSize = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.status = reader.int32() as any;
          break;
        case 14:
          message.tags.push(reader.string());
          break;
        case 15:
          message.logGroupId = reader.string();
          break;
        case 16:
          const entry16 = Version_EnvironmentEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry16.value !== undefined) {
            message.environment[entry16.key] = entry16.value;
          }
          break;
        case 17:
          message.connectivity = Connectivity.decode(reader, reader.uint32());
          break;
        case 18:
          const entry18 = Version_NamedServiceAccountsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry18.value !== undefined) {
            message.namedServiceAccounts[entry18.key] = entry18.value;
          }
          break;
        case 19:
          message.secrets.push(Secret.decode(reader, reader.uint32()));
          break;
        case 20:
          message.logOptions = LogOptions.decode(reader, reader.uint32());
          break;
        case 21:
          message.storageMounts.push(
            StorageMount.decode(reader, reader.uint32())
          );
          break;
        case 22:
          message.asyncInvocationConfig = AsyncInvocationConfig.decode(
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

  fromJSON(object: any): Version {
    const message = { ...baseVersion } as Version;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.functionId =
      object.functionId !== undefined && object.functionId !== null
        ? String(object.functionId)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.runtime =
      object.runtime !== undefined && object.runtime !== null
        ? String(object.runtime)
        : "";
    message.entrypoint =
      object.entrypoint !== undefined && object.entrypoint !== null
        ? String(object.entrypoint)
        : "";
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    message.executionTimeout =
      object.executionTimeout !== undefined && object.executionTimeout !== null
        ? Duration.fromJSON(object.executionTimeout)
        : undefined;
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.imageSize =
      object.imageSize !== undefined && object.imageSize !== null
        ? Number(object.imageSize)
        : 0;
    message.status =
      object.status !== undefined && object.status !== null
        ? version_StatusFromJSON(object.status)
        : 0;
    message.tags = (object.tags ?? []).map((e: any) => String(e));
    message.logGroupId =
      object.logGroupId !== undefined && object.logGroupId !== null
        ? String(object.logGroupId)
        : "";
    message.environment = Object.entries(object.environment ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.connectivity =
      object.connectivity !== undefined && object.connectivity !== null
        ? Connectivity.fromJSON(object.connectivity)
        : undefined;
    message.namedServiceAccounts = Object.entries(
      object.namedServiceAccounts ?? {}
    ).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.secrets = (object.secrets ?? []).map((e: any) =>
      Secret.fromJSON(e)
    );
    message.logOptions =
      object.logOptions !== undefined && object.logOptions !== null
        ? LogOptions.fromJSON(object.logOptions)
        : undefined;
    message.storageMounts = (object.storageMounts ?? []).map((e: any) =>
      StorageMount.fromJSON(e)
    );
    message.asyncInvocationConfig =
      object.asyncInvocationConfig !== undefined &&
      object.asyncInvocationConfig !== null
        ? AsyncInvocationConfig.fromJSON(object.asyncInvocationConfig)
        : undefined;
    return message;
  },

  toJSON(message: Version): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.functionId !== undefined && (obj.functionId = message.functionId);
    message.description !== undefined &&
      (obj.description = message.description);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.runtime !== undefined && (obj.runtime = message.runtime);
    message.entrypoint !== undefined && (obj.entrypoint = message.entrypoint);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    message.executionTimeout !== undefined &&
      (obj.executionTimeout = message.executionTimeout
        ? Duration.toJSON(message.executionTimeout)
        : undefined);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.imageSize !== undefined &&
      (obj.imageSize = Math.round(message.imageSize));
    message.status !== undefined &&
      (obj.status = version_StatusToJSON(message.status));
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
    obj.environment = {};
    if (message.environment) {
      Object.entries(message.environment).forEach(([k, v]) => {
        obj.environment[k] = v;
      });
    }
    message.connectivity !== undefined &&
      (obj.connectivity = message.connectivity
        ? Connectivity.toJSON(message.connectivity)
        : undefined);
    obj.namedServiceAccounts = {};
    if (message.namedServiceAccounts) {
      Object.entries(message.namedServiceAccounts).forEach(([k, v]) => {
        obj.namedServiceAccounts[k] = v;
      });
    }
    if (message.secrets) {
      obj.secrets = message.secrets.map((e) =>
        e ? Secret.toJSON(e) : undefined
      );
    } else {
      obj.secrets = [];
    }
    message.logOptions !== undefined &&
      (obj.logOptions = message.logOptions
        ? LogOptions.toJSON(message.logOptions)
        : undefined);
    if (message.storageMounts) {
      obj.storageMounts = message.storageMounts.map((e) =>
        e ? StorageMount.toJSON(e) : undefined
      );
    } else {
      obj.storageMounts = [];
    }
    message.asyncInvocationConfig !== undefined &&
      (obj.asyncInvocationConfig = message.asyncInvocationConfig
        ? AsyncInvocationConfig.toJSON(message.asyncInvocationConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Version>, I>>(object: I): Version {
    const message = { ...baseVersion } as Version;
    message.id = object.id ?? "";
    message.functionId = object.functionId ?? "";
    message.description = object.description ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.runtime = object.runtime ?? "";
    message.entrypoint = object.entrypoint ?? "";
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    message.executionTimeout =
      object.executionTimeout !== undefined && object.executionTimeout !== null
        ? Duration.fromPartial(object.executionTimeout)
        : undefined;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.imageSize = object.imageSize ?? 0;
    message.status = object.status ?? 0;
    message.tags = object.tags?.map((e) => e) || [];
    message.logGroupId = object.logGroupId ?? "";
    message.environment = Object.entries(object.environment ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.connectivity =
      object.connectivity !== undefined && object.connectivity !== null
        ? Connectivity.fromPartial(object.connectivity)
        : undefined;
    message.namedServiceAccounts = Object.entries(
      object.namedServiceAccounts ?? {}
    ).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.secrets = object.secrets?.map((e) => Secret.fromPartial(e)) || [];
    message.logOptions =
      object.logOptions !== undefined && object.logOptions !== null
        ? LogOptions.fromPartial(object.logOptions)
        : undefined;
    message.storageMounts =
      object.storageMounts?.map((e) => StorageMount.fromPartial(e)) || [];
    message.asyncInvocationConfig =
      object.asyncInvocationConfig !== undefined &&
      object.asyncInvocationConfig !== null
        ? AsyncInvocationConfig.fromPartial(object.asyncInvocationConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Version.$type, Version);

const baseVersion_EnvironmentEntry: object = {
  $type: "yandex.cloud.serverless.functions.v1.Version.EnvironmentEntry",
  key: "",
  value: "",
};

export const Version_EnvironmentEntry = {
  $type:
    "yandex.cloud.serverless.functions.v1.Version.EnvironmentEntry" as const,

  encode(
    message: Version_EnvironmentEntry,
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
  ): Version_EnvironmentEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseVersion_EnvironmentEntry,
    } as Version_EnvironmentEntry;
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

  fromJSON(object: any): Version_EnvironmentEntry {
    const message = {
      ...baseVersion_EnvironmentEntry,
    } as Version_EnvironmentEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Version_EnvironmentEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Version_EnvironmentEntry>, I>>(
    object: I
  ): Version_EnvironmentEntry {
    const message = {
      ...baseVersion_EnvironmentEntry,
    } as Version_EnvironmentEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  Version_EnvironmentEntry.$type,
  Version_EnvironmentEntry
);

const baseVersion_NamedServiceAccountsEntry: object = {
  $type:
    "yandex.cloud.serverless.functions.v1.Version.NamedServiceAccountsEntry",
  key: "",
  value: "",
};

export const Version_NamedServiceAccountsEntry = {
  $type:
    "yandex.cloud.serverless.functions.v1.Version.NamedServiceAccountsEntry" as const,

  encode(
    message: Version_NamedServiceAccountsEntry,
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
  ): Version_NamedServiceAccountsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseVersion_NamedServiceAccountsEntry,
    } as Version_NamedServiceAccountsEntry;
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

  fromJSON(object: any): Version_NamedServiceAccountsEntry {
    const message = {
      ...baseVersion_NamedServiceAccountsEntry,
    } as Version_NamedServiceAccountsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Version_NamedServiceAccountsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Version_NamedServiceAccountsEntry>, I>
  >(object: I): Version_NamedServiceAccountsEntry {
    const message = {
      ...baseVersion_NamedServiceAccountsEntry,
    } as Version_NamedServiceAccountsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  Version_NamedServiceAccountsEntry.$type,
  Version_NamedServiceAccountsEntry
);

const baseResources: object = {
  $type: "yandex.cloud.serverless.functions.v1.Resources",
  memory: 0,
};

export const Resources = {
  $type: "yandex.cloud.serverless.functions.v1.Resources" as const,

  encode(
    message: Resources,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.memory !== 0) {
      writer.uint32(8).int64(message.memory);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resources {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResources } as Resources;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memory = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Resources {
    const message = { ...baseResources } as Resources;
    message.memory =
      object.memory !== undefined && object.memory !== null
        ? Number(object.memory)
        : 0;
    return message;
  },

  toJSON(message: Resources): unknown {
    const obj: any = {};
    message.memory !== undefined && (obj.memory = Math.round(message.memory));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Resources>, I>>(
    object: I
  ): Resources {
    const message = { ...baseResources } as Resources;
    message.memory = object.memory ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Resources.$type, Resources);

const basePackage: object = {
  $type: "yandex.cloud.serverless.functions.v1.Package",
  bucketName: "",
  objectName: "",
  sha256: "",
};

export const Package = {
  $type: "yandex.cloud.serverless.functions.v1.Package" as const,

  encode(
    message: Package,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bucketName !== "") {
      writer.uint32(10).string(message.bucketName);
    }
    if (message.objectName !== "") {
      writer.uint32(18).string(message.objectName);
    }
    if (message.sha256 !== "") {
      writer.uint32(26).string(message.sha256);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Package {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePackage } as Package;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucketName = reader.string();
          break;
        case 2:
          message.objectName = reader.string();
          break;
        case 3:
          message.sha256 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Package {
    const message = { ...basePackage } as Package;
    message.bucketName =
      object.bucketName !== undefined && object.bucketName !== null
        ? String(object.bucketName)
        : "";
    message.objectName =
      object.objectName !== undefined && object.objectName !== null
        ? String(object.objectName)
        : "";
    message.sha256 =
      object.sha256 !== undefined && object.sha256 !== null
        ? String(object.sha256)
        : "";
    return message;
  },

  toJSON(message: Package): unknown {
    const obj: any = {};
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.sha256 !== undefined && (obj.sha256 = message.sha256);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Package>, I>>(object: I): Package {
    const message = { ...basePackage } as Package;
    message.bucketName = object.bucketName ?? "";
    message.objectName = object.objectName ?? "";
    message.sha256 = object.sha256 ?? "";
    return message;
  },
};

messageTypeRegistry.set(Package.$type, Package);

const baseConnectivity: object = {
  $type: "yandex.cloud.serverless.functions.v1.Connectivity",
  networkId: "",
  subnetId: "",
};

export const Connectivity = {
  $type: "yandex.cloud.serverless.functions.v1.Connectivity" as const,

  encode(
    message: Connectivity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkId !== "") {
      writer.uint32(10).string(message.networkId);
    }
    for (const v of message.subnetId) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Connectivity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConnectivity } as Connectivity;
    message.subnetId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkId = reader.string();
          break;
        case 2:
          message.subnetId.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Connectivity {
    const message = { ...baseConnectivity } as Connectivity;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.subnetId = (object.subnetId ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: Connectivity): unknown {
    const obj: any = {};
    message.networkId !== undefined && (obj.networkId = message.networkId);
    if (message.subnetId) {
      obj.subnetId = message.subnetId.map((e) => e);
    } else {
      obj.subnetId = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Connectivity>, I>>(
    object: I
  ): Connectivity {
    const message = { ...baseConnectivity } as Connectivity;
    message.networkId = object.networkId ?? "";
    message.subnetId = object.subnetId?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Connectivity.$type, Connectivity);

const baseScalingPolicy: object = {
  $type: "yandex.cloud.serverless.functions.v1.ScalingPolicy",
  functionId: "",
  tag: "",
  provisionedInstancesCount: 0,
  zoneInstancesLimit: 0,
  zoneRequestsLimit: 0,
};

export const ScalingPolicy = {
  $type: "yandex.cloud.serverless.functions.v1.ScalingPolicy" as const,

  encode(
    message: ScalingPolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    if (message.tag !== "") {
      writer.uint32(18).string(message.tag);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.modifiedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.modifiedAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.provisionedInstancesCount !== 0) {
      writer.uint32(48).int64(message.provisionedInstancesCount);
    }
    if (message.zoneInstancesLimit !== 0) {
      writer.uint32(56).int64(message.zoneInstancesLimit);
    }
    if (message.zoneRequestsLimit !== 0) {
      writer.uint32(64).int64(message.zoneRequestsLimit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScalingPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseScalingPolicy } as ScalingPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionId = reader.string();
          break;
        case 2:
          message.tag = reader.string();
          break;
        case 3:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.modifiedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.provisionedInstancesCount = longToNumber(
            reader.int64() as Long
          );
          break;
        case 7:
          message.zoneInstancesLimit = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.zoneRequestsLimit = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScalingPolicy {
    const message = { ...baseScalingPolicy } as ScalingPolicy;
    message.functionId =
      object.functionId !== undefined && object.functionId !== null
        ? String(object.functionId)
        : "";
    message.tag =
      object.tag !== undefined && object.tag !== null ? String(object.tag) : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.modifiedAt =
      object.modifiedAt !== undefined && object.modifiedAt !== null
        ? fromJsonTimestamp(object.modifiedAt)
        : undefined;
    message.provisionedInstancesCount =
      object.provisionedInstancesCount !== undefined &&
      object.provisionedInstancesCount !== null
        ? Number(object.provisionedInstancesCount)
        : 0;
    message.zoneInstancesLimit =
      object.zoneInstancesLimit !== undefined &&
      object.zoneInstancesLimit !== null
        ? Number(object.zoneInstancesLimit)
        : 0;
    message.zoneRequestsLimit =
      object.zoneRequestsLimit !== undefined &&
      object.zoneRequestsLimit !== null
        ? Number(object.zoneRequestsLimit)
        : 0;
    return message;
  },

  toJSON(message: ScalingPolicy): unknown {
    const obj: any = {};
    message.functionId !== undefined && (obj.functionId = message.functionId);
    message.tag !== undefined && (obj.tag = message.tag);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.modifiedAt !== undefined &&
      (obj.modifiedAt = message.modifiedAt.toISOString());
    message.provisionedInstancesCount !== undefined &&
      (obj.provisionedInstancesCount = Math.round(
        message.provisionedInstancesCount
      ));
    message.zoneInstancesLimit !== undefined &&
      (obj.zoneInstancesLimit = Math.round(message.zoneInstancesLimit));
    message.zoneRequestsLimit !== undefined &&
      (obj.zoneRequestsLimit = Math.round(message.zoneRequestsLimit));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScalingPolicy>, I>>(
    object: I
  ): ScalingPolicy {
    const message = { ...baseScalingPolicy } as ScalingPolicy;
    message.functionId = object.functionId ?? "";
    message.tag = object.tag ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.modifiedAt = object.modifiedAt ?? undefined;
    message.provisionedInstancesCount = object.provisionedInstancesCount ?? 0;
    message.zoneInstancesLimit = object.zoneInstancesLimit ?? 0;
    message.zoneRequestsLimit = object.zoneRequestsLimit ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ScalingPolicy.$type, ScalingPolicy);

const baseSecret: object = {
  $type: "yandex.cloud.serverless.functions.v1.Secret",
  id: "",
  versionId: "",
  key: "",
};

export const Secret = {
  $type: "yandex.cloud.serverless.functions.v1.Secret" as const,

  encode(
    message: Secret,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    if (message.environmentVariable !== undefined) {
      writer.uint32(34).string(message.environmentVariable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Secret {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSecret } as Secret;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.versionId = reader.string();
          break;
        case 3:
          message.key = reader.string();
          break;
        case 4:
          message.environmentVariable = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Secret {
    const message = { ...baseSecret } as Secret;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.versionId =
      object.versionId !== undefined && object.versionId !== null
        ? String(object.versionId)
        : "";
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.environmentVariable =
      object.environmentVariable !== undefined &&
      object.environmentVariable !== null
        ? String(object.environmentVariable)
        : undefined;
    return message;
  },

  toJSON(message: Secret): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    message.key !== undefined && (obj.key = message.key);
    message.environmentVariable !== undefined &&
      (obj.environmentVariable = message.environmentVariable);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Secret>, I>>(object: I): Secret {
    const message = { ...baseSecret } as Secret;
    message.id = object.id ?? "";
    message.versionId = object.versionId ?? "";
    message.key = object.key ?? "";
    message.environmentVariable = object.environmentVariable ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Secret.$type, Secret);

const baseLogOptions: object = {
  $type: "yandex.cloud.serverless.functions.v1.LogOptions",
  disabled: false,
  minLevel: 0,
};

export const LogOptions = {
  $type: "yandex.cloud.serverless.functions.v1.LogOptions" as const,

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

const baseStorageMount: object = {
  $type: "yandex.cloud.serverless.functions.v1.StorageMount",
  bucketId: "",
  prefix: "",
  mountPointName: "",
  readOnly: false,
};

export const StorageMount = {
  $type: "yandex.cloud.serverless.functions.v1.StorageMount" as const,

  encode(
    message: StorageMount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bucketId !== "") {
      writer.uint32(10).string(message.bucketId);
    }
    if (message.prefix !== "") {
      writer.uint32(18).string(message.prefix);
    }
    if (message.mountPointName !== "") {
      writer.uint32(26).string(message.mountPointName);
    }
    if (message.readOnly === true) {
      writer.uint32(32).bool(message.readOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StorageMount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStorageMount } as StorageMount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucketId = reader.string();
          break;
        case 2:
          message.prefix = reader.string();
          break;
        case 3:
          message.mountPointName = reader.string();
          break;
        case 4:
          message.readOnly = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StorageMount {
    const message = { ...baseStorageMount } as StorageMount;
    message.bucketId =
      object.bucketId !== undefined && object.bucketId !== null
        ? String(object.bucketId)
        : "";
    message.prefix =
      object.prefix !== undefined && object.prefix !== null
        ? String(object.prefix)
        : "";
    message.mountPointName =
      object.mountPointName !== undefined && object.mountPointName !== null
        ? String(object.mountPointName)
        : "";
    message.readOnly =
      object.readOnly !== undefined && object.readOnly !== null
        ? Boolean(object.readOnly)
        : false;
    return message;
  },

  toJSON(message: StorageMount): unknown {
    const obj: any = {};
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.mountPointName !== undefined &&
      (obj.mountPointName = message.mountPointName);
    message.readOnly !== undefined && (obj.readOnly = message.readOnly);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StorageMount>, I>>(
    object: I
  ): StorageMount {
    const message = { ...baseStorageMount } as StorageMount;
    message.bucketId = object.bucketId ?? "";
    message.prefix = object.prefix ?? "";
    message.mountPointName = object.mountPointName ?? "";
    message.readOnly = object.readOnly ?? false;
    return message;
  },
};

messageTypeRegistry.set(StorageMount.$type, StorageMount);

const baseAsyncInvocationConfig: object = {
  $type: "yandex.cloud.serverless.functions.v1.AsyncInvocationConfig",
  retriesCount: 0,
  serviceAccountId: "",
};

export const AsyncInvocationConfig = {
  $type: "yandex.cloud.serverless.functions.v1.AsyncInvocationConfig" as const,

  encode(
    message: AsyncInvocationConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.retriesCount !== 0) {
      writer.uint32(8).int64(message.retriesCount);
    }
    if (message.successTarget !== undefined) {
      AsyncInvocationConfig_ResponseTarget.encode(
        message.successTarget,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.failureTarget !== undefined) {
      AsyncInvocationConfig_ResponseTarget.encode(
        message.failureTarget,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(34).string(message.serviceAccountId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AsyncInvocationConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAsyncInvocationConfig } as AsyncInvocationConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.retriesCount = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.successTarget = AsyncInvocationConfig_ResponseTarget.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.failureTarget = AsyncInvocationConfig_ResponseTarget.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.serviceAccountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AsyncInvocationConfig {
    const message = { ...baseAsyncInvocationConfig } as AsyncInvocationConfig;
    message.retriesCount =
      object.retriesCount !== undefined && object.retriesCount !== null
        ? Number(object.retriesCount)
        : 0;
    message.successTarget =
      object.successTarget !== undefined && object.successTarget !== null
        ? AsyncInvocationConfig_ResponseTarget.fromJSON(object.successTarget)
        : undefined;
    message.failureTarget =
      object.failureTarget !== undefined && object.failureTarget !== null
        ? AsyncInvocationConfig_ResponseTarget.fromJSON(object.failureTarget)
        : undefined;
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    return message;
  },

  toJSON(message: AsyncInvocationConfig): unknown {
    const obj: any = {};
    message.retriesCount !== undefined &&
      (obj.retriesCount = Math.round(message.retriesCount));
    message.successTarget !== undefined &&
      (obj.successTarget = message.successTarget
        ? AsyncInvocationConfig_ResponseTarget.toJSON(message.successTarget)
        : undefined);
    message.failureTarget !== undefined &&
      (obj.failureTarget = message.failureTarget
        ? AsyncInvocationConfig_ResponseTarget.toJSON(message.failureTarget)
        : undefined);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AsyncInvocationConfig>, I>>(
    object: I
  ): AsyncInvocationConfig {
    const message = { ...baseAsyncInvocationConfig } as AsyncInvocationConfig;
    message.retriesCount = object.retriesCount ?? 0;
    message.successTarget =
      object.successTarget !== undefined && object.successTarget !== null
        ? AsyncInvocationConfig_ResponseTarget.fromPartial(object.successTarget)
        : undefined;
    message.failureTarget =
      object.failureTarget !== undefined && object.failureTarget !== null
        ? AsyncInvocationConfig_ResponseTarget.fromPartial(object.failureTarget)
        : undefined;
    message.serviceAccountId = object.serviceAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AsyncInvocationConfig.$type, AsyncInvocationConfig);

const baseAsyncInvocationConfig_ResponseTarget: object = {
  $type:
    "yandex.cloud.serverless.functions.v1.AsyncInvocationConfig.ResponseTarget",
};

export const AsyncInvocationConfig_ResponseTarget = {
  $type:
    "yandex.cloud.serverless.functions.v1.AsyncInvocationConfig.ResponseTarget" as const,

  encode(
    message: AsyncInvocationConfig_ResponseTarget,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.emptyTarget !== undefined) {
      EmptyTarget.encode(
        message.emptyTarget,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.ymqTarget !== undefined) {
      YMQTarget.encode(message.ymqTarget, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AsyncInvocationConfig_ResponseTarget {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAsyncInvocationConfig_ResponseTarget,
    } as AsyncInvocationConfig_ResponseTarget;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.emptyTarget = EmptyTarget.decode(reader, reader.uint32());
          break;
        case 2:
          message.ymqTarget = YMQTarget.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AsyncInvocationConfig_ResponseTarget {
    const message = {
      ...baseAsyncInvocationConfig_ResponseTarget,
    } as AsyncInvocationConfig_ResponseTarget;
    message.emptyTarget =
      object.emptyTarget !== undefined && object.emptyTarget !== null
        ? EmptyTarget.fromJSON(object.emptyTarget)
        : undefined;
    message.ymqTarget =
      object.ymqTarget !== undefined && object.ymqTarget !== null
        ? YMQTarget.fromJSON(object.ymqTarget)
        : undefined;
    return message;
  },

  toJSON(message: AsyncInvocationConfig_ResponseTarget): unknown {
    const obj: any = {};
    message.emptyTarget !== undefined &&
      (obj.emptyTarget = message.emptyTarget
        ? EmptyTarget.toJSON(message.emptyTarget)
        : undefined);
    message.ymqTarget !== undefined &&
      (obj.ymqTarget = message.ymqTarget
        ? YMQTarget.toJSON(message.ymqTarget)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AsyncInvocationConfig_ResponseTarget>, I>
  >(object: I): AsyncInvocationConfig_ResponseTarget {
    const message = {
      ...baseAsyncInvocationConfig_ResponseTarget,
    } as AsyncInvocationConfig_ResponseTarget;
    message.emptyTarget =
      object.emptyTarget !== undefined && object.emptyTarget !== null
        ? EmptyTarget.fromPartial(object.emptyTarget)
        : undefined;
    message.ymqTarget =
      object.ymqTarget !== undefined && object.ymqTarget !== null
        ? YMQTarget.fromPartial(object.ymqTarget)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  AsyncInvocationConfig_ResponseTarget.$type,
  AsyncInvocationConfig_ResponseTarget
);

const baseYMQTarget: object = {
  $type: "yandex.cloud.serverless.functions.v1.YMQTarget",
  queueArn: "",
  serviceAccountId: "",
};

export const YMQTarget = {
  $type: "yandex.cloud.serverless.functions.v1.YMQTarget" as const,

  encode(
    message: YMQTarget,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.queueArn !== "") {
      writer.uint32(10).string(message.queueArn);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(18).string(message.serviceAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): YMQTarget {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseYMQTarget } as YMQTarget;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queueArn = reader.string();
          break;
        case 2:
          message.serviceAccountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): YMQTarget {
    const message = { ...baseYMQTarget } as YMQTarget;
    message.queueArn =
      object.queueArn !== undefined && object.queueArn !== null
        ? String(object.queueArn)
        : "";
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    return message;
  },

  toJSON(message: YMQTarget): unknown {
    const obj: any = {};
    message.queueArn !== undefined && (obj.queueArn = message.queueArn);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<YMQTarget>, I>>(
    object: I
  ): YMQTarget {
    const message = { ...baseYMQTarget } as YMQTarget;
    message.queueArn = object.queueArn ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(YMQTarget.$type, YMQTarget);

const baseEmptyTarget: object = {
  $type: "yandex.cloud.serverless.functions.v1.EmptyTarget",
};

export const EmptyTarget = {
  $type: "yandex.cloud.serverless.functions.v1.EmptyTarget" as const,

  encode(_: EmptyTarget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EmptyTarget {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEmptyTarget } as EmptyTarget;
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

  fromJSON(_: any): EmptyTarget {
    const message = { ...baseEmptyTarget } as EmptyTarget;
    return message;
  },

  toJSON(_: EmptyTarget): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EmptyTarget>, I>>(_: I): EmptyTarget {
    const message = { ...baseEmptyTarget } as EmptyTarget;
    return message;
  },
};

messageTypeRegistry.set(EmptyTarget.$type, EmptyTarget);

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
