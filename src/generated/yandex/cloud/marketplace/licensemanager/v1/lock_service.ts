/* eslint-disable */
import { messageTypeRegistry } from '../../../../../typeRegistry';
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
import { Lock } from '../../../../../yandex/cloud/marketplace/licensemanager/v1/lock';
import { Operation } from '../../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.marketplace.licensemanager.v1';

export interface GetLockRequest {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.GetLockRequest';
    /** ID of the subscription lock. */
    lockId: string;
}

export interface CreateLockRequest {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.CreateLockRequest';
    /** ID of the subscription instance. */
    instanceId: string;
    /** ID of the resource to which the subscription will be locked. */
    resourceId: string;
}

export interface EnsureLockRequest {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.EnsureLockRequest';
    /** ID of the subscription instance. */
    instanceId: string;
    /** ID of the resource to which the subscription will be locked. */
    resourceId: string;
}

export interface CreateLockMetadata {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.CreateLockMetadata';
    /** ID of the subscription lock. */
    lockId: string;
}

export interface EnsureLockMetadata {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.EnsureLockMetadata';
    /** ID of the subscription lock. */
    lockId: string;
}

export interface DeleteLockRequest {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.DeleteLockRequest';
    /** ID of the subscription lock. */
    lockId: string;
}

export interface DeleteLockMetadata {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.DeleteLockMetadata';
    /** ID of the subscription lock. */
    lockId: string;
}

export interface GetLockByInstanceAndResourceRequest {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.GetLockByInstanceAndResourceRequest';
    /** ID of the subscription instance. */
    instanceId: string;
    /** ID of the resource to which the subscription will be locked. */
    resourceId: string;
}

export interface ListLocksRequest {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.ListLocksRequest';
    /** ID of the resource that the subscription locks belong to. */
    resourceId: string;
    /** ID of the folder that the subscription locks belong to. */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListLocksResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListLocksResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters subscription locks listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Lock.product_id] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be in double quotes `""`. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `product_id="my-product-id"`.
     */
    filter: string;
    /** Sorting order for the list of subscription locks. */
    orderBy: string;
}

export interface ListLocksResponse {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.ListLocksResponse';
    /** List of subscription locks. */
    locks: Lock[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListLocksRequest.page_size], use `next_page_token` as the value
     * for the [ListLocksRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetLockRequest: object = {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.GetLockRequest',
    lockId: '',
};

export const GetLockRequest = {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.GetLockRequest' as const,

    encode(message: GetLockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.lockId !== '') {
            writer.uint32(10).string(message.lockId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetLockRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetLockRequest } as GetLockRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetLockRequest {
        const message = { ...baseGetLockRequest } as GetLockRequest;
        message.lockId =
            object.lockId !== undefined && object.lockId !== null ? String(object.lockId) : '';
        return message;
    },

    toJSON(message: GetLockRequest): unknown {
        const obj: any = {};
        message.lockId !== undefined && (obj.lockId = message.lockId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetLockRequest>, I>>(object: I): GetLockRequest {
        const message = { ...baseGetLockRequest } as GetLockRequest;
        message.lockId = object.lockId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetLockRequest.$type, GetLockRequest);

const baseCreateLockRequest: object = {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.CreateLockRequest',
    instanceId: '',
    resourceId: '',
};

export const CreateLockRequest = {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.CreateLockRequest' as const,

    encode(message: CreateLockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.resourceId !== '') {
            writer.uint32(18).string(message.resourceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateLockRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateLockRequest } as CreateLockRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateLockRequest {
        const message = { ...baseCreateLockRequest } as CreateLockRequest;
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : '';
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        return message;
    },

    toJSON(message: CreateLockRequest): unknown {
        const obj: any = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateLockRequest>, I>>(object: I): CreateLockRequest {
        const message = { ...baseCreateLockRequest } as CreateLockRequest;
        message.instanceId = object.instanceId ?? '';
        message.resourceId = object.resourceId ?? '';
        return message;
    },
};

messageTypeRegistry.set(CreateLockRequest.$type, CreateLockRequest);

const baseEnsureLockRequest: object = {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.EnsureLockRequest',
    instanceId: '',
    resourceId: '',
};

export const EnsureLockRequest = {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.EnsureLockRequest' as const,

    encode(message: EnsureLockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.resourceId !== '') {
            writer.uint32(18).string(message.resourceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EnsureLockRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEnsureLockRequest } as EnsureLockRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): EnsureLockRequest {
        const message = { ...baseEnsureLockRequest } as EnsureLockRequest;
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : '';
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        return message;
    },

    toJSON(message: EnsureLockRequest): unknown {
        const obj: any = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<EnsureLockRequest>, I>>(object: I): EnsureLockRequest {
        const message = { ...baseEnsureLockRequest } as EnsureLockRequest;
        message.instanceId = object.instanceId ?? '';
        message.resourceId = object.resourceId ?? '';
        return message;
    },
};

messageTypeRegistry.set(EnsureLockRequest.$type, EnsureLockRequest);

const baseCreateLockMetadata: object = {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.CreateLockMetadata',
    lockId: '',
};

export const CreateLockMetadata = {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.CreateLockMetadata' as const,

    encode(message: CreateLockMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.lockId !== '') {
            writer.uint32(10).string(message.lockId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateLockMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateLockMetadata } as CreateLockMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateLockMetadata {
        const message = { ...baseCreateLockMetadata } as CreateLockMetadata;
        message.lockId =
            object.lockId !== undefined && object.lockId !== null ? String(object.lockId) : '';
        return message;
    },

    toJSON(message: CreateLockMetadata): unknown {
        const obj: any = {};
        message.lockId !== undefined && (obj.lockId = message.lockId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateLockMetadata>, I>>(
        object: I,
    ): CreateLockMetadata {
        const message = { ...baseCreateLockMetadata } as CreateLockMetadata;
        message.lockId = object.lockId ?? '';
        return message;
    },
};

messageTypeRegistry.set(CreateLockMetadata.$type, CreateLockMetadata);

const baseEnsureLockMetadata: object = {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.EnsureLockMetadata',
    lockId: '',
};

export const EnsureLockMetadata = {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.EnsureLockMetadata' as const,

    encode(message: EnsureLockMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.lockId !== '') {
            writer.uint32(10).string(message.lockId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EnsureLockMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEnsureLockMetadata } as EnsureLockMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): EnsureLockMetadata {
        const message = { ...baseEnsureLockMetadata } as EnsureLockMetadata;
        message.lockId =
            object.lockId !== undefined && object.lockId !== null ? String(object.lockId) : '';
        return message;
    },

    toJSON(message: EnsureLockMetadata): unknown {
        const obj: any = {};
        message.lockId !== undefined && (obj.lockId = message.lockId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<EnsureLockMetadata>, I>>(
        object: I,
    ): EnsureLockMetadata {
        const message = { ...baseEnsureLockMetadata } as EnsureLockMetadata;
        message.lockId = object.lockId ?? '';
        return message;
    },
};

messageTypeRegistry.set(EnsureLockMetadata.$type, EnsureLockMetadata);

const baseDeleteLockRequest: object = {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.DeleteLockRequest',
    lockId: '',
};

export const DeleteLockRequest = {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.DeleteLockRequest' as const,

    encode(message: DeleteLockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.lockId !== '') {
            writer.uint32(10).string(message.lockId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLockRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteLockRequest } as DeleteLockRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteLockRequest {
        const message = { ...baseDeleteLockRequest } as DeleteLockRequest;
        message.lockId =
            object.lockId !== undefined && object.lockId !== null ? String(object.lockId) : '';
        return message;
    },

    toJSON(message: DeleteLockRequest): unknown {
        const obj: any = {};
        message.lockId !== undefined && (obj.lockId = message.lockId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteLockRequest>, I>>(object: I): DeleteLockRequest {
        const message = { ...baseDeleteLockRequest } as DeleteLockRequest;
        message.lockId = object.lockId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteLockRequest.$type, DeleteLockRequest);

const baseDeleteLockMetadata: object = {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.DeleteLockMetadata',
    lockId: '',
};

export const DeleteLockMetadata = {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.DeleteLockMetadata' as const,

    encode(message: DeleteLockMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.lockId !== '') {
            writer.uint32(10).string(message.lockId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLockMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteLockMetadata } as DeleteLockMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteLockMetadata {
        const message = { ...baseDeleteLockMetadata } as DeleteLockMetadata;
        message.lockId =
            object.lockId !== undefined && object.lockId !== null ? String(object.lockId) : '';
        return message;
    },

    toJSON(message: DeleteLockMetadata): unknown {
        const obj: any = {};
        message.lockId !== undefined && (obj.lockId = message.lockId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteLockMetadata>, I>>(
        object: I,
    ): DeleteLockMetadata {
        const message = { ...baseDeleteLockMetadata } as DeleteLockMetadata;
        message.lockId = object.lockId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteLockMetadata.$type, DeleteLockMetadata);

const baseGetLockByInstanceAndResourceRequest: object = {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.GetLockByInstanceAndResourceRequest',
    instanceId: '',
    resourceId: '',
};

export const GetLockByInstanceAndResourceRequest = {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.GetLockByInstanceAndResourceRequest' as const,

    encode(
        message: GetLockByInstanceAndResourceRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.resourceId !== '') {
            writer.uint32(18).string(message.resourceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetLockByInstanceAndResourceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetLockByInstanceAndResourceRequest,
        } as GetLockByInstanceAndResourceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetLockByInstanceAndResourceRequest {
        const message = {
            ...baseGetLockByInstanceAndResourceRequest,
        } as GetLockByInstanceAndResourceRequest;
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : '';
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        return message;
    },

    toJSON(message: GetLockByInstanceAndResourceRequest): unknown {
        const obj: any = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetLockByInstanceAndResourceRequest>, I>>(
        object: I,
    ): GetLockByInstanceAndResourceRequest {
        const message = {
            ...baseGetLockByInstanceAndResourceRequest,
        } as GetLockByInstanceAndResourceRequest;
        message.instanceId = object.instanceId ?? '';
        message.resourceId = object.resourceId ?? '';
        return message;
    },
};

messageTypeRegistry.set(
    GetLockByInstanceAndResourceRequest.$type,
    GetLockByInstanceAndResourceRequest,
);

const baseListLocksRequest: object = {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.ListLocksRequest',
    resourceId: '',
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
    orderBy: '',
};

export const ListLocksRequest = {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.ListLocksRequest' as const,

    encode(message: ListLocksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(34).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(42).string(message.filter);
        }
        if (message.orderBy !== '') {
            writer.uint32(50).string(message.orderBy);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListLocksRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListLocksRequest } as ListLocksRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.pageToken = reader.string();
                    break;
                case 5:
                    message.filter = reader.string();
                    break;
                case 6:
                    message.orderBy = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListLocksRequest {
        const message = { ...baseListLocksRequest } as ListLocksRequest;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        message.orderBy =
            object.orderBy !== undefined && object.orderBy !== null ? String(object.orderBy) : '';
        return message;
    },

    toJSON(message: ListLocksRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListLocksRequest>, I>>(object: I): ListLocksRequest {
        const message = { ...baseListLocksRequest } as ListLocksRequest;
        message.resourceId = object.resourceId ?? '';
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        message.orderBy = object.orderBy ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListLocksRequest.$type, ListLocksRequest);

const baseListLocksResponse: object = {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.ListLocksResponse',
    nextPageToken: '',
};

export const ListLocksResponse = {
    $type: 'yandex.cloud.marketplace.licensemanager.v1.ListLocksResponse' as const,

    encode(message: ListLocksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.locks) {
            Lock.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListLocksResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListLocksResponse } as ListLocksResponse;
        message.locks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(Lock.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListLocksResponse {
        const message = { ...baseListLocksResponse } as ListLocksResponse;
        message.locks = (object.locks ?? []).map((e: any) => Lock.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListLocksResponse): unknown {
        const obj: any = {};
        if (message.locks) {
            obj.locks = message.locks.map((e) => (e ? Lock.toJSON(e) : undefined));
        } else {
            obj.locks = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListLocksResponse>, I>>(object: I): ListLocksResponse {
        const message = { ...baseListLocksResponse } as ListLocksResponse;
        message.locks = object.locks?.map((e) => Lock.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListLocksResponse.$type, ListLocksResponse);

/** A set of methods for managing subscription locks. */
export const LockServiceService = {
    /** Returns the specified subscription lock. */
    get: {
        path: '/yandex.cloud.marketplace.licensemanager.v1.LockService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetLockRequest) =>
            Buffer.from(GetLockRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetLockRequest.decode(value),
        responseSerialize: (value: Lock) => Buffer.from(Lock.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Lock.decode(value),
    },
    /** Returns the subscription lock for specified subscription instance and resource. */
    getByInstanceAndResource: {
        path: '/yandex.cloud.marketplace.licensemanager.v1.LockService/GetByInstanceAndResource',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetLockByInstanceAndResourceRequest) =>
            Buffer.from(GetLockByInstanceAndResourceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetLockByInstanceAndResourceRequest.decode(value),
        responseSerialize: (value: Lock) => Buffer.from(Lock.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Lock.decode(value),
    },
    /** Returns subscriptions locks for specified resource and folder. */
    list: {
        path: '/yandex.cloud.marketplace.licensemanager.v1.LockService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListLocksRequest) =>
            Buffer.from(ListLocksRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListLocksRequest.decode(value),
        responseSerialize: (value: ListLocksResponse) =>
            Buffer.from(ListLocksResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListLocksResponse.decode(value),
    },
    /** Locks the specified subscription instance to the resource. */
    create: {
        path: '/yandex.cloud.marketplace.licensemanager.v1.LockService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateLockRequest) =>
            Buffer.from(CreateLockRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateLockRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Checks if the she specified subscription is already locked to the specified resource.
     * If it is not locked, locks the subscription to the resource.
     */
    ensure: {
        path: '/yandex.cloud.marketplace.licensemanager.v1.LockService/Ensure',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: EnsureLockRequest) =>
            Buffer.from(EnsureLockRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => EnsureLockRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Unlocks the specified subscription lock. */
    delete: {
        path: '/yandex.cloud.marketplace.licensemanager.v1.LockService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteLockRequest) =>
            Buffer.from(DeleteLockRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteLockRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface LockServiceServer extends UntypedServiceImplementation {
    /** Returns the specified subscription lock. */
    get: handleUnaryCall<GetLockRequest, Lock>;
    /** Returns the subscription lock for specified subscription instance and resource. */
    getByInstanceAndResource: handleUnaryCall<GetLockByInstanceAndResourceRequest, Lock>;
    /** Returns subscriptions locks for specified resource and folder. */
    list: handleUnaryCall<ListLocksRequest, ListLocksResponse>;
    /** Locks the specified subscription instance to the resource. */
    create: handleUnaryCall<CreateLockRequest, Operation>;
    /**
     * Checks if the she specified subscription is already locked to the specified resource.
     * If it is not locked, locks the subscription to the resource.
     */
    ensure: handleUnaryCall<EnsureLockRequest, Operation>;
    /** Unlocks the specified subscription lock. */
    delete: handleUnaryCall<DeleteLockRequest, Operation>;
}

export interface LockServiceClient extends Client {
    /** Returns the specified subscription lock. */
    get(
        request: GetLockRequest,
        callback: (error: ServiceError | null, response: Lock) => void,
    ): ClientUnaryCall;
    get(
        request: GetLockRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Lock) => void,
    ): ClientUnaryCall;
    get(
        request: GetLockRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Lock) => void,
    ): ClientUnaryCall;
    /** Returns the subscription lock for specified subscription instance and resource. */
    getByInstanceAndResource(
        request: GetLockByInstanceAndResourceRequest,
        callback: (error: ServiceError | null, response: Lock) => void,
    ): ClientUnaryCall;
    getByInstanceAndResource(
        request: GetLockByInstanceAndResourceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Lock) => void,
    ): ClientUnaryCall;
    getByInstanceAndResource(
        request: GetLockByInstanceAndResourceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Lock) => void,
    ): ClientUnaryCall;
    /** Returns subscriptions locks for specified resource and folder. */
    list(
        request: ListLocksRequest,
        callback: (error: ServiceError | null, response: ListLocksResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListLocksRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListLocksResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListLocksRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListLocksResponse) => void,
    ): ClientUnaryCall;
    /** Locks the specified subscription instance to the resource. */
    create(
        request: CreateLockRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateLockRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateLockRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Checks if the she specified subscription is already locked to the specified resource.
     * If it is not locked, locks the subscription to the resource.
     */
    ensure(
        request: EnsureLockRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    ensure(
        request: EnsureLockRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    ensure(
        request: EnsureLockRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Unlocks the specified subscription lock. */
    delete(
        request: DeleteLockRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteLockRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteLockRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const LockServiceClient = makeGenericClientConstructor(
    LockServiceService,
    'yandex.cloud.marketplace.licensemanager.v1.LockService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): LockServiceClient;
    service: typeof LockServiceService;
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
