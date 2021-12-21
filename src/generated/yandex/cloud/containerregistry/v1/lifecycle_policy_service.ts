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
  LifecyclePolicy_Status,
  LifecyclePolicy,
  LifecycleRule,
  lifecyclePolicy_StatusFromJSON,
  lifecyclePolicy_StatusToJSON,
} from "../../../../yandex/cloud/containerregistry/v1/lifecycle_policy";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Image } from "../../../../yandex/cloud/containerregistry/v1/image";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.containerregistry.v1";

export interface GetLifecyclePolicyRequest {
  $type: "yandex.cloud.containerregistry.v1.GetLifecyclePolicyRequest";
  /** ID of the lifecycle policy. */
  lifecyclePolicyId: string;
}

export interface ListLifecyclePoliciesRequest {
  $type: "yandex.cloud.containerregistry.v1.ListLifecyclePoliciesRequest";
  /** ID of the lifecycle policy. */
  registryId: string | undefined;
  /** Repository of the lifecycle policy. */
  repositoryId: string | undefined;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns
   * a [ListLifecyclePoliciesResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListLifecyclePoliciesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters lifecycle policy resources listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [LifecyclePolicy.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
  /**
   * Sorting the list by [LifecyclePolicy.name], [LifecyclePolicy.created_at] and [LifecyclePolicy.status] fields.
   * The default sorting order is ascending.
   */
  orderBy: string;
}

export interface ListLifecyclePoliciesResponse {
  $type: "yandex.cloud.containerregistry.v1.ListLifecyclePoliciesResponse";
  /** List of lifecycle policies. */
  lifecyclePolicies: LifecyclePolicy[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListLifecyclePoliciesRequest.page_size], use `next_page_token` as the value
   * for the [ListLifecyclePoliciesRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateLifecyclePolicyRequest {
  $type: "yandex.cloud.containerregistry.v1.CreateLifecyclePolicyRequest";
  /** ID of the lifecycle policy repository. */
  repositoryId: string;
  /** Name of lifecycle policy. */
  name: string;
  /** Description of lifecycle policy. */
  description: string;
  /** Status of the lifecycle policy. */
  status: LifecyclePolicy_Status;
  /** The rules of the lifecycle policy. */
  rules: LifecycleRule[];
}

export interface UpdateLifecyclePolicyRequest {
  $type: "yandex.cloud.containerregistry.v1.UpdateLifecyclePolicyRequest";
  /** ID of the lifecycle policy. */
  lifecyclePolicyId: string;
  /** Field mask that specifies which fields of the lifecycle policy resource are going to be updated. */
  updateMask?: FieldMask;
  /** Name of lifecycle policy. */
  name: string;
  /** Description of lifecycle policy. */
  description: string;
  /** Status of the lifecycle policy. */
  status: LifecyclePolicy_Status;
  /** The rules of the lifecycle policy. */
  rules: LifecycleRule[];
}

export interface DeleteLifecyclePolicyRequest {
  $type: "yandex.cloud.containerregistry.v1.DeleteLifecyclePolicyRequest";
  /** ID of the lifecycle policy. */
  lifecyclePolicyId: string;
}

export interface CreateLifecyclePolicyMetadata {
  $type: "yandex.cloud.containerregistry.v1.CreateLifecyclePolicyMetadata";
  /** ID of the lifecycle policy resource that is being created. */
  lifecyclePolicyId: string;
}

export interface UpdateLifecyclePolicyMetadata {
  $type: "yandex.cloud.containerregistry.v1.UpdateLifecyclePolicyMetadata";
  /** ID of the lifecycle policy resource that is being updated. */
  lifecyclePolicyId: string;
}

export interface DeleteLifecyclePolicyMetadata {
  $type: "yandex.cloud.containerregistry.v1.DeleteLifecyclePolicyMetadata";
  /** ID of the lifecycle policy resource that is being deleted. */
  lifecyclePolicyId: string;
}

export interface DryRunLifecyclePolicyRequest {
  $type: "yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyRequest";
  /** ID of the lifecycle policy. */
  lifecyclePolicyId: string;
}

export interface DryRunLifecyclePolicyMetadata {
  $type: "yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyMetadata";
  /** ID of the dry run result of the lifecycle policy. */
  dryRunLifecyclePolicyResultId: string;
  /** ID of the lifecycle policy. */
  lifecyclePolicyId: string;
}

export interface DryRunLifecyclePolicyResult {
  $type: "yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyResult";
  /** ID of the dry run result of the lifecycle policy. */
  dryRunLifecyclePolicyResultId: string;
  /** ID of the lifecycle policy. */
  lifecyclePolicyId: string;
  /** Time of the getting result. */
  runAt?: Date;
  /** Count of affected images. */
  affectedImagesCount: number;
}

export interface GetDryRunLifecyclePolicyResultRequest {
  $type: "yandex.cloud.containerregistry.v1.GetDryRunLifecyclePolicyResultRequest";
  /** ID of the dry run result of the lifecycle policy. */
  dryRunLifecyclePolicyResultId: string;
}

export interface ListDryRunLifecyclePolicyResultsRequest {
  $type: "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultsRequest";
  /** ID of the lifecycle policy. */
  lifecyclePolicyId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns
   * a [ListDryRunLifecyclePolicyResultsResponse.next_page_token] that can be used to get
   * the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListDryRunLifecyclePolicyResultsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters dry run results listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [LifecyclePolicy.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
  /**
   * Sorting the list by [DryRunLifecyclePolicyResult.run_at] and [DryRunLifecyclePolicyResult.affected_images_count] fields.
   * The default sorting order is ascending.
   */
  orderBy: string;
}

export interface ListDryRunLifecyclePolicyResultsResponse {
  $type: "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultsResponse";
  /** List of results of dry runs of a lifecycle policy. */
  dryRunLifecyclePolicyResults: DryRunLifecyclePolicyResult[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListDryRunLifecyclePolicyResultsRequest.page_size] use `next_page_token` as the value
   * for the [ListDryRunLifecyclePolicyResultsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListDryRunLifecyclePolicyResultAffectedImagesRequest {
  $type: "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultAffectedImagesRequest";
  /** ID of the dry run result of the lifecycle policy */
  dryRunLifecyclePolicyResultId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListDryRunLifecyclePolicyResultAffectedImagesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListDryRunLifecyclePolicyResultAffectedImagesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters affected images listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [LifecyclePolicy.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
  /**
   * Sorting the list by [LifecyclePolicy.name] and [LifecyclePolicy.created_at] fields.
   * The default sorting order is ascending.
   */
  orderBy: string;
}

export interface ListDryRunLifecyclePolicyResultAffectedImagesResponse {
  $type: "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultAffectedImagesResponse";
  /** List of affected images. */
  affectedImages: Image[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListDryRunLifecyclePolicyResultAffectedImagesRequest.page_size], use `next_page_token` as the value
   * for the [ListDryRunLifecyclePolicyResultAffectedImagesRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

const baseGetLifecyclePolicyRequest: object = {
  $type: "yandex.cloud.containerregistry.v1.GetLifecyclePolicyRequest",
  lifecyclePolicyId: "",
};

export const GetLifecyclePolicyRequest = {
  $type: "yandex.cloud.containerregistry.v1.GetLifecyclePolicyRequest" as const,

  encode(
    message: GetLifecyclePolicyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lifecyclePolicyId !== "") {
      writer.uint32(10).string(message.lifecyclePolicyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLifecyclePolicyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetLifecyclePolicyRequest,
    } as GetLifecyclePolicyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lifecyclePolicyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLifecyclePolicyRequest {
    const message = {
      ...baseGetLifecyclePolicyRequest,
    } as GetLifecyclePolicyRequest;
    message.lifecyclePolicyId =
      object.lifecyclePolicyId !== undefined &&
      object.lifecyclePolicyId !== null
        ? String(object.lifecyclePolicyId)
        : "";
    return message;
  },

  toJSON(message: GetLifecyclePolicyRequest): unknown {
    const obj: any = {};
    message.lifecyclePolicyId !== undefined &&
      (obj.lifecyclePolicyId = message.lifecyclePolicyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetLifecyclePolicyRequest>, I>>(
    object: I
  ): GetLifecyclePolicyRequest {
    const message = {
      ...baseGetLifecyclePolicyRequest,
    } as GetLifecyclePolicyRequest;
    message.lifecyclePolicyId = object.lifecyclePolicyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  GetLifecyclePolicyRequest.$type,
  GetLifecyclePolicyRequest
);

const baseListLifecyclePoliciesRequest: object = {
  $type: "yandex.cloud.containerregistry.v1.ListLifecyclePoliciesRequest",
  pageSize: 0,
  pageToken: "",
  filter: "",
  orderBy: "",
};

export const ListLifecyclePoliciesRequest = {
  $type:
    "yandex.cloud.containerregistry.v1.ListLifecyclePoliciesRequest" as const,

  encode(
    message: ListLifecyclePoliciesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.registryId !== undefined) {
      writer.uint32(10).string(message.registryId);
    }
    if (message.repositoryId !== undefined) {
      writer.uint32(50).string(message.repositoryId);
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
    if (message.orderBy !== "") {
      writer.uint32(42).string(message.orderBy);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListLifecyclePoliciesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListLifecyclePoliciesRequest,
    } as ListLifecyclePoliciesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registryId = reader.string();
          break;
        case 6:
          message.repositoryId = reader.string();
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
        case 5:
          message.orderBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListLifecyclePoliciesRequest {
    const message = {
      ...baseListLifecyclePoliciesRequest,
    } as ListLifecyclePoliciesRequest;
    message.registryId =
      object.registryId !== undefined && object.registryId !== null
        ? String(object.registryId)
        : undefined;
    message.repositoryId =
      object.repositoryId !== undefined && object.repositoryId !== null
        ? String(object.repositoryId)
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
    message.orderBy =
      object.orderBy !== undefined && object.orderBy !== null
        ? String(object.orderBy)
        : "";
    return message;
  },

  toJSON(message: ListLifecyclePoliciesRequest): unknown {
    const obj: any = {};
    message.registryId !== undefined && (obj.registryId = message.registryId);
    message.repositoryId !== undefined &&
      (obj.repositoryId = message.repositoryId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    message.orderBy !== undefined && (obj.orderBy = message.orderBy);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListLifecyclePoliciesRequest>, I>>(
    object: I
  ): ListLifecyclePoliciesRequest {
    const message = {
      ...baseListLifecyclePoliciesRequest,
    } as ListLifecyclePoliciesRequest;
    message.registryId = object.registryId ?? undefined;
    message.repositoryId = object.repositoryId ?? undefined;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListLifecyclePoliciesRequest.$type,
  ListLifecyclePoliciesRequest
);

const baseListLifecyclePoliciesResponse: object = {
  $type: "yandex.cloud.containerregistry.v1.ListLifecyclePoliciesResponse",
  nextPageToken: "",
};

export const ListLifecyclePoliciesResponse = {
  $type:
    "yandex.cloud.containerregistry.v1.ListLifecyclePoliciesResponse" as const,

  encode(
    message: ListLifecyclePoliciesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.lifecyclePolicies) {
      LifecyclePolicy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListLifecyclePoliciesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListLifecyclePoliciesResponse,
    } as ListLifecyclePoliciesResponse;
    message.lifecyclePolicies = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lifecyclePolicies.push(
            LifecyclePolicy.decode(reader, reader.uint32())
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

  fromJSON(object: any): ListLifecyclePoliciesResponse {
    const message = {
      ...baseListLifecyclePoliciesResponse,
    } as ListLifecyclePoliciesResponse;
    message.lifecyclePolicies = (object.lifecyclePolicies ?? []).map((e: any) =>
      LifecyclePolicy.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListLifecyclePoliciesResponse): unknown {
    const obj: any = {};
    if (message.lifecyclePolicies) {
      obj.lifecyclePolicies = message.lifecyclePolicies.map((e) =>
        e ? LifecyclePolicy.toJSON(e) : undefined
      );
    } else {
      obj.lifecyclePolicies = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListLifecyclePoliciesResponse>, I>>(
    object: I
  ): ListLifecyclePoliciesResponse {
    const message = {
      ...baseListLifecyclePoliciesResponse,
    } as ListLifecyclePoliciesResponse;
    message.lifecyclePolicies =
      object.lifecyclePolicies?.map((e) => LifecyclePolicy.fromPartial(e)) ||
      [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListLifecyclePoliciesResponse.$type,
  ListLifecyclePoliciesResponse
);

const baseCreateLifecyclePolicyRequest: object = {
  $type: "yandex.cloud.containerregistry.v1.CreateLifecyclePolicyRequest",
  repositoryId: "",
  name: "",
  description: "",
  status: 0,
};

export const CreateLifecyclePolicyRequest = {
  $type:
    "yandex.cloud.containerregistry.v1.CreateLifecyclePolicyRequest" as const,

  encode(
    message: CreateLifecyclePolicyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.repositoryId !== "") {
      writer.uint32(10).string(message.repositoryId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    for (const v of message.rules) {
      LifecycleRule.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateLifecyclePolicyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateLifecyclePolicyRequest,
    } as CreateLifecyclePolicyRequest;
    message.rules = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.repositoryId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.rules.push(LifecycleRule.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateLifecyclePolicyRequest {
    const message = {
      ...baseCreateLifecyclePolicyRequest,
    } as CreateLifecyclePolicyRequest;
    message.repositoryId =
      object.repositoryId !== undefined && object.repositoryId !== null
        ? String(object.repositoryId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.status =
      object.status !== undefined && object.status !== null
        ? lifecyclePolicy_StatusFromJSON(object.status)
        : 0;
    message.rules = (object.rules ?? []).map((e: any) =>
      LifecycleRule.fromJSON(e)
    );
    return message;
  },

  toJSON(message: CreateLifecyclePolicyRequest): unknown {
    const obj: any = {};
    message.repositoryId !== undefined &&
      (obj.repositoryId = message.repositoryId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.status !== undefined &&
      (obj.status = lifecyclePolicy_StatusToJSON(message.status));
    if (message.rules) {
      obj.rules = message.rules.map((e) =>
        e ? LifecycleRule.toJSON(e) : undefined
      );
    } else {
      obj.rules = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateLifecyclePolicyRequest>, I>>(
    object: I
  ): CreateLifecyclePolicyRequest {
    const message = {
      ...baseCreateLifecyclePolicyRequest,
    } as CreateLifecyclePolicyRequest;
    message.repositoryId = object.repositoryId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.status = object.status ?? 0;
    message.rules =
      object.rules?.map((e) => LifecycleRule.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  CreateLifecyclePolicyRequest.$type,
  CreateLifecyclePolicyRequest
);

const baseUpdateLifecyclePolicyRequest: object = {
  $type: "yandex.cloud.containerregistry.v1.UpdateLifecyclePolicyRequest",
  lifecyclePolicyId: "",
  name: "",
  description: "",
  status: 0,
};

export const UpdateLifecyclePolicyRequest = {
  $type:
    "yandex.cloud.containerregistry.v1.UpdateLifecyclePolicyRequest" as const,

  encode(
    message: UpdateLifecyclePolicyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lifecyclePolicyId !== "") {
      writer.uint32(10).string(message.lifecyclePolicyId);
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
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    for (const v of message.rules) {
      LifecycleRule.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateLifecyclePolicyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateLifecyclePolicyRequest,
    } as UpdateLifecyclePolicyRequest;
    message.rules = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lifecyclePolicyId = reader.string();
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
          message.status = reader.int32() as any;
          break;
        case 6:
          message.rules.push(LifecycleRule.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateLifecyclePolicyRequest {
    const message = {
      ...baseUpdateLifecyclePolicyRequest,
    } as UpdateLifecyclePolicyRequest;
    message.lifecyclePolicyId =
      object.lifecyclePolicyId !== undefined &&
      object.lifecyclePolicyId !== null
        ? String(object.lifecyclePolicyId)
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
    message.status =
      object.status !== undefined && object.status !== null
        ? lifecyclePolicy_StatusFromJSON(object.status)
        : 0;
    message.rules = (object.rules ?? []).map((e: any) =>
      LifecycleRule.fromJSON(e)
    );
    return message;
  },

  toJSON(message: UpdateLifecyclePolicyRequest): unknown {
    const obj: any = {};
    message.lifecyclePolicyId !== undefined &&
      (obj.lifecyclePolicyId = message.lifecyclePolicyId);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.status !== undefined &&
      (obj.status = lifecyclePolicy_StatusToJSON(message.status));
    if (message.rules) {
      obj.rules = message.rules.map((e) =>
        e ? LifecycleRule.toJSON(e) : undefined
      );
    } else {
      obj.rules = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateLifecyclePolicyRequest>, I>>(
    object: I
  ): UpdateLifecyclePolicyRequest {
    const message = {
      ...baseUpdateLifecyclePolicyRequest,
    } as UpdateLifecyclePolicyRequest;
    message.lifecyclePolicyId = object.lifecyclePolicyId ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.status = object.status ?? 0;
    message.rules =
      object.rules?.map((e) => LifecycleRule.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  UpdateLifecyclePolicyRequest.$type,
  UpdateLifecyclePolicyRequest
);

const baseDeleteLifecyclePolicyRequest: object = {
  $type: "yandex.cloud.containerregistry.v1.DeleteLifecyclePolicyRequest",
  lifecyclePolicyId: "",
};

export const DeleteLifecyclePolicyRequest = {
  $type:
    "yandex.cloud.containerregistry.v1.DeleteLifecyclePolicyRequest" as const,

  encode(
    message: DeleteLifecyclePolicyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lifecyclePolicyId !== "") {
      writer.uint32(10).string(message.lifecyclePolicyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteLifecyclePolicyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteLifecyclePolicyRequest,
    } as DeleteLifecyclePolicyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lifecyclePolicyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteLifecyclePolicyRequest {
    const message = {
      ...baseDeleteLifecyclePolicyRequest,
    } as DeleteLifecyclePolicyRequest;
    message.lifecyclePolicyId =
      object.lifecyclePolicyId !== undefined &&
      object.lifecyclePolicyId !== null
        ? String(object.lifecyclePolicyId)
        : "";
    return message;
  },

  toJSON(message: DeleteLifecyclePolicyRequest): unknown {
    const obj: any = {};
    message.lifecyclePolicyId !== undefined &&
      (obj.lifecyclePolicyId = message.lifecyclePolicyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteLifecyclePolicyRequest>, I>>(
    object: I
  ): DeleteLifecyclePolicyRequest {
    const message = {
      ...baseDeleteLifecyclePolicyRequest,
    } as DeleteLifecyclePolicyRequest;
    message.lifecyclePolicyId = object.lifecyclePolicyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteLifecyclePolicyRequest.$type,
  DeleteLifecyclePolicyRequest
);

const baseCreateLifecyclePolicyMetadata: object = {
  $type: "yandex.cloud.containerregistry.v1.CreateLifecyclePolicyMetadata",
  lifecyclePolicyId: "",
};

export const CreateLifecyclePolicyMetadata = {
  $type:
    "yandex.cloud.containerregistry.v1.CreateLifecyclePolicyMetadata" as const,

  encode(
    message: CreateLifecyclePolicyMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lifecyclePolicyId !== "") {
      writer.uint32(10).string(message.lifecyclePolicyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateLifecyclePolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateLifecyclePolicyMetadata,
    } as CreateLifecyclePolicyMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lifecyclePolicyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateLifecyclePolicyMetadata {
    const message = {
      ...baseCreateLifecyclePolicyMetadata,
    } as CreateLifecyclePolicyMetadata;
    message.lifecyclePolicyId =
      object.lifecyclePolicyId !== undefined &&
      object.lifecyclePolicyId !== null
        ? String(object.lifecyclePolicyId)
        : "";
    return message;
  },

  toJSON(message: CreateLifecyclePolicyMetadata): unknown {
    const obj: any = {};
    message.lifecyclePolicyId !== undefined &&
      (obj.lifecyclePolicyId = message.lifecyclePolicyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateLifecyclePolicyMetadata>, I>>(
    object: I
  ): CreateLifecyclePolicyMetadata {
    const message = {
      ...baseCreateLifecyclePolicyMetadata,
    } as CreateLifecyclePolicyMetadata;
    message.lifecyclePolicyId = object.lifecyclePolicyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateLifecyclePolicyMetadata.$type,
  CreateLifecyclePolicyMetadata
);

const baseUpdateLifecyclePolicyMetadata: object = {
  $type: "yandex.cloud.containerregistry.v1.UpdateLifecyclePolicyMetadata",
  lifecyclePolicyId: "",
};

export const UpdateLifecyclePolicyMetadata = {
  $type:
    "yandex.cloud.containerregistry.v1.UpdateLifecyclePolicyMetadata" as const,

  encode(
    message: UpdateLifecyclePolicyMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lifecyclePolicyId !== "") {
      writer.uint32(10).string(message.lifecyclePolicyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateLifecyclePolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateLifecyclePolicyMetadata,
    } as UpdateLifecyclePolicyMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lifecyclePolicyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateLifecyclePolicyMetadata {
    const message = {
      ...baseUpdateLifecyclePolicyMetadata,
    } as UpdateLifecyclePolicyMetadata;
    message.lifecyclePolicyId =
      object.lifecyclePolicyId !== undefined &&
      object.lifecyclePolicyId !== null
        ? String(object.lifecyclePolicyId)
        : "";
    return message;
  },

  toJSON(message: UpdateLifecyclePolicyMetadata): unknown {
    const obj: any = {};
    message.lifecyclePolicyId !== undefined &&
      (obj.lifecyclePolicyId = message.lifecyclePolicyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateLifecyclePolicyMetadata>, I>>(
    object: I
  ): UpdateLifecyclePolicyMetadata {
    const message = {
      ...baseUpdateLifecyclePolicyMetadata,
    } as UpdateLifecyclePolicyMetadata;
    message.lifecyclePolicyId = object.lifecyclePolicyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateLifecyclePolicyMetadata.$type,
  UpdateLifecyclePolicyMetadata
);

const baseDeleteLifecyclePolicyMetadata: object = {
  $type: "yandex.cloud.containerregistry.v1.DeleteLifecyclePolicyMetadata",
  lifecyclePolicyId: "",
};

export const DeleteLifecyclePolicyMetadata = {
  $type:
    "yandex.cloud.containerregistry.v1.DeleteLifecyclePolicyMetadata" as const,

  encode(
    message: DeleteLifecyclePolicyMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lifecyclePolicyId !== "") {
      writer.uint32(10).string(message.lifecyclePolicyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteLifecyclePolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteLifecyclePolicyMetadata,
    } as DeleteLifecyclePolicyMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lifecyclePolicyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteLifecyclePolicyMetadata {
    const message = {
      ...baseDeleteLifecyclePolicyMetadata,
    } as DeleteLifecyclePolicyMetadata;
    message.lifecyclePolicyId =
      object.lifecyclePolicyId !== undefined &&
      object.lifecyclePolicyId !== null
        ? String(object.lifecyclePolicyId)
        : "";
    return message;
  },

  toJSON(message: DeleteLifecyclePolicyMetadata): unknown {
    const obj: any = {};
    message.lifecyclePolicyId !== undefined &&
      (obj.lifecyclePolicyId = message.lifecyclePolicyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteLifecyclePolicyMetadata>, I>>(
    object: I
  ): DeleteLifecyclePolicyMetadata {
    const message = {
      ...baseDeleteLifecyclePolicyMetadata,
    } as DeleteLifecyclePolicyMetadata;
    message.lifecyclePolicyId = object.lifecyclePolicyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteLifecyclePolicyMetadata.$type,
  DeleteLifecyclePolicyMetadata
);

const baseDryRunLifecyclePolicyRequest: object = {
  $type: "yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyRequest",
  lifecyclePolicyId: "",
};

export const DryRunLifecyclePolicyRequest = {
  $type:
    "yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyRequest" as const,

  encode(
    message: DryRunLifecyclePolicyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lifecyclePolicyId !== "") {
      writer.uint32(10).string(message.lifecyclePolicyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DryRunLifecyclePolicyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDryRunLifecyclePolicyRequest,
    } as DryRunLifecyclePolicyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lifecyclePolicyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DryRunLifecyclePolicyRequest {
    const message = {
      ...baseDryRunLifecyclePolicyRequest,
    } as DryRunLifecyclePolicyRequest;
    message.lifecyclePolicyId =
      object.lifecyclePolicyId !== undefined &&
      object.lifecyclePolicyId !== null
        ? String(object.lifecyclePolicyId)
        : "";
    return message;
  },

  toJSON(message: DryRunLifecyclePolicyRequest): unknown {
    const obj: any = {};
    message.lifecyclePolicyId !== undefined &&
      (obj.lifecyclePolicyId = message.lifecyclePolicyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DryRunLifecyclePolicyRequest>, I>>(
    object: I
  ): DryRunLifecyclePolicyRequest {
    const message = {
      ...baseDryRunLifecyclePolicyRequest,
    } as DryRunLifecyclePolicyRequest;
    message.lifecyclePolicyId = object.lifecyclePolicyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DryRunLifecyclePolicyRequest.$type,
  DryRunLifecyclePolicyRequest
);

const baseDryRunLifecyclePolicyMetadata: object = {
  $type: "yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyMetadata",
  dryRunLifecyclePolicyResultId: "",
  lifecyclePolicyId: "",
};

export const DryRunLifecyclePolicyMetadata = {
  $type:
    "yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyMetadata" as const,

  encode(
    message: DryRunLifecyclePolicyMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dryRunLifecyclePolicyResultId !== "") {
      writer.uint32(10).string(message.dryRunLifecyclePolicyResultId);
    }
    if (message.lifecyclePolicyId !== "") {
      writer.uint32(18).string(message.lifecyclePolicyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DryRunLifecyclePolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDryRunLifecyclePolicyMetadata,
    } as DryRunLifecyclePolicyMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dryRunLifecyclePolicyResultId = reader.string();
          break;
        case 2:
          message.lifecyclePolicyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DryRunLifecyclePolicyMetadata {
    const message = {
      ...baseDryRunLifecyclePolicyMetadata,
    } as DryRunLifecyclePolicyMetadata;
    message.dryRunLifecyclePolicyResultId =
      object.dryRunLifecyclePolicyResultId !== undefined &&
      object.dryRunLifecyclePolicyResultId !== null
        ? String(object.dryRunLifecyclePolicyResultId)
        : "";
    message.lifecyclePolicyId =
      object.lifecyclePolicyId !== undefined &&
      object.lifecyclePolicyId !== null
        ? String(object.lifecyclePolicyId)
        : "";
    return message;
  },

  toJSON(message: DryRunLifecyclePolicyMetadata): unknown {
    const obj: any = {};
    message.dryRunLifecyclePolicyResultId !== undefined &&
      (obj.dryRunLifecyclePolicyResultId =
        message.dryRunLifecyclePolicyResultId);
    message.lifecyclePolicyId !== undefined &&
      (obj.lifecyclePolicyId = message.lifecyclePolicyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DryRunLifecyclePolicyMetadata>, I>>(
    object: I
  ): DryRunLifecyclePolicyMetadata {
    const message = {
      ...baseDryRunLifecyclePolicyMetadata,
    } as DryRunLifecyclePolicyMetadata;
    message.dryRunLifecyclePolicyResultId =
      object.dryRunLifecyclePolicyResultId ?? "";
    message.lifecyclePolicyId = object.lifecyclePolicyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DryRunLifecyclePolicyMetadata.$type,
  DryRunLifecyclePolicyMetadata
);

const baseDryRunLifecyclePolicyResult: object = {
  $type: "yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyResult",
  dryRunLifecyclePolicyResultId: "",
  lifecyclePolicyId: "",
  affectedImagesCount: 0,
};

export const DryRunLifecyclePolicyResult = {
  $type:
    "yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyResult" as const,

  encode(
    message: DryRunLifecyclePolicyResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dryRunLifecyclePolicyResultId !== "") {
      writer.uint32(10).string(message.dryRunLifecyclePolicyResultId);
    }
    if (message.lifecyclePolicyId !== "") {
      writer.uint32(18).string(message.lifecyclePolicyId);
    }
    if (message.runAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.runAt),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.affectedImagesCount !== 0) {
      writer.uint32(32).int64(message.affectedImagesCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DryRunLifecyclePolicyResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDryRunLifecyclePolicyResult,
    } as DryRunLifecyclePolicyResult;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dryRunLifecyclePolicyResultId = reader.string();
          break;
        case 2:
          message.lifecyclePolicyId = reader.string();
          break;
        case 3:
          message.runAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.affectedImagesCount = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DryRunLifecyclePolicyResult {
    const message = {
      ...baseDryRunLifecyclePolicyResult,
    } as DryRunLifecyclePolicyResult;
    message.dryRunLifecyclePolicyResultId =
      object.dryRunLifecyclePolicyResultId !== undefined &&
      object.dryRunLifecyclePolicyResultId !== null
        ? String(object.dryRunLifecyclePolicyResultId)
        : "";
    message.lifecyclePolicyId =
      object.lifecyclePolicyId !== undefined &&
      object.lifecyclePolicyId !== null
        ? String(object.lifecyclePolicyId)
        : "";
    message.runAt =
      object.runAt !== undefined && object.runAt !== null
        ? fromJsonTimestamp(object.runAt)
        : undefined;
    message.affectedImagesCount =
      object.affectedImagesCount !== undefined &&
      object.affectedImagesCount !== null
        ? Number(object.affectedImagesCount)
        : 0;
    return message;
  },

  toJSON(message: DryRunLifecyclePolicyResult): unknown {
    const obj: any = {};
    message.dryRunLifecyclePolicyResultId !== undefined &&
      (obj.dryRunLifecyclePolicyResultId =
        message.dryRunLifecyclePolicyResultId);
    message.lifecyclePolicyId !== undefined &&
      (obj.lifecyclePolicyId = message.lifecyclePolicyId);
    message.runAt !== undefined && (obj.runAt = message.runAt.toISOString());
    message.affectedImagesCount !== undefined &&
      (obj.affectedImagesCount = Math.round(message.affectedImagesCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DryRunLifecyclePolicyResult>, I>>(
    object: I
  ): DryRunLifecyclePolicyResult {
    const message = {
      ...baseDryRunLifecyclePolicyResult,
    } as DryRunLifecyclePolicyResult;
    message.dryRunLifecyclePolicyResultId =
      object.dryRunLifecyclePolicyResultId ?? "";
    message.lifecyclePolicyId = object.lifecyclePolicyId ?? "";
    message.runAt = object.runAt ?? undefined;
    message.affectedImagesCount = object.affectedImagesCount ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  DryRunLifecyclePolicyResult.$type,
  DryRunLifecyclePolicyResult
);

const baseGetDryRunLifecyclePolicyResultRequest: object = {
  $type:
    "yandex.cloud.containerregistry.v1.GetDryRunLifecyclePolicyResultRequest",
  dryRunLifecyclePolicyResultId: "",
};

export const GetDryRunLifecyclePolicyResultRequest = {
  $type:
    "yandex.cloud.containerregistry.v1.GetDryRunLifecyclePolicyResultRequest" as const,

  encode(
    message: GetDryRunLifecyclePolicyResultRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dryRunLifecyclePolicyResultId !== "") {
      writer.uint32(10).string(message.dryRunLifecyclePolicyResultId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetDryRunLifecyclePolicyResultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetDryRunLifecyclePolicyResultRequest,
    } as GetDryRunLifecyclePolicyResultRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dryRunLifecyclePolicyResultId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetDryRunLifecyclePolicyResultRequest {
    const message = {
      ...baseGetDryRunLifecyclePolicyResultRequest,
    } as GetDryRunLifecyclePolicyResultRequest;
    message.dryRunLifecyclePolicyResultId =
      object.dryRunLifecyclePolicyResultId !== undefined &&
      object.dryRunLifecyclePolicyResultId !== null
        ? String(object.dryRunLifecyclePolicyResultId)
        : "";
    return message;
  },

  toJSON(message: GetDryRunLifecyclePolicyResultRequest): unknown {
    const obj: any = {};
    message.dryRunLifecyclePolicyResultId !== undefined &&
      (obj.dryRunLifecyclePolicyResultId =
        message.dryRunLifecyclePolicyResultId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetDryRunLifecyclePolicyResultRequest>, I>
  >(object: I): GetDryRunLifecyclePolicyResultRequest {
    const message = {
      ...baseGetDryRunLifecyclePolicyResultRequest,
    } as GetDryRunLifecyclePolicyResultRequest;
    message.dryRunLifecyclePolicyResultId =
      object.dryRunLifecyclePolicyResultId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  GetDryRunLifecyclePolicyResultRequest.$type,
  GetDryRunLifecyclePolicyResultRequest
);

const baseListDryRunLifecyclePolicyResultsRequest: object = {
  $type:
    "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultsRequest",
  lifecyclePolicyId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
  orderBy: "",
};

export const ListDryRunLifecyclePolicyResultsRequest = {
  $type:
    "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultsRequest" as const,

  encode(
    message: ListDryRunLifecyclePolicyResultsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lifecyclePolicyId !== "") {
      writer.uint32(10).string(message.lifecyclePolicyId);
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
    if (message.orderBy !== "") {
      writer.uint32(42).string(message.orderBy);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListDryRunLifecyclePolicyResultsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDryRunLifecyclePolicyResultsRequest,
    } as ListDryRunLifecyclePolicyResultsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lifecyclePolicyId = reader.string();
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
        case 5:
          message.orderBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListDryRunLifecyclePolicyResultsRequest {
    const message = {
      ...baseListDryRunLifecyclePolicyResultsRequest,
    } as ListDryRunLifecyclePolicyResultsRequest;
    message.lifecyclePolicyId =
      object.lifecyclePolicyId !== undefined &&
      object.lifecyclePolicyId !== null
        ? String(object.lifecyclePolicyId)
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
    message.orderBy =
      object.orderBy !== undefined && object.orderBy !== null
        ? String(object.orderBy)
        : "";
    return message;
  },

  toJSON(message: ListDryRunLifecyclePolicyResultsRequest): unknown {
    const obj: any = {};
    message.lifecyclePolicyId !== undefined &&
      (obj.lifecyclePolicyId = message.lifecyclePolicyId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    message.orderBy !== undefined && (obj.orderBy = message.orderBy);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListDryRunLifecyclePolicyResultsRequest>, I>
  >(object: I): ListDryRunLifecyclePolicyResultsRequest {
    const message = {
      ...baseListDryRunLifecyclePolicyResultsRequest,
    } as ListDryRunLifecyclePolicyResultsRequest;
    message.lifecyclePolicyId = object.lifecyclePolicyId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListDryRunLifecyclePolicyResultsRequest.$type,
  ListDryRunLifecyclePolicyResultsRequest
);

const baseListDryRunLifecyclePolicyResultsResponse: object = {
  $type:
    "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultsResponse",
  nextPageToken: "",
};

export const ListDryRunLifecyclePolicyResultsResponse = {
  $type:
    "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultsResponse" as const,

  encode(
    message: ListDryRunLifecyclePolicyResultsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.dryRunLifecyclePolicyResults) {
      DryRunLifecyclePolicyResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListDryRunLifecyclePolicyResultsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDryRunLifecyclePolicyResultsResponse,
    } as ListDryRunLifecyclePolicyResultsResponse;
    message.dryRunLifecyclePolicyResults = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dryRunLifecyclePolicyResults.push(
            DryRunLifecyclePolicyResult.decode(reader, reader.uint32())
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

  fromJSON(object: any): ListDryRunLifecyclePolicyResultsResponse {
    const message = {
      ...baseListDryRunLifecyclePolicyResultsResponse,
    } as ListDryRunLifecyclePolicyResultsResponse;
    message.dryRunLifecyclePolicyResults = (
      object.dryRunLifecyclePolicyResults ?? []
    ).map((e: any) => DryRunLifecyclePolicyResult.fromJSON(e));
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListDryRunLifecyclePolicyResultsResponse): unknown {
    const obj: any = {};
    if (message.dryRunLifecyclePolicyResults) {
      obj.dryRunLifecyclePolicyResults =
        message.dryRunLifecyclePolicyResults.map((e) =>
          e ? DryRunLifecyclePolicyResult.toJSON(e) : undefined
        );
    } else {
      obj.dryRunLifecyclePolicyResults = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListDryRunLifecyclePolicyResultsResponse>, I>
  >(object: I): ListDryRunLifecyclePolicyResultsResponse {
    const message = {
      ...baseListDryRunLifecyclePolicyResultsResponse,
    } as ListDryRunLifecyclePolicyResultsResponse;
    message.dryRunLifecyclePolicyResults =
      object.dryRunLifecyclePolicyResults?.map((e) =>
        DryRunLifecyclePolicyResult.fromPartial(e)
      ) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListDryRunLifecyclePolicyResultsResponse.$type,
  ListDryRunLifecyclePolicyResultsResponse
);

const baseListDryRunLifecyclePolicyResultAffectedImagesRequest: object = {
  $type:
    "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultAffectedImagesRequest",
  dryRunLifecyclePolicyResultId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
  orderBy: "",
};

export const ListDryRunLifecyclePolicyResultAffectedImagesRequest = {
  $type:
    "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultAffectedImagesRequest" as const,

  encode(
    message: ListDryRunLifecyclePolicyResultAffectedImagesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dryRunLifecyclePolicyResultId !== "") {
      writer.uint32(10).string(message.dryRunLifecyclePolicyResultId);
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
    if (message.orderBy !== "") {
      writer.uint32(42).string(message.orderBy);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListDryRunLifecyclePolicyResultAffectedImagesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDryRunLifecyclePolicyResultAffectedImagesRequest,
    } as ListDryRunLifecyclePolicyResultAffectedImagesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dryRunLifecyclePolicyResultId = reader.string();
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
        case 5:
          message.orderBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListDryRunLifecyclePolicyResultAffectedImagesRequest {
    const message = {
      ...baseListDryRunLifecyclePolicyResultAffectedImagesRequest,
    } as ListDryRunLifecyclePolicyResultAffectedImagesRequest;
    message.dryRunLifecyclePolicyResultId =
      object.dryRunLifecyclePolicyResultId !== undefined &&
      object.dryRunLifecyclePolicyResultId !== null
        ? String(object.dryRunLifecyclePolicyResultId)
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
    message.orderBy =
      object.orderBy !== undefined && object.orderBy !== null
        ? String(object.orderBy)
        : "";
    return message;
  },

  toJSON(
    message: ListDryRunLifecyclePolicyResultAffectedImagesRequest
  ): unknown {
    const obj: any = {};
    message.dryRunLifecyclePolicyResultId !== undefined &&
      (obj.dryRunLifecyclePolicyResultId =
        message.dryRunLifecyclePolicyResultId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    message.orderBy !== undefined && (obj.orderBy = message.orderBy);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ListDryRunLifecyclePolicyResultAffectedImagesRequest>,
      I
    >
  >(object: I): ListDryRunLifecyclePolicyResultAffectedImagesRequest {
    const message = {
      ...baseListDryRunLifecyclePolicyResultAffectedImagesRequest,
    } as ListDryRunLifecyclePolicyResultAffectedImagesRequest;
    message.dryRunLifecyclePolicyResultId =
      object.dryRunLifecyclePolicyResultId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListDryRunLifecyclePolicyResultAffectedImagesRequest.$type,
  ListDryRunLifecyclePolicyResultAffectedImagesRequest
);

const baseListDryRunLifecyclePolicyResultAffectedImagesResponse: object = {
  $type:
    "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultAffectedImagesResponse",
  nextPageToken: "",
};

export const ListDryRunLifecyclePolicyResultAffectedImagesResponse = {
  $type:
    "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultAffectedImagesResponse" as const,

  encode(
    message: ListDryRunLifecyclePolicyResultAffectedImagesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.affectedImages) {
      Image.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListDryRunLifecyclePolicyResultAffectedImagesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDryRunLifecyclePolicyResultAffectedImagesResponse,
    } as ListDryRunLifecyclePolicyResultAffectedImagesResponse;
    message.affectedImages = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.affectedImages.push(Image.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListDryRunLifecyclePolicyResultAffectedImagesResponse {
    const message = {
      ...baseListDryRunLifecyclePolicyResultAffectedImagesResponse,
    } as ListDryRunLifecyclePolicyResultAffectedImagesResponse;
    message.affectedImages = (object.affectedImages ?? []).map((e: any) =>
      Image.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(
    message: ListDryRunLifecyclePolicyResultAffectedImagesResponse
  ): unknown {
    const obj: any = {};
    if (message.affectedImages) {
      obj.affectedImages = message.affectedImages.map((e) =>
        e ? Image.toJSON(e) : undefined
      );
    } else {
      obj.affectedImages = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ListDryRunLifecyclePolicyResultAffectedImagesResponse>,
      I
    >
  >(object: I): ListDryRunLifecyclePolicyResultAffectedImagesResponse {
    const message = {
      ...baseListDryRunLifecyclePolicyResultAffectedImagesResponse,
    } as ListDryRunLifecyclePolicyResultAffectedImagesResponse;
    message.affectedImages =
      object.affectedImages?.map((e) => Image.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListDryRunLifecyclePolicyResultAffectedImagesResponse.$type,
  ListDryRunLifecyclePolicyResultAffectedImagesResponse
);

/** A set of methods for managing Lifecycle policy resources. */
export const LifecyclePolicyServiceService = {
  /**
   * Returns the specified lifecycle policy.
   *
   * To get the list of all available lifecycle policies, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetLifecyclePolicyRequest) =>
      Buffer.from(GetLifecyclePolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetLifecyclePolicyRequest.decode(value),
    responseSerialize: (value: LifecyclePolicy) =>
      Buffer.from(LifecyclePolicy.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LifecyclePolicy.decode(value),
  },
  /** Retrieves the list of lifecycle policies in the specified repository. */
  list: {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListLifecyclePoliciesRequest) =>
      Buffer.from(ListLifecyclePoliciesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListLifecyclePoliciesRequest.decode(value),
    responseSerialize: (value: ListLifecyclePoliciesResponse) =>
      Buffer.from(ListLifecyclePoliciesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListLifecyclePoliciesResponse.decode(value),
  },
  /** Creates a lifecycle policy in the specified repository. */
  create: {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateLifecyclePolicyRequest) =>
      Buffer.from(CreateLifecyclePolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateLifecyclePolicyRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified lifecycle policy. */
  update: {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateLifecyclePolicyRequest) =>
      Buffer.from(UpdateLifecyclePolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateLifecyclePolicyRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified lifecycle policy. */
  delete: {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteLifecyclePolicyRequest) =>
      Buffer.from(DeleteLifecyclePolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteLifecyclePolicyRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Creates a request of a dry run of the lifecycle policy. */
  dryRun: {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/DryRun",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DryRunLifecyclePolicyRequest) =>
      Buffer.from(DryRunLifecyclePolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DryRunLifecyclePolicyRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns the dry run result of the specified lifecycle policy. */
  getDryRunResult: {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/GetDryRunResult",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetDryRunLifecyclePolicyResultRequest) =>
      Buffer.from(GetDryRunLifecyclePolicyResultRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetDryRunLifecyclePolicyResultRequest.decode(value),
    responseSerialize: (value: DryRunLifecyclePolicyResult) =>
      Buffer.from(DryRunLifecyclePolicyResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      DryRunLifecyclePolicyResult.decode(value),
  },
  /** Retrieves the list of the dry run results. */
  listDryRunResults: {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/ListDryRunResults",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDryRunLifecyclePolicyResultsRequest) =>
      Buffer.from(
        ListDryRunLifecyclePolicyResultsRequest.encode(value).finish()
      ),
    requestDeserialize: (value: Buffer) =>
      ListDryRunLifecyclePolicyResultsRequest.decode(value),
    responseSerialize: (value: ListDryRunLifecyclePolicyResultsResponse) =>
      Buffer.from(
        ListDryRunLifecyclePolicyResultsResponse.encode(value).finish()
      ),
    responseDeserialize: (value: Buffer) =>
      ListDryRunLifecyclePolicyResultsResponse.decode(value),
  },
  /** Retrieves the list of the affected images. */
  listDryRunResultAffectedImages: {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/ListDryRunResultAffectedImages",
    requestStream: false,
    responseStream: false,
    requestSerialize: (
      value: ListDryRunLifecyclePolicyResultAffectedImagesRequest
    ) =>
      Buffer.from(
        ListDryRunLifecyclePolicyResultAffectedImagesRequest.encode(
          value
        ).finish()
      ),
    requestDeserialize: (value: Buffer) =>
      ListDryRunLifecyclePolicyResultAffectedImagesRequest.decode(value),
    responseSerialize: (
      value: ListDryRunLifecyclePolicyResultAffectedImagesResponse
    ) =>
      Buffer.from(
        ListDryRunLifecyclePolicyResultAffectedImagesResponse.encode(
          value
        ).finish()
      ),
    responseDeserialize: (value: Buffer) =>
      ListDryRunLifecyclePolicyResultAffectedImagesResponse.decode(value),
  },
} as const;

export interface LifecyclePolicyServiceServer
  extends UntypedServiceImplementation {
  /**
   * Returns the specified lifecycle policy.
   *
   * To get the list of all available lifecycle policies, make a [List] request.
   */
  get: handleUnaryCall<GetLifecyclePolicyRequest, LifecyclePolicy>;
  /** Retrieves the list of lifecycle policies in the specified repository. */
  list: handleUnaryCall<
    ListLifecyclePoliciesRequest,
    ListLifecyclePoliciesResponse
  >;
  /** Creates a lifecycle policy in the specified repository. */
  create: handleUnaryCall<CreateLifecyclePolicyRequest, Operation>;
  /** Updates the specified lifecycle policy. */
  update: handleUnaryCall<UpdateLifecyclePolicyRequest, Operation>;
  /** Deletes the specified lifecycle policy. */
  delete: handleUnaryCall<DeleteLifecyclePolicyRequest, Operation>;
  /** Creates a request of a dry run of the lifecycle policy. */
  dryRun: handleUnaryCall<DryRunLifecyclePolicyRequest, Operation>;
  /** Returns the dry run result of the specified lifecycle policy. */
  getDryRunResult: handleUnaryCall<
    GetDryRunLifecyclePolicyResultRequest,
    DryRunLifecyclePolicyResult
  >;
  /** Retrieves the list of the dry run results. */
  listDryRunResults: handleUnaryCall<
    ListDryRunLifecyclePolicyResultsRequest,
    ListDryRunLifecyclePolicyResultsResponse
  >;
  /** Retrieves the list of the affected images. */
  listDryRunResultAffectedImages: handleUnaryCall<
    ListDryRunLifecyclePolicyResultAffectedImagesRequest,
    ListDryRunLifecyclePolicyResultAffectedImagesResponse
  >;
}

export interface LifecyclePolicyServiceClient extends Client {
  /**
   * Returns the specified lifecycle policy.
   *
   * To get the list of all available lifecycle policies, make a [List] request.
   */
  get(
    request: GetLifecyclePolicyRequest,
    callback: (error: ServiceError | null, response: LifecyclePolicy) => void
  ): ClientUnaryCall;
  get(
    request: GetLifecyclePolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LifecyclePolicy) => void
  ): ClientUnaryCall;
  get(
    request: GetLifecyclePolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LifecyclePolicy) => void
  ): ClientUnaryCall;
  /** Retrieves the list of lifecycle policies in the specified repository. */
  list(
    request: ListLifecyclePoliciesRequest,
    callback: (
      error: ServiceError | null,
      response: ListLifecyclePoliciesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListLifecyclePoliciesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListLifecyclePoliciesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListLifecyclePoliciesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListLifecyclePoliciesResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a lifecycle policy in the specified repository. */
  create(
    request: CreateLifecyclePolicyRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateLifecyclePolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateLifecyclePolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified lifecycle policy. */
  update(
    request: UpdateLifecyclePolicyRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateLifecyclePolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateLifecyclePolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified lifecycle policy. */
  delete(
    request: DeleteLifecyclePolicyRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteLifecyclePolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteLifecyclePolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Creates a request of a dry run of the lifecycle policy. */
  dryRun(
    request: DryRunLifecyclePolicyRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  dryRun(
    request: DryRunLifecyclePolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  dryRun(
    request: DryRunLifecyclePolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Returns the dry run result of the specified lifecycle policy. */
  getDryRunResult(
    request: GetDryRunLifecyclePolicyResultRequest,
    callback: (
      error: ServiceError | null,
      response: DryRunLifecyclePolicyResult
    ) => void
  ): ClientUnaryCall;
  getDryRunResult(
    request: GetDryRunLifecyclePolicyResultRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: DryRunLifecyclePolicyResult
    ) => void
  ): ClientUnaryCall;
  getDryRunResult(
    request: GetDryRunLifecyclePolicyResultRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: DryRunLifecyclePolicyResult
    ) => void
  ): ClientUnaryCall;
  /** Retrieves the list of the dry run results. */
  listDryRunResults(
    request: ListDryRunLifecyclePolicyResultsRequest,
    callback: (
      error: ServiceError | null,
      response: ListDryRunLifecyclePolicyResultsResponse
    ) => void
  ): ClientUnaryCall;
  listDryRunResults(
    request: ListDryRunLifecyclePolicyResultsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListDryRunLifecyclePolicyResultsResponse
    ) => void
  ): ClientUnaryCall;
  listDryRunResults(
    request: ListDryRunLifecyclePolicyResultsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListDryRunLifecyclePolicyResultsResponse
    ) => void
  ): ClientUnaryCall;
  /** Retrieves the list of the affected images. */
  listDryRunResultAffectedImages(
    request: ListDryRunLifecyclePolicyResultAffectedImagesRequest,
    callback: (
      error: ServiceError | null,
      response: ListDryRunLifecyclePolicyResultAffectedImagesResponse
    ) => void
  ): ClientUnaryCall;
  listDryRunResultAffectedImages(
    request: ListDryRunLifecyclePolicyResultAffectedImagesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListDryRunLifecyclePolicyResultAffectedImagesResponse
    ) => void
  ): ClientUnaryCall;
  listDryRunResultAffectedImages(
    request: ListDryRunLifecyclePolicyResultAffectedImagesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListDryRunLifecyclePolicyResultAffectedImagesResponse
    ) => void
  ): ClientUnaryCall;
}

export const LifecyclePolicyServiceClient = makeGenericClientConstructor(
  LifecyclePolicyServiceService,
  "yandex.cloud.containerregistry.v1.LifecyclePolicyService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): LifecyclePolicyServiceClient;
  service: typeof LifecyclePolicyServiceService;
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
