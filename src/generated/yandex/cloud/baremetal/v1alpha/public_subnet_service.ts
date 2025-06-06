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
import {
    PublicSubnetType,
    PublicSubnet,
    publicSubnetTypeFromJSON,
    publicSubnetTypeToJSON,
} from '../../../../yandex/cloud/baremetal/v1alpha/public_subnet';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.baremetal.v1alpha';

export interface GetPublicSubnetRequest {
    /**
     * ID of the PublicSubnet resource to return.
     *
     * To get the public subnet ID use a [PublicSubnetService.List] request.
     */
    publicSubnetId: string;
}

export interface ListPublicSubnetRequest {
    /**
     * ID of the folder to list public subnets in.
     *
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is greater than `page_size`,
     * the service returns a [ListPublicSubnetResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value is 20.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListPublicSubnetResponse.next_page_token] returned by a previous list request.
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
     * Supported fields: ["id", "name", "zoneId", "hardwarePoolId"].
     * Both snake_case and camelCase are supported for fields.
     */
    filter: string;
}

export interface ListPublicSubnetResponse {
    /** List of PublicSubnet resources. */
    publicSubnets: PublicSubnet[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * [ListPublicSubnetRequest.page_size], use `next_page_token` as the value
     * for the [ListPublicSubnetRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreatePublicSubnetRequest {
    /**
     * ID of the folder to create a public subnet in.
     *
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the public subnet.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the public subnet. */
    description: string;
    /**
     * IDs of the hardware pool that the public subnet belongs to.
     *
     * To get a list of available hardware pools, use the [HardwarePoolService.List] request.
     */
    hardwarePoolIds: string[];
    /** Prefix length of the public subnet CIDR block. */
    prefixLength: number;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
}

export interface CreatePublicSubnetRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreatePublicSubnetMetadata {
    /** ID of the public subnet that is being created. */
    publicSubnetId: string;
}

export interface UpdatePublicSubnetRequest {
    /**
     * ID of the PublicSubnet resource to update.
     *
     * To get the public subnet ID, use a [PublicSubnetService.List] request.
     */
    publicSubnetId: string;
    /** Field mask that specifies which fields of the PublicSubnet resource are going to be updated. */
    updateMask?: FieldMask;
    /**
     * Name of the public subnet.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the public subnet. */
    description: string;
    /**
     * IDs of the hardware pool that the public subnet belongs to.
     *
     * To get a list of available hardware pools, use the [HardwarePoolService.List] request.
     */
    hardwarePoolIds: string[];
    type: PublicSubnetType;
    /**
     * Resource labels as `key:value` pairs.
     *
     * Existing set of `labels` is completely replaced by the provided set.
     */
    labels: { [key: string]: string };
}

export interface UpdatePublicSubnetRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdatePublicSubnetMetadata {
    /** ID of the PublicSubnet resource that is being updated. */
    publicSubnetId: string;
}

export interface DeletePublicSubnetRequest {
    /**
     * ID of the public subnet to delete.
     *
     * To get the public subnet ID, use a [PublicSubnetService.List] request.
     */
    publicSubnetId: string;
}

export interface DeletePublicSubnetMetadata {
    /** ID of the PublicSubnet resource that is being deleted. */
    publicSubnetId: string;
}

export interface ListPublicSubnetOperationsRequest {
    /** ID of the PublicSubnet resource to list operations for. */
    publicSubnetId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is greater than `page_size`,
     * the service returns a [ListPublicSubnetResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value is 20.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListPublicSubnetOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListPublicSubnetOperationsResponse {
    /** List of operations for the specified PublicSubnet resource. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * [ListPublicSubnetOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListPublicSubnetOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetPublicSubnetRequest: object = { publicSubnetId: '' };

export const GetPublicSubnetRequest = {
    encode(message: GetPublicSubnetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.publicSubnetId !== '') {
            writer.uint32(10).string(message.publicSubnetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicSubnetRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetPublicSubnetRequest } as GetPublicSubnetRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicSubnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetPublicSubnetRequest {
        const message = { ...baseGetPublicSubnetRequest } as GetPublicSubnetRequest;
        message.publicSubnetId =
            object.publicSubnetId !== undefined && object.publicSubnetId !== null
                ? String(object.publicSubnetId)
                : '';
        return message;
    },

    toJSON(message: GetPublicSubnetRequest): unknown {
        const obj: any = {};
        message.publicSubnetId !== undefined && (obj.publicSubnetId = message.publicSubnetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetPublicSubnetRequest>, I>>(
        object: I,
    ): GetPublicSubnetRequest {
        const message = { ...baseGetPublicSubnetRequest } as GetPublicSubnetRequest;
        message.publicSubnetId = object.publicSubnetId ?? '';
        return message;
    },
};

const baseListPublicSubnetRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    orderBy: '',
    filter: '',
};

export const ListPublicSubnetRequest = {
    encode(message: ListPublicSubnetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPublicSubnetRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListPublicSubnetRequest } as ListPublicSubnetRequest;
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

    fromJSON(object: any): ListPublicSubnetRequest {
        const message = { ...baseListPublicSubnetRequest } as ListPublicSubnetRequest;
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

    toJSON(message: ListPublicSubnetRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPublicSubnetRequest>, I>>(
        object: I,
    ): ListPublicSubnetRequest {
        const message = { ...baseListPublicSubnetRequest } as ListPublicSubnetRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.orderBy = object.orderBy ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListPublicSubnetResponse: object = { nextPageToken: '' };

export const ListPublicSubnetResponse = {
    encode(
        message: ListPublicSubnetResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.publicSubnets) {
            PublicSubnet.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(802).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPublicSubnetResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListPublicSubnetResponse } as ListPublicSubnetResponse;
        message.publicSubnets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicSubnets.push(PublicSubnet.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListPublicSubnetResponse {
        const message = { ...baseListPublicSubnetResponse } as ListPublicSubnetResponse;
        message.publicSubnets = (object.publicSubnets ?? []).map((e: any) =>
            PublicSubnet.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListPublicSubnetResponse): unknown {
        const obj: any = {};
        if (message.publicSubnets) {
            obj.publicSubnets = message.publicSubnets.map((e) =>
                e ? PublicSubnet.toJSON(e) : undefined,
            );
        } else {
            obj.publicSubnets = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPublicSubnetResponse>, I>>(
        object: I,
    ): ListPublicSubnetResponse {
        const message = { ...baseListPublicSubnetResponse } as ListPublicSubnetResponse;
        message.publicSubnets = object.publicSubnets?.map((e) => PublicSubnet.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreatePublicSubnetRequest: object = {
    folderId: '',
    name: '',
    description: '',
    hardwarePoolIds: '',
    prefixLength: 0,
};

export const CreatePublicSubnetRequest = {
    encode(
        message: CreatePublicSubnetRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        for (const v of message.hardwarePoolIds) {
            writer.uint32(34).string(v!);
        }
        if (message.prefixLength !== 0) {
            writer.uint32(40).int64(message.prefixLength);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreatePublicSubnetRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePublicSubnetRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreatePublicSubnetRequest } as CreatePublicSubnetRequest;
        message.hardwarePoolIds = [];
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
                    message.hardwarePoolIds.push(reader.string());
                    break;
                case 5:
                    message.prefixLength = longToNumber(reader.int64() as Long);
                    break;
                case 200:
                    const entry200 = CreatePublicSubnetRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
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

    fromJSON(object: any): CreatePublicSubnetRequest {
        const message = { ...baseCreatePublicSubnetRequest } as CreatePublicSubnetRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.hardwarePoolIds = (object.hardwarePoolIds ?? []).map((e: any) => String(e));
        message.prefixLength =
            object.prefixLength !== undefined && object.prefixLength !== null
                ? Number(object.prefixLength)
                : 0;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: CreatePublicSubnetRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        if (message.hardwarePoolIds) {
            obj.hardwarePoolIds = message.hardwarePoolIds.map((e) => e);
        } else {
            obj.hardwarePoolIds = [];
        }
        message.prefixLength !== undefined && (obj.prefixLength = Math.round(message.prefixLength));
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreatePublicSubnetRequest>, I>>(
        object: I,
    ): CreatePublicSubnetRequest {
        const message = { ...baseCreatePublicSubnetRequest } as CreatePublicSubnetRequest;
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.hardwarePoolIds = object.hardwarePoolIds?.map((e) => e) || [];
        message.prefixLength = object.prefixLength ?? 0;
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

const baseCreatePublicSubnetRequest_LabelsEntry: object = { key: '', value: '' };

export const CreatePublicSubnetRequest_LabelsEntry = {
    encode(
        message: CreatePublicSubnetRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePublicSubnetRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreatePublicSubnetRequest_LabelsEntry,
        } as CreatePublicSubnetRequest_LabelsEntry;
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

    fromJSON(object: any): CreatePublicSubnetRequest_LabelsEntry {
        const message = {
            ...baseCreatePublicSubnetRequest_LabelsEntry,
        } as CreatePublicSubnetRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreatePublicSubnetRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreatePublicSubnetRequest_LabelsEntry>, I>>(
        object: I,
    ): CreatePublicSubnetRequest_LabelsEntry {
        const message = {
            ...baseCreatePublicSubnetRequest_LabelsEntry,
        } as CreatePublicSubnetRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreatePublicSubnetMetadata: object = { publicSubnetId: '' };

export const CreatePublicSubnetMetadata = {
    encode(
        message: CreatePublicSubnetMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.publicSubnetId !== '') {
            writer.uint32(10).string(message.publicSubnetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePublicSubnetMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreatePublicSubnetMetadata } as CreatePublicSubnetMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicSubnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreatePublicSubnetMetadata {
        const message = { ...baseCreatePublicSubnetMetadata } as CreatePublicSubnetMetadata;
        message.publicSubnetId =
            object.publicSubnetId !== undefined && object.publicSubnetId !== null
                ? String(object.publicSubnetId)
                : '';
        return message;
    },

    toJSON(message: CreatePublicSubnetMetadata): unknown {
        const obj: any = {};
        message.publicSubnetId !== undefined && (obj.publicSubnetId = message.publicSubnetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreatePublicSubnetMetadata>, I>>(
        object: I,
    ): CreatePublicSubnetMetadata {
        const message = { ...baseCreatePublicSubnetMetadata } as CreatePublicSubnetMetadata;
        message.publicSubnetId = object.publicSubnetId ?? '';
        return message;
    },
};

const baseUpdatePublicSubnetRequest: object = {
    publicSubnetId: '',
    name: '',
    description: '',
    hardwarePoolIds: '',
    type: 0,
};

export const UpdatePublicSubnetRequest = {
    encode(
        message: UpdatePublicSubnetRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.publicSubnetId !== '') {
            writer.uint32(10).string(message.publicSubnetId);
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
        for (const v of message.hardwarePoolIds) {
            writer.uint32(42).string(v!);
        }
        if (message.type !== 0) {
            writer.uint32(48).int32(message.type);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdatePublicSubnetRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePublicSubnetRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdatePublicSubnetRequest } as UpdatePublicSubnetRequest;
        message.hardwarePoolIds = [];
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicSubnetId = reader.string();
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
                    message.hardwarePoolIds.push(reader.string());
                    break;
                case 6:
                    message.type = reader.int32() as any;
                    break;
                case 200:
                    const entry200 = UpdatePublicSubnetRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
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

    fromJSON(object: any): UpdatePublicSubnetRequest {
        const message = { ...baseUpdatePublicSubnetRequest } as UpdatePublicSubnetRequest;
        message.publicSubnetId =
            object.publicSubnetId !== undefined && object.publicSubnetId !== null
                ? String(object.publicSubnetId)
                : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.hardwarePoolIds = (object.hardwarePoolIds ?? []).map((e: any) => String(e));
        message.type =
            object.type !== undefined && object.type !== null
                ? publicSubnetTypeFromJSON(object.type)
                : 0;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: UpdatePublicSubnetRequest): unknown {
        const obj: any = {};
        message.publicSubnetId !== undefined && (obj.publicSubnetId = message.publicSubnetId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        if (message.hardwarePoolIds) {
            obj.hardwarePoolIds = message.hardwarePoolIds.map((e) => e);
        } else {
            obj.hardwarePoolIds = [];
        }
        message.type !== undefined && (obj.type = publicSubnetTypeToJSON(message.type));
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdatePublicSubnetRequest>, I>>(
        object: I,
    ): UpdatePublicSubnetRequest {
        const message = { ...baseUpdatePublicSubnetRequest } as UpdatePublicSubnetRequest;
        message.publicSubnetId = object.publicSubnetId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.hardwarePoolIds = object.hardwarePoolIds?.map((e) => e) || [];
        message.type = object.type ?? 0;
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

const baseUpdatePublicSubnetRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdatePublicSubnetRequest_LabelsEntry = {
    encode(
        message: UpdatePublicSubnetRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePublicSubnetRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdatePublicSubnetRequest_LabelsEntry,
        } as UpdatePublicSubnetRequest_LabelsEntry;
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

    fromJSON(object: any): UpdatePublicSubnetRequest_LabelsEntry {
        const message = {
            ...baseUpdatePublicSubnetRequest_LabelsEntry,
        } as UpdatePublicSubnetRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdatePublicSubnetRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdatePublicSubnetRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdatePublicSubnetRequest_LabelsEntry {
        const message = {
            ...baseUpdatePublicSubnetRequest_LabelsEntry,
        } as UpdatePublicSubnetRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdatePublicSubnetMetadata: object = { publicSubnetId: '' };

export const UpdatePublicSubnetMetadata = {
    encode(
        message: UpdatePublicSubnetMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.publicSubnetId !== '') {
            writer.uint32(10).string(message.publicSubnetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePublicSubnetMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdatePublicSubnetMetadata } as UpdatePublicSubnetMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicSubnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdatePublicSubnetMetadata {
        const message = { ...baseUpdatePublicSubnetMetadata } as UpdatePublicSubnetMetadata;
        message.publicSubnetId =
            object.publicSubnetId !== undefined && object.publicSubnetId !== null
                ? String(object.publicSubnetId)
                : '';
        return message;
    },

    toJSON(message: UpdatePublicSubnetMetadata): unknown {
        const obj: any = {};
        message.publicSubnetId !== undefined && (obj.publicSubnetId = message.publicSubnetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdatePublicSubnetMetadata>, I>>(
        object: I,
    ): UpdatePublicSubnetMetadata {
        const message = { ...baseUpdatePublicSubnetMetadata } as UpdatePublicSubnetMetadata;
        message.publicSubnetId = object.publicSubnetId ?? '';
        return message;
    },
};

const baseDeletePublicSubnetRequest: object = { publicSubnetId: '' };

export const DeletePublicSubnetRequest = {
    encode(
        message: DeletePublicSubnetRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.publicSubnetId !== '') {
            writer.uint32(10).string(message.publicSubnetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeletePublicSubnetRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeletePublicSubnetRequest } as DeletePublicSubnetRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicSubnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeletePublicSubnetRequest {
        const message = { ...baseDeletePublicSubnetRequest } as DeletePublicSubnetRequest;
        message.publicSubnetId =
            object.publicSubnetId !== undefined && object.publicSubnetId !== null
                ? String(object.publicSubnetId)
                : '';
        return message;
    },

    toJSON(message: DeletePublicSubnetRequest): unknown {
        const obj: any = {};
        message.publicSubnetId !== undefined && (obj.publicSubnetId = message.publicSubnetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeletePublicSubnetRequest>, I>>(
        object: I,
    ): DeletePublicSubnetRequest {
        const message = { ...baseDeletePublicSubnetRequest } as DeletePublicSubnetRequest;
        message.publicSubnetId = object.publicSubnetId ?? '';
        return message;
    },
};

const baseDeletePublicSubnetMetadata: object = { publicSubnetId: '' };

export const DeletePublicSubnetMetadata = {
    encode(
        message: DeletePublicSubnetMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.publicSubnetId !== '') {
            writer.uint32(10).string(message.publicSubnetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeletePublicSubnetMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeletePublicSubnetMetadata } as DeletePublicSubnetMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicSubnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeletePublicSubnetMetadata {
        const message = { ...baseDeletePublicSubnetMetadata } as DeletePublicSubnetMetadata;
        message.publicSubnetId =
            object.publicSubnetId !== undefined && object.publicSubnetId !== null
                ? String(object.publicSubnetId)
                : '';
        return message;
    },

    toJSON(message: DeletePublicSubnetMetadata): unknown {
        const obj: any = {};
        message.publicSubnetId !== undefined && (obj.publicSubnetId = message.publicSubnetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeletePublicSubnetMetadata>, I>>(
        object: I,
    ): DeletePublicSubnetMetadata {
        const message = { ...baseDeletePublicSubnetMetadata } as DeletePublicSubnetMetadata;
        message.publicSubnetId = object.publicSubnetId ?? '';
        return message;
    },
};

const baseListPublicSubnetOperationsRequest: object = {
    publicSubnetId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListPublicSubnetOperationsRequest = {
    encode(
        message: ListPublicSubnetOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.publicSubnetId !== '') {
            writer.uint32(10).string(message.publicSubnetId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(800).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(810).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPublicSubnetOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListPublicSubnetOperationsRequest,
        } as ListPublicSubnetOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicSubnetId = reader.string();
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

    fromJSON(object: any): ListPublicSubnetOperationsRequest {
        const message = {
            ...baseListPublicSubnetOperationsRequest,
        } as ListPublicSubnetOperationsRequest;
        message.publicSubnetId =
            object.publicSubnetId !== undefined && object.publicSubnetId !== null
                ? String(object.publicSubnetId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListPublicSubnetOperationsRequest): unknown {
        const obj: any = {};
        message.publicSubnetId !== undefined && (obj.publicSubnetId = message.publicSubnetId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPublicSubnetOperationsRequest>, I>>(
        object: I,
    ): ListPublicSubnetOperationsRequest {
        const message = {
            ...baseListPublicSubnetOperationsRequest,
        } as ListPublicSubnetOperationsRequest;
        message.publicSubnetId = object.publicSubnetId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListPublicSubnetOperationsResponse: object = { nextPageToken: '' };

export const ListPublicSubnetOperationsResponse = {
    encode(
        message: ListPublicSubnetOperationsResponse,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPublicSubnetOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListPublicSubnetOperationsResponse,
        } as ListPublicSubnetOperationsResponse;
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

    fromJSON(object: any): ListPublicSubnetOperationsResponse {
        const message = {
            ...baseListPublicSubnetOperationsResponse,
        } as ListPublicSubnetOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListPublicSubnetOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPublicSubnetOperationsResponse>, I>>(
        object: I,
    ): ListPublicSubnetOperationsResponse {
        const message = {
            ...baseListPublicSubnetOperationsResponse,
        } as ListPublicSubnetOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** A set of methods for managing PublicSubnet resources. */
export const PublicSubnetServiceService = {
    /**
     * Returns the specific PublicSubnet resource.
     *
     * To get the list of available PublicSubnet resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.baremetal.v1alpha.PublicSubnetService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetPublicSubnetRequest) =>
            Buffer.from(GetPublicSubnetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetPublicSubnetRequest.decode(value),
        responseSerialize: (value: PublicSubnet) =>
            Buffer.from(PublicSubnet.encode(value).finish()),
        responseDeserialize: (value: Buffer) => PublicSubnet.decode(value),
    },
    /** Retrieves the list of PublicSubnet resources in the specified folder. */
    list: {
        path: '/yandex.cloud.baremetal.v1alpha.PublicSubnetService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListPublicSubnetRequest) =>
            Buffer.from(ListPublicSubnetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListPublicSubnetRequest.decode(value),
        responseSerialize: (value: ListPublicSubnetResponse) =>
            Buffer.from(ListPublicSubnetResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListPublicSubnetResponse.decode(value),
    },
    /** Creates a public subnet in the specified folder. */
    create: {
        path: '/yandex.cloud.baremetal.v1alpha.PublicSubnetService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreatePublicSubnetRequest) =>
            Buffer.from(CreatePublicSubnetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreatePublicSubnetRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified public subnet. */
    update: {
        path: '/yandex.cloud.baremetal.v1alpha.PublicSubnetService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdatePublicSubnetRequest) =>
            Buffer.from(UpdatePublicSubnetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdatePublicSubnetRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Deletes the specified public subnet.
     *
     * Deleting a public subnet removes its data permanently and is irreversible.
     */
    delete: {
        path: '/yandex.cloud.baremetal.v1alpha.PublicSubnetService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeletePublicSubnetRequest) =>
            Buffer.from(DeletePublicSubnetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeletePublicSubnetRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified public subnet. */
    listOperations: {
        path: '/yandex.cloud.baremetal.v1alpha.PublicSubnetService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListPublicSubnetOperationsRequest) =>
            Buffer.from(ListPublicSubnetOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListPublicSubnetOperationsRequest.decode(value),
        responseSerialize: (value: ListPublicSubnetOperationsResponse) =>
            Buffer.from(ListPublicSubnetOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListPublicSubnetOperationsResponse.decode(value),
    },
} as const;

export interface PublicSubnetServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specific PublicSubnet resource.
     *
     * To get the list of available PublicSubnet resources, make a [List] request.
     */
    get: handleUnaryCall<GetPublicSubnetRequest, PublicSubnet>;
    /** Retrieves the list of PublicSubnet resources in the specified folder. */
    list: handleUnaryCall<ListPublicSubnetRequest, ListPublicSubnetResponse>;
    /** Creates a public subnet in the specified folder. */
    create: handleUnaryCall<CreatePublicSubnetRequest, Operation>;
    /** Updates the specified public subnet. */
    update: handleUnaryCall<UpdatePublicSubnetRequest, Operation>;
    /**
     * Deletes the specified public subnet.
     *
     * Deleting a public subnet removes its data permanently and is irreversible.
     */
    delete: handleUnaryCall<DeletePublicSubnetRequest, Operation>;
    /** Lists operations for the specified public subnet. */
    listOperations: handleUnaryCall<
        ListPublicSubnetOperationsRequest,
        ListPublicSubnetOperationsResponse
    >;
}

export interface PublicSubnetServiceClient extends Client {
    /**
     * Returns the specific PublicSubnet resource.
     *
     * To get the list of available PublicSubnet resources, make a [List] request.
     */
    get(
        request: GetPublicSubnetRequest,
        callback: (error: ServiceError | null, response: PublicSubnet) => void,
    ): ClientUnaryCall;
    get(
        request: GetPublicSubnetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: PublicSubnet) => void,
    ): ClientUnaryCall;
    get(
        request: GetPublicSubnetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: PublicSubnet) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of PublicSubnet resources in the specified folder. */
    list(
        request: ListPublicSubnetRequest,
        callback: (error: ServiceError | null, response: ListPublicSubnetResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListPublicSubnetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListPublicSubnetResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListPublicSubnetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListPublicSubnetResponse) => void,
    ): ClientUnaryCall;
    /** Creates a public subnet in the specified folder. */
    create(
        request: CreatePublicSubnetRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreatePublicSubnetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreatePublicSubnetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified public subnet. */
    update(
        request: UpdatePublicSubnetRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdatePublicSubnetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdatePublicSubnetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Deletes the specified public subnet.
     *
     * Deleting a public subnet removes its data permanently and is irreversible.
     */
    delete(
        request: DeletePublicSubnetRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeletePublicSubnetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeletePublicSubnetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists operations for the specified public subnet. */
    listOperations(
        request: ListPublicSubnetOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListPublicSubnetOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListPublicSubnetOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListPublicSubnetOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListPublicSubnetOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListPublicSubnetOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
}

export const PublicSubnetServiceClient = makeGenericClientConstructor(
    PublicSubnetServiceService,
    'yandex.cloud.baremetal.v1alpha.PublicSubnetService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): PublicSubnetServiceClient;
    service: typeof PublicSubnetServiceService;
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
