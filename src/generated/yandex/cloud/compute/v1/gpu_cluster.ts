/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.compute.v1";

export enum GpuInterconnectType {
  GPU_INTERCONNECT_TYPE_UNSPECIFIED = 0,
  /** INFINIBAND - InfiniBand interconnect. */
  INFINIBAND = 1,
  UNRECOGNIZED = -1,
}

export function gpuInterconnectTypeFromJSON(object: any): GpuInterconnectType {
  switch (object) {
    case 0:
    case "GPU_INTERCONNECT_TYPE_UNSPECIFIED":
      return GpuInterconnectType.GPU_INTERCONNECT_TYPE_UNSPECIFIED;
    case 1:
    case "INFINIBAND":
      return GpuInterconnectType.INFINIBAND;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GpuInterconnectType.UNRECOGNIZED;
  }
}

export function gpuInterconnectTypeToJSON(object: GpuInterconnectType): string {
  switch (object) {
    case GpuInterconnectType.GPU_INTERCONNECT_TYPE_UNSPECIFIED:
      return "GPU_INTERCONNECT_TYPE_UNSPECIFIED";
    case GpuInterconnectType.INFINIBAND:
      return "INFINIBAND";
    default:
      return "UNKNOWN";
  }
}

/** A GPU cluster. For details about the concept, see [documentation](/docs/compute/concepts/gpu-cluster). */
export interface GpuCluster {
  $type: "yandex.cloud.compute.v1.GpuCluster";
  /** ID of GPU cluster. */
  id: string;
  /** ID of the folder that the GPU cluster belongs to. */
  folderId: string;
  /** Creation timestamp. */
  createdAt?: Date;
  /**
   * Name of the GPU cluster.
   *
   * The name is unique within the folder.
   */
  name: string;
  /** Description of the GPU cluster. */
  description: string;
  /** GPU cluster labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Status of the GPU cluster. */
  status: GpuCluster_Status;
  /** ID of the availability zone where the GPU cluster resides. */
  zoneId: string;
  /** Type of interconnect used for this GPU cluster. */
  interconnectType: GpuInterconnectType;
}

export enum GpuCluster_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - GPU cluster is being created. */
  CREATING = 1,
  /** READY - GPU cluster is ready to use. */
  READY = 2,
  /** ERROR - GPU cluster encountered a problem and cannot operate. */
  ERROR = 3,
  /** DELETING - GPU cluster is being deleted. */
  DELETING = 4,
  UNRECOGNIZED = -1,
}

export function gpuCluster_StatusFromJSON(object: any): GpuCluster_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return GpuCluster_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return GpuCluster_Status.CREATING;
    case 2:
    case "READY":
      return GpuCluster_Status.READY;
    case 3:
    case "ERROR":
      return GpuCluster_Status.ERROR;
    case 4:
    case "DELETING":
      return GpuCluster_Status.DELETING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GpuCluster_Status.UNRECOGNIZED;
  }
}

export function gpuCluster_StatusToJSON(object: GpuCluster_Status): string {
  switch (object) {
    case GpuCluster_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case GpuCluster_Status.CREATING:
      return "CREATING";
    case GpuCluster_Status.READY:
      return "READY";
    case GpuCluster_Status.ERROR:
      return "ERROR";
    case GpuCluster_Status.DELETING:
      return "DELETING";
    default:
      return "UNKNOWN";
  }
}

export interface GpuCluster_LabelsEntry {
  $type: "yandex.cloud.compute.v1.GpuCluster.LabelsEntry";
  key: string;
  value: string;
}

const baseGpuCluster: object = {
  $type: "yandex.cloud.compute.v1.GpuCluster",
  id: "",
  folderId: "",
  name: "",
  description: "",
  status: 0,
  zoneId: "",
  interconnectType: 0,
};

export const GpuCluster = {
  $type: "yandex.cloud.compute.v1.GpuCluster" as const,

  encode(
    message: GpuCluster,
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
      GpuCluster_LabelsEntry.encode(
        {
          $type: "yandex.cloud.compute.v1.GpuCluster.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.zoneId !== "") {
      writer.uint32(66).string(message.zoneId);
    }
    if (message.interconnectType !== 0) {
      writer.uint32(72).int32(message.interconnectType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GpuCluster {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGpuCluster } as GpuCluster;
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
          const entry6 = GpuCluster_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.status = reader.int32() as any;
          break;
        case 8:
          message.zoneId = reader.string();
          break;
        case 9:
          message.interconnectType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GpuCluster {
    const message = { ...baseGpuCluster } as GpuCluster;
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
        ? gpuCluster_StatusFromJSON(object.status)
        : 0;
    message.zoneId =
      object.zoneId !== undefined && object.zoneId !== null
        ? String(object.zoneId)
        : "";
    message.interconnectType =
      object.interconnectType !== undefined && object.interconnectType !== null
        ? gpuInterconnectTypeFromJSON(object.interconnectType)
        : 0;
    return message;
  },

  toJSON(message: GpuCluster): unknown {
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
      (obj.status = gpuCluster_StatusToJSON(message.status));
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.interconnectType !== undefined &&
      (obj.interconnectType = gpuInterconnectTypeToJSON(
        message.interconnectType
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GpuCluster>, I>>(
    object: I
  ): GpuCluster {
    const message = { ...baseGpuCluster } as GpuCluster;
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
    message.zoneId = object.zoneId ?? "";
    message.interconnectType = object.interconnectType ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GpuCluster.$type, GpuCluster);

const baseGpuCluster_LabelsEntry: object = {
  $type: "yandex.cloud.compute.v1.GpuCluster.LabelsEntry",
  key: "",
  value: "",
};

export const GpuCluster_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.GpuCluster.LabelsEntry" as const,

  encode(
    message: GpuCluster_LabelsEntry,
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
  ): GpuCluster_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGpuCluster_LabelsEntry } as GpuCluster_LabelsEntry;
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

  fromJSON(object: any): GpuCluster_LabelsEntry {
    const message = { ...baseGpuCluster_LabelsEntry } as GpuCluster_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: GpuCluster_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GpuCluster_LabelsEntry>, I>>(
    object: I
  ): GpuCluster_LabelsEntry {
    const message = { ...baseGpuCluster_LabelsEntry } as GpuCluster_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(GpuCluster_LabelsEntry.$type, GpuCluster_LabelsEntry);

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
