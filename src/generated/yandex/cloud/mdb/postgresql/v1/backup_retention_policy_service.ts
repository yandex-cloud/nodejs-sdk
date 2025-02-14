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
    CronTab,
    BackupRetentionPolicy,
} from '../../../../../yandex/cloud/mdb/postgresql/v1/backup_retention_policy';

export const protobufPackage = 'yandex.cloud.mdb.postgresql.v1';

export interface ListBackupRetentionPoliciesRequest {
    $type: 'yandex.cloud.mdb.postgresql.v1.ListBackupRetentionPoliciesRequest';
    /**
     * ID of the PostgreSQL cluster.
     * To get the PostgreSQL cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListBackupRetentionPoliciesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListBackupRetentionPoliciesResponse.next_page_token] returned by the previous list request.
     */
    pageToken: string;
}

export interface ListBackupRetentionPoliciesResponse {
    $type: 'yandex.cloud.mdb.postgresql.v1.ListBackupRetentionPoliciesResponse';
    /** List of [BackupRetentionPolicy] associated with the cluster. */
    policies: BackupRetentionPolicy[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListBackupRetentionPoliciesRequest.page_size], use the [next_page_token] as the value
     * for the [ListBackupRetentionPoliciesRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateBackupRetentionPolicyRequest {
    $type: 'yandex.cloud.mdb.postgresql.v1.CreateBackupRetentionPolicyRequest';
    /**
     * ID of the PostgreSQL cluster.
     * To get the PostgreSQL cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /** CronTab schedule. */
    cron?: CronTab;
    /** Retention duration. */
    retainForDays: number;
    /** Policy description. */
    description: string;
    /** Required. Policy name. */
    policyName: string;
}

export interface CreateBackupRetentionPolicyResponse {
    $type: 'yandex.cloud.mdb.postgresql.v1.CreateBackupRetentionPolicyResponse';
    /** Newly created [BackupRetentionPolicy]. */
    policy?: BackupRetentionPolicy;
}

export interface DeleteBackupRetentionPolicyRequest {
    $type: 'yandex.cloud.mdb.postgresql.v1.DeleteBackupRetentionPolicyRequest';
    /** Unique identifier for the [BackupRetentionPolicy]. */
    policyId: string;
    /**
     * ID of the PostgreSQL cluster.
     * To get the PostgreSQL cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
}

export interface DeleteBackupRetentionPolicyResponse {
    $type: 'yandex.cloud.mdb.postgresql.v1.DeleteBackupRetentionPolicyResponse';
}

const baseListBackupRetentionPoliciesRequest: object = {
    $type: 'yandex.cloud.mdb.postgresql.v1.ListBackupRetentionPoliciesRequest',
    clusterId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListBackupRetentionPoliciesRequest = {
    $type: 'yandex.cloud.mdb.postgresql.v1.ListBackupRetentionPoliciesRequest' as const,

    encode(
        message: ListBackupRetentionPoliciesRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListBackupRetentionPoliciesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListBackupRetentionPoliciesRequest,
        } as ListBackupRetentionPoliciesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
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

    fromJSON(object: any): ListBackupRetentionPoliciesRequest {
        const message = {
            ...baseListBackupRetentionPoliciesRequest,
        } as ListBackupRetentionPoliciesRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListBackupRetentionPoliciesRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListBackupRetentionPoliciesRequest>, I>>(
        object: I,
    ): ListBackupRetentionPoliciesRequest {
        const message = {
            ...baseListBackupRetentionPoliciesRequest,
        } as ListBackupRetentionPoliciesRequest;
        message.clusterId = object.clusterId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(
    ListBackupRetentionPoliciesRequest.$type,
    ListBackupRetentionPoliciesRequest,
);

const baseListBackupRetentionPoliciesResponse: object = {
    $type: 'yandex.cloud.mdb.postgresql.v1.ListBackupRetentionPoliciesResponse',
    nextPageToken: '',
};

export const ListBackupRetentionPoliciesResponse = {
    $type: 'yandex.cloud.mdb.postgresql.v1.ListBackupRetentionPoliciesResponse' as const,

    encode(
        message: ListBackupRetentionPoliciesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.policies) {
            BackupRetentionPolicy.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListBackupRetentionPoliciesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListBackupRetentionPoliciesResponse,
        } as ListBackupRetentionPoliciesResponse;
        message.policies = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policies.push(BackupRetentionPolicy.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListBackupRetentionPoliciesResponse {
        const message = {
            ...baseListBackupRetentionPoliciesResponse,
        } as ListBackupRetentionPoliciesResponse;
        message.policies = (object.policies ?? []).map((e: any) =>
            BackupRetentionPolicy.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListBackupRetentionPoliciesResponse): unknown {
        const obj: any = {};
        if (message.policies) {
            obj.policies = message.policies.map((e) =>
                e ? BackupRetentionPolicy.toJSON(e) : undefined,
            );
        } else {
            obj.policies = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListBackupRetentionPoliciesResponse>, I>>(
        object: I,
    ): ListBackupRetentionPoliciesResponse {
        const message = {
            ...baseListBackupRetentionPoliciesResponse,
        } as ListBackupRetentionPoliciesResponse;
        message.policies = object.policies?.map((e) => BackupRetentionPolicy.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(
    ListBackupRetentionPoliciesResponse.$type,
    ListBackupRetentionPoliciesResponse,
);

const baseCreateBackupRetentionPolicyRequest: object = {
    $type: 'yandex.cloud.mdb.postgresql.v1.CreateBackupRetentionPolicyRequest',
    clusterId: '',
    retainForDays: 0,
    description: '',
    policyName: '',
};

export const CreateBackupRetentionPolicyRequest = {
    $type: 'yandex.cloud.mdb.postgresql.v1.CreateBackupRetentionPolicyRequest' as const,

    encode(
        message: CreateBackupRetentionPolicyRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.cron !== undefined) {
            CronTab.encode(message.cron, writer.uint32(18).fork()).ldelim();
        }
        if (message.retainForDays !== 0) {
            writer.uint32(24).int64(message.retainForDays);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.policyName !== '') {
            writer.uint32(42).string(message.policyName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateBackupRetentionPolicyRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateBackupRetentionPolicyRequest,
        } as CreateBackupRetentionPolicyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.cron = CronTab.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.retainForDays = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.policyName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateBackupRetentionPolicyRequest {
        const message = {
            ...baseCreateBackupRetentionPolicyRequest,
        } as CreateBackupRetentionPolicyRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.cron =
            object.cron !== undefined && object.cron !== null
                ? CronTab.fromJSON(object.cron)
                : undefined;
        message.retainForDays =
            object.retainForDays !== undefined && object.retainForDays !== null
                ? Number(object.retainForDays)
                : 0;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.policyName =
            object.policyName !== undefined && object.policyName !== null
                ? String(object.policyName)
                : '';
        return message;
    },

    toJSON(message: CreateBackupRetentionPolicyRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.cron !== undefined &&
            (obj.cron = message.cron ? CronTab.toJSON(message.cron) : undefined);
        message.retainForDays !== undefined &&
            (obj.retainForDays = Math.round(message.retainForDays));
        message.description !== undefined && (obj.description = message.description);
        message.policyName !== undefined && (obj.policyName = message.policyName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateBackupRetentionPolicyRequest>, I>>(
        object: I,
    ): CreateBackupRetentionPolicyRequest {
        const message = {
            ...baseCreateBackupRetentionPolicyRequest,
        } as CreateBackupRetentionPolicyRequest;
        message.clusterId = object.clusterId ?? '';
        message.cron =
            object.cron !== undefined && object.cron !== null
                ? CronTab.fromPartial(object.cron)
                : undefined;
        message.retainForDays = object.retainForDays ?? 0;
        message.description = object.description ?? '';
        message.policyName = object.policyName ?? '';
        return message;
    },
};

messageTypeRegistry.set(
    CreateBackupRetentionPolicyRequest.$type,
    CreateBackupRetentionPolicyRequest,
);

const baseCreateBackupRetentionPolicyResponse: object = {
    $type: 'yandex.cloud.mdb.postgresql.v1.CreateBackupRetentionPolicyResponse',
};

export const CreateBackupRetentionPolicyResponse = {
    $type: 'yandex.cloud.mdb.postgresql.v1.CreateBackupRetentionPolicyResponse' as const,

    encode(
        message: CreateBackupRetentionPolicyResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.policy !== undefined) {
            BackupRetentionPolicy.encode(message.policy, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateBackupRetentionPolicyResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateBackupRetentionPolicyResponse,
        } as CreateBackupRetentionPolicyResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policy = BackupRetentionPolicy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateBackupRetentionPolicyResponse {
        const message = {
            ...baseCreateBackupRetentionPolicyResponse,
        } as CreateBackupRetentionPolicyResponse;
        message.policy =
            object.policy !== undefined && object.policy !== null
                ? BackupRetentionPolicy.fromJSON(object.policy)
                : undefined;
        return message;
    },

    toJSON(message: CreateBackupRetentionPolicyResponse): unknown {
        const obj: any = {};
        message.policy !== undefined &&
            (obj.policy = message.policy
                ? BackupRetentionPolicy.toJSON(message.policy)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateBackupRetentionPolicyResponse>, I>>(
        object: I,
    ): CreateBackupRetentionPolicyResponse {
        const message = {
            ...baseCreateBackupRetentionPolicyResponse,
        } as CreateBackupRetentionPolicyResponse;
        message.policy =
            object.policy !== undefined && object.policy !== null
                ? BackupRetentionPolicy.fromPartial(object.policy)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(
    CreateBackupRetentionPolicyResponse.$type,
    CreateBackupRetentionPolicyResponse,
);

const baseDeleteBackupRetentionPolicyRequest: object = {
    $type: 'yandex.cloud.mdb.postgresql.v1.DeleteBackupRetentionPolicyRequest',
    policyId: '',
    clusterId: '',
};

export const DeleteBackupRetentionPolicyRequest = {
    $type: 'yandex.cloud.mdb.postgresql.v1.DeleteBackupRetentionPolicyRequest' as const,

    encode(
        message: DeleteBackupRetentionPolicyRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.policyId !== '') {
            writer.uint32(10).string(message.policyId);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBackupRetentionPolicyRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteBackupRetentionPolicyRequest,
        } as DeleteBackupRetentionPolicyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteBackupRetentionPolicyRequest {
        const message = {
            ...baseDeleteBackupRetentionPolicyRequest,
        } as DeleteBackupRetentionPolicyRequest;
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : '';
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        return message;
    },

    toJSON(message: DeleteBackupRetentionPolicyRequest): unknown {
        const obj: any = {};
        message.policyId !== undefined && (obj.policyId = message.policyId);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteBackupRetentionPolicyRequest>, I>>(
        object: I,
    ): DeleteBackupRetentionPolicyRequest {
        const message = {
            ...baseDeleteBackupRetentionPolicyRequest,
        } as DeleteBackupRetentionPolicyRequest;
        message.policyId = object.policyId ?? '';
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

messageTypeRegistry.set(
    DeleteBackupRetentionPolicyRequest.$type,
    DeleteBackupRetentionPolicyRequest,
);

const baseDeleteBackupRetentionPolicyResponse: object = {
    $type: 'yandex.cloud.mdb.postgresql.v1.DeleteBackupRetentionPolicyResponse',
};

export const DeleteBackupRetentionPolicyResponse = {
    $type: 'yandex.cloud.mdb.postgresql.v1.DeleteBackupRetentionPolicyResponse' as const,

    encode(
        _: DeleteBackupRetentionPolicyResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBackupRetentionPolicyResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteBackupRetentionPolicyResponse,
        } as DeleteBackupRetentionPolicyResponse;
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

    fromJSON(_: any): DeleteBackupRetentionPolicyResponse {
        const message = {
            ...baseDeleteBackupRetentionPolicyResponse,
        } as DeleteBackupRetentionPolicyResponse;
        return message;
    },

    toJSON(_: DeleteBackupRetentionPolicyResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteBackupRetentionPolicyResponse>, I>>(
        _: I,
    ): DeleteBackupRetentionPolicyResponse {
        const message = {
            ...baseDeleteBackupRetentionPolicyResponse,
        } as DeleteBackupRetentionPolicyResponse;
        return message;
    },
};

messageTypeRegistry.set(
    DeleteBackupRetentionPolicyResponse.$type,
    DeleteBackupRetentionPolicyResponse,
);

/** A set of methods for managing PostgreSQL Cluster backup retention policies. */
export const BackupRetentionPolicyServiceService = {
    /** List all retention policies. */
    list: {
        path: '/yandex.cloud.mdb.postgresql.v1.BackupRetentionPolicyService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListBackupRetentionPoliciesRequest) =>
            Buffer.from(ListBackupRetentionPoliciesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListBackupRetentionPoliciesRequest.decode(value),
        responseSerialize: (value: ListBackupRetentionPoliciesResponse) =>
            Buffer.from(ListBackupRetentionPoliciesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListBackupRetentionPoliciesResponse.decode(value),
    },
    /** Add a new retention policy. */
    create: {
        path: '/yandex.cloud.mdb.postgresql.v1.BackupRetentionPolicyService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateBackupRetentionPolicyRequest) =>
            Buffer.from(CreateBackupRetentionPolicyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateBackupRetentionPolicyRequest.decode(value),
        responseSerialize: (value: CreateBackupRetentionPolicyResponse) =>
            Buffer.from(CreateBackupRetentionPolicyResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => CreateBackupRetentionPolicyResponse.decode(value),
    },
    /** Delete retention policy. */
    delete: {
        path: '/yandex.cloud.mdb.postgresql.v1.BackupRetentionPolicyService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteBackupRetentionPolicyRequest) =>
            Buffer.from(DeleteBackupRetentionPolicyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteBackupRetentionPolicyRequest.decode(value),
        responseSerialize: (value: DeleteBackupRetentionPolicyResponse) =>
            Buffer.from(DeleteBackupRetentionPolicyResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => DeleteBackupRetentionPolicyResponse.decode(value),
    },
} as const;

export interface BackupRetentionPolicyServiceServer extends UntypedServiceImplementation {
    /** List all retention policies. */
    list: handleUnaryCall<ListBackupRetentionPoliciesRequest, ListBackupRetentionPoliciesResponse>;
    /** Add a new retention policy. */
    create: handleUnaryCall<
        CreateBackupRetentionPolicyRequest,
        CreateBackupRetentionPolicyResponse
    >;
    /** Delete retention policy. */
    delete: handleUnaryCall<
        DeleteBackupRetentionPolicyRequest,
        DeleteBackupRetentionPolicyResponse
    >;
}

export interface BackupRetentionPolicyServiceClient extends Client {
    /** List all retention policies. */
    list(
        request: ListBackupRetentionPoliciesRequest,
        callback: (
            error: ServiceError | null,
            response: ListBackupRetentionPoliciesResponse,
        ) => void,
    ): ClientUnaryCall;
    list(
        request: ListBackupRetentionPoliciesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListBackupRetentionPoliciesResponse,
        ) => void,
    ): ClientUnaryCall;
    list(
        request: ListBackupRetentionPoliciesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListBackupRetentionPoliciesResponse,
        ) => void,
    ): ClientUnaryCall;
    /** Add a new retention policy. */
    create(
        request: CreateBackupRetentionPolicyRequest,
        callback: (
            error: ServiceError | null,
            response: CreateBackupRetentionPolicyResponse,
        ) => void,
    ): ClientUnaryCall;
    create(
        request: CreateBackupRetentionPolicyRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: CreateBackupRetentionPolicyResponse,
        ) => void,
    ): ClientUnaryCall;
    create(
        request: CreateBackupRetentionPolicyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: CreateBackupRetentionPolicyResponse,
        ) => void,
    ): ClientUnaryCall;
    /** Delete retention policy. */
    delete(
        request: DeleteBackupRetentionPolicyRequest,
        callback: (
            error: ServiceError | null,
            response: DeleteBackupRetentionPolicyResponse,
        ) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteBackupRetentionPolicyRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: DeleteBackupRetentionPolicyResponse,
        ) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteBackupRetentionPolicyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: DeleteBackupRetentionPolicyResponse,
        ) => void,
    ): ClientUnaryCall;
}

export const BackupRetentionPolicyServiceClient = makeGenericClientConstructor(
    BackupRetentionPolicyServiceService,
    'yandex.cloud.mdb.postgresql.v1.BackupRetentionPolicyService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): BackupRetentionPolicyServiceClient;
    service: typeof BackupRetentionPolicyServiceService;
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
