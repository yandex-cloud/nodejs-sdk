/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.iot.broker.v1";

/** A broker. */
export interface Broker {
  $type: "yandex.cloud.iot.broker.v1.Broker";
  /** ID of the broker. */
  id: string;
  /** ID of the folder that the broker belongs to. */
  folderId: string;
  /** Creation timestamp. */
  createdAt?: Date;
  /** Name of the broker. The name is unique within the folder. */
  name: string;
  /** Description of the broker. 0-256 characters long. */
  description: string;
  /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
  labels: { [key: string]: string };
  /** Status of the broker. */
  status: Broker_Status;
}

export enum Broker_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - Broker is being created. */
  CREATING = 1,
  /** ACTIVE - Broker is ready to use. */
  ACTIVE = 2,
  /** DELETING - Broker is being deleted. */
  DELETING = 3,
  UNRECOGNIZED = -1,
}

export function broker_StatusFromJSON(object: any): Broker_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Broker_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return Broker_Status.CREATING;
    case 2:
    case "ACTIVE":
      return Broker_Status.ACTIVE;
    case 3:
    case "DELETING":
      return Broker_Status.DELETING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Broker_Status.UNRECOGNIZED;
  }
}

export function broker_StatusToJSON(object: Broker_Status): string {
  switch (object) {
    case Broker_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Broker_Status.CREATING:
      return "CREATING";
    case Broker_Status.ACTIVE:
      return "ACTIVE";
    case Broker_Status.DELETING:
      return "DELETING";
    default:
      return "UNKNOWN";
  }
}

export interface Broker_LabelsEntry {
  $type: "yandex.cloud.iot.broker.v1.Broker.LabelsEntry";
  key: string;
  value: string;
}

/** A broker certificate. */
export interface BrokerCertificate {
  $type: "yandex.cloud.iot.broker.v1.BrokerCertificate";
  /** ID of the broker that the certificate belongs to. */
  brokerId: string;
  /** SHA256 hash of the certificates. */
  fingerprint: string;
  /** Public part of the certificate. */
  certificateData: string;
  /** Creation timestamp. */
  createdAt?: Date;
}

/** A broker password. */
export interface BrokerPassword {
  $type: "yandex.cloud.iot.broker.v1.BrokerPassword";
  /** ID of the broker that the password belongs to. */
  brokerId: string;
  /** ID of the password. */
  id: string;
  /** Creation timestamp. */
  createdAt?: Date;
}

const baseBroker: object = {
  $type: "yandex.cloud.iot.broker.v1.Broker",
  id: "",
  folderId: "",
  name: "",
  description: "",
  status: 0,
};

export const Broker = {
  $type: "yandex.cloud.iot.broker.v1.Broker" as const,

  encode(
    message: Broker,
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
      Broker_LabelsEntry.encode(
        {
          $type: "yandex.cloud.iot.broker.v1.Broker.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Broker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBroker } as Broker;
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
          const entry6 = Broker_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Broker {
    const message = { ...baseBroker } as Broker;
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
        ? broker_StatusFromJSON(object.status)
        : 0;
    return message;
  },

  toJSON(message: Broker): unknown {
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
      (obj.status = broker_StatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Broker>, I>>(object: I): Broker {
    const message = { ...baseBroker } as Broker;
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
    return message;
  },
};

messageTypeRegistry.set(Broker.$type, Broker);

const baseBroker_LabelsEntry: object = {
  $type: "yandex.cloud.iot.broker.v1.Broker.LabelsEntry",
  key: "",
  value: "",
};

export const Broker_LabelsEntry = {
  $type: "yandex.cloud.iot.broker.v1.Broker.LabelsEntry" as const,

  encode(
    message: Broker_LabelsEntry,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Broker_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBroker_LabelsEntry } as Broker_LabelsEntry;
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

  fromJSON(object: any): Broker_LabelsEntry {
    const message = { ...baseBroker_LabelsEntry } as Broker_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Broker_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Broker_LabelsEntry>, I>>(
    object: I
  ): Broker_LabelsEntry {
    const message = { ...baseBroker_LabelsEntry } as Broker_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Broker_LabelsEntry.$type, Broker_LabelsEntry);

const baseBrokerCertificate: object = {
  $type: "yandex.cloud.iot.broker.v1.BrokerCertificate",
  brokerId: "",
  fingerprint: "",
  certificateData: "",
};

export const BrokerCertificate = {
  $type: "yandex.cloud.iot.broker.v1.BrokerCertificate" as const,

  encode(
    message: BrokerCertificate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): BrokerCertificate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBrokerCertificate } as BrokerCertificate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.brokerId = reader.string();
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

  fromJSON(object: any): BrokerCertificate {
    const message = { ...baseBrokerCertificate } as BrokerCertificate;
    message.brokerId =
      object.brokerId !== undefined && object.brokerId !== null
        ? String(object.brokerId)
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

  toJSON(message: BrokerCertificate): unknown {
    const obj: any = {};
    message.brokerId !== undefined && (obj.brokerId = message.brokerId);
    message.fingerprint !== undefined &&
      (obj.fingerprint = message.fingerprint);
    message.certificateData !== undefined &&
      (obj.certificateData = message.certificateData);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BrokerCertificate>, I>>(
    object: I
  ): BrokerCertificate {
    const message = { ...baseBrokerCertificate } as BrokerCertificate;
    message.brokerId = object.brokerId ?? "";
    message.fingerprint = object.fingerprint ?? "";
    message.certificateData = object.certificateData ?? "";
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(BrokerCertificate.$type, BrokerCertificate);

const baseBrokerPassword: object = {
  $type: "yandex.cloud.iot.broker.v1.BrokerPassword",
  brokerId: "",
  id: "",
};

export const BrokerPassword = {
  $type: "yandex.cloud.iot.broker.v1.BrokerPassword" as const,

  encode(
    message: BrokerPassword,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): BrokerPassword {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBrokerPassword } as BrokerPassword;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.brokerId = reader.string();
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

  fromJSON(object: any): BrokerPassword {
    const message = { ...baseBrokerPassword } as BrokerPassword;
    message.brokerId =
      object.brokerId !== undefined && object.brokerId !== null
        ? String(object.brokerId)
        : "";
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    return message;
  },

  toJSON(message: BrokerPassword): unknown {
    const obj: any = {};
    message.brokerId !== undefined && (obj.brokerId = message.brokerId);
    message.id !== undefined && (obj.id = message.id);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BrokerPassword>, I>>(
    object: I
  ): BrokerPassword {
    const message = { ...baseBrokerPassword } as BrokerPassword;
    message.brokerId = object.brokerId ?? "";
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(BrokerPassword.$type, BrokerPassword);

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
