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
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Network } from "../../../../yandex/cloud/vpc/v1/network";
import { Subnet } from "../../../../yandex/cloud/vpc/v1/subnet";
import { SecurityGroup } from "../../../../yandex/cloud/vpc/v1/security_group";
import { RouteTable } from "../../../../yandex/cloud/vpc/v1/route_table";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.vpc.v1";

export interface GetNetworkRequest {
  $type: "yandex.cloud.vpc.v1.GetNetworkRequest";
  /**
   * ID of the Network resource to return.
   * To get the network ID, use a [NetworkService.List] request.
   */
  networkId: string;
}

export interface ListNetworksRequest {
  $type: "yandex.cloud.vpc.v1.ListNetworksRequest";
  /**
   * ID of the folder to list networks in.
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListNetworksResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListNetworksResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on the [Network.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
}

export interface ListNetworksResponse {
  $type: "yandex.cloud.vpc.v1.ListNetworksResponse";
  /** List of Network resources. */
  networks: Network[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListNetworksRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListNetworksRequest.page_token] query parameter
   * in the next list request. Subsequent list requests will have their own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateNetworkRequest {
  $type: "yandex.cloud.vpc.v1.CreateNetworkRequest";
  /**
   * ID of the folder for this request to create a network in.
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the network.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the network. */
  description: string;
  /** Resource labels as `` key:value `` pairs. */
  labels: { [key: string]: string };
}

export interface CreateNetworkRequest_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.CreateNetworkRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateNetworkMetadata {
  $type: "yandex.cloud.vpc.v1.CreateNetworkMetadata";
  /** ID of the Network that is being created. */
  networkId: string;
}

export interface UpdateNetworkRequest {
  $type: "yandex.cloud.vpc.v1.UpdateNetworkRequest";
  /**
   * ID of the Network resource to update.
   * To get the network ID use a [NetworkService.List] request.
   */
  networkId: string;
  /** Field mask that specifies which fields of the Network resource are going to be updated. */
  updateMask?: FieldMask;
  /**
   * Name of the network.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the network. */
  description: string;
  /** Resource labels as `` key:value `` pairs. */
  labels: { [key: string]: string };
}

export interface UpdateNetworkRequest_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.UpdateNetworkRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateNetworkMetadata {
  $type: "yandex.cloud.vpc.v1.UpdateNetworkMetadata";
  /** ID of the Network resource that is being updated. */
  networkId: string;
}

export interface DeleteNetworkRequest {
  $type: "yandex.cloud.vpc.v1.DeleteNetworkRequest";
  /**
   * ID of the Network resource to update.
   * To get the network ID, use a [NetworkService.List] request.
   */
  networkId: string;
}

export interface DeleteNetworkMetadata {
  $type: "yandex.cloud.vpc.v1.DeleteNetworkMetadata";
  /** ID of the network that is being deleted. */
  networkId: string;
}

export interface ListNetworkSubnetsRequest {
  $type: "yandex.cloud.vpc.v1.ListNetworkSubnetsRequest";
  /** ID of the Network resource to list subnets for. */
  networkId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListNetworkSubnetsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. Set [page_token]
   * to the [ListNetworkSubnetsResponse.next_page_token]
   * returned by a previous list request to get the next page of results.
   */
  pageToken: string;
}

export interface ListNetworkSubnetsResponse {
  $type: "yandex.cloud.vpc.v1.ListNetworkSubnetsResponse";
  /** List of subnets that belong to the network which is specified in the request. */
  subnets: Subnet[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListNetworkSubnetsRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListNetworkSubnetsRequest.page_token] query parameter
   * in the next list request. Subsequent list requests will have their own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListNetworkSecurityGroupsRequest {
  $type: "yandex.cloud.vpc.v1.ListNetworkSecurityGroupsRequest";
  /** ID of the Network resource to list security groups for. */
  networkId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListNetworkSecurityGroupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. Set [page_token]
   * to the [ListNetworkSecurityGroupsResponse.next_page_token]
   * returned by a previous list request to get the next page of results.
   */
  pageToken: string;
}

export interface ListNetworkSecurityGroupsResponse {
  $type: "yandex.cloud.vpc.v1.ListNetworkSecurityGroupsResponse";
  /** List of security groups that belong to the network which is specified in the request. */
  securityGroups: SecurityGroup[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListNetworkSecurityGroupsRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListNetworkSecurityGroupsRequest.page_token] query parameter
   * in the next list request. Subsequent list requests will have their own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListNetworkRouteTablesRequest {
  $type: "yandex.cloud.vpc.v1.ListNetworkRouteTablesRequest";
  /** ID of the Network resource to list route tables for. */
  networkId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListNetworkRouteTablesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. Set [page_token]
   * to the [ListNetworkRouteTablesResponse.next_page_token]
   * returned by a previous list request to get the next page of results.
   */
  pageToken: string;
}

export interface ListNetworkRouteTablesResponse {
  $type: "yandex.cloud.vpc.v1.ListNetworkRouteTablesResponse";
  /** List of route tables that belong to the network which is specified in the request. */
  routeTables: RouteTable[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListNetworkRouteTablesRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListNetworkRouteTablesRequest.page_token] query parameter
   * in the next list request. Subsequent list requests will have their own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListNetworkOperationsRequest {
  $type: "yandex.cloud.vpc.v1.ListNetworkOperationsRequest";
  /** ID of the Network resource to list operations for. */
  networkId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size], the service returns a [ListNetworkOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListNetworkOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListNetworkOperationsResponse {
  $type: "yandex.cloud.vpc.v1.ListNetworkOperationsResponse";
  /** List of operations for the specified network. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListNetworkOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListNetworkOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface MoveNetworkRequest {
  $type: "yandex.cloud.vpc.v1.MoveNetworkRequest";
  /** ID of the Network resource to move. */
  networkId: string;
  /** ID of the destination folder. */
  destinationFolderId: string;
}

export interface MoveNetworkMetadata {
  $type: "yandex.cloud.vpc.v1.MoveNetworkMetadata";
  /** ID of the network that is being moved. */
  networkId: string;
}

const baseGetNetworkRequest: object = {
  $type: "yandex.cloud.vpc.v1.GetNetworkRequest",
  networkId: "",
};

export const GetNetworkRequest = {
  $type: "yandex.cloud.vpc.v1.GetNetworkRequest" as const,

  encode(
    message: GetNetworkRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkId !== "") {
      writer.uint32(10).string(message.networkId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNetworkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetNetworkRequest } as GetNetworkRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNetworkRequest {
    const message = { ...baseGetNetworkRequest } as GetNetworkRequest;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    return message;
  },

  toJSON(message: GetNetworkRequest): unknown {
    const obj: any = {};
    message.networkId !== undefined && (obj.networkId = message.networkId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetNetworkRequest>, I>>(
    object: I
  ): GetNetworkRequest {
    const message = { ...baseGetNetworkRequest } as GetNetworkRequest;
    message.networkId = object.networkId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetNetworkRequest.$type, GetNetworkRequest);

const baseListNetworksRequest: object = {
  $type: "yandex.cloud.vpc.v1.ListNetworksRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListNetworksRequest = {
  $type: "yandex.cloud.vpc.v1.ListNetworksRequest" as const,

  encode(
    message: ListNetworksRequest,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListNetworksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListNetworksRequest } as ListNetworksRequest;
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

  fromJSON(object: any): ListNetworksRequest {
    const message = { ...baseListNetworksRequest } as ListNetworksRequest;
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

  toJSON(message: ListNetworksRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListNetworksRequest>, I>>(
    object: I
  ): ListNetworksRequest {
    const message = { ...baseListNetworksRequest } as ListNetworksRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListNetworksRequest.$type, ListNetworksRequest);

const baseListNetworksResponse: object = {
  $type: "yandex.cloud.vpc.v1.ListNetworksResponse",
  nextPageToken: "",
};

export const ListNetworksResponse = {
  $type: "yandex.cloud.vpc.v1.ListNetworksResponse" as const,

  encode(
    message: ListNetworksResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.networks) {
      Network.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListNetworksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListNetworksResponse } as ListNetworksResponse;
    message.networks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networks.push(Network.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListNetworksResponse {
    const message = { ...baseListNetworksResponse } as ListNetworksResponse;
    message.networks = (object.networks ?? []).map((e: any) =>
      Network.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListNetworksResponse): unknown {
    const obj: any = {};
    if (message.networks) {
      obj.networks = message.networks.map((e) =>
        e ? Network.toJSON(e) : undefined
      );
    } else {
      obj.networks = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListNetworksResponse>, I>>(
    object: I
  ): ListNetworksResponse {
    const message = { ...baseListNetworksResponse } as ListNetworksResponse;
    message.networks =
      object.networks?.map((e) => Network.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListNetworksResponse.$type, ListNetworksResponse);

const baseCreateNetworkRequest: object = {
  $type: "yandex.cloud.vpc.v1.CreateNetworkRequest",
  folderId: "",
  name: "",
  description: "",
};

export const CreateNetworkRequest = {
  $type: "yandex.cloud.vpc.v1.CreateNetworkRequest" as const,

  encode(
    message: CreateNetworkRequest,
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
      CreateNetworkRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.vpc.v1.CreateNetworkRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateNetworkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateNetworkRequest } as CreateNetworkRequest;
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
          const entry4 = CreateNetworkRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateNetworkRequest {
    const message = { ...baseCreateNetworkRequest } as CreateNetworkRequest;
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
    return message;
  },

  toJSON(message: CreateNetworkRequest): unknown {
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
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateNetworkRequest>, I>>(
    object: I
  ): CreateNetworkRequest {
    const message = { ...baseCreateNetworkRequest } as CreateNetworkRequest;
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
    return message;
  },
};

messageTypeRegistry.set(CreateNetworkRequest.$type, CreateNetworkRequest);

const baseCreateNetworkRequest_LabelsEntry: object = {
  $type: "yandex.cloud.vpc.v1.CreateNetworkRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateNetworkRequest_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.CreateNetworkRequest.LabelsEntry" as const,

  encode(
    message: CreateNetworkRequest_LabelsEntry,
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
  ): CreateNetworkRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateNetworkRequest_LabelsEntry,
    } as CreateNetworkRequest_LabelsEntry;
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

  fromJSON(object: any): CreateNetworkRequest_LabelsEntry {
    const message = {
      ...baseCreateNetworkRequest_LabelsEntry,
    } as CreateNetworkRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateNetworkRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateNetworkRequest_LabelsEntry>, I>
  >(object: I): CreateNetworkRequest_LabelsEntry {
    const message = {
      ...baseCreateNetworkRequest_LabelsEntry,
    } as CreateNetworkRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateNetworkRequest_LabelsEntry.$type,
  CreateNetworkRequest_LabelsEntry
);

const baseCreateNetworkMetadata: object = {
  $type: "yandex.cloud.vpc.v1.CreateNetworkMetadata",
  networkId: "",
};

export const CreateNetworkMetadata = {
  $type: "yandex.cloud.vpc.v1.CreateNetworkMetadata" as const,

  encode(
    message: CreateNetworkMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkId !== "") {
      writer.uint32(10).string(message.networkId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateNetworkMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateNetworkMetadata } as CreateNetworkMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateNetworkMetadata {
    const message = { ...baseCreateNetworkMetadata } as CreateNetworkMetadata;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    return message;
  },

  toJSON(message: CreateNetworkMetadata): unknown {
    const obj: any = {};
    message.networkId !== undefined && (obj.networkId = message.networkId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateNetworkMetadata>, I>>(
    object: I
  ): CreateNetworkMetadata {
    const message = { ...baseCreateNetworkMetadata } as CreateNetworkMetadata;
    message.networkId = object.networkId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateNetworkMetadata.$type, CreateNetworkMetadata);

const baseUpdateNetworkRequest: object = {
  $type: "yandex.cloud.vpc.v1.UpdateNetworkRequest",
  networkId: "",
  name: "",
  description: "",
};

export const UpdateNetworkRequest = {
  $type: "yandex.cloud.vpc.v1.UpdateNetworkRequest" as const,

  encode(
    message: UpdateNetworkRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkId !== "") {
      writer.uint32(10).string(message.networkId);
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
      UpdateNetworkRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.vpc.v1.UpdateNetworkRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateNetworkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateNetworkRequest } as UpdateNetworkRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkId = reader.string();
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
          const entry5 = UpdateNetworkRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateNetworkRequest {
    const message = { ...baseUpdateNetworkRequest } as UpdateNetworkRequest;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
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
    return message;
  },

  toJSON(message: UpdateNetworkRequest): unknown {
    const obj: any = {};
    message.networkId !== undefined && (obj.networkId = message.networkId);
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
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateNetworkRequest>, I>>(
    object: I
  ): UpdateNetworkRequest {
    const message = { ...baseUpdateNetworkRequest } as UpdateNetworkRequest;
    message.networkId = object.networkId ?? "";
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
    return message;
  },
};

messageTypeRegistry.set(UpdateNetworkRequest.$type, UpdateNetworkRequest);

const baseUpdateNetworkRequest_LabelsEntry: object = {
  $type: "yandex.cloud.vpc.v1.UpdateNetworkRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateNetworkRequest_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.UpdateNetworkRequest.LabelsEntry" as const,

  encode(
    message: UpdateNetworkRequest_LabelsEntry,
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
  ): UpdateNetworkRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateNetworkRequest_LabelsEntry,
    } as UpdateNetworkRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateNetworkRequest_LabelsEntry {
    const message = {
      ...baseUpdateNetworkRequest_LabelsEntry,
    } as UpdateNetworkRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateNetworkRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateNetworkRequest_LabelsEntry>, I>
  >(object: I): UpdateNetworkRequest_LabelsEntry {
    const message = {
      ...baseUpdateNetworkRequest_LabelsEntry,
    } as UpdateNetworkRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateNetworkRequest_LabelsEntry.$type,
  UpdateNetworkRequest_LabelsEntry
);

const baseUpdateNetworkMetadata: object = {
  $type: "yandex.cloud.vpc.v1.UpdateNetworkMetadata",
  networkId: "",
};

export const UpdateNetworkMetadata = {
  $type: "yandex.cloud.vpc.v1.UpdateNetworkMetadata" as const,

  encode(
    message: UpdateNetworkMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkId !== "") {
      writer.uint32(10).string(message.networkId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateNetworkMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateNetworkMetadata } as UpdateNetworkMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateNetworkMetadata {
    const message = { ...baseUpdateNetworkMetadata } as UpdateNetworkMetadata;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    return message;
  },

  toJSON(message: UpdateNetworkMetadata): unknown {
    const obj: any = {};
    message.networkId !== undefined && (obj.networkId = message.networkId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateNetworkMetadata>, I>>(
    object: I
  ): UpdateNetworkMetadata {
    const message = { ...baseUpdateNetworkMetadata } as UpdateNetworkMetadata;
    message.networkId = object.networkId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateNetworkMetadata.$type, UpdateNetworkMetadata);

const baseDeleteNetworkRequest: object = {
  $type: "yandex.cloud.vpc.v1.DeleteNetworkRequest",
  networkId: "",
};

export const DeleteNetworkRequest = {
  $type: "yandex.cloud.vpc.v1.DeleteNetworkRequest" as const,

  encode(
    message: DeleteNetworkRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkId !== "") {
      writer.uint32(10).string(message.networkId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteNetworkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteNetworkRequest } as DeleteNetworkRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteNetworkRequest {
    const message = { ...baseDeleteNetworkRequest } as DeleteNetworkRequest;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    return message;
  },

  toJSON(message: DeleteNetworkRequest): unknown {
    const obj: any = {};
    message.networkId !== undefined && (obj.networkId = message.networkId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteNetworkRequest>, I>>(
    object: I
  ): DeleteNetworkRequest {
    const message = { ...baseDeleteNetworkRequest } as DeleteNetworkRequest;
    message.networkId = object.networkId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteNetworkRequest.$type, DeleteNetworkRequest);

const baseDeleteNetworkMetadata: object = {
  $type: "yandex.cloud.vpc.v1.DeleteNetworkMetadata",
  networkId: "",
};

export const DeleteNetworkMetadata = {
  $type: "yandex.cloud.vpc.v1.DeleteNetworkMetadata" as const,

  encode(
    message: DeleteNetworkMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkId !== "") {
      writer.uint32(10).string(message.networkId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteNetworkMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteNetworkMetadata } as DeleteNetworkMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteNetworkMetadata {
    const message = { ...baseDeleteNetworkMetadata } as DeleteNetworkMetadata;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    return message;
  },

  toJSON(message: DeleteNetworkMetadata): unknown {
    const obj: any = {};
    message.networkId !== undefined && (obj.networkId = message.networkId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteNetworkMetadata>, I>>(
    object: I
  ): DeleteNetworkMetadata {
    const message = { ...baseDeleteNetworkMetadata } as DeleteNetworkMetadata;
    message.networkId = object.networkId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteNetworkMetadata.$type, DeleteNetworkMetadata);

const baseListNetworkSubnetsRequest: object = {
  $type: "yandex.cloud.vpc.v1.ListNetworkSubnetsRequest",
  networkId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListNetworkSubnetsRequest = {
  $type: "yandex.cloud.vpc.v1.ListNetworkSubnetsRequest" as const,

  encode(
    message: ListNetworkSubnetsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkId !== "") {
      writer.uint32(10).string(message.networkId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListNetworkSubnetsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListNetworkSubnetsRequest,
    } as ListNetworkSubnetsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkId = reader.string();
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

  fromJSON(object: any): ListNetworkSubnetsRequest {
    const message = {
      ...baseListNetworkSubnetsRequest,
    } as ListNetworkSubnetsRequest;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    return message;
  },

  toJSON(message: ListNetworkSubnetsRequest): unknown {
    const obj: any = {};
    message.networkId !== undefined && (obj.networkId = message.networkId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListNetworkSubnetsRequest>, I>>(
    object: I
  ): ListNetworkSubnetsRequest {
    const message = {
      ...baseListNetworkSubnetsRequest,
    } as ListNetworkSubnetsRequest;
    message.networkId = object.networkId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListNetworkSubnetsRequest.$type,
  ListNetworkSubnetsRequest
);

const baseListNetworkSubnetsResponse: object = {
  $type: "yandex.cloud.vpc.v1.ListNetworkSubnetsResponse",
  nextPageToken: "",
};

export const ListNetworkSubnetsResponse = {
  $type: "yandex.cloud.vpc.v1.ListNetworkSubnetsResponse" as const,

  encode(
    message: ListNetworkSubnetsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.subnets) {
      Subnet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListNetworkSubnetsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListNetworkSubnetsResponse,
    } as ListNetworkSubnetsResponse;
    message.subnets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subnets.push(Subnet.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListNetworkSubnetsResponse {
    const message = {
      ...baseListNetworkSubnetsResponse,
    } as ListNetworkSubnetsResponse;
    message.subnets = (object.subnets ?? []).map((e: any) =>
      Subnet.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListNetworkSubnetsResponse): unknown {
    const obj: any = {};
    if (message.subnets) {
      obj.subnets = message.subnets.map((e) =>
        e ? Subnet.toJSON(e) : undefined
      );
    } else {
      obj.subnets = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListNetworkSubnetsResponse>, I>>(
    object: I
  ): ListNetworkSubnetsResponse {
    const message = {
      ...baseListNetworkSubnetsResponse,
    } as ListNetworkSubnetsResponse;
    message.subnets = object.subnets?.map((e) => Subnet.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListNetworkSubnetsResponse.$type,
  ListNetworkSubnetsResponse
);

const baseListNetworkSecurityGroupsRequest: object = {
  $type: "yandex.cloud.vpc.v1.ListNetworkSecurityGroupsRequest",
  networkId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListNetworkSecurityGroupsRequest = {
  $type: "yandex.cloud.vpc.v1.ListNetworkSecurityGroupsRequest" as const,

  encode(
    message: ListNetworkSecurityGroupsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkId !== "") {
      writer.uint32(10).string(message.networkId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListNetworkSecurityGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListNetworkSecurityGroupsRequest,
    } as ListNetworkSecurityGroupsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkId = reader.string();
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

  fromJSON(object: any): ListNetworkSecurityGroupsRequest {
    const message = {
      ...baseListNetworkSecurityGroupsRequest,
    } as ListNetworkSecurityGroupsRequest;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    return message;
  },

  toJSON(message: ListNetworkSecurityGroupsRequest): unknown {
    const obj: any = {};
    message.networkId !== undefined && (obj.networkId = message.networkId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListNetworkSecurityGroupsRequest>, I>
  >(object: I): ListNetworkSecurityGroupsRequest {
    const message = {
      ...baseListNetworkSecurityGroupsRequest,
    } as ListNetworkSecurityGroupsRequest;
    message.networkId = object.networkId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListNetworkSecurityGroupsRequest.$type,
  ListNetworkSecurityGroupsRequest
);

const baseListNetworkSecurityGroupsResponse: object = {
  $type: "yandex.cloud.vpc.v1.ListNetworkSecurityGroupsResponse",
  nextPageToken: "",
};

export const ListNetworkSecurityGroupsResponse = {
  $type: "yandex.cloud.vpc.v1.ListNetworkSecurityGroupsResponse" as const,

  encode(
    message: ListNetworkSecurityGroupsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.securityGroups) {
      SecurityGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListNetworkSecurityGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListNetworkSecurityGroupsResponse,
    } as ListNetworkSecurityGroupsResponse;
    message.securityGroups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.securityGroups.push(
            SecurityGroup.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): ListNetworkSecurityGroupsResponse {
    const message = {
      ...baseListNetworkSecurityGroupsResponse,
    } as ListNetworkSecurityGroupsResponse;
    message.securityGroups = (object.securityGroups ?? []).map((e: any) =>
      SecurityGroup.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListNetworkSecurityGroupsResponse): unknown {
    const obj: any = {};
    if (message.securityGroups) {
      obj.securityGroups = message.securityGroups.map((e) =>
        e ? SecurityGroup.toJSON(e) : undefined
      );
    } else {
      obj.securityGroups = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListNetworkSecurityGroupsResponse>, I>
  >(object: I): ListNetworkSecurityGroupsResponse {
    const message = {
      ...baseListNetworkSecurityGroupsResponse,
    } as ListNetworkSecurityGroupsResponse;
    message.securityGroups =
      object.securityGroups?.map((e) => SecurityGroup.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListNetworkSecurityGroupsResponse.$type,
  ListNetworkSecurityGroupsResponse
);

const baseListNetworkRouteTablesRequest: object = {
  $type: "yandex.cloud.vpc.v1.ListNetworkRouteTablesRequest",
  networkId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListNetworkRouteTablesRequest = {
  $type: "yandex.cloud.vpc.v1.ListNetworkRouteTablesRequest" as const,

  encode(
    message: ListNetworkRouteTablesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkId !== "") {
      writer.uint32(10).string(message.networkId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListNetworkRouteTablesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListNetworkRouteTablesRequest,
    } as ListNetworkRouteTablesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkId = reader.string();
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

  fromJSON(object: any): ListNetworkRouteTablesRequest {
    const message = {
      ...baseListNetworkRouteTablesRequest,
    } as ListNetworkRouteTablesRequest;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    return message;
  },

  toJSON(message: ListNetworkRouteTablesRequest): unknown {
    const obj: any = {};
    message.networkId !== undefined && (obj.networkId = message.networkId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListNetworkRouteTablesRequest>, I>>(
    object: I
  ): ListNetworkRouteTablesRequest {
    const message = {
      ...baseListNetworkRouteTablesRequest,
    } as ListNetworkRouteTablesRequest;
    message.networkId = object.networkId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListNetworkRouteTablesRequest.$type,
  ListNetworkRouteTablesRequest
);

const baseListNetworkRouteTablesResponse: object = {
  $type: "yandex.cloud.vpc.v1.ListNetworkRouteTablesResponse",
  nextPageToken: "",
};

export const ListNetworkRouteTablesResponse = {
  $type: "yandex.cloud.vpc.v1.ListNetworkRouteTablesResponse" as const,

  encode(
    message: ListNetworkRouteTablesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.routeTables) {
      RouteTable.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListNetworkRouteTablesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListNetworkRouteTablesResponse,
    } as ListNetworkRouteTablesResponse;
    message.routeTables = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.routeTables.push(RouteTable.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListNetworkRouteTablesResponse {
    const message = {
      ...baseListNetworkRouteTablesResponse,
    } as ListNetworkRouteTablesResponse;
    message.routeTables = (object.routeTables ?? []).map((e: any) =>
      RouteTable.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListNetworkRouteTablesResponse): unknown {
    const obj: any = {};
    if (message.routeTables) {
      obj.routeTables = message.routeTables.map((e) =>
        e ? RouteTable.toJSON(e) : undefined
      );
    } else {
      obj.routeTables = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListNetworkRouteTablesResponse>, I>>(
    object: I
  ): ListNetworkRouteTablesResponse {
    const message = {
      ...baseListNetworkRouteTablesResponse,
    } as ListNetworkRouteTablesResponse;
    message.routeTables =
      object.routeTables?.map((e) => RouteTable.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListNetworkRouteTablesResponse.$type,
  ListNetworkRouteTablesResponse
);

const baseListNetworkOperationsRequest: object = {
  $type: "yandex.cloud.vpc.v1.ListNetworkOperationsRequest",
  networkId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListNetworkOperationsRequest = {
  $type: "yandex.cloud.vpc.v1.ListNetworkOperationsRequest" as const,

  encode(
    message: ListNetworkOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkId !== "") {
      writer.uint32(10).string(message.networkId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListNetworkOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListNetworkOperationsRequest,
    } as ListNetworkOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkId = reader.string();
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

  fromJSON(object: any): ListNetworkOperationsRequest {
    const message = {
      ...baseListNetworkOperationsRequest,
    } as ListNetworkOperationsRequest;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    return message;
  },

  toJSON(message: ListNetworkOperationsRequest): unknown {
    const obj: any = {};
    message.networkId !== undefined && (obj.networkId = message.networkId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListNetworkOperationsRequest>, I>>(
    object: I
  ): ListNetworkOperationsRequest {
    const message = {
      ...baseListNetworkOperationsRequest,
    } as ListNetworkOperationsRequest;
    message.networkId = object.networkId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListNetworkOperationsRequest.$type,
  ListNetworkOperationsRequest
);

const baseListNetworkOperationsResponse: object = {
  $type: "yandex.cloud.vpc.v1.ListNetworkOperationsResponse",
  nextPageToken: "",
};

export const ListNetworkOperationsResponse = {
  $type: "yandex.cloud.vpc.v1.ListNetworkOperationsResponse" as const,

  encode(
    message: ListNetworkOperationsResponse,
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
  ): ListNetworkOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListNetworkOperationsResponse,
    } as ListNetworkOperationsResponse;
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

  fromJSON(object: any): ListNetworkOperationsResponse {
    const message = {
      ...baseListNetworkOperationsResponse,
    } as ListNetworkOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListNetworkOperationsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<ListNetworkOperationsResponse>, I>>(
    object: I
  ): ListNetworkOperationsResponse {
    const message = {
      ...baseListNetworkOperationsResponse,
    } as ListNetworkOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListNetworkOperationsResponse.$type,
  ListNetworkOperationsResponse
);

const baseMoveNetworkRequest: object = {
  $type: "yandex.cloud.vpc.v1.MoveNetworkRequest",
  networkId: "",
  destinationFolderId: "",
};

export const MoveNetworkRequest = {
  $type: "yandex.cloud.vpc.v1.MoveNetworkRequest" as const,

  encode(
    message: MoveNetworkRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkId !== "") {
      writer.uint32(10).string(message.networkId);
    }
    if (message.destinationFolderId !== "") {
      writer.uint32(18).string(message.destinationFolderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveNetworkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMoveNetworkRequest } as MoveNetworkRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkId = reader.string();
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

  fromJSON(object: any): MoveNetworkRequest {
    const message = { ...baseMoveNetworkRequest } as MoveNetworkRequest;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.destinationFolderId =
      object.destinationFolderId !== undefined &&
      object.destinationFolderId !== null
        ? String(object.destinationFolderId)
        : "";
    return message;
  },

  toJSON(message: MoveNetworkRequest): unknown {
    const obj: any = {};
    message.networkId !== undefined && (obj.networkId = message.networkId);
    message.destinationFolderId !== undefined &&
      (obj.destinationFolderId = message.destinationFolderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MoveNetworkRequest>, I>>(
    object: I
  ): MoveNetworkRequest {
    const message = { ...baseMoveNetworkRequest } as MoveNetworkRequest;
    message.networkId = object.networkId ?? "";
    message.destinationFolderId = object.destinationFolderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MoveNetworkRequest.$type, MoveNetworkRequest);

const baseMoveNetworkMetadata: object = {
  $type: "yandex.cloud.vpc.v1.MoveNetworkMetadata",
  networkId: "",
};

export const MoveNetworkMetadata = {
  $type: "yandex.cloud.vpc.v1.MoveNetworkMetadata" as const,

  encode(
    message: MoveNetworkMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkId !== "") {
      writer.uint32(10).string(message.networkId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveNetworkMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMoveNetworkMetadata } as MoveNetworkMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MoveNetworkMetadata {
    const message = { ...baseMoveNetworkMetadata } as MoveNetworkMetadata;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    return message;
  },

  toJSON(message: MoveNetworkMetadata): unknown {
    const obj: any = {};
    message.networkId !== undefined && (obj.networkId = message.networkId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MoveNetworkMetadata>, I>>(
    object: I
  ): MoveNetworkMetadata {
    const message = { ...baseMoveNetworkMetadata } as MoveNetworkMetadata;
    message.networkId = object.networkId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MoveNetworkMetadata.$type, MoveNetworkMetadata);

/** A set of methods for managing Network resources. */
export const NetworkServiceService = {
  /**
   * Returns the specified Network resource.
   *
   * Get the list of available Network resources by making a [List] request.
   */
  get: {
    path: "/yandex.cloud.vpc.v1.NetworkService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetNetworkRequest) =>
      Buffer.from(GetNetworkRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetNetworkRequest.decode(value),
    responseSerialize: (value: Network) =>
      Buffer.from(Network.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Network.decode(value),
  },
  /** Retrieves the list of Network resources in the specified folder. */
  list: {
    path: "/yandex.cloud.vpc.v1.NetworkService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListNetworksRequest) =>
      Buffer.from(ListNetworksRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListNetworksRequest.decode(value),
    responseSerialize: (value: ListNetworksResponse) =>
      Buffer.from(ListNetworksResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListNetworksResponse.decode(value),
  },
  /**
   * Creates a network in the specified folder using the data specified in the request.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  create: {
    path: "/yandex.cloud.vpc.v1.NetworkService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateNetworkRequest) =>
      Buffer.from(CreateNetworkRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateNetworkRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Updates the specified network.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  update: {
    path: "/yandex.cloud.vpc.v1.NetworkService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateNetworkRequest) =>
      Buffer.from(UpdateNetworkRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateNetworkRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified network. */
  delete: {
    path: "/yandex.cloud.vpc.v1.NetworkService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteNetworkRequest) =>
      Buffer.from(DeleteNetworkRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteNetworkRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists subnets from the specified network. */
  listSubnets: {
    path: "/yandex.cloud.vpc.v1.NetworkService/ListSubnets",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListNetworkSubnetsRequest) =>
      Buffer.from(ListNetworkSubnetsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListNetworkSubnetsRequest.decode(value),
    responseSerialize: (value: ListNetworkSubnetsResponse) =>
      Buffer.from(ListNetworkSubnetsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListNetworkSubnetsResponse.decode(value),
  },
  /** Lists security groups from the specified network. */
  listSecurityGroups: {
    path: "/yandex.cloud.vpc.v1.NetworkService/ListSecurityGroups",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListNetworkSecurityGroupsRequest) =>
      Buffer.from(ListNetworkSecurityGroupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListNetworkSecurityGroupsRequest.decode(value),
    responseSerialize: (value: ListNetworkSecurityGroupsResponse) =>
      Buffer.from(ListNetworkSecurityGroupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListNetworkSecurityGroupsResponse.decode(value),
  },
  /** Lists route tables from the specified network. */
  listRouteTables: {
    path: "/yandex.cloud.vpc.v1.NetworkService/ListRouteTables",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListNetworkRouteTablesRequest) =>
      Buffer.from(ListNetworkRouteTablesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListNetworkRouteTablesRequest.decode(value),
    responseSerialize: (value: ListNetworkRouteTablesResponse) =>
      Buffer.from(ListNetworkRouteTablesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListNetworkRouteTablesResponse.decode(value),
  },
  /** Lists operations for the specified network. */
  listOperations: {
    path: "/yandex.cloud.vpc.v1.NetworkService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListNetworkOperationsRequest) =>
      Buffer.from(ListNetworkOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListNetworkOperationsRequest.decode(value),
    responseSerialize: (value: ListNetworkOperationsResponse) =>
      Buffer.from(ListNetworkOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListNetworkOperationsResponse.decode(value),
  },
  /** Move network to another folder. */
  move: {
    path: "/yandex.cloud.vpc.v1.NetworkService/Move",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MoveNetworkRequest) =>
      Buffer.from(MoveNetworkRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MoveNetworkRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface NetworkServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified Network resource.
   *
   * Get the list of available Network resources by making a [List] request.
   */
  get: handleUnaryCall<GetNetworkRequest, Network>;
  /** Retrieves the list of Network resources in the specified folder. */
  list: handleUnaryCall<ListNetworksRequest, ListNetworksResponse>;
  /**
   * Creates a network in the specified folder using the data specified in the request.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  create: handleUnaryCall<CreateNetworkRequest, Operation>;
  /**
   * Updates the specified network.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  update: handleUnaryCall<UpdateNetworkRequest, Operation>;
  /** Deletes the specified network. */
  delete: handleUnaryCall<DeleteNetworkRequest, Operation>;
  /** Lists subnets from the specified network. */
  listSubnets: handleUnaryCall<
    ListNetworkSubnetsRequest,
    ListNetworkSubnetsResponse
  >;
  /** Lists security groups from the specified network. */
  listSecurityGroups: handleUnaryCall<
    ListNetworkSecurityGroupsRequest,
    ListNetworkSecurityGroupsResponse
  >;
  /** Lists route tables from the specified network. */
  listRouteTables: handleUnaryCall<
    ListNetworkRouteTablesRequest,
    ListNetworkRouteTablesResponse
  >;
  /** Lists operations for the specified network. */
  listOperations: handleUnaryCall<
    ListNetworkOperationsRequest,
    ListNetworkOperationsResponse
  >;
  /** Move network to another folder. */
  move: handleUnaryCall<MoveNetworkRequest, Operation>;
}

export interface NetworkServiceClient extends Client {
  /**
   * Returns the specified Network resource.
   *
   * Get the list of available Network resources by making a [List] request.
   */
  get(
    request: GetNetworkRequest,
    callback: (error: ServiceError | null, response: Network) => void
  ): ClientUnaryCall;
  get(
    request: GetNetworkRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Network) => void
  ): ClientUnaryCall;
  get(
    request: GetNetworkRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Network) => void
  ): ClientUnaryCall;
  /** Retrieves the list of Network resources in the specified folder. */
  list(
    request: ListNetworksRequest,
    callback: (
      error: ServiceError | null,
      response: ListNetworksResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListNetworksRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListNetworksResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListNetworksRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListNetworksResponse
    ) => void
  ): ClientUnaryCall;
  /**
   * Creates a network in the specified folder using the data specified in the request.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  create(
    request: CreateNetworkRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateNetworkRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateNetworkRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Updates the specified network.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  update(
    request: UpdateNetworkRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateNetworkRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateNetworkRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified network. */
  delete(
    request: DeleteNetworkRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteNetworkRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteNetworkRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists subnets from the specified network. */
  listSubnets(
    request: ListNetworkSubnetsRequest,
    callback: (
      error: ServiceError | null,
      response: ListNetworkSubnetsResponse
    ) => void
  ): ClientUnaryCall;
  listSubnets(
    request: ListNetworkSubnetsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListNetworkSubnetsResponse
    ) => void
  ): ClientUnaryCall;
  listSubnets(
    request: ListNetworkSubnetsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListNetworkSubnetsResponse
    ) => void
  ): ClientUnaryCall;
  /** Lists security groups from the specified network. */
  listSecurityGroups(
    request: ListNetworkSecurityGroupsRequest,
    callback: (
      error: ServiceError | null,
      response: ListNetworkSecurityGroupsResponse
    ) => void
  ): ClientUnaryCall;
  listSecurityGroups(
    request: ListNetworkSecurityGroupsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListNetworkSecurityGroupsResponse
    ) => void
  ): ClientUnaryCall;
  listSecurityGroups(
    request: ListNetworkSecurityGroupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListNetworkSecurityGroupsResponse
    ) => void
  ): ClientUnaryCall;
  /** Lists route tables from the specified network. */
  listRouteTables(
    request: ListNetworkRouteTablesRequest,
    callback: (
      error: ServiceError | null,
      response: ListNetworkRouteTablesResponse
    ) => void
  ): ClientUnaryCall;
  listRouteTables(
    request: ListNetworkRouteTablesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListNetworkRouteTablesResponse
    ) => void
  ): ClientUnaryCall;
  listRouteTables(
    request: ListNetworkRouteTablesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListNetworkRouteTablesResponse
    ) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified network. */
  listOperations(
    request: ListNetworkOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListNetworkOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListNetworkOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListNetworkOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListNetworkOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListNetworkOperationsResponse
    ) => void
  ): ClientUnaryCall;
  /** Move network to another folder. */
  move(
    request: MoveNetworkRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  move(
    request: MoveNetworkRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  move(
    request: MoveNetworkRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const NetworkServiceClient = makeGenericClientConstructor(
  NetworkServiceService,
  "yandex.cloud.vpc.v1.NetworkService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): NetworkServiceClient;
  service: typeof NetworkServiceService;
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
