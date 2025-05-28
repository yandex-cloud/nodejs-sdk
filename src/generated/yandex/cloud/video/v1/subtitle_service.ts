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
import { Subtitle } from '../../../../yandex/cloud/video/v1/subtitle';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.video.v1';

export interface GetSubtitleRequest {
    /** ID of the subtitle. */
    subtitleId: string;
}

export interface ListSubtitlesRequest {
    /**
     * The maximum number of the results per page to return.
     * Default value: 100.
     */
    pageSize: number;
    /** Page token for getting the next page of the result. */
    pageToken: string;
    /** ID of the video. */
    videoId: string | undefined;
}

export interface ListSubtitlesResponse {
    subtitles: Subtitle[];
    /** Token for getting the next page. */
    nextPageToken: string;
}

export interface CreateSubtitleRequest {
    /**
     * Subtitle language in any of the following formats:
     * * three-letter code according to ISO 639-2/T, ISO 639-2/B, or ISO 639-3
     * * two-letter code according to ISO 639-1
     */
    language: string;
    /**
     * Contains the subtitle label (or title) that will be displayed on screen during video playback.
     * Should provide a concise and accurate representation of the spoken content.
     * If not provided, it will be auto-generated based on the specified language.
     */
    label: string;
    /** ID of the video. */
    videoId: string | undefined;
    /** Upload subtitle. */
    upload?: SubtitleUploadParams | undefined;
}

export interface SubtitleUploadParams {
    filename: string;
}

export interface CreateSubtitleMetadata {
    /** ID of the subtitle. */
    subtitleId: string;
}

export interface GenerateSubtitleUploadURLRequest {
    /** ID of the subtitle. */
    subtitleId: string;
}

export interface GenerateSubtitleUploadURLResponse {
    /** Upload url. */
    uploadUrl: string;
}

export interface DeleteSubtitleRequest {
    /** ID of the subtitle. */
    subtitleId: string;
}

export interface DeleteSubtitleMetadata {
    /** ID of the subtitle. */
    subtitleId: string;
}

const baseGetSubtitleRequest: object = { subtitleId: '' };

export const GetSubtitleRequest = {
    encode(message: GetSubtitleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.subtitleId !== '') {
            writer.uint32(10).string(message.subtitleId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetSubtitleRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetSubtitleRequest } as GetSubtitleRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subtitleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetSubtitleRequest {
        const message = { ...baseGetSubtitleRequest } as GetSubtitleRequest;
        message.subtitleId =
            object.subtitleId !== undefined && object.subtitleId !== null
                ? String(object.subtitleId)
                : '';
        return message;
    },

    toJSON(message: GetSubtitleRequest): unknown {
        const obj: any = {};
        message.subtitleId !== undefined && (obj.subtitleId = message.subtitleId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetSubtitleRequest>, I>>(
        object: I,
    ): GetSubtitleRequest {
        const message = { ...baseGetSubtitleRequest } as GetSubtitleRequest;
        message.subtitleId = object.subtitleId ?? '';
        return message;
    },
};

const baseListSubtitlesRequest: object = { pageSize: 0, pageToken: '' };

export const ListSubtitlesRequest = {
    encode(message: ListSubtitlesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pageSize !== 0) {
            writer.uint32(800).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(810).string(message.pageToken);
        }
        if (message.videoId !== undefined) {
            writer.uint32(8002).string(message.videoId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListSubtitlesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListSubtitlesRequest } as ListSubtitlesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 100:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 101:
                    message.pageToken = reader.string();
                    break;
                case 1000:
                    message.videoId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListSubtitlesRequest {
        const message = { ...baseListSubtitlesRequest } as ListSubtitlesRequest;
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        message.videoId =
            object.videoId !== undefined && object.videoId !== null
                ? String(object.videoId)
                : undefined;
        return message;
    },

    toJSON(message: ListSubtitlesRequest): unknown {
        const obj: any = {};
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.videoId !== undefined && (obj.videoId = message.videoId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListSubtitlesRequest>, I>>(
        object: I,
    ): ListSubtitlesRequest {
        const message = { ...baseListSubtitlesRequest } as ListSubtitlesRequest;
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.videoId = object.videoId ?? undefined;
        return message;
    },
};

const baseListSubtitlesResponse: object = { nextPageToken: '' };

export const ListSubtitlesResponse = {
    encode(message: ListSubtitlesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.subtitles) {
            Subtitle.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(802).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListSubtitlesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListSubtitlesResponse } as ListSubtitlesResponse;
        message.subtitles = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subtitles.push(Subtitle.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListSubtitlesResponse {
        const message = { ...baseListSubtitlesResponse } as ListSubtitlesResponse;
        message.subtitles = (object.subtitles ?? []).map((e: any) => Subtitle.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListSubtitlesResponse): unknown {
        const obj: any = {};
        if (message.subtitles) {
            obj.subtitles = message.subtitles.map((e) => (e ? Subtitle.toJSON(e) : undefined));
        } else {
            obj.subtitles = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListSubtitlesResponse>, I>>(
        object: I,
    ): ListSubtitlesResponse {
        const message = { ...baseListSubtitlesResponse } as ListSubtitlesResponse;
        message.subtitles = object.subtitles?.map((e) => Subtitle.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateSubtitleRequest: object = { language: '', label: '' };

export const CreateSubtitleRequest = {
    encode(message: CreateSubtitleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.language !== '') {
            writer.uint32(10).string(message.language);
        }
        if (message.label !== '') {
            writer.uint32(18).string(message.label);
        }
        if (message.videoId !== undefined) {
            writer.uint32(8002).string(message.videoId);
        }
        if (message.upload !== undefined) {
            SubtitleUploadParams.encode(message.upload, writer.uint32(8802).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateSubtitleRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateSubtitleRequest } as CreateSubtitleRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.language = reader.string();
                    break;
                case 2:
                    message.label = reader.string();
                    break;
                case 1000:
                    message.videoId = reader.string();
                    break;
                case 1100:
                    message.upload = SubtitleUploadParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateSubtitleRequest {
        const message = { ...baseCreateSubtitleRequest } as CreateSubtitleRequest;
        message.language =
            object.language !== undefined && object.language !== null
                ? String(object.language)
                : '';
        message.label =
            object.label !== undefined && object.label !== null ? String(object.label) : '';
        message.videoId =
            object.videoId !== undefined && object.videoId !== null
                ? String(object.videoId)
                : undefined;
        message.upload =
            object.upload !== undefined && object.upload !== null
                ? SubtitleUploadParams.fromJSON(object.upload)
                : undefined;
        return message;
    },

    toJSON(message: CreateSubtitleRequest): unknown {
        const obj: any = {};
        message.language !== undefined && (obj.language = message.language);
        message.label !== undefined && (obj.label = message.label);
        message.videoId !== undefined && (obj.videoId = message.videoId);
        message.upload !== undefined &&
            (obj.upload = message.upload ? SubtitleUploadParams.toJSON(message.upload) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateSubtitleRequest>, I>>(
        object: I,
    ): CreateSubtitleRequest {
        const message = { ...baseCreateSubtitleRequest } as CreateSubtitleRequest;
        message.language = object.language ?? '';
        message.label = object.label ?? '';
        message.videoId = object.videoId ?? undefined;
        message.upload =
            object.upload !== undefined && object.upload !== null
                ? SubtitleUploadParams.fromPartial(object.upload)
                : undefined;
        return message;
    },
};

const baseSubtitleUploadParams: object = { filename: '' };

export const SubtitleUploadParams = {
    encode(message: SubtitleUploadParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.filename !== '') {
            writer.uint32(10).string(message.filename);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SubtitleUploadParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSubtitleUploadParams } as SubtitleUploadParams;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filename = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SubtitleUploadParams {
        const message = { ...baseSubtitleUploadParams } as SubtitleUploadParams;
        message.filename =
            object.filename !== undefined && object.filename !== null
                ? String(object.filename)
                : '';
        return message;
    },

    toJSON(message: SubtitleUploadParams): unknown {
        const obj: any = {};
        message.filename !== undefined && (obj.filename = message.filename);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SubtitleUploadParams>, I>>(
        object: I,
    ): SubtitleUploadParams {
        const message = { ...baseSubtitleUploadParams } as SubtitleUploadParams;
        message.filename = object.filename ?? '';
        return message;
    },
};

const baseCreateSubtitleMetadata: object = { subtitleId: '' };

export const CreateSubtitleMetadata = {
    encode(message: CreateSubtitleMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.subtitleId !== '') {
            writer.uint32(10).string(message.subtitleId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateSubtitleMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateSubtitleMetadata } as CreateSubtitleMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subtitleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateSubtitleMetadata {
        const message = { ...baseCreateSubtitleMetadata } as CreateSubtitleMetadata;
        message.subtitleId =
            object.subtitleId !== undefined && object.subtitleId !== null
                ? String(object.subtitleId)
                : '';
        return message;
    },

    toJSON(message: CreateSubtitleMetadata): unknown {
        const obj: any = {};
        message.subtitleId !== undefined && (obj.subtitleId = message.subtitleId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateSubtitleMetadata>, I>>(
        object: I,
    ): CreateSubtitleMetadata {
        const message = { ...baseCreateSubtitleMetadata } as CreateSubtitleMetadata;
        message.subtitleId = object.subtitleId ?? '';
        return message;
    },
};

const baseGenerateSubtitleUploadURLRequest: object = { subtitleId: '' };

export const GenerateSubtitleUploadURLRequest = {
    encode(
        message: GenerateSubtitleUploadURLRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.subtitleId !== '') {
            writer.uint32(10).string(message.subtitleId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GenerateSubtitleUploadURLRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGenerateSubtitleUploadURLRequest,
        } as GenerateSubtitleUploadURLRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subtitleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GenerateSubtitleUploadURLRequest {
        const message = {
            ...baseGenerateSubtitleUploadURLRequest,
        } as GenerateSubtitleUploadURLRequest;
        message.subtitleId =
            object.subtitleId !== undefined && object.subtitleId !== null
                ? String(object.subtitleId)
                : '';
        return message;
    },

    toJSON(message: GenerateSubtitleUploadURLRequest): unknown {
        const obj: any = {};
        message.subtitleId !== undefined && (obj.subtitleId = message.subtitleId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GenerateSubtitleUploadURLRequest>, I>>(
        object: I,
    ): GenerateSubtitleUploadURLRequest {
        const message = {
            ...baseGenerateSubtitleUploadURLRequest,
        } as GenerateSubtitleUploadURLRequest;
        message.subtitleId = object.subtitleId ?? '';
        return message;
    },
};

const baseGenerateSubtitleUploadURLResponse: object = { uploadUrl: '' };

export const GenerateSubtitleUploadURLResponse = {
    encode(
        message: GenerateSubtitleUploadURLResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.uploadUrl !== '') {
            writer.uint32(10).string(message.uploadUrl);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GenerateSubtitleUploadURLResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGenerateSubtitleUploadURLResponse,
        } as GenerateSubtitleUploadURLResponse;
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

    fromJSON(object: any): GenerateSubtitleUploadURLResponse {
        const message = {
            ...baseGenerateSubtitleUploadURLResponse,
        } as GenerateSubtitleUploadURLResponse;
        message.uploadUrl =
            object.uploadUrl !== undefined && object.uploadUrl !== null
                ? String(object.uploadUrl)
                : '';
        return message;
    },

    toJSON(message: GenerateSubtitleUploadURLResponse): unknown {
        const obj: any = {};
        message.uploadUrl !== undefined && (obj.uploadUrl = message.uploadUrl);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GenerateSubtitleUploadURLResponse>, I>>(
        object: I,
    ): GenerateSubtitleUploadURLResponse {
        const message = {
            ...baseGenerateSubtitleUploadURLResponse,
        } as GenerateSubtitleUploadURLResponse;
        message.uploadUrl = object.uploadUrl ?? '';
        return message;
    },
};

const baseDeleteSubtitleRequest: object = { subtitleId: '' };

export const DeleteSubtitleRequest = {
    encode(message: DeleteSubtitleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.subtitleId !== '') {
            writer.uint32(10).string(message.subtitleId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSubtitleRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteSubtitleRequest } as DeleteSubtitleRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subtitleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteSubtitleRequest {
        const message = { ...baseDeleteSubtitleRequest } as DeleteSubtitleRequest;
        message.subtitleId =
            object.subtitleId !== undefined && object.subtitleId !== null
                ? String(object.subtitleId)
                : '';
        return message;
    },

    toJSON(message: DeleteSubtitleRequest): unknown {
        const obj: any = {};
        message.subtitleId !== undefined && (obj.subtitleId = message.subtitleId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteSubtitleRequest>, I>>(
        object: I,
    ): DeleteSubtitleRequest {
        const message = { ...baseDeleteSubtitleRequest } as DeleteSubtitleRequest;
        message.subtitleId = object.subtitleId ?? '';
        return message;
    },
};

const baseDeleteSubtitleMetadata: object = { subtitleId: '' };

export const DeleteSubtitleMetadata = {
    encode(message: DeleteSubtitleMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.subtitleId !== '') {
            writer.uint32(10).string(message.subtitleId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSubtitleMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteSubtitleMetadata } as DeleteSubtitleMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subtitleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteSubtitleMetadata {
        const message = { ...baseDeleteSubtitleMetadata } as DeleteSubtitleMetadata;
        message.subtitleId =
            object.subtitleId !== undefined && object.subtitleId !== null
                ? String(object.subtitleId)
                : '';
        return message;
    },

    toJSON(message: DeleteSubtitleMetadata): unknown {
        const obj: any = {};
        message.subtitleId !== undefined && (obj.subtitleId = message.subtitleId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteSubtitleMetadata>, I>>(
        object: I,
    ): DeleteSubtitleMetadata {
        const message = { ...baseDeleteSubtitleMetadata } as DeleteSubtitleMetadata;
        message.subtitleId = object.subtitleId ?? '';
        return message;
    },
};

/** Subtitle management service. */
export const SubtitleServiceService = {
    /** Get a specific subtitle. */
    get: {
        path: '/yandex.cloud.video.v1.SubtitleService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetSubtitleRequest) =>
            Buffer.from(GetSubtitleRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetSubtitleRequest.decode(value),
        responseSerialize: (value: Subtitle) => Buffer.from(Subtitle.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Subtitle.decode(value),
    },
    /** List subtitles. */
    list: {
        path: '/yandex.cloud.video.v1.SubtitleService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListSubtitlesRequest) =>
            Buffer.from(ListSubtitlesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListSubtitlesRequest.decode(value),
        responseSerialize: (value: ListSubtitlesResponse) =>
            Buffer.from(ListSubtitlesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListSubtitlesResponse.decode(value),
    },
    /** Create a new subtitle. */
    create: {
        path: '/yandex.cloud.video.v1.SubtitleService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateSubtitleRequest) =>
            Buffer.from(CreateSubtitleRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateSubtitleRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Generate an upload URL to add a new subtitle file. */
    generateUploadURL: {
        path: '/yandex.cloud.video.v1.SubtitleService/GenerateUploadURL',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GenerateSubtitleUploadURLRequest) =>
            Buffer.from(GenerateSubtitleUploadURLRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GenerateSubtitleUploadURLRequest.decode(value),
        responseSerialize: (value: GenerateSubtitleUploadURLResponse) =>
            Buffer.from(GenerateSubtitleUploadURLResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GenerateSubtitleUploadURLResponse.decode(value),
    },
    /** Delete a specific subtitle. */
    delete: {
        path: '/yandex.cloud.video.v1.SubtitleService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteSubtitleRequest) =>
            Buffer.from(DeleteSubtitleRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteSubtitleRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface SubtitleServiceServer extends UntypedServiceImplementation {
    /** Get a specific subtitle. */
    get: handleUnaryCall<GetSubtitleRequest, Subtitle>;
    /** List subtitles. */
    list: handleUnaryCall<ListSubtitlesRequest, ListSubtitlesResponse>;
    /** Create a new subtitle. */
    create: handleUnaryCall<CreateSubtitleRequest, Operation>;
    /** Generate an upload URL to add a new subtitle file. */
    generateUploadURL: handleUnaryCall<
        GenerateSubtitleUploadURLRequest,
        GenerateSubtitleUploadURLResponse
    >;
    /** Delete a specific subtitle. */
    delete: handleUnaryCall<DeleteSubtitleRequest, Operation>;
}

export interface SubtitleServiceClient extends Client {
    /** Get a specific subtitle. */
    get(
        request: GetSubtitleRequest,
        callback: (error: ServiceError | null, response: Subtitle) => void,
    ): ClientUnaryCall;
    get(
        request: GetSubtitleRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Subtitle) => void,
    ): ClientUnaryCall;
    get(
        request: GetSubtitleRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Subtitle) => void,
    ): ClientUnaryCall;
    /** List subtitles. */
    list(
        request: ListSubtitlesRequest,
        callback: (error: ServiceError | null, response: ListSubtitlesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListSubtitlesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListSubtitlesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListSubtitlesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListSubtitlesResponse) => void,
    ): ClientUnaryCall;
    /** Create a new subtitle. */
    create(
        request: CreateSubtitleRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateSubtitleRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateSubtitleRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Generate an upload URL to add a new subtitle file. */
    generateUploadURL(
        request: GenerateSubtitleUploadURLRequest,
        callback: (error: ServiceError | null, response: GenerateSubtitleUploadURLResponse) => void,
    ): ClientUnaryCall;
    generateUploadURL(
        request: GenerateSubtitleUploadURLRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GenerateSubtitleUploadURLResponse) => void,
    ): ClientUnaryCall;
    generateUploadURL(
        request: GenerateSubtitleUploadURLRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GenerateSubtitleUploadURLResponse) => void,
    ): ClientUnaryCall;
    /** Delete a specific subtitle. */
    delete(
        request: DeleteSubtitleRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteSubtitleRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteSubtitleRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const SubtitleServiceClient = makeGenericClientConstructor(
    SubtitleServiceService,
    'yandex.cloud.video.v1.SubtitleService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): SubtitleServiceClient;
    service: typeof SubtitleServiceService;
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
