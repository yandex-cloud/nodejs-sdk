/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.vpc.v1.privatelink";

export interface PrivateEndpoint {
  $type: "yandex.cloud.vpc.v1.privatelink.PrivateEndpoint";
  /** ID of the private endpoint. Generated at creation time. */
  id: string;
  /** ID of the folder that the private endpoint belongs to. */
  folderId: string;
  /** Creation timestamp. */
  createdAt?: Date;
  /**
   * Name of the private endpoint.
   * The name is unique within the folder.
   * Value must match the regular expression
   * ``\|[a-zA-Z]([-_a-zA-Z0-9]{0,61}[a-zA-Z0-9])?``.
   */
  name: string;
  /** Description of the private endpoint. 0-256 characters long. */
  description: string;
  /**
   * Private endpoint labels as `key:value` pairs.
   * No more than 64 per resource.
   * The maximum string length in characters for each value is 63.
   * Each value must match the regular expression `[-_0-9a-z]*`.
   * The string length in characters for each key must be 1-63.
   * Each key must match the regular expression `[a-z][-_0-9a-z]*`.
   */
  labels: { [key: string]: string };
  /** ID of the network that the private endpoint belongs to. */
  networkId: string;
  /** Status of the private endpoint. */
  status: PrivateEndpoint_Status;
  /** Private endpoint ip address details. */
  address?: PrivateEndpoint_EndpointAddress;
  /** Private endpoint dns options. */
  dnsOptions?: PrivateEndpoint_DnsOptions;
  /** Yandex Cloud Object Storage. */
  objectStorage?: PrivateEndpoint_ObjectStorage | undefined;
}

/** Status of the private endpoint. */
export enum PrivateEndpoint_Status {
  STATUS_UNSPECIFIED = 0,
  /** PENDING - Private endpoint is still creating / updating. */
  PENDING = 1,
  /** AVAILABLE - Private endpoint is available. */
  AVAILABLE = 2,
  /** DELETING - Private endpoint is deleting. */
  DELETING = 3,
  UNRECOGNIZED = -1,
}

export function privateEndpoint_StatusFromJSON(
  object: any
): PrivateEndpoint_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return PrivateEndpoint_Status.STATUS_UNSPECIFIED;
    case 1:
    case "PENDING":
      return PrivateEndpoint_Status.PENDING;
    case 2:
    case "AVAILABLE":
      return PrivateEndpoint_Status.AVAILABLE;
    case 3:
    case "DELETING":
      return PrivateEndpoint_Status.DELETING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PrivateEndpoint_Status.UNRECOGNIZED;
  }
}

export function privateEndpoint_StatusToJSON(
  object: PrivateEndpoint_Status
): string {
  switch (object) {
    case PrivateEndpoint_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case PrivateEndpoint_Status.PENDING:
      return "PENDING";
    case PrivateEndpoint_Status.AVAILABLE:
      return "AVAILABLE";
    case PrivateEndpoint_Status.DELETING:
      return "DELETING";
    default:
      return "UNKNOWN";
  }
}

export interface PrivateEndpoint_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.privatelink.PrivateEndpoint.LabelsEntry";
  key: string;
  value: string;
}

/** Yandex Cloud Object Storage. */
export interface PrivateEndpoint_ObjectStorage {
  $type: "yandex.cloud.vpc.v1.privatelink.PrivateEndpoint.ObjectStorage";
}

export interface PrivateEndpoint_DnsOptions {
  $type: "yandex.cloud.vpc.v1.privatelink.PrivateEndpoint.DnsOptions";
  /** If enabled - vpc will create private dns records for specified service. */
  privateDnsRecordsEnabled: boolean;
}

/** Private endpoint ip address details. */
export interface PrivateEndpoint_EndpointAddress {
  $type: "yandex.cloud.vpc.v1.privatelink.PrivateEndpoint.EndpointAddress";
  /** ID of the subnet that the private endpoint address belongs to. */
  subnetId: string;
  /** IP address of the private endpoint. */
  address: string;
  /** ID of the private endpoint address. */
  addressId: string;
}

const basePrivateEndpoint: object = {
  $type: "yandex.cloud.vpc.v1.privatelink.PrivateEndpoint",
  id: "",
  folderId: "",
  name: "",
  description: "",
  networkId: "",
  status: 0,
};

export const PrivateEndpoint = {
  $type: "yandex.cloud.vpc.v1.privatelink.PrivateEndpoint" as const,

  encode(
    message: PrivateEndpoint,
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
      PrivateEndpoint_LabelsEntry.encode(
        {
          $type: "yandex.cloud.vpc.v1.privatelink.PrivateEndpoint.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.networkId !== "") {
      writer.uint32(58).string(message.networkId);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.address !== undefined) {
      PrivateEndpoint_EndpointAddress.encode(
        message.address,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.dnsOptions !== undefined) {
      PrivateEndpoint_DnsOptions.encode(
        message.dnsOptions,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.objectStorage !== undefined) {
      PrivateEndpoint_ObjectStorage.encode(
        message.objectStorage,
        writer.uint32(90).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrivateEndpoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePrivateEndpoint } as PrivateEndpoint;
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
          const entry6 = PrivateEndpoint_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.networkId = reader.string();
          break;
        case 8:
          message.status = reader.int32() as any;
          break;
        case 9:
          message.address = PrivateEndpoint_EndpointAddress.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.dnsOptions = PrivateEndpoint_DnsOptions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.objectStorage = PrivateEndpoint_ObjectStorage.decode(
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

  fromJSON(object: any): PrivateEndpoint {
    const message = { ...basePrivateEndpoint } as PrivateEndpoint;
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
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.status =
      object.status !== undefined && object.status !== null
        ? privateEndpoint_StatusFromJSON(object.status)
        : 0;
    message.address =
      object.address !== undefined && object.address !== null
        ? PrivateEndpoint_EndpointAddress.fromJSON(object.address)
        : undefined;
    message.dnsOptions =
      object.dnsOptions !== undefined && object.dnsOptions !== null
        ? PrivateEndpoint_DnsOptions.fromJSON(object.dnsOptions)
        : undefined;
    message.objectStorage =
      object.objectStorage !== undefined && object.objectStorage !== null
        ? PrivateEndpoint_ObjectStorage.fromJSON(object.objectStorage)
        : undefined;
    return message;
  },

  toJSON(message: PrivateEndpoint): unknown {
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
    message.networkId !== undefined && (obj.networkId = message.networkId);
    message.status !== undefined &&
      (obj.status = privateEndpoint_StatusToJSON(message.status));
    message.address !== undefined &&
      (obj.address = message.address
        ? PrivateEndpoint_EndpointAddress.toJSON(message.address)
        : undefined);
    message.dnsOptions !== undefined &&
      (obj.dnsOptions = message.dnsOptions
        ? PrivateEndpoint_DnsOptions.toJSON(message.dnsOptions)
        : undefined);
    message.objectStorage !== undefined &&
      (obj.objectStorage = message.objectStorage
        ? PrivateEndpoint_ObjectStorage.toJSON(message.objectStorage)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PrivateEndpoint>, I>>(
    object: I
  ): PrivateEndpoint {
    const message = { ...basePrivateEndpoint } as PrivateEndpoint;
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
    message.networkId = object.networkId ?? "";
    message.status = object.status ?? 0;
    message.address =
      object.address !== undefined && object.address !== null
        ? PrivateEndpoint_EndpointAddress.fromPartial(object.address)
        : undefined;
    message.dnsOptions =
      object.dnsOptions !== undefined && object.dnsOptions !== null
        ? PrivateEndpoint_DnsOptions.fromPartial(object.dnsOptions)
        : undefined;
    message.objectStorage =
      object.objectStorage !== undefined && object.objectStorage !== null
        ? PrivateEndpoint_ObjectStorage.fromPartial(object.objectStorage)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(PrivateEndpoint.$type, PrivateEndpoint);

const basePrivateEndpoint_LabelsEntry: object = {
  $type: "yandex.cloud.vpc.v1.privatelink.PrivateEndpoint.LabelsEntry",
  key: "",
  value: "",
};

export const PrivateEndpoint_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.privatelink.PrivateEndpoint.LabelsEntry" as const,

  encode(
    message: PrivateEndpoint_LabelsEntry,
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
  ): PrivateEndpoint_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePrivateEndpoint_LabelsEntry,
    } as PrivateEndpoint_LabelsEntry;
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

  fromJSON(object: any): PrivateEndpoint_LabelsEntry {
    const message = {
      ...basePrivateEndpoint_LabelsEntry,
    } as PrivateEndpoint_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: PrivateEndpoint_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PrivateEndpoint_LabelsEntry>, I>>(
    object: I
  ): PrivateEndpoint_LabelsEntry {
    const message = {
      ...basePrivateEndpoint_LabelsEntry,
    } as PrivateEndpoint_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  PrivateEndpoint_LabelsEntry.$type,
  PrivateEndpoint_LabelsEntry
);

const basePrivateEndpoint_ObjectStorage: object = {
  $type: "yandex.cloud.vpc.v1.privatelink.PrivateEndpoint.ObjectStorage",
};

export const PrivateEndpoint_ObjectStorage = {
  $type:
    "yandex.cloud.vpc.v1.privatelink.PrivateEndpoint.ObjectStorage" as const,

  encode(
    _: PrivateEndpoint_ObjectStorage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PrivateEndpoint_ObjectStorage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePrivateEndpoint_ObjectStorage,
    } as PrivateEndpoint_ObjectStorage;
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

  fromJSON(_: any): PrivateEndpoint_ObjectStorage {
    const message = {
      ...basePrivateEndpoint_ObjectStorage,
    } as PrivateEndpoint_ObjectStorage;
    return message;
  },

  toJSON(_: PrivateEndpoint_ObjectStorage): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PrivateEndpoint_ObjectStorage>, I>>(
    _: I
  ): PrivateEndpoint_ObjectStorage {
    const message = {
      ...basePrivateEndpoint_ObjectStorage,
    } as PrivateEndpoint_ObjectStorage;
    return message;
  },
};

messageTypeRegistry.set(
  PrivateEndpoint_ObjectStorage.$type,
  PrivateEndpoint_ObjectStorage
);

const basePrivateEndpoint_DnsOptions: object = {
  $type: "yandex.cloud.vpc.v1.privatelink.PrivateEndpoint.DnsOptions",
  privateDnsRecordsEnabled: false,
};

export const PrivateEndpoint_DnsOptions = {
  $type: "yandex.cloud.vpc.v1.privatelink.PrivateEndpoint.DnsOptions" as const,

  encode(
    message: PrivateEndpoint_DnsOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.privateDnsRecordsEnabled === true) {
      writer.uint32(8).bool(message.privateDnsRecordsEnabled);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PrivateEndpoint_DnsOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePrivateEndpoint_DnsOptions,
    } as PrivateEndpoint_DnsOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.privateDnsRecordsEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PrivateEndpoint_DnsOptions {
    const message = {
      ...basePrivateEndpoint_DnsOptions,
    } as PrivateEndpoint_DnsOptions;
    message.privateDnsRecordsEnabled =
      object.privateDnsRecordsEnabled !== undefined &&
      object.privateDnsRecordsEnabled !== null
        ? Boolean(object.privateDnsRecordsEnabled)
        : false;
    return message;
  },

  toJSON(message: PrivateEndpoint_DnsOptions): unknown {
    const obj: any = {};
    message.privateDnsRecordsEnabled !== undefined &&
      (obj.privateDnsRecordsEnabled = message.privateDnsRecordsEnabled);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PrivateEndpoint_DnsOptions>, I>>(
    object: I
  ): PrivateEndpoint_DnsOptions {
    const message = {
      ...basePrivateEndpoint_DnsOptions,
    } as PrivateEndpoint_DnsOptions;
    message.privateDnsRecordsEnabled = object.privateDnsRecordsEnabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(
  PrivateEndpoint_DnsOptions.$type,
  PrivateEndpoint_DnsOptions
);

const basePrivateEndpoint_EndpointAddress: object = {
  $type: "yandex.cloud.vpc.v1.privatelink.PrivateEndpoint.EndpointAddress",
  subnetId: "",
  address: "",
  addressId: "",
};

export const PrivateEndpoint_EndpointAddress = {
  $type:
    "yandex.cloud.vpc.v1.privatelink.PrivateEndpoint.EndpointAddress" as const,

  encode(
    message: PrivateEndpoint_EndpointAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.addressId !== "") {
      writer.uint32(26).string(message.addressId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PrivateEndpoint_EndpointAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePrivateEndpoint_EndpointAddress,
    } as PrivateEndpoint_EndpointAddress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subnetId = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.addressId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PrivateEndpoint_EndpointAddress {
    const message = {
      ...basePrivateEndpoint_EndpointAddress,
    } as PrivateEndpoint_EndpointAddress;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.addressId =
      object.addressId !== undefined && object.addressId !== null
        ? String(object.addressId)
        : "";
    return message;
  },

  toJSON(message: PrivateEndpoint_EndpointAddress): unknown {
    const obj: any = {};
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    message.address !== undefined && (obj.address = message.address);
    message.addressId !== undefined && (obj.addressId = message.addressId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PrivateEndpoint_EndpointAddress>, I>>(
    object: I
  ): PrivateEndpoint_EndpointAddress {
    const message = {
      ...basePrivateEndpoint_EndpointAddress,
    } as PrivateEndpoint_EndpointAddress;
    message.subnetId = object.subnetId ?? "";
    message.address = object.address ?? "";
    message.addressId = object.addressId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  PrivateEndpoint_EndpointAddress.$type,
  PrivateEndpoint_EndpointAddress
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
