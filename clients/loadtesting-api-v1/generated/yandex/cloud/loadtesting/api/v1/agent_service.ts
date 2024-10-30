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
import { CreateComputeInstance } from '../../../../../yandex/cloud/loadtesting/api/v1/agent/create_compute_instance';
import { LogSettings } from '../../../../../yandex/cloud/loadtesting/api/v1/agent/log_settings';
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Agent } from '../../../../../yandex/cloud/loadtesting/api/v1/agent/agent';
import { Operation } from '../../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.loadtesting.api.v1';

export interface CreateAgentRequest {
    $type: 'yandex.cloud.loadtesting.api.v1.CreateAgentRequest';
    /** ID of the folder to create an agent in. */
    folderId: string;
    /**
     * Name of the agent.
     *
     * A created compute instance will have the same name.
     */
    name: string;
    /**
     * Description of the agent.
     *
     * A created compute instance will have the same description.
     */
    description: string;
    /** Parameters for compute instance to be created. */
    computeInstanceParams?: CreateComputeInstance;
    /**
     * Version of the agent.
     *
     * If not provided, the most recent agent version will be used.
     */
    agentVersion: string;
    /** Agent labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Agent log settings */
    logSettings?: LogSettings;
}

export interface CreateAgentRequest_LabelsEntry {
    $type: 'yandex.cloud.loadtesting.api.v1.CreateAgentRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface CreateAgentMetadata {
    $type: 'yandex.cloud.loadtesting.api.v1.CreateAgentMetadata';
    /** ID of the agent that is being created. */
    agentId: string;
}

export interface GetAgentRequest {
    $type: 'yandex.cloud.loadtesting.api.v1.GetAgentRequest';
    /** ID of the agent to return. */
    agentId: string;
}

export interface DeleteAgentRequest {
    $type: 'yandex.cloud.loadtesting.api.v1.DeleteAgentRequest';
    /** ID of the agent to delete. */
    agentId: string;
}

export interface DeleteAgentMetadata {
    $type: 'yandex.cloud.loadtesting.api.v1.DeleteAgentMetadata';
    /** ID of the agent that is being deleted. */
    agentId: string;
}

export interface ListAgentsRequest {
    $type: 'yandex.cloud.loadtesting.api.v1.ListAgentsRequest';
    /** ID of the folder to list agents in. */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListAgentsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListAgentsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters agents listed in the response.
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
     * - `id` [yandex.cloud.loadtesting.api.v1.agent.Agent.id]
     *   - operators: `=`, `!=`, `IN`, `NOT IN`
     * - `name` [yandex.cloud.loadtesting.api.v1.agent.Agent.name]
     *   - operators: `=`, `!=`, `IN`, `NOT IN`, `CONTAINS`
     *
     * Examples:
     * - `id IN ("1", "2", "3")`
     * - `name CONTAINS "compute-agent-large" AND id NOT IN ("4", "5")`
     */
    filter: string;
}

export interface ListAgentsResponse {
    $type: 'yandex.cloud.loadtesting.api.v1.ListAgentsResponse';
    /** List of agents in the specified folder. */
    agents: Agent[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListAgentsRequest.page_size], use `next_page_token` as the value
     * for the [ListAgentsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface UpdateAgentRequest {
    $type: 'yandex.cloud.loadtesting.api.v1.UpdateAgentRequest';
    /** ID of the agent to update. */
    agentId: string;
    /** Field mask that specifies which attributes of the agent are going to be updated. */
    updateMask?: FieldMask;
    /** New name of the agent. */
    name: string;
    /** New description of the agent. */
    description: string;
    /** New parameters of compute instance managed by the agent. */
    computeInstanceParams?: CreateComputeInstance;
    /** New labels of the agent. */
    labels: { [key: string]: string };
}

export interface UpdateAgentRequest_LabelsEntry {
    $type: 'yandex.cloud.loadtesting.api.v1.UpdateAgentRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface UpdateAgentMetadata {
    $type: 'yandex.cloud.loadtesting.api.v1.UpdateAgentMetadata';
    /** ID of the agent that is being updated. */
    agentId: string;
}

const baseCreateAgentRequest: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.CreateAgentRequest',
    folderId: '',
    name: '',
    description: '',
    agentVersion: '',
};

export const CreateAgentRequest = {
    $type: 'yandex.cloud.loadtesting.api.v1.CreateAgentRequest' as const,

    encode(message: CreateAgentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.computeInstanceParams !== undefined) {
            CreateComputeInstance.encode(
                message.computeInstanceParams,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        if (message.agentVersion !== '') {
            writer.uint32(42).string(message.agentVersion);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateAgentRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.loadtesting.api.v1.CreateAgentRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        if (message.logSettings !== undefined) {
            LogSettings.encode(message.logSettings, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateAgentRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateAgentRequest } as CreateAgentRequest;
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
                    message.computeInstanceParams = CreateComputeInstance.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 5:
                    message.agentVersion = reader.string();
                    break;
                case 6:
                    const entry6 = CreateAgentRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.logSettings = LogSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateAgentRequest {
        const message = { ...baseCreateAgentRequest } as CreateAgentRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.computeInstanceParams =
            object.computeInstanceParams !== undefined && object.computeInstanceParams !== null
                ? CreateComputeInstance.fromJSON(object.computeInstanceParams)
                : undefined;
        message.agentVersion =
            object.agentVersion !== undefined && object.agentVersion !== null
                ? String(object.agentVersion)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.logSettings =
            object.logSettings !== undefined && object.logSettings !== null
                ? LogSettings.fromJSON(object.logSettings)
                : undefined;
        return message;
    },

    toJSON(message: CreateAgentRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.computeInstanceParams !== undefined &&
            (obj.computeInstanceParams = message.computeInstanceParams
                ? CreateComputeInstance.toJSON(message.computeInstanceParams)
                : undefined);
        message.agentVersion !== undefined && (obj.agentVersion = message.agentVersion);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.logSettings !== undefined &&
            (obj.logSettings = message.logSettings
                ? LogSettings.toJSON(message.logSettings)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateAgentRequest>, I>>(
        object: I,
    ): CreateAgentRequest {
        const message = { ...baseCreateAgentRequest } as CreateAgentRequest;
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.computeInstanceParams =
            object.computeInstanceParams !== undefined && object.computeInstanceParams !== null
                ? CreateComputeInstance.fromPartial(object.computeInstanceParams)
                : undefined;
        message.agentVersion = object.agentVersion ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.logSettings =
            object.logSettings !== undefined && object.logSettings !== null
                ? LogSettings.fromPartial(object.logSettings)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(CreateAgentRequest.$type, CreateAgentRequest);

const baseCreateAgentRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.CreateAgentRequest.LabelsEntry',
    key: '',
    value: '',
};

export const CreateAgentRequest_LabelsEntry = {
    $type: 'yandex.cloud.loadtesting.api.v1.CreateAgentRequest.LabelsEntry' as const,

    encode(
        message: CreateAgentRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateAgentRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateAgentRequest_LabelsEntry } as CreateAgentRequest_LabelsEntry;
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

    fromJSON(object: any): CreateAgentRequest_LabelsEntry {
        const message = { ...baseCreateAgentRequest_LabelsEntry } as CreateAgentRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateAgentRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateAgentRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateAgentRequest_LabelsEntry {
        const message = { ...baseCreateAgentRequest_LabelsEntry } as CreateAgentRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(CreateAgentRequest_LabelsEntry.$type, CreateAgentRequest_LabelsEntry);

const baseCreateAgentMetadata: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.CreateAgentMetadata',
    agentId: '',
};

export const CreateAgentMetadata = {
    $type: 'yandex.cloud.loadtesting.api.v1.CreateAgentMetadata' as const,

    encode(message: CreateAgentMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.agentId !== '') {
            writer.uint32(10).string(message.agentId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateAgentMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateAgentMetadata } as CreateAgentMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agentId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateAgentMetadata {
        const message = { ...baseCreateAgentMetadata } as CreateAgentMetadata;
        message.agentId =
            object.agentId !== undefined && object.agentId !== null ? String(object.agentId) : '';
        return message;
    },

    toJSON(message: CreateAgentMetadata): unknown {
        const obj: any = {};
        message.agentId !== undefined && (obj.agentId = message.agentId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateAgentMetadata>, I>>(
        object: I,
    ): CreateAgentMetadata {
        const message = { ...baseCreateAgentMetadata } as CreateAgentMetadata;
        message.agentId = object.agentId ?? '';
        return message;
    },
};

messageTypeRegistry.set(CreateAgentMetadata.$type, CreateAgentMetadata);

const baseGetAgentRequest: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.GetAgentRequest',
    agentId: '',
};

export const GetAgentRequest = {
    $type: 'yandex.cloud.loadtesting.api.v1.GetAgentRequest' as const,

    encode(message: GetAgentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.agentId !== '') {
            writer.uint32(18).string(message.agentId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetAgentRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetAgentRequest } as GetAgentRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.agentId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetAgentRequest {
        const message = { ...baseGetAgentRequest } as GetAgentRequest;
        message.agentId =
            object.agentId !== undefined && object.agentId !== null ? String(object.agentId) : '';
        return message;
    },

    toJSON(message: GetAgentRequest): unknown {
        const obj: any = {};
        message.agentId !== undefined && (obj.agentId = message.agentId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetAgentRequest>, I>>(object: I): GetAgentRequest {
        const message = { ...baseGetAgentRequest } as GetAgentRequest;
        message.agentId = object.agentId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetAgentRequest.$type, GetAgentRequest);

const baseDeleteAgentRequest: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.DeleteAgentRequest',
    agentId: '',
};

export const DeleteAgentRequest = {
    $type: 'yandex.cloud.loadtesting.api.v1.DeleteAgentRequest' as const,

    encode(message: DeleteAgentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.agentId !== '') {
            writer.uint32(10).string(message.agentId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAgentRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteAgentRequest } as DeleteAgentRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agentId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteAgentRequest {
        const message = { ...baseDeleteAgentRequest } as DeleteAgentRequest;
        message.agentId =
            object.agentId !== undefined && object.agentId !== null ? String(object.agentId) : '';
        return message;
    },

    toJSON(message: DeleteAgentRequest): unknown {
        const obj: any = {};
        message.agentId !== undefined && (obj.agentId = message.agentId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteAgentRequest>, I>>(
        object: I,
    ): DeleteAgentRequest {
        const message = { ...baseDeleteAgentRequest } as DeleteAgentRequest;
        message.agentId = object.agentId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteAgentRequest.$type, DeleteAgentRequest);

const baseDeleteAgentMetadata: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.DeleteAgentMetadata',
    agentId: '',
};

export const DeleteAgentMetadata = {
    $type: 'yandex.cloud.loadtesting.api.v1.DeleteAgentMetadata' as const,

    encode(message: DeleteAgentMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.agentId !== '') {
            writer.uint32(10).string(message.agentId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAgentMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteAgentMetadata } as DeleteAgentMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agentId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteAgentMetadata {
        const message = { ...baseDeleteAgentMetadata } as DeleteAgentMetadata;
        message.agentId =
            object.agentId !== undefined && object.agentId !== null ? String(object.agentId) : '';
        return message;
    },

    toJSON(message: DeleteAgentMetadata): unknown {
        const obj: any = {};
        message.agentId !== undefined && (obj.agentId = message.agentId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteAgentMetadata>, I>>(
        object: I,
    ): DeleteAgentMetadata {
        const message = { ...baseDeleteAgentMetadata } as DeleteAgentMetadata;
        message.agentId = object.agentId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteAgentMetadata.$type, DeleteAgentMetadata);

const baseListAgentsRequest: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.ListAgentsRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListAgentsRequest = {
    $type: 'yandex.cloud.loadtesting.api.v1.ListAgentsRequest' as const,

    encode(message: ListAgentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListAgentsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListAgentsRequest } as ListAgentsRequest;
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

    fromJSON(object: any): ListAgentsRequest {
        const message = { ...baseListAgentsRequest } as ListAgentsRequest;
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

    toJSON(message: ListAgentsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListAgentsRequest>, I>>(object: I): ListAgentsRequest {
        const message = { ...baseListAgentsRequest } as ListAgentsRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListAgentsRequest.$type, ListAgentsRequest);

const baseListAgentsResponse: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.ListAgentsResponse',
    nextPageToken: '',
};

export const ListAgentsResponse = {
    $type: 'yandex.cloud.loadtesting.api.v1.ListAgentsResponse' as const,

    encode(message: ListAgentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.agents) {
            Agent.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListAgentsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListAgentsResponse } as ListAgentsResponse;
        message.agents = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agents.push(Agent.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListAgentsResponse {
        const message = { ...baseListAgentsResponse } as ListAgentsResponse;
        message.agents = (object.agents ?? []).map((e: any) => Agent.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListAgentsResponse): unknown {
        const obj: any = {};
        if (message.agents) {
            obj.agents = message.agents.map((e) => (e ? Agent.toJSON(e) : undefined));
        } else {
            obj.agents = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListAgentsResponse>, I>>(
        object: I,
    ): ListAgentsResponse {
        const message = { ...baseListAgentsResponse } as ListAgentsResponse;
        message.agents = object.agents?.map((e) => Agent.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListAgentsResponse.$type, ListAgentsResponse);

const baseUpdateAgentRequest: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.UpdateAgentRequest',
    agentId: '',
    name: '',
    description: '',
};

export const UpdateAgentRequest = {
    $type: 'yandex.cloud.loadtesting.api.v1.UpdateAgentRequest' as const,

    encode(message: UpdateAgentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.agentId !== '') {
            writer.uint32(10).string(message.agentId);
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
        if (message.computeInstanceParams !== undefined) {
            CreateComputeInstance.encode(
                message.computeInstanceParams,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateAgentRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.loadtesting.api.v1.UpdateAgentRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAgentRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateAgentRequest } as UpdateAgentRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agentId = reader.string();
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
                    message.computeInstanceParams = CreateComputeInstance.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 6:
                    const entry6 = UpdateAgentRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateAgentRequest {
        const message = { ...baseUpdateAgentRequest } as UpdateAgentRequest;
        message.agentId =
            object.agentId !== undefined && object.agentId !== null ? String(object.agentId) : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.computeInstanceParams =
            object.computeInstanceParams !== undefined && object.computeInstanceParams !== null
                ? CreateComputeInstance.fromJSON(object.computeInstanceParams)
                : undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: UpdateAgentRequest): unknown {
        const obj: any = {};
        message.agentId !== undefined && (obj.agentId = message.agentId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.computeInstanceParams !== undefined &&
            (obj.computeInstanceParams = message.computeInstanceParams
                ? CreateComputeInstance.toJSON(message.computeInstanceParams)
                : undefined);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateAgentRequest>, I>>(
        object: I,
    ): UpdateAgentRequest {
        const message = { ...baseUpdateAgentRequest } as UpdateAgentRequest;
        message.agentId = object.agentId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.computeInstanceParams =
            object.computeInstanceParams !== undefined && object.computeInstanceParams !== null
                ? CreateComputeInstance.fromPartial(object.computeInstanceParams)
                : undefined;
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

messageTypeRegistry.set(UpdateAgentRequest.$type, UpdateAgentRequest);

const baseUpdateAgentRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.UpdateAgentRequest.LabelsEntry',
    key: '',
    value: '',
};

export const UpdateAgentRequest_LabelsEntry = {
    $type: 'yandex.cloud.loadtesting.api.v1.UpdateAgentRequest.LabelsEntry' as const,

    encode(
        message: UpdateAgentRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAgentRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateAgentRequest_LabelsEntry } as UpdateAgentRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateAgentRequest_LabelsEntry {
        const message = { ...baseUpdateAgentRequest_LabelsEntry } as UpdateAgentRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateAgentRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateAgentRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateAgentRequest_LabelsEntry {
        const message = { ...baseUpdateAgentRequest_LabelsEntry } as UpdateAgentRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(UpdateAgentRequest_LabelsEntry.$type, UpdateAgentRequest_LabelsEntry);

const baseUpdateAgentMetadata: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.UpdateAgentMetadata',
    agentId: '',
};

export const UpdateAgentMetadata = {
    $type: 'yandex.cloud.loadtesting.api.v1.UpdateAgentMetadata' as const,

    encode(message: UpdateAgentMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.agentId !== '') {
            writer.uint32(10).string(message.agentId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAgentMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateAgentMetadata } as UpdateAgentMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agentId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateAgentMetadata {
        const message = { ...baseUpdateAgentMetadata } as UpdateAgentMetadata;
        message.agentId =
            object.agentId !== undefined && object.agentId !== null ? String(object.agentId) : '';
        return message;
    },

    toJSON(message: UpdateAgentMetadata): unknown {
        const obj: any = {};
        message.agentId !== undefined && (obj.agentId = message.agentId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateAgentMetadata>, I>>(
        object: I,
    ): UpdateAgentMetadata {
        const message = { ...baseUpdateAgentMetadata } as UpdateAgentMetadata;
        message.agentId = object.agentId ?? '';
        return message;
    },
};

messageTypeRegistry.set(UpdateAgentMetadata.$type, UpdateAgentMetadata);

/** A set of methods for managing Load Testing agents. */
export const AgentServiceService = {
    /**
     * Creates an agent in the specified folder.
     *
     * Also creates a corresponding compute instance.
     */
    create: {
        path: '/yandex.cloud.loadtesting.api.v1.AgentService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateAgentRequest) =>
            Buffer.from(CreateAgentRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateAgentRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Returns the specified agent.
     *
     * To get the list of all available agents, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.loadtesting.api.v1.AgentService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetAgentRequest) =>
            Buffer.from(GetAgentRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetAgentRequest.decode(value),
        responseSerialize: (value: Agent) => Buffer.from(Agent.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Agent.decode(value),
    },
    /** Retrieves the list of agents in the specified folder. */
    list: {
        path: '/yandex.cloud.loadtesting.api.v1.AgentService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAgentsRequest) =>
            Buffer.from(ListAgentsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAgentsRequest.decode(value),
        responseSerialize: (value: ListAgentsResponse) =>
            Buffer.from(ListAgentsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAgentsResponse.decode(value),
    },
    /**
     * Deletes the specified agent.
     *
     * Also deletes a corresponding compute instance.
     */
    delete: {
        path: '/yandex.cloud.loadtesting.api.v1.AgentService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteAgentRequest) =>
            Buffer.from(DeleteAgentRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteAgentRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified agent. */
    update: {
        path: '/yandex.cloud.loadtesting.api.v1.AgentService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAgentRequest) =>
            Buffer.from(UpdateAgentRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateAgentRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface AgentServiceServer extends UntypedServiceImplementation {
    /**
     * Creates an agent in the specified folder.
     *
     * Also creates a corresponding compute instance.
     */
    create: handleUnaryCall<CreateAgentRequest, Operation>;
    /**
     * Returns the specified agent.
     *
     * To get the list of all available agents, make a [List] request.
     */
    get: handleUnaryCall<GetAgentRequest, Agent>;
    /** Retrieves the list of agents in the specified folder. */
    list: handleUnaryCall<ListAgentsRequest, ListAgentsResponse>;
    /**
     * Deletes the specified agent.
     *
     * Also deletes a corresponding compute instance.
     */
    delete: handleUnaryCall<DeleteAgentRequest, Operation>;
    /** Updates the specified agent. */
    update: handleUnaryCall<UpdateAgentRequest, Operation>;
}

export interface AgentServiceClient extends Client {
    /**
     * Creates an agent in the specified folder.
     *
     * Also creates a corresponding compute instance.
     */
    create(
        request: CreateAgentRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateAgentRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateAgentRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Returns the specified agent.
     *
     * To get the list of all available agents, make a [List] request.
     */
    get(
        request: GetAgentRequest,
        callback: (error: ServiceError | null, response: Agent) => void,
    ): ClientUnaryCall;
    get(
        request: GetAgentRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Agent) => void,
    ): ClientUnaryCall;
    get(
        request: GetAgentRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Agent) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of agents in the specified folder. */
    list(
        request: ListAgentsRequest,
        callback: (error: ServiceError | null, response: ListAgentsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListAgentsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListAgentsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListAgentsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListAgentsResponse) => void,
    ): ClientUnaryCall;
    /**
     * Deletes the specified agent.
     *
     * Also deletes a corresponding compute instance.
     */
    delete(
        request: DeleteAgentRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteAgentRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteAgentRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified agent. */
    update(
        request: UpdateAgentRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateAgentRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateAgentRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const AgentServiceClient = makeGenericClientConstructor(
    AgentServiceService,
    'yandex.cloud.loadtesting.api.v1.AgentService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): AgentServiceClient;
    service: typeof AgentServiceService;
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
