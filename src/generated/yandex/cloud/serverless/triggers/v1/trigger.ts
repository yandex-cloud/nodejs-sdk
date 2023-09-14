/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../../../google/protobuf/duration";
import { Timestamp } from "../../../../../google/protobuf/timestamp";
import {
  LogLevel_Level,
  logLevel_LevelFromJSON,
  logLevel_LevelToJSON,
} from "../../../../../yandex/cloud/logging/v1/log_entry";

export const protobufPackage = "yandex.cloud.serverless.triggers.v1";

export enum TriggerType {
  TRIGGER_TYPE_UNSPECIFIED = 0,
  /** TIMER - The trigger is activated on a timer. */
  TIMER = 2,
  /**
   * MESSAGE_QUEUE - The trigger is activated by messages from a message queue.
   *
   * Only Message Queue is currently supported.
   */
  MESSAGE_QUEUE = 3,
  /** IOT_MESSAGE - The trigger is activated by messages from IoT Core. */
  IOT_MESSAGE = 4,
  IOT_BROKER_MESSAGE = 12,
  OBJECT_STORAGE = 5,
  CONTAINER_REGISTRY = 6,
  /** CLOUD_LOGS - The trigger is activated by cloud log group events */
  CLOUD_LOGS = 7,
  /** LOGGING - The trigger is activated by logging group events */
  LOGGING = 8,
  /** BILLING_BUDGET - The trigger is activated by billing events */
  BILLING_BUDGET = 9,
  /** YDS - The trigger is activated by YDS events */
  YDS = 10,
  /** MAIL - The trigger is activated by email */
  MAIL = 11,
  UNRECOGNIZED = -1,
}

export function triggerTypeFromJSON(object: any): TriggerType {
  switch (object) {
    case 0:
    case "TRIGGER_TYPE_UNSPECIFIED":
      return TriggerType.TRIGGER_TYPE_UNSPECIFIED;
    case 2:
    case "TIMER":
      return TriggerType.TIMER;
    case 3:
    case "MESSAGE_QUEUE":
      return TriggerType.MESSAGE_QUEUE;
    case 4:
    case "IOT_MESSAGE":
      return TriggerType.IOT_MESSAGE;
    case 12:
    case "IOT_BROKER_MESSAGE":
      return TriggerType.IOT_BROKER_MESSAGE;
    case 5:
    case "OBJECT_STORAGE":
      return TriggerType.OBJECT_STORAGE;
    case 6:
    case "CONTAINER_REGISTRY":
      return TriggerType.CONTAINER_REGISTRY;
    case 7:
    case "CLOUD_LOGS":
      return TriggerType.CLOUD_LOGS;
    case 8:
    case "LOGGING":
      return TriggerType.LOGGING;
    case 9:
    case "BILLING_BUDGET":
      return TriggerType.BILLING_BUDGET;
    case 10:
    case "YDS":
      return TriggerType.YDS;
    case 11:
    case "MAIL":
      return TriggerType.MAIL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TriggerType.UNRECOGNIZED;
  }
}

export function triggerTypeToJSON(object: TriggerType): string {
  switch (object) {
    case TriggerType.TRIGGER_TYPE_UNSPECIFIED:
      return "TRIGGER_TYPE_UNSPECIFIED";
    case TriggerType.TIMER:
      return "TIMER";
    case TriggerType.MESSAGE_QUEUE:
      return "MESSAGE_QUEUE";
    case TriggerType.IOT_MESSAGE:
      return "IOT_MESSAGE";
    case TriggerType.IOT_BROKER_MESSAGE:
      return "IOT_BROKER_MESSAGE";
    case TriggerType.OBJECT_STORAGE:
      return "OBJECT_STORAGE";
    case TriggerType.CONTAINER_REGISTRY:
      return "CONTAINER_REGISTRY";
    case TriggerType.CLOUD_LOGS:
      return "CLOUD_LOGS";
    case TriggerType.LOGGING:
      return "LOGGING";
    case TriggerType.BILLING_BUDGET:
      return "BILLING_BUDGET";
    case TriggerType.YDS:
      return "YDS";
    case TriggerType.MAIL:
      return "MAIL";
    default:
      return "UNKNOWN";
  }
}

/** A trigger to invoke a serverless function. For more information, see [Triggers](/docs/functions/concepts/trigger). */
export interface Trigger {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger";
  /** ID of the trigger. Generated at creation time. */
  id: string;
  /** ID of the folder that the trigger belongs to. */
  folderId: string;
  /** Creation timestamp for the trigger. */
  createdAt?: Date;
  /** Name of the trigger. */
  name: string;
  /** Description of the trigger. */
  description: string;
  /** Trigger labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Rule for trigger activation (always consistent with the trigger type). */
  rule?: Trigger_Rule;
  /** Trigger status. */
  status: Trigger_Status;
}

export enum Trigger_ObjectStorageEventType {
  OBJECT_STORAGE_EVENT_TYPE_UNSPECIFIED = 0,
  OBJECT_STORAGE_EVENT_TYPE_CREATE_OBJECT = 1,
  OBJECT_STORAGE_EVENT_TYPE_UPDATE_OBJECT = 2,
  OBJECT_STORAGE_EVENT_TYPE_DELETE_OBJECT = 3,
  UNRECOGNIZED = -1,
}

export function trigger_ObjectStorageEventTypeFromJSON(
  object: any
): Trigger_ObjectStorageEventType {
  switch (object) {
    case 0:
    case "OBJECT_STORAGE_EVENT_TYPE_UNSPECIFIED":
      return Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_UNSPECIFIED;
    case 1:
    case "OBJECT_STORAGE_EVENT_TYPE_CREATE_OBJECT":
      return Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_CREATE_OBJECT;
    case 2:
    case "OBJECT_STORAGE_EVENT_TYPE_UPDATE_OBJECT":
      return Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_UPDATE_OBJECT;
    case 3:
    case "OBJECT_STORAGE_EVENT_TYPE_DELETE_OBJECT":
      return Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_DELETE_OBJECT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Trigger_ObjectStorageEventType.UNRECOGNIZED;
  }
}

export function trigger_ObjectStorageEventTypeToJSON(
  object: Trigger_ObjectStorageEventType
): string {
  switch (object) {
    case Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_UNSPECIFIED:
      return "OBJECT_STORAGE_EVENT_TYPE_UNSPECIFIED";
    case Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_CREATE_OBJECT:
      return "OBJECT_STORAGE_EVENT_TYPE_CREATE_OBJECT";
    case Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_UPDATE_OBJECT:
      return "OBJECT_STORAGE_EVENT_TYPE_UPDATE_OBJECT";
    case Trigger_ObjectStorageEventType.OBJECT_STORAGE_EVENT_TYPE_DELETE_OBJECT:
      return "OBJECT_STORAGE_EVENT_TYPE_DELETE_OBJECT";
    default:
      return "UNKNOWN";
  }
}

export enum Trigger_ContainerRegistryEventType {
  CONTAINER_REGISTRY_EVENT_TYPE_UNSPECIFIED = 0,
  CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE = 1,
  CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE = 2,
  CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE_TAG = 3,
  CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE_TAG = 4,
  UNRECOGNIZED = -1,
}

export function trigger_ContainerRegistryEventTypeFromJSON(
  object: any
): Trigger_ContainerRegistryEventType {
  switch (object) {
    case 0:
    case "CONTAINER_REGISTRY_EVENT_TYPE_UNSPECIFIED":
      return Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_UNSPECIFIED;
    case 1:
    case "CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE":
      return Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE;
    case 2:
    case "CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE":
      return Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE;
    case 3:
    case "CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE_TAG":
      return Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE_TAG;
    case 4:
    case "CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE_TAG":
      return Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE_TAG;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Trigger_ContainerRegistryEventType.UNRECOGNIZED;
  }
}

export function trigger_ContainerRegistryEventTypeToJSON(
  object: Trigger_ContainerRegistryEventType
): string {
  switch (object) {
    case Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_UNSPECIFIED:
      return "CONTAINER_REGISTRY_EVENT_TYPE_UNSPECIFIED";
    case Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE:
      return "CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE";
    case Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE:
      return "CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE";
    case Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE_TAG:
      return "CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE_TAG";
    case Trigger_ContainerRegistryEventType.CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE_TAG:
      return "CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE_TAG";
    default:
      return "UNKNOWN";
  }
}

export enum Trigger_Status {
  STATUS_UNSPECIFIED = 0,
  ACTIVE = 1,
  PAUSED = 2,
  UNRECOGNIZED = -1,
}

export function trigger_StatusFromJSON(object: any): Trigger_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Trigger_Status.STATUS_UNSPECIFIED;
    case 1:
    case "ACTIVE":
      return Trigger_Status.ACTIVE;
    case 2:
    case "PAUSED":
      return Trigger_Status.PAUSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Trigger_Status.UNRECOGNIZED;
  }
}

export function trigger_StatusToJSON(object: Trigger_Status): string {
  switch (object) {
    case Trigger_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Trigger_Status.ACTIVE:
      return "ACTIVE";
    case Trigger_Status.PAUSED:
      return "PAUSED";
    default:
      return "UNKNOWN";
  }
}

export interface Trigger_LabelsEntry {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.LabelsEntry";
  key: string;
  value: string;
}

/** Description of a rule for trigger activation. */
export interface Trigger_Rule {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.Rule";
  /** Rule for a timed trigger. */
  timer?: Trigger_Timer | undefined;
  /** Rule for a message queue trigger. */
  messageQueue?: Trigger_MessageQueue | undefined;
  /** Rule for a IoT Core trigger. */
  iotMessage?: Trigger_IoTMessage | undefined;
  iotBrokerMessage?: Trigger_IoTBrokerMessage | undefined;
  objectStorage?: Trigger_ObjectStorage | undefined;
  containerRegistry?: Trigger_ContainerRegistry | undefined;
  cloudLogs?: Trigger_CloudLogs | undefined;
  logging?: Trigger_Logging | undefined;
  billingBudget?: BillingBudget | undefined;
  dataStream?: DataStream | undefined;
  mail?: Mail | undefined;
}

/** Rule for activating a timed trigger. */
export interface Trigger_Timer {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.Timer";
  /** Description of a schedule as a [cron expression](/docs/functions/concepts/trigger/timer). */
  cronExpression: string;
  /** Payload to be passed to function. */
  payload: string;
  /** Instructions for invoking a function once. */
  invokeFunction?: InvokeFunctionOnce | undefined;
  /** Instructions for invoking a function with retry. */
  invokeFunctionWithRetry?: InvokeFunctionWithRetry | undefined;
  /** Instructions for invoking a container with retry. */
  invokeContainerWithRetry?: InvokeContainerWithRetry | undefined;
}

/** Rule for activating a message queue trigger. */
export interface Trigger_MessageQueue {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.MessageQueue";
  /** ID of the message queue in Message Queue. */
  queueId: string;
  /** ID of the service account which has read access to the message queue. */
  serviceAccountId: string;
  /** Batch settings for processing messages in the queue. */
  batchSettings?: BatchSettings;
  /** Queue visibility timeout override. */
  visibilityTimeout?: Duration;
  /** Instructions for invoking a function once. */
  invokeFunction?: InvokeFunctionOnce | undefined;
  /** Instructions for invoking a container once. */
  invokeContainer?: InvokeContainerOnce | undefined;
}

/** Rule for activating a IoT Core trigger. */
export interface Trigger_IoTMessage {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.IoTMessage";
  /** ID of the IoT Core registry. */
  registryId: string;
  /** ID of the IoT Core device in the registry. */
  deviceId: string;
  /** MQTT topic whose messages activate the trigger. */
  mqttTopic: string;
  /** Batch settings for processing events. */
  batchSettings?: BatchSettings;
  /** Instructions for invoking a function with retries as needed. */
  invokeFunction?: InvokeFunctionWithRetry | undefined;
  /** Instructions for invoking a container with retries as needed. */
  invokeContainer?: InvokeContainerWithRetry | undefined;
}

/** Rule for activating a IoT Core Broker trigger. */
export interface Trigger_IoTBrokerMessage {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.IoTBrokerMessage";
  /** ID of the IoT Core broker. */
  brokerId: string;
  /** MQTT topic whose messages activate the trigger. */
  mqttTopic: string;
  /** Batch settings for processing events. */
  batchSettings?: BatchSettings;
  /** Instructions for invoking a function with retries as needed. */
  invokeFunction?: InvokeFunctionWithRetry | undefined;
  /** Instructions for invoking a container with retries as needed. */
  invokeContainer?: InvokeContainerWithRetry | undefined;
}

export interface Trigger_ObjectStorage {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.ObjectStorage";
  /** Type (name) of events, at least one value is required. */
  eventType: Trigger_ObjectStorageEventType[];
  /** ID of the bucket. */
  bucketId: string;
  /** Prefix of the object key. Filter, optional. */
  prefix: string;
  /** Suffix of the object key. Filter, optional. */
  suffix: string;
  /** Batch settings for processing events. */
  batchSettings?: BatchSettings;
  /** Instructions for invoking a function with retries as needed. */
  invokeFunction?: InvokeFunctionWithRetry | undefined;
  /** Instructions for invoking a container with retries as needed. */
  invokeContainer?: InvokeContainerWithRetry | undefined;
}

export interface Trigger_ContainerRegistry {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.ContainerRegistry";
  /** Type (name) of events, at least one value is required. */
  eventType: Trigger_ContainerRegistryEventType[];
  /** ID of the registry. */
  registryId: string;
  /** Docker-image name. Filter, optional. */
  imageName: string;
  /** Docker-image tag. Filter, optional. */
  tag: string;
  /** Batch settings for processing events. */
  batchSettings?: BatchSettings;
  /** Instructions for invoking a function with retries as needed. */
  invokeFunction?: InvokeFunctionWithRetry | undefined;
  /** Instructions for invoking a container with retries as needed. */
  invokeContainer?: InvokeContainerWithRetry | undefined;
}

export interface Trigger_CloudLogs {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.CloudLogs";
  /** Log group identifiers, at least one value is required. */
  logGroupId: string[];
  /** Batch settings for processing log events. */
  batchSettings?: CloudLogsBatchSettings;
  /** Instructions for invoking a function with retries as needed. */
  invokeFunction?: InvokeFunctionWithRetry | undefined;
  /** Instructions for invoking a container with retries as needed. */
  invokeContainer?: InvokeContainerWithRetry | undefined;
}

export interface Trigger_Logging {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.Logging";
  /** Log events filter settings. */
  logGroupId: string;
  resourceType: string[];
  resourceId: string[];
  streamName: string[];
  levels: LogLevel_Level[];
  /** Batch settings for processing log events. */
  batchSettings?: LoggingBatchSettings;
  /** Instructions for invoking a function with retries as needed. */
  invokeFunction?: InvokeFunctionWithRetry | undefined;
  /** Instructions for invoking a container with retries as needed. */
  invokeContainer?: InvokeContainerWithRetry | undefined;
}

/** A single function invocation. */
export interface InvokeFunctionOnce {
  $type: "yandex.cloud.serverless.triggers.v1.InvokeFunctionOnce";
  /** ID of the function to invoke. */
  functionId: string;
  /** Version tag of the function to execute. */
  functionTag: string;
  /** ID of the service account that should be used to invoke the function. */
  serviceAccountId: string;
}

/** A function invocation with retries. */
export interface InvokeFunctionWithRetry {
  $type: "yandex.cloud.serverless.triggers.v1.InvokeFunctionWithRetry";
  /** ID of the function to invoke. */
  functionId: string;
  /** Version tag of the function to execute. */
  functionTag: string;
  /** ID of the service account which has permission to invoke the function. */
  serviceAccountId: string;
  /** Retry policy. If the field is not specified, or the value is empty, no retries will be attempted. */
  retrySettings?: RetrySettings;
  /** DLQ policy (no value means discarding a message). */
  deadLetterQueue?: PutQueueMessage;
}

/** A single container invocation. */
export interface InvokeContainerOnce {
  $type: "yandex.cloud.serverless.triggers.v1.InvokeContainerOnce";
  /** ID of the container to invoke. */
  containerId: string;
  /** Endpoint HTTP path to invoke. */
  path: string;
  /** ID of the service account which has permission to invoke the container. */
  serviceAccountId: string;
}

/** A container invocation with retries. */
export interface InvokeContainerWithRetry {
  $type: "yandex.cloud.serverless.triggers.v1.InvokeContainerWithRetry";
  /** ID of the container to invoke. */
  containerId: string;
  /** Endpoint HTTP path to invoke. */
  path: string;
  /** ID of the service account which has permission to invoke the container. */
  serviceAccountId: string;
  /** Retry policy. If the field is not specified, or the value is empty, no retries will be attempted. */
  retrySettings?: RetrySettings;
  /** DLQ policy (no value means discarding a message). */
  deadLetterQueue?: PutQueueMessage;
}

export interface PutQueueMessage {
  $type: "yandex.cloud.serverless.triggers.v1.PutQueueMessage";
  /** ID of the queue. */
  queueId: string;
  /** Service account which has write permission on the queue. */
  serviceAccountId: string;
}

/** Settings for batch processing of messages in a queue. */
export interface BatchSettings {
  $type: "yandex.cloud.serverless.triggers.v1.BatchSettings";
  /**
   * Batch size. Trigger will send the batch of messages to the function
   * when the number of messages in the queue reaches [size], or the [cutoff] time has passed.
   */
  size: number;
  /**
   * Maximum wait time. Trigger will send the batch of messages to the function when
   * the number of messages in the queue reaches [size], or the [cutoff] time has passed.
   */
  cutoff?: Duration;
}

export interface CloudLogsBatchSettings {
  $type: "yandex.cloud.serverless.triggers.v1.CloudLogsBatchSettings";
  /**
   * Batch size. Trigger will send the batch of messages to the function
   * when the number of messages in the log group reaches [size], or the [cutoff] time has passed.
   */
  size: number;
  /**
   * Maximum wait time. Trigger will send the batch of messages to the function when
   * the number of messages in the log group reaches [size], or the [cutoff] time has passed.
   */
  cutoff?: Duration;
}

export interface LoggingBatchSettings {
  $type: "yandex.cloud.serverless.triggers.v1.LoggingBatchSettings";
  /**
   * Batch size. Trigger will send the batch of messages to the associated function
   * when the number of log events reaches this value, or the [cutoff] time has passed.
   */
  size: number;
  /**
   * Maximum wait time. Trigger will send the batch of messages the time since the last batch
   * exceeds the `cutoff` value, regardless of the amount of log events.
   */
  cutoff?: Duration;
}

/** Settings for retrying to invoke a function. */
export interface RetrySettings {
  $type: "yandex.cloud.serverless.triggers.v1.RetrySettings";
  /** Maximum number of retries (extra invokes) before the action is considered failed. */
  retryAttempts: number;
  /** Time in seconds to wait between individual retries. */
  interval?: Duration;
}

export interface BillingBudget {
  $type: "yandex.cloud.serverless.triggers.v1.BillingBudget";
  billingAccountId: string;
  budgetId: string;
  invokeFunction?: InvokeFunctionWithRetry | undefined;
  invokeContainer?: InvokeContainerWithRetry | undefined;
}

export interface DataStreamBatchSettings {
  $type: "yandex.cloud.serverless.triggers.v1.DataStreamBatchSettings";
  /**
   * Batch size in bytes. Trigger will send the batch of messages to the associated function
   * when size of log events reaches this value, or the [cutoff] time has passed.
   */
  size: number;
  /**
   * Maximum wait time. Trigger will send the batch of messages the time since the last batch
   * exceeds the `cutoff` value, regardless of the amount of log events.
   */
  cutoff?: Duration;
}

export interface DataStream {
  $type: "yandex.cloud.serverless.triggers.v1.DataStream";
  /** Data stream endpoint. */
  endpoint: string;
  /** Data stream database. */
  database: string;
  /** Stream name. */
  stream: string;
  /** ID of the service account which has permission to read data stream. */
  serviceAccountId: string;
  /** Batch settings for processing events. */
  batchSettings?: DataStreamBatchSettings;
  invokeFunction?: InvokeFunctionWithRetry | undefined;
  invokeContainer?: InvokeContainerWithRetry | undefined;
}

export interface ObjectStorageBucketSettings {
  $type: "yandex.cloud.serverless.triggers.v1.ObjectStorageBucketSettings";
  /** Bucket for saving. */
  bucketId: string;
  /** SA which has write permission on storage. */
  serviceAccountId: string;
}

export interface Mail {
  $type: "yandex.cloud.serverless.triggers.v1.Mail";
  /**
   * Address to receive emails for trigger activation.
   * Field is ignored for write requests and populated on trigger creation.
   */
  email: string;
  /** Batch settings for processing events. */
  batchSettings?: BatchSettings;
  /** Bucket settings for saving attachments. */
  attachmentsBucket?: ObjectStorageBucketSettings;
  invokeFunction?: InvokeFunctionWithRetry | undefined;
  invokeContainer?: InvokeContainerWithRetry | undefined;
}

const baseTrigger: object = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger",
  id: "",
  folderId: "",
  name: "",
  description: "",
  status: 0,
};

export const Trigger = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger" as const,

  encode(
    message: Trigger,
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
      Trigger_LabelsEntry.encode(
        {
          $type: "yandex.cloud.serverless.triggers.v1.Trigger.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.rule !== undefined) {
      Trigger_Rule.encode(message.rule, writer.uint32(66).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTrigger } as Trigger;
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
          const entry6 = Trigger_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 8:
          message.rule = Trigger_Rule.decode(reader, reader.uint32());
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

  fromJSON(object: any): Trigger {
    const message = { ...baseTrigger } as Trigger;
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
    message.rule =
      object.rule !== undefined && object.rule !== null
        ? Trigger_Rule.fromJSON(object.rule)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? trigger_StatusFromJSON(object.status)
        : 0;
    return message;
  },

  toJSON(message: Trigger): unknown {
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
    message.rule !== undefined &&
      (obj.rule = message.rule ? Trigger_Rule.toJSON(message.rule) : undefined);
    message.status !== undefined &&
      (obj.status = trigger_StatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Trigger>, I>>(object: I): Trigger {
    const message = { ...baseTrigger } as Trigger;
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
    message.rule =
      object.rule !== undefined && object.rule !== null
        ? Trigger_Rule.fromPartial(object.rule)
        : undefined;
    message.status = object.status ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Trigger.$type, Trigger);

const baseTrigger_LabelsEntry: object = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.LabelsEntry",
  key: "",
  value: "",
};

export const Trigger_LabelsEntry = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.LabelsEntry" as const,

  encode(
    message: Trigger_LabelsEntry,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTrigger_LabelsEntry } as Trigger_LabelsEntry;
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

  fromJSON(object: any): Trigger_LabelsEntry {
    const message = { ...baseTrigger_LabelsEntry } as Trigger_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Trigger_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Trigger_LabelsEntry>, I>>(
    object: I
  ): Trigger_LabelsEntry {
    const message = { ...baseTrigger_LabelsEntry } as Trigger_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Trigger_LabelsEntry.$type, Trigger_LabelsEntry);

const baseTrigger_Rule: object = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.Rule",
};

export const Trigger_Rule = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.Rule" as const,

  encode(
    message: Trigger_Rule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timer !== undefined) {
      Trigger_Timer.encode(message.timer, writer.uint32(18).fork()).ldelim();
    }
    if (message.messageQueue !== undefined) {
      Trigger_MessageQueue.encode(
        message.messageQueue,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.iotMessage !== undefined) {
      Trigger_IoTMessage.encode(
        message.iotMessage,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.iotBrokerMessage !== undefined) {
      Trigger_IoTBrokerMessage.encode(
        message.iotBrokerMessage,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.objectStorage !== undefined) {
      Trigger_ObjectStorage.encode(
        message.objectStorage,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.containerRegistry !== undefined) {
      Trigger_ContainerRegistry.encode(
        message.containerRegistry,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.cloudLogs !== undefined) {
      Trigger_CloudLogs.encode(
        message.cloudLogs,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.logging !== undefined) {
      Trigger_Logging.encode(
        message.logging,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.billingBudget !== undefined) {
      BillingBudget.encode(
        message.billingBudget,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.dataStream !== undefined) {
      DataStream.encode(message.dataStream, writer.uint32(98).fork()).ldelim();
    }
    if (message.mail !== undefined) {
      Mail.encode(message.mail, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger_Rule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTrigger_Rule } as Trigger_Rule;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.timer = Trigger_Timer.decode(reader, reader.uint32());
          break;
        case 3:
          message.messageQueue = Trigger_MessageQueue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.iotMessage = Trigger_IoTMessage.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.iotBrokerMessage = Trigger_IoTBrokerMessage.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.objectStorage = Trigger_ObjectStorage.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.containerRegistry = Trigger_ContainerRegistry.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.cloudLogs = Trigger_CloudLogs.decode(reader, reader.uint32());
          break;
        case 10:
          message.logging = Trigger_Logging.decode(reader, reader.uint32());
          break;
        case 11:
          message.billingBudget = BillingBudget.decode(reader, reader.uint32());
          break;
        case 12:
          message.dataStream = DataStream.decode(reader, reader.uint32());
          break;
        case 13:
          message.mail = Mail.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Trigger_Rule {
    const message = { ...baseTrigger_Rule } as Trigger_Rule;
    message.timer =
      object.timer !== undefined && object.timer !== null
        ? Trigger_Timer.fromJSON(object.timer)
        : undefined;
    message.messageQueue =
      object.messageQueue !== undefined && object.messageQueue !== null
        ? Trigger_MessageQueue.fromJSON(object.messageQueue)
        : undefined;
    message.iotMessage =
      object.iotMessage !== undefined && object.iotMessage !== null
        ? Trigger_IoTMessage.fromJSON(object.iotMessage)
        : undefined;
    message.iotBrokerMessage =
      object.iotBrokerMessage !== undefined && object.iotBrokerMessage !== null
        ? Trigger_IoTBrokerMessage.fromJSON(object.iotBrokerMessage)
        : undefined;
    message.objectStorage =
      object.objectStorage !== undefined && object.objectStorage !== null
        ? Trigger_ObjectStorage.fromJSON(object.objectStorage)
        : undefined;
    message.containerRegistry =
      object.containerRegistry !== undefined &&
      object.containerRegistry !== null
        ? Trigger_ContainerRegistry.fromJSON(object.containerRegistry)
        : undefined;
    message.cloudLogs =
      object.cloudLogs !== undefined && object.cloudLogs !== null
        ? Trigger_CloudLogs.fromJSON(object.cloudLogs)
        : undefined;
    message.logging =
      object.logging !== undefined && object.logging !== null
        ? Trigger_Logging.fromJSON(object.logging)
        : undefined;
    message.billingBudget =
      object.billingBudget !== undefined && object.billingBudget !== null
        ? BillingBudget.fromJSON(object.billingBudget)
        : undefined;
    message.dataStream =
      object.dataStream !== undefined && object.dataStream !== null
        ? DataStream.fromJSON(object.dataStream)
        : undefined;
    message.mail =
      object.mail !== undefined && object.mail !== null
        ? Mail.fromJSON(object.mail)
        : undefined;
    return message;
  },

  toJSON(message: Trigger_Rule): unknown {
    const obj: any = {};
    message.timer !== undefined &&
      (obj.timer = message.timer
        ? Trigger_Timer.toJSON(message.timer)
        : undefined);
    message.messageQueue !== undefined &&
      (obj.messageQueue = message.messageQueue
        ? Trigger_MessageQueue.toJSON(message.messageQueue)
        : undefined);
    message.iotMessage !== undefined &&
      (obj.iotMessage = message.iotMessage
        ? Trigger_IoTMessage.toJSON(message.iotMessage)
        : undefined);
    message.iotBrokerMessage !== undefined &&
      (obj.iotBrokerMessage = message.iotBrokerMessage
        ? Trigger_IoTBrokerMessage.toJSON(message.iotBrokerMessage)
        : undefined);
    message.objectStorage !== undefined &&
      (obj.objectStorage = message.objectStorage
        ? Trigger_ObjectStorage.toJSON(message.objectStorage)
        : undefined);
    message.containerRegistry !== undefined &&
      (obj.containerRegistry = message.containerRegistry
        ? Trigger_ContainerRegistry.toJSON(message.containerRegistry)
        : undefined);
    message.cloudLogs !== undefined &&
      (obj.cloudLogs = message.cloudLogs
        ? Trigger_CloudLogs.toJSON(message.cloudLogs)
        : undefined);
    message.logging !== undefined &&
      (obj.logging = message.logging
        ? Trigger_Logging.toJSON(message.logging)
        : undefined);
    message.billingBudget !== undefined &&
      (obj.billingBudget = message.billingBudget
        ? BillingBudget.toJSON(message.billingBudget)
        : undefined);
    message.dataStream !== undefined &&
      (obj.dataStream = message.dataStream
        ? DataStream.toJSON(message.dataStream)
        : undefined);
    message.mail !== undefined &&
      (obj.mail = message.mail ? Mail.toJSON(message.mail) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Trigger_Rule>, I>>(
    object: I
  ): Trigger_Rule {
    const message = { ...baseTrigger_Rule } as Trigger_Rule;
    message.timer =
      object.timer !== undefined && object.timer !== null
        ? Trigger_Timer.fromPartial(object.timer)
        : undefined;
    message.messageQueue =
      object.messageQueue !== undefined && object.messageQueue !== null
        ? Trigger_MessageQueue.fromPartial(object.messageQueue)
        : undefined;
    message.iotMessage =
      object.iotMessage !== undefined && object.iotMessage !== null
        ? Trigger_IoTMessage.fromPartial(object.iotMessage)
        : undefined;
    message.iotBrokerMessage =
      object.iotBrokerMessage !== undefined && object.iotBrokerMessage !== null
        ? Trigger_IoTBrokerMessage.fromPartial(object.iotBrokerMessage)
        : undefined;
    message.objectStorage =
      object.objectStorage !== undefined && object.objectStorage !== null
        ? Trigger_ObjectStorage.fromPartial(object.objectStorage)
        : undefined;
    message.containerRegistry =
      object.containerRegistry !== undefined &&
      object.containerRegistry !== null
        ? Trigger_ContainerRegistry.fromPartial(object.containerRegistry)
        : undefined;
    message.cloudLogs =
      object.cloudLogs !== undefined && object.cloudLogs !== null
        ? Trigger_CloudLogs.fromPartial(object.cloudLogs)
        : undefined;
    message.logging =
      object.logging !== undefined && object.logging !== null
        ? Trigger_Logging.fromPartial(object.logging)
        : undefined;
    message.billingBudget =
      object.billingBudget !== undefined && object.billingBudget !== null
        ? BillingBudget.fromPartial(object.billingBudget)
        : undefined;
    message.dataStream =
      object.dataStream !== undefined && object.dataStream !== null
        ? DataStream.fromPartial(object.dataStream)
        : undefined;
    message.mail =
      object.mail !== undefined && object.mail !== null
        ? Mail.fromPartial(object.mail)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Trigger_Rule.$type, Trigger_Rule);

const baseTrigger_Timer: object = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.Timer",
  cronExpression: "",
  payload: "",
};

export const Trigger_Timer = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.Timer" as const,

  encode(
    message: Trigger_Timer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cronExpression !== "") {
      writer.uint32(10).string(message.cronExpression);
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    if (message.invokeFunction !== undefined) {
      InvokeFunctionOnce.encode(
        message.invokeFunction,
        writer.uint32(810).fork()
      ).ldelim();
    }
    if (message.invokeFunctionWithRetry !== undefined) {
      InvokeFunctionWithRetry.encode(
        message.invokeFunctionWithRetry,
        writer.uint32(826).fork()
      ).ldelim();
    }
    if (message.invokeContainerWithRetry !== undefined) {
      InvokeContainerWithRetry.encode(
        message.invokeContainerWithRetry,
        writer.uint32(834).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger_Timer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTrigger_Timer } as Trigger_Timer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cronExpression = reader.string();
          break;
        case 2:
          message.payload = reader.string();
          break;
        case 101:
          message.invokeFunction = InvokeFunctionOnce.decode(
            reader,
            reader.uint32()
          );
          break;
        case 103:
          message.invokeFunctionWithRetry = InvokeFunctionWithRetry.decode(
            reader,
            reader.uint32()
          );
          break;
        case 104:
          message.invokeContainerWithRetry = InvokeContainerWithRetry.decode(
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

  fromJSON(object: any): Trigger_Timer {
    const message = { ...baseTrigger_Timer } as Trigger_Timer;
    message.cronExpression =
      object.cronExpression !== undefined && object.cronExpression !== null
        ? String(object.cronExpression)
        : "";
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? String(object.payload)
        : "";
    message.invokeFunction =
      object.invokeFunction !== undefined && object.invokeFunction !== null
        ? InvokeFunctionOnce.fromJSON(object.invokeFunction)
        : undefined;
    message.invokeFunctionWithRetry =
      object.invokeFunctionWithRetry !== undefined &&
      object.invokeFunctionWithRetry !== null
        ? InvokeFunctionWithRetry.fromJSON(object.invokeFunctionWithRetry)
        : undefined;
    message.invokeContainerWithRetry =
      object.invokeContainerWithRetry !== undefined &&
      object.invokeContainerWithRetry !== null
        ? InvokeContainerWithRetry.fromJSON(object.invokeContainerWithRetry)
        : undefined;
    return message;
  },

  toJSON(message: Trigger_Timer): unknown {
    const obj: any = {};
    message.cronExpression !== undefined &&
      (obj.cronExpression = message.cronExpression);
    message.payload !== undefined && (obj.payload = message.payload);
    message.invokeFunction !== undefined &&
      (obj.invokeFunction = message.invokeFunction
        ? InvokeFunctionOnce.toJSON(message.invokeFunction)
        : undefined);
    message.invokeFunctionWithRetry !== undefined &&
      (obj.invokeFunctionWithRetry = message.invokeFunctionWithRetry
        ? InvokeFunctionWithRetry.toJSON(message.invokeFunctionWithRetry)
        : undefined);
    message.invokeContainerWithRetry !== undefined &&
      (obj.invokeContainerWithRetry = message.invokeContainerWithRetry
        ? InvokeContainerWithRetry.toJSON(message.invokeContainerWithRetry)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Trigger_Timer>, I>>(
    object: I
  ): Trigger_Timer {
    const message = { ...baseTrigger_Timer } as Trigger_Timer;
    message.cronExpression = object.cronExpression ?? "";
    message.payload = object.payload ?? "";
    message.invokeFunction =
      object.invokeFunction !== undefined && object.invokeFunction !== null
        ? InvokeFunctionOnce.fromPartial(object.invokeFunction)
        : undefined;
    message.invokeFunctionWithRetry =
      object.invokeFunctionWithRetry !== undefined &&
      object.invokeFunctionWithRetry !== null
        ? InvokeFunctionWithRetry.fromPartial(object.invokeFunctionWithRetry)
        : undefined;
    message.invokeContainerWithRetry =
      object.invokeContainerWithRetry !== undefined &&
      object.invokeContainerWithRetry !== null
        ? InvokeContainerWithRetry.fromPartial(object.invokeContainerWithRetry)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Trigger_Timer.$type, Trigger_Timer);

const baseTrigger_MessageQueue: object = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.MessageQueue",
  queueId: "",
  serviceAccountId: "",
};

export const Trigger_MessageQueue = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.MessageQueue" as const,

  encode(
    message: Trigger_MessageQueue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.queueId !== "") {
      writer.uint32(90).string(message.queueId);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(26).string(message.serviceAccountId);
    }
    if (message.batchSettings !== undefined) {
      BatchSettings.encode(
        message.batchSettings,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.visibilityTimeout !== undefined) {
      Duration.encode(
        message.visibilityTimeout,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.invokeFunction !== undefined) {
      InvokeFunctionOnce.encode(
        message.invokeFunction,
        writer.uint32(810).fork()
      ).ldelim();
    }
    if (message.invokeContainer !== undefined) {
      InvokeContainerOnce.encode(
        message.invokeContainer,
        writer.uint32(818).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Trigger_MessageQueue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTrigger_MessageQueue } as Trigger_MessageQueue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 11:
          message.queueId = reader.string();
          break;
        case 3:
          message.serviceAccountId = reader.string();
          break;
        case 4:
          message.batchSettings = BatchSettings.decode(reader, reader.uint32());
          break;
        case 5:
          message.visibilityTimeout = Duration.decode(reader, reader.uint32());
          break;
        case 101:
          message.invokeFunction = InvokeFunctionOnce.decode(
            reader,
            reader.uint32()
          );
          break;
        case 102:
          message.invokeContainer = InvokeContainerOnce.decode(
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

  fromJSON(object: any): Trigger_MessageQueue {
    const message = { ...baseTrigger_MessageQueue } as Trigger_MessageQueue;
    message.queueId =
      object.queueId !== undefined && object.queueId !== null
        ? String(object.queueId)
        : "";
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.batchSettings =
      object.batchSettings !== undefined && object.batchSettings !== null
        ? BatchSettings.fromJSON(object.batchSettings)
        : undefined;
    message.visibilityTimeout =
      object.visibilityTimeout !== undefined &&
      object.visibilityTimeout !== null
        ? Duration.fromJSON(object.visibilityTimeout)
        : undefined;
    message.invokeFunction =
      object.invokeFunction !== undefined && object.invokeFunction !== null
        ? InvokeFunctionOnce.fromJSON(object.invokeFunction)
        : undefined;
    message.invokeContainer =
      object.invokeContainer !== undefined && object.invokeContainer !== null
        ? InvokeContainerOnce.fromJSON(object.invokeContainer)
        : undefined;
    return message;
  },

  toJSON(message: Trigger_MessageQueue): unknown {
    const obj: any = {};
    message.queueId !== undefined && (obj.queueId = message.queueId);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.batchSettings !== undefined &&
      (obj.batchSettings = message.batchSettings
        ? BatchSettings.toJSON(message.batchSettings)
        : undefined);
    message.visibilityTimeout !== undefined &&
      (obj.visibilityTimeout = message.visibilityTimeout
        ? Duration.toJSON(message.visibilityTimeout)
        : undefined);
    message.invokeFunction !== undefined &&
      (obj.invokeFunction = message.invokeFunction
        ? InvokeFunctionOnce.toJSON(message.invokeFunction)
        : undefined);
    message.invokeContainer !== undefined &&
      (obj.invokeContainer = message.invokeContainer
        ? InvokeContainerOnce.toJSON(message.invokeContainer)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Trigger_MessageQueue>, I>>(
    object: I
  ): Trigger_MessageQueue {
    const message = { ...baseTrigger_MessageQueue } as Trigger_MessageQueue;
    message.queueId = object.queueId ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.batchSettings =
      object.batchSettings !== undefined && object.batchSettings !== null
        ? BatchSettings.fromPartial(object.batchSettings)
        : undefined;
    message.visibilityTimeout =
      object.visibilityTimeout !== undefined &&
      object.visibilityTimeout !== null
        ? Duration.fromPartial(object.visibilityTimeout)
        : undefined;
    message.invokeFunction =
      object.invokeFunction !== undefined && object.invokeFunction !== null
        ? InvokeFunctionOnce.fromPartial(object.invokeFunction)
        : undefined;
    message.invokeContainer =
      object.invokeContainer !== undefined && object.invokeContainer !== null
        ? InvokeContainerOnce.fromPartial(object.invokeContainer)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Trigger_MessageQueue.$type, Trigger_MessageQueue);

const baseTrigger_IoTMessage: object = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.IoTMessage",
  registryId: "",
  deviceId: "",
  mqttTopic: "",
};

export const Trigger_IoTMessage = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.IoTMessage" as const,

  encode(
    message: Trigger_IoTMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    if (message.deviceId !== "") {
      writer.uint32(18).string(message.deviceId);
    }
    if (message.mqttTopic !== "") {
      writer.uint32(26).string(message.mqttTopic);
    }
    if (message.batchSettings !== undefined) {
      BatchSettings.encode(
        message.batchSettings,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.invokeFunction !== undefined) {
      InvokeFunctionWithRetry.encode(
        message.invokeFunction,
        writer.uint32(810).fork()
      ).ldelim();
    }
    if (message.invokeContainer !== undefined) {
      InvokeContainerWithRetry.encode(
        message.invokeContainer,
        writer.uint32(818).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger_IoTMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTrigger_IoTMessage } as Trigger_IoTMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registryId = reader.string();
          break;
        case 2:
          message.deviceId = reader.string();
          break;
        case 3:
          message.mqttTopic = reader.string();
          break;
        case 4:
          message.batchSettings = BatchSettings.decode(reader, reader.uint32());
          break;
        case 101:
          message.invokeFunction = InvokeFunctionWithRetry.decode(
            reader,
            reader.uint32()
          );
          break;
        case 102:
          message.invokeContainer = InvokeContainerWithRetry.decode(
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

  fromJSON(object: any): Trigger_IoTMessage {
    const message = { ...baseTrigger_IoTMessage } as Trigger_IoTMessage;
    message.registryId =
      object.registryId !== undefined && object.registryId !== null
        ? String(object.registryId)
        : "";
    message.deviceId =
      object.deviceId !== undefined && object.deviceId !== null
        ? String(object.deviceId)
        : "";
    message.mqttTopic =
      object.mqttTopic !== undefined && object.mqttTopic !== null
        ? String(object.mqttTopic)
        : "";
    message.batchSettings =
      object.batchSettings !== undefined && object.batchSettings !== null
        ? BatchSettings.fromJSON(object.batchSettings)
        : undefined;
    message.invokeFunction =
      object.invokeFunction !== undefined && object.invokeFunction !== null
        ? InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
        : undefined;
    message.invokeContainer =
      object.invokeContainer !== undefined && object.invokeContainer !== null
        ? InvokeContainerWithRetry.fromJSON(object.invokeContainer)
        : undefined;
    return message;
  },

  toJSON(message: Trigger_IoTMessage): unknown {
    const obj: any = {};
    message.registryId !== undefined && (obj.registryId = message.registryId);
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    message.mqttTopic !== undefined && (obj.mqttTopic = message.mqttTopic);
    message.batchSettings !== undefined &&
      (obj.batchSettings = message.batchSettings
        ? BatchSettings.toJSON(message.batchSettings)
        : undefined);
    message.invokeFunction !== undefined &&
      (obj.invokeFunction = message.invokeFunction
        ? InvokeFunctionWithRetry.toJSON(message.invokeFunction)
        : undefined);
    message.invokeContainer !== undefined &&
      (obj.invokeContainer = message.invokeContainer
        ? InvokeContainerWithRetry.toJSON(message.invokeContainer)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Trigger_IoTMessage>, I>>(
    object: I
  ): Trigger_IoTMessage {
    const message = { ...baseTrigger_IoTMessage } as Trigger_IoTMessage;
    message.registryId = object.registryId ?? "";
    message.deviceId = object.deviceId ?? "";
    message.mqttTopic = object.mqttTopic ?? "";
    message.batchSettings =
      object.batchSettings !== undefined && object.batchSettings !== null
        ? BatchSettings.fromPartial(object.batchSettings)
        : undefined;
    message.invokeFunction =
      object.invokeFunction !== undefined && object.invokeFunction !== null
        ? InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
        : undefined;
    message.invokeContainer =
      object.invokeContainer !== undefined && object.invokeContainer !== null
        ? InvokeContainerWithRetry.fromPartial(object.invokeContainer)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Trigger_IoTMessage.$type, Trigger_IoTMessage);

const baseTrigger_IoTBrokerMessage: object = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.IoTBrokerMessage",
  brokerId: "",
  mqttTopic: "",
};

export const Trigger_IoTBrokerMessage = {
  $type:
    "yandex.cloud.serverless.triggers.v1.Trigger.IoTBrokerMessage" as const,

  encode(
    message: Trigger_IoTBrokerMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    if (message.mqttTopic !== "") {
      writer.uint32(18).string(message.mqttTopic);
    }
    if (message.batchSettings !== undefined) {
      BatchSettings.encode(
        message.batchSettings,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.invokeFunction !== undefined) {
      InvokeFunctionWithRetry.encode(
        message.invokeFunction,
        writer.uint32(810).fork()
      ).ldelim();
    }
    if (message.invokeContainer !== undefined) {
      InvokeContainerWithRetry.encode(
        message.invokeContainer,
        writer.uint32(818).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Trigger_IoTBrokerMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTrigger_IoTBrokerMessage,
    } as Trigger_IoTBrokerMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.brokerId = reader.string();
          break;
        case 2:
          message.mqttTopic = reader.string();
          break;
        case 3:
          message.batchSettings = BatchSettings.decode(reader, reader.uint32());
          break;
        case 101:
          message.invokeFunction = InvokeFunctionWithRetry.decode(
            reader,
            reader.uint32()
          );
          break;
        case 102:
          message.invokeContainer = InvokeContainerWithRetry.decode(
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

  fromJSON(object: any): Trigger_IoTBrokerMessage {
    const message = {
      ...baseTrigger_IoTBrokerMessage,
    } as Trigger_IoTBrokerMessage;
    message.brokerId =
      object.brokerId !== undefined && object.brokerId !== null
        ? String(object.brokerId)
        : "";
    message.mqttTopic =
      object.mqttTopic !== undefined && object.mqttTopic !== null
        ? String(object.mqttTopic)
        : "";
    message.batchSettings =
      object.batchSettings !== undefined && object.batchSettings !== null
        ? BatchSettings.fromJSON(object.batchSettings)
        : undefined;
    message.invokeFunction =
      object.invokeFunction !== undefined && object.invokeFunction !== null
        ? InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
        : undefined;
    message.invokeContainer =
      object.invokeContainer !== undefined && object.invokeContainer !== null
        ? InvokeContainerWithRetry.fromJSON(object.invokeContainer)
        : undefined;
    return message;
  },

  toJSON(message: Trigger_IoTBrokerMessage): unknown {
    const obj: any = {};
    message.brokerId !== undefined && (obj.brokerId = message.brokerId);
    message.mqttTopic !== undefined && (obj.mqttTopic = message.mqttTopic);
    message.batchSettings !== undefined &&
      (obj.batchSettings = message.batchSettings
        ? BatchSettings.toJSON(message.batchSettings)
        : undefined);
    message.invokeFunction !== undefined &&
      (obj.invokeFunction = message.invokeFunction
        ? InvokeFunctionWithRetry.toJSON(message.invokeFunction)
        : undefined);
    message.invokeContainer !== undefined &&
      (obj.invokeContainer = message.invokeContainer
        ? InvokeContainerWithRetry.toJSON(message.invokeContainer)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Trigger_IoTBrokerMessage>, I>>(
    object: I
  ): Trigger_IoTBrokerMessage {
    const message = {
      ...baseTrigger_IoTBrokerMessage,
    } as Trigger_IoTBrokerMessage;
    message.brokerId = object.brokerId ?? "";
    message.mqttTopic = object.mqttTopic ?? "";
    message.batchSettings =
      object.batchSettings !== undefined && object.batchSettings !== null
        ? BatchSettings.fromPartial(object.batchSettings)
        : undefined;
    message.invokeFunction =
      object.invokeFunction !== undefined && object.invokeFunction !== null
        ? InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
        : undefined;
    message.invokeContainer =
      object.invokeContainer !== undefined && object.invokeContainer !== null
        ? InvokeContainerWithRetry.fromPartial(object.invokeContainer)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Trigger_IoTBrokerMessage.$type,
  Trigger_IoTBrokerMessage
);

const baseTrigger_ObjectStorage: object = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.ObjectStorage",
  eventType: 0,
  bucketId: "",
  prefix: "",
  suffix: "",
};

export const Trigger_ObjectStorage = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.ObjectStorage" as const,

  encode(
    message: Trigger_ObjectStorage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(26).fork();
    for (const v of message.eventType) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.bucketId !== "") {
      writer.uint32(34).string(message.bucketId);
    }
    if (message.prefix !== "") {
      writer.uint32(50).string(message.prefix);
    }
    if (message.suffix !== "") {
      writer.uint32(58).string(message.suffix);
    }
    if (message.batchSettings !== undefined) {
      BatchSettings.encode(
        message.batchSettings,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.invokeFunction !== undefined) {
      InvokeFunctionWithRetry.encode(
        message.invokeFunction,
        writer.uint32(810).fork()
      ).ldelim();
    }
    if (message.invokeContainer !== undefined) {
      InvokeContainerWithRetry.encode(
        message.invokeContainer,
        writer.uint32(818).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Trigger_ObjectStorage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTrigger_ObjectStorage } as Trigger_ObjectStorage;
    message.eventType = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.eventType.push(reader.int32() as any);
            }
          } else {
            message.eventType.push(reader.int32() as any);
          }
          break;
        case 4:
          message.bucketId = reader.string();
          break;
        case 6:
          message.prefix = reader.string();
          break;
        case 7:
          message.suffix = reader.string();
          break;
        case 8:
          message.batchSettings = BatchSettings.decode(reader, reader.uint32());
          break;
        case 101:
          message.invokeFunction = InvokeFunctionWithRetry.decode(
            reader,
            reader.uint32()
          );
          break;
        case 102:
          message.invokeContainer = InvokeContainerWithRetry.decode(
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

  fromJSON(object: any): Trigger_ObjectStorage {
    const message = { ...baseTrigger_ObjectStorage } as Trigger_ObjectStorage;
    message.eventType = (object.eventType ?? []).map((e: any) =>
      trigger_ObjectStorageEventTypeFromJSON(e)
    );
    message.bucketId =
      object.bucketId !== undefined && object.bucketId !== null
        ? String(object.bucketId)
        : "";
    message.prefix =
      object.prefix !== undefined && object.prefix !== null
        ? String(object.prefix)
        : "";
    message.suffix =
      object.suffix !== undefined && object.suffix !== null
        ? String(object.suffix)
        : "";
    message.batchSettings =
      object.batchSettings !== undefined && object.batchSettings !== null
        ? BatchSettings.fromJSON(object.batchSettings)
        : undefined;
    message.invokeFunction =
      object.invokeFunction !== undefined && object.invokeFunction !== null
        ? InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
        : undefined;
    message.invokeContainer =
      object.invokeContainer !== undefined && object.invokeContainer !== null
        ? InvokeContainerWithRetry.fromJSON(object.invokeContainer)
        : undefined;
    return message;
  },

  toJSON(message: Trigger_ObjectStorage): unknown {
    const obj: any = {};
    if (message.eventType) {
      obj.eventType = message.eventType.map((e) =>
        trigger_ObjectStorageEventTypeToJSON(e)
      );
    } else {
      obj.eventType = [];
    }
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.suffix !== undefined && (obj.suffix = message.suffix);
    message.batchSettings !== undefined &&
      (obj.batchSettings = message.batchSettings
        ? BatchSettings.toJSON(message.batchSettings)
        : undefined);
    message.invokeFunction !== undefined &&
      (obj.invokeFunction = message.invokeFunction
        ? InvokeFunctionWithRetry.toJSON(message.invokeFunction)
        : undefined);
    message.invokeContainer !== undefined &&
      (obj.invokeContainer = message.invokeContainer
        ? InvokeContainerWithRetry.toJSON(message.invokeContainer)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Trigger_ObjectStorage>, I>>(
    object: I
  ): Trigger_ObjectStorage {
    const message = { ...baseTrigger_ObjectStorage } as Trigger_ObjectStorage;
    message.eventType = object.eventType?.map((e) => e) || [];
    message.bucketId = object.bucketId ?? "";
    message.prefix = object.prefix ?? "";
    message.suffix = object.suffix ?? "";
    message.batchSettings =
      object.batchSettings !== undefined && object.batchSettings !== null
        ? BatchSettings.fromPartial(object.batchSettings)
        : undefined;
    message.invokeFunction =
      object.invokeFunction !== undefined && object.invokeFunction !== null
        ? InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
        : undefined;
    message.invokeContainer =
      object.invokeContainer !== undefined && object.invokeContainer !== null
        ? InvokeContainerWithRetry.fromPartial(object.invokeContainer)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Trigger_ObjectStorage.$type, Trigger_ObjectStorage);

const baseTrigger_ContainerRegistry: object = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.ContainerRegistry",
  eventType: 0,
  registryId: "",
  imageName: "",
  tag: "",
};

export const Trigger_ContainerRegistry = {
  $type:
    "yandex.cloud.serverless.triggers.v1.Trigger.ContainerRegistry" as const,

  encode(
    message: Trigger_ContainerRegistry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(26).fork();
    for (const v of message.eventType) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.registryId !== "") {
      writer.uint32(34).string(message.registryId);
    }
    if (message.imageName !== "") {
      writer.uint32(42).string(message.imageName);
    }
    if (message.tag !== "") {
      writer.uint32(50).string(message.tag);
    }
    if (message.batchSettings !== undefined) {
      BatchSettings.encode(
        message.batchSettings,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.invokeFunction !== undefined) {
      InvokeFunctionWithRetry.encode(
        message.invokeFunction,
        writer.uint32(810).fork()
      ).ldelim();
    }
    if (message.invokeContainer !== undefined) {
      InvokeContainerWithRetry.encode(
        message.invokeContainer,
        writer.uint32(818).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Trigger_ContainerRegistry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTrigger_ContainerRegistry,
    } as Trigger_ContainerRegistry;
    message.eventType = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.eventType.push(reader.int32() as any);
            }
          } else {
            message.eventType.push(reader.int32() as any);
          }
          break;
        case 4:
          message.registryId = reader.string();
          break;
        case 5:
          message.imageName = reader.string();
          break;
        case 6:
          message.tag = reader.string();
          break;
        case 7:
          message.batchSettings = BatchSettings.decode(reader, reader.uint32());
          break;
        case 101:
          message.invokeFunction = InvokeFunctionWithRetry.decode(
            reader,
            reader.uint32()
          );
          break;
        case 102:
          message.invokeContainer = InvokeContainerWithRetry.decode(
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

  fromJSON(object: any): Trigger_ContainerRegistry {
    const message = {
      ...baseTrigger_ContainerRegistry,
    } as Trigger_ContainerRegistry;
    message.eventType = (object.eventType ?? []).map((e: any) =>
      trigger_ContainerRegistryEventTypeFromJSON(e)
    );
    message.registryId =
      object.registryId !== undefined && object.registryId !== null
        ? String(object.registryId)
        : "";
    message.imageName =
      object.imageName !== undefined && object.imageName !== null
        ? String(object.imageName)
        : "";
    message.tag =
      object.tag !== undefined && object.tag !== null ? String(object.tag) : "";
    message.batchSettings =
      object.batchSettings !== undefined && object.batchSettings !== null
        ? BatchSettings.fromJSON(object.batchSettings)
        : undefined;
    message.invokeFunction =
      object.invokeFunction !== undefined && object.invokeFunction !== null
        ? InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
        : undefined;
    message.invokeContainer =
      object.invokeContainer !== undefined && object.invokeContainer !== null
        ? InvokeContainerWithRetry.fromJSON(object.invokeContainer)
        : undefined;
    return message;
  },

  toJSON(message: Trigger_ContainerRegistry): unknown {
    const obj: any = {};
    if (message.eventType) {
      obj.eventType = message.eventType.map((e) =>
        trigger_ContainerRegistryEventTypeToJSON(e)
      );
    } else {
      obj.eventType = [];
    }
    message.registryId !== undefined && (obj.registryId = message.registryId);
    message.imageName !== undefined && (obj.imageName = message.imageName);
    message.tag !== undefined && (obj.tag = message.tag);
    message.batchSettings !== undefined &&
      (obj.batchSettings = message.batchSettings
        ? BatchSettings.toJSON(message.batchSettings)
        : undefined);
    message.invokeFunction !== undefined &&
      (obj.invokeFunction = message.invokeFunction
        ? InvokeFunctionWithRetry.toJSON(message.invokeFunction)
        : undefined);
    message.invokeContainer !== undefined &&
      (obj.invokeContainer = message.invokeContainer
        ? InvokeContainerWithRetry.toJSON(message.invokeContainer)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Trigger_ContainerRegistry>, I>>(
    object: I
  ): Trigger_ContainerRegistry {
    const message = {
      ...baseTrigger_ContainerRegistry,
    } as Trigger_ContainerRegistry;
    message.eventType = object.eventType?.map((e) => e) || [];
    message.registryId = object.registryId ?? "";
    message.imageName = object.imageName ?? "";
    message.tag = object.tag ?? "";
    message.batchSettings =
      object.batchSettings !== undefined && object.batchSettings !== null
        ? BatchSettings.fromPartial(object.batchSettings)
        : undefined;
    message.invokeFunction =
      object.invokeFunction !== undefined && object.invokeFunction !== null
        ? InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
        : undefined;
    message.invokeContainer =
      object.invokeContainer !== undefined && object.invokeContainer !== null
        ? InvokeContainerWithRetry.fromPartial(object.invokeContainer)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Trigger_ContainerRegistry.$type,
  Trigger_ContainerRegistry
);

const baseTrigger_CloudLogs: object = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.CloudLogs",
  logGroupId: "",
};

export const Trigger_CloudLogs = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.CloudLogs" as const,

  encode(
    message: Trigger_CloudLogs,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.logGroupId) {
      writer.uint32(10).string(v!);
    }
    if (message.batchSettings !== undefined) {
      CloudLogsBatchSettings.encode(
        message.batchSettings,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.invokeFunction !== undefined) {
      InvokeFunctionWithRetry.encode(
        message.invokeFunction,
        writer.uint32(810).fork()
      ).ldelim();
    }
    if (message.invokeContainer !== undefined) {
      InvokeContainerWithRetry.encode(
        message.invokeContainer,
        writer.uint32(818).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger_CloudLogs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTrigger_CloudLogs } as Trigger_CloudLogs;
    message.logGroupId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logGroupId.push(reader.string());
          break;
        case 2:
          message.batchSettings = CloudLogsBatchSettings.decode(
            reader,
            reader.uint32()
          );
          break;
        case 101:
          message.invokeFunction = InvokeFunctionWithRetry.decode(
            reader,
            reader.uint32()
          );
          break;
        case 102:
          message.invokeContainer = InvokeContainerWithRetry.decode(
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

  fromJSON(object: any): Trigger_CloudLogs {
    const message = { ...baseTrigger_CloudLogs } as Trigger_CloudLogs;
    message.logGroupId = (object.logGroupId ?? []).map((e: any) => String(e));
    message.batchSettings =
      object.batchSettings !== undefined && object.batchSettings !== null
        ? CloudLogsBatchSettings.fromJSON(object.batchSettings)
        : undefined;
    message.invokeFunction =
      object.invokeFunction !== undefined && object.invokeFunction !== null
        ? InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
        : undefined;
    message.invokeContainer =
      object.invokeContainer !== undefined && object.invokeContainer !== null
        ? InvokeContainerWithRetry.fromJSON(object.invokeContainer)
        : undefined;
    return message;
  },

  toJSON(message: Trigger_CloudLogs): unknown {
    const obj: any = {};
    if (message.logGroupId) {
      obj.logGroupId = message.logGroupId.map((e) => e);
    } else {
      obj.logGroupId = [];
    }
    message.batchSettings !== undefined &&
      (obj.batchSettings = message.batchSettings
        ? CloudLogsBatchSettings.toJSON(message.batchSettings)
        : undefined);
    message.invokeFunction !== undefined &&
      (obj.invokeFunction = message.invokeFunction
        ? InvokeFunctionWithRetry.toJSON(message.invokeFunction)
        : undefined);
    message.invokeContainer !== undefined &&
      (obj.invokeContainer = message.invokeContainer
        ? InvokeContainerWithRetry.toJSON(message.invokeContainer)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Trigger_CloudLogs>, I>>(
    object: I
  ): Trigger_CloudLogs {
    const message = { ...baseTrigger_CloudLogs } as Trigger_CloudLogs;
    message.logGroupId = object.logGroupId?.map((e) => e) || [];
    message.batchSettings =
      object.batchSettings !== undefined && object.batchSettings !== null
        ? CloudLogsBatchSettings.fromPartial(object.batchSettings)
        : undefined;
    message.invokeFunction =
      object.invokeFunction !== undefined && object.invokeFunction !== null
        ? InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
        : undefined;
    message.invokeContainer =
      object.invokeContainer !== undefined && object.invokeContainer !== null
        ? InvokeContainerWithRetry.fromPartial(object.invokeContainer)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Trigger_CloudLogs.$type, Trigger_CloudLogs);

const baseTrigger_Logging: object = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.Logging",
  logGroupId: "",
  resourceType: "",
  resourceId: "",
  streamName: "",
  levels: 0,
};

export const Trigger_Logging = {
  $type: "yandex.cloud.serverless.triggers.v1.Trigger.Logging" as const,

  encode(
    message: Trigger_Logging,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.logGroupId !== "") {
      writer.uint32(10).string(message.logGroupId);
    }
    for (const v of message.resourceType) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.resourceId) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.streamName) {
      writer.uint32(58).string(v!);
    }
    writer.uint32(42).fork();
    for (const v of message.levels) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.batchSettings !== undefined) {
      LoggingBatchSettings.encode(
        message.batchSettings,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.invokeFunction !== undefined) {
      InvokeFunctionWithRetry.encode(
        message.invokeFunction,
        writer.uint32(810).fork()
      ).ldelim();
    }
    if (message.invokeContainer !== undefined) {
      InvokeContainerWithRetry.encode(
        message.invokeContainer,
        writer.uint32(826).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger_Logging {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTrigger_Logging } as Trigger_Logging;
    message.resourceType = [];
    message.resourceId = [];
    message.streamName = [];
    message.levels = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logGroupId = reader.string();
          break;
        case 3:
          message.resourceType.push(reader.string());
          break;
        case 4:
          message.resourceId.push(reader.string());
          break;
        case 7:
          message.streamName.push(reader.string());
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.levels.push(reader.int32() as any);
            }
          } else {
            message.levels.push(reader.int32() as any);
          }
          break;
        case 6:
          message.batchSettings = LoggingBatchSettings.decode(
            reader,
            reader.uint32()
          );
          break;
        case 101:
          message.invokeFunction = InvokeFunctionWithRetry.decode(
            reader,
            reader.uint32()
          );
          break;
        case 103:
          message.invokeContainer = InvokeContainerWithRetry.decode(
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

  fromJSON(object: any): Trigger_Logging {
    const message = { ...baseTrigger_Logging } as Trigger_Logging;
    message.logGroupId =
      object.logGroupId !== undefined && object.logGroupId !== null
        ? String(object.logGroupId)
        : "";
    message.resourceType = (object.resourceType ?? []).map((e: any) =>
      String(e)
    );
    message.resourceId = (object.resourceId ?? []).map((e: any) => String(e));
    message.streamName = (object.streamName ?? []).map((e: any) => String(e));
    message.levels = (object.levels ?? []).map((e: any) =>
      logLevel_LevelFromJSON(e)
    );
    message.batchSettings =
      object.batchSettings !== undefined && object.batchSettings !== null
        ? LoggingBatchSettings.fromJSON(object.batchSettings)
        : undefined;
    message.invokeFunction =
      object.invokeFunction !== undefined && object.invokeFunction !== null
        ? InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
        : undefined;
    message.invokeContainer =
      object.invokeContainer !== undefined && object.invokeContainer !== null
        ? InvokeContainerWithRetry.fromJSON(object.invokeContainer)
        : undefined;
    return message;
  },

  toJSON(message: Trigger_Logging): unknown {
    const obj: any = {};
    message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
    if (message.resourceType) {
      obj.resourceType = message.resourceType.map((e) => e);
    } else {
      obj.resourceType = [];
    }
    if (message.resourceId) {
      obj.resourceId = message.resourceId.map((e) => e);
    } else {
      obj.resourceId = [];
    }
    if (message.streamName) {
      obj.streamName = message.streamName.map((e) => e);
    } else {
      obj.streamName = [];
    }
    if (message.levels) {
      obj.levels = message.levels.map((e) => logLevel_LevelToJSON(e));
    } else {
      obj.levels = [];
    }
    message.batchSettings !== undefined &&
      (obj.batchSettings = message.batchSettings
        ? LoggingBatchSettings.toJSON(message.batchSettings)
        : undefined);
    message.invokeFunction !== undefined &&
      (obj.invokeFunction = message.invokeFunction
        ? InvokeFunctionWithRetry.toJSON(message.invokeFunction)
        : undefined);
    message.invokeContainer !== undefined &&
      (obj.invokeContainer = message.invokeContainer
        ? InvokeContainerWithRetry.toJSON(message.invokeContainer)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Trigger_Logging>, I>>(
    object: I
  ): Trigger_Logging {
    const message = { ...baseTrigger_Logging } as Trigger_Logging;
    message.logGroupId = object.logGroupId ?? "";
    message.resourceType = object.resourceType?.map((e) => e) || [];
    message.resourceId = object.resourceId?.map((e) => e) || [];
    message.streamName = object.streamName?.map((e) => e) || [];
    message.levels = object.levels?.map((e) => e) || [];
    message.batchSettings =
      object.batchSettings !== undefined && object.batchSettings !== null
        ? LoggingBatchSettings.fromPartial(object.batchSettings)
        : undefined;
    message.invokeFunction =
      object.invokeFunction !== undefined && object.invokeFunction !== null
        ? InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
        : undefined;
    message.invokeContainer =
      object.invokeContainer !== undefined && object.invokeContainer !== null
        ? InvokeContainerWithRetry.fromPartial(object.invokeContainer)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Trigger_Logging.$type, Trigger_Logging);

const baseInvokeFunctionOnce: object = {
  $type: "yandex.cloud.serverless.triggers.v1.InvokeFunctionOnce",
  functionId: "",
  functionTag: "",
  serviceAccountId: "",
};

export const InvokeFunctionOnce = {
  $type: "yandex.cloud.serverless.triggers.v1.InvokeFunctionOnce" as const,

  encode(
    message: InvokeFunctionOnce,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    if (message.functionTag !== "") {
      writer.uint32(18).string(message.functionTag);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(26).string(message.serviceAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvokeFunctionOnce {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvokeFunctionOnce } as InvokeFunctionOnce;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionId = reader.string();
          break;
        case 2:
          message.functionTag = reader.string();
          break;
        case 3:
          message.serviceAccountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InvokeFunctionOnce {
    const message = { ...baseInvokeFunctionOnce } as InvokeFunctionOnce;
    message.functionId =
      object.functionId !== undefined && object.functionId !== null
        ? String(object.functionId)
        : "";
    message.functionTag =
      object.functionTag !== undefined && object.functionTag !== null
        ? String(object.functionTag)
        : "";
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    return message;
  },

  toJSON(message: InvokeFunctionOnce): unknown {
    const obj: any = {};
    message.functionId !== undefined && (obj.functionId = message.functionId);
    message.functionTag !== undefined &&
      (obj.functionTag = message.functionTag);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InvokeFunctionOnce>, I>>(
    object: I
  ): InvokeFunctionOnce {
    const message = { ...baseInvokeFunctionOnce } as InvokeFunctionOnce;
    message.functionId = object.functionId ?? "";
    message.functionTag = object.functionTag ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(InvokeFunctionOnce.$type, InvokeFunctionOnce);

const baseInvokeFunctionWithRetry: object = {
  $type: "yandex.cloud.serverless.triggers.v1.InvokeFunctionWithRetry",
  functionId: "",
  functionTag: "",
  serviceAccountId: "",
};

export const InvokeFunctionWithRetry = {
  $type: "yandex.cloud.serverless.triggers.v1.InvokeFunctionWithRetry" as const,

  encode(
    message: InvokeFunctionWithRetry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    if (message.functionTag !== "") {
      writer.uint32(18).string(message.functionTag);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(26).string(message.serviceAccountId);
    }
    if (message.retrySettings !== undefined) {
      RetrySettings.encode(
        message.retrySettings,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.deadLetterQueue !== undefined) {
      PutQueueMessage.encode(
        message.deadLetterQueue,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InvokeFunctionWithRetry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInvokeFunctionWithRetry,
    } as InvokeFunctionWithRetry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionId = reader.string();
          break;
        case 2:
          message.functionTag = reader.string();
          break;
        case 3:
          message.serviceAccountId = reader.string();
          break;
        case 4:
          message.retrySettings = RetrySettings.decode(reader, reader.uint32());
          break;
        case 5:
          message.deadLetterQueue = PutQueueMessage.decode(
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

  fromJSON(object: any): InvokeFunctionWithRetry {
    const message = {
      ...baseInvokeFunctionWithRetry,
    } as InvokeFunctionWithRetry;
    message.functionId =
      object.functionId !== undefined && object.functionId !== null
        ? String(object.functionId)
        : "";
    message.functionTag =
      object.functionTag !== undefined && object.functionTag !== null
        ? String(object.functionTag)
        : "";
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.retrySettings =
      object.retrySettings !== undefined && object.retrySettings !== null
        ? RetrySettings.fromJSON(object.retrySettings)
        : undefined;
    message.deadLetterQueue =
      object.deadLetterQueue !== undefined && object.deadLetterQueue !== null
        ? PutQueueMessage.fromJSON(object.deadLetterQueue)
        : undefined;
    return message;
  },

  toJSON(message: InvokeFunctionWithRetry): unknown {
    const obj: any = {};
    message.functionId !== undefined && (obj.functionId = message.functionId);
    message.functionTag !== undefined &&
      (obj.functionTag = message.functionTag);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.retrySettings !== undefined &&
      (obj.retrySettings = message.retrySettings
        ? RetrySettings.toJSON(message.retrySettings)
        : undefined);
    message.deadLetterQueue !== undefined &&
      (obj.deadLetterQueue = message.deadLetterQueue
        ? PutQueueMessage.toJSON(message.deadLetterQueue)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InvokeFunctionWithRetry>, I>>(
    object: I
  ): InvokeFunctionWithRetry {
    const message = {
      ...baseInvokeFunctionWithRetry,
    } as InvokeFunctionWithRetry;
    message.functionId = object.functionId ?? "";
    message.functionTag = object.functionTag ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.retrySettings =
      object.retrySettings !== undefined && object.retrySettings !== null
        ? RetrySettings.fromPartial(object.retrySettings)
        : undefined;
    message.deadLetterQueue =
      object.deadLetterQueue !== undefined && object.deadLetterQueue !== null
        ? PutQueueMessage.fromPartial(object.deadLetterQueue)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(InvokeFunctionWithRetry.$type, InvokeFunctionWithRetry);

const baseInvokeContainerOnce: object = {
  $type: "yandex.cloud.serverless.triggers.v1.InvokeContainerOnce",
  containerId: "",
  path: "",
  serviceAccountId: "",
};

export const InvokeContainerOnce = {
  $type: "yandex.cloud.serverless.triggers.v1.InvokeContainerOnce" as const,

  encode(
    message: InvokeContainerOnce,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.containerId !== "") {
      writer.uint32(10).string(message.containerId);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(34).string(message.serviceAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvokeContainerOnce {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvokeContainerOnce } as InvokeContainerOnce;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.containerId = reader.string();
          break;
        case 3:
          message.path = reader.string();
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

  fromJSON(object: any): InvokeContainerOnce {
    const message = { ...baseInvokeContainerOnce } as InvokeContainerOnce;
    message.containerId =
      object.containerId !== undefined && object.containerId !== null
        ? String(object.containerId)
        : "";
    message.path =
      object.path !== undefined && object.path !== null
        ? String(object.path)
        : "";
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    return message;
  },

  toJSON(message: InvokeContainerOnce): unknown {
    const obj: any = {};
    message.containerId !== undefined &&
      (obj.containerId = message.containerId);
    message.path !== undefined && (obj.path = message.path);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InvokeContainerOnce>, I>>(
    object: I
  ): InvokeContainerOnce {
    const message = { ...baseInvokeContainerOnce } as InvokeContainerOnce;
    message.containerId = object.containerId ?? "";
    message.path = object.path ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(InvokeContainerOnce.$type, InvokeContainerOnce);

const baseInvokeContainerWithRetry: object = {
  $type: "yandex.cloud.serverless.triggers.v1.InvokeContainerWithRetry",
  containerId: "",
  path: "",
  serviceAccountId: "",
};

export const InvokeContainerWithRetry = {
  $type:
    "yandex.cloud.serverless.triggers.v1.InvokeContainerWithRetry" as const,

  encode(
    message: InvokeContainerWithRetry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.containerId !== "") {
      writer.uint32(10).string(message.containerId);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(34).string(message.serviceAccountId);
    }
    if (message.retrySettings !== undefined) {
      RetrySettings.encode(
        message.retrySettings,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.deadLetterQueue !== undefined) {
      PutQueueMessage.encode(
        message.deadLetterQueue,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InvokeContainerWithRetry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInvokeContainerWithRetry,
    } as InvokeContainerWithRetry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.containerId = reader.string();
          break;
        case 3:
          message.path = reader.string();
          break;
        case 4:
          message.serviceAccountId = reader.string();
          break;
        case 5:
          message.retrySettings = RetrySettings.decode(reader, reader.uint32());
          break;
        case 6:
          message.deadLetterQueue = PutQueueMessage.decode(
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

  fromJSON(object: any): InvokeContainerWithRetry {
    const message = {
      ...baseInvokeContainerWithRetry,
    } as InvokeContainerWithRetry;
    message.containerId =
      object.containerId !== undefined && object.containerId !== null
        ? String(object.containerId)
        : "";
    message.path =
      object.path !== undefined && object.path !== null
        ? String(object.path)
        : "";
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.retrySettings =
      object.retrySettings !== undefined && object.retrySettings !== null
        ? RetrySettings.fromJSON(object.retrySettings)
        : undefined;
    message.deadLetterQueue =
      object.deadLetterQueue !== undefined && object.deadLetterQueue !== null
        ? PutQueueMessage.fromJSON(object.deadLetterQueue)
        : undefined;
    return message;
  },

  toJSON(message: InvokeContainerWithRetry): unknown {
    const obj: any = {};
    message.containerId !== undefined &&
      (obj.containerId = message.containerId);
    message.path !== undefined && (obj.path = message.path);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.retrySettings !== undefined &&
      (obj.retrySettings = message.retrySettings
        ? RetrySettings.toJSON(message.retrySettings)
        : undefined);
    message.deadLetterQueue !== undefined &&
      (obj.deadLetterQueue = message.deadLetterQueue
        ? PutQueueMessage.toJSON(message.deadLetterQueue)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InvokeContainerWithRetry>, I>>(
    object: I
  ): InvokeContainerWithRetry {
    const message = {
      ...baseInvokeContainerWithRetry,
    } as InvokeContainerWithRetry;
    message.containerId = object.containerId ?? "";
    message.path = object.path ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.retrySettings =
      object.retrySettings !== undefined && object.retrySettings !== null
        ? RetrySettings.fromPartial(object.retrySettings)
        : undefined;
    message.deadLetterQueue =
      object.deadLetterQueue !== undefined && object.deadLetterQueue !== null
        ? PutQueueMessage.fromPartial(object.deadLetterQueue)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  InvokeContainerWithRetry.$type,
  InvokeContainerWithRetry
);

const basePutQueueMessage: object = {
  $type: "yandex.cloud.serverless.triggers.v1.PutQueueMessage",
  queueId: "",
  serviceAccountId: "",
};

export const PutQueueMessage = {
  $type: "yandex.cloud.serverless.triggers.v1.PutQueueMessage" as const,

  encode(
    message: PutQueueMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.queueId !== "") {
      writer.uint32(90).string(message.queueId);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(18).string(message.serviceAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PutQueueMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePutQueueMessage } as PutQueueMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 11:
          message.queueId = reader.string();
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

  fromJSON(object: any): PutQueueMessage {
    const message = { ...basePutQueueMessage } as PutQueueMessage;
    message.queueId =
      object.queueId !== undefined && object.queueId !== null
        ? String(object.queueId)
        : "";
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    return message;
  },

  toJSON(message: PutQueueMessage): unknown {
    const obj: any = {};
    message.queueId !== undefined && (obj.queueId = message.queueId);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PutQueueMessage>, I>>(
    object: I
  ): PutQueueMessage {
    const message = { ...basePutQueueMessage } as PutQueueMessage;
    message.queueId = object.queueId ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(PutQueueMessage.$type, PutQueueMessage);

const baseBatchSettings: object = {
  $type: "yandex.cloud.serverless.triggers.v1.BatchSettings",
  size: 0,
};

export const BatchSettings = {
  $type: "yandex.cloud.serverless.triggers.v1.BatchSettings" as const,

  encode(
    message: BatchSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.size !== 0) {
      writer.uint32(8).int64(message.size);
    }
    if (message.cutoff !== undefined) {
      Duration.encode(message.cutoff, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBatchSettings } as BatchSettings;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.size = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.cutoff = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchSettings {
    const message = { ...baseBatchSettings } as BatchSettings;
    message.size =
      object.size !== undefined && object.size !== null
        ? Number(object.size)
        : 0;
    message.cutoff =
      object.cutoff !== undefined && object.cutoff !== null
        ? Duration.fromJSON(object.cutoff)
        : undefined;
    return message;
  },

  toJSON(message: BatchSettings): unknown {
    const obj: any = {};
    message.size !== undefined && (obj.size = Math.round(message.size));
    message.cutoff !== undefined &&
      (obj.cutoff = message.cutoff
        ? Duration.toJSON(message.cutoff)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchSettings>, I>>(
    object: I
  ): BatchSettings {
    const message = { ...baseBatchSettings } as BatchSettings;
    message.size = object.size ?? 0;
    message.cutoff =
      object.cutoff !== undefined && object.cutoff !== null
        ? Duration.fromPartial(object.cutoff)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(BatchSettings.$type, BatchSettings);

const baseCloudLogsBatchSettings: object = {
  $type: "yandex.cloud.serverless.triggers.v1.CloudLogsBatchSettings",
  size: 0,
};

export const CloudLogsBatchSettings = {
  $type: "yandex.cloud.serverless.triggers.v1.CloudLogsBatchSettings" as const,

  encode(
    message: CloudLogsBatchSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.size !== 0) {
      writer.uint32(8).int64(message.size);
    }
    if (message.cutoff !== undefined) {
      Duration.encode(message.cutoff, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CloudLogsBatchSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCloudLogsBatchSettings } as CloudLogsBatchSettings;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.size = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.cutoff = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CloudLogsBatchSettings {
    const message = { ...baseCloudLogsBatchSettings } as CloudLogsBatchSettings;
    message.size =
      object.size !== undefined && object.size !== null
        ? Number(object.size)
        : 0;
    message.cutoff =
      object.cutoff !== undefined && object.cutoff !== null
        ? Duration.fromJSON(object.cutoff)
        : undefined;
    return message;
  },

  toJSON(message: CloudLogsBatchSettings): unknown {
    const obj: any = {};
    message.size !== undefined && (obj.size = Math.round(message.size));
    message.cutoff !== undefined &&
      (obj.cutoff = message.cutoff
        ? Duration.toJSON(message.cutoff)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CloudLogsBatchSettings>, I>>(
    object: I
  ): CloudLogsBatchSettings {
    const message = { ...baseCloudLogsBatchSettings } as CloudLogsBatchSettings;
    message.size = object.size ?? 0;
    message.cutoff =
      object.cutoff !== undefined && object.cutoff !== null
        ? Duration.fromPartial(object.cutoff)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CloudLogsBatchSettings.$type, CloudLogsBatchSettings);

const baseLoggingBatchSettings: object = {
  $type: "yandex.cloud.serverless.triggers.v1.LoggingBatchSettings",
  size: 0,
};

export const LoggingBatchSettings = {
  $type: "yandex.cloud.serverless.triggers.v1.LoggingBatchSettings" as const,

  encode(
    message: LoggingBatchSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.size !== 0) {
      writer.uint32(8).int64(message.size);
    }
    if (message.cutoff !== undefined) {
      Duration.encode(message.cutoff, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoggingBatchSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLoggingBatchSettings } as LoggingBatchSettings;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.size = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.cutoff = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoggingBatchSettings {
    const message = { ...baseLoggingBatchSettings } as LoggingBatchSettings;
    message.size =
      object.size !== undefined && object.size !== null
        ? Number(object.size)
        : 0;
    message.cutoff =
      object.cutoff !== undefined && object.cutoff !== null
        ? Duration.fromJSON(object.cutoff)
        : undefined;
    return message;
  },

  toJSON(message: LoggingBatchSettings): unknown {
    const obj: any = {};
    message.size !== undefined && (obj.size = Math.round(message.size));
    message.cutoff !== undefined &&
      (obj.cutoff = message.cutoff
        ? Duration.toJSON(message.cutoff)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoggingBatchSettings>, I>>(
    object: I
  ): LoggingBatchSettings {
    const message = { ...baseLoggingBatchSettings } as LoggingBatchSettings;
    message.size = object.size ?? 0;
    message.cutoff =
      object.cutoff !== undefined && object.cutoff !== null
        ? Duration.fromPartial(object.cutoff)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(LoggingBatchSettings.$type, LoggingBatchSettings);

const baseRetrySettings: object = {
  $type: "yandex.cloud.serverless.triggers.v1.RetrySettings",
  retryAttempts: 0,
};

export const RetrySettings = {
  $type: "yandex.cloud.serverless.triggers.v1.RetrySettings" as const,

  encode(
    message: RetrySettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.retryAttempts !== 0) {
      writer.uint32(8).int64(message.retryAttempts);
    }
    if (message.interval !== undefined) {
      Duration.encode(message.interval, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RetrySettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRetrySettings } as RetrySettings;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.retryAttempts = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.interval = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RetrySettings {
    const message = { ...baseRetrySettings } as RetrySettings;
    message.retryAttempts =
      object.retryAttempts !== undefined && object.retryAttempts !== null
        ? Number(object.retryAttempts)
        : 0;
    message.interval =
      object.interval !== undefined && object.interval !== null
        ? Duration.fromJSON(object.interval)
        : undefined;
    return message;
  },

  toJSON(message: RetrySettings): unknown {
    const obj: any = {};
    message.retryAttempts !== undefined &&
      (obj.retryAttempts = Math.round(message.retryAttempts));
    message.interval !== undefined &&
      (obj.interval = message.interval
        ? Duration.toJSON(message.interval)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RetrySettings>, I>>(
    object: I
  ): RetrySettings {
    const message = { ...baseRetrySettings } as RetrySettings;
    message.retryAttempts = object.retryAttempts ?? 0;
    message.interval =
      object.interval !== undefined && object.interval !== null
        ? Duration.fromPartial(object.interval)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(RetrySettings.$type, RetrySettings);

const baseBillingBudget: object = {
  $type: "yandex.cloud.serverless.triggers.v1.BillingBudget",
  billingAccountId: "",
  budgetId: "",
};

export const BillingBudget = {
  $type: "yandex.cloud.serverless.triggers.v1.BillingBudget" as const,

  encode(
    message: BillingBudget,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.billingAccountId !== "") {
      writer.uint32(10).string(message.billingAccountId);
    }
    if (message.budgetId !== "") {
      writer.uint32(18).string(message.budgetId);
    }
    if (message.invokeFunction !== undefined) {
      InvokeFunctionWithRetry.encode(
        message.invokeFunction,
        writer.uint32(810).fork()
      ).ldelim();
    }
    if (message.invokeContainer !== undefined) {
      InvokeContainerWithRetry.encode(
        message.invokeContainer,
        writer.uint32(826).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BillingBudget {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBillingBudget } as BillingBudget;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.billingAccountId = reader.string();
          break;
        case 2:
          message.budgetId = reader.string();
          break;
        case 101:
          message.invokeFunction = InvokeFunctionWithRetry.decode(
            reader,
            reader.uint32()
          );
          break;
        case 103:
          message.invokeContainer = InvokeContainerWithRetry.decode(
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

  fromJSON(object: any): BillingBudget {
    const message = { ...baseBillingBudget } as BillingBudget;
    message.billingAccountId =
      object.billingAccountId !== undefined && object.billingAccountId !== null
        ? String(object.billingAccountId)
        : "";
    message.budgetId =
      object.budgetId !== undefined && object.budgetId !== null
        ? String(object.budgetId)
        : "";
    message.invokeFunction =
      object.invokeFunction !== undefined && object.invokeFunction !== null
        ? InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
        : undefined;
    message.invokeContainer =
      object.invokeContainer !== undefined && object.invokeContainer !== null
        ? InvokeContainerWithRetry.fromJSON(object.invokeContainer)
        : undefined;
    return message;
  },

  toJSON(message: BillingBudget): unknown {
    const obj: any = {};
    message.billingAccountId !== undefined &&
      (obj.billingAccountId = message.billingAccountId);
    message.budgetId !== undefined && (obj.budgetId = message.budgetId);
    message.invokeFunction !== undefined &&
      (obj.invokeFunction = message.invokeFunction
        ? InvokeFunctionWithRetry.toJSON(message.invokeFunction)
        : undefined);
    message.invokeContainer !== undefined &&
      (obj.invokeContainer = message.invokeContainer
        ? InvokeContainerWithRetry.toJSON(message.invokeContainer)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BillingBudget>, I>>(
    object: I
  ): BillingBudget {
    const message = { ...baseBillingBudget } as BillingBudget;
    message.billingAccountId = object.billingAccountId ?? "";
    message.budgetId = object.budgetId ?? "";
    message.invokeFunction =
      object.invokeFunction !== undefined && object.invokeFunction !== null
        ? InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
        : undefined;
    message.invokeContainer =
      object.invokeContainer !== undefined && object.invokeContainer !== null
        ? InvokeContainerWithRetry.fromPartial(object.invokeContainer)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(BillingBudget.$type, BillingBudget);

const baseDataStreamBatchSettings: object = {
  $type: "yandex.cloud.serverless.triggers.v1.DataStreamBatchSettings",
  size: 0,
};

export const DataStreamBatchSettings = {
  $type: "yandex.cloud.serverless.triggers.v1.DataStreamBatchSettings" as const,

  encode(
    message: DataStreamBatchSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.size !== 0) {
      writer.uint32(8).int64(message.size);
    }
    if (message.cutoff !== undefined) {
      Duration.encode(message.cutoff, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DataStreamBatchSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDataStreamBatchSettings,
    } as DataStreamBatchSettings;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.size = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.cutoff = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataStreamBatchSettings {
    const message = {
      ...baseDataStreamBatchSettings,
    } as DataStreamBatchSettings;
    message.size =
      object.size !== undefined && object.size !== null
        ? Number(object.size)
        : 0;
    message.cutoff =
      object.cutoff !== undefined && object.cutoff !== null
        ? Duration.fromJSON(object.cutoff)
        : undefined;
    return message;
  },

  toJSON(message: DataStreamBatchSettings): unknown {
    const obj: any = {};
    message.size !== undefined && (obj.size = Math.round(message.size));
    message.cutoff !== undefined &&
      (obj.cutoff = message.cutoff
        ? Duration.toJSON(message.cutoff)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DataStreamBatchSettings>, I>>(
    object: I
  ): DataStreamBatchSettings {
    const message = {
      ...baseDataStreamBatchSettings,
    } as DataStreamBatchSettings;
    message.size = object.size ?? 0;
    message.cutoff =
      object.cutoff !== undefined && object.cutoff !== null
        ? Duration.fromPartial(object.cutoff)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(DataStreamBatchSettings.$type, DataStreamBatchSettings);

const baseDataStream: object = {
  $type: "yandex.cloud.serverless.triggers.v1.DataStream",
  endpoint: "",
  database: "",
  stream: "",
  serviceAccountId: "",
};

export const DataStream = {
  $type: "yandex.cloud.serverless.triggers.v1.DataStream" as const,

  encode(
    message: DataStream,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.endpoint !== "") {
      writer.uint32(10).string(message.endpoint);
    }
    if (message.database !== "") {
      writer.uint32(18).string(message.database);
    }
    if (message.stream !== "") {
      writer.uint32(26).string(message.stream);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(34).string(message.serviceAccountId);
    }
    if (message.batchSettings !== undefined) {
      DataStreamBatchSettings.encode(
        message.batchSettings,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.invokeFunction !== undefined) {
      InvokeFunctionWithRetry.encode(
        message.invokeFunction,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.invokeContainer !== undefined) {
      InvokeContainerWithRetry.encode(
        message.invokeContainer,
        writer.uint32(122).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataStream {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDataStream } as DataStream;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.endpoint = reader.string();
          break;
        case 2:
          message.database = reader.string();
          break;
        case 3:
          message.stream = reader.string();
          break;
        case 4:
          message.serviceAccountId = reader.string();
          break;
        case 5:
          message.batchSettings = DataStreamBatchSettings.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.invokeFunction = InvokeFunctionWithRetry.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.invokeContainer = InvokeContainerWithRetry.decode(
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

  fromJSON(object: any): DataStream {
    const message = { ...baseDataStream } as DataStream;
    message.endpoint =
      object.endpoint !== undefined && object.endpoint !== null
        ? String(object.endpoint)
        : "";
    message.database =
      object.database !== undefined && object.database !== null
        ? String(object.database)
        : "";
    message.stream =
      object.stream !== undefined && object.stream !== null
        ? String(object.stream)
        : "";
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.batchSettings =
      object.batchSettings !== undefined && object.batchSettings !== null
        ? DataStreamBatchSettings.fromJSON(object.batchSettings)
        : undefined;
    message.invokeFunction =
      object.invokeFunction !== undefined && object.invokeFunction !== null
        ? InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
        : undefined;
    message.invokeContainer =
      object.invokeContainer !== undefined && object.invokeContainer !== null
        ? InvokeContainerWithRetry.fromJSON(object.invokeContainer)
        : undefined;
    return message;
  },

  toJSON(message: DataStream): unknown {
    const obj: any = {};
    message.endpoint !== undefined && (obj.endpoint = message.endpoint);
    message.database !== undefined && (obj.database = message.database);
    message.stream !== undefined && (obj.stream = message.stream);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.batchSettings !== undefined &&
      (obj.batchSettings = message.batchSettings
        ? DataStreamBatchSettings.toJSON(message.batchSettings)
        : undefined);
    message.invokeFunction !== undefined &&
      (obj.invokeFunction = message.invokeFunction
        ? InvokeFunctionWithRetry.toJSON(message.invokeFunction)
        : undefined);
    message.invokeContainer !== undefined &&
      (obj.invokeContainer = message.invokeContainer
        ? InvokeContainerWithRetry.toJSON(message.invokeContainer)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DataStream>, I>>(
    object: I
  ): DataStream {
    const message = { ...baseDataStream } as DataStream;
    message.endpoint = object.endpoint ?? "";
    message.database = object.database ?? "";
    message.stream = object.stream ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.batchSettings =
      object.batchSettings !== undefined && object.batchSettings !== null
        ? DataStreamBatchSettings.fromPartial(object.batchSettings)
        : undefined;
    message.invokeFunction =
      object.invokeFunction !== undefined && object.invokeFunction !== null
        ? InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
        : undefined;
    message.invokeContainer =
      object.invokeContainer !== undefined && object.invokeContainer !== null
        ? InvokeContainerWithRetry.fromPartial(object.invokeContainer)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(DataStream.$type, DataStream);

const baseObjectStorageBucketSettings: object = {
  $type: "yandex.cloud.serverless.triggers.v1.ObjectStorageBucketSettings",
  bucketId: "",
  serviceAccountId: "",
};

export const ObjectStorageBucketSettings = {
  $type:
    "yandex.cloud.serverless.triggers.v1.ObjectStorageBucketSettings" as const,

  encode(
    message: ObjectStorageBucketSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bucketId !== "") {
      writer.uint32(10).string(message.bucketId);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(18).string(message.serviceAccountId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ObjectStorageBucketSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseObjectStorageBucketSettings,
    } as ObjectStorageBucketSettings;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucketId = reader.string();
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

  fromJSON(object: any): ObjectStorageBucketSettings {
    const message = {
      ...baseObjectStorageBucketSettings,
    } as ObjectStorageBucketSettings;
    message.bucketId =
      object.bucketId !== undefined && object.bucketId !== null
        ? String(object.bucketId)
        : "";
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    return message;
  },

  toJSON(message: ObjectStorageBucketSettings): unknown {
    const obj: any = {};
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObjectStorageBucketSettings>, I>>(
    object: I
  ): ObjectStorageBucketSettings {
    const message = {
      ...baseObjectStorageBucketSettings,
    } as ObjectStorageBucketSettings;
    message.bucketId = object.bucketId ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ObjectStorageBucketSettings.$type,
  ObjectStorageBucketSettings
);

const baseMail: object = {
  $type: "yandex.cloud.serverless.triggers.v1.Mail",
  email: "",
};

export const Mail = {
  $type: "yandex.cloud.serverless.triggers.v1.Mail" as const,

  encode(message: Mail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.batchSettings !== undefined) {
      BatchSettings.encode(
        message.batchSettings,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.attachmentsBucket !== undefined) {
      ObjectStorageBucketSettings.encode(
        message.attachmentsBucket,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.invokeFunction !== undefined) {
      InvokeFunctionWithRetry.encode(
        message.invokeFunction,
        writer.uint32(810).fork()
      ).ldelim();
    }
    if (message.invokeContainer !== undefined) {
      InvokeContainerWithRetry.encode(
        message.invokeContainer,
        writer.uint32(826).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMail } as Mail;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.email = reader.string();
          break;
        case 3:
          message.batchSettings = BatchSettings.decode(reader, reader.uint32());
          break;
        case 4:
          message.attachmentsBucket = ObjectStorageBucketSettings.decode(
            reader,
            reader.uint32()
          );
          break;
        case 101:
          message.invokeFunction = InvokeFunctionWithRetry.decode(
            reader,
            reader.uint32()
          );
          break;
        case 103:
          message.invokeContainer = InvokeContainerWithRetry.decode(
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

  fromJSON(object: any): Mail {
    const message = { ...baseMail } as Mail;
    message.email =
      object.email !== undefined && object.email !== null
        ? String(object.email)
        : "";
    message.batchSettings =
      object.batchSettings !== undefined && object.batchSettings !== null
        ? BatchSettings.fromJSON(object.batchSettings)
        : undefined;
    message.attachmentsBucket =
      object.attachmentsBucket !== undefined &&
      object.attachmentsBucket !== null
        ? ObjectStorageBucketSettings.fromJSON(object.attachmentsBucket)
        : undefined;
    message.invokeFunction =
      object.invokeFunction !== undefined && object.invokeFunction !== null
        ? InvokeFunctionWithRetry.fromJSON(object.invokeFunction)
        : undefined;
    message.invokeContainer =
      object.invokeContainer !== undefined && object.invokeContainer !== null
        ? InvokeContainerWithRetry.fromJSON(object.invokeContainer)
        : undefined;
    return message;
  },

  toJSON(message: Mail): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.batchSettings !== undefined &&
      (obj.batchSettings = message.batchSettings
        ? BatchSettings.toJSON(message.batchSettings)
        : undefined);
    message.attachmentsBucket !== undefined &&
      (obj.attachmentsBucket = message.attachmentsBucket
        ? ObjectStorageBucketSettings.toJSON(message.attachmentsBucket)
        : undefined);
    message.invokeFunction !== undefined &&
      (obj.invokeFunction = message.invokeFunction
        ? InvokeFunctionWithRetry.toJSON(message.invokeFunction)
        : undefined);
    message.invokeContainer !== undefined &&
      (obj.invokeContainer = message.invokeContainer
        ? InvokeContainerWithRetry.toJSON(message.invokeContainer)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mail>, I>>(object: I): Mail {
    const message = { ...baseMail } as Mail;
    message.email = object.email ?? "";
    message.batchSettings =
      object.batchSettings !== undefined && object.batchSettings !== null
        ? BatchSettings.fromPartial(object.batchSettings)
        : undefined;
    message.attachmentsBucket =
      object.attachmentsBucket !== undefined &&
      object.attachmentsBucket !== null
        ? ObjectStorageBucketSettings.fromPartial(object.attachmentsBucket)
        : undefined;
    message.invokeFunction =
      object.invokeFunction !== undefined && object.invokeFunction !== null
        ? InvokeFunctionWithRetry.fromPartial(object.invokeFunction)
        : undefined;
    message.invokeContainer =
      object.invokeContainer !== undefined && object.invokeContainer !== null
        ? InvokeContainerWithRetry.fromPartial(object.invokeContainer)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mail.$type, Mail);

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
