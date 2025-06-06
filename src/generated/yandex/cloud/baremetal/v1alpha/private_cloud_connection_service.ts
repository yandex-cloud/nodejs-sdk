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
import { PrivateCloudConnection } from '../../../../yandex/cloud/baremetal/v1alpha/private_cloud_connection';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.baremetal.v1alpha';

export interface GetPrivateCloudConnectionRequest {
    /**
     * ID of the Private cloud connection resource to return.
     *
     * To get the server ID, use a [PrivateCloudConnectionService.List] request.
     */
    privateCloudConnectionId: string;
}

export interface ListPrivateCloudConnectionRequest {
    /**
     * ID of the folder to list private cloud connections in.
     *
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is greater than `page_size`,
     * the service returns a [ListPrivateCloudConnectionResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value is 20.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListPrivateCloudConnectionResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * By which column the listing should be ordered and in which direction,
     * format is "createdAt desc". "id asc" if omitted.
     * Supported fields: ["id", "createdAt", "updatedAt"].
     * Both snake_case and camelCase are supported for fields.
     */
    orderBy: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression consists of one or more conditions united by `AND` operator: `<condition1> [AND <condition2> [<...> AND <conditionN>]]`.
     *
     * Each condition has the form `<field> <operator> <value>`, where:
     * 1. `<field>` is the field name. Currently you can use filtering only on the limited number of fields.
     * 2. `<operator>` is a logical operator, one of `=` (equal), `:` (substring).
     * 3. `<value>` represents a value.
     * String values should be written in double (`"`) or single (`'`) quotes. C-style escape sequences are supported (`\"` turns to `"`, `\'` to `'`, `\\` to backslash).
     * Example: "key1='value' AND key2='value'"
     * Supported operators: ["AND"].
     * Supported fields: ["id", "name", "status", "vrfId", "routingInstanceId"].
     * Both snake_case and camelCase are supported for fields.
     */
    filter: string;
}

export interface ListPrivateCloudConnectionResponse {
    /** List of Private cloud connection resources. */
    privateCloudConnections: PrivateCloudConnection[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * [ListPrivateCloudConnectionRequest.page_size], use `next_page_token` as the value
     * for the [ListPrivateCloudConnectionRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreatePrivateCloudConnectionRequest {
    /** ID of Cloud Router Routing Instance. */
    routingInstanceId: string;
    /**
     * ID of VRF that is connected to routing Instance.
     *
     * To get the VRF ID, use a [VrfService.List] request.
     */
    vrfId: string;
}

export interface CreatePrivateCloudConnectionMetadata {
    /** ID of the private cloud connection that is being created. */
    privateCloudConnectionId: string;
}

export interface UpdatePrivateCloudConnectionRequest {
    /**
     * ID of the private cloud connection to update.
     *
     * To get the private cloud connection ID, use a [PrivateCloudConnectionService.List] request.
     */
    privateCloudConnectionId: string;
    /** Field mask that specifies which fields of the PrivateCloudConnection resource are going to be updated. */
    updateMask?: FieldMask;
    /** ID of Cloud Router Routing Instance. */
    routingInstanceId: string;
}

export interface UpdatePrivateCloudConnectionMetadata {
    /** ID of the Private cloud connection resource that is being update. */
    privateCloudConnectionId: string;
}

export interface DeletePrivateCloudConnectionRequest {
    /**
     * ID of the private cloud connection to delete.
     *
     * To get the private cloud connection ID, use a [PrivateCloudConnectionService.List] request.
     */
    privateCloudConnectionId: string;
}

export interface DeletePrivateCloudConnectionMetadata {
    /** ID of the Private cloud connection resource that is being deleted. */
    privateCloudConnectionId: string;
}

const baseGetPrivateCloudConnectionRequest: object = { privateCloudConnectionId: '' };

export const GetPrivateCloudConnectionRequest = {
    encode(
        message: GetPrivateCloudConnectionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.privateCloudConnectionId !== '') {
            writer.uint32(10).string(message.privateCloudConnectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetPrivateCloudConnectionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetPrivateCloudConnectionRequest,
        } as GetPrivateCloudConnectionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privateCloudConnectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetPrivateCloudConnectionRequest {
        const message = {
            ...baseGetPrivateCloudConnectionRequest,
        } as GetPrivateCloudConnectionRequest;
        message.privateCloudConnectionId =
            object.privateCloudConnectionId !== undefined &&
            object.privateCloudConnectionId !== null
                ? String(object.privateCloudConnectionId)
                : '';
        return message;
    },

    toJSON(message: GetPrivateCloudConnectionRequest): unknown {
        const obj: any = {};
        message.privateCloudConnectionId !== undefined &&
            (obj.privateCloudConnectionId = message.privateCloudConnectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetPrivateCloudConnectionRequest>, I>>(
        object: I,
    ): GetPrivateCloudConnectionRequest {
        const message = {
            ...baseGetPrivateCloudConnectionRequest,
        } as GetPrivateCloudConnectionRequest;
        message.privateCloudConnectionId = object.privateCloudConnectionId ?? '';
        return message;
    },
};

const baseListPrivateCloudConnectionRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    orderBy: '',
    filter: '',
};

export const ListPrivateCloudConnectionRequest = {
    encode(
        message: ListPrivateCloudConnectionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPrivateCloudConnectionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListPrivateCloudConnectionRequest,
        } as ListPrivateCloudConnectionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
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

    fromJSON(object: any): ListPrivateCloudConnectionRequest {
        const message = {
            ...baseListPrivateCloudConnectionRequest,
        } as ListPrivateCloudConnectionRequest;
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
        message.orderBy =
            object.orderBy !== undefined && object.orderBy !== null ? String(object.orderBy) : '';
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        return message;
    },

    toJSON(message: ListPrivateCloudConnectionRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPrivateCloudConnectionRequest>, I>>(
        object: I,
    ): ListPrivateCloudConnectionRequest {
        const message = {
            ...baseListPrivateCloudConnectionRequest,
        } as ListPrivateCloudConnectionRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.orderBy = object.orderBy ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListPrivateCloudConnectionResponse: object = { nextPageToken: '' };

export const ListPrivateCloudConnectionResponse = {
    encode(
        message: ListPrivateCloudConnectionResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.privateCloudConnections) {
            PrivateCloudConnection.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(802).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPrivateCloudConnectionResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListPrivateCloudConnectionResponse,
        } as ListPrivateCloudConnectionResponse;
        message.privateCloudConnections = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privateCloudConnections.push(
                        PrivateCloudConnection.decode(reader, reader.uint32()),
                    );
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

    fromJSON(object: any): ListPrivateCloudConnectionResponse {
        const message = {
            ...baseListPrivateCloudConnectionResponse,
        } as ListPrivateCloudConnectionResponse;
        message.privateCloudConnections = (object.privateCloudConnections ?? []).map((e: any) =>
            PrivateCloudConnection.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListPrivateCloudConnectionResponse): unknown {
        const obj: any = {};
        if (message.privateCloudConnections) {
            obj.privateCloudConnections = message.privateCloudConnections.map((e) =>
                e ? PrivateCloudConnection.toJSON(e) : undefined,
            );
        } else {
            obj.privateCloudConnections = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPrivateCloudConnectionResponse>, I>>(
        object: I,
    ): ListPrivateCloudConnectionResponse {
        const message = {
            ...baseListPrivateCloudConnectionResponse,
        } as ListPrivateCloudConnectionResponse;
        message.privateCloudConnections =
            object.privateCloudConnections?.map((e) => PrivateCloudConnection.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreatePrivateCloudConnectionRequest: object = { routingInstanceId: '', vrfId: '' };

export const CreatePrivateCloudConnectionRequest = {
    encode(
        message: CreatePrivateCloudConnectionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.routingInstanceId !== '') {
            writer.uint32(34).string(message.routingInstanceId);
        }
        if (message.vrfId !== '') {
            writer.uint32(42).string(message.vrfId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePrivateCloudConnectionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreatePrivateCloudConnectionRequest,
        } as CreatePrivateCloudConnectionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
                    message.routingInstanceId = reader.string();
                    break;
                case 5:
                    message.vrfId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreatePrivateCloudConnectionRequest {
        const message = {
            ...baseCreatePrivateCloudConnectionRequest,
        } as CreatePrivateCloudConnectionRequest;
        message.routingInstanceId =
            object.routingInstanceId !== undefined && object.routingInstanceId !== null
                ? String(object.routingInstanceId)
                : '';
        message.vrfId =
            object.vrfId !== undefined && object.vrfId !== null ? String(object.vrfId) : '';
        return message;
    },

    toJSON(message: CreatePrivateCloudConnectionRequest): unknown {
        const obj: any = {};
        message.routingInstanceId !== undefined &&
            (obj.routingInstanceId = message.routingInstanceId);
        message.vrfId !== undefined && (obj.vrfId = message.vrfId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreatePrivateCloudConnectionRequest>, I>>(
        object: I,
    ): CreatePrivateCloudConnectionRequest {
        const message = {
            ...baseCreatePrivateCloudConnectionRequest,
        } as CreatePrivateCloudConnectionRequest;
        message.routingInstanceId = object.routingInstanceId ?? '';
        message.vrfId = object.vrfId ?? '';
        return message;
    },
};

const baseCreatePrivateCloudConnectionMetadata: object = { privateCloudConnectionId: '' };

export const CreatePrivateCloudConnectionMetadata = {
    encode(
        message: CreatePrivateCloudConnectionMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.privateCloudConnectionId !== '') {
            writer.uint32(10).string(message.privateCloudConnectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePrivateCloudConnectionMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreatePrivateCloudConnectionMetadata,
        } as CreatePrivateCloudConnectionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privateCloudConnectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreatePrivateCloudConnectionMetadata {
        const message = {
            ...baseCreatePrivateCloudConnectionMetadata,
        } as CreatePrivateCloudConnectionMetadata;
        message.privateCloudConnectionId =
            object.privateCloudConnectionId !== undefined &&
            object.privateCloudConnectionId !== null
                ? String(object.privateCloudConnectionId)
                : '';
        return message;
    },

    toJSON(message: CreatePrivateCloudConnectionMetadata): unknown {
        const obj: any = {};
        message.privateCloudConnectionId !== undefined &&
            (obj.privateCloudConnectionId = message.privateCloudConnectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreatePrivateCloudConnectionMetadata>, I>>(
        object: I,
    ): CreatePrivateCloudConnectionMetadata {
        const message = {
            ...baseCreatePrivateCloudConnectionMetadata,
        } as CreatePrivateCloudConnectionMetadata;
        message.privateCloudConnectionId = object.privateCloudConnectionId ?? '';
        return message;
    },
};

const baseUpdatePrivateCloudConnectionRequest: object = {
    privateCloudConnectionId: '',
    routingInstanceId: '',
};

export const UpdatePrivateCloudConnectionRequest = {
    encode(
        message: UpdatePrivateCloudConnectionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.privateCloudConnectionId !== '') {
            writer.uint32(10).string(message.privateCloudConnectionId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.routingInstanceId !== '') {
            writer.uint32(26).string(message.routingInstanceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePrivateCloudConnectionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdatePrivateCloudConnectionRequest,
        } as UpdatePrivateCloudConnectionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privateCloudConnectionId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.routingInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdatePrivateCloudConnectionRequest {
        const message = {
            ...baseUpdatePrivateCloudConnectionRequest,
        } as UpdatePrivateCloudConnectionRequest;
        message.privateCloudConnectionId =
            object.privateCloudConnectionId !== undefined &&
            object.privateCloudConnectionId !== null
                ? String(object.privateCloudConnectionId)
                : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.routingInstanceId =
            object.routingInstanceId !== undefined && object.routingInstanceId !== null
                ? String(object.routingInstanceId)
                : '';
        return message;
    },

    toJSON(message: UpdatePrivateCloudConnectionRequest): unknown {
        const obj: any = {};
        message.privateCloudConnectionId !== undefined &&
            (obj.privateCloudConnectionId = message.privateCloudConnectionId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.routingInstanceId !== undefined &&
            (obj.routingInstanceId = message.routingInstanceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdatePrivateCloudConnectionRequest>, I>>(
        object: I,
    ): UpdatePrivateCloudConnectionRequest {
        const message = {
            ...baseUpdatePrivateCloudConnectionRequest,
        } as UpdatePrivateCloudConnectionRequest;
        message.privateCloudConnectionId = object.privateCloudConnectionId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.routingInstanceId = object.routingInstanceId ?? '';
        return message;
    },
};

const baseUpdatePrivateCloudConnectionMetadata: object = { privateCloudConnectionId: '' };

export const UpdatePrivateCloudConnectionMetadata = {
    encode(
        message: UpdatePrivateCloudConnectionMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.privateCloudConnectionId !== '') {
            writer.uint32(10).string(message.privateCloudConnectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePrivateCloudConnectionMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdatePrivateCloudConnectionMetadata,
        } as UpdatePrivateCloudConnectionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privateCloudConnectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdatePrivateCloudConnectionMetadata {
        const message = {
            ...baseUpdatePrivateCloudConnectionMetadata,
        } as UpdatePrivateCloudConnectionMetadata;
        message.privateCloudConnectionId =
            object.privateCloudConnectionId !== undefined &&
            object.privateCloudConnectionId !== null
                ? String(object.privateCloudConnectionId)
                : '';
        return message;
    },

    toJSON(message: UpdatePrivateCloudConnectionMetadata): unknown {
        const obj: any = {};
        message.privateCloudConnectionId !== undefined &&
            (obj.privateCloudConnectionId = message.privateCloudConnectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdatePrivateCloudConnectionMetadata>, I>>(
        object: I,
    ): UpdatePrivateCloudConnectionMetadata {
        const message = {
            ...baseUpdatePrivateCloudConnectionMetadata,
        } as UpdatePrivateCloudConnectionMetadata;
        message.privateCloudConnectionId = object.privateCloudConnectionId ?? '';
        return message;
    },
};

const baseDeletePrivateCloudConnectionRequest: object = { privateCloudConnectionId: '' };

export const DeletePrivateCloudConnectionRequest = {
    encode(
        message: DeletePrivateCloudConnectionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.privateCloudConnectionId !== '') {
            writer.uint32(10).string(message.privateCloudConnectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeletePrivateCloudConnectionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeletePrivateCloudConnectionRequest,
        } as DeletePrivateCloudConnectionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privateCloudConnectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeletePrivateCloudConnectionRequest {
        const message = {
            ...baseDeletePrivateCloudConnectionRequest,
        } as DeletePrivateCloudConnectionRequest;
        message.privateCloudConnectionId =
            object.privateCloudConnectionId !== undefined &&
            object.privateCloudConnectionId !== null
                ? String(object.privateCloudConnectionId)
                : '';
        return message;
    },

    toJSON(message: DeletePrivateCloudConnectionRequest): unknown {
        const obj: any = {};
        message.privateCloudConnectionId !== undefined &&
            (obj.privateCloudConnectionId = message.privateCloudConnectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeletePrivateCloudConnectionRequest>, I>>(
        object: I,
    ): DeletePrivateCloudConnectionRequest {
        const message = {
            ...baseDeletePrivateCloudConnectionRequest,
        } as DeletePrivateCloudConnectionRequest;
        message.privateCloudConnectionId = object.privateCloudConnectionId ?? '';
        return message;
    },
};

const baseDeletePrivateCloudConnectionMetadata: object = { privateCloudConnectionId: '' };

export const DeletePrivateCloudConnectionMetadata = {
    encode(
        message: DeletePrivateCloudConnectionMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.privateCloudConnectionId !== '') {
            writer.uint32(10).string(message.privateCloudConnectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeletePrivateCloudConnectionMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeletePrivateCloudConnectionMetadata,
        } as DeletePrivateCloudConnectionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privateCloudConnectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeletePrivateCloudConnectionMetadata {
        const message = {
            ...baseDeletePrivateCloudConnectionMetadata,
        } as DeletePrivateCloudConnectionMetadata;
        message.privateCloudConnectionId =
            object.privateCloudConnectionId !== undefined &&
            object.privateCloudConnectionId !== null
                ? String(object.privateCloudConnectionId)
                : '';
        return message;
    },

    toJSON(message: DeletePrivateCloudConnectionMetadata): unknown {
        const obj: any = {};
        message.privateCloudConnectionId !== undefined &&
            (obj.privateCloudConnectionId = message.privateCloudConnectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeletePrivateCloudConnectionMetadata>, I>>(
        object: I,
    ): DeletePrivateCloudConnectionMetadata {
        const message = {
            ...baseDeletePrivateCloudConnectionMetadata,
        } as DeletePrivateCloudConnectionMetadata;
        message.privateCloudConnectionId = object.privateCloudConnectionId ?? '';
        return message;
    },
};

/** A set of methods for managing Private cloud connection resources. */
export const PrivateCloudConnectionServiceService = {
    /**
     * Returns the specific Private cloud connection resource.
     *
     * To get the list of available Private cloud connection resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.baremetal.v1alpha.PrivateCloudConnectionService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetPrivateCloudConnectionRequest) =>
            Buffer.from(GetPrivateCloudConnectionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetPrivateCloudConnectionRequest.decode(value),
        responseSerialize: (value: PrivateCloudConnection) =>
            Buffer.from(PrivateCloudConnection.encode(value).finish()),
        responseDeserialize: (value: Buffer) => PrivateCloudConnection.decode(value),
    },
    /** Retrieves the list of Private cloud connection resources in the specified folder. */
    list: {
        path: '/yandex.cloud.baremetal.v1alpha.PrivateCloudConnectionService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListPrivateCloudConnectionRequest) =>
            Buffer.from(ListPrivateCloudConnectionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListPrivateCloudConnectionRequest.decode(value),
        responseSerialize: (value: ListPrivateCloudConnectionResponse) =>
            Buffer.from(ListPrivateCloudConnectionResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListPrivateCloudConnectionResponse.decode(value),
    },
    /** Creates a private cloud connection in the specified folder. */
    create: {
        path: '/yandex.cloud.baremetal.v1alpha.PrivateCloudConnectionService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreatePrivateCloudConnectionRequest) =>
            Buffer.from(CreatePrivateCloudConnectionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreatePrivateCloudConnectionRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the routing_instance_id in a private cloud connection. */
    update: {
        path: '/yandex.cloud.baremetal.v1alpha.PrivateCloudConnectionService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdatePrivateCloudConnectionRequest) =>
            Buffer.from(UpdatePrivateCloudConnectionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdatePrivateCloudConnectionRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Removes a private cloud connection and all allocated network resouces */
    delete: {
        path: '/yandex.cloud.baremetal.v1alpha.PrivateCloudConnectionService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeletePrivateCloudConnectionRequest) =>
            Buffer.from(DeletePrivateCloudConnectionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeletePrivateCloudConnectionRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface PrivateCloudConnectionServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specific Private cloud connection resource.
     *
     * To get the list of available Private cloud connection resources, make a [List] request.
     */
    get: handleUnaryCall<GetPrivateCloudConnectionRequest, PrivateCloudConnection>;
    /** Retrieves the list of Private cloud connection resources in the specified folder. */
    list: handleUnaryCall<ListPrivateCloudConnectionRequest, ListPrivateCloudConnectionResponse>;
    /** Creates a private cloud connection in the specified folder. */
    create: handleUnaryCall<CreatePrivateCloudConnectionRequest, Operation>;
    /** Updates the routing_instance_id in a private cloud connection. */
    update: handleUnaryCall<UpdatePrivateCloudConnectionRequest, Operation>;
    /** Removes a private cloud connection and all allocated network resouces */
    delete: handleUnaryCall<DeletePrivateCloudConnectionRequest, Operation>;
}

export interface PrivateCloudConnectionServiceClient extends Client {
    /**
     * Returns the specific Private cloud connection resource.
     *
     * To get the list of available Private cloud connection resources, make a [List] request.
     */
    get(
        request: GetPrivateCloudConnectionRequest,
        callback: (error: ServiceError | null, response: PrivateCloudConnection) => void,
    ): ClientUnaryCall;
    get(
        request: GetPrivateCloudConnectionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: PrivateCloudConnection) => void,
    ): ClientUnaryCall;
    get(
        request: GetPrivateCloudConnectionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: PrivateCloudConnection) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of Private cloud connection resources in the specified folder. */
    list(
        request: ListPrivateCloudConnectionRequest,
        callback: (
            error: ServiceError | null,
            response: ListPrivateCloudConnectionResponse,
        ) => void,
    ): ClientUnaryCall;
    list(
        request: ListPrivateCloudConnectionRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListPrivateCloudConnectionResponse,
        ) => void,
    ): ClientUnaryCall;
    list(
        request: ListPrivateCloudConnectionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListPrivateCloudConnectionResponse,
        ) => void,
    ): ClientUnaryCall;
    /** Creates a private cloud connection in the specified folder. */
    create(
        request: CreatePrivateCloudConnectionRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreatePrivateCloudConnectionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreatePrivateCloudConnectionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the routing_instance_id in a private cloud connection. */
    update(
        request: UpdatePrivateCloudConnectionRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdatePrivateCloudConnectionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdatePrivateCloudConnectionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Removes a private cloud connection and all allocated network resouces */
    delete(
        request: DeletePrivateCloudConnectionRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeletePrivateCloudConnectionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeletePrivateCloudConnectionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const PrivateCloudConnectionServiceClient = makeGenericClientConstructor(
    PrivateCloudConnectionServiceService,
    'yandex.cloud.baremetal.v1alpha.PrivateCloudConnectionService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): PrivateCloudConnectionServiceClient;
    service: typeof PrivateCloudConnectionServiceService;
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
