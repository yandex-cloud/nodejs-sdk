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
import { StreamLine, PushStreamKey } from './stream_line';
import { Operation } from '../../operation/operation';

export const protobufPackage = 'yandex.cloud.video.v1';

export interface GetStreamLineRequest {
    /** ID of the stream line to retrieve. */
    streamLineId: string;
}

export interface ListStreamLinesRequest {
    /** ID of the channel containing the stream lines to list. */
    channelId: string;
    /** The maximum number of stream lines to return per page. */
    pageSize: number;
    /**
     * Page token for retrieving the next page of results.
     * This token is obtained from the next_page_token field in the previous ListStreamLinesResponse.
     */
    pageToken: string;
    /**
     * Specifies the ordering of results.
     * Format is "<field> <order>" (e.g., "createdAt desc").
     * Default: "id asc".
     * Supported fields: ["id", "title", "createdAt", "updatedAt"].
     * Both snake_case and camelCase field names are supported.
     */
    orderBy: string;
    /**
     * Filter expression to narrow down the list of returned stream lines.
     * Expressions consist of terms connected by logical operators.
     * Values containing spaces or quotes must be enclosed in quotes (`'` or `"`)
     * with inner quotes being backslash-escaped.
     * Supported logical operators: ["AND", "OR"].
     * Supported comparison operators: ["=", "!=", ":"] where ":" enables substring matching.
     * Parentheses can be used to group logical expressions.
     * Example: `title:'main' AND id='line-1'`
     * Filterable fields: ["id", "title"].
     * Both snake_case and camelCase field names are supported.
     */
    filter: string;
}

export interface ListStreamLinesResponse {
    /**
     * List of stream lines matching the request criteria.
     * May be empty if no stream lines match the criteria or if the channel has no stream lines.
     */
    streamLines: StreamLine[];
    /**
     * Token for retrieving the next page of results.
     * Empty if there are no more results available.
     */
    nextPageToken: string;
}

export interface BatchGetStreamLinesRequest {
    /** ID of the channel containing the stream lines to retrieve. */
    channelId: string;
    /** List of stream line IDs to retrieve. */
    streamLineIds: string[];
}

export interface BatchGetStreamLinesResponse {
    /** List of stream lines matching the requested IDs. */
    streamLines: StreamLine[];
}

export interface CreateStreamLineRequest {
    /** RTMP push input type. */
    rtmpPush?: RTMPPushParams | undefined;
    /** RTMP pull input type. */
    rtmpPull?: RTMPPullParams | undefined;
    /** SRT pull input type. */
    srtPull?: SRTPullParams | undefined;
    /** Manual stream control. */
    manualLine?: ManualLineParams | undefined;
    /** Automatic stream control. */
    autoLine?: AutoLineParams | undefined;
    /** ID of the channel. */
    channelId: string;
    /** Line title. */
    title: string;
    /**
     * Custom user-defined labels as key:value pairs.
     * Maximum 64 labels per stream line.
     * Keys must be lowercase alphanumeric strings with optional hyphens/underscores.
     * Values can contain alphanumeric characters and various symbols.
     */
    labels: { [key: string]: string };
}

export interface CreateStreamLineRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateStreamLineMetadata {
    /** ID of the stream line. */
    streamLineId: string;
}

export interface UpdateStreamLineRequest {
    /** RTMP push input type. */
    rtmpPush?: RTMPPushParams | undefined;
    /** RTMP pull input type. */
    rtmpPull?: RTMPPullParams | undefined;
    /** SRT pull input type. */
    srtPull?: SRTPullParams | undefined;
    /** ID of the line. */
    streamLineId: string;
    /**
     * Field mask specifying which fields of the stream line should be updated.
     * Only fields specified in this mask will be modified;
     * all other fields will retain their current values.
     * This allows for partial updates.
     */
    fieldMask?: FieldMask;
    /** Line title. */
    title: string;
    /**
     * New custom labels for the stream line as `key:value` pairs.
     * Maximum 64 labels per stream line.
     * If provided, replaces all existing labels.
     */
    labels: { [key: string]: string };
}

export interface UpdateStreamLineRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateStreamLineMetadata {
    /** ID of the stream line. */
    streamLineId: string;
}

export interface DeleteStreamLineRequest {
    /** ID of the stream line to delete. */
    streamLineId: string;
}

export interface DeleteStreamLineMetadata {
    /**
     * ID of the stream line.
     * This identifier can be used to track the stream line deletion operation.
     */
    streamLineId: string;
}

export interface BatchDeleteStreamLinesRequest {
    /** ID of the channel containing the stream lines to delete. */
    channelId: string;
    /**
     * List of stream line IDs to delete.
     * All stream lines must exist in the specified channel.
     */
    streamLineIds: string[];
}

export interface BatchDeleteStreamLinesMetadata {
    /**
     * List of stream line IDs being deleted.
     * This list can be used to track which stream lines are included
     * in the batch deletion operation.
     */
    streamLineIds: string[];
}

export interface PerformLineActionRequest {
    /**
     * Activate the stream line, enabling it to receive and process video signals.
     * This is typically used for automatic stream lines.
     */
    activate?: ActivateAction | undefined;
    /**
     * Deactivate the stream line, disabling it from receiving and processing video signals.
     * This is typically used for automatic stream lines.
     */
    deactivate?: DeactivateAction | undefined;
    /** ID of the stream line on which to perform the action. */
    streamLineId: string;
}

export interface PerformLineActionMetadata {
    /**
     * ID of the stream line on which the action is being performed.
     * This identifier can be used to track the action operation
     * and to verify that the action is being applied to the correct stream line.
     */
    streamLineId: string;
}

/** Parameters for creating an RTMP push input type stream line. */
export interface RTMPPushParams {}

/** Parameters for creating an RTMP pull input type stream line. */
export interface RTMPPullParams {
    /**
     * The RTMP URL from which to pull the video stream.
     * Must be a valid RTMP URL starting with "rtmp://".
     */
    url: string;
}

export interface SRTPullParams {
    /** URL of a SRT streaming server. */
    url: string;
}

/** Parameters for manual stream line. */
export interface ManualLineParams {}

/** Parameters for auto stream line. */
export interface AutoLineParams {}

/** Parameters for the activate action. */
export interface ActivateAction {}

/** Parameters for the deactivate action. */
export interface DeactivateAction {}

export interface GetStreamKeyRequest {
    /**
     * ID of the stream line for which to retrieve the stream key.
     * The stream line must be a push-type input (RTMP push or SRT push).
     */
    streamLineId: string;
}

export interface UpdateStreamKeyRequest {
    /**
     * ID of the stream line for which to update the stream key.
     * The stream line must be a push-type input (RTMP push or SRT push).
     */
    streamLineId: string;
}

export interface UpdateStreamKeyMetadata {
    /** ID of the stream line. */
    streamLineId: string;
}

const baseGetStreamLineRequest: object = { streamLineId: '' };

export const GetStreamLineRequest: {
    encode(message: GetStreamLineRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetStreamLineRequest;
    fromJSON(object: any): GetStreamLineRequest;
    toJSON(message: GetStreamLineRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetStreamLineRequest>, I>>(object: I): GetStreamLineRequest;
} = {
    encode(message: GetStreamLineRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.streamLineId !== '') {
            writer.uint32(10).string(message.streamLineId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetStreamLineRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetStreamLineRequest } as GetStreamLineRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.streamLineId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetStreamLineRequest {
        const message = { ...baseGetStreamLineRequest } as GetStreamLineRequest;
        message.streamLineId =
            object.streamLineId !== undefined && object.streamLineId !== null
                ? String(object.streamLineId)
                : '';
        return message;
    },

    toJSON(message: GetStreamLineRequest): unknown {
        const obj: any = {};
        message.streamLineId !== undefined && (obj.streamLineId = message.streamLineId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetStreamLineRequest>, I>>(
        object: I,
    ): GetStreamLineRequest {
        const message = { ...baseGetStreamLineRequest } as GetStreamLineRequest;
        message.streamLineId = object.streamLineId ?? '';
        return message;
    },
};

const baseListStreamLinesRequest: object = {
    channelId: '',
    pageSize: 0,
    pageToken: '',
    orderBy: '',
    filter: '',
};

export const ListStreamLinesRequest: {
    encode(message: ListStreamLinesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListStreamLinesRequest;
    fromJSON(object: any): ListStreamLinesRequest;
    toJSON(message: ListStreamLinesRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListStreamLinesRequest>, I>>(object: I): ListStreamLinesRequest;
} = {
    encode(message: ListStreamLinesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListStreamLinesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListStreamLinesRequest } as ListStreamLinesRequest;
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

    fromJSON(object: any): ListStreamLinesRequest {
        const message = { ...baseListStreamLinesRequest } as ListStreamLinesRequest;
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

    toJSON(message: ListStreamLinesRequest): unknown {
        const obj: any = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListStreamLinesRequest>, I>>(
        object: I,
    ): ListStreamLinesRequest {
        const message = { ...baseListStreamLinesRequest } as ListStreamLinesRequest;
        message.channelId = object.channelId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.orderBy = object.orderBy ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListStreamLinesResponse: object = { nextPageToken: '' };

export const ListStreamLinesResponse: {
    encode(message: ListStreamLinesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListStreamLinesResponse;
    fromJSON(object: any): ListStreamLinesResponse;
    toJSON(message: ListStreamLinesResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListStreamLinesResponse>, I>>(object: I): ListStreamLinesResponse;
} = {
    encode(message: ListStreamLinesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.streamLines) {
            StreamLine.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(802).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListStreamLinesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListStreamLinesResponse } as ListStreamLinesResponse;
        message.streamLines = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.streamLines.push(StreamLine.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListStreamLinesResponse {
        const message = { ...baseListStreamLinesResponse } as ListStreamLinesResponse;
        message.streamLines = (object.streamLines ?? []).map((e: any) => StreamLine.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListStreamLinesResponse): unknown {
        const obj: any = {};
        if (message.streamLines) {
            obj.streamLines = message.streamLines.map((e) =>
                e ? StreamLine.toJSON(e) : undefined,
            );
        } else {
            obj.streamLines = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListStreamLinesResponse>, I>>(
        object: I,
    ): ListStreamLinesResponse {
        const message = { ...baseListStreamLinesResponse } as ListStreamLinesResponse;
        message.streamLines = object.streamLines?.map((e) => StreamLine.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseBatchGetStreamLinesRequest: object = { channelId: '', streamLineIds: '' };

export const BatchGetStreamLinesRequest: {
    encode(message: BatchGetStreamLinesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchGetStreamLinesRequest;
    fromJSON(object: any): BatchGetStreamLinesRequest;
    toJSON(message: BatchGetStreamLinesRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<BatchGetStreamLinesRequest>, I>>(object: I): BatchGetStreamLinesRequest;
} = {
    encode(
        message: BatchGetStreamLinesRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
        }
        for (const v of message.streamLineIds) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchGetStreamLinesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchGetStreamLinesRequest } as BatchGetStreamLinesRequest;
        message.streamLineIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.streamLineIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchGetStreamLinesRequest {
        const message = { ...baseBatchGetStreamLinesRequest } as BatchGetStreamLinesRequest;
        message.channelId =
            object.channelId !== undefined && object.channelId !== null
                ? String(object.channelId)
                : '';
        message.streamLineIds = (object.streamLineIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: BatchGetStreamLinesRequest): unknown {
        const obj: any = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        if (message.streamLineIds) {
            obj.streamLineIds = message.streamLineIds.map((e) => e);
        } else {
            obj.streamLineIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchGetStreamLinesRequest>, I>>(
        object: I,
    ): BatchGetStreamLinesRequest {
        const message = { ...baseBatchGetStreamLinesRequest } as BatchGetStreamLinesRequest;
        message.channelId = object.channelId ?? '';
        message.streamLineIds = object.streamLineIds?.map((e) => e) || [];
        return message;
    },
};

const baseBatchGetStreamLinesResponse: object = {};

export const BatchGetStreamLinesResponse: {
    encode(message: BatchGetStreamLinesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchGetStreamLinesResponse;
    fromJSON(object: any): BatchGetStreamLinesResponse;
    toJSON(message: BatchGetStreamLinesResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<BatchGetStreamLinesResponse>, I>>(object: I): BatchGetStreamLinesResponse;
} = {
    encode(
        message: BatchGetStreamLinesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.streamLines) {
            StreamLine.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchGetStreamLinesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchGetStreamLinesResponse } as BatchGetStreamLinesResponse;
        message.streamLines = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.streamLines.push(StreamLine.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchGetStreamLinesResponse {
        const message = { ...baseBatchGetStreamLinesResponse } as BatchGetStreamLinesResponse;
        message.streamLines = (object.streamLines ?? []).map((e: any) => StreamLine.fromJSON(e));
        return message;
    },

    toJSON(message: BatchGetStreamLinesResponse): unknown {
        const obj: any = {};
        if (message.streamLines) {
            obj.streamLines = message.streamLines.map((e) =>
                e ? StreamLine.toJSON(e) : undefined,
            );
        } else {
            obj.streamLines = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchGetStreamLinesResponse>, I>>(
        object: I,
    ): BatchGetStreamLinesResponse {
        const message = { ...baseBatchGetStreamLinesResponse } as BatchGetStreamLinesResponse;
        message.streamLines = object.streamLines?.map((e) => StreamLine.fromPartial(e)) || [];
        return message;
    },
};

const baseCreateStreamLineRequest: object = { channelId: '', title: '' };

export const CreateStreamLineRequest: {
    encode(message: CreateStreamLineRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateStreamLineRequest;
    fromJSON(object: any): CreateStreamLineRequest;
    toJSON(message: CreateStreamLineRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateStreamLineRequest>, I>>(object: I): CreateStreamLineRequest;
} = {
    encode(message: CreateStreamLineRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.rtmpPush !== undefined) {
            RTMPPushParams.encode(message.rtmpPush, writer.uint32(8002).fork()).ldelim();
        }
        if (message.rtmpPull !== undefined) {
            RTMPPullParams.encode(message.rtmpPull, writer.uint32(8018).fork()).ldelim();
        }
        if (message.srtPull !== undefined) {
            SRTPullParams.encode(message.srtPull, writer.uint32(8026).fork()).ldelim();
        }
        if (message.manualLine !== undefined) {
            ManualLineParams.encode(message.manualLine, writer.uint32(16002).fork()).ldelim();
        }
        if (message.autoLine !== undefined) {
            AutoLineParams.encode(message.autoLine, writer.uint32(16010).fork()).ldelim();
        }
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
        }
        if (message.title !== '') {
            writer.uint32(18).string(message.title);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateStreamLineRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateStreamLineRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateStreamLineRequest } as CreateStreamLineRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1000:
                    message.rtmpPush = RTMPPushParams.decode(reader, reader.uint32());
                    break;
                case 1002:
                    message.rtmpPull = RTMPPullParams.decode(reader, reader.uint32());
                    break;
                case 1003:
                    message.srtPull = SRTPullParams.decode(reader, reader.uint32());
                    break;
                case 2000:
                    message.manualLine = ManualLineParams.decode(reader, reader.uint32());
                    break;
                case 2001:
                    message.autoLine = AutoLineParams.decode(reader, reader.uint32());
                    break;
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 200:
                    const entry200 = CreateStreamLineRequest_LabelsEntry.decode(
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

    fromJSON(object: any): CreateStreamLineRequest {
        const message = { ...baseCreateStreamLineRequest } as CreateStreamLineRequest;
        message.rtmpPush =
            object.rtmpPush !== undefined && object.rtmpPush !== null
                ? RTMPPushParams.fromJSON(object.rtmpPush)
                : undefined;
        message.rtmpPull =
            object.rtmpPull !== undefined && object.rtmpPull !== null
                ? RTMPPullParams.fromJSON(object.rtmpPull)
                : undefined;
        message.srtPull =
            object.srtPull !== undefined && object.srtPull !== null
                ? SRTPullParams.fromJSON(object.srtPull)
                : undefined;
        message.manualLine =
            object.manualLine !== undefined && object.manualLine !== null
                ? ManualLineParams.fromJSON(object.manualLine)
                : undefined;
        message.autoLine =
            object.autoLine !== undefined && object.autoLine !== null
                ? AutoLineParams.fromJSON(object.autoLine)
                : undefined;
        message.channelId =
            object.channelId !== undefined && object.channelId !== null
                ? String(object.channelId)
                : '';
        message.title =
            object.title !== undefined && object.title !== null ? String(object.title) : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: CreateStreamLineRequest): unknown {
        const obj: any = {};
        message.rtmpPush !== undefined &&
            (obj.rtmpPush = message.rtmpPush ? RTMPPushParams.toJSON(message.rtmpPush) : undefined);
        message.rtmpPull !== undefined &&
            (obj.rtmpPull = message.rtmpPull ? RTMPPullParams.toJSON(message.rtmpPull) : undefined);
        message.srtPull !== undefined &&
            (obj.srtPull = message.srtPull ? SRTPullParams.toJSON(message.srtPull) : undefined);
        message.manualLine !== undefined &&
            (obj.manualLine = message.manualLine
                ? ManualLineParams.toJSON(message.manualLine)
                : undefined);
        message.autoLine !== undefined &&
            (obj.autoLine = message.autoLine ? AutoLineParams.toJSON(message.autoLine) : undefined);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.title !== undefined && (obj.title = message.title);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateStreamLineRequest>, I>>(
        object: I,
    ): CreateStreamLineRequest {
        const message = { ...baseCreateStreamLineRequest } as CreateStreamLineRequest;
        message.rtmpPush =
            object.rtmpPush !== undefined && object.rtmpPush !== null
                ? RTMPPushParams.fromPartial(object.rtmpPush)
                : undefined;
        message.rtmpPull =
            object.rtmpPull !== undefined && object.rtmpPull !== null
                ? RTMPPullParams.fromPartial(object.rtmpPull)
                : undefined;
        message.srtPull =
            object.srtPull !== undefined && object.srtPull !== null
                ? SRTPullParams.fromPartial(object.srtPull)
                : undefined;
        message.manualLine =
            object.manualLine !== undefined && object.manualLine !== null
                ? ManualLineParams.fromPartial(object.manualLine)
                : undefined;
        message.autoLine =
            object.autoLine !== undefined && object.autoLine !== null
                ? AutoLineParams.fromPartial(object.autoLine)
                : undefined;
        message.channelId = object.channelId ?? '';
        message.title = object.title ?? '';
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

const baseCreateStreamLineRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateStreamLineRequest_LabelsEntry: {
    encode(message: CreateStreamLineRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateStreamLineRequest_LabelsEntry;
    fromJSON(object: any): CreateStreamLineRequest_LabelsEntry;
    toJSON(message: CreateStreamLineRequest_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateStreamLineRequest_LabelsEntry>, I>>(object: I): CreateStreamLineRequest_LabelsEntry;
} = {
    encode(
        message: CreateStreamLineRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateStreamLineRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateStreamLineRequest_LabelsEntry,
        } as CreateStreamLineRequest_LabelsEntry;
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

    fromJSON(object: any): CreateStreamLineRequest_LabelsEntry {
        const message = {
            ...baseCreateStreamLineRequest_LabelsEntry,
        } as CreateStreamLineRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateStreamLineRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateStreamLineRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateStreamLineRequest_LabelsEntry {
        const message = {
            ...baseCreateStreamLineRequest_LabelsEntry,
        } as CreateStreamLineRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateStreamLineMetadata: object = { streamLineId: '' };

export const CreateStreamLineMetadata: {
    encode(message: CreateStreamLineMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateStreamLineMetadata;
    fromJSON(object: any): CreateStreamLineMetadata;
    toJSON(message: CreateStreamLineMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateStreamLineMetadata>, I>>(object: I): CreateStreamLineMetadata;
} = {
    encode(
        message: CreateStreamLineMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.streamLineId !== '') {
            writer.uint32(10).string(message.streamLineId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateStreamLineMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateStreamLineMetadata } as CreateStreamLineMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.streamLineId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateStreamLineMetadata {
        const message = { ...baseCreateStreamLineMetadata } as CreateStreamLineMetadata;
        message.streamLineId =
            object.streamLineId !== undefined && object.streamLineId !== null
                ? String(object.streamLineId)
                : '';
        return message;
    },

    toJSON(message: CreateStreamLineMetadata): unknown {
        const obj: any = {};
        message.streamLineId !== undefined && (obj.streamLineId = message.streamLineId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateStreamLineMetadata>, I>>(
        object: I,
    ): CreateStreamLineMetadata {
        const message = { ...baseCreateStreamLineMetadata } as CreateStreamLineMetadata;
        message.streamLineId = object.streamLineId ?? '';
        return message;
    },
};

const baseUpdateStreamLineRequest: object = { streamLineId: '', title: '' };

export const UpdateStreamLineRequest: {
    encode(message: UpdateStreamLineRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateStreamLineRequest;
    fromJSON(object: any): UpdateStreamLineRequest;
    toJSON(message: UpdateStreamLineRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateStreamLineRequest>, I>>(object: I): UpdateStreamLineRequest;
} = {
    encode(message: UpdateStreamLineRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.rtmpPush !== undefined) {
            RTMPPushParams.encode(message.rtmpPush, writer.uint32(8002).fork()).ldelim();
        }
        if (message.rtmpPull !== undefined) {
            RTMPPullParams.encode(message.rtmpPull, writer.uint32(8018).fork()).ldelim();
        }
        if (message.srtPull !== undefined) {
            SRTPullParams.encode(message.srtPull, writer.uint32(8026).fork()).ldelim();
        }
        if (message.streamLineId !== '') {
            writer.uint32(10).string(message.streamLineId);
        }
        if (message.fieldMask !== undefined) {
            FieldMask.encode(message.fieldMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.title !== '') {
            writer.uint32(26).string(message.title);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateStreamLineRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateStreamLineRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateStreamLineRequest } as UpdateStreamLineRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1000:
                    message.rtmpPush = RTMPPushParams.decode(reader, reader.uint32());
                    break;
                case 1002:
                    message.rtmpPull = RTMPPullParams.decode(reader, reader.uint32());
                    break;
                case 1003:
                    message.srtPull = SRTPullParams.decode(reader, reader.uint32());
                    break;
                case 1:
                    message.streamLineId = reader.string();
                    break;
                case 2:
                    message.fieldMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.title = reader.string();
                    break;
                case 200:
                    const entry200 = UpdateStreamLineRequest_LabelsEntry.decode(
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

    fromJSON(object: any): UpdateStreamLineRequest {
        const message = { ...baseUpdateStreamLineRequest } as UpdateStreamLineRequest;
        message.rtmpPush =
            object.rtmpPush !== undefined && object.rtmpPush !== null
                ? RTMPPushParams.fromJSON(object.rtmpPush)
                : undefined;
        message.rtmpPull =
            object.rtmpPull !== undefined && object.rtmpPull !== null
                ? RTMPPullParams.fromJSON(object.rtmpPull)
                : undefined;
        message.srtPull =
            object.srtPull !== undefined && object.srtPull !== null
                ? SRTPullParams.fromJSON(object.srtPull)
                : undefined;
        message.streamLineId =
            object.streamLineId !== undefined && object.streamLineId !== null
                ? String(object.streamLineId)
                : '';
        message.fieldMask =
            object.fieldMask !== undefined && object.fieldMask !== null
                ? FieldMask.fromJSON(object.fieldMask)
                : undefined;
        message.title =
            object.title !== undefined && object.title !== null ? String(object.title) : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: UpdateStreamLineRequest): unknown {
        const obj: any = {};
        message.rtmpPush !== undefined &&
            (obj.rtmpPush = message.rtmpPush ? RTMPPushParams.toJSON(message.rtmpPush) : undefined);
        message.rtmpPull !== undefined &&
            (obj.rtmpPull = message.rtmpPull ? RTMPPullParams.toJSON(message.rtmpPull) : undefined);
        message.srtPull !== undefined &&
            (obj.srtPull = message.srtPull ? SRTPullParams.toJSON(message.srtPull) : undefined);
        message.streamLineId !== undefined && (obj.streamLineId = message.streamLineId);
        message.fieldMask !== undefined &&
            (obj.fieldMask = message.fieldMask ? FieldMask.toJSON(message.fieldMask) : undefined);
        message.title !== undefined && (obj.title = message.title);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateStreamLineRequest>, I>>(
        object: I,
    ): UpdateStreamLineRequest {
        const message = { ...baseUpdateStreamLineRequest } as UpdateStreamLineRequest;
        message.rtmpPush =
            object.rtmpPush !== undefined && object.rtmpPush !== null
                ? RTMPPushParams.fromPartial(object.rtmpPush)
                : undefined;
        message.rtmpPull =
            object.rtmpPull !== undefined && object.rtmpPull !== null
                ? RTMPPullParams.fromPartial(object.rtmpPull)
                : undefined;
        message.srtPull =
            object.srtPull !== undefined && object.srtPull !== null
                ? SRTPullParams.fromPartial(object.srtPull)
                : undefined;
        message.streamLineId = object.streamLineId ?? '';
        message.fieldMask =
            object.fieldMask !== undefined && object.fieldMask !== null
                ? FieldMask.fromPartial(object.fieldMask)
                : undefined;
        message.title = object.title ?? '';
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

const baseUpdateStreamLineRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateStreamLineRequest_LabelsEntry: {
    encode(message: UpdateStreamLineRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateStreamLineRequest_LabelsEntry;
    fromJSON(object: any): UpdateStreamLineRequest_LabelsEntry;
    toJSON(message: UpdateStreamLineRequest_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateStreamLineRequest_LabelsEntry>, I>>(object: I): UpdateStreamLineRequest_LabelsEntry;
} = {
    encode(
        message: UpdateStreamLineRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateStreamLineRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateStreamLineRequest_LabelsEntry,
        } as UpdateStreamLineRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateStreamLineRequest_LabelsEntry {
        const message = {
            ...baseUpdateStreamLineRequest_LabelsEntry,
        } as UpdateStreamLineRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateStreamLineRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateStreamLineRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateStreamLineRequest_LabelsEntry {
        const message = {
            ...baseUpdateStreamLineRequest_LabelsEntry,
        } as UpdateStreamLineRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateStreamLineMetadata: object = { streamLineId: '' };

export const UpdateStreamLineMetadata: {
    encode(message: UpdateStreamLineMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateStreamLineMetadata;
    fromJSON(object: any): UpdateStreamLineMetadata;
    toJSON(message: UpdateStreamLineMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateStreamLineMetadata>, I>>(object: I): UpdateStreamLineMetadata;
} = {
    encode(
        message: UpdateStreamLineMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.streamLineId !== '') {
            writer.uint32(10).string(message.streamLineId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateStreamLineMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateStreamLineMetadata } as UpdateStreamLineMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.streamLineId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateStreamLineMetadata {
        const message = { ...baseUpdateStreamLineMetadata } as UpdateStreamLineMetadata;
        message.streamLineId =
            object.streamLineId !== undefined && object.streamLineId !== null
                ? String(object.streamLineId)
                : '';
        return message;
    },

    toJSON(message: UpdateStreamLineMetadata): unknown {
        const obj: any = {};
        message.streamLineId !== undefined && (obj.streamLineId = message.streamLineId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateStreamLineMetadata>, I>>(
        object: I,
    ): UpdateStreamLineMetadata {
        const message = { ...baseUpdateStreamLineMetadata } as UpdateStreamLineMetadata;
        message.streamLineId = object.streamLineId ?? '';
        return message;
    },
};

const baseDeleteStreamLineRequest: object = { streamLineId: '' };

export const DeleteStreamLineRequest: {
    encode(message: DeleteStreamLineRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteStreamLineRequest;
    fromJSON(object: any): DeleteStreamLineRequest;
    toJSON(message: DeleteStreamLineRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteStreamLineRequest>, I>>(object: I): DeleteStreamLineRequest;
} = {
    encode(message: DeleteStreamLineRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.streamLineId !== '') {
            writer.uint32(10).string(message.streamLineId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteStreamLineRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteStreamLineRequest } as DeleteStreamLineRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.streamLineId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteStreamLineRequest {
        const message = { ...baseDeleteStreamLineRequest } as DeleteStreamLineRequest;
        message.streamLineId =
            object.streamLineId !== undefined && object.streamLineId !== null
                ? String(object.streamLineId)
                : '';
        return message;
    },

    toJSON(message: DeleteStreamLineRequest): unknown {
        const obj: any = {};
        message.streamLineId !== undefined && (obj.streamLineId = message.streamLineId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteStreamLineRequest>, I>>(
        object: I,
    ): DeleteStreamLineRequest {
        const message = { ...baseDeleteStreamLineRequest } as DeleteStreamLineRequest;
        message.streamLineId = object.streamLineId ?? '';
        return message;
    },
};

const baseDeleteStreamLineMetadata: object = { streamLineId: '' };

export const DeleteStreamLineMetadata: {
    encode(message: DeleteStreamLineMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteStreamLineMetadata;
    fromJSON(object: any): DeleteStreamLineMetadata;
    toJSON(message: DeleteStreamLineMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteStreamLineMetadata>, I>>(object: I): DeleteStreamLineMetadata;
} = {
    encode(
        message: DeleteStreamLineMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.streamLineId !== '') {
            writer.uint32(10).string(message.streamLineId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteStreamLineMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteStreamLineMetadata } as DeleteStreamLineMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.streamLineId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteStreamLineMetadata {
        const message = { ...baseDeleteStreamLineMetadata } as DeleteStreamLineMetadata;
        message.streamLineId =
            object.streamLineId !== undefined && object.streamLineId !== null
                ? String(object.streamLineId)
                : '';
        return message;
    },

    toJSON(message: DeleteStreamLineMetadata): unknown {
        const obj: any = {};
        message.streamLineId !== undefined && (obj.streamLineId = message.streamLineId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteStreamLineMetadata>, I>>(
        object: I,
    ): DeleteStreamLineMetadata {
        const message = { ...baseDeleteStreamLineMetadata } as DeleteStreamLineMetadata;
        message.streamLineId = object.streamLineId ?? '';
        return message;
    },
};

const baseBatchDeleteStreamLinesRequest: object = { channelId: '', streamLineIds: '' };

export const BatchDeleteStreamLinesRequest: {
    encode(message: BatchDeleteStreamLinesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchDeleteStreamLinesRequest;
    fromJSON(object: any): BatchDeleteStreamLinesRequest;
    toJSON(message: BatchDeleteStreamLinesRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<BatchDeleteStreamLinesRequest>, I>>(object: I): BatchDeleteStreamLinesRequest;
} = {
    encode(
        message: BatchDeleteStreamLinesRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
        }
        for (const v of message.streamLineIds) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchDeleteStreamLinesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchDeleteStreamLinesRequest } as BatchDeleteStreamLinesRequest;
        message.streamLineIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.streamLineIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchDeleteStreamLinesRequest {
        const message = { ...baseBatchDeleteStreamLinesRequest } as BatchDeleteStreamLinesRequest;
        message.channelId =
            object.channelId !== undefined && object.channelId !== null
                ? String(object.channelId)
                : '';
        message.streamLineIds = (object.streamLineIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: BatchDeleteStreamLinesRequest): unknown {
        const obj: any = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        if (message.streamLineIds) {
            obj.streamLineIds = message.streamLineIds.map((e) => e);
        } else {
            obj.streamLineIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchDeleteStreamLinesRequest>, I>>(
        object: I,
    ): BatchDeleteStreamLinesRequest {
        const message = { ...baseBatchDeleteStreamLinesRequest } as BatchDeleteStreamLinesRequest;
        message.channelId = object.channelId ?? '';
        message.streamLineIds = object.streamLineIds?.map((e) => e) || [];
        return message;
    },
};

const baseBatchDeleteStreamLinesMetadata: object = { streamLineIds: '' };

export const BatchDeleteStreamLinesMetadata: {
    encode(message: BatchDeleteStreamLinesMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchDeleteStreamLinesMetadata;
    fromJSON(object: any): BatchDeleteStreamLinesMetadata;
    toJSON(message: BatchDeleteStreamLinesMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<BatchDeleteStreamLinesMetadata>, I>>(object: I): BatchDeleteStreamLinesMetadata;
} = {
    encode(
        message: BatchDeleteStreamLinesMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.streamLineIds) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchDeleteStreamLinesMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchDeleteStreamLinesMetadata } as BatchDeleteStreamLinesMetadata;
        message.streamLineIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.streamLineIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchDeleteStreamLinesMetadata {
        const message = { ...baseBatchDeleteStreamLinesMetadata } as BatchDeleteStreamLinesMetadata;
        message.streamLineIds = (object.streamLineIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: BatchDeleteStreamLinesMetadata): unknown {
        const obj: any = {};
        if (message.streamLineIds) {
            obj.streamLineIds = message.streamLineIds.map((e) => e);
        } else {
            obj.streamLineIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchDeleteStreamLinesMetadata>, I>>(
        object: I,
    ): BatchDeleteStreamLinesMetadata {
        const message = { ...baseBatchDeleteStreamLinesMetadata } as BatchDeleteStreamLinesMetadata;
        message.streamLineIds = object.streamLineIds?.map((e) => e) || [];
        return message;
    },
};

const basePerformLineActionRequest: object = { streamLineId: '' };

export const PerformLineActionRequest: {
    encode(message: PerformLineActionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PerformLineActionRequest;
    fromJSON(object: any): PerformLineActionRequest;
    toJSON(message: PerformLineActionRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<PerformLineActionRequest>, I>>(object: I): PerformLineActionRequest;
} = {
    encode(
        message: PerformLineActionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.activate !== undefined) {
            ActivateAction.encode(message.activate, writer.uint32(8002).fork()).ldelim();
        }
        if (message.deactivate !== undefined) {
            DeactivateAction.encode(message.deactivate, writer.uint32(8010).fork()).ldelim();
        }
        if (message.streamLineId !== '') {
            writer.uint32(10).string(message.streamLineId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PerformLineActionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePerformLineActionRequest } as PerformLineActionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1000:
                    message.activate = ActivateAction.decode(reader, reader.uint32());
                    break;
                case 1001:
                    message.deactivate = DeactivateAction.decode(reader, reader.uint32());
                    break;
                case 1:
                    message.streamLineId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PerformLineActionRequest {
        const message = { ...basePerformLineActionRequest } as PerformLineActionRequest;
        message.activate =
            object.activate !== undefined && object.activate !== null
                ? ActivateAction.fromJSON(object.activate)
                : undefined;
        message.deactivate =
            object.deactivate !== undefined && object.deactivate !== null
                ? DeactivateAction.fromJSON(object.deactivate)
                : undefined;
        message.streamLineId =
            object.streamLineId !== undefined && object.streamLineId !== null
                ? String(object.streamLineId)
                : '';
        return message;
    },

    toJSON(message: PerformLineActionRequest): unknown {
        const obj: any = {};
        message.activate !== undefined &&
            (obj.activate = message.activate ? ActivateAction.toJSON(message.activate) : undefined);
        message.deactivate !== undefined &&
            (obj.deactivate = message.deactivate
                ? DeactivateAction.toJSON(message.deactivate)
                : undefined);
        message.streamLineId !== undefined && (obj.streamLineId = message.streamLineId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PerformLineActionRequest>, I>>(
        object: I,
    ): PerformLineActionRequest {
        const message = { ...basePerformLineActionRequest } as PerformLineActionRequest;
        message.activate =
            object.activate !== undefined && object.activate !== null
                ? ActivateAction.fromPartial(object.activate)
                : undefined;
        message.deactivate =
            object.deactivate !== undefined && object.deactivate !== null
                ? DeactivateAction.fromPartial(object.deactivate)
                : undefined;
        message.streamLineId = object.streamLineId ?? '';
        return message;
    },
};

const basePerformLineActionMetadata: object = { streamLineId: '' };

export const PerformLineActionMetadata: {
    encode(message: PerformLineActionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PerformLineActionMetadata;
    fromJSON(object: any): PerformLineActionMetadata;
    toJSON(message: PerformLineActionMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<PerformLineActionMetadata>, I>>(object: I): PerformLineActionMetadata;
} = {
    encode(
        message: PerformLineActionMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.streamLineId !== '') {
            writer.uint32(10).string(message.streamLineId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PerformLineActionMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePerformLineActionMetadata } as PerformLineActionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.streamLineId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PerformLineActionMetadata {
        const message = { ...basePerformLineActionMetadata } as PerformLineActionMetadata;
        message.streamLineId =
            object.streamLineId !== undefined && object.streamLineId !== null
                ? String(object.streamLineId)
                : '';
        return message;
    },

    toJSON(message: PerformLineActionMetadata): unknown {
        const obj: any = {};
        message.streamLineId !== undefined && (obj.streamLineId = message.streamLineId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PerformLineActionMetadata>, I>>(
        object: I,
    ): PerformLineActionMetadata {
        const message = { ...basePerformLineActionMetadata } as PerformLineActionMetadata;
        message.streamLineId = object.streamLineId ?? '';
        return message;
    },
};

const baseRTMPPushParams: object = {};

export const RTMPPushParams: {
    encode(message: RTMPPushParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RTMPPushParams;
    fromJSON(object: any): RTMPPushParams;
    toJSON(message: RTMPPushParams): unknown;
    fromPartial<I extends Exact<DeepPartial<RTMPPushParams>, I>>(object: I): RTMPPushParams;
} = {
    encode(_: RTMPPushParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RTMPPushParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRTMPPushParams } as RTMPPushParams;
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

    fromJSON(_: any): RTMPPushParams {
        const message = { ...baseRTMPPushParams } as RTMPPushParams;
        return message;
    },

    toJSON(_: RTMPPushParams): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RTMPPushParams>, I>>(_: I): RTMPPushParams {
        const message = { ...baseRTMPPushParams } as RTMPPushParams;
        return message;
    },
};

const baseRTMPPullParams: object = { url: '' };

export const RTMPPullParams: {
    encode(message: RTMPPullParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RTMPPullParams;
    fromJSON(object: any): RTMPPullParams;
    toJSON(message: RTMPPullParams): unknown;
    fromPartial<I extends Exact<DeepPartial<RTMPPullParams>, I>>(object: I): RTMPPullParams;
} = {
    encode(message: RTMPPullParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.url !== '') {
            writer.uint32(10).string(message.url);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RTMPPullParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRTMPPullParams } as RTMPPullParams;
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

    fromJSON(object: any): RTMPPullParams {
        const message = { ...baseRTMPPullParams } as RTMPPullParams;
        message.url = object.url !== undefined && object.url !== null ? String(object.url) : '';
        return message;
    },

    toJSON(message: RTMPPullParams): unknown {
        const obj: any = {};
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RTMPPullParams>, I>>(object: I): RTMPPullParams {
        const message = { ...baseRTMPPullParams } as RTMPPullParams;
        message.url = object.url ?? '';
        return message;
    },
};

const baseSRTPullParams: object = { url: '' };

export const SRTPullParams: {
    encode(message: SRTPullParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SRTPullParams;
    fromJSON(object: any): SRTPullParams;
    toJSON(message: SRTPullParams): unknown;
    fromPartial<I extends Exact<DeepPartial<SRTPullParams>, I>>(object: I): SRTPullParams;
} = {
    encode(message: SRTPullParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.url !== '') {
            writer.uint32(10).string(message.url);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SRTPullParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSRTPullParams } as SRTPullParams;
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

    fromJSON(object: any): SRTPullParams {
        const message = { ...baseSRTPullParams } as SRTPullParams;
        message.url = object.url !== undefined && object.url !== null ? String(object.url) : '';
        return message;
    },

    toJSON(message: SRTPullParams): unknown {
        const obj: any = {};
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SRTPullParams>, I>>(object: I): SRTPullParams {
        const message = { ...baseSRTPullParams } as SRTPullParams;
        message.url = object.url ?? '';
        return message;
    },
};

const baseManualLineParams: object = {};

export const ManualLineParams: {
    encode(message: ManualLineParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ManualLineParams;
    fromJSON(object: any): ManualLineParams;
    toJSON(message: ManualLineParams): unknown;
    fromPartial<I extends Exact<DeepPartial<ManualLineParams>, I>>(object: I): ManualLineParams;
} = {
    encode(_: ManualLineParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ManualLineParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseManualLineParams } as ManualLineParams;
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

    fromJSON(_: any): ManualLineParams {
        const message = { ...baseManualLineParams } as ManualLineParams;
        return message;
    },

    toJSON(_: ManualLineParams): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ManualLineParams>, I>>(_: I): ManualLineParams {
        const message = { ...baseManualLineParams } as ManualLineParams;
        return message;
    },
};

const baseAutoLineParams: object = {};

export const AutoLineParams: {
    encode(message: AutoLineParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AutoLineParams;
    fromJSON(object: any): AutoLineParams;
    toJSON(message: AutoLineParams): unknown;
    fromPartial<I extends Exact<DeepPartial<AutoLineParams>, I>>(object: I): AutoLineParams;
} = {
    encode(_: AutoLineParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AutoLineParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAutoLineParams } as AutoLineParams;
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

    fromJSON(_: any): AutoLineParams {
        const message = { ...baseAutoLineParams } as AutoLineParams;
        return message;
    },

    toJSON(_: AutoLineParams): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AutoLineParams>, I>>(_: I): AutoLineParams {
        const message = { ...baseAutoLineParams } as AutoLineParams;
        return message;
    },
};

const baseActivateAction: object = {};

export const ActivateAction: {
    encode(message: ActivateAction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateAction;
    fromJSON(object: any): ActivateAction;
    toJSON(message: ActivateAction): unknown;
    fromPartial<I extends Exact<DeepPartial<ActivateAction>, I>>(object: I): ActivateAction;
} = {
    encode(_: ActivateAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateAction {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseActivateAction } as ActivateAction;
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

    fromJSON(_: any): ActivateAction {
        const message = { ...baseActivateAction } as ActivateAction;
        return message;
    },

    toJSON(_: ActivateAction): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ActivateAction>, I>>(_: I): ActivateAction {
        const message = { ...baseActivateAction } as ActivateAction;
        return message;
    },
};

const baseDeactivateAction: object = {};

export const DeactivateAction: {
    encode(message: DeactivateAction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateAction;
    fromJSON(object: any): DeactivateAction;
    toJSON(message: DeactivateAction): unknown;
    fromPartial<I extends Exact<DeepPartial<DeactivateAction>, I>>(object: I): DeactivateAction;
} = {
    encode(_: DeactivateAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateAction {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeactivateAction } as DeactivateAction;
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

    fromJSON(_: any): DeactivateAction {
        const message = { ...baseDeactivateAction } as DeactivateAction;
        return message;
    },

    toJSON(_: DeactivateAction): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeactivateAction>, I>>(_: I): DeactivateAction {
        const message = { ...baseDeactivateAction } as DeactivateAction;
        return message;
    },
};

const baseGetStreamKeyRequest: object = { streamLineId: '' };

export const GetStreamKeyRequest: {
    encode(message: GetStreamKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetStreamKeyRequest;
    fromJSON(object: any): GetStreamKeyRequest;
    toJSON(message: GetStreamKeyRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetStreamKeyRequest>, I>>(object: I): GetStreamKeyRequest;
} = {
    encode(message: GetStreamKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.streamLineId !== '') {
            writer.uint32(10).string(message.streamLineId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetStreamKeyRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetStreamKeyRequest } as GetStreamKeyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.streamLineId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetStreamKeyRequest {
        const message = { ...baseGetStreamKeyRequest } as GetStreamKeyRequest;
        message.streamLineId =
            object.streamLineId !== undefined && object.streamLineId !== null
                ? String(object.streamLineId)
                : '';
        return message;
    },

    toJSON(message: GetStreamKeyRequest): unknown {
        const obj: any = {};
        message.streamLineId !== undefined && (obj.streamLineId = message.streamLineId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetStreamKeyRequest>, I>>(
        object: I,
    ): GetStreamKeyRequest {
        const message = { ...baseGetStreamKeyRequest } as GetStreamKeyRequest;
        message.streamLineId = object.streamLineId ?? '';
        return message;
    },
};

const baseUpdateStreamKeyRequest: object = { streamLineId: '' };

export const UpdateStreamKeyRequest: {
    encode(message: UpdateStreamKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateStreamKeyRequest;
    fromJSON(object: any): UpdateStreamKeyRequest;
    toJSON(message: UpdateStreamKeyRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateStreamKeyRequest>, I>>(object: I): UpdateStreamKeyRequest;
} = {
    encode(message: UpdateStreamKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.streamLineId !== '') {
            writer.uint32(10).string(message.streamLineId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateStreamKeyRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateStreamKeyRequest } as UpdateStreamKeyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.streamLineId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateStreamKeyRequest {
        const message = { ...baseUpdateStreamKeyRequest } as UpdateStreamKeyRequest;
        message.streamLineId =
            object.streamLineId !== undefined && object.streamLineId !== null
                ? String(object.streamLineId)
                : '';
        return message;
    },

    toJSON(message: UpdateStreamKeyRequest): unknown {
        const obj: any = {};
        message.streamLineId !== undefined && (obj.streamLineId = message.streamLineId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateStreamKeyRequest>, I>>(
        object: I,
    ): UpdateStreamKeyRequest {
        const message = { ...baseUpdateStreamKeyRequest } as UpdateStreamKeyRequest;
        message.streamLineId = object.streamLineId ?? '';
        return message;
    },
};

const baseUpdateStreamKeyMetadata: object = { streamLineId: '' };

export const UpdateStreamKeyMetadata: {
    encode(message: UpdateStreamKeyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateStreamKeyMetadata;
    fromJSON(object: any): UpdateStreamKeyMetadata;
    toJSON(message: UpdateStreamKeyMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateStreamKeyMetadata>, I>>(object: I): UpdateStreamKeyMetadata;
} = {
    encode(message: UpdateStreamKeyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.streamLineId !== '') {
            writer.uint32(10).string(message.streamLineId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateStreamKeyMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateStreamKeyMetadata } as UpdateStreamKeyMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.streamLineId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateStreamKeyMetadata {
        const message = { ...baseUpdateStreamKeyMetadata } as UpdateStreamKeyMetadata;
        message.streamLineId =
            object.streamLineId !== undefined && object.streamLineId !== null
                ? String(object.streamLineId)
                : '';
        return message;
    },

    toJSON(message: UpdateStreamKeyMetadata): unknown {
        const obj: any = {};
        message.streamLineId !== undefined && (obj.streamLineId = message.streamLineId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateStreamKeyMetadata>, I>>(
        object: I,
    ): UpdateStreamKeyMetadata {
        const message = { ...baseUpdateStreamKeyMetadata } as UpdateStreamKeyMetadata;
        message.streamLineId = object.streamLineId ?? '';
        return message;
    },
};

/**
 * Stream line management service.
 * Provides methods for creating, retrieving, updating, and deleting stream lines,
 * which define the technical configuration for receiving and processing video signals.
 */
export const StreamLineServiceService = {
    /**
     * Retrieves detailed information about a specific stream line by its ID.
     * Returns all stream line metadata, configuration, and related information.
     */
    get: {
        path: '/yandex.cloud.video.v1.StreamLineService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetStreamLineRequest) =>
            Buffer.from(GetStreamLineRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetStreamLineRequest.decode(value),
        responseSerialize: (value: StreamLine) => Buffer.from(StreamLine.encode(value).finish()),
        responseDeserialize: (value: Buffer) => StreamLine.decode(value),
    },
    /**
     * Lists all stream lines in a specific channel with pagination support.
     * Results can be filtered and sorted using the provided parameters.
     */
    list: {
        path: '/yandex.cloud.video.v1.StreamLineService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListStreamLinesRequest) =>
            Buffer.from(ListStreamLinesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListStreamLinesRequest.decode(value),
        responseSerialize: (value: ListStreamLinesResponse) =>
            Buffer.from(ListStreamLinesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListStreamLinesResponse.decode(value),
    },
    /**
     * Retrieves multiple stream lines by their IDs in a specific channel in a single request.
     * This is more efficient than making multiple Get requests when retrieving several stream lines.
     */
    batchGet: {
        path: '/yandex.cloud.video.v1.StreamLineService/BatchGet',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: BatchGetStreamLinesRequest) =>
            Buffer.from(BatchGetStreamLinesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => BatchGetStreamLinesRequest.decode(value),
        responseSerialize: (value: BatchGetStreamLinesResponse) =>
            Buffer.from(BatchGetStreamLinesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => BatchGetStreamLinesResponse.decode(value),
    },
    /**
     * Creates a new stream line in the specified channel with the provided configuration.
     * Stream lines define the technical settings for receiving and processing video signals.
     */
    create: {
        path: '/yandex.cloud.video.v1.StreamLineService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateStreamLineRequest) =>
            Buffer.from(CreateStreamLineRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateStreamLineRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Updates an existing stream line's metadata and configuration.
     * Only fields specified in the field_mask will be updated.
     */
    update: {
        path: '/yandex.cloud.video.v1.StreamLineService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateStreamLineRequest) =>
            Buffer.from(UpdateStreamLineRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateStreamLineRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes a specific stream line by its ID. */
    delete: {
        path: '/yandex.cloud.video.v1.StreamLineService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteStreamLineRequest) =>
            Buffer.from(DeleteStreamLineRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteStreamLineRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Deletes multiple stream lines in a specific channel in a single request.
     * This is more efficient than making multiple Delete requests when removing several stream lines.
     */
    batchDelete: {
        path: '/yandex.cloud.video.v1.StreamLineService/BatchDelete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: BatchDeleteStreamLinesRequest) =>
            Buffer.from(BatchDeleteStreamLinesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => BatchDeleteStreamLinesRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Performs a specific action on a stream line, such as activation or deactivation.
     * Actions change the stream line's state without modifying its configuration.
     */
    performAction: {
        path: '/yandex.cloud.video.v1.StreamLineService/PerformAction',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: PerformLineActionRequest) =>
            Buffer.from(PerformLineActionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => PerformLineActionRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Retrieves the unique stream key for a push-type stream line.
     * This key is used to authenticate when pushing video streams to the platform.
     */
    getStreamKey: {
        path: '/yandex.cloud.video.v1.StreamLineService/GetStreamKey',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetStreamKeyRequest) =>
            Buffer.from(GetStreamKeyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetStreamKeyRequest.decode(value),
        responseSerialize: (value: PushStreamKey) =>
            Buffer.from(PushStreamKey.encode(value).finish()),
        responseDeserialize: (value: Buffer) => PushStreamKey.decode(value),
    },
    /**
     * Regenerates and updates the stream key for a push-type stream line.
     * This is useful for security purposes when the existing key may be compromised.
     */
    updateStreamKey: {
        path: '/yandex.cloud.video.v1.StreamLineService/UpdateStreamKey',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateStreamKeyRequest) =>
            Buffer.from(UpdateStreamKeyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateStreamKeyRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface StreamLineServiceServer extends UntypedServiceImplementation {
    /**
     * Retrieves detailed information about a specific stream line by its ID.
     * Returns all stream line metadata, configuration, and related information.
     */
    get: handleUnaryCall<GetStreamLineRequest, StreamLine>;
    /**
     * Lists all stream lines in a specific channel with pagination support.
     * Results can be filtered and sorted using the provided parameters.
     */
    list: handleUnaryCall<ListStreamLinesRequest, ListStreamLinesResponse>;
    /**
     * Retrieves multiple stream lines by their IDs in a specific channel in a single request.
     * This is more efficient than making multiple Get requests when retrieving several stream lines.
     */
    batchGet: handleUnaryCall<BatchGetStreamLinesRequest, BatchGetStreamLinesResponse>;
    /**
     * Creates a new stream line in the specified channel with the provided configuration.
     * Stream lines define the technical settings for receiving and processing video signals.
     */
    create: handleUnaryCall<CreateStreamLineRequest, Operation>;
    /**
     * Updates an existing stream line's metadata and configuration.
     * Only fields specified in the field_mask will be updated.
     */
    update: handleUnaryCall<UpdateStreamLineRequest, Operation>;
    /** Deletes a specific stream line by its ID. */
    delete: handleUnaryCall<DeleteStreamLineRequest, Operation>;
    /**
     * Deletes multiple stream lines in a specific channel in a single request.
     * This is more efficient than making multiple Delete requests when removing several stream lines.
     */
    batchDelete: handleUnaryCall<BatchDeleteStreamLinesRequest, Operation>;
    /**
     * Performs a specific action on a stream line, such as activation or deactivation.
     * Actions change the stream line's state without modifying its configuration.
     */
    performAction: handleUnaryCall<PerformLineActionRequest, Operation>;
    /**
     * Retrieves the unique stream key for a push-type stream line.
     * This key is used to authenticate when pushing video streams to the platform.
     */
    getStreamKey: handleUnaryCall<GetStreamKeyRequest, PushStreamKey>;
    /**
     * Regenerates and updates the stream key for a push-type stream line.
     * This is useful for security purposes when the existing key may be compromised.
     */
    updateStreamKey: handleUnaryCall<UpdateStreamKeyRequest, Operation>;
}

export interface StreamLineServiceClient extends Client {
    /**
     * Retrieves detailed information about a specific stream line by its ID.
     * Returns all stream line metadata, configuration, and related information.
     */
    get(
        request: GetStreamLineRequest,
        callback: (error: ServiceError | null, response: StreamLine) => void,
    ): ClientUnaryCall;
    get(
        request: GetStreamLineRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: StreamLine) => void,
    ): ClientUnaryCall;
    get(
        request: GetStreamLineRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: StreamLine) => void,
    ): ClientUnaryCall;
    /**
     * Lists all stream lines in a specific channel with pagination support.
     * Results can be filtered and sorted using the provided parameters.
     */
    list(
        request: ListStreamLinesRequest,
        callback: (error: ServiceError | null, response: ListStreamLinesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListStreamLinesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListStreamLinesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListStreamLinesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListStreamLinesResponse) => void,
    ): ClientUnaryCall;
    /**
     * Retrieves multiple stream lines by their IDs in a specific channel in a single request.
     * This is more efficient than making multiple Get requests when retrieving several stream lines.
     */
    batchGet(
        request: BatchGetStreamLinesRequest,
        callback: (error: ServiceError | null, response: BatchGetStreamLinesResponse) => void,
    ): ClientUnaryCall;
    batchGet(
        request: BatchGetStreamLinesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: BatchGetStreamLinesResponse) => void,
    ): ClientUnaryCall;
    batchGet(
        request: BatchGetStreamLinesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: BatchGetStreamLinesResponse) => void,
    ): ClientUnaryCall;
    /**
     * Creates a new stream line in the specified channel with the provided configuration.
     * Stream lines define the technical settings for receiving and processing video signals.
     */
    create(
        request: CreateStreamLineRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateStreamLineRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateStreamLineRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Updates an existing stream line's metadata and configuration.
     * Only fields specified in the field_mask will be updated.
     */
    update(
        request: UpdateStreamLineRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateStreamLineRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateStreamLineRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes a specific stream line by its ID. */
    delete(
        request: DeleteStreamLineRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteStreamLineRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteStreamLineRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Deletes multiple stream lines in a specific channel in a single request.
     * This is more efficient than making multiple Delete requests when removing several stream lines.
     */
    batchDelete(
        request: BatchDeleteStreamLinesRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    batchDelete(
        request: BatchDeleteStreamLinesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    batchDelete(
        request: BatchDeleteStreamLinesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Performs a specific action on a stream line, such as activation or deactivation.
     * Actions change the stream line's state without modifying its configuration.
     */
    performAction(
        request: PerformLineActionRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    performAction(
        request: PerformLineActionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    performAction(
        request: PerformLineActionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Retrieves the unique stream key for a push-type stream line.
     * This key is used to authenticate when pushing video streams to the platform.
     */
    getStreamKey(
        request: GetStreamKeyRequest,
        callback: (error: ServiceError | null, response: PushStreamKey) => void,
    ): ClientUnaryCall;
    getStreamKey(
        request: GetStreamKeyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: PushStreamKey) => void,
    ): ClientUnaryCall;
    getStreamKey(
        request: GetStreamKeyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: PushStreamKey) => void,
    ): ClientUnaryCall;
    /**
     * Regenerates and updates the stream key for a push-type stream line.
     * This is useful for security purposes when the existing key may be compromised.
     */
    updateStreamKey(
        request: UpdateStreamKeyRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateStreamKey(
        request: UpdateStreamKeyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateStreamKey(
        request: UpdateStreamKeyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const StreamLineServiceClient = makeGenericClientConstructor(
    StreamLineServiceService,
    'yandex.cloud.video.v1.StreamLineService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): StreamLineServiceClient;
    service: typeof StreamLineServiceService;
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
