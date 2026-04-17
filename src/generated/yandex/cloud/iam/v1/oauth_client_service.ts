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
import { OAuthClient } from './oauth_client';
import { Operation } from '../../operation/operation';

export const protobufPackage = 'yandex.cloud.iam.v1';

export interface GetOAuthClientRequest {
    /**
     * ID of the OAuthClient resource to return.
     * To get the oauth client ID, use a [OAuthClientService.List] request.
     */
    oauthClientId: string;
}

export interface ListOAuthClientsRequest {
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListOAuthClientsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListOAuthClientsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * ID of the folder to list oauth clients for
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
}

export interface ListOAuthClientsResponse {
    /** List of OAuthClient resource views */
    oauthClients: OAuthClientListView[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListOAuthClientsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListOAuthClientsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface OAuthClientListView {
    /** ID of the OAuthClient resource. */
    id: string;
    /** Name of the OAuthClient resource. */
    name: string;
}

export interface UpdateOAuthClientMetadata {
    /** ID of the oauth client that is being updated */
    oauthClientId: string;
}

export interface DeleteOAuthClientMetadata {
    /** ID of the oauth client that is being deleted */
    oauthClientId: string;
}

export interface CreateOAuthClientRequest {
    /**
     * Name of the oauth client.
     * The name must be unique within folder.
     */
    name: string;
    /** List of redirect uries allowed for the oauth client. */
    redirectUris: string[];
    /** List of oauth scopes requested by the oauth client. */
    scopes: string[];
    /**
     * ID of the folder to create an oauth client in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
}

export interface CreateOAuthClientMetadata {
    /** ID of the oauth client that is being created */
    oauthClientId: string;
}

export interface UpdateOAuthClientRequest {
    /**
     * ID of the OAuthClient resource to update.
     * To get the oauth client ID, use a [OAuthClientService.List] request.
     */
    oauthClientId: string;
    /** Field mask that specifies which fields of the OAuthClient resource are going to be updated. */
    updateMask?: FieldMask;
    /**
     * Name of the oauth client.
     * The name must be unique within folder.
     */
    name: string;
    /** List of redirect uries allowed for the oauth client. */
    redirectUris: string[];
    /** List of oauth scopes requested by the oauth client. */
    scopes: string[];
}

export interface DeleteOAuthClientRequest {
    /**
     * ID of the oauth client to delete.
     * To get the oauth client ID, use [OAuthClientService.list] request.
     */
    oauthClientId: string;
}

const baseGetOAuthClientRequest: object = { oauthClientId: '' };

export const GetOAuthClientRequest: {
    encode(message: GetOAuthClientRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetOAuthClientRequest;
    fromJSON(object: any): GetOAuthClientRequest;
    toJSON(message: GetOAuthClientRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetOAuthClientRequest>, I>>(object: I): GetOAuthClientRequest;
} = {
    encode(message: GetOAuthClientRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.oauthClientId !== '') {
            writer.uint32(10).string(message.oauthClientId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetOAuthClientRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetOAuthClientRequest } as GetOAuthClientRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oauthClientId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetOAuthClientRequest {
        const message = { ...baseGetOAuthClientRequest } as GetOAuthClientRequest;
        message.oauthClientId =
            object.oauthClientId !== undefined && object.oauthClientId !== null
                ? String(object.oauthClientId)
                : '';
        return message;
    },

    toJSON(message: GetOAuthClientRequest): unknown {
        const obj: any = {};
        message.oauthClientId !== undefined && (obj.oauthClientId = message.oauthClientId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetOAuthClientRequest>, I>>(
        object: I,
    ): GetOAuthClientRequest {
        const message = { ...baseGetOAuthClientRequest } as GetOAuthClientRequest;
        message.oauthClientId = object.oauthClientId ?? '';
        return message;
    },
};

const baseListOAuthClientsRequest: object = { pageSize: 0, pageToken: '', folderId: '' };

export const ListOAuthClientsRequest: {
    encode(message: ListOAuthClientsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOAuthClientsRequest;
    fromJSON(object: any): ListOAuthClientsRequest;
    toJSON(message: ListOAuthClientsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListOAuthClientsRequest>, I>>(object: I): ListOAuthClientsRequest;
} = {
    encode(message: ListOAuthClientsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pageSize !== 0) {
            writer.uint32(8).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(18).string(message.pageToken);
        }
        if (message.folderId !== '') {
            writer.uint32(26).string(message.folderId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListOAuthClientsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListOAuthClientsRequest } as ListOAuthClientsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.pageToken = reader.string();
                    break;
                case 3:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListOAuthClientsRequest {
        const message = { ...baseListOAuthClientsRequest } as ListOAuthClientsRequest;
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        return message;
    },

    toJSON(message: ListOAuthClientsRequest): unknown {
        const obj: any = {};
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListOAuthClientsRequest>, I>>(
        object: I,
    ): ListOAuthClientsRequest {
        const message = { ...baseListOAuthClientsRequest } as ListOAuthClientsRequest;
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.folderId = object.folderId ?? '';
        return message;
    },
};

const baseListOAuthClientsResponse: object = { nextPageToken: '' };

export const ListOAuthClientsResponse: {
    encode(message: ListOAuthClientsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOAuthClientsResponse;
    fromJSON(object: any): ListOAuthClientsResponse;
    toJSON(message: ListOAuthClientsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListOAuthClientsResponse>, I>>(object: I): ListOAuthClientsResponse;
} = {
    encode(
        message: ListOAuthClientsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.oauthClients) {
            OAuthClientListView.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListOAuthClientsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListOAuthClientsResponse } as ListOAuthClientsResponse;
        message.oauthClients = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oauthClients.push(OAuthClientListView.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListOAuthClientsResponse {
        const message = { ...baseListOAuthClientsResponse } as ListOAuthClientsResponse;
        message.oauthClients = (object.oauthClients ?? []).map((e: any) =>
            OAuthClientListView.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListOAuthClientsResponse): unknown {
        const obj: any = {};
        if (message.oauthClients) {
            obj.oauthClients = message.oauthClients.map((e) =>
                e ? OAuthClientListView.toJSON(e) : undefined,
            );
        } else {
            obj.oauthClients = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListOAuthClientsResponse>, I>>(
        object: I,
    ): ListOAuthClientsResponse {
        const message = { ...baseListOAuthClientsResponse } as ListOAuthClientsResponse;
        message.oauthClients =
            object.oauthClients?.map((e) => OAuthClientListView.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseOAuthClientListView: object = { id: '', name: '' };

export const OAuthClientListView: {
    encode(message: OAuthClientListView, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OAuthClientListView;
    fromJSON(object: any): OAuthClientListView;
    toJSON(message: OAuthClientListView): unknown;
    fromPartial<I extends Exact<DeepPartial<OAuthClientListView>, I>>(object: I): OAuthClientListView;
} = {
    encode(message: OAuthClientListView, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OAuthClientListView {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOAuthClientListView } as OAuthClientListView;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OAuthClientListView {
        const message = { ...baseOAuthClientListView } as OAuthClientListView;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        return message;
    },

    toJSON(message: OAuthClientListView): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OAuthClientListView>, I>>(
        object: I,
    ): OAuthClientListView {
        const message = { ...baseOAuthClientListView } as OAuthClientListView;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        return message;
    },
};

const baseUpdateOAuthClientMetadata: object = { oauthClientId: '' };

export const UpdateOAuthClientMetadata: {
    encode(message: UpdateOAuthClientMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOAuthClientMetadata;
    fromJSON(object: any): UpdateOAuthClientMetadata;
    toJSON(message: UpdateOAuthClientMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateOAuthClientMetadata>, I>>(object: I): UpdateOAuthClientMetadata;
} = {
    encode(
        message: UpdateOAuthClientMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.oauthClientId !== '') {
            writer.uint32(10).string(message.oauthClientId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOAuthClientMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateOAuthClientMetadata } as UpdateOAuthClientMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oauthClientId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateOAuthClientMetadata {
        const message = { ...baseUpdateOAuthClientMetadata } as UpdateOAuthClientMetadata;
        message.oauthClientId =
            object.oauthClientId !== undefined && object.oauthClientId !== null
                ? String(object.oauthClientId)
                : '';
        return message;
    },

    toJSON(message: UpdateOAuthClientMetadata): unknown {
        const obj: any = {};
        message.oauthClientId !== undefined && (obj.oauthClientId = message.oauthClientId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateOAuthClientMetadata>, I>>(
        object: I,
    ): UpdateOAuthClientMetadata {
        const message = { ...baseUpdateOAuthClientMetadata } as UpdateOAuthClientMetadata;
        message.oauthClientId = object.oauthClientId ?? '';
        return message;
    },
};

const baseDeleteOAuthClientMetadata: object = { oauthClientId: '' };

export const DeleteOAuthClientMetadata: {
    encode(message: DeleteOAuthClientMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOAuthClientMetadata;
    fromJSON(object: any): DeleteOAuthClientMetadata;
    toJSON(message: DeleteOAuthClientMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteOAuthClientMetadata>, I>>(object: I): DeleteOAuthClientMetadata;
} = {
    encode(
        message: DeleteOAuthClientMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.oauthClientId !== '') {
            writer.uint32(10).string(message.oauthClientId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOAuthClientMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteOAuthClientMetadata } as DeleteOAuthClientMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oauthClientId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteOAuthClientMetadata {
        const message = { ...baseDeleteOAuthClientMetadata } as DeleteOAuthClientMetadata;
        message.oauthClientId =
            object.oauthClientId !== undefined && object.oauthClientId !== null
                ? String(object.oauthClientId)
                : '';
        return message;
    },

    toJSON(message: DeleteOAuthClientMetadata): unknown {
        const obj: any = {};
        message.oauthClientId !== undefined && (obj.oauthClientId = message.oauthClientId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteOAuthClientMetadata>, I>>(
        object: I,
    ): DeleteOAuthClientMetadata {
        const message = { ...baseDeleteOAuthClientMetadata } as DeleteOAuthClientMetadata;
        message.oauthClientId = object.oauthClientId ?? '';
        return message;
    },
};

const baseCreateOAuthClientRequest: object = {
    name: '',
    redirectUris: '',
    scopes: '',
    folderId: '',
};

export const CreateOAuthClientRequest: {
    encode(message: CreateOAuthClientRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateOAuthClientRequest;
    fromJSON(object: any): CreateOAuthClientRequest;
    toJSON(message: CreateOAuthClientRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateOAuthClientRequest>, I>>(object: I): CreateOAuthClientRequest;
} = {
    encode(
        message: CreateOAuthClientRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.redirectUris) {
            writer.uint32(18).string(v!);
        }
        for (const v of message.scopes) {
            writer.uint32(26).string(v!);
        }
        if (message.folderId !== '') {
            writer.uint32(34).string(message.folderId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateOAuthClientRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateOAuthClientRequest } as CreateOAuthClientRequest;
        message.redirectUris = [];
        message.scopes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.redirectUris.push(reader.string());
                    break;
                case 3:
                    message.scopes.push(reader.string());
                    break;
                case 4:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateOAuthClientRequest {
        const message = { ...baseCreateOAuthClientRequest } as CreateOAuthClientRequest;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.redirectUris = (object.redirectUris ?? []).map((e: any) => String(e));
        message.scopes = (object.scopes ?? []).map((e: any) => String(e));
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        return message;
    },

    toJSON(message: CreateOAuthClientRequest): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.redirectUris) {
            obj.redirectUris = message.redirectUris.map((e) => e);
        } else {
            obj.redirectUris = [];
        }
        if (message.scopes) {
            obj.scopes = message.scopes.map((e) => e);
        } else {
            obj.scopes = [];
        }
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateOAuthClientRequest>, I>>(
        object: I,
    ): CreateOAuthClientRequest {
        const message = { ...baseCreateOAuthClientRequest } as CreateOAuthClientRequest;
        message.name = object.name ?? '';
        message.redirectUris = object.redirectUris?.map((e) => e) || [];
        message.scopes = object.scopes?.map((e) => e) || [];
        message.folderId = object.folderId ?? '';
        return message;
    },
};

const baseCreateOAuthClientMetadata: object = { oauthClientId: '' };

export const CreateOAuthClientMetadata: {
    encode(message: CreateOAuthClientMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateOAuthClientMetadata;
    fromJSON(object: any): CreateOAuthClientMetadata;
    toJSON(message: CreateOAuthClientMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateOAuthClientMetadata>, I>>(object: I): CreateOAuthClientMetadata;
} = {
    encode(
        message: CreateOAuthClientMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.oauthClientId !== '') {
            writer.uint32(10).string(message.oauthClientId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateOAuthClientMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateOAuthClientMetadata } as CreateOAuthClientMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oauthClientId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateOAuthClientMetadata {
        const message = { ...baseCreateOAuthClientMetadata } as CreateOAuthClientMetadata;
        message.oauthClientId =
            object.oauthClientId !== undefined && object.oauthClientId !== null
                ? String(object.oauthClientId)
                : '';
        return message;
    },

    toJSON(message: CreateOAuthClientMetadata): unknown {
        const obj: any = {};
        message.oauthClientId !== undefined && (obj.oauthClientId = message.oauthClientId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateOAuthClientMetadata>, I>>(
        object: I,
    ): CreateOAuthClientMetadata {
        const message = { ...baseCreateOAuthClientMetadata } as CreateOAuthClientMetadata;
        message.oauthClientId = object.oauthClientId ?? '';
        return message;
    },
};

const baseUpdateOAuthClientRequest: object = {
    oauthClientId: '',
    name: '',
    redirectUris: '',
    scopes: '',
};

export const UpdateOAuthClientRequest: {
    encode(message: UpdateOAuthClientRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOAuthClientRequest;
    fromJSON(object: any): UpdateOAuthClientRequest;
    toJSON(message: UpdateOAuthClientRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateOAuthClientRequest>, I>>(object: I): UpdateOAuthClientRequest;
} = {
    encode(
        message: UpdateOAuthClientRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.oauthClientId !== '') {
            writer.uint32(10).string(message.oauthClientId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        for (const v of message.redirectUris) {
            writer.uint32(34).string(v!);
        }
        for (const v of message.scopes) {
            writer.uint32(42).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOAuthClientRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateOAuthClientRequest } as UpdateOAuthClientRequest;
        message.redirectUris = [];
        message.scopes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oauthClientId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.redirectUris.push(reader.string());
                    break;
                case 5:
                    message.scopes.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateOAuthClientRequest {
        const message = { ...baseUpdateOAuthClientRequest } as UpdateOAuthClientRequest;
        message.oauthClientId =
            object.oauthClientId !== undefined && object.oauthClientId !== null
                ? String(object.oauthClientId)
                : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.redirectUris = (object.redirectUris ?? []).map((e: any) => String(e));
        message.scopes = (object.scopes ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: UpdateOAuthClientRequest): unknown {
        const obj: any = {};
        message.oauthClientId !== undefined && (obj.oauthClientId = message.oauthClientId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        if (message.redirectUris) {
            obj.redirectUris = message.redirectUris.map((e) => e);
        } else {
            obj.redirectUris = [];
        }
        if (message.scopes) {
            obj.scopes = message.scopes.map((e) => e);
        } else {
            obj.scopes = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateOAuthClientRequest>, I>>(
        object: I,
    ): UpdateOAuthClientRequest {
        const message = { ...baseUpdateOAuthClientRequest } as UpdateOAuthClientRequest;
        message.oauthClientId = object.oauthClientId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = object.name ?? '';
        message.redirectUris = object.redirectUris?.map((e) => e) || [];
        message.scopes = object.scopes?.map((e) => e) || [];
        return message;
    },
};

const baseDeleteOAuthClientRequest: object = { oauthClientId: '' };

export const DeleteOAuthClientRequest: {
    encode(message: DeleteOAuthClientRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOAuthClientRequest;
    fromJSON(object: any): DeleteOAuthClientRequest;
    toJSON(message: DeleteOAuthClientRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteOAuthClientRequest>, I>>(object: I): DeleteOAuthClientRequest;
} = {
    encode(
        message: DeleteOAuthClientRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.oauthClientId !== '') {
            writer.uint32(10).string(message.oauthClientId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOAuthClientRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteOAuthClientRequest } as DeleteOAuthClientRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oauthClientId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteOAuthClientRequest {
        const message = { ...baseDeleteOAuthClientRequest } as DeleteOAuthClientRequest;
        message.oauthClientId =
            object.oauthClientId !== undefined && object.oauthClientId !== null
                ? String(object.oauthClientId)
                : '';
        return message;
    },

    toJSON(message: DeleteOAuthClientRequest): unknown {
        const obj: any = {};
        message.oauthClientId !== undefined && (obj.oauthClientId = message.oauthClientId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteOAuthClientRequest>, I>>(
        object: I,
    ): DeleteOAuthClientRequest {
        const message = { ...baseDeleteOAuthClientRequest } as DeleteOAuthClientRequest;
        message.oauthClientId = object.oauthClientId ?? '';
        return message;
    },
};

/** A set of methods for managing OAuthClient resources. */
export const OAuthClientServiceService = {
    /**
     * Returns the sepcified OAuthClient resource.
     *
     * To get the list of available OAuthClient resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.iam.v1.OAuthClientService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetOAuthClientRequest) =>
            Buffer.from(GetOAuthClientRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetOAuthClientRequest.decode(value),
        responseSerialize: (value: OAuthClient) => Buffer.from(OAuthClient.encode(value).finish()),
        responseDeserialize: (value: Buffer) => OAuthClient.decode(value),
    },
    /** Retrieves the list of OAuthClient resources views in the specified folder */
    list: {
        path: '/yandex.cloud.iam.v1.OAuthClientService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListOAuthClientsRequest) =>
            Buffer.from(ListOAuthClientsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListOAuthClientsRequest.decode(value),
        responseSerialize: (value: ListOAuthClientsResponse) =>
            Buffer.from(ListOAuthClientsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListOAuthClientsResponse.decode(value),
    },
    /** Creates an oauth client in the specified folder. */
    create: {
        path: '/yandex.cloud.iam.v1.OAuthClientService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateOAuthClientRequest) =>
            Buffer.from(CreateOAuthClientRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateOAuthClientRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified oauth client. */
    update: {
        path: '/yandex.cloud.iam.v1.OAuthClientService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateOAuthClientRequest) =>
            Buffer.from(UpdateOAuthClientRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateOAuthClientRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified oauth client with all its secrets. */
    delete: {
        path: '/yandex.cloud.iam.v1.OAuthClientService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteOAuthClientRequest) =>
            Buffer.from(DeleteOAuthClientRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteOAuthClientRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface OAuthClientServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the sepcified OAuthClient resource.
     *
     * To get the list of available OAuthClient resources, make a [List] request.
     */
    get: handleUnaryCall<GetOAuthClientRequest, OAuthClient>;
    /** Retrieves the list of OAuthClient resources views in the specified folder */
    list: handleUnaryCall<ListOAuthClientsRequest, ListOAuthClientsResponse>;
    /** Creates an oauth client in the specified folder. */
    create: handleUnaryCall<CreateOAuthClientRequest, Operation>;
    /** Updates the specified oauth client. */
    update: handleUnaryCall<UpdateOAuthClientRequest, Operation>;
    /** Deletes the specified oauth client with all its secrets. */
    delete: handleUnaryCall<DeleteOAuthClientRequest, Operation>;
}

export interface OAuthClientServiceClient extends Client {
    /**
     * Returns the sepcified OAuthClient resource.
     *
     * To get the list of available OAuthClient resources, make a [List] request.
     */
    get(
        request: GetOAuthClientRequest,
        callback: (error: ServiceError | null, response: OAuthClient) => void,
    ): ClientUnaryCall;
    get(
        request: GetOAuthClientRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: OAuthClient) => void,
    ): ClientUnaryCall;
    get(
        request: GetOAuthClientRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: OAuthClient) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of OAuthClient resources views in the specified folder */
    list(
        request: ListOAuthClientsRequest,
        callback: (error: ServiceError | null, response: ListOAuthClientsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListOAuthClientsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListOAuthClientsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListOAuthClientsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListOAuthClientsResponse) => void,
    ): ClientUnaryCall;
    /** Creates an oauth client in the specified folder. */
    create(
        request: CreateOAuthClientRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateOAuthClientRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateOAuthClientRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified oauth client. */
    update(
        request: UpdateOAuthClientRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateOAuthClientRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateOAuthClientRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified oauth client with all its secrets. */
    delete(
        request: DeleteOAuthClientRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteOAuthClientRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteOAuthClientRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const OAuthClientServiceClient = makeGenericClientConstructor(
    OAuthClientServiceService,
    'yandex.cloud.iam.v1.OAuthClientService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): OAuthClientServiceClient;
    service: typeof OAuthClientServiceService;
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
