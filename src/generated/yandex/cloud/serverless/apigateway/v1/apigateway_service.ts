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
  Connectivity,
  LogOptions,
  Canary,
  VariableInput,
  ApiGateway,
} from "../../../../../yandex/cloud/serverless/apigateway/v1/apigateway";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
import {
  ListAccessBindingsRequest,
  ListAccessBindingsResponse,
  SetAccessBindingsRequest,
  UpdateAccessBindingsRequest,
} from "../../../../../yandex/cloud/access/access";

export const protobufPackage = "yandex.cloud.serverless.apigateway.v1";

export interface GetApiGatewayRequest {
  $type: "yandex.cloud.serverless.apigateway.v1.GetApiGatewayRequest";
  /**
   * ID of the API gateway to return.
   *
   * To get a API gateway ID make a [ApiGatewayService.List] request.
   */
  apiGatewayId: string;
}

export interface ListApiGatewayRequest {
  $type: "yandex.cloud.serverless.apigateway.v1.ListApiGatewayRequest";
  /**
   * ID of the folder to list API gateways in.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `pageSize`, the service returns a [ListApiGatewayResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListApiGatewayResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters functions listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently filtering can only be applied to the [ApiGateway.name](index) field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z]([-a-z0-9]{0,61}[a-z0-9])?`.
   * Example of a filter: `name=my-apigw`.
   */
  filter: string;
}

export interface ListApiGatewayResponse {
  $type: "yandex.cloud.serverless.apigateway.v1.ListApiGatewayResponse";
  /** List of API gateways in the specified folder. */
  apiGateways: ApiGateway[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListApiGatewayRequest.page_size], use `nextPageToken` as the value
   * for the [ListApiGatewayRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateApiGatewayRequest {
  $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest";
  /**
   * ID of the folder to create an API gateway in.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the API gateway.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the API gateway. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** The text of specification, JSON or YAML. */
  openapiSpec: string | undefined;
  /** Gateway connectivity. If specified the gateway will be attached to specified network/subnet(s). */
  connectivity?: Connectivity;
  /** Options for logging from the API gateway. */
  logOptions?: LogOptions;
  /** Values of variables defined in the specification. */
  variables: { [key: string]: VariableInput };
  /** Canary release of the gateway. */
  canary?: Canary;
}

export interface CreateApiGatewayRequest_LabelsEntry {
  $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateApiGatewayRequest_VariablesEntry {
  $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.VariablesEntry";
  key: string;
  value?: VariableInput;
}

export interface UpdateApiGatewayRequest {
  $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest";
  /**
   * ID of the API gateway to update.
   *
   * To get a API gateway ID make a [ApiGatewayService.List] request.
   */
  apiGatewayId: string;
  /** Field mask that specifies which attributes of the API gateway should be updated. */
  updateMask?: FieldMask;
  /**
   * New name for the API gateway.
   * The name must be unique within the folder.
   */
  name: string;
  /** New description for the API gateway. */
  description: string;
  /**
   * API gateway labels as `key:value` pairs.
   *
   * Existing set of labels is completely replaced by the provided set, so if you just want
   * to add or remove a label, request the current set of labels with a [yandex.cloud.serverless.apigateway.v1.ApiGatewayService.Get] request.
   */
  labels: { [key: string]: string };
  /** The text of specification, JSON or YAML. */
  openapiSpec: string | undefined;
  /** Gateway connectivity. If specified the gateway will be attached to specified network/subnet(s). */
  connectivity?: Connectivity;
  /** Options for logging from the API gateway. */
  logOptions?: LogOptions;
  /** Values of variables defined in the specification. */
  variables: { [key: string]: VariableInput };
  /** Canary release of the gateway. */
  canary?: Canary;
}

export interface UpdateApiGatewayRequest_LabelsEntry {
  $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateApiGatewayRequest_VariablesEntry {
  $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.VariablesEntry";
  key: string;
  value?: VariableInput;
}

export interface DeleteApiGatewayRequest {
  $type: "yandex.cloud.serverless.apigateway.v1.DeleteApiGatewayRequest";
  /**
   * ID of the API gateway to update.
   *
   * To get a API gateway ID make a [ApiGatewayService.List] request.
   */
  apiGatewayId: string;
}

export interface AddDomainRequest {
  $type: "yandex.cloud.serverless.apigateway.v1.AddDomainRequest";
  /** ID of the API gateway that the domain is attached to. */
  apiGatewayId: string;
  /** Name of the attaching domain. */
  domainName: string;
  /** ID of certificate for the attaching domain. */
  certificateId: string;
}

export interface RemoveDomainRequest {
  $type: "yandex.cloud.serverless.apigateway.v1.RemoveDomainRequest";
  /** ID of the API gateway from which the domain is being detached. */
  apiGatewayId: string;
  /** ID of the detaching domain. */
  domainId: string;
}

export interface CreateApiGatewayMetadata {
  $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayMetadata";
  /** ID of the API gateway that is being created. */
  apiGatewayId: string;
}

export interface UpdateApiGatewayMetadata {
  $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayMetadata";
  /** ID of the API gateway that is being updated. */
  apiGatewayId: string;
}

export interface DeleteApiGatewayMetadata {
  $type: "yandex.cloud.serverless.apigateway.v1.DeleteApiGatewayMetadata";
  /** ID of the API gateway that is being deleted. */
  apiGatewayId: string;
}

export interface AddDomainMetadata {
  $type: "yandex.cloud.serverless.apigateway.v1.AddDomainMetadata";
  /** ID of the API gateway that the domain is attached to. */
  apiGatewayId: string;
  /** ID of the attached domain. */
  domainId: string;
  /** Name of the attaching domain. */
  domainName: string;
  /** ID of the certificate for provided domain. */
  certificateId: string;
}

export interface RemoveDomainMetadata {
  $type: "yandex.cloud.serverless.apigateway.v1.RemoveDomainMetadata";
  /** ID of the API gateway from which the domain is being detached. */
  apiGatewayId: string;
  /** ID of the detaching domain. */
  domainId: string;
}

export interface ListOperationsRequest {
  $type: "yandex.cloud.serverless.apigateway.v1.ListOperationsRequest";
  /** ID of the API gateway to list operations for. */
  apiGatewayId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `pageSize`, the service returns a [ListOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently filtering can be applied to the [operation.Operation.done], [operation.Operation.created_by] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Examples of a filter: `done=false`, `created_by='John.Doe'`.
   */
  filter: string;
}

export interface ListOperationsResponse {
  $type: "yandex.cloud.serverless.apigateway.v1.ListOperationsResponse";
  /** List of operations for the specified API gateway. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListOperationsRequest.page_size], use `nextPageToken` as the value
   * for the [ListOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface GetOpenapiSpecRequest {
  $type: "yandex.cloud.serverless.apigateway.v1.GetOpenapiSpecRequest";
  /** ID of the API gateway to get specification from. */
  apiGatewayId: string;
  /** Format of returned specification. Default is the original format used in [CreateApiGatewayRequest]. */
  format: GetOpenapiSpecRequest_Format;
}

export enum GetOpenapiSpecRequest_Format {
  FORMAT_UNSPECIFIED = 0,
  JSON = 1,
  YAML = 2,
  UNRECOGNIZED = -1,
}

export function getOpenapiSpecRequest_FormatFromJSON(
  object: any
): GetOpenapiSpecRequest_Format {
  switch (object) {
    case 0:
    case "FORMAT_UNSPECIFIED":
      return GetOpenapiSpecRequest_Format.FORMAT_UNSPECIFIED;
    case 1:
    case "JSON":
      return GetOpenapiSpecRequest_Format.JSON;
    case 2:
    case "YAML":
      return GetOpenapiSpecRequest_Format.YAML;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GetOpenapiSpecRequest_Format.UNRECOGNIZED;
  }
}

export function getOpenapiSpecRequest_FormatToJSON(
  object: GetOpenapiSpecRequest_Format
): string {
  switch (object) {
    case GetOpenapiSpecRequest_Format.FORMAT_UNSPECIFIED:
      return "FORMAT_UNSPECIFIED";
    case GetOpenapiSpecRequest_Format.JSON:
      return "JSON";
    case GetOpenapiSpecRequest_Format.YAML:
      return "YAML";
    default:
      return "UNKNOWN";
  }
}

export interface GetOpenapiSpecResponse {
  $type: "yandex.cloud.serverless.apigateway.v1.GetOpenapiSpecResponse";
  /** ID of the API gateway. */
  apiGatewayId: string;
  /** The text of specification, JSON or YAML. */
  openapiSpec: string;
}

const baseGetApiGatewayRequest: object = {
  $type: "yandex.cloud.serverless.apigateway.v1.GetApiGatewayRequest",
  apiGatewayId: "",
};

export const GetApiGatewayRequest = {
  $type: "yandex.cloud.serverless.apigateway.v1.GetApiGatewayRequest" as const,

  encode(
    message: GetApiGatewayRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.apiGatewayId !== "") {
      writer.uint32(10).string(message.apiGatewayId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetApiGatewayRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetApiGatewayRequest } as GetApiGatewayRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiGatewayId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetApiGatewayRequest {
    const message = { ...baseGetApiGatewayRequest } as GetApiGatewayRequest;
    message.apiGatewayId =
      object.apiGatewayId !== undefined && object.apiGatewayId !== null
        ? String(object.apiGatewayId)
        : "";
    return message;
  },

  toJSON(message: GetApiGatewayRequest): unknown {
    const obj: any = {};
    message.apiGatewayId !== undefined &&
      (obj.apiGatewayId = message.apiGatewayId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetApiGatewayRequest>, I>>(
    object: I
  ): GetApiGatewayRequest {
    const message = { ...baseGetApiGatewayRequest } as GetApiGatewayRequest;
    message.apiGatewayId = object.apiGatewayId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetApiGatewayRequest.$type, GetApiGatewayRequest);

const baseListApiGatewayRequest: object = {
  $type: "yandex.cloud.serverless.apigateway.v1.ListApiGatewayRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListApiGatewayRequest = {
  $type: "yandex.cloud.serverless.apigateway.v1.ListApiGatewayRequest" as const,

  encode(
    message: ListApiGatewayRequest,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListApiGatewayRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListApiGatewayRequest } as ListApiGatewayRequest;
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

  fromJSON(object: any): ListApiGatewayRequest {
    const message = { ...baseListApiGatewayRequest } as ListApiGatewayRequest;
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

  toJSON(message: ListApiGatewayRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListApiGatewayRequest>, I>>(
    object: I
  ): ListApiGatewayRequest {
    const message = { ...baseListApiGatewayRequest } as ListApiGatewayRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListApiGatewayRequest.$type, ListApiGatewayRequest);

const baseListApiGatewayResponse: object = {
  $type: "yandex.cloud.serverless.apigateway.v1.ListApiGatewayResponse",
  nextPageToken: "",
};

export const ListApiGatewayResponse = {
  $type:
    "yandex.cloud.serverless.apigateway.v1.ListApiGatewayResponse" as const,

  encode(
    message: ListApiGatewayResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.apiGateways) {
      ApiGateway.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListApiGatewayResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListApiGatewayResponse } as ListApiGatewayResponse;
    message.apiGateways = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiGateways.push(ApiGateway.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListApiGatewayResponse {
    const message = { ...baseListApiGatewayResponse } as ListApiGatewayResponse;
    message.apiGateways = (object.apiGateways ?? []).map((e: any) =>
      ApiGateway.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListApiGatewayResponse): unknown {
    const obj: any = {};
    if (message.apiGateways) {
      obj.apiGateways = message.apiGateways.map((e) =>
        e ? ApiGateway.toJSON(e) : undefined
      );
    } else {
      obj.apiGateways = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListApiGatewayResponse>, I>>(
    object: I
  ): ListApiGatewayResponse {
    const message = { ...baseListApiGatewayResponse } as ListApiGatewayResponse;
    message.apiGateways =
      object.apiGateways?.map((e) => ApiGateway.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListApiGatewayResponse.$type, ListApiGatewayResponse);

const baseCreateApiGatewayRequest: object = {
  $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest",
  folderId: "",
  name: "",
  description: "",
};

export const CreateApiGatewayRequest = {
  $type:
    "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest" as const,

  encode(
    message: CreateApiGatewayRequest,
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
      CreateApiGatewayRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.openapiSpec !== undefined) {
      writer.uint32(42).string(message.openapiSpec);
    }
    if (message.connectivity !== undefined) {
      Connectivity.encode(
        message.connectivity,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.logOptions !== undefined) {
      LogOptions.encode(message.logOptions, writer.uint32(58).fork()).ldelim();
    }
    Object.entries(message.variables).forEach(([key, value]) => {
      CreateApiGatewayRequest_VariablesEntry.encode(
        {
          $type:
            "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.VariablesEntry",
          key: key as any,
          value,
        },
        writer.uint32(66).fork()
      ).ldelim();
    });
    if (message.canary !== undefined) {
      Canary.encode(message.canary, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateApiGatewayRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateApiGatewayRequest,
    } as CreateApiGatewayRequest;
    message.labels = {};
    message.variables = {};
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
          const entry4 = CreateApiGatewayRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.openapiSpec = reader.string();
          break;
        case 6:
          message.connectivity = Connectivity.decode(reader, reader.uint32());
          break;
        case 7:
          message.logOptions = LogOptions.decode(reader, reader.uint32());
          break;
        case 8:
          const entry8 = CreateApiGatewayRequest_VariablesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry8.value !== undefined) {
            message.variables[entry8.key] = entry8.value;
          }
          break;
        case 9:
          message.canary = Canary.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateApiGatewayRequest {
    const message = {
      ...baseCreateApiGatewayRequest,
    } as CreateApiGatewayRequest;
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
    message.openapiSpec =
      object.openapiSpec !== undefined && object.openapiSpec !== null
        ? String(object.openapiSpec)
        : undefined;
    message.connectivity =
      object.connectivity !== undefined && object.connectivity !== null
        ? Connectivity.fromJSON(object.connectivity)
        : undefined;
    message.logOptions =
      object.logOptions !== undefined && object.logOptions !== null
        ? LogOptions.fromJSON(object.logOptions)
        : undefined;
    message.variables = Object.entries(object.variables ?? {}).reduce<{
      [key: string]: VariableInput;
    }>((acc, [key, value]) => {
      acc[key] = VariableInput.fromJSON(value);
      return acc;
    }, {});
    message.canary =
      object.canary !== undefined && object.canary !== null
        ? Canary.fromJSON(object.canary)
        : undefined;
    return message;
  },

  toJSON(message: CreateApiGatewayRequest): unknown {
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
    message.openapiSpec !== undefined &&
      (obj.openapiSpec = message.openapiSpec);
    message.connectivity !== undefined &&
      (obj.connectivity = message.connectivity
        ? Connectivity.toJSON(message.connectivity)
        : undefined);
    message.logOptions !== undefined &&
      (obj.logOptions = message.logOptions
        ? LogOptions.toJSON(message.logOptions)
        : undefined);
    obj.variables = {};
    if (message.variables) {
      Object.entries(message.variables).forEach(([k, v]) => {
        obj.variables[k] = VariableInput.toJSON(v);
      });
    }
    message.canary !== undefined &&
      (obj.canary = message.canary ? Canary.toJSON(message.canary) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateApiGatewayRequest>, I>>(
    object: I
  ): CreateApiGatewayRequest {
    const message = {
      ...baseCreateApiGatewayRequest,
    } as CreateApiGatewayRequest;
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
    message.openapiSpec = object.openapiSpec ?? undefined;
    message.connectivity =
      object.connectivity !== undefined && object.connectivity !== null
        ? Connectivity.fromPartial(object.connectivity)
        : undefined;
    message.logOptions =
      object.logOptions !== undefined && object.logOptions !== null
        ? LogOptions.fromPartial(object.logOptions)
        : undefined;
    message.variables = Object.entries(object.variables ?? {}).reduce<{
      [key: string]: VariableInput;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = VariableInput.fromPartial(value);
      }
      return acc;
    }, {});
    message.canary =
      object.canary !== undefined && object.canary !== null
        ? Canary.fromPartial(object.canary)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateApiGatewayRequest.$type, CreateApiGatewayRequest);

const baseCreateApiGatewayRequest_LabelsEntry: object = {
  $type:
    "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateApiGatewayRequest_LabelsEntry = {
  $type:
    "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.LabelsEntry" as const,

  encode(
    message: CreateApiGatewayRequest_LabelsEntry,
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
  ): CreateApiGatewayRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateApiGatewayRequest_LabelsEntry,
    } as CreateApiGatewayRequest_LabelsEntry;
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

  fromJSON(object: any): CreateApiGatewayRequest_LabelsEntry {
    const message = {
      ...baseCreateApiGatewayRequest_LabelsEntry,
    } as CreateApiGatewayRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateApiGatewayRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateApiGatewayRequest_LabelsEntry>, I>
  >(object: I): CreateApiGatewayRequest_LabelsEntry {
    const message = {
      ...baseCreateApiGatewayRequest_LabelsEntry,
    } as CreateApiGatewayRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateApiGatewayRequest_LabelsEntry.$type,
  CreateApiGatewayRequest_LabelsEntry
);

const baseCreateApiGatewayRequest_VariablesEntry: object = {
  $type:
    "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.VariablesEntry",
  key: "",
};

export const CreateApiGatewayRequest_VariablesEntry = {
  $type:
    "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.VariablesEntry" as const,

  encode(
    message: CreateApiGatewayRequest_VariablesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      VariableInput.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateApiGatewayRequest_VariablesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateApiGatewayRequest_VariablesEntry,
    } as CreateApiGatewayRequest_VariablesEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = VariableInput.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateApiGatewayRequest_VariablesEntry {
    const message = {
      ...baseCreateApiGatewayRequest_VariablesEntry,
    } as CreateApiGatewayRequest_VariablesEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? VariableInput.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: CreateApiGatewayRequest_VariablesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? VariableInput.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateApiGatewayRequest_VariablesEntry>, I>
  >(object: I): CreateApiGatewayRequest_VariablesEntry {
    const message = {
      ...baseCreateApiGatewayRequest_VariablesEntry,
    } as CreateApiGatewayRequest_VariablesEntry;
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? VariableInput.fromPartial(object.value)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  CreateApiGatewayRequest_VariablesEntry.$type,
  CreateApiGatewayRequest_VariablesEntry
);

const baseUpdateApiGatewayRequest: object = {
  $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest",
  apiGatewayId: "",
  name: "",
  description: "",
};

export const UpdateApiGatewayRequest = {
  $type:
    "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest" as const,

  encode(
    message: UpdateApiGatewayRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.apiGatewayId !== "") {
      writer.uint32(10).string(message.apiGatewayId);
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
      UpdateApiGatewayRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.openapiSpec !== undefined) {
      writer.uint32(50).string(message.openapiSpec);
    }
    if (message.connectivity !== undefined) {
      Connectivity.encode(
        message.connectivity,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.logOptions !== undefined) {
      LogOptions.encode(message.logOptions, writer.uint32(66).fork()).ldelim();
    }
    Object.entries(message.variables).forEach(([key, value]) => {
      UpdateApiGatewayRequest_VariablesEntry.encode(
        {
          $type:
            "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.VariablesEntry",
          key: key as any,
          value,
        },
        writer.uint32(74).fork()
      ).ldelim();
    });
    if (message.canary !== undefined) {
      Canary.encode(message.canary, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateApiGatewayRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateApiGatewayRequest,
    } as UpdateApiGatewayRequest;
    message.labels = {};
    message.variables = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiGatewayId = reader.string();
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
          const entry5 = UpdateApiGatewayRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.openapiSpec = reader.string();
          break;
        case 7:
          message.connectivity = Connectivity.decode(reader, reader.uint32());
          break;
        case 8:
          message.logOptions = LogOptions.decode(reader, reader.uint32());
          break;
        case 9:
          const entry9 = UpdateApiGatewayRequest_VariablesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry9.value !== undefined) {
            message.variables[entry9.key] = entry9.value;
          }
          break;
        case 10:
          message.canary = Canary.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateApiGatewayRequest {
    const message = {
      ...baseUpdateApiGatewayRequest,
    } as UpdateApiGatewayRequest;
    message.apiGatewayId =
      object.apiGatewayId !== undefined && object.apiGatewayId !== null
        ? String(object.apiGatewayId)
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
    message.openapiSpec =
      object.openapiSpec !== undefined && object.openapiSpec !== null
        ? String(object.openapiSpec)
        : undefined;
    message.connectivity =
      object.connectivity !== undefined && object.connectivity !== null
        ? Connectivity.fromJSON(object.connectivity)
        : undefined;
    message.logOptions =
      object.logOptions !== undefined && object.logOptions !== null
        ? LogOptions.fromJSON(object.logOptions)
        : undefined;
    message.variables = Object.entries(object.variables ?? {}).reduce<{
      [key: string]: VariableInput;
    }>((acc, [key, value]) => {
      acc[key] = VariableInput.fromJSON(value);
      return acc;
    }, {});
    message.canary =
      object.canary !== undefined && object.canary !== null
        ? Canary.fromJSON(object.canary)
        : undefined;
    return message;
  },

  toJSON(message: UpdateApiGatewayRequest): unknown {
    const obj: any = {};
    message.apiGatewayId !== undefined &&
      (obj.apiGatewayId = message.apiGatewayId);
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
    message.openapiSpec !== undefined &&
      (obj.openapiSpec = message.openapiSpec);
    message.connectivity !== undefined &&
      (obj.connectivity = message.connectivity
        ? Connectivity.toJSON(message.connectivity)
        : undefined);
    message.logOptions !== undefined &&
      (obj.logOptions = message.logOptions
        ? LogOptions.toJSON(message.logOptions)
        : undefined);
    obj.variables = {};
    if (message.variables) {
      Object.entries(message.variables).forEach(([k, v]) => {
        obj.variables[k] = VariableInput.toJSON(v);
      });
    }
    message.canary !== undefined &&
      (obj.canary = message.canary ? Canary.toJSON(message.canary) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateApiGatewayRequest>, I>>(
    object: I
  ): UpdateApiGatewayRequest {
    const message = {
      ...baseUpdateApiGatewayRequest,
    } as UpdateApiGatewayRequest;
    message.apiGatewayId = object.apiGatewayId ?? "";
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
    message.openapiSpec = object.openapiSpec ?? undefined;
    message.connectivity =
      object.connectivity !== undefined && object.connectivity !== null
        ? Connectivity.fromPartial(object.connectivity)
        : undefined;
    message.logOptions =
      object.logOptions !== undefined && object.logOptions !== null
        ? LogOptions.fromPartial(object.logOptions)
        : undefined;
    message.variables = Object.entries(object.variables ?? {}).reduce<{
      [key: string]: VariableInput;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = VariableInput.fromPartial(value);
      }
      return acc;
    }, {});
    message.canary =
      object.canary !== undefined && object.canary !== null
        ? Canary.fromPartial(object.canary)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateApiGatewayRequest.$type, UpdateApiGatewayRequest);

const baseUpdateApiGatewayRequest_LabelsEntry: object = {
  $type:
    "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateApiGatewayRequest_LabelsEntry = {
  $type:
    "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.LabelsEntry" as const,

  encode(
    message: UpdateApiGatewayRequest_LabelsEntry,
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
  ): UpdateApiGatewayRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateApiGatewayRequest_LabelsEntry,
    } as UpdateApiGatewayRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateApiGatewayRequest_LabelsEntry {
    const message = {
      ...baseUpdateApiGatewayRequest_LabelsEntry,
    } as UpdateApiGatewayRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateApiGatewayRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateApiGatewayRequest_LabelsEntry>, I>
  >(object: I): UpdateApiGatewayRequest_LabelsEntry {
    const message = {
      ...baseUpdateApiGatewayRequest_LabelsEntry,
    } as UpdateApiGatewayRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateApiGatewayRequest_LabelsEntry.$type,
  UpdateApiGatewayRequest_LabelsEntry
);

const baseUpdateApiGatewayRequest_VariablesEntry: object = {
  $type:
    "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.VariablesEntry",
  key: "",
};

export const UpdateApiGatewayRequest_VariablesEntry = {
  $type:
    "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.VariablesEntry" as const,

  encode(
    message: UpdateApiGatewayRequest_VariablesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      VariableInput.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateApiGatewayRequest_VariablesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateApiGatewayRequest_VariablesEntry,
    } as UpdateApiGatewayRequest_VariablesEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = VariableInput.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateApiGatewayRequest_VariablesEntry {
    const message = {
      ...baseUpdateApiGatewayRequest_VariablesEntry,
    } as UpdateApiGatewayRequest_VariablesEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? VariableInput.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: UpdateApiGatewayRequest_VariablesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? VariableInput.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateApiGatewayRequest_VariablesEntry>, I>
  >(object: I): UpdateApiGatewayRequest_VariablesEntry {
    const message = {
      ...baseUpdateApiGatewayRequest_VariablesEntry,
    } as UpdateApiGatewayRequest_VariablesEntry;
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? VariableInput.fromPartial(object.value)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  UpdateApiGatewayRequest_VariablesEntry.$type,
  UpdateApiGatewayRequest_VariablesEntry
);

const baseDeleteApiGatewayRequest: object = {
  $type: "yandex.cloud.serverless.apigateway.v1.DeleteApiGatewayRequest",
  apiGatewayId: "",
};

export const DeleteApiGatewayRequest = {
  $type:
    "yandex.cloud.serverless.apigateway.v1.DeleteApiGatewayRequest" as const,

  encode(
    message: DeleteApiGatewayRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.apiGatewayId !== "") {
      writer.uint32(10).string(message.apiGatewayId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteApiGatewayRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteApiGatewayRequest,
    } as DeleteApiGatewayRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiGatewayId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteApiGatewayRequest {
    const message = {
      ...baseDeleteApiGatewayRequest,
    } as DeleteApiGatewayRequest;
    message.apiGatewayId =
      object.apiGatewayId !== undefined && object.apiGatewayId !== null
        ? String(object.apiGatewayId)
        : "";
    return message;
  },

  toJSON(message: DeleteApiGatewayRequest): unknown {
    const obj: any = {};
    message.apiGatewayId !== undefined &&
      (obj.apiGatewayId = message.apiGatewayId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteApiGatewayRequest>, I>>(
    object: I
  ): DeleteApiGatewayRequest {
    const message = {
      ...baseDeleteApiGatewayRequest,
    } as DeleteApiGatewayRequest;
    message.apiGatewayId = object.apiGatewayId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteApiGatewayRequest.$type, DeleteApiGatewayRequest);

const baseAddDomainRequest: object = {
  $type: "yandex.cloud.serverless.apigateway.v1.AddDomainRequest",
  apiGatewayId: "",
  domainName: "",
  certificateId: "",
};

export const AddDomainRequest = {
  $type: "yandex.cloud.serverless.apigateway.v1.AddDomainRequest" as const,

  encode(
    message: AddDomainRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.apiGatewayId !== "") {
      writer.uint32(10).string(message.apiGatewayId);
    }
    if (message.domainName !== "") {
      writer.uint32(26).string(message.domainName);
    }
    if (message.certificateId !== "") {
      writer.uint32(34).string(message.certificateId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddDomainRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddDomainRequest } as AddDomainRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiGatewayId = reader.string();
          break;
        case 3:
          message.domainName = reader.string();
          break;
        case 4:
          message.certificateId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddDomainRequest {
    const message = { ...baseAddDomainRequest } as AddDomainRequest;
    message.apiGatewayId =
      object.apiGatewayId !== undefined && object.apiGatewayId !== null
        ? String(object.apiGatewayId)
        : "";
    message.domainName =
      object.domainName !== undefined && object.domainName !== null
        ? String(object.domainName)
        : "";
    message.certificateId =
      object.certificateId !== undefined && object.certificateId !== null
        ? String(object.certificateId)
        : "";
    return message;
  },

  toJSON(message: AddDomainRequest): unknown {
    const obj: any = {};
    message.apiGatewayId !== undefined &&
      (obj.apiGatewayId = message.apiGatewayId);
    message.domainName !== undefined && (obj.domainName = message.domainName);
    message.certificateId !== undefined &&
      (obj.certificateId = message.certificateId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddDomainRequest>, I>>(
    object: I
  ): AddDomainRequest {
    const message = { ...baseAddDomainRequest } as AddDomainRequest;
    message.apiGatewayId = object.apiGatewayId ?? "";
    message.domainName = object.domainName ?? "";
    message.certificateId = object.certificateId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddDomainRequest.$type, AddDomainRequest);

const baseRemoveDomainRequest: object = {
  $type: "yandex.cloud.serverless.apigateway.v1.RemoveDomainRequest",
  apiGatewayId: "",
  domainId: "",
};

export const RemoveDomainRequest = {
  $type: "yandex.cloud.serverless.apigateway.v1.RemoveDomainRequest" as const,

  encode(
    message: RemoveDomainRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.apiGatewayId !== "") {
      writer.uint32(10).string(message.apiGatewayId);
    }
    if (message.domainId !== "") {
      writer.uint32(18).string(message.domainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveDomainRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRemoveDomainRequest } as RemoveDomainRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiGatewayId = reader.string();
          break;
        case 2:
          message.domainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveDomainRequest {
    const message = { ...baseRemoveDomainRequest } as RemoveDomainRequest;
    message.apiGatewayId =
      object.apiGatewayId !== undefined && object.apiGatewayId !== null
        ? String(object.apiGatewayId)
        : "";
    message.domainId =
      object.domainId !== undefined && object.domainId !== null
        ? String(object.domainId)
        : "";
    return message;
  },

  toJSON(message: RemoveDomainRequest): unknown {
    const obj: any = {};
    message.apiGatewayId !== undefined &&
      (obj.apiGatewayId = message.apiGatewayId);
    message.domainId !== undefined && (obj.domainId = message.domainId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveDomainRequest>, I>>(
    object: I
  ): RemoveDomainRequest {
    const message = { ...baseRemoveDomainRequest } as RemoveDomainRequest;
    message.apiGatewayId = object.apiGatewayId ?? "";
    message.domainId = object.domainId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RemoveDomainRequest.$type, RemoveDomainRequest);

const baseCreateApiGatewayMetadata: object = {
  $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayMetadata",
  apiGatewayId: "",
};

export const CreateApiGatewayMetadata = {
  $type:
    "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayMetadata" as const,

  encode(
    message: CreateApiGatewayMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.apiGatewayId !== "") {
      writer.uint32(10).string(message.apiGatewayId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateApiGatewayMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateApiGatewayMetadata,
    } as CreateApiGatewayMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiGatewayId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateApiGatewayMetadata {
    const message = {
      ...baseCreateApiGatewayMetadata,
    } as CreateApiGatewayMetadata;
    message.apiGatewayId =
      object.apiGatewayId !== undefined && object.apiGatewayId !== null
        ? String(object.apiGatewayId)
        : "";
    return message;
  },

  toJSON(message: CreateApiGatewayMetadata): unknown {
    const obj: any = {};
    message.apiGatewayId !== undefined &&
      (obj.apiGatewayId = message.apiGatewayId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateApiGatewayMetadata>, I>>(
    object: I
  ): CreateApiGatewayMetadata {
    const message = {
      ...baseCreateApiGatewayMetadata,
    } as CreateApiGatewayMetadata;
    message.apiGatewayId = object.apiGatewayId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateApiGatewayMetadata.$type,
  CreateApiGatewayMetadata
);

const baseUpdateApiGatewayMetadata: object = {
  $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayMetadata",
  apiGatewayId: "",
};

export const UpdateApiGatewayMetadata = {
  $type:
    "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayMetadata" as const,

  encode(
    message: UpdateApiGatewayMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.apiGatewayId !== "") {
      writer.uint32(10).string(message.apiGatewayId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateApiGatewayMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateApiGatewayMetadata,
    } as UpdateApiGatewayMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiGatewayId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateApiGatewayMetadata {
    const message = {
      ...baseUpdateApiGatewayMetadata,
    } as UpdateApiGatewayMetadata;
    message.apiGatewayId =
      object.apiGatewayId !== undefined && object.apiGatewayId !== null
        ? String(object.apiGatewayId)
        : "";
    return message;
  },

  toJSON(message: UpdateApiGatewayMetadata): unknown {
    const obj: any = {};
    message.apiGatewayId !== undefined &&
      (obj.apiGatewayId = message.apiGatewayId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateApiGatewayMetadata>, I>>(
    object: I
  ): UpdateApiGatewayMetadata {
    const message = {
      ...baseUpdateApiGatewayMetadata,
    } as UpdateApiGatewayMetadata;
    message.apiGatewayId = object.apiGatewayId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateApiGatewayMetadata.$type,
  UpdateApiGatewayMetadata
);

const baseDeleteApiGatewayMetadata: object = {
  $type: "yandex.cloud.serverless.apigateway.v1.DeleteApiGatewayMetadata",
  apiGatewayId: "",
};

export const DeleteApiGatewayMetadata = {
  $type:
    "yandex.cloud.serverless.apigateway.v1.DeleteApiGatewayMetadata" as const,

  encode(
    message: DeleteApiGatewayMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.apiGatewayId !== "") {
      writer.uint32(10).string(message.apiGatewayId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteApiGatewayMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteApiGatewayMetadata,
    } as DeleteApiGatewayMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiGatewayId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteApiGatewayMetadata {
    const message = {
      ...baseDeleteApiGatewayMetadata,
    } as DeleteApiGatewayMetadata;
    message.apiGatewayId =
      object.apiGatewayId !== undefined && object.apiGatewayId !== null
        ? String(object.apiGatewayId)
        : "";
    return message;
  },

  toJSON(message: DeleteApiGatewayMetadata): unknown {
    const obj: any = {};
    message.apiGatewayId !== undefined &&
      (obj.apiGatewayId = message.apiGatewayId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteApiGatewayMetadata>, I>>(
    object: I
  ): DeleteApiGatewayMetadata {
    const message = {
      ...baseDeleteApiGatewayMetadata,
    } as DeleteApiGatewayMetadata;
    message.apiGatewayId = object.apiGatewayId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteApiGatewayMetadata.$type,
  DeleteApiGatewayMetadata
);

const baseAddDomainMetadata: object = {
  $type: "yandex.cloud.serverless.apigateway.v1.AddDomainMetadata",
  apiGatewayId: "",
  domainId: "",
  domainName: "",
  certificateId: "",
};

export const AddDomainMetadata = {
  $type: "yandex.cloud.serverless.apigateway.v1.AddDomainMetadata" as const,

  encode(
    message: AddDomainMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.apiGatewayId !== "") {
      writer.uint32(10).string(message.apiGatewayId);
    }
    if (message.domainId !== "") {
      writer.uint32(18).string(message.domainId);
    }
    if (message.domainName !== "") {
      writer.uint32(26).string(message.domainName);
    }
    if (message.certificateId !== "") {
      writer.uint32(34).string(message.certificateId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddDomainMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddDomainMetadata } as AddDomainMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiGatewayId = reader.string();
          break;
        case 2:
          message.domainId = reader.string();
          break;
        case 3:
          message.domainName = reader.string();
          break;
        case 4:
          message.certificateId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddDomainMetadata {
    const message = { ...baseAddDomainMetadata } as AddDomainMetadata;
    message.apiGatewayId =
      object.apiGatewayId !== undefined && object.apiGatewayId !== null
        ? String(object.apiGatewayId)
        : "";
    message.domainId =
      object.domainId !== undefined && object.domainId !== null
        ? String(object.domainId)
        : "";
    message.domainName =
      object.domainName !== undefined && object.domainName !== null
        ? String(object.domainName)
        : "";
    message.certificateId =
      object.certificateId !== undefined && object.certificateId !== null
        ? String(object.certificateId)
        : "";
    return message;
  },

  toJSON(message: AddDomainMetadata): unknown {
    const obj: any = {};
    message.apiGatewayId !== undefined &&
      (obj.apiGatewayId = message.apiGatewayId);
    message.domainId !== undefined && (obj.domainId = message.domainId);
    message.domainName !== undefined && (obj.domainName = message.domainName);
    message.certificateId !== undefined &&
      (obj.certificateId = message.certificateId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddDomainMetadata>, I>>(
    object: I
  ): AddDomainMetadata {
    const message = { ...baseAddDomainMetadata } as AddDomainMetadata;
    message.apiGatewayId = object.apiGatewayId ?? "";
    message.domainId = object.domainId ?? "";
    message.domainName = object.domainName ?? "";
    message.certificateId = object.certificateId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddDomainMetadata.$type, AddDomainMetadata);

const baseRemoveDomainMetadata: object = {
  $type: "yandex.cloud.serverless.apigateway.v1.RemoveDomainMetadata",
  apiGatewayId: "",
  domainId: "",
};

export const RemoveDomainMetadata = {
  $type: "yandex.cloud.serverless.apigateway.v1.RemoveDomainMetadata" as const,

  encode(
    message: RemoveDomainMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.apiGatewayId !== "") {
      writer.uint32(10).string(message.apiGatewayId);
    }
    if (message.domainId !== "") {
      writer.uint32(18).string(message.domainId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveDomainMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRemoveDomainMetadata } as RemoveDomainMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiGatewayId = reader.string();
          break;
        case 2:
          message.domainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveDomainMetadata {
    const message = { ...baseRemoveDomainMetadata } as RemoveDomainMetadata;
    message.apiGatewayId =
      object.apiGatewayId !== undefined && object.apiGatewayId !== null
        ? String(object.apiGatewayId)
        : "";
    message.domainId =
      object.domainId !== undefined && object.domainId !== null
        ? String(object.domainId)
        : "";
    return message;
  },

  toJSON(message: RemoveDomainMetadata): unknown {
    const obj: any = {};
    message.apiGatewayId !== undefined &&
      (obj.apiGatewayId = message.apiGatewayId);
    message.domainId !== undefined && (obj.domainId = message.domainId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveDomainMetadata>, I>>(
    object: I
  ): RemoveDomainMetadata {
    const message = { ...baseRemoveDomainMetadata } as RemoveDomainMetadata;
    message.apiGatewayId = object.apiGatewayId ?? "";
    message.domainId = object.domainId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RemoveDomainMetadata.$type, RemoveDomainMetadata);

const baseListOperationsRequest: object = {
  $type: "yandex.cloud.serverless.apigateway.v1.ListOperationsRequest",
  apiGatewayId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListOperationsRequest = {
  $type: "yandex.cloud.serverless.apigateway.v1.ListOperationsRequest" as const,

  encode(
    message: ListOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.apiGatewayId !== "") {
      writer.uint32(10).string(message.apiGatewayId);
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
  ): ListOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListOperationsRequest } as ListOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiGatewayId = reader.string();
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

  fromJSON(object: any): ListOperationsRequest {
    const message = { ...baseListOperationsRequest } as ListOperationsRequest;
    message.apiGatewayId =
      object.apiGatewayId !== undefined && object.apiGatewayId !== null
        ? String(object.apiGatewayId)
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

  toJSON(message: ListOperationsRequest): unknown {
    const obj: any = {};
    message.apiGatewayId !== undefined &&
      (obj.apiGatewayId = message.apiGatewayId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListOperationsRequest>, I>>(
    object: I
  ): ListOperationsRequest {
    const message = { ...baseListOperationsRequest } as ListOperationsRequest;
    message.apiGatewayId = object.apiGatewayId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListOperationsRequest.$type, ListOperationsRequest);

const baseListOperationsResponse: object = {
  $type: "yandex.cloud.serverless.apigateway.v1.ListOperationsResponse",
  nextPageToken: "",
};

export const ListOperationsResponse = {
  $type:
    "yandex.cloud.serverless.apigateway.v1.ListOperationsResponse" as const,

  encode(
    message: ListOperationsResponse,
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
  ): ListOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListOperationsResponse } as ListOperationsResponse;
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

  fromJSON(object: any): ListOperationsResponse {
    const message = { ...baseListOperationsResponse } as ListOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListOperationsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<ListOperationsResponse>, I>>(
    object: I
  ): ListOperationsResponse {
    const message = { ...baseListOperationsResponse } as ListOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListOperationsResponse.$type, ListOperationsResponse);

const baseGetOpenapiSpecRequest: object = {
  $type: "yandex.cloud.serverless.apigateway.v1.GetOpenapiSpecRequest",
  apiGatewayId: "",
  format: 0,
};

export const GetOpenapiSpecRequest = {
  $type: "yandex.cloud.serverless.apigateway.v1.GetOpenapiSpecRequest" as const,

  encode(
    message: GetOpenapiSpecRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.apiGatewayId !== "") {
      writer.uint32(10).string(message.apiGatewayId);
    }
    if (message.format !== 0) {
      writer.uint32(16).int32(message.format);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetOpenapiSpecRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetOpenapiSpecRequest } as GetOpenapiSpecRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiGatewayId = reader.string();
          break;
        case 2:
          message.format = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetOpenapiSpecRequest {
    const message = { ...baseGetOpenapiSpecRequest } as GetOpenapiSpecRequest;
    message.apiGatewayId =
      object.apiGatewayId !== undefined && object.apiGatewayId !== null
        ? String(object.apiGatewayId)
        : "";
    message.format =
      object.format !== undefined && object.format !== null
        ? getOpenapiSpecRequest_FormatFromJSON(object.format)
        : 0;
    return message;
  },

  toJSON(message: GetOpenapiSpecRequest): unknown {
    const obj: any = {};
    message.apiGatewayId !== undefined &&
      (obj.apiGatewayId = message.apiGatewayId);
    message.format !== undefined &&
      (obj.format = getOpenapiSpecRequest_FormatToJSON(message.format));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetOpenapiSpecRequest>, I>>(
    object: I
  ): GetOpenapiSpecRequest {
    const message = { ...baseGetOpenapiSpecRequest } as GetOpenapiSpecRequest;
    message.apiGatewayId = object.apiGatewayId ?? "";
    message.format = object.format ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GetOpenapiSpecRequest.$type, GetOpenapiSpecRequest);

const baseGetOpenapiSpecResponse: object = {
  $type: "yandex.cloud.serverless.apigateway.v1.GetOpenapiSpecResponse",
  apiGatewayId: "",
  openapiSpec: "",
};

export const GetOpenapiSpecResponse = {
  $type:
    "yandex.cloud.serverless.apigateway.v1.GetOpenapiSpecResponse" as const,

  encode(
    message: GetOpenapiSpecResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.apiGatewayId !== "") {
      writer.uint32(10).string(message.apiGatewayId);
    }
    if (message.openapiSpec !== "") {
      writer.uint32(18).string(message.openapiSpec);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetOpenapiSpecResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetOpenapiSpecResponse } as GetOpenapiSpecResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiGatewayId = reader.string();
          break;
        case 2:
          message.openapiSpec = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetOpenapiSpecResponse {
    const message = { ...baseGetOpenapiSpecResponse } as GetOpenapiSpecResponse;
    message.apiGatewayId =
      object.apiGatewayId !== undefined && object.apiGatewayId !== null
        ? String(object.apiGatewayId)
        : "";
    message.openapiSpec =
      object.openapiSpec !== undefined && object.openapiSpec !== null
        ? String(object.openapiSpec)
        : "";
    return message;
  },

  toJSON(message: GetOpenapiSpecResponse): unknown {
    const obj: any = {};
    message.apiGatewayId !== undefined &&
      (obj.apiGatewayId = message.apiGatewayId);
    message.openapiSpec !== undefined &&
      (obj.openapiSpec = message.openapiSpec);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetOpenapiSpecResponse>, I>>(
    object: I
  ): GetOpenapiSpecResponse {
    const message = { ...baseGetOpenapiSpecResponse } as GetOpenapiSpecResponse;
    message.apiGatewayId = object.apiGatewayId ?? "";
    message.openapiSpec = object.openapiSpec ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetOpenapiSpecResponse.$type, GetOpenapiSpecResponse);

/** A set of methods for managing API gateways. */
export const ApiGatewayServiceService = {
  /**
   * Returns the specified API gateway. Note that only API gateway basic attributes are returned.
   * To get associated openapi specification, make a [GetOpenapiSpec](#GetOpenapiSpec) request.
   *
   * To get the list of all available API gateways, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetApiGatewayRequest) =>
      Buffer.from(GetApiGatewayRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetApiGatewayRequest.decode(value),
    responseSerialize: (value: ApiGateway) =>
      Buffer.from(ApiGateway.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ApiGateway.decode(value),
  },
  /** Retrieves the list of API gateways in the specified folder. */
  list: {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListApiGatewayRequest) =>
      Buffer.from(ListApiGatewayRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListApiGatewayRequest.decode(value),
    responseSerialize: (value: ListApiGatewayResponse) =>
      Buffer.from(ListApiGatewayResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListApiGatewayResponse.decode(value),
  },
  /** Creates an API gateway in the specified folder. */
  create: {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateApiGatewayRequest) =>
      Buffer.from(CreateApiGatewayRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateApiGatewayRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified API gateway. */
  update: {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateApiGatewayRequest) =>
      Buffer.from(UpdateApiGatewayRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateApiGatewayRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified API gateway. */
  delete: {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteApiGatewayRequest) =>
      Buffer.from(DeleteApiGatewayRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteApiGatewayRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Attaches domain to the specified API gateway. */
  addDomain: {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/AddDomain",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddDomainRequest) =>
      Buffer.from(AddDomainRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddDomainRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Detaches domain from the specified API gateway. */
  removeDomain: {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/RemoveDomain",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveDomainRequest) =>
      Buffer.from(RemoveDomainRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveDomainRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns the OpenAPI specification of specified API gateway. */
  getOpenapiSpec: {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/GetOpenapiSpec",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetOpenapiSpecRequest) =>
      Buffer.from(GetOpenapiSpecRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetOpenapiSpecRequest.decode(value),
    responseSerialize: (value: GetOpenapiSpecResponse) =>
      Buffer.from(GetOpenapiSpecResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetOpenapiSpecResponse.decode(value),
  },
  /** Lists operations for the specified API gateway. */
  listOperations: {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListOperationsRequest) =>
      Buffer.from(ListOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListOperationsRequest.decode(value),
    responseSerialize: (value: ListOperationsResponse) =>
      Buffer.from(ListOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListOperationsResponse.decode(value),
  },
  /** Lists existing access bindings for the specified API gateway. */
  listAccessBindings: {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/ListAccessBindings",
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
  /** Sets access bindings for the specified API gateway. */
  setAccessBindings: {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/SetAccessBindings",
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
  /** Updates access bindings for the specified API gateway. */
  updateAccessBindings: {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/UpdateAccessBindings",
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
} as const;

export interface ApiGatewayServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified API gateway. Note that only API gateway basic attributes are returned.
   * To get associated openapi specification, make a [GetOpenapiSpec](#GetOpenapiSpec) request.
   *
   * To get the list of all available API gateways, make a [List] request.
   */
  get: handleUnaryCall<GetApiGatewayRequest, ApiGateway>;
  /** Retrieves the list of API gateways in the specified folder. */
  list: handleUnaryCall<ListApiGatewayRequest, ListApiGatewayResponse>;
  /** Creates an API gateway in the specified folder. */
  create: handleUnaryCall<CreateApiGatewayRequest, Operation>;
  /** Updates the specified API gateway. */
  update: handleUnaryCall<UpdateApiGatewayRequest, Operation>;
  /** Deletes the specified API gateway. */
  delete: handleUnaryCall<DeleteApiGatewayRequest, Operation>;
  /** Attaches domain to the specified API gateway. */
  addDomain: handleUnaryCall<AddDomainRequest, Operation>;
  /** Detaches domain from the specified API gateway. */
  removeDomain: handleUnaryCall<RemoveDomainRequest, Operation>;
  /** Returns the OpenAPI specification of specified API gateway. */
  getOpenapiSpec: handleUnaryCall<
    GetOpenapiSpecRequest,
    GetOpenapiSpecResponse
  >;
  /** Lists operations for the specified API gateway. */
  listOperations: handleUnaryCall<
    ListOperationsRequest,
    ListOperationsResponse
  >;
  /** Lists existing access bindings for the specified API gateway. */
  listAccessBindings: handleUnaryCall<
    ListAccessBindingsRequest,
    ListAccessBindingsResponse
  >;
  /** Sets access bindings for the specified API gateway. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the specified API gateway. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface ApiGatewayServiceClient extends Client {
  /**
   * Returns the specified API gateway. Note that only API gateway basic attributes are returned.
   * To get associated openapi specification, make a [GetOpenapiSpec](#GetOpenapiSpec) request.
   *
   * To get the list of all available API gateways, make a [List] request.
   */
  get(
    request: GetApiGatewayRequest,
    callback: (error: ServiceError | null, response: ApiGateway) => void
  ): ClientUnaryCall;
  get(
    request: GetApiGatewayRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ApiGateway) => void
  ): ClientUnaryCall;
  get(
    request: GetApiGatewayRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ApiGateway) => void
  ): ClientUnaryCall;
  /** Retrieves the list of API gateways in the specified folder. */
  list(
    request: ListApiGatewayRequest,
    callback: (
      error: ServiceError | null,
      response: ListApiGatewayResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListApiGatewayRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListApiGatewayResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListApiGatewayRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListApiGatewayResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates an API gateway in the specified folder. */
  create(
    request: CreateApiGatewayRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateApiGatewayRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateApiGatewayRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified API gateway. */
  update(
    request: UpdateApiGatewayRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateApiGatewayRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateApiGatewayRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified API gateway. */
  delete(
    request: DeleteApiGatewayRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteApiGatewayRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteApiGatewayRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Attaches domain to the specified API gateway. */
  addDomain(
    request: AddDomainRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addDomain(
    request: AddDomainRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addDomain(
    request: AddDomainRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Detaches domain from the specified API gateway. */
  removeDomain(
    request: RemoveDomainRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  removeDomain(
    request: RemoveDomainRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  removeDomain(
    request: RemoveDomainRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Returns the OpenAPI specification of specified API gateway. */
  getOpenapiSpec(
    request: GetOpenapiSpecRequest,
    callback: (
      error: ServiceError | null,
      response: GetOpenapiSpecResponse
    ) => void
  ): ClientUnaryCall;
  getOpenapiSpec(
    request: GetOpenapiSpecRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetOpenapiSpecResponse
    ) => void
  ): ClientUnaryCall;
  getOpenapiSpec(
    request: GetOpenapiSpecRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetOpenapiSpecResponse
    ) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified API gateway. */
  listOperations(
    request: ListOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListOperationsResponse
    ) => void
  ): ClientUnaryCall;
  /** Lists existing access bindings for the specified API gateway. */
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
  /** Sets access bindings for the specified API gateway. */
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
  /** Updates access bindings for the specified API gateway. */
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
}

export const ApiGatewayServiceClient = makeGenericClientConstructor(
  ApiGatewayServiceService,
  "yandex.cloud.serverless.apigateway.v1.ApiGatewayService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): ApiGatewayServiceClient;
  service: typeof ApiGatewayServiceService;
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
