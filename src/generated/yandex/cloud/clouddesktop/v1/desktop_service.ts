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
import { User, Desktop } from '../../../../yandex/cloud/clouddesktop/v1/desktop';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.clouddesktop.v1.api';

export interface UpdatePropertiesRequest {
    updateMask?: FieldMask;
    /** To get the desktop ID use a [DesktopService.List] request. */
    desktopId: string;
    name: string;
    labels: { [key: string]: string };
}

export interface UpdatePropertiesRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface StartRequest {
    /** ID of the desktop. */
    desktopId: string;
}

export interface StopRequest {
    /** ID of the desktop. */
    desktopId: string;
}

export interface UpdateRequest {
    /** ID of the desktop. */
    desktopId: string;
}

export interface GetDesktopRequest {
    /**
     * ID of the desktop resource to return.
     *
     * To get the desktop ID use a [DesktopService.List] request.
     */
    desktopId: string;
}

export interface GetRdpFileRequest {
    /**
     * ID of the desktop resource to return.
     *
     * To get the desktop ID use a [DesktopService.List] request.
     */
    desktopId: string;
    /** User of the desktop. */
    user?: User;
}

export interface RdpFileResponse {
    /** HTTP headers mapping. */
    headers: { [key: string]: string };
    /** RDP file content. */
    content: string;
}

export interface RdpFileResponse_HeadersEntry {
    key: string;
    value: string;
}

export interface ListDesktopsRequest {
    /**
     * ID of the folder to create a DesktopGroup in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListDesktopsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListDesktopsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Desktop.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. Value or a list of values to compare against the values of the field.
     */
    filter: string;
    /**
     * Sorting the list by [Desktop.name], [Desktop.created_at] and [Desktop.status] fields.
     * The default sorting order is ascending.
     */
    orderBy: string;
}

export interface ListDesktopsResponse {
    /** List of desktops. */
    desktops: Desktop[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListDesktopsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListDesktopsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface ListDesktopOperationsRequest {
    /** ID of the desktop. */
    desktopId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListDesktopOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListDesktopOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Desktop.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. Value or a list of values to compare against the values of the field.
     */
    filter: string;
}

export interface ListDesktopOperationsResponse {
    /** List of operations for the specified desktop. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListDesktopOperationsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListDesktopOperationsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateDesktopRequest {
    /** ID of the desktop group. */
    desktopGroupId: string;
    /** ID of the subnet for desktop. */
    subnetId: string;
    /** List of users. */
    users: User[];
}

export interface CreateDesktopMetadata {
    /** ID of the desktop that is being created. */
    desktopId: string;
}

export interface DeleteDesktopRequest {
    /** ID of the desktop to delete. */
    desktopId: string;
}

export interface DeleteDesktopMetadata {
    /** ID of the desktop that is being deleted. */
    desktopId: string;
}

export interface ResetPasswordRequest {
    /** ID of the desktop. */
    desktopId: string;
    /** User of the desktop. */
    user?: User;
}

export interface ResetPasswordResponse {
    /** Generated password */
    password: string;
}

export interface RestartRequest {
    /** ID of the desktop. */
    desktopId: string;
}

export interface RestartDesktopMetadata {
    /** ID of the desktop. */
    desktopId: string;
}

export interface UpdateDesktopPropertiesMetadata {
    desktopId: string;
}

export interface StartDesktopMetadata {
    desktopId: string;
}

export interface StopDesktopMetadata {
    desktopId: string;
}

export interface UpdateDesktopMetadata {
    desktopId: string;
}

const baseUpdatePropertiesRequest: object = { desktopId: '', name: '' };

export const UpdatePropertiesRequest = {
    encode(message: UpdatePropertiesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(10).fork()).ldelim();
        }
        if (message.desktopId !== '') {
            writer.uint32(18).string(message.desktopId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdatePropertiesRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePropertiesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdatePropertiesRequest } as UpdatePropertiesRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.desktopId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    const entry4 = UpdatePropertiesRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdatePropertiesRequest {
        const message = { ...baseUpdatePropertiesRequest } as UpdatePropertiesRequest;
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.desktopId =
            object.desktopId !== undefined && object.desktopId !== null
                ? String(object.desktopId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: UpdatePropertiesRequest): unknown {
        const obj: any = {};
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.desktopId !== undefined && (obj.desktopId = message.desktopId);
        message.name !== undefined && (obj.name = message.name);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdatePropertiesRequest>, I>>(
        object: I,
    ): UpdatePropertiesRequest {
        const message = { ...baseUpdatePropertiesRequest } as UpdatePropertiesRequest;
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.desktopId = object.desktopId ?? '';
        message.name = object.name ?? '';
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

const baseUpdatePropertiesRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdatePropertiesRequest_LabelsEntry = {
    encode(
        message: UpdatePropertiesRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePropertiesRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdatePropertiesRequest_LabelsEntry,
        } as UpdatePropertiesRequest_LabelsEntry;
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

    fromJSON(object: any): UpdatePropertiesRequest_LabelsEntry {
        const message = {
            ...baseUpdatePropertiesRequest_LabelsEntry,
        } as UpdatePropertiesRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdatePropertiesRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdatePropertiesRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdatePropertiesRequest_LabelsEntry {
        const message = {
            ...baseUpdatePropertiesRequest_LabelsEntry,
        } as UpdatePropertiesRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseStartRequest: object = { desktopId: '' };

export const StartRequest = {
    encode(message: StartRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.desktopId !== '') {
            writer.uint32(10).string(message.desktopId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StartRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStartRequest } as StartRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktopId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StartRequest {
        const message = { ...baseStartRequest } as StartRequest;
        message.desktopId =
            object.desktopId !== undefined && object.desktopId !== null
                ? String(object.desktopId)
                : '';
        return message;
    },

    toJSON(message: StartRequest): unknown {
        const obj: any = {};
        message.desktopId !== undefined && (obj.desktopId = message.desktopId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StartRequest>, I>>(object: I): StartRequest {
        const message = { ...baseStartRequest } as StartRequest;
        message.desktopId = object.desktopId ?? '';
        return message;
    },
};

const baseStopRequest: object = { desktopId: '' };

export const StopRequest = {
    encode(message: StopRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.desktopId !== '') {
            writer.uint32(10).string(message.desktopId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StopRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopRequest } as StopRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktopId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StopRequest {
        const message = { ...baseStopRequest } as StopRequest;
        message.desktopId =
            object.desktopId !== undefined && object.desktopId !== null
                ? String(object.desktopId)
                : '';
        return message;
    },

    toJSON(message: StopRequest): unknown {
        const obj: any = {};
        message.desktopId !== undefined && (obj.desktopId = message.desktopId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StopRequest>, I>>(object: I): StopRequest {
        const message = { ...baseStopRequest } as StopRequest;
        message.desktopId = object.desktopId ?? '';
        return message;
    },
};

const baseUpdateRequest: object = { desktopId: '' };

export const UpdateRequest = {
    encode(message: UpdateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.desktopId !== '') {
            writer.uint32(10).string(message.desktopId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateRequest } as UpdateRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktopId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateRequest {
        const message = { ...baseUpdateRequest } as UpdateRequest;
        message.desktopId =
            object.desktopId !== undefined && object.desktopId !== null
                ? String(object.desktopId)
                : '';
        return message;
    },

    toJSON(message: UpdateRequest): unknown {
        const obj: any = {};
        message.desktopId !== undefined && (obj.desktopId = message.desktopId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateRequest>, I>>(object: I): UpdateRequest {
        const message = { ...baseUpdateRequest } as UpdateRequest;
        message.desktopId = object.desktopId ?? '';
        return message;
    },
};

const baseGetDesktopRequest: object = { desktopId: '' };

export const GetDesktopRequest = {
    encode(message: GetDesktopRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.desktopId !== '') {
            writer.uint32(10).string(message.desktopId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetDesktopRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetDesktopRequest } as GetDesktopRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktopId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetDesktopRequest {
        const message = { ...baseGetDesktopRequest } as GetDesktopRequest;
        message.desktopId =
            object.desktopId !== undefined && object.desktopId !== null
                ? String(object.desktopId)
                : '';
        return message;
    },

    toJSON(message: GetDesktopRequest): unknown {
        const obj: any = {};
        message.desktopId !== undefined && (obj.desktopId = message.desktopId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetDesktopRequest>, I>>(object: I): GetDesktopRequest {
        const message = { ...baseGetDesktopRequest } as GetDesktopRequest;
        message.desktopId = object.desktopId ?? '';
        return message;
    },
};

const baseGetRdpFileRequest: object = { desktopId: '' };

export const GetRdpFileRequest = {
    encode(message: GetRdpFileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.desktopId !== '') {
            writer.uint32(10).string(message.desktopId);
        }
        if (message.user !== undefined) {
            User.encode(message.user, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetRdpFileRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetRdpFileRequest } as GetRdpFileRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktopId = reader.string();
                    break;
                case 2:
                    message.user = User.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetRdpFileRequest {
        const message = { ...baseGetRdpFileRequest } as GetRdpFileRequest;
        message.desktopId =
            object.desktopId !== undefined && object.desktopId !== null
                ? String(object.desktopId)
                : '';
        message.user =
            object.user !== undefined && object.user !== null
                ? User.fromJSON(object.user)
                : undefined;
        return message;
    },

    toJSON(message: GetRdpFileRequest): unknown {
        const obj: any = {};
        message.desktopId !== undefined && (obj.desktopId = message.desktopId);
        message.user !== undefined &&
            (obj.user = message.user ? User.toJSON(message.user) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetRdpFileRequest>, I>>(object: I): GetRdpFileRequest {
        const message = { ...baseGetRdpFileRequest } as GetRdpFileRequest;
        message.desktopId = object.desktopId ?? '';
        message.user =
            object.user !== undefined && object.user !== null
                ? User.fromPartial(object.user)
                : undefined;
        return message;
    },
};

const baseRdpFileResponse: object = { content: '' };

export const RdpFileResponse = {
    encode(message: RdpFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        Object.entries(message.headers).forEach(([key, value]) => {
            RdpFileResponse_HeadersEntry.encode(
                { key: key as any, value },
                writer.uint32(10).fork(),
            ).ldelim();
        });
        if (message.content !== '') {
            writer.uint32(18).string(message.content);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RdpFileResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRdpFileResponse } as RdpFileResponse;
        message.headers = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = RdpFileResponse_HeadersEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.headers[entry1.key] = entry1.value;
                    }
                    break;
                case 2:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RdpFileResponse {
        const message = { ...baseRdpFileResponse } as RdpFileResponse;
        message.headers = Object.entries(object.headers ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.content =
            object.content !== undefined && object.content !== null ? String(object.content) : '';
        return message;
    },

    toJSON(message: RdpFileResponse): unknown {
        const obj: any = {};
        obj.headers = {};
        if (message.headers) {
            Object.entries(message.headers).forEach(([k, v]) => {
                obj.headers[k] = v;
            });
        }
        message.content !== undefined && (obj.content = message.content);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RdpFileResponse>, I>>(object: I): RdpFileResponse {
        const message = { ...baseRdpFileResponse } as RdpFileResponse;
        message.headers = Object.entries(object.headers ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.content = object.content ?? '';
        return message;
    },
};

const baseRdpFileResponse_HeadersEntry: object = { key: '', value: '' };

export const RdpFileResponse_HeadersEntry = {
    encode(
        message: RdpFileResponse_HeadersEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): RdpFileResponse_HeadersEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRdpFileResponse_HeadersEntry } as RdpFileResponse_HeadersEntry;
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

    fromJSON(object: any): RdpFileResponse_HeadersEntry {
        const message = { ...baseRdpFileResponse_HeadersEntry } as RdpFileResponse_HeadersEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: RdpFileResponse_HeadersEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RdpFileResponse_HeadersEntry>, I>>(
        object: I,
    ): RdpFileResponse_HeadersEntry {
        const message = { ...baseRdpFileResponse_HeadersEntry } as RdpFileResponse_HeadersEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseListDesktopsRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
    orderBy: '',
};

export const ListDesktopsRequest = {
    encode(message: ListDesktopsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(168).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(178).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(186).string(message.filter);
        }
        if (message.orderBy !== '') {
            writer.uint32(194).string(message.orderBy);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListDesktopsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDesktopsRequest } as ListDesktopsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.folderId = reader.string();
                    break;
                case 21:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 22:
                    message.pageToken = reader.string();
                    break;
                case 23:
                    message.filter = reader.string();
                    break;
                case 24:
                    message.orderBy = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListDesktopsRequest {
        const message = { ...baseListDesktopsRequest } as ListDesktopsRequest;
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

    toJSON(message: ListDesktopsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListDesktopsRequest>, I>>(
        object: I,
    ): ListDesktopsRequest {
        const message = { ...baseListDesktopsRequest } as ListDesktopsRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        message.orderBy = object.orderBy ?? '';
        return message;
    },
};

const baseListDesktopsResponse: object = { nextPageToken: '' };

export const ListDesktopsResponse = {
    encode(message: ListDesktopsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.desktops) {
            Desktop.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(178).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListDesktopsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDesktopsResponse } as ListDesktopsResponse;
        message.desktops = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktops.push(Desktop.decode(reader, reader.uint32()));
                    break;
                case 22:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListDesktopsResponse {
        const message = { ...baseListDesktopsResponse } as ListDesktopsResponse;
        message.desktops = (object.desktops ?? []).map((e: any) => Desktop.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListDesktopsResponse): unknown {
        const obj: any = {};
        if (message.desktops) {
            obj.desktops = message.desktops.map((e) => (e ? Desktop.toJSON(e) : undefined));
        } else {
            obj.desktops = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListDesktopsResponse>, I>>(
        object: I,
    ): ListDesktopsResponse {
        const message = { ...baseListDesktopsResponse } as ListDesktopsResponse;
        message.desktops = object.desktops?.map((e) => Desktop.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseListDesktopOperationsRequest: object = {
    desktopId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListDesktopOperationsRequest = {
    encode(
        message: ListDesktopOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.desktopId !== '') {
            writer.uint32(10).string(message.desktopId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(168).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(178).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(186).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListDesktopOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDesktopOperationsRequest } as ListDesktopOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktopId = reader.string();
                    break;
                case 21:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 22:
                    message.pageToken = reader.string();
                    break;
                case 23:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListDesktopOperationsRequest {
        const message = { ...baseListDesktopOperationsRequest } as ListDesktopOperationsRequest;
        message.desktopId =
            object.desktopId !== undefined && object.desktopId !== null
                ? String(object.desktopId)
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

    toJSON(message: ListDesktopOperationsRequest): unknown {
        const obj: any = {};
        message.desktopId !== undefined && (obj.desktopId = message.desktopId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListDesktopOperationsRequest>, I>>(
        object: I,
    ): ListDesktopOperationsRequest {
        const message = { ...baseListDesktopOperationsRequest } as ListDesktopOperationsRequest;
        message.desktopId = object.desktopId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListDesktopOperationsResponse: object = { nextPageToken: '' };

export const ListDesktopOperationsResponse = {
    encode(
        message: ListDesktopOperationsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.operations) {
            Operation.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(178).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListDesktopOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDesktopOperationsResponse } as ListDesktopOperationsResponse;
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(Operation.decode(reader, reader.uint32()));
                    break;
                case 22:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListDesktopOperationsResponse {
        const message = { ...baseListDesktopOperationsResponse } as ListDesktopOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListDesktopOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListDesktopOperationsResponse>, I>>(
        object: I,
    ): ListDesktopOperationsResponse {
        const message = { ...baseListDesktopOperationsResponse } as ListDesktopOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateDesktopRequest: object = { desktopGroupId: '', subnetId: '' };

export const CreateDesktopRequest = {
    encode(message: CreateDesktopRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.desktopGroupId !== '') {
            writer.uint32(26).string(message.desktopGroupId);
        }
        if (message.subnetId !== '') {
            writer.uint32(34).string(message.subnetId);
        }
        for (const v of message.users) {
            User.encode(v!, writer.uint32(186).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateDesktopRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateDesktopRequest } as CreateDesktopRequest;
        message.users = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.desktopGroupId = reader.string();
                    break;
                case 4:
                    message.subnetId = reader.string();
                    break;
                case 23:
                    message.users.push(User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateDesktopRequest {
        const message = { ...baseCreateDesktopRequest } as CreateDesktopRequest;
        message.desktopGroupId =
            object.desktopGroupId !== undefined && object.desktopGroupId !== null
                ? String(object.desktopGroupId)
                : '';
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : '';
        message.users = (object.users ?? []).map((e: any) => User.fromJSON(e));
        return message;
    },

    toJSON(message: CreateDesktopRequest): unknown {
        const obj: any = {};
        message.desktopGroupId !== undefined && (obj.desktopGroupId = message.desktopGroupId);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        if (message.users) {
            obj.users = message.users.map((e) => (e ? User.toJSON(e) : undefined));
        } else {
            obj.users = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateDesktopRequest>, I>>(
        object: I,
    ): CreateDesktopRequest {
        const message = { ...baseCreateDesktopRequest } as CreateDesktopRequest;
        message.desktopGroupId = object.desktopGroupId ?? '';
        message.subnetId = object.subnetId ?? '';
        message.users = object.users?.map((e) => User.fromPartial(e)) || [];
        return message;
    },
};

const baseCreateDesktopMetadata: object = { desktopId: '' };

export const CreateDesktopMetadata = {
    encode(message: CreateDesktopMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.desktopId !== '') {
            writer.uint32(10).string(message.desktopId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateDesktopMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateDesktopMetadata } as CreateDesktopMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktopId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateDesktopMetadata {
        const message = { ...baseCreateDesktopMetadata } as CreateDesktopMetadata;
        message.desktopId =
            object.desktopId !== undefined && object.desktopId !== null
                ? String(object.desktopId)
                : '';
        return message;
    },

    toJSON(message: CreateDesktopMetadata): unknown {
        const obj: any = {};
        message.desktopId !== undefined && (obj.desktopId = message.desktopId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateDesktopMetadata>, I>>(
        object: I,
    ): CreateDesktopMetadata {
        const message = { ...baseCreateDesktopMetadata } as CreateDesktopMetadata;
        message.desktopId = object.desktopId ?? '';
        return message;
    },
};

const baseDeleteDesktopRequest: object = { desktopId: '' };

export const DeleteDesktopRequest = {
    encode(message: DeleteDesktopRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.desktopId !== '') {
            writer.uint32(10).string(message.desktopId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDesktopRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteDesktopRequest } as DeleteDesktopRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktopId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteDesktopRequest {
        const message = { ...baseDeleteDesktopRequest } as DeleteDesktopRequest;
        message.desktopId =
            object.desktopId !== undefined && object.desktopId !== null
                ? String(object.desktopId)
                : '';
        return message;
    },

    toJSON(message: DeleteDesktopRequest): unknown {
        const obj: any = {};
        message.desktopId !== undefined && (obj.desktopId = message.desktopId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteDesktopRequest>, I>>(
        object: I,
    ): DeleteDesktopRequest {
        const message = { ...baseDeleteDesktopRequest } as DeleteDesktopRequest;
        message.desktopId = object.desktopId ?? '';
        return message;
    },
};

const baseDeleteDesktopMetadata: object = { desktopId: '' };

export const DeleteDesktopMetadata = {
    encode(message: DeleteDesktopMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.desktopId !== '') {
            writer.uint32(10).string(message.desktopId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDesktopMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteDesktopMetadata } as DeleteDesktopMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktopId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteDesktopMetadata {
        const message = { ...baseDeleteDesktopMetadata } as DeleteDesktopMetadata;
        message.desktopId =
            object.desktopId !== undefined && object.desktopId !== null
                ? String(object.desktopId)
                : '';
        return message;
    },

    toJSON(message: DeleteDesktopMetadata): unknown {
        const obj: any = {};
        message.desktopId !== undefined && (obj.desktopId = message.desktopId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteDesktopMetadata>, I>>(
        object: I,
    ): DeleteDesktopMetadata {
        const message = { ...baseDeleteDesktopMetadata } as DeleteDesktopMetadata;
        message.desktopId = object.desktopId ?? '';
        return message;
    },
};

const baseResetPasswordRequest: object = { desktopId: '' };

export const ResetPasswordRequest = {
    encode(message: ResetPasswordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.desktopId !== '') {
            writer.uint32(10).string(message.desktopId);
        }
        if (message.user !== undefined) {
            User.encode(message.user, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResetPasswordRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResetPasswordRequest } as ResetPasswordRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktopId = reader.string();
                    break;
                case 2:
                    message.user = User.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResetPasswordRequest {
        const message = { ...baseResetPasswordRequest } as ResetPasswordRequest;
        message.desktopId =
            object.desktopId !== undefined && object.desktopId !== null
                ? String(object.desktopId)
                : '';
        message.user =
            object.user !== undefined && object.user !== null
                ? User.fromJSON(object.user)
                : undefined;
        return message;
    },

    toJSON(message: ResetPasswordRequest): unknown {
        const obj: any = {};
        message.desktopId !== undefined && (obj.desktopId = message.desktopId);
        message.user !== undefined &&
            (obj.user = message.user ? User.toJSON(message.user) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResetPasswordRequest>, I>>(
        object: I,
    ): ResetPasswordRequest {
        const message = { ...baseResetPasswordRequest } as ResetPasswordRequest;
        message.desktopId = object.desktopId ?? '';
        message.user =
            object.user !== undefined && object.user !== null
                ? User.fromPartial(object.user)
                : undefined;
        return message;
    },
};

const baseResetPasswordResponse: object = { password: '' };

export const ResetPasswordResponse = {
    encode(message: ResetPasswordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.password !== '') {
            writer.uint32(10).string(message.password);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResetPasswordResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResetPasswordResponse } as ResetPasswordResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResetPasswordResponse {
        const message = { ...baseResetPasswordResponse } as ResetPasswordResponse;
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : '';
        return message;
    },

    toJSON(message: ResetPasswordResponse): unknown {
        const obj: any = {};
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResetPasswordResponse>, I>>(
        object: I,
    ): ResetPasswordResponse {
        const message = { ...baseResetPasswordResponse } as ResetPasswordResponse;
        message.password = object.password ?? '';
        return message;
    },
};

const baseRestartRequest: object = { desktopId: '' };

export const RestartRequest = {
    encode(message: RestartRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.desktopId !== '') {
            writer.uint32(10).string(message.desktopId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RestartRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRestartRequest } as RestartRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktopId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RestartRequest {
        const message = { ...baseRestartRequest } as RestartRequest;
        message.desktopId =
            object.desktopId !== undefined && object.desktopId !== null
                ? String(object.desktopId)
                : '';
        return message;
    },

    toJSON(message: RestartRequest): unknown {
        const obj: any = {};
        message.desktopId !== undefined && (obj.desktopId = message.desktopId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RestartRequest>, I>>(object: I): RestartRequest {
        const message = { ...baseRestartRequest } as RestartRequest;
        message.desktopId = object.desktopId ?? '';
        return message;
    },
};

const baseRestartDesktopMetadata: object = { desktopId: '' };

export const RestartDesktopMetadata = {
    encode(message: RestartDesktopMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.desktopId !== '') {
            writer.uint32(10).string(message.desktopId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RestartDesktopMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRestartDesktopMetadata } as RestartDesktopMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktopId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RestartDesktopMetadata {
        const message = { ...baseRestartDesktopMetadata } as RestartDesktopMetadata;
        message.desktopId =
            object.desktopId !== undefined && object.desktopId !== null
                ? String(object.desktopId)
                : '';
        return message;
    },

    toJSON(message: RestartDesktopMetadata): unknown {
        const obj: any = {};
        message.desktopId !== undefined && (obj.desktopId = message.desktopId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RestartDesktopMetadata>, I>>(
        object: I,
    ): RestartDesktopMetadata {
        const message = { ...baseRestartDesktopMetadata } as RestartDesktopMetadata;
        message.desktopId = object.desktopId ?? '';
        return message;
    },
};

const baseUpdateDesktopPropertiesMetadata: object = { desktopId: '' };

export const UpdateDesktopPropertiesMetadata = {
    encode(
        message: UpdateDesktopPropertiesMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.desktopId !== '') {
            writer.uint32(10).string(message.desktopId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDesktopPropertiesMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateDesktopPropertiesMetadata,
        } as UpdateDesktopPropertiesMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktopId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateDesktopPropertiesMetadata {
        const message = {
            ...baseUpdateDesktopPropertiesMetadata,
        } as UpdateDesktopPropertiesMetadata;
        message.desktopId =
            object.desktopId !== undefined && object.desktopId !== null
                ? String(object.desktopId)
                : '';
        return message;
    },

    toJSON(message: UpdateDesktopPropertiesMetadata): unknown {
        const obj: any = {};
        message.desktopId !== undefined && (obj.desktopId = message.desktopId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateDesktopPropertiesMetadata>, I>>(
        object: I,
    ): UpdateDesktopPropertiesMetadata {
        const message = {
            ...baseUpdateDesktopPropertiesMetadata,
        } as UpdateDesktopPropertiesMetadata;
        message.desktopId = object.desktopId ?? '';
        return message;
    },
};

const baseStartDesktopMetadata: object = { desktopId: '' };

export const StartDesktopMetadata = {
    encode(message: StartDesktopMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.desktopId !== '') {
            writer.uint32(10).string(message.desktopId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StartDesktopMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStartDesktopMetadata } as StartDesktopMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktopId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StartDesktopMetadata {
        const message = { ...baseStartDesktopMetadata } as StartDesktopMetadata;
        message.desktopId =
            object.desktopId !== undefined && object.desktopId !== null
                ? String(object.desktopId)
                : '';
        return message;
    },

    toJSON(message: StartDesktopMetadata): unknown {
        const obj: any = {};
        message.desktopId !== undefined && (obj.desktopId = message.desktopId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StartDesktopMetadata>, I>>(
        object: I,
    ): StartDesktopMetadata {
        const message = { ...baseStartDesktopMetadata } as StartDesktopMetadata;
        message.desktopId = object.desktopId ?? '';
        return message;
    },
};

const baseStopDesktopMetadata: object = { desktopId: '' };

export const StopDesktopMetadata = {
    encode(message: StopDesktopMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.desktopId !== '') {
            writer.uint32(10).string(message.desktopId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StopDesktopMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopDesktopMetadata } as StopDesktopMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktopId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StopDesktopMetadata {
        const message = { ...baseStopDesktopMetadata } as StopDesktopMetadata;
        message.desktopId =
            object.desktopId !== undefined && object.desktopId !== null
                ? String(object.desktopId)
                : '';
        return message;
    },

    toJSON(message: StopDesktopMetadata): unknown {
        const obj: any = {};
        message.desktopId !== undefined && (obj.desktopId = message.desktopId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StopDesktopMetadata>, I>>(
        object: I,
    ): StopDesktopMetadata {
        const message = { ...baseStopDesktopMetadata } as StopDesktopMetadata;
        message.desktopId = object.desktopId ?? '';
        return message;
    },
};

const baseUpdateDesktopMetadata: object = { desktopId: '' };

export const UpdateDesktopMetadata = {
    encode(message: UpdateDesktopMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.desktopId !== '') {
            writer.uint32(10).string(message.desktopId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDesktopMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateDesktopMetadata } as UpdateDesktopMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktopId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateDesktopMetadata {
        const message = { ...baseUpdateDesktopMetadata } as UpdateDesktopMetadata;
        message.desktopId =
            object.desktopId !== undefined && object.desktopId !== null
                ? String(object.desktopId)
                : '';
        return message;
    },

    toJSON(message: UpdateDesktopMetadata): unknown {
        const obj: any = {};
        message.desktopId !== undefined && (obj.desktopId = message.desktopId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateDesktopMetadata>, I>>(
        object: I,
    ): UpdateDesktopMetadata {
        const message = { ...baseUpdateDesktopMetadata } as UpdateDesktopMetadata;
        message.desktopId = object.desktopId ?? '';
        return message;
    },
};

/** A set of methods for managing desktop resources. */
export const DesktopServiceService = {
    /**
     * Returns the specified desktop resource.
     *
     * To get the list of available desktops, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetDesktopRequest) =>
            Buffer.from(GetDesktopRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetDesktopRequest.decode(value),
        responseSerialize: (value: Desktop) => Buffer.from(Desktop.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Desktop.decode(value),
    },
    /** Returns a RDP file for the specified desktop. */
    getRdpFile: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopService/GetRdpFile',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetRdpFileRequest) =>
            Buffer.from(GetRdpFileRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetRdpFileRequest.decode(value),
        responseSerialize: (value: RdpFileResponse) =>
            Buffer.from(RdpFileResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => RdpFileResponse.decode(value),
    },
    /** Retrieves the list of desktop resources. */
    list: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListDesktopsRequest) =>
            Buffer.from(ListDesktopsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListDesktopsRequest.decode(value),
        responseSerialize: (value: ListDesktopsResponse) =>
            Buffer.from(ListDesktopsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListDesktopsResponse.decode(value),
    },
    /** Returns list of the operations for the specified desktop. */
    listOperations: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListDesktopOperationsRequest) =>
            Buffer.from(ListDesktopOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListDesktopOperationsRequest.decode(value),
        responseSerialize: (value: ListDesktopOperationsResponse) =>
            Buffer.from(ListDesktopOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListDesktopOperationsResponse.decode(value),
    },
    /** Creates desktop in the specified folder. */
    create: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateDesktopRequest) =>
            Buffer.from(CreateDesktopRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateDesktopRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates desktop properties. */
    updateProperties: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopService/UpdateProperties',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdatePropertiesRequest) =>
            Buffer.from(UpdatePropertiesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdatePropertiesRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified desktop. */
    delete: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteDesktopRequest) =>
            Buffer.from(DeleteDesktopRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteDesktopRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Reset password */
    resetPassword: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopService/ResetPassword',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ResetPasswordRequest) =>
            Buffer.from(ResetPasswordRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ResetPasswordRequest.decode(value),
        responseSerialize: (value: ResetPasswordResponse) =>
            Buffer.from(ResetPasswordResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ResetPasswordResponse.decode(value),
    },
    /** Restart the specified desktop. */
    restart: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopService/Restart',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: RestartRequest) =>
            Buffer.from(RestartRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => RestartRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Sync desktop with group configuration */
    update: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateRequest) =>
            Buffer.from(UpdateRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Start the specified desktop. */
    start: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopService/Start',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StartRequest) => Buffer.from(StartRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StartRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Stop the specified desktop. */
    stop: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopService/Stop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StopRequest) => Buffer.from(StopRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StopRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface DesktopServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified desktop resource.
     *
     * To get the list of available desktops, make a [List] request.
     */
    get: handleUnaryCall<GetDesktopRequest, Desktop>;
    /** Returns a RDP file for the specified desktop. */
    getRdpFile: handleUnaryCall<GetRdpFileRequest, RdpFileResponse>;
    /** Retrieves the list of desktop resources. */
    list: handleUnaryCall<ListDesktopsRequest, ListDesktopsResponse>;
    /** Returns list of the operations for the specified desktop. */
    listOperations: handleUnaryCall<ListDesktopOperationsRequest, ListDesktopOperationsResponse>;
    /** Creates desktop in the specified folder. */
    create: handleUnaryCall<CreateDesktopRequest, Operation>;
    /** Updates desktop properties. */
    updateProperties: handleUnaryCall<UpdatePropertiesRequest, Operation>;
    /** Deletes the specified desktop. */
    delete: handleUnaryCall<DeleteDesktopRequest, Operation>;
    /** Reset password */
    resetPassword: handleUnaryCall<ResetPasswordRequest, ResetPasswordResponse>;
    /** Restart the specified desktop. */
    restart: handleUnaryCall<RestartRequest, Operation>;
    /** Sync desktop with group configuration */
    update: handleUnaryCall<UpdateRequest, Operation>;
    /** Start the specified desktop. */
    start: handleUnaryCall<StartRequest, Operation>;
    /** Stop the specified desktop. */
    stop: handleUnaryCall<StopRequest, Operation>;
}

export interface DesktopServiceClient extends Client {
    /**
     * Returns the specified desktop resource.
     *
     * To get the list of available desktops, make a [List] request.
     */
    get(
        request: GetDesktopRequest,
        callback: (error: ServiceError | null, response: Desktop) => void,
    ): ClientUnaryCall;
    get(
        request: GetDesktopRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Desktop) => void,
    ): ClientUnaryCall;
    get(
        request: GetDesktopRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Desktop) => void,
    ): ClientUnaryCall;
    /** Returns a RDP file for the specified desktop. */
    getRdpFile(
        request: GetRdpFileRequest,
        callback: (error: ServiceError | null, response: RdpFileResponse) => void,
    ): ClientUnaryCall;
    getRdpFile(
        request: GetRdpFileRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: RdpFileResponse) => void,
    ): ClientUnaryCall;
    getRdpFile(
        request: GetRdpFileRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: RdpFileResponse) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of desktop resources. */
    list(
        request: ListDesktopsRequest,
        callback: (error: ServiceError | null, response: ListDesktopsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListDesktopsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListDesktopsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListDesktopsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListDesktopsResponse) => void,
    ): ClientUnaryCall;
    /** Returns list of the operations for the specified desktop. */
    listOperations(
        request: ListDesktopOperationsRequest,
        callback: (error: ServiceError | null, response: ListDesktopOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListDesktopOperationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListDesktopOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListDesktopOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListDesktopOperationsResponse) => void,
    ): ClientUnaryCall;
    /** Creates desktop in the specified folder. */
    create(
        request: CreateDesktopRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateDesktopRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateDesktopRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates desktop properties. */
    updateProperties(
        request: UpdatePropertiesRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateProperties(
        request: UpdatePropertiesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateProperties(
        request: UpdatePropertiesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified desktop. */
    delete(
        request: DeleteDesktopRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteDesktopRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteDesktopRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Reset password */
    resetPassword(
        request: ResetPasswordRequest,
        callback: (error: ServiceError | null, response: ResetPasswordResponse) => void,
    ): ClientUnaryCall;
    resetPassword(
        request: ResetPasswordRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ResetPasswordResponse) => void,
    ): ClientUnaryCall;
    resetPassword(
        request: ResetPasswordRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ResetPasswordResponse) => void,
    ): ClientUnaryCall;
    /** Restart the specified desktop. */
    restart(
        request: RestartRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    restart(
        request: RestartRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    restart(
        request: RestartRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Sync desktop with group configuration */
    update(
        request: UpdateRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Start the specified desktop. */
    start(
        request: StartRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    start(
        request: StartRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    start(
        request: StartRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Stop the specified desktop. */
    stop(
        request: StopRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    stop(
        request: StopRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    stop(
        request: StopRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const DesktopServiceClient = makeGenericClientConstructor(
    DesktopServiceService,
    'yandex.cloud.clouddesktop.v1.api.DesktopService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): DesktopServiceClient;
    service: typeof DesktopServiceService;
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
