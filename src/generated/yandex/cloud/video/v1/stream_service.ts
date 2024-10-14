/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleUnaryCall,
  Client,
  ClientUnaryCall,
  Metadata,
  CallOptions,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Stream } from "../../../../yandex/cloud/video/v1/stream";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.video.v1";

export interface GetStreamRequest {
  $type: "yandex.cloud.video.v1.GetStreamRequest";
  /** ID of the stream. */
  streamId: string;
}

export interface ListStreamsRequest {
  $type: "yandex.cloud.video.v1.ListStreamsRequest";
  /** ID of the channel. */
  channelId: string;
  /** The maximum number of the results per page to return. Default value: 100. */
  pageSize: number;
  /** Page token for getting the next page of the result. */
  pageToken: string;
  /**
   * By which column the listing should be ordered and in which direction,
   * format is "createdAt desc". "id asc" if omitted.
   * Possible fields: ["id", "title", "startTime", "finishTime", "createdAt", "updatedAt"]
   * Both snake_case and camelCase are supported for fields.
   */
  orderBy: string;
  /**
   * Filter expression that filters resources listed in the response.
   * Expressions are composed of terms connected by logic operators.
   * Value in quotes: `'` or `"`
   * Example: "key1='value' AND key2='value'"
   * Supported operators: ["AND"].
   * Supported fields: ["title", "lineId", "status"]
   * Both snake_case and camelCase are supported for fields.
   */
  filter: string;
}

export interface ListStreamsResponse {
  $type: "yandex.cloud.video.v1.ListStreamsResponse";
  /** List of streams for channel. */
  streams: Stream[];
  /** Token for getting the next page. */
  nextPageToken: string;
}

export interface CreateStreamRequest {
  $type: "yandex.cloud.video.v1.CreateStreamRequest";
  /** ID of the channel. */
  channelId: string;
  /** ID of the line. */
  lineId: string;
  /** Stream title. */
  title: string;
  /** Stream description. */
  description: string;
  /** ID of the thumbnail. */
  thumbnailId: string;
  /** Custom labels as `` key:value `` pairs. Maximum 64 per resource. */
  labels: { [key: string]: string };
  /** On demand stream. It starts immediately when a signal appears. */
  onDemand?: OnDemandParams | undefined;
  /** Schedule stream. Determines when to start receiving the signal or finish time. */
  schedule?: ScheduleParams | undefined;
}

export interface CreateStreamRequest_LabelsEntry {
  $type: "yandex.cloud.video.v1.CreateStreamRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface OnDemandParams {
  $type: "yandex.cloud.video.v1.OnDemandParams";
}

export interface ScheduleParams {
  $type: "yandex.cloud.video.v1.ScheduleParams";
  startTime?: Date;
  finishTime?: Date;
}

export interface CreateStreamMetadata {
  $type: "yandex.cloud.video.v1.CreateStreamMetadata";
  /** ID of the stream. */
  streamId: string;
}

export interface UpdateStreamRequest {
  $type: "yandex.cloud.video.v1.UpdateStreamRequest";
  /** ID of the stream. */
  streamId: string;
  /** Field mask that specifies which fields of the stream are going to be updated. */
  fieldMask?: FieldMask;
  /** ID of the line. */
  lineId: string;
  /** Stream title. */
  title: string;
  /** Stream description. */
  description: string;
  /** ID of the thumbnail. */
  thumbnailId: string;
  /** Custom labels as `` key:value `` pairs. Maximum 64 per resource. */
  labels: { [key: string]: string };
  /** On demand stream. It starts immediately when a signal appears. */
  onDemand?: OnDemandParams | undefined;
  /** Schedule stream. Determines when to start receiving the signal or finish time. */
  schedule?: ScheduleParams | undefined;
}

export interface UpdateStreamRequest_LabelsEntry {
  $type: "yandex.cloud.video.v1.UpdateStreamRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateStreamMetadata {
  $type: "yandex.cloud.video.v1.UpdateStreamMetadata";
  /** ID of the stream. */
  streamId: string;
}

export interface DeleteStreamRequest {
  $type: "yandex.cloud.video.v1.DeleteStreamRequest";
  /** ID of the stream. */
  streamId: string;
}

export interface DeleteStreamMetadata {
  $type: "yandex.cloud.video.v1.DeleteStreamMetadata";
  /** ID of the stream. */
  streamId: string;
}

export interface PerformStreamActionRequest {
  $type: "yandex.cloud.video.v1.PerformStreamActionRequest";
  /** ID of the stream. */
  streamId: string;
  publish?: PublishAction | undefined;
  stop?: StopAction | undefined;
}

export interface PublishAction {
  $type: "yandex.cloud.video.v1.PublishAction";
}

export interface StopAction {
  $type: "yandex.cloud.video.v1.StopAction";
}

export interface PerformStreamActionMetadata {
  $type: "yandex.cloud.video.v1.PerformStreamActionMetadata";
  /** ID of the stream. */
  streamId: string;
}

const baseGetStreamRequest: object = {
  $type: "yandex.cloud.video.v1.GetStreamRequest",
  streamId: "",
};

export const GetStreamRequest = {
  $type: "yandex.cloud.video.v1.GetStreamRequest" as const,

  encode(
    message: GetStreamRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.streamId !== "") {
      writer.uint32(10).string(message.streamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStreamRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetStreamRequest } as GetStreamRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetStreamRequest {
    const message = { ...baseGetStreamRequest } as GetStreamRequest;
    message.streamId =
      object.streamId !== undefined && object.streamId !== null
        ? String(object.streamId)
        : "";
    return message;
  },

  toJSON(message: GetStreamRequest): unknown {
    const obj: any = {};
    message.streamId !== undefined && (obj.streamId = message.streamId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetStreamRequest>, I>>(
    object: I
  ): GetStreamRequest {
    const message = { ...baseGetStreamRequest } as GetStreamRequest;
    message.streamId = object.streamId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetStreamRequest.$type, GetStreamRequest);

const baseListStreamsRequest: object = {
  $type: "yandex.cloud.video.v1.ListStreamsRequest",
  channelId: "",
  pageSize: 0,
  pageToken: "",
  orderBy: "",
  filter: "",
};

export const ListStreamsRequest = {
  $type: "yandex.cloud.video.v1.ListStreamsRequest" as const,

  encode(
    message: ListStreamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(800).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(810).string(message.pageToken);
    }
    if (message.orderBy !== "") {
      writer.uint32(818).string(message.orderBy);
    }
    if (message.filter !== "") {
      writer.uint32(826).string(message.filter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListStreamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListStreamsRequest } as ListStreamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 100:
          message.pageSize = longToNumber(reader.int64() as Long);
          break;
        case 101:
          message.pageToken = reader.string();
          break;
        case 102:
          message.orderBy = reader.string();
          break;
        case 103:
          message.filter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListStreamsRequest {
    const message = { ...baseListStreamsRequest } as ListStreamsRequest;
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    message.orderBy =
      object.orderBy !== undefined && object.orderBy !== null
        ? String(object.orderBy)
        : "";
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? String(object.filter)
        : "";
    return message;
  },

  toJSON(message: ListStreamsRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.orderBy !== undefined && (obj.orderBy = message.orderBy);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListStreamsRequest>, I>>(
    object: I
  ): ListStreamsRequest {
    const message = { ...baseListStreamsRequest } as ListStreamsRequest;
    message.channelId = object.channelId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.orderBy = object.orderBy ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListStreamsRequest.$type, ListStreamsRequest);

const baseListStreamsResponse: object = {
  $type: "yandex.cloud.video.v1.ListStreamsResponse",
  nextPageToken: "",
};

export const ListStreamsResponse = {
  $type: "yandex.cloud.video.v1.ListStreamsResponse" as const,

  encode(
    message: ListStreamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.streams) {
      Stream.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(802).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListStreamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListStreamsResponse } as ListStreamsResponse;
    message.streams = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streams.push(Stream.decode(reader, reader.uint32()));
          break;
        case 100:
          message.nextPageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListStreamsResponse {
    const message = { ...baseListStreamsResponse } as ListStreamsResponse;
    message.streams = (object.streams ?? []).map((e: any) =>
      Stream.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListStreamsResponse): unknown {
    const obj: any = {};
    if (message.streams) {
      obj.streams = message.streams.map((e) =>
        e ? Stream.toJSON(e) : undefined
      );
    } else {
      obj.streams = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListStreamsResponse>, I>>(
    object: I
  ): ListStreamsResponse {
    const message = { ...baseListStreamsResponse } as ListStreamsResponse;
    message.streams = object.streams?.map((e) => Stream.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListStreamsResponse.$type, ListStreamsResponse);

const baseCreateStreamRequest: object = {
  $type: "yandex.cloud.video.v1.CreateStreamRequest",
  channelId: "",
  lineId: "",
  title: "",
  description: "",
  thumbnailId: "",
};

export const CreateStreamRequest = {
  $type: "yandex.cloud.video.v1.CreateStreamRequest" as const,

  encode(
    message: CreateStreamRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.lineId !== "") {
      writer.uint32(18).string(message.lineId);
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
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateStreamRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.video.v1.CreateStreamRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(1602).fork()
      ).ldelim();
    });
    if (message.onDemand !== undefined) {
      OnDemandParams.encode(
        message.onDemand,
        writer.uint32(8002).fork()
      ).ldelim();
    }
    if (message.schedule !== undefined) {
      ScheduleParams.encode(
        message.schedule,
        writer.uint32(8010).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateStreamRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateStreamRequest } as CreateStreamRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.lineId = reader.string();
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
        case 200:
          const entry200 = CreateStreamRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry200.value !== undefined) {
            message.labels[entry200.key] = entry200.value;
          }
          break;
        case 1000:
          message.onDemand = OnDemandParams.decode(reader, reader.uint32());
          break;
        case 1001:
          message.schedule = ScheduleParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateStreamRequest {
    const message = { ...baseCreateStreamRequest } as CreateStreamRequest;
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
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.onDemand =
      object.onDemand !== undefined && object.onDemand !== null
        ? OnDemandParams.fromJSON(object.onDemand)
        : undefined;
    message.schedule =
      object.schedule !== undefined && object.schedule !== null
        ? ScheduleParams.fromJSON(object.schedule)
        : undefined;
    return message;
  },

  toJSON(message: CreateStreamRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.lineId !== undefined && (obj.lineId = message.lineId);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.thumbnailId !== undefined &&
      (obj.thumbnailId = message.thumbnailId);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.onDemand !== undefined &&
      (obj.onDemand = message.onDemand
        ? OnDemandParams.toJSON(message.onDemand)
        : undefined);
    message.schedule !== undefined &&
      (obj.schedule = message.schedule
        ? ScheduleParams.toJSON(message.schedule)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateStreamRequest>, I>>(
    object: I
  ): CreateStreamRequest {
    const message = { ...baseCreateStreamRequest } as CreateStreamRequest;
    message.channelId = object.channelId ?? "";
    message.lineId = object.lineId ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.thumbnailId = object.thumbnailId ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.onDemand =
      object.onDemand !== undefined && object.onDemand !== null
        ? OnDemandParams.fromPartial(object.onDemand)
        : undefined;
    message.schedule =
      object.schedule !== undefined && object.schedule !== null
        ? ScheduleParams.fromPartial(object.schedule)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateStreamRequest.$type, CreateStreamRequest);

const baseCreateStreamRequest_LabelsEntry: object = {
  $type: "yandex.cloud.video.v1.CreateStreamRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateStreamRequest_LabelsEntry = {
  $type: "yandex.cloud.video.v1.CreateStreamRequest.LabelsEntry" as const,

  encode(
    message: CreateStreamRequest_LabelsEntry,
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
  ): CreateStreamRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateStreamRequest_LabelsEntry,
    } as CreateStreamRequest_LabelsEntry;
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

  fromJSON(object: any): CreateStreamRequest_LabelsEntry {
    const message = {
      ...baseCreateStreamRequest_LabelsEntry,
    } as CreateStreamRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateStreamRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateStreamRequest_LabelsEntry>, I>>(
    object: I
  ): CreateStreamRequest_LabelsEntry {
    const message = {
      ...baseCreateStreamRequest_LabelsEntry,
    } as CreateStreamRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateStreamRequest_LabelsEntry.$type,
  CreateStreamRequest_LabelsEntry
);

const baseOnDemandParams: object = {
  $type: "yandex.cloud.video.v1.OnDemandParams",
};

export const OnDemandParams = {
  $type: "yandex.cloud.video.v1.OnDemandParams" as const,

  encode(
    _: OnDemandParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OnDemandParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOnDemandParams } as OnDemandParams;
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

  fromJSON(_: any): OnDemandParams {
    const message = { ...baseOnDemandParams } as OnDemandParams;
    return message;
  },

  toJSON(_: OnDemandParams): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OnDemandParams>, I>>(
    _: I
  ): OnDemandParams {
    const message = { ...baseOnDemandParams } as OnDemandParams;
    return message;
  },
};

messageTypeRegistry.set(OnDemandParams.$type, OnDemandParams);

const baseScheduleParams: object = {
  $type: "yandex.cloud.video.v1.ScheduleParams",
};

export const ScheduleParams = {
  $type: "yandex.cloud.video.v1.ScheduleParams" as const,

  encode(
    message: ScheduleParams,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ScheduleParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseScheduleParams } as ScheduleParams;
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

  fromJSON(object: any): ScheduleParams {
    const message = { ...baseScheduleParams } as ScheduleParams;
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

  toJSON(message: ScheduleParams): unknown {
    const obj: any = {};
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.finishTime !== undefined &&
      (obj.finishTime = message.finishTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScheduleParams>, I>>(
    object: I
  ): ScheduleParams {
    const message = { ...baseScheduleParams } as ScheduleParams;
    message.startTime = object.startTime ?? undefined;
    message.finishTime = object.finishTime ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ScheduleParams.$type, ScheduleParams);

const baseCreateStreamMetadata: object = {
  $type: "yandex.cloud.video.v1.CreateStreamMetadata",
  streamId: "",
};

export const CreateStreamMetadata = {
  $type: "yandex.cloud.video.v1.CreateStreamMetadata" as const,

  encode(
    message: CreateStreamMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.streamId !== "") {
      writer.uint32(10).string(message.streamId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateStreamMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateStreamMetadata } as CreateStreamMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateStreamMetadata {
    const message = { ...baseCreateStreamMetadata } as CreateStreamMetadata;
    message.streamId =
      object.streamId !== undefined && object.streamId !== null
        ? String(object.streamId)
        : "";
    return message;
  },

  toJSON(message: CreateStreamMetadata): unknown {
    const obj: any = {};
    message.streamId !== undefined && (obj.streamId = message.streamId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateStreamMetadata>, I>>(
    object: I
  ): CreateStreamMetadata {
    const message = { ...baseCreateStreamMetadata } as CreateStreamMetadata;
    message.streamId = object.streamId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateStreamMetadata.$type, CreateStreamMetadata);

const baseUpdateStreamRequest: object = {
  $type: "yandex.cloud.video.v1.UpdateStreamRequest",
  streamId: "",
  lineId: "",
  title: "",
  description: "",
  thumbnailId: "",
};

export const UpdateStreamRequest = {
  $type: "yandex.cloud.video.v1.UpdateStreamRequest" as const,

  encode(
    message: UpdateStreamRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.streamId !== "") {
      writer.uint32(10).string(message.streamId);
    }
    if (message.fieldMask !== undefined) {
      FieldMask.encode(message.fieldMask, writer.uint32(18).fork()).ldelim();
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
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateStreamRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.video.v1.UpdateStreamRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(1602).fork()
      ).ldelim();
    });
    if (message.onDemand !== undefined) {
      OnDemandParams.encode(
        message.onDemand,
        writer.uint32(8002).fork()
      ).ldelim();
    }
    if (message.schedule !== undefined) {
      ScheduleParams.encode(
        message.schedule,
        writer.uint32(8010).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateStreamRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateStreamRequest } as UpdateStreamRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamId = reader.string();
          break;
        case 2:
          message.fieldMask = FieldMask.decode(reader, reader.uint32());
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
        case 200:
          const entry200 = UpdateStreamRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry200.value !== undefined) {
            message.labels[entry200.key] = entry200.value;
          }
          break;
        case 1000:
          message.onDemand = OnDemandParams.decode(reader, reader.uint32());
          break;
        case 1001:
          message.schedule = ScheduleParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateStreamRequest {
    const message = { ...baseUpdateStreamRequest } as UpdateStreamRequest;
    message.streamId =
      object.streamId !== undefined && object.streamId !== null
        ? String(object.streamId)
        : "";
    message.fieldMask =
      object.fieldMask !== undefined && object.fieldMask !== null
        ? FieldMask.fromJSON(object.fieldMask)
        : undefined;
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
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.onDemand =
      object.onDemand !== undefined && object.onDemand !== null
        ? OnDemandParams.fromJSON(object.onDemand)
        : undefined;
    message.schedule =
      object.schedule !== undefined && object.schedule !== null
        ? ScheduleParams.fromJSON(object.schedule)
        : undefined;
    return message;
  },

  toJSON(message: UpdateStreamRequest): unknown {
    const obj: any = {};
    message.streamId !== undefined && (obj.streamId = message.streamId);
    message.fieldMask !== undefined &&
      (obj.fieldMask = message.fieldMask
        ? FieldMask.toJSON(message.fieldMask)
        : undefined);
    message.lineId !== undefined && (obj.lineId = message.lineId);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.thumbnailId !== undefined &&
      (obj.thumbnailId = message.thumbnailId);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.onDemand !== undefined &&
      (obj.onDemand = message.onDemand
        ? OnDemandParams.toJSON(message.onDemand)
        : undefined);
    message.schedule !== undefined &&
      (obj.schedule = message.schedule
        ? ScheduleParams.toJSON(message.schedule)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateStreamRequest>, I>>(
    object: I
  ): UpdateStreamRequest {
    const message = { ...baseUpdateStreamRequest } as UpdateStreamRequest;
    message.streamId = object.streamId ?? "";
    message.fieldMask =
      object.fieldMask !== undefined && object.fieldMask !== null
        ? FieldMask.fromPartial(object.fieldMask)
        : undefined;
    message.lineId = object.lineId ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.thumbnailId = object.thumbnailId ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.onDemand =
      object.onDemand !== undefined && object.onDemand !== null
        ? OnDemandParams.fromPartial(object.onDemand)
        : undefined;
    message.schedule =
      object.schedule !== undefined && object.schedule !== null
        ? ScheduleParams.fromPartial(object.schedule)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateStreamRequest.$type, UpdateStreamRequest);

const baseUpdateStreamRequest_LabelsEntry: object = {
  $type: "yandex.cloud.video.v1.UpdateStreamRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateStreamRequest_LabelsEntry = {
  $type: "yandex.cloud.video.v1.UpdateStreamRequest.LabelsEntry" as const,

  encode(
    message: UpdateStreamRequest_LabelsEntry,
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
  ): UpdateStreamRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateStreamRequest_LabelsEntry,
    } as UpdateStreamRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateStreamRequest_LabelsEntry {
    const message = {
      ...baseUpdateStreamRequest_LabelsEntry,
    } as UpdateStreamRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateStreamRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateStreamRequest_LabelsEntry>, I>>(
    object: I
  ): UpdateStreamRequest_LabelsEntry {
    const message = {
      ...baseUpdateStreamRequest_LabelsEntry,
    } as UpdateStreamRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateStreamRequest_LabelsEntry.$type,
  UpdateStreamRequest_LabelsEntry
);

const baseUpdateStreamMetadata: object = {
  $type: "yandex.cloud.video.v1.UpdateStreamMetadata",
  streamId: "",
};

export const UpdateStreamMetadata = {
  $type: "yandex.cloud.video.v1.UpdateStreamMetadata" as const,

  encode(
    message: UpdateStreamMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.streamId !== "") {
      writer.uint32(10).string(message.streamId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateStreamMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateStreamMetadata } as UpdateStreamMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateStreamMetadata {
    const message = { ...baseUpdateStreamMetadata } as UpdateStreamMetadata;
    message.streamId =
      object.streamId !== undefined && object.streamId !== null
        ? String(object.streamId)
        : "";
    return message;
  },

  toJSON(message: UpdateStreamMetadata): unknown {
    const obj: any = {};
    message.streamId !== undefined && (obj.streamId = message.streamId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateStreamMetadata>, I>>(
    object: I
  ): UpdateStreamMetadata {
    const message = { ...baseUpdateStreamMetadata } as UpdateStreamMetadata;
    message.streamId = object.streamId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateStreamMetadata.$type, UpdateStreamMetadata);

const baseDeleteStreamRequest: object = {
  $type: "yandex.cloud.video.v1.DeleteStreamRequest",
  streamId: "",
};

export const DeleteStreamRequest = {
  $type: "yandex.cloud.video.v1.DeleteStreamRequest" as const,

  encode(
    message: DeleteStreamRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.streamId !== "") {
      writer.uint32(10).string(message.streamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteStreamRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteStreamRequest } as DeleteStreamRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteStreamRequest {
    const message = { ...baseDeleteStreamRequest } as DeleteStreamRequest;
    message.streamId =
      object.streamId !== undefined && object.streamId !== null
        ? String(object.streamId)
        : "";
    return message;
  },

  toJSON(message: DeleteStreamRequest): unknown {
    const obj: any = {};
    message.streamId !== undefined && (obj.streamId = message.streamId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteStreamRequest>, I>>(
    object: I
  ): DeleteStreamRequest {
    const message = { ...baseDeleteStreamRequest } as DeleteStreamRequest;
    message.streamId = object.streamId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteStreamRequest.$type, DeleteStreamRequest);

const baseDeleteStreamMetadata: object = {
  $type: "yandex.cloud.video.v1.DeleteStreamMetadata",
  streamId: "",
};

export const DeleteStreamMetadata = {
  $type: "yandex.cloud.video.v1.DeleteStreamMetadata" as const,

  encode(
    message: DeleteStreamMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.streamId !== "") {
      writer.uint32(10).string(message.streamId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteStreamMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteStreamMetadata } as DeleteStreamMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteStreamMetadata {
    const message = { ...baseDeleteStreamMetadata } as DeleteStreamMetadata;
    message.streamId =
      object.streamId !== undefined && object.streamId !== null
        ? String(object.streamId)
        : "";
    return message;
  },

  toJSON(message: DeleteStreamMetadata): unknown {
    const obj: any = {};
    message.streamId !== undefined && (obj.streamId = message.streamId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteStreamMetadata>, I>>(
    object: I
  ): DeleteStreamMetadata {
    const message = { ...baseDeleteStreamMetadata } as DeleteStreamMetadata;
    message.streamId = object.streamId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteStreamMetadata.$type, DeleteStreamMetadata);

const basePerformStreamActionRequest: object = {
  $type: "yandex.cloud.video.v1.PerformStreamActionRequest",
  streamId: "",
};

export const PerformStreamActionRequest = {
  $type: "yandex.cloud.video.v1.PerformStreamActionRequest" as const,

  encode(
    message: PerformStreamActionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.streamId !== "") {
      writer.uint32(10).string(message.streamId);
    }
    if (message.publish !== undefined) {
      PublishAction.encode(
        message.publish,
        writer.uint32(8002).fork()
      ).ldelim();
    }
    if (message.stop !== undefined) {
      StopAction.encode(message.stop, writer.uint32(8018).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PerformStreamActionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePerformStreamActionRequest,
    } as PerformStreamActionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamId = reader.string();
          break;
        case 1000:
          message.publish = PublishAction.decode(reader, reader.uint32());
          break;
        case 1002:
          message.stop = StopAction.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PerformStreamActionRequest {
    const message = {
      ...basePerformStreamActionRequest,
    } as PerformStreamActionRequest;
    message.streamId =
      object.streamId !== undefined && object.streamId !== null
        ? String(object.streamId)
        : "";
    message.publish =
      object.publish !== undefined && object.publish !== null
        ? PublishAction.fromJSON(object.publish)
        : undefined;
    message.stop =
      object.stop !== undefined && object.stop !== null
        ? StopAction.fromJSON(object.stop)
        : undefined;
    return message;
  },

  toJSON(message: PerformStreamActionRequest): unknown {
    const obj: any = {};
    message.streamId !== undefined && (obj.streamId = message.streamId);
    message.publish !== undefined &&
      (obj.publish = message.publish
        ? PublishAction.toJSON(message.publish)
        : undefined);
    message.stop !== undefined &&
      (obj.stop = message.stop ? StopAction.toJSON(message.stop) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PerformStreamActionRequest>, I>>(
    object: I
  ): PerformStreamActionRequest {
    const message = {
      ...basePerformStreamActionRequest,
    } as PerformStreamActionRequest;
    message.streamId = object.streamId ?? "";
    message.publish =
      object.publish !== undefined && object.publish !== null
        ? PublishAction.fromPartial(object.publish)
        : undefined;
    message.stop =
      object.stop !== undefined && object.stop !== null
        ? StopAction.fromPartial(object.stop)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  PerformStreamActionRequest.$type,
  PerformStreamActionRequest
);

const basePublishAction: object = {
  $type: "yandex.cloud.video.v1.PublishAction",
};

export const PublishAction = {
  $type: "yandex.cloud.video.v1.PublishAction" as const,

  encode(
    _: PublishAction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePublishAction } as PublishAction;
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

  fromJSON(_: any): PublishAction {
    const message = { ...basePublishAction } as PublishAction;
    return message;
  },

  toJSON(_: PublishAction): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PublishAction>, I>>(
    _: I
  ): PublishAction {
    const message = { ...basePublishAction } as PublishAction;
    return message;
  },
};

messageTypeRegistry.set(PublishAction.$type, PublishAction);

const baseStopAction: object = { $type: "yandex.cloud.video.v1.StopAction" };

export const StopAction = {
  $type: "yandex.cloud.video.v1.StopAction" as const,

  encode(_: StopAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStopAction } as StopAction;
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

  fromJSON(_: any): StopAction {
    const message = { ...baseStopAction } as StopAction;
    return message;
  },

  toJSON(_: StopAction): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StopAction>, I>>(_: I): StopAction {
    const message = { ...baseStopAction } as StopAction;
    return message;
  },
};

messageTypeRegistry.set(StopAction.$type, StopAction);

const basePerformStreamActionMetadata: object = {
  $type: "yandex.cloud.video.v1.PerformStreamActionMetadata",
  streamId: "",
};

export const PerformStreamActionMetadata = {
  $type: "yandex.cloud.video.v1.PerformStreamActionMetadata" as const,

  encode(
    message: PerformStreamActionMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.streamId !== "") {
      writer.uint32(10).string(message.streamId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PerformStreamActionMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePerformStreamActionMetadata,
    } as PerformStreamActionMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PerformStreamActionMetadata {
    const message = {
      ...basePerformStreamActionMetadata,
    } as PerformStreamActionMetadata;
    message.streamId =
      object.streamId !== undefined && object.streamId !== null
        ? String(object.streamId)
        : "";
    return message;
  },

  toJSON(message: PerformStreamActionMetadata): unknown {
    const obj: any = {};
    message.streamId !== undefined && (obj.streamId = message.streamId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PerformStreamActionMetadata>, I>>(
    object: I
  ): PerformStreamActionMetadata {
    const message = {
      ...basePerformStreamActionMetadata,
    } as PerformStreamActionMetadata;
    message.streamId = object.streamId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  PerformStreamActionMetadata.$type,
  PerformStreamActionMetadata
);

/** Stream management service. */
export const StreamServiceService = {
  /** Returns the specific stream. */
  get: {
    path: "/yandex.cloud.video.v1.StreamService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetStreamRequest) =>
      Buffer.from(GetStreamRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetStreamRequest.decode(value),
    responseSerialize: (value: Stream) =>
      Buffer.from(Stream.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Stream.decode(value),
  },
  /** List streams for channel. */
  list: {
    path: "/yandex.cloud.video.v1.StreamService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListStreamsRequest) =>
      Buffer.from(ListStreamsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListStreamsRequest.decode(value),
    responseSerialize: (value: ListStreamsResponse) =>
      Buffer.from(ListStreamsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListStreamsResponse.decode(value),
  },
  /** Create stream. */
  create: {
    path: "/yandex.cloud.video.v1.StreamService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateStreamRequest) =>
      Buffer.from(CreateStreamRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateStreamRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Update stream. */
  update: {
    path: "/yandex.cloud.video.v1.StreamService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateStreamRequest) =>
      Buffer.from(UpdateStreamRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateStreamRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Delete stream. */
  delete: {
    path: "/yandex.cloud.video.v1.StreamService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteStreamRequest) =>
      Buffer.from(DeleteStreamRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteStreamRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Perform an action on the episode. */
  performAction: {
    path: "/yandex.cloud.video.v1.StreamService/PerformAction",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PerformStreamActionRequest) =>
      Buffer.from(PerformStreamActionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      PerformStreamActionRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface StreamServiceServer extends UntypedServiceImplementation {
  /** Returns the specific stream. */
  get: handleUnaryCall<GetStreamRequest, Stream>;
  /** List streams for channel. */
  list: handleUnaryCall<ListStreamsRequest, ListStreamsResponse>;
  /** Create stream. */
  create: handleUnaryCall<CreateStreamRequest, Operation>;
  /** Update stream. */
  update: handleUnaryCall<UpdateStreamRequest, Operation>;
  /** Delete stream. */
  delete: handleUnaryCall<DeleteStreamRequest, Operation>;
  /** Perform an action on the episode. */
  performAction: handleUnaryCall<PerformStreamActionRequest, Operation>;
}

export interface StreamServiceClient extends Client {
  /** Returns the specific stream. */
  get(
    request: GetStreamRequest,
    callback: (error: ServiceError | null, response: Stream) => void
  ): ClientUnaryCall;
  get(
    request: GetStreamRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Stream) => void
  ): ClientUnaryCall;
  get(
    request: GetStreamRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Stream) => void
  ): ClientUnaryCall;
  /** List streams for channel. */
  list(
    request: ListStreamsRequest,
    callback: (
      error: ServiceError | null,
      response: ListStreamsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListStreamsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListStreamsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListStreamsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListStreamsResponse
    ) => void
  ): ClientUnaryCall;
  /** Create stream. */
  create(
    request: CreateStreamRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateStreamRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateStreamRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Update stream. */
  update(
    request: UpdateStreamRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateStreamRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateStreamRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Delete stream. */
  delete(
    request: DeleteStreamRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteStreamRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteStreamRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Perform an action on the episode. */
  performAction(
    request: PerformStreamActionRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  performAction(
    request: PerformStreamActionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  performAction(
    request: PerformStreamActionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const StreamServiceClient = makeGenericClientConstructor(
  StreamServiceService,
  "yandex.cloud.video.v1.StreamService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): StreamServiceClient;
  service: typeof StreamServiceService;
};

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
