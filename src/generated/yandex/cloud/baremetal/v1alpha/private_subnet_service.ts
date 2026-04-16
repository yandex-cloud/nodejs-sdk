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
import { PrivateSubnet } from '../../../../yandex/cloud/baremetal/v1alpha/private_subnet';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.baremetal.v1alpha';

export interface GetPrivateSubnetRequest {
    /**
     * ID of the PrivateSubnet resource to return.
     *
     * To get the private subnet ID use a [PrivateSubnetService.List] request.
     */
    privateSubnetId: string;
}

export interface ListPrivateSubnetRequest {
    /**
     * ID of the folder to list private subnets in.
     *
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is greater than `page_size`,
     * the service returns a [ListConfigurationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value is 20.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListConfigurationsResponse.next_page_token] returned by a previous list request.
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

export interface ListPrivateSubnetResponse {
    /** List of PrivateSubnet resources. */
    privateSubnets: PrivateSubnet[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * [ListImagesRequest.page_size], use `next_page_token` as the value
     * for the [ListImagesRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreatePrivateSubnetRequest {
    /**
     * Name of the private subnet.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the private subnet. */
    description: string;
    /**
     * ID of the hardware pool where the private subnet resides.
     *
     * To get a list of available hardware pools, use the [HardwarePoolService.List] request.
     */
    hardwarePoolId: string;
    /** VRF options. Optional. */
    vrfOptionsSpec?: VrfOptionsSpec;
    /**
     * ID of the folder to create a private subnet in.
     *
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
}

export interface CreatePrivateSubnetRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface VrfOptionsSpec {
    /**
     * ID of the VRF to create private subnet in.
     *
     * To get the VRF ID, use a [VrfService.List] request.
     */
    vrfId: string;
    /**
     * CIDR block.
     * The range of internal addresses that are defined for this private subnet, as
     * specified in [RFC1918](https://datatracker.ietf.org/doc/html/rfc1918#section-3).
     * For example, 10.0.0.0/22 or 192.168.0.0/24.
     */
    cidr: string;
    /**
     * DHCP options for the subnet.
     * The absence or null value indicates that DHCP is disabled.
     */
    dhcpOptions?: DhcpOptionsSpec;
    /** Gateway IP address for the subnet. */
    gatewayIp: string;
}

/** DHCP options for the private subnet. */
export interface DhcpOptionsSpec {
    /**
     * Start IP address of the DHCP range (inclusive).
     * The absence or null value indicates that calculation will be performed based on CIDR.
     */
    startIp: string;
    /**
     * End IP address of the DHCP range (inclusive).
     * The absence or null value indicates that calculation will be performed based on CIDR.
     */
    endIp: string;
}

export interface CreatePrivateSubnetMetadata {
    /** ID of the private subnet that is being created. */
    privateSubnetId: string;
}

export interface UpdatePrivateSubnetRequest {
    /**
     * ID of the PrivateSubnet resource to update.
     *
     * To get the private subnet ID, use a [PrivateSubnetService.List] request.
     */
    privateSubnetId: string;
    /** Field mask that specifies which fields of the PrivateSubnet resource are going to be updated. */
    updateMask?: FieldMask;
    /**
     * Name of the private subnet.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the private subnet. */
    description: string;
    /** VRF options. Optional. */
    vrfOptionsSpec?: VrfOptionsSpec;
    /**
     * Resource labels as `key:value` pairs.
     *
     * Existing set of `labels` is completely replaced by the provided set.
     */
    labels: { [key: string]: string };
}

export interface UpdatePrivateSubnetRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdatePrivateSubnetMetadata {
    /** ID of the PrivateSubnet resource that is being updated. */
    privateSubnetId: string;
}

export interface DeletePrivateSubnetRequest {
    /**
     * ID of the private subnet to delete.
     *
     * To get the private subnet ID, use a [PrivateSubnetService.List] request.
     */
    privateSubnetId: string;
}

export interface DeletePrivateSubnetMetadata {
    /** ID of the PrivateSubnet resource that is being deleted. */
    privateSubnetId: string;
}

export interface ListPrivateSubnetOperationsRequest {
    /** ID of the PrivateSubnet resource to list operations for. */
    privateSubnetId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is greater than `page_size`,
     * the service returns a [ListImageOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value is 20.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListPrivateSubnetOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListPrivateSubnetOperationsResponse {
    /** List of operations for the specified PrivateSubnet resource. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * [ListImageOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListImageOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetPrivateSubnetRequest: object = { privateSubnetId: '' };

export const GetPrivateSubnetRequest = {
    encode(message: GetPrivateSubnetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.privateSubnetId !== '') {
            writer.uint32(18).string(message.privateSubnetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetPrivateSubnetRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetPrivateSubnetRequest } as GetPrivateSubnetRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.privateSubnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetPrivateSubnetRequest {
        const message = { ...baseGetPrivateSubnetRequest } as GetPrivateSubnetRequest;
        message.privateSubnetId =
            object.privateSubnetId !== undefined && object.privateSubnetId !== null
                ? String(object.privateSubnetId)
                : '';
        return message;
    },

    toJSON(message: GetPrivateSubnetRequest): unknown {
        const obj: any = {};
        message.privateSubnetId !== undefined && (obj.privateSubnetId = message.privateSubnetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetPrivateSubnetRequest>, I>>(
        object: I,
    ): GetPrivateSubnetRequest {
        const message = { ...baseGetPrivateSubnetRequest } as GetPrivateSubnetRequest;
        message.privateSubnetId = object.privateSubnetId ?? '';
        return message;
    },
};

const baseListPrivateSubnetRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    orderBy: '',
    filter: '',
};

export const ListPrivateSubnetRequest = {
    encode(
        message: ListPrivateSubnetRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPrivateSubnetRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListPrivateSubnetRequest } as ListPrivateSubnetRequest;
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

    fromJSON(object: any): ListPrivateSubnetRequest {
        const message = { ...baseListPrivateSubnetRequest } as ListPrivateSubnetRequest;
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

    toJSON(message: ListPrivateSubnetRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPrivateSubnetRequest>, I>>(
        object: I,
    ): ListPrivateSubnetRequest {
        const message = { ...baseListPrivateSubnetRequest } as ListPrivateSubnetRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.orderBy = object.orderBy ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListPrivateSubnetResponse: object = { nextPageToken: '' };

export const ListPrivateSubnetResponse = {
    encode(
        message: ListPrivateSubnetResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.privateSubnets) {
            PrivateSubnet.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(802).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPrivateSubnetResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListPrivateSubnetResponse } as ListPrivateSubnetResponse;
        message.privateSubnets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.privateSubnets.push(PrivateSubnet.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListPrivateSubnetResponse {
        const message = { ...baseListPrivateSubnetResponse } as ListPrivateSubnetResponse;
        message.privateSubnets = (object.privateSubnets ?? []).map((e: any) =>
            PrivateSubnet.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListPrivateSubnetResponse): unknown {
        const obj: any = {};
        if (message.privateSubnets) {
            obj.privateSubnets = message.privateSubnets.map((e) =>
                e ? PrivateSubnet.toJSON(e) : undefined,
            );
        } else {
            obj.privateSubnets = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPrivateSubnetResponse>, I>>(
        object: I,
    ): ListPrivateSubnetResponse {
        const message = { ...baseListPrivateSubnetResponse } as ListPrivateSubnetResponse;
        message.privateSubnets =
            object.privateSubnets?.map((e) => PrivateSubnet.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreatePrivateSubnetRequest: object = {
    name: '',
    description: '',
    hardwarePoolId: '',
    folderId: '',
};

export const CreatePrivateSubnetRequest = {
    encode(
        message: CreatePrivateSubnetRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.hardwarePoolId !== '') {
            writer.uint32(26).string(message.hardwarePoolId);
        }
        if (message.vrfOptionsSpec !== undefined) {
            VrfOptionsSpec.encode(message.vrfOptionsSpec, writer.uint32(34).fork()).ldelim();
        }
        if (message.folderId !== '') {
            writer.uint32(42).string(message.folderId);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreatePrivateSubnetRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePrivateSubnetRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreatePrivateSubnetRequest } as CreatePrivateSubnetRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.hardwarePoolId = reader.string();
                    break;
                case 4:
                    message.vrfOptionsSpec = VrfOptionsSpec.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.folderId = reader.string();
                    break;
                case 200:
                    const entry200 = CreatePrivateSubnetRequest_LabelsEntry.decode(
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

    fromJSON(object: any): CreatePrivateSubnetRequest {
        const message = { ...baseCreatePrivateSubnetRequest } as CreatePrivateSubnetRequest;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.hardwarePoolId =
            object.hardwarePoolId !== undefined && object.hardwarePoolId !== null
                ? String(object.hardwarePoolId)
                : '';
        message.vrfOptionsSpec =
            object.vrfOptionsSpec !== undefined && object.vrfOptionsSpec !== null
                ? VrfOptionsSpec.fromJSON(object.vrfOptionsSpec)
                : undefined;
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
        return message;
    },

    toJSON(message: CreatePrivateSubnetRequest): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.hardwarePoolId !== undefined && (obj.hardwarePoolId = message.hardwarePoolId);
        message.vrfOptionsSpec !== undefined &&
            (obj.vrfOptionsSpec = message.vrfOptionsSpec
                ? VrfOptionsSpec.toJSON(message.vrfOptionsSpec)
                : undefined);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreatePrivateSubnetRequest>, I>>(
        object: I,
    ): CreatePrivateSubnetRequest {
        const message = { ...baseCreatePrivateSubnetRequest } as CreatePrivateSubnetRequest;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.hardwarePoolId = object.hardwarePoolId ?? '';
        message.vrfOptionsSpec =
            object.vrfOptionsSpec !== undefined && object.vrfOptionsSpec !== null
                ? VrfOptionsSpec.fromPartial(object.vrfOptionsSpec)
                : undefined;
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
        return message;
    },
};

const baseCreatePrivateSubnetRequest_LabelsEntry: object = { key: '', value: '' };

export const CreatePrivateSubnetRequest_LabelsEntry = {
    encode(
        message: CreatePrivateSubnetRequest_LabelsEntry,
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
    ): CreatePrivateSubnetRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreatePrivateSubnetRequest_LabelsEntry,
        } as CreatePrivateSubnetRequest_LabelsEntry;
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

    fromJSON(object: any): CreatePrivateSubnetRequest_LabelsEntry {
        const message = {
            ...baseCreatePrivateSubnetRequest_LabelsEntry,
        } as CreatePrivateSubnetRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreatePrivateSubnetRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreatePrivateSubnetRequest_LabelsEntry>, I>>(
        object: I,
    ): CreatePrivateSubnetRequest_LabelsEntry {
        const message = {
            ...baseCreatePrivateSubnetRequest_LabelsEntry,
        } as CreatePrivateSubnetRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseVrfOptionsSpec: object = { vrfId: '', cidr: '', gatewayIp: '' };

export const VrfOptionsSpec = {
    encode(message: VrfOptionsSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.vrfId !== '') {
            writer.uint32(10).string(message.vrfId);
        }
        if (message.cidr !== '') {
            writer.uint32(18).string(message.cidr);
        }
        if (message.dhcpOptions !== undefined) {
            DhcpOptionsSpec.encode(message.dhcpOptions, writer.uint32(26).fork()).ldelim();
        }
        if (message.gatewayIp !== '') {
            writer.uint32(34).string(message.gatewayIp);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): VrfOptionsSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVrfOptionsSpec } as VrfOptionsSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vrfId = reader.string();
                    break;
                case 2:
                    message.cidr = reader.string();
                    break;
                case 3:
                    message.dhcpOptions = DhcpOptionsSpec.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.gatewayIp = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): VrfOptionsSpec {
        const message = { ...baseVrfOptionsSpec } as VrfOptionsSpec;
        message.vrfId =
            object.vrfId !== undefined && object.vrfId !== null ? String(object.vrfId) : '';
        message.cidr = object.cidr !== undefined && object.cidr !== null ? String(object.cidr) : '';
        message.dhcpOptions =
            object.dhcpOptions !== undefined && object.dhcpOptions !== null
                ? DhcpOptionsSpec.fromJSON(object.dhcpOptions)
                : undefined;
        message.gatewayIp =
            object.gatewayIp !== undefined && object.gatewayIp !== null
                ? String(object.gatewayIp)
                : '';
        return message;
    },

    toJSON(message: VrfOptionsSpec): unknown {
        const obj: any = {};
        message.vrfId !== undefined && (obj.vrfId = message.vrfId);
        message.cidr !== undefined && (obj.cidr = message.cidr);
        message.dhcpOptions !== undefined &&
            (obj.dhcpOptions = message.dhcpOptions
                ? DhcpOptionsSpec.toJSON(message.dhcpOptions)
                : undefined);
        message.gatewayIp !== undefined && (obj.gatewayIp = message.gatewayIp);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<VrfOptionsSpec>, I>>(object: I): VrfOptionsSpec {
        const message = { ...baseVrfOptionsSpec } as VrfOptionsSpec;
        message.vrfId = object.vrfId ?? '';
        message.cidr = object.cidr ?? '';
        message.dhcpOptions =
            object.dhcpOptions !== undefined && object.dhcpOptions !== null
                ? DhcpOptionsSpec.fromPartial(object.dhcpOptions)
                : undefined;
        message.gatewayIp = object.gatewayIp ?? '';
        return message;
    },
};

const baseDhcpOptionsSpec: object = { startIp: '', endIp: '' };

export const DhcpOptionsSpec = {
    encode(message: DhcpOptionsSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.startIp !== '') {
            writer.uint32(10).string(message.startIp);
        }
        if (message.endIp !== '') {
            writer.uint32(18).string(message.endIp);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DhcpOptionsSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDhcpOptionsSpec } as DhcpOptionsSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startIp = reader.string();
                    break;
                case 2:
                    message.endIp = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DhcpOptionsSpec {
        const message = { ...baseDhcpOptionsSpec } as DhcpOptionsSpec;
        message.startIp =
            object.startIp !== undefined && object.startIp !== null ? String(object.startIp) : '';
        message.endIp =
            object.endIp !== undefined && object.endIp !== null ? String(object.endIp) : '';
        return message;
    },

    toJSON(message: DhcpOptionsSpec): unknown {
        const obj: any = {};
        message.startIp !== undefined && (obj.startIp = message.startIp);
        message.endIp !== undefined && (obj.endIp = message.endIp);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DhcpOptionsSpec>, I>>(object: I): DhcpOptionsSpec {
        const message = { ...baseDhcpOptionsSpec } as DhcpOptionsSpec;
        message.startIp = object.startIp ?? '';
        message.endIp = object.endIp ?? '';
        return message;
    },
};

const baseCreatePrivateSubnetMetadata: object = { privateSubnetId: '' };

export const CreatePrivateSubnetMetadata = {
    encode(
        message: CreatePrivateSubnetMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.privateSubnetId !== '') {
            writer.uint32(18).string(message.privateSubnetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePrivateSubnetMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreatePrivateSubnetMetadata } as CreatePrivateSubnetMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.privateSubnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreatePrivateSubnetMetadata {
        const message = { ...baseCreatePrivateSubnetMetadata } as CreatePrivateSubnetMetadata;
        message.privateSubnetId =
            object.privateSubnetId !== undefined && object.privateSubnetId !== null
                ? String(object.privateSubnetId)
                : '';
        return message;
    },

    toJSON(message: CreatePrivateSubnetMetadata): unknown {
        const obj: any = {};
        message.privateSubnetId !== undefined && (obj.privateSubnetId = message.privateSubnetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreatePrivateSubnetMetadata>, I>>(
        object: I,
    ): CreatePrivateSubnetMetadata {
        const message = { ...baseCreatePrivateSubnetMetadata } as CreatePrivateSubnetMetadata;
        message.privateSubnetId = object.privateSubnetId ?? '';
        return message;
    },
};

const baseUpdatePrivateSubnetRequest: object = { privateSubnetId: '', name: '', description: '' };

export const UpdatePrivateSubnetRequest = {
    encode(
        message: UpdatePrivateSubnetRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.privateSubnetId !== '') {
            writer.uint32(10).string(message.privateSubnetId);
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
        if (message.vrfOptionsSpec !== undefined) {
            VrfOptionsSpec.encode(message.vrfOptionsSpec, writer.uint32(42).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdatePrivateSubnetRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePrivateSubnetRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdatePrivateSubnetRequest } as UpdatePrivateSubnetRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privateSubnetId = reader.string();
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
                    message.vrfOptionsSpec = VrfOptionsSpec.decode(reader, reader.uint32());
                    break;
                case 200:
                    const entry200 = UpdatePrivateSubnetRequest_LabelsEntry.decode(
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

    fromJSON(object: any): UpdatePrivateSubnetRequest {
        const message = { ...baseUpdatePrivateSubnetRequest } as UpdatePrivateSubnetRequest;
        message.privateSubnetId =
            object.privateSubnetId !== undefined && object.privateSubnetId !== null
                ? String(object.privateSubnetId)
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
        message.vrfOptionsSpec =
            object.vrfOptionsSpec !== undefined && object.vrfOptionsSpec !== null
                ? VrfOptionsSpec.fromJSON(object.vrfOptionsSpec)
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

    toJSON(message: UpdatePrivateSubnetRequest): unknown {
        const obj: any = {};
        message.privateSubnetId !== undefined && (obj.privateSubnetId = message.privateSubnetId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.vrfOptionsSpec !== undefined &&
            (obj.vrfOptionsSpec = message.vrfOptionsSpec
                ? VrfOptionsSpec.toJSON(message.vrfOptionsSpec)
                : undefined);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdatePrivateSubnetRequest>, I>>(
        object: I,
    ): UpdatePrivateSubnetRequest {
        const message = { ...baseUpdatePrivateSubnetRequest } as UpdatePrivateSubnetRequest;
        message.privateSubnetId = object.privateSubnetId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.vrfOptionsSpec =
            object.vrfOptionsSpec !== undefined && object.vrfOptionsSpec !== null
                ? VrfOptionsSpec.fromPartial(object.vrfOptionsSpec)
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

const baseUpdatePrivateSubnetRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdatePrivateSubnetRequest_LabelsEntry = {
    encode(
        message: UpdatePrivateSubnetRequest_LabelsEntry,
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
    ): UpdatePrivateSubnetRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdatePrivateSubnetRequest_LabelsEntry,
        } as UpdatePrivateSubnetRequest_LabelsEntry;
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

    fromJSON(object: any): UpdatePrivateSubnetRequest_LabelsEntry {
        const message = {
            ...baseUpdatePrivateSubnetRequest_LabelsEntry,
        } as UpdatePrivateSubnetRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdatePrivateSubnetRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdatePrivateSubnetRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdatePrivateSubnetRequest_LabelsEntry {
        const message = {
            ...baseUpdatePrivateSubnetRequest_LabelsEntry,
        } as UpdatePrivateSubnetRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdatePrivateSubnetMetadata: object = { privateSubnetId: '' };

export const UpdatePrivateSubnetMetadata = {
    encode(
        message: UpdatePrivateSubnetMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.privateSubnetId !== '') {
            writer.uint32(18).string(message.privateSubnetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePrivateSubnetMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdatePrivateSubnetMetadata } as UpdatePrivateSubnetMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.privateSubnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdatePrivateSubnetMetadata {
        const message = { ...baseUpdatePrivateSubnetMetadata } as UpdatePrivateSubnetMetadata;
        message.privateSubnetId =
            object.privateSubnetId !== undefined && object.privateSubnetId !== null
                ? String(object.privateSubnetId)
                : '';
        return message;
    },

    toJSON(message: UpdatePrivateSubnetMetadata): unknown {
        const obj: any = {};
        message.privateSubnetId !== undefined && (obj.privateSubnetId = message.privateSubnetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdatePrivateSubnetMetadata>, I>>(
        object: I,
    ): UpdatePrivateSubnetMetadata {
        const message = { ...baseUpdatePrivateSubnetMetadata } as UpdatePrivateSubnetMetadata;
        message.privateSubnetId = object.privateSubnetId ?? '';
        return message;
    },
};

const baseDeletePrivateSubnetRequest: object = { privateSubnetId: '' };

export const DeletePrivateSubnetRequest = {
    encode(
        message: DeletePrivateSubnetRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.privateSubnetId !== '') {
            writer.uint32(18).string(message.privateSubnetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeletePrivateSubnetRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeletePrivateSubnetRequest } as DeletePrivateSubnetRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.privateSubnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeletePrivateSubnetRequest {
        const message = { ...baseDeletePrivateSubnetRequest } as DeletePrivateSubnetRequest;
        message.privateSubnetId =
            object.privateSubnetId !== undefined && object.privateSubnetId !== null
                ? String(object.privateSubnetId)
                : '';
        return message;
    },

    toJSON(message: DeletePrivateSubnetRequest): unknown {
        const obj: any = {};
        message.privateSubnetId !== undefined && (obj.privateSubnetId = message.privateSubnetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeletePrivateSubnetRequest>, I>>(
        object: I,
    ): DeletePrivateSubnetRequest {
        const message = { ...baseDeletePrivateSubnetRequest } as DeletePrivateSubnetRequest;
        message.privateSubnetId = object.privateSubnetId ?? '';
        return message;
    },
};

const baseDeletePrivateSubnetMetadata: object = { privateSubnetId: '' };

export const DeletePrivateSubnetMetadata = {
    encode(
        message: DeletePrivateSubnetMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.privateSubnetId !== '') {
            writer.uint32(18).string(message.privateSubnetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeletePrivateSubnetMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeletePrivateSubnetMetadata } as DeletePrivateSubnetMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.privateSubnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeletePrivateSubnetMetadata {
        const message = { ...baseDeletePrivateSubnetMetadata } as DeletePrivateSubnetMetadata;
        message.privateSubnetId =
            object.privateSubnetId !== undefined && object.privateSubnetId !== null
                ? String(object.privateSubnetId)
                : '';
        return message;
    },

    toJSON(message: DeletePrivateSubnetMetadata): unknown {
        const obj: any = {};
        message.privateSubnetId !== undefined && (obj.privateSubnetId = message.privateSubnetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeletePrivateSubnetMetadata>, I>>(
        object: I,
    ): DeletePrivateSubnetMetadata {
        const message = { ...baseDeletePrivateSubnetMetadata } as DeletePrivateSubnetMetadata;
        message.privateSubnetId = object.privateSubnetId ?? '';
        return message;
    },
};

const baseListPrivateSubnetOperationsRequest: object = {
    privateSubnetId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListPrivateSubnetOperationsRequest = {
    encode(
        message: ListPrivateSubnetOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.privateSubnetId !== '') {
            writer.uint32(18).string(message.privateSubnetId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(800).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(810).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPrivateSubnetOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListPrivateSubnetOperationsRequest,
        } as ListPrivateSubnetOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.privateSubnetId = reader.string();
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

    fromJSON(object: any): ListPrivateSubnetOperationsRequest {
        const message = {
            ...baseListPrivateSubnetOperationsRequest,
        } as ListPrivateSubnetOperationsRequest;
        message.privateSubnetId =
            object.privateSubnetId !== undefined && object.privateSubnetId !== null
                ? String(object.privateSubnetId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListPrivateSubnetOperationsRequest): unknown {
        const obj: any = {};
        message.privateSubnetId !== undefined && (obj.privateSubnetId = message.privateSubnetId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPrivateSubnetOperationsRequest>, I>>(
        object: I,
    ): ListPrivateSubnetOperationsRequest {
        const message = {
            ...baseListPrivateSubnetOperationsRequest,
        } as ListPrivateSubnetOperationsRequest;
        message.privateSubnetId = object.privateSubnetId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListPrivateSubnetOperationsResponse: object = { nextPageToken: '' };

export const ListPrivateSubnetOperationsResponse = {
    encode(
        message: ListPrivateSubnetOperationsResponse,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPrivateSubnetOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListPrivateSubnetOperationsResponse,
        } as ListPrivateSubnetOperationsResponse;
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

    fromJSON(object: any): ListPrivateSubnetOperationsResponse {
        const message = {
            ...baseListPrivateSubnetOperationsResponse,
        } as ListPrivateSubnetOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListPrivateSubnetOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPrivateSubnetOperationsResponse>, I>>(
        object: I,
    ): ListPrivateSubnetOperationsResponse {
        const message = {
            ...baseListPrivateSubnetOperationsResponse,
        } as ListPrivateSubnetOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** A set of methods for managing PrivateSubnet resources. */
export const PrivateSubnetServiceService = {
    /**
     * Returns the specific PrivateSubnet resource.
     *
     * To get the list of available PrivateSubnet resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.baremetal.v1alpha.PrivateSubnetService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetPrivateSubnetRequest) =>
            Buffer.from(GetPrivateSubnetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetPrivateSubnetRequest.decode(value),
        responseSerialize: (value: PrivateSubnet) =>
            Buffer.from(PrivateSubnet.encode(value).finish()),
        responseDeserialize: (value: Buffer) => PrivateSubnet.decode(value),
    },
    /** Retrieves the list of PrivateSubnet resources in the specified folder. */
    list: {
        path: '/yandex.cloud.baremetal.v1alpha.PrivateSubnetService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListPrivateSubnetRequest) =>
            Buffer.from(ListPrivateSubnetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListPrivateSubnetRequest.decode(value),
        responseSerialize: (value: ListPrivateSubnetResponse) =>
            Buffer.from(ListPrivateSubnetResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListPrivateSubnetResponse.decode(value),
    },
    /** Creates a private subnet in the specified folder. */
    create: {
        path: '/yandex.cloud.baremetal.v1alpha.PrivateSubnetService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreatePrivateSubnetRequest) =>
            Buffer.from(CreatePrivateSubnetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreatePrivateSubnetRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified private subnet. */
    update: {
        path: '/yandex.cloud.baremetal.v1alpha.PrivateSubnetService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdatePrivateSubnetRequest) =>
            Buffer.from(UpdatePrivateSubnetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdatePrivateSubnetRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Deletes the specified private subnet.
     *
     * Deleting a private subnet removes its data permanently and is irreversible.
     */
    delete: {
        path: '/yandex.cloud.baremetal.v1alpha.PrivateSubnetService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeletePrivateSubnetRequest) =>
            Buffer.from(DeletePrivateSubnetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeletePrivateSubnetRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified private subnet. */
    listOperations: {
        path: '/yandex.cloud.baremetal.v1alpha.PrivateSubnetService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListPrivateSubnetOperationsRequest) =>
            Buffer.from(ListPrivateSubnetOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListPrivateSubnetOperationsRequest.decode(value),
        responseSerialize: (value: ListPrivateSubnetOperationsResponse) =>
            Buffer.from(ListPrivateSubnetOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListPrivateSubnetOperationsResponse.decode(value),
    },
} as const;

export interface PrivateSubnetServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specific PrivateSubnet resource.
     *
     * To get the list of available PrivateSubnet resources, make a [List] request.
     */
    get: handleUnaryCall<GetPrivateSubnetRequest, PrivateSubnet>;
    /** Retrieves the list of PrivateSubnet resources in the specified folder. */
    list: handleUnaryCall<ListPrivateSubnetRequest, ListPrivateSubnetResponse>;
    /** Creates a private subnet in the specified folder. */
    create: handleUnaryCall<CreatePrivateSubnetRequest, Operation>;
    /** Updates the specified private subnet. */
    update: handleUnaryCall<UpdatePrivateSubnetRequest, Operation>;
    /**
     * Deletes the specified private subnet.
     *
     * Deleting a private subnet removes its data permanently and is irreversible.
     */
    delete: handleUnaryCall<DeletePrivateSubnetRequest, Operation>;
    /** Lists operations for the specified private subnet. */
    listOperations: handleUnaryCall<
        ListPrivateSubnetOperationsRequest,
        ListPrivateSubnetOperationsResponse
    >;
}

export interface PrivateSubnetServiceClient extends Client {
    /**
     * Returns the specific PrivateSubnet resource.
     *
     * To get the list of available PrivateSubnet resources, make a [List] request.
     */
    get(
        request: GetPrivateSubnetRequest,
        callback: (error: ServiceError | null, response: PrivateSubnet) => void,
    ): ClientUnaryCall;
    get(
        request: GetPrivateSubnetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: PrivateSubnet) => void,
    ): ClientUnaryCall;
    get(
        request: GetPrivateSubnetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: PrivateSubnet) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of PrivateSubnet resources in the specified folder. */
    list(
        request: ListPrivateSubnetRequest,
        callback: (error: ServiceError | null, response: ListPrivateSubnetResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListPrivateSubnetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListPrivateSubnetResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListPrivateSubnetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListPrivateSubnetResponse) => void,
    ): ClientUnaryCall;
    /** Creates a private subnet in the specified folder. */
    create(
        request: CreatePrivateSubnetRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreatePrivateSubnetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreatePrivateSubnetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified private subnet. */
    update(
        request: UpdatePrivateSubnetRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdatePrivateSubnetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdatePrivateSubnetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Deletes the specified private subnet.
     *
     * Deleting a private subnet removes its data permanently and is irreversible.
     */
    delete(
        request: DeletePrivateSubnetRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeletePrivateSubnetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeletePrivateSubnetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists operations for the specified private subnet. */
    listOperations(
        request: ListPrivateSubnetOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListPrivateSubnetOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListPrivateSubnetOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListPrivateSubnetOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListPrivateSubnetOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListPrivateSubnetOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
}

export const PrivateSubnetServiceClient = makeGenericClientConstructor(
    PrivateSubnetServiceService,
    'yandex.cloud.baremetal.v1alpha.PrivateSubnetService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): PrivateSubnetServiceClient;
    service: typeof PrivateSubnetServiceService;
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
