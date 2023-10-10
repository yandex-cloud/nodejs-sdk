/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.logging.v1";

export interface Sink {
  $type: "yandex.cloud.logging.v1.Sink";
  /** Sink ID. */
  id: string;
  /** Sink folder ID. */
  folderId: string;
  /** Sink cloud ID. */
  cloudId: string;
  /** Sink creation time. */
  createdAt?: Date;
  /** Sink name. */
  name: string;
  /** Sink description. */
  description: string;
  /** Sink labels. */
  labels: { [key: string]: string };
  /** Logs will be written to the sink on behalf of this service account */
  serviceAccountId: string;
  /** Yandex data stream */
  yds?: Sink_Yds | undefined;
  /** Object storage */
  s3?: Sink_S3 | undefined;
}

export interface Sink_LabelsEntry {
  $type: "yandex.cloud.logging.v1.Sink.LabelsEntry";
  key: string;
  value: string;
}

export interface Sink_Yds {
  $type: "yandex.cloud.logging.v1.Sink.Yds";
  /** Fully qualified name of data stream */
  streamName: string;
}

export interface Sink_S3 {
  $type: "yandex.cloud.logging.v1.Sink.S3";
  /** Object storage bucket */
  bucket: string;
  /** Prefix to use for saved log object names */
  prefix: string;
}

const baseSink: object = {
  $type: "yandex.cloud.logging.v1.Sink",
  id: "",
  folderId: "",
  cloudId: "",
  name: "",
  description: "",
  serviceAccountId: "",
};

export const Sink = {
  $type: "yandex.cloud.logging.v1.Sink" as const,

  encode(message: Sink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.cloudId !== "") {
      writer.uint32(26).string(message.cloudId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Sink_LabelsEntry.encode(
        {
          $type: "yandex.cloud.logging.v1.Sink.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(58).fork()
      ).ldelim();
    });
    if (message.serviceAccountId !== "") {
      writer.uint32(66).string(message.serviceAccountId);
    }
    if (message.yds !== undefined) {
      Sink_Yds.encode(message.yds, writer.uint32(74).fork()).ldelim();
    }
    if (message.s3 !== undefined) {
      Sink_S3.encode(message.s3, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sink {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSink } as Sink;
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
          message.cloudId = reader.string();
          break;
        case 4:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          const entry7 = Sink_LabelsEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.labels[entry7.key] = entry7.value;
          }
          break;
        case 8:
          message.serviceAccountId = reader.string();
          break;
        case 9:
          message.yds = Sink_Yds.decode(reader, reader.uint32());
          break;
        case 10:
          message.s3 = Sink_S3.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Sink {
    const message = { ...baseSink } as Sink;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.cloudId =
      object.cloudId !== undefined && object.cloudId !== null
        ? String(object.cloudId)
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
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.yds =
      object.yds !== undefined && object.yds !== null
        ? Sink_Yds.fromJSON(object.yds)
        : undefined;
    message.s3 =
      object.s3 !== undefined && object.s3 !== null
        ? Sink_S3.fromJSON(object.s3)
        : undefined;
    return message;
  },

  toJSON(message: Sink): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.cloudId !== undefined && (obj.cloudId = message.cloudId);
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
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.yds !== undefined &&
      (obj.yds = message.yds ? Sink_Yds.toJSON(message.yds) : undefined);
    message.s3 !== undefined &&
      (obj.s3 = message.s3 ? Sink_S3.toJSON(message.s3) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Sink>, I>>(object: I): Sink {
    const message = { ...baseSink } as Sink;
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.cloudId = object.cloudId ?? "";
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
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.yds =
      object.yds !== undefined && object.yds !== null
        ? Sink_Yds.fromPartial(object.yds)
        : undefined;
    message.s3 =
      object.s3 !== undefined && object.s3 !== null
        ? Sink_S3.fromPartial(object.s3)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Sink.$type, Sink);

const baseSink_LabelsEntry: object = {
  $type: "yandex.cloud.logging.v1.Sink.LabelsEntry",
  key: "",
  value: "",
};

export const Sink_LabelsEntry = {
  $type: "yandex.cloud.logging.v1.Sink.LabelsEntry" as const,

  encode(
    message: Sink_LabelsEntry,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Sink_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSink_LabelsEntry } as Sink_LabelsEntry;
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

  fromJSON(object: any): Sink_LabelsEntry {
    const message = { ...baseSink_LabelsEntry } as Sink_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Sink_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Sink_LabelsEntry>, I>>(
    object: I
  ): Sink_LabelsEntry {
    const message = { ...baseSink_LabelsEntry } as Sink_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Sink_LabelsEntry.$type, Sink_LabelsEntry);

const baseSink_Yds: object = {
  $type: "yandex.cloud.logging.v1.Sink.Yds",
  streamName: "",
};

export const Sink_Yds = {
  $type: "yandex.cloud.logging.v1.Sink.Yds" as const,

  encode(
    message: Sink_Yds,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.streamName !== "") {
      writer.uint32(10).string(message.streamName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sink_Yds {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSink_Yds } as Sink_Yds;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Sink_Yds {
    const message = { ...baseSink_Yds } as Sink_Yds;
    message.streamName =
      object.streamName !== undefined && object.streamName !== null
        ? String(object.streamName)
        : "";
    return message;
  },

  toJSON(message: Sink_Yds): unknown {
    const obj: any = {};
    message.streamName !== undefined && (obj.streamName = message.streamName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Sink_Yds>, I>>(object: I): Sink_Yds {
    const message = { ...baseSink_Yds } as Sink_Yds;
    message.streamName = object.streamName ?? "";
    return message;
  },
};

messageTypeRegistry.set(Sink_Yds.$type, Sink_Yds);

const baseSink_S3: object = {
  $type: "yandex.cloud.logging.v1.Sink.S3",
  bucket: "",
  prefix: "",
};

export const Sink_S3 = {
  $type: "yandex.cloud.logging.v1.Sink.S3" as const,

  encode(
    message: Sink_S3,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bucket !== "") {
      writer.uint32(10).string(message.bucket);
    }
    if (message.prefix !== "") {
      writer.uint32(18).string(message.prefix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sink_S3 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSink_S3 } as Sink_S3;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucket = reader.string();
          break;
        case 2:
          message.prefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Sink_S3 {
    const message = { ...baseSink_S3 } as Sink_S3;
    message.bucket =
      object.bucket !== undefined && object.bucket !== null
        ? String(object.bucket)
        : "";
    message.prefix =
      object.prefix !== undefined && object.prefix !== null
        ? String(object.prefix)
        : "";
    return message;
  },

  toJSON(message: Sink_S3): unknown {
    const obj: any = {};
    message.bucket !== undefined && (obj.bucket = message.bucket);
    message.prefix !== undefined && (obj.prefix = message.prefix);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Sink_S3>, I>>(object: I): Sink_S3 {
    const message = { ...baseSink_S3 } as Sink_S3;
    message.bucket = object.bucket ?? "";
    message.prefix = object.prefix ?? "";
    return message;
  },
};

messageTypeRegistry.set(Sink_S3.$type, Sink_S3);

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
