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
import { LogOptions, McpGatewayPreview, McpTool, McpGateway } from './mcp_gateway';
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Operation } from '../../../operation/operation';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../access/access';

export const protobufPackage = 'yandex.cloud.serverless.mcpgateway.v1';

export interface GetMcpGatewayRequest {
    /** ID of the MCP Gateway. */
    mcpGatewayId: string;
}

export interface ListMcpGatewayRequest {
    /** ID of the folder to list MCP Gateways in. */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `pageSize`, the service returns a [ListWorkflowsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListWorkflowsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters functions listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can only be applied to following fields: name, created_at.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z]([-a-z0-9]{0,61}[a-z0-9])?`.
     * Example of a filter: `name=my-mcp-gateway`.
     */
    filter: string;
}

export interface ListMcpGatewayResponse {
    /** List of MCP Gateways. */
    gateways: McpGatewayPreview[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListMcpGatewayRequest.page_size], use `next_page_token` as the value
     * for the [ListMcpGatewayRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateMcpGatewayRequest {
    /** ID of the folder to create the MCP Gateway in. */
    folderId: string;
    /** Name of the MCP Gateway. */
    name: string;
    /** Description of the MCP Gateway. */
    description: string;
    /** MCP Gateway labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** List of MCP tools. */
    tools: McpTool[];
    /** Logging options for the MCP Gateway. */
    logOptions?: LogOptions;
    /** Service account ID for the MCP Gateway. */
    serviceAccountId: string;
    /** Network ID for the MCP Gateway. */
    networkId: string;
    /** Flag indicating if the MCP Gateway is publicly accessible. */
    public: boolean;
}

export interface CreateMcpGatewayRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateMcpGatewayMetadata {
    /** ID of the MCP Gateway being created. */
    mcpGatewayId: string;
    /** ID of the folder containing the MCP Gateway. */
    folderId: string;
}

export interface UpdateMcpGatewayRequest {
    /** ID of the MCP Gateway to update. */
    mcpGatewayId: string;
    /** Updated name of the MCP Gateway. */
    name: string;
    /** Updated description of the MCP Gateway. */
    description: string;
    /** Updated MCP Gateway labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Updated list of MCP tools associated with the gateway. */
    tools: McpTool[];
    /** Updated logging options for the MCP Gateway. */
    logOptions?: LogOptions;
    /** Updated service account ID for the MCP Gateway. */
    serviceAccountId: string;
    /** Updated network ID for the MCP Gateway. */
    networkId: string;
    /** Field mask specifying which fields to update. */
    updateMask?: FieldMask;
    /** Updated flag indicating if the MCP Gateway is publicly accessible. */
    public: boolean;
}

export interface UpdateMcpGatewayRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateMcpGatewayMetadata {
    /** ID of the MCP Gateway being updated. */
    mcpGatewayId: string;
    /** ID of the folder containing the MCP Gateway. */
    folderId: string;
}

export interface DeleteMcpGatewayRequest {
    /** ID of the MCP Gateway to delete. */
    mcpGatewayId: string;
}

export interface DeleteMcpGatewayMetadata {
    /** ID of the MCP Gateway being deleted. */
    mcpGatewayId: string;
}

export interface ListOperationsRequest {
    /** ID of the MCP Gateway to list operations for. */
    mcpGatewayId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `pageSize`, the service returns a [ListOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can be applied to the [operation.Operation.done], [operation.Operation.created_by] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Examples of a filter: `done=false`, `created_by='John.Doe'`.
     */
    filter: string;
}

export interface ListOperationsResponse {
    /** List of operations for the specified MCP Gateway. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetMcpGatewayRequest: object = { mcpGatewayId: '' };

export const GetMcpGatewayRequest: {
    encode(message: GetMcpGatewayRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMcpGatewayRequest;
    fromJSON(object: any): GetMcpGatewayRequest;
    toJSON(message: GetMcpGatewayRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetMcpGatewayRequest>, I>>(object: I): GetMcpGatewayRequest;
} = {
    encode(message: GetMcpGatewayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mcpGatewayId !== '') {
            writer.uint32(10).string(message.mcpGatewayId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetMcpGatewayRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetMcpGatewayRequest } as GetMcpGatewayRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mcpGatewayId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetMcpGatewayRequest {
        const message = { ...baseGetMcpGatewayRequest } as GetMcpGatewayRequest;
        message.mcpGatewayId =
            object.mcpGatewayId !== undefined && object.mcpGatewayId !== null
                ? String(object.mcpGatewayId)
                : '';
        return message;
    },

    toJSON(message: GetMcpGatewayRequest): unknown {
        const obj: any = {};
        message.mcpGatewayId !== undefined && (obj.mcpGatewayId = message.mcpGatewayId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetMcpGatewayRequest>, I>>(
        object: I,
    ): GetMcpGatewayRequest {
        const message = { ...baseGetMcpGatewayRequest } as GetMcpGatewayRequest;
        message.mcpGatewayId = object.mcpGatewayId ?? '';
        return message;
    },
};

const baseListMcpGatewayRequest: object = { folderId: '', pageSize: 0, pageToken: '', filter: '' };

export const ListMcpGatewayRequest: {
    encode(message: ListMcpGatewayRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMcpGatewayRequest;
    fromJSON(object: any): ListMcpGatewayRequest;
    toJSON(message: ListMcpGatewayRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListMcpGatewayRequest>, I>>(object: I): ListMcpGatewayRequest;
} = {
    encode(message: ListMcpGatewayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListMcpGatewayRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListMcpGatewayRequest } as ListMcpGatewayRequest;
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

    fromJSON(object: any): ListMcpGatewayRequest {
        const message = { ...baseListMcpGatewayRequest } as ListMcpGatewayRequest;
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

    toJSON(message: ListMcpGatewayRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListMcpGatewayRequest>, I>>(
        object: I,
    ): ListMcpGatewayRequest {
        const message = { ...baseListMcpGatewayRequest } as ListMcpGatewayRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListMcpGatewayResponse: object = { nextPageToken: '' };

export const ListMcpGatewayResponse: {
    encode(message: ListMcpGatewayResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMcpGatewayResponse;
    fromJSON(object: any): ListMcpGatewayResponse;
    toJSON(message: ListMcpGatewayResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListMcpGatewayResponse>, I>>(object: I): ListMcpGatewayResponse;
} = {
    encode(message: ListMcpGatewayResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.gateways) {
            McpGatewayPreview.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListMcpGatewayResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListMcpGatewayResponse } as ListMcpGatewayResponse;
        message.gateways = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gateways.push(McpGatewayPreview.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListMcpGatewayResponse {
        const message = { ...baseListMcpGatewayResponse } as ListMcpGatewayResponse;
        message.gateways = (object.gateways ?? []).map((e: any) => McpGatewayPreview.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListMcpGatewayResponse): unknown {
        const obj: any = {};
        if (message.gateways) {
            obj.gateways = message.gateways.map((e) =>
                e ? McpGatewayPreview.toJSON(e) : undefined,
            );
        } else {
            obj.gateways = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListMcpGatewayResponse>, I>>(
        object: I,
    ): ListMcpGatewayResponse {
        const message = { ...baseListMcpGatewayResponse } as ListMcpGatewayResponse;
        message.gateways = object.gateways?.map((e) => McpGatewayPreview.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateMcpGatewayRequest: object = {
    folderId: '',
    name: '',
    description: '',
    serviceAccountId: '',
    networkId: '',
    public: false,
};

export const CreateMcpGatewayRequest: {
    encode(message: CreateMcpGatewayRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateMcpGatewayRequest;
    fromJSON(object: any): CreateMcpGatewayRequest;
    toJSON(message: CreateMcpGatewayRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateMcpGatewayRequest>, I>>(object: I): CreateMcpGatewayRequest;
} = {
    encode(message: CreateMcpGatewayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
            CreateMcpGatewayRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        for (const v of message.tools) {
            McpTool.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        if (message.logOptions !== undefined) {
            LogOptions.encode(message.logOptions, writer.uint32(50).fork()).ldelim();
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(58).string(message.serviceAccountId);
        }
        if (message.networkId !== '') {
            writer.uint32(66).string(message.networkId);
        }
        if (message.public === true) {
            writer.uint32(72).bool(message.public);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateMcpGatewayRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateMcpGatewayRequest } as CreateMcpGatewayRequest;
        message.labels = {};
        message.tools = [];
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
                    const entry4 = CreateMcpGatewayRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.tools.push(McpTool.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.logOptions = LogOptions.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.serviceAccountId = reader.string();
                    break;
                case 8:
                    message.networkId = reader.string();
                    break;
                case 9:
                    message.public = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateMcpGatewayRequest {
        const message = { ...baseCreateMcpGatewayRequest } as CreateMcpGatewayRequest;
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
        message.tools = (object.tools ?? []).map((e: any) => McpTool.fromJSON(e));
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? LogOptions.fromJSON(object.logOptions)
                : undefined;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : '';
        message.public =
            object.public !== undefined && object.public !== null ? Boolean(object.public) : false;
        return message;
    },

    toJSON(message: CreateMcpGatewayRequest): unknown {
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
        if (message.tools) {
            obj.tools = message.tools.map((e) => (e ? McpTool.toJSON(e) : undefined));
        } else {
            obj.tools = [];
        }
        message.logOptions !== undefined &&
            (obj.logOptions = message.logOptions
                ? LogOptions.toJSON(message.logOptions)
                : undefined);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.public !== undefined && (obj.public = message.public);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateMcpGatewayRequest>, I>>(
        object: I,
    ): CreateMcpGatewayRequest {
        const message = { ...baseCreateMcpGatewayRequest } as CreateMcpGatewayRequest;
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
        message.tools = object.tools?.map((e) => McpTool.fromPartial(e)) || [];
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? LogOptions.fromPartial(object.logOptions)
                : undefined;
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.networkId = object.networkId ?? '';
        message.public = object.public ?? false;
        return message;
    },
};

const baseCreateMcpGatewayRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateMcpGatewayRequest_LabelsEntry: {
    encode(message: CreateMcpGatewayRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateMcpGatewayRequest_LabelsEntry;
    fromJSON(object: any): CreateMcpGatewayRequest_LabelsEntry;
    toJSON(message: CreateMcpGatewayRequest_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateMcpGatewayRequest_LabelsEntry>, I>>(object: I): CreateMcpGatewayRequest_LabelsEntry;
} = {
    encode(
        message: CreateMcpGatewayRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateMcpGatewayRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateMcpGatewayRequest_LabelsEntry,
        } as CreateMcpGatewayRequest_LabelsEntry;
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

    fromJSON(object: any): CreateMcpGatewayRequest_LabelsEntry {
        const message = {
            ...baseCreateMcpGatewayRequest_LabelsEntry,
        } as CreateMcpGatewayRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateMcpGatewayRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateMcpGatewayRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateMcpGatewayRequest_LabelsEntry {
        const message = {
            ...baseCreateMcpGatewayRequest_LabelsEntry,
        } as CreateMcpGatewayRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateMcpGatewayMetadata: object = { mcpGatewayId: '', folderId: '' };

export const CreateMcpGatewayMetadata: {
    encode(message: CreateMcpGatewayMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateMcpGatewayMetadata;
    fromJSON(object: any): CreateMcpGatewayMetadata;
    toJSON(message: CreateMcpGatewayMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateMcpGatewayMetadata>, I>>(object: I): CreateMcpGatewayMetadata;
} = {
    encode(
        message: CreateMcpGatewayMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.mcpGatewayId !== '') {
            writer.uint32(10).string(message.mcpGatewayId);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateMcpGatewayMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateMcpGatewayMetadata } as CreateMcpGatewayMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mcpGatewayId = reader.string();
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

    fromJSON(object: any): CreateMcpGatewayMetadata {
        const message = { ...baseCreateMcpGatewayMetadata } as CreateMcpGatewayMetadata;
        message.mcpGatewayId =
            object.mcpGatewayId !== undefined && object.mcpGatewayId !== null
                ? String(object.mcpGatewayId)
                : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        return message;
    },

    toJSON(message: CreateMcpGatewayMetadata): unknown {
        const obj: any = {};
        message.mcpGatewayId !== undefined && (obj.mcpGatewayId = message.mcpGatewayId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateMcpGatewayMetadata>, I>>(
        object: I,
    ): CreateMcpGatewayMetadata {
        const message = { ...baseCreateMcpGatewayMetadata } as CreateMcpGatewayMetadata;
        message.mcpGatewayId = object.mcpGatewayId ?? '';
        message.folderId = object.folderId ?? '';
        return message;
    },
};

const baseUpdateMcpGatewayRequest: object = {
    mcpGatewayId: '',
    name: '',
    description: '',
    serviceAccountId: '',
    networkId: '',
    public: false,
};

export const UpdateMcpGatewayRequest: {
    encode(message: UpdateMcpGatewayRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMcpGatewayRequest;
    fromJSON(object: any): UpdateMcpGatewayRequest;
    toJSON(message: UpdateMcpGatewayRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateMcpGatewayRequest>, I>>(object: I): UpdateMcpGatewayRequest;
} = {
    encode(message: UpdateMcpGatewayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mcpGatewayId !== '') {
            writer.uint32(10).string(message.mcpGatewayId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateMcpGatewayRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        for (const v of message.tools) {
            McpTool.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        if (message.logOptions !== undefined) {
            LogOptions.encode(message.logOptions, writer.uint32(50).fork()).ldelim();
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(58).string(message.serviceAccountId);
        }
        if (message.networkId !== '') {
            writer.uint32(66).string(message.networkId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(74).fork()).ldelim();
        }
        if (message.public === true) {
            writer.uint32(80).bool(message.public);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMcpGatewayRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateMcpGatewayRequest } as UpdateMcpGatewayRequest;
        message.labels = {};
        message.tools = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mcpGatewayId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = UpdateMcpGatewayRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.tools.push(McpTool.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.logOptions = LogOptions.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.serviceAccountId = reader.string();
                    break;
                case 8:
                    message.networkId = reader.string();
                    break;
                case 9:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.public = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateMcpGatewayRequest {
        const message = { ...baseUpdateMcpGatewayRequest } as UpdateMcpGatewayRequest;
        message.mcpGatewayId =
            object.mcpGatewayId !== undefined && object.mcpGatewayId !== null
                ? String(object.mcpGatewayId)
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
        message.tools = (object.tools ?? []).map((e: any) => McpTool.fromJSON(e));
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? LogOptions.fromJSON(object.logOptions)
                : undefined;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.public =
            object.public !== undefined && object.public !== null ? Boolean(object.public) : false;
        return message;
    },

    toJSON(message: UpdateMcpGatewayRequest): unknown {
        const obj: any = {};
        message.mcpGatewayId !== undefined && (obj.mcpGatewayId = message.mcpGatewayId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        if (message.tools) {
            obj.tools = message.tools.map((e) => (e ? McpTool.toJSON(e) : undefined));
        } else {
            obj.tools = [];
        }
        message.logOptions !== undefined &&
            (obj.logOptions = message.logOptions
                ? LogOptions.toJSON(message.logOptions)
                : undefined);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.public !== undefined && (obj.public = message.public);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateMcpGatewayRequest>, I>>(
        object: I,
    ): UpdateMcpGatewayRequest {
        const message = { ...baseUpdateMcpGatewayRequest } as UpdateMcpGatewayRequest;
        message.mcpGatewayId = object.mcpGatewayId ?? '';
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
        message.tools = object.tools?.map((e) => McpTool.fromPartial(e)) || [];
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? LogOptions.fromPartial(object.logOptions)
                : undefined;
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.networkId = object.networkId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.public = object.public ?? false;
        return message;
    },
};

const baseUpdateMcpGatewayRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateMcpGatewayRequest_LabelsEntry: {
    encode(message: UpdateMcpGatewayRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMcpGatewayRequest_LabelsEntry;
    fromJSON(object: any): UpdateMcpGatewayRequest_LabelsEntry;
    toJSON(message: UpdateMcpGatewayRequest_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateMcpGatewayRequest_LabelsEntry>, I>>(object: I): UpdateMcpGatewayRequest_LabelsEntry;
} = {
    encode(
        message: UpdateMcpGatewayRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMcpGatewayRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateMcpGatewayRequest_LabelsEntry,
        } as UpdateMcpGatewayRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateMcpGatewayRequest_LabelsEntry {
        const message = {
            ...baseUpdateMcpGatewayRequest_LabelsEntry,
        } as UpdateMcpGatewayRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateMcpGatewayRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateMcpGatewayRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateMcpGatewayRequest_LabelsEntry {
        const message = {
            ...baseUpdateMcpGatewayRequest_LabelsEntry,
        } as UpdateMcpGatewayRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateMcpGatewayMetadata: object = { mcpGatewayId: '', folderId: '' };

export const UpdateMcpGatewayMetadata: {
    encode(message: UpdateMcpGatewayMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMcpGatewayMetadata;
    fromJSON(object: any): UpdateMcpGatewayMetadata;
    toJSON(message: UpdateMcpGatewayMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateMcpGatewayMetadata>, I>>(object: I): UpdateMcpGatewayMetadata;
} = {
    encode(
        message: UpdateMcpGatewayMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.mcpGatewayId !== '') {
            writer.uint32(10).string(message.mcpGatewayId);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMcpGatewayMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateMcpGatewayMetadata } as UpdateMcpGatewayMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mcpGatewayId = reader.string();
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

    fromJSON(object: any): UpdateMcpGatewayMetadata {
        const message = { ...baseUpdateMcpGatewayMetadata } as UpdateMcpGatewayMetadata;
        message.mcpGatewayId =
            object.mcpGatewayId !== undefined && object.mcpGatewayId !== null
                ? String(object.mcpGatewayId)
                : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        return message;
    },

    toJSON(message: UpdateMcpGatewayMetadata): unknown {
        const obj: any = {};
        message.mcpGatewayId !== undefined && (obj.mcpGatewayId = message.mcpGatewayId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateMcpGatewayMetadata>, I>>(
        object: I,
    ): UpdateMcpGatewayMetadata {
        const message = { ...baseUpdateMcpGatewayMetadata } as UpdateMcpGatewayMetadata;
        message.mcpGatewayId = object.mcpGatewayId ?? '';
        message.folderId = object.folderId ?? '';
        return message;
    },
};

const baseDeleteMcpGatewayRequest: object = { mcpGatewayId: '' };

export const DeleteMcpGatewayRequest: {
    encode(message: DeleteMcpGatewayRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMcpGatewayRequest;
    fromJSON(object: any): DeleteMcpGatewayRequest;
    toJSON(message: DeleteMcpGatewayRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteMcpGatewayRequest>, I>>(object: I): DeleteMcpGatewayRequest;
} = {
    encode(message: DeleteMcpGatewayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mcpGatewayId !== '') {
            writer.uint32(10).string(message.mcpGatewayId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMcpGatewayRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteMcpGatewayRequest } as DeleteMcpGatewayRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mcpGatewayId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteMcpGatewayRequest {
        const message = { ...baseDeleteMcpGatewayRequest } as DeleteMcpGatewayRequest;
        message.mcpGatewayId =
            object.mcpGatewayId !== undefined && object.mcpGatewayId !== null
                ? String(object.mcpGatewayId)
                : '';
        return message;
    },

    toJSON(message: DeleteMcpGatewayRequest): unknown {
        const obj: any = {};
        message.mcpGatewayId !== undefined && (obj.mcpGatewayId = message.mcpGatewayId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteMcpGatewayRequest>, I>>(
        object: I,
    ): DeleteMcpGatewayRequest {
        const message = { ...baseDeleteMcpGatewayRequest } as DeleteMcpGatewayRequest;
        message.mcpGatewayId = object.mcpGatewayId ?? '';
        return message;
    },
};

const baseDeleteMcpGatewayMetadata: object = { mcpGatewayId: '' };

export const DeleteMcpGatewayMetadata: {
    encode(message: DeleteMcpGatewayMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMcpGatewayMetadata;
    fromJSON(object: any): DeleteMcpGatewayMetadata;
    toJSON(message: DeleteMcpGatewayMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteMcpGatewayMetadata>, I>>(object: I): DeleteMcpGatewayMetadata;
} = {
    encode(
        message: DeleteMcpGatewayMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.mcpGatewayId !== '') {
            writer.uint32(10).string(message.mcpGatewayId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMcpGatewayMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteMcpGatewayMetadata } as DeleteMcpGatewayMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mcpGatewayId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteMcpGatewayMetadata {
        const message = { ...baseDeleteMcpGatewayMetadata } as DeleteMcpGatewayMetadata;
        message.mcpGatewayId =
            object.mcpGatewayId !== undefined && object.mcpGatewayId !== null
                ? String(object.mcpGatewayId)
                : '';
        return message;
    },

    toJSON(message: DeleteMcpGatewayMetadata): unknown {
        const obj: any = {};
        message.mcpGatewayId !== undefined && (obj.mcpGatewayId = message.mcpGatewayId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteMcpGatewayMetadata>, I>>(
        object: I,
    ): DeleteMcpGatewayMetadata {
        const message = { ...baseDeleteMcpGatewayMetadata } as DeleteMcpGatewayMetadata;
        message.mcpGatewayId = object.mcpGatewayId ?? '';
        return message;
    },
};

const baseListOperationsRequest: object = {
    mcpGatewayId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListOperationsRequest: {
    encode(message: ListOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsRequest;
    fromJSON(object: any): ListOperationsRequest;
    toJSON(message: ListOperationsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListOperationsRequest>, I>>(object: I): ListOperationsRequest;
} = {
    encode(message: ListOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mcpGatewayId !== '') {
            writer.uint32(10).string(message.mcpGatewayId);
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListOperationsRequest } as ListOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mcpGatewayId = reader.string();
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

    fromJSON(object: any): ListOperationsRequest {
        const message = { ...baseListOperationsRequest } as ListOperationsRequest;
        message.mcpGatewayId =
            object.mcpGatewayId !== undefined && object.mcpGatewayId !== null
                ? String(object.mcpGatewayId)
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

    toJSON(message: ListOperationsRequest): unknown {
        const obj: any = {};
        message.mcpGatewayId !== undefined && (obj.mcpGatewayId = message.mcpGatewayId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListOperationsRequest>, I>>(
        object: I,
    ): ListOperationsRequest {
        const message = { ...baseListOperationsRequest } as ListOperationsRequest;
        message.mcpGatewayId = object.mcpGatewayId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListOperationsResponse: object = { nextPageToken: '' };

export const ListOperationsResponse: {
    encode(message: ListOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsResponse;
    fromJSON(object: any): ListOperationsResponse;
    toJSON(message: ListOperationsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListOperationsResponse>, I>>(object: I): ListOperationsResponse;
} = {
    encode(message: ListOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.operations) {
            Operation.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListOperationsResponse } as ListOperationsResponse;
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

    fromJSON(object: any): ListOperationsResponse {
        const message = { ...baseListOperationsResponse } as ListOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListOperationsResponse>, I>>(
        object: I,
    ): ListOperationsResponse {
        const message = { ...baseListOperationsResponse } as ListOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** A set of methods for managing MCP Gateway resources. */
export const McpGatewayServiceService = {
    /** Retrieves the specified MCP Gateway. */
    get: {
        path: '/yandex.cloud.serverless.mcpgateway.v1.McpGatewayService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetMcpGatewayRequest) =>
            Buffer.from(GetMcpGatewayRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetMcpGatewayRequest.decode(value),
        responseSerialize: (value: McpGateway) => Buffer.from(McpGateway.encode(value).finish()),
        responseDeserialize: (value: Buffer) => McpGateway.decode(value),
    },
    /** Retrieves the list of MCP Gateways in the specified folder. */
    list: {
        path: '/yandex.cloud.serverless.mcpgateway.v1.McpGatewayService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListMcpGatewayRequest) =>
            Buffer.from(ListMcpGatewayRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListMcpGatewayRequest.decode(value),
        responseSerialize: (value: ListMcpGatewayResponse) =>
            Buffer.from(ListMcpGatewayResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListMcpGatewayResponse.decode(value),
    },
    /** Creates an MCP Gateway in the specified folder. */
    create: {
        path: '/yandex.cloud.serverless.mcpgateway.v1.McpGatewayService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateMcpGatewayRequest) =>
            Buffer.from(CreateMcpGatewayRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateMcpGatewayRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified MCP Gateway. */
    update: {
        path: '/yandex.cloud.serverless.mcpgateway.v1.McpGatewayService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateMcpGatewayRequest) =>
            Buffer.from(UpdateMcpGatewayRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateMcpGatewayRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified MCP Gateway. */
    delete: {
        path: '/yandex.cloud.serverless.mcpgateway.v1.McpGatewayService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteMcpGatewayRequest) =>
            Buffer.from(DeleteMcpGatewayRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteMcpGatewayRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified MCP Gateway. */
    listOperations: {
        path: '/yandex.cloud.serverless.mcpgateway.v1.McpGatewayService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListOperationsRequest) =>
            Buffer.from(ListOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListOperationsRequest.decode(value),
        responseSerialize: (value: ListOperationsResponse) =>
            Buffer.from(ListOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListOperationsResponse.decode(value),
    },
    /** Lists access bindings for the specified MCP Gateway. */
    listAccessBindings: {
        path: '/yandex.cloud.serverless.mcpgateway.v1.McpGatewayService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified MCP Gateway. */
    setAccessBindings: {
        path: '/yandex.cloud.serverless.mcpgateway.v1.McpGatewayService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetAccessBindingsRequest) =>
            Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates access bindings for the specified MCP Gateway. */
    updateAccessBindings: {
        path: '/yandex.cloud.serverless.mcpgateway.v1.McpGatewayService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface McpGatewayServiceServer extends UntypedServiceImplementation {
    /** Retrieves the specified MCP Gateway. */
    get: handleUnaryCall<GetMcpGatewayRequest, McpGateway>;
    /** Retrieves the list of MCP Gateways in the specified folder. */
    list: handleUnaryCall<ListMcpGatewayRequest, ListMcpGatewayResponse>;
    /** Creates an MCP Gateway in the specified folder. */
    create: handleUnaryCall<CreateMcpGatewayRequest, Operation>;
    /** Updates the specified MCP Gateway. */
    update: handleUnaryCall<UpdateMcpGatewayRequest, Operation>;
    /** Deletes the specified MCP Gateway. */
    delete: handleUnaryCall<DeleteMcpGatewayRequest, Operation>;
    /** Lists operations for the specified MCP Gateway. */
    listOperations: handleUnaryCall<ListOperationsRequest, ListOperationsResponse>;
    /** Lists access bindings for the specified MCP Gateway. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the specified MCP Gateway. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified MCP Gateway. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface McpGatewayServiceClient extends Client {
    /** Retrieves the specified MCP Gateway. */
    get(
        request: GetMcpGatewayRequest,
        callback: (error: ServiceError | null, response: McpGateway) => void,
    ): ClientUnaryCall;
    get(
        request: GetMcpGatewayRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: McpGateway) => void,
    ): ClientUnaryCall;
    get(
        request: GetMcpGatewayRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: McpGateway) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of MCP Gateways in the specified folder. */
    list(
        request: ListMcpGatewayRequest,
        callback: (error: ServiceError | null, response: ListMcpGatewayResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListMcpGatewayRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListMcpGatewayResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListMcpGatewayRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListMcpGatewayResponse) => void,
    ): ClientUnaryCall;
    /** Creates an MCP Gateway in the specified folder. */
    create(
        request: CreateMcpGatewayRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateMcpGatewayRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateMcpGatewayRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified MCP Gateway. */
    update(
        request: UpdateMcpGatewayRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateMcpGatewayRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateMcpGatewayRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified MCP Gateway. */
    delete(
        request: DeleteMcpGatewayRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteMcpGatewayRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteMcpGatewayRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists operations for the specified MCP Gateway. */
    listOperations(
        request: ListOperationsRequest,
        callback: (error: ServiceError | null, response: ListOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListOperationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListOperationsResponse) => void,
    ): ClientUnaryCall;
    /** Lists access bindings for the specified MCP Gateway. */
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
    /** Sets access bindings for the specified MCP Gateway. */
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
    /** Updates access bindings for the specified MCP Gateway. */
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

export const McpGatewayServiceClient = makeGenericClientConstructor(
    McpGatewayServiceService,
    'yandex.cloud.serverless.mcpgateway.v1.McpGatewayService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): McpGatewayServiceClient;
    service: typeof McpGatewayServiceService;
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
