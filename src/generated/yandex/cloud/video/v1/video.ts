/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../../google/protobuf/duration";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.video.v1";

export interface Video {
  $type: "yandex.cloud.video.v1.Video";
  /** ID of the video. */
  id: string;
  /** ID of the channel where the video was created. */
  channelId: string;
  /** Video title. */
  title: string;
  /** Video description. */
  description: string;
  /** ID of the thumbnail. */
  thumbnailId: string;
  /** Video status. */
  status: Video_VideoStatus;
  /** Video duration. Optional, may be empty until the transcoding result is ready. */
  duration?: Duration;
  /** Video visibility status. */
  visibilityStatus: Video_VisibilityStatus;
  /** Upload video using the tus protocol. */
  tusd?: VideoTUSDSource | undefined;
  /** Video is available to everyone. */
  publicAccess?: VideoPublicAccessRights | undefined;
  /** Checking access rights using the authorization system. */
  authSystemAccess?: VideoAuthSystemAccessRights | undefined;
  /** Time when video was created. */
  createdAt?: Date;
  /** Time of last video update. */
  updatedAt?: Date;
  /** Custom labels as `` key:value `` pairs. Maximum 64 per resource. */
  labels: { [key: string]: string };
}

export enum Video_VideoStatus {
  /** VIDEO_STATUS_UNSPECIFIED - Video status unspecified. */
  VIDEO_STATUS_UNSPECIFIED = 0,
  /** WAIT_UPLOADING - Waiting for the whole number of bytes to be loaded. */
  WAIT_UPLOADING = 1,
  /** PROCESSING - Video processing. */
  PROCESSING = 4,
  /** READY - Video is ready, processing is completed. */
  READY = 5,
  /** ERROR - An error occurred during video processing. */
  ERROR = 7,
  UNRECOGNIZED = -1,
}

export function video_VideoStatusFromJSON(object: any): Video_VideoStatus {
  switch (object) {
    case 0:
    case "VIDEO_STATUS_UNSPECIFIED":
      return Video_VideoStatus.VIDEO_STATUS_UNSPECIFIED;
    case 1:
    case "WAIT_UPLOADING":
      return Video_VideoStatus.WAIT_UPLOADING;
    case 4:
    case "PROCESSING":
      return Video_VideoStatus.PROCESSING;
    case 5:
    case "READY":
      return Video_VideoStatus.READY;
    case 7:
    case "ERROR":
      return Video_VideoStatus.ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Video_VideoStatus.UNRECOGNIZED;
  }
}

export function video_VideoStatusToJSON(object: Video_VideoStatus): string {
  switch (object) {
    case Video_VideoStatus.VIDEO_STATUS_UNSPECIFIED:
      return "VIDEO_STATUS_UNSPECIFIED";
    case Video_VideoStatus.WAIT_UPLOADING:
      return "WAIT_UPLOADING";
    case Video_VideoStatus.PROCESSING:
      return "PROCESSING";
    case Video_VideoStatus.READY:
      return "READY";
    case Video_VideoStatus.ERROR:
      return "ERROR";
    default:
      return "UNKNOWN";
  }
}

export enum Video_VisibilityStatus {
  /** VISIBILITY_STATUS_UNSPECIFIED - Visibility status unspecified. */
  VISIBILITY_STATUS_UNSPECIFIED = 0,
  /** PUBLISHED - Video is published and available for viewing. */
  PUBLISHED = 1,
  /** UNPUBLISHED - Video is unpublished, only admin can watch. */
  UNPUBLISHED = 2,
  UNRECOGNIZED = -1,
}

export function video_VisibilityStatusFromJSON(
  object: any
): Video_VisibilityStatus {
  switch (object) {
    case 0:
    case "VISIBILITY_STATUS_UNSPECIFIED":
      return Video_VisibilityStatus.VISIBILITY_STATUS_UNSPECIFIED;
    case 1:
    case "PUBLISHED":
      return Video_VisibilityStatus.PUBLISHED;
    case 2:
    case "UNPUBLISHED":
      return Video_VisibilityStatus.UNPUBLISHED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Video_VisibilityStatus.UNRECOGNIZED;
  }
}

export function video_VisibilityStatusToJSON(
  object: Video_VisibilityStatus
): string {
  switch (object) {
    case Video_VisibilityStatus.VISIBILITY_STATUS_UNSPECIFIED:
      return "VISIBILITY_STATUS_UNSPECIFIED";
    case Video_VisibilityStatus.PUBLISHED:
      return "PUBLISHED";
    case Video_VisibilityStatus.UNPUBLISHED:
      return "UNPUBLISHED";
    default:
      return "UNKNOWN";
  }
}

export interface Video_LabelsEntry {
  $type: "yandex.cloud.video.v1.Video.LabelsEntry";
  key: string;
  value: string;
}

export interface VideoTUSDSource {
  $type: "yandex.cloud.video.v1.VideoTUSDSource";
  /** URL for uploading video via the tus protocol. */
  url: string;
}

export interface VideoPublicAccessRights {
  $type: "yandex.cloud.video.v1.VideoPublicAccessRights";
}

export interface VideoAuthSystemAccessRights {
  $type: "yandex.cloud.video.v1.VideoAuthSystemAccessRights";
}

const baseVideo: object = {
  $type: "yandex.cloud.video.v1.Video",
  id: "",
  channelId: "",
  title: "",
  description: "",
  thumbnailId: "",
  status: 0,
  visibilityStatus: 0,
};

export const Video = {
  $type: "yandex.cloud.video.v1.Video" as const,

  encode(message: Video, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.thumbnailId !== "") {
      writer.uint32(42).string(message.thumbnailId);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(66).fork()).ldelim();
    }
    if (message.visibilityStatus !== 0) {
      writer.uint32(72).int32(message.visibilityStatus);
    }
    if (message.tusd !== undefined) {
      VideoTUSDSource.encode(message.tusd, writer.uint32(8002).fork()).ldelim();
    }
    if (message.publicAccess !== undefined) {
      VideoPublicAccessRights.encode(
        message.publicAccess,
        writer.uint32(16002).fork()
      ).ldelim();
    }
    if (message.authSystemAccess !== undefined) {
      VideoAuthSystemAccessRights.encode(
        message.authSystemAccess,
        writer.uint32(16018).fork()
      ).ldelim();
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
      Video_LabelsEntry.encode(
        {
          $type: "yandex.cloud.video.v1.Video.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(1602).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Video {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVideo } as Video;
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
          message.title = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.thumbnailId = reader.string();
          break;
        case 6:
          message.status = reader.int32() as any;
          break;
        case 8:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 9:
          message.visibilityStatus = reader.int32() as any;
          break;
        case 1000:
          message.tusd = VideoTUSDSource.decode(reader, reader.uint32());
          break;
        case 2000:
          message.publicAccess = VideoPublicAccessRights.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2002:
          message.authSystemAccess = VideoAuthSystemAccessRights.decode(
            reader,
            reader.uint32()
          );
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
          const entry200 = Video_LabelsEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): Video {
    const message = { ...baseVideo } as Video;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
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
        ? video_VideoStatusFromJSON(object.status)
        : 0;
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? Duration.fromJSON(object.duration)
        : undefined;
    message.visibilityStatus =
      object.visibilityStatus !== undefined && object.visibilityStatus !== null
        ? video_VisibilityStatusFromJSON(object.visibilityStatus)
        : 0;
    message.tusd =
      object.tusd !== undefined && object.tusd !== null
        ? VideoTUSDSource.fromJSON(object.tusd)
        : undefined;
    message.publicAccess =
      object.publicAccess !== undefined && object.publicAccess !== null
        ? VideoPublicAccessRights.fromJSON(object.publicAccess)
        : undefined;
    message.authSystemAccess =
      object.authSystemAccess !== undefined && object.authSystemAccess !== null
        ? VideoAuthSystemAccessRights.fromJSON(object.authSystemAccess)
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

  toJSON(message: Video): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.thumbnailId !== undefined &&
      (obj.thumbnailId = message.thumbnailId);
    message.status !== undefined &&
      (obj.status = video_VideoStatusToJSON(message.status));
    message.duration !== undefined &&
      (obj.duration = message.duration
        ? Duration.toJSON(message.duration)
        : undefined);
    message.visibilityStatus !== undefined &&
      (obj.visibilityStatus = video_VisibilityStatusToJSON(
        message.visibilityStatus
      ));
    message.tusd !== undefined &&
      (obj.tusd = message.tusd
        ? VideoTUSDSource.toJSON(message.tusd)
        : undefined);
    message.publicAccess !== undefined &&
      (obj.publicAccess = message.publicAccess
        ? VideoPublicAccessRights.toJSON(message.publicAccess)
        : undefined);
    message.authSystemAccess !== undefined &&
      (obj.authSystemAccess = message.authSystemAccess
        ? VideoAuthSystemAccessRights.toJSON(message.authSystemAccess)
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

  fromPartial<I extends Exact<DeepPartial<Video>, I>>(object: I): Video {
    const message = { ...baseVideo } as Video;
    message.id = object.id ?? "";
    message.channelId = object.channelId ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.thumbnailId = object.thumbnailId ?? "";
    message.status = object.status ?? 0;
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? Duration.fromPartial(object.duration)
        : undefined;
    message.visibilityStatus = object.visibilityStatus ?? 0;
    message.tusd =
      object.tusd !== undefined && object.tusd !== null
        ? VideoTUSDSource.fromPartial(object.tusd)
        : undefined;
    message.publicAccess =
      object.publicAccess !== undefined && object.publicAccess !== null
        ? VideoPublicAccessRights.fromPartial(object.publicAccess)
        : undefined;
    message.authSystemAccess =
      object.authSystemAccess !== undefined && object.authSystemAccess !== null
        ? VideoAuthSystemAccessRights.fromPartial(object.authSystemAccess)
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

messageTypeRegistry.set(Video.$type, Video);

const baseVideo_LabelsEntry: object = {
  $type: "yandex.cloud.video.v1.Video.LabelsEntry",
  key: "",
  value: "",
};

export const Video_LabelsEntry = {
  $type: "yandex.cloud.video.v1.Video.LabelsEntry" as const,

  encode(
    message: Video_LabelsEntry,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Video_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVideo_LabelsEntry } as Video_LabelsEntry;
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

  fromJSON(object: any): Video_LabelsEntry {
    const message = { ...baseVideo_LabelsEntry } as Video_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Video_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Video_LabelsEntry>, I>>(
    object: I
  ): Video_LabelsEntry {
    const message = { ...baseVideo_LabelsEntry } as Video_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Video_LabelsEntry.$type, Video_LabelsEntry);

const baseVideoTUSDSource: object = {
  $type: "yandex.cloud.video.v1.VideoTUSDSource",
  url: "",
};

export const VideoTUSDSource = {
  $type: "yandex.cloud.video.v1.VideoTUSDSource" as const,

  encode(
    message: VideoTUSDSource,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VideoTUSDSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVideoTUSDSource } as VideoTUSDSource;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VideoTUSDSource {
    const message = { ...baseVideoTUSDSource } as VideoTUSDSource;
    message.url =
      object.url !== undefined && object.url !== null ? String(object.url) : "";
    return message;
  },

  toJSON(message: VideoTUSDSource): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VideoTUSDSource>, I>>(
    object: I
  ): VideoTUSDSource {
    const message = { ...baseVideoTUSDSource } as VideoTUSDSource;
    message.url = object.url ?? "";
    return message;
  },
};

messageTypeRegistry.set(VideoTUSDSource.$type, VideoTUSDSource);

const baseVideoPublicAccessRights: object = {
  $type: "yandex.cloud.video.v1.VideoPublicAccessRights",
};

export const VideoPublicAccessRights = {
  $type: "yandex.cloud.video.v1.VideoPublicAccessRights" as const,

  encode(
    _: VideoPublicAccessRights,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): VideoPublicAccessRights {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseVideoPublicAccessRights,
    } as VideoPublicAccessRights;
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

  fromJSON(_: any): VideoPublicAccessRights {
    const message = {
      ...baseVideoPublicAccessRights,
    } as VideoPublicAccessRights;
    return message;
  },

  toJSON(_: VideoPublicAccessRights): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VideoPublicAccessRights>, I>>(
    _: I
  ): VideoPublicAccessRights {
    const message = {
      ...baseVideoPublicAccessRights,
    } as VideoPublicAccessRights;
    return message;
  },
};

messageTypeRegistry.set(VideoPublicAccessRights.$type, VideoPublicAccessRights);

const baseVideoAuthSystemAccessRights: object = {
  $type: "yandex.cloud.video.v1.VideoAuthSystemAccessRights",
};

export const VideoAuthSystemAccessRights = {
  $type: "yandex.cloud.video.v1.VideoAuthSystemAccessRights" as const,

  encode(
    _: VideoAuthSystemAccessRights,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): VideoAuthSystemAccessRights {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseVideoAuthSystemAccessRights,
    } as VideoAuthSystemAccessRights;
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

  fromJSON(_: any): VideoAuthSystemAccessRights {
    const message = {
      ...baseVideoAuthSystemAccessRights,
    } as VideoAuthSystemAccessRights;
    return message;
  },

  toJSON(_: VideoAuthSystemAccessRights): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VideoAuthSystemAccessRights>, I>>(
    _: I
  ): VideoAuthSystemAccessRights {
    const message = {
      ...baseVideoAuthSystemAccessRights,
    } as VideoAuthSystemAccessRights;
    return message;
  },
};

messageTypeRegistry.set(
  VideoAuthSystemAccessRights.$type,
  VideoAuthSystemAccessRights
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
