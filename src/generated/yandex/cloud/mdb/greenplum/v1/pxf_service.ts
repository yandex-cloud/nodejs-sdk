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
import { PXFDatasource } from '../../../../../yandex/cloud/mdb/greenplum/v1/pxf';
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Operation } from '../../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.mdb.greenplum.v1';

export interface CreatePXFDatasourceMetadata {
    $type: 'yandex.cloud.mdb.greenplum.v1.CreatePXFDatasourceMetadata';
    clusterId: string;
    datasourceName: string;
}

export interface UpdatePXFDatasourceMetadata {
    $type: 'yandex.cloud.mdb.greenplum.v1.UpdatePXFDatasourceMetadata';
    clusterId: string;
    datasourceName: string;
}

export interface DeletePXFDatasourceMetadata {
    $type: 'yandex.cloud.mdb.greenplum.v1.DeletePXFDatasourceMetadata';
    clusterId: string;
    datasourceName: string;
}

export interface ListPXFDatasourcesRequest {
    $type: 'yandex.cloud.mdb.greenplum.v1.ListPXFDatasourcesRequest';
    clusterId: string;
}

export interface ListPXFDatasourcesResponse {
    $type: 'yandex.cloud.mdb.greenplum.v1.ListPXFDatasourcesResponse';
    datasources: PXFDatasource[];
}

export interface CreatePXFDatasourceRequest {
    $type: 'yandex.cloud.mdb.greenplum.v1.CreatePXFDatasourceRequest';
    clusterId: string;
    datasource?: PXFDatasource;
}

export interface UpdatePXFDatasourceRequest {
    $type: 'yandex.cloud.mdb.greenplum.v1.UpdatePXFDatasourceRequest';
    clusterId: string;
    updateMask?: FieldMask;
    datasource?: PXFDatasource;
}

export interface DeletePXFDatasourceRequest {
    $type: 'yandex.cloud.mdb.greenplum.v1.DeletePXFDatasourceRequest';
    clusterId: string;
    datasourceName: string;
}

const baseCreatePXFDatasourceMetadata: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.CreatePXFDatasourceMetadata',
    clusterId: '',
    datasourceName: '',
};

export const CreatePXFDatasourceMetadata = {
    $type: 'yandex.cloud.mdb.greenplum.v1.CreatePXFDatasourceMetadata' as const,

    encode(
        message: CreatePXFDatasourceMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.datasourceName !== '') {
            writer.uint32(18).string(message.datasourceName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePXFDatasourceMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreatePXFDatasourceMetadata } as CreatePXFDatasourceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.datasourceName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreatePXFDatasourceMetadata {
        const message = { ...baseCreatePXFDatasourceMetadata } as CreatePXFDatasourceMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.datasourceName =
            object.datasourceName !== undefined && object.datasourceName !== null
                ? String(object.datasourceName)
                : '';
        return message;
    },

    toJSON(message: CreatePXFDatasourceMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.datasourceName !== undefined && (obj.datasourceName = message.datasourceName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreatePXFDatasourceMetadata>, I>>(
        object: I,
    ): CreatePXFDatasourceMetadata {
        const message = { ...baseCreatePXFDatasourceMetadata } as CreatePXFDatasourceMetadata;
        message.clusterId = object.clusterId ?? '';
        message.datasourceName = object.datasourceName ?? '';
        return message;
    },
};

messageTypeRegistry.set(CreatePXFDatasourceMetadata.$type, CreatePXFDatasourceMetadata);

const baseUpdatePXFDatasourceMetadata: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.UpdatePXFDatasourceMetadata',
    clusterId: '',
    datasourceName: '',
};

export const UpdatePXFDatasourceMetadata = {
    $type: 'yandex.cloud.mdb.greenplum.v1.UpdatePXFDatasourceMetadata' as const,

    encode(
        message: UpdatePXFDatasourceMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.datasourceName !== '') {
            writer.uint32(18).string(message.datasourceName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePXFDatasourceMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdatePXFDatasourceMetadata } as UpdatePXFDatasourceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.datasourceName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdatePXFDatasourceMetadata {
        const message = { ...baseUpdatePXFDatasourceMetadata } as UpdatePXFDatasourceMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.datasourceName =
            object.datasourceName !== undefined && object.datasourceName !== null
                ? String(object.datasourceName)
                : '';
        return message;
    },

    toJSON(message: UpdatePXFDatasourceMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.datasourceName !== undefined && (obj.datasourceName = message.datasourceName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdatePXFDatasourceMetadata>, I>>(
        object: I,
    ): UpdatePXFDatasourceMetadata {
        const message = { ...baseUpdatePXFDatasourceMetadata } as UpdatePXFDatasourceMetadata;
        message.clusterId = object.clusterId ?? '';
        message.datasourceName = object.datasourceName ?? '';
        return message;
    },
};

messageTypeRegistry.set(UpdatePXFDatasourceMetadata.$type, UpdatePXFDatasourceMetadata);

const baseDeletePXFDatasourceMetadata: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.DeletePXFDatasourceMetadata',
    clusterId: '',
    datasourceName: '',
};

export const DeletePXFDatasourceMetadata = {
    $type: 'yandex.cloud.mdb.greenplum.v1.DeletePXFDatasourceMetadata' as const,

    encode(
        message: DeletePXFDatasourceMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.datasourceName !== '') {
            writer.uint32(18).string(message.datasourceName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeletePXFDatasourceMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeletePXFDatasourceMetadata } as DeletePXFDatasourceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.datasourceName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeletePXFDatasourceMetadata {
        const message = { ...baseDeletePXFDatasourceMetadata } as DeletePXFDatasourceMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.datasourceName =
            object.datasourceName !== undefined && object.datasourceName !== null
                ? String(object.datasourceName)
                : '';
        return message;
    },

    toJSON(message: DeletePXFDatasourceMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.datasourceName !== undefined && (obj.datasourceName = message.datasourceName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeletePXFDatasourceMetadata>, I>>(
        object: I,
    ): DeletePXFDatasourceMetadata {
        const message = { ...baseDeletePXFDatasourceMetadata } as DeletePXFDatasourceMetadata;
        message.clusterId = object.clusterId ?? '';
        message.datasourceName = object.datasourceName ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeletePXFDatasourceMetadata.$type, DeletePXFDatasourceMetadata);

const baseListPXFDatasourcesRequest: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.ListPXFDatasourcesRequest',
    clusterId: '',
};

export const ListPXFDatasourcesRequest = {
    $type: 'yandex.cloud.mdb.greenplum.v1.ListPXFDatasourcesRequest' as const,

    encode(
        message: ListPXFDatasourcesRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPXFDatasourcesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListPXFDatasourcesRequest } as ListPXFDatasourcesRequest;
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

    fromJSON(object: any): ListPXFDatasourcesRequest {
        const message = { ...baseListPXFDatasourcesRequest } as ListPXFDatasourcesRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        return message;
    },

    toJSON(message: ListPXFDatasourcesRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPXFDatasourcesRequest>, I>>(
        object: I,
    ): ListPXFDatasourcesRequest {
        const message = { ...baseListPXFDatasourcesRequest } as ListPXFDatasourcesRequest;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListPXFDatasourcesRequest.$type, ListPXFDatasourcesRequest);

const baseListPXFDatasourcesResponse: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.ListPXFDatasourcesResponse',
};

export const ListPXFDatasourcesResponse = {
    $type: 'yandex.cloud.mdb.greenplum.v1.ListPXFDatasourcesResponse' as const,

    encode(
        message: ListPXFDatasourcesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.datasources) {
            PXFDatasource.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPXFDatasourcesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListPXFDatasourcesResponse } as ListPXFDatasourcesResponse;
        message.datasources = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.datasources.push(PXFDatasource.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListPXFDatasourcesResponse {
        const message = { ...baseListPXFDatasourcesResponse } as ListPXFDatasourcesResponse;
        message.datasources = (object.datasources ?? []).map((e: any) => PXFDatasource.fromJSON(e));
        return message;
    },

    toJSON(message: ListPXFDatasourcesResponse): unknown {
        const obj: any = {};
        if (message.datasources) {
            obj.datasources = message.datasources.map((e) =>
                e ? PXFDatasource.toJSON(e) : undefined,
            );
        } else {
            obj.datasources = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPXFDatasourcesResponse>, I>>(
        object: I,
    ): ListPXFDatasourcesResponse {
        const message = { ...baseListPXFDatasourcesResponse } as ListPXFDatasourcesResponse;
        message.datasources = object.datasources?.map((e) => PXFDatasource.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(ListPXFDatasourcesResponse.$type, ListPXFDatasourcesResponse);

const baseCreatePXFDatasourceRequest: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.CreatePXFDatasourceRequest',
    clusterId: '',
};

export const CreatePXFDatasourceRequest = {
    $type: 'yandex.cloud.mdb.greenplum.v1.CreatePXFDatasourceRequest' as const,

    encode(
        message: CreatePXFDatasourceRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.datasource !== undefined) {
            PXFDatasource.encode(message.datasource, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePXFDatasourceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreatePXFDatasourceRequest } as CreatePXFDatasourceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.datasource = PXFDatasource.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreatePXFDatasourceRequest {
        const message = { ...baseCreatePXFDatasourceRequest } as CreatePXFDatasourceRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.datasource =
            object.datasource !== undefined && object.datasource !== null
                ? PXFDatasource.fromJSON(object.datasource)
                : undefined;
        return message;
    },

    toJSON(message: CreatePXFDatasourceRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.datasource !== undefined &&
            (obj.datasource = message.datasource
                ? PXFDatasource.toJSON(message.datasource)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreatePXFDatasourceRequest>, I>>(
        object: I,
    ): CreatePXFDatasourceRequest {
        const message = { ...baseCreatePXFDatasourceRequest } as CreatePXFDatasourceRequest;
        message.clusterId = object.clusterId ?? '';
        message.datasource =
            object.datasource !== undefined && object.datasource !== null
                ? PXFDatasource.fromPartial(object.datasource)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(CreatePXFDatasourceRequest.$type, CreatePXFDatasourceRequest);

const baseUpdatePXFDatasourceRequest: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.UpdatePXFDatasourceRequest',
    clusterId: '',
};

export const UpdatePXFDatasourceRequest = {
    $type: 'yandex.cloud.mdb.greenplum.v1.UpdatePXFDatasourceRequest' as const,

    encode(
        message: UpdatePXFDatasourceRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.datasource !== undefined) {
            PXFDatasource.encode(message.datasource, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePXFDatasourceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdatePXFDatasourceRequest } as UpdatePXFDatasourceRequest;
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
                    message.datasource = PXFDatasource.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdatePXFDatasourceRequest {
        const message = { ...baseUpdatePXFDatasourceRequest } as UpdatePXFDatasourceRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.datasource =
            object.datasource !== undefined && object.datasource !== null
                ? PXFDatasource.fromJSON(object.datasource)
                : undefined;
        return message;
    },

    toJSON(message: UpdatePXFDatasourceRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.datasource !== undefined &&
            (obj.datasource = message.datasource
                ? PXFDatasource.toJSON(message.datasource)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdatePXFDatasourceRequest>, I>>(
        object: I,
    ): UpdatePXFDatasourceRequest {
        const message = { ...baseUpdatePXFDatasourceRequest } as UpdatePXFDatasourceRequest;
        message.clusterId = object.clusterId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.datasource =
            object.datasource !== undefined && object.datasource !== null
                ? PXFDatasource.fromPartial(object.datasource)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(UpdatePXFDatasourceRequest.$type, UpdatePXFDatasourceRequest);

const baseDeletePXFDatasourceRequest: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.DeletePXFDatasourceRequest',
    clusterId: '',
    datasourceName: '',
};

export const DeletePXFDatasourceRequest = {
    $type: 'yandex.cloud.mdb.greenplum.v1.DeletePXFDatasourceRequest' as const,

    encode(
        message: DeletePXFDatasourceRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.datasourceName !== '') {
            writer.uint32(18).string(message.datasourceName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeletePXFDatasourceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeletePXFDatasourceRequest } as DeletePXFDatasourceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.datasourceName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeletePXFDatasourceRequest {
        const message = { ...baseDeletePXFDatasourceRequest } as DeletePXFDatasourceRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.datasourceName =
            object.datasourceName !== undefined && object.datasourceName !== null
                ? String(object.datasourceName)
                : '';
        return message;
    },

    toJSON(message: DeletePXFDatasourceRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.datasourceName !== undefined && (obj.datasourceName = message.datasourceName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeletePXFDatasourceRequest>, I>>(
        object: I,
    ): DeletePXFDatasourceRequest {
        const message = { ...baseDeletePXFDatasourceRequest } as DeletePXFDatasourceRequest;
        message.clusterId = object.clusterId ?? '';
        message.datasourceName = object.datasourceName ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeletePXFDatasourceRequest.$type, DeletePXFDatasourceRequest);

export const PXFDatasourceServiceService = {
    /** List all PXF datasources */
    list: {
        path: '/yandex.cloud.mdb.greenplum.v1.PXFDatasourceService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListPXFDatasourcesRequest) =>
            Buffer.from(ListPXFDatasourcesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListPXFDatasourcesRequest.decode(value),
        responseSerialize: (value: ListPXFDatasourcesResponse) =>
            Buffer.from(ListPXFDatasourcesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListPXFDatasourcesResponse.decode(value),
    },
    /** Creates PXF datasource */
    create: {
        path: '/yandex.cloud.mdb.greenplum.v1.PXFDatasourceService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreatePXFDatasourceRequest) =>
            Buffer.from(CreatePXFDatasourceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreatePXFDatasourceRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Update PXF datasource */
    update: {
        path: '/yandex.cloud.mdb.greenplum.v1.PXFDatasourceService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdatePXFDatasourceRequest) =>
            Buffer.from(UpdatePXFDatasourceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdatePXFDatasourceRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Delete PXF datasource */
    delete: {
        path: '/yandex.cloud.mdb.greenplum.v1.PXFDatasourceService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeletePXFDatasourceRequest) =>
            Buffer.from(DeletePXFDatasourceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeletePXFDatasourceRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface PXFDatasourceServiceServer extends UntypedServiceImplementation {
    /** List all PXF datasources */
    list: handleUnaryCall<ListPXFDatasourcesRequest, ListPXFDatasourcesResponse>;
    /** Creates PXF datasource */
    create: handleUnaryCall<CreatePXFDatasourceRequest, Operation>;
    /** Update PXF datasource */
    update: handleUnaryCall<UpdatePXFDatasourceRequest, Operation>;
    /** Delete PXF datasource */
    delete: handleUnaryCall<DeletePXFDatasourceRequest, Operation>;
}

export interface PXFDatasourceServiceClient extends Client {
    /** List all PXF datasources */
    list(
        request: ListPXFDatasourcesRequest,
        callback: (error: ServiceError | null, response: ListPXFDatasourcesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListPXFDatasourcesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListPXFDatasourcesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListPXFDatasourcesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListPXFDatasourcesResponse) => void,
    ): ClientUnaryCall;
    /** Creates PXF datasource */
    create(
        request: CreatePXFDatasourceRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreatePXFDatasourceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreatePXFDatasourceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Update PXF datasource */
    update(
        request: UpdatePXFDatasourceRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdatePXFDatasourceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdatePXFDatasourceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Delete PXF datasource */
    delete(
        request: DeletePXFDatasourceRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeletePXFDatasourceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeletePXFDatasourceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const PXFDatasourceServiceClient = makeGenericClientConstructor(
    PXFDatasourceServiceService,
    'yandex.cloud.mdb.greenplum.v1.PXFDatasourceService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): PXFDatasourceServiceClient;
    service: typeof PXFDatasourceServiceService;
};

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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
