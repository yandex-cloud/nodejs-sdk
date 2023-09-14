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
  AnonymousAccessFlags,
  ACL,
  WebsiteSettings,
  Versioning,
  ObjectLock,
  Encryption,
  Bucket,
  Tag,
  CorsRule,
  LifecycleRule,
  BucketStats,
  HTTPSConfig,
  versioningFromJSON,
  versioningToJSON,
} from "../../../../yandex/cloud/storage/v1/bucket";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { Struct } from "../../../../google/protobuf/struct";

export const protobufPackage = "yandex.cloud.storage.v1";

export interface GetBucketRequest {
  $type: "yandex.cloud.storage.v1.GetBucketRequest";
  /**
   * Name of the bucket to return.
   *
   * To get the bucket name, make a [BucketService.List] request.
   */
  name: string;
  /**
   * Scope of information about the bucket to return.
   *
   * Access to scopes is managed via [Identity and Access Management roles](/docs/storage/security),
   * bucket [ACL](/docs/storage/concepts/acl) and [policies](/docs/storage/concepts/policy).
   */
  view: GetBucketRequest_View;
}

export enum GetBucketRequest_View {
  VIEW_UNSPECIFIED = 0,
  /**
   * VIEW_BASIC - Returns basic information about a bucket.
   *
   * The following fields will _not_ be returned: [Bucket.acl], [Bucket.cors], [Bucket.website_settings],
   * [Bucket.lifecycle_rules], [Bucket.tags].
   */
  VIEW_BASIC = 1,
  /**
   * VIEW_ACL - Returns basic information and access control list (ACL) for the bucket.
   *
   * The following fields will _not_ be returned: [Bucket.cors], [Bucket.website_settings], [Bucket.lifecycle_rules],
   * [Bucket.tags].
   */
  VIEW_ACL = 2,
  /** VIEW_FULL - Returns full information about a bucket. */
  VIEW_FULL = 3,
  UNRECOGNIZED = -1,
}

export function getBucketRequest_ViewFromJSON(
  object: any
): GetBucketRequest_View {
  switch (object) {
    case 0:
    case "VIEW_UNSPECIFIED":
      return GetBucketRequest_View.VIEW_UNSPECIFIED;
    case 1:
    case "VIEW_BASIC":
      return GetBucketRequest_View.VIEW_BASIC;
    case 2:
    case "VIEW_ACL":
      return GetBucketRequest_View.VIEW_ACL;
    case 3:
    case "VIEW_FULL":
      return GetBucketRequest_View.VIEW_FULL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GetBucketRequest_View.UNRECOGNIZED;
  }
}

export function getBucketRequest_ViewToJSON(
  object: GetBucketRequest_View
): string {
  switch (object) {
    case GetBucketRequest_View.VIEW_UNSPECIFIED:
      return "VIEW_UNSPECIFIED";
    case GetBucketRequest_View.VIEW_BASIC:
      return "VIEW_BASIC";
    case GetBucketRequest_View.VIEW_ACL:
      return "VIEW_ACL";
    case GetBucketRequest_View.VIEW_FULL:
      return "VIEW_FULL";
    default:
      return "UNKNOWN";
  }
}

export interface ListBucketsRequest {
  $type: "yandex.cloud.storage.v1.ListBucketsRequest";
  /**
   * ID of the folder to list buckets in.
   *
   * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
}

export interface ListBucketsResponse {
  $type: "yandex.cloud.storage.v1.ListBucketsResponse";
  /** List of buckets in the specified folder. */
  buckets: Bucket[];
}

export interface CreateBucketRequest {
  $type: "yandex.cloud.storage.v1.CreateBucketRequest";
  /**
   * Name of the bucket.
   *
   * The name must be unique within the platform. For naming limitations and rules, see
   * [documentation](/docs/storage/concepts/bucket#naming).
   */
  name: string;
  /**
   * ID of the folder to create a bucket in.
   *
   * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Default storage class for objects in the bucket. Supported classes are standard storage (`STANDARD`), cold storage
   * (`COLD`, `STANDARD_IA`, `NEARLINE` all synonyms), and ice storage (`ICE` and `GLACIER` are synonyms).
   * For details, see [documentation](/docs/storage/concepts/storage-class).
   */
  defaultStorageClass: string;
  /**
   * Maximum size of the bucket.
   * For details, see [documentation](/docs/storage/operations/buckets/limit-max-volume).
   */
  maxSize: number;
  /**
   * Flags for configuring public (anonymous) access to the bucket's content and settings.
   * For details, see [documentation](/docs/storage/concepts/bucket#bucket-access).
   */
  anonymousAccessFlags?: AnonymousAccessFlags;
  /**
   * Access control list (ACL) of the bucket.
   * For details, see [documentation](/docs/storage/concepts/acl).
   */
  acl?: ACL;
  /**
   * List of tags for the bucket.
   * For details, see [documentation](/docs/resource-manager/concepts/labels).
   */
  tags: Tag[];
}

export interface CreateBucketMetadata {
  $type: "yandex.cloud.storage.v1.CreateBucketMetadata";
  /** Name of the bucket that is being created. */
  name: string;
}

export interface UpdateBucketRequest {
  $type: "yandex.cloud.storage.v1.UpdateBucketRequest";
  /**
   * Name of the bucket to update.
   *
   * The name cannot be updated.
   *
   * To get the bucket name, make a [BucketService.List] request.
   */
  name: string;
  /**
   * Update mask that specifies which attributes of the bucket should be updated.
   * Use * for full update.
   */
  updateMask?: FieldMask;
  /**
   * Flags for configuring public (anonymous) access to the bucket's content and settings.
   * For details, see [documentation](/docs/storage/concepts/bucket#bucket-access).
   */
  anonymousAccessFlags?: AnonymousAccessFlags;
  /**
   * Default storage class for objects in the bucket. Supported classes are standard storage (`STANDARD`), cold storage
   * (`COLD`, `STANDARD_IA`, `NEARLINE` all synonyms), and ice storage (`ICE` and `GLACIER` are synonyms).
   * For details, see [documentation](/docs/storage/concepts/storage-class).
   */
  defaultStorageClass: string;
  /**
   * Maximum size of the bucket, in bytes.
   * For details, see [documentation](/docs/storage/operations/buckets/limit-max-volume).
   */
  maxSize: number;
  /**
   * List of rules for cross-domain requests to objects in the bucket (cross-origin resource sharing, CORS).
   * For details, see [documentation](/docs/storage/concepts/cors).
   */
  cors: CorsRule[];
  /**
   * Configuration for hosting a static website in the bucket.
   * For details, see [documentation](/docs/storage/concepts/hosting).
   */
  websiteSettings?: WebsiteSettings;
  /**
   * Bucket versioning status.
   * For details, see [documentation](/docs/storage/concepts/versioning).
   */
  versioning: Versioning;
  /**
   * List of object lifecycle rules for the bucket.
   * For details, see [documentation](/docs/storage/concepts/lifecycles).
   */
  lifecycleRules: LifecycleRule[];
  /**
   * Bucket policies that set permissions for actions with the bucket, its objects, and groups of objects.
   * For details, see [documentation](/docs/storage/concepts/policy).
   */
  policy?: { [key: string]: any };
  /**
   * Access control list (ACL) of the bucket.
   * For details, see [documentation](/docs/storage/concepts/acl).
   */
  acl?: ACL;
  /**
   * List of tags for the bucket.
   * For details, see [documentation](/docs/resource-manager/concepts/labels).
   */
  tags: Tag[];
  /**
   * Configuration for object lock on the bucket.
   * For details about the concept, see [documentation](/docs/storage/concepts/object-lock).
   */
  objectLock?: ObjectLock;
  /**
   * Configuration for bucket's encryption
   * For detauls, see [documentation](/docs/storage/concepts/encryption)
   */
  encryption?: Encryption;
}

export interface UpdateBucketMetadata {
  $type: "yandex.cloud.storage.v1.UpdateBucketMetadata";
  /** Name of the bucket that is being updated. */
  name: string;
}

/** DeleteBucketRequest deletes requested bucket from the Cloud. */
export interface DeleteBucketRequest {
  $type: "yandex.cloud.storage.v1.DeleteBucketRequest";
  /**
   * Name of the bucket to update.
   *
   * To get the bucket name, make a [BucketService.List] request.
   */
  name: string;
}

export interface DeleteBucketMetadata {
  $type: "yandex.cloud.storage.v1.DeleteBucketMetadata";
  /** Name of the bucket that is being deleted. */
  name: string;
}

export interface GetBucketStatsRequest {
  $type: "yandex.cloud.storage.v1.GetBucketStatsRequest";
  /** Name of the bucket to return the statistics for. */
  name: string;
}

export interface GetBucketHTTPSConfigRequest {
  $type: "yandex.cloud.storage.v1.GetBucketHTTPSConfigRequest";
  /** Name of the bucket to return the HTTPS configuration for. */
  name: string;
}

export interface SelfManagedHTTPSConfigParams {
  $type: "yandex.cloud.storage.v1.SelfManagedHTTPSConfigParams";
  /** [PEM](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail)-encoded certificate. */
  certificatePem: string;
  /** [PEM](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail)-encoded private key for the certificate. */
  privateKeyPem: string;
}

/** A resource for a TLS certificate from Certificate Manager. */
export interface CertificateManagerHTTPSConfigParams {
  $type: "yandex.cloud.storage.v1.CertificateManagerHTTPSConfigParams";
  /**
   * ID of the certificate.
   *
   * To get the list of all available certificates, make a [yandex.cloud.certificatemanager.v1.CertificateService.List]
   * request.
   */
  certificateId: string;
}

export interface SetBucketHTTPSConfigRequest {
  $type: "yandex.cloud.storage.v1.SetBucketHTTPSConfigRequest";
  /** Name of the bucket to update the HTTPS configuration for. */
  name: string;
  /**
   * Your TLS certificate, uploaded directly.
   *
   * Object Storage only supports [PEM](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail)-encoded certificates.
   */
  selfManaged?: SelfManagedHTTPSConfigParams | undefined;
  /**
   * TLS certificate from Certificate Manager.
   *
   * To create a certificate in Certificate Manager, make a
   * [yandex.cloud.certificatemanager.v1.CertificateService.Create] request.
   */
  certificateManager?: CertificateManagerHTTPSConfigParams | undefined;
}

export interface SetBucketHTTPSConfigMetadata {
  $type: "yandex.cloud.storage.v1.SetBucketHTTPSConfigMetadata";
  /** Name of the bucket the HTTPS configuration is being updated for. */
  name: string;
}

export interface DeleteBucketHTTPSConfigRequest {
  $type: "yandex.cloud.storage.v1.DeleteBucketHTTPSConfigRequest";
  /** Name of the bucket to delete the HTTPS configuration for. */
  name: string;
}

export interface DeleteBucketHTTPSConfigMetadata {
  $type: "yandex.cloud.storage.v1.DeleteBucketHTTPSConfigMetadata";
  /** Name of the bucket the HTTPS configuration is being deleted for. */
  name: string;
}

const baseGetBucketRequest: object = {
  $type: "yandex.cloud.storage.v1.GetBucketRequest",
  name: "",
  view: 0,
};

export const GetBucketRequest = {
  $type: "yandex.cloud.storage.v1.GetBucketRequest" as const,

  encode(
    message: GetBucketRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.view !== 0) {
      writer.uint32(16).int32(message.view);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBucketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetBucketRequest } as GetBucketRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.view = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBucketRequest {
    const message = { ...baseGetBucketRequest } as GetBucketRequest;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.view =
      object.view !== undefined && object.view !== null
        ? getBucketRequest_ViewFromJSON(object.view)
        : 0;
    return message;
  },

  toJSON(message: GetBucketRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.view !== undefined &&
      (obj.view = getBucketRequest_ViewToJSON(message.view));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBucketRequest>, I>>(
    object: I
  ): GetBucketRequest {
    const message = { ...baseGetBucketRequest } as GetBucketRequest;
    message.name = object.name ?? "";
    message.view = object.view ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GetBucketRequest.$type, GetBucketRequest);

const baseListBucketsRequest: object = {
  $type: "yandex.cloud.storage.v1.ListBucketsRequest",
  folderId: "",
};

export const ListBucketsRequest = {
  $type: "yandex.cloud.storage.v1.ListBucketsRequest" as const,

  encode(
    message: ListBucketsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBucketsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListBucketsRequest } as ListBucketsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListBucketsRequest {
    const message = { ...baseListBucketsRequest } as ListBucketsRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    return message;
  },

  toJSON(message: ListBucketsRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListBucketsRequest>, I>>(
    object: I
  ): ListBucketsRequest {
    const message = { ...baseListBucketsRequest } as ListBucketsRequest;
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBucketsRequest.$type, ListBucketsRequest);

const baseListBucketsResponse: object = {
  $type: "yandex.cloud.storage.v1.ListBucketsResponse",
};

export const ListBucketsResponse = {
  $type: "yandex.cloud.storage.v1.ListBucketsResponse" as const,

  encode(
    message: ListBucketsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.buckets) {
      Bucket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBucketsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListBucketsResponse } as ListBucketsResponse;
    message.buckets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buckets.push(Bucket.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListBucketsResponse {
    const message = { ...baseListBucketsResponse } as ListBucketsResponse;
    message.buckets = (object.buckets ?? []).map((e: any) =>
      Bucket.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ListBucketsResponse): unknown {
    const obj: any = {};
    if (message.buckets) {
      obj.buckets = message.buckets.map((e) =>
        e ? Bucket.toJSON(e) : undefined
      );
    } else {
      obj.buckets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListBucketsResponse>, I>>(
    object: I
  ): ListBucketsResponse {
    const message = { ...baseListBucketsResponse } as ListBucketsResponse;
    message.buckets = object.buckets?.map((e) => Bucket.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ListBucketsResponse.$type, ListBucketsResponse);

const baseCreateBucketRequest: object = {
  $type: "yandex.cloud.storage.v1.CreateBucketRequest",
  name: "",
  folderId: "",
  defaultStorageClass: "",
  maxSize: 0,
};

export const CreateBucketRequest = {
  $type: "yandex.cloud.storage.v1.CreateBucketRequest" as const,

  encode(
    message: CreateBucketRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.defaultStorageClass !== "") {
      writer.uint32(34).string(message.defaultStorageClass);
    }
    if (message.maxSize !== 0) {
      writer.uint32(40).int64(message.maxSize);
    }
    if (message.anonymousAccessFlags !== undefined) {
      AnonymousAccessFlags.encode(
        message.anonymousAccessFlags,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.acl !== undefined) {
      ACL.encode(message.acl, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.tags) {
      Tag.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateBucketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateBucketRequest } as CreateBucketRequest;
    message.tags = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.folderId = reader.string();
          break;
        case 4:
          message.defaultStorageClass = reader.string();
          break;
        case 5:
          message.maxSize = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.anonymousAccessFlags = AnonymousAccessFlags.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.acl = ACL.decode(reader, reader.uint32());
          break;
        case 8:
          message.tags.push(Tag.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateBucketRequest {
    const message = { ...baseCreateBucketRequest } as CreateBucketRequest;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.defaultStorageClass =
      object.defaultStorageClass !== undefined &&
      object.defaultStorageClass !== null
        ? String(object.defaultStorageClass)
        : "";
    message.maxSize =
      object.maxSize !== undefined && object.maxSize !== null
        ? Number(object.maxSize)
        : 0;
    message.anonymousAccessFlags =
      object.anonymousAccessFlags !== undefined &&
      object.anonymousAccessFlags !== null
        ? AnonymousAccessFlags.fromJSON(object.anonymousAccessFlags)
        : undefined;
    message.acl =
      object.acl !== undefined && object.acl !== null
        ? ACL.fromJSON(object.acl)
        : undefined;
    message.tags = (object.tags ?? []).map((e: any) => Tag.fromJSON(e));
    return message;
  },

  toJSON(message: CreateBucketRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.defaultStorageClass !== undefined &&
      (obj.defaultStorageClass = message.defaultStorageClass);
    message.maxSize !== undefined &&
      (obj.maxSize = Math.round(message.maxSize));
    message.anonymousAccessFlags !== undefined &&
      (obj.anonymousAccessFlags = message.anonymousAccessFlags
        ? AnonymousAccessFlags.toJSON(message.anonymousAccessFlags)
        : undefined);
    message.acl !== undefined &&
      (obj.acl = message.acl ? ACL.toJSON(message.acl) : undefined);
    if (message.tags) {
      obj.tags = message.tags.map((e) => (e ? Tag.toJSON(e) : undefined));
    } else {
      obj.tags = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateBucketRequest>, I>>(
    object: I
  ): CreateBucketRequest {
    const message = { ...baseCreateBucketRequest } as CreateBucketRequest;
    message.name = object.name ?? "";
    message.folderId = object.folderId ?? "";
    message.defaultStorageClass = object.defaultStorageClass ?? "";
    message.maxSize = object.maxSize ?? 0;
    message.anonymousAccessFlags =
      object.anonymousAccessFlags !== undefined &&
      object.anonymousAccessFlags !== null
        ? AnonymousAccessFlags.fromPartial(object.anonymousAccessFlags)
        : undefined;
    message.acl =
      object.acl !== undefined && object.acl !== null
        ? ACL.fromPartial(object.acl)
        : undefined;
    message.tags = object.tags?.map((e) => Tag.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(CreateBucketRequest.$type, CreateBucketRequest);

const baseCreateBucketMetadata: object = {
  $type: "yandex.cloud.storage.v1.CreateBucketMetadata",
  name: "",
};

export const CreateBucketMetadata = {
  $type: "yandex.cloud.storage.v1.CreateBucketMetadata" as const,

  encode(
    message: CreateBucketMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateBucketMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateBucketMetadata } as CreateBucketMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateBucketMetadata {
    const message = { ...baseCreateBucketMetadata } as CreateBucketMetadata;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: CreateBucketMetadata): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateBucketMetadata>, I>>(
    object: I
  ): CreateBucketMetadata {
    const message = { ...baseCreateBucketMetadata } as CreateBucketMetadata;
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateBucketMetadata.$type, CreateBucketMetadata);

const baseUpdateBucketRequest: object = {
  $type: "yandex.cloud.storage.v1.UpdateBucketRequest",
  name: "",
  defaultStorageClass: "",
  maxSize: 0,
  versioning: 0,
};

export const UpdateBucketRequest = {
  $type: "yandex.cloud.storage.v1.UpdateBucketRequest" as const,

  encode(
    message: UpdateBucketRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
    }
    if (message.anonymousAccessFlags !== undefined) {
      AnonymousAccessFlags.encode(
        message.anonymousAccessFlags,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.defaultStorageClass !== "") {
      writer.uint32(34).string(message.defaultStorageClass);
    }
    if (message.maxSize !== 0) {
      writer.uint32(40).int64(message.maxSize);
    }
    for (const v of message.cors) {
      CorsRule.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.websiteSettings !== undefined) {
      WebsiteSettings.encode(
        message.websiteSettings,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.versioning !== 0) {
      writer.uint32(64).int32(message.versioning);
    }
    for (const v of message.lifecycleRules) {
      LifecycleRule.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.policy !== undefined) {
      Struct.encode(
        Struct.wrap(message.policy),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.acl !== undefined) {
      ACL.encode(message.acl, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.tags) {
      Tag.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.objectLock !== undefined) {
      ObjectLock.encode(message.objectLock, writer.uint32(106).fork()).ldelim();
    }
    if (message.encryption !== undefined) {
      Encryption.encode(message.encryption, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateBucketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateBucketRequest } as UpdateBucketRequest;
    message.cors = [];
    message.lifecycleRules = [];
    message.tags = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 3:
          message.anonymousAccessFlags = AnonymousAccessFlags.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.defaultStorageClass = reader.string();
          break;
        case 5:
          message.maxSize = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.cors.push(CorsRule.decode(reader, reader.uint32()));
          break;
        case 7:
          message.websiteSettings = WebsiteSettings.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.versioning = reader.int32() as any;
          break;
        case 9:
          message.lifecycleRules.push(
            LifecycleRule.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.policy = Struct.unwrap(
            Struct.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.acl = ACL.decode(reader, reader.uint32());
          break;
        case 12:
          message.tags.push(Tag.decode(reader, reader.uint32()));
          break;
        case 13:
          message.objectLock = ObjectLock.decode(reader, reader.uint32());
          break;
        case 14:
          message.encryption = Encryption.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateBucketRequest {
    const message = { ...baseUpdateBucketRequest } as UpdateBucketRequest;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    message.anonymousAccessFlags =
      object.anonymousAccessFlags !== undefined &&
      object.anonymousAccessFlags !== null
        ? AnonymousAccessFlags.fromJSON(object.anonymousAccessFlags)
        : undefined;
    message.defaultStorageClass =
      object.defaultStorageClass !== undefined &&
      object.defaultStorageClass !== null
        ? String(object.defaultStorageClass)
        : "";
    message.maxSize =
      object.maxSize !== undefined && object.maxSize !== null
        ? Number(object.maxSize)
        : 0;
    message.cors = (object.cors ?? []).map((e: any) => CorsRule.fromJSON(e));
    message.websiteSettings =
      object.websiteSettings !== undefined && object.websiteSettings !== null
        ? WebsiteSettings.fromJSON(object.websiteSettings)
        : undefined;
    message.versioning =
      object.versioning !== undefined && object.versioning !== null
        ? versioningFromJSON(object.versioning)
        : 0;
    message.lifecycleRules = (object.lifecycleRules ?? []).map((e: any) =>
      LifecycleRule.fromJSON(e)
    );
    message.policy =
      typeof object.policy === "object" ? object.policy : undefined;
    message.acl =
      object.acl !== undefined && object.acl !== null
        ? ACL.fromJSON(object.acl)
        : undefined;
    message.tags = (object.tags ?? []).map((e: any) => Tag.fromJSON(e));
    message.objectLock =
      object.objectLock !== undefined && object.objectLock !== null
        ? ObjectLock.fromJSON(object.objectLock)
        : undefined;
    message.encryption =
      object.encryption !== undefined && object.encryption !== null
        ? Encryption.fromJSON(object.encryption)
        : undefined;
    return message;
  },

  toJSON(message: UpdateBucketRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.anonymousAccessFlags !== undefined &&
      (obj.anonymousAccessFlags = message.anonymousAccessFlags
        ? AnonymousAccessFlags.toJSON(message.anonymousAccessFlags)
        : undefined);
    message.defaultStorageClass !== undefined &&
      (obj.defaultStorageClass = message.defaultStorageClass);
    message.maxSize !== undefined &&
      (obj.maxSize = Math.round(message.maxSize));
    if (message.cors) {
      obj.cors = message.cors.map((e) => (e ? CorsRule.toJSON(e) : undefined));
    } else {
      obj.cors = [];
    }
    message.websiteSettings !== undefined &&
      (obj.websiteSettings = message.websiteSettings
        ? WebsiteSettings.toJSON(message.websiteSettings)
        : undefined);
    message.versioning !== undefined &&
      (obj.versioning = versioningToJSON(message.versioning));
    if (message.lifecycleRules) {
      obj.lifecycleRules = message.lifecycleRules.map((e) =>
        e ? LifecycleRule.toJSON(e) : undefined
      );
    } else {
      obj.lifecycleRules = [];
    }
    message.policy !== undefined && (obj.policy = message.policy);
    message.acl !== undefined &&
      (obj.acl = message.acl ? ACL.toJSON(message.acl) : undefined);
    if (message.tags) {
      obj.tags = message.tags.map((e) => (e ? Tag.toJSON(e) : undefined));
    } else {
      obj.tags = [];
    }
    message.objectLock !== undefined &&
      (obj.objectLock = message.objectLock
        ? ObjectLock.toJSON(message.objectLock)
        : undefined);
    message.encryption !== undefined &&
      (obj.encryption = message.encryption
        ? Encryption.toJSON(message.encryption)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateBucketRequest>, I>>(
    object: I
  ): UpdateBucketRequest {
    const message = { ...baseUpdateBucketRequest } as UpdateBucketRequest;
    message.name = object.name ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.anonymousAccessFlags =
      object.anonymousAccessFlags !== undefined &&
      object.anonymousAccessFlags !== null
        ? AnonymousAccessFlags.fromPartial(object.anonymousAccessFlags)
        : undefined;
    message.defaultStorageClass = object.defaultStorageClass ?? "";
    message.maxSize = object.maxSize ?? 0;
    message.cors = object.cors?.map((e) => CorsRule.fromPartial(e)) || [];
    message.websiteSettings =
      object.websiteSettings !== undefined && object.websiteSettings !== null
        ? WebsiteSettings.fromPartial(object.websiteSettings)
        : undefined;
    message.versioning = object.versioning ?? 0;
    message.lifecycleRules =
      object.lifecycleRules?.map((e) => LifecycleRule.fromPartial(e)) || [];
    message.policy = object.policy ?? undefined;
    message.acl =
      object.acl !== undefined && object.acl !== null
        ? ACL.fromPartial(object.acl)
        : undefined;
    message.tags = object.tags?.map((e) => Tag.fromPartial(e)) || [];
    message.objectLock =
      object.objectLock !== undefined && object.objectLock !== null
        ? ObjectLock.fromPartial(object.objectLock)
        : undefined;
    message.encryption =
      object.encryption !== undefined && object.encryption !== null
        ? Encryption.fromPartial(object.encryption)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateBucketRequest.$type, UpdateBucketRequest);

const baseUpdateBucketMetadata: object = {
  $type: "yandex.cloud.storage.v1.UpdateBucketMetadata",
  name: "",
};

export const UpdateBucketMetadata = {
  $type: "yandex.cloud.storage.v1.UpdateBucketMetadata" as const,

  encode(
    message: UpdateBucketMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateBucketMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateBucketMetadata } as UpdateBucketMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateBucketMetadata {
    const message = { ...baseUpdateBucketMetadata } as UpdateBucketMetadata;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: UpdateBucketMetadata): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateBucketMetadata>, I>>(
    object: I
  ): UpdateBucketMetadata {
    const message = { ...baseUpdateBucketMetadata } as UpdateBucketMetadata;
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateBucketMetadata.$type, UpdateBucketMetadata);

const baseDeleteBucketRequest: object = {
  $type: "yandex.cloud.storage.v1.DeleteBucketRequest",
  name: "",
};

export const DeleteBucketRequest = {
  $type: "yandex.cloud.storage.v1.DeleteBucketRequest" as const,

  encode(
    message: DeleteBucketRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBucketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteBucketRequest } as DeleteBucketRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteBucketRequest {
    const message = { ...baseDeleteBucketRequest } as DeleteBucketRequest;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: DeleteBucketRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBucketRequest>, I>>(
    object: I
  ): DeleteBucketRequest {
    const message = { ...baseDeleteBucketRequest } as DeleteBucketRequest;
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteBucketRequest.$type, DeleteBucketRequest);

const baseDeleteBucketMetadata: object = {
  $type: "yandex.cloud.storage.v1.DeleteBucketMetadata",
  name: "",
};

export const DeleteBucketMetadata = {
  $type: "yandex.cloud.storage.v1.DeleteBucketMetadata" as const,

  encode(
    message: DeleteBucketMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteBucketMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteBucketMetadata } as DeleteBucketMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteBucketMetadata {
    const message = { ...baseDeleteBucketMetadata } as DeleteBucketMetadata;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: DeleteBucketMetadata): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBucketMetadata>, I>>(
    object: I
  ): DeleteBucketMetadata {
    const message = { ...baseDeleteBucketMetadata } as DeleteBucketMetadata;
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteBucketMetadata.$type, DeleteBucketMetadata);

const baseGetBucketStatsRequest: object = {
  $type: "yandex.cloud.storage.v1.GetBucketStatsRequest",
  name: "",
};

export const GetBucketStatsRequest = {
  $type: "yandex.cloud.storage.v1.GetBucketStatsRequest" as const,

  encode(
    message: GetBucketStatsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetBucketStatsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetBucketStatsRequest } as GetBucketStatsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBucketStatsRequest {
    const message = { ...baseGetBucketStatsRequest } as GetBucketStatsRequest;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: GetBucketStatsRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBucketStatsRequest>, I>>(
    object: I
  ): GetBucketStatsRequest {
    const message = { ...baseGetBucketStatsRequest } as GetBucketStatsRequest;
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetBucketStatsRequest.$type, GetBucketStatsRequest);

const baseGetBucketHTTPSConfigRequest: object = {
  $type: "yandex.cloud.storage.v1.GetBucketHTTPSConfigRequest",
  name: "",
};

export const GetBucketHTTPSConfigRequest = {
  $type: "yandex.cloud.storage.v1.GetBucketHTTPSConfigRequest" as const,

  encode(
    message: GetBucketHTTPSConfigRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetBucketHTTPSConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetBucketHTTPSConfigRequest,
    } as GetBucketHTTPSConfigRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBucketHTTPSConfigRequest {
    const message = {
      ...baseGetBucketHTTPSConfigRequest,
    } as GetBucketHTTPSConfigRequest;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: GetBucketHTTPSConfigRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBucketHTTPSConfigRequest>, I>>(
    object: I
  ): GetBucketHTTPSConfigRequest {
    const message = {
      ...baseGetBucketHTTPSConfigRequest,
    } as GetBucketHTTPSConfigRequest;
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  GetBucketHTTPSConfigRequest.$type,
  GetBucketHTTPSConfigRequest
);

const baseSelfManagedHTTPSConfigParams: object = {
  $type: "yandex.cloud.storage.v1.SelfManagedHTTPSConfigParams",
  certificatePem: "",
  privateKeyPem: "",
};

export const SelfManagedHTTPSConfigParams = {
  $type: "yandex.cloud.storage.v1.SelfManagedHTTPSConfigParams" as const,

  encode(
    message: SelfManagedHTTPSConfigParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.certificatePem !== "") {
      writer.uint32(10).string(message.certificatePem);
    }
    if (message.privateKeyPem !== "") {
      writer.uint32(18).string(message.privateKeyPem);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SelfManagedHTTPSConfigParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSelfManagedHTTPSConfigParams,
    } as SelfManagedHTTPSConfigParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificatePem = reader.string();
          break;
        case 2:
          message.privateKeyPem = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SelfManagedHTTPSConfigParams {
    const message = {
      ...baseSelfManagedHTTPSConfigParams,
    } as SelfManagedHTTPSConfigParams;
    message.certificatePem =
      object.certificatePem !== undefined && object.certificatePem !== null
        ? String(object.certificatePem)
        : "";
    message.privateKeyPem =
      object.privateKeyPem !== undefined && object.privateKeyPem !== null
        ? String(object.privateKeyPem)
        : "";
    return message;
  },

  toJSON(message: SelfManagedHTTPSConfigParams): unknown {
    const obj: any = {};
    message.certificatePem !== undefined &&
      (obj.certificatePem = message.certificatePem);
    message.privateKeyPem !== undefined &&
      (obj.privateKeyPem = message.privateKeyPem);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SelfManagedHTTPSConfigParams>, I>>(
    object: I
  ): SelfManagedHTTPSConfigParams {
    const message = {
      ...baseSelfManagedHTTPSConfigParams,
    } as SelfManagedHTTPSConfigParams;
    message.certificatePem = object.certificatePem ?? "";
    message.privateKeyPem = object.privateKeyPem ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  SelfManagedHTTPSConfigParams.$type,
  SelfManagedHTTPSConfigParams
);

const baseCertificateManagerHTTPSConfigParams: object = {
  $type: "yandex.cloud.storage.v1.CertificateManagerHTTPSConfigParams",
  certificateId: "",
};

export const CertificateManagerHTTPSConfigParams = {
  $type: "yandex.cloud.storage.v1.CertificateManagerHTTPSConfigParams" as const,

  encode(
    message: CertificateManagerHTTPSConfigParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.certificateId !== "") {
      writer.uint32(10).string(message.certificateId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CertificateManagerHTTPSConfigParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCertificateManagerHTTPSConfigParams,
    } as CertificateManagerHTTPSConfigParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificateId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CertificateManagerHTTPSConfigParams {
    const message = {
      ...baseCertificateManagerHTTPSConfigParams,
    } as CertificateManagerHTTPSConfigParams;
    message.certificateId =
      object.certificateId !== undefined && object.certificateId !== null
        ? String(object.certificateId)
        : "";
    return message;
  },

  toJSON(message: CertificateManagerHTTPSConfigParams): unknown {
    const obj: any = {};
    message.certificateId !== undefined &&
      (obj.certificateId = message.certificateId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CertificateManagerHTTPSConfigParams>, I>
  >(object: I): CertificateManagerHTTPSConfigParams {
    const message = {
      ...baseCertificateManagerHTTPSConfigParams,
    } as CertificateManagerHTTPSConfigParams;
    message.certificateId = object.certificateId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CertificateManagerHTTPSConfigParams.$type,
  CertificateManagerHTTPSConfigParams
);

const baseSetBucketHTTPSConfigRequest: object = {
  $type: "yandex.cloud.storage.v1.SetBucketHTTPSConfigRequest",
  name: "",
};

export const SetBucketHTTPSConfigRequest = {
  $type: "yandex.cloud.storage.v1.SetBucketHTTPSConfigRequest" as const,

  encode(
    message: SetBucketHTTPSConfigRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.selfManaged !== undefined) {
      SelfManagedHTTPSConfigParams.encode(
        message.selfManaged,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.certificateManager !== undefined) {
      CertificateManagerHTTPSConfigParams.encode(
        message.certificateManager,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetBucketHTTPSConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetBucketHTTPSConfigRequest,
    } as SetBucketHTTPSConfigRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.selfManaged = SelfManagedHTTPSConfigParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.certificateManager =
            CertificateManagerHTTPSConfigParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetBucketHTTPSConfigRequest {
    const message = {
      ...baseSetBucketHTTPSConfigRequest,
    } as SetBucketHTTPSConfigRequest;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.selfManaged =
      object.selfManaged !== undefined && object.selfManaged !== null
        ? SelfManagedHTTPSConfigParams.fromJSON(object.selfManaged)
        : undefined;
    message.certificateManager =
      object.certificateManager !== undefined &&
      object.certificateManager !== null
        ? CertificateManagerHTTPSConfigParams.fromJSON(
            object.certificateManager
          )
        : undefined;
    return message;
  },

  toJSON(message: SetBucketHTTPSConfigRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.selfManaged !== undefined &&
      (obj.selfManaged = message.selfManaged
        ? SelfManagedHTTPSConfigParams.toJSON(message.selfManaged)
        : undefined);
    message.certificateManager !== undefined &&
      (obj.certificateManager = message.certificateManager
        ? CertificateManagerHTTPSConfigParams.toJSON(message.certificateManager)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetBucketHTTPSConfigRequest>, I>>(
    object: I
  ): SetBucketHTTPSConfigRequest {
    const message = {
      ...baseSetBucketHTTPSConfigRequest,
    } as SetBucketHTTPSConfigRequest;
    message.name = object.name ?? "";
    message.selfManaged =
      object.selfManaged !== undefined && object.selfManaged !== null
        ? SelfManagedHTTPSConfigParams.fromPartial(object.selfManaged)
        : undefined;
    message.certificateManager =
      object.certificateManager !== undefined &&
      object.certificateManager !== null
        ? CertificateManagerHTTPSConfigParams.fromPartial(
            object.certificateManager
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  SetBucketHTTPSConfigRequest.$type,
  SetBucketHTTPSConfigRequest
);

const baseSetBucketHTTPSConfigMetadata: object = {
  $type: "yandex.cloud.storage.v1.SetBucketHTTPSConfigMetadata",
  name: "",
};

export const SetBucketHTTPSConfigMetadata = {
  $type: "yandex.cloud.storage.v1.SetBucketHTTPSConfigMetadata" as const,

  encode(
    message: SetBucketHTTPSConfigMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetBucketHTTPSConfigMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetBucketHTTPSConfigMetadata,
    } as SetBucketHTTPSConfigMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetBucketHTTPSConfigMetadata {
    const message = {
      ...baseSetBucketHTTPSConfigMetadata,
    } as SetBucketHTTPSConfigMetadata;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: SetBucketHTTPSConfigMetadata): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetBucketHTTPSConfigMetadata>, I>>(
    object: I
  ): SetBucketHTTPSConfigMetadata {
    const message = {
      ...baseSetBucketHTTPSConfigMetadata,
    } as SetBucketHTTPSConfigMetadata;
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  SetBucketHTTPSConfigMetadata.$type,
  SetBucketHTTPSConfigMetadata
);

const baseDeleteBucketHTTPSConfigRequest: object = {
  $type: "yandex.cloud.storage.v1.DeleteBucketHTTPSConfigRequest",
  name: "",
};

export const DeleteBucketHTTPSConfigRequest = {
  $type: "yandex.cloud.storage.v1.DeleteBucketHTTPSConfigRequest" as const,

  encode(
    message: DeleteBucketHTTPSConfigRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteBucketHTTPSConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteBucketHTTPSConfigRequest,
    } as DeleteBucketHTTPSConfigRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteBucketHTTPSConfigRequest {
    const message = {
      ...baseDeleteBucketHTTPSConfigRequest,
    } as DeleteBucketHTTPSConfigRequest;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: DeleteBucketHTTPSConfigRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBucketHTTPSConfigRequest>, I>>(
    object: I
  ): DeleteBucketHTTPSConfigRequest {
    const message = {
      ...baseDeleteBucketHTTPSConfigRequest,
    } as DeleteBucketHTTPSConfigRequest;
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteBucketHTTPSConfigRequest.$type,
  DeleteBucketHTTPSConfigRequest
);

const baseDeleteBucketHTTPSConfigMetadata: object = {
  $type: "yandex.cloud.storage.v1.DeleteBucketHTTPSConfigMetadata",
  name: "",
};

export const DeleteBucketHTTPSConfigMetadata = {
  $type: "yandex.cloud.storage.v1.DeleteBucketHTTPSConfigMetadata" as const,

  encode(
    message: DeleteBucketHTTPSConfigMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteBucketHTTPSConfigMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteBucketHTTPSConfigMetadata,
    } as DeleteBucketHTTPSConfigMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteBucketHTTPSConfigMetadata {
    const message = {
      ...baseDeleteBucketHTTPSConfigMetadata,
    } as DeleteBucketHTTPSConfigMetadata;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: DeleteBucketHTTPSConfigMetadata): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBucketHTTPSConfigMetadata>, I>>(
    object: I
  ): DeleteBucketHTTPSConfigMetadata {
    const message = {
      ...baseDeleteBucketHTTPSConfigMetadata,
    } as DeleteBucketHTTPSConfigMetadata;
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteBucketHTTPSConfigMetadata.$type,
  DeleteBucketHTTPSConfigMetadata
);

/** A set of methods for managing buckets. */
export const BucketServiceService = {
  /**
   * Retrieves the list of buckets in the specified folder.
   *
   * The following fields will not be returned for buckets in the list: [Bucket.policy], [Bucket.acl], [Bucket.cors],
   * [Bucket.website_settings], [Bucket.lifecycle_rules], [Bucket.tags].
   */
  list: {
    path: "/yandex.cloud.storage.v1.BucketService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListBucketsRequest) =>
      Buffer.from(ListBucketsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListBucketsRequest.decode(value),
    responseSerialize: (value: ListBucketsResponse) =>
      Buffer.from(ListBucketsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListBucketsResponse.decode(value),
  },
  /**
   * Returns the specified bucket.
   *
   * To get the list of all available buckets, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.storage.v1.BucketService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetBucketRequest) =>
      Buffer.from(GetBucketRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetBucketRequest.decode(value),
    responseSerialize: (value: Bucket) =>
      Buffer.from(Bucket.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Bucket.decode(value),
  },
  /** Creates a bucket in the specified folder. */
  create: {
    path: "/yandex.cloud.storage.v1.BucketService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateBucketRequest) =>
      Buffer.from(CreateBucketRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateBucketRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Updates the specified bucket.
   *
   * In most cases, `storage.editor` role (see [documentation](/docs/storage/security/#storage-editor)) should be enough
   * to update a bucket, subject to its [policy](/docs/storage/concepts/policy).
   */
  update: {
    path: "/yandex.cloud.storage.v1.BucketService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateBucketRequest) =>
      Buffer.from(UpdateBucketRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateBucketRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified bucket. */
  delete: {
    path: "/yandex.cloud.storage.v1.BucketService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteBucketRequest) =>
      Buffer.from(DeleteBucketRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteBucketRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns the statistics for the specified bucket. */
  getStats: {
    path: "/yandex.cloud.storage.v1.BucketService/GetStats",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetBucketStatsRequest) =>
      Buffer.from(GetBucketStatsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetBucketStatsRequest.decode(value),
    responseSerialize: (value: BucketStats) =>
      Buffer.from(BucketStats.encode(value).finish()),
    responseDeserialize: (value: Buffer) => BucketStats.decode(value),
  },
  /** Returns the HTTPS configuration for the specified bucket. */
  getHTTPSConfig: {
    path: "/yandex.cloud.storage.v1.BucketService/GetHTTPSConfig",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetBucketHTTPSConfigRequest) =>
      Buffer.from(GetBucketHTTPSConfigRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetBucketHTTPSConfigRequest.decode(value),
    responseSerialize: (value: HTTPSConfig) =>
      Buffer.from(HTTPSConfig.encode(value).finish()),
    responseDeserialize: (value: Buffer) => HTTPSConfig.decode(value),
  },
  /**
   * Updates the HTTPS configuration for the specified bucket.
   *
   * The updated configuration could take up to 30 minutes to apply to the bucket.
   */
  setHTTPSConfig: {
    path: "/yandex.cloud.storage.v1.BucketService/SetHTTPSConfig",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetBucketHTTPSConfigRequest) =>
      Buffer.from(SetBucketHTTPSConfigRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      SetBucketHTTPSConfigRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the HTTPS configuration for the specified bucket. */
  deleteHTTPSConfig: {
    path: "/yandex.cloud.storage.v1.BucketService/DeleteHTTPSConfig",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteBucketHTTPSConfigRequest) =>
      Buffer.from(DeleteBucketHTTPSConfigRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteBucketHTTPSConfigRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface BucketServiceServer extends UntypedServiceImplementation {
  /**
   * Retrieves the list of buckets in the specified folder.
   *
   * The following fields will not be returned for buckets in the list: [Bucket.policy], [Bucket.acl], [Bucket.cors],
   * [Bucket.website_settings], [Bucket.lifecycle_rules], [Bucket.tags].
   */
  list: handleUnaryCall<ListBucketsRequest, ListBucketsResponse>;
  /**
   * Returns the specified bucket.
   *
   * To get the list of all available buckets, make a [List] request.
   */
  get: handleUnaryCall<GetBucketRequest, Bucket>;
  /** Creates a bucket in the specified folder. */
  create: handleUnaryCall<CreateBucketRequest, Operation>;
  /**
   * Updates the specified bucket.
   *
   * In most cases, `storage.editor` role (see [documentation](/docs/storage/security/#storage-editor)) should be enough
   * to update a bucket, subject to its [policy](/docs/storage/concepts/policy).
   */
  update: handleUnaryCall<UpdateBucketRequest, Operation>;
  /** Deletes the specified bucket. */
  delete: handleUnaryCall<DeleteBucketRequest, Operation>;
  /** Returns the statistics for the specified bucket. */
  getStats: handleUnaryCall<GetBucketStatsRequest, BucketStats>;
  /** Returns the HTTPS configuration for the specified bucket. */
  getHTTPSConfig: handleUnaryCall<GetBucketHTTPSConfigRequest, HTTPSConfig>;
  /**
   * Updates the HTTPS configuration for the specified bucket.
   *
   * The updated configuration could take up to 30 minutes to apply to the bucket.
   */
  setHTTPSConfig: handleUnaryCall<SetBucketHTTPSConfigRequest, Operation>;
  /** Deletes the HTTPS configuration for the specified bucket. */
  deleteHTTPSConfig: handleUnaryCall<DeleteBucketHTTPSConfigRequest, Operation>;
}

export interface BucketServiceClient extends Client {
  /**
   * Retrieves the list of buckets in the specified folder.
   *
   * The following fields will not be returned for buckets in the list: [Bucket.policy], [Bucket.acl], [Bucket.cors],
   * [Bucket.website_settings], [Bucket.lifecycle_rules], [Bucket.tags].
   */
  list(
    request: ListBucketsRequest,
    callback: (
      error: ServiceError | null,
      response: ListBucketsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListBucketsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListBucketsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListBucketsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListBucketsResponse
    ) => void
  ): ClientUnaryCall;
  /**
   * Returns the specified bucket.
   *
   * To get the list of all available buckets, make a [List] request.
   */
  get(
    request: GetBucketRequest,
    callback: (error: ServiceError | null, response: Bucket) => void
  ): ClientUnaryCall;
  get(
    request: GetBucketRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Bucket) => void
  ): ClientUnaryCall;
  get(
    request: GetBucketRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Bucket) => void
  ): ClientUnaryCall;
  /** Creates a bucket in the specified folder. */
  create(
    request: CreateBucketRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateBucketRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateBucketRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Updates the specified bucket.
   *
   * In most cases, `storage.editor` role (see [documentation](/docs/storage/security/#storage-editor)) should be enough
   * to update a bucket, subject to its [policy](/docs/storage/concepts/policy).
   */
  update(
    request: UpdateBucketRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateBucketRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateBucketRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified bucket. */
  delete(
    request: DeleteBucketRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteBucketRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteBucketRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Returns the statistics for the specified bucket. */
  getStats(
    request: GetBucketStatsRequest,
    callback: (error: ServiceError | null, response: BucketStats) => void
  ): ClientUnaryCall;
  getStats(
    request: GetBucketStatsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: BucketStats) => void
  ): ClientUnaryCall;
  getStats(
    request: GetBucketStatsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: BucketStats) => void
  ): ClientUnaryCall;
  /** Returns the HTTPS configuration for the specified bucket. */
  getHTTPSConfig(
    request: GetBucketHTTPSConfigRequest,
    callback: (error: ServiceError | null, response: HTTPSConfig) => void
  ): ClientUnaryCall;
  getHTTPSConfig(
    request: GetBucketHTTPSConfigRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: HTTPSConfig) => void
  ): ClientUnaryCall;
  getHTTPSConfig(
    request: GetBucketHTTPSConfigRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: HTTPSConfig) => void
  ): ClientUnaryCall;
  /**
   * Updates the HTTPS configuration for the specified bucket.
   *
   * The updated configuration could take up to 30 minutes to apply to the bucket.
   */
  setHTTPSConfig(
    request: SetBucketHTTPSConfigRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  setHTTPSConfig(
    request: SetBucketHTTPSConfigRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  setHTTPSConfig(
    request: SetBucketHTTPSConfigRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the HTTPS configuration for the specified bucket. */
  deleteHTTPSConfig(
    request: DeleteBucketHTTPSConfigRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteHTTPSConfig(
    request: DeleteBucketHTTPSConfigRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteHTTPSConfig(
    request: DeleteBucketHTTPSConfigRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const BucketServiceClient = makeGenericClientConstructor(
  BucketServiceService,
  "yandex.cloud.storage.v1.BucketService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): BucketServiceClient;
  service: typeof BucketServiceService;
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
