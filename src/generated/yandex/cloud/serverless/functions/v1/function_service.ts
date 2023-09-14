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
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import {
  Resources,
  Connectivity,
  LogOptions,
  AsyncInvocationConfig,
  Function,
  Version,
  Package,
  Secret,
  StorageMount,
  ScalingPolicy,
} from "../../../../../yandex/cloud/serverless/functions/v1/function";
import { Duration } from "../../../../../google/protobuf/duration";
import { Timestamp } from "../../../../../google/protobuf/timestamp";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
import {
  ListAccessBindingsRequest,
  ListAccessBindingsResponse,
  SetAccessBindingsRequest,
  UpdateAccessBindingsRequest,
} from "../../../../../yandex/cloud/access/access";

export const protobufPackage = "yandex.cloud.serverless.functions.v1";

export interface GetFunctionRequest {
  $type: "yandex.cloud.serverless.functions.v1.GetFunctionRequest";
  /**
   * ID of the function to return.
   *
   * To get a function ID make a [FunctionService.List] request.
   */
  functionId: string;
}

export interface GetFunctionVersionRequest {
  $type: "yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest";
  /**
   * ID of the version to return.
   *
   * To get a version ID make a [FunctionService.ListVersions] request.
   */
  functionVersionId: string;
}

export interface GetFunctionVersionByTagRequest {
  $type: "yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest";
  /**
   * ID of the function whose versions should be listed.
   *
   * To get a function ID use a [FunctionService.List] request.
   */
  functionId: string;
  /**
   * Version tag.
   *
   * To get the history of version tags make a [FunctionService.ListTagHistory] request.
   */
  tag: string;
}

export interface ListFunctionsRequest {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionsRequest";
  /**
   * ID of the folder to list functions in.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `pageSize`, the service returns a [ListFunctionsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListFunctionsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters functions listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently filtering can only be applied to the [Function.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name="my-function"`.
   */
  filter: string;
}

export interface ListFunctionsResponse {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionsResponse";
  /** List of functions in the specified folder. */
  functions: Function[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListFunctionsRequest.page_size], use `nextPageToken` as the value
   * for the [ListFunctionsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateFunctionRequest {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionRequest";
  /**
   * ID of the folder to create a function in.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the function.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the function. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
}

export interface CreateFunctionRequest_LabelsEntry {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateFunctionMetadata {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionMetadata";
  /** ID of the function that is being created. */
  functionId: string;
}

export interface UpdateFunctionRequest {
  $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionRequest";
  /**
   * ID of the function to update.
   *
   * To get a function ID make a [FunctionService.List] request.
   */
  functionId: string;
  /** Field mask that specifies which attributes of the function should be updated. */
  updateMask?: FieldMask;
  /**
   * New name for the function.
   * The name must be unique within the folder.
   */
  name: string;
  /** New description for the function. */
  description: string;
  /**
   * Function labels as `key:value` pairs.
   *
   * Existing set of labels is completely replaced by the provided set, so if you just want
   * to add or remove a label, request the current set of labels with a [FunctionService.Get] request.
   */
  labels: { [key: string]: string };
}

export interface UpdateFunctionRequest_LabelsEntry {
  $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateFunctionMetadata {
  $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata";
  /** ID of the function that is being updated. */
  functionId: string;
}

export interface DeleteFunctionRequest {
  $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionRequest";
  /**
   * ID of the function to delete.
   * To get a function ID make a [FunctionService.List] request.
   */
  functionId: string;
}

export interface DeleteFunctionMetadata {
  $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata";
  /** ID of the function that is being deleted. */
  functionId: string;
}

export interface DeleteFunctionVersionRequest {
  $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionVersionRequest";
  /** ID of the function's version to delete. */
  functionVersionId: string;
  /**
   * Forces deletion of the version tags.
   *
   * If the value equals false and the function has tags with the selected version then request returns an error.
   */
  force: boolean;
}

export interface DeleteFunctionVersionMetadata {
  $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionVersionMetadata";
  /** ID of the function's version is being deleted. */
  functionVersionId: string;
}

export interface ListRuntimesRequest {
  $type: "yandex.cloud.serverless.functions.v1.ListRuntimesRequest";
}

export interface ListRuntimesResponse {
  $type: "yandex.cloud.serverless.functions.v1.ListRuntimesResponse";
  /** Runtime environments available for the specified function. */
  runtimes: string[];
}

export interface ListFunctionsVersionsRequest {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest";
  /**
   * ID of the folder to list function versions for.
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string | undefined;
  /**
   * ID of the function to list versions for.
   * To get a function ID use a [FunctionService.List] request.
   */
  functionId: string | undefined;
  /**
   * The maximum number of results per page to return. If the number of available results
   * is larger than `pageSize`, the service returns a [ListFunctionsVersionsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListFunctionsVersionsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently filtering can only be applied to the [Version.status] and [Version.runtime] fields.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `status="ACTIVE"`.
   */
  filter: string;
}

export interface ListFunctionsVersionsResponse {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse";
  /** List of versions for the specified folder or function. */
  versions: Version[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListFunctionsVersionsRequest.page_size], use `nextPageToken` as the value
   * for the [ListFunctionsVersionsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListFunctionOperationsRequest {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest";
  /** ID of the function to list operations for. */
  functionId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `pageSize`, the service returns a [ListFunctionOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListFunctionOperationsResponse.next_page_token] returned by a previous list request.
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

export interface ListFunctionOperationsResponse {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse";
  /** List of operations for the specified function. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListFunctionOperationsRequest.page_size], use `nextPageToken` as the value
   * for the [ListFunctionOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateFunctionVersionRequest {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest";
  /**
   * ID of the function to create a version for.
   *
   * To get a function ID, make a [FunctionService.List] request.
   */
  functionId: string;
  /** Runtime environment for the version. */
  runtime: string;
  /** Description of the version */
  description: string;
  /** Entrypoint of the version. */
  entrypoint: string;
  /** Resources allocated to the version. */
  resources?: Resources;
  /**
   * Timeout for the execution of the version.
   *
   * If the timeout is exceeded, Cloud Functions responds with a 504 HTTP code.
   */
  executionTimeout?: Duration;
  /** ID of the service account to associate with the version. */
  serviceAccountId: string;
  /** Functions deployment package. */
  package?: Package | undefined;
  /** Content of the deployment package. */
  content: Buffer | undefined;
  /**
   * ID of the version to be copied from. Source version must belong to the same folder as the created version
   * and the user must have read permissions to the source version.
   */
  versionId: string | undefined;
  /** Environment settings for the version. */
  environment: { [key: string]: string };
  /** Function version tags. For details, see [Version tag](/docs/functions/concepts/function#tag). */
  tag: string[];
  /** Function version connectivity. If specified the version will be attached to specified network/subnet(s). */
  connectivity?: Connectivity;
  /** Additional service accounts to be used by the version. */
  namedServiceAccounts: { [key: string]: string };
  /** Yandex Lockbox secrets to be used by the version. */
  secrets: Secret[];
  /** Options for logging from the function */
  logOptions?: LogOptions;
  /** S3 mounts to be used by the version. */
  storageMounts: StorageMount[];
  /** Config for asynchronous invocations of the version */
  asyncInvocationConfig?: AsyncInvocationConfig;
}

export interface CreateFunctionVersionRequest_EnvironmentEntry {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.EnvironmentEntry";
  key: string;
  value: string;
}

export interface CreateFunctionVersionRequest_NamedServiceAccountsEntry {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.NamedServiceAccountsEntry";
  key: string;
  value: string;
}

export interface CreateFunctionVersionMetadata {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata";
  /** ID of the version that is being created. */
  functionVersionId: string;
}

export interface SetFunctionTagRequest {
  $type: "yandex.cloud.serverless.functions.v1.SetFunctionTagRequest";
  /**
   * ID of the version to set the tag for.
   *
   * To get a version ID make a [FunctionService.ListVersions] request.
   */
  functionVersionId: string;
  /** Tag to set for the version. */
  tag: string;
}

export interface RemoveFunctionTagRequest {
  $type: "yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest";
  /**
   * ID of the version to remove a tag from.
   *
   * To get the a version ID make a [FunctionService.ListVersions] request.
   */
  functionVersionId: string;
  /** Tag to remove from the specified version. */
  tag: string;
}

export interface SetFunctionTagMetadata {
  $type: "yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata";
  /** ID of the function versions that is being tagged. */
  functionVersionId: string;
}

export interface RemoveFunctionTagMetadata {
  $type: "yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata";
  /** ID of the function versions that is being untagged. */
  functionVersionId: string;
}

export interface ListFunctionTagHistoryRequest {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest";
  /**
   * ID of the function to retrieve tag history for.
   *
   * To get a function ID, make a [FunctionService.List] request.
   */
  functionId: string;
  /** Specific tag that history should be limited to. */
  tag: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `pageSize`, the service returns a [ListFunctionOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListFunctionOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently filtering can only be applied to the [FunctionTagHistoryRecord.effective_from] and [FunctionTagHistoryRecord.effective_to] fields.
   * 2. An `=` or `>` or `<` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * For example, `effective_to>2021-01-01T12:00:00Z`.
   */
  filter: string;
}

export interface ListFunctionTagHistoryResponse {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse";
  /** Set of relevant tag history records. */
  functionTagHistoryRecord: ListFunctionTagHistoryResponse_FunctionTagHistoryRecord[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListFunctionTagHistoryRequest.page_size], use `nextPageToken` as the value
   * for the [ListFunctionTagHistoryRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

/** A record in the tag history. */
export interface ListFunctionTagHistoryResponse_FunctionTagHistoryRecord {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord";
  /** ID of the function that the record is about. */
  functionId: string;
  /** ID of the function version that the record is about. */
  functionVersionId: string;
  /** Tag that was set for the version at some point. */
  tag: string;
  /** Timestamp when the tag started being active for the function. */
  effectiveFrom?: Date;
  /** Timestamp when the tag stopped being active for the function. */
  effectiveTo?: Date;
}

export interface ListScalingPoliciesRequest {
  $type: "yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest";
  /**
   * ID of the function to retrieve scaling policies for.
   *
   * To get a function ID, make a [FunctionService.List] request.
   */
  functionId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `pageSize`, the service returns a [ListScalingPoliciesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListScalingPoliciesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListScalingPoliciesResponse {
  $type: "yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse";
  /** Set of relevant scaling policies. */
  scalingPolicies: ScalingPolicy[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListScalingPoliciesRequest.page_size], use `nextPageToken` as the value
   * for the [ListScalingPoliciesRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface SetScalingPolicyRequest {
  $type: "yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest";
  /**
   * ID of the function to retrieve scaling policies for.
   *
   * To get a function ID, make a [FunctionService.List] request.
   */
  functionId: string;
  /**
   * Version tag.
   *
   * To get the history of version tags make a [FunctionService.ListTagHistory] request.
   */
  tag: string;
  /**
   * Minimum guaranteed provisioned instances count for all zones in total.
   * Billed separately.
   */
  provisionedInstancesCount: number;
  /**
   * Upper limit for instance count in each zone.
   * 0 means no limit.
   */
  zoneInstancesLimit: number;
  /**
   * Upper limit of requests count in each zone.
   * 0 means no limit.
   */
  zoneRequestsLimit: number;
}

export interface SetScalingPolicyMetadata {
  $type: "yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata";
  /** ID of the function for which scaling policy was set. */
  functionId: string;
}

export interface RemoveScalingPolicyRequest {
  $type: "yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest";
  /**
   * ID of the function to remove scaling policies for.
   *
   * To get a function ID, make a [FunctionService.List] request.
   */
  functionId: string;
  /**
   * Version tag.
   *
   * To get the history of version tags make a [FunctionService.ListTagHistory] request.
   */
  tag: string;
}

export interface RemoveScalingPolicyMetadata {
  $type: "yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata";
  /** ID of the function for which scaling policy was removed. */
  functionId: string;
}

const baseGetFunctionRequest: object = {
  $type: "yandex.cloud.serverless.functions.v1.GetFunctionRequest",
  functionId: "",
};

export const GetFunctionRequest = {
  $type: "yandex.cloud.serverless.functions.v1.GetFunctionRequest" as const,

  encode(
    message: GetFunctionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFunctionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetFunctionRequest } as GetFunctionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetFunctionRequest {
    const message = { ...baseGetFunctionRequest } as GetFunctionRequest;
    message.functionId =
      object.functionId !== undefined && object.functionId !== null
        ? String(object.functionId)
        : "";
    return message;
  },

  toJSON(message: GetFunctionRequest): unknown {
    const obj: any = {};
    message.functionId !== undefined && (obj.functionId = message.functionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetFunctionRequest>, I>>(
    object: I
  ): GetFunctionRequest {
    const message = { ...baseGetFunctionRequest } as GetFunctionRequest;
    message.functionId = object.functionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetFunctionRequest.$type, GetFunctionRequest);

const baseGetFunctionVersionRequest: object = {
  $type: "yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest",
  functionVersionId: "",
};

export const GetFunctionVersionRequest = {
  $type:
    "yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest" as const,

  encode(
    message: GetFunctionVersionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionVersionId !== "") {
      writer.uint32(10).string(message.functionVersionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetFunctionVersionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetFunctionVersionRequest,
    } as GetFunctionVersionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionVersionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetFunctionVersionRequest {
    const message = {
      ...baseGetFunctionVersionRequest,
    } as GetFunctionVersionRequest;
    message.functionVersionId =
      object.functionVersionId !== undefined &&
      object.functionVersionId !== null
        ? String(object.functionVersionId)
        : "";
    return message;
  },

  toJSON(message: GetFunctionVersionRequest): unknown {
    const obj: any = {};
    message.functionVersionId !== undefined &&
      (obj.functionVersionId = message.functionVersionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetFunctionVersionRequest>, I>>(
    object: I
  ): GetFunctionVersionRequest {
    const message = {
      ...baseGetFunctionVersionRequest,
    } as GetFunctionVersionRequest;
    message.functionVersionId = object.functionVersionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  GetFunctionVersionRequest.$type,
  GetFunctionVersionRequest
);

const baseGetFunctionVersionByTagRequest: object = {
  $type: "yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest",
  functionId: "",
  tag: "",
};

export const GetFunctionVersionByTagRequest = {
  $type:
    "yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest" as const,

  encode(
    message: GetFunctionVersionByTagRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    if (message.tag !== "") {
      writer.uint32(18).string(message.tag);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetFunctionVersionByTagRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetFunctionVersionByTagRequest,
    } as GetFunctionVersionByTagRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionId = reader.string();
          break;
        case 2:
          message.tag = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetFunctionVersionByTagRequest {
    const message = {
      ...baseGetFunctionVersionByTagRequest,
    } as GetFunctionVersionByTagRequest;
    message.functionId =
      object.functionId !== undefined && object.functionId !== null
        ? String(object.functionId)
        : "";
    message.tag =
      object.tag !== undefined && object.tag !== null ? String(object.tag) : "";
    return message;
  },

  toJSON(message: GetFunctionVersionByTagRequest): unknown {
    const obj: any = {};
    message.functionId !== undefined && (obj.functionId = message.functionId);
    message.tag !== undefined && (obj.tag = message.tag);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetFunctionVersionByTagRequest>, I>>(
    object: I
  ): GetFunctionVersionByTagRequest {
    const message = {
      ...baseGetFunctionVersionByTagRequest,
    } as GetFunctionVersionByTagRequest;
    message.functionId = object.functionId ?? "";
    message.tag = object.tag ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  GetFunctionVersionByTagRequest.$type,
  GetFunctionVersionByTagRequest
);

const baseListFunctionsRequest: object = {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionsRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListFunctionsRequest = {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionsRequest" as const,

  encode(
    message: ListFunctionsRequest,
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
  ): ListFunctionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListFunctionsRequest } as ListFunctionsRequest;
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

  fromJSON(object: any): ListFunctionsRequest {
    const message = { ...baseListFunctionsRequest } as ListFunctionsRequest;
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

  toJSON(message: ListFunctionsRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListFunctionsRequest>, I>>(
    object: I
  ): ListFunctionsRequest {
    const message = { ...baseListFunctionsRequest } as ListFunctionsRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListFunctionsRequest.$type, ListFunctionsRequest);

const baseListFunctionsResponse: object = {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionsResponse",
  nextPageToken: "",
};

export const ListFunctionsResponse = {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionsResponse" as const,

  encode(
    message: ListFunctionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.functions) {
      Function.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListFunctionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListFunctionsResponse } as ListFunctionsResponse;
    message.functions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functions.push(Function.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListFunctionsResponse {
    const message = { ...baseListFunctionsResponse } as ListFunctionsResponse;
    message.functions = (object.functions ?? []).map((e: any) =>
      Function.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListFunctionsResponse): unknown {
    const obj: any = {};
    if (message.functions) {
      obj.functions = message.functions.map((e) =>
        e ? Function.toJSON(e) : undefined
      );
    } else {
      obj.functions = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListFunctionsResponse>, I>>(
    object: I
  ): ListFunctionsResponse {
    const message = { ...baseListFunctionsResponse } as ListFunctionsResponse;
    message.functions =
      object.functions?.map((e) => Function.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListFunctionsResponse.$type, ListFunctionsResponse);

const baseCreateFunctionRequest: object = {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionRequest",
  folderId: "",
  name: "",
  description: "",
};

export const CreateFunctionRequest = {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionRequest" as const,

  encode(
    message: CreateFunctionRequest,
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
      CreateFunctionRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.serverless.functions.v1.CreateFunctionRequest.LabelsEntry",
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
  ): CreateFunctionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateFunctionRequest } as CreateFunctionRequest;
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
          const entry4 = CreateFunctionRequest_LabelsEntry.decode(
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

  fromJSON(object: any): CreateFunctionRequest {
    const message = { ...baseCreateFunctionRequest } as CreateFunctionRequest;
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

  toJSON(message: CreateFunctionRequest): unknown {
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

  fromPartial<I extends Exact<DeepPartial<CreateFunctionRequest>, I>>(
    object: I
  ): CreateFunctionRequest {
    const message = { ...baseCreateFunctionRequest } as CreateFunctionRequest;
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

messageTypeRegistry.set(CreateFunctionRequest.$type, CreateFunctionRequest);

const baseCreateFunctionRequest_LabelsEntry: object = {
  $type:
    "yandex.cloud.serverless.functions.v1.CreateFunctionRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateFunctionRequest_LabelsEntry = {
  $type:
    "yandex.cloud.serverless.functions.v1.CreateFunctionRequest.LabelsEntry" as const,

  encode(
    message: CreateFunctionRequest_LabelsEntry,
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
  ): CreateFunctionRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateFunctionRequest_LabelsEntry,
    } as CreateFunctionRequest_LabelsEntry;
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

  fromJSON(object: any): CreateFunctionRequest_LabelsEntry {
    const message = {
      ...baseCreateFunctionRequest_LabelsEntry,
    } as CreateFunctionRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateFunctionRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateFunctionRequest_LabelsEntry>, I>
  >(object: I): CreateFunctionRequest_LabelsEntry {
    const message = {
      ...baseCreateFunctionRequest_LabelsEntry,
    } as CreateFunctionRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateFunctionRequest_LabelsEntry.$type,
  CreateFunctionRequest_LabelsEntry
);

const baseCreateFunctionMetadata: object = {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionMetadata",
  functionId: "",
};

export const CreateFunctionMetadata = {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionMetadata" as const,

  encode(
    message: CreateFunctionMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateFunctionMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateFunctionMetadata } as CreateFunctionMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateFunctionMetadata {
    const message = { ...baseCreateFunctionMetadata } as CreateFunctionMetadata;
    message.functionId =
      object.functionId !== undefined && object.functionId !== null
        ? String(object.functionId)
        : "";
    return message;
  },

  toJSON(message: CreateFunctionMetadata): unknown {
    const obj: any = {};
    message.functionId !== undefined && (obj.functionId = message.functionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateFunctionMetadata>, I>>(
    object: I
  ): CreateFunctionMetadata {
    const message = { ...baseCreateFunctionMetadata } as CreateFunctionMetadata;
    message.functionId = object.functionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateFunctionMetadata.$type, CreateFunctionMetadata);

const baseUpdateFunctionRequest: object = {
  $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionRequest",
  functionId: "",
  name: "",
  description: "",
};

export const UpdateFunctionRequest = {
  $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionRequest" as const,

  encode(
    message: UpdateFunctionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
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
      UpdateFunctionRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.LabelsEntry",
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
  ): UpdateFunctionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateFunctionRequest } as UpdateFunctionRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionId = reader.string();
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
          const entry5 = UpdateFunctionRequest_LabelsEntry.decode(
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

  fromJSON(object: any): UpdateFunctionRequest {
    const message = { ...baseUpdateFunctionRequest } as UpdateFunctionRequest;
    message.functionId =
      object.functionId !== undefined && object.functionId !== null
        ? String(object.functionId)
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

  toJSON(message: UpdateFunctionRequest): unknown {
    const obj: any = {};
    message.functionId !== undefined && (obj.functionId = message.functionId);
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

  fromPartial<I extends Exact<DeepPartial<UpdateFunctionRequest>, I>>(
    object: I
  ): UpdateFunctionRequest {
    const message = { ...baseUpdateFunctionRequest } as UpdateFunctionRequest;
    message.functionId = object.functionId ?? "";
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

messageTypeRegistry.set(UpdateFunctionRequest.$type, UpdateFunctionRequest);

const baseUpdateFunctionRequest_LabelsEntry: object = {
  $type:
    "yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateFunctionRequest_LabelsEntry = {
  $type:
    "yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.LabelsEntry" as const,

  encode(
    message: UpdateFunctionRequest_LabelsEntry,
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
  ): UpdateFunctionRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateFunctionRequest_LabelsEntry,
    } as UpdateFunctionRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateFunctionRequest_LabelsEntry {
    const message = {
      ...baseUpdateFunctionRequest_LabelsEntry,
    } as UpdateFunctionRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateFunctionRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateFunctionRequest_LabelsEntry>, I>
  >(object: I): UpdateFunctionRequest_LabelsEntry {
    const message = {
      ...baseUpdateFunctionRequest_LabelsEntry,
    } as UpdateFunctionRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateFunctionRequest_LabelsEntry.$type,
  UpdateFunctionRequest_LabelsEntry
);

const baseUpdateFunctionMetadata: object = {
  $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata",
  functionId: "",
};

export const UpdateFunctionMetadata = {
  $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata" as const,

  encode(
    message: UpdateFunctionMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateFunctionMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateFunctionMetadata } as UpdateFunctionMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateFunctionMetadata {
    const message = { ...baseUpdateFunctionMetadata } as UpdateFunctionMetadata;
    message.functionId =
      object.functionId !== undefined && object.functionId !== null
        ? String(object.functionId)
        : "";
    return message;
  },

  toJSON(message: UpdateFunctionMetadata): unknown {
    const obj: any = {};
    message.functionId !== undefined && (obj.functionId = message.functionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateFunctionMetadata>, I>>(
    object: I
  ): UpdateFunctionMetadata {
    const message = { ...baseUpdateFunctionMetadata } as UpdateFunctionMetadata;
    message.functionId = object.functionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateFunctionMetadata.$type, UpdateFunctionMetadata);

const baseDeleteFunctionRequest: object = {
  $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionRequest",
  functionId: "",
};

export const DeleteFunctionRequest = {
  $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionRequest" as const,

  encode(
    message: DeleteFunctionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteFunctionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteFunctionRequest } as DeleteFunctionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteFunctionRequest {
    const message = { ...baseDeleteFunctionRequest } as DeleteFunctionRequest;
    message.functionId =
      object.functionId !== undefined && object.functionId !== null
        ? String(object.functionId)
        : "";
    return message;
  },

  toJSON(message: DeleteFunctionRequest): unknown {
    const obj: any = {};
    message.functionId !== undefined && (obj.functionId = message.functionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteFunctionRequest>, I>>(
    object: I
  ): DeleteFunctionRequest {
    const message = { ...baseDeleteFunctionRequest } as DeleteFunctionRequest;
    message.functionId = object.functionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteFunctionRequest.$type, DeleteFunctionRequest);

const baseDeleteFunctionMetadata: object = {
  $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata",
  functionId: "",
};

export const DeleteFunctionMetadata = {
  $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata" as const,

  encode(
    message: DeleteFunctionMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteFunctionMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteFunctionMetadata } as DeleteFunctionMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteFunctionMetadata {
    const message = { ...baseDeleteFunctionMetadata } as DeleteFunctionMetadata;
    message.functionId =
      object.functionId !== undefined && object.functionId !== null
        ? String(object.functionId)
        : "";
    return message;
  },

  toJSON(message: DeleteFunctionMetadata): unknown {
    const obj: any = {};
    message.functionId !== undefined && (obj.functionId = message.functionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteFunctionMetadata>, I>>(
    object: I
  ): DeleteFunctionMetadata {
    const message = { ...baseDeleteFunctionMetadata } as DeleteFunctionMetadata;
    message.functionId = object.functionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteFunctionMetadata.$type, DeleteFunctionMetadata);

const baseDeleteFunctionVersionRequest: object = {
  $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionVersionRequest",
  functionVersionId: "",
  force: false,
};

export const DeleteFunctionVersionRequest = {
  $type:
    "yandex.cloud.serverless.functions.v1.DeleteFunctionVersionRequest" as const,

  encode(
    message: DeleteFunctionVersionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionVersionId !== "") {
      writer.uint32(18).string(message.functionVersionId);
    }
    if (message.force === true) {
      writer.uint32(24).bool(message.force);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteFunctionVersionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteFunctionVersionRequest,
    } as DeleteFunctionVersionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.functionVersionId = reader.string();
          break;
        case 3:
          message.force = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteFunctionVersionRequest {
    const message = {
      ...baseDeleteFunctionVersionRequest,
    } as DeleteFunctionVersionRequest;
    message.functionVersionId =
      object.functionVersionId !== undefined &&
      object.functionVersionId !== null
        ? String(object.functionVersionId)
        : "";
    message.force =
      object.force !== undefined && object.force !== null
        ? Boolean(object.force)
        : false;
    return message;
  },

  toJSON(message: DeleteFunctionVersionRequest): unknown {
    const obj: any = {};
    message.functionVersionId !== undefined &&
      (obj.functionVersionId = message.functionVersionId);
    message.force !== undefined && (obj.force = message.force);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteFunctionVersionRequest>, I>>(
    object: I
  ): DeleteFunctionVersionRequest {
    const message = {
      ...baseDeleteFunctionVersionRequest,
    } as DeleteFunctionVersionRequest;
    message.functionVersionId = object.functionVersionId ?? "";
    message.force = object.force ?? false;
    return message;
  },
};

messageTypeRegistry.set(
  DeleteFunctionVersionRequest.$type,
  DeleteFunctionVersionRequest
);

const baseDeleteFunctionVersionMetadata: object = {
  $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionVersionMetadata",
  functionVersionId: "",
};

export const DeleteFunctionVersionMetadata = {
  $type:
    "yandex.cloud.serverless.functions.v1.DeleteFunctionVersionMetadata" as const,

  encode(
    message: DeleteFunctionVersionMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionVersionId !== "") {
      writer.uint32(18).string(message.functionVersionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteFunctionVersionMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteFunctionVersionMetadata,
    } as DeleteFunctionVersionMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.functionVersionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteFunctionVersionMetadata {
    const message = {
      ...baseDeleteFunctionVersionMetadata,
    } as DeleteFunctionVersionMetadata;
    message.functionVersionId =
      object.functionVersionId !== undefined &&
      object.functionVersionId !== null
        ? String(object.functionVersionId)
        : "";
    return message;
  },

  toJSON(message: DeleteFunctionVersionMetadata): unknown {
    const obj: any = {};
    message.functionVersionId !== undefined &&
      (obj.functionVersionId = message.functionVersionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteFunctionVersionMetadata>, I>>(
    object: I
  ): DeleteFunctionVersionMetadata {
    const message = {
      ...baseDeleteFunctionVersionMetadata,
    } as DeleteFunctionVersionMetadata;
    message.functionVersionId = object.functionVersionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteFunctionVersionMetadata.$type,
  DeleteFunctionVersionMetadata
);

const baseListRuntimesRequest: object = {
  $type: "yandex.cloud.serverless.functions.v1.ListRuntimesRequest",
};

export const ListRuntimesRequest = {
  $type: "yandex.cloud.serverless.functions.v1.ListRuntimesRequest" as const,

  encode(
    _: ListRuntimesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRuntimesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListRuntimesRequest } as ListRuntimesRequest;
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

  fromJSON(_: any): ListRuntimesRequest {
    const message = { ...baseListRuntimesRequest } as ListRuntimesRequest;
    return message;
  },

  toJSON(_: ListRuntimesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListRuntimesRequest>, I>>(
    _: I
  ): ListRuntimesRequest {
    const message = { ...baseListRuntimesRequest } as ListRuntimesRequest;
    return message;
  },
};

messageTypeRegistry.set(ListRuntimesRequest.$type, ListRuntimesRequest);

const baseListRuntimesResponse: object = {
  $type: "yandex.cloud.serverless.functions.v1.ListRuntimesResponse",
  runtimes: "",
};

export const ListRuntimesResponse = {
  $type: "yandex.cloud.serverless.functions.v1.ListRuntimesResponse" as const,

  encode(
    message: ListRuntimesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.runtimes) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListRuntimesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListRuntimesResponse } as ListRuntimesResponse;
    message.runtimes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.runtimes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListRuntimesResponse {
    const message = { ...baseListRuntimesResponse } as ListRuntimesResponse;
    message.runtimes = (object.runtimes ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: ListRuntimesResponse): unknown {
    const obj: any = {};
    if (message.runtimes) {
      obj.runtimes = message.runtimes.map((e) => e);
    } else {
      obj.runtimes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListRuntimesResponse>, I>>(
    object: I
  ): ListRuntimesResponse {
    const message = { ...baseListRuntimesResponse } as ListRuntimesResponse;
    message.runtimes = object.runtimes?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(ListRuntimesResponse.$type, ListRuntimesResponse);

const baseListFunctionsVersionsRequest: object = {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListFunctionsVersionsRequest = {
  $type:
    "yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest" as const,

  encode(
    message: ListFunctionsVersionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== undefined) {
      writer.uint32(10).string(message.folderId);
    }
    if (message.functionId !== undefined) {
      writer.uint32(18).string(message.functionId);
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
  ): ListFunctionsVersionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListFunctionsVersionsRequest,
    } as ListFunctionsVersionsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 2:
          message.functionId = reader.string();
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

  fromJSON(object: any): ListFunctionsVersionsRequest {
    const message = {
      ...baseListFunctionsVersionsRequest,
    } as ListFunctionsVersionsRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : undefined;
    message.functionId =
      object.functionId !== undefined && object.functionId !== null
        ? String(object.functionId)
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

  toJSON(message: ListFunctionsVersionsRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.functionId !== undefined && (obj.functionId = message.functionId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListFunctionsVersionsRequest>, I>>(
    object: I
  ): ListFunctionsVersionsRequest {
    const message = {
      ...baseListFunctionsVersionsRequest,
    } as ListFunctionsVersionsRequest;
    message.folderId = object.folderId ?? undefined;
    message.functionId = object.functionId ?? undefined;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListFunctionsVersionsRequest.$type,
  ListFunctionsVersionsRequest
);

const baseListFunctionsVersionsResponse: object = {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse",
  nextPageToken: "",
};

export const ListFunctionsVersionsResponse = {
  $type:
    "yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse" as const,

  encode(
    message: ListFunctionsVersionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.versions) {
      Version.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListFunctionsVersionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListFunctionsVersionsResponse,
    } as ListFunctionsVersionsResponse;
    message.versions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.versions.push(Version.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListFunctionsVersionsResponse {
    const message = {
      ...baseListFunctionsVersionsResponse,
    } as ListFunctionsVersionsResponse;
    message.versions = (object.versions ?? []).map((e: any) =>
      Version.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListFunctionsVersionsResponse): unknown {
    const obj: any = {};
    if (message.versions) {
      obj.versions = message.versions.map((e) =>
        e ? Version.toJSON(e) : undefined
      );
    } else {
      obj.versions = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListFunctionsVersionsResponse>, I>>(
    object: I
  ): ListFunctionsVersionsResponse {
    const message = {
      ...baseListFunctionsVersionsResponse,
    } as ListFunctionsVersionsResponse;
    message.versions =
      object.versions?.map((e) => Version.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListFunctionsVersionsResponse.$type,
  ListFunctionsVersionsResponse
);

const baseListFunctionOperationsRequest: object = {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest",
  functionId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListFunctionOperationsRequest = {
  $type:
    "yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest" as const,

  encode(
    message: ListFunctionOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
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
  ): ListFunctionOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListFunctionOperationsRequest,
    } as ListFunctionOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionId = reader.string();
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

  fromJSON(object: any): ListFunctionOperationsRequest {
    const message = {
      ...baseListFunctionOperationsRequest,
    } as ListFunctionOperationsRequest;
    message.functionId =
      object.functionId !== undefined && object.functionId !== null
        ? String(object.functionId)
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

  toJSON(message: ListFunctionOperationsRequest): unknown {
    const obj: any = {};
    message.functionId !== undefined && (obj.functionId = message.functionId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListFunctionOperationsRequest>, I>>(
    object: I
  ): ListFunctionOperationsRequest {
    const message = {
      ...baseListFunctionOperationsRequest,
    } as ListFunctionOperationsRequest;
    message.functionId = object.functionId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListFunctionOperationsRequest.$type,
  ListFunctionOperationsRequest
);

const baseListFunctionOperationsResponse: object = {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse",
  nextPageToken: "",
};

export const ListFunctionOperationsResponse = {
  $type:
    "yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse" as const,

  encode(
    message: ListFunctionOperationsResponse,
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
  ): ListFunctionOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListFunctionOperationsResponse,
    } as ListFunctionOperationsResponse;
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

  fromJSON(object: any): ListFunctionOperationsResponse {
    const message = {
      ...baseListFunctionOperationsResponse,
    } as ListFunctionOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListFunctionOperationsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<ListFunctionOperationsResponse>, I>>(
    object: I
  ): ListFunctionOperationsResponse {
    const message = {
      ...baseListFunctionOperationsResponse,
    } as ListFunctionOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListFunctionOperationsResponse.$type,
  ListFunctionOperationsResponse
);

const baseCreateFunctionVersionRequest: object = {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest",
  functionId: "",
  runtime: "",
  description: "",
  entrypoint: "",
  serviceAccountId: "",
  tag: "",
};

export const CreateFunctionVersionRequest = {
  $type:
    "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest" as const,

  encode(
    message: CreateFunctionVersionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    if (message.runtime !== "") {
      writer.uint32(18).string(message.runtime);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.entrypoint !== "") {
      writer.uint32(34).string(message.entrypoint);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(42).fork()).ldelim();
    }
    if (message.executionTimeout !== undefined) {
      Duration.encode(
        message.executionTimeout,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(58).string(message.serviceAccountId);
    }
    if (message.package !== undefined) {
      Package.encode(message.package, writer.uint32(74).fork()).ldelim();
    }
    if (message.content !== undefined) {
      writer.uint32(82).bytes(message.content);
    }
    if (message.versionId !== undefined) {
      writer.uint32(90).string(message.versionId);
    }
    Object.entries(message.environment).forEach(([key, value]) => {
      CreateFunctionVersionRequest_EnvironmentEntry.encode(
        {
          $type:
            "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.EnvironmentEntry",
          key: key as any,
          value,
        },
        writer.uint32(98).fork()
      ).ldelim();
    });
    for (const v of message.tag) {
      writer.uint32(106).string(v!);
    }
    if (message.connectivity !== undefined) {
      Connectivity.encode(
        message.connectivity,
        writer.uint32(138).fork()
      ).ldelim();
    }
    Object.entries(message.namedServiceAccounts).forEach(([key, value]) => {
      CreateFunctionVersionRequest_NamedServiceAccountsEntry.encode(
        {
          $type:
            "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.NamedServiceAccountsEntry",
          key: key as any,
          value,
        },
        writer.uint32(122).fork()
      ).ldelim();
    });
    for (const v of message.secrets) {
      Secret.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    if (message.logOptions !== undefined) {
      LogOptions.encode(message.logOptions, writer.uint32(154).fork()).ldelim();
    }
    for (const v of message.storageMounts) {
      StorageMount.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    if (message.asyncInvocationConfig !== undefined) {
      AsyncInvocationConfig.encode(
        message.asyncInvocationConfig,
        writer.uint32(178).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateFunctionVersionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateFunctionVersionRequest,
    } as CreateFunctionVersionRequest;
    message.environment = {};
    message.tag = [];
    message.namedServiceAccounts = {};
    message.secrets = [];
    message.storageMounts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionId = reader.string();
          break;
        case 2:
          message.runtime = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.entrypoint = reader.string();
          break;
        case 5:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 6:
          message.executionTimeout = Duration.decode(reader, reader.uint32());
          break;
        case 7:
          message.serviceAccountId = reader.string();
          break;
        case 9:
          message.package = Package.decode(reader, reader.uint32());
          break;
        case 10:
          message.content = reader.bytes() as Buffer;
          break;
        case 11:
          message.versionId = reader.string();
          break;
        case 12:
          const entry12 = CreateFunctionVersionRequest_EnvironmentEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry12.value !== undefined) {
            message.environment[entry12.key] = entry12.value;
          }
          break;
        case 13:
          message.tag.push(reader.string());
          break;
        case 17:
          message.connectivity = Connectivity.decode(reader, reader.uint32());
          break;
        case 15:
          const entry15 =
            CreateFunctionVersionRequest_NamedServiceAccountsEntry.decode(
              reader,
              reader.uint32()
            );
          if (entry15.value !== undefined) {
            message.namedServiceAccounts[entry15.key] = entry15.value;
          }
          break;
        case 18:
          message.secrets.push(Secret.decode(reader, reader.uint32()));
          break;
        case 19:
          message.logOptions = LogOptions.decode(reader, reader.uint32());
          break;
        case 20:
          message.storageMounts.push(
            StorageMount.decode(reader, reader.uint32())
          );
          break;
        case 22:
          message.asyncInvocationConfig = AsyncInvocationConfig.decode(
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

  fromJSON(object: any): CreateFunctionVersionRequest {
    const message = {
      ...baseCreateFunctionVersionRequest,
    } as CreateFunctionVersionRequest;
    message.functionId =
      object.functionId !== undefined && object.functionId !== null
        ? String(object.functionId)
        : "";
    message.runtime =
      object.runtime !== undefined && object.runtime !== null
        ? String(object.runtime)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.entrypoint =
      object.entrypoint !== undefined && object.entrypoint !== null
        ? String(object.entrypoint)
        : "";
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    message.executionTimeout =
      object.executionTimeout !== undefined && object.executionTimeout !== null
        ? Duration.fromJSON(object.executionTimeout)
        : undefined;
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.package =
      object.package !== undefined && object.package !== null
        ? Package.fromJSON(object.package)
        : undefined;
    message.content =
      object.content !== undefined && object.content !== null
        ? Buffer.from(bytesFromBase64(object.content))
        : undefined;
    message.versionId =
      object.versionId !== undefined && object.versionId !== null
        ? String(object.versionId)
        : undefined;
    message.environment = Object.entries(object.environment ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.tag = (object.tag ?? []).map((e: any) => String(e));
    message.connectivity =
      object.connectivity !== undefined && object.connectivity !== null
        ? Connectivity.fromJSON(object.connectivity)
        : undefined;
    message.namedServiceAccounts = Object.entries(
      object.namedServiceAccounts ?? {}
    ).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.secrets = (object.secrets ?? []).map((e: any) =>
      Secret.fromJSON(e)
    );
    message.logOptions =
      object.logOptions !== undefined && object.logOptions !== null
        ? LogOptions.fromJSON(object.logOptions)
        : undefined;
    message.storageMounts = (object.storageMounts ?? []).map((e: any) =>
      StorageMount.fromJSON(e)
    );
    message.asyncInvocationConfig =
      object.asyncInvocationConfig !== undefined &&
      object.asyncInvocationConfig !== null
        ? AsyncInvocationConfig.fromJSON(object.asyncInvocationConfig)
        : undefined;
    return message;
  },

  toJSON(message: CreateFunctionVersionRequest): unknown {
    const obj: any = {};
    message.functionId !== undefined && (obj.functionId = message.functionId);
    message.runtime !== undefined && (obj.runtime = message.runtime);
    message.description !== undefined &&
      (obj.description = message.description);
    message.entrypoint !== undefined && (obj.entrypoint = message.entrypoint);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    message.executionTimeout !== undefined &&
      (obj.executionTimeout = message.executionTimeout
        ? Duration.toJSON(message.executionTimeout)
        : undefined);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.package !== undefined &&
      (obj.package = message.package
        ? Package.toJSON(message.package)
        : undefined);
    message.content !== undefined &&
      (obj.content =
        message.content !== undefined
          ? base64FromBytes(message.content)
          : undefined);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    obj.environment = {};
    if (message.environment) {
      Object.entries(message.environment).forEach(([k, v]) => {
        obj.environment[k] = v;
      });
    }
    if (message.tag) {
      obj.tag = message.tag.map((e) => e);
    } else {
      obj.tag = [];
    }
    message.connectivity !== undefined &&
      (obj.connectivity = message.connectivity
        ? Connectivity.toJSON(message.connectivity)
        : undefined);
    obj.namedServiceAccounts = {};
    if (message.namedServiceAccounts) {
      Object.entries(message.namedServiceAccounts).forEach(([k, v]) => {
        obj.namedServiceAccounts[k] = v;
      });
    }
    if (message.secrets) {
      obj.secrets = message.secrets.map((e) =>
        e ? Secret.toJSON(e) : undefined
      );
    } else {
      obj.secrets = [];
    }
    message.logOptions !== undefined &&
      (obj.logOptions = message.logOptions
        ? LogOptions.toJSON(message.logOptions)
        : undefined);
    if (message.storageMounts) {
      obj.storageMounts = message.storageMounts.map((e) =>
        e ? StorageMount.toJSON(e) : undefined
      );
    } else {
      obj.storageMounts = [];
    }
    message.asyncInvocationConfig !== undefined &&
      (obj.asyncInvocationConfig = message.asyncInvocationConfig
        ? AsyncInvocationConfig.toJSON(message.asyncInvocationConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateFunctionVersionRequest>, I>>(
    object: I
  ): CreateFunctionVersionRequest {
    const message = {
      ...baseCreateFunctionVersionRequest,
    } as CreateFunctionVersionRequest;
    message.functionId = object.functionId ?? "";
    message.runtime = object.runtime ?? "";
    message.description = object.description ?? "";
    message.entrypoint = object.entrypoint ?? "";
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    message.executionTimeout =
      object.executionTimeout !== undefined && object.executionTimeout !== null
        ? Duration.fromPartial(object.executionTimeout)
        : undefined;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.package =
      object.package !== undefined && object.package !== null
        ? Package.fromPartial(object.package)
        : undefined;
    message.content = object.content ?? undefined;
    message.versionId = object.versionId ?? undefined;
    message.environment = Object.entries(object.environment ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.tag = object.tag?.map((e) => e) || [];
    message.connectivity =
      object.connectivity !== undefined && object.connectivity !== null
        ? Connectivity.fromPartial(object.connectivity)
        : undefined;
    message.namedServiceAccounts = Object.entries(
      object.namedServiceAccounts ?? {}
    ).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.secrets = object.secrets?.map((e) => Secret.fromPartial(e)) || [];
    message.logOptions =
      object.logOptions !== undefined && object.logOptions !== null
        ? LogOptions.fromPartial(object.logOptions)
        : undefined;
    message.storageMounts =
      object.storageMounts?.map((e) => StorageMount.fromPartial(e)) || [];
    message.asyncInvocationConfig =
      object.asyncInvocationConfig !== undefined &&
      object.asyncInvocationConfig !== null
        ? AsyncInvocationConfig.fromPartial(object.asyncInvocationConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  CreateFunctionVersionRequest.$type,
  CreateFunctionVersionRequest
);

const baseCreateFunctionVersionRequest_EnvironmentEntry: object = {
  $type:
    "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.EnvironmentEntry",
  key: "",
  value: "",
};

export const CreateFunctionVersionRequest_EnvironmentEntry = {
  $type:
    "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.EnvironmentEntry" as const,

  encode(
    message: CreateFunctionVersionRequest_EnvironmentEntry,
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
  ): CreateFunctionVersionRequest_EnvironmentEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateFunctionVersionRequest_EnvironmentEntry,
    } as CreateFunctionVersionRequest_EnvironmentEntry;
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

  fromJSON(object: any): CreateFunctionVersionRequest_EnvironmentEntry {
    const message = {
      ...baseCreateFunctionVersionRequest_EnvironmentEntry,
    } as CreateFunctionVersionRequest_EnvironmentEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateFunctionVersionRequest_EnvironmentEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<CreateFunctionVersionRequest_EnvironmentEntry>,
      I
    >
  >(object: I): CreateFunctionVersionRequest_EnvironmentEntry {
    const message = {
      ...baseCreateFunctionVersionRequest_EnvironmentEntry,
    } as CreateFunctionVersionRequest_EnvironmentEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateFunctionVersionRequest_EnvironmentEntry.$type,
  CreateFunctionVersionRequest_EnvironmentEntry
);

const baseCreateFunctionVersionRequest_NamedServiceAccountsEntry: object = {
  $type:
    "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.NamedServiceAccountsEntry",
  key: "",
  value: "",
};

export const CreateFunctionVersionRequest_NamedServiceAccountsEntry = {
  $type:
    "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.NamedServiceAccountsEntry" as const,

  encode(
    message: CreateFunctionVersionRequest_NamedServiceAccountsEntry,
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
  ): CreateFunctionVersionRequest_NamedServiceAccountsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateFunctionVersionRequest_NamedServiceAccountsEntry,
    } as CreateFunctionVersionRequest_NamedServiceAccountsEntry;
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

  fromJSON(
    object: any
  ): CreateFunctionVersionRequest_NamedServiceAccountsEntry {
    const message = {
      ...baseCreateFunctionVersionRequest_NamedServiceAccountsEntry,
    } as CreateFunctionVersionRequest_NamedServiceAccountsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(
    message: CreateFunctionVersionRequest_NamedServiceAccountsEntry
  ): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<CreateFunctionVersionRequest_NamedServiceAccountsEntry>,
      I
    >
  >(object: I): CreateFunctionVersionRequest_NamedServiceAccountsEntry {
    const message = {
      ...baseCreateFunctionVersionRequest_NamedServiceAccountsEntry,
    } as CreateFunctionVersionRequest_NamedServiceAccountsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateFunctionVersionRequest_NamedServiceAccountsEntry.$type,
  CreateFunctionVersionRequest_NamedServiceAccountsEntry
);

const baseCreateFunctionVersionMetadata: object = {
  $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata",
  functionVersionId: "",
};

export const CreateFunctionVersionMetadata = {
  $type:
    "yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata" as const,

  encode(
    message: CreateFunctionVersionMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionVersionId !== "") {
      writer.uint32(10).string(message.functionVersionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateFunctionVersionMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateFunctionVersionMetadata,
    } as CreateFunctionVersionMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionVersionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateFunctionVersionMetadata {
    const message = {
      ...baseCreateFunctionVersionMetadata,
    } as CreateFunctionVersionMetadata;
    message.functionVersionId =
      object.functionVersionId !== undefined &&
      object.functionVersionId !== null
        ? String(object.functionVersionId)
        : "";
    return message;
  },

  toJSON(message: CreateFunctionVersionMetadata): unknown {
    const obj: any = {};
    message.functionVersionId !== undefined &&
      (obj.functionVersionId = message.functionVersionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateFunctionVersionMetadata>, I>>(
    object: I
  ): CreateFunctionVersionMetadata {
    const message = {
      ...baseCreateFunctionVersionMetadata,
    } as CreateFunctionVersionMetadata;
    message.functionVersionId = object.functionVersionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateFunctionVersionMetadata.$type,
  CreateFunctionVersionMetadata
);

const baseSetFunctionTagRequest: object = {
  $type: "yandex.cloud.serverless.functions.v1.SetFunctionTagRequest",
  functionVersionId: "",
  tag: "",
};

export const SetFunctionTagRequest = {
  $type: "yandex.cloud.serverless.functions.v1.SetFunctionTagRequest" as const,

  encode(
    message: SetFunctionTagRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionVersionId !== "") {
      writer.uint32(10).string(message.functionVersionId);
    }
    if (message.tag !== "") {
      writer.uint32(18).string(message.tag);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetFunctionTagRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetFunctionTagRequest } as SetFunctionTagRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionVersionId = reader.string();
          break;
        case 2:
          message.tag = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetFunctionTagRequest {
    const message = { ...baseSetFunctionTagRequest } as SetFunctionTagRequest;
    message.functionVersionId =
      object.functionVersionId !== undefined &&
      object.functionVersionId !== null
        ? String(object.functionVersionId)
        : "";
    message.tag =
      object.tag !== undefined && object.tag !== null ? String(object.tag) : "";
    return message;
  },

  toJSON(message: SetFunctionTagRequest): unknown {
    const obj: any = {};
    message.functionVersionId !== undefined &&
      (obj.functionVersionId = message.functionVersionId);
    message.tag !== undefined && (obj.tag = message.tag);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetFunctionTagRequest>, I>>(
    object: I
  ): SetFunctionTagRequest {
    const message = { ...baseSetFunctionTagRequest } as SetFunctionTagRequest;
    message.functionVersionId = object.functionVersionId ?? "";
    message.tag = object.tag ?? "";
    return message;
  },
};

messageTypeRegistry.set(SetFunctionTagRequest.$type, SetFunctionTagRequest);

const baseRemoveFunctionTagRequest: object = {
  $type: "yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest",
  functionVersionId: "",
  tag: "",
};

export const RemoveFunctionTagRequest = {
  $type:
    "yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest" as const,

  encode(
    message: RemoveFunctionTagRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionVersionId !== "") {
      writer.uint32(10).string(message.functionVersionId);
    }
    if (message.tag !== "") {
      writer.uint32(18).string(message.tag);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveFunctionTagRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRemoveFunctionTagRequest,
    } as RemoveFunctionTagRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionVersionId = reader.string();
          break;
        case 2:
          message.tag = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveFunctionTagRequest {
    const message = {
      ...baseRemoveFunctionTagRequest,
    } as RemoveFunctionTagRequest;
    message.functionVersionId =
      object.functionVersionId !== undefined &&
      object.functionVersionId !== null
        ? String(object.functionVersionId)
        : "";
    message.tag =
      object.tag !== undefined && object.tag !== null ? String(object.tag) : "";
    return message;
  },

  toJSON(message: RemoveFunctionTagRequest): unknown {
    const obj: any = {};
    message.functionVersionId !== undefined &&
      (obj.functionVersionId = message.functionVersionId);
    message.tag !== undefined && (obj.tag = message.tag);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveFunctionTagRequest>, I>>(
    object: I
  ): RemoveFunctionTagRequest {
    const message = {
      ...baseRemoveFunctionTagRequest,
    } as RemoveFunctionTagRequest;
    message.functionVersionId = object.functionVersionId ?? "";
    message.tag = object.tag ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  RemoveFunctionTagRequest.$type,
  RemoveFunctionTagRequest
);

const baseSetFunctionTagMetadata: object = {
  $type: "yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata",
  functionVersionId: "",
};

export const SetFunctionTagMetadata = {
  $type: "yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata" as const,

  encode(
    message: SetFunctionTagMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionVersionId !== "") {
      writer.uint32(10).string(message.functionVersionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetFunctionTagMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetFunctionTagMetadata } as SetFunctionTagMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionVersionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetFunctionTagMetadata {
    const message = { ...baseSetFunctionTagMetadata } as SetFunctionTagMetadata;
    message.functionVersionId =
      object.functionVersionId !== undefined &&
      object.functionVersionId !== null
        ? String(object.functionVersionId)
        : "";
    return message;
  },

  toJSON(message: SetFunctionTagMetadata): unknown {
    const obj: any = {};
    message.functionVersionId !== undefined &&
      (obj.functionVersionId = message.functionVersionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetFunctionTagMetadata>, I>>(
    object: I
  ): SetFunctionTagMetadata {
    const message = { ...baseSetFunctionTagMetadata } as SetFunctionTagMetadata;
    message.functionVersionId = object.functionVersionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(SetFunctionTagMetadata.$type, SetFunctionTagMetadata);

const baseRemoveFunctionTagMetadata: object = {
  $type: "yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata",
  functionVersionId: "",
};

export const RemoveFunctionTagMetadata = {
  $type:
    "yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata" as const,

  encode(
    message: RemoveFunctionTagMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionVersionId !== "") {
      writer.uint32(10).string(message.functionVersionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveFunctionTagMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRemoveFunctionTagMetadata,
    } as RemoveFunctionTagMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionVersionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveFunctionTagMetadata {
    const message = {
      ...baseRemoveFunctionTagMetadata,
    } as RemoveFunctionTagMetadata;
    message.functionVersionId =
      object.functionVersionId !== undefined &&
      object.functionVersionId !== null
        ? String(object.functionVersionId)
        : "";
    return message;
  },

  toJSON(message: RemoveFunctionTagMetadata): unknown {
    const obj: any = {};
    message.functionVersionId !== undefined &&
      (obj.functionVersionId = message.functionVersionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveFunctionTagMetadata>, I>>(
    object: I
  ): RemoveFunctionTagMetadata {
    const message = {
      ...baseRemoveFunctionTagMetadata,
    } as RemoveFunctionTagMetadata;
    message.functionVersionId = object.functionVersionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  RemoveFunctionTagMetadata.$type,
  RemoveFunctionTagMetadata
);

const baseListFunctionTagHistoryRequest: object = {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest",
  functionId: "",
  tag: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListFunctionTagHistoryRequest = {
  $type:
    "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest" as const,

  encode(
    message: ListFunctionTagHistoryRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    if (message.tag !== "") {
      writer.uint32(18).string(message.tag);
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
  ): ListFunctionTagHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListFunctionTagHistoryRequest,
    } as ListFunctionTagHistoryRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionId = reader.string();
          break;
        case 2:
          message.tag = reader.string();
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

  fromJSON(object: any): ListFunctionTagHistoryRequest {
    const message = {
      ...baseListFunctionTagHistoryRequest,
    } as ListFunctionTagHistoryRequest;
    message.functionId =
      object.functionId !== undefined && object.functionId !== null
        ? String(object.functionId)
        : "";
    message.tag =
      object.tag !== undefined && object.tag !== null ? String(object.tag) : "";
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

  toJSON(message: ListFunctionTagHistoryRequest): unknown {
    const obj: any = {};
    message.functionId !== undefined && (obj.functionId = message.functionId);
    message.tag !== undefined && (obj.tag = message.tag);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListFunctionTagHistoryRequest>, I>>(
    object: I
  ): ListFunctionTagHistoryRequest {
    const message = {
      ...baseListFunctionTagHistoryRequest,
    } as ListFunctionTagHistoryRequest;
    message.functionId = object.functionId ?? "";
    message.tag = object.tag ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListFunctionTagHistoryRequest.$type,
  ListFunctionTagHistoryRequest
);

const baseListFunctionTagHistoryResponse: object = {
  $type: "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse",
  nextPageToken: "",
};

export const ListFunctionTagHistoryResponse = {
  $type:
    "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse" as const,

  encode(
    message: ListFunctionTagHistoryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.functionTagHistoryRecord) {
      ListFunctionTagHistoryResponse_FunctionTagHistoryRecord.encode(
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
  ): ListFunctionTagHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListFunctionTagHistoryResponse,
    } as ListFunctionTagHistoryResponse;
    message.functionTagHistoryRecord = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionTagHistoryRecord.push(
            ListFunctionTagHistoryResponse_FunctionTagHistoryRecord.decode(
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

  fromJSON(object: any): ListFunctionTagHistoryResponse {
    const message = {
      ...baseListFunctionTagHistoryResponse,
    } as ListFunctionTagHistoryResponse;
    message.functionTagHistoryRecord = (
      object.functionTagHistoryRecord ?? []
    ).map((e: any) =>
      ListFunctionTagHistoryResponse_FunctionTagHistoryRecord.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListFunctionTagHistoryResponse): unknown {
    const obj: any = {};
    if (message.functionTagHistoryRecord) {
      obj.functionTagHistoryRecord = message.functionTagHistoryRecord.map((e) =>
        e
          ? ListFunctionTagHistoryResponse_FunctionTagHistoryRecord.toJSON(e)
          : undefined
      );
    } else {
      obj.functionTagHistoryRecord = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListFunctionTagHistoryResponse>, I>>(
    object: I
  ): ListFunctionTagHistoryResponse {
    const message = {
      ...baseListFunctionTagHistoryResponse,
    } as ListFunctionTagHistoryResponse;
    message.functionTagHistoryRecord =
      object.functionTagHistoryRecord?.map((e) =>
        ListFunctionTagHistoryResponse_FunctionTagHistoryRecord.fromPartial(e)
      ) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListFunctionTagHistoryResponse.$type,
  ListFunctionTagHistoryResponse
);

const baseListFunctionTagHistoryResponse_FunctionTagHistoryRecord: object = {
  $type:
    "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord",
  functionId: "",
  functionVersionId: "",
  tag: "",
};

export const ListFunctionTagHistoryResponse_FunctionTagHistoryRecord = {
  $type:
    "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord" as const,

  encode(
    message: ListFunctionTagHistoryResponse_FunctionTagHistoryRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    if (message.functionVersionId !== "") {
      writer.uint32(26).string(message.functionVersionId);
    }
    if (message.tag !== "") {
      writer.uint32(18).string(message.tag);
    }
    if (message.effectiveFrom !== undefined) {
      Timestamp.encode(
        toTimestamp(message.effectiveFrom),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.effectiveTo !== undefined) {
      Timestamp.encode(
        toTimestamp(message.effectiveTo),
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListFunctionTagHistoryResponse_FunctionTagHistoryRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListFunctionTagHistoryResponse_FunctionTagHistoryRecord,
    } as ListFunctionTagHistoryResponse_FunctionTagHistoryRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionId = reader.string();
          break;
        case 3:
          message.functionVersionId = reader.string();
          break;
        case 2:
          message.tag = reader.string();
          break;
        case 4:
          message.effectiveFrom = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.effectiveTo = fromTimestamp(
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

  fromJSON(
    object: any
  ): ListFunctionTagHistoryResponse_FunctionTagHistoryRecord {
    const message = {
      ...baseListFunctionTagHistoryResponse_FunctionTagHistoryRecord,
    } as ListFunctionTagHistoryResponse_FunctionTagHistoryRecord;
    message.functionId =
      object.functionId !== undefined && object.functionId !== null
        ? String(object.functionId)
        : "";
    message.functionVersionId =
      object.functionVersionId !== undefined &&
      object.functionVersionId !== null
        ? String(object.functionVersionId)
        : "";
    message.tag =
      object.tag !== undefined && object.tag !== null ? String(object.tag) : "";
    message.effectiveFrom =
      object.effectiveFrom !== undefined && object.effectiveFrom !== null
        ? fromJsonTimestamp(object.effectiveFrom)
        : undefined;
    message.effectiveTo =
      object.effectiveTo !== undefined && object.effectiveTo !== null
        ? fromJsonTimestamp(object.effectiveTo)
        : undefined;
    return message;
  },

  toJSON(
    message: ListFunctionTagHistoryResponse_FunctionTagHistoryRecord
  ): unknown {
    const obj: any = {};
    message.functionId !== undefined && (obj.functionId = message.functionId);
    message.functionVersionId !== undefined &&
      (obj.functionVersionId = message.functionVersionId);
    message.tag !== undefined && (obj.tag = message.tag);
    message.effectiveFrom !== undefined &&
      (obj.effectiveFrom = message.effectiveFrom.toISOString());
    message.effectiveTo !== undefined &&
      (obj.effectiveTo = message.effectiveTo.toISOString());
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ListFunctionTagHistoryResponse_FunctionTagHistoryRecord>,
      I
    >
  >(object: I): ListFunctionTagHistoryResponse_FunctionTagHistoryRecord {
    const message = {
      ...baseListFunctionTagHistoryResponse_FunctionTagHistoryRecord,
    } as ListFunctionTagHistoryResponse_FunctionTagHistoryRecord;
    message.functionId = object.functionId ?? "";
    message.functionVersionId = object.functionVersionId ?? "";
    message.tag = object.tag ?? "";
    message.effectiveFrom = object.effectiveFrom ?? undefined;
    message.effectiveTo = object.effectiveTo ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ListFunctionTagHistoryResponse_FunctionTagHistoryRecord.$type,
  ListFunctionTagHistoryResponse_FunctionTagHistoryRecord
);

const baseListScalingPoliciesRequest: object = {
  $type: "yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest",
  functionId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListScalingPoliciesRequest = {
  $type:
    "yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest" as const,

  encode(
    message: ListScalingPoliciesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
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
  ): ListScalingPoliciesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListScalingPoliciesRequest,
    } as ListScalingPoliciesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionId = reader.string();
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

  fromJSON(object: any): ListScalingPoliciesRequest {
    const message = {
      ...baseListScalingPoliciesRequest,
    } as ListScalingPoliciesRequest;
    message.functionId =
      object.functionId !== undefined && object.functionId !== null
        ? String(object.functionId)
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

  toJSON(message: ListScalingPoliciesRequest): unknown {
    const obj: any = {};
    message.functionId !== undefined && (obj.functionId = message.functionId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListScalingPoliciesRequest>, I>>(
    object: I
  ): ListScalingPoliciesRequest {
    const message = {
      ...baseListScalingPoliciesRequest,
    } as ListScalingPoliciesRequest;
    message.functionId = object.functionId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListScalingPoliciesRequest.$type,
  ListScalingPoliciesRequest
);

const baseListScalingPoliciesResponse: object = {
  $type: "yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse",
  nextPageToken: "",
};

export const ListScalingPoliciesResponse = {
  $type:
    "yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse" as const,

  encode(
    message: ListScalingPoliciesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.scalingPolicies) {
      ScalingPolicy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListScalingPoliciesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListScalingPoliciesResponse,
    } as ListScalingPoliciesResponse;
    message.scalingPolicies = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scalingPolicies.push(
            ScalingPolicy.decode(reader, reader.uint32())
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

  fromJSON(object: any): ListScalingPoliciesResponse {
    const message = {
      ...baseListScalingPoliciesResponse,
    } as ListScalingPoliciesResponse;
    message.scalingPolicies = (object.scalingPolicies ?? []).map((e: any) =>
      ScalingPolicy.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListScalingPoliciesResponse): unknown {
    const obj: any = {};
    if (message.scalingPolicies) {
      obj.scalingPolicies = message.scalingPolicies.map((e) =>
        e ? ScalingPolicy.toJSON(e) : undefined
      );
    } else {
      obj.scalingPolicies = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListScalingPoliciesResponse>, I>>(
    object: I
  ): ListScalingPoliciesResponse {
    const message = {
      ...baseListScalingPoliciesResponse,
    } as ListScalingPoliciesResponse;
    message.scalingPolicies =
      object.scalingPolicies?.map((e) => ScalingPolicy.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListScalingPoliciesResponse.$type,
  ListScalingPoliciesResponse
);

const baseSetScalingPolicyRequest: object = {
  $type: "yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest",
  functionId: "",
  tag: "",
  provisionedInstancesCount: 0,
  zoneInstancesLimit: 0,
  zoneRequestsLimit: 0,
};

export const SetScalingPolicyRequest = {
  $type:
    "yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest" as const,

  encode(
    message: SetScalingPolicyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    if (message.tag !== "") {
      writer.uint32(18).string(message.tag);
    }
    if (message.provisionedInstancesCount !== 0) {
      writer.uint32(32).int64(message.provisionedInstancesCount);
    }
    if (message.zoneInstancesLimit !== 0) {
      writer.uint32(40).int64(message.zoneInstancesLimit);
    }
    if (message.zoneRequestsLimit !== 0) {
      writer.uint32(48).int64(message.zoneRequestsLimit);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetScalingPolicyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetScalingPolicyRequest,
    } as SetScalingPolicyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionId = reader.string();
          break;
        case 2:
          message.tag = reader.string();
          break;
        case 4:
          message.provisionedInstancesCount = longToNumber(
            reader.int64() as Long
          );
          break;
        case 5:
          message.zoneInstancesLimit = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.zoneRequestsLimit = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetScalingPolicyRequest {
    const message = {
      ...baseSetScalingPolicyRequest,
    } as SetScalingPolicyRequest;
    message.functionId =
      object.functionId !== undefined && object.functionId !== null
        ? String(object.functionId)
        : "";
    message.tag =
      object.tag !== undefined && object.tag !== null ? String(object.tag) : "";
    message.provisionedInstancesCount =
      object.provisionedInstancesCount !== undefined &&
      object.provisionedInstancesCount !== null
        ? Number(object.provisionedInstancesCount)
        : 0;
    message.zoneInstancesLimit =
      object.zoneInstancesLimit !== undefined &&
      object.zoneInstancesLimit !== null
        ? Number(object.zoneInstancesLimit)
        : 0;
    message.zoneRequestsLimit =
      object.zoneRequestsLimit !== undefined &&
      object.zoneRequestsLimit !== null
        ? Number(object.zoneRequestsLimit)
        : 0;
    return message;
  },

  toJSON(message: SetScalingPolicyRequest): unknown {
    const obj: any = {};
    message.functionId !== undefined && (obj.functionId = message.functionId);
    message.tag !== undefined && (obj.tag = message.tag);
    message.provisionedInstancesCount !== undefined &&
      (obj.provisionedInstancesCount = Math.round(
        message.provisionedInstancesCount
      ));
    message.zoneInstancesLimit !== undefined &&
      (obj.zoneInstancesLimit = Math.round(message.zoneInstancesLimit));
    message.zoneRequestsLimit !== undefined &&
      (obj.zoneRequestsLimit = Math.round(message.zoneRequestsLimit));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetScalingPolicyRequest>, I>>(
    object: I
  ): SetScalingPolicyRequest {
    const message = {
      ...baseSetScalingPolicyRequest,
    } as SetScalingPolicyRequest;
    message.functionId = object.functionId ?? "";
    message.tag = object.tag ?? "";
    message.provisionedInstancesCount = object.provisionedInstancesCount ?? 0;
    message.zoneInstancesLimit = object.zoneInstancesLimit ?? 0;
    message.zoneRequestsLimit = object.zoneRequestsLimit ?? 0;
    return message;
  },
};

messageTypeRegistry.set(SetScalingPolicyRequest.$type, SetScalingPolicyRequest);

const baseSetScalingPolicyMetadata: object = {
  $type: "yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata",
  functionId: "",
};

export const SetScalingPolicyMetadata = {
  $type:
    "yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata" as const,

  encode(
    message: SetScalingPolicyMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetScalingPolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetScalingPolicyMetadata,
    } as SetScalingPolicyMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetScalingPolicyMetadata {
    const message = {
      ...baseSetScalingPolicyMetadata,
    } as SetScalingPolicyMetadata;
    message.functionId =
      object.functionId !== undefined && object.functionId !== null
        ? String(object.functionId)
        : "";
    return message;
  },

  toJSON(message: SetScalingPolicyMetadata): unknown {
    const obj: any = {};
    message.functionId !== undefined && (obj.functionId = message.functionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetScalingPolicyMetadata>, I>>(
    object: I
  ): SetScalingPolicyMetadata {
    const message = {
      ...baseSetScalingPolicyMetadata,
    } as SetScalingPolicyMetadata;
    message.functionId = object.functionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  SetScalingPolicyMetadata.$type,
  SetScalingPolicyMetadata
);

const baseRemoveScalingPolicyRequest: object = {
  $type: "yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest",
  functionId: "",
  tag: "",
};

export const RemoveScalingPolicyRequest = {
  $type:
    "yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest" as const,

  encode(
    message: RemoveScalingPolicyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    if (message.tag !== "") {
      writer.uint32(18).string(message.tag);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveScalingPolicyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRemoveScalingPolicyRequest,
    } as RemoveScalingPolicyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionId = reader.string();
          break;
        case 2:
          message.tag = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveScalingPolicyRequest {
    const message = {
      ...baseRemoveScalingPolicyRequest,
    } as RemoveScalingPolicyRequest;
    message.functionId =
      object.functionId !== undefined && object.functionId !== null
        ? String(object.functionId)
        : "";
    message.tag =
      object.tag !== undefined && object.tag !== null ? String(object.tag) : "";
    return message;
  },

  toJSON(message: RemoveScalingPolicyRequest): unknown {
    const obj: any = {};
    message.functionId !== undefined && (obj.functionId = message.functionId);
    message.tag !== undefined && (obj.tag = message.tag);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveScalingPolicyRequest>, I>>(
    object: I
  ): RemoveScalingPolicyRequest {
    const message = {
      ...baseRemoveScalingPolicyRequest,
    } as RemoveScalingPolicyRequest;
    message.functionId = object.functionId ?? "";
    message.tag = object.tag ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  RemoveScalingPolicyRequest.$type,
  RemoveScalingPolicyRequest
);

const baseRemoveScalingPolicyMetadata: object = {
  $type: "yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata",
  functionId: "",
};

export const RemoveScalingPolicyMetadata = {
  $type:
    "yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata" as const,

  encode(
    message: RemoveScalingPolicyMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.functionId !== "") {
      writer.uint32(10).string(message.functionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveScalingPolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRemoveScalingPolicyMetadata,
    } as RemoveScalingPolicyMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveScalingPolicyMetadata {
    const message = {
      ...baseRemoveScalingPolicyMetadata,
    } as RemoveScalingPolicyMetadata;
    message.functionId =
      object.functionId !== undefined && object.functionId !== null
        ? String(object.functionId)
        : "";
    return message;
  },

  toJSON(message: RemoveScalingPolicyMetadata): unknown {
    const obj: any = {};
    message.functionId !== undefined && (obj.functionId = message.functionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveScalingPolicyMetadata>, I>>(
    object: I
  ): RemoveScalingPolicyMetadata {
    const message = {
      ...baseRemoveScalingPolicyMetadata,
    } as RemoveScalingPolicyMetadata;
    message.functionId = object.functionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  RemoveScalingPolicyMetadata.$type,
  RemoveScalingPolicyMetadata
);

/** A set of methods for managing serverless functions. */
export const FunctionServiceService = {
  /**
   * Returns the specified function.
   *
   * To get the list of all available functions, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetFunctionRequest) =>
      Buffer.from(GetFunctionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetFunctionRequest.decode(value),
    responseSerialize: (value: Function) =>
      Buffer.from(Function.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Function.decode(value),
  },
  /** Retrieves the list of functions in the specified folder. */
  list: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListFunctionsRequest) =>
      Buffer.from(ListFunctionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListFunctionsRequest.decode(value),
    responseSerialize: (value: ListFunctionsResponse) =>
      Buffer.from(ListFunctionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListFunctionsResponse.decode(value),
  },
  /** Creates a function in the specified folder. */
  create: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateFunctionRequest) =>
      Buffer.from(CreateFunctionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateFunctionRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified function. */
  update: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateFunctionRequest) =>
      Buffer.from(UpdateFunctionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateFunctionRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified function. */
  delete: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteFunctionRequest) =>
      Buffer.from(DeleteFunctionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteFunctionRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Returns the specified version of a function.
   *
   * To get the list of available version, make a [ListVersions] request.
   */
  getVersion: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/GetVersion",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetFunctionVersionRequest) =>
      Buffer.from(GetFunctionVersionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetFunctionVersionRequest.decode(value),
    responseSerialize: (value: Version) =>
      Buffer.from(Version.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Version.decode(value),
  },
  /**
   * Returns all versions with the specified tag.
   *
   * To get the list of all available versions, make a [ListVersions] request.
   */
  getVersionByTag: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/GetVersionByTag",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetFunctionVersionByTagRequest) =>
      Buffer.from(GetFunctionVersionByTagRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetFunctionVersionByTagRequest.decode(value),
    responseSerialize: (value: Version) =>
      Buffer.from(Version.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Version.decode(value),
  },
  /**
   * Retrieves the list of versions for the specified function, or of all function versions
   * in the specified folder.
   */
  listVersions: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListVersions",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListFunctionsVersionsRequest) =>
      Buffer.from(ListFunctionsVersionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListFunctionsVersionsRequest.decode(value),
    responseSerialize: (value: ListFunctionsVersionsResponse) =>
      Buffer.from(ListFunctionsVersionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListFunctionsVersionsResponse.decode(value),
  },
  /**
   * Deletes the specified version of a function.
   *
   * NOTE: old untagged function versions are deleted automatically.
   */
  deleteVersion: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/DeleteVersion",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteFunctionVersionRequest) =>
      Buffer.from(DeleteFunctionVersionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteFunctionVersionRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Set a tag for the specified version of a function. */
  setTag: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/SetTag",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetFunctionTagRequest) =>
      Buffer.from(SetFunctionTagRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetFunctionTagRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Remove a tag from the specified version of a function. */
  removeTag: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/RemoveTag",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveFunctionTagRequest) =>
      Buffer.from(RemoveFunctionTagRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      RemoveFunctionTagRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns the log of tags assigned to versions of the specified function. */
  listTagHistory: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListTagHistory",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListFunctionTagHistoryRequest) =>
      Buffer.from(ListFunctionTagHistoryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListFunctionTagHistoryRequest.decode(value),
    responseSerialize: (value: ListFunctionTagHistoryResponse) =>
      Buffer.from(ListFunctionTagHistoryResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListFunctionTagHistoryResponse.decode(value),
  },
  /** Creates a version for the specified function. */
  createVersion: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/CreateVersion",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateFunctionVersionRequest) =>
      Buffer.from(CreateFunctionVersionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateFunctionVersionRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists available runtime environments for the specified function. */
  listRuntimes: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListRuntimes",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListRuntimesRequest) =>
      Buffer.from(ListRuntimesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListRuntimesRequest.decode(value),
    responseSerialize: (value: ListRuntimesResponse) =>
      Buffer.from(ListRuntimesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListRuntimesResponse.decode(value),
  },
  /** Lists operations for the specified function. */
  listOperations: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListFunctionOperationsRequest) =>
      Buffer.from(ListFunctionOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListFunctionOperationsRequest.decode(value),
    responseSerialize: (value: ListFunctionOperationsResponse) =>
      Buffer.from(ListFunctionOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListFunctionOperationsResponse.decode(value),
  },
  /** Lists existing access bindings for the specified function. */
  listAccessBindings: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListAccessBindings",
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
  /** Sets access bindings for the function. */
  setAccessBindings: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/SetAccessBindings",
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
  /** Updates access bindings for the specified function. */
  updateAccessBindings: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/UpdateAccessBindings",
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
  /** Lists existing scaling policies for specified function */
  listScalingPolicies: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListScalingPolicies",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListScalingPoliciesRequest) =>
      Buffer.from(ListScalingPoliciesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListScalingPoliciesRequest.decode(value),
    responseSerialize: (value: ListScalingPoliciesResponse) =>
      Buffer.from(ListScalingPoliciesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListScalingPoliciesResponse.decode(value),
  },
  /** Set scaling policy for specified function and tag */
  setScalingPolicy: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/SetScalingPolicy",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetScalingPolicyRequest) =>
      Buffer.from(SetScalingPolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      SetScalingPolicyRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Remove scaling policy for specified function and tag */
  removeScalingPolicy: {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/RemoveScalingPolicy",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveScalingPolicyRequest) =>
      Buffer.from(RemoveScalingPolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      RemoveScalingPolicyRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface FunctionServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified function.
   *
   * To get the list of all available functions, make a [List] request.
   */
  get: handleUnaryCall<GetFunctionRequest, Function>;
  /** Retrieves the list of functions in the specified folder. */
  list: handleUnaryCall<ListFunctionsRequest, ListFunctionsResponse>;
  /** Creates a function in the specified folder. */
  create: handleUnaryCall<CreateFunctionRequest, Operation>;
  /** Updates the specified function. */
  update: handleUnaryCall<UpdateFunctionRequest, Operation>;
  /** Deletes the specified function. */
  delete: handleUnaryCall<DeleteFunctionRequest, Operation>;
  /**
   * Returns the specified version of a function.
   *
   * To get the list of available version, make a [ListVersions] request.
   */
  getVersion: handleUnaryCall<GetFunctionVersionRequest, Version>;
  /**
   * Returns all versions with the specified tag.
   *
   * To get the list of all available versions, make a [ListVersions] request.
   */
  getVersionByTag: handleUnaryCall<GetFunctionVersionByTagRequest, Version>;
  /**
   * Retrieves the list of versions for the specified function, or of all function versions
   * in the specified folder.
   */
  listVersions: handleUnaryCall<
    ListFunctionsVersionsRequest,
    ListFunctionsVersionsResponse
  >;
  /**
   * Deletes the specified version of a function.
   *
   * NOTE: old untagged function versions are deleted automatically.
   */
  deleteVersion: handleUnaryCall<DeleteFunctionVersionRequest, Operation>;
  /** Set a tag for the specified version of a function. */
  setTag: handleUnaryCall<SetFunctionTagRequest, Operation>;
  /** Remove a tag from the specified version of a function. */
  removeTag: handleUnaryCall<RemoveFunctionTagRequest, Operation>;
  /** Returns the log of tags assigned to versions of the specified function. */
  listTagHistory: handleUnaryCall<
    ListFunctionTagHistoryRequest,
    ListFunctionTagHistoryResponse
  >;
  /** Creates a version for the specified function. */
  createVersion: handleUnaryCall<CreateFunctionVersionRequest, Operation>;
  /** Lists available runtime environments for the specified function. */
  listRuntimes: handleUnaryCall<ListRuntimesRequest, ListRuntimesResponse>;
  /** Lists operations for the specified function. */
  listOperations: handleUnaryCall<
    ListFunctionOperationsRequest,
    ListFunctionOperationsResponse
  >;
  /** Lists existing access bindings for the specified function. */
  listAccessBindings: handleUnaryCall<
    ListAccessBindingsRequest,
    ListAccessBindingsResponse
  >;
  /** Sets access bindings for the function. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the specified function. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
  /** Lists existing scaling policies for specified function */
  listScalingPolicies: handleUnaryCall<
    ListScalingPoliciesRequest,
    ListScalingPoliciesResponse
  >;
  /** Set scaling policy for specified function and tag */
  setScalingPolicy: handleUnaryCall<SetScalingPolicyRequest, Operation>;
  /** Remove scaling policy for specified function and tag */
  removeScalingPolicy: handleUnaryCall<RemoveScalingPolicyRequest, Operation>;
}

export interface FunctionServiceClient extends Client {
  /**
   * Returns the specified function.
   *
   * To get the list of all available functions, make a [List] request.
   */
  get(
    request: GetFunctionRequest,
    callback: (error: ServiceError | null, response: Function) => void
  ): ClientUnaryCall;
  get(
    request: GetFunctionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Function) => void
  ): ClientUnaryCall;
  get(
    request: GetFunctionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Function) => void
  ): ClientUnaryCall;
  /** Retrieves the list of functions in the specified folder. */
  list(
    request: ListFunctionsRequest,
    callback: (
      error: ServiceError | null,
      response: ListFunctionsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListFunctionsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListFunctionsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListFunctionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListFunctionsResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a function in the specified folder. */
  create(
    request: CreateFunctionRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateFunctionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateFunctionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified function. */
  update(
    request: UpdateFunctionRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateFunctionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateFunctionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified function. */
  delete(
    request: DeleteFunctionRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteFunctionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteFunctionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Returns the specified version of a function.
   *
   * To get the list of available version, make a [ListVersions] request.
   */
  getVersion(
    request: GetFunctionVersionRequest,
    callback: (error: ServiceError | null, response: Version) => void
  ): ClientUnaryCall;
  getVersion(
    request: GetFunctionVersionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Version) => void
  ): ClientUnaryCall;
  getVersion(
    request: GetFunctionVersionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Version) => void
  ): ClientUnaryCall;
  /**
   * Returns all versions with the specified tag.
   *
   * To get the list of all available versions, make a [ListVersions] request.
   */
  getVersionByTag(
    request: GetFunctionVersionByTagRequest,
    callback: (error: ServiceError | null, response: Version) => void
  ): ClientUnaryCall;
  getVersionByTag(
    request: GetFunctionVersionByTagRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Version) => void
  ): ClientUnaryCall;
  getVersionByTag(
    request: GetFunctionVersionByTagRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Version) => void
  ): ClientUnaryCall;
  /**
   * Retrieves the list of versions for the specified function, or of all function versions
   * in the specified folder.
   */
  listVersions(
    request: ListFunctionsVersionsRequest,
    callback: (
      error: ServiceError | null,
      response: ListFunctionsVersionsResponse
    ) => void
  ): ClientUnaryCall;
  listVersions(
    request: ListFunctionsVersionsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListFunctionsVersionsResponse
    ) => void
  ): ClientUnaryCall;
  listVersions(
    request: ListFunctionsVersionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListFunctionsVersionsResponse
    ) => void
  ): ClientUnaryCall;
  /**
   * Deletes the specified version of a function.
   *
   * NOTE: old untagged function versions are deleted automatically.
   */
  deleteVersion(
    request: DeleteFunctionVersionRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteVersion(
    request: DeleteFunctionVersionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteVersion(
    request: DeleteFunctionVersionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Set a tag for the specified version of a function. */
  setTag(
    request: SetFunctionTagRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  setTag(
    request: SetFunctionTagRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  setTag(
    request: SetFunctionTagRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Remove a tag from the specified version of a function. */
  removeTag(
    request: RemoveFunctionTagRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  removeTag(
    request: RemoveFunctionTagRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  removeTag(
    request: RemoveFunctionTagRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Returns the log of tags assigned to versions of the specified function. */
  listTagHistory(
    request: ListFunctionTagHistoryRequest,
    callback: (
      error: ServiceError | null,
      response: ListFunctionTagHistoryResponse
    ) => void
  ): ClientUnaryCall;
  listTagHistory(
    request: ListFunctionTagHistoryRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListFunctionTagHistoryResponse
    ) => void
  ): ClientUnaryCall;
  listTagHistory(
    request: ListFunctionTagHistoryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListFunctionTagHistoryResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a version for the specified function. */
  createVersion(
    request: CreateFunctionVersionRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  createVersion(
    request: CreateFunctionVersionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  createVersion(
    request: CreateFunctionVersionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists available runtime environments for the specified function. */
  listRuntimes(
    request: ListRuntimesRequest,
    callback: (
      error: ServiceError | null,
      response: ListRuntimesResponse
    ) => void
  ): ClientUnaryCall;
  listRuntimes(
    request: ListRuntimesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListRuntimesResponse
    ) => void
  ): ClientUnaryCall;
  listRuntimes(
    request: ListRuntimesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListRuntimesResponse
    ) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified function. */
  listOperations(
    request: ListFunctionOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListFunctionOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListFunctionOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListFunctionOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListFunctionOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListFunctionOperationsResponse
    ) => void
  ): ClientUnaryCall;
  /** Lists existing access bindings for the specified function. */
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
  /** Sets access bindings for the function. */
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
  /** Updates access bindings for the specified function. */
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
  /** Lists existing scaling policies for specified function */
  listScalingPolicies(
    request: ListScalingPoliciesRequest,
    callback: (
      error: ServiceError | null,
      response: ListScalingPoliciesResponse
    ) => void
  ): ClientUnaryCall;
  listScalingPolicies(
    request: ListScalingPoliciesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListScalingPoliciesResponse
    ) => void
  ): ClientUnaryCall;
  listScalingPolicies(
    request: ListScalingPoliciesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListScalingPoliciesResponse
    ) => void
  ): ClientUnaryCall;
  /** Set scaling policy for specified function and tag */
  setScalingPolicy(
    request: SetScalingPolicyRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  setScalingPolicy(
    request: SetScalingPolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  setScalingPolicy(
    request: SetScalingPolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Remove scaling policy for specified function and tag */
  removeScalingPolicy(
    request: RemoveScalingPolicyRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  removeScalingPolicy(
    request: RemoveScalingPolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  removeScalingPolicy(
    request: RemoveScalingPolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const FunctionServiceClient = makeGenericClientConstructor(
  FunctionServiceService,
  "yandex.cloud.serverless.functions.v1.FunctionService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): FunctionServiceClient;
  service: typeof FunctionServiceService;
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

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

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
