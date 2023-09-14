/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.mdb.opensearch.v1";

export interface Backup {
  $type: "yandex.cloud.mdb.opensearch.v1.Backup";
  /** Required. ID of the backup. */
  id: string;
  /** ID of the folder that the backup belongs to. */
  folderId: string;
  /** ID of the OpenSearch cluster that the backup was created for. */
  sourceClusterId: string;
  /** Time when the backup operation was started. */
  startedAt?: Date;
  /** Time when the backup operation was completed. */
  createdAt?: Date;
  /** Names of indices in the backup. */
  indices: string[];
  /** OpenSearch version used to create the backup. */
  opensearchVersion: string;
  /** Size of the backup in bytes. */
  sizeBytes: number;
  /** The number of indices in the backup. */
  indicesTotal: number;
}

const baseBackup: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.Backup",
  id: "",
  folderId: "",
  sourceClusterId: "",
  indices: "",
  opensearchVersion: "",
  sizeBytes: 0,
  indicesTotal: 0,
};

export const Backup = {
  $type: "yandex.cloud.mdb.opensearch.v1.Backup" as const,

  encode(
    message: Backup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.sourceClusterId !== "") {
      writer.uint32(26).string(message.sourceClusterId);
    }
    if (message.startedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startedAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.indices) {
      writer.uint32(50).string(v!);
    }
    if (message.opensearchVersion !== "") {
      writer.uint32(58).string(message.opensearchVersion);
    }
    if (message.sizeBytes !== 0) {
      writer.uint32(64).int64(message.sizeBytes);
    }
    if (message.indicesTotal !== 0) {
      writer.uint32(72).int64(message.indicesTotal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Backup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBackup } as Backup;
    message.indices = [];
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
          message.sourceClusterId = reader.string();
          break;
        case 4:
          message.startedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.indices.push(reader.string());
          break;
        case 7:
          message.opensearchVersion = reader.string();
          break;
        case 8:
          message.sizeBytes = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.indicesTotal = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Backup {
    const message = { ...baseBackup } as Backup;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.sourceClusterId =
      object.sourceClusterId !== undefined && object.sourceClusterId !== null
        ? String(object.sourceClusterId)
        : "";
    message.startedAt =
      object.startedAt !== undefined && object.startedAt !== null
        ? fromJsonTimestamp(object.startedAt)
        : undefined;
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.indices = (object.indices ?? []).map((e: any) => String(e));
    message.opensearchVersion =
      object.opensearchVersion !== undefined &&
      object.opensearchVersion !== null
        ? String(object.opensearchVersion)
        : "";
    message.sizeBytes =
      object.sizeBytes !== undefined && object.sizeBytes !== null
        ? Number(object.sizeBytes)
        : 0;
    message.indicesTotal =
      object.indicesTotal !== undefined && object.indicesTotal !== null
        ? Number(object.indicesTotal)
        : 0;
    return message;
  },

  toJSON(message: Backup): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.sourceClusterId !== undefined &&
      (obj.sourceClusterId = message.sourceClusterId);
    message.startedAt !== undefined &&
      (obj.startedAt = message.startedAt.toISOString());
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    if (message.indices) {
      obj.indices = message.indices.map((e) => e);
    } else {
      obj.indices = [];
    }
    message.opensearchVersion !== undefined &&
      (obj.opensearchVersion = message.opensearchVersion);
    message.sizeBytes !== undefined &&
      (obj.sizeBytes = Math.round(message.sizeBytes));
    message.indicesTotal !== undefined &&
      (obj.indicesTotal = Math.round(message.indicesTotal));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Backup>, I>>(object: I): Backup {
    const message = { ...baseBackup } as Backup;
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.sourceClusterId = object.sourceClusterId ?? "";
    message.startedAt = object.startedAt ?? undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.indices = object.indices?.map((e) => e) || [];
    message.opensearchVersion = object.opensearchVersion ?? "";
    message.sizeBytes = object.sizeBytes ?? 0;
    message.indicesTotal = object.indicesTotal ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Backup.$type, Backup);

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
