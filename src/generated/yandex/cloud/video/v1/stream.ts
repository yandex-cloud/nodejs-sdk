/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.video.v1";

export interface Stream {
  $type: "yandex.cloud.video.v1.Stream";
  /** ID of the stream. */
  id: string;
  /** ID of the channel where the stream was created. */
  channelId: string;
  /** ID of the line to which stream is linked. */
  lineId: string;
  /** Stream title. */
  title: string;
  /** Stream description. */
  description: string;
  /** ID of the thumbnail. */
  thumbnailId: string;
  /** Stream status. */
  status: Stream_StreamStatus;
  /** Stream start time. */
  startTime?: Date;
  /** Stream publish time. Time when stream switched to ONAIR status. */
  publishTime?: Date;
  /** Stream finish time. */
  finishTime?: Date;
  /** On demand stream. It starts immediately when a signal appears. */
  onDemand?: OnDemand | undefined;
  /** Schedule stream. Determines when to start receiving the signal or finish time. */
  schedule?: Schedule | undefined;
  /** Time when stream was created. */
  createdAt?: Date;
  /** Time of last stream update. */
  updatedAt?: Date;
  /** Custom labels as `` key:value `` pairs. Maximum 64 per resource. */
  labels: { [key: string]: string };
}

/** Stream status. */
export enum Stream_StreamStatus {
  /** STREAM_STATUS_UNSPECIFIED - Stream status unspecified. */
  STREAM_STATUS_UNSPECIFIED = 0,
  /** OFFLINE - Stream offline. */
  OFFLINE = 1,
  /** PREPARING - Preparing the infrastructure for receiving video signal. */
  PREPARING = 2,
  /** READY - Everything is ready to launch stream. */
  READY = 3,
  /** ONAIR - Stream onair. */
  ONAIR = 4,
  /** FINISHED - Stream finished. */
  FINISHED = 5,
  UNRECOGNIZED = -1,
}

export function stream_StreamStatusFromJSON(object: any): Stream_StreamStatus {
  switch (object) {
    case 0:
    case "STREAM_STATUS_UNSPECIFIED":
      return Stream_StreamStatus.STREAM_STATUS_UNSPECIFIED;
    case 1:
    case "OFFLINE":
      return Stream_StreamStatus.OFFLINE;
    case 2:
    case "PREPARING":
      return Stream_StreamStatus.PREPARING;
    case 3:
    case "READY":
      return Stream_StreamStatus.READY;
    case 4:
    case "ONAIR":
      return Stream_StreamStatus.ONAIR;
    case 5:
    case "FINISHED":
      return Stream_StreamStatus.FINISHED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Stream_StreamStatus.UNRECOGNIZED;
  }
}

export function stream_StreamStatusToJSON(object: Stream_StreamStatus): string {
  switch (object) {
    case Stream_StreamStatus.STREAM_STATUS_UNSPECIFIED:
      return "STREAM_STATUS_UNSPECIFIED";
    case Stream_StreamStatus.OFFLINE:
      return "OFFLINE";
    case Stream_StreamStatus.PREPARING:
      return "PREPARING";
    case Stream_StreamStatus.READY:
      return "READY";
    case Stream_StreamStatus.ONAIR:
      return "ONAIR";
    case Stream_StreamStatus.FINISHED:
      return "FINISHED";
    default:
      return "UNKNOWN";
  }
}

export interface Stream_LabelsEntry {
  $type: "yandex.cloud.video.v1.Stream.LabelsEntry";
  key: string;
  value: string;
}

/** If "OnDemand" is used, client should start and finish explicitly. */
export interface OnDemand {
  $type: "yandex.cloud.video.v1.OnDemand";
}

/** If "Schedule" is used, stream automatically start and finish at this time. */
export interface Schedule {
  $type: "yandex.cloud.video.v1.Schedule";
  startTime?: Date;
  finishTime?: Date;
}

const baseStream: object = {
  $type: "yandex.cloud.video.v1.Stream",
  id: "",
  channelId: "",
  lineId: "",
  title: "",
  description: "",
  thumbnailId: "",
  status: 0,
};

export const Stream = {
  $type: "yandex.cloud.video.v1.Stream" as const,

  encode(
    message: Stream,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.lineId !== "") {
      writer.uint32(26).string(message.lineId);
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.thumbnailId !== "") {
      writer.uint32(50).string(message.thumbnailId);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.publishTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.publishTime),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.finishTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.finishTime),
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.onDemand !== undefined) {
      OnDemand.encode(message.onDemand, writer.uint32(8002).fork()).ldelim();
    }
    if (message.schedule !== undefined) {
      Schedule.encode(message.schedule, writer.uint32(8010).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(802).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(810).fork()
      ).ldelim();
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Stream_LabelsEntry.encode(
        {
          $type: "yandex.cloud.video.v1.Stream.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(1602).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Stream {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStream } as Stream;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.lineId = reader.string();
          break;
        case 4:
          message.title = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.thumbnailId = reader.string();
          break;
        case 8:
          message.status = reader.int32() as any;
          break;
        case 9:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.publishTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.finishTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 1000:
          message.onDemand = OnDemand.decode(reader, reader.uint32());
          break;
        case 1001:
          message.schedule = Schedule.decode(reader, reader.uint32());
          break;
        case 100:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 101:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 200:
          const entry200 = Stream_LabelsEntry.decode(reader, reader.uint32());
          if (entry200.value !== undefined) {
            message.labels[entry200.key] = entry200.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Stream {
    const message = { ...baseStream } as Stream;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.lineId =
      object.lineId !== undefined && object.lineId !== null
        ? String(object.lineId)
        : "";
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.thumbnailId =
      object.thumbnailId !== undefined && object.thumbnailId !== null
        ? String(object.thumbnailId)
        : "";
    message.status =
      object.status !== undefined && object.status !== null
        ? stream_StreamStatusFromJSON(object.status)
        : 0;
    message.startTime =
      object.startTime !== undefined && object.startTime !== null
        ? fromJsonTimestamp(object.startTime)
        : undefined;
    message.publishTime =
      object.publishTime !== undefined && object.publishTime !== null
        ? fromJsonTimestamp(object.publishTime)
        : undefined;
    message.finishTime =
      object.finishTime !== undefined && object.finishTime !== null
        ? fromJsonTimestamp(object.finishTime)
        : undefined;
    message.onDemand =
      object.onDemand !== undefined && object.onDemand !== null
        ? OnDemand.fromJSON(object.onDemand)
        : undefined;
    message.schedule =
      object.schedule !== undefined && object.schedule !== null
        ? Schedule.fromJSON(object.schedule)
        : undefined;
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.updatedAt =
      object.updatedAt !== undefined && object.updatedAt !== null
        ? fromJsonTimestamp(object.updatedAt)
        : undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: Stream): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.lineId !== undefined && (obj.lineId = message.lineId);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.thumbnailId !== undefined &&
      (obj.thumbnailId = message.thumbnailId);
    message.status !== undefined &&
      (obj.status = stream_StreamStatusToJSON(message.status));
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.publishTime !== undefined &&
      (obj.publishTime = message.publishTime.toISOString());
    message.finishTime !== undefined &&
      (obj.finishTime = message.finishTime.toISOString());
    message.onDemand !== undefined &&
      (obj.onDemand = message.onDemand
        ? OnDemand.toJSON(message.onDemand)
        : undefined);
    message.schedule !== undefined &&
      (obj.schedule = message.schedule
        ? Schedule.toJSON(message.schedule)
        : undefined);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Stream>, I>>(object: I): Stream {
    const message = { ...baseStream } as Stream;
    message.id = object.id ?? "";
    message.channelId = object.channelId ?? "";
    message.lineId = object.lineId ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.thumbnailId = object.thumbnailId ?? "";
    message.status = object.status ?? 0;
    message.startTime = object.startTime ?? undefined;
    message.publishTime = object.publishTime ?? undefined;
    message.finishTime = object.finishTime ?? undefined;
    message.onDemand =
      object.onDemand !== undefined && object.onDemand !== null
        ? OnDemand.fromPartial(object.onDemand)
        : undefined;
    message.schedule =
      object.schedule !== undefined && object.schedule !== null
        ? Schedule.fromPartial(object.schedule)
        : undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
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

messageTypeRegistry.set(Stream.$type, Stream);

const baseStream_LabelsEntry: object = {
  $type: "yandex.cloud.video.v1.Stream.LabelsEntry",
  key: "",
  value: "",
};

export const Stream_LabelsEntry = {
  $type: "yandex.cloud.video.v1.Stream.LabelsEntry" as const,

  encode(
    message: Stream_LabelsEntry,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Stream_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStream_LabelsEntry } as Stream_LabelsEntry;
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

  fromJSON(object: any): Stream_LabelsEntry {
    const message = { ...baseStream_LabelsEntry } as Stream_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Stream_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Stream_LabelsEntry>, I>>(
    object: I
  ): Stream_LabelsEntry {
    const message = { ...baseStream_LabelsEntry } as Stream_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Stream_LabelsEntry.$type, Stream_LabelsEntry);

const baseOnDemand: object = { $type: "yandex.cloud.video.v1.OnDemand" };

export const OnDemand = {
  $type: "yandex.cloud.video.v1.OnDemand" as const,

  encode(_: OnDemand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OnDemand {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOnDemand } as OnDemand;
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

  fromJSON(_: any): OnDemand {
    const message = { ...baseOnDemand } as OnDemand;
    return message;
  },

  toJSON(_: OnDemand): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OnDemand>, I>>(_: I): OnDemand {
    const message = { ...baseOnDemand } as OnDemand;
    return message;
  },
};

messageTypeRegistry.set(OnDemand.$type, OnDemand);

const baseSchedule: object = { $type: "yandex.cloud.video.v1.Schedule" };

export const Schedule = {
  $type: "yandex.cloud.video.v1.Schedule" as const,

  encode(
    message: Schedule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.finishTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.finishTime),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Schedule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSchedule } as Schedule;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.finishTime = fromTimestamp(
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

  fromJSON(object: any): Schedule {
    const message = { ...baseSchedule } as Schedule;
    message.startTime =
      object.startTime !== undefined && object.startTime !== null
        ? fromJsonTimestamp(object.startTime)
        : undefined;
    message.finishTime =
      object.finishTime !== undefined && object.finishTime !== null
        ? fromJsonTimestamp(object.finishTime)
        : undefined;
    return message;
  },

  toJSON(message: Schedule): unknown {
    const obj: any = {};
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.finishTime !== undefined &&
      (obj.finishTime = message.finishTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Schedule>, I>>(object: I): Schedule {
    const message = { ...baseSchedule } as Schedule;
    message.startTime = object.startTime ?? undefined;
    message.finishTime = object.finishTime ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Schedule.$type, Schedule);

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
