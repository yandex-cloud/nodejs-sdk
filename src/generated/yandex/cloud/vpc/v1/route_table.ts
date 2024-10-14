/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.vpc.v1";

/** A RouteTable resource. For more information, see [Static Routes](/docs/vpc/concepts/routing). */
export interface RouteTable {
  $type: "yandex.cloud.vpc.v1.RouteTable";
  /** ID of the route table. */
  id: string;
  /** ID of the folder that the route table belongs to. */
  folderId: string;
  /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  createdAt?: Date;
  /**
   * Name of the route table.
   * The name must be unique within the folder.
   * Value must match the regular expression `|[a-zA-Z]([-_a-zA-Z0-9]{0,61}[a-zA-Z0-9])?`.
   */
  name: string;
  /** Optional description of the route table. 0-256 characters long. */
  description: string;
  /**
   * Resource labels, `key:value` pairs.
   * No more than 64 per resource.
   * The string length in characters for each key must be 1-63.
   * Each value must match the regular expression `[-_0-9a-z]*`.
   * Each key must match the regular expression `[a-z][-_0-9a-z]*`.
   */
  labels: { [key: string]: string };
  /** ID of the network the route table belongs to. */
  networkId: string;
  /** List of static routes. */
  staticRoutes: StaticRoute[];
}

export interface RouteTable_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.RouteTable.LabelsEntry";
  key: string;
  value: string;
}

/** A StaticRoute resource. For more information, see [Static Routes](/docs/vpc/concepts/routing). */
export interface StaticRoute {
  $type: "yandex.cloud.vpc.v1.StaticRoute";
  /** Destination subnet in CIDR notation */
  destinationPrefix: string | undefined;
  /** Next hop IP address */
  nextHopAddress: string | undefined;
  /** Next hop gateway id */
  gatewayId: string | undefined;
  /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
  labels: { [key: string]: string };
}

export interface StaticRoute_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.StaticRoute.LabelsEntry";
  key: string;
  value: string;
}

const baseRouteTable: object = {
  $type: "yandex.cloud.vpc.v1.RouteTable",
  id: "",
  folderId: "",
  name: "",
  description: "",
  networkId: "",
};

export const RouteTable = {
  $type: "yandex.cloud.vpc.v1.RouteTable" as const,

  encode(
    message: RouteTable,
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
      RouteTable_LabelsEntry.encode(
        {
          $type: "yandex.cloud.vpc.v1.RouteTable.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.networkId !== "") {
      writer.uint32(58).string(message.networkId);
    }
    for (const v of message.staticRoutes) {
      StaticRoute.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RouteTable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRouteTable } as RouteTable;
    message.labels = {};
    message.staticRoutes = [];
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
          const entry6 = RouteTable_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.networkId = reader.string();
          break;
        case 8:
          message.staticRoutes.push(
            StaticRoute.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RouteTable {
    const message = { ...baseRouteTable } as RouteTable;
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
    message.staticRoutes = (object.staticRoutes ?? []).map((e: any) =>
      StaticRoute.fromJSON(e)
    );
    return message;
  },

  toJSON(message: RouteTable): unknown {
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
    if (message.staticRoutes) {
      obj.staticRoutes = message.staticRoutes.map((e) =>
        e ? StaticRoute.toJSON(e) : undefined
      );
    } else {
      obj.staticRoutes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RouteTable>, I>>(
    object: I
  ): RouteTable {
    const message = { ...baseRouteTable } as RouteTable;
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
    message.staticRoutes =
      object.staticRoutes?.map((e) => StaticRoute.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(RouteTable.$type, RouteTable);

const baseRouteTable_LabelsEntry: object = {
  $type: "yandex.cloud.vpc.v1.RouteTable.LabelsEntry",
  key: "",
  value: "",
};

export const RouteTable_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.RouteTable.LabelsEntry" as const,

  encode(
    message: RouteTable_LabelsEntry,
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
  ): RouteTable_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRouteTable_LabelsEntry } as RouteTable_LabelsEntry;
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

  fromJSON(object: any): RouteTable_LabelsEntry {
    const message = { ...baseRouteTable_LabelsEntry } as RouteTable_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: RouteTable_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RouteTable_LabelsEntry>, I>>(
    object: I
  ): RouteTable_LabelsEntry {
    const message = { ...baseRouteTable_LabelsEntry } as RouteTable_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(RouteTable_LabelsEntry.$type, RouteTable_LabelsEntry);

const baseStaticRoute: object = { $type: "yandex.cloud.vpc.v1.StaticRoute" };

export const StaticRoute = {
  $type: "yandex.cloud.vpc.v1.StaticRoute" as const,

  encode(
    message: StaticRoute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.destinationPrefix !== undefined) {
      writer.uint32(10).string(message.destinationPrefix);
    }
    if (message.nextHopAddress !== undefined) {
      writer.uint32(18).string(message.nextHopAddress);
    }
    if (message.gatewayId !== undefined) {
      writer.uint32(34).string(message.gatewayId);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      StaticRoute_LabelsEntry.encode(
        {
          $type: "yandex.cloud.vpc.v1.StaticRoute.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(26).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StaticRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStaticRoute } as StaticRoute;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.destinationPrefix = reader.string();
          break;
        case 2:
          message.nextHopAddress = reader.string();
          break;
        case 4:
          message.gatewayId = reader.string();
          break;
        case 3:
          const entry3 = StaticRoute_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.labels[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StaticRoute {
    const message = { ...baseStaticRoute } as StaticRoute;
    message.destinationPrefix =
      object.destinationPrefix !== undefined &&
      object.destinationPrefix !== null
        ? String(object.destinationPrefix)
        : undefined;
    message.nextHopAddress =
      object.nextHopAddress !== undefined && object.nextHopAddress !== null
        ? String(object.nextHopAddress)
        : undefined;
    message.gatewayId =
      object.gatewayId !== undefined && object.gatewayId !== null
        ? String(object.gatewayId)
        : undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: StaticRoute): unknown {
    const obj: any = {};
    message.destinationPrefix !== undefined &&
      (obj.destinationPrefix = message.destinationPrefix);
    message.nextHopAddress !== undefined &&
      (obj.nextHopAddress = message.nextHopAddress);
    message.gatewayId !== undefined && (obj.gatewayId = message.gatewayId);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StaticRoute>, I>>(
    object: I
  ): StaticRoute {
    const message = { ...baseStaticRoute } as StaticRoute;
    message.destinationPrefix = object.destinationPrefix ?? undefined;
    message.nextHopAddress = object.nextHopAddress ?? undefined;
    message.gatewayId = object.gatewayId ?? undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(StaticRoute.$type, StaticRoute);

const baseStaticRoute_LabelsEntry: object = {
  $type: "yandex.cloud.vpc.v1.StaticRoute.LabelsEntry",
  key: "",
  value: "",
};

export const StaticRoute_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.StaticRoute.LabelsEntry" as const,

  encode(
    message: StaticRoute_LabelsEntry,
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
  ): StaticRoute_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseStaticRoute_LabelsEntry,
    } as StaticRoute_LabelsEntry;
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

  fromJSON(object: any): StaticRoute_LabelsEntry {
    const message = {
      ...baseStaticRoute_LabelsEntry,
    } as StaticRoute_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: StaticRoute_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StaticRoute_LabelsEntry>, I>>(
    object: I
  ): StaticRoute_LabelsEntry {
    const message = {
      ...baseStaticRoute_LabelsEntry,
    } as StaticRoute_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(StaticRoute_LabelsEntry.$type, StaticRoute_LabelsEntry);

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
