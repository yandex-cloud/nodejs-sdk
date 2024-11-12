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
import { FederatedCredential } from '../../../../../yandex/cloud/iam/v1/workload/federated_credential';
import { Operation } from '../../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.iam.v1.workload';

export interface GetFederatedCredentialRequest {
    $type: 'yandex.cloud.iam.v1.workload.GetFederatedCredentialRequest';
    /**
     * ID of the federated credential to return.
     * To get the federated credential ID, make a [FederatedCredentialService.List] request.
     */
    federatedCredentialId: string;
}

export interface ListFederatedCredentialsRequest {
    $type: 'yandex.cloud.iam.v1.workload.ListFederatedCredentialsRequest';
    /**
     * ID of the service account to list federated credentials for.
     * To get the the service account ID make a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     */
    serviceAccountId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListFederatedCredentialsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListFederatedCredentialsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}

export interface ListFederatedCredentialsResponse {
    $type: 'yandex.cloud.iam.v1.workload.ListFederatedCredentialsResponse';
    /** List of federated credentials. */
    federatedCredentials: FederatedCredential[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListFederatedCredentialsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListFederatedCredentialsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateFederatedCredentialRequest {
    $type: 'yandex.cloud.iam.v1.workload.CreateFederatedCredentialRequest';
    /**
     * ID of the service account to create a federated credential for.
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     */
    serviceAccountId: string;
    /** ID of the workload identity federation that is used for authentication. */
    federationId: string;
    /** Id of the external subject. */
    externalSubjectId: string;
}

export interface CreateFederatedCredentialMetadata {
    $type: 'yandex.cloud.iam.v1.workload.CreateFederatedCredentialMetadata';
    /** ID of the federated credential that is being created. */
    federatedCredentialId: string;
}

export interface DeleteFederatedCredentialRequest {
    $type: 'yandex.cloud.iam.v1.workload.DeleteFederatedCredentialRequest';
    /**
     * ID of the federated credential key to delete.
     * To get the federated credential ID, use a [FederatedCredentialService.List] request.
     */
    federatedCredentialId: string;
}

export interface DeleteFederatedCredentialMetadata {
    $type: 'yandex.cloud.iam.v1.workload.DeleteFederatedCredentialMetadata';
    /** ID of the federated credential that is being deleted. */
    federatedCredentialId: string;
}

const baseGetFederatedCredentialRequest: object = {
    $type: 'yandex.cloud.iam.v1.workload.GetFederatedCredentialRequest',
    federatedCredentialId: '',
};

export const GetFederatedCredentialRequest = {
    $type: 'yandex.cloud.iam.v1.workload.GetFederatedCredentialRequest' as const,

    encode(
        message: GetFederatedCredentialRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federatedCredentialId !== '') {
            writer.uint32(10).string(message.federatedCredentialId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetFederatedCredentialRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetFederatedCredentialRequest } as GetFederatedCredentialRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federatedCredentialId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetFederatedCredentialRequest {
        const message = { ...baseGetFederatedCredentialRequest } as GetFederatedCredentialRequest;
        message.federatedCredentialId =
            object.federatedCredentialId !== undefined && object.federatedCredentialId !== null
                ? String(object.federatedCredentialId)
                : '';
        return message;
    },

    toJSON(message: GetFederatedCredentialRequest): unknown {
        const obj: any = {};
        message.federatedCredentialId !== undefined &&
            (obj.federatedCredentialId = message.federatedCredentialId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetFederatedCredentialRequest>, I>>(
        object: I,
    ): GetFederatedCredentialRequest {
        const message = { ...baseGetFederatedCredentialRequest } as GetFederatedCredentialRequest;
        message.federatedCredentialId = object.federatedCredentialId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetFederatedCredentialRequest.$type, GetFederatedCredentialRequest);

const baseListFederatedCredentialsRequest: object = {
    $type: 'yandex.cloud.iam.v1.workload.ListFederatedCredentialsRequest',
    serviceAccountId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListFederatedCredentialsRequest = {
    $type: 'yandex.cloud.iam.v1.workload.ListFederatedCredentialsRequest' as const,

    encode(
        message: ListFederatedCredentialsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListFederatedCredentialsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListFederatedCredentialsRequest,
        } as ListFederatedCredentialsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
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

    fromJSON(object: any): ListFederatedCredentialsRequest {
        const message = {
            ...baseListFederatedCredentialsRequest,
        } as ListFederatedCredentialsRequest;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListFederatedCredentialsRequest): unknown {
        const obj: any = {};
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListFederatedCredentialsRequest>, I>>(
        object: I,
    ): ListFederatedCredentialsRequest {
        const message = {
            ...baseListFederatedCredentialsRequest,
        } as ListFederatedCredentialsRequest;
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListFederatedCredentialsRequest.$type, ListFederatedCredentialsRequest);

const baseListFederatedCredentialsResponse: object = {
    $type: 'yandex.cloud.iam.v1.workload.ListFederatedCredentialsResponse',
    nextPageToken: '',
};

export const ListFederatedCredentialsResponse = {
    $type: 'yandex.cloud.iam.v1.workload.ListFederatedCredentialsResponse' as const,

    encode(
        message: ListFederatedCredentialsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.federatedCredentials) {
            FederatedCredential.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListFederatedCredentialsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListFederatedCredentialsResponse,
        } as ListFederatedCredentialsResponse;
        message.federatedCredentials = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federatedCredentials.push(
                        FederatedCredential.decode(reader, reader.uint32()),
                    );
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

    fromJSON(object: any): ListFederatedCredentialsResponse {
        const message = {
            ...baseListFederatedCredentialsResponse,
        } as ListFederatedCredentialsResponse;
        message.federatedCredentials = (object.federatedCredentials ?? []).map((e: any) =>
            FederatedCredential.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListFederatedCredentialsResponse): unknown {
        const obj: any = {};
        if (message.federatedCredentials) {
            obj.federatedCredentials = message.federatedCredentials.map((e) =>
                e ? FederatedCredential.toJSON(e) : undefined,
            );
        } else {
            obj.federatedCredentials = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListFederatedCredentialsResponse>, I>>(
        object: I,
    ): ListFederatedCredentialsResponse {
        const message = {
            ...baseListFederatedCredentialsResponse,
        } as ListFederatedCredentialsResponse;
        message.federatedCredentials =
            object.federatedCredentials?.map((e) => FederatedCredential.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListFederatedCredentialsResponse.$type, ListFederatedCredentialsResponse);

const baseCreateFederatedCredentialRequest: object = {
    $type: 'yandex.cloud.iam.v1.workload.CreateFederatedCredentialRequest',
    serviceAccountId: '',
    federationId: '',
    externalSubjectId: '',
};

export const CreateFederatedCredentialRequest = {
    $type: 'yandex.cloud.iam.v1.workload.CreateFederatedCredentialRequest' as const,

    encode(
        message: CreateFederatedCredentialRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
        }
        if (message.federationId !== '') {
            writer.uint32(18).string(message.federationId);
        }
        if (message.externalSubjectId !== '') {
            writer.uint32(26).string(message.externalSubjectId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateFederatedCredentialRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateFederatedCredentialRequest,
        } as CreateFederatedCredentialRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                case 2:
                    message.federationId = reader.string();
                    break;
                case 3:
                    message.externalSubjectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateFederatedCredentialRequest {
        const message = {
            ...baseCreateFederatedCredentialRequest,
        } as CreateFederatedCredentialRequest;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        message.externalSubjectId =
            object.externalSubjectId !== undefined && object.externalSubjectId !== null
                ? String(object.externalSubjectId)
                : '';
        return message;
    },

    toJSON(message: CreateFederatedCredentialRequest): unknown {
        const obj: any = {};
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.federationId !== undefined && (obj.federationId = message.federationId);
        message.externalSubjectId !== undefined &&
            (obj.externalSubjectId = message.externalSubjectId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateFederatedCredentialRequest>, I>>(
        object: I,
    ): CreateFederatedCredentialRequest {
        const message = {
            ...baseCreateFederatedCredentialRequest,
        } as CreateFederatedCredentialRequest;
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.federationId = object.federationId ?? '';
        message.externalSubjectId = object.externalSubjectId ?? '';
        return message;
    },
};

messageTypeRegistry.set(CreateFederatedCredentialRequest.$type, CreateFederatedCredentialRequest);

const baseCreateFederatedCredentialMetadata: object = {
    $type: 'yandex.cloud.iam.v1.workload.CreateFederatedCredentialMetadata',
    federatedCredentialId: '',
};

export const CreateFederatedCredentialMetadata = {
    $type: 'yandex.cloud.iam.v1.workload.CreateFederatedCredentialMetadata' as const,

    encode(
        message: CreateFederatedCredentialMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federatedCredentialId !== '') {
            writer.uint32(10).string(message.federatedCredentialId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateFederatedCredentialMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateFederatedCredentialMetadata,
        } as CreateFederatedCredentialMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federatedCredentialId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateFederatedCredentialMetadata {
        const message = {
            ...baseCreateFederatedCredentialMetadata,
        } as CreateFederatedCredentialMetadata;
        message.federatedCredentialId =
            object.federatedCredentialId !== undefined && object.federatedCredentialId !== null
                ? String(object.federatedCredentialId)
                : '';
        return message;
    },

    toJSON(message: CreateFederatedCredentialMetadata): unknown {
        const obj: any = {};
        message.federatedCredentialId !== undefined &&
            (obj.federatedCredentialId = message.federatedCredentialId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateFederatedCredentialMetadata>, I>>(
        object: I,
    ): CreateFederatedCredentialMetadata {
        const message = {
            ...baseCreateFederatedCredentialMetadata,
        } as CreateFederatedCredentialMetadata;
        message.federatedCredentialId = object.federatedCredentialId ?? '';
        return message;
    },
};

messageTypeRegistry.set(CreateFederatedCredentialMetadata.$type, CreateFederatedCredentialMetadata);

const baseDeleteFederatedCredentialRequest: object = {
    $type: 'yandex.cloud.iam.v1.workload.DeleteFederatedCredentialRequest',
    federatedCredentialId: '',
};

export const DeleteFederatedCredentialRequest = {
    $type: 'yandex.cloud.iam.v1.workload.DeleteFederatedCredentialRequest' as const,

    encode(
        message: DeleteFederatedCredentialRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federatedCredentialId !== '') {
            writer.uint32(10).string(message.federatedCredentialId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFederatedCredentialRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteFederatedCredentialRequest,
        } as DeleteFederatedCredentialRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federatedCredentialId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteFederatedCredentialRequest {
        const message = {
            ...baseDeleteFederatedCredentialRequest,
        } as DeleteFederatedCredentialRequest;
        message.federatedCredentialId =
            object.federatedCredentialId !== undefined && object.federatedCredentialId !== null
                ? String(object.federatedCredentialId)
                : '';
        return message;
    },

    toJSON(message: DeleteFederatedCredentialRequest): unknown {
        const obj: any = {};
        message.federatedCredentialId !== undefined &&
            (obj.federatedCredentialId = message.federatedCredentialId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteFederatedCredentialRequest>, I>>(
        object: I,
    ): DeleteFederatedCredentialRequest {
        const message = {
            ...baseDeleteFederatedCredentialRequest,
        } as DeleteFederatedCredentialRequest;
        message.federatedCredentialId = object.federatedCredentialId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteFederatedCredentialRequest.$type, DeleteFederatedCredentialRequest);

const baseDeleteFederatedCredentialMetadata: object = {
    $type: 'yandex.cloud.iam.v1.workload.DeleteFederatedCredentialMetadata',
    federatedCredentialId: '',
};

export const DeleteFederatedCredentialMetadata = {
    $type: 'yandex.cloud.iam.v1.workload.DeleteFederatedCredentialMetadata' as const,

    encode(
        message: DeleteFederatedCredentialMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federatedCredentialId !== '') {
            writer.uint32(10).string(message.federatedCredentialId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFederatedCredentialMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteFederatedCredentialMetadata,
        } as DeleteFederatedCredentialMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federatedCredentialId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteFederatedCredentialMetadata {
        const message = {
            ...baseDeleteFederatedCredentialMetadata,
        } as DeleteFederatedCredentialMetadata;
        message.federatedCredentialId =
            object.federatedCredentialId !== undefined && object.federatedCredentialId !== null
                ? String(object.federatedCredentialId)
                : '';
        return message;
    },

    toJSON(message: DeleteFederatedCredentialMetadata): unknown {
        const obj: any = {};
        message.federatedCredentialId !== undefined &&
            (obj.federatedCredentialId = message.federatedCredentialId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteFederatedCredentialMetadata>, I>>(
        object: I,
    ): DeleteFederatedCredentialMetadata {
        const message = {
            ...baseDeleteFederatedCredentialMetadata,
        } as DeleteFederatedCredentialMetadata;
        message.federatedCredentialId = object.federatedCredentialId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteFederatedCredentialMetadata.$type, DeleteFederatedCredentialMetadata);

/** A set of methods for managing federated credentials. */
export const FederatedCredentialServiceService = {
    /**
     * Returns the specified federated credential.
     *
     * To get the list of available federated credentials, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.iam.v1.workload.FederatedCredentialService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetFederatedCredentialRequest) =>
            Buffer.from(GetFederatedCredentialRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetFederatedCredentialRequest.decode(value),
        responseSerialize: (value: FederatedCredential) =>
            Buffer.from(FederatedCredential.encode(value).finish()),
        responseDeserialize: (value: Buffer) => FederatedCredential.decode(value),
    },
    /** Retrieves the list of federated credentials for the specified service account. */
    list: {
        path: '/yandex.cloud.iam.v1.workload.FederatedCredentialService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListFederatedCredentialsRequest) =>
            Buffer.from(ListFederatedCredentialsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListFederatedCredentialsRequest.decode(value),
        responseSerialize: (value: ListFederatedCredentialsResponse) =>
            Buffer.from(ListFederatedCredentialsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListFederatedCredentialsResponse.decode(value),
    },
    /** Creates a federated credential for the specified service account. */
    create: {
        path: '/yandex.cloud.iam.v1.workload.FederatedCredentialService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateFederatedCredentialRequest) =>
            Buffer.from(CreateFederatedCredentialRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateFederatedCredentialRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified federated credential. */
    delete: {
        path: '/yandex.cloud.iam.v1.workload.FederatedCredentialService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteFederatedCredentialRequest) =>
            Buffer.from(DeleteFederatedCredentialRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteFederatedCredentialRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface FederatedCredentialServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified federated credential.
     *
     * To get the list of available federated credentials, make a [List] request.
     */
    get: handleUnaryCall<GetFederatedCredentialRequest, FederatedCredential>;
    /** Retrieves the list of federated credentials for the specified service account. */
    list: handleUnaryCall<ListFederatedCredentialsRequest, ListFederatedCredentialsResponse>;
    /** Creates a federated credential for the specified service account. */
    create: handleUnaryCall<CreateFederatedCredentialRequest, Operation>;
    /** Deletes the specified federated credential. */
    delete: handleUnaryCall<DeleteFederatedCredentialRequest, Operation>;
}

export interface FederatedCredentialServiceClient extends Client {
    /**
     * Returns the specified federated credential.
     *
     * To get the list of available federated credentials, make a [List] request.
     */
    get(
        request: GetFederatedCredentialRequest,
        callback: (error: ServiceError | null, response: FederatedCredential) => void,
    ): ClientUnaryCall;
    get(
        request: GetFederatedCredentialRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: FederatedCredential) => void,
    ): ClientUnaryCall;
    get(
        request: GetFederatedCredentialRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: FederatedCredential) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of federated credentials for the specified service account. */
    list(
        request: ListFederatedCredentialsRequest,
        callback: (error: ServiceError | null, response: ListFederatedCredentialsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListFederatedCredentialsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListFederatedCredentialsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListFederatedCredentialsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListFederatedCredentialsResponse) => void,
    ): ClientUnaryCall;
    /** Creates a federated credential for the specified service account. */
    create(
        request: CreateFederatedCredentialRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateFederatedCredentialRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateFederatedCredentialRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified federated credential. */
    delete(
        request: DeleteFederatedCredentialRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteFederatedCredentialRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteFederatedCredentialRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const FederatedCredentialServiceClient = makeGenericClientConstructor(
    FederatedCredentialServiceService,
    'yandex.cloud.iam.v1.workload.FederatedCredentialService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): FederatedCredentialServiceClient;
    service: typeof FederatedCredentialServiceService;
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
