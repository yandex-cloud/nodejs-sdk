/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
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
import { ResourceOptions } from '../../../../yandex/cloud/cdn/v1/resource';
import { Rule } from '../../../../yandex/cloud/cdn/v1/rule';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.cdn.v1';

export interface ListResourceRulesRequest {
    $type: 'yandex.cloud.cdn.v1.ListResourceRulesRequest';
    /** ID of resource. */
    resourceId: string;
}

export interface ListResourceRulesResponse {
    $type: 'yandex.cloud.cdn.v1.ListResourceRulesResponse';
    /** List of the resource rules. */
    rules: Rule[];
}

export interface CreateResourceRuleRequest {
    $type: 'yandex.cloud.cdn.v1.CreateResourceRuleRequest';
    /** ID of resource. */
    resourceId: string;
    /** Name of created resource rule. */
    name: string;
    /** Resource rule pattern. */
    rulePattern: string;
    options?: ResourceOptions;
}

export interface CreateResourceRuleMetadata {
    $type: 'yandex.cloud.cdn.v1.CreateResourceRuleMetadata';
    /** ID of resource. */
    resourceId: string;
    /** ID of created resource rule. */
    ruleId: number;
}

export interface GetResourceRuleRequest {
    $type: 'yandex.cloud.cdn.v1.GetResourceRuleRequest';
    /** ID of resource. */
    resourceId: string;
    /** ID of the requested resource rule. */
    ruleId: number;
}

export interface UpdateResourceRuleRequest {
    $type: 'yandex.cloud.cdn.v1.UpdateResourceRuleRequest';
    /** ID of resource. */
    resourceId: string;
    /** ID of updated resource rule. */
    ruleId: number;
    /** Name of updated resource rule. */
    name: string;
    /** Resource rule pattern. */
    rulePattern: string;
    options?: ResourceOptions;
}

export interface UpdateResourceRuleMetadata {
    $type: 'yandex.cloud.cdn.v1.UpdateResourceRuleMetadata';
    /** ID of resource. */
    resourceId: string;
    /** ID of updated resource rule. */
    ruleId: number;
}

export interface DeleteResourceRuleRequest {
    $type: 'yandex.cloud.cdn.v1.DeleteResourceRuleRequest';
    /** ID of resource. */
    resourceId: string;
    /** ID of deleted resource rule. */
    ruleId: number;
}

export interface DeleteResourceRuleMetadata {
    $type: 'yandex.cloud.cdn.v1.DeleteResourceRuleMetadata';
    /** ID of resource. */
    resourceId: string;
    /** ID of deleted resource rule. */
    ruleId: number;
}

const baseListResourceRulesRequest: object = {
    $type: 'yandex.cloud.cdn.v1.ListResourceRulesRequest',
    resourceId: '',
};

export const ListResourceRulesRequest = {
    $type: 'yandex.cloud.cdn.v1.ListResourceRulesRequest' as const,

    encode(
        message: ListResourceRulesRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListResourceRulesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListResourceRulesRequest } as ListResourceRulesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListResourceRulesRequest {
        const message = { ...baseListResourceRulesRequest } as ListResourceRulesRequest;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        return message;
    },

    toJSON(message: ListResourceRulesRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListResourceRulesRequest>, I>>(
        object: I,
    ): ListResourceRulesRequest {
        const message = { ...baseListResourceRulesRequest } as ListResourceRulesRequest;
        message.resourceId = object.resourceId ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListResourceRulesRequest.$type, ListResourceRulesRequest);

const baseListResourceRulesResponse: object = {
    $type: 'yandex.cloud.cdn.v1.ListResourceRulesResponse',
};

export const ListResourceRulesResponse = {
    $type: 'yandex.cloud.cdn.v1.ListResourceRulesResponse' as const,

    encode(
        message: ListResourceRulesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.rules) {
            Rule.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListResourceRulesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListResourceRulesResponse } as ListResourceRulesResponse;
        message.rules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rules.push(Rule.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListResourceRulesResponse {
        const message = { ...baseListResourceRulesResponse } as ListResourceRulesResponse;
        message.rules = (object.rules ?? []).map((e: any) => Rule.fromJSON(e));
        return message;
    },

    toJSON(message: ListResourceRulesResponse): unknown {
        const obj: any = {};
        if (message.rules) {
            obj.rules = message.rules.map((e) => (e ? Rule.toJSON(e) : undefined));
        } else {
            obj.rules = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListResourceRulesResponse>, I>>(
        object: I,
    ): ListResourceRulesResponse {
        const message = { ...baseListResourceRulesResponse } as ListResourceRulesResponse;
        message.rules = object.rules?.map((e) => Rule.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(ListResourceRulesResponse.$type, ListResourceRulesResponse);

const baseCreateResourceRuleRequest: object = {
    $type: 'yandex.cloud.cdn.v1.CreateResourceRuleRequest',
    resourceId: '',
    name: '',
    rulePattern: '',
};

export const CreateResourceRuleRequest = {
    $type: 'yandex.cloud.cdn.v1.CreateResourceRuleRequest' as const,

    encode(
        message: CreateResourceRuleRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.rulePattern !== '') {
            writer.uint32(26).string(message.rulePattern);
        }
        if (message.options !== undefined) {
            ResourceOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateResourceRuleRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateResourceRuleRequest } as CreateResourceRuleRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.rulePattern = reader.string();
                    break;
                case 4:
                    message.options = ResourceOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateResourceRuleRequest {
        const message = { ...baseCreateResourceRuleRequest } as CreateResourceRuleRequest;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.rulePattern =
            object.rulePattern !== undefined && object.rulePattern !== null
                ? String(object.rulePattern)
                : '';
        message.options =
            object.options !== undefined && object.options !== null
                ? ResourceOptions.fromJSON(object.options)
                : undefined;
        return message;
    },

    toJSON(message: CreateResourceRuleRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.name !== undefined && (obj.name = message.name);
        message.rulePattern !== undefined && (obj.rulePattern = message.rulePattern);
        message.options !== undefined &&
            (obj.options = message.options ? ResourceOptions.toJSON(message.options) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateResourceRuleRequest>, I>>(
        object: I,
    ): CreateResourceRuleRequest {
        const message = { ...baseCreateResourceRuleRequest } as CreateResourceRuleRequest;
        message.resourceId = object.resourceId ?? '';
        message.name = object.name ?? '';
        message.rulePattern = object.rulePattern ?? '';
        message.options =
            object.options !== undefined && object.options !== null
                ? ResourceOptions.fromPartial(object.options)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(CreateResourceRuleRequest.$type, CreateResourceRuleRequest);

const baseCreateResourceRuleMetadata: object = {
    $type: 'yandex.cloud.cdn.v1.CreateResourceRuleMetadata',
    resourceId: '',
    ruleId: 0,
};

export const CreateResourceRuleMetadata = {
    $type: 'yandex.cloud.cdn.v1.CreateResourceRuleMetadata' as const,

    encode(
        message: CreateResourceRuleMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.ruleId !== 0) {
            writer.uint32(16).int64(message.ruleId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateResourceRuleMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateResourceRuleMetadata } as CreateResourceRuleMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.ruleId = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateResourceRuleMetadata {
        const message = { ...baseCreateResourceRuleMetadata } as CreateResourceRuleMetadata;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        message.ruleId =
            object.ruleId !== undefined && object.ruleId !== null ? Number(object.ruleId) : 0;
        return message;
    },

    toJSON(message: CreateResourceRuleMetadata): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.ruleId !== undefined && (obj.ruleId = Math.round(message.ruleId));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateResourceRuleMetadata>, I>>(
        object: I,
    ): CreateResourceRuleMetadata {
        const message = { ...baseCreateResourceRuleMetadata } as CreateResourceRuleMetadata;
        message.resourceId = object.resourceId ?? '';
        message.ruleId = object.ruleId ?? 0;
        return message;
    },
};

messageTypeRegistry.set(CreateResourceRuleMetadata.$type, CreateResourceRuleMetadata);

const baseGetResourceRuleRequest: object = {
    $type: 'yandex.cloud.cdn.v1.GetResourceRuleRequest',
    resourceId: '',
    ruleId: 0,
};

export const GetResourceRuleRequest = {
    $type: 'yandex.cloud.cdn.v1.GetResourceRuleRequest' as const,

    encode(message: GetResourceRuleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.ruleId !== 0) {
            writer.uint32(16).int64(message.ruleId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetResourceRuleRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetResourceRuleRequest } as GetResourceRuleRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.ruleId = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetResourceRuleRequest {
        const message = { ...baseGetResourceRuleRequest } as GetResourceRuleRequest;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        message.ruleId =
            object.ruleId !== undefined && object.ruleId !== null ? Number(object.ruleId) : 0;
        return message;
    },

    toJSON(message: GetResourceRuleRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.ruleId !== undefined && (obj.ruleId = Math.round(message.ruleId));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetResourceRuleRequest>, I>>(
        object: I,
    ): GetResourceRuleRequest {
        const message = { ...baseGetResourceRuleRequest } as GetResourceRuleRequest;
        message.resourceId = object.resourceId ?? '';
        message.ruleId = object.ruleId ?? 0;
        return message;
    },
};

messageTypeRegistry.set(GetResourceRuleRequest.$type, GetResourceRuleRequest);

const baseUpdateResourceRuleRequest: object = {
    $type: 'yandex.cloud.cdn.v1.UpdateResourceRuleRequest',
    resourceId: '',
    ruleId: 0,
    name: '',
    rulePattern: '',
};

export const UpdateResourceRuleRequest = {
    $type: 'yandex.cloud.cdn.v1.UpdateResourceRuleRequest' as const,

    encode(
        message: UpdateResourceRuleRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.ruleId !== 0) {
            writer.uint32(16).int64(message.ruleId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.rulePattern !== '') {
            writer.uint32(34).string(message.rulePattern);
        }
        if (message.options !== undefined) {
            ResourceOptions.encode(message.options, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateResourceRuleRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateResourceRuleRequest } as UpdateResourceRuleRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.ruleId = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.rulePattern = reader.string();
                    break;
                case 5:
                    message.options = ResourceOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateResourceRuleRequest {
        const message = { ...baseUpdateResourceRuleRequest } as UpdateResourceRuleRequest;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        message.ruleId =
            object.ruleId !== undefined && object.ruleId !== null ? Number(object.ruleId) : 0;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.rulePattern =
            object.rulePattern !== undefined && object.rulePattern !== null
                ? String(object.rulePattern)
                : '';
        message.options =
            object.options !== undefined && object.options !== null
                ? ResourceOptions.fromJSON(object.options)
                : undefined;
        return message;
    },

    toJSON(message: UpdateResourceRuleRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.ruleId !== undefined && (obj.ruleId = Math.round(message.ruleId));
        message.name !== undefined && (obj.name = message.name);
        message.rulePattern !== undefined && (obj.rulePattern = message.rulePattern);
        message.options !== undefined &&
            (obj.options = message.options ? ResourceOptions.toJSON(message.options) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateResourceRuleRequest>, I>>(
        object: I,
    ): UpdateResourceRuleRequest {
        const message = { ...baseUpdateResourceRuleRequest } as UpdateResourceRuleRequest;
        message.resourceId = object.resourceId ?? '';
        message.ruleId = object.ruleId ?? 0;
        message.name = object.name ?? '';
        message.rulePattern = object.rulePattern ?? '';
        message.options =
            object.options !== undefined && object.options !== null
                ? ResourceOptions.fromPartial(object.options)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(UpdateResourceRuleRequest.$type, UpdateResourceRuleRequest);

const baseUpdateResourceRuleMetadata: object = {
    $type: 'yandex.cloud.cdn.v1.UpdateResourceRuleMetadata',
    resourceId: '',
    ruleId: 0,
};

export const UpdateResourceRuleMetadata = {
    $type: 'yandex.cloud.cdn.v1.UpdateResourceRuleMetadata' as const,

    encode(
        message: UpdateResourceRuleMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.ruleId !== 0) {
            writer.uint32(16).int64(message.ruleId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateResourceRuleMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateResourceRuleMetadata } as UpdateResourceRuleMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.ruleId = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateResourceRuleMetadata {
        const message = { ...baseUpdateResourceRuleMetadata } as UpdateResourceRuleMetadata;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        message.ruleId =
            object.ruleId !== undefined && object.ruleId !== null ? Number(object.ruleId) : 0;
        return message;
    },

    toJSON(message: UpdateResourceRuleMetadata): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.ruleId !== undefined && (obj.ruleId = Math.round(message.ruleId));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateResourceRuleMetadata>, I>>(
        object: I,
    ): UpdateResourceRuleMetadata {
        const message = { ...baseUpdateResourceRuleMetadata } as UpdateResourceRuleMetadata;
        message.resourceId = object.resourceId ?? '';
        message.ruleId = object.ruleId ?? 0;
        return message;
    },
};

messageTypeRegistry.set(UpdateResourceRuleMetadata.$type, UpdateResourceRuleMetadata);

const baseDeleteResourceRuleRequest: object = {
    $type: 'yandex.cloud.cdn.v1.DeleteResourceRuleRequest',
    resourceId: '',
    ruleId: 0,
};

export const DeleteResourceRuleRequest = {
    $type: 'yandex.cloud.cdn.v1.DeleteResourceRuleRequest' as const,

    encode(
        message: DeleteResourceRuleRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.ruleId !== 0) {
            writer.uint32(16).int64(message.ruleId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteResourceRuleRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteResourceRuleRequest } as DeleteResourceRuleRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.ruleId = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteResourceRuleRequest {
        const message = { ...baseDeleteResourceRuleRequest } as DeleteResourceRuleRequest;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        message.ruleId =
            object.ruleId !== undefined && object.ruleId !== null ? Number(object.ruleId) : 0;
        return message;
    },

    toJSON(message: DeleteResourceRuleRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.ruleId !== undefined && (obj.ruleId = Math.round(message.ruleId));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteResourceRuleRequest>, I>>(
        object: I,
    ): DeleteResourceRuleRequest {
        const message = { ...baseDeleteResourceRuleRequest } as DeleteResourceRuleRequest;
        message.resourceId = object.resourceId ?? '';
        message.ruleId = object.ruleId ?? 0;
        return message;
    },
};

messageTypeRegistry.set(DeleteResourceRuleRequest.$type, DeleteResourceRuleRequest);

const baseDeleteResourceRuleMetadata: object = {
    $type: 'yandex.cloud.cdn.v1.DeleteResourceRuleMetadata',
    resourceId: '',
    ruleId: 0,
};

export const DeleteResourceRuleMetadata = {
    $type: 'yandex.cloud.cdn.v1.DeleteResourceRuleMetadata' as const,

    encode(
        message: DeleteResourceRuleMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.ruleId !== 0) {
            writer.uint32(16).int64(message.ruleId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteResourceRuleMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteResourceRuleMetadata } as DeleteResourceRuleMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.ruleId = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteResourceRuleMetadata {
        const message = { ...baseDeleteResourceRuleMetadata } as DeleteResourceRuleMetadata;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        message.ruleId =
            object.ruleId !== undefined && object.ruleId !== null ? Number(object.ruleId) : 0;
        return message;
    },

    toJSON(message: DeleteResourceRuleMetadata): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.ruleId !== undefined && (obj.ruleId = Math.round(message.ruleId));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteResourceRuleMetadata>, I>>(
        object: I,
    ): DeleteResourceRuleMetadata {
        const message = { ...baseDeleteResourceRuleMetadata } as DeleteResourceRuleMetadata;
        message.resourceId = object.resourceId ?? '';
        message.ruleId = object.ruleId ?? 0;
        return message;
    },
};

messageTypeRegistry.set(DeleteResourceRuleMetadata.$type, DeleteResourceRuleMetadata);

/**
 * Rules management service.
 *
 * Used for Resources Rules management.
 */
export const ResourceRulesServiceService = {
    /** List all rules for specified resource. */
    list: {
        path: '/yandex.cloud.cdn.v1.ResourceRulesService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListResourceRulesRequest) =>
            Buffer.from(ListResourceRulesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListResourceRulesRequest.decode(value),
        responseSerialize: (value: ListResourceRulesResponse) =>
            Buffer.from(ListResourceRulesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListResourceRulesResponse.decode(value),
    },
    /** Create new resource rule with specified unique name and rule patter. */
    create: {
        path: '/yandex.cloud.cdn.v1.ResourceRulesService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateResourceRuleRequest) =>
            Buffer.from(CreateResourceRuleRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateResourceRuleRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Get specified by id resource rule. */
    get: {
        path: '/yandex.cloud.cdn.v1.ResourceRulesService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetResourceRuleRequest) =>
            Buffer.from(GetResourceRuleRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetResourceRuleRequest.decode(value),
        responseSerialize: (value: Rule) => Buffer.from(Rule.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Rule.decode(value),
    },
    /** Update specified by id resource rule. */
    update: {
        path: '/yandex.cloud.cdn.v1.ResourceRulesService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateResourceRuleRequest) =>
            Buffer.from(UpdateResourceRuleRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateResourceRuleRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Delete specified by id resource rule. */
    delete: {
        path: '/yandex.cloud.cdn.v1.ResourceRulesService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteResourceRuleRequest) =>
            Buffer.from(DeleteResourceRuleRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteResourceRuleRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface ResourceRulesServiceServer extends UntypedServiceImplementation {
    /** List all rules for specified resource. */
    list: handleUnaryCall<ListResourceRulesRequest, ListResourceRulesResponse>;
    /** Create new resource rule with specified unique name and rule patter. */
    create: handleUnaryCall<CreateResourceRuleRequest, Operation>;
    /** Get specified by id resource rule. */
    get: handleUnaryCall<GetResourceRuleRequest, Rule>;
    /** Update specified by id resource rule. */
    update: handleUnaryCall<UpdateResourceRuleRequest, Operation>;
    /** Delete specified by id resource rule. */
    delete: handleUnaryCall<DeleteResourceRuleRequest, Operation>;
}

export interface ResourceRulesServiceClient extends Client {
    /** List all rules for specified resource. */
    list(
        request: ListResourceRulesRequest,
        callback: (error: ServiceError | null, response: ListResourceRulesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListResourceRulesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListResourceRulesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListResourceRulesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListResourceRulesResponse) => void,
    ): ClientUnaryCall;
    /** Create new resource rule with specified unique name and rule patter. */
    create(
        request: CreateResourceRuleRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateResourceRuleRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateResourceRuleRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Get specified by id resource rule. */
    get(
        request: GetResourceRuleRequest,
        callback: (error: ServiceError | null, response: Rule) => void,
    ): ClientUnaryCall;
    get(
        request: GetResourceRuleRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Rule) => void,
    ): ClientUnaryCall;
    get(
        request: GetResourceRuleRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Rule) => void,
    ): ClientUnaryCall;
    /** Update specified by id resource rule. */
    update(
        request: UpdateResourceRuleRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateResourceRuleRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateResourceRuleRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Delete specified by id resource rule. */
    delete(
        request: DeleteResourceRuleRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteResourceRuleRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteResourceRuleRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const ResourceRulesServiceClient = makeGenericClientConstructor(
    ResourceRulesServiceService,
    'yandex.cloud.cdn.v1.ResourceRulesService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ResourceRulesServiceClient;
    service: typeof ResourceRulesServiceService;
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
