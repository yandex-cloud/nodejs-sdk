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
  ProvisionPolicy,
  ScalingPolicy,
  LogOptions,
  Command,
  Args,
  Container,
  Revision,
  Secret,
  StorageMount,
} from "../../../../../yandex/cloud/serverless/containers/v1/container";
import { Duration } from "../../../../../google/protobuf/duration";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
import {
  ListAccessBindingsRequest,
  ListAccessBindingsResponse,
  SetAccessBindingsRequest,
  UpdateAccessBindingsRequest,
} from "../../../../../yandex/cloud/access/access";

export const protobufPackage = "yandex.cloud.serverless.containers.v1";

export interface GetContainerRequest {
  $type: "yandex.cloud.serverless.containers.v1.GetContainerRequest";
  /**
   * ID of the container to return.
   *
   * To get a container ID make a [ContainerService.List] request.
   */
  containerId: string;
}

export interface ListContainersRequest {
  $type: "yandex.cloud.serverless.containers.v1.ListContainersRequest";
  /**
   * ID of the folder to list containers in.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `pageSize`, the service returns a [ListContainersResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListContainersResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters containers listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently filtering can only be applied to the [Container.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name="my-container"`.
   */
  filter: string;
}

export interface ListContainersResponse {
  $type: "yandex.cloud.serverless.containers.v1.ListContainersResponse";
  /** List of containers in the specified folder. */
  containers: Container[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListContainersRequest.page_size], use `nextPageToken` as the value
   * for the [ListContainersRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateContainerRequest {
  $type: "yandex.cloud.serverless.containers.v1.CreateContainerRequest";
  /**
   * ID of the folder to create a container in.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the container.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the container. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
}

export interface CreateContainerRequest_LabelsEntry {
  $type: "yandex.cloud.serverless.containers.v1.CreateContainerRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateContainerMetadata {
  $type: "yandex.cloud.serverless.containers.v1.CreateContainerMetadata";
  /** ID of the container that is being created. */
  containerId: string;
}

export interface UpdateContainerRequest {
  $type: "yandex.cloud.serverless.containers.v1.UpdateContainerRequest";
  /**
   * ID of the container to update.
   *
   * To get a container ID make a [ContainerService.List] request.
   */
  containerId: string;
  /** Field mask that specifies which attributes of the container should be updated. */
  updateMask?: FieldMask;
  /**
   * New name for the container.
   * The name must be unique within the folder.
   */
  name: string;
  /** New description for the container. */
  description: string;
  /**
   * Container labels as `key:value` pairs.
   *
   * Existing set of labels is completely replaced by the provided set, so if you just want
   * to add or remove a label, request the current set of labels with a [ContainerService.Get] request.
   */
  labels: { [key: string]: string };
}

export interface UpdateContainerRequest_LabelsEntry {
  $type: "yandex.cloud.serverless.containers.v1.UpdateContainerRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateContainerMetadata {
  $type: "yandex.cloud.serverless.containers.v1.UpdateContainerMetadata";
  /** ID of the container that is being updated. */
  containerId: string;
}

export interface DeleteContainerRequest {
  $type: "yandex.cloud.serverless.containers.v1.DeleteContainerRequest";
  /**
   * ID of the container to delete.
   * To get a container ID make a [ContainerService.List] request.
   */
  containerId: string;
}

export interface DeleteContainerMetadata {
  $type: "yandex.cloud.serverless.containers.v1.DeleteContainerMetadata";
  /** ID of the container that is being deleted. */
  containerId: string;
}

export interface GetContainerRevisionRequest {
  $type: "yandex.cloud.serverless.containers.v1.GetContainerRevisionRequest";
  /**
   * ID of the revision to return.
   *
   * To get a revision ID make a [ContainerService.ListRevisions] request.
   */
  containerRevisionId: string;
}

export interface ListContainersRevisionsRequest {
  $type: "yandex.cloud.serverless.containers.v1.ListContainersRevisionsRequest";
  /**
   * ID of the folder to list container revisions for.
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string | undefined;
  /**
   * ID of the container to list revisions for.
   * To get a container ID use a [ContainerService.List] request.
   */
  containerId: string | undefined;
  /**
   * The maximum number of results per page to return. If the number of available results
   * is larger than `pageSize`, the service returns a [ListContainersRevisionsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListContainersRevisionsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently filtering can only be applied to the [Revision.status] and [Revision.runtime] fields.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `status="ACTIVE"`.
   */
  filter: string;
}

export interface ListContainersRevisionsResponse {
  $type: "yandex.cloud.serverless.containers.v1.ListContainersRevisionsResponse";
  /** List of revisions for the specified folder or container. */
  revisions: Revision[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListContainersRevisionsRequest.page_size], use `nextPageToken` as the value
   * for the [ListContainersRevisionsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface DeployContainerRevisionRequest {
  $type: "yandex.cloud.serverless.containers.v1.DeployContainerRevisionRequest";
  /**
   * ID of the container to create a revision for.
   *
   * To get a container ID, make a [ContainerService.List] request.
   */
  containerId: string;
  /** Description of the revision. */
  description: string;
  /** Resources allocated to the revision. */
  resources?: Resources;
  /**
   * Timeout for the execution of the revision.
   *
   * If the timeout is exceeded, Serverless Containers responds with a 504 HTTP code.
   */
  executionTimeout?: Duration;
  /** ID of the service account to associate with the revision. */
  serviceAccountId: string;
  /** Image configuration for the revision. */
  imageSpec?: ImageSpec;
  /**
   * The number of concurrent requests allowed per container instance.
   *
   * The default value is 1.
   */
  concurrency: number;
  /** Yandex Lockbox secrets to be used by the revision. */
  secrets: Secret[];
  /** Network access. If specified the revision will be attached to specified network/subnet(s). */
  connectivity?: Connectivity;
  /**
   * Policy for provisioning instances of the revision.
   *
   * The policy is only applied when the revision is ACTIVE.
   */
  provisionPolicy?: ProvisionPolicy;
  /** Policy for scaling instances of the revision. */
  scalingPolicy?: ScalingPolicy;
  /** Options for logging from the container. */
  logOptions?: LogOptions;
  /** S3 mounts to be used by the version. */
  storageMounts: StorageMount[];
}

/** Revision image specification. */
export interface ImageSpec {
  $type: "yandex.cloud.serverless.containers.v1.ImageSpec";
  /** Image URL, that is used by the revision. */
  imageUrl: string;
  /** Override for the image's ENTRYPOINT. */
  command?: Command;
  /** Override for the image's CMD. */
  args?: Args;
  /** Additional environment for the container. */
  environment: { [key: string]: string };
  /** Override for the image's WORKDIR. */
  workingDir: string;
}

export interface ImageSpec_EnvironmentEntry {
  $type: "yandex.cloud.serverless.containers.v1.ImageSpec.EnvironmentEntry";
  key: string;
  value: string;
}

export interface DeployContainerRevisionMetadata {
  $type: "yandex.cloud.serverless.containers.v1.DeployContainerRevisionMetadata";
  /** ID of the revision that is being created. */
  containerRevisionId: string;
}

export interface RollbackContainerRequest {
  $type: "yandex.cloud.serverless.containers.v1.RollbackContainerRequest";
  /**
   * ID of the container to rollback to an old revision.
   *
   * To get a container ID, make a [ContainerService.List] request.
   */
  containerId: string;
  /**
   * ID of the revision to rollback to.
   *
   * To get a revision ID make a [ContainerService.ListRevisions] request.
   */
  revisionId: string;
}

export interface RollbackContainerMetadata {
  $type: "yandex.cloud.serverless.containers.v1.RollbackContainerMetadata";
  /** ID of the container that is being rolled back. */
  containerId: string;
  /** ID of the revision that the container is being rolled back to. */
  revisionId: string;
}

export interface ListContainerOperationsRequest {
  $type: "yandex.cloud.serverless.containers.v1.ListContainerOperationsRequest";
  /** ID of the container to list operations for. */
  containerId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `pageSize`, the service returns a [ListContainerOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListContainerOperationsResponse.next_page_token] returned by a previous list request.
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

export interface ListContainerOperationsResponse {
  $type: "yandex.cloud.serverless.containers.v1.ListContainerOperationsResponse";
  /** List of operations for the specified container. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListContainerOperationsRequest.page_size], use `nextPageToken` as the value
   * for the [ListContainerOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

const baseGetContainerRequest: object = {
  $type: "yandex.cloud.serverless.containers.v1.GetContainerRequest",
  containerId: "",
};

export const GetContainerRequest = {
  $type: "yandex.cloud.serverless.containers.v1.GetContainerRequest" as const,

  encode(
    message: GetContainerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.containerId !== "") {
      writer.uint32(10).string(message.containerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetContainerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetContainerRequest } as GetContainerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.containerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetContainerRequest {
    const message = { ...baseGetContainerRequest } as GetContainerRequest;
    message.containerId =
      object.containerId !== undefined && object.containerId !== null
        ? String(object.containerId)
        : "";
    return message;
  },

  toJSON(message: GetContainerRequest): unknown {
    const obj: any = {};
    message.containerId !== undefined &&
      (obj.containerId = message.containerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetContainerRequest>, I>>(
    object: I
  ): GetContainerRequest {
    const message = { ...baseGetContainerRequest } as GetContainerRequest;
    message.containerId = object.containerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetContainerRequest.$type, GetContainerRequest);

const baseListContainersRequest: object = {
  $type: "yandex.cloud.serverless.containers.v1.ListContainersRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListContainersRequest = {
  $type: "yandex.cloud.serverless.containers.v1.ListContainersRequest" as const,

  encode(
    message: ListContainersRequest,
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
  ): ListContainersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListContainersRequest } as ListContainersRequest;
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

  fromJSON(object: any): ListContainersRequest {
    const message = { ...baseListContainersRequest } as ListContainersRequest;
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

  toJSON(message: ListContainersRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListContainersRequest>, I>>(
    object: I
  ): ListContainersRequest {
    const message = { ...baseListContainersRequest } as ListContainersRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListContainersRequest.$type, ListContainersRequest);

const baseListContainersResponse: object = {
  $type: "yandex.cloud.serverless.containers.v1.ListContainersResponse",
  nextPageToken: "",
};

export const ListContainersResponse = {
  $type:
    "yandex.cloud.serverless.containers.v1.ListContainersResponse" as const,

  encode(
    message: ListContainersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.containers) {
      Container.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListContainersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListContainersResponse } as ListContainersResponse;
    message.containers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.containers.push(Container.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListContainersResponse {
    const message = { ...baseListContainersResponse } as ListContainersResponse;
    message.containers = (object.containers ?? []).map((e: any) =>
      Container.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListContainersResponse): unknown {
    const obj: any = {};
    if (message.containers) {
      obj.containers = message.containers.map((e) =>
        e ? Container.toJSON(e) : undefined
      );
    } else {
      obj.containers = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListContainersResponse>, I>>(
    object: I
  ): ListContainersResponse {
    const message = { ...baseListContainersResponse } as ListContainersResponse;
    message.containers =
      object.containers?.map((e) => Container.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListContainersResponse.$type, ListContainersResponse);

const baseCreateContainerRequest: object = {
  $type: "yandex.cloud.serverless.containers.v1.CreateContainerRequest",
  folderId: "",
  name: "",
  description: "",
};

export const CreateContainerRequest = {
  $type:
    "yandex.cloud.serverless.containers.v1.CreateContainerRequest" as const,

  encode(
    message: CreateContainerRequest,
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
      CreateContainerRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.serverless.containers.v1.CreateContainerRequest.LabelsEntry",
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
  ): CreateContainerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateContainerRequest } as CreateContainerRequest;
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
          const entry4 = CreateContainerRequest_LabelsEntry.decode(
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

  fromJSON(object: any): CreateContainerRequest {
    const message = { ...baseCreateContainerRequest } as CreateContainerRequest;
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

  toJSON(message: CreateContainerRequest): unknown {
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

  fromPartial<I extends Exact<DeepPartial<CreateContainerRequest>, I>>(
    object: I
  ): CreateContainerRequest {
    const message = { ...baseCreateContainerRequest } as CreateContainerRequest;
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

messageTypeRegistry.set(CreateContainerRequest.$type, CreateContainerRequest);

const baseCreateContainerRequest_LabelsEntry: object = {
  $type:
    "yandex.cloud.serverless.containers.v1.CreateContainerRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateContainerRequest_LabelsEntry = {
  $type:
    "yandex.cloud.serverless.containers.v1.CreateContainerRequest.LabelsEntry" as const,

  encode(
    message: CreateContainerRequest_LabelsEntry,
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
  ): CreateContainerRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateContainerRequest_LabelsEntry,
    } as CreateContainerRequest_LabelsEntry;
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

  fromJSON(object: any): CreateContainerRequest_LabelsEntry {
    const message = {
      ...baseCreateContainerRequest_LabelsEntry,
    } as CreateContainerRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateContainerRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateContainerRequest_LabelsEntry>, I>
  >(object: I): CreateContainerRequest_LabelsEntry {
    const message = {
      ...baseCreateContainerRequest_LabelsEntry,
    } as CreateContainerRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateContainerRequest_LabelsEntry.$type,
  CreateContainerRequest_LabelsEntry
);

const baseCreateContainerMetadata: object = {
  $type: "yandex.cloud.serverless.containers.v1.CreateContainerMetadata",
  containerId: "",
};

export const CreateContainerMetadata = {
  $type:
    "yandex.cloud.serverless.containers.v1.CreateContainerMetadata" as const,

  encode(
    message: CreateContainerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.containerId !== "") {
      writer.uint32(10).string(message.containerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateContainerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateContainerMetadata,
    } as CreateContainerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.containerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateContainerMetadata {
    const message = {
      ...baseCreateContainerMetadata,
    } as CreateContainerMetadata;
    message.containerId =
      object.containerId !== undefined && object.containerId !== null
        ? String(object.containerId)
        : "";
    return message;
  },

  toJSON(message: CreateContainerMetadata): unknown {
    const obj: any = {};
    message.containerId !== undefined &&
      (obj.containerId = message.containerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateContainerMetadata>, I>>(
    object: I
  ): CreateContainerMetadata {
    const message = {
      ...baseCreateContainerMetadata,
    } as CreateContainerMetadata;
    message.containerId = object.containerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateContainerMetadata.$type, CreateContainerMetadata);

const baseUpdateContainerRequest: object = {
  $type: "yandex.cloud.serverless.containers.v1.UpdateContainerRequest",
  containerId: "",
  name: "",
  description: "",
};

export const UpdateContainerRequest = {
  $type:
    "yandex.cloud.serverless.containers.v1.UpdateContainerRequest" as const,

  encode(
    message: UpdateContainerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.containerId !== "") {
      writer.uint32(10).string(message.containerId);
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
      UpdateContainerRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.serverless.containers.v1.UpdateContainerRequest.LabelsEntry",
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
  ): UpdateContainerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateContainerRequest } as UpdateContainerRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.containerId = reader.string();
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
          const entry5 = UpdateContainerRequest_LabelsEntry.decode(
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

  fromJSON(object: any): UpdateContainerRequest {
    const message = { ...baseUpdateContainerRequest } as UpdateContainerRequest;
    message.containerId =
      object.containerId !== undefined && object.containerId !== null
        ? String(object.containerId)
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

  toJSON(message: UpdateContainerRequest): unknown {
    const obj: any = {};
    message.containerId !== undefined &&
      (obj.containerId = message.containerId);
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

  fromPartial<I extends Exact<DeepPartial<UpdateContainerRequest>, I>>(
    object: I
  ): UpdateContainerRequest {
    const message = { ...baseUpdateContainerRequest } as UpdateContainerRequest;
    message.containerId = object.containerId ?? "";
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

messageTypeRegistry.set(UpdateContainerRequest.$type, UpdateContainerRequest);

const baseUpdateContainerRequest_LabelsEntry: object = {
  $type:
    "yandex.cloud.serverless.containers.v1.UpdateContainerRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateContainerRequest_LabelsEntry = {
  $type:
    "yandex.cloud.serverless.containers.v1.UpdateContainerRequest.LabelsEntry" as const,

  encode(
    message: UpdateContainerRequest_LabelsEntry,
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
  ): UpdateContainerRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateContainerRequest_LabelsEntry,
    } as UpdateContainerRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateContainerRequest_LabelsEntry {
    const message = {
      ...baseUpdateContainerRequest_LabelsEntry,
    } as UpdateContainerRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateContainerRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateContainerRequest_LabelsEntry>, I>
  >(object: I): UpdateContainerRequest_LabelsEntry {
    const message = {
      ...baseUpdateContainerRequest_LabelsEntry,
    } as UpdateContainerRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateContainerRequest_LabelsEntry.$type,
  UpdateContainerRequest_LabelsEntry
);

const baseUpdateContainerMetadata: object = {
  $type: "yandex.cloud.serverless.containers.v1.UpdateContainerMetadata",
  containerId: "",
};

export const UpdateContainerMetadata = {
  $type:
    "yandex.cloud.serverless.containers.v1.UpdateContainerMetadata" as const,

  encode(
    message: UpdateContainerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.containerId !== "") {
      writer.uint32(10).string(message.containerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateContainerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateContainerMetadata,
    } as UpdateContainerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.containerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateContainerMetadata {
    const message = {
      ...baseUpdateContainerMetadata,
    } as UpdateContainerMetadata;
    message.containerId =
      object.containerId !== undefined && object.containerId !== null
        ? String(object.containerId)
        : "";
    return message;
  },

  toJSON(message: UpdateContainerMetadata): unknown {
    const obj: any = {};
    message.containerId !== undefined &&
      (obj.containerId = message.containerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateContainerMetadata>, I>>(
    object: I
  ): UpdateContainerMetadata {
    const message = {
      ...baseUpdateContainerMetadata,
    } as UpdateContainerMetadata;
    message.containerId = object.containerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateContainerMetadata.$type, UpdateContainerMetadata);

const baseDeleteContainerRequest: object = {
  $type: "yandex.cloud.serverless.containers.v1.DeleteContainerRequest",
  containerId: "",
};

export const DeleteContainerRequest = {
  $type:
    "yandex.cloud.serverless.containers.v1.DeleteContainerRequest" as const,

  encode(
    message: DeleteContainerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.containerId !== "") {
      writer.uint32(10).string(message.containerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteContainerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteContainerRequest } as DeleteContainerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.containerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteContainerRequest {
    const message = { ...baseDeleteContainerRequest } as DeleteContainerRequest;
    message.containerId =
      object.containerId !== undefined && object.containerId !== null
        ? String(object.containerId)
        : "";
    return message;
  },

  toJSON(message: DeleteContainerRequest): unknown {
    const obj: any = {};
    message.containerId !== undefined &&
      (obj.containerId = message.containerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteContainerRequest>, I>>(
    object: I
  ): DeleteContainerRequest {
    const message = { ...baseDeleteContainerRequest } as DeleteContainerRequest;
    message.containerId = object.containerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteContainerRequest.$type, DeleteContainerRequest);

const baseDeleteContainerMetadata: object = {
  $type: "yandex.cloud.serverless.containers.v1.DeleteContainerMetadata",
  containerId: "",
};

export const DeleteContainerMetadata = {
  $type:
    "yandex.cloud.serverless.containers.v1.DeleteContainerMetadata" as const,

  encode(
    message: DeleteContainerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.containerId !== "") {
      writer.uint32(10).string(message.containerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteContainerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteContainerMetadata,
    } as DeleteContainerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.containerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteContainerMetadata {
    const message = {
      ...baseDeleteContainerMetadata,
    } as DeleteContainerMetadata;
    message.containerId =
      object.containerId !== undefined && object.containerId !== null
        ? String(object.containerId)
        : "";
    return message;
  },

  toJSON(message: DeleteContainerMetadata): unknown {
    const obj: any = {};
    message.containerId !== undefined &&
      (obj.containerId = message.containerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteContainerMetadata>, I>>(
    object: I
  ): DeleteContainerMetadata {
    const message = {
      ...baseDeleteContainerMetadata,
    } as DeleteContainerMetadata;
    message.containerId = object.containerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteContainerMetadata.$type, DeleteContainerMetadata);

const baseGetContainerRevisionRequest: object = {
  $type: "yandex.cloud.serverless.containers.v1.GetContainerRevisionRequest",
  containerRevisionId: "",
};

export const GetContainerRevisionRequest = {
  $type:
    "yandex.cloud.serverless.containers.v1.GetContainerRevisionRequest" as const,

  encode(
    message: GetContainerRevisionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.containerRevisionId !== "") {
      writer.uint32(10).string(message.containerRevisionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetContainerRevisionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetContainerRevisionRequest,
    } as GetContainerRevisionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.containerRevisionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetContainerRevisionRequest {
    const message = {
      ...baseGetContainerRevisionRequest,
    } as GetContainerRevisionRequest;
    message.containerRevisionId =
      object.containerRevisionId !== undefined &&
      object.containerRevisionId !== null
        ? String(object.containerRevisionId)
        : "";
    return message;
  },

  toJSON(message: GetContainerRevisionRequest): unknown {
    const obj: any = {};
    message.containerRevisionId !== undefined &&
      (obj.containerRevisionId = message.containerRevisionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetContainerRevisionRequest>, I>>(
    object: I
  ): GetContainerRevisionRequest {
    const message = {
      ...baseGetContainerRevisionRequest,
    } as GetContainerRevisionRequest;
    message.containerRevisionId = object.containerRevisionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  GetContainerRevisionRequest.$type,
  GetContainerRevisionRequest
);

const baseListContainersRevisionsRequest: object = {
  $type: "yandex.cloud.serverless.containers.v1.ListContainersRevisionsRequest",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListContainersRevisionsRequest = {
  $type:
    "yandex.cloud.serverless.containers.v1.ListContainersRevisionsRequest" as const,

  encode(
    message: ListContainersRevisionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== undefined) {
      writer.uint32(10).string(message.folderId);
    }
    if (message.containerId !== undefined) {
      writer.uint32(18).string(message.containerId);
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
  ): ListContainersRevisionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListContainersRevisionsRequest,
    } as ListContainersRevisionsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 2:
          message.containerId = reader.string();
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

  fromJSON(object: any): ListContainersRevisionsRequest {
    const message = {
      ...baseListContainersRevisionsRequest,
    } as ListContainersRevisionsRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : undefined;
    message.containerId =
      object.containerId !== undefined && object.containerId !== null
        ? String(object.containerId)
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

  toJSON(message: ListContainersRevisionsRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.containerId !== undefined &&
      (obj.containerId = message.containerId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListContainersRevisionsRequest>, I>>(
    object: I
  ): ListContainersRevisionsRequest {
    const message = {
      ...baseListContainersRevisionsRequest,
    } as ListContainersRevisionsRequest;
    message.folderId = object.folderId ?? undefined;
    message.containerId = object.containerId ?? undefined;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListContainersRevisionsRequest.$type,
  ListContainersRevisionsRequest
);

const baseListContainersRevisionsResponse: object = {
  $type:
    "yandex.cloud.serverless.containers.v1.ListContainersRevisionsResponse",
  nextPageToken: "",
};

export const ListContainersRevisionsResponse = {
  $type:
    "yandex.cloud.serverless.containers.v1.ListContainersRevisionsResponse" as const,

  encode(
    message: ListContainersRevisionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.revisions) {
      Revision.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListContainersRevisionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListContainersRevisionsResponse,
    } as ListContainersRevisionsResponse;
    message.revisions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.revisions.push(Revision.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListContainersRevisionsResponse {
    const message = {
      ...baseListContainersRevisionsResponse,
    } as ListContainersRevisionsResponse;
    message.revisions = (object.revisions ?? []).map((e: any) =>
      Revision.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListContainersRevisionsResponse): unknown {
    const obj: any = {};
    if (message.revisions) {
      obj.revisions = message.revisions.map((e) =>
        e ? Revision.toJSON(e) : undefined
      );
    } else {
      obj.revisions = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListContainersRevisionsResponse>, I>>(
    object: I
  ): ListContainersRevisionsResponse {
    const message = {
      ...baseListContainersRevisionsResponse,
    } as ListContainersRevisionsResponse;
    message.revisions =
      object.revisions?.map((e) => Revision.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListContainersRevisionsResponse.$type,
  ListContainersRevisionsResponse
);

const baseDeployContainerRevisionRequest: object = {
  $type: "yandex.cloud.serverless.containers.v1.DeployContainerRevisionRequest",
  containerId: "",
  description: "",
  serviceAccountId: "",
  concurrency: 0,
};

export const DeployContainerRevisionRequest = {
  $type:
    "yandex.cloud.serverless.containers.v1.DeployContainerRevisionRequest" as const,

  encode(
    message: DeployContainerRevisionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.containerId !== "") {
      writer.uint32(10).string(message.containerId);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
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
    if (message.imageSpec !== undefined) {
      ImageSpec.encode(message.imageSpec, writer.uint32(66).fork()).ldelim();
    }
    if (message.concurrency !== 0) {
      writer.uint32(72).int64(message.concurrency);
    }
    for (const v of message.secrets) {
      Secret.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.connectivity !== undefined) {
      Connectivity.encode(
        message.connectivity,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.provisionPolicy !== undefined) {
      ProvisionPolicy.encode(
        message.provisionPolicy,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.scalingPolicy !== undefined) {
      ScalingPolicy.encode(
        message.scalingPolicy,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.logOptions !== undefined) {
      LogOptions.encode(message.logOptions, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.storageMounts) {
      StorageMount.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeployContainerRevisionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeployContainerRevisionRequest,
    } as DeployContainerRevisionRequest;
    message.secrets = [];
    message.storageMounts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.containerId = reader.string();
          break;
        case 3:
          message.description = reader.string();
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
        case 8:
          message.imageSpec = ImageSpec.decode(reader, reader.uint32());
          break;
        case 9:
          message.concurrency = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.secrets.push(Secret.decode(reader, reader.uint32()));
          break;
        case 11:
          message.connectivity = Connectivity.decode(reader, reader.uint32());
          break;
        case 12:
          message.provisionPolicy = ProvisionPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.scalingPolicy = ScalingPolicy.decode(reader, reader.uint32());
          break;
        case 14:
          message.logOptions = LogOptions.decode(reader, reader.uint32());
          break;
        case 15:
          message.storageMounts.push(
            StorageMount.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeployContainerRevisionRequest {
    const message = {
      ...baseDeployContainerRevisionRequest,
    } as DeployContainerRevisionRequest;
    message.containerId =
      object.containerId !== undefined && object.containerId !== null
        ? String(object.containerId)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
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
    message.imageSpec =
      object.imageSpec !== undefined && object.imageSpec !== null
        ? ImageSpec.fromJSON(object.imageSpec)
        : undefined;
    message.concurrency =
      object.concurrency !== undefined && object.concurrency !== null
        ? Number(object.concurrency)
        : 0;
    message.secrets = (object.secrets ?? []).map((e: any) =>
      Secret.fromJSON(e)
    );
    message.connectivity =
      object.connectivity !== undefined && object.connectivity !== null
        ? Connectivity.fromJSON(object.connectivity)
        : undefined;
    message.provisionPolicy =
      object.provisionPolicy !== undefined && object.provisionPolicy !== null
        ? ProvisionPolicy.fromJSON(object.provisionPolicy)
        : undefined;
    message.scalingPolicy =
      object.scalingPolicy !== undefined && object.scalingPolicy !== null
        ? ScalingPolicy.fromJSON(object.scalingPolicy)
        : undefined;
    message.logOptions =
      object.logOptions !== undefined && object.logOptions !== null
        ? LogOptions.fromJSON(object.logOptions)
        : undefined;
    message.storageMounts = (object.storageMounts ?? []).map((e: any) =>
      StorageMount.fromJSON(e)
    );
    return message;
  },

  toJSON(message: DeployContainerRevisionRequest): unknown {
    const obj: any = {};
    message.containerId !== undefined &&
      (obj.containerId = message.containerId);
    message.description !== undefined &&
      (obj.description = message.description);
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
    message.imageSpec !== undefined &&
      (obj.imageSpec = message.imageSpec
        ? ImageSpec.toJSON(message.imageSpec)
        : undefined);
    message.concurrency !== undefined &&
      (obj.concurrency = Math.round(message.concurrency));
    if (message.secrets) {
      obj.secrets = message.secrets.map((e) =>
        e ? Secret.toJSON(e) : undefined
      );
    } else {
      obj.secrets = [];
    }
    message.connectivity !== undefined &&
      (obj.connectivity = message.connectivity
        ? Connectivity.toJSON(message.connectivity)
        : undefined);
    message.provisionPolicy !== undefined &&
      (obj.provisionPolicy = message.provisionPolicy
        ? ProvisionPolicy.toJSON(message.provisionPolicy)
        : undefined);
    message.scalingPolicy !== undefined &&
      (obj.scalingPolicy = message.scalingPolicy
        ? ScalingPolicy.toJSON(message.scalingPolicy)
        : undefined);
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
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeployContainerRevisionRequest>, I>>(
    object: I
  ): DeployContainerRevisionRequest {
    const message = {
      ...baseDeployContainerRevisionRequest,
    } as DeployContainerRevisionRequest;
    message.containerId = object.containerId ?? "";
    message.description = object.description ?? "";
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    message.executionTimeout =
      object.executionTimeout !== undefined && object.executionTimeout !== null
        ? Duration.fromPartial(object.executionTimeout)
        : undefined;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.imageSpec =
      object.imageSpec !== undefined && object.imageSpec !== null
        ? ImageSpec.fromPartial(object.imageSpec)
        : undefined;
    message.concurrency = object.concurrency ?? 0;
    message.secrets = object.secrets?.map((e) => Secret.fromPartial(e)) || [];
    message.connectivity =
      object.connectivity !== undefined && object.connectivity !== null
        ? Connectivity.fromPartial(object.connectivity)
        : undefined;
    message.provisionPolicy =
      object.provisionPolicy !== undefined && object.provisionPolicy !== null
        ? ProvisionPolicy.fromPartial(object.provisionPolicy)
        : undefined;
    message.scalingPolicy =
      object.scalingPolicy !== undefined && object.scalingPolicy !== null
        ? ScalingPolicy.fromPartial(object.scalingPolicy)
        : undefined;
    message.logOptions =
      object.logOptions !== undefined && object.logOptions !== null
        ? LogOptions.fromPartial(object.logOptions)
        : undefined;
    message.storageMounts =
      object.storageMounts?.map((e) => StorageMount.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  DeployContainerRevisionRequest.$type,
  DeployContainerRevisionRequest
);

const baseImageSpec: object = {
  $type: "yandex.cloud.serverless.containers.v1.ImageSpec",
  imageUrl: "",
  workingDir: "",
};

export const ImageSpec = {
  $type: "yandex.cloud.serverless.containers.v1.ImageSpec" as const,

  encode(
    message: ImageSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.imageUrl !== "") {
      writer.uint32(10).string(message.imageUrl);
    }
    if (message.command !== undefined) {
      Command.encode(message.command, writer.uint32(18).fork()).ldelim();
    }
    if (message.args !== undefined) {
      Args.encode(message.args, writer.uint32(26).fork()).ldelim();
    }
    Object.entries(message.environment).forEach(([key, value]) => {
      ImageSpec_EnvironmentEntry.encode(
        {
          $type:
            "yandex.cloud.serverless.containers.v1.ImageSpec.EnvironmentEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.workingDir !== "") {
      writer.uint32(42).string(message.workingDir);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ImageSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseImageSpec } as ImageSpec;
    message.environment = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.imageUrl = reader.string();
          break;
        case 2:
          message.command = Command.decode(reader, reader.uint32());
          break;
        case 3:
          message.args = Args.decode(reader, reader.uint32());
          break;
        case 4:
          const entry4 = ImageSpec_EnvironmentEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.environment[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.workingDir = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ImageSpec {
    const message = { ...baseImageSpec } as ImageSpec;
    message.imageUrl =
      object.imageUrl !== undefined && object.imageUrl !== null
        ? String(object.imageUrl)
        : "";
    message.command =
      object.command !== undefined && object.command !== null
        ? Command.fromJSON(object.command)
        : undefined;
    message.args =
      object.args !== undefined && object.args !== null
        ? Args.fromJSON(object.args)
        : undefined;
    message.environment = Object.entries(object.environment ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.workingDir =
      object.workingDir !== undefined && object.workingDir !== null
        ? String(object.workingDir)
        : "";
    return message;
  },

  toJSON(message: ImageSpec): unknown {
    const obj: any = {};
    message.imageUrl !== undefined && (obj.imageUrl = message.imageUrl);
    message.command !== undefined &&
      (obj.command = message.command
        ? Command.toJSON(message.command)
        : undefined);
    message.args !== undefined &&
      (obj.args = message.args ? Args.toJSON(message.args) : undefined);
    obj.environment = {};
    if (message.environment) {
      Object.entries(message.environment).forEach(([k, v]) => {
        obj.environment[k] = v;
      });
    }
    message.workingDir !== undefined && (obj.workingDir = message.workingDir);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ImageSpec>, I>>(
    object: I
  ): ImageSpec {
    const message = { ...baseImageSpec } as ImageSpec;
    message.imageUrl = object.imageUrl ?? "";
    message.command =
      object.command !== undefined && object.command !== null
        ? Command.fromPartial(object.command)
        : undefined;
    message.args =
      object.args !== undefined && object.args !== null
        ? Args.fromPartial(object.args)
        : undefined;
    message.environment = Object.entries(object.environment ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.workingDir = object.workingDir ?? "";
    return message;
  },
};

messageTypeRegistry.set(ImageSpec.$type, ImageSpec);

const baseImageSpec_EnvironmentEntry: object = {
  $type: "yandex.cloud.serverless.containers.v1.ImageSpec.EnvironmentEntry",
  key: "",
  value: "",
};

export const ImageSpec_EnvironmentEntry = {
  $type:
    "yandex.cloud.serverless.containers.v1.ImageSpec.EnvironmentEntry" as const,

  encode(
    message: ImageSpec_EnvironmentEntry,
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
  ): ImageSpec_EnvironmentEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseImageSpec_EnvironmentEntry,
    } as ImageSpec_EnvironmentEntry;
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

  fromJSON(object: any): ImageSpec_EnvironmentEntry {
    const message = {
      ...baseImageSpec_EnvironmentEntry,
    } as ImageSpec_EnvironmentEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: ImageSpec_EnvironmentEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ImageSpec_EnvironmentEntry>, I>>(
    object: I
  ): ImageSpec_EnvironmentEntry {
    const message = {
      ...baseImageSpec_EnvironmentEntry,
    } as ImageSpec_EnvironmentEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ImageSpec_EnvironmentEntry.$type,
  ImageSpec_EnvironmentEntry
);

const baseDeployContainerRevisionMetadata: object = {
  $type:
    "yandex.cloud.serverless.containers.v1.DeployContainerRevisionMetadata",
  containerRevisionId: "",
};

export const DeployContainerRevisionMetadata = {
  $type:
    "yandex.cloud.serverless.containers.v1.DeployContainerRevisionMetadata" as const,

  encode(
    message: DeployContainerRevisionMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.containerRevisionId !== "") {
      writer.uint32(10).string(message.containerRevisionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeployContainerRevisionMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeployContainerRevisionMetadata,
    } as DeployContainerRevisionMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.containerRevisionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeployContainerRevisionMetadata {
    const message = {
      ...baseDeployContainerRevisionMetadata,
    } as DeployContainerRevisionMetadata;
    message.containerRevisionId =
      object.containerRevisionId !== undefined &&
      object.containerRevisionId !== null
        ? String(object.containerRevisionId)
        : "";
    return message;
  },

  toJSON(message: DeployContainerRevisionMetadata): unknown {
    const obj: any = {};
    message.containerRevisionId !== undefined &&
      (obj.containerRevisionId = message.containerRevisionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeployContainerRevisionMetadata>, I>>(
    object: I
  ): DeployContainerRevisionMetadata {
    const message = {
      ...baseDeployContainerRevisionMetadata,
    } as DeployContainerRevisionMetadata;
    message.containerRevisionId = object.containerRevisionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeployContainerRevisionMetadata.$type,
  DeployContainerRevisionMetadata
);

const baseRollbackContainerRequest: object = {
  $type: "yandex.cloud.serverless.containers.v1.RollbackContainerRequest",
  containerId: "",
  revisionId: "",
};

export const RollbackContainerRequest = {
  $type:
    "yandex.cloud.serverless.containers.v1.RollbackContainerRequest" as const,

  encode(
    message: RollbackContainerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.containerId !== "") {
      writer.uint32(10).string(message.containerId);
    }
    if (message.revisionId !== "") {
      writer.uint32(18).string(message.revisionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RollbackContainerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRollbackContainerRequest,
    } as RollbackContainerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.containerId = reader.string();
          break;
        case 2:
          message.revisionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RollbackContainerRequest {
    const message = {
      ...baseRollbackContainerRequest,
    } as RollbackContainerRequest;
    message.containerId =
      object.containerId !== undefined && object.containerId !== null
        ? String(object.containerId)
        : "";
    message.revisionId =
      object.revisionId !== undefined && object.revisionId !== null
        ? String(object.revisionId)
        : "";
    return message;
  },

  toJSON(message: RollbackContainerRequest): unknown {
    const obj: any = {};
    message.containerId !== undefined &&
      (obj.containerId = message.containerId);
    message.revisionId !== undefined && (obj.revisionId = message.revisionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RollbackContainerRequest>, I>>(
    object: I
  ): RollbackContainerRequest {
    const message = {
      ...baseRollbackContainerRequest,
    } as RollbackContainerRequest;
    message.containerId = object.containerId ?? "";
    message.revisionId = object.revisionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  RollbackContainerRequest.$type,
  RollbackContainerRequest
);

const baseRollbackContainerMetadata: object = {
  $type: "yandex.cloud.serverless.containers.v1.RollbackContainerMetadata",
  containerId: "",
  revisionId: "",
};

export const RollbackContainerMetadata = {
  $type:
    "yandex.cloud.serverless.containers.v1.RollbackContainerMetadata" as const,

  encode(
    message: RollbackContainerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.containerId !== "") {
      writer.uint32(10).string(message.containerId);
    }
    if (message.revisionId !== "") {
      writer.uint32(18).string(message.revisionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RollbackContainerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRollbackContainerMetadata,
    } as RollbackContainerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.containerId = reader.string();
          break;
        case 2:
          message.revisionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RollbackContainerMetadata {
    const message = {
      ...baseRollbackContainerMetadata,
    } as RollbackContainerMetadata;
    message.containerId =
      object.containerId !== undefined && object.containerId !== null
        ? String(object.containerId)
        : "";
    message.revisionId =
      object.revisionId !== undefined && object.revisionId !== null
        ? String(object.revisionId)
        : "";
    return message;
  },

  toJSON(message: RollbackContainerMetadata): unknown {
    const obj: any = {};
    message.containerId !== undefined &&
      (obj.containerId = message.containerId);
    message.revisionId !== undefined && (obj.revisionId = message.revisionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RollbackContainerMetadata>, I>>(
    object: I
  ): RollbackContainerMetadata {
    const message = {
      ...baseRollbackContainerMetadata,
    } as RollbackContainerMetadata;
    message.containerId = object.containerId ?? "";
    message.revisionId = object.revisionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  RollbackContainerMetadata.$type,
  RollbackContainerMetadata
);

const baseListContainerOperationsRequest: object = {
  $type: "yandex.cloud.serverless.containers.v1.ListContainerOperationsRequest",
  containerId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListContainerOperationsRequest = {
  $type:
    "yandex.cloud.serverless.containers.v1.ListContainerOperationsRequest" as const,

  encode(
    message: ListContainerOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.containerId !== "") {
      writer.uint32(10).string(message.containerId);
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
  ): ListContainerOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListContainerOperationsRequest,
    } as ListContainerOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.containerId = reader.string();
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

  fromJSON(object: any): ListContainerOperationsRequest {
    const message = {
      ...baseListContainerOperationsRequest,
    } as ListContainerOperationsRequest;
    message.containerId =
      object.containerId !== undefined && object.containerId !== null
        ? String(object.containerId)
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

  toJSON(message: ListContainerOperationsRequest): unknown {
    const obj: any = {};
    message.containerId !== undefined &&
      (obj.containerId = message.containerId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListContainerOperationsRequest>, I>>(
    object: I
  ): ListContainerOperationsRequest {
    const message = {
      ...baseListContainerOperationsRequest,
    } as ListContainerOperationsRequest;
    message.containerId = object.containerId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListContainerOperationsRequest.$type,
  ListContainerOperationsRequest
);

const baseListContainerOperationsResponse: object = {
  $type:
    "yandex.cloud.serverless.containers.v1.ListContainerOperationsResponse",
  nextPageToken: "",
};

export const ListContainerOperationsResponse = {
  $type:
    "yandex.cloud.serverless.containers.v1.ListContainerOperationsResponse" as const,

  encode(
    message: ListContainerOperationsResponse,
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
  ): ListContainerOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListContainerOperationsResponse,
    } as ListContainerOperationsResponse;
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

  fromJSON(object: any): ListContainerOperationsResponse {
    const message = {
      ...baseListContainerOperationsResponse,
    } as ListContainerOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListContainerOperationsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<ListContainerOperationsResponse>, I>>(
    object: I
  ): ListContainerOperationsResponse {
    const message = {
      ...baseListContainerOperationsResponse,
    } as ListContainerOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListContainerOperationsResponse.$type,
  ListContainerOperationsResponse
);

/** A set of methods for managing serverless containers. */
export const ContainerServiceService = {
  /**
   * Returns the specified container.
   *
   * To get the list of all available containers, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.serverless.containers.v1.ContainerService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetContainerRequest) =>
      Buffer.from(GetContainerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetContainerRequest.decode(value),
    responseSerialize: (value: Container) =>
      Buffer.from(Container.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Container.decode(value),
  },
  /** Retrieves the list of containers in the specified folder. */
  list: {
    path: "/yandex.cloud.serverless.containers.v1.ContainerService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListContainersRequest) =>
      Buffer.from(ListContainersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListContainersRequest.decode(value),
    responseSerialize: (value: ListContainersResponse) =>
      Buffer.from(ListContainersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListContainersResponse.decode(value),
  },
  /** Creates a container in the specified folder. */
  create: {
    path: "/yandex.cloud.serverless.containers.v1.ContainerService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateContainerRequest) =>
      Buffer.from(CreateContainerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateContainerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified container. */
  update: {
    path: "/yandex.cloud.serverless.containers.v1.ContainerService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateContainerRequest) =>
      Buffer.from(UpdateContainerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateContainerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified container. */
  delete: {
    path: "/yandex.cloud.serverless.containers.v1.ContainerService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteContainerRequest) =>
      Buffer.from(DeleteContainerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteContainerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deploys a revision for the specified container. */
  deployRevision: {
    path: "/yandex.cloud.serverless.containers.v1.ContainerService/DeployRevision",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeployContainerRevisionRequest) =>
      Buffer.from(DeployContainerRevisionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeployContainerRevisionRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Rollback the specified container to an old revision. */
  rollback: {
    path: "/yandex.cloud.serverless.containers.v1.ContainerService/Rollback",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RollbackContainerRequest) =>
      Buffer.from(RollbackContainerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      RollbackContainerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Returns the specified revision of a container.
   *
   * To get the list of available revision, make a [ListRevisions] request.
   */
  getRevision: {
    path: "/yandex.cloud.serverless.containers.v1.ContainerService/GetRevision",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetContainerRevisionRequest) =>
      Buffer.from(GetContainerRevisionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetContainerRevisionRequest.decode(value),
    responseSerialize: (value: Revision) =>
      Buffer.from(Revision.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Revision.decode(value),
  },
  /**
   * Retrieves the list of revisions for the specified container, or of all container revisions
   * in the specified folder.
   */
  listRevisions: {
    path: "/yandex.cloud.serverless.containers.v1.ContainerService/ListRevisions",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListContainersRevisionsRequest) =>
      Buffer.from(ListContainersRevisionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListContainersRevisionsRequest.decode(value),
    responseSerialize: (value: ListContainersRevisionsResponse) =>
      Buffer.from(ListContainersRevisionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListContainersRevisionsResponse.decode(value),
  },
  /** Lists operations for the specified container. */
  listOperations: {
    path: "/yandex.cloud.serverless.containers.v1.ContainerService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListContainerOperationsRequest) =>
      Buffer.from(ListContainerOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListContainerOperationsRequest.decode(value),
    responseSerialize: (value: ListContainerOperationsResponse) =>
      Buffer.from(ListContainerOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListContainerOperationsResponse.decode(value),
  },
  /** Lists existing access bindings for the specified container. */
  listAccessBindings: {
    path: "/yandex.cloud.serverless.containers.v1.ContainerService/ListAccessBindings",
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
  /** Sets access bindings for the container. */
  setAccessBindings: {
    path: "/yandex.cloud.serverless.containers.v1.ContainerService/SetAccessBindings",
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
  /** Updates access bindings for the specified container. */
  updateAccessBindings: {
    path: "/yandex.cloud.serverless.containers.v1.ContainerService/UpdateAccessBindings",
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

export interface ContainerServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified container.
   *
   * To get the list of all available containers, make a [List] request.
   */
  get: handleUnaryCall<GetContainerRequest, Container>;
  /** Retrieves the list of containers in the specified folder. */
  list: handleUnaryCall<ListContainersRequest, ListContainersResponse>;
  /** Creates a container in the specified folder. */
  create: handleUnaryCall<CreateContainerRequest, Operation>;
  /** Updates the specified container. */
  update: handleUnaryCall<UpdateContainerRequest, Operation>;
  /** Deletes the specified container. */
  delete: handleUnaryCall<DeleteContainerRequest, Operation>;
  /** Deploys a revision for the specified container. */
  deployRevision: handleUnaryCall<DeployContainerRevisionRequest, Operation>;
  /** Rollback the specified container to an old revision. */
  rollback: handleUnaryCall<RollbackContainerRequest, Operation>;
  /**
   * Returns the specified revision of a container.
   *
   * To get the list of available revision, make a [ListRevisions] request.
   */
  getRevision: handleUnaryCall<GetContainerRevisionRequest, Revision>;
  /**
   * Retrieves the list of revisions for the specified container, or of all container revisions
   * in the specified folder.
   */
  listRevisions: handleUnaryCall<
    ListContainersRevisionsRequest,
    ListContainersRevisionsResponse
  >;
  /** Lists operations for the specified container. */
  listOperations: handleUnaryCall<
    ListContainerOperationsRequest,
    ListContainerOperationsResponse
  >;
  /** Lists existing access bindings for the specified container. */
  listAccessBindings: handleUnaryCall<
    ListAccessBindingsRequest,
    ListAccessBindingsResponse
  >;
  /** Sets access bindings for the container. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the specified container. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface ContainerServiceClient extends Client {
  /**
   * Returns the specified container.
   *
   * To get the list of all available containers, make a [List] request.
   */
  get(
    request: GetContainerRequest,
    callback: (error: ServiceError | null, response: Container) => void
  ): ClientUnaryCall;
  get(
    request: GetContainerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Container) => void
  ): ClientUnaryCall;
  get(
    request: GetContainerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Container) => void
  ): ClientUnaryCall;
  /** Retrieves the list of containers in the specified folder. */
  list(
    request: ListContainersRequest,
    callback: (
      error: ServiceError | null,
      response: ListContainersResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListContainersRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListContainersResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListContainersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListContainersResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a container in the specified folder. */
  create(
    request: CreateContainerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateContainerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateContainerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified container. */
  update(
    request: UpdateContainerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateContainerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateContainerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified container. */
  delete(
    request: DeleteContainerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteContainerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteContainerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deploys a revision for the specified container. */
  deployRevision(
    request: DeployContainerRevisionRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deployRevision(
    request: DeployContainerRevisionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deployRevision(
    request: DeployContainerRevisionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Rollback the specified container to an old revision. */
  rollback(
    request: RollbackContainerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  rollback(
    request: RollbackContainerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  rollback(
    request: RollbackContainerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Returns the specified revision of a container.
   *
   * To get the list of available revision, make a [ListRevisions] request.
   */
  getRevision(
    request: GetContainerRevisionRequest,
    callback: (error: ServiceError | null, response: Revision) => void
  ): ClientUnaryCall;
  getRevision(
    request: GetContainerRevisionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Revision) => void
  ): ClientUnaryCall;
  getRevision(
    request: GetContainerRevisionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Revision) => void
  ): ClientUnaryCall;
  /**
   * Retrieves the list of revisions for the specified container, or of all container revisions
   * in the specified folder.
   */
  listRevisions(
    request: ListContainersRevisionsRequest,
    callback: (
      error: ServiceError | null,
      response: ListContainersRevisionsResponse
    ) => void
  ): ClientUnaryCall;
  listRevisions(
    request: ListContainersRevisionsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListContainersRevisionsResponse
    ) => void
  ): ClientUnaryCall;
  listRevisions(
    request: ListContainersRevisionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListContainersRevisionsResponse
    ) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified container. */
  listOperations(
    request: ListContainerOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListContainerOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListContainerOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListContainerOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListContainerOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListContainerOperationsResponse
    ) => void
  ): ClientUnaryCall;
  /** Lists existing access bindings for the specified container. */
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
  /** Sets access bindings for the container. */
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
  /** Updates access bindings for the specified container. */
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

export const ContainerServiceClient = makeGenericClientConstructor(
  ContainerServiceService,
  "yandex.cloud.serverless.containers.v1.ContainerService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): ContainerServiceClient;
  service: typeof ContainerServiceService;
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
