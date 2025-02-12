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
import { ResourceGroup } from '../../../../../yandex/cloud/mdb/greenplum/v1/resource_groups';
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Operation } from '../../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.mdb.greenplum.v1';

export interface CreateResourceGroupMetadata {
    $type: 'yandex.cloud.mdb.greenplum.v1.CreateResourceGroupMetadata';
    clusterId: string;
    resourceGroupName: string;
}

export interface UpdateResourceGroupMetadata {
    $type: 'yandex.cloud.mdb.greenplum.v1.UpdateResourceGroupMetadata';
    clusterId: string;
    resourceGroupName: string;
}

export interface DeleteResourceGroupMetadata {
    $type: 'yandex.cloud.mdb.greenplum.v1.DeleteResourceGroupMetadata';
    clusterId: string;
    resourceGroupName: string;
}

export interface ListResourceGroupsRequest {
    $type: 'yandex.cloud.mdb.greenplum.v1.ListResourceGroupsRequest';
    clusterId: string;
}

export interface ListResourceGroupsResponse {
    $type: 'yandex.cloud.mdb.greenplum.v1.ListResourceGroupsResponse';
    resourceGroups: ResourceGroup[];
}

export interface GetResourceGroupAtRevisionRequest {
    $type: 'yandex.cloud.mdb.greenplum.v1.GetResourceGroupAtRevisionRequest';
    /** ID of the Greenplum cluster. */
    clusterId: string;
    /** Cluster revision */
    revision: number;
    resourceGroupName: string;
}

export interface CreateResourceGroupRequest {
    $type: 'yandex.cloud.mdb.greenplum.v1.CreateResourceGroupRequest';
    clusterId: string;
    resourceGroup?: ResourceGroup;
}

export interface UpdateResourceGroupRequest {
    $type: 'yandex.cloud.mdb.greenplum.v1.UpdateResourceGroupRequest';
    clusterId: string;
    updateMask?: FieldMask;
    resourceGroup?: ResourceGroup;
}

export interface DeleteResourceGroupRequest {
    $type: 'yandex.cloud.mdb.greenplum.v1.DeleteResourceGroupRequest';
    clusterId: string;
    resourceGroupName: string;
}

const baseCreateResourceGroupMetadata: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.CreateResourceGroupMetadata',
    clusterId: '',
    resourceGroupName: '',
};

export const CreateResourceGroupMetadata = {
    $type: 'yandex.cloud.mdb.greenplum.v1.CreateResourceGroupMetadata' as const,

    encode(
        message: CreateResourceGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.resourceGroupName !== '') {
            writer.uint32(18).string(message.resourceGroupName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateResourceGroupMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateResourceGroupMetadata } as CreateResourceGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.resourceGroupName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateResourceGroupMetadata {
        const message = { ...baseCreateResourceGroupMetadata } as CreateResourceGroupMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.resourceGroupName =
            object.resourceGroupName !== undefined && object.resourceGroupName !== null
                ? String(object.resourceGroupName)
                : '';
        return message;
    },

    toJSON(message: CreateResourceGroupMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.resourceGroupName !== undefined &&
            (obj.resourceGroupName = message.resourceGroupName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateResourceGroupMetadata>, I>>(
        object: I,
    ): CreateResourceGroupMetadata {
        const message = { ...baseCreateResourceGroupMetadata } as CreateResourceGroupMetadata;
        message.clusterId = object.clusterId ?? '';
        message.resourceGroupName = object.resourceGroupName ?? '';
        return message;
    },
};

messageTypeRegistry.set(CreateResourceGroupMetadata.$type, CreateResourceGroupMetadata);

const baseUpdateResourceGroupMetadata: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.UpdateResourceGroupMetadata',
    clusterId: '',
    resourceGroupName: '',
};

export const UpdateResourceGroupMetadata = {
    $type: 'yandex.cloud.mdb.greenplum.v1.UpdateResourceGroupMetadata' as const,

    encode(
        message: UpdateResourceGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.resourceGroupName !== '') {
            writer.uint32(18).string(message.resourceGroupName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateResourceGroupMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateResourceGroupMetadata } as UpdateResourceGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.resourceGroupName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateResourceGroupMetadata {
        const message = { ...baseUpdateResourceGroupMetadata } as UpdateResourceGroupMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.resourceGroupName =
            object.resourceGroupName !== undefined && object.resourceGroupName !== null
                ? String(object.resourceGroupName)
                : '';
        return message;
    },

    toJSON(message: UpdateResourceGroupMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.resourceGroupName !== undefined &&
            (obj.resourceGroupName = message.resourceGroupName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateResourceGroupMetadata>, I>>(
        object: I,
    ): UpdateResourceGroupMetadata {
        const message = { ...baseUpdateResourceGroupMetadata } as UpdateResourceGroupMetadata;
        message.clusterId = object.clusterId ?? '';
        message.resourceGroupName = object.resourceGroupName ?? '';
        return message;
    },
};

messageTypeRegistry.set(UpdateResourceGroupMetadata.$type, UpdateResourceGroupMetadata);

const baseDeleteResourceGroupMetadata: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.DeleteResourceGroupMetadata',
    clusterId: '',
    resourceGroupName: '',
};

export const DeleteResourceGroupMetadata = {
    $type: 'yandex.cloud.mdb.greenplum.v1.DeleteResourceGroupMetadata' as const,

    encode(
        message: DeleteResourceGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.resourceGroupName !== '') {
            writer.uint32(18).string(message.resourceGroupName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteResourceGroupMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteResourceGroupMetadata } as DeleteResourceGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.resourceGroupName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteResourceGroupMetadata {
        const message = { ...baseDeleteResourceGroupMetadata } as DeleteResourceGroupMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.resourceGroupName =
            object.resourceGroupName !== undefined && object.resourceGroupName !== null
                ? String(object.resourceGroupName)
                : '';
        return message;
    },

    toJSON(message: DeleteResourceGroupMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.resourceGroupName !== undefined &&
            (obj.resourceGroupName = message.resourceGroupName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteResourceGroupMetadata>, I>>(
        object: I,
    ): DeleteResourceGroupMetadata {
        const message = { ...baseDeleteResourceGroupMetadata } as DeleteResourceGroupMetadata;
        message.clusterId = object.clusterId ?? '';
        message.resourceGroupName = object.resourceGroupName ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteResourceGroupMetadata.$type, DeleteResourceGroupMetadata);

const baseListResourceGroupsRequest: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.ListResourceGroupsRequest',
    clusterId: '',
};

export const ListResourceGroupsRequest = {
    $type: 'yandex.cloud.mdb.greenplum.v1.ListResourceGroupsRequest' as const,

    encode(
        message: ListResourceGroupsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListResourceGroupsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListResourceGroupsRequest } as ListResourceGroupsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListResourceGroupsRequest {
        const message = { ...baseListResourceGroupsRequest } as ListResourceGroupsRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        return message;
    },

    toJSON(message: ListResourceGroupsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListResourceGroupsRequest>, I>>(
        object: I,
    ): ListResourceGroupsRequest {
        const message = { ...baseListResourceGroupsRequest } as ListResourceGroupsRequest;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListResourceGroupsRequest.$type, ListResourceGroupsRequest);

const baseListResourceGroupsResponse: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.ListResourceGroupsResponse',
};

export const ListResourceGroupsResponse = {
    $type: 'yandex.cloud.mdb.greenplum.v1.ListResourceGroupsResponse' as const,

    encode(
        message: ListResourceGroupsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.resourceGroups) {
            ResourceGroup.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListResourceGroupsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListResourceGroupsResponse } as ListResourceGroupsResponse;
        message.resourceGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceGroups.push(ResourceGroup.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListResourceGroupsResponse {
        const message = { ...baseListResourceGroupsResponse } as ListResourceGroupsResponse;
        message.resourceGroups = (object.resourceGroups ?? []).map((e: any) =>
            ResourceGroup.fromJSON(e),
        );
        return message;
    },

    toJSON(message: ListResourceGroupsResponse): unknown {
        const obj: any = {};
        if (message.resourceGroups) {
            obj.resourceGroups = message.resourceGroups.map((e) =>
                e ? ResourceGroup.toJSON(e) : undefined,
            );
        } else {
            obj.resourceGroups = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListResourceGroupsResponse>, I>>(
        object: I,
    ): ListResourceGroupsResponse {
        const message = { ...baseListResourceGroupsResponse } as ListResourceGroupsResponse;
        message.resourceGroups =
            object.resourceGroups?.map((e) => ResourceGroup.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(ListResourceGroupsResponse.$type, ListResourceGroupsResponse);

const baseGetResourceGroupAtRevisionRequest: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.GetResourceGroupAtRevisionRequest',
    clusterId: '',
    revision: 0,
    resourceGroupName: '',
};

export const GetResourceGroupAtRevisionRequest = {
    $type: 'yandex.cloud.mdb.greenplum.v1.GetResourceGroupAtRevisionRequest' as const,

    encode(
        message: GetResourceGroupAtRevisionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.revision !== 0) {
            writer.uint32(16).int64(message.revision);
        }
        if (message.resourceGroupName !== '') {
            writer.uint32(26).string(message.resourceGroupName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetResourceGroupAtRevisionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetResourceGroupAtRevisionRequest,
        } as GetResourceGroupAtRevisionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.revision = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.resourceGroupName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetResourceGroupAtRevisionRequest {
        const message = {
            ...baseGetResourceGroupAtRevisionRequest,
        } as GetResourceGroupAtRevisionRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.revision =
            object.revision !== undefined && object.revision !== null ? Number(object.revision) : 0;
        message.resourceGroupName =
            object.resourceGroupName !== undefined && object.resourceGroupName !== null
                ? String(object.resourceGroupName)
                : '';
        return message;
    },

    toJSON(message: GetResourceGroupAtRevisionRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.revision !== undefined && (obj.revision = Math.round(message.revision));
        message.resourceGroupName !== undefined &&
            (obj.resourceGroupName = message.resourceGroupName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetResourceGroupAtRevisionRequest>, I>>(
        object: I,
    ): GetResourceGroupAtRevisionRequest {
        const message = {
            ...baseGetResourceGroupAtRevisionRequest,
        } as GetResourceGroupAtRevisionRequest;
        message.clusterId = object.clusterId ?? '';
        message.revision = object.revision ?? 0;
        message.resourceGroupName = object.resourceGroupName ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetResourceGroupAtRevisionRequest.$type, GetResourceGroupAtRevisionRequest);

const baseCreateResourceGroupRequest: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.CreateResourceGroupRequest',
    clusterId: '',
};

export const CreateResourceGroupRequest = {
    $type: 'yandex.cloud.mdb.greenplum.v1.CreateResourceGroupRequest' as const,

    encode(
        message: CreateResourceGroupRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.resourceGroup !== undefined) {
            ResourceGroup.encode(message.resourceGroup, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateResourceGroupRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateResourceGroupRequest } as CreateResourceGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.resourceGroup = ResourceGroup.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateResourceGroupRequest {
        const message = { ...baseCreateResourceGroupRequest } as CreateResourceGroupRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.resourceGroup =
            object.resourceGroup !== undefined && object.resourceGroup !== null
                ? ResourceGroup.fromJSON(object.resourceGroup)
                : undefined;
        return message;
    },

    toJSON(message: CreateResourceGroupRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.resourceGroup !== undefined &&
            (obj.resourceGroup = message.resourceGroup
                ? ResourceGroup.toJSON(message.resourceGroup)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateResourceGroupRequest>, I>>(
        object: I,
    ): CreateResourceGroupRequest {
        const message = { ...baseCreateResourceGroupRequest } as CreateResourceGroupRequest;
        message.clusterId = object.clusterId ?? '';
        message.resourceGroup =
            object.resourceGroup !== undefined && object.resourceGroup !== null
                ? ResourceGroup.fromPartial(object.resourceGroup)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(CreateResourceGroupRequest.$type, CreateResourceGroupRequest);

const baseUpdateResourceGroupRequest: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.UpdateResourceGroupRequest',
    clusterId: '',
};

export const UpdateResourceGroupRequest = {
    $type: 'yandex.cloud.mdb.greenplum.v1.UpdateResourceGroupRequest' as const,

    encode(
        message: UpdateResourceGroupRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.resourceGroup !== undefined) {
            ResourceGroup.encode(message.resourceGroup, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateResourceGroupRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateResourceGroupRequest } as UpdateResourceGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.resourceGroup = ResourceGroup.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateResourceGroupRequest {
        const message = { ...baseUpdateResourceGroupRequest } as UpdateResourceGroupRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.resourceGroup =
            object.resourceGroup !== undefined && object.resourceGroup !== null
                ? ResourceGroup.fromJSON(object.resourceGroup)
                : undefined;
        return message;
    },

    toJSON(message: UpdateResourceGroupRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.resourceGroup !== undefined &&
            (obj.resourceGroup = message.resourceGroup
                ? ResourceGroup.toJSON(message.resourceGroup)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateResourceGroupRequest>, I>>(
        object: I,
    ): UpdateResourceGroupRequest {
        const message = { ...baseUpdateResourceGroupRequest } as UpdateResourceGroupRequest;
        message.clusterId = object.clusterId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.resourceGroup =
            object.resourceGroup !== undefined && object.resourceGroup !== null
                ? ResourceGroup.fromPartial(object.resourceGroup)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(UpdateResourceGroupRequest.$type, UpdateResourceGroupRequest);

const baseDeleteResourceGroupRequest: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.DeleteResourceGroupRequest',
    clusterId: '',
    resourceGroupName: '',
};

export const DeleteResourceGroupRequest = {
    $type: 'yandex.cloud.mdb.greenplum.v1.DeleteResourceGroupRequest' as const,

    encode(
        message: DeleteResourceGroupRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.resourceGroupName !== '') {
            writer.uint32(18).string(message.resourceGroupName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteResourceGroupRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteResourceGroupRequest } as DeleteResourceGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.resourceGroupName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteResourceGroupRequest {
        const message = { ...baseDeleteResourceGroupRequest } as DeleteResourceGroupRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.resourceGroupName =
            object.resourceGroupName !== undefined && object.resourceGroupName !== null
                ? String(object.resourceGroupName)
                : '';
        return message;
    },

    toJSON(message: DeleteResourceGroupRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.resourceGroupName !== undefined &&
            (obj.resourceGroupName = message.resourceGroupName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteResourceGroupRequest>, I>>(
        object: I,
    ): DeleteResourceGroupRequest {
        const message = { ...baseDeleteResourceGroupRequest } as DeleteResourceGroupRequest;
        message.clusterId = object.clusterId ?? '';
        message.resourceGroupName = object.resourceGroupName ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteResourceGroupRequest.$type, DeleteResourceGroupRequest);

export const ResourceGroupServiceService = {
    /** List all resource group */
    list: {
        path: '/yandex.cloud.mdb.greenplum.v1.ResourceGroupService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListResourceGroupsRequest) =>
            Buffer.from(ListResourceGroupsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListResourceGroupsRequest.decode(value),
        responseSerialize: (value: ListResourceGroupsResponse) =>
            Buffer.from(ListResourceGroupsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListResourceGroupsResponse.decode(value),
    },
    /** Returns the specified resource group at revision. */
    getAtRevision: {
        path: '/yandex.cloud.mdb.greenplum.v1.ResourceGroupService/GetAtRevision',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetResourceGroupAtRevisionRequest) =>
            Buffer.from(GetResourceGroupAtRevisionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetResourceGroupAtRevisionRequest.decode(value),
        responseSerialize: (value: ResourceGroup) =>
            Buffer.from(ResourceGroup.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ResourceGroup.decode(value),
    },
    /** Creates resource group */
    create: {
        path: '/yandex.cloud.mdb.greenplum.v1.ResourceGroupService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateResourceGroupRequest) =>
            Buffer.from(CreateResourceGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateResourceGroupRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Update resource group */
    update: {
        path: '/yandex.cloud.mdb.greenplum.v1.ResourceGroupService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateResourceGroupRequest) =>
            Buffer.from(UpdateResourceGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateResourceGroupRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Delete resource group */
    delete: {
        path: '/yandex.cloud.mdb.greenplum.v1.ResourceGroupService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteResourceGroupRequest) =>
            Buffer.from(DeleteResourceGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteResourceGroupRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface ResourceGroupServiceServer extends UntypedServiceImplementation {
    /** List all resource group */
    list: handleUnaryCall<ListResourceGroupsRequest, ListResourceGroupsResponse>;
    /** Returns the specified resource group at revision. */
    getAtRevision: handleUnaryCall<GetResourceGroupAtRevisionRequest, ResourceGroup>;
    /** Creates resource group */
    create: handleUnaryCall<CreateResourceGroupRequest, Operation>;
    /** Update resource group */
    update: handleUnaryCall<UpdateResourceGroupRequest, Operation>;
    /** Delete resource group */
    delete: handleUnaryCall<DeleteResourceGroupRequest, Operation>;
}

export interface ResourceGroupServiceClient extends Client {
    /** List all resource group */
    list(
        request: ListResourceGroupsRequest,
        callback: (error: ServiceError | null, response: ListResourceGroupsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListResourceGroupsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListResourceGroupsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListResourceGroupsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListResourceGroupsResponse) => void,
    ): ClientUnaryCall;
    /** Returns the specified resource group at revision. */
    getAtRevision(
        request: GetResourceGroupAtRevisionRequest,
        callback: (error: ServiceError | null, response: ResourceGroup) => void,
    ): ClientUnaryCall;
    getAtRevision(
        request: GetResourceGroupAtRevisionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ResourceGroup) => void,
    ): ClientUnaryCall;
    getAtRevision(
        request: GetResourceGroupAtRevisionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ResourceGroup) => void,
    ): ClientUnaryCall;
    /** Creates resource group */
    create(
        request: CreateResourceGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateResourceGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateResourceGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Update resource group */
    update(
        request: UpdateResourceGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateResourceGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateResourceGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Delete resource group */
    delete(
        request: DeleteResourceGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteResourceGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteResourceGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const ResourceGroupServiceClient = makeGenericClientConstructor(
    ResourceGroupServiceService,
    'yandex.cloud.mdb.greenplum.v1.ResourceGroupService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ResourceGroupServiceClient;
    service: typeof ResourceGroupServiceService;
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
