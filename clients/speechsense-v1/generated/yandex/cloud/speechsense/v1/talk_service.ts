/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleClientStreamingCall,
    handleUnaryCall,
    Client,
    ClientWritableStream,
    Metadata,
    CallOptions,
    ClientUnaryCall,
    ServiceError,
} from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
import { AudioRequest, AudioStreamingRequest } from '../../../../yandex/cloud/speechsense/v1/audio';
import { TextContent } from '../../../../yandex/cloud/speechsense/v1/text';
import { Query, SortData, Filter } from '../../../../yandex/cloud/speechsense/v1/search';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Talk } from '../../../../yandex/cloud/speechsense/v1/talk';

export const protobufPackage = 'yandex.cloud.speechsense.v1';

export enum UserRole {
    USER_ROLE_UNSPECIFIED = 0,
    USER_ROLE_OPERATOR = 1,
    USER_ROLE_CLIENT = 2,
    USER_ROLE_BOT = 3,
    UNRECOGNIZED = -1,
}

export function userRoleFromJSON(object: any): UserRole {
    switch (object) {
        case 0:
        case 'USER_ROLE_UNSPECIFIED':
            return UserRole.USER_ROLE_UNSPECIFIED;
        case 1:
        case 'USER_ROLE_OPERATOR':
            return UserRole.USER_ROLE_OPERATOR;
        case 2:
        case 'USER_ROLE_CLIENT':
            return UserRole.USER_ROLE_CLIENT;
        case 3:
        case 'USER_ROLE_BOT':
            return UserRole.USER_ROLE_BOT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserRole.UNRECOGNIZED;
    }
}

export function userRoleToJSON(object: UserRole): string {
    switch (object) {
        case UserRole.USER_ROLE_UNSPECIFIED:
            return 'USER_ROLE_UNSPECIFIED';
        case UserRole.USER_ROLE_OPERATOR:
            return 'USER_ROLE_OPERATOR';
        case UserRole.USER_ROLE_CLIENT:
            return 'USER_ROLE_CLIENT';
        case UserRole.USER_ROLE_BOT:
            return 'USER_ROLE_BOT';
        default:
            return 'UNKNOWN';
    }
}

/** streaming request to create audio dialog */
export interface StreamTalkRequest {
    $type: 'yandex.cloud.speechsense.v1.StreamTalkRequest';
    /** talk document metadata containing channel id and channel field values */
    metadata?: TalkMetadata | undefined;
    /** audio metadata or chunk */
    audio?: AudioStreamingRequest | undefined;
}

/** request to create audio dialog */
export interface UploadTalkRequest {
    $type: 'yandex.cloud.speechsense.v1.UploadTalkRequest';
    metadata?: TalkMetadata;
    /** audio payload */
    audio?: AudioRequest;
}

export interface UploadTalkResponse {
    $type: 'yandex.cloud.speechsense.v1.UploadTalkResponse';
    /** id of created talk document */
    talkId: string;
}

/** request to create text based dialog */
export interface UploadTextRequest {
    $type: 'yandex.cloud.speechsense.v1.UploadTextRequest';
    metadata?: TalkMetadata;
    textContent?: TextContent;
}

export interface UploadTextResponse {
    $type: 'yandex.cloud.speechsense.v1.UploadTextResponse';
    /** id of created talk document */
    talkId: string;
}

export interface TalkMetadata {
    $type: 'yandex.cloud.speechsense.v1.TalkMetadata';
    /** id of connection this talk belongs too */
    connectionId: string;
    /** channel defined fields */
    fields: { [key: string]: string };
    /** per user specific metadata */
    users: UserMetadata[];
}

export interface TalkMetadata_FieldsEntry {
    $type: 'yandex.cloud.speechsense.v1.TalkMetadata.FieldsEntry';
    key: string;
    value: string;
}

export interface UserMetadata {
    $type: 'yandex.cloud.speechsense.v1.UserMetadata';
    id: string;
    role: UserRole;
    fields: { [key: string]: string };
}

export interface UserMetadata_FieldsEntry {
    $type: 'yandex.cloud.speechsense.v1.UserMetadata.FieldsEntry';
    key: string;
    value: string;
}

export interface SearchTalkRequest {
    $type: 'yandex.cloud.speechsense.v1.SearchTalkRequest';
    /** id of organization */
    organizationId: string;
    /** id of space */
    spaceId: string;
    /** id of connection */
    connectionId: string;
    /** id of project */
    projectId: string;
    /** metadata keys filters (user and system) */
    filters: Filter[];
    /** Full-text search query */
    query?: Query;
    /** page size, from 1 to 1000, default 100 */
    pageSize: number;
    /** next page token, if page is not first */
    pageToken: string;
    /** talks sorting options */
    sortData?: SortData;
}

export interface SearchTalkResponse {
    $type: 'yandex.cloud.speechsense.v1.SearchTalkResponse';
    /** page results entries */
    talkIds: string[];
    /** total documents matched */
    talksCount: number;
    /** page token for next request */
    nextPageToken: string;
}

export interface GetTalkRequest {
    $type: 'yandex.cloud.speechsense.v1.GetTalkRequest';
    /** id of organization */
    organizationId: string;
    /** id of space */
    spaceId: string;
    /** id of connection to search data */
    connectionId: string;
    /** id of project to search data */
    projectId: string;
    /**
     * ids of talks to return. Requesting too many talks may result in "message exceeds maximum size" error.
     * Up to 100 of talks per request is recommended.
     */
    talkIds: string[];
    /** All types of analysis will be returned if not set. */
    resultsMask?: FieldMask;
}

export interface GetTalkResponse {
    $type: 'yandex.cloud.speechsense.v1.GetTalkResponse';
    talk: Talk[];
}

const baseStreamTalkRequest: object = { $type: 'yandex.cloud.speechsense.v1.StreamTalkRequest' };

export const StreamTalkRequest = {
    $type: 'yandex.cloud.speechsense.v1.StreamTalkRequest' as const,

    encode(message: StreamTalkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.metadata !== undefined) {
            TalkMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
        }
        if (message.audio !== undefined) {
            AudioStreamingRequest.encode(message.audio, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StreamTalkRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStreamTalkRequest } as StreamTalkRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadata = TalkMetadata.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.audio = AudioStreamingRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StreamTalkRequest {
        const message = { ...baseStreamTalkRequest } as StreamTalkRequest;
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? TalkMetadata.fromJSON(object.metadata)
                : undefined;
        message.audio =
            object.audio !== undefined && object.audio !== null
                ? AudioStreamingRequest.fromJSON(object.audio)
                : undefined;
        return message;
    },

    toJSON(message: StreamTalkRequest): unknown {
        const obj: any = {};
        message.metadata !== undefined &&
            (obj.metadata = message.metadata ? TalkMetadata.toJSON(message.metadata) : undefined);
        message.audio !== undefined &&
            (obj.audio = message.audio ? AudioStreamingRequest.toJSON(message.audio) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StreamTalkRequest>, I>>(object: I): StreamTalkRequest {
        const message = { ...baseStreamTalkRequest } as StreamTalkRequest;
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? TalkMetadata.fromPartial(object.metadata)
                : undefined;
        message.audio =
            object.audio !== undefined && object.audio !== null
                ? AudioStreamingRequest.fromPartial(object.audio)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(StreamTalkRequest.$type, StreamTalkRequest);

const baseUploadTalkRequest: object = { $type: 'yandex.cloud.speechsense.v1.UploadTalkRequest' };

export const UploadTalkRequest = {
    $type: 'yandex.cloud.speechsense.v1.UploadTalkRequest' as const,

    encode(message: UploadTalkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.metadata !== undefined) {
            TalkMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
        }
        if (message.audio !== undefined) {
            AudioRequest.encode(message.audio, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UploadTalkRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUploadTalkRequest } as UploadTalkRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadata = TalkMetadata.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.audio = AudioRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UploadTalkRequest {
        const message = { ...baseUploadTalkRequest } as UploadTalkRequest;
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? TalkMetadata.fromJSON(object.metadata)
                : undefined;
        message.audio =
            object.audio !== undefined && object.audio !== null
                ? AudioRequest.fromJSON(object.audio)
                : undefined;
        return message;
    },

    toJSON(message: UploadTalkRequest): unknown {
        const obj: any = {};
        message.metadata !== undefined &&
            (obj.metadata = message.metadata ? TalkMetadata.toJSON(message.metadata) : undefined);
        message.audio !== undefined &&
            (obj.audio = message.audio ? AudioRequest.toJSON(message.audio) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UploadTalkRequest>, I>>(object: I): UploadTalkRequest {
        const message = { ...baseUploadTalkRequest } as UploadTalkRequest;
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? TalkMetadata.fromPartial(object.metadata)
                : undefined;
        message.audio =
            object.audio !== undefined && object.audio !== null
                ? AudioRequest.fromPartial(object.audio)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(UploadTalkRequest.$type, UploadTalkRequest);

const baseUploadTalkResponse: object = {
    $type: 'yandex.cloud.speechsense.v1.UploadTalkResponse',
    talkId: '',
};

export const UploadTalkResponse = {
    $type: 'yandex.cloud.speechsense.v1.UploadTalkResponse' as const,

    encode(message: UploadTalkResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.talkId !== '') {
            writer.uint32(10).string(message.talkId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UploadTalkResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUploadTalkResponse } as UploadTalkResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.talkId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UploadTalkResponse {
        const message = { ...baseUploadTalkResponse } as UploadTalkResponse;
        message.talkId =
            object.talkId !== undefined && object.talkId !== null ? String(object.talkId) : '';
        return message;
    },

    toJSON(message: UploadTalkResponse): unknown {
        const obj: any = {};
        message.talkId !== undefined && (obj.talkId = message.talkId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UploadTalkResponse>, I>>(
        object: I,
    ): UploadTalkResponse {
        const message = { ...baseUploadTalkResponse } as UploadTalkResponse;
        message.talkId = object.talkId ?? '';
        return message;
    },
};

messageTypeRegistry.set(UploadTalkResponse.$type, UploadTalkResponse);

const baseUploadTextRequest: object = { $type: 'yandex.cloud.speechsense.v1.UploadTextRequest' };

export const UploadTextRequest = {
    $type: 'yandex.cloud.speechsense.v1.UploadTextRequest' as const,

    encode(message: UploadTextRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.metadata !== undefined) {
            TalkMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
        }
        if (message.textContent !== undefined) {
            TextContent.encode(message.textContent, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UploadTextRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUploadTextRequest } as UploadTextRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadata = TalkMetadata.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.textContent = TextContent.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UploadTextRequest {
        const message = { ...baseUploadTextRequest } as UploadTextRequest;
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? TalkMetadata.fromJSON(object.metadata)
                : undefined;
        message.textContent =
            object.textContent !== undefined && object.textContent !== null
                ? TextContent.fromJSON(object.textContent)
                : undefined;
        return message;
    },

    toJSON(message: UploadTextRequest): unknown {
        const obj: any = {};
        message.metadata !== undefined &&
            (obj.metadata = message.metadata ? TalkMetadata.toJSON(message.metadata) : undefined);
        message.textContent !== undefined &&
            (obj.textContent = message.textContent
                ? TextContent.toJSON(message.textContent)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UploadTextRequest>, I>>(object: I): UploadTextRequest {
        const message = { ...baseUploadTextRequest } as UploadTextRequest;
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? TalkMetadata.fromPartial(object.metadata)
                : undefined;
        message.textContent =
            object.textContent !== undefined && object.textContent !== null
                ? TextContent.fromPartial(object.textContent)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(UploadTextRequest.$type, UploadTextRequest);

const baseUploadTextResponse: object = {
    $type: 'yandex.cloud.speechsense.v1.UploadTextResponse',
    talkId: '',
};

export const UploadTextResponse = {
    $type: 'yandex.cloud.speechsense.v1.UploadTextResponse' as const,

    encode(message: UploadTextResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.talkId !== '') {
            writer.uint32(10).string(message.talkId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UploadTextResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUploadTextResponse } as UploadTextResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.talkId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UploadTextResponse {
        const message = { ...baseUploadTextResponse } as UploadTextResponse;
        message.talkId =
            object.talkId !== undefined && object.talkId !== null ? String(object.talkId) : '';
        return message;
    },

    toJSON(message: UploadTextResponse): unknown {
        const obj: any = {};
        message.talkId !== undefined && (obj.talkId = message.talkId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UploadTextResponse>, I>>(
        object: I,
    ): UploadTextResponse {
        const message = { ...baseUploadTextResponse } as UploadTextResponse;
        message.talkId = object.talkId ?? '';
        return message;
    },
};

messageTypeRegistry.set(UploadTextResponse.$type, UploadTextResponse);

const baseTalkMetadata: object = {
    $type: 'yandex.cloud.speechsense.v1.TalkMetadata',
    connectionId: '',
};

export const TalkMetadata = {
    $type: 'yandex.cloud.speechsense.v1.TalkMetadata' as const,

    encode(message: TalkMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connectionId !== '') {
            writer.uint32(10).string(message.connectionId);
        }
        Object.entries(message.fields).forEach(([key, value]) => {
            TalkMetadata_FieldsEntry.encode(
                {
                    $type: 'yandex.cloud.speechsense.v1.TalkMetadata.FieldsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(18).fork(),
            ).ldelim();
        });
        for (const v of message.users) {
            UserMetadata.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TalkMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTalkMetadata } as TalkMetadata;
        message.fields = {};
        message.users = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                case 2:
                    const entry2 = TalkMetadata_FieldsEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.fields[entry2.key] = entry2.value;
                    }
                    break;
                case 3:
                    message.users.push(UserMetadata.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TalkMetadata {
        const message = { ...baseTalkMetadata } as TalkMetadata;
        message.connectionId =
            object.connectionId !== undefined && object.connectionId !== null
                ? String(object.connectionId)
                : '';
        message.fields = Object.entries(object.fields ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.users = (object.users ?? []).map((e: any) => UserMetadata.fromJSON(e));
        return message;
    },

    toJSON(message: TalkMetadata): unknown {
        const obj: any = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        obj.fields = {};
        if (message.fields) {
            Object.entries(message.fields).forEach(([k, v]) => {
                obj.fields[k] = v;
            });
        }
        if (message.users) {
            obj.users = message.users.map((e) => (e ? UserMetadata.toJSON(e) : undefined));
        } else {
            obj.users = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TalkMetadata>, I>>(object: I): TalkMetadata {
        const message = { ...baseTalkMetadata } as TalkMetadata;
        message.connectionId = object.connectionId ?? '';
        message.fields = Object.entries(object.fields ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.users = object.users?.map((e) => UserMetadata.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(TalkMetadata.$type, TalkMetadata);

const baseTalkMetadata_FieldsEntry: object = {
    $type: 'yandex.cloud.speechsense.v1.TalkMetadata.FieldsEntry',
    key: '',
    value: '',
};

export const TalkMetadata_FieldsEntry = {
    $type: 'yandex.cloud.speechsense.v1.TalkMetadata.FieldsEntry' as const,

    encode(
        message: TalkMetadata_FieldsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): TalkMetadata_FieldsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTalkMetadata_FieldsEntry } as TalkMetadata_FieldsEntry;
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

    fromJSON(object: any): TalkMetadata_FieldsEntry {
        const message = { ...baseTalkMetadata_FieldsEntry } as TalkMetadata_FieldsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: TalkMetadata_FieldsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TalkMetadata_FieldsEntry>, I>>(
        object: I,
    ): TalkMetadata_FieldsEntry {
        const message = { ...baseTalkMetadata_FieldsEntry } as TalkMetadata_FieldsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(TalkMetadata_FieldsEntry.$type, TalkMetadata_FieldsEntry);

const baseUserMetadata: object = {
    $type: 'yandex.cloud.speechsense.v1.UserMetadata',
    id: '',
    role: 0,
};

export const UserMetadata = {
    $type: 'yandex.cloud.speechsense.v1.UserMetadata' as const,

    encode(message: UserMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.role !== 0) {
            writer.uint32(16).int32(message.role);
        }
        Object.entries(message.fields).forEach(([key, value]) => {
            UserMetadata_FieldsEntry.encode(
                {
                    $type: 'yandex.cloud.speechsense.v1.UserMetadata.FieldsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(26).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UserMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserMetadata } as UserMetadata;
        message.fields = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.role = reader.int32() as any;
                    break;
                case 3:
                    const entry3 = UserMetadata_FieldsEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.fields[entry3.key] = entry3.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UserMetadata {
        const message = { ...baseUserMetadata } as UserMetadata;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.role =
            object.role !== undefined && object.role !== null ? userRoleFromJSON(object.role) : 0;
        message.fields = Object.entries(object.fields ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: UserMetadata): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.role !== undefined && (obj.role = userRoleToJSON(message.role));
        obj.fields = {};
        if (message.fields) {
            Object.entries(message.fields).forEach(([k, v]) => {
                obj.fields[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UserMetadata>, I>>(object: I): UserMetadata {
        const message = { ...baseUserMetadata } as UserMetadata;
        message.id = object.id ?? '';
        message.role = object.role ?? 0;
        message.fields = Object.entries(object.fields ?? {}).reduce<{ [key: string]: string }>(
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

messageTypeRegistry.set(UserMetadata.$type, UserMetadata);

const baseUserMetadata_FieldsEntry: object = {
    $type: 'yandex.cloud.speechsense.v1.UserMetadata.FieldsEntry',
    key: '',
    value: '',
};

export const UserMetadata_FieldsEntry = {
    $type: 'yandex.cloud.speechsense.v1.UserMetadata.FieldsEntry' as const,

    encode(
        message: UserMetadata_FieldsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UserMetadata_FieldsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserMetadata_FieldsEntry } as UserMetadata_FieldsEntry;
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

    fromJSON(object: any): UserMetadata_FieldsEntry {
        const message = { ...baseUserMetadata_FieldsEntry } as UserMetadata_FieldsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UserMetadata_FieldsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UserMetadata_FieldsEntry>, I>>(
        object: I,
    ): UserMetadata_FieldsEntry {
        const message = { ...baseUserMetadata_FieldsEntry } as UserMetadata_FieldsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(UserMetadata_FieldsEntry.$type, UserMetadata_FieldsEntry);

const baseSearchTalkRequest: object = {
    $type: 'yandex.cloud.speechsense.v1.SearchTalkRequest',
    organizationId: '',
    spaceId: '',
    connectionId: '',
    projectId: '',
    pageSize: 0,
    pageToken: '',
};

export const SearchTalkRequest = {
    $type: 'yandex.cloud.speechsense.v1.SearchTalkRequest' as const,

    encode(message: SearchTalkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.spaceId !== '') {
            writer.uint32(18).string(message.spaceId);
        }
        if (message.connectionId !== '') {
            writer.uint32(26).string(message.connectionId);
        }
        if (message.projectId !== '') {
            writer.uint32(34).string(message.projectId);
        }
        for (const v of message.filters) {
            Filter.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        if (message.query !== undefined) {
            Query.encode(message.query, writer.uint32(50).fork()).ldelim();
        }
        if (message.pageSize !== 0) {
            writer.uint32(56).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(66).string(message.pageToken);
        }
        if (message.sortData !== undefined) {
            SortData.encode(message.sortData, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SearchTalkRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSearchTalkRequest } as SearchTalkRequest;
        message.filters = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    message.connectionId = reader.string();
                    break;
                case 4:
                    message.projectId = reader.string();
                    break;
                case 5:
                    message.filters.push(Filter.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.query = Query.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 8:
                    message.pageToken = reader.string();
                    break;
                case 9:
                    message.sortData = SortData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SearchTalkRequest {
        const message = { ...baseSearchTalkRequest } as SearchTalkRequest;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.spaceId =
            object.spaceId !== undefined && object.spaceId !== null ? String(object.spaceId) : '';
        message.connectionId =
            object.connectionId !== undefined && object.connectionId !== null
                ? String(object.connectionId)
                : '';
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : '';
        message.filters = (object.filters ?? []).map((e: any) => Filter.fromJSON(e));
        message.query =
            object.query !== undefined && object.query !== null
                ? Query.fromJSON(object.query)
                : undefined;
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        message.sortData =
            object.sortData !== undefined && object.sortData !== null
                ? SortData.fromJSON(object.sortData)
                : undefined;
        return message;
    },

    toJSON(message: SearchTalkRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.spaceId !== undefined && (obj.spaceId = message.spaceId);
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        if (message.filters) {
            obj.filters = message.filters.map((e) => (e ? Filter.toJSON(e) : undefined));
        } else {
            obj.filters = [];
        }
        message.query !== undefined &&
            (obj.query = message.query ? Query.toJSON(message.query) : undefined);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.sortData !== undefined &&
            (obj.sortData = message.sortData ? SortData.toJSON(message.sortData) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SearchTalkRequest>, I>>(object: I): SearchTalkRequest {
        const message = { ...baseSearchTalkRequest } as SearchTalkRequest;
        message.organizationId = object.organizationId ?? '';
        message.spaceId = object.spaceId ?? '';
        message.connectionId = object.connectionId ?? '';
        message.projectId = object.projectId ?? '';
        message.filters = object.filters?.map((e) => Filter.fromPartial(e)) || [];
        message.query =
            object.query !== undefined && object.query !== null
                ? Query.fromPartial(object.query)
                : undefined;
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.sortData =
            object.sortData !== undefined && object.sortData !== null
                ? SortData.fromPartial(object.sortData)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(SearchTalkRequest.$type, SearchTalkRequest);

const baseSearchTalkResponse: object = {
    $type: 'yandex.cloud.speechsense.v1.SearchTalkResponse',
    talkIds: '',
    talksCount: 0,
    nextPageToken: '',
};

export const SearchTalkResponse = {
    $type: 'yandex.cloud.speechsense.v1.SearchTalkResponse' as const,

    encode(message: SearchTalkResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.talkIds) {
            writer.uint32(10).string(v!);
        }
        if (message.talksCount !== 0) {
            writer.uint32(16).int64(message.talksCount);
        }
        if (message.nextPageToken !== '') {
            writer.uint32(26).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SearchTalkResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSearchTalkResponse } as SearchTalkResponse;
        message.talkIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.talkIds.push(reader.string());
                    break;
                case 2:
                    message.talksCount = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SearchTalkResponse {
        const message = { ...baseSearchTalkResponse } as SearchTalkResponse;
        message.talkIds = (object.talkIds ?? []).map((e: any) => String(e));
        message.talksCount =
            object.talksCount !== undefined && object.talksCount !== null
                ? Number(object.talksCount)
                : 0;
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: SearchTalkResponse): unknown {
        const obj: any = {};
        if (message.talkIds) {
            obj.talkIds = message.talkIds.map((e) => e);
        } else {
            obj.talkIds = [];
        }
        message.talksCount !== undefined && (obj.talksCount = Math.round(message.talksCount));
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SearchTalkResponse>, I>>(
        object: I,
    ): SearchTalkResponse {
        const message = { ...baseSearchTalkResponse } as SearchTalkResponse;
        message.talkIds = object.talkIds?.map((e) => e) || [];
        message.talksCount = object.talksCount ?? 0;
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(SearchTalkResponse.$type, SearchTalkResponse);

const baseGetTalkRequest: object = {
    $type: 'yandex.cloud.speechsense.v1.GetTalkRequest',
    organizationId: '',
    spaceId: '',
    connectionId: '',
    projectId: '',
    talkIds: '',
};

export const GetTalkRequest = {
    $type: 'yandex.cloud.speechsense.v1.GetTalkRequest' as const,

    encode(message: GetTalkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.spaceId !== '') {
            writer.uint32(18).string(message.spaceId);
        }
        if (message.connectionId !== '') {
            writer.uint32(26).string(message.connectionId);
        }
        if (message.projectId !== '') {
            writer.uint32(34).string(message.projectId);
        }
        for (const v of message.talkIds) {
            writer.uint32(42).string(v!);
        }
        if (message.resultsMask !== undefined) {
            FieldMask.encode(message.resultsMask, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetTalkRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetTalkRequest } as GetTalkRequest;
        message.talkIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                case 2:
                    message.spaceId = reader.string();
                    break;
                case 3:
                    message.connectionId = reader.string();
                    break;
                case 4:
                    message.projectId = reader.string();
                    break;
                case 5:
                    message.talkIds.push(reader.string());
                    break;
                case 6:
                    message.resultsMask = FieldMask.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetTalkRequest {
        const message = { ...baseGetTalkRequest } as GetTalkRequest;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.spaceId =
            object.spaceId !== undefined && object.spaceId !== null ? String(object.spaceId) : '';
        message.connectionId =
            object.connectionId !== undefined && object.connectionId !== null
                ? String(object.connectionId)
                : '';
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : '';
        message.talkIds = (object.talkIds ?? []).map((e: any) => String(e));
        message.resultsMask =
            object.resultsMask !== undefined && object.resultsMask !== null
                ? FieldMask.fromJSON(object.resultsMask)
                : undefined;
        return message;
    },

    toJSON(message: GetTalkRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.spaceId !== undefined && (obj.spaceId = message.spaceId);
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        if (message.talkIds) {
            obj.talkIds = message.talkIds.map((e) => e);
        } else {
            obj.talkIds = [];
        }
        message.resultsMask !== undefined &&
            (obj.resultsMask = message.resultsMask
                ? FieldMask.toJSON(message.resultsMask)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetTalkRequest>, I>>(object: I): GetTalkRequest {
        const message = { ...baseGetTalkRequest } as GetTalkRequest;
        message.organizationId = object.organizationId ?? '';
        message.spaceId = object.spaceId ?? '';
        message.connectionId = object.connectionId ?? '';
        message.projectId = object.projectId ?? '';
        message.talkIds = object.talkIds?.map((e) => e) || [];
        message.resultsMask =
            object.resultsMask !== undefined && object.resultsMask !== null
                ? FieldMask.fromPartial(object.resultsMask)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(GetTalkRequest.$type, GetTalkRequest);

const baseGetTalkResponse: object = { $type: 'yandex.cloud.speechsense.v1.GetTalkResponse' };

export const GetTalkResponse = {
    $type: 'yandex.cloud.speechsense.v1.GetTalkResponse' as const,

    encode(message: GetTalkResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.talk) {
            Talk.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetTalkResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetTalkResponse } as GetTalkResponse;
        message.talk = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.talk.push(Talk.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetTalkResponse {
        const message = { ...baseGetTalkResponse } as GetTalkResponse;
        message.talk = (object.talk ?? []).map((e: any) => Talk.fromJSON(e));
        return message;
    },

    toJSON(message: GetTalkResponse): unknown {
        const obj: any = {};
        if (message.talk) {
            obj.talk = message.talk.map((e) => (e ? Talk.toJSON(e) : undefined));
        } else {
            obj.talk = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetTalkResponse>, I>>(object: I): GetTalkResponse {
        const message = { ...baseGetTalkResponse } as GetTalkResponse;
        message.talk = object.talk?.map((e) => Talk.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(GetTalkResponse.$type, GetTalkResponse);

export const TalkServiceService = {
    /**
     * rpc for streaming talk documents. First message should contain Talk related metadata,
     * second - audio metadata, others should contain audio bytes in chunks
     */
    uploadAsStream: {
        path: '/yandex.cloud.speechsense.v1.TalkService/UploadAsStream',
        requestStream: true,
        responseStream: false,
        requestSerialize: (value: StreamTalkRequest) =>
            Buffer.from(StreamTalkRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StreamTalkRequest.decode(value),
        responseSerialize: (value: UploadTalkResponse) =>
            Buffer.from(UploadTalkResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => UploadTalkResponse.decode(value),
    },
    /** rpc for uploading talk document as single message */
    upload: {
        path: '/yandex.cloud.speechsense.v1.TalkService/Upload',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UploadTalkRequest) =>
            Buffer.from(UploadTalkRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UploadTalkRequest.decode(value),
        responseSerialize: (value: UploadTalkResponse) =>
            Buffer.from(UploadTalkResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => UploadTalkResponse.decode(value),
    },
    /** rpc for uploading text talk document */
    uploadText: {
        path: '/yandex.cloud.speechsense.v1.TalkService/UploadText',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UploadTextRequest) =>
            Buffer.from(UploadTextRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UploadTextRequest.decode(value),
        responseSerialize: (value: UploadTextResponse) =>
            Buffer.from(UploadTextResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => UploadTextResponse.decode(value),
    },
    /** rpc for searching talks. will return ids only */
    search: {
        path: '/yandex.cloud.speechsense.v1.TalkService/Search',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SearchTalkRequest) =>
            Buffer.from(SearchTalkRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SearchTalkRequest.decode(value),
        responseSerialize: (value: SearchTalkResponse) =>
            Buffer.from(SearchTalkResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => SearchTalkResponse.decode(value),
    },
    /** rpc for bulk get */
    get: {
        path: '/yandex.cloud.speechsense.v1.TalkService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetTalkRequest) =>
            Buffer.from(GetTalkRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetTalkRequest.decode(value),
        responseSerialize: (value: GetTalkResponse) =>
            Buffer.from(GetTalkResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetTalkResponse.decode(value),
    },
} as const;

export interface TalkServiceServer extends UntypedServiceImplementation {
    /**
     * rpc for streaming talk documents. First message should contain Talk related metadata,
     * second - audio metadata, others should contain audio bytes in chunks
     */
    uploadAsStream: handleClientStreamingCall<StreamTalkRequest, UploadTalkResponse>;
    /** rpc for uploading talk document as single message */
    upload: handleUnaryCall<UploadTalkRequest, UploadTalkResponse>;
    /** rpc for uploading text talk document */
    uploadText: handleUnaryCall<UploadTextRequest, UploadTextResponse>;
    /** rpc for searching talks. will return ids only */
    search: handleUnaryCall<SearchTalkRequest, SearchTalkResponse>;
    /** rpc for bulk get */
    get: handleUnaryCall<GetTalkRequest, GetTalkResponse>;
}

export interface TalkServiceClient extends Client {
    /**
     * rpc for streaming talk documents. First message should contain Talk related metadata,
     * second - audio metadata, others should contain audio bytes in chunks
     */
    uploadAsStream(
        callback: (error: ServiceError | null, response: UploadTalkResponse) => void,
    ): ClientWritableStream<StreamTalkRequest>;
    uploadAsStream(
        metadata: Metadata,
        callback: (error: ServiceError | null, response: UploadTalkResponse) => void,
    ): ClientWritableStream<StreamTalkRequest>;
    uploadAsStream(
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: UploadTalkResponse) => void,
    ): ClientWritableStream<StreamTalkRequest>;
    uploadAsStream(
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: UploadTalkResponse) => void,
    ): ClientWritableStream<StreamTalkRequest>;
    /** rpc for uploading talk document as single message */
    upload(
        request: UploadTalkRequest,
        callback: (error: ServiceError | null, response: UploadTalkResponse) => void,
    ): ClientUnaryCall;
    upload(
        request: UploadTalkRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: UploadTalkResponse) => void,
    ): ClientUnaryCall;
    upload(
        request: UploadTalkRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: UploadTalkResponse) => void,
    ): ClientUnaryCall;
    /** rpc for uploading text talk document */
    uploadText(
        request: UploadTextRequest,
        callback: (error: ServiceError | null, response: UploadTextResponse) => void,
    ): ClientUnaryCall;
    uploadText(
        request: UploadTextRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: UploadTextResponse) => void,
    ): ClientUnaryCall;
    uploadText(
        request: UploadTextRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: UploadTextResponse) => void,
    ): ClientUnaryCall;
    /** rpc for searching talks. will return ids only */
    search(
        request: SearchTalkRequest,
        callback: (error: ServiceError | null, response: SearchTalkResponse) => void,
    ): ClientUnaryCall;
    search(
        request: SearchTalkRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: SearchTalkResponse) => void,
    ): ClientUnaryCall;
    search(
        request: SearchTalkRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: SearchTalkResponse) => void,
    ): ClientUnaryCall;
    /** rpc for bulk get */
    get(
        request: GetTalkRequest,
        callback: (error: ServiceError | null, response: GetTalkResponse) => void,
    ): ClientUnaryCall;
    get(
        request: GetTalkRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetTalkResponse) => void,
    ): ClientUnaryCall;
    get(
        request: GetTalkRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetTalkResponse) => void,
    ): ClientUnaryCall;
}

export const TalkServiceClient = makeGenericClientConstructor(
    TalkServiceService,
    'yandex.cloud.speechsense.v1.TalkService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): TalkServiceClient;
    service: typeof TalkServiceService;
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
