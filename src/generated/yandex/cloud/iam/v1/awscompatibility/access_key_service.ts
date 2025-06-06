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
import { AccessKey } from '../../../../../yandex/cloud/iam/v1/awscompatibility/access_key';
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Operation } from '../../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.iam.v1.awscompatibility';

export interface GetAccessKeyRequest {
    /**
     * ID of the AccessKey resource to return.
     * To get the access key ID, use a [AccessKeyService.List] request.
     */
    accessKeyId: string;
}

export interface ListAccessKeysRequest {
    /**
     * ID of the service account to list access keys for.
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     * If not specified, it defaults to the subject that made the request.
     */
    serviceAccountId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListAccessKeysResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListAccessKeysResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}

export interface ListAccessKeysResponse {
    /** List of access keys. */
    accessKeys: AccessKey[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListAccessKeysRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListAccessKeysRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateAccessKeyRequest {
    /**
     * ID of the service account to create an access key for.
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     * If not specified, it defaults to the subject that made the request.
     */
    serviceAccountId: string;
    /** Description of the access key. */
    description: string;
}

export interface CreateAccessKeyResponse {
    /** AccessKey resource. */
    accessKey?: AccessKey;
    /**
     * Secret access key.
     * The key is AWS compatible.
     */
    secret: string;
}

export interface UpdateAccessKeyRequest {
    /**
     * ID of the AccessKey resource to update.
     * To get the access key ID, use a [AccessKeyService.List] request.
     */
    accessKeyId: string;
    /** Field mask that specifies which fields of the Accesskey resource are going to be updated. */
    updateMask?: FieldMask;
    /** Description of the access key. */
    description: string;
}

export interface UpdateAccessKeyMetadata {
    /** ID of the AccessKey resource that is being updated. */
    accessKeyId: string;
}

export interface DeleteAccessKeyRequest {
    /**
     * ID of the access key to delete.
     * To get the access key ID, use a [AccessKeyService.List] request.
     */
    accessKeyId: string;
}

export interface DeleteAccessKeyMetadata {
    /** ID of the access key that is being deleted. */
    accessKeyId: string;
}

export interface ListAccessKeyOperationsRequest {
    /** ID of the key to list operations for. */
    accessKeyId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListAccessKeyOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListAccessKeyOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListAccessKeyOperationsResponse {
    /** List of operations for the specified access key. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListAccessKeyOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListAccessKeyOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetAccessKeyRequest: object = { accessKeyId: '' };

export const GetAccessKeyRequest = {
    encode(message: GetAccessKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.accessKeyId !== '') {
            writer.uint32(10).string(message.accessKeyId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetAccessKeyRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetAccessKeyRequest } as GetAccessKeyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKeyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetAccessKeyRequest {
        const message = { ...baseGetAccessKeyRequest } as GetAccessKeyRequest;
        message.accessKeyId =
            object.accessKeyId !== undefined && object.accessKeyId !== null
                ? String(object.accessKeyId)
                : '';
        return message;
    },

    toJSON(message: GetAccessKeyRequest): unknown {
        const obj: any = {};
        message.accessKeyId !== undefined && (obj.accessKeyId = message.accessKeyId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetAccessKeyRequest>, I>>(
        object: I,
    ): GetAccessKeyRequest {
        const message = { ...baseGetAccessKeyRequest } as GetAccessKeyRequest;
        message.accessKeyId = object.accessKeyId ?? '';
        return message;
    },
};

const baseListAccessKeysRequest: object = { serviceAccountId: '', pageSize: 0, pageToken: '' };

export const ListAccessKeysRequest = {
    encode(message: ListAccessKeysRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListAccessKeysRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListAccessKeysRequest } as ListAccessKeysRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListAccessKeysRequest {
        const message = { ...baseListAccessKeysRequest } as ListAccessKeysRequest;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListAccessKeysRequest): unknown {
        const obj: any = {};
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListAccessKeysRequest>, I>>(
        object: I,
    ): ListAccessKeysRequest {
        const message = { ...baseListAccessKeysRequest } as ListAccessKeysRequest;
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListAccessKeysResponse: object = { nextPageToken: '' };

export const ListAccessKeysResponse = {
    encode(message: ListAccessKeysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.accessKeys) {
            AccessKey.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListAccessKeysResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListAccessKeysResponse } as ListAccessKeysResponse;
        message.accessKeys = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKeys.push(AccessKey.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListAccessKeysResponse {
        const message = { ...baseListAccessKeysResponse } as ListAccessKeysResponse;
        message.accessKeys = (object.accessKeys ?? []).map((e: any) => AccessKey.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListAccessKeysResponse): unknown {
        const obj: any = {};
        if (message.accessKeys) {
            obj.accessKeys = message.accessKeys.map((e) => (e ? AccessKey.toJSON(e) : undefined));
        } else {
            obj.accessKeys = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListAccessKeysResponse>, I>>(
        object: I,
    ): ListAccessKeysResponse {
        const message = { ...baseListAccessKeysResponse } as ListAccessKeysResponse;
        message.accessKeys = object.accessKeys?.map((e) => AccessKey.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateAccessKeyRequest: object = { serviceAccountId: '', description: '' };

export const CreateAccessKeyRequest = {
    encode(message: CreateAccessKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateAccessKeyRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateAccessKeyRequest } as CreateAccessKeyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
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

    fromJSON(object: any): CreateAccessKeyRequest {
        const message = { ...baseCreateAccessKeyRequest } as CreateAccessKeyRequest;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        return message;
    },

    toJSON(message: CreateAccessKeyRequest): unknown {
        const obj: any = {};
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateAccessKeyRequest>, I>>(
        object: I,
    ): CreateAccessKeyRequest {
        const message = { ...baseCreateAccessKeyRequest } as CreateAccessKeyRequest;
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.description = object.description ?? '';
        return message;
    },
};

const baseCreateAccessKeyResponse: object = { secret: '' };

export const CreateAccessKeyResponse = {
    encode(message: CreateAccessKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.accessKey !== undefined) {
            AccessKey.encode(message.accessKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.secret !== '') {
            writer.uint32(18).string(message.secret);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateAccessKeyResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateAccessKeyResponse } as CreateAccessKeyResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKey = AccessKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.secret = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateAccessKeyResponse {
        const message = { ...baseCreateAccessKeyResponse } as CreateAccessKeyResponse;
        message.accessKey =
            object.accessKey !== undefined && object.accessKey !== null
                ? AccessKey.fromJSON(object.accessKey)
                : undefined;
        message.secret =
            object.secret !== undefined && object.secret !== null ? String(object.secret) : '';
        return message;
    },

    toJSON(message: CreateAccessKeyResponse): unknown {
        const obj: any = {};
        message.accessKey !== undefined &&
            (obj.accessKey = message.accessKey ? AccessKey.toJSON(message.accessKey) : undefined);
        message.secret !== undefined && (obj.secret = message.secret);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateAccessKeyResponse>, I>>(
        object: I,
    ): CreateAccessKeyResponse {
        const message = { ...baseCreateAccessKeyResponse } as CreateAccessKeyResponse;
        message.accessKey =
            object.accessKey !== undefined && object.accessKey !== null
                ? AccessKey.fromPartial(object.accessKey)
                : undefined;
        message.secret = object.secret ?? '';
        return message;
    },
};

const baseUpdateAccessKeyRequest: object = { accessKeyId: '', description: '' };

export const UpdateAccessKeyRequest = {
    encode(message: UpdateAccessKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.accessKeyId !== '') {
            writer.uint32(10).string(message.accessKeyId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAccessKeyRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateAccessKeyRequest } as UpdateAccessKeyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKeyId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateAccessKeyRequest {
        const message = { ...baseUpdateAccessKeyRequest } as UpdateAccessKeyRequest;
        message.accessKeyId =
            object.accessKeyId !== undefined && object.accessKeyId !== null
                ? String(object.accessKeyId)
                : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        return message;
    },

    toJSON(message: UpdateAccessKeyRequest): unknown {
        const obj: any = {};
        message.accessKeyId !== undefined && (obj.accessKeyId = message.accessKeyId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateAccessKeyRequest>, I>>(
        object: I,
    ): UpdateAccessKeyRequest {
        const message = { ...baseUpdateAccessKeyRequest } as UpdateAccessKeyRequest;
        message.accessKeyId = object.accessKeyId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.description = object.description ?? '';
        return message;
    },
};

const baseUpdateAccessKeyMetadata: object = { accessKeyId: '' };

export const UpdateAccessKeyMetadata = {
    encode(message: UpdateAccessKeyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.accessKeyId !== '') {
            writer.uint32(10).string(message.accessKeyId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAccessKeyMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateAccessKeyMetadata } as UpdateAccessKeyMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKeyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateAccessKeyMetadata {
        const message = { ...baseUpdateAccessKeyMetadata } as UpdateAccessKeyMetadata;
        message.accessKeyId =
            object.accessKeyId !== undefined && object.accessKeyId !== null
                ? String(object.accessKeyId)
                : '';
        return message;
    },

    toJSON(message: UpdateAccessKeyMetadata): unknown {
        const obj: any = {};
        message.accessKeyId !== undefined && (obj.accessKeyId = message.accessKeyId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateAccessKeyMetadata>, I>>(
        object: I,
    ): UpdateAccessKeyMetadata {
        const message = { ...baseUpdateAccessKeyMetadata } as UpdateAccessKeyMetadata;
        message.accessKeyId = object.accessKeyId ?? '';
        return message;
    },
};

const baseDeleteAccessKeyRequest: object = { accessKeyId: '' };

export const DeleteAccessKeyRequest = {
    encode(message: DeleteAccessKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.accessKeyId !== '') {
            writer.uint32(10).string(message.accessKeyId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAccessKeyRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteAccessKeyRequest } as DeleteAccessKeyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKeyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteAccessKeyRequest {
        const message = { ...baseDeleteAccessKeyRequest } as DeleteAccessKeyRequest;
        message.accessKeyId =
            object.accessKeyId !== undefined && object.accessKeyId !== null
                ? String(object.accessKeyId)
                : '';
        return message;
    },

    toJSON(message: DeleteAccessKeyRequest): unknown {
        const obj: any = {};
        message.accessKeyId !== undefined && (obj.accessKeyId = message.accessKeyId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteAccessKeyRequest>, I>>(
        object: I,
    ): DeleteAccessKeyRequest {
        const message = { ...baseDeleteAccessKeyRequest } as DeleteAccessKeyRequest;
        message.accessKeyId = object.accessKeyId ?? '';
        return message;
    },
};

const baseDeleteAccessKeyMetadata: object = { accessKeyId: '' };

export const DeleteAccessKeyMetadata = {
    encode(message: DeleteAccessKeyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.accessKeyId !== '') {
            writer.uint32(10).string(message.accessKeyId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAccessKeyMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteAccessKeyMetadata } as DeleteAccessKeyMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKeyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteAccessKeyMetadata {
        const message = { ...baseDeleteAccessKeyMetadata } as DeleteAccessKeyMetadata;
        message.accessKeyId =
            object.accessKeyId !== undefined && object.accessKeyId !== null
                ? String(object.accessKeyId)
                : '';
        return message;
    },

    toJSON(message: DeleteAccessKeyMetadata): unknown {
        const obj: any = {};
        message.accessKeyId !== undefined && (obj.accessKeyId = message.accessKeyId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteAccessKeyMetadata>, I>>(
        object: I,
    ): DeleteAccessKeyMetadata {
        const message = { ...baseDeleteAccessKeyMetadata } as DeleteAccessKeyMetadata;
        message.accessKeyId = object.accessKeyId ?? '';
        return message;
    },
};

const baseListAccessKeyOperationsRequest: object = { accessKeyId: '', pageSize: 0, pageToken: '' };

export const ListAccessKeyOperationsRequest = {
    encode(
        message: ListAccessKeyOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.accessKeyId !== '') {
            writer.uint32(10).string(message.accessKeyId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListAccessKeyOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListAccessKeyOperationsRequest } as ListAccessKeyOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKeyId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListAccessKeyOperationsRequest {
        const message = { ...baseListAccessKeyOperationsRequest } as ListAccessKeyOperationsRequest;
        message.accessKeyId =
            object.accessKeyId !== undefined && object.accessKeyId !== null
                ? String(object.accessKeyId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListAccessKeyOperationsRequest): unknown {
        const obj: any = {};
        message.accessKeyId !== undefined && (obj.accessKeyId = message.accessKeyId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListAccessKeyOperationsRequest>, I>>(
        object: I,
    ): ListAccessKeyOperationsRequest {
        const message = { ...baseListAccessKeyOperationsRequest } as ListAccessKeyOperationsRequest;
        message.accessKeyId = object.accessKeyId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListAccessKeyOperationsResponse: object = { nextPageToken: '' };

export const ListAccessKeyOperationsResponse = {
    encode(
        message: ListAccessKeyOperationsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.operations) {
            Operation.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListAccessKeyOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListAccessKeyOperationsResponse,
        } as ListAccessKeyOperationsResponse;
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(Operation.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListAccessKeyOperationsResponse {
        const message = {
            ...baseListAccessKeyOperationsResponse,
        } as ListAccessKeyOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListAccessKeyOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListAccessKeyOperationsResponse>, I>>(
        object: I,
    ): ListAccessKeyOperationsResponse {
        const message = {
            ...baseListAccessKeyOperationsResponse,
        } as ListAccessKeyOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** A set of methods for managing access keys. */
export const AccessKeyServiceService = {
    /** Retrieves the list of access keys for the specified service account. */
    list: {
        path: '/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessKeysRequest) =>
            Buffer.from(ListAccessKeysRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAccessKeysRequest.decode(value),
        responseSerialize: (value: ListAccessKeysResponse) =>
            Buffer.from(ListAccessKeysResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAccessKeysResponse.decode(value),
    },
    /**
     * Returns the specified access key.
     *
     * To get the list of available access keys, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetAccessKeyRequest) =>
            Buffer.from(GetAccessKeyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetAccessKeyRequest.decode(value),
        responseSerialize: (value: AccessKey) => Buffer.from(AccessKey.encode(value).finish()),
        responseDeserialize: (value: Buffer) => AccessKey.decode(value),
    },
    /** Creates an access key for the specified service account. */
    create: {
        path: '/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateAccessKeyRequest) =>
            Buffer.from(CreateAccessKeyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateAccessKeyRequest.decode(value),
        responseSerialize: (value: CreateAccessKeyResponse) =>
            Buffer.from(CreateAccessKeyResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => CreateAccessKeyResponse.decode(value),
    },
    /** Updates the specified access key. */
    update: {
        path: '/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessKeyRequest) =>
            Buffer.from(UpdateAccessKeyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateAccessKeyRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified access key. */
    delete: {
        path: '/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteAccessKeyRequest) =>
            Buffer.from(DeleteAccessKeyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteAccessKeyRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Retrieves the list of operations for the specified access key. */
    listOperations: {
        path: '/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessKeyOperationsRequest) =>
            Buffer.from(ListAccessKeyOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAccessKeyOperationsRequest.decode(value),
        responseSerialize: (value: ListAccessKeyOperationsResponse) =>
            Buffer.from(ListAccessKeyOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAccessKeyOperationsResponse.decode(value),
    },
} as const;

export interface AccessKeyServiceServer extends UntypedServiceImplementation {
    /** Retrieves the list of access keys for the specified service account. */
    list: handleUnaryCall<ListAccessKeysRequest, ListAccessKeysResponse>;
    /**
     * Returns the specified access key.
     *
     * To get the list of available access keys, make a [List] request.
     */
    get: handleUnaryCall<GetAccessKeyRequest, AccessKey>;
    /** Creates an access key for the specified service account. */
    create: handleUnaryCall<CreateAccessKeyRequest, CreateAccessKeyResponse>;
    /** Updates the specified access key. */
    update: handleUnaryCall<UpdateAccessKeyRequest, Operation>;
    /** Deletes the specified access key. */
    delete: handleUnaryCall<DeleteAccessKeyRequest, Operation>;
    /** Retrieves the list of operations for the specified access key. */
    listOperations: handleUnaryCall<
        ListAccessKeyOperationsRequest,
        ListAccessKeyOperationsResponse
    >;
}

export interface AccessKeyServiceClient extends Client {
    /** Retrieves the list of access keys for the specified service account. */
    list(
        request: ListAccessKeysRequest,
        callback: (error: ServiceError | null, response: ListAccessKeysResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListAccessKeysRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListAccessKeysResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListAccessKeysRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListAccessKeysResponse) => void,
    ): ClientUnaryCall;
    /**
     * Returns the specified access key.
     *
     * To get the list of available access keys, make a [List] request.
     */
    get(
        request: GetAccessKeyRequest,
        callback: (error: ServiceError | null, response: AccessKey) => void,
    ): ClientUnaryCall;
    get(
        request: GetAccessKeyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: AccessKey) => void,
    ): ClientUnaryCall;
    get(
        request: GetAccessKeyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: AccessKey) => void,
    ): ClientUnaryCall;
    /** Creates an access key for the specified service account. */
    create(
        request: CreateAccessKeyRequest,
        callback: (error: ServiceError | null, response: CreateAccessKeyResponse) => void,
    ): ClientUnaryCall;
    create(
        request: CreateAccessKeyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: CreateAccessKeyResponse) => void,
    ): ClientUnaryCall;
    create(
        request: CreateAccessKeyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: CreateAccessKeyResponse) => void,
    ): ClientUnaryCall;
    /** Updates the specified access key. */
    update(
        request: UpdateAccessKeyRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateAccessKeyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateAccessKeyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified access key. */
    delete(
        request: DeleteAccessKeyRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteAccessKeyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteAccessKeyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of operations for the specified access key. */
    listOperations(
        request: ListAccessKeyOperationsRequest,
        callback: (error: ServiceError | null, response: ListAccessKeyOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListAccessKeyOperationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListAccessKeyOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListAccessKeyOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListAccessKeyOperationsResponse) => void,
    ): ClientUnaryCall;
}

export const AccessKeyServiceClient = makeGenericClientConstructor(
    AccessKeyServiceService,
    'yandex.cloud.iam.v1.awscompatibility.AccessKeyService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): AccessKeyServiceClient;
    service: typeof AccessKeyServiceService;
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
