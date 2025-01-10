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
import { HBARule } from '../../../../../yandex/cloud/mdb/greenplum/v1/hba_rule';
import { Operation } from '../../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.mdb.greenplum.v1';

export interface CreateHBARuleRequest {
    $type: 'yandex.cloud.mdb.greenplum.v1.CreateHBARuleRequest';
    /**
     * ID of the Greenplum cluster.
     * To get the Greenplum cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /** New hba rule for the cluster. */
    hbaRule?: HBARule;
}

export interface UpdateHBARuleRequest {
    $type: 'yandex.cloud.mdb.greenplum.v1.UpdateHBARuleRequest';
    /**
     * ID of the Greenplum cluster.
     * To get the Greenplum cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Updated hba rule for the cluster. */
    hbaRule?: HBARule;
}

export interface DeleteHBARuleRequest {
    $type: 'yandex.cloud.mdb.greenplum.v1.DeleteHBARuleRequest';
    /**
     * ID of the Greenplum cluster.
     * To get the Greenplum cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Priority of the Greenplum cluster rule. */
    priority: number;
}

export interface ListHBARulesRequest {
    $type: 'yandex.cloud.mdb.greenplum.v1.ListHBARulesRequest';
    /**
     * ID of the Greenplum cluster.
     * To get the Greenplum cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
}

export interface ListHBARulesAtRevisionRequest {
    $type: 'yandex.cloud.mdb.greenplum.v1.ListHBARulesAtRevisionRequest';
    /**
     * ID of the Greenplum cluster.
     * To get the Greenplum cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Cluster revision */
    revision: number;
}

export interface ListHBARulesResponse {
    $type: 'yandex.cloud.mdb.greenplum.v1.ListHBARulesResponse';
    /** Requested list of hba rules for the cluster. */
    hbaRules: HBARule[];
}

export interface BatchUpdateHBARulesRequest {
    $type: 'yandex.cloud.mdb.greenplum.v1.BatchUpdateHBARulesRequest';
    /**
     * ID of the Greenplum cluster.
     * To get the Greenplum cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /** List of new hba rules for the cluster. */
    hbaRules: HBARule[];
}

export interface HBARulesMetadata {
    $type: 'yandex.cloud.mdb.greenplum.v1.HBARulesMetadata';
    /** ID of the Greenplum cluster which HBA rules was affected. */
    clusterId: string;
}

const baseCreateHBARuleRequest: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.CreateHBARuleRequest',
    clusterId: '',
};

export const CreateHBARuleRequest = {
    $type: 'yandex.cloud.mdb.greenplum.v1.CreateHBARuleRequest' as const,

    encode(message: CreateHBARuleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.hbaRule !== undefined) {
            HBARule.encode(message.hbaRule, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateHBARuleRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateHBARuleRequest } as CreateHBARuleRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.hbaRule = HBARule.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateHBARuleRequest {
        const message = { ...baseCreateHBARuleRequest } as CreateHBARuleRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.hbaRule =
            object.hbaRule !== undefined && object.hbaRule !== null
                ? HBARule.fromJSON(object.hbaRule)
                : undefined;
        return message;
    },

    toJSON(message: CreateHBARuleRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.hbaRule !== undefined &&
            (obj.hbaRule = message.hbaRule ? HBARule.toJSON(message.hbaRule) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateHBARuleRequest>, I>>(
        object: I,
    ): CreateHBARuleRequest {
        const message = { ...baseCreateHBARuleRequest } as CreateHBARuleRequest;
        message.clusterId = object.clusterId ?? '';
        message.hbaRule =
            object.hbaRule !== undefined && object.hbaRule !== null
                ? HBARule.fromPartial(object.hbaRule)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(CreateHBARuleRequest.$type, CreateHBARuleRequest);

const baseUpdateHBARuleRequest: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.UpdateHBARuleRequest',
    clusterId: '',
};

export const UpdateHBARuleRequest = {
    $type: 'yandex.cloud.mdb.greenplum.v1.UpdateHBARuleRequest' as const,

    encode(message: UpdateHBARuleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.hbaRule !== undefined) {
            HBARule.encode(message.hbaRule, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHBARuleRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateHBARuleRequest } as UpdateHBARuleRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.hbaRule = HBARule.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateHBARuleRequest {
        const message = { ...baseUpdateHBARuleRequest } as UpdateHBARuleRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.hbaRule =
            object.hbaRule !== undefined && object.hbaRule !== null
                ? HBARule.fromJSON(object.hbaRule)
                : undefined;
        return message;
    },

    toJSON(message: UpdateHBARuleRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.hbaRule !== undefined &&
            (obj.hbaRule = message.hbaRule ? HBARule.toJSON(message.hbaRule) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateHBARuleRequest>, I>>(
        object: I,
    ): UpdateHBARuleRequest {
        const message = { ...baseUpdateHBARuleRequest } as UpdateHBARuleRequest;
        message.clusterId = object.clusterId ?? '';
        message.hbaRule =
            object.hbaRule !== undefined && object.hbaRule !== null
                ? HBARule.fromPartial(object.hbaRule)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(UpdateHBARuleRequest.$type, UpdateHBARuleRequest);

const baseDeleteHBARuleRequest: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.DeleteHBARuleRequest',
    clusterId: '',
    priority: 0,
};

export const DeleteHBARuleRequest = {
    $type: 'yandex.cloud.mdb.greenplum.v1.DeleteHBARuleRequest' as const,

    encode(message: DeleteHBARuleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.priority !== 0) {
            writer.uint32(16).int64(message.priority);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteHBARuleRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteHBARuleRequest } as DeleteHBARuleRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.priority = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteHBARuleRequest {
        const message = { ...baseDeleteHBARuleRequest } as DeleteHBARuleRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.priority =
            object.priority !== undefined && object.priority !== null ? Number(object.priority) : 0;
        return message;
    },

    toJSON(message: DeleteHBARuleRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.priority !== undefined && (obj.priority = Math.round(message.priority));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteHBARuleRequest>, I>>(
        object: I,
    ): DeleteHBARuleRequest {
        const message = { ...baseDeleteHBARuleRequest } as DeleteHBARuleRequest;
        message.clusterId = object.clusterId ?? '';
        message.priority = object.priority ?? 0;
        return message;
    },
};

messageTypeRegistry.set(DeleteHBARuleRequest.$type, DeleteHBARuleRequest);

const baseListHBARulesRequest: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.ListHBARulesRequest',
    clusterId: '',
};

export const ListHBARulesRequest = {
    $type: 'yandex.cloud.mdb.greenplum.v1.ListHBARulesRequest' as const,

    encode(message: ListHBARulesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListHBARulesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListHBARulesRequest } as ListHBARulesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListHBARulesRequest {
        const message = { ...baseListHBARulesRequest } as ListHBARulesRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        return message;
    },

    toJSON(message: ListHBARulesRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListHBARulesRequest>, I>>(
        object: I,
    ): ListHBARulesRequest {
        const message = { ...baseListHBARulesRequest } as ListHBARulesRequest;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListHBARulesRequest.$type, ListHBARulesRequest);

const baseListHBARulesAtRevisionRequest: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.ListHBARulesAtRevisionRequest',
    clusterId: '',
    revision: 0,
};

export const ListHBARulesAtRevisionRequest = {
    $type: 'yandex.cloud.mdb.greenplum.v1.ListHBARulesAtRevisionRequest' as const,

    encode(
        message: ListHBARulesAtRevisionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.revision !== 0) {
            writer.uint32(16).int64(message.revision);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListHBARulesAtRevisionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListHBARulesAtRevisionRequest } as ListHBARulesAtRevisionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.revision = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListHBARulesAtRevisionRequest {
        const message = { ...baseListHBARulesAtRevisionRequest } as ListHBARulesAtRevisionRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.revision =
            object.revision !== undefined && object.revision !== null ? Number(object.revision) : 0;
        return message;
    },

    toJSON(message: ListHBARulesAtRevisionRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.revision !== undefined && (obj.revision = Math.round(message.revision));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListHBARulesAtRevisionRequest>, I>>(
        object: I,
    ): ListHBARulesAtRevisionRequest {
        const message = { ...baseListHBARulesAtRevisionRequest } as ListHBARulesAtRevisionRequest;
        message.clusterId = object.clusterId ?? '';
        message.revision = object.revision ?? 0;
        return message;
    },
};

messageTypeRegistry.set(ListHBARulesAtRevisionRequest.$type, ListHBARulesAtRevisionRequest);

const baseListHBARulesResponse: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.ListHBARulesResponse',
};

export const ListHBARulesResponse = {
    $type: 'yandex.cloud.mdb.greenplum.v1.ListHBARulesResponse' as const,

    encode(message: ListHBARulesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.hbaRules) {
            HBARule.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListHBARulesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListHBARulesResponse } as ListHBARulesResponse;
        message.hbaRules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hbaRules.push(HBARule.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListHBARulesResponse {
        const message = { ...baseListHBARulesResponse } as ListHBARulesResponse;
        message.hbaRules = (object.hbaRules ?? []).map((e: any) => HBARule.fromJSON(e));
        return message;
    },

    toJSON(message: ListHBARulesResponse): unknown {
        const obj: any = {};
        if (message.hbaRules) {
            obj.hbaRules = message.hbaRules.map((e) => (e ? HBARule.toJSON(e) : undefined));
        } else {
            obj.hbaRules = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListHBARulesResponse>, I>>(
        object: I,
    ): ListHBARulesResponse {
        const message = { ...baseListHBARulesResponse } as ListHBARulesResponse;
        message.hbaRules = object.hbaRules?.map((e) => HBARule.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(ListHBARulesResponse.$type, ListHBARulesResponse);

const baseBatchUpdateHBARulesRequest: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.BatchUpdateHBARulesRequest',
    clusterId: '',
};

export const BatchUpdateHBARulesRequest = {
    $type: 'yandex.cloud.mdb.greenplum.v1.BatchUpdateHBARulesRequest' as const,

    encode(
        message: BatchUpdateHBARulesRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.hbaRules) {
            HBARule.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchUpdateHBARulesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchUpdateHBARulesRequest } as BatchUpdateHBARulesRequest;
        message.hbaRules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.hbaRules.push(HBARule.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchUpdateHBARulesRequest {
        const message = { ...baseBatchUpdateHBARulesRequest } as BatchUpdateHBARulesRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.hbaRules = (object.hbaRules ?? []).map((e: any) => HBARule.fromJSON(e));
        return message;
    },

    toJSON(message: BatchUpdateHBARulesRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.hbaRules) {
            obj.hbaRules = message.hbaRules.map((e) => (e ? HBARule.toJSON(e) : undefined));
        } else {
            obj.hbaRules = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchUpdateHBARulesRequest>, I>>(
        object: I,
    ): BatchUpdateHBARulesRequest {
        const message = { ...baseBatchUpdateHBARulesRequest } as BatchUpdateHBARulesRequest;
        message.clusterId = object.clusterId ?? '';
        message.hbaRules = object.hbaRules?.map((e) => HBARule.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(BatchUpdateHBARulesRequest.$type, BatchUpdateHBARulesRequest);

const baseHBARulesMetadata: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.HBARulesMetadata',
    clusterId: '',
};

export const HBARulesMetadata = {
    $type: 'yandex.cloud.mdb.greenplum.v1.HBARulesMetadata' as const,

    encode(message: HBARulesMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HBARulesMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHBARulesMetadata } as HBARulesMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HBARulesMetadata {
        const message = { ...baseHBARulesMetadata } as HBARulesMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        return message;
    },

    toJSON(message: HBARulesMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HBARulesMetadata>, I>>(object: I): HBARulesMetadata {
        const message = { ...baseHBARulesMetadata } as HBARulesMetadata;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

messageTypeRegistry.set(HBARulesMetadata.$type, HBARulesMetadata);

/** A set of methods for managing Greenplum clusters. */
export const HBARuleServiceService = {
    /** Retrieves a list of HBA rules for Greenplum clusters. */
    list: {
        path: '/yandex.cloud.mdb.greenplum.v1.HBARuleService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListHBARulesRequest) =>
            Buffer.from(ListHBARulesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListHBARulesRequest.decode(value),
        responseSerialize: (value: ListHBARulesResponse) =>
            Buffer.from(ListHBARulesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListHBARulesResponse.decode(value),
    },
    /** Retrieves a list of HBA rules for Greenplum clusters for particular revision. */
    listAtRevision: {
        path: '/yandex.cloud.mdb.greenplum.v1.HBARuleService/ListAtRevision',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListHBARulesAtRevisionRequest) =>
            Buffer.from(ListHBARulesAtRevisionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListHBARulesAtRevisionRequest.decode(value),
        responseSerialize: (value: ListHBARulesResponse) =>
            Buffer.from(ListHBARulesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListHBARulesResponse.decode(value),
    },
    /** Create single HBA rule for the specified Greenplum cluster to the end of HBA rules list. */
    create: {
        path: '/yandex.cloud.mdb.greenplum.v1.HBARuleService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateHBARuleRequest) =>
            Buffer.from(CreateHBARuleRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateHBARuleRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Update specified HBA rule for the specified Greenplum cluster without changind it order. */
    update: {
        path: '/yandex.cloud.mdb.greenplum.v1.HBARuleService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateHBARuleRequest) =>
            Buffer.from(UpdateHBARuleRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateHBARuleRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Delete specified HBA rule for the specified Greenplum cluster. */
    delete: {
        path: '/yandex.cloud.mdb.greenplum.v1.HBARuleService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteHBARuleRequest) =>
            Buffer.from(DeleteHBARuleRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteHBARuleRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Modifies all HBA rules for the specified Greenplum cluster. */
    batchUpdate: {
        path: '/yandex.cloud.mdb.greenplum.v1.HBARuleService/BatchUpdate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: BatchUpdateHBARulesRequest) =>
            Buffer.from(BatchUpdateHBARulesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => BatchUpdateHBARulesRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface HBARuleServiceServer extends UntypedServiceImplementation {
    /** Retrieves a list of HBA rules for Greenplum clusters. */
    list: handleUnaryCall<ListHBARulesRequest, ListHBARulesResponse>;
    /** Retrieves a list of HBA rules for Greenplum clusters for particular revision. */
    listAtRevision: handleUnaryCall<ListHBARulesAtRevisionRequest, ListHBARulesResponse>;
    /** Create single HBA rule for the specified Greenplum cluster to the end of HBA rules list. */
    create: handleUnaryCall<CreateHBARuleRequest, Operation>;
    /** Update specified HBA rule for the specified Greenplum cluster without changind it order. */
    update: handleUnaryCall<UpdateHBARuleRequest, Operation>;
    /** Delete specified HBA rule for the specified Greenplum cluster. */
    delete: handleUnaryCall<DeleteHBARuleRequest, Operation>;
    /** Modifies all HBA rules for the specified Greenplum cluster. */
    batchUpdate: handleUnaryCall<BatchUpdateHBARulesRequest, Operation>;
}

export interface HBARuleServiceClient extends Client {
    /** Retrieves a list of HBA rules for Greenplum clusters. */
    list(
        request: ListHBARulesRequest,
        callback: (error: ServiceError | null, response: ListHBARulesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListHBARulesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListHBARulesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListHBARulesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListHBARulesResponse) => void,
    ): ClientUnaryCall;
    /** Retrieves a list of HBA rules for Greenplum clusters for particular revision. */
    listAtRevision(
        request: ListHBARulesAtRevisionRequest,
        callback: (error: ServiceError | null, response: ListHBARulesResponse) => void,
    ): ClientUnaryCall;
    listAtRevision(
        request: ListHBARulesAtRevisionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListHBARulesResponse) => void,
    ): ClientUnaryCall;
    listAtRevision(
        request: ListHBARulesAtRevisionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListHBARulesResponse) => void,
    ): ClientUnaryCall;
    /** Create single HBA rule for the specified Greenplum cluster to the end of HBA rules list. */
    create(
        request: CreateHBARuleRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateHBARuleRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateHBARuleRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Update specified HBA rule for the specified Greenplum cluster without changind it order. */
    update(
        request: UpdateHBARuleRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateHBARuleRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateHBARuleRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Delete specified HBA rule for the specified Greenplum cluster. */
    delete(
        request: DeleteHBARuleRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteHBARuleRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteHBARuleRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Modifies all HBA rules for the specified Greenplum cluster. */
    batchUpdate(
        request: BatchUpdateHBARulesRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    batchUpdate(
        request: BatchUpdateHBARulesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    batchUpdate(
        request: BatchUpdateHBARulesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const HBARuleServiceClient = makeGenericClientConstructor(
    HBARuleServiceService,
    'yandex.cloud.mdb.greenplum.v1.HBARuleService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): HBARuleServiceClient;
    service: typeof HBARuleServiceService;
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
