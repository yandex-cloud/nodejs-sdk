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
    Registry_Kind,
    Registry_Type,
    Registry,
    registry_KindFromJSON,
    registry_TypeFromJSON,
    registry_KindToJSON,
    registry_TypeToJSON,
} from '../../../../yandex/cloud/cloudregistry/v1/registry';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import {
    IpPermission,
    IpPermissionDelta,
} from '../../../../yandex/cloud/cloudregistry/v1/ip_permission';
import { Artifact } from '../../../../yandex/cloud/cloudregistry/v1/artifact';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../../yandex/cloud/access/access';

export const protobufPackage = 'yandex.cloud.cloudregistry.v1';

export interface GetRegistryRequest {
    /**
     * ID of the Registry resource to return.
     *
     * To get the registry ID use a [RegistryService.List] request.
     */
    registryId: string;
}

export interface ListRegistriesRequest {
    /**
     * ID of the folder to list registries in.
     *
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListRegistriesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 10.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListRegistriesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListRegistriesResponse {
    /** List of Registry resources. */
    registries: Registry[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListRegistriesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListRegistriesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateRegistryRequest {
    /**
     * ID of the folder to create a registry in.
     *
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the registry.
     *
     * There may be only one registry per folder.
     */
    name: string;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Kind of the registry. */
    kind: Registry_Kind;
    /** Type of the registry. */
    type: Registry_Type;
    /** Description of the registry. 0-1024 characters long. */
    description: string;
    /** Property names and values. */
    properties: { [key: string]: string };
}

export interface CreateRegistryRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateRegistryRequest_PropertiesEntry {
    key: string;
    value: string;
}

export interface CreateRegistryMetadata {
    /** ID of the registry that is being created. */
    registryId: string;
}

export interface UpdateRegistryRequest {
    /**
     * ID of the Registry resource to update.
     *
     * To get the registry ID use a [RegistryService.List] request.
     */
    registryId: string;
    /** Field mask that specifies which fields of the Registry resource are going to be updated. */
    updateMask?: FieldMask;
    /**
     * Name of the registry.
     *
     * There may be only one registry per folder.
     */
    name: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * Existing set of `labels` is completely replaced by the provided set.
     */
    labels: { [key: string]: string };
    /** Description of the registry. 0-1024 characters long. */
    description: string;
    /** Property names and values. */
    properties: { [key: string]: string };
}

export interface UpdateRegistryRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateRegistryRequest_PropertiesEntry {
    key: string;
    value: string;
}

export interface UpdateRegistryMetadata {
    /** ID of the Registry resource that is being updated. */
    registryId: string;
}

export interface DeleteRegistryRequest {
    /** ID of the registry to delete. */
    registryId: string;
}

export interface DeleteRegistryMetadata {
    /** ID of the registry that is being deleted. */
    registryId: string;
}

export interface SetIpPermissionsRequest {
    /** ID of the registry for which ip permissions are being set. */
    registryId: string;
    /** IP permission to be set. */
    ipPermissions: IpPermission[];
}

export interface UpdateIpPermissionsRequest {
    /** ID of the registry for which ip permissions are being updated. */
    registryId: string;
    /** Updates to IP permissions. */
    ipPermissionDeltas: IpPermissionDelta[];
}

export interface ListIpPermissionsRequest {
    /** ID of the Registry to return ip permission list. */
    registryId: string;
}

export interface ListIpPermissionsResponse {
    /** List of ip permissions for registry */
    permissions: IpPermission[];
}

export interface SetIpPermissionsMetadata {
    /** ID of the registry that ip permission is being set. */
    registryId: string;
}

export interface UpdateIpPermissionsMetadata {
    /** ID of the registry that ip permission is being updated. */
    registryId: string;
}

export interface ListArtifactsRequest {
    /**
     * ID of the registry artifact to list repositories in.
     *
     * To get the registry ID use a [ArtifactService.List] request.
     */
    registryId: string;
    /** The path to a specific node where the registry artifact is located. */
    path: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListRepositoriesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 10.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListArtifactsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListArtifactsResponse {
    /** List of Registry artifact resources. */
    artifacts: Artifact[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListRegistriesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListArtifactsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetRegistryRequest: object = { registryId: '' };

export const GetRegistryRequest = {
    encode(message: GetRegistryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetRegistryRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetRegistryRequest } as GetRegistryRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetRegistryRequest {
        const message = { ...baseGetRegistryRequest } as GetRegistryRequest;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        return message;
    },

    toJSON(message: GetRegistryRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetRegistryRequest>, I>>(
        object: I,
    ): GetRegistryRequest {
        const message = { ...baseGetRegistryRequest } as GetRegistryRequest;
        message.registryId = object.registryId ?? '';
        return message;
    },
};

const baseListRegistriesRequest: object = { folderId: '', pageSize: 0, pageToken: '' };

export const ListRegistriesRequest = {
    encode(message: ListRegistriesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListRegistriesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListRegistriesRequest } as ListRegistriesRequest;
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

    fromJSON(object: any): ListRegistriesRequest {
        const message = { ...baseListRegistriesRequest } as ListRegistriesRequest;
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

    toJSON(message: ListRegistriesRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListRegistriesRequest>, I>>(
        object: I,
    ): ListRegistriesRequest {
        const message = { ...baseListRegistriesRequest } as ListRegistriesRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListRegistriesResponse: object = { nextPageToken: '' };

export const ListRegistriesResponse = {
    encode(message: ListRegistriesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.registries) {
            Registry.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListRegistriesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListRegistriesResponse } as ListRegistriesResponse;
        message.registries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registries.push(Registry.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListRegistriesResponse {
        const message = { ...baseListRegistriesResponse } as ListRegistriesResponse;
        message.registries = (object.registries ?? []).map((e: any) => Registry.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListRegistriesResponse): unknown {
        const obj: any = {};
        if (message.registries) {
            obj.registries = message.registries.map((e) => (e ? Registry.toJSON(e) : undefined));
        } else {
            obj.registries = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListRegistriesResponse>, I>>(
        object: I,
    ): ListRegistriesResponse {
        const message = { ...baseListRegistriesResponse } as ListRegistriesResponse;
        message.registries = object.registries?.map((e) => Registry.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateRegistryRequest: object = {
    folderId: '',
    name: '',
    kind: 0,
    type: 0,
    description: '',
};

export const CreateRegistryRequest = {
    encode(message: CreateRegistryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateRegistryRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(26).fork(),
            ).ldelim();
        });
        if (message.kind !== 0) {
            writer.uint32(32).int32(message.kind);
        }
        if (message.type !== 0) {
            writer.uint32(40).int32(message.type);
        }
        if (message.description !== '') {
            writer.uint32(50).string(message.description);
        }
        Object.entries(message.properties).forEach(([key, value]) => {
            CreateRegistryRequest_PropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(58).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateRegistryRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateRegistryRequest } as CreateRegistryRequest;
        message.labels = {};
        message.properties = {};
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
                    const entry3 = CreateRegistryRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry3.value !== undefined) {
                        message.labels[entry3.key] = entry3.value;
                    }
                    break;
                case 4:
                    message.kind = reader.int32() as any;
                    break;
                case 5:
                    message.type = reader.int32() as any;
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    const entry7 = CreateRegistryRequest_PropertiesEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry7.value !== undefined) {
                        message.properties[entry7.key] = entry7.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateRegistryRequest {
        const message = { ...baseCreateRegistryRequest } as CreateRegistryRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.kind =
            object.kind !== undefined && object.kind !== null
                ? registry_KindFromJSON(object.kind)
                : 0;
        message.type =
            object.type !== undefined && object.type !== null
                ? registry_TypeFromJSON(object.type)
                : 0;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.properties = Object.entries(object.properties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },

    toJSON(message: CreateRegistryRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.kind !== undefined && (obj.kind = registry_KindToJSON(message.kind));
        message.type !== undefined && (obj.type = registry_TypeToJSON(message.type));
        message.description !== undefined && (obj.description = message.description);
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateRegistryRequest>, I>>(
        object: I,
    ): CreateRegistryRequest {
        const message = { ...baseCreateRegistryRequest } as CreateRegistryRequest;
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.kind = object.kind ?? 0;
        message.type = object.type ?? 0;
        message.description = object.description ?? '';
        message.properties = Object.entries(object.properties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};

const baseCreateRegistryRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateRegistryRequest_LabelsEntry = {
    encode(
        message: CreateRegistryRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateRegistryRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateRegistryRequest_LabelsEntry,
        } as CreateRegistryRequest_LabelsEntry;
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

    fromJSON(object: any): CreateRegistryRequest_LabelsEntry {
        const message = {
            ...baseCreateRegistryRequest_LabelsEntry,
        } as CreateRegistryRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateRegistryRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateRegistryRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateRegistryRequest_LabelsEntry {
        const message = {
            ...baseCreateRegistryRequest_LabelsEntry,
        } as CreateRegistryRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateRegistryRequest_PropertiesEntry: object = { key: '', value: '' };

export const CreateRegistryRequest_PropertiesEntry = {
    encode(
        message: CreateRegistryRequest_PropertiesEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateRegistryRequest_PropertiesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateRegistryRequest_PropertiesEntry,
        } as CreateRegistryRequest_PropertiesEntry;
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

    fromJSON(object: any): CreateRegistryRequest_PropertiesEntry {
        const message = {
            ...baseCreateRegistryRequest_PropertiesEntry,
        } as CreateRegistryRequest_PropertiesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateRegistryRequest_PropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateRegistryRequest_PropertiesEntry>, I>>(
        object: I,
    ): CreateRegistryRequest_PropertiesEntry {
        const message = {
            ...baseCreateRegistryRequest_PropertiesEntry,
        } as CreateRegistryRequest_PropertiesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateRegistryMetadata: object = { registryId: '' };

export const CreateRegistryMetadata = {
    encode(message: CreateRegistryMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateRegistryMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateRegistryMetadata } as CreateRegistryMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateRegistryMetadata {
        const message = { ...baseCreateRegistryMetadata } as CreateRegistryMetadata;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        return message;
    },

    toJSON(message: CreateRegistryMetadata): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateRegistryMetadata>, I>>(
        object: I,
    ): CreateRegistryMetadata {
        const message = { ...baseCreateRegistryMetadata } as CreateRegistryMetadata;
        message.registryId = object.registryId ?? '';
        return message;
    },
};

const baseUpdateRegistryRequest: object = { registryId: '', name: '', description: '' };

export const UpdateRegistryRequest = {
    encode(message: UpdateRegistryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateRegistryRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.properties).forEach(([key, value]) => {
            UpdateRegistryRequest_PropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRegistryRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateRegistryRequest } as UpdateRegistryRequest;
        message.labels = {};
        message.properties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    const entry4 = UpdateRegistryRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = UpdateRegistryRequest_PropertiesEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry6.value !== undefined) {
                        message.properties[entry6.key] = entry6.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateRegistryRequest {
        const message = { ...baseUpdateRegistryRequest } as UpdateRegistryRequest;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.properties = Object.entries(object.properties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },

    toJSON(message: UpdateRegistryRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.description !== undefined && (obj.description = message.description);
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateRegistryRequest>, I>>(
        object: I,
    ): UpdateRegistryRequest {
        const message = { ...baseUpdateRegistryRequest } as UpdateRegistryRequest;
        message.registryId = object.registryId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = object.name ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.description = object.description ?? '';
        message.properties = Object.entries(object.properties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};

const baseUpdateRegistryRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateRegistryRequest_LabelsEntry = {
    encode(
        message: UpdateRegistryRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRegistryRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateRegistryRequest_LabelsEntry,
        } as UpdateRegistryRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateRegistryRequest_LabelsEntry {
        const message = {
            ...baseUpdateRegistryRequest_LabelsEntry,
        } as UpdateRegistryRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateRegistryRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateRegistryRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateRegistryRequest_LabelsEntry {
        const message = {
            ...baseUpdateRegistryRequest_LabelsEntry,
        } as UpdateRegistryRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateRegistryRequest_PropertiesEntry: object = { key: '', value: '' };

export const UpdateRegistryRequest_PropertiesEntry = {
    encode(
        message: UpdateRegistryRequest_PropertiesEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRegistryRequest_PropertiesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateRegistryRequest_PropertiesEntry,
        } as UpdateRegistryRequest_PropertiesEntry;
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

    fromJSON(object: any): UpdateRegistryRequest_PropertiesEntry {
        const message = {
            ...baseUpdateRegistryRequest_PropertiesEntry,
        } as UpdateRegistryRequest_PropertiesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateRegistryRequest_PropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateRegistryRequest_PropertiesEntry>, I>>(
        object: I,
    ): UpdateRegistryRequest_PropertiesEntry {
        const message = {
            ...baseUpdateRegistryRequest_PropertiesEntry,
        } as UpdateRegistryRequest_PropertiesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateRegistryMetadata: object = { registryId: '' };

export const UpdateRegistryMetadata = {
    encode(message: UpdateRegistryMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRegistryMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateRegistryMetadata } as UpdateRegistryMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateRegistryMetadata {
        const message = { ...baseUpdateRegistryMetadata } as UpdateRegistryMetadata;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        return message;
    },

    toJSON(message: UpdateRegistryMetadata): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateRegistryMetadata>, I>>(
        object: I,
    ): UpdateRegistryMetadata {
        const message = { ...baseUpdateRegistryMetadata } as UpdateRegistryMetadata;
        message.registryId = object.registryId ?? '';
        return message;
    },
};

const baseDeleteRegistryRequest: object = { registryId: '' };

export const DeleteRegistryRequest = {
    encode(message: DeleteRegistryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRegistryRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteRegistryRequest } as DeleteRegistryRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteRegistryRequest {
        const message = { ...baseDeleteRegistryRequest } as DeleteRegistryRequest;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        return message;
    },

    toJSON(message: DeleteRegistryRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteRegistryRequest>, I>>(
        object: I,
    ): DeleteRegistryRequest {
        const message = { ...baseDeleteRegistryRequest } as DeleteRegistryRequest;
        message.registryId = object.registryId ?? '';
        return message;
    },
};

const baseDeleteRegistryMetadata: object = { registryId: '' };

export const DeleteRegistryMetadata = {
    encode(message: DeleteRegistryMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRegistryMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteRegistryMetadata } as DeleteRegistryMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteRegistryMetadata {
        const message = { ...baseDeleteRegistryMetadata } as DeleteRegistryMetadata;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        return message;
    },

    toJSON(message: DeleteRegistryMetadata): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteRegistryMetadata>, I>>(
        object: I,
    ): DeleteRegistryMetadata {
        const message = { ...baseDeleteRegistryMetadata } as DeleteRegistryMetadata;
        message.registryId = object.registryId ?? '';
        return message;
    },
};

const baseSetIpPermissionsRequest: object = { registryId: '' };

export const SetIpPermissionsRequest = {
    encode(message: SetIpPermissionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        for (const v of message.ipPermissions) {
            IpPermission.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SetIpPermissionsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSetIpPermissionsRequest } as SetIpPermissionsRequest;
        message.ipPermissions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.ipPermissions.push(IpPermission.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SetIpPermissionsRequest {
        const message = { ...baseSetIpPermissionsRequest } as SetIpPermissionsRequest;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        message.ipPermissions = (object.ipPermissions ?? []).map((e: any) =>
            IpPermission.fromJSON(e),
        );
        return message;
    },

    toJSON(message: SetIpPermissionsRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        if (message.ipPermissions) {
            obj.ipPermissions = message.ipPermissions.map((e) =>
                e ? IpPermission.toJSON(e) : undefined,
            );
        } else {
            obj.ipPermissions = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SetIpPermissionsRequest>, I>>(
        object: I,
    ): SetIpPermissionsRequest {
        const message = { ...baseSetIpPermissionsRequest } as SetIpPermissionsRequest;
        message.registryId = object.registryId ?? '';
        message.ipPermissions = object.ipPermissions?.map((e) => IpPermission.fromPartial(e)) || [];
        return message;
    },
};

const baseUpdateIpPermissionsRequest: object = { registryId: '' };

export const UpdateIpPermissionsRequest = {
    encode(
        message: UpdateIpPermissionsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        for (const v of message.ipPermissionDeltas) {
            IpPermissionDelta.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateIpPermissionsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateIpPermissionsRequest } as UpdateIpPermissionsRequest;
        message.ipPermissionDeltas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.ipPermissionDeltas.push(
                        IpPermissionDelta.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateIpPermissionsRequest {
        const message = { ...baseUpdateIpPermissionsRequest } as UpdateIpPermissionsRequest;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        message.ipPermissionDeltas = (object.ipPermissionDeltas ?? []).map((e: any) =>
            IpPermissionDelta.fromJSON(e),
        );
        return message;
    },

    toJSON(message: UpdateIpPermissionsRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        if (message.ipPermissionDeltas) {
            obj.ipPermissionDeltas = message.ipPermissionDeltas.map((e) =>
                e ? IpPermissionDelta.toJSON(e) : undefined,
            );
        } else {
            obj.ipPermissionDeltas = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateIpPermissionsRequest>, I>>(
        object: I,
    ): UpdateIpPermissionsRequest {
        const message = { ...baseUpdateIpPermissionsRequest } as UpdateIpPermissionsRequest;
        message.registryId = object.registryId ?? '';
        message.ipPermissionDeltas =
            object.ipPermissionDeltas?.map((e) => IpPermissionDelta.fromPartial(e)) || [];
        return message;
    },
};

const baseListIpPermissionsRequest: object = { registryId: '' };

export const ListIpPermissionsRequest = {
    encode(
        message: ListIpPermissionsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListIpPermissionsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListIpPermissionsRequest } as ListIpPermissionsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListIpPermissionsRequest {
        const message = { ...baseListIpPermissionsRequest } as ListIpPermissionsRequest;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        return message;
    },

    toJSON(message: ListIpPermissionsRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListIpPermissionsRequest>, I>>(
        object: I,
    ): ListIpPermissionsRequest {
        const message = { ...baseListIpPermissionsRequest } as ListIpPermissionsRequest;
        message.registryId = object.registryId ?? '';
        return message;
    },
};

const baseListIpPermissionsResponse: object = {};

export const ListIpPermissionsResponse = {
    encode(
        message: ListIpPermissionsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.permissions) {
            IpPermission.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListIpPermissionsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListIpPermissionsResponse } as ListIpPermissionsResponse;
        message.permissions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.permissions.push(IpPermission.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListIpPermissionsResponse {
        const message = { ...baseListIpPermissionsResponse } as ListIpPermissionsResponse;
        message.permissions = (object.permissions ?? []).map((e: any) => IpPermission.fromJSON(e));
        return message;
    },

    toJSON(message: ListIpPermissionsResponse): unknown {
        const obj: any = {};
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) =>
                e ? IpPermission.toJSON(e) : undefined,
            );
        } else {
            obj.permissions = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListIpPermissionsResponse>, I>>(
        object: I,
    ): ListIpPermissionsResponse {
        const message = { ...baseListIpPermissionsResponse } as ListIpPermissionsResponse;
        message.permissions = object.permissions?.map((e) => IpPermission.fromPartial(e)) || [];
        return message;
    },
};

const baseSetIpPermissionsMetadata: object = { registryId: '' };

export const SetIpPermissionsMetadata = {
    encode(
        message: SetIpPermissionsMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SetIpPermissionsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSetIpPermissionsMetadata } as SetIpPermissionsMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SetIpPermissionsMetadata {
        const message = { ...baseSetIpPermissionsMetadata } as SetIpPermissionsMetadata;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        return message;
    },

    toJSON(message: SetIpPermissionsMetadata): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SetIpPermissionsMetadata>, I>>(
        object: I,
    ): SetIpPermissionsMetadata {
        const message = { ...baseSetIpPermissionsMetadata } as SetIpPermissionsMetadata;
        message.registryId = object.registryId ?? '';
        return message;
    },
};

const baseUpdateIpPermissionsMetadata: object = { registryId: '' };

export const UpdateIpPermissionsMetadata = {
    encode(
        message: UpdateIpPermissionsMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateIpPermissionsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateIpPermissionsMetadata } as UpdateIpPermissionsMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateIpPermissionsMetadata {
        const message = { ...baseUpdateIpPermissionsMetadata } as UpdateIpPermissionsMetadata;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        return message;
    },

    toJSON(message: UpdateIpPermissionsMetadata): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateIpPermissionsMetadata>, I>>(
        object: I,
    ): UpdateIpPermissionsMetadata {
        const message = { ...baseUpdateIpPermissionsMetadata } as UpdateIpPermissionsMetadata;
        message.registryId = object.registryId ?? '';
        return message;
    },
};

const baseListArtifactsRequest: object = { registryId: '', path: '', pageSize: 0, pageToken: '' };

export const ListArtifactsRequest = {
    encode(message: ListArtifactsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.path !== '') {
            writer.uint32(18).string(message.path);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(34).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListArtifactsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListArtifactsRequest } as ListArtifactsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListArtifactsRequest {
        const message = { ...baseListArtifactsRequest } as ListArtifactsRequest;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        message.path = object.path !== undefined && object.path !== null ? String(object.path) : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListArtifactsRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.path !== undefined && (obj.path = message.path);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListArtifactsRequest>, I>>(
        object: I,
    ): ListArtifactsRequest {
        const message = { ...baseListArtifactsRequest } as ListArtifactsRequest;
        message.registryId = object.registryId ?? '';
        message.path = object.path ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListArtifactsResponse: object = { nextPageToken: '' };

export const ListArtifactsResponse = {
    encode(message: ListArtifactsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.artifacts) {
            Artifact.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListArtifactsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListArtifactsResponse } as ListArtifactsResponse;
        message.artifacts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.artifacts.push(Artifact.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListArtifactsResponse {
        const message = { ...baseListArtifactsResponse } as ListArtifactsResponse;
        message.artifacts = (object.artifacts ?? []).map((e: any) => Artifact.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListArtifactsResponse): unknown {
        const obj: any = {};
        if (message.artifacts) {
            obj.artifacts = message.artifacts.map((e) => (e ? Artifact.toJSON(e) : undefined));
        } else {
            obj.artifacts = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListArtifactsResponse>, I>>(
        object: I,
    ): ListArtifactsResponse {
        const message = { ...baseListArtifactsResponse } as ListArtifactsResponse;
        message.artifacts = object.artifacts?.map((e) => Artifact.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** A set of methods for managing Registry resources. */
export const RegistryServiceService = {
    /**
     * Returns the specified Registry resource.
     *
     * To get the list of available Registry resources, make a [RegistryService.List] request.
     */
    get: {
        path: '/yandex.cloud.cloudregistry.v1.RegistryService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetRegistryRequest) =>
            Buffer.from(GetRegistryRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetRegistryRequest.decode(value),
        responseSerialize: (value: Registry) => Buffer.from(Registry.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Registry.decode(value),
    },
    /** Retrieves the list of Registry resources in the specified folder. */
    list: {
        path: '/yandex.cloud.cloudregistry.v1.RegistryService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListRegistriesRequest) =>
            Buffer.from(ListRegistriesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListRegistriesRequest.decode(value),
        responseSerialize: (value: ListRegistriesResponse) =>
            Buffer.from(ListRegistriesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListRegistriesResponse.decode(value),
    },
    /** Creates a registry in the specified folder. */
    create: {
        path: '/yandex.cloud.cloudregistry.v1.RegistryService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateRegistryRequest) =>
            Buffer.from(CreateRegistryRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateRegistryRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified registry. */
    update: {
        path: '/yandex.cloud.cloudregistry.v1.RegistryService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateRegistryRequest) =>
            Buffer.from(UpdateRegistryRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateRegistryRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified registry. */
    delete: {
        path: '/yandex.cloud.cloudregistry.v1.RegistryService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteRegistryRequest) =>
            Buffer.from(DeleteRegistryRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteRegistryRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists access bindings for the specified registry. */
    listAccessBindings: {
        path: '/yandex.cloud.cloudregistry.v1.RegistryService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified registry. */
    setAccessBindings: {
        path: '/yandex.cloud.cloudregistry.v1.RegistryService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetAccessBindingsRequest) =>
            Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates access bindings for the specified registry. */
    updateAccessBindings: {
        path: '/yandex.cloud.cloudregistry.v1.RegistryService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** List ip permissions for the specified registry. */
    listIpPermissions: {
        path: '/yandex.cloud.cloudregistry.v1.RegistryService/ListIpPermissions',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListIpPermissionsRequest) =>
            Buffer.from(ListIpPermissionsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListIpPermissionsRequest.decode(value),
        responseSerialize: (value: ListIpPermissionsResponse) =>
            Buffer.from(ListIpPermissionsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListIpPermissionsResponse.decode(value),
    },
    /** Set ip permissions for the specified registry. */
    setIpPermissions: {
        path: '/yandex.cloud.cloudregistry.v1.RegistryService/SetIpPermissions',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetIpPermissionsRequest) =>
            Buffer.from(SetIpPermissionsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetIpPermissionsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Update ip permissions for the specified registry. */
    updateIpPermissions: {
        path: '/yandex.cloud.cloudregistry.v1.RegistryService/UpdateIpPermissions',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateIpPermissionsRequest) =>
            Buffer.from(UpdateIpPermissionsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateIpPermissionsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Retrieves the list of registry artifact resources in the specified registry. */
    listArtifacts: {
        path: '/yandex.cloud.cloudregistry.v1.RegistryService/ListArtifacts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListArtifactsRequest) =>
            Buffer.from(ListArtifactsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListArtifactsRequest.decode(value),
        responseSerialize: (value: ListArtifactsResponse) =>
            Buffer.from(ListArtifactsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListArtifactsResponse.decode(value),
    },
} as const;

export interface RegistryServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Registry resource.
     *
     * To get the list of available Registry resources, make a [RegistryService.List] request.
     */
    get: handleUnaryCall<GetRegistryRequest, Registry>;
    /** Retrieves the list of Registry resources in the specified folder. */
    list: handleUnaryCall<ListRegistriesRequest, ListRegistriesResponse>;
    /** Creates a registry in the specified folder. */
    create: handleUnaryCall<CreateRegistryRequest, Operation>;
    /** Updates the specified registry. */
    update: handleUnaryCall<UpdateRegistryRequest, Operation>;
    /** Deletes the specified registry. */
    delete: handleUnaryCall<DeleteRegistryRequest, Operation>;
    /** Lists access bindings for the specified registry. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the specified registry. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified registry. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
    /** List ip permissions for the specified registry. */
    listIpPermissions: handleUnaryCall<ListIpPermissionsRequest, ListIpPermissionsResponse>;
    /** Set ip permissions for the specified registry. */
    setIpPermissions: handleUnaryCall<SetIpPermissionsRequest, Operation>;
    /** Update ip permissions for the specified registry. */
    updateIpPermissions: handleUnaryCall<UpdateIpPermissionsRequest, Operation>;
    /** Retrieves the list of registry artifact resources in the specified registry. */
    listArtifacts: handleUnaryCall<ListArtifactsRequest, ListArtifactsResponse>;
}

export interface RegistryServiceClient extends Client {
    /**
     * Returns the specified Registry resource.
     *
     * To get the list of available Registry resources, make a [RegistryService.List] request.
     */
    get(
        request: GetRegistryRequest,
        callback: (error: ServiceError | null, response: Registry) => void,
    ): ClientUnaryCall;
    get(
        request: GetRegistryRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Registry) => void,
    ): ClientUnaryCall;
    get(
        request: GetRegistryRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Registry) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of Registry resources in the specified folder. */
    list(
        request: ListRegistriesRequest,
        callback: (error: ServiceError | null, response: ListRegistriesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListRegistriesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListRegistriesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListRegistriesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListRegistriesResponse) => void,
    ): ClientUnaryCall;
    /** Creates a registry in the specified folder. */
    create(
        request: CreateRegistryRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateRegistryRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateRegistryRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified registry. */
    update(
        request: UpdateRegistryRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateRegistryRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateRegistryRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified registry. */
    delete(
        request: DeleteRegistryRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteRegistryRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteRegistryRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists access bindings for the specified registry. */
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
    /** Sets access bindings for the specified registry. */
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
    /** Updates access bindings for the specified registry. */
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
    /** List ip permissions for the specified registry. */
    listIpPermissions(
        request: ListIpPermissionsRequest,
        callback: (error: ServiceError | null, response: ListIpPermissionsResponse) => void,
    ): ClientUnaryCall;
    listIpPermissions(
        request: ListIpPermissionsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListIpPermissionsResponse) => void,
    ): ClientUnaryCall;
    listIpPermissions(
        request: ListIpPermissionsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListIpPermissionsResponse) => void,
    ): ClientUnaryCall;
    /** Set ip permissions for the specified registry. */
    setIpPermissions(
        request: SetIpPermissionsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setIpPermissions(
        request: SetIpPermissionsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setIpPermissions(
        request: SetIpPermissionsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Update ip permissions for the specified registry. */
    updateIpPermissions(
        request: UpdateIpPermissionsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateIpPermissions(
        request: UpdateIpPermissionsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateIpPermissions(
        request: UpdateIpPermissionsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of registry artifact resources in the specified registry. */
    listArtifacts(
        request: ListArtifactsRequest,
        callback: (error: ServiceError | null, response: ListArtifactsResponse) => void,
    ): ClientUnaryCall;
    listArtifacts(
        request: ListArtifactsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListArtifactsResponse) => void,
    ): ClientUnaryCall;
    listArtifacts(
        request: ListArtifactsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListArtifactsResponse) => void,
    ): ClientUnaryCall;
}

export const RegistryServiceClient = makeGenericClientConstructor(
    RegistryServiceService,
    'yandex.cloud.cloudregistry.v1.RegistryService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): RegistryServiceClient;
    service: typeof RegistryServiceService;
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
