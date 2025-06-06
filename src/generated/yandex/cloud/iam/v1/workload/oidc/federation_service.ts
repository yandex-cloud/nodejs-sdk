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
import { FieldMask } from '../../../../../../google/protobuf/field_mask';
import { Federation } from '../../../../../../yandex/cloud/iam/v1/workload/oidc/federation';
import { Operation } from '../../../../../../yandex/cloud/operation/operation';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../../../../yandex/cloud/access/access';

export const protobufPackage = 'yandex.cloud.iam.v1.workload.oidc';

export interface GetFederationRequest {
    /**
     * ID of the OIDC workload identity federation to return.
     * To get the OIDC workload identity federation ID, make a [FederationService.List] request.
     */
    federationId: string;
}

export interface ListFederationsRequest {
    /**
     * ID of the folder to list OIDC workload identity federations in.
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListFederationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListFederationsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}

export interface ListFederationsResponse {
    /** List of OIDC workload identity federations. */
    federations: Federation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListFederationsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListFederationsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateFederationRequest {
    /**
     * ID of the folder to create an OIDC workload identity federation in.
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the OIDC workload identity federation.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the OIDC workload identity federation. */
    description: string;
    /**
     * True - the OIDC workload identity federation is disabled and cannot be used for authentication.
     * False - the OIDC workload identity federation is enabled and can be used for authentication.
     */
    disabled: boolean;
    /** List of trusted values for aud claim. */
    audiences: string[];
    /** URL of the external IdP server to be used for authentication. */
    issuer: string;
    /** URL reference to trusted keys in format of JSON Web Key Set. */
    jwksUrl: string;
    /** Resource labels as `` key:value `` pairs */
    labels: { [key: string]: string };
}

export interface CreateFederationRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateFederationMetadata {
    /** ID of the OIDC workload identity federation that is being created. */
    federationId: string;
}

export interface UpdateFederationRequest {
    /**
     * ID of the OIDC workload identity federation to update.
     * To get the OIDC workload identity federation ID, make a [FederationService.List] request.
     */
    federationId: string;
    /** Field mask that specifies which fields of the OIDC workload identity federation are going to be updated. */
    updateMask?: FieldMask;
    /**
     * Name of the OIDC workload identity federation.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the OIDC workload identity federation. */
    description: string;
    /**
     * True - the OIDC workload identity federation is disabled and cannot be used for authentication.
     * False - the OIDC workload identity federation is enabled and can be used for authentication.
     */
    disabled: boolean;
    /** List of trusted values for aud claim. */
    audiences: string[];
    /** URL reference to trusted keys in format of JSON Web Key Set. */
    jwksUrl: string;
    /** Resource labels as `` key:value `` pairs */
    labels: { [key: string]: string };
}

export interface UpdateFederationRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateFederationMetadata {
    /** ID of the OIDC workload identity federation that is being updated. */
    federationId: string;
}

export interface DeleteFederationRequest {
    /**
     * ID of the OIDC workload identity federation to delete.
     * To get the OIDC workload identity federation ID, make a [FederationService.List] request.
     */
    federationId: string;
}

export interface DeleteFederationMetadata {
    /** ID of the OIDC workload identity federation that is being deleted. */
    federationId: string;
}

const baseGetFederationRequest: object = { federationId: '' };

export const GetFederationRequest = {
    encode(message: GetFederationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetFederationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetFederationRequest } as GetFederationRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetFederationRequest {
        const message = { ...baseGetFederationRequest } as GetFederationRequest;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        return message;
    },

    toJSON(message: GetFederationRequest): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetFederationRequest>, I>>(
        object: I,
    ): GetFederationRequest {
        const message = { ...baseGetFederationRequest } as GetFederationRequest;
        message.federationId = object.federationId ?? '';
        return message;
    },
};

const baseListFederationsRequest: object = { folderId: '', pageSize: 0, pageToken: '' };

export const ListFederationsRequest = {
    encode(message: ListFederationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListFederationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListFederationsRequest } as ListFederationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
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

    fromJSON(object: any): ListFederationsRequest {
        const message = { ...baseListFederationsRequest } as ListFederationsRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListFederationsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListFederationsRequest>, I>>(
        object: I,
    ): ListFederationsRequest {
        const message = { ...baseListFederationsRequest } as ListFederationsRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListFederationsResponse: object = { nextPageToken: '' };

export const ListFederationsResponse = {
    encode(message: ListFederationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.federations) {
            Federation.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListFederationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListFederationsResponse } as ListFederationsResponse;
        message.federations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federations.push(Federation.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListFederationsResponse {
        const message = { ...baseListFederationsResponse } as ListFederationsResponse;
        message.federations = (object.federations ?? []).map((e: any) => Federation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListFederationsResponse): unknown {
        const obj: any = {};
        if (message.federations) {
            obj.federations = message.federations.map((e) =>
                e ? Federation.toJSON(e) : undefined,
            );
        } else {
            obj.federations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListFederationsResponse>, I>>(
        object: I,
    ): ListFederationsResponse {
        const message = { ...baseListFederationsResponse } as ListFederationsResponse;
        message.federations = object.federations?.map((e) => Federation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateFederationRequest: object = {
    folderId: '',
    name: '',
    description: '',
    disabled: false,
    audiences: '',
    issuer: '',
    jwksUrl: '',
};

export const CreateFederationRequest = {
    encode(message: CreateFederationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.disabled === true) {
            writer.uint32(40).bool(message.disabled);
        }
        for (const v of message.audiences) {
            writer.uint32(50).string(v!);
        }
        if (message.issuer !== '') {
            writer.uint32(58).string(message.issuer);
        }
        if (message.jwksUrl !== '') {
            writer.uint32(66).string(message.jwksUrl);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateFederationRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(74).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateFederationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateFederationRequest } as CreateFederationRequest;
        message.audiences = [];
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.disabled = reader.bool();
                    break;
                case 6:
                    message.audiences.push(reader.string());
                    break;
                case 7:
                    message.issuer = reader.string();
                    break;
                case 8:
                    message.jwksUrl = reader.string();
                    break;
                case 9:
                    const entry9 = CreateFederationRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry9.value !== undefined) {
                        message.labels[entry9.key] = entry9.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateFederationRequest {
        const message = { ...baseCreateFederationRequest } as CreateFederationRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.disabled =
            object.disabled !== undefined && object.disabled !== null
                ? Boolean(object.disabled)
                : false;
        message.audiences = (object.audiences ?? []).map((e: any) => String(e));
        message.issuer =
            object.issuer !== undefined && object.issuer !== null ? String(object.issuer) : '';
        message.jwksUrl =
            object.jwksUrl !== undefined && object.jwksUrl !== null ? String(object.jwksUrl) : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: CreateFederationRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.disabled !== undefined && (obj.disabled = message.disabled);
        if (message.audiences) {
            obj.audiences = message.audiences.map((e) => e);
        } else {
            obj.audiences = [];
        }
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.jwksUrl !== undefined && (obj.jwksUrl = message.jwksUrl);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateFederationRequest>, I>>(
        object: I,
    ): CreateFederationRequest {
        const message = { ...baseCreateFederationRequest } as CreateFederationRequest;
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.disabled = object.disabled ?? false;
        message.audiences = object.audiences?.map((e) => e) || [];
        message.issuer = object.issuer ?? '';
        message.jwksUrl = object.jwksUrl ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        return message;
    },
};

const baseCreateFederationRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateFederationRequest_LabelsEntry = {
    encode(
        message: CreateFederationRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateFederationRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateFederationRequest_LabelsEntry,
        } as CreateFederationRequest_LabelsEntry;
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

    fromJSON(object: any): CreateFederationRequest_LabelsEntry {
        const message = {
            ...baseCreateFederationRequest_LabelsEntry,
        } as CreateFederationRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateFederationRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateFederationRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateFederationRequest_LabelsEntry {
        const message = {
            ...baseCreateFederationRequest_LabelsEntry,
        } as CreateFederationRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateFederationMetadata: object = { federationId: '' };

export const CreateFederationMetadata = {
    encode(
        message: CreateFederationMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateFederationMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateFederationMetadata } as CreateFederationMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateFederationMetadata {
        const message = { ...baseCreateFederationMetadata } as CreateFederationMetadata;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        return message;
    },

    toJSON(message: CreateFederationMetadata): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateFederationMetadata>, I>>(
        object: I,
    ): CreateFederationMetadata {
        const message = { ...baseCreateFederationMetadata } as CreateFederationMetadata;
        message.federationId = object.federationId ?? '';
        return message;
    },
};

const baseUpdateFederationRequest: object = {
    federationId: '',
    name: '',
    description: '',
    disabled: false,
    audiences: '',
    jwksUrl: '',
};

export const UpdateFederationRequest = {
    encode(message: UpdateFederationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
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
        if (message.disabled === true) {
            writer.uint32(40).bool(message.disabled);
        }
        for (const v of message.audiences) {
            writer.uint32(50).string(v!);
        }
        if (message.jwksUrl !== '') {
            writer.uint32(58).string(message.jwksUrl);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateFederationRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(66).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFederationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateFederationRequest } as UpdateFederationRequest;
        message.audiences = [];
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
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
                    message.disabled = reader.bool();
                    break;
                case 6:
                    message.audiences.push(reader.string());
                    break;
                case 7:
                    message.jwksUrl = reader.string();
                    break;
                case 8:
                    const entry8 = UpdateFederationRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry8.value !== undefined) {
                        message.labels[entry8.key] = entry8.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateFederationRequest {
        const message = { ...baseUpdateFederationRequest } as UpdateFederationRequest;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
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
        message.disabled =
            object.disabled !== undefined && object.disabled !== null
                ? Boolean(object.disabled)
                : false;
        message.audiences = (object.audiences ?? []).map((e: any) => String(e));
        message.jwksUrl =
            object.jwksUrl !== undefined && object.jwksUrl !== null ? String(object.jwksUrl) : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: UpdateFederationRequest): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.disabled !== undefined && (obj.disabled = message.disabled);
        if (message.audiences) {
            obj.audiences = message.audiences.map((e) => e);
        } else {
            obj.audiences = [];
        }
        message.jwksUrl !== undefined && (obj.jwksUrl = message.jwksUrl);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateFederationRequest>, I>>(
        object: I,
    ): UpdateFederationRequest {
        const message = { ...baseUpdateFederationRequest } as UpdateFederationRequest;
        message.federationId = object.federationId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.disabled = object.disabled ?? false;
        message.audiences = object.audiences?.map((e) => e) || [];
        message.jwksUrl = object.jwksUrl ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        return message;
    },
};

const baseUpdateFederationRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateFederationRequest_LabelsEntry = {
    encode(
        message: UpdateFederationRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFederationRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateFederationRequest_LabelsEntry,
        } as UpdateFederationRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateFederationRequest_LabelsEntry {
        const message = {
            ...baseUpdateFederationRequest_LabelsEntry,
        } as UpdateFederationRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateFederationRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateFederationRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateFederationRequest_LabelsEntry {
        const message = {
            ...baseUpdateFederationRequest_LabelsEntry,
        } as UpdateFederationRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateFederationMetadata: object = { federationId: '' };

export const UpdateFederationMetadata = {
    encode(
        message: UpdateFederationMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFederationMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateFederationMetadata } as UpdateFederationMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateFederationMetadata {
        const message = { ...baseUpdateFederationMetadata } as UpdateFederationMetadata;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        return message;
    },

    toJSON(message: UpdateFederationMetadata): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateFederationMetadata>, I>>(
        object: I,
    ): UpdateFederationMetadata {
        const message = { ...baseUpdateFederationMetadata } as UpdateFederationMetadata;
        message.federationId = object.federationId ?? '';
        return message;
    },
};

const baseDeleteFederationRequest: object = { federationId: '' };

export const DeleteFederationRequest = {
    encode(message: DeleteFederationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFederationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteFederationRequest } as DeleteFederationRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteFederationRequest {
        const message = { ...baseDeleteFederationRequest } as DeleteFederationRequest;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        return message;
    },

    toJSON(message: DeleteFederationRequest): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteFederationRequest>, I>>(
        object: I,
    ): DeleteFederationRequest {
        const message = { ...baseDeleteFederationRequest } as DeleteFederationRequest;
        message.federationId = object.federationId ?? '';
        return message;
    },
};

const baseDeleteFederationMetadata: object = { federationId: '' };

export const DeleteFederationMetadata = {
    encode(
        message: DeleteFederationMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFederationMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteFederationMetadata } as DeleteFederationMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteFederationMetadata {
        const message = { ...baseDeleteFederationMetadata } as DeleteFederationMetadata;
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        return message;
    },

    toJSON(message: DeleteFederationMetadata): unknown {
        const obj: any = {};
        message.federationId !== undefined && (obj.federationId = message.federationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteFederationMetadata>, I>>(
        object: I,
    ): DeleteFederationMetadata {
        const message = { ...baseDeleteFederationMetadata } as DeleteFederationMetadata;
        message.federationId = object.federationId ?? '';
        return message;
    },
};

/** A set of methods for managing OIDC workload identity federations. */
export const FederationServiceService = {
    /**
     * Returns the specified OIDC workload identity federation.
     *
     * To get the list of available OIDC workload identity federation, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.iam.v1.workload.oidc.FederationService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetFederationRequest) =>
            Buffer.from(GetFederationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetFederationRequest.decode(value),
        responseSerialize: (value: Federation) => Buffer.from(Federation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Federation.decode(value),
    },
    /** Retrieves the list of OIDC workload identity federations in the specified folder. */
    list: {
        path: '/yandex.cloud.iam.v1.workload.oidc.FederationService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListFederationsRequest) =>
            Buffer.from(ListFederationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListFederationsRequest.decode(value),
        responseSerialize: (value: ListFederationsResponse) =>
            Buffer.from(ListFederationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListFederationsResponse.decode(value),
    },
    /** Creates an OIDC workload identity federation in the specified folder. */
    create: {
        path: '/yandex.cloud.iam.v1.workload.oidc.FederationService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateFederationRequest) =>
            Buffer.from(CreateFederationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateFederationRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified OIDC workload identity federation. */
    update: {
        path: '/yandex.cloud.iam.v1.workload.oidc.FederationService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateFederationRequest) =>
            Buffer.from(UpdateFederationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateFederationRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified OIDC workload identity federation. */
    delete: {
        path: '/yandex.cloud.iam.v1.workload.oidc.FederationService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteFederationRequest) =>
            Buffer.from(DeleteFederationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteFederationRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists access bindings for the specified OIDC workload identity federation. */
    listAccessBindings: {
        path: '/yandex.cloud.iam.v1.workload.oidc.FederationService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified OIDC workload identity federation. */
    setAccessBindings: {
        path: '/yandex.cloud.iam.v1.workload.oidc.FederationService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetAccessBindingsRequest) =>
            Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates access bindings for the specified OIDC workload identity federation. */
    updateAccessBindings: {
        path: '/yandex.cloud.iam.v1.workload.oidc.FederationService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface FederationServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified OIDC workload identity federation.
     *
     * To get the list of available OIDC workload identity federation, make a [List] request.
     */
    get: handleUnaryCall<GetFederationRequest, Federation>;
    /** Retrieves the list of OIDC workload identity federations in the specified folder. */
    list: handleUnaryCall<ListFederationsRequest, ListFederationsResponse>;
    /** Creates an OIDC workload identity federation in the specified folder. */
    create: handleUnaryCall<CreateFederationRequest, Operation>;
    /** Updates the specified OIDC workload identity federation. */
    update: handleUnaryCall<UpdateFederationRequest, Operation>;
    /** Deletes the specified OIDC workload identity federation. */
    delete: handleUnaryCall<DeleteFederationRequest, Operation>;
    /** Lists access bindings for the specified OIDC workload identity federation. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the specified OIDC workload identity federation. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified OIDC workload identity federation. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface FederationServiceClient extends Client {
    /**
     * Returns the specified OIDC workload identity federation.
     *
     * To get the list of available OIDC workload identity federation, make a [List] request.
     */
    get(
        request: GetFederationRequest,
        callback: (error: ServiceError | null, response: Federation) => void,
    ): ClientUnaryCall;
    get(
        request: GetFederationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Federation) => void,
    ): ClientUnaryCall;
    get(
        request: GetFederationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Federation) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of OIDC workload identity federations in the specified folder. */
    list(
        request: ListFederationsRequest,
        callback: (error: ServiceError | null, response: ListFederationsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListFederationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListFederationsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListFederationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListFederationsResponse) => void,
    ): ClientUnaryCall;
    /** Creates an OIDC workload identity federation in the specified folder. */
    create(
        request: CreateFederationRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateFederationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateFederationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified OIDC workload identity federation. */
    update(
        request: UpdateFederationRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateFederationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateFederationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified OIDC workload identity federation. */
    delete(
        request: DeleteFederationRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteFederationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteFederationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists access bindings for the specified OIDC workload identity federation. */
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
    /** Sets access bindings for the specified OIDC workload identity federation. */
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
    /** Updates access bindings for the specified OIDC workload identity federation. */
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

export const FederationServiceClient = makeGenericClientConstructor(
    FederationServiceService,
    'yandex.cloud.iam.v1.workload.oidc.FederationService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): FederationServiceClient;
    service: typeof FederationServiceService;
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
