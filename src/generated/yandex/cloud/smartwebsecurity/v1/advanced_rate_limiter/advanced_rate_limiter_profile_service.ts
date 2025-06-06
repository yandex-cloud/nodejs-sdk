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
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import {
    AdvancedRateLimiterProfile,
    AdvancedRateLimiterRule,
} from '../../../../../yandex/cloud/smartwebsecurity/v1/advanced_rate_limiter/advanced_rate_limiter_profile';
import { Operation } from '../../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter';

export interface GetAdvancedRateLimiterProfileRequest {
    /** ID of the AdvancedRateLimiterProfile resource to return. */
    advancedRateLimiterProfileId: string;
}

export interface ListAdvancedRateLimiterProfilesRequest {
    /**
     * ID of the folder that the ARL profile belongs to.
     * Currently page_size, page_token, filter and order_by are not supported and List method will return all ARL profiles in the folder.
     */
    folderId: string;
}

export interface ListAdvancedRateLimiterProfilesResponse {
    /**
     * List of AdvancedRateLimiterProfile resources.
     * Currently next_page_token is not supported and List method will return all ARL profiles in the folder.
     */
    advancedRateLimiterProfiles: AdvancedRateLimiterProfile[];
}

export interface CreateAdvancedRateLimiterProfileRequest {
    /** ID of the folder to create a ARL profile in. */
    folderId: string;
    /** Labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: { [key: string]: string };
    /** Name of the ARL profile. The name is unique within the folder. 1-50 characters long. */
    name: string;
    /** Optional description of the ARL profile. */
    description: string;
    /** List of rules. */
    advancedRateLimiterRules: AdvancedRateLimiterRule[];
}

export interface CreateAdvancedRateLimiterProfileRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateAdvancedRateLimiterProfileMetadata {
    /** ID of the ARL profile that is being created. */
    advancedRateLimiterProfileId: string;
}

export interface UpdateAdvancedRateLimiterProfileRequest {
    /** ID of the ARL profile to update. */
    advancedRateLimiterProfileId: string;
    /** Field mask that specifies which fields of the AdvancedRateLimiterProfile resource are going to be updated. */
    updateMask?: FieldMask;
    /** Labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: { [key: string]: string };
    /** Name of the ARL profile. The name is unique within the folder. 1-50 characters long. */
    name: string;
    /** Optional description of the ARL profile. */
    description: string;
    /** List of rules. */
    advancedRateLimiterRules: AdvancedRateLimiterRule[];
}

export interface UpdateAdvancedRateLimiterProfileRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateAdvancedRateLimiterProfileMetadata {
    /** ID of the AdvancedRateLimiterProfile resource that is being updated. */
    advancedRateLimiterProfileId: string;
}

export interface DeleteAdvancedRateLimiterProfileRequest {
    /** ID of the ARL profile to delete. */
    advancedRateLimiterProfileId: string;
}

export interface DeleteAdvancedRateLimiterProfileMetadata {
    /** ID of the AdvancedRateLimiterProfile resource that is being deleted. */
    advancedRateLimiterProfileId: string;
}

const baseGetAdvancedRateLimiterProfileRequest: object = { advancedRateLimiterProfileId: '' };

export const GetAdvancedRateLimiterProfileRequest = {
    encode(
        message: GetAdvancedRateLimiterProfileRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.advancedRateLimiterProfileId !== '') {
            writer.uint32(10).string(message.advancedRateLimiterProfileId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetAdvancedRateLimiterProfileRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetAdvancedRateLimiterProfileRequest,
        } as GetAdvancedRateLimiterProfileRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.advancedRateLimiterProfileId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetAdvancedRateLimiterProfileRequest {
        const message = {
            ...baseGetAdvancedRateLimiterProfileRequest,
        } as GetAdvancedRateLimiterProfileRequest;
        message.advancedRateLimiterProfileId =
            object.advancedRateLimiterProfileId !== undefined &&
            object.advancedRateLimiterProfileId !== null
                ? String(object.advancedRateLimiterProfileId)
                : '';
        return message;
    },

    toJSON(message: GetAdvancedRateLimiterProfileRequest): unknown {
        const obj: any = {};
        message.advancedRateLimiterProfileId !== undefined &&
            (obj.advancedRateLimiterProfileId = message.advancedRateLimiterProfileId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetAdvancedRateLimiterProfileRequest>, I>>(
        object: I,
    ): GetAdvancedRateLimiterProfileRequest {
        const message = {
            ...baseGetAdvancedRateLimiterProfileRequest,
        } as GetAdvancedRateLimiterProfileRequest;
        message.advancedRateLimiterProfileId = object.advancedRateLimiterProfileId ?? '';
        return message;
    },
};

const baseListAdvancedRateLimiterProfilesRequest: object = { folderId: '' };

export const ListAdvancedRateLimiterProfilesRequest = {
    encode(
        message: ListAdvancedRateLimiterProfilesRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ListAdvancedRateLimiterProfilesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListAdvancedRateLimiterProfilesRequest,
        } as ListAdvancedRateLimiterProfilesRequest;
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

    fromJSON(object: any): ListAdvancedRateLimiterProfilesRequest {
        const message = {
            ...baseListAdvancedRateLimiterProfilesRequest,
        } as ListAdvancedRateLimiterProfilesRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        return message;
    },

    toJSON(message: ListAdvancedRateLimiterProfilesRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListAdvancedRateLimiterProfilesRequest>, I>>(
        object: I,
    ): ListAdvancedRateLimiterProfilesRequest {
        const message = {
            ...baseListAdvancedRateLimiterProfilesRequest,
        } as ListAdvancedRateLimiterProfilesRequest;
        message.folderId = object.folderId ?? '';
        return message;
    },
};

const baseListAdvancedRateLimiterProfilesResponse: object = {};

export const ListAdvancedRateLimiterProfilesResponse = {
    encode(
        message: ListAdvancedRateLimiterProfilesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.advancedRateLimiterProfiles) {
            AdvancedRateLimiterProfile.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ListAdvancedRateLimiterProfilesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListAdvancedRateLimiterProfilesResponse,
        } as ListAdvancedRateLimiterProfilesResponse;
        message.advancedRateLimiterProfiles = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.advancedRateLimiterProfiles.push(
                        AdvancedRateLimiterProfile.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListAdvancedRateLimiterProfilesResponse {
        const message = {
            ...baseListAdvancedRateLimiterProfilesResponse,
        } as ListAdvancedRateLimiterProfilesResponse;
        message.advancedRateLimiterProfiles = (object.advancedRateLimiterProfiles ?? []).map(
            (e: any) => AdvancedRateLimiterProfile.fromJSON(e),
        );
        return message;
    },

    toJSON(message: ListAdvancedRateLimiterProfilesResponse): unknown {
        const obj: any = {};
        if (message.advancedRateLimiterProfiles) {
            obj.advancedRateLimiterProfiles = message.advancedRateLimiterProfiles.map((e) =>
                e ? AdvancedRateLimiterProfile.toJSON(e) : undefined,
            );
        } else {
            obj.advancedRateLimiterProfiles = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListAdvancedRateLimiterProfilesResponse>, I>>(
        object: I,
    ): ListAdvancedRateLimiterProfilesResponse {
        const message = {
            ...baseListAdvancedRateLimiterProfilesResponse,
        } as ListAdvancedRateLimiterProfilesResponse;
        message.advancedRateLimiterProfiles =
            object.advancedRateLimiterProfiles?.map((e) =>
                AdvancedRateLimiterProfile.fromPartial(e),
            ) || [];
        return message;
    },
};

const baseCreateAdvancedRateLimiterProfileRequest: object = {
    folderId: '',
    name: '',
    description: '',
};

export const CreateAdvancedRateLimiterProfileRequest = {
    encode(
        message: CreateAdvancedRateLimiterProfileRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateAdvancedRateLimiterProfileRequest_LabelsEntry.encode(
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
        for (const v of message.advancedRateLimiterRules) {
            AdvancedRateLimiterRule.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): CreateAdvancedRateLimiterProfileRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateAdvancedRateLimiterProfileRequest,
        } as CreateAdvancedRateLimiterProfileRequest;
        message.labels = {};
        message.advancedRateLimiterRules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    const entry2 = CreateAdvancedRateLimiterProfileRequest_LabelsEntry.decode(
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
                    message.advancedRateLimiterRules.push(
                        AdvancedRateLimiterRule.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateAdvancedRateLimiterProfileRequest {
        const message = {
            ...baseCreateAdvancedRateLimiterProfileRequest,
        } as CreateAdvancedRateLimiterProfileRequest;
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
        message.advancedRateLimiterRules = (object.advancedRateLimiterRules ?? []).map((e: any) =>
            AdvancedRateLimiterRule.fromJSON(e),
        );
        return message;
    },

    toJSON(message: CreateAdvancedRateLimiterProfileRequest): unknown {
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
        if (message.advancedRateLimiterRules) {
            obj.advancedRateLimiterRules = message.advancedRateLimiterRules.map((e) =>
                e ? AdvancedRateLimiterRule.toJSON(e) : undefined,
            );
        } else {
            obj.advancedRateLimiterRules = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateAdvancedRateLimiterProfileRequest>, I>>(
        object: I,
    ): CreateAdvancedRateLimiterProfileRequest {
        const message = {
            ...baseCreateAdvancedRateLimiterProfileRequest,
        } as CreateAdvancedRateLimiterProfileRequest;
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
        message.advancedRateLimiterRules =
            object.advancedRateLimiterRules?.map((e) => AdvancedRateLimiterRule.fromPartial(e)) ||
            [];
        return message;
    },
};

const baseCreateAdvancedRateLimiterProfileRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateAdvancedRateLimiterProfileRequest_LabelsEntry = {
    encode(
        message: CreateAdvancedRateLimiterProfileRequest_LabelsEntry,
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
    ): CreateAdvancedRateLimiterProfileRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateAdvancedRateLimiterProfileRequest_LabelsEntry,
        } as CreateAdvancedRateLimiterProfileRequest_LabelsEntry;
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

    fromJSON(object: any): CreateAdvancedRateLimiterProfileRequest_LabelsEntry {
        const message = {
            ...baseCreateAdvancedRateLimiterProfileRequest_LabelsEntry,
        } as CreateAdvancedRateLimiterProfileRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateAdvancedRateLimiterProfileRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<
        I extends Exact<DeepPartial<CreateAdvancedRateLimiterProfileRequest_LabelsEntry>, I>,
    >(object: I): CreateAdvancedRateLimiterProfileRequest_LabelsEntry {
        const message = {
            ...baseCreateAdvancedRateLimiterProfileRequest_LabelsEntry,
        } as CreateAdvancedRateLimiterProfileRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateAdvancedRateLimiterProfileMetadata: object = { advancedRateLimiterProfileId: '' };

export const CreateAdvancedRateLimiterProfileMetadata = {
    encode(
        message: CreateAdvancedRateLimiterProfileMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.advancedRateLimiterProfileId !== '') {
            writer.uint32(10).string(message.advancedRateLimiterProfileId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): CreateAdvancedRateLimiterProfileMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateAdvancedRateLimiterProfileMetadata,
        } as CreateAdvancedRateLimiterProfileMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.advancedRateLimiterProfileId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateAdvancedRateLimiterProfileMetadata {
        const message = {
            ...baseCreateAdvancedRateLimiterProfileMetadata,
        } as CreateAdvancedRateLimiterProfileMetadata;
        message.advancedRateLimiterProfileId =
            object.advancedRateLimiterProfileId !== undefined &&
            object.advancedRateLimiterProfileId !== null
                ? String(object.advancedRateLimiterProfileId)
                : '';
        return message;
    },

    toJSON(message: CreateAdvancedRateLimiterProfileMetadata): unknown {
        const obj: any = {};
        message.advancedRateLimiterProfileId !== undefined &&
            (obj.advancedRateLimiterProfileId = message.advancedRateLimiterProfileId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateAdvancedRateLimiterProfileMetadata>, I>>(
        object: I,
    ): CreateAdvancedRateLimiterProfileMetadata {
        const message = {
            ...baseCreateAdvancedRateLimiterProfileMetadata,
        } as CreateAdvancedRateLimiterProfileMetadata;
        message.advancedRateLimiterProfileId = object.advancedRateLimiterProfileId ?? '';
        return message;
    },
};

const baseUpdateAdvancedRateLimiterProfileRequest: object = {
    advancedRateLimiterProfileId: '',
    name: '',
    description: '',
};

export const UpdateAdvancedRateLimiterProfileRequest = {
    encode(
        message: UpdateAdvancedRateLimiterProfileRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.advancedRateLimiterProfileId !== '') {
            writer.uint32(10).string(message.advancedRateLimiterProfileId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateAdvancedRateLimiterProfileRequest_LabelsEntry.encode(
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
        for (const v of message.advancedRateLimiterRules) {
            AdvancedRateLimiterRule.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): UpdateAdvancedRateLimiterProfileRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateAdvancedRateLimiterProfileRequest,
        } as UpdateAdvancedRateLimiterProfileRequest;
        message.labels = {};
        message.advancedRateLimiterRules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.advancedRateLimiterProfileId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    const entry3 = UpdateAdvancedRateLimiterProfileRequest_LabelsEntry.decode(
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
                    message.advancedRateLimiterRules.push(
                        AdvancedRateLimiterRule.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateAdvancedRateLimiterProfileRequest {
        const message = {
            ...baseUpdateAdvancedRateLimiterProfileRequest,
        } as UpdateAdvancedRateLimiterProfileRequest;
        message.advancedRateLimiterProfileId =
            object.advancedRateLimiterProfileId !== undefined &&
            object.advancedRateLimiterProfileId !== null
                ? String(object.advancedRateLimiterProfileId)
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
        message.advancedRateLimiterRules = (object.advancedRateLimiterRules ?? []).map((e: any) =>
            AdvancedRateLimiterRule.fromJSON(e),
        );
        return message;
    },

    toJSON(message: UpdateAdvancedRateLimiterProfileRequest): unknown {
        const obj: any = {};
        message.advancedRateLimiterProfileId !== undefined &&
            (obj.advancedRateLimiterProfileId = message.advancedRateLimiterProfileId);
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
        if (message.advancedRateLimiterRules) {
            obj.advancedRateLimiterRules = message.advancedRateLimiterRules.map((e) =>
                e ? AdvancedRateLimiterRule.toJSON(e) : undefined,
            );
        } else {
            obj.advancedRateLimiterRules = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateAdvancedRateLimiterProfileRequest>, I>>(
        object: I,
    ): UpdateAdvancedRateLimiterProfileRequest {
        const message = {
            ...baseUpdateAdvancedRateLimiterProfileRequest,
        } as UpdateAdvancedRateLimiterProfileRequest;
        message.advancedRateLimiterProfileId = object.advancedRateLimiterProfileId ?? '';
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
        message.advancedRateLimiterRules =
            object.advancedRateLimiterRules?.map((e) => AdvancedRateLimiterRule.fromPartial(e)) ||
            [];
        return message;
    },
};

const baseUpdateAdvancedRateLimiterProfileRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateAdvancedRateLimiterProfileRequest_LabelsEntry = {
    encode(
        message: UpdateAdvancedRateLimiterProfileRequest_LabelsEntry,
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
    ): UpdateAdvancedRateLimiterProfileRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateAdvancedRateLimiterProfileRequest_LabelsEntry,
        } as UpdateAdvancedRateLimiterProfileRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateAdvancedRateLimiterProfileRequest_LabelsEntry {
        const message = {
            ...baseUpdateAdvancedRateLimiterProfileRequest_LabelsEntry,
        } as UpdateAdvancedRateLimiterProfileRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateAdvancedRateLimiterProfileRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<
        I extends Exact<DeepPartial<UpdateAdvancedRateLimiterProfileRequest_LabelsEntry>, I>,
    >(object: I): UpdateAdvancedRateLimiterProfileRequest_LabelsEntry {
        const message = {
            ...baseUpdateAdvancedRateLimiterProfileRequest_LabelsEntry,
        } as UpdateAdvancedRateLimiterProfileRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateAdvancedRateLimiterProfileMetadata: object = { advancedRateLimiterProfileId: '' };

export const UpdateAdvancedRateLimiterProfileMetadata = {
    encode(
        message: UpdateAdvancedRateLimiterProfileMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.advancedRateLimiterProfileId !== '') {
            writer.uint32(10).string(message.advancedRateLimiterProfileId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): UpdateAdvancedRateLimiterProfileMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateAdvancedRateLimiterProfileMetadata,
        } as UpdateAdvancedRateLimiterProfileMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.advancedRateLimiterProfileId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateAdvancedRateLimiterProfileMetadata {
        const message = {
            ...baseUpdateAdvancedRateLimiterProfileMetadata,
        } as UpdateAdvancedRateLimiterProfileMetadata;
        message.advancedRateLimiterProfileId =
            object.advancedRateLimiterProfileId !== undefined &&
            object.advancedRateLimiterProfileId !== null
                ? String(object.advancedRateLimiterProfileId)
                : '';
        return message;
    },

    toJSON(message: UpdateAdvancedRateLimiterProfileMetadata): unknown {
        const obj: any = {};
        message.advancedRateLimiterProfileId !== undefined &&
            (obj.advancedRateLimiterProfileId = message.advancedRateLimiterProfileId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateAdvancedRateLimiterProfileMetadata>, I>>(
        object: I,
    ): UpdateAdvancedRateLimiterProfileMetadata {
        const message = {
            ...baseUpdateAdvancedRateLimiterProfileMetadata,
        } as UpdateAdvancedRateLimiterProfileMetadata;
        message.advancedRateLimiterProfileId = object.advancedRateLimiterProfileId ?? '';
        return message;
    },
};

const baseDeleteAdvancedRateLimiterProfileRequest: object = { advancedRateLimiterProfileId: '' };

export const DeleteAdvancedRateLimiterProfileRequest = {
    encode(
        message: DeleteAdvancedRateLimiterProfileRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.advancedRateLimiterProfileId !== '') {
            writer.uint32(10).string(message.advancedRateLimiterProfileId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): DeleteAdvancedRateLimiterProfileRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteAdvancedRateLimiterProfileRequest,
        } as DeleteAdvancedRateLimiterProfileRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.advancedRateLimiterProfileId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteAdvancedRateLimiterProfileRequest {
        const message = {
            ...baseDeleteAdvancedRateLimiterProfileRequest,
        } as DeleteAdvancedRateLimiterProfileRequest;
        message.advancedRateLimiterProfileId =
            object.advancedRateLimiterProfileId !== undefined &&
            object.advancedRateLimiterProfileId !== null
                ? String(object.advancedRateLimiterProfileId)
                : '';
        return message;
    },

    toJSON(message: DeleteAdvancedRateLimiterProfileRequest): unknown {
        const obj: any = {};
        message.advancedRateLimiterProfileId !== undefined &&
            (obj.advancedRateLimiterProfileId = message.advancedRateLimiterProfileId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteAdvancedRateLimiterProfileRequest>, I>>(
        object: I,
    ): DeleteAdvancedRateLimiterProfileRequest {
        const message = {
            ...baseDeleteAdvancedRateLimiterProfileRequest,
        } as DeleteAdvancedRateLimiterProfileRequest;
        message.advancedRateLimiterProfileId = object.advancedRateLimiterProfileId ?? '';
        return message;
    },
};

const baseDeleteAdvancedRateLimiterProfileMetadata: object = { advancedRateLimiterProfileId: '' };

export const DeleteAdvancedRateLimiterProfileMetadata = {
    encode(
        message: DeleteAdvancedRateLimiterProfileMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.advancedRateLimiterProfileId !== '') {
            writer.uint32(10).string(message.advancedRateLimiterProfileId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): DeleteAdvancedRateLimiterProfileMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteAdvancedRateLimiterProfileMetadata,
        } as DeleteAdvancedRateLimiterProfileMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.advancedRateLimiterProfileId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteAdvancedRateLimiterProfileMetadata {
        const message = {
            ...baseDeleteAdvancedRateLimiterProfileMetadata,
        } as DeleteAdvancedRateLimiterProfileMetadata;
        message.advancedRateLimiterProfileId =
            object.advancedRateLimiterProfileId !== undefined &&
            object.advancedRateLimiterProfileId !== null
                ? String(object.advancedRateLimiterProfileId)
                : '';
        return message;
    },

    toJSON(message: DeleteAdvancedRateLimiterProfileMetadata): unknown {
        const obj: any = {};
        message.advancedRateLimiterProfileId !== undefined &&
            (obj.advancedRateLimiterProfileId = message.advancedRateLimiterProfileId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteAdvancedRateLimiterProfileMetadata>, I>>(
        object: I,
    ): DeleteAdvancedRateLimiterProfileMetadata {
        const message = {
            ...baseDeleteAdvancedRateLimiterProfileMetadata,
        } as DeleteAdvancedRateLimiterProfileMetadata;
        message.advancedRateLimiterProfileId = object.advancedRateLimiterProfileId ?? '';
        return message;
    },
};

/** A set of methods for managing AdvancedRateLimiterProfile resources. */
export const AdvancedRateLimiterProfileServiceService = {
    /** Returns the specified AdvancedRateLimiterProfile resource. */
    get: {
        path: '/yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterProfileService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetAdvancedRateLimiterProfileRequest) =>
            Buffer.from(GetAdvancedRateLimiterProfileRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetAdvancedRateLimiterProfileRequest.decode(value),
        responseSerialize: (value: AdvancedRateLimiterProfile) =>
            Buffer.from(AdvancedRateLimiterProfile.encode(value).finish()),
        responseDeserialize: (value: Buffer) => AdvancedRateLimiterProfile.decode(value),
    },
    /** Retrieves the list of AdvancedRateLimiterProfile resources in the specified folder. */
    list: {
        path: '/yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterProfileService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAdvancedRateLimiterProfilesRequest) =>
            Buffer.from(ListAdvancedRateLimiterProfilesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAdvancedRateLimiterProfilesRequest.decode(value),
        responseSerialize: (value: ListAdvancedRateLimiterProfilesResponse) =>
            Buffer.from(ListAdvancedRateLimiterProfilesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListAdvancedRateLimiterProfilesResponse.decode(value),
    },
    /** Creates a ARL profile in the specified folder using the data specified in the request. */
    create: {
        path: '/yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterProfileService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateAdvancedRateLimiterProfileRequest) =>
            Buffer.from(CreateAdvancedRateLimiterProfileRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateAdvancedRateLimiterProfileRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified ARL profile. */
    update: {
        path: '/yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterProfileService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAdvancedRateLimiterProfileRequest) =>
            Buffer.from(UpdateAdvancedRateLimiterProfileRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateAdvancedRateLimiterProfileRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified ARL profile. */
    delete: {
        path: '/yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterProfileService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteAdvancedRateLimiterProfileRequest) =>
            Buffer.from(DeleteAdvancedRateLimiterProfileRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteAdvancedRateLimiterProfileRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface AdvancedRateLimiterProfileServiceServer extends UntypedServiceImplementation {
    /** Returns the specified AdvancedRateLimiterProfile resource. */
    get: handleUnaryCall<GetAdvancedRateLimiterProfileRequest, AdvancedRateLimiterProfile>;
    /** Retrieves the list of AdvancedRateLimiterProfile resources in the specified folder. */
    list: handleUnaryCall<
        ListAdvancedRateLimiterProfilesRequest,
        ListAdvancedRateLimiterProfilesResponse
    >;
    /** Creates a ARL profile in the specified folder using the data specified in the request. */
    create: handleUnaryCall<CreateAdvancedRateLimiterProfileRequest, Operation>;
    /** Updates the specified ARL profile. */
    update: handleUnaryCall<UpdateAdvancedRateLimiterProfileRequest, Operation>;
    /** Deletes the specified ARL profile. */
    delete: handleUnaryCall<DeleteAdvancedRateLimiterProfileRequest, Operation>;
}

export interface AdvancedRateLimiterProfileServiceClient extends Client {
    /** Returns the specified AdvancedRateLimiterProfile resource. */
    get(
        request: GetAdvancedRateLimiterProfileRequest,
        callback: (error: ServiceError | null, response: AdvancedRateLimiterProfile) => void,
    ): ClientUnaryCall;
    get(
        request: GetAdvancedRateLimiterProfileRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: AdvancedRateLimiterProfile) => void,
    ): ClientUnaryCall;
    get(
        request: GetAdvancedRateLimiterProfileRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: AdvancedRateLimiterProfile) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of AdvancedRateLimiterProfile resources in the specified folder. */
    list(
        request: ListAdvancedRateLimiterProfilesRequest,
        callback: (
            error: ServiceError | null,
            response: ListAdvancedRateLimiterProfilesResponse,
        ) => void,
    ): ClientUnaryCall;
    list(
        request: ListAdvancedRateLimiterProfilesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListAdvancedRateLimiterProfilesResponse,
        ) => void,
    ): ClientUnaryCall;
    list(
        request: ListAdvancedRateLimiterProfilesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListAdvancedRateLimiterProfilesResponse,
        ) => void,
    ): ClientUnaryCall;
    /** Creates a ARL profile in the specified folder using the data specified in the request. */
    create(
        request: CreateAdvancedRateLimiterProfileRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateAdvancedRateLimiterProfileRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateAdvancedRateLimiterProfileRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified ARL profile. */
    update(
        request: UpdateAdvancedRateLimiterProfileRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateAdvancedRateLimiterProfileRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateAdvancedRateLimiterProfileRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified ARL profile. */
    delete(
        request: DeleteAdvancedRateLimiterProfileRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteAdvancedRateLimiterProfileRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteAdvancedRateLimiterProfileRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const AdvancedRateLimiterProfileServiceClient = makeGenericClientConstructor(
    AdvancedRateLimiterProfileServiceService,
    'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterProfileService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): AdvancedRateLimiterProfileServiceClient;
    service: typeof AdvancedRateLimiterProfileServiceService;
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
