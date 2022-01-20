/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.apploadbalancer.v1";

/**
 * A target group resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/target-group).
 */
export interface TargetGroup {
  $type: "yandex.cloud.apploadbalancer.v1.TargetGroup";
  /** ID of the target group. Generated at creation time. */
  id: string;
  /** Name of the target group. The name is unique within the folder. */
  name: string;
  /** Description of the target group. */
  description: string;
  /** ID of the folder that the target group belongs to. */
  folderId: string;
  /**
   * Target group labels as `key:value` pairs.
   * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
   */
  labels: { [key: string]: string };
  /** List of targets in the target group. */
  targets: Target[];
  /** Creation timestamp. */
  createdAt?: Date;
}

export interface TargetGroup_LabelsEntry {
  $type: "yandex.cloud.apploadbalancer.v1.TargetGroup.LabelsEntry";
  key: string;
  value: string;
}

/**
 * A target resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/target-group).
 */
export interface Target {
  $type: "yandex.cloud.apploadbalancer.v1.Target";
  /** IP address of the target. */
  ipAddress: string | undefined;
  /** ID of the subnet that the target is connected to. */
  subnetId: string;
  /**
   * If set, will not require `subnet_id` to validate the target.
   * Instead, the address should belong to one of the following ranges:
   * 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16
   * Only one of `subnet_id` or `private_ipv4_address` should be set.
   */
  privateIpv4Address: boolean;
}

const baseTargetGroup: object = {
  $type: "yandex.cloud.apploadbalancer.v1.TargetGroup",
  id: "",
  name: "",
  description: "",
  folderId: "",
};

export const TargetGroup = {
  $type: "yandex.cloud.apploadbalancer.v1.TargetGroup" as const,

  encode(
    message: TargetGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.folderId !== "") {
      writer.uint32(34).string(message.folderId);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      TargetGroup_LabelsEntry.encode(
        {
          $type: "yandex.cloud.apploadbalancer.v1.TargetGroup.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    for (const v of message.targets) {
      Target.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TargetGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTargetGroup } as TargetGroup;
    message.labels = {};
    message.targets = [];
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
          message.description = reader.string();
          break;
        case 4:
          message.folderId = reader.string();
          break;
        case 5:
          const entry5 = TargetGroup_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.targets.push(Target.decode(reader, reader.uint32()));
          break;
        case 7:
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

  fromJSON(object: any): TargetGroup {
    const message = { ...baseTargetGroup } as TargetGroup;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.targets = (object.targets ?? []).map((e: any) =>
      Target.fromJSON(e)
    );
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    return message;
  },

  toJSON(message: TargetGroup): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    if (message.targets) {
      obj.targets = message.targets.map((e) =>
        e ? Target.toJSON(e) : undefined
      );
    } else {
      obj.targets = [];
    }
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TargetGroup>, I>>(
    object: I
  ): TargetGroup {
    const message = { ...baseTargetGroup } as TargetGroup;
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.folderId = object.folderId ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.targets = object.targets?.map((e) => Target.fromPartial(e)) || [];
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(TargetGroup.$type, TargetGroup);

const baseTargetGroup_LabelsEntry: object = {
  $type: "yandex.cloud.apploadbalancer.v1.TargetGroup.LabelsEntry",
  key: "",
  value: "",
};

export const TargetGroup_LabelsEntry = {
  $type: "yandex.cloud.apploadbalancer.v1.TargetGroup.LabelsEntry" as const,

  encode(
    message: TargetGroup_LabelsEntry,
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
  ): TargetGroup_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTargetGroup_LabelsEntry,
    } as TargetGroup_LabelsEntry;
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

  fromJSON(object: any): TargetGroup_LabelsEntry {
    const message = {
      ...baseTargetGroup_LabelsEntry,
    } as TargetGroup_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: TargetGroup_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TargetGroup_LabelsEntry>, I>>(
    object: I
  ): TargetGroup_LabelsEntry {
    const message = {
      ...baseTargetGroup_LabelsEntry,
    } as TargetGroup_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(TargetGroup_LabelsEntry.$type, TargetGroup_LabelsEntry);

const baseTarget: object = {
  $type: "yandex.cloud.apploadbalancer.v1.Target",
  subnetId: "",
  privateIpv4Address: false,
};

export const Target = {
  $type: "yandex.cloud.apploadbalancer.v1.Target" as const,

  encode(
    message: Target,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ipAddress !== undefined) {
      writer.uint32(10).string(message.ipAddress);
    }
    if (message.subnetId !== "") {
      writer.uint32(26).string(message.subnetId);
    }
    if (message.privateIpv4Address === true) {
      writer.uint32(32).bool(message.privateIpv4Address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Target {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTarget } as Target;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ipAddress = reader.string();
          break;
        case 3:
          message.subnetId = reader.string();
          break;
        case 4:
          message.privateIpv4Address = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Target {
    const message = { ...baseTarget } as Target;
    message.ipAddress =
      object.ipAddress !== undefined && object.ipAddress !== null
        ? String(object.ipAddress)
        : undefined;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.privateIpv4Address =
      object.privateIpv4Address !== undefined &&
      object.privateIpv4Address !== null
        ? Boolean(object.privateIpv4Address)
        : false;
    return message;
  },

  toJSON(message: Target): unknown {
    const obj: any = {};
    message.ipAddress !== undefined && (obj.ipAddress = message.ipAddress);
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    message.privateIpv4Address !== undefined &&
      (obj.privateIpv4Address = message.privateIpv4Address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Target>, I>>(object: I): Target {
    const message = { ...baseTarget } as Target;
    message.ipAddress = object.ipAddress ?? undefined;
    message.subnetId = object.subnetId ?? "";
    message.privateIpv4Address = object.privateIpv4Address ?? false;
    return message;
  },
};

messageTypeRegistry.set(Target.$type, Target);

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
