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
import { Registry } from "../../../../yandex/cloud/containerregistry/v1/registry";
import {
  IpPermission,
  IpPermissionDelta,
} from "../../../../yandex/cloud/containerregistry/v1/ip_permission";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import {
  ListAccessBindingsRequest,
  ListAccessBindingsResponse,
  SetAccessBindingsRequest,
  UpdateAccessBindingsRequest,
} from "../../../../yandex/cloud/access/access";

export const protobufPackage = "yandex.cloud.containerregistry.v1";

export interface GetRegistryRequest {
  $type: "yandex.cloud.containerregistry.v1.GetRegistryRequest";
  /**
   * ID of the Registry resource to return.
   *
   * To get the registry ID use a [RegistryService.List] request.
   */
  registryId: string;
}

export interface ListRegistriesRequest {
  $type: "yandex.cloud.containerregistry.v1.ListRegistriesRequest";
  /**
   * ID of the folder to list registries in.
   *
   * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListRegistriesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListRegistriesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [Registry.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
}

export interface ListRegistriesResponse {
  $type: "yandex.cloud.containerregistry.v1.ListRegistriesResponse";
  /** List of Registry resources. */
  registries: Registry[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListRegistriesRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListRegistriesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateRegistryRequest {
  $type: "yandex.cloud.containerregistry.v1.CreateRegistryRequest";
  /**
   * ID of the folder to create a registry in.
   *
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the registry.
   *
   * There may be only one registry per folder.
   */
  name: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
}

export interface CreateRegistryRequest_LabelsEntry {
  $type: "yandex.cloud.containerregistry.v1.CreateRegistryRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateRegistryMetadata {
  $type: "yandex.cloud.containerregistry.v1.CreateRegistryMetadata";
  /** ID of the registry that is being created. */
  registryId: string;
}

export interface UpdateRegistryRequest {
  $type: "yandex.cloud.containerregistry.v1.UpdateRegistryRequest";
  /**
   * ID of the Registry resource to update.
   *
   * To get the registry ID use a [RegistryService.List] request.
   */
  registryId: string;
  /** Field mask that specifies which fields of the Registry resource are going to be updated. */
  updateMask?: FieldMask;
  /**
   * Name of the registry.
   *
   * There may be only one registry per folder.
   */
  name: string;
  /**
   * Resource labels as `key:value` pairs.
   *
   * Existing set of `labels` is completely replaced by the provided set.
   */
  labels: { [key: string]: string };
}

export interface UpdateRegistryRequest_LabelsEntry {
  $type: "yandex.cloud.containerregistry.v1.UpdateRegistryRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateRegistryMetadata {
  $type: "yandex.cloud.containerregistry.v1.UpdateRegistryMetadata";
  /** ID of the Registry resource that is being updated. */
  registryId: string;
}

export interface DeleteRegistryRequest {
  $type: "yandex.cloud.containerregistry.v1.DeleteRegistryRequest";
  /** ID of the registry to delete. */
  registryId: string;
}

export interface DeleteRegistryMetadata {
  $type: "yandex.cloud.containerregistry.v1.DeleteRegistryMetadata";
  /** ID of the registry that is being deleted. */
  registryId: string;
}

export interface SetIpPermissionRequest {
  $type: "yandex.cloud.containerregistry.v1.SetIpPermissionRequest";
  /** ID of the registry for which ip permissions are being set. */
  registryId: string;
  /** IP permission to be set. */
  ipPermission: IpPermission[];
}

export interface UpdateIpPermissionRequest {
  $type: "yandex.cloud.containerregistry.v1.UpdateIpPermissionRequest";
  /** ID of the registry for which ip permissions are being updated. */
  registryId: string;
  /** Updates to IP permissions. */
  ipPermissionDeltas: IpPermissionDelta[];
}

export interface ListIpPermissionRequest {
  $type: "yandex.cloud.containerregistry.v1.ListIpPermissionRequest";
  /** ID of the Registry to return ip permission list. */
  registryId: string;
}

export interface ListIpPermissionsResponse {
  $type: "yandex.cloud.containerregistry.v1.ListIpPermissionsResponse";
  /** List of ip permissions for registry */
  permissions: IpPermission[];
}

export interface SetIpPermissionMetadata {
  $type: "yandex.cloud.containerregistry.v1.SetIpPermissionMetadata";
  /** ID of the registry that ip permission is being set. */
  registryId: string;
}

export interface UpdateIpPermissionMetadata {
  $type: "yandex.cloud.containerregistry.v1.UpdateIpPermissionMetadata";
  /** ID of the registry that ip permission is being updated. */
  registryId: string;
}

const baseGetRegistryRequest: object = {
  $type: "yandex.cloud.containerregistry.v1.GetRegistryRequest",
  registryId: "",
};

export const GetRegistryRequest = {
  $type: "yandex.cloud.containerregistry.v1.GetRegistryRequest" as const,

  encode(
    message: GetRegistryRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRegistryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetRegistryRequest } as GetRegistryRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registryId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRegistryRequest {
    const message = { ...baseGetRegistryRequest } as GetRegistryRequest;
    message.registryId =
      object.registryId !== undefined && object.registryId !== null
        ? String(object.registryId)
        : "";
    return message;
  },

  toJSON(message: GetRegistryRequest): unknown {
    const obj: any = {};
    message.registryId !== undefined && (obj.registryId = message.registryId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetRegistryRequest>, I>>(
    object: I
  ): GetRegistryRequest {
    const message = { ...baseGetRegistryRequest } as GetRegistryRequest;
    message.registryId = object.registryId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetRegistryRequest.$type, GetRegistryRequest);

const baseListRegistriesRequest: object = {
  $type: "yandex.cloud.containerregistry.v1.ListRegistriesRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListRegistriesRequest = {
  $type: "yandex.cloud.containerregistry.v1.ListRegistriesRequest" as const,

  encode(
    message: ListRegistriesRequest,
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
  ): ListRegistriesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListRegistriesRequest } as ListRegistriesRequest;
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

  fromJSON(object: any): ListRegistriesRequest {
    const message = { ...baseListRegistriesRequest } as ListRegistriesRequest;
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

  toJSON(message: ListRegistriesRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListRegistriesRequest>, I>>(
    object: I
  ): ListRegistriesRequest {
    const message = { ...baseListRegistriesRequest } as ListRegistriesRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListRegistriesRequest.$type, ListRegistriesRequest);

const baseListRegistriesResponse: object = {
  $type: "yandex.cloud.containerregistry.v1.ListRegistriesResponse",
  nextPageToken: "",
};

export const ListRegistriesResponse = {
  $type: "yandex.cloud.containerregistry.v1.ListRegistriesResponse" as const,

  encode(
    message: ListRegistriesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.registries) {
      Registry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListRegistriesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListRegistriesResponse } as ListRegistriesResponse;
    message.registries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registries.push(Registry.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListRegistriesResponse {
    const message = { ...baseListRegistriesResponse } as ListRegistriesResponse;
    message.registries = (object.registries ?? []).map((e: any) =>
      Registry.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListRegistriesResponse): unknown {
    const obj: any = {};
    if (message.registries) {
      obj.registries = message.registries.map((e) =>
        e ? Registry.toJSON(e) : undefined
      );
    } else {
      obj.registries = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListRegistriesResponse>, I>>(
    object: I
  ): ListRegistriesResponse {
    const message = { ...baseListRegistriesResponse } as ListRegistriesResponse;
    message.registries =
      object.registries?.map((e) => Registry.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListRegistriesResponse.$type, ListRegistriesResponse);

const baseCreateRegistryRequest: object = {
  $type: "yandex.cloud.containerregistry.v1.CreateRegistryRequest",
  folderId: "",
  name: "",
};

export const CreateRegistryRequest = {
  $type: "yandex.cloud.containerregistry.v1.CreateRegistryRequest" as const,

  encode(
    message: CreateRegistryRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateRegistryRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.containerregistry.v1.CreateRegistryRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(26).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateRegistryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateRegistryRequest } as CreateRegistryRequest;
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
          const entry3 = CreateRegistryRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.labels[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateRegistryRequest {
    const message = { ...baseCreateRegistryRequest } as CreateRegistryRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: CreateRegistryRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.name !== undefined && (obj.name = message.name);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateRegistryRequest>, I>>(
    object: I
  ): CreateRegistryRequest {
    const message = { ...baseCreateRegistryRequest } as CreateRegistryRequest;
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
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

messageTypeRegistry.set(CreateRegistryRequest.$type, CreateRegistryRequest);

const baseCreateRegistryRequest_LabelsEntry: object = {
  $type: "yandex.cloud.containerregistry.v1.CreateRegistryRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateRegistryRequest_LabelsEntry = {
  $type:
    "yandex.cloud.containerregistry.v1.CreateRegistryRequest.LabelsEntry" as const,

  encode(
    message: CreateRegistryRequest_LabelsEntry,
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
  ): CreateRegistryRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateRegistryRequest_LabelsEntry,
    } as CreateRegistryRequest_LabelsEntry;
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

  fromJSON(object: any): CreateRegistryRequest_LabelsEntry {
    const message = {
      ...baseCreateRegistryRequest_LabelsEntry,
    } as CreateRegistryRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateRegistryRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateRegistryRequest_LabelsEntry>, I>
  >(object: I): CreateRegistryRequest_LabelsEntry {
    const message = {
      ...baseCreateRegistryRequest_LabelsEntry,
    } as CreateRegistryRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateRegistryRequest_LabelsEntry.$type,
  CreateRegistryRequest_LabelsEntry
);

const baseCreateRegistryMetadata: object = {
  $type: "yandex.cloud.containerregistry.v1.CreateRegistryMetadata",
  registryId: "",
};

export const CreateRegistryMetadata = {
  $type: "yandex.cloud.containerregistry.v1.CreateRegistryMetadata" as const,

  encode(
    message: CreateRegistryMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateRegistryMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateRegistryMetadata } as CreateRegistryMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registryId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateRegistryMetadata {
    const message = { ...baseCreateRegistryMetadata } as CreateRegistryMetadata;
    message.registryId =
      object.registryId !== undefined && object.registryId !== null
        ? String(object.registryId)
        : "";
    return message;
  },

  toJSON(message: CreateRegistryMetadata): unknown {
    const obj: any = {};
    message.registryId !== undefined && (obj.registryId = message.registryId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateRegistryMetadata>, I>>(
    object: I
  ): CreateRegistryMetadata {
    const message = { ...baseCreateRegistryMetadata } as CreateRegistryMetadata;
    message.registryId = object.registryId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateRegistryMetadata.$type, CreateRegistryMetadata);

const baseUpdateRegistryRequest: object = {
  $type: "yandex.cloud.containerregistry.v1.UpdateRegistryRequest",
  registryId: "",
  name: "",
};

export const UpdateRegistryRequest = {
  $type: "yandex.cloud.containerregistry.v1.UpdateRegistryRequest" as const,

  encode(
    message: UpdateRegistryRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateRegistryRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.containerregistry.v1.UpdateRegistryRequest.LabelsEntry",
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
  ): UpdateRegistryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateRegistryRequest } as UpdateRegistryRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registryId = reader.string();
          break;
        case 2:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          const entry4 = UpdateRegistryRequest_LabelsEntry.decode(
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

  fromJSON(object: any): UpdateRegistryRequest {
    const message = { ...baseUpdateRegistryRequest } as UpdateRegistryRequest;
    message.registryId =
      object.registryId !== undefined && object.registryId !== null
        ? String(object.registryId)
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: UpdateRegistryRequest): unknown {
    const obj: any = {};
    message.registryId !== undefined && (obj.registryId = message.registryId);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.name !== undefined && (obj.name = message.name);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateRegistryRequest>, I>>(
    object: I
  ): UpdateRegistryRequest {
    const message = { ...baseUpdateRegistryRequest } as UpdateRegistryRequest;
    message.registryId = object.registryId ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.name = object.name ?? "";
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

messageTypeRegistry.set(UpdateRegistryRequest.$type, UpdateRegistryRequest);

const baseUpdateRegistryRequest_LabelsEntry: object = {
  $type: "yandex.cloud.containerregistry.v1.UpdateRegistryRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateRegistryRequest_LabelsEntry = {
  $type:
    "yandex.cloud.containerregistry.v1.UpdateRegistryRequest.LabelsEntry" as const,

  encode(
    message: UpdateRegistryRequest_LabelsEntry,
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
  ): UpdateRegistryRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateRegistryRequest_LabelsEntry,
    } as UpdateRegistryRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateRegistryRequest_LabelsEntry {
    const message = {
      ...baseUpdateRegistryRequest_LabelsEntry,
    } as UpdateRegistryRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateRegistryRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateRegistryRequest_LabelsEntry>, I>
  >(object: I): UpdateRegistryRequest_LabelsEntry {
    const message = {
      ...baseUpdateRegistryRequest_LabelsEntry,
    } as UpdateRegistryRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateRegistryRequest_LabelsEntry.$type,
  UpdateRegistryRequest_LabelsEntry
);

const baseUpdateRegistryMetadata: object = {
  $type: "yandex.cloud.containerregistry.v1.UpdateRegistryMetadata",
  registryId: "",
};

export const UpdateRegistryMetadata = {
  $type: "yandex.cloud.containerregistry.v1.UpdateRegistryMetadata" as const,

  encode(
    message: UpdateRegistryMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateRegistryMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateRegistryMetadata } as UpdateRegistryMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registryId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateRegistryMetadata {
    const message = { ...baseUpdateRegistryMetadata } as UpdateRegistryMetadata;
    message.registryId =
      object.registryId !== undefined && object.registryId !== null
        ? String(object.registryId)
        : "";
    return message;
  },

  toJSON(message: UpdateRegistryMetadata): unknown {
    const obj: any = {};
    message.registryId !== undefined && (obj.registryId = message.registryId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateRegistryMetadata>, I>>(
    object: I
  ): UpdateRegistryMetadata {
    const message = { ...baseUpdateRegistryMetadata } as UpdateRegistryMetadata;
    message.registryId = object.registryId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateRegistryMetadata.$type, UpdateRegistryMetadata);

const baseDeleteRegistryRequest: object = {
  $type: "yandex.cloud.containerregistry.v1.DeleteRegistryRequest",
  registryId: "",
};

export const DeleteRegistryRequest = {
  $type: "yandex.cloud.containerregistry.v1.DeleteRegistryRequest" as const,

  encode(
    message: DeleteRegistryRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteRegistryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteRegistryRequest } as DeleteRegistryRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registryId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteRegistryRequest {
    const message = { ...baseDeleteRegistryRequest } as DeleteRegistryRequest;
    message.registryId =
      object.registryId !== undefined && object.registryId !== null
        ? String(object.registryId)
        : "";
    return message;
  },

  toJSON(message: DeleteRegistryRequest): unknown {
    const obj: any = {};
    message.registryId !== undefined && (obj.registryId = message.registryId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteRegistryRequest>, I>>(
    object: I
  ): DeleteRegistryRequest {
    const message = { ...baseDeleteRegistryRequest } as DeleteRegistryRequest;
    message.registryId = object.registryId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteRegistryRequest.$type, DeleteRegistryRequest);

const baseDeleteRegistryMetadata: object = {
  $type: "yandex.cloud.containerregistry.v1.DeleteRegistryMetadata",
  registryId: "",
};

export const DeleteRegistryMetadata = {
  $type: "yandex.cloud.containerregistry.v1.DeleteRegistryMetadata" as const,

  encode(
    message: DeleteRegistryMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteRegistryMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteRegistryMetadata } as DeleteRegistryMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registryId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteRegistryMetadata {
    const message = { ...baseDeleteRegistryMetadata } as DeleteRegistryMetadata;
    message.registryId =
      object.registryId !== undefined && object.registryId !== null
        ? String(object.registryId)
        : "";
    return message;
  },

  toJSON(message: DeleteRegistryMetadata): unknown {
    const obj: any = {};
    message.registryId !== undefined && (obj.registryId = message.registryId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteRegistryMetadata>, I>>(
    object: I
  ): DeleteRegistryMetadata {
    const message = { ...baseDeleteRegistryMetadata } as DeleteRegistryMetadata;
    message.registryId = object.registryId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteRegistryMetadata.$type, DeleteRegistryMetadata);

const baseSetIpPermissionRequest: object = {
  $type: "yandex.cloud.containerregistry.v1.SetIpPermissionRequest",
  registryId: "",
};

export const SetIpPermissionRequest = {
  $type: "yandex.cloud.containerregistry.v1.SetIpPermissionRequest" as const,

  encode(
    message: SetIpPermissionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    for (const v of message.ipPermission) {
      IpPermission.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetIpPermissionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetIpPermissionRequest } as SetIpPermissionRequest;
    message.ipPermission = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registryId = reader.string();
          break;
        case 2:
          message.ipPermission.push(
            IpPermission.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetIpPermissionRequest {
    const message = { ...baseSetIpPermissionRequest } as SetIpPermissionRequest;
    message.registryId =
      object.registryId !== undefined && object.registryId !== null
        ? String(object.registryId)
        : "";
    message.ipPermission = (object.ipPermission ?? []).map((e: any) =>
      IpPermission.fromJSON(e)
    );
    return message;
  },

  toJSON(message: SetIpPermissionRequest): unknown {
    const obj: any = {};
    message.registryId !== undefined && (obj.registryId = message.registryId);
    if (message.ipPermission) {
      obj.ipPermission = message.ipPermission.map((e) =>
        e ? IpPermission.toJSON(e) : undefined
      );
    } else {
      obj.ipPermission = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetIpPermissionRequest>, I>>(
    object: I
  ): SetIpPermissionRequest {
    const message = { ...baseSetIpPermissionRequest } as SetIpPermissionRequest;
    message.registryId = object.registryId ?? "";
    message.ipPermission =
      object.ipPermission?.map((e) => IpPermission.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(SetIpPermissionRequest.$type, SetIpPermissionRequest);

const baseUpdateIpPermissionRequest: object = {
  $type: "yandex.cloud.containerregistry.v1.UpdateIpPermissionRequest",
  registryId: "",
};

export const UpdateIpPermissionRequest = {
  $type: "yandex.cloud.containerregistry.v1.UpdateIpPermissionRequest" as const,

  encode(
    message: UpdateIpPermissionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    for (const v of message.ipPermissionDeltas) {
      IpPermissionDelta.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateIpPermissionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateIpPermissionRequest,
    } as UpdateIpPermissionRequest;
    message.ipPermissionDeltas = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registryId = reader.string();
          break;
        case 2:
          message.ipPermissionDeltas.push(
            IpPermissionDelta.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateIpPermissionRequest {
    const message = {
      ...baseUpdateIpPermissionRequest,
    } as UpdateIpPermissionRequest;
    message.registryId =
      object.registryId !== undefined && object.registryId !== null
        ? String(object.registryId)
        : "";
    message.ipPermissionDeltas = (object.ipPermissionDeltas ?? []).map(
      (e: any) => IpPermissionDelta.fromJSON(e)
    );
    return message;
  },

  toJSON(message: UpdateIpPermissionRequest): unknown {
    const obj: any = {};
    message.registryId !== undefined && (obj.registryId = message.registryId);
    if (message.ipPermissionDeltas) {
      obj.ipPermissionDeltas = message.ipPermissionDeltas.map((e) =>
        e ? IpPermissionDelta.toJSON(e) : undefined
      );
    } else {
      obj.ipPermissionDeltas = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateIpPermissionRequest>, I>>(
    object: I
  ): UpdateIpPermissionRequest {
    const message = {
      ...baseUpdateIpPermissionRequest,
    } as UpdateIpPermissionRequest;
    message.registryId = object.registryId ?? "";
    message.ipPermissionDeltas =
      object.ipPermissionDeltas?.map((e) => IpPermissionDelta.fromPartial(e)) ||
      [];
    return message;
  },
};

messageTypeRegistry.set(
  UpdateIpPermissionRequest.$type,
  UpdateIpPermissionRequest
);

const baseListIpPermissionRequest: object = {
  $type: "yandex.cloud.containerregistry.v1.ListIpPermissionRequest",
  registryId: "",
};

export const ListIpPermissionRequest = {
  $type: "yandex.cloud.containerregistry.v1.ListIpPermissionRequest" as const,

  encode(
    message: ListIpPermissionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListIpPermissionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListIpPermissionRequest,
    } as ListIpPermissionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registryId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListIpPermissionRequest {
    const message = {
      ...baseListIpPermissionRequest,
    } as ListIpPermissionRequest;
    message.registryId =
      object.registryId !== undefined && object.registryId !== null
        ? String(object.registryId)
        : "";
    return message;
  },

  toJSON(message: ListIpPermissionRequest): unknown {
    const obj: any = {};
    message.registryId !== undefined && (obj.registryId = message.registryId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListIpPermissionRequest>, I>>(
    object: I
  ): ListIpPermissionRequest {
    const message = {
      ...baseListIpPermissionRequest,
    } as ListIpPermissionRequest;
    message.registryId = object.registryId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListIpPermissionRequest.$type, ListIpPermissionRequest);

const baseListIpPermissionsResponse: object = {
  $type: "yandex.cloud.containerregistry.v1.ListIpPermissionsResponse",
};

export const ListIpPermissionsResponse = {
  $type: "yandex.cloud.containerregistry.v1.ListIpPermissionsResponse" as const,

  encode(
    message: ListIpPermissionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.permissions) {
      IpPermission.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListIpPermissionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListIpPermissionsResponse,
    } as ListIpPermissionsResponse;
    message.permissions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.permissions.push(
            IpPermission.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListIpPermissionsResponse {
    const message = {
      ...baseListIpPermissionsResponse,
    } as ListIpPermissionsResponse;
    message.permissions = (object.permissions ?? []).map((e: any) =>
      IpPermission.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ListIpPermissionsResponse): unknown {
    const obj: any = {};
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) =>
        e ? IpPermission.toJSON(e) : undefined
      );
    } else {
      obj.permissions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListIpPermissionsResponse>, I>>(
    object: I
  ): ListIpPermissionsResponse {
    const message = {
      ...baseListIpPermissionsResponse,
    } as ListIpPermissionsResponse;
    message.permissions =
      object.permissions?.map((e) => IpPermission.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  ListIpPermissionsResponse.$type,
  ListIpPermissionsResponse
);

const baseSetIpPermissionMetadata: object = {
  $type: "yandex.cloud.containerregistry.v1.SetIpPermissionMetadata",
  registryId: "",
};

export const SetIpPermissionMetadata = {
  $type: "yandex.cloud.containerregistry.v1.SetIpPermissionMetadata" as const,

  encode(
    message: SetIpPermissionMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetIpPermissionMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetIpPermissionMetadata,
    } as SetIpPermissionMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registryId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetIpPermissionMetadata {
    const message = {
      ...baseSetIpPermissionMetadata,
    } as SetIpPermissionMetadata;
    message.registryId =
      object.registryId !== undefined && object.registryId !== null
        ? String(object.registryId)
        : "";
    return message;
  },

  toJSON(message: SetIpPermissionMetadata): unknown {
    const obj: any = {};
    message.registryId !== undefined && (obj.registryId = message.registryId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetIpPermissionMetadata>, I>>(
    object: I
  ): SetIpPermissionMetadata {
    const message = {
      ...baseSetIpPermissionMetadata,
    } as SetIpPermissionMetadata;
    message.registryId = object.registryId ?? "";
    return message;
  },
};

messageTypeRegistry.set(SetIpPermissionMetadata.$type, SetIpPermissionMetadata);

const baseUpdateIpPermissionMetadata: object = {
  $type: "yandex.cloud.containerregistry.v1.UpdateIpPermissionMetadata",
  registryId: "",
};

export const UpdateIpPermissionMetadata = {
  $type:
    "yandex.cloud.containerregistry.v1.UpdateIpPermissionMetadata" as const,

  encode(
    message: UpdateIpPermissionMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateIpPermissionMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateIpPermissionMetadata,
    } as UpdateIpPermissionMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registryId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateIpPermissionMetadata {
    const message = {
      ...baseUpdateIpPermissionMetadata,
    } as UpdateIpPermissionMetadata;
    message.registryId =
      object.registryId !== undefined && object.registryId !== null
        ? String(object.registryId)
        : "";
    return message;
  },

  toJSON(message: UpdateIpPermissionMetadata): unknown {
    const obj: any = {};
    message.registryId !== undefined && (obj.registryId = message.registryId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateIpPermissionMetadata>, I>>(
    object: I
  ): UpdateIpPermissionMetadata {
    const message = {
      ...baseUpdateIpPermissionMetadata,
    } as UpdateIpPermissionMetadata;
    message.registryId = object.registryId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateIpPermissionMetadata.$type,
  UpdateIpPermissionMetadata
);

/** A set of methods for managing Registry resources. */
export const RegistryServiceService = {
  /**
   * Returns the specified Registry resource.
   *
   * To get the list of available Registry resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetRegistryRequest) =>
      Buffer.from(GetRegistryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetRegistryRequest.decode(value),
    responseSerialize: (value: Registry) =>
      Buffer.from(Registry.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Registry.decode(value),
  },
  /** Retrieves the list of Registry resources in the specified folder. */
  list: {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListRegistriesRequest) =>
      Buffer.from(ListRegistriesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListRegistriesRequest.decode(value),
    responseSerialize: (value: ListRegistriesResponse) =>
      Buffer.from(ListRegistriesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListRegistriesResponse.decode(value),
  },
  /** Creates a registry in the specified folder. */
  create: {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateRegistryRequest) =>
      Buffer.from(CreateRegistryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateRegistryRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified registry. */
  update: {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateRegistryRequest) =>
      Buffer.from(UpdateRegistryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateRegistryRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified registry. */
  delete: {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteRegistryRequest) =>
      Buffer.from(DeleteRegistryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteRegistryRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists access bindings for the specified registry. */
  listAccessBindings: {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/ListAccessBindings",
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
  /** Sets access bindings for the specified registry. */
  setAccessBindings: {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/SetAccessBindings",
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
  /** Updates access bindings for the specified registry. */
  updateAccessBindings: {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/UpdateAccessBindings",
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
  /** List ip permissions for the specified registry. */
  listIpPermission: {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/ListIpPermission",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListIpPermissionRequest) =>
      Buffer.from(ListIpPermissionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListIpPermissionRequest.decode(value),
    responseSerialize: (value: ListIpPermissionsResponse) =>
      Buffer.from(ListIpPermissionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListIpPermissionsResponse.decode(value),
  },
  /** Set ip permissions for the specified registry. */
  setIpPermission: {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/SetIpPermission",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetIpPermissionRequest) =>
      Buffer.from(SetIpPermissionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetIpPermissionRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Update ip permissions for the specified registry. */
  updateIpPermission: {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/UpdateIpPermission",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateIpPermissionRequest) =>
      Buffer.from(UpdateIpPermissionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateIpPermissionRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface RegistryServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified Registry resource.
   *
   * To get the list of available Registry resources, make a [List] request.
   */
  get: handleUnaryCall<GetRegistryRequest, Registry>;
  /** Retrieves the list of Registry resources in the specified folder. */
  list: handleUnaryCall<ListRegistriesRequest, ListRegistriesResponse>;
  /** Creates a registry in the specified folder. */
  create: handleUnaryCall<CreateRegistryRequest, Operation>;
  /** Updates the specified registry. */
  update: handleUnaryCall<UpdateRegistryRequest, Operation>;
  /** Deletes the specified registry. */
  delete: handleUnaryCall<DeleteRegistryRequest, Operation>;
  /** Lists access bindings for the specified registry. */
  listAccessBindings: handleUnaryCall<
    ListAccessBindingsRequest,
    ListAccessBindingsResponse
  >;
  /** Sets access bindings for the specified registry. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the specified registry. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
  /** List ip permissions for the specified registry. */
  listIpPermission: handleUnaryCall<
    ListIpPermissionRequest,
    ListIpPermissionsResponse
  >;
  /** Set ip permissions for the specified registry. */
  setIpPermission: handleUnaryCall<SetIpPermissionRequest, Operation>;
  /** Update ip permissions for the specified registry. */
  updateIpPermission: handleUnaryCall<UpdateIpPermissionRequest, Operation>;
}

export interface RegistryServiceClient extends Client {
  /**
   * Returns the specified Registry resource.
   *
   * To get the list of available Registry resources, make a [List] request.
   */
  get(
    request: GetRegistryRequest,
    callback: (error: ServiceError | null, response: Registry) => void
  ): ClientUnaryCall;
  get(
    request: GetRegistryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Registry) => void
  ): ClientUnaryCall;
  get(
    request: GetRegistryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Registry) => void
  ): ClientUnaryCall;
  /** Retrieves the list of Registry resources in the specified folder. */
  list(
    request: ListRegistriesRequest,
    callback: (
      error: ServiceError | null,
      response: ListRegistriesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListRegistriesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListRegistriesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListRegistriesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListRegistriesResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a registry in the specified folder. */
  create(
    request: CreateRegistryRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateRegistryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateRegistryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified registry. */
  update(
    request: UpdateRegistryRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateRegistryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateRegistryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified registry. */
  delete(
    request: DeleteRegistryRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteRegistryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteRegistryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists access bindings for the specified registry. */
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
  /** Sets access bindings for the specified registry. */
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
  /** Updates access bindings for the specified registry. */
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
  /** List ip permissions for the specified registry. */
  listIpPermission(
    request: ListIpPermissionRequest,
    callback: (
      error: ServiceError | null,
      response: ListIpPermissionsResponse
    ) => void
  ): ClientUnaryCall;
  listIpPermission(
    request: ListIpPermissionRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListIpPermissionsResponse
    ) => void
  ): ClientUnaryCall;
  listIpPermission(
    request: ListIpPermissionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListIpPermissionsResponse
    ) => void
  ): ClientUnaryCall;
  /** Set ip permissions for the specified registry. */
  setIpPermission(
    request: SetIpPermissionRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  setIpPermission(
    request: SetIpPermissionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  setIpPermission(
    request: SetIpPermissionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Update ip permissions for the specified registry. */
  updateIpPermission(
    request: UpdateIpPermissionRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateIpPermission(
    request: UpdateIpPermissionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateIpPermission(
    request: UpdateIpPermissionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const RegistryServiceClient = makeGenericClientConstructor(
  RegistryServiceService,
  "yandex.cloud.containerregistry.v1.RegistryService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): RegistryServiceClient;
  service: typeof RegistryServiceService;
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
