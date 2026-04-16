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
    LifecyclePolicyState,
    LifecycleRule,
    LifecyclePolicy,
    lifecyclePolicyStateFromJSON,
    lifecyclePolicyStateToJSON,
} from './lifecycle_policy';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { Operation } from '../../operation/operation';
import { Empty } from '../../../../google/protobuf/empty';

export const protobufPackage = 'yandex.cloud.cloudregistry.v1';

export interface CreateLifecyclePolicyRequest {
    /** ID of the registry to create a lifecycle policy in. */
    registryId: string;
    /** Name of the lifecycle policy. */
    name: string;
    /** Description of the lifecycle policy. 0-1024 characters long. */
    description: string;
    /** List of lifecycle rules. */
    rules: LifecycleRule[];
    /** Initial state of the lifecycle policy. */
    state: LifecyclePolicyState;
}

export interface CreateLifecyclePolicyMetadata {
    /** ID of the lifecycle policy that is being created. */
    policyId: string;
}

export interface UpdateLifecyclePolicyRequest {
    /** ID of the lifecycle policy to update. */
    policyId: string;
    /** Field mask that specifies which fields of the lifecycle policy are going to be updated. */
    updateMask?: FieldMask;
    /** Name of the lifecycle policy. */
    name: string;
    /** Description of the lifecycle policy. 0-1024 characters long. */
    description: string;
    /** List of lifecycle rules. */
    rules: LifecycleRule[];
    /** State of the lifecycle policy. */
    state: LifecyclePolicyState;
}

export interface UpdateLifecyclePolicyMetadata {
    /** ID of the lifecycle policy that is being updated. */
    policyId: string;
}

export interface DeleteLifecyclePolicyRequest {
    /** ID of the lifecycle policy to delete. */
    policyId: string;
}

export interface DeleteLifecyclePolicyMetadata {
    /** ID of the lifecycle policy that is being deleted. */
    policyId: string;
}

export interface GetLifecyclePolicyRequest {
    /** ID of the lifecycle policy to return. */
    policyId: string;
}

export interface ListLifecyclePolicyRequest {
    /** ID of the registry to list lifecycle policies in. */
    registryId: string;
    /** The maximum number of results per page to return. */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set page_token to the
     * ListLifecyclePolicyResponse.next_page_token returned by a previous list request.
     */
    pageToken: string;
}

export interface ListLifecyclePolicyResponse {
    /** List of lifecycle policy resources. */
    policies: LifecyclePolicy[];
    /** This token allows you to get the next page of results for list requests. */
    nextPageToken: string;
}

export interface ChangeLifecyclePolicyStateRequest {
    /** ID of the lifecycle policy to change state. */
    policyId: string;
    /** Target state of the lifecycle policy. */
    state: LifecyclePolicyState;
}

export interface DryRunLifecyclePolicyRequest {
    /** ID of the lifecycle policy. */
    policyId: string;
}

export interface DryRunLifecyclePolicyMetadata {
    /** ID of the lifecycle policy. */
    policyId: string;
}

export interface DryRunLifecyclePolicyResponse {
    /** ID of the lifecycle policy. */
    policyId: string;
    /** Time when the dry run started. */
    runAt?: Date;
    /** Count of artifacts to be hard deleted. */
    artifactsToHardDeleteCount: number;
    /** Count of artifacts to be soft deleted. */
    artifactsToSoftDeleteCount: number;
}

const baseCreateLifecyclePolicyRequest: object = {
    registryId: '',
    name: '',
    description: '',
    state: 0,
};

export const CreateLifecyclePolicyRequest: {
    encode(message: CreateLifecyclePolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateLifecyclePolicyRequest;
    fromJSON(object: any): CreateLifecyclePolicyRequest;
    toJSON(message: CreateLifecyclePolicyRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateLifecyclePolicyRequest>, I>>(object: I): CreateLifecyclePolicyRequest;
} = {
    encode(
        message: CreateLifecyclePolicyRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        for (const v of message.rules) {
            LifecycleRule.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(40).int32(message.state);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateLifecyclePolicyRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateLifecyclePolicyRequest } as CreateLifecyclePolicyRequest;
        message.rules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.rules.push(LifecycleRule.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.state = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateLifecyclePolicyRequest {
        const message = { ...baseCreateLifecyclePolicyRequest } as CreateLifecyclePolicyRequest;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.rules = (object.rules ?? []).map((e: any) => LifecycleRule.fromJSON(e));
        message.state =
            object.state !== undefined && object.state !== null
                ? lifecyclePolicyStateFromJSON(object.state)
                : 0;
        return message;
    },

    toJSON(message: CreateLifecyclePolicyRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        if (message.rules) {
            obj.rules = message.rules.map((e) => (e ? LifecycleRule.toJSON(e) : undefined));
        } else {
            obj.rules = [];
        }
        message.state !== undefined && (obj.state = lifecyclePolicyStateToJSON(message.state));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateLifecyclePolicyRequest>, I>>(
        object: I,
    ): CreateLifecyclePolicyRequest {
        const message = { ...baseCreateLifecyclePolicyRequest } as CreateLifecyclePolicyRequest;
        message.registryId = object.registryId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.rules = object.rules?.map((e) => LifecycleRule.fromPartial(e)) || [];
        message.state = object.state ?? 0;
        return message;
    },
};

const baseCreateLifecyclePolicyMetadata: object = { policyId: '' };

export const CreateLifecyclePolicyMetadata: {
    encode(message: CreateLifecyclePolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateLifecyclePolicyMetadata;
    fromJSON(object: any): CreateLifecyclePolicyMetadata;
    toJSON(message: CreateLifecyclePolicyMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateLifecyclePolicyMetadata>, I>>(object: I): CreateLifecyclePolicyMetadata;
} = {
    encode(
        message: CreateLifecyclePolicyMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.policyId !== '') {
            writer.uint32(10).string(message.policyId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateLifecyclePolicyMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateLifecyclePolicyMetadata } as CreateLifecyclePolicyMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateLifecyclePolicyMetadata {
        const message = { ...baseCreateLifecyclePolicyMetadata } as CreateLifecyclePolicyMetadata;
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : '';
        return message;
    },

    toJSON(message: CreateLifecyclePolicyMetadata): unknown {
        const obj: any = {};
        message.policyId !== undefined && (obj.policyId = message.policyId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateLifecyclePolicyMetadata>, I>>(
        object: I,
    ): CreateLifecyclePolicyMetadata {
        const message = { ...baseCreateLifecyclePolicyMetadata } as CreateLifecyclePolicyMetadata;
        message.policyId = object.policyId ?? '';
        return message;
    },
};

const baseUpdateLifecyclePolicyRequest: object = {
    policyId: '',
    name: '',
    description: '',
    state: 0,
};

export const UpdateLifecyclePolicyRequest: {
    encode(message: UpdateLifecyclePolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLifecyclePolicyRequest;
    fromJSON(object: any): UpdateLifecyclePolicyRequest;
    toJSON(message: UpdateLifecyclePolicyRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateLifecyclePolicyRequest>, I>>(object: I): UpdateLifecyclePolicyRequest;
} = {
    encode(
        message: UpdateLifecyclePolicyRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.policyId !== '') {
            writer.uint32(10).string(message.policyId);
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
        for (const v of message.rules) {
            LifecycleRule.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(48).int32(message.state);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLifecyclePolicyRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateLifecyclePolicyRequest } as UpdateLifecyclePolicyRequest;
        message.rules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = reader.string();
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
                    message.rules.push(LifecycleRule.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.state = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateLifecyclePolicyRequest {
        const message = { ...baseUpdateLifecyclePolicyRequest } as UpdateLifecyclePolicyRequest;
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
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
        message.rules = (object.rules ?? []).map((e: any) => LifecycleRule.fromJSON(e));
        message.state =
            object.state !== undefined && object.state !== null
                ? lifecyclePolicyStateFromJSON(object.state)
                : 0;
        return message;
    },

    toJSON(message: UpdateLifecyclePolicyRequest): unknown {
        const obj: any = {};
        message.policyId !== undefined && (obj.policyId = message.policyId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        if (message.rules) {
            obj.rules = message.rules.map((e) => (e ? LifecycleRule.toJSON(e) : undefined));
        } else {
            obj.rules = [];
        }
        message.state !== undefined && (obj.state = lifecyclePolicyStateToJSON(message.state));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateLifecyclePolicyRequest>, I>>(
        object: I,
    ): UpdateLifecyclePolicyRequest {
        const message = { ...baseUpdateLifecyclePolicyRequest } as UpdateLifecyclePolicyRequest;
        message.policyId = object.policyId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.rules = object.rules?.map((e) => LifecycleRule.fromPartial(e)) || [];
        message.state = object.state ?? 0;
        return message;
    },
};

const baseUpdateLifecyclePolicyMetadata: object = { policyId: '' };

export const UpdateLifecyclePolicyMetadata: {
    encode(message: UpdateLifecyclePolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLifecyclePolicyMetadata;
    fromJSON(object: any): UpdateLifecyclePolicyMetadata;
    toJSON(message: UpdateLifecyclePolicyMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateLifecyclePolicyMetadata>, I>>(object: I): UpdateLifecyclePolicyMetadata;
} = {
    encode(
        message: UpdateLifecyclePolicyMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.policyId !== '') {
            writer.uint32(10).string(message.policyId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLifecyclePolicyMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateLifecyclePolicyMetadata } as UpdateLifecyclePolicyMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateLifecyclePolicyMetadata {
        const message = { ...baseUpdateLifecyclePolicyMetadata } as UpdateLifecyclePolicyMetadata;
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : '';
        return message;
    },

    toJSON(message: UpdateLifecyclePolicyMetadata): unknown {
        const obj: any = {};
        message.policyId !== undefined && (obj.policyId = message.policyId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateLifecyclePolicyMetadata>, I>>(
        object: I,
    ): UpdateLifecyclePolicyMetadata {
        const message = { ...baseUpdateLifecyclePolicyMetadata } as UpdateLifecyclePolicyMetadata;
        message.policyId = object.policyId ?? '';
        return message;
    },
};

const baseDeleteLifecyclePolicyRequest: object = { policyId: '' };

export const DeleteLifecyclePolicyRequest: {
    encode(message: DeleteLifecyclePolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLifecyclePolicyRequest;
    fromJSON(object: any): DeleteLifecyclePolicyRequest;
    toJSON(message: DeleteLifecyclePolicyRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteLifecyclePolicyRequest>, I>>(object: I): DeleteLifecyclePolicyRequest;
} = {
    encode(
        message: DeleteLifecyclePolicyRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.policyId !== '') {
            writer.uint32(10).string(message.policyId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLifecyclePolicyRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteLifecyclePolicyRequest } as DeleteLifecyclePolicyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteLifecyclePolicyRequest {
        const message = { ...baseDeleteLifecyclePolicyRequest } as DeleteLifecyclePolicyRequest;
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : '';
        return message;
    },

    toJSON(message: DeleteLifecyclePolicyRequest): unknown {
        const obj: any = {};
        message.policyId !== undefined && (obj.policyId = message.policyId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteLifecyclePolicyRequest>, I>>(
        object: I,
    ): DeleteLifecyclePolicyRequest {
        const message = { ...baseDeleteLifecyclePolicyRequest } as DeleteLifecyclePolicyRequest;
        message.policyId = object.policyId ?? '';
        return message;
    },
};

const baseDeleteLifecyclePolicyMetadata: object = { policyId: '' };

export const DeleteLifecyclePolicyMetadata: {
    encode(message: DeleteLifecyclePolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLifecyclePolicyMetadata;
    fromJSON(object: any): DeleteLifecyclePolicyMetadata;
    toJSON(message: DeleteLifecyclePolicyMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteLifecyclePolicyMetadata>, I>>(object: I): DeleteLifecyclePolicyMetadata;
} = {
    encode(
        message: DeleteLifecyclePolicyMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.policyId !== '') {
            writer.uint32(10).string(message.policyId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLifecyclePolicyMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteLifecyclePolicyMetadata } as DeleteLifecyclePolicyMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteLifecyclePolicyMetadata {
        const message = { ...baseDeleteLifecyclePolicyMetadata } as DeleteLifecyclePolicyMetadata;
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : '';
        return message;
    },

    toJSON(message: DeleteLifecyclePolicyMetadata): unknown {
        const obj: any = {};
        message.policyId !== undefined && (obj.policyId = message.policyId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteLifecyclePolicyMetadata>, I>>(
        object: I,
    ): DeleteLifecyclePolicyMetadata {
        const message = { ...baseDeleteLifecyclePolicyMetadata } as DeleteLifecyclePolicyMetadata;
        message.policyId = object.policyId ?? '';
        return message;
    },
};

const baseGetLifecyclePolicyRequest: object = { policyId: '' };

export const GetLifecyclePolicyRequest: {
    encode(message: GetLifecyclePolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLifecyclePolicyRequest;
    fromJSON(object: any): GetLifecyclePolicyRequest;
    toJSON(message: GetLifecyclePolicyRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetLifecyclePolicyRequest>, I>>(object: I): GetLifecyclePolicyRequest;
} = {
    encode(
        message: GetLifecyclePolicyRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.policyId !== '') {
            writer.uint32(10).string(message.policyId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetLifecyclePolicyRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetLifecyclePolicyRequest } as GetLifecyclePolicyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetLifecyclePolicyRequest {
        const message = { ...baseGetLifecyclePolicyRequest } as GetLifecyclePolicyRequest;
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : '';
        return message;
    },

    toJSON(message: GetLifecyclePolicyRequest): unknown {
        const obj: any = {};
        message.policyId !== undefined && (obj.policyId = message.policyId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetLifecyclePolicyRequest>, I>>(
        object: I,
    ): GetLifecyclePolicyRequest {
        const message = { ...baseGetLifecyclePolicyRequest } as GetLifecyclePolicyRequest;
        message.policyId = object.policyId ?? '';
        return message;
    },
};

const baseListLifecyclePolicyRequest: object = { registryId: '', pageSize: 0, pageToken: '' };

export const ListLifecyclePolicyRequest: {
    encode(message: ListLifecyclePolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListLifecyclePolicyRequest;
    fromJSON(object: any): ListLifecyclePolicyRequest;
    toJSON(message: ListLifecyclePolicyRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListLifecyclePolicyRequest>, I>>(object: I): ListLifecyclePolicyRequest;
} = {
    encode(
        message: ListLifecyclePolicyRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListLifecyclePolicyRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListLifecyclePolicyRequest } as ListLifecyclePolicyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
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

    fromJSON(object: any): ListLifecyclePolicyRequest {
        const message = { ...baseListLifecyclePolicyRequest } as ListLifecyclePolicyRequest;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListLifecyclePolicyRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListLifecyclePolicyRequest>, I>>(
        object: I,
    ): ListLifecyclePolicyRequest {
        const message = { ...baseListLifecyclePolicyRequest } as ListLifecyclePolicyRequest;
        message.registryId = object.registryId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListLifecyclePolicyResponse: object = { nextPageToken: '' };

export const ListLifecyclePolicyResponse: {
    encode(message: ListLifecyclePolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListLifecyclePolicyResponse;
    fromJSON(object: any): ListLifecyclePolicyResponse;
    toJSON(message: ListLifecyclePolicyResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListLifecyclePolicyResponse>, I>>(object: I): ListLifecyclePolicyResponse;
} = {
    encode(
        message: ListLifecyclePolicyResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.policies) {
            LifecyclePolicy.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListLifecyclePolicyResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListLifecyclePolicyResponse } as ListLifecyclePolicyResponse;
        message.policies = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policies.push(LifecyclePolicy.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListLifecyclePolicyResponse {
        const message = { ...baseListLifecyclePolicyResponse } as ListLifecyclePolicyResponse;
        message.policies = (object.policies ?? []).map((e: any) => LifecyclePolicy.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListLifecyclePolicyResponse): unknown {
        const obj: any = {};
        if (message.policies) {
            obj.policies = message.policies.map((e) => (e ? LifecyclePolicy.toJSON(e) : undefined));
        } else {
            obj.policies = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListLifecyclePolicyResponse>, I>>(
        object: I,
    ): ListLifecyclePolicyResponse {
        const message = { ...baseListLifecyclePolicyResponse } as ListLifecyclePolicyResponse;
        message.policies = object.policies?.map((e) => LifecyclePolicy.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseChangeLifecyclePolicyStateRequest: object = { policyId: '', state: 0 };

export const ChangeLifecyclePolicyStateRequest: {
    encode(message: ChangeLifecyclePolicyStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChangeLifecyclePolicyStateRequest;
    fromJSON(object: any): ChangeLifecyclePolicyStateRequest;
    toJSON(message: ChangeLifecyclePolicyStateRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ChangeLifecyclePolicyStateRequest>, I>>(object: I): ChangeLifecyclePolicyStateRequest;
} = {
    encode(
        message: ChangeLifecyclePolicyStateRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.policyId !== '') {
            writer.uint32(10).string(message.policyId);
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ChangeLifecyclePolicyStateRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseChangeLifecyclePolicyStateRequest,
        } as ChangeLifecyclePolicyStateRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = reader.string();
                    break;
                case 2:
                    message.state = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ChangeLifecyclePolicyStateRequest {
        const message = {
            ...baseChangeLifecyclePolicyStateRequest,
        } as ChangeLifecyclePolicyStateRequest;
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : '';
        message.state =
            object.state !== undefined && object.state !== null
                ? lifecyclePolicyStateFromJSON(object.state)
                : 0;
        return message;
    },

    toJSON(message: ChangeLifecyclePolicyStateRequest): unknown {
        const obj: any = {};
        message.policyId !== undefined && (obj.policyId = message.policyId);
        message.state !== undefined && (obj.state = lifecyclePolicyStateToJSON(message.state));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ChangeLifecyclePolicyStateRequest>, I>>(
        object: I,
    ): ChangeLifecyclePolicyStateRequest {
        const message = {
            ...baseChangeLifecyclePolicyStateRequest,
        } as ChangeLifecyclePolicyStateRequest;
        message.policyId = object.policyId ?? '';
        message.state = object.state ?? 0;
        return message;
    },
};

const baseDryRunLifecyclePolicyRequest: object = { policyId: '' };

export const DryRunLifecyclePolicyRequest: {
    encode(message: DryRunLifecyclePolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DryRunLifecyclePolicyRequest;
    fromJSON(object: any): DryRunLifecyclePolicyRequest;
    toJSON(message: DryRunLifecyclePolicyRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DryRunLifecyclePolicyRequest>, I>>(object: I): DryRunLifecyclePolicyRequest;
} = {
    encode(
        message: DryRunLifecyclePolicyRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.policyId !== '') {
            writer.uint32(10).string(message.policyId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DryRunLifecyclePolicyRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDryRunLifecyclePolicyRequest } as DryRunLifecyclePolicyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DryRunLifecyclePolicyRequest {
        const message = { ...baseDryRunLifecyclePolicyRequest } as DryRunLifecyclePolicyRequest;
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : '';
        return message;
    },

    toJSON(message: DryRunLifecyclePolicyRequest): unknown {
        const obj: any = {};
        message.policyId !== undefined && (obj.policyId = message.policyId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DryRunLifecyclePolicyRequest>, I>>(
        object: I,
    ): DryRunLifecyclePolicyRequest {
        const message = { ...baseDryRunLifecyclePolicyRequest } as DryRunLifecyclePolicyRequest;
        message.policyId = object.policyId ?? '';
        return message;
    },
};

const baseDryRunLifecyclePolicyMetadata: object = { policyId: '' };

export const DryRunLifecyclePolicyMetadata: {
    encode(message: DryRunLifecyclePolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DryRunLifecyclePolicyMetadata;
    fromJSON(object: any): DryRunLifecyclePolicyMetadata;
    toJSON(message: DryRunLifecyclePolicyMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DryRunLifecyclePolicyMetadata>, I>>(object: I): DryRunLifecyclePolicyMetadata;
} = {
    encode(
        message: DryRunLifecyclePolicyMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.policyId !== '') {
            writer.uint32(10).string(message.policyId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DryRunLifecyclePolicyMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDryRunLifecyclePolicyMetadata } as DryRunLifecyclePolicyMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DryRunLifecyclePolicyMetadata {
        const message = { ...baseDryRunLifecyclePolicyMetadata } as DryRunLifecyclePolicyMetadata;
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : '';
        return message;
    },

    toJSON(message: DryRunLifecyclePolicyMetadata): unknown {
        const obj: any = {};
        message.policyId !== undefined && (obj.policyId = message.policyId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DryRunLifecyclePolicyMetadata>, I>>(
        object: I,
    ): DryRunLifecyclePolicyMetadata {
        const message = { ...baseDryRunLifecyclePolicyMetadata } as DryRunLifecyclePolicyMetadata;
        message.policyId = object.policyId ?? '';
        return message;
    },
};

const baseDryRunLifecyclePolicyResponse: object = {
    policyId: '',
    artifactsToHardDeleteCount: 0,
    artifactsToSoftDeleteCount: 0,
};

export const DryRunLifecyclePolicyResponse: {
    encode(message: DryRunLifecyclePolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DryRunLifecyclePolicyResponse;
    fromJSON(object: any): DryRunLifecyclePolicyResponse;
    toJSON(message: DryRunLifecyclePolicyResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<DryRunLifecyclePolicyResponse>, I>>(object: I): DryRunLifecyclePolicyResponse;
} = {
    encode(
        message: DryRunLifecyclePolicyResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.policyId !== '') {
            writer.uint32(10).string(message.policyId);
        }
        if (message.runAt !== undefined) {
            Timestamp.encode(toTimestamp(message.runAt), writer.uint32(18).fork()).ldelim();
        }
        if (message.artifactsToHardDeleteCount !== 0) {
            writer.uint32(24).int64(message.artifactsToHardDeleteCount);
        }
        if (message.artifactsToSoftDeleteCount !== 0) {
            writer.uint32(32).int64(message.artifactsToSoftDeleteCount);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DryRunLifecyclePolicyResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDryRunLifecyclePolicyResponse } as DryRunLifecyclePolicyResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = reader.string();
                    break;
                case 2:
                    message.runAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.artifactsToHardDeleteCount = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.artifactsToSoftDeleteCount = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DryRunLifecyclePolicyResponse {
        const message = { ...baseDryRunLifecyclePolicyResponse } as DryRunLifecyclePolicyResponse;
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : '';
        message.runAt =
            object.runAt !== undefined && object.runAt !== null
                ? fromJsonTimestamp(object.runAt)
                : undefined;
        message.artifactsToHardDeleteCount =
            object.artifactsToHardDeleteCount !== undefined &&
            object.artifactsToHardDeleteCount !== null
                ? Number(object.artifactsToHardDeleteCount)
                : 0;
        message.artifactsToSoftDeleteCount =
            object.artifactsToSoftDeleteCount !== undefined &&
            object.artifactsToSoftDeleteCount !== null
                ? Number(object.artifactsToSoftDeleteCount)
                : 0;
        return message;
    },

    toJSON(message: DryRunLifecyclePolicyResponse): unknown {
        const obj: any = {};
        message.policyId !== undefined && (obj.policyId = message.policyId);
        message.runAt !== undefined && (obj.runAt = message.runAt.toISOString());
        message.artifactsToHardDeleteCount !== undefined &&
            (obj.artifactsToHardDeleteCount = Math.round(message.artifactsToHardDeleteCount));
        message.artifactsToSoftDeleteCount !== undefined &&
            (obj.artifactsToSoftDeleteCount = Math.round(message.artifactsToSoftDeleteCount));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DryRunLifecyclePolicyResponse>, I>>(
        object: I,
    ): DryRunLifecyclePolicyResponse {
        const message = { ...baseDryRunLifecyclePolicyResponse } as DryRunLifecyclePolicyResponse;
        message.policyId = object.policyId ?? '';
        message.runAt = object.runAt ?? undefined;
        message.artifactsToHardDeleteCount = object.artifactsToHardDeleteCount ?? 0;
        message.artifactsToSoftDeleteCount = object.artifactsToSoftDeleteCount ?? 0;
        return message;
    },
};

/** A set of methods for managing LifecyclePolicy resources. */
export const LifecyclePolicyServiceService = {
    /** Creates a lifecycle policy in the specified registry. */
    create: {
        path: '/yandex.cloud.cloudregistry.v1.LifecyclePolicyService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateLifecyclePolicyRequest) =>
            Buffer.from(CreateLifecyclePolicyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateLifecyclePolicyRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified lifecycle policy. */
    update: {
        path: '/yandex.cloud.cloudregistry.v1.LifecyclePolicyService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateLifecyclePolicyRequest) =>
            Buffer.from(UpdateLifecyclePolicyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateLifecyclePolicyRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified lifecycle policy. */
    delete: {
        path: '/yandex.cloud.cloudregistry.v1.LifecyclePolicyService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteLifecyclePolicyRequest) =>
            Buffer.from(DeleteLifecyclePolicyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteLifecyclePolicyRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Returns the specified lifecycle policy. */
    get: {
        path: '/yandex.cloud.cloudregistry.v1.LifecyclePolicyService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetLifecyclePolicyRequest) =>
            Buffer.from(GetLifecyclePolicyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetLifecyclePolicyRequest.decode(value),
        responseSerialize: (value: LifecyclePolicy) =>
            Buffer.from(LifecyclePolicy.encode(value).finish()),
        responseDeserialize: (value: Buffer) => LifecyclePolicy.decode(value),
    },
    /** Retrieves the list of lifecycle policies in the specified registry. */
    list: {
        path: '/yandex.cloud.cloudregistry.v1.LifecyclePolicyService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListLifecyclePolicyRequest) =>
            Buffer.from(ListLifecyclePolicyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListLifecyclePolicyRequest.decode(value),
        responseSerialize: (value: ListLifecyclePolicyResponse) =>
            Buffer.from(ListLifecyclePolicyResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListLifecyclePolicyResponse.decode(value),
    },
    /** Changes the state of the specified lifecycle policy. */
    changeState: {
        path: '/yandex.cloud.cloudregistry.v1.LifecyclePolicyService/ChangeState',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ChangeLifecyclePolicyStateRequest) =>
            Buffer.from(ChangeLifecyclePolicyStateRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ChangeLifecyclePolicyStateRequest.decode(value),
        responseSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Empty.decode(value),
    },
    /** Creates a request of a dry run of the lifecycle policy. */
    dryRun: {
        path: '/yandex.cloud.cloudregistry.v1.LifecyclePolicyService/DryRun',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DryRunLifecyclePolicyRequest) =>
            Buffer.from(DryRunLifecyclePolicyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DryRunLifecyclePolicyRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface LifecyclePolicyServiceServer extends UntypedServiceImplementation {
    /** Creates a lifecycle policy in the specified registry. */
    create: handleUnaryCall<CreateLifecyclePolicyRequest, Operation>;
    /** Updates the specified lifecycle policy. */
    update: handleUnaryCall<UpdateLifecyclePolicyRequest, Operation>;
    /** Deletes the specified lifecycle policy. */
    delete: handleUnaryCall<DeleteLifecyclePolicyRequest, Operation>;
    /** Returns the specified lifecycle policy. */
    get: handleUnaryCall<GetLifecyclePolicyRequest, LifecyclePolicy>;
    /** Retrieves the list of lifecycle policies in the specified registry. */
    list: handleUnaryCall<ListLifecyclePolicyRequest, ListLifecyclePolicyResponse>;
    /** Changes the state of the specified lifecycle policy. */
    changeState: handleUnaryCall<ChangeLifecyclePolicyStateRequest, Empty>;
    /** Creates a request of a dry run of the lifecycle policy. */
    dryRun: handleUnaryCall<DryRunLifecyclePolicyRequest, Operation>;
}

export interface LifecyclePolicyServiceClient extends Client {
    /** Creates a lifecycle policy in the specified registry. */
    create(
        request: CreateLifecyclePolicyRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateLifecyclePolicyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateLifecyclePolicyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified lifecycle policy. */
    update(
        request: UpdateLifecyclePolicyRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateLifecyclePolicyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateLifecyclePolicyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified lifecycle policy. */
    delete(
        request: DeleteLifecyclePolicyRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteLifecyclePolicyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteLifecyclePolicyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Returns the specified lifecycle policy. */
    get(
        request: GetLifecyclePolicyRequest,
        callback: (error: ServiceError | null, response: LifecyclePolicy) => void,
    ): ClientUnaryCall;
    get(
        request: GetLifecyclePolicyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: LifecyclePolicy) => void,
    ): ClientUnaryCall;
    get(
        request: GetLifecyclePolicyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: LifecyclePolicy) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of lifecycle policies in the specified registry. */
    list(
        request: ListLifecyclePolicyRequest,
        callback: (error: ServiceError | null, response: ListLifecyclePolicyResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListLifecyclePolicyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListLifecyclePolicyResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListLifecyclePolicyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListLifecyclePolicyResponse) => void,
    ): ClientUnaryCall;
    /** Changes the state of the specified lifecycle policy. */
    changeState(
        request: ChangeLifecyclePolicyStateRequest,
        callback: (error: ServiceError | null, response: Empty) => void,
    ): ClientUnaryCall;
    changeState(
        request: ChangeLifecyclePolicyStateRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Empty) => void,
    ): ClientUnaryCall;
    changeState(
        request: ChangeLifecyclePolicyStateRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Empty) => void,
    ): ClientUnaryCall;
    /** Creates a request of a dry run of the lifecycle policy. */
    dryRun(
        request: DryRunLifecyclePolicyRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    dryRun(
        request: DryRunLifecyclePolicyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    dryRun(
        request: DryRunLifecyclePolicyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const LifecyclePolicyServiceClient = makeGenericClientConstructor(
    LifecyclePolicyServiceService,
    'yandex.cloud.cloudregistry.v1.LifecyclePolicyService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): LifecyclePolicyServiceClient;
    service: typeof LifecyclePolicyServiceService;
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

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

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
