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
import { DnsFirewall_ResourceConfig, DnsFirewall } from './dns_firewall';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../operation/operation';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../access/access';

export const protobufPackage = 'yandex.cloud.dns.v1';

export interface GetDnsFirewallRequest {
    /**
     * ID of the DNS firewall to return.
     * To get a DNS firewall ID, make a [DnsFirewallService.List] request.
     */
    dnsFirewallId: string;
}

export interface ListDnsFirewallsRequest {
    /**
     * ID of the folder to list DNS firewalls in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListDnsFirewallsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListDnsFirewallsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters DNS firewalls listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [DnsFirewall.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name=my-dns-firewall`.
     */
    filter: string;
}

export interface ListDnsFirewallsResponse {
    /** List of DNS firewalls in the specified folder. */
    dnsFirewalls: DnsFirewall[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListDnsFirewallsRequest.page_size], use `next_page_token` as the value
     * for the [ListDnsFirewallsRequest.page_token] parameter in the next list request.
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateDnsFirewallRequest {
    /**
     * ID of the folder to create DNS firewalls in.
     * To get a folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the DNS firewall.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the DNS firewall. */
    description: string;
    /** DNS firewall labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Prevents accidental firewall removal. */
    deletionProtection: boolean;
    /** Whether the DNS firewall is enabled. */
    enabled: boolean;
    /**
     * Resource settings.
     * Specifies resources that the DNS firewall applies to.
     */
    resourceConfig?: DnsFirewall_ResourceConfig;
    /** List of FQDNs that the DNS firewall allows to pass. */
    whitelistFqdns: string[];
    /** List of FQDNs that the DNS firewall blocks. */
    blacklistFqdns: string[];
}

export interface CreateDnsFirewallRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateDnsFirewallMetadata {
    /** ID of the DNS firewall that is being created. */
    dnsFirewallId: string;
}

export interface UpdateDnsFirewallRequest {
    /**
     * ID of the DNS firewall to update.
     * To get the DNS firewall ID, make a [DnsFirewallService.List] request.
     */
    dnsFirewallId: string;
    /** Field mask specifying which fields of the DNS firewall resource are going to be updated. */
    updateMask?: FieldMask;
    /**
     * New name for the DNS firewall.
     * The name must be unique within the folder.
     */
    name: string;
    /** New description of the DNS firewall. */
    description: string;
    /**
     * DNS firewall labels as `key:value` pairs.
     * Existing set of labels is completely replaced by the provided set, so if you just want
     * to add or remove a label:
     * 1. Get the current set of labels with a [DnsFirewallService.Get] request.
     * 2. Add or remove a label in this set.
     * 3. Send the new set in this field.
     */
    labels: { [key: string]: string };
    /** Prevents accidental firewall removal. */
    deletionProtection: boolean;
    /** Whether the DNS firewall is enabled. */
    enabled: boolean;
    /**
     * Resource settings.
     * Specifies resources that the DNS firewall applies to.
     */
    resourceConfig?: DnsFirewall_ResourceConfig;
    /** List of FQDNs that the DNS firewall allows to pass. */
    whitelistFqdns: string[];
    /** List of FQDNs that the DNS firewall blocks. */
    blacklistFqdns: string[];
}

export interface UpdateDnsFirewallRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateDnsFirewallMetadata {
    /** ID of the DNS firewall that is being updated. */
    dnsFirewallId: string;
}

export interface MoveDnsFirewallRequest {
    /**
     * ID of the DNS firewall to move.
     * To get the DNS firewall ID, make a [DnsFirewallService.List] request.
     */
    dnsFirewallId: string;
    /**
     * ID of the folder to move the firewall to.
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    destinationFolderId: string;
}

export interface MoveDnsFirewallMetadata {
    /** ID of the DNS firewall that is being moved. */
    dnsFirewallId: string;
}

export interface DeleteDnsFirewallRequest {
    /**
     * ID of the DNS firewall to delete.
     * To get a DNS firewall ID, make a [DnsFirewallService.List] request.
     */
    dnsFirewallId: string;
}

export interface DeleteDnsFirewallMetadata {
    /** ID of the DNS firewall that is being deleted. */
    dnsFirewallId: string;
}

export interface ListDnsFirewallOperationsRequest {
    /**
     * ID of the DNS firewall to list operations for.
     * To get a DNS firewall ID, make a [DnsFirewallService.List] request.
     */
    dnsFirewallId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListDnsFirewallOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListDnsFirewallOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters DNS firewalls listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [DnsFirewall.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name=my-dns-firewall`.
     */
    filter: string;
}

export interface ListDnsFirewallOperationsResponse {
    /** List of operations for the specified DNS firewall. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListDnsFirewallOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListDnsFirewallOperationsRequest.page_token] parameter in the next list request.
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetDnsFirewallRequest: object = { dnsFirewallId: '' };

export const GetDnsFirewallRequest: {
    encode(message: GetDnsFirewallRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDnsFirewallRequest;
    fromJSON(object: any): GetDnsFirewallRequest;
    toJSON(message: GetDnsFirewallRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetDnsFirewallRequest>, I>>(object: I): GetDnsFirewallRequest;
} = {
    encode(message: GetDnsFirewallRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.dnsFirewallId !== '') {
            writer.uint32(10).string(message.dnsFirewallId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetDnsFirewallRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetDnsFirewallRequest } as GetDnsFirewallRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsFirewallId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetDnsFirewallRequest {
        const message = { ...baseGetDnsFirewallRequest } as GetDnsFirewallRequest;
        message.dnsFirewallId =
            object.dnsFirewallId !== undefined && object.dnsFirewallId !== null
                ? String(object.dnsFirewallId)
                : '';
        return message;
    },

    toJSON(message: GetDnsFirewallRequest): unknown {
        const obj: any = {};
        message.dnsFirewallId !== undefined && (obj.dnsFirewallId = message.dnsFirewallId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetDnsFirewallRequest>, I>>(
        object: I,
    ): GetDnsFirewallRequest {
        const message = { ...baseGetDnsFirewallRequest } as GetDnsFirewallRequest;
        message.dnsFirewallId = object.dnsFirewallId ?? '';
        return message;
    },
};

const baseListDnsFirewallsRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListDnsFirewallsRequest: {
    encode(message: ListDnsFirewallsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListDnsFirewallsRequest;
    fromJSON(object: any): ListDnsFirewallsRequest;
    toJSON(message: ListDnsFirewallsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListDnsFirewallsRequest>, I>>(object: I): ListDnsFirewallsRequest;
} = {
    encode(message: ListDnsFirewallsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListDnsFirewallsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDnsFirewallsRequest } as ListDnsFirewallsRequest;
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

    fromJSON(object: any): ListDnsFirewallsRequest {
        const message = { ...baseListDnsFirewallsRequest } as ListDnsFirewallsRequest;
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
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        return message;
    },

    toJSON(message: ListDnsFirewallsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListDnsFirewallsRequest>, I>>(
        object: I,
    ): ListDnsFirewallsRequest {
        const message = { ...baseListDnsFirewallsRequest } as ListDnsFirewallsRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListDnsFirewallsResponse: object = { nextPageToken: '' };

export const ListDnsFirewallsResponse: {
    encode(message: ListDnsFirewallsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListDnsFirewallsResponse;
    fromJSON(object: any): ListDnsFirewallsResponse;
    toJSON(message: ListDnsFirewallsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListDnsFirewallsResponse>, I>>(object: I): ListDnsFirewallsResponse;
} = {
    encode(
        message: ListDnsFirewallsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.dnsFirewalls) {
            DnsFirewall.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListDnsFirewallsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDnsFirewallsResponse } as ListDnsFirewallsResponse;
        message.dnsFirewalls = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsFirewalls.push(DnsFirewall.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListDnsFirewallsResponse {
        const message = { ...baseListDnsFirewallsResponse } as ListDnsFirewallsResponse;
        message.dnsFirewalls = (object.dnsFirewalls ?? []).map((e: any) => DnsFirewall.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListDnsFirewallsResponse): unknown {
        const obj: any = {};
        if (message.dnsFirewalls) {
            obj.dnsFirewalls = message.dnsFirewalls.map((e) =>
                e ? DnsFirewall.toJSON(e) : undefined,
            );
        } else {
            obj.dnsFirewalls = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListDnsFirewallsResponse>, I>>(
        object: I,
    ): ListDnsFirewallsResponse {
        const message = { ...baseListDnsFirewallsResponse } as ListDnsFirewallsResponse;
        message.dnsFirewalls = object.dnsFirewalls?.map((e) => DnsFirewall.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateDnsFirewallRequest: object = {
    folderId: '',
    name: '',
    description: '',
    deletionProtection: false,
    enabled: false,
    whitelistFqdns: '',
    blacklistFqdns: '',
};

export const CreateDnsFirewallRequest: {
    encode(message: CreateDnsFirewallRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateDnsFirewallRequest;
    fromJSON(object: any): CreateDnsFirewallRequest;
    toJSON(message: CreateDnsFirewallRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateDnsFirewallRequest>, I>>(object: I): CreateDnsFirewallRequest;
} = {
    encode(
        message: CreateDnsFirewallRequest,
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
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateDnsFirewallRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        if (message.deletionProtection === true) {
            writer.uint32(40).bool(message.deletionProtection);
        }
        if (message.enabled === true) {
            writer.uint32(48).bool(message.enabled);
        }
        if (message.resourceConfig !== undefined) {
            DnsFirewall_ResourceConfig.encode(
                message.resourceConfig,
                writer.uint32(58).fork(),
            ).ldelim();
        }
        for (const v of message.whitelistFqdns) {
            writer.uint32(66).string(v!);
        }
        for (const v of message.blacklistFqdns) {
            writer.uint32(74).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateDnsFirewallRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateDnsFirewallRequest } as CreateDnsFirewallRequest;
        message.labels = {};
        message.whitelistFqdns = [];
        message.blacklistFqdns = [];
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
                    const entry4 = CreateDnsFirewallRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.deletionProtection = reader.bool();
                    break;
                case 6:
                    message.enabled = reader.bool();
                    break;
                case 7:
                    message.resourceConfig = DnsFirewall_ResourceConfig.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 8:
                    message.whitelistFqdns.push(reader.string());
                    break;
                case 9:
                    message.blacklistFqdns.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateDnsFirewallRequest {
        const message = { ...baseCreateDnsFirewallRequest } as CreateDnsFirewallRequest;
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
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.resourceConfig =
            object.resourceConfig !== undefined && object.resourceConfig !== null
                ? DnsFirewall_ResourceConfig.fromJSON(object.resourceConfig)
                : undefined;
        message.whitelistFqdns = (object.whitelistFqdns ?? []).map((e: any) => String(e));
        message.blacklistFqdns = (object.blacklistFqdns ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: CreateDnsFirewallRequest): unknown {
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
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.resourceConfig !== undefined &&
            (obj.resourceConfig = message.resourceConfig
                ? DnsFirewall_ResourceConfig.toJSON(message.resourceConfig)
                : undefined);
        if (message.whitelistFqdns) {
            obj.whitelistFqdns = message.whitelistFqdns.map((e) => e);
        } else {
            obj.whitelistFqdns = [];
        }
        if (message.blacklistFqdns) {
            obj.blacklistFqdns = message.blacklistFqdns.map((e) => e);
        } else {
            obj.blacklistFqdns = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateDnsFirewallRequest>, I>>(
        object: I,
    ): CreateDnsFirewallRequest {
        const message = { ...baseCreateDnsFirewallRequest } as CreateDnsFirewallRequest;
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
        message.deletionProtection = object.deletionProtection ?? false;
        message.enabled = object.enabled ?? false;
        message.resourceConfig =
            object.resourceConfig !== undefined && object.resourceConfig !== null
                ? DnsFirewall_ResourceConfig.fromPartial(object.resourceConfig)
                : undefined;
        message.whitelistFqdns = object.whitelistFqdns?.map((e) => e) || [];
        message.blacklistFqdns = object.blacklistFqdns?.map((e) => e) || [];
        return message;
    },
};

const baseCreateDnsFirewallRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateDnsFirewallRequest_LabelsEntry: {
    encode(message: CreateDnsFirewallRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateDnsFirewallRequest_LabelsEntry;
    fromJSON(object: any): CreateDnsFirewallRequest_LabelsEntry;
    toJSON(message: CreateDnsFirewallRequest_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateDnsFirewallRequest_LabelsEntry>, I>>(object: I): CreateDnsFirewallRequest_LabelsEntry;
} = {
    encode(
        message: CreateDnsFirewallRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateDnsFirewallRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateDnsFirewallRequest_LabelsEntry,
        } as CreateDnsFirewallRequest_LabelsEntry;
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

    fromJSON(object: any): CreateDnsFirewallRequest_LabelsEntry {
        const message = {
            ...baseCreateDnsFirewallRequest_LabelsEntry,
        } as CreateDnsFirewallRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateDnsFirewallRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateDnsFirewallRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateDnsFirewallRequest_LabelsEntry {
        const message = {
            ...baseCreateDnsFirewallRequest_LabelsEntry,
        } as CreateDnsFirewallRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateDnsFirewallMetadata: object = { dnsFirewallId: '' };

export const CreateDnsFirewallMetadata: {
    encode(message: CreateDnsFirewallMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateDnsFirewallMetadata;
    fromJSON(object: any): CreateDnsFirewallMetadata;
    toJSON(message: CreateDnsFirewallMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateDnsFirewallMetadata>, I>>(object: I): CreateDnsFirewallMetadata;
} = {
    encode(
        message: CreateDnsFirewallMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.dnsFirewallId !== '') {
            writer.uint32(10).string(message.dnsFirewallId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateDnsFirewallMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateDnsFirewallMetadata } as CreateDnsFirewallMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsFirewallId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateDnsFirewallMetadata {
        const message = { ...baseCreateDnsFirewallMetadata } as CreateDnsFirewallMetadata;
        message.dnsFirewallId =
            object.dnsFirewallId !== undefined && object.dnsFirewallId !== null
                ? String(object.dnsFirewallId)
                : '';
        return message;
    },

    toJSON(message: CreateDnsFirewallMetadata): unknown {
        const obj: any = {};
        message.dnsFirewallId !== undefined && (obj.dnsFirewallId = message.dnsFirewallId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateDnsFirewallMetadata>, I>>(
        object: I,
    ): CreateDnsFirewallMetadata {
        const message = { ...baseCreateDnsFirewallMetadata } as CreateDnsFirewallMetadata;
        message.dnsFirewallId = object.dnsFirewallId ?? '';
        return message;
    },
};

const baseUpdateDnsFirewallRequest: object = {
    dnsFirewallId: '',
    name: '',
    description: '',
    deletionProtection: false,
    enabled: false,
    whitelistFqdns: '',
    blacklistFqdns: '',
};

export const UpdateDnsFirewallRequest: {
    encode(message: UpdateDnsFirewallRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDnsFirewallRequest;
    fromJSON(object: any): UpdateDnsFirewallRequest;
    toJSON(message: UpdateDnsFirewallRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateDnsFirewallRequest>, I>>(object: I): UpdateDnsFirewallRequest;
} = {
    encode(
        message: UpdateDnsFirewallRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.dnsFirewallId !== '') {
            writer.uint32(10).string(message.dnsFirewallId);
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
            UpdateDnsFirewallRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        if (message.deletionProtection === true) {
            writer.uint32(48).bool(message.deletionProtection);
        }
        if (message.enabled === true) {
            writer.uint32(56).bool(message.enabled);
        }
        if (message.resourceConfig !== undefined) {
            DnsFirewall_ResourceConfig.encode(
                message.resourceConfig,
                writer.uint32(66).fork(),
            ).ldelim();
        }
        for (const v of message.whitelistFqdns) {
            writer.uint32(74).string(v!);
        }
        for (const v of message.blacklistFqdns) {
            writer.uint32(82).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDnsFirewallRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateDnsFirewallRequest } as UpdateDnsFirewallRequest;
        message.labels = {};
        message.whitelistFqdns = [];
        message.blacklistFqdns = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsFirewallId = reader.string();
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
                    const entry5 = UpdateDnsFirewallRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.deletionProtection = reader.bool();
                    break;
                case 7:
                    message.enabled = reader.bool();
                    break;
                case 8:
                    message.resourceConfig = DnsFirewall_ResourceConfig.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 9:
                    message.whitelistFqdns.push(reader.string());
                    break;
                case 10:
                    message.blacklistFqdns.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateDnsFirewallRequest {
        const message = { ...baseUpdateDnsFirewallRequest } as UpdateDnsFirewallRequest;
        message.dnsFirewallId =
            object.dnsFirewallId !== undefined && object.dnsFirewallId !== null
                ? String(object.dnsFirewallId)
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
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.resourceConfig =
            object.resourceConfig !== undefined && object.resourceConfig !== null
                ? DnsFirewall_ResourceConfig.fromJSON(object.resourceConfig)
                : undefined;
        message.whitelistFqdns = (object.whitelistFqdns ?? []).map((e: any) => String(e));
        message.blacklistFqdns = (object.blacklistFqdns ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: UpdateDnsFirewallRequest): unknown {
        const obj: any = {};
        message.dnsFirewallId !== undefined && (obj.dnsFirewallId = message.dnsFirewallId);
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
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.resourceConfig !== undefined &&
            (obj.resourceConfig = message.resourceConfig
                ? DnsFirewall_ResourceConfig.toJSON(message.resourceConfig)
                : undefined);
        if (message.whitelistFqdns) {
            obj.whitelistFqdns = message.whitelistFqdns.map((e) => e);
        } else {
            obj.whitelistFqdns = [];
        }
        if (message.blacklistFqdns) {
            obj.blacklistFqdns = message.blacklistFqdns.map((e) => e);
        } else {
            obj.blacklistFqdns = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateDnsFirewallRequest>, I>>(
        object: I,
    ): UpdateDnsFirewallRequest {
        const message = { ...baseUpdateDnsFirewallRequest } as UpdateDnsFirewallRequest;
        message.dnsFirewallId = object.dnsFirewallId ?? '';
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
        message.deletionProtection = object.deletionProtection ?? false;
        message.enabled = object.enabled ?? false;
        message.resourceConfig =
            object.resourceConfig !== undefined && object.resourceConfig !== null
                ? DnsFirewall_ResourceConfig.fromPartial(object.resourceConfig)
                : undefined;
        message.whitelistFqdns = object.whitelistFqdns?.map((e) => e) || [];
        message.blacklistFqdns = object.blacklistFqdns?.map((e) => e) || [];
        return message;
    },
};

const baseUpdateDnsFirewallRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateDnsFirewallRequest_LabelsEntry: {
    encode(message: UpdateDnsFirewallRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDnsFirewallRequest_LabelsEntry;
    fromJSON(object: any): UpdateDnsFirewallRequest_LabelsEntry;
    toJSON(message: UpdateDnsFirewallRequest_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateDnsFirewallRequest_LabelsEntry>, I>>(object: I): UpdateDnsFirewallRequest_LabelsEntry;
} = {
    encode(
        message: UpdateDnsFirewallRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDnsFirewallRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateDnsFirewallRequest_LabelsEntry,
        } as UpdateDnsFirewallRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateDnsFirewallRequest_LabelsEntry {
        const message = {
            ...baseUpdateDnsFirewallRequest_LabelsEntry,
        } as UpdateDnsFirewallRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateDnsFirewallRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateDnsFirewallRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateDnsFirewallRequest_LabelsEntry {
        const message = {
            ...baseUpdateDnsFirewallRequest_LabelsEntry,
        } as UpdateDnsFirewallRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateDnsFirewallMetadata: object = { dnsFirewallId: '' };

export const UpdateDnsFirewallMetadata: {
    encode(message: UpdateDnsFirewallMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDnsFirewallMetadata;
    fromJSON(object: any): UpdateDnsFirewallMetadata;
    toJSON(message: UpdateDnsFirewallMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateDnsFirewallMetadata>, I>>(object: I): UpdateDnsFirewallMetadata;
} = {
    encode(
        message: UpdateDnsFirewallMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.dnsFirewallId !== '') {
            writer.uint32(10).string(message.dnsFirewallId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDnsFirewallMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateDnsFirewallMetadata } as UpdateDnsFirewallMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsFirewallId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateDnsFirewallMetadata {
        const message = { ...baseUpdateDnsFirewallMetadata } as UpdateDnsFirewallMetadata;
        message.dnsFirewallId =
            object.dnsFirewallId !== undefined && object.dnsFirewallId !== null
                ? String(object.dnsFirewallId)
                : '';
        return message;
    },

    toJSON(message: UpdateDnsFirewallMetadata): unknown {
        const obj: any = {};
        message.dnsFirewallId !== undefined && (obj.dnsFirewallId = message.dnsFirewallId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateDnsFirewallMetadata>, I>>(
        object: I,
    ): UpdateDnsFirewallMetadata {
        const message = { ...baseUpdateDnsFirewallMetadata } as UpdateDnsFirewallMetadata;
        message.dnsFirewallId = object.dnsFirewallId ?? '';
        return message;
    },
};

const baseMoveDnsFirewallRequest: object = { dnsFirewallId: '', destinationFolderId: '' };

export const MoveDnsFirewallRequest: {
    encode(message: MoveDnsFirewallRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MoveDnsFirewallRequest;
    fromJSON(object: any): MoveDnsFirewallRequest;
    toJSON(message: MoveDnsFirewallRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<MoveDnsFirewallRequest>, I>>(object: I): MoveDnsFirewallRequest;
} = {
    encode(message: MoveDnsFirewallRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.dnsFirewallId !== '') {
            writer.uint32(10).string(message.dnsFirewallId);
        }
        if (message.destinationFolderId !== '') {
            writer.uint32(18).string(message.destinationFolderId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MoveDnsFirewallRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMoveDnsFirewallRequest } as MoveDnsFirewallRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsFirewallId = reader.string();
                    break;
                case 2:
                    message.destinationFolderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MoveDnsFirewallRequest {
        const message = { ...baseMoveDnsFirewallRequest } as MoveDnsFirewallRequest;
        message.dnsFirewallId =
            object.dnsFirewallId !== undefined && object.dnsFirewallId !== null
                ? String(object.dnsFirewallId)
                : '';
        message.destinationFolderId =
            object.destinationFolderId !== undefined && object.destinationFolderId !== null
                ? String(object.destinationFolderId)
                : '';
        return message;
    },

    toJSON(message: MoveDnsFirewallRequest): unknown {
        const obj: any = {};
        message.dnsFirewallId !== undefined && (obj.dnsFirewallId = message.dnsFirewallId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MoveDnsFirewallRequest>, I>>(
        object: I,
    ): MoveDnsFirewallRequest {
        const message = { ...baseMoveDnsFirewallRequest } as MoveDnsFirewallRequest;
        message.dnsFirewallId = object.dnsFirewallId ?? '';
        message.destinationFolderId = object.destinationFolderId ?? '';
        return message;
    },
};

const baseMoveDnsFirewallMetadata: object = { dnsFirewallId: '' };

export const MoveDnsFirewallMetadata: {
    encode(message: MoveDnsFirewallMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MoveDnsFirewallMetadata;
    fromJSON(object: any): MoveDnsFirewallMetadata;
    toJSON(message: MoveDnsFirewallMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<MoveDnsFirewallMetadata>, I>>(object: I): MoveDnsFirewallMetadata;
} = {
    encode(message: MoveDnsFirewallMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.dnsFirewallId !== '') {
            writer.uint32(10).string(message.dnsFirewallId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MoveDnsFirewallMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMoveDnsFirewallMetadata } as MoveDnsFirewallMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsFirewallId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MoveDnsFirewallMetadata {
        const message = { ...baseMoveDnsFirewallMetadata } as MoveDnsFirewallMetadata;
        message.dnsFirewallId =
            object.dnsFirewallId !== undefined && object.dnsFirewallId !== null
                ? String(object.dnsFirewallId)
                : '';
        return message;
    },

    toJSON(message: MoveDnsFirewallMetadata): unknown {
        const obj: any = {};
        message.dnsFirewallId !== undefined && (obj.dnsFirewallId = message.dnsFirewallId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MoveDnsFirewallMetadata>, I>>(
        object: I,
    ): MoveDnsFirewallMetadata {
        const message = { ...baseMoveDnsFirewallMetadata } as MoveDnsFirewallMetadata;
        message.dnsFirewallId = object.dnsFirewallId ?? '';
        return message;
    },
};

const baseDeleteDnsFirewallRequest: object = { dnsFirewallId: '' };

export const DeleteDnsFirewallRequest: {
    encode(message: DeleteDnsFirewallRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDnsFirewallRequest;
    fromJSON(object: any): DeleteDnsFirewallRequest;
    toJSON(message: DeleteDnsFirewallRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteDnsFirewallRequest>, I>>(object: I): DeleteDnsFirewallRequest;
} = {
    encode(
        message: DeleteDnsFirewallRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.dnsFirewallId !== '') {
            writer.uint32(10).string(message.dnsFirewallId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDnsFirewallRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteDnsFirewallRequest } as DeleteDnsFirewallRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsFirewallId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteDnsFirewallRequest {
        const message = { ...baseDeleteDnsFirewallRequest } as DeleteDnsFirewallRequest;
        message.dnsFirewallId =
            object.dnsFirewallId !== undefined && object.dnsFirewallId !== null
                ? String(object.dnsFirewallId)
                : '';
        return message;
    },

    toJSON(message: DeleteDnsFirewallRequest): unknown {
        const obj: any = {};
        message.dnsFirewallId !== undefined && (obj.dnsFirewallId = message.dnsFirewallId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteDnsFirewallRequest>, I>>(
        object: I,
    ): DeleteDnsFirewallRequest {
        const message = { ...baseDeleteDnsFirewallRequest } as DeleteDnsFirewallRequest;
        message.dnsFirewallId = object.dnsFirewallId ?? '';
        return message;
    },
};

const baseDeleteDnsFirewallMetadata: object = { dnsFirewallId: '' };

export const DeleteDnsFirewallMetadata: {
    encode(message: DeleteDnsFirewallMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDnsFirewallMetadata;
    fromJSON(object: any): DeleteDnsFirewallMetadata;
    toJSON(message: DeleteDnsFirewallMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteDnsFirewallMetadata>, I>>(object: I): DeleteDnsFirewallMetadata;
} = {
    encode(
        message: DeleteDnsFirewallMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.dnsFirewallId !== '') {
            writer.uint32(10).string(message.dnsFirewallId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDnsFirewallMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteDnsFirewallMetadata } as DeleteDnsFirewallMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsFirewallId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteDnsFirewallMetadata {
        const message = { ...baseDeleteDnsFirewallMetadata } as DeleteDnsFirewallMetadata;
        message.dnsFirewallId =
            object.dnsFirewallId !== undefined && object.dnsFirewallId !== null
                ? String(object.dnsFirewallId)
                : '';
        return message;
    },

    toJSON(message: DeleteDnsFirewallMetadata): unknown {
        const obj: any = {};
        message.dnsFirewallId !== undefined && (obj.dnsFirewallId = message.dnsFirewallId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteDnsFirewallMetadata>, I>>(
        object: I,
    ): DeleteDnsFirewallMetadata {
        const message = { ...baseDeleteDnsFirewallMetadata } as DeleteDnsFirewallMetadata;
        message.dnsFirewallId = object.dnsFirewallId ?? '';
        return message;
    },
};

const baseListDnsFirewallOperationsRequest: object = {
    dnsFirewallId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListDnsFirewallOperationsRequest: {
    encode(message: ListDnsFirewallOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListDnsFirewallOperationsRequest;
    fromJSON(object: any): ListDnsFirewallOperationsRequest;
    toJSON(message: ListDnsFirewallOperationsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListDnsFirewallOperationsRequest>, I>>(object: I): ListDnsFirewallOperationsRequest;
} = {
    encode(
        message: ListDnsFirewallOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.dnsFirewallId !== '') {
            writer.uint32(10).string(message.dnsFirewallId);
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListDnsFirewallOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDnsFirewallOperationsRequest,
        } as ListDnsFirewallOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsFirewallId = reader.string();
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

    fromJSON(object: any): ListDnsFirewallOperationsRequest {
        const message = {
            ...baseListDnsFirewallOperationsRequest,
        } as ListDnsFirewallOperationsRequest;
        message.dnsFirewallId =
            object.dnsFirewallId !== undefined && object.dnsFirewallId !== null
                ? String(object.dnsFirewallId)
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

    toJSON(message: ListDnsFirewallOperationsRequest): unknown {
        const obj: any = {};
        message.dnsFirewallId !== undefined && (obj.dnsFirewallId = message.dnsFirewallId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListDnsFirewallOperationsRequest>, I>>(
        object: I,
    ): ListDnsFirewallOperationsRequest {
        const message = {
            ...baseListDnsFirewallOperationsRequest,
        } as ListDnsFirewallOperationsRequest;
        message.dnsFirewallId = object.dnsFirewallId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListDnsFirewallOperationsResponse: object = { nextPageToken: '' };

export const ListDnsFirewallOperationsResponse: {
    encode(message: ListDnsFirewallOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListDnsFirewallOperationsResponse;
    fromJSON(object: any): ListDnsFirewallOperationsResponse;
    toJSON(message: ListDnsFirewallOperationsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListDnsFirewallOperationsResponse>, I>>(object: I): ListDnsFirewallOperationsResponse;
} = {
    encode(
        message: ListDnsFirewallOperationsResponse,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListDnsFirewallOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDnsFirewallOperationsResponse,
        } as ListDnsFirewallOperationsResponse;
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

    fromJSON(object: any): ListDnsFirewallOperationsResponse {
        const message = {
            ...baseListDnsFirewallOperationsResponse,
        } as ListDnsFirewallOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListDnsFirewallOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListDnsFirewallOperationsResponse>, I>>(
        object: I,
    ): ListDnsFirewallOperationsResponse {
        const message = {
            ...baseListDnsFirewallOperationsResponse,
        } as ListDnsFirewallOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** A set of methods for managing DNS firewalls. */
export const DnsFirewallServiceService = {
    /**
     * Returns the specified DNS firewall.
     * To get the list of all available DNS firewalls, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.dns.v1.DnsFirewallService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetDnsFirewallRequest) =>
            Buffer.from(GetDnsFirewallRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetDnsFirewallRequest.decode(value),
        responseSerialize: (value: DnsFirewall) => Buffer.from(DnsFirewall.encode(value).finish()),
        responseDeserialize: (value: Buffer) => DnsFirewall.decode(value),
    },
    /** Retrieves the list of DNS firewalls in the specified folder. */
    list: {
        path: '/yandex.cloud.dns.v1.DnsFirewallService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListDnsFirewallsRequest) =>
            Buffer.from(ListDnsFirewallsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListDnsFirewallsRequest.decode(value),
        responseSerialize: (value: ListDnsFirewallsResponse) =>
            Buffer.from(ListDnsFirewallsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListDnsFirewallsResponse.decode(value),
    },
    /** Creates a DNS firewall in the specified folder. */
    create: {
        path: '/yandex.cloud.dns.v1.DnsFirewallService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateDnsFirewallRequest) =>
            Buffer.from(CreateDnsFirewallRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateDnsFirewallRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified DNS firewall. */
    update: {
        path: '/yandex.cloud.dns.v1.DnsFirewallService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateDnsFirewallRequest) =>
            Buffer.from(UpdateDnsFirewallRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateDnsFirewallRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Moves the specified DNS firewall to another folder. */
    move: {
        path: '/yandex.cloud.dns.v1.DnsFirewallService/Move',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: MoveDnsFirewallRequest) =>
            Buffer.from(MoveDnsFirewallRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => MoveDnsFirewallRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified DNS firewall. */
    delete: {
        path: '/yandex.cloud.dns.v1.DnsFirewallService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteDnsFirewallRequest) =>
            Buffer.from(DeleteDnsFirewallRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteDnsFirewallRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified DNS firewall. */
    listOperations: {
        path: '/yandex.cloud.dns.v1.DnsFirewallService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListDnsFirewallOperationsRequest) =>
            Buffer.from(ListDnsFirewallOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListDnsFirewallOperationsRequest.decode(value),
        responseSerialize: (value: ListDnsFirewallOperationsResponse) =>
            Buffer.from(ListDnsFirewallOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListDnsFirewallOperationsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified DNS firewall. */
    listAccessBindings: {
        path: '/yandex.cloud.dns.v1.DnsFirewallService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified DNS firewall. */
    setAccessBindings: {
        path: '/yandex.cloud.dns.v1.DnsFirewallService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetAccessBindingsRequest) =>
            Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates access bindings for the specified DNS firewall. */
    updateAccessBindings: {
        path: '/yandex.cloud.dns.v1.DnsFirewallService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface DnsFirewallServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified DNS firewall.
     * To get the list of all available DNS firewalls, make a [List] request.
     */
    get: handleUnaryCall<GetDnsFirewallRequest, DnsFirewall>;
    /** Retrieves the list of DNS firewalls in the specified folder. */
    list: handleUnaryCall<ListDnsFirewallsRequest, ListDnsFirewallsResponse>;
    /** Creates a DNS firewall in the specified folder. */
    create: handleUnaryCall<CreateDnsFirewallRequest, Operation>;
    /** Updates the specified DNS firewall. */
    update: handleUnaryCall<UpdateDnsFirewallRequest, Operation>;
    /** Moves the specified DNS firewall to another folder. */
    move: handleUnaryCall<MoveDnsFirewallRequest, Operation>;
    /** Deletes the specified DNS firewall. */
    delete: handleUnaryCall<DeleteDnsFirewallRequest, Operation>;
    /** Lists operations for the specified DNS firewall. */
    listOperations: handleUnaryCall<
        ListDnsFirewallOperationsRequest,
        ListDnsFirewallOperationsResponse
    >;
    /** Lists existing access bindings for the specified DNS firewall. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the specified DNS firewall. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified DNS firewall. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface DnsFirewallServiceClient extends Client {
    /**
     * Returns the specified DNS firewall.
     * To get the list of all available DNS firewalls, make a [List] request.
     */
    get(
        request: GetDnsFirewallRequest,
        callback: (error: ServiceError | null, response: DnsFirewall) => void,
    ): ClientUnaryCall;
    get(
        request: GetDnsFirewallRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: DnsFirewall) => void,
    ): ClientUnaryCall;
    get(
        request: GetDnsFirewallRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: DnsFirewall) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of DNS firewalls in the specified folder. */
    list(
        request: ListDnsFirewallsRequest,
        callback: (error: ServiceError | null, response: ListDnsFirewallsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListDnsFirewallsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListDnsFirewallsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListDnsFirewallsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListDnsFirewallsResponse) => void,
    ): ClientUnaryCall;
    /** Creates a DNS firewall in the specified folder. */
    create(
        request: CreateDnsFirewallRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateDnsFirewallRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateDnsFirewallRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified DNS firewall. */
    update(
        request: UpdateDnsFirewallRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateDnsFirewallRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateDnsFirewallRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Moves the specified DNS firewall to another folder. */
    move(
        request: MoveDnsFirewallRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    move(
        request: MoveDnsFirewallRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    move(
        request: MoveDnsFirewallRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified DNS firewall. */
    delete(
        request: DeleteDnsFirewallRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteDnsFirewallRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteDnsFirewallRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists operations for the specified DNS firewall. */
    listOperations(
        request: ListDnsFirewallOperationsRequest,
        callback: (error: ServiceError | null, response: ListDnsFirewallOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListDnsFirewallOperationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListDnsFirewallOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListDnsFirewallOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListDnsFirewallOperationsResponse) => void,
    ): ClientUnaryCall;
    /** Lists existing access bindings for the specified DNS firewall. */
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
    /** Sets access bindings for the specified DNS firewall. */
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
    /** Updates access bindings for the specified DNS firewall. */
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

export const DnsFirewallServiceClient = makeGenericClientConstructor(
    DnsFirewallServiceService,
    'yandex.cloud.dns.v1.DnsFirewallService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): DnsFirewallServiceClient;
    service: typeof DnsFirewallServiceService;
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
