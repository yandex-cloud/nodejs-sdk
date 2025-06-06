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
import { BoolValue } from '../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.video.v1';

export interface GetVideoRequest {
    /** ID of the video. */
    videoId: string;
}

export interface ListVideoRequest {
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
     * Supported logical operators: ["AND", "OR"].
     * Supported string match operators: ["=", "!=", ":"].
     * Operator ":" stands for substring matching.
     * Filter expressions may also contain parentheses to group logical operands.
     * Example: `key1='value' AND (key2!='\'value\'' OR key2:"\"value\"")`
     * Supported fields: ["id", "title", "status", "visibilityStatus"].
     * Both snake_case and camelCase are supported for fields.
     */
    filter: string;
}

export interface ListVideoResponse {
    videos: Video[];
    /** Token for getting the next page. */
    nextPageToken: string;
}

export interface BatchGetVideosRequest {
    /** ID of the channel. */
    channelId: string;
    /** List of requested video IDs. */
    videoIds: string[];
}

export interface BatchGetVideosResponse {
    /** List of videos for channel. */
    videos: Video[];
}

export interface CreateVideoRequest {
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
    /**
     * Automatically publish video after transcoding.
     * Switches visibility status to PUBLISHED.
     */
    autoPublish?: boolean;
    /**
     * Enable advertisement for this video.
     * Default: true.
     * Set explicitly to false to disable advertisements for a specific video.
     */
    enableAd?: boolean;
    /** Custom labels as `` key:value `` pairs. Maximum 64 per resource. */
    labels: { [key: string]: string };
    /** Upload video using the tus protocol. */
    tusd?: VideoTUSDParams | undefined;
    /**
     * Publicly accessible video available for viewing by anyone with the direct link.
     * No additional authorization or access control is applied.
     */
    publicAccess?: VideoPublicAccessParams | undefined;
    /** Checking access rights using url's signature. */
    signUrlAccess?: VideoSignURLAccessParams | undefined;
}

export interface CreateVideoRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface VideoTUSDParams {
    /** File size. */
    fileSize: number;
    /** File name. */
    fileName: string;
}

export interface VideoPublicAccessParams {}

export interface VideoSignURLAccessParams {}

export interface CreateVideoMetadata {
    /** ID of the video. */
    videoId: string;
}

export interface UpdateVideoRequest {
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
    /**
     * Enable advertisement for this video.
     * Default: true.
     * Use this to disable advertisement for a specific video.
     */
    enableAd?: boolean;
    /** Custom labels as `` key:value `` pairs. Maximum 64 per resource. */
    labels: { [key: string]: string };
    /**
     * Publicly accessible video available for viewing by anyone with the direct link.
     * No additional authorization or access control is applied.
     */
    publicAccess?: VideoPublicAccessParams | undefined;
    /** Checking access rights using url's signature. */
    signUrlAccess?: VideoSignURLAccessParams | undefined;
}

export interface UpdateVideoRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateVideoMetadata {
    /** ID of the video. */
    videoId: string;
}

export interface TranscodeVideoRequest {
    /** ID of the video. */
    videoId: string;
    /**
     * Field mask that specifies which transcoding specific fields of the video
     * are going to be updated.
     */
    fieldMask?: FieldMask;
    /** IDs of active manually uploaded video subtitles. */
    subtitleIds: string[];
    /** Video translation settings. */
    translationSettings?: VideoTranslationSettings;
    /** Video summarization settings. */
    summarizationSettings?: VideoSummarizationSettings;
}

export interface VideoTranslationSettings {
    /** Translation settings for each track. */
    tracks: VideoTranslationSettings_TranslationTrack[];
}

export interface VideoTranslationSettings_TranslationTrack {
    /** Input track settings. */
    inputTrack?: VideoTranslationSettings_InputTrack;
    /** Settings for target subtitle tracks. */
    subtitles: VideoTranslationSettings_SubtitleTrack[];
    /** Settings for target audio tracks. */
    audio: VideoTranslationSettings_AudioTrack[];
}

export interface VideoTranslationSettings_InputTrack {
    /** Input audio track index (one-based). */
    trackIndex: number;
    /**
     * Source track language in any of the following formats:
     * * three-letter code according to ISO 639-2/T, ISO 639-2/B, or ISO 639-3
     * * two-letter code according to ISO 639-1
     * Track language will be deduced automatically if not provided.
     * In the latter case the deduction accuracy is not guaranteed.
     * For better performance please do specify the source track language when possible.
     */
    srcLang: string;
}

export interface VideoTranslationSettings_SubtitleTrack {
    /**
     * Target language in any of the following formats:
     * * three-letter code according to ISO 639-2/T, ISO 639-2/B, or ISO 639-3
     * * two-letter code according to ISO 639-1
     */
    dstLang: string;
    /** Track label to be displayed on the screen during video playback. */
    label: string;
}

export interface VideoTranslationSettings_AudioTrack {
    /**
     * Target language in any of the following formats:
     * * three-letter code according to ISO 639-2/T, ISO 639-2/B, or ISO 639-3
     * * two-letter code according to ISO 639-1
     */
    dstLang: string;
    /** Track label to be displayed on the screen during video playback. */
    label: string;
}

export interface VideoSummarizationSettings {
    /** Summarization settings for each track. */
    tracks: VideoSummarizationSettings_SummarizationTrack[];
    /**
     * Summarize all available tracks.
     * If enabled, `tracks` parameter is ignored.
     * Enables automatic source language deduction for each track
     * and thus may lead to performance degradation.
     */
    processAllTracks: boolean;
}

export interface VideoSummarizationSettings_SummarizationTrack {
    /** Input track settings. */
    inputTrack?: VideoSummarizationSettings_InputTrack;
}

export interface VideoSummarizationSettings_InputTrack {
    /** Input audio track index (one-based). */
    trackIndex: number;
    /**
     * Source track language (three-letter code according to ISO 639-2/T, ISO 639-2/B, or ISO 639-3).
     * It will be deduced automatically if not provided.
     * In the latter case the deduction accuracy is not guaranteed.
     * For better performance please do specify the source track language when possible.
     */
    srcLang: string;
}

export interface TranscodeVideoMetadata {
    /** ID of the video. */
    videoId: string;
}

export interface DeleteVideoRequest {
    /** ID of the video. */
    videoId: string;
}

export interface DeleteVideoMetadata {
    /** ID of the video. */
    videoId: string;
}

export interface BatchDeleteVideosRequest {
    /** ID of the channel. */
    channelId: string;
    /** List of video IDs. */
    videoIds: string[];
}

export interface BatchDeleteVideosMetadata {
    /** List of video IDs. */
    videoIds: string[];
}

export interface PerformVideoActionRequest {
    /** ID of the video. */
    videoId: string;
    publish?: PublishVideoAction | undefined;
    unpublish?: UnpublishVideoAction | undefined;
}

export interface PublishVideoAction {}

export interface UnpublishVideoAction {}

export interface PerformVideoActionMetadata {
    /** ID of the video. */
    videoId: string;
}

export interface GetVideoPlayerURLRequest {
    /** ID of the video. */
    videoId: string;
    params?: VideoPlayerParams;
    /** Optional field, used to set custom url expiration duration for videos with sign_url_access */
    signedUrlExpirationDuration?: Duration;
}

export interface VideoPlayerParams {
    /** If true, a player will be muted by default. */
    mute: boolean;
    /** If true, playback will start automatically. */
    autoplay: boolean;
    /** If true, a player interface will be hidden by default. */
    hidden: boolean;
}

export interface GetVideoPlayerURLResponse {
    /** Direct link to the video. */
    playerUrl: string;
    /** HTML embed code in Iframe format. */
    html: string;
}

export interface BatchGetVideoPlayerURLsRequest {
    /** ID of the channel. */
    channelId: string;
    /** List of requested video IDs. */
    videoIds: string[];
    params?: VideoPlayerParams;
    /** Optional field, used to set custom url expiration duration for videos with sign_url_access */
    signedUrlExpirationDuration?: Duration;
}

export interface BatchGetVideoPlayerURLsResponse {
    playerUrls: string[];
}

export interface GetVideoManifestsRequest {
    /** ID of the video. */
    videoId: string;
}

export interface GetVideoManifestsResponse {
    manifests: Manifest[];
}

const baseGetVideoRequest: object = { videoId: '' };

export const GetVideoRequest = {
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

const baseListVideoRequest: object = {
    channelId: '',
    pageSize: 0,
    pageToken: '',
    orderBy: '',
    filter: '',
};

export const ListVideoRequest = {
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

const baseListVideoResponse: object = { nextPageToken: '' };

export const ListVideoResponse = {
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

const baseBatchGetVideosRequest: object = { channelId: '', videoIds: '' };

export const BatchGetVideosRequest = {
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

const baseBatchGetVideosResponse: object = {};

export const BatchGetVideosResponse = {
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

const baseCreateVideoRequest: object = {
    channelId: '',
    title: '',
    description: '',
    thumbnailId: '',
    autoTranscode: 0,
};

export const CreateVideoRequest = {
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
        if (message.autoPublish !== undefined) {
            BoolValue.encode({ value: message.autoPublish! }, writer.uint32(58).fork()).ldelim();
        }
        if (message.enableAd !== undefined) {
            BoolValue.encode({ value: message.enableAd! }, writer.uint32(66).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateVideoRequest_LabelsEntry.encode(
                { key: key as any, value },
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
                case 7:
                    message.autoPublish = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.enableAd = BoolValue.decode(reader, reader.uint32()).value;
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
        message.autoPublish =
            object.autoPublish !== undefined && object.autoPublish !== null
                ? Boolean(object.autoPublish)
                : undefined;
        message.enableAd =
            object.enableAd !== undefined && object.enableAd !== null
                ? Boolean(object.enableAd)
                : undefined;
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
        message.autoPublish !== undefined && (obj.autoPublish = message.autoPublish);
        message.enableAd !== undefined && (obj.enableAd = message.enableAd);
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
        message.autoPublish = object.autoPublish ?? undefined;
        message.enableAd = object.enableAd ?? undefined;
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
        message.signUrlAccess =
            object.signUrlAccess !== undefined && object.signUrlAccess !== null
                ? VideoSignURLAccessParams.fromPartial(object.signUrlAccess)
                : undefined;
        return message;
    },
};

const baseCreateVideoRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateVideoRequest_LabelsEntry = {
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

const baseVideoTUSDParams: object = { fileSize: 0, fileName: '' };

export const VideoTUSDParams = {
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

const baseVideoPublicAccessParams: object = {};

export const VideoPublicAccessParams = {
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

const baseVideoSignURLAccessParams: object = {};

export const VideoSignURLAccessParams = {
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

const baseCreateVideoMetadata: object = { videoId: '' };

export const CreateVideoMetadata = {
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

const baseUpdateVideoRequest: object = {
    videoId: '',
    title: '',
    description: '',
    thumbnailId: '',
    autoTranscode: 0,
};

export const UpdateVideoRequest = {
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
        if (message.enableAd !== undefined) {
            BoolValue.encode({ value: message.enableAd! }, writer.uint32(66).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateVideoRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        if (message.publicAccess !== undefined) {
            VideoPublicAccessParams.encode(
                message.publicAccess,
                writer.uint32(16002).fork(),
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
                case 8:
                    message.enableAd = BoolValue.decode(reader, reader.uint32()).value;
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
        message.enableAd =
            object.enableAd !== undefined && object.enableAd !== null
                ? Boolean(object.enableAd)
                : undefined;
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
        message.enableAd !== undefined && (obj.enableAd = message.enableAd);
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
        message.enableAd = object.enableAd ?? undefined;
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
        message.signUrlAccess =
            object.signUrlAccess !== undefined && object.signUrlAccess !== null
                ? VideoSignURLAccessParams.fromPartial(object.signUrlAccess)
                : undefined;
        return message;
    },
};

const baseUpdateVideoRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateVideoRequest_LabelsEntry = {
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

const baseUpdateVideoMetadata: object = { videoId: '' };

export const UpdateVideoMetadata = {
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

const baseTranscodeVideoRequest: object = { videoId: '', subtitleIds: '' };

export const TranscodeVideoRequest = {
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
        if (message.translationSettings !== undefined) {
            VideoTranslationSettings.encode(
                message.translationSettings,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        if (message.summarizationSettings !== undefined) {
            VideoSummarizationSettings.encode(
                message.summarizationSettings,
                writer.uint32(42).fork(),
            ).ldelim();
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
                case 4:
                    message.translationSettings = VideoTranslationSettings.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 5:
                    message.summarizationSettings = VideoSummarizationSettings.decode(
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

    fromJSON(object: any): TranscodeVideoRequest {
        const message = { ...baseTranscodeVideoRequest } as TranscodeVideoRequest;
        message.videoId =
            object.videoId !== undefined && object.videoId !== null ? String(object.videoId) : '';
        message.fieldMask =
            object.fieldMask !== undefined && object.fieldMask !== null
                ? FieldMask.fromJSON(object.fieldMask)
                : undefined;
        message.subtitleIds = (object.subtitleIds ?? []).map((e: any) => String(e));
        message.translationSettings =
            object.translationSettings !== undefined && object.translationSettings !== null
                ? VideoTranslationSettings.fromJSON(object.translationSettings)
                : undefined;
        message.summarizationSettings =
            object.summarizationSettings !== undefined && object.summarizationSettings !== null
                ? VideoSummarizationSettings.fromJSON(object.summarizationSettings)
                : undefined;
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
        message.translationSettings !== undefined &&
            (obj.translationSettings = message.translationSettings
                ? VideoTranslationSettings.toJSON(message.translationSettings)
                : undefined);
        message.summarizationSettings !== undefined &&
            (obj.summarizationSettings = message.summarizationSettings
                ? VideoSummarizationSettings.toJSON(message.summarizationSettings)
                : undefined);
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
        message.translationSettings =
            object.translationSettings !== undefined && object.translationSettings !== null
                ? VideoTranslationSettings.fromPartial(object.translationSettings)
                : undefined;
        message.summarizationSettings =
            object.summarizationSettings !== undefined && object.summarizationSettings !== null
                ? VideoSummarizationSettings.fromPartial(object.summarizationSettings)
                : undefined;
        return message;
    },
};

const baseVideoTranslationSettings: object = {};

export const VideoTranslationSettings = {
    encode(
        message: VideoTranslationSettings,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.tracks) {
            VideoTranslationSettings_TranslationTrack.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): VideoTranslationSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVideoTranslationSettings } as VideoTranslationSettings;
        message.tracks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tracks.push(
                        VideoTranslationSettings_TranslationTrack.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): VideoTranslationSettings {
        const message = { ...baseVideoTranslationSettings } as VideoTranslationSettings;
        message.tracks = (object.tracks ?? []).map((e: any) =>
            VideoTranslationSettings_TranslationTrack.fromJSON(e),
        );
        return message;
    },

    toJSON(message: VideoTranslationSettings): unknown {
        const obj: any = {};
        if (message.tracks) {
            obj.tracks = message.tracks.map((e) =>
                e ? VideoTranslationSettings_TranslationTrack.toJSON(e) : undefined,
            );
        } else {
            obj.tracks = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<VideoTranslationSettings>, I>>(
        object: I,
    ): VideoTranslationSettings {
        const message = { ...baseVideoTranslationSettings } as VideoTranslationSettings;
        message.tracks =
            object.tracks?.map((e) => VideoTranslationSettings_TranslationTrack.fromPartial(e)) ||
            [];
        return message;
    },
};

const baseVideoTranslationSettings_TranslationTrack: object = {};

export const VideoTranslationSettings_TranslationTrack = {
    encode(
        message: VideoTranslationSettings_TranslationTrack,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.inputTrack !== undefined) {
            VideoTranslationSettings_InputTrack.encode(
                message.inputTrack,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        for (const v of message.subtitles) {
            VideoTranslationSettings_SubtitleTrack.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.audio) {
            VideoTranslationSettings_AudioTrack.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): VideoTranslationSettings_TranslationTrack {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseVideoTranslationSettings_TranslationTrack,
        } as VideoTranslationSettings_TranslationTrack;
        message.subtitles = [];
        message.audio = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inputTrack = VideoTranslationSettings_InputTrack.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.subtitles.push(
                        VideoTranslationSettings_SubtitleTrack.decode(reader, reader.uint32()),
                    );
                    break;
                case 3:
                    message.audio.push(
                        VideoTranslationSettings_AudioTrack.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): VideoTranslationSettings_TranslationTrack {
        const message = {
            ...baseVideoTranslationSettings_TranslationTrack,
        } as VideoTranslationSettings_TranslationTrack;
        message.inputTrack =
            object.inputTrack !== undefined && object.inputTrack !== null
                ? VideoTranslationSettings_InputTrack.fromJSON(object.inputTrack)
                : undefined;
        message.subtitles = (object.subtitles ?? []).map((e: any) =>
            VideoTranslationSettings_SubtitleTrack.fromJSON(e),
        );
        message.audio = (object.audio ?? []).map((e: any) =>
            VideoTranslationSettings_AudioTrack.fromJSON(e),
        );
        return message;
    },

    toJSON(message: VideoTranslationSettings_TranslationTrack): unknown {
        const obj: any = {};
        message.inputTrack !== undefined &&
            (obj.inputTrack = message.inputTrack
                ? VideoTranslationSettings_InputTrack.toJSON(message.inputTrack)
                : undefined);
        if (message.subtitles) {
            obj.subtitles = message.subtitles.map((e) =>
                e ? VideoTranslationSettings_SubtitleTrack.toJSON(e) : undefined,
            );
        } else {
            obj.subtitles = [];
        }
        if (message.audio) {
            obj.audio = message.audio.map((e) =>
                e ? VideoTranslationSettings_AudioTrack.toJSON(e) : undefined,
            );
        } else {
            obj.audio = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<VideoTranslationSettings_TranslationTrack>, I>>(
        object: I,
    ): VideoTranslationSettings_TranslationTrack {
        const message = {
            ...baseVideoTranslationSettings_TranslationTrack,
        } as VideoTranslationSettings_TranslationTrack;
        message.inputTrack =
            object.inputTrack !== undefined && object.inputTrack !== null
                ? VideoTranslationSettings_InputTrack.fromPartial(object.inputTrack)
                : undefined;
        message.subtitles =
            object.subtitles?.map((e) => VideoTranslationSettings_SubtitleTrack.fromPartial(e)) ||
            [];
        message.audio =
            object.audio?.map((e) => VideoTranslationSettings_AudioTrack.fromPartial(e)) || [];
        return message;
    },
};

const baseVideoTranslationSettings_InputTrack: object = { trackIndex: 0, srcLang: '' };

export const VideoTranslationSettings_InputTrack = {
    encode(
        message: VideoTranslationSettings_InputTrack,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.trackIndex !== 0) {
            writer.uint32(8).int64(message.trackIndex);
        }
        if (message.srcLang !== '') {
            writer.uint32(18).string(message.srcLang);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): VideoTranslationSettings_InputTrack {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseVideoTranslationSettings_InputTrack,
        } as VideoTranslationSettings_InputTrack;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trackIndex = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.srcLang = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): VideoTranslationSettings_InputTrack {
        const message = {
            ...baseVideoTranslationSettings_InputTrack,
        } as VideoTranslationSettings_InputTrack;
        message.trackIndex =
            object.trackIndex !== undefined && object.trackIndex !== null
                ? Number(object.trackIndex)
                : 0;
        message.srcLang =
            object.srcLang !== undefined && object.srcLang !== null ? String(object.srcLang) : '';
        return message;
    },

    toJSON(message: VideoTranslationSettings_InputTrack): unknown {
        const obj: any = {};
        message.trackIndex !== undefined && (obj.trackIndex = Math.round(message.trackIndex));
        message.srcLang !== undefined && (obj.srcLang = message.srcLang);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<VideoTranslationSettings_InputTrack>, I>>(
        object: I,
    ): VideoTranslationSettings_InputTrack {
        const message = {
            ...baseVideoTranslationSettings_InputTrack,
        } as VideoTranslationSettings_InputTrack;
        message.trackIndex = object.trackIndex ?? 0;
        message.srcLang = object.srcLang ?? '';
        return message;
    },
};

const baseVideoTranslationSettings_SubtitleTrack: object = { dstLang: '', label: '' };

export const VideoTranslationSettings_SubtitleTrack = {
    encode(
        message: VideoTranslationSettings_SubtitleTrack,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.dstLang !== '') {
            writer.uint32(10).string(message.dstLang);
        }
        if (message.label !== '') {
            writer.uint32(18).string(message.label);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): VideoTranslationSettings_SubtitleTrack {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseVideoTranslationSettings_SubtitleTrack,
        } as VideoTranslationSettings_SubtitleTrack;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dstLang = reader.string();
                    break;
                case 2:
                    message.label = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): VideoTranslationSettings_SubtitleTrack {
        const message = {
            ...baseVideoTranslationSettings_SubtitleTrack,
        } as VideoTranslationSettings_SubtitleTrack;
        message.dstLang =
            object.dstLang !== undefined && object.dstLang !== null ? String(object.dstLang) : '';
        message.label =
            object.label !== undefined && object.label !== null ? String(object.label) : '';
        return message;
    },

    toJSON(message: VideoTranslationSettings_SubtitleTrack): unknown {
        const obj: any = {};
        message.dstLang !== undefined && (obj.dstLang = message.dstLang);
        message.label !== undefined && (obj.label = message.label);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<VideoTranslationSettings_SubtitleTrack>, I>>(
        object: I,
    ): VideoTranslationSettings_SubtitleTrack {
        const message = {
            ...baseVideoTranslationSettings_SubtitleTrack,
        } as VideoTranslationSettings_SubtitleTrack;
        message.dstLang = object.dstLang ?? '';
        message.label = object.label ?? '';
        return message;
    },
};

const baseVideoTranslationSettings_AudioTrack: object = { dstLang: '', label: '' };

export const VideoTranslationSettings_AudioTrack = {
    encode(
        message: VideoTranslationSettings_AudioTrack,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.dstLang !== '') {
            writer.uint32(10).string(message.dstLang);
        }
        if (message.label !== '') {
            writer.uint32(18).string(message.label);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): VideoTranslationSettings_AudioTrack {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseVideoTranslationSettings_AudioTrack,
        } as VideoTranslationSettings_AudioTrack;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dstLang = reader.string();
                    break;
                case 2:
                    message.label = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): VideoTranslationSettings_AudioTrack {
        const message = {
            ...baseVideoTranslationSettings_AudioTrack,
        } as VideoTranslationSettings_AudioTrack;
        message.dstLang =
            object.dstLang !== undefined && object.dstLang !== null ? String(object.dstLang) : '';
        message.label =
            object.label !== undefined && object.label !== null ? String(object.label) : '';
        return message;
    },

    toJSON(message: VideoTranslationSettings_AudioTrack): unknown {
        const obj: any = {};
        message.dstLang !== undefined && (obj.dstLang = message.dstLang);
        message.label !== undefined && (obj.label = message.label);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<VideoTranslationSettings_AudioTrack>, I>>(
        object: I,
    ): VideoTranslationSettings_AudioTrack {
        const message = {
            ...baseVideoTranslationSettings_AudioTrack,
        } as VideoTranslationSettings_AudioTrack;
        message.dstLang = object.dstLang ?? '';
        message.label = object.label ?? '';
        return message;
    },
};

const baseVideoSummarizationSettings: object = { processAllTracks: false };

export const VideoSummarizationSettings = {
    encode(
        message: VideoSummarizationSettings,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.tracks) {
            VideoSummarizationSettings_SummarizationTrack.encode(
                v!,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.processAllTracks === true) {
            writer.uint32(24).bool(message.processAllTracks);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): VideoSummarizationSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVideoSummarizationSettings } as VideoSummarizationSettings;
        message.tracks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.tracks.push(
                        VideoSummarizationSettings_SummarizationTrack.decode(
                            reader,
                            reader.uint32(),
                        ),
                    );
                    break;
                case 3:
                    message.processAllTracks = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): VideoSummarizationSettings {
        const message = { ...baseVideoSummarizationSettings } as VideoSummarizationSettings;
        message.tracks = (object.tracks ?? []).map((e: any) =>
            VideoSummarizationSettings_SummarizationTrack.fromJSON(e),
        );
        message.processAllTracks =
            object.processAllTracks !== undefined && object.processAllTracks !== null
                ? Boolean(object.processAllTracks)
                : false;
        return message;
    },

    toJSON(message: VideoSummarizationSettings): unknown {
        const obj: any = {};
        if (message.tracks) {
            obj.tracks = message.tracks.map((e) =>
                e ? VideoSummarizationSettings_SummarizationTrack.toJSON(e) : undefined,
            );
        } else {
            obj.tracks = [];
        }
        message.processAllTracks !== undefined && (obj.processAllTracks = message.processAllTracks);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<VideoSummarizationSettings>, I>>(
        object: I,
    ): VideoSummarizationSettings {
        const message = { ...baseVideoSummarizationSettings } as VideoSummarizationSettings;
        message.tracks =
            object.tracks?.map((e) =>
                VideoSummarizationSettings_SummarizationTrack.fromPartial(e),
            ) || [];
        message.processAllTracks = object.processAllTracks ?? false;
        return message;
    },
};

const baseVideoSummarizationSettings_SummarizationTrack: object = {};

export const VideoSummarizationSettings_SummarizationTrack = {
    encode(
        message: VideoSummarizationSettings_SummarizationTrack,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.inputTrack !== undefined) {
            VideoSummarizationSettings_InputTrack.encode(
                message.inputTrack,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): VideoSummarizationSettings_SummarizationTrack {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseVideoSummarizationSettings_SummarizationTrack,
        } as VideoSummarizationSettings_SummarizationTrack;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inputTrack = VideoSummarizationSettings_InputTrack.decode(
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

    fromJSON(object: any): VideoSummarizationSettings_SummarizationTrack {
        const message = {
            ...baseVideoSummarizationSettings_SummarizationTrack,
        } as VideoSummarizationSettings_SummarizationTrack;
        message.inputTrack =
            object.inputTrack !== undefined && object.inputTrack !== null
                ? VideoSummarizationSettings_InputTrack.fromJSON(object.inputTrack)
                : undefined;
        return message;
    },

    toJSON(message: VideoSummarizationSettings_SummarizationTrack): unknown {
        const obj: any = {};
        message.inputTrack !== undefined &&
            (obj.inputTrack = message.inputTrack
                ? VideoSummarizationSettings_InputTrack.toJSON(message.inputTrack)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<VideoSummarizationSettings_SummarizationTrack>, I>>(
        object: I,
    ): VideoSummarizationSettings_SummarizationTrack {
        const message = {
            ...baseVideoSummarizationSettings_SummarizationTrack,
        } as VideoSummarizationSettings_SummarizationTrack;
        message.inputTrack =
            object.inputTrack !== undefined && object.inputTrack !== null
                ? VideoSummarizationSettings_InputTrack.fromPartial(object.inputTrack)
                : undefined;
        return message;
    },
};

const baseVideoSummarizationSettings_InputTrack: object = { trackIndex: 0, srcLang: '' };

export const VideoSummarizationSettings_InputTrack = {
    encode(
        message: VideoSummarizationSettings_InputTrack,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.trackIndex !== 0) {
            writer.uint32(8).int64(message.trackIndex);
        }
        if (message.srcLang !== '') {
            writer.uint32(18).string(message.srcLang);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): VideoSummarizationSettings_InputTrack {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseVideoSummarizationSettings_InputTrack,
        } as VideoSummarizationSettings_InputTrack;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trackIndex = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.srcLang = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): VideoSummarizationSettings_InputTrack {
        const message = {
            ...baseVideoSummarizationSettings_InputTrack,
        } as VideoSummarizationSettings_InputTrack;
        message.trackIndex =
            object.trackIndex !== undefined && object.trackIndex !== null
                ? Number(object.trackIndex)
                : 0;
        message.srcLang =
            object.srcLang !== undefined && object.srcLang !== null ? String(object.srcLang) : '';
        return message;
    },

    toJSON(message: VideoSummarizationSettings_InputTrack): unknown {
        const obj: any = {};
        message.trackIndex !== undefined && (obj.trackIndex = Math.round(message.trackIndex));
        message.srcLang !== undefined && (obj.srcLang = message.srcLang);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<VideoSummarizationSettings_InputTrack>, I>>(
        object: I,
    ): VideoSummarizationSettings_InputTrack {
        const message = {
            ...baseVideoSummarizationSettings_InputTrack,
        } as VideoSummarizationSettings_InputTrack;
        message.trackIndex = object.trackIndex ?? 0;
        message.srcLang = object.srcLang ?? '';
        return message;
    },
};

const baseTranscodeVideoMetadata: object = { videoId: '' };

export const TranscodeVideoMetadata = {
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

const baseDeleteVideoRequest: object = { videoId: '' };

export const DeleteVideoRequest = {
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

const baseDeleteVideoMetadata: object = { videoId: '' };

export const DeleteVideoMetadata = {
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

const baseBatchDeleteVideosRequest: object = { channelId: '', videoIds: '' };

export const BatchDeleteVideosRequest = {
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

const baseBatchDeleteVideosMetadata: object = { videoIds: '' };

export const BatchDeleteVideosMetadata = {
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

const basePerformVideoActionRequest: object = { videoId: '' };

export const PerformVideoActionRequest = {
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

const basePublishVideoAction: object = {};

export const PublishVideoAction = {
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

const baseUnpublishVideoAction: object = {};

export const UnpublishVideoAction = {
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

const basePerformVideoActionMetadata: object = { videoId: '' };

export const PerformVideoActionMetadata = {
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

const baseGetVideoPlayerURLRequest: object = { videoId: '' };

export const GetVideoPlayerURLRequest = {
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

const baseVideoPlayerParams: object = { mute: false, autoplay: false, hidden: false };

export const VideoPlayerParams = {
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

const baseGetVideoPlayerURLResponse: object = { playerUrl: '', html: '' };

export const GetVideoPlayerURLResponse = {
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

const baseBatchGetVideoPlayerURLsRequest: object = { channelId: '', videoIds: '' };

export const BatchGetVideoPlayerURLsRequest = {
    encode(
        message: BatchGetVideoPlayerURLsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
        }
        for (const v of message.videoIds) {
            writer.uint32(18).string(v!);
        }
        if (message.params !== undefined) {
            VideoPlayerParams.encode(message.params, writer.uint32(26).fork()).ldelim();
        }
        if (message.signedUrlExpirationDuration !== undefined) {
            Duration.encode(message.signedUrlExpirationDuration, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchGetVideoPlayerURLsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchGetVideoPlayerURLsRequest } as BatchGetVideoPlayerURLsRequest;
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
                case 3:
                    message.params = VideoPlayerParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signedUrlExpirationDuration = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchGetVideoPlayerURLsRequest {
        const message = { ...baseBatchGetVideoPlayerURLsRequest } as BatchGetVideoPlayerURLsRequest;
        message.channelId =
            object.channelId !== undefined && object.channelId !== null
                ? String(object.channelId)
                : '';
        message.videoIds = (object.videoIds ?? []).map((e: any) => String(e));
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

    toJSON(message: BatchGetVideoPlayerURLsRequest): unknown {
        const obj: any = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        if (message.videoIds) {
            obj.videoIds = message.videoIds.map((e) => e);
        } else {
            obj.videoIds = [];
        }
        message.params !== undefined &&
            (obj.params = message.params ? VideoPlayerParams.toJSON(message.params) : undefined);
        message.signedUrlExpirationDuration !== undefined &&
            (obj.signedUrlExpirationDuration = message.signedUrlExpirationDuration
                ? Duration.toJSON(message.signedUrlExpirationDuration)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchGetVideoPlayerURLsRequest>, I>>(
        object: I,
    ): BatchGetVideoPlayerURLsRequest {
        const message = { ...baseBatchGetVideoPlayerURLsRequest } as BatchGetVideoPlayerURLsRequest;
        message.channelId = object.channelId ?? '';
        message.videoIds = object.videoIds?.map((e) => e) || [];
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

const baseBatchGetVideoPlayerURLsResponse: object = { playerUrls: '' };

export const BatchGetVideoPlayerURLsResponse = {
    encode(
        message: BatchGetVideoPlayerURLsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.playerUrls) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchGetVideoPlayerURLsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseBatchGetVideoPlayerURLsResponse,
        } as BatchGetVideoPlayerURLsResponse;
        message.playerUrls = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.playerUrls.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchGetVideoPlayerURLsResponse {
        const message = {
            ...baseBatchGetVideoPlayerURLsResponse,
        } as BatchGetVideoPlayerURLsResponse;
        message.playerUrls = (object.playerUrls ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: BatchGetVideoPlayerURLsResponse): unknown {
        const obj: any = {};
        if (message.playerUrls) {
            obj.playerUrls = message.playerUrls.map((e) => e);
        } else {
            obj.playerUrls = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchGetVideoPlayerURLsResponse>, I>>(
        object: I,
    ): BatchGetVideoPlayerURLsResponse {
        const message = {
            ...baseBatchGetVideoPlayerURLsResponse,
        } as BatchGetVideoPlayerURLsResponse;
        message.playerUrls = object.playerUrls?.map((e) => e) || [];
        return message;
    },
};

const baseGetVideoManifestsRequest: object = { videoId: '' };

export const GetVideoManifestsRequest = {
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

const baseGetVideoManifestsResponse: object = {};

export const GetVideoManifestsResponse = {
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

/** Video management service. */
export const VideoServiceService = {
    /** Get the specific video. */
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
    /** Batch get videos in specific channel. */
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
    /** Batch delete videos. */
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
    /** Perform an action on the video. */
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
    /** Get player url. */
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
    /** Batch get player urls. */
    batchGetPlayerURLs: {
        path: '/yandex.cloud.video.v1.VideoService/BatchGetPlayerURLs',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: BatchGetVideoPlayerURLsRequest) =>
            Buffer.from(BatchGetVideoPlayerURLsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => BatchGetVideoPlayerURLsRequest.decode(value),
        responseSerialize: (value: BatchGetVideoPlayerURLsResponse) =>
            Buffer.from(BatchGetVideoPlayerURLsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => BatchGetVideoPlayerURLsResponse.decode(value),
    },
    /** Get manifest urls. */
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
    /** Get the specific video. */
    get: handleUnaryCall<GetVideoRequest, Video>;
    /** List videos for channel. */
    list: handleUnaryCall<ListVideoRequest, ListVideoResponse>;
    /** Batch get videos in specific channel. */
    batchGet: handleUnaryCall<BatchGetVideosRequest, BatchGetVideosResponse>;
    /** Create video. */
    create: handleUnaryCall<CreateVideoRequest, Operation>;
    /** Update video. */
    update: handleUnaryCall<UpdateVideoRequest, Operation>;
    /** Transcode video. */
    transcode: handleUnaryCall<TranscodeVideoRequest, Operation>;
    /** Delete video. */
    delete: handleUnaryCall<DeleteVideoRequest, Operation>;
    /** Batch delete videos. */
    batchDelete: handleUnaryCall<BatchDeleteVideosRequest, Operation>;
    /** Perform an action on the video. */
    performAction: handleUnaryCall<PerformVideoActionRequest, Operation>;
    /** Get player url. */
    getPlayerURL: handleUnaryCall<GetVideoPlayerURLRequest, GetVideoPlayerURLResponse>;
    /** Batch get player urls. */
    batchGetPlayerURLs: handleUnaryCall<
        BatchGetVideoPlayerURLsRequest,
        BatchGetVideoPlayerURLsResponse
    >;
    /** Get manifest urls. */
    getManifests: handleUnaryCall<GetVideoManifestsRequest, GetVideoManifestsResponse>;
}

export interface VideoServiceClient extends Client {
    /** Get the specific video. */
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
    /** Batch get videos in specific channel. */
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
    /** Batch delete videos. */
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
    /** Perform an action on the video. */
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
    /** Get player url. */
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
    /** Batch get player urls. */
    batchGetPlayerURLs(
        request: BatchGetVideoPlayerURLsRequest,
        callback: (error: ServiceError | null, response: BatchGetVideoPlayerURLsResponse) => void,
    ): ClientUnaryCall;
    batchGetPlayerURLs(
        request: BatchGetVideoPlayerURLsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: BatchGetVideoPlayerURLsResponse) => void,
    ): ClientUnaryCall;
    batchGetPlayerURLs(
        request: BatchGetVideoPlayerURLsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: BatchGetVideoPlayerURLsResponse) => void,
    ): ClientUnaryCall;
    /** Get manifest urls. */
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
