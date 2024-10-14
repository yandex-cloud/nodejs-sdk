/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
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
  PrivateEndpoint_DnsOptions,
  PrivateEndpoint_ObjectStorage,
  PrivateEndpoint,
} from "../../../../../yandex/cloud/vpc/v1/privatelink/private_endpoint";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.vpc.v1.privatelink";

export interface GetPrivateEndpointRequest {
  $type: "yandex.cloud.vpc.v1.privatelink.GetPrivateEndpointRequest";
  /**
   * ID of the PrivateEndpoint resource to return.
   *
   * To get PrivateEndpoint resource ID make a [PrivateEndpointService.List]
   * request.
   */
  privateEndpointId: string;
}

export interface InternalIpv4AddressSpec {
  $type: "yandex.cloud.vpc.v1.privatelink.InternalIpv4AddressSpec";
  /** ID of the subnet that address belongs to. */
  subnetId: string;
  /** Value of address. */
  address: string;
}

export interface AddressSpec {
  $type: "yandex.cloud.vpc.v1.privatelink.AddressSpec";
  /** ID of IP address to associate with private endpoint. */
  addressId: string | undefined;
  /** Internal ipv4 address specification. */
  internalIpv4AddressSpec?: InternalIpv4AddressSpec | undefined;
}

export interface CreatePrivateEndpointRequest {
  $type: "yandex.cloud.vpc.v1.privatelink.CreatePrivateEndpointRequest";
  /**
   * ID of the folder to create a private endpoint in.
   *
   * To get a folder ID make a
   * [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the private endpoint.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the private endpoint. */
  description: string;
  /** Private endpoint labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** ID of the network to create a private endpoint in. */
  networkId: string;
  /** Private endpoint address specification. */
  addressSpec?: AddressSpec;
  /** Private endpoint dns options. */
  dnsOptions?: PrivateEndpoint_DnsOptions;
  /** Yandex Cloud Object Storage. */
  objectStorage?: PrivateEndpoint_ObjectStorage | undefined;
}

export interface CreatePrivateEndpointRequest_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.privatelink.CreatePrivateEndpointRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreatePrivateEndpointMetadata {
  $type: "yandex.cloud.vpc.v1.privatelink.CreatePrivateEndpointMetadata";
  /** ID of the private endpoint that is being created. */
  privateEndpointId: string;
}

export interface UpdatePrivateEndpointRequest {
  $type: "yandex.cloud.vpc.v1.privatelink.UpdatePrivateEndpointRequest";
  /**
   * ID of the private endpoint to update.
   *
   * To get the private endpoint ID make a [PrivateEndpointService.List]
   * request.
   */
  privateEndpointId: string;
  /**
   * Field mask that specifies which attributes of the PrivateEndpoint should be
   * updated.
   */
  updateMask?: FieldMask;
  /**
   * New name for the private endpoint.
   * The name must be unique within the folder.
   */
  name: string;
  /** New description of the private endpoint. */
  description: string;
  /**
   * Private endpoint labels as `key:value` pairs.
   *
   * Existing set of labels is completely replaced by the provided set, so if
   * you just want to add or remove a label:
   * 1. Get the current set of labels with a [PrivateEndpointService.Get]
   * request.
   * 2. Add or remove a label in this set.
   * 3. Send the new set in this field.
   */
  labels: { [key: string]: string };
  /** Private endpoint address specification. */
  addressSpec?: AddressSpec;
  /** Private endpoint dns options. */
  dnsOptions?: PrivateEndpoint_DnsOptions;
}

export interface UpdatePrivateEndpointRequest_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.privatelink.UpdatePrivateEndpointRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdatePrivateEndpointMetadata {
  $type: "yandex.cloud.vpc.v1.privatelink.UpdatePrivateEndpointMetadata";
  /** ID of the private endpoint that is being updated. */
  privateEndpointId: string;
}

export interface DeletePrivateEndpointRequest {
  $type: "yandex.cloud.vpc.v1.privatelink.DeletePrivateEndpointRequest";
  /**
   * ID of the private endpoint to delete.
   *
   * To get a private endpoint ID make a [PrivateEndpointService.List] request.
   */
  privateEndpointId: string;
}

export interface DeletePrivateEndpointMetadata {
  $type: "yandex.cloud.vpc.v1.privatelink.DeletePrivateEndpointMetadata";
  /** ID of the private endpoint that is being deleted. */
  privateEndpointId: string;
}

export interface ListPrivateEndpointsRequest {
  $type: "yandex.cloud.vpc.v1.privatelink.ListPrivateEndpointsRequest";
  /**
   * ID of the folder to list private endpoints in.
   *
   * To get the folder ID use a
   * [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string | undefined;
  /**
   * The maximum number of results per page to return. If the number of
   * available results is larger than `page_size`, the service returns a
   * [ListPrivateEndpointsResponse.next_page_token] that can be used to get the
   * next page of results in subsequent list requests. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListPrivateEndpointsResponse.next_page_token] returned by a previous list
   * request.
   */
  pageToken: string;
  /**
   * A filter expression that filters PrivateEndpoint listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on
   * [PrivateEndpoint.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match
   * the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`. Example of a filter:
   * `name=my-private-endpoint`.
   */
  filter: string;
}

export interface ListPrivateEndpointsResponse {
  $type: "yandex.cloud.vpc.v1.privatelink.ListPrivateEndpointsResponse";
  /** List of private endpoints. */
  privateEndpoints: PrivateEndpoint[];
  /**
   * Token for getting the next page of the list. If the number of results is
   * greater than the specified [ListPrivateEndpointsRequest.page_size], use
   * `next_page_token` as the value for the
   * [ListPrivateEndpointsRequest.page_token] parameter in the next list
   * request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging
   * through the results.
   */
  nextPageToken: string;
}

export interface ListPrivateEndpointOperationsRequest {
  $type: "yandex.cloud.vpc.v1.privatelink.ListPrivateEndpointOperationsRequest";
  /**
   * ID of the private endpoint to list operations for.
   *
   * To get a private endpoint ID make a [PrivateEndpointService.List] request.
   */
  privateEndpointId: string;
  /**
   * The maximum number of results per page to return. If the number of
   * available results is larger than [page_size], the service returns a
   * [ListPrivateEndpointOperationsResponse.next_page_token] that can be used to
   * get the next page of results in subsequent list requests. Default value:
   * 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListPrivateEndpointOperationsResponse.next_page_token] returned by a
   * previous list request.
   */
  pageToken: string;
}

export interface ListPrivateEndpointOperationsResponse {
  $type: "yandex.cloud.vpc.v1.privatelink.ListPrivateEndpointOperationsResponse";
  /** List of operations for the specified private endpoint. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is
   * greater than the specified
   * [ListPrivateEndpointOperationsRequest.page_size], use `next_page_token` as
   * the value for the [ListPrivateEndpointOperationsRequest.page_token]
   * parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging
   * through the results.
   */
  nextPageToken: string;
}

const baseGetPrivateEndpointRequest: object = {
  $type: "yandex.cloud.vpc.v1.privatelink.GetPrivateEndpointRequest",
  privateEndpointId: "",
};

export const GetPrivateEndpointRequest = {
  $type: "yandex.cloud.vpc.v1.privatelink.GetPrivateEndpointRequest" as const,

  encode(
    message: GetPrivateEndpointRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.privateEndpointId !== "") {
      writer.uint32(10).string(message.privateEndpointId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetPrivateEndpointRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetPrivateEndpointRequest,
    } as GetPrivateEndpointRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.privateEndpointId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPrivateEndpointRequest {
    const message = {
      ...baseGetPrivateEndpointRequest,
    } as GetPrivateEndpointRequest;
    message.privateEndpointId =
      object.privateEndpointId !== undefined &&
      object.privateEndpointId !== null
        ? String(object.privateEndpointId)
        : "";
    return message;
  },

  toJSON(message: GetPrivateEndpointRequest): unknown {
    const obj: any = {};
    message.privateEndpointId !== undefined &&
      (obj.privateEndpointId = message.privateEndpointId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPrivateEndpointRequest>, I>>(
    object: I
  ): GetPrivateEndpointRequest {
    const message = {
      ...baseGetPrivateEndpointRequest,
    } as GetPrivateEndpointRequest;
    message.privateEndpointId = object.privateEndpointId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  GetPrivateEndpointRequest.$type,
  GetPrivateEndpointRequest
);

const baseInternalIpv4AddressSpec: object = {
  $type: "yandex.cloud.vpc.v1.privatelink.InternalIpv4AddressSpec",
  subnetId: "",
  address: "",
};

export const InternalIpv4AddressSpec = {
  $type: "yandex.cloud.vpc.v1.privatelink.InternalIpv4AddressSpec" as const,

  encode(
    message: InternalIpv4AddressSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InternalIpv4AddressSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInternalIpv4AddressSpec,
    } as InternalIpv4AddressSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subnetId = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InternalIpv4AddressSpec {
    const message = {
      ...baseInternalIpv4AddressSpec,
    } as InternalIpv4AddressSpec;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: InternalIpv4AddressSpec): unknown {
    const obj: any = {};
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InternalIpv4AddressSpec>, I>>(
    object: I
  ): InternalIpv4AddressSpec {
    const message = {
      ...baseInternalIpv4AddressSpec,
    } as InternalIpv4AddressSpec;
    message.subnetId = object.subnetId ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

messageTypeRegistry.set(InternalIpv4AddressSpec.$type, InternalIpv4AddressSpec);

const baseAddressSpec: object = {
  $type: "yandex.cloud.vpc.v1.privatelink.AddressSpec",
};

export const AddressSpec = {
  $type: "yandex.cloud.vpc.v1.privatelink.AddressSpec" as const,

  encode(
    message: AddressSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.addressId !== undefined) {
      writer.uint32(10).string(message.addressId);
    }
    if (message.internalIpv4AddressSpec !== undefined) {
      InternalIpv4AddressSpec.encode(
        message.internalIpv4AddressSpec,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddressSpec } as AddressSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressId = reader.string();
          break;
        case 2:
          message.internalIpv4AddressSpec = InternalIpv4AddressSpec.decode(
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

  fromJSON(object: any): AddressSpec {
    const message = { ...baseAddressSpec } as AddressSpec;
    message.addressId =
      object.addressId !== undefined && object.addressId !== null
        ? String(object.addressId)
        : undefined;
    message.internalIpv4AddressSpec =
      object.internalIpv4AddressSpec !== undefined &&
      object.internalIpv4AddressSpec !== null
        ? InternalIpv4AddressSpec.fromJSON(object.internalIpv4AddressSpec)
        : undefined;
    return message;
  },

  toJSON(message: AddressSpec): unknown {
    const obj: any = {};
    message.addressId !== undefined && (obj.addressId = message.addressId);
    message.internalIpv4AddressSpec !== undefined &&
      (obj.internalIpv4AddressSpec = message.internalIpv4AddressSpec
        ? InternalIpv4AddressSpec.toJSON(message.internalIpv4AddressSpec)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddressSpec>, I>>(
    object: I
  ): AddressSpec {
    const message = { ...baseAddressSpec } as AddressSpec;
    message.addressId = object.addressId ?? undefined;
    message.internalIpv4AddressSpec =
      object.internalIpv4AddressSpec !== undefined &&
      object.internalIpv4AddressSpec !== null
        ? InternalIpv4AddressSpec.fromPartial(object.internalIpv4AddressSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(AddressSpec.$type, AddressSpec);

const baseCreatePrivateEndpointRequest: object = {
  $type: "yandex.cloud.vpc.v1.privatelink.CreatePrivateEndpointRequest",
  folderId: "",
  name: "",
  description: "",
  networkId: "",
};

export const CreatePrivateEndpointRequest = {
  $type:
    "yandex.cloud.vpc.v1.privatelink.CreatePrivateEndpointRequest" as const,

  encode(
    message: CreatePrivateEndpointRequest,
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
      CreatePrivateEndpointRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.vpc.v1.privatelink.CreatePrivateEndpointRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.networkId !== "") {
      writer.uint32(42).string(message.networkId);
    }
    if (message.addressSpec !== undefined) {
      AddressSpec.encode(
        message.addressSpec,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.dnsOptions !== undefined) {
      PrivateEndpoint_DnsOptions.encode(
        message.dnsOptions,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.objectStorage !== undefined) {
      PrivateEndpoint_ObjectStorage.encode(
        message.objectStorage,
        writer.uint32(74).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreatePrivateEndpointRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreatePrivateEndpointRequest,
    } as CreatePrivateEndpointRequest;
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
          const entry4 = CreatePrivateEndpointRequest_LabelsEntry.decode(
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
          message.addressSpec = AddressSpec.decode(reader, reader.uint32());
          break;
        case 8:
          message.dnsOptions = PrivateEndpoint_DnsOptions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.objectStorage = PrivateEndpoint_ObjectStorage.decode(
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

  fromJSON(object: any): CreatePrivateEndpointRequest {
    const message = {
      ...baseCreatePrivateEndpointRequest,
    } as CreatePrivateEndpointRequest;
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
    message.addressSpec =
      object.addressSpec !== undefined && object.addressSpec !== null
        ? AddressSpec.fromJSON(object.addressSpec)
        : undefined;
    message.dnsOptions =
      object.dnsOptions !== undefined && object.dnsOptions !== null
        ? PrivateEndpoint_DnsOptions.fromJSON(object.dnsOptions)
        : undefined;
    message.objectStorage =
      object.objectStorage !== undefined && object.objectStorage !== null
        ? PrivateEndpoint_ObjectStorage.fromJSON(object.objectStorage)
        : undefined;
    return message;
  },

  toJSON(message: CreatePrivateEndpointRequest): unknown {
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
    message.addressSpec !== undefined &&
      (obj.addressSpec = message.addressSpec
        ? AddressSpec.toJSON(message.addressSpec)
        : undefined);
    message.dnsOptions !== undefined &&
      (obj.dnsOptions = message.dnsOptions
        ? PrivateEndpoint_DnsOptions.toJSON(message.dnsOptions)
        : undefined);
    message.objectStorage !== undefined &&
      (obj.objectStorage = message.objectStorage
        ? PrivateEndpoint_ObjectStorage.toJSON(message.objectStorage)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreatePrivateEndpointRequest>, I>>(
    object: I
  ): CreatePrivateEndpointRequest {
    const message = {
      ...baseCreatePrivateEndpointRequest,
    } as CreatePrivateEndpointRequest;
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
    message.addressSpec =
      object.addressSpec !== undefined && object.addressSpec !== null
        ? AddressSpec.fromPartial(object.addressSpec)
        : undefined;
    message.dnsOptions =
      object.dnsOptions !== undefined && object.dnsOptions !== null
        ? PrivateEndpoint_DnsOptions.fromPartial(object.dnsOptions)
        : undefined;
    message.objectStorage =
      object.objectStorage !== undefined && object.objectStorage !== null
        ? PrivateEndpoint_ObjectStorage.fromPartial(object.objectStorage)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  CreatePrivateEndpointRequest.$type,
  CreatePrivateEndpointRequest
);

const baseCreatePrivateEndpointRequest_LabelsEntry: object = {
  $type:
    "yandex.cloud.vpc.v1.privatelink.CreatePrivateEndpointRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreatePrivateEndpointRequest_LabelsEntry = {
  $type:
    "yandex.cloud.vpc.v1.privatelink.CreatePrivateEndpointRequest.LabelsEntry" as const,

  encode(
    message: CreatePrivateEndpointRequest_LabelsEntry,
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
  ): CreatePrivateEndpointRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreatePrivateEndpointRequest_LabelsEntry,
    } as CreatePrivateEndpointRequest_LabelsEntry;
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

  fromJSON(object: any): CreatePrivateEndpointRequest_LabelsEntry {
    const message = {
      ...baseCreatePrivateEndpointRequest_LabelsEntry,
    } as CreatePrivateEndpointRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreatePrivateEndpointRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreatePrivateEndpointRequest_LabelsEntry>, I>
  >(object: I): CreatePrivateEndpointRequest_LabelsEntry {
    const message = {
      ...baseCreatePrivateEndpointRequest_LabelsEntry,
    } as CreatePrivateEndpointRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreatePrivateEndpointRequest_LabelsEntry.$type,
  CreatePrivateEndpointRequest_LabelsEntry
);

const baseCreatePrivateEndpointMetadata: object = {
  $type: "yandex.cloud.vpc.v1.privatelink.CreatePrivateEndpointMetadata",
  privateEndpointId: "",
};

export const CreatePrivateEndpointMetadata = {
  $type:
    "yandex.cloud.vpc.v1.privatelink.CreatePrivateEndpointMetadata" as const,

  encode(
    message: CreatePrivateEndpointMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.privateEndpointId !== "") {
      writer.uint32(10).string(message.privateEndpointId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreatePrivateEndpointMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreatePrivateEndpointMetadata,
    } as CreatePrivateEndpointMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.privateEndpointId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatePrivateEndpointMetadata {
    const message = {
      ...baseCreatePrivateEndpointMetadata,
    } as CreatePrivateEndpointMetadata;
    message.privateEndpointId =
      object.privateEndpointId !== undefined &&
      object.privateEndpointId !== null
        ? String(object.privateEndpointId)
        : "";
    return message;
  },

  toJSON(message: CreatePrivateEndpointMetadata): unknown {
    const obj: any = {};
    message.privateEndpointId !== undefined &&
      (obj.privateEndpointId = message.privateEndpointId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreatePrivateEndpointMetadata>, I>>(
    object: I
  ): CreatePrivateEndpointMetadata {
    const message = {
      ...baseCreatePrivateEndpointMetadata,
    } as CreatePrivateEndpointMetadata;
    message.privateEndpointId = object.privateEndpointId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreatePrivateEndpointMetadata.$type,
  CreatePrivateEndpointMetadata
);

const baseUpdatePrivateEndpointRequest: object = {
  $type: "yandex.cloud.vpc.v1.privatelink.UpdatePrivateEndpointRequest",
  privateEndpointId: "",
  name: "",
  description: "",
};

export const UpdatePrivateEndpointRequest = {
  $type:
    "yandex.cloud.vpc.v1.privatelink.UpdatePrivateEndpointRequest" as const,

  encode(
    message: UpdatePrivateEndpointRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.privateEndpointId !== "") {
      writer.uint32(10).string(message.privateEndpointId);
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
      UpdatePrivateEndpointRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.vpc.v1.privatelink.UpdatePrivateEndpointRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.addressSpec !== undefined) {
      AddressSpec.encode(
        message.addressSpec,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.dnsOptions !== undefined) {
      PrivateEndpoint_DnsOptions.encode(
        message.dnsOptions,
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdatePrivateEndpointRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdatePrivateEndpointRequest,
    } as UpdatePrivateEndpointRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.privateEndpointId = reader.string();
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
          const entry5 = UpdatePrivateEndpointRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.addressSpec = AddressSpec.decode(reader, reader.uint32());
          break;
        case 8:
          message.dnsOptions = PrivateEndpoint_DnsOptions.decode(
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

  fromJSON(object: any): UpdatePrivateEndpointRequest {
    const message = {
      ...baseUpdatePrivateEndpointRequest,
    } as UpdatePrivateEndpointRequest;
    message.privateEndpointId =
      object.privateEndpointId !== undefined &&
      object.privateEndpointId !== null
        ? String(object.privateEndpointId)
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
    message.addressSpec =
      object.addressSpec !== undefined && object.addressSpec !== null
        ? AddressSpec.fromJSON(object.addressSpec)
        : undefined;
    message.dnsOptions =
      object.dnsOptions !== undefined && object.dnsOptions !== null
        ? PrivateEndpoint_DnsOptions.fromJSON(object.dnsOptions)
        : undefined;
    return message;
  },

  toJSON(message: UpdatePrivateEndpointRequest): unknown {
    const obj: any = {};
    message.privateEndpointId !== undefined &&
      (obj.privateEndpointId = message.privateEndpointId);
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
    message.addressSpec !== undefined &&
      (obj.addressSpec = message.addressSpec
        ? AddressSpec.toJSON(message.addressSpec)
        : undefined);
    message.dnsOptions !== undefined &&
      (obj.dnsOptions = message.dnsOptions
        ? PrivateEndpoint_DnsOptions.toJSON(message.dnsOptions)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdatePrivateEndpointRequest>, I>>(
    object: I
  ): UpdatePrivateEndpointRequest {
    const message = {
      ...baseUpdatePrivateEndpointRequest,
    } as UpdatePrivateEndpointRequest;
    message.privateEndpointId = object.privateEndpointId ?? "";
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
    message.addressSpec =
      object.addressSpec !== undefined && object.addressSpec !== null
        ? AddressSpec.fromPartial(object.addressSpec)
        : undefined;
    message.dnsOptions =
      object.dnsOptions !== undefined && object.dnsOptions !== null
        ? PrivateEndpoint_DnsOptions.fromPartial(object.dnsOptions)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  UpdatePrivateEndpointRequest.$type,
  UpdatePrivateEndpointRequest
);

const baseUpdatePrivateEndpointRequest_LabelsEntry: object = {
  $type:
    "yandex.cloud.vpc.v1.privatelink.UpdatePrivateEndpointRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdatePrivateEndpointRequest_LabelsEntry = {
  $type:
    "yandex.cloud.vpc.v1.privatelink.UpdatePrivateEndpointRequest.LabelsEntry" as const,

  encode(
    message: UpdatePrivateEndpointRequest_LabelsEntry,
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
  ): UpdatePrivateEndpointRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdatePrivateEndpointRequest_LabelsEntry,
    } as UpdatePrivateEndpointRequest_LabelsEntry;
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

  fromJSON(object: any): UpdatePrivateEndpointRequest_LabelsEntry {
    const message = {
      ...baseUpdatePrivateEndpointRequest_LabelsEntry,
    } as UpdatePrivateEndpointRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdatePrivateEndpointRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdatePrivateEndpointRequest_LabelsEntry>, I>
  >(object: I): UpdatePrivateEndpointRequest_LabelsEntry {
    const message = {
      ...baseUpdatePrivateEndpointRequest_LabelsEntry,
    } as UpdatePrivateEndpointRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdatePrivateEndpointRequest_LabelsEntry.$type,
  UpdatePrivateEndpointRequest_LabelsEntry
);

const baseUpdatePrivateEndpointMetadata: object = {
  $type: "yandex.cloud.vpc.v1.privatelink.UpdatePrivateEndpointMetadata",
  privateEndpointId: "",
};

export const UpdatePrivateEndpointMetadata = {
  $type:
    "yandex.cloud.vpc.v1.privatelink.UpdatePrivateEndpointMetadata" as const,

  encode(
    message: UpdatePrivateEndpointMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.privateEndpointId !== "") {
      writer.uint32(10).string(message.privateEndpointId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdatePrivateEndpointMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdatePrivateEndpointMetadata,
    } as UpdatePrivateEndpointMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.privateEndpointId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePrivateEndpointMetadata {
    const message = {
      ...baseUpdatePrivateEndpointMetadata,
    } as UpdatePrivateEndpointMetadata;
    message.privateEndpointId =
      object.privateEndpointId !== undefined &&
      object.privateEndpointId !== null
        ? String(object.privateEndpointId)
        : "";
    return message;
  },

  toJSON(message: UpdatePrivateEndpointMetadata): unknown {
    const obj: any = {};
    message.privateEndpointId !== undefined &&
      (obj.privateEndpointId = message.privateEndpointId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdatePrivateEndpointMetadata>, I>>(
    object: I
  ): UpdatePrivateEndpointMetadata {
    const message = {
      ...baseUpdatePrivateEndpointMetadata,
    } as UpdatePrivateEndpointMetadata;
    message.privateEndpointId = object.privateEndpointId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdatePrivateEndpointMetadata.$type,
  UpdatePrivateEndpointMetadata
);

const baseDeletePrivateEndpointRequest: object = {
  $type: "yandex.cloud.vpc.v1.privatelink.DeletePrivateEndpointRequest",
  privateEndpointId: "",
};

export const DeletePrivateEndpointRequest = {
  $type:
    "yandex.cloud.vpc.v1.privatelink.DeletePrivateEndpointRequest" as const,

  encode(
    message: DeletePrivateEndpointRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.privateEndpointId !== "") {
      writer.uint32(10).string(message.privateEndpointId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeletePrivateEndpointRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeletePrivateEndpointRequest,
    } as DeletePrivateEndpointRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.privateEndpointId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeletePrivateEndpointRequest {
    const message = {
      ...baseDeletePrivateEndpointRequest,
    } as DeletePrivateEndpointRequest;
    message.privateEndpointId =
      object.privateEndpointId !== undefined &&
      object.privateEndpointId !== null
        ? String(object.privateEndpointId)
        : "";
    return message;
  },

  toJSON(message: DeletePrivateEndpointRequest): unknown {
    const obj: any = {};
    message.privateEndpointId !== undefined &&
      (obj.privateEndpointId = message.privateEndpointId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeletePrivateEndpointRequest>, I>>(
    object: I
  ): DeletePrivateEndpointRequest {
    const message = {
      ...baseDeletePrivateEndpointRequest,
    } as DeletePrivateEndpointRequest;
    message.privateEndpointId = object.privateEndpointId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeletePrivateEndpointRequest.$type,
  DeletePrivateEndpointRequest
);

const baseDeletePrivateEndpointMetadata: object = {
  $type: "yandex.cloud.vpc.v1.privatelink.DeletePrivateEndpointMetadata",
  privateEndpointId: "",
};

export const DeletePrivateEndpointMetadata = {
  $type:
    "yandex.cloud.vpc.v1.privatelink.DeletePrivateEndpointMetadata" as const,

  encode(
    message: DeletePrivateEndpointMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.privateEndpointId !== "") {
      writer.uint32(10).string(message.privateEndpointId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeletePrivateEndpointMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeletePrivateEndpointMetadata,
    } as DeletePrivateEndpointMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.privateEndpointId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeletePrivateEndpointMetadata {
    const message = {
      ...baseDeletePrivateEndpointMetadata,
    } as DeletePrivateEndpointMetadata;
    message.privateEndpointId =
      object.privateEndpointId !== undefined &&
      object.privateEndpointId !== null
        ? String(object.privateEndpointId)
        : "";
    return message;
  },

  toJSON(message: DeletePrivateEndpointMetadata): unknown {
    const obj: any = {};
    message.privateEndpointId !== undefined &&
      (obj.privateEndpointId = message.privateEndpointId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeletePrivateEndpointMetadata>, I>>(
    object: I
  ): DeletePrivateEndpointMetadata {
    const message = {
      ...baseDeletePrivateEndpointMetadata,
    } as DeletePrivateEndpointMetadata;
    message.privateEndpointId = object.privateEndpointId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeletePrivateEndpointMetadata.$type,
  DeletePrivateEndpointMetadata
);

const baseListPrivateEndpointsRequest: object = {
  $type: "yandex.cloud.vpc.v1.privatelink.ListPrivateEndpointsRequest",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListPrivateEndpointsRequest = {
  $type: "yandex.cloud.vpc.v1.privatelink.ListPrivateEndpointsRequest" as const,

  encode(
    message: ListPrivateEndpointsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== undefined) {
      writer.uint32(10).string(message.folderId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(34).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(42).string(message.filter);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListPrivateEndpointsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListPrivateEndpointsRequest,
    } as ListPrivateEndpointsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 3:
          message.pageSize = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.pageToken = reader.string();
          break;
        case 5:
          message.filter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListPrivateEndpointsRequest {
    const message = {
      ...baseListPrivateEndpointsRequest,
    } as ListPrivateEndpointsRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : undefined;
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

  toJSON(message: ListPrivateEndpointsRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListPrivateEndpointsRequest>, I>>(
    object: I
  ): ListPrivateEndpointsRequest {
    const message = {
      ...baseListPrivateEndpointsRequest,
    } as ListPrivateEndpointsRequest;
    message.folderId = object.folderId ?? undefined;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListPrivateEndpointsRequest.$type,
  ListPrivateEndpointsRequest
);

const baseListPrivateEndpointsResponse: object = {
  $type: "yandex.cloud.vpc.v1.privatelink.ListPrivateEndpointsResponse",
  nextPageToken: "",
};

export const ListPrivateEndpointsResponse = {
  $type:
    "yandex.cloud.vpc.v1.privatelink.ListPrivateEndpointsResponse" as const,

  encode(
    message: ListPrivateEndpointsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.privateEndpoints) {
      PrivateEndpoint.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListPrivateEndpointsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListPrivateEndpointsResponse,
    } as ListPrivateEndpointsResponse;
    message.privateEndpoints = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.privateEndpoints.push(
            PrivateEndpoint.decode(reader, reader.uint32())
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

  fromJSON(object: any): ListPrivateEndpointsResponse {
    const message = {
      ...baseListPrivateEndpointsResponse,
    } as ListPrivateEndpointsResponse;
    message.privateEndpoints = (object.privateEndpoints ?? []).map((e: any) =>
      PrivateEndpoint.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListPrivateEndpointsResponse): unknown {
    const obj: any = {};
    if (message.privateEndpoints) {
      obj.privateEndpoints = message.privateEndpoints.map((e) =>
        e ? PrivateEndpoint.toJSON(e) : undefined
      );
    } else {
      obj.privateEndpoints = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListPrivateEndpointsResponse>, I>>(
    object: I
  ): ListPrivateEndpointsResponse {
    const message = {
      ...baseListPrivateEndpointsResponse,
    } as ListPrivateEndpointsResponse;
    message.privateEndpoints =
      object.privateEndpoints?.map((e) => PrivateEndpoint.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListPrivateEndpointsResponse.$type,
  ListPrivateEndpointsResponse
);

const baseListPrivateEndpointOperationsRequest: object = {
  $type: "yandex.cloud.vpc.v1.privatelink.ListPrivateEndpointOperationsRequest",
  privateEndpointId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListPrivateEndpointOperationsRequest = {
  $type:
    "yandex.cloud.vpc.v1.privatelink.ListPrivateEndpointOperationsRequest" as const,

  encode(
    message: ListPrivateEndpointOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.privateEndpointId !== "") {
      writer.uint32(10).string(message.privateEndpointId);
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
  ): ListPrivateEndpointOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListPrivateEndpointOperationsRequest,
    } as ListPrivateEndpointOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.privateEndpointId = reader.string();
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

  fromJSON(object: any): ListPrivateEndpointOperationsRequest {
    const message = {
      ...baseListPrivateEndpointOperationsRequest,
    } as ListPrivateEndpointOperationsRequest;
    message.privateEndpointId =
      object.privateEndpointId !== undefined &&
      object.privateEndpointId !== null
        ? String(object.privateEndpointId)
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

  toJSON(message: ListPrivateEndpointOperationsRequest): unknown {
    const obj: any = {};
    message.privateEndpointId !== undefined &&
      (obj.privateEndpointId = message.privateEndpointId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListPrivateEndpointOperationsRequest>, I>
  >(object: I): ListPrivateEndpointOperationsRequest {
    const message = {
      ...baseListPrivateEndpointOperationsRequest,
    } as ListPrivateEndpointOperationsRequest;
    message.privateEndpointId = object.privateEndpointId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListPrivateEndpointOperationsRequest.$type,
  ListPrivateEndpointOperationsRequest
);

const baseListPrivateEndpointOperationsResponse: object = {
  $type:
    "yandex.cloud.vpc.v1.privatelink.ListPrivateEndpointOperationsResponse",
  nextPageToken: "",
};

export const ListPrivateEndpointOperationsResponse = {
  $type:
    "yandex.cloud.vpc.v1.privatelink.ListPrivateEndpointOperationsResponse" as const,

  encode(
    message: ListPrivateEndpointOperationsResponse,
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
  ): ListPrivateEndpointOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListPrivateEndpointOperationsResponse,
    } as ListPrivateEndpointOperationsResponse;
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

  fromJSON(object: any): ListPrivateEndpointOperationsResponse {
    const message = {
      ...baseListPrivateEndpointOperationsResponse,
    } as ListPrivateEndpointOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListPrivateEndpointOperationsResponse): unknown {
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

  fromPartial<
    I extends Exact<DeepPartial<ListPrivateEndpointOperationsResponse>, I>
  >(object: I): ListPrivateEndpointOperationsResponse {
    const message = {
      ...baseListPrivateEndpointOperationsResponse,
    } as ListPrivateEndpointOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListPrivateEndpointOperationsResponse.$type,
  ListPrivateEndpointOperationsResponse
);

/** A set of methods for managing PrivateEndpoint resources. */
export const PrivateEndpointServiceService = {
  /**
   * Returns the specified Private Endpoint resource.
   *
   * To get the list of all available PrivateEndpoint resources, make a [List]
   * request.
   */
  get: {
    path: "/yandex.cloud.vpc.v1.privatelink.PrivateEndpointService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetPrivateEndpointRequest) =>
      Buffer.from(GetPrivateEndpointRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetPrivateEndpointRequest.decode(value),
    responseSerialize: (value: PrivateEndpoint) =>
      Buffer.from(PrivateEndpoint.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PrivateEndpoint.decode(value),
  },
  /** Retrieves the list of PrivateEndpoint resources in the specified folder. */
  list: {
    path: "/yandex.cloud.vpc.v1.privatelink.PrivateEndpointService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListPrivateEndpointsRequest) =>
      Buffer.from(ListPrivateEndpointsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListPrivateEndpointsRequest.decode(value),
    responseSerialize: (value: ListPrivateEndpointsResponse) =>
      Buffer.from(ListPrivateEndpointsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListPrivateEndpointsResponse.decode(value),
  },
  /** Creates an private endpoint in the specified folder and network. */
  create: {
    path: "/yandex.cloud.vpc.v1.privatelink.PrivateEndpointService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreatePrivateEndpointRequest) =>
      Buffer.from(CreatePrivateEndpointRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreatePrivateEndpointRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified private endpoint. */
  update: {
    path: "/yandex.cloud.vpc.v1.privatelink.PrivateEndpointService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdatePrivateEndpointRequest) =>
      Buffer.from(UpdatePrivateEndpointRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdatePrivateEndpointRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified private endpoint. */
  delete: {
    path: "/yandex.cloud.vpc.v1.privatelink.PrivateEndpointService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeletePrivateEndpointRequest) =>
      Buffer.from(DeletePrivateEndpointRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeletePrivateEndpointRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** List operations for the specified private endpoint. */
  listOperations: {
    path: "/yandex.cloud.vpc.v1.privatelink.PrivateEndpointService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListPrivateEndpointOperationsRequest) =>
      Buffer.from(ListPrivateEndpointOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListPrivateEndpointOperationsRequest.decode(value),
    responseSerialize: (value: ListPrivateEndpointOperationsResponse) =>
      Buffer.from(ListPrivateEndpointOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListPrivateEndpointOperationsResponse.decode(value),
  },
} as const;

export interface PrivateEndpointServiceServer
  extends UntypedServiceImplementation {
  /**
   * Returns the specified Private Endpoint resource.
   *
   * To get the list of all available PrivateEndpoint resources, make a [List]
   * request.
   */
  get: handleUnaryCall<GetPrivateEndpointRequest, PrivateEndpoint>;
  /** Retrieves the list of PrivateEndpoint resources in the specified folder. */
  list: handleUnaryCall<
    ListPrivateEndpointsRequest,
    ListPrivateEndpointsResponse
  >;
  /** Creates an private endpoint in the specified folder and network. */
  create: handleUnaryCall<CreatePrivateEndpointRequest, Operation>;
  /** Updates the specified private endpoint. */
  update: handleUnaryCall<UpdatePrivateEndpointRequest, Operation>;
  /** Deletes the specified private endpoint. */
  delete: handleUnaryCall<DeletePrivateEndpointRequest, Operation>;
  /** List operations for the specified private endpoint. */
  listOperations: handleUnaryCall<
    ListPrivateEndpointOperationsRequest,
    ListPrivateEndpointOperationsResponse
  >;
}

export interface PrivateEndpointServiceClient extends Client {
  /**
   * Returns the specified Private Endpoint resource.
   *
   * To get the list of all available PrivateEndpoint resources, make a [List]
   * request.
   */
  get(
    request: GetPrivateEndpointRequest,
    callback: (error: ServiceError | null, response: PrivateEndpoint) => void
  ): ClientUnaryCall;
  get(
    request: GetPrivateEndpointRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PrivateEndpoint) => void
  ): ClientUnaryCall;
  get(
    request: GetPrivateEndpointRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PrivateEndpoint) => void
  ): ClientUnaryCall;
  /** Retrieves the list of PrivateEndpoint resources in the specified folder. */
  list(
    request: ListPrivateEndpointsRequest,
    callback: (
      error: ServiceError | null,
      response: ListPrivateEndpointsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListPrivateEndpointsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListPrivateEndpointsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListPrivateEndpointsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListPrivateEndpointsResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates an private endpoint in the specified folder and network. */
  create(
    request: CreatePrivateEndpointRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreatePrivateEndpointRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreatePrivateEndpointRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified private endpoint. */
  update(
    request: UpdatePrivateEndpointRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdatePrivateEndpointRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdatePrivateEndpointRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified private endpoint. */
  delete(
    request: DeletePrivateEndpointRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeletePrivateEndpointRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeletePrivateEndpointRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** List operations for the specified private endpoint. */
  listOperations(
    request: ListPrivateEndpointOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListPrivateEndpointOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListPrivateEndpointOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListPrivateEndpointOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListPrivateEndpointOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListPrivateEndpointOperationsResponse
    ) => void
  ): ClientUnaryCall;
}

export const PrivateEndpointServiceClient = makeGenericClientConstructor(
  PrivateEndpointServiceService,
  "yandex.cloud.vpc.v1.privatelink.PrivateEndpointService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): PrivateEndpointServiceClient;
  service: typeof PrivateEndpointServiceService;
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
