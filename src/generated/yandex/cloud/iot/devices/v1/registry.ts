/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.iot.devices.v1";

/** A registry. For more information, see [Registry](/docs/iot-core/concepts/index#registry). */
export interface Registry {
  $type: "yandex.cloud.iot.devices.v1.Registry";
  /** ID of the registry. */
  id: string;
  /** ID of the folder that the registry belongs to. */
  folderId: string;
  /** Creation timestamp. */
  createdAt?: Date;
  /** Name of the registry. The name is unique within the folder. */
  name: string;
  /** Description of the registry. 0-256 characters long. */
  description: string;
  /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
  labels: { [key: string]: string };
  /** Status of the registry. */
  status: Registry_Status;
  /** ID of the logs group for the specified registry. */
  logGroupId: string;
}

export enum Registry_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - Registry is being created. */
  CREATING = 1,
  /** ACTIVE - Registry is ready to use. */
  ACTIVE = 2,
  /** DELETING - Registry is being deleted. */
  DELETING = 3,
  UNRECOGNIZED = -1,
}

export function registry_StatusFromJSON(object: any): Registry_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Registry_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return Registry_Status.CREATING;
    case 2:
    case "ACTIVE":
      return Registry_Status.ACTIVE;
    case 3:
    case "DELETING":
      return Registry_Status.DELETING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Registry_Status.UNRECOGNIZED;
  }
}

export function registry_StatusToJSON(object: Registry_Status): string {
  switch (object) {
    case Registry_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Registry_Status.CREATING:
      return "CREATING";
    case Registry_Status.ACTIVE:
      return "ACTIVE";
    case Registry_Status.DELETING:
      return "DELETING";
    default:
      return "UNKNOWN";
  }
}

export interface Registry_LabelsEntry {
  $type: "yandex.cloud.iot.devices.v1.Registry.LabelsEntry";
  key: string;
  value: string;
}

/** A registry certificate. For more information, see [Managing registry certificates](/docs/iot-core/operations/certificates/registry-certificates). */
export interface RegistryCertificate {
  $type: "yandex.cloud.iot.devices.v1.RegistryCertificate";
  /** ID of the registry that the certificate belongs to. */
  registryId: string;
  /** SHA256 hash of the certificates. */
  fingerprint: string;
  /** Public part of the certificate. */
  certificateData: string;
  /** Creation timestamp. */
  createdAt?: Date;
}

/**
 * A device topic alias.
 *
 * Alias is an alternate name of a device topic assigned by the user. Map alias to canonical topic name prefix, e.g. `my/custom/alias` match to `$device/abcdef/events`. For more information, see [Using topic aliases](/docs/iot-core/concepts/topic#aliases).
 */
export interface DeviceAlias {
  $type: "yandex.cloud.iot.devices.v1.DeviceAlias";
  /** ID of the device that the alias belongs to. */
  deviceId: string;
  /** Prefix of a canonical topic name to be aliased, e.g. `$devices/abcdef`. */
  topicPrefix: string;
  /** Alias of a device topic. */
  alias: string;
}

/** A registry password. */
export interface RegistryPassword {
  $type: "yandex.cloud.iot.devices.v1.RegistryPassword";
  /** ID of the registry that the password belongs to. */
  registryId: string;
  /** ID of the password. */
  id: string;
  /** Creation timestamp. */
  createdAt?: Date;
}

/** A Yandex Data Streams export. */
export interface DataStreamExport {
  $type: "yandex.cloud.iot.devices.v1.DataStreamExport";
  /** ID of the YDS export. */
  id: string;
  /** Name of the YDS export. */
  name: string;
  /** ID of the registry that the YDS export belongs to. */
  registryId: string;
  /** MQTT topic whose messages export to YDS. */
  mqttTopicFilter: string;
  /** YDS database. */
  database: string;
  /** YDS stream name. */
  stream: string;
  /** ID of the service account which has permission to write to data stream. */
  serviceAccountId: string;
  /** Creation timestamp. */
  createdAt?: Date;
}

const baseRegistry: object = {
  $type: "yandex.cloud.iot.devices.v1.Registry",
  id: "",
  folderId: "",
  name: "",
  description: "",
  status: 0,
  logGroupId: "",
};

export const Registry = {
  $type: "yandex.cloud.iot.devices.v1.Registry" as const,

  encode(
    message: Registry,
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
      Registry_LabelsEntry.encode(
        {
          $type: "yandex.cloud.iot.devices.v1.Registry.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.logGroupId !== "") {
      writer.uint32(66).string(message.logGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Registry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegistry } as Registry;
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
          const entry6 = Registry_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.status = reader.int32() as any;
          break;
        case 8:
          message.logGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Registry {
    const message = { ...baseRegistry } as Registry;
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
        ? registry_StatusFromJSON(object.status)
        : 0;
    message.logGroupId =
      object.logGroupId !== undefined && object.logGroupId !== null
        ? String(object.logGroupId)
        : "";
    return message;
  },

  toJSON(message: Registry): unknown {
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
      (obj.status = registry_StatusToJSON(message.status));
    message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Registry>, I>>(object: I): Registry {
    const message = { ...baseRegistry } as Registry;
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
    message.logGroupId = object.logGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Registry.$type, Registry);

const baseRegistry_LabelsEntry: object = {
  $type: "yandex.cloud.iot.devices.v1.Registry.LabelsEntry",
  key: "",
  value: "",
};

export const Registry_LabelsEntry = {
  $type: "yandex.cloud.iot.devices.v1.Registry.LabelsEntry" as const,

  encode(
    message: Registry_LabelsEntry,
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
  ): Registry_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegistry_LabelsEntry } as Registry_LabelsEntry;
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

  fromJSON(object: any): Registry_LabelsEntry {
    const message = { ...baseRegistry_LabelsEntry } as Registry_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Registry_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Registry_LabelsEntry>, I>>(
    object: I
  ): Registry_LabelsEntry {
    const message = { ...baseRegistry_LabelsEntry } as Registry_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Registry_LabelsEntry.$type, Registry_LabelsEntry);

const baseRegistryCertificate: object = {
  $type: "yandex.cloud.iot.devices.v1.RegistryCertificate",
  registryId: "",
  fingerprint: "",
  certificateData: "",
};

export const RegistryCertificate = {
  $type: "yandex.cloud.iot.devices.v1.RegistryCertificate" as const,

  encode(
    message: RegistryCertificate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    if (message.fingerprint !== "") {
      writer.uint32(18).string(message.fingerprint);
    }
    if (message.certificateData !== "") {
      writer.uint32(26).string(message.certificateData);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegistryCertificate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegistryCertificate } as RegistryCertificate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registryId = reader.string();
          break;
        case 2:
          message.fingerprint = reader.string();
          break;
        case 3:
          message.certificateData = reader.string();
          break;
        case 4:
          message.createdAt = fromTimestamp(
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

  fromJSON(object: any): RegistryCertificate {
    const message = { ...baseRegistryCertificate } as RegistryCertificate;
    message.registryId =
      object.registryId !== undefined && object.registryId !== null
        ? String(object.registryId)
        : "";
    message.fingerprint =
      object.fingerprint !== undefined && object.fingerprint !== null
        ? String(object.fingerprint)
        : "";
    message.certificateData =
      object.certificateData !== undefined && object.certificateData !== null
        ? String(object.certificateData)
        : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    return message;
  },

  toJSON(message: RegistryCertificate): unknown {
    const obj: any = {};
    message.registryId !== undefined && (obj.registryId = message.registryId);
    message.fingerprint !== undefined &&
      (obj.fingerprint = message.fingerprint);
    message.certificateData !== undefined &&
      (obj.certificateData = message.certificateData);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegistryCertificate>, I>>(
    object: I
  ): RegistryCertificate {
    const message = { ...baseRegistryCertificate } as RegistryCertificate;
    message.registryId = object.registryId ?? "";
    message.fingerprint = object.fingerprint ?? "";
    message.certificateData = object.certificateData ?? "";
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(RegistryCertificate.$type, RegistryCertificate);

const baseDeviceAlias: object = {
  $type: "yandex.cloud.iot.devices.v1.DeviceAlias",
  deviceId: "",
  topicPrefix: "",
  alias: "",
};

export const DeviceAlias = {
  $type: "yandex.cloud.iot.devices.v1.DeviceAlias" as const,

  encode(
    message: DeviceAlias,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    if (message.topicPrefix !== "") {
      writer.uint32(18).string(message.topicPrefix);
    }
    if (message.alias !== "") {
      writer.uint32(26).string(message.alias);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeviceAlias {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeviceAlias } as DeviceAlias;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceId = reader.string();
          break;
        case 2:
          message.topicPrefix = reader.string();
          break;
        case 3:
          message.alias = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeviceAlias {
    const message = { ...baseDeviceAlias } as DeviceAlias;
    message.deviceId =
      object.deviceId !== undefined && object.deviceId !== null
        ? String(object.deviceId)
        : "";
    message.topicPrefix =
      object.topicPrefix !== undefined && object.topicPrefix !== null
        ? String(object.topicPrefix)
        : "";
    message.alias =
      object.alias !== undefined && object.alias !== null
        ? String(object.alias)
        : "";
    return message;
  },

  toJSON(message: DeviceAlias): unknown {
    const obj: any = {};
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    message.topicPrefix !== undefined &&
      (obj.topicPrefix = message.topicPrefix);
    message.alias !== undefined && (obj.alias = message.alias);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeviceAlias>, I>>(
    object: I
  ): DeviceAlias {
    const message = { ...baseDeviceAlias } as DeviceAlias;
    message.deviceId = object.deviceId ?? "";
    message.topicPrefix = object.topicPrefix ?? "";
    message.alias = object.alias ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeviceAlias.$type, DeviceAlias);

const baseRegistryPassword: object = {
  $type: "yandex.cloud.iot.devices.v1.RegistryPassword",
  registryId: "",
  id: "",
};

export const RegistryPassword = {
  $type: "yandex.cloud.iot.devices.v1.RegistryPassword" as const,

  encode(
    message: RegistryPassword,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegistryPassword {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegistryPassword } as RegistryPassword;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registryId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.createdAt = fromTimestamp(
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

  fromJSON(object: any): RegistryPassword {
    const message = { ...baseRegistryPassword } as RegistryPassword;
    message.registryId =
      object.registryId !== undefined && object.registryId !== null
        ? String(object.registryId)
        : "";
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    return message;
  },

  toJSON(message: RegistryPassword): unknown {
    const obj: any = {};
    message.registryId !== undefined && (obj.registryId = message.registryId);
    message.id !== undefined && (obj.id = message.id);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegistryPassword>, I>>(
    object: I
  ): RegistryPassword {
    const message = { ...baseRegistryPassword } as RegistryPassword;
    message.registryId = object.registryId ?? "";
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(RegistryPassword.$type, RegistryPassword);

const baseDataStreamExport: object = {
  $type: "yandex.cloud.iot.devices.v1.DataStreamExport",
  id: "",
  name: "",
  registryId: "",
  mqttTopicFilter: "",
  database: "",
  stream: "",
  serviceAccountId: "",
};

export const DataStreamExport = {
  $type: "yandex.cloud.iot.devices.v1.DataStreamExport" as const,

  encode(
    message: DataStreamExport,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.registryId !== "") {
      writer.uint32(26).string(message.registryId);
    }
    if (message.mqttTopicFilter !== "") {
      writer.uint32(34).string(message.mqttTopicFilter);
    }
    if (message.database !== "") {
      writer.uint32(42).string(message.database);
    }
    if (message.stream !== "") {
      writer.uint32(50).string(message.stream);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(58).string(message.serviceAccountId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataStreamExport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDataStreamExport } as DataStreamExport;
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
          message.registryId = reader.string();
          break;
        case 4:
          message.mqttTopicFilter = reader.string();
          break;
        case 5:
          message.database = reader.string();
          break;
        case 6:
          message.stream = reader.string();
          break;
        case 7:
          message.serviceAccountId = reader.string();
          break;
        case 8:
          message.createdAt = fromTimestamp(
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

  fromJSON(object: any): DataStreamExport {
    const message = { ...baseDataStreamExport } as DataStreamExport;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.registryId =
      object.registryId !== undefined && object.registryId !== null
        ? String(object.registryId)
        : "";
    message.mqttTopicFilter =
      object.mqttTopicFilter !== undefined && object.mqttTopicFilter !== null
        ? String(object.mqttTopicFilter)
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
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    return message;
  },

  toJSON(message: DataStreamExport): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.registryId !== undefined && (obj.registryId = message.registryId);
    message.mqttTopicFilter !== undefined &&
      (obj.mqttTopicFilter = message.mqttTopicFilter);
    message.database !== undefined && (obj.database = message.database);
    message.stream !== undefined && (obj.stream = message.stream);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DataStreamExport>, I>>(
    object: I
  ): DataStreamExport {
    const message = { ...baseDataStreamExport } as DataStreamExport;
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.registryId = object.registryId ?? "";
    message.mqttTopicFilter = object.mqttTopicFilter ?? "";
    message.database = object.database ?? "";
    message.stream = object.stream ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(DataStreamExport.$type, DataStreamExport);

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
