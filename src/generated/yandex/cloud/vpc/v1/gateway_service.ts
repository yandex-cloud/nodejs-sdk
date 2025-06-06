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
import { Gateway } from '../../../../yandex/cloud/vpc/v1/gateway';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.vpc.v1';

export interface GetGatewayRequest {
    /**
     * ID of the Gateway resource to return.
     *
     * To get Gateway resource ID make a [GatewayService.List] request.
     */
    gatewayId: string;
}

export interface ListGatewaysRequest {
    /**
     * ID of the folder to list gateways in.
     *
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListGatewaysResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListGatewaysResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters Gateway listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Gateway.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name=my-gateway`.
     */
    filter: string;
}

export interface ListGatewaysResponse {
    /** List of gateways. */
    gateways: Gateway[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListGatewaysRequest.page_size], use `next_page_token` as the value
     * for the [ListGatewaysRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface ListGatewayOperationsRequest {
    /**
     * ID of the gateway to list operations for.
     *
     * To get a gateway ID make a [GatewayService.List] request.
     */
    gatewayId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListGatewayOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListGatewayOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListGatewayOperationsResponse {
    /** List of operations for the specified gateway. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListGatewayOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListGatewayOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface SharedEgressGatewaySpec {}

export interface CreateGatewayRequest {
    /**
     * ID of the folder to create a gateway in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the gateway.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the gateway. */
    description: string;
    /** Gateway labels as `key:value` pairs. */
    labels: { [key: string]: string };
    sharedEgressGatewaySpec?: SharedEgressGatewaySpec | undefined;
}

export interface CreateGatewayRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateGatewayMetadata {
    /** ID of the gateway that is being created. */
    gatewayId: string;
}

export interface UpdateGatewayRequest {
    /**
     * ID of the gateway to update.
     *
     * To get the gateway ID make a [GatewayService.List] request.
     */
    gatewayId: string;
    /** Field mask that specifies which attributes of the Gateway should be updated. */
    updateMask?: FieldMask;
    /**
     * New name for the gateway.
     * The name must be unique within the folder.
     */
    name: string;
    /** New description of the gateway. */
    description: string;
    /**
     * Gateway labels as `key:value` pairs.
     *
     * Existing set of labels is completely replaced by the provided set, so if you just want
     * to add or remove a label:
     * 1. Get the current set of labels with a [GatewayService.Get] request.
     * 2. Add or remove a label in this set.
     * 3. Send the new set in this field.
     */
    labels: { [key: string]: string };
    sharedEgressGatewaySpec?: SharedEgressGatewaySpec | undefined;
}

export interface UpdateGatewayRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateGatewayMetadata {
    /** ID of the Gateway that is being updated. */
    gatewayId: string;
}

export interface DeleteGatewayRequest {
    /**
     * ID of the gateway to delete.
     *
     * To get a gateway ID make a [GatewayService.List] request.
     */
    gatewayId: string;
}

export interface DeleteGatewayMetadata {
    /** ID of the gateway that is being deleted. */
    gatewayId: string;
}

export interface MoveGatewayRequest {
    gatewayId: string;
    destinationFolderId: string;
}

export interface MoveGatewayMetadata {
    gatewayId: string;
}

const baseGetGatewayRequest: object = { gatewayId: '' };

export const GetGatewayRequest = {
    encode(message: GetGatewayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.gatewayId !== '') {
            writer.uint32(10).string(message.gatewayId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetGatewayRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetGatewayRequest } as GetGatewayRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gatewayId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetGatewayRequest {
        const message = { ...baseGetGatewayRequest } as GetGatewayRequest;
        message.gatewayId =
            object.gatewayId !== undefined && object.gatewayId !== null
                ? String(object.gatewayId)
                : '';
        return message;
    },

    toJSON(message: GetGatewayRequest): unknown {
        const obj: any = {};
        message.gatewayId !== undefined && (obj.gatewayId = message.gatewayId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetGatewayRequest>, I>>(object: I): GetGatewayRequest {
        const message = { ...baseGetGatewayRequest } as GetGatewayRequest;
        message.gatewayId = object.gatewayId ?? '';
        return message;
    },
};

const baseListGatewaysRequest: object = { folderId: '', pageSize: 0, pageToken: '', filter: '' };

export const ListGatewaysRequest = {
    encode(message: ListGatewaysRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListGatewaysRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListGatewaysRequest } as ListGatewaysRequest;
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

    fromJSON(object: any): ListGatewaysRequest {
        const message = { ...baseListGatewaysRequest } as ListGatewaysRequest;
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

    toJSON(message: ListGatewaysRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListGatewaysRequest>, I>>(
        object: I,
    ): ListGatewaysRequest {
        const message = { ...baseListGatewaysRequest } as ListGatewaysRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListGatewaysResponse: object = { nextPageToken: '' };

export const ListGatewaysResponse = {
    encode(message: ListGatewaysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.gateways) {
            Gateway.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListGatewaysResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListGatewaysResponse } as ListGatewaysResponse;
        message.gateways = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gateways.push(Gateway.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListGatewaysResponse {
        const message = { ...baseListGatewaysResponse } as ListGatewaysResponse;
        message.gateways = (object.gateways ?? []).map((e: any) => Gateway.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListGatewaysResponse): unknown {
        const obj: any = {};
        if (message.gateways) {
            obj.gateways = message.gateways.map((e) => (e ? Gateway.toJSON(e) : undefined));
        } else {
            obj.gateways = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListGatewaysResponse>, I>>(
        object: I,
    ): ListGatewaysResponse {
        const message = { ...baseListGatewaysResponse } as ListGatewaysResponse;
        message.gateways = object.gateways?.map((e) => Gateway.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseListGatewayOperationsRequest: object = { gatewayId: '', pageSize: 0, pageToken: '' };

export const ListGatewayOperationsRequest = {
    encode(
        message: ListGatewayOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.gatewayId !== '') {
            writer.uint32(10).string(message.gatewayId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListGatewayOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListGatewayOperationsRequest } as ListGatewayOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gatewayId = reader.string();
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

    fromJSON(object: any): ListGatewayOperationsRequest {
        const message = { ...baseListGatewayOperationsRequest } as ListGatewayOperationsRequest;
        message.gatewayId =
            object.gatewayId !== undefined && object.gatewayId !== null
                ? String(object.gatewayId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListGatewayOperationsRequest): unknown {
        const obj: any = {};
        message.gatewayId !== undefined && (obj.gatewayId = message.gatewayId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListGatewayOperationsRequest>, I>>(
        object: I,
    ): ListGatewayOperationsRequest {
        const message = { ...baseListGatewayOperationsRequest } as ListGatewayOperationsRequest;
        message.gatewayId = object.gatewayId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListGatewayOperationsResponse: object = { nextPageToken: '' };

export const ListGatewayOperationsResponse = {
    encode(
        message: ListGatewayOperationsResponse,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListGatewayOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListGatewayOperationsResponse } as ListGatewayOperationsResponse;
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

    fromJSON(object: any): ListGatewayOperationsResponse {
        const message = { ...baseListGatewayOperationsResponse } as ListGatewayOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListGatewayOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListGatewayOperationsResponse>, I>>(
        object: I,
    ): ListGatewayOperationsResponse {
        const message = { ...baseListGatewayOperationsResponse } as ListGatewayOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseSharedEgressGatewaySpec: object = {};

export const SharedEgressGatewaySpec = {
    encode(_: SharedEgressGatewaySpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SharedEgressGatewaySpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSharedEgressGatewaySpec } as SharedEgressGatewaySpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): SharedEgressGatewaySpec {
        const message = { ...baseSharedEgressGatewaySpec } as SharedEgressGatewaySpec;
        return message;
    },

    toJSON(_: SharedEgressGatewaySpec): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SharedEgressGatewaySpec>, I>>(
        _: I,
    ): SharedEgressGatewaySpec {
        const message = { ...baseSharedEgressGatewaySpec } as SharedEgressGatewaySpec;
        return message;
    },
};

const baseCreateGatewayRequest: object = { folderId: '', name: '', description: '' };

export const CreateGatewayRequest = {
    encode(message: CreateGatewayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
            CreateGatewayRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        if (message.sharedEgressGatewaySpec !== undefined) {
            SharedEgressGatewaySpec.encode(
                message.sharedEgressGatewaySpec,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateGatewayRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateGatewayRequest } as CreateGatewayRequest;
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
                    const entry4 = CreateGatewayRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.sharedEgressGatewaySpec = SharedEgressGatewaySpec.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateGatewayRequest {
        const message = { ...baseCreateGatewayRequest } as CreateGatewayRequest;
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
        message.sharedEgressGatewaySpec =
            object.sharedEgressGatewaySpec !== undefined && object.sharedEgressGatewaySpec !== null
                ? SharedEgressGatewaySpec.fromJSON(object.sharedEgressGatewaySpec)
                : undefined;
        return message;
    },

    toJSON(message: CreateGatewayRequest): unknown {
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
        message.sharedEgressGatewaySpec !== undefined &&
            (obj.sharedEgressGatewaySpec = message.sharedEgressGatewaySpec
                ? SharedEgressGatewaySpec.toJSON(message.sharedEgressGatewaySpec)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateGatewayRequest>, I>>(
        object: I,
    ): CreateGatewayRequest {
        const message = { ...baseCreateGatewayRequest } as CreateGatewayRequest;
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
        message.sharedEgressGatewaySpec =
            object.sharedEgressGatewaySpec !== undefined && object.sharedEgressGatewaySpec !== null
                ? SharedEgressGatewaySpec.fromPartial(object.sharedEgressGatewaySpec)
                : undefined;
        return message;
    },
};

const baseCreateGatewayRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateGatewayRequest_LabelsEntry = {
    encode(
        message: CreateGatewayRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateGatewayRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateGatewayRequest_LabelsEntry,
        } as CreateGatewayRequest_LabelsEntry;
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

    fromJSON(object: any): CreateGatewayRequest_LabelsEntry {
        const message = {
            ...baseCreateGatewayRequest_LabelsEntry,
        } as CreateGatewayRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateGatewayRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateGatewayRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateGatewayRequest_LabelsEntry {
        const message = {
            ...baseCreateGatewayRequest_LabelsEntry,
        } as CreateGatewayRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateGatewayMetadata: object = { gatewayId: '' };

export const CreateGatewayMetadata = {
    encode(message: CreateGatewayMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.gatewayId !== '') {
            writer.uint32(10).string(message.gatewayId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateGatewayMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateGatewayMetadata } as CreateGatewayMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gatewayId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateGatewayMetadata {
        const message = { ...baseCreateGatewayMetadata } as CreateGatewayMetadata;
        message.gatewayId =
            object.gatewayId !== undefined && object.gatewayId !== null
                ? String(object.gatewayId)
                : '';
        return message;
    },

    toJSON(message: CreateGatewayMetadata): unknown {
        const obj: any = {};
        message.gatewayId !== undefined && (obj.gatewayId = message.gatewayId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateGatewayMetadata>, I>>(
        object: I,
    ): CreateGatewayMetadata {
        const message = { ...baseCreateGatewayMetadata } as CreateGatewayMetadata;
        message.gatewayId = object.gatewayId ?? '';
        return message;
    },
};

const baseUpdateGatewayRequest: object = { gatewayId: '', name: '', description: '' };

export const UpdateGatewayRequest = {
    encode(message: UpdateGatewayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.gatewayId !== '') {
            writer.uint32(10).string(message.gatewayId);
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
            UpdateGatewayRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        if (message.sharedEgressGatewaySpec !== undefined) {
            SharedEgressGatewaySpec.encode(
                message.sharedEgressGatewaySpec,
                writer.uint32(50).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGatewayRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateGatewayRequest } as UpdateGatewayRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gatewayId = reader.string();
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
                    const entry5 = UpdateGatewayRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.sharedEgressGatewaySpec = SharedEgressGatewaySpec.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateGatewayRequest {
        const message = { ...baseUpdateGatewayRequest } as UpdateGatewayRequest;
        message.gatewayId =
            object.gatewayId !== undefined && object.gatewayId !== null
                ? String(object.gatewayId)
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
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.sharedEgressGatewaySpec =
            object.sharedEgressGatewaySpec !== undefined && object.sharedEgressGatewaySpec !== null
                ? SharedEgressGatewaySpec.fromJSON(object.sharedEgressGatewaySpec)
                : undefined;
        return message;
    },

    toJSON(message: UpdateGatewayRequest): unknown {
        const obj: any = {};
        message.gatewayId !== undefined && (obj.gatewayId = message.gatewayId);
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
        message.sharedEgressGatewaySpec !== undefined &&
            (obj.sharedEgressGatewaySpec = message.sharedEgressGatewaySpec
                ? SharedEgressGatewaySpec.toJSON(message.sharedEgressGatewaySpec)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateGatewayRequest>, I>>(
        object: I,
    ): UpdateGatewayRequest {
        const message = { ...baseUpdateGatewayRequest } as UpdateGatewayRequest;
        message.gatewayId = object.gatewayId ?? '';
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
        message.sharedEgressGatewaySpec =
            object.sharedEgressGatewaySpec !== undefined && object.sharedEgressGatewaySpec !== null
                ? SharedEgressGatewaySpec.fromPartial(object.sharedEgressGatewaySpec)
                : undefined;
        return message;
    },
};

const baseUpdateGatewayRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateGatewayRequest_LabelsEntry = {
    encode(
        message: UpdateGatewayRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGatewayRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateGatewayRequest_LabelsEntry,
        } as UpdateGatewayRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateGatewayRequest_LabelsEntry {
        const message = {
            ...baseUpdateGatewayRequest_LabelsEntry,
        } as UpdateGatewayRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateGatewayRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateGatewayRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateGatewayRequest_LabelsEntry {
        const message = {
            ...baseUpdateGatewayRequest_LabelsEntry,
        } as UpdateGatewayRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateGatewayMetadata: object = { gatewayId: '' };

export const UpdateGatewayMetadata = {
    encode(message: UpdateGatewayMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.gatewayId !== '') {
            writer.uint32(10).string(message.gatewayId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGatewayMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateGatewayMetadata } as UpdateGatewayMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gatewayId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateGatewayMetadata {
        const message = { ...baseUpdateGatewayMetadata } as UpdateGatewayMetadata;
        message.gatewayId =
            object.gatewayId !== undefined && object.gatewayId !== null
                ? String(object.gatewayId)
                : '';
        return message;
    },

    toJSON(message: UpdateGatewayMetadata): unknown {
        const obj: any = {};
        message.gatewayId !== undefined && (obj.gatewayId = message.gatewayId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateGatewayMetadata>, I>>(
        object: I,
    ): UpdateGatewayMetadata {
        const message = { ...baseUpdateGatewayMetadata } as UpdateGatewayMetadata;
        message.gatewayId = object.gatewayId ?? '';
        return message;
    },
};

const baseDeleteGatewayRequest: object = { gatewayId: '' };

export const DeleteGatewayRequest = {
    encode(message: DeleteGatewayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.gatewayId !== '') {
            writer.uint32(10).string(message.gatewayId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteGatewayRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteGatewayRequest } as DeleteGatewayRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gatewayId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteGatewayRequest {
        const message = { ...baseDeleteGatewayRequest } as DeleteGatewayRequest;
        message.gatewayId =
            object.gatewayId !== undefined && object.gatewayId !== null
                ? String(object.gatewayId)
                : '';
        return message;
    },

    toJSON(message: DeleteGatewayRequest): unknown {
        const obj: any = {};
        message.gatewayId !== undefined && (obj.gatewayId = message.gatewayId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteGatewayRequest>, I>>(
        object: I,
    ): DeleteGatewayRequest {
        const message = { ...baseDeleteGatewayRequest } as DeleteGatewayRequest;
        message.gatewayId = object.gatewayId ?? '';
        return message;
    },
};

const baseDeleteGatewayMetadata: object = { gatewayId: '' };

export const DeleteGatewayMetadata = {
    encode(message: DeleteGatewayMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.gatewayId !== '') {
            writer.uint32(10).string(message.gatewayId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteGatewayMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteGatewayMetadata } as DeleteGatewayMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gatewayId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteGatewayMetadata {
        const message = { ...baseDeleteGatewayMetadata } as DeleteGatewayMetadata;
        message.gatewayId =
            object.gatewayId !== undefined && object.gatewayId !== null
                ? String(object.gatewayId)
                : '';
        return message;
    },

    toJSON(message: DeleteGatewayMetadata): unknown {
        const obj: any = {};
        message.gatewayId !== undefined && (obj.gatewayId = message.gatewayId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteGatewayMetadata>, I>>(
        object: I,
    ): DeleteGatewayMetadata {
        const message = { ...baseDeleteGatewayMetadata } as DeleteGatewayMetadata;
        message.gatewayId = object.gatewayId ?? '';
        return message;
    },
};

const baseMoveGatewayRequest: object = { gatewayId: '', destinationFolderId: '' };

export const MoveGatewayRequest = {
    encode(message: MoveGatewayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.gatewayId !== '') {
            writer.uint32(10).string(message.gatewayId);
        }
        if (message.destinationFolderId !== '') {
            writer.uint32(18).string(message.destinationFolderId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MoveGatewayRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMoveGatewayRequest } as MoveGatewayRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gatewayId = reader.string();
                    break;
                case 2:
                    message.destinationFolderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MoveGatewayRequest {
        const message = { ...baseMoveGatewayRequest } as MoveGatewayRequest;
        message.gatewayId =
            object.gatewayId !== undefined && object.gatewayId !== null
                ? String(object.gatewayId)
                : '';
        message.destinationFolderId =
            object.destinationFolderId !== undefined && object.destinationFolderId !== null
                ? String(object.destinationFolderId)
                : '';
        return message;
    },

    toJSON(message: MoveGatewayRequest): unknown {
        const obj: any = {};
        message.gatewayId !== undefined && (obj.gatewayId = message.gatewayId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MoveGatewayRequest>, I>>(
        object: I,
    ): MoveGatewayRequest {
        const message = { ...baseMoveGatewayRequest } as MoveGatewayRequest;
        message.gatewayId = object.gatewayId ?? '';
        message.destinationFolderId = object.destinationFolderId ?? '';
        return message;
    },
};

const baseMoveGatewayMetadata: object = { gatewayId: '' };

export const MoveGatewayMetadata = {
    encode(message: MoveGatewayMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.gatewayId !== '') {
            writer.uint32(10).string(message.gatewayId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MoveGatewayMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMoveGatewayMetadata } as MoveGatewayMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gatewayId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MoveGatewayMetadata {
        const message = { ...baseMoveGatewayMetadata } as MoveGatewayMetadata;
        message.gatewayId =
            object.gatewayId !== undefined && object.gatewayId !== null
                ? String(object.gatewayId)
                : '';
        return message;
    },

    toJSON(message: MoveGatewayMetadata): unknown {
        const obj: any = {};
        message.gatewayId !== undefined && (obj.gatewayId = message.gatewayId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MoveGatewayMetadata>, I>>(
        object: I,
    ): MoveGatewayMetadata {
        const message = { ...baseMoveGatewayMetadata } as MoveGatewayMetadata;
        message.gatewayId = object.gatewayId ?? '';
        return message;
    },
};

export const GatewayServiceService = {
    /**
     * Returns the specified Gateway resource.
     *
     * To get the list of all available Gateway resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.vpc.v1.GatewayService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetGatewayRequest) =>
            Buffer.from(GetGatewayRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetGatewayRequest.decode(value),
        responseSerialize: (value: Gateway) => Buffer.from(Gateway.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Gateway.decode(value),
    },
    /** Retrieves the list of Gateway resources in the specified folder. */
    list: {
        path: '/yandex.cloud.vpc.v1.GatewayService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListGatewaysRequest) =>
            Buffer.from(ListGatewaysRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListGatewaysRequest.decode(value),
        responseSerialize: (value: ListGatewaysResponse) =>
            Buffer.from(ListGatewaysResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListGatewaysResponse.decode(value),
    },
    /** Creates a gateway in the specified folder. */
    create: {
        path: '/yandex.cloud.vpc.v1.GatewayService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateGatewayRequest) =>
            Buffer.from(CreateGatewayRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateGatewayRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified gateway. */
    update: {
        path: '/yandex.cloud.vpc.v1.GatewayService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateGatewayRequest) =>
            Buffer.from(UpdateGatewayRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateGatewayRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified gateway. */
    delete: {
        path: '/yandex.cloud.vpc.v1.GatewayService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteGatewayRequest) =>
            Buffer.from(DeleteGatewayRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteGatewayRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** List operations for the specified gateway. */
    listOperations: {
        path: '/yandex.cloud.vpc.v1.GatewayService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListGatewayOperationsRequest) =>
            Buffer.from(ListGatewayOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListGatewayOperationsRequest.decode(value),
        responseSerialize: (value: ListGatewayOperationsResponse) =>
            Buffer.from(ListGatewayOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListGatewayOperationsResponse.decode(value),
    },
    /** Move a gateway to another folder */
    move: {
        path: '/yandex.cloud.vpc.v1.GatewayService/Move',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: MoveGatewayRequest) =>
            Buffer.from(MoveGatewayRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => MoveGatewayRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface GatewayServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Gateway resource.
     *
     * To get the list of all available Gateway resources, make a [List] request.
     */
    get: handleUnaryCall<GetGatewayRequest, Gateway>;
    /** Retrieves the list of Gateway resources in the specified folder. */
    list: handleUnaryCall<ListGatewaysRequest, ListGatewaysResponse>;
    /** Creates a gateway in the specified folder. */
    create: handleUnaryCall<CreateGatewayRequest, Operation>;
    /** Updates the specified gateway. */
    update: handleUnaryCall<UpdateGatewayRequest, Operation>;
    /** Deletes the specified gateway. */
    delete: handleUnaryCall<DeleteGatewayRequest, Operation>;
    /** List operations for the specified gateway. */
    listOperations: handleUnaryCall<ListGatewayOperationsRequest, ListGatewayOperationsResponse>;
    /** Move a gateway to another folder */
    move: handleUnaryCall<MoveGatewayRequest, Operation>;
}

export interface GatewayServiceClient extends Client {
    /**
     * Returns the specified Gateway resource.
     *
     * To get the list of all available Gateway resources, make a [List] request.
     */
    get(
        request: GetGatewayRequest,
        callback: (error: ServiceError | null, response: Gateway) => void,
    ): ClientUnaryCall;
    get(
        request: GetGatewayRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Gateway) => void,
    ): ClientUnaryCall;
    get(
        request: GetGatewayRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Gateway) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of Gateway resources in the specified folder. */
    list(
        request: ListGatewaysRequest,
        callback: (error: ServiceError | null, response: ListGatewaysResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListGatewaysRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListGatewaysResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListGatewaysRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListGatewaysResponse) => void,
    ): ClientUnaryCall;
    /** Creates a gateway in the specified folder. */
    create(
        request: CreateGatewayRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateGatewayRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateGatewayRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified gateway. */
    update(
        request: UpdateGatewayRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateGatewayRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateGatewayRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified gateway. */
    delete(
        request: DeleteGatewayRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteGatewayRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteGatewayRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** List operations for the specified gateway. */
    listOperations(
        request: ListGatewayOperationsRequest,
        callback: (error: ServiceError | null, response: ListGatewayOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListGatewayOperationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListGatewayOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListGatewayOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListGatewayOperationsResponse) => void,
    ): ClientUnaryCall;
    /** Move a gateway to another folder */
    move(
        request: MoveGatewayRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    move(
        request: MoveGatewayRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    move(
        request: MoveGatewayRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const GatewayServiceClient = makeGenericClientConstructor(
    GatewayServiceService,
    'yandex.cloud.vpc.v1.GatewayService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): GatewayServiceClient;
    service: typeof GatewayServiceService;
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
