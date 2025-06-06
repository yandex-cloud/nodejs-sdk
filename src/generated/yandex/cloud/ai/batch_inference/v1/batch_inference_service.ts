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
import {
    BatchInferenceTask_Status,
    BatchInferenceTask,
    batchInferenceTask_StatusFromJSON,
    batchInferenceTask_StatusToJSON,
} from '../../../../../yandex/cloud/ai/batch_inference/v1/batch_inference_task';

export const protobufPackage = 'yandex.cloud.ai.batch_inference.v1';

export interface BatchInferenceMetadata {
    taskId: string;
    taskStatus: BatchInferenceTask_Status;
    completedBatches: number;
    totalBatches: number;
}

export interface BatchInferenceResponse {
    task?: BatchInferenceTask;
}

export interface DescribeBatchInferenceRequest {
    /** Required task id */
    taskId: string;
}

export interface DescribeBatchInferenceResponse {
    task?: BatchInferenceTask;
}

export interface ListBatchInferencesRequest {
    /** Folder ID for which the list of tasks will be provided. */
    folderId: string;
    pageSize: number;
    pageToken: string;
    /** Batch inference status for filtering */
    status: BatchInferenceTask_Status;
}

export interface ListBatchInferencesResponse {
    tasks: BatchInferenceTask[];
    nextPageToken: string;
}

export interface CancelBatchInferenceRequest {
    /** Task ID that should be canceled. */
    taskId: string;
}

export interface CancelBatchInferenceResponse {
    taskId: string;
}

export interface DeleteBatchInferenceRequest {
    /** Task ID that should be deleted. */
    taskId: string;
}

export interface DeleteBatchInferenceResponse {
    taskId: string;
}

const baseBatchInferenceMetadata: object = {
    taskId: '',
    taskStatus: 0,
    completedBatches: 0,
    totalBatches: 0,
};

export const BatchInferenceMetadata = {
    encode(message: BatchInferenceMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.taskId !== '') {
            writer.uint32(10).string(message.taskId);
        }
        if (message.taskStatus !== 0) {
            writer.uint32(16).int32(message.taskStatus);
        }
        if (message.completedBatches !== 0) {
            writer.uint32(24).int64(message.completedBatches);
        }
        if (message.totalBatches !== 0) {
            writer.uint32(32).int64(message.totalBatches);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchInferenceMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchInferenceMetadata } as BatchInferenceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taskId = reader.string();
                    break;
                case 2:
                    message.taskStatus = reader.int32() as any;
                    break;
                case 3:
                    message.completedBatches = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.totalBatches = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchInferenceMetadata {
        const message = { ...baseBatchInferenceMetadata } as BatchInferenceMetadata;
        message.taskId =
            object.taskId !== undefined && object.taskId !== null ? String(object.taskId) : '';
        message.taskStatus =
            object.taskStatus !== undefined && object.taskStatus !== null
                ? batchInferenceTask_StatusFromJSON(object.taskStatus)
                : 0;
        message.completedBatches =
            object.completedBatches !== undefined && object.completedBatches !== null
                ? Number(object.completedBatches)
                : 0;
        message.totalBatches =
            object.totalBatches !== undefined && object.totalBatches !== null
                ? Number(object.totalBatches)
                : 0;
        return message;
    },

    toJSON(message: BatchInferenceMetadata): unknown {
        const obj: any = {};
        message.taskId !== undefined && (obj.taskId = message.taskId);
        message.taskStatus !== undefined &&
            (obj.taskStatus = batchInferenceTask_StatusToJSON(message.taskStatus));
        message.completedBatches !== undefined &&
            (obj.completedBatches = Math.round(message.completedBatches));
        message.totalBatches !== undefined && (obj.totalBatches = Math.round(message.totalBatches));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchInferenceMetadata>, I>>(
        object: I,
    ): BatchInferenceMetadata {
        const message = { ...baseBatchInferenceMetadata } as BatchInferenceMetadata;
        message.taskId = object.taskId ?? '';
        message.taskStatus = object.taskStatus ?? 0;
        message.completedBatches = object.completedBatches ?? 0;
        message.totalBatches = object.totalBatches ?? 0;
        return message;
    },
};

const baseBatchInferenceResponse: object = {};

export const BatchInferenceResponse = {
    encode(message: BatchInferenceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.task !== undefined) {
            BatchInferenceTask.encode(message.task, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchInferenceResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchInferenceResponse } as BatchInferenceResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.task = BatchInferenceTask.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchInferenceResponse {
        const message = { ...baseBatchInferenceResponse } as BatchInferenceResponse;
        message.task =
            object.task !== undefined && object.task !== null
                ? BatchInferenceTask.fromJSON(object.task)
                : undefined;
        return message;
    },

    toJSON(message: BatchInferenceResponse): unknown {
        const obj: any = {};
        message.task !== undefined &&
            (obj.task = message.task ? BatchInferenceTask.toJSON(message.task) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchInferenceResponse>, I>>(
        object: I,
    ): BatchInferenceResponse {
        const message = { ...baseBatchInferenceResponse } as BatchInferenceResponse;
        message.task =
            object.task !== undefined && object.task !== null
                ? BatchInferenceTask.fromPartial(object.task)
                : undefined;
        return message;
    },
};

const baseDescribeBatchInferenceRequest: object = { taskId: '' };

export const DescribeBatchInferenceRequest = {
    encode(
        message: DescribeBatchInferenceRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.taskId !== '') {
            writer.uint32(10).string(message.taskId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DescribeBatchInferenceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDescribeBatchInferenceRequest } as DescribeBatchInferenceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DescribeBatchInferenceRequest {
        const message = { ...baseDescribeBatchInferenceRequest } as DescribeBatchInferenceRequest;
        message.taskId =
            object.taskId !== undefined && object.taskId !== null ? String(object.taskId) : '';
        return message;
    },

    toJSON(message: DescribeBatchInferenceRequest): unknown {
        const obj: any = {};
        message.taskId !== undefined && (obj.taskId = message.taskId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DescribeBatchInferenceRequest>, I>>(
        object: I,
    ): DescribeBatchInferenceRequest {
        const message = { ...baseDescribeBatchInferenceRequest } as DescribeBatchInferenceRequest;
        message.taskId = object.taskId ?? '';
        return message;
    },
};

const baseDescribeBatchInferenceResponse: object = {};

export const DescribeBatchInferenceResponse = {
    encode(
        message: DescribeBatchInferenceResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.task !== undefined) {
            BatchInferenceTask.encode(message.task, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DescribeBatchInferenceResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDescribeBatchInferenceResponse } as DescribeBatchInferenceResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.task = BatchInferenceTask.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DescribeBatchInferenceResponse {
        const message = { ...baseDescribeBatchInferenceResponse } as DescribeBatchInferenceResponse;
        message.task =
            object.task !== undefined && object.task !== null
                ? BatchInferenceTask.fromJSON(object.task)
                : undefined;
        return message;
    },

    toJSON(message: DescribeBatchInferenceResponse): unknown {
        const obj: any = {};
        message.task !== undefined &&
            (obj.task = message.task ? BatchInferenceTask.toJSON(message.task) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DescribeBatchInferenceResponse>, I>>(
        object: I,
    ): DescribeBatchInferenceResponse {
        const message = { ...baseDescribeBatchInferenceResponse } as DescribeBatchInferenceResponse;
        message.task =
            object.task !== undefined && object.task !== null
                ? BatchInferenceTask.fromPartial(object.task)
                : undefined;
        return message;
    },
};

const baseListBatchInferencesRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    status: 0,
};

export const ListBatchInferencesRequest = {
    encode(
        message: ListBatchInferencesRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListBatchInferencesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListBatchInferencesRequest } as ListBatchInferencesRequest;
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
                    message.status = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListBatchInferencesRequest {
        const message = { ...baseListBatchInferencesRequest } as ListBatchInferencesRequest;
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
        message.status =
            object.status !== undefined && object.status !== null
                ? batchInferenceTask_StatusFromJSON(object.status)
                : 0;
        return message;
    },

    toJSON(message: ListBatchInferencesRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.status !== undefined &&
            (obj.status = batchInferenceTask_StatusToJSON(message.status));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListBatchInferencesRequest>, I>>(
        object: I,
    ): ListBatchInferencesRequest {
        const message = { ...baseListBatchInferencesRequest } as ListBatchInferencesRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.status = object.status ?? 0;
        return message;
    },
};

const baseListBatchInferencesResponse: object = { nextPageToken: '' };

export const ListBatchInferencesResponse = {
    encode(
        message: ListBatchInferencesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.tasks) {
            BatchInferenceTask.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListBatchInferencesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListBatchInferencesResponse } as ListBatchInferencesResponse;
        message.tasks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tasks.push(BatchInferenceTask.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListBatchInferencesResponse {
        const message = { ...baseListBatchInferencesResponse } as ListBatchInferencesResponse;
        message.tasks = (object.tasks ?? []).map((e: any) => BatchInferenceTask.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListBatchInferencesResponse): unknown {
        const obj: any = {};
        if (message.tasks) {
            obj.tasks = message.tasks.map((e) => (e ? BatchInferenceTask.toJSON(e) : undefined));
        } else {
            obj.tasks = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListBatchInferencesResponse>, I>>(
        object: I,
    ): ListBatchInferencesResponse {
        const message = { ...baseListBatchInferencesResponse } as ListBatchInferencesResponse;
        message.tasks = object.tasks?.map((e) => BatchInferenceTask.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCancelBatchInferenceRequest: object = { taskId: '' };

export const CancelBatchInferenceRequest = {
    encode(
        message: CancelBatchInferenceRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.taskId !== '') {
            writer.uint32(10).string(message.taskId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CancelBatchInferenceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCancelBatchInferenceRequest } as CancelBatchInferenceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CancelBatchInferenceRequest {
        const message = { ...baseCancelBatchInferenceRequest } as CancelBatchInferenceRequest;
        message.taskId =
            object.taskId !== undefined && object.taskId !== null ? String(object.taskId) : '';
        return message;
    },

    toJSON(message: CancelBatchInferenceRequest): unknown {
        const obj: any = {};
        message.taskId !== undefined && (obj.taskId = message.taskId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CancelBatchInferenceRequest>, I>>(
        object: I,
    ): CancelBatchInferenceRequest {
        const message = { ...baseCancelBatchInferenceRequest } as CancelBatchInferenceRequest;
        message.taskId = object.taskId ?? '';
        return message;
    },
};

const baseCancelBatchInferenceResponse: object = { taskId: '' };

export const CancelBatchInferenceResponse = {
    encode(
        message: CancelBatchInferenceResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.taskId !== '') {
            writer.uint32(10).string(message.taskId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CancelBatchInferenceResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCancelBatchInferenceResponse } as CancelBatchInferenceResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CancelBatchInferenceResponse {
        const message = { ...baseCancelBatchInferenceResponse } as CancelBatchInferenceResponse;
        message.taskId =
            object.taskId !== undefined && object.taskId !== null ? String(object.taskId) : '';
        return message;
    },

    toJSON(message: CancelBatchInferenceResponse): unknown {
        const obj: any = {};
        message.taskId !== undefined && (obj.taskId = message.taskId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CancelBatchInferenceResponse>, I>>(
        object: I,
    ): CancelBatchInferenceResponse {
        const message = { ...baseCancelBatchInferenceResponse } as CancelBatchInferenceResponse;
        message.taskId = object.taskId ?? '';
        return message;
    },
};

const baseDeleteBatchInferenceRequest: object = { taskId: '' };

export const DeleteBatchInferenceRequest = {
    encode(
        message: DeleteBatchInferenceRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.taskId !== '') {
            writer.uint32(10).string(message.taskId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBatchInferenceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteBatchInferenceRequest } as DeleteBatchInferenceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteBatchInferenceRequest {
        const message = { ...baseDeleteBatchInferenceRequest } as DeleteBatchInferenceRequest;
        message.taskId =
            object.taskId !== undefined && object.taskId !== null ? String(object.taskId) : '';
        return message;
    },

    toJSON(message: DeleteBatchInferenceRequest): unknown {
        const obj: any = {};
        message.taskId !== undefined && (obj.taskId = message.taskId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteBatchInferenceRequest>, I>>(
        object: I,
    ): DeleteBatchInferenceRequest {
        const message = { ...baseDeleteBatchInferenceRequest } as DeleteBatchInferenceRequest;
        message.taskId = object.taskId ?? '';
        return message;
    },
};

const baseDeleteBatchInferenceResponse: object = { taskId: '' };

export const DeleteBatchInferenceResponse = {
    encode(
        message: DeleteBatchInferenceResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.taskId !== '') {
            writer.uint32(10).string(message.taskId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBatchInferenceResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteBatchInferenceResponse } as DeleteBatchInferenceResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteBatchInferenceResponse {
        const message = { ...baseDeleteBatchInferenceResponse } as DeleteBatchInferenceResponse;
        message.taskId =
            object.taskId !== undefined && object.taskId !== null ? String(object.taskId) : '';
        return message;
    },

    toJSON(message: DeleteBatchInferenceResponse): unknown {
        const obj: any = {};
        message.taskId !== undefined && (obj.taskId = message.taskId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteBatchInferenceResponse>, I>>(
        object: I,
    ): DeleteBatchInferenceResponse {
        const message = { ...baseDeleteBatchInferenceResponse } as DeleteBatchInferenceResponse;
        message.taskId = object.taskId ?? '';
        return message;
    },
};

export const BatchInferenceServiceService = {
    /** Describes a concrete task */
    describe: {
        path: '/yandex.cloud.ai.batch_inference.v1.BatchInferenceService/Describe',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DescribeBatchInferenceRequest) =>
            Buffer.from(DescribeBatchInferenceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DescribeBatchInferenceRequest.decode(value),
        responseSerialize: (value: DescribeBatchInferenceResponse) =>
            Buffer.from(DescribeBatchInferenceResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => DescribeBatchInferenceResponse.decode(value),
    },
    /** Lists tasks in folder */
    list: {
        path: '/yandex.cloud.ai.batch_inference.v1.BatchInferenceService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListBatchInferencesRequest) =>
            Buffer.from(ListBatchInferencesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListBatchInferencesRequest.decode(value),
        responseSerialize: (value: ListBatchInferencesResponse) =>
            Buffer.from(ListBatchInferencesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListBatchInferencesResponse.decode(value),
    },
    /** Cancels a concrete task */
    cancel: {
        path: '/yandex.cloud.ai.batch_inference.v1.BatchInferenceService/Cancel',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CancelBatchInferenceRequest) =>
            Buffer.from(CancelBatchInferenceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CancelBatchInferenceRequest.decode(value),
        responseSerialize: (value: CancelBatchInferenceResponse) =>
            Buffer.from(CancelBatchInferenceResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => CancelBatchInferenceResponse.decode(value),
    },
    /** Deletes a concrete task */
    delete: {
        path: '/yandex.cloud.ai.batch_inference.v1.BatchInferenceService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteBatchInferenceRequest) =>
            Buffer.from(DeleteBatchInferenceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteBatchInferenceRequest.decode(value),
        responseSerialize: (value: DeleteBatchInferenceResponse) =>
            Buffer.from(DeleteBatchInferenceResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => DeleteBatchInferenceResponse.decode(value),
    },
} as const;

export interface BatchInferenceServiceServer extends UntypedServiceImplementation {
    /** Describes a concrete task */
    describe: handleUnaryCall<DescribeBatchInferenceRequest, DescribeBatchInferenceResponse>;
    /** Lists tasks in folder */
    list: handleUnaryCall<ListBatchInferencesRequest, ListBatchInferencesResponse>;
    /** Cancels a concrete task */
    cancel: handleUnaryCall<CancelBatchInferenceRequest, CancelBatchInferenceResponse>;
    /** Deletes a concrete task */
    delete: handleUnaryCall<DeleteBatchInferenceRequest, DeleteBatchInferenceResponse>;
}

export interface BatchInferenceServiceClient extends Client {
    /** Describes a concrete task */
    describe(
        request: DescribeBatchInferenceRequest,
        callback: (error: ServiceError | null, response: DescribeBatchInferenceResponse) => void,
    ): ClientUnaryCall;
    describe(
        request: DescribeBatchInferenceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: DescribeBatchInferenceResponse) => void,
    ): ClientUnaryCall;
    describe(
        request: DescribeBatchInferenceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: DescribeBatchInferenceResponse) => void,
    ): ClientUnaryCall;
    /** Lists tasks in folder */
    list(
        request: ListBatchInferencesRequest,
        callback: (error: ServiceError | null, response: ListBatchInferencesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListBatchInferencesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListBatchInferencesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListBatchInferencesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListBatchInferencesResponse) => void,
    ): ClientUnaryCall;
    /** Cancels a concrete task */
    cancel(
        request: CancelBatchInferenceRequest,
        callback: (error: ServiceError | null, response: CancelBatchInferenceResponse) => void,
    ): ClientUnaryCall;
    cancel(
        request: CancelBatchInferenceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: CancelBatchInferenceResponse) => void,
    ): ClientUnaryCall;
    cancel(
        request: CancelBatchInferenceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: CancelBatchInferenceResponse) => void,
    ): ClientUnaryCall;
    /** Deletes a concrete task */
    delete(
        request: DeleteBatchInferenceRequest,
        callback: (error: ServiceError | null, response: DeleteBatchInferenceResponse) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteBatchInferenceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: DeleteBatchInferenceResponse) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteBatchInferenceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: DeleteBatchInferenceResponse) => void,
    ): ClientUnaryCall;
}

export const BatchInferenceServiceClient = makeGenericClientConstructor(
    BatchInferenceServiceService,
    'yandex.cloud.ai.batch_inference.v1.BatchInferenceService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): BatchInferenceServiceClient;
    service: typeof BatchInferenceServiceService;
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
