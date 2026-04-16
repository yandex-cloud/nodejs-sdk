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
    UserSettings,
    PasswordQualityPolicy,
    PasswordLifetimePolicy,
    BruteforceProtectionPolicy,
    PasswordBlacklistPolicy,
    Userpool,
    Domain,
} from './userpool';
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Operation } from '../../../operation/operation';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../access/access';

export const protobufPackage = 'yandex.cloud.organizationmanager.v1.idp';

/** Request to get a userpool. */
export interface GetUserpoolRequest {
    /**
     * ID of the userpool to return.
     * To get the userpool ID, make a [UserpoolService.List] request.
     */
    userpoolId: string;
}

/** Request to list userpools. */
export interface ListUserpoolsRequest {
    /** ID of the organization to list userpools in. */
    organizationId: string;
    /**
     * The maximum number of results per page to return.
     * If the number of available results is larger than [page_size],
     * the service returns a [ListUserpoolsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListUserpoolsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /** A filter expression that filters resources listed in the response. */
    filter: string;
}

/** Response message for [UserpoolService.List]. */
export interface ListUserpoolsResponse {
    /** List of userpools. */
    userpools: Userpool[];
    /**
     * This token allows you to get the next page of results for list requests.
     * If the number of results is larger than [ListUserpoolsRequest.page_size],
     * use the [next_page_token] as the value for the [ListUserpoolsRequest.page_token]
     * query parameter in the next list request.
     */
    nextPageToken: string;
}

/** Request to create a userpool. */
export interface CreateUserpoolRequest {
    /** ID of the organization to create a userpool in. */
    organizationId: string;
    /**
     * Name of the userpool.
     * The name must be unique within the organization.
     */
    name: string;
    /** Description of the userpool. */
    description: string;
    /** Resource labels as key:value pairs. */
    labels: { [key: string]: string };
    /** Default subdomain for the userpool. */
    defaultSubdomain: string;
    /** User settings for the userpool. */
    userSettings?: UserSettings;
    /** Password quality policy for the userpool. */
    passwordQualityPolicy?: PasswordQualityPolicy;
    /** Password lifetime policy for the userpool. */
    passwordLifetimePolicy?: PasswordLifetimePolicy;
    /** Bruteforce protection policy for the userpool. */
    bruteforceProtectionPolicy?: BruteforceProtectionPolicy;
    /** Password blacklist policy for the userpool. */
    passwordBlacklistPolicy?: PasswordBlacklistPolicy;
}

export interface CreateUserpoolRequest_LabelsEntry {
    key: string;
    value: string;
}

/** Metadata for the [UserpoolService.Create] operation. */
export interface CreateUserpoolMetadata {
    /** ID of the userpool that is being created. */
    userpoolId: string;
}

/** Request to update a userpool. */
export interface UpdateUserpoolRequest {
    /**
     * ID of the userpool to update.
     * To get the userpool ID, make a [UserpoolService.List] request.
     */
    userpoolId: string;
    /** Field mask that specifies which fields of the userpool are going to be updated. */
    updateMask?: FieldMask;
    /**
     * Name of the userpool.
     * The name must be unique within the organization.
     */
    name: string;
    /** Description of the userpool. */
    description: string;
    /** Resource labels as key:value pairs. */
    labels: { [key: string]: string };
    /** User settings for the userpool. */
    userSettings?: UserSettings;
    /** Password quality policy for the userpool. */
    passwordQualityPolicy?: PasswordQualityPolicy;
    /** Password lifetime policy for the userpool. */
    passwordLifetimePolicy?: PasswordLifetimePolicy;
    /** Bruteforce protection policy for the userpool. */
    bruteforceProtectionPolicy?: BruteforceProtectionPolicy;
    /** Password blacklist policy for the userpool. */
    passwordBlacklistPolicy?: PasswordBlacklistPolicy;
}

export interface UpdateUserpoolRequest_LabelsEntry {
    key: string;
    value: string;
}

/** Metadata for the [UserpoolService.Update] operation. */
export interface UpdateUserpoolMetadata {
    /** ID of the userpool that is being updated. */
    userpoolId: string;
}

/** Request to delete a userpool. */
export interface DeleteUserpoolRequest {
    /**
     * ID of the userpool to delete.
     * To get the userpool ID, make a [UserpoolService.List] request.
     */
    userpoolId: string;
}

/** Metadata for the [UserpoolService.Delete] operation. */
export interface DeleteUserpoolMetadata {
    /** ID of the userpool that is being deleted. */
    userpoolId: string;
}

/** Request to get a domain for a userpool. */
export interface GetUserpoolDomainRequest {
    /** ID of the userpool to get a domain for. */
    userpoolId: string;
    /** Domain name. */
    domain: string;
}

/** Request to list domains for a userpool. */
export interface ListUserpoolDomainsRequest {
    /** ID of the userpool to list domains for. */
    userpoolId: string;
    /** The maximum number of results per page to return. */
    pageSize: number;
    /** Page token for pagination. */
    pageToken: string;
    /** A filter expression that filters resources listed in the response. */
    filter: string;
}

/** Response message for [UserpoolService.ListDomains]. */
export interface ListUserpoolDomainsResponse {
    /** List of domains. */
    domains: Domain[];
    /** Token for getting the next page of the list. */
    nextPageToken: string;
}

/** Request to add a domain to a userpool. */
export interface AddUserpoolDomainRequest {
    /** ID of the userpool to add a domain to. */
    userpoolId: string;
    /** Domain name to add. */
    domain: string;
}

/** Metadata for the [UserpoolService.AddDomain] operation. */
export interface AddUserpoolDomainMetadata {
    /** ID of the userpool. */
    userpoolId: string;
    /** Domain name being added. */
    domain: string;
}

/** Request to validate a domain for a userpool. */
export interface ValidateUserpoolDomainRequest {
    /** ID of the userpool to validate a domain for. */
    userpoolId: string;
    /** Domain name to validate. */
    domain: string;
}

/** Metadata for the [UserpoolService.ValidateDomain] operation. */
export interface ValidateUserpoolDomainMetadata {
    /** ID of the userpool. */
    userpoolId: string;
    /** Domain name being validated. */
    domain: string;
}

/** Request to delete a domain from a userpool. */
export interface DeleteUserpoolDomainRequest {
    /** ID of the userpool to delete a domain from. */
    userpoolId: string;
    /** Domain name to delete. */
    domain: string;
}

/** Metadata for the [UserpoolService.DeleteDomain] operation. */
export interface DeleteUserpoolDomainMetadata {
    /** ID of the userpool. */
    userpoolId: string;
    /** Domain name being deleted. */
    domain: string;
}

/** Request to list operations for a userpool. */
export interface ListUserpoolOperationsRequest {
    /** ID of the userpool to list operations for. */
    userpoolId: string;
    /** The maximum number of results per page to return. */
    pageSize: number;
    /** Page token for pagination. */
    pageToken: string;
}

/** Response message for [UserpoolService.ListOperations]. */
export interface ListUserpoolOperationsResponse {
    /** List of operations. */
    operations: Operation[];
    /** Token for getting the next page of the list. */
    nextPageToken: string;
}

const baseGetUserpoolRequest: object = { userpoolId: '' };

export const GetUserpoolRequest: {
    encode(message: GetUserpoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetUserpoolRequest;
    fromJSON(object: any): GetUserpoolRequest;
    toJSON(message: GetUserpoolRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetUserpoolRequest>, I>>(object: I): GetUserpoolRequest;
} = {
    encode(message: GetUserpoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userpoolId !== '') {
            writer.uint32(10).string(message.userpoolId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetUserpoolRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetUserpoolRequest } as GetUserpoolRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userpoolId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetUserpoolRequest {
        const message = { ...baseGetUserpoolRequest } as GetUserpoolRequest;
        message.userpoolId =
            object.userpoolId !== undefined && object.userpoolId !== null
                ? String(object.userpoolId)
                : '';
        return message;
    },

    toJSON(message: GetUserpoolRequest): unknown {
        const obj: any = {};
        message.userpoolId !== undefined && (obj.userpoolId = message.userpoolId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetUserpoolRequest>, I>>(
        object: I,
    ): GetUserpoolRequest {
        const message = { ...baseGetUserpoolRequest } as GetUserpoolRequest;
        message.userpoolId = object.userpoolId ?? '';
        return message;
    },
};

const baseListUserpoolsRequest: object = {
    organizationId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListUserpoolsRequest: {
    encode(message: ListUserpoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListUserpoolsRequest;
    fromJSON(object: any): ListUserpoolsRequest;
    toJSON(message: ListUserpoolsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListUserpoolsRequest>, I>>(object: I): ListUserpoolsRequest;
} = {
    encode(message: ListUserpoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListUserpoolsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListUserpoolsRequest } as ListUserpoolsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
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

    fromJSON(object: any): ListUserpoolsRequest {
        const message = { ...baseListUserpoolsRequest } as ListUserpoolsRequest;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
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

    toJSON(message: ListUserpoolsRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListUserpoolsRequest>, I>>(
        object: I,
    ): ListUserpoolsRequest {
        const message = { ...baseListUserpoolsRequest } as ListUserpoolsRequest;
        message.organizationId = object.organizationId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListUserpoolsResponse: object = { nextPageToken: '' };

export const ListUserpoolsResponse: {
    encode(message: ListUserpoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListUserpoolsResponse;
    fromJSON(object: any): ListUserpoolsResponse;
    toJSON(message: ListUserpoolsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListUserpoolsResponse>, I>>(object: I): ListUserpoolsResponse;
} = {
    encode(message: ListUserpoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.userpools) {
            Userpool.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListUserpoolsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListUserpoolsResponse } as ListUserpoolsResponse;
        message.userpools = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userpools.push(Userpool.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListUserpoolsResponse {
        const message = { ...baseListUserpoolsResponse } as ListUserpoolsResponse;
        message.userpools = (object.userpools ?? []).map((e: any) => Userpool.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListUserpoolsResponse): unknown {
        const obj: any = {};
        if (message.userpools) {
            obj.userpools = message.userpools.map((e) => (e ? Userpool.toJSON(e) : undefined));
        } else {
            obj.userpools = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListUserpoolsResponse>, I>>(
        object: I,
    ): ListUserpoolsResponse {
        const message = { ...baseListUserpoolsResponse } as ListUserpoolsResponse;
        message.userpools = object.userpools?.map((e) => Userpool.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateUserpoolRequest: object = {
    organizationId: '',
    name: '',
    description: '',
    defaultSubdomain: '',
};

export const CreateUserpoolRequest: {
    encode(message: CreateUserpoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserpoolRequest;
    fromJSON(object: any): CreateUserpoolRequest;
    toJSON(message: CreateUserpoolRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateUserpoolRequest>, I>>(object: I): CreateUserpoolRequest;
} = {
    encode(message: CreateUserpoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateUserpoolRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        if (message.defaultSubdomain !== '') {
            writer.uint32(42).string(message.defaultSubdomain);
        }
        if (message.userSettings !== undefined) {
            UserSettings.encode(message.userSettings, writer.uint32(50).fork()).ldelim();
        }
        if (message.passwordQualityPolicy !== undefined) {
            PasswordQualityPolicy.encode(
                message.passwordQualityPolicy,
                writer.uint32(58).fork(),
            ).ldelim();
        }
        if (message.passwordLifetimePolicy !== undefined) {
            PasswordLifetimePolicy.encode(
                message.passwordLifetimePolicy,
                writer.uint32(66).fork(),
            ).ldelim();
        }
        if (message.bruteforceProtectionPolicy !== undefined) {
            BruteforceProtectionPolicy.encode(
                message.bruteforceProtectionPolicy,
                writer.uint32(74).fork(),
            ).ldelim();
        }
        if (message.passwordBlacklistPolicy !== undefined) {
            PasswordBlacklistPolicy.encode(
                message.passwordBlacklistPolicy,
                writer.uint32(82).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserpoolRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateUserpoolRequest } as CreateUserpoolRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = CreateUserpoolRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.defaultSubdomain = reader.string();
                    break;
                case 6:
                    message.userSettings = UserSettings.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.passwordQualityPolicy = PasswordQualityPolicy.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 8:
                    message.passwordLifetimePolicy = PasswordLifetimePolicy.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 9:
                    message.bruteforceProtectionPolicy = BruteforceProtectionPolicy.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 10:
                    message.passwordBlacklistPolicy = PasswordBlacklistPolicy.decode(
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

    fromJSON(object: any): CreateUserpoolRequest {
        const message = { ...baseCreateUserpoolRequest } as CreateUserpoolRequest;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
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
        message.defaultSubdomain =
            object.defaultSubdomain !== undefined && object.defaultSubdomain !== null
                ? String(object.defaultSubdomain)
                : '';
        message.userSettings =
            object.userSettings !== undefined && object.userSettings !== null
                ? UserSettings.fromJSON(object.userSettings)
                : undefined;
        message.passwordQualityPolicy =
            object.passwordQualityPolicy !== undefined && object.passwordQualityPolicy !== null
                ? PasswordQualityPolicy.fromJSON(object.passwordQualityPolicy)
                : undefined;
        message.passwordLifetimePolicy =
            object.passwordLifetimePolicy !== undefined && object.passwordLifetimePolicy !== null
                ? PasswordLifetimePolicy.fromJSON(object.passwordLifetimePolicy)
                : undefined;
        message.bruteforceProtectionPolicy =
            object.bruteforceProtectionPolicy !== undefined &&
            object.bruteforceProtectionPolicy !== null
                ? BruteforceProtectionPolicy.fromJSON(object.bruteforceProtectionPolicy)
                : undefined;
        message.passwordBlacklistPolicy =
            object.passwordBlacklistPolicy !== undefined && object.passwordBlacklistPolicy !== null
                ? PasswordBlacklistPolicy.fromJSON(object.passwordBlacklistPolicy)
                : undefined;
        return message;
    },

    toJSON(message: CreateUserpoolRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.defaultSubdomain !== undefined && (obj.defaultSubdomain = message.defaultSubdomain);
        message.userSettings !== undefined &&
            (obj.userSettings = message.userSettings
                ? UserSettings.toJSON(message.userSettings)
                : undefined);
        message.passwordQualityPolicy !== undefined &&
            (obj.passwordQualityPolicy = message.passwordQualityPolicy
                ? PasswordQualityPolicy.toJSON(message.passwordQualityPolicy)
                : undefined);
        message.passwordLifetimePolicy !== undefined &&
            (obj.passwordLifetimePolicy = message.passwordLifetimePolicy
                ? PasswordLifetimePolicy.toJSON(message.passwordLifetimePolicy)
                : undefined);
        message.bruteforceProtectionPolicy !== undefined &&
            (obj.bruteforceProtectionPolicy = message.bruteforceProtectionPolicy
                ? BruteforceProtectionPolicy.toJSON(message.bruteforceProtectionPolicy)
                : undefined);
        message.passwordBlacklistPolicy !== undefined &&
            (obj.passwordBlacklistPolicy = message.passwordBlacklistPolicy
                ? PasswordBlacklistPolicy.toJSON(message.passwordBlacklistPolicy)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateUserpoolRequest>, I>>(
        object: I,
    ): CreateUserpoolRequest {
        const message = { ...baseCreateUserpoolRequest } as CreateUserpoolRequest;
        message.organizationId = object.organizationId ?? '';
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
        message.defaultSubdomain = object.defaultSubdomain ?? '';
        message.userSettings =
            object.userSettings !== undefined && object.userSettings !== null
                ? UserSettings.fromPartial(object.userSettings)
                : undefined;
        message.passwordQualityPolicy =
            object.passwordQualityPolicy !== undefined && object.passwordQualityPolicy !== null
                ? PasswordQualityPolicy.fromPartial(object.passwordQualityPolicy)
                : undefined;
        message.passwordLifetimePolicy =
            object.passwordLifetimePolicy !== undefined && object.passwordLifetimePolicy !== null
                ? PasswordLifetimePolicy.fromPartial(object.passwordLifetimePolicy)
                : undefined;
        message.bruteforceProtectionPolicy =
            object.bruteforceProtectionPolicy !== undefined &&
            object.bruteforceProtectionPolicy !== null
                ? BruteforceProtectionPolicy.fromPartial(object.bruteforceProtectionPolicy)
                : undefined;
        message.passwordBlacklistPolicy =
            object.passwordBlacklistPolicy !== undefined && object.passwordBlacklistPolicy !== null
                ? PasswordBlacklistPolicy.fromPartial(object.passwordBlacklistPolicy)
                : undefined;
        return message;
    },
};

const baseCreateUserpoolRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateUserpoolRequest_LabelsEntry: {
    encode(message: CreateUserpoolRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserpoolRequest_LabelsEntry;
    fromJSON(object: any): CreateUserpoolRequest_LabelsEntry;
    toJSON(message: CreateUserpoolRequest_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateUserpoolRequest_LabelsEntry>, I>>(object: I): CreateUserpoolRequest_LabelsEntry;
} = {
    encode(
        message: CreateUserpoolRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserpoolRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateUserpoolRequest_LabelsEntry,
        } as CreateUserpoolRequest_LabelsEntry;
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

    fromJSON(object: any): CreateUserpoolRequest_LabelsEntry {
        const message = {
            ...baseCreateUserpoolRequest_LabelsEntry,
        } as CreateUserpoolRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateUserpoolRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateUserpoolRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateUserpoolRequest_LabelsEntry {
        const message = {
            ...baseCreateUserpoolRequest_LabelsEntry,
        } as CreateUserpoolRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateUserpoolMetadata: object = { userpoolId: '' };

export const CreateUserpoolMetadata: {
    encode(message: CreateUserpoolMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserpoolMetadata;
    fromJSON(object: any): CreateUserpoolMetadata;
    toJSON(message: CreateUserpoolMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateUserpoolMetadata>, I>>(object: I): CreateUserpoolMetadata;
} = {
    encode(message: CreateUserpoolMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userpoolId !== '') {
            writer.uint32(10).string(message.userpoolId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserpoolMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateUserpoolMetadata } as CreateUserpoolMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userpoolId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateUserpoolMetadata {
        const message = { ...baseCreateUserpoolMetadata } as CreateUserpoolMetadata;
        message.userpoolId =
            object.userpoolId !== undefined && object.userpoolId !== null
                ? String(object.userpoolId)
                : '';
        return message;
    },

    toJSON(message: CreateUserpoolMetadata): unknown {
        const obj: any = {};
        message.userpoolId !== undefined && (obj.userpoolId = message.userpoolId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateUserpoolMetadata>, I>>(
        object: I,
    ): CreateUserpoolMetadata {
        const message = { ...baseCreateUserpoolMetadata } as CreateUserpoolMetadata;
        message.userpoolId = object.userpoolId ?? '';
        return message;
    },
};

const baseUpdateUserpoolRequest: object = { userpoolId: '', name: '', description: '' };

export const UpdateUserpoolRequest: {
    encode(message: UpdateUserpoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserpoolRequest;
    fromJSON(object: any): UpdateUserpoolRequest;
    toJSON(message: UpdateUserpoolRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateUserpoolRequest>, I>>(object: I): UpdateUserpoolRequest;
} = {
    encode(message: UpdateUserpoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userpoolId !== '') {
            writer.uint32(10).string(message.userpoolId);
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
            UpdateUserpoolRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        if (message.userSettings !== undefined) {
            UserSettings.encode(message.userSettings, writer.uint32(50).fork()).ldelim();
        }
        if (message.passwordQualityPolicy !== undefined) {
            PasswordQualityPolicy.encode(
                message.passwordQualityPolicy,
                writer.uint32(58).fork(),
            ).ldelim();
        }
        if (message.passwordLifetimePolicy !== undefined) {
            PasswordLifetimePolicy.encode(
                message.passwordLifetimePolicy,
                writer.uint32(66).fork(),
            ).ldelim();
        }
        if (message.bruteforceProtectionPolicy !== undefined) {
            BruteforceProtectionPolicy.encode(
                message.bruteforceProtectionPolicy,
                writer.uint32(74).fork(),
            ).ldelim();
        }
        if (message.passwordBlacklistPolicy !== undefined) {
            PasswordBlacklistPolicy.encode(
                message.passwordBlacklistPolicy,
                writer.uint32(82).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserpoolRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateUserpoolRequest } as UpdateUserpoolRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userpoolId = reader.string();
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
                    const entry5 = UpdateUserpoolRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.userSettings = UserSettings.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.passwordQualityPolicy = PasswordQualityPolicy.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 8:
                    message.passwordLifetimePolicy = PasswordLifetimePolicy.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 9:
                    message.bruteforceProtectionPolicy = BruteforceProtectionPolicy.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 10:
                    message.passwordBlacklistPolicy = PasswordBlacklistPolicy.decode(
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

    fromJSON(object: any): UpdateUserpoolRequest {
        const message = { ...baseUpdateUserpoolRequest } as UpdateUserpoolRequest;
        message.userpoolId =
            object.userpoolId !== undefined && object.userpoolId !== null
                ? String(object.userpoolId)
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
        message.userSettings =
            object.userSettings !== undefined && object.userSettings !== null
                ? UserSettings.fromJSON(object.userSettings)
                : undefined;
        message.passwordQualityPolicy =
            object.passwordQualityPolicy !== undefined && object.passwordQualityPolicy !== null
                ? PasswordQualityPolicy.fromJSON(object.passwordQualityPolicy)
                : undefined;
        message.passwordLifetimePolicy =
            object.passwordLifetimePolicy !== undefined && object.passwordLifetimePolicy !== null
                ? PasswordLifetimePolicy.fromJSON(object.passwordLifetimePolicy)
                : undefined;
        message.bruteforceProtectionPolicy =
            object.bruteforceProtectionPolicy !== undefined &&
            object.bruteforceProtectionPolicy !== null
                ? BruteforceProtectionPolicy.fromJSON(object.bruteforceProtectionPolicy)
                : undefined;
        message.passwordBlacklistPolicy =
            object.passwordBlacklistPolicy !== undefined && object.passwordBlacklistPolicy !== null
                ? PasswordBlacklistPolicy.fromJSON(object.passwordBlacklistPolicy)
                : undefined;
        return message;
    },

    toJSON(message: UpdateUserpoolRequest): unknown {
        const obj: any = {};
        message.userpoolId !== undefined && (obj.userpoolId = message.userpoolId);
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
        message.userSettings !== undefined &&
            (obj.userSettings = message.userSettings
                ? UserSettings.toJSON(message.userSettings)
                : undefined);
        message.passwordQualityPolicy !== undefined &&
            (obj.passwordQualityPolicy = message.passwordQualityPolicy
                ? PasswordQualityPolicy.toJSON(message.passwordQualityPolicy)
                : undefined);
        message.passwordLifetimePolicy !== undefined &&
            (obj.passwordLifetimePolicy = message.passwordLifetimePolicy
                ? PasswordLifetimePolicy.toJSON(message.passwordLifetimePolicy)
                : undefined);
        message.bruteforceProtectionPolicy !== undefined &&
            (obj.bruteforceProtectionPolicy = message.bruteforceProtectionPolicy
                ? BruteforceProtectionPolicy.toJSON(message.bruteforceProtectionPolicy)
                : undefined);
        message.passwordBlacklistPolicy !== undefined &&
            (obj.passwordBlacklistPolicy = message.passwordBlacklistPolicy
                ? PasswordBlacklistPolicy.toJSON(message.passwordBlacklistPolicy)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateUserpoolRequest>, I>>(
        object: I,
    ): UpdateUserpoolRequest {
        const message = { ...baseUpdateUserpoolRequest } as UpdateUserpoolRequest;
        message.userpoolId = object.userpoolId ?? '';
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
        message.userSettings =
            object.userSettings !== undefined && object.userSettings !== null
                ? UserSettings.fromPartial(object.userSettings)
                : undefined;
        message.passwordQualityPolicy =
            object.passwordQualityPolicy !== undefined && object.passwordQualityPolicy !== null
                ? PasswordQualityPolicy.fromPartial(object.passwordQualityPolicy)
                : undefined;
        message.passwordLifetimePolicy =
            object.passwordLifetimePolicy !== undefined && object.passwordLifetimePolicy !== null
                ? PasswordLifetimePolicy.fromPartial(object.passwordLifetimePolicy)
                : undefined;
        message.bruteforceProtectionPolicy =
            object.bruteforceProtectionPolicy !== undefined &&
            object.bruteforceProtectionPolicy !== null
                ? BruteforceProtectionPolicy.fromPartial(object.bruteforceProtectionPolicy)
                : undefined;
        message.passwordBlacklistPolicy =
            object.passwordBlacklistPolicy !== undefined && object.passwordBlacklistPolicy !== null
                ? PasswordBlacklistPolicy.fromPartial(object.passwordBlacklistPolicy)
                : undefined;
        return message;
    },
};

const baseUpdateUserpoolRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateUserpoolRequest_LabelsEntry: {
    encode(message: UpdateUserpoolRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserpoolRequest_LabelsEntry;
    fromJSON(object: any): UpdateUserpoolRequest_LabelsEntry;
    toJSON(message: UpdateUserpoolRequest_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateUserpoolRequest_LabelsEntry>, I>>(object: I): UpdateUserpoolRequest_LabelsEntry;
} = {
    encode(
        message: UpdateUserpoolRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserpoolRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateUserpoolRequest_LabelsEntry,
        } as UpdateUserpoolRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateUserpoolRequest_LabelsEntry {
        const message = {
            ...baseUpdateUserpoolRequest_LabelsEntry,
        } as UpdateUserpoolRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateUserpoolRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateUserpoolRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateUserpoolRequest_LabelsEntry {
        const message = {
            ...baseUpdateUserpoolRequest_LabelsEntry,
        } as UpdateUserpoolRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateUserpoolMetadata: object = { userpoolId: '' };

export const UpdateUserpoolMetadata: {
    encode(message: UpdateUserpoolMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserpoolMetadata;
    fromJSON(object: any): UpdateUserpoolMetadata;
    toJSON(message: UpdateUserpoolMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateUserpoolMetadata>, I>>(object: I): UpdateUserpoolMetadata;
} = {
    encode(message: UpdateUserpoolMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userpoolId !== '') {
            writer.uint32(10).string(message.userpoolId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserpoolMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateUserpoolMetadata } as UpdateUserpoolMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userpoolId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateUserpoolMetadata {
        const message = { ...baseUpdateUserpoolMetadata } as UpdateUserpoolMetadata;
        message.userpoolId =
            object.userpoolId !== undefined && object.userpoolId !== null
                ? String(object.userpoolId)
                : '';
        return message;
    },

    toJSON(message: UpdateUserpoolMetadata): unknown {
        const obj: any = {};
        message.userpoolId !== undefined && (obj.userpoolId = message.userpoolId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateUserpoolMetadata>, I>>(
        object: I,
    ): UpdateUserpoolMetadata {
        const message = { ...baseUpdateUserpoolMetadata } as UpdateUserpoolMetadata;
        message.userpoolId = object.userpoolId ?? '';
        return message;
    },
};

const baseDeleteUserpoolRequest: object = { userpoolId: '' };

export const DeleteUserpoolRequest: {
    encode(message: DeleteUserpoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserpoolRequest;
    fromJSON(object: any): DeleteUserpoolRequest;
    toJSON(message: DeleteUserpoolRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteUserpoolRequest>, I>>(object: I): DeleteUserpoolRequest;
} = {
    encode(message: DeleteUserpoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userpoolId !== '') {
            writer.uint32(10).string(message.userpoolId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserpoolRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteUserpoolRequest } as DeleteUserpoolRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userpoolId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteUserpoolRequest {
        const message = { ...baseDeleteUserpoolRequest } as DeleteUserpoolRequest;
        message.userpoolId =
            object.userpoolId !== undefined && object.userpoolId !== null
                ? String(object.userpoolId)
                : '';
        return message;
    },

    toJSON(message: DeleteUserpoolRequest): unknown {
        const obj: any = {};
        message.userpoolId !== undefined && (obj.userpoolId = message.userpoolId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteUserpoolRequest>, I>>(
        object: I,
    ): DeleteUserpoolRequest {
        const message = { ...baseDeleteUserpoolRequest } as DeleteUserpoolRequest;
        message.userpoolId = object.userpoolId ?? '';
        return message;
    },
};

const baseDeleteUserpoolMetadata: object = { userpoolId: '' };

export const DeleteUserpoolMetadata: {
    encode(message: DeleteUserpoolMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserpoolMetadata;
    fromJSON(object: any): DeleteUserpoolMetadata;
    toJSON(message: DeleteUserpoolMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteUserpoolMetadata>, I>>(object: I): DeleteUserpoolMetadata;
} = {
    encode(message: DeleteUserpoolMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userpoolId !== '') {
            writer.uint32(10).string(message.userpoolId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserpoolMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteUserpoolMetadata } as DeleteUserpoolMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userpoolId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteUserpoolMetadata {
        const message = { ...baseDeleteUserpoolMetadata } as DeleteUserpoolMetadata;
        message.userpoolId =
            object.userpoolId !== undefined && object.userpoolId !== null
                ? String(object.userpoolId)
                : '';
        return message;
    },

    toJSON(message: DeleteUserpoolMetadata): unknown {
        const obj: any = {};
        message.userpoolId !== undefined && (obj.userpoolId = message.userpoolId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteUserpoolMetadata>, I>>(
        object: I,
    ): DeleteUserpoolMetadata {
        const message = { ...baseDeleteUserpoolMetadata } as DeleteUserpoolMetadata;
        message.userpoolId = object.userpoolId ?? '';
        return message;
    },
};

const baseGetUserpoolDomainRequest: object = { userpoolId: '', domain: '' };

export const GetUserpoolDomainRequest: {
    encode(message: GetUserpoolDomainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetUserpoolDomainRequest;
    fromJSON(object: any): GetUserpoolDomainRequest;
    toJSON(message: GetUserpoolDomainRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetUserpoolDomainRequest>, I>>(object: I): GetUserpoolDomainRequest;
} = {
    encode(
        message: GetUserpoolDomainRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.userpoolId !== '') {
            writer.uint32(10).string(message.userpoolId);
        }
        if (message.domain !== '') {
            writer.uint32(18).string(message.domain);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetUserpoolDomainRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetUserpoolDomainRequest } as GetUserpoolDomainRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userpoolId = reader.string();
                    break;
                case 2:
                    message.domain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetUserpoolDomainRequest {
        const message = { ...baseGetUserpoolDomainRequest } as GetUserpoolDomainRequest;
        message.userpoolId =
            object.userpoolId !== undefined && object.userpoolId !== null
                ? String(object.userpoolId)
                : '';
        message.domain =
            object.domain !== undefined && object.domain !== null ? String(object.domain) : '';
        return message;
    },

    toJSON(message: GetUserpoolDomainRequest): unknown {
        const obj: any = {};
        message.userpoolId !== undefined && (obj.userpoolId = message.userpoolId);
        message.domain !== undefined && (obj.domain = message.domain);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetUserpoolDomainRequest>, I>>(
        object: I,
    ): GetUserpoolDomainRequest {
        const message = { ...baseGetUserpoolDomainRequest } as GetUserpoolDomainRequest;
        message.userpoolId = object.userpoolId ?? '';
        message.domain = object.domain ?? '';
        return message;
    },
};

const baseListUserpoolDomainsRequest: object = {
    userpoolId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListUserpoolDomainsRequest: {
    encode(message: ListUserpoolDomainsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListUserpoolDomainsRequest;
    fromJSON(object: any): ListUserpoolDomainsRequest;
    toJSON(message: ListUserpoolDomainsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListUserpoolDomainsRequest>, I>>(object: I): ListUserpoolDomainsRequest;
} = {
    encode(
        message: ListUserpoolDomainsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.userpoolId !== '') {
            writer.uint32(10).string(message.userpoolId);
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListUserpoolDomainsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListUserpoolDomainsRequest } as ListUserpoolDomainsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userpoolId = reader.string();
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

    fromJSON(object: any): ListUserpoolDomainsRequest {
        const message = { ...baseListUserpoolDomainsRequest } as ListUserpoolDomainsRequest;
        message.userpoolId =
            object.userpoolId !== undefined && object.userpoolId !== null
                ? String(object.userpoolId)
                : '';
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

    toJSON(message: ListUserpoolDomainsRequest): unknown {
        const obj: any = {};
        message.userpoolId !== undefined && (obj.userpoolId = message.userpoolId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListUserpoolDomainsRequest>, I>>(
        object: I,
    ): ListUserpoolDomainsRequest {
        const message = { ...baseListUserpoolDomainsRequest } as ListUserpoolDomainsRequest;
        message.userpoolId = object.userpoolId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListUserpoolDomainsResponse: object = { nextPageToken: '' };

export const ListUserpoolDomainsResponse: {
    encode(message: ListUserpoolDomainsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListUserpoolDomainsResponse;
    fromJSON(object: any): ListUserpoolDomainsResponse;
    toJSON(message: ListUserpoolDomainsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListUserpoolDomainsResponse>, I>>(object: I): ListUserpoolDomainsResponse;
} = {
    encode(
        message: ListUserpoolDomainsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.domains) {
            Domain.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListUserpoolDomainsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListUserpoolDomainsResponse } as ListUserpoolDomainsResponse;
        message.domains = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.domains.push(Domain.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListUserpoolDomainsResponse {
        const message = { ...baseListUserpoolDomainsResponse } as ListUserpoolDomainsResponse;
        message.domains = (object.domains ?? []).map((e: any) => Domain.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListUserpoolDomainsResponse): unknown {
        const obj: any = {};
        if (message.domains) {
            obj.domains = message.domains.map((e) => (e ? Domain.toJSON(e) : undefined));
        } else {
            obj.domains = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListUserpoolDomainsResponse>, I>>(
        object: I,
    ): ListUserpoolDomainsResponse {
        const message = { ...baseListUserpoolDomainsResponse } as ListUserpoolDomainsResponse;
        message.domains = object.domains?.map((e) => Domain.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseAddUserpoolDomainRequest: object = { userpoolId: '', domain: '' };

export const AddUserpoolDomainRequest: {
    encode(message: AddUserpoolDomainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddUserpoolDomainRequest;
    fromJSON(object: any): AddUserpoolDomainRequest;
    toJSON(message: AddUserpoolDomainRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<AddUserpoolDomainRequest>, I>>(object: I): AddUserpoolDomainRequest;
} = {
    encode(
        message: AddUserpoolDomainRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.userpoolId !== '') {
            writer.uint32(10).string(message.userpoolId);
        }
        if (message.domain !== '') {
            writer.uint32(18).string(message.domain);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddUserpoolDomainRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddUserpoolDomainRequest } as AddUserpoolDomainRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userpoolId = reader.string();
                    break;
                case 2:
                    message.domain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddUserpoolDomainRequest {
        const message = { ...baseAddUserpoolDomainRequest } as AddUserpoolDomainRequest;
        message.userpoolId =
            object.userpoolId !== undefined && object.userpoolId !== null
                ? String(object.userpoolId)
                : '';
        message.domain =
            object.domain !== undefined && object.domain !== null ? String(object.domain) : '';
        return message;
    },

    toJSON(message: AddUserpoolDomainRequest): unknown {
        const obj: any = {};
        message.userpoolId !== undefined && (obj.userpoolId = message.userpoolId);
        message.domain !== undefined && (obj.domain = message.domain);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AddUserpoolDomainRequest>, I>>(
        object: I,
    ): AddUserpoolDomainRequest {
        const message = { ...baseAddUserpoolDomainRequest } as AddUserpoolDomainRequest;
        message.userpoolId = object.userpoolId ?? '';
        message.domain = object.domain ?? '';
        return message;
    },
};

const baseAddUserpoolDomainMetadata: object = { userpoolId: '', domain: '' };

export const AddUserpoolDomainMetadata: {
    encode(message: AddUserpoolDomainMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddUserpoolDomainMetadata;
    fromJSON(object: any): AddUserpoolDomainMetadata;
    toJSON(message: AddUserpoolDomainMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<AddUserpoolDomainMetadata>, I>>(object: I): AddUserpoolDomainMetadata;
} = {
    encode(
        message: AddUserpoolDomainMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.userpoolId !== '') {
            writer.uint32(10).string(message.userpoolId);
        }
        if (message.domain !== '') {
            writer.uint32(18).string(message.domain);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddUserpoolDomainMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddUserpoolDomainMetadata } as AddUserpoolDomainMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userpoolId = reader.string();
                    break;
                case 2:
                    message.domain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddUserpoolDomainMetadata {
        const message = { ...baseAddUserpoolDomainMetadata } as AddUserpoolDomainMetadata;
        message.userpoolId =
            object.userpoolId !== undefined && object.userpoolId !== null
                ? String(object.userpoolId)
                : '';
        message.domain =
            object.domain !== undefined && object.domain !== null ? String(object.domain) : '';
        return message;
    },

    toJSON(message: AddUserpoolDomainMetadata): unknown {
        const obj: any = {};
        message.userpoolId !== undefined && (obj.userpoolId = message.userpoolId);
        message.domain !== undefined && (obj.domain = message.domain);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AddUserpoolDomainMetadata>, I>>(
        object: I,
    ): AddUserpoolDomainMetadata {
        const message = { ...baseAddUserpoolDomainMetadata } as AddUserpoolDomainMetadata;
        message.userpoolId = object.userpoolId ?? '';
        message.domain = object.domain ?? '';
        return message;
    },
};

const baseValidateUserpoolDomainRequest: object = { userpoolId: '', domain: '' };

export const ValidateUserpoolDomainRequest: {
    encode(message: ValidateUserpoolDomainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidateUserpoolDomainRequest;
    fromJSON(object: any): ValidateUserpoolDomainRequest;
    toJSON(message: ValidateUserpoolDomainRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ValidateUserpoolDomainRequest>, I>>(object: I): ValidateUserpoolDomainRequest;
} = {
    encode(
        message: ValidateUserpoolDomainRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.userpoolId !== '') {
            writer.uint32(10).string(message.userpoolId);
        }
        if (message.domain !== '') {
            writer.uint32(18).string(message.domain);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ValidateUserpoolDomainRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseValidateUserpoolDomainRequest } as ValidateUserpoolDomainRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userpoolId = reader.string();
                    break;
                case 2:
                    message.domain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ValidateUserpoolDomainRequest {
        const message = { ...baseValidateUserpoolDomainRequest } as ValidateUserpoolDomainRequest;
        message.userpoolId =
            object.userpoolId !== undefined && object.userpoolId !== null
                ? String(object.userpoolId)
                : '';
        message.domain =
            object.domain !== undefined && object.domain !== null ? String(object.domain) : '';
        return message;
    },

    toJSON(message: ValidateUserpoolDomainRequest): unknown {
        const obj: any = {};
        message.userpoolId !== undefined && (obj.userpoolId = message.userpoolId);
        message.domain !== undefined && (obj.domain = message.domain);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ValidateUserpoolDomainRequest>, I>>(
        object: I,
    ): ValidateUserpoolDomainRequest {
        const message = { ...baseValidateUserpoolDomainRequest } as ValidateUserpoolDomainRequest;
        message.userpoolId = object.userpoolId ?? '';
        message.domain = object.domain ?? '';
        return message;
    },
};

const baseValidateUserpoolDomainMetadata: object = { userpoolId: '', domain: '' };

export const ValidateUserpoolDomainMetadata: {
    encode(message: ValidateUserpoolDomainMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidateUserpoolDomainMetadata;
    fromJSON(object: any): ValidateUserpoolDomainMetadata;
    toJSON(message: ValidateUserpoolDomainMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<ValidateUserpoolDomainMetadata>, I>>(object: I): ValidateUserpoolDomainMetadata;
} = {
    encode(
        message: ValidateUserpoolDomainMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.userpoolId !== '') {
            writer.uint32(10).string(message.userpoolId);
        }
        if (message.domain !== '') {
            writer.uint32(18).string(message.domain);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ValidateUserpoolDomainMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseValidateUserpoolDomainMetadata } as ValidateUserpoolDomainMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userpoolId = reader.string();
                    break;
                case 2:
                    message.domain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ValidateUserpoolDomainMetadata {
        const message = { ...baseValidateUserpoolDomainMetadata } as ValidateUserpoolDomainMetadata;
        message.userpoolId =
            object.userpoolId !== undefined && object.userpoolId !== null
                ? String(object.userpoolId)
                : '';
        message.domain =
            object.domain !== undefined && object.domain !== null ? String(object.domain) : '';
        return message;
    },

    toJSON(message: ValidateUserpoolDomainMetadata): unknown {
        const obj: any = {};
        message.userpoolId !== undefined && (obj.userpoolId = message.userpoolId);
        message.domain !== undefined && (obj.domain = message.domain);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ValidateUserpoolDomainMetadata>, I>>(
        object: I,
    ): ValidateUserpoolDomainMetadata {
        const message = { ...baseValidateUserpoolDomainMetadata } as ValidateUserpoolDomainMetadata;
        message.userpoolId = object.userpoolId ?? '';
        message.domain = object.domain ?? '';
        return message;
    },
};

const baseDeleteUserpoolDomainRequest: object = { userpoolId: '', domain: '' };

export const DeleteUserpoolDomainRequest: {
    encode(message: DeleteUserpoolDomainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserpoolDomainRequest;
    fromJSON(object: any): DeleteUserpoolDomainRequest;
    toJSON(message: DeleteUserpoolDomainRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteUserpoolDomainRequest>, I>>(object: I): DeleteUserpoolDomainRequest;
} = {
    encode(
        message: DeleteUserpoolDomainRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.userpoolId !== '') {
            writer.uint32(10).string(message.userpoolId);
        }
        if (message.domain !== '') {
            writer.uint32(18).string(message.domain);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserpoolDomainRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteUserpoolDomainRequest } as DeleteUserpoolDomainRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userpoolId = reader.string();
                    break;
                case 2:
                    message.domain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteUserpoolDomainRequest {
        const message = { ...baseDeleteUserpoolDomainRequest } as DeleteUserpoolDomainRequest;
        message.userpoolId =
            object.userpoolId !== undefined && object.userpoolId !== null
                ? String(object.userpoolId)
                : '';
        message.domain =
            object.domain !== undefined && object.domain !== null ? String(object.domain) : '';
        return message;
    },

    toJSON(message: DeleteUserpoolDomainRequest): unknown {
        const obj: any = {};
        message.userpoolId !== undefined && (obj.userpoolId = message.userpoolId);
        message.domain !== undefined && (obj.domain = message.domain);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteUserpoolDomainRequest>, I>>(
        object: I,
    ): DeleteUserpoolDomainRequest {
        const message = { ...baseDeleteUserpoolDomainRequest } as DeleteUserpoolDomainRequest;
        message.userpoolId = object.userpoolId ?? '';
        message.domain = object.domain ?? '';
        return message;
    },
};

const baseDeleteUserpoolDomainMetadata: object = { userpoolId: '', domain: '' };

export const DeleteUserpoolDomainMetadata: {
    encode(message: DeleteUserpoolDomainMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserpoolDomainMetadata;
    fromJSON(object: any): DeleteUserpoolDomainMetadata;
    toJSON(message: DeleteUserpoolDomainMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteUserpoolDomainMetadata>, I>>(object: I): DeleteUserpoolDomainMetadata;
} = {
    encode(
        message: DeleteUserpoolDomainMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.userpoolId !== '') {
            writer.uint32(10).string(message.userpoolId);
        }
        if (message.domain !== '') {
            writer.uint32(18).string(message.domain);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserpoolDomainMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteUserpoolDomainMetadata } as DeleteUserpoolDomainMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userpoolId = reader.string();
                    break;
                case 2:
                    message.domain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteUserpoolDomainMetadata {
        const message = { ...baseDeleteUserpoolDomainMetadata } as DeleteUserpoolDomainMetadata;
        message.userpoolId =
            object.userpoolId !== undefined && object.userpoolId !== null
                ? String(object.userpoolId)
                : '';
        message.domain =
            object.domain !== undefined && object.domain !== null ? String(object.domain) : '';
        return message;
    },

    toJSON(message: DeleteUserpoolDomainMetadata): unknown {
        const obj: any = {};
        message.userpoolId !== undefined && (obj.userpoolId = message.userpoolId);
        message.domain !== undefined && (obj.domain = message.domain);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteUserpoolDomainMetadata>, I>>(
        object: I,
    ): DeleteUserpoolDomainMetadata {
        const message = { ...baseDeleteUserpoolDomainMetadata } as DeleteUserpoolDomainMetadata;
        message.userpoolId = object.userpoolId ?? '';
        message.domain = object.domain ?? '';
        return message;
    },
};

const baseListUserpoolOperationsRequest: object = { userpoolId: '', pageSize: 0, pageToken: '' };

export const ListUserpoolOperationsRequest: {
    encode(message: ListUserpoolOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListUserpoolOperationsRequest;
    fromJSON(object: any): ListUserpoolOperationsRequest;
    toJSON(message: ListUserpoolOperationsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListUserpoolOperationsRequest>, I>>(object: I): ListUserpoolOperationsRequest;
} = {
    encode(
        message: ListUserpoolOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.userpoolId !== '') {
            writer.uint32(10).string(message.userpoolId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListUserpoolOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListUserpoolOperationsRequest } as ListUserpoolOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userpoolId = reader.string();
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

    fromJSON(object: any): ListUserpoolOperationsRequest {
        const message = { ...baseListUserpoolOperationsRequest } as ListUserpoolOperationsRequest;
        message.userpoolId =
            object.userpoolId !== undefined && object.userpoolId !== null
                ? String(object.userpoolId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListUserpoolOperationsRequest): unknown {
        const obj: any = {};
        message.userpoolId !== undefined && (obj.userpoolId = message.userpoolId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListUserpoolOperationsRequest>, I>>(
        object: I,
    ): ListUserpoolOperationsRequest {
        const message = { ...baseListUserpoolOperationsRequest } as ListUserpoolOperationsRequest;
        message.userpoolId = object.userpoolId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListUserpoolOperationsResponse: object = { nextPageToken: '' };

export const ListUserpoolOperationsResponse: {
    encode(message: ListUserpoolOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListUserpoolOperationsResponse;
    fromJSON(object: any): ListUserpoolOperationsResponse;
    toJSON(message: ListUserpoolOperationsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListUserpoolOperationsResponse>, I>>(object: I): ListUserpoolOperationsResponse;
} = {
    encode(
        message: ListUserpoolOperationsResponse,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListUserpoolOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListUserpoolOperationsResponse } as ListUserpoolOperationsResponse;
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

    fromJSON(object: any): ListUserpoolOperationsResponse {
        const message = { ...baseListUserpoolOperationsResponse } as ListUserpoolOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListUserpoolOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListUserpoolOperationsResponse>, I>>(
        object: I,
    ): ListUserpoolOperationsResponse {
        const message = { ...baseListUserpoolOperationsResponse } as ListUserpoolOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** A set of methods for managing userpools. */
export const UserpoolServiceService = {
    /**
     * Returns the specified userpool.
     *
     * To get the list of available userpools, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserpoolService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetUserpoolRequest) =>
            Buffer.from(GetUserpoolRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetUserpoolRequest.decode(value),
        responseSerialize: (value: Userpool) => Buffer.from(Userpool.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Userpool.decode(value),
    },
    /** Retrieves the list of userpools in the specified organization. */
    list: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserpoolService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListUserpoolsRequest) =>
            Buffer.from(ListUserpoolsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListUserpoolsRequest.decode(value),
        responseSerialize: (value: ListUserpoolsResponse) =>
            Buffer.from(ListUserpoolsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListUserpoolsResponse.decode(value),
    },
    /** Creates a userpool in the specified organization. */
    create: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserpoolService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateUserpoolRequest) =>
            Buffer.from(CreateUserpoolRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateUserpoolRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified userpool. */
    update: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserpoolService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateUserpoolRequest) =>
            Buffer.from(UpdateUserpoolRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateUserpoolRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified userpool. */
    delete: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserpoolService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteUserpoolRequest) =>
            Buffer.from(DeleteUserpoolRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteUserpoolRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Returns the specified domain for a userpool. */
    getDomain: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserpoolService/GetDomain',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetUserpoolDomainRequest) =>
            Buffer.from(GetUserpoolDomainRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetUserpoolDomainRequest.decode(value),
        responseSerialize: (value: Domain) => Buffer.from(Domain.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Domain.decode(value),
    },
    /** Lists domains for the specified userpool. */
    listDomains: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserpoolService/ListDomains',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListUserpoolDomainsRequest) =>
            Buffer.from(ListUserpoolDomainsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListUserpoolDomainsRequest.decode(value),
        responseSerialize: (value: ListUserpoolDomainsResponse) =>
            Buffer.from(ListUserpoolDomainsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListUserpoolDomainsResponse.decode(value),
    },
    /** Adds a domain to the specified userpool. */
    addDomain: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserpoolService/AddDomain',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: AddUserpoolDomainRequest) =>
            Buffer.from(AddUserpoolDomainRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => AddUserpoolDomainRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Validates the specified domain for a userpool. */
    validateDomain: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserpoolService/ValidateDomain',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ValidateUserpoolDomainRequest) =>
            Buffer.from(ValidateUserpoolDomainRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ValidateUserpoolDomainRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified domain from a userpool. */
    deleteDomain: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserpoolService/DeleteDomain',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteUserpoolDomainRequest) =>
            Buffer.from(DeleteUserpoolDomainRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteUserpoolDomainRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified userpool. */
    listOperations: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserpoolService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListUserpoolOperationsRequest) =>
            Buffer.from(ListUserpoolOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListUserpoolOperationsRequest.decode(value),
        responseSerialize: (value: ListUserpoolOperationsResponse) =>
            Buffer.from(ListUserpoolOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListUserpoolOperationsResponse.decode(value),
    },
    /** Lists access bindings for the specified userpool. */
    listAccessBindings: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserpoolService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified userpool. */
    setAccessBindings: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserpoolService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetAccessBindingsRequest) =>
            Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates access bindings for the specified userpool. */
    updateAccessBindings: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserpoolService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface UserpoolServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified userpool.
     *
     * To get the list of available userpools, make a [List] request.
     */
    get: handleUnaryCall<GetUserpoolRequest, Userpool>;
    /** Retrieves the list of userpools in the specified organization. */
    list: handleUnaryCall<ListUserpoolsRequest, ListUserpoolsResponse>;
    /** Creates a userpool in the specified organization. */
    create: handleUnaryCall<CreateUserpoolRequest, Operation>;
    /** Updates the specified userpool. */
    update: handleUnaryCall<UpdateUserpoolRequest, Operation>;
    /** Deletes the specified userpool. */
    delete: handleUnaryCall<DeleteUserpoolRequest, Operation>;
    /** Returns the specified domain for a userpool. */
    getDomain: handleUnaryCall<GetUserpoolDomainRequest, Domain>;
    /** Lists domains for the specified userpool. */
    listDomains: handleUnaryCall<ListUserpoolDomainsRequest, ListUserpoolDomainsResponse>;
    /** Adds a domain to the specified userpool. */
    addDomain: handleUnaryCall<AddUserpoolDomainRequest, Operation>;
    /** Validates the specified domain for a userpool. */
    validateDomain: handleUnaryCall<ValidateUserpoolDomainRequest, Operation>;
    /** Deletes the specified domain from a userpool. */
    deleteDomain: handleUnaryCall<DeleteUserpoolDomainRequest, Operation>;
    /** Lists operations for the specified userpool. */
    listOperations: handleUnaryCall<ListUserpoolOperationsRequest, ListUserpoolOperationsResponse>;
    /** Lists access bindings for the specified userpool. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the specified userpool. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified userpool. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface UserpoolServiceClient extends Client {
    /**
     * Returns the specified userpool.
     *
     * To get the list of available userpools, make a [List] request.
     */
    get(
        request: GetUserpoolRequest,
        callback: (error: ServiceError | null, response: Userpool) => void,
    ): ClientUnaryCall;
    get(
        request: GetUserpoolRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Userpool) => void,
    ): ClientUnaryCall;
    get(
        request: GetUserpoolRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Userpool) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of userpools in the specified organization. */
    list(
        request: ListUserpoolsRequest,
        callback: (error: ServiceError | null, response: ListUserpoolsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListUserpoolsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListUserpoolsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListUserpoolsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListUserpoolsResponse) => void,
    ): ClientUnaryCall;
    /** Creates a userpool in the specified organization. */
    create(
        request: CreateUserpoolRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateUserpoolRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateUserpoolRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified userpool. */
    update(
        request: UpdateUserpoolRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateUserpoolRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateUserpoolRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified userpool. */
    delete(
        request: DeleteUserpoolRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteUserpoolRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteUserpoolRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Returns the specified domain for a userpool. */
    getDomain(
        request: GetUserpoolDomainRequest,
        callback: (error: ServiceError | null, response: Domain) => void,
    ): ClientUnaryCall;
    getDomain(
        request: GetUserpoolDomainRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Domain) => void,
    ): ClientUnaryCall;
    getDomain(
        request: GetUserpoolDomainRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Domain) => void,
    ): ClientUnaryCall;
    /** Lists domains for the specified userpool. */
    listDomains(
        request: ListUserpoolDomainsRequest,
        callback: (error: ServiceError | null, response: ListUserpoolDomainsResponse) => void,
    ): ClientUnaryCall;
    listDomains(
        request: ListUserpoolDomainsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListUserpoolDomainsResponse) => void,
    ): ClientUnaryCall;
    listDomains(
        request: ListUserpoolDomainsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListUserpoolDomainsResponse) => void,
    ): ClientUnaryCall;
    /** Adds a domain to the specified userpool. */
    addDomain(
        request: AddUserpoolDomainRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    addDomain(
        request: AddUserpoolDomainRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    addDomain(
        request: AddUserpoolDomainRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Validates the specified domain for a userpool. */
    validateDomain(
        request: ValidateUserpoolDomainRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    validateDomain(
        request: ValidateUserpoolDomainRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    validateDomain(
        request: ValidateUserpoolDomainRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified domain from a userpool. */
    deleteDomain(
        request: DeleteUserpoolDomainRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deleteDomain(
        request: DeleteUserpoolDomainRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deleteDomain(
        request: DeleteUserpoolDomainRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists operations for the specified userpool. */
    listOperations(
        request: ListUserpoolOperationsRequest,
        callback: (error: ServiceError | null, response: ListUserpoolOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListUserpoolOperationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListUserpoolOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListUserpoolOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListUserpoolOperationsResponse) => void,
    ): ClientUnaryCall;
    /** Lists access bindings for the specified userpool. */
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
    /** Sets access bindings for the specified userpool. */
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
    /** Updates access bindings for the specified userpool. */
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
}

export const UserpoolServiceClient = makeGenericClientConstructor(
    UserpoolServiceService,
    'yandex.cloud.organizationmanager.v1.idp.UserpoolService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): UserpoolServiceClient;
    service: typeof UserpoolServiceService;
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
