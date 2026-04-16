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
import { Vrf } from '../../../../yandex/cloud/baremetal/v1alpha/vrf';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.baremetal.v1alpha';

export interface GetVrfRequest {
    /**
     * ID of the VRF to return.
     *
     * To get the VRF ID, use a [VrfService.List] request.
     */
    vrfId: string;
}

export interface ListVrfRequest {
    /**
     * ID of the folder to list VRFs in.
     *
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is greater than `page_size`,
     * the service returns a [ListConfigurationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value is 20.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListConfigurationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * By which column the listing should be ordered and in which direction,
     * format is "createdAt desc". "id asc" if omitted.
     * Supported fields: ["id", "name", "createdAt"].
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
     * Supported fields: ["id", "name"].
     * Both snake_case and camelCase are supported for fields.
     */
    filter: string;
}

export interface ListVrfResponse {
    /** List of VRF resources. */
    vrfs: Vrf[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * [ListVrfRequest.page_size], use `next_page_token` as the value
     * for the [ListVrfRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateVrfRequest {
    /**
     * ID of the folder to create a VRF in.
     *
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the VRF.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the VRF. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
}

export interface CreateVrfRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateVrfMetadata {
    /** ID of the VRF that is being created. */
    vrfId: string;
}

export interface UpdateVrfRequest {
    /**
     * ID of the VRF to update.
     *
     * To get the VRF ID, use a [VrfService.List] request.
     */
    vrfId: string;
    /** Field mask that specifies which attributes of the VRF should be updated. */
    updateMask?: FieldMask;
    /**
     * Name of the VRF.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the VRF. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * Existing set of labels is completely replaced by the provided set.
     */
    labels: { [key: string]: string };
}

export interface UpdateVrfRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateVrfMetadata {
    /** ID of the VRF that is being updated. */
    vrfId: string;
}

export interface DeleteVrfRequest {
    /**
     * ID of the VRF to delete.
     *
     * To get the VRF ID, use a [VrfService.List] request.
     */
    vrfId: string;
}

export interface DeleteVrfMetadata {
    /** ID of the VRF resource that is being deleted. */
    vrfId: string;
}

export interface ListVrfOperationsRequest {
    /** ID of the VRF resource to list operations for. */
    vrfId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is greater than `page_size`,
     * the service returns a [ListVrfOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value is 20.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListVrfOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListVrfOperationsResponse {
    /** List of operations for the specified VRF resource. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * [ListVrfOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListVrfOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetVrfRequest: object = { vrfId: '' };

export const GetVrfRequest = {
    encode(message: GetVrfRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.vrfId !== '') {
            writer.uint32(10).string(message.vrfId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetVrfRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetVrfRequest } as GetVrfRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vrfId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetVrfRequest {
        const message = { ...baseGetVrfRequest } as GetVrfRequest;
        message.vrfId =
            object.vrfId !== undefined && object.vrfId !== null ? String(object.vrfId) : '';
        return message;
    },

    toJSON(message: GetVrfRequest): unknown {
        const obj: any = {};
        message.vrfId !== undefined && (obj.vrfId = message.vrfId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetVrfRequest>, I>>(object: I): GetVrfRequest {
        const message = { ...baseGetVrfRequest } as GetVrfRequest;
        message.vrfId = object.vrfId ?? '';
        return message;
    },
};

const baseListVrfRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    orderBy: '',
    filter: '',
};

export const ListVrfRequest = {
    encode(message: ListVrfRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListVrfRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListVrfRequest } as ListVrfRequest;
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

    fromJSON(object: any): ListVrfRequest {
        const message = { ...baseListVrfRequest } as ListVrfRequest;
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

    toJSON(message: ListVrfRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListVrfRequest>, I>>(object: I): ListVrfRequest {
        const message = { ...baseListVrfRequest } as ListVrfRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.orderBy = object.orderBy ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListVrfResponse: object = { nextPageToken: '' };

export const ListVrfResponse = {
    encode(message: ListVrfResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.vrfs) {
            Vrf.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(802).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListVrfResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListVrfResponse } as ListVrfResponse;
        message.vrfs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vrfs.push(Vrf.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListVrfResponse {
        const message = { ...baseListVrfResponse } as ListVrfResponse;
        message.vrfs = (object.vrfs ?? []).map((e: any) => Vrf.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListVrfResponse): unknown {
        const obj: any = {};
        if (message.vrfs) {
            obj.vrfs = message.vrfs.map((e) => (e ? Vrf.toJSON(e) : undefined));
        } else {
            obj.vrfs = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListVrfResponse>, I>>(object: I): ListVrfResponse {
        const message = { ...baseListVrfResponse } as ListVrfResponse;
        message.vrfs = object.vrfs?.map((e) => Vrf.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateVrfRequest: object = { folderId: '', name: '', description: '' };

export const CreateVrfRequest = {
    encode(message: CreateVrfRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
            CreateVrfRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateVrfRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateVrfRequest } as CreateVrfRequest;
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
                case 200:
                    const entry200 = CreateVrfRequest_LabelsEntry.decode(reader, reader.uint32());
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

    fromJSON(object: any): CreateVrfRequest {
        const message = { ...baseCreateVrfRequest } as CreateVrfRequest;
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
        return message;
    },

    toJSON(message: CreateVrfRequest): unknown {
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
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateVrfRequest>, I>>(object: I): CreateVrfRequest {
        const message = { ...baseCreateVrfRequest } as CreateVrfRequest;
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
        return message;
    },
};

const baseCreateVrfRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateVrfRequest_LabelsEntry = {
    encode(
        message: CreateVrfRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateVrfRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateVrfRequest_LabelsEntry } as CreateVrfRequest_LabelsEntry;
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

    fromJSON(object: any): CreateVrfRequest_LabelsEntry {
        const message = { ...baseCreateVrfRequest_LabelsEntry } as CreateVrfRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateVrfRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateVrfRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateVrfRequest_LabelsEntry {
        const message = { ...baseCreateVrfRequest_LabelsEntry } as CreateVrfRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateVrfMetadata: object = { vrfId: '' };

export const CreateVrfMetadata = {
    encode(message: CreateVrfMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.vrfId !== '') {
            writer.uint32(10).string(message.vrfId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateVrfMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateVrfMetadata } as CreateVrfMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vrfId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateVrfMetadata {
        const message = { ...baseCreateVrfMetadata } as CreateVrfMetadata;
        message.vrfId =
            object.vrfId !== undefined && object.vrfId !== null ? String(object.vrfId) : '';
        return message;
    },

    toJSON(message: CreateVrfMetadata): unknown {
        const obj: any = {};
        message.vrfId !== undefined && (obj.vrfId = message.vrfId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateVrfMetadata>, I>>(object: I): CreateVrfMetadata {
        const message = { ...baseCreateVrfMetadata } as CreateVrfMetadata;
        message.vrfId = object.vrfId ?? '';
        return message;
    },
};

const baseUpdateVrfRequest: object = { vrfId: '', name: '', description: '' };

export const UpdateVrfRequest = {
    encode(message: UpdateVrfRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.vrfId !== '') {
            writer.uint32(10).string(message.vrfId);
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
            UpdateVrfRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateVrfRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateVrfRequest } as UpdateVrfRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vrfId = reader.string();
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
                case 200:
                    const entry200 = UpdateVrfRequest_LabelsEntry.decode(reader, reader.uint32());
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

    fromJSON(object: any): UpdateVrfRequest {
        const message = { ...baseUpdateVrfRequest } as UpdateVrfRequest;
        message.vrfId =
            object.vrfId !== undefined && object.vrfId !== null ? String(object.vrfId) : '';
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
        return message;
    },

    toJSON(message: UpdateVrfRequest): unknown {
        const obj: any = {};
        message.vrfId !== undefined && (obj.vrfId = message.vrfId);
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
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateVrfRequest>, I>>(object: I): UpdateVrfRequest {
        const message = { ...baseUpdateVrfRequest } as UpdateVrfRequest;
        message.vrfId = object.vrfId ?? '';
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
        return message;
    },
};

const baseUpdateVrfRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateVrfRequest_LabelsEntry = {
    encode(
        message: UpdateVrfRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateVrfRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateVrfRequest_LabelsEntry } as UpdateVrfRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateVrfRequest_LabelsEntry {
        const message = { ...baseUpdateVrfRequest_LabelsEntry } as UpdateVrfRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateVrfRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateVrfRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateVrfRequest_LabelsEntry {
        const message = { ...baseUpdateVrfRequest_LabelsEntry } as UpdateVrfRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateVrfMetadata: object = { vrfId: '' };

export const UpdateVrfMetadata = {
    encode(message: UpdateVrfMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.vrfId !== '') {
            writer.uint32(10).string(message.vrfId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateVrfMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateVrfMetadata } as UpdateVrfMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vrfId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateVrfMetadata {
        const message = { ...baseUpdateVrfMetadata } as UpdateVrfMetadata;
        message.vrfId =
            object.vrfId !== undefined && object.vrfId !== null ? String(object.vrfId) : '';
        return message;
    },

    toJSON(message: UpdateVrfMetadata): unknown {
        const obj: any = {};
        message.vrfId !== undefined && (obj.vrfId = message.vrfId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateVrfMetadata>, I>>(object: I): UpdateVrfMetadata {
        const message = { ...baseUpdateVrfMetadata } as UpdateVrfMetadata;
        message.vrfId = object.vrfId ?? '';
        return message;
    },
};

const baseDeleteVrfRequest: object = { vrfId: '' };

export const DeleteVrfRequest = {
    encode(message: DeleteVrfRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.vrfId !== '') {
            writer.uint32(10).string(message.vrfId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteVrfRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteVrfRequest } as DeleteVrfRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vrfId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteVrfRequest {
        const message = { ...baseDeleteVrfRequest } as DeleteVrfRequest;
        message.vrfId =
            object.vrfId !== undefined && object.vrfId !== null ? String(object.vrfId) : '';
        return message;
    },

    toJSON(message: DeleteVrfRequest): unknown {
        const obj: any = {};
        message.vrfId !== undefined && (obj.vrfId = message.vrfId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteVrfRequest>, I>>(object: I): DeleteVrfRequest {
        const message = { ...baseDeleteVrfRequest } as DeleteVrfRequest;
        message.vrfId = object.vrfId ?? '';
        return message;
    },
};

const baseDeleteVrfMetadata: object = { vrfId: '' };

export const DeleteVrfMetadata = {
    encode(message: DeleteVrfMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.vrfId !== '') {
            writer.uint32(10).string(message.vrfId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteVrfMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteVrfMetadata } as DeleteVrfMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vrfId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteVrfMetadata {
        const message = { ...baseDeleteVrfMetadata } as DeleteVrfMetadata;
        message.vrfId =
            object.vrfId !== undefined && object.vrfId !== null ? String(object.vrfId) : '';
        return message;
    },

    toJSON(message: DeleteVrfMetadata): unknown {
        const obj: any = {};
        message.vrfId !== undefined && (obj.vrfId = message.vrfId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteVrfMetadata>, I>>(object: I): DeleteVrfMetadata {
        const message = { ...baseDeleteVrfMetadata } as DeleteVrfMetadata;
        message.vrfId = object.vrfId ?? '';
        return message;
    },
};

const baseListVrfOperationsRequest: object = { vrfId: '', pageSize: 0, pageToken: '' };

export const ListVrfOperationsRequest = {
    encode(
        message: ListVrfOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.vrfId !== '') {
            writer.uint32(10).string(message.vrfId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(800).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(810).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListVrfOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListVrfOperationsRequest } as ListVrfOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vrfId = reader.string();
                    break;
                case 100:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 101:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListVrfOperationsRequest {
        const message = { ...baseListVrfOperationsRequest } as ListVrfOperationsRequest;
        message.vrfId =
            object.vrfId !== undefined && object.vrfId !== null ? String(object.vrfId) : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListVrfOperationsRequest): unknown {
        const obj: any = {};
        message.vrfId !== undefined && (obj.vrfId = message.vrfId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListVrfOperationsRequest>, I>>(
        object: I,
    ): ListVrfOperationsRequest {
        const message = { ...baseListVrfOperationsRequest } as ListVrfOperationsRequest;
        message.vrfId = object.vrfId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListVrfOperationsResponse: object = { nextPageToken: '' };

export const ListVrfOperationsResponse = {
    encode(
        message: ListVrfOperationsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.operations) {
            Operation.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(802).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListVrfOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListVrfOperationsResponse } as ListVrfOperationsResponse;
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(Operation.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListVrfOperationsResponse {
        const message = { ...baseListVrfOperationsResponse } as ListVrfOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListVrfOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListVrfOperationsResponse>, I>>(
        object: I,
    ): ListVrfOperationsResponse {
        const message = { ...baseListVrfOperationsResponse } as ListVrfOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** A set of methods for managing VRF resources. */
export const VrfServiceService = {
    /**
     * Returns the specific VRF resource.
     *
     * To get the list of available VRFs, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.baremetal.v1alpha.VrfService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetVrfRequest) =>
            Buffer.from(GetVrfRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetVrfRequest.decode(value),
        responseSerialize: (value: Vrf) => Buffer.from(Vrf.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Vrf.decode(value),
    },
    /** Retrieves the list of VRF resources in the specified folder. */
    list: {
        path: '/yandex.cloud.baremetal.v1alpha.VrfService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListVrfRequest) =>
            Buffer.from(ListVrfRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListVrfRequest.decode(value),
        responseSerialize: (value: ListVrfResponse) =>
            Buffer.from(ListVrfResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListVrfResponse.decode(value),
    },
    /** Creates a VRF in the specified folder. */
    create: {
        path: '/yandex.cloud.baremetal.v1alpha.VrfService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateVrfRequest) =>
            Buffer.from(CreateVrfRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateVrfRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified VRF resource. */
    update: {
        path: '/yandex.cloud.baremetal.v1alpha.VrfService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateVrfRequest) =>
            Buffer.from(UpdateVrfRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateVrfRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Deletes the specified VRF resource.
     *
     * Deleting a VRF removes its data permanently and is irreversible.
     */
    delete: {
        path: '/yandex.cloud.baremetal.v1alpha.VrfService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteVrfRequest) =>
            Buffer.from(DeleteVrfRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteVrfRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified VRF. */
    listOperations: {
        path: '/yandex.cloud.baremetal.v1alpha.VrfService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListVrfOperationsRequest) =>
            Buffer.from(ListVrfOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListVrfOperationsRequest.decode(value),
        responseSerialize: (value: ListVrfOperationsResponse) =>
            Buffer.from(ListVrfOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListVrfOperationsResponse.decode(value),
    },
} as const;

export interface VrfServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specific VRF resource.
     *
     * To get the list of available VRFs, make a [List] request.
     */
    get: handleUnaryCall<GetVrfRequest, Vrf>;
    /** Retrieves the list of VRF resources in the specified folder. */
    list: handleUnaryCall<ListVrfRequest, ListVrfResponse>;
    /** Creates a VRF in the specified folder. */
    create: handleUnaryCall<CreateVrfRequest, Operation>;
    /** Updates the specified VRF resource. */
    update: handleUnaryCall<UpdateVrfRequest, Operation>;
    /**
     * Deletes the specified VRF resource.
     *
     * Deleting a VRF removes its data permanently and is irreversible.
     */
    delete: handleUnaryCall<DeleteVrfRequest, Operation>;
    /** Lists operations for the specified VRF. */
    listOperations: handleUnaryCall<ListVrfOperationsRequest, ListVrfOperationsResponse>;
}

export interface VrfServiceClient extends Client {
    /**
     * Returns the specific VRF resource.
     *
     * To get the list of available VRFs, make a [List] request.
     */
    get(
        request: GetVrfRequest,
        callback: (error: ServiceError | null, response: Vrf) => void,
    ): ClientUnaryCall;
    get(
        request: GetVrfRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Vrf) => void,
    ): ClientUnaryCall;
    get(
        request: GetVrfRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Vrf) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of VRF resources in the specified folder. */
    list(
        request: ListVrfRequest,
        callback: (error: ServiceError | null, response: ListVrfResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListVrfRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListVrfResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListVrfRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListVrfResponse) => void,
    ): ClientUnaryCall;
    /** Creates a VRF in the specified folder. */
    create(
        request: CreateVrfRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateVrfRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateVrfRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified VRF resource. */
    update(
        request: UpdateVrfRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateVrfRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateVrfRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Deletes the specified VRF resource.
     *
     * Deleting a VRF removes its data permanently and is irreversible.
     */
    delete(
        request: DeleteVrfRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteVrfRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteVrfRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists operations for the specified VRF. */
    listOperations(
        request: ListVrfOperationsRequest,
        callback: (error: ServiceError | null, response: ListVrfOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListVrfOperationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListVrfOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListVrfOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListVrfOperationsResponse) => void,
    ): ClientUnaryCall;
}

export const VrfServiceClient = makeGenericClientConstructor(
    VrfServiceService,
    'yandex.cloud.baremetal.v1alpha.VrfService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): VrfServiceClient;
    service: typeof VrfServiceService;
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
