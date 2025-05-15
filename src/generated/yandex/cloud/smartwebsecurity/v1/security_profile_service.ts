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
    SecurityProfile_DefaultAction,
    SecurityProfile_AnalyzeRequestBody,
    SecurityProfile,
    SecurityRule,
    securityProfile_DefaultActionFromJSON,
    securityProfile_DefaultActionToJSON,
} from '../../../../yandex/cloud/smartwebsecurity/v1/security_profile';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.smartwebsecurity.v1';

export interface GetSecurityProfileRequest {
    /** ID of the SecurityProfile resource to return. */
    securityProfileId: string;
}

export interface ListSecurityProfilesRequest {
    /**
     * ID of the folder that the security profile belongs to.
     * Currently page_size, page_token, filter and order_by are not supported and List method will return all security profiles in the folder.
     */
    folderId: string;
}

export interface ListSecurityProfilesResponse {
    /**
     * List of SecurityProfile resources.
     * Currently next_page_token is not supported and List method will return all security profiles in the folder.
     */
    securityProfiles: SecurityProfile[];
}

export interface CreateSecurityProfileRequest {
    /** ID of the folder to create a security profile in. */
    folderId: string;
    /** Labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: { [key: string]: string };
    /** Name of the security profile. The name is unique within the folder. 1-50 characters long. */
    name: string;
    /** Optional description of the security profile. */
    description: string;
    /** Action to perform if none of rules matched. */
    defaultAction: SecurityProfile_DefaultAction;
    /** List of security rules. */
    securityRules: SecurityRule[];
    /** Captcha ID to use with this security profile. Set empty to use default. */
    captchaId: string;
    /** Advanced rate limiter profile ID to use with this security profile. Set empty to use default. */
    advancedRateLimiterProfileId: string;
    /** Parameters for request body analyzer. */
    analyzeRequestBody?: SecurityProfile_AnalyzeRequestBody;
}

export interface CreateSecurityProfileRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateSecurityProfileMetadata {
    /** ID of the security profile that is being created. */
    securityProfileId: string;
}

export interface UpdateSecurityProfileRequest {
    /** ID of the security profile to update. */
    securityProfileId: string;
    /** Field mask that specifies which fields of the SecurityProfile resource are going to be updated. */
    updateMask?: FieldMask;
    /** Labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: { [key: string]: string };
    /** Name of the security profile. The name is unique within the folder. 1-50 characters long. */
    name: string;
    /** Optional description of the security profile. */
    description: string;
    /** Action to perform if none of rules matched. */
    defaultAction: SecurityProfile_DefaultAction;
    /** List of security rules. */
    securityRules: SecurityRule[];
    /** Captcha ID to use with this security profile. Set empty to use default. */
    captchaId: string;
    /** Advanced rate limiter profile ID to use with this security profile. Set empty to use default. */
    advancedRateLimiterProfileId: string;
    /** Parameters for request body analyzer. */
    analyzeRequestBody?: SecurityProfile_AnalyzeRequestBody;
}

export interface UpdateSecurityProfileRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateSecurityProfileMetadata {
    /** ID of the SecurityProfile resource that is being updated. */
    securityProfileId: string;
}

export interface DeleteSecurityProfileRequest {
    /** ID of the security profile to delete. */
    securityProfileId: string;
}

export interface DeleteSecurityProfileMetadata {
    /** ID of the SecurityProfile resource that is being deleted. */
    securityProfileId: string;
}

const baseGetSecurityProfileRequest: object = { securityProfileId: '' };

export const GetSecurityProfileRequest = {
    encode(
        message: GetSecurityProfileRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.securityProfileId !== '') {
            writer.uint32(10).string(message.securityProfileId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetSecurityProfileRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetSecurityProfileRequest } as GetSecurityProfileRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityProfileId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetSecurityProfileRequest {
        const message = { ...baseGetSecurityProfileRequest } as GetSecurityProfileRequest;
        message.securityProfileId =
            object.securityProfileId !== undefined && object.securityProfileId !== null
                ? String(object.securityProfileId)
                : '';
        return message;
    },

    toJSON(message: GetSecurityProfileRequest): unknown {
        const obj: any = {};
        message.securityProfileId !== undefined &&
            (obj.securityProfileId = message.securityProfileId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetSecurityProfileRequest>, I>>(
        object: I,
    ): GetSecurityProfileRequest {
        const message = { ...baseGetSecurityProfileRequest } as GetSecurityProfileRequest;
        message.securityProfileId = object.securityProfileId ?? '';
        return message;
    },
};

const baseListSecurityProfilesRequest: object = { folderId: '' };

export const ListSecurityProfilesRequest = {
    encode(
        message: ListSecurityProfilesRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListSecurityProfilesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListSecurityProfilesRequest } as ListSecurityProfilesRequest;
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

    fromJSON(object: any): ListSecurityProfilesRequest {
        const message = { ...baseListSecurityProfilesRequest } as ListSecurityProfilesRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        return message;
    },

    toJSON(message: ListSecurityProfilesRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListSecurityProfilesRequest>, I>>(
        object: I,
    ): ListSecurityProfilesRequest {
        const message = { ...baseListSecurityProfilesRequest } as ListSecurityProfilesRequest;
        message.folderId = object.folderId ?? '';
        return message;
    },
};

const baseListSecurityProfilesResponse: object = {};

export const ListSecurityProfilesResponse = {
    encode(
        message: ListSecurityProfilesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.securityProfiles) {
            SecurityProfile.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListSecurityProfilesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListSecurityProfilesResponse } as ListSecurityProfilesResponse;
        message.securityProfiles = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityProfiles.push(SecurityProfile.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListSecurityProfilesResponse {
        const message = { ...baseListSecurityProfilesResponse } as ListSecurityProfilesResponse;
        message.securityProfiles = (object.securityProfiles ?? []).map((e: any) =>
            SecurityProfile.fromJSON(e),
        );
        return message;
    },

    toJSON(message: ListSecurityProfilesResponse): unknown {
        const obj: any = {};
        if (message.securityProfiles) {
            obj.securityProfiles = message.securityProfiles.map((e) =>
                e ? SecurityProfile.toJSON(e) : undefined,
            );
        } else {
            obj.securityProfiles = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListSecurityProfilesResponse>, I>>(
        object: I,
    ): ListSecurityProfilesResponse {
        const message = { ...baseListSecurityProfilesResponse } as ListSecurityProfilesResponse;
        message.securityProfiles =
            object.securityProfiles?.map((e) => SecurityProfile.fromPartial(e)) || [];
        return message;
    },
};

const baseCreateSecurityProfileRequest: object = {
    folderId: '',
    name: '',
    description: '',
    defaultAction: 0,
    captchaId: '',
    advancedRateLimiterProfileId: '',
};

export const CreateSecurityProfileRequest = {
    encode(
        message: CreateSecurityProfileRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateSecurityProfileRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(18).fork(),
            ).ldelim();
        });
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.defaultAction !== 0) {
            writer.uint32(40).int32(message.defaultAction);
        }
        for (const v of message.securityRules) {
            SecurityRule.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        if (message.captchaId !== '') {
            writer.uint32(58).string(message.captchaId);
        }
        if (message.advancedRateLimiterProfileId !== '') {
            writer.uint32(66).string(message.advancedRateLimiterProfileId);
        }
        if (message.analyzeRequestBody !== undefined) {
            SecurityProfile_AnalyzeRequestBody.encode(
                message.analyzeRequestBody,
                writer.uint32(74).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateSecurityProfileRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateSecurityProfileRequest } as CreateSecurityProfileRequest;
        message.labels = {};
        message.securityRules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    const entry2 = CreateSecurityProfileRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry2.value !== undefined) {
                        message.labels[entry2.key] = entry2.value;
                    }
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.defaultAction = reader.int32() as any;
                    break;
                case 6:
                    message.securityRules.push(SecurityRule.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.captchaId = reader.string();
                    break;
                case 8:
                    message.advancedRateLimiterProfileId = reader.string();
                    break;
                case 9:
                    message.analyzeRequestBody = SecurityProfile_AnalyzeRequestBody.decode(
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

    fromJSON(object: any): CreateSecurityProfileRequest {
        const message = { ...baseCreateSecurityProfileRequest } as CreateSecurityProfileRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.defaultAction =
            object.defaultAction !== undefined && object.defaultAction !== null
                ? securityProfile_DefaultActionFromJSON(object.defaultAction)
                : 0;
        message.securityRules = (object.securityRules ?? []).map((e: any) =>
            SecurityRule.fromJSON(e),
        );
        message.captchaId =
            object.captchaId !== undefined && object.captchaId !== null
                ? String(object.captchaId)
                : '';
        message.advancedRateLimiterProfileId =
            object.advancedRateLimiterProfileId !== undefined &&
            object.advancedRateLimiterProfileId !== null
                ? String(object.advancedRateLimiterProfileId)
                : '';
        message.analyzeRequestBody =
            object.analyzeRequestBody !== undefined && object.analyzeRequestBody !== null
                ? SecurityProfile_AnalyzeRequestBody.fromJSON(object.analyzeRequestBody)
                : undefined;
        return message;
    },

    toJSON(message: CreateSecurityProfileRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.defaultAction !== undefined &&
            (obj.defaultAction = securityProfile_DefaultActionToJSON(message.defaultAction));
        if (message.securityRules) {
            obj.securityRules = message.securityRules.map((e) =>
                e ? SecurityRule.toJSON(e) : undefined,
            );
        } else {
            obj.securityRules = [];
        }
        message.captchaId !== undefined && (obj.captchaId = message.captchaId);
        message.advancedRateLimiterProfileId !== undefined &&
            (obj.advancedRateLimiterProfileId = message.advancedRateLimiterProfileId);
        message.analyzeRequestBody !== undefined &&
            (obj.analyzeRequestBody = message.analyzeRequestBody
                ? SecurityProfile_AnalyzeRequestBody.toJSON(message.analyzeRequestBody)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateSecurityProfileRequest>, I>>(
        object: I,
    ): CreateSecurityProfileRequest {
        const message = { ...baseCreateSecurityProfileRequest } as CreateSecurityProfileRequest;
        message.folderId = object.folderId ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.defaultAction = object.defaultAction ?? 0;
        message.securityRules = object.securityRules?.map((e) => SecurityRule.fromPartial(e)) || [];
        message.captchaId = object.captchaId ?? '';
        message.advancedRateLimiterProfileId = object.advancedRateLimiterProfileId ?? '';
        message.analyzeRequestBody =
            object.analyzeRequestBody !== undefined && object.analyzeRequestBody !== null
                ? SecurityProfile_AnalyzeRequestBody.fromPartial(object.analyzeRequestBody)
                : undefined;
        return message;
    },
};

const baseCreateSecurityProfileRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateSecurityProfileRequest_LabelsEntry = {
    encode(
        message: CreateSecurityProfileRequest_LabelsEntry,
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
    ): CreateSecurityProfileRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateSecurityProfileRequest_LabelsEntry,
        } as CreateSecurityProfileRequest_LabelsEntry;
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

    fromJSON(object: any): CreateSecurityProfileRequest_LabelsEntry {
        const message = {
            ...baseCreateSecurityProfileRequest_LabelsEntry,
        } as CreateSecurityProfileRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateSecurityProfileRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateSecurityProfileRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateSecurityProfileRequest_LabelsEntry {
        const message = {
            ...baseCreateSecurityProfileRequest_LabelsEntry,
        } as CreateSecurityProfileRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateSecurityProfileMetadata: object = { securityProfileId: '' };

export const CreateSecurityProfileMetadata = {
    encode(
        message: CreateSecurityProfileMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.securityProfileId !== '') {
            writer.uint32(10).string(message.securityProfileId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateSecurityProfileMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateSecurityProfileMetadata } as CreateSecurityProfileMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityProfileId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateSecurityProfileMetadata {
        const message = { ...baseCreateSecurityProfileMetadata } as CreateSecurityProfileMetadata;
        message.securityProfileId =
            object.securityProfileId !== undefined && object.securityProfileId !== null
                ? String(object.securityProfileId)
                : '';
        return message;
    },

    toJSON(message: CreateSecurityProfileMetadata): unknown {
        const obj: any = {};
        message.securityProfileId !== undefined &&
            (obj.securityProfileId = message.securityProfileId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateSecurityProfileMetadata>, I>>(
        object: I,
    ): CreateSecurityProfileMetadata {
        const message = { ...baseCreateSecurityProfileMetadata } as CreateSecurityProfileMetadata;
        message.securityProfileId = object.securityProfileId ?? '';
        return message;
    },
};

const baseUpdateSecurityProfileRequest: object = {
    securityProfileId: '',
    name: '',
    description: '',
    defaultAction: 0,
    captchaId: '',
    advancedRateLimiterProfileId: '',
};

export const UpdateSecurityProfileRequest = {
    encode(
        message: UpdateSecurityProfileRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.securityProfileId !== '') {
            writer.uint32(10).string(message.securityProfileId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateSecurityProfileRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(26).fork(),
            ).ldelim();
        });
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        if (message.defaultAction !== 0) {
            writer.uint32(48).int32(message.defaultAction);
        }
        for (const v of message.securityRules) {
            SecurityRule.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        if (message.captchaId !== '') {
            writer.uint32(66).string(message.captchaId);
        }
        if (message.advancedRateLimiterProfileId !== '') {
            writer.uint32(74).string(message.advancedRateLimiterProfileId);
        }
        if (message.analyzeRequestBody !== undefined) {
            SecurityProfile_AnalyzeRequestBody.encode(
                message.analyzeRequestBody,
                writer.uint32(82).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSecurityProfileRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateSecurityProfileRequest } as UpdateSecurityProfileRequest;
        message.labels = {};
        message.securityRules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityProfileId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    const entry3 = UpdateSecurityProfileRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry3.value !== undefined) {
                        message.labels[entry3.key] = entry3.value;
                    }
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.defaultAction = reader.int32() as any;
                    break;
                case 7:
                    message.securityRules.push(SecurityRule.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.captchaId = reader.string();
                    break;
                case 9:
                    message.advancedRateLimiterProfileId = reader.string();
                    break;
                case 10:
                    message.analyzeRequestBody = SecurityProfile_AnalyzeRequestBody.decode(
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

    fromJSON(object: any): UpdateSecurityProfileRequest {
        const message = { ...baseUpdateSecurityProfileRequest } as UpdateSecurityProfileRequest;
        message.securityProfileId =
            object.securityProfileId !== undefined && object.securityProfileId !== null
                ? String(object.securityProfileId)
                : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.defaultAction =
            object.defaultAction !== undefined && object.defaultAction !== null
                ? securityProfile_DefaultActionFromJSON(object.defaultAction)
                : 0;
        message.securityRules = (object.securityRules ?? []).map((e: any) =>
            SecurityRule.fromJSON(e),
        );
        message.captchaId =
            object.captchaId !== undefined && object.captchaId !== null
                ? String(object.captchaId)
                : '';
        message.advancedRateLimiterProfileId =
            object.advancedRateLimiterProfileId !== undefined &&
            object.advancedRateLimiterProfileId !== null
                ? String(object.advancedRateLimiterProfileId)
                : '';
        message.analyzeRequestBody =
            object.analyzeRequestBody !== undefined && object.analyzeRequestBody !== null
                ? SecurityProfile_AnalyzeRequestBody.fromJSON(object.analyzeRequestBody)
                : undefined;
        return message;
    },

    toJSON(message: UpdateSecurityProfileRequest): unknown {
        const obj: any = {};
        message.securityProfileId !== undefined &&
            (obj.securityProfileId = message.securityProfileId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.defaultAction !== undefined &&
            (obj.defaultAction = securityProfile_DefaultActionToJSON(message.defaultAction));
        if (message.securityRules) {
            obj.securityRules = message.securityRules.map((e) =>
                e ? SecurityRule.toJSON(e) : undefined,
            );
        } else {
            obj.securityRules = [];
        }
        message.captchaId !== undefined && (obj.captchaId = message.captchaId);
        message.advancedRateLimiterProfileId !== undefined &&
            (obj.advancedRateLimiterProfileId = message.advancedRateLimiterProfileId);
        message.analyzeRequestBody !== undefined &&
            (obj.analyzeRequestBody = message.analyzeRequestBody
                ? SecurityProfile_AnalyzeRequestBody.toJSON(message.analyzeRequestBody)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateSecurityProfileRequest>, I>>(
        object: I,
    ): UpdateSecurityProfileRequest {
        const message = { ...baseUpdateSecurityProfileRequest } as UpdateSecurityProfileRequest;
        message.securityProfileId = object.securityProfileId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.defaultAction = object.defaultAction ?? 0;
        message.securityRules = object.securityRules?.map((e) => SecurityRule.fromPartial(e)) || [];
        message.captchaId = object.captchaId ?? '';
        message.advancedRateLimiterProfileId = object.advancedRateLimiterProfileId ?? '';
        message.analyzeRequestBody =
            object.analyzeRequestBody !== undefined && object.analyzeRequestBody !== null
                ? SecurityProfile_AnalyzeRequestBody.fromPartial(object.analyzeRequestBody)
                : undefined;
        return message;
    },
};

const baseUpdateSecurityProfileRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateSecurityProfileRequest_LabelsEntry = {
    encode(
        message: UpdateSecurityProfileRequest_LabelsEntry,
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
    ): UpdateSecurityProfileRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSecurityProfileRequest_LabelsEntry,
        } as UpdateSecurityProfileRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateSecurityProfileRequest_LabelsEntry {
        const message = {
            ...baseUpdateSecurityProfileRequest_LabelsEntry,
        } as UpdateSecurityProfileRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateSecurityProfileRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateSecurityProfileRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateSecurityProfileRequest_LabelsEntry {
        const message = {
            ...baseUpdateSecurityProfileRequest_LabelsEntry,
        } as UpdateSecurityProfileRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateSecurityProfileMetadata: object = { securityProfileId: '' };

export const UpdateSecurityProfileMetadata = {
    encode(
        message: UpdateSecurityProfileMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.securityProfileId !== '') {
            writer.uint32(10).string(message.securityProfileId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSecurityProfileMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateSecurityProfileMetadata } as UpdateSecurityProfileMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityProfileId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateSecurityProfileMetadata {
        const message = { ...baseUpdateSecurityProfileMetadata } as UpdateSecurityProfileMetadata;
        message.securityProfileId =
            object.securityProfileId !== undefined && object.securityProfileId !== null
                ? String(object.securityProfileId)
                : '';
        return message;
    },

    toJSON(message: UpdateSecurityProfileMetadata): unknown {
        const obj: any = {};
        message.securityProfileId !== undefined &&
            (obj.securityProfileId = message.securityProfileId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateSecurityProfileMetadata>, I>>(
        object: I,
    ): UpdateSecurityProfileMetadata {
        const message = { ...baseUpdateSecurityProfileMetadata } as UpdateSecurityProfileMetadata;
        message.securityProfileId = object.securityProfileId ?? '';
        return message;
    },
};

const baseDeleteSecurityProfileRequest: object = { securityProfileId: '' };

export const DeleteSecurityProfileRequest = {
    encode(
        message: DeleteSecurityProfileRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.securityProfileId !== '') {
            writer.uint32(10).string(message.securityProfileId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSecurityProfileRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteSecurityProfileRequest } as DeleteSecurityProfileRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityProfileId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteSecurityProfileRequest {
        const message = { ...baseDeleteSecurityProfileRequest } as DeleteSecurityProfileRequest;
        message.securityProfileId =
            object.securityProfileId !== undefined && object.securityProfileId !== null
                ? String(object.securityProfileId)
                : '';
        return message;
    },

    toJSON(message: DeleteSecurityProfileRequest): unknown {
        const obj: any = {};
        message.securityProfileId !== undefined &&
            (obj.securityProfileId = message.securityProfileId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteSecurityProfileRequest>, I>>(
        object: I,
    ): DeleteSecurityProfileRequest {
        const message = { ...baseDeleteSecurityProfileRequest } as DeleteSecurityProfileRequest;
        message.securityProfileId = object.securityProfileId ?? '';
        return message;
    },
};

const baseDeleteSecurityProfileMetadata: object = { securityProfileId: '' };

export const DeleteSecurityProfileMetadata = {
    encode(
        message: DeleteSecurityProfileMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.securityProfileId !== '') {
            writer.uint32(10).string(message.securityProfileId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSecurityProfileMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteSecurityProfileMetadata } as DeleteSecurityProfileMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityProfileId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteSecurityProfileMetadata {
        const message = { ...baseDeleteSecurityProfileMetadata } as DeleteSecurityProfileMetadata;
        message.securityProfileId =
            object.securityProfileId !== undefined && object.securityProfileId !== null
                ? String(object.securityProfileId)
                : '';
        return message;
    },

    toJSON(message: DeleteSecurityProfileMetadata): unknown {
        const obj: any = {};
        message.securityProfileId !== undefined &&
            (obj.securityProfileId = message.securityProfileId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteSecurityProfileMetadata>, I>>(
        object: I,
    ): DeleteSecurityProfileMetadata {
        const message = { ...baseDeleteSecurityProfileMetadata } as DeleteSecurityProfileMetadata;
        message.securityProfileId = object.securityProfileId ?? '';
        return message;
    },
};

/** A set of methods for managing SecurityProfile resources. */
export const SecurityProfileServiceService = {
    /** Returns the specified SecurityProfile resource. */
    get: {
        path: '/yandex.cloud.smartwebsecurity.v1.SecurityProfileService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetSecurityProfileRequest) =>
            Buffer.from(GetSecurityProfileRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetSecurityProfileRequest.decode(value),
        responseSerialize: (value: SecurityProfile) =>
            Buffer.from(SecurityProfile.encode(value).finish()),
        responseDeserialize: (value: Buffer) => SecurityProfile.decode(value),
    },
    /** Retrieves the list of SecurityProfile resources in the specified folder. */
    list: {
        path: '/yandex.cloud.smartwebsecurity.v1.SecurityProfileService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListSecurityProfilesRequest) =>
            Buffer.from(ListSecurityProfilesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListSecurityProfilesRequest.decode(value),
        responseSerialize: (value: ListSecurityProfilesResponse) =>
            Buffer.from(ListSecurityProfilesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListSecurityProfilesResponse.decode(value),
    },
    /** Creates a security profile in the specified folder using the data specified in the request. */
    create: {
        path: '/yandex.cloud.smartwebsecurity.v1.SecurityProfileService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateSecurityProfileRequest) =>
            Buffer.from(CreateSecurityProfileRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateSecurityProfileRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified security profile. */
    update: {
        path: '/yandex.cloud.smartwebsecurity.v1.SecurityProfileService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateSecurityProfileRequest) =>
            Buffer.from(UpdateSecurityProfileRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateSecurityProfileRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified security profile. */
    delete: {
        path: '/yandex.cloud.smartwebsecurity.v1.SecurityProfileService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteSecurityProfileRequest) =>
            Buffer.from(DeleteSecurityProfileRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteSecurityProfileRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface SecurityProfileServiceServer extends UntypedServiceImplementation {
    /** Returns the specified SecurityProfile resource. */
    get: handleUnaryCall<GetSecurityProfileRequest, SecurityProfile>;
    /** Retrieves the list of SecurityProfile resources in the specified folder. */
    list: handleUnaryCall<ListSecurityProfilesRequest, ListSecurityProfilesResponse>;
    /** Creates a security profile in the specified folder using the data specified in the request. */
    create: handleUnaryCall<CreateSecurityProfileRequest, Operation>;
    /** Updates the specified security profile. */
    update: handleUnaryCall<UpdateSecurityProfileRequest, Operation>;
    /** Deletes the specified security profile. */
    delete: handleUnaryCall<DeleteSecurityProfileRequest, Operation>;
}

export interface SecurityProfileServiceClient extends Client {
    /** Returns the specified SecurityProfile resource. */
    get(
        request: GetSecurityProfileRequest,
        callback: (error: ServiceError | null, response: SecurityProfile) => void,
    ): ClientUnaryCall;
    get(
        request: GetSecurityProfileRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: SecurityProfile) => void,
    ): ClientUnaryCall;
    get(
        request: GetSecurityProfileRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: SecurityProfile) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of SecurityProfile resources in the specified folder. */
    list(
        request: ListSecurityProfilesRequest,
        callback: (error: ServiceError | null, response: ListSecurityProfilesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListSecurityProfilesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListSecurityProfilesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListSecurityProfilesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListSecurityProfilesResponse) => void,
    ): ClientUnaryCall;
    /** Creates a security profile in the specified folder using the data specified in the request. */
    create(
        request: CreateSecurityProfileRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateSecurityProfileRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateSecurityProfileRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified security profile. */
    update(
        request: UpdateSecurityProfileRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateSecurityProfileRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateSecurityProfileRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified security profile. */
    delete(
        request: DeleteSecurityProfileRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteSecurityProfileRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteSecurityProfileRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const SecurityProfileServiceClient = makeGenericClientConstructor(
    SecurityProfileServiceService,
    'yandex.cloud.smartwebsecurity.v1.SecurityProfileService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): SecurityProfileServiceClient;
    service: typeof SecurityProfileServiceService;
};

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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
