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
    ExecutionInput,
    Execution,
    ExecutionPreview,
} from '../../../../../yandex/cloud/serverless/workflows/v1/execution';
import { HistoryEntry } from '../../../../../yandex/cloud/serverless/workflows/v1/history_entry';

export const protobufPackage = 'yandex.cloud.serverless.workflows.v1';

export interface StartExecutionRequest {
    $type: 'yandex.cloud.serverless.workflows.v1.StartExecutionRequest';
    /** ID of the Workflow. */
    workflowId: string;
    /** Input for the Workflow execution */
    input?: ExecutionInput;
}

export interface StartExecutionResponse {
    $type: 'yandex.cloud.serverless.workflows.v1.StartExecutionResponse';
    /** ID of the Workflow execution. */
    executionId: string;
}

export interface StopExecutionRequest {
    $type: 'yandex.cloud.serverless.workflows.v1.StopExecutionRequest';
    /** ID of the Workflow execution. */
    executionId: string;
}

export interface StopExecutionResponse {
    $type: 'yandex.cloud.serverless.workflows.v1.StopExecutionResponse';
    /** ID of the Workflow execution. */
    executionId: string;
}

export interface GetExecutionRequest {
    $type: 'yandex.cloud.serverless.workflows.v1.GetExecutionRequest';
    /** ID of the Workflow execution. */
    executionId: string;
}

export interface GetExecutionResponse {
    $type: 'yandex.cloud.serverless.workflows.v1.GetExecutionResponse';
    /** Workflow execution details. */
    execution?: Execution;
}

export interface GetExecutionHistoryRequest {
    $type: 'yandex.cloud.serverless.workflows.v1.GetExecutionHistoryRequest';
    /** ID of the Workflow execution. */
    executionId: string;
}

export interface GetExecutionHistoryResponse {
    $type: 'yandex.cloud.serverless.workflows.v1.GetExecutionHistoryResponse';
    /** Workflow execution details. */
    execution?: ExecutionPreview;
    /** Workflow execution detailed history items. */
    entries: HistoryEntry[];
}

export interface ListExecutionsRequest {
    $type: 'yandex.cloud.serverless.workflows.v1.ListExecutionsRequest';
    /** ID of the Workflow. */
    workflowId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `pageSize`, the service returns a [ListExecutionsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListExecutionsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can be applied to the following fields: status, started_at, finished_at.
     * 2. Operator: `=`, `<` or `>`.
     * 3. The value. Must be sting and match the regular expression `[+:\.-a-z0-9]`.
     * Examples of a filter: `status=ERROR`, `created_by=John.Doe`.
     */
    filter: string;
}

export interface ListExecutionsResponse {
    $type: 'yandex.cloud.serverless.workflows.v1.ListExecutionsResponse';
    /** List of Workflow executions. */
    executions: ExecutionPreview[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListExecutionsRequest.page_size], use `next_page_token` as the value
     * for the [ListExecutionsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

const baseStartExecutionRequest: object = {
    $type: 'yandex.cloud.serverless.workflows.v1.StartExecutionRequest',
    workflowId: '',
};

export const StartExecutionRequest = {
    $type: 'yandex.cloud.serverless.workflows.v1.StartExecutionRequest' as const,

    encode(message: StartExecutionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.workflowId !== '') {
            writer.uint32(10).string(message.workflowId);
        }
        if (message.input !== undefined) {
            ExecutionInput.encode(message.input, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StartExecutionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStartExecutionRequest } as StartExecutionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workflowId = reader.string();
                    break;
                case 3:
                    message.input = ExecutionInput.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StartExecutionRequest {
        const message = { ...baseStartExecutionRequest } as StartExecutionRequest;
        message.workflowId =
            object.workflowId !== undefined && object.workflowId !== null
                ? String(object.workflowId)
                : '';
        message.input =
            object.input !== undefined && object.input !== null
                ? ExecutionInput.fromJSON(object.input)
                : undefined;
        return message;
    },

    toJSON(message: StartExecutionRequest): unknown {
        const obj: any = {};
        message.workflowId !== undefined && (obj.workflowId = message.workflowId);
        message.input !== undefined &&
            (obj.input = message.input ? ExecutionInput.toJSON(message.input) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StartExecutionRequest>, I>>(
        object: I,
    ): StartExecutionRequest {
        const message = { ...baseStartExecutionRequest } as StartExecutionRequest;
        message.workflowId = object.workflowId ?? '';
        message.input =
            object.input !== undefined && object.input !== null
                ? ExecutionInput.fromPartial(object.input)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(StartExecutionRequest.$type, StartExecutionRequest);

const baseStartExecutionResponse: object = {
    $type: 'yandex.cloud.serverless.workflows.v1.StartExecutionResponse',
    executionId: '',
};

export const StartExecutionResponse = {
    $type: 'yandex.cloud.serverless.workflows.v1.StartExecutionResponse' as const,

    encode(message: StartExecutionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.executionId !== '') {
            writer.uint32(10).string(message.executionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StartExecutionResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStartExecutionResponse } as StartExecutionResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.executionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StartExecutionResponse {
        const message = { ...baseStartExecutionResponse } as StartExecutionResponse;
        message.executionId =
            object.executionId !== undefined && object.executionId !== null
                ? String(object.executionId)
                : '';
        return message;
    },

    toJSON(message: StartExecutionResponse): unknown {
        const obj: any = {};
        message.executionId !== undefined && (obj.executionId = message.executionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StartExecutionResponse>, I>>(
        object: I,
    ): StartExecutionResponse {
        const message = { ...baseStartExecutionResponse } as StartExecutionResponse;
        message.executionId = object.executionId ?? '';
        return message;
    },
};

messageTypeRegistry.set(StartExecutionResponse.$type, StartExecutionResponse);

const baseStopExecutionRequest: object = {
    $type: 'yandex.cloud.serverless.workflows.v1.StopExecutionRequest',
    executionId: '',
};

export const StopExecutionRequest = {
    $type: 'yandex.cloud.serverless.workflows.v1.StopExecutionRequest' as const,

    encode(message: StopExecutionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.executionId !== '') {
            writer.uint32(10).string(message.executionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StopExecutionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopExecutionRequest } as StopExecutionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.executionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StopExecutionRequest {
        const message = { ...baseStopExecutionRequest } as StopExecutionRequest;
        message.executionId =
            object.executionId !== undefined && object.executionId !== null
                ? String(object.executionId)
                : '';
        return message;
    },

    toJSON(message: StopExecutionRequest): unknown {
        const obj: any = {};
        message.executionId !== undefined && (obj.executionId = message.executionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StopExecutionRequest>, I>>(
        object: I,
    ): StopExecutionRequest {
        const message = { ...baseStopExecutionRequest } as StopExecutionRequest;
        message.executionId = object.executionId ?? '';
        return message;
    },
};

messageTypeRegistry.set(StopExecutionRequest.$type, StopExecutionRequest);

const baseStopExecutionResponse: object = {
    $type: 'yandex.cloud.serverless.workflows.v1.StopExecutionResponse',
    executionId: '',
};

export const StopExecutionResponse = {
    $type: 'yandex.cloud.serverless.workflows.v1.StopExecutionResponse' as const,

    encode(message: StopExecutionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.executionId !== '') {
            writer.uint32(10).string(message.executionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StopExecutionResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopExecutionResponse } as StopExecutionResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.executionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StopExecutionResponse {
        const message = { ...baseStopExecutionResponse } as StopExecutionResponse;
        message.executionId =
            object.executionId !== undefined && object.executionId !== null
                ? String(object.executionId)
                : '';
        return message;
    },

    toJSON(message: StopExecutionResponse): unknown {
        const obj: any = {};
        message.executionId !== undefined && (obj.executionId = message.executionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StopExecutionResponse>, I>>(
        object: I,
    ): StopExecutionResponse {
        const message = { ...baseStopExecutionResponse } as StopExecutionResponse;
        message.executionId = object.executionId ?? '';
        return message;
    },
};

messageTypeRegistry.set(StopExecutionResponse.$type, StopExecutionResponse);

const baseGetExecutionRequest: object = {
    $type: 'yandex.cloud.serverless.workflows.v1.GetExecutionRequest',
    executionId: '',
};

export const GetExecutionRequest = {
    $type: 'yandex.cloud.serverless.workflows.v1.GetExecutionRequest' as const,

    encode(message: GetExecutionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.executionId !== '') {
            writer.uint32(10).string(message.executionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetExecutionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetExecutionRequest } as GetExecutionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.executionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetExecutionRequest {
        const message = { ...baseGetExecutionRequest } as GetExecutionRequest;
        message.executionId =
            object.executionId !== undefined && object.executionId !== null
                ? String(object.executionId)
                : '';
        return message;
    },

    toJSON(message: GetExecutionRequest): unknown {
        const obj: any = {};
        message.executionId !== undefined && (obj.executionId = message.executionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetExecutionRequest>, I>>(
        object: I,
    ): GetExecutionRequest {
        const message = { ...baseGetExecutionRequest } as GetExecutionRequest;
        message.executionId = object.executionId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetExecutionRequest.$type, GetExecutionRequest);

const baseGetExecutionResponse: object = {
    $type: 'yandex.cloud.serverless.workflows.v1.GetExecutionResponse',
};

export const GetExecutionResponse = {
    $type: 'yandex.cloud.serverless.workflows.v1.GetExecutionResponse' as const,

    encode(message: GetExecutionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.execution !== undefined) {
            Execution.encode(message.execution, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetExecutionResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetExecutionResponse } as GetExecutionResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.execution = Execution.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetExecutionResponse {
        const message = { ...baseGetExecutionResponse } as GetExecutionResponse;
        message.execution =
            object.execution !== undefined && object.execution !== null
                ? Execution.fromJSON(object.execution)
                : undefined;
        return message;
    },

    toJSON(message: GetExecutionResponse): unknown {
        const obj: any = {};
        message.execution !== undefined &&
            (obj.execution = message.execution ? Execution.toJSON(message.execution) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetExecutionResponse>, I>>(
        object: I,
    ): GetExecutionResponse {
        const message = { ...baseGetExecutionResponse } as GetExecutionResponse;
        message.execution =
            object.execution !== undefined && object.execution !== null
                ? Execution.fromPartial(object.execution)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(GetExecutionResponse.$type, GetExecutionResponse);

const baseGetExecutionHistoryRequest: object = {
    $type: 'yandex.cloud.serverless.workflows.v1.GetExecutionHistoryRequest',
    executionId: '',
};

export const GetExecutionHistoryRequest = {
    $type: 'yandex.cloud.serverless.workflows.v1.GetExecutionHistoryRequest' as const,

    encode(
        message: GetExecutionHistoryRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.executionId !== '') {
            writer.uint32(10).string(message.executionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetExecutionHistoryRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetExecutionHistoryRequest } as GetExecutionHistoryRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.executionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetExecutionHistoryRequest {
        const message = { ...baseGetExecutionHistoryRequest } as GetExecutionHistoryRequest;
        message.executionId =
            object.executionId !== undefined && object.executionId !== null
                ? String(object.executionId)
                : '';
        return message;
    },

    toJSON(message: GetExecutionHistoryRequest): unknown {
        const obj: any = {};
        message.executionId !== undefined && (obj.executionId = message.executionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetExecutionHistoryRequest>, I>>(
        object: I,
    ): GetExecutionHistoryRequest {
        const message = { ...baseGetExecutionHistoryRequest } as GetExecutionHistoryRequest;
        message.executionId = object.executionId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetExecutionHistoryRequest.$type, GetExecutionHistoryRequest);

const baseGetExecutionHistoryResponse: object = {
    $type: 'yandex.cloud.serverless.workflows.v1.GetExecutionHistoryResponse',
};

export const GetExecutionHistoryResponse = {
    $type: 'yandex.cloud.serverless.workflows.v1.GetExecutionHistoryResponse' as const,

    encode(
        message: GetExecutionHistoryResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.execution !== undefined) {
            ExecutionPreview.encode(message.execution, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.entries) {
            HistoryEntry.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetExecutionHistoryResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetExecutionHistoryResponse } as GetExecutionHistoryResponse;
        message.entries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.execution = ExecutionPreview.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.entries.push(HistoryEntry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetExecutionHistoryResponse {
        const message = { ...baseGetExecutionHistoryResponse } as GetExecutionHistoryResponse;
        message.execution =
            object.execution !== undefined && object.execution !== null
                ? ExecutionPreview.fromJSON(object.execution)
                : undefined;
        message.entries = (object.entries ?? []).map((e: any) => HistoryEntry.fromJSON(e));
        return message;
    },

    toJSON(message: GetExecutionHistoryResponse): unknown {
        const obj: any = {};
        message.execution !== undefined &&
            (obj.execution = message.execution
                ? ExecutionPreview.toJSON(message.execution)
                : undefined);
        if (message.entries) {
            obj.entries = message.entries.map((e) => (e ? HistoryEntry.toJSON(e) : undefined));
        } else {
            obj.entries = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetExecutionHistoryResponse>, I>>(
        object: I,
    ): GetExecutionHistoryResponse {
        const message = { ...baseGetExecutionHistoryResponse } as GetExecutionHistoryResponse;
        message.execution =
            object.execution !== undefined && object.execution !== null
                ? ExecutionPreview.fromPartial(object.execution)
                : undefined;
        message.entries = object.entries?.map((e) => HistoryEntry.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(GetExecutionHistoryResponse.$type, GetExecutionHistoryResponse);

const baseListExecutionsRequest: object = {
    $type: 'yandex.cloud.serverless.workflows.v1.ListExecutionsRequest',
    workflowId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListExecutionsRequest = {
    $type: 'yandex.cloud.serverless.workflows.v1.ListExecutionsRequest' as const,

    encode(message: ListExecutionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.workflowId !== '') {
            writer.uint32(10).string(message.workflowId);
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListExecutionsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListExecutionsRequest } as ListExecutionsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workflowId = reader.string();
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

    fromJSON(object: any): ListExecutionsRequest {
        const message = { ...baseListExecutionsRequest } as ListExecutionsRequest;
        message.workflowId =
            object.workflowId !== undefined && object.workflowId !== null
                ? String(object.workflowId)
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

    toJSON(message: ListExecutionsRequest): unknown {
        const obj: any = {};
        message.workflowId !== undefined && (obj.workflowId = message.workflowId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListExecutionsRequest>, I>>(
        object: I,
    ): ListExecutionsRequest {
        const message = { ...baseListExecutionsRequest } as ListExecutionsRequest;
        message.workflowId = object.workflowId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListExecutionsRequest.$type, ListExecutionsRequest);

const baseListExecutionsResponse: object = {
    $type: 'yandex.cloud.serverless.workflows.v1.ListExecutionsResponse',
    nextPageToken: '',
};

export const ListExecutionsResponse = {
    $type: 'yandex.cloud.serverless.workflows.v1.ListExecutionsResponse' as const,

    encode(message: ListExecutionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.executions) {
            ExecutionPreview.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListExecutionsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListExecutionsResponse } as ListExecutionsResponse;
        message.executions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.executions.push(ExecutionPreview.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListExecutionsResponse {
        const message = { ...baseListExecutionsResponse } as ListExecutionsResponse;
        message.executions = (object.executions ?? []).map((e: any) =>
            ExecutionPreview.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListExecutionsResponse): unknown {
        const obj: any = {};
        if (message.executions) {
            obj.executions = message.executions.map((e) =>
                e ? ExecutionPreview.toJSON(e) : undefined,
            );
        } else {
            obj.executions = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListExecutionsResponse>, I>>(
        object: I,
    ): ListExecutionsResponse {
        const message = { ...baseListExecutionsResponse } as ListExecutionsResponse;
        message.executions = object.executions?.map((e) => ExecutionPreview.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListExecutionsResponse.$type, ListExecutionsResponse);

/** Set of methods for managing Workflows Executions. */
export const ExecutionServiceService = {
    /** Starts new Workflow execution. */
    start: {
        path: '/yandex.cloud.serverless.workflows.v1.ExecutionService/Start',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StartExecutionRequest) =>
            Buffer.from(StartExecutionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StartExecutionRequest.decode(value),
        responseSerialize: (value: StartExecutionResponse) =>
            Buffer.from(StartExecutionResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => StartExecutionResponse.decode(value),
    },
    /** Stops specified Workflow execution. */
    stop: {
        path: '/yandex.cloud.serverless.workflows.v1.ExecutionService/Stop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StopExecutionRequest) =>
            Buffer.from(StopExecutionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StopExecutionRequest.decode(value),
        responseSerialize: (value: StopExecutionResponse) =>
            Buffer.from(StopExecutionResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => StopExecutionResponse.decode(value),
    },
    /** Retrieves specified Workflow execution. */
    get: {
        path: '/yandex.cloud.serverless.workflows.v1.ExecutionService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetExecutionRequest) =>
            Buffer.from(GetExecutionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetExecutionRequest.decode(value),
        responseSerialize: (value: GetExecutionResponse) =>
            Buffer.from(GetExecutionResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetExecutionResponse.decode(value),
    },
    /** Retrieves detailed history of specified Workflow execution. */
    getHistory: {
        path: '/yandex.cloud.serverless.workflows.v1.ExecutionService/GetHistory',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetExecutionHistoryRequest) =>
            Buffer.from(GetExecutionHistoryRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetExecutionHistoryRequest.decode(value),
        responseSerialize: (value: GetExecutionHistoryResponse) =>
            Buffer.from(GetExecutionHistoryResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetExecutionHistoryResponse.decode(value),
    },
    /** Retrieves list of Workflow executions. */
    list: {
        path: '/yandex.cloud.serverless.workflows.v1.ExecutionService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListExecutionsRequest) =>
            Buffer.from(ListExecutionsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListExecutionsRequest.decode(value),
        responseSerialize: (value: ListExecutionsResponse) =>
            Buffer.from(ListExecutionsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListExecutionsResponse.decode(value),
    },
} as const;

export interface ExecutionServiceServer extends UntypedServiceImplementation {
    /** Starts new Workflow execution. */
    start: handleUnaryCall<StartExecutionRequest, StartExecutionResponse>;
    /** Stops specified Workflow execution. */
    stop: handleUnaryCall<StopExecutionRequest, StopExecutionResponse>;
    /** Retrieves specified Workflow execution. */
    get: handleUnaryCall<GetExecutionRequest, GetExecutionResponse>;
    /** Retrieves detailed history of specified Workflow execution. */
    getHistory: handleUnaryCall<GetExecutionHistoryRequest, GetExecutionHistoryResponse>;
    /** Retrieves list of Workflow executions. */
    list: handleUnaryCall<ListExecutionsRequest, ListExecutionsResponse>;
}

export interface ExecutionServiceClient extends Client {
    /** Starts new Workflow execution. */
    start(
        request: StartExecutionRequest,
        callback: (error: ServiceError | null, response: StartExecutionResponse) => void,
    ): ClientUnaryCall;
    start(
        request: StartExecutionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: StartExecutionResponse) => void,
    ): ClientUnaryCall;
    start(
        request: StartExecutionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: StartExecutionResponse) => void,
    ): ClientUnaryCall;
    /** Stops specified Workflow execution. */
    stop(
        request: StopExecutionRequest,
        callback: (error: ServiceError | null, response: StopExecutionResponse) => void,
    ): ClientUnaryCall;
    stop(
        request: StopExecutionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: StopExecutionResponse) => void,
    ): ClientUnaryCall;
    stop(
        request: StopExecutionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: StopExecutionResponse) => void,
    ): ClientUnaryCall;
    /** Retrieves specified Workflow execution. */
    get(
        request: GetExecutionRequest,
        callback: (error: ServiceError | null, response: GetExecutionResponse) => void,
    ): ClientUnaryCall;
    get(
        request: GetExecutionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetExecutionResponse) => void,
    ): ClientUnaryCall;
    get(
        request: GetExecutionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetExecutionResponse) => void,
    ): ClientUnaryCall;
    /** Retrieves detailed history of specified Workflow execution. */
    getHistory(
        request: GetExecutionHistoryRequest,
        callback: (error: ServiceError | null, response: GetExecutionHistoryResponse) => void,
    ): ClientUnaryCall;
    getHistory(
        request: GetExecutionHistoryRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetExecutionHistoryResponse) => void,
    ): ClientUnaryCall;
    getHistory(
        request: GetExecutionHistoryRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetExecutionHistoryResponse) => void,
    ): ClientUnaryCall;
    /** Retrieves list of Workflow executions. */
    list(
        request: ListExecutionsRequest,
        callback: (error: ServiceError | null, response: ListExecutionsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListExecutionsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListExecutionsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListExecutionsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListExecutionsResponse) => void,
    ): ClientUnaryCall;
}

export const ExecutionServiceClient = makeGenericClientConstructor(
    ExecutionServiceService,
    'yandex.cloud.serverless.workflows.v1.ExecutionService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ExecutionServiceClient;
    service: typeof ExecutionServiceService;
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
