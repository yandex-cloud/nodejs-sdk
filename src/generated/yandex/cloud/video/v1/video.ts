/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Duration } from '../../../../google/protobuf/duration';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { BoolValue } from '../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.video.v1';

/** Enum controlling whether videos are automatically transcoded after upload. */
export enum AutoTranscode {
    /** AUTO_TRANSCODE_UNSPECIFIED - The auto-transcoding setting is not specified. */
    AUTO_TRANSCODE_UNSPECIFIED = 0,
    /** ENABLE - Automatically start transcoding after the video upload is complete. */
    ENABLE = 1,
    /** DISABLE - Do not automatically transcode; requires manual initiation via the Transcode() method. */
    DISABLE = 2,
    UNRECOGNIZED = -1,
}

export function autoTranscodeFromJSON(object: any): AutoTranscode {
    switch (object) {
        case 0:
        case 'AUTO_TRANSCODE_UNSPECIFIED':
            return AutoTranscode.AUTO_TRANSCODE_UNSPECIFIED;
        case 1:
        case 'ENABLE':
            return AutoTranscode.ENABLE;
        case 2:
        case 'DISABLE':
            return AutoTranscode.DISABLE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AutoTranscode.UNRECOGNIZED;
    }
}

export function autoTranscodeToJSON(object: AutoTranscode): string {
    switch (object) {
        case AutoTranscode.AUTO_TRANSCODE_UNSPECIFIED:
            return 'AUTO_TRANSCODE_UNSPECIFIED';
        case AutoTranscode.ENABLE:
            return 'ENABLE';
        case AutoTranscode.DISABLE:
            return 'DISABLE';
        default:
            return 'UNKNOWN';
    }
}

/** Main entity representing a video in the platform. */
export interface Video {
    /**
     * Upload video using the TUS (Tus Resumable Upload Protocol) protocol.
     * @see https://tus.io/
     */
    tusd?: VideoTUSDSource | undefined;
    /**
     * Allows unrestricted public access to the video via direct link.
     * No additional authorization or access control is applied.
     */
    publicAccess?: VideoPublicAccessRights | undefined;
    /** Restricts video access using URL signatures for secure time-limited access. */
    signUrlAccess?: VideoSignURLAccessRights | undefined;
    /** Unique identifier of the video. */
    id: string;
    /** Identifier of the channel where the video is created and managed. */
    channelId: string;
    /** Title of the video displayed to users in interfaces and players. */
    title: string;
    /** Detailed description of the video content and context. */
    description: string;
    /** Identifier of the thumbnail image used to represent the video visually. */
    thumbnailId: string;
    /** Current processing status of the video. */
    status: Video_VideoStatus;
    /** Error message describing the reason for video processing failure, if any. */
    errorMessage: string;
    /** Current visibility status controlling whether the video is publicly available. */
    visibilityStatus: Video_VisibilityStatus;
    /**
     * Total duration of the video.
     * Optional, may be empty until the transcoding result is ready.
     */
    duration?: Duration;
    /**
     * Auto-transcoding setting that controls the video processing workflow.
     * Set ENABLE to automatically initiate transcoding after upload,
     * or DISABLE for manual initiation via the Transcode() method.
     */
    autoTranscode: AutoTranscode;
    /** Identifier of the style preset applied to the video during processing. */
    stylePresetId: string;
    /**
     * Controls the ability to display advertisements for this video.
     * Default: true.
     * Set explicitly to false to disable advertisements for a specific video.
     */
    enableAd?: boolean;
    /** List of identifiers defining the active subtitles available for the video. */
    subtitleIds: string[];
    /** Additional video processing features and their results, such as summarization. */
    features?: VideoFeatures;
    /** Timestamp when the video was initially created in the system. */
    createdAt?: Date;
    /** Timestamp of the last modification to the video or its metadata. */
    updatedAt?: Date;
    /**
     * Custom user-defined labels as `key:value` pairs.
     * Maximum 64 labels per video.
     * Labels can be used for organization, filtering, and metadata purposes.
     */
    labels: { [key: string]: string };
}

/** Current processing status of the video. */
export enum Video_VideoStatus {
    /** VIDEO_STATUS_UNSPECIFIED - The video status is not specified. */
    VIDEO_STATUS_UNSPECIFIED = 0,
    /** WAIT_UPLOADING - The video upload is in progress, waiting for all bytes to be received. */
    WAIT_UPLOADING = 1,
    /** UPLOADED - The video has been fully uploaded and is ready for transcoding. */
    UPLOADED = 2,
    /** PROCESSING - The video is currently being processed. */
    PROCESSING = 4,
    /** READY - The video has been successfully processed and is ready for watching. */
    READY = 5,
    /** ERROR - An error occurred during video processing. */
    ERROR = 7,
    UNRECOGNIZED = -1,
}

export function video_VideoStatusFromJSON(object: any): Video_VideoStatus {
    switch (object) {
        case 0:
        case 'VIDEO_STATUS_UNSPECIFIED':
            return Video_VideoStatus.VIDEO_STATUS_UNSPECIFIED;
        case 1:
        case 'WAIT_UPLOADING':
            return Video_VideoStatus.WAIT_UPLOADING;
        case 2:
        case 'UPLOADED':
            return Video_VideoStatus.UPLOADED;
        case 4:
        case 'PROCESSING':
            return Video_VideoStatus.PROCESSING;
        case 5:
        case 'READY':
            return Video_VideoStatus.READY;
        case 7:
        case 'ERROR':
            return Video_VideoStatus.ERROR;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Video_VideoStatus.UNRECOGNIZED;
    }
}

export function video_VideoStatusToJSON(object: Video_VideoStatus): string {
    switch (object) {
        case Video_VideoStatus.VIDEO_STATUS_UNSPECIFIED:
            return 'VIDEO_STATUS_UNSPECIFIED';
        case Video_VideoStatus.WAIT_UPLOADING:
            return 'WAIT_UPLOADING';
        case Video_VideoStatus.UPLOADED:
            return 'UPLOADED';
        case Video_VideoStatus.PROCESSING:
            return 'PROCESSING';
        case Video_VideoStatus.READY:
            return 'READY';
        case Video_VideoStatus.ERROR:
            return 'ERROR';
        default:
            return 'UNKNOWN';
    }
}

/** Visibility status of the video. */
export enum Video_VisibilityStatus {
    /** VISIBILITY_STATUS_UNSPECIFIED - The visibility status is not specified. */
    VISIBILITY_STATUS_UNSPECIFIED = 0,
    /** PUBLISHED - The video is publicly available, subject to its access permission settings. */
    PUBLISHED = 1,
    /** UNPUBLISHED - The video is available only to administrators. */
    UNPUBLISHED = 2,
    UNRECOGNIZED = -1,
}

export function video_VisibilityStatusFromJSON(object: any): Video_VisibilityStatus {
    switch (object) {
        case 0:
        case 'VISIBILITY_STATUS_UNSPECIFIED':
            return Video_VisibilityStatus.VISIBILITY_STATUS_UNSPECIFIED;
        case 1:
        case 'PUBLISHED':
            return Video_VisibilityStatus.PUBLISHED;
        case 2:
        case 'UNPUBLISHED':
            return Video_VisibilityStatus.UNPUBLISHED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Video_VisibilityStatus.UNRECOGNIZED;
    }
}

export function video_VisibilityStatusToJSON(object: Video_VisibilityStatus): string {
    switch (object) {
        case Video_VisibilityStatus.VISIBILITY_STATUS_UNSPECIFIED:
            return 'VISIBILITY_STATUS_UNSPECIFIED';
        case Video_VisibilityStatus.PUBLISHED:
            return 'PUBLISHED';
        case Video_VisibilityStatus.UNPUBLISHED:
            return 'UNPUBLISHED';
        default:
            return 'UNKNOWN';
    }
}

export interface Video_LabelsEntry {
    key: string;
    value: string;
}

/**
 * Represents a video upload source using the TUS (Tus Resumable Upload Protocol) protocol.
 * This is a push-based upload method where the client pushes data to the server.
 * @see https://tus.io/
 */
export interface VideoTUSDSource {
    /** URL endpoint for uploading the video via the TUS protocol. */
    url: string;
    /** Total size of the uploaded file, in bytes. */
    fileSize: number;
}

/**
 * Represents public access rights for a video.
 * When this access type is set, the video is publicly accessible via direct link.
 */
export interface VideoPublicAccessRights {}

/**
 * Represents access rights controlled by URL signatures.
 * When this access type is set, the video is accessible only via properly signed temporary link.
 */
export interface VideoSignURLAccessRights {}

/** Contains additional processing features and their results for the video. */
export interface VideoFeatures {
    /** Results of the video content summarization process. */
    summary?: VideoFeatures_Summary;
}

/** Status of a feature processing request. */
export enum VideoFeatures_FeatureResult {
    /** FEATURE_RESULT_UNSPECIFIED - The feature result status is not specified. */
    FEATURE_RESULT_UNSPECIFIED = 0,
    /** NOT_REQUESTED - The feature processing has not been requested. */
    NOT_REQUESTED = 1,
    /** PROCESSING - The feature is currently being processed. */
    PROCESSING = 2,
    /** SUCCESS - The feature processing has completed successfully. */
    SUCCESS = 3,
    /** FAILED - The feature processing has failed. */
    FAILED = 4,
    UNRECOGNIZED = -1,
}

export function videoFeatures_FeatureResultFromJSON(object: any): VideoFeatures_FeatureResult {
    switch (object) {
        case 0:
        case 'FEATURE_RESULT_UNSPECIFIED':
            return VideoFeatures_FeatureResult.FEATURE_RESULT_UNSPECIFIED;
        case 1:
        case 'NOT_REQUESTED':
            return VideoFeatures_FeatureResult.NOT_REQUESTED;
        case 2:
        case 'PROCESSING':
            return VideoFeatures_FeatureResult.PROCESSING;
        case 3:
        case 'SUCCESS':
            return VideoFeatures_FeatureResult.SUCCESS;
        case 4:
        case 'FAILED':
            return VideoFeatures_FeatureResult.FAILED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return VideoFeatures_FeatureResult.UNRECOGNIZED;
    }
}

export function videoFeatures_FeatureResultToJSON(object: VideoFeatures_FeatureResult): string {
    switch (object) {
        case VideoFeatures_FeatureResult.FEATURE_RESULT_UNSPECIFIED:
            return 'FEATURE_RESULT_UNSPECIFIED';
        case VideoFeatures_FeatureResult.NOT_REQUESTED:
            return 'NOT_REQUESTED';
        case VideoFeatures_FeatureResult.PROCESSING:
            return 'PROCESSING';
        case VideoFeatures_FeatureResult.SUCCESS:
            return 'SUCCESS';
        case VideoFeatures_FeatureResult.FAILED:
            return 'FAILED';
        default:
            return 'UNKNOWN';
    }
}

/** Contains the results of video summarization. */
export interface VideoFeatures_Summary {
    /** Current status of the summarization process. */
    result: VideoFeatures_FeatureResult;
    /** List of URLs to summarization results for different audio tracks. */
    urls: VideoFeatures_Summary_SummaryURL[];
}

/** Contains a URL to a summarization result for a specific audio track. */
export interface VideoFeatures_Summary_SummaryURL {
    /** URL to the summarization result file. */
    url: string;
    /** Input audio track index (one-based) that was summarized. */
    trackIndex: number;
    /** Source track language represented as a three-letter code according to ISO 639-2/T. */
    srcLang: string;
}

const baseVideo: object = {
    id: '',
    channelId: '',
    title: '',
    description: '',
    thumbnailId: '',
    status: 0,
    errorMessage: '',
    visibilityStatus: 0,
    autoTranscode: 0,
    stylePresetId: '',
    subtitleIds: '',
};

export const Video: {
    encode(message: Video, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Video;
    fromJSON(object: any): Video;
    toJSON(message: Video): unknown;
    fromPartial<I extends Exact<DeepPartial<Video>, I>>(object: I): Video;
} = {
    encode(message: Video, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.tusd !== undefined) {
            VideoTUSDSource.encode(message.tusd, writer.uint32(8002).fork()).ldelim();
        }
        if (message.publicAccess !== undefined) {
            VideoPublicAccessRights.encode(
                message.publicAccess,
                writer.uint32(16002).fork(),
            ).ldelim();
        }
        if (message.signUrlAccess !== undefined) {
            VideoSignURLAccessRights.encode(
                message.signUrlAccess,
                writer.uint32(16026).fork(),
            ).ldelim();
        }
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.channelId !== '') {
            writer.uint32(18).string(message.channelId);
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
        if (message.status !== 0) {
            writer.uint32(48).int32(message.status);
        }
        if (message.errorMessage !== '') {
            writer.uint32(146).string(message.errorMessage);
        }
        if (message.visibilityStatus !== 0) {
            writer.uint32(72).int32(message.visibilityStatus);
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(66).fork()).ldelim();
        }
        if (message.autoTranscode !== 0) {
            writer.uint32(88).int32(message.autoTranscode);
        }
        if (message.stylePresetId !== '') {
            writer.uint32(130).string(message.stylePresetId);
        }
        if (message.enableAd !== undefined) {
            BoolValue.encode({ value: message.enableAd! }, writer.uint32(138).fork()).ldelim();
        }
        for (const v of message.subtitleIds) {
            writer.uint32(98).string(v!);
        }
        if (message.features !== undefined) {
            VideoFeatures.encode(message.features, writer.uint32(106).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(802).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(810).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Video_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Video {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVideo } as Video;
        message.subtitleIds = [];
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1000:
                    message.tusd = VideoTUSDSource.decode(reader, reader.uint32());
                    break;
                case 2000:
                    message.publicAccess = VideoPublicAccessRights.decode(reader, reader.uint32());
                    break;
                case 2003:
                    message.signUrlAccess = VideoSignURLAccessRights.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
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
                case 18:
                    message.errorMessage = reader.string();
                    break;
                case 9:
                    message.visibilityStatus = reader.int32() as any;
                    break;
                case 8:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.autoTranscode = reader.int32() as any;
                    break;
                case 16:
                    message.stylePresetId = reader.string();
                    break;
                case 17:
                    message.enableAd = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.subtitleIds.push(reader.string());
                    break;
                case 13:
                    message.features = VideoFeatures.decode(reader, reader.uint32());
                    break;
                case 100:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 101:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
        message.tusd =
            object.tusd !== undefined && object.tusd !== null
                ? VideoTUSDSource.fromJSON(object.tusd)
                : undefined;
        message.publicAccess =
            object.publicAccess !== undefined && object.publicAccess !== null
                ? VideoPublicAccessRights.fromJSON(object.publicAccess)
                : undefined;
        message.signUrlAccess =
            object.signUrlAccess !== undefined && object.signUrlAccess !== null
                ? VideoSignURLAccessRights.fromJSON(object.signUrlAccess)
                : undefined;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
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
        message.status =
            object.status !== undefined && object.status !== null
                ? video_VideoStatusFromJSON(object.status)
                : 0;
        message.errorMessage =
            object.errorMessage !== undefined && object.errorMessage !== null
                ? String(object.errorMessage)
                : '';
        message.visibilityStatus =
            object.visibilityStatus !== undefined && object.visibilityStatus !== null
                ? video_VisibilityStatusFromJSON(object.visibilityStatus)
                : 0;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromJSON(object.duration)
                : undefined;
        message.autoTranscode =
            object.autoTranscode !== undefined && object.autoTranscode !== null
                ? autoTranscodeFromJSON(object.autoTranscode)
                : 0;
        message.stylePresetId =
            object.stylePresetId !== undefined && object.stylePresetId !== null
                ? String(object.stylePresetId)
                : '';
        message.enableAd =
            object.enableAd !== undefined && object.enableAd !== null
                ? Boolean(object.enableAd)
                : undefined;
        message.subtitleIds = (object.subtitleIds ?? []).map((e: any) => String(e));
        message.features =
            object.features !== undefined && object.features !== null
                ? VideoFeatures.fromJSON(object.features)
                : undefined;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
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

    toJSON(message: Video): unknown {
        const obj: any = {};
        message.tusd !== undefined &&
            (obj.tusd = message.tusd ? VideoTUSDSource.toJSON(message.tusd) : undefined);
        message.publicAccess !== undefined &&
            (obj.publicAccess = message.publicAccess
                ? VideoPublicAccessRights.toJSON(message.publicAccess)
                : undefined);
        message.signUrlAccess !== undefined &&
            (obj.signUrlAccess = message.signUrlAccess
                ? VideoSignURLAccessRights.toJSON(message.signUrlAccess)
                : undefined);
        message.id !== undefined && (obj.id = message.id);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.thumbnailId !== undefined && (obj.thumbnailId = message.thumbnailId);
        message.status !== undefined && (obj.status = video_VideoStatusToJSON(message.status));
        message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
        message.visibilityStatus !== undefined &&
            (obj.visibilityStatus = video_VisibilityStatusToJSON(message.visibilityStatus));
        message.duration !== undefined &&
            (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
        message.autoTranscode !== undefined &&
            (obj.autoTranscode = autoTranscodeToJSON(message.autoTranscode));
        message.stylePresetId !== undefined && (obj.stylePresetId = message.stylePresetId);
        message.enableAd !== undefined && (obj.enableAd = message.enableAd);
        if (message.subtitleIds) {
            obj.subtitleIds = message.subtitleIds.map((e) => e);
        } else {
            obj.subtitleIds = [];
        }
        message.features !== undefined &&
            (obj.features = message.features ? VideoFeatures.toJSON(message.features) : undefined);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
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
        message.tusd =
            object.tusd !== undefined && object.tusd !== null
                ? VideoTUSDSource.fromPartial(object.tusd)
                : undefined;
        message.publicAccess =
            object.publicAccess !== undefined && object.publicAccess !== null
                ? VideoPublicAccessRights.fromPartial(object.publicAccess)
                : undefined;
        message.signUrlAccess =
            object.signUrlAccess !== undefined && object.signUrlAccess !== null
                ? VideoSignURLAccessRights.fromPartial(object.signUrlAccess)
                : undefined;
        message.id = object.id ?? '';
        message.channelId = object.channelId ?? '';
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.thumbnailId = object.thumbnailId ?? '';
        message.status = object.status ?? 0;
        message.errorMessage = object.errorMessage ?? '';
        message.visibilityStatus = object.visibilityStatus ?? 0;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromPartial(object.duration)
                : undefined;
        message.autoTranscode = object.autoTranscode ?? 0;
        message.stylePresetId = object.stylePresetId ?? '';
        message.enableAd = object.enableAd ?? undefined;
        message.subtitleIds = object.subtitleIds?.map((e) => e) || [];
        message.features =
            object.features !== undefined && object.features !== null
                ? VideoFeatures.fromPartial(object.features)
                : undefined;
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
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

const baseVideo_LabelsEntry: object = { key: '', value: '' };

export const Video_LabelsEntry: {
    encode(message: Video_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Video_LabelsEntry;
    fromJSON(object: any): Video_LabelsEntry;
    toJSON(message: Video_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<Video_LabelsEntry>, I>>(object: I): Video_LabelsEntry;
} = {
    encode(message: Video_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
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
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Video_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Video_LabelsEntry>, I>>(object: I): Video_LabelsEntry {
        const message = { ...baseVideo_LabelsEntry } as Video_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseVideoTUSDSource: object = { url: '', fileSize: 0 };

export const VideoTUSDSource: {
    encode(message: VideoTUSDSource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VideoTUSDSource;
    fromJSON(object: any): VideoTUSDSource;
    toJSON(message: VideoTUSDSource): unknown;
    fromPartial<I extends Exact<DeepPartial<VideoTUSDSource>, I>>(object: I): VideoTUSDSource;
} = {
    encode(message: VideoTUSDSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.url !== '') {
            writer.uint32(10).string(message.url);
        }
        if (message.fileSize !== 0) {
            writer.uint32(16).int64(message.fileSize);
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
                case 2:
                    message.fileSize = longToNumber(reader.int64() as Long);
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
        message.url = object.url !== undefined && object.url !== null ? String(object.url) : '';
        message.fileSize =
            object.fileSize !== undefined && object.fileSize !== null ? Number(object.fileSize) : 0;
        return message;
    },

    toJSON(message: VideoTUSDSource): unknown {
        const obj: any = {};
        message.url !== undefined && (obj.url = message.url);
        message.fileSize !== undefined && (obj.fileSize = Math.round(message.fileSize));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<VideoTUSDSource>, I>>(object: I): VideoTUSDSource {
        const message = { ...baseVideoTUSDSource } as VideoTUSDSource;
        message.url = object.url ?? '';
        message.fileSize = object.fileSize ?? 0;
        return message;
    },
};

const baseVideoPublicAccessRights: object = {};

export const VideoPublicAccessRights: {
    encode(message: VideoPublicAccessRights, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VideoPublicAccessRights;
    fromJSON(object: any): VideoPublicAccessRights;
    toJSON(message: VideoPublicAccessRights): unknown;
    fromPartial<I extends Exact<DeepPartial<VideoPublicAccessRights>, I>>(object: I): VideoPublicAccessRights;
} = {
    encode(_: VideoPublicAccessRights, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): VideoPublicAccessRights {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVideoPublicAccessRights } as VideoPublicAccessRights;
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
        const message = { ...baseVideoPublicAccessRights } as VideoPublicAccessRights;
        return message;
    },

    toJSON(_: VideoPublicAccessRights): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<VideoPublicAccessRights>, I>>(
        _: I,
    ): VideoPublicAccessRights {
        const message = { ...baseVideoPublicAccessRights } as VideoPublicAccessRights;
        return message;
    },
};

const baseVideoSignURLAccessRights: object = {};

export const VideoSignURLAccessRights: {
    encode(message: VideoSignURLAccessRights, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VideoSignURLAccessRights;
    fromJSON(object: any): VideoSignURLAccessRights;
    toJSON(message: VideoSignURLAccessRights): unknown;
    fromPartial<I extends Exact<DeepPartial<VideoSignURLAccessRights>, I>>(object: I): VideoSignURLAccessRights;
} = {
    encode(_: VideoSignURLAccessRights, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): VideoSignURLAccessRights {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVideoSignURLAccessRights } as VideoSignURLAccessRights;
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

    fromJSON(_: any): VideoSignURLAccessRights {
        const message = { ...baseVideoSignURLAccessRights } as VideoSignURLAccessRights;
        return message;
    },

    toJSON(_: VideoSignURLAccessRights): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<VideoSignURLAccessRights>, I>>(
        _: I,
    ): VideoSignURLAccessRights {
        const message = { ...baseVideoSignURLAccessRights } as VideoSignURLAccessRights;
        return message;
    },
};

const baseVideoFeatures: object = {};

export const VideoFeatures: {
    encode(message: VideoFeatures, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VideoFeatures;
    fromJSON(object: any): VideoFeatures;
    toJSON(message: VideoFeatures): unknown;
    fromPartial<I extends Exact<DeepPartial<VideoFeatures>, I>>(object: I): VideoFeatures;
} = {
    encode(message: VideoFeatures, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.summary !== undefined) {
            VideoFeatures_Summary.encode(message.summary, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): VideoFeatures {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVideoFeatures } as VideoFeatures;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.summary = VideoFeatures_Summary.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): VideoFeatures {
        const message = { ...baseVideoFeatures } as VideoFeatures;
        message.summary =
            object.summary !== undefined && object.summary !== null
                ? VideoFeatures_Summary.fromJSON(object.summary)
                : undefined;
        return message;
    },

    toJSON(message: VideoFeatures): unknown {
        const obj: any = {};
        message.summary !== undefined &&
            (obj.summary = message.summary
                ? VideoFeatures_Summary.toJSON(message.summary)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<VideoFeatures>, I>>(object: I): VideoFeatures {
        const message = { ...baseVideoFeatures } as VideoFeatures;
        message.summary =
            object.summary !== undefined && object.summary !== null
                ? VideoFeatures_Summary.fromPartial(object.summary)
                : undefined;
        return message;
    },
};

const baseVideoFeatures_Summary: object = { result: 0 };

export const VideoFeatures_Summary: {
    encode(message: VideoFeatures_Summary, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VideoFeatures_Summary;
    fromJSON(object: any): VideoFeatures_Summary;
    toJSON(message: VideoFeatures_Summary): unknown;
    fromPartial<I extends Exact<DeepPartial<VideoFeatures_Summary>, I>>(object: I): VideoFeatures_Summary;
} = {
    encode(message: VideoFeatures_Summary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        for (const v of message.urls) {
            VideoFeatures_Summary_SummaryURL.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): VideoFeatures_Summary {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVideoFeatures_Summary } as VideoFeatures_Summary;
        message.urls = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32() as any;
                    break;
                case 3:
                    message.urls.push(
                        VideoFeatures_Summary_SummaryURL.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): VideoFeatures_Summary {
        const message = { ...baseVideoFeatures_Summary } as VideoFeatures_Summary;
        message.result =
            object.result !== undefined && object.result !== null
                ? videoFeatures_FeatureResultFromJSON(object.result)
                : 0;
        message.urls = (object.urls ?? []).map((e: any) =>
            VideoFeatures_Summary_SummaryURL.fromJSON(e),
        );
        return message;
    },

    toJSON(message: VideoFeatures_Summary): unknown {
        const obj: any = {};
        message.result !== undefined &&
            (obj.result = videoFeatures_FeatureResultToJSON(message.result));
        if (message.urls) {
            obj.urls = message.urls.map((e) =>
                e ? VideoFeatures_Summary_SummaryURL.toJSON(e) : undefined,
            );
        } else {
            obj.urls = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<VideoFeatures_Summary>, I>>(
        object: I,
    ): VideoFeatures_Summary {
        const message = { ...baseVideoFeatures_Summary } as VideoFeatures_Summary;
        message.result = object.result ?? 0;
        message.urls =
            object.urls?.map((e) => VideoFeatures_Summary_SummaryURL.fromPartial(e)) || [];
        return message;
    },
};

const baseVideoFeatures_Summary_SummaryURL: object = { url: '', trackIndex: 0, srcLang: '' };

export const VideoFeatures_Summary_SummaryURL: {
    encode(message: VideoFeatures_Summary_SummaryURL, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VideoFeatures_Summary_SummaryURL;
    fromJSON(object: any): VideoFeatures_Summary_SummaryURL;
    toJSON(message: VideoFeatures_Summary_SummaryURL): unknown;
    fromPartial<I extends Exact<DeepPartial<VideoFeatures_Summary_SummaryURL>, I>>(object: I): VideoFeatures_Summary_SummaryURL;
} = {
    encode(
        message: VideoFeatures_Summary_SummaryURL,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.url !== '') {
            writer.uint32(10).string(message.url);
        }
        if (message.trackIndex !== 0) {
            writer.uint32(16).int64(message.trackIndex);
        }
        if (message.srcLang !== '') {
            writer.uint32(26).string(message.srcLang);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): VideoFeatures_Summary_SummaryURL {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseVideoFeatures_Summary_SummaryURL,
        } as VideoFeatures_Summary_SummaryURL;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.trackIndex = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.srcLang = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): VideoFeatures_Summary_SummaryURL {
        const message = {
            ...baseVideoFeatures_Summary_SummaryURL,
        } as VideoFeatures_Summary_SummaryURL;
        message.url = object.url !== undefined && object.url !== null ? String(object.url) : '';
        message.trackIndex =
            object.trackIndex !== undefined && object.trackIndex !== null
                ? Number(object.trackIndex)
                : 0;
        message.srcLang =
            object.srcLang !== undefined && object.srcLang !== null ? String(object.srcLang) : '';
        return message;
    },

    toJSON(message: VideoFeatures_Summary_SummaryURL): unknown {
        const obj: any = {};
        message.url !== undefined && (obj.url = message.url);
        message.trackIndex !== undefined && (obj.trackIndex = Math.round(message.trackIndex));
        message.srcLang !== undefined && (obj.srcLang = message.srcLang);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<VideoFeatures_Summary_SummaryURL>, I>>(
        object: I,
    ): VideoFeatures_Summary_SummaryURL {
        const message = {
            ...baseVideoFeatures_Summary_SummaryURL,
        } as VideoFeatures_Summary_SummaryURL;
        message.url = object.url ?? '';
        message.trackIndex = object.trackIndex ?? 0;
        message.srcLang = object.srcLang ?? '';
        return message;
    },
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
