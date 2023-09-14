/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.compute.v1";

export interface DiskPlacementGroup {
  $type: "yandex.cloud.compute.v1.DiskPlacementGroup";
  /** ID of the placement group. */
  id: string;
  /** ID of the folder that the placement group belongs to. */
  folderId: string;
  /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  createdAt?: Date;
  /**
   * Name of the placement group.
   * The name is unique within the folder.
   */
  name: string;
  /** Description of the placement group. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** ID of the availability zone where the placement group resides. */
  zoneId: string;
  /** Current status of the placement group */
  status: DiskPlacementGroup_Status;
  /** Distribute disks over distinct failure domains. */
  spreadPlacementStrategy?: DiskSpreadPlacementStrategy | undefined;
  /** Distribute disks over partitions. */
  partitionPlacementStrategy?: DiskPartitionPlacementStrategy | undefined;
}

export enum DiskPlacementGroup_Status {
  STATUS_UNSPECIFIED = 0,
  CREATING = 1,
  READY = 2,
  DELETING = 4,
  UNRECOGNIZED = -1,
}

export function diskPlacementGroup_StatusFromJSON(
  object: any
): DiskPlacementGroup_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return DiskPlacementGroup_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return DiskPlacementGroup_Status.CREATING;
    case 2:
    case "READY":
      return DiskPlacementGroup_Status.READY;
    case 4:
    case "DELETING":
      return DiskPlacementGroup_Status.DELETING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DiskPlacementGroup_Status.UNRECOGNIZED;
  }
}

export function diskPlacementGroup_StatusToJSON(
  object: DiskPlacementGroup_Status
): string {
  switch (object) {
    case DiskPlacementGroup_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case DiskPlacementGroup_Status.CREATING:
      return "CREATING";
    case DiskPlacementGroup_Status.READY:
      return "READY";
    case DiskPlacementGroup_Status.DELETING:
      return "DELETING";
    default:
      return "UNKNOWN";
  }
}

export interface DiskPlacementGroup_LabelsEntry {
  $type: "yandex.cloud.compute.v1.DiskPlacementGroup.LabelsEntry";
  key: string;
  value: string;
}

export interface DiskSpreadPlacementStrategy {
  $type: "yandex.cloud.compute.v1.DiskSpreadPlacementStrategy";
}

export interface DiskPartitionPlacementStrategy {
  $type: "yandex.cloud.compute.v1.DiskPartitionPlacementStrategy";
  partitions: number;
}

const baseDiskPlacementGroup: object = {
  $type: "yandex.cloud.compute.v1.DiskPlacementGroup",
  id: "",
  folderId: "",
  name: "",
  description: "",
  zoneId: "",
  status: 0,
};

export const DiskPlacementGroup = {
  $type: "yandex.cloud.compute.v1.DiskPlacementGroup" as const,

  encode(
    message: DiskPlacementGroup,
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
      DiskPlacementGroup_LabelsEntry.encode(
        {
          $type: "yandex.cloud.compute.v1.DiskPlacementGroup.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.zoneId !== "") {
      writer.uint32(58).string(message.zoneId);
    }
    if (message.status !== 0) {
      writer.uint32(88).int32(message.status);
    }
    if (message.spreadPlacementStrategy !== undefined) {
      DiskSpreadPlacementStrategy.encode(
        message.spreadPlacementStrategy,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.partitionPlacementStrategy !== undefined) {
      DiskPartitionPlacementStrategy.encode(
        message.partitionPlacementStrategy,
        writer.uint32(74).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiskPlacementGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDiskPlacementGroup } as DiskPlacementGroup;
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
          const entry6 = DiskPlacementGroup_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.zoneId = reader.string();
          break;
        case 11:
          message.status = reader.int32() as any;
          break;
        case 8:
          message.spreadPlacementStrategy = DiskSpreadPlacementStrategy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.partitionPlacementStrategy =
            DiskPartitionPlacementStrategy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DiskPlacementGroup {
    const message = { ...baseDiskPlacementGroup } as DiskPlacementGroup;
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
    message.zoneId =
      object.zoneId !== undefined && object.zoneId !== null
        ? String(object.zoneId)
        : "";
    message.status =
      object.status !== undefined && object.status !== null
        ? diskPlacementGroup_StatusFromJSON(object.status)
        : 0;
    message.spreadPlacementStrategy =
      object.spreadPlacementStrategy !== undefined &&
      object.spreadPlacementStrategy !== null
        ? DiskSpreadPlacementStrategy.fromJSON(object.spreadPlacementStrategy)
        : undefined;
    message.partitionPlacementStrategy =
      object.partitionPlacementStrategy !== undefined &&
      object.partitionPlacementStrategy !== null
        ? DiskPartitionPlacementStrategy.fromJSON(
            object.partitionPlacementStrategy
          )
        : undefined;
    return message;
  },

  toJSON(message: DiskPlacementGroup): unknown {
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
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.status !== undefined &&
      (obj.status = diskPlacementGroup_StatusToJSON(message.status));
    message.spreadPlacementStrategy !== undefined &&
      (obj.spreadPlacementStrategy = message.spreadPlacementStrategy
        ? DiskSpreadPlacementStrategy.toJSON(message.spreadPlacementStrategy)
        : undefined);
    message.partitionPlacementStrategy !== undefined &&
      (obj.partitionPlacementStrategy = message.partitionPlacementStrategy
        ? DiskPartitionPlacementStrategy.toJSON(
            message.partitionPlacementStrategy
          )
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DiskPlacementGroup>, I>>(
    object: I
  ): DiskPlacementGroup {
    const message = { ...baseDiskPlacementGroup } as DiskPlacementGroup;
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
    message.zoneId = object.zoneId ?? "";
    message.status = object.status ?? 0;
    message.spreadPlacementStrategy =
      object.spreadPlacementStrategy !== undefined &&
      object.spreadPlacementStrategy !== null
        ? DiskSpreadPlacementStrategy.fromPartial(
            object.spreadPlacementStrategy
          )
        : undefined;
    message.partitionPlacementStrategy =
      object.partitionPlacementStrategy !== undefined &&
      object.partitionPlacementStrategy !== null
        ? DiskPartitionPlacementStrategy.fromPartial(
            object.partitionPlacementStrategy
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(DiskPlacementGroup.$type, DiskPlacementGroup);

const baseDiskPlacementGroup_LabelsEntry: object = {
  $type: "yandex.cloud.compute.v1.DiskPlacementGroup.LabelsEntry",
  key: "",
  value: "",
};

export const DiskPlacementGroup_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.DiskPlacementGroup.LabelsEntry" as const,

  encode(
    message: DiskPlacementGroup_LabelsEntry,
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
  ): DiskPlacementGroup_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDiskPlacementGroup_LabelsEntry,
    } as DiskPlacementGroup_LabelsEntry;
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

  fromJSON(object: any): DiskPlacementGroup_LabelsEntry {
    const message = {
      ...baseDiskPlacementGroup_LabelsEntry,
    } as DiskPlacementGroup_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: DiskPlacementGroup_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DiskPlacementGroup_LabelsEntry>, I>>(
    object: I
  ): DiskPlacementGroup_LabelsEntry {
    const message = {
      ...baseDiskPlacementGroup_LabelsEntry,
    } as DiskPlacementGroup_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DiskPlacementGroup_LabelsEntry.$type,
  DiskPlacementGroup_LabelsEntry
);

const baseDiskSpreadPlacementStrategy: object = {
  $type: "yandex.cloud.compute.v1.DiskSpreadPlacementStrategy",
};

export const DiskSpreadPlacementStrategy = {
  $type: "yandex.cloud.compute.v1.DiskSpreadPlacementStrategy" as const,

  encode(
    _: DiskSpreadPlacementStrategy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DiskSpreadPlacementStrategy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDiskSpreadPlacementStrategy,
    } as DiskSpreadPlacementStrategy;
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

  fromJSON(_: any): DiskSpreadPlacementStrategy {
    const message = {
      ...baseDiskSpreadPlacementStrategy,
    } as DiskSpreadPlacementStrategy;
    return message;
  },

  toJSON(_: DiskSpreadPlacementStrategy): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DiskSpreadPlacementStrategy>, I>>(
    _: I
  ): DiskSpreadPlacementStrategy {
    const message = {
      ...baseDiskSpreadPlacementStrategy,
    } as DiskSpreadPlacementStrategy;
    return message;
  },
};

messageTypeRegistry.set(
  DiskSpreadPlacementStrategy.$type,
  DiskSpreadPlacementStrategy
);

const baseDiskPartitionPlacementStrategy: object = {
  $type: "yandex.cloud.compute.v1.DiskPartitionPlacementStrategy",
  partitions: 0,
};

export const DiskPartitionPlacementStrategy = {
  $type: "yandex.cloud.compute.v1.DiskPartitionPlacementStrategy" as const,

  encode(
    message: DiskPartitionPlacementStrategy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.partitions !== 0) {
      writer.uint32(8).int64(message.partitions);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DiskPartitionPlacementStrategy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDiskPartitionPlacementStrategy,
    } as DiskPartitionPlacementStrategy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partitions = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DiskPartitionPlacementStrategy {
    const message = {
      ...baseDiskPartitionPlacementStrategy,
    } as DiskPartitionPlacementStrategy;
    message.partitions =
      object.partitions !== undefined && object.partitions !== null
        ? Number(object.partitions)
        : 0;
    return message;
  },

  toJSON(message: DiskPartitionPlacementStrategy): unknown {
    const obj: any = {};
    message.partitions !== undefined &&
      (obj.partitions = Math.round(message.partitions));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DiskPartitionPlacementStrategy>, I>>(
    object: I
  ): DiskPartitionPlacementStrategy {
    const message = {
      ...baseDiskPartitionPlacementStrategy,
    } as DiskPartitionPlacementStrategy;
    message.partitions = object.partitions ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  DiskPartitionPlacementStrategy.$type,
  DiskPartitionPlacementStrategy
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
