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
    TuningTask_Status,
    TuningTask,
    tuningTask_StatusFromJSON,
    tuningTask_StatusToJSON,
} from '../../../../../yandex/cloud/ai/tuning/v1/tuning_task';
import {
    TuningTypeLora,
    TuningTypePromptTune,
} from '../../../../../yandex/cloud/ai/tuning/v1/tuning_types';
import {
    SchedulerLinear,
    SchedulerConstant,
    SchedulerCosine,
} from '../../../../../yandex/cloud/ai/tuning/v1/tuning_schedulers';
import { OptimizerAdamw } from '../../../../../yandex/cloud/ai/tuning/v1/tuning_optimizers';
import { TuningError } from '../../../../../yandex/cloud/ai/tuning/v1/tuning_error';
import { Operation } from '../../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.ai.tuning.v1';

export interface ListTuningsRequest {
    /** Required field. ID of the folder to list tunings in. */
    folderId: string;
    /** Maximum number of tuning tasks to return per page. */
    pageSize: number;
    /** Token to retrieve the next page of results. */
    pageToken: string;
    status: TuningTask_Status;
}

export interface ListTuningsResponse {
    /** List of tuning tasks in the specified folder. */
    tuningTasks: TuningTask[];
    /** Token to retrieve the next page of results. */
    nextPageToken: string;
}

export interface DescribeTuningRequest {
    tuningTaskId: string;
}

export interface DescribeTuningResponse {
    tuningTask?: TuningTask;
}

export interface CancelTuningRequest {
    tuningTaskId: string;
}

export interface CancelTuningResponse {
    tuningTaskId: string;
}

export interface TuningResponse {
    tuningTaskId: string;
    status: TuningTask_Status;
    targetModelUri: string;
}

export interface TuningMetadata {
    tuningTaskId: string;
    status: TuningTask_Status;
    totalSteps: number;
    currentStep: number;
}

export interface TuningRequest {
    /** Format like a `gpt://{folder_id}/yandex-gpt/latest` */
    baseModelUri: string;
    trainDatasets: TuningRequest_WeightedDataset[];
    validationDatasets: TuningRequest_WeightedDataset[];
    textToTextCompletion?: TextToTextCompletionTuningParams | undefined;
    textClassificationMultilabel?: TextClassificationMultilabelParams | undefined;
    textClassificationMulticlass?: TextClassificationMulticlassParams | undefined;
    /** TextEmbeddingPairParams  is unimplemented */
    textEmbeddingPairParams?: TextEmbeddingPairParams | undefined;
    /** TextEmbeddingTripletParams  is unimplemented */
    textEmbeddingTripletParams?: TextEmbeddingTripletParams | undefined;
    name: string;
    description: string;
    labels: { [key: string]: string };
}

export interface TuningRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface TuningRequest_WeightedDataset {
    datasetId: string;
    weight: number;
}

export interface TextToTextCompletionTuningParams {
    seed: number;
    lr: number;
    nSamples: number;
    additionalArguments: string;
    lora?: TuningTypeLora | undefined;
    promptTune?: TuningTypePromptTune | undefined;
    scheduler?: TextToTextCompletionTuningParams_Scheduler;
    optimizer?: TextToTextCompletionTuningParams_Optimizer;
}

export interface TextToTextCompletionTuningParams_Scheduler {
    linear?: SchedulerLinear | undefined;
    constant?: SchedulerConstant | undefined;
    cosine?: SchedulerCosine | undefined;
    warmupRatio: number;
}

export interface TextToTextCompletionTuningParams_Optimizer {
    adamw?: OptimizerAdamw | undefined;
}

export interface TextClassificationMultilabelParams {
    seed: number;
    lr: number;
    nSamples: number;
    additionalArguments: string;
    lora?: TuningTypeLora | undefined;
    promptTune?: TuningTypePromptTune | undefined;
    scheduler?: TextClassificationMultilabelParams_Scheduler;
    optimizer?: TextClassificationMultilabelParams_Optimizer;
}

export interface TextClassificationMultilabelParams_Scheduler {
    linear?: SchedulerLinear | undefined;
    constant?: SchedulerConstant | undefined;
    cosine?: SchedulerCosine | undefined;
    warmupRatio: number;
}

export interface TextClassificationMultilabelParams_Optimizer {
    adamw?: OptimizerAdamw | undefined;
}

export interface TextClassificationMulticlassParams {
    seed: number;
    lr: number;
    nSamples: number;
    additionalArguments: string;
    lora?: TuningTypeLora | undefined;
    promptTune?: TuningTypePromptTune | undefined;
    scheduler?: TextClassificationMulticlassParams_Scheduler;
    optimizer?: TextClassificationMulticlassParams_Optimizer;
}

export interface TextClassificationMulticlassParams_Scheduler {
    linear?: SchedulerLinear | undefined;
    constant?: SchedulerConstant | undefined;
    cosine?: SchedulerCosine | undefined;
    warmupRatio: number;
}

export interface TextClassificationMulticlassParams_Optimizer {
    adamw?: OptimizerAdamw | undefined;
}

export interface TextEmbeddingPairParams {
    seed: number;
    lr: number;
    nSamples: number;
    additionalArguments: string;
    embeddingDims: number[];
    lora?: TuningTypeLora | undefined;
    promptTune?: TuningTypePromptTune | undefined;
    scheduler?: TextEmbeddingPairParams_Scheduler;
    optimizer?: TextEmbeddingPairParams_Optimizer;
}

export interface TextEmbeddingPairParams_Scheduler {
    linear?: SchedulerLinear | undefined;
    constant?: SchedulerConstant | undefined;
    cosine?: SchedulerCosine | undefined;
    warmupRatio: number | undefined;
}

export interface TextEmbeddingPairParams_Optimizer {
    adamw?: OptimizerAdamw | undefined;
}

export interface TextEmbeddingTripletParams {
    seed: number;
    lr: number;
    nSamples: number;
    additionalArguments: string;
    embeddingDims: number[];
    lora?: TuningTypeLora | undefined;
    promptTune?: TuningTypePromptTune | undefined;
    scheduler?: TextEmbeddingTripletParams_Scheduler;
    optimizer?: TextEmbeddingTripletParams_Optimizer;
}

export interface TextEmbeddingTripletParams_Scheduler {
    linear?: SchedulerLinear | undefined;
    constant?: SchedulerConstant | undefined;
    cosine?: SchedulerCosine | undefined;
    warmupRatio: number | undefined;
}

export interface TextEmbeddingTripletParams_Optimizer {
    adamw?: OptimizerAdamw | undefined;
}

export interface GetMetricsUrlRequest {
    taskId: string;
}

export interface GetMetricsUrlResponse {
    loadUrl: string;
}

export interface GetOptionsRequest {
    taskId: string;
}

export interface GetOptionsResponse {
    taskId: string;
    baseModelUri: string;
    trainDatasets: TuningRequest_WeightedDataset[];
    validationDatasets: TuningRequest_WeightedDataset[];
    textToTextCompletion?: TextToTextCompletionTuningParams | undefined;
    textClassificationMultilabel?: TextClassificationMultilabelParams | undefined;
    textClassificationMulticlass?: TextClassificationMulticlassParams | undefined;
    textEmbeddingPairParams?: TextEmbeddingPairParams | undefined;
    textEmbeddingTripletParams?: TextEmbeddingTripletParams | undefined;
}

export interface ListErrorsRequest {
    tuningTaskId: string;
}

export interface ListErrorsResponse {
    tuningError: TuningError[];
}

const baseListTuningsRequest: object = { folderId: '', pageSize: 0, pageToken: '', status: 0 };

export const ListTuningsRequest = {
    encode(message: ListTuningsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListTuningsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListTuningsRequest } as ListTuningsRequest;
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

    fromJSON(object: any): ListTuningsRequest {
        const message = { ...baseListTuningsRequest } as ListTuningsRequest;
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
                ? tuningTask_StatusFromJSON(object.status)
                : 0;
        return message;
    },

    toJSON(message: ListTuningsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.status !== undefined && (obj.status = tuningTask_StatusToJSON(message.status));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListTuningsRequest>, I>>(
        object: I,
    ): ListTuningsRequest {
        const message = { ...baseListTuningsRequest } as ListTuningsRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.status = object.status ?? 0;
        return message;
    },
};

const baseListTuningsResponse: object = { nextPageToken: '' };

export const ListTuningsResponse = {
    encode(message: ListTuningsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.tuningTasks) {
            TuningTask.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListTuningsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListTuningsResponse } as ListTuningsResponse;
        message.tuningTasks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tuningTasks.push(TuningTask.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListTuningsResponse {
        const message = { ...baseListTuningsResponse } as ListTuningsResponse;
        message.tuningTasks = (object.tuningTasks ?? []).map((e: any) => TuningTask.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListTuningsResponse): unknown {
        const obj: any = {};
        if (message.tuningTasks) {
            obj.tuningTasks = message.tuningTasks.map((e) =>
                e ? TuningTask.toJSON(e) : undefined,
            );
        } else {
            obj.tuningTasks = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListTuningsResponse>, I>>(
        object: I,
    ): ListTuningsResponse {
        const message = { ...baseListTuningsResponse } as ListTuningsResponse;
        message.tuningTasks = object.tuningTasks?.map((e) => TuningTask.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseDescribeTuningRequest: object = { tuningTaskId: '' };

export const DescribeTuningRequest = {
    encode(message: DescribeTuningRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.tuningTaskId !== '') {
            writer.uint32(10).string(message.tuningTaskId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DescribeTuningRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDescribeTuningRequest } as DescribeTuningRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tuningTaskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DescribeTuningRequest {
        const message = { ...baseDescribeTuningRequest } as DescribeTuningRequest;
        message.tuningTaskId =
            object.tuningTaskId !== undefined && object.tuningTaskId !== null
                ? String(object.tuningTaskId)
                : '';
        return message;
    },

    toJSON(message: DescribeTuningRequest): unknown {
        const obj: any = {};
        message.tuningTaskId !== undefined && (obj.tuningTaskId = message.tuningTaskId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DescribeTuningRequest>, I>>(
        object: I,
    ): DescribeTuningRequest {
        const message = { ...baseDescribeTuningRequest } as DescribeTuningRequest;
        message.tuningTaskId = object.tuningTaskId ?? '';
        return message;
    },
};

const baseDescribeTuningResponse: object = {};

export const DescribeTuningResponse = {
    encode(message: DescribeTuningResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.tuningTask !== undefined) {
            TuningTask.encode(message.tuningTask, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DescribeTuningResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDescribeTuningResponse } as DescribeTuningResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tuningTask = TuningTask.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DescribeTuningResponse {
        const message = { ...baseDescribeTuningResponse } as DescribeTuningResponse;
        message.tuningTask =
            object.tuningTask !== undefined && object.tuningTask !== null
                ? TuningTask.fromJSON(object.tuningTask)
                : undefined;
        return message;
    },

    toJSON(message: DescribeTuningResponse): unknown {
        const obj: any = {};
        message.tuningTask !== undefined &&
            (obj.tuningTask = message.tuningTask
                ? TuningTask.toJSON(message.tuningTask)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DescribeTuningResponse>, I>>(
        object: I,
    ): DescribeTuningResponse {
        const message = { ...baseDescribeTuningResponse } as DescribeTuningResponse;
        message.tuningTask =
            object.tuningTask !== undefined && object.tuningTask !== null
                ? TuningTask.fromPartial(object.tuningTask)
                : undefined;
        return message;
    },
};

const baseCancelTuningRequest: object = { tuningTaskId: '' };

export const CancelTuningRequest = {
    encode(message: CancelTuningRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.tuningTaskId !== '') {
            writer.uint32(10).string(message.tuningTaskId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CancelTuningRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCancelTuningRequest } as CancelTuningRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tuningTaskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CancelTuningRequest {
        const message = { ...baseCancelTuningRequest } as CancelTuningRequest;
        message.tuningTaskId =
            object.tuningTaskId !== undefined && object.tuningTaskId !== null
                ? String(object.tuningTaskId)
                : '';
        return message;
    },

    toJSON(message: CancelTuningRequest): unknown {
        const obj: any = {};
        message.tuningTaskId !== undefined && (obj.tuningTaskId = message.tuningTaskId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CancelTuningRequest>, I>>(
        object: I,
    ): CancelTuningRequest {
        const message = { ...baseCancelTuningRequest } as CancelTuningRequest;
        message.tuningTaskId = object.tuningTaskId ?? '';
        return message;
    },
};

const baseCancelTuningResponse: object = { tuningTaskId: '' };

export const CancelTuningResponse = {
    encode(message: CancelTuningResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.tuningTaskId !== '') {
            writer.uint32(10).string(message.tuningTaskId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CancelTuningResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCancelTuningResponse } as CancelTuningResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tuningTaskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CancelTuningResponse {
        const message = { ...baseCancelTuningResponse } as CancelTuningResponse;
        message.tuningTaskId =
            object.tuningTaskId !== undefined && object.tuningTaskId !== null
                ? String(object.tuningTaskId)
                : '';
        return message;
    },

    toJSON(message: CancelTuningResponse): unknown {
        const obj: any = {};
        message.tuningTaskId !== undefined && (obj.tuningTaskId = message.tuningTaskId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CancelTuningResponse>, I>>(
        object: I,
    ): CancelTuningResponse {
        const message = { ...baseCancelTuningResponse } as CancelTuningResponse;
        message.tuningTaskId = object.tuningTaskId ?? '';
        return message;
    },
};

const baseTuningResponse: object = { tuningTaskId: '', status: 0, targetModelUri: '' };

export const TuningResponse = {
    encode(message: TuningResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.tuningTaskId !== '') {
            writer.uint32(26).string(message.tuningTaskId);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.targetModelUri !== '') {
            writer.uint32(42).string(message.targetModelUri);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TuningResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTuningResponse } as TuningResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.tuningTaskId = reader.string();
                    break;
                case 4:
                    message.status = reader.int32() as any;
                    break;
                case 5:
                    message.targetModelUri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TuningResponse {
        const message = { ...baseTuningResponse } as TuningResponse;
        message.tuningTaskId =
            object.tuningTaskId !== undefined && object.tuningTaskId !== null
                ? String(object.tuningTaskId)
                : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? tuningTask_StatusFromJSON(object.status)
                : 0;
        message.targetModelUri =
            object.targetModelUri !== undefined && object.targetModelUri !== null
                ? String(object.targetModelUri)
                : '';
        return message;
    },

    toJSON(message: TuningResponse): unknown {
        const obj: any = {};
        message.tuningTaskId !== undefined && (obj.tuningTaskId = message.tuningTaskId);
        message.status !== undefined && (obj.status = tuningTask_StatusToJSON(message.status));
        message.targetModelUri !== undefined && (obj.targetModelUri = message.targetModelUri);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TuningResponse>, I>>(object: I): TuningResponse {
        const message = { ...baseTuningResponse } as TuningResponse;
        message.tuningTaskId = object.tuningTaskId ?? '';
        message.status = object.status ?? 0;
        message.targetModelUri = object.targetModelUri ?? '';
        return message;
    },
};

const baseTuningMetadata: object = { tuningTaskId: '', status: 0, totalSteps: 0, currentStep: 0 };

export const TuningMetadata = {
    encode(message: TuningMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.tuningTaskId !== '') {
            writer.uint32(10).string(message.tuningTaskId);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        if (message.totalSteps !== 0) {
            writer.uint32(24).int64(message.totalSteps);
        }
        if (message.currentStep !== 0) {
            writer.uint32(32).int64(message.currentStep);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TuningMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTuningMetadata } as TuningMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tuningTaskId = reader.string();
                    break;
                case 2:
                    message.status = reader.int32() as any;
                    break;
                case 3:
                    message.totalSteps = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.currentStep = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TuningMetadata {
        const message = { ...baseTuningMetadata } as TuningMetadata;
        message.tuningTaskId =
            object.tuningTaskId !== undefined && object.tuningTaskId !== null
                ? String(object.tuningTaskId)
                : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? tuningTask_StatusFromJSON(object.status)
                : 0;
        message.totalSteps =
            object.totalSteps !== undefined && object.totalSteps !== null
                ? Number(object.totalSteps)
                : 0;
        message.currentStep =
            object.currentStep !== undefined && object.currentStep !== null
                ? Number(object.currentStep)
                : 0;
        return message;
    },

    toJSON(message: TuningMetadata): unknown {
        const obj: any = {};
        message.tuningTaskId !== undefined && (obj.tuningTaskId = message.tuningTaskId);
        message.status !== undefined && (obj.status = tuningTask_StatusToJSON(message.status));
        message.totalSteps !== undefined && (obj.totalSteps = Math.round(message.totalSteps));
        message.currentStep !== undefined && (obj.currentStep = Math.round(message.currentStep));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TuningMetadata>, I>>(object: I): TuningMetadata {
        const message = { ...baseTuningMetadata } as TuningMetadata;
        message.tuningTaskId = object.tuningTaskId ?? '';
        message.status = object.status ?? 0;
        message.totalSteps = object.totalSteps ?? 0;
        message.currentStep = object.currentStep ?? 0;
        return message;
    },
};

const baseTuningRequest: object = { baseModelUri: '', name: '', description: '' };

export const TuningRequest = {
    encode(message: TuningRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.baseModelUri !== '') {
            writer.uint32(10).string(message.baseModelUri);
        }
        for (const v of message.trainDatasets) {
            TuningRequest_WeightedDataset.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.validationDatasets) {
            TuningRequest_WeightedDataset.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        if (message.textToTextCompletion !== undefined) {
            TextToTextCompletionTuningParams.encode(
                message.textToTextCompletion,
                writer.uint32(802).fork(),
            ).ldelim();
        }
        if (message.textClassificationMultilabel !== undefined) {
            TextClassificationMultilabelParams.encode(
                message.textClassificationMultilabel,
                writer.uint32(810).fork(),
            ).ldelim();
        }
        if (message.textClassificationMulticlass !== undefined) {
            TextClassificationMulticlassParams.encode(
                message.textClassificationMulticlass,
                writer.uint32(818).fork(),
            ).ldelim();
        }
        if (message.textEmbeddingPairParams !== undefined) {
            TextEmbeddingPairParams.encode(
                message.textEmbeddingPairParams,
                writer.uint32(826).fork(),
            ).ldelim();
        }
        if (message.textEmbeddingTripletParams !== undefined) {
            TextEmbeddingTripletParams.encode(
                message.textEmbeddingTripletParams,
                writer.uint32(834).fork(),
            ).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(1602).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(1610).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            TuningRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1618).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TuningRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTuningRequest } as TuningRequest;
        message.trainDatasets = [];
        message.validationDatasets = [];
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseModelUri = reader.string();
                    break;
                case 2:
                    message.trainDatasets.push(
                        TuningRequest_WeightedDataset.decode(reader, reader.uint32()),
                    );
                    break;
                case 3:
                    message.validationDatasets.push(
                        TuningRequest_WeightedDataset.decode(reader, reader.uint32()),
                    );
                    break;
                case 100:
                    message.textToTextCompletion = TextToTextCompletionTuningParams.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 101:
                    message.textClassificationMultilabel =
                        TextClassificationMultilabelParams.decode(reader, reader.uint32());
                    break;
                case 102:
                    message.textClassificationMulticlass =
                        TextClassificationMulticlassParams.decode(reader, reader.uint32());
                    break;
                case 103:
                    message.textEmbeddingPairParams = TextEmbeddingPairParams.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 104:
                    message.textEmbeddingTripletParams = TextEmbeddingTripletParams.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 200:
                    message.name = reader.string();
                    break;
                case 201:
                    message.description = reader.string();
                    break;
                case 202:
                    const entry202 = TuningRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry202.value !== undefined) {
                        message.labels[entry202.key] = entry202.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TuningRequest {
        const message = { ...baseTuningRequest } as TuningRequest;
        message.baseModelUri =
            object.baseModelUri !== undefined && object.baseModelUri !== null
                ? String(object.baseModelUri)
                : '';
        message.trainDatasets = (object.trainDatasets ?? []).map((e: any) =>
            TuningRequest_WeightedDataset.fromJSON(e),
        );
        message.validationDatasets = (object.validationDatasets ?? []).map((e: any) =>
            TuningRequest_WeightedDataset.fromJSON(e),
        );
        message.textToTextCompletion =
            object.textToTextCompletion !== undefined && object.textToTextCompletion !== null
                ? TextToTextCompletionTuningParams.fromJSON(object.textToTextCompletion)
                : undefined;
        message.textClassificationMultilabel =
            object.textClassificationMultilabel !== undefined &&
            object.textClassificationMultilabel !== null
                ? TextClassificationMultilabelParams.fromJSON(object.textClassificationMultilabel)
                : undefined;
        message.textClassificationMulticlass =
            object.textClassificationMulticlass !== undefined &&
            object.textClassificationMulticlass !== null
                ? TextClassificationMulticlassParams.fromJSON(object.textClassificationMulticlass)
                : undefined;
        message.textEmbeddingPairParams =
            object.textEmbeddingPairParams !== undefined && object.textEmbeddingPairParams !== null
                ? TextEmbeddingPairParams.fromJSON(object.textEmbeddingPairParams)
                : undefined;
        message.textEmbeddingTripletParams =
            object.textEmbeddingTripletParams !== undefined &&
            object.textEmbeddingTripletParams !== null
                ? TextEmbeddingTripletParams.fromJSON(object.textEmbeddingTripletParams)
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

    toJSON(message: TuningRequest): unknown {
        const obj: any = {};
        message.baseModelUri !== undefined && (obj.baseModelUri = message.baseModelUri);
        if (message.trainDatasets) {
            obj.trainDatasets = message.trainDatasets.map((e) =>
                e ? TuningRequest_WeightedDataset.toJSON(e) : undefined,
            );
        } else {
            obj.trainDatasets = [];
        }
        if (message.validationDatasets) {
            obj.validationDatasets = message.validationDatasets.map((e) =>
                e ? TuningRequest_WeightedDataset.toJSON(e) : undefined,
            );
        } else {
            obj.validationDatasets = [];
        }
        message.textToTextCompletion !== undefined &&
            (obj.textToTextCompletion = message.textToTextCompletion
                ? TextToTextCompletionTuningParams.toJSON(message.textToTextCompletion)
                : undefined);
        message.textClassificationMultilabel !== undefined &&
            (obj.textClassificationMultilabel = message.textClassificationMultilabel
                ? TextClassificationMultilabelParams.toJSON(message.textClassificationMultilabel)
                : undefined);
        message.textClassificationMulticlass !== undefined &&
            (obj.textClassificationMulticlass = message.textClassificationMulticlass
                ? TextClassificationMulticlassParams.toJSON(message.textClassificationMulticlass)
                : undefined);
        message.textEmbeddingPairParams !== undefined &&
            (obj.textEmbeddingPairParams = message.textEmbeddingPairParams
                ? TextEmbeddingPairParams.toJSON(message.textEmbeddingPairParams)
                : undefined);
        message.textEmbeddingTripletParams !== undefined &&
            (obj.textEmbeddingTripletParams = message.textEmbeddingTripletParams
                ? TextEmbeddingTripletParams.toJSON(message.textEmbeddingTripletParams)
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

    fromPartial<I extends Exact<DeepPartial<TuningRequest>, I>>(object: I): TuningRequest {
        const message = { ...baseTuningRequest } as TuningRequest;
        message.baseModelUri = object.baseModelUri ?? '';
        message.trainDatasets =
            object.trainDatasets?.map((e) => TuningRequest_WeightedDataset.fromPartial(e)) || [];
        message.validationDatasets =
            object.validationDatasets?.map((e) => TuningRequest_WeightedDataset.fromPartial(e)) ||
            [];
        message.textToTextCompletion =
            object.textToTextCompletion !== undefined && object.textToTextCompletion !== null
                ? TextToTextCompletionTuningParams.fromPartial(object.textToTextCompletion)
                : undefined;
        message.textClassificationMultilabel =
            object.textClassificationMultilabel !== undefined &&
            object.textClassificationMultilabel !== null
                ? TextClassificationMultilabelParams.fromPartial(
                      object.textClassificationMultilabel,
                  )
                : undefined;
        message.textClassificationMulticlass =
            object.textClassificationMulticlass !== undefined &&
            object.textClassificationMulticlass !== null
                ? TextClassificationMulticlassParams.fromPartial(
                      object.textClassificationMulticlass,
                  )
                : undefined;
        message.textEmbeddingPairParams =
            object.textEmbeddingPairParams !== undefined && object.textEmbeddingPairParams !== null
                ? TextEmbeddingPairParams.fromPartial(object.textEmbeddingPairParams)
                : undefined;
        message.textEmbeddingTripletParams =
            object.textEmbeddingTripletParams !== undefined &&
            object.textEmbeddingTripletParams !== null
                ? TextEmbeddingTripletParams.fromPartial(object.textEmbeddingTripletParams)
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

const baseTuningRequest_LabelsEntry: object = { key: '', value: '' };

export const TuningRequest_LabelsEntry = {
    encode(
        message: TuningRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): TuningRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTuningRequest_LabelsEntry } as TuningRequest_LabelsEntry;
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

    fromJSON(object: any): TuningRequest_LabelsEntry {
        const message = { ...baseTuningRequest_LabelsEntry } as TuningRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: TuningRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TuningRequest_LabelsEntry>, I>>(
        object: I,
    ): TuningRequest_LabelsEntry {
        const message = { ...baseTuningRequest_LabelsEntry } as TuningRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseTuningRequest_WeightedDataset: object = { datasetId: '', weight: 0 };

export const TuningRequest_WeightedDataset = {
    encode(
        message: TuningRequest_WeightedDataset,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.datasetId !== '') {
            writer.uint32(10).string(message.datasetId);
        }
        if (message.weight !== 0) {
            writer.uint32(17).double(message.weight);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TuningRequest_WeightedDataset {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTuningRequest_WeightedDataset } as TuningRequest_WeightedDataset;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.datasetId = reader.string();
                    break;
                case 2:
                    message.weight = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TuningRequest_WeightedDataset {
        const message = { ...baseTuningRequest_WeightedDataset } as TuningRequest_WeightedDataset;
        message.datasetId =
            object.datasetId !== undefined && object.datasetId !== null
                ? String(object.datasetId)
                : '';
        message.weight =
            object.weight !== undefined && object.weight !== null ? Number(object.weight) : 0;
        return message;
    },

    toJSON(message: TuningRequest_WeightedDataset): unknown {
        const obj: any = {};
        message.datasetId !== undefined && (obj.datasetId = message.datasetId);
        message.weight !== undefined && (obj.weight = message.weight);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TuningRequest_WeightedDataset>, I>>(
        object: I,
    ): TuningRequest_WeightedDataset {
        const message = { ...baseTuningRequest_WeightedDataset } as TuningRequest_WeightedDataset;
        message.datasetId = object.datasetId ?? '';
        message.weight = object.weight ?? 0;
        return message;
    },
};

const baseTextToTextCompletionTuningParams: object = {
    seed: 0,
    lr: 0,
    nSamples: 0,
    additionalArguments: '',
};

export const TextToTextCompletionTuningParams = {
    encode(
        message: TextToTextCompletionTuningParams,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.seed !== 0) {
            writer.uint32(8).int64(message.seed);
        }
        if (message.lr !== 0) {
            writer.uint32(17).double(message.lr);
        }
        if (message.nSamples !== 0) {
            writer.uint32(24).int64(message.nSamples);
        }
        if (message.additionalArguments !== '') {
            writer.uint32(58).string(message.additionalArguments);
        }
        if (message.lora !== undefined) {
            TuningTypeLora.encode(message.lora, writer.uint32(802).fork()).ldelim();
        }
        if (message.promptTune !== undefined) {
            TuningTypePromptTune.encode(message.promptTune, writer.uint32(810).fork()).ldelim();
        }
        if (message.scheduler !== undefined) {
            TextToTextCompletionTuningParams_Scheduler.encode(
                message.scheduler,
                writer.uint32(1602).fork(),
            ).ldelim();
        }
        if (message.optimizer !== undefined) {
            TextToTextCompletionTuningParams_Optimizer.encode(
                message.optimizer,
                writer.uint32(1610).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TextToTextCompletionTuningParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTextToTextCompletionTuningParams,
        } as TextToTextCompletionTuningParams;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.seed = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.lr = reader.double();
                    break;
                case 3:
                    message.nSamples = longToNumber(reader.int64() as Long);
                    break;
                case 7:
                    message.additionalArguments = reader.string();
                    break;
                case 100:
                    message.lora = TuningTypeLora.decode(reader, reader.uint32());
                    break;
                case 101:
                    message.promptTune = TuningTypePromptTune.decode(reader, reader.uint32());
                    break;
                case 200:
                    message.scheduler = TextToTextCompletionTuningParams_Scheduler.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 201:
                    message.optimizer = TextToTextCompletionTuningParams_Optimizer.decode(
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

    fromJSON(object: any): TextToTextCompletionTuningParams {
        const message = {
            ...baseTextToTextCompletionTuningParams,
        } as TextToTextCompletionTuningParams;
        message.seed = object.seed !== undefined && object.seed !== null ? Number(object.seed) : 0;
        message.lr = object.lr !== undefined && object.lr !== null ? Number(object.lr) : 0;
        message.nSamples =
            object.nSamples !== undefined && object.nSamples !== null ? Number(object.nSamples) : 0;
        message.additionalArguments =
            object.additionalArguments !== undefined && object.additionalArguments !== null
                ? String(object.additionalArguments)
                : '';
        message.lora =
            object.lora !== undefined && object.lora !== null
                ? TuningTypeLora.fromJSON(object.lora)
                : undefined;
        message.promptTune =
            object.promptTune !== undefined && object.promptTune !== null
                ? TuningTypePromptTune.fromJSON(object.promptTune)
                : undefined;
        message.scheduler =
            object.scheduler !== undefined && object.scheduler !== null
                ? TextToTextCompletionTuningParams_Scheduler.fromJSON(object.scheduler)
                : undefined;
        message.optimizer =
            object.optimizer !== undefined && object.optimizer !== null
                ? TextToTextCompletionTuningParams_Optimizer.fromJSON(object.optimizer)
                : undefined;
        return message;
    },

    toJSON(message: TextToTextCompletionTuningParams): unknown {
        const obj: any = {};
        message.seed !== undefined && (obj.seed = Math.round(message.seed));
        message.lr !== undefined && (obj.lr = message.lr);
        message.nSamples !== undefined && (obj.nSamples = Math.round(message.nSamples));
        message.additionalArguments !== undefined &&
            (obj.additionalArguments = message.additionalArguments);
        message.lora !== undefined &&
            (obj.lora = message.lora ? TuningTypeLora.toJSON(message.lora) : undefined);
        message.promptTune !== undefined &&
            (obj.promptTune = message.promptTune
                ? TuningTypePromptTune.toJSON(message.promptTune)
                : undefined);
        message.scheduler !== undefined &&
            (obj.scheduler = message.scheduler
                ? TextToTextCompletionTuningParams_Scheduler.toJSON(message.scheduler)
                : undefined);
        message.optimizer !== undefined &&
            (obj.optimizer = message.optimizer
                ? TextToTextCompletionTuningParams_Optimizer.toJSON(message.optimizer)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextToTextCompletionTuningParams>, I>>(
        object: I,
    ): TextToTextCompletionTuningParams {
        const message = {
            ...baseTextToTextCompletionTuningParams,
        } as TextToTextCompletionTuningParams;
        message.seed = object.seed ?? 0;
        message.lr = object.lr ?? 0;
        message.nSamples = object.nSamples ?? 0;
        message.additionalArguments = object.additionalArguments ?? '';
        message.lora =
            object.lora !== undefined && object.lora !== null
                ? TuningTypeLora.fromPartial(object.lora)
                : undefined;
        message.promptTune =
            object.promptTune !== undefined && object.promptTune !== null
                ? TuningTypePromptTune.fromPartial(object.promptTune)
                : undefined;
        message.scheduler =
            object.scheduler !== undefined && object.scheduler !== null
                ? TextToTextCompletionTuningParams_Scheduler.fromPartial(object.scheduler)
                : undefined;
        message.optimizer =
            object.optimizer !== undefined && object.optimizer !== null
                ? TextToTextCompletionTuningParams_Optimizer.fromPartial(object.optimizer)
                : undefined;
        return message;
    },
};

const baseTextToTextCompletionTuningParams_Scheduler: object = { warmupRatio: 0 };

export const TextToTextCompletionTuningParams_Scheduler = {
    encode(
        message: TextToTextCompletionTuningParams_Scheduler,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.linear !== undefined) {
            SchedulerLinear.encode(message.linear, writer.uint32(10).fork()).ldelim();
        }
        if (message.constant !== undefined) {
            SchedulerConstant.encode(message.constant, writer.uint32(18).fork()).ldelim();
        }
        if (message.cosine !== undefined) {
            SchedulerCosine.encode(message.cosine, writer.uint32(26).fork()).ldelim();
        }
        if (message.warmupRatio !== 0) {
            writer.uint32(809).double(message.warmupRatio);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): TextToTextCompletionTuningParams_Scheduler {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTextToTextCompletionTuningParams_Scheduler,
        } as TextToTextCompletionTuningParams_Scheduler;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.linear = SchedulerLinear.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.constant = SchedulerConstant.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.cosine = SchedulerCosine.decode(reader, reader.uint32());
                    break;
                case 101:
                    message.warmupRatio = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TextToTextCompletionTuningParams_Scheduler {
        const message = {
            ...baseTextToTextCompletionTuningParams_Scheduler,
        } as TextToTextCompletionTuningParams_Scheduler;
        message.linear =
            object.linear !== undefined && object.linear !== null
                ? SchedulerLinear.fromJSON(object.linear)
                : undefined;
        message.constant =
            object.constant !== undefined && object.constant !== null
                ? SchedulerConstant.fromJSON(object.constant)
                : undefined;
        message.cosine =
            object.cosine !== undefined && object.cosine !== null
                ? SchedulerCosine.fromJSON(object.cosine)
                : undefined;
        message.warmupRatio =
            object.warmupRatio !== undefined && object.warmupRatio !== null
                ? Number(object.warmupRatio)
                : 0;
        return message;
    },

    toJSON(message: TextToTextCompletionTuningParams_Scheduler): unknown {
        const obj: any = {};
        message.linear !== undefined &&
            (obj.linear = message.linear ? SchedulerLinear.toJSON(message.linear) : undefined);
        message.constant !== undefined &&
            (obj.constant = message.constant
                ? SchedulerConstant.toJSON(message.constant)
                : undefined);
        message.cosine !== undefined &&
            (obj.cosine = message.cosine ? SchedulerCosine.toJSON(message.cosine) : undefined);
        message.warmupRatio !== undefined && (obj.warmupRatio = message.warmupRatio);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextToTextCompletionTuningParams_Scheduler>, I>>(
        object: I,
    ): TextToTextCompletionTuningParams_Scheduler {
        const message = {
            ...baseTextToTextCompletionTuningParams_Scheduler,
        } as TextToTextCompletionTuningParams_Scheduler;
        message.linear =
            object.linear !== undefined && object.linear !== null
                ? SchedulerLinear.fromPartial(object.linear)
                : undefined;
        message.constant =
            object.constant !== undefined && object.constant !== null
                ? SchedulerConstant.fromPartial(object.constant)
                : undefined;
        message.cosine =
            object.cosine !== undefined && object.cosine !== null
                ? SchedulerCosine.fromPartial(object.cosine)
                : undefined;
        message.warmupRatio = object.warmupRatio ?? 0;
        return message;
    },
};

const baseTextToTextCompletionTuningParams_Optimizer: object = {};

export const TextToTextCompletionTuningParams_Optimizer = {
    encode(
        message: TextToTextCompletionTuningParams_Optimizer,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.adamw !== undefined) {
            OptimizerAdamw.encode(message.adamw, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): TextToTextCompletionTuningParams_Optimizer {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTextToTextCompletionTuningParams_Optimizer,
        } as TextToTextCompletionTuningParams_Optimizer;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.adamw = OptimizerAdamw.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TextToTextCompletionTuningParams_Optimizer {
        const message = {
            ...baseTextToTextCompletionTuningParams_Optimizer,
        } as TextToTextCompletionTuningParams_Optimizer;
        message.adamw =
            object.adamw !== undefined && object.adamw !== null
                ? OptimizerAdamw.fromJSON(object.adamw)
                : undefined;
        return message;
    },

    toJSON(message: TextToTextCompletionTuningParams_Optimizer): unknown {
        const obj: any = {};
        message.adamw !== undefined &&
            (obj.adamw = message.adamw ? OptimizerAdamw.toJSON(message.adamw) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextToTextCompletionTuningParams_Optimizer>, I>>(
        object: I,
    ): TextToTextCompletionTuningParams_Optimizer {
        const message = {
            ...baseTextToTextCompletionTuningParams_Optimizer,
        } as TextToTextCompletionTuningParams_Optimizer;
        message.adamw =
            object.adamw !== undefined && object.adamw !== null
                ? OptimizerAdamw.fromPartial(object.adamw)
                : undefined;
        return message;
    },
};

const baseTextClassificationMultilabelParams: object = {
    seed: 0,
    lr: 0,
    nSamples: 0,
    additionalArguments: '',
};

export const TextClassificationMultilabelParams = {
    encode(
        message: TextClassificationMultilabelParams,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.seed !== 0) {
            writer.uint32(8).int64(message.seed);
        }
        if (message.lr !== 0) {
            writer.uint32(17).double(message.lr);
        }
        if (message.nSamples !== 0) {
            writer.uint32(24).int64(message.nSamples);
        }
        if (message.additionalArguments !== '') {
            writer.uint32(58).string(message.additionalArguments);
        }
        if (message.lora !== undefined) {
            TuningTypeLora.encode(message.lora, writer.uint32(802).fork()).ldelim();
        }
        if (message.promptTune !== undefined) {
            TuningTypePromptTune.encode(message.promptTune, writer.uint32(810).fork()).ldelim();
        }
        if (message.scheduler !== undefined) {
            TextClassificationMultilabelParams_Scheduler.encode(
                message.scheduler,
                writer.uint32(1602).fork(),
            ).ldelim();
        }
        if (message.optimizer !== undefined) {
            TextClassificationMultilabelParams_Optimizer.encode(
                message.optimizer,
                writer.uint32(1610).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TextClassificationMultilabelParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTextClassificationMultilabelParams,
        } as TextClassificationMultilabelParams;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.seed = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.lr = reader.double();
                    break;
                case 3:
                    message.nSamples = longToNumber(reader.int64() as Long);
                    break;
                case 7:
                    message.additionalArguments = reader.string();
                    break;
                case 100:
                    message.lora = TuningTypeLora.decode(reader, reader.uint32());
                    break;
                case 101:
                    message.promptTune = TuningTypePromptTune.decode(reader, reader.uint32());
                    break;
                case 200:
                    message.scheduler = TextClassificationMultilabelParams_Scheduler.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 201:
                    message.optimizer = TextClassificationMultilabelParams_Optimizer.decode(
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

    fromJSON(object: any): TextClassificationMultilabelParams {
        const message = {
            ...baseTextClassificationMultilabelParams,
        } as TextClassificationMultilabelParams;
        message.seed = object.seed !== undefined && object.seed !== null ? Number(object.seed) : 0;
        message.lr = object.lr !== undefined && object.lr !== null ? Number(object.lr) : 0;
        message.nSamples =
            object.nSamples !== undefined && object.nSamples !== null ? Number(object.nSamples) : 0;
        message.additionalArguments =
            object.additionalArguments !== undefined && object.additionalArguments !== null
                ? String(object.additionalArguments)
                : '';
        message.lora =
            object.lora !== undefined && object.lora !== null
                ? TuningTypeLora.fromJSON(object.lora)
                : undefined;
        message.promptTune =
            object.promptTune !== undefined && object.promptTune !== null
                ? TuningTypePromptTune.fromJSON(object.promptTune)
                : undefined;
        message.scheduler =
            object.scheduler !== undefined && object.scheduler !== null
                ? TextClassificationMultilabelParams_Scheduler.fromJSON(object.scheduler)
                : undefined;
        message.optimizer =
            object.optimizer !== undefined && object.optimizer !== null
                ? TextClassificationMultilabelParams_Optimizer.fromJSON(object.optimizer)
                : undefined;
        return message;
    },

    toJSON(message: TextClassificationMultilabelParams): unknown {
        const obj: any = {};
        message.seed !== undefined && (obj.seed = Math.round(message.seed));
        message.lr !== undefined && (obj.lr = message.lr);
        message.nSamples !== undefined && (obj.nSamples = Math.round(message.nSamples));
        message.additionalArguments !== undefined &&
            (obj.additionalArguments = message.additionalArguments);
        message.lora !== undefined &&
            (obj.lora = message.lora ? TuningTypeLora.toJSON(message.lora) : undefined);
        message.promptTune !== undefined &&
            (obj.promptTune = message.promptTune
                ? TuningTypePromptTune.toJSON(message.promptTune)
                : undefined);
        message.scheduler !== undefined &&
            (obj.scheduler = message.scheduler
                ? TextClassificationMultilabelParams_Scheduler.toJSON(message.scheduler)
                : undefined);
        message.optimizer !== undefined &&
            (obj.optimizer = message.optimizer
                ? TextClassificationMultilabelParams_Optimizer.toJSON(message.optimizer)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextClassificationMultilabelParams>, I>>(
        object: I,
    ): TextClassificationMultilabelParams {
        const message = {
            ...baseTextClassificationMultilabelParams,
        } as TextClassificationMultilabelParams;
        message.seed = object.seed ?? 0;
        message.lr = object.lr ?? 0;
        message.nSamples = object.nSamples ?? 0;
        message.additionalArguments = object.additionalArguments ?? '';
        message.lora =
            object.lora !== undefined && object.lora !== null
                ? TuningTypeLora.fromPartial(object.lora)
                : undefined;
        message.promptTune =
            object.promptTune !== undefined && object.promptTune !== null
                ? TuningTypePromptTune.fromPartial(object.promptTune)
                : undefined;
        message.scheduler =
            object.scheduler !== undefined && object.scheduler !== null
                ? TextClassificationMultilabelParams_Scheduler.fromPartial(object.scheduler)
                : undefined;
        message.optimizer =
            object.optimizer !== undefined && object.optimizer !== null
                ? TextClassificationMultilabelParams_Optimizer.fromPartial(object.optimizer)
                : undefined;
        return message;
    },
};

const baseTextClassificationMultilabelParams_Scheduler: object = { warmupRatio: 0 };

export const TextClassificationMultilabelParams_Scheduler = {
    encode(
        message: TextClassificationMultilabelParams_Scheduler,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.linear !== undefined) {
            SchedulerLinear.encode(message.linear, writer.uint32(10).fork()).ldelim();
        }
        if (message.constant !== undefined) {
            SchedulerConstant.encode(message.constant, writer.uint32(18).fork()).ldelim();
        }
        if (message.cosine !== undefined) {
            SchedulerCosine.encode(message.cosine, writer.uint32(26).fork()).ldelim();
        }
        if (message.warmupRatio !== 0) {
            writer.uint32(809).double(message.warmupRatio);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): TextClassificationMultilabelParams_Scheduler {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTextClassificationMultilabelParams_Scheduler,
        } as TextClassificationMultilabelParams_Scheduler;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.linear = SchedulerLinear.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.constant = SchedulerConstant.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.cosine = SchedulerCosine.decode(reader, reader.uint32());
                    break;
                case 101:
                    message.warmupRatio = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TextClassificationMultilabelParams_Scheduler {
        const message = {
            ...baseTextClassificationMultilabelParams_Scheduler,
        } as TextClassificationMultilabelParams_Scheduler;
        message.linear =
            object.linear !== undefined && object.linear !== null
                ? SchedulerLinear.fromJSON(object.linear)
                : undefined;
        message.constant =
            object.constant !== undefined && object.constant !== null
                ? SchedulerConstant.fromJSON(object.constant)
                : undefined;
        message.cosine =
            object.cosine !== undefined && object.cosine !== null
                ? SchedulerCosine.fromJSON(object.cosine)
                : undefined;
        message.warmupRatio =
            object.warmupRatio !== undefined && object.warmupRatio !== null
                ? Number(object.warmupRatio)
                : 0;
        return message;
    },

    toJSON(message: TextClassificationMultilabelParams_Scheduler): unknown {
        const obj: any = {};
        message.linear !== undefined &&
            (obj.linear = message.linear ? SchedulerLinear.toJSON(message.linear) : undefined);
        message.constant !== undefined &&
            (obj.constant = message.constant
                ? SchedulerConstant.toJSON(message.constant)
                : undefined);
        message.cosine !== undefined &&
            (obj.cosine = message.cosine ? SchedulerCosine.toJSON(message.cosine) : undefined);
        message.warmupRatio !== undefined && (obj.warmupRatio = message.warmupRatio);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextClassificationMultilabelParams_Scheduler>, I>>(
        object: I,
    ): TextClassificationMultilabelParams_Scheduler {
        const message = {
            ...baseTextClassificationMultilabelParams_Scheduler,
        } as TextClassificationMultilabelParams_Scheduler;
        message.linear =
            object.linear !== undefined && object.linear !== null
                ? SchedulerLinear.fromPartial(object.linear)
                : undefined;
        message.constant =
            object.constant !== undefined && object.constant !== null
                ? SchedulerConstant.fromPartial(object.constant)
                : undefined;
        message.cosine =
            object.cosine !== undefined && object.cosine !== null
                ? SchedulerCosine.fromPartial(object.cosine)
                : undefined;
        message.warmupRatio = object.warmupRatio ?? 0;
        return message;
    },
};

const baseTextClassificationMultilabelParams_Optimizer: object = {};

export const TextClassificationMultilabelParams_Optimizer = {
    encode(
        message: TextClassificationMultilabelParams_Optimizer,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.adamw !== undefined) {
            OptimizerAdamw.encode(message.adamw, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): TextClassificationMultilabelParams_Optimizer {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTextClassificationMultilabelParams_Optimizer,
        } as TextClassificationMultilabelParams_Optimizer;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.adamw = OptimizerAdamw.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TextClassificationMultilabelParams_Optimizer {
        const message = {
            ...baseTextClassificationMultilabelParams_Optimizer,
        } as TextClassificationMultilabelParams_Optimizer;
        message.adamw =
            object.adamw !== undefined && object.adamw !== null
                ? OptimizerAdamw.fromJSON(object.adamw)
                : undefined;
        return message;
    },

    toJSON(message: TextClassificationMultilabelParams_Optimizer): unknown {
        const obj: any = {};
        message.adamw !== undefined &&
            (obj.adamw = message.adamw ? OptimizerAdamw.toJSON(message.adamw) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextClassificationMultilabelParams_Optimizer>, I>>(
        object: I,
    ): TextClassificationMultilabelParams_Optimizer {
        const message = {
            ...baseTextClassificationMultilabelParams_Optimizer,
        } as TextClassificationMultilabelParams_Optimizer;
        message.adamw =
            object.adamw !== undefined && object.adamw !== null
                ? OptimizerAdamw.fromPartial(object.adamw)
                : undefined;
        return message;
    },
};

const baseTextClassificationMulticlassParams: object = {
    seed: 0,
    lr: 0,
    nSamples: 0,
    additionalArguments: '',
};

export const TextClassificationMulticlassParams = {
    encode(
        message: TextClassificationMulticlassParams,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.seed !== 0) {
            writer.uint32(8).int64(message.seed);
        }
        if (message.lr !== 0) {
            writer.uint32(17).double(message.lr);
        }
        if (message.nSamples !== 0) {
            writer.uint32(24).int64(message.nSamples);
        }
        if (message.additionalArguments !== '') {
            writer.uint32(58).string(message.additionalArguments);
        }
        if (message.lora !== undefined) {
            TuningTypeLora.encode(message.lora, writer.uint32(802).fork()).ldelim();
        }
        if (message.promptTune !== undefined) {
            TuningTypePromptTune.encode(message.promptTune, writer.uint32(810).fork()).ldelim();
        }
        if (message.scheduler !== undefined) {
            TextClassificationMulticlassParams_Scheduler.encode(
                message.scheduler,
                writer.uint32(1602).fork(),
            ).ldelim();
        }
        if (message.optimizer !== undefined) {
            TextClassificationMulticlassParams_Optimizer.encode(
                message.optimizer,
                writer.uint32(1610).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TextClassificationMulticlassParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTextClassificationMulticlassParams,
        } as TextClassificationMulticlassParams;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.seed = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.lr = reader.double();
                    break;
                case 3:
                    message.nSamples = longToNumber(reader.int64() as Long);
                    break;
                case 7:
                    message.additionalArguments = reader.string();
                    break;
                case 100:
                    message.lora = TuningTypeLora.decode(reader, reader.uint32());
                    break;
                case 101:
                    message.promptTune = TuningTypePromptTune.decode(reader, reader.uint32());
                    break;
                case 200:
                    message.scheduler = TextClassificationMulticlassParams_Scheduler.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 201:
                    message.optimizer = TextClassificationMulticlassParams_Optimizer.decode(
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

    fromJSON(object: any): TextClassificationMulticlassParams {
        const message = {
            ...baseTextClassificationMulticlassParams,
        } as TextClassificationMulticlassParams;
        message.seed = object.seed !== undefined && object.seed !== null ? Number(object.seed) : 0;
        message.lr = object.lr !== undefined && object.lr !== null ? Number(object.lr) : 0;
        message.nSamples =
            object.nSamples !== undefined && object.nSamples !== null ? Number(object.nSamples) : 0;
        message.additionalArguments =
            object.additionalArguments !== undefined && object.additionalArguments !== null
                ? String(object.additionalArguments)
                : '';
        message.lora =
            object.lora !== undefined && object.lora !== null
                ? TuningTypeLora.fromJSON(object.lora)
                : undefined;
        message.promptTune =
            object.promptTune !== undefined && object.promptTune !== null
                ? TuningTypePromptTune.fromJSON(object.promptTune)
                : undefined;
        message.scheduler =
            object.scheduler !== undefined && object.scheduler !== null
                ? TextClassificationMulticlassParams_Scheduler.fromJSON(object.scheduler)
                : undefined;
        message.optimizer =
            object.optimizer !== undefined && object.optimizer !== null
                ? TextClassificationMulticlassParams_Optimizer.fromJSON(object.optimizer)
                : undefined;
        return message;
    },

    toJSON(message: TextClassificationMulticlassParams): unknown {
        const obj: any = {};
        message.seed !== undefined && (obj.seed = Math.round(message.seed));
        message.lr !== undefined && (obj.lr = message.lr);
        message.nSamples !== undefined && (obj.nSamples = Math.round(message.nSamples));
        message.additionalArguments !== undefined &&
            (obj.additionalArguments = message.additionalArguments);
        message.lora !== undefined &&
            (obj.lora = message.lora ? TuningTypeLora.toJSON(message.lora) : undefined);
        message.promptTune !== undefined &&
            (obj.promptTune = message.promptTune
                ? TuningTypePromptTune.toJSON(message.promptTune)
                : undefined);
        message.scheduler !== undefined &&
            (obj.scheduler = message.scheduler
                ? TextClassificationMulticlassParams_Scheduler.toJSON(message.scheduler)
                : undefined);
        message.optimizer !== undefined &&
            (obj.optimizer = message.optimizer
                ? TextClassificationMulticlassParams_Optimizer.toJSON(message.optimizer)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextClassificationMulticlassParams>, I>>(
        object: I,
    ): TextClassificationMulticlassParams {
        const message = {
            ...baseTextClassificationMulticlassParams,
        } as TextClassificationMulticlassParams;
        message.seed = object.seed ?? 0;
        message.lr = object.lr ?? 0;
        message.nSamples = object.nSamples ?? 0;
        message.additionalArguments = object.additionalArguments ?? '';
        message.lora =
            object.lora !== undefined && object.lora !== null
                ? TuningTypeLora.fromPartial(object.lora)
                : undefined;
        message.promptTune =
            object.promptTune !== undefined && object.promptTune !== null
                ? TuningTypePromptTune.fromPartial(object.promptTune)
                : undefined;
        message.scheduler =
            object.scheduler !== undefined && object.scheduler !== null
                ? TextClassificationMulticlassParams_Scheduler.fromPartial(object.scheduler)
                : undefined;
        message.optimizer =
            object.optimizer !== undefined && object.optimizer !== null
                ? TextClassificationMulticlassParams_Optimizer.fromPartial(object.optimizer)
                : undefined;
        return message;
    },
};

const baseTextClassificationMulticlassParams_Scheduler: object = { warmupRatio: 0 };

export const TextClassificationMulticlassParams_Scheduler = {
    encode(
        message: TextClassificationMulticlassParams_Scheduler,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.linear !== undefined) {
            SchedulerLinear.encode(message.linear, writer.uint32(10).fork()).ldelim();
        }
        if (message.constant !== undefined) {
            SchedulerConstant.encode(message.constant, writer.uint32(18).fork()).ldelim();
        }
        if (message.cosine !== undefined) {
            SchedulerCosine.encode(message.cosine, writer.uint32(26).fork()).ldelim();
        }
        if (message.warmupRatio !== 0) {
            writer.uint32(809).double(message.warmupRatio);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): TextClassificationMulticlassParams_Scheduler {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTextClassificationMulticlassParams_Scheduler,
        } as TextClassificationMulticlassParams_Scheduler;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.linear = SchedulerLinear.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.constant = SchedulerConstant.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.cosine = SchedulerCosine.decode(reader, reader.uint32());
                    break;
                case 101:
                    message.warmupRatio = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TextClassificationMulticlassParams_Scheduler {
        const message = {
            ...baseTextClassificationMulticlassParams_Scheduler,
        } as TextClassificationMulticlassParams_Scheduler;
        message.linear =
            object.linear !== undefined && object.linear !== null
                ? SchedulerLinear.fromJSON(object.linear)
                : undefined;
        message.constant =
            object.constant !== undefined && object.constant !== null
                ? SchedulerConstant.fromJSON(object.constant)
                : undefined;
        message.cosine =
            object.cosine !== undefined && object.cosine !== null
                ? SchedulerCosine.fromJSON(object.cosine)
                : undefined;
        message.warmupRatio =
            object.warmupRatio !== undefined && object.warmupRatio !== null
                ? Number(object.warmupRatio)
                : 0;
        return message;
    },

    toJSON(message: TextClassificationMulticlassParams_Scheduler): unknown {
        const obj: any = {};
        message.linear !== undefined &&
            (obj.linear = message.linear ? SchedulerLinear.toJSON(message.linear) : undefined);
        message.constant !== undefined &&
            (obj.constant = message.constant
                ? SchedulerConstant.toJSON(message.constant)
                : undefined);
        message.cosine !== undefined &&
            (obj.cosine = message.cosine ? SchedulerCosine.toJSON(message.cosine) : undefined);
        message.warmupRatio !== undefined && (obj.warmupRatio = message.warmupRatio);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextClassificationMulticlassParams_Scheduler>, I>>(
        object: I,
    ): TextClassificationMulticlassParams_Scheduler {
        const message = {
            ...baseTextClassificationMulticlassParams_Scheduler,
        } as TextClassificationMulticlassParams_Scheduler;
        message.linear =
            object.linear !== undefined && object.linear !== null
                ? SchedulerLinear.fromPartial(object.linear)
                : undefined;
        message.constant =
            object.constant !== undefined && object.constant !== null
                ? SchedulerConstant.fromPartial(object.constant)
                : undefined;
        message.cosine =
            object.cosine !== undefined && object.cosine !== null
                ? SchedulerCosine.fromPartial(object.cosine)
                : undefined;
        message.warmupRatio = object.warmupRatio ?? 0;
        return message;
    },
};

const baseTextClassificationMulticlassParams_Optimizer: object = {};

export const TextClassificationMulticlassParams_Optimizer = {
    encode(
        message: TextClassificationMulticlassParams_Optimizer,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.adamw !== undefined) {
            OptimizerAdamw.encode(message.adamw, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): TextClassificationMulticlassParams_Optimizer {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTextClassificationMulticlassParams_Optimizer,
        } as TextClassificationMulticlassParams_Optimizer;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.adamw = OptimizerAdamw.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TextClassificationMulticlassParams_Optimizer {
        const message = {
            ...baseTextClassificationMulticlassParams_Optimizer,
        } as TextClassificationMulticlassParams_Optimizer;
        message.adamw =
            object.adamw !== undefined && object.adamw !== null
                ? OptimizerAdamw.fromJSON(object.adamw)
                : undefined;
        return message;
    },

    toJSON(message: TextClassificationMulticlassParams_Optimizer): unknown {
        const obj: any = {};
        message.adamw !== undefined &&
            (obj.adamw = message.adamw ? OptimizerAdamw.toJSON(message.adamw) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextClassificationMulticlassParams_Optimizer>, I>>(
        object: I,
    ): TextClassificationMulticlassParams_Optimizer {
        const message = {
            ...baseTextClassificationMulticlassParams_Optimizer,
        } as TextClassificationMulticlassParams_Optimizer;
        message.adamw =
            object.adamw !== undefined && object.adamw !== null
                ? OptimizerAdamw.fromPartial(object.adamw)
                : undefined;
        return message;
    },
};

const baseTextEmbeddingPairParams: object = {
    seed: 0,
    lr: 0,
    nSamples: 0,
    additionalArguments: '',
    embeddingDims: 0,
};

export const TextEmbeddingPairParams = {
    encode(message: TextEmbeddingPairParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.seed !== 0) {
            writer.uint32(8).int64(message.seed);
        }
        if (message.lr !== 0) {
            writer.uint32(17).double(message.lr);
        }
        if (message.nSamples !== 0) {
            writer.uint32(24).int64(message.nSamples);
        }
        if (message.additionalArguments !== '') {
            writer.uint32(58).string(message.additionalArguments);
        }
        writer.uint32(66).fork();
        for (const v of message.embeddingDims) {
            writer.int64(v);
        }
        writer.ldelim();
        if (message.lora !== undefined) {
            TuningTypeLora.encode(message.lora, writer.uint32(802).fork()).ldelim();
        }
        if (message.promptTune !== undefined) {
            TuningTypePromptTune.encode(message.promptTune, writer.uint32(810).fork()).ldelim();
        }
        if (message.scheduler !== undefined) {
            TextEmbeddingPairParams_Scheduler.encode(
                message.scheduler,
                writer.uint32(1602).fork(),
            ).ldelim();
        }
        if (message.optimizer !== undefined) {
            TextEmbeddingPairParams_Optimizer.encode(
                message.optimizer,
                writer.uint32(1610).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TextEmbeddingPairParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTextEmbeddingPairParams } as TextEmbeddingPairParams;
        message.embeddingDims = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.seed = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.lr = reader.double();
                    break;
                case 3:
                    message.nSamples = longToNumber(reader.int64() as Long);
                    break;
                case 7:
                    message.additionalArguments = reader.string();
                    break;
                case 8:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.embeddingDims.push(longToNumber(reader.int64() as Long));
                        }
                    } else {
                        message.embeddingDims.push(longToNumber(reader.int64() as Long));
                    }
                    break;
                case 100:
                    message.lora = TuningTypeLora.decode(reader, reader.uint32());
                    break;
                case 101:
                    message.promptTune = TuningTypePromptTune.decode(reader, reader.uint32());
                    break;
                case 200:
                    message.scheduler = TextEmbeddingPairParams_Scheduler.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 201:
                    message.optimizer = TextEmbeddingPairParams_Optimizer.decode(
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

    fromJSON(object: any): TextEmbeddingPairParams {
        const message = { ...baseTextEmbeddingPairParams } as TextEmbeddingPairParams;
        message.seed = object.seed !== undefined && object.seed !== null ? Number(object.seed) : 0;
        message.lr = object.lr !== undefined && object.lr !== null ? Number(object.lr) : 0;
        message.nSamples =
            object.nSamples !== undefined && object.nSamples !== null ? Number(object.nSamples) : 0;
        message.additionalArguments =
            object.additionalArguments !== undefined && object.additionalArguments !== null
                ? String(object.additionalArguments)
                : '';
        message.embeddingDims = (object.embeddingDims ?? []).map((e: any) => Number(e));
        message.lora =
            object.lora !== undefined && object.lora !== null
                ? TuningTypeLora.fromJSON(object.lora)
                : undefined;
        message.promptTune =
            object.promptTune !== undefined && object.promptTune !== null
                ? TuningTypePromptTune.fromJSON(object.promptTune)
                : undefined;
        message.scheduler =
            object.scheduler !== undefined && object.scheduler !== null
                ? TextEmbeddingPairParams_Scheduler.fromJSON(object.scheduler)
                : undefined;
        message.optimizer =
            object.optimizer !== undefined && object.optimizer !== null
                ? TextEmbeddingPairParams_Optimizer.fromJSON(object.optimizer)
                : undefined;
        return message;
    },

    toJSON(message: TextEmbeddingPairParams): unknown {
        const obj: any = {};
        message.seed !== undefined && (obj.seed = Math.round(message.seed));
        message.lr !== undefined && (obj.lr = message.lr);
        message.nSamples !== undefined && (obj.nSamples = Math.round(message.nSamples));
        message.additionalArguments !== undefined &&
            (obj.additionalArguments = message.additionalArguments);
        if (message.embeddingDims) {
            obj.embeddingDims = message.embeddingDims.map((e) => Math.round(e));
        } else {
            obj.embeddingDims = [];
        }
        message.lora !== undefined &&
            (obj.lora = message.lora ? TuningTypeLora.toJSON(message.lora) : undefined);
        message.promptTune !== undefined &&
            (obj.promptTune = message.promptTune
                ? TuningTypePromptTune.toJSON(message.promptTune)
                : undefined);
        message.scheduler !== undefined &&
            (obj.scheduler = message.scheduler
                ? TextEmbeddingPairParams_Scheduler.toJSON(message.scheduler)
                : undefined);
        message.optimizer !== undefined &&
            (obj.optimizer = message.optimizer
                ? TextEmbeddingPairParams_Optimizer.toJSON(message.optimizer)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextEmbeddingPairParams>, I>>(
        object: I,
    ): TextEmbeddingPairParams {
        const message = { ...baseTextEmbeddingPairParams } as TextEmbeddingPairParams;
        message.seed = object.seed ?? 0;
        message.lr = object.lr ?? 0;
        message.nSamples = object.nSamples ?? 0;
        message.additionalArguments = object.additionalArguments ?? '';
        message.embeddingDims = object.embeddingDims?.map((e) => e) || [];
        message.lora =
            object.lora !== undefined && object.lora !== null
                ? TuningTypeLora.fromPartial(object.lora)
                : undefined;
        message.promptTune =
            object.promptTune !== undefined && object.promptTune !== null
                ? TuningTypePromptTune.fromPartial(object.promptTune)
                : undefined;
        message.scheduler =
            object.scheduler !== undefined && object.scheduler !== null
                ? TextEmbeddingPairParams_Scheduler.fromPartial(object.scheduler)
                : undefined;
        message.optimizer =
            object.optimizer !== undefined && object.optimizer !== null
                ? TextEmbeddingPairParams_Optimizer.fromPartial(object.optimizer)
                : undefined;
        return message;
    },
};

const baseTextEmbeddingPairParams_Scheduler: object = {};

export const TextEmbeddingPairParams_Scheduler = {
    encode(
        message: TextEmbeddingPairParams_Scheduler,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.linear !== undefined) {
            SchedulerLinear.encode(message.linear, writer.uint32(10).fork()).ldelim();
        }
        if (message.constant !== undefined) {
            SchedulerConstant.encode(message.constant, writer.uint32(18).fork()).ldelim();
        }
        if (message.cosine !== undefined) {
            SchedulerCosine.encode(message.cosine, writer.uint32(26).fork()).ldelim();
        }
        if (message.warmupRatio !== undefined) {
            writer.uint32(809).double(message.warmupRatio);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TextEmbeddingPairParams_Scheduler {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTextEmbeddingPairParams_Scheduler,
        } as TextEmbeddingPairParams_Scheduler;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.linear = SchedulerLinear.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.constant = SchedulerConstant.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.cosine = SchedulerCosine.decode(reader, reader.uint32());
                    break;
                case 101:
                    message.warmupRatio = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TextEmbeddingPairParams_Scheduler {
        const message = {
            ...baseTextEmbeddingPairParams_Scheduler,
        } as TextEmbeddingPairParams_Scheduler;
        message.linear =
            object.linear !== undefined && object.linear !== null
                ? SchedulerLinear.fromJSON(object.linear)
                : undefined;
        message.constant =
            object.constant !== undefined && object.constant !== null
                ? SchedulerConstant.fromJSON(object.constant)
                : undefined;
        message.cosine =
            object.cosine !== undefined && object.cosine !== null
                ? SchedulerCosine.fromJSON(object.cosine)
                : undefined;
        message.warmupRatio =
            object.warmupRatio !== undefined && object.warmupRatio !== null
                ? Number(object.warmupRatio)
                : undefined;
        return message;
    },

    toJSON(message: TextEmbeddingPairParams_Scheduler): unknown {
        const obj: any = {};
        message.linear !== undefined &&
            (obj.linear = message.linear ? SchedulerLinear.toJSON(message.linear) : undefined);
        message.constant !== undefined &&
            (obj.constant = message.constant
                ? SchedulerConstant.toJSON(message.constant)
                : undefined);
        message.cosine !== undefined &&
            (obj.cosine = message.cosine ? SchedulerCosine.toJSON(message.cosine) : undefined);
        message.warmupRatio !== undefined && (obj.warmupRatio = message.warmupRatio);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextEmbeddingPairParams_Scheduler>, I>>(
        object: I,
    ): TextEmbeddingPairParams_Scheduler {
        const message = {
            ...baseTextEmbeddingPairParams_Scheduler,
        } as TextEmbeddingPairParams_Scheduler;
        message.linear =
            object.linear !== undefined && object.linear !== null
                ? SchedulerLinear.fromPartial(object.linear)
                : undefined;
        message.constant =
            object.constant !== undefined && object.constant !== null
                ? SchedulerConstant.fromPartial(object.constant)
                : undefined;
        message.cosine =
            object.cosine !== undefined && object.cosine !== null
                ? SchedulerCosine.fromPartial(object.cosine)
                : undefined;
        message.warmupRatio = object.warmupRatio ?? undefined;
        return message;
    },
};

const baseTextEmbeddingPairParams_Optimizer: object = {};

export const TextEmbeddingPairParams_Optimizer = {
    encode(
        message: TextEmbeddingPairParams_Optimizer,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.adamw !== undefined) {
            OptimizerAdamw.encode(message.adamw, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TextEmbeddingPairParams_Optimizer {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTextEmbeddingPairParams_Optimizer,
        } as TextEmbeddingPairParams_Optimizer;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.adamw = OptimizerAdamw.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TextEmbeddingPairParams_Optimizer {
        const message = {
            ...baseTextEmbeddingPairParams_Optimizer,
        } as TextEmbeddingPairParams_Optimizer;
        message.adamw =
            object.adamw !== undefined && object.adamw !== null
                ? OptimizerAdamw.fromJSON(object.adamw)
                : undefined;
        return message;
    },

    toJSON(message: TextEmbeddingPairParams_Optimizer): unknown {
        const obj: any = {};
        message.adamw !== undefined &&
            (obj.adamw = message.adamw ? OptimizerAdamw.toJSON(message.adamw) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextEmbeddingPairParams_Optimizer>, I>>(
        object: I,
    ): TextEmbeddingPairParams_Optimizer {
        const message = {
            ...baseTextEmbeddingPairParams_Optimizer,
        } as TextEmbeddingPairParams_Optimizer;
        message.adamw =
            object.adamw !== undefined && object.adamw !== null
                ? OptimizerAdamw.fromPartial(object.adamw)
                : undefined;
        return message;
    },
};

const baseTextEmbeddingTripletParams: object = {
    seed: 0,
    lr: 0,
    nSamples: 0,
    additionalArguments: '',
    embeddingDims: 0,
};

export const TextEmbeddingTripletParams = {
    encode(
        message: TextEmbeddingTripletParams,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.seed !== 0) {
            writer.uint32(8).int64(message.seed);
        }
        if (message.lr !== 0) {
            writer.uint32(17).double(message.lr);
        }
        if (message.nSamples !== 0) {
            writer.uint32(24).int64(message.nSamples);
        }
        if (message.additionalArguments !== '') {
            writer.uint32(58).string(message.additionalArguments);
        }
        writer.uint32(66).fork();
        for (const v of message.embeddingDims) {
            writer.int64(v);
        }
        writer.ldelim();
        if (message.lora !== undefined) {
            TuningTypeLora.encode(message.lora, writer.uint32(802).fork()).ldelim();
        }
        if (message.promptTune !== undefined) {
            TuningTypePromptTune.encode(message.promptTune, writer.uint32(810).fork()).ldelim();
        }
        if (message.scheduler !== undefined) {
            TextEmbeddingTripletParams_Scheduler.encode(
                message.scheduler,
                writer.uint32(1602).fork(),
            ).ldelim();
        }
        if (message.optimizer !== undefined) {
            TextEmbeddingTripletParams_Optimizer.encode(
                message.optimizer,
                writer.uint32(1610).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TextEmbeddingTripletParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTextEmbeddingTripletParams } as TextEmbeddingTripletParams;
        message.embeddingDims = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.seed = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.lr = reader.double();
                    break;
                case 3:
                    message.nSamples = longToNumber(reader.int64() as Long);
                    break;
                case 7:
                    message.additionalArguments = reader.string();
                    break;
                case 8:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.embeddingDims.push(longToNumber(reader.int64() as Long));
                        }
                    } else {
                        message.embeddingDims.push(longToNumber(reader.int64() as Long));
                    }
                    break;
                case 100:
                    message.lora = TuningTypeLora.decode(reader, reader.uint32());
                    break;
                case 101:
                    message.promptTune = TuningTypePromptTune.decode(reader, reader.uint32());
                    break;
                case 200:
                    message.scheduler = TextEmbeddingTripletParams_Scheduler.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 201:
                    message.optimizer = TextEmbeddingTripletParams_Optimizer.decode(
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

    fromJSON(object: any): TextEmbeddingTripletParams {
        const message = { ...baseTextEmbeddingTripletParams } as TextEmbeddingTripletParams;
        message.seed = object.seed !== undefined && object.seed !== null ? Number(object.seed) : 0;
        message.lr = object.lr !== undefined && object.lr !== null ? Number(object.lr) : 0;
        message.nSamples =
            object.nSamples !== undefined && object.nSamples !== null ? Number(object.nSamples) : 0;
        message.additionalArguments =
            object.additionalArguments !== undefined && object.additionalArguments !== null
                ? String(object.additionalArguments)
                : '';
        message.embeddingDims = (object.embeddingDims ?? []).map((e: any) => Number(e));
        message.lora =
            object.lora !== undefined && object.lora !== null
                ? TuningTypeLora.fromJSON(object.lora)
                : undefined;
        message.promptTune =
            object.promptTune !== undefined && object.promptTune !== null
                ? TuningTypePromptTune.fromJSON(object.promptTune)
                : undefined;
        message.scheduler =
            object.scheduler !== undefined && object.scheduler !== null
                ? TextEmbeddingTripletParams_Scheduler.fromJSON(object.scheduler)
                : undefined;
        message.optimizer =
            object.optimizer !== undefined && object.optimizer !== null
                ? TextEmbeddingTripletParams_Optimizer.fromJSON(object.optimizer)
                : undefined;
        return message;
    },

    toJSON(message: TextEmbeddingTripletParams): unknown {
        const obj: any = {};
        message.seed !== undefined && (obj.seed = Math.round(message.seed));
        message.lr !== undefined && (obj.lr = message.lr);
        message.nSamples !== undefined && (obj.nSamples = Math.round(message.nSamples));
        message.additionalArguments !== undefined &&
            (obj.additionalArguments = message.additionalArguments);
        if (message.embeddingDims) {
            obj.embeddingDims = message.embeddingDims.map((e) => Math.round(e));
        } else {
            obj.embeddingDims = [];
        }
        message.lora !== undefined &&
            (obj.lora = message.lora ? TuningTypeLora.toJSON(message.lora) : undefined);
        message.promptTune !== undefined &&
            (obj.promptTune = message.promptTune
                ? TuningTypePromptTune.toJSON(message.promptTune)
                : undefined);
        message.scheduler !== undefined &&
            (obj.scheduler = message.scheduler
                ? TextEmbeddingTripletParams_Scheduler.toJSON(message.scheduler)
                : undefined);
        message.optimizer !== undefined &&
            (obj.optimizer = message.optimizer
                ? TextEmbeddingTripletParams_Optimizer.toJSON(message.optimizer)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextEmbeddingTripletParams>, I>>(
        object: I,
    ): TextEmbeddingTripletParams {
        const message = { ...baseTextEmbeddingTripletParams } as TextEmbeddingTripletParams;
        message.seed = object.seed ?? 0;
        message.lr = object.lr ?? 0;
        message.nSamples = object.nSamples ?? 0;
        message.additionalArguments = object.additionalArguments ?? '';
        message.embeddingDims = object.embeddingDims?.map((e) => e) || [];
        message.lora =
            object.lora !== undefined && object.lora !== null
                ? TuningTypeLora.fromPartial(object.lora)
                : undefined;
        message.promptTune =
            object.promptTune !== undefined && object.promptTune !== null
                ? TuningTypePromptTune.fromPartial(object.promptTune)
                : undefined;
        message.scheduler =
            object.scheduler !== undefined && object.scheduler !== null
                ? TextEmbeddingTripletParams_Scheduler.fromPartial(object.scheduler)
                : undefined;
        message.optimizer =
            object.optimizer !== undefined && object.optimizer !== null
                ? TextEmbeddingTripletParams_Optimizer.fromPartial(object.optimizer)
                : undefined;
        return message;
    },
};

const baseTextEmbeddingTripletParams_Scheduler: object = {};

export const TextEmbeddingTripletParams_Scheduler = {
    encode(
        message: TextEmbeddingTripletParams_Scheduler,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.linear !== undefined) {
            SchedulerLinear.encode(message.linear, writer.uint32(10).fork()).ldelim();
        }
        if (message.constant !== undefined) {
            SchedulerConstant.encode(message.constant, writer.uint32(18).fork()).ldelim();
        }
        if (message.cosine !== undefined) {
            SchedulerCosine.encode(message.cosine, writer.uint32(26).fork()).ldelim();
        }
        if (message.warmupRatio !== undefined) {
            writer.uint32(809).double(message.warmupRatio);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TextEmbeddingTripletParams_Scheduler {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTextEmbeddingTripletParams_Scheduler,
        } as TextEmbeddingTripletParams_Scheduler;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.linear = SchedulerLinear.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.constant = SchedulerConstant.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.cosine = SchedulerCosine.decode(reader, reader.uint32());
                    break;
                case 101:
                    message.warmupRatio = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TextEmbeddingTripletParams_Scheduler {
        const message = {
            ...baseTextEmbeddingTripletParams_Scheduler,
        } as TextEmbeddingTripletParams_Scheduler;
        message.linear =
            object.linear !== undefined && object.linear !== null
                ? SchedulerLinear.fromJSON(object.linear)
                : undefined;
        message.constant =
            object.constant !== undefined && object.constant !== null
                ? SchedulerConstant.fromJSON(object.constant)
                : undefined;
        message.cosine =
            object.cosine !== undefined && object.cosine !== null
                ? SchedulerCosine.fromJSON(object.cosine)
                : undefined;
        message.warmupRatio =
            object.warmupRatio !== undefined && object.warmupRatio !== null
                ? Number(object.warmupRatio)
                : undefined;
        return message;
    },

    toJSON(message: TextEmbeddingTripletParams_Scheduler): unknown {
        const obj: any = {};
        message.linear !== undefined &&
            (obj.linear = message.linear ? SchedulerLinear.toJSON(message.linear) : undefined);
        message.constant !== undefined &&
            (obj.constant = message.constant
                ? SchedulerConstant.toJSON(message.constant)
                : undefined);
        message.cosine !== undefined &&
            (obj.cosine = message.cosine ? SchedulerCosine.toJSON(message.cosine) : undefined);
        message.warmupRatio !== undefined && (obj.warmupRatio = message.warmupRatio);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextEmbeddingTripletParams_Scheduler>, I>>(
        object: I,
    ): TextEmbeddingTripletParams_Scheduler {
        const message = {
            ...baseTextEmbeddingTripletParams_Scheduler,
        } as TextEmbeddingTripletParams_Scheduler;
        message.linear =
            object.linear !== undefined && object.linear !== null
                ? SchedulerLinear.fromPartial(object.linear)
                : undefined;
        message.constant =
            object.constant !== undefined && object.constant !== null
                ? SchedulerConstant.fromPartial(object.constant)
                : undefined;
        message.cosine =
            object.cosine !== undefined && object.cosine !== null
                ? SchedulerCosine.fromPartial(object.cosine)
                : undefined;
        message.warmupRatio = object.warmupRatio ?? undefined;
        return message;
    },
};

const baseTextEmbeddingTripletParams_Optimizer: object = {};

export const TextEmbeddingTripletParams_Optimizer = {
    encode(
        message: TextEmbeddingTripletParams_Optimizer,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.adamw !== undefined) {
            OptimizerAdamw.encode(message.adamw, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TextEmbeddingTripletParams_Optimizer {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTextEmbeddingTripletParams_Optimizer,
        } as TextEmbeddingTripletParams_Optimizer;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.adamw = OptimizerAdamw.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TextEmbeddingTripletParams_Optimizer {
        const message = {
            ...baseTextEmbeddingTripletParams_Optimizer,
        } as TextEmbeddingTripletParams_Optimizer;
        message.adamw =
            object.adamw !== undefined && object.adamw !== null
                ? OptimizerAdamw.fromJSON(object.adamw)
                : undefined;
        return message;
    },

    toJSON(message: TextEmbeddingTripletParams_Optimizer): unknown {
        const obj: any = {};
        message.adamw !== undefined &&
            (obj.adamw = message.adamw ? OptimizerAdamw.toJSON(message.adamw) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextEmbeddingTripletParams_Optimizer>, I>>(
        object: I,
    ): TextEmbeddingTripletParams_Optimizer {
        const message = {
            ...baseTextEmbeddingTripletParams_Optimizer,
        } as TextEmbeddingTripletParams_Optimizer;
        message.adamw =
            object.adamw !== undefined && object.adamw !== null
                ? OptimizerAdamw.fromPartial(object.adamw)
                : undefined;
        return message;
    },
};

const baseGetMetricsUrlRequest: object = { taskId: '' };

export const GetMetricsUrlRequest = {
    encode(message: GetMetricsUrlRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.taskId !== '') {
            writer.uint32(10).string(message.taskId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetMetricsUrlRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetMetricsUrlRequest } as GetMetricsUrlRequest;
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

    fromJSON(object: any): GetMetricsUrlRequest {
        const message = { ...baseGetMetricsUrlRequest } as GetMetricsUrlRequest;
        message.taskId =
            object.taskId !== undefined && object.taskId !== null ? String(object.taskId) : '';
        return message;
    },

    toJSON(message: GetMetricsUrlRequest): unknown {
        const obj: any = {};
        message.taskId !== undefined && (obj.taskId = message.taskId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetMetricsUrlRequest>, I>>(
        object: I,
    ): GetMetricsUrlRequest {
        const message = { ...baseGetMetricsUrlRequest } as GetMetricsUrlRequest;
        message.taskId = object.taskId ?? '';
        return message;
    },
};

const baseGetMetricsUrlResponse: object = { loadUrl: '' };

export const GetMetricsUrlResponse = {
    encode(message: GetMetricsUrlResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.loadUrl !== '') {
            writer.uint32(10).string(message.loadUrl);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetMetricsUrlResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetMetricsUrlResponse } as GetMetricsUrlResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetMetricsUrlResponse {
        const message = { ...baseGetMetricsUrlResponse } as GetMetricsUrlResponse;
        message.loadUrl =
            object.loadUrl !== undefined && object.loadUrl !== null ? String(object.loadUrl) : '';
        return message;
    },

    toJSON(message: GetMetricsUrlResponse): unknown {
        const obj: any = {};
        message.loadUrl !== undefined && (obj.loadUrl = message.loadUrl);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetMetricsUrlResponse>, I>>(
        object: I,
    ): GetMetricsUrlResponse {
        const message = { ...baseGetMetricsUrlResponse } as GetMetricsUrlResponse;
        message.loadUrl = object.loadUrl ?? '';
        return message;
    },
};

const baseGetOptionsRequest: object = { taskId: '' };

export const GetOptionsRequest = {
    encode(message: GetOptionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.taskId !== '') {
            writer.uint32(10).string(message.taskId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetOptionsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetOptionsRequest } as GetOptionsRequest;
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

    fromJSON(object: any): GetOptionsRequest {
        const message = { ...baseGetOptionsRequest } as GetOptionsRequest;
        message.taskId =
            object.taskId !== undefined && object.taskId !== null ? String(object.taskId) : '';
        return message;
    },

    toJSON(message: GetOptionsRequest): unknown {
        const obj: any = {};
        message.taskId !== undefined && (obj.taskId = message.taskId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetOptionsRequest>, I>>(object: I): GetOptionsRequest {
        const message = { ...baseGetOptionsRequest } as GetOptionsRequest;
        message.taskId = object.taskId ?? '';
        return message;
    },
};

const baseGetOptionsResponse: object = { taskId: '', baseModelUri: '' };

export const GetOptionsResponse = {
    encode(message: GetOptionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.taskId !== '') {
            writer.uint32(10).string(message.taskId);
        }
        if (message.baseModelUri !== '') {
            writer.uint32(18).string(message.baseModelUri);
        }
        for (const v of message.trainDatasets) {
            TuningRequest_WeightedDataset.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.validationDatasets) {
            TuningRequest_WeightedDataset.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        if (message.textToTextCompletion !== undefined) {
            TextToTextCompletionTuningParams.encode(
                message.textToTextCompletion,
                writer.uint32(802).fork(),
            ).ldelim();
        }
        if (message.textClassificationMultilabel !== undefined) {
            TextClassificationMultilabelParams.encode(
                message.textClassificationMultilabel,
                writer.uint32(810).fork(),
            ).ldelim();
        }
        if (message.textClassificationMulticlass !== undefined) {
            TextClassificationMulticlassParams.encode(
                message.textClassificationMulticlass,
                writer.uint32(818).fork(),
            ).ldelim();
        }
        if (message.textEmbeddingPairParams !== undefined) {
            TextEmbeddingPairParams.encode(
                message.textEmbeddingPairParams,
                writer.uint32(826).fork(),
            ).ldelim();
        }
        if (message.textEmbeddingTripletParams !== undefined) {
            TextEmbeddingTripletParams.encode(
                message.textEmbeddingTripletParams,
                writer.uint32(834).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetOptionsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetOptionsResponse } as GetOptionsResponse;
        message.trainDatasets = [];
        message.validationDatasets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taskId = reader.string();
                    break;
                case 2:
                    message.baseModelUri = reader.string();
                    break;
                case 3:
                    message.trainDatasets.push(
                        TuningRequest_WeightedDataset.decode(reader, reader.uint32()),
                    );
                    break;
                case 4:
                    message.validationDatasets.push(
                        TuningRequest_WeightedDataset.decode(reader, reader.uint32()),
                    );
                    break;
                case 100:
                    message.textToTextCompletion = TextToTextCompletionTuningParams.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 101:
                    message.textClassificationMultilabel =
                        TextClassificationMultilabelParams.decode(reader, reader.uint32());
                    break;
                case 102:
                    message.textClassificationMulticlass =
                        TextClassificationMulticlassParams.decode(reader, reader.uint32());
                    break;
                case 103:
                    message.textEmbeddingPairParams = TextEmbeddingPairParams.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 104:
                    message.textEmbeddingTripletParams = TextEmbeddingTripletParams.decode(
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

    fromJSON(object: any): GetOptionsResponse {
        const message = { ...baseGetOptionsResponse } as GetOptionsResponse;
        message.taskId =
            object.taskId !== undefined && object.taskId !== null ? String(object.taskId) : '';
        message.baseModelUri =
            object.baseModelUri !== undefined && object.baseModelUri !== null
                ? String(object.baseModelUri)
                : '';
        message.trainDatasets = (object.trainDatasets ?? []).map((e: any) =>
            TuningRequest_WeightedDataset.fromJSON(e),
        );
        message.validationDatasets = (object.validationDatasets ?? []).map((e: any) =>
            TuningRequest_WeightedDataset.fromJSON(e),
        );
        message.textToTextCompletion =
            object.textToTextCompletion !== undefined && object.textToTextCompletion !== null
                ? TextToTextCompletionTuningParams.fromJSON(object.textToTextCompletion)
                : undefined;
        message.textClassificationMultilabel =
            object.textClassificationMultilabel !== undefined &&
            object.textClassificationMultilabel !== null
                ? TextClassificationMultilabelParams.fromJSON(object.textClassificationMultilabel)
                : undefined;
        message.textClassificationMulticlass =
            object.textClassificationMulticlass !== undefined &&
            object.textClassificationMulticlass !== null
                ? TextClassificationMulticlassParams.fromJSON(object.textClassificationMulticlass)
                : undefined;
        message.textEmbeddingPairParams =
            object.textEmbeddingPairParams !== undefined && object.textEmbeddingPairParams !== null
                ? TextEmbeddingPairParams.fromJSON(object.textEmbeddingPairParams)
                : undefined;
        message.textEmbeddingTripletParams =
            object.textEmbeddingTripletParams !== undefined &&
            object.textEmbeddingTripletParams !== null
                ? TextEmbeddingTripletParams.fromJSON(object.textEmbeddingTripletParams)
                : undefined;
        return message;
    },

    toJSON(message: GetOptionsResponse): unknown {
        const obj: any = {};
        message.taskId !== undefined && (obj.taskId = message.taskId);
        message.baseModelUri !== undefined && (obj.baseModelUri = message.baseModelUri);
        if (message.trainDatasets) {
            obj.trainDatasets = message.trainDatasets.map((e) =>
                e ? TuningRequest_WeightedDataset.toJSON(e) : undefined,
            );
        } else {
            obj.trainDatasets = [];
        }
        if (message.validationDatasets) {
            obj.validationDatasets = message.validationDatasets.map((e) =>
                e ? TuningRequest_WeightedDataset.toJSON(e) : undefined,
            );
        } else {
            obj.validationDatasets = [];
        }
        message.textToTextCompletion !== undefined &&
            (obj.textToTextCompletion = message.textToTextCompletion
                ? TextToTextCompletionTuningParams.toJSON(message.textToTextCompletion)
                : undefined);
        message.textClassificationMultilabel !== undefined &&
            (obj.textClassificationMultilabel = message.textClassificationMultilabel
                ? TextClassificationMultilabelParams.toJSON(message.textClassificationMultilabel)
                : undefined);
        message.textClassificationMulticlass !== undefined &&
            (obj.textClassificationMulticlass = message.textClassificationMulticlass
                ? TextClassificationMulticlassParams.toJSON(message.textClassificationMulticlass)
                : undefined);
        message.textEmbeddingPairParams !== undefined &&
            (obj.textEmbeddingPairParams = message.textEmbeddingPairParams
                ? TextEmbeddingPairParams.toJSON(message.textEmbeddingPairParams)
                : undefined);
        message.textEmbeddingTripletParams !== undefined &&
            (obj.textEmbeddingTripletParams = message.textEmbeddingTripletParams
                ? TextEmbeddingTripletParams.toJSON(message.textEmbeddingTripletParams)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetOptionsResponse>, I>>(
        object: I,
    ): GetOptionsResponse {
        const message = { ...baseGetOptionsResponse } as GetOptionsResponse;
        message.taskId = object.taskId ?? '';
        message.baseModelUri = object.baseModelUri ?? '';
        message.trainDatasets =
            object.trainDatasets?.map((e) => TuningRequest_WeightedDataset.fromPartial(e)) || [];
        message.validationDatasets =
            object.validationDatasets?.map((e) => TuningRequest_WeightedDataset.fromPartial(e)) ||
            [];
        message.textToTextCompletion =
            object.textToTextCompletion !== undefined && object.textToTextCompletion !== null
                ? TextToTextCompletionTuningParams.fromPartial(object.textToTextCompletion)
                : undefined;
        message.textClassificationMultilabel =
            object.textClassificationMultilabel !== undefined &&
            object.textClassificationMultilabel !== null
                ? TextClassificationMultilabelParams.fromPartial(
                      object.textClassificationMultilabel,
                  )
                : undefined;
        message.textClassificationMulticlass =
            object.textClassificationMulticlass !== undefined &&
            object.textClassificationMulticlass !== null
                ? TextClassificationMulticlassParams.fromPartial(
                      object.textClassificationMulticlass,
                  )
                : undefined;
        message.textEmbeddingPairParams =
            object.textEmbeddingPairParams !== undefined && object.textEmbeddingPairParams !== null
                ? TextEmbeddingPairParams.fromPartial(object.textEmbeddingPairParams)
                : undefined;
        message.textEmbeddingTripletParams =
            object.textEmbeddingTripletParams !== undefined &&
            object.textEmbeddingTripletParams !== null
                ? TextEmbeddingTripletParams.fromPartial(object.textEmbeddingTripletParams)
                : undefined;
        return message;
    },
};

const baseListErrorsRequest: object = { tuningTaskId: '' };

export const ListErrorsRequest = {
    encode(message: ListErrorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.tuningTaskId !== '') {
            writer.uint32(10).string(message.tuningTaskId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListErrorsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListErrorsRequest } as ListErrorsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tuningTaskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListErrorsRequest {
        const message = { ...baseListErrorsRequest } as ListErrorsRequest;
        message.tuningTaskId =
            object.tuningTaskId !== undefined && object.tuningTaskId !== null
                ? String(object.tuningTaskId)
                : '';
        return message;
    },

    toJSON(message: ListErrorsRequest): unknown {
        const obj: any = {};
        message.tuningTaskId !== undefined && (obj.tuningTaskId = message.tuningTaskId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListErrorsRequest>, I>>(object: I): ListErrorsRequest {
        const message = { ...baseListErrorsRequest } as ListErrorsRequest;
        message.tuningTaskId = object.tuningTaskId ?? '';
        return message;
    },
};

const baseListErrorsResponse: object = {};

export const ListErrorsResponse = {
    encode(message: ListErrorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.tuningError) {
            TuningError.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListErrorsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListErrorsResponse } as ListErrorsResponse;
        message.tuningError = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tuningError.push(TuningError.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListErrorsResponse {
        const message = { ...baseListErrorsResponse } as ListErrorsResponse;
        message.tuningError = (object.tuningError ?? []).map((e: any) => TuningError.fromJSON(e));
        return message;
    },

    toJSON(message: ListErrorsResponse): unknown {
        const obj: any = {};
        if (message.tuningError) {
            obj.tuningError = message.tuningError.map((e) =>
                e ? TuningError.toJSON(e) : undefined,
            );
        } else {
            obj.tuningError = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListErrorsResponse>, I>>(
        object: I,
    ): ListErrorsResponse {
        const message = { ...baseListErrorsResponse } as ListErrorsResponse;
        message.tuningError = object.tuningError?.map((e) => TuningError.fromPartial(e)) || [];
        return message;
    },
};

export const TuningServiceService = {
    tune: {
        path: '/yandex.cloud.ai.tuning.v1.TuningService/Tune',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: TuningRequest) =>
            Buffer.from(TuningRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => TuningRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    list: {
        path: '/yandex.cloud.ai.tuning.v1.TuningService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListTuningsRequest) =>
            Buffer.from(ListTuningsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListTuningsRequest.decode(value),
        responseSerialize: (value: ListTuningsResponse) =>
            Buffer.from(ListTuningsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListTuningsResponse.decode(value),
    },
    describe: {
        path: '/yandex.cloud.ai.tuning.v1.TuningService/Describe',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DescribeTuningRequest) =>
            Buffer.from(DescribeTuningRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DescribeTuningRequest.decode(value),
        responseSerialize: (value: DescribeTuningResponse) =>
            Buffer.from(DescribeTuningResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => DescribeTuningResponse.decode(value),
    },
    cancel: {
        path: '/yandex.cloud.ai.tuning.v1.TuningService/Cancel',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CancelTuningRequest) =>
            Buffer.from(CancelTuningRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CancelTuningRequest.decode(value),
        responseSerialize: (value: CancelTuningResponse) =>
            Buffer.from(CancelTuningResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => CancelTuningResponse.decode(value),
    },
    getMetricsUrl: {
        path: '/yandex.cloud.ai.tuning.v1.TuningService/GetMetricsUrl',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetMetricsUrlRequest) =>
            Buffer.from(GetMetricsUrlRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetMetricsUrlRequest.decode(value),
        responseSerialize: (value: GetMetricsUrlResponse) =>
            Buffer.from(GetMetricsUrlResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetMetricsUrlResponse.decode(value),
    },
    getOptions: {
        path: '/yandex.cloud.ai.tuning.v1.TuningService/GetOptions',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetOptionsRequest) =>
            Buffer.from(GetOptionsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetOptionsRequest.decode(value),
        responseSerialize: (value: GetOptionsResponse) =>
            Buffer.from(GetOptionsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetOptionsResponse.decode(value),
    },
    listErrors: {
        path: '/yandex.cloud.ai.tuning.v1.TuningService/ListErrors',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListErrorsRequest) =>
            Buffer.from(ListErrorsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListErrorsRequest.decode(value),
        responseSerialize: (value: ListErrorsResponse) =>
            Buffer.from(ListErrorsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListErrorsResponse.decode(value),
    },
} as const;

export interface TuningServiceServer extends UntypedServiceImplementation {
    tune: handleUnaryCall<TuningRequest, Operation>;
    list: handleUnaryCall<ListTuningsRequest, ListTuningsResponse>;
    describe: handleUnaryCall<DescribeTuningRequest, DescribeTuningResponse>;
    cancel: handleUnaryCall<CancelTuningRequest, CancelTuningResponse>;
    getMetricsUrl: handleUnaryCall<GetMetricsUrlRequest, GetMetricsUrlResponse>;
    getOptions: handleUnaryCall<GetOptionsRequest, GetOptionsResponse>;
    listErrors: handleUnaryCall<ListErrorsRequest, ListErrorsResponse>;
}

export interface TuningServiceClient extends Client {
    tune(
        request: TuningRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    tune(
        request: TuningRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    tune(
        request: TuningRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    list(
        request: ListTuningsRequest,
        callback: (error: ServiceError | null, response: ListTuningsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListTuningsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListTuningsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListTuningsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListTuningsResponse) => void,
    ): ClientUnaryCall;
    describe(
        request: DescribeTuningRequest,
        callback: (error: ServiceError | null, response: DescribeTuningResponse) => void,
    ): ClientUnaryCall;
    describe(
        request: DescribeTuningRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: DescribeTuningResponse) => void,
    ): ClientUnaryCall;
    describe(
        request: DescribeTuningRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: DescribeTuningResponse) => void,
    ): ClientUnaryCall;
    cancel(
        request: CancelTuningRequest,
        callback: (error: ServiceError | null, response: CancelTuningResponse) => void,
    ): ClientUnaryCall;
    cancel(
        request: CancelTuningRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: CancelTuningResponse) => void,
    ): ClientUnaryCall;
    cancel(
        request: CancelTuningRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: CancelTuningResponse) => void,
    ): ClientUnaryCall;
    getMetricsUrl(
        request: GetMetricsUrlRequest,
        callback: (error: ServiceError | null, response: GetMetricsUrlResponse) => void,
    ): ClientUnaryCall;
    getMetricsUrl(
        request: GetMetricsUrlRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetMetricsUrlResponse) => void,
    ): ClientUnaryCall;
    getMetricsUrl(
        request: GetMetricsUrlRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetMetricsUrlResponse) => void,
    ): ClientUnaryCall;
    getOptions(
        request: GetOptionsRequest,
        callback: (error: ServiceError | null, response: GetOptionsResponse) => void,
    ): ClientUnaryCall;
    getOptions(
        request: GetOptionsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetOptionsResponse) => void,
    ): ClientUnaryCall;
    getOptions(
        request: GetOptionsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetOptionsResponse) => void,
    ): ClientUnaryCall;
    listErrors(
        request: ListErrorsRequest,
        callback: (error: ServiceError | null, response: ListErrorsResponse) => void,
    ): ClientUnaryCall;
    listErrors(
        request: ListErrorsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListErrorsResponse) => void,
    ): ClientUnaryCall;
    listErrors(
        request: ListErrorsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListErrorsResponse) => void,
    ): ClientUnaryCall;
}

export const TuningServiceClient = makeGenericClientConstructor(
    TuningServiceService,
    'yandex.cloud.ai.tuning.v1.TuningService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): TuningServiceClient;
    service: typeof TuningServiceService;
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
