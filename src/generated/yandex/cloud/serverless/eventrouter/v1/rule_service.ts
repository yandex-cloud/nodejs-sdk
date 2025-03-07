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
import { Filter, Rule, Target } from '../../../../../yandex/cloud/serverless/eventrouter/v1/rule';
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../../../yandex/cloud/access/access';

export const protobufPackage = 'yandex.cloud.serverless.eventrouter.v1';

export interface GetRuleRequest {
    /** ID of the rule to return. */
    ruleId: string;
}

export interface ListRulesRequest {
    /** ID of the bus to list rules in. */
    busId: string | undefined;
    /** ID of the folder to list rules in. */
    folderId: string | undefined;
    /** The maximum number of results per response. */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * `next_page_token` returned by a previous list request.
     */
    pageToken: string;
    /**
     * Supported fields for filter:
     *   name
     *   created_at
     */
    filter: string;
}

export interface ListRulesResponse {
    /** List of rules. */
    rules: Rule[];
    /** Token for getting the next page of the list of rules. */
    nextPageToken: string;
}

export interface CreateRuleRequest {
    /** ID of the bus to create a rule for. */
    busId: string;
    /** Name of the rule. */
    name: string;
    /** Description of the rule. */
    description: string;
    /** Labels for the rule. */
    labels: { [key: string]: string };
    /** Filter for the rule. */
    filter?: Filter;
    /** Targets for the rule. */
    targets: Target[];
    /** Flag that disallow deletion of the rule. */
    deletionProtection: boolean;
}

export interface CreateRuleRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateRuleMetadata {
    /** ID of the rule that is being created. */
    ruleId: string;
    /** ID of the bus that the rule belongs to. */
    busId: string;
}

export interface UpdateRuleRequest {
    /** ID of the rule to update. */
    ruleId: string;
    /** Field mask that specifies which fields of the rule are going to be updated. */
    updateMask?: FieldMask;
    /** New name of the rule. */
    name: string;
    /** New description of the rule. */
    description: string;
    /** New labels for the rule. */
    labels: { [key: string]: string };
    /** New filter for the rule. */
    filter?: Filter;
    /** New targets for the rule. */
    targets: Target[];
    /** New flag that disallow deletion of the rule. */
    deletionProtection: boolean;
}

export interface UpdateRuleRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateRuleMetadata {
    /** ID of the rule that is being updated. */
    ruleId: string;
}

export interface DeleteRuleRequest {
    /** ID of the rule to delete. */
    ruleId: string;
}

export interface DeleteRuleMetadata {
    /** ID of the rule that is being deleted. */
    ruleId: string;
}

export interface ListRuleOperationsRequest {
    /** ID of the rule to list operations for. */
    ruleId: string;
    /** The maximum number of results per response. */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * `next_page_token` returned by a previous list request.
     */
    pageToken: string;
    /**
     * Supported attributes for filter:
     *   description
     *   created_at
     *   modified_at
     *   created_by
     *   done
     */
    filter: string;
}

export interface ListRuleOperationsResponse {
    /** List of operations for the specified rule. */
    operations: Operation[];
    /** Token for getting the next page of the list of operations. */
    nextPageToken: string;
}

export interface EnableRuleRequest {
    /** ID of the rule to enable. */
    ruleId: string;
}

export interface EnableRuleMetadata {
    /** ID of the rule that is being enabled. */
    ruleId: string;
}

export interface DisableRuleRequest {
    /** ID of the rule to disable. */
    ruleId: string;
}

export interface DisableRuleMetadata {
    /** ID of the rule that is being disabled. */
    ruleId: string;
}

const baseGetRuleRequest: object = { ruleId: '' };

export const GetRuleRequest = {
    encode(message: GetRuleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.ruleId !== '') {
            writer.uint32(10).string(message.ruleId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetRuleRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetRuleRequest } as GetRuleRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ruleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetRuleRequest {
        const message = { ...baseGetRuleRequest } as GetRuleRequest;
        message.ruleId =
            object.ruleId !== undefined && object.ruleId !== null ? String(object.ruleId) : '';
        return message;
    },

    toJSON(message: GetRuleRequest): unknown {
        const obj: any = {};
        message.ruleId !== undefined && (obj.ruleId = message.ruleId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetRuleRequest>, I>>(object: I): GetRuleRequest {
        const message = { ...baseGetRuleRequest } as GetRuleRequest;
        message.ruleId = object.ruleId ?? '';
        return message;
    },
};

const baseListRulesRequest: object = { pageSize: 0, pageToken: '', filter: '' };

export const ListRulesRequest = {
    encode(message: ListRulesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.busId !== undefined) {
            writer.uint32(10).string(message.busId);
        }
        if (message.folderId !== undefined) {
            writer.uint32(18).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(34).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(42).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListRulesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListRulesRequest } as ListRulesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.busId = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.pageToken = reader.string();
                    break;
                case 5:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListRulesRequest {
        const message = { ...baseListRulesRequest } as ListRulesRequest;
        message.busId =
            object.busId !== undefined && object.busId !== null ? String(object.busId) : undefined;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : undefined;
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

    toJSON(message: ListRulesRequest): unknown {
        const obj: any = {};
        message.busId !== undefined && (obj.busId = message.busId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListRulesRequest>, I>>(object: I): ListRulesRequest {
        const message = { ...baseListRulesRequest } as ListRulesRequest;
        message.busId = object.busId ?? undefined;
        message.folderId = object.folderId ?? undefined;
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListRulesResponse: object = { nextPageToken: '' };

export const ListRulesResponse = {
    encode(message: ListRulesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.rules) {
            Rule.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListRulesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListRulesResponse } as ListRulesResponse;
        message.rules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rules.push(Rule.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListRulesResponse {
        const message = { ...baseListRulesResponse } as ListRulesResponse;
        message.rules = (object.rules ?? []).map((e: any) => Rule.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListRulesResponse): unknown {
        const obj: any = {};
        if (message.rules) {
            obj.rules = message.rules.map((e) => (e ? Rule.toJSON(e) : undefined));
        } else {
            obj.rules = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListRulesResponse>, I>>(object: I): ListRulesResponse {
        const message = { ...baseListRulesResponse } as ListRulesResponse;
        message.rules = object.rules?.map((e) => Rule.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateRuleRequest: object = {
    busId: '',
    name: '',
    description: '',
    deletionProtection: false,
};

export const CreateRuleRequest = {
    encode(message: CreateRuleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.busId !== '') {
            writer.uint32(10).string(message.busId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateRuleRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        if (message.filter !== undefined) {
            Filter.encode(message.filter, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.targets) {
            Target.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(56).bool(message.deletionProtection);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateRuleRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateRuleRequest } as CreateRuleRequest;
        message.labels = {};
        message.targets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.busId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = CreateRuleRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.filter = Filter.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.targets.push(Target.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.deletionProtection = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateRuleRequest {
        const message = { ...baseCreateRuleRequest } as CreateRuleRequest;
        message.busId =
            object.busId !== undefined && object.busId !== null ? String(object.busId) : '';
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
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? Filter.fromJSON(object.filter)
                : undefined;
        message.targets = (object.targets ?? []).map((e: any) => Target.fromJSON(e));
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        return message;
    },

    toJSON(message: CreateRuleRequest): unknown {
        const obj: any = {};
        message.busId !== undefined && (obj.busId = message.busId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.filter !== undefined &&
            (obj.filter = message.filter ? Filter.toJSON(message.filter) : undefined);
        if (message.targets) {
            obj.targets = message.targets.map((e) => (e ? Target.toJSON(e) : undefined));
        } else {
            obj.targets = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateRuleRequest>, I>>(object: I): CreateRuleRequest {
        const message = { ...baseCreateRuleRequest } as CreateRuleRequest;
        message.busId = object.busId ?? '';
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
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? Filter.fromPartial(object.filter)
                : undefined;
        message.targets = object.targets?.map((e) => Target.fromPartial(e)) || [];
        message.deletionProtection = object.deletionProtection ?? false;
        return message;
    },
};

const baseCreateRuleRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateRuleRequest_LabelsEntry = {
    encode(
        message: CreateRuleRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateRuleRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateRuleRequest_LabelsEntry } as CreateRuleRequest_LabelsEntry;
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

    fromJSON(object: any): CreateRuleRequest_LabelsEntry {
        const message = { ...baseCreateRuleRequest_LabelsEntry } as CreateRuleRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateRuleRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateRuleRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateRuleRequest_LabelsEntry {
        const message = { ...baseCreateRuleRequest_LabelsEntry } as CreateRuleRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateRuleMetadata: object = { ruleId: '', busId: '' };

export const CreateRuleMetadata = {
    encode(message: CreateRuleMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.ruleId !== '') {
            writer.uint32(10).string(message.ruleId);
        }
        if (message.busId !== '') {
            writer.uint32(18).string(message.busId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateRuleMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateRuleMetadata } as CreateRuleMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ruleId = reader.string();
                    break;
                case 2:
                    message.busId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateRuleMetadata {
        const message = { ...baseCreateRuleMetadata } as CreateRuleMetadata;
        message.ruleId =
            object.ruleId !== undefined && object.ruleId !== null ? String(object.ruleId) : '';
        message.busId =
            object.busId !== undefined && object.busId !== null ? String(object.busId) : '';
        return message;
    },

    toJSON(message: CreateRuleMetadata): unknown {
        const obj: any = {};
        message.ruleId !== undefined && (obj.ruleId = message.ruleId);
        message.busId !== undefined && (obj.busId = message.busId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateRuleMetadata>, I>>(
        object: I,
    ): CreateRuleMetadata {
        const message = { ...baseCreateRuleMetadata } as CreateRuleMetadata;
        message.ruleId = object.ruleId ?? '';
        message.busId = object.busId ?? '';
        return message;
    },
};

const baseUpdateRuleRequest: object = {
    ruleId: '',
    name: '',
    description: '',
    deletionProtection: false,
};

export const UpdateRuleRequest = {
    encode(message: UpdateRuleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.ruleId !== '') {
            writer.uint32(10).string(message.ruleId);
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
            UpdateRuleRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        if (message.filter !== undefined) {
            Filter.encode(message.filter, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.targets) {
            Target.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(64).bool(message.deletionProtection);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRuleRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateRuleRequest } as UpdateRuleRequest;
        message.labels = {};
        message.targets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ruleId = reader.string();
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
                    const entry5 = UpdateRuleRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.filter = Filter.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.targets.push(Target.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.deletionProtection = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateRuleRequest {
        const message = { ...baseUpdateRuleRequest } as UpdateRuleRequest;
        message.ruleId =
            object.ruleId !== undefined && object.ruleId !== null ? String(object.ruleId) : '';
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
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? Filter.fromJSON(object.filter)
                : undefined;
        message.targets = (object.targets ?? []).map((e: any) => Target.fromJSON(e));
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        return message;
    },

    toJSON(message: UpdateRuleRequest): unknown {
        const obj: any = {};
        message.ruleId !== undefined && (obj.ruleId = message.ruleId);
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
        message.filter !== undefined &&
            (obj.filter = message.filter ? Filter.toJSON(message.filter) : undefined);
        if (message.targets) {
            obj.targets = message.targets.map((e) => (e ? Target.toJSON(e) : undefined));
        } else {
            obj.targets = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateRuleRequest>, I>>(object: I): UpdateRuleRequest {
        const message = { ...baseUpdateRuleRequest } as UpdateRuleRequest;
        message.ruleId = object.ruleId ?? '';
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
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? Filter.fromPartial(object.filter)
                : undefined;
        message.targets = object.targets?.map((e) => Target.fromPartial(e)) || [];
        message.deletionProtection = object.deletionProtection ?? false;
        return message;
    },
};

const baseUpdateRuleRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateRuleRequest_LabelsEntry = {
    encode(
        message: UpdateRuleRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRuleRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateRuleRequest_LabelsEntry } as UpdateRuleRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateRuleRequest_LabelsEntry {
        const message = { ...baseUpdateRuleRequest_LabelsEntry } as UpdateRuleRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateRuleRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateRuleRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateRuleRequest_LabelsEntry {
        const message = { ...baseUpdateRuleRequest_LabelsEntry } as UpdateRuleRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateRuleMetadata: object = { ruleId: '' };

export const UpdateRuleMetadata = {
    encode(message: UpdateRuleMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.ruleId !== '') {
            writer.uint32(10).string(message.ruleId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRuleMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateRuleMetadata } as UpdateRuleMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ruleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateRuleMetadata {
        const message = { ...baseUpdateRuleMetadata } as UpdateRuleMetadata;
        message.ruleId =
            object.ruleId !== undefined && object.ruleId !== null ? String(object.ruleId) : '';
        return message;
    },

    toJSON(message: UpdateRuleMetadata): unknown {
        const obj: any = {};
        message.ruleId !== undefined && (obj.ruleId = message.ruleId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateRuleMetadata>, I>>(
        object: I,
    ): UpdateRuleMetadata {
        const message = { ...baseUpdateRuleMetadata } as UpdateRuleMetadata;
        message.ruleId = object.ruleId ?? '';
        return message;
    },
};

const baseDeleteRuleRequest: object = { ruleId: '' };

export const DeleteRuleRequest = {
    encode(message: DeleteRuleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.ruleId !== '') {
            writer.uint32(10).string(message.ruleId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRuleRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteRuleRequest } as DeleteRuleRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ruleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteRuleRequest {
        const message = { ...baseDeleteRuleRequest } as DeleteRuleRequest;
        message.ruleId =
            object.ruleId !== undefined && object.ruleId !== null ? String(object.ruleId) : '';
        return message;
    },

    toJSON(message: DeleteRuleRequest): unknown {
        const obj: any = {};
        message.ruleId !== undefined && (obj.ruleId = message.ruleId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteRuleRequest>, I>>(object: I): DeleteRuleRequest {
        const message = { ...baseDeleteRuleRequest } as DeleteRuleRequest;
        message.ruleId = object.ruleId ?? '';
        return message;
    },
};

const baseDeleteRuleMetadata: object = { ruleId: '' };

export const DeleteRuleMetadata = {
    encode(message: DeleteRuleMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.ruleId !== '') {
            writer.uint32(10).string(message.ruleId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRuleMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteRuleMetadata } as DeleteRuleMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ruleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteRuleMetadata {
        const message = { ...baseDeleteRuleMetadata } as DeleteRuleMetadata;
        message.ruleId =
            object.ruleId !== undefined && object.ruleId !== null ? String(object.ruleId) : '';
        return message;
    },

    toJSON(message: DeleteRuleMetadata): unknown {
        const obj: any = {};
        message.ruleId !== undefined && (obj.ruleId = message.ruleId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteRuleMetadata>, I>>(
        object: I,
    ): DeleteRuleMetadata {
        const message = { ...baseDeleteRuleMetadata } as DeleteRuleMetadata;
        message.ruleId = object.ruleId ?? '';
        return message;
    },
};

const baseListRuleOperationsRequest: object = {
    ruleId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListRuleOperationsRequest = {
    encode(
        message: ListRuleOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.ruleId !== '') {
            writer.uint32(10).string(message.ruleId);
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListRuleOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListRuleOperationsRequest } as ListRuleOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ruleId = reader.string();
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

    fromJSON(object: any): ListRuleOperationsRequest {
        const message = { ...baseListRuleOperationsRequest } as ListRuleOperationsRequest;
        message.ruleId =
            object.ruleId !== undefined && object.ruleId !== null ? String(object.ruleId) : '';
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

    toJSON(message: ListRuleOperationsRequest): unknown {
        const obj: any = {};
        message.ruleId !== undefined && (obj.ruleId = message.ruleId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListRuleOperationsRequest>, I>>(
        object: I,
    ): ListRuleOperationsRequest {
        const message = { ...baseListRuleOperationsRequest } as ListRuleOperationsRequest;
        message.ruleId = object.ruleId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListRuleOperationsResponse: object = { nextPageToken: '' };

export const ListRuleOperationsResponse = {
    encode(
        message: ListRuleOperationsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.operations) {
            Operation.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListRuleOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListRuleOperationsResponse } as ListRuleOperationsResponse;
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(Operation.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListRuleOperationsResponse {
        const message = { ...baseListRuleOperationsResponse } as ListRuleOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListRuleOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListRuleOperationsResponse>, I>>(
        object: I,
    ): ListRuleOperationsResponse {
        const message = { ...baseListRuleOperationsResponse } as ListRuleOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseEnableRuleRequest: object = { ruleId: '' };

export const EnableRuleRequest = {
    encode(message: EnableRuleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.ruleId !== '') {
            writer.uint32(10).string(message.ruleId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EnableRuleRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEnableRuleRequest } as EnableRuleRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ruleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): EnableRuleRequest {
        const message = { ...baseEnableRuleRequest } as EnableRuleRequest;
        message.ruleId =
            object.ruleId !== undefined && object.ruleId !== null ? String(object.ruleId) : '';
        return message;
    },

    toJSON(message: EnableRuleRequest): unknown {
        const obj: any = {};
        message.ruleId !== undefined && (obj.ruleId = message.ruleId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<EnableRuleRequest>, I>>(object: I): EnableRuleRequest {
        const message = { ...baseEnableRuleRequest } as EnableRuleRequest;
        message.ruleId = object.ruleId ?? '';
        return message;
    },
};

const baseEnableRuleMetadata: object = { ruleId: '' };

export const EnableRuleMetadata = {
    encode(message: EnableRuleMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.ruleId !== '') {
            writer.uint32(10).string(message.ruleId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EnableRuleMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEnableRuleMetadata } as EnableRuleMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ruleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): EnableRuleMetadata {
        const message = { ...baseEnableRuleMetadata } as EnableRuleMetadata;
        message.ruleId =
            object.ruleId !== undefined && object.ruleId !== null ? String(object.ruleId) : '';
        return message;
    },

    toJSON(message: EnableRuleMetadata): unknown {
        const obj: any = {};
        message.ruleId !== undefined && (obj.ruleId = message.ruleId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<EnableRuleMetadata>, I>>(
        object: I,
    ): EnableRuleMetadata {
        const message = { ...baseEnableRuleMetadata } as EnableRuleMetadata;
        message.ruleId = object.ruleId ?? '';
        return message;
    },
};

const baseDisableRuleRequest: object = { ruleId: '' };

export const DisableRuleRequest = {
    encode(message: DisableRuleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.ruleId !== '') {
            writer.uint32(10).string(message.ruleId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DisableRuleRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDisableRuleRequest } as DisableRuleRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ruleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DisableRuleRequest {
        const message = { ...baseDisableRuleRequest } as DisableRuleRequest;
        message.ruleId =
            object.ruleId !== undefined && object.ruleId !== null ? String(object.ruleId) : '';
        return message;
    },

    toJSON(message: DisableRuleRequest): unknown {
        const obj: any = {};
        message.ruleId !== undefined && (obj.ruleId = message.ruleId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DisableRuleRequest>, I>>(
        object: I,
    ): DisableRuleRequest {
        const message = { ...baseDisableRuleRequest } as DisableRuleRequest;
        message.ruleId = object.ruleId ?? '';
        return message;
    },
};

const baseDisableRuleMetadata: object = { ruleId: '' };

export const DisableRuleMetadata = {
    encode(message: DisableRuleMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.ruleId !== '') {
            writer.uint32(10).string(message.ruleId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DisableRuleMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDisableRuleMetadata } as DisableRuleMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ruleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DisableRuleMetadata {
        const message = { ...baseDisableRuleMetadata } as DisableRuleMetadata;
        message.ruleId =
            object.ruleId !== undefined && object.ruleId !== null ? String(object.ruleId) : '';
        return message;
    },

    toJSON(message: DisableRuleMetadata): unknown {
        const obj: any = {};
        message.ruleId !== undefined && (obj.ruleId = message.ruleId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DisableRuleMetadata>, I>>(
        object: I,
    ): DisableRuleMetadata {
        const message = { ...baseDisableRuleMetadata } as DisableRuleMetadata;
        message.ruleId = object.ruleId ?? '';
        return message;
    },
};

/** A set of methods for managing rules for serverless eventrouter. */
export const RuleServiceService = {
    /**
     * Returns the specified rules.
     * To get the list of all available buses, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.serverless.eventrouter.v1.RuleService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetRuleRequest) =>
            Buffer.from(GetRuleRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetRuleRequest.decode(value),
        responseSerialize: (value: Rule) => Buffer.from(Rule.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Rule.decode(value),
    },
    /** Retrieves the list of rules in the specified folder. */
    list: {
        path: '/yandex.cloud.serverless.eventrouter.v1.RuleService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListRulesRequest) =>
            Buffer.from(ListRulesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListRulesRequest.decode(value),
        responseSerialize: (value: ListRulesResponse) =>
            Buffer.from(ListRulesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListRulesResponse.decode(value),
    },
    /** Creates a rule in the specified folder. */
    create: {
        path: '/yandex.cloud.serverless.eventrouter.v1.RuleService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateRuleRequest) =>
            Buffer.from(CreateRuleRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateRuleRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified rule. */
    update: {
        path: '/yandex.cloud.serverless.eventrouter.v1.RuleService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateRuleRequest) =>
            Buffer.from(UpdateRuleRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateRuleRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified rule. */
    delete: {
        path: '/yandex.cloud.serverless.eventrouter.v1.RuleService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteRuleRequest) =>
            Buffer.from(DeleteRuleRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteRuleRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Enables the specified rule. */
    enable: {
        path: '/yandex.cloud.serverless.eventrouter.v1.RuleService/Enable',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: EnableRuleRequest) =>
            Buffer.from(EnableRuleRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => EnableRuleRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Disables the specified rule. */
    disable: {
        path: '/yandex.cloud.serverless.eventrouter.v1.RuleService/Disable',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DisableRuleRequest) =>
            Buffer.from(DisableRuleRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DisableRuleRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists existing access bindings for the specified rule. */
    listAccessBindings: {
        path: '/yandex.cloud.serverless.eventrouter.v1.RuleService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the rule. */
    setAccessBindings: {
        path: '/yandex.cloud.serverless.eventrouter.v1.RuleService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetAccessBindingsRequest) =>
            Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates access bindings for the specified rule. */
    updateAccessBindings: {
        path: '/yandex.cloud.serverless.eventrouter.v1.RuleService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified rule. */
    listOperations: {
        path: '/yandex.cloud.serverless.eventrouter.v1.RuleService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListRuleOperationsRequest) =>
            Buffer.from(ListRuleOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListRuleOperationsRequest.decode(value),
        responseSerialize: (value: ListRuleOperationsResponse) =>
            Buffer.from(ListRuleOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListRuleOperationsResponse.decode(value),
    },
} as const;

export interface RuleServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified rules.
     * To get the list of all available buses, make a [List] request.
     */
    get: handleUnaryCall<GetRuleRequest, Rule>;
    /** Retrieves the list of rules in the specified folder. */
    list: handleUnaryCall<ListRulesRequest, ListRulesResponse>;
    /** Creates a rule in the specified folder. */
    create: handleUnaryCall<CreateRuleRequest, Operation>;
    /** Updates the specified rule. */
    update: handleUnaryCall<UpdateRuleRequest, Operation>;
    /** Deletes the specified rule. */
    delete: handleUnaryCall<DeleteRuleRequest, Operation>;
    /** Enables the specified rule. */
    enable: handleUnaryCall<EnableRuleRequest, Operation>;
    /** Disables the specified rule. */
    disable: handleUnaryCall<DisableRuleRequest, Operation>;
    /** Lists existing access bindings for the specified rule. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the rule. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified rule. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
    /** Lists operations for the specified rule. */
    listOperations: handleUnaryCall<ListRuleOperationsRequest, ListRuleOperationsResponse>;
}

export interface RuleServiceClient extends Client {
    /**
     * Returns the specified rules.
     * To get the list of all available buses, make a [List] request.
     */
    get(
        request: GetRuleRequest,
        callback: (error: ServiceError | null, response: Rule) => void,
    ): ClientUnaryCall;
    get(
        request: GetRuleRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Rule) => void,
    ): ClientUnaryCall;
    get(
        request: GetRuleRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Rule) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of rules in the specified folder. */
    list(
        request: ListRulesRequest,
        callback: (error: ServiceError | null, response: ListRulesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListRulesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListRulesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListRulesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListRulesResponse) => void,
    ): ClientUnaryCall;
    /** Creates a rule in the specified folder. */
    create(
        request: CreateRuleRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateRuleRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateRuleRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified rule. */
    update(
        request: UpdateRuleRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateRuleRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateRuleRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified rule. */
    delete(
        request: DeleteRuleRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteRuleRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteRuleRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Enables the specified rule. */
    enable(
        request: EnableRuleRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    enable(
        request: EnableRuleRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    enable(
        request: EnableRuleRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Disables the specified rule. */
    disable(
        request: DisableRuleRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    disable(
        request: DisableRuleRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    disable(
        request: DisableRuleRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists existing access bindings for the specified rule. */
    listAccessBindings(
        request: ListAccessBindingsRequest,
        callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
    ): ClientUnaryCall;
    /** Sets access bindings for the rule. */
    setAccessBindings(
        request: SetAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates access bindings for the specified rule. */
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists operations for the specified rule. */
    listOperations(
        request: ListRuleOperationsRequest,
        callback: (error: ServiceError | null, response: ListRuleOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListRuleOperationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListRuleOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListRuleOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListRuleOperationsResponse) => void,
    ): ClientUnaryCall;
}

export const RuleServiceClient = makeGenericClientConstructor(
    RuleServiceService,
    'yandex.cloud.serverless.eventrouter.v1.RuleService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): RuleServiceClient;
    service: typeof RuleServiceService;
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
