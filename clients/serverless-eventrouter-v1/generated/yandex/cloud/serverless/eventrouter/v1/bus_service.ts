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
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Bus } from '../../../../../yandex/cloud/serverless/eventrouter/v1/bus';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../../../yandex/cloud/access/access';

export const protobufPackage = 'yandex.cloud.serverless.eventrouter.v1';

export interface GetBusRequest {
    $type: 'yandex.cloud.serverless.eventrouter.v1.GetBusRequest';
    /** ID of the bus to get. */
    busId: string;
}

export interface ListBusesRequest {
    $type: 'yandex.cloud.serverless.eventrouter.v1.ListBusesRequest';
    /** ID of the folder to list buses in. */
    folderId: string;
    /** Maximum number of buses to return. */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListBusesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * Supported fields for filter:
     *   name
     *   created_at
     */
    filter: string;
}

export interface ListBusesResponse {
    $type: 'yandex.cloud.serverless.eventrouter.v1.ListBusesResponse';
    /** List of buses. */
    buses: Bus[];
    /** Token for getting the next page of the list of buses. */
    nextPageToken: string;
}

export interface CreateBusRequest {
    $type: 'yandex.cloud.serverless.eventrouter.v1.CreateBusRequest';
    /** ID of the folder to create a bus in. */
    folderId: string;
    /** Name of the bus. */
    name: string;
    /** Description of the bus. */
    description: string;
    /** Labels for the bus. */
    labels: { [key: string]: string };
    /** Flag that disallow deletion of the bus. */
    deletionProtection: boolean;
}

export interface CreateBusRequest_LabelsEntry {
    $type: 'yandex.cloud.serverless.eventrouter.v1.CreateBusRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface CreateBusMetadata {
    $type: 'yandex.cloud.serverless.eventrouter.v1.CreateBusMetadata';
    /** ID of the bus that is being created. */
    busId: string;
    /** ID of the folder that the bus is being created in. */
    folderId: string;
}

export interface UpdateBusRequest {
    $type: 'yandex.cloud.serverless.eventrouter.v1.UpdateBusRequest';
    /** ID of the bus to update. */
    busId: string;
    /** Field mask that specifies which fields of the bus are going to be updated. */
    updateMask?: FieldMask;
    /** New name of the bus. */
    name: string;
    /** New description of the bus. */
    description: string;
    /** New labels of the bus. */
    labels: { [key: string]: string };
    /** New flag that disallow deletion of the bus. */
    deletionProtection: boolean;
}

export interface UpdateBusRequest_LabelsEntry {
    $type: 'yandex.cloud.serverless.eventrouter.v1.UpdateBusRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface UpdateBusMetadata {
    $type: 'yandex.cloud.serverless.eventrouter.v1.UpdateBusMetadata';
    /** ID of the bus that is being updated. */
    busId: string;
}

export interface DeleteBusRequest {
    $type: 'yandex.cloud.serverless.eventrouter.v1.DeleteBusRequest';
    /** ID of the bus to delete. */
    busId: string;
}

export interface DeleteBusMetadata {
    $type: 'yandex.cloud.serverless.eventrouter.v1.DeleteBusMetadata';
    /** ID of the bus that is being deleted. */
    busId: string;
}

export interface ListBusOperationsRequest {
    $type: 'yandex.cloud.serverless.eventrouter.v1.ListBusOperationsRequest';
    /** ID of the bus to list operations for. */
    busId: string;
    /** Maximum number of operations to return. */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListBusesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * Supported attributes for filter:
     *   description
     *   created_at
     *   modified_at
     *   created_by
     *   done
     */
    filter: string;
}

export interface ListBusOperationsResponse {
    $type: 'yandex.cloud.serverless.eventrouter.v1.ListBusOperationsResponse';
    /** List of operations for the specified bus. */
    operations: Operation[];
    /** Token for getting the next page of the list of operations. */
    nextPageToken: string;
}

const baseGetBusRequest: object = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.GetBusRequest',
    busId: '',
};

export const GetBusRequest = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.GetBusRequest' as const,

    encode(message: GetBusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.busId !== '') {
            writer.uint32(10).string(message.busId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetBusRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetBusRequest } as GetBusRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.busId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetBusRequest {
        const message = { ...baseGetBusRequest } as GetBusRequest;
        message.busId =
            object.busId !== undefined && object.busId !== null ? String(object.busId) : '';
        return message;
    },

    toJSON(message: GetBusRequest): unknown {
        const obj: any = {};
        message.busId !== undefined && (obj.busId = message.busId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetBusRequest>, I>>(object: I): GetBusRequest {
        const message = { ...baseGetBusRequest } as GetBusRequest;
        message.busId = object.busId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetBusRequest.$type, GetBusRequest);

const baseListBusesRequest: object = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.ListBusesRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListBusesRequest = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.ListBusesRequest' as const,

    encode(message: ListBusesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListBusesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListBusesRequest } as ListBusesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListBusesRequest {
        const message = { ...baseListBusesRequest } as ListBusesRequest;
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
        return message;
    },

    toJSON(message: ListBusesRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListBusesRequest>, I>>(object: I): ListBusesRequest {
        const message = { ...baseListBusesRequest } as ListBusesRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListBusesRequest.$type, ListBusesRequest);

const baseListBusesResponse: object = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.ListBusesResponse',
    nextPageToken: '',
};

export const ListBusesResponse = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.ListBusesResponse' as const,

    encode(message: ListBusesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.buses) {
            Bus.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListBusesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListBusesResponse } as ListBusesResponse;
        message.buses = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.buses.push(Bus.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListBusesResponse {
        const message = { ...baseListBusesResponse } as ListBusesResponse;
        message.buses = (object.buses ?? []).map((e: any) => Bus.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListBusesResponse): unknown {
        const obj: any = {};
        if (message.buses) {
            obj.buses = message.buses.map((e) => (e ? Bus.toJSON(e) : undefined));
        } else {
            obj.buses = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListBusesResponse>, I>>(object: I): ListBusesResponse {
        const message = { ...baseListBusesResponse } as ListBusesResponse;
        message.buses = object.buses?.map((e) => Bus.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListBusesResponse.$type, ListBusesResponse);

const baseCreateBusRequest: object = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.CreateBusRequest',
    folderId: '',
    name: '',
    description: '',
    deletionProtection: false,
};

export const CreateBusRequest = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.CreateBusRequest' as const,

    encode(message: CreateBusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateBusRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.serverless.eventrouter.v1.CreateBusRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        if (message.deletionProtection === true) {
            writer.uint32(40).bool(message.deletionProtection);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateBusRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateBusRequest } as CreateBusRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = CreateBusRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.deletionProtection = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateBusRequest {
        const message = { ...baseCreateBusRequest } as CreateBusRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
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
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        return message;
    },

    toJSON(message: CreateBusRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateBusRequest>, I>>(object: I): CreateBusRequest {
        const message = { ...baseCreateBusRequest } as CreateBusRequest;
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
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
        message.deletionProtection = object.deletionProtection ?? false;
        return message;
    },
};

messageTypeRegistry.set(CreateBusRequest.$type, CreateBusRequest);

const baseCreateBusRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.CreateBusRequest.LabelsEntry',
    key: '',
    value: '',
};

export const CreateBusRequest_LabelsEntry = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.CreateBusRequest.LabelsEntry' as const,

    encode(
        message: CreateBusRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateBusRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateBusRequest_LabelsEntry } as CreateBusRequest_LabelsEntry;
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

    fromJSON(object: any): CreateBusRequest_LabelsEntry {
        const message = { ...baseCreateBusRequest_LabelsEntry } as CreateBusRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateBusRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateBusRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateBusRequest_LabelsEntry {
        const message = { ...baseCreateBusRequest_LabelsEntry } as CreateBusRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(CreateBusRequest_LabelsEntry.$type, CreateBusRequest_LabelsEntry);

const baseCreateBusMetadata: object = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.CreateBusMetadata',
    busId: '',
    folderId: '',
};

export const CreateBusMetadata = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.CreateBusMetadata' as const,

    encode(message: CreateBusMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.busId !== '') {
            writer.uint32(10).string(message.busId);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateBusMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateBusMetadata } as CreateBusMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.busId = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateBusMetadata {
        const message = { ...baseCreateBusMetadata } as CreateBusMetadata;
        message.busId =
            object.busId !== undefined && object.busId !== null ? String(object.busId) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        return message;
    },

    toJSON(message: CreateBusMetadata): unknown {
        const obj: any = {};
        message.busId !== undefined && (obj.busId = message.busId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateBusMetadata>, I>>(object: I): CreateBusMetadata {
        const message = { ...baseCreateBusMetadata } as CreateBusMetadata;
        message.busId = object.busId ?? '';
        message.folderId = object.folderId ?? '';
        return message;
    },
};

messageTypeRegistry.set(CreateBusMetadata.$type, CreateBusMetadata);

const baseUpdateBusRequest: object = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.UpdateBusRequest',
    busId: '',
    name: '',
    description: '',
    deletionProtection: false,
};

export const UpdateBusRequest = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.UpdateBusRequest' as const,

    encode(message: UpdateBusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.busId !== '') {
            writer.uint32(10).string(message.busId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateBusRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.serverless.eventrouter.v1.UpdateBusRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        if (message.deletionProtection === true) {
            writer.uint32(48).bool(message.deletionProtection);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateBusRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateBusRequest } as UpdateBusRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.busId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = UpdateBusRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.deletionProtection = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateBusRequest {
        const message = { ...baseUpdateBusRequest } as UpdateBusRequest;
        message.busId =
            object.busId !== undefined && object.busId !== null ? String(object.busId) : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
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
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        return message;
    },

    toJSON(message: UpdateBusRequest): unknown {
        const obj: any = {};
        message.busId !== undefined && (obj.busId = message.busId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateBusRequest>, I>>(object: I): UpdateBusRequest {
        const message = { ...baseUpdateBusRequest } as UpdateBusRequest;
        message.busId = object.busId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = object.name ?? '';
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
        message.deletionProtection = object.deletionProtection ?? false;
        return message;
    },
};

messageTypeRegistry.set(UpdateBusRequest.$type, UpdateBusRequest);

const baseUpdateBusRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.UpdateBusRequest.LabelsEntry',
    key: '',
    value: '',
};

export const UpdateBusRequest_LabelsEntry = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.UpdateBusRequest.LabelsEntry' as const,

    encode(
        message: UpdateBusRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateBusRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateBusRequest_LabelsEntry } as UpdateBusRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateBusRequest_LabelsEntry {
        const message = { ...baseUpdateBusRequest_LabelsEntry } as UpdateBusRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateBusRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateBusRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateBusRequest_LabelsEntry {
        const message = { ...baseUpdateBusRequest_LabelsEntry } as UpdateBusRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(UpdateBusRequest_LabelsEntry.$type, UpdateBusRequest_LabelsEntry);

const baseUpdateBusMetadata: object = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.UpdateBusMetadata',
    busId: '',
};

export const UpdateBusMetadata = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.UpdateBusMetadata' as const,

    encode(message: UpdateBusMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.busId !== '') {
            writer.uint32(10).string(message.busId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateBusMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateBusMetadata } as UpdateBusMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.busId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateBusMetadata {
        const message = { ...baseUpdateBusMetadata } as UpdateBusMetadata;
        message.busId =
            object.busId !== undefined && object.busId !== null ? String(object.busId) : '';
        return message;
    },

    toJSON(message: UpdateBusMetadata): unknown {
        const obj: any = {};
        message.busId !== undefined && (obj.busId = message.busId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateBusMetadata>, I>>(object: I): UpdateBusMetadata {
        const message = { ...baseUpdateBusMetadata } as UpdateBusMetadata;
        message.busId = object.busId ?? '';
        return message;
    },
};

messageTypeRegistry.set(UpdateBusMetadata.$type, UpdateBusMetadata);

const baseDeleteBusRequest: object = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.DeleteBusRequest',
    busId: '',
};

export const DeleteBusRequest = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.DeleteBusRequest' as const,

    encode(message: DeleteBusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.busId !== '') {
            writer.uint32(10).string(message.busId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBusRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteBusRequest } as DeleteBusRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.busId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteBusRequest {
        const message = { ...baseDeleteBusRequest } as DeleteBusRequest;
        message.busId =
            object.busId !== undefined && object.busId !== null ? String(object.busId) : '';
        return message;
    },

    toJSON(message: DeleteBusRequest): unknown {
        const obj: any = {};
        message.busId !== undefined && (obj.busId = message.busId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteBusRequest>, I>>(object: I): DeleteBusRequest {
        const message = { ...baseDeleteBusRequest } as DeleteBusRequest;
        message.busId = object.busId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteBusRequest.$type, DeleteBusRequest);

const baseDeleteBusMetadata: object = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.DeleteBusMetadata',
    busId: '',
};

export const DeleteBusMetadata = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.DeleteBusMetadata' as const,

    encode(message: DeleteBusMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.busId !== '') {
            writer.uint32(10).string(message.busId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBusMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteBusMetadata } as DeleteBusMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.busId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteBusMetadata {
        const message = { ...baseDeleteBusMetadata } as DeleteBusMetadata;
        message.busId =
            object.busId !== undefined && object.busId !== null ? String(object.busId) : '';
        return message;
    },

    toJSON(message: DeleteBusMetadata): unknown {
        const obj: any = {};
        message.busId !== undefined && (obj.busId = message.busId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteBusMetadata>, I>>(object: I): DeleteBusMetadata {
        const message = { ...baseDeleteBusMetadata } as DeleteBusMetadata;
        message.busId = object.busId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteBusMetadata.$type, DeleteBusMetadata);

const baseListBusOperationsRequest: object = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.ListBusOperationsRequest',
    busId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListBusOperationsRequest = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.ListBusOperationsRequest' as const,

    encode(
        message: ListBusOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.busId !== '') {
            writer.uint32(10).string(message.busId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListBusOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListBusOperationsRequest } as ListBusOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.busId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListBusOperationsRequest {
        const message = { ...baseListBusOperationsRequest } as ListBusOperationsRequest;
        message.busId =
            object.busId !== undefined && object.busId !== null ? String(object.busId) : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        return message;
    },

    toJSON(message: ListBusOperationsRequest): unknown {
        const obj: any = {};
        message.busId !== undefined && (obj.busId = message.busId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListBusOperationsRequest>, I>>(
        object: I,
    ): ListBusOperationsRequest {
        const message = { ...baseListBusOperationsRequest } as ListBusOperationsRequest;
        message.busId = object.busId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListBusOperationsRequest.$type, ListBusOperationsRequest);

const baseListBusOperationsResponse: object = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.ListBusOperationsResponse',
    nextPageToken: '',
};

export const ListBusOperationsResponse = {
    $type: 'yandex.cloud.serverless.eventrouter.v1.ListBusOperationsResponse' as const,

    encode(
        message: ListBusOperationsResponse,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListBusOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListBusOperationsResponse } as ListBusOperationsResponse;
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

    fromJSON(object: any): ListBusOperationsResponse {
        const message = { ...baseListBusOperationsResponse } as ListBusOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListBusOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListBusOperationsResponse>, I>>(
        object: I,
    ): ListBusOperationsResponse {
        const message = { ...baseListBusOperationsResponse } as ListBusOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListBusOperationsResponse.$type, ListBusOperationsResponse);

/** A set of methods for managing buses for serverless eventrouter. */
export const BusServiceService = {
    /**
     * Returns the specified bus.
     * To get the list of all available buses, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.serverless.eventrouter.v1.BusService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetBusRequest) =>
            Buffer.from(GetBusRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetBusRequest.decode(value),
        responseSerialize: (value: Bus) => Buffer.from(Bus.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Bus.decode(value),
    },
    /** Retrieves the list of buses in the specified folder. */
    list: {
        path: '/yandex.cloud.serverless.eventrouter.v1.BusService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListBusesRequest) =>
            Buffer.from(ListBusesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListBusesRequest.decode(value),
        responseSerialize: (value: ListBusesResponse) =>
            Buffer.from(ListBusesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListBusesResponse.decode(value),
    },
    /** Creates a bus in the specified folder. */
    create: {
        path: '/yandex.cloud.serverless.eventrouter.v1.BusService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateBusRequest) =>
            Buffer.from(CreateBusRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateBusRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified bus. */
    update: {
        path: '/yandex.cloud.serverless.eventrouter.v1.BusService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateBusRequest) =>
            Buffer.from(UpdateBusRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateBusRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified bus. */
    delete: {
        path: '/yandex.cloud.serverless.eventrouter.v1.BusService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteBusRequest) =>
            Buffer.from(DeleteBusRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteBusRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified bus. */
    listOperations: {
        path: '/yandex.cloud.serverless.eventrouter.v1.BusService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListBusOperationsRequest) =>
            Buffer.from(ListBusOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListBusOperationsRequest.decode(value),
        responseSerialize: (value: ListBusOperationsResponse) =>
            Buffer.from(ListBusOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListBusOperationsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified bus. */
    listAccessBindings: {
        path: '/yandex.cloud.serverless.eventrouter.v1.BusService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the bus. */
    setAccessBindings: {
        path: '/yandex.cloud.serverless.eventrouter.v1.BusService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetAccessBindingsRequest) =>
            Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates access bindings for the specified bus. */
    updateAccessBindings: {
        path: '/yandex.cloud.serverless.eventrouter.v1.BusService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface BusServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified bus.
     * To get the list of all available buses, make a [List] request.
     */
    get: handleUnaryCall<GetBusRequest, Bus>;
    /** Retrieves the list of buses in the specified folder. */
    list: handleUnaryCall<ListBusesRequest, ListBusesResponse>;
    /** Creates a bus in the specified folder. */
    create: handleUnaryCall<CreateBusRequest, Operation>;
    /** Updates the specified bus. */
    update: handleUnaryCall<UpdateBusRequest, Operation>;
    /** Deletes the specified bus. */
    delete: handleUnaryCall<DeleteBusRequest, Operation>;
    /** Lists operations for the specified bus. */
    listOperations: handleUnaryCall<ListBusOperationsRequest, ListBusOperationsResponse>;
    /** Lists existing access bindings for the specified bus. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the bus. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified bus. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface BusServiceClient extends Client {
    /**
     * Returns the specified bus.
     * To get the list of all available buses, make a [List] request.
     */
    get(
        request: GetBusRequest,
        callback: (error: ServiceError | null, response: Bus) => void,
    ): ClientUnaryCall;
    get(
        request: GetBusRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Bus) => void,
    ): ClientUnaryCall;
    get(
        request: GetBusRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Bus) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of buses in the specified folder. */
    list(
        request: ListBusesRequest,
        callback: (error: ServiceError | null, response: ListBusesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListBusesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListBusesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListBusesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListBusesResponse) => void,
    ): ClientUnaryCall;
    /** Creates a bus in the specified folder. */
    create(
        request: CreateBusRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateBusRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateBusRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified bus. */
    update(
        request: UpdateBusRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateBusRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateBusRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified bus. */
    delete(
        request: DeleteBusRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteBusRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteBusRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists operations for the specified bus. */
    listOperations(
        request: ListBusOperationsRequest,
        callback: (error: ServiceError | null, response: ListBusOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListBusOperationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListBusOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListBusOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListBusOperationsResponse) => void,
    ): ClientUnaryCall;
    /** Lists existing access bindings for the specified bus. */
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
    /** Sets access bindings for the bus. */
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
    /** Updates access bindings for the specified bus. */
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

export const BusServiceClient = makeGenericClientConstructor(
    BusServiceService,
    'yandex.cloud.serverless.eventrouter.v1.BusService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): BusServiceClient;
    service: typeof BusServiceService;
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
