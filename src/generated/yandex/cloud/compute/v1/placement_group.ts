/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.compute.v1";

export interface PlacementGroup {
  $type: "yandex.cloud.compute.v1.PlacementGroup";
  /** ID of the placement group. Generated at creation time. */
  id: string;
  /** ID of the folder that the placement group belongs to. */
  folderId: string;
  /** Creation timestamp. */
  createdAt?: Date;
  /**
   * Name of the placement group.
   * The name is unique within the folder.
   */
  name: string;
  /** Description of the placement group. 0-256 characters long. */
  description: string;
  /** Placement group labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /**
   * Anti-affinity placement strategy (`spread`). Instances are distributed
   * over distinct failure domains.
   */
  spreadPlacementStrategy?: SpreadPlacementStrategy | undefined;
  partitionPlacementStrategy?: PartitionPlacementStrategy | undefined;
}

export interface PlacementGroup_LabelsEntry {
  $type: "yandex.cloud.compute.v1.PlacementGroup.LabelsEntry";
  key: string;
  value: string;
}

/**
 * This is an empty structure that must be passed to explicitly
 * specify the required placement strategy.
 */
export interface SpreadPlacementStrategy {
  $type: "yandex.cloud.compute.v1.SpreadPlacementStrategy";
}

export interface PartitionPlacementStrategy {
  $type: "yandex.cloud.compute.v1.PartitionPlacementStrategy";
  partitions: number;
}

const basePlacementGroup: object = {
  $type: "yandex.cloud.compute.v1.PlacementGroup",
  id: "",
  folderId: "",
  name: "",
  description: "",
};

export const PlacementGroup = {
  $type: "yandex.cloud.compute.v1.PlacementGroup" as const,

  encode(
    message: PlacementGroup,
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
      PlacementGroup_LabelsEntry.encode(
        {
          $type: "yandex.cloud.compute.v1.PlacementGroup.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.spreadPlacementStrategy !== undefined) {
      SpreadPlacementStrategy.encode(
        message.spreadPlacementStrategy,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.partitionPlacementStrategy !== undefined) {
      PartitionPlacementStrategy.encode(
        message.partitionPlacementStrategy,
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlacementGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlacementGroup } as PlacementGroup;
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
          const entry6 = PlacementGroup_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.spreadPlacementStrategy = SpreadPlacementStrategy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.partitionPlacementStrategy =
            PartitionPlacementStrategy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlacementGroup {
    const message = { ...basePlacementGroup } as PlacementGroup;
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
    message.spreadPlacementStrategy =
      object.spreadPlacementStrategy !== undefined &&
      object.spreadPlacementStrategy !== null
        ? SpreadPlacementStrategy.fromJSON(object.spreadPlacementStrategy)
        : undefined;
    message.partitionPlacementStrategy =
      object.partitionPlacementStrategy !== undefined &&
      object.partitionPlacementStrategy !== null
        ? PartitionPlacementStrategy.fromJSON(object.partitionPlacementStrategy)
        : undefined;
    return message;
  },

  toJSON(message: PlacementGroup): unknown {
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
    message.spreadPlacementStrategy !== undefined &&
      (obj.spreadPlacementStrategy = message.spreadPlacementStrategy
        ? SpreadPlacementStrategy.toJSON(message.spreadPlacementStrategy)
        : undefined);
    message.partitionPlacementStrategy !== undefined &&
      (obj.partitionPlacementStrategy = message.partitionPlacementStrategy
        ? PartitionPlacementStrategy.toJSON(message.partitionPlacementStrategy)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlacementGroup>, I>>(
    object: I
  ): PlacementGroup {
    const message = { ...basePlacementGroup } as PlacementGroup;
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
    message.spreadPlacementStrategy =
      object.spreadPlacementStrategy !== undefined &&
      object.spreadPlacementStrategy !== null
        ? SpreadPlacementStrategy.fromPartial(object.spreadPlacementStrategy)
        : undefined;
    message.partitionPlacementStrategy =
      object.partitionPlacementStrategy !== undefined &&
      object.partitionPlacementStrategy !== null
        ? PartitionPlacementStrategy.fromPartial(
            object.partitionPlacementStrategy
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(PlacementGroup.$type, PlacementGroup);

const basePlacementGroup_LabelsEntry: object = {
  $type: "yandex.cloud.compute.v1.PlacementGroup.LabelsEntry",
  key: "",
  value: "",
};

export const PlacementGroup_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.PlacementGroup.LabelsEntry" as const,

  encode(
    message: PlacementGroup_LabelsEntry,
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
  ): PlacementGroup_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePlacementGroup_LabelsEntry,
    } as PlacementGroup_LabelsEntry;
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

  fromJSON(object: any): PlacementGroup_LabelsEntry {
    const message = {
      ...basePlacementGroup_LabelsEntry,
    } as PlacementGroup_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: PlacementGroup_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlacementGroup_LabelsEntry>, I>>(
    object: I
  ): PlacementGroup_LabelsEntry {
    const message = {
      ...basePlacementGroup_LabelsEntry,
    } as PlacementGroup_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  PlacementGroup_LabelsEntry.$type,
  PlacementGroup_LabelsEntry
);

const baseSpreadPlacementStrategy: object = {
  $type: "yandex.cloud.compute.v1.SpreadPlacementStrategy",
};

export const SpreadPlacementStrategy = {
  $type: "yandex.cloud.compute.v1.SpreadPlacementStrategy" as const,

  encode(
    _: SpreadPlacementStrategy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SpreadPlacementStrategy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSpreadPlacementStrategy,
    } as SpreadPlacementStrategy;
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

  fromJSON(_: any): SpreadPlacementStrategy {
    const message = {
      ...baseSpreadPlacementStrategy,
    } as SpreadPlacementStrategy;
    return message;
  },

  toJSON(_: SpreadPlacementStrategy): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SpreadPlacementStrategy>, I>>(
    _: I
  ): SpreadPlacementStrategy {
    const message = {
      ...baseSpreadPlacementStrategy,
    } as SpreadPlacementStrategy;
    return message;
  },
};

messageTypeRegistry.set(SpreadPlacementStrategy.$type, SpreadPlacementStrategy);

const basePartitionPlacementStrategy: object = {
  $type: "yandex.cloud.compute.v1.PartitionPlacementStrategy",
  partitions: 0,
};

export const PartitionPlacementStrategy = {
  $type: "yandex.cloud.compute.v1.PartitionPlacementStrategy" as const,

  encode(
    message: PartitionPlacementStrategy,
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
  ): PartitionPlacementStrategy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePartitionPlacementStrategy,
    } as PartitionPlacementStrategy;
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

  fromJSON(object: any): PartitionPlacementStrategy {
    const message = {
      ...basePartitionPlacementStrategy,
    } as PartitionPlacementStrategy;
    message.partitions =
      object.partitions !== undefined && object.partitions !== null
        ? Number(object.partitions)
        : 0;
    return message;
  },

  toJSON(message: PartitionPlacementStrategy): unknown {
    const obj: any = {};
    message.partitions !== undefined &&
      (obj.partitions = Math.round(message.partitions));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PartitionPlacementStrategy>, I>>(
    object: I
  ): PartitionPlacementStrategy {
    const message = {
      ...basePartitionPlacementStrategy,
    } as PartitionPlacementStrategy;
    message.partitions = object.partitions ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  PartitionPlacementStrategy.$type,
  PartitionPlacementStrategy
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
