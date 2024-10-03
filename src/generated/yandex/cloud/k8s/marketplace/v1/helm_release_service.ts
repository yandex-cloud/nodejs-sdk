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
import { HelmRelease } from "../../../../../yandex/cloud/k8s/marketplace/v1/helm_release";
import { Operation } from "../../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.k8s.marketplace.v1";

export interface ListHelmReleasesRequest {
  $type: "yandex.cloud.k8s.marketplace.v1.ListHelmReleasesRequest";
  /** The ID of the Kubernetes cluster to list Helm releases from. */
  clusterId: string;
  /** The maximum number of results per page that should be returned. */
  pageSize: number;
  /** Token for pagination to retrieve the next page of results. */
  pageToken: string;
}

export interface ListHelmReleasesResponse {
  $type: "yandex.cloud.k8s.marketplace.v1.ListHelmReleasesResponse";
  /** List of Helm releases in the Kubernetes cluster. */
  helmReleases: HelmRelease[];
  /** Token for retrieving the next page of Helm releases. */
  nextPageToken: string;
}

export interface GetHelmReleaseRequest {
  $type: "yandex.cloud.k8s.marketplace.v1.GetHelmReleaseRequest";
  /** The ID of the Helm release to retrieve. */
  id: string;
}

export interface InstallHelmReleaseRequest {
  $type: "yandex.cloud.k8s.marketplace.v1.InstallHelmReleaseRequest";
  /** The ID of the Kubernetes cluster where the Helm release is to be installed. */
  clusterId: string;
  /** The product version ID to install. */
  productVersionId: string;
  /** User-defined values for the Helm chart during installation. */
  userValues: ValueWithKey[];
}

export interface InstallHelmReleaseMetadata {
  $type: "yandex.cloud.k8s.marketplace.v1.InstallHelmReleaseMetadata";
  /** The ID of the Kubernetes cluster where the Helm release is being installed. */
  clusterId: string;
  /** The ID of the Helm release being installed. */
  helmReleaseId: string;
  /** The ID of the product version being deployed. */
  productVersionId: string;
}

export interface UpdateHelmReleaseRequest {
  $type: "yandex.cloud.k8s.marketplace.v1.UpdateHelmReleaseRequest";
  /** The ID of the Helm release to update. */
  id: string;
  /** The ID of the new product version for the release. */
  productVersionId: string;
  /** Custom user values to apply during the update. */
  userValues: ValueWithKey[];
}

export interface UpdateHelmReleaseMetadata {
  $type: "yandex.cloud.k8s.marketplace.v1.UpdateHelmReleaseMetadata";
  /** The ID of the Kubernetes cluster where the Helm release is being updated. */
  clusterId: string;
  /** The ID of the Helm release being updated. */
  helmReleaseId: string;
  /** The ID of the new product version to update the Helm release to. */
  productVersionId: string;
}

export interface UninstallHelmReleaseRequest {
  $type: "yandex.cloud.k8s.marketplace.v1.UninstallHelmReleaseRequest";
  /** The ID of the Helm release to retrieve. */
  id: string;
}

export interface UninstallHelmReleaseMetadata {
  $type: "yandex.cloud.k8s.marketplace.v1.UninstallHelmReleaseMetadata";
  /** The ID of the Kubernetes cluster where the release is being uninstalled. */
  clusterId: string;
  /** The ID of the Helm release being uninstalled. */
  helmReleaseId: string;
}

export interface ValueWithKey {
  $type: "yandex.cloud.k8s.marketplace.v1.ValueWithKey";
  /** The key associated with the value. */
  key: string;
  /** The value associated with the key. */
  value?: Value;
}

export interface Value {
  $type: "yandex.cloud.k8s.marketplace.v1.Value";
  /** The typed string value. */
  typedValue: string | undefined;
}

const baseListHelmReleasesRequest: object = {
  $type: "yandex.cloud.k8s.marketplace.v1.ListHelmReleasesRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListHelmReleasesRequest = {
  $type: "yandex.cloud.k8s.marketplace.v1.ListHelmReleasesRequest" as const,

  encode(
    message: ListHelmReleasesRequest,
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
  ): ListHelmReleasesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListHelmReleasesRequest,
    } as ListHelmReleasesRequest;
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

  fromJSON(object: any): ListHelmReleasesRequest {
    const message = {
      ...baseListHelmReleasesRequest,
    } as ListHelmReleasesRequest;
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

  toJSON(message: ListHelmReleasesRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListHelmReleasesRequest>, I>>(
    object: I
  ): ListHelmReleasesRequest {
    const message = {
      ...baseListHelmReleasesRequest,
    } as ListHelmReleasesRequest;
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListHelmReleasesRequest.$type, ListHelmReleasesRequest);

const baseListHelmReleasesResponse: object = {
  $type: "yandex.cloud.k8s.marketplace.v1.ListHelmReleasesResponse",
  nextPageToken: "",
};

export const ListHelmReleasesResponse = {
  $type: "yandex.cloud.k8s.marketplace.v1.ListHelmReleasesResponse" as const,

  encode(
    message: ListHelmReleasesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.helmReleases) {
      HelmRelease.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListHelmReleasesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListHelmReleasesResponse,
    } as ListHelmReleasesResponse;
    message.helmReleases = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.helmReleases.push(
            HelmRelease.decode(reader, reader.uint32())
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

  fromJSON(object: any): ListHelmReleasesResponse {
    const message = {
      ...baseListHelmReleasesResponse,
    } as ListHelmReleasesResponse;
    message.helmReleases = (object.helmReleases ?? []).map((e: any) =>
      HelmRelease.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListHelmReleasesResponse): unknown {
    const obj: any = {};
    if (message.helmReleases) {
      obj.helmReleases = message.helmReleases.map((e) =>
        e ? HelmRelease.toJSON(e) : undefined
      );
    } else {
      obj.helmReleases = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListHelmReleasesResponse>, I>>(
    object: I
  ): ListHelmReleasesResponse {
    const message = {
      ...baseListHelmReleasesResponse,
    } as ListHelmReleasesResponse;
    message.helmReleases =
      object.helmReleases?.map((e) => HelmRelease.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListHelmReleasesResponse.$type,
  ListHelmReleasesResponse
);

const baseGetHelmReleaseRequest: object = {
  $type: "yandex.cloud.k8s.marketplace.v1.GetHelmReleaseRequest",
  id: "",
};

export const GetHelmReleaseRequest = {
  $type: "yandex.cloud.k8s.marketplace.v1.GetHelmReleaseRequest" as const,

  encode(
    message: GetHelmReleaseRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetHelmReleaseRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetHelmReleaseRequest } as GetHelmReleaseRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetHelmReleaseRequest {
    const message = { ...baseGetHelmReleaseRequest } as GetHelmReleaseRequest;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    return message;
  },

  toJSON(message: GetHelmReleaseRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetHelmReleaseRequest>, I>>(
    object: I
  ): GetHelmReleaseRequest {
    const message = { ...baseGetHelmReleaseRequest } as GetHelmReleaseRequest;
    message.id = object.id ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetHelmReleaseRequest.$type, GetHelmReleaseRequest);

const baseInstallHelmReleaseRequest: object = {
  $type: "yandex.cloud.k8s.marketplace.v1.InstallHelmReleaseRequest",
  clusterId: "",
  productVersionId: "",
};

export const InstallHelmReleaseRequest = {
  $type: "yandex.cloud.k8s.marketplace.v1.InstallHelmReleaseRequest" as const,

  encode(
    message: InstallHelmReleaseRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.productVersionId !== "") {
      writer.uint32(18).string(message.productVersionId);
    }
    for (const v of message.userValues) {
      ValueWithKey.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InstallHelmReleaseRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInstallHelmReleaseRequest,
    } as InstallHelmReleaseRequest;
    message.userValues = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.productVersionId = reader.string();
          break;
        case 3:
          message.userValues.push(ValueWithKey.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InstallHelmReleaseRequest {
    const message = {
      ...baseInstallHelmReleaseRequest,
    } as InstallHelmReleaseRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.productVersionId =
      object.productVersionId !== undefined && object.productVersionId !== null
        ? String(object.productVersionId)
        : "";
    message.userValues = (object.userValues ?? []).map((e: any) =>
      ValueWithKey.fromJSON(e)
    );
    return message;
  },

  toJSON(message: InstallHelmReleaseRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.productVersionId !== undefined &&
      (obj.productVersionId = message.productVersionId);
    if (message.userValues) {
      obj.userValues = message.userValues.map((e) =>
        e ? ValueWithKey.toJSON(e) : undefined
      );
    } else {
      obj.userValues = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InstallHelmReleaseRequest>, I>>(
    object: I
  ): InstallHelmReleaseRequest {
    const message = {
      ...baseInstallHelmReleaseRequest,
    } as InstallHelmReleaseRequest;
    message.clusterId = object.clusterId ?? "";
    message.productVersionId = object.productVersionId ?? "";
    message.userValues =
      object.userValues?.map((e) => ValueWithKey.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  InstallHelmReleaseRequest.$type,
  InstallHelmReleaseRequest
);

const baseInstallHelmReleaseMetadata: object = {
  $type: "yandex.cloud.k8s.marketplace.v1.InstallHelmReleaseMetadata",
  clusterId: "",
  helmReleaseId: "",
  productVersionId: "",
};

export const InstallHelmReleaseMetadata = {
  $type: "yandex.cloud.k8s.marketplace.v1.InstallHelmReleaseMetadata" as const,

  encode(
    message: InstallHelmReleaseMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.helmReleaseId !== "") {
      writer.uint32(18).string(message.helmReleaseId);
    }
    if (message.productVersionId !== "") {
      writer.uint32(26).string(message.productVersionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InstallHelmReleaseMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInstallHelmReleaseMetadata,
    } as InstallHelmReleaseMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.helmReleaseId = reader.string();
          break;
        case 3:
          message.productVersionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InstallHelmReleaseMetadata {
    const message = {
      ...baseInstallHelmReleaseMetadata,
    } as InstallHelmReleaseMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.helmReleaseId =
      object.helmReleaseId !== undefined && object.helmReleaseId !== null
        ? String(object.helmReleaseId)
        : "";
    message.productVersionId =
      object.productVersionId !== undefined && object.productVersionId !== null
        ? String(object.productVersionId)
        : "";
    return message;
  },

  toJSON(message: InstallHelmReleaseMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.helmReleaseId !== undefined &&
      (obj.helmReleaseId = message.helmReleaseId);
    message.productVersionId !== undefined &&
      (obj.productVersionId = message.productVersionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InstallHelmReleaseMetadata>, I>>(
    object: I
  ): InstallHelmReleaseMetadata {
    const message = {
      ...baseInstallHelmReleaseMetadata,
    } as InstallHelmReleaseMetadata;
    message.clusterId = object.clusterId ?? "";
    message.helmReleaseId = object.helmReleaseId ?? "";
    message.productVersionId = object.productVersionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  InstallHelmReleaseMetadata.$type,
  InstallHelmReleaseMetadata
);

const baseUpdateHelmReleaseRequest: object = {
  $type: "yandex.cloud.k8s.marketplace.v1.UpdateHelmReleaseRequest",
  id: "",
  productVersionId: "",
};

export const UpdateHelmReleaseRequest = {
  $type: "yandex.cloud.k8s.marketplace.v1.UpdateHelmReleaseRequest" as const,

  encode(
    message: UpdateHelmReleaseRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.productVersionId !== "") {
      writer.uint32(18).string(message.productVersionId);
    }
    for (const v of message.userValues) {
      ValueWithKey.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateHelmReleaseRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateHelmReleaseRequest,
    } as UpdateHelmReleaseRequest;
    message.userValues = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.productVersionId = reader.string();
          break;
        case 3:
          message.userValues.push(ValueWithKey.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateHelmReleaseRequest {
    const message = {
      ...baseUpdateHelmReleaseRequest,
    } as UpdateHelmReleaseRequest;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.productVersionId =
      object.productVersionId !== undefined && object.productVersionId !== null
        ? String(object.productVersionId)
        : "";
    message.userValues = (object.userValues ?? []).map((e: any) =>
      ValueWithKey.fromJSON(e)
    );
    return message;
  },

  toJSON(message: UpdateHelmReleaseRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.productVersionId !== undefined &&
      (obj.productVersionId = message.productVersionId);
    if (message.userValues) {
      obj.userValues = message.userValues.map((e) =>
        e ? ValueWithKey.toJSON(e) : undefined
      );
    } else {
      obj.userValues = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateHelmReleaseRequest>, I>>(
    object: I
  ): UpdateHelmReleaseRequest {
    const message = {
      ...baseUpdateHelmReleaseRequest,
    } as UpdateHelmReleaseRequest;
    message.id = object.id ?? "";
    message.productVersionId = object.productVersionId ?? "";
    message.userValues =
      object.userValues?.map((e) => ValueWithKey.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  UpdateHelmReleaseRequest.$type,
  UpdateHelmReleaseRequest
);

const baseUpdateHelmReleaseMetadata: object = {
  $type: "yandex.cloud.k8s.marketplace.v1.UpdateHelmReleaseMetadata",
  clusterId: "",
  helmReleaseId: "",
  productVersionId: "",
};

export const UpdateHelmReleaseMetadata = {
  $type: "yandex.cloud.k8s.marketplace.v1.UpdateHelmReleaseMetadata" as const,

  encode(
    message: UpdateHelmReleaseMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.helmReleaseId !== "") {
      writer.uint32(18).string(message.helmReleaseId);
    }
    if (message.productVersionId !== "") {
      writer.uint32(26).string(message.productVersionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateHelmReleaseMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateHelmReleaseMetadata,
    } as UpdateHelmReleaseMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.helmReleaseId = reader.string();
          break;
        case 3:
          message.productVersionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateHelmReleaseMetadata {
    const message = {
      ...baseUpdateHelmReleaseMetadata,
    } as UpdateHelmReleaseMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.helmReleaseId =
      object.helmReleaseId !== undefined && object.helmReleaseId !== null
        ? String(object.helmReleaseId)
        : "";
    message.productVersionId =
      object.productVersionId !== undefined && object.productVersionId !== null
        ? String(object.productVersionId)
        : "";
    return message;
  },

  toJSON(message: UpdateHelmReleaseMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.helmReleaseId !== undefined &&
      (obj.helmReleaseId = message.helmReleaseId);
    message.productVersionId !== undefined &&
      (obj.productVersionId = message.productVersionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateHelmReleaseMetadata>, I>>(
    object: I
  ): UpdateHelmReleaseMetadata {
    const message = {
      ...baseUpdateHelmReleaseMetadata,
    } as UpdateHelmReleaseMetadata;
    message.clusterId = object.clusterId ?? "";
    message.helmReleaseId = object.helmReleaseId ?? "";
    message.productVersionId = object.productVersionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateHelmReleaseMetadata.$type,
  UpdateHelmReleaseMetadata
);

const baseUninstallHelmReleaseRequest: object = {
  $type: "yandex.cloud.k8s.marketplace.v1.UninstallHelmReleaseRequest",
  id: "",
};

export const UninstallHelmReleaseRequest = {
  $type: "yandex.cloud.k8s.marketplace.v1.UninstallHelmReleaseRequest" as const,

  encode(
    message: UninstallHelmReleaseRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UninstallHelmReleaseRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUninstallHelmReleaseRequest,
    } as UninstallHelmReleaseRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UninstallHelmReleaseRequest {
    const message = {
      ...baseUninstallHelmReleaseRequest,
    } as UninstallHelmReleaseRequest;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    return message;
  },

  toJSON(message: UninstallHelmReleaseRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UninstallHelmReleaseRequest>, I>>(
    object: I
  ): UninstallHelmReleaseRequest {
    const message = {
      ...baseUninstallHelmReleaseRequest,
    } as UninstallHelmReleaseRequest;
    message.id = object.id ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UninstallHelmReleaseRequest.$type,
  UninstallHelmReleaseRequest
);

const baseUninstallHelmReleaseMetadata: object = {
  $type: "yandex.cloud.k8s.marketplace.v1.UninstallHelmReleaseMetadata",
  clusterId: "",
  helmReleaseId: "",
};

export const UninstallHelmReleaseMetadata = {
  $type:
    "yandex.cloud.k8s.marketplace.v1.UninstallHelmReleaseMetadata" as const,

  encode(
    message: UninstallHelmReleaseMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.helmReleaseId !== "") {
      writer.uint32(18).string(message.helmReleaseId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UninstallHelmReleaseMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUninstallHelmReleaseMetadata,
    } as UninstallHelmReleaseMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.helmReleaseId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UninstallHelmReleaseMetadata {
    const message = {
      ...baseUninstallHelmReleaseMetadata,
    } as UninstallHelmReleaseMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.helmReleaseId =
      object.helmReleaseId !== undefined && object.helmReleaseId !== null
        ? String(object.helmReleaseId)
        : "";
    return message;
  },

  toJSON(message: UninstallHelmReleaseMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.helmReleaseId !== undefined &&
      (obj.helmReleaseId = message.helmReleaseId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UninstallHelmReleaseMetadata>, I>>(
    object: I
  ): UninstallHelmReleaseMetadata {
    const message = {
      ...baseUninstallHelmReleaseMetadata,
    } as UninstallHelmReleaseMetadata;
    message.clusterId = object.clusterId ?? "";
    message.helmReleaseId = object.helmReleaseId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UninstallHelmReleaseMetadata.$type,
  UninstallHelmReleaseMetadata
);

const baseValueWithKey: object = {
  $type: "yandex.cloud.k8s.marketplace.v1.ValueWithKey",
  key: "",
};

export const ValueWithKey = {
  $type: "yandex.cloud.k8s.marketplace.v1.ValueWithKey" as const,

  encode(
    message: ValueWithKey,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValueWithKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValueWithKey } as ValueWithKey;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Value.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValueWithKey {
    const message = { ...baseValueWithKey } as ValueWithKey;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Value.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: ValueWithKey): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Value.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValueWithKey>, I>>(
    object: I
  ): ValueWithKey {
    const message = { ...baseValueWithKey } as ValueWithKey;
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Value.fromPartial(object.value)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ValueWithKey.$type, ValueWithKey);

const baseValue: object = { $type: "yandex.cloud.k8s.marketplace.v1.Value" };

export const Value = {
  $type: "yandex.cloud.k8s.marketplace.v1.Value" as const,

  encode(message: Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typedValue !== undefined) {
      writer.uint32(10).string(message.typedValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Value {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValue } as Value;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.typedValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Value {
    const message = { ...baseValue } as Value;
    message.typedValue =
      object.typedValue !== undefined && object.typedValue !== null
        ? String(object.typedValue)
        : undefined;
    return message;
  },

  toJSON(message: Value): unknown {
    const obj: any = {};
    message.typedValue !== undefined && (obj.typedValue = message.typedValue);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Value>, I>>(object: I): Value {
    const message = { ...baseValue } as Value;
    message.typedValue = object.typedValue ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Value.$type, Value);

/** A set of methods for managing Helm release. */
export const HelmReleaseServiceService = {
  /** Retrieves the list of Helm releases in the specified Kubernetes Cluster. */
  list: {
    path: "/yandex.cloud.k8s.marketplace.v1.HelmReleaseService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListHelmReleasesRequest) =>
      Buffer.from(ListHelmReleasesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListHelmReleasesRequest.decode(value),
    responseSerialize: (value: ListHelmReleasesResponse) =>
      Buffer.from(ListHelmReleasesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListHelmReleasesResponse.decode(value),
  },
  /** Returns the specified Helm release. */
  get: {
    path: "/yandex.cloud.k8s.marketplace.v1.HelmReleaseService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetHelmReleaseRequest) =>
      Buffer.from(GetHelmReleaseRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetHelmReleaseRequest.decode(value),
    responseSerialize: (value: HelmRelease) =>
      Buffer.from(HelmRelease.encode(value).finish()),
    responseDeserialize: (value: Buffer) => HelmRelease.decode(value),
  },
  /** Installs helm release into specified Kubernetes Cluster. */
  install: {
    path: "/yandex.cloud.k8s.marketplace.v1.HelmReleaseService/Install",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: InstallHelmReleaseRequest) =>
      Buffer.from(InstallHelmReleaseRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      InstallHelmReleaseRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates helm release. */
  update: {
    path: "/yandex.cloud.k8s.marketplace.v1.HelmReleaseService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateHelmReleaseRequest) =>
      Buffer.from(UpdateHelmReleaseRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateHelmReleaseRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Uninstalls helm release. */
  uninstall: {
    path: "/yandex.cloud.k8s.marketplace.v1.HelmReleaseService/Uninstall",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UninstallHelmReleaseRequest) =>
      Buffer.from(UninstallHelmReleaseRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UninstallHelmReleaseRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface HelmReleaseServiceServer extends UntypedServiceImplementation {
  /** Retrieves the list of Helm releases in the specified Kubernetes Cluster. */
  list: handleUnaryCall<ListHelmReleasesRequest, ListHelmReleasesResponse>;
  /** Returns the specified Helm release. */
  get: handleUnaryCall<GetHelmReleaseRequest, HelmRelease>;
  /** Installs helm release into specified Kubernetes Cluster. */
  install: handleUnaryCall<InstallHelmReleaseRequest, Operation>;
  /** Updates helm release. */
  update: handleUnaryCall<UpdateHelmReleaseRequest, Operation>;
  /** Uninstalls helm release. */
  uninstall: handleUnaryCall<UninstallHelmReleaseRequest, Operation>;
}

export interface HelmReleaseServiceClient extends Client {
  /** Retrieves the list of Helm releases in the specified Kubernetes Cluster. */
  list(
    request: ListHelmReleasesRequest,
    callback: (
      error: ServiceError | null,
      response: ListHelmReleasesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListHelmReleasesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListHelmReleasesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListHelmReleasesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListHelmReleasesResponse
    ) => void
  ): ClientUnaryCall;
  /** Returns the specified Helm release. */
  get(
    request: GetHelmReleaseRequest,
    callback: (error: ServiceError | null, response: HelmRelease) => void
  ): ClientUnaryCall;
  get(
    request: GetHelmReleaseRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: HelmRelease) => void
  ): ClientUnaryCall;
  get(
    request: GetHelmReleaseRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: HelmRelease) => void
  ): ClientUnaryCall;
  /** Installs helm release into specified Kubernetes Cluster. */
  install(
    request: InstallHelmReleaseRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  install(
    request: InstallHelmReleaseRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  install(
    request: InstallHelmReleaseRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates helm release. */
  update(
    request: UpdateHelmReleaseRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateHelmReleaseRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateHelmReleaseRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Uninstalls helm release. */
  uninstall(
    request: UninstallHelmReleaseRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  uninstall(
    request: UninstallHelmReleaseRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  uninstall(
    request: UninstallHelmReleaseRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const HelmReleaseServiceClient = makeGenericClientConstructor(
  HelmReleaseServiceService,
  "yandex.cloud.k8s.marketplace.v1.HelmReleaseService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): HelmReleaseServiceClient;
  service: typeof HelmReleaseServiceService;
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
