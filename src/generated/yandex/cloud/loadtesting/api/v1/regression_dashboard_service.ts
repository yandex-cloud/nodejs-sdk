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
import {
    Dashboard_Content,
    Dashboard,
} from '../../../../../yandex/cloud/loadtesting/api/v1/regression/dashboard';
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Operation } from '../../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.loadtesting.api.v1';

export interface CreateRegressionDashboardRequest {
    $type: 'yandex.cloud.loadtesting.api.v1.CreateRegressionDashboardRequest';
    /** ID of the folder to create a regression dashboard in. */
    folderId: string;
    /** Name of the dashboard. */
    name: string;
    /** Description of the dashboard. */
    description: string;
    /** Content of the dashboard. */
    content?: Dashboard_Content;
}

export interface CreateRegressionDashboardMetadata {
    $type: 'yandex.cloud.loadtesting.api.v1.CreateRegressionDashboardMetadata';
    /** ID of the dashboard that is being created. */
    dashboardId: string;
}

export interface GetRegressionDashboardRequest {
    $type: 'yandex.cloud.loadtesting.api.v1.GetRegressionDashboardRequest';
    /** ID of the dashboard to return. */
    dashboardId: string;
}

export interface DeleteRegressionDashboardRequest {
    $type: 'yandex.cloud.loadtesting.api.v1.DeleteRegressionDashboardRequest';
    /** ID of the dashboard to delete. */
    dashboardId: string;
    /** The current etag of the dashboard. */
    etag: string;
}

export interface DeleteRegressionDashboardMetadata {
    $type: 'yandex.cloud.loadtesting.api.v1.DeleteRegressionDashboardMetadata';
    /** ID of the dashboard that is being deleted. */
    dashboardId: string;
}

export interface ListRegressionDashboardsRequest {
    $type: 'yandex.cloud.loadtesting.api.v1.ListRegressionDashboardsRequest';
    /** ID of the folder to list dashboards in. */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListRegressionDashboardsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListRegressionDashboardsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters dashboards listed in the response.
     *
     * The filter expression may contain multiple field expressions joined by `AND`.
     * The field expression must specify:
     * 1. The field name.
     * 2. An operator:
     *    - `=`, `!=`, `CONTAINS`, for single values.
     *    - `IN` or `NOT IN` for lists of values.
     * 3. The value. String values must be encosed in `"`, boolean values are {`true`, `false`}, timestamp values in ISO-8601.
     *
     * Currently supported fields:
     * - `id` [yandex.cloud.loadtesting.api.v1.regression.Dashboard.id]
     *   - operators: `=`, `!=`, `IN`, `NOT IN`
     * - `name` [yandex.cloud.loadtesting.api.v1.regression.Dashboard.name]
     *   - operators: `=`, `!=`, `IN`, `NOT IN`, `CONTAINS`
     *
     * Examples:
     * - `id IN ("1", "2", "3")`
     * - `name CONTAINS "my-dashboard" AND id NOT IN ("4", "5")`
     */
    filter: string;
}

export interface ListRegressionDashboardsResponse {
    $type: 'yandex.cloud.loadtesting.api.v1.ListRegressionDashboardsResponse';
    /** List of dashboards in the specified folder. */
    dashboards: Dashboard[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListRegressionDashboardsRequest.page_size], use `next_page_token` as the value
     * for the [ListRegressionDashboardsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface UpdateRegressionDashboardRequest {
    $type: 'yandex.cloud.loadtesting.api.v1.UpdateRegressionDashboardRequest';
    /** ID of the dashboards to update. */
    dashboardId: string;
    /** The current etag of the dashboard. */
    etag: string;
    /** Field mask that specifies which attributes of the dashboard are going to be updated. */
    updateMask?: FieldMask;
    /** New name of the dashboard. */
    name: string;
    /** New description of the dashboard. */
    description: string;
    /** New content of the dashboard. */
    content?: Dashboard_Content;
}

export interface UpdateRegressionDashboardMetadata {
    $type: 'yandex.cloud.loadtesting.api.v1.UpdateRegressionDashboardMetadata';
    /** ID of the dashboard that is being updated. */
    dashboardId: string;
}

const baseCreateRegressionDashboardRequest: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.CreateRegressionDashboardRequest',
    folderId: '',
    name: '',
    description: '',
};

export const CreateRegressionDashboardRequest = {
    $type: 'yandex.cloud.loadtesting.api.v1.CreateRegressionDashboardRequest' as const,

    encode(
        message: CreateRegressionDashboardRequest,
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
        if (message.content !== undefined) {
            Dashboard_Content.encode(message.content, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateRegressionDashboardRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateRegressionDashboardRequest,
        } as CreateRegressionDashboardRequest;
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
                    message.content = Dashboard_Content.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateRegressionDashboardRequest {
        const message = {
            ...baseCreateRegressionDashboardRequest,
        } as CreateRegressionDashboardRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.content =
            object.content !== undefined && object.content !== null
                ? Dashboard_Content.fromJSON(object.content)
                : undefined;
        return message;
    },

    toJSON(message: CreateRegressionDashboardRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.content !== undefined &&
            (obj.content = message.content ? Dashboard_Content.toJSON(message.content) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateRegressionDashboardRequest>, I>>(
        object: I,
    ): CreateRegressionDashboardRequest {
        const message = {
            ...baseCreateRegressionDashboardRequest,
        } as CreateRegressionDashboardRequest;
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.content =
            object.content !== undefined && object.content !== null
                ? Dashboard_Content.fromPartial(object.content)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(CreateRegressionDashboardRequest.$type, CreateRegressionDashboardRequest);

const baseCreateRegressionDashboardMetadata: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.CreateRegressionDashboardMetadata',
    dashboardId: '',
};

export const CreateRegressionDashboardMetadata = {
    $type: 'yandex.cloud.loadtesting.api.v1.CreateRegressionDashboardMetadata' as const,

    encode(
        message: CreateRegressionDashboardMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.dashboardId !== '') {
            writer.uint32(10).string(message.dashboardId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateRegressionDashboardMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateRegressionDashboardMetadata,
        } as CreateRegressionDashboardMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dashboardId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateRegressionDashboardMetadata {
        const message = {
            ...baseCreateRegressionDashboardMetadata,
        } as CreateRegressionDashboardMetadata;
        message.dashboardId =
            object.dashboardId !== undefined && object.dashboardId !== null
                ? String(object.dashboardId)
                : '';
        return message;
    },

    toJSON(message: CreateRegressionDashboardMetadata): unknown {
        const obj: any = {};
        message.dashboardId !== undefined && (obj.dashboardId = message.dashboardId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateRegressionDashboardMetadata>, I>>(
        object: I,
    ): CreateRegressionDashboardMetadata {
        const message = {
            ...baseCreateRegressionDashboardMetadata,
        } as CreateRegressionDashboardMetadata;
        message.dashboardId = object.dashboardId ?? '';
        return message;
    },
};

messageTypeRegistry.set(CreateRegressionDashboardMetadata.$type, CreateRegressionDashboardMetadata);

const baseGetRegressionDashboardRequest: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.GetRegressionDashboardRequest',
    dashboardId: '',
};

export const GetRegressionDashboardRequest = {
    $type: 'yandex.cloud.loadtesting.api.v1.GetRegressionDashboardRequest' as const,

    encode(
        message: GetRegressionDashboardRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.dashboardId !== '') {
            writer.uint32(10).string(message.dashboardId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetRegressionDashboardRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetRegressionDashboardRequest } as GetRegressionDashboardRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dashboardId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetRegressionDashboardRequest {
        const message = { ...baseGetRegressionDashboardRequest } as GetRegressionDashboardRequest;
        message.dashboardId =
            object.dashboardId !== undefined && object.dashboardId !== null
                ? String(object.dashboardId)
                : '';
        return message;
    },

    toJSON(message: GetRegressionDashboardRequest): unknown {
        const obj: any = {};
        message.dashboardId !== undefined && (obj.dashboardId = message.dashboardId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetRegressionDashboardRequest>, I>>(
        object: I,
    ): GetRegressionDashboardRequest {
        const message = { ...baseGetRegressionDashboardRequest } as GetRegressionDashboardRequest;
        message.dashboardId = object.dashboardId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetRegressionDashboardRequest.$type, GetRegressionDashboardRequest);

const baseDeleteRegressionDashboardRequest: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.DeleteRegressionDashboardRequest',
    dashboardId: '',
    etag: '',
};

export const DeleteRegressionDashboardRequest = {
    $type: 'yandex.cloud.loadtesting.api.v1.DeleteRegressionDashboardRequest' as const,

    encode(
        message: DeleteRegressionDashboardRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.dashboardId !== '') {
            writer.uint32(10).string(message.dashboardId);
        }
        if (message.etag !== '') {
            writer.uint32(18).string(message.etag);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRegressionDashboardRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteRegressionDashboardRequest,
        } as DeleteRegressionDashboardRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dashboardId = reader.string();
                    break;
                case 2:
                    message.etag = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteRegressionDashboardRequest {
        const message = {
            ...baseDeleteRegressionDashboardRequest,
        } as DeleteRegressionDashboardRequest;
        message.dashboardId =
            object.dashboardId !== undefined && object.dashboardId !== null
                ? String(object.dashboardId)
                : '';
        message.etag = object.etag !== undefined && object.etag !== null ? String(object.etag) : '';
        return message;
    },

    toJSON(message: DeleteRegressionDashboardRequest): unknown {
        const obj: any = {};
        message.dashboardId !== undefined && (obj.dashboardId = message.dashboardId);
        message.etag !== undefined && (obj.etag = message.etag);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteRegressionDashboardRequest>, I>>(
        object: I,
    ): DeleteRegressionDashboardRequest {
        const message = {
            ...baseDeleteRegressionDashboardRequest,
        } as DeleteRegressionDashboardRequest;
        message.dashboardId = object.dashboardId ?? '';
        message.etag = object.etag ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteRegressionDashboardRequest.$type, DeleteRegressionDashboardRequest);

const baseDeleteRegressionDashboardMetadata: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.DeleteRegressionDashboardMetadata',
    dashboardId: '',
};

export const DeleteRegressionDashboardMetadata = {
    $type: 'yandex.cloud.loadtesting.api.v1.DeleteRegressionDashboardMetadata' as const,

    encode(
        message: DeleteRegressionDashboardMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.dashboardId !== '') {
            writer.uint32(10).string(message.dashboardId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRegressionDashboardMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteRegressionDashboardMetadata,
        } as DeleteRegressionDashboardMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dashboardId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteRegressionDashboardMetadata {
        const message = {
            ...baseDeleteRegressionDashboardMetadata,
        } as DeleteRegressionDashboardMetadata;
        message.dashboardId =
            object.dashboardId !== undefined && object.dashboardId !== null
                ? String(object.dashboardId)
                : '';
        return message;
    },

    toJSON(message: DeleteRegressionDashboardMetadata): unknown {
        const obj: any = {};
        message.dashboardId !== undefined && (obj.dashboardId = message.dashboardId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteRegressionDashboardMetadata>, I>>(
        object: I,
    ): DeleteRegressionDashboardMetadata {
        const message = {
            ...baseDeleteRegressionDashboardMetadata,
        } as DeleteRegressionDashboardMetadata;
        message.dashboardId = object.dashboardId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteRegressionDashboardMetadata.$type, DeleteRegressionDashboardMetadata);

const baseListRegressionDashboardsRequest: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.ListRegressionDashboardsRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListRegressionDashboardsRequest = {
    $type: 'yandex.cloud.loadtesting.api.v1.ListRegressionDashboardsRequest' as const,

    encode(
        message: ListRegressionDashboardsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
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
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListRegressionDashboardsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListRegressionDashboardsRequest,
        } as ListRegressionDashboardsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListRegressionDashboardsRequest {
        const message = {
            ...baseListRegressionDashboardsRequest,
        } as ListRegressionDashboardsRequest;
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

    toJSON(message: ListRegressionDashboardsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListRegressionDashboardsRequest>, I>>(
        object: I,
    ): ListRegressionDashboardsRequest {
        const message = {
            ...baseListRegressionDashboardsRequest,
        } as ListRegressionDashboardsRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListRegressionDashboardsRequest.$type, ListRegressionDashboardsRequest);

const baseListRegressionDashboardsResponse: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.ListRegressionDashboardsResponse',
    nextPageToken: '',
};

export const ListRegressionDashboardsResponse = {
    $type: 'yandex.cloud.loadtesting.api.v1.ListRegressionDashboardsResponse' as const,

    encode(
        message: ListRegressionDashboardsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.dashboards) {
            Dashboard.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListRegressionDashboardsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListRegressionDashboardsResponse,
        } as ListRegressionDashboardsResponse;
        message.dashboards = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dashboards.push(Dashboard.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListRegressionDashboardsResponse {
        const message = {
            ...baseListRegressionDashboardsResponse,
        } as ListRegressionDashboardsResponse;
        message.dashboards = (object.dashboards ?? []).map((e: any) => Dashboard.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListRegressionDashboardsResponse): unknown {
        const obj: any = {};
        if (message.dashboards) {
            obj.dashboards = message.dashboards.map((e) => (e ? Dashboard.toJSON(e) : undefined));
        } else {
            obj.dashboards = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListRegressionDashboardsResponse>, I>>(
        object: I,
    ): ListRegressionDashboardsResponse {
        const message = {
            ...baseListRegressionDashboardsResponse,
        } as ListRegressionDashboardsResponse;
        message.dashboards = object.dashboards?.map((e) => Dashboard.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListRegressionDashboardsResponse.$type, ListRegressionDashboardsResponse);

const baseUpdateRegressionDashboardRequest: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.UpdateRegressionDashboardRequest',
    dashboardId: '',
    etag: '',
    name: '',
    description: '',
};

export const UpdateRegressionDashboardRequest = {
    $type: 'yandex.cloud.loadtesting.api.v1.UpdateRegressionDashboardRequest' as const,

    encode(
        message: UpdateRegressionDashboardRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.dashboardId !== '') {
            writer.uint32(10).string(message.dashboardId);
        }
        if (message.etag !== '') {
            writer.uint32(18).string(message.etag);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        if (message.content !== undefined) {
            Dashboard_Content.encode(message.content, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRegressionDashboardRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateRegressionDashboardRequest,
        } as UpdateRegressionDashboardRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dashboardId = reader.string();
                    break;
                case 2:
                    message.etag = reader.string();
                    break;
                case 3:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.content = Dashboard_Content.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateRegressionDashboardRequest {
        const message = {
            ...baseUpdateRegressionDashboardRequest,
        } as UpdateRegressionDashboardRequest;
        message.dashboardId =
            object.dashboardId !== undefined && object.dashboardId !== null
                ? String(object.dashboardId)
                : '';
        message.etag = object.etag !== undefined && object.etag !== null ? String(object.etag) : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.content =
            object.content !== undefined && object.content !== null
                ? Dashboard_Content.fromJSON(object.content)
                : undefined;
        return message;
    },

    toJSON(message: UpdateRegressionDashboardRequest): unknown {
        const obj: any = {};
        message.dashboardId !== undefined && (obj.dashboardId = message.dashboardId);
        message.etag !== undefined && (obj.etag = message.etag);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.content !== undefined &&
            (obj.content = message.content ? Dashboard_Content.toJSON(message.content) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateRegressionDashboardRequest>, I>>(
        object: I,
    ): UpdateRegressionDashboardRequest {
        const message = {
            ...baseUpdateRegressionDashboardRequest,
        } as UpdateRegressionDashboardRequest;
        message.dashboardId = object.dashboardId ?? '';
        message.etag = object.etag ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.content =
            object.content !== undefined && object.content !== null
                ? Dashboard_Content.fromPartial(object.content)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(UpdateRegressionDashboardRequest.$type, UpdateRegressionDashboardRequest);

const baseUpdateRegressionDashboardMetadata: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.UpdateRegressionDashboardMetadata',
    dashboardId: '',
};

export const UpdateRegressionDashboardMetadata = {
    $type: 'yandex.cloud.loadtesting.api.v1.UpdateRegressionDashboardMetadata' as const,

    encode(
        message: UpdateRegressionDashboardMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.dashboardId !== '') {
            writer.uint32(10).string(message.dashboardId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRegressionDashboardMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateRegressionDashboardMetadata,
        } as UpdateRegressionDashboardMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dashboardId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateRegressionDashboardMetadata {
        const message = {
            ...baseUpdateRegressionDashboardMetadata,
        } as UpdateRegressionDashboardMetadata;
        message.dashboardId =
            object.dashboardId !== undefined && object.dashboardId !== null
                ? String(object.dashboardId)
                : '';
        return message;
    },

    toJSON(message: UpdateRegressionDashboardMetadata): unknown {
        const obj: any = {};
        message.dashboardId !== undefined && (obj.dashboardId = message.dashboardId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateRegressionDashboardMetadata>, I>>(
        object: I,
    ): UpdateRegressionDashboardMetadata {
        const message = {
            ...baseUpdateRegressionDashboardMetadata,
        } as UpdateRegressionDashboardMetadata;
        message.dashboardId = object.dashboardId ?? '';
        return message;
    },
};

messageTypeRegistry.set(UpdateRegressionDashboardMetadata.$type, UpdateRegressionDashboardMetadata);

/** A set of methods for managing Load Testing Regression Dashboards. */
export const RegressionDashboardServiceService = {
    /** Creates a regression dashboard in the specified folder. */
    create: {
        path: '/yandex.cloud.loadtesting.api.v1.RegressionDashboardService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateRegressionDashboardRequest) =>
            Buffer.from(CreateRegressionDashboardRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateRegressionDashboardRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Returns the specified regression dashboard.
     *
     * To get the list of all available regression dashboards, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.loadtesting.api.v1.RegressionDashboardService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetRegressionDashboardRequest) =>
            Buffer.from(GetRegressionDashboardRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetRegressionDashboardRequest.decode(value),
        responseSerialize: (value: Dashboard) => Buffer.from(Dashboard.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Dashboard.decode(value),
    },
    /** Retrieves the list of regression dashboards in the specified folder. */
    list: {
        path: '/yandex.cloud.loadtesting.api.v1.RegressionDashboardService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListRegressionDashboardsRequest) =>
            Buffer.from(ListRegressionDashboardsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListRegressionDashboardsRequest.decode(value),
        responseSerialize: (value: ListRegressionDashboardsResponse) =>
            Buffer.from(ListRegressionDashboardsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListRegressionDashboardsResponse.decode(value),
    },
    /** Deletes the specified regression dashboard. */
    delete: {
        path: '/yandex.cloud.loadtesting.api.v1.RegressionDashboardService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteRegressionDashboardRequest) =>
            Buffer.from(DeleteRegressionDashboardRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteRegressionDashboardRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified regression dashboard. */
    update: {
        path: '/yandex.cloud.loadtesting.api.v1.RegressionDashboardService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateRegressionDashboardRequest) =>
            Buffer.from(UpdateRegressionDashboardRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateRegressionDashboardRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface RegressionDashboardServiceServer extends UntypedServiceImplementation {
    /** Creates a regression dashboard in the specified folder. */
    create: handleUnaryCall<CreateRegressionDashboardRequest, Operation>;
    /**
     * Returns the specified regression dashboard.
     *
     * To get the list of all available regression dashboards, make a [List] request.
     */
    get: handleUnaryCall<GetRegressionDashboardRequest, Dashboard>;
    /** Retrieves the list of regression dashboards in the specified folder. */
    list: handleUnaryCall<ListRegressionDashboardsRequest, ListRegressionDashboardsResponse>;
    /** Deletes the specified regression dashboard. */
    delete: handleUnaryCall<DeleteRegressionDashboardRequest, Operation>;
    /** Updates the specified regression dashboard. */
    update: handleUnaryCall<UpdateRegressionDashboardRequest, Operation>;
}

export interface RegressionDashboardServiceClient extends Client {
    /** Creates a regression dashboard in the specified folder. */
    create(
        request: CreateRegressionDashboardRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateRegressionDashboardRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateRegressionDashboardRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Returns the specified regression dashboard.
     *
     * To get the list of all available regression dashboards, make a [List] request.
     */
    get(
        request: GetRegressionDashboardRequest,
        callback: (error: ServiceError | null, response: Dashboard) => void,
    ): ClientUnaryCall;
    get(
        request: GetRegressionDashboardRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Dashboard) => void,
    ): ClientUnaryCall;
    get(
        request: GetRegressionDashboardRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Dashboard) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of regression dashboards in the specified folder. */
    list(
        request: ListRegressionDashboardsRequest,
        callback: (error: ServiceError | null, response: ListRegressionDashboardsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListRegressionDashboardsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListRegressionDashboardsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListRegressionDashboardsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListRegressionDashboardsResponse) => void,
    ): ClientUnaryCall;
    /** Deletes the specified regression dashboard. */
    delete(
        request: DeleteRegressionDashboardRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteRegressionDashboardRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteRegressionDashboardRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified regression dashboard. */
    update(
        request: UpdateRegressionDashboardRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateRegressionDashboardRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateRegressionDashboardRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const RegressionDashboardServiceClient = makeGenericClientConstructor(
    RegressionDashboardServiceService,
    'yandex.cloud.loadtesting.api.v1.RegressionDashboardService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): RegressionDashboardServiceClient;
    service: typeof RegressionDashboardServiceService;
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
