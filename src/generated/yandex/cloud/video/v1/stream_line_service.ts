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
import { StreamLine, PushStreamKey } from '../../../../yandex/cloud/video/v1/stream_line';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.video.v1';

export interface GetStreamLineRequest {
    /** ID of the line. */
    streamLineId: string;
}

export interface ListStreamLinesRequest {
    /** ID of the channel. */
    channelId: string;
    /**
     * The maximum number of the results per page to return.
     * Default value: 100.
     */
    pageSize: number;
    /** Page token for getting the next page of the result. */
    pageToken: string;
    /**
     * By which column the listing should be ordered and in which direction,
     * format is "<field> <order>" (e.g. "createdAt desc").
     * Default: "id asc".
     * Possible fields: ["id", "title", "createdAt", "updatedAt"].
     * Both snake_case and camelCase are supported for fields.
     */
    orderBy: string;
    /**
     * Filter expression that filters resources listed in the response.
     * Expressions are composed of terms connected by logic operators.
     * If value contains spaces or quotes,
     * it should be in quotes (`'` or `"`) with the inner quotes being backslash escaped.
     * Example: "key1='value' AND key2='value'".
     * Supported operators: ["AND", "OR"].
     * Supported fields: ["id", "title"].
     * Both snake_case and camelCase are supported for fields.
     */
    filter: string;
}

export interface ListStreamLinesResponse {
    /** List of lines for channel. */
    streamLines: StreamLine[];
    /** Token for getting the next page. */
    nextPageToken: string;
}

export interface BatchGetStreamLinesRequest {
    /** ID of the channel. */
    channelId: string;
    /** List of requested stream line IDs. */
    streamLineIds: string[];
}

export interface BatchGetStreamLinesResponse {
    /** List of lines for specific channel. */
    streamLines: StreamLine[];
}

export interface CreateStreamLineRequest {
    /** ID of the channel. */
    channelId: string;
    /** Line title. */
    title: string;
    /** ID of the thumbnail. */
    thumbnailId: string;
    /** Custom labels as `` key:value `` pairs. Maximum 64 per resource. */
    labels: { [key: string]: string };
    /** RTMP push input type. */
    rtmpPush?: RTMPPushParams | undefined;
    /** RTMP pull input type. */
    rtmpPull?: RTMPPullParams | undefined;
    /** Manual control of stream. */
    manualLine?: ManualLineParams | undefined;
    /** Automatic control of stream. */
    autoLine?: AutoLineParams | undefined;
}

export interface CreateStreamLineRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateStreamLineMetadata {
    /** ID of the line. */
    streamLineId: string;
}

export interface UpdateStreamLineRequest {
    /** ID of the line. */
    streamLineId: string;
    /** Field mask that specifies which fields of the line are going to be updated. */
    fieldMask?: FieldMask;
    /** Line title. */
    title: string;
    /** ID of the thumbnail. */
    thumbnailId: string;
    /** Custom labels as `` key:value `` pairs. Maximum 64 per resource. */
    labels: { [key: string]: string };
    /** RTMP push input type. */
    rtmpPush?: RTMPPushParams | undefined;
    /** RTMP pull input type. */
    rtmpPull?: RTMPPullParams | undefined;
}

export interface UpdateStreamLineRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateStreamLineMetadata {
    /** ID of the line. */
    streamLineId: string;
}

export interface DeleteStreamLineRequest {
    /** ID of the line. */
    streamLineId: string;
}

export interface DeleteStreamLineMetadata {
    /** ID of the line. */
    streamLineId: string;
}

export interface BatchDeleteStreamLinesRequest {
    /** ID of the channel. */
    channelId: string;
    /** List of line IDs. */
    streamLineIds: string[];
}

export interface BatchDeleteStreamLinesMetadata {
    /** List of line IDs. */
    streamLineIds: string[];
}

export interface PerformLineActionRequest {
    /** ID of the line. */
    streamLineId: string;
    activate?: ActivateAction | undefined;
    deactivate?: DeactivateAction | undefined;
}

export interface PerformLineActionMetadata {
    /** ID of the line. */
    streamLineId: string;
}

export interface RTMPPushParams {}

export interface RTMPPullParams {
    /** URL of a RTMP streaming server. */
    url: string;
}

export interface ManualLineParams {}

export interface AutoLineParams {}

export interface ActivateAction {}

export interface DeactivateAction {}

export interface GetStreamKeyRequest {
    /** ID of the line. */
    streamLineId: string;
}

export interface UpdateStreamKeyRequest {
    /** ID of the line. */
    streamLineId: string;
}

export interface UpdateStreamKeyMetadata {
    /** ID of the line. */
    streamLineId: string;
}

const baseGetStreamLineRequest: object = { streamLineId: '' };

export const GetStreamLineRequest = {
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

export const ListStreamLinesRequest = {
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

export const ListStreamLinesResponse = {
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

export const BatchGetStreamLinesRequest = {
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

export const BatchGetStreamLinesResponse = {
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

const baseCreateStreamLineRequest: object = { channelId: '', title: '', thumbnailId: '' };

export const CreateStreamLineRequest = {
    encode(message: CreateStreamLineRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
        }
        if (message.title !== '') {
            writer.uint32(18).string(message.title);
        }
        if (message.thumbnailId !== '') {
            writer.uint32(26).string(message.thumbnailId);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateStreamLineRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        if (message.rtmpPush !== undefined) {
            RTMPPushParams.encode(message.rtmpPush, writer.uint32(8002).fork()).ldelim();
        }
        if (message.rtmpPull !== undefined) {
            RTMPPullParams.encode(message.rtmpPull, writer.uint32(8018).fork()).ldelim();
        }
        if (message.manualLine !== undefined) {
            ManualLineParams.encode(message.manualLine, writer.uint32(16002).fork()).ldelim();
        }
        if (message.autoLine !== undefined) {
            AutoLineParams.encode(message.autoLine, writer.uint32(16010).fork()).ldelim();
        }
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
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.thumbnailId = reader.string();
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
                case 1000:
                    message.rtmpPush = RTMPPushParams.decode(reader, reader.uint32());
                    break;
                case 1002:
                    message.rtmpPull = RTMPPullParams.decode(reader, reader.uint32());
                    break;
                case 2000:
                    message.manualLine = ManualLineParams.decode(reader, reader.uint32());
                    break;
                case 2001:
                    message.autoLine = AutoLineParams.decode(reader, reader.uint32());
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
        message.channelId =
            object.channelId !== undefined && object.channelId !== null
                ? String(object.channelId)
                : '';
        message.title =
            object.title !== undefined && object.title !== null ? String(object.title) : '';
        message.thumbnailId =
            object.thumbnailId !== undefined && object.thumbnailId !== null
                ? String(object.thumbnailId)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.rtmpPush =
            object.rtmpPush !== undefined && object.rtmpPush !== null
                ? RTMPPushParams.fromJSON(object.rtmpPush)
                : undefined;
        message.rtmpPull =
            object.rtmpPull !== undefined && object.rtmpPull !== null
                ? RTMPPullParams.fromJSON(object.rtmpPull)
                : undefined;
        message.manualLine =
            object.manualLine !== undefined && object.manualLine !== null
                ? ManualLineParams.fromJSON(object.manualLine)
                : undefined;
        message.autoLine =
            object.autoLine !== undefined && object.autoLine !== null
                ? AutoLineParams.fromJSON(object.autoLine)
                : undefined;
        return message;
    },

    toJSON(message: CreateStreamLineRequest): unknown {
        const obj: any = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.title !== undefined && (obj.title = message.title);
        message.thumbnailId !== undefined && (obj.thumbnailId = message.thumbnailId);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.rtmpPush !== undefined &&
            (obj.rtmpPush = message.rtmpPush ? RTMPPushParams.toJSON(message.rtmpPush) : undefined);
        message.rtmpPull !== undefined &&
            (obj.rtmpPull = message.rtmpPull ? RTMPPullParams.toJSON(message.rtmpPull) : undefined);
        message.manualLine !== undefined &&
            (obj.manualLine = message.manualLine
                ? ManualLineParams.toJSON(message.manualLine)
                : undefined);
        message.autoLine !== undefined &&
            (obj.autoLine = message.autoLine ? AutoLineParams.toJSON(message.autoLine) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateStreamLineRequest>, I>>(
        object: I,
    ): CreateStreamLineRequest {
        const message = { ...baseCreateStreamLineRequest } as CreateStreamLineRequest;
        message.channelId = object.channelId ?? '';
        message.title = object.title ?? '';
        message.thumbnailId = object.thumbnailId ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.rtmpPush =
            object.rtmpPush !== undefined && object.rtmpPush !== null
                ? RTMPPushParams.fromPartial(object.rtmpPush)
                : undefined;
        message.rtmpPull =
            object.rtmpPull !== undefined && object.rtmpPull !== null
                ? RTMPPullParams.fromPartial(object.rtmpPull)
                : undefined;
        message.manualLine =
            object.manualLine !== undefined && object.manualLine !== null
                ? ManualLineParams.fromPartial(object.manualLine)
                : undefined;
        message.autoLine =
            object.autoLine !== undefined && object.autoLine !== null
                ? AutoLineParams.fromPartial(object.autoLine)
                : undefined;
        return message;
    },
};

const baseCreateStreamLineRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateStreamLineRequest_LabelsEntry = {
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

export const CreateStreamLineMetadata = {
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

const baseUpdateStreamLineRequest: object = { streamLineId: '', title: '', thumbnailId: '' };

export const UpdateStreamLineRequest = {
    encode(message: UpdateStreamLineRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.streamLineId !== '') {
            writer.uint32(10).string(message.streamLineId);
        }
        if (message.fieldMask !== undefined) {
            FieldMask.encode(message.fieldMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.title !== '') {
            writer.uint32(26).string(message.title);
        }
        if (message.thumbnailId !== '') {
            writer.uint32(34).string(message.thumbnailId);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateStreamLineRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        if (message.rtmpPush !== undefined) {
            RTMPPushParams.encode(message.rtmpPush, writer.uint32(8002).fork()).ldelim();
        }
        if (message.rtmpPull !== undefined) {
            RTMPPullParams.encode(message.rtmpPull, writer.uint32(8018).fork()).ldelim();
        }
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
                case 1:
                    message.streamLineId = reader.string();
                    break;
                case 2:
                    message.fieldMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.title = reader.string();
                    break;
                case 4:
                    message.thumbnailId = reader.string();
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
                case 1000:
                    message.rtmpPush = RTMPPushParams.decode(reader, reader.uint32());
                    break;
                case 1002:
                    message.rtmpPull = RTMPPullParams.decode(reader, reader.uint32());
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
        message.thumbnailId =
            object.thumbnailId !== undefined && object.thumbnailId !== null
                ? String(object.thumbnailId)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.rtmpPush =
            object.rtmpPush !== undefined && object.rtmpPush !== null
                ? RTMPPushParams.fromJSON(object.rtmpPush)
                : undefined;
        message.rtmpPull =
            object.rtmpPull !== undefined && object.rtmpPull !== null
                ? RTMPPullParams.fromJSON(object.rtmpPull)
                : undefined;
        return message;
    },

    toJSON(message: UpdateStreamLineRequest): unknown {
        const obj: any = {};
        message.streamLineId !== undefined && (obj.streamLineId = message.streamLineId);
        message.fieldMask !== undefined &&
            (obj.fieldMask = message.fieldMask ? FieldMask.toJSON(message.fieldMask) : undefined);
        message.title !== undefined && (obj.title = message.title);
        message.thumbnailId !== undefined && (obj.thumbnailId = message.thumbnailId);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.rtmpPush !== undefined &&
            (obj.rtmpPush = message.rtmpPush ? RTMPPushParams.toJSON(message.rtmpPush) : undefined);
        message.rtmpPull !== undefined &&
            (obj.rtmpPull = message.rtmpPull ? RTMPPullParams.toJSON(message.rtmpPull) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateStreamLineRequest>, I>>(
        object: I,
    ): UpdateStreamLineRequest {
        const message = { ...baseUpdateStreamLineRequest } as UpdateStreamLineRequest;
        message.streamLineId = object.streamLineId ?? '';
        message.fieldMask =
            object.fieldMask !== undefined && object.fieldMask !== null
                ? FieldMask.fromPartial(object.fieldMask)
                : undefined;
        message.title = object.title ?? '';
        message.thumbnailId = object.thumbnailId ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.rtmpPush =
            object.rtmpPush !== undefined && object.rtmpPush !== null
                ? RTMPPushParams.fromPartial(object.rtmpPush)
                : undefined;
        message.rtmpPull =
            object.rtmpPull !== undefined && object.rtmpPull !== null
                ? RTMPPullParams.fromPartial(object.rtmpPull)
                : undefined;
        return message;
    },
};

const baseUpdateStreamLineRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateStreamLineRequest_LabelsEntry = {
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

export const UpdateStreamLineMetadata = {
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

export const DeleteStreamLineRequest = {
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

export const DeleteStreamLineMetadata = {
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

export const BatchDeleteStreamLinesRequest = {
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

export const BatchDeleteStreamLinesMetadata = {
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

export const PerformLineActionRequest = {
    encode(
        message: PerformLineActionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.streamLineId !== '') {
            writer.uint32(10).string(message.streamLineId);
        }
        if (message.activate !== undefined) {
            ActivateAction.encode(message.activate, writer.uint32(8002).fork()).ldelim();
        }
        if (message.deactivate !== undefined) {
            DeactivateAction.encode(message.deactivate, writer.uint32(8010).fork()).ldelim();
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
                case 1:
                    message.streamLineId = reader.string();
                    break;
                case 1000:
                    message.activate = ActivateAction.decode(reader, reader.uint32());
                    break;
                case 1001:
                    message.deactivate = DeactivateAction.decode(reader, reader.uint32());
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
        message.streamLineId =
            object.streamLineId !== undefined && object.streamLineId !== null
                ? String(object.streamLineId)
                : '';
        message.activate =
            object.activate !== undefined && object.activate !== null
                ? ActivateAction.fromJSON(object.activate)
                : undefined;
        message.deactivate =
            object.deactivate !== undefined && object.deactivate !== null
                ? DeactivateAction.fromJSON(object.deactivate)
                : undefined;
        return message;
    },

    toJSON(message: PerformLineActionRequest): unknown {
        const obj: any = {};
        message.streamLineId !== undefined && (obj.streamLineId = message.streamLineId);
        message.activate !== undefined &&
            (obj.activate = message.activate ? ActivateAction.toJSON(message.activate) : undefined);
        message.deactivate !== undefined &&
            (obj.deactivate = message.deactivate
                ? DeactivateAction.toJSON(message.deactivate)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PerformLineActionRequest>, I>>(
        object: I,
    ): PerformLineActionRequest {
        const message = { ...basePerformLineActionRequest } as PerformLineActionRequest;
        message.streamLineId = object.streamLineId ?? '';
        message.activate =
            object.activate !== undefined && object.activate !== null
                ? ActivateAction.fromPartial(object.activate)
                : undefined;
        message.deactivate =
            object.deactivate !== undefined && object.deactivate !== null
                ? DeactivateAction.fromPartial(object.deactivate)
                : undefined;
        return message;
    },
};

const basePerformLineActionMetadata: object = { streamLineId: '' };

export const PerformLineActionMetadata = {
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

export const RTMPPushParams = {
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

export const RTMPPullParams = {
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

const baseManualLineParams: object = {};

export const ManualLineParams = {
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

export const AutoLineParams = {
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

export const ActivateAction = {
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

export const DeactivateAction = {
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

export const GetStreamKeyRequest = {
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

export const UpdateStreamKeyRequest = {
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

export const UpdateStreamKeyMetadata = {
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

/** Stream line management service. */
export const StreamLineServiceService = {
    /** Get the specific stream line. */
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
    /** List lines for channel. */
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
    /** Batch get lines for channel. */
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
    /** Create stream line. */
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
    /** Update stream line. */
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
    /** Delete stream line. */
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
    /** Batch delete stream lines. */
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
    /** Perform an action on the line. */
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
    /** Get unique stream key. */
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
    /** Update stream key. */
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
    /** Get the specific stream line. */
    get: handleUnaryCall<GetStreamLineRequest, StreamLine>;
    /** List lines for channel. */
    list: handleUnaryCall<ListStreamLinesRequest, ListStreamLinesResponse>;
    /** Batch get lines for channel. */
    batchGet: handleUnaryCall<BatchGetStreamLinesRequest, BatchGetStreamLinesResponse>;
    /** Create stream line. */
    create: handleUnaryCall<CreateStreamLineRequest, Operation>;
    /** Update stream line. */
    update: handleUnaryCall<UpdateStreamLineRequest, Operation>;
    /** Delete stream line. */
    delete: handleUnaryCall<DeleteStreamLineRequest, Operation>;
    /** Batch delete stream lines. */
    batchDelete: handleUnaryCall<BatchDeleteStreamLinesRequest, Operation>;
    /** Perform an action on the line. */
    performAction: handleUnaryCall<PerformLineActionRequest, Operation>;
    /** Get unique stream key. */
    getStreamKey: handleUnaryCall<GetStreamKeyRequest, PushStreamKey>;
    /** Update stream key. */
    updateStreamKey: handleUnaryCall<UpdateStreamKeyRequest, Operation>;
}

export interface StreamLineServiceClient extends Client {
    /** Get the specific stream line. */
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
    /** List lines for channel. */
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
    /** Batch get lines for channel. */
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
    /** Create stream line. */
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
    /** Update stream line. */
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
    /** Delete stream line. */
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
    /** Batch delete stream lines. */
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
    /** Perform an action on the line. */
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
    /** Get unique stream key. */
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
    /** Update stream key. */
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
