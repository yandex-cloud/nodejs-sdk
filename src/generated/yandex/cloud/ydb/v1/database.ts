/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { BackupConfig } from "../../../../yandex/cloud/ydb/v1/backup";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.ydb.v1";

export enum AlertEvaluationStatus {
  ALERT_EVALUATION_STATUS_UNSPECIFIED = 0,
  ALERT_EVALUATION_STATUS_OK = 1,
  ALERT_EVALUATION_STATUS_NO_DATA = 2,
  ALERT_EVALUATION_STATUS_ERROR = 3,
  ALERT_EVALUATION_STATUS_ALARM = 4,
  ALERT_EVALUATION_STATUS_WARN = 5,
  UNRECOGNIZED = -1,
}

export function alertEvaluationStatusFromJSON(
  object: any
): AlertEvaluationStatus {
  switch (object) {
    case 0:
    case "ALERT_EVALUATION_STATUS_UNSPECIFIED":
      return AlertEvaluationStatus.ALERT_EVALUATION_STATUS_UNSPECIFIED;
    case 1:
    case "ALERT_EVALUATION_STATUS_OK":
      return AlertEvaluationStatus.ALERT_EVALUATION_STATUS_OK;
    case 2:
    case "ALERT_EVALUATION_STATUS_NO_DATA":
      return AlertEvaluationStatus.ALERT_EVALUATION_STATUS_NO_DATA;
    case 3:
    case "ALERT_EVALUATION_STATUS_ERROR":
      return AlertEvaluationStatus.ALERT_EVALUATION_STATUS_ERROR;
    case 4:
    case "ALERT_EVALUATION_STATUS_ALARM":
      return AlertEvaluationStatus.ALERT_EVALUATION_STATUS_ALARM;
    case 5:
    case "ALERT_EVALUATION_STATUS_WARN":
      return AlertEvaluationStatus.ALERT_EVALUATION_STATUS_WARN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AlertEvaluationStatus.UNRECOGNIZED;
  }
}

export function alertEvaluationStatusToJSON(
  object: AlertEvaluationStatus
): string {
  switch (object) {
    case AlertEvaluationStatus.ALERT_EVALUATION_STATUS_UNSPECIFIED:
      return "ALERT_EVALUATION_STATUS_UNSPECIFIED";
    case AlertEvaluationStatus.ALERT_EVALUATION_STATUS_OK:
      return "ALERT_EVALUATION_STATUS_OK";
    case AlertEvaluationStatus.ALERT_EVALUATION_STATUS_NO_DATA:
      return "ALERT_EVALUATION_STATUS_NO_DATA";
    case AlertEvaluationStatus.ALERT_EVALUATION_STATUS_ERROR:
      return "ALERT_EVALUATION_STATUS_ERROR";
    case AlertEvaluationStatus.ALERT_EVALUATION_STATUS_ALARM:
      return "ALERT_EVALUATION_STATUS_ALARM";
    case AlertEvaluationStatus.ALERT_EVALUATION_STATUS_WARN:
      return "ALERT_EVALUATION_STATUS_WARN";
    default:
      return "UNKNOWN";
  }
}

/** YDB database. */
export interface Database {
  $type: "yandex.cloud.ydb.v1.Database";
  id: string;
  folderId: string;
  createdAt?: Date;
  name: string;
  description: string;
  status: Database_Status;
  endpoint: string;
  resourcePresetId: string;
  storageConfig?: StorageConfig;
  scalePolicy?: ScalePolicy;
  networkId: string;
  subnetIds: string[];
  /** deprecated field */
  zonalDatabase?: ZonalDatabase | undefined;
  /** deprecated field */
  regionalDatabase?: RegionalDatabase | undefined;
  dedicatedDatabase?: DedicatedDatabase | undefined;
  serverlessDatabase?: ServerlessDatabase | undefined;
  assignPublicIps: boolean;
  locationId: string;
  labels: { [key: string]: string };
  backupConfig?: BackupConfig;
  documentApiEndpoint: string;
  kinesisApiEndpoint: string;
  kafkaApiEndpoint: string;
  monitoringConfig?: MonitoringConfig;
  deletionProtection: boolean;
}

export enum Database_Status {
  STATUS_UNSPECIFIED = 0,
  PROVISIONING = 1,
  RUNNING = 2,
  UPDATING = 4,
  ERROR = 5,
  DELETING = 6,
  STARTING = 7,
  STOPPED = 8,
  UNRECOGNIZED = -1,
}

export function database_StatusFromJSON(object: any): Database_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Database_Status.STATUS_UNSPECIFIED;
    case 1:
    case "PROVISIONING":
      return Database_Status.PROVISIONING;
    case 2:
    case "RUNNING":
      return Database_Status.RUNNING;
    case 4:
    case "UPDATING":
      return Database_Status.UPDATING;
    case 5:
    case "ERROR":
      return Database_Status.ERROR;
    case 6:
    case "DELETING":
      return Database_Status.DELETING;
    case 7:
    case "STARTING":
      return Database_Status.STARTING;
    case 8:
    case "STOPPED":
      return Database_Status.STOPPED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Database_Status.UNRECOGNIZED;
  }
}

export function database_StatusToJSON(object: Database_Status): string {
  switch (object) {
    case Database_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Database_Status.PROVISIONING:
      return "PROVISIONING";
    case Database_Status.RUNNING:
      return "RUNNING";
    case Database_Status.UPDATING:
      return "UPDATING";
    case Database_Status.ERROR:
      return "ERROR";
    case Database_Status.DELETING:
      return "DELETING";
    case Database_Status.STARTING:
      return "STARTING";
    case Database_Status.STOPPED:
      return "STOPPED";
    default:
      return "UNKNOWN";
  }
}

export interface Database_LabelsEntry {
  $type: "yandex.cloud.ydb.v1.Database.LabelsEntry";
  key: string;
  value: string;
}

export interface AlertParameter {
  $type: "yandex.cloud.ydb.v1.AlertParameter";
  doubleParameterValue?: AlertParameter_DoubleParameterValue | undefined;
  integerParameterValue?: AlertParameter_IntegerParameterValue | undefined;
  textParameterValue?: AlertParameter_TextParameterValue | undefined;
  textListParameterValue?: AlertParameter_TextListParameterValue | undefined;
  labelListParameterValue?: AlertParameter_LabelListParameterValue | undefined;
}

export interface AlertParameter_DoubleParameterValue {
  $type: "yandex.cloud.ydb.v1.AlertParameter.DoubleParameterValue";
  /** Required. Parameter name */
  name: string;
  /** Required. Parameter value */
  value: number;
}

export interface AlertParameter_IntegerParameterValue {
  $type: "yandex.cloud.ydb.v1.AlertParameter.IntegerParameterValue";
  /** Required. Parameter name */
  name: string;
  /** Required. Parameter value */
  value: number;
}

export interface AlertParameter_TextParameterValue {
  $type: "yandex.cloud.ydb.v1.AlertParameter.TextParameterValue";
  /** Required. Parameter name */
  name: string;
  /** Required. Parameter value */
  value: string;
}

export interface AlertParameter_TextListParameterValue {
  $type: "yandex.cloud.ydb.v1.AlertParameter.TextListParameterValue";
  /** Required. Parameter name */
  name: string;
  /** Required. Parameter value */
  values: string[];
}

export interface AlertParameter_LabelListParameterValue {
  $type: "yandex.cloud.ydb.v1.AlertParameter.LabelListParameterValue";
  /** Required. Parameter name */
  name: string;
  /** Required. Parameter value */
  values: string[];
}

export interface NotificationChannel {
  $type: "yandex.cloud.ydb.v1.NotificationChannel";
  notificationChannelId: string;
  notifyAboutStatuses: AlertEvaluationStatus[];
  repeateNotifyDelayMs: number;
}

export interface Alert {
  $type: "yandex.cloud.ydb.v1.Alert";
  /** output only field. */
  alertId: string;
  /** template of the alert. */
  alertTemplateId: string;
  /** name of the alert. */
  name: string;
  /** human readable description of the alert. */
  description: string;
  /** the notification channels of the alert. */
  notificationChannels: NotificationChannel[];
  /** alert parameters to override. */
  alertParameters: AlertParameter[];
  /** alert paratemers to override. */
  alertThresholds: AlertParameter[];
}

export interface MonitoringConfig {
  $type: "yandex.cloud.ydb.v1.MonitoringConfig";
  alerts: Alert[];
}

export interface DedicatedDatabase {
  $type: "yandex.cloud.ydb.v1.DedicatedDatabase";
  resourcePresetId: string;
  storageConfig?: StorageConfig;
  scalePolicy?: ScalePolicy;
  networkId: string;
  subnetIds: string[];
  assignPublicIps: boolean;
}

export interface ServerlessDatabase {
  $type: "yandex.cloud.ydb.v1.ServerlessDatabase";
  /**
   * Let's define 1 RU  - 1 request unit
   * Let's define 1 RCU - 1 request capacity unit, which is 1 RU per second.
   * If `enable_throttling_rcu_limit` flag is true, the database will be throttled using `throttling_rcu_limit` value.
   * Otherwise, the database is throttled using the cloud quotas.
   * If zero, all requests will be blocked until non zero value is set.
   */
  throttlingRcuLimit: number;
  /** Specify serverless database storage size limit. If zero, default value is applied. */
  storageSizeLimit: number;
  /** If false, the database is throttled by cloud value. */
  enableThrottlingRcuLimit: boolean;
  /**
   * Specify the number of provisioned RCUs to pay less if the database has predictable load.
   * You will be charged for the provisioned capacity regularly even if this capacity is not fully consumed.
   * You will be charged for the on-demand consumption only if provisioned capacity is consumed.
   */
  provisionedRcuLimit: number;
  /** write quota for topic service, defined in bytes per second. */
  topicWriteQuota: number;
}

export interface ZonalDatabase {
  $type: "yandex.cloud.ydb.v1.ZonalDatabase";
  zoneId: string;
}

export interface RegionalDatabase {
  $type: "yandex.cloud.ydb.v1.RegionalDatabase";
  regionId: string;
}

export interface ScalePolicy {
  $type: "yandex.cloud.ydb.v1.ScalePolicy";
  fixedScale?: ScalePolicy_FixedScale | undefined;
}

export interface ScalePolicy_FixedScale {
  $type: "yandex.cloud.ydb.v1.ScalePolicy.FixedScale";
  size: number;
}

export interface StorageConfig {
  $type: "yandex.cloud.ydb.v1.StorageConfig";
  storageOptions: StorageOption[];
  /** output only field: storage size limit of dedicated database. */
  storageSizeLimit: number;
}

export interface StorageOption {
  $type: "yandex.cloud.ydb.v1.StorageOption";
  storageTypeId: string;
  groupCount: number;
}

const baseDatabase: object = {
  $type: "yandex.cloud.ydb.v1.Database",
  id: "",
  folderId: "",
  name: "",
  description: "",
  status: 0,
  endpoint: "",
  resourcePresetId: "",
  networkId: "",
  subnetIds: "",
  assignPublicIps: false,
  locationId: "",
  documentApiEndpoint: "",
  kinesisApiEndpoint: "",
  kafkaApiEndpoint: "",
  deletionProtection: false,
};

export const Database = {
  $type: "yandex.cloud.ydb.v1.Database" as const,

  encode(
    message: Database,
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
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.endpoint !== "") {
      writer.uint32(66).string(message.endpoint);
    }
    if (message.resourcePresetId !== "") {
      writer.uint32(74).string(message.resourcePresetId);
    }
    if (message.storageConfig !== undefined) {
      StorageConfig.encode(
        message.storageConfig,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.scalePolicy !== undefined) {
      ScalePolicy.encode(
        message.scalePolicy,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.networkId !== "") {
      writer.uint32(98).string(message.networkId);
    }
    for (const v of message.subnetIds) {
      writer.uint32(106).string(v!);
    }
    if (message.zonalDatabase !== undefined) {
      ZonalDatabase.encode(
        message.zonalDatabase,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.regionalDatabase !== undefined) {
      RegionalDatabase.encode(
        message.regionalDatabase,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.dedicatedDatabase !== undefined) {
      DedicatedDatabase.encode(
        message.dedicatedDatabase,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.serverlessDatabase !== undefined) {
      ServerlessDatabase.encode(
        message.serverlessDatabase,
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.assignPublicIps === true) {
      writer.uint32(128).bool(message.assignPublicIps);
    }
    if (message.locationId !== "") {
      writer.uint32(138).string(message.locationId);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Database_LabelsEntry.encode(
        {
          $type: "yandex.cloud.ydb.v1.Database.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(162).fork()
      ).ldelim();
    });
    if (message.backupConfig !== undefined) {
      BackupConfig.encode(
        message.backupConfig,
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.documentApiEndpoint !== "") {
      writer.uint32(178).string(message.documentApiEndpoint);
    }
    if (message.kinesisApiEndpoint !== "") {
      writer.uint32(186).string(message.kinesisApiEndpoint);
    }
    if (message.kafkaApiEndpoint !== "") {
      writer.uint32(210).string(message.kafkaApiEndpoint);
    }
    if (message.monitoringConfig !== undefined) {
      MonitoringConfig.encode(
        message.monitoringConfig,
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(200).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Database {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDatabase } as Database;
    message.subnetIds = [];
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
          message.status = reader.int32() as any;
          break;
        case 8:
          message.endpoint = reader.string();
          break;
        case 9:
          message.resourcePresetId = reader.string();
          break;
        case 10:
          message.storageConfig = StorageConfig.decode(reader, reader.uint32());
          break;
        case 11:
          message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
          break;
        case 12:
          message.networkId = reader.string();
          break;
        case 13:
          message.subnetIds.push(reader.string());
          break;
        case 14:
          message.zonalDatabase = ZonalDatabase.decode(reader, reader.uint32());
          break;
        case 15:
          message.regionalDatabase = RegionalDatabase.decode(
            reader,
            reader.uint32()
          );
          break;
        case 18:
          message.dedicatedDatabase = DedicatedDatabase.decode(
            reader,
            reader.uint32()
          );
          break;
        case 19:
          message.serverlessDatabase = ServerlessDatabase.decode(
            reader,
            reader.uint32()
          );
          break;
        case 16:
          message.assignPublicIps = reader.bool();
          break;
        case 17:
          message.locationId = reader.string();
          break;
        case 20:
          const entry20 = Database_LabelsEntry.decode(reader, reader.uint32());
          if (entry20.value !== undefined) {
            message.labels[entry20.key] = entry20.value;
          }
          break;
        case 21:
          message.backupConfig = BackupConfig.decode(reader, reader.uint32());
          break;
        case 22:
          message.documentApiEndpoint = reader.string();
          break;
        case 23:
          message.kinesisApiEndpoint = reader.string();
          break;
        case 26:
          message.kafkaApiEndpoint = reader.string();
          break;
        case 24:
          message.monitoringConfig = MonitoringConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 25:
          message.deletionProtection = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Database {
    const message = { ...baseDatabase } as Database;
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
    message.status =
      object.status !== undefined && object.status !== null
        ? database_StatusFromJSON(object.status)
        : 0;
    message.endpoint =
      object.endpoint !== undefined && object.endpoint !== null
        ? String(object.endpoint)
        : "";
    message.resourcePresetId =
      object.resourcePresetId !== undefined && object.resourcePresetId !== null
        ? String(object.resourcePresetId)
        : "";
    message.storageConfig =
      object.storageConfig !== undefined && object.storageConfig !== null
        ? StorageConfig.fromJSON(object.storageConfig)
        : undefined;
    message.scalePolicy =
      object.scalePolicy !== undefined && object.scalePolicy !== null
        ? ScalePolicy.fromJSON(object.scalePolicy)
        : undefined;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.subnetIds = (object.subnetIds ?? []).map((e: any) => String(e));
    message.zonalDatabase =
      object.zonalDatabase !== undefined && object.zonalDatabase !== null
        ? ZonalDatabase.fromJSON(object.zonalDatabase)
        : undefined;
    message.regionalDatabase =
      object.regionalDatabase !== undefined && object.regionalDatabase !== null
        ? RegionalDatabase.fromJSON(object.regionalDatabase)
        : undefined;
    message.dedicatedDatabase =
      object.dedicatedDatabase !== undefined &&
      object.dedicatedDatabase !== null
        ? DedicatedDatabase.fromJSON(object.dedicatedDatabase)
        : undefined;
    message.serverlessDatabase =
      object.serverlessDatabase !== undefined &&
      object.serverlessDatabase !== null
        ? ServerlessDatabase.fromJSON(object.serverlessDatabase)
        : undefined;
    message.assignPublicIps =
      object.assignPublicIps !== undefined && object.assignPublicIps !== null
        ? Boolean(object.assignPublicIps)
        : false;
    message.locationId =
      object.locationId !== undefined && object.locationId !== null
        ? String(object.locationId)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.backupConfig =
      object.backupConfig !== undefined && object.backupConfig !== null
        ? BackupConfig.fromJSON(object.backupConfig)
        : undefined;
    message.documentApiEndpoint =
      object.documentApiEndpoint !== undefined &&
      object.documentApiEndpoint !== null
        ? String(object.documentApiEndpoint)
        : "";
    message.kinesisApiEndpoint =
      object.kinesisApiEndpoint !== undefined &&
      object.kinesisApiEndpoint !== null
        ? String(object.kinesisApiEndpoint)
        : "";
    message.kafkaApiEndpoint =
      object.kafkaApiEndpoint !== undefined && object.kafkaApiEndpoint !== null
        ? String(object.kafkaApiEndpoint)
        : "";
    message.monitoringConfig =
      object.monitoringConfig !== undefined && object.monitoringConfig !== null
        ? MonitoringConfig.fromJSON(object.monitoringConfig)
        : undefined;
    message.deletionProtection =
      object.deletionProtection !== undefined &&
      object.deletionProtection !== null
        ? Boolean(object.deletionProtection)
        : false;
    return message;
  },

  toJSON(message: Database): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.status !== undefined &&
      (obj.status = database_StatusToJSON(message.status));
    message.endpoint !== undefined && (obj.endpoint = message.endpoint);
    message.resourcePresetId !== undefined &&
      (obj.resourcePresetId = message.resourcePresetId);
    message.storageConfig !== undefined &&
      (obj.storageConfig = message.storageConfig
        ? StorageConfig.toJSON(message.storageConfig)
        : undefined);
    message.scalePolicy !== undefined &&
      (obj.scalePolicy = message.scalePolicy
        ? ScalePolicy.toJSON(message.scalePolicy)
        : undefined);
    message.networkId !== undefined && (obj.networkId = message.networkId);
    if (message.subnetIds) {
      obj.subnetIds = message.subnetIds.map((e) => e);
    } else {
      obj.subnetIds = [];
    }
    message.zonalDatabase !== undefined &&
      (obj.zonalDatabase = message.zonalDatabase
        ? ZonalDatabase.toJSON(message.zonalDatabase)
        : undefined);
    message.regionalDatabase !== undefined &&
      (obj.regionalDatabase = message.regionalDatabase
        ? RegionalDatabase.toJSON(message.regionalDatabase)
        : undefined);
    message.dedicatedDatabase !== undefined &&
      (obj.dedicatedDatabase = message.dedicatedDatabase
        ? DedicatedDatabase.toJSON(message.dedicatedDatabase)
        : undefined);
    message.serverlessDatabase !== undefined &&
      (obj.serverlessDatabase = message.serverlessDatabase
        ? ServerlessDatabase.toJSON(message.serverlessDatabase)
        : undefined);
    message.assignPublicIps !== undefined &&
      (obj.assignPublicIps = message.assignPublicIps);
    message.locationId !== undefined && (obj.locationId = message.locationId);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.backupConfig !== undefined &&
      (obj.backupConfig = message.backupConfig
        ? BackupConfig.toJSON(message.backupConfig)
        : undefined);
    message.documentApiEndpoint !== undefined &&
      (obj.documentApiEndpoint = message.documentApiEndpoint);
    message.kinesisApiEndpoint !== undefined &&
      (obj.kinesisApiEndpoint = message.kinesisApiEndpoint);
    message.kafkaApiEndpoint !== undefined &&
      (obj.kafkaApiEndpoint = message.kafkaApiEndpoint);
    message.monitoringConfig !== undefined &&
      (obj.monitoringConfig = message.monitoringConfig
        ? MonitoringConfig.toJSON(message.monitoringConfig)
        : undefined);
    message.deletionProtection !== undefined &&
      (obj.deletionProtection = message.deletionProtection);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Database>, I>>(object: I): Database {
    const message = { ...baseDatabase } as Database;
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.status = object.status ?? 0;
    message.endpoint = object.endpoint ?? "";
    message.resourcePresetId = object.resourcePresetId ?? "";
    message.storageConfig =
      object.storageConfig !== undefined && object.storageConfig !== null
        ? StorageConfig.fromPartial(object.storageConfig)
        : undefined;
    message.scalePolicy =
      object.scalePolicy !== undefined && object.scalePolicy !== null
        ? ScalePolicy.fromPartial(object.scalePolicy)
        : undefined;
    message.networkId = object.networkId ?? "";
    message.subnetIds = object.subnetIds?.map((e) => e) || [];
    message.zonalDatabase =
      object.zonalDatabase !== undefined && object.zonalDatabase !== null
        ? ZonalDatabase.fromPartial(object.zonalDatabase)
        : undefined;
    message.regionalDatabase =
      object.regionalDatabase !== undefined && object.regionalDatabase !== null
        ? RegionalDatabase.fromPartial(object.regionalDatabase)
        : undefined;
    message.dedicatedDatabase =
      object.dedicatedDatabase !== undefined &&
      object.dedicatedDatabase !== null
        ? DedicatedDatabase.fromPartial(object.dedicatedDatabase)
        : undefined;
    message.serverlessDatabase =
      object.serverlessDatabase !== undefined &&
      object.serverlessDatabase !== null
        ? ServerlessDatabase.fromPartial(object.serverlessDatabase)
        : undefined;
    message.assignPublicIps = object.assignPublicIps ?? false;
    message.locationId = object.locationId ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.backupConfig =
      object.backupConfig !== undefined && object.backupConfig !== null
        ? BackupConfig.fromPartial(object.backupConfig)
        : undefined;
    message.documentApiEndpoint = object.documentApiEndpoint ?? "";
    message.kinesisApiEndpoint = object.kinesisApiEndpoint ?? "";
    message.kafkaApiEndpoint = object.kafkaApiEndpoint ?? "";
    message.monitoringConfig =
      object.monitoringConfig !== undefined && object.monitoringConfig !== null
        ? MonitoringConfig.fromPartial(object.monitoringConfig)
        : undefined;
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(Database.$type, Database);

const baseDatabase_LabelsEntry: object = {
  $type: "yandex.cloud.ydb.v1.Database.LabelsEntry",
  key: "",
  value: "",
};

export const Database_LabelsEntry = {
  $type: "yandex.cloud.ydb.v1.Database.LabelsEntry" as const,

  encode(
    message: Database_LabelsEntry,
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
  ): Database_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDatabase_LabelsEntry } as Database_LabelsEntry;
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

  fromJSON(object: any): Database_LabelsEntry {
    const message = { ...baseDatabase_LabelsEntry } as Database_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Database_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Database_LabelsEntry>, I>>(
    object: I
  ): Database_LabelsEntry {
    const message = { ...baseDatabase_LabelsEntry } as Database_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Database_LabelsEntry.$type, Database_LabelsEntry);

const baseAlertParameter: object = {
  $type: "yandex.cloud.ydb.v1.AlertParameter",
};

export const AlertParameter = {
  $type: "yandex.cloud.ydb.v1.AlertParameter" as const,

  encode(
    message: AlertParameter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.doubleParameterValue !== undefined) {
      AlertParameter_DoubleParameterValue.encode(
        message.doubleParameterValue,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.integerParameterValue !== undefined) {
      AlertParameter_IntegerParameterValue.encode(
        message.integerParameterValue,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.textParameterValue !== undefined) {
      AlertParameter_TextParameterValue.encode(
        message.textParameterValue,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.textListParameterValue !== undefined) {
      AlertParameter_TextListParameterValue.encode(
        message.textListParameterValue,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.labelListParameterValue !== undefined) {
      AlertParameter_LabelListParameterValue.encode(
        message.labelListParameterValue,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AlertParameter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAlertParameter } as AlertParameter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.doubleParameterValue =
            AlertParameter_DoubleParameterValue.decode(reader, reader.uint32());
          break;
        case 2:
          message.integerParameterValue =
            AlertParameter_IntegerParameterValue.decode(
              reader,
              reader.uint32()
            );
          break;
        case 3:
          message.textParameterValue = AlertParameter_TextParameterValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.textListParameterValue =
            AlertParameter_TextListParameterValue.decode(
              reader,
              reader.uint32()
            );
          break;
        case 5:
          message.labelListParameterValue =
            AlertParameter_LabelListParameterValue.decode(
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

  fromJSON(object: any): AlertParameter {
    const message = { ...baseAlertParameter } as AlertParameter;
    message.doubleParameterValue =
      object.doubleParameterValue !== undefined &&
      object.doubleParameterValue !== null
        ? AlertParameter_DoubleParameterValue.fromJSON(
            object.doubleParameterValue
          )
        : undefined;
    message.integerParameterValue =
      object.integerParameterValue !== undefined &&
      object.integerParameterValue !== null
        ? AlertParameter_IntegerParameterValue.fromJSON(
            object.integerParameterValue
          )
        : undefined;
    message.textParameterValue =
      object.textParameterValue !== undefined &&
      object.textParameterValue !== null
        ? AlertParameter_TextParameterValue.fromJSON(object.textParameterValue)
        : undefined;
    message.textListParameterValue =
      object.textListParameterValue !== undefined &&
      object.textListParameterValue !== null
        ? AlertParameter_TextListParameterValue.fromJSON(
            object.textListParameterValue
          )
        : undefined;
    message.labelListParameterValue =
      object.labelListParameterValue !== undefined &&
      object.labelListParameterValue !== null
        ? AlertParameter_LabelListParameterValue.fromJSON(
            object.labelListParameterValue
          )
        : undefined;
    return message;
  },

  toJSON(message: AlertParameter): unknown {
    const obj: any = {};
    message.doubleParameterValue !== undefined &&
      (obj.doubleParameterValue = message.doubleParameterValue
        ? AlertParameter_DoubleParameterValue.toJSON(
            message.doubleParameterValue
          )
        : undefined);
    message.integerParameterValue !== undefined &&
      (obj.integerParameterValue = message.integerParameterValue
        ? AlertParameter_IntegerParameterValue.toJSON(
            message.integerParameterValue
          )
        : undefined);
    message.textParameterValue !== undefined &&
      (obj.textParameterValue = message.textParameterValue
        ? AlertParameter_TextParameterValue.toJSON(message.textParameterValue)
        : undefined);
    message.textListParameterValue !== undefined &&
      (obj.textListParameterValue = message.textListParameterValue
        ? AlertParameter_TextListParameterValue.toJSON(
            message.textListParameterValue
          )
        : undefined);
    message.labelListParameterValue !== undefined &&
      (obj.labelListParameterValue = message.labelListParameterValue
        ? AlertParameter_LabelListParameterValue.toJSON(
            message.labelListParameterValue
          )
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AlertParameter>, I>>(
    object: I
  ): AlertParameter {
    const message = { ...baseAlertParameter } as AlertParameter;
    message.doubleParameterValue =
      object.doubleParameterValue !== undefined &&
      object.doubleParameterValue !== null
        ? AlertParameter_DoubleParameterValue.fromPartial(
            object.doubleParameterValue
          )
        : undefined;
    message.integerParameterValue =
      object.integerParameterValue !== undefined &&
      object.integerParameterValue !== null
        ? AlertParameter_IntegerParameterValue.fromPartial(
            object.integerParameterValue
          )
        : undefined;
    message.textParameterValue =
      object.textParameterValue !== undefined &&
      object.textParameterValue !== null
        ? AlertParameter_TextParameterValue.fromPartial(
            object.textParameterValue
          )
        : undefined;
    message.textListParameterValue =
      object.textListParameterValue !== undefined &&
      object.textListParameterValue !== null
        ? AlertParameter_TextListParameterValue.fromPartial(
            object.textListParameterValue
          )
        : undefined;
    message.labelListParameterValue =
      object.labelListParameterValue !== undefined &&
      object.labelListParameterValue !== null
        ? AlertParameter_LabelListParameterValue.fromPartial(
            object.labelListParameterValue
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(AlertParameter.$type, AlertParameter);

const baseAlertParameter_DoubleParameterValue: object = {
  $type: "yandex.cloud.ydb.v1.AlertParameter.DoubleParameterValue",
  name: "",
  value: 0,
};

export const AlertParameter_DoubleParameterValue = {
  $type: "yandex.cloud.ydb.v1.AlertParameter.DoubleParameterValue" as const,

  encode(
    message: AlertParameter_DoubleParameterValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== 0) {
      writer.uint32(17).double(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AlertParameter_DoubleParameterValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAlertParameter_DoubleParameterValue,
    } as AlertParameter_DoubleParameterValue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AlertParameter_DoubleParameterValue {
    const message = {
      ...baseAlertParameter_DoubleParameterValue,
    } as AlertParameter_DoubleParameterValue;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Number(object.value)
        : 0;
    return message;
  },

  toJSON(message: AlertParameter_DoubleParameterValue): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AlertParameter_DoubleParameterValue>, I>
  >(object: I): AlertParameter_DoubleParameterValue {
    const message = {
      ...baseAlertParameter_DoubleParameterValue,
    } as AlertParameter_DoubleParameterValue;
    message.name = object.name ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  AlertParameter_DoubleParameterValue.$type,
  AlertParameter_DoubleParameterValue
);

const baseAlertParameter_IntegerParameterValue: object = {
  $type: "yandex.cloud.ydb.v1.AlertParameter.IntegerParameterValue",
  name: "",
  value: 0,
};

export const AlertParameter_IntegerParameterValue = {
  $type: "yandex.cloud.ydb.v1.AlertParameter.IntegerParameterValue" as const,

  encode(
    message: AlertParameter_IntegerParameterValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== 0) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AlertParameter_IntegerParameterValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAlertParameter_IntegerParameterValue,
    } as AlertParameter_IntegerParameterValue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AlertParameter_IntegerParameterValue {
    const message = {
      ...baseAlertParameter_IntegerParameterValue,
    } as AlertParameter_IntegerParameterValue;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Number(object.value)
        : 0;
    return message;
  },

  toJSON(message: AlertParameter_IntegerParameterValue): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AlertParameter_IntegerParameterValue>, I>
  >(object: I): AlertParameter_IntegerParameterValue {
    const message = {
      ...baseAlertParameter_IntegerParameterValue,
    } as AlertParameter_IntegerParameterValue;
    message.name = object.name ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  AlertParameter_IntegerParameterValue.$type,
  AlertParameter_IntegerParameterValue
);

const baseAlertParameter_TextParameterValue: object = {
  $type: "yandex.cloud.ydb.v1.AlertParameter.TextParameterValue",
  name: "",
  value: "",
};

export const AlertParameter_TextParameterValue = {
  $type: "yandex.cloud.ydb.v1.AlertParameter.TextParameterValue" as const,

  encode(
    message: AlertParameter_TextParameterValue,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AlertParameter_TextParameterValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAlertParameter_TextParameterValue,
    } as AlertParameter_TextParameterValue;
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

  fromJSON(object: any): AlertParameter_TextParameterValue {
    const message = {
      ...baseAlertParameter_TextParameterValue,
    } as AlertParameter_TextParameterValue;
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

  toJSON(message: AlertParameter_TextParameterValue): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AlertParameter_TextParameterValue>, I>
  >(object: I): AlertParameter_TextParameterValue {
    const message = {
      ...baseAlertParameter_TextParameterValue,
    } as AlertParameter_TextParameterValue;
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  AlertParameter_TextParameterValue.$type,
  AlertParameter_TextParameterValue
);

const baseAlertParameter_TextListParameterValue: object = {
  $type: "yandex.cloud.ydb.v1.AlertParameter.TextListParameterValue",
  name: "",
  values: "",
};

export const AlertParameter_TextListParameterValue = {
  $type: "yandex.cloud.ydb.v1.AlertParameter.TextListParameterValue" as const,

  encode(
    message: AlertParameter_TextListParameterValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.values) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AlertParameter_TextListParameterValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAlertParameter_TextListParameterValue,
    } as AlertParameter_TextListParameterValue;
    message.values = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.values.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AlertParameter_TextListParameterValue {
    const message = {
      ...baseAlertParameter_TextListParameterValue,
    } as AlertParameter_TextListParameterValue;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.values = (object.values ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: AlertParameter_TextListParameterValue): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.values) {
      obj.values = message.values.map((e) => e);
    } else {
      obj.values = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AlertParameter_TextListParameterValue>, I>
  >(object: I): AlertParameter_TextListParameterValue {
    const message = {
      ...baseAlertParameter_TextListParameterValue,
    } as AlertParameter_TextListParameterValue;
    message.name = object.name ?? "";
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  AlertParameter_TextListParameterValue.$type,
  AlertParameter_TextListParameterValue
);

const baseAlertParameter_LabelListParameterValue: object = {
  $type: "yandex.cloud.ydb.v1.AlertParameter.LabelListParameterValue",
  name: "",
  values: "",
};

export const AlertParameter_LabelListParameterValue = {
  $type: "yandex.cloud.ydb.v1.AlertParameter.LabelListParameterValue" as const,

  encode(
    message: AlertParameter_LabelListParameterValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.values) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AlertParameter_LabelListParameterValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAlertParameter_LabelListParameterValue,
    } as AlertParameter_LabelListParameterValue;
    message.values = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.values.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AlertParameter_LabelListParameterValue {
    const message = {
      ...baseAlertParameter_LabelListParameterValue,
    } as AlertParameter_LabelListParameterValue;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.values = (object.values ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: AlertParameter_LabelListParameterValue): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.values) {
      obj.values = message.values.map((e) => e);
    } else {
      obj.values = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AlertParameter_LabelListParameterValue>, I>
  >(object: I): AlertParameter_LabelListParameterValue {
    const message = {
      ...baseAlertParameter_LabelListParameterValue,
    } as AlertParameter_LabelListParameterValue;
    message.name = object.name ?? "";
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  AlertParameter_LabelListParameterValue.$type,
  AlertParameter_LabelListParameterValue
);

const baseNotificationChannel: object = {
  $type: "yandex.cloud.ydb.v1.NotificationChannel",
  notificationChannelId: "",
  notifyAboutStatuses: 0,
  repeateNotifyDelayMs: 0,
};

export const NotificationChannel = {
  $type: "yandex.cloud.ydb.v1.NotificationChannel" as const,

  encode(
    message: NotificationChannel,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.notificationChannelId !== "") {
      writer.uint32(10).string(message.notificationChannelId);
    }
    writer.uint32(18).fork();
    for (const v of message.notifyAboutStatuses) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.repeateNotifyDelayMs !== 0) {
      writer.uint32(24).int64(message.repeateNotifyDelayMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NotificationChannel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNotificationChannel } as NotificationChannel;
    message.notifyAboutStatuses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notificationChannelId = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notifyAboutStatuses.push(reader.int32() as any);
            }
          } else {
            message.notifyAboutStatuses.push(reader.int32() as any);
          }
          break;
        case 3:
          message.repeateNotifyDelayMs = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NotificationChannel {
    const message = { ...baseNotificationChannel } as NotificationChannel;
    message.notificationChannelId =
      object.notificationChannelId !== undefined &&
      object.notificationChannelId !== null
        ? String(object.notificationChannelId)
        : "";
    message.notifyAboutStatuses = (object.notifyAboutStatuses ?? []).map(
      (e: any) => alertEvaluationStatusFromJSON(e)
    );
    message.repeateNotifyDelayMs =
      object.repeateNotifyDelayMs !== undefined &&
      object.repeateNotifyDelayMs !== null
        ? Number(object.repeateNotifyDelayMs)
        : 0;
    return message;
  },

  toJSON(message: NotificationChannel): unknown {
    const obj: any = {};
    message.notificationChannelId !== undefined &&
      (obj.notificationChannelId = message.notificationChannelId);
    if (message.notifyAboutStatuses) {
      obj.notifyAboutStatuses = message.notifyAboutStatuses.map((e) =>
        alertEvaluationStatusToJSON(e)
      );
    } else {
      obj.notifyAboutStatuses = [];
    }
    message.repeateNotifyDelayMs !== undefined &&
      (obj.repeateNotifyDelayMs = Math.round(message.repeateNotifyDelayMs));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NotificationChannel>, I>>(
    object: I
  ): NotificationChannel {
    const message = { ...baseNotificationChannel } as NotificationChannel;
    message.notificationChannelId = object.notificationChannelId ?? "";
    message.notifyAboutStatuses =
      object.notifyAboutStatuses?.map((e) => e) || [];
    message.repeateNotifyDelayMs = object.repeateNotifyDelayMs ?? 0;
    return message;
  },
};

messageTypeRegistry.set(NotificationChannel.$type, NotificationChannel);

const baseAlert: object = {
  $type: "yandex.cloud.ydb.v1.Alert",
  alertId: "",
  alertTemplateId: "",
  name: "",
  description: "",
};

export const Alert = {
  $type: "yandex.cloud.ydb.v1.Alert" as const,

  encode(message: Alert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alertId !== "") {
      writer.uint32(10).string(message.alertId);
    }
    if (message.alertTemplateId !== "") {
      writer.uint32(18).string(message.alertTemplateId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    for (const v of message.notificationChannels) {
      NotificationChannel.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.alertParameters) {
      AlertParameter.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.alertThresholds) {
      AlertParameter.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Alert {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAlert } as Alert;
    message.notificationChannels = [];
    message.alertParameters = [];
    message.alertThresholds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alertId = reader.string();
          break;
        case 2:
          message.alertTemplateId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.notificationChannels.push(
            NotificationChannel.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.alertParameters.push(
            AlertParameter.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.alertThresholds.push(
            AlertParameter.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Alert {
    const message = { ...baseAlert } as Alert;
    message.alertId =
      object.alertId !== undefined && object.alertId !== null
        ? String(object.alertId)
        : "";
    message.alertTemplateId =
      object.alertTemplateId !== undefined && object.alertTemplateId !== null
        ? String(object.alertTemplateId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.notificationChannels = (object.notificationChannels ?? []).map(
      (e: any) => NotificationChannel.fromJSON(e)
    );
    message.alertParameters = (object.alertParameters ?? []).map((e: any) =>
      AlertParameter.fromJSON(e)
    );
    message.alertThresholds = (object.alertThresholds ?? []).map((e: any) =>
      AlertParameter.fromJSON(e)
    );
    return message;
  },

  toJSON(message: Alert): unknown {
    const obj: any = {};
    message.alertId !== undefined && (obj.alertId = message.alertId);
    message.alertTemplateId !== undefined &&
      (obj.alertTemplateId = message.alertTemplateId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.notificationChannels) {
      obj.notificationChannels = message.notificationChannels.map((e) =>
        e ? NotificationChannel.toJSON(e) : undefined
      );
    } else {
      obj.notificationChannels = [];
    }
    if (message.alertParameters) {
      obj.alertParameters = message.alertParameters.map((e) =>
        e ? AlertParameter.toJSON(e) : undefined
      );
    } else {
      obj.alertParameters = [];
    }
    if (message.alertThresholds) {
      obj.alertThresholds = message.alertThresholds.map((e) =>
        e ? AlertParameter.toJSON(e) : undefined
      );
    } else {
      obj.alertThresholds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Alert>, I>>(object: I): Alert {
    const message = { ...baseAlert } as Alert;
    message.alertId = object.alertId ?? "";
    message.alertTemplateId = object.alertTemplateId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.notificationChannels =
      object.notificationChannels?.map((e) =>
        NotificationChannel.fromPartial(e)
      ) || [];
    message.alertParameters =
      object.alertParameters?.map((e) => AlertParameter.fromPartial(e)) || [];
    message.alertThresholds =
      object.alertThresholds?.map((e) => AlertParameter.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Alert.$type, Alert);

const baseMonitoringConfig: object = {
  $type: "yandex.cloud.ydb.v1.MonitoringConfig",
};

export const MonitoringConfig = {
  $type: "yandex.cloud.ydb.v1.MonitoringConfig" as const,

  encode(
    message: MonitoringConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.alerts) {
      Alert.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MonitoringConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMonitoringConfig } as MonitoringConfig;
    message.alerts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alerts.push(Alert.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MonitoringConfig {
    const message = { ...baseMonitoringConfig } as MonitoringConfig;
    message.alerts = (object.alerts ?? []).map((e: any) => Alert.fromJSON(e));
    return message;
  },

  toJSON(message: MonitoringConfig): unknown {
    const obj: any = {};
    if (message.alerts) {
      obj.alerts = message.alerts.map((e) => (e ? Alert.toJSON(e) : undefined));
    } else {
      obj.alerts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MonitoringConfig>, I>>(
    object: I
  ): MonitoringConfig {
    const message = { ...baseMonitoringConfig } as MonitoringConfig;
    message.alerts = object.alerts?.map((e) => Alert.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MonitoringConfig.$type, MonitoringConfig);

const baseDedicatedDatabase: object = {
  $type: "yandex.cloud.ydb.v1.DedicatedDatabase",
  resourcePresetId: "",
  networkId: "",
  subnetIds: "",
  assignPublicIps: false,
};

export const DedicatedDatabase = {
  $type: "yandex.cloud.ydb.v1.DedicatedDatabase" as const,

  encode(
    message: DedicatedDatabase,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resourcePresetId !== "") {
      writer.uint32(10).string(message.resourcePresetId);
    }
    if (message.storageConfig !== undefined) {
      StorageConfig.encode(
        message.storageConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.scalePolicy !== undefined) {
      ScalePolicy.encode(
        message.scalePolicy,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.networkId !== "") {
      writer.uint32(34).string(message.networkId);
    }
    for (const v of message.subnetIds) {
      writer.uint32(42).string(v!);
    }
    if (message.assignPublicIps === true) {
      writer.uint32(48).bool(message.assignPublicIps);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DedicatedDatabase {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDedicatedDatabase } as DedicatedDatabase;
    message.subnetIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourcePresetId = reader.string();
          break;
        case 2:
          message.storageConfig = StorageConfig.decode(reader, reader.uint32());
          break;
        case 3:
          message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
          break;
        case 4:
          message.networkId = reader.string();
          break;
        case 5:
          message.subnetIds.push(reader.string());
          break;
        case 6:
          message.assignPublicIps = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DedicatedDatabase {
    const message = { ...baseDedicatedDatabase } as DedicatedDatabase;
    message.resourcePresetId =
      object.resourcePresetId !== undefined && object.resourcePresetId !== null
        ? String(object.resourcePresetId)
        : "";
    message.storageConfig =
      object.storageConfig !== undefined && object.storageConfig !== null
        ? StorageConfig.fromJSON(object.storageConfig)
        : undefined;
    message.scalePolicy =
      object.scalePolicy !== undefined && object.scalePolicy !== null
        ? ScalePolicy.fromJSON(object.scalePolicy)
        : undefined;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.subnetIds = (object.subnetIds ?? []).map((e: any) => String(e));
    message.assignPublicIps =
      object.assignPublicIps !== undefined && object.assignPublicIps !== null
        ? Boolean(object.assignPublicIps)
        : false;
    return message;
  },

  toJSON(message: DedicatedDatabase): unknown {
    const obj: any = {};
    message.resourcePresetId !== undefined &&
      (obj.resourcePresetId = message.resourcePresetId);
    message.storageConfig !== undefined &&
      (obj.storageConfig = message.storageConfig
        ? StorageConfig.toJSON(message.storageConfig)
        : undefined);
    message.scalePolicy !== undefined &&
      (obj.scalePolicy = message.scalePolicy
        ? ScalePolicy.toJSON(message.scalePolicy)
        : undefined);
    message.networkId !== undefined && (obj.networkId = message.networkId);
    if (message.subnetIds) {
      obj.subnetIds = message.subnetIds.map((e) => e);
    } else {
      obj.subnetIds = [];
    }
    message.assignPublicIps !== undefined &&
      (obj.assignPublicIps = message.assignPublicIps);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DedicatedDatabase>, I>>(
    object: I
  ): DedicatedDatabase {
    const message = { ...baseDedicatedDatabase } as DedicatedDatabase;
    message.resourcePresetId = object.resourcePresetId ?? "";
    message.storageConfig =
      object.storageConfig !== undefined && object.storageConfig !== null
        ? StorageConfig.fromPartial(object.storageConfig)
        : undefined;
    message.scalePolicy =
      object.scalePolicy !== undefined && object.scalePolicy !== null
        ? ScalePolicy.fromPartial(object.scalePolicy)
        : undefined;
    message.networkId = object.networkId ?? "";
    message.subnetIds = object.subnetIds?.map((e) => e) || [];
    message.assignPublicIps = object.assignPublicIps ?? false;
    return message;
  },
};

messageTypeRegistry.set(DedicatedDatabase.$type, DedicatedDatabase);

const baseServerlessDatabase: object = {
  $type: "yandex.cloud.ydb.v1.ServerlessDatabase",
  throttlingRcuLimit: 0,
  storageSizeLimit: 0,
  enableThrottlingRcuLimit: false,
  provisionedRcuLimit: 0,
  topicWriteQuota: 0,
};

export const ServerlessDatabase = {
  $type: "yandex.cloud.ydb.v1.ServerlessDatabase" as const,

  encode(
    message: ServerlessDatabase,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.throttlingRcuLimit !== 0) {
      writer.uint32(8).int64(message.throttlingRcuLimit);
    }
    if (message.storageSizeLimit !== 0) {
      writer.uint32(16).int64(message.storageSizeLimit);
    }
    if (message.enableThrottlingRcuLimit === true) {
      writer.uint32(24).bool(message.enableThrottlingRcuLimit);
    }
    if (message.provisionedRcuLimit !== 0) {
      writer.uint32(32).int64(message.provisionedRcuLimit);
    }
    if (message.topicWriteQuota !== 0) {
      writer.uint32(40).int64(message.topicWriteQuota);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerlessDatabase {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseServerlessDatabase } as ServerlessDatabase;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.throttlingRcuLimit = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.storageSizeLimit = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.enableThrottlingRcuLimit = reader.bool();
          break;
        case 4:
          message.provisionedRcuLimit = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.topicWriteQuota = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ServerlessDatabase {
    const message = { ...baseServerlessDatabase } as ServerlessDatabase;
    message.throttlingRcuLimit =
      object.throttlingRcuLimit !== undefined &&
      object.throttlingRcuLimit !== null
        ? Number(object.throttlingRcuLimit)
        : 0;
    message.storageSizeLimit =
      object.storageSizeLimit !== undefined && object.storageSizeLimit !== null
        ? Number(object.storageSizeLimit)
        : 0;
    message.enableThrottlingRcuLimit =
      object.enableThrottlingRcuLimit !== undefined &&
      object.enableThrottlingRcuLimit !== null
        ? Boolean(object.enableThrottlingRcuLimit)
        : false;
    message.provisionedRcuLimit =
      object.provisionedRcuLimit !== undefined &&
      object.provisionedRcuLimit !== null
        ? Number(object.provisionedRcuLimit)
        : 0;
    message.topicWriteQuota =
      object.topicWriteQuota !== undefined && object.topicWriteQuota !== null
        ? Number(object.topicWriteQuota)
        : 0;
    return message;
  },

  toJSON(message: ServerlessDatabase): unknown {
    const obj: any = {};
    message.throttlingRcuLimit !== undefined &&
      (obj.throttlingRcuLimit = Math.round(message.throttlingRcuLimit));
    message.storageSizeLimit !== undefined &&
      (obj.storageSizeLimit = Math.round(message.storageSizeLimit));
    message.enableThrottlingRcuLimit !== undefined &&
      (obj.enableThrottlingRcuLimit = message.enableThrottlingRcuLimit);
    message.provisionedRcuLimit !== undefined &&
      (obj.provisionedRcuLimit = Math.round(message.provisionedRcuLimit));
    message.topicWriteQuota !== undefined &&
      (obj.topicWriteQuota = Math.round(message.topicWriteQuota));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ServerlessDatabase>, I>>(
    object: I
  ): ServerlessDatabase {
    const message = { ...baseServerlessDatabase } as ServerlessDatabase;
    message.throttlingRcuLimit = object.throttlingRcuLimit ?? 0;
    message.storageSizeLimit = object.storageSizeLimit ?? 0;
    message.enableThrottlingRcuLimit = object.enableThrottlingRcuLimit ?? false;
    message.provisionedRcuLimit = object.provisionedRcuLimit ?? 0;
    message.topicWriteQuota = object.topicWriteQuota ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ServerlessDatabase.$type, ServerlessDatabase);

const baseZonalDatabase: object = {
  $type: "yandex.cloud.ydb.v1.ZonalDatabase",
  zoneId: "",
};

export const ZonalDatabase = {
  $type: "yandex.cloud.ydb.v1.ZonalDatabase" as const,

  encode(
    message: ZonalDatabase,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ZonalDatabase {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseZonalDatabase } as ZonalDatabase;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ZonalDatabase {
    const message = { ...baseZonalDatabase } as ZonalDatabase;
    message.zoneId =
      object.zoneId !== undefined && object.zoneId !== null
        ? String(object.zoneId)
        : "";
    return message;
  },

  toJSON(message: ZonalDatabase): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ZonalDatabase>, I>>(
    object: I
  ): ZonalDatabase {
    const message = { ...baseZonalDatabase } as ZonalDatabase;
    message.zoneId = object.zoneId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ZonalDatabase.$type, ZonalDatabase);

const baseRegionalDatabase: object = {
  $type: "yandex.cloud.ydb.v1.RegionalDatabase",
  regionId: "",
};

export const RegionalDatabase = {
  $type: "yandex.cloud.ydb.v1.RegionalDatabase" as const,

  encode(
    message: RegionalDatabase,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.regionId !== "") {
      writer.uint32(10).string(message.regionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegionalDatabase {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegionalDatabase } as RegionalDatabase;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.regionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegionalDatabase {
    const message = { ...baseRegionalDatabase } as RegionalDatabase;
    message.regionId =
      object.regionId !== undefined && object.regionId !== null
        ? String(object.regionId)
        : "";
    return message;
  },

  toJSON(message: RegionalDatabase): unknown {
    const obj: any = {};
    message.regionId !== undefined && (obj.regionId = message.regionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegionalDatabase>, I>>(
    object: I
  ): RegionalDatabase {
    const message = { ...baseRegionalDatabase } as RegionalDatabase;
    message.regionId = object.regionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RegionalDatabase.$type, RegionalDatabase);

const baseScalePolicy: object = { $type: "yandex.cloud.ydb.v1.ScalePolicy" };

export const ScalePolicy = {
  $type: "yandex.cloud.ydb.v1.ScalePolicy" as const,

  encode(
    message: ScalePolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fixedScale !== undefined) {
      ScalePolicy_FixedScale.encode(
        message.fixedScale,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScalePolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseScalePolicy } as ScalePolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fixedScale = ScalePolicy_FixedScale.decode(
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

  fromJSON(object: any): ScalePolicy {
    const message = { ...baseScalePolicy } as ScalePolicy;
    message.fixedScale =
      object.fixedScale !== undefined && object.fixedScale !== null
        ? ScalePolicy_FixedScale.fromJSON(object.fixedScale)
        : undefined;
    return message;
  },

  toJSON(message: ScalePolicy): unknown {
    const obj: any = {};
    message.fixedScale !== undefined &&
      (obj.fixedScale = message.fixedScale
        ? ScalePolicy_FixedScale.toJSON(message.fixedScale)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScalePolicy>, I>>(
    object: I
  ): ScalePolicy {
    const message = { ...baseScalePolicy } as ScalePolicy;
    message.fixedScale =
      object.fixedScale !== undefined && object.fixedScale !== null
        ? ScalePolicy_FixedScale.fromPartial(object.fixedScale)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ScalePolicy.$type, ScalePolicy);

const baseScalePolicy_FixedScale: object = {
  $type: "yandex.cloud.ydb.v1.ScalePolicy.FixedScale",
  size: 0,
};

export const ScalePolicy_FixedScale = {
  $type: "yandex.cloud.ydb.v1.ScalePolicy.FixedScale" as const,

  encode(
    message: ScalePolicy_FixedScale,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.size !== 0) {
      writer.uint32(8).int64(message.size);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ScalePolicy_FixedScale {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseScalePolicy_FixedScale } as ScalePolicy_FixedScale;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.size = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScalePolicy_FixedScale {
    const message = { ...baseScalePolicy_FixedScale } as ScalePolicy_FixedScale;
    message.size =
      object.size !== undefined && object.size !== null
        ? Number(object.size)
        : 0;
    return message;
  },

  toJSON(message: ScalePolicy_FixedScale): unknown {
    const obj: any = {};
    message.size !== undefined && (obj.size = Math.round(message.size));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScalePolicy_FixedScale>, I>>(
    object: I
  ): ScalePolicy_FixedScale {
    const message = { ...baseScalePolicy_FixedScale } as ScalePolicy_FixedScale;
    message.size = object.size ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ScalePolicy_FixedScale.$type, ScalePolicy_FixedScale);

const baseStorageConfig: object = {
  $type: "yandex.cloud.ydb.v1.StorageConfig",
  storageSizeLimit: 0,
};

export const StorageConfig = {
  $type: "yandex.cloud.ydb.v1.StorageConfig" as const,

  encode(
    message: StorageConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.storageOptions) {
      StorageOption.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.storageSizeLimit !== 0) {
      writer.uint32(16).int64(message.storageSizeLimit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StorageConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStorageConfig } as StorageConfig;
    message.storageOptions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storageOptions.push(
            StorageOption.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.storageSizeLimit = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StorageConfig {
    const message = { ...baseStorageConfig } as StorageConfig;
    message.storageOptions = (object.storageOptions ?? []).map((e: any) =>
      StorageOption.fromJSON(e)
    );
    message.storageSizeLimit =
      object.storageSizeLimit !== undefined && object.storageSizeLimit !== null
        ? Number(object.storageSizeLimit)
        : 0;
    return message;
  },

  toJSON(message: StorageConfig): unknown {
    const obj: any = {};
    if (message.storageOptions) {
      obj.storageOptions = message.storageOptions.map((e) =>
        e ? StorageOption.toJSON(e) : undefined
      );
    } else {
      obj.storageOptions = [];
    }
    message.storageSizeLimit !== undefined &&
      (obj.storageSizeLimit = Math.round(message.storageSizeLimit));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StorageConfig>, I>>(
    object: I
  ): StorageConfig {
    const message = { ...baseStorageConfig } as StorageConfig;
    message.storageOptions =
      object.storageOptions?.map((e) => StorageOption.fromPartial(e)) || [];
    message.storageSizeLimit = object.storageSizeLimit ?? 0;
    return message;
  },
};

messageTypeRegistry.set(StorageConfig.$type, StorageConfig);

const baseStorageOption: object = {
  $type: "yandex.cloud.ydb.v1.StorageOption",
  storageTypeId: "",
  groupCount: 0,
};

export const StorageOption = {
  $type: "yandex.cloud.ydb.v1.StorageOption" as const,

  encode(
    message: StorageOption,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.storageTypeId !== "") {
      writer.uint32(10).string(message.storageTypeId);
    }
    if (message.groupCount !== 0) {
      writer.uint32(16).int64(message.groupCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StorageOption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStorageOption } as StorageOption;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storageTypeId = reader.string();
          break;
        case 2:
          message.groupCount = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StorageOption {
    const message = { ...baseStorageOption } as StorageOption;
    message.storageTypeId =
      object.storageTypeId !== undefined && object.storageTypeId !== null
        ? String(object.storageTypeId)
        : "";
    message.groupCount =
      object.groupCount !== undefined && object.groupCount !== null
        ? Number(object.groupCount)
        : 0;
    return message;
  },

  toJSON(message: StorageOption): unknown {
    const obj: any = {};
    message.storageTypeId !== undefined &&
      (obj.storageTypeId = message.storageTypeId);
    message.groupCount !== undefined &&
      (obj.groupCount = Math.round(message.groupCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StorageOption>, I>>(
    object: I
  ): StorageOption {
    const message = { ...baseStorageOption } as StorageOption;
    message.storageTypeId = object.storageTypeId ?? "";
    message.groupCount = object.groupCount ?? 0;
    return message;
  },
};

messageTypeRegistry.set(StorageOption.$type, StorageOption);

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
