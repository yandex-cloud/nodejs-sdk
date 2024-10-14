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
import { Timestamp } from "../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.serverless.functions.v1";

/** A VPC network used in serverless resources. */
export interface UsedNetwork {
  $type: "yandex.cloud.serverless.functions.v1.UsedNetwork";
  /** ID of the VPC network. */
  networkId: string;
  /** ID of the cloud that the network belongs to. */
  cloudId: string;
  /** ID of the folder that the network belongs to. */
  folderId: string;
  /** Status of the network. */
  status: UsedNetwork_Status;
  /** Clean-up timestamp of the obsolete network. */
  willBeCleanedUpAt?: Date;
  /** Number of serverless resources connected to the network. */
  connectionsCount: number;
}

export enum UsedNetwork_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - Network is connecting to its first serverless resource. */
  CREATING = 1,
  /** ACTIVE - Network is already being used by some serverless resources. */
  ACTIVE = 2,
  /**
   * OBSOLETE - Network is no longer used by any serverless resources.
   * It will be cleaned-up after a while.
   */
  OBSOLETE = 3,
  UNRECOGNIZED = -1,
}

export function usedNetwork_StatusFromJSON(object: any): UsedNetwork_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return UsedNetwork_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return UsedNetwork_Status.CREATING;
    case 2:
    case "ACTIVE":
      return UsedNetwork_Status.ACTIVE;
    case 3:
    case "OBSOLETE":
      return UsedNetwork_Status.OBSOLETE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UsedNetwork_Status.UNRECOGNIZED;
  }
}

export function usedNetwork_StatusToJSON(object: UsedNetwork_Status): string {
  switch (object) {
    case UsedNetwork_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case UsedNetwork_Status.CREATING:
      return "CREATING";
    case UsedNetwork_Status.ACTIVE:
      return "ACTIVE";
    case UsedNetwork_Status.OBSOLETE:
      return "OBSOLETE";
    default:
      return "UNKNOWN";
  }
}

export interface GetUsedNetworkRequest {
  $type: "yandex.cloud.serverless.functions.v1.GetUsedNetworkRequest";
  /** ID of the network to return. */
  networkId: string;
}

export interface ListUsedNetworksRequest {
  $type: "yandex.cloud.serverless.functions.v1.ListUsedNetworksRequest";
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `pageSize`, the service returns a [ListUsedNetworksResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListUsedNetworksResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /** ID of the cloud to list used networks in. */
  cloudId: string | undefined;
  /** ID of the folder to list used networks in. */
  folderId: string | undefined;
}

export interface ListUsedNetworksResponse {
  $type: "yandex.cloud.serverless.functions.v1.ListUsedNetworksResponse";
  /** List of used networks in the specified scope. */
  networks: UsedNetwork[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListUsedNetworksRequest.page_size], use `nextPageToken` as the value
   * for the [ListUsedNetworksRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListConnectedResourcesRequest {
  $type: "yandex.cloud.serverless.functions.v1.ListConnectedResourcesRequest";
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `pageSize`, the service returns a [ListConnectedResourcesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListConnectedResourcesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /** ID of the network to list serverless resources connected to it. */
  networkId: string | undefined;
  /** ID of the cloud to list serverless resources connected to any network from it. */
  cloudId: string | undefined;
  /** ID of the folder to list serverless resources connected to any network from it. */
  folderId: string | undefined;
}

export interface ListConnectedResourcesResponse {
  $type: "yandex.cloud.serverless.functions.v1.ListConnectedResourcesResponse";
  /** List of serverless resources connected to any network from the specified scope. */
  resources: ListConnectedResourcesResponse_ConnectedResource[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListConnectedResourcesRequest.page_size], use `nextPageToken` as the value
   * for the [ListConnectedResourcesRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

/** Serverless resource connected to VPC network. */
export interface ListConnectedResourcesResponse_ConnectedResource {
  $type: "yandex.cloud.serverless.functions.v1.ListConnectedResourcesResponse.ConnectedResource";
  /** ID of the network to which the resource is connected. */
  networkId: string;
  /** Type of the serverless resource. */
  resourceType: string;
  /** ID of the serverless resource. */
  resourceId: string;
  /** Type of the serverless subresource. */
  subresourceType: string;
  /** ID of the serverless subresource. */
  subresourceId: string;
  /** ID of the cloud that the resource belongs to. */
  resourceCloudId: string;
  /** ID of the folder thar the resource belongs to. */
  resourceFolderId: string;
}

export interface TriggerUsedNetworkCleanupRequest {
  $type: "yandex.cloud.serverless.functions.v1.TriggerUsedNetworkCleanupRequest";
  /** ID of the obsolete network to start the cleanup process for. */
  networkId: string;
}

export interface TriggerUsedNetworkCleanupResponse {
  $type: "yandex.cloud.serverless.functions.v1.TriggerUsedNetworkCleanupResponse";
  /** Timestamp when cleanup of the specified network will be started. */
  networkCleanupTime?: Date;
}

const baseUsedNetwork: object = {
  $type: "yandex.cloud.serverless.functions.v1.UsedNetwork",
  networkId: "",
  cloudId: "",
  folderId: "",
  status: 0,
  connectionsCount: 0,
};

export const UsedNetwork = {
  $type: "yandex.cloud.serverless.functions.v1.UsedNetwork" as const,

  encode(
    message: UsedNetwork,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkId !== "") {
      writer.uint32(10).string(message.networkId);
    }
    if (message.cloudId !== "") {
      writer.uint32(18).string(message.cloudId);
    }
    if (message.folderId !== "") {
      writer.uint32(26).string(message.folderId);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.willBeCleanedUpAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.willBeCleanedUpAt),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.connectionsCount !== 0) {
      writer.uint32(48).int64(message.connectionsCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UsedNetwork {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUsedNetwork } as UsedNetwork;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkId = reader.string();
          break;
        case 2:
          message.cloudId = reader.string();
          break;
        case 3:
          message.folderId = reader.string();
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.willBeCleanedUpAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.connectionsCount = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UsedNetwork {
    const message = { ...baseUsedNetwork } as UsedNetwork;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.cloudId =
      object.cloudId !== undefined && object.cloudId !== null
        ? String(object.cloudId)
        : "";
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.status =
      object.status !== undefined && object.status !== null
        ? usedNetwork_StatusFromJSON(object.status)
        : 0;
    message.willBeCleanedUpAt =
      object.willBeCleanedUpAt !== undefined &&
      object.willBeCleanedUpAt !== null
        ? fromJsonTimestamp(object.willBeCleanedUpAt)
        : undefined;
    message.connectionsCount =
      object.connectionsCount !== undefined && object.connectionsCount !== null
        ? Number(object.connectionsCount)
        : 0;
    return message;
  },

  toJSON(message: UsedNetwork): unknown {
    const obj: any = {};
    message.networkId !== undefined && (obj.networkId = message.networkId);
    message.cloudId !== undefined && (obj.cloudId = message.cloudId);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.status !== undefined &&
      (obj.status = usedNetwork_StatusToJSON(message.status));
    message.willBeCleanedUpAt !== undefined &&
      (obj.willBeCleanedUpAt = message.willBeCleanedUpAt.toISOString());
    message.connectionsCount !== undefined &&
      (obj.connectionsCount = Math.round(message.connectionsCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UsedNetwork>, I>>(
    object: I
  ): UsedNetwork {
    const message = { ...baseUsedNetwork } as UsedNetwork;
    message.networkId = object.networkId ?? "";
    message.cloudId = object.cloudId ?? "";
    message.folderId = object.folderId ?? "";
    message.status = object.status ?? 0;
    message.willBeCleanedUpAt = object.willBeCleanedUpAt ?? undefined;
    message.connectionsCount = object.connectionsCount ?? 0;
    return message;
  },
};

messageTypeRegistry.set(UsedNetwork.$type, UsedNetwork);

const baseGetUsedNetworkRequest: object = {
  $type: "yandex.cloud.serverless.functions.v1.GetUsedNetworkRequest",
  networkId: "",
};

export const GetUsedNetworkRequest = {
  $type: "yandex.cloud.serverless.functions.v1.GetUsedNetworkRequest" as const,

  encode(
    message: GetUsedNetworkRequest,
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
  ): GetUsedNetworkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetUsedNetworkRequest } as GetUsedNetworkRequest;
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

  fromJSON(object: any): GetUsedNetworkRequest {
    const message = { ...baseGetUsedNetworkRequest } as GetUsedNetworkRequest;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    return message;
  },

  toJSON(message: GetUsedNetworkRequest): unknown {
    const obj: any = {};
    message.networkId !== undefined && (obj.networkId = message.networkId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUsedNetworkRequest>, I>>(
    object: I
  ): GetUsedNetworkRequest {
    const message = { ...baseGetUsedNetworkRequest } as GetUsedNetworkRequest;
    message.networkId = object.networkId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetUsedNetworkRequest.$type, GetUsedNetworkRequest);

const baseListUsedNetworksRequest: object = {
  $type: "yandex.cloud.serverless.functions.v1.ListUsedNetworksRequest",
  pageSize: 0,
  pageToken: "",
};

export const ListUsedNetworksRequest = {
  $type:
    "yandex.cloud.serverless.functions.v1.ListUsedNetworksRequest" as const,

  encode(
    message: ListUsedNetworksRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(8).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    if (message.cloudId !== undefined) {
      writer.uint32(26).string(message.cloudId);
    }
    if (message.folderId !== undefined) {
      writer.uint32(34).string(message.folderId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListUsedNetworksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListUsedNetworksRequest,
    } as ListUsedNetworksRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pageSize = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.pageToken = reader.string();
          break;
        case 3:
          message.cloudId = reader.string();
          break;
        case 4:
          message.folderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListUsedNetworksRequest {
    const message = {
      ...baseListUsedNetworksRequest,
    } as ListUsedNetworksRequest;
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    message.cloudId =
      object.cloudId !== undefined && object.cloudId !== null
        ? String(object.cloudId)
        : undefined;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : undefined;
    return message;
  },

  toJSON(message: ListUsedNetworksRequest): unknown {
    const obj: any = {};
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.cloudId !== undefined && (obj.cloudId = message.cloudId);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListUsedNetworksRequest>, I>>(
    object: I
  ): ListUsedNetworksRequest {
    const message = {
      ...baseListUsedNetworksRequest,
    } as ListUsedNetworksRequest;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.cloudId = object.cloudId ?? undefined;
    message.folderId = object.folderId ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ListUsedNetworksRequest.$type, ListUsedNetworksRequest);

const baseListUsedNetworksResponse: object = {
  $type: "yandex.cloud.serverless.functions.v1.ListUsedNetworksResponse",
  nextPageToken: "",
};

export const ListUsedNetworksResponse = {
  $type:
    "yandex.cloud.serverless.functions.v1.ListUsedNetworksResponse" as const,

  encode(
    message: ListUsedNetworksResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.networks) {
      UsedNetwork.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListUsedNetworksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListUsedNetworksResponse,
    } as ListUsedNetworksResponse;
    message.networks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networks.push(UsedNetwork.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListUsedNetworksResponse {
    const message = {
      ...baseListUsedNetworksResponse,
    } as ListUsedNetworksResponse;
    message.networks = (object.networks ?? []).map((e: any) =>
      UsedNetwork.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListUsedNetworksResponse): unknown {
    const obj: any = {};
    if (message.networks) {
      obj.networks = message.networks.map((e) =>
        e ? UsedNetwork.toJSON(e) : undefined
      );
    } else {
      obj.networks = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListUsedNetworksResponse>, I>>(
    object: I
  ): ListUsedNetworksResponse {
    const message = {
      ...baseListUsedNetworksResponse,
    } as ListUsedNetworksResponse;
    message.networks =
      object.networks?.map((e) => UsedNetwork.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListUsedNetworksResponse.$type,
  ListUsedNetworksResponse
);

const baseListConnectedResourcesRequest: object = {
  $type: "yandex.cloud.serverless.functions.v1.ListConnectedResourcesRequest",
  pageSize: 0,
  pageToken: "",
};

export const ListConnectedResourcesRequest = {
  $type:
    "yandex.cloud.serverless.functions.v1.ListConnectedResourcesRequest" as const,

  encode(
    message: ListConnectedResourcesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(8).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    if (message.networkId !== undefined) {
      writer.uint32(26).string(message.networkId);
    }
    if (message.cloudId !== undefined) {
      writer.uint32(34).string(message.cloudId);
    }
    if (message.folderId !== undefined) {
      writer.uint32(42).string(message.folderId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListConnectedResourcesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListConnectedResourcesRequest,
    } as ListConnectedResourcesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pageSize = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.pageToken = reader.string();
          break;
        case 3:
          message.networkId = reader.string();
          break;
        case 4:
          message.cloudId = reader.string();
          break;
        case 5:
          message.folderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListConnectedResourcesRequest {
    const message = {
      ...baseListConnectedResourcesRequest,
    } as ListConnectedResourcesRequest;
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : undefined;
    message.cloudId =
      object.cloudId !== undefined && object.cloudId !== null
        ? String(object.cloudId)
        : undefined;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : undefined;
    return message;
  },

  toJSON(message: ListConnectedResourcesRequest): unknown {
    const obj: any = {};
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.networkId !== undefined && (obj.networkId = message.networkId);
    message.cloudId !== undefined && (obj.cloudId = message.cloudId);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListConnectedResourcesRequest>, I>>(
    object: I
  ): ListConnectedResourcesRequest {
    const message = {
      ...baseListConnectedResourcesRequest,
    } as ListConnectedResourcesRequest;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.networkId = object.networkId ?? undefined;
    message.cloudId = object.cloudId ?? undefined;
    message.folderId = object.folderId ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ListConnectedResourcesRequest.$type,
  ListConnectedResourcesRequest
);

const baseListConnectedResourcesResponse: object = {
  $type: "yandex.cloud.serverless.functions.v1.ListConnectedResourcesResponse",
  nextPageToken: "",
};

export const ListConnectedResourcesResponse = {
  $type:
    "yandex.cloud.serverless.functions.v1.ListConnectedResourcesResponse" as const,

  encode(
    message: ListConnectedResourcesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.resources) {
      ListConnectedResourcesResponse_ConnectedResource.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListConnectedResourcesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListConnectedResourcesResponse,
    } as ListConnectedResourcesResponse;
    message.resources = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources.push(
            ListConnectedResourcesResponse_ConnectedResource.decode(
              reader,
              reader.uint32()
            )
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

  fromJSON(object: any): ListConnectedResourcesResponse {
    const message = {
      ...baseListConnectedResourcesResponse,
    } as ListConnectedResourcesResponse;
    message.resources = (object.resources ?? []).map((e: any) =>
      ListConnectedResourcesResponse_ConnectedResource.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListConnectedResourcesResponse): unknown {
    const obj: any = {};
    if (message.resources) {
      obj.resources = message.resources.map((e) =>
        e
          ? ListConnectedResourcesResponse_ConnectedResource.toJSON(e)
          : undefined
      );
    } else {
      obj.resources = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListConnectedResourcesResponse>, I>>(
    object: I
  ): ListConnectedResourcesResponse {
    const message = {
      ...baseListConnectedResourcesResponse,
    } as ListConnectedResourcesResponse;
    message.resources =
      object.resources?.map((e) =>
        ListConnectedResourcesResponse_ConnectedResource.fromPartial(e)
      ) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListConnectedResourcesResponse.$type,
  ListConnectedResourcesResponse
);

const baseListConnectedResourcesResponse_ConnectedResource: object = {
  $type:
    "yandex.cloud.serverless.functions.v1.ListConnectedResourcesResponse.ConnectedResource",
  networkId: "",
  resourceType: "",
  resourceId: "",
  subresourceType: "",
  subresourceId: "",
  resourceCloudId: "",
  resourceFolderId: "",
};

export const ListConnectedResourcesResponse_ConnectedResource = {
  $type:
    "yandex.cloud.serverless.functions.v1.ListConnectedResourcesResponse.ConnectedResource" as const,

  encode(
    message: ListConnectedResourcesResponse_ConnectedResource,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkId !== "") {
      writer.uint32(10).string(message.networkId);
    }
    if (message.resourceType !== "") {
      writer.uint32(18).string(message.resourceType);
    }
    if (message.resourceId !== "") {
      writer.uint32(26).string(message.resourceId);
    }
    if (message.subresourceType !== "") {
      writer.uint32(34).string(message.subresourceType);
    }
    if (message.subresourceId !== "") {
      writer.uint32(42).string(message.subresourceId);
    }
    if (message.resourceCloudId !== "") {
      writer.uint32(50).string(message.resourceCloudId);
    }
    if (message.resourceFolderId !== "") {
      writer.uint32(58).string(message.resourceFolderId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListConnectedResourcesResponse_ConnectedResource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListConnectedResourcesResponse_ConnectedResource,
    } as ListConnectedResourcesResponse_ConnectedResource;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkId = reader.string();
          break;
        case 2:
          message.resourceType = reader.string();
          break;
        case 3:
          message.resourceId = reader.string();
          break;
        case 4:
          message.subresourceType = reader.string();
          break;
        case 5:
          message.subresourceId = reader.string();
          break;
        case 6:
          message.resourceCloudId = reader.string();
          break;
        case 7:
          message.resourceFolderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListConnectedResourcesResponse_ConnectedResource {
    const message = {
      ...baseListConnectedResourcesResponse_ConnectedResource,
    } as ListConnectedResourcesResponse_ConnectedResource;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.resourceType =
      object.resourceType !== undefined && object.resourceType !== null
        ? String(object.resourceType)
        : "";
    message.resourceId =
      object.resourceId !== undefined && object.resourceId !== null
        ? String(object.resourceId)
        : "";
    message.subresourceType =
      object.subresourceType !== undefined && object.subresourceType !== null
        ? String(object.subresourceType)
        : "";
    message.subresourceId =
      object.subresourceId !== undefined && object.subresourceId !== null
        ? String(object.subresourceId)
        : "";
    message.resourceCloudId =
      object.resourceCloudId !== undefined && object.resourceCloudId !== null
        ? String(object.resourceCloudId)
        : "";
    message.resourceFolderId =
      object.resourceFolderId !== undefined && object.resourceFolderId !== null
        ? String(object.resourceFolderId)
        : "";
    return message;
  },

  toJSON(message: ListConnectedResourcesResponse_ConnectedResource): unknown {
    const obj: any = {};
    message.networkId !== undefined && (obj.networkId = message.networkId);
    message.resourceType !== undefined &&
      (obj.resourceType = message.resourceType);
    message.resourceId !== undefined && (obj.resourceId = message.resourceId);
    message.subresourceType !== undefined &&
      (obj.subresourceType = message.subresourceType);
    message.subresourceId !== undefined &&
      (obj.subresourceId = message.subresourceId);
    message.resourceCloudId !== undefined &&
      (obj.resourceCloudId = message.resourceCloudId);
    message.resourceFolderId !== undefined &&
      (obj.resourceFolderId = message.resourceFolderId);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ListConnectedResourcesResponse_ConnectedResource>,
      I
    >
  >(object: I): ListConnectedResourcesResponse_ConnectedResource {
    const message = {
      ...baseListConnectedResourcesResponse_ConnectedResource,
    } as ListConnectedResourcesResponse_ConnectedResource;
    message.networkId = object.networkId ?? "";
    message.resourceType = object.resourceType ?? "";
    message.resourceId = object.resourceId ?? "";
    message.subresourceType = object.subresourceType ?? "";
    message.subresourceId = object.subresourceId ?? "";
    message.resourceCloudId = object.resourceCloudId ?? "";
    message.resourceFolderId = object.resourceFolderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListConnectedResourcesResponse_ConnectedResource.$type,
  ListConnectedResourcesResponse_ConnectedResource
);

const baseTriggerUsedNetworkCleanupRequest: object = {
  $type:
    "yandex.cloud.serverless.functions.v1.TriggerUsedNetworkCleanupRequest",
  networkId: "",
};

export const TriggerUsedNetworkCleanupRequest = {
  $type:
    "yandex.cloud.serverless.functions.v1.TriggerUsedNetworkCleanupRequest" as const,

  encode(
    message: TriggerUsedNetworkCleanupRequest,
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
  ): TriggerUsedNetworkCleanupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTriggerUsedNetworkCleanupRequest,
    } as TriggerUsedNetworkCleanupRequest;
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

  fromJSON(object: any): TriggerUsedNetworkCleanupRequest {
    const message = {
      ...baseTriggerUsedNetworkCleanupRequest,
    } as TriggerUsedNetworkCleanupRequest;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    return message;
  },

  toJSON(message: TriggerUsedNetworkCleanupRequest): unknown {
    const obj: any = {};
    message.networkId !== undefined && (obj.networkId = message.networkId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<TriggerUsedNetworkCleanupRequest>, I>
  >(object: I): TriggerUsedNetworkCleanupRequest {
    const message = {
      ...baseTriggerUsedNetworkCleanupRequest,
    } as TriggerUsedNetworkCleanupRequest;
    message.networkId = object.networkId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  TriggerUsedNetworkCleanupRequest.$type,
  TriggerUsedNetworkCleanupRequest
);

const baseTriggerUsedNetworkCleanupResponse: object = {
  $type:
    "yandex.cloud.serverless.functions.v1.TriggerUsedNetworkCleanupResponse",
};

export const TriggerUsedNetworkCleanupResponse = {
  $type:
    "yandex.cloud.serverless.functions.v1.TriggerUsedNetworkCleanupResponse" as const,

  encode(
    message: TriggerUsedNetworkCleanupResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkCleanupTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.networkCleanupTime),
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TriggerUsedNetworkCleanupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTriggerUsedNetworkCleanupResponse,
    } as TriggerUsedNetworkCleanupResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkCleanupTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TriggerUsedNetworkCleanupResponse {
    const message = {
      ...baseTriggerUsedNetworkCleanupResponse,
    } as TriggerUsedNetworkCleanupResponse;
    message.networkCleanupTime =
      object.networkCleanupTime !== undefined &&
      object.networkCleanupTime !== null
        ? fromJsonTimestamp(object.networkCleanupTime)
        : undefined;
    return message;
  },

  toJSON(message: TriggerUsedNetworkCleanupResponse): unknown {
    const obj: any = {};
    message.networkCleanupTime !== undefined &&
      (obj.networkCleanupTime = message.networkCleanupTime.toISOString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<TriggerUsedNetworkCleanupResponse>, I>
  >(object: I): TriggerUsedNetworkCleanupResponse {
    const message = {
      ...baseTriggerUsedNetworkCleanupResponse,
    } as TriggerUsedNetworkCleanupResponse;
    message.networkCleanupTime = object.networkCleanupTime ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  TriggerUsedNetworkCleanupResponse.$type,
  TriggerUsedNetworkCleanupResponse
);

/** A set of methods for managing VPC networks connected to serverless resources. */
export const NetworkServiceService = {
  /** Returns the specified network used in serverless resources. */
  getUsed: {
    path: "/yandex.cloud.serverless.functions.v1.NetworkService/GetUsed",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetUsedNetworkRequest) =>
      Buffer.from(GetUsedNetworkRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetUsedNetworkRequest.decode(value),
    responseSerialize: (value: UsedNetwork) =>
      Buffer.from(UsedNetwork.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UsedNetwork.decode(value),
  },
  /** Retrieves the list of networks in the specified scope that are used in serverless resources. */
  listUsed: {
    path: "/yandex.cloud.serverless.functions.v1.NetworkService/ListUsed",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListUsedNetworksRequest) =>
      Buffer.from(ListUsedNetworksRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListUsedNetworksRequest.decode(value),
    responseSerialize: (value: ListUsedNetworksResponse) =>
      Buffer.from(ListUsedNetworksResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListUsedNetworksResponse.decode(value),
  },
  /** Retrieves the list of serverless resources connected to any network from the specified scope. */
  listConnectedResources: {
    path: "/yandex.cloud.serverless.functions.v1.NetworkService/ListConnectedResources",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListConnectedResourcesRequest) =>
      Buffer.from(ListConnectedResourcesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListConnectedResourcesRequest.decode(value),
    responseSerialize: (value: ListConnectedResourcesResponse) =>
      Buffer.from(ListConnectedResourcesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListConnectedResourcesResponse.decode(value),
  },
  /**
   * Forces obsolete used network to start cleanup process as soon as possible.
   * Invocation does not wait for start or end of the cleanup process.
   * Second invocation with the same network does nothing until network is completely cleaned-up.
   */
  triggerUsedCleanup: {
    path: "/yandex.cloud.serverless.functions.v1.NetworkService/TriggerUsedCleanup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: TriggerUsedNetworkCleanupRequest) =>
      Buffer.from(TriggerUsedNetworkCleanupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      TriggerUsedNetworkCleanupRequest.decode(value),
    responseSerialize: (value: TriggerUsedNetworkCleanupResponse) =>
      Buffer.from(TriggerUsedNetworkCleanupResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      TriggerUsedNetworkCleanupResponse.decode(value),
  },
} as const;

export interface NetworkServiceServer extends UntypedServiceImplementation {
  /** Returns the specified network used in serverless resources. */
  getUsed: handleUnaryCall<GetUsedNetworkRequest, UsedNetwork>;
  /** Retrieves the list of networks in the specified scope that are used in serverless resources. */
  listUsed: handleUnaryCall<ListUsedNetworksRequest, ListUsedNetworksResponse>;
  /** Retrieves the list of serverless resources connected to any network from the specified scope. */
  listConnectedResources: handleUnaryCall<
    ListConnectedResourcesRequest,
    ListConnectedResourcesResponse
  >;
  /**
   * Forces obsolete used network to start cleanup process as soon as possible.
   * Invocation does not wait for start or end of the cleanup process.
   * Second invocation with the same network does nothing until network is completely cleaned-up.
   */
  triggerUsedCleanup: handleUnaryCall<
    TriggerUsedNetworkCleanupRequest,
    TriggerUsedNetworkCleanupResponse
  >;
}

export interface NetworkServiceClient extends Client {
  /** Returns the specified network used in serverless resources. */
  getUsed(
    request: GetUsedNetworkRequest,
    callback: (error: ServiceError | null, response: UsedNetwork) => void
  ): ClientUnaryCall;
  getUsed(
    request: GetUsedNetworkRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UsedNetwork) => void
  ): ClientUnaryCall;
  getUsed(
    request: GetUsedNetworkRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UsedNetwork) => void
  ): ClientUnaryCall;
  /** Retrieves the list of networks in the specified scope that are used in serverless resources. */
  listUsed(
    request: ListUsedNetworksRequest,
    callback: (
      error: ServiceError | null,
      response: ListUsedNetworksResponse
    ) => void
  ): ClientUnaryCall;
  listUsed(
    request: ListUsedNetworksRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListUsedNetworksResponse
    ) => void
  ): ClientUnaryCall;
  listUsed(
    request: ListUsedNetworksRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListUsedNetworksResponse
    ) => void
  ): ClientUnaryCall;
  /** Retrieves the list of serverless resources connected to any network from the specified scope. */
  listConnectedResources(
    request: ListConnectedResourcesRequest,
    callback: (
      error: ServiceError | null,
      response: ListConnectedResourcesResponse
    ) => void
  ): ClientUnaryCall;
  listConnectedResources(
    request: ListConnectedResourcesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListConnectedResourcesResponse
    ) => void
  ): ClientUnaryCall;
  listConnectedResources(
    request: ListConnectedResourcesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListConnectedResourcesResponse
    ) => void
  ): ClientUnaryCall;
  /**
   * Forces obsolete used network to start cleanup process as soon as possible.
   * Invocation does not wait for start or end of the cleanup process.
   * Second invocation with the same network does nothing until network is completely cleaned-up.
   */
  triggerUsedCleanup(
    request: TriggerUsedNetworkCleanupRequest,
    callback: (
      error: ServiceError | null,
      response: TriggerUsedNetworkCleanupResponse
    ) => void
  ): ClientUnaryCall;
  triggerUsedCleanup(
    request: TriggerUsedNetworkCleanupRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: TriggerUsedNetworkCleanupResponse
    ) => void
  ): ClientUnaryCall;
  triggerUsedCleanup(
    request: TriggerUsedNetworkCleanupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: TriggerUsedNetworkCleanupResponse
    ) => void
  ): ClientUnaryCall;
}

export const NetworkServiceClient = makeGenericClientConstructor(
  NetworkServiceService,
  "yandex.cloud.serverless.functions.v1.NetworkService"
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
