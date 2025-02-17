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
    DatasetInfo,
    ValidationError,
    DatasetInfo_Status,
    DatasetUploadSchema,
    DatasetFileDownloadUrl,
    datasetInfo_StatusFromJSON,
    datasetInfo_StatusToJSON,
} from '../../../../../yandex/cloud/ai/dataset/v1/dataset';
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Operation } from '../../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.ai.dataset.v1';

export interface DescribeDatasetRequest {
    $type: 'yandex.cloud.ai.dataset.v1.DescribeDatasetRequest';
    /** ID of the dataset to describe. */
    datasetId: string;
}

export interface DescribeDatasetResponse {
    $type: 'yandex.cloud.ai.dataset.v1.DescribeDatasetResponse';
    /** Information about the dataset. */
    dataset?: DatasetInfo;
}

export interface ValidateDatasetRequest {
    $type: 'yandex.cloud.ai.dataset.v1.ValidateDatasetRequest';
    /** ID of the dataset to validate. */
    datasetId: string;
}

export interface ValidateDatasetMetadata {
    $type: 'yandex.cloud.ai.dataset.v1.ValidateDatasetMetadata';
    /** ID of the dataset. */
    datasetId: string;
    /** Count of valid rows among currently processed rows in the dataset. */
    validRows: number;
    /** Count of currently processed rows in the dataset. */
    processedRows: number;
    /** Total count of rows in the dataset */
    totalRows: number;
}

export interface ValidateDatasetResponse {
    $type: 'yandex.cloud.ai.dataset.v1.ValidateDatasetResponse';
    /** ID of the dataset. */
    datasetId: string;
    /** Validity marker. */
    isValid: boolean;
    /** A list of the dataset validation errors. */
    errors: ValidationError[];
}

export interface DeleteDatasetRequest {
    $type: 'yandex.cloud.ai.dataset.v1.DeleteDatasetRequest';
    /** ID of the dataset to delete. */
    datasetId: string;
}

export interface DeleteDatasetResponse {
    $type: 'yandex.cloud.ai.dataset.v1.DeleteDatasetResponse';
}

export interface CreateDatasetRequest {
    $type: 'yandex.cloud.ai.dataset.v1.CreateDatasetRequest';
    /** Name of the dataset. */
    name: string;
    /** Folder ID of the dataset. */
    folderId: string;
    /** Description of the dataset. Optional. */
    description: string;
    /** Metadata of the dataset. Optional. */
    metadata: string;
    /** Task type of the dataset. */
    taskType: string;
    /** Labels of the dataset. Optional. */
    labels: { [key: string]: string };
    /**
     * Upload format of the dataset.
     * The list of supported upload formats can be retrieved via ListUploadFormats method.
     */
    uploadFormat: string;
    /** Allow to use the dataset to improve the models quality. Default false. */
    allowDataLog: boolean;
}

export interface CreateDatasetRequest_LabelsEntry {
    $type: 'yandex.cloud.ai.dataset.v1.CreateDatasetRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface CreateDatasetResponse {
    $type: 'yandex.cloud.ai.dataset.v1.CreateDatasetResponse';
    /** ID of the created dataset. */
    datasetId: string;
    /** Information about the dataset. */
    dataset?: DatasetInfo;
}

export interface UpdateDatasetRequest {
    $type: 'yandex.cloud.ai.dataset.v1.UpdateDatasetRequest';
    /** ID of the dataset to update. */
    datasetId: string;
    /** gRPC field mask. */
    updateMask?: FieldMask;
    /** Name of the dataset. */
    name: string;
    /** Description of the dataset. */
    description: string;
    /** Labels of the dataset. */
    labels: { [key: string]: string };
}

export interface UpdateDatasetRequest_LabelsEntry {
    $type: 'yandex.cloud.ai.dataset.v1.UpdateDatasetRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface UpdateDatasetResponse {
    $type: 'yandex.cloud.ai.dataset.v1.UpdateDatasetResponse';
    /** Information about updated dataset. */
    dataset?: DatasetInfo;
}

export interface GetUploadDraftUrlRequest {
    $type: 'yandex.cloud.ai.dataset.v1.GetUploadDraftUrlRequest';
    /** ID of the dataset to upload. */
    datasetId: string;
    /** Size in bytes of the dataset to upload. */
    sizeBytes: number;
}

export interface GetUploadDraftUrlResponse {
    $type: 'yandex.cloud.ai.dataset.v1.GetUploadDraftUrlResponse';
    /** ID of the dataset. */
    datasetId: string;
    /** S3 presigned URL for upload. */
    uploadUrl: string;
}

export interface StartMultipartUploadDraftRequest {
    $type: 'yandex.cloud.ai.dataset.v1.StartMultipartUploadDraftRequest';
    /** ID of the dataset to multipart upload. */
    datasetId: string;
    /** Size in bytes of the dataset to upload. */
    sizeBytes: number;
    /**
     * Number of parts in multipart upload. Optional.
     * Dataset's part size should be between 5MB and 5GB.
     * If not specified will be configured automatically.
     */
    parts: number;
}

export interface StartMultipartUploadDraftResponse {
    $type: 'yandex.cloud.ai.dataset.v1.StartMultipartUploadDraftResponse';
    /** ID of the dataset. */
    datasetId: string;
    /** List of S3 presigned URLs for multipart upload. */
    multipartUploadUrls: string[];
}

export interface UploadedPartInfo {
    $type: 'yandex.cloud.ai.dataset.v1.UploadedPartInfo';
    /** Sequence number of the uploaded part. */
    partNum: number;
    /** Etag of the uploaded part. */
    etag: string;
}

export interface FinishMultipartUploadDraftRequest {
    $type: 'yandex.cloud.ai.dataset.v1.FinishMultipartUploadDraftRequest';
    /** ID of the dataset. */
    datasetId: string;
    /** Information about uploaded parts from S3 API. */
    uploadedParts: UploadedPartInfo[];
}

export interface FinishMultipartUploadDraftResponse {
    $type: 'yandex.cloud.ai.dataset.v1.FinishMultipartUploadDraftResponse';
    /** ID of the dataset. */
    datasetId: string;
}

export interface ListDatasetsRequest {
    $type: 'yandex.cloud.ai.dataset.v1.ListDatasetsRequest';
    /** Folder ID of the datasets to list. */
    folderId: string;
    /** Statuses of the datasets to list. Optional. */
    status: DatasetInfo_Status[];
    /** Name substring of the datasets to list. Optional. */
    datasetNamePattern: string;
    /** Task types of the datasets to list. Optional. */
    taskTypeFilter: string[];
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListDatasetsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListDatasetsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListDatasetsResponse {
    $type: 'yandex.cloud.ai.dataset.v1.ListDatasetsResponse';
    /** Information about listed datasets. */
    datasets: DatasetInfo[];
    /**
     * [next_page_token] token allows you to get the next page of results for list requests.
     * If the number of results is larger than [ListDatasetsRequest.page_size], use
     * the [next_page_token] as the value for the [ListDatasetsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface ListUploadFormatsRequest {
    $type: 'yandex.cloud.ai.dataset.v1.ListUploadFormatsRequest';
    /** Dataset task type to list upload formats. */
    taskType: string;
}

export interface ListUploadFormatsResponse {
    $type: 'yandex.cloud.ai.dataset.v1.ListUploadFormatsResponse';
    /** List of upload formats for the specified dataset task type. */
    formats: string[];
}

export interface ListUploadSchemasRequest {
    $type: 'yandex.cloud.ai.dataset.v1.ListUploadSchemasRequest';
    /** Dataset task type to list schemas. */
    taskType: string;
}

export interface ListUploadSchemasResponse {
    $type: 'yandex.cloud.ai.dataset.v1.ListUploadSchemasResponse';
    /** List of dataset schemas for the specified dataset task type. */
    schemas: DatasetUploadSchema[];
}

export interface ListTypesRequest {
    $type: 'yandex.cloud.ai.dataset.v1.ListTypesRequest';
}

export interface ListTypesResponse {
    $type: 'yandex.cloud.ai.dataset.v1.ListTypesResponse';
    /** List of dataset type */
    types: string[];
}

export interface GetDatasetPreviewRequest {
    $type: 'yandex.cloud.ai.dataset.v1.GetDatasetPreviewRequest';
    /** ID of the dataset. */
    datasetId: string;
}

export interface GetDatasetPreviewResponse {
    $type: 'yandex.cloud.ai.dataset.v1.GetDatasetPreviewResponse';
    /** ID of the dataset. */
    datasetId: string;
    /** List of dataset preview lines */
    previewLines: string[];
}

export interface GetDownloadUrlsRequest {
    $type: 'yandex.cloud.ai.dataset.v1.GetDownloadUrlsRequest';
    /** ID of the dataset. */
    datasetId: string;
}

export interface GetDownloadUrlsResponse {
    $type: 'yandex.cloud.ai.dataset.v1.GetDownloadUrlsResponse';
    /** ID of the dataset. */
    datasetId: string;
    downloadUrls: DatasetFileDownloadUrl[];
}

export interface ListOperationsIdsRequest {
    $type: 'yandex.cloud.ai.dataset.v1.ListOperationsIdsRequest';
    datasetId: string[];
}

export interface ListOperationsIdsResponse {
    $type: 'yandex.cloud.ai.dataset.v1.ListOperationsIdsResponse';
    datasetIdToOperationId: { [key: string]: string };
}

export interface ListOperationsIdsResponse_DatasetIdToOperationIdEntry {
    $type: 'yandex.cloud.ai.dataset.v1.ListOperationsIdsResponse.DatasetIdToOperationIdEntry';
    key: string;
    value: string;
}

const baseDescribeDatasetRequest: object = {
    $type: 'yandex.cloud.ai.dataset.v1.DescribeDatasetRequest',
    datasetId: '',
};

export const DescribeDatasetRequest = {
    $type: 'yandex.cloud.ai.dataset.v1.DescribeDatasetRequest' as const,

    encode(message: DescribeDatasetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.datasetId !== '') {
            writer.uint32(10).string(message.datasetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DescribeDatasetRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDescribeDatasetRequest } as DescribeDatasetRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.datasetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DescribeDatasetRequest {
        const message = { ...baseDescribeDatasetRequest } as DescribeDatasetRequest;
        message.datasetId =
            object.datasetId !== undefined && object.datasetId !== null
                ? String(object.datasetId)
                : '';
        return message;
    },

    toJSON(message: DescribeDatasetRequest): unknown {
        const obj: any = {};
        message.datasetId !== undefined && (obj.datasetId = message.datasetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DescribeDatasetRequest>, I>>(
        object: I,
    ): DescribeDatasetRequest {
        const message = { ...baseDescribeDatasetRequest } as DescribeDatasetRequest;
        message.datasetId = object.datasetId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DescribeDatasetRequest.$type, DescribeDatasetRequest);

const baseDescribeDatasetResponse: object = {
    $type: 'yandex.cloud.ai.dataset.v1.DescribeDatasetResponse',
};

export const DescribeDatasetResponse = {
    $type: 'yandex.cloud.ai.dataset.v1.DescribeDatasetResponse' as const,

    encode(message: DescribeDatasetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.dataset !== undefined) {
            DatasetInfo.encode(message.dataset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DescribeDatasetResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDescribeDatasetResponse } as DescribeDatasetResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataset = DatasetInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DescribeDatasetResponse {
        const message = { ...baseDescribeDatasetResponse } as DescribeDatasetResponse;
        message.dataset =
            object.dataset !== undefined && object.dataset !== null
                ? DatasetInfo.fromJSON(object.dataset)
                : undefined;
        return message;
    },

    toJSON(message: DescribeDatasetResponse): unknown {
        const obj: any = {};
        message.dataset !== undefined &&
            (obj.dataset = message.dataset ? DatasetInfo.toJSON(message.dataset) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DescribeDatasetResponse>, I>>(
        object: I,
    ): DescribeDatasetResponse {
        const message = { ...baseDescribeDatasetResponse } as DescribeDatasetResponse;
        message.dataset =
            object.dataset !== undefined && object.dataset !== null
                ? DatasetInfo.fromPartial(object.dataset)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(DescribeDatasetResponse.$type, DescribeDatasetResponse);

const baseValidateDatasetRequest: object = {
    $type: 'yandex.cloud.ai.dataset.v1.ValidateDatasetRequest',
    datasetId: '',
};

export const ValidateDatasetRequest = {
    $type: 'yandex.cloud.ai.dataset.v1.ValidateDatasetRequest' as const,

    encode(message: ValidateDatasetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.datasetId !== '') {
            writer.uint32(10).string(message.datasetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ValidateDatasetRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseValidateDatasetRequest } as ValidateDatasetRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.datasetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ValidateDatasetRequest {
        const message = { ...baseValidateDatasetRequest } as ValidateDatasetRequest;
        message.datasetId =
            object.datasetId !== undefined && object.datasetId !== null
                ? String(object.datasetId)
                : '';
        return message;
    },

    toJSON(message: ValidateDatasetRequest): unknown {
        const obj: any = {};
        message.datasetId !== undefined && (obj.datasetId = message.datasetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ValidateDatasetRequest>, I>>(
        object: I,
    ): ValidateDatasetRequest {
        const message = { ...baseValidateDatasetRequest } as ValidateDatasetRequest;
        message.datasetId = object.datasetId ?? '';
        return message;
    },
};

messageTypeRegistry.set(ValidateDatasetRequest.$type, ValidateDatasetRequest);

const baseValidateDatasetMetadata: object = {
    $type: 'yandex.cloud.ai.dataset.v1.ValidateDatasetMetadata',
    datasetId: '',
    validRows: 0,
    processedRows: 0,
    totalRows: 0,
};

export const ValidateDatasetMetadata = {
    $type: 'yandex.cloud.ai.dataset.v1.ValidateDatasetMetadata' as const,

    encode(message: ValidateDatasetMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.datasetId !== '') {
            writer.uint32(10).string(message.datasetId);
        }
        if (message.validRows !== 0) {
            writer.uint32(16).int64(message.validRows);
        }
        if (message.processedRows !== 0) {
            writer.uint32(24).int64(message.processedRows);
        }
        if (message.totalRows !== 0) {
            writer.uint32(32).int64(message.totalRows);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ValidateDatasetMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseValidateDatasetMetadata } as ValidateDatasetMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.datasetId = reader.string();
                    break;
                case 2:
                    message.validRows = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.processedRows = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.totalRows = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ValidateDatasetMetadata {
        const message = { ...baseValidateDatasetMetadata } as ValidateDatasetMetadata;
        message.datasetId =
            object.datasetId !== undefined && object.datasetId !== null
                ? String(object.datasetId)
                : '';
        message.validRows =
            object.validRows !== undefined && object.validRows !== null
                ? Number(object.validRows)
                : 0;
        message.processedRows =
            object.processedRows !== undefined && object.processedRows !== null
                ? Number(object.processedRows)
                : 0;
        message.totalRows =
            object.totalRows !== undefined && object.totalRows !== null
                ? Number(object.totalRows)
                : 0;
        return message;
    },

    toJSON(message: ValidateDatasetMetadata): unknown {
        const obj: any = {};
        message.datasetId !== undefined && (obj.datasetId = message.datasetId);
        message.validRows !== undefined && (obj.validRows = Math.round(message.validRows));
        message.processedRows !== undefined &&
            (obj.processedRows = Math.round(message.processedRows));
        message.totalRows !== undefined && (obj.totalRows = Math.round(message.totalRows));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ValidateDatasetMetadata>, I>>(
        object: I,
    ): ValidateDatasetMetadata {
        const message = { ...baseValidateDatasetMetadata } as ValidateDatasetMetadata;
        message.datasetId = object.datasetId ?? '';
        message.validRows = object.validRows ?? 0;
        message.processedRows = object.processedRows ?? 0;
        message.totalRows = object.totalRows ?? 0;
        return message;
    },
};

messageTypeRegistry.set(ValidateDatasetMetadata.$type, ValidateDatasetMetadata);

const baseValidateDatasetResponse: object = {
    $type: 'yandex.cloud.ai.dataset.v1.ValidateDatasetResponse',
    datasetId: '',
    isValid: false,
};

export const ValidateDatasetResponse = {
    $type: 'yandex.cloud.ai.dataset.v1.ValidateDatasetResponse' as const,

    encode(message: ValidateDatasetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.datasetId !== '') {
            writer.uint32(10).string(message.datasetId);
        }
        if (message.isValid === true) {
            writer.uint32(16).bool(message.isValid);
        }
        for (const v of message.errors) {
            ValidationError.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ValidateDatasetResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseValidateDatasetResponse } as ValidateDatasetResponse;
        message.errors = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.datasetId = reader.string();
                    break;
                case 2:
                    message.isValid = reader.bool();
                    break;
                case 3:
                    message.errors.push(ValidationError.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ValidateDatasetResponse {
        const message = { ...baseValidateDatasetResponse } as ValidateDatasetResponse;
        message.datasetId =
            object.datasetId !== undefined && object.datasetId !== null
                ? String(object.datasetId)
                : '';
        message.isValid =
            object.isValid !== undefined && object.isValid !== null
                ? Boolean(object.isValid)
                : false;
        message.errors = (object.errors ?? []).map((e: any) => ValidationError.fromJSON(e));
        return message;
    },

    toJSON(message: ValidateDatasetResponse): unknown {
        const obj: any = {};
        message.datasetId !== undefined && (obj.datasetId = message.datasetId);
        message.isValid !== undefined && (obj.isValid = message.isValid);
        if (message.errors) {
            obj.errors = message.errors.map((e) => (e ? ValidationError.toJSON(e) : undefined));
        } else {
            obj.errors = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ValidateDatasetResponse>, I>>(
        object: I,
    ): ValidateDatasetResponse {
        const message = { ...baseValidateDatasetResponse } as ValidateDatasetResponse;
        message.datasetId = object.datasetId ?? '';
        message.isValid = object.isValid ?? false;
        message.errors = object.errors?.map((e) => ValidationError.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(ValidateDatasetResponse.$type, ValidateDatasetResponse);

const baseDeleteDatasetRequest: object = {
    $type: 'yandex.cloud.ai.dataset.v1.DeleteDatasetRequest',
    datasetId: '',
};

export const DeleteDatasetRequest = {
    $type: 'yandex.cloud.ai.dataset.v1.DeleteDatasetRequest' as const,

    encode(message: DeleteDatasetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.datasetId !== '') {
            writer.uint32(10).string(message.datasetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDatasetRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteDatasetRequest } as DeleteDatasetRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.datasetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteDatasetRequest {
        const message = { ...baseDeleteDatasetRequest } as DeleteDatasetRequest;
        message.datasetId =
            object.datasetId !== undefined && object.datasetId !== null
                ? String(object.datasetId)
                : '';
        return message;
    },

    toJSON(message: DeleteDatasetRequest): unknown {
        const obj: any = {};
        message.datasetId !== undefined && (obj.datasetId = message.datasetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteDatasetRequest>, I>>(
        object: I,
    ): DeleteDatasetRequest {
        const message = { ...baseDeleteDatasetRequest } as DeleteDatasetRequest;
        message.datasetId = object.datasetId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteDatasetRequest.$type, DeleteDatasetRequest);

const baseDeleteDatasetResponse: object = {
    $type: 'yandex.cloud.ai.dataset.v1.DeleteDatasetResponse',
};

export const DeleteDatasetResponse = {
    $type: 'yandex.cloud.ai.dataset.v1.DeleteDatasetResponse' as const,

    encode(_: DeleteDatasetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDatasetResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteDatasetResponse } as DeleteDatasetResponse;
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

    fromJSON(_: any): DeleteDatasetResponse {
        const message = { ...baseDeleteDatasetResponse } as DeleteDatasetResponse;
        return message;
    },

    toJSON(_: DeleteDatasetResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteDatasetResponse>, I>>(
        _: I,
    ): DeleteDatasetResponse {
        const message = { ...baseDeleteDatasetResponse } as DeleteDatasetResponse;
        return message;
    },
};

messageTypeRegistry.set(DeleteDatasetResponse.$type, DeleteDatasetResponse);

const baseCreateDatasetRequest: object = {
    $type: 'yandex.cloud.ai.dataset.v1.CreateDatasetRequest',
    name: '',
    folderId: '',
    description: '',
    metadata: '',
    taskType: '',
    uploadFormat: '',
    allowDataLog: false,
};

export const CreateDatasetRequest = {
    $type: 'yandex.cloud.ai.dataset.v1.CreateDatasetRequest' as const,

    encode(message: CreateDatasetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.metadata !== '') {
            writer.uint32(34).string(message.metadata);
        }
        if (message.taskType !== '') {
            writer.uint32(42).string(message.taskType);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateDatasetRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.ai.dataset.v1.CreateDatasetRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        if (message.uploadFormat !== '') {
            writer.uint32(58).string(message.uploadFormat);
        }
        if (message.allowDataLog === true) {
            writer.uint32(64).bool(message.allowDataLog);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateDatasetRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateDatasetRequest } as CreateDatasetRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.taskType = reader.string();
                    break;
                case 6:
                    const entry6 = CreateDatasetRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.uploadFormat = reader.string();
                    break;
                case 8:
                    message.allowDataLog = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateDatasetRequest {
        const message = { ...baseCreateDatasetRequest } as CreateDatasetRequest;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? String(object.metadata)
                : '';
        message.taskType =
            object.taskType !== undefined && object.taskType !== null
                ? String(object.taskType)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.uploadFormat =
            object.uploadFormat !== undefined && object.uploadFormat !== null
                ? String(object.uploadFormat)
                : '';
        message.allowDataLog =
            object.allowDataLog !== undefined && object.allowDataLog !== null
                ? Boolean(object.allowDataLog)
                : false;
        return message;
    },

    toJSON(message: CreateDatasetRequest): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.description !== undefined && (obj.description = message.description);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.taskType !== undefined && (obj.taskType = message.taskType);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.uploadFormat !== undefined && (obj.uploadFormat = message.uploadFormat);
        message.allowDataLog !== undefined && (obj.allowDataLog = message.allowDataLog);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateDatasetRequest>, I>>(
        object: I,
    ): CreateDatasetRequest {
        const message = { ...baseCreateDatasetRequest } as CreateDatasetRequest;
        message.name = object.name ?? '';
        message.folderId = object.folderId ?? '';
        message.description = object.description ?? '';
        message.metadata = object.metadata ?? '';
        message.taskType = object.taskType ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.uploadFormat = object.uploadFormat ?? '';
        message.allowDataLog = object.allowDataLog ?? false;
        return message;
    },
};

messageTypeRegistry.set(CreateDatasetRequest.$type, CreateDatasetRequest);

const baseCreateDatasetRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.ai.dataset.v1.CreateDatasetRequest.LabelsEntry',
    key: '',
    value: '',
};

export const CreateDatasetRequest_LabelsEntry = {
    $type: 'yandex.cloud.ai.dataset.v1.CreateDatasetRequest.LabelsEntry' as const,

    encode(
        message: CreateDatasetRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateDatasetRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateDatasetRequest_LabelsEntry,
        } as CreateDatasetRequest_LabelsEntry;
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

    fromJSON(object: any): CreateDatasetRequest_LabelsEntry {
        const message = {
            ...baseCreateDatasetRequest_LabelsEntry,
        } as CreateDatasetRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateDatasetRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateDatasetRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateDatasetRequest_LabelsEntry {
        const message = {
            ...baseCreateDatasetRequest_LabelsEntry,
        } as CreateDatasetRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(CreateDatasetRequest_LabelsEntry.$type, CreateDatasetRequest_LabelsEntry);

const baseCreateDatasetResponse: object = {
    $type: 'yandex.cloud.ai.dataset.v1.CreateDatasetResponse',
    datasetId: '',
};

export const CreateDatasetResponse = {
    $type: 'yandex.cloud.ai.dataset.v1.CreateDatasetResponse' as const,

    encode(message: CreateDatasetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.datasetId !== '') {
            writer.uint32(10).string(message.datasetId);
        }
        if (message.dataset !== undefined) {
            DatasetInfo.encode(message.dataset, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateDatasetResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateDatasetResponse } as CreateDatasetResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.datasetId = reader.string();
                    break;
                case 2:
                    message.dataset = DatasetInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateDatasetResponse {
        const message = { ...baseCreateDatasetResponse } as CreateDatasetResponse;
        message.datasetId =
            object.datasetId !== undefined && object.datasetId !== null
                ? String(object.datasetId)
                : '';
        message.dataset =
            object.dataset !== undefined && object.dataset !== null
                ? DatasetInfo.fromJSON(object.dataset)
                : undefined;
        return message;
    },

    toJSON(message: CreateDatasetResponse): unknown {
        const obj: any = {};
        message.datasetId !== undefined && (obj.datasetId = message.datasetId);
        message.dataset !== undefined &&
            (obj.dataset = message.dataset ? DatasetInfo.toJSON(message.dataset) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateDatasetResponse>, I>>(
        object: I,
    ): CreateDatasetResponse {
        const message = { ...baseCreateDatasetResponse } as CreateDatasetResponse;
        message.datasetId = object.datasetId ?? '';
        message.dataset =
            object.dataset !== undefined && object.dataset !== null
                ? DatasetInfo.fromPartial(object.dataset)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(CreateDatasetResponse.$type, CreateDatasetResponse);

const baseUpdateDatasetRequest: object = {
    $type: 'yandex.cloud.ai.dataset.v1.UpdateDatasetRequest',
    datasetId: '',
    name: '',
    description: '',
};

export const UpdateDatasetRequest = {
    $type: 'yandex.cloud.ai.dataset.v1.UpdateDatasetRequest' as const,

    encode(message: UpdateDatasetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.datasetId !== '') {
            writer.uint32(10).string(message.datasetId);
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
            UpdateDatasetRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.ai.dataset.v1.UpdateDatasetRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDatasetRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateDatasetRequest } as UpdateDatasetRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.datasetId = reader.string();
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
                    const entry5 = UpdateDatasetRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateDatasetRequest {
        const message = { ...baseUpdateDatasetRequest } as UpdateDatasetRequest;
        message.datasetId =
            object.datasetId !== undefined && object.datasetId !== null
                ? String(object.datasetId)
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
        return message;
    },

    toJSON(message: UpdateDatasetRequest): unknown {
        const obj: any = {};
        message.datasetId !== undefined && (obj.datasetId = message.datasetId);
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

    fromPartial<I extends Exact<DeepPartial<UpdateDatasetRequest>, I>>(
        object: I,
    ): UpdateDatasetRequest {
        const message = { ...baseUpdateDatasetRequest } as UpdateDatasetRequest;
        message.datasetId = object.datasetId ?? '';
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

messageTypeRegistry.set(UpdateDatasetRequest.$type, UpdateDatasetRequest);

const baseUpdateDatasetRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.ai.dataset.v1.UpdateDatasetRequest.LabelsEntry',
    key: '',
    value: '',
};

export const UpdateDatasetRequest_LabelsEntry = {
    $type: 'yandex.cloud.ai.dataset.v1.UpdateDatasetRequest.LabelsEntry' as const,

    encode(
        message: UpdateDatasetRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDatasetRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateDatasetRequest_LabelsEntry,
        } as UpdateDatasetRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateDatasetRequest_LabelsEntry {
        const message = {
            ...baseUpdateDatasetRequest_LabelsEntry,
        } as UpdateDatasetRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateDatasetRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateDatasetRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateDatasetRequest_LabelsEntry {
        const message = {
            ...baseUpdateDatasetRequest_LabelsEntry,
        } as UpdateDatasetRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(UpdateDatasetRequest_LabelsEntry.$type, UpdateDatasetRequest_LabelsEntry);

const baseUpdateDatasetResponse: object = {
    $type: 'yandex.cloud.ai.dataset.v1.UpdateDatasetResponse',
};

export const UpdateDatasetResponse = {
    $type: 'yandex.cloud.ai.dataset.v1.UpdateDatasetResponse' as const,

    encode(message: UpdateDatasetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.dataset !== undefined) {
            DatasetInfo.encode(message.dataset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDatasetResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateDatasetResponse } as UpdateDatasetResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataset = DatasetInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateDatasetResponse {
        const message = { ...baseUpdateDatasetResponse } as UpdateDatasetResponse;
        message.dataset =
            object.dataset !== undefined && object.dataset !== null
                ? DatasetInfo.fromJSON(object.dataset)
                : undefined;
        return message;
    },

    toJSON(message: UpdateDatasetResponse): unknown {
        const obj: any = {};
        message.dataset !== undefined &&
            (obj.dataset = message.dataset ? DatasetInfo.toJSON(message.dataset) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateDatasetResponse>, I>>(
        object: I,
    ): UpdateDatasetResponse {
        const message = { ...baseUpdateDatasetResponse } as UpdateDatasetResponse;
        message.dataset =
            object.dataset !== undefined && object.dataset !== null
                ? DatasetInfo.fromPartial(object.dataset)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(UpdateDatasetResponse.$type, UpdateDatasetResponse);

const baseGetUploadDraftUrlRequest: object = {
    $type: 'yandex.cloud.ai.dataset.v1.GetUploadDraftUrlRequest',
    datasetId: '',
    sizeBytes: 0,
};

export const GetUploadDraftUrlRequest = {
    $type: 'yandex.cloud.ai.dataset.v1.GetUploadDraftUrlRequest' as const,

    encode(
        message: GetUploadDraftUrlRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.datasetId !== '') {
            writer.uint32(10).string(message.datasetId);
        }
        if (message.sizeBytes !== 0) {
            writer.uint32(16).int64(message.sizeBytes);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetUploadDraftUrlRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetUploadDraftUrlRequest } as GetUploadDraftUrlRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.datasetId = reader.string();
                    break;
                case 2:
                    message.sizeBytes = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetUploadDraftUrlRequest {
        const message = { ...baseGetUploadDraftUrlRequest } as GetUploadDraftUrlRequest;
        message.datasetId =
            object.datasetId !== undefined && object.datasetId !== null
                ? String(object.datasetId)
                : '';
        message.sizeBytes =
            object.sizeBytes !== undefined && object.sizeBytes !== null
                ? Number(object.sizeBytes)
                : 0;
        return message;
    },

    toJSON(message: GetUploadDraftUrlRequest): unknown {
        const obj: any = {};
        message.datasetId !== undefined && (obj.datasetId = message.datasetId);
        message.sizeBytes !== undefined && (obj.sizeBytes = Math.round(message.sizeBytes));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetUploadDraftUrlRequest>, I>>(
        object: I,
    ): GetUploadDraftUrlRequest {
        const message = { ...baseGetUploadDraftUrlRequest } as GetUploadDraftUrlRequest;
        message.datasetId = object.datasetId ?? '';
        message.sizeBytes = object.sizeBytes ?? 0;
        return message;
    },
};

messageTypeRegistry.set(GetUploadDraftUrlRequest.$type, GetUploadDraftUrlRequest);

const baseGetUploadDraftUrlResponse: object = {
    $type: 'yandex.cloud.ai.dataset.v1.GetUploadDraftUrlResponse',
    datasetId: '',
    uploadUrl: '',
};

export const GetUploadDraftUrlResponse = {
    $type: 'yandex.cloud.ai.dataset.v1.GetUploadDraftUrlResponse' as const,

    encode(
        message: GetUploadDraftUrlResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.datasetId !== '') {
            writer.uint32(10).string(message.datasetId);
        }
        if (message.uploadUrl !== '') {
            writer.uint32(18).string(message.uploadUrl);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetUploadDraftUrlResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetUploadDraftUrlResponse } as GetUploadDraftUrlResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.datasetId = reader.string();
                    break;
                case 2:
                    message.uploadUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetUploadDraftUrlResponse {
        const message = { ...baseGetUploadDraftUrlResponse } as GetUploadDraftUrlResponse;
        message.datasetId =
            object.datasetId !== undefined && object.datasetId !== null
                ? String(object.datasetId)
                : '';
        message.uploadUrl =
            object.uploadUrl !== undefined && object.uploadUrl !== null
                ? String(object.uploadUrl)
                : '';
        return message;
    },

    toJSON(message: GetUploadDraftUrlResponse): unknown {
        const obj: any = {};
        message.datasetId !== undefined && (obj.datasetId = message.datasetId);
        message.uploadUrl !== undefined && (obj.uploadUrl = message.uploadUrl);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetUploadDraftUrlResponse>, I>>(
        object: I,
    ): GetUploadDraftUrlResponse {
        const message = { ...baseGetUploadDraftUrlResponse } as GetUploadDraftUrlResponse;
        message.datasetId = object.datasetId ?? '';
        message.uploadUrl = object.uploadUrl ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetUploadDraftUrlResponse.$type, GetUploadDraftUrlResponse);

const baseStartMultipartUploadDraftRequest: object = {
    $type: 'yandex.cloud.ai.dataset.v1.StartMultipartUploadDraftRequest',
    datasetId: '',
    sizeBytes: 0,
    parts: 0,
};

export const StartMultipartUploadDraftRequest = {
    $type: 'yandex.cloud.ai.dataset.v1.StartMultipartUploadDraftRequest' as const,

    encode(
        message: StartMultipartUploadDraftRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.datasetId !== '') {
            writer.uint32(10).string(message.datasetId);
        }
        if (message.sizeBytes !== 0) {
            writer.uint32(16).int64(message.sizeBytes);
        }
        if (message.parts !== 0) {
            writer.uint32(24).int64(message.parts);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StartMultipartUploadDraftRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStartMultipartUploadDraftRequest,
        } as StartMultipartUploadDraftRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.datasetId = reader.string();
                    break;
                case 2:
                    message.sizeBytes = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.parts = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StartMultipartUploadDraftRequest {
        const message = {
            ...baseStartMultipartUploadDraftRequest,
        } as StartMultipartUploadDraftRequest;
        message.datasetId =
            object.datasetId !== undefined && object.datasetId !== null
                ? String(object.datasetId)
                : '';
        message.sizeBytes =
            object.sizeBytes !== undefined && object.sizeBytes !== null
                ? Number(object.sizeBytes)
                : 0;
        message.parts =
            object.parts !== undefined && object.parts !== null ? Number(object.parts) : 0;
        return message;
    },

    toJSON(message: StartMultipartUploadDraftRequest): unknown {
        const obj: any = {};
        message.datasetId !== undefined && (obj.datasetId = message.datasetId);
        message.sizeBytes !== undefined && (obj.sizeBytes = Math.round(message.sizeBytes));
        message.parts !== undefined && (obj.parts = Math.round(message.parts));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StartMultipartUploadDraftRequest>, I>>(
        object: I,
    ): StartMultipartUploadDraftRequest {
        const message = {
            ...baseStartMultipartUploadDraftRequest,
        } as StartMultipartUploadDraftRequest;
        message.datasetId = object.datasetId ?? '';
        message.sizeBytes = object.sizeBytes ?? 0;
        message.parts = object.parts ?? 0;
        return message;
    },
};

messageTypeRegistry.set(StartMultipartUploadDraftRequest.$type, StartMultipartUploadDraftRequest);

const baseStartMultipartUploadDraftResponse: object = {
    $type: 'yandex.cloud.ai.dataset.v1.StartMultipartUploadDraftResponse',
    datasetId: '',
    multipartUploadUrls: '',
};

export const StartMultipartUploadDraftResponse = {
    $type: 'yandex.cloud.ai.dataset.v1.StartMultipartUploadDraftResponse' as const,

    encode(
        message: StartMultipartUploadDraftResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.datasetId !== '') {
            writer.uint32(10).string(message.datasetId);
        }
        for (const v of message.multipartUploadUrls) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StartMultipartUploadDraftResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStartMultipartUploadDraftResponse,
        } as StartMultipartUploadDraftResponse;
        message.multipartUploadUrls = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.datasetId = reader.string();
                    break;
                case 2:
                    message.multipartUploadUrls.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StartMultipartUploadDraftResponse {
        const message = {
            ...baseStartMultipartUploadDraftResponse,
        } as StartMultipartUploadDraftResponse;
        message.datasetId =
            object.datasetId !== undefined && object.datasetId !== null
                ? String(object.datasetId)
                : '';
        message.multipartUploadUrls = (object.multipartUploadUrls ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: StartMultipartUploadDraftResponse): unknown {
        const obj: any = {};
        message.datasetId !== undefined && (obj.datasetId = message.datasetId);
        if (message.multipartUploadUrls) {
            obj.multipartUploadUrls = message.multipartUploadUrls.map((e) => e);
        } else {
            obj.multipartUploadUrls = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StartMultipartUploadDraftResponse>, I>>(
        object: I,
    ): StartMultipartUploadDraftResponse {
        const message = {
            ...baseStartMultipartUploadDraftResponse,
        } as StartMultipartUploadDraftResponse;
        message.datasetId = object.datasetId ?? '';
        message.multipartUploadUrls = object.multipartUploadUrls?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(StartMultipartUploadDraftResponse.$type, StartMultipartUploadDraftResponse);

const baseUploadedPartInfo: object = {
    $type: 'yandex.cloud.ai.dataset.v1.UploadedPartInfo',
    partNum: 0,
    etag: '',
};

export const UploadedPartInfo = {
    $type: 'yandex.cloud.ai.dataset.v1.UploadedPartInfo' as const,

    encode(message: UploadedPartInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.partNum !== 0) {
            writer.uint32(8).int64(message.partNum);
        }
        if (message.etag !== '') {
            writer.uint32(18).string(message.etag);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UploadedPartInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUploadedPartInfo } as UploadedPartInfo;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.partNum = longToNumber(reader.int64() as Long);
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

    fromJSON(object: any): UploadedPartInfo {
        const message = { ...baseUploadedPartInfo } as UploadedPartInfo;
        message.partNum =
            object.partNum !== undefined && object.partNum !== null ? Number(object.partNum) : 0;
        message.etag = object.etag !== undefined && object.etag !== null ? String(object.etag) : '';
        return message;
    },

    toJSON(message: UploadedPartInfo): unknown {
        const obj: any = {};
        message.partNum !== undefined && (obj.partNum = Math.round(message.partNum));
        message.etag !== undefined && (obj.etag = message.etag);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UploadedPartInfo>, I>>(object: I): UploadedPartInfo {
        const message = { ...baseUploadedPartInfo } as UploadedPartInfo;
        message.partNum = object.partNum ?? 0;
        message.etag = object.etag ?? '';
        return message;
    },
};

messageTypeRegistry.set(UploadedPartInfo.$type, UploadedPartInfo);

const baseFinishMultipartUploadDraftRequest: object = {
    $type: 'yandex.cloud.ai.dataset.v1.FinishMultipartUploadDraftRequest',
    datasetId: '',
};

export const FinishMultipartUploadDraftRequest = {
    $type: 'yandex.cloud.ai.dataset.v1.FinishMultipartUploadDraftRequest' as const,

    encode(
        message: FinishMultipartUploadDraftRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.datasetId !== '') {
            writer.uint32(10).string(message.datasetId);
        }
        for (const v of message.uploadedParts) {
            UploadedPartInfo.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FinishMultipartUploadDraftRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseFinishMultipartUploadDraftRequest,
        } as FinishMultipartUploadDraftRequest;
        message.uploadedParts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.datasetId = reader.string();
                    break;
                case 2:
                    message.uploadedParts.push(UploadedPartInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FinishMultipartUploadDraftRequest {
        const message = {
            ...baseFinishMultipartUploadDraftRequest,
        } as FinishMultipartUploadDraftRequest;
        message.datasetId =
            object.datasetId !== undefined && object.datasetId !== null
                ? String(object.datasetId)
                : '';
        message.uploadedParts = (object.uploadedParts ?? []).map((e: any) =>
            UploadedPartInfo.fromJSON(e),
        );
        return message;
    },

    toJSON(message: FinishMultipartUploadDraftRequest): unknown {
        const obj: any = {};
        message.datasetId !== undefined && (obj.datasetId = message.datasetId);
        if (message.uploadedParts) {
            obj.uploadedParts = message.uploadedParts.map((e) =>
                e ? UploadedPartInfo.toJSON(e) : undefined,
            );
        } else {
            obj.uploadedParts = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FinishMultipartUploadDraftRequest>, I>>(
        object: I,
    ): FinishMultipartUploadDraftRequest {
        const message = {
            ...baseFinishMultipartUploadDraftRequest,
        } as FinishMultipartUploadDraftRequest;
        message.datasetId = object.datasetId ?? '';
        message.uploadedParts =
            object.uploadedParts?.map((e) => UploadedPartInfo.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(FinishMultipartUploadDraftRequest.$type, FinishMultipartUploadDraftRequest);

const baseFinishMultipartUploadDraftResponse: object = {
    $type: 'yandex.cloud.ai.dataset.v1.FinishMultipartUploadDraftResponse',
    datasetId: '',
};

export const FinishMultipartUploadDraftResponse = {
    $type: 'yandex.cloud.ai.dataset.v1.FinishMultipartUploadDraftResponse' as const,

    encode(
        message: FinishMultipartUploadDraftResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.datasetId !== '') {
            writer.uint32(10).string(message.datasetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FinishMultipartUploadDraftResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseFinishMultipartUploadDraftResponse,
        } as FinishMultipartUploadDraftResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.datasetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FinishMultipartUploadDraftResponse {
        const message = {
            ...baseFinishMultipartUploadDraftResponse,
        } as FinishMultipartUploadDraftResponse;
        message.datasetId =
            object.datasetId !== undefined && object.datasetId !== null
                ? String(object.datasetId)
                : '';
        return message;
    },

    toJSON(message: FinishMultipartUploadDraftResponse): unknown {
        const obj: any = {};
        message.datasetId !== undefined && (obj.datasetId = message.datasetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FinishMultipartUploadDraftResponse>, I>>(
        object: I,
    ): FinishMultipartUploadDraftResponse {
        const message = {
            ...baseFinishMultipartUploadDraftResponse,
        } as FinishMultipartUploadDraftResponse;
        message.datasetId = object.datasetId ?? '';
        return message;
    },
};

messageTypeRegistry.set(
    FinishMultipartUploadDraftResponse.$type,
    FinishMultipartUploadDraftResponse,
);

const baseListDatasetsRequest: object = {
    $type: 'yandex.cloud.ai.dataset.v1.ListDatasetsRequest',
    folderId: '',
    status: 0,
    datasetNamePattern: '',
    taskTypeFilter: '',
    pageSize: 0,
    pageToken: '',
};

export const ListDatasetsRequest = {
    $type: 'yandex.cloud.ai.dataset.v1.ListDatasetsRequest' as const,

    encode(message: ListDatasetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        writer.uint32(18).fork();
        for (const v of message.status) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.datasetNamePattern !== '') {
            writer.uint32(26).string(message.datasetNamePattern);
        }
        for (const v of message.taskTypeFilter) {
            writer.uint32(34).string(v!);
        }
        if (message.pageSize !== 0) {
            writer.uint32(40).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(50).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListDatasetsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDatasetsRequest } as ListDatasetsRequest;
        message.status = [];
        message.taskTypeFilter = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.status.push(reader.int32() as any);
                        }
                    } else {
                        message.status.push(reader.int32() as any);
                    }
                    break;
                case 3:
                    message.datasetNamePattern = reader.string();
                    break;
                case 4:
                    message.taskTypeFilter.push(reader.string());
                    break;
                case 5:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 6:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListDatasetsRequest {
        const message = { ...baseListDatasetsRequest } as ListDatasetsRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.status = (object.status ?? []).map((e: any) => datasetInfo_StatusFromJSON(e));
        message.datasetNamePattern =
            object.datasetNamePattern !== undefined && object.datasetNamePattern !== null
                ? String(object.datasetNamePattern)
                : '';
        message.taskTypeFilter = (object.taskTypeFilter ?? []).map((e: any) => String(e));
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListDatasetsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        if (message.status) {
            obj.status = message.status.map((e) => datasetInfo_StatusToJSON(e));
        } else {
            obj.status = [];
        }
        message.datasetNamePattern !== undefined &&
            (obj.datasetNamePattern = message.datasetNamePattern);
        if (message.taskTypeFilter) {
            obj.taskTypeFilter = message.taskTypeFilter.map((e) => e);
        } else {
            obj.taskTypeFilter = [];
        }
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListDatasetsRequest>, I>>(
        object: I,
    ): ListDatasetsRequest {
        const message = { ...baseListDatasetsRequest } as ListDatasetsRequest;
        message.folderId = object.folderId ?? '';
        message.status = object.status?.map((e) => e) || [];
        message.datasetNamePattern = object.datasetNamePattern ?? '';
        message.taskTypeFilter = object.taskTypeFilter?.map((e) => e) || [];
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListDatasetsRequest.$type, ListDatasetsRequest);

const baseListDatasetsResponse: object = {
    $type: 'yandex.cloud.ai.dataset.v1.ListDatasetsResponse',
    nextPageToken: '',
};

export const ListDatasetsResponse = {
    $type: 'yandex.cloud.ai.dataset.v1.ListDatasetsResponse' as const,

    encode(message: ListDatasetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.datasets) {
            DatasetInfo.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListDatasetsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDatasetsResponse } as ListDatasetsResponse;
        message.datasets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.datasets.push(DatasetInfo.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListDatasetsResponse {
        const message = { ...baseListDatasetsResponse } as ListDatasetsResponse;
        message.datasets = (object.datasets ?? []).map((e: any) => DatasetInfo.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListDatasetsResponse): unknown {
        const obj: any = {};
        if (message.datasets) {
            obj.datasets = message.datasets.map((e) => (e ? DatasetInfo.toJSON(e) : undefined));
        } else {
            obj.datasets = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListDatasetsResponse>, I>>(
        object: I,
    ): ListDatasetsResponse {
        const message = { ...baseListDatasetsResponse } as ListDatasetsResponse;
        message.datasets = object.datasets?.map((e) => DatasetInfo.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListDatasetsResponse.$type, ListDatasetsResponse);

const baseListUploadFormatsRequest: object = {
    $type: 'yandex.cloud.ai.dataset.v1.ListUploadFormatsRequest',
    taskType: '',
};

export const ListUploadFormatsRequest = {
    $type: 'yandex.cloud.ai.dataset.v1.ListUploadFormatsRequest' as const,

    encode(
        message: ListUploadFormatsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.taskType !== '') {
            writer.uint32(10).string(message.taskType);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListUploadFormatsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListUploadFormatsRequest } as ListUploadFormatsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taskType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListUploadFormatsRequest {
        const message = { ...baseListUploadFormatsRequest } as ListUploadFormatsRequest;
        message.taskType =
            object.taskType !== undefined && object.taskType !== null
                ? String(object.taskType)
                : '';
        return message;
    },

    toJSON(message: ListUploadFormatsRequest): unknown {
        const obj: any = {};
        message.taskType !== undefined && (obj.taskType = message.taskType);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListUploadFormatsRequest>, I>>(
        object: I,
    ): ListUploadFormatsRequest {
        const message = { ...baseListUploadFormatsRequest } as ListUploadFormatsRequest;
        message.taskType = object.taskType ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListUploadFormatsRequest.$type, ListUploadFormatsRequest);

const baseListUploadFormatsResponse: object = {
    $type: 'yandex.cloud.ai.dataset.v1.ListUploadFormatsResponse',
    formats: '',
};

export const ListUploadFormatsResponse = {
    $type: 'yandex.cloud.ai.dataset.v1.ListUploadFormatsResponse' as const,

    encode(
        message: ListUploadFormatsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.formats) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListUploadFormatsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListUploadFormatsResponse } as ListUploadFormatsResponse;
        message.formats = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.formats.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListUploadFormatsResponse {
        const message = { ...baseListUploadFormatsResponse } as ListUploadFormatsResponse;
        message.formats = (object.formats ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: ListUploadFormatsResponse): unknown {
        const obj: any = {};
        if (message.formats) {
            obj.formats = message.formats.map((e) => e);
        } else {
            obj.formats = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListUploadFormatsResponse>, I>>(
        object: I,
    ): ListUploadFormatsResponse {
        const message = { ...baseListUploadFormatsResponse } as ListUploadFormatsResponse;
        message.formats = object.formats?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(ListUploadFormatsResponse.$type, ListUploadFormatsResponse);

const baseListUploadSchemasRequest: object = {
    $type: 'yandex.cloud.ai.dataset.v1.ListUploadSchemasRequest',
    taskType: '',
};

export const ListUploadSchemasRequest = {
    $type: 'yandex.cloud.ai.dataset.v1.ListUploadSchemasRequest' as const,

    encode(
        message: ListUploadSchemasRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.taskType !== '') {
            writer.uint32(10).string(message.taskType);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListUploadSchemasRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListUploadSchemasRequest } as ListUploadSchemasRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taskType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListUploadSchemasRequest {
        const message = { ...baseListUploadSchemasRequest } as ListUploadSchemasRequest;
        message.taskType =
            object.taskType !== undefined && object.taskType !== null
                ? String(object.taskType)
                : '';
        return message;
    },

    toJSON(message: ListUploadSchemasRequest): unknown {
        const obj: any = {};
        message.taskType !== undefined && (obj.taskType = message.taskType);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListUploadSchemasRequest>, I>>(
        object: I,
    ): ListUploadSchemasRequest {
        const message = { ...baseListUploadSchemasRequest } as ListUploadSchemasRequest;
        message.taskType = object.taskType ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListUploadSchemasRequest.$type, ListUploadSchemasRequest);

const baseListUploadSchemasResponse: object = {
    $type: 'yandex.cloud.ai.dataset.v1.ListUploadSchemasResponse',
};

export const ListUploadSchemasResponse = {
    $type: 'yandex.cloud.ai.dataset.v1.ListUploadSchemasResponse' as const,

    encode(
        message: ListUploadSchemasResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.schemas) {
            DatasetUploadSchema.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListUploadSchemasResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListUploadSchemasResponse } as ListUploadSchemasResponse;
        message.schemas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.schemas.push(DatasetUploadSchema.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListUploadSchemasResponse {
        const message = { ...baseListUploadSchemasResponse } as ListUploadSchemasResponse;
        message.schemas = (object.schemas ?? []).map((e: any) => DatasetUploadSchema.fromJSON(e));
        return message;
    },

    toJSON(message: ListUploadSchemasResponse): unknown {
        const obj: any = {};
        if (message.schemas) {
            obj.schemas = message.schemas.map((e) =>
                e ? DatasetUploadSchema.toJSON(e) : undefined,
            );
        } else {
            obj.schemas = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListUploadSchemasResponse>, I>>(
        object: I,
    ): ListUploadSchemasResponse {
        const message = { ...baseListUploadSchemasResponse } as ListUploadSchemasResponse;
        message.schemas = object.schemas?.map((e) => DatasetUploadSchema.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(ListUploadSchemasResponse.$type, ListUploadSchemasResponse);

const baseListTypesRequest: object = { $type: 'yandex.cloud.ai.dataset.v1.ListTypesRequest' };

export const ListTypesRequest = {
    $type: 'yandex.cloud.ai.dataset.v1.ListTypesRequest' as const,

    encode(_: ListTypesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListTypesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListTypesRequest } as ListTypesRequest;
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

    fromJSON(_: any): ListTypesRequest {
        const message = { ...baseListTypesRequest } as ListTypesRequest;
        return message;
    },

    toJSON(_: ListTypesRequest): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListTypesRequest>, I>>(_: I): ListTypesRequest {
        const message = { ...baseListTypesRequest } as ListTypesRequest;
        return message;
    },
};

messageTypeRegistry.set(ListTypesRequest.$type, ListTypesRequest);

const baseListTypesResponse: object = {
    $type: 'yandex.cloud.ai.dataset.v1.ListTypesResponse',
    types: '',
};

export const ListTypesResponse = {
    $type: 'yandex.cloud.ai.dataset.v1.ListTypesResponse' as const,

    encode(message: ListTypesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.types) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListTypesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListTypesResponse } as ListTypesResponse;
        message.types = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.types.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListTypesResponse {
        const message = { ...baseListTypesResponse } as ListTypesResponse;
        message.types = (object.types ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: ListTypesResponse): unknown {
        const obj: any = {};
        if (message.types) {
            obj.types = message.types.map((e) => e);
        } else {
            obj.types = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListTypesResponse>, I>>(object: I): ListTypesResponse {
        const message = { ...baseListTypesResponse } as ListTypesResponse;
        message.types = object.types?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(ListTypesResponse.$type, ListTypesResponse);

const baseGetDatasetPreviewRequest: object = {
    $type: 'yandex.cloud.ai.dataset.v1.GetDatasetPreviewRequest',
    datasetId: '',
};

export const GetDatasetPreviewRequest = {
    $type: 'yandex.cloud.ai.dataset.v1.GetDatasetPreviewRequest' as const,

    encode(
        message: GetDatasetPreviewRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.datasetId !== '') {
            writer.uint32(10).string(message.datasetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetDatasetPreviewRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetDatasetPreviewRequest } as GetDatasetPreviewRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.datasetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetDatasetPreviewRequest {
        const message = { ...baseGetDatasetPreviewRequest } as GetDatasetPreviewRequest;
        message.datasetId =
            object.datasetId !== undefined && object.datasetId !== null
                ? String(object.datasetId)
                : '';
        return message;
    },

    toJSON(message: GetDatasetPreviewRequest): unknown {
        const obj: any = {};
        message.datasetId !== undefined && (obj.datasetId = message.datasetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetDatasetPreviewRequest>, I>>(
        object: I,
    ): GetDatasetPreviewRequest {
        const message = { ...baseGetDatasetPreviewRequest } as GetDatasetPreviewRequest;
        message.datasetId = object.datasetId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetDatasetPreviewRequest.$type, GetDatasetPreviewRequest);

const baseGetDatasetPreviewResponse: object = {
    $type: 'yandex.cloud.ai.dataset.v1.GetDatasetPreviewResponse',
    datasetId: '',
    previewLines: '',
};

export const GetDatasetPreviewResponse = {
    $type: 'yandex.cloud.ai.dataset.v1.GetDatasetPreviewResponse' as const,

    encode(
        message: GetDatasetPreviewResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.datasetId !== '') {
            writer.uint32(10).string(message.datasetId);
        }
        for (const v of message.previewLines) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetDatasetPreviewResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetDatasetPreviewResponse } as GetDatasetPreviewResponse;
        message.previewLines = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.datasetId = reader.string();
                    break;
                case 2:
                    message.previewLines.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetDatasetPreviewResponse {
        const message = { ...baseGetDatasetPreviewResponse } as GetDatasetPreviewResponse;
        message.datasetId =
            object.datasetId !== undefined && object.datasetId !== null
                ? String(object.datasetId)
                : '';
        message.previewLines = (object.previewLines ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: GetDatasetPreviewResponse): unknown {
        const obj: any = {};
        message.datasetId !== undefined && (obj.datasetId = message.datasetId);
        if (message.previewLines) {
            obj.previewLines = message.previewLines.map((e) => e);
        } else {
            obj.previewLines = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetDatasetPreviewResponse>, I>>(
        object: I,
    ): GetDatasetPreviewResponse {
        const message = { ...baseGetDatasetPreviewResponse } as GetDatasetPreviewResponse;
        message.datasetId = object.datasetId ?? '';
        message.previewLines = object.previewLines?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(GetDatasetPreviewResponse.$type, GetDatasetPreviewResponse);

const baseGetDownloadUrlsRequest: object = {
    $type: 'yandex.cloud.ai.dataset.v1.GetDownloadUrlsRequest',
    datasetId: '',
};

export const GetDownloadUrlsRequest = {
    $type: 'yandex.cloud.ai.dataset.v1.GetDownloadUrlsRequest' as const,

    encode(message: GetDownloadUrlsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.datasetId !== '') {
            writer.uint32(10).string(message.datasetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetDownloadUrlsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetDownloadUrlsRequest } as GetDownloadUrlsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.datasetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetDownloadUrlsRequest {
        const message = { ...baseGetDownloadUrlsRequest } as GetDownloadUrlsRequest;
        message.datasetId =
            object.datasetId !== undefined && object.datasetId !== null
                ? String(object.datasetId)
                : '';
        return message;
    },

    toJSON(message: GetDownloadUrlsRequest): unknown {
        const obj: any = {};
        message.datasetId !== undefined && (obj.datasetId = message.datasetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetDownloadUrlsRequest>, I>>(
        object: I,
    ): GetDownloadUrlsRequest {
        const message = { ...baseGetDownloadUrlsRequest } as GetDownloadUrlsRequest;
        message.datasetId = object.datasetId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetDownloadUrlsRequest.$type, GetDownloadUrlsRequest);

const baseGetDownloadUrlsResponse: object = {
    $type: 'yandex.cloud.ai.dataset.v1.GetDownloadUrlsResponse',
    datasetId: '',
};

export const GetDownloadUrlsResponse = {
    $type: 'yandex.cloud.ai.dataset.v1.GetDownloadUrlsResponse' as const,

    encode(message: GetDownloadUrlsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.datasetId !== '') {
            writer.uint32(10).string(message.datasetId);
        }
        for (const v of message.downloadUrls) {
            DatasetFileDownloadUrl.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetDownloadUrlsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetDownloadUrlsResponse } as GetDownloadUrlsResponse;
        message.downloadUrls = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.datasetId = reader.string();
                    break;
                case 2:
                    message.downloadUrls.push(
                        DatasetFileDownloadUrl.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetDownloadUrlsResponse {
        const message = { ...baseGetDownloadUrlsResponse } as GetDownloadUrlsResponse;
        message.datasetId =
            object.datasetId !== undefined && object.datasetId !== null
                ? String(object.datasetId)
                : '';
        message.downloadUrls = (object.downloadUrls ?? []).map((e: any) =>
            DatasetFileDownloadUrl.fromJSON(e),
        );
        return message;
    },

    toJSON(message: GetDownloadUrlsResponse): unknown {
        const obj: any = {};
        message.datasetId !== undefined && (obj.datasetId = message.datasetId);
        if (message.downloadUrls) {
            obj.downloadUrls = message.downloadUrls.map((e) =>
                e ? DatasetFileDownloadUrl.toJSON(e) : undefined,
            );
        } else {
            obj.downloadUrls = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetDownloadUrlsResponse>, I>>(
        object: I,
    ): GetDownloadUrlsResponse {
        const message = { ...baseGetDownloadUrlsResponse } as GetDownloadUrlsResponse;
        message.datasetId = object.datasetId ?? '';
        message.downloadUrls =
            object.downloadUrls?.map((e) => DatasetFileDownloadUrl.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(GetDownloadUrlsResponse.$type, GetDownloadUrlsResponse);

const baseListOperationsIdsRequest: object = {
    $type: 'yandex.cloud.ai.dataset.v1.ListOperationsIdsRequest',
    datasetId: '',
};

export const ListOperationsIdsRequest = {
    $type: 'yandex.cloud.ai.dataset.v1.ListOperationsIdsRequest' as const,

    encode(
        message: ListOperationsIdsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.datasetId) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsIdsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListOperationsIdsRequest } as ListOperationsIdsRequest;
        message.datasetId = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.datasetId.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListOperationsIdsRequest {
        const message = { ...baseListOperationsIdsRequest } as ListOperationsIdsRequest;
        message.datasetId = (object.datasetId ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: ListOperationsIdsRequest): unknown {
        const obj: any = {};
        if (message.datasetId) {
            obj.datasetId = message.datasetId.map((e) => e);
        } else {
            obj.datasetId = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListOperationsIdsRequest>, I>>(
        object: I,
    ): ListOperationsIdsRequest {
        const message = { ...baseListOperationsIdsRequest } as ListOperationsIdsRequest;
        message.datasetId = object.datasetId?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(ListOperationsIdsRequest.$type, ListOperationsIdsRequest);

const baseListOperationsIdsResponse: object = {
    $type: 'yandex.cloud.ai.dataset.v1.ListOperationsIdsResponse',
};

export const ListOperationsIdsResponse = {
    $type: 'yandex.cloud.ai.dataset.v1.ListOperationsIdsResponse' as const,

    encode(
        message: ListOperationsIdsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        Object.entries(message.datasetIdToOperationId).forEach(([key, value]) => {
            ListOperationsIdsResponse_DatasetIdToOperationIdEntry.encode(
                {
                    $type: 'yandex.cloud.ai.dataset.v1.ListOperationsIdsResponse.DatasetIdToOperationIdEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(10).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsIdsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListOperationsIdsResponse } as ListOperationsIdsResponse;
        message.datasetIdToOperationId = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = ListOperationsIdsResponse_DatasetIdToOperationIdEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry1.value !== undefined) {
                        message.datasetIdToOperationId[entry1.key] = entry1.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListOperationsIdsResponse {
        const message = { ...baseListOperationsIdsResponse } as ListOperationsIdsResponse;
        message.datasetIdToOperationId = Object.entries(
            object.datasetIdToOperationId ?? {},
        ).reduce<{ [key: string]: string }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },

    toJSON(message: ListOperationsIdsResponse): unknown {
        const obj: any = {};
        obj.datasetIdToOperationId = {};
        if (message.datasetIdToOperationId) {
            Object.entries(message.datasetIdToOperationId).forEach(([k, v]) => {
                obj.datasetIdToOperationId[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListOperationsIdsResponse>, I>>(
        object: I,
    ): ListOperationsIdsResponse {
        const message = { ...baseListOperationsIdsResponse } as ListOperationsIdsResponse;
        message.datasetIdToOperationId = Object.entries(
            object.datasetIdToOperationId ?? {},
        ).reduce<{ [key: string]: string }>((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};

messageTypeRegistry.set(ListOperationsIdsResponse.$type, ListOperationsIdsResponse);

const baseListOperationsIdsResponse_DatasetIdToOperationIdEntry: object = {
    $type: 'yandex.cloud.ai.dataset.v1.ListOperationsIdsResponse.DatasetIdToOperationIdEntry',
    key: '',
    value: '',
};

export const ListOperationsIdsResponse_DatasetIdToOperationIdEntry = {
    $type: 'yandex.cloud.ai.dataset.v1.ListOperationsIdsResponse.DatasetIdToOperationIdEntry' as const,

    encode(
        message: ListOperationsIdsResponse_DatasetIdToOperationIdEntry,
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ListOperationsIdsResponse_DatasetIdToOperationIdEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListOperationsIdsResponse_DatasetIdToOperationIdEntry,
        } as ListOperationsIdsResponse_DatasetIdToOperationIdEntry;
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

    fromJSON(object: any): ListOperationsIdsResponse_DatasetIdToOperationIdEntry {
        const message = {
            ...baseListOperationsIdsResponse_DatasetIdToOperationIdEntry,
        } as ListOperationsIdsResponse_DatasetIdToOperationIdEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: ListOperationsIdsResponse_DatasetIdToOperationIdEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<
        I extends Exact<DeepPartial<ListOperationsIdsResponse_DatasetIdToOperationIdEntry>, I>,
    >(object: I): ListOperationsIdsResponse_DatasetIdToOperationIdEntry {
        const message = {
            ...baseListOperationsIdsResponse_DatasetIdToOperationIdEntry,
        } as ListOperationsIdsResponse_DatasetIdToOperationIdEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(
    ListOperationsIdsResponse_DatasetIdToOperationIdEntry.$type,
    ListOperationsIdsResponse_DatasetIdToOperationIdEntry,
);

/** A set of methods for managing datasets. */
export const DatasetServiceService = {
    /** Returns dataset information by dataset id. */
    describe: {
        path: '/yandex.cloud.ai.dataset.v1.DatasetService/Describe',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DescribeDatasetRequest) =>
            Buffer.from(DescribeDatasetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DescribeDatasetRequest.decode(value),
        responseSerialize: (value: DescribeDatasetResponse) =>
            Buffer.from(DescribeDatasetResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => DescribeDatasetResponse.decode(value),
    },
    /** Starts dataset validation process. */
    validate: {
        path: '/yandex.cloud.ai.dataset.v1.DatasetService/Validate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ValidateDatasetRequest) =>
            Buffer.from(ValidateDatasetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ValidateDatasetRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Creates dataset. */
    create: {
        path: '/yandex.cloud.ai.dataset.v1.DatasetService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateDatasetRequest) =>
            Buffer.from(CreateDatasetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateDatasetRequest.decode(value),
        responseSerialize: (value: CreateDatasetResponse) =>
            Buffer.from(CreateDatasetResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => CreateDatasetResponse.decode(value),
    },
    /** Updates dataset. */
    update: {
        path: '/yandex.cloud.ai.dataset.v1.DatasetService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateDatasetRequest) =>
            Buffer.from(UpdateDatasetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateDatasetRequest.decode(value),
        responseSerialize: (value: UpdateDatasetResponse) =>
            Buffer.from(UpdateDatasetResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => UpdateDatasetResponse.decode(value),
    },
    /** Deletes dataset. */
    delete: {
        path: '/yandex.cloud.ai.dataset.v1.DatasetService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteDatasetRequest) =>
            Buffer.from(DeleteDatasetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteDatasetRequest.decode(value),
        responseSerialize: (value: DeleteDatasetResponse) =>
            Buffer.from(DeleteDatasetResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => DeleteDatasetResponse.decode(value),
    },
    /** Lists datasets in specified folder. */
    list: {
        path: '/yandex.cloud.ai.dataset.v1.DatasetService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListDatasetsRequest) =>
            Buffer.from(ListDatasetsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListDatasetsRequest.decode(value),
        responseSerialize: (value: ListDatasetsResponse) =>
            Buffer.from(ListDatasetsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListDatasetsResponse.decode(value),
    },
    /**
     * Deprecated. Use ListUploadSchemas.
     *
     * @deprecated
     */
    listUploadFormats: {
        path: '/yandex.cloud.ai.dataset.v1.DatasetService/ListUploadFormats',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListUploadFormatsRequest) =>
            Buffer.from(ListUploadFormatsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListUploadFormatsRequest.decode(value),
        responseSerialize: (value: ListUploadFormatsResponse) =>
            Buffer.from(ListUploadFormatsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListUploadFormatsResponse.decode(value),
    },
    /** Lists supported dataset upload formats types and schemas for the specified dataset task type. */
    listUploadSchemas: {
        path: '/yandex.cloud.ai.dataset.v1.DatasetService/ListUploadSchemas',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListUploadSchemasRequest) =>
            Buffer.from(ListUploadSchemasRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListUploadSchemasRequest.decode(value),
        responseSerialize: (value: ListUploadSchemasResponse) =>
            Buffer.from(ListUploadSchemasResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListUploadSchemasResponse.decode(value),
    },
    /**
     * Returns an S3 presigned URL for dataset upload.
     * This method only applicable if the dataset size does not exceed 5GB.
     */
    getUploadDraftUrl: {
        path: '/yandex.cloud.ai.dataset.v1.DatasetService/GetUploadDraftUrl',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetUploadDraftUrlRequest) =>
            Buffer.from(GetUploadDraftUrlRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetUploadDraftUrlRequest.decode(value),
        responseSerialize: (value: GetUploadDraftUrlResponse) =>
            Buffer.from(GetUploadDraftUrlResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetUploadDraftUrlResponse.decode(value),
    },
    /** Get urls to download dataset */
    getDownloadUrls: {
        path: '/yandex.cloud.ai.dataset.v1.DatasetService/GetDownloadUrls',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetDownloadUrlsRequest) =>
            Buffer.from(GetDownloadUrlsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetDownloadUrlsRequest.decode(value),
        responseSerialize: (value: GetDownloadUrlsResponse) =>
            Buffer.from(GetDownloadUrlsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetDownloadUrlsResponse.decode(value),
    },
    /** Returns a list of S3 presigned URLs for multipart upload of dataset. */
    startMultipartUploadDraft: {
        path: '/yandex.cloud.ai.dataset.v1.DatasetService/StartMultipartUploadDraft',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StartMultipartUploadDraftRequest) =>
            Buffer.from(StartMultipartUploadDraftRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StartMultipartUploadDraftRequest.decode(value),
        responseSerialize: (value: StartMultipartUploadDraftResponse) =>
            Buffer.from(StartMultipartUploadDraftResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => StartMultipartUploadDraftResponse.decode(value),
    },
    /** Finishes multipart upload of the dataset. */
    finishMultipartUploadDraft: {
        path: '/yandex.cloud.ai.dataset.v1.DatasetService/FinishMultipartUploadDraft',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: FinishMultipartUploadDraftRequest) =>
            Buffer.from(FinishMultipartUploadDraftRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => FinishMultipartUploadDraftRequest.decode(value),
        responseSerialize: (value: FinishMultipartUploadDraftResponse) =>
            Buffer.from(FinishMultipartUploadDraftResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => FinishMultipartUploadDraftResponse.decode(value),
    },
    /** Returns a list of dataset types */
    listTypes: {
        path: '/yandex.cloud.ai.dataset.v1.DatasetService/ListTypes',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListTypesRequest) =>
            Buffer.from(ListTypesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListTypesRequest.decode(value),
        responseSerialize: (value: ListTypesResponse) =>
            Buffer.from(ListTypesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListTypesResponse.decode(value),
    },
    /** Returns a preview of dataset types */
    getPreview: {
        path: '/yandex.cloud.ai.dataset.v1.DatasetService/GetPreview',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetDatasetPreviewRequest) =>
            Buffer.from(GetDatasetPreviewRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetDatasetPreviewRequest.decode(value),
        responseSerialize: (value: GetDatasetPreviewResponse) =>
            Buffer.from(GetDatasetPreviewResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetDatasetPreviewResponse.decode(value),
    },
    listOperationsIds: {
        path: '/yandex.cloud.ai.dataset.v1.DatasetService/ListOperationsIds',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListOperationsIdsRequest) =>
            Buffer.from(ListOperationsIdsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListOperationsIdsRequest.decode(value),
        responseSerialize: (value: ListOperationsIdsResponse) =>
            Buffer.from(ListOperationsIdsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListOperationsIdsResponse.decode(value),
    },
} as const;

export interface DatasetServiceServer extends UntypedServiceImplementation {
    /** Returns dataset information by dataset id. */
    describe: handleUnaryCall<DescribeDatasetRequest, DescribeDatasetResponse>;
    /** Starts dataset validation process. */
    validate: handleUnaryCall<ValidateDatasetRequest, Operation>;
    /** Creates dataset. */
    create: handleUnaryCall<CreateDatasetRequest, CreateDatasetResponse>;
    /** Updates dataset. */
    update: handleUnaryCall<UpdateDatasetRequest, UpdateDatasetResponse>;
    /** Deletes dataset. */
    delete: handleUnaryCall<DeleteDatasetRequest, DeleteDatasetResponse>;
    /** Lists datasets in specified folder. */
    list: handleUnaryCall<ListDatasetsRequest, ListDatasetsResponse>;
    /**
     * Deprecated. Use ListUploadSchemas.
     *
     * @deprecated
     */
    listUploadFormats: handleUnaryCall<ListUploadFormatsRequest, ListUploadFormatsResponse>;
    /** Lists supported dataset upload formats types and schemas for the specified dataset task type. */
    listUploadSchemas: handleUnaryCall<ListUploadSchemasRequest, ListUploadSchemasResponse>;
    /**
     * Returns an S3 presigned URL for dataset upload.
     * This method only applicable if the dataset size does not exceed 5GB.
     */
    getUploadDraftUrl: handleUnaryCall<GetUploadDraftUrlRequest, GetUploadDraftUrlResponse>;
    /** Get urls to download dataset */
    getDownloadUrls: handleUnaryCall<GetDownloadUrlsRequest, GetDownloadUrlsResponse>;
    /** Returns a list of S3 presigned URLs for multipart upload of dataset. */
    startMultipartUploadDraft: handleUnaryCall<
        StartMultipartUploadDraftRequest,
        StartMultipartUploadDraftResponse
    >;
    /** Finishes multipart upload of the dataset. */
    finishMultipartUploadDraft: handleUnaryCall<
        FinishMultipartUploadDraftRequest,
        FinishMultipartUploadDraftResponse
    >;
    /** Returns a list of dataset types */
    listTypes: handleUnaryCall<ListTypesRequest, ListTypesResponse>;
    /** Returns a preview of dataset types */
    getPreview: handleUnaryCall<GetDatasetPreviewRequest, GetDatasetPreviewResponse>;
    listOperationsIds: handleUnaryCall<ListOperationsIdsRequest, ListOperationsIdsResponse>;
}

export interface DatasetServiceClient extends Client {
    /** Returns dataset information by dataset id. */
    describe(
        request: DescribeDatasetRequest,
        callback: (error: ServiceError | null, response: DescribeDatasetResponse) => void,
    ): ClientUnaryCall;
    describe(
        request: DescribeDatasetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: DescribeDatasetResponse) => void,
    ): ClientUnaryCall;
    describe(
        request: DescribeDatasetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: DescribeDatasetResponse) => void,
    ): ClientUnaryCall;
    /** Starts dataset validation process. */
    validate(
        request: ValidateDatasetRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    validate(
        request: ValidateDatasetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    validate(
        request: ValidateDatasetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Creates dataset. */
    create(
        request: CreateDatasetRequest,
        callback: (error: ServiceError | null, response: CreateDatasetResponse) => void,
    ): ClientUnaryCall;
    create(
        request: CreateDatasetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: CreateDatasetResponse) => void,
    ): ClientUnaryCall;
    create(
        request: CreateDatasetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: CreateDatasetResponse) => void,
    ): ClientUnaryCall;
    /** Updates dataset. */
    update(
        request: UpdateDatasetRequest,
        callback: (error: ServiceError | null, response: UpdateDatasetResponse) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateDatasetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: UpdateDatasetResponse) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateDatasetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: UpdateDatasetResponse) => void,
    ): ClientUnaryCall;
    /** Deletes dataset. */
    delete(
        request: DeleteDatasetRequest,
        callback: (error: ServiceError | null, response: DeleteDatasetResponse) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteDatasetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: DeleteDatasetResponse) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteDatasetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: DeleteDatasetResponse) => void,
    ): ClientUnaryCall;
    /** Lists datasets in specified folder. */
    list(
        request: ListDatasetsRequest,
        callback: (error: ServiceError | null, response: ListDatasetsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListDatasetsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListDatasetsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListDatasetsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListDatasetsResponse) => void,
    ): ClientUnaryCall;
    /**
     * Deprecated. Use ListUploadSchemas.
     *
     * @deprecated
     */
    listUploadFormats(
        request: ListUploadFormatsRequest,
        callback: (error: ServiceError | null, response: ListUploadFormatsResponse) => void,
    ): ClientUnaryCall;
    listUploadFormats(
        request: ListUploadFormatsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListUploadFormatsResponse) => void,
    ): ClientUnaryCall;
    listUploadFormats(
        request: ListUploadFormatsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListUploadFormatsResponse) => void,
    ): ClientUnaryCall;
    /** Lists supported dataset upload formats types and schemas for the specified dataset task type. */
    listUploadSchemas(
        request: ListUploadSchemasRequest,
        callback: (error: ServiceError | null, response: ListUploadSchemasResponse) => void,
    ): ClientUnaryCall;
    listUploadSchemas(
        request: ListUploadSchemasRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListUploadSchemasResponse) => void,
    ): ClientUnaryCall;
    listUploadSchemas(
        request: ListUploadSchemasRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListUploadSchemasResponse) => void,
    ): ClientUnaryCall;
    /**
     * Returns an S3 presigned URL for dataset upload.
     * This method only applicable if the dataset size does not exceed 5GB.
     */
    getUploadDraftUrl(
        request: GetUploadDraftUrlRequest,
        callback: (error: ServiceError | null, response: GetUploadDraftUrlResponse) => void,
    ): ClientUnaryCall;
    getUploadDraftUrl(
        request: GetUploadDraftUrlRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetUploadDraftUrlResponse) => void,
    ): ClientUnaryCall;
    getUploadDraftUrl(
        request: GetUploadDraftUrlRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetUploadDraftUrlResponse) => void,
    ): ClientUnaryCall;
    /** Get urls to download dataset */
    getDownloadUrls(
        request: GetDownloadUrlsRequest,
        callback: (error: ServiceError | null, response: GetDownloadUrlsResponse) => void,
    ): ClientUnaryCall;
    getDownloadUrls(
        request: GetDownloadUrlsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetDownloadUrlsResponse) => void,
    ): ClientUnaryCall;
    getDownloadUrls(
        request: GetDownloadUrlsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetDownloadUrlsResponse) => void,
    ): ClientUnaryCall;
    /** Returns a list of S3 presigned URLs for multipart upload of dataset. */
    startMultipartUploadDraft(
        request: StartMultipartUploadDraftRequest,
        callback: (error: ServiceError | null, response: StartMultipartUploadDraftResponse) => void,
    ): ClientUnaryCall;
    startMultipartUploadDraft(
        request: StartMultipartUploadDraftRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: StartMultipartUploadDraftResponse) => void,
    ): ClientUnaryCall;
    startMultipartUploadDraft(
        request: StartMultipartUploadDraftRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: StartMultipartUploadDraftResponse) => void,
    ): ClientUnaryCall;
    /** Finishes multipart upload of the dataset. */
    finishMultipartUploadDraft(
        request: FinishMultipartUploadDraftRequest,
        callback: (
            error: ServiceError | null,
            response: FinishMultipartUploadDraftResponse,
        ) => void,
    ): ClientUnaryCall;
    finishMultipartUploadDraft(
        request: FinishMultipartUploadDraftRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: FinishMultipartUploadDraftResponse,
        ) => void,
    ): ClientUnaryCall;
    finishMultipartUploadDraft(
        request: FinishMultipartUploadDraftRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: FinishMultipartUploadDraftResponse,
        ) => void,
    ): ClientUnaryCall;
    /** Returns a list of dataset types */
    listTypes(
        request: ListTypesRequest,
        callback: (error: ServiceError | null, response: ListTypesResponse) => void,
    ): ClientUnaryCall;
    listTypes(
        request: ListTypesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListTypesResponse) => void,
    ): ClientUnaryCall;
    listTypes(
        request: ListTypesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListTypesResponse) => void,
    ): ClientUnaryCall;
    /** Returns a preview of dataset types */
    getPreview(
        request: GetDatasetPreviewRequest,
        callback: (error: ServiceError | null, response: GetDatasetPreviewResponse) => void,
    ): ClientUnaryCall;
    getPreview(
        request: GetDatasetPreviewRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetDatasetPreviewResponse) => void,
    ): ClientUnaryCall;
    getPreview(
        request: GetDatasetPreviewRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetDatasetPreviewResponse) => void,
    ): ClientUnaryCall;
    listOperationsIds(
        request: ListOperationsIdsRequest,
        callback: (error: ServiceError | null, response: ListOperationsIdsResponse) => void,
    ): ClientUnaryCall;
    listOperationsIds(
        request: ListOperationsIdsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListOperationsIdsResponse) => void,
    ): ClientUnaryCall;
    listOperationsIds(
        request: ListOperationsIdsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListOperationsIdsResponse) => void,
    ): ClientUnaryCall;
}

export const DatasetServiceClient = makeGenericClientConstructor(
    DatasetServiceService,
    'yandex.cloud.ai.dataset.v1.DatasetService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): DatasetServiceClient;
    service: typeof DatasetServiceService;
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
