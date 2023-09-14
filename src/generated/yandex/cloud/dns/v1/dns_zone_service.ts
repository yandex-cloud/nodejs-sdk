/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
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
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import {
  PrivateVisibility,
  PublicVisibility,
  DnsZone,
  RecordSet,
} from "../../../../yandex/cloud/dns/v1/dns_zone";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import {
  ListAccessBindingsRequest,
  ListAccessBindingsResponse,
  SetAccessBindingsRequest,
  UpdateAccessBindingsRequest,
} from "../../../../yandex/cloud/access/access";

export const protobufPackage = "yandex.cloud.dns.v1";

export interface UpdateDnsZonePrivateNetworksRequest {
  $type: "yandex.cloud.dns.v1.UpdateDnsZonePrivateNetworksRequest";
  /** ID of the DNS zone which private networks will be updated */
  dnsZoneId: string;
  /** Network IDs to remove */
  privateNetworkIdAdditions: string[];
  /** Network IDs to add */
  privateNetworkIdDeletions: string[];
}

export interface UpdateDnsZonePrivateNetworksMetadata {
  $type: "yandex.cloud.dns.v1.UpdateDnsZonePrivateNetworksMetadata";
  /** ID of the DNS zone which private networks was updated */
  dnsZoneId: string;
}

export interface GetDnsZoneRequest {
  $type: "yandex.cloud.dns.v1.GetDnsZoneRequest";
  /**
   * ID of the DNS zone to return.
   *
   * To get a DNS zone ID, make a [DnsZoneService.List] request.
   */
  dnsZoneId: string;
}

export interface ListDnsZonesRequest {
  $type: "yandex.cloud.dns.v1.ListDnsZonesRequest";
  /**
   * ID of the folder to list DNS zones in.
   *
   * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListDnsZonesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListDnsZonesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters DNS zones listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on the [DnsZone.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name=my-dns-zone`.
   */
  filter: string;
}

export interface ListDnsZonesResponse {
  $type: "yandex.cloud.dns.v1.ListDnsZonesResponse";
  /** List of DNS zones in the specified folder. */
  dnsZones: DnsZone[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListDnsZonesRequest.page_size], use `next_page_token` as the value
   * for the [ListDnsZonesRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateDnsZoneRequest {
  $type: "yandex.cloud.dns.v1.CreateDnsZoneRequest";
  /**
   * ID of the folder to create DNS zones in.
   *
   * To get a folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the DNS zone.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the DNS zone. */
  description: string;
  /** DNS zone labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** DNS zone suffix. */
  zone: string;
  /**
   * Privately visible zone settings.
   * At least one of two visibility fields must be set.
   */
  privateVisibility?: PrivateVisibility;
  /**
   * Publicly visible zone settings.
   * At least one of two visibility fields must be set.
   */
  publicVisibility?: PublicVisibility;
}

export interface CreateDnsZoneRequest_LabelsEntry {
  $type: "yandex.cloud.dns.v1.CreateDnsZoneRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateDnsZoneMetadata {
  $type: "yandex.cloud.dns.v1.CreateDnsZoneMetadata";
  /** ID of the DNS zone that is being created. */
  dnsZoneId: string;
}

export interface UpdateDnsZoneRequest {
  $type: "yandex.cloud.dns.v1.UpdateDnsZoneRequest";
  /**
   * ID of the DNS zone to update.
   *
   * To get the DNS zone ID, make a [DnsZoneService.List] request.
   */
  dnsZoneId: string;
  /** Field mask specifying which fields of the DNS zone resource are going to be updated. */
  updateMask?: FieldMask;
  /**
   * New name for the DNS zone.
   * The name must be unique within the folder.
   */
  name: string;
  /** New description of the DNS zone. */
  description: string;
  /**
   * DNS zone labels as `key:value` pairs.
   *
   * Existing set of labels is completely replaced by the provided set, so if you just want
   * to add or remove a label:
   * 1. Get the current set of labels with a [DnsZoneService.Get] request.
   * 2. Add or remove a label in this set.
   * 3. Send the new set in this field.
   */
  labels: { [key: string]: string };
  /** Change network IDs for private visibility. */
  privateVisibility?: PrivateVisibility;
  /** Public visibility configuration. */
  publicVisibility?: PublicVisibility;
}

export interface UpdateDnsZoneRequest_LabelsEntry {
  $type: "yandex.cloud.dns.v1.UpdateDnsZoneRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateDnsZoneMetadata {
  $type: "yandex.cloud.dns.v1.UpdateDnsZoneMetadata";
  /** ID of the DNS zone that is being updated. */
  dnsZoneId: string;
}

export interface DeleteDnsZoneRequest {
  $type: "yandex.cloud.dns.v1.DeleteDnsZoneRequest";
  /**
   * ID of the DNS zone to delete.
   *
   * To get a DNS zone ID, make a [DnsZoneService.List] request.
   */
  dnsZoneId: string;
}

export interface DeleteDnsZoneMetadata {
  $type: "yandex.cloud.dns.v1.DeleteDnsZoneMetadata";
  /** ID of the DNS zone that is being deleted. */
  dnsZoneId: string;
}

export interface GetDnsZoneRecordSetRequest {
  $type: "yandex.cloud.dns.v1.GetDnsZoneRecordSetRequest";
  /**
   * ID of the DNS zone to get record set from.
   *
   * To get a DNS zone ID, make a [DnsZoneService.List] request.
   */
  dnsZoneId: string;
  /** Name of the record set. */
  name: string;
  /** Type of the record set. */
  type: string;
}

export interface ListDnsZoneRecordSetsRequest {
  $type: "yandex.cloud.dns.v1.ListDnsZoneRecordSetsRequest";
  /**
   * ID of the DNS zone to list record sets in.
   *
   * To get a DNS zone ID, make a [DnsZoneService.List] request.
   */
  dnsZoneId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListDnsZoneRecordSetsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListDnsZoneRecordSetsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters record sets listed in the response. The expression consists of one or more conditions united by `AND` operator: `<condition1> [AND <condition2> [<...> AND <conditionN>]]`.
   *
   * Each condition has the form `<field> <operator> <value>`, where:
   * 1. `<field>` is the field name. Currently you can use filtering only on the [RecordSet.name] and [RecordSet.type] fields.
   * 2. `<operator>` is a logical operator, one of `=`, `!=`, `IN`, `NOT IN`.
   * 3. `<value>` represents a value.
   * 3.1. In case of single value condition (`=` or `!=`), the value is a string in double (`"`) or single (`'`) quotes. C-style escape sequences are supported (`\"` turns to `"`, `\'` to `'`, `\\` to backslash).
   * 3.2. In case of a list of values condition (`IN` or `NOT IN`), the value is `(<string1>, <string2>, .., <stringN>)`, where `<string>` is a string in double (`"`) or single (`'`) quotes.
   *
   * Examples of a filter: `name="my-record-set"`, `type IN ("MX","A") AND name="works.on.my.machine."`.
   */
  filter: string;
}

export interface ListDnsZoneRecordSetsResponse {
  $type: "yandex.cloud.dns.v1.ListDnsZoneRecordSetsResponse";
  /** List of record sets in the specified DNS zone. */
  recordSets: RecordSet[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListDnsZoneRecordSetsRequest.page_size], use `next_page_token` as the value
   * for the [ListDnsZoneRecordSetsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface UpdateRecordSetsRequest {
  $type: "yandex.cloud.dns.v1.UpdateRecordSetsRequest";
  /**
   * ID of the DNS zone to update record sets in.
   *
   * To get a DNS zone ID, make a [DnsZoneService.List] request.
   */
  dnsZoneId: string;
  /** List of record sets to delete. */
  deletions: RecordSet[];
  /** List of record sets to add. */
  additions: RecordSet[];
}

export interface UpdateRecordSetsMetadata {
  $type: "yandex.cloud.dns.v1.UpdateRecordSetsMetadata";
}

export interface UpsertRecordSetsRequest {
  $type: "yandex.cloud.dns.v1.UpsertRecordSetsRequest";
  /**
   * ID of the DNS zone to upsert record sets to.
   *
   * To get a DNS zone ID, make a [DnsZoneService.List] request.
   */
  dnsZoneId: string;
  /** Delete only specified records from corresponding record sets. */
  deletions: RecordSet[];
  /** Entirely replace specified record sets. */
  replacements: RecordSet[];
  /** Replace specified records or add new ones if no such record sets exists. */
  merges: RecordSet[];
}

export interface UpsertRecordSetsMetadata {
  $type: "yandex.cloud.dns.v1.UpsertRecordSetsMetadata";
}

export interface RecordSetDiff {
  $type: "yandex.cloud.dns.v1.RecordSetDiff";
  /** List of record sets that were added */
  additions: RecordSet[];
  /** List of record sets that were deleted */
  deletions: RecordSet[];
}

export interface ListDnsZoneOperationsRequest {
  $type: "yandex.cloud.dns.v1.ListDnsZoneOperationsRequest";
  /**
   * ID of the DNS zone to list operations for.
   *
   * To get a DNS zone ID, make a [DnsZoneService.List] request.
   */
  dnsZoneId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListDnsZoneOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListDnsZoneOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters DNS zones listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on the [DnsZone.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name=my-dns-zone`.
   */
  filter: string;
}

export interface ListDnsZoneOperationsResponse {
  $type: "yandex.cloud.dns.v1.ListDnsZoneOperationsResponse";
  /** List of operations for the specified DNS zone. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListDnsZoneOperationsRequest.page_size], use `next_page_token` as the value
   * for the [ListDnsZoneOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

const baseUpdateDnsZonePrivateNetworksRequest: object = {
  $type: "yandex.cloud.dns.v1.UpdateDnsZonePrivateNetworksRequest",
  dnsZoneId: "",
  privateNetworkIdAdditions: "",
  privateNetworkIdDeletions: "",
};

export const UpdateDnsZonePrivateNetworksRequest = {
  $type: "yandex.cloud.dns.v1.UpdateDnsZonePrivateNetworksRequest" as const,

  encode(
    message: UpdateDnsZonePrivateNetworksRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dnsZoneId !== "") {
      writer.uint32(10).string(message.dnsZoneId);
    }
    for (const v of message.privateNetworkIdAdditions) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.privateNetworkIdDeletions) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateDnsZonePrivateNetworksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateDnsZonePrivateNetworksRequest,
    } as UpdateDnsZonePrivateNetworksRequest;
    message.privateNetworkIdAdditions = [];
    message.privateNetworkIdDeletions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dnsZoneId = reader.string();
          break;
        case 2:
          message.privateNetworkIdAdditions.push(reader.string());
          break;
        case 3:
          message.privateNetworkIdDeletions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateDnsZonePrivateNetworksRequest {
    const message = {
      ...baseUpdateDnsZonePrivateNetworksRequest,
    } as UpdateDnsZonePrivateNetworksRequest;
    message.dnsZoneId =
      object.dnsZoneId !== undefined && object.dnsZoneId !== null
        ? String(object.dnsZoneId)
        : "";
    message.privateNetworkIdAdditions = (
      object.privateNetworkIdAdditions ?? []
    ).map((e: any) => String(e));
    message.privateNetworkIdDeletions = (
      object.privateNetworkIdDeletions ?? []
    ).map((e: any) => String(e));
    return message;
  },

  toJSON(message: UpdateDnsZonePrivateNetworksRequest): unknown {
    const obj: any = {};
    message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
    if (message.privateNetworkIdAdditions) {
      obj.privateNetworkIdAdditions = message.privateNetworkIdAdditions.map(
        (e) => e
      );
    } else {
      obj.privateNetworkIdAdditions = [];
    }
    if (message.privateNetworkIdDeletions) {
      obj.privateNetworkIdDeletions = message.privateNetworkIdDeletions.map(
        (e) => e
      );
    } else {
      obj.privateNetworkIdDeletions = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateDnsZonePrivateNetworksRequest>, I>
  >(object: I): UpdateDnsZonePrivateNetworksRequest {
    const message = {
      ...baseUpdateDnsZonePrivateNetworksRequest,
    } as UpdateDnsZonePrivateNetworksRequest;
    message.dnsZoneId = object.dnsZoneId ?? "";
    message.privateNetworkIdAdditions =
      object.privateNetworkIdAdditions?.map((e) => e) || [];
    message.privateNetworkIdDeletions =
      object.privateNetworkIdDeletions?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  UpdateDnsZonePrivateNetworksRequest.$type,
  UpdateDnsZonePrivateNetworksRequest
);

const baseUpdateDnsZonePrivateNetworksMetadata: object = {
  $type: "yandex.cloud.dns.v1.UpdateDnsZonePrivateNetworksMetadata",
  dnsZoneId: "",
};

export const UpdateDnsZonePrivateNetworksMetadata = {
  $type: "yandex.cloud.dns.v1.UpdateDnsZonePrivateNetworksMetadata" as const,

  encode(
    message: UpdateDnsZonePrivateNetworksMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dnsZoneId !== "") {
      writer.uint32(10).string(message.dnsZoneId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateDnsZonePrivateNetworksMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateDnsZonePrivateNetworksMetadata,
    } as UpdateDnsZonePrivateNetworksMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dnsZoneId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateDnsZonePrivateNetworksMetadata {
    const message = {
      ...baseUpdateDnsZonePrivateNetworksMetadata,
    } as UpdateDnsZonePrivateNetworksMetadata;
    message.dnsZoneId =
      object.dnsZoneId !== undefined && object.dnsZoneId !== null
        ? String(object.dnsZoneId)
        : "";
    return message;
  },

  toJSON(message: UpdateDnsZonePrivateNetworksMetadata): unknown {
    const obj: any = {};
    message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateDnsZonePrivateNetworksMetadata>, I>
  >(object: I): UpdateDnsZonePrivateNetworksMetadata {
    const message = {
      ...baseUpdateDnsZonePrivateNetworksMetadata,
    } as UpdateDnsZonePrivateNetworksMetadata;
    message.dnsZoneId = object.dnsZoneId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateDnsZonePrivateNetworksMetadata.$type,
  UpdateDnsZonePrivateNetworksMetadata
);

const baseGetDnsZoneRequest: object = {
  $type: "yandex.cloud.dns.v1.GetDnsZoneRequest",
  dnsZoneId: "",
};

export const GetDnsZoneRequest = {
  $type: "yandex.cloud.dns.v1.GetDnsZoneRequest" as const,

  encode(
    message: GetDnsZoneRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dnsZoneId !== "") {
      writer.uint32(10).string(message.dnsZoneId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDnsZoneRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetDnsZoneRequest } as GetDnsZoneRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dnsZoneId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetDnsZoneRequest {
    const message = { ...baseGetDnsZoneRequest } as GetDnsZoneRequest;
    message.dnsZoneId =
      object.dnsZoneId !== undefined && object.dnsZoneId !== null
        ? String(object.dnsZoneId)
        : "";
    return message;
  },

  toJSON(message: GetDnsZoneRequest): unknown {
    const obj: any = {};
    message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetDnsZoneRequest>, I>>(
    object: I
  ): GetDnsZoneRequest {
    const message = { ...baseGetDnsZoneRequest } as GetDnsZoneRequest;
    message.dnsZoneId = object.dnsZoneId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetDnsZoneRequest.$type, GetDnsZoneRequest);

const baseListDnsZonesRequest: object = {
  $type: "yandex.cloud.dns.v1.ListDnsZonesRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListDnsZonesRequest = {
  $type: "yandex.cloud.dns.v1.ListDnsZonesRequest" as const,

  encode(
    message: ListDnsZonesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(34).string(message.filter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDnsZonesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListDnsZonesRequest } as ListDnsZonesRequest;
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

  fromJSON(object: any): ListDnsZonesRequest {
    const message = { ...baseListDnsZonesRequest } as ListDnsZonesRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? String(object.filter)
        : "";
    return message;
  },

  toJSON(message: ListDnsZonesRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListDnsZonesRequest>, I>>(
    object: I
  ): ListDnsZonesRequest {
    const message = { ...baseListDnsZonesRequest } as ListDnsZonesRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDnsZonesRequest.$type, ListDnsZonesRequest);

const baseListDnsZonesResponse: object = {
  $type: "yandex.cloud.dns.v1.ListDnsZonesResponse",
  nextPageToken: "",
};

export const ListDnsZonesResponse = {
  $type: "yandex.cloud.dns.v1.ListDnsZonesResponse" as const,

  encode(
    message: ListDnsZonesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.dnsZones) {
      DnsZone.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListDnsZonesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListDnsZonesResponse } as ListDnsZonesResponse;
    message.dnsZones = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dnsZones.push(DnsZone.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListDnsZonesResponse {
    const message = { ...baseListDnsZonesResponse } as ListDnsZonesResponse;
    message.dnsZones = (object.dnsZones ?? []).map((e: any) =>
      DnsZone.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListDnsZonesResponse): unknown {
    const obj: any = {};
    if (message.dnsZones) {
      obj.dnsZones = message.dnsZones.map((e) =>
        e ? DnsZone.toJSON(e) : undefined
      );
    } else {
      obj.dnsZones = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListDnsZonesResponse>, I>>(
    object: I
  ): ListDnsZonesResponse {
    const message = { ...baseListDnsZonesResponse } as ListDnsZonesResponse;
    message.dnsZones =
      object.dnsZones?.map((e) => DnsZone.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDnsZonesResponse.$type, ListDnsZonesResponse);

const baseCreateDnsZoneRequest: object = {
  $type: "yandex.cloud.dns.v1.CreateDnsZoneRequest",
  folderId: "",
  name: "",
  description: "",
  zone: "",
};

export const CreateDnsZoneRequest = {
  $type: "yandex.cloud.dns.v1.CreateDnsZoneRequest" as const,

  encode(
    message: CreateDnsZoneRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateDnsZoneRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.dns.v1.CreateDnsZoneRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.zone !== "") {
      writer.uint32(42).string(message.zone);
    }
    if (message.privateVisibility !== undefined) {
      PrivateVisibility.encode(
        message.privateVisibility,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.publicVisibility !== undefined) {
      PublicVisibility.encode(
        message.publicVisibility,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateDnsZoneRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateDnsZoneRequest } as CreateDnsZoneRequest;
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
          const entry4 = CreateDnsZoneRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.zone = reader.string();
          break;
        case 6:
          message.privateVisibility = PrivateVisibility.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.publicVisibility = PublicVisibility.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateDnsZoneRequest {
    const message = { ...baseCreateDnsZoneRequest } as CreateDnsZoneRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.zone =
      object.zone !== undefined && object.zone !== null
        ? String(object.zone)
        : "";
    message.privateVisibility =
      object.privateVisibility !== undefined &&
      object.privateVisibility !== null
        ? PrivateVisibility.fromJSON(object.privateVisibility)
        : undefined;
    message.publicVisibility =
      object.publicVisibility !== undefined && object.publicVisibility !== null
        ? PublicVisibility.fromJSON(object.publicVisibility)
        : undefined;
    return message;
  },

  toJSON(message: CreateDnsZoneRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.zone !== undefined && (obj.zone = message.zone);
    message.privateVisibility !== undefined &&
      (obj.privateVisibility = message.privateVisibility
        ? PrivateVisibility.toJSON(message.privateVisibility)
        : undefined);
    message.publicVisibility !== undefined &&
      (obj.publicVisibility = message.publicVisibility
        ? PublicVisibility.toJSON(message.publicVisibility)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateDnsZoneRequest>, I>>(
    object: I
  ): CreateDnsZoneRequest {
    const message = { ...baseCreateDnsZoneRequest } as CreateDnsZoneRequest;
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.zone = object.zone ?? "";
    message.privateVisibility =
      object.privateVisibility !== undefined &&
      object.privateVisibility !== null
        ? PrivateVisibility.fromPartial(object.privateVisibility)
        : undefined;
    message.publicVisibility =
      object.publicVisibility !== undefined && object.publicVisibility !== null
        ? PublicVisibility.fromPartial(object.publicVisibility)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateDnsZoneRequest.$type, CreateDnsZoneRequest);

const baseCreateDnsZoneRequest_LabelsEntry: object = {
  $type: "yandex.cloud.dns.v1.CreateDnsZoneRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateDnsZoneRequest_LabelsEntry = {
  $type: "yandex.cloud.dns.v1.CreateDnsZoneRequest.LabelsEntry" as const,

  encode(
    message: CreateDnsZoneRequest_LabelsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateDnsZoneRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateDnsZoneRequest_LabelsEntry,
    } as CreateDnsZoneRequest_LabelsEntry;
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

  fromJSON(object: any): CreateDnsZoneRequest_LabelsEntry {
    const message = {
      ...baseCreateDnsZoneRequest_LabelsEntry,
    } as CreateDnsZoneRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateDnsZoneRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateDnsZoneRequest_LabelsEntry>, I>
  >(object: I): CreateDnsZoneRequest_LabelsEntry {
    const message = {
      ...baseCreateDnsZoneRequest_LabelsEntry,
    } as CreateDnsZoneRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateDnsZoneRequest_LabelsEntry.$type,
  CreateDnsZoneRequest_LabelsEntry
);

const baseCreateDnsZoneMetadata: object = {
  $type: "yandex.cloud.dns.v1.CreateDnsZoneMetadata",
  dnsZoneId: "",
};

export const CreateDnsZoneMetadata = {
  $type: "yandex.cloud.dns.v1.CreateDnsZoneMetadata" as const,

  encode(
    message: CreateDnsZoneMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dnsZoneId !== "") {
      writer.uint32(10).string(message.dnsZoneId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateDnsZoneMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateDnsZoneMetadata } as CreateDnsZoneMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dnsZoneId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateDnsZoneMetadata {
    const message = { ...baseCreateDnsZoneMetadata } as CreateDnsZoneMetadata;
    message.dnsZoneId =
      object.dnsZoneId !== undefined && object.dnsZoneId !== null
        ? String(object.dnsZoneId)
        : "";
    return message;
  },

  toJSON(message: CreateDnsZoneMetadata): unknown {
    const obj: any = {};
    message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateDnsZoneMetadata>, I>>(
    object: I
  ): CreateDnsZoneMetadata {
    const message = { ...baseCreateDnsZoneMetadata } as CreateDnsZoneMetadata;
    message.dnsZoneId = object.dnsZoneId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateDnsZoneMetadata.$type, CreateDnsZoneMetadata);

const baseUpdateDnsZoneRequest: object = {
  $type: "yandex.cloud.dns.v1.UpdateDnsZoneRequest",
  dnsZoneId: "",
  name: "",
  description: "",
};

export const UpdateDnsZoneRequest = {
  $type: "yandex.cloud.dns.v1.UpdateDnsZoneRequest" as const,

  encode(
    message: UpdateDnsZoneRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dnsZoneId !== "") {
      writer.uint32(10).string(message.dnsZoneId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateDnsZoneRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.dns.v1.UpdateDnsZoneRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.privateVisibility !== undefined) {
      PrivateVisibility.encode(
        message.privateVisibility,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.publicVisibility !== undefined) {
      PublicVisibility.encode(
        message.publicVisibility,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateDnsZoneRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateDnsZoneRequest } as UpdateDnsZoneRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dnsZoneId = reader.string();
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
          const entry5 = UpdateDnsZoneRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.privateVisibility = PrivateVisibility.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.publicVisibility = PublicVisibility.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateDnsZoneRequest {
    const message = { ...baseUpdateDnsZoneRequest } as UpdateDnsZoneRequest;
    message.dnsZoneId =
      object.dnsZoneId !== undefined && object.dnsZoneId !== null
        ? String(object.dnsZoneId)
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.privateVisibility =
      object.privateVisibility !== undefined &&
      object.privateVisibility !== null
        ? PrivateVisibility.fromJSON(object.privateVisibility)
        : undefined;
    message.publicVisibility =
      object.publicVisibility !== undefined && object.publicVisibility !== null
        ? PublicVisibility.fromJSON(object.publicVisibility)
        : undefined;
    return message;
  },

  toJSON(message: UpdateDnsZoneRequest): unknown {
    const obj: any = {};
    message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.privateVisibility !== undefined &&
      (obj.privateVisibility = message.privateVisibility
        ? PrivateVisibility.toJSON(message.privateVisibility)
        : undefined);
    message.publicVisibility !== undefined &&
      (obj.publicVisibility = message.publicVisibility
        ? PublicVisibility.toJSON(message.publicVisibility)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateDnsZoneRequest>, I>>(
    object: I
  ): UpdateDnsZoneRequest {
    const message = { ...baseUpdateDnsZoneRequest } as UpdateDnsZoneRequest;
    message.dnsZoneId = object.dnsZoneId ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.privateVisibility =
      object.privateVisibility !== undefined &&
      object.privateVisibility !== null
        ? PrivateVisibility.fromPartial(object.privateVisibility)
        : undefined;
    message.publicVisibility =
      object.publicVisibility !== undefined && object.publicVisibility !== null
        ? PublicVisibility.fromPartial(object.publicVisibility)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateDnsZoneRequest.$type, UpdateDnsZoneRequest);

const baseUpdateDnsZoneRequest_LabelsEntry: object = {
  $type: "yandex.cloud.dns.v1.UpdateDnsZoneRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateDnsZoneRequest_LabelsEntry = {
  $type: "yandex.cloud.dns.v1.UpdateDnsZoneRequest.LabelsEntry" as const,

  encode(
    message: UpdateDnsZoneRequest_LabelsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateDnsZoneRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateDnsZoneRequest_LabelsEntry,
    } as UpdateDnsZoneRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateDnsZoneRequest_LabelsEntry {
    const message = {
      ...baseUpdateDnsZoneRequest_LabelsEntry,
    } as UpdateDnsZoneRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateDnsZoneRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateDnsZoneRequest_LabelsEntry>, I>
  >(object: I): UpdateDnsZoneRequest_LabelsEntry {
    const message = {
      ...baseUpdateDnsZoneRequest_LabelsEntry,
    } as UpdateDnsZoneRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateDnsZoneRequest_LabelsEntry.$type,
  UpdateDnsZoneRequest_LabelsEntry
);

const baseUpdateDnsZoneMetadata: object = {
  $type: "yandex.cloud.dns.v1.UpdateDnsZoneMetadata",
  dnsZoneId: "",
};

export const UpdateDnsZoneMetadata = {
  $type: "yandex.cloud.dns.v1.UpdateDnsZoneMetadata" as const,

  encode(
    message: UpdateDnsZoneMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dnsZoneId !== "") {
      writer.uint32(10).string(message.dnsZoneId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateDnsZoneMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateDnsZoneMetadata } as UpdateDnsZoneMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dnsZoneId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateDnsZoneMetadata {
    const message = { ...baseUpdateDnsZoneMetadata } as UpdateDnsZoneMetadata;
    message.dnsZoneId =
      object.dnsZoneId !== undefined && object.dnsZoneId !== null
        ? String(object.dnsZoneId)
        : "";
    return message;
  },

  toJSON(message: UpdateDnsZoneMetadata): unknown {
    const obj: any = {};
    message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateDnsZoneMetadata>, I>>(
    object: I
  ): UpdateDnsZoneMetadata {
    const message = { ...baseUpdateDnsZoneMetadata } as UpdateDnsZoneMetadata;
    message.dnsZoneId = object.dnsZoneId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateDnsZoneMetadata.$type, UpdateDnsZoneMetadata);

const baseDeleteDnsZoneRequest: object = {
  $type: "yandex.cloud.dns.v1.DeleteDnsZoneRequest",
  dnsZoneId: "",
};

export const DeleteDnsZoneRequest = {
  $type: "yandex.cloud.dns.v1.DeleteDnsZoneRequest" as const,

  encode(
    message: DeleteDnsZoneRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dnsZoneId !== "") {
      writer.uint32(10).string(message.dnsZoneId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteDnsZoneRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteDnsZoneRequest } as DeleteDnsZoneRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dnsZoneId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteDnsZoneRequest {
    const message = { ...baseDeleteDnsZoneRequest } as DeleteDnsZoneRequest;
    message.dnsZoneId =
      object.dnsZoneId !== undefined && object.dnsZoneId !== null
        ? String(object.dnsZoneId)
        : "";
    return message;
  },

  toJSON(message: DeleteDnsZoneRequest): unknown {
    const obj: any = {};
    message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteDnsZoneRequest>, I>>(
    object: I
  ): DeleteDnsZoneRequest {
    const message = { ...baseDeleteDnsZoneRequest } as DeleteDnsZoneRequest;
    message.dnsZoneId = object.dnsZoneId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteDnsZoneRequest.$type, DeleteDnsZoneRequest);

const baseDeleteDnsZoneMetadata: object = {
  $type: "yandex.cloud.dns.v1.DeleteDnsZoneMetadata",
  dnsZoneId: "",
};

export const DeleteDnsZoneMetadata = {
  $type: "yandex.cloud.dns.v1.DeleteDnsZoneMetadata" as const,

  encode(
    message: DeleteDnsZoneMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dnsZoneId !== "") {
      writer.uint32(10).string(message.dnsZoneId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteDnsZoneMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteDnsZoneMetadata } as DeleteDnsZoneMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dnsZoneId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteDnsZoneMetadata {
    const message = { ...baseDeleteDnsZoneMetadata } as DeleteDnsZoneMetadata;
    message.dnsZoneId =
      object.dnsZoneId !== undefined && object.dnsZoneId !== null
        ? String(object.dnsZoneId)
        : "";
    return message;
  },

  toJSON(message: DeleteDnsZoneMetadata): unknown {
    const obj: any = {};
    message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteDnsZoneMetadata>, I>>(
    object: I
  ): DeleteDnsZoneMetadata {
    const message = { ...baseDeleteDnsZoneMetadata } as DeleteDnsZoneMetadata;
    message.dnsZoneId = object.dnsZoneId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteDnsZoneMetadata.$type, DeleteDnsZoneMetadata);

const baseGetDnsZoneRecordSetRequest: object = {
  $type: "yandex.cloud.dns.v1.GetDnsZoneRecordSetRequest",
  dnsZoneId: "",
  name: "",
  type: "",
};

export const GetDnsZoneRecordSetRequest = {
  $type: "yandex.cloud.dns.v1.GetDnsZoneRecordSetRequest" as const,

  encode(
    message: GetDnsZoneRecordSetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dnsZoneId !== "") {
      writer.uint32(10).string(message.dnsZoneId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetDnsZoneRecordSetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetDnsZoneRecordSetRequest,
    } as GetDnsZoneRecordSetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dnsZoneId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetDnsZoneRecordSetRequest {
    const message = {
      ...baseGetDnsZoneRecordSetRequest,
    } as GetDnsZoneRecordSetRequest;
    message.dnsZoneId =
      object.dnsZoneId !== undefined && object.dnsZoneId !== null
        ? String(object.dnsZoneId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: GetDnsZoneRecordSetRequest): unknown {
    const obj: any = {};
    message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetDnsZoneRecordSetRequest>, I>>(
    object: I
  ): GetDnsZoneRecordSetRequest {
    const message = {
      ...baseGetDnsZoneRecordSetRequest,
    } as GetDnsZoneRecordSetRequest;
    message.dnsZoneId = object.dnsZoneId ?? "";
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  GetDnsZoneRecordSetRequest.$type,
  GetDnsZoneRecordSetRequest
);

const baseListDnsZoneRecordSetsRequest: object = {
  $type: "yandex.cloud.dns.v1.ListDnsZoneRecordSetsRequest",
  dnsZoneId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListDnsZoneRecordSetsRequest = {
  $type: "yandex.cloud.dns.v1.ListDnsZoneRecordSetsRequest" as const,

  encode(
    message: ListDnsZoneRecordSetsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dnsZoneId !== "") {
      writer.uint32(10).string(message.dnsZoneId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(34).string(message.filter);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListDnsZoneRecordSetsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDnsZoneRecordSetsRequest,
    } as ListDnsZoneRecordSetsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dnsZoneId = reader.string();
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

  fromJSON(object: any): ListDnsZoneRecordSetsRequest {
    const message = {
      ...baseListDnsZoneRecordSetsRequest,
    } as ListDnsZoneRecordSetsRequest;
    message.dnsZoneId =
      object.dnsZoneId !== undefined && object.dnsZoneId !== null
        ? String(object.dnsZoneId)
        : "";
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? String(object.filter)
        : "";
    return message;
  },

  toJSON(message: ListDnsZoneRecordSetsRequest): unknown {
    const obj: any = {};
    message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListDnsZoneRecordSetsRequest>, I>>(
    object: I
  ): ListDnsZoneRecordSetsRequest {
    const message = {
      ...baseListDnsZoneRecordSetsRequest,
    } as ListDnsZoneRecordSetsRequest;
    message.dnsZoneId = object.dnsZoneId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListDnsZoneRecordSetsRequest.$type,
  ListDnsZoneRecordSetsRequest
);

const baseListDnsZoneRecordSetsResponse: object = {
  $type: "yandex.cloud.dns.v1.ListDnsZoneRecordSetsResponse",
  nextPageToken: "",
};

export const ListDnsZoneRecordSetsResponse = {
  $type: "yandex.cloud.dns.v1.ListDnsZoneRecordSetsResponse" as const,

  encode(
    message: ListDnsZoneRecordSetsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.recordSets) {
      RecordSet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListDnsZoneRecordSetsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDnsZoneRecordSetsResponse,
    } as ListDnsZoneRecordSetsResponse;
    message.recordSets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordSets.push(RecordSet.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListDnsZoneRecordSetsResponse {
    const message = {
      ...baseListDnsZoneRecordSetsResponse,
    } as ListDnsZoneRecordSetsResponse;
    message.recordSets = (object.recordSets ?? []).map((e: any) =>
      RecordSet.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListDnsZoneRecordSetsResponse): unknown {
    const obj: any = {};
    if (message.recordSets) {
      obj.recordSets = message.recordSets.map((e) =>
        e ? RecordSet.toJSON(e) : undefined
      );
    } else {
      obj.recordSets = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListDnsZoneRecordSetsResponse>, I>>(
    object: I
  ): ListDnsZoneRecordSetsResponse {
    const message = {
      ...baseListDnsZoneRecordSetsResponse,
    } as ListDnsZoneRecordSetsResponse;
    message.recordSets =
      object.recordSets?.map((e) => RecordSet.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListDnsZoneRecordSetsResponse.$type,
  ListDnsZoneRecordSetsResponse
);

const baseUpdateRecordSetsRequest: object = {
  $type: "yandex.cloud.dns.v1.UpdateRecordSetsRequest",
  dnsZoneId: "",
};

export const UpdateRecordSetsRequest = {
  $type: "yandex.cloud.dns.v1.UpdateRecordSetsRequest" as const,

  encode(
    message: UpdateRecordSetsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dnsZoneId !== "") {
      writer.uint32(10).string(message.dnsZoneId);
    }
    for (const v of message.deletions) {
      RecordSet.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.additions) {
      RecordSet.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateRecordSetsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateRecordSetsRequest,
    } as UpdateRecordSetsRequest;
    message.deletions = [];
    message.additions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dnsZoneId = reader.string();
          break;
        case 2:
          message.deletions.push(RecordSet.decode(reader, reader.uint32()));
          break;
        case 3:
          message.additions.push(RecordSet.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateRecordSetsRequest {
    const message = {
      ...baseUpdateRecordSetsRequest,
    } as UpdateRecordSetsRequest;
    message.dnsZoneId =
      object.dnsZoneId !== undefined && object.dnsZoneId !== null
        ? String(object.dnsZoneId)
        : "";
    message.deletions = (object.deletions ?? []).map((e: any) =>
      RecordSet.fromJSON(e)
    );
    message.additions = (object.additions ?? []).map((e: any) =>
      RecordSet.fromJSON(e)
    );
    return message;
  },

  toJSON(message: UpdateRecordSetsRequest): unknown {
    const obj: any = {};
    message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
    if (message.deletions) {
      obj.deletions = message.deletions.map((e) =>
        e ? RecordSet.toJSON(e) : undefined
      );
    } else {
      obj.deletions = [];
    }
    if (message.additions) {
      obj.additions = message.additions.map((e) =>
        e ? RecordSet.toJSON(e) : undefined
      );
    } else {
      obj.additions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateRecordSetsRequest>, I>>(
    object: I
  ): UpdateRecordSetsRequest {
    const message = {
      ...baseUpdateRecordSetsRequest,
    } as UpdateRecordSetsRequest;
    message.dnsZoneId = object.dnsZoneId ?? "";
    message.deletions =
      object.deletions?.map((e) => RecordSet.fromPartial(e)) || [];
    message.additions =
      object.additions?.map((e) => RecordSet.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(UpdateRecordSetsRequest.$type, UpdateRecordSetsRequest);

const baseUpdateRecordSetsMetadata: object = {
  $type: "yandex.cloud.dns.v1.UpdateRecordSetsMetadata",
};

export const UpdateRecordSetsMetadata = {
  $type: "yandex.cloud.dns.v1.UpdateRecordSetsMetadata" as const,

  encode(
    _: UpdateRecordSetsMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateRecordSetsMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateRecordSetsMetadata,
    } as UpdateRecordSetsMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): UpdateRecordSetsMetadata {
    const message = {
      ...baseUpdateRecordSetsMetadata,
    } as UpdateRecordSetsMetadata;
    return message;
  },

  toJSON(_: UpdateRecordSetsMetadata): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateRecordSetsMetadata>, I>>(
    _: I
  ): UpdateRecordSetsMetadata {
    const message = {
      ...baseUpdateRecordSetsMetadata,
    } as UpdateRecordSetsMetadata;
    return message;
  },
};

messageTypeRegistry.set(
  UpdateRecordSetsMetadata.$type,
  UpdateRecordSetsMetadata
);

const baseUpsertRecordSetsRequest: object = {
  $type: "yandex.cloud.dns.v1.UpsertRecordSetsRequest",
  dnsZoneId: "",
};

export const UpsertRecordSetsRequest = {
  $type: "yandex.cloud.dns.v1.UpsertRecordSetsRequest" as const,

  encode(
    message: UpsertRecordSetsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dnsZoneId !== "") {
      writer.uint32(10).string(message.dnsZoneId);
    }
    for (const v of message.deletions) {
      RecordSet.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.replacements) {
      RecordSet.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.merges) {
      RecordSet.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpsertRecordSetsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpsertRecordSetsRequest,
    } as UpsertRecordSetsRequest;
    message.deletions = [];
    message.replacements = [];
    message.merges = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dnsZoneId = reader.string();
          break;
        case 2:
          message.deletions.push(RecordSet.decode(reader, reader.uint32()));
          break;
        case 3:
          message.replacements.push(RecordSet.decode(reader, reader.uint32()));
          break;
        case 4:
          message.merges.push(RecordSet.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpsertRecordSetsRequest {
    const message = {
      ...baseUpsertRecordSetsRequest,
    } as UpsertRecordSetsRequest;
    message.dnsZoneId =
      object.dnsZoneId !== undefined && object.dnsZoneId !== null
        ? String(object.dnsZoneId)
        : "";
    message.deletions = (object.deletions ?? []).map((e: any) =>
      RecordSet.fromJSON(e)
    );
    message.replacements = (object.replacements ?? []).map((e: any) =>
      RecordSet.fromJSON(e)
    );
    message.merges = (object.merges ?? []).map((e: any) =>
      RecordSet.fromJSON(e)
    );
    return message;
  },

  toJSON(message: UpsertRecordSetsRequest): unknown {
    const obj: any = {};
    message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
    if (message.deletions) {
      obj.deletions = message.deletions.map((e) =>
        e ? RecordSet.toJSON(e) : undefined
      );
    } else {
      obj.deletions = [];
    }
    if (message.replacements) {
      obj.replacements = message.replacements.map((e) =>
        e ? RecordSet.toJSON(e) : undefined
      );
    } else {
      obj.replacements = [];
    }
    if (message.merges) {
      obj.merges = message.merges.map((e) =>
        e ? RecordSet.toJSON(e) : undefined
      );
    } else {
      obj.merges = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpsertRecordSetsRequest>, I>>(
    object: I
  ): UpsertRecordSetsRequest {
    const message = {
      ...baseUpsertRecordSetsRequest,
    } as UpsertRecordSetsRequest;
    message.dnsZoneId = object.dnsZoneId ?? "";
    message.deletions =
      object.deletions?.map((e) => RecordSet.fromPartial(e)) || [];
    message.replacements =
      object.replacements?.map((e) => RecordSet.fromPartial(e)) || [];
    message.merges = object.merges?.map((e) => RecordSet.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(UpsertRecordSetsRequest.$type, UpsertRecordSetsRequest);

const baseUpsertRecordSetsMetadata: object = {
  $type: "yandex.cloud.dns.v1.UpsertRecordSetsMetadata",
};

export const UpsertRecordSetsMetadata = {
  $type: "yandex.cloud.dns.v1.UpsertRecordSetsMetadata" as const,

  encode(
    _: UpsertRecordSetsMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpsertRecordSetsMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpsertRecordSetsMetadata,
    } as UpsertRecordSetsMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): UpsertRecordSetsMetadata {
    const message = {
      ...baseUpsertRecordSetsMetadata,
    } as UpsertRecordSetsMetadata;
    return message;
  },

  toJSON(_: UpsertRecordSetsMetadata): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpsertRecordSetsMetadata>, I>>(
    _: I
  ): UpsertRecordSetsMetadata {
    const message = {
      ...baseUpsertRecordSetsMetadata,
    } as UpsertRecordSetsMetadata;
    return message;
  },
};

messageTypeRegistry.set(
  UpsertRecordSetsMetadata.$type,
  UpsertRecordSetsMetadata
);

const baseRecordSetDiff: object = {
  $type: "yandex.cloud.dns.v1.RecordSetDiff",
};

export const RecordSetDiff = {
  $type: "yandex.cloud.dns.v1.RecordSetDiff" as const,

  encode(
    message: RecordSetDiff,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.additions) {
      RecordSet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.deletions) {
      RecordSet.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordSetDiff {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecordSetDiff } as RecordSetDiff;
    message.additions = [];
    message.deletions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.additions.push(RecordSet.decode(reader, reader.uint32()));
          break;
        case 2:
          message.deletions.push(RecordSet.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordSetDiff {
    const message = { ...baseRecordSetDiff } as RecordSetDiff;
    message.additions = (object.additions ?? []).map((e: any) =>
      RecordSet.fromJSON(e)
    );
    message.deletions = (object.deletions ?? []).map((e: any) =>
      RecordSet.fromJSON(e)
    );
    return message;
  },

  toJSON(message: RecordSetDiff): unknown {
    const obj: any = {};
    if (message.additions) {
      obj.additions = message.additions.map((e) =>
        e ? RecordSet.toJSON(e) : undefined
      );
    } else {
      obj.additions = [];
    }
    if (message.deletions) {
      obj.deletions = message.deletions.map((e) =>
        e ? RecordSet.toJSON(e) : undefined
      );
    } else {
      obj.deletions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RecordSetDiff>, I>>(
    object: I
  ): RecordSetDiff {
    const message = { ...baseRecordSetDiff } as RecordSetDiff;
    message.additions =
      object.additions?.map((e) => RecordSet.fromPartial(e)) || [];
    message.deletions =
      object.deletions?.map((e) => RecordSet.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(RecordSetDiff.$type, RecordSetDiff);

const baseListDnsZoneOperationsRequest: object = {
  $type: "yandex.cloud.dns.v1.ListDnsZoneOperationsRequest",
  dnsZoneId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListDnsZoneOperationsRequest = {
  $type: "yandex.cloud.dns.v1.ListDnsZoneOperationsRequest" as const,

  encode(
    message: ListDnsZoneOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dnsZoneId !== "") {
      writer.uint32(10).string(message.dnsZoneId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(34).string(message.filter);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListDnsZoneOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDnsZoneOperationsRequest,
    } as ListDnsZoneOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dnsZoneId = reader.string();
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

  fromJSON(object: any): ListDnsZoneOperationsRequest {
    const message = {
      ...baseListDnsZoneOperationsRequest,
    } as ListDnsZoneOperationsRequest;
    message.dnsZoneId =
      object.dnsZoneId !== undefined && object.dnsZoneId !== null
        ? String(object.dnsZoneId)
        : "";
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? String(object.filter)
        : "";
    return message;
  },

  toJSON(message: ListDnsZoneOperationsRequest): unknown {
    const obj: any = {};
    message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListDnsZoneOperationsRequest>, I>>(
    object: I
  ): ListDnsZoneOperationsRequest {
    const message = {
      ...baseListDnsZoneOperationsRequest,
    } as ListDnsZoneOperationsRequest;
    message.dnsZoneId = object.dnsZoneId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListDnsZoneOperationsRequest.$type,
  ListDnsZoneOperationsRequest
);

const baseListDnsZoneOperationsResponse: object = {
  $type: "yandex.cloud.dns.v1.ListDnsZoneOperationsResponse",
  nextPageToken: "",
};

export const ListDnsZoneOperationsResponse = {
  $type: "yandex.cloud.dns.v1.ListDnsZoneOperationsResponse" as const,

  encode(
    message: ListDnsZoneOperationsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListDnsZoneOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDnsZoneOperationsResponse,
    } as ListDnsZoneOperationsResponse;
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

  fromJSON(object: any): ListDnsZoneOperationsResponse {
    const message = {
      ...baseListDnsZoneOperationsResponse,
    } as ListDnsZoneOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListDnsZoneOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations) {
      obj.operations = message.operations.map((e) =>
        e ? Operation.toJSON(e) : undefined
      );
    } else {
      obj.operations = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListDnsZoneOperationsResponse>, I>>(
    object: I
  ): ListDnsZoneOperationsResponse {
    const message = {
      ...baseListDnsZoneOperationsResponse,
    } as ListDnsZoneOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListDnsZoneOperationsResponse.$type,
  ListDnsZoneOperationsResponse
);

/** A set of methods for managing DNS zones. */
export const DnsZoneServiceService = {
  /**
   * Returns the specified DNS zone.
   *
   * To get the list of all available DNS zones, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.dns.v1.DnsZoneService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetDnsZoneRequest) =>
      Buffer.from(GetDnsZoneRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetDnsZoneRequest.decode(value),
    responseSerialize: (value: DnsZone) =>
      Buffer.from(DnsZone.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DnsZone.decode(value),
  },
  /** Retrieves the list of DNS zones in the specified folder. */
  list: {
    path: "/yandex.cloud.dns.v1.DnsZoneService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDnsZonesRequest) =>
      Buffer.from(ListDnsZonesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListDnsZonesRequest.decode(value),
    responseSerialize: (value: ListDnsZonesResponse) =>
      Buffer.from(ListDnsZonesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListDnsZonesResponse.decode(value),
  },
  /** Creates a DNS zone in the specified folder. */
  create: {
    path: "/yandex.cloud.dns.v1.DnsZoneService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateDnsZoneRequest) =>
      Buffer.from(CreateDnsZoneRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateDnsZoneRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified DNS zone. */
  update: {
    path: "/yandex.cloud.dns.v1.DnsZoneService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateDnsZoneRequest) =>
      Buffer.from(UpdateDnsZoneRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateDnsZoneRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified DNS zone. */
  delete: {
    path: "/yandex.cloud.dns.v1.DnsZoneService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteDnsZoneRequest) =>
      Buffer.from(DeleteDnsZoneRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteDnsZoneRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns the specified record set. */
  getRecordSet: {
    path: "/yandex.cloud.dns.v1.DnsZoneService/GetRecordSet",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetDnsZoneRecordSetRequest) =>
      Buffer.from(GetDnsZoneRecordSetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetDnsZoneRecordSetRequest.decode(value),
    responseSerialize: (value: RecordSet) =>
      Buffer.from(RecordSet.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RecordSet.decode(value),
  },
  /** Retrieves the list of record sets in the specified folder. */
  listRecordSets: {
    path: "/yandex.cloud.dns.v1.DnsZoneService/ListRecordSets",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDnsZoneRecordSetsRequest) =>
      Buffer.from(ListDnsZoneRecordSetsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListDnsZoneRecordSetsRequest.decode(value),
    responseSerialize: (value: ListDnsZoneRecordSetsResponse) =>
      Buffer.from(ListDnsZoneRecordSetsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListDnsZoneRecordSetsResponse.decode(value),
  },
  /**
   * Method with strict control for changing zone state. Returns error when:
   * 1. Deleted record is not found.
   * 2. Found record with matched type and name but different TTL or value.
   * 3. Attempted to add record with existing name and type.
   * Deletions happen first. If a record with the same name and type exists in both lists,
   * then the existing record will be deleted, and a new one added.
   */
  updateRecordSets: {
    path: "/yandex.cloud.dns.v1.DnsZoneService/UpdateRecordSets",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateRecordSetsRequest) =>
      Buffer.from(UpdateRecordSetsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateRecordSetsRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Method without strict control for changing zone state. Nothing happens if deleted record doesn't exist.
   * Deletes records that match all specified fields which allows to delete only specified records from a record set.
   */
  upsertRecordSets: {
    path: "/yandex.cloud.dns.v1.DnsZoneService/UpsertRecordSets",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpsertRecordSetsRequest) =>
      Buffer.from(UpsertRecordSetsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpsertRecordSetsRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified DNS zone. */
  listOperations: {
    path: "/yandex.cloud.dns.v1.DnsZoneService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDnsZoneOperationsRequest) =>
      Buffer.from(ListDnsZoneOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListDnsZoneOperationsRequest.decode(value),
    responseSerialize: (value: ListDnsZoneOperationsResponse) =>
      Buffer.from(ListDnsZoneOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListDnsZoneOperationsResponse.decode(value),
  },
  /** Lists existing access bindings for the specified DNS zone. */
  listAccessBindings: {
    path: "/yandex.cloud.dns.v1.DnsZoneService/ListAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessBindingsRequest) =>
      Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListAccessBindingsRequest.decode(value),
    responseSerialize: (value: ListAccessBindingsResponse) =>
      Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListAccessBindingsResponse.decode(value),
  },
  /** Sets access bindings for the specified DNS zone. */
  setAccessBindings: {
    path: "/yandex.cloud.dns.v1.DnsZoneService/SetAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetAccessBindingsRequest) =>
      Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      SetAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates access bindings for the specified DNS zone. */
  updateAccessBindings: {
    path: "/yandex.cloud.dns.v1.DnsZoneService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Atomically updates zone private networks */
  updatePrivateNetworks: {
    path: "/yandex.cloud.dns.v1.DnsZoneService/UpdatePrivateNetworks",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateDnsZonePrivateNetworksRequest) =>
      Buffer.from(UpdateDnsZonePrivateNetworksRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateDnsZonePrivateNetworksRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface DnsZoneServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified DNS zone.
   *
   * To get the list of all available DNS zones, make a [List] request.
   */
  get: handleUnaryCall<GetDnsZoneRequest, DnsZone>;
  /** Retrieves the list of DNS zones in the specified folder. */
  list: handleUnaryCall<ListDnsZonesRequest, ListDnsZonesResponse>;
  /** Creates a DNS zone in the specified folder. */
  create: handleUnaryCall<CreateDnsZoneRequest, Operation>;
  /** Updates the specified DNS zone. */
  update: handleUnaryCall<UpdateDnsZoneRequest, Operation>;
  /** Deletes the specified DNS zone. */
  delete: handleUnaryCall<DeleteDnsZoneRequest, Operation>;
  /** Returns the specified record set. */
  getRecordSet: handleUnaryCall<GetDnsZoneRecordSetRequest, RecordSet>;
  /** Retrieves the list of record sets in the specified folder. */
  listRecordSets: handleUnaryCall<
    ListDnsZoneRecordSetsRequest,
    ListDnsZoneRecordSetsResponse
  >;
  /**
   * Method with strict control for changing zone state. Returns error when:
   * 1. Deleted record is not found.
   * 2. Found record with matched type and name but different TTL or value.
   * 3. Attempted to add record with existing name and type.
   * Deletions happen first. If a record with the same name and type exists in both lists,
   * then the existing record will be deleted, and a new one added.
   */
  updateRecordSets: handleUnaryCall<UpdateRecordSetsRequest, Operation>;
  /**
   * Method without strict control for changing zone state. Nothing happens if deleted record doesn't exist.
   * Deletes records that match all specified fields which allows to delete only specified records from a record set.
   */
  upsertRecordSets: handleUnaryCall<UpsertRecordSetsRequest, Operation>;
  /** Lists operations for the specified DNS zone. */
  listOperations: handleUnaryCall<
    ListDnsZoneOperationsRequest,
    ListDnsZoneOperationsResponse
  >;
  /** Lists existing access bindings for the specified DNS zone. */
  listAccessBindings: handleUnaryCall<
    ListAccessBindingsRequest,
    ListAccessBindingsResponse
  >;
  /** Sets access bindings for the specified DNS zone. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the specified DNS zone. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
  /** Atomically updates zone private networks */
  updatePrivateNetworks: handleUnaryCall<
    UpdateDnsZonePrivateNetworksRequest,
    Operation
  >;
}

export interface DnsZoneServiceClient extends Client {
  /**
   * Returns the specified DNS zone.
   *
   * To get the list of all available DNS zones, make a [List] request.
   */
  get(
    request: GetDnsZoneRequest,
    callback: (error: ServiceError | null, response: DnsZone) => void
  ): ClientUnaryCall;
  get(
    request: GetDnsZoneRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DnsZone) => void
  ): ClientUnaryCall;
  get(
    request: GetDnsZoneRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DnsZone) => void
  ): ClientUnaryCall;
  /** Retrieves the list of DNS zones in the specified folder. */
  list(
    request: ListDnsZonesRequest,
    callback: (
      error: ServiceError | null,
      response: ListDnsZonesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListDnsZonesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListDnsZonesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListDnsZonesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListDnsZonesResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a DNS zone in the specified folder. */
  create(
    request: CreateDnsZoneRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateDnsZoneRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateDnsZoneRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified DNS zone. */
  update(
    request: UpdateDnsZoneRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateDnsZoneRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateDnsZoneRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified DNS zone. */
  delete(
    request: DeleteDnsZoneRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteDnsZoneRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteDnsZoneRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Returns the specified record set. */
  getRecordSet(
    request: GetDnsZoneRecordSetRequest,
    callback: (error: ServiceError | null, response: RecordSet) => void
  ): ClientUnaryCall;
  getRecordSet(
    request: GetDnsZoneRecordSetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: RecordSet) => void
  ): ClientUnaryCall;
  getRecordSet(
    request: GetDnsZoneRecordSetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: RecordSet) => void
  ): ClientUnaryCall;
  /** Retrieves the list of record sets in the specified folder. */
  listRecordSets(
    request: ListDnsZoneRecordSetsRequest,
    callback: (
      error: ServiceError | null,
      response: ListDnsZoneRecordSetsResponse
    ) => void
  ): ClientUnaryCall;
  listRecordSets(
    request: ListDnsZoneRecordSetsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListDnsZoneRecordSetsResponse
    ) => void
  ): ClientUnaryCall;
  listRecordSets(
    request: ListDnsZoneRecordSetsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListDnsZoneRecordSetsResponse
    ) => void
  ): ClientUnaryCall;
  /**
   * Method with strict control for changing zone state. Returns error when:
   * 1. Deleted record is not found.
   * 2. Found record with matched type and name but different TTL or value.
   * 3. Attempted to add record with existing name and type.
   * Deletions happen first. If a record with the same name and type exists in both lists,
   * then the existing record will be deleted, and a new one added.
   */
  updateRecordSets(
    request: UpdateRecordSetsRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateRecordSets(
    request: UpdateRecordSetsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateRecordSets(
    request: UpdateRecordSetsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Method without strict control for changing zone state. Nothing happens if deleted record doesn't exist.
   * Deletes records that match all specified fields which allows to delete only specified records from a record set.
   */
  upsertRecordSets(
    request: UpsertRecordSetsRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  upsertRecordSets(
    request: UpsertRecordSetsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  upsertRecordSets(
    request: UpsertRecordSetsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified DNS zone. */
  listOperations(
    request: ListDnsZoneOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListDnsZoneOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListDnsZoneOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListDnsZoneOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListDnsZoneOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListDnsZoneOperationsResponse
    ) => void
  ): ClientUnaryCall;
  /** Lists existing access bindings for the specified DNS zone. */
  listAccessBindings(
    request: ListAccessBindingsRequest,
    callback: (
      error: ServiceError | null,
      response: ListAccessBindingsResponse
    ) => void
  ): ClientUnaryCall;
  listAccessBindings(
    request: ListAccessBindingsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListAccessBindingsResponse
    ) => void
  ): ClientUnaryCall;
  listAccessBindings(
    request: ListAccessBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListAccessBindingsResponse
    ) => void
  ): ClientUnaryCall;
  /** Sets access bindings for the specified DNS zone. */
  setAccessBindings(
    request: SetAccessBindingsRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  setAccessBindings(
    request: SetAccessBindingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  setAccessBindings(
    request: SetAccessBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates access bindings for the specified DNS zone. */
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Atomically updates zone private networks */
  updatePrivateNetworks(
    request: UpdateDnsZonePrivateNetworksRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updatePrivateNetworks(
    request: UpdateDnsZonePrivateNetworksRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updatePrivateNetworks(
    request: UpdateDnsZonePrivateNetworksRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const DnsZoneServiceClient = makeGenericClientConstructor(
  DnsZoneServiceService,
  "yandex.cloud.dns.v1.DnsZoneService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): DnsZoneServiceClient;
  service: typeof DnsZoneServiceService;
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P> | "$type">,
        never
      >;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
