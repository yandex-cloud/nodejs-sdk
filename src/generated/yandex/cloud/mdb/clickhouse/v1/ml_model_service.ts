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
  MlModelType,
  MlModel,
  mlModelTypeFromJSON,
  mlModelTypeToJSON,
} from "../../../../../yandex/cloud/mdb/clickhouse/v1/ml_model";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.mdb.clickhouse.v1";

export interface GetMlModelRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetMlModelRequest";
  /** ID of the cluster that the model belongs to. */
  clusterId: string;
  /**
   * Name of the model to return.
   *
   * To get a model name make a [MlModelService.List] request.
   */
  mlModelName: string;
}

export interface ListMlModelsRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListMlModelsRequest";
  /** ID of the cluster that models belongs to. */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListMlModelsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListMlModelsResponse.next_page_token] returned by the previous list request.
   */
  pageToken: string;
}

export interface ListMlModelsResponse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListMlModelsResponse";
  /** List of models in the specified cluster. */
  mlModels: MlModel[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListMlModelsRequest.page_size], use `next_page_token` as the value
   * for the [ListMlModelsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateMlModelRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateMlModelRequest";
  /**
   * ID of the cluster to create a model in.
   *
   * To get a cluster ID make a [ClusterService.List] request.
   */
  clusterId: string;
  /** Model name. The model name is one of the arguments of the modelEvaluate() function, which is used to call the model in ClickHouse. */
  mlModelName: string;
  /** Type of the model. */
  type: MlModelType;
  /** Model file URL. You can only use models stored in Object Storage. */
  uri: string;
}

export interface CreateMlModelMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateMlModelMetadata";
  /** ID of the cluster that a model is being added to. */
  clusterId: string;
  /** Name of the the model that is being created. */
  mlModelName: string;
}

export interface UpdateMlModelRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateMlModelRequest";
  /**
   * ID of the cluster to update the model in.
   *
   * To get a cluster ID make a [ClusterService.List] request.
   */
  clusterId: string;
  /** Name of the the model to update. */
  mlModelName: string;
  updateMask?: FieldMask;
  /** The new model file URL. You can only use models stored in Object Storage. */
  uri: string;
}

export interface UpdateMlModelMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateMlModelMetadata";
  /** ID of the cluster that contains the model being updated. */
  clusterId: string;
  /** Name of the the model that is being updated. */
  mlModelName: string;
}

export interface DeleteMlModelRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteMlModelRequest";
  /**
   * ID of the cluster to delete the model in.
   *
   * To get a cluster ID make a [ClusterService.List] request.
   */
  clusterId: string;
  /** Name of the the model to delete. */
  mlModelName: string;
}

export interface DeleteMlModelMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteMlModelMetadata";
  /** ID of the cluster that contains the model being deleted. */
  clusterId: string;
  /** Name of the the model that is being deleted. */
  mlModelName: string;
}

const baseGetMlModelRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetMlModelRequest",
  clusterId: "",
  mlModelName: "",
};

export const GetMlModelRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetMlModelRequest" as const,

  encode(
    message: GetMlModelRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.mlModelName !== "") {
      writer.uint32(18).string(message.mlModelName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMlModelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetMlModelRequest } as GetMlModelRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.mlModelName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMlModelRequest {
    const message = { ...baseGetMlModelRequest } as GetMlModelRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.mlModelName =
      object.mlModelName !== undefined && object.mlModelName !== null
        ? String(object.mlModelName)
        : "";
    return message;
  },

  toJSON(message: GetMlModelRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.mlModelName !== undefined &&
      (obj.mlModelName = message.mlModelName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMlModelRequest>, I>>(
    object: I
  ): GetMlModelRequest {
    const message = { ...baseGetMlModelRequest } as GetMlModelRequest;
    message.clusterId = object.clusterId ?? "";
    message.mlModelName = object.mlModelName ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetMlModelRequest.$type, GetMlModelRequest);

const baseListMlModelsRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListMlModelsRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListMlModelsRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListMlModelsRequest" as const,

  encode(
    message: ListMlModelsRequest,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMlModelsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListMlModelsRequest } as ListMlModelsRequest;
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

  fromJSON(object: any): ListMlModelsRequest {
    const message = { ...baseListMlModelsRequest } as ListMlModelsRequest;
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

  toJSON(message: ListMlModelsRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListMlModelsRequest>, I>>(
    object: I
  ): ListMlModelsRequest {
    const message = { ...baseListMlModelsRequest } as ListMlModelsRequest;
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListMlModelsRequest.$type, ListMlModelsRequest);

const baseListMlModelsResponse: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListMlModelsResponse",
  nextPageToken: "",
};

export const ListMlModelsResponse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListMlModelsResponse" as const,

  encode(
    message: ListMlModelsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.mlModels) {
      MlModel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListMlModelsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListMlModelsResponse } as ListMlModelsResponse;
    message.mlModels = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mlModels.push(MlModel.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListMlModelsResponse {
    const message = { ...baseListMlModelsResponse } as ListMlModelsResponse;
    message.mlModels = (object.mlModels ?? []).map((e: any) =>
      MlModel.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListMlModelsResponse): unknown {
    const obj: any = {};
    if (message.mlModels) {
      obj.mlModels = message.mlModels.map((e) =>
        e ? MlModel.toJSON(e) : undefined
      );
    } else {
      obj.mlModels = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListMlModelsResponse>, I>>(
    object: I
  ): ListMlModelsResponse {
    const message = { ...baseListMlModelsResponse } as ListMlModelsResponse;
    message.mlModels =
      object.mlModels?.map((e) => MlModel.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListMlModelsResponse.$type, ListMlModelsResponse);

const baseCreateMlModelRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateMlModelRequest",
  clusterId: "",
  mlModelName: "",
  type: 0,
  uri: "",
};

export const CreateMlModelRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateMlModelRequest" as const,

  encode(
    message: CreateMlModelRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.mlModelName !== "") {
      writer.uint32(18).string(message.mlModelName);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateMlModelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateMlModelRequest } as CreateMlModelRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.mlModelName = reader.string();
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        case 4:
          message.uri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateMlModelRequest {
    const message = { ...baseCreateMlModelRequest } as CreateMlModelRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.mlModelName =
      object.mlModelName !== undefined && object.mlModelName !== null
        ? String(object.mlModelName)
        : "";
    message.type =
      object.type !== undefined && object.type !== null
        ? mlModelTypeFromJSON(object.type)
        : 0;
    message.uri =
      object.uri !== undefined && object.uri !== null ? String(object.uri) : "";
    return message;
  },

  toJSON(message: CreateMlModelRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.mlModelName !== undefined &&
      (obj.mlModelName = message.mlModelName);
    message.type !== undefined && (obj.type = mlModelTypeToJSON(message.type));
    message.uri !== undefined && (obj.uri = message.uri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateMlModelRequest>, I>>(
    object: I
  ): CreateMlModelRequest {
    const message = { ...baseCreateMlModelRequest } as CreateMlModelRequest;
    message.clusterId = object.clusterId ?? "";
    message.mlModelName = object.mlModelName ?? "";
    message.type = object.type ?? 0;
    message.uri = object.uri ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateMlModelRequest.$type, CreateMlModelRequest);

const baseCreateMlModelMetadata: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateMlModelMetadata",
  clusterId: "",
  mlModelName: "",
};

export const CreateMlModelMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateMlModelMetadata" as const,

  encode(
    message: CreateMlModelMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.mlModelName !== "") {
      writer.uint32(18).string(message.mlModelName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateMlModelMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateMlModelMetadata } as CreateMlModelMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.mlModelName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateMlModelMetadata {
    const message = { ...baseCreateMlModelMetadata } as CreateMlModelMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.mlModelName =
      object.mlModelName !== undefined && object.mlModelName !== null
        ? String(object.mlModelName)
        : "";
    return message;
  },

  toJSON(message: CreateMlModelMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.mlModelName !== undefined &&
      (obj.mlModelName = message.mlModelName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateMlModelMetadata>, I>>(
    object: I
  ): CreateMlModelMetadata {
    const message = { ...baseCreateMlModelMetadata } as CreateMlModelMetadata;
    message.clusterId = object.clusterId ?? "";
    message.mlModelName = object.mlModelName ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateMlModelMetadata.$type, CreateMlModelMetadata);

const baseUpdateMlModelRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateMlModelRequest",
  clusterId: "",
  mlModelName: "",
  uri: "",
};

export const UpdateMlModelRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateMlModelRequest" as const,

  encode(
    message: UpdateMlModelRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.mlModelName !== "") {
      writer.uint32(18).string(message.mlModelName);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateMlModelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateMlModelRequest } as UpdateMlModelRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.mlModelName = reader.string();
          break;
        case 3:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 4:
          message.uri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateMlModelRequest {
    const message = { ...baseUpdateMlModelRequest } as UpdateMlModelRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.mlModelName =
      object.mlModelName !== undefined && object.mlModelName !== null
        ? String(object.mlModelName)
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    message.uri =
      object.uri !== undefined && object.uri !== null ? String(object.uri) : "";
    return message;
  },

  toJSON(message: UpdateMlModelRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.mlModelName !== undefined &&
      (obj.mlModelName = message.mlModelName);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.uri !== undefined && (obj.uri = message.uri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateMlModelRequest>, I>>(
    object: I
  ): UpdateMlModelRequest {
    const message = { ...baseUpdateMlModelRequest } as UpdateMlModelRequest;
    message.clusterId = object.clusterId ?? "";
    message.mlModelName = object.mlModelName ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.uri = object.uri ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateMlModelRequest.$type, UpdateMlModelRequest);

const baseUpdateMlModelMetadata: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateMlModelMetadata",
  clusterId: "",
  mlModelName: "",
};

export const UpdateMlModelMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateMlModelMetadata" as const,

  encode(
    message: UpdateMlModelMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.mlModelName !== "") {
      writer.uint32(18).string(message.mlModelName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateMlModelMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateMlModelMetadata } as UpdateMlModelMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.mlModelName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateMlModelMetadata {
    const message = { ...baseUpdateMlModelMetadata } as UpdateMlModelMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.mlModelName =
      object.mlModelName !== undefined && object.mlModelName !== null
        ? String(object.mlModelName)
        : "";
    return message;
  },

  toJSON(message: UpdateMlModelMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.mlModelName !== undefined &&
      (obj.mlModelName = message.mlModelName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateMlModelMetadata>, I>>(
    object: I
  ): UpdateMlModelMetadata {
    const message = { ...baseUpdateMlModelMetadata } as UpdateMlModelMetadata;
    message.clusterId = object.clusterId ?? "";
    message.mlModelName = object.mlModelName ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateMlModelMetadata.$type, UpdateMlModelMetadata);

const baseDeleteMlModelRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteMlModelRequest",
  clusterId: "",
  mlModelName: "",
};

export const DeleteMlModelRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteMlModelRequest" as const,

  encode(
    message: DeleteMlModelRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.mlModelName !== "") {
      writer.uint32(18).string(message.mlModelName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteMlModelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteMlModelRequest } as DeleteMlModelRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.mlModelName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteMlModelRequest {
    const message = { ...baseDeleteMlModelRequest } as DeleteMlModelRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.mlModelName =
      object.mlModelName !== undefined && object.mlModelName !== null
        ? String(object.mlModelName)
        : "";
    return message;
  },

  toJSON(message: DeleteMlModelRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.mlModelName !== undefined &&
      (obj.mlModelName = message.mlModelName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteMlModelRequest>, I>>(
    object: I
  ): DeleteMlModelRequest {
    const message = { ...baseDeleteMlModelRequest } as DeleteMlModelRequest;
    message.clusterId = object.clusterId ?? "";
    message.mlModelName = object.mlModelName ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteMlModelRequest.$type, DeleteMlModelRequest);

const baseDeleteMlModelMetadata: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteMlModelMetadata",
  clusterId: "",
  mlModelName: "",
};

export const DeleteMlModelMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteMlModelMetadata" as const,

  encode(
    message: DeleteMlModelMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.mlModelName !== "") {
      writer.uint32(18).string(message.mlModelName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteMlModelMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteMlModelMetadata } as DeleteMlModelMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.mlModelName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteMlModelMetadata {
    const message = { ...baseDeleteMlModelMetadata } as DeleteMlModelMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.mlModelName =
      object.mlModelName !== undefined && object.mlModelName !== null
        ? String(object.mlModelName)
        : "";
    return message;
  },

  toJSON(message: DeleteMlModelMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.mlModelName !== undefined &&
      (obj.mlModelName = message.mlModelName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteMlModelMetadata>, I>>(
    object: I
  ): DeleteMlModelMetadata {
    const message = { ...baseDeleteMlModelMetadata } as DeleteMlModelMetadata;
    message.clusterId = object.clusterId ?? "";
    message.mlModelName = object.mlModelName ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteMlModelMetadata.$type, DeleteMlModelMetadata);

/** A set of methods for managing machine learning models. */
export const MlModelServiceService = {
  /**
   * Returns the specified machine learning model.
   *
   * To get the list of all available models, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetMlModelRequest) =>
      Buffer.from(GetMlModelRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetMlModelRequest.decode(value),
    responseSerialize: (value: MlModel) =>
      Buffer.from(MlModel.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MlModel.decode(value),
  },
  /** Retrieves the list of machine learning models in the specified cluster. */
  list: {
    path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListMlModelsRequest) =>
      Buffer.from(ListMlModelsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListMlModelsRequest.decode(value),
    responseSerialize: (value: ListMlModelsResponse) =>
      Buffer.from(ListMlModelsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListMlModelsResponse.decode(value),
  },
  /** Creates a machine learning model in the specified cluster. */
  create: {
    path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateMlModelRequest) =>
      Buffer.from(CreateMlModelRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateMlModelRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified machine learning model. */
  update: {
    path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateMlModelRequest) =>
      Buffer.from(UpdateMlModelRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateMlModelRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified machine learning model. */
  delete: {
    path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteMlModelRequest) =>
      Buffer.from(DeleteMlModelRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteMlModelRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface MlModelServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified machine learning model.
   *
   * To get the list of all available models, make a [List] request.
   */
  get: handleUnaryCall<GetMlModelRequest, MlModel>;
  /** Retrieves the list of machine learning models in the specified cluster. */
  list: handleUnaryCall<ListMlModelsRequest, ListMlModelsResponse>;
  /** Creates a machine learning model in the specified cluster. */
  create: handleUnaryCall<CreateMlModelRequest, Operation>;
  /** Updates the specified machine learning model. */
  update: handleUnaryCall<UpdateMlModelRequest, Operation>;
  /** Deletes the specified machine learning model. */
  delete: handleUnaryCall<DeleteMlModelRequest, Operation>;
}

export interface MlModelServiceClient extends Client {
  /**
   * Returns the specified machine learning model.
   *
   * To get the list of all available models, make a [List] request.
   */
  get(
    request: GetMlModelRequest,
    callback: (error: ServiceError | null, response: MlModel) => void
  ): ClientUnaryCall;
  get(
    request: GetMlModelRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: MlModel) => void
  ): ClientUnaryCall;
  get(
    request: GetMlModelRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MlModel) => void
  ): ClientUnaryCall;
  /** Retrieves the list of machine learning models in the specified cluster. */
  list(
    request: ListMlModelsRequest,
    callback: (
      error: ServiceError | null,
      response: ListMlModelsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListMlModelsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListMlModelsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListMlModelsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListMlModelsResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a machine learning model in the specified cluster. */
  create(
    request: CreateMlModelRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateMlModelRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateMlModelRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified machine learning model. */
  update(
    request: UpdateMlModelRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateMlModelRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateMlModelRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified machine learning model. */
  delete(
    request: DeleteMlModelRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteMlModelRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteMlModelRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const MlModelServiceClient = makeGenericClientConstructor(
  MlModelServiceService,
  "yandex.cloud.mdb.clickhouse.v1.MlModelService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): MlModelServiceClient;
  service: typeof MlModelServiceService;
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
