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
import { Channel } from '../../../../yandex/cloud/video/v1/channel';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../../yandex/cloud/access/access';

export const protobufPackage = 'yandex.cloud.video.v1';

export interface GetChannelRequest {
    /** ID of the channel. */
    channelId: string;
}

export interface ListChannelsRequest {
    /** ID of the organization. */
    organizationId: string;
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

export interface ListChannelsResponse {
    /** List of channels for specific organization. */
    channels: Channel[];
    /** Token for getting the next page. */
    nextPageToken: string;
}

export interface CreateChannelRequest {
    /** ID of the organization. */
    organizationId: string;
    /** Channel title. */
    title: string;
    /** Channel description. */
    description: string;
    /** Custom labels as `` key:value `` pairs. Maximum 64 per resource. */
    labels: { [key: string]: string };
}

export interface CreateChannelRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateChannelMetadata {
    /** ID of the channel. */
    channelId: string;
}

export interface UpdateChannelRequest {
    /** ID of the channel. */
    channelId: string;
    /** Field mask that specifies which fields of the channel are going to be updated. */
    fieldMask?: FieldMask;
    /** Channel title. */
    title: string;
    /** Channel description. */
    description: string;
    /** Custom labels as `` key:value `` pairs. Maximum 64 per resource. */
    labels: { [key: string]: string };
}

export interface UpdateChannelRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateChannelMetadata {
    /** ID of the channel. */
    channelId: string;
}

export interface DeleteChannelRequest {
    /** ID of the channel. */
    channelId: string;
}

export interface DeleteChannelMetadata {
    /** ID of the channel. */
    channelId: string;
}

export interface BatchDeleteChannelsRequest {
    /** ID of the organization. */
    organizationId: string;
    /** List of channel IDs. */
    channelIds: string[];
}

export interface BatchDeleteChannelsMetadata {
    /** List of channel IDs. */
    channelIds: string[];
}

const baseGetChannelRequest: object = { channelId: '' };

export const GetChannelRequest = {
    encode(message: GetChannelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetChannelRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetChannelRequest } as GetChannelRequest;
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

    fromJSON(object: any): GetChannelRequest {
        const message = { ...baseGetChannelRequest } as GetChannelRequest;
        message.channelId =
            object.channelId !== undefined && object.channelId !== null
                ? String(object.channelId)
                : '';
        return message;
    },

    toJSON(message: GetChannelRequest): unknown {
        const obj: any = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetChannelRequest>, I>>(object: I): GetChannelRequest {
        const message = { ...baseGetChannelRequest } as GetChannelRequest;
        message.channelId = object.channelId ?? '';
        return message;
    },
};

const baseListChannelsRequest: object = {
    organizationId: '',
    pageSize: 0,
    pageToken: '',
    orderBy: '',
    filter: '',
};

export const ListChannelsRequest = {
    encode(message: ListChannelsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListChannelsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListChannelsRequest } as ListChannelsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
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

    fromJSON(object: any): ListChannelsRequest {
        const message = { ...baseListChannelsRequest } as ListChannelsRequest;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
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

    toJSON(message: ListChannelsRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListChannelsRequest>, I>>(
        object: I,
    ): ListChannelsRequest {
        const message = { ...baseListChannelsRequest } as ListChannelsRequest;
        message.organizationId = object.organizationId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.orderBy = object.orderBy ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListChannelsResponse: object = { nextPageToken: '' };

export const ListChannelsResponse = {
    encode(message: ListChannelsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.channels) {
            Channel.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(802).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListChannelsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListChannelsResponse } as ListChannelsResponse;
        message.channels = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channels.push(Channel.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListChannelsResponse {
        const message = { ...baseListChannelsResponse } as ListChannelsResponse;
        message.channels = (object.channels ?? []).map((e: any) => Channel.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListChannelsResponse): unknown {
        const obj: any = {};
        if (message.channels) {
            obj.channels = message.channels.map((e) => (e ? Channel.toJSON(e) : undefined));
        } else {
            obj.channels = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListChannelsResponse>, I>>(
        object: I,
    ): ListChannelsResponse {
        const message = { ...baseListChannelsResponse } as ListChannelsResponse;
        message.channels = object.channels?.map((e) => Channel.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateChannelRequest: object = { organizationId: '', title: '', description: '' };

export const CreateChannelRequest = {
    encode(message: CreateChannelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.title !== '') {
            writer.uint32(18).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateChannelRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateChannelRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateChannelRequest } as CreateChannelRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 200:
                    const entry200 = CreateChannelRequest_LabelsEntry.decode(
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

    fromJSON(object: any): CreateChannelRequest {
        const message = { ...baseCreateChannelRequest } as CreateChannelRequest;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.title =
            object.title !== undefined && object.title !== null ? String(object.title) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: CreateChannelRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateChannelRequest>, I>>(
        object: I,
    ): CreateChannelRequest {
        const message = { ...baseCreateChannelRequest } as CreateChannelRequest;
        message.organizationId = object.organizationId ?? '';
        message.title = object.title ?? '';
        message.description = object.description ?? '';
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

const baseCreateChannelRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateChannelRequest_LabelsEntry = {
    encode(
        message: CreateChannelRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateChannelRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateChannelRequest_LabelsEntry,
        } as CreateChannelRequest_LabelsEntry;
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

    fromJSON(object: any): CreateChannelRequest_LabelsEntry {
        const message = {
            ...baseCreateChannelRequest_LabelsEntry,
        } as CreateChannelRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateChannelRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateChannelRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateChannelRequest_LabelsEntry {
        const message = {
            ...baseCreateChannelRequest_LabelsEntry,
        } as CreateChannelRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateChannelMetadata: object = { channelId: '' };

export const CreateChannelMetadata = {
    encode(message: CreateChannelMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateChannelMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateChannelMetadata } as CreateChannelMetadata;
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

    fromJSON(object: any): CreateChannelMetadata {
        const message = { ...baseCreateChannelMetadata } as CreateChannelMetadata;
        message.channelId =
            object.channelId !== undefined && object.channelId !== null
                ? String(object.channelId)
                : '';
        return message;
    },

    toJSON(message: CreateChannelMetadata): unknown {
        const obj: any = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateChannelMetadata>, I>>(
        object: I,
    ): CreateChannelMetadata {
        const message = { ...baseCreateChannelMetadata } as CreateChannelMetadata;
        message.channelId = object.channelId ?? '';
        return message;
    },
};

const baseUpdateChannelRequest: object = { channelId: '', title: '', description: '' };

export const UpdateChannelRequest = {
    encode(message: UpdateChannelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
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
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateChannelRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChannelRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateChannelRequest } as UpdateChannelRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
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
                case 200:
                    const entry200 = UpdateChannelRequest_LabelsEntry.decode(
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

    fromJSON(object: any): UpdateChannelRequest {
        const message = { ...baseUpdateChannelRequest } as UpdateChannelRequest;
        message.channelId =
            object.channelId !== undefined && object.channelId !== null
                ? String(object.channelId)
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
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: UpdateChannelRequest): unknown {
        const obj: any = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.fieldMask !== undefined &&
            (obj.fieldMask = message.fieldMask ? FieldMask.toJSON(message.fieldMask) : undefined);
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateChannelRequest>, I>>(
        object: I,
    ): UpdateChannelRequest {
        const message = { ...baseUpdateChannelRequest } as UpdateChannelRequest;
        message.channelId = object.channelId ?? '';
        message.fieldMask =
            object.fieldMask !== undefined && object.fieldMask !== null
                ? FieldMask.fromPartial(object.fieldMask)
                : undefined;
        message.title = object.title ?? '';
        message.description = object.description ?? '';
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

const baseUpdateChannelRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateChannelRequest_LabelsEntry = {
    encode(
        message: UpdateChannelRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChannelRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateChannelRequest_LabelsEntry,
        } as UpdateChannelRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateChannelRequest_LabelsEntry {
        const message = {
            ...baseUpdateChannelRequest_LabelsEntry,
        } as UpdateChannelRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateChannelRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateChannelRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateChannelRequest_LabelsEntry {
        const message = {
            ...baseUpdateChannelRequest_LabelsEntry,
        } as UpdateChannelRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateChannelMetadata: object = { channelId: '' };

export const UpdateChannelMetadata = {
    encode(message: UpdateChannelMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChannelMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateChannelMetadata } as UpdateChannelMetadata;
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

    fromJSON(object: any): UpdateChannelMetadata {
        const message = { ...baseUpdateChannelMetadata } as UpdateChannelMetadata;
        message.channelId =
            object.channelId !== undefined && object.channelId !== null
                ? String(object.channelId)
                : '';
        return message;
    },

    toJSON(message: UpdateChannelMetadata): unknown {
        const obj: any = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateChannelMetadata>, I>>(
        object: I,
    ): UpdateChannelMetadata {
        const message = { ...baseUpdateChannelMetadata } as UpdateChannelMetadata;
        message.channelId = object.channelId ?? '';
        return message;
    },
};

const baseDeleteChannelRequest: object = { channelId: '' };

export const DeleteChannelRequest = {
    encode(message: DeleteChannelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteChannelRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteChannelRequest } as DeleteChannelRequest;
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

    fromJSON(object: any): DeleteChannelRequest {
        const message = { ...baseDeleteChannelRequest } as DeleteChannelRequest;
        message.channelId =
            object.channelId !== undefined && object.channelId !== null
                ? String(object.channelId)
                : '';
        return message;
    },

    toJSON(message: DeleteChannelRequest): unknown {
        const obj: any = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteChannelRequest>, I>>(
        object: I,
    ): DeleteChannelRequest {
        const message = { ...baseDeleteChannelRequest } as DeleteChannelRequest;
        message.channelId = object.channelId ?? '';
        return message;
    },
};

const baseDeleteChannelMetadata: object = { channelId: '' };

export const DeleteChannelMetadata = {
    encode(message: DeleteChannelMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteChannelMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteChannelMetadata } as DeleteChannelMetadata;
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

    fromJSON(object: any): DeleteChannelMetadata {
        const message = { ...baseDeleteChannelMetadata } as DeleteChannelMetadata;
        message.channelId =
            object.channelId !== undefined && object.channelId !== null
                ? String(object.channelId)
                : '';
        return message;
    },

    toJSON(message: DeleteChannelMetadata): unknown {
        const obj: any = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteChannelMetadata>, I>>(
        object: I,
    ): DeleteChannelMetadata {
        const message = { ...baseDeleteChannelMetadata } as DeleteChannelMetadata;
        message.channelId = object.channelId ?? '';
        return message;
    },
};

const baseBatchDeleteChannelsRequest: object = { organizationId: '', channelIds: '' };

export const BatchDeleteChannelsRequest = {
    encode(
        message: BatchDeleteChannelsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        for (const v of message.channelIds) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchDeleteChannelsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchDeleteChannelsRequest } as BatchDeleteChannelsRequest;
        message.channelIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                case 2:
                    message.channelIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchDeleteChannelsRequest {
        const message = { ...baseBatchDeleteChannelsRequest } as BatchDeleteChannelsRequest;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.channelIds = (object.channelIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: BatchDeleteChannelsRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        if (message.channelIds) {
            obj.channelIds = message.channelIds.map((e) => e);
        } else {
            obj.channelIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchDeleteChannelsRequest>, I>>(
        object: I,
    ): BatchDeleteChannelsRequest {
        const message = { ...baseBatchDeleteChannelsRequest } as BatchDeleteChannelsRequest;
        message.organizationId = object.organizationId ?? '';
        message.channelIds = object.channelIds?.map((e) => e) || [];
        return message;
    },
};

const baseBatchDeleteChannelsMetadata: object = { channelIds: '' };

export const BatchDeleteChannelsMetadata = {
    encode(
        message: BatchDeleteChannelsMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.channelIds) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchDeleteChannelsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchDeleteChannelsMetadata } as BatchDeleteChannelsMetadata;
        message.channelIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchDeleteChannelsMetadata {
        const message = { ...baseBatchDeleteChannelsMetadata } as BatchDeleteChannelsMetadata;
        message.channelIds = (object.channelIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: BatchDeleteChannelsMetadata): unknown {
        const obj: any = {};
        if (message.channelIds) {
            obj.channelIds = message.channelIds.map((e) => e);
        } else {
            obj.channelIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchDeleteChannelsMetadata>, I>>(
        object: I,
    ): BatchDeleteChannelsMetadata {
        const message = { ...baseBatchDeleteChannelsMetadata } as BatchDeleteChannelsMetadata;
        message.channelIds = object.channelIds?.map((e) => e) || [];
        return message;
    },
};

/** Channel management service. */
export const ChannelServiceService = {
    /** Returns the specific channel. */
    get: {
        path: '/yandex.cloud.video.v1.ChannelService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetChannelRequest) =>
            Buffer.from(GetChannelRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetChannelRequest.decode(value),
        responseSerialize: (value: Channel) => Buffer.from(Channel.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Channel.decode(value),
    },
    /** List channels for organization. */
    list: {
        path: '/yandex.cloud.video.v1.ChannelService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListChannelsRequest) =>
            Buffer.from(ListChannelsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListChannelsRequest.decode(value),
        responseSerialize: (value: ListChannelsResponse) =>
            Buffer.from(ListChannelsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListChannelsResponse.decode(value),
    },
    /** Create channel. */
    create: {
        path: '/yandex.cloud.video.v1.ChannelService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateChannelRequest) =>
            Buffer.from(CreateChannelRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateChannelRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Update channel. */
    update: {
        path: '/yandex.cloud.video.v1.ChannelService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateChannelRequest) =>
            Buffer.from(UpdateChannelRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateChannelRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Delete channel. */
    delete: {
        path: '/yandex.cloud.video.v1.ChannelService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteChannelRequest) =>
            Buffer.from(DeleteChannelRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteChannelRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Batch delete channels. */
    batchDelete: {
        path: '/yandex.cloud.video.v1.ChannelService/BatchDelete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: BatchDeleteChannelsRequest) =>
            Buffer.from(BatchDeleteChannelsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => BatchDeleteChannelsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists existing access bindings for the specified channel. */
    listAccessBindings: {
        path: '/yandex.cloud.video.v1.ChannelService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the channel. */
    setAccessBindings: {
        path: '/yandex.cloud.video.v1.ChannelService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetAccessBindingsRequest) =>
            Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates access bindings for the specified channel. */
    updateAccessBindings: {
        path: '/yandex.cloud.video.v1.ChannelService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface ChannelServiceServer extends UntypedServiceImplementation {
    /** Returns the specific channel. */
    get: handleUnaryCall<GetChannelRequest, Channel>;
    /** List channels for organization. */
    list: handleUnaryCall<ListChannelsRequest, ListChannelsResponse>;
    /** Create channel. */
    create: handleUnaryCall<CreateChannelRequest, Operation>;
    /** Update channel. */
    update: handleUnaryCall<UpdateChannelRequest, Operation>;
    /** Delete channel. */
    delete: handleUnaryCall<DeleteChannelRequest, Operation>;
    /** Batch delete channels. */
    batchDelete: handleUnaryCall<BatchDeleteChannelsRequest, Operation>;
    /** Lists existing access bindings for the specified channel. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the channel. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified channel. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface ChannelServiceClient extends Client {
    /** Returns the specific channel. */
    get(
        request: GetChannelRequest,
        callback: (error: ServiceError | null, response: Channel) => void,
    ): ClientUnaryCall;
    get(
        request: GetChannelRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Channel) => void,
    ): ClientUnaryCall;
    get(
        request: GetChannelRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Channel) => void,
    ): ClientUnaryCall;
    /** List channels for organization. */
    list(
        request: ListChannelsRequest,
        callback: (error: ServiceError | null, response: ListChannelsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListChannelsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListChannelsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListChannelsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListChannelsResponse) => void,
    ): ClientUnaryCall;
    /** Create channel. */
    create(
        request: CreateChannelRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateChannelRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateChannelRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Update channel. */
    update(
        request: UpdateChannelRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateChannelRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateChannelRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Delete channel. */
    delete(
        request: DeleteChannelRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteChannelRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteChannelRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Batch delete channels. */
    batchDelete(
        request: BatchDeleteChannelsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    batchDelete(
        request: BatchDeleteChannelsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    batchDelete(
        request: BatchDeleteChannelsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists existing access bindings for the specified channel. */
    listAccessBindings(
        request: ListAccessBindingsRequest,
        callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
    ): ClientUnaryCall;
    /** Sets access bindings for the channel. */
    setAccessBindings(
        request: SetAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates access bindings for the specified channel. */
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const ChannelServiceClient = makeGenericClientConstructor(
    ChannelServiceService,
    'yandex.cloud.video.v1.ChannelService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ChannelServiceClient;
    service: typeof ChannelServiceService;
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
