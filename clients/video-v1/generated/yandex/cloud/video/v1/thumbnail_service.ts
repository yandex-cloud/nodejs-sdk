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
import { Thumbnail } from '../../../../yandex/cloud/video/v1/thumbnail';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.video.v1';

export interface ListThumbnailRequest {
    $type: 'yandex.cloud.video.v1.ListThumbnailRequest';
    /** ID of the channel. */
    channelId: string;
    /** The maximum number of the results per page to return. Default value: 100. */
    pageSize: number;
    /** Page token for getting the next page of the result. */
    pageToken: string;
}

export interface ListThumbnailResponse {
    $type: 'yandex.cloud.video.v1.ListThumbnailResponse';
    /** List of thumbnails. */
    thumbnails: Thumbnail[];
    /** Token for getting the next page. */
    nextPageToken: string;
}

export interface CreateThumbnailRequest {
    $type: 'yandex.cloud.video.v1.CreateThumbnailRequest';
    /** ID of the channel. */
    channelId: string;
}

export interface CreateThumbnailMetadata {
    $type: 'yandex.cloud.video.v1.CreateThumbnailMetadata';
    /** ID of the thumbnail. */
    thumbnailId: string;
}

export interface BatchGenerateDownloadURLsRequest {
    $type: 'yandex.cloud.video.v1.BatchGenerateDownloadURLsRequest';
    /** ID of the channel. */
    channelId: string;
    /** List of thumbnails IDs. */
    thumbnailIds: string[];
}

export interface BatchGenerateDownloadURLsResponse {
    $type: 'yandex.cloud.video.v1.BatchGenerateDownloadURLsResponse';
    /** List of download urls. */
    downloadUrls: ThumbnailDownloadURL[];
}

export interface ThumbnailDownloadURL {
    $type: 'yandex.cloud.video.v1.ThumbnailDownloadURL';
    /** ID of the thumbnail. */
    thumbnailId: string;
    /** Download url. */
    downloadUrl: string;
}

export interface GenerateThumbnailUploadURLRequest {
    $type: 'yandex.cloud.video.v1.GenerateThumbnailUploadURLRequest';
    /** ID of the thumbnail. */
    thumbnailId: string;
}

export interface GenerateThumbnailUploadURLResponse {
    $type: 'yandex.cloud.video.v1.GenerateThumbnailUploadURLResponse';
    /** Upload url. */
    uploadUrl: string;
}

const baseListThumbnailRequest: object = {
    $type: 'yandex.cloud.video.v1.ListThumbnailRequest',
    channelId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListThumbnailRequest = {
    $type: 'yandex.cloud.video.v1.ListThumbnailRequest' as const,

    encode(message: ListThumbnailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListThumbnailRequest>, I>>(
        object: I,
    ): ListThumbnailRequest {
        const message = { ...baseListThumbnailRequest } as ListThumbnailRequest;
        message.channelId = object.channelId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListThumbnailRequest.$type, ListThumbnailRequest);

const baseListThumbnailResponse: object = {
    $type: 'yandex.cloud.video.v1.ListThumbnailResponse',
    nextPageToken: '',
};

export const ListThumbnailResponse = {
    $type: 'yandex.cloud.video.v1.ListThumbnailResponse' as const,

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

messageTypeRegistry.set(ListThumbnailResponse.$type, ListThumbnailResponse);

const baseCreateThumbnailRequest: object = {
    $type: 'yandex.cloud.video.v1.CreateThumbnailRequest',
    channelId: '',
};

export const CreateThumbnailRequest = {
    $type: 'yandex.cloud.video.v1.CreateThumbnailRequest' as const,

    encode(message: CreateThumbnailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
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
                case 1:
                    message.channelId = reader.string();
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
        message.channelId =
            object.channelId !== undefined && object.channelId !== null
                ? String(object.channelId)
                : '';
        return message;
    },

    toJSON(message: CreateThumbnailRequest): unknown {
        const obj: any = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateThumbnailRequest>, I>>(
        object: I,
    ): CreateThumbnailRequest {
        const message = { ...baseCreateThumbnailRequest } as CreateThumbnailRequest;
        message.channelId = object.channelId ?? '';
        return message;
    },
};

messageTypeRegistry.set(CreateThumbnailRequest.$type, CreateThumbnailRequest);

const baseCreateThumbnailMetadata: object = {
    $type: 'yandex.cloud.video.v1.CreateThumbnailMetadata',
    thumbnailId: '',
};

export const CreateThumbnailMetadata = {
    $type: 'yandex.cloud.video.v1.CreateThumbnailMetadata' as const,

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

messageTypeRegistry.set(CreateThumbnailMetadata.$type, CreateThumbnailMetadata);

const baseBatchGenerateDownloadURLsRequest: object = {
    $type: 'yandex.cloud.video.v1.BatchGenerateDownloadURLsRequest',
    channelId: '',
    thumbnailIds: '',
};

export const BatchGenerateDownloadURLsRequest = {
    $type: 'yandex.cloud.video.v1.BatchGenerateDownloadURLsRequest' as const,

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

messageTypeRegistry.set(BatchGenerateDownloadURLsRequest.$type, BatchGenerateDownloadURLsRequest);

const baseBatchGenerateDownloadURLsResponse: object = {
    $type: 'yandex.cloud.video.v1.BatchGenerateDownloadURLsResponse',
};

export const BatchGenerateDownloadURLsResponse = {
    $type: 'yandex.cloud.video.v1.BatchGenerateDownloadURLsResponse' as const,

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

messageTypeRegistry.set(BatchGenerateDownloadURLsResponse.$type, BatchGenerateDownloadURLsResponse);

const baseThumbnailDownloadURL: object = {
    $type: 'yandex.cloud.video.v1.ThumbnailDownloadURL',
    thumbnailId: '',
    downloadUrl: '',
};

export const ThumbnailDownloadURL = {
    $type: 'yandex.cloud.video.v1.ThumbnailDownloadURL' as const,

    encode(message: ThumbnailDownloadURL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.thumbnailId !== '') {
            writer.uint32(10).string(message.thumbnailId);
        }
        if (message.downloadUrl !== '') {
            writer.uint32(18).string(message.downloadUrl);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ThumbnailDownloadURL {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseThumbnailDownloadURL } as ThumbnailDownloadURL;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.thumbnailId = reader.string();
                    break;
                case 2:
                    message.downloadUrl = reader.string();
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
        message.downloadUrl =
            object.downloadUrl !== undefined && object.downloadUrl !== null
                ? String(object.downloadUrl)
                : '';
        return message;
    },

    toJSON(message: ThumbnailDownloadURL): unknown {
        const obj: any = {};
        message.thumbnailId !== undefined && (obj.thumbnailId = message.thumbnailId);
        message.downloadUrl !== undefined && (obj.downloadUrl = message.downloadUrl);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ThumbnailDownloadURL>, I>>(
        object: I,
    ): ThumbnailDownloadURL {
        const message = { ...baseThumbnailDownloadURL } as ThumbnailDownloadURL;
        message.thumbnailId = object.thumbnailId ?? '';
        message.downloadUrl = object.downloadUrl ?? '';
        return message;
    },
};

messageTypeRegistry.set(ThumbnailDownloadURL.$type, ThumbnailDownloadURL);

const baseGenerateThumbnailUploadURLRequest: object = {
    $type: 'yandex.cloud.video.v1.GenerateThumbnailUploadURLRequest',
    thumbnailId: '',
};

export const GenerateThumbnailUploadURLRequest = {
    $type: 'yandex.cloud.video.v1.GenerateThumbnailUploadURLRequest' as const,

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

messageTypeRegistry.set(GenerateThumbnailUploadURLRequest.$type, GenerateThumbnailUploadURLRequest);

const baseGenerateThumbnailUploadURLResponse: object = {
    $type: 'yandex.cloud.video.v1.GenerateThumbnailUploadURLResponse',
    uploadUrl: '',
};

export const GenerateThumbnailUploadURLResponse = {
    $type: 'yandex.cloud.video.v1.GenerateThumbnailUploadURLResponse' as const,

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

messageTypeRegistry.set(
    GenerateThumbnailUploadURLResponse.$type,
    GenerateThumbnailUploadURLResponse,
);

/** Thumbnail management service. */
export const ThumbnailServiceService = {
    /** List thumbnails for channel. */
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
    /** Create thumbnail. */
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
    /** Generate urls for download images. */
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
    /** Generate url for upload image. */
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
} as const;

export interface ThumbnailServiceServer extends UntypedServiceImplementation {
    /** List thumbnails for channel. */
    list: handleUnaryCall<ListThumbnailRequest, ListThumbnailResponse>;
    /** Create thumbnail. */
    create: handleUnaryCall<CreateThumbnailRequest, Operation>;
    /** Generate urls for download images. */
    batchGenerateDownloadURLs: handleUnaryCall<
        BatchGenerateDownloadURLsRequest,
        BatchGenerateDownloadURLsResponse
    >;
    /** Generate url for upload image. */
    generateUploadURL: handleUnaryCall<
        GenerateThumbnailUploadURLRequest,
        GenerateThumbnailUploadURLResponse
    >;
}

export interface ThumbnailServiceClient extends Client {
    /** List thumbnails for channel. */
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
    /** Create thumbnail. */
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
    /** Generate urls for download images. */
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
    /** Generate url for upload image. */
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
