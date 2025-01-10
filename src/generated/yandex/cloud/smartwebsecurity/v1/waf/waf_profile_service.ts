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
    WafProfile_AnalyzeRequestBody,
    WafProfile,
    WafProfileRule,
    WafProfileExclusionRule,
    WafProfile_CoreRuleSet,
} from '../../../../../yandex/cloud/smartwebsecurity/v1/waf/waf_profile';
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Operation } from '../../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.smartwebsecurity.v1.waf';

export interface GetWafProfileRequest {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.GetWafProfileRequest';
    /** ID of the WafProfile resource to return. */
    wafProfileId: string;
}

export interface ListWafProfilesRequest {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.ListWafProfilesRequest';
    /**
     * ID of the folder that the WAF profile belongs to.
     * Currently page_size, page_token, filter and order_by are not supported and List method will return all WAF profiles in the folder.
     */
    folderId: string;
}

export interface ListWafProfilesResponse {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.ListWafProfilesResponse';
    /**
     * List of WafProfile resources.
     * Currently next_page_token is not supported and List method will return all WAF profiles in the folder.
     */
    wafProfiles: WafProfile[];
}

export interface CreateWafProfileRequest {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.CreateWafProfileRequest';
    /** ID of the folder to create a WAF profile in. */
    folderId: string;
    /** Name of the WAF profile. The name is unique within the folder. 1-50 characters long. */
    name: string;
    /** Optional description of the WAF profile. */
    description: string;
    /** Labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: { [key: string]: string };
    /** Settings for each rule in rule set. */
    rules: WafProfileRule[];
    /** List of exclusion rules. See [Rules](/docs/smartwebsecurity/concepts/waf#exclusion-rules). */
    exclusionRules: WafProfileExclusionRule[];
    /** Core rule set settings. See [Basic rule set](/docs/smartwebsecurity/concepts/waf#rules-set) for details. */
    coreRuleSet?: WafProfile_CoreRuleSet | undefined;
    /** Parameters for request body analyzer. */
    analyzeRequestBody?: WafProfile_AnalyzeRequestBody;
}

export interface CreateWafProfileRequest_LabelsEntry {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.CreateWafProfileRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface CreateWafProfileMetadata {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.CreateWafProfileMetadata';
    /** ID of the WAF profile that is being created. */
    wafProfileId: string;
}

export interface UpdateWafProfileRequest {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.UpdateWafProfileRequest';
    /** ID of the WAF profile to update. */
    wafProfileId: string;
    /** Field mask that specifies which fields of the WafProfile resource are going to be updated. */
    updateMask?: FieldMask;
    /** Name of the WAF profile. The name is unique within the folder. 1-50 characters long. */
    name: string;
    /** Optional description of the WAF profile. */
    description: string;
    /** Labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: { [key: string]: string };
    /** Settings for each rule in rule set. */
    rules: WafProfileRule[];
    /** List of exclusion rules. See [Rules](/docs/smartwebsecurity/concepts/waf#exclusion-rules). */
    exclusionRules: WafProfileExclusionRule[];
    /** Core rule set settings. See [Basic rule set](/docs/smartwebsecurity/concepts/waf#rules-set) for details. */
    coreRuleSet?: WafProfile_CoreRuleSet | undefined;
    /** Parameters for request body analyzer. */
    analyzeRequestBody?: WafProfile_AnalyzeRequestBody;
}

export interface UpdateWafProfileRequest_LabelsEntry {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.UpdateWafProfileRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface UpdateWafProfileMetadata {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.UpdateWafProfileMetadata';
    /** ID of the WafProfile resource that is being updated. */
    wafProfileId: string;
}

export interface DeleteWafProfileRequest {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.DeleteWafProfileRequest';
    /** ID of the WAF profile to delete. */
    wafProfileId: string;
}

export interface DeleteWafProfileMetadata {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.DeleteWafProfileMetadata';
    /** ID of the WafProfile resource that is being deleted. */
    wafProfileId: string;
}

const baseGetWafProfileRequest: object = {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.GetWafProfileRequest',
    wafProfileId: '',
};

export const GetWafProfileRequest = {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.GetWafProfileRequest' as const,

    encode(message: GetWafProfileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.wafProfileId !== '') {
            writer.uint32(10).string(message.wafProfileId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetWafProfileRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetWafProfileRequest } as GetWafProfileRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wafProfileId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetWafProfileRequest {
        const message = { ...baseGetWafProfileRequest } as GetWafProfileRequest;
        message.wafProfileId =
            object.wafProfileId !== undefined && object.wafProfileId !== null
                ? String(object.wafProfileId)
                : '';
        return message;
    },

    toJSON(message: GetWafProfileRequest): unknown {
        const obj: any = {};
        message.wafProfileId !== undefined && (obj.wafProfileId = message.wafProfileId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetWafProfileRequest>, I>>(
        object: I,
    ): GetWafProfileRequest {
        const message = { ...baseGetWafProfileRequest } as GetWafProfileRequest;
        message.wafProfileId = object.wafProfileId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetWafProfileRequest.$type, GetWafProfileRequest);

const baseListWafProfilesRequest: object = {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.ListWafProfilesRequest',
    folderId: '',
};

export const ListWafProfilesRequest = {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.ListWafProfilesRequest' as const,

    encode(message: ListWafProfilesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListWafProfilesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListWafProfilesRequest } as ListWafProfilesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListWafProfilesRequest {
        const message = { ...baseListWafProfilesRequest } as ListWafProfilesRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        return message;
    },

    toJSON(message: ListWafProfilesRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListWafProfilesRequest>, I>>(
        object: I,
    ): ListWafProfilesRequest {
        const message = { ...baseListWafProfilesRequest } as ListWafProfilesRequest;
        message.folderId = object.folderId ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListWafProfilesRequest.$type, ListWafProfilesRequest);

const baseListWafProfilesResponse: object = {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.ListWafProfilesResponse',
};

export const ListWafProfilesResponse = {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.ListWafProfilesResponse' as const,

    encode(message: ListWafProfilesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.wafProfiles) {
            WafProfile.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListWafProfilesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListWafProfilesResponse } as ListWafProfilesResponse;
        message.wafProfiles = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wafProfiles.push(WafProfile.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListWafProfilesResponse {
        const message = { ...baseListWafProfilesResponse } as ListWafProfilesResponse;
        message.wafProfiles = (object.wafProfiles ?? []).map((e: any) => WafProfile.fromJSON(e));
        return message;
    },

    toJSON(message: ListWafProfilesResponse): unknown {
        const obj: any = {};
        if (message.wafProfiles) {
            obj.wafProfiles = message.wafProfiles.map((e) =>
                e ? WafProfile.toJSON(e) : undefined,
            );
        } else {
            obj.wafProfiles = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListWafProfilesResponse>, I>>(
        object: I,
    ): ListWafProfilesResponse {
        const message = { ...baseListWafProfilesResponse } as ListWafProfilesResponse;
        message.wafProfiles = object.wafProfiles?.map((e) => WafProfile.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(ListWafProfilesResponse.$type, ListWafProfilesResponse);

const baseCreateWafProfileRequest: object = {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.CreateWafProfileRequest',
    folderId: '',
    name: '',
    description: '',
};

export const CreateWafProfileRequest = {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.CreateWafProfileRequest' as const,

    encode(message: CreateWafProfileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateWafProfileRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.smartwebsecurity.v1.waf.CreateWafProfileRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        for (const v of message.rules) {
            WafProfileRule.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.exclusionRules) {
            WafProfileExclusionRule.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        if (message.coreRuleSet !== undefined) {
            WafProfile_CoreRuleSet.encode(message.coreRuleSet, writer.uint32(58).fork()).ldelim();
        }
        if (message.analyzeRequestBody !== undefined) {
            WafProfile_AnalyzeRequestBody.encode(
                message.analyzeRequestBody,
                writer.uint32(66).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateWafProfileRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateWafProfileRequest } as CreateWafProfileRequest;
        message.labels = {};
        message.rules = [];
        message.exclusionRules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = CreateWafProfileRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.rules.push(WafProfileRule.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.exclusionRules.push(
                        WafProfileExclusionRule.decode(reader, reader.uint32()),
                    );
                    break;
                case 7:
                    message.coreRuleSet = WafProfile_CoreRuleSet.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.analyzeRequestBody = WafProfile_AnalyzeRequestBody.decode(
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

    fromJSON(object: any): CreateWafProfileRequest {
        const message = { ...baseCreateWafProfileRequest } as CreateWafProfileRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
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
        message.rules = (object.rules ?? []).map((e: any) => WafProfileRule.fromJSON(e));
        message.exclusionRules = (object.exclusionRules ?? []).map((e: any) =>
            WafProfileExclusionRule.fromJSON(e),
        );
        message.coreRuleSet =
            object.coreRuleSet !== undefined && object.coreRuleSet !== null
                ? WafProfile_CoreRuleSet.fromJSON(object.coreRuleSet)
                : undefined;
        message.analyzeRequestBody =
            object.analyzeRequestBody !== undefined && object.analyzeRequestBody !== null
                ? WafProfile_AnalyzeRequestBody.fromJSON(object.analyzeRequestBody)
                : undefined;
        return message;
    },

    toJSON(message: CreateWafProfileRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        if (message.rules) {
            obj.rules = message.rules.map((e) => (e ? WafProfileRule.toJSON(e) : undefined));
        } else {
            obj.rules = [];
        }
        if (message.exclusionRules) {
            obj.exclusionRules = message.exclusionRules.map((e) =>
                e ? WafProfileExclusionRule.toJSON(e) : undefined,
            );
        } else {
            obj.exclusionRules = [];
        }
        message.coreRuleSet !== undefined &&
            (obj.coreRuleSet = message.coreRuleSet
                ? WafProfile_CoreRuleSet.toJSON(message.coreRuleSet)
                : undefined);
        message.analyzeRequestBody !== undefined &&
            (obj.analyzeRequestBody = message.analyzeRequestBody
                ? WafProfile_AnalyzeRequestBody.toJSON(message.analyzeRequestBody)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateWafProfileRequest>, I>>(
        object: I,
    ): CreateWafProfileRequest {
        const message = { ...baseCreateWafProfileRequest } as CreateWafProfileRequest;
        message.folderId = object.folderId ?? '';
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
        message.rules = object.rules?.map((e) => WafProfileRule.fromPartial(e)) || [];
        message.exclusionRules =
            object.exclusionRules?.map((e) => WafProfileExclusionRule.fromPartial(e)) || [];
        message.coreRuleSet =
            object.coreRuleSet !== undefined && object.coreRuleSet !== null
                ? WafProfile_CoreRuleSet.fromPartial(object.coreRuleSet)
                : undefined;
        message.analyzeRequestBody =
            object.analyzeRequestBody !== undefined && object.analyzeRequestBody !== null
                ? WafProfile_AnalyzeRequestBody.fromPartial(object.analyzeRequestBody)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(CreateWafProfileRequest.$type, CreateWafProfileRequest);

const baseCreateWafProfileRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.CreateWafProfileRequest.LabelsEntry',
    key: '',
    value: '',
};

export const CreateWafProfileRequest_LabelsEntry = {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.CreateWafProfileRequest.LabelsEntry' as const,

    encode(
        message: CreateWafProfileRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateWafProfileRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateWafProfileRequest_LabelsEntry,
        } as CreateWafProfileRequest_LabelsEntry;
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

    fromJSON(object: any): CreateWafProfileRequest_LabelsEntry {
        const message = {
            ...baseCreateWafProfileRequest_LabelsEntry,
        } as CreateWafProfileRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateWafProfileRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateWafProfileRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateWafProfileRequest_LabelsEntry {
        const message = {
            ...baseCreateWafProfileRequest_LabelsEntry,
        } as CreateWafProfileRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(
    CreateWafProfileRequest_LabelsEntry.$type,
    CreateWafProfileRequest_LabelsEntry,
);

const baseCreateWafProfileMetadata: object = {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.CreateWafProfileMetadata',
    wafProfileId: '',
};

export const CreateWafProfileMetadata = {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.CreateWafProfileMetadata' as const,

    encode(
        message: CreateWafProfileMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.wafProfileId !== '') {
            writer.uint32(10).string(message.wafProfileId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateWafProfileMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateWafProfileMetadata } as CreateWafProfileMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wafProfileId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateWafProfileMetadata {
        const message = { ...baseCreateWafProfileMetadata } as CreateWafProfileMetadata;
        message.wafProfileId =
            object.wafProfileId !== undefined && object.wafProfileId !== null
                ? String(object.wafProfileId)
                : '';
        return message;
    },

    toJSON(message: CreateWafProfileMetadata): unknown {
        const obj: any = {};
        message.wafProfileId !== undefined && (obj.wafProfileId = message.wafProfileId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateWafProfileMetadata>, I>>(
        object: I,
    ): CreateWafProfileMetadata {
        const message = { ...baseCreateWafProfileMetadata } as CreateWafProfileMetadata;
        message.wafProfileId = object.wafProfileId ?? '';
        return message;
    },
};

messageTypeRegistry.set(CreateWafProfileMetadata.$type, CreateWafProfileMetadata);

const baseUpdateWafProfileRequest: object = {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.UpdateWafProfileRequest',
    wafProfileId: '',
    name: '',
    description: '',
};

export const UpdateWafProfileRequest = {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.UpdateWafProfileRequest' as const,

    encode(message: UpdateWafProfileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.wafProfileId !== '') {
            writer.uint32(10).string(message.wafProfileId);
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
            UpdateWafProfileRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.smartwebsecurity.v1.waf.UpdateWafProfileRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        for (const v of message.rules) {
            WafProfileRule.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.exclusionRules) {
            WafProfileExclusionRule.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        if (message.coreRuleSet !== undefined) {
            WafProfile_CoreRuleSet.encode(message.coreRuleSet, writer.uint32(66).fork()).ldelim();
        }
        if (message.analyzeRequestBody !== undefined) {
            WafProfile_AnalyzeRequestBody.encode(
                message.analyzeRequestBody,
                writer.uint32(74).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateWafProfileRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateWafProfileRequest } as UpdateWafProfileRequest;
        message.labels = {};
        message.rules = [];
        message.exclusionRules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wafProfileId = reader.string();
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
                    const entry5 = UpdateWafProfileRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.rules.push(WafProfileRule.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.exclusionRules.push(
                        WafProfileExclusionRule.decode(reader, reader.uint32()),
                    );
                    break;
                case 8:
                    message.coreRuleSet = WafProfile_CoreRuleSet.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.analyzeRequestBody = WafProfile_AnalyzeRequestBody.decode(
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

    fromJSON(object: any): UpdateWafProfileRequest {
        const message = { ...baseUpdateWafProfileRequest } as UpdateWafProfileRequest;
        message.wafProfileId =
            object.wafProfileId !== undefined && object.wafProfileId !== null
                ? String(object.wafProfileId)
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
        message.rules = (object.rules ?? []).map((e: any) => WafProfileRule.fromJSON(e));
        message.exclusionRules = (object.exclusionRules ?? []).map((e: any) =>
            WafProfileExclusionRule.fromJSON(e),
        );
        message.coreRuleSet =
            object.coreRuleSet !== undefined && object.coreRuleSet !== null
                ? WafProfile_CoreRuleSet.fromJSON(object.coreRuleSet)
                : undefined;
        message.analyzeRequestBody =
            object.analyzeRequestBody !== undefined && object.analyzeRequestBody !== null
                ? WafProfile_AnalyzeRequestBody.fromJSON(object.analyzeRequestBody)
                : undefined;
        return message;
    },

    toJSON(message: UpdateWafProfileRequest): unknown {
        const obj: any = {};
        message.wafProfileId !== undefined && (obj.wafProfileId = message.wafProfileId);
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
        if (message.rules) {
            obj.rules = message.rules.map((e) => (e ? WafProfileRule.toJSON(e) : undefined));
        } else {
            obj.rules = [];
        }
        if (message.exclusionRules) {
            obj.exclusionRules = message.exclusionRules.map((e) =>
                e ? WafProfileExclusionRule.toJSON(e) : undefined,
            );
        } else {
            obj.exclusionRules = [];
        }
        message.coreRuleSet !== undefined &&
            (obj.coreRuleSet = message.coreRuleSet
                ? WafProfile_CoreRuleSet.toJSON(message.coreRuleSet)
                : undefined);
        message.analyzeRequestBody !== undefined &&
            (obj.analyzeRequestBody = message.analyzeRequestBody
                ? WafProfile_AnalyzeRequestBody.toJSON(message.analyzeRequestBody)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateWafProfileRequest>, I>>(
        object: I,
    ): UpdateWafProfileRequest {
        const message = { ...baseUpdateWafProfileRequest } as UpdateWafProfileRequest;
        message.wafProfileId = object.wafProfileId ?? '';
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
        message.rules = object.rules?.map((e) => WafProfileRule.fromPartial(e)) || [];
        message.exclusionRules =
            object.exclusionRules?.map((e) => WafProfileExclusionRule.fromPartial(e)) || [];
        message.coreRuleSet =
            object.coreRuleSet !== undefined && object.coreRuleSet !== null
                ? WafProfile_CoreRuleSet.fromPartial(object.coreRuleSet)
                : undefined;
        message.analyzeRequestBody =
            object.analyzeRequestBody !== undefined && object.analyzeRequestBody !== null
                ? WafProfile_AnalyzeRequestBody.fromPartial(object.analyzeRequestBody)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(UpdateWafProfileRequest.$type, UpdateWafProfileRequest);

const baseUpdateWafProfileRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.UpdateWafProfileRequest.LabelsEntry',
    key: '',
    value: '',
};

export const UpdateWafProfileRequest_LabelsEntry = {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.UpdateWafProfileRequest.LabelsEntry' as const,

    encode(
        message: UpdateWafProfileRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateWafProfileRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateWafProfileRequest_LabelsEntry,
        } as UpdateWafProfileRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateWafProfileRequest_LabelsEntry {
        const message = {
            ...baseUpdateWafProfileRequest_LabelsEntry,
        } as UpdateWafProfileRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateWafProfileRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateWafProfileRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateWafProfileRequest_LabelsEntry {
        const message = {
            ...baseUpdateWafProfileRequest_LabelsEntry,
        } as UpdateWafProfileRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(
    UpdateWafProfileRequest_LabelsEntry.$type,
    UpdateWafProfileRequest_LabelsEntry,
);

const baseUpdateWafProfileMetadata: object = {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.UpdateWafProfileMetadata',
    wafProfileId: '',
};

export const UpdateWafProfileMetadata = {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.UpdateWafProfileMetadata' as const,

    encode(
        message: UpdateWafProfileMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.wafProfileId !== '') {
            writer.uint32(10).string(message.wafProfileId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateWafProfileMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateWafProfileMetadata } as UpdateWafProfileMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wafProfileId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateWafProfileMetadata {
        const message = { ...baseUpdateWafProfileMetadata } as UpdateWafProfileMetadata;
        message.wafProfileId =
            object.wafProfileId !== undefined && object.wafProfileId !== null
                ? String(object.wafProfileId)
                : '';
        return message;
    },

    toJSON(message: UpdateWafProfileMetadata): unknown {
        const obj: any = {};
        message.wafProfileId !== undefined && (obj.wafProfileId = message.wafProfileId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateWafProfileMetadata>, I>>(
        object: I,
    ): UpdateWafProfileMetadata {
        const message = { ...baseUpdateWafProfileMetadata } as UpdateWafProfileMetadata;
        message.wafProfileId = object.wafProfileId ?? '';
        return message;
    },
};

messageTypeRegistry.set(UpdateWafProfileMetadata.$type, UpdateWafProfileMetadata);

const baseDeleteWafProfileRequest: object = {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.DeleteWafProfileRequest',
    wafProfileId: '',
};

export const DeleteWafProfileRequest = {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.DeleteWafProfileRequest' as const,

    encode(message: DeleteWafProfileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.wafProfileId !== '') {
            writer.uint32(10).string(message.wafProfileId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteWafProfileRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteWafProfileRequest } as DeleteWafProfileRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wafProfileId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteWafProfileRequest {
        const message = { ...baseDeleteWafProfileRequest } as DeleteWafProfileRequest;
        message.wafProfileId =
            object.wafProfileId !== undefined && object.wafProfileId !== null
                ? String(object.wafProfileId)
                : '';
        return message;
    },

    toJSON(message: DeleteWafProfileRequest): unknown {
        const obj: any = {};
        message.wafProfileId !== undefined && (obj.wafProfileId = message.wafProfileId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteWafProfileRequest>, I>>(
        object: I,
    ): DeleteWafProfileRequest {
        const message = { ...baseDeleteWafProfileRequest } as DeleteWafProfileRequest;
        message.wafProfileId = object.wafProfileId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteWafProfileRequest.$type, DeleteWafProfileRequest);

const baseDeleteWafProfileMetadata: object = {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.DeleteWafProfileMetadata',
    wafProfileId: '',
};

export const DeleteWafProfileMetadata = {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.DeleteWafProfileMetadata' as const,

    encode(
        message: DeleteWafProfileMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.wafProfileId !== '') {
            writer.uint32(10).string(message.wafProfileId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteWafProfileMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteWafProfileMetadata } as DeleteWafProfileMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wafProfileId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteWafProfileMetadata {
        const message = { ...baseDeleteWafProfileMetadata } as DeleteWafProfileMetadata;
        message.wafProfileId =
            object.wafProfileId !== undefined && object.wafProfileId !== null
                ? String(object.wafProfileId)
                : '';
        return message;
    },

    toJSON(message: DeleteWafProfileMetadata): unknown {
        const obj: any = {};
        message.wafProfileId !== undefined && (obj.wafProfileId = message.wafProfileId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteWafProfileMetadata>, I>>(
        object: I,
    ): DeleteWafProfileMetadata {
        const message = { ...baseDeleteWafProfileMetadata } as DeleteWafProfileMetadata;
        message.wafProfileId = object.wafProfileId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteWafProfileMetadata.$type, DeleteWafProfileMetadata);

/** A set of methods for managing WafProfile resources. */
export const WafProfileServiceService = {
    /** Returns the specified WafProfile resource. */
    get: {
        path: '/yandex.cloud.smartwebsecurity.v1.waf.WafProfileService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetWafProfileRequest) =>
            Buffer.from(GetWafProfileRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetWafProfileRequest.decode(value),
        responseSerialize: (value: WafProfile) => Buffer.from(WafProfile.encode(value).finish()),
        responseDeserialize: (value: Buffer) => WafProfile.decode(value),
    },
    /** Retrieves the list of WafProfile resources in the specified folder. */
    list: {
        path: '/yandex.cloud.smartwebsecurity.v1.waf.WafProfileService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListWafProfilesRequest) =>
            Buffer.from(ListWafProfilesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListWafProfilesRequest.decode(value),
        responseSerialize: (value: ListWafProfilesResponse) =>
            Buffer.from(ListWafProfilesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListWafProfilesResponse.decode(value),
    },
    /** Creates a WAF profile in the specified folder using the data specified in the request. */
    create: {
        path: '/yandex.cloud.smartwebsecurity.v1.waf.WafProfileService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateWafProfileRequest) =>
            Buffer.from(CreateWafProfileRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateWafProfileRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified WAF profile. */
    update: {
        path: '/yandex.cloud.smartwebsecurity.v1.waf.WafProfileService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateWafProfileRequest) =>
            Buffer.from(UpdateWafProfileRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateWafProfileRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified WAF profile. */
    delete: {
        path: '/yandex.cloud.smartwebsecurity.v1.waf.WafProfileService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteWafProfileRequest) =>
            Buffer.from(DeleteWafProfileRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteWafProfileRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface WafProfileServiceServer extends UntypedServiceImplementation {
    /** Returns the specified WafProfile resource. */
    get: handleUnaryCall<GetWafProfileRequest, WafProfile>;
    /** Retrieves the list of WafProfile resources in the specified folder. */
    list: handleUnaryCall<ListWafProfilesRequest, ListWafProfilesResponse>;
    /** Creates a WAF profile in the specified folder using the data specified in the request. */
    create: handleUnaryCall<CreateWafProfileRequest, Operation>;
    /** Updates the specified WAF profile. */
    update: handleUnaryCall<UpdateWafProfileRequest, Operation>;
    /** Deletes the specified WAF profile. */
    delete: handleUnaryCall<DeleteWafProfileRequest, Operation>;
}

export interface WafProfileServiceClient extends Client {
    /** Returns the specified WafProfile resource. */
    get(
        request: GetWafProfileRequest,
        callback: (error: ServiceError | null, response: WafProfile) => void,
    ): ClientUnaryCall;
    get(
        request: GetWafProfileRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: WafProfile) => void,
    ): ClientUnaryCall;
    get(
        request: GetWafProfileRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: WafProfile) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of WafProfile resources in the specified folder. */
    list(
        request: ListWafProfilesRequest,
        callback: (error: ServiceError | null, response: ListWafProfilesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListWafProfilesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListWafProfilesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListWafProfilesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListWafProfilesResponse) => void,
    ): ClientUnaryCall;
    /** Creates a WAF profile in the specified folder using the data specified in the request. */
    create(
        request: CreateWafProfileRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateWafProfileRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateWafProfileRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified WAF profile. */
    update(
        request: UpdateWafProfileRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateWafProfileRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateWafProfileRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified WAF profile. */
    delete(
        request: DeleteWafProfileRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteWafProfileRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteWafProfileRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const WafProfileServiceClient = makeGenericClientConstructor(
    WafProfileServiceService,
    'yandex.cloud.smartwebsecurity.v1.waf.WafProfileService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): WafProfileServiceClient;
    service: typeof WafProfileServiceService;
};

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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
