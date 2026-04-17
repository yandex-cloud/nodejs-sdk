/* eslint-disable */
import Long from 'long';
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
} from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { Stream } from './stream';
import { Operation } from '../../operation/operation';
import { BoolValue } from '../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.video.v1';

export interface GetStreamRequest {
    /** ID of the stream to retrieve. */
    streamId: string;
}

export interface ListStreamsRequest {
    /** ID of the channel containing the streams to list. */
    channelId: string;
    /** The maximum number of streams to return per page. */
    pageSize: number;
    /**
     * Page token for retrieving the next page of results.
     * This token is obtained from the next_page_token field in the previous ListStreamsResponse.
     */
    pageToken: string;
    /**
     * Specifies the ordering of results.
     * Format is "<field> <order>" (e.g., "startTime desc").
     * Default: "id asc".
     * Supported fields: ["id", "title", "startTime", "finishTime", "createdAt", "updatedAt"].
     * Both snake_case and camelCase field names are supported.
     */
    orderBy: string;
    /**
     * Filter expression to narrow down the list of returned streams.
     * Expressions consist of terms connected by logical operators.
     * Values containing spaces or quotes must be enclosed in quotes (`'` or `"`)
     * with inner quotes being backslash-escaped.
     * Supported logical operators: ["AND", "OR"].
     * Supported comparison operators: ["=", "!=", ":"] where ":" enables substring matching.
     * Parentheses can be used to group logical expressions.
     * Example: `title:'live' AND (status='READY' OR status='ONAIR')`
     * Filterable fields: ["id", "title", "lineId", "status"].
     * Both snake_case and camelCase field names are supported.
     */
    filter: string;
}

export interface ListStreamsResponse {
    /**
     * List of streams matching the request criteria.
     * May be empty if no streams match the criteria or if the channel has no streams.
     */
    streams: Stream[];
    /**
     * Token for retrieving the next page of results.
     * Empty if there are no more results available.
     */
    nextPageToken: string;
}

export interface BatchGetStreamsRequest {
    /** ID of the channel containing the streams to retrieve. */
    channelId: string;
    /** List of stream IDs to retrieve. */
    streamIds: string[];
}

export interface BatchGetStreamsResponse {
    /** List of streams matching the requested IDs. */
    streams: Stream[];
}

export interface CreateStreamRequest {
    /**
     * On-demand stream that starts immediately when a video signal appears.
     * This type of stream has no predetermined start or end time.
     */
    onDemand?: OnDemandParams | undefined;
    /**
     * Scheduled stream that starts and finishes at specified time.
     * This type of stream has predetermined start and end time.
     */
    schedule?: ScheduleParams | undefined;
    /** ID of the channel where the stream will be created. */
    channelId: string;
    /**
     * ID of the stream line to which this stream will be linked.
     * Stream lines define the technical configuration for streaming.
     */
    lineId: string;
    /** Title of the stream to be displayed in interfaces and players. */
    title: string;
    /**
     * Detailed description of the stream content and context.
     * Optional field that can provide additional information about the stream.
     */
    description: string;
    /** ID of the thumbnail image to be used for the stream. */
    thumbnailId: string;
    /**
     * Controls whether the stream is automatically published when ready.
     * When set to true, the stream's status will automatically change from
     * READY to ONAIR when the streaming infrastructure is prepared,
     * making it available for viewing without manual intervention.
     */
    autoPublish?: boolean;
    /**
     * Custom user-defined labels as `key:value` pairs.
     * Maximum 64 labels per stream.
     * Keys must be lowercase alphanumeric strings with optional hyphens/underscores.
     * Values can contain alphanumeric characters and various symbols.
     */
    labels: { [key: string]: string };
}

export interface CreateStreamRequest_LabelsEntry {
    key: string;
    value: string;
}

/**
 * On-demand streams start automatically when a video signal is detected
 * and must be manually stopped when no longer needed.
 */
export interface OnDemandParams {}

export interface ScheduleParams {
    /**
     * Scheduled time when the stream should automatically start.
     * The streaming infrastructure will be prepared at this time
     * and will begin accepting the video signal.
     */
    startTime?: Date;
    /**
     * Scheduled time when the stream should automatically finish.
     * The streaming infrastructure will be shut down at this time
     * and the stream will be marked as FINISHED.
     */
    finishTime?: Date;
}

export interface CreateStreamMetadata {
    /** ID of the stream being created. */
    streamId: string;
}

export interface UpdateStreamRequest {
    /**
     * On demand stream.
     * It starts immediately when a signal appears.
     */
    onDemand?: OnDemandParams | undefined;
    /**
     * Scheduled stream.
     * It starts and finishes at specified time.
     */
    schedule?: ScheduleParams | undefined;
    /** ID of the stream. */
    streamId: string;
    /**
     * Field mask specifying which fields of the stream should be updated.
     * Only fields specified in this mask will be modified;
     * all other fields will retain their current values.
     * This allows for partial updates.
     */
    fieldMask?: FieldMask;
    /** Stream title. */
    title: string;
    /** Stream description. */
    description: string;
    /** ID of the thumbnail. */
    thumbnailId: string;
    /**
     * Automatically publish stream when ready.
     * Switches status from READY to ONAIR.
     */
    autoPublish?: boolean;
    /**
     * New custom labels for the stream as `key:value` pairs.
     * Maximum 64 labels per stream.
     * If provided, replaces all existing labels.
     */
    labels: { [key: string]: string };
}

export interface UpdateStreamRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateStreamMetadata {
    /** ID of the stream. */
    streamId: string;
}

export interface DeleteStreamRequest {
    /** ID of the stream to delete. */
    streamId: string;
}

export interface DeleteStreamMetadata {
    /**
     * ID of the stream.
     * This identifier can be used to track the stream deletion operation.
     */
    streamId: string;
}

export interface BatchDeleteStreamsRequest {
    /** ID of the channel containing the streams to delete. */
    channelId: string;
    /**
     * List of stream IDs to delete.
     * All streams must exist in the specified channel.
     */
    streamIds: string[];
}

export interface BatchDeleteStreamsMetadata {
    /**
     * List of stream IDs being deleted.
     * This list can be used to track which streams are included
     * in the batch deletion operation.
     */
    streamIds: string[];
}

export interface PerformStreamActionRequest {
    /**
     * Publish the stream, changing its status from READY to ONAIR.
     * This makes the stream available for watching.
     */
    publish?: PublishAction | undefined;
    /**
     * Stop the stream, changing its status to FINISHED.
     * This terminates the streaming session and releases resources.
     */
    stop?: StopAction | undefined;
    /** ID of the stream on which to perform the action. */
    streamId: string;
}

/**
 * Parameters for the publish action.
 * The action changes the stream's status from READY to ONAIR.
 */
export interface PublishAction {}

/**
 * Parameters for the stop action.
 * The action changes the stream's status to FINISHED.
 */
export interface StopAction {}

export interface PerformStreamActionMetadata {
    /**
     * ID of the stream on which the action is being performed.
     * This identifier can be used to track the action operation
     * and to verify that the action is being applied to the correct stream.
     */
    streamId: string;
}

const baseGetStreamRequest: object = { streamId: '' };

export const GetStreamRequest: {
    encode(message: GetStreamRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetStreamRequest;
    fromJSON(object: any): GetStreamRequest;
    toJSON(message: GetStreamRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetStreamRequest>, I>>(object: I): GetStreamRequest;
} = {
    encode(message: GetStreamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.streamId !== '') {
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
                : '';
        return message;
    },

    toJSON(message: GetStreamRequest): unknown {
        const obj: any = {};
        message.streamId !== undefined && (obj.streamId = message.streamId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetStreamRequest>, I>>(object: I): GetStreamRequest {
        const message = { ...baseGetStreamRequest } as GetStreamRequest;
        message.streamId = object.streamId ?? '';
        return message;
    },
};

const baseListStreamsRequest: object = {
    channelId: '',
    pageSize: 0,
    pageToken: '',
    orderBy: '',
    filter: '',
};

export const ListStreamsRequest: {
    encode(message: ListStreamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListStreamsRequest;
    fromJSON(object: any): ListStreamsRequest;
    toJSON(message: ListStreamsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListStreamsRequest>, I>>(object: I): ListStreamsRequest;
} = {
    encode(message: ListStreamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(800).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(810).string(message.pageToken);
        }
        if (message.orderBy !== '') {
            writer.uint32(818).string(message.orderBy);
        }
        if (message.filter !== '') {
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
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        message.orderBy =
            object.orderBy !== undefined && object.orderBy !== null ? String(object.orderBy) : '';
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        return message;
    },

    toJSON(message: ListStreamsRequest): unknown {
        const obj: any = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListStreamsRequest>, I>>(
        object: I,
    ): ListStreamsRequest {
        const message = { ...baseListStreamsRequest } as ListStreamsRequest;
        message.channelId = object.channelId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.orderBy = object.orderBy ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListStreamsResponse: object = { nextPageToken: '' };

export const ListStreamsResponse: {
    encode(message: ListStreamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListStreamsResponse;
    fromJSON(object: any): ListStreamsResponse;
    toJSON(message: ListStreamsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListStreamsResponse>, I>>(object: I): ListStreamsResponse;
} = {
    encode(message: ListStreamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.streams) {
            Stream.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
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
        message.streams = (object.streams ?? []).map((e: any) => Stream.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListStreamsResponse): unknown {
        const obj: any = {};
        if (message.streams) {
            obj.streams = message.streams.map((e) => (e ? Stream.toJSON(e) : undefined));
        } else {
            obj.streams = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListStreamsResponse>, I>>(
        object: I,
    ): ListStreamsResponse {
        const message = { ...baseListStreamsResponse } as ListStreamsResponse;
        message.streams = object.streams?.map((e) => Stream.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseBatchGetStreamsRequest: object = { channelId: '', streamIds: '' };

export const BatchGetStreamsRequest: {
    encode(message: BatchGetStreamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchGetStreamsRequest;
    fromJSON(object: any): BatchGetStreamsRequest;
    toJSON(message: BatchGetStreamsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<BatchGetStreamsRequest>, I>>(object: I): BatchGetStreamsRequest;
} = {
    encode(message: BatchGetStreamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
        }
        for (const v of message.streamIds) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchGetStreamsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchGetStreamsRequest } as BatchGetStreamsRequest;
        message.streamIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.streamIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchGetStreamsRequest {
        const message = { ...baseBatchGetStreamsRequest } as BatchGetStreamsRequest;
        message.channelId =
            object.channelId !== undefined && object.channelId !== null
                ? String(object.channelId)
                : '';
        message.streamIds = (object.streamIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: BatchGetStreamsRequest): unknown {
        const obj: any = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        if (message.streamIds) {
            obj.streamIds = message.streamIds.map((e) => e);
        } else {
            obj.streamIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchGetStreamsRequest>, I>>(
        object: I,
    ): BatchGetStreamsRequest {
        const message = { ...baseBatchGetStreamsRequest } as BatchGetStreamsRequest;
        message.channelId = object.channelId ?? '';
        message.streamIds = object.streamIds?.map((e) => e) || [];
        return message;
    },
};

const baseBatchGetStreamsResponse: object = {};

export const BatchGetStreamsResponse: {
    encode(message: BatchGetStreamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchGetStreamsResponse;
    fromJSON(object: any): BatchGetStreamsResponse;
    toJSON(message: BatchGetStreamsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<BatchGetStreamsResponse>, I>>(object: I): BatchGetStreamsResponse;
} = {
    encode(message: BatchGetStreamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.streams) {
            Stream.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchGetStreamsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchGetStreamsResponse } as BatchGetStreamsResponse;
        message.streams = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.streams.push(Stream.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchGetStreamsResponse {
        const message = { ...baseBatchGetStreamsResponse } as BatchGetStreamsResponse;
        message.streams = (object.streams ?? []).map((e: any) => Stream.fromJSON(e));
        return message;
    },

    toJSON(message: BatchGetStreamsResponse): unknown {
        const obj: any = {};
        if (message.streams) {
            obj.streams = message.streams.map((e) => (e ? Stream.toJSON(e) : undefined));
        } else {
            obj.streams = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchGetStreamsResponse>, I>>(
        object: I,
    ): BatchGetStreamsResponse {
        const message = { ...baseBatchGetStreamsResponse } as BatchGetStreamsResponse;
        message.streams = object.streams?.map((e) => Stream.fromPartial(e)) || [];
        return message;
    },
};

const baseCreateStreamRequest: object = {
    channelId: '',
    lineId: '',
    title: '',
    description: '',
    thumbnailId: '',
};

export const CreateStreamRequest: {
    encode(message: CreateStreamRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateStreamRequest;
    fromJSON(object: any): CreateStreamRequest;
    toJSON(message: CreateStreamRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateStreamRequest>, I>>(object: I): CreateStreamRequest;
} = {
    encode(message: CreateStreamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.onDemand !== undefined) {
            OnDemandParams.encode(message.onDemand, writer.uint32(8002).fork()).ldelim();
        }
        if (message.schedule !== undefined) {
            ScheduleParams.encode(message.schedule, writer.uint32(8010).fork()).ldelim();
        }
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
        }
        if (message.lineId !== '') {
            writer.uint32(18).string(message.lineId);
        }
        if (message.title !== '') {
            writer.uint32(26).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.thumbnailId !== '') {
            writer.uint32(42).string(message.thumbnailId);
        }
        if (message.autoPublish !== undefined) {
            BoolValue.encode({ value: message.autoPublish! }, writer.uint32(50).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateStreamRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
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
                case 1000:
                    message.onDemand = OnDemandParams.decode(reader, reader.uint32());
                    break;
                case 1001:
                    message.schedule = ScheduleParams.decode(reader, reader.uint32());
                    break;
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
                case 6:
                    message.autoPublish = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 200:
                    const entry200 = CreateStreamRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
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

    fromJSON(object: any): CreateStreamRequest {
        const message = { ...baseCreateStreamRequest } as CreateStreamRequest;
        message.onDemand =
            object.onDemand !== undefined && object.onDemand !== null
                ? OnDemandParams.fromJSON(object.onDemand)
                : undefined;
        message.schedule =
            object.schedule !== undefined && object.schedule !== null
                ? ScheduleParams.fromJSON(object.schedule)
                : undefined;
        message.channelId =
            object.channelId !== undefined && object.channelId !== null
                ? String(object.channelId)
                : '';
        message.lineId =
            object.lineId !== undefined && object.lineId !== null ? String(object.lineId) : '';
        message.title =
            object.title !== undefined && object.title !== null ? String(object.title) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.thumbnailId =
            object.thumbnailId !== undefined && object.thumbnailId !== null
                ? String(object.thumbnailId)
                : '';
        message.autoPublish =
            object.autoPublish !== undefined && object.autoPublish !== null
                ? Boolean(object.autoPublish)
                : undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: CreateStreamRequest): unknown {
        const obj: any = {};
        message.onDemand !== undefined &&
            (obj.onDemand = message.onDemand ? OnDemandParams.toJSON(message.onDemand) : undefined);
        message.schedule !== undefined &&
            (obj.schedule = message.schedule ? ScheduleParams.toJSON(message.schedule) : undefined);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.lineId !== undefined && (obj.lineId = message.lineId);
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.thumbnailId !== undefined && (obj.thumbnailId = message.thumbnailId);
        message.autoPublish !== undefined && (obj.autoPublish = message.autoPublish);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateStreamRequest>, I>>(
        object: I,
    ): CreateStreamRequest {
        const message = { ...baseCreateStreamRequest } as CreateStreamRequest;
        message.onDemand =
            object.onDemand !== undefined && object.onDemand !== null
                ? OnDemandParams.fromPartial(object.onDemand)
                : undefined;
        message.schedule =
            object.schedule !== undefined && object.schedule !== null
                ? ScheduleParams.fromPartial(object.schedule)
                : undefined;
        message.channelId = object.channelId ?? '';
        message.lineId = object.lineId ?? '';
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.thumbnailId = object.thumbnailId ?? '';
        message.autoPublish = object.autoPublish ?? undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        return message;
    },
};

const baseCreateStreamRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateStreamRequest_LabelsEntry: {
    encode(message: CreateStreamRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateStreamRequest_LabelsEntry;
    fromJSON(object: any): CreateStreamRequest_LabelsEntry;
    toJSON(message: CreateStreamRequest_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateStreamRequest_LabelsEntry>, I>>(object: I): CreateStreamRequest_LabelsEntry;
} = {
    encode(
        message: CreateStreamRequest_LabelsEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateStreamRequest_LabelsEntry {
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
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateStreamRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateStreamRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateStreamRequest_LabelsEntry {
        const message = {
            ...baseCreateStreamRequest_LabelsEntry,
        } as CreateStreamRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseOnDemandParams: object = {};

export const OnDemandParams: {
    encode(message: OnDemandParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OnDemandParams;
    fromJSON(object: any): OnDemandParams;
    toJSON(message: OnDemandParams): unknown;
    fromPartial<I extends Exact<DeepPartial<OnDemandParams>, I>>(object: I): OnDemandParams;
} = {
    encode(_: OnDemandParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    fromPartial<I extends Exact<DeepPartial<OnDemandParams>, I>>(_: I): OnDemandParams {
        const message = { ...baseOnDemandParams } as OnDemandParams;
        return message;
    },
};

const baseScheduleParams: object = {};

export const ScheduleParams: {
    encode(message: ScheduleParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ScheduleParams;
    fromJSON(object: any): ScheduleParams;
    toJSON(message: ScheduleParams): unknown;
    fromPartial<I extends Exact<DeepPartial<ScheduleParams>, I>>(object: I): ScheduleParams;
} = {
    encode(message: ScheduleParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.startTime !== undefined) {
            Timestamp.encode(toTimestamp(message.startTime), writer.uint32(10).fork()).ldelim();
        }
        if (message.finishTime !== undefined) {
            Timestamp.encode(toTimestamp(message.finishTime), writer.uint32(18).fork()).ldelim();
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
                    message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.finishTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
        message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
        message.finishTime !== undefined && (obj.finishTime = message.finishTime.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ScheduleParams>, I>>(object: I): ScheduleParams {
        const message = { ...baseScheduleParams } as ScheduleParams;
        message.startTime = object.startTime ?? undefined;
        message.finishTime = object.finishTime ?? undefined;
        return message;
    },
};

const baseCreateStreamMetadata: object = { streamId: '' };

export const CreateStreamMetadata: {
    encode(message: CreateStreamMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateStreamMetadata;
    fromJSON(object: any): CreateStreamMetadata;
    toJSON(message: CreateStreamMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateStreamMetadata>, I>>(object: I): CreateStreamMetadata;
} = {
    encode(message: CreateStreamMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.streamId !== '') {
            writer.uint32(10).string(message.streamId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateStreamMetadata {
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
                : '';
        return message;
    },

    toJSON(message: CreateStreamMetadata): unknown {
        const obj: any = {};
        message.streamId !== undefined && (obj.streamId = message.streamId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateStreamMetadata>, I>>(
        object: I,
    ): CreateStreamMetadata {
        const message = { ...baseCreateStreamMetadata } as CreateStreamMetadata;
        message.streamId = object.streamId ?? '';
        return message;
    },
};

const baseUpdateStreamRequest: object = {
    streamId: '',
    title: '',
    description: '',
    thumbnailId: '',
};

export const UpdateStreamRequest: {
    encode(message: UpdateStreamRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateStreamRequest;
    fromJSON(object: any): UpdateStreamRequest;
    toJSON(message: UpdateStreamRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateStreamRequest>, I>>(object: I): UpdateStreamRequest;
} = {
    encode(message: UpdateStreamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.onDemand !== undefined) {
            OnDemandParams.encode(message.onDemand, writer.uint32(8002).fork()).ldelim();
        }
        if (message.schedule !== undefined) {
            ScheduleParams.encode(message.schedule, writer.uint32(8010).fork()).ldelim();
        }
        if (message.streamId !== '') {
            writer.uint32(10).string(message.streamId);
        }
        if (message.fieldMask !== undefined) {
            FieldMask.encode(message.fieldMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.title !== '') {
            writer.uint32(34).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        if (message.thumbnailId !== '') {
            writer.uint32(50).string(message.thumbnailId);
        }
        if (message.autoPublish !== undefined) {
            BoolValue.encode({ value: message.autoPublish! }, writer.uint32(58).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateStreamRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
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
                case 1000:
                    message.onDemand = OnDemandParams.decode(reader, reader.uint32());
                    break;
                case 1001:
                    message.schedule = ScheduleParams.decode(reader, reader.uint32());
                    break;
                case 1:
                    message.streamId = reader.string();
                    break;
                case 2:
                    message.fieldMask = FieldMask.decode(reader, reader.uint32());
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
                case 7:
                    message.autoPublish = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 200:
                    const entry200 = UpdateStreamRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
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

    fromJSON(object: any): UpdateStreamRequest {
        const message = { ...baseUpdateStreamRequest } as UpdateStreamRequest;
        message.onDemand =
            object.onDemand !== undefined && object.onDemand !== null
                ? OnDemandParams.fromJSON(object.onDemand)
                : undefined;
        message.schedule =
            object.schedule !== undefined && object.schedule !== null
                ? ScheduleParams.fromJSON(object.schedule)
                : undefined;
        message.streamId =
            object.streamId !== undefined && object.streamId !== null
                ? String(object.streamId)
                : '';
        message.fieldMask =
            object.fieldMask !== undefined && object.fieldMask !== null
                ? FieldMask.fromJSON(object.fieldMask)
                : undefined;
        message.title =
            object.title !== undefined && object.title !== null ? String(object.title) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.thumbnailId =
            object.thumbnailId !== undefined && object.thumbnailId !== null
                ? String(object.thumbnailId)
                : '';
        message.autoPublish =
            object.autoPublish !== undefined && object.autoPublish !== null
                ? Boolean(object.autoPublish)
                : undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: UpdateStreamRequest): unknown {
        const obj: any = {};
        message.onDemand !== undefined &&
            (obj.onDemand = message.onDemand ? OnDemandParams.toJSON(message.onDemand) : undefined);
        message.schedule !== undefined &&
            (obj.schedule = message.schedule ? ScheduleParams.toJSON(message.schedule) : undefined);
        message.streamId !== undefined && (obj.streamId = message.streamId);
        message.fieldMask !== undefined &&
            (obj.fieldMask = message.fieldMask ? FieldMask.toJSON(message.fieldMask) : undefined);
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.thumbnailId !== undefined && (obj.thumbnailId = message.thumbnailId);
        message.autoPublish !== undefined && (obj.autoPublish = message.autoPublish);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateStreamRequest>, I>>(
        object: I,
    ): UpdateStreamRequest {
        const message = { ...baseUpdateStreamRequest } as UpdateStreamRequest;
        message.onDemand =
            object.onDemand !== undefined && object.onDemand !== null
                ? OnDemandParams.fromPartial(object.onDemand)
                : undefined;
        message.schedule =
            object.schedule !== undefined && object.schedule !== null
                ? ScheduleParams.fromPartial(object.schedule)
                : undefined;
        message.streamId = object.streamId ?? '';
        message.fieldMask =
            object.fieldMask !== undefined && object.fieldMask !== null
                ? FieldMask.fromPartial(object.fieldMask)
                : undefined;
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.thumbnailId = object.thumbnailId ?? '';
        message.autoPublish = object.autoPublish ?? undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        return message;
    },
};

const baseUpdateStreamRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateStreamRequest_LabelsEntry: {
    encode(message: UpdateStreamRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateStreamRequest_LabelsEntry;
    fromJSON(object: any): UpdateStreamRequest_LabelsEntry;
    toJSON(message: UpdateStreamRequest_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateStreamRequest_LabelsEntry>, I>>(object: I): UpdateStreamRequest_LabelsEntry;
} = {
    encode(
        message: UpdateStreamRequest_LabelsEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateStreamRequest_LabelsEntry {
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
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateStreamRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateStreamRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateStreamRequest_LabelsEntry {
        const message = {
            ...baseUpdateStreamRequest_LabelsEntry,
        } as UpdateStreamRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateStreamMetadata: object = { streamId: '' };

export const UpdateStreamMetadata: {
    encode(message: UpdateStreamMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateStreamMetadata;
    fromJSON(object: any): UpdateStreamMetadata;
    toJSON(message: UpdateStreamMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateStreamMetadata>, I>>(object: I): UpdateStreamMetadata;
} = {
    encode(message: UpdateStreamMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.streamId !== '') {
            writer.uint32(10).string(message.streamId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateStreamMetadata {
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
                : '';
        return message;
    },

    toJSON(message: UpdateStreamMetadata): unknown {
        const obj: any = {};
        message.streamId !== undefined && (obj.streamId = message.streamId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateStreamMetadata>, I>>(
        object: I,
    ): UpdateStreamMetadata {
        const message = { ...baseUpdateStreamMetadata } as UpdateStreamMetadata;
        message.streamId = object.streamId ?? '';
        return message;
    },
};

const baseDeleteStreamRequest: object = { streamId: '' };

export const DeleteStreamRequest: {
    encode(message: DeleteStreamRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteStreamRequest;
    fromJSON(object: any): DeleteStreamRequest;
    toJSON(message: DeleteStreamRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteStreamRequest>, I>>(object: I): DeleteStreamRequest;
} = {
    encode(message: DeleteStreamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.streamId !== '') {
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
                : '';
        return message;
    },

    toJSON(message: DeleteStreamRequest): unknown {
        const obj: any = {};
        message.streamId !== undefined && (obj.streamId = message.streamId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteStreamRequest>, I>>(
        object: I,
    ): DeleteStreamRequest {
        const message = { ...baseDeleteStreamRequest } as DeleteStreamRequest;
        message.streamId = object.streamId ?? '';
        return message;
    },
};

const baseDeleteStreamMetadata: object = { streamId: '' };

export const DeleteStreamMetadata: {
    encode(message: DeleteStreamMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteStreamMetadata;
    fromJSON(object: any): DeleteStreamMetadata;
    toJSON(message: DeleteStreamMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteStreamMetadata>, I>>(object: I): DeleteStreamMetadata;
} = {
    encode(message: DeleteStreamMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.streamId !== '') {
            writer.uint32(10).string(message.streamId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteStreamMetadata {
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
                : '';
        return message;
    },

    toJSON(message: DeleteStreamMetadata): unknown {
        const obj: any = {};
        message.streamId !== undefined && (obj.streamId = message.streamId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteStreamMetadata>, I>>(
        object: I,
    ): DeleteStreamMetadata {
        const message = { ...baseDeleteStreamMetadata } as DeleteStreamMetadata;
        message.streamId = object.streamId ?? '';
        return message;
    },
};

const baseBatchDeleteStreamsRequest: object = { channelId: '', streamIds: '' };

export const BatchDeleteStreamsRequest: {
    encode(message: BatchDeleteStreamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchDeleteStreamsRequest;
    fromJSON(object: any): BatchDeleteStreamsRequest;
    toJSON(message: BatchDeleteStreamsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<BatchDeleteStreamsRequest>, I>>(object: I): BatchDeleteStreamsRequest;
} = {
    encode(
        message: BatchDeleteStreamsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
        }
        for (const v of message.streamIds) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchDeleteStreamsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchDeleteStreamsRequest } as BatchDeleteStreamsRequest;
        message.streamIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.streamIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchDeleteStreamsRequest {
        const message = { ...baseBatchDeleteStreamsRequest } as BatchDeleteStreamsRequest;
        message.channelId =
            object.channelId !== undefined && object.channelId !== null
                ? String(object.channelId)
                : '';
        message.streamIds = (object.streamIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: BatchDeleteStreamsRequest): unknown {
        const obj: any = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        if (message.streamIds) {
            obj.streamIds = message.streamIds.map((e) => e);
        } else {
            obj.streamIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchDeleteStreamsRequest>, I>>(
        object: I,
    ): BatchDeleteStreamsRequest {
        const message = { ...baseBatchDeleteStreamsRequest } as BatchDeleteStreamsRequest;
        message.channelId = object.channelId ?? '';
        message.streamIds = object.streamIds?.map((e) => e) || [];
        return message;
    },
};

const baseBatchDeleteStreamsMetadata: object = { streamIds: '' };

export const BatchDeleteStreamsMetadata: {
    encode(message: BatchDeleteStreamsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchDeleteStreamsMetadata;
    fromJSON(object: any): BatchDeleteStreamsMetadata;
    toJSON(message: BatchDeleteStreamsMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<BatchDeleteStreamsMetadata>, I>>(object: I): BatchDeleteStreamsMetadata;
} = {
    encode(
        message: BatchDeleteStreamsMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.streamIds) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchDeleteStreamsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchDeleteStreamsMetadata } as BatchDeleteStreamsMetadata;
        message.streamIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.streamIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchDeleteStreamsMetadata {
        const message = { ...baseBatchDeleteStreamsMetadata } as BatchDeleteStreamsMetadata;
        message.streamIds = (object.streamIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: BatchDeleteStreamsMetadata): unknown {
        const obj: any = {};
        if (message.streamIds) {
            obj.streamIds = message.streamIds.map((e) => e);
        } else {
            obj.streamIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchDeleteStreamsMetadata>, I>>(
        object: I,
    ): BatchDeleteStreamsMetadata {
        const message = { ...baseBatchDeleteStreamsMetadata } as BatchDeleteStreamsMetadata;
        message.streamIds = object.streamIds?.map((e) => e) || [];
        return message;
    },
};

const basePerformStreamActionRequest: object = { streamId: '' };

export const PerformStreamActionRequest: {
    encode(message: PerformStreamActionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PerformStreamActionRequest;
    fromJSON(object: any): PerformStreamActionRequest;
    toJSON(message: PerformStreamActionRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<PerformStreamActionRequest>, I>>(object: I): PerformStreamActionRequest;
} = {
    encode(
        message: PerformStreamActionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.publish !== undefined) {
            PublishAction.encode(message.publish, writer.uint32(8002).fork()).ldelim();
        }
        if (message.stop !== undefined) {
            StopAction.encode(message.stop, writer.uint32(8018).fork()).ldelim();
        }
        if (message.streamId !== '') {
            writer.uint32(10).string(message.streamId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PerformStreamActionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePerformStreamActionRequest } as PerformStreamActionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1000:
                    message.publish = PublishAction.decode(reader, reader.uint32());
                    break;
                case 1002:
                    message.stop = StopAction.decode(reader, reader.uint32());
                    break;
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

    fromJSON(object: any): PerformStreamActionRequest {
        const message = { ...basePerformStreamActionRequest } as PerformStreamActionRequest;
        message.publish =
            object.publish !== undefined && object.publish !== null
                ? PublishAction.fromJSON(object.publish)
                : undefined;
        message.stop =
            object.stop !== undefined && object.stop !== null
                ? StopAction.fromJSON(object.stop)
                : undefined;
        message.streamId =
            object.streamId !== undefined && object.streamId !== null
                ? String(object.streamId)
                : '';
        return message;
    },

    toJSON(message: PerformStreamActionRequest): unknown {
        const obj: any = {};
        message.publish !== undefined &&
            (obj.publish = message.publish ? PublishAction.toJSON(message.publish) : undefined);
        message.stop !== undefined &&
            (obj.stop = message.stop ? StopAction.toJSON(message.stop) : undefined);
        message.streamId !== undefined && (obj.streamId = message.streamId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PerformStreamActionRequest>, I>>(
        object: I,
    ): PerformStreamActionRequest {
        const message = { ...basePerformStreamActionRequest } as PerformStreamActionRequest;
        message.publish =
            object.publish !== undefined && object.publish !== null
                ? PublishAction.fromPartial(object.publish)
                : undefined;
        message.stop =
            object.stop !== undefined && object.stop !== null
                ? StopAction.fromPartial(object.stop)
                : undefined;
        message.streamId = object.streamId ?? '';
        return message;
    },
};

const basePublishAction: object = {};

export const PublishAction: {
    encode(message: PublishAction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublishAction;
    fromJSON(object: any): PublishAction;
    toJSON(message: PublishAction): unknown;
    fromPartial<I extends Exact<DeepPartial<PublishAction>, I>>(object: I): PublishAction;
} = {
    encode(_: PublishAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    fromPartial<I extends Exact<DeepPartial<PublishAction>, I>>(_: I): PublishAction {
        const message = { ...basePublishAction } as PublishAction;
        return message;
    },
};

const baseStopAction: object = {};

export const StopAction: {
    encode(message: StopAction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StopAction;
    fromJSON(object: any): StopAction;
    toJSON(message: StopAction): unknown;
    fromPartial<I extends Exact<DeepPartial<StopAction>, I>>(object: I): StopAction;
} = {
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

const basePerformStreamActionMetadata: object = { streamId: '' };

export const PerformStreamActionMetadata: {
    encode(message: PerformStreamActionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PerformStreamActionMetadata;
    fromJSON(object: any): PerformStreamActionMetadata;
    toJSON(message: PerformStreamActionMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<PerformStreamActionMetadata>, I>>(object: I): PerformStreamActionMetadata;
} = {
    encode(
        message: PerformStreamActionMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.streamId !== '') {
            writer.uint32(10).string(message.streamId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PerformStreamActionMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePerformStreamActionMetadata } as PerformStreamActionMetadata;
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
        const message = { ...basePerformStreamActionMetadata } as PerformStreamActionMetadata;
        message.streamId =
            object.streamId !== undefined && object.streamId !== null
                ? String(object.streamId)
                : '';
        return message;
    },

    toJSON(message: PerformStreamActionMetadata): unknown {
        const obj: any = {};
        message.streamId !== undefined && (obj.streamId = message.streamId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PerformStreamActionMetadata>, I>>(
        object: I,
    ): PerformStreamActionMetadata {
        const message = { ...basePerformStreamActionMetadata } as PerformStreamActionMetadata;
        message.streamId = object.streamId ?? '';
        return message;
    },
};

/**
 * Stream management service.
 * Provides methods for creating, retrieving, updating, and deleting live streams,
 * as well as managing stream-related operations
 * such as publishing, stopping, and generating playback URLs.
 */
export const StreamServiceService = {
    /**
     * Retrieves detailed information about a specific stream by its ID.
     * Returns all stream metadata, status, and related information.
     */
    get: {
        path: '/yandex.cloud.video.v1.StreamService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetStreamRequest) =>
            Buffer.from(GetStreamRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetStreamRequest.decode(value),
        responseSerialize: (value: Stream) => Buffer.from(Stream.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Stream.decode(value),
    },
    /**
     * Lists all streams in a specific channel with pagination support.
     * Results can be filtered and sorted using the provided parameters.
     */
    list: {
        path: '/yandex.cloud.video.v1.StreamService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListStreamsRequest) =>
            Buffer.from(ListStreamsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListStreamsRequest.decode(value),
        responseSerialize: (value: ListStreamsResponse) =>
            Buffer.from(ListStreamsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListStreamsResponse.decode(value),
    },
    /**
     * Retrieves multiple streams by their IDs in a specific channel in a single request.
     * This is more efficient than making multiple Get requests when retrieving several streams.
     */
    batchGet: {
        path: '/yandex.cloud.video.v1.StreamService/BatchGet',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: BatchGetStreamsRequest) =>
            Buffer.from(BatchGetStreamsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => BatchGetStreamsRequest.decode(value),
        responseSerialize: (value: BatchGetStreamsResponse) =>
            Buffer.from(BatchGetStreamsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => BatchGetStreamsResponse.decode(value),
    },
    /**
     * Creates a new stream in the specified channel.
     * Streams can be created as on-demand (starting when a signal appears)
     * or scheduled (starting and finishing at specified time).
     */
    create: {
        path: '/yandex.cloud.video.v1.StreamService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateStreamRequest) =>
            Buffer.from(CreateStreamRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateStreamRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Updates an existing stream's metadata and settings.
     * Only fields specified in the field_mask will be updated.
     */
    update: {
        path: '/yandex.cloud.video.v1.StreamService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateStreamRequest) =>
            Buffer.from(UpdateStreamRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateStreamRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes a specific stream by its ID. */
    delete: {
        path: '/yandex.cloud.video.v1.StreamService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteStreamRequest) =>
            Buffer.from(DeleteStreamRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteStreamRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Deletes multiple streams in a specific channel in a single request.
     * This is more efficient than making multiple Delete requests when removing several streams.
     */
    batchDelete: {
        path: '/yandex.cloud.video.v1.StreamService/BatchDelete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: BatchDeleteStreamsRequest) =>
            Buffer.from(BatchDeleteStreamsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => BatchDeleteStreamsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Performs a specific action on a stream, such as publishing or stopping.
     * Actions change the stream's state without modifying its content or metadata.
     */
    performAction: {
        path: '/yandex.cloud.video.v1.StreamService/PerformAction',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: PerformStreamActionRequest) =>
            Buffer.from(PerformStreamActionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => PerformStreamActionRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface StreamServiceServer extends UntypedServiceImplementation {
    /**
     * Retrieves detailed information about a specific stream by its ID.
     * Returns all stream metadata, status, and related information.
     */
    get: handleUnaryCall<GetStreamRequest, Stream>;
    /**
     * Lists all streams in a specific channel with pagination support.
     * Results can be filtered and sorted using the provided parameters.
     */
    list: handleUnaryCall<ListStreamsRequest, ListStreamsResponse>;
    /**
     * Retrieves multiple streams by their IDs in a specific channel in a single request.
     * This is more efficient than making multiple Get requests when retrieving several streams.
     */
    batchGet: handleUnaryCall<BatchGetStreamsRequest, BatchGetStreamsResponse>;
    /**
     * Creates a new stream in the specified channel.
     * Streams can be created as on-demand (starting when a signal appears)
     * or scheduled (starting and finishing at specified time).
     */
    create: handleUnaryCall<CreateStreamRequest, Operation>;
    /**
     * Updates an existing stream's metadata and settings.
     * Only fields specified in the field_mask will be updated.
     */
    update: handleUnaryCall<UpdateStreamRequest, Operation>;
    /** Deletes a specific stream by its ID. */
    delete: handleUnaryCall<DeleteStreamRequest, Operation>;
    /**
     * Deletes multiple streams in a specific channel in a single request.
     * This is more efficient than making multiple Delete requests when removing several streams.
     */
    batchDelete: handleUnaryCall<BatchDeleteStreamsRequest, Operation>;
    /**
     * Performs a specific action on a stream, such as publishing or stopping.
     * Actions change the stream's state without modifying its content or metadata.
     */
    performAction: handleUnaryCall<PerformStreamActionRequest, Operation>;
}

export interface StreamServiceClient extends Client {
    /**
     * Retrieves detailed information about a specific stream by its ID.
     * Returns all stream metadata, status, and related information.
     */
    get(
        request: GetStreamRequest,
        callback: (error: ServiceError | null, response: Stream) => void,
    ): ClientUnaryCall;
    get(
        request: GetStreamRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Stream) => void,
    ): ClientUnaryCall;
    get(
        request: GetStreamRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Stream) => void,
    ): ClientUnaryCall;
    /**
     * Lists all streams in a specific channel with pagination support.
     * Results can be filtered and sorted using the provided parameters.
     */
    list(
        request: ListStreamsRequest,
        callback: (error: ServiceError | null, response: ListStreamsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListStreamsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListStreamsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListStreamsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListStreamsResponse) => void,
    ): ClientUnaryCall;
    /**
     * Retrieves multiple streams by their IDs in a specific channel in a single request.
     * This is more efficient than making multiple Get requests when retrieving several streams.
     */
    batchGet(
        request: BatchGetStreamsRequest,
        callback: (error: ServiceError | null, response: BatchGetStreamsResponse) => void,
    ): ClientUnaryCall;
    batchGet(
        request: BatchGetStreamsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: BatchGetStreamsResponse) => void,
    ): ClientUnaryCall;
    batchGet(
        request: BatchGetStreamsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: BatchGetStreamsResponse) => void,
    ): ClientUnaryCall;
    /**
     * Creates a new stream in the specified channel.
     * Streams can be created as on-demand (starting when a signal appears)
     * or scheduled (starting and finishing at specified time).
     */
    create(
        request: CreateStreamRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateStreamRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateStreamRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Updates an existing stream's metadata and settings.
     * Only fields specified in the field_mask will be updated.
     */
    update(
        request: UpdateStreamRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateStreamRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateStreamRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes a specific stream by its ID. */
    delete(
        request: DeleteStreamRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteStreamRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteStreamRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Deletes multiple streams in a specific channel in a single request.
     * This is more efficient than making multiple Delete requests when removing several streams.
     */
    batchDelete(
        request: BatchDeleteStreamsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    batchDelete(
        request: BatchDeleteStreamsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    batchDelete(
        request: BatchDeleteStreamsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Performs a specific action on a stream, such as publishing or stopping.
     * Actions change the stream's state without modifying its content or metadata.
     */
    performAction(
        request: PerformStreamActionRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    performAction(
        request: PerformStreamActionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    performAction(
        request: PerformStreamActionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const StreamServiceClient = makeGenericClientConstructor(
    StreamServiceService,
    'yandex.cloud.video.v1.StreamService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): StreamServiceClient;
    service: typeof StreamServiceService;
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
