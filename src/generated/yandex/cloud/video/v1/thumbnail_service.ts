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
import { Thumbnail } from './thumbnail';
import { Operation } from '../../operation/operation';

export const protobufPackage = 'yandex.cloud.video.v1';

export interface GetThumbnailRequest {
    /**
     * ID of the thumbnail to retrieve.
     * Must be a valid thumbnail identifier string.
     */
    thumbnailId: string;
}

export interface ListThumbnailRequest {
    /** ID of the episode containing the thumbnails to list. */
    episodeId: string | undefined;
    /** ID of the video containing the thumbnails to list. */
    videoId: string | undefined;
    /**
     * [Deprecated] ID of the channel.
     *
     * @deprecated
     */
    channelId: string;
    /** The maximum number of thumbnails to return per page. */
    pageSize: number;
    /**
     * Page token for retrieving the next page of results.
     * This token is obtained from the next_page_token field in the previous ListThumbnailResponse.
     */
    pageToken: string;
}

export interface ListThumbnailResponse {
    /**
     * List of thumbnails matching the request criteria.
     * May be empty if no thumbnails match the criteria or if the parent resource has no thumbnails.
     */
    thumbnails: Thumbnail[];
    /**
     * Token for retrieving the next page of results.
     * Empty if there are no more results available.
     */
    nextPageToken: string;
}

export interface CreateThumbnailRequest {
    /** ID of the episode to associate the thumbnail with. */
    episodeId: string | undefined;
    /** ID of the video to associate the thumbnail with. */
    videoId: string | undefined;
}

export interface CreateThumbnailMetadata {
    /** ID of the thumbnail being created. */
    thumbnailId: string;
}

export interface BatchGenerateDownloadURLsRequest {
    /** ID of the channel containing the thumbnails. */
    channelId: string;
    /** List of thumbnail IDs for which to generate download URLs. */
    thumbnailIds: string[];
}

export interface BatchGenerateDownloadURLsResponse {
    /**
     * List of download URLs for the requested thumbnails.
     * Each entry contains URLs for both the original image and various scaled versions.
     */
    downloadUrls: ThumbnailDownloadURL[];
}

export interface ThumbnailDownloadURL {
    /** ID of the thumbnail for which download URLs are provided. */
    thumbnailId: string;
    /**
     * URL for downloading the original, unmodified thumbnail image.
     * This provides access to the image at its original resolution and format.
     */
    originalUrl: string;
    /**
     * List of URLs for downloading scaled versions of the thumbnail.
     * Different scaled versions are optimized for different display sizes and purposes.
     */
    scaledUrls: ThumbnailDownloadURL_ScaledURL[];
}

/** Image format of a thumbnail. */
export enum ThumbnailDownloadURL_ImageFormat {
    /** IMAGE_FORMAT_UNSPECIFIED - The image format is not specified. */
    IMAGE_FORMAT_UNSPECIFIED = 0,
    /**
     * JPEG - JPEG image format.
     * Provides good compression with some quality loss.
     * Widely supported across all platforms and browsers.
     */
    JPEG = 1,
    /**
     * WEBP - WebP image format.
     * Provides better compression than JPEG with similar quality.
     * May not be supported on all platforms and older browsers.
     */
    WEBP = 2,
    UNRECOGNIZED = -1,
}

export function thumbnailDownloadURL_ImageFormatFromJSON(
    object: any,
): ThumbnailDownloadURL_ImageFormat {
    switch (object) {
        case 0:
        case 'IMAGE_FORMAT_UNSPECIFIED':
            return ThumbnailDownloadURL_ImageFormat.IMAGE_FORMAT_UNSPECIFIED;
        case 1:
        case 'JPEG':
            return ThumbnailDownloadURL_ImageFormat.JPEG;
        case 2:
        case 'WEBP':
            return ThumbnailDownloadURL_ImageFormat.WEBP;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ThumbnailDownloadURL_ImageFormat.UNRECOGNIZED;
    }
}

export function thumbnailDownloadURL_ImageFormatToJSON(
    object: ThumbnailDownloadURL_ImageFormat,
): string {
    switch (object) {
        case ThumbnailDownloadURL_ImageFormat.IMAGE_FORMAT_UNSPECIFIED:
            return 'IMAGE_FORMAT_UNSPECIFIED';
        case ThumbnailDownloadURL_ImageFormat.JPEG:
            return 'JPEG';
        case ThumbnailDownloadURL_ImageFormat.WEBP:
            return 'WEBP';
        default:
            return 'UNKNOWN';
    }
}

/** Represents a URL for a specific scaled version of a thumbnail image. */
export interface ThumbnailDownloadURL_ScaledURL {
    /** URL for downloading this scaled version of the thumbnail. */
    url: string;
    /**
     * Maximum width in pixels of the scaled image.
     * The actual width may be smaller to maintain the aspect ratio.
     */
    maxWidth: number;
    /**
     * Maximum height in pixels of the scaled image.
     * The actual height may be smaller to maintain the aspect ratio.
     */
    maxHeight: number;
    /**
     * Format of the scaled image (JPEG, WebP, etc.).
     * Different formats offer different trade-offs between quality and file size.
     */
    imageFormat: ThumbnailDownloadURL_ImageFormat;
}

export interface GenerateThumbnailUploadURLRequest {
    /**
     * ID of the thumbnail for which to generate an upload URL.
     * The thumbnail record must already exist, typically created using the Create method.
     */
    thumbnailId: string;
}

export interface GenerateThumbnailUploadURLResponse {
    /**
     * Pre-signed URL for uploading the thumbnail image.
     * This URL can be used with an HTTP PUT request to upload the image file.
     * The URL has a limited validity period and will expire after a certain time.
     */
    uploadUrl: string;
}

export interface DeleteThumbnailRequest {
    /** ID of the thumbnail to delete. */
    thumbnailId: string;
}

export interface DeleteThumbnailMetadata {
    /**
     * ID of the thumbnail being deleted.
     * This identifier can be used to track the thumbnail deletion operation.
     */
    thumbnailId: string;
}

const baseGetThumbnailRequest: object = { thumbnailId: '' };

export const GetThumbnailRequest: {
    encode(message: GetThumbnailRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetThumbnailRequest;
    fromJSON(object: any): GetThumbnailRequest;
    toJSON(message: GetThumbnailRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetThumbnailRequest>, I>>(object: I): GetThumbnailRequest;
} = {
    encode(message: GetThumbnailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.thumbnailId !== '') {
            writer.uint32(10).string(message.thumbnailId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetThumbnailRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetThumbnailRequest } as GetThumbnailRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.thumbnailId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetThumbnailRequest {
        const message = { ...baseGetThumbnailRequest } as GetThumbnailRequest;
        message.thumbnailId =
            object.thumbnailId !== undefined && object.thumbnailId !== null
                ? String(object.thumbnailId)
                : '';
        return message;
    },

    toJSON(message: GetThumbnailRequest): unknown {
        const obj: any = {};
        message.thumbnailId !== undefined && (obj.thumbnailId = message.thumbnailId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetThumbnailRequest>, I>>(
        object: I,
    ): GetThumbnailRequest {
        const message = { ...baseGetThumbnailRequest } as GetThumbnailRequest;
        message.thumbnailId = object.thumbnailId ?? '';
        return message;
    },
};

const baseListThumbnailRequest: object = { channelId: '', pageSize: 0, pageToken: '' };

export const ListThumbnailRequest: {
    encode(message: ListThumbnailRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListThumbnailRequest;
    fromJSON(object: any): ListThumbnailRequest;
    toJSON(message: ListThumbnailRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListThumbnailRequest>, I>>(object: I): ListThumbnailRequest;
} = {
    encode(message: ListThumbnailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.episodeId !== undefined) {
            writer.uint32(8026).string(message.episodeId);
        }
        if (message.videoId !== undefined) {
            writer.uint32(8034).string(message.videoId);
        }
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(800).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(810).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListThumbnailRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListThumbnailRequest } as ListThumbnailRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1003:
                    message.episodeId = reader.string();
                    break;
                case 1004:
                    message.videoId = reader.string();
                    break;
                case 1:
                    message.channelId = reader.string();
                    break;
                case 100:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 101:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListThumbnailRequest {
        const message = { ...baseListThumbnailRequest } as ListThumbnailRequest;
        message.episodeId =
            object.episodeId !== undefined && object.episodeId !== null
                ? String(object.episodeId)
                : undefined;
        message.videoId =
            object.videoId !== undefined && object.videoId !== null
                ? String(object.videoId)
                : undefined;
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
        return message;
    },

    toJSON(message: ListThumbnailRequest): unknown {
        const obj: any = {};
        message.episodeId !== undefined && (obj.episodeId = message.episodeId);
        message.videoId !== undefined && (obj.videoId = message.videoId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListThumbnailRequest>, I>>(
        object: I,
    ): ListThumbnailRequest {
        const message = { ...baseListThumbnailRequest } as ListThumbnailRequest;
        message.episodeId = object.episodeId ?? undefined;
        message.videoId = object.videoId ?? undefined;
        message.channelId = object.channelId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListThumbnailResponse: object = { nextPageToken: '' };

export const ListThumbnailResponse: {
    encode(message: ListThumbnailResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListThumbnailResponse;
    fromJSON(object: any): ListThumbnailResponse;
    toJSON(message: ListThumbnailResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListThumbnailResponse>, I>>(object: I): ListThumbnailResponse;
} = {
    encode(message: ListThumbnailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.thumbnails) {
            Thumbnail.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(802).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListThumbnailResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListThumbnailResponse } as ListThumbnailResponse;
        message.thumbnails = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.thumbnails.push(Thumbnail.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListThumbnailResponse {
        const message = { ...baseListThumbnailResponse } as ListThumbnailResponse;
        message.thumbnails = (object.thumbnails ?? []).map((e: any) => Thumbnail.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListThumbnailResponse): unknown {
        const obj: any = {};
        if (message.thumbnails) {
            obj.thumbnails = message.thumbnails.map((e) => (e ? Thumbnail.toJSON(e) : undefined));
        } else {
            obj.thumbnails = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListThumbnailResponse>, I>>(
        object: I,
    ): ListThumbnailResponse {
        const message = { ...baseListThumbnailResponse } as ListThumbnailResponse;
        message.thumbnails = object.thumbnails?.map((e) => Thumbnail.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateThumbnailRequest: object = {};

export const CreateThumbnailRequest: {
    encode(message: CreateThumbnailRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateThumbnailRequest;
    fromJSON(object: any): CreateThumbnailRequest;
    toJSON(message: CreateThumbnailRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateThumbnailRequest>, I>>(object: I): CreateThumbnailRequest;
} = {
    encode(message: CreateThumbnailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.episodeId !== undefined) {
            writer.uint32(8026).string(message.episodeId);
        }
        if (message.videoId !== undefined) {
            writer.uint32(8034).string(message.videoId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateThumbnailRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateThumbnailRequest } as CreateThumbnailRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1003:
                    message.episodeId = reader.string();
                    break;
                case 1004:
                    message.videoId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateThumbnailRequest {
        const message = { ...baseCreateThumbnailRequest } as CreateThumbnailRequest;
        message.episodeId =
            object.episodeId !== undefined && object.episodeId !== null
                ? String(object.episodeId)
                : undefined;
        message.videoId =
            object.videoId !== undefined && object.videoId !== null
                ? String(object.videoId)
                : undefined;
        return message;
    },

    toJSON(message: CreateThumbnailRequest): unknown {
        const obj: any = {};
        message.episodeId !== undefined && (obj.episodeId = message.episodeId);
        message.videoId !== undefined && (obj.videoId = message.videoId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateThumbnailRequest>, I>>(
        object: I,
    ): CreateThumbnailRequest {
        const message = { ...baseCreateThumbnailRequest } as CreateThumbnailRequest;
        message.episodeId = object.episodeId ?? undefined;
        message.videoId = object.videoId ?? undefined;
        return message;
    },
};

const baseCreateThumbnailMetadata: object = { thumbnailId: '' };

export const CreateThumbnailMetadata: {
    encode(message: CreateThumbnailMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateThumbnailMetadata;
    fromJSON(object: any): CreateThumbnailMetadata;
    toJSON(message: CreateThumbnailMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateThumbnailMetadata>, I>>(object: I): CreateThumbnailMetadata;
} = {
    encode(message: CreateThumbnailMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.thumbnailId !== '') {
            writer.uint32(10).string(message.thumbnailId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateThumbnailMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateThumbnailMetadata } as CreateThumbnailMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.thumbnailId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateThumbnailMetadata {
        const message = { ...baseCreateThumbnailMetadata } as CreateThumbnailMetadata;
        message.thumbnailId =
            object.thumbnailId !== undefined && object.thumbnailId !== null
                ? String(object.thumbnailId)
                : '';
        return message;
    },

    toJSON(message: CreateThumbnailMetadata): unknown {
        const obj: any = {};
        message.thumbnailId !== undefined && (obj.thumbnailId = message.thumbnailId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateThumbnailMetadata>, I>>(
        object: I,
    ): CreateThumbnailMetadata {
        const message = { ...baseCreateThumbnailMetadata } as CreateThumbnailMetadata;
        message.thumbnailId = object.thumbnailId ?? '';
        return message;
    },
};

const baseBatchGenerateDownloadURLsRequest: object = { channelId: '', thumbnailIds: '' };

export const BatchGenerateDownloadURLsRequest: {
    encode(message: BatchGenerateDownloadURLsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchGenerateDownloadURLsRequest;
    fromJSON(object: any): BatchGenerateDownloadURLsRequest;
    toJSON(message: BatchGenerateDownloadURLsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<BatchGenerateDownloadURLsRequest>, I>>(object: I): BatchGenerateDownloadURLsRequest;
} = {
    encode(
        message: BatchGenerateDownloadURLsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
        }
        for (const v of message.thumbnailIds) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchGenerateDownloadURLsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseBatchGenerateDownloadURLsRequest,
        } as BatchGenerateDownloadURLsRequest;
        message.thumbnailIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.thumbnailIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchGenerateDownloadURLsRequest {
        const message = {
            ...baseBatchGenerateDownloadURLsRequest,
        } as BatchGenerateDownloadURLsRequest;
        message.channelId =
            object.channelId !== undefined && object.channelId !== null
                ? String(object.channelId)
                : '';
        message.thumbnailIds = (object.thumbnailIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: BatchGenerateDownloadURLsRequest): unknown {
        const obj: any = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        if (message.thumbnailIds) {
            obj.thumbnailIds = message.thumbnailIds.map((e) => e);
        } else {
            obj.thumbnailIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchGenerateDownloadURLsRequest>, I>>(
        object: I,
    ): BatchGenerateDownloadURLsRequest {
        const message = {
            ...baseBatchGenerateDownloadURLsRequest,
        } as BatchGenerateDownloadURLsRequest;
        message.channelId = object.channelId ?? '';
        message.thumbnailIds = object.thumbnailIds?.map((e) => e) || [];
        return message;
    },
};

const baseBatchGenerateDownloadURLsResponse: object = {};

export const BatchGenerateDownloadURLsResponse: {
    encode(message: BatchGenerateDownloadURLsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchGenerateDownloadURLsResponse;
    fromJSON(object: any): BatchGenerateDownloadURLsResponse;
    toJSON(message: BatchGenerateDownloadURLsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<BatchGenerateDownloadURLsResponse>, I>>(object: I): BatchGenerateDownloadURLsResponse;
} = {
    encode(
        message: BatchGenerateDownloadURLsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.downloadUrls) {
            ThumbnailDownloadURL.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchGenerateDownloadURLsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseBatchGenerateDownloadURLsResponse,
        } as BatchGenerateDownloadURLsResponse;
        message.downloadUrls = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.downloadUrls.push(ThumbnailDownloadURL.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchGenerateDownloadURLsResponse {
        const message = {
            ...baseBatchGenerateDownloadURLsResponse,
        } as BatchGenerateDownloadURLsResponse;
        message.downloadUrls = (object.downloadUrls ?? []).map((e: any) =>
            ThumbnailDownloadURL.fromJSON(e),
        );
        return message;
    },

    toJSON(message: BatchGenerateDownloadURLsResponse): unknown {
        const obj: any = {};
        if (message.downloadUrls) {
            obj.downloadUrls = message.downloadUrls.map((e) =>
                e ? ThumbnailDownloadURL.toJSON(e) : undefined,
            );
        } else {
            obj.downloadUrls = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchGenerateDownloadURLsResponse>, I>>(
        object: I,
    ): BatchGenerateDownloadURLsResponse {
        const message = {
            ...baseBatchGenerateDownloadURLsResponse,
        } as BatchGenerateDownloadURLsResponse;
        message.downloadUrls =
            object.downloadUrls?.map((e) => ThumbnailDownloadURL.fromPartial(e)) || [];
        return message;
    },
};

const baseThumbnailDownloadURL: object = { thumbnailId: '', originalUrl: '' };

export const ThumbnailDownloadURL: {
    encode(message: ThumbnailDownloadURL, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ThumbnailDownloadURL;
    fromJSON(object: any): ThumbnailDownloadURL;
    toJSON(message: ThumbnailDownloadURL): unknown;
    fromPartial<I extends Exact<DeepPartial<ThumbnailDownloadURL>, I>>(object: I): ThumbnailDownloadURL;
} = {
    encode(message: ThumbnailDownloadURL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.thumbnailId !== '') {
            writer.uint32(10).string(message.thumbnailId);
        }
        if (message.originalUrl !== '') {
            writer.uint32(18).string(message.originalUrl);
        }
        for (const v of message.scaledUrls) {
            ThumbnailDownloadURL_ScaledURL.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ThumbnailDownloadURL {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseThumbnailDownloadURL } as ThumbnailDownloadURL;
        message.scaledUrls = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.thumbnailId = reader.string();
                    break;
                case 2:
                    message.originalUrl = reader.string();
                    break;
                case 3:
                    message.scaledUrls.push(
                        ThumbnailDownloadURL_ScaledURL.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ThumbnailDownloadURL {
        const message = { ...baseThumbnailDownloadURL } as ThumbnailDownloadURL;
        message.thumbnailId =
            object.thumbnailId !== undefined && object.thumbnailId !== null
                ? String(object.thumbnailId)
                : '';
        message.originalUrl =
            object.originalUrl !== undefined && object.originalUrl !== null
                ? String(object.originalUrl)
                : '';
        message.scaledUrls = (object.scaledUrls ?? []).map((e: any) =>
            ThumbnailDownloadURL_ScaledURL.fromJSON(e),
        );
        return message;
    },

    toJSON(message: ThumbnailDownloadURL): unknown {
        const obj: any = {};
        message.thumbnailId !== undefined && (obj.thumbnailId = message.thumbnailId);
        message.originalUrl !== undefined && (obj.originalUrl = message.originalUrl);
        if (message.scaledUrls) {
            obj.scaledUrls = message.scaledUrls.map((e) =>
                e ? ThumbnailDownloadURL_ScaledURL.toJSON(e) : undefined,
            );
        } else {
            obj.scaledUrls = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ThumbnailDownloadURL>, I>>(
        object: I,
    ): ThumbnailDownloadURL {
        const message = { ...baseThumbnailDownloadURL } as ThumbnailDownloadURL;
        message.thumbnailId = object.thumbnailId ?? '';
        message.originalUrl = object.originalUrl ?? '';
        message.scaledUrls =
            object.scaledUrls?.map((e) => ThumbnailDownloadURL_ScaledURL.fromPartial(e)) || [];
        return message;
    },
};

const baseThumbnailDownloadURL_ScaledURL: object = {
    url: '',
    maxWidth: 0,
    maxHeight: 0,
    imageFormat: 0,
};

export const ThumbnailDownloadURL_ScaledURL: {
    encode(message: ThumbnailDownloadURL_ScaledURL, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ThumbnailDownloadURL_ScaledURL;
    fromJSON(object: any): ThumbnailDownloadURL_ScaledURL;
    toJSON(message: ThumbnailDownloadURL_ScaledURL): unknown;
    fromPartial<I extends Exact<DeepPartial<ThumbnailDownloadURL_ScaledURL>, I>>(object: I): ThumbnailDownloadURL_ScaledURL;
} = {
    encode(
        message: ThumbnailDownloadURL_ScaledURL,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.url !== '') {
            writer.uint32(10).string(message.url);
        }
        if (message.maxWidth !== 0) {
            writer.uint32(16).int64(message.maxWidth);
        }
        if (message.maxHeight !== 0) {
            writer.uint32(24).int64(message.maxHeight);
        }
        if (message.imageFormat !== 0) {
            writer.uint32(32).int32(message.imageFormat);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ThumbnailDownloadURL_ScaledURL {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseThumbnailDownloadURL_ScaledURL } as ThumbnailDownloadURL_ScaledURL;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.maxWidth = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.maxHeight = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.imageFormat = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ThumbnailDownloadURL_ScaledURL {
        const message = { ...baseThumbnailDownloadURL_ScaledURL } as ThumbnailDownloadURL_ScaledURL;
        message.url = object.url !== undefined && object.url !== null ? String(object.url) : '';
        message.maxWidth =
            object.maxWidth !== undefined && object.maxWidth !== null ? Number(object.maxWidth) : 0;
        message.maxHeight =
            object.maxHeight !== undefined && object.maxHeight !== null
                ? Number(object.maxHeight)
                : 0;
        message.imageFormat =
            object.imageFormat !== undefined && object.imageFormat !== null
                ? thumbnailDownloadURL_ImageFormatFromJSON(object.imageFormat)
                : 0;
        return message;
    },

    toJSON(message: ThumbnailDownloadURL_ScaledURL): unknown {
        const obj: any = {};
        message.url !== undefined && (obj.url = message.url);
        message.maxWidth !== undefined && (obj.maxWidth = Math.round(message.maxWidth));
        message.maxHeight !== undefined && (obj.maxHeight = Math.round(message.maxHeight));
        message.imageFormat !== undefined &&
            (obj.imageFormat = thumbnailDownloadURL_ImageFormatToJSON(message.imageFormat));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ThumbnailDownloadURL_ScaledURL>, I>>(
        object: I,
    ): ThumbnailDownloadURL_ScaledURL {
        const message = { ...baseThumbnailDownloadURL_ScaledURL } as ThumbnailDownloadURL_ScaledURL;
        message.url = object.url ?? '';
        message.maxWidth = object.maxWidth ?? 0;
        message.maxHeight = object.maxHeight ?? 0;
        message.imageFormat = object.imageFormat ?? 0;
        return message;
    },
};

const baseGenerateThumbnailUploadURLRequest: object = { thumbnailId: '' };

export const GenerateThumbnailUploadURLRequest: {
    encode(message: GenerateThumbnailUploadURLRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenerateThumbnailUploadURLRequest;
    fromJSON(object: any): GenerateThumbnailUploadURLRequest;
    toJSON(message: GenerateThumbnailUploadURLRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GenerateThumbnailUploadURLRequest>, I>>(object: I): GenerateThumbnailUploadURLRequest;
} = {
    encode(
        message: GenerateThumbnailUploadURLRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.thumbnailId !== '') {
            writer.uint32(10).string(message.thumbnailId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GenerateThumbnailUploadURLRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGenerateThumbnailUploadURLRequest,
        } as GenerateThumbnailUploadURLRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.thumbnailId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GenerateThumbnailUploadURLRequest {
        const message = {
            ...baseGenerateThumbnailUploadURLRequest,
        } as GenerateThumbnailUploadURLRequest;
        message.thumbnailId =
            object.thumbnailId !== undefined && object.thumbnailId !== null
                ? String(object.thumbnailId)
                : '';
        return message;
    },

    toJSON(message: GenerateThumbnailUploadURLRequest): unknown {
        const obj: any = {};
        message.thumbnailId !== undefined && (obj.thumbnailId = message.thumbnailId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GenerateThumbnailUploadURLRequest>, I>>(
        object: I,
    ): GenerateThumbnailUploadURLRequest {
        const message = {
            ...baseGenerateThumbnailUploadURLRequest,
        } as GenerateThumbnailUploadURLRequest;
        message.thumbnailId = object.thumbnailId ?? '';
        return message;
    },
};

const baseGenerateThumbnailUploadURLResponse: object = { uploadUrl: '' };

export const GenerateThumbnailUploadURLResponse: {
    encode(message: GenerateThumbnailUploadURLResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenerateThumbnailUploadURLResponse;
    fromJSON(object: any): GenerateThumbnailUploadURLResponse;
    toJSON(message: GenerateThumbnailUploadURLResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<GenerateThumbnailUploadURLResponse>, I>>(object: I): GenerateThumbnailUploadURLResponse;
} = {
    encode(
        message: GenerateThumbnailUploadURLResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.uploadUrl !== '') {
            writer.uint32(10).string(message.uploadUrl);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GenerateThumbnailUploadURLResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGenerateThumbnailUploadURLResponse,
        } as GenerateThumbnailUploadURLResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uploadUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GenerateThumbnailUploadURLResponse {
        const message = {
            ...baseGenerateThumbnailUploadURLResponse,
        } as GenerateThumbnailUploadURLResponse;
        message.uploadUrl =
            object.uploadUrl !== undefined && object.uploadUrl !== null
                ? String(object.uploadUrl)
                : '';
        return message;
    },

    toJSON(message: GenerateThumbnailUploadURLResponse): unknown {
        const obj: any = {};
        message.uploadUrl !== undefined && (obj.uploadUrl = message.uploadUrl);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GenerateThumbnailUploadURLResponse>, I>>(
        object: I,
    ): GenerateThumbnailUploadURLResponse {
        const message = {
            ...baseGenerateThumbnailUploadURLResponse,
        } as GenerateThumbnailUploadURLResponse;
        message.uploadUrl = object.uploadUrl ?? '';
        return message;
    },
};

const baseDeleteThumbnailRequest: object = { thumbnailId: '' };

export const DeleteThumbnailRequest: {
    encode(message: DeleteThumbnailRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteThumbnailRequest;
    fromJSON(object: any): DeleteThumbnailRequest;
    toJSON(message: DeleteThumbnailRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteThumbnailRequest>, I>>(object: I): DeleteThumbnailRequest;
} = {
    encode(message: DeleteThumbnailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.thumbnailId !== '') {
            writer.uint32(10).string(message.thumbnailId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteThumbnailRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteThumbnailRequest } as DeleteThumbnailRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.thumbnailId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteThumbnailRequest {
        const message = { ...baseDeleteThumbnailRequest } as DeleteThumbnailRequest;
        message.thumbnailId =
            object.thumbnailId !== undefined && object.thumbnailId !== null
                ? String(object.thumbnailId)
                : '';
        return message;
    },

    toJSON(message: DeleteThumbnailRequest): unknown {
        const obj: any = {};
        message.thumbnailId !== undefined && (obj.thumbnailId = message.thumbnailId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteThumbnailRequest>, I>>(
        object: I,
    ): DeleteThumbnailRequest {
        const message = { ...baseDeleteThumbnailRequest } as DeleteThumbnailRequest;
        message.thumbnailId = object.thumbnailId ?? '';
        return message;
    },
};

const baseDeleteThumbnailMetadata: object = { thumbnailId: '' };

export const DeleteThumbnailMetadata: {
    encode(message: DeleteThumbnailMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteThumbnailMetadata;
    fromJSON(object: any): DeleteThumbnailMetadata;
    toJSON(message: DeleteThumbnailMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteThumbnailMetadata>, I>>(object: I): DeleteThumbnailMetadata;
} = {
    encode(message: DeleteThumbnailMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.thumbnailId !== '') {
            writer.uint32(10).string(message.thumbnailId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteThumbnailMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteThumbnailMetadata } as DeleteThumbnailMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.thumbnailId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteThumbnailMetadata {
        const message = { ...baseDeleteThumbnailMetadata } as DeleteThumbnailMetadata;
        message.thumbnailId =
            object.thumbnailId !== undefined && object.thumbnailId !== null
                ? String(object.thumbnailId)
                : '';
        return message;
    },

    toJSON(message: DeleteThumbnailMetadata): unknown {
        const obj: any = {};
        message.thumbnailId !== undefined && (obj.thumbnailId = message.thumbnailId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteThumbnailMetadata>, I>>(
        object: I,
    ): DeleteThumbnailMetadata {
        const message = { ...baseDeleteThumbnailMetadata } as DeleteThumbnailMetadata;
        message.thumbnailId = object.thumbnailId ?? '';
        return message;
    },
};

/**
 * Thumbnail management service.
 * Provides methods for creating, retrieving, and managing thumbnail images
 * that can be associated with various resources such as videos, streams, episodes, and channels.
 */
export const ThumbnailServiceService = {
    /**
     * Retrieves detailed information about a specific thumbnail by its ID.
     * Returns all thumbnail metadata and related information.
     */
    get: {
        path: '/yandex.cloud.video.v1.ThumbnailService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetThumbnailRequest) =>
            Buffer.from(GetThumbnailRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetThumbnailRequest.decode(value),
        responseSerialize: (value: Thumbnail) => Buffer.from(Thumbnail.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Thumbnail.decode(value),
    },
    /**
     * Lists all thumbnails associated with a specific resource (channel, stream, video, etc.)
     * with pagination support.
     */
    list: {
        path: '/yandex.cloud.video.v1.ThumbnailService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListThumbnailRequest) =>
            Buffer.from(ListThumbnailRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListThumbnailRequest.decode(value),
        responseSerialize: (value: ListThumbnailResponse) =>
            Buffer.from(ListThumbnailResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListThumbnailResponse.decode(value),
    },
    /**
     * Creates a new thumbnail record for a specific resource.
     * This method only creates the metadata record; the actual image must be uploaded
     * using the URL obtained from the GenerateUploadURL method.
     */
    create: {
        path: '/yandex.cloud.video.v1.ThumbnailService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateThumbnailRequest) =>
            Buffer.from(CreateThumbnailRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateThumbnailRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Generates download URLs for multiple thumbnails in a single request.
     * The response includes URLs for both original and scaled versions of each thumbnail.
     * This is useful for efficiently retrieving multiple thumbnails at once.
     */
    batchGenerateDownloadURLs: {
        path: '/yandex.cloud.video.v1.ThumbnailService/BatchGenerateDownloadURLs',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: BatchGenerateDownloadURLsRequest) =>
            Buffer.from(BatchGenerateDownloadURLsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => BatchGenerateDownloadURLsRequest.decode(value),
        responseSerialize: (value: BatchGenerateDownloadURLsResponse) =>
            Buffer.from(BatchGenerateDownloadURLsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => BatchGenerateDownloadURLsResponse.decode(value),
    },
    /**
     * Generates a URL for uploading an image to an existing thumbnail record.
     * This URL can be used to upload the actual image file using an HTTP PUT request.
     * The URL is pre-signed and has a limited validity period.
     */
    generateUploadURL: {
        path: '/yandex.cloud.video.v1.ThumbnailService/GenerateUploadURL',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GenerateThumbnailUploadURLRequest) =>
            Buffer.from(GenerateThumbnailUploadURLRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GenerateThumbnailUploadURLRequest.decode(value),
        responseSerialize: (value: GenerateThumbnailUploadURLResponse) =>
            Buffer.from(GenerateThumbnailUploadURLResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GenerateThumbnailUploadURLResponse.decode(value),
    },
    /**
     * Deletes a specific thumbnail by its ID.
     * This removes both the metadata record and the associated image file.
     */
    delete: {
        path: '/yandex.cloud.video.v1.ThumbnailService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteThumbnailRequest) =>
            Buffer.from(DeleteThumbnailRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteThumbnailRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface ThumbnailServiceServer extends UntypedServiceImplementation {
    /**
     * Retrieves detailed information about a specific thumbnail by its ID.
     * Returns all thumbnail metadata and related information.
     */
    get: handleUnaryCall<GetThumbnailRequest, Thumbnail>;
    /**
     * Lists all thumbnails associated with a specific resource (channel, stream, video, etc.)
     * with pagination support.
     */
    list: handleUnaryCall<ListThumbnailRequest, ListThumbnailResponse>;
    /**
     * Creates a new thumbnail record for a specific resource.
     * This method only creates the metadata record; the actual image must be uploaded
     * using the URL obtained from the GenerateUploadURL method.
     */
    create: handleUnaryCall<CreateThumbnailRequest, Operation>;
    /**
     * Generates download URLs for multiple thumbnails in a single request.
     * The response includes URLs for both original and scaled versions of each thumbnail.
     * This is useful for efficiently retrieving multiple thumbnails at once.
     */
    batchGenerateDownloadURLs: handleUnaryCall<
        BatchGenerateDownloadURLsRequest,
        BatchGenerateDownloadURLsResponse
    >;
    /**
     * Generates a URL for uploading an image to an existing thumbnail record.
     * This URL can be used to upload the actual image file using an HTTP PUT request.
     * The URL is pre-signed and has a limited validity period.
     */
    generateUploadURL: handleUnaryCall<
        GenerateThumbnailUploadURLRequest,
        GenerateThumbnailUploadURLResponse
    >;
    /**
     * Deletes a specific thumbnail by its ID.
     * This removes both the metadata record and the associated image file.
     */
    delete: handleUnaryCall<DeleteThumbnailRequest, Operation>;
}

export interface ThumbnailServiceClient extends Client {
    /**
     * Retrieves detailed information about a specific thumbnail by its ID.
     * Returns all thumbnail metadata and related information.
     */
    get(
        request: GetThumbnailRequest,
        callback: (error: ServiceError | null, response: Thumbnail) => void,
    ): ClientUnaryCall;
    get(
        request: GetThumbnailRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Thumbnail) => void,
    ): ClientUnaryCall;
    get(
        request: GetThumbnailRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Thumbnail) => void,
    ): ClientUnaryCall;
    /**
     * Lists all thumbnails associated with a specific resource (channel, stream, video, etc.)
     * with pagination support.
     */
    list(
        request: ListThumbnailRequest,
        callback: (error: ServiceError | null, response: ListThumbnailResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListThumbnailRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListThumbnailResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListThumbnailRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListThumbnailResponse) => void,
    ): ClientUnaryCall;
    /**
     * Creates a new thumbnail record for a specific resource.
     * This method only creates the metadata record; the actual image must be uploaded
     * using the URL obtained from the GenerateUploadURL method.
     */
    create(
        request: CreateThumbnailRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateThumbnailRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateThumbnailRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Generates download URLs for multiple thumbnails in a single request.
     * The response includes URLs for both original and scaled versions of each thumbnail.
     * This is useful for efficiently retrieving multiple thumbnails at once.
     */
    batchGenerateDownloadURLs(
        request: BatchGenerateDownloadURLsRequest,
        callback: (error: ServiceError | null, response: BatchGenerateDownloadURLsResponse) => void,
    ): ClientUnaryCall;
    batchGenerateDownloadURLs(
        request: BatchGenerateDownloadURLsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: BatchGenerateDownloadURLsResponse) => void,
    ): ClientUnaryCall;
    batchGenerateDownloadURLs(
        request: BatchGenerateDownloadURLsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: BatchGenerateDownloadURLsResponse) => void,
    ): ClientUnaryCall;
    /**
     * Generates a URL for uploading an image to an existing thumbnail record.
     * This URL can be used to upload the actual image file using an HTTP PUT request.
     * The URL is pre-signed and has a limited validity period.
     */
    generateUploadURL(
        request: GenerateThumbnailUploadURLRequest,
        callback: (
            error: ServiceError | null,
            response: GenerateThumbnailUploadURLResponse,
        ) => void,
    ): ClientUnaryCall;
    generateUploadURL(
        request: GenerateThumbnailUploadURLRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: GenerateThumbnailUploadURLResponse,
        ) => void,
    ): ClientUnaryCall;
    generateUploadURL(
        request: GenerateThumbnailUploadURLRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: GenerateThumbnailUploadURLResponse,
        ) => void,
    ): ClientUnaryCall;
    /**
     * Deletes a specific thumbnail by its ID.
     * This removes both the metadata record and the associated image file.
     */
    delete(
        request: DeleteThumbnailRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteThumbnailRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteThumbnailRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const ThumbnailServiceClient = makeGenericClientConstructor(
    ThumbnailServiceService,
    'yandex.cloud.video.v1.ThumbnailService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ThumbnailServiceClient;
    service: typeof ThumbnailServiceService;
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
