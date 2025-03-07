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
import { Duration } from '../../../../google/protobuf/duration';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { Episode } from '../../../../yandex/cloud/video/v1/episode';
import { Manifest } from '../../../../yandex/cloud/video/v1/manifest';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.video.v1';

export interface GetEpisodeRequest {
    /** ID of the episode. */
    episodeId: string;
}

export interface ListEpisodesRequest {
    /** ID of the stream. */
    streamId: string | undefined;
    /** ID of the line. */
    lineId: string | undefined;
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
     * Supported fields: ["title"]
     * Both snake_case and camelCase are supported for fields.
     */
    filter: string;
}

export interface ListEpisodesResponse {
    /** List of episodes for specific parent_id. */
    episodes: Episode[];
    /** Token for getting the next page. */
    nextPageToken: string;
}

export interface BatchGetEpisodesRequest {
    /** ID of the channel. */
    channelId: string;
    /** List of requested episode IDs. */
    episodeIds: string[];
}

export interface BatchGetEpisodesResponse {
    /** List of episodes for specific channel. */
    episodes: Episode[];
}

export interface CreateEpisodeRequest {
    /** ID of the stream. */
    streamId: string | undefined;
    /** ID of the line. */
    lineId: string | undefined;
    /** Episode title. */
    title: string;
    /** Episode description. */
    description: string;
    /** ID of the thumbnail. */
    thumbnailId: string;
    /** Episode start time. */
    startTime?: Date;
    /** Episode finish time. */
    finishTime?: Date;
    /**
     * Enables episode DVR mode. DVR seconds determines how many last seconds of the stream are available.
     *
     * possible values:
     *  * `0`: infinite dvr size, the full length of the stream allowed to display
     *  * `>0`: size of dvr window in seconds, the minimum value is 30s
     */
    dvrSeconds: number;
    /** Episode is available to everyone. */
    publicAccess?: EpisodePublicAccessParams | undefined;
    /** Checking access rights using the authorization system. */
    authSystemAccess?: EpisodeAuthSystemAccessParams | undefined;
    /** Checking access rights using url's signature. */
    signUrlAccess?: EpisodeSignURLAccessParams | undefined;
}

export interface EpisodePublicAccessParams {}

export interface EpisodeAuthSystemAccessParams {}

export interface EpisodeSignURLAccessParams {}

export interface CreateEpisodeMetadata {
    /** ID of the episode. */
    episodeId: string;
}

export interface UpdateEpisodeRequest {
    /** ID of the episode. */
    episodeId: string;
    /** Field mask that specifies which fields of the episode are going to be updated. */
    fieldMask?: FieldMask;
    /** Episode title. */
    title: string;
    /** Episode description. */
    description: string;
    /** ID of the thumbnail. */
    thumbnailId: string;
    startTime?: Date;
    /** Episode finish time. */
    finishTime?: Date;
    /**
     * Enables episode DVR mode. DVR seconds determines how many last seconds of the stream are available.
     *
     * possible values:
     *  * `0`: infinite dvr size, the full length of the stream allowed to display
     *  * `>0`: size of dvr window in seconds, the minimum value is 30s
     */
    dvrSeconds: number;
    /** Episode is available to everyone. */
    publicAccess?: EpisodePublicAccessParams | undefined;
    /** Checking access rights using the authorization system. */
    authSystemAccess?: EpisodeAuthSystemAccessParams | undefined;
    /** Checking access rights using url's signature. */
    signUrlAccess?: EpisodeSignURLAccessParams | undefined;
}

export interface UpdateEpisodeMetadata {
    /** ID of the episode. */
    episodeId: string;
}

export interface DeleteEpisodeRequest {
    /** ID of the episode. */
    episodeId: string;
}

export interface DeleteEpisodeMetadata {
    /** ID of the episode. */
    episodeId: string;
}

export interface BatchDeleteEpisodesRequest {
    /** ID of the stream. */
    streamId: string | undefined;
    /** ID of the line. */
    lineId: string | undefined;
    episodeIds: string[];
}

export interface BatchDeleteEpisodesMetadata {
    episodeIds: string[];
}

export interface PerformEpisodeActionRequest {
    /** ID of the episode. */
    episodeId: string;
    publish?: PublishEpisodeAction | undefined;
    unpublish?: UnpublishEpisodeAction | undefined;
}

export interface PublishEpisodeAction {}

export interface UnpublishEpisodeAction {}

export interface PerformEpisodeActionMetadata {
    /** ID of the episode. */
    episodeId: string;
}

export interface GetEpisodePlayerURLRequest {
    /** ID of the episode. */
    episodeId: string;
    params?: EpisodePlayerParams;
    /** Optional field, used to set custom url expiration duration for episodes with sign_url_access */
    signedUrlExpirationDuration?: Duration;
}

export interface EpisodePlayerParams {
    /** If true, a player will be muted by default. */
    mute: boolean;
    /** If true, playback will start automatically. */
    autoplay: boolean;
    /** If true, a player interface will be hidden by default. */
    hidden: boolean;
}

export interface GetEpisodePlayerURLResponse {
    /** Direct link to the video. */
    playerUrl: string;
    /** HTML embed code in Iframe format. */
    html: string;
}

export interface GetEpisodeManifestsRequest {
    /** ID of the episode. */
    episodeId: string;
}

export interface GetEpisodeManifestsResponse {
    manifests: Manifest[];
}

const baseGetEpisodeRequest: object = { episodeId: '' };

export const GetEpisodeRequest = {
    encode(message: GetEpisodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.episodeId !== '') {
            writer.uint32(10).string(message.episodeId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetEpisodeRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetEpisodeRequest } as GetEpisodeRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.episodeId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetEpisodeRequest {
        const message = { ...baseGetEpisodeRequest } as GetEpisodeRequest;
        message.episodeId =
            object.episodeId !== undefined && object.episodeId !== null
                ? String(object.episodeId)
                : '';
        return message;
    },

    toJSON(message: GetEpisodeRequest): unknown {
        const obj: any = {};
        message.episodeId !== undefined && (obj.episodeId = message.episodeId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetEpisodeRequest>, I>>(object: I): GetEpisodeRequest {
        const message = { ...baseGetEpisodeRequest } as GetEpisodeRequest;
        message.episodeId = object.episodeId ?? '';
        return message;
    },
};

const baseListEpisodesRequest: object = { pageSize: 0, pageToken: '', orderBy: '', filter: '' };

export const ListEpisodesRequest = {
    encode(message: ListEpisodesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.streamId !== undefined) {
            writer.uint32(10).string(message.streamId);
        }
        if (message.lineId !== undefined) {
            writer.uint32(18).string(message.lineId);
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListEpisodesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListEpisodesRequest } as ListEpisodesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.streamId = reader.string();
                    break;
                case 2:
                    message.lineId = reader.string();
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

    fromJSON(object: any): ListEpisodesRequest {
        const message = { ...baseListEpisodesRequest } as ListEpisodesRequest;
        message.streamId =
            object.streamId !== undefined && object.streamId !== null
                ? String(object.streamId)
                : undefined;
        message.lineId =
            object.lineId !== undefined && object.lineId !== null
                ? String(object.lineId)
                : undefined;
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

    toJSON(message: ListEpisodesRequest): unknown {
        const obj: any = {};
        message.streamId !== undefined && (obj.streamId = message.streamId);
        message.lineId !== undefined && (obj.lineId = message.lineId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListEpisodesRequest>, I>>(
        object: I,
    ): ListEpisodesRequest {
        const message = { ...baseListEpisodesRequest } as ListEpisodesRequest;
        message.streamId = object.streamId ?? undefined;
        message.lineId = object.lineId ?? undefined;
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.orderBy = object.orderBy ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListEpisodesResponse: object = { nextPageToken: '' };

export const ListEpisodesResponse = {
    encode(message: ListEpisodesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.episodes) {
            Episode.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(802).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListEpisodesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListEpisodesResponse } as ListEpisodesResponse;
        message.episodes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.episodes.push(Episode.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListEpisodesResponse {
        const message = { ...baseListEpisodesResponse } as ListEpisodesResponse;
        message.episodes = (object.episodes ?? []).map((e: any) => Episode.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListEpisodesResponse): unknown {
        const obj: any = {};
        if (message.episodes) {
            obj.episodes = message.episodes.map((e) => (e ? Episode.toJSON(e) : undefined));
        } else {
            obj.episodes = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListEpisodesResponse>, I>>(
        object: I,
    ): ListEpisodesResponse {
        const message = { ...baseListEpisodesResponse } as ListEpisodesResponse;
        message.episodes = object.episodes?.map((e) => Episode.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseBatchGetEpisodesRequest: object = { channelId: '', episodeIds: '' };

export const BatchGetEpisodesRequest = {
    encode(message: BatchGetEpisodesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
        }
        for (const v of message.episodeIds) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchGetEpisodesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchGetEpisodesRequest } as BatchGetEpisodesRequest;
        message.episodeIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.episodeIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchGetEpisodesRequest {
        const message = { ...baseBatchGetEpisodesRequest } as BatchGetEpisodesRequest;
        message.channelId =
            object.channelId !== undefined && object.channelId !== null
                ? String(object.channelId)
                : '';
        message.episodeIds = (object.episodeIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: BatchGetEpisodesRequest): unknown {
        const obj: any = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        if (message.episodeIds) {
            obj.episodeIds = message.episodeIds.map((e) => e);
        } else {
            obj.episodeIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchGetEpisodesRequest>, I>>(
        object: I,
    ): BatchGetEpisodesRequest {
        const message = { ...baseBatchGetEpisodesRequest } as BatchGetEpisodesRequest;
        message.channelId = object.channelId ?? '';
        message.episodeIds = object.episodeIds?.map((e) => e) || [];
        return message;
    },
};

const baseBatchGetEpisodesResponse: object = {};

export const BatchGetEpisodesResponse = {
    encode(
        message: BatchGetEpisodesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.episodes) {
            Episode.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchGetEpisodesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchGetEpisodesResponse } as BatchGetEpisodesResponse;
        message.episodes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.episodes.push(Episode.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchGetEpisodesResponse {
        const message = { ...baseBatchGetEpisodesResponse } as BatchGetEpisodesResponse;
        message.episodes = (object.episodes ?? []).map((e: any) => Episode.fromJSON(e));
        return message;
    },

    toJSON(message: BatchGetEpisodesResponse): unknown {
        const obj: any = {};
        if (message.episodes) {
            obj.episodes = message.episodes.map((e) => (e ? Episode.toJSON(e) : undefined));
        } else {
            obj.episodes = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchGetEpisodesResponse>, I>>(
        object: I,
    ): BatchGetEpisodesResponse {
        const message = { ...baseBatchGetEpisodesResponse } as BatchGetEpisodesResponse;
        message.episodes = object.episodes?.map((e) => Episode.fromPartial(e)) || [];
        return message;
    },
};

const baseCreateEpisodeRequest: object = {
    title: '',
    description: '',
    thumbnailId: '',
    dvrSeconds: 0,
};

export const CreateEpisodeRequest = {
    encode(message: CreateEpisodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.streamId !== undefined) {
            writer.uint32(802).string(message.streamId);
        }
        if (message.lineId !== undefined) {
            writer.uint32(810).string(message.lineId);
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
        if (message.startTime !== undefined) {
            Timestamp.encode(toTimestamp(message.startTime), writer.uint32(42).fork()).ldelim();
        }
        if (message.finishTime !== undefined) {
            Timestamp.encode(toTimestamp(message.finishTime), writer.uint32(50).fork()).ldelim();
        }
        if (message.dvrSeconds !== 0) {
            writer.uint32(56).int64(message.dvrSeconds);
        }
        if (message.publicAccess !== undefined) {
            EpisodePublicAccessParams.encode(
                message.publicAccess,
                writer.uint32(8002).fork(),
            ).ldelim();
        }
        if (message.authSystemAccess !== undefined) {
            EpisodeAuthSystemAccessParams.encode(
                message.authSystemAccess,
                writer.uint32(8018).fork(),
            ).ldelim();
        }
        if (message.signUrlAccess !== undefined) {
            EpisodeSignURLAccessParams.encode(
                message.signUrlAccess,
                writer.uint32(8026).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateEpisodeRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateEpisodeRequest } as CreateEpisodeRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 100:
                    message.streamId = reader.string();
                    break;
                case 101:
                    message.lineId = reader.string();
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
                    message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.finishTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.dvrSeconds = longToNumber(reader.int64() as Long);
                    break;
                case 1000:
                    message.publicAccess = EpisodePublicAccessParams.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 1002:
                    message.authSystemAccess = EpisodeAuthSystemAccessParams.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 1003:
                    message.signUrlAccess = EpisodeSignURLAccessParams.decode(
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

    fromJSON(object: any): CreateEpisodeRequest {
        const message = { ...baseCreateEpisodeRequest } as CreateEpisodeRequest;
        message.streamId =
            object.streamId !== undefined && object.streamId !== null
                ? String(object.streamId)
                : undefined;
        message.lineId =
            object.lineId !== undefined && object.lineId !== null
                ? String(object.lineId)
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
        message.startTime =
            object.startTime !== undefined && object.startTime !== null
                ? fromJsonTimestamp(object.startTime)
                : undefined;
        message.finishTime =
            object.finishTime !== undefined && object.finishTime !== null
                ? fromJsonTimestamp(object.finishTime)
                : undefined;
        message.dvrSeconds =
            object.dvrSeconds !== undefined && object.dvrSeconds !== null
                ? Number(object.dvrSeconds)
                : 0;
        message.publicAccess =
            object.publicAccess !== undefined && object.publicAccess !== null
                ? EpisodePublicAccessParams.fromJSON(object.publicAccess)
                : undefined;
        message.authSystemAccess =
            object.authSystemAccess !== undefined && object.authSystemAccess !== null
                ? EpisodeAuthSystemAccessParams.fromJSON(object.authSystemAccess)
                : undefined;
        message.signUrlAccess =
            object.signUrlAccess !== undefined && object.signUrlAccess !== null
                ? EpisodeSignURLAccessParams.fromJSON(object.signUrlAccess)
                : undefined;
        return message;
    },

    toJSON(message: CreateEpisodeRequest): unknown {
        const obj: any = {};
        message.streamId !== undefined && (obj.streamId = message.streamId);
        message.lineId !== undefined && (obj.lineId = message.lineId);
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.thumbnailId !== undefined && (obj.thumbnailId = message.thumbnailId);
        message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
        message.finishTime !== undefined && (obj.finishTime = message.finishTime.toISOString());
        message.dvrSeconds !== undefined && (obj.dvrSeconds = Math.round(message.dvrSeconds));
        message.publicAccess !== undefined &&
            (obj.publicAccess = message.publicAccess
                ? EpisodePublicAccessParams.toJSON(message.publicAccess)
                : undefined);
        message.authSystemAccess !== undefined &&
            (obj.authSystemAccess = message.authSystemAccess
                ? EpisodeAuthSystemAccessParams.toJSON(message.authSystemAccess)
                : undefined);
        message.signUrlAccess !== undefined &&
            (obj.signUrlAccess = message.signUrlAccess
                ? EpisodeSignURLAccessParams.toJSON(message.signUrlAccess)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateEpisodeRequest>, I>>(
        object: I,
    ): CreateEpisodeRequest {
        const message = { ...baseCreateEpisodeRequest } as CreateEpisodeRequest;
        message.streamId = object.streamId ?? undefined;
        message.lineId = object.lineId ?? undefined;
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.thumbnailId = object.thumbnailId ?? '';
        message.startTime = object.startTime ?? undefined;
        message.finishTime = object.finishTime ?? undefined;
        message.dvrSeconds = object.dvrSeconds ?? 0;
        message.publicAccess =
            object.publicAccess !== undefined && object.publicAccess !== null
                ? EpisodePublicAccessParams.fromPartial(object.publicAccess)
                : undefined;
        message.authSystemAccess =
            object.authSystemAccess !== undefined && object.authSystemAccess !== null
                ? EpisodeAuthSystemAccessParams.fromPartial(object.authSystemAccess)
                : undefined;
        message.signUrlAccess =
            object.signUrlAccess !== undefined && object.signUrlAccess !== null
                ? EpisodeSignURLAccessParams.fromPartial(object.signUrlAccess)
                : undefined;
        return message;
    },
};

const baseEpisodePublicAccessParams: object = {};

export const EpisodePublicAccessParams = {
    encode(_: EpisodePublicAccessParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EpisodePublicAccessParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEpisodePublicAccessParams } as EpisodePublicAccessParams;
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

    fromJSON(_: any): EpisodePublicAccessParams {
        const message = { ...baseEpisodePublicAccessParams } as EpisodePublicAccessParams;
        return message;
    },

    toJSON(_: EpisodePublicAccessParams): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<EpisodePublicAccessParams>, I>>(
        _: I,
    ): EpisodePublicAccessParams {
        const message = { ...baseEpisodePublicAccessParams } as EpisodePublicAccessParams;
        return message;
    },
};

const baseEpisodeAuthSystemAccessParams: object = {};

export const EpisodeAuthSystemAccessParams = {
    encode(_: EpisodeAuthSystemAccessParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EpisodeAuthSystemAccessParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEpisodeAuthSystemAccessParams } as EpisodeAuthSystemAccessParams;
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

    fromJSON(_: any): EpisodeAuthSystemAccessParams {
        const message = { ...baseEpisodeAuthSystemAccessParams } as EpisodeAuthSystemAccessParams;
        return message;
    },

    toJSON(_: EpisodeAuthSystemAccessParams): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<EpisodeAuthSystemAccessParams>, I>>(
        _: I,
    ): EpisodeAuthSystemAccessParams {
        const message = { ...baseEpisodeAuthSystemAccessParams } as EpisodeAuthSystemAccessParams;
        return message;
    },
};

const baseEpisodeSignURLAccessParams: object = {};

export const EpisodeSignURLAccessParams = {
    encode(_: EpisodeSignURLAccessParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EpisodeSignURLAccessParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEpisodeSignURLAccessParams } as EpisodeSignURLAccessParams;
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

    fromJSON(_: any): EpisodeSignURLAccessParams {
        const message = { ...baseEpisodeSignURLAccessParams } as EpisodeSignURLAccessParams;
        return message;
    },

    toJSON(_: EpisodeSignURLAccessParams): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<EpisodeSignURLAccessParams>, I>>(
        _: I,
    ): EpisodeSignURLAccessParams {
        const message = { ...baseEpisodeSignURLAccessParams } as EpisodeSignURLAccessParams;
        return message;
    },
};

const baseCreateEpisodeMetadata: object = { episodeId: '' };

export const CreateEpisodeMetadata = {
    encode(message: CreateEpisodeMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.episodeId !== '') {
            writer.uint32(10).string(message.episodeId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateEpisodeMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateEpisodeMetadata } as CreateEpisodeMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.episodeId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateEpisodeMetadata {
        const message = { ...baseCreateEpisodeMetadata } as CreateEpisodeMetadata;
        message.episodeId =
            object.episodeId !== undefined && object.episodeId !== null
                ? String(object.episodeId)
                : '';
        return message;
    },

    toJSON(message: CreateEpisodeMetadata): unknown {
        const obj: any = {};
        message.episodeId !== undefined && (obj.episodeId = message.episodeId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateEpisodeMetadata>, I>>(
        object: I,
    ): CreateEpisodeMetadata {
        const message = { ...baseCreateEpisodeMetadata } as CreateEpisodeMetadata;
        message.episodeId = object.episodeId ?? '';
        return message;
    },
};

const baseUpdateEpisodeRequest: object = {
    episodeId: '',
    title: '',
    description: '',
    thumbnailId: '',
    dvrSeconds: 0,
};

export const UpdateEpisodeRequest = {
    encode(message: UpdateEpisodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.episodeId !== '') {
            writer.uint32(10).string(message.episodeId);
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
        if (message.startTime !== undefined) {
            Timestamp.encode(toTimestamp(message.startTime), writer.uint32(50).fork()).ldelim();
        }
        if (message.finishTime !== undefined) {
            Timestamp.encode(toTimestamp(message.finishTime), writer.uint32(58).fork()).ldelim();
        }
        if (message.dvrSeconds !== 0) {
            writer.uint32(64).int64(message.dvrSeconds);
        }
        if (message.publicAccess !== undefined) {
            EpisodePublicAccessParams.encode(
                message.publicAccess,
                writer.uint32(8002).fork(),
            ).ldelim();
        }
        if (message.authSystemAccess !== undefined) {
            EpisodeAuthSystemAccessParams.encode(
                message.authSystemAccess,
                writer.uint32(8018).fork(),
            ).ldelim();
        }
        if (message.signUrlAccess !== undefined) {
            EpisodeSignURLAccessParams.encode(
                message.signUrlAccess,
                writer.uint32(8026).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateEpisodeRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateEpisodeRequest } as UpdateEpisodeRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.episodeId = reader.string();
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
                    message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.finishTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.dvrSeconds = longToNumber(reader.int64() as Long);
                    break;
                case 1000:
                    message.publicAccess = EpisodePublicAccessParams.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 1002:
                    message.authSystemAccess = EpisodeAuthSystemAccessParams.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 1003:
                    message.signUrlAccess = EpisodeSignURLAccessParams.decode(
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

    fromJSON(object: any): UpdateEpisodeRequest {
        const message = { ...baseUpdateEpisodeRequest } as UpdateEpisodeRequest;
        message.episodeId =
            object.episodeId !== undefined && object.episodeId !== null
                ? String(object.episodeId)
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
        message.startTime =
            object.startTime !== undefined && object.startTime !== null
                ? fromJsonTimestamp(object.startTime)
                : undefined;
        message.finishTime =
            object.finishTime !== undefined && object.finishTime !== null
                ? fromJsonTimestamp(object.finishTime)
                : undefined;
        message.dvrSeconds =
            object.dvrSeconds !== undefined && object.dvrSeconds !== null
                ? Number(object.dvrSeconds)
                : 0;
        message.publicAccess =
            object.publicAccess !== undefined && object.publicAccess !== null
                ? EpisodePublicAccessParams.fromJSON(object.publicAccess)
                : undefined;
        message.authSystemAccess =
            object.authSystemAccess !== undefined && object.authSystemAccess !== null
                ? EpisodeAuthSystemAccessParams.fromJSON(object.authSystemAccess)
                : undefined;
        message.signUrlAccess =
            object.signUrlAccess !== undefined && object.signUrlAccess !== null
                ? EpisodeSignURLAccessParams.fromJSON(object.signUrlAccess)
                : undefined;
        return message;
    },

    toJSON(message: UpdateEpisodeRequest): unknown {
        const obj: any = {};
        message.episodeId !== undefined && (obj.episodeId = message.episodeId);
        message.fieldMask !== undefined &&
            (obj.fieldMask = message.fieldMask ? FieldMask.toJSON(message.fieldMask) : undefined);
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.thumbnailId !== undefined && (obj.thumbnailId = message.thumbnailId);
        message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
        message.finishTime !== undefined && (obj.finishTime = message.finishTime.toISOString());
        message.dvrSeconds !== undefined && (obj.dvrSeconds = Math.round(message.dvrSeconds));
        message.publicAccess !== undefined &&
            (obj.publicAccess = message.publicAccess
                ? EpisodePublicAccessParams.toJSON(message.publicAccess)
                : undefined);
        message.authSystemAccess !== undefined &&
            (obj.authSystemAccess = message.authSystemAccess
                ? EpisodeAuthSystemAccessParams.toJSON(message.authSystemAccess)
                : undefined);
        message.signUrlAccess !== undefined &&
            (obj.signUrlAccess = message.signUrlAccess
                ? EpisodeSignURLAccessParams.toJSON(message.signUrlAccess)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateEpisodeRequest>, I>>(
        object: I,
    ): UpdateEpisodeRequest {
        const message = { ...baseUpdateEpisodeRequest } as UpdateEpisodeRequest;
        message.episodeId = object.episodeId ?? '';
        message.fieldMask =
            object.fieldMask !== undefined && object.fieldMask !== null
                ? FieldMask.fromPartial(object.fieldMask)
                : undefined;
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.thumbnailId = object.thumbnailId ?? '';
        message.startTime = object.startTime ?? undefined;
        message.finishTime = object.finishTime ?? undefined;
        message.dvrSeconds = object.dvrSeconds ?? 0;
        message.publicAccess =
            object.publicAccess !== undefined && object.publicAccess !== null
                ? EpisodePublicAccessParams.fromPartial(object.publicAccess)
                : undefined;
        message.authSystemAccess =
            object.authSystemAccess !== undefined && object.authSystemAccess !== null
                ? EpisodeAuthSystemAccessParams.fromPartial(object.authSystemAccess)
                : undefined;
        message.signUrlAccess =
            object.signUrlAccess !== undefined && object.signUrlAccess !== null
                ? EpisodeSignURLAccessParams.fromPartial(object.signUrlAccess)
                : undefined;
        return message;
    },
};

const baseUpdateEpisodeMetadata: object = { episodeId: '' };

export const UpdateEpisodeMetadata = {
    encode(message: UpdateEpisodeMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.episodeId !== '') {
            writer.uint32(10).string(message.episodeId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateEpisodeMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateEpisodeMetadata } as UpdateEpisodeMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.episodeId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateEpisodeMetadata {
        const message = { ...baseUpdateEpisodeMetadata } as UpdateEpisodeMetadata;
        message.episodeId =
            object.episodeId !== undefined && object.episodeId !== null
                ? String(object.episodeId)
                : '';
        return message;
    },

    toJSON(message: UpdateEpisodeMetadata): unknown {
        const obj: any = {};
        message.episodeId !== undefined && (obj.episodeId = message.episodeId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateEpisodeMetadata>, I>>(
        object: I,
    ): UpdateEpisodeMetadata {
        const message = { ...baseUpdateEpisodeMetadata } as UpdateEpisodeMetadata;
        message.episodeId = object.episodeId ?? '';
        return message;
    },
};

const baseDeleteEpisodeRequest: object = { episodeId: '' };

export const DeleteEpisodeRequest = {
    encode(message: DeleteEpisodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.episodeId !== '') {
            writer.uint32(10).string(message.episodeId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteEpisodeRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteEpisodeRequest } as DeleteEpisodeRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.episodeId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteEpisodeRequest {
        const message = { ...baseDeleteEpisodeRequest } as DeleteEpisodeRequest;
        message.episodeId =
            object.episodeId !== undefined && object.episodeId !== null
                ? String(object.episodeId)
                : '';
        return message;
    },

    toJSON(message: DeleteEpisodeRequest): unknown {
        const obj: any = {};
        message.episodeId !== undefined && (obj.episodeId = message.episodeId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteEpisodeRequest>, I>>(
        object: I,
    ): DeleteEpisodeRequest {
        const message = { ...baseDeleteEpisodeRequest } as DeleteEpisodeRequest;
        message.episodeId = object.episodeId ?? '';
        return message;
    },
};

const baseDeleteEpisodeMetadata: object = { episodeId: '' };

export const DeleteEpisodeMetadata = {
    encode(message: DeleteEpisodeMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.episodeId !== '') {
            writer.uint32(10).string(message.episodeId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteEpisodeMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteEpisodeMetadata } as DeleteEpisodeMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.episodeId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteEpisodeMetadata {
        const message = { ...baseDeleteEpisodeMetadata } as DeleteEpisodeMetadata;
        message.episodeId =
            object.episodeId !== undefined && object.episodeId !== null
                ? String(object.episodeId)
                : '';
        return message;
    },

    toJSON(message: DeleteEpisodeMetadata): unknown {
        const obj: any = {};
        message.episodeId !== undefined && (obj.episodeId = message.episodeId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteEpisodeMetadata>, I>>(
        object: I,
    ): DeleteEpisodeMetadata {
        const message = { ...baseDeleteEpisodeMetadata } as DeleteEpisodeMetadata;
        message.episodeId = object.episodeId ?? '';
        return message;
    },
};

const baseBatchDeleteEpisodesRequest: object = { episodeIds: '' };

export const BatchDeleteEpisodesRequest = {
    encode(
        message: BatchDeleteEpisodesRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.streamId !== undefined) {
            writer.uint32(802).string(message.streamId);
        }
        if (message.lineId !== undefined) {
            writer.uint32(810).string(message.lineId);
        }
        for (const v of message.episodeIds) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchDeleteEpisodesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchDeleteEpisodesRequest } as BatchDeleteEpisodesRequest;
        message.episodeIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 100:
                    message.streamId = reader.string();
                    break;
                case 101:
                    message.lineId = reader.string();
                    break;
                case 1:
                    message.episodeIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchDeleteEpisodesRequest {
        const message = { ...baseBatchDeleteEpisodesRequest } as BatchDeleteEpisodesRequest;
        message.streamId =
            object.streamId !== undefined && object.streamId !== null
                ? String(object.streamId)
                : undefined;
        message.lineId =
            object.lineId !== undefined && object.lineId !== null
                ? String(object.lineId)
                : undefined;
        message.episodeIds = (object.episodeIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: BatchDeleteEpisodesRequest): unknown {
        const obj: any = {};
        message.streamId !== undefined && (obj.streamId = message.streamId);
        message.lineId !== undefined && (obj.lineId = message.lineId);
        if (message.episodeIds) {
            obj.episodeIds = message.episodeIds.map((e) => e);
        } else {
            obj.episodeIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchDeleteEpisodesRequest>, I>>(
        object: I,
    ): BatchDeleteEpisodesRequest {
        const message = { ...baseBatchDeleteEpisodesRequest } as BatchDeleteEpisodesRequest;
        message.streamId = object.streamId ?? undefined;
        message.lineId = object.lineId ?? undefined;
        message.episodeIds = object.episodeIds?.map((e) => e) || [];
        return message;
    },
};

const baseBatchDeleteEpisodesMetadata: object = { episodeIds: '' };

export const BatchDeleteEpisodesMetadata = {
    encode(
        message: BatchDeleteEpisodesMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.episodeIds) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchDeleteEpisodesMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchDeleteEpisodesMetadata } as BatchDeleteEpisodesMetadata;
        message.episodeIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.episodeIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchDeleteEpisodesMetadata {
        const message = { ...baseBatchDeleteEpisodesMetadata } as BatchDeleteEpisodesMetadata;
        message.episodeIds = (object.episodeIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: BatchDeleteEpisodesMetadata): unknown {
        const obj: any = {};
        if (message.episodeIds) {
            obj.episodeIds = message.episodeIds.map((e) => e);
        } else {
            obj.episodeIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchDeleteEpisodesMetadata>, I>>(
        object: I,
    ): BatchDeleteEpisodesMetadata {
        const message = { ...baseBatchDeleteEpisodesMetadata } as BatchDeleteEpisodesMetadata;
        message.episodeIds = object.episodeIds?.map((e) => e) || [];
        return message;
    },
};

const basePerformEpisodeActionRequest: object = { episodeId: '' };

export const PerformEpisodeActionRequest = {
    encode(
        message: PerformEpisodeActionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.episodeId !== '') {
            writer.uint32(10).string(message.episodeId);
        }
        if (message.publish !== undefined) {
            PublishEpisodeAction.encode(message.publish, writer.uint32(8018).fork()).ldelim();
        }
        if (message.unpublish !== undefined) {
            UnpublishEpisodeAction.encode(message.unpublish, writer.uint32(8026).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PerformEpisodeActionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePerformEpisodeActionRequest } as PerformEpisodeActionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.episodeId = reader.string();
                    break;
                case 1002:
                    message.publish = PublishEpisodeAction.decode(reader, reader.uint32());
                    break;
                case 1003:
                    message.unpublish = UnpublishEpisodeAction.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PerformEpisodeActionRequest {
        const message = { ...basePerformEpisodeActionRequest } as PerformEpisodeActionRequest;
        message.episodeId =
            object.episodeId !== undefined && object.episodeId !== null
                ? String(object.episodeId)
                : '';
        message.publish =
            object.publish !== undefined && object.publish !== null
                ? PublishEpisodeAction.fromJSON(object.publish)
                : undefined;
        message.unpublish =
            object.unpublish !== undefined && object.unpublish !== null
                ? UnpublishEpisodeAction.fromJSON(object.unpublish)
                : undefined;
        return message;
    },

    toJSON(message: PerformEpisodeActionRequest): unknown {
        const obj: any = {};
        message.episodeId !== undefined && (obj.episodeId = message.episodeId);
        message.publish !== undefined &&
            (obj.publish = message.publish
                ? PublishEpisodeAction.toJSON(message.publish)
                : undefined);
        message.unpublish !== undefined &&
            (obj.unpublish = message.unpublish
                ? UnpublishEpisodeAction.toJSON(message.unpublish)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PerformEpisodeActionRequest>, I>>(
        object: I,
    ): PerformEpisodeActionRequest {
        const message = { ...basePerformEpisodeActionRequest } as PerformEpisodeActionRequest;
        message.episodeId = object.episodeId ?? '';
        message.publish =
            object.publish !== undefined && object.publish !== null
                ? PublishEpisodeAction.fromPartial(object.publish)
                : undefined;
        message.unpublish =
            object.unpublish !== undefined && object.unpublish !== null
                ? UnpublishEpisodeAction.fromPartial(object.unpublish)
                : undefined;
        return message;
    },
};

const basePublishEpisodeAction: object = {};

export const PublishEpisodeAction = {
    encode(_: PublishEpisodeAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PublishEpisodeAction {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePublishEpisodeAction } as PublishEpisodeAction;
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

    fromJSON(_: any): PublishEpisodeAction {
        const message = { ...basePublishEpisodeAction } as PublishEpisodeAction;
        return message;
    },

    toJSON(_: PublishEpisodeAction): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PublishEpisodeAction>, I>>(_: I): PublishEpisodeAction {
        const message = { ...basePublishEpisodeAction } as PublishEpisodeAction;
        return message;
    },
};

const baseUnpublishEpisodeAction: object = {};

export const UnpublishEpisodeAction = {
    encode(_: UnpublishEpisodeAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UnpublishEpisodeAction {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUnpublishEpisodeAction } as UnpublishEpisodeAction;
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

    fromJSON(_: any): UnpublishEpisodeAction {
        const message = { ...baseUnpublishEpisodeAction } as UnpublishEpisodeAction;
        return message;
    },

    toJSON(_: UnpublishEpisodeAction): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UnpublishEpisodeAction>, I>>(
        _: I,
    ): UnpublishEpisodeAction {
        const message = { ...baseUnpublishEpisodeAction } as UnpublishEpisodeAction;
        return message;
    },
};

const basePerformEpisodeActionMetadata: object = { episodeId: '' };

export const PerformEpisodeActionMetadata = {
    encode(
        message: PerformEpisodeActionMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.episodeId !== '') {
            writer.uint32(10).string(message.episodeId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PerformEpisodeActionMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePerformEpisodeActionMetadata } as PerformEpisodeActionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.episodeId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PerformEpisodeActionMetadata {
        const message = { ...basePerformEpisodeActionMetadata } as PerformEpisodeActionMetadata;
        message.episodeId =
            object.episodeId !== undefined && object.episodeId !== null
                ? String(object.episodeId)
                : '';
        return message;
    },

    toJSON(message: PerformEpisodeActionMetadata): unknown {
        const obj: any = {};
        message.episodeId !== undefined && (obj.episodeId = message.episodeId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PerformEpisodeActionMetadata>, I>>(
        object: I,
    ): PerformEpisodeActionMetadata {
        const message = { ...basePerformEpisodeActionMetadata } as PerformEpisodeActionMetadata;
        message.episodeId = object.episodeId ?? '';
        return message;
    },
};

const baseGetEpisodePlayerURLRequest: object = { episodeId: '' };

export const GetEpisodePlayerURLRequest = {
    encode(
        message: GetEpisodePlayerURLRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.episodeId !== '') {
            writer.uint32(10).string(message.episodeId);
        }
        if (message.params !== undefined) {
            EpisodePlayerParams.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        if (message.signedUrlExpirationDuration !== undefined) {
            Duration.encode(message.signedUrlExpirationDuration, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetEpisodePlayerURLRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetEpisodePlayerURLRequest } as GetEpisodePlayerURLRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.episodeId = reader.string();
                    break;
                case 2:
                    message.params = EpisodePlayerParams.decode(reader, reader.uint32());
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

    fromJSON(object: any): GetEpisodePlayerURLRequest {
        const message = { ...baseGetEpisodePlayerURLRequest } as GetEpisodePlayerURLRequest;
        message.episodeId =
            object.episodeId !== undefined && object.episodeId !== null
                ? String(object.episodeId)
                : '';
        message.params =
            object.params !== undefined && object.params !== null
                ? EpisodePlayerParams.fromJSON(object.params)
                : undefined;
        message.signedUrlExpirationDuration =
            object.signedUrlExpirationDuration !== undefined &&
            object.signedUrlExpirationDuration !== null
                ? Duration.fromJSON(object.signedUrlExpirationDuration)
                : undefined;
        return message;
    },

    toJSON(message: GetEpisodePlayerURLRequest): unknown {
        const obj: any = {};
        message.episodeId !== undefined && (obj.episodeId = message.episodeId);
        message.params !== undefined &&
            (obj.params = message.params ? EpisodePlayerParams.toJSON(message.params) : undefined);
        message.signedUrlExpirationDuration !== undefined &&
            (obj.signedUrlExpirationDuration = message.signedUrlExpirationDuration
                ? Duration.toJSON(message.signedUrlExpirationDuration)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetEpisodePlayerURLRequest>, I>>(
        object: I,
    ): GetEpisodePlayerURLRequest {
        const message = { ...baseGetEpisodePlayerURLRequest } as GetEpisodePlayerURLRequest;
        message.episodeId = object.episodeId ?? '';
        message.params =
            object.params !== undefined && object.params !== null
                ? EpisodePlayerParams.fromPartial(object.params)
                : undefined;
        message.signedUrlExpirationDuration =
            object.signedUrlExpirationDuration !== undefined &&
            object.signedUrlExpirationDuration !== null
                ? Duration.fromPartial(object.signedUrlExpirationDuration)
                : undefined;
        return message;
    },
};

const baseEpisodePlayerParams: object = { mute: false, autoplay: false, hidden: false };

export const EpisodePlayerParams = {
    encode(message: EpisodePlayerParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): EpisodePlayerParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEpisodePlayerParams } as EpisodePlayerParams;
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

    fromJSON(object: any): EpisodePlayerParams {
        const message = { ...baseEpisodePlayerParams } as EpisodePlayerParams;
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

    toJSON(message: EpisodePlayerParams): unknown {
        const obj: any = {};
        message.mute !== undefined && (obj.mute = message.mute);
        message.autoplay !== undefined && (obj.autoplay = message.autoplay);
        message.hidden !== undefined && (obj.hidden = message.hidden);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<EpisodePlayerParams>, I>>(
        object: I,
    ): EpisodePlayerParams {
        const message = { ...baseEpisodePlayerParams } as EpisodePlayerParams;
        message.mute = object.mute ?? false;
        message.autoplay = object.autoplay ?? false;
        message.hidden = object.hidden ?? false;
        return message;
    },
};

const baseGetEpisodePlayerURLResponse: object = { playerUrl: '', html: '' };

export const GetEpisodePlayerURLResponse = {
    encode(
        message: GetEpisodePlayerURLResponse,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): GetEpisodePlayerURLResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetEpisodePlayerURLResponse } as GetEpisodePlayerURLResponse;
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

    fromJSON(object: any): GetEpisodePlayerURLResponse {
        const message = { ...baseGetEpisodePlayerURLResponse } as GetEpisodePlayerURLResponse;
        message.playerUrl =
            object.playerUrl !== undefined && object.playerUrl !== null
                ? String(object.playerUrl)
                : '';
        message.html = object.html !== undefined && object.html !== null ? String(object.html) : '';
        return message;
    },

    toJSON(message: GetEpisodePlayerURLResponse): unknown {
        const obj: any = {};
        message.playerUrl !== undefined && (obj.playerUrl = message.playerUrl);
        message.html !== undefined && (obj.html = message.html);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetEpisodePlayerURLResponse>, I>>(
        object: I,
    ): GetEpisodePlayerURLResponse {
        const message = { ...baseGetEpisodePlayerURLResponse } as GetEpisodePlayerURLResponse;
        message.playerUrl = object.playerUrl ?? '';
        message.html = object.html ?? '';
        return message;
    },
};

const baseGetEpisodeManifestsRequest: object = { episodeId: '' };

export const GetEpisodeManifestsRequest = {
    encode(
        message: GetEpisodeManifestsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.episodeId !== '') {
            writer.uint32(10).string(message.episodeId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetEpisodeManifestsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetEpisodeManifestsRequest } as GetEpisodeManifestsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.episodeId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetEpisodeManifestsRequest {
        const message = { ...baseGetEpisodeManifestsRequest } as GetEpisodeManifestsRequest;
        message.episodeId =
            object.episodeId !== undefined && object.episodeId !== null
                ? String(object.episodeId)
                : '';
        return message;
    },

    toJSON(message: GetEpisodeManifestsRequest): unknown {
        const obj: any = {};
        message.episodeId !== undefined && (obj.episodeId = message.episodeId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetEpisodeManifestsRequest>, I>>(
        object: I,
    ): GetEpisodeManifestsRequest {
        const message = { ...baseGetEpisodeManifestsRequest } as GetEpisodeManifestsRequest;
        message.episodeId = object.episodeId ?? '';
        return message;
    },
};

const baseGetEpisodeManifestsResponse: object = {};

export const GetEpisodeManifestsResponse = {
    encode(
        message: GetEpisodeManifestsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.manifests) {
            Manifest.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetEpisodeManifestsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetEpisodeManifestsResponse } as GetEpisodeManifestsResponse;
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

    fromJSON(object: any): GetEpisodeManifestsResponse {
        const message = { ...baseGetEpisodeManifestsResponse } as GetEpisodeManifestsResponse;
        message.manifests = (object.manifests ?? []).map((e: any) => Manifest.fromJSON(e));
        return message;
    },

    toJSON(message: GetEpisodeManifestsResponse): unknown {
        const obj: any = {};
        if (message.manifests) {
            obj.manifests = message.manifests.map((e) => (e ? Manifest.toJSON(e) : undefined));
        } else {
            obj.manifests = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetEpisodeManifestsResponse>, I>>(
        object: I,
    ): GetEpisodeManifestsResponse {
        const message = { ...baseGetEpisodeManifestsResponse } as GetEpisodeManifestsResponse;
        message.manifests = object.manifests?.map((e) => Manifest.fromPartial(e)) || [];
        return message;
    },
};

/** Episode management service. */
export const EpisodeServiceService = {
    /** Returns the specific channel. */
    get: {
        path: '/yandex.cloud.video.v1.EpisodeService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetEpisodeRequest) =>
            Buffer.from(GetEpisodeRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetEpisodeRequest.decode(value),
        responseSerialize: (value: Episode) => Buffer.from(Episode.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Episode.decode(value),
    },
    /** List episodes for stream or line. */
    list: {
        path: '/yandex.cloud.video.v1.EpisodeService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListEpisodesRequest) =>
            Buffer.from(ListEpisodesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListEpisodesRequest.decode(value),
        responseSerialize: (value: ListEpisodesResponse) =>
            Buffer.from(ListEpisodesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListEpisodesResponse.decode(value),
    },
    /** Batch get episodes for channel. */
    batchGet: {
        path: '/yandex.cloud.video.v1.EpisodeService/BatchGet',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: BatchGetEpisodesRequest) =>
            Buffer.from(BatchGetEpisodesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => BatchGetEpisodesRequest.decode(value),
        responseSerialize: (value: BatchGetEpisodesResponse) =>
            Buffer.from(BatchGetEpisodesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => BatchGetEpisodesResponse.decode(value),
    },
    /** Create episode. */
    create: {
        path: '/yandex.cloud.video.v1.EpisodeService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateEpisodeRequest) =>
            Buffer.from(CreateEpisodeRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateEpisodeRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Update episode. */
    update: {
        path: '/yandex.cloud.video.v1.EpisodeService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateEpisodeRequest) =>
            Buffer.from(UpdateEpisodeRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateEpisodeRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Delete episode. */
    delete: {
        path: '/yandex.cloud.video.v1.EpisodeService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteEpisodeRequest) =>
            Buffer.from(DeleteEpisodeRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteEpisodeRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Batch delete episode. */
    batchDelete: {
        path: '/yandex.cloud.video.v1.EpisodeService/BatchDelete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: BatchDeleteEpisodesRequest) =>
            Buffer.from(BatchDeleteEpisodesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => BatchDeleteEpisodesRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Perform an action on the episode. */
    performAction: {
        path: '/yandex.cloud.video.v1.EpisodeService/PerformAction',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: PerformEpisodeActionRequest) =>
            Buffer.from(PerformEpisodeActionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => PerformEpisodeActionRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Returns url to the player. */
    getPlayerURL: {
        path: '/yandex.cloud.video.v1.EpisodeService/GetPlayerURL',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetEpisodePlayerURLRequest) =>
            Buffer.from(GetEpisodePlayerURLRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetEpisodePlayerURLRequest.decode(value),
        responseSerialize: (value: GetEpisodePlayerURLResponse) =>
            Buffer.from(GetEpisodePlayerURLResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetEpisodePlayerURLResponse.decode(value),
    },
    /** Returns manifest urls. */
    getManifests: {
        path: '/yandex.cloud.video.v1.EpisodeService/GetManifests',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetEpisodeManifestsRequest) =>
            Buffer.from(GetEpisodeManifestsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetEpisodeManifestsRequest.decode(value),
        responseSerialize: (value: GetEpisodeManifestsResponse) =>
            Buffer.from(GetEpisodeManifestsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetEpisodeManifestsResponse.decode(value),
    },
} as const;

export interface EpisodeServiceServer extends UntypedServiceImplementation {
    /** Returns the specific channel. */
    get: handleUnaryCall<GetEpisodeRequest, Episode>;
    /** List episodes for stream or line. */
    list: handleUnaryCall<ListEpisodesRequest, ListEpisodesResponse>;
    /** Batch get episodes for channel. */
    batchGet: handleUnaryCall<BatchGetEpisodesRequest, BatchGetEpisodesResponse>;
    /** Create episode. */
    create: handleUnaryCall<CreateEpisodeRequest, Operation>;
    /** Update episode. */
    update: handleUnaryCall<UpdateEpisodeRequest, Operation>;
    /** Delete episode. */
    delete: handleUnaryCall<DeleteEpisodeRequest, Operation>;
    /** Batch delete episode. */
    batchDelete: handleUnaryCall<BatchDeleteEpisodesRequest, Operation>;
    /** Perform an action on the episode. */
    performAction: handleUnaryCall<PerformEpisodeActionRequest, Operation>;
    /** Returns url to the player. */
    getPlayerURL: handleUnaryCall<GetEpisodePlayerURLRequest, GetEpisodePlayerURLResponse>;
    /** Returns manifest urls. */
    getManifests: handleUnaryCall<GetEpisodeManifestsRequest, GetEpisodeManifestsResponse>;
}

export interface EpisodeServiceClient extends Client {
    /** Returns the specific channel. */
    get(
        request: GetEpisodeRequest,
        callback: (error: ServiceError | null, response: Episode) => void,
    ): ClientUnaryCall;
    get(
        request: GetEpisodeRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Episode) => void,
    ): ClientUnaryCall;
    get(
        request: GetEpisodeRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Episode) => void,
    ): ClientUnaryCall;
    /** List episodes for stream or line. */
    list(
        request: ListEpisodesRequest,
        callback: (error: ServiceError | null, response: ListEpisodesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListEpisodesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListEpisodesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListEpisodesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListEpisodesResponse) => void,
    ): ClientUnaryCall;
    /** Batch get episodes for channel. */
    batchGet(
        request: BatchGetEpisodesRequest,
        callback: (error: ServiceError | null, response: BatchGetEpisodesResponse) => void,
    ): ClientUnaryCall;
    batchGet(
        request: BatchGetEpisodesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: BatchGetEpisodesResponse) => void,
    ): ClientUnaryCall;
    batchGet(
        request: BatchGetEpisodesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: BatchGetEpisodesResponse) => void,
    ): ClientUnaryCall;
    /** Create episode. */
    create(
        request: CreateEpisodeRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateEpisodeRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateEpisodeRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Update episode. */
    update(
        request: UpdateEpisodeRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateEpisodeRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateEpisodeRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Delete episode. */
    delete(
        request: DeleteEpisodeRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteEpisodeRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteEpisodeRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Batch delete episode. */
    batchDelete(
        request: BatchDeleteEpisodesRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    batchDelete(
        request: BatchDeleteEpisodesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    batchDelete(
        request: BatchDeleteEpisodesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Perform an action on the episode. */
    performAction(
        request: PerformEpisodeActionRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    performAction(
        request: PerformEpisodeActionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    performAction(
        request: PerformEpisodeActionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Returns url to the player. */
    getPlayerURL(
        request: GetEpisodePlayerURLRequest,
        callback: (error: ServiceError | null, response: GetEpisodePlayerURLResponse) => void,
    ): ClientUnaryCall;
    getPlayerURL(
        request: GetEpisodePlayerURLRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetEpisodePlayerURLResponse) => void,
    ): ClientUnaryCall;
    getPlayerURL(
        request: GetEpisodePlayerURLRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetEpisodePlayerURLResponse) => void,
    ): ClientUnaryCall;
    /** Returns manifest urls. */
    getManifests(
        request: GetEpisodeManifestsRequest,
        callback: (error: ServiceError | null, response: GetEpisodeManifestsResponse) => void,
    ): ClientUnaryCall;
    getManifests(
        request: GetEpisodeManifestsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetEpisodeManifestsResponse) => void,
    ): ClientUnaryCall;
    getManifests(
        request: GetEpisodeManifestsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetEpisodeManifestsResponse) => void,
    ): ClientUnaryCall;
}

export const EpisodeServiceClient = makeGenericClientConstructor(
    EpisodeServiceService,
    'yandex.cloud.video.v1.EpisodeService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): EpisodeServiceClient;
    service: typeof EpisodeServiceService;
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
