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
import { OAuthClientSecret } from './oauth_client_secret';
import { Operation } from '../../operation/operation';

export const protobufPackage = 'yandex.cloud.iam.v1';

export interface GetOAuthClientSecretRequest {
    /**
     * ID of the OAuthClientSecret resource to return.
     * To get the OAuthClientSecret ID, use a [OAuthClientSecretService.List] request.
     */
    oauthClientSecretId: string;
}

export interface ListOAuthClientSecretsRequest {
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListOAuthClientSecretsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListOAuthClientSecretsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * ID of the OAuthClient resource to list OAuthClientSecret resources for.
     * To get the oauth client ID, use a [yandex.cloud.iam.v1.OAuthClientService.List] request.
     */
    oauthClientId: string;
}

export interface ListOAuthClientSecretsResponse {
    /** List of OAuthClientSecret resources of the specified OAuthClient resource */
    oauthClientSecrets: OAuthClientSecret[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListOAuthClientSecretsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListOAuthClientSecretsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateOAuthClientSecretRequest {
    /**
     * ID of the OAuthClient resource to create OAuthClientSecret resource for.
     * To get the oauth client ID, use a [yandex.cloud.iam.v1.OAuthClientService.List] request.
     */
    oauthClientId: string;
    /** Description of the OAuthClientResource. */
    description: string;
}

export interface CreateOAuthClientSecretMetadata {
    /** ID of the OAuthClientSecretResource that is being created. */
    oauthClientSecretId: string;
}

export interface CreateOAuthClientSecretResponse {
    /** OAuthClientSecret resource. */
    oauthClientSecret?: OAuthClientSecret;
    /**
     * The secret value of OAuthClientSecret resource.
     * This value can be used for lient secret based authentication.
     * This value must be stored securely.
     */
    secretValue: string;
}

export interface DeleteOAuthClientSecretRequest {
    /** ID of the OAuthClientSecret resource to delete. */
    oauthClientSecretId: string;
}

export interface DeleteOAuthClientSecretMetadata {
    /** ID of the OAuthClientSecretResource that is being deleted. */
    oauthClientSecretId: string;
}

const baseGetOAuthClientSecretRequest: object = { oauthClientSecretId: '' };

export const GetOAuthClientSecretRequest: {
    encode(message: GetOAuthClientSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetOAuthClientSecretRequest;
    fromJSON(object: any): GetOAuthClientSecretRequest;
    toJSON(message: GetOAuthClientSecretRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetOAuthClientSecretRequest>, I>>(object: I): GetOAuthClientSecretRequest;
} = {
    encode(
        message: GetOAuthClientSecretRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.oauthClientSecretId !== '') {
            writer.uint32(10).string(message.oauthClientSecretId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetOAuthClientSecretRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetOAuthClientSecretRequest } as GetOAuthClientSecretRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oauthClientSecretId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetOAuthClientSecretRequest {
        const message = { ...baseGetOAuthClientSecretRequest } as GetOAuthClientSecretRequest;
        message.oauthClientSecretId =
            object.oauthClientSecretId !== undefined && object.oauthClientSecretId !== null
                ? String(object.oauthClientSecretId)
                : '';
        return message;
    },

    toJSON(message: GetOAuthClientSecretRequest): unknown {
        const obj: any = {};
        message.oauthClientSecretId !== undefined &&
            (obj.oauthClientSecretId = message.oauthClientSecretId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetOAuthClientSecretRequest>, I>>(
        object: I,
    ): GetOAuthClientSecretRequest {
        const message = { ...baseGetOAuthClientSecretRequest } as GetOAuthClientSecretRequest;
        message.oauthClientSecretId = object.oauthClientSecretId ?? '';
        return message;
    },
};

const baseListOAuthClientSecretsRequest: object = { pageSize: 0, pageToken: '', oauthClientId: '' };

export const ListOAuthClientSecretsRequest: {
    encode(message: ListOAuthClientSecretsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOAuthClientSecretsRequest;
    fromJSON(object: any): ListOAuthClientSecretsRequest;
    toJSON(message: ListOAuthClientSecretsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListOAuthClientSecretsRequest>, I>>(object: I): ListOAuthClientSecretsRequest;
} = {
    encode(
        message: ListOAuthClientSecretsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.pageSize !== 0) {
            writer.uint32(8).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(18).string(message.pageToken);
        }
        if (message.oauthClientId !== '') {
            writer.uint32(26).string(message.oauthClientId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListOAuthClientSecretsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListOAuthClientSecretsRequest } as ListOAuthClientSecretsRequest;
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
                    message.oauthClientId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListOAuthClientSecretsRequest {
        const message = { ...baseListOAuthClientSecretsRequest } as ListOAuthClientSecretsRequest;
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        message.oauthClientId =
            object.oauthClientId !== undefined && object.oauthClientId !== null
                ? String(object.oauthClientId)
                : '';
        return message;
    },

    toJSON(message: ListOAuthClientSecretsRequest): unknown {
        const obj: any = {};
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.oauthClientId !== undefined && (obj.oauthClientId = message.oauthClientId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListOAuthClientSecretsRequest>, I>>(
        object: I,
    ): ListOAuthClientSecretsRequest {
        const message = { ...baseListOAuthClientSecretsRequest } as ListOAuthClientSecretsRequest;
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.oauthClientId = object.oauthClientId ?? '';
        return message;
    },
};

const baseListOAuthClientSecretsResponse: object = { nextPageToken: '' };

export const ListOAuthClientSecretsResponse: {
    encode(message: ListOAuthClientSecretsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOAuthClientSecretsResponse;
    fromJSON(object: any): ListOAuthClientSecretsResponse;
    toJSON(message: ListOAuthClientSecretsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListOAuthClientSecretsResponse>, I>>(object: I): ListOAuthClientSecretsResponse;
} = {
    encode(
        message: ListOAuthClientSecretsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.oauthClientSecrets) {
            OAuthClientSecret.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListOAuthClientSecretsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListOAuthClientSecretsResponse } as ListOAuthClientSecretsResponse;
        message.oauthClientSecrets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oauthClientSecrets.push(
                        OAuthClientSecret.decode(reader, reader.uint32()),
                    );
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

    fromJSON(object: any): ListOAuthClientSecretsResponse {
        const message = { ...baseListOAuthClientSecretsResponse } as ListOAuthClientSecretsResponse;
        message.oauthClientSecrets = (object.oauthClientSecrets ?? []).map((e: any) =>
            OAuthClientSecret.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListOAuthClientSecretsResponse): unknown {
        const obj: any = {};
        if (message.oauthClientSecrets) {
            obj.oauthClientSecrets = message.oauthClientSecrets.map((e) =>
                e ? OAuthClientSecret.toJSON(e) : undefined,
            );
        } else {
            obj.oauthClientSecrets = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListOAuthClientSecretsResponse>, I>>(
        object: I,
    ): ListOAuthClientSecretsResponse {
        const message = { ...baseListOAuthClientSecretsResponse } as ListOAuthClientSecretsResponse;
        message.oauthClientSecrets =
            object.oauthClientSecrets?.map((e) => OAuthClientSecret.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateOAuthClientSecretRequest: object = { oauthClientId: '', description: '' };

export const CreateOAuthClientSecretRequest: {
    encode(message: CreateOAuthClientSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateOAuthClientSecretRequest;
    fromJSON(object: any): CreateOAuthClientSecretRequest;
    toJSON(message: CreateOAuthClientSecretRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateOAuthClientSecretRequest>, I>>(object: I): CreateOAuthClientSecretRequest;
} = {
    encode(
        message: CreateOAuthClientSecretRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.oauthClientId !== '') {
            writer.uint32(10).string(message.oauthClientId);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateOAuthClientSecretRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateOAuthClientSecretRequest } as CreateOAuthClientSecretRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oauthClientId = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateOAuthClientSecretRequest {
        const message = { ...baseCreateOAuthClientSecretRequest } as CreateOAuthClientSecretRequest;
        message.oauthClientId =
            object.oauthClientId !== undefined && object.oauthClientId !== null
                ? String(object.oauthClientId)
                : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        return message;
    },

    toJSON(message: CreateOAuthClientSecretRequest): unknown {
        const obj: any = {};
        message.oauthClientId !== undefined && (obj.oauthClientId = message.oauthClientId);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateOAuthClientSecretRequest>, I>>(
        object: I,
    ): CreateOAuthClientSecretRequest {
        const message = { ...baseCreateOAuthClientSecretRequest } as CreateOAuthClientSecretRequest;
        message.oauthClientId = object.oauthClientId ?? '';
        message.description = object.description ?? '';
        return message;
    },
};

const baseCreateOAuthClientSecretMetadata: object = { oauthClientSecretId: '' };

export const CreateOAuthClientSecretMetadata: {
    encode(message: CreateOAuthClientSecretMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateOAuthClientSecretMetadata;
    fromJSON(object: any): CreateOAuthClientSecretMetadata;
    toJSON(message: CreateOAuthClientSecretMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateOAuthClientSecretMetadata>, I>>(object: I): CreateOAuthClientSecretMetadata;
} = {
    encode(
        message: CreateOAuthClientSecretMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.oauthClientSecretId !== '') {
            writer.uint32(10).string(message.oauthClientSecretId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateOAuthClientSecretMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateOAuthClientSecretMetadata,
        } as CreateOAuthClientSecretMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oauthClientSecretId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateOAuthClientSecretMetadata {
        const message = {
            ...baseCreateOAuthClientSecretMetadata,
        } as CreateOAuthClientSecretMetadata;
        message.oauthClientSecretId =
            object.oauthClientSecretId !== undefined && object.oauthClientSecretId !== null
                ? String(object.oauthClientSecretId)
                : '';
        return message;
    },

    toJSON(message: CreateOAuthClientSecretMetadata): unknown {
        const obj: any = {};
        message.oauthClientSecretId !== undefined &&
            (obj.oauthClientSecretId = message.oauthClientSecretId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateOAuthClientSecretMetadata>, I>>(
        object: I,
    ): CreateOAuthClientSecretMetadata {
        const message = {
            ...baseCreateOAuthClientSecretMetadata,
        } as CreateOAuthClientSecretMetadata;
        message.oauthClientSecretId = object.oauthClientSecretId ?? '';
        return message;
    },
};

const baseCreateOAuthClientSecretResponse: object = { secretValue: '' };

export const CreateOAuthClientSecretResponse: {
    encode(message: CreateOAuthClientSecretResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateOAuthClientSecretResponse;
    fromJSON(object: any): CreateOAuthClientSecretResponse;
    toJSON(message: CreateOAuthClientSecretResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateOAuthClientSecretResponse>, I>>(object: I): CreateOAuthClientSecretResponse;
} = {
    encode(
        message: CreateOAuthClientSecretResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.oauthClientSecret !== undefined) {
            OAuthClientSecret.encode(message.oauthClientSecret, writer.uint32(10).fork()).ldelim();
        }
        if (message.secretValue !== '') {
            writer.uint32(18).string(message.secretValue);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateOAuthClientSecretResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateOAuthClientSecretResponse,
        } as CreateOAuthClientSecretResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oauthClientSecret = OAuthClientSecret.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.secretValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateOAuthClientSecretResponse {
        const message = {
            ...baseCreateOAuthClientSecretResponse,
        } as CreateOAuthClientSecretResponse;
        message.oauthClientSecret =
            object.oauthClientSecret !== undefined && object.oauthClientSecret !== null
                ? OAuthClientSecret.fromJSON(object.oauthClientSecret)
                : undefined;
        message.secretValue =
            object.secretValue !== undefined && object.secretValue !== null
                ? String(object.secretValue)
                : '';
        return message;
    },

    toJSON(message: CreateOAuthClientSecretResponse): unknown {
        const obj: any = {};
        message.oauthClientSecret !== undefined &&
            (obj.oauthClientSecret = message.oauthClientSecret
                ? OAuthClientSecret.toJSON(message.oauthClientSecret)
                : undefined);
        message.secretValue !== undefined && (obj.secretValue = message.secretValue);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateOAuthClientSecretResponse>, I>>(
        object: I,
    ): CreateOAuthClientSecretResponse {
        const message = {
            ...baseCreateOAuthClientSecretResponse,
        } as CreateOAuthClientSecretResponse;
        message.oauthClientSecret =
            object.oauthClientSecret !== undefined && object.oauthClientSecret !== null
                ? OAuthClientSecret.fromPartial(object.oauthClientSecret)
                : undefined;
        message.secretValue = object.secretValue ?? '';
        return message;
    },
};

const baseDeleteOAuthClientSecretRequest: object = { oauthClientSecretId: '' };

export const DeleteOAuthClientSecretRequest: {
    encode(message: DeleteOAuthClientSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOAuthClientSecretRequest;
    fromJSON(object: any): DeleteOAuthClientSecretRequest;
    toJSON(message: DeleteOAuthClientSecretRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteOAuthClientSecretRequest>, I>>(object: I): DeleteOAuthClientSecretRequest;
} = {
    encode(
        message: DeleteOAuthClientSecretRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.oauthClientSecretId !== '') {
            writer.uint32(10).string(message.oauthClientSecretId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOAuthClientSecretRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteOAuthClientSecretRequest } as DeleteOAuthClientSecretRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oauthClientSecretId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteOAuthClientSecretRequest {
        const message = { ...baseDeleteOAuthClientSecretRequest } as DeleteOAuthClientSecretRequest;
        message.oauthClientSecretId =
            object.oauthClientSecretId !== undefined && object.oauthClientSecretId !== null
                ? String(object.oauthClientSecretId)
                : '';
        return message;
    },

    toJSON(message: DeleteOAuthClientSecretRequest): unknown {
        const obj: any = {};
        message.oauthClientSecretId !== undefined &&
            (obj.oauthClientSecretId = message.oauthClientSecretId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteOAuthClientSecretRequest>, I>>(
        object: I,
    ): DeleteOAuthClientSecretRequest {
        const message = { ...baseDeleteOAuthClientSecretRequest } as DeleteOAuthClientSecretRequest;
        message.oauthClientSecretId = object.oauthClientSecretId ?? '';
        return message;
    },
};

const baseDeleteOAuthClientSecretMetadata: object = { oauthClientSecretId: '' };

export const DeleteOAuthClientSecretMetadata: {
    encode(message: DeleteOAuthClientSecretMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOAuthClientSecretMetadata;
    fromJSON(object: any): DeleteOAuthClientSecretMetadata;
    toJSON(message: DeleteOAuthClientSecretMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteOAuthClientSecretMetadata>, I>>(object: I): DeleteOAuthClientSecretMetadata;
} = {
    encode(
        message: DeleteOAuthClientSecretMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.oauthClientSecretId !== '') {
            writer.uint32(10).string(message.oauthClientSecretId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOAuthClientSecretMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteOAuthClientSecretMetadata,
        } as DeleteOAuthClientSecretMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oauthClientSecretId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteOAuthClientSecretMetadata {
        const message = {
            ...baseDeleteOAuthClientSecretMetadata,
        } as DeleteOAuthClientSecretMetadata;
        message.oauthClientSecretId =
            object.oauthClientSecretId !== undefined && object.oauthClientSecretId !== null
                ? String(object.oauthClientSecretId)
                : '';
        return message;
    },

    toJSON(message: DeleteOAuthClientSecretMetadata): unknown {
        const obj: any = {};
        message.oauthClientSecretId !== undefined &&
            (obj.oauthClientSecretId = message.oauthClientSecretId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteOAuthClientSecretMetadata>, I>>(
        object: I,
    ): DeleteOAuthClientSecretMetadata {
        const message = {
            ...baseDeleteOAuthClientSecretMetadata,
        } as DeleteOAuthClientSecretMetadata;
        message.oauthClientSecretId = object.oauthClientSecretId ?? '';
        return message;
    },
};

/** A set of methods for managing OAuthClientSecret resources. */
export const OAuthClientSecretServiceService = {
    /**
     * Returns the sepcified OAuthClientSecret resource.
     *
     * To get the list of available OAuthClientSecret resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.iam.v1.OAuthClientSecretService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetOAuthClientSecretRequest) =>
            Buffer.from(GetOAuthClientSecretRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetOAuthClientSecretRequest.decode(value),
        responseSerialize: (value: OAuthClientSecret) =>
            Buffer.from(OAuthClientSecret.encode(value).finish()),
        responseDeserialize: (value: Buffer) => OAuthClientSecret.decode(value),
    },
    /** Retrieves the list of OAuthClientSecret resources of the specified OAuthClient. */
    list: {
        path: '/yandex.cloud.iam.v1.OAuthClientSecretService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListOAuthClientSecretsRequest) =>
            Buffer.from(ListOAuthClientSecretsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListOAuthClientSecretsRequest.decode(value),
        responseSerialize: (value: ListOAuthClientSecretsResponse) =>
            Buffer.from(ListOAuthClientSecretsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListOAuthClientSecretsResponse.decode(value),
    },
    /** Creates an OAuthClientSecret resource for the specified OAuthClient. */
    create: {
        path: '/yandex.cloud.iam.v1.OAuthClientSecretService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateOAuthClientSecretRequest) =>
            Buffer.from(CreateOAuthClientSecretRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateOAuthClientSecretRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified OAuthClientSecret resource. */
    delete: {
        path: '/yandex.cloud.iam.v1.OAuthClientSecretService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteOAuthClientSecretRequest) =>
            Buffer.from(DeleteOAuthClientSecretRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteOAuthClientSecretRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface OAuthClientSecretServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the sepcified OAuthClientSecret resource.
     *
     * To get the list of available OAuthClientSecret resources, make a [List] request.
     */
    get: handleUnaryCall<GetOAuthClientSecretRequest, OAuthClientSecret>;
    /** Retrieves the list of OAuthClientSecret resources of the specified OAuthClient. */
    list: handleUnaryCall<ListOAuthClientSecretsRequest, ListOAuthClientSecretsResponse>;
    /** Creates an OAuthClientSecret resource for the specified OAuthClient. */
    create: handleUnaryCall<CreateOAuthClientSecretRequest, Operation>;
    /** Deletes the specified OAuthClientSecret resource. */
    delete: handleUnaryCall<DeleteOAuthClientSecretRequest, Operation>;
}

export interface OAuthClientSecretServiceClient extends Client {
    /**
     * Returns the sepcified OAuthClientSecret resource.
     *
     * To get the list of available OAuthClientSecret resources, make a [List] request.
     */
    get(
        request: GetOAuthClientSecretRequest,
        callback: (error: ServiceError | null, response: OAuthClientSecret) => void,
    ): ClientUnaryCall;
    get(
        request: GetOAuthClientSecretRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: OAuthClientSecret) => void,
    ): ClientUnaryCall;
    get(
        request: GetOAuthClientSecretRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: OAuthClientSecret) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of OAuthClientSecret resources of the specified OAuthClient. */
    list(
        request: ListOAuthClientSecretsRequest,
        callback: (error: ServiceError | null, response: ListOAuthClientSecretsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListOAuthClientSecretsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListOAuthClientSecretsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListOAuthClientSecretsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListOAuthClientSecretsResponse) => void,
    ): ClientUnaryCall;
    /** Creates an OAuthClientSecret resource for the specified OAuthClient. */
    create(
        request: CreateOAuthClientSecretRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateOAuthClientSecretRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateOAuthClientSecretRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified OAuthClientSecret resource. */
    delete(
        request: DeleteOAuthClientSecretRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteOAuthClientSecretRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteOAuthClientSecretRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const OAuthClientSecretServiceClient = makeGenericClientConstructor(
    OAuthClientSecretServiceService,
    'yandex.cloud.iam.v1.OAuthClientSecretService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): OAuthClientSecretServiceClient;
    service: typeof OAuthClientSecretServiceService;
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
