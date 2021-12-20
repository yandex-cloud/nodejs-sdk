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
  DhcpOptions,
  IpVersion,
  Subnet,
  ipVersionFromJSON,
  ipVersionToJSON,
} from "../../../../yandex/cloud/vpc/v1/subnet";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { Reference } from "../../../../yandex/cloud/reference/reference";

export const protobufPackage = "yandex.cloud.vpc.v1";

export interface GetSubnetRequest {
  $type: "yandex.cloud.vpc.v1.GetSubnetRequest";
  /**
   * ID of the Subnet resource to return.
   * To get the subnet ID use a [SubnetService.List] request.
   */
  subnetId: string;
}

export interface ListSubnetsRequest {
  $type: "yandex.cloud.vpc.v1.ListSubnetsRequest";
  /**
   * ID of the folder to list subnets in.
   * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListSubnetsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListSubnetsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [Subnet.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
}

export interface ListSubnetsResponse {
  $type: "yandex.cloud.vpc.v1.ListSubnetsResponse";
  /** List of Subnet resources. */
  subnets: Subnet[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListSubnetsRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListSubnetsRequest.page_token] query parameter
   * in the next list request. Subsequent list requests will have their own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateSubnetRequest {
  $type: "yandex.cloud.vpc.v1.CreateSubnetRequest";
  /**
   * ID of the folder to create a subnet in.
   * To get folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the subnet.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the subnet. */
  description: string;
  /** Resource labels, `` key:value `` pairs. */
  labels: { [key: string]: string };
  /** ID of the network to create subnet in. */
  networkId: string;
  /**
   * ID of the availability zone where the subnet resides.
   * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request.
   */
  zoneId: string;
  /**
   * CIDR block.
   * The range of internal addresses that are defined for this subnet.
   * This field can be set only at Subnet resource creation time and cannot be changed.
   * For example, 10.0.0.0/22 or 192.168.0.0/24.
   * Minimum subnet size is /28, maximum subnet size is /16.
   */
  v4CidrBlocks: string[];
  /** ID of route table the subnet is linked to. */
  routeTableId: string;
  dhcpOptions?: DhcpOptions;
}

export interface CreateSubnetRequest_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.CreateSubnetRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateSubnetMetadata {
  $type: "yandex.cloud.vpc.v1.CreateSubnetMetadata";
  /** ID of the subnet that is being created. */
  subnetId: string;
}

export interface UpdateSubnetRequest {
  $type: "yandex.cloud.vpc.v1.UpdateSubnetRequest";
  /** ID of the Subnet resource to update. */
  subnetId: string;
  /** Field mask that specifies which fields of the Subnet resource are going to be updated. */
  updateMask?: FieldMask;
  /**
   * Name of the subnet.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the subnet. */
  description: string;
  /** Resource labels as `` key:value `` pairs. */
  labels: { [key: string]: string };
  /** ID of route table the subnet is linked to. */
  routeTableId: string;
  dhcpOptions?: DhcpOptions;
}

export interface UpdateSubnetRequest_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.UpdateSubnetRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateSubnetMetadata {
  $type: "yandex.cloud.vpc.v1.UpdateSubnetMetadata";
  /** ID of the Subnet resource that is being updated. */
  subnetId: string;
}

export interface AddSubnetCidrBlocksRequest {
  $type: "yandex.cloud.vpc.v1.AddSubnetCidrBlocksRequest";
  /** ID of the Subnet resource that is being updated. */
  subnetId: string;
  /**
   * CIDR block.
   * The range of internal addresses that should be added to this subnet.
   * For example, 10.0.0.0/22 or 192.168.0.0/24.
   * Minimum subnet size is /28, maximum subnet size is /16.
   */
  v4CidrBlocks: string[];
}

export interface AddSubnetCidrBlocksMetadata {
  $type: "yandex.cloud.vpc.v1.AddSubnetCidrBlocksMetadata";
  /** ID of the Subnet resource that is being updated. */
  subnetId: string;
}

export interface RemoveSubnetCidrBlocksRequest {
  $type: "yandex.cloud.vpc.v1.RemoveSubnetCidrBlocksRequest";
  /** ID of the Subnet resource that is being updated. */
  subnetId: string;
  /**
   * CIDR block.
   * The range of internal addresses that are removed from this subnet.
   */
  v4CidrBlocks: string[];
}

export interface RemoveSubnetCidrBlocksMetadata {
  $type: "yandex.cloud.vpc.v1.RemoveSubnetCidrBlocksMetadata";
  /** ID of the Subnet resource that is being updated. */
  subnetId: string;
}

export interface DeleteSubnetRequest {
  $type: "yandex.cloud.vpc.v1.DeleteSubnetRequest";
  /**
   * ID of the subnet to delete.
   * To get the subnet ID use a [SubnetService.List] request.
   */
  subnetId: string;
}

export interface DeleteSubnetMetadata {
  $type: "yandex.cloud.vpc.v1.DeleteSubnetMetadata";
  /** ID of the Subnet resource that is being deleted. */
  subnetId: string;
}

export interface ListSubnetOperationsRequest {
  $type: "yandex.cloud.vpc.v1.ListSubnetOperationsRequest";
  /** ID of the Subnet resource to list operations for. */
  subnetId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size], the service returns a [ListSubnetOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListSubnetOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListSubnetOperationsResponse {
  $type: "yandex.cloud.vpc.v1.ListSubnetOperationsResponse";
  /** List of operations for the specified Subnet resource. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListSubnetOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListSubnetOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface MoveSubnetRequest {
  $type: "yandex.cloud.vpc.v1.MoveSubnetRequest";
  /** ID of the Subnet resource to move. */
  subnetId: string;
  /** ID of the destination folder. */
  destinationFolderId: string;
}

export interface MoveSubnetMetadata {
  $type: "yandex.cloud.vpc.v1.MoveSubnetMetadata";
  /** ID of the Subnet resource that is being moved. */
  subnetId: string;
}

export interface ListUsedAddressesRequest {
  $type: "yandex.cloud.vpc.v1.ListUsedAddressesRequest";
  subnetId: string;
  pageSize: number;
  pageToken: string;
  filter: string;
}

export interface ListUsedAddressesResponse {
  $type: "yandex.cloud.vpc.v1.ListUsedAddressesResponse";
  addresses: UsedAddress[];
  nextPageToken: string;
}

export interface UsedAddress {
  $type: "yandex.cloud.vpc.v1.UsedAddress";
  address: string;
  ipVersion: IpVersion;
  references: Reference[];
}

const baseGetSubnetRequest: object = {
  $type: "yandex.cloud.vpc.v1.GetSubnetRequest",
  subnetId: "",
};

export const GetSubnetRequest = {
  $type: "yandex.cloud.vpc.v1.GetSubnetRequest" as const,

  encode(
    message: GetSubnetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSubnetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetSubnetRequest } as GetSubnetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subnetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetSubnetRequest {
    const message = { ...baseGetSubnetRequest } as GetSubnetRequest;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    return message;
  },

  toJSON(message: GetSubnetRequest): unknown {
    const obj: any = {};
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetSubnetRequest>, I>>(
    object: I
  ): GetSubnetRequest {
    const message = { ...baseGetSubnetRequest } as GetSubnetRequest;
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetSubnetRequest.$type, GetSubnetRequest);

const baseListSubnetsRequest: object = {
  $type: "yandex.cloud.vpc.v1.ListSubnetsRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListSubnetsRequest = {
  $type: "yandex.cloud.vpc.v1.ListSubnetsRequest" as const,

  encode(
    message: ListSubnetsRequest,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSubnetsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListSubnetsRequest } as ListSubnetsRequest;
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

  fromJSON(object: any): ListSubnetsRequest {
    const message = { ...baseListSubnetsRequest } as ListSubnetsRequest;
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

  toJSON(message: ListSubnetsRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListSubnetsRequest>, I>>(
    object: I
  ): ListSubnetsRequest {
    const message = { ...baseListSubnetsRequest } as ListSubnetsRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSubnetsRequest.$type, ListSubnetsRequest);

const baseListSubnetsResponse: object = {
  $type: "yandex.cloud.vpc.v1.ListSubnetsResponse",
  nextPageToken: "",
};

export const ListSubnetsResponse = {
  $type: "yandex.cloud.vpc.v1.ListSubnetsResponse" as const,

  encode(
    message: ListSubnetsResponse,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSubnetsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListSubnetsResponse } as ListSubnetsResponse;
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

  fromJSON(object: any): ListSubnetsResponse {
    const message = { ...baseListSubnetsResponse } as ListSubnetsResponse;
    message.subnets = (object.subnets ?? []).map((e: any) =>
      Subnet.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListSubnetsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<ListSubnetsResponse>, I>>(
    object: I
  ): ListSubnetsResponse {
    const message = { ...baseListSubnetsResponse } as ListSubnetsResponse;
    message.subnets = object.subnets?.map((e) => Subnet.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSubnetsResponse.$type, ListSubnetsResponse);

const baseCreateSubnetRequest: object = {
  $type: "yandex.cloud.vpc.v1.CreateSubnetRequest",
  folderId: "",
  name: "",
  description: "",
  networkId: "",
  zoneId: "",
  v4CidrBlocks: "",
  routeTableId: "",
};

export const CreateSubnetRequest = {
  $type: "yandex.cloud.vpc.v1.CreateSubnetRequest" as const,

  encode(
    message: CreateSubnetRequest,
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
      CreateSubnetRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.vpc.v1.CreateSubnetRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.networkId !== "") {
      writer.uint32(42).string(message.networkId);
    }
    if (message.zoneId !== "") {
      writer.uint32(50).string(message.zoneId);
    }
    for (const v of message.v4CidrBlocks) {
      writer.uint32(58).string(v!);
    }
    if (message.routeTableId !== "") {
      writer.uint32(74).string(message.routeTableId);
    }
    if (message.dhcpOptions !== undefined) {
      DhcpOptions.encode(
        message.dhcpOptions,
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSubnetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateSubnetRequest } as CreateSubnetRequest;
    message.labels = {};
    message.v4CidrBlocks = [];
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
          const entry4 = CreateSubnetRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.networkId = reader.string();
          break;
        case 6:
          message.zoneId = reader.string();
          break;
        case 7:
          message.v4CidrBlocks.push(reader.string());
          break;
        case 9:
          message.routeTableId = reader.string();
          break;
        case 10:
          message.dhcpOptions = DhcpOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateSubnetRequest {
    const message = { ...baseCreateSubnetRequest } as CreateSubnetRequest;
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
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.zoneId =
      object.zoneId !== undefined && object.zoneId !== null
        ? String(object.zoneId)
        : "";
    message.v4CidrBlocks = (object.v4CidrBlocks ?? []).map((e: any) =>
      String(e)
    );
    message.routeTableId =
      object.routeTableId !== undefined && object.routeTableId !== null
        ? String(object.routeTableId)
        : "";
    message.dhcpOptions =
      object.dhcpOptions !== undefined && object.dhcpOptions !== null
        ? DhcpOptions.fromJSON(object.dhcpOptions)
        : undefined;
    return message;
  },

  toJSON(message: CreateSubnetRequest): unknown {
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
    message.networkId !== undefined && (obj.networkId = message.networkId);
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    if (message.v4CidrBlocks) {
      obj.v4CidrBlocks = message.v4CidrBlocks.map((e) => e);
    } else {
      obj.v4CidrBlocks = [];
    }
    message.routeTableId !== undefined &&
      (obj.routeTableId = message.routeTableId);
    message.dhcpOptions !== undefined &&
      (obj.dhcpOptions = message.dhcpOptions
        ? DhcpOptions.toJSON(message.dhcpOptions)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateSubnetRequest>, I>>(
    object: I
  ): CreateSubnetRequest {
    const message = { ...baseCreateSubnetRequest } as CreateSubnetRequest;
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
    message.networkId = object.networkId ?? "";
    message.zoneId = object.zoneId ?? "";
    message.v4CidrBlocks = object.v4CidrBlocks?.map((e) => e) || [];
    message.routeTableId = object.routeTableId ?? "";
    message.dhcpOptions =
      object.dhcpOptions !== undefined && object.dhcpOptions !== null
        ? DhcpOptions.fromPartial(object.dhcpOptions)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateSubnetRequest.$type, CreateSubnetRequest);

const baseCreateSubnetRequest_LabelsEntry: object = {
  $type: "yandex.cloud.vpc.v1.CreateSubnetRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateSubnetRequest_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.CreateSubnetRequest.LabelsEntry" as const,

  encode(
    message: CreateSubnetRequest_LabelsEntry,
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
  ): CreateSubnetRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateSubnetRequest_LabelsEntry,
    } as CreateSubnetRequest_LabelsEntry;
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

  fromJSON(object: any): CreateSubnetRequest_LabelsEntry {
    const message = {
      ...baseCreateSubnetRequest_LabelsEntry,
    } as CreateSubnetRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateSubnetRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateSubnetRequest_LabelsEntry>, I>>(
    object: I
  ): CreateSubnetRequest_LabelsEntry {
    const message = {
      ...baseCreateSubnetRequest_LabelsEntry,
    } as CreateSubnetRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateSubnetRequest_LabelsEntry.$type,
  CreateSubnetRequest_LabelsEntry
);

const baseCreateSubnetMetadata: object = {
  $type: "yandex.cloud.vpc.v1.CreateSubnetMetadata",
  subnetId: "",
};

export const CreateSubnetMetadata = {
  $type: "yandex.cloud.vpc.v1.CreateSubnetMetadata" as const,

  encode(
    message: CreateSubnetMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateSubnetMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateSubnetMetadata } as CreateSubnetMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subnetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateSubnetMetadata {
    const message = { ...baseCreateSubnetMetadata } as CreateSubnetMetadata;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    return message;
  },

  toJSON(message: CreateSubnetMetadata): unknown {
    const obj: any = {};
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateSubnetMetadata>, I>>(
    object: I
  ): CreateSubnetMetadata {
    const message = { ...baseCreateSubnetMetadata } as CreateSubnetMetadata;
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateSubnetMetadata.$type, CreateSubnetMetadata);

const baseUpdateSubnetRequest: object = {
  $type: "yandex.cloud.vpc.v1.UpdateSubnetRequest",
  subnetId: "",
  name: "",
  description: "",
  routeTableId: "",
};

export const UpdateSubnetRequest = {
  $type: "yandex.cloud.vpc.v1.UpdateSubnetRequest" as const,

  encode(
    message: UpdateSubnetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
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
      UpdateSubnetRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.vpc.v1.UpdateSubnetRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.routeTableId !== "") {
      writer.uint32(50).string(message.routeTableId);
    }
    if (message.dhcpOptions !== undefined) {
      DhcpOptions.encode(
        message.dhcpOptions,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSubnetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateSubnetRequest } as UpdateSubnetRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subnetId = reader.string();
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
          const entry5 = UpdateSubnetRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.routeTableId = reader.string();
          break;
        case 7:
          message.dhcpOptions = DhcpOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSubnetRequest {
    const message = { ...baseUpdateSubnetRequest } as UpdateSubnetRequest;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
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
    message.routeTableId =
      object.routeTableId !== undefined && object.routeTableId !== null
        ? String(object.routeTableId)
        : "";
    message.dhcpOptions =
      object.dhcpOptions !== undefined && object.dhcpOptions !== null
        ? DhcpOptions.fromJSON(object.dhcpOptions)
        : undefined;
    return message;
  },

  toJSON(message: UpdateSubnetRequest): unknown {
    const obj: any = {};
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
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
    message.routeTableId !== undefined &&
      (obj.routeTableId = message.routeTableId);
    message.dhcpOptions !== undefined &&
      (obj.dhcpOptions = message.dhcpOptions
        ? DhcpOptions.toJSON(message.dhcpOptions)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSubnetRequest>, I>>(
    object: I
  ): UpdateSubnetRequest {
    const message = { ...baseUpdateSubnetRequest } as UpdateSubnetRequest;
    message.subnetId = object.subnetId ?? "";
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
    message.routeTableId = object.routeTableId ?? "";
    message.dhcpOptions =
      object.dhcpOptions !== undefined && object.dhcpOptions !== null
        ? DhcpOptions.fromPartial(object.dhcpOptions)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateSubnetRequest.$type, UpdateSubnetRequest);

const baseUpdateSubnetRequest_LabelsEntry: object = {
  $type: "yandex.cloud.vpc.v1.UpdateSubnetRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateSubnetRequest_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.UpdateSubnetRequest.LabelsEntry" as const,

  encode(
    message: UpdateSubnetRequest_LabelsEntry,
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
  ): UpdateSubnetRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateSubnetRequest_LabelsEntry,
    } as UpdateSubnetRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateSubnetRequest_LabelsEntry {
    const message = {
      ...baseUpdateSubnetRequest_LabelsEntry,
    } as UpdateSubnetRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateSubnetRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSubnetRequest_LabelsEntry>, I>>(
    object: I
  ): UpdateSubnetRequest_LabelsEntry {
    const message = {
      ...baseUpdateSubnetRequest_LabelsEntry,
    } as UpdateSubnetRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateSubnetRequest_LabelsEntry.$type,
  UpdateSubnetRequest_LabelsEntry
);

const baseUpdateSubnetMetadata: object = {
  $type: "yandex.cloud.vpc.v1.UpdateSubnetMetadata",
  subnetId: "",
};

export const UpdateSubnetMetadata = {
  $type: "yandex.cloud.vpc.v1.UpdateSubnetMetadata" as const,

  encode(
    message: UpdateSubnetMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateSubnetMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateSubnetMetadata } as UpdateSubnetMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subnetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSubnetMetadata {
    const message = { ...baseUpdateSubnetMetadata } as UpdateSubnetMetadata;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    return message;
  },

  toJSON(message: UpdateSubnetMetadata): unknown {
    const obj: any = {};
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSubnetMetadata>, I>>(
    object: I
  ): UpdateSubnetMetadata {
    const message = { ...baseUpdateSubnetMetadata } as UpdateSubnetMetadata;
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateSubnetMetadata.$type, UpdateSubnetMetadata);

const baseAddSubnetCidrBlocksRequest: object = {
  $type: "yandex.cloud.vpc.v1.AddSubnetCidrBlocksRequest",
  subnetId: "",
  v4CidrBlocks: "",
};

export const AddSubnetCidrBlocksRequest = {
  $type: "yandex.cloud.vpc.v1.AddSubnetCidrBlocksRequest" as const,

  encode(
    message: AddSubnetCidrBlocksRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    for (const v of message.v4CidrBlocks) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddSubnetCidrBlocksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddSubnetCidrBlocksRequest,
    } as AddSubnetCidrBlocksRequest;
    message.v4CidrBlocks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subnetId = reader.string();
          break;
        case 2:
          message.v4CidrBlocks.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddSubnetCidrBlocksRequest {
    const message = {
      ...baseAddSubnetCidrBlocksRequest,
    } as AddSubnetCidrBlocksRequest;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.v4CidrBlocks = (object.v4CidrBlocks ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: AddSubnetCidrBlocksRequest): unknown {
    const obj: any = {};
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    if (message.v4CidrBlocks) {
      obj.v4CidrBlocks = message.v4CidrBlocks.map((e) => e);
    } else {
      obj.v4CidrBlocks = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddSubnetCidrBlocksRequest>, I>>(
    object: I
  ): AddSubnetCidrBlocksRequest {
    const message = {
      ...baseAddSubnetCidrBlocksRequest,
    } as AddSubnetCidrBlocksRequest;
    message.subnetId = object.subnetId ?? "";
    message.v4CidrBlocks = object.v4CidrBlocks?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  AddSubnetCidrBlocksRequest.$type,
  AddSubnetCidrBlocksRequest
);

const baseAddSubnetCidrBlocksMetadata: object = {
  $type: "yandex.cloud.vpc.v1.AddSubnetCidrBlocksMetadata",
  subnetId: "",
};

export const AddSubnetCidrBlocksMetadata = {
  $type: "yandex.cloud.vpc.v1.AddSubnetCidrBlocksMetadata" as const,

  encode(
    message: AddSubnetCidrBlocksMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddSubnetCidrBlocksMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddSubnetCidrBlocksMetadata,
    } as AddSubnetCidrBlocksMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subnetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddSubnetCidrBlocksMetadata {
    const message = {
      ...baseAddSubnetCidrBlocksMetadata,
    } as AddSubnetCidrBlocksMetadata;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    return message;
  },

  toJSON(message: AddSubnetCidrBlocksMetadata): unknown {
    const obj: any = {};
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddSubnetCidrBlocksMetadata>, I>>(
    object: I
  ): AddSubnetCidrBlocksMetadata {
    const message = {
      ...baseAddSubnetCidrBlocksMetadata,
    } as AddSubnetCidrBlocksMetadata;
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  AddSubnetCidrBlocksMetadata.$type,
  AddSubnetCidrBlocksMetadata
);

const baseRemoveSubnetCidrBlocksRequest: object = {
  $type: "yandex.cloud.vpc.v1.RemoveSubnetCidrBlocksRequest",
  subnetId: "",
  v4CidrBlocks: "",
};

export const RemoveSubnetCidrBlocksRequest = {
  $type: "yandex.cloud.vpc.v1.RemoveSubnetCidrBlocksRequest" as const,

  encode(
    message: RemoveSubnetCidrBlocksRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    for (const v of message.v4CidrBlocks) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveSubnetCidrBlocksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRemoveSubnetCidrBlocksRequest,
    } as RemoveSubnetCidrBlocksRequest;
    message.v4CidrBlocks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subnetId = reader.string();
          break;
        case 2:
          message.v4CidrBlocks.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveSubnetCidrBlocksRequest {
    const message = {
      ...baseRemoveSubnetCidrBlocksRequest,
    } as RemoveSubnetCidrBlocksRequest;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.v4CidrBlocks = (object.v4CidrBlocks ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: RemoveSubnetCidrBlocksRequest): unknown {
    const obj: any = {};
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    if (message.v4CidrBlocks) {
      obj.v4CidrBlocks = message.v4CidrBlocks.map((e) => e);
    } else {
      obj.v4CidrBlocks = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveSubnetCidrBlocksRequest>, I>>(
    object: I
  ): RemoveSubnetCidrBlocksRequest {
    const message = {
      ...baseRemoveSubnetCidrBlocksRequest,
    } as RemoveSubnetCidrBlocksRequest;
    message.subnetId = object.subnetId ?? "";
    message.v4CidrBlocks = object.v4CidrBlocks?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  RemoveSubnetCidrBlocksRequest.$type,
  RemoveSubnetCidrBlocksRequest
);

const baseRemoveSubnetCidrBlocksMetadata: object = {
  $type: "yandex.cloud.vpc.v1.RemoveSubnetCidrBlocksMetadata",
  subnetId: "",
};

export const RemoveSubnetCidrBlocksMetadata = {
  $type: "yandex.cloud.vpc.v1.RemoveSubnetCidrBlocksMetadata" as const,

  encode(
    message: RemoveSubnetCidrBlocksMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveSubnetCidrBlocksMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRemoveSubnetCidrBlocksMetadata,
    } as RemoveSubnetCidrBlocksMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subnetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveSubnetCidrBlocksMetadata {
    const message = {
      ...baseRemoveSubnetCidrBlocksMetadata,
    } as RemoveSubnetCidrBlocksMetadata;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    return message;
  },

  toJSON(message: RemoveSubnetCidrBlocksMetadata): unknown {
    const obj: any = {};
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveSubnetCidrBlocksMetadata>, I>>(
    object: I
  ): RemoveSubnetCidrBlocksMetadata {
    const message = {
      ...baseRemoveSubnetCidrBlocksMetadata,
    } as RemoveSubnetCidrBlocksMetadata;
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  RemoveSubnetCidrBlocksMetadata.$type,
  RemoveSubnetCidrBlocksMetadata
);

const baseDeleteSubnetRequest: object = {
  $type: "yandex.cloud.vpc.v1.DeleteSubnetRequest",
  subnetId: "",
};

export const DeleteSubnetRequest = {
  $type: "yandex.cloud.vpc.v1.DeleteSubnetRequest" as const,

  encode(
    message: DeleteSubnetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSubnetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteSubnetRequest } as DeleteSubnetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subnetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteSubnetRequest {
    const message = { ...baseDeleteSubnetRequest } as DeleteSubnetRequest;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    return message;
  },

  toJSON(message: DeleteSubnetRequest): unknown {
    const obj: any = {};
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteSubnetRequest>, I>>(
    object: I
  ): DeleteSubnetRequest {
    const message = { ...baseDeleteSubnetRequest } as DeleteSubnetRequest;
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteSubnetRequest.$type, DeleteSubnetRequest);

const baseDeleteSubnetMetadata: object = {
  $type: "yandex.cloud.vpc.v1.DeleteSubnetMetadata",
  subnetId: "",
};

export const DeleteSubnetMetadata = {
  $type: "yandex.cloud.vpc.v1.DeleteSubnetMetadata" as const,

  encode(
    message: DeleteSubnetMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteSubnetMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteSubnetMetadata } as DeleteSubnetMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subnetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteSubnetMetadata {
    const message = { ...baseDeleteSubnetMetadata } as DeleteSubnetMetadata;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    return message;
  },

  toJSON(message: DeleteSubnetMetadata): unknown {
    const obj: any = {};
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteSubnetMetadata>, I>>(
    object: I
  ): DeleteSubnetMetadata {
    const message = { ...baseDeleteSubnetMetadata } as DeleteSubnetMetadata;
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteSubnetMetadata.$type, DeleteSubnetMetadata);

const baseListSubnetOperationsRequest: object = {
  $type: "yandex.cloud.vpc.v1.ListSubnetOperationsRequest",
  subnetId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListSubnetOperationsRequest = {
  $type: "yandex.cloud.vpc.v1.ListSubnetOperationsRequest" as const,

  encode(
    message: ListSubnetOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
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
  ): ListSubnetOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListSubnetOperationsRequest,
    } as ListSubnetOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subnetId = reader.string();
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

  fromJSON(object: any): ListSubnetOperationsRequest {
    const message = {
      ...baseListSubnetOperationsRequest,
    } as ListSubnetOperationsRequest;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
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

  toJSON(message: ListSubnetOperationsRequest): unknown {
    const obj: any = {};
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListSubnetOperationsRequest>, I>>(
    object: I
  ): ListSubnetOperationsRequest {
    const message = {
      ...baseListSubnetOperationsRequest,
    } as ListSubnetOperationsRequest;
    message.subnetId = object.subnetId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListSubnetOperationsRequest.$type,
  ListSubnetOperationsRequest
);

const baseListSubnetOperationsResponse: object = {
  $type: "yandex.cloud.vpc.v1.ListSubnetOperationsResponse",
  nextPageToken: "",
};

export const ListSubnetOperationsResponse = {
  $type: "yandex.cloud.vpc.v1.ListSubnetOperationsResponse" as const,

  encode(
    message: ListSubnetOperationsResponse,
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
  ): ListSubnetOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListSubnetOperationsResponse,
    } as ListSubnetOperationsResponse;
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

  fromJSON(object: any): ListSubnetOperationsResponse {
    const message = {
      ...baseListSubnetOperationsResponse,
    } as ListSubnetOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListSubnetOperationsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<ListSubnetOperationsResponse>, I>>(
    object: I
  ): ListSubnetOperationsResponse {
    const message = {
      ...baseListSubnetOperationsResponse,
    } as ListSubnetOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListSubnetOperationsResponse.$type,
  ListSubnetOperationsResponse
);

const baseMoveSubnetRequest: object = {
  $type: "yandex.cloud.vpc.v1.MoveSubnetRequest",
  subnetId: "",
  destinationFolderId: "",
};

export const MoveSubnetRequest = {
  $type: "yandex.cloud.vpc.v1.MoveSubnetRequest" as const,

  encode(
    message: MoveSubnetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    if (message.destinationFolderId !== "") {
      writer.uint32(18).string(message.destinationFolderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveSubnetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMoveSubnetRequest } as MoveSubnetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subnetId = reader.string();
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

  fromJSON(object: any): MoveSubnetRequest {
    const message = { ...baseMoveSubnetRequest } as MoveSubnetRequest;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.destinationFolderId =
      object.destinationFolderId !== undefined &&
      object.destinationFolderId !== null
        ? String(object.destinationFolderId)
        : "";
    return message;
  },

  toJSON(message: MoveSubnetRequest): unknown {
    const obj: any = {};
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    message.destinationFolderId !== undefined &&
      (obj.destinationFolderId = message.destinationFolderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MoveSubnetRequest>, I>>(
    object: I
  ): MoveSubnetRequest {
    const message = { ...baseMoveSubnetRequest } as MoveSubnetRequest;
    message.subnetId = object.subnetId ?? "";
    message.destinationFolderId = object.destinationFolderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MoveSubnetRequest.$type, MoveSubnetRequest);

const baseMoveSubnetMetadata: object = {
  $type: "yandex.cloud.vpc.v1.MoveSubnetMetadata",
  subnetId: "",
};

export const MoveSubnetMetadata = {
  $type: "yandex.cloud.vpc.v1.MoveSubnetMetadata" as const,

  encode(
    message: MoveSubnetMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveSubnetMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMoveSubnetMetadata } as MoveSubnetMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subnetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MoveSubnetMetadata {
    const message = { ...baseMoveSubnetMetadata } as MoveSubnetMetadata;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    return message;
  },

  toJSON(message: MoveSubnetMetadata): unknown {
    const obj: any = {};
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MoveSubnetMetadata>, I>>(
    object: I
  ): MoveSubnetMetadata {
    const message = { ...baseMoveSubnetMetadata } as MoveSubnetMetadata;
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MoveSubnetMetadata.$type, MoveSubnetMetadata);

const baseListUsedAddressesRequest: object = {
  $type: "yandex.cloud.vpc.v1.ListUsedAddressesRequest",
  subnetId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListUsedAddressesRequest = {
  $type: "yandex.cloud.vpc.v1.ListUsedAddressesRequest" as const,

  encode(
    message: ListUsedAddressesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
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
  ): ListUsedAddressesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListUsedAddressesRequest,
    } as ListUsedAddressesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subnetId = reader.string();
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

  fromJSON(object: any): ListUsedAddressesRequest {
    const message = {
      ...baseListUsedAddressesRequest,
    } as ListUsedAddressesRequest;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
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

  toJSON(message: ListUsedAddressesRequest): unknown {
    const obj: any = {};
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListUsedAddressesRequest>, I>>(
    object: I
  ): ListUsedAddressesRequest {
    const message = {
      ...baseListUsedAddressesRequest,
    } as ListUsedAddressesRequest;
    message.subnetId = object.subnetId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListUsedAddressesRequest.$type,
  ListUsedAddressesRequest
);

const baseListUsedAddressesResponse: object = {
  $type: "yandex.cloud.vpc.v1.ListUsedAddressesResponse",
  nextPageToken: "",
};

export const ListUsedAddressesResponse = {
  $type: "yandex.cloud.vpc.v1.ListUsedAddressesResponse" as const,

  encode(
    message: ListUsedAddressesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.addresses) {
      UsedAddress.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListUsedAddressesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListUsedAddressesResponse,
    } as ListUsedAddressesResponse;
    message.addresses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(UsedAddress.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListUsedAddressesResponse {
    const message = {
      ...baseListUsedAddressesResponse,
    } as ListUsedAddressesResponse;
    message.addresses = (object.addresses ?? []).map((e: any) =>
      UsedAddress.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListUsedAddressesResponse): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) =>
        e ? UsedAddress.toJSON(e) : undefined
      );
    } else {
      obj.addresses = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListUsedAddressesResponse>, I>>(
    object: I
  ): ListUsedAddressesResponse {
    const message = {
      ...baseListUsedAddressesResponse,
    } as ListUsedAddressesResponse;
    message.addresses =
      object.addresses?.map((e) => UsedAddress.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListUsedAddressesResponse.$type,
  ListUsedAddressesResponse
);

const baseUsedAddress: object = {
  $type: "yandex.cloud.vpc.v1.UsedAddress",
  address: "",
  ipVersion: 0,
};

export const UsedAddress = {
  $type: "yandex.cloud.vpc.v1.UsedAddress" as const,

  encode(
    message: UsedAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.ipVersion !== 0) {
      writer.uint32(16).int32(message.ipVersion);
    }
    for (const v of message.references) {
      Reference.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UsedAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUsedAddress } as UsedAddress;
    message.references = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.ipVersion = reader.int32() as any;
          break;
        case 3:
          message.references.push(Reference.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UsedAddress {
    const message = { ...baseUsedAddress } as UsedAddress;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.ipVersion =
      object.ipVersion !== undefined && object.ipVersion !== null
        ? ipVersionFromJSON(object.ipVersion)
        : 0;
    message.references = (object.references ?? []).map((e: any) =>
      Reference.fromJSON(e)
    );
    return message;
  },

  toJSON(message: UsedAddress): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.ipVersion !== undefined &&
      (obj.ipVersion = ipVersionToJSON(message.ipVersion));
    if (message.references) {
      obj.references = message.references.map((e) =>
        e ? Reference.toJSON(e) : undefined
      );
    } else {
      obj.references = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UsedAddress>, I>>(
    object: I
  ): UsedAddress {
    const message = { ...baseUsedAddress } as UsedAddress;
    message.address = object.address ?? "";
    message.ipVersion = object.ipVersion ?? 0;
    message.references =
      object.references?.map((e) => Reference.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(UsedAddress.$type, UsedAddress);

/** A set of methods for managing Subnet resources. */
export const SubnetServiceService = {
  /**
   * Returns the specified Subnet resource.
   *
   * To get the list of available Subnet resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.vpc.v1.SubnetService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetSubnetRequest) =>
      Buffer.from(GetSubnetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetSubnetRequest.decode(value),
    responseSerialize: (value: Subnet) =>
      Buffer.from(Subnet.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Subnet.decode(value),
  },
  /** Retrieves the list of Subnet resources in the specified folder. */
  list: {
    path: "/yandex.cloud.vpc.v1.SubnetService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSubnetsRequest) =>
      Buffer.from(ListSubnetsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListSubnetsRequest.decode(value),
    responseSerialize: (value: ListSubnetsResponse) =>
      Buffer.from(ListSubnetsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListSubnetsResponse.decode(value),
  },
  /**
   * Creates a subnet in the specified folder and network.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  create: {
    path: "/yandex.cloud.vpc.v1.SubnetService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateSubnetRequest) =>
      Buffer.from(CreateSubnetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateSubnetRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Updates the specified subnet.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  update: {
    path: "/yandex.cloud.vpc.v1.SubnetService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateSubnetRequest) =>
      Buffer.from(UpdateSubnetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateSubnetRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Adds CIDR blocks to the specified subnet.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  addCidrBlocks: {
    path: "/yandex.cloud.vpc.v1.SubnetService/AddCidrBlocks",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddSubnetCidrBlocksRequest) =>
      Buffer.from(AddSubnetCidrBlocksRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      AddSubnetCidrBlocksRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Removes CIDR blocks from the specified subnet.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  removeCidrBlocks: {
    path: "/yandex.cloud.vpc.v1.SubnetService/RemoveCidrBlocks",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveSubnetCidrBlocksRequest) =>
      Buffer.from(RemoveSubnetCidrBlocksRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      RemoveSubnetCidrBlocksRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified subnet. */
  delete: {
    path: "/yandex.cloud.vpc.v1.SubnetService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteSubnetRequest) =>
      Buffer.from(DeleteSubnetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteSubnetRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** List operations for the specified subnet. */
  listOperations: {
    path: "/yandex.cloud.vpc.v1.SubnetService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSubnetOperationsRequest) =>
      Buffer.from(ListSubnetOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListSubnetOperationsRequest.decode(value),
    responseSerialize: (value: ListSubnetOperationsResponse) =>
      Buffer.from(ListSubnetOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListSubnetOperationsResponse.decode(value),
  },
  /** Move subnet to another folder. */
  move: {
    path: "/yandex.cloud.vpc.v1.SubnetService/Move",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MoveSubnetRequest) =>
      Buffer.from(MoveSubnetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MoveSubnetRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** List used addresses in specified subnet. */
  listUsedAddresses: {
    path: "/yandex.cloud.vpc.v1.SubnetService/ListUsedAddresses",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListUsedAddressesRequest) =>
      Buffer.from(ListUsedAddressesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListUsedAddressesRequest.decode(value),
    responseSerialize: (value: ListUsedAddressesResponse) =>
      Buffer.from(ListUsedAddressesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListUsedAddressesResponse.decode(value),
  },
} as const;

export interface SubnetServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified Subnet resource.
   *
   * To get the list of available Subnet resources, make a [List] request.
   */
  get: handleUnaryCall<GetSubnetRequest, Subnet>;
  /** Retrieves the list of Subnet resources in the specified folder. */
  list: handleUnaryCall<ListSubnetsRequest, ListSubnetsResponse>;
  /**
   * Creates a subnet in the specified folder and network.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  create: handleUnaryCall<CreateSubnetRequest, Operation>;
  /**
   * Updates the specified subnet.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  update: handleUnaryCall<UpdateSubnetRequest, Operation>;
  /**
   * Adds CIDR blocks to the specified subnet.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  addCidrBlocks: handleUnaryCall<AddSubnetCidrBlocksRequest, Operation>;
  /**
   * Removes CIDR blocks from the specified subnet.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  removeCidrBlocks: handleUnaryCall<RemoveSubnetCidrBlocksRequest, Operation>;
  /** Deletes the specified subnet. */
  delete: handleUnaryCall<DeleteSubnetRequest, Operation>;
  /** List operations for the specified subnet. */
  listOperations: handleUnaryCall<
    ListSubnetOperationsRequest,
    ListSubnetOperationsResponse
  >;
  /** Move subnet to another folder. */
  move: handleUnaryCall<MoveSubnetRequest, Operation>;
  /** List used addresses in specified subnet. */
  listUsedAddresses: handleUnaryCall<
    ListUsedAddressesRequest,
    ListUsedAddressesResponse
  >;
}

export interface SubnetServiceClient extends Client {
  /**
   * Returns the specified Subnet resource.
   *
   * To get the list of available Subnet resources, make a [List] request.
   */
  get(
    request: GetSubnetRequest,
    callback: (error: ServiceError | null, response: Subnet) => void
  ): ClientUnaryCall;
  get(
    request: GetSubnetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Subnet) => void
  ): ClientUnaryCall;
  get(
    request: GetSubnetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Subnet) => void
  ): ClientUnaryCall;
  /** Retrieves the list of Subnet resources in the specified folder. */
  list(
    request: ListSubnetsRequest,
    callback: (
      error: ServiceError | null,
      response: ListSubnetsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListSubnetsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListSubnetsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListSubnetsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListSubnetsResponse
    ) => void
  ): ClientUnaryCall;
  /**
   * Creates a subnet in the specified folder and network.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  create(
    request: CreateSubnetRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateSubnetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateSubnetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Updates the specified subnet.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  update(
    request: UpdateSubnetRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateSubnetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateSubnetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Adds CIDR blocks to the specified subnet.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  addCidrBlocks(
    request: AddSubnetCidrBlocksRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addCidrBlocks(
    request: AddSubnetCidrBlocksRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addCidrBlocks(
    request: AddSubnetCidrBlocksRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Removes CIDR blocks from the specified subnet.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  removeCidrBlocks(
    request: RemoveSubnetCidrBlocksRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  removeCidrBlocks(
    request: RemoveSubnetCidrBlocksRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  removeCidrBlocks(
    request: RemoveSubnetCidrBlocksRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified subnet. */
  delete(
    request: DeleteSubnetRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteSubnetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteSubnetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** List operations for the specified subnet. */
  listOperations(
    request: ListSubnetOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListSubnetOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListSubnetOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListSubnetOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListSubnetOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListSubnetOperationsResponse
    ) => void
  ): ClientUnaryCall;
  /** Move subnet to another folder. */
  move(
    request: MoveSubnetRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  move(
    request: MoveSubnetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  move(
    request: MoveSubnetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** List used addresses in specified subnet. */
  listUsedAddresses(
    request: ListUsedAddressesRequest,
    callback: (
      error: ServiceError | null,
      response: ListUsedAddressesResponse
    ) => void
  ): ClientUnaryCall;
  listUsedAddresses(
    request: ListUsedAddressesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListUsedAddressesResponse
    ) => void
  ): ClientUnaryCall;
  listUsedAddresses(
    request: ListUsedAddressesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListUsedAddressesResponse
    ) => void
  ): ClientUnaryCall;
}

export const SubnetServiceClient = makeGenericClientConstructor(
  SubnetServiceService,
  "yandex.cloud.vpc.v1.SubnetService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): SubnetServiceClient;
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
