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
  ConnectorSpec,
  UpdateConnectorSpec,
  Connector,
} from "../../../../../yandex/cloud/mdb/kafka/v1/connector";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.mdb.kafka.v1";

export interface GetConnectorRequest {
  $type: "yandex.cloud.mdb.kafka.v1.GetConnectorRequest";
  /**
   * ID of the Apache Kafka Cluster resource to return.
   * To get the cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the Apache Kafka Connector resource to return.
   * To get the name of the connector use a [ConnectorService.List] request.
   */
  connectorName: string;
}

export interface ListConnectorsRequest {
  $type: "yandex.cloud.mdb.kafka.v1.ListConnectorsRequest";
  /**
   * ID of the Apache Kafka cluster to list connectors in.
   * To get the cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  pageSize: number;
  /**
   * Page token. To get the next page of results, Set [page_token] to the [ListConnectorsResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListConnectorsResponse {
  $type: "yandex.cloud.mdb.kafka.v1.ListConnectorsResponse";
  /** List of Apache Kafka Connector resources. */
  connectors: Connector[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListConnectorsRequest.page_size], use the [next_page_token] as the value
   * for the [ListConnectorsRequest.page_token] parameter in the next list request. Each subsequent
   * list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateConnectorRequest {
  $type: "yandex.cloud.mdb.kafka.v1.CreateConnectorRequest";
  /**
   * Required. ID of the Apache Kafka cluster to create a connector in.
   * To get the cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Required. Configuration of the connector to create. */
  connectorSpec?: ConnectorSpec;
}

export interface CreateConnectorMetadata {
  $type: "yandex.cloud.mdb.kafka.v1.CreateConnectorMetadata";
  /** ID of the Apache Kafka cluster where a connector is being created. */
  clusterId: string;
  /** Name of the Apache Kafka connector that is being created. */
  connectorName: string;
}

export interface UpdateConnectorRequest {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorRequest";
  /**
   * Required. ID of the Apache Kafka cluster to update a connector in.
   * To get the cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Required. Name of the connector to update.
   * To get the name of the connector, use a [ConnectorService.List] request.
   */
  connectorName: string;
  /** Field mask that specifies which fields of the Connector resource should be updated. */
  updateMask?: FieldMask;
  /** Required. Configuration of the connector to update. */
  connectorSpec?: UpdateConnectorSpec;
}

export interface UpdateConnectorMetadata {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorMetadata";
  /** ID of the Apache Kafka cluster where a connector is being updated. */
  clusterId: string;
  /** Name of the Apache Kafka connector that is being updated. */
  connectorName: string;
}

export interface DeleteConnectorRequest {
  $type: "yandex.cloud.mdb.kafka.v1.DeleteConnectorRequest";
  /**
   * Required. ID of the Apache Kafka cluster to delete a connector in.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Required. Name of the connector to delete.
   * To get the name of the connector, use a [ConnectorService.List] request.
   */
  connectorName: string;
}

export interface DeleteConnectorMetadata {
  $type: "yandex.cloud.mdb.kafka.v1.DeleteConnectorMetadata";
  /** ID of the Apache Kafka cluster where a connector is being deleted. */
  clusterId: string;
  /** Name of the Apache Kafka connector that is being deleted. */
  connectorName: string;
}

export interface ResumeConnectorRequest {
  $type: "yandex.cloud.mdb.kafka.v1.ResumeConnectorRequest";
  /** Required. ID of the Apache Kafka cluster to resume connector in. */
  clusterId: string;
  /**
   * Name of the Apache Kafka Connector resource to resume.
   * To get the name of the connector use a [ConnectorService.List] request.
   */
  connectorName: string;
}

export interface ResumeConnectorMetadata {
  $type: "yandex.cloud.mdb.kafka.v1.ResumeConnectorMetadata";
  /** Required. ID of the Apache Kafka cluster. */
  clusterId: string;
  /** Name of the Apache Kafka Connector resource that is beign resumed. */
  connectorName: string;
}

export interface PauseConnectorRequest {
  $type: "yandex.cloud.mdb.kafka.v1.PauseConnectorRequest";
  /** Required. ID of the Apache Kafka cluster to pause connector in. */
  clusterId: string;
  /**
   * Name of the Apache Kafka Connector resource to pause.
   * To get the name of the connector use a [ConnectorService.List] request.
   */
  connectorName: string;
}

export interface PauseConnectorMetadata {
  $type: "yandex.cloud.mdb.kafka.v1.PauseConnectorMetadata";
  /** Required. ID of the Apache Kafka cluster. */
  clusterId: string;
  /** Name of the Apache Kafka Connector resource that is being paused. */
  connectorName: string;
}

const baseGetConnectorRequest: object = {
  $type: "yandex.cloud.mdb.kafka.v1.GetConnectorRequest",
  clusterId: "",
  connectorName: "",
};

export const GetConnectorRequest = {
  $type: "yandex.cloud.mdb.kafka.v1.GetConnectorRequest" as const,

  encode(
    message: GetConnectorRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.connectorName !== "") {
      writer.uint32(18).string(message.connectorName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetConnectorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetConnectorRequest } as GetConnectorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.connectorName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetConnectorRequest {
    const message = { ...baseGetConnectorRequest } as GetConnectorRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.connectorName =
      object.connectorName !== undefined && object.connectorName !== null
        ? String(object.connectorName)
        : "";
    return message;
  },

  toJSON(message: GetConnectorRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.connectorName !== undefined &&
      (obj.connectorName = message.connectorName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetConnectorRequest>, I>>(
    object: I
  ): GetConnectorRequest {
    const message = { ...baseGetConnectorRequest } as GetConnectorRequest;
    message.clusterId = object.clusterId ?? "";
    message.connectorName = object.connectorName ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetConnectorRequest.$type, GetConnectorRequest);

const baseListConnectorsRequest: object = {
  $type: "yandex.cloud.mdb.kafka.v1.ListConnectorsRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListConnectorsRequest = {
  $type: "yandex.cloud.mdb.kafka.v1.ListConnectorsRequest" as const,

  encode(
    message: ListConnectorsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
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
  ): ListConnectorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListConnectorsRequest } as ListConnectorsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
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

  fromJSON(object: any): ListConnectorsRequest {
    const message = { ...baseListConnectorsRequest } as ListConnectorsRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
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

  toJSON(message: ListConnectorsRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListConnectorsRequest>, I>>(
    object: I
  ): ListConnectorsRequest {
    const message = { ...baseListConnectorsRequest } as ListConnectorsRequest;
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListConnectorsRequest.$type, ListConnectorsRequest);

const baseListConnectorsResponse: object = {
  $type: "yandex.cloud.mdb.kafka.v1.ListConnectorsResponse",
  nextPageToken: "",
};

export const ListConnectorsResponse = {
  $type: "yandex.cloud.mdb.kafka.v1.ListConnectorsResponse" as const,

  encode(
    message: ListConnectorsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.connectors) {
      Connector.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListConnectorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListConnectorsResponse } as ListConnectorsResponse;
    message.connectors = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectors.push(Connector.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListConnectorsResponse {
    const message = { ...baseListConnectorsResponse } as ListConnectorsResponse;
    message.connectors = (object.connectors ?? []).map((e: any) =>
      Connector.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListConnectorsResponse): unknown {
    const obj: any = {};
    if (message.connectors) {
      obj.connectors = message.connectors.map((e) =>
        e ? Connector.toJSON(e) : undefined
      );
    } else {
      obj.connectors = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListConnectorsResponse>, I>>(
    object: I
  ): ListConnectorsResponse {
    const message = { ...baseListConnectorsResponse } as ListConnectorsResponse;
    message.connectors =
      object.connectors?.map((e) => Connector.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListConnectorsResponse.$type, ListConnectorsResponse);

const baseCreateConnectorRequest: object = {
  $type: "yandex.cloud.mdb.kafka.v1.CreateConnectorRequest",
  clusterId: "",
};

export const CreateConnectorRequest = {
  $type: "yandex.cloud.mdb.kafka.v1.CreateConnectorRequest" as const,

  encode(
    message: CreateConnectorRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.connectorSpec !== undefined) {
      ConnectorSpec.encode(
        message.connectorSpec,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateConnectorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateConnectorRequest } as CreateConnectorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.connectorSpec = ConnectorSpec.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateConnectorRequest {
    const message = { ...baseCreateConnectorRequest } as CreateConnectorRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.connectorSpec =
      object.connectorSpec !== undefined && object.connectorSpec !== null
        ? ConnectorSpec.fromJSON(object.connectorSpec)
        : undefined;
    return message;
  },

  toJSON(message: CreateConnectorRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.connectorSpec !== undefined &&
      (obj.connectorSpec = message.connectorSpec
        ? ConnectorSpec.toJSON(message.connectorSpec)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateConnectorRequest>, I>>(
    object: I
  ): CreateConnectorRequest {
    const message = { ...baseCreateConnectorRequest } as CreateConnectorRequest;
    message.clusterId = object.clusterId ?? "";
    message.connectorSpec =
      object.connectorSpec !== undefined && object.connectorSpec !== null
        ? ConnectorSpec.fromPartial(object.connectorSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateConnectorRequest.$type, CreateConnectorRequest);

const baseCreateConnectorMetadata: object = {
  $type: "yandex.cloud.mdb.kafka.v1.CreateConnectorMetadata",
  clusterId: "",
  connectorName: "",
};

export const CreateConnectorMetadata = {
  $type: "yandex.cloud.mdb.kafka.v1.CreateConnectorMetadata" as const,

  encode(
    message: CreateConnectorMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.connectorName !== "") {
      writer.uint32(18).string(message.connectorName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateConnectorMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateConnectorMetadata,
    } as CreateConnectorMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.connectorName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateConnectorMetadata {
    const message = {
      ...baseCreateConnectorMetadata,
    } as CreateConnectorMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.connectorName =
      object.connectorName !== undefined && object.connectorName !== null
        ? String(object.connectorName)
        : "";
    return message;
  },

  toJSON(message: CreateConnectorMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.connectorName !== undefined &&
      (obj.connectorName = message.connectorName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateConnectorMetadata>, I>>(
    object: I
  ): CreateConnectorMetadata {
    const message = {
      ...baseCreateConnectorMetadata,
    } as CreateConnectorMetadata;
    message.clusterId = object.clusterId ?? "";
    message.connectorName = object.connectorName ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateConnectorMetadata.$type, CreateConnectorMetadata);

const baseUpdateConnectorRequest: object = {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorRequest",
  clusterId: "",
  connectorName: "",
};

export const UpdateConnectorRequest = {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorRequest" as const,

  encode(
    message: UpdateConnectorRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.connectorName !== "") {
      writer.uint32(18).string(message.connectorName);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
    }
    if (message.connectorSpec !== undefined) {
      UpdateConnectorSpec.encode(
        message.connectorSpec,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateConnectorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateConnectorRequest } as UpdateConnectorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.connectorName = reader.string();
          break;
        case 3:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 4:
          message.connectorSpec = UpdateConnectorSpec.decode(
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

  fromJSON(object: any): UpdateConnectorRequest {
    const message = { ...baseUpdateConnectorRequest } as UpdateConnectorRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.connectorName =
      object.connectorName !== undefined && object.connectorName !== null
        ? String(object.connectorName)
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    message.connectorSpec =
      object.connectorSpec !== undefined && object.connectorSpec !== null
        ? UpdateConnectorSpec.fromJSON(object.connectorSpec)
        : undefined;
    return message;
  },

  toJSON(message: UpdateConnectorRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.connectorName !== undefined &&
      (obj.connectorName = message.connectorName);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.connectorSpec !== undefined &&
      (obj.connectorSpec = message.connectorSpec
        ? UpdateConnectorSpec.toJSON(message.connectorSpec)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateConnectorRequest>, I>>(
    object: I
  ): UpdateConnectorRequest {
    const message = { ...baseUpdateConnectorRequest } as UpdateConnectorRequest;
    message.clusterId = object.clusterId ?? "";
    message.connectorName = object.connectorName ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.connectorSpec =
      object.connectorSpec !== undefined && object.connectorSpec !== null
        ? UpdateConnectorSpec.fromPartial(object.connectorSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateConnectorRequest.$type, UpdateConnectorRequest);

const baseUpdateConnectorMetadata: object = {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorMetadata",
  clusterId: "",
  connectorName: "",
};

export const UpdateConnectorMetadata = {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorMetadata" as const,

  encode(
    message: UpdateConnectorMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.connectorName !== "") {
      writer.uint32(18).string(message.connectorName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateConnectorMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateConnectorMetadata,
    } as UpdateConnectorMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.connectorName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateConnectorMetadata {
    const message = {
      ...baseUpdateConnectorMetadata,
    } as UpdateConnectorMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.connectorName =
      object.connectorName !== undefined && object.connectorName !== null
        ? String(object.connectorName)
        : "";
    return message;
  },

  toJSON(message: UpdateConnectorMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.connectorName !== undefined &&
      (obj.connectorName = message.connectorName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateConnectorMetadata>, I>>(
    object: I
  ): UpdateConnectorMetadata {
    const message = {
      ...baseUpdateConnectorMetadata,
    } as UpdateConnectorMetadata;
    message.clusterId = object.clusterId ?? "";
    message.connectorName = object.connectorName ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateConnectorMetadata.$type, UpdateConnectorMetadata);

const baseDeleteConnectorRequest: object = {
  $type: "yandex.cloud.mdb.kafka.v1.DeleteConnectorRequest",
  clusterId: "",
  connectorName: "",
};

export const DeleteConnectorRequest = {
  $type: "yandex.cloud.mdb.kafka.v1.DeleteConnectorRequest" as const,

  encode(
    message: DeleteConnectorRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.connectorName !== "") {
      writer.uint32(18).string(message.connectorName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteConnectorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteConnectorRequest } as DeleteConnectorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.connectorName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteConnectorRequest {
    const message = { ...baseDeleteConnectorRequest } as DeleteConnectorRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.connectorName =
      object.connectorName !== undefined && object.connectorName !== null
        ? String(object.connectorName)
        : "";
    return message;
  },

  toJSON(message: DeleteConnectorRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.connectorName !== undefined &&
      (obj.connectorName = message.connectorName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteConnectorRequest>, I>>(
    object: I
  ): DeleteConnectorRequest {
    const message = { ...baseDeleteConnectorRequest } as DeleteConnectorRequest;
    message.clusterId = object.clusterId ?? "";
    message.connectorName = object.connectorName ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteConnectorRequest.$type, DeleteConnectorRequest);

const baseDeleteConnectorMetadata: object = {
  $type: "yandex.cloud.mdb.kafka.v1.DeleteConnectorMetadata",
  clusterId: "",
  connectorName: "",
};

export const DeleteConnectorMetadata = {
  $type: "yandex.cloud.mdb.kafka.v1.DeleteConnectorMetadata" as const,

  encode(
    message: DeleteConnectorMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.connectorName !== "") {
      writer.uint32(18).string(message.connectorName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteConnectorMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteConnectorMetadata,
    } as DeleteConnectorMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.connectorName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteConnectorMetadata {
    const message = {
      ...baseDeleteConnectorMetadata,
    } as DeleteConnectorMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.connectorName =
      object.connectorName !== undefined && object.connectorName !== null
        ? String(object.connectorName)
        : "";
    return message;
  },

  toJSON(message: DeleteConnectorMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.connectorName !== undefined &&
      (obj.connectorName = message.connectorName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteConnectorMetadata>, I>>(
    object: I
  ): DeleteConnectorMetadata {
    const message = {
      ...baseDeleteConnectorMetadata,
    } as DeleteConnectorMetadata;
    message.clusterId = object.clusterId ?? "";
    message.connectorName = object.connectorName ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteConnectorMetadata.$type, DeleteConnectorMetadata);

const baseResumeConnectorRequest: object = {
  $type: "yandex.cloud.mdb.kafka.v1.ResumeConnectorRequest",
  clusterId: "",
  connectorName: "",
};

export const ResumeConnectorRequest = {
  $type: "yandex.cloud.mdb.kafka.v1.ResumeConnectorRequest" as const,

  encode(
    message: ResumeConnectorRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.connectorName !== "") {
      writer.uint32(18).string(message.connectorName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResumeConnectorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResumeConnectorRequest } as ResumeConnectorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.connectorName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResumeConnectorRequest {
    const message = { ...baseResumeConnectorRequest } as ResumeConnectorRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.connectorName =
      object.connectorName !== undefined && object.connectorName !== null
        ? String(object.connectorName)
        : "";
    return message;
  },

  toJSON(message: ResumeConnectorRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.connectorName !== undefined &&
      (obj.connectorName = message.connectorName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResumeConnectorRequest>, I>>(
    object: I
  ): ResumeConnectorRequest {
    const message = { ...baseResumeConnectorRequest } as ResumeConnectorRequest;
    message.clusterId = object.clusterId ?? "";
    message.connectorName = object.connectorName ?? "";
    return message;
  },
};

messageTypeRegistry.set(ResumeConnectorRequest.$type, ResumeConnectorRequest);

const baseResumeConnectorMetadata: object = {
  $type: "yandex.cloud.mdb.kafka.v1.ResumeConnectorMetadata",
  clusterId: "",
  connectorName: "",
};

export const ResumeConnectorMetadata = {
  $type: "yandex.cloud.mdb.kafka.v1.ResumeConnectorMetadata" as const,

  encode(
    message: ResumeConnectorMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.connectorName !== "") {
      writer.uint32(18).string(message.connectorName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResumeConnectorMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseResumeConnectorMetadata,
    } as ResumeConnectorMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.connectorName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResumeConnectorMetadata {
    const message = {
      ...baseResumeConnectorMetadata,
    } as ResumeConnectorMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.connectorName =
      object.connectorName !== undefined && object.connectorName !== null
        ? String(object.connectorName)
        : "";
    return message;
  },

  toJSON(message: ResumeConnectorMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.connectorName !== undefined &&
      (obj.connectorName = message.connectorName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResumeConnectorMetadata>, I>>(
    object: I
  ): ResumeConnectorMetadata {
    const message = {
      ...baseResumeConnectorMetadata,
    } as ResumeConnectorMetadata;
    message.clusterId = object.clusterId ?? "";
    message.connectorName = object.connectorName ?? "";
    return message;
  },
};

messageTypeRegistry.set(ResumeConnectorMetadata.$type, ResumeConnectorMetadata);

const basePauseConnectorRequest: object = {
  $type: "yandex.cloud.mdb.kafka.v1.PauseConnectorRequest",
  clusterId: "",
  connectorName: "",
};

export const PauseConnectorRequest = {
  $type: "yandex.cloud.mdb.kafka.v1.PauseConnectorRequest" as const,

  encode(
    message: PauseConnectorRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.connectorName !== "") {
      writer.uint32(18).string(message.connectorName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PauseConnectorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePauseConnectorRequest } as PauseConnectorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.connectorName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PauseConnectorRequest {
    const message = { ...basePauseConnectorRequest } as PauseConnectorRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.connectorName =
      object.connectorName !== undefined && object.connectorName !== null
        ? String(object.connectorName)
        : "";
    return message;
  },

  toJSON(message: PauseConnectorRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.connectorName !== undefined &&
      (obj.connectorName = message.connectorName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PauseConnectorRequest>, I>>(
    object: I
  ): PauseConnectorRequest {
    const message = { ...basePauseConnectorRequest } as PauseConnectorRequest;
    message.clusterId = object.clusterId ?? "";
    message.connectorName = object.connectorName ?? "";
    return message;
  },
};

messageTypeRegistry.set(PauseConnectorRequest.$type, PauseConnectorRequest);

const basePauseConnectorMetadata: object = {
  $type: "yandex.cloud.mdb.kafka.v1.PauseConnectorMetadata",
  clusterId: "",
  connectorName: "",
};

export const PauseConnectorMetadata = {
  $type: "yandex.cloud.mdb.kafka.v1.PauseConnectorMetadata" as const,

  encode(
    message: PauseConnectorMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.connectorName !== "") {
      writer.uint32(18).string(message.connectorName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PauseConnectorMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePauseConnectorMetadata } as PauseConnectorMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.connectorName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PauseConnectorMetadata {
    const message = { ...basePauseConnectorMetadata } as PauseConnectorMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.connectorName =
      object.connectorName !== undefined && object.connectorName !== null
        ? String(object.connectorName)
        : "";
    return message;
  },

  toJSON(message: PauseConnectorMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.connectorName !== undefined &&
      (obj.connectorName = message.connectorName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PauseConnectorMetadata>, I>>(
    object: I
  ): PauseConnectorMetadata {
    const message = { ...basePauseConnectorMetadata } as PauseConnectorMetadata;
    message.clusterId = object.clusterId ?? "";
    message.connectorName = object.connectorName ?? "";
    return message;
  },
};

messageTypeRegistry.set(PauseConnectorMetadata.$type, PauseConnectorMetadata);

/** A set of methods for managing Apache Kafka Connectors resources. */
export const ConnectorServiceService = {
  /**
   * Returns the specified Apache Kafka Connector resource.
   *
   * To get the list of available Apache Kafka Connector resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetConnectorRequest) =>
      Buffer.from(GetConnectorRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetConnectorRequest.decode(value),
    responseSerialize: (value: Connector) =>
      Buffer.from(Connector.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Connector.decode(value),
  },
  /** Retrieves the list of Apache Kafka Connector resources in the specified cluster. */
  list: {
    path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListConnectorsRequest) =>
      Buffer.from(ListConnectorsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListConnectorsRequest.decode(value),
    responseSerialize: (value: ListConnectorsResponse) =>
      Buffer.from(ListConnectorsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListConnectorsResponse.decode(value),
  },
  /** Creates a new Apache Kafka connector in the specified cluster. */
  create: {
    path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateConnectorRequest) =>
      Buffer.from(CreateConnectorRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateConnectorRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates an Apache Kafka connector in the specified cluster. */
  update: {
    path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateConnectorRequest) =>
      Buffer.from(UpdateConnectorRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateConnectorRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified Apache Kafka connector. */
  delete: {
    path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteConnectorRequest) =>
      Buffer.from(DeleteConnectorRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteConnectorRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Resume the specified Apache Kafka connector. */
  resume: {
    path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Resume",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ResumeConnectorRequest) =>
      Buffer.from(ResumeConnectorRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ResumeConnectorRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Pause the specified Apache Kafka connector. */
  pause: {
    path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Pause",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PauseConnectorRequest) =>
      Buffer.from(PauseConnectorRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PauseConnectorRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface ConnectorServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified Apache Kafka Connector resource.
   *
   * To get the list of available Apache Kafka Connector resources, make a [List] request.
   */
  get: handleUnaryCall<GetConnectorRequest, Connector>;
  /** Retrieves the list of Apache Kafka Connector resources in the specified cluster. */
  list: handleUnaryCall<ListConnectorsRequest, ListConnectorsResponse>;
  /** Creates a new Apache Kafka connector in the specified cluster. */
  create: handleUnaryCall<CreateConnectorRequest, Operation>;
  /** Updates an Apache Kafka connector in the specified cluster. */
  update: handleUnaryCall<UpdateConnectorRequest, Operation>;
  /** Deletes the specified Apache Kafka connector. */
  delete: handleUnaryCall<DeleteConnectorRequest, Operation>;
  /** Resume the specified Apache Kafka connector. */
  resume: handleUnaryCall<ResumeConnectorRequest, Operation>;
  /** Pause the specified Apache Kafka connector. */
  pause: handleUnaryCall<PauseConnectorRequest, Operation>;
}

export interface ConnectorServiceClient extends Client {
  /**
   * Returns the specified Apache Kafka Connector resource.
   *
   * To get the list of available Apache Kafka Connector resources, make a [List] request.
   */
  get(
    request: GetConnectorRequest,
    callback: (error: ServiceError | null, response: Connector) => void
  ): ClientUnaryCall;
  get(
    request: GetConnectorRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Connector) => void
  ): ClientUnaryCall;
  get(
    request: GetConnectorRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Connector) => void
  ): ClientUnaryCall;
  /** Retrieves the list of Apache Kafka Connector resources in the specified cluster. */
  list(
    request: ListConnectorsRequest,
    callback: (
      error: ServiceError | null,
      response: ListConnectorsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListConnectorsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListConnectorsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListConnectorsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListConnectorsResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a new Apache Kafka connector in the specified cluster. */
  create(
    request: CreateConnectorRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateConnectorRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateConnectorRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates an Apache Kafka connector in the specified cluster. */
  update(
    request: UpdateConnectorRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateConnectorRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateConnectorRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified Apache Kafka connector. */
  delete(
    request: DeleteConnectorRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteConnectorRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteConnectorRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Resume the specified Apache Kafka connector. */
  resume(
    request: ResumeConnectorRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  resume(
    request: ResumeConnectorRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  resume(
    request: ResumeConnectorRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Pause the specified Apache Kafka connector. */
  pause(
    request: PauseConnectorRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  pause(
    request: PauseConnectorRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  pause(
    request: PauseConnectorRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const ConnectorServiceClient = makeGenericClientConstructor(
  ConnectorServiceService,
  "yandex.cloud.mdb.kafka.v1.ConnectorService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): ConnectorServiceClient;
  service: typeof ConnectorServiceService;
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
