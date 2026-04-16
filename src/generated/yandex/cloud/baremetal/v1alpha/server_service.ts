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
import { FieldMask } from '../../../../google/protobuf/field_mask';
import {
    Server,
    PrivateSubnetNetworkInterface,
    PublicSubnetNetworkInterface,
} from '../../../../yandex/cloud/baremetal/v1alpha/server';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { Storage } from '../../../../yandex/cloud/baremetal/v1alpha/storage';

export const protobufPackage = 'yandex.cloud.baremetal.v1alpha';

export interface GetServerRequest {
    /**
     * ID of the Server resource to return.
     *
     * To get the server ID, use a [ServerService.List] request.
     */
    serverId: string;
}

export interface ListServerRequest {
    /**
     * ID of the folder to list servers in.
     *
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is greater than `page_size`,
     * the service returns a [ListServerResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value is 20.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListServerResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * By which column the listing should be ordered and in which direction,
     * format is "createdAt desc". "id asc" if omitted.
     * Supported fields: ["id", "name", "createdAt"].
     * Both snake_case and camelCase are supported for fields.
     */
    orderBy: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression consists of one or more conditions united by `AND` operator: `<condition1> [AND <condition2> [<...> AND <conditionN>]]`.
     *
     * Each condition has the form `<field> <operator> <value>`, where:
     * 1. `<field>` is the field name. Currently you can use filtering only on the limited number of fields.
     * 2. `<operator>` is a logical operator, one of `=` (equal), `:` (substring).
     * 3. `<value>` represents a value.
     * String values should be written in double (`"`) or single (`'`) quotes. C-style escape sequences are supported (`\"` turns to `"`, `\'` to `'`, `\\` to backslash).
     * Example: "key1='value' AND key2='value'"
     * Supported operators: ["AND"].
     * Supported fields: ["id", "name", "zoneId", "hardwarePoolId"].
     * Both snake_case and camelCase are supported for fields.
     */
    filter: string;
}

export interface ListServerResponse {
    /** List of Server resources. */
    servers: Server[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * [ListServerRequest.page_size], use `next_page_token` as the value
     * for the [ListServerRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateServerRequest {
    /**
     * ID of the folder to create server in.
     *
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the server.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the server. */
    description: string;
    /**
     * ID of the hardware pool that the server belongs to.
     *
     * To get the hardware pool ID, use a [HardwarePoolService.List] request.
     */
    hardwarePoolId: string;
    /**
     * ID of the configuration to use for the server.
     *
     * To get the configuration ID, use a [ConfigurationService.List] request.
     */
    configurationId: string;
    /** A period of time for which the server is rented. */
    rentalPeriodId: string;
    /**
     * Network configuration for the server. Specifies how the network interface is configured
     * to interact with other servers on the internal network and on the internet.
     * Currently up to 2 network interfaces are supported: required private network interface and
     * optional public network interface.
     */
    networkInterfaces: NetworkInterfaceSpec[];
    /**
     * Operating system specific settings for provisioning the server. Optional, if omitted, the
     * server will be created without an operating system.
     */
    osSettingsSpec?: OsSettingsSpec;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
}

export interface CreateServerRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateServerMetadata {
    /** ID of the server that is being created. */
    serverId: string;
}

export interface UpdateServerRequest {
    /**
     * ID of the server to update.
     *
     * To get the server ID, use a [ServerService.List] request.
     */
    serverId: string;
    /** Field mask that specifies which fields of the Server resource are going to be updated. */
    updateMask?: FieldMask;
    /**
     * Name of the server.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the server. */
    description: string;
    /**
     * Network configuration for the server. Specifies how the network interface is configured
     * to interact with other servers on the internal network and on the internet.
     * Currently up to 2 network interfaces are supported: required private network interface and
     * optional public network interface.
     */
    networkInterfaces: NetworkInterfaceSpec[];
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
}

export interface UpdateServerRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface NetworkInterfaceSpec {
    /** ID of the network interface. Should not be specified when creating a server. */
    id: string;
    /** Private subnet. */
    privateSubnet?: PrivateSubnetNetworkInterface | undefined;
    /** Public subnet. */
    publicSubnet?: PublicSubnetNetworkInterface | undefined;
}

export interface UpdateServerMetadata {
    /** ID of the Server resource that is being updated. */
    serverId: string;
}

export interface DeleteServerRequest {
    /**
     * ID of the server to delete.
     *
     * To get the server ID, use a [ServerService.List] request.
     */
    serverId: string;
}

export interface DeleteServerMetadata {
    /** ID of the Server resource that is being deleted. */
    serverId: string;
}

export interface PowerOffServerRequest {
    /**
     * ID of the server to power off.
     *
     * To get the server ID, use a [ServerService.List] request.
     */
    serverId: string;
}

export interface PowerOffServerMetadata {
    /** ID of the Server resource that is being powered off. */
    serverId: string;
}

export interface PowerOnServerRequest {
    /**
     * ID of the server to power on.
     *
     * To get the server ID, use a [ServerService.List] request.
     */
    serverId: string;
}

export interface PowerOnServerMetadata {
    /** ID of the Server resource that is being powered on. */
    serverId: string;
}

export interface RebootServerRequest {
    /**
     * ID of the server to reboot.
     *
     * To get the server ID, use a [ServerService.List] request.
     */
    serverId: string;
}

export interface RebootServerMetadata {
    /** ID of the Server resource that is being rebooted. */
    serverId: string;
}

export interface ReinstallServerRequest {
    /**
     * ID of the server to reinstall.
     *
     * To get the server ID, use a [ServerService.List] request.
     */
    serverId: string;
    /** Operating system specific settings for provisioning the server. */
    osSettingsSpec?: OsSettingsSpec;
}

export interface ReinstallServerMetadata {
    /** ID of the Server resource that is being reinstalled. */
    serverId: string;
}

export interface ListServerOperationsRequest {
    /** ID of the Server resource to list operations for. */
    serverId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is greater than `page_size`,
     * the service returns a [ListServerOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value is 20.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListServerOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListServerOperationsResponse {
    /** List of operations for the specified Server resource. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * [ListServerOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListServerOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface BatchCreateServersRequest {
    /**
     * ID of the folder to list images in.
     *
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the server.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the server. */
    description: string;
    /**
     * ID of the hardware pool that the server belongs to.
     *
     * To get the hardware pool ID, use a [HardwarePoolService.List] request.
     */
    hardwarePoolId: string;
    /**
     * ID of the configuration to use for the server.
     *
     * To get the configuration ID, use a [ConfigurationService.List] request.
     */
    configurationId: string;
    /** A period of time for which the server is rented. */
    rentalPeriodId: string;
    /**
     * Network configuration for the server. Specifies how the network interface is configured
     * to interact with other servers on the internal network and on the internet.
     * Currently up to 2 network interfaces are supported: required private network interface and
     * optional public network interface.
     */
    networkInterfaces: NetworkInterfaceSpec[];
    /**
     * Operating system specific settings for provisioning the server. Optional, if omitted, the
     * server will be created without an operating system.
     */
    osSettingsSpec?: OsSettingsSpec;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Number of servers to create. */
    count: number;
}

export interface BatchCreateServersRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface BatchCreateServersResponse {
    /** List of Server resources that were created. */
    servers: Server[];
}

export interface BatchCreateServersMetadata {
    /** IDs of the servers that were created. */
    serverIds: string[];
}

export interface QuarantineServerMetadata {
    /** ID of the server that is being quarantined. */
    serverId: string;
}

export interface StartProlongationRequest {
    /** ID of the server that is being prolonged. */
    serverId: string;
}

export interface StopProlongationRequest {
    /**
     * ID of the server to stop prolongation for.
     *
     * To get the server ID, use a [ServerService.List] request.
     */
    serverId: string;
}

export interface ServerSetProlongationMetadata {
    /** ID of the server for which the prolongation is being set. */
    serverId: string;
}

export interface OsSettingsSpec {
    /** ID of the image that the server was created from. */
    imageId: string;
    /**
     * List of storages to be created on the server. If not specified, the default value based on the
     * selected configuration will be used as the field value.
     */
    storages: Storage[];
    /** Public SSH key for the server. */
    sshPublicKey: string | undefined;
    /**
     * ID of the user SSH key to use for the server.
     *
     * To get the user SSH key ID, use a [yandex.cloud.organizationmanager.v1.UserSshKeyService.List] request.
     */
    userSshId: string | undefined;
    /** Raw password. */
    passwordPlainText: string | undefined;
    /** Reference to the Lockbox secret used to obtain the password. */
    passwordLockboxSecret?: LockboxSecret | undefined;
}

export interface LockboxSecret {
    /** The unique identifier for the lockbox secret that contains the user password. */
    secretId: string;
    /**
     * The unique identifier for the lockbox version.
     * If omitted, the current version of the secret will be used.
     */
    versionId: string;
    /** The key used to access a specific secret entry. */
    key: string;
}

const baseGetServerRequest: object = { serverId: '' };

export const GetServerRequest = {
    encode(message: GetServerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.serverId !== '') {
            writer.uint32(10).string(message.serverId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetServerRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetServerRequest } as GetServerRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serverId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetServerRequest {
        const message = { ...baseGetServerRequest } as GetServerRequest;
        message.serverId =
            object.serverId !== undefined && object.serverId !== null
                ? String(object.serverId)
                : '';
        return message;
    },

    toJSON(message: GetServerRequest): unknown {
        const obj: any = {};
        message.serverId !== undefined && (obj.serverId = message.serverId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetServerRequest>, I>>(object: I): GetServerRequest {
        const message = { ...baseGetServerRequest } as GetServerRequest;
        message.serverId = object.serverId ?? '';
        return message;
    },
};

const baseListServerRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    orderBy: '',
    filter: '',
};

export const ListServerRequest = {
    encode(message: ListServerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(800).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(810).string(message.pageToken);
        }
        if (message.orderBy !== '') {
            writer.uint32(818).string(message.orderBy);
        }
        if (message.filter !== '') {
            writer.uint32(826).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListServerRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListServerRequest } as ListServerRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 100:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 101:
                    message.pageToken = reader.string();
                    break;
                case 102:
                    message.orderBy = reader.string();
                    break;
                case 103:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListServerRequest {
        const message = { ...baseListServerRequest } as ListServerRequest;
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
        message.orderBy =
            object.orderBy !== undefined && object.orderBy !== null ? String(object.orderBy) : '';
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        return message;
    },

    toJSON(message: ListServerRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListServerRequest>, I>>(object: I): ListServerRequest {
        const message = { ...baseListServerRequest } as ListServerRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.orderBy = object.orderBy ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListServerResponse: object = { nextPageToken: '' };

export const ListServerResponse = {
    encode(message: ListServerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.servers) {
            Server.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(802).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListServerResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListServerResponse } as ListServerResponse;
        message.servers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.servers.push(Server.decode(reader, reader.uint32()));
                    break;
                case 100:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListServerResponse {
        const message = { ...baseListServerResponse } as ListServerResponse;
        message.servers = (object.servers ?? []).map((e: any) => Server.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListServerResponse): unknown {
        const obj: any = {};
        if (message.servers) {
            obj.servers = message.servers.map((e) => (e ? Server.toJSON(e) : undefined));
        } else {
            obj.servers = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListServerResponse>, I>>(
        object: I,
    ): ListServerResponse {
        const message = { ...baseListServerResponse } as ListServerResponse;
        message.servers = object.servers?.map((e) => Server.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateServerRequest: object = {
    folderId: '',
    name: '',
    description: '',
    hardwarePoolId: '',
    configurationId: '',
    rentalPeriodId: '',
};

export const CreateServerRequest = {
    encode(message: CreateServerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.hardwarePoolId !== '') {
            writer.uint32(34).string(message.hardwarePoolId);
        }
        if (message.configurationId !== '') {
            writer.uint32(42).string(message.configurationId);
        }
        if (message.rentalPeriodId !== '') {
            writer.uint32(90).string(message.rentalPeriodId);
        }
        for (const v of message.networkInterfaces) {
            NetworkInterfaceSpec.encode(v!, writer.uint32(122).fork()).ldelim();
        }
        if (message.osSettingsSpec !== undefined) {
            OsSettingsSpec.encode(message.osSettingsSpec, writer.uint32(130).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateServerRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateServerRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateServerRequest } as CreateServerRequest;
        message.networkInterfaces = [];
        message.labels = {};
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
                    message.hardwarePoolId = reader.string();
                    break;
                case 5:
                    message.configurationId = reader.string();
                    break;
                case 11:
                    message.rentalPeriodId = reader.string();
                    break;
                case 15:
                    message.networkInterfaces.push(
                        NetworkInterfaceSpec.decode(reader, reader.uint32()),
                    );
                    break;
                case 16:
                    message.osSettingsSpec = OsSettingsSpec.decode(reader, reader.uint32());
                    break;
                case 200:
                    const entry200 = CreateServerRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry200.value !== undefined) {
                        message.labels[entry200.key] = entry200.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateServerRequest {
        const message = { ...baseCreateServerRequest } as CreateServerRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.hardwarePoolId =
            object.hardwarePoolId !== undefined && object.hardwarePoolId !== null
                ? String(object.hardwarePoolId)
                : '';
        message.configurationId =
            object.configurationId !== undefined && object.configurationId !== null
                ? String(object.configurationId)
                : '';
        message.rentalPeriodId =
            object.rentalPeriodId !== undefined && object.rentalPeriodId !== null
                ? String(object.rentalPeriodId)
                : '';
        message.networkInterfaces = (object.networkInterfaces ?? []).map((e: any) =>
            NetworkInterfaceSpec.fromJSON(e),
        );
        message.osSettingsSpec =
            object.osSettingsSpec !== undefined && object.osSettingsSpec !== null
                ? OsSettingsSpec.fromJSON(object.osSettingsSpec)
                : undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: CreateServerRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.hardwarePoolId !== undefined && (obj.hardwarePoolId = message.hardwarePoolId);
        message.configurationId !== undefined && (obj.configurationId = message.configurationId);
        message.rentalPeriodId !== undefined && (obj.rentalPeriodId = message.rentalPeriodId);
        if (message.networkInterfaces) {
            obj.networkInterfaces = message.networkInterfaces.map((e) =>
                e ? NetworkInterfaceSpec.toJSON(e) : undefined,
            );
        } else {
            obj.networkInterfaces = [];
        }
        message.osSettingsSpec !== undefined &&
            (obj.osSettingsSpec = message.osSettingsSpec
                ? OsSettingsSpec.toJSON(message.osSettingsSpec)
                : undefined);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateServerRequest>, I>>(
        object: I,
    ): CreateServerRequest {
        const message = { ...baseCreateServerRequest } as CreateServerRequest;
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.hardwarePoolId = object.hardwarePoolId ?? '';
        message.configurationId = object.configurationId ?? '';
        message.rentalPeriodId = object.rentalPeriodId ?? '';
        message.networkInterfaces =
            object.networkInterfaces?.map((e) => NetworkInterfaceSpec.fromPartial(e)) || [];
        message.osSettingsSpec =
            object.osSettingsSpec !== undefined && object.osSettingsSpec !== null
                ? OsSettingsSpec.fromPartial(object.osSettingsSpec)
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
        return message;
    },
};

const baseCreateServerRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateServerRequest_LabelsEntry = {
    encode(
        message: CreateServerRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateServerRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateServerRequest_LabelsEntry,
        } as CreateServerRequest_LabelsEntry;
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

    fromJSON(object: any): CreateServerRequest_LabelsEntry {
        const message = {
            ...baseCreateServerRequest_LabelsEntry,
        } as CreateServerRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateServerRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateServerRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateServerRequest_LabelsEntry {
        const message = {
            ...baseCreateServerRequest_LabelsEntry,
        } as CreateServerRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateServerMetadata: object = { serverId: '' };

export const CreateServerMetadata = {
    encode(message: CreateServerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.serverId !== '') {
            writer.uint32(10).string(message.serverId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateServerMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateServerMetadata } as CreateServerMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serverId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateServerMetadata {
        const message = { ...baseCreateServerMetadata } as CreateServerMetadata;
        message.serverId =
            object.serverId !== undefined && object.serverId !== null
                ? String(object.serverId)
                : '';
        return message;
    },

    toJSON(message: CreateServerMetadata): unknown {
        const obj: any = {};
        message.serverId !== undefined && (obj.serverId = message.serverId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateServerMetadata>, I>>(
        object: I,
    ): CreateServerMetadata {
        const message = { ...baseCreateServerMetadata } as CreateServerMetadata;
        message.serverId = object.serverId ?? '';
        return message;
    },
};

const baseUpdateServerRequest: object = { serverId: '', name: '', description: '' };

export const UpdateServerRequest = {
    encode(message: UpdateServerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.serverId !== '') {
            writer.uint32(10).string(message.serverId);
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
        for (const v of message.networkInterfaces) {
            NetworkInterfaceSpec.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateServerRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateServerRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateServerRequest } as UpdateServerRequest;
        message.networkInterfaces = [];
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serverId = reader.string();
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
                    message.networkInterfaces.push(
                        NetworkInterfaceSpec.decode(reader, reader.uint32()),
                    );
                    break;
                case 200:
                    const entry200 = UpdateServerRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry200.value !== undefined) {
                        message.labels[entry200.key] = entry200.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateServerRequest {
        const message = { ...baseUpdateServerRequest } as UpdateServerRequest;
        message.serverId =
            object.serverId !== undefined && object.serverId !== null
                ? String(object.serverId)
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
        message.networkInterfaces = (object.networkInterfaces ?? []).map((e: any) =>
            NetworkInterfaceSpec.fromJSON(e),
        );
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: UpdateServerRequest): unknown {
        const obj: any = {};
        message.serverId !== undefined && (obj.serverId = message.serverId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        if (message.networkInterfaces) {
            obj.networkInterfaces = message.networkInterfaces.map((e) =>
                e ? NetworkInterfaceSpec.toJSON(e) : undefined,
            );
        } else {
            obj.networkInterfaces = [];
        }
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateServerRequest>, I>>(
        object: I,
    ): UpdateServerRequest {
        const message = { ...baseUpdateServerRequest } as UpdateServerRequest;
        message.serverId = object.serverId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.networkInterfaces =
            object.networkInterfaces?.map((e) => NetworkInterfaceSpec.fromPartial(e)) || [];
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

const baseUpdateServerRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateServerRequest_LabelsEntry = {
    encode(
        message: UpdateServerRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateServerRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateServerRequest_LabelsEntry,
        } as UpdateServerRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateServerRequest_LabelsEntry {
        const message = {
            ...baseUpdateServerRequest_LabelsEntry,
        } as UpdateServerRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateServerRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateServerRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateServerRequest_LabelsEntry {
        const message = {
            ...baseUpdateServerRequest_LabelsEntry,
        } as UpdateServerRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseNetworkInterfaceSpec: object = { id: '' };

export const NetworkInterfaceSpec = {
    encode(message: NetworkInterfaceSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.privateSubnet !== undefined) {
            PrivateSubnetNetworkInterface.encode(
                message.privateSubnet,
                writer.uint32(58).fork(),
            ).ldelim();
        }
        if (message.publicSubnet !== undefined) {
            PublicSubnetNetworkInterface.encode(
                message.publicSubnet,
                writer.uint32(66).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): NetworkInterfaceSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNetworkInterfaceSpec } as NetworkInterfaceSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 7:
                    message.privateSubnet = PrivateSubnetNetworkInterface.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 8:
                    message.publicSubnet = PublicSubnetNetworkInterface.decode(
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

    fromJSON(object: any): NetworkInterfaceSpec {
        const message = { ...baseNetworkInterfaceSpec } as NetworkInterfaceSpec;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.privateSubnet =
            object.privateSubnet !== undefined && object.privateSubnet !== null
                ? PrivateSubnetNetworkInterface.fromJSON(object.privateSubnet)
                : undefined;
        message.publicSubnet =
            object.publicSubnet !== undefined && object.publicSubnet !== null
                ? PublicSubnetNetworkInterface.fromJSON(object.publicSubnet)
                : undefined;
        return message;
    },

    toJSON(message: NetworkInterfaceSpec): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.privateSubnet !== undefined &&
            (obj.privateSubnet = message.privateSubnet
                ? PrivateSubnetNetworkInterface.toJSON(message.privateSubnet)
                : undefined);
        message.publicSubnet !== undefined &&
            (obj.publicSubnet = message.publicSubnet
                ? PublicSubnetNetworkInterface.toJSON(message.publicSubnet)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<NetworkInterfaceSpec>, I>>(
        object: I,
    ): NetworkInterfaceSpec {
        const message = { ...baseNetworkInterfaceSpec } as NetworkInterfaceSpec;
        message.id = object.id ?? '';
        message.privateSubnet =
            object.privateSubnet !== undefined && object.privateSubnet !== null
                ? PrivateSubnetNetworkInterface.fromPartial(object.privateSubnet)
                : undefined;
        message.publicSubnet =
            object.publicSubnet !== undefined && object.publicSubnet !== null
                ? PublicSubnetNetworkInterface.fromPartial(object.publicSubnet)
                : undefined;
        return message;
    },
};

const baseUpdateServerMetadata: object = { serverId: '' };

export const UpdateServerMetadata = {
    encode(message: UpdateServerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.serverId !== '') {
            writer.uint32(10).string(message.serverId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateServerMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateServerMetadata } as UpdateServerMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serverId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateServerMetadata {
        const message = { ...baseUpdateServerMetadata } as UpdateServerMetadata;
        message.serverId =
            object.serverId !== undefined && object.serverId !== null
                ? String(object.serverId)
                : '';
        return message;
    },

    toJSON(message: UpdateServerMetadata): unknown {
        const obj: any = {};
        message.serverId !== undefined && (obj.serverId = message.serverId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateServerMetadata>, I>>(
        object: I,
    ): UpdateServerMetadata {
        const message = { ...baseUpdateServerMetadata } as UpdateServerMetadata;
        message.serverId = object.serverId ?? '';
        return message;
    },
};

const baseDeleteServerRequest: object = { serverId: '' };

export const DeleteServerRequest = {
    encode(message: DeleteServerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.serverId !== '') {
            writer.uint32(10).string(message.serverId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteServerRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteServerRequest } as DeleteServerRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serverId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteServerRequest {
        const message = { ...baseDeleteServerRequest } as DeleteServerRequest;
        message.serverId =
            object.serverId !== undefined && object.serverId !== null
                ? String(object.serverId)
                : '';
        return message;
    },

    toJSON(message: DeleteServerRequest): unknown {
        const obj: any = {};
        message.serverId !== undefined && (obj.serverId = message.serverId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteServerRequest>, I>>(
        object: I,
    ): DeleteServerRequest {
        const message = { ...baseDeleteServerRequest } as DeleteServerRequest;
        message.serverId = object.serverId ?? '';
        return message;
    },
};

const baseDeleteServerMetadata: object = { serverId: '' };

export const DeleteServerMetadata = {
    encode(message: DeleteServerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.serverId !== '') {
            writer.uint32(10).string(message.serverId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteServerMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteServerMetadata } as DeleteServerMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serverId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteServerMetadata {
        const message = { ...baseDeleteServerMetadata } as DeleteServerMetadata;
        message.serverId =
            object.serverId !== undefined && object.serverId !== null
                ? String(object.serverId)
                : '';
        return message;
    },

    toJSON(message: DeleteServerMetadata): unknown {
        const obj: any = {};
        message.serverId !== undefined && (obj.serverId = message.serverId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteServerMetadata>, I>>(
        object: I,
    ): DeleteServerMetadata {
        const message = { ...baseDeleteServerMetadata } as DeleteServerMetadata;
        message.serverId = object.serverId ?? '';
        return message;
    },
};

const basePowerOffServerRequest: object = { serverId: '' };

export const PowerOffServerRequest = {
    encode(message: PowerOffServerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.serverId !== '') {
            writer.uint32(10).string(message.serverId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PowerOffServerRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePowerOffServerRequest } as PowerOffServerRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serverId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PowerOffServerRequest {
        const message = { ...basePowerOffServerRequest } as PowerOffServerRequest;
        message.serverId =
            object.serverId !== undefined && object.serverId !== null
                ? String(object.serverId)
                : '';
        return message;
    },

    toJSON(message: PowerOffServerRequest): unknown {
        const obj: any = {};
        message.serverId !== undefined && (obj.serverId = message.serverId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PowerOffServerRequest>, I>>(
        object: I,
    ): PowerOffServerRequest {
        const message = { ...basePowerOffServerRequest } as PowerOffServerRequest;
        message.serverId = object.serverId ?? '';
        return message;
    },
};

const basePowerOffServerMetadata: object = { serverId: '' };

export const PowerOffServerMetadata = {
    encode(message: PowerOffServerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.serverId !== '') {
            writer.uint32(10).string(message.serverId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PowerOffServerMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePowerOffServerMetadata } as PowerOffServerMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serverId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PowerOffServerMetadata {
        const message = { ...basePowerOffServerMetadata } as PowerOffServerMetadata;
        message.serverId =
            object.serverId !== undefined && object.serverId !== null
                ? String(object.serverId)
                : '';
        return message;
    },

    toJSON(message: PowerOffServerMetadata): unknown {
        const obj: any = {};
        message.serverId !== undefined && (obj.serverId = message.serverId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PowerOffServerMetadata>, I>>(
        object: I,
    ): PowerOffServerMetadata {
        const message = { ...basePowerOffServerMetadata } as PowerOffServerMetadata;
        message.serverId = object.serverId ?? '';
        return message;
    },
};

const basePowerOnServerRequest: object = { serverId: '' };

export const PowerOnServerRequest = {
    encode(message: PowerOnServerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.serverId !== '') {
            writer.uint32(10).string(message.serverId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PowerOnServerRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePowerOnServerRequest } as PowerOnServerRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serverId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PowerOnServerRequest {
        const message = { ...basePowerOnServerRequest } as PowerOnServerRequest;
        message.serverId =
            object.serverId !== undefined && object.serverId !== null
                ? String(object.serverId)
                : '';
        return message;
    },

    toJSON(message: PowerOnServerRequest): unknown {
        const obj: any = {};
        message.serverId !== undefined && (obj.serverId = message.serverId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PowerOnServerRequest>, I>>(
        object: I,
    ): PowerOnServerRequest {
        const message = { ...basePowerOnServerRequest } as PowerOnServerRequest;
        message.serverId = object.serverId ?? '';
        return message;
    },
};

const basePowerOnServerMetadata: object = { serverId: '' };

export const PowerOnServerMetadata = {
    encode(message: PowerOnServerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.serverId !== '') {
            writer.uint32(10).string(message.serverId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PowerOnServerMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePowerOnServerMetadata } as PowerOnServerMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serverId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PowerOnServerMetadata {
        const message = { ...basePowerOnServerMetadata } as PowerOnServerMetadata;
        message.serverId =
            object.serverId !== undefined && object.serverId !== null
                ? String(object.serverId)
                : '';
        return message;
    },

    toJSON(message: PowerOnServerMetadata): unknown {
        const obj: any = {};
        message.serverId !== undefined && (obj.serverId = message.serverId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PowerOnServerMetadata>, I>>(
        object: I,
    ): PowerOnServerMetadata {
        const message = { ...basePowerOnServerMetadata } as PowerOnServerMetadata;
        message.serverId = object.serverId ?? '';
        return message;
    },
};

const baseRebootServerRequest: object = { serverId: '' };

export const RebootServerRequest = {
    encode(message: RebootServerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.serverId !== '') {
            writer.uint32(10).string(message.serverId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RebootServerRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRebootServerRequest } as RebootServerRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serverId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RebootServerRequest {
        const message = { ...baseRebootServerRequest } as RebootServerRequest;
        message.serverId =
            object.serverId !== undefined && object.serverId !== null
                ? String(object.serverId)
                : '';
        return message;
    },

    toJSON(message: RebootServerRequest): unknown {
        const obj: any = {};
        message.serverId !== undefined && (obj.serverId = message.serverId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RebootServerRequest>, I>>(
        object: I,
    ): RebootServerRequest {
        const message = { ...baseRebootServerRequest } as RebootServerRequest;
        message.serverId = object.serverId ?? '';
        return message;
    },
};

const baseRebootServerMetadata: object = { serverId: '' };

export const RebootServerMetadata = {
    encode(message: RebootServerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.serverId !== '') {
            writer.uint32(10).string(message.serverId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RebootServerMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRebootServerMetadata } as RebootServerMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serverId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RebootServerMetadata {
        const message = { ...baseRebootServerMetadata } as RebootServerMetadata;
        message.serverId =
            object.serverId !== undefined && object.serverId !== null
                ? String(object.serverId)
                : '';
        return message;
    },

    toJSON(message: RebootServerMetadata): unknown {
        const obj: any = {};
        message.serverId !== undefined && (obj.serverId = message.serverId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RebootServerMetadata>, I>>(
        object: I,
    ): RebootServerMetadata {
        const message = { ...baseRebootServerMetadata } as RebootServerMetadata;
        message.serverId = object.serverId ?? '';
        return message;
    },
};

const baseReinstallServerRequest: object = { serverId: '' };

export const ReinstallServerRequest = {
    encode(message: ReinstallServerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.serverId !== '') {
            writer.uint32(10).string(message.serverId);
        }
        if (message.osSettingsSpec !== undefined) {
            OsSettingsSpec.encode(message.osSettingsSpec, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ReinstallServerRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReinstallServerRequest } as ReinstallServerRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serverId = reader.string();
                    break;
                case 9:
                    message.osSettingsSpec = OsSettingsSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ReinstallServerRequest {
        const message = { ...baseReinstallServerRequest } as ReinstallServerRequest;
        message.serverId =
            object.serverId !== undefined && object.serverId !== null
                ? String(object.serverId)
                : '';
        message.osSettingsSpec =
            object.osSettingsSpec !== undefined && object.osSettingsSpec !== null
                ? OsSettingsSpec.fromJSON(object.osSettingsSpec)
                : undefined;
        return message;
    },

    toJSON(message: ReinstallServerRequest): unknown {
        const obj: any = {};
        message.serverId !== undefined && (obj.serverId = message.serverId);
        message.osSettingsSpec !== undefined &&
            (obj.osSettingsSpec = message.osSettingsSpec
                ? OsSettingsSpec.toJSON(message.osSettingsSpec)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ReinstallServerRequest>, I>>(
        object: I,
    ): ReinstallServerRequest {
        const message = { ...baseReinstallServerRequest } as ReinstallServerRequest;
        message.serverId = object.serverId ?? '';
        message.osSettingsSpec =
            object.osSettingsSpec !== undefined && object.osSettingsSpec !== null
                ? OsSettingsSpec.fromPartial(object.osSettingsSpec)
                : undefined;
        return message;
    },
};

const baseReinstallServerMetadata: object = { serverId: '' };

export const ReinstallServerMetadata = {
    encode(message: ReinstallServerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.serverId !== '') {
            writer.uint32(10).string(message.serverId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ReinstallServerMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReinstallServerMetadata } as ReinstallServerMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serverId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ReinstallServerMetadata {
        const message = { ...baseReinstallServerMetadata } as ReinstallServerMetadata;
        message.serverId =
            object.serverId !== undefined && object.serverId !== null
                ? String(object.serverId)
                : '';
        return message;
    },

    toJSON(message: ReinstallServerMetadata): unknown {
        const obj: any = {};
        message.serverId !== undefined && (obj.serverId = message.serverId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ReinstallServerMetadata>, I>>(
        object: I,
    ): ReinstallServerMetadata {
        const message = { ...baseReinstallServerMetadata } as ReinstallServerMetadata;
        message.serverId = object.serverId ?? '';
        return message;
    },
};

const baseListServerOperationsRequest: object = { serverId: '', pageSize: 0, pageToken: '' };

export const ListServerOperationsRequest = {
    encode(
        message: ListServerOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.serverId !== '') {
            writer.uint32(10).string(message.serverId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(800).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(810).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListServerOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListServerOperationsRequest } as ListServerOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serverId = reader.string();
                    break;
                case 100:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 101:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListServerOperationsRequest {
        const message = { ...baseListServerOperationsRequest } as ListServerOperationsRequest;
        message.serverId =
            object.serverId !== undefined && object.serverId !== null
                ? String(object.serverId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListServerOperationsRequest): unknown {
        const obj: any = {};
        message.serverId !== undefined && (obj.serverId = message.serverId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListServerOperationsRequest>, I>>(
        object: I,
    ): ListServerOperationsRequest {
        const message = { ...baseListServerOperationsRequest } as ListServerOperationsRequest;
        message.serverId = object.serverId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListServerOperationsResponse: object = { nextPageToken: '' };

export const ListServerOperationsResponse = {
    encode(
        message: ListServerOperationsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.operations) {
            Operation.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(802).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListServerOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListServerOperationsResponse } as ListServerOperationsResponse;
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(Operation.decode(reader, reader.uint32()));
                    break;
                case 100:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListServerOperationsResponse {
        const message = { ...baseListServerOperationsResponse } as ListServerOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListServerOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListServerOperationsResponse>, I>>(
        object: I,
    ): ListServerOperationsResponse {
        const message = { ...baseListServerOperationsResponse } as ListServerOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseBatchCreateServersRequest: object = {
    folderId: '',
    name: '',
    description: '',
    hardwarePoolId: '',
    configurationId: '',
    rentalPeriodId: '',
    count: 0,
};

export const BatchCreateServersRequest = {
    encode(
        message: BatchCreateServersRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.hardwarePoolId !== '') {
            writer.uint32(34).string(message.hardwarePoolId);
        }
        if (message.configurationId !== '') {
            writer.uint32(42).string(message.configurationId);
        }
        if (message.rentalPeriodId !== '') {
            writer.uint32(90).string(message.rentalPeriodId);
        }
        for (const v of message.networkInterfaces) {
            NetworkInterfaceSpec.encode(v!, writer.uint32(122).fork()).ldelim();
        }
        if (message.osSettingsSpec !== undefined) {
            OsSettingsSpec.encode(message.osSettingsSpec, writer.uint32(130).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            BatchCreateServersRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        if (message.count !== 0) {
            writer.uint32(2400).int64(message.count);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchCreateServersRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchCreateServersRequest } as BatchCreateServersRequest;
        message.networkInterfaces = [];
        message.labels = {};
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
                    message.hardwarePoolId = reader.string();
                    break;
                case 5:
                    message.configurationId = reader.string();
                    break;
                case 11:
                    message.rentalPeriodId = reader.string();
                    break;
                case 15:
                    message.networkInterfaces.push(
                        NetworkInterfaceSpec.decode(reader, reader.uint32()),
                    );
                    break;
                case 16:
                    message.osSettingsSpec = OsSettingsSpec.decode(reader, reader.uint32());
                    break;
                case 200:
                    const entry200 = BatchCreateServersRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry200.value !== undefined) {
                        message.labels[entry200.key] = entry200.value;
                    }
                    break;
                case 300:
                    message.count = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchCreateServersRequest {
        const message = { ...baseBatchCreateServersRequest } as BatchCreateServersRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.hardwarePoolId =
            object.hardwarePoolId !== undefined && object.hardwarePoolId !== null
                ? String(object.hardwarePoolId)
                : '';
        message.configurationId =
            object.configurationId !== undefined && object.configurationId !== null
                ? String(object.configurationId)
                : '';
        message.rentalPeriodId =
            object.rentalPeriodId !== undefined && object.rentalPeriodId !== null
                ? String(object.rentalPeriodId)
                : '';
        message.networkInterfaces = (object.networkInterfaces ?? []).map((e: any) =>
            NetworkInterfaceSpec.fromJSON(e),
        );
        message.osSettingsSpec =
            object.osSettingsSpec !== undefined && object.osSettingsSpec !== null
                ? OsSettingsSpec.fromJSON(object.osSettingsSpec)
                : undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.count =
            object.count !== undefined && object.count !== null ? Number(object.count) : 0;
        return message;
    },

    toJSON(message: BatchCreateServersRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.hardwarePoolId !== undefined && (obj.hardwarePoolId = message.hardwarePoolId);
        message.configurationId !== undefined && (obj.configurationId = message.configurationId);
        message.rentalPeriodId !== undefined && (obj.rentalPeriodId = message.rentalPeriodId);
        if (message.networkInterfaces) {
            obj.networkInterfaces = message.networkInterfaces.map((e) =>
                e ? NetworkInterfaceSpec.toJSON(e) : undefined,
            );
        } else {
            obj.networkInterfaces = [];
        }
        message.osSettingsSpec !== undefined &&
            (obj.osSettingsSpec = message.osSettingsSpec
                ? OsSettingsSpec.toJSON(message.osSettingsSpec)
                : undefined);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.count !== undefined && (obj.count = Math.round(message.count));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchCreateServersRequest>, I>>(
        object: I,
    ): BatchCreateServersRequest {
        const message = { ...baseBatchCreateServersRequest } as BatchCreateServersRequest;
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.hardwarePoolId = object.hardwarePoolId ?? '';
        message.configurationId = object.configurationId ?? '';
        message.rentalPeriodId = object.rentalPeriodId ?? '';
        message.networkInterfaces =
            object.networkInterfaces?.map((e) => NetworkInterfaceSpec.fromPartial(e)) || [];
        message.osSettingsSpec =
            object.osSettingsSpec !== undefined && object.osSettingsSpec !== null
                ? OsSettingsSpec.fromPartial(object.osSettingsSpec)
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
        message.count = object.count ?? 0;
        return message;
    },
};

const baseBatchCreateServersRequest_LabelsEntry: object = { key: '', value: '' };

export const BatchCreateServersRequest_LabelsEntry = {
    encode(
        message: BatchCreateServersRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchCreateServersRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseBatchCreateServersRequest_LabelsEntry,
        } as BatchCreateServersRequest_LabelsEntry;
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

    fromJSON(object: any): BatchCreateServersRequest_LabelsEntry {
        const message = {
            ...baseBatchCreateServersRequest_LabelsEntry,
        } as BatchCreateServersRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: BatchCreateServersRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchCreateServersRequest_LabelsEntry>, I>>(
        object: I,
    ): BatchCreateServersRequest_LabelsEntry {
        const message = {
            ...baseBatchCreateServersRequest_LabelsEntry,
        } as BatchCreateServersRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseBatchCreateServersResponse: object = {};

export const BatchCreateServersResponse = {
    encode(
        message: BatchCreateServersResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.servers) {
            Server.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchCreateServersResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchCreateServersResponse } as BatchCreateServersResponse;
        message.servers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.servers.push(Server.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchCreateServersResponse {
        const message = { ...baseBatchCreateServersResponse } as BatchCreateServersResponse;
        message.servers = (object.servers ?? []).map((e: any) => Server.fromJSON(e));
        return message;
    },

    toJSON(message: BatchCreateServersResponse): unknown {
        const obj: any = {};
        if (message.servers) {
            obj.servers = message.servers.map((e) => (e ? Server.toJSON(e) : undefined));
        } else {
            obj.servers = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchCreateServersResponse>, I>>(
        object: I,
    ): BatchCreateServersResponse {
        const message = { ...baseBatchCreateServersResponse } as BatchCreateServersResponse;
        message.servers = object.servers?.map((e) => Server.fromPartial(e)) || [];
        return message;
    },
};

const baseBatchCreateServersMetadata: object = { serverIds: '' };

export const BatchCreateServersMetadata = {
    encode(
        message: BatchCreateServersMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.serverIds) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchCreateServersMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchCreateServersMetadata } as BatchCreateServersMetadata;
        message.serverIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serverIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchCreateServersMetadata {
        const message = { ...baseBatchCreateServersMetadata } as BatchCreateServersMetadata;
        message.serverIds = (object.serverIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: BatchCreateServersMetadata): unknown {
        const obj: any = {};
        if (message.serverIds) {
            obj.serverIds = message.serverIds.map((e) => e);
        } else {
            obj.serverIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchCreateServersMetadata>, I>>(
        object: I,
    ): BatchCreateServersMetadata {
        const message = { ...baseBatchCreateServersMetadata } as BatchCreateServersMetadata;
        message.serverIds = object.serverIds?.map((e) => e) || [];
        return message;
    },
};

const baseQuarantineServerMetadata: object = { serverId: '' };

export const QuarantineServerMetadata = {
    encode(
        message: QuarantineServerMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.serverId !== '') {
            writer.uint32(10).string(message.serverId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QuarantineServerMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQuarantineServerMetadata } as QuarantineServerMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serverId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QuarantineServerMetadata {
        const message = { ...baseQuarantineServerMetadata } as QuarantineServerMetadata;
        message.serverId =
            object.serverId !== undefined && object.serverId !== null
                ? String(object.serverId)
                : '';
        return message;
    },

    toJSON(message: QuarantineServerMetadata): unknown {
        const obj: any = {};
        message.serverId !== undefined && (obj.serverId = message.serverId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<QuarantineServerMetadata>, I>>(
        object: I,
    ): QuarantineServerMetadata {
        const message = { ...baseQuarantineServerMetadata } as QuarantineServerMetadata;
        message.serverId = object.serverId ?? '';
        return message;
    },
};

const baseStartProlongationRequest: object = { serverId: '' };

export const StartProlongationRequest = {
    encode(
        message: StartProlongationRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.serverId !== '') {
            writer.uint32(10).string(message.serverId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StartProlongationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStartProlongationRequest } as StartProlongationRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serverId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StartProlongationRequest {
        const message = { ...baseStartProlongationRequest } as StartProlongationRequest;
        message.serverId =
            object.serverId !== undefined && object.serverId !== null
                ? String(object.serverId)
                : '';
        return message;
    },

    toJSON(message: StartProlongationRequest): unknown {
        const obj: any = {};
        message.serverId !== undefined && (obj.serverId = message.serverId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StartProlongationRequest>, I>>(
        object: I,
    ): StartProlongationRequest {
        const message = { ...baseStartProlongationRequest } as StartProlongationRequest;
        message.serverId = object.serverId ?? '';
        return message;
    },
};

const baseStopProlongationRequest: object = { serverId: '' };

export const StopProlongationRequest = {
    encode(message: StopProlongationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.serverId !== '') {
            writer.uint32(10).string(message.serverId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StopProlongationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopProlongationRequest } as StopProlongationRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serverId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StopProlongationRequest {
        const message = { ...baseStopProlongationRequest } as StopProlongationRequest;
        message.serverId =
            object.serverId !== undefined && object.serverId !== null
                ? String(object.serverId)
                : '';
        return message;
    },

    toJSON(message: StopProlongationRequest): unknown {
        const obj: any = {};
        message.serverId !== undefined && (obj.serverId = message.serverId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StopProlongationRequest>, I>>(
        object: I,
    ): StopProlongationRequest {
        const message = { ...baseStopProlongationRequest } as StopProlongationRequest;
        message.serverId = object.serverId ?? '';
        return message;
    },
};

const baseServerSetProlongationMetadata: object = { serverId: '' };

export const ServerSetProlongationMetadata = {
    encode(
        message: ServerSetProlongationMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.serverId !== '') {
            writer.uint32(10).string(message.serverId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ServerSetProlongationMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseServerSetProlongationMetadata } as ServerSetProlongationMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serverId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ServerSetProlongationMetadata {
        const message = { ...baseServerSetProlongationMetadata } as ServerSetProlongationMetadata;
        message.serverId =
            object.serverId !== undefined && object.serverId !== null
                ? String(object.serverId)
                : '';
        return message;
    },

    toJSON(message: ServerSetProlongationMetadata): unknown {
        const obj: any = {};
        message.serverId !== undefined && (obj.serverId = message.serverId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ServerSetProlongationMetadata>, I>>(
        object: I,
    ): ServerSetProlongationMetadata {
        const message = { ...baseServerSetProlongationMetadata } as ServerSetProlongationMetadata;
        message.serverId = object.serverId ?? '';
        return message;
    },
};

const baseOsSettingsSpec: object = { imageId: '' };

export const OsSettingsSpec = {
    encode(message: OsSettingsSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        for (const v of message.storages) {
            Storage.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        if (message.sshPublicKey !== undefined) {
            writer.uint32(34).string(message.sshPublicKey);
        }
        if (message.userSshId !== undefined) {
            writer.uint32(42).string(message.userSshId);
        }
        if (message.passwordPlainText !== undefined) {
            writer.uint32(82).string(message.passwordPlainText);
        }
        if (message.passwordLockboxSecret !== undefined) {
            LockboxSecret.encode(message.passwordLockboxSecret, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OsSettingsSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOsSettingsSpec } as OsSettingsSpec;
        message.storages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                case 2:
                    message.storages.push(Storage.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.sshPublicKey = reader.string();
                    break;
                case 5:
                    message.userSshId = reader.string();
                    break;
                case 10:
                    message.passwordPlainText = reader.string();
                    break;
                case 11:
                    message.passwordLockboxSecret = LockboxSecret.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OsSettingsSpec {
        const message = { ...baseOsSettingsSpec } as OsSettingsSpec;
        message.imageId =
            object.imageId !== undefined && object.imageId !== null ? String(object.imageId) : '';
        message.storages = (object.storages ?? []).map((e: any) => Storage.fromJSON(e));
        message.sshPublicKey =
            object.sshPublicKey !== undefined && object.sshPublicKey !== null
                ? String(object.sshPublicKey)
                : undefined;
        message.userSshId =
            object.userSshId !== undefined && object.userSshId !== null
                ? String(object.userSshId)
                : undefined;
        message.passwordPlainText =
            object.passwordPlainText !== undefined && object.passwordPlainText !== null
                ? String(object.passwordPlainText)
                : undefined;
        message.passwordLockboxSecret =
            object.passwordLockboxSecret !== undefined && object.passwordLockboxSecret !== null
                ? LockboxSecret.fromJSON(object.passwordLockboxSecret)
                : undefined;
        return message;
    },

    toJSON(message: OsSettingsSpec): unknown {
        const obj: any = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        if (message.storages) {
            obj.storages = message.storages.map((e) => (e ? Storage.toJSON(e) : undefined));
        } else {
            obj.storages = [];
        }
        message.sshPublicKey !== undefined && (obj.sshPublicKey = message.sshPublicKey);
        message.userSshId !== undefined && (obj.userSshId = message.userSshId);
        message.passwordPlainText !== undefined &&
            (obj.passwordPlainText = message.passwordPlainText);
        message.passwordLockboxSecret !== undefined &&
            (obj.passwordLockboxSecret = message.passwordLockboxSecret
                ? LockboxSecret.toJSON(message.passwordLockboxSecret)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OsSettingsSpec>, I>>(object: I): OsSettingsSpec {
        const message = { ...baseOsSettingsSpec } as OsSettingsSpec;
        message.imageId = object.imageId ?? '';
        message.storages = object.storages?.map((e) => Storage.fromPartial(e)) || [];
        message.sshPublicKey = object.sshPublicKey ?? undefined;
        message.userSshId = object.userSshId ?? undefined;
        message.passwordPlainText = object.passwordPlainText ?? undefined;
        message.passwordLockboxSecret =
            object.passwordLockboxSecret !== undefined && object.passwordLockboxSecret !== null
                ? LockboxSecret.fromPartial(object.passwordLockboxSecret)
                : undefined;
        return message;
    },
};

const baseLockboxSecret: object = { secretId: '', versionId: '', key: '' };

export const LockboxSecret = {
    encode(message: LockboxSecret, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        if (message.key !== '') {
            writer.uint32(26).string(message.key);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LockboxSecret {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLockboxSecret } as LockboxSecret;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.key = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LockboxSecret {
        const message = { ...baseLockboxSecret } as LockboxSecret;
        message.secretId =
            object.secretId !== undefined && object.secretId !== null
                ? String(object.secretId)
                : '';
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : '';
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        return message;
    },

    toJSON(message: LockboxSecret): unknown {
        const obj: any = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.key !== undefined && (obj.key = message.key);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LockboxSecret>, I>>(object: I): LockboxSecret {
        const message = { ...baseLockboxSecret } as LockboxSecret;
        message.secretId = object.secretId ?? '';
        message.versionId = object.versionId ?? '';
        message.key = object.key ?? '';
        return message;
    },
};

/** A set of methods for managing Server resources. */
export const ServerServiceService = {
    /**
     * Returns the specific Server resource.
     *
     * To get the list of available Server resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.baremetal.v1alpha.ServerService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetServerRequest) =>
            Buffer.from(GetServerRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetServerRequest.decode(value),
        responseSerialize: (value: Server) => Buffer.from(Server.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Server.decode(value),
    },
    /** Retrieves the list of Server resources in the specified folder. */
    list: {
        path: '/yandex.cloud.baremetal.v1alpha.ServerService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListServerRequest) =>
            Buffer.from(ListServerRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListServerRequest.decode(value),
        responseSerialize: (value: ListServerResponse) =>
            Buffer.from(ListServerResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListServerResponse.decode(value),
    },
    /** Creates a server in the specified folder. */
    create: {
        path: '/yandex.cloud.baremetal.v1alpha.ServerService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateServerRequest) =>
            Buffer.from(CreateServerRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateServerRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Creates multiple servers in the specified folder. */
    batchCreate: {
        path: '/yandex.cloud.baremetal.v1alpha.ServerService/BatchCreate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: BatchCreateServersRequest) =>
            Buffer.from(BatchCreateServersRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => BatchCreateServersRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified server. */
    update: {
        path: '/yandex.cloud.baremetal.v1alpha.ServerService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateServerRequest) =>
            Buffer.from(UpdateServerRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateServerRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Powers off the specified server. */
    powerOff: {
        path: '/yandex.cloud.baremetal.v1alpha.ServerService/PowerOff',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: PowerOffServerRequest) =>
            Buffer.from(PowerOffServerRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => PowerOffServerRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Powers on the specified server. */
    powerOn: {
        path: '/yandex.cloud.baremetal.v1alpha.ServerService/PowerOn',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: PowerOnServerRequest) =>
            Buffer.from(PowerOnServerRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => PowerOnServerRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Reboots the specified server. */
    reboot: {
        path: '/yandex.cloud.baremetal.v1alpha.ServerService/Reboot',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: RebootServerRequest) =>
            Buffer.from(RebootServerRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => RebootServerRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Reinstalls the specified server. */
    reinstall: {
        path: '/yandex.cloud.baremetal.v1alpha.ServerService/Reinstall',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ReinstallServerRequest) =>
            Buffer.from(ReinstallServerRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ReinstallServerRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Starts prolongation of the specified server. */
    startProlongation: {
        path: '/yandex.cloud.baremetal.v1alpha.ServerService/StartProlongation',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StartProlongationRequest) =>
            Buffer.from(StartProlongationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StartProlongationRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Stops prolongation of the specified server. */
    stopProlongation: {
        path: '/yandex.cloud.baremetal.v1alpha.ServerService/StopProlongation',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StopProlongationRequest) =>
            Buffer.from(StopProlongationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StopProlongationRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified server. */
    listOperations: {
        path: '/yandex.cloud.baremetal.v1alpha.ServerService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListServerOperationsRequest) =>
            Buffer.from(ListServerOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListServerOperationsRequest.decode(value),
        responseSerialize: (value: ListServerOperationsResponse) =>
            Buffer.from(ListServerOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListServerOperationsResponse.decode(value),
    },
} as const;

export interface ServerServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specific Server resource.
     *
     * To get the list of available Server resources, make a [List] request.
     */
    get: handleUnaryCall<GetServerRequest, Server>;
    /** Retrieves the list of Server resources in the specified folder. */
    list: handleUnaryCall<ListServerRequest, ListServerResponse>;
    /** Creates a server in the specified folder. */
    create: handleUnaryCall<CreateServerRequest, Operation>;
    /** Creates multiple servers in the specified folder. */
    batchCreate: handleUnaryCall<BatchCreateServersRequest, Operation>;
    /** Updates the specified server. */
    update: handleUnaryCall<UpdateServerRequest, Operation>;
    /** Powers off the specified server. */
    powerOff: handleUnaryCall<PowerOffServerRequest, Operation>;
    /** Powers on the specified server. */
    powerOn: handleUnaryCall<PowerOnServerRequest, Operation>;
    /** Reboots the specified server. */
    reboot: handleUnaryCall<RebootServerRequest, Operation>;
    /** Reinstalls the specified server. */
    reinstall: handleUnaryCall<ReinstallServerRequest, Operation>;
    /** Starts prolongation of the specified server. */
    startProlongation: handleUnaryCall<StartProlongationRequest, Operation>;
    /** Stops prolongation of the specified server. */
    stopProlongation: handleUnaryCall<StopProlongationRequest, Operation>;
    /** Lists operations for the specified server. */
    listOperations: handleUnaryCall<ListServerOperationsRequest, ListServerOperationsResponse>;
}

export interface ServerServiceClient extends Client {
    /**
     * Returns the specific Server resource.
     *
     * To get the list of available Server resources, make a [List] request.
     */
    get(
        request: GetServerRequest,
        callback: (error: ServiceError | null, response: Server) => void,
    ): ClientUnaryCall;
    get(
        request: GetServerRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Server) => void,
    ): ClientUnaryCall;
    get(
        request: GetServerRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Server) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of Server resources in the specified folder. */
    list(
        request: ListServerRequest,
        callback: (error: ServiceError | null, response: ListServerResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListServerRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListServerResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListServerRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListServerResponse) => void,
    ): ClientUnaryCall;
    /** Creates a server in the specified folder. */
    create(
        request: CreateServerRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateServerRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateServerRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Creates multiple servers in the specified folder. */
    batchCreate(
        request: BatchCreateServersRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    batchCreate(
        request: BatchCreateServersRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    batchCreate(
        request: BatchCreateServersRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified server. */
    update(
        request: UpdateServerRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateServerRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateServerRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Powers off the specified server. */
    powerOff(
        request: PowerOffServerRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    powerOff(
        request: PowerOffServerRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    powerOff(
        request: PowerOffServerRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Powers on the specified server. */
    powerOn(
        request: PowerOnServerRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    powerOn(
        request: PowerOnServerRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    powerOn(
        request: PowerOnServerRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Reboots the specified server. */
    reboot(
        request: RebootServerRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    reboot(
        request: RebootServerRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    reboot(
        request: RebootServerRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Reinstalls the specified server. */
    reinstall(
        request: ReinstallServerRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    reinstall(
        request: ReinstallServerRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    reinstall(
        request: ReinstallServerRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Starts prolongation of the specified server. */
    startProlongation(
        request: StartProlongationRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    startProlongation(
        request: StartProlongationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    startProlongation(
        request: StartProlongationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Stops prolongation of the specified server. */
    stopProlongation(
        request: StopProlongationRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    stopProlongation(
        request: StopProlongationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    stopProlongation(
        request: StopProlongationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists operations for the specified server. */
    listOperations(
        request: ListServerOperationsRequest,
        callback: (error: ServiceError | null, response: ListServerOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListServerOperationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListServerOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListServerOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListServerOperationsResponse) => void,
    ): ClientUnaryCall;
}

export const ServerServiceClient = makeGenericClientConstructor(
    ServerServiceService,
    'yandex.cloud.baremetal.v1alpha.ServerService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ServerServiceClient;
    service: typeof ServerServiceService;
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
