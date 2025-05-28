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
    LogOptions,
    Registry,
    RegistryCertificate,
    RegistryPassword,
    DeviceAlias,
    DataStreamExport,
} from '../../../../../yandex/cloud/iot/devices/v1/registry';
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Operation } from '../../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.iot.devices.v1';

export interface GetRegistryRequest {
    /**
     * ID of the registry to return.
     *
     * To get a registry ID make a [RegistryService.List] request.
     */
    registryId: string;
}

export interface GetByNameRegistryRequest {
    /**
     * ID of the folder to list registries in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the registry to return.
     *
     * To get a registry Name make a [RegistryService.List] request.
     */
    registryName: string;
}

export interface ListRegistriesRequest {
    /**
     * ID of the folder to list registries in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a [ListRegistriesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListRegistriesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListRegistriesResponse {
    /** List of registries. */
    registries: Registry[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListRegistriesRequest.page_size], use `next_page_token` as the value
     * for the [ListRegistriesRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateRegistryRequest {
    /**
     * ID of the folder to create a registry in.
     *
     * To get a folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the registry. The name must be unique within the folder. */
    name: string;
    /** Description of the registry. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Registry certificates. */
    certificates: CreateRegistryRequest_Certificate[];
    /**
     * Registry passwords.
     *
     * The password must contain at least three character categories among the following: upper case latin, lower case latin, numbers and special symbols.
     */
    password: string;
    /** Options for logging registry events */
    logOptions?: LogOptions;
}

export interface CreateRegistryRequest_LabelsEntry {
    key: string;
    value: string;
}

/** Specification of a registry certificate. */
export interface CreateRegistryRequest_Certificate {
    /** Public part of the registry certificate. */
    certificateData: string;
}

export interface CreateRegistryMetadata {
    /** ID of the registry that is being created. */
    registryId: string;
}

export interface UpdateRegistryRequest {
    /**
     * ID of the registry to update.
     *
     * To get a registry ID make a [RegistryService.List] request.
     */
    registryId: string;
    /** Field mask that specifies which fields of the registry are going to be updated. */
    updateMask?: FieldMask;
    /** Name of the registry. The name must be unique within the folder. */
    name: string;
    /** Description of the registry. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * Existing set of `labels` is completely replaced by the provided set.
     */
    labels: { [key: string]: string };
    /** Options for logging registry events */
    logOptions?: LogOptions;
}

export interface UpdateRegistryRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateRegistryMetadata {
    /** ID of the registry that is being updated. */
    registryId: string;
}

export interface DeleteRegistryRequest {
    /**
     * ID of the registry to delete.
     *
     * To get a registry ID make a [RegistryService.List] request.
     */
    registryId: string;
}

export interface DeleteRegistryMetadata {
    /** ID of the registry that is being deleted. */
    registryId: string;
}

export interface ListRegistryCertificatesRequest {
    /** ID of the registry to list certificates for. */
    registryId: string;
}

export interface ListRegistryCertificatesResponse {
    /** List of certificates for the specified registry. */
    certificates: RegistryCertificate[];
}

export interface AddRegistryCertificateRequest {
    /**
     * ID of the registry for which the certificate is being added.
     *
     * To get a registry ID make a [RegistryService.List] request.
     */
    registryId: string;
    /** Public part of the certificate that is being added. */
    certificateData: string;
}

export interface AddRegistryCertificateMetadata {
    /** ID of the registry certificate that is being added. */
    registryId: string;
    /** Fingerprint of the certificate that is being added. */
    fingerprint: string;
}

export interface DeleteRegistryCertificateRequest {
    /**
     * ID of the registry to delete a certificate for.
     *
     * To get a registry ID make a [RegistryService.List] request.
     */
    registryId: string;
    /** Fingerprint of the certificate that is being deleted. */
    fingerprint: string;
}

export interface DeleteRegistryCertificateMetadata {
    /** ID of a registry for which the certificate is being delete. */
    registryId: string;
    /** Fingerprint of the certificate to deleted. */
    fingerprint: string;
}

export interface ListRegistryPasswordsRequest {
    /**
     * ID of the registry to list passwords in.
     *
     * To get a registry ID make a [RegistryService.List] request.
     */
    registryId: string;
}

export interface ListRegistryPasswordsResponse {
    /** List of passwords for the specified registry. */
    passwords: RegistryPassword[];
}

export interface AddRegistryPasswordRequest {
    /**
     * ID of the registry to add a password for.
     *
     * To get a registry ID make a [RegistryService.List] request.
     */
    registryId: string;
    /**
     * Passwords for the registry.
     *
     * The password must contain at least three character categories among the following: upper case latin, lower case latin, numbers and special symbols.
     */
    password: string;
}

export interface AddRegistryPasswordMetadata {
    /** ID of the registry for which the password is being added. */
    registryId: string;
    /** ID of a password that is being added. */
    passwordId: string;
}

export interface DeleteRegistryPasswordRequest {
    /**
     * ID of the registry to delete a password for.
     *
     * To get a registry ID make a [DeviceService.List] request.
     */
    registryId: string;
    /**
     * ID of the password to delete.
     *
     * To get a password ID make a [RegistryService.ListPasswords] request.
     */
    passwordId: string;
}

export interface DeleteRegistryPasswordMetadata {
    /** ID of a registry for which the password is being delete. */
    registryId: string;
    /**
     * ID of the password to delete.
     *
     * To get a password ID make a [RegistryService.ListPasswords] request.
     */
    passwordId: string;
}

export interface ListDeviceTopicAliasesRequest {
    /**
     * ID of the registry to list aliases for device topic.
     *
     * To get a registry ID make a [RegistryService.List] request.
     */
    registryId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a [ListDeviceTopicAliasesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListDeviceTopicAliasesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListDeviceTopicAliasesResponse {
    /** List of device aliases for the specified registry. */
    aliases: DeviceAlias[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListDeviceTopicAliasesRequest.page_size], use `next_page_token` as the value
     * for the [ListDeviceTopicAliasesRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface ListRegistryOperationsRequest {
    /** ID of the registry to list operations for. */
    registryId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a [ListRegistryOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListRegistryOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * Currently you can use filtering only on [Registry.name] field.
     */
    filter: string;
}

export interface ListRegistryOperationsResponse {
    /** List of operations for the specified registry. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListRegistryOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListRegistryOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface AddDataStreamExportRequest {
    /** Name of the YDS export. The name must be unique within the folder. */
    name: string;
    /**
     * ID of the registry to add a YDS export for.
     *
     * To get a registry ID make a [RegistryService.List] request.
     */
    registryId: string;
    /** MQTT topic whose messages export to YDS. */
    mqttTopicFilter: string;
    /** YDS database. */
    database: string;
    /** YDS stream name. */
    stream: string;
    /** ID of the service account which has permission to write to data stream. */
    serviceAccountId: string;
}

export interface AddDataStreamExportMetadata {
    /** ID of the registry for which the YDS export was added. */
    registryId: string;
    /** ID of the added YDS export. */
    dataStreamExportId: string;
}

export interface DeleteDataStreamExportRequest {
    /** ID of a registry for which the YDS export is being deleted. */
    registryId: string;
    /** ID of the YDS export to delete. */
    dataStreamExportId: string;
}

export interface DeleteDataStreamExportMetadata {
    /** ID of a registry for which the YDS export was deleted. */
    registryId: string;
    /** ID of the deleted YDS export. */
    dataStreamExportId: string;
}

export interface ListDataStreamExportsRequest {
    /**
     * ID of the registry to list YDS exports in.
     *
     * To get a registry ID make a [RegistryService.List] request.
     */
    registryId: string;
}

export interface ListDataStreamExportsResponse {
    /** List of YDS exports for the specified registry. */
    dataStreamExports: DataStreamExport[];
}

export interface DisableRegistryRequest {
    /** ID of the registry to disable. */
    registryId: string;
}

export interface DisableRegistryMetadata {
    /** ID of the registry that was disabled. */
    registryId: string;
}

export interface EnableRegistryRequest {
    /** ID of the registry to enable. */
    registryId: string;
}

export interface EnableRegistryMetadata {
    /** ID of the registry that was enabled. */
    registryId: string;
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

const baseGetByNameRegistryRequest: object = { folderId: '', registryName: '' };

export const GetByNameRegistryRequest = {
    encode(
        message: GetByNameRegistryRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.registryName !== '') {
            writer.uint32(18).string(message.registryName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetByNameRegistryRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetByNameRegistryRequest } as GetByNameRegistryRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.registryName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetByNameRegistryRequest {
        const message = { ...baseGetByNameRegistryRequest } as GetByNameRegistryRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.registryName =
            object.registryName !== undefined && object.registryName !== null
                ? String(object.registryName)
                : '';
        return message;
    },

    toJSON(message: GetByNameRegistryRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.registryName !== undefined && (obj.registryName = message.registryName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetByNameRegistryRequest>, I>>(
        object: I,
    ): GetByNameRegistryRequest {
        const message = { ...baseGetByNameRegistryRequest } as GetByNameRegistryRequest;
        message.folderId = object.folderId ?? '';
        message.registryName = object.registryName ?? '';
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

const baseCreateRegistryRequest: object = { folderId: '', name: '', description: '', password: '' };

export const CreateRegistryRequest = {
    encode(message: CreateRegistryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
            CreateRegistryRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        for (const v of message.certificates) {
            CreateRegistryRequest_Certificate.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        if (message.password !== '') {
            writer.uint32(50).string(message.password);
        }
        if (message.logOptions !== undefined) {
            LogOptions.encode(message.logOptions, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateRegistryRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateRegistryRequest } as CreateRegistryRequest;
        message.labels = {};
        message.certificates = [];
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
                    const entry4 = CreateRegistryRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.certificates.push(
                        CreateRegistryRequest_Certificate.decode(reader, reader.uint32()),
                    );
                    break;
                case 6:
                    message.password = reader.string();
                    break;
                case 7:
                    message.logOptions = LogOptions.decode(reader, reader.uint32());
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
        message.certificates = (object.certificates ?? []).map((e: any) =>
            CreateRegistryRequest_Certificate.fromJSON(e),
        );
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : '';
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? LogOptions.fromJSON(object.logOptions)
                : undefined;
        return message;
    },

    toJSON(message: CreateRegistryRequest): unknown {
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
        if (message.certificates) {
            obj.certificates = message.certificates.map((e) =>
                e ? CreateRegistryRequest_Certificate.toJSON(e) : undefined,
            );
        } else {
            obj.certificates = [];
        }
        message.password !== undefined && (obj.password = message.password);
        message.logOptions !== undefined &&
            (obj.logOptions = message.logOptions
                ? LogOptions.toJSON(message.logOptions)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateRegistryRequest>, I>>(
        object: I,
    ): CreateRegistryRequest {
        const message = { ...baseCreateRegistryRequest } as CreateRegistryRequest;
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
        message.certificates =
            object.certificates?.map((e) => CreateRegistryRequest_Certificate.fromPartial(e)) || [];
        message.password = object.password ?? '';
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? LogOptions.fromPartial(object.logOptions)
                : undefined;
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

const baseCreateRegistryRequest_Certificate: object = { certificateData: '' };

export const CreateRegistryRequest_Certificate = {
    encode(
        message: CreateRegistryRequest_Certificate,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.certificateData !== '') {
            writer.uint32(10).string(message.certificateData);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateRegistryRequest_Certificate {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateRegistryRequest_Certificate,
        } as CreateRegistryRequest_Certificate;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateData = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateRegistryRequest_Certificate {
        const message = {
            ...baseCreateRegistryRequest_Certificate,
        } as CreateRegistryRequest_Certificate;
        message.certificateData =
            object.certificateData !== undefined && object.certificateData !== null
                ? String(object.certificateData)
                : '';
        return message;
    },

    toJSON(message: CreateRegistryRequest_Certificate): unknown {
        const obj: any = {};
        message.certificateData !== undefined && (obj.certificateData = message.certificateData);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateRegistryRequest_Certificate>, I>>(
        object: I,
    ): CreateRegistryRequest_Certificate {
        const message = {
            ...baseCreateRegistryRequest_Certificate,
        } as CreateRegistryRequest_Certificate;
        message.certificateData = object.certificateData ?? '';
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
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateRegistryRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        if (message.logOptions !== undefined) {
            LogOptions.encode(message.logOptions, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRegistryRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateRegistryRequest } as UpdateRegistryRequest;
        message.labels = {};
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
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = UpdateRegistryRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.logOptions = LogOptions.decode(reader, reader.uint32());
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
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? LogOptions.fromJSON(object.logOptions)
                : undefined;
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
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.logOptions !== undefined &&
            (obj.logOptions = message.logOptions
                ? LogOptions.toJSON(message.logOptions)
                : undefined);
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
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? LogOptions.fromPartial(object.logOptions)
                : undefined;
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

const baseListRegistryCertificatesRequest: object = { registryId: '' };

export const ListRegistryCertificatesRequest = {
    encode(
        message: ListRegistryCertificatesRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListRegistryCertificatesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListRegistryCertificatesRequest,
        } as ListRegistryCertificatesRequest;
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

    fromJSON(object: any): ListRegistryCertificatesRequest {
        const message = {
            ...baseListRegistryCertificatesRequest,
        } as ListRegistryCertificatesRequest;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        return message;
    },

    toJSON(message: ListRegistryCertificatesRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListRegistryCertificatesRequest>, I>>(
        object: I,
    ): ListRegistryCertificatesRequest {
        const message = {
            ...baseListRegistryCertificatesRequest,
        } as ListRegistryCertificatesRequest;
        message.registryId = object.registryId ?? '';
        return message;
    },
};

const baseListRegistryCertificatesResponse: object = {};

export const ListRegistryCertificatesResponse = {
    encode(
        message: ListRegistryCertificatesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.certificates) {
            RegistryCertificate.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListRegistryCertificatesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListRegistryCertificatesResponse,
        } as ListRegistryCertificatesResponse;
        message.certificates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificates.push(RegistryCertificate.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListRegistryCertificatesResponse {
        const message = {
            ...baseListRegistryCertificatesResponse,
        } as ListRegistryCertificatesResponse;
        message.certificates = (object.certificates ?? []).map((e: any) =>
            RegistryCertificate.fromJSON(e),
        );
        return message;
    },

    toJSON(message: ListRegistryCertificatesResponse): unknown {
        const obj: any = {};
        if (message.certificates) {
            obj.certificates = message.certificates.map((e) =>
                e ? RegistryCertificate.toJSON(e) : undefined,
            );
        } else {
            obj.certificates = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListRegistryCertificatesResponse>, I>>(
        object: I,
    ): ListRegistryCertificatesResponse {
        const message = {
            ...baseListRegistryCertificatesResponse,
        } as ListRegistryCertificatesResponse;
        message.certificates =
            object.certificates?.map((e) => RegistryCertificate.fromPartial(e)) || [];
        return message;
    },
};

const baseAddRegistryCertificateRequest: object = { registryId: '', certificateData: '' };

export const AddRegistryCertificateRequest = {
    encode(
        message: AddRegistryCertificateRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.certificateData !== '') {
            writer.uint32(26).string(message.certificateData);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddRegistryCertificateRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddRegistryCertificateRequest } as AddRegistryCertificateRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 3:
                    message.certificateData = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddRegistryCertificateRequest {
        const message = { ...baseAddRegistryCertificateRequest } as AddRegistryCertificateRequest;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        message.certificateData =
            object.certificateData !== undefined && object.certificateData !== null
                ? String(object.certificateData)
                : '';
        return message;
    },

    toJSON(message: AddRegistryCertificateRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.certificateData !== undefined && (obj.certificateData = message.certificateData);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AddRegistryCertificateRequest>, I>>(
        object: I,
    ): AddRegistryCertificateRequest {
        const message = { ...baseAddRegistryCertificateRequest } as AddRegistryCertificateRequest;
        message.registryId = object.registryId ?? '';
        message.certificateData = object.certificateData ?? '';
        return message;
    },
};

const baseAddRegistryCertificateMetadata: object = { registryId: '', fingerprint: '' };

export const AddRegistryCertificateMetadata = {
    encode(
        message: AddRegistryCertificateMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.fingerprint !== '') {
            writer.uint32(18).string(message.fingerprint);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddRegistryCertificateMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddRegistryCertificateMetadata } as AddRegistryCertificateMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.fingerprint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddRegistryCertificateMetadata {
        const message = { ...baseAddRegistryCertificateMetadata } as AddRegistryCertificateMetadata;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        message.fingerprint =
            object.fingerprint !== undefined && object.fingerprint !== null
                ? String(object.fingerprint)
                : '';
        return message;
    },

    toJSON(message: AddRegistryCertificateMetadata): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.fingerprint !== undefined && (obj.fingerprint = message.fingerprint);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AddRegistryCertificateMetadata>, I>>(
        object: I,
    ): AddRegistryCertificateMetadata {
        const message = { ...baseAddRegistryCertificateMetadata } as AddRegistryCertificateMetadata;
        message.registryId = object.registryId ?? '';
        message.fingerprint = object.fingerprint ?? '';
        return message;
    },
};

const baseDeleteRegistryCertificateRequest: object = { registryId: '', fingerprint: '' };

export const DeleteRegistryCertificateRequest = {
    encode(
        message: DeleteRegistryCertificateRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.fingerprint !== '') {
            writer.uint32(18).string(message.fingerprint);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRegistryCertificateRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteRegistryCertificateRequest,
        } as DeleteRegistryCertificateRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.fingerprint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteRegistryCertificateRequest {
        const message = {
            ...baseDeleteRegistryCertificateRequest,
        } as DeleteRegistryCertificateRequest;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        message.fingerprint =
            object.fingerprint !== undefined && object.fingerprint !== null
                ? String(object.fingerprint)
                : '';
        return message;
    },

    toJSON(message: DeleteRegistryCertificateRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.fingerprint !== undefined && (obj.fingerprint = message.fingerprint);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteRegistryCertificateRequest>, I>>(
        object: I,
    ): DeleteRegistryCertificateRequest {
        const message = {
            ...baseDeleteRegistryCertificateRequest,
        } as DeleteRegistryCertificateRequest;
        message.registryId = object.registryId ?? '';
        message.fingerprint = object.fingerprint ?? '';
        return message;
    },
};

const baseDeleteRegistryCertificateMetadata: object = { registryId: '', fingerprint: '' };

export const DeleteRegistryCertificateMetadata = {
    encode(
        message: DeleteRegistryCertificateMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.fingerprint !== '') {
            writer.uint32(18).string(message.fingerprint);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRegistryCertificateMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteRegistryCertificateMetadata,
        } as DeleteRegistryCertificateMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.fingerprint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteRegistryCertificateMetadata {
        const message = {
            ...baseDeleteRegistryCertificateMetadata,
        } as DeleteRegistryCertificateMetadata;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        message.fingerprint =
            object.fingerprint !== undefined && object.fingerprint !== null
                ? String(object.fingerprint)
                : '';
        return message;
    },

    toJSON(message: DeleteRegistryCertificateMetadata): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.fingerprint !== undefined && (obj.fingerprint = message.fingerprint);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteRegistryCertificateMetadata>, I>>(
        object: I,
    ): DeleteRegistryCertificateMetadata {
        const message = {
            ...baseDeleteRegistryCertificateMetadata,
        } as DeleteRegistryCertificateMetadata;
        message.registryId = object.registryId ?? '';
        message.fingerprint = object.fingerprint ?? '';
        return message;
    },
};

const baseListRegistryPasswordsRequest: object = { registryId: '' };

export const ListRegistryPasswordsRequest = {
    encode(
        message: ListRegistryPasswordsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListRegistryPasswordsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListRegistryPasswordsRequest } as ListRegistryPasswordsRequest;
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

    fromJSON(object: any): ListRegistryPasswordsRequest {
        const message = { ...baseListRegistryPasswordsRequest } as ListRegistryPasswordsRequest;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        return message;
    },

    toJSON(message: ListRegistryPasswordsRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListRegistryPasswordsRequest>, I>>(
        object: I,
    ): ListRegistryPasswordsRequest {
        const message = { ...baseListRegistryPasswordsRequest } as ListRegistryPasswordsRequest;
        message.registryId = object.registryId ?? '';
        return message;
    },
};

const baseListRegistryPasswordsResponse: object = {};

export const ListRegistryPasswordsResponse = {
    encode(
        message: ListRegistryPasswordsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.passwords) {
            RegistryPassword.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListRegistryPasswordsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListRegistryPasswordsResponse } as ListRegistryPasswordsResponse;
        message.passwords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.passwords.push(RegistryPassword.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListRegistryPasswordsResponse {
        const message = { ...baseListRegistryPasswordsResponse } as ListRegistryPasswordsResponse;
        message.passwords = (object.passwords ?? []).map((e: any) => RegistryPassword.fromJSON(e));
        return message;
    },

    toJSON(message: ListRegistryPasswordsResponse): unknown {
        const obj: any = {};
        if (message.passwords) {
            obj.passwords = message.passwords.map((e) =>
                e ? RegistryPassword.toJSON(e) : undefined,
            );
        } else {
            obj.passwords = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListRegistryPasswordsResponse>, I>>(
        object: I,
    ): ListRegistryPasswordsResponse {
        const message = { ...baseListRegistryPasswordsResponse } as ListRegistryPasswordsResponse;
        message.passwords = object.passwords?.map((e) => RegistryPassword.fromPartial(e)) || [];
        return message;
    },
};

const baseAddRegistryPasswordRequest: object = { registryId: '', password: '' };

export const AddRegistryPasswordRequest = {
    encode(
        message: AddRegistryPasswordRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.password !== '') {
            writer.uint32(18).string(message.password);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddRegistryPasswordRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddRegistryPasswordRequest } as AddRegistryPasswordRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddRegistryPasswordRequest {
        const message = { ...baseAddRegistryPasswordRequest } as AddRegistryPasswordRequest;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : '';
        return message;
    },

    toJSON(message: AddRegistryPasswordRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AddRegistryPasswordRequest>, I>>(
        object: I,
    ): AddRegistryPasswordRequest {
        const message = { ...baseAddRegistryPasswordRequest } as AddRegistryPasswordRequest;
        message.registryId = object.registryId ?? '';
        message.password = object.password ?? '';
        return message;
    },
};

const baseAddRegistryPasswordMetadata: object = { registryId: '', passwordId: '' };

export const AddRegistryPasswordMetadata = {
    encode(
        message: AddRegistryPasswordMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.passwordId !== '') {
            writer.uint32(18).string(message.passwordId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddRegistryPasswordMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddRegistryPasswordMetadata } as AddRegistryPasswordMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.passwordId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddRegistryPasswordMetadata {
        const message = { ...baseAddRegistryPasswordMetadata } as AddRegistryPasswordMetadata;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        message.passwordId =
            object.passwordId !== undefined && object.passwordId !== null
                ? String(object.passwordId)
                : '';
        return message;
    },

    toJSON(message: AddRegistryPasswordMetadata): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.passwordId !== undefined && (obj.passwordId = message.passwordId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AddRegistryPasswordMetadata>, I>>(
        object: I,
    ): AddRegistryPasswordMetadata {
        const message = { ...baseAddRegistryPasswordMetadata } as AddRegistryPasswordMetadata;
        message.registryId = object.registryId ?? '';
        message.passwordId = object.passwordId ?? '';
        return message;
    },
};

const baseDeleteRegistryPasswordRequest: object = { registryId: '', passwordId: '' };

export const DeleteRegistryPasswordRequest = {
    encode(
        message: DeleteRegistryPasswordRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.passwordId !== '') {
            writer.uint32(18).string(message.passwordId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRegistryPasswordRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteRegistryPasswordRequest } as DeleteRegistryPasswordRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.passwordId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteRegistryPasswordRequest {
        const message = { ...baseDeleteRegistryPasswordRequest } as DeleteRegistryPasswordRequest;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        message.passwordId =
            object.passwordId !== undefined && object.passwordId !== null
                ? String(object.passwordId)
                : '';
        return message;
    },

    toJSON(message: DeleteRegistryPasswordRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.passwordId !== undefined && (obj.passwordId = message.passwordId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteRegistryPasswordRequest>, I>>(
        object: I,
    ): DeleteRegistryPasswordRequest {
        const message = { ...baseDeleteRegistryPasswordRequest } as DeleteRegistryPasswordRequest;
        message.registryId = object.registryId ?? '';
        message.passwordId = object.passwordId ?? '';
        return message;
    },
};

const baseDeleteRegistryPasswordMetadata: object = { registryId: '', passwordId: '' };

export const DeleteRegistryPasswordMetadata = {
    encode(
        message: DeleteRegistryPasswordMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.passwordId !== '') {
            writer.uint32(18).string(message.passwordId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRegistryPasswordMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteRegistryPasswordMetadata } as DeleteRegistryPasswordMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.passwordId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteRegistryPasswordMetadata {
        const message = { ...baseDeleteRegistryPasswordMetadata } as DeleteRegistryPasswordMetadata;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        message.passwordId =
            object.passwordId !== undefined && object.passwordId !== null
                ? String(object.passwordId)
                : '';
        return message;
    },

    toJSON(message: DeleteRegistryPasswordMetadata): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.passwordId !== undefined && (obj.passwordId = message.passwordId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteRegistryPasswordMetadata>, I>>(
        object: I,
    ): DeleteRegistryPasswordMetadata {
        const message = { ...baseDeleteRegistryPasswordMetadata } as DeleteRegistryPasswordMetadata;
        message.registryId = object.registryId ?? '';
        message.passwordId = object.passwordId ?? '';
        return message;
    },
};

const baseListDeviceTopicAliasesRequest: object = { registryId: '', pageSize: 0, pageToken: '' };

export const ListDeviceTopicAliasesRequest = {
    encode(
        message: ListDeviceTopicAliasesRequest,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListDeviceTopicAliasesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDeviceTopicAliasesRequest } as ListDeviceTopicAliasesRequest;
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

    fromJSON(object: any): ListDeviceTopicAliasesRequest {
        const message = { ...baseListDeviceTopicAliasesRequest } as ListDeviceTopicAliasesRequest;
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

    toJSON(message: ListDeviceTopicAliasesRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListDeviceTopicAliasesRequest>, I>>(
        object: I,
    ): ListDeviceTopicAliasesRequest {
        const message = { ...baseListDeviceTopicAliasesRequest } as ListDeviceTopicAliasesRequest;
        message.registryId = object.registryId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListDeviceTopicAliasesResponse: object = { nextPageToken: '' };

export const ListDeviceTopicAliasesResponse = {
    encode(
        message: ListDeviceTopicAliasesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.aliases) {
            DeviceAlias.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListDeviceTopicAliasesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDeviceTopicAliasesResponse } as ListDeviceTopicAliasesResponse;
        message.aliases = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.aliases.push(DeviceAlias.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListDeviceTopicAliasesResponse {
        const message = { ...baseListDeviceTopicAliasesResponse } as ListDeviceTopicAliasesResponse;
        message.aliases = (object.aliases ?? []).map((e: any) => DeviceAlias.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListDeviceTopicAliasesResponse): unknown {
        const obj: any = {};
        if (message.aliases) {
            obj.aliases = message.aliases.map((e) => (e ? DeviceAlias.toJSON(e) : undefined));
        } else {
            obj.aliases = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListDeviceTopicAliasesResponse>, I>>(
        object: I,
    ): ListDeviceTopicAliasesResponse {
        const message = { ...baseListDeviceTopicAliasesResponse } as ListDeviceTopicAliasesResponse;
        message.aliases = object.aliases?.map((e) => DeviceAlias.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseListRegistryOperationsRequest: object = {
    registryId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListRegistryOperationsRequest = {
    encode(
        message: ListRegistryOperationsRequest,
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
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListRegistryOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListRegistryOperationsRequest } as ListRegistryOperationsRequest;
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

    fromJSON(object: any): ListRegistryOperationsRequest {
        const message = { ...baseListRegistryOperationsRequest } as ListRegistryOperationsRequest;
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
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        return message;
    },

    toJSON(message: ListRegistryOperationsRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListRegistryOperationsRequest>, I>>(
        object: I,
    ): ListRegistryOperationsRequest {
        const message = { ...baseListRegistryOperationsRequest } as ListRegistryOperationsRequest;
        message.registryId = object.registryId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListRegistryOperationsResponse: object = { nextPageToken: '' };

export const ListRegistryOperationsResponse = {
    encode(
        message: ListRegistryOperationsResponse,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListRegistryOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListRegistryOperationsResponse } as ListRegistryOperationsResponse;
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

    fromJSON(object: any): ListRegistryOperationsResponse {
        const message = { ...baseListRegistryOperationsResponse } as ListRegistryOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListRegistryOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListRegistryOperationsResponse>, I>>(
        object: I,
    ): ListRegistryOperationsResponse {
        const message = { ...baseListRegistryOperationsResponse } as ListRegistryOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseAddDataStreamExportRequest: object = {
    name: '',
    registryId: '',
    mqttTopicFilter: '',
    database: '',
    stream: '',
    serviceAccountId: '',
};

export const AddDataStreamExportRequest = {
    encode(
        message: AddDataStreamExportRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.registryId !== '') {
            writer.uint32(18).string(message.registryId);
        }
        if (message.mqttTopicFilter !== '') {
            writer.uint32(34).string(message.mqttTopicFilter);
        }
        if (message.database !== '') {
            writer.uint32(42).string(message.database);
        }
        if (message.stream !== '') {
            writer.uint32(50).string(message.stream);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(58).string(message.serviceAccountId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddDataStreamExportRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddDataStreamExportRequest } as AddDataStreamExportRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.registryId = reader.string();
                    break;
                case 4:
                    message.mqttTopicFilter = reader.string();
                    break;
                case 5:
                    message.database = reader.string();
                    break;
                case 6:
                    message.stream = reader.string();
                    break;
                case 7:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddDataStreamExportRequest {
        const message = { ...baseAddDataStreamExportRequest } as AddDataStreamExportRequest;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        message.mqttTopicFilter =
            object.mqttTopicFilter !== undefined && object.mqttTopicFilter !== null
                ? String(object.mqttTopicFilter)
                : '';
        message.database =
            object.database !== undefined && object.database !== null
                ? String(object.database)
                : '';
        message.stream =
            object.stream !== undefined && object.stream !== null ? String(object.stream) : '';
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        return message;
    },

    toJSON(message: AddDataStreamExportRequest): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.mqttTopicFilter !== undefined && (obj.mqttTopicFilter = message.mqttTopicFilter);
        message.database !== undefined && (obj.database = message.database);
        message.stream !== undefined && (obj.stream = message.stream);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AddDataStreamExportRequest>, I>>(
        object: I,
    ): AddDataStreamExportRequest {
        const message = { ...baseAddDataStreamExportRequest } as AddDataStreamExportRequest;
        message.name = object.name ?? '';
        message.registryId = object.registryId ?? '';
        message.mqttTopicFilter = object.mqttTopicFilter ?? '';
        message.database = object.database ?? '';
        message.stream = object.stream ?? '';
        message.serviceAccountId = object.serviceAccountId ?? '';
        return message;
    },
};

const baseAddDataStreamExportMetadata: object = { registryId: '', dataStreamExportId: '' };

export const AddDataStreamExportMetadata = {
    encode(
        message: AddDataStreamExportMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.dataStreamExportId !== '') {
            writer.uint32(18).string(message.dataStreamExportId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddDataStreamExportMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddDataStreamExportMetadata } as AddDataStreamExportMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.dataStreamExportId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddDataStreamExportMetadata {
        const message = { ...baseAddDataStreamExportMetadata } as AddDataStreamExportMetadata;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        message.dataStreamExportId =
            object.dataStreamExportId !== undefined && object.dataStreamExportId !== null
                ? String(object.dataStreamExportId)
                : '';
        return message;
    },

    toJSON(message: AddDataStreamExportMetadata): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.dataStreamExportId !== undefined &&
            (obj.dataStreamExportId = message.dataStreamExportId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AddDataStreamExportMetadata>, I>>(
        object: I,
    ): AddDataStreamExportMetadata {
        const message = { ...baseAddDataStreamExportMetadata } as AddDataStreamExportMetadata;
        message.registryId = object.registryId ?? '';
        message.dataStreamExportId = object.dataStreamExportId ?? '';
        return message;
    },
};

const baseDeleteDataStreamExportRequest: object = { registryId: '', dataStreamExportId: '' };

export const DeleteDataStreamExportRequest = {
    encode(
        message: DeleteDataStreamExportRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.dataStreamExportId !== '') {
            writer.uint32(18).string(message.dataStreamExportId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDataStreamExportRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteDataStreamExportRequest } as DeleteDataStreamExportRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.dataStreamExportId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteDataStreamExportRequest {
        const message = { ...baseDeleteDataStreamExportRequest } as DeleteDataStreamExportRequest;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        message.dataStreamExportId =
            object.dataStreamExportId !== undefined && object.dataStreamExportId !== null
                ? String(object.dataStreamExportId)
                : '';
        return message;
    },

    toJSON(message: DeleteDataStreamExportRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.dataStreamExportId !== undefined &&
            (obj.dataStreamExportId = message.dataStreamExportId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteDataStreamExportRequest>, I>>(
        object: I,
    ): DeleteDataStreamExportRequest {
        const message = { ...baseDeleteDataStreamExportRequest } as DeleteDataStreamExportRequest;
        message.registryId = object.registryId ?? '';
        message.dataStreamExportId = object.dataStreamExportId ?? '';
        return message;
    },
};

const baseDeleteDataStreamExportMetadata: object = { registryId: '', dataStreamExportId: '' };

export const DeleteDataStreamExportMetadata = {
    encode(
        message: DeleteDataStreamExportMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.dataStreamExportId !== '') {
            writer.uint32(18).string(message.dataStreamExportId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDataStreamExportMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteDataStreamExportMetadata } as DeleteDataStreamExportMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.dataStreamExportId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteDataStreamExportMetadata {
        const message = { ...baseDeleteDataStreamExportMetadata } as DeleteDataStreamExportMetadata;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        message.dataStreamExportId =
            object.dataStreamExportId !== undefined && object.dataStreamExportId !== null
                ? String(object.dataStreamExportId)
                : '';
        return message;
    },

    toJSON(message: DeleteDataStreamExportMetadata): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.dataStreamExportId !== undefined &&
            (obj.dataStreamExportId = message.dataStreamExportId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteDataStreamExportMetadata>, I>>(
        object: I,
    ): DeleteDataStreamExportMetadata {
        const message = { ...baseDeleteDataStreamExportMetadata } as DeleteDataStreamExportMetadata;
        message.registryId = object.registryId ?? '';
        message.dataStreamExportId = object.dataStreamExportId ?? '';
        return message;
    },
};

const baseListDataStreamExportsRequest: object = { registryId: '' };

export const ListDataStreamExportsRequest = {
    encode(
        message: ListDataStreamExportsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListDataStreamExportsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDataStreamExportsRequest } as ListDataStreamExportsRequest;
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

    fromJSON(object: any): ListDataStreamExportsRequest {
        const message = { ...baseListDataStreamExportsRequest } as ListDataStreamExportsRequest;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        return message;
    },

    toJSON(message: ListDataStreamExportsRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListDataStreamExportsRequest>, I>>(
        object: I,
    ): ListDataStreamExportsRequest {
        const message = { ...baseListDataStreamExportsRequest } as ListDataStreamExportsRequest;
        message.registryId = object.registryId ?? '';
        return message;
    },
};

const baseListDataStreamExportsResponse: object = {};

export const ListDataStreamExportsResponse = {
    encode(
        message: ListDataStreamExportsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.dataStreamExports) {
            DataStreamExport.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListDataStreamExportsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDataStreamExportsResponse } as ListDataStreamExportsResponse;
        message.dataStreamExports = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataStreamExports.push(
                        DataStreamExport.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListDataStreamExportsResponse {
        const message = { ...baseListDataStreamExportsResponse } as ListDataStreamExportsResponse;
        message.dataStreamExports = (object.dataStreamExports ?? []).map((e: any) =>
            DataStreamExport.fromJSON(e),
        );
        return message;
    },

    toJSON(message: ListDataStreamExportsResponse): unknown {
        const obj: any = {};
        if (message.dataStreamExports) {
            obj.dataStreamExports = message.dataStreamExports.map((e) =>
                e ? DataStreamExport.toJSON(e) : undefined,
            );
        } else {
            obj.dataStreamExports = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListDataStreamExportsResponse>, I>>(
        object: I,
    ): ListDataStreamExportsResponse {
        const message = { ...baseListDataStreamExportsResponse } as ListDataStreamExportsResponse;
        message.dataStreamExports =
            object.dataStreamExports?.map((e) => DataStreamExport.fromPartial(e)) || [];
        return message;
    },
};

const baseDisableRegistryRequest: object = { registryId: '' };

export const DisableRegistryRequest = {
    encode(message: DisableRegistryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DisableRegistryRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDisableRegistryRequest } as DisableRegistryRequest;
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

    fromJSON(object: any): DisableRegistryRequest {
        const message = { ...baseDisableRegistryRequest } as DisableRegistryRequest;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        return message;
    },

    toJSON(message: DisableRegistryRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DisableRegistryRequest>, I>>(
        object: I,
    ): DisableRegistryRequest {
        const message = { ...baseDisableRegistryRequest } as DisableRegistryRequest;
        message.registryId = object.registryId ?? '';
        return message;
    },
};

const baseDisableRegistryMetadata: object = { registryId: '' };

export const DisableRegistryMetadata = {
    encode(message: DisableRegistryMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DisableRegistryMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDisableRegistryMetadata } as DisableRegistryMetadata;
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

    fromJSON(object: any): DisableRegistryMetadata {
        const message = { ...baseDisableRegistryMetadata } as DisableRegistryMetadata;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        return message;
    },

    toJSON(message: DisableRegistryMetadata): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DisableRegistryMetadata>, I>>(
        object: I,
    ): DisableRegistryMetadata {
        const message = { ...baseDisableRegistryMetadata } as DisableRegistryMetadata;
        message.registryId = object.registryId ?? '';
        return message;
    },
};

const baseEnableRegistryRequest: object = { registryId: '' };

export const EnableRegistryRequest = {
    encode(message: EnableRegistryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EnableRegistryRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEnableRegistryRequest } as EnableRegistryRequest;
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

    fromJSON(object: any): EnableRegistryRequest {
        const message = { ...baseEnableRegistryRequest } as EnableRegistryRequest;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        return message;
    },

    toJSON(message: EnableRegistryRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<EnableRegistryRequest>, I>>(
        object: I,
    ): EnableRegistryRequest {
        const message = { ...baseEnableRegistryRequest } as EnableRegistryRequest;
        message.registryId = object.registryId ?? '';
        return message;
    },
};

const baseEnableRegistryMetadata: object = { registryId: '' };

export const EnableRegistryMetadata = {
    encode(message: EnableRegistryMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EnableRegistryMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEnableRegistryMetadata } as EnableRegistryMetadata;
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

    fromJSON(object: any): EnableRegistryMetadata {
        const message = { ...baseEnableRegistryMetadata } as EnableRegistryMetadata;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        return message;
    },

    toJSON(message: EnableRegistryMetadata): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<EnableRegistryMetadata>, I>>(
        object: I,
    ): EnableRegistryMetadata {
        const message = { ...baseEnableRegistryMetadata } as EnableRegistryMetadata;
        message.registryId = object.registryId ?? '';
        return message;
    },
};

/** A set of methods for managing registry. */
export const RegistryServiceService = {
    /**
     * Returns the specified registry.
     *
     * To get the list of available registries, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetRegistryRequest) =>
            Buffer.from(GetRegistryRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetRegistryRequest.decode(value),
        responseSerialize: (value: Registry) => Buffer.from(Registry.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Registry.decode(value),
    },
    getByName: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/GetByName',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetByNameRegistryRequest) =>
            Buffer.from(GetByNameRegistryRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetByNameRegistryRequest.decode(value),
        responseSerialize: (value: Registry) => Buffer.from(Registry.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Registry.decode(value),
    },
    /** Retrieves the list of registries in the specified folder. */
    list: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/List',
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
        path: '/yandex.cloud.iot.devices.v1.RegistryService/Create',
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
        path: '/yandex.cloud.iot.devices.v1.RegistryService/Update',
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
        path: '/yandex.cloud.iot.devices.v1.RegistryService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteRegistryRequest) =>
            Buffer.from(DeleteRegistryRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteRegistryRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Retrieves the list of registry certificates for the specified registry. */
    listCertificates: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/ListCertificates',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListRegistryCertificatesRequest) =>
            Buffer.from(ListRegistryCertificatesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListRegistryCertificatesRequest.decode(value),
        responseSerialize: (value: ListRegistryCertificatesResponse) =>
            Buffer.from(ListRegistryCertificatesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListRegistryCertificatesResponse.decode(value),
    },
    /** Adds a certificate. */
    addCertificate: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/AddCertificate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: AddRegistryCertificateRequest) =>
            Buffer.from(AddRegistryCertificateRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => AddRegistryCertificateRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified registry certificate. */
    deleteCertificate: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/DeleteCertificate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteRegistryCertificateRequest) =>
            Buffer.from(DeleteRegistryCertificateRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteRegistryCertificateRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Retrieves the list of passwords for the specified registry. */
    listPasswords: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/ListPasswords',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListRegistryPasswordsRequest) =>
            Buffer.from(ListRegistryPasswordsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListRegistryPasswordsRequest.decode(value),
        responseSerialize: (value: ListRegistryPasswordsResponse) =>
            Buffer.from(ListRegistryPasswordsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListRegistryPasswordsResponse.decode(value),
    },
    /** Adds password for the specified registry. */
    addPassword: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/AddPassword',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: AddRegistryPasswordRequest) =>
            Buffer.from(AddRegistryPasswordRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => AddRegistryPasswordRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified password. */
    deletePassword: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/DeletePassword',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteRegistryPasswordRequest) =>
            Buffer.from(DeleteRegistryPasswordRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteRegistryPasswordRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Retrieves the list of device topic aliases for the specified registry. */
    listDeviceTopicAliases: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/ListDeviceTopicAliases',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListDeviceTopicAliasesRequest) =>
            Buffer.from(ListDeviceTopicAliasesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListDeviceTopicAliasesRequest.decode(value),
        responseSerialize: (value: ListDeviceTopicAliasesResponse) =>
            Buffer.from(ListDeviceTopicAliasesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListDeviceTopicAliasesResponse.decode(value),
    },
    /** Retrieves the list of YDS exports for the specified registry. */
    listDataStreamExports: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/ListDataStreamExports',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListDataStreamExportsRequest) =>
            Buffer.from(ListDataStreamExportsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListDataStreamExportsRequest.decode(value),
        responseSerialize: (value: ListDataStreamExportsResponse) =>
            Buffer.from(ListDataStreamExportsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListDataStreamExportsResponse.decode(value),
    },
    /** Adds YDS export for the specified registry. */
    addDataStreamExport: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/AddDataStreamExport',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: AddDataStreamExportRequest) =>
            Buffer.from(AddDataStreamExportRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => AddDataStreamExportRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified YDS export. */
    deleteDataStreamExport: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/DeleteDataStreamExport',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteDataStreamExportRequest) =>
            Buffer.from(DeleteDataStreamExportRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteDataStreamExportRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified registry. */
    listOperations: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListRegistryOperationsRequest) =>
            Buffer.from(ListRegistryOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListRegistryOperationsRequest.decode(value),
        responseSerialize: (value: ListRegistryOperationsResponse) =>
            Buffer.from(ListRegistryOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListRegistryOperationsResponse.decode(value),
    },
    /** Disables the specified registry. */
    disable: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/Disable',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DisableRegistryRequest) =>
            Buffer.from(DisableRegistryRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DisableRegistryRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Enables the specified registry. */
    enable: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/Enable',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: EnableRegistryRequest) =>
            Buffer.from(EnableRegistryRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => EnableRegistryRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface RegistryServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified registry.
     *
     * To get the list of available registries, make a [List] request.
     */
    get: handleUnaryCall<GetRegistryRequest, Registry>;
    getByName: handleUnaryCall<GetByNameRegistryRequest, Registry>;
    /** Retrieves the list of registries in the specified folder. */
    list: handleUnaryCall<ListRegistriesRequest, ListRegistriesResponse>;
    /** Creates a registry in the specified folder. */
    create: handleUnaryCall<CreateRegistryRequest, Operation>;
    /** Updates the specified registry. */
    update: handleUnaryCall<UpdateRegistryRequest, Operation>;
    /** Deletes the specified registry. */
    delete: handleUnaryCall<DeleteRegistryRequest, Operation>;
    /** Retrieves the list of registry certificates for the specified registry. */
    listCertificates: handleUnaryCall<
        ListRegistryCertificatesRequest,
        ListRegistryCertificatesResponse
    >;
    /** Adds a certificate. */
    addCertificate: handleUnaryCall<AddRegistryCertificateRequest, Operation>;
    /** Deletes the specified registry certificate. */
    deleteCertificate: handleUnaryCall<DeleteRegistryCertificateRequest, Operation>;
    /** Retrieves the list of passwords for the specified registry. */
    listPasswords: handleUnaryCall<ListRegistryPasswordsRequest, ListRegistryPasswordsResponse>;
    /** Adds password for the specified registry. */
    addPassword: handleUnaryCall<AddRegistryPasswordRequest, Operation>;
    /** Deletes the specified password. */
    deletePassword: handleUnaryCall<DeleteRegistryPasswordRequest, Operation>;
    /** Retrieves the list of device topic aliases for the specified registry. */
    listDeviceTopicAliases: handleUnaryCall<
        ListDeviceTopicAliasesRequest,
        ListDeviceTopicAliasesResponse
    >;
    /** Retrieves the list of YDS exports for the specified registry. */
    listDataStreamExports: handleUnaryCall<
        ListDataStreamExportsRequest,
        ListDataStreamExportsResponse
    >;
    /** Adds YDS export for the specified registry. */
    addDataStreamExport: handleUnaryCall<AddDataStreamExportRequest, Operation>;
    /** Deletes the specified YDS export. */
    deleteDataStreamExport: handleUnaryCall<DeleteDataStreamExportRequest, Operation>;
    /** Lists operations for the specified registry. */
    listOperations: handleUnaryCall<ListRegistryOperationsRequest, ListRegistryOperationsResponse>;
    /** Disables the specified registry. */
    disable: handleUnaryCall<DisableRegistryRequest, Operation>;
    /** Enables the specified registry. */
    enable: handleUnaryCall<EnableRegistryRequest, Operation>;
}

export interface RegistryServiceClient extends Client {
    /**
     * Returns the specified registry.
     *
     * To get the list of available registries, make a [List] request.
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
    getByName(
        request: GetByNameRegistryRequest,
        callback: (error: ServiceError | null, response: Registry) => void,
    ): ClientUnaryCall;
    getByName(
        request: GetByNameRegistryRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Registry) => void,
    ): ClientUnaryCall;
    getByName(
        request: GetByNameRegistryRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Registry) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of registries in the specified folder. */
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
    /** Retrieves the list of registry certificates for the specified registry. */
    listCertificates(
        request: ListRegistryCertificatesRequest,
        callback: (error: ServiceError | null, response: ListRegistryCertificatesResponse) => void,
    ): ClientUnaryCall;
    listCertificates(
        request: ListRegistryCertificatesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListRegistryCertificatesResponse) => void,
    ): ClientUnaryCall;
    listCertificates(
        request: ListRegistryCertificatesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListRegistryCertificatesResponse) => void,
    ): ClientUnaryCall;
    /** Adds a certificate. */
    addCertificate(
        request: AddRegistryCertificateRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    addCertificate(
        request: AddRegistryCertificateRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    addCertificate(
        request: AddRegistryCertificateRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified registry certificate. */
    deleteCertificate(
        request: DeleteRegistryCertificateRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deleteCertificate(
        request: DeleteRegistryCertificateRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deleteCertificate(
        request: DeleteRegistryCertificateRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of passwords for the specified registry. */
    listPasswords(
        request: ListRegistryPasswordsRequest,
        callback: (error: ServiceError | null, response: ListRegistryPasswordsResponse) => void,
    ): ClientUnaryCall;
    listPasswords(
        request: ListRegistryPasswordsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListRegistryPasswordsResponse) => void,
    ): ClientUnaryCall;
    listPasswords(
        request: ListRegistryPasswordsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListRegistryPasswordsResponse) => void,
    ): ClientUnaryCall;
    /** Adds password for the specified registry. */
    addPassword(
        request: AddRegistryPasswordRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    addPassword(
        request: AddRegistryPasswordRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    addPassword(
        request: AddRegistryPasswordRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified password. */
    deletePassword(
        request: DeleteRegistryPasswordRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deletePassword(
        request: DeleteRegistryPasswordRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deletePassword(
        request: DeleteRegistryPasswordRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of device topic aliases for the specified registry. */
    listDeviceTopicAliases(
        request: ListDeviceTopicAliasesRequest,
        callback: (error: ServiceError | null, response: ListDeviceTopicAliasesResponse) => void,
    ): ClientUnaryCall;
    listDeviceTopicAliases(
        request: ListDeviceTopicAliasesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListDeviceTopicAliasesResponse) => void,
    ): ClientUnaryCall;
    listDeviceTopicAliases(
        request: ListDeviceTopicAliasesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListDeviceTopicAliasesResponse) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of YDS exports for the specified registry. */
    listDataStreamExports(
        request: ListDataStreamExportsRequest,
        callback: (error: ServiceError | null, response: ListDataStreamExportsResponse) => void,
    ): ClientUnaryCall;
    listDataStreamExports(
        request: ListDataStreamExportsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListDataStreamExportsResponse) => void,
    ): ClientUnaryCall;
    listDataStreamExports(
        request: ListDataStreamExportsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListDataStreamExportsResponse) => void,
    ): ClientUnaryCall;
    /** Adds YDS export for the specified registry. */
    addDataStreamExport(
        request: AddDataStreamExportRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    addDataStreamExport(
        request: AddDataStreamExportRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    addDataStreamExport(
        request: AddDataStreamExportRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified YDS export. */
    deleteDataStreamExport(
        request: DeleteDataStreamExportRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deleteDataStreamExport(
        request: DeleteDataStreamExportRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deleteDataStreamExport(
        request: DeleteDataStreamExportRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists operations for the specified registry. */
    listOperations(
        request: ListRegistryOperationsRequest,
        callback: (error: ServiceError | null, response: ListRegistryOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListRegistryOperationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListRegistryOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListRegistryOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListRegistryOperationsResponse) => void,
    ): ClientUnaryCall;
    /** Disables the specified registry. */
    disable(
        request: DisableRegistryRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    disable(
        request: DisableRegistryRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    disable(
        request: DisableRegistryRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Enables the specified registry. */
    enable(
        request: EnableRegistryRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    enable(
        request: EnableRegistryRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    enable(
        request: EnableRegistryRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const RegistryServiceClient = makeGenericClientConstructor(
    RegistryServiceService,
    'yandex.cloud.iot.devices.v1.RegistryService',
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
