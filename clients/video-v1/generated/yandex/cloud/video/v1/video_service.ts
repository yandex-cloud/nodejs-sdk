/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
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
import {
    AutoTranscode,
    Video,
    autoTranscodeFromJSON,
    autoTranscodeToJSON,
} from '../../../../yandex/cloud/video/v1/video';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Duration } from '../../../../google/protobuf/duration';
import { Manifest } from '../../../../yandex/cloud/video/v1/manifest';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.video.v1';

export interface GetVideoRequest {
    $type: 'yandex.cloud.video.v1.GetVideoRequest';
    /** ID of the video. */
    videoId: string;
}

export interface ListVideoRequest {
    $type: 'yandex.cloud.video.v1.ListVideoRequest';
    /** ID of the channel. */
    channelId: string;
    /** The maximum number of the results per page to return. Default value: 100. */
    pageSize: number;
    /** Page token for getting the next page of the result. */
    pageToken: string;
    /**
     * By which column the listing should be ordered and in which direction,
     * format is "createdAt desc". "id asc" if omitted.
     * Possible fields: ["id", "createdAt", "updatedAt"]
     * Both snake_case and camelCase are supported for fields.
     */
    orderBy: string;
    /**
     * Filter expression that filters resources listed in the response.
     * Expressions are composed of terms connected by logic operators.
     * Value in quotes: `'` or `"`
     * Example: "key1='value' AND key2='value'"
     * Supported operators: ["AND"].
     * Supported fields: ["title", "status", "visibility_status"]
     * Both snake_case and camelCase are supported for fields.
     */
    filter: string;
}

export interface ListVideoResponse {
    $type: 'yandex.cloud.video.v1.ListVideoResponse';
    videos: Video[];
    /** Token for getting the next page. */
    nextPageToken: string;
}

export interface BatchGetVideosRequest {
    $type: 'yandex.cloud.video.v1.BatchGetVideosRequest';
    /** ID of the channel. */
    channelId: string;
    /** List of requested video IDs. */
    videoIds: string[];
}

export interface BatchGetVideosResponse {
    $type: 'yandex.cloud.video.v1.BatchGetVideosResponse';
    /** List of videos for channel. */
    videos: Video[];
}

export interface CreateVideoRequest {
    $type: 'yandex.cloud.video.v1.CreateVideoRequest';
    /** ID of the channel. */
    channelId: string;
    /** Video title. */
    title: string;
    /** Video description. */
    description: string;
    /** ID of the thumbnail. */
    thumbnailId: string;
    /** Auto start transcoding. */
    autoTranscode: AutoTranscode;
    /** Custom labels as `` key:value `` pairs. Maximum 64 per resource. */
    labels: { [key: string]: string };
    /** Upload video using the tus protocol. */
    tusd?: VideoTUSDParams | undefined;
    /** Video is available to everyone. */
    publicAccess?: VideoPublicAccessParams | undefined;
    /** Checking access rights using the authorization system. */
    authSystemAccess?: VideoAuthSystemAccessParams | undefined;
    /** Checking access rights using url's signature. */
    signUrlAccess?: VideoSignURLAccessParams | undefined;
}

export interface CreateVideoRequest_LabelsEntry {
    $type: 'yandex.cloud.video.v1.CreateVideoRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface VideoTUSDParams {
    $type: 'yandex.cloud.video.v1.VideoTUSDParams';
    /** File size. */
    fileSize: number;
    /** File name. */
    fileName: string;
}

export interface VideoPublicAccessParams {
    $type: 'yandex.cloud.video.v1.VideoPublicAccessParams';
}

export interface VideoAuthSystemAccessParams {
    $type: 'yandex.cloud.video.v1.VideoAuthSystemAccessParams';
}

export interface VideoSignURLAccessParams {
    $type: 'yandex.cloud.video.v1.VideoSignURLAccessParams';
}

export interface CreateVideoMetadata {
    $type: 'yandex.cloud.video.v1.CreateVideoMetadata';
    /** ID of the video. */
    videoId: string;
}

export interface UpdateVideoRequest {
    $type: 'yandex.cloud.video.v1.UpdateVideoRequest';
    /** ID of the video. */
    videoId: string;
    /** Field mask that specifies which fields of the video are going to be updated. */
    fieldMask?: FieldMask;
    /** Video title. */
    title: string;
    /** Video description. */
    description: string;
    /** ID of the thumbnail. */
    thumbnailId: string;
    /** Auto start transcoding. */
    autoTranscode: AutoTranscode;
    /** Custom labels as `` key:value `` pairs. Maximum 64 per resource. */
    labels: { [key: string]: string };
    publicAccess?: VideoPublicAccessParams | undefined;
    authSystemAccess?: VideoAuthSystemAccessParams | undefined;
    signUrlAccess?: VideoSignURLAccessParams | undefined;
}

export interface UpdateVideoRequest_LabelsEntry {
    $type: 'yandex.cloud.video.v1.UpdateVideoRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface UpdateVideoMetadata {
    $type: 'yandex.cloud.video.v1.UpdateVideoMetadata';
    /** ID of the video. */
    videoId: string;
}

export interface TranscodeVideoRequest {
    $type: 'yandex.cloud.video.v1.TranscodeVideoRequest';
    /** ID of the video. */
    videoId: string;
    /**
     * Field mask that specifies which transcoding specific fields of the video
     * are going to be updated.
     */
    fieldMask?: FieldMask;
    /** IDs of active video subtitles. */
    subtitleIds: string[];
}

export interface TranscodeVideoMetadata {
    $type: 'yandex.cloud.video.v1.TranscodeVideoMetadata';
    /** ID of the video. */
    videoId: string;
}

export interface DeleteVideoRequest {
    $type: 'yandex.cloud.video.v1.DeleteVideoRequest';
    /** ID of the video. */
    videoId: string;
}

export interface DeleteVideoMetadata {
    $type: 'yandex.cloud.video.v1.DeleteVideoMetadata';
    /** ID of the video. */
    videoId: string;
}

export interface BatchDeleteVideosRequest {
    $type: 'yandex.cloud.video.v1.BatchDeleteVideosRequest';
    /** ID of the channel. */
    channelId: string;
    /** List of video IDs. */
    videoIds: string[];
}

export interface BatchDeleteVideosMetadata {
    $type: 'yandex.cloud.video.v1.BatchDeleteVideosMetadata';
    /** List of video IDs. */
    videoIds: string[];
}

export interface PerformVideoActionRequest {
    $type: 'yandex.cloud.video.v1.PerformVideoActionRequest';
    /** ID of the video. */
    videoId: string;
    publish?: PublishVideoAction | undefined;
    unpublish?: UnpublishVideoAction | undefined;
}

export interface PublishVideoAction {
    $type: 'yandex.cloud.video.v1.PublishVideoAction';
}

export interface UnpublishVideoAction {
    $type: 'yandex.cloud.video.v1.UnpublishVideoAction';
}

export interface PerformVideoActionMetadata {
    $type: 'yandex.cloud.video.v1.PerformVideoActionMetadata';
    /** ID of the video. */
    videoId: string;
}

export interface GetVideoPlayerURLRequest {
    $type: 'yandex.cloud.video.v1.GetVideoPlayerURLRequest';
    /** ID of the video. */
    videoId: string;
    params?: VideoPlayerParams;
    /** Optional field, used to set custom url expiration duration for videos with sign_url_access */
    signedUrlExpirationDuration?: Duration;
}

export interface VideoPlayerParams {
    $type: 'yandex.cloud.video.v1.VideoPlayerParams';
    /** If true, a player will be muted by default. */
    mute: boolean;
    /** If true, playback will start automatically. */
    autoplay: boolean;
    /** If true, a player interface will be hidden by default. */
    hidden: boolean;
}

export interface GetVideoPlayerURLResponse {
    $type: 'yandex.cloud.video.v1.GetVideoPlayerURLResponse';
    /** Direct link to the video. */
    playerUrl: string;
    /** HTML embed code in Iframe format. */
    html: string;
}

export interface GetVideoManifestsRequest {
    $type: 'yandex.cloud.video.v1.GetVideoManifestsRequest';
    /** ID of the video. */
    videoId: string;
}

export interface GetVideoManifestsResponse {
    $type: 'yandex.cloud.video.v1.GetVideoManifestsResponse';
    manifests: Manifest[];
}

const baseGetVideoRequest: object = { $type: 'yandex.cloud.video.v1.GetVideoRequest', videoId: '' };

export const GetVideoRequest = {
    $type: 'yandex.cloud.video.v1.GetVideoRequest' as const,

    encode(message: GetVideoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.videoId !== '') {
            writer.uint32(10).string(message.videoId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetVideoRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetVideoRequest } as GetVideoRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.videoId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetVideoRequest {
        const message = { ...baseGetVideoRequest } as GetVideoRequest;
        message.videoId =
            object.videoId !== undefined && object.videoId !== null ? String(object.videoId) : '';
        return message;
    },

    toJSON(message: GetVideoRequest): unknown {
        const obj: any = {};
        message.videoId !== undefined && (obj.videoId = message.videoId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetVideoRequest>, I>>(object: I): GetVideoRequest {
        const message = { ...baseGetVideoRequest } as GetVideoRequest;
        message.videoId = object.videoId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetVideoRequest.$type, GetVideoRequest);

const baseListVideoRequest: object = {
    $type: 'yandex.cloud.video.v1.ListVideoRequest',
    channelId: '',
    pageSize: 0,
    pageToken: '',
    orderBy: '',
    filter: '',
};

export const ListVideoRequest = {
    $type: 'yandex.cloud.video.v1.ListVideoRequest' as const,

    encode(message: ListVideoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListVideoRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListVideoRequest } as ListVideoRequest;
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

    fromJSON(object: any): ListVideoRequest {
        const message = { ...baseListVideoRequest } as ListVideoRequest;
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

    toJSON(message: ListVideoRequest): unknown {
        const obj: any = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListVideoRequest>, I>>(object: I): ListVideoRequest {
        const message = { ...baseListVideoRequest } as ListVideoRequest;
        message.channelId = object.channelId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.orderBy = object.orderBy ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListVideoRequest.$type, ListVideoRequest);

const baseListVideoResponse: object = {
    $type: 'yandex.cloud.video.v1.ListVideoResponse',
    nextPageToken: '',
};

export const ListVideoResponse = {
    $type: 'yandex.cloud.video.v1.ListVideoResponse' as const,

    encode(message: ListVideoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.videos) {
            Video.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(802).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListVideoResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListVideoResponse } as ListVideoResponse;
        message.videos = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.videos.push(Video.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListVideoResponse {
        const message = { ...baseListVideoResponse } as ListVideoResponse;
        message.videos = (object.videos ?? []).map((e: any) => Video.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListVideoResponse): unknown {
        const obj: any = {};
        if (message.videos) {
            obj.videos = message.videos.map((e) => (e ? Video.toJSON(e) : undefined));
        } else {
            obj.videos = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListVideoResponse>, I>>(object: I): ListVideoResponse {
        const message = { ...baseListVideoResponse } as ListVideoResponse;
        message.videos = object.videos?.map((e) => Video.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListVideoResponse.$type, ListVideoResponse);

const baseBatchGetVideosRequest: object = {
    $type: 'yandex.cloud.video.v1.BatchGetVideosRequest',
    channelId: '',
    videoIds: '',
};

export const BatchGetVideosRequest = {
    $type: 'yandex.cloud.video.v1.BatchGetVideosRequest' as const,

    encode(message: BatchGetVideosRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
        }
        for (const v of message.videoIds) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchGetVideosRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchGetVideosRequest } as BatchGetVideosRequest;
        message.videoIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.videoIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchGetVideosRequest {
        const message = { ...baseBatchGetVideosRequest } as BatchGetVideosRequest;
        message.channelId =
            object.channelId !== undefined && object.channelId !== null
                ? String(object.channelId)
                : '';
        message.videoIds = (object.videoIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: BatchGetVideosRequest): unknown {
        const obj: any = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        if (message.videoIds) {
            obj.videoIds = message.videoIds.map((e) => e);
        } else {
            obj.videoIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchGetVideosRequest>, I>>(
        object: I,
    ): BatchGetVideosRequest {
        const message = { ...baseBatchGetVideosRequest } as BatchGetVideosRequest;
        message.channelId = object.channelId ?? '';
        message.videoIds = object.videoIds?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(BatchGetVideosRequest.$type, BatchGetVideosRequest);

const baseBatchGetVideosResponse: object = {
    $type: 'yandex.cloud.video.v1.BatchGetVideosResponse',
};

export const BatchGetVideosResponse = {
    $type: 'yandex.cloud.video.v1.BatchGetVideosResponse' as const,

    encode(message: BatchGetVideosResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.videos) {
            Video.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchGetVideosResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchGetVideosResponse } as BatchGetVideosResponse;
        message.videos = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.videos.push(Video.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchGetVideosResponse {
        const message = { ...baseBatchGetVideosResponse } as BatchGetVideosResponse;
        message.videos = (object.videos ?? []).map((e: any) => Video.fromJSON(e));
        return message;
    },

    toJSON(message: BatchGetVideosResponse): unknown {
        const obj: any = {};
        if (message.videos) {
            obj.videos = message.videos.map((e) => (e ? Video.toJSON(e) : undefined));
        } else {
            obj.videos = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchGetVideosResponse>, I>>(
        object: I,
    ): BatchGetVideosResponse {
        const message = { ...baseBatchGetVideosResponse } as BatchGetVideosResponse;
        message.videos = object.videos?.map((e) => Video.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(BatchGetVideosResponse.$type, BatchGetVideosResponse);

const baseCreateVideoRequest: object = {
    $type: 'yandex.cloud.video.v1.CreateVideoRequest',
    channelId: '',
    title: '',
    description: '',
    thumbnailId: '',
    autoTranscode: 0,
};

export const CreateVideoRequest = {
    $type: 'yandex.cloud.video.v1.CreateVideoRequest' as const,

    encode(message: CreateVideoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
        }
        if (message.title !== '') {
            writer.uint32(18).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.thumbnailId !== '') {
            writer.uint32(34).string(message.thumbnailId);
        }
        if (message.autoTranscode !== 0) {
            writer.uint32(40).int32(message.autoTranscode);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateVideoRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.video.v1.CreateVideoRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        if (message.tusd !== undefined) {
            VideoTUSDParams.encode(message.tusd, writer.uint32(8002).fork()).ldelim();
        }
        if (message.publicAccess !== undefined) {
            VideoPublicAccessParams.encode(
                message.publicAccess,
                writer.uint32(16002).fork(),
            ).ldelim();
        }
        if (message.authSystemAccess !== undefined) {
            VideoAuthSystemAccessParams.encode(
                message.authSystemAccess,
                writer.uint32(16018).fork(),
            ).ldelim();
        }
        if (message.signUrlAccess !== undefined) {
            VideoSignURLAccessParams.encode(
                message.signUrlAccess,
                writer.uint32(16026).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateVideoRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateVideoRequest } as CreateVideoRequest;
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
                    message.description = reader.string();
                    break;
                case 4:
                    message.thumbnailId = reader.string();
                    break;
                case 5:
                    message.autoTranscode = reader.int32() as any;
                    break;
                case 200:
                    const entry200 = CreateVideoRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry200.value !== undefined) {
                        message.labels[entry200.key] = entry200.value;
                    }
                    break;
                case 1000:
                    message.tusd = VideoTUSDParams.decode(reader, reader.uint32());
                    break;
                case 2000:
                    message.publicAccess = VideoPublicAccessParams.decode(reader, reader.uint32());
                    break;
                case 2002:
                    message.authSystemAccess = VideoAuthSystemAccessParams.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2003:
                    message.signUrlAccess = VideoSignURLAccessParams.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateVideoRequest {
        const message = { ...baseCreateVideoRequest } as CreateVideoRequest;
        message.channelId =
            object.channelId !== undefined && object.channelId !== null
                ? String(object.channelId)
                : '';
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
        message.autoTranscode =
            object.autoTranscode !== undefined && object.autoTranscode !== null
                ? autoTranscodeFromJSON(object.autoTranscode)
                : 0;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.tusd =
            object.tusd !== undefined && object.tusd !== null
                ? VideoTUSDParams.fromJSON(object.tusd)
                : undefined;
        message.publicAccess =
            object.publicAccess !== undefined && object.publicAccess !== null
                ? VideoPublicAccessParams.fromJSON(object.publicAccess)
                : undefined;
        message.authSystemAccess =
            object.authSystemAccess !== undefined && object.authSystemAccess !== null
                ? VideoAuthSystemAccessParams.fromJSON(object.authSystemAccess)
                : undefined;
        message.signUrlAccess =
            object.signUrlAccess !== undefined && object.signUrlAccess !== null
                ? VideoSignURLAccessParams.fromJSON(object.signUrlAccess)
                : undefined;
        return message;
    },

    toJSON(message: CreateVideoRequest): unknown {
        const obj: any = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.thumbnailId !== undefined && (obj.thumbnailId = message.thumbnailId);
        message.autoTranscode !== undefined &&
            (obj.autoTranscode = autoTranscodeToJSON(message.autoTranscode));
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.tusd !== undefined &&
            (obj.tusd = message.tusd ? VideoTUSDParams.toJSON(message.tusd) : undefined);
        message.publicAccess !== undefined &&
            (obj.publicAccess = message.publicAccess
                ? VideoPublicAccessParams.toJSON(message.publicAccess)
                : undefined);
        message.authSystemAccess !== undefined &&
            (obj.authSystemAccess = message.authSystemAccess
                ? VideoAuthSystemAccessParams.toJSON(message.authSystemAccess)
                : undefined);
        message.signUrlAccess !== undefined &&
            (obj.signUrlAccess = message.signUrlAccess
                ? VideoSignURLAccessParams.toJSON(message.signUrlAccess)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateVideoRequest>, I>>(
        object: I,
    ): CreateVideoRequest {
        const message = { ...baseCreateVideoRequest } as CreateVideoRequest;
        message.channelId = object.channelId ?? '';
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.thumbnailId = object.thumbnailId ?? '';
        message.autoTranscode = object.autoTranscode ?? 0;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.tusd =
            object.tusd !== undefined && object.tusd !== null
                ? VideoTUSDParams.fromPartial(object.tusd)
                : undefined;
        message.publicAccess =
            object.publicAccess !== undefined && object.publicAccess !== null
                ? VideoPublicAccessParams.fromPartial(object.publicAccess)
                : undefined;
        message.authSystemAccess =
            object.authSystemAccess !== undefined && object.authSystemAccess !== null
                ? VideoAuthSystemAccessParams.fromPartial(object.authSystemAccess)
                : undefined;
        message.signUrlAccess =
            object.signUrlAccess !== undefined && object.signUrlAccess !== null
                ? VideoSignURLAccessParams.fromPartial(object.signUrlAccess)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(CreateVideoRequest.$type, CreateVideoRequest);

const baseCreateVideoRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.video.v1.CreateVideoRequest.LabelsEntry',
    key: '',
    value: '',
};

export const CreateVideoRequest_LabelsEntry = {
    $type: 'yandex.cloud.video.v1.CreateVideoRequest.LabelsEntry' as const,

    encode(
        message: CreateVideoRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateVideoRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateVideoRequest_LabelsEntry } as CreateVideoRequest_LabelsEntry;
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

    fromJSON(object: any): CreateVideoRequest_LabelsEntry {
        const message = { ...baseCreateVideoRequest_LabelsEntry } as CreateVideoRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateVideoRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateVideoRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateVideoRequest_LabelsEntry {
        const message = { ...baseCreateVideoRequest_LabelsEntry } as CreateVideoRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(CreateVideoRequest_LabelsEntry.$type, CreateVideoRequest_LabelsEntry);

const baseVideoTUSDParams: object = {
    $type: 'yandex.cloud.video.v1.VideoTUSDParams',
    fileSize: 0,
    fileName: '',
};

export const VideoTUSDParams = {
    $type: 'yandex.cloud.video.v1.VideoTUSDParams' as const,

    encode(message: VideoTUSDParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.fileSize !== 0) {
            writer.uint32(8).int64(message.fileSize);
        }
        if (message.fileName !== '') {
            writer.uint32(18).string(message.fileName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): VideoTUSDParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVideoTUSDParams } as VideoTUSDParams;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fileSize = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.fileName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): VideoTUSDParams {
        const message = { ...baseVideoTUSDParams } as VideoTUSDParams;
        message.fileSize =
            object.fileSize !== undefined && object.fileSize !== null ? Number(object.fileSize) : 0;
        message.fileName =
            object.fileName !== undefined && object.fileName !== null
                ? String(object.fileName)
                : '';
        return message;
    },

    toJSON(message: VideoTUSDParams): unknown {
        const obj: any = {};
        message.fileSize !== undefined && (obj.fileSize = Math.round(message.fileSize));
        message.fileName !== undefined && (obj.fileName = message.fileName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<VideoTUSDParams>, I>>(object: I): VideoTUSDParams {
        const message = { ...baseVideoTUSDParams } as VideoTUSDParams;
        message.fileSize = object.fileSize ?? 0;
        message.fileName = object.fileName ?? '';
        return message;
    },
};

messageTypeRegistry.set(VideoTUSDParams.$type, VideoTUSDParams);

const baseVideoPublicAccessParams: object = {
    $type: 'yandex.cloud.video.v1.VideoPublicAccessParams',
};

export const VideoPublicAccessParams = {
    $type: 'yandex.cloud.video.v1.VideoPublicAccessParams' as const,

    encode(_: VideoPublicAccessParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): VideoPublicAccessParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVideoPublicAccessParams } as VideoPublicAccessParams;
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

    fromJSON(_: any): VideoPublicAccessParams {
        const message = { ...baseVideoPublicAccessParams } as VideoPublicAccessParams;
        return message;
    },

    toJSON(_: VideoPublicAccessParams): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<VideoPublicAccessParams>, I>>(
        _: I,
    ): VideoPublicAccessParams {
        const message = { ...baseVideoPublicAccessParams } as VideoPublicAccessParams;
        return message;
    },
};

messageTypeRegistry.set(VideoPublicAccessParams.$type, VideoPublicAccessParams);

const baseVideoAuthSystemAccessParams: object = {
    $type: 'yandex.cloud.video.v1.VideoAuthSystemAccessParams',
};

export const VideoAuthSystemAccessParams = {
    $type: 'yandex.cloud.video.v1.VideoAuthSystemAccessParams' as const,

    encode(_: VideoAuthSystemAccessParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): VideoAuthSystemAccessParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVideoAuthSystemAccessParams } as VideoAuthSystemAccessParams;
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

    fromJSON(_: any): VideoAuthSystemAccessParams {
        const message = { ...baseVideoAuthSystemAccessParams } as VideoAuthSystemAccessParams;
        return message;
    },

    toJSON(_: VideoAuthSystemAccessParams): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<VideoAuthSystemAccessParams>, I>>(
        _: I,
    ): VideoAuthSystemAccessParams {
        const message = { ...baseVideoAuthSystemAccessParams } as VideoAuthSystemAccessParams;
        return message;
    },
};

messageTypeRegistry.set(VideoAuthSystemAccessParams.$type, VideoAuthSystemAccessParams);

const baseVideoSignURLAccessParams: object = {
    $type: 'yandex.cloud.video.v1.VideoSignURLAccessParams',
};

export const VideoSignURLAccessParams = {
    $type: 'yandex.cloud.video.v1.VideoSignURLAccessParams' as const,

    encode(_: VideoSignURLAccessParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): VideoSignURLAccessParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVideoSignURLAccessParams } as VideoSignURLAccessParams;
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

    fromJSON(_: any): VideoSignURLAccessParams {
        const message = { ...baseVideoSignURLAccessParams } as VideoSignURLAccessParams;
        return message;
    },

    toJSON(_: VideoSignURLAccessParams): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<VideoSignURLAccessParams>, I>>(
        _: I,
    ): VideoSignURLAccessParams {
        const message = { ...baseVideoSignURLAccessParams } as VideoSignURLAccessParams;
        return message;
    },
};

messageTypeRegistry.set(VideoSignURLAccessParams.$type, VideoSignURLAccessParams);

const baseCreateVideoMetadata: object = {
    $type: 'yandex.cloud.video.v1.CreateVideoMetadata',
    videoId: '',
};

export const CreateVideoMetadata = {
    $type: 'yandex.cloud.video.v1.CreateVideoMetadata' as const,

    encode(message: CreateVideoMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.videoId !== '') {
            writer.uint32(10).string(message.videoId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateVideoMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateVideoMetadata } as CreateVideoMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.videoId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateVideoMetadata {
        const message = { ...baseCreateVideoMetadata } as CreateVideoMetadata;
        message.videoId =
            object.videoId !== undefined && object.videoId !== null ? String(object.videoId) : '';
        return message;
    },

    toJSON(message: CreateVideoMetadata): unknown {
        const obj: any = {};
        message.videoId !== undefined && (obj.videoId = message.videoId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateVideoMetadata>, I>>(
        object: I,
    ): CreateVideoMetadata {
        const message = { ...baseCreateVideoMetadata } as CreateVideoMetadata;
        message.videoId = object.videoId ?? '';
        return message;
    },
};

messageTypeRegistry.set(CreateVideoMetadata.$type, CreateVideoMetadata);

const baseUpdateVideoRequest: object = {
    $type: 'yandex.cloud.video.v1.UpdateVideoRequest',
    videoId: '',
    title: '',
    description: '',
    thumbnailId: '',
    autoTranscode: 0,
};

export const UpdateVideoRequest = {
    $type: 'yandex.cloud.video.v1.UpdateVideoRequest' as const,

    encode(message: UpdateVideoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.videoId !== '') {
            writer.uint32(10).string(message.videoId);
        }
        if (message.fieldMask !== undefined) {
            FieldMask.encode(message.fieldMask, writer.uint32(18).fork()).ldelim();
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
        if (message.autoTranscode !== 0) {
            writer.uint32(48).int32(message.autoTranscode);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateVideoRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.video.v1.UpdateVideoRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        if (message.publicAccess !== undefined) {
            VideoPublicAccessParams.encode(
                message.publicAccess,
                writer.uint32(16002).fork(),
            ).ldelim();
        }
        if (message.authSystemAccess !== undefined) {
            VideoAuthSystemAccessParams.encode(
                message.authSystemAccess,
                writer.uint32(16018).fork(),
            ).ldelim();
        }
        if (message.signUrlAccess !== undefined) {
            VideoSignURLAccessParams.encode(
                message.signUrlAccess,
                writer.uint32(16026).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateVideoRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateVideoRequest } as UpdateVideoRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.videoId = reader.string();
                    break;
                case 2:
                    message.fieldMask = FieldMask.decode(reader, reader.uint32());
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
                    message.autoTranscode = reader.int32() as any;
                    break;
                case 200:
                    const entry200 = UpdateVideoRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry200.value !== undefined) {
                        message.labels[entry200.key] = entry200.value;
                    }
                    break;
                case 2000:
                    message.publicAccess = VideoPublicAccessParams.decode(reader, reader.uint32());
                    break;
                case 2002:
                    message.authSystemAccess = VideoAuthSystemAccessParams.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2003:
                    message.signUrlAccess = VideoSignURLAccessParams.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateVideoRequest {
        const message = { ...baseUpdateVideoRequest } as UpdateVideoRequest;
        message.videoId =
            object.videoId !== undefined && object.videoId !== null ? String(object.videoId) : '';
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
        message.autoTranscode =
            object.autoTranscode !== undefined && object.autoTranscode !== null
                ? autoTranscodeFromJSON(object.autoTranscode)
                : 0;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.publicAccess =
            object.publicAccess !== undefined && object.publicAccess !== null
                ? VideoPublicAccessParams.fromJSON(object.publicAccess)
                : undefined;
        message.authSystemAccess =
            object.authSystemAccess !== undefined && object.authSystemAccess !== null
                ? VideoAuthSystemAccessParams.fromJSON(object.authSystemAccess)
                : undefined;
        message.signUrlAccess =
            object.signUrlAccess !== undefined && object.signUrlAccess !== null
                ? VideoSignURLAccessParams.fromJSON(object.signUrlAccess)
                : undefined;
        return message;
    },

    toJSON(message: UpdateVideoRequest): unknown {
        const obj: any = {};
        message.videoId !== undefined && (obj.videoId = message.videoId);
        message.fieldMask !== undefined &&
            (obj.fieldMask = message.fieldMask ? FieldMask.toJSON(message.fieldMask) : undefined);
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.thumbnailId !== undefined && (obj.thumbnailId = message.thumbnailId);
        message.autoTranscode !== undefined &&
            (obj.autoTranscode = autoTranscodeToJSON(message.autoTranscode));
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.publicAccess !== undefined &&
            (obj.publicAccess = message.publicAccess
                ? VideoPublicAccessParams.toJSON(message.publicAccess)
                : undefined);
        message.authSystemAccess !== undefined &&
            (obj.authSystemAccess = message.authSystemAccess
                ? VideoAuthSystemAccessParams.toJSON(message.authSystemAccess)
                : undefined);
        message.signUrlAccess !== undefined &&
            (obj.signUrlAccess = message.signUrlAccess
                ? VideoSignURLAccessParams.toJSON(message.signUrlAccess)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateVideoRequest>, I>>(
        object: I,
    ): UpdateVideoRequest {
        const message = { ...baseUpdateVideoRequest } as UpdateVideoRequest;
        message.videoId = object.videoId ?? '';
        message.fieldMask =
            object.fieldMask !== undefined && object.fieldMask !== null
                ? FieldMask.fromPartial(object.fieldMask)
                : undefined;
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.thumbnailId = object.thumbnailId ?? '';
        message.autoTranscode = object.autoTranscode ?? 0;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.publicAccess =
            object.publicAccess !== undefined && object.publicAccess !== null
                ? VideoPublicAccessParams.fromPartial(object.publicAccess)
                : undefined;
        message.authSystemAccess =
            object.authSystemAccess !== undefined && object.authSystemAccess !== null
                ? VideoAuthSystemAccessParams.fromPartial(object.authSystemAccess)
                : undefined;
        message.signUrlAccess =
            object.signUrlAccess !== undefined && object.signUrlAccess !== null
                ? VideoSignURLAccessParams.fromPartial(object.signUrlAccess)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(UpdateVideoRequest.$type, UpdateVideoRequest);

const baseUpdateVideoRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.video.v1.UpdateVideoRequest.LabelsEntry',
    key: '',
    value: '',
};

export const UpdateVideoRequest_LabelsEntry = {
    $type: 'yandex.cloud.video.v1.UpdateVideoRequest.LabelsEntry' as const,

    encode(
        message: UpdateVideoRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateVideoRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateVideoRequest_LabelsEntry } as UpdateVideoRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateVideoRequest_LabelsEntry {
        const message = { ...baseUpdateVideoRequest_LabelsEntry } as UpdateVideoRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateVideoRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateVideoRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateVideoRequest_LabelsEntry {
        const message = { ...baseUpdateVideoRequest_LabelsEntry } as UpdateVideoRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(UpdateVideoRequest_LabelsEntry.$type, UpdateVideoRequest_LabelsEntry);

const baseUpdateVideoMetadata: object = {
    $type: 'yandex.cloud.video.v1.UpdateVideoMetadata',
    videoId: '',
};

export const UpdateVideoMetadata = {
    $type: 'yandex.cloud.video.v1.UpdateVideoMetadata' as const,

    encode(message: UpdateVideoMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.videoId !== '') {
            writer.uint32(10).string(message.videoId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateVideoMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateVideoMetadata } as UpdateVideoMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.videoId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateVideoMetadata {
        const message = { ...baseUpdateVideoMetadata } as UpdateVideoMetadata;
        message.videoId =
            object.videoId !== undefined && object.videoId !== null ? String(object.videoId) : '';
        return message;
    },

    toJSON(message: UpdateVideoMetadata): unknown {
        const obj: any = {};
        message.videoId !== undefined && (obj.videoId = message.videoId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateVideoMetadata>, I>>(
        object: I,
    ): UpdateVideoMetadata {
        const message = { ...baseUpdateVideoMetadata } as UpdateVideoMetadata;
        message.videoId = object.videoId ?? '';
        return message;
    },
};

messageTypeRegistry.set(UpdateVideoMetadata.$type, UpdateVideoMetadata);

const baseTranscodeVideoRequest: object = {
    $type: 'yandex.cloud.video.v1.TranscodeVideoRequest',
    videoId: '',
    subtitleIds: '',
};

export const TranscodeVideoRequest = {
    $type: 'yandex.cloud.video.v1.TranscodeVideoRequest' as const,

    encode(message: TranscodeVideoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.videoId !== '') {
            writer.uint32(10).string(message.videoId);
        }
        if (message.fieldMask !== undefined) {
            FieldMask.encode(message.fieldMask, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.subtitleIds) {
            writer.uint32(26).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TranscodeVideoRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTranscodeVideoRequest } as TranscodeVideoRequest;
        message.subtitleIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.videoId = reader.string();
                    break;
                case 2:
                    message.fieldMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.subtitleIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TranscodeVideoRequest {
        const message = { ...baseTranscodeVideoRequest } as TranscodeVideoRequest;
        message.videoId =
            object.videoId !== undefined && object.videoId !== null ? String(object.videoId) : '';
        message.fieldMask =
            object.fieldMask !== undefined && object.fieldMask !== null
                ? FieldMask.fromJSON(object.fieldMask)
                : undefined;
        message.subtitleIds = (object.subtitleIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: TranscodeVideoRequest): unknown {
        const obj: any = {};
        message.videoId !== undefined && (obj.videoId = message.videoId);
        message.fieldMask !== undefined &&
            (obj.fieldMask = message.fieldMask ? FieldMask.toJSON(message.fieldMask) : undefined);
        if (message.subtitleIds) {
            obj.subtitleIds = message.subtitleIds.map((e) => e);
        } else {
            obj.subtitleIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TranscodeVideoRequest>, I>>(
        object: I,
    ): TranscodeVideoRequest {
        const message = { ...baseTranscodeVideoRequest } as TranscodeVideoRequest;
        message.videoId = object.videoId ?? '';
        message.fieldMask =
            object.fieldMask !== undefined && object.fieldMask !== null
                ? FieldMask.fromPartial(object.fieldMask)
                : undefined;
        message.subtitleIds = object.subtitleIds?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(TranscodeVideoRequest.$type, TranscodeVideoRequest);

const baseTranscodeVideoMetadata: object = {
    $type: 'yandex.cloud.video.v1.TranscodeVideoMetadata',
    videoId: '',
};

export const TranscodeVideoMetadata = {
    $type: 'yandex.cloud.video.v1.TranscodeVideoMetadata' as const,

    encode(message: TranscodeVideoMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.videoId !== '') {
            writer.uint32(10).string(message.videoId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TranscodeVideoMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTranscodeVideoMetadata } as TranscodeVideoMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.videoId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TranscodeVideoMetadata {
        const message = { ...baseTranscodeVideoMetadata } as TranscodeVideoMetadata;
        message.videoId =
            object.videoId !== undefined && object.videoId !== null ? String(object.videoId) : '';
        return message;
    },

    toJSON(message: TranscodeVideoMetadata): unknown {
        const obj: any = {};
        message.videoId !== undefined && (obj.videoId = message.videoId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TranscodeVideoMetadata>, I>>(
        object: I,
    ): TranscodeVideoMetadata {
        const message = { ...baseTranscodeVideoMetadata } as TranscodeVideoMetadata;
        message.videoId = object.videoId ?? '';
        return message;
    },
};

messageTypeRegistry.set(TranscodeVideoMetadata.$type, TranscodeVideoMetadata);

const baseDeleteVideoRequest: object = {
    $type: 'yandex.cloud.video.v1.DeleteVideoRequest',
    videoId: '',
};

export const DeleteVideoRequest = {
    $type: 'yandex.cloud.video.v1.DeleteVideoRequest' as const,

    encode(message: DeleteVideoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.videoId !== '') {
            writer.uint32(10).string(message.videoId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteVideoRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteVideoRequest } as DeleteVideoRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.videoId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteVideoRequest {
        const message = { ...baseDeleteVideoRequest } as DeleteVideoRequest;
        message.videoId =
            object.videoId !== undefined && object.videoId !== null ? String(object.videoId) : '';
        return message;
    },

    toJSON(message: DeleteVideoRequest): unknown {
        const obj: any = {};
        message.videoId !== undefined && (obj.videoId = message.videoId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteVideoRequest>, I>>(
        object: I,
    ): DeleteVideoRequest {
        const message = { ...baseDeleteVideoRequest } as DeleteVideoRequest;
        message.videoId = object.videoId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteVideoRequest.$type, DeleteVideoRequest);

const baseDeleteVideoMetadata: object = {
    $type: 'yandex.cloud.video.v1.DeleteVideoMetadata',
    videoId: '',
};

export const DeleteVideoMetadata = {
    $type: 'yandex.cloud.video.v1.DeleteVideoMetadata' as const,

    encode(message: DeleteVideoMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.videoId !== '') {
            writer.uint32(10).string(message.videoId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteVideoMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteVideoMetadata } as DeleteVideoMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.videoId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteVideoMetadata {
        const message = { ...baseDeleteVideoMetadata } as DeleteVideoMetadata;
        message.videoId =
            object.videoId !== undefined && object.videoId !== null ? String(object.videoId) : '';
        return message;
    },

    toJSON(message: DeleteVideoMetadata): unknown {
        const obj: any = {};
        message.videoId !== undefined && (obj.videoId = message.videoId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteVideoMetadata>, I>>(
        object: I,
    ): DeleteVideoMetadata {
        const message = { ...baseDeleteVideoMetadata } as DeleteVideoMetadata;
        message.videoId = object.videoId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteVideoMetadata.$type, DeleteVideoMetadata);

const baseBatchDeleteVideosRequest: object = {
    $type: 'yandex.cloud.video.v1.BatchDeleteVideosRequest',
    channelId: '',
    videoIds: '',
};

export const BatchDeleteVideosRequest = {
    $type: 'yandex.cloud.video.v1.BatchDeleteVideosRequest' as const,

    encode(
        message: BatchDeleteVideosRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
        }
        for (const v of message.videoIds) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchDeleteVideosRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchDeleteVideosRequest } as BatchDeleteVideosRequest;
        message.videoIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.videoIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchDeleteVideosRequest {
        const message = { ...baseBatchDeleteVideosRequest } as BatchDeleteVideosRequest;
        message.channelId =
            object.channelId !== undefined && object.channelId !== null
                ? String(object.channelId)
                : '';
        message.videoIds = (object.videoIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: BatchDeleteVideosRequest): unknown {
        const obj: any = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        if (message.videoIds) {
            obj.videoIds = message.videoIds.map((e) => e);
        } else {
            obj.videoIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchDeleteVideosRequest>, I>>(
        object: I,
    ): BatchDeleteVideosRequest {
        const message = { ...baseBatchDeleteVideosRequest } as BatchDeleteVideosRequest;
        message.channelId = object.channelId ?? '';
        message.videoIds = object.videoIds?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(BatchDeleteVideosRequest.$type, BatchDeleteVideosRequest);

const baseBatchDeleteVideosMetadata: object = {
    $type: 'yandex.cloud.video.v1.BatchDeleteVideosMetadata',
    videoIds: '',
};

export const BatchDeleteVideosMetadata = {
    $type: 'yandex.cloud.video.v1.BatchDeleteVideosMetadata' as const,

    encode(
        message: BatchDeleteVideosMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.videoIds) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchDeleteVideosMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchDeleteVideosMetadata } as BatchDeleteVideosMetadata;
        message.videoIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.videoIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchDeleteVideosMetadata {
        const message = { ...baseBatchDeleteVideosMetadata } as BatchDeleteVideosMetadata;
        message.videoIds = (object.videoIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: BatchDeleteVideosMetadata): unknown {
        const obj: any = {};
        if (message.videoIds) {
            obj.videoIds = message.videoIds.map((e) => e);
        } else {
            obj.videoIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchDeleteVideosMetadata>, I>>(
        object: I,
    ): BatchDeleteVideosMetadata {
        const message = { ...baseBatchDeleteVideosMetadata } as BatchDeleteVideosMetadata;
        message.videoIds = object.videoIds?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(BatchDeleteVideosMetadata.$type, BatchDeleteVideosMetadata);

const basePerformVideoActionRequest: object = {
    $type: 'yandex.cloud.video.v1.PerformVideoActionRequest',
    videoId: '',
};

export const PerformVideoActionRequest = {
    $type: 'yandex.cloud.video.v1.PerformVideoActionRequest' as const,

    encode(
        message: PerformVideoActionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.videoId !== '') {
            writer.uint32(10).string(message.videoId);
        }
        if (message.publish !== undefined) {
            PublishVideoAction.encode(message.publish, writer.uint32(8002).fork()).ldelim();
        }
        if (message.unpublish !== undefined) {
            UnpublishVideoAction.encode(message.unpublish, writer.uint32(8010).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PerformVideoActionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePerformVideoActionRequest } as PerformVideoActionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.videoId = reader.string();
                    break;
                case 1000:
                    message.publish = PublishVideoAction.decode(reader, reader.uint32());
                    break;
                case 1001:
                    message.unpublish = UnpublishVideoAction.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PerformVideoActionRequest {
        const message = { ...basePerformVideoActionRequest } as PerformVideoActionRequest;
        message.videoId =
            object.videoId !== undefined && object.videoId !== null ? String(object.videoId) : '';
        message.publish =
            object.publish !== undefined && object.publish !== null
                ? PublishVideoAction.fromJSON(object.publish)
                : undefined;
        message.unpublish =
            object.unpublish !== undefined && object.unpublish !== null
                ? UnpublishVideoAction.fromJSON(object.unpublish)
                : undefined;
        return message;
    },

    toJSON(message: PerformVideoActionRequest): unknown {
        const obj: any = {};
        message.videoId !== undefined && (obj.videoId = message.videoId);
        message.publish !== undefined &&
            (obj.publish = message.publish
                ? PublishVideoAction.toJSON(message.publish)
                : undefined);
        message.unpublish !== undefined &&
            (obj.unpublish = message.unpublish
                ? UnpublishVideoAction.toJSON(message.unpublish)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PerformVideoActionRequest>, I>>(
        object: I,
    ): PerformVideoActionRequest {
        const message = { ...basePerformVideoActionRequest } as PerformVideoActionRequest;
        message.videoId = object.videoId ?? '';
        message.publish =
            object.publish !== undefined && object.publish !== null
                ? PublishVideoAction.fromPartial(object.publish)
                : undefined;
        message.unpublish =
            object.unpublish !== undefined && object.unpublish !== null
                ? UnpublishVideoAction.fromPartial(object.unpublish)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(PerformVideoActionRequest.$type, PerformVideoActionRequest);

const basePublishVideoAction: object = { $type: 'yandex.cloud.video.v1.PublishVideoAction' };

export const PublishVideoAction = {
    $type: 'yandex.cloud.video.v1.PublishVideoAction' as const,

    encode(_: PublishVideoAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PublishVideoAction {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePublishVideoAction } as PublishVideoAction;
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

    fromJSON(_: any): PublishVideoAction {
        const message = { ...basePublishVideoAction } as PublishVideoAction;
        return message;
    },

    toJSON(_: PublishVideoAction): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PublishVideoAction>, I>>(_: I): PublishVideoAction {
        const message = { ...basePublishVideoAction } as PublishVideoAction;
        return message;
    },
};

messageTypeRegistry.set(PublishVideoAction.$type, PublishVideoAction);

const baseUnpublishVideoAction: object = { $type: 'yandex.cloud.video.v1.UnpublishVideoAction' };

export const UnpublishVideoAction = {
    $type: 'yandex.cloud.video.v1.UnpublishVideoAction' as const,

    encode(_: UnpublishVideoAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UnpublishVideoAction {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUnpublishVideoAction } as UnpublishVideoAction;
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

    fromJSON(_: any): UnpublishVideoAction {
        const message = { ...baseUnpublishVideoAction } as UnpublishVideoAction;
        return message;
    },

    toJSON(_: UnpublishVideoAction): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UnpublishVideoAction>, I>>(_: I): UnpublishVideoAction {
        const message = { ...baseUnpublishVideoAction } as UnpublishVideoAction;
        return message;
    },
};

messageTypeRegistry.set(UnpublishVideoAction.$type, UnpublishVideoAction);

const basePerformVideoActionMetadata: object = {
    $type: 'yandex.cloud.video.v1.PerformVideoActionMetadata',
    videoId: '',
};

export const PerformVideoActionMetadata = {
    $type: 'yandex.cloud.video.v1.PerformVideoActionMetadata' as const,

    encode(
        message: PerformVideoActionMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.videoId !== '') {
            writer.uint32(10).string(message.videoId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PerformVideoActionMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePerformVideoActionMetadata } as PerformVideoActionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.videoId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PerformVideoActionMetadata {
        const message = { ...basePerformVideoActionMetadata } as PerformVideoActionMetadata;
        message.videoId =
            object.videoId !== undefined && object.videoId !== null ? String(object.videoId) : '';
        return message;
    },

    toJSON(message: PerformVideoActionMetadata): unknown {
        const obj: any = {};
        message.videoId !== undefined && (obj.videoId = message.videoId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PerformVideoActionMetadata>, I>>(
        object: I,
    ): PerformVideoActionMetadata {
        const message = { ...basePerformVideoActionMetadata } as PerformVideoActionMetadata;
        message.videoId = object.videoId ?? '';
        return message;
    },
};

messageTypeRegistry.set(PerformVideoActionMetadata.$type, PerformVideoActionMetadata);

const baseGetVideoPlayerURLRequest: object = {
    $type: 'yandex.cloud.video.v1.GetVideoPlayerURLRequest',
    videoId: '',
};

export const GetVideoPlayerURLRequest = {
    $type: 'yandex.cloud.video.v1.GetVideoPlayerURLRequest' as const,

    encode(
        message: GetVideoPlayerURLRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.videoId !== '') {
            writer.uint32(10).string(message.videoId);
        }
        if (message.params !== undefined) {
            VideoPlayerParams.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        if (message.signedUrlExpirationDuration !== undefined) {
            Duration.encode(message.signedUrlExpirationDuration, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetVideoPlayerURLRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetVideoPlayerURLRequest } as GetVideoPlayerURLRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.videoId = reader.string();
                    break;
                case 2:
                    message.params = VideoPlayerParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signedUrlExpirationDuration = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetVideoPlayerURLRequest {
        const message = { ...baseGetVideoPlayerURLRequest } as GetVideoPlayerURLRequest;
        message.videoId =
            object.videoId !== undefined && object.videoId !== null ? String(object.videoId) : '';
        message.params =
            object.params !== undefined && object.params !== null
                ? VideoPlayerParams.fromJSON(object.params)
                : undefined;
        message.signedUrlExpirationDuration =
            object.signedUrlExpirationDuration !== undefined &&
            object.signedUrlExpirationDuration !== null
                ? Duration.fromJSON(object.signedUrlExpirationDuration)
                : undefined;
        return message;
    },

    toJSON(message: GetVideoPlayerURLRequest): unknown {
        const obj: any = {};
        message.videoId !== undefined && (obj.videoId = message.videoId);
        message.params !== undefined &&
            (obj.params = message.params ? VideoPlayerParams.toJSON(message.params) : undefined);
        message.signedUrlExpirationDuration !== undefined &&
            (obj.signedUrlExpirationDuration = message.signedUrlExpirationDuration
                ? Duration.toJSON(message.signedUrlExpirationDuration)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetVideoPlayerURLRequest>, I>>(
        object: I,
    ): GetVideoPlayerURLRequest {
        const message = { ...baseGetVideoPlayerURLRequest } as GetVideoPlayerURLRequest;
        message.videoId = object.videoId ?? '';
        message.params =
            object.params !== undefined && object.params !== null
                ? VideoPlayerParams.fromPartial(object.params)
                : undefined;
        message.signedUrlExpirationDuration =
            object.signedUrlExpirationDuration !== undefined &&
            object.signedUrlExpirationDuration !== null
                ? Duration.fromPartial(object.signedUrlExpirationDuration)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(GetVideoPlayerURLRequest.$type, GetVideoPlayerURLRequest);

const baseVideoPlayerParams: object = {
    $type: 'yandex.cloud.video.v1.VideoPlayerParams',
    mute: false,
    autoplay: false,
    hidden: false,
};

export const VideoPlayerParams = {
    $type: 'yandex.cloud.video.v1.VideoPlayerParams' as const,

    encode(message: VideoPlayerParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mute === true) {
            writer.uint32(8).bool(message.mute);
        }
        if (message.autoplay === true) {
            writer.uint32(16).bool(message.autoplay);
        }
        if (message.hidden === true) {
            writer.uint32(24).bool(message.hidden);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): VideoPlayerParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVideoPlayerParams } as VideoPlayerParams;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mute = reader.bool();
                    break;
                case 2:
                    message.autoplay = reader.bool();
                    break;
                case 3:
                    message.hidden = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): VideoPlayerParams {
        const message = { ...baseVideoPlayerParams } as VideoPlayerParams;
        message.mute =
            object.mute !== undefined && object.mute !== null ? Boolean(object.mute) : false;
        message.autoplay =
            object.autoplay !== undefined && object.autoplay !== null
                ? Boolean(object.autoplay)
                : false;
        message.hidden =
            object.hidden !== undefined && object.hidden !== null ? Boolean(object.hidden) : false;
        return message;
    },

    toJSON(message: VideoPlayerParams): unknown {
        const obj: any = {};
        message.mute !== undefined && (obj.mute = message.mute);
        message.autoplay !== undefined && (obj.autoplay = message.autoplay);
        message.hidden !== undefined && (obj.hidden = message.hidden);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<VideoPlayerParams>, I>>(object: I): VideoPlayerParams {
        const message = { ...baseVideoPlayerParams } as VideoPlayerParams;
        message.mute = object.mute ?? false;
        message.autoplay = object.autoplay ?? false;
        message.hidden = object.hidden ?? false;
        return message;
    },
};

messageTypeRegistry.set(VideoPlayerParams.$type, VideoPlayerParams);

const baseGetVideoPlayerURLResponse: object = {
    $type: 'yandex.cloud.video.v1.GetVideoPlayerURLResponse',
    playerUrl: '',
    html: '',
};

export const GetVideoPlayerURLResponse = {
    $type: 'yandex.cloud.video.v1.GetVideoPlayerURLResponse' as const,

    encode(
        message: GetVideoPlayerURLResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.playerUrl !== '') {
            writer.uint32(10).string(message.playerUrl);
        }
        if (message.html !== '') {
            writer.uint32(18).string(message.html);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetVideoPlayerURLResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetVideoPlayerURLResponse } as GetVideoPlayerURLResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.playerUrl = reader.string();
                    break;
                case 2:
                    message.html = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetVideoPlayerURLResponse {
        const message = { ...baseGetVideoPlayerURLResponse } as GetVideoPlayerURLResponse;
        message.playerUrl =
            object.playerUrl !== undefined && object.playerUrl !== null
                ? String(object.playerUrl)
                : '';
        message.html = object.html !== undefined && object.html !== null ? String(object.html) : '';
        return message;
    },

    toJSON(message: GetVideoPlayerURLResponse): unknown {
        const obj: any = {};
        message.playerUrl !== undefined && (obj.playerUrl = message.playerUrl);
        message.html !== undefined && (obj.html = message.html);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetVideoPlayerURLResponse>, I>>(
        object: I,
    ): GetVideoPlayerURLResponse {
        const message = { ...baseGetVideoPlayerURLResponse } as GetVideoPlayerURLResponse;
        message.playerUrl = object.playerUrl ?? '';
        message.html = object.html ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetVideoPlayerURLResponse.$type, GetVideoPlayerURLResponse);

const baseGetVideoManifestsRequest: object = {
    $type: 'yandex.cloud.video.v1.GetVideoManifestsRequest',
    videoId: '',
};

export const GetVideoManifestsRequest = {
    $type: 'yandex.cloud.video.v1.GetVideoManifestsRequest' as const,

    encode(
        message: GetVideoManifestsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.videoId !== '') {
            writer.uint32(10).string(message.videoId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetVideoManifestsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetVideoManifestsRequest } as GetVideoManifestsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.videoId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetVideoManifestsRequest {
        const message = { ...baseGetVideoManifestsRequest } as GetVideoManifestsRequest;
        message.videoId =
            object.videoId !== undefined && object.videoId !== null ? String(object.videoId) : '';
        return message;
    },

    toJSON(message: GetVideoManifestsRequest): unknown {
        const obj: any = {};
        message.videoId !== undefined && (obj.videoId = message.videoId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetVideoManifestsRequest>, I>>(
        object: I,
    ): GetVideoManifestsRequest {
        const message = { ...baseGetVideoManifestsRequest } as GetVideoManifestsRequest;
        message.videoId = object.videoId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetVideoManifestsRequest.$type, GetVideoManifestsRequest);

const baseGetVideoManifestsResponse: object = {
    $type: 'yandex.cloud.video.v1.GetVideoManifestsResponse',
};

export const GetVideoManifestsResponse = {
    $type: 'yandex.cloud.video.v1.GetVideoManifestsResponse' as const,

    encode(
        message: GetVideoManifestsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.manifests) {
            Manifest.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetVideoManifestsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetVideoManifestsResponse } as GetVideoManifestsResponse;
        message.manifests = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.manifests.push(Manifest.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetVideoManifestsResponse {
        const message = { ...baseGetVideoManifestsResponse } as GetVideoManifestsResponse;
        message.manifests = (object.manifests ?? []).map((e: any) => Manifest.fromJSON(e));
        return message;
    },

    toJSON(message: GetVideoManifestsResponse): unknown {
        const obj: any = {};
        if (message.manifests) {
            obj.manifests = message.manifests.map((e) => (e ? Manifest.toJSON(e) : undefined));
        } else {
            obj.manifests = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetVideoManifestsResponse>, I>>(
        object: I,
    ): GetVideoManifestsResponse {
        const message = { ...baseGetVideoManifestsResponse } as GetVideoManifestsResponse;
        message.manifests = object.manifests?.map((e) => Manifest.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(GetVideoManifestsResponse.$type, GetVideoManifestsResponse);

/** Video management service. */
export const VideoServiceService = {
    /** Returns the specific video. */
    get: {
        path: '/yandex.cloud.video.v1.VideoService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetVideoRequest) =>
            Buffer.from(GetVideoRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetVideoRequest.decode(value),
        responseSerialize: (value: Video) => Buffer.from(Video.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Video.decode(value),
    },
    /** List videos for channel. */
    list: {
        path: '/yandex.cloud.video.v1.VideoService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListVideoRequest) =>
            Buffer.from(ListVideoRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListVideoRequest.decode(value),
        responseSerialize: (value: ListVideoResponse) =>
            Buffer.from(ListVideoResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListVideoResponse.decode(value),
    },
    /** Batch get video in specific channel. */
    batchGet: {
        path: '/yandex.cloud.video.v1.VideoService/BatchGet',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: BatchGetVideosRequest) =>
            Buffer.from(BatchGetVideosRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => BatchGetVideosRequest.decode(value),
        responseSerialize: (value: BatchGetVideosResponse) =>
            Buffer.from(BatchGetVideosResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => BatchGetVideosResponse.decode(value),
    },
    /** Create video. */
    create: {
        path: '/yandex.cloud.video.v1.VideoService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateVideoRequest) =>
            Buffer.from(CreateVideoRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateVideoRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Update video. */
    update: {
        path: '/yandex.cloud.video.v1.VideoService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateVideoRequest) =>
            Buffer.from(UpdateVideoRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateVideoRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Transcode video. */
    transcode: {
        path: '/yandex.cloud.video.v1.VideoService/Transcode',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: TranscodeVideoRequest) =>
            Buffer.from(TranscodeVideoRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => TranscodeVideoRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Delete video. */
    delete: {
        path: '/yandex.cloud.video.v1.VideoService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteVideoRequest) =>
            Buffer.from(DeleteVideoRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteVideoRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Batch delete video. */
    batchDelete: {
        path: '/yandex.cloud.video.v1.VideoService/BatchDelete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: BatchDeleteVideosRequest) =>
            Buffer.from(BatchDeleteVideosRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => BatchDeleteVideosRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Perform an action on the episode. */
    performAction: {
        path: '/yandex.cloud.video.v1.VideoService/PerformAction',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: PerformVideoActionRequest) =>
            Buffer.from(PerformVideoActionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => PerformVideoActionRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Returns url to the player. */
    getPlayerURL: {
        path: '/yandex.cloud.video.v1.VideoService/GetPlayerURL',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetVideoPlayerURLRequest) =>
            Buffer.from(GetVideoPlayerURLRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetVideoPlayerURLRequest.decode(value),
        responseSerialize: (value: GetVideoPlayerURLResponse) =>
            Buffer.from(GetVideoPlayerURLResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetVideoPlayerURLResponse.decode(value),
    },
    /** Returns manifest urls. */
    getManifests: {
        path: '/yandex.cloud.video.v1.VideoService/GetManifests',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetVideoManifestsRequest) =>
            Buffer.from(GetVideoManifestsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetVideoManifestsRequest.decode(value),
        responseSerialize: (value: GetVideoManifestsResponse) =>
            Buffer.from(GetVideoManifestsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetVideoManifestsResponse.decode(value),
    },
} as const;

export interface VideoServiceServer extends UntypedServiceImplementation {
    /** Returns the specific video. */
    get: handleUnaryCall<GetVideoRequest, Video>;
    /** List videos for channel. */
    list: handleUnaryCall<ListVideoRequest, ListVideoResponse>;
    /** Batch get video in specific channel. */
    batchGet: handleUnaryCall<BatchGetVideosRequest, BatchGetVideosResponse>;
    /** Create video. */
    create: handleUnaryCall<CreateVideoRequest, Operation>;
    /** Update video. */
    update: handleUnaryCall<UpdateVideoRequest, Operation>;
    /** Transcode video. */
    transcode: handleUnaryCall<TranscodeVideoRequest, Operation>;
    /** Delete video. */
    delete: handleUnaryCall<DeleteVideoRequest, Operation>;
    /** Batch delete video. */
    batchDelete: handleUnaryCall<BatchDeleteVideosRequest, Operation>;
    /** Perform an action on the episode. */
    performAction: handleUnaryCall<PerformVideoActionRequest, Operation>;
    /** Returns url to the player. */
    getPlayerURL: handleUnaryCall<GetVideoPlayerURLRequest, GetVideoPlayerURLResponse>;
    /** Returns manifest urls. */
    getManifests: handleUnaryCall<GetVideoManifestsRequest, GetVideoManifestsResponse>;
}

export interface VideoServiceClient extends Client {
    /** Returns the specific video. */
    get(
        request: GetVideoRequest,
        callback: (error: ServiceError | null, response: Video) => void,
    ): ClientUnaryCall;
    get(
        request: GetVideoRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Video) => void,
    ): ClientUnaryCall;
    get(
        request: GetVideoRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Video) => void,
    ): ClientUnaryCall;
    /** List videos for channel. */
    list(
        request: ListVideoRequest,
        callback: (error: ServiceError | null, response: ListVideoResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListVideoRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListVideoResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListVideoRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListVideoResponse) => void,
    ): ClientUnaryCall;
    /** Batch get video in specific channel. */
    batchGet(
        request: BatchGetVideosRequest,
        callback: (error: ServiceError | null, response: BatchGetVideosResponse) => void,
    ): ClientUnaryCall;
    batchGet(
        request: BatchGetVideosRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: BatchGetVideosResponse) => void,
    ): ClientUnaryCall;
    batchGet(
        request: BatchGetVideosRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: BatchGetVideosResponse) => void,
    ): ClientUnaryCall;
    /** Create video. */
    create(
        request: CreateVideoRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateVideoRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateVideoRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Update video. */
    update(
        request: UpdateVideoRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateVideoRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateVideoRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Transcode video. */
    transcode(
        request: TranscodeVideoRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    transcode(
        request: TranscodeVideoRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    transcode(
        request: TranscodeVideoRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Delete video. */
    delete(
        request: DeleteVideoRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteVideoRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteVideoRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Batch delete video. */
    batchDelete(
        request: BatchDeleteVideosRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    batchDelete(
        request: BatchDeleteVideosRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    batchDelete(
        request: BatchDeleteVideosRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Perform an action on the episode. */
    performAction(
        request: PerformVideoActionRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    performAction(
        request: PerformVideoActionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    performAction(
        request: PerformVideoActionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Returns url to the player. */
    getPlayerURL(
        request: GetVideoPlayerURLRequest,
        callback: (error: ServiceError | null, response: GetVideoPlayerURLResponse) => void,
    ): ClientUnaryCall;
    getPlayerURL(
        request: GetVideoPlayerURLRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetVideoPlayerURLResponse) => void,
    ): ClientUnaryCall;
    getPlayerURL(
        request: GetVideoPlayerURLRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetVideoPlayerURLResponse) => void,
    ): ClientUnaryCall;
    /** Returns manifest urls. */
    getManifests(
        request: GetVideoManifestsRequest,
        callback: (error: ServiceError | null, response: GetVideoManifestsResponse) => void,
    ): ClientUnaryCall;
    getManifests(
        request: GetVideoManifestsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetVideoManifestsResponse) => void,
    ): ClientUnaryCall;
    getManifests(
        request: GetVideoManifestsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetVideoManifestsResponse) => void,
    ): ClientUnaryCall;
}

export const VideoServiceClient = makeGenericClientConstructor(
    VideoServiceService,
    'yandex.cloud.video.v1.VideoService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): VideoServiceClient;
    service: typeof VideoServiceService;
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
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
              Exclude<keyof I, KeysOfUnion<P> | '$type'>,
              never
          >;

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
